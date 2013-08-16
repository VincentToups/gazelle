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

Syntax
------

*** Primitive Syntax

Gazelle is based on a primitive s-expression representation of
Javascript.  Each Javascript primitive is supported in Gazelle by a
symbol with a similar name preceeded by an underscore.  This allows
you to write Gazelle code which translates almost directly into the
equivalent Javascript.  For instance:

    (_if (some-condition)
      ((do-something)
       (do-something-else))
      _else 
      ((do-another-thing)
       (do-yet-another-thing)))

Will transform directly into:

    if someCondition() {
       doSomething();
       doSomethingElse();
    } else {
       doAnotherThing();
       doYetAnotherThing();
    }

Usually Gazelle exposes a non-underscored symbol which has the same
behavior as the underscored one, but not in the case of `if`.  `if` is
usually a value-producing expression in Lisp, so 

    (if expr true-expr false-expr) 

produces:

    (expr ? true-expr : false-expr)

Symbols with dots in them are allowed, so

    `x.some-thing.z`

becomes 

    `x.someThing.z`

However, to support full Javascript chaining syntax, the user must us
the `_.` expression.

eg:

    (_. a (a b c) d (e f) g)

Is

    a.a(b,c).d.e(f).g

See [prim.md][] for documentation of the primitive layer.

*** Gazelle Syntax

Gazelle is a much richer language than just the basic Javascript
as-s-expressions syntax above implies.  

Here is a brief highlight of Gazelle's language features:

    (define (f a b c) (_+ a b c))

Defines a function which takes three arguments.  `define` is a very
powerful special form because it allows one to define functions which
perform nestable pattern matching on their arguments.  

    (define (f [: a b c]) 
      (_+ a b c))

Defines a function which accepts only a three element array as input,
binds each element to `a` `b` and `c` and adds those values.  

    (define (g { q a 
                 r b 
                 s c })
     (+ a b c))

The function `g` defined above accepts an object with properties `q`,
`r`, and `s` and binds those values to `a`, `b`, and `c`.  Patterns
are nestable, so the function `h`

    (define (h [: a { q i r j s k } b])
      (_+ a i j k b))

Acccepts an array of three elements, the second of which is an object,
binds `a` and `b` to the first and last elements of the array and `i`,
`j`, and `k` to the entries at `q` `r` and `s` in the middle object.

Gazelle's pattern matcher is powerful and extensible, capable of
performing and abstracting arbitrary combinations of destructuring,
type assertion, and computation.  

One can also define values with `define`, not just functions:

    (define x 10)

Is more or less equivalent to `var x 10`.

    (var-match <pattern> <value>) 

Allows you to introduce variable definitions with pattern matching.


Using the Module System
-----------------------

Much effort has gone into making Gazelle a more modular language than
Javascript.  To that end, Gazelle is integrated with the
[require.js][] Javascript module system, which
allows you to use both Javascript modules written for the browser and
for Node.js and Gazelle modules.  In the latter case, modules provide
a mechanism to organize both Javascript values and static objects like
macros and custom patterns for Gazelle's pattern matcher.

*** In a Browser

Follow the set up instructions at the [require.js][] page.  This
involves creating a `scripts` directory and placing a project entry
point.  Your html page will have a line like:


    <script data-main="scripts/main" src="scripts/require.js"></script>

Now create a `main.gazelle` in `scripts`, open it with emacs, and
type:


    (require ()
       (console.log "Hello World.")


Press C-x C-l, tell emacs that main.gazelle is your project's entry
point, and that the scripts directory is `scripts` and Gazelle will
produce a `main.js`.  You should now be able to load your code in your
browser!

*** Node Setup

Using Gazelle with node only that you install `require.js` via

    npm install require

And that you use the form `node-require` instead of `require` in your
project entry point.  Modules are portable across `node` and web
browsers.

A module should be placed somewhere in your scripts directory, say:

    /scripts/examples/example.gazelle

And look something like this:

    (module (("hooves/hooves" :all)) 
      (define+ (say-hi) (console.log "Hello World")))

This defines a module which exports a single function called `say-hi`.

We can use it in our `main` like so:

    (require (("examples/example" :all))
      (say-hi))

Pressing C-x C-l again will cause Gazelle to recompile the entire
project.  Gazelle is smart enough to only rebuild those parts of your
project which have changed or depend on parts which have changed,
which means in routine development, compilation is quite fast. 

Gazelle produces pure Javascript code which is no longer dependent on
Gazelle and can be further minified or obfuscated using the tools of
your choice.

* * *

[require.js]:http://requirejs.org/
[prim.md]:https://github.com/VincentToups/gazelle/blob/master/doc/prim.md

