(eval-when (load compile eval) 
  (require 'shadchen)
  (require 'prim))
(provide 'proper)



(eval-when (load compile eval) 
  (defmacro* proper:enclose (symbols &body body)
	`(lexical-let ,(loop for s in symbols collect `(,s ,s))
	   ,@body))
  (defvar proper:messages-on t)
  (defun proper:toggle-messages ()
	(interactive)
	(setq proper:messages-on (not proper:messages-on)))
  (defun proper:message (&rest args)
	(if proper:messages-on
		(message (replace-regexp-in-string (regexp-quote "%")
										   "%%" 
										   (concat "proper: " (apply #'format args))))))
  (defvar proper:macros (list (make-hash-table)))
  (setq proper:macros (list (make-hash-table)))

  (defvar proper:patterns (list (make-hash-table)))
  (setq proper:patterns (list (make-hash-table)))

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

  (defun proper:denotes-custom-pattern-p (o)
	(and (symbolp o)
		 (not (keywordp o))
		 (proper:pages-lookup o proper:patterns)))

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

  (defpattern proper:custom-pattern (&rest pattern)
	(match pattern
		   ((list pattern expander-pattern)
			`(and ,pattern
				  (funcall #'proper:denotes-custom-pattern-p 
						   (and 
							(p #'proper:not-null)
							,expander-pattern))))
		   ((list pattern)
			`(p #'proper:denotes-custom-pattern-p ,pattern))
		   ((list)
			`(p #'proper:denotes-custom-pattern-p))))

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

(defun-match proper:to-prim ((or '_false 'false))
  '_false)

(defun-match proper:to-prim ((or '_undefined 'undefined))
  '_undefined)

(defun-match proper:to-prim ((or '_{} '{}))
  '_{})

(defun-match proper:to-prim ((or '_true 'true))
  '_true)

(defun-match proper:to-prim ((or '_null 'null))
  '_null)

(defun-match proper:to-prim ((or '_break 'break))
  '_break)

(defun-match proper:to-prim ((or '_continue 'continue))
  '_continue)


(defun-match proper:to-prim ((or '_{} '{}))
  '_{})

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

(defun-match proper:to-prim ((list (or 'var '_var) (non-kw-symbol s) expr (tail tail-of-var)))
  `(_var ,(proper:to-prim s)
		 ,(proper:to-prim expr)
		 ,@(proper:map-to-prim tail-of-var)))

(defun-match proper:to-prim ((list (or 'var '_var) (non-kw-symbol id)))
  `(_var ,(proper:to-prim id) _undefined))

(defun-match proper:to-prim ((list (or '_new 'new) constructor (tail arguments)))
  `(_new ,(proper:to-prim constructor)
		 ,@(proper:map-to-prim arguments)))

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

(defun-match- proper:var-terms->actual-terms&symbol-macros (terms)
  (recur terms nil nil))
(defun-match proper:var-terms->actual-terms&symbol-macros ((list) actual-terms symbol-macros)
  (list actual-terms (reverse symbol-macros)))
(defun-match proper:var-terms->actual-terms&symbol-macros ((list (proper:symbol-macro binding) ,value-expr (tail rest))
														   actual-terms symbol-macros)
  (let ((alias (intern (concat (symbol-name binding) "-" (gensym)))))
	(recur rest (append actual-terms `(,alias ,value-expr)) 
		   (cons (list binding `(lambda (_) ',alias)) symbol-macros))))
(defun-match proper:var-terms->actual-terms&symbol-macros ((list binding value-expr (tail rest)) actual-terms symbol-macros)
  (recur rest (append actual-terms `(,binding ,value-expr)) symbol-macros))



(defun-match proper:to-prim ((list (or '_switch 'switch) v-expr (tail body)))
  `(_switch ,(proper:to-prim v-expr)
			,@(proper:newline-sequence->prim-switch-body body)))

(defun proper:_function-args->symbol-macro-context-entries/arglist (args)
  (let ((actual-arg-list (list))
		(entries (list))) 
	(loop for arg in args do
		  (match arg
				 ((proper:symbol-macro _ _)
				  (let* ((name (symbol-name arg))
						 (alias (intern (concat name "-" (symbol-name (gensym))))))
					(push alias actual-arg-list)
					(push (list arg `(lambda (s) ',alias)) entries)))
				 (otherwise
				  (push arg actual-arg-list))))
	(list (reverse actual-arg-list) (reverse entries))))

(defun-match proper:to-prim ((list (or '_function 'function) 
								   (prim:argument-list args) (tail body)))
  (match (proper:_function-args->symbol-macro-context-entries/arglist args)
		 ((list arglist (list))
		  `(_function ,(mapcar #'proper:to-prim args)
					  ,@(proper:newline-sequence->prim body)))
		 ((list actual-arglist extensions)
		  (let ((proper:symbol-macros (cons (make-hash-table) proper:symbol-macros)))
			(loop for (symbol expander) in extensions do
				  (proper:add-to-symbol-macro-context symbol expander))
			(proper:to-prim
			 `(_function ,(mapcar #'proper:to-prim actual-arglist)
						 ,@(proper:newline-sequence->prim body)))))))

(defun-match proper:to-prim ((list (or '_function 'function) 
								   (non-kw-symbol name)
								   (prim:argument-list args) (tail body)))
  (match (proper:_function-args->symbol-macro-context-entries/arglist args)
		 ((list arglist (list))
		  `(_function ,name ,(mapcar #'proper:to-prim args)
					  ,@(proper:newline-sequence->prim body)))
		 ((list actual-arglist extensions)
		  (let ((proper:symbol-macros (cons (make-hash-table) proper:symbol-macros)))
			(loop for (symbol expander) in extensions do
				  (proper:add-to-symbol-macro-context symbol expander))
			(proper:to-prim
			 `(_function ,name ,(mapcar #'proper:to-prim actual-arglist)
						 ,@(proper:newline-sequence->prim body)))))))

(defun-match proper:to-prim ((list '_return expr))
  `(_return ,(proper:to-prim expr)))

(defun-match proper:to-prim ((list '_return))
  `(_return))


(defun-match proper:to-prim ((list-rest (or 'while '_while) expression body))
  `(_while ,(proper:to-prim expression)
		   ,@(proper:newline-sequence->prim body)))

(defun-match proper:to-prim ((list-rest (or 'for '_for) 
										(list (non-kw-symbol name) 
											  (or 'in :in '_in) expression) 
										body))
  (match name 
		 ((proper:symbol-macro _ _)
		  (let* ((symname (symbol-name name))
				 (alias (intern (concat symname "" (symbol-name (gensym)))))
				 (expression (proper:to-prim expression))
				 (proper:symbol-macros (cons (make-hash-table) proper:symbol-macros)))
			(proper:add-to-symbol-macro-context name 
												`(lambda (s) ',alias))
			(proper:to-prim 
			 `(_for (,(proper:to-prim alias) _in ,expression)
					,@(proper:newline-sequence->prim body)))))
		 (non-symbol-macro 
		  `(_for (,(proper:to-prim name) _in ,(proper:to-prim expression))
				 ,@(proper:newline-sequence->prim body)))))

(defun-match proper:to-prim ((list-rest (or 'for '_for) 
										(list (list (or 'var '_var) 
													(tail var-bindings)) 
											  cond update) body))
  (let* ((proper:symbol-macros (cons (make-hash-table)
									 proper:symbol-macros))
		 (actuals 
		  (loop for (s e . r) on var-bindings by #'cddr 
				append 
				(if (proper:denotes-symbol-macro-p s)
					(let ((alias (gzu:gensym "%S" s))
						  (ee (proper:to-prim e)))
					  (proper:add-to-symbol-macro-context s 
														  `(lambda (_) ',alias))
					  (list alias ee))
				  (list s e)))))
	`(_for ,(proper:map-to-prim 
			 (list `(_var ,@actuals) cond update)) 
		   ,@(proper:newline-sequence->prim body))))

(defun-match proper:to-prim ((list-rest (or 'for '_for) (and control 
															 (list init cond update)) body))
  `(_for ,(proper:map-to-prim control) ,@(proper:newline-sequence->prim body)))

(defun-match proper:to-prim ((list '_throw expr))
  `(_throw ,(proper:to-prim expr)))

(defun-match proper:to-prim ((list (or 'delete '_delete) expr))
  `(_delete ,(proper:to-prim expr)))

;; (defun-match proper:to-prim ((list '_break expr))
;;   `(_break ,(proper:to-prim expr)))

;; (defun-match proper:to-prim ((list '_continue expr))
;;   `(_continue ,(proper:to-prim expr)))

(defun-match proper:to-prim ((list (or 'instanceof '_instanceof) oe ce))
  `(_instanceof ,(proper:to-prim oe) ,(proper:to-prim ce)))

(defun-match proper:to-prim ((list (or 'typeof '_typeof) o))
  `(_typeof ,(proper:to-prim o)))

(defun-match- proper:tail-of-try-to-prim (nil acc)
  acc)
(defun-match proper:tail-of-try-to-prim ((list-rest (or 'catch :catch '_catch) 
													(list (non-kw-symbol name))
													(list-rest catch-body)
													tail-of-try)
										 acc)
  (recur tail-of-try
		 (append acc `(_catch (,(proper:to-prim name))
							  ,(proper:map-to-prim catch-body)))))
(defun-match proper:tail-of-try-to-prim ((list-rest (or 'catch :catch '_catch) 
													(list (non-kw-symbol name) 
														  (or 'if :if '_if) 
														  expr)
													(list-rest catch-body)
													tail-of-try)
										 acc)
  (recur tail-of-try (append acc `(_catch (,(proper:to-prim name) _if ,(proper:to-prim expr))
										  ,(proper:map-to-prim catch-body)))))

(defun-match proper:tail-of-try-to-prim ((list (or :finally 'finally '_finally)
											   (list-rest finally-body))
										 acc)
  (append acc `(_finally ,(proper:map-to-prim finally-body))))

(defun-match proper:tail-of-try-to-prim ((list-rest tail))
  (recur tail nil))

(defun-match proper:to-prim ((list-rest (or 'try '_try) 
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





(defun-match proper:to-prim ((list (or '_= 'set!) 
								   (tail parts)))
  `(_= ,@(loop for part in parts collect (proper:to-prim part))))

(defun-match proper:to-prim ((list (or '! '_!) expr))
  `(_! ,(proper:to-prim expr)))

(defun-match proper:to-prim ((list '_- expr))
  `(_- ,(proper:to-prim expr)))

(defun-match proper:to-prim ((list '_~ expr))
  `(_~ ,(proper:to-prim expr)))

(defun-match proper:to-prim ((list (or '_in 'in) key value))
  `(_in ,(proper:to-prim key) ,(proper:to-prim value)))

(defun-match proper:to-prim ((list (or 'include-js '_include-js) (! (string file))))
  `(_include-js ,file))

;; (defun-match proper:to-prim ((list 'include-js (! (string file))))
;;   (proper:message "include-js is prefixing directory %S to file name %S" (gzu:pwd) file)
;;   `(_include-js ,(concat (gzu:pwd) "/" file)))

(defun-match proper:to-prim ((list (or 'comment '_comment) (tail comments)))
  `(_comment ,@comments))

(defun proper:to-prim_{}-tail (tail)
  (loop for el in tail and i from 0 collect
		(if (evenp i) el
		  (proper:to-prim el))))


(defun-match proper:to-prim ((list (or '{} '_{})
								   (tail (! (prim:{}-body tail)))))
  `(_{} ,@(proper:to-prim_{}-tail tail)))

(defun-match proper:to-prim ((list (prim:binop op) e1 e2))
  `(,op ,(proper:to-prim e1)
		,(proper:to-prim e2)))

(defun-match proper:to-prim ((list '_comma-sequence (tail exprs)))
  `(_comma-sequence ,@(proper:map-to-prim exprs)))

(defun-match proper:to-prim ((list '_newline-sequence (tail exprs)))
  `(_newline-sequence ,@(proper:newline-sequence->prim exprs)))

(defun-match- proper:newline-sequence->prim ((list) acc)
  (reverse acc))
(defun-match proper:newline-sequence->prim ((list 
											 (and form 
												  (list (proper:macro hd ex) (tail args)))
											 (tail rest))
											acc)
  (recur (cons (proper:macro-expand-top form)
			   rest)
		 acc))
(defun-match proper:newline-sequence->prim ((list 
											 (list (or '_newline-sequence 'newline-sequence)
												   (tail body-of-interior))
											 (tail body))
											acc)
  (recur (append body-of-interior body)
		 acc))

(defun-match proper:newline-sequence->prim ((list 
											 (list (or 'var '_var)
												   (proper:symbol-macro s e)
												   v-expr
												   (tail rest-of-vars))
											 (tail body))
											acc)
  (let* ((alias (gzu:gensym "%S" s))
		 (proper:symbol-macros (cons (make-hash-table) proper:symbol-macros))
		 (var-expr 
		  `(_var ,alias ,(proper:to-prim v-expr))))
	(proper:add-to-symbol-macro-context s
										`(lambda (_) ',alias))
	(proper:newline-sequence->prim 
	 (if rest-of-vars 
		 (cons `(_var ,@rest-of-vars) body)
	   body)
	 (cons var-expr acc))))

(defun-match proper:newline-sequence->prim ((list expr (tail rest)) acc)
  (recur rest (cons (proper:to-prim expr) acc)))

(defun-match proper:newline-sequence->prim (seq)
  (recur seq nil))


(defun-match- proper:newline-sequence->prim-switch-body ((list) acc)
  (reverse acc))
(defun-match proper:newline-sequence->prim-switch-body ((list 
														 (and form 
															  (list (proper:macro hd ex) (tail args)))
														 (tail rest))
														acc)
  (recur (cons (proper:macro-expand-top form)
			   rest)
		 acc))
(defun-match proper:newline-sequence->prim-switch-body ((list 
														 (list (or '_newline-sequence 'newline-sequence)
															   (tail body-of-interior))
														 (tail body))
														acc)
  (recur (append body-of-interior body)
		 acc))

(defun-match proper:newline-sequence->prim-switch-body ((list 
														 (list (or 'var '_var)
															   (proper:symbol-macro s e)
															   v-expr
															   (tail rest-of-vars))
														 (tail body))
														acc)
  (let* ((alias (gzu:gensym "%S" s))
		 (proper:symbol-macros (cons (make-hash-table) proper:symbol-macros))
		 (var-expr `(_var ,alias ,(proper:to-prim v-expr))))
	(proper:add-to-symbol-macro-context s
										`(lambda (_) ',alias))
	(proper:newline-sequence->prim-switch-body 
	 (if rest-of-vars 
		 (cons `(_var ,@rest-of-vars) body)
	   body)
	 (cons var-expr acc))))

(defun-match proper:newline-sequence->prim-switch-body ((list (or 'case '_case) (tail rest)) acc)
  (recur rest (cons '_case acc)))

(defun-match proper:newline-sequence->prim-switch-body ((list (or 'default '_default) (tail rest)) acc)
  (recur rest (cons '_default acc)))

(defun-match proper:newline-sequence->prim-switch-body ((list expr (tail rest)) acc)
  (recur rest (cons (proper:to-prim expr) acc)))

(defun-match proper:newline-sequence->prim-switch-body (expr)
  (recur expr nil))

(defun-match proper:to-prim ([(or '_: ':) (tail elements)])
  (coerce `(_: ,@(proper:map-to-prim elements)) 'vector))

(defun-match proper:to-prim ([hd (tail elements)])
  (coerce `(,(proper:to-prim hd) ,@(proper:to-prim elements)) 'vector))

(defun-match proper:to-prim ((list (or 'value '_value) expr))
  `(_value ,(proper:to-prim expr)))

(defun proper:add-to-global-macro-context (name function)
  (let ((context (car (last proper:macros))))
	(setf (gethash name context) function)))

(defun proper:add-to-macro-context (name function)
  (let ((context (car proper:macros)))
	(setf (gethash name context) function)))

(defun proper:add-to-global-pattern-context (name function)
  (let ((context (car (last proper:patterns))))
	(setf (gethash name context) function)))

(defun proper:add-to-pattern-context (name function)
  (let ((context (car proper:patterns)))
	(setf (gethash name context) function)))

(defun proper:add-to-global-symbol-macro-context (name function)
  (let ((context (car (last proper:symbol-macros))))
	(setf (gethash name context) function)))

(defun proper:add-to-symbol-macro-context (name function)
  (let ((context (car proper:symbol-macros)))
	(setf (gethash name context) function)))

(eval-when (load compile eval)
  (defun-match proper:fix-macro-expansion-patterns ((list pattern (tail forms)))
	`(,(cons 'list pattern) ,@forms))
  (defun-match proper:fix-pattern-expansion-patterns ((list pattern (tail forms)))
	`(,(cons 'list pattern) ,@forms)))

(defmacro* proper:define-macro-vector-body (name vector-of-bodies)
  (let* ((list-of-bodies 
		  (mapcar #'proper:fix-macro-expansion-patterns
				  (coerce vector-of-bodies 'list)))
		 (args (gensym))
		 (anything-else (gensym)))
	`(proper:add-to-global-macro-context 
	  ',name 
	  (lambda (&rest ,args)
		(match ,args 
			   ,@list-of-bodies
			   (,anything-else 
				(error "macro %S: failed to match %S" ',name ,anything-else)))))))

(defmacro* proper:define-macro (name arguments &body body)
  (if (and (vectorp arguments)
		   (null body))
	  `(proper:define-macro-vector-body ,name ,arguments)
	(let ((args (gensym))
		  (anything-else (gensym)))
	  `(proper:add-to-global-macro-context 
		',name 
		(lambda (&rest ,args)
		  (match ,args 
				 ((list ,@arguments)
				  ,@body)
				 (,anything-else 
				  (error "macro %S: failed to match %S" ',name ,anything-else))))))))

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
				(error "symbol-macro %S: failed to match %S" ',name ,anything-else)))))))

(defmacro* proper:define-simple-symbol-macro (name &body body)
  (let ((arg (gensym))
		(anything-else (gensym)))
	`(proper:add-to-global-symbol-macro-context 
	  ',name 
	  (lambda (,arg)
		,@body))))

(defun-match proper:to-prim ((list 
							  (list 'from (string loc) (non-kw-symbol id-from-head))
							  (tail args)))
  (proper:message 
   (concat "Encountered a \"from\" expr in head position"
		   " while in %S requesting value or macro from %S.")
   proper:current-module loc)
  (if (not (equal loc proper:current-module)) 
	  (match (proper:compile-module loc)
			 ((list manifest macros symbol-macros patterns)
			  (let* ((macro (proper:pages-lookup id-from-head macros)))
				(if macro (proper:message "Found macro at id: %S in %S" id-from-head loc))
				(if macro 
					(recur (apply macro args))
				  (recur `((_. ((_value require) ,loc) ,id-from-head) ,@args)))))
			 (anything-else 
			  (error "Gazelle Module %S didn't compile in from form %S" `(from ,loc ,id-from-head))))
	(recur `(,id-from-head ,@args))))

(defun-match proper:to-prim ((list 
							  (list '_proper:expand-with-this lexpr)
							  (tail args)))
  (proper:message "proper:expand-with-this %S" lexpr)
  (recur (apply lexpr args)))

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

(defun-match- proper:macro-expand-top ((list 
										(proper:macro _ expander)
										(tail arguments)))
  (recur (apply expander arguments)))
(defun-match proper:macro-expand-top (anything-else)
  anything-else)


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
 from 
 ((string loc) (non-kw-symbol id-from))
 (if (not (equal loc proper:current-module)) 
	 (match (proper:compile-module loc)
			((list manifest macros symbol-macros patterns)
			 (let* ((macro (proper:pages-lookup id-from macros)))
			   (if macro (proper:message "Found macro at id-from: %S in %S" id-from loc))
			   (if macro `(_proper:expand-with-this ,macro)
				 `(_value (_. ((_value require) ,loc) ,id-from)))))
			(anything-else 
			 (error "Gazelle Module %S didn't compile in from form %S" loc `(from ,loc ,id-from))))
   id-from))

(proper:define-macro 
 _let ((list-rest binders) (tail body))
 (let ((names (cons 'arguments (mapcar #'car binders)))
	   (expressions (mapcar #'cadr binders)))
   `(_. (_lambda ,names ,@body)
		(call this (_? (_=== (_typeof arguments) "undefined") undefined arguments) ,@expressions))))


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
		 ((_return (proper:signal-match-fail)))
		 _else
		 (,@(proper:make-last-return body))))))

(eval-when (eval compile load)
  (defpattern proper:list-of-ids (&optional (sub-pattern (gensym)))
	`(p 
	  #'listp
	  (p (lambda (lst)
		   (proper:all-satisfy 
			(lambda (x)
			  (and (symbolp x)
				   (not (keywordp x))))
			lst))
		 ,sub-pattern))))

(defun-match- proper:lambda-may-recur-p
  ((list 'lambda (p #'listp args) (tail body)))
  (let ((expanded-body 
		 (proper:to-prim `(_newline-sequence ,@body))))
	(> (length 
		(gzu:filter 
		 (lambda (x) 
		   (eq x 'recur))
		 (gzu:flatten expanded-body)))
	   0)))

(defun-match proper:lambda-may-recur-p
  ((list 'lambda (p #'vector terms)))
  (let ((bodies (mapcar 
				 (lambda (term)
				   (proper:to-prim `(_newline-sequence ,@(cdr term))))
				 (coerce terms 'list))))
	(> (length 
		(gzu:filter 
		 (lambda (x) 
		   (eq x 'recur))
		 (gzu:flatten bodies)))
	   0)))

(defun proper:very-simple-lambda-p (form)
  (match form
		 ((list 'lambda (proper:list-of-ids args) (tail body))
		  (if (proper:lambda-may-recur-p form)
			  nil
			t))
		 (otherwise nil)))

(defun proper:simple-lambda-but-recurs-p (form)
  (match form
		 ((list 'lambda (proper:list-of-ids args) (tail body))
		  (proper:lambda-may-recur-p form))
		 (_ nil)))

(defun proper:simple-array-subpatterns-p (patterns)
  (proper:all-satisfy (lambda (x)
						(and (symbolp x)
							 (not (keywordp x)))) patterns))

(defun proper:simple-array-subpatterns-with-tail-p (patterns)
  (let* ((r (reverse patterns))
		 (last (car r))
		 (all-but-last (reverse (cdr r))))
	(and (listp last)
		 (eq (car last) 'tail)
		 (symbolp (cadr last))
		 (not (keywordp (cadr last))))
	(proper:simple-array-subpatterns-p all-but-last)))

(eval-when (load compile eval)
  (defpattern proper:simple-array-subpatterns (&optional (pat (gensym)))
	`(p #'proper:simple-array-subpatterns-p ,pat))
  (defpattern proper:simple-array-subpatterns-with-tail 
	(&optional (symbols-pat (gensym))
			   (tail-symbol-pat (gensym)))
	(let ((pattern-list (gensym))
		  (r (gensym)))
	  `(p #'proper:simple-array-subpatterns-with-tail-p 
		  (maybe-funcall 
		   (lambda (,pattern-list)
			 (if (listp ,pattern-list) 
				 (let ((,r (reverse ,pattern-list)))
				   (list (reverse (cdr ,r))
						 (cadr (car ,r))))
			   *match-fail*))
		   (list ,symbols-pat ,tail-symbol-pat))))))




(eval-when (eval compile load)
  (defun proper:non-kw-symbol (o)
	(and (symbolp o)
		 (not (keywordp o))))
  (defpattern proper:{}-tail (&optional (symbols (gensym))
										(patterns (gensym)))
	`(maybe-funcall 
	  (lambda (value)
		(if (listp value)
			(let ((evens (gzu:even-indexes value))
				  (odds (gzu:odd-indexes value)))
			  (if (= (length evens)
					 (length odds))
				  (if (proper:all-satisfy #'proper:non-kw-symbol evens)
					  (list evens odds)
					*match-fail*)
				*match-fail*))
		  *match-fail*))
	  (list ,symbols ,patterns))))

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

;;; Pattern Matcher

(defvar proper:match-fail-val "match-fail-e1aa3b7e7ce9731266013c178de842b5")
(defvar proper:signal-match-fail `(_return ,proper:match-fail-val))

(eval-when (load compile eval)
  (defpattern proper:atom (&optional (pattern (gensym)))
	`(or (keyword ,pattern)
		 (number ,pattern)
		 (string ,pattern))))

(defun-match- proper:expand-match1-body ('undefined
										 val body acc)
  (let ((acc (append acc
					 `((_if (_! (_=== "undefined" (_typeof ,val)))
							(,proper:signal-match-fail))))))
	(append acc body)))

(defun-match proper:expand-match1-body ('null
										val body acc)
  (let ((acc (append acc
					 `((_if (_! (_=== null ,val))
							(,proper:signal-match-fail))))))
	(append acc body)))

(defun-match proper:expand-match1-body ('true
										val body acc)
  (let ((acc (append acc
					 `((_if (_! (_=== true ,val))
							(,proper:signal-match-fail))))))
	(append acc body)))

(defun-match proper:expand-match1-body ('false
										val body acc)
  (let ((acc (append acc
					 `((_if (_! (_=== false ,val))
							(,proper:signal-match-fail))))))
	(append acc body)))

(defun-match proper:expand-match1-body ((non-kw-symbol s) val body acc)
  (append acc 
		  `((_var ,s ,val)
			,@body)))

(defun-match proper:expand-match1-body ((proper:atom a) val body acc)
  (append acc 
		  `((_if (_! (_=== ,a ,val))
				 (,proper:signal-match-fail))
			,@body)))

(defun-match proper:expand-match1-body ((list 'p fun-expr) val body acc)
  (let ((fun (gensym "match-fun-expr-"))) 
	(append acc 
 			`((_var ,fun ,fun-expr)
			  (_if (_! (,fun ,val))
				   (,proper:signal-match-fail))
			  ,@body))))

(defun-match proper:expand-match1-body ((list 'p fun-expr pattern) val body acc)
  (let* ((fun (gensym "match-fun-expr-"))
		 (acc (append acc 
					  `((_var ,fun ,fun-expr)
						(_if (_! (,fun ,val))
							 (,proper:signal-match-fail))))))
	(recur pattern val body acc)))

(defun-match proper:expand-match1-body ((list 'number) val body acc)
  (recur `(type "number")
		 val body acc))

(defun-match proper:expand-match1-body ((list 'number pattern) val body acc)
  (recur `(type "number" ,pattern)
		 val body acc))


(defun-match proper:expand-match1-body ((list 'or (tail sub-patterns)) val body acc)
  (let* ((previous-match-succeeded (gensym "previous-match-succeeded-"))
		 (acc (append acc `((_var ,previous-match-succeeded _true))))
		 (switch-statement `(_switch 1)))
	(loop for pat in sub-patterns do
		  (let ((sub-body 
				 `(_case 1 
						 ,@(let ((proper:signal-match-fail `(_= ,previous-match-succeeded _false))) 
							 (proper:expand-match1-body 
							  pat 
							  val 
							  `((_if ,previous-match-succeeded (_break))
								(_= ,previous-match-succeeded _true)) nil)))))
			(setq switch-statement (append switch-statement sub-body))))
	(setq switch-statement
		  (append switch-statement `(_default ,proper:signal-match-fail)))
	(append acc `(,switch-statement
				  ,@body))))

(defun-match proper:expand-match1-body ((list 'or-let pattern (tail binders)) val body acc)
  (recur `(or ,pattern (let ,@binders)) val body acc))

(defun-match proper:expand-match1-body ((list 'call f-expr pattern) val body acc)
  (let* ((f-result (gensym "f-result"))
		 (acc (append acc 
					  `((_var ,f-result (,f-expr ,val))
						(_if (_=== ,f-result ,proper:match-fail-val)
							 (,proper:signal-match-fail))))))
	(recur pattern f-result body acc)))

(defun-match proper:expand-match1-body ((list (or 'opt 'defined-or) pat alt-val) val body acc)
  (recur `(or (defined ,pat)
			  (call (lambda (x) ,alt-val) ,pat))
		 val body acc))

(defun-match proper:expand-match1-body ((list 'and (tail sub-patterns)) val body acc)
  (append acc 
		  (loop for pat in sub-patterns append 
				(proper:expand-match1-body pat val nil nil))
		  body))

(defun-match proper:expand-match1-body ((list 'let (tail bindings)) val body acc)
  (append acc 
		  (loop for binding in bindings collect 
				(match binding 
					   ((list (non-kw-symbol s)
							  expr)
						`(_var ,s ,expr))))
		  body))

(defun-match proper:expand-match1-body ([(or : '_:) (tail 
													 (proper:list-of-ids ids))]
										val body acc)
  (let ((n (length ids))) 
	(append acc
			`((_if (_! (_=== "object" (_typeof ,val)))
				   (,proper:signal-match-fail))
			  (_if (_! (_=== ,n (_. ,val length)))
				   (,proper:signal-match-fail))
			  ,@(loop for id-it in ids and index from 0 collect
					  `(_var ,id-it [,val ,index]))
			  ,@body))))

(defun proper:patterns-with-tail? (patterns)
  (or (and (> (length patterns) 0)
		   (let ((final-pattern (car (last patterns))))
			 (and (listp final-pattern)
				  (= 2 (length final-pattern))
				  (eq (car final-pattern) 'tail))))
	  (and (> (length patterns) 1)
		   (let ((last-two (last patterns 2)))
			 (and (eq (car last-two) :*))))))

(defun proper:second-to-last (lst)
  (car (last lst 2)))

(defun proper:patterns-with-tail->parts (patterns)
  (if (eq (proper:second-to-last patterns) :*)
	  (list (subseq patterns 0 (- (length patterns) 2))
			(car (last patterns)))
	(list 
	 (subseq patterns 0 (- (length patterns) 1))
	 (cadr (car (last patterns))))))

(defun proper:all-but-last (lst)
  (reverse (cdr (reverse lst))))

(defun-match proper:expand-match1-body ((list 'defined sub-pattern)
										val body acc)
  (let ((acc (append acc
					 `((_if (_=== "undefined" (_typeof ,val))
							(,proper:signal-match-fail))))))
	(proper:expand-match1-body sub-pattern val body acc)))



(defun-match proper:expand-match1-body ((list 'undefined sub-pattern)
										val body acc)
  (let ((acc (append acc
					 `((_if (_! (_=== "undefined" (_typeof ,val)))
							(,proper:signal-match-fail))))))
	(proper:expand-match1-body sub-pattern val body acc)))

(defun-match proper:expand-match1-body ((list 'quote expr)
										val body acc)
  (proper:expand-match1-body (prim:transcode->string expr)
							 val body acc))

(defun-match proper:expand-match1-body ((list 'quote expr)
										val body acc)
  (proper:expand-match1-body (prim:transcode->string (proper:to-prim expr))
							 val body acc))

(defun-match proper:expand-match1-body ((list 'instance of-expr)
										val body acc)
  (recur (let ((obj (gensym)))
		   `(p (lambda (,obj)
				 (_instanceof ,obj ,of-expr))))
		 val body acc))

(defun-match proper:expand-match1-body ((list 'instance of-expr pattern)
										val body acc)
  (recur (let ((obj (gensym)))
		   `(p (lambda (,obj)
				 (_instanceof ,obj ,of-expr))
			   ,pattern))
		 val body acc))

(defun-match proper:expand-match1-body ((list 'type of-expr)
										val body acc)
  (recur (let ((obj (gensym)))
		   `(p (lambda (,obj)
					  (_=== (_typeof ,obj) ,of-expr))))
		 val body acc))

(defun-match proper:expand-match1-body ((list 'type of-expr pattern)
										val body acc)
  (recur (let ((obj (gensym)))
		   `(and (p (lambda (,obj)
					  (_=== (_typeof ,obj) ,of-expr))
					,pattern)))
		 val body acc))


(defun proper:patterns-with-optional-syntax? (patterns)
  (member :- patterns))


(defun-match- proper:get-mandatory-and-optional-parts (nil acc)
  (list (reverse acc) nil))
(defun-match proper:get-mandatory-and-optional-parts ((list :- (tail optional-parts)) acc)
  (list (reverse acc) optional-parts))
(defun-match proper:get-mandatory-and-optional-parts ((list other (tail rest)) acc)
  (recur rest (cons other acc)))
(defun-match proper:get-mandatory-and-optional-parts (patterns)
  (recur patterns nil))

(defun proper:patterns-with-tail-syntax? (patterns)
  (member :* patterns))

(defun-match- proper:get-mandatory-and-tail-part (nil acc)
  (list (reverse acc) nil))
(defun-match proper:get-mandatory-and-tail-part ((list :* tail-part0 tail-part1 (tail rest)) acc)
  (error "Malformed :* pattern: :* must be followed by exactly one pattern.  Got %S" (list* tail-part0 tail-part1 rest)))
(defun-match proper:get-mandatory-and-tail-part ((list :* tail-part) acc)
  (list (reverse acc) tail-part))
(defun-match proper:get-mandatory-and-tail-part ((list other (tail rest)) acc)
  (recur rest (cons other acc)))
(defun-match proper:get-mandatory-and-tail-part (patterns)
  (recur patterns nil))


(defun-match proper:expand-match1-body ((or [(or : '_:) (tail patterns)]
											(list 'array (tail patterns)))
										val body acc)
  (cond
   ((proper:patterns-with-optional-syntax? patterns)
	(match (proper:get-mandatory-and-optional-parts patterns)
		   ((list mand opt)
			(recur `[: ,@mand (tail [:- ,@opt])] val body acc))))
   ((not (proper:patterns-with-tail? patterns))
	(let* ((match-temps
			(mapcar (lambda (x)
					  (gensym "match-temp-"))
					patterns))
		   (acc (append acc 
						`((_if (_! (_=== "object" (_typeof ,val)))
							   (,proper:signal-match-fail))
						  (_if (_! (_=== ,(length patterns)
 										 (_. ,val length)))
							   (,proper:signal-match-fail))
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
		((parts (proper:patterns-with-tail->parts patterns)) 
		 (normal-patterns (car parts))
		 (n-normal (length normal-patterns))
		 (tail-pattern (cadr parts))
		 (simple-part-name (gensym "match-array-simple-part-"))
		 (acc (append acc 
					  `((_if (_! (_=== "object" (_typeof ,val)))
							 (,proper:signal-match-fail))
						(_if (_! (_>= (_. ,val length) ,n-normal))
							 (,proper:signal-match-fail))
						(_var ,simple-part-name (Array.prototype.slice.call ,val 0 ,n-normal)))))
		 (acc (proper:expand-match1-body `[: ,@normal-patterns] simple-part-name nil
										 acc))
		 (tail-name (gensym "match-array-tail-part-"))
		 (acc (append acc 
					  `((_var ,tail-name (Array.prototype.slice.call ,val ,n-normal)))))
		 (acc (proper:expand-match1-body tail-pattern tail-name body acc)))
	  acc))))

(defun-match proper:expand-match1-body ((or [:- (tail patterns)]
											(list 'array (tail patterns)))
										val body acc)
  (cond 
   ((not (proper:patterns-with-tail? patterns))
	(let* ((match-temps
			(mapcar (lambda (x)
					  (gensym "match-temp-"))
					patterns))
		   (acc (append acc 
						`(,@(loop for temp in match-temps
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
					  `((_var ,simple-part-name (Array.prototype.slice.call ,val 0 ,n-normal)))))
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
					  `((_var ,p (_. ,val ,s))
						(_if (_=== "undefined" (_typeof ,p))
							 (,proper:signal-match-fail))))
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
										  (,proper:signal-match-fail))))))
			  (setq acc 
					(proper:expand-match1-body pattern temp nil new-acc))))
	  (append acc body)))))

(defun-match proper:expand-match1-body ((list (or '{}- '_{}-)
											  (tail (! (proper:{}-tail symbols patterns))))
										val body acc)
  (let ((acc 
		 (append acc
				 `((_if (_=== "undefined" (_typeof ,val))
						((_= ,val (_{})))))))) 
	(cond 
	 ((proper:all-satisfy #'proper:non-kw-symbol patterns)
	  ;;simple case
	  (append acc 
			  `(,@(loop for s in symbols and p in patterns append 
						`((_var ,p (_. ,val s))
						  (_if (_=== "undefined" (_typeof ,p))
							   (,proper:signal-match-fail))))
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
									 `((_var ,temp (_. ,val ,symbol))))))
				(setq acc 
					  (proper:expand-match1-body pattern temp nil new-acc))))
		(append acc body))))))

(defun-match- proper:options{}-ext-name ((list (non-kw-symbol e)
											   pattern
											   default))
  e)

(defun-match proper:options{}-ext-name ((list (non-kw-symbol e)
											  default))
  e)

(defun-match proper:options{}-ext-name ((list (non-kw-symbol e)))
  e)

(defun-match- proper:options{}-int-pat ((list (non-kw-symbol e)
											  pattern
											  default))
  pattern)

(defun-match proper:options{}-int-pat ((list (non-kw-symbol e)
											 default))
  e)

(defun-match proper:options{}-int-pat ((list (non-kw-symbol e)))
  e)

(defun-match- proper:options{}-default ((list (non-kw-symbol e)
											  pattern
											  default))
  default)

(defun-match proper:options{}-default ((list (non-kw-symbol e)
											 default))
  default)

(defun-match proper:options{}-default ((list (non-kw-symbol e)))
  '_undefined)


(defun proper:transform-options{}-segment (segment)
  (if (symbolp segment)
	  (list segment segment)
	`(,(proper:options{}-ext-name segment)
	  (defined-or ,(proper:options{}-int-pat segment)
		,(proper:options{}-default segment)))))

(defun-match proper:expand-match1-body ((list 'options{} (tail expressions))
										val body acc)
  (recur `({}- ,@(loop for e in expressions append 
					   (proper:transform-options{}-segment e)))
		 val body acc))

(defun-match proper:expand-match1-body ((list 'as-options{} (tail expressions))
										val body acc)
  (let ((a-expr (gensym "array-expression"))
		(out (gensym "out"))
		(i (gensym "i"))) 
	(recur `(call (lambda (,a-expr)
					(_var ,out (_{}))
					(for ((_var ,i 0) (_< ,i (.. ,a-expr length)) (_= ,i (_+ ,i 2)))
						 (_= [,out [,a-expr ,i]] [,a-expr (_+ ,i 1)]))
					,out)
				  (options{} ,@expressions))
		   val body acc)))

(defun-match proper:expand-match1-body ((list (proper:custom-pattern p expander) 
											  (tail expressions))
										val body acc)
  (recur (apply expander expressions) val body acc))

(defun-match proper:expand-match1-body ((list (list 'from (string module-loc) (non-kw-symbol name)) 
											  (tail expressions))
										val body acc)
  (if (not (equal module-loc proper:current-module)) 
	  (match (proper:compile-module module-loc) 
			 ((list manifest macros symbol-macros patterns) 
			  (let ((expander (gethash name patterns))) 
				(recur (apply expander expressions) val body acc))))
	(recur (proper:pages-lookup name proper:patterns) val body acc)))

(defun-match proper:expand-match1-body (pattern val-expr body)
  (let ((val (gensym "match-val-"))) 
	(recur pattern val body 
		   `(_let ()
				  (_var ,val ,val-expr)))))

(proper:define-macro 
 match1 
 (pattern value-expr (tail body))
 (let ((proper:signal-match-fail `(_return ,proper:match-fail-val))) 
   (proper:expand-match1-body pattern value-expr body)))

(proper:define-macro 
 var-match
 (pattern value-expr)
 (let* ((val-name (gensym "match-var"))
		(proper:signal-match-fail `(_throw (_+ ,(format "Match error in var-match %S against: " `(,pattern ,value-expr)) ,val-name)))
		(body `(_newline-sequence (_var ,val-name ,value-expr))))
   (proper:expand-match1-body pattern val-name nil body)))


(proper:define-macro 
 match (match-value 
		(tail (must-match 
			   (proper:match-body body)
			   error-val
			   (format (concat "match's body must be a non-empty " 
							   "sequence of proper lists, with a " 
							   "pattern in the head of each.  Got %S")
					   `(match ,match-value ,error-val)))))
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
	 (_throw (_+ ,(replace-regexp-in-string "\"" "''" (format "match-fail at (%S) for value " `(match ,match-value ,@body))) (JSON.stringify ,value))))))


(defun-match- proper:simple-lambda-p ((list 'lambda arg-list (tail body)))
  (proper:all-satisfy (lambda (x)
						(and (symbolp x)
							 (not (keywordp x)))) arg-list))

;; (proper:define-macro 
;;  lambda (args (tail body))
;;  (if (proper:simple-lambda-p `(lambda ,args ,@body))
;; 	 `(_lambda ,args ,@body)
;;    (let ((otherwise (gensym)))
;; 	 `(_lambda 
;; 	   () 
;; 	   (match (_. Array prototype slice (call arguments 0))
;; 			  ([: ,@args]
;; 			   ,@body)
;; 			  (,otherwise (_throw (_+ "No match error in lambda " ,(format "%S" `(lambda ,args ,@body))))))))))

(proper:define-macro 
 designated-lambda 
 (designator (tail forms))
 (let ((rlambda `(lambda ,@forms)))
   (proper:message "In designated-lambda looking at rlambda: %S" rlambda)
   (cond
	((proper:very-simple-lambda-p rlambda)
	 (proper:message "Very simple lambda case.")
	 `(_lambda ,@forms))
	((proper:simple-lambda-but-recurs-p rlambda)
	 (proper:message "Simple lambda with recursion.")
	 `(designated-lambda ,designator 
						 [(,@forms)]))
	(:otherwise 
	 (proper:message "Full complex lambda.")
	 (match rlambda 
			((list 'lambda (p #'vectorp vector-forms))
			 `(complex-lambda ,designator ,vector-forms))
			((list 'lambda args (tail body))
			 `(complex-lambda ,designator 
							  [(,args ,@body)])))))))

(proper:define-macro 
 lambda
 ((tail forms))
 `(designated-lambda anonymous ,@forms))


(proper:define-macro 
 define-macro 
 [((name (list-rest patterns) (tail body))
   (let* ((args (gensym))
		  (transform-lambda 
		   (eval `(lambda (&rest ,args)
					(match ,args
						   ((list ,@patterns)
							,@body)
						   (,args 
							(error "Macro %s failed for args %S" ',name ,args)))))))
	 (proper:add-to-macro-context name transform-lambda)
	 `(_comment ,name "macro - no dynamic value.")))
  ((name [(tail sub-bodies)])
   (let* ((args (gensym))
		  (transform-lambda 
		   (eval `(lambda (&rest ,args)
					(match ,args
						   ,@(mapcar #'proper:fix-macro-expansion-patterns sub-bodies)
						   (,args (error "Macro %s failed for args %S" ',name ,args)))))))
	 (proper:add-to-macro-context name transform-lambda)
	 `(_comment ,name "macro - no dynamic value.")))])

(proper:define-macro 
 define-pattern 
 [((name (list-rest patterns) (tail body))
   (let* ((args (gensym))
		  (transform-lambda 
		   (eval `(lambda (&rest ,args)
					(match ,args
						   ((list ,@patterns)
							,@body)
						   (,args 
							(error "Pattern %s failed for args %S" ',name ,args)))))))
	 (proper:add-to-pattern-context name transform-lambda)
	 `(_comment ,name "pattern - no dynamic value.")))
  ((name [(tail sub-bodies)])
   (let* ((args (gensym))
		  (transform-lambda 
		   (eval `(lambda (&rest ,args)
					(match ,args
						   ,@(mapcar #'proper:fix-pattern-expansion-patterns sub-bodies)
						   (,args (error "Pattern %s failed for args %S" ',name ,args)))))))
	 (proper:add-to-pattern-context name transform-lambda)
	 `(_comment ,name "pattern - no dynamic value.")))])

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
 complex-lambda 
 [(((non-kw-symbol designator) (p #'vectorp bodies))
   (let ((recur-sigil (gensym "recur-sigil-"))
		 (return-value (gensym "return-value-"))
		 (args (gensym "args-"))
		 (actual-function (gensym "actual-fun-"))
		 (recur-p (gensym "recur-p"))
		 (val (gensym "val-"))
		 (anything-else (gensym "anything-else-")))
	 `(_function 
	   ()
	   (_var ,return-value _undefined)
	   (_var recur (_function 
					()
					(_return 
					 (_{} recur-sigil ',recur-sigil
						  args arguments))))
	   (_var ,recur-p 
			 (_function (,val)
						(_if (_=== "undefined" (_typeof ,val))
							 ((_return false)))
						(_return 
						 (_=== (_. ,val recur-sigil) ',recur-sigil))))
	   (_var 
		,actual-function 
		(_function 
		 ()
		 (_return 
		  (match (.. Array prototype slice (apply arguments))
				 ,@(mapcar 
					(lambda (body)
					  (match body
							 ((list patternette (tail real-body))
							  `([: ,@patternette]
								(_newline-sequence ,@real-body)))))
					bodies)
				 (,anything-else 
				  (_throw (_+ ,(format "Match fail in %S against: " 
									   (if designator
										   designator
										 `(lambda bodies))) ,anything-else)))))))
	   (_= ,return-value (_. ,actual-function (apply this arguments)))
	   (_while (,recur-p ,return-value)
			   (_= ,return-value (_. ,actual-function (apply this (_. ,return-value args)))))
	   (_return ,return-value))))
  (((p #'vectorp bodies))
   `(complex-lambda nil ,bodies))])


(proper:define-macro 
 complex-function 
 (name (p #'vectorp bodies))
 `(_var ,name (complex-lambda ,name ,bodies)))

(proper:define-macro 
 define ((tail parts))
 (match parts
		((list (non-kw-symbol name) value-expr)
		 `(_var ,name ,value-expr))
		((list (list (non-kw-symbol name) (tail args)) (tail (p #'proper:not-null body)))
		 `(_var ,name (designated-lambda ,name ,args ,@body)))
		((list (list (non-kw-symbol name) (tail function-terms)))
		 `(_var ,name (designated-lambda ,name ,@function-terms)))
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
  `(did-not-converge ,arg ,max-count))

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
   (proper:to-prim `(_proper:unit ,@body))))

(proper:define-macro 
 _proper:unit 
 ((tail body))
 (match (proper:fixed-point #'proper:reduce-unit-body-once body)
		((list 'converged final-body count)
		 `(_let () ,@final-body))
		((list 'did-not-converge non-final-body count)
		 (error  
		  (concat "_proper:unit compilation did not converge."
				  "  Do you have a loop in macroexpansion in"
				  " the body %s?") non-final-body))))

(proper:define-macro
 _proper:symbol-macro-let ((list (tail pairs))
						   (tail body)) 
 (let ((proper:symbol-macros (cons (make-hash-table) proper:symbol-macros))
	   (proper:macros (cons (make-hash-table) proper:macros)))
   (loop for (name expansion) in pairs do
		 (proper:add-to-symbol-macro-context 
		  name
		  (eval `(lambda (_) ',expansion))))
   (proper:to-prim `(_proper:unit ,@body))))

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
  (if proper:using-node-require
	  (proper:fetch-node-rjs-root)
	(if proper:*rjs-root*
		proper:*rjs-root*
	  (let ((d (call-interactively #'proper:read-rjs-dir)))
		(prog1 d
		  (setq proper:*rjs-root* d))))))

(defvar proper:*module-manifest* nil)
(defun proper:inside-module-p ()
  (if proper:*module-manifest* t nil))

(defun proper:module-spec->module-file (spec)
  (let ((root (proper:fetch-rjs-root)))
	(replace-regexp-in-string "/+" "/" (concat root spec ".gazelle"))))

(defun-match- proper:module-module-specs ((list 'module module-specs (tail body)))
  module-specs)

(defun-match- proper:module-module-specs-for-deps ((list 'module module-specs (tail body)))
  (loop for spec in module-specs 
		when (match spec 
					((list (list (or 'js-library 'js) loc name))
					 nil)
					(elsewise t))
		collect spec))


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
	`(p #'proper:as-forms-p ,pattern)))

(defun proper:module-location->symbol (loc)
  (intern (concat "module-" (substring (md5 (file-truename (concat (proper:fetch-rjs-root) loc)))
									   0 10))))

(defun proper:lookup-manifest-types (symbol manifest)
  (gzu:alist-lookup :type (gethash symbol manifest)))

(defun proper:setup-macro-as (source local 
									 module-location 
									 local-module-name
									 manifest macros symbol-macros patterns)
  (let ((expander (proper:pages-lookup source macros)))
	(proper:message "adding as macro, %S referring to %S" local expander)
	(proper:add-to-macro-context local 
								 (proper:pages-lookup source macros))))

(defun proper:setup-pattern-as (source local 
									   module-location 
									   local-module-name
									   manifest macros symbol-macros patterns)
  (let ((expander (proper:pages-lookup source patterns)))
	(proper:message "adding as pattern, %S referring to %S" local expander)
	(proper:add-to-pattern-context local 
								   (proper:pages-lookup source patterns))))

(defun proper:setup-value-as (source local 
									 module-location 
									 local-module-name
									 manifest macros symbol-macros patterns)
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
							 symbol-macros
							 patterns)
  (proper:message "Setting up as form %S" as-form)
  (loop for form in (cdr as-form) do
		(match form
			   ((proper:as-form source local)
				(loop for type in (proper:lookup-manifest-types source manifest) 
					  do
					  (match type
							 (:macro (proper:setup-macro-as 
									  source local 
									  module-location 
									  local-module-name
									  manifest macros symbol-macros patterns))
							 (:pattern (proper:setup-pattern-as 
										source local 
										module-location 
										local-module-name
										manifest macros symbol-macros patterns))
							 ((or :value :function)
							  (proper:setup-value-as 
							   source local
							   module-location 
							   local-module-name
							   manifest macros symbol-macros patterns))))))))

(proper:define-macro
 _proper:require-spec
 [(((or (and (string module-location)
			 (let1 local-module-name (proper:module-location->symbol module-location)))
		(list (string module-location)
			  (symbol local-module-name)))
	(tail parts))
   (match (proper:compile-module module-location)
		  ((list manifest macros symbol-macros patterns)
		   (proper:message "Compiled/loaded module %s" module-location)
		   (proper:message "* manifest has keys %S" (gzu:hash-table-keys manifest))
		   (proper:message "* top of macros has keys %S" (gzu:hash-table-keys (car macros)))
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
										 symbol-macros
										 patterns)))
		   `(_comment (,module-location ,@parts)))))
  (((list (or 'js 'js-library) loc name))
   `(_comment ((js ,loc ,name))))])

(defun proper:module-specs->crypto-symbols (specs)
  (mapcar (lambda (spec)
			(match spec
				   ((list (string location) (tail parts))
					(proper:module-location->symbol location))
				   ((list (list (string location) (symbol local-symbol))
						  (tail parts))
					local-symbol)
				   ((list (list (or 'js 'js-library) (string require-string) (non-kw-symbol local-name)))
					local-name)
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
			 location)
			((list (list (or 'js-library 'js) (string require-string) (non-kw-symbol local-name)))
			 require-string))) 
   specs))

(defun proper:module-gazelle-file->js-file (file)
  (let ((new (replace-regexp-in-string "\.gazelle$" ".js" file)))
	(if (string= new file)
		(concat file ".js")
	  new)))

(defvar proper:*module-compile-cache* 
  (make-hash-table :test 'equal))
(setq proper:*module-compile-cache* (make-hash-table :test 'equal))
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
			   (req-specs (proper:module-module-specs-for-deps contents)))
			  (proper:module-specs->locations req-specs)))

(defvar proper:*short-term-checked-modules* nil)

(defun* proper:module-needs-recompile (spec &optional (cache proper:*short-term-checked-modules*))
  (if (null cache)
	  (setq cache (make-hash-table :test 'equal)))
  (match (gethash spec cache)
		 (:true t)
		 (:false nil)
		 (otherwise 
		  (when (not proper:*use-module-cache*)
			(proper:message "Module cache is disabled.")
			(proper:reset-module-cache))
		  (match-let* ((file (proper:module-spec->module-file spec))
					   (current-hash (gzu:file-hash file))
					   ((cons previous-hash previous-compilation)
						(gethash file proper:*module-compile-cache*))
					   (dependencies (proper:extract-module-dependencies spec))
					   (dep-result (gzu:any-satisfy 
									(lambda (spec) (proper:module-needs-recompile spec cache)) 
									dependencies))
					   (result (or (not (equal current-hash previous-hash))
								   dep-result)))
					  (if result
						  (progn (setf (gethash spec cache) :true)
								 (proper:message (concat "Module %s needs recompile (current %s," 
														 " previous %s, dependencies %S, dep-result %S, result %s) .") 
												 spec
												 current-hash 
												 previous-hash 
												 dependencies
												 dep-result
												 result))
						(setf (gethash spec cache) :false))
					  result))))

(defvar proper:current-module nil)
(defun proper:compile-module (spec)
  (proper:message "Attempting to compile/load from cache %S" spec)
  (let ((proper:current-module spec)
		(file (proper:module-spec->module-file spec)))
	(if (proper:module-needs-recompile spec)
		(let ((new-compilation (proper:really-compile-module spec))
			  (new-hash (gzu:file-hash file)))
		  (setf (gethash file proper:*module-compile-cache*)
				(cons new-hash new-compilation))
		  (if proper:*short-term-checked-modules*
			  (setf (gethash spec proper:*short-term-checked-modules*)
					:false))
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

(defun proper:prefix_ (s)
  (intern (concat "_" (symbol-name s))))

(defun proper:expand-essentials (define define-macro)
  `(_newline-sequence 
	(,define (+ hd (tail tl))
	  (for (i :in tl)
		   (set! hd (_+ hd [tl i])))
	  hd)
	(,define (* hd (tail tl))
	  (for (i :in tl)
		   (set! hd (_* hd [tl i]))))
	(,define (- hd (tail tl))
	  (_- hd (.. + (apply _undefined tl))))
	(,define (/ hd (tail tl))
	  (_/ hd (.. * (apply _undefined tl))))
	,@(loop for op in '(< <= > >= == === >> << >>> & | ^) collect 
			`(define (,op a b)
			   (,(proper:prefix_ op) a b)))
	(,define-macro && 
	  [((a b)
		`(_&& ,a ,b))
	   ((a (tail rest))
		`(_&& ,a (&& ,@rest)))])
	(,define-macro ||
	  [((a b)
		`(_&& ,a ,b))
	   ((a (tail rest))
		`(_&& ,a (|| ,@rest)))])))

(proper:define-macro 
 gazelle:essentials
 [((:export (and export-flag (or 't 'nil)))
   (let ((define (if export-flag 'define+ 'define))
		 (define-macro (if export-flag 'define-macro+ 'define-macro)))
	 (proper:expand-essentials define define-macro)
	 ))
  (()
   `(gazelle:essentials :export nil))])

;; (proper:define-macro 
;;  require (specs (tail body))
;;  (proper:message "specs is %S" specs)
;;  `((_value require)
;;    [: ,@(proper:module-specs->locations specs)]
;;    (designated-lambda require-form (,@(proper:module-specs->crypto-symbols specs))
;; 					  (_proper:macro-context
;; 					   ,@(loop for spec in specs collect
;; 							   `(_proper:require-spec ,@spec))
;; 					   (_newline-sequence ,@body)))))

(proper:define-macro 
 require (specs (tail body))
 (proper:message "specs is %S" specs)
 (let* ((current-module (gensym "window-alias"))
		(spec "window"))
   (proper:to-prim `((_value require)
					 [: ,@(proper:module-specs->locations specs)]
					 (designated-lambda require-form (,@(proper:module-specs->crypto-symbols specs))
										(_proper:macro-context
										 ,@(loop for spec+ in specs collect
												 `(_proper:require-spec ,@spec+))
										 (_newline-sequence
										  (_var ,current-module window)
										  (define (set-module-object value)
											(_= ,current-module value))
										  (_proper:unit 
										   (define-macro _current-module ()
											 current-module)
										   (define-macro define+ ((tail parts))
											 (match parts
													((list (non-kw-symbol name) value-expr)
													 
													 (proper:add-to-symbol-macro-context 
													  name
													  (lexical-let  
														  ((lcurrent-module current-module)
														   (lname name))
														(lambda (_) `(_. ,lcurrent-module ,lname))))
													 `(_= (_. ,current-module ,name) ,value-expr))
													((list (list (non-kw-symbol name) (tail args)) 
														   (tail (p #'proper:not-null body)))
													 
													 (proper:add-to-symbol-macro-context 
													  name
													  (lexical-let
														  ((lcurrent-module current-module) 
														   (lname name))
														(lambda (_) `(_. ,lcurrent-module ,lname))))
													 `(_= (_. ,current-module ,name) (designated-lambda 
																					  ,(intern 
																						(concat spec "-" (symbol-name name))) 
																					  ,args ,@body)))
													((list (list (non-kw-symbol name) (tail function-terms)))
													 
													 (proper:add-to-symbol-macro-context 
													  name
													  (lexical-let
														  ((lcurrent-module current-module) 
														   (lname name))
														(lambda (_) `(_. ,lcurrent-module ,lname))))
													 `(_= (_. ,current-module ,name) (designated-lambda 
																					  ,(intern 
																						(concat spec "-" (symbol-name name))) 
																					  ,@function-terms)))
													(other-form
													 (error (concat "gazelle/proper define must either"
																	" by (define symbol expr) or (define"
																	" (name arg-pattern ...) body0 ...)," 
																	" got %S") `(define+ ,@parts)))))
										   (define-macro define-macro+ (name (tail rest))
											 
											 `(define-macro ,name ,@rest))
										   (define-macro define-pattern+ (name (tail rest))
											 
											 `(define-pattern ,name ,@rest))
										   ,@(loop for spec* in specs collect
												   `(_proper:require-spec ,@spec*))
										   ,@body))))))))




(defvar proper:*node-rjs-root* nil)
(defun proper:read-node-rjs-dir (d)
  (interactive "DPlease enter your node require-js project root.")
  d)
(defun proper:set-node-rjs-root ()
  (interactive)
  (setq proper:*node-rjs-root* nil)
  (proper:fetch-node-rjs-root))
(defun proper:fetch-node-rjs-root ()
  (if proper:*node-rjs-root*
	  proper:*node-rjs-root*
	(let ((d (call-interactively #'proper:read-node-rjs-dir)))
	  (prog1 d
		(setq proper:*node-rjs-root* d)))))

(defvar proper:using-node-require nil)
(proper:define-macro 
 node-require (specs (tail body))
 (proper:message "specs is %S" specs)
 (let* ((current-module (gensym "global-alias"))
		(spec "global"))
   (proper:to-prim 
   `(((_function () 
				 (_var rjs ((value require) "requirejs"))
				 (comment				(console.log (_+ "using requirejs in nodejs, rjs is " rjs)))
				 (rjs.config 
				  ({} node-require require
					  ))
				 (_return rjs)))
	 [: ,@(proper:module-specs->locations specs)]
	 ;; (designated-lambda require-form (,@(proper:module-specs->crypto-symbols specs))
	 ;; 				   (_proper:macro-context
	 ;; 					,@(loop for spec in specs collect
	 ;; 							`(_proper:require-spec ,@spec))
	 ;; 					,@body))
	 (designated-lambda require-form (,@(proper:module-specs->crypto-symbols specs))
						(_proper:macro-context
						 ,@(loop for spec+ in specs collect
								 `(_proper:require-spec ,@spec+))
						 (_newline-sequence
						  (_var ,current-module global)
						  (define (set-module-object value)
							(_= ,current-module value))
						  (_proper:unit 
						   (define-macro _current-module ()
							 current-module)
						   (define-macro define+ ((tail parts))
							 (match parts
									((list (non-kw-symbol name) value-expr)
													 
									 (proper:add-to-symbol-macro-context 
									  name
									  (lexical-let  
										  ((lcurrent-module current-module)
										   (lname name))
										(lambda (_) `(_. ,lcurrent-module ,lname))))
									 `(_= (_. ,current-module ,name) ,value-expr))
									((list (list (non-kw-symbol name) (tail args)) 
										   (tail (p #'proper:not-null body)))
													 
									 (proper:add-to-symbol-macro-context 
									  name
									  (lexical-let
										  ((lcurrent-module current-module) 
										   (lname name))
										(lambda (_) `(_. ,lcurrent-module ,lname))))
									 `(_= (_. ,current-module ,name) (designated-lambda 
																	  ,(intern 
																		(concat spec "-" (symbol-name name))) 
																	  ,args ,@body)))
									((list (list (non-kw-symbol name) (tail function-terms)))
													 
									 (proper:add-to-symbol-macro-context 
									  name
									  (lexical-let
										  ((lcurrent-module current-module) 
										   (lname name))
										(lambda (_) `(_. ,lcurrent-module ,lname))))
									 `(_= (_. ,current-module ,name) (designated-lambda 
																	  ,(intern 
																		(concat spec "-" (symbol-name name))) 
																	  ,@function-terms)))
									(other-form
									 (error (concat "gazelle/proper define must either"
													" by (define symbol expr) or (define"
													" (name arg-pattern ...) body0 ...)," 
													" got %S") `(define+ ,@parts)))))
						   (define-macro define-macro+ (name (tail rest))
											 
							 `(define-macro ,name ,@rest))
						   (define-macro define-pattern+ (name (tail rest))
											 
							 `(define-pattern ,name ,@rest))
						   ,@(loop for spec* in specs collect
								   `(_proper:require-spec ,@spec*))
						   ,@body))))
	 ))))

(defun proper:spec-location->naive-name (location)
  (intern (car (last (split-string location (regexp-quote "/"))))))

(defun proper:spec-locations->use-names (locations)
  (let ((table (make-hash-table :test 'equal)))
	(loop for loc in locations collect 
		  (let* ((name (proper:spec-location->naive-name loc))
				 (seen (gethash name table)))

			(if seen 
				(let ((actual-name (intern 
									(concat (symbol-name name)
											(format "%s" (length seen))))))

				  (setf (gethash name table)
						(cons actual-name seen))
				  actual-name)
			  (progn 

				(setf (gethash name table)
					  (list name))

				name))))))

;; (proper:define-macro 
;;  use (specs)
;;  (proper:message "Reducing use form.")
;;  (let ((global-names (proper:spec-locations->use-names 
;; 					  (proper:module-specs->locations specs))))
;;    `(_newline-sequence
;; 	 (_var _r ((_value require) [: ,@(proper:module-specs->locations specs)]))
;; 	 ,@())))

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

(defun proper:manifest-add-type (manifest name type)
  (let* ((entry (gethash name manifest))
		 (type-info (cdr (assoc :type entry)))
		 (new-type-info (cons type type-info))
		 (new-entry 
		  (if type-info
			  (loop for sub in entry collect
					(if (equal (car sub) :type)
						`(:type . ,new-type-info)
					  sub))
			(cons `(:type . ,new-type-info) entry))))
	(setf (gethash name manifest) new-entry)
	manifest))

(defun proper:really-compile-module (spec)
  (proper:message "Really compiling module %S" spec)
  (let* ((file (proper:module-spec->module-file spec))
		 (file-directory (gzu:get-file-directory file))
		 (output-file (proper:module-gazelle-file->js-file file))
		 (contents (proper:read-module-file file))
		 (specs (proper:module-module-specs contents))
		 (body (proper:module-body contents)))
	(let* ((proper:*module-manifest* (make-hash-table))
		   (proper:symbol-macros (cons (make-hash-table)
									   (last proper:symbol-macros)))
		   (proper:macros (cons (make-hash-table) (last proper:macros)))
		   (proper:patterns (cons (make-hash-table) (last proper:patterns)))
		   ;; Only use the global macro space for compiling modules.
		   (current-module (gensym "current-module-"))
		   (gazelle-code 
			`((_value define)
			  [: ,@(proper:module-specs->locations specs)]
			  (_function ,(proper:module-specs->crypto-symbols specs)
						 (_var ,current-module (_{}))
						 (define (set-module-object value)
						   (_= ,current-module value))
						 (_proper:unit 
						  (define-macro _current-module ()
							current-module)
						  (define-macro define+ ((tail parts))
							(match parts
								   ((list (non-kw-symbol name) value-expr)
									(proper:manifest-add-type proper:*module-manifest* name :value)
									(proper:add-to-symbol-macro-context 
									 name
									 (lexical-let  
										 ((lcurrent-module current-module)
										  (lname name))
									   (lambda (_) `(_. ,lcurrent-module ,lname))))
									`(_= (_. ,current-module ,name) ,value-expr))
								   ((list (list (non-kw-symbol name) (tail args)) 
										  (tail (p #'proper:not-null body)))
									(proper:manifest-add-type proper:*module-manifest* name :value)
									(proper:add-to-symbol-macro-context 
									 name
									 (lexical-let
										 ((lcurrent-module current-module) 
										  (lname name))
									   (lambda (_) `(_. ,lcurrent-module ,lname))))
									`(_= (_. ,current-module ,name) (designated-lambda 
																	 ,(intern 
																	   (concat spec "-" (symbol-name name))) 
																	 ,args ,@body)))
								   ((list (list (non-kw-symbol name) (tail function-terms)))
									(proper:manifest-add-type proper:*module-manifest* name :value)
									(proper:add-to-symbol-macro-context 
									 name
									 (lexical-let
										 ((lcurrent-module current-module) 
										  (lname name))
									   (lambda (_) `(_. ,lcurrent-module ,lname))))
									`(_= (_. ,current-module ,name) (designated-lambda 
																	 ,(intern 
																	   (concat spec "-" (symbol-name name))) 
																	 ,@function-terms)))
								   (other-form
									(error (concat "gazelle/proper define must either"
												   " by (define symbol expr) or (define"
												   " (name arg-pattern ...) body0 ...)," 
												   " got %S") `(define+ ,@parts)))))
						  (define-macro define-macro+ (name (tail rest))
							(proper:manifest-add-type proper:*module-manifest* name :macro)
							`(define-macro ,name ,@rest))
						  (define-macro define-pattern+ (name (tail rest))
							(proper:manifest-add-type proper:*module-manifest* name :pattern)
							`(define-pattern ,name ,@rest))
						  ,@(loop for spec in specs collect
								  `(_proper:require-spec ,@spec))
						  ,@body)
						 (_return ,current-module)))))
	  (with-temp-buffer 
		(gzu:with-pwd file-directory 
					  (prim:transcode (proper:to-prim gazelle-code)))
		(write-region (point-min)
					  (point-max)
					  output-file))
	  (list proper:*module-manifest* proper:macros proper:symbol-macros proper:patterns))))



