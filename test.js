var definedPredicate = (function (x)  {
  return (!((((typeof x))===("undefined"))));
  });
var undefinedPredicate = (function (x)  {
  return (((typeof x))===("undefined"));
  });
var numberPredicate = (function (o)  {
  return (((typeof o))===("number"));
  });
var stringPredicate = (function (o)  {
  return (((typeof o))===("string"));
  });
var arrayPredicate = (function (o)  {
  return (o instanceof Array);
  });
var emptyPredicate = (function (o)  {
  return (0===o.length);
  });
var nullPredicate = (function (x)  {
  return TripleEqualminus(null, x);
  });
// collect{}
// macro - no dynamic value.
;
// collect->
// macro - no dynamic value.
;
// @
// macro - no dynamic value.
;
var apply = (function (f, lst)  {
  return f.apply(f, lst);
  });
var TripleEqualminus_ = (function (partial)  {
  return (function (open)    {
    return (open===partial);
    });
  });
// when
// macro - no dynamic value.
;
// unless
// macro - no dynamic value.
;
var Delay = (function (lambdaExpr)  {
  this.lambdaExpr = lambdaExpr;
  return this;
  });
Delay.prototype.value = (function ()  {
  return this.lambdaExpr();
  });
// delay
// macro - no dynamic value.
;
var undelay = (function (o)  {
  return (function (arguments)    {
    var G40952 = undefined;
    var G40953 = o;
    G40952 = (function (arguments)      {
      var matchVal40954 = G40953;
      var matchFunExpr40956 = (function (G40955)        {
        return (G40955 instanceof Delay);
        });
      if ((!(matchFunExpr40956(matchVal40954))))        {
        return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
        };
      var delayObject = matchVal40954;
      return delayObject.value();
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G40952))))      {
      return G40952;
      };
    throw ((("match-fail at ((match o ((instance Delay delay-object) (delay-object\\.value)))) for value ")+(JSON.stringify(G40953))));
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  });
// define-to
// macro - no dynamic value.
;
// for*
// macro - no dynamic value.
;
// collecting
// macro - no dynamic value.
;
// collect-for
// macro - no dynamic value.
;
var range = (function ()  {
  var returnValue40962 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigil40961",
      args:arguments
    };
    });
  var recurP40965 = (function (val40966)    {
    if ((("undefined")===((typeof val40966))))      {
      return false;
      };
    return (val40966.recurSigil===("recurSigil40961"));
    });
  var actualFun40964 = (function ()    {
    return (function (arguments)      {
      var G40968 = undefined;
      var G40969 = Array.prototype.slice.apply(arguments);
      G40968 = (function (arguments)        {
        var matchVal40970 = G40969;
        if ((!((("object")===((typeof matchVal40970))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((4===matchVal40970.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var start = matchVal40970[0];
        var step = matchVal40970[1];
        var stop = matchVal40970[2];
        var transform = matchVal40970[3];
        var out = [];
        for (var i = start;(i<stop);i = ((i)+(step)))          {
          out.push(transform(i));
          };
        return out;
        ;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G40968))))        {
        return G40968;
        };
      G40968 = (function (arguments)        {
        var matchVal40971 = G40969;
        if ((!((("object")===((typeof matchVal40971))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((3===matchVal40971.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var start = matchVal40971[0];
        var step = matchVal40971[1];
        var stop = matchVal40971[2];
        return recur(start, step, stop, (function (v)          {
          return v;
          }));
        ;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G40968))))        {
        return G40968;
        };
      G40968 = (function (arguments)        {
        var matchVal40972 = G40969;
        if ((!((("object")===((typeof matchVal40972))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((2===matchVal40972.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var start = matchVal40972[0];
        var stop = matchVal40972[1];
        return recur(start, 1, stop, (function (v)          {
          return v;
          }));
        ;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G40968))))        {
        return G40968;
        };
      G40968 = (function (arguments)        {
        var matchVal40973 = G40969;
        if ((!((("object")===((typeof matchVal40973))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((1===matchVal40973.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var stop = matchVal40973[0];
        return recur(0, 1, stop, (function (v)          {
          return v;
          }));
        ;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G40968))))        {
        return G40968;
        };
      G40968 = (function (arguments)        {
        var matchVal40974 = G40969;
        var anythingElse40967 = matchVal40974;
        throw ((("Match fail in range against: ")+(anythingElse40967)));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G40968))))        {
        return G40968;
        };
      throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: start step stop transform] (_newline-sequence (var out [:]) (for ((var i start) (_< i stop) (set! i (_+ i step))) (out\\.push (transform i))) out)) ([: start step stop] (_newline-sequence (recur start step stop (lambda (v) v)))) ([: start stop] (_newline-sequence (recur start 1 stop (lambda (v) v)))) ([: stop] (_newline-sequence (recur 0 1 stop (lambda (v) v)))) (anything-else-40967 (_throw (_+ ''Match fail in range against: '' anything-else-40967))))) for value ")+(JSON.stringify(G40969))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValue40962 = actualFun40964.apply(this, arguments);
  while (recurP40965(returnValue40962))    {
    returnValue40962 = actualFun40964.apply(this, returnValue40962.args);
    };
  return returnValue40962;
  });
var pureSort = (function ()  {
  var returnValue40976 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigil40975",
      args:arguments
    };
    });
  var recurP40979 = (function (val40980)    {
    if ((("undefined")===((typeof val40980))))      {
      return false;
      };
    return (val40980.recurSigil===("recurSigil40975"));
    });
  var actualFun40978 = (function ()    {
    return (function (arguments)      {
      var G40982 = undefined;
      var G40983 = Array.prototype.slice.apply(arguments);
      G40982 = (function (arguments)        {
        var matchVal40984 = G40983;
        if ((!((("object")===((typeof matchVal40984))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((matchVal40984.length>=1))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArraySimplePart40985 = Array.prototype.slice.call(matchVal40984, 0, 1);
        if ((!((("object")===((typeof matchArraySimplePart40985))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((1===matchArraySimplePart40985.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var array = matchArraySimplePart40985[0];
        var matchArrayTailPart40986 = Array.prototype.slice.call(matchVal40984, 1);
        var matchTemp40987 = matchArrayTailPart40986[0];
        var previousMatchSucceeded40988 = true;
        switch (1){
                  case 1:
          if ((("undefined")===((typeof matchTemp40987))))            {
            previousMatchSucceeded40988 = false;
            };
          var sortFun = matchTemp40987;
          if (previousMatchSucceeded40988)            {
            break;
            };
          previousMatchSucceeded40988 = true;
          case 1:
          var fResult40989 = ((function (x)            {
            return (function (a, b)              {
              return ((lessThan(a, b))?(-1) : (1));
              });
            }))(matchTemp40987);
          if ((fResult40989===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))            {
            previousMatchSucceeded40988 = false;
            };
          var sortFun = fResult40989;
          if (previousMatchSucceeded40988)            {
            break;
            };
          previousMatchSucceeded40988 = true;
          default :
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          
        };
        var copy = array.concat([]);
        copy.sort(sortFun);
        return copy;
        ;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G40982))))        {
        return G40982;
        };
      G40982 = (function (arguments)        {
        var matchVal40990 = G40983;
        var anythingElse40981 = matchVal40990;
        throw ((("Match fail in pure-sort against: ")+(anythingElse40981)));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G40982))))        {
        return G40982;
        };
      throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: array :- (opt sort-fun (lambda (a b) (if (< a b) -1 1)))] (_newline-sequence (var copy (\\.\\. array (concat [:]))) (\\.\\. copy (sort sort-fun)) copy)) (anything-else-40981 (_throw (_+ ''Match fail in pure-sort against: '' anything-else-40981))))) for value ")+(JSON.stringify(G40983))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValue40976 = actualFun40978.apply(this, arguments);
  while (recurP40979(returnValue40976))    {
    returnValue40976 = actualFun40978.apply(this, returnValue40976.args);
    };
  return returnValue40976;
  });
// with-slots
// macro - no dynamic value.
;
var plus = (function ()  {
  var returnValue40993 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigil40992",
      args:arguments
    };
    });
  var recurP40996 = (function (val40997)    {
    if ((("undefined")===((typeof val40997))))      {
      return false;
      };
    return (val40997.recurSigil===("recurSigil40992"));
    });
  var actualFun40995 = (function ()    {
    return (function (arguments)      {
      var G40999 = undefined;
      var G41000 = Array.prototype.slice.apply(arguments);
      G40999 = (function (arguments)        {
        var matchVal41001 = G41000;
        if ((!((("object")===((typeof matchVal41001))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((matchVal41001.length>=1))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArraySimplePart41002 = Array.prototype.slice.call(matchVal41001, 0, 1);
        if ((!((("object")===((typeof matchArraySimplePart41002))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((1===matchArraySimplePart41002.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var hd = matchArraySimplePart41002[0];
        var matchArrayTailPart41003 = Array.prototype.slice.call(matchVal41001, 1);
        var tl = matchArrayTailPart41003;
        var result = hd;
        for (i in (tl))          {
          result = ((result)+(tl[i]));
          };
        return result;
        ;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G40999))))        {
        return G40999;
        };
      G40999 = (function (arguments)        {
        var matchVal41004 = G41000;
        var anythingElse40998 = matchVal41004;
        throw ((("Match fail in + against: ")+(anythingElse40998)));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G40999))))        {
        return G40999;
        };
      throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result)) (anything-else-40998 (_throw (_+ ''Match fail in + against: '' anything-else-40998))))) for value ")+(JSON.stringify(G41000))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValue40993 = actualFun40995.apply(this, arguments);
  while (recurP40996(returnValue40993))    {
    returnValue40993 = actualFun40995.apply(this, returnValue40993.args);
    };
  return returnValue40993;
  });
var minus = (function ()  {
  var returnValue41006 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigil41005",
      args:arguments
    };
    });
  var recurP41009 = (function (val41010)    {
    if ((("undefined")===((typeof val41010))))      {
      return false;
      };
    return (val41010.recurSigil===("recurSigil41005"));
    });
  var actualFun41008 = (function ()    {
    return (function (arguments)      {
      var G41012 = undefined;
      var G41013 = Array.prototype.slice.apply(arguments);
      G41012 = (function (arguments)        {
        var matchVal41014 = G41013;
        if ((!((("object")===((typeof matchVal41014))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((matchVal41014.length>=1))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArraySimplePart41015 = Array.prototype.slice.call(matchVal41014, 0, 1);
        if ((!((("object")===((typeof matchArraySimplePart41015))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((1===matchArraySimplePart41015.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var hd = matchArraySimplePart41015[0];
        var matchArrayTailPart41016 = Array.prototype.slice.call(matchVal41014, 1);
        var tl = matchArrayTailPart41016;
        return (((tl.length>0))?(((hd)-(apply(plus, tl)))) : ((-(hd))));
        ;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G41012))))        {
        return G41012;
        };
      G41012 = (function (arguments)        {
        var matchVal41017 = G41013;
        var anythingElse41011 = matchVal41017;
        throw ((("Match fail in - against: ")+(anythingElse41011)));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G41012))))        {
        return G41012;
        };
      throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (if (_> tl\\.length 0) (_- hd (apply + tl)) (_- hd)))) (anything-else-41011 (_throw (_+ ''Match fail in - against: '' anything-else-41011))))) for value ")+(JSON.stringify(G41013))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValue41006 = actualFun41008.apply(this, arguments);
  while (recurP41009(returnValue41006))    {
    returnValue41006 = actualFun41008.apply(this, returnValue41006.args);
    };
  return returnValue41006;
  });
var times = (function ()  {
  var returnValue41019 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigil41018",
      args:arguments
    };
    });
  var recurP41022 = (function (val41023)    {
    if ((("undefined")===((typeof val41023))))      {
      return false;
      };
    return (val41023.recurSigil===("recurSigil41018"));
    });
  var actualFun41021 = (function ()    {
    return (function (arguments)      {
      var G41025 = undefined;
      var G41026 = Array.prototype.slice.apply(arguments);
      G41025 = (function (arguments)        {
        var matchVal41027 = G41026;
        if ((!((("object")===((typeof matchVal41027))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((matchVal41027.length>=1))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArraySimplePart41028 = Array.prototype.slice.call(matchVal41027, 0, 1);
        if ((!((("object")===((typeof matchArraySimplePart41028))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((1===matchArraySimplePart41028.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var hd = matchArraySimplePart41028[0];
        var matchArrayTailPart41029 = Array.prototype.slice.call(matchVal41027, 1);
        var tl = matchArrayTailPart41029;
        var result = hd;
        for (i in (tl))          {
          result = ((result)*(tl[i]));
          };
        return result;
        ;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G41025))))        {
        return G41025;
        };
      G41025 = (function (arguments)        {
        var matchVal41030 = G41026;
        var anythingElse41024 = matchVal41030;
        throw ((("Match fail in * against: ")+(anythingElse41024)));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G41025))))        {
        return G41025;
        };
      throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result)) (anything-else-41024 (_throw (_+ ''Match fail in * against: '' anything-else-41024))))) for value ")+(JSON.stringify(G41026))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValue41019 = actualFun41021.apply(this, arguments);
  while (recurP41022(returnValue41019))    {
    returnValue41019 = actualFun41021.apply(this, returnValue41019.args);
    };
  return returnValue41019;
  });
var divide = (function ()  {
  var returnValue41032 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigil41031",
      args:arguments
    };
    });
  var recurP41035 = (function (val41036)    {
    if ((("undefined")===((typeof val41036))))      {
      return false;
      };
    return (val41036.recurSigil===("recurSigil41031"));
    });
  var actualFun41034 = (function ()    {
    return (function (arguments)      {
      var G41038 = undefined;
      var G41039 = Array.prototype.slice.apply(arguments);
      G41038 = (function (arguments)        {
        var matchVal41040 = G41039;
        if ((!((("object")===((typeof matchVal41040))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((matchVal41040.length>=1))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArraySimplePart41041 = Array.prototype.slice.call(matchVal41040, 0, 1);
        if ((!((("object")===((typeof matchArraySimplePart41041))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((1===matchArraySimplePart41041.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var hd = matchArraySimplePart41041[0];
        var matchArrayTailPart41042 = Array.prototype.slice.call(matchVal41040, 1);
        var tl = matchArrayTailPart41042;
        return ((hd)/((apply(times, tl))));
        ;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G41038))))        {
        return G41038;
        };
      G41038 = (function (arguments)        {
        var matchVal41043 = G41039;
        var anythingElse41037 = matchVal41043;
        throw ((("Match fail in / against: ")+(anythingElse41037)));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G41038))))        {
        return G41038;
        };
      throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (_/ hd (apply * tl)))) (anything-else-41037 (_throw (_+ ''Match fail in / against: '' anything-else-41037))))) for value ")+(JSON.stringify(G41039))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValue41032 = actualFun41034.apply(this, arguments);
  while (recurP41035(returnValue41032))    {
    returnValue41032 = actualFun41034.apply(this, returnValue41032.args);
    };
  return returnValue41032;
  });
var map1 = (function (f, a)  {
  var o = [];
  for (var i = 0;lessThan(i, a.length);i = plus(i, 1))    {
    o[i] = f(a[i]);
    };
  return o;
  });
var min2 = (function (a, b)  {
  return ((lessThan(a, b))?(a) : (b));
  });
var max2 = (function (a, b)  {
  return ((greaterThan(a, b))?(a) : (b));
  });
var foldl = (function (fItAc, init, sequence)  {
  for (var i = 0;lessThan(i, sequence.length);i = plus(i, 1))    {
    init = fItAc(init, sequence[i]);
    };
  return init;
  });
var min = (function ()  {
  var returnValue41045 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigil41044",
      args:arguments
    };
    });
  var recurP41048 = (function (val41049)    {
    if ((("undefined")===((typeof val41049))))      {
      return false;
      };
    return (val41049.recurSigil===("recurSigil41044"));
    });
  var actualFun41047 = (function ()    {
    return (function (arguments)      {
      var G41051 = undefined;
      var G41052 = Array.prototype.slice.apply(arguments);
      G41051 = (function (arguments)        {
        var matchVal41053 = G41052;
        if ((!((("object")===((typeof matchVal41053))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((matchVal41053.length>=0))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArraySimplePart41054 = Array.prototype.slice.call(matchVal41053, 0, 0);
        if ((!((("object")===((typeof matchArraySimplePart41054))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((0===matchArraySimplePart41054.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArrayTailPart41055 = Array.prototype.slice.call(matchVal41053, 0);
        var values = matchArrayTailPart41055;
        return foldl(min2, Infinity, values);
        ;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G41051))))        {
        return G41051;
        };
      G41051 = (function (arguments)        {
        var matchVal41056 = G41052;
        var anythingElse41050 = matchVal41056;
        throw ((("Match fail in min against: ")+(anythingElse41050)));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G41051))))        {
        return G41051;
        };
      throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail values)] (_newline-sequence (foldl min2 Infinity values))) (anything-else-41050 (_throw (_+ ''Match fail in min against: '' anything-else-41050))))) for value ")+(JSON.stringify(G41052))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValue41045 = actualFun41047.apply(this, arguments);
  while (recurP41048(returnValue41045))    {
    returnValue41045 = actualFun41047.apply(this, returnValue41045.args);
    };
  return returnValue41045;
  });
var max = (function ()  {
  var returnValue41058 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigil41057",
      args:arguments
    };
    });
  var recurP41061 = (function (val41062)    {
    if ((("undefined")===((typeof val41062))))      {
      return false;
      };
    return (val41062.recurSigil===("recurSigil41057"));
    });
  var actualFun41060 = (function ()    {
    return (function (arguments)      {
      var G41064 = undefined;
      var G41065 = Array.prototype.slice.apply(arguments);
      G41064 = (function (arguments)        {
        var matchVal41066 = G41065;
        if ((!((("object")===((typeof matchVal41066))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((matchVal41066.length>=0))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArraySimplePart41067 = Array.prototype.slice.call(matchVal41066, 0, 0);
        if ((!((("object")===((typeof matchArraySimplePart41067))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((0===matchArraySimplePart41067.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArrayTailPart41068 = Array.prototype.slice.call(matchVal41066, 0);
        var values = matchArrayTailPart41068;
        return foldl(max2, minus(Infinity), values);
        ;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G41064))))        {
        return G41064;
        };
      G41064 = (function (arguments)        {
        var matchVal41069 = G41065;
        var anythingElse41063 = matchVal41069;
        throw ((("Match fail in max against: ")+(anythingElse41063)));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G41064))))        {
        return G41064;
        };
      throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail values)] (_newline-sequence (foldl max2 (- Infinity) values))) (anything-else-41063 (_throw (_+ ''Match fail in max against: '' anything-else-41063))))) for value ")+(JSON.stringify(G41065))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValue41058 = actualFun41060.apply(this, arguments);
  while (recurP41061(returnValue41058))    {
    returnValue41058 = actualFun41060.apply(this, returnValue41058.args);
    };
  return returnValue41058;
  });
var map = (function ()  {
  var returnValue41071 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigil41070",
      args:arguments
    };
    });
  var recurP41074 = (function (val41075)    {
    if ((("undefined")===((typeof val41075))))      {
      return false;
      };
    return (val41075.recurSigil===("recurSigil41070"));
    });
  var actualFun41073 = (function ()    {
    return (function (arguments)      {
      var G41077 = undefined;
      var G41078 = Array.prototype.slice.apply(arguments);
      G41077 = (function (arguments)        {
        var matchVal41079 = G41078;
        if ((!((("object")===((typeof matchVal41079))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((matchVal41079.length>=1))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArraySimplePart41080 = Array.prototype.slice.call(matchVal41079, 0, 1);
        if ((!((("object")===((typeof matchArraySimplePart41080))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((1===matchArraySimplePart41080.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var f = matchArraySimplePart41080[0];
        var matchArrayTailPart41081 = Array.prototype.slice.call(matchVal41079, 1);
        var arrays = matchArrayTailPart41081;
        var minLen = min.apply(undefined, map1((function (a)          {
          return a.length;
          }), arrays));
        var out = [];
        for (var i = 0;lessThan(i, minLen);i = plus(i, 1))          {
          out[i] = f.apply(this, map1((function (a)            {
            return a[i];
            }), arrays));
          };
        return out;
        ;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G41077))))        {
        return G41077;
        };
      G41077 = (function (arguments)        {
        var matchVal41082 = G41078;
        var anythingElse41076 = matchVal41082;
        throw ((("Match fail in map against: ")+(anythingElse41076)));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G41077))))        {
        return G41077;
        };
      throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: f (tail arrays)] (_newline-sequence (var min-len (min\\.apply undefined (map1 (lambda (a) a\\.length) arrays))) (var out [:]) (for ((var i 0) (< i min-len) (set! i (+ i 1))) (set! [out i] (f\\.apply this (map1 (lambda (a) [a i]) arrays)))) out)) (anything-else-41076 (_throw (_+ ''Match fail in map against: '' anything-else-41076))))) for value ")+(JSON.stringify(G41078))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValue41071 = actualFun41073.apply(this, arguments);
  while (recurP41074(returnValue41071))    {
    returnValue41071 = actualFun41073.apply(this, returnValue41071.args);
    };
  return returnValue41071;
  });
var each = (function ()  {
  var returnValue41084 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigil41083",
      args:arguments
    };
    });
  var recurP41087 = (function (val41088)    {
    if ((("undefined")===((typeof val41088))))      {
      return false;
      };
    return (val41088.recurSigil===("recurSigil41083"));
    });
  var actualFun41086 = (function ()    {
    return (function (arguments)      {
      var G41090 = undefined;
      var G41091 = Array.prototype.slice.apply(arguments);
      G41090 = (function (arguments)        {
        var matchVal41092 = G41091;
        if ((!((("object")===((typeof matchVal41092))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((matchVal41092.length>=1))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArraySimplePart41093 = Array.prototype.slice.call(matchVal41092, 0, 1);
        if ((!((("object")===((typeof matchArraySimplePart41093))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((1===matchArraySimplePart41093.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var f = matchArraySimplePart41093[0];
        var matchArrayTailPart41094 = Array.prototype.slice.call(matchVal41092, 1);
        var arrays = matchArrayTailPart41094;
        var minLen = min.apply(undefined, map1((function (a)          {
          return a.length;
          }), arrays));
        for (var i = 0;lessThan(i, minLen);i = plus(i, 1))          {
          f.apply(this, map1((function (a)            {
            return a[i];
            }), arrays));
          };
        return undefined;
        ;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G41090))))        {
        return G41090;
        };
      G41090 = (function (arguments)        {
        var matchVal41095 = G41091;
        var anythingElse41089 = matchVal41095;
        throw ((("Match fail in each against: ")+(anythingElse41089)));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G41090))))        {
        return G41090;
        };
      throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: f (tail arrays)] (_newline-sequence (var min-len (min\\.apply undefined (map1 (lambda (a) a\\.length) arrays))) (for ((var i 0) (< i min-len) (set! i (+ i 1))) (f\\.apply this (map1 (lambda (a) [a i]) arrays))) undefined)) (anything-else-41089 (_throw (_+ ''Match fail in each against: '' anything-else-41089))))) for value ")+(JSON.stringify(G41091))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValue41084 = actualFun41086.apply(this, arguments);
  while (recurP41087(returnValue41084))    {
    returnValue41084 = actualFun41086.apply(this, returnValue41084.args);
    };
  return returnValue41084;
  });
var zip = (function ()  {
  var returnValue41097 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigil41096",
      args:arguments
    };
    });
  var recurP41100 = (function (val41101)    {
    if ((("undefined")===((typeof val41101))))      {
      return false;
      };
    return (val41101.recurSigil===("recurSigil41096"));
    });
  var actualFun41099 = (function ()    {
    return (function (arguments)      {
      var G41103 = undefined;
      var G41104 = Array.prototype.slice.apply(arguments);
      G41103 = (function (arguments)        {
        var matchVal41105 = G41104;
        if ((!((("object")===((typeof matchVal41105))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((matchVal41105.length>=0))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArraySimplePart41106 = Array.prototype.slice.call(matchVal41105, 0, 0);
        if ((!((("object")===((typeof matchArraySimplePart41106))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((0===matchArraySimplePart41106.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArrayTailPart41107 = Array.prototype.slice.call(matchVal41105, 0);
        var arrays = matchArrayTailPart41107;
        return map.apply(this, [(function ()          {
          var returnValue41109 = undefined;
          var recur = (function ()            {
            return {              
              recurSigil:"recurSigil41108",
              args:arguments
            };
            });
          var recurP41112 = (function (val41113)            {
            if ((("undefined")===((typeof val41113))))              {
              return false;
              };
            return (val41113.recurSigil===("recurSigil41108"));
            });
          var actualFun41111 = (function ()            {
            return (function (arguments)              {
              var G41115 = undefined;
              var G41116 = Array.prototype.slice.apply(arguments);
              G41115 = (function (arguments)                {
                var matchVal41117 = G41116;
                if ((!((("object")===((typeof matchVal41117))))))                  {
                  return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                  };
                if ((!((matchVal41117.length>=0))))                  {
                  return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                  };
                var matchArraySimplePart41118 = Array.prototype.slice.call(matchVal41117, 0, 0);
                if ((!((("object")===((typeof matchArraySimplePart41118))))))                  {
                  return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                  };
                if ((!((0===matchArraySimplePart41118.length))))                  {
                  return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                  };
                var matchArrayTailPart41119 = Array.prototype.slice.call(matchVal41117, 0);
                var elements = matchArrayTailPart41119;
                return elements;
                ;
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G41115))))                {
                return G41115;
                };
              G41115 = (function (arguments)                {
                var matchVal41120 = G41116;
                var anythingElse41114 = matchVal41120;
                throw ((("Match fail in anonymous against: ")+(anythingElse41114)));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G41115))))                {
                return G41115;
                };
              throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail elements)] (_newline-sequence elements)) (anything-else-41114 (_throw (_+ ''Match fail in anonymous against: '' anything-else-41114))))) for value ")+(JSON.stringify(G41116))));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            });
          returnValue41109 = actualFun41111.apply(this, arguments);
          while (recurP41112(returnValue41109))            {
            returnValue41109 = actualFun41111.apply(this, returnValue41109.args);
            };
          return returnValue41109;
          })].concat(arrays));
        ;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G41103))))        {
        return G41103;
        };
      G41103 = (function (arguments)        {
        var matchVal41121 = G41104;
        var anythingElse41102 = matchVal41121;
        throw ((("Match fail in zip against: ")+(anythingElse41102)));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G41103))))        {
        return G41103;
        };
      throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail arrays)] (_newline-sequence (map\\.apply this (\\.\\. [: (lambda ((tail elements)) elements)] (concat arrays))))) (anything-else-41102 (_throw (_+ ''Match fail in zip against: '' anything-else-41102))))) for value ")+(JSON.stringify(G41104))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValue41097 = actualFun41099.apply(this, arguments);
  while (recurP41100(returnValue41097))    {
    returnValue41097 = actualFun41099.apply(this, returnValue41097.args);
    };
  return returnValue41097;
  });
// |
// macro - no dynamic value.
;
// define-external-binop
// macro - no dynamic value.
;
// define-external-binops
// macro - no dynamic value.
;
var lessThan = (function (G41132, G41133)  {
  return (G41132<G41133);
  });
var lessThanequal = (function (G41137, G41138)  {
  return (G41137<=G41138);
  });
var greaterThan = (function (G41142, G41143)  {
  return (G41142>G41143);
  });
var greaterThanequal = (function (G41147, G41148)  {
  return (G41147>=G41148);
  });
var ampersand = (function (G41152, G41153)  {
  return (G41152&G41153);
  });
var pipe = (function (G41157, G41158)  {
  return (G41157|G41158);
  });
var equalequal = (function (G41162, G41163)  {
  return (G41162==G41163);
  });
var TripleEqualminus = (function (G41167, G41168)  {
  return (G41167===G41168);
  });
var modsign = (function (G41172, G41173)  {
  return (G41172%G41173);
  });
var caret = (function (G41177, G41178)  {
  return (G41177^G41178);
  });
var lessThanlessThan = (function (G41182, G41183)  {
  return (G41182<<G41183);
  });
var greaterThangreaterThan = (function (G41187, G41188)  {
  return (G41187>>G41188);
  });
var greaterThangreaterThangreaterThan = (function (G41192, G41193)  {
  return (G41192>>>G41193);
  });
// &&
// macro - no dynamic value.
;
// ||
// macro - no dynamic value.
;
var bang = (function (o)  {
  return (!(o));
  });
// incr
// macro - no dynamic value.
;
// decr
// macro - no dynamic value.
;
// string
// pattern - no dynamic value.
;
var plist = (function ()  {
  var returnValue41200 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigil41199",
      args:arguments
    };
    });
  var recurP41203 = (function (val41204)    {
    if ((("undefined")===((typeof val41204))))      {
      return false;
      };
    return (val41204.recurSigil===("recurSigil41199"));
    });
  var actualFun41202 = (function ()    {
    return (function (arguments)      {
      var G41206 = undefined;
      var G41207 = Array.prototype.slice.apply(arguments);
      G41206 = (function (arguments)        {
        var matchVal41208 = G41207;
        if ((!((("object")===((typeof matchVal41208))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((matchVal41208.length>=0))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArraySimplePart41209 = Array.prototype.slice.call(matchVal41208, 0, 0);
        if ((!((("object")===((typeof matchArraySimplePart41209))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((0===matchArraySimplePart41209.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArrayTailPart41210 = Array.prototype.slice.call(matchVal41208, 0);
        var parts = matchArrayTailPart41210;
        var out = {          
          
        };
        for (var i = 0;lessThan(i, parts.length);i = plus(i, 2))          {
          out[parts[i]] = parts[plus(i, 1)];
          };
        return out;
        ;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G41206))))        {
        return G41206;
        };
      G41206 = (function (arguments)        {
        var matchVal41211 = G41207;
        var anythingElse41205 = matchVal41211;
        throw ((("Match fail in plist against: ")+(anythingElse41205)));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G41206))))        {
        return G41206;
        };
      throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail parts)] (_newline-sequence (var out ({})) (for ((var i 0) (< i parts\\.length) (set! i (+ i 2))) (set! [out [parts i]] [parts (+ i 1)])) out)) (anything-else-41205 (_throw (_+ ''Match fail in plist against: '' anything-else-41205))))) for value ")+(JSON.stringify(G41207))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValue41200 = actualFun41202.apply(this, arguments);
  while (recurP41203(returnValue41200))    {
    returnValue41200 = actualFun41202.apply(this, returnValue41200.args);
    };
  return returnValue41200;
  });
// as-options{}
// pattern - no dynamic value.
;
var rx = (function ()  {
  var returnValue41214 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigil41213",
      args:arguments
    };
    });
  var recurP41217 = (function (val41218)    {
    if ((("undefined")===((typeof val41218))))      {
      return false;
      };
    return (val41218.recurSigil===("recurSigil41213"));
    });
  var actualFun41216 = (function ()    {
    return (function (arguments)      {
      var G41220 = undefined;
      var G41221 = Array.prototype.slice.apply(arguments);
      G41220 = (function (arguments)        {
        var matchVal41222 = G41221;
        if ((!((("object")===((typeof matchVal41222))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((matchVal41222.length>=1))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArraySimplePart41223 = Array.prototype.slice.call(matchVal41222, 0, 1);
        if ((!((("object")===((typeof matchArraySimplePart41223))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((1===matchArraySimplePart41223.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var s = matchArraySimplePart41223[0];
        var matchArrayTailPart41224 = Array.prototype.slice.call(matchVal41222, 1);
        var matchTemp41225 = matchArrayTailPart41224[0];
        var previousMatchSucceeded41226 = true;
        switch (1){
                  case 1:
          if ((("undefined")===((typeof matchTemp41225))))            {
            previousMatchSucceeded41226 = false;
            };
          var args = matchTemp41225;
          if (previousMatchSucceeded41226)            {
            break;
            };
          previousMatchSucceeded41226 = true;
          case 1:
          var fResult41227 = ((function (x)            {
            return "g";
            }))(matchTemp41225);
          if ((fResult41227===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))            {
            previousMatchSucceeded41226 = false;
            };
          var args = fResult41227;
          if (previousMatchSucceeded41226)            {
            break;
            };
          previousMatchSucceeded41226 = true;
          default :
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          
        };
        return (new (RegExp)(s, args));
        ;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G41220))))        {
        return G41220;
        };
      G41220 = (function (arguments)        {
        var matchVal41228 = G41221;
        var anythingElse41219 = matchVal41228;
        throw ((("Match fail in rx against: ")+(anythingElse41219)));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G41220))))        {
        return G41220;
        };
      throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: s :- (opt args ''g'')] (_newline-sequence (new RegExp s args))) (anything-else-41219 (_throw (_+ ''Match fail in rx against: '' anything-else-41219))))) for value ")+(JSON.stringify(G41221))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValue41214 = actualFun41216.apply(this, arguments);
  while (recurP41217(returnValue41214))    {
    returnValue41214 = actualFun41216.apply(this, returnValue41214.args);
    };
  return returnValue41214;
  });
// set-to!
// macro - no dynamic value.
;
var prefix = (function (i, ra)  {
  return [i].concat(ra);
  });
var postfix = (function (i, ra)  {
  return [].concat(ra, [i]);
  });
var identity = (function (x)  {
  return x;
  });
var pushdividereturn = (function (item, array)  {
  array.push(item);
  return array;
  });
var plistToObjectHelper = (function ()  {
  var returnValue41231 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigil41230",
      args:arguments
    };
    });
  var recurP41234 = (function (val41235)    {
    if ((("undefined")===((typeof val41235))))      {
      return false;
      };
    return (val41235.recurSigil===("recurSigil41230"));
    });
  var actualFun41233 = (function ()    {
    return (function (arguments)      {
      var G41237 = undefined;
      var G41238 = Array.prototype.slice.apply(arguments);
      G41237 = (function (arguments)        {
        var matchVal41239 = G41238;
        if ((!((("object")===((typeof matchVal41239))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((2===matchVal41239.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchTemp41240 = matchVal41239[0];
        var matchTemp41241 = matchVal41239[1];
        var objectAcc = matchTemp41240;
        if ((!((("object")===((typeof matchTemp41241))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((0===matchTemp41241.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        return objectAcc;
        ;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G41237))))        {
        return G41237;
        };
      G41237 = (function (arguments)        {
        var matchVal41242 = G41238;
        if ((!((("object")===((typeof matchVal41242))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((2===matchVal41242.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchTemp41243 = matchVal41242[0];
        var matchTemp41244 = matchVal41242[1];
        var objectAcc = matchTemp41243;
        if ((!((("object")===((typeof matchTemp41244))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((matchTemp41244.length>=2))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArraySimplePart41245 = Array.prototype.slice.call(matchTemp41244, 0, 2);
        if ((!((("object")===((typeof matchArraySimplePart41245))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((2===matchArraySimplePart41245.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchTemp41246 = matchArraySimplePart41245[0];
        var matchTemp41247 = matchArraySimplePart41245[1];
        var matchFunExpr41249 = (function (G41248)          {
          return (((typeof G41248))===("string"));
          });
        if ((!(matchFunExpr41249(matchTemp41246))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var key = matchTemp41246;
        var value = matchTemp41247;
        var matchArrayTailPart41250 = Array.prototype.slice.call(matchTemp41244, 2);
        var rest = matchArrayTailPart41250;
        objectAcc[key] = value;
        return recur(objectAcc, rest);
        ;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G41237))))        {
        return G41237;
        };
      G41237 = (function (arguments)        {
        var matchVal41251 = G41238;
        var anythingElse41236 = matchVal41251;
        throw ((("Match fail in plist->object-helper against: ")+(anythingElse41236)));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G41237))))        {
        return G41237;
        };
      throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: object-acc [:]] (_newline-sequence object-acc)) ([: object-acc [: (string key) value (tail rest)]] (_newline-sequence (set! [object-acc key] value) (recur object-acc rest))) (anything-else-41236 (_throw (_+ ''Match fail in plist->object-helper against: '' anything-else-41236))))) for value ")+(JSON.stringify(G41238))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValue41231 = actualFun41233.apply(this, arguments);
  while (recurP41234(returnValue41231))    {
    returnValue41231 = actualFun41233.apply(this, returnValue41231.args);
    };
  return returnValue41231;
  });
var plistToObject = (function ()  {
  var returnValue41253 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigil41252",
      args:arguments
    };
    });
  var recurP41256 = (function (val41257)    {
    if ((("undefined")===((typeof val41257))))      {
      return false;
      };
    return (val41257.recurSigil===("recurSigil41252"));
    });
  var actualFun41255 = (function ()    {
    return (function (arguments)      {
      var G41259 = undefined;
      var G41260 = Array.prototype.slice.apply(arguments);
      G41259 = (function (arguments)        {
        var matchVal41261 = G41260;
        if ((!((("object")===((typeof matchVal41261))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((matchVal41261.length>=0))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArraySimplePart41262 = Array.prototype.slice.call(matchVal41261, 0, 0);
        if ((!((("object")===((typeof matchArraySimplePart41262))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((0===matchArraySimplePart41262.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArrayTailPart41263 = Array.prototype.slice.call(matchVal41261, 0);
        var kvPairs = matchArrayTailPart41263;
        return plistToObjectHelper({          
          
        }, kvPairs);
        ;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G41259))))        {
        return G41259;
        };
      G41259 = (function (arguments)        {
        var matchVal41264 = G41260;
        var anythingElse41258 = matchVal41264;
        throw ((("Match fail in plist->object against: ")+(anythingElse41258)));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G41259))))        {
        return G41259;
        };
      throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail kv-pairs)] (_newline-sequence (plist->object-helper ({}) kv-pairs))) (anything-else-41258 (_throw (_+ ''Match fail in plist->object against: '' anything-else-41258))))) for value ")+(JSON.stringify(G41260))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValue41253 = actualFun41255.apply(this, arguments);
  while (recurP41256(returnValue41253))    {
    returnValue41253 = actualFun41255.apply(this, returnValue41253.args);
    };
  return returnValue41253;
  });
var filter = (function ()  {
  var returnValue41266 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigil41265",
      args:arguments
    };
    });
  var recurP41269 = (function (val41270)    {
    if ((("undefined")===((typeof val41270))))      {
      return false;
      };
    return (val41270.recurSigil===("recurSigil41265"));
    });
  var actualFun41268 = (function ()    {
    return (function (arguments)      {
      var G41272 = undefined;
      var G41273 = Array.prototype.slice.apply(arguments);
      G41272 = (function (arguments)        {
        var matchVal41274 = G41273;
        if ((!((("object")===((typeof matchVal41274))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((3===matchVal41274.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchTemp41275 = matchVal41274[0];
        var matchTemp41276 = matchVal41274[1];
        var matchTemp41277 = matchVal41274[2];
        var fun = matchTemp41275;
        if ((!((("object")===((typeof matchTemp41276))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((0===matchTemp41276.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var acc = matchTemp41277;
        return acc;
        ;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G41272))))        {
        return G41272;
        };
      G41272 = (function (arguments)        {
        var matchVal41278 = G41273;
        if ((!((("object")===((typeof matchVal41278))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((3===matchVal41278.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchTemp41279 = matchVal41278[0];
        var matchTemp41280 = matchVal41278[1];
        var matchTemp41281 = matchVal41278[2];
        var fun = matchTemp41279;
        if ((!((("object")===((typeof matchTemp41280))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((matchTemp41280.length>=1))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArraySimplePart41282 = Array.prototype.slice.call(matchTemp41280, 0, 1);
        if ((!((("object")===((typeof matchArraySimplePart41282))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((1===matchArraySimplePart41282.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var hd = matchArraySimplePart41282[0];
        var matchArrayTailPart41283 = Array.prototype.slice.call(matchTemp41280, 1);
        var tl = matchArrayTailPart41283;
        var acc = matchTemp41281;
        var r = fun(hd);
        return ((r)?(recur(fun, tl, pushdividereturn(hd, acc))) : (recur(fun, tl, acc)));
        ;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G41272))))        {
        return G41272;
        };
      G41272 = (function (arguments)        {
        var matchVal41284 = G41273;
        if ((!((("object")===((typeof matchVal41284))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((2===matchVal41284.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var fun = matchVal41284[0];
        var ra = matchVal41284[1];
        return recur(fun, ra, []);
        ;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G41272))))        {
        return G41272;
        };
      G41272 = (function (arguments)        {
        var matchVal41285 = G41273;
        var anythingElse41271 = matchVal41285;
        throw ((("Match fail in filter against: ")+(anythingElse41271)));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G41272))))        {
        return G41272;
        };
      throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: fun [:] acc] (_newline-sequence acc)) ([: fun [: hd (tail tl)] acc] (_newline-sequence (var r (fun hd)) (if r (recur fun tl (push/return hd acc)) (recur fun tl acc)))) ([: fun ra] (_newline-sequence (recur fun ra [:]))) (anything-else-41271 (_throw (_+ ''Match fail in filter against: '' anything-else-41271))))) for value ")+(JSON.stringify(G41273))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValue41266 = actualFun41268.apply(this, arguments);
  while (recurP41269(returnValue41266))    {
    returnValue41266 = actualFun41268.apply(this, returnValue41266.args);
    };
  return returnValue41266;
  });
console.log("Hello world.");
