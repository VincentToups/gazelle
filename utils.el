(eval-when (load compile eval)
  (require 'shadchen)
  (provide 'prim))

(defun gzu:suffix (item seq)
  (append seq (list item)))
