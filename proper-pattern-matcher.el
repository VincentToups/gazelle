(defvar proper:match-fail-val "match-fail-e1aa3b7e7ce9731266013c178de842b5")

(eval-when (load compile eval)
  (defpattern proper:atom (&optional (pattern (gensym)))
	`(or (keyword ,pattern)
		 (number ,pattern)
		 (string ,pattern))))

(defun-match- proper:expand-match1-body ((non-kw-symbol s) val body acc)
  (append acc 
		  `((_var ,s ,val)
			,@body)))

(defun-match proper:expand-match1-body ((proper:atom a) val body acc)
  (append acc 
		  `((_if (_! (_=== ,a ,val))
				 ((_return ,proper:match-fail-val)))
			,@body)))

(defun-match proper:expand-match1-body ([: (tail 
											(proper:list-of-ids ids))]
										val body acc)
  (let ((n (length ids))) 
	(append acc
			`((_if (_! (_=== ,n (_. ,val length)))
				   ((_return ,proper:match-fail-val)))
			  ,@(loop for id in ids and index from 0 collect
					  `(_var ,id [,val ,index]))
			  ,@body))))

(defun proper:patterns-with-tail? (patterns)
  (and (> (length patterns) 0)
	   (let ((final-pattern (last patterns))))))

(defun-match proper:expand-match1-body ([: (tail patterns)]
										val body acc)
  (let* ((match-temps
		  (mapcar (lambda (x)
					(gensym "match-temp-"))
				  patterns))
		 (acc (append acc 
					  `((_if (_! (_=== ,(length patterns)
									   (_. ,val length)))
							 ((_return ,proper:match-fail-val)))
						,@(loop for temp in match-temps
								and i from 0 
								collect
								`(_var ,temp [,val ,i]))))))
	(loop for pattern in patterns and
		  temp in match-temps do
		  (setq acc 
				(proper:expand-match1-body pattern temp () acc)))
	(append acc body)))

(defun-match proper:expand-match1-body (pattern val-expr body)
  (let ((val (gensym "match-val-"))) 
	(recur pattern val body 
		   `(let ()
			  (_var ,val ,val-expr)))))




(let nil
  (_var match-val-85333 [: x y z])
  (_if (_! (_=== 3 (_\. match-val-85333 length)))
	   ((_return "match-fail-e1aa3b7e7ce9731266013c178de842b5")))
  (_var a [match-val-85333 0])
  (_var b [match-val-85333 1])
  (_var c [match-val-85333 2])
  x)







;; (proper:define-macro 
;;  match1 (pattern vexpr (tail body))
;;  (let*  ((value (gensym))
;; 		 (acc-body `(let ()
;; 					  (_var ,value ,vexpr))))
;;    (match1+ ,pattern ,value ,body ,acc-body)))