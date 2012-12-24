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
one advanced feature in _Gazelle_ which is not in Javascript itself,
modules, of which more later.

I'm still developing this system.  Eventually this README will become
a manual. 

