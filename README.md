Gazelle
-------

Gazelle is a rewrite of an aborted project, jsel, which aims to be a
sensible Lisp for Javascript.  By "sensible" I mean it adheres to the
following ideas:

1.  Be yourself:
    Gazelle doesn't try to be or imitate another Lisp.   It is based
    on an s-expression representation of javascript itself and the
    base idioms of the language are the base idioms of javascript.
    Any other idioms are meant to be added via the macro system.
2.  Stay Organized:
    Despite the above, Gazelle has a few built in extensions to the
    basic Javascript paradigm.  One of them is a module system for
    both static and dynamic (macros and run-time values) objects,
    based on [require.js]() 
3.  I never metaprogram I didn't like.
    That is, be a Lisp: Gazelle provides a powerful macroexpansion
    language (Emacs Lisp + shadchen) which transforms a s-expression
    representation of javascript before the s-expression to javascript
    compiler is invoked.  The idea behind Lisps is extension of the
    base language, so Gazelle exposes _javascript_ for extension.

How it Works
------------

Gazelle is made up of several parts.  The `prim` module (for
_primitive_) is a transcoder that takes an s-expression representation
of all of Javascript's primitives and transcodes them to Javascript
itself.  For instance,

    (_function (arg-one arg-two) (_return (_+ arg-one arg-two)))

Is a valid `prim` expression which transcodes to:

    (function(argOne, argTwo) { return (argOne+argTwo); })

Generally speaking, `prim`  is simple to understand.  Each javascript
primitive is assigned a symbol beginning with an underscore, and that
is transcoded in a straightforward manner to Javascript.  

`Prim` does not support your familiar Lisp idioms, though they are in
_Gazelle_ itself.  `Prim` has just one interface, the emacs lisp
function `prim:transcode`, which inserts the transcoded representation
of its input argument into the current buffer.  Don't worry, you don't
need to worry about this.

The module `proper` is where most of the heavy lifting of _Gazelle_
takes place.  Despite this fact, `Proper` is fairly simple, amounting
to slightly more than the construction of a macro system on top of
`prim`.  That means that almost all special forms in proper and
therefore in Gazelle itself are implemented as regular macros.
`Proper` implements a lexically scoped, static macro system, which
means that it is possible, but not typical to, to shadow special forms
in limited contexts.  There is also a symbol macro system, which is
partially exposed and used "under the hood" to implement advanced
features.

In the course of typical compilation, `proper` macros can expand to
additional macro definitions and the behavior is consistent.  Code is
passed through multiple compilation passes until it reduces entirely
to `prim` operations.

`Proper` has several entry points because it needs to know about the
one advanced feature in _Gazelle_ which is not in Javascript itself.

Modules
-------

I think the one major wart in Javascript is the absence of a good
module system.  Javascript objects are usually pressed into filling
this role, and they do a reasonable job for a dynamic language without
static extension capabilities.  [require.js]() formalizes this usage
into a passable module system which works in browser, but _Gazelle_
adds compile time objects, `macros`, which also need to be separated
into modules.  Hence, _Gazelle_ implements a more strict module system
on top of `require.js`.  One can certainly use _Gazelle_ without this
feature, using the function `gz:transcode-file` to translate
individual _Gazelle_ files to Javascript, but one can also invoke the
form `require` in such a file to use modules in a structured way.  

There is an example in [this repository]().  As per [require.js](), we
create a `main.gazelle` file in a `scripts` directory in our project,
and then we create an html document of the form:

    <!DOCTYPE html>
    <html>
        <head>
            <title>My Sample Project</title>
            <!-- data-main attribute tells require.js to load
                 scripts/main.js after require.js loads. -->
            <script data-main="scripts/main" src="scripts/require.js"></script>
        </head>
        <body>
            <h1>My Sample Project</h1>
        </body>
    </html>
  
`Main.gazelle`, which will compile to `main.js`, looks like this:

    (require 
     (("hooves/operator-functions" (:as + incr)))
     (_+ 1 1)
     (var x 10)
     (incr x)
     (console.log (_+ "X is " x))
     (+ 1 2))

That is, a single require form, which depends on the _Gazelle_ library
file `scripts/hooves/operator-functions.gazelle`.  That file might
look like:

    (module
     (("hooves/lisp-idioms" (:as apply funcall)))

     (define+ (+ hd (tail tl))
       (var result hd)
       (for (i :in tl)
            (set! result (_+ result [tl i])))
       result)

     (define+ (- hd (tail tl))
       (_- hd (apply + tl)))

     (define+ (* hd (tail tl))
       (var result hd)
       (for (i :in tl)
            (set! result (_* result [tl i])))
       result)

     (define+ (/ hd (tail tl))
       (_/ hd (apply * tl)))

     (define-macro define-external-binop (op-name)
       (let ((prim-op (intern (concat "_" (symbol-name op-name))))
             (a (gensym))
             (b (gensym)))
         `(define+ (,op-name ,a ,b)
            (,prim-op ,a ,b))))

     (define-macro define-external-binops ((tail op-names))
       `(_newline-sequence 
         ,@(loop for op-name in op-names collect
                 `(define-external-binop ,op-name))))

     (define-external-binops 
       < <= > >= & || && | == === % ^ << >> >>>)

     (define-macro+ incr ((symbol place))
       `(set! ,place (+ 1 ,place))))

In this file we use the forms `define+` and `define-macro+` to declare
definitions which are available for use outside of the module.
Several things to note here: 1) `define` is, as in Scheme, used for
defining constants and for defining functions, with Scheme-style
syntax, 2) macros are non-hygeinic and the macro definition language
is Emacs Lisp, 3) both `define` and `define-macro`'s arguments may be
either symbols or general shadchen-style patterns, although the
pattern matcher at the Javascript level is much simpler than the
matcher at the Emacs Lisp level, 4) underscore symbols refer to `prim`
operations and can be referenced directly.  

In `prim` binary operations and their ilk are operations only.  This
module defines _functional_ versions of all the Javascript
operations.  This way the programmer can `apply` and `funcall` them
to their heart's content.  

Integration with Javascript
---------------------------

Because _Gazelle_ _is_ Javascript and _Gazelle_ functions are exactly
Javascript functions, interoperation with Javascript is simple, and
requires no glue code.  One can include the contents of a Javascript
file directly, by saying 

    (include-js "some-file")

Note that this is a compile-time directive, so the path should be
specified relative to the file being compiled.  

If a piece of Javascript complies with the `require-js` style, as for
instance later versions of `jquery` do, then there is an alternative
way of using modules.  