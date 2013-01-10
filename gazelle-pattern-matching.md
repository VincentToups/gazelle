On the Gazelle Pattern Matcher
------------------------------

Gazelle's pattern matcher is use extensively in programs because it is
the default mechanism of performing `cond`-like computations and
function argument destructuring.  The macro language is emacs Lisp and
uses `Shadchen` for argument destructuring/matching.  Shadchen's
pattern matcher is similar, but not identical, to, Shadchen, primarily
in an attempt to make the Gazelle pattern matcher consistent with the
types and idioms of Javascript.  This document highlights the
differences.

Gazelle's matcher also differs under the hood: except for an enclosing
function call for each branch, `match` expressions generate unnested
code.  This makes the generated Javascript easier to read, though not
simple, given the terseness of pattern matches relative to expanded
code.  

Lists vs Arrays
---------------

In Gazelle, the pattern 

    (list p1 p2 p3)

Matches a list of three elements by recursively, checking if the value
is a list, checking if it has a `car`, and if that `car` matches `p1`
and then matching the `cdr` of the list against `(list p2 p3)`,
recursing again, and finally checking that the `cdr` is nil.

There are not native lists in Javascript, so Gazelle has an array
pattern, denoted either `(array p ...)` or as

    [: p1 p2 p3]

This is consistent with the array constructor syntax in Gazelle, which
one may write as either `(array v1 v2 v3)` or `[: v1 v2 v3]`.  Unlike
the `list` pattern in Shadchen, the array patterns are checked first
by checking that an array value is indeed being matched agains (by
looking at the object's prototype), and then checking the lenght is
equal to the number of patterns, and then checking that each pattern
matches.  

Tails
-----

In Shadchen, one matches the tail of a list in one of two ways:

    (list-rest p1 p2 p-tail)

or 

    (list p1 p2 (tail p-tail))

Where the pattern `t-pail` matches the tail of the list (possibly
empty).  In Gazelle one matches the tail of an array:

    [: p1 p2 (tail p-tail)]

This is the only valid way of matching the tail for parsimony's sake.
In Shadchen, the tail value is coerced to a list before subsequent
matches, but there are no lists in Gazelle, so the tail is an array.
Gazelle refers to the `Array.prototype` during array pattern matches
and so may be used to match against the Javascript `arguments` object.  

Lists where indexing out of range is "meaningful"
-------------------------------------------------

Indexing out of range in Javascript results in an `undefined` value
rather than an error.  This is used, more or less, to support optional
arguments to the extent that we can view the `arguments` object as a
kind of benighted `array`.  That is, sometimes you want to say 

    [: p1 p2 p3]

And you want `p3`'s to be matched against `undefined` if the input
array has length 2.  Gazelle's pattern matcher provides a non-strict
array match of the form

    [:- p1 p2 p3]

This form does not check the length of the list, and matched patterns
against `undefined` if they index outside of the input array.  

Often you want to combine these behaviors: certain elements must be
within the array length and others may not be.  One can do this using
the patterns we've already discussed:

    [: r1 r2 (tail [: u1 u2])]

Where the `r` patterns are required to be within the array and the `u`
patterns may not be within the array range, and match against
`undefined` if not.  There is a short hand for this, the utility of
which we will see later:

    [: r1 r2 :- u1 u2]

Which is semantically identical, and indeed expands to, the pattern
above.  You wish to occasionally provide a default value for such
optional parts of lists.  You may do so with `opt`:

    [: r1 r2 :- (opt u1 default-value) (opt u2 default-value2)]

If index `2` is out of range against the incoming array, `u1` is
matched against the `defaul-value` of its `opt` form.

Objects
-------

Gazelle provides patterns for matching against objects.  The first
such pattern is `{}`, written for reasons associated with the Emacs
Lisp reader, as:

    ({} key1 p1 key2 p2 ...)

The `keys` are not patterns, and must be identifiers refering to
identifiers which are actually defined in the table.  The patterns are
matched against the values at those keys in the table and the match
succeeds only when all such patterns match.  

It is common in Javascript idiom to assign meaning to the existence of
a key whose value is `undefined`, for instance in the case where you
wish to use an object as a store house for keyword arguments.  In
these cases, the requirement, as above, that the `key`s refer to
`defined` values is onerous.  One may use a non-strict object match in
the following way:

    ({}- key1 p1 key2 p2)

This pattern will match regardless of whether the values at `key1` or
`2` are defined, as long as `p1` and `p2` do not depend on their being
defined as well.  You can think of `{}` as expanding to `{}-` in the
following way.

    ({} key1 p1 key2 p2 ...)

Becomes:

    ({}- key1 (defined p1) key2 (defined p2))

Where the `defined` pattern, also unique to Gazelle, asserts first
that the object is defined before performing matches against is
argument.  

Function Argument Destructuring
-------------------------------

The above features provide everything you need to do relatively
idiomatic function argument destructuring.  This is because the
non-primitive function forms in Gazelle, `lambda` and `define` treat
their argument list (or lists, if multiple bodies are indicated) as
`array/arguments` patterns and so can exploit the full pattern matcher
to destructure their arguments.  

Suppose we have a function which takes a single mandatory argument and
one that may or may not be provided:

    (define (f1 mandatory :- optional)
     (if (undefined optional)
         ...)
     ...)

This function will issue an error if called with no arguments, but
will execute if one is passed in.  This is a bit nicer than
Javascript, which does not even enforce the number of arguments.  

It is common to pass an object to a function whose keys represent
keyword arguments to that function.  In Gazelle, we can write:

    (define (f1 ({}- k1 v1
                     k2 v2
                     ...))
     body ...)

To destructuring.  However, we often want to provide default arguments
in the case that a key is missing.  We can do that with the pattern
matcher using the `defined-or` pattern

    (define (f1 ({}- k1 (or (defined v1	) 
	                        (let v1 default1))
                     k2 v2
                     ...)))

But this is a bit verbose.  The Gazelle matcher provides an
`options{}` pattern just for this purpose:

    (define (f1 (options{} (id default-val)
                            (id2 default-val2)))
     body ....)

the forms `(id default-val)` must be an identifier and a value
expression, where `id` is used to index the object and to bind the
value in the local scope.  What if the user wishes to match the value
at a key in the object against a more complex pattern while still
furnishing a default?  One may write:

    (define (f1 (options{} (id pattern1 default-val)
                            (id2 pattern2 default-val2)))
     body ....)

Where the `pattern` is matched against the value at `id` in the
incoming object, or, of that is `undefined`, then against the
`default-val`.  One may even allow the user to pass in an optional
options list using the following combination of pattern matcher
functionality:

    (define (f1 :- (opt (options{} ...) default-options))
      body ...)

This ensures that the user can call `f1` without any arguments, or
with a single argument that is an options table.  