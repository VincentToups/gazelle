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
	   (let ((final-pattern (car (last patterns))))
		 (and (listp final-pattern)
			  (= 2 (length final-pattern))
			  (eq (car final-pattern) 'tail)))))

(defun proper:all-but-last (lst)
  (reverse (cdr (reverse lst))))

(defun-match proper:expand-match1-body ((list 'defined sub-pattern)
										val body acc)
  (let ((acc (append acc
					 `((_if (_=== "undefined" (_typeof ,val))
							((_return ,proper:match-fail-val)))))))
	(proper:expand-match1-body sub-pattern val body acc)))

(defun-match proper:expand-match1-body ((list 'undefined sub-pattern)
										val body acc)
  (let ((acc (append acc
					 `((_if (_! (_=== "undefined" (_typeof ,val)))
							((_return ,proper:match-fail-val)))))))
	(proper:expand-match1-body sub-pattern val body acc)))

(defun-match proper:expand-match1-body ((list 'quote expr)
										val body acc)
  (proper:expand-match1-body (prim:transcode->string (proper:to-prim expr))
							 val body acc))

(defun-match proper:expand-match1-body ([: (tail patterns)]
										val body acc)
  (cond 
   ((not (proper:patterns-with-tail? patterns))
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
   ((proper:patterns-with-tail? patterns)
	(let*
		((normal-patterns (proper:all-but-last patterns))
		 (n-normal (length normal-patterns))
		 (tail-pattern (cadr (car (last patterns))))
		 (simple-part-name (gensym "match-array-simple-part-"))
		 (acc (append acc 
					  `((_if (_! (_>= (_. ,val length) ,n-normal))
							 ((_return ,proper:match-fail-val)))
						(_var ,simple-part-name (Array.prototype.slice.call ,val 0 ,n-normal)))))
		 (acc (proper:expand-match1-body `[: ,@normal-patterns] simple-part-name nil
										 acc))
		 (tail-name (gensym "match-array-tail-part-"))
		 (acc (append acc 
					  `((_var ,tail-name (Array.prototype.slice.call ,val ,n-normal)))))
		 (acc (proper:expand-match1-body tail-pattern tail-name body acc)))
	  acc))))

(defun-match proper:expand-match1-body ((list (or '{} '_{})
											  (tail (! (proper:{}-tail symbols patterns))))
										val body acc)
  (cond 
   ((proper:all-satisfy #'proper:non-kw-symbol patterns)
	;;simple case
	(append acc 
			`(,@(loop for s in symbols and p in patterns append 
					  `((_var ,p (_. ,val s))
						(_if (_=== "undefined" (_typeof ,p))
							 ((_return ,proper:match-fail-val)))))
			  ,@body)))
   (:otherwise 
	(let ((temps (mapcar (lambda (x) 
						   (gensym "match-object-temp-"))
						 patterns)))
	  (loop for 
			symbol in symbols and
			temp in temps and
			pattern in patterns do
			(let ((new-acc (append acc
								   `((_var ,temp (_. ,val ,symbol))
									 (_if (_=== "undefined" (_typeof ,temp))
										  ((_return ,proper:match-fail-val)))))))
			  (setq acc 
					(proper:expand-match1-body pattern temp nil new-acc))))
	  (append acc body)))))


(defun-match proper:expand-match1-body (pattern val-expr body)
  (let ((val (gensym "match-val-"))) 
	(recur pattern val body 
		   `(let ()
			  (_var ,val ,val-expr)))))

(proper:define-macro 
 match1 
 (pattern value-expr (tail body))
 (proper:expand-match1-body pattern value-expr body))


(cl-prettyprint 
 (proper:expand-match1-body 
  '({} x [: a c] y b)
  '({} x [: 1 2] y 11)
  '((_+ a b))))

(let nil
  (_var match-val-315989 ({} x [: 1 2] y 11))
  (_var match-object-temp-316031 (_\. match-val-315989 x))
  (_if (_=== "undefined" (_typeof match-object-temp-316031))
	   ((_return "match-fail-e1aa3b7e7ce9731266013c178de842b5")))
  (_if (_! (_=== 2 (_\. match-object-temp-316031 length)))
	   ((_return "match-fail-e1aa3b7e7ce9731266013c178de842b5")))
  (_var a [match-object-temp-316031 0])
  (_var c [match-object-temp-316031 1])
  (_var match-object-temp-316032 (_\. match-val-315989 y))
  (_if (_=== "undefined" (_typeof match-object-temp-316032))
	   ((_return "match-fail-e1aa3b7e7ce9731266013c178de842b5")))
  (_var b match-object-temp-316032)
  (_+ a b))




(let nil
  (_var match-val-315547 ({} x 1 y 11))
  (_var a (_\. match-val-315547 s))
  (_if (_=== "undefined" (_typeof a))
	   ((_return "match-fail-e1aa3b7e7ce9731266013c178de842b5")))
  (_var b (_\. match-val-315547 s))
  (_if (_=== "undefined" (_typeof b))
	   ((_return "match-fail-e1aa3b7e7ce9731266013c178de842b5")))
  (_+ a b))












;; (proper:define-macro 
;;  match1 (pattern vexpr (tail body))
;;  (let*  ((value (gensym))
;; 		 (acc-body `(let ()
;; 					  (_var ,value ,vexpr))))
;;    (match1+ ,pattern ,value ,body ,acc-body)))