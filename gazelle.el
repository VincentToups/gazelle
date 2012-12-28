(eval-when (load eval compile)
  (require 'cl)  
  (require 'shadchen)
  (require 'gazelle-utils)
  (require 'prim)
  (require 'proper))

(provide 'gazelle)

(defun* gz:gazelle-file->js-file (filename)
  (let ((t1 (replace-regexp-in-string 
			 "\.gazelle$" ".js" filename)))
	(if (string= filename t1)
		(concat filename ".js")
	  t1)))

(defun* gz:transcode-file (filename  
						   &optional 
						   (out-file (gz:gazelle-file->js-file filename)))
  (let ((file-visited 
		 (find-buffer-visiting out-file))
		(out-buffer 
		 (find-file-noselect out-file)))
	(with-current-buffer out-buffer
	  (delete-region (point-min)
					 (point-max))
	  (prim:transcode
	   (proper:to-prim 
		`(_newline-sequence ,@(gzu:read-file filename))))
	  (save-buffer))
	(if (not file-visited)
		(kill-buffer out-buffer))
	out-file))

(defun* gz:transcode-this-file ()
  (interactive)
  (let ((filename (buffer-file-name (current-buffer))))
	(gz:transcode-file filename)))


(defun gz:set-project-directory (d)
  (interactive "DPlease enter your project's scripts directory.")
  (setq proper:*rjs-root* d))
