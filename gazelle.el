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

(defvar gz:gazelle-current-project nil)
(defun gz:set-gazelle-current-project (f)
  (interactive "fPlease enter your project's entry point.")
  (setq gz:gazelle-current-project f))

(defun gz:get-gazelle-current-project ()
  (if gz:gazelle-current-project gz:gazelle-current-project
	(progn 
	  (call-interactively #'gz:set-gazelle-current-project)
	  gz:gazelle-current-project)))

(defun* gz:transcode-file (filename  
						   &optional 
						   (out-file (gz:gazelle-file->js-file filename)))
  (let ((file-visited 
		 (find-buffer-visiting out-file))
		(file-directory (gzu:get-file-directory filename))
		(proper:short-term-checked-modules 
		 (make-hash-table :test 'equal)))
	(with-temp-buffer
	  (delete-region (point-min)
					 (point-max))
	  (gzu:with-pwd file-directory 
					(prim:transcode
					 (proper:to-prim 
					  `(_newline-sequence ,@(gzu:read-file filename)))))
	  (write-region (point-min) (point-max) out-file))
	(if file-visited
		(with-current-buffer file-visited
		  (revert-buffer)))
	out-file))

(defun* gz:transcode-this-file ()
  (interactive)
  (let ((filename (buffer-file-name (current-buffer)))
		(proper:short-term-checked-modules (make-hash-table :test 'equal)))
	(gz:transcode-file filename)))

(defun* gz:transcode-current-project ()
  (interactive)
  (let ((filename (gz:get-gazelle-current-project))
		(proper:short-term-checked-modules (make-hash-table :test 'equal)))
	(gz:transcode-file filename)))


(defun gz:set-project-directory (d)
  (interactive "DPlease enter your project's scripts directory.")
  (setq proper:*rjs-root* d))

; test
; (gz:transcode-file "/home/toups/src/elisp/gazelle/scripts/main.gazelle")

(eval-when (load compile eval) 
  (defconst gazelle-font-lock-keywords
	`((,(regexp-opt '("defined" "_defined" "undefined" "_undefined" "null" "_null" "{}" "_{}") 'words) . font-lock-builtin-face)
	  ( ":[-0-9a-zA-Z!@$%^&*+]*" . font-lock-constant-face)
	  (,(regexp-quote "set!") . font-lock-builtin-face)
	  (,(regexp-opt '("_in" "_while" "_for" "_function" "_if" "_else" "_error" "_throw" "_try" "_catch" "_finally" "_var" 
					  "_=" "_===" "_==" "_."  
					  "in" "while" "for" "function" "if" "else" "error" "throw" "try" "catch" "finally" "var"
					  "=" "===" "==" "require" "node-require" "module" "set!"
					  ".." "for*") 'words)
	   . font-lock-builtin-face)
	  ( ":[-0-9a-zA-Z!@$%^&*+]*" . font-lock-constant-face)
	  ("def[-0-9a-zA-Z!@$%^&*+]*" . font-lock-keyword-face)
	  ("lambda" . font-lock-keyword-face)
	  ("match" . font-lock-keyword-face))
	"Highlighting expressions for gazelle mode.")
  (defconst gazelle-syntax-table (make-syntax-table emacs-lisp-mode-syntax-table))
  (modify-syntax-entry ?\{ "(}" gazelle-syntax-table)
  (modify-syntax-entry ?\} "){" gazelle-syntax-table)
  (define-derived-mode gazelle-mode
	emacs-lisp-mode "Gazelle"
	"Major mode for Gazelle."
	:syntax-table gazelle-syntax-table
	(setq case-fold-search nil)
	(set (make-local-variable 'font-lock-defaults) '(gazelle-font-lock-keywords nil t)))

  

  (push '("\\.gazelle" . (lambda () 
						   (gazelle-mode)
						   (define-key gazelle-mode-map 
							 "\C-c\C-k" 'gz:transcode-this-file)
						   (define-key gazelle-mode-map 
							 "\C-c\C-l" 'gz:transcode-current-project))) 
		auto-mode-alist))





