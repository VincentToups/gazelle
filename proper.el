(eval-when (load compile eval) 
  (require 'shadchen)
  (require 'prim))
(provide 'proper)


(eval-when (load compile eval) 
  (defmacro* proper:enclose (symbols &body body)
	`(lexical-let ,(loop for s in symbols collect `(,s ,s))
	   ,@body))
  (defun proper:message (&rest args)
	(message (replace-regexp-in-string (regexp-quote "%")
									   "%%" 
									   (concat "proper: " (apply #'format args)))))
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
  `(_if ,(proper:to-prim cexpr) ,(proper:map-to-prim tbody) ,@(proper:tail-of-if-to-prim tail-of-if)))

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

(defun-match proper:to-prim ((list-rest (or 'for '_for) 
										(list (non-kw-symbol name) 
											  (or :in '_in) expression) 
										body))
  `(_for (,(proper:to-prim name) _in ,(proper:to-prim expression))
		 ,@(proper:map-to-prim body)))

(defun-match proper:to-prim ((list-rest (or 'for '_for) (and control 
															 (list init cond update)) body))
  `(_for ,(proper:map-to-prim control) ,@(proper:map-to-prim body)))

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

(defun-match proper:to-prim ((list-rest (or '.. '_.) expr tail-of-dot-expr))
  `(_. ,(proper:to-prim expr) ,@(proper:tail-of-dot-to-prim tail-of-dot-expr)))

(defun-match proper:to-prim ((list (or '_= 'set!) (and
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

(defun-match proper:to-prim ((list (or 'include-js '_include-js) (! (string file))))
  `(_include-js ,file))

(defun-match proper:to-prim ((list (or 'comment '_comment) (tail comments)))
  `(_comment ,@comments))

(defun-match proper:to-prim ((list (or '{} '_{})
								   (tail (prim:{}-body tail))))
  `(_{} ,@tail))

(defun-match proper:to-prim ((list (prim:binop op) e1 e2))
  `(,op ,(proper:to-prim e1)
		,(proper:to-prim e2)))

(defun-match proper:to-prim ((list '_comma-sequence (tail exprs)))
  `(_comma-sequence ,@(proper:map-to-prim exprs)))

(defun-match proper:to-prim ((list '_newline-sequence (tail exprs)))
  `(_newline-sequence ,@(proper:map-to-prim exprs)))

(defun-match proper:to-prim ([(or '_: ':) (tail elements)])
  (coerce `(_: ,@(proper:map-to-prim elements)) 'vector))

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
				(error ,(format "macro %S (%S): failed to match %%S" name arguments) ,anything-else)))))))

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
				(error ,(format "symbol-macro %S (%S): failed to match %%S" name symbol-pattern) ,anything-else)))))))

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

(defun-match proper:to-prim ((list 
							  (proper:symbol-macro _ expander)
							  (tail arguments)))
  (recur `(,(funcall expander _) ,@arguments)))

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
 _let ((list-rest binders) (tail body))
 (let ((names (cons 'arguments (mapcar #'car binders)))
	   (expressions (mapcar #'cadr binders)))
   `(_. (_lambda ,names ,@body)
		(call this (_? (_=== (_typeof arguments) "undefined") undefined arguments) ,@expressions))))

(proper:define-macro 
 if (condexpr trueexpr falseexpr)
 `(_? ,condexpr ,trueexpr ,falseexpr))

(proper:define-macro
 progn ((tail body))
 `(_let () ,@body))

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
 `(_let ((,s ,vexpr))
		,@body))

(proper:define-macro
 match1-simple-atom ((or (keyword a)
						 (number a)
						 (string a))
					 vexpr (tail body))
 (let ((val (gensym)))
   `(_let ((,val ,vexpr))
		  (if (_=== ,val ,a)
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
 match1-array ((or [(or ': '_:) (tail sub-patterns)]
				   (list 'array (tail sub-patterns))) vexpr (tail body))
 (match sub-patterns
		((list)
		 (let ((val (gensym)))
		   `(_let ((,val ,vexpr))
				  (if-or-match-fail
				   (_&& (_instanceof ,val Array)
						(_=== (_. ,val length) 0))
				   ,@body))))
		((list (list 'tail pattern))
		 `(match1 ,pattern ,vexpr ,@body))
		((list hdp (tail sub-patterns))
		 (let ((val (gensym))
			   (hd (gensym)))
		   `(_let ((,val ,vexpr))
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
		((or [(or '_: ':) (tail sub-patterns)]
			 (list 'array (tail sub-patterns)))
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
   `(_let 
	 ()
	 (_var ,return-value _undefined)
	 (_var ,value ,match-value)
	 ,@(loop for sub-form in body append 
			 (let ((pattern (car sub-form))
				   (sub-body (cdr sub-form)))
			   `((_= ,return-value (match1 ,pattern ,value ,@sub-body))
				 (_if (_! (_=== (match-fail) ,return-value))
					  ((_return ,return-value))))))
	 (_throw (_+ ,(format "match-fail at (%S) for value " `(match ,match-value ,@body)) ,value)))))


(defun-match- proper:simple-lambda-p ((list 'lambda arg-list (tail body)))
  (proper:all-satisfy (lambda (x)
						(and (symbolp x)
							 (not (keywordp x)))) arg-list))

(proper:define-macro 
 lambda (args (tail body))
 (if (proper:simple-lambda-p `(lambda ,args ,@body))
	 `(_lambda ,args ,@body)
   (let ((otherwise (gensym)))
	 `(_lambda 
	   () 
	   (match (_. Array prototype slice (call arguments 0))
			  ([: ,@args]
			   ,@body)
			  (,otherwise (_throw (_+ "No match error in lambda " ,(format "%S" `(lambda ,args ,@body))))))))))


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
   `(_var ,name "macro - no dynamic value.")))

(proper:define-macro  
 define-symbol-macro (name pattern (tail body))
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

(proper:define-macro 
 define ((tail parts))
 (match parts
		((list (non-kw-symbol name) value-expr)
		 `(_var ,name ,value-expr))
		((list (list (non-kw-symbol name) (tail args)) (tail body))
		 `(_var ,name (lambda ,args ,@body)))
		(other-form
		 (error "gazelle/proper define must either by (define symbol expr) or (define (name arg-pattern ...) body0 ...), got %S" `(define ,@parts)))))

(proper:define-macro  
 define-simple-symbol-macro (name (tail body))
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
(defun-match proper:reduce-unit-body-once ((list (tail forms)))
  (recur forms nil))

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
 _proper:include 
 (filename)
 (let ((s-expressions
		(gzu:read-file filename)))
   `(_newline-sequence ,@s-expressions)))

(proper:define-macro
 _proper:macro-context ((tail body))
 (let ((proper:macros 
		(cons (make-hash-table) proper:macros))
	   (proper:symbol-macros 
		(cons (make-hash-table) proper:symbol-macros)))
   `(_proper:unit ,@body)))

(proper:define-macro 
 _proper:unit 
 ((tail body))
 (match (proper:fixed-point #'proper:reduce-unit-body-once body)
		((list 'converged final-body count)
		 `((_lambda () ,@final-body)))
		((list 'did-not-converge non-final-body count)
		 (error (format 
				 (concat "_proper:unit compilation did not converge."
						 "  Do you have a loop in macroexpansion in"
						 " the body %s?") body)))))



(proper:define-macro 
 _proper:at-compile-time 
 ((tail body))
 (eval body)
 'undefined)

(defvar proper:*rjs-root* nil)
(defun proper:read-rjs-dir (d)
  (interactive "DPlease enter your require-js project root.")
  d)
(defun proper:set-rjs-root ()
  (interactive)
  (setq proper:*rjs-root* nil)
  (proper:fetch-rjs-root))
(defun proper:fetch-rjs-root ()
  (if proper:*rjs-root*
	  proper:*rjs-root*
	(let ((d (call-interactively #'proper:read-rjs-dir)))
	  (prog1 d
		(setq proper:*rjs-root* d)))))

(defvar proper:*module-manifest* nil)
(defun proper:inside-module-p ()
  (if proper:*module-manifest* t nil))

(defun proper:module-spec->module-file (spec)
  (let ((root (proper:fetch-rjs-root)))
	(replace-regexp-in-string "/+" "/" (concat root spec ".gazelle"))))

(defun-match- proper:module-module-specs ((list 'module module-specs (tail body)))
  module-specs)

(defun-match- proper:module-body ((list 'module module-specs (tail body)))
  body)

(eval-when (compile load eval)
  (defpattern proper:as-form (&optional (source-name (gensym))
										(local-name (gensym)))
	`(or (non-kw-symbol (and ,source-name ,local-name))
		 (list (non-kw-symbol (and ,source-name ,local-name)))
		 (list (non-kw-symbol ,source-name)
			   (non-kw-symbol ,local-name))))
  (defun-match- proper:as-form-p ((proper:as-form))
	t)
  (defun-match proper:as-form-p (anything-else)
	nil)

  (defun-match- proper:as-forms-p ((list (tail items)))
	(proper:all-satisfy #'proper:as-form-p items))
  (defpattern proper:as-forms (&optional (pattern (gensym)))
	(p #'proper:as-forms-p ,pattern)))

(defun proper:module-location->symbol (loc)
  (intern (concat "module-" (substring (md5 (file-truename (concat (proper:fetch-rjs-root) loc)))
									   0 10))))

(defun proper:lookup-manifest-type (symbol manifest)
  (gzu:alist-lookup :type (gethash symbol manifest)))

(defun proper:setup-macro-as (source local 
									 module-location 
									 local-module-name
									 manifest macros symbol-macros)
  (proper:add-to-macro-context local 
							   (proper:pages-lookup source macros)))

(defun proper:setup-value-as (source local 
									 module-location 
									 local-module-name
									 manifest macros symbol-macros)
  (proper:message "adding as symbol macro, %S expanding to %S" local 
				  `(_. ,(proper:module-location->symbol module-location) ,source))
  (proper:add-to-symbol-macro-context 
   local
   (proper:enclose (local-module-name source) 
				   (lambda (_)
					 `(_. ,local-module-name ,source)))))

(defun proper:setup-as-form (as-form
							 module-location
							 local-module-name
							 manifest
							 macros
							 symbol-macros)
  (proper:message "Setting up as form %S" as-form)
  (loop for form in (cdr as-form) do
		(match form
			   ((proper:as-form source local)
				(match (proper:lookup-manifest-type source manifest)
					   (:macro (proper:setup-macro-as source local 
													  module-location 
													  local-module-name
													  manifest macros symbol-macros))
					   ((or :value :function)
						(proper:setup-value-as 
						 source local
						 module-location 
						 local-module-name
						 manifest macros symbol-macros)))))))

(proper:define-macro
 _proper:require-spec
 ((or (and (string module-location)
		   (let1 local-module-name (proper:module-location->symbol module-location)))
	  (list (string module-location)
			(symbol local-module-name)))
  (tail parts))
 (match (proper:compile-module module-location)
		((list manifest macros symbol-macros)
		 (let ((require-forms (mapcar (proper:reduce-require-form/c manifest) parts)))
		   (proper:message 
			"Importing reduced forms %S from %S." require-forms module-location) 
		   (loop for as-form in require-forms
				 do
				 (proper:setup-as-form as-form
									   module-location 
									   local-module-name
									   manifest
									   macros
									   symbol-macros)))))
 (format "%S" `(,module-location ,@parts)))

(defun proper:module-specs->crypto-symbols (specs)
  (mapcar (lambda (spec)
			(match spec
				   ((list (string location) (tail parts))
					(proper:module-location->symbol location))
				   ((list (list (string location) (symbol local-symbol))
						  (tail parts))
					local-symbol)
				   (other-value
					(error "Unrecognized module require specification %S" spec))))
		  specs))

(defun proper:module-specs->locations (specs)
  (mapcar 
   (lambda (spec)
	 (match spec
			((list (string location) (tail parts))
			 location)
			((list (list (string location)
						 (symbol local-name))
				   (tail parts))
			 location))) specs))

(defun proper:module-gazelle-file->js-file (file)
  (let ((new (replace-regexp-in-string "\.gazelle$" ".js" file)))
	(if (string= new file)
		(concat file ".js")
	  new)))

(defvar proper:*module-compile-cache* 
  (make-hash-table :test 'equal))
(defun proper:reset-module-cache ()
  (interactive)
  (setq proper:*module-compile-cache* (make-hash-table :test 'equal)))
(defvar proper:*use-module-cache* t)
(defun proper:toggle-module-cache ()
  (interactive)
  (if proper:*use-module-cache* 
	  (progn 
		(proper:message "Disabling module cache.")
		(setq proper:*use-module-cache* nil))
	(progn 
	  (proper:message "Enabling module cache.")
	  (setq proper:*use-module-cache* t))))


(defun proper:extract-module-dependencies (spec)
  (match-let* ((contents (proper:read-module-file file))
			   (req-specs (proper:module-module-specs contents)))
			  (proper:module-specs->locations req-specs)))

(defun proper:module-needs-recompile (spec)
  (when (not proper:*use-module-cache*)
	(proper:message "Module cache is disabled.")
	(proper:reset-module-cache))
  (match-let* ((file (proper:module-spec->module-file spec))
			   (current-hash (gzu:file-hash file))
			   ((cons previous-hash previous-compilation)
				(gethash file proper:*module-compile-cache*))
			   (dependencies (proper:extract-module-dependencies spec))
			   (dep-result (gzu:any-satisfy #'proper:module-needs-recompile dependencies))
			   (result (or (not (equal current-hash previous-hash))
						   dep-result)))
			  (when result
				(proper:message (concat "Module %s needs recompile (current %s," 
										" previous %s, dependencies %S, dep-result %S, result %s) .") 
								spec
								current-hash 
								previous-hash 
								dependencies
								dep-result
								result))
			  result))

(defun proper:compile-module (spec)
  (proper:message "Attempting to compile/load from cache %S" spec)
  (let ((file (proper:module-spec->module-file spec)))
	(if (proper:module-needs-recompile spec)
		(let ((new-compilation (proper:really-compile-module spec))
			  (new-hash (gzu:file-hash file)))
		  (setf (gethash file proper:*module-compile-cache*)
				(cons new-hash new-compilation))
		  new-compilation)
	  (match-let 
	   (((cons old-hash old-compilation)
		 (gethash file proper:*module-compile-cache*)))
	   old-compilation))))

(proper:define-macro 
 let (binders (tail body))
 (let ((values (gensym))
	   (anything-else (gensym)))
   `(match [: ,@(mapcar #'cadr binders)]
		   ([: ,@(mapcar #'car binders)]
			,@body)
		   (,anything-else
			(_throw (_+ "Match error in " ,(format "%S" `(let ,binders ,@body))))))))

(defun proper:read-module-file (file)
  (match (gzu:read-file file)
		 ((list (and the-module 
					 (list 'module (list (tail specs))
						   (tail body))))
		  the-module)
		 (other-code 
		  (error (concat
				  "Couldn't find a module in %S %S, "
				  "a module file must consist of a single `module`
				  form.") file other-code))))

(proper:define-macro 
 require (specs (tail body))
 (proper:message "specs is %S" specs)
 `((_value require)
   [: ,@(proper:module-specs->locations specs)]
   (lambda (,@(proper:module-specs->crypto-symbols specs))
	 (_proper:macro-context
	  (_proper:unit 
	   ,@(loop for spec in specs collect
			   `(_proper:require-spec ,@spec))
	   ,@body)))))

(defun-match- proper:reduce-require-form (manifest (and form (list :as (tail pairs))))
  form)

(defun-match proper:reduce-require-form (manifest :all)
  `(:as ,@(gzu:hash-table-keys manifest)))

(defun-match proper:reduce-require-form (manifest (list :with-prefix 
														(! (symbol prefix))
														sub-form))
  (let ((reduced-sub-form (proper:reduce-require-form manifest sub-form))
		(prefix-string (symbol-name prefix)))
	`(:as ,@(loop for form in (cdr reduced-sub-form)
				  collect
				  (match form 
						 ((proper:as-form source local)
						  (list source 
								(intern (concat prefix-string (symbol-name local)))))
						 (anything-else
						  (error 
						   (concat "Error reducing prefix module include"
								   " directive.  Expected as forms, got %S") 
						   anything-else)))))))

(defun proper:reduce-require-form/c (manifest)
  (proper:enclose (manifest)
				  (lambda (form)
					(proper:reduce-require-form manifest form))))


(defun proper:really-compile-module (spec)
  (proper:message "Really compiling module %S" spec)
  (let* ((file (proper:module-spec->module-file spec))
		 (output-file (proper:module-gazelle-file->js-file file))
		 (contents (proper:read-module-file file))
		 (specs (proper:module-module-specs contents))
		 (body (proper:module-body contents)))
	(let* ((proper:*module-manifest* (make-hash-table))
		   (proper:symbol-macros (cons (make-hash-table)
									   proper:symbol-macros))
		   (proper:macros (cons (make-hash-table) proper:macros))
		   (current-module (gensym "current-module-"))
		   (gazelle-code 
			`((_value define)
			  [: ,@(proper:module-specs->locations specs)]
			  (_function ,(proper:module-specs->crypto-symbols specs)
						 (_var ,current-module (_{}))
						 (_proper:macro-context
						  (_proper:unit 
						   (define-macro define+ ((tail parts))
							 (match parts
									((list (non-kw-symbol name) value-expr)
									 (setf (gethash name proper:*module-manifest*)
										   '((:type . :value)))
									 (proper:add-to-symbol-macro-context 
									  name
									  (lexical-let  
										  ((lcurrent-module current-module)
										   (lname name))
										(lambda (_) `(_. ,lcurrent-module ,lname))))
									 `(_= (_. ,current-module ,name) ,value-expr))
									((list (list (non-kw-symbol name) (tail args)) (tail body))
									 (setf (gethash name proper:*module-manifest*)
										   '((:type . :function)))
									 (proper:add-to-symbol-macro-context 
									  name
									  (lexical-let
										  ((lcurrent-module current-module) 
										   (lname name))
										(lambda (_) `(_. ,lcurrent-module ,lname))))
									 `(_= (_. ,current-module ,name) (lambda ,args ,@body)))
									(other-form
									 (error (concat "gazelle/proper define must either"
													" by (define symbol expr) or (define"
													" (name arg-pattern ...) body0 ...)," 
													" got %S") `(define+ ,@parts)))))
						   (define-macro define-macro+ (name (list-rest patterns) (tail body))
							 (setf (gethash name proper:*module-manifest*)
								   '((:type . :macro)))
							 `(define-macro ,name ,patterns ,@body))
						   ,@(loop for spec in specs collect
								   `(_proper:require-spec ,@spec))
						   ,@body))
						 (_return ,current-module)))))
	  (gzu:with-file-buffer-maybe-open 
	   (output-file :save t)
	   (delete-region (point-min) (point-max))
	   (prim:transcode
		(proper:to-prim gazelle-code)))
	  (list proper:*module-manifest* proper:macros proper:symbol-macros))))

