Prim
----

Prim is a s-expression representation of Javascript.  This file
documents all the forms and their syntax.

Values
------

"contents" denotes a string literal. 

Unlike in Javascript, prim supports multiline strings, but they are
compiled to several strings in an array, with `[].join("\n")`.

Prim does not support `'` delimited strings yet.

Numbers are denoted as numbers.

:keyword denotes a string "keyword" with name mangling, eg:

:this-is-a-keyword denotes "thisIsAKeyword"

`{key1 val1 key2 val2}` or `({} key1 val1 key2 val2)` denotes
`{key1:val1,key2:val2}`

`[: 1 2 3 4]` denotes `[1,2,3,4]`

`true`, `false`, `undefined` and `null` are denoted as themselves
with an underscore preceeding.  Eg: `_null`.  

Function literals are denoted as 

    (_function (arg-one arg-two) (do-something) (_return _true))

Which is equivalent to

    (function(argOne,argTwo){ doSomething(); return true })

Control Flow
------------

`if` is denoted by `_if` with the following syntax:

    (_if <condition> (<true-expr1> ... <true-exprN>) 
      [_else (<else1> ... <elseN>)]
      [_elseif (<elseif1> ... <elseifN>)])

Ternary if is denoted by `_?` with the following syntax:

    (_? cond true-expr false-expr)

Note that in Gazelle proper, `if` denotes ternary if.  `_if` must be
denoted `_if` in Gazelle.

While loops are denoted with `_while`:

    (_while expr body1 ... bodyN)

For loops are denoted with `_for` in several ways:

    (_for (<var-expression>
           <condition>
           <iteration>)
       <body1> ... <bodyN>)

For a regular loop.  A `for/in` loop is denoted by:

    (_for (<binding> _in <expr>)
      <body1> ... <bodyN>)

Switch is denoted with `_switch` as

    (_switch <expr>
      _case <val>
      _case <val>
      ...
      _default <val>)

