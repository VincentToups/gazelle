(eval-when (load compile eval)
  (require 'shadchen)
  (provide 'prim))

(defvar prim:*mangle-cache* (make-hash-table :test 'equal))

(defun prim:really-mangle (s)
  "Take a symbol S and return the mangled version of the symbol
for transcoding.  See `match-lambda` below for a list of
manglings.  Additionally, dashed ids are replaced by camel case."
  (let* ((s (if (symbolp s) (symbol-name s) s))
		 (s1 (replace-regexp-in-string
			  (regexp-quote "->") "-to-" s))
		 (s1 (replace-regexp-in-string
			  (regexp-quote "===") "-triple-equal-" s1))
		 (s1 (replace-regexp-in-string
			  (regexp-quote "::") "-of-type-" s1))
		 (s1 (replace-regexp-in-string
			  (regexp-quote "{}") "-braces-" s1))
		 (s1 (replace-regexp-in-string "-\\([a-zA-Z0-9]\\)" 
									   (lambda (x)
										 (upcase (substring x 1))) 
									   s1))
		 (s1 (replace-regexp-in-string (regexp-quote "%")
									   "modsign"
									   s1)))
	(replace-regexp-in-string 
	 (rx 
	  (| "|" "~" "+" "-" "*" "%" "$" "&" "^" "!" ":" "/" "\\" "#" "@" "?" "="
		 "<" ">" "{" "}"))
	 (match-lambda
	  ("|" "pipe")
	  ("+" "plus")
	  ("-" "minus")
	  ("*" "times")
	  ("<" "lessThan")
	  (">" "greaterThan")
	  ("$" "$")
	  ("=" "equal")
	  ("%" "modsign")
	  ("!" "bang")
	  ("?" "Predicate")
	  (":" "colon")
	  ("&" "ampersand")
	  ("^" "caret")
	  ("/" "divide")
	  ("\\" "mdivide")
	  ("#" "hash")
	  ("~" "tilda")
	  ("@" "at")
	  ("{" "openBrace")
	  ("}" "closeBrace"))
	 s1)))

(defun prim:mangle (s)
  (let ((m (gethash s prim:*mangle-cache*)))
	(if m m 
	  (let ((m (prim:really-mangle s)))
		(setf (gethash s prim:*mangle-cache*) m)
		m))))

(defmacro* prim:in-parens (&body body)
  (let ((val (gensym)))
	`(let ((,val nil)) 
	   (prim:insert "(")
	   (setq ,val (progn ,@body))
	   (prim:insert ")")
	   ,val)))

(defmacro* prim:in-brackets (&body body)
  (let ((val (gensym)))
	`(let ((,val nil)) 
	   (prim:insert "[")
	   (setq ,val (progn ,@body))
	   (prim:insert "]")
	   ,val)))


(defun prim:kw->symbol (kw)
  (intern (substring (symbol-name kw) 1)))

(defun prim:insertf (fs &rest args)
  "Insert a formatted string with ARGS into the current transcoding buffer."
  (insert (apply #'format fs args)))

(defun prim:insert (fs)
  "Insert a non-formatted string."
  (insert fs))

(defun prim:newline ()
  "Insert a newline into the transcoding buffer."
  (prim:insertf "\n")
  (loop for i from 1 to prim:indent-depth do
		(prim:insert " ")))

(defmacro* prim:with-tab+ (&body body)
  "Execute the body BODY with additional indentation."
  `(let ((prim:indent-depth (+ prim:indent-depth 2)))
	 (loop for i from 1 to prim:indent-depth do
		   (prim:insert " "))
	 ,@body))

(defun prim:transcode-block (statements)
  "Transcode a {} block."
  (prim:with-tab+ 
   (prim:insert "{")
   (prim:newline)
   (prim:transcode-newline-sequence statements)
   (prim:insert "}")))

(defun-match- prim:transcode-csvs ((list))
  "Transcode a list of expressions into a comman separated list of transcodings. (base case)"
  nil)
(defun-match prim:transcode-csvs ((list item))
  "Transcode a list of expressions into a comman separated list of transcodings. (base case)"
  (prim:transcode item))
(defun-match prim:transcode-csvs ((list-rest item rest))
  "Transcode a list of expressions into a comman separated list of transcodings. (recursion case)"
  (prim:transcode item)
  (prim:insert ", ")
  (recur rest))

(defun-match- prim:transcode-newline-sequence ((list))
  "Transcode a list of expressions into a transcoded, newline
  semicolon delimited list of transcodings. (base case)"  
  nil)
(defun-match prim:transcode-newline-sequence ((list item))
  "Transcode a list of expressions into a transcoded, newline
  semicolon delimited list of transcodings. (base case)"  
  (prim:transcode item)
  (prim:insert ";")
  (prim:newline))
(defun-match prim:transcode-newline-sequence ((list-rest item rest))
  "Transcode a list of expressions into a transcoded, newline
  semicolon delimited list of transcodings. (recursion case)"  
  (prim:transcode item)
  (prim:insert ";")
  (prim:newline)
  (recur rest))

(defun-match- prim:transcode-csvs ((list))
  "Transcode a list of expressions into a transcoded, newline
  semicolon delimited list of transcodings. (base case)"  
  nil)
(defun-match prim:transcode-csvs ((list item))
  "Transcode a list of expressions into a transcoded, newline
  semicolon delimited list of transcodings. (base case)"  
  (prim:transcode item))
(defun-match prim:transcode-csvs ((list-rest item rest))
  "Transcode a list of expressions into a transcoded, newline
  semicolon delimited list of transcodings. (recursion case)"  
  (prim:transcode item)
  (prim:insert ", ")
  (recur rest))


(defvar prim:indent-depth 0 "Indentation tracking.")

(defun-match- prim:transcode ('_false)
  (prim:insert "false"))

(defun-match prim:transcode ('_true)
  (prim:insert "true"))

(defun-match prim:transcode ('_null)
  (prim:insert "null"))

(defun-match prim:transcode ('_undefined)
  (prim:insert "undefined"))

(defun-match prim:transcode ('_break)
  (prim:insert "break"))

(defun-match prim:transcode ('_continue)
  (prim:insert "continue"))

(defun-match prim:transcode ('_{})
  (prim:insert "{}"))


(defun-match prim:transcode ((non-kw-symbol s))
  (prim:insert (prim:mangle s)))

(defun-match prim:transcode->string (expr)
  (with-temp-buffer 
	(prim:transcode expr)
	(buffer-substring-no-properties (point-min) (point-max))))

(defun-match prim:transcode ((keyword k))
  (prim:insert "\"")
  (prim:insert (prim:mangle (prim:kw->symbol k)))
  (prim:insert "\""))

(defun-match prim:transcode ((number n))
  (prim:insertf "%s" n))

(defun prim:message (s)
  (message (format "prim: %S" s)))

(defun prim:block-string-p (str)
  (and (stringp str)
	   (> (length (split-string str (regexp-quote (format "\n"))))
		  1)))

(defun prim:transcode-block-string (str)
  (let ((parts (split-string str (regexp-quote (format "\n")))))
	(prim:insert "[")
	(prim:with-tab+ 
	 (loop for (part . rest) on parts do
		   (prim:transcode-string part)
		   (if rest 
			   (progn 
				 (prim:insert ",")
				 (prim:newline))
			 (progn 
			   (prim:insert "].join(\"\\n\")")))))))

(defun prim:transcode-normal-string (string)
  (prim:insert "\"")
  (loop for character in (coerce string 'list) do
		(match character
			   (?\n (insert "\\
"))
			   (?\t (insert "\\t"))
			   (?\" (insert "\\\""))
			   (?\\ (insert "\\\\"))
			   (?\s 
				(insert " "))
			   (else (insert else))))
  (prim:insert "\""))

(defun prim:transcode-string (string)
  (if (prim:block-string-p string)
	  (prim:transcode-block-string string)
	(prim:transcode-normal-string string)))

(defun-match prim:transcode ((string s))
  (prim:transcode-string  s))

;; (assert (string= "\"cats and dogs\""
;; 				 (prim:transcode->string "cats and dogs")))

;; (assert (string= "stringToNumber"
;; 				 (prim:transcode->string 'string->number)))

;; (assert (string= "\"stringToNumber\""
;; 				 (prim:transcode->string :string->number)))

(defun-match prim:transcode ((list '_var (non-kw-symbol s) expr
								   (tail tail-of-var)))
  (prim:insert "var ")
  (prim:transcode s)
  (prim:insert " = ")
  (prim:transcode expr)
  (if tail-of-var (prim:insert ", "))
  (prim:transcode-tail-of-var tail-of-var))

(defun-match- prim:transcode-tail-of-var ((list))
  nil)
(defun-match prim:transcode-tail-of-var ((list (non-kw-symbol s) expr))
  (prim:transcode s)
  (prim:insert " = ")
  (prim:transcode expr))
(defun-match prim:transcode-tail-of-var ((list (non-kw-symbol s) expr
											   (tail tail-of-var)))
  (prim:transcode s)
  (prim:insert " = ")
  (prim:transcode expr)
  (prim:insert ", ")
  (recur tail-of-var))

(assert (string= "var someValue = \"someValue\""
				 (prim:transcode->string '(_var some-value :some-value))))

(defun-match- prim:transcode-tail-of-if (nil)
  nil)

(defun-match prim:transcode-tail-of-if ((list '_else (list-rest expressions)))
  (prim:insert " else ")
  (prim:transcode-block expressions))

(defun-match prim:transcode-tail-of-if ((list '_elseif condition (list-rest expressions)))
  (prim:insert " else if ")
  (prim:in-parens 
   (prim:transcode condition))
  (prim:transcode-block 
   expressions))

(defun-match prim:transcode-tail-of-if ((list-rest 
										 '_else
										 (list-rest expressions)
										 rest))
  (prim:transcode-tail-of-if (list '_else expressions))
  (recur rest))

(defun-match prim:transcode-tail-of-if ((list-rest 
										 '_elseif 
										 condition
										 (list-rest expressions)
										 rest))
  (prim:transcode-tail-of-if (list '_elseif condition expressions))
  (recur rest))

(defun-match prim:transcode ((list-rest '_if condition (list-rest expressions) rest))
  (prim:insert "if ")
  (prim:in-parens 
   (prim:transcode condition))
  (prim:transcode-block expressions)
  (prim:transcode-tail-of-if rest))

(assert (string= (prim:transcode->string '(_if :test-value ((_var x :x) (_var y :y))
											   _elseif :test-two 
											   ((_var z :z)
												(_var q :q))
											   _elseif :test-three
											   ((_var z :z)
												(_var q :q))))
				 "if (\"testValue\")  {
  var x = \"x\";
  var y = \"y\";
  } else if (\"testTwo\")  {
  var z = \"z\";
  var q = \"q\";
  } else if (\"testThree\")  {
  var z = \"z\";
  var q = \"q\";
  }"))

(defun-match- prim:split-at-_case (nil acc)
  (list (reverse acc) nil))
(defun-match prim:split-at-_case ((list (and which (or '_default '_case)) (tail rest)) acc)
  (list (reverse acc) (cons which rest)))
(defun-match prim:split-at-_case ((list other-expr (tail rest)) acc)
  (recur rest (cons other-expr acc)))
(defun-match prim:split-at-_case (o)
  (recur o nil))

(defun-match- prim:remove-one-case-statement ((list (and which 
														 (or '_default '_case)) (tail rest)))
  (match (prim:split-at-_case rest)
		 ((list case1 rest)
		  (list `(,which ,@case1) rest))))

(defun-match- prim:split-switch-body (nil acc)
  (reverse acc))
(defun-match prim:split-switch-body (body acc)
  (match (prim:remove-one-case-statement body)
		 ((list case-statement rest)
		  (recur rest (cons case-statement acc)))))
(defun-match prim:split-switch-body (body)
  (recur body nil))

(defun-match- prim:transcode-case-statement ((list '_case
												   value
												   (tail body)))
  (prim:insert "case ")
  (prim:transcode value)
  (prim:insert ":")
  (prim:newline)
  (prim:transcode-newline-sequence body))

(defun-match prim:transcode-case-statement ((list '_default
												  (tail body)))
  (prim:insert "default ")
  (prim:insert ":")
  (prim:newline)
  (prim:transcode-newline-sequence body))


(defun-match- prim:transcode-tail-of-switch ((list (tail body)))
  (let ((statements (prim:split-switch-body body)))
	(loop for statement in statements do
		  (prim:transcode-case-statement statement))))

(defun-match prim:transcode ((list '_switch vexpr (tail tail-of-switch)))
  (prim:insert "switch ")
  (prim:transcode-in-parens vexpr)
  (prim:insert "{")
  (prim:newline)
  (prim:with-tab+ 
   (prim:transcode-tail-of-switch tail-of-switch))
  (prim:newline)
  (prim:insert "}"))

(defun-match prim:transcode ((list '_? cond true-branch false-branch))
  (prim:in-parens 
   (prim:in-parens 
	(prim:transcode cond))
   (prim:insert "?")
   (prim:in-parens
	(prim:transcode true-branch))
   (prim:insert " : ")
   (prim:in-parens
	(prim:transcode false-branch))))



(eval-when (compile load eval)

  (defun-match- prim:non-kw-symbol ((non-kw-symbol s))
	t)
  (defun-match prim:non-kw-symbol (_)
	nil)

  (defun-match- prim:all-satisfy (p nil)
	t)
  (defun-match prim:all-satisfy (p (list-rest hd tl))
	(if (funcall p hd)
		(recur p tl)
	  nil))

  (defpattern prim:argument-list (pattern)
	(let ((val (gensym)))
	  `(p #'(lambda (,val)
			  (and (listp ,val) 
				   (prim:all-satisfy #'prim:non-kw-symbol ,val)))
		  ,pattern))))

(defun-match prim:transcode ((list-rest '_function (prim:argument-list args) body))
  (prim:insert "(function ")
  (prim:in-parens
   (prim:transcode-csvs args))
  (prim:transcode-block body)
  (prim:insert ")"))

(defun-match prim:transcode ((list-rest '_function 
										(non-kw-symbol name)
										(prim:argument-list args)
										body))
  (prim:insert "function ")
  (prim:transcode name)
  (prim:in-parens 
   (prim:transcode-csvs args))
  (prim:transcode-block body))

(defun-match prim:transcode ((list '_return (list (and which (or '_if '_for '_while '_try '_var '_=)) (tail body))))
  (recur `(,which ,@body)))

(defun prim:make-last-return (sequence)
  (let* ((r (reverse sequence))
		 (last (car r))
		 (new-last `(_return ,last)))
	(reverse (cons new-last (cdr r)))))

(defun-match prim:transcode ((list '_return (list '_newline-sequence (tail body))))
  (recur `(_newline-sequence ,@(prim:make-last-return body))))

(defun-match prim:transcode ((list '_return (list (and which (or '_delete '_throw '_continue '_break)) expression)))
  (recur `(,which ,expression)))

(defun-match prim:transcode ((list '_return expression))
  (prim:insert "return ")
  (prim:transcode expression))

(defun-match prim:transcode ((list '_return))
  (prim:insert "return ")
  (prim:transcode '_undefined))

(defun-match prim:transcode ((list-rest '_while expression body))
  (prim:insert "while ")
  (prim:in-parens 
   (prim:transcode expression))
  (prim:transcode-block body))

(defun-match prim:transcode ((list-rest '_for (list (non-kw-symbol name) 
													'_in expression) body))
  (prim:insert "for ")
  (prim:in-parens
   (prim:transcode name)
   (prim:insert " in ")
   (prim:in-parens
	(prim:transcode expression)))
  (prim:transcode-block body))

(defun-match prim:transcode ((list-rest '_for (list init cond update) body))
  (prim:insert "for ")
  (prim:in-parens 
   (prim:transcode init)
   (prim:insert ";")
   (prim:transcode cond)
   (prim:insert ";")
   (prim:transcode update))
  (prim:transcode-block body))

(defun-match prim:transcode ((list '_delete expr))
  (prim:insert "delete ")
  (prim:in-parens (prim:transcode expr)))

(defun-match prim:transcode ((list '_throw expr))
  (prim:insert "throw ")
  (prim:in-parens 
   (prim:transcode expr)))

;; (defun-match prim:transcode ((list '_break expr))
;;   (prim:insert "break ")
;;   (prim:in-parens 
;;    (prim:transcode expr)))

;; (defun-match prim:transcode ((list '_continue expr))
;;   (prim:insert "continue ")
;;   (prim:in-parens 
;;    (prim:transcode expr)))

(defun-match prim:transcode ((list '_instanceof object-expr cons-expr))
  (prim:in-parens
   (prim:transcode object-expr)
   (prim:insert " instanceof ")
   (prim:transcode cons-expr)))

(defun-match prim:transcode ((list '_typeof object-expr))
  (prim:in-parens
   (prim:insert "typeof ")
   (prim:transcode object-expr)))

(defun-match prim:transcode-tail-of-try (nil)
  nil)

(defun-match prim:transcode-tail-of-try ((list-rest '_catch 
													(list (non-kw-symbol name)) 
													(list-rest catch-body)
													tail-of-try))
  (prim:insert "catch ")
  (prim:in-parens 
   (prim:transcode name))
  (prim:transcode-block catch-body)
  (prim:transcode-tail-of-try tail-of-try))

(defun-match prim:transcode-tail-of-try ((list-rest '_catch 
													(list (non-kw-symbol name) '_if expression) 
													(list-rest catch-body)
													tail-of-try))
  (prim:insert "catch ")
  (prim:in-parens 
   (prim:transcode name)
   (prim:insert " if ")
   (prim:transcode expression))
  (prim:transcode-block catch-body)
  (prim:transcode-tail-of-try tail-of-try))

(defun-match prim:transcode-tail-of-try ((list '_finally 
											   (list-rest finally-body)))
  (prim:insert "finally ")
  (prim:transcode-block finally-body))

(defun-match prim:transcode ((list-rest '_try 
										(list-rest body)
										tail-of-try))
  (prim:insert "try")
  (prim:transcode-block body)
  (prim:transcode-tail-of-try tail-of-try))

(defun prim:transcode-in-parens (expr)
  (prim:in-parens 
   (prim:transcode expr)))

(defun-match- prim:transcode-tail-of-dot-expr (nil)
  nil)

(defun-match prim:transcode-tail-of-dot-expr ((list-rest (non-kw-symbol s) 
														 tail-of-dot-expr))
  (prim:transcode s)
  (if tail-of-dot-expr (prim:insert "."))
  (recur tail-of-dot-expr))

(defun-match prim:transcode-tail-of-dot-expr ((list-rest (list-rest (non-kw-symbol m) args) tail-of-dot-expr))
  (prim:transcode m)
  (prim:in-parens
   (prim:transcode-csvs args))
  (if tail-of-dot-expr (prim:insert "."))
  (recur tail-of-dot-expr))

(defun-match prim:transcode-tail-of-dot-expr ((list-rest [ (non-kw-symbol name) (tail exprs) ] tail-of-dot-expr))
  (prim:transcode name)
  (loop for expr in exprs do 
		(prim:in-brackets 
		 (prim:transcode expr)))
  (if tail-of-dot-expr (prim:insert "."))
  (recur tail-of-dot-expr))

(defun-match prim:transcode ((list-rest '_. (non-kw-symbol expr) tail-of-dot-expr))
  (prim:transcode expr)
  (if tail-of-dot-expr
	  (progn 
		(prim:insert ".")
		(prim:transcode-tail-of-dot-expr tail-of-dot-expr))))

(defun-match prim:transcode 
  ((list-rest '_. 
			  (and expr
				   (! (or (list hd (tail tl))
						  [hd (tail tl)]) 
					  actually 
					  (format (concat "_. expressions must begin with a symbol, "
									  "a function call, or an array access. Got %S.") 
							  actually))) 
			  tail-of-dot-expr))
  (prim:transcode expr)
  (if tail-of-dot-expr
	  (progn 
		(prim:insert ".")
		(prim:transcode-tail-of-dot-expr tail-of-dot-expr))))

(defun-match prim:transcode ((list '_new constructor (tail arguments)))
  (prim:in-parens 
   (prim:insert "new ")
   (prim:transcode-in-parens constructor)
   (prim:in-parens 
	(prim:transcode-csvs arguments))))


(defun-match prim:transcode ((list '_= 
								   (and
									(or (non-kw-symbol _)
										(list-rest '_. _)
										[_ (tail _)])
									set-this)
								   value-expr))
  (prim:transcode set-this)
  (prim:insert " = ")
  (prim:transcode value-expr))

(defun-match prim:transcode ((list '_= 
								   (and
									(or (non-kw-symbol _)
										(list-rest '_. _)
										[_ (tail _)])
									set-this)
								   value-expr
								   (tail others)))
  (prim:transcode set-this)
  (prim:insert " = ")
  (prim:transcode value-expr)
  (prim:insert ", ")
  (recur `(_= ,@others)))

(defun-match prim:transcode ((list '_value value-expr))
  (prim:in-parens 
   (prim:transcode value-expr)))

(defun-match prim:transcode ((list '_! expr))
  (prim:in-parens
   (prim:insert "!")
   (prim:transcode-in-parens expr)))

(defun-match prim:transcode ((list '_- expr))
  (prim:in-parens
   (prim:insert "-")
   (prim:transcode-in-parens expr)))

(defun-match prim:transcode ((list '_~ expr))
  (prim:in-parens
   (prim:insert "~")
   (prim:transcode-in-parens expr)))

(defun-match prim:transcode ((list '_in key value))
  (prim:in-parens 
   (prim:in-parens 
	(prim:transcode key))
   (prim:insert " in ")
   (prim:in-parens 
	(prim:transcode value))))

(defun-match prim:transcode ((list '_include-js (! (string file))))
  (let ((contents (with-temp-buffer 
					(insert-file file)
					(buffer-substring-no-properties (point-min)
													(point-max)))))
	(prim:insert (format "// inserting contents of %s" file))
	(prim:newline)
	(prim:insert contents)))

(defun-match- prim:commentify (object)
  (match object
		 ((string s)
		  (replace-regexp-in-string "^" "// " s))
		 (anything-else 
		  (recur (format "%S" anything-else)))))

(defun-match prim:transcode ((list '_comment (tail comments)))
  (loop for comment in comments do 
		(prim:insert (prim:commentify comment))
		(prim:newline)))

(eval-when (compile load eval) 
  (defpattern prim:binop (pattern)
	`(and 
	  (or '_+
		  '_-
		  '_*
		  '_/
		  '_&&
		  '_||
		  '_==
		  '_===
		  '_%
		  '_&
		  '_|
		  '_^
		  '_<<
		  '_>>
		  '_<
		  '_>
		  '_<=
		  '_>=
		  '_>>>)
	  ,pattern)))

(defun prim:binop-sym->transcode-string (s)
  (substring (symbol-name s) 1))



(defun prim:transcode-in-parens-when-needed (expr)
  (match expr
		 ((or (keyword k)
			  (symbol k)
			  (number k))
		  (prim:transcode expr))
		 ((list '_. (tail tl))
		  (prim:transcode expr))
		 ((list '_value expr)
		  (prim:transcode-in-parens-when-needed expr))
		 (anything-else
		  (prim:in-parens
		   (prim:transcode expr)))))

(defun-match prim:transcode ((list '_+ (tail args)))
  (prim:in-parens 
   (loop for (element . rest) on args 
		 do (prim:in-parens (prim:transcode element))
		 when rest do (prim:insert "+"))))

(defun-match prim:transcode ((list '_- (tail args)))
  (prim:in-parens 
   (loop for (element . rest) on args 
		 do (prim:in-parens (prim:transcode element))
		 when rest do (prim:insert "-"))))

(defun-match prim:transcode ((list '_* (tail args)))
  (prim:in-parens 
   (loop for (element . rest) on args 
		 do (prim:in-parens (prim:transcode element))
		 when rest do (prim:insert "*"))))

(defun-match prim:transcode ((list '_/ first (tail args)))
  (prim:in-parens 
   (cond  ((= 0 (length args)) 
		   (recur first))
		  (:otherwise 
		   (prim:in-parens (prim:transcode first))
		   (prim:insert "/")
		   (prim:in-parens (loop for (element . rest) on args 
				  do (prim:in-parens (prim:transcode element))
				  when rest do (prim:insert "*")))))))

(defun-match prim:transcode ((list '_&& (tail args)))
  (prim:in-parens 
   (loop for (element . rest) on args 
		 do (prim:in-parens (prim:transcode element))
		 when rest do (prim:insert "&&"))))

(defun-match prim:transcode ((list '_|| (tail args)))
  (prim:in-parens 
   (loop for (element . rest) on args 
		 do (prim:in-parens (prim:transcode element))
		 when rest do (prim:insert "||"))))

(defun-match prim:transcode ((list (prim:binop op) e1 e2))
	(prim:in-parens 
	 (prim:transcode-in-parens-when-needed e1)
	 (prim:insert (prim:binop-sym->transcode-string op))
	 (prim:transcode-in-parens-when-needed e2)))

(defun-match prim:transcode ((list-rest '_comma-sequence exprs))
  (prim:in-parens (prim:transcode-csvs exprs)))

(defun-match prim:transcode ((list-rest '_newline-sequence exprs))
  (prim:transcode-newline-sequence exprs))

(defun-match prim:transcode (['_: (tail elements)])
  (prim:in-brackets
   (prim:transcode-csvs elements)))

(defun-match prim:transcode ([hd (tail elements)])
  (prim:transcode-in-parens-when-needed hd)
  (loop for element in elements do
		(prim:in-brackets 
		 (prim:transcode element))))


(eval-when (compile load eval) 
  (defun-match- prim:flat-seq-of-sym-val-pairs (nil)
	t)
  (defun-match prim:flat-seq-of-sym-val-pairs ((list odd))
	nil)
  (defun-match prim:flat-seq-of-sym-val-pairs ((list (or (symbol s)
														 (string s)) 
													 value-expr (tail rest)))
	(recur rest))
  (defun-match prim:flat-seq-of-sym-val-pairs (anything-else)
	nil))

(eval-when (compile load eval)
  (defpattern prim:{}-body (&optional (pattern (gensym)))
	`(p #'prim:flat-seq-of-sym-val-pairs ,pattern)))

(defun-match- prim:group-by-2 (nil acc)
  (reverse acc))
(defun-match prim:group-by-2 ((list a) acc)
  (error "Odd number of elements in prim:group-by-two."))
(defun-match prim:group-by-2 ((list a b (tail rest)) acc)
  (recur rest (cons (list a b) acc)))
(defun-match prim:group-by-2 ((list-rest lst))
  (recur lst nil))

(defun-match prim:transcode ((list '_{} (tail (prim:{}-body tail))))
  (prim:insert "{")
  (prim:with-tab+ 
   (prim:newline)
   (let ((first true)) 
	 (loop for (sym val) in (prim:group-by-2 tail) do
		   (if first (setq first nil)
			 (progn (prim:insert ",")
					(prim:newline)))
		   (prim:transcode sym)
		   (prim:insert ":")
		   (prim:transcode val))))
  (prim:newline)
  (prim:insert "}"))

(defun-match prim:transcode ((list 'quote expr))
  (recur (prim:transcode->string expr)))

(defun-match prim:transcode ((list-rest head arguments))
  (prim:transcode-in-parens-when-needed head)
  (prim:in-parens
   (prim:transcode-csvs arguments)))
