Gazelle Manual
==============

Front Matter
------------

Gazelle is a Lisp targeting Javascript.  The language was created with
the intent of exposing Javascript environments (principally web
browsers) and ecosystems to an s-expression based language.  To this
end, it does not attempt to significantly modify the semantics of the
Javascript language, only to allow programmer to write Javascript code
using s-expressions and to add macros on top of that code to allow
meta-programming.  Gazelle's shares the same data types and
programming styles as Javascript and no glue is required to use
Javascript code.  

This said, Gazelle does attempt to extend Javascript in many useful
directions that are nevertheless backward compatible with the
underlying Javascript system.  These techniques include macros, as
indicated above, modules, an advanced pattern matcher, and some
support for non-stack growing recursion.

This manual will describe the low level interface to Javascript, the
basic syntax for defining slightly higher level functions and macros,
the use of modules to scope dynamic and static values, and the way
that the Emacs environment is used to work with Gazelle projects.  

Chapter 0 : Getting Started
---------------------------

### Requirements ###

1.  A recent Emacs, on a Unix operating system.
2.  [shadchen.el][] a pattern matcher for Emacs Lisp.
3.  [Gazelle][], the language itself.

### Setup ###

Clone the shadchen and Gazelle modules and add them to your load path
by adding lines like:

    (push <path/to/shadchen> load-path)
    (push <path/to/gazelle> load-path)

in your emacs init.  Gazelle requires a lot of macro magic, so it is 
recommended that one compile `shadchen.el` and the `gazelle.el`
files.  See the Emacs Documentation for how.

Once you have set up your load paths, you may use Gazelle by placing
somewhere in your configuration a `(require 'gazelle)`

### Hello World ###

Create a file called `hello.gazelle` in Emacs.  This should
automatically load the emacs Gazelle mode.  Put this in the file:

    (console.log "Hello World!")

And then press `C-c C-k` or `M-x gz:transcode-this-file <RETURN>`.
This will invoke the Gazelle compiler and produce the following
Javascript file in the same directory:

    console.log("Hello World!");

Called `scratch.js`.  This file can be put directly into a Javascript
project in the ordinary way.  

Chapter 1 : The Low Level
-------------------------

Gazelle provides access to all Javascript special forms and operators
in an s-expression format.  This section documents the use of these
expressions.

### Atomic Values ### 

Numbers and strings are indicated as they would be in Javascript
except that strings only support double quoted forms.  Double quotes
in Strings are indicated in the regular way, by backslash escape.

Gazelle supports keywords, denoted `:some-name` as special syntax for
strings.  A given keyword may or may not be identical to a value
denoted by a string, but two keywords with the denotation are the same
value.

`_false` or `false` denotes `false`

`_true` or `true` denotes `true`

`_null` or `null` denotes `null`

`_undefined` `undefined` denotes `undefined`

`_{}` or `{}` or `({})` denotes the empty object.  Note that the
Gazelle reader reads `{}` as a single symbol whose `symbol-name` is
`{}`.  Gazelle doesn't support curly braces as syntax.  

### Control Flow ###

1.    `_if` denotes a Javascript `if` statement and follows that syntax:

    (_if condition (true-expr1 ...) (tail tail-of-if))

Where `(true-expr1 ...)` is a list of expressions evaluated in the
event that `condition` is true.

Where `(tail tail-of-if)` denotes a list of one of the following
forms:

    ()
    (_else (false-branch1 ...) (tail tail-of-if))
    (_elseif condition (branch1 ...) (tail tail-of-if))

Condition may be any Gazelle expression that produces a value.  

_N.B. `\_if` does not return a value._  

2.   `_?` denotes a javascript ternary conditional:

    (_? cond true-expr false-expr)


Where each symbol above denotes an expression producing a value and
the form produces a value.  This form is closer to Lisp's traditional
`if` expression and may be denoted via `if` in Gazelle. 

3.   `if` may take either of the following forms:

    (if cond true-expr)

    Which results in `undefined` when `cond` is `false` or

    (if cond true-expr false-expr)

4.   `(return)` or `(_return)` or `(return value)`

Return `value` or `undefined` from the current function context.

5.   `progn` 

    (progn e1 ... eN)

Bears a value, the result of evaluating `eN`.  The body of `progn` is
a function context, so `return` returns thereform inside such a body.
However, `this` and `arguments` are bound the values of the enclosing
explicit function form.

6.   `_break` or `break` and `_continue` `continue`

Break or continue from the enclosing iteration.  Or break the current switch.

7.   `_switch` or `switch` 

    (_switch value-expr _case c1 e11 ... e1n _case c2 e21 ... e2n
    ... ... _case cN eN1 ... eNM (tail tail-of-case))

Exactly as the case expression, where `(tail tail-of-case)` is either
another `_case ...` form or a `_default`.  

8.   `_while` or `while`

    (while condition (tail body))

Executes the forms in `body` while `condition` is true.   

* * *

[shadchen.el]:https://github.com/VincentToups/shadchen-el
[Gazelle]:https://github.com/VincentToups/gazelle