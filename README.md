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

See [prim.md][] for documentation of the primitive layer.

Using the Module System
-----------------------

Much effort has gone into making Gazelle a more modular language than
Javascript.  To that end, Gazelle is integrated with the
[require.js][http://requirejs.org/] Javascript module system, which
allows you to use both Javascript modules written for the browser and
for Node.js and Gazelle modules.  In the latter case, modules provide
a mechanism to organize both Javascript values and static objects like
macros and custom patterns for Gazelle's pattern matcher.



* * *

[require.js]:http://requirejs.org/

