(eval-when (load compile eval) 
  (require 'shadchen)
  (require 'prim))

(eval-when (load compile eval) 
  (defvar proper:macros (list (make-hash-table)))
  (setq proper:macros (list (make-hash-table)))
  (defvar proper:symbol-macros (list (make-hash-table)))
  (setq proper:symbol-macros (list (make-hash-table)))

  (defun proper:string-contains? (s substring)
	(not (string= s (replace-regexp-in-string (regexp-quote substring) "" s))))

  (defun-match- proper:pages-lookup (key nil)
	nil)
  (defun-match proper:pages-lookup (key 
									(list-rest 
									 (p #'hash-table-p tbl) 
									 rest))
	(let ((v (gethash key tbl)))
	  (if v v
		(recur key rest))))

  (defun proper:denotes-macro-p (o)
	(and (symbolp o)
		 (not (keywordp o))
		 (proper:pages-lookup o proper:macros)))

  (defun proper:denotes-symbol-macro-p (o)
	(and (symbolp o)
		 (not (keywordp o))
		 (proper:pages-lookup o proper:symbol-macros)))

  (defun proper:denotes-compound-symbol (o)
	(and (symbolp o)
		 (not (keywordp o))
		 (proper:string-contains? (symbol-name o) ".")))
  (defun proper:not-null (o)
	(not (null o))))

(eval-when (load compile eval)
  (defpattern proper:macro (&rest pattern)
	(match pattern
		   ((list pattern expander-pattern)
			`(and ,pattern
				  (funcall #'proper:denotes-macro-p 
						   (and 
							(p #'proper:not-null)
							,expander-pattern))))
		   ((list pattern)
			`(p #'proper:denotes-macro-p ,pattern))
		   ((list)
			`(p #'proper:denotes-macro-p))))
  (defpattern proper:symbol-macro (&rest pattern)
	(match pattern
		   ((list pattern expander-pattern)
			`(and ,pattern
				  (funcall #'proper:denotes-symbol-macro-p 
						   (and 
							(p #'proper:not-null)
							,expander-pattern))))
		   ((list pattern)
			`(p #'proper:denotes-symbol-macro-p ,pattern))
		   ((list)
			`(p #'proper:denotes-symbol-macro-p))))
  (defpattern proper:compound-symbol (&optional (pattern (gensym)))
	`(p #'proper:denotes-compound-symbol ,pattern)))

(defun-match- proper:to-prim ((proper:compound-symbol c))
  (match-let (((list head (tail parts)) 
			   (mapcar #'intern (split-string (symbol-name c) (regexp-quote ".")))))
			 `(_. ,(proper:to-prim head)
				  ,@parts)))

(defun proper:map-to-prim (seq)
  (loop for item in seq collect (proper:to-prim item)))

(defun-match proper:to-prim ((proper:symbol-macro s e))
  (funcall e s))
(defun-match proper:to-prim ((non-kw-symbol s))
  s)
(defun-match proper:to-prim ((number n))
  n)
(defun-match proper:to-prim ((keyword k))
  k)
(defun-match proper:to-prim ((string s))
  s)

(defun-match proper:to-prim ((list (or 'var '_var) (non-kw-symbol s) expr))
  `(_var ,(proper:to-prim s)
		 ,(proper:to-prim expr)))

(defun-match- proper:tail-of-if-to-prim (nil acc)
  acc)
(defun-match proper:tail-of-if-to-prim ((list-rest '_else ebody tail-of-if) acc)
  (recur tail-of-if (append acc (list '_else (proper:map-to-prim ebody)))))
(defun-match proper:tail-of-if-to-prim ((list-rest '_elseif cexpr ebody tail-of-if) acc)
  (recur tail-of-if (append acc (list '_elseif (proper:to-prim cexpr)
									  (proper:map-to-prim ebody)))))
(defun-match proper:tail-of-if-to-prim (anything)
  (recur anything nil))

(defun-match proper:to-prim ((list-rest '_if cexpr tbody tail-of-if))
  `(_if ,cexpr (proper:map-to-prim tbody) ,@(proper:tail-of-if-to-prim tail-of-if)))

(defun-match proper:to-prim ((list (or 'if '_?) cexpr texpr fexpr))
  `(_? ,(proper:to-prim cexpr)
	   ,(proper:to-prim texpr)
	   ,(proper:to-prim fexpr)))

(defun-match proper:to-prim ((list (or 'if '_?) cexpr texpr))
  `(_? ,(proper:to-prim cexpr)
	   ,(proper:to-prim texpr)
	   _undefined))

(defun-match proper:to-prim ((list (or '_function 'function) 
								   (prim:argument-list args) (tail body)))
  `(_function ,(mapcar #'proper:to-prim args)
			  ,@(mapcar #'proper:to-prim body)))

(defun-match proper:to-prim ((list (or '_function 'function) 
								   (non-kw-symbol name)
								   (prim:argument-list args) (tail body)))
  `(_function ,name ,(mapcar #'proper:to-prim args)
			  ,@(mapcar #'proper:to-prim body)))

(defun-match proper:to-prim ((list '_return expr))
  `(_return ,(proper:to-prim expr)))

(defun-match proper:to-prim ((list-rest '_while expression body))
  `(_while ,(proper:to-prim expression)
		   ,@(proper:map-to-prim body)))

(defun-match proper:to-prim ((list-rest '_for (non-kw-symbol name) 
										'_in expression body))
  `(_for ,(proper:to-prim name) _in ,(proper:to-prim expression)
		 ,@(proper:map-to-prim body)))

(defun-match proper:to-prim ((list-rest '_for (and control 
												   (list init cond update)) body))
  `(_for ,(proper:map-to-prim contro) ,@(proper:map-to-prim body)))

(defun-match proper:to-prim ((list '_throw expr))
  `(_throw ,(proper:to-prim expr)))

(defun-match proper:to-prim ((list '_break expr))
  `(_break ,(proper:to-prim expr)))

(defun-match proper:to-prim ((list '_continue expr))
  `(_continue ,(proper:to-prim expr)))

(defun-match proper:to-prim ((list '_instanceof oe ce))
  `(_instanceof ,(proper:to-prim oe) ,(proper:to-prim ce)))

(defun-match proper:to-prim ((list '_typeof o))
  `(_typeof ,(proper:to-prim o)))

(defun-match- proper:tail-of-try-to-prim (nil acc)
  acc)
(defun-match proper:tail-of-try-to-prim ((list-rest '_catch 
													(list (non-kw-symbol name))
													(list-rest catch-body)
													tail-of-try)
										 acc)
  (recur tail-of-try
		 (append acc `(_catch (,(proper:to-prim name))
							  ,(proper:map-to-prim catch-body)))))
(defun-match proper:tail-of-try-to-prim ((list-rest '_catch 
													(list (non-kw-symbol name) '_if expr)
													(list-rest catch-body)
													tail-of-try)
										 acc)
  (recur tail-of-try (append acc `(_catch (,(proper:to-prim name) _if ,(proper:to-prim expr))
										  ,(proper:map-to-prim catch-body)))))
(defun-match proper:tail-of-try-to-prim ((list-rest '_finally 
													(list-rest finally-body))
										 acc)
  (append acc `(_finally ,(proper:map-to-prim finally-body))))

(defun-match proper:to-prim ((list-rest '_try 
										(list-rest body)
										tail-of-try))
  `(_try ,(proper:map-to-prim body)
		 ,@(proper:tail-of-try-to-prim tail-of-try)))

(defun-match- proper:tail-of-dot-to-prim (nil acc)
  acc)
(defun-match proper:tail-of-dot-to-prim ((list-rest (non-kw-symbol s) tail-of-dot-expr)
										 acc)
  (recur tail-of-dot-expr (append acc (list s))))
(defun-match proper:tail-of-dot-to-prim ((list-rest (list-rest (non-kw-symbol m) args) tail-of-dot-expr)
										 acc)
  (recur tail-of-dot-expr (append acc (list `(,m ,@(proper:map-to-prim args))))))
(defun-match proper:tail-of-dot-to-prim ((list-rest [ (non-kw-symbol m) (tail exprs) ] tail-of-dot-expr)
										 acc)
  (recur tail-of-dot-expr (append acc (list (coerce `(,m ,@(proper:map-to-prim exprs)) 'vector)))))

(defun-match proper:tail-of-dot-to-prim (anything)
  (recur anything nil))

(defun-match proper:to-prim ((list-rest '_. expr tail-of-dot-expr))
  `(_. ,(proper:to-prim expr) ,@(proper:tail-of-dot-to-prim tail-of-dot-expr)))

(defun-match proper:to-prim ((list '_= (and
										(or (non-kw-symbol _)
											(list-rest '_. _))
										set-this)
								   value-expr))
  `(_= ,(proper:to-prim set-this) ,(proper:to-prim value-expr)))

(defun-match proper:to-prim ((list '_! expr))
  `(_! ,(proper:to-prim expr)))

(defun-match proper:to-prim ((list '_- expr))
  `(_- ,(proper:to-prim expr)))

(defun-match proper:to-prim ((list '_~ expr))
  `(_~ ,(proper:to-prim expr)))

(defun-match proper:to-prim ((list (prim:binop op) e1 e2))
  `(,op ,(proper:to-prim e1)
		,(proper:to-prim e2)))

(defun-match proper:to-prim ((list '_comma-sequence (tail exprs)))
  `(_comma-sequence ,@(proper:map-to-prim exprs)))

(defun-match proper:to-prim ((list '_newline-sequence (tail exprs)))
  `(_newline-sequence ,@(proper:map-to-prim exprs)))

(defun-match proper:to-prim ([(or '_: ':) (tail elements)])
  (coerce `('_: ,@(proper:map-to-prim elements)) 'vector))

(defun-match proper:to-prim ([hd (tail elements)])
  (coerce `(,(proper:to-prim hd) ,@(proper:to-prim elements)) 'vector))

(defun proper:add-to-global-macro-context (name function)
  (let ((context (car (last proper:macros))))
	(setf (gethash name context) function)))

(defun proper:add-to-macro-context (name function)
  (let ((context (car proper:macros)))
	(setf (gethash name context) function)))

(defun proper:add-to-global-symbol-macro-context (name function)
  (let ((context (car (last proper:symbol-macros))))
	(setf (gethash name context) function)))

(defun proper:add-to-symbol-macro-context (name function)
  (let ((context (car proper:symbol-macros)))
	(setf (gethash name context) function)))

(defun-match proper:to-prim ((list 'define-macro (non-kw-symbol name) 
								   arguments (tail body)))
  (let ((args (gensym))
		(anything-else (gensym)))
	(proper:add-to-global-macro-context 
	 name 
	 (eval `(lambda (&rest ,args)
			  (match ,args
					 ((list ,@arguments))
					 (,anything-else
					  (error ,(format "macro %S (%S): failed to match %%S" arguments name) ,anything-else))))))
	(symbol-name name)))

(defmacro* proper:define-macro (name arguments &body body)
  (let ((args (gensym))
		(anything-else (gensym)))
	`(proper:add-to-global-macro-context 
	  ',name 
	  (lambda (&rest ,args)
		(match ,args 
			   ((list ,@arguments)
				,@body)
			   (,anything-else 
				(error ,(format "macro %S (%S): failed to match %%S" arguments name) ,anything-else)))))))

(defmacro* proper:define-symbol-macro (name symbol-pattern &body body)
  (let ((arg (gensym))
		(anything-else (gensym)))
	`(proper:add-to-global-symbol-macro-context 
	  ',name 
	  (lambda (,arg)
		(match ,arg
			   (,symbol-pattern
				,@body)
			   (,anything-else 
				(error ,(format "symbol-macro %S (%S): failed to match %%S" arguments name) ,anything-else)))))))

(defmacro* proper:define-simple-symbol-macro (name &body body)
  (let ((arg (gensym))
		(anything-else (gensym)))
	`(proper:add-to-global-symbol-macro-context 
	  ',name 
	  (lambda (,arg)
		,@body))))


(defun-match proper:to-prim ((list 
							  (proper:macro _ expander)
							  (tail arguments)))
  (recur (apply expander arguments)))

(defun-match- proper:macro-expand-1 ((list 
									  (proper:macro _ expander)
									  (tail arguments)))
  (apply expander arguments))

(defun-match proper:to-prim ((list hd (tail rest)))
  `(,(proper:to-prim hd)
	,@(mapcar #'proper:to-prim rest)))

(proper:define-macro 
 _lambda 
 ((list-rest args) (tail body))
 (let* ((r (reverse body))
		(body (reverse (cons `(_return ,(car r)) (cdr r)))))
   `(_function ,args ,@body)))

(proper:define-macro 
 let ((list-rest binders) (tail body))
 (let ((names (cons 'arguments (mapcar #'car binders)))
	   (expressions (mapcar #'cadr binders)))
   `(_. (_lambda ,names ,@body)
		(call this (_? (_=== (_typeof arguments) "undefined") undefined arguments) ,@expressions))))

(proper:define-macro 
 if (condexpr trueexpr falseexpr)
 `(_? ,condexpr ,trueexpr ,falseexpr))

(proper:define-macro
 progn ((tail body))
 `(let () ,@body))

(proper:define-macro 
 throw (expr)
 `(progn (_throw ,expr)))

(proper:define-macro
 {} ((tail body))
 `(_{} ,@body))

(proper:define-macro 
 match-fail ()
 "match-fail-e1aa3b7e7ce9731266013c178de842b5")

(proper:define-macro 
 match1-id ((non-kw-symbol s) vexpr (tail body))
 `(let ((,s ,vexpr))
	,@body))

(proper:define-macro
 match1-simple-atom ((or (keyword a)
						 (number a)
						 (string a)) 
					 vexpr (tail body))
 (let ((val (gensym)))
   `(let ((,val ,vexpr))
	  (if (_=== ,val ,k)
		  (progn ,@body)
		(match-fail)))))

(defun-match- proper:make-last-return (nil)
  nil)

(defun-match proper:make-last-return ((list-rest lst))
  (let* ((r (reverse lst))
		 (r-all-but-last (cdr r))
		 (last (car r))
		 (new-last `(_return ,last))
		 (r-all (cons new-last r-all-but-last)))
	(reverse r-all)))

(proper:define-macro 
 if-or-match-fail 
 (condition (tail body))
 `((_function 
	()
	(_if (_! ,condition) 
		 ((_return (match-fail)))
		 _else
		 (,@(proper:make-last-return body))))))

(proper:define-macro 
 match1-array ([: (tail sub-patterns)] vexpr (tail body))
 (match sub-patterns
		((list)
		 (let ((val (gensym)))
		   `(let ((,val ,vexpr))
			  (if-or-match-fail
			   (_&& (_instanceof ,val Array)
					(_=== (_. ,val length) 0))
			   ,@body))))
		((list (list 'tail pattern))
		 `(match1 ,pattern ,vexpr ,@body))
		((list hdp (tail sub-patterns))
		 (let ((val (gensym))
			   (hd (gensym)))
		   `(let ((,val ,vexpr))
			  (if-or-match-fail 
			   (_&& (_instanceof ,val Array)
					(_> (_. ,val length) 0))
			   (match1 ,hdp [,val 0]
					   (match1 [: ,@sub-patterns] (_. ,val (slice 1)) ,@body))))))))

(proper:define-macro 
 match1 (mexpr vexpr (tail body))
 (match mexpr
		((non-kw-symbol mexpr)
		 `(match1-id ,mexpr ,vexpr ,@body))
		((or (keyword a)
			 (number a)
			 (string a))
		 `(match1-simple-atom ,mexpr ,vexpr ,@body))
		((list 'quote e)
		 `(match1-simple-atom 
		   ,(prim:transcode->string (proper:to-prim e))
		   ,vexpr
		   ,@body))
		([: (tail sub-patterns)]
		 `(match1-array ,mexpr ,vexpr ,@body))))

(eval-when (load compile eval) 
  (defun-match- proper:proper-list-p (nil)
	t)
  (defun-match proper:proper-list-p ((cons hd (list-rest tl)))
	(recur tl))
  (defun-match proper:proper-list-p ((cons hd something-else))
	nil)
  (defun-match proper:proper-list-p (anything-else)
	nil)

  (defun-match- proper:all-satisfy (p nil)
	t)
  (defun-match proper:all-satisfy (p (list-rest hd tl))
	(if (funcall p hd)
		(recur p tl)
	  nil))

  (defpattern proper:match-body (&optional (pattern (gensym)))
	(let ((arg (gensym)))
	  `(p (lambda (,arg)
			(proper:all-satisfy #'proper:proper-list-p ,arg))
		  ,pattern))))

(proper:define-macro 
 match (match-value 
		(tail (must-match 
			   (proper:match-body body)
			   error-val
			   (format (concat "match's body must be a non-empty " 
							   "sequence of proper lists, with a " 
							   "pattern in the head of each.")))))
 (let ((return-value (gensym))
	   (value (gensym))) 
   `(let 
		()
	  (_var ,return-value _undefined)
	  (_var ,value ,match-value)
	  ,@(loop for sub-form in body append 
			  (let ((pattern (car sub-form))
					(sub-body (cdr sub-form)))
				`((_= ,return-value (match1 ,pattern ,value ,@body))
				  (_if (_! (_=== (match-fail) ,return-value))
					   ((_return ,return-value))))))
	  (_throw (_+ ,(format "match-fail at (%S) for value " `(match ,match-value ,@body)) ,value)))))

(proper:define-macro 
 define-macro (name (list-rest patterns) (tail body))
 (let* ((args (gensym))
		(transform-lambda 
		 (eval `(lambda (&rest ,args)
				  (match ,args
						 ((list ,@patterns)
						  ,@body)
						 (,args 
						  (error "Macro %s failed for args %S" ',name ,args)))))))
   (proper:add-to-macro-context name transform-lambda)
   '_undefined))

(proper:define-symbol-macro  
 define-macro (name pattern (tail body))
 (let* ((arg (gensym))
		(transform-lambda 
		 (eval `(lambda (,arg)
				  (match ,arg
						 (,pattern
						  ,@body)
						 (,args 
						  (error "Macro %s failed for args %S" ',name ,args)))))))
   (proper:add-to-symbol-macro-context name transform-lambda)
   '_undefined))

(proper:define-simple-symbol-macro  
 define-macro (name (tail body))
 (let* ((arg (gensym))
		(transform-lambda 
		 (eval `(lambda (,arg)
				  ,@body))))
   (proper:add-to-symbol-macro-context name transform-lambda)
   '_undefined))

(defun-match- proper:reduce-unit-body-once (nil acc)
  (reverse acc))
(defun-match proper:reduce-unit-body-once ((list form (tail forms)) acc)
  (recur forms (cons (proper:to-prim form) acc)))

(defun proper:</c (rhs)
  (eval `(lambda (lhs)
		   (< lhs ,rhs))))

(defun-match- proper:fixed-point (f arg)
  (proper:fixed-point f arg 100 0))
(defun-match proper:fixed-point (f arg max-count)
  (proper:fixed-point f arg max-count 0))
(defun-match proper:fixed-point (f arg max-count (equal max-count))
  `(did-not-converge ,arg ,count))
(defun-match proper:fixed-point (f arg max-count (p (proper:</c max-count) count))
  (let ((new-arg (funcall f arg)))
	(if (equalp new-arg arg) 
		`(converged ,new-arg ,count)
	  (recur f new-arg max-count (+ 1 count)))))


(proper:define-macro 
 _proper:unit 
 ((tail body))
 (let ((proper:macros (cons (make-hash-table) proper:macros))
	   (proper:symbol-macros (cons (make-hash-table) proper:symbol-macros)))
   (match (proper:fixed-point #'proper:reduce-unit-body-once body)
		  ((list 'converged ,final-body ,count)
		   `(_lambda () ,final-body))
		  ((list 'did-not-converge ,non-final-body ,count)
		   (error "_proper:unit compilation did not converge.  Do you have a loop in macroexpansion in the body %s?" body)))))

