(eval-when (load compile eval)
  (push (file-truename ".") load-path))

(defun bc-load (file)
  (with-current-buffer (find-file-noselect (file-truename file))
	(emacs-lisp-byte-compile-and-load)))

(sh "rm *.elc")
(bc-load "gazelle-utils.el")
(bc-load "prim.el")
(bc-load "proper.el")
(bc-load "gazelle.el")

(defmacro* dont-do (&body body)
  nil)

(eval-when (load compile eval) 
  (define-derived-mode gazelle-mode
	emacs-lisp-mode "Gazelle"
	"Major mode for Gazelle."
	(setq case-fold-search nil))

  

  (push '("\\.gazelle" . (lambda () 
						   (gazelle-mode)
						   (define-key gazelle-mode-map 
							 "\C-c\C-k" 'gz:transcode-this-file))) 
		auto-mode-alist))

(defun scratch:tc (e)
  (prim:transcode 
   (proper:to-prim e)))


