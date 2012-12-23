var reduce = function (f, init, ra)  {
  for (i in (ra))    {
    init = f(ra[i], init);
    };
  return (init);
  };
var equalequalequal = function (a, b)  {
  return ((a===b));
  };
var stringwho = function (o)  {
  return (equalequalequal(typeof(o), "string"));
  };
var numberwho = function (o)  {
  return (equalequalequal(typeof(o), "number"));
  };
var lessThan = function (a, b)  {
  return ((a<b));
  };
var greaterThan = function (a, b)  {
  return ((a>b));
  };
var lessThanequal = function (a, b)  {
  return ((a<=b));
  };
var greaterThanequal = function (a, b)  {
  return ((a>=b));
  };
var equalequal = function (a, b)  {
  return ((a==b));
  };
var plus = function ()  {
  return ((function (arguments)    {
    var G111165 = undefined;
    var G111166 = Array.prototype.slice.call(arguments, 0);
    G111165 = (function (arguments, G111167)      {
      return ((function ()        {
        if ((!((((G111167 instanceof Array))&&(((G111167.length)>0))))))          {
          return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
          } else           {
          return ((function (arguments, hd)            {
            return ((function (arguments, rest)              {
              return (((equalequalequal(0, rest.length))?(hd) : (reduce(function (a, b)                {
                return ((b+a));
                }, hd, rest))));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G111167.slice(1)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G111167[0]));
          };
        })());
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G111166);
    if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G111165))))      {
      return (G111165);
      };
    G111165 = (function (arguments, G111164)      {
      throw ((("No match error in lambda ")+("(lambda (hd (tail rest)) (if (=== 0 rest\.length) hd (reduce (lambda (a b) (_+ b a)) hd rest)))")));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G111166);
    if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G111165))))      {
      return (G111165);
      };
    throw ((("match-fail at ((match (_\. Array prototype slice (call arguments 0)) ([: hd (tail rest)] (if (=== 0 rest\.length) hd (reduce (lambda (a b) (_+ b a)) hd rest))) (G111164 (_throw (_+ \"No match error in lambda \" \"(lambda (hd (tail rest)) (if (=== 0 rest\\.length) hd (reduce (lambda (a b) (_+ b a)) hd rest)))\"))))) for value ")+G111166));
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
  };
var times = function ()  {
  return (reduce(function (a, b)    {
    return ((a*b));
    }, 1, (Array.prototype.slice.call)(arguments, 0)));
  };
var minus = function ()  {
  return ((function (arguments)    {
    var G111170 = undefined;
    var G111171 = Array.prototype.slice.call(arguments, 0);
    G111170 = (function (arguments, G111172)      {
      return ((function ()        {
        if ((!((((G111172 instanceof Array))&&(((G111172.length)>0))))))          {
          return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
          } else           {
          return ((function (arguments, hd)            {
            return ((function (arguments, rest)              {
              return ((hd-((plus.apply)(plus, rest))));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G111172.slice(1)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G111172[0]));
          };
        })());
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G111171);
    if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G111170))))      {
      return (G111170);
      };
    G111170 = (function (arguments, G111169)      {
      throw ((("No match error in lambda ")+("(lambda (hd (tail rest)) (_- hd (plus\.apply plus rest)))")));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G111171);
    if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G111170))))      {
      return (G111170);
      };
    throw ((("match-fail at ((match (_\. Array prototype slice (call arguments 0)) ([: hd (tail rest)] (_- hd (plus\.apply plus rest))) (G111169 (_throw (_+ \"No match error in lambda \" \"(lambda (hd (tail rest)) (_- hd (plus\\.apply plus rest)))\"))))) for value ")+G111171));
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
  };
var divide = function ()  {
  return ((function (arguments)    {
    var G111175 = undefined;
    var G111176 = Array.prototype.slice.call(arguments, 0);
    G111175 = (function (arguments, G111177)      {
      return ((function ()        {
        if ((!((((G111177 instanceof Array))&&(((G111177.length)>0))))))          {
          return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
          } else           {
          return ((function (arguments, hd)            {
            return ((function (arguments, rest)              {
              return ((hd/((times.apply)(times, rest))));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G111177.slice(1)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G111177[0]));
          };
        })());
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G111176);
    if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G111175))))      {
      return (G111175);
      };
    G111175 = (function (arguments, G111174)      {
      throw ((("No match error in lambda ")+("(lambda (hd (tail rest)) (_/ hd (times\.apply times rest)))")));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G111176);
    if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G111175))))      {
      return (G111175);
      };
    throw ((("match-fail at ((match (_\. Array prototype slice (call arguments 0)) ([: hd (tail rest)] (_/ hd (times\.apply times rest))) (G111174 (_throw (_+ \"No match error in lambda \" \"(lambda (hd (tail rest)) (_/ hd (times\\.apply times rest)))\"))))) for value ")+G111176));
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
  };
var map1 = function (f, array)  {
  var output = [];
  for (i in (array))    {
    (output.push)(f(array[i]));
    };
  return (output);
  };
var fortimes = "macro - no dynamic value.";
var testFortimes = function ()  {
  return ((function (arguments)    {
    var fortimesOver111194 = ["cats", "dogs", "aardvarks"];
    for (index in (fortimesOver111194))      {
      (function (arguments)        {
        var G111196 = undefined;
        var G111197 = fortimesOver111194[index];
        G111196 = (function (arguments, element)          {
          return (print(element));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G111197);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G111196))))          {
          return (G111196);
          };
        G111196 = (function (arguments, fortimesAnythingElse111195)          {
          return ((function (arguments)            {
            throw ((("Match failed in for* %S")+("(for* ((index element) :in [: \"cats\" \"dogs\" \"aardvarks\"]) (print element))")));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G111197);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G111196))))          {
          return (G111196);
          };
        throw ((("match-fail at ((match [for*-over111194 index] (element (print element)) (for*-anything-else111195 (throw (_+ \"Match failed in for* %S\" \"(for* ((index element) :in [: \\"cats\\" \\"dogs\\" \\"aardvarks\\"]) (print element))\"))))) for value ")+G111197));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      };
    return (undefined);
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
  };
