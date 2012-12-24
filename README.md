Gazelle
-------

[Gazelle](https://github.com/VincentToups/gazelle) is a rewrite of an
aborted project, jsel, which aims to be a sensible Lisp for
Javascript.  By "sensible" I mean it adheres to the following ideas:

1.  Be yourself:
    Gazelle doesn't try to be or imitate another Lisp.   It is based
    on an s-expression representation of javascript itself and the
    base idioms of the language are the base idioms of javascript.
    Any other idioms are meant to be added via the macro system.
2.  Stay Organized:
    Despite the above, Gazelle has a few built in extensions to the
    basic Javascript paradigm.  One of them is a module system for
    both static and dynamic (macros and run-time values) objects,
    based on [require.js](http://requirejs.org/) 
3.  I never metaprogram I didn't like.
    That is, be a Lisp: Gazelle provides a powerful macroexpansion
    language (Emacs Lisp + shadchen) which transforms a s-expression
    representation of javascript before the s-expression to javascript
    compiler is invoked.  The idea behind Lisps is extension of the
    base language, so Gazelle exposes _javascript_ for extension.

Unsensibly, Gazelle is written in Emacs Lisp.  I'll port it to Common
Lisp eventually. 

Getting Started
---------------

You'll need [GNU Emacs](http://www.gnu.org/software/emacs/), which
hosts the entire project.

You'll also need this repository and
[shadchen-el](https://github.com/VincentToups/shadchen-el).

    you@home:~$ cd emacs-code # or wherever you put your emacs stuff
    you@home:~/emacs-code$ git clone https://github.com/VincentToups/shadchen-el.git
    you@home:~/emacs-code$ git clone  https://github.com/VincentToups/gazelle.git
	    
Then, in your emacs configuration, either `.emacs.d/init.el` or
`.emacs` add lines to the effect of:

    (push "~/emacs-code/shadchen-el/" load-path)
    (push "~/emacs-code/gazelle/" load-path)

If you want to use _Gazelle_ you then must, at some point, `(require
'gazelle)`.

_Gazelle_ can be used in two ways.  The first is the simplest, the
function `gz:transcode-file` takes the contents of a `.gazelle` file
and outputs a `.js` file with the same filename in the same directory.
(Optionally, an alternative output file name can be specified.)  One
could develop their Javascript project in separate files this way and
never used Gazelle's module system.  However, the module system
provides powerful features for code organization.

Using Modules
-------------

Gazelle's module system is based on `require.js`, with extensions and
provisions for the fact that Gazelle has both run-time and
compile-time entities which it needs to scope to modules.  To use the
system, you must set up your project directory as in the [require.js
documentation](http://requirejs.org/docs/jquery.html).  _Gazelle_ also
needs to know about the location of your project directory.  It can
find out about this in two ways.  The first is to type

    M-x gz:set-project-directory

And then enter the `scripts` directory for your project.  The
alternative is to do nothing, and the first time _Gazelle_ needs to
use the project directory, it will ask for one.  Afterward, if need to
set the project directory, use the above command.

Your page should look like the `require.js` example page, eg:

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

And your entry point should be in `scripts/main.gazelle`.  And it
should look something like this:

    (require 
     (("hooves/operator-functions" :all)
      ("hooves/lisp-idioms" (:with-prefix idioms- :all))
	  ("jquery/jquery" (:as $)))
     (_+ 1 1)
     (var x 10)
     (incr x)
     (console.log (_+ "X minus one is " (- x 1)))
     (console.log (+ "7 < 10" (< 7 10)))
     (console.log (+ "7 > 10" (> 7 10)))
     (console.log (+ "using idioms- " (idioms-apply + [: 1 2])))
     (.. ($ "body") (append "Hello World.")) 
     (+ 1 2))

Here we have just a simple example to demonstrate the module syntax.
`require` is a special form which compiles to a call to the
`require.js` function call of the same name (how to do this is
explained in the manual).  

The syntax is 

    (require <list-of-module/import-specifiers> body0 body ...)

Each module import specifier is of the form 

    (<module designator string> import-directives)

An import directive is one of 

    (:as import-mapping)

    :all

    (:with-prefix prefix import-directive)

An import mapping is one of

    a symbol

    a list with one symbol

    a list with two symbols

The meaning of a single symbol is to take the external symbol in the
imported module and map it onto a local symbol.  The list with a
single symbol as the same meaning.  When two symbols are present, the
first designates the name of an entity in the module and the second
designates the local name.  

An `:all` import directive imports all external entities from the
module to identical names in the current module.

`:with-prefix` is a kind of import directive modifier.  It expands the
inner import directive and then prefixes all the local names with the
indicated prefix.  So in our example, the `lisp-idioms` module exports
symbols `funcall` and `apply`.  The `("hooves/lisp-idios"
(:with-prefix idioms- :all))` creates module local bindings
`idioms-funcall` and `idioms-apply`.

Local bindings to values in an imported module are not actual
variables, but symbol macros, so you can `set!` them at get the
appropriate behavior.  That is, if a value is referenced inside a
module, and it is imported into another module, expressions in both
modules refer to the same Javascript object.  

Once you have your `main.gazelle` and your modules, simple perform a
`gz:transcode-file` on `main.gazelle`.  This will transcode all of the
files via the module system.  Module transcoding is cached against the
md5 hash of the module file, so if you change the module, the next
recompile of `main.gazelle` with force a recompile of the module too,
but unnecessary module recompilation is avoided.  You can reset the
cache by 

   M-x proper:reset-module-cache

In this way the module system doubles as the build system.  

Here is an example of a module file  (located at `hooves/lisp-idioms.gazelle`):

    (module 
     ()
     ;; lisp-idioms 
     ;; this module defines funcall and apply
     (define+ (apply f an-array)
       (.. f (apply undefined an-array)))
     (define+ (funcall f (tail args))
       (apply f args)))

Inside a module, `define` defines local module values or functions,
and `define-macro` defines local macros.  `define+` defines an
external function or value and `define-macro+` defines an external
macro.  

`define` is like `define` in Scheme, in the sense that it can define
either functions or values, except that any place an argument symbol
can be used, you can specify a shadchen-like pattern.  To collect any
additional arguments into an array, use the pattern `(tail tl)` in the
argument list.  

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
of its input argument into the current buffer.  Generally, you won't
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
one advanced feature in _Gazelle_ which is not in Javascript itself,
modules, of which more later.

I'm still developing this system.  Eventually this README will become
a manual. 

