(eval-when (load compile eval)
  (require 'shadchen))

(defun gzu:suffix (item seq)
  (append seq (list item)))

(defun gzu:read-file-as-string (filename)
  (let* ((open-already (find-buffer-visiting (file-truename filename)))
		 (buffer (if open-already open-already
				   (find-file-noselect (file-truename filename)))))
	(prog1 
		(with-current-buffer buffer 
		  (buffer-substring-no-properties (point-min) (point-max)))
	  (when (not open-already)
		(kill-buffer buffer)))))

(defun gzu:chomp (str)
  "Perl-like chomp function to return a version of STR with no whitespace."
  (let ((s (if (symbolp str)(symbol-name str) str)))
	(save-excursion
	  (while (and
			  (not (null (string-match "^\\( \\|\f\\|\t\\|\n\\)" s)))
			  (> (length s) (string-match "^\\( \\|\f\\|\t\\|\n\\)" s)))
		(setq s (replace-match "" t nil s)))
	  (while (and
			  (not (null (string-match "\\( \\|\f\\|\t\\|\n\\)$" s)))
			  (> (length s) (string-match "\\( \\|\f\\|\t\\|\n\\)$" s)))
		(setq s (replace-match "" t nil s))))
	s))

(defun* gzu:read-from-string (s &optional (error-on-fail t))
  (match (condition-case nil
			 (read-from-string s)
		   (error :failed))
		 ((cons object-read final-string-index)
		  (cons object-read (gzu:chomp (substring s final-string-index))))
		 (anything-else
		  (if error-on-fail
			  (error "Could not read an s-expression from string '%s'" s)
			nil))))


(defun-match- gzu:filter (f (list) acc)
  (reverse acc))
(defun-match gzu:filter (f (list hd (tail tl)) acc)
  (if (funcall f hd)
	  (recur f tl (cons hd acc))
	(recur f tl acc)))
(defun-match gzu:filter (f (p #'listp lst))
  (recur f lst nil))

(defun gzu:emptyish-string-p (s)
  (and (stringp s)
	   (string= (gzu:chomp s) "")))

(defun gzu:not-emptyish-string-p (s)
  (not (gzu:emptyish-string-p s)))

(defun-match- gzu:join ((list) joiner acc)
  acc)
(defun-match gzu:join ((list singleton) joiner)
  singleton)
(defun-match gzu:join ((list) joiner)
  "")
(defun-match gzu:join ((list hd)
					   joiner
					   acc)
  (concat acc hd))
(defun-match gzu:join ((list hd (tail tl))
					   joiner
					   acc)
  (recur tl joiner (concat acc hd joiner)))
(defun-match gzu:join ((list (tail contents)))
  (recur contents ", " ""))

(defun-match gzu:join ((list (tail contents)) (string joiner))
  (recur contents joiner ""))

(defun gzu:kill-leading-comment (s)
  (let* ((s (gzu:chomp s))
		 (parts (split-string s (format "\n"))))
	(join (filter #'gzu:not-emptyish-string-p
				  (cons (replace-regexp-in-string "^;[^\n]*" "" (car parts))
						(cdr parts)))
		  (format "\n"))))

(defun gzu:kill-leading-comments (s)
  (let ((s* (gzu:kill-leading-comment s)))
	(loop while (not (string= s* s)) do
		  (setq s s*)
		  (setq s* (gzu:kill-leading-comment s)))
	s*))


(defun* gzu:maybe-read-from-string (s)
  (let ((s (gzu:kill-leading-comments s)))
	(if (not (string= "" s)) 
		(match (condition-case nil
				   (read-from-string s)
				 (error (list :failed s)))
			   ((list :failed s)
				(None (list :failed s)))
			   ((cons object-read final-string-index)
				(Just (cons object-read (gzu:chomp 
										 (gzu:kill-leading-comments (substring s final-string-index))))))
			   (anything-else
				(None (list :unexpected-value anything-else s))))
	  (None :done))))

(defun-match- gzu:maybe-read-sexps-from-string (s)
  (recur s nil))
(defun-match gzu:maybe-read-sexps-from-string (s acc)
  (match (gzu:maybe-read-from-string s)
		 ((Just (cons object ""))
		  (Just (reverse (cons object acc))))
		 ((Just (cons object rest-of-string))
		  (recur rest-of-string (cons object acc)))
		 ((None :done)
		  (reverse acc))
		 ((None read-from-string-reason)
		  (None (list :read-from-string-failed (reverse acc) read-from-string-reason)))))

(defun gzu:read-file (filename)
  (let* ((open-already (find-buffer-visiting (file-truename filename)))
		 (buffer (if open-already open-already 
				   (find-file-noselect (file-truename filename))))
		 (string-contents
		  (with-current-buffer buffer
			(buffer-substring-no-properties (point-min) (point-max)))))
	(match (gzu:maybe-read-sexps-from-string string-contents)
		   ((Just s-expressions)
			s-expressions)
		   ((None (list _ read-sexpressions read-from-string-reason))
			(error "Error reading file %s, last s-expression was %S and read-from-string error was %S"
				   filename (car (last read-sexpressions)) read-from-string-reason)))))

(defun-match gzu:alist-lookup (key nil)
  nil)
(defun-match gzu:alist-lookup (key (list (cons (equal key) val) (tail rest)))
  val)
(defun-match gzu:alist-lookup (key (list (cons (not-equal key) _) (tail rest)))
  (recur key rest))

(defmacro* gzu:with-file-buffer-maybe-open ((file &key (save nil)) &body body)
  (let ((buffer-already-open (gensym))
		(buffer (gensym))
		(file-val (gensym))
		(body-val (gensym))
		(save-val (gensym)))
	`(let* ((,file-val ,file)
			(,save-val ,save)
			(,buffer-already-open (find-buffer-visiting ,file-val))
			(,buffer (find-file-noselect ,file-val))
			(,body-val 
			 (with-current-buffer ,buffer
			   (let ((,body-val (progn ,@body)))
				 (when ,save-val (save-buffer))
				 ,body-val))))
	   (if (not ,buffer-already-open)
		   (kill-buffer ,buffer))
	   ,body-val)))

(defvar gzu:use-modtime-as-hash nil)
(setq gzu:use-modtime-as-hash t)
(defun gzu:file-hash (file)
  (if gzu:use-modtime-as-hash
	  (format "%S" (gzu:file-last-modified file))
	(gzu:with-file-buffer-maybe-open 
	 (file :save nil)
	 (md5 (buffer-substring (point-min)
							(point-max))))))

(defun gzu:hash-table-keys (tbl)
  (let ((keys '()))
	(maphash (lambda (k v) (push k keys)) tbl)
	(reverse keys)))

(defun-match- gzu:any-satisfy (f nil)
  nil)
(defun-match gzu:any-satisfy (f (list hd (tail tl)))
  (if (funcall f hd) t
	(recur f tl)))

(defun-match- gzu:flatten (nil acc)
  acc)
(defun-match gzu:flatten ((list (p #'listp lst) (tail rest)) acc)
  (recur rest (append acc (gzu:flatten lst))))
(defun-match gzu:flatten ((list (p #'vectorp lst) (tail rest)) acc)
  (recur rest (append acc (gzu:flatten (coerce lst 'list)))))
(defun-match gzu:flatten ((list hd (tail tl)) acc)
  (recur tl (append acc (list hd))))
(defun-match gzu:flatten ((p #'listp l))
  (recur l nil))

(defun gzu:even-indexes (lst)
  (loop for item in lst and i from 0 when (= 0 (mod i 2)) collect item))

(defun gzu:odd-indexes (lst)
  (loop for item in lst and i from 0 when (not (= 0 (mod i 2))) collect item))

(defun gzu:file-last-modified (f)
  (match (file-attributes (file-truename f))
		 ((list zero one two three four modification (tail tl))
		  modification)))



(provide 'gazelle-utils)

