define(["hooves/hooves"], (function (module47c9484436)  {
  var currentModule63026 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModule63026 = value;
    });
  (function (arguments)    {
    // _current-module
    // macro - no dynamic value.
    ;
    // define+
    // macro - no dynamic value.
    ;
    // define-macro+
    // macro - no dynamic value.
    ;
    // define-pattern+
    // macro - no dynamic value.
    ;
    // ("hooves/hooves" :all)
    ;
    currentModule63026.caretor = (function ()      {
      var returnValue63054 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil63053",
          args:arguments
        };
        });
      var recurP63057 = (function (val63058)        {
        if ((("undefined")===((typeof val63058))))          {
          return false;
          };
        return (val63058.recurSigil===("recurSigil63053"));
        });
      var actualFun63056 = (function ()        {
        return (function (arguments)          {
          var G63060 = undefined;
          var G63061 = Array.prototype.slice.apply(arguments);
          G63060 = (function (arguments)            {
            var matchVal63062 = G63061;
            if ((!((("object")===((typeof matchVal63062))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal63062.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart63063 = Array.prototype.slice.call(matchVal63062, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart63063))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart63063.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var f1 = matchArraySimplePart63063[0];
            var matchArrayTailPart63064 = Array.prototype.slice.call(matchVal63062, 1);
            var fs = matchArrayTailPart63064;
            return (function ()              {
              var returnValue63066 = undefined;
              var recur = (function ()                {
                return {                  
                  recurSigil:"recurSigil63065",
                  args:arguments
                };
                });
              var recurP63069 = (function (val63070)                {
                if ((("undefined")===((typeof val63070))))                  {
                  return false;
                  };
                return (val63070.recurSigil===("recurSigil63065"));
                });
              var actualFun63068 = (function ()                {
                return (function (arguments)                  {
                  var G63072 = undefined;
                  var G63073 = Array.prototype.slice.apply(arguments);
                  G63072 = (function (arguments)                    {
                    var matchVal63074 = G63073;
                    if ((!((("object")===((typeof matchVal63074))))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    if ((!((matchVal63074.length>=0))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    var matchArraySimplePart63075 = Array.prototype.slice.call(matchVal63074, 0, 0);
                    if ((!((("object")===((typeof matchArraySimplePart63075))))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    if ((!((0===matchArraySimplePart63075.length))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    var matchArrayTailPart63076 = Array.prototype.slice.call(matchVal63074, 0);
                    var args = matchArrayTailPart63076;
                    var done = f1.apply(this, args);
                    var i = 0;
                    while ((((!(done)))&&((i<fs.length))))                      {
                      done = fs[i].apply(this, args);
                      i = ((i)+(1));
                      };
                    return done;
                    ;
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G63072))))                    {
                    return G63072;
                    };
                  G63072 = (function (arguments)                    {
                    var matchVal63077 = G63073;
                    var anythingElse63071 = matchVal63077;
                    throw ((("Match fail in anonymous against: ")+(anythingElse63071)));
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G63072))))                    {
                    return G63072;
                    };
                  throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail args)] (_newline-sequence (var done (f1\\.apply this args)) (var i 0) (_while (_&& (_! done) (_< i fs\\.length)) (set! done (\\.\\. [fs i] (apply this args))) (set! i (_+ i 1))) done)) (anything-else-63071 (_throw (_+ ''Match fail in anonymous against: '' anything-else-63071))))) for value ")+(JSON.stringify(G63073))));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                });
              returnValue63066 = actualFun63068.apply(this, arguments);
              while (recurP63069(returnValue63066))                {
                returnValue63066 = actualFun63068.apply(this, returnValue63066.args);
                };
              return returnValue63066;
              });
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G63060))))            {
            return G63060;
            };
          G63060 = (function (arguments)            {
            var matchVal63078 = G63061;
            var anythingElse63059 = matchVal63078;
            throw ((("Match fail in hooves/function-level-^or against: ")+(anythingElse63059)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G63060))))            {
            return G63060;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: f1 (tail fs)] (_newline-sequence (lambda ((tail args)) (var done (f1\\.apply this args)) (var i 0) (_while (_&& (_! done) (_< i fs\\.length)) (set! done (\\.\\. [fs i] (apply this args))) (set! i (_+ i 1))) done))) (anything-else-63059 (_throw (_+ ''Match fail in hooves/function-level-^or against: '' anything-else-63059))))) for value ")+(JSON.stringify(G63061))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue63054 = actualFun63056.apply(this, arguments);
      while (recurP63057(returnValue63054))        {
        returnValue63054 = actualFun63056.apply(this, returnValue63054.args);
        };
      return returnValue63054;
      });
    currentModule63026.caretand = (function ()      {
      var returnValue63102 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil63101",
          args:arguments
        };
        });
      var recurP63105 = (function (val63106)        {
        if ((("undefined")===((typeof val63106))))          {
          return false;
          };
        return (val63106.recurSigil===("recurSigil63101"));
        });
      var actualFun63104 = (function ()        {
        return (function (arguments)          {
          var G63108 = undefined;
          var G63109 = Array.prototype.slice.apply(arguments);
          G63108 = (function (arguments)            {
            var matchVal63110 = G63109;
            if ((!((("object")===((typeof matchVal63110))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal63110.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart63111 = Array.prototype.slice.call(matchVal63110, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart63111))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart63111.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var f1 = matchArraySimplePart63111[0];
            var matchArrayTailPart63112 = Array.prototype.slice.call(matchVal63110, 1);
            var fs = matchArrayTailPart63112;
            return (function ()              {
              var returnValue63114 = undefined;
              var recur = (function ()                {
                return {                  
                  recurSigil:"recurSigil63113",
                  args:arguments
                };
                });
              var recurP63117 = (function (val63118)                {
                if ((("undefined")===((typeof val63118))))                  {
                  return false;
                  };
                return (val63118.recurSigil===("recurSigil63113"));
                });
              var actualFun63116 = (function ()                {
                return (function (arguments)                  {
                  var G63120 = undefined;
                  var G63121 = Array.prototype.slice.apply(arguments);
                  G63120 = (function (arguments)                    {
                    var matchVal63122 = G63121;
                    if ((!((("object")===((typeof matchVal63122))))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    if ((!((matchVal63122.length>=0))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    var matchArraySimplePart63123 = Array.prototype.slice.call(matchVal63122, 0, 0);
                    if ((!((("object")===((typeof matchArraySimplePart63123))))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    if ((!((0===matchArraySimplePart63123.length))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    var matchArrayTailPart63124 = Array.prototype.slice.call(matchVal63122, 0);
                    var args = matchArrayTailPart63124;
                    var done = (!(f1.apply(this, args)));
                    var i = 0;
                    while ((((!(done)))&&((i<fs.length))))                      {
                      done = (!(fs[i].apply(this, args)));
                      i = ((i)+(1));
                      };
                    return (!(done));
                    ;
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G63120))))                    {
                    return G63120;
                    };
                  G63120 = (function (arguments)                    {
                    var matchVal63125 = G63121;
                    var anythingElse63119 = matchVal63125;
                    throw ((("Match fail in anonymous against: ")+(anythingElse63119)));
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G63120))))                    {
                    return G63120;
                    };
                  throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail args)] (_newline-sequence (var done (_! (f1\\.apply this args))) (var i 0) (_while (_&& (_! done) (_< i fs\\.length)) (set! done (_! (\\.\\. [fs i] (apply this args)))) (set! i (_+ i 1))) (_! done))) (anything-else-63119 (_throw (_+ ''Match fail in anonymous against: '' anything-else-63119))))) for value ")+(JSON.stringify(G63121))));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                });
              returnValue63114 = actualFun63116.apply(this, arguments);
              while (recurP63117(returnValue63114))                {
                returnValue63114 = actualFun63116.apply(this, returnValue63114.args);
                };
              return returnValue63114;
              });
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G63108))))            {
            return G63108;
            };
          G63108 = (function (arguments)            {
            var matchVal63126 = G63109;
            var anythingElse63107 = matchVal63126;
            throw ((("Match fail in hooves/function-level-^and against: ")+(anythingElse63107)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G63108))))            {
            return G63108;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: f1 (tail fs)] (_newline-sequence (lambda ((tail args)) (var done (_! (f1\\.apply this args))) (var i 0) (_while (_&& (_! done) (_< i fs\\.length)) (set! done (_! (\\.\\. [fs i] (apply this args)))) (set! i (_+ i 1))) (_! done)))) (anything-else-63107 (_throw (_+ ''Match fail in hooves/function-level-^and against: '' anything-else-63107))))) for value ")+(JSON.stringify(G63109))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue63102 = actualFun63104.apply(this, arguments);
      while (recurP63105(returnValue63102))        {
        returnValue63102 = actualFun63104.apply(this, returnValue63102.args);
        };
      return returnValue63102;
      });
    currentModule63026.caretcaret = (function ()      {
      var returnValue63150 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil63149",
          args:arguments
        };
        });
      var recurP63153 = (function (val63154)        {
        if ((("undefined")===((typeof val63154))))          {
          return false;
          };
        return (val63154.recurSigil===("recurSigil63149"));
        });
      var actualFun63152 = (function ()        {
        return (function (arguments)          {
          var G63156 = undefined;
          var G63157 = Array.prototype.slice.apply(arguments);
          G63156 = (function (arguments)            {
            var matchVal63158 = G63157;
            if ((!((("object")===((typeof matchVal63158))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal63158.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart63159 = Array.prototype.slice.call(matchVal63158, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePart63159))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePart63159.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPart63160 = Array.prototype.slice.call(matchVal63158, 0);
            var fs = matchArrayTailPart63160;
            return (function ()              {
              var returnValue63162 = undefined;
              var recur = (function ()                {
                return {                  
                  recurSigil:"recurSigil63161",
                  args:arguments
                };
                });
              var recurP63165 = (function (val63166)                {
                if ((("undefined")===((typeof val63166))))                  {
                  return false;
                  };
                return (val63166.recurSigil===("recurSigil63161"));
                });
              var actualFun63164 = (function ()                {
                return (function (arguments)                  {
                  var G63168 = undefined;
                  var G63169 = Array.prototype.slice.apply(arguments);
                  G63168 = (function (arguments)                    {
                    var matchVal63170 = G63169;
                    if ((!((("object")===((typeof matchVal63170))))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    if ((!((matchVal63170.length>=0))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    var matchArraySimplePart63171 = Array.prototype.slice.call(matchVal63170, 0, 0);
                    if ((!((("object")===((typeof matchArraySimplePart63171))))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    if ((!((0===matchArraySimplePart63171.length))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    var matchArrayTailPart63172 = Array.prototype.slice.call(matchVal63170, 0);
                    var args = matchArrayTailPart63172;
                    var rval = fs[((fs.length)-(1))];
                    for (var i = ((fs.length)-(2));(i>=0);i = module47c9484436.minus(i, 1))                      {
                      rval = fs[i].call(this, rval);
                      };
                    return rval;
                    ;
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G63168))))                    {
                    return G63168;
                    };
                  G63168 = (function (arguments)                    {
                    var matchVal63173 = G63169;
                    var anythingElse63167 = matchVal63173;
                    throw ((("Match fail in anonymous against: ")+(anythingElse63167)));
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G63168))))                    {
                    return G63168;
                    };
                  throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail args)] (_newline-sequence (var rval (\\.\\. [fs (_- fs\\.length 1)])) (for ((var i (_- fs\\.length 2)) (_>= i 0) (set! i (- i 1))) (set! rval (\\.\\. [fs i] (call this rval)))) rval)) (anything-else-63167 (_throw (_+ ''Match fail in anonymous against: '' anything-else-63167))))) for value ")+(JSON.stringify(G63169))));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                });
              returnValue63162 = actualFun63164.apply(this, arguments);
              while (recurP63165(returnValue63162))                {
                returnValue63162 = actualFun63164.apply(this, returnValue63162.args);
                };
              return returnValue63162;
              });
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G63156))))            {
            return G63156;
            };
          G63156 = (function (arguments)            {
            var matchVal63174 = G63157;
            var anythingElse63155 = matchVal63174;
            throw ((("Match fail in hooves/function-level-^^ against: ")+(anythingElse63155)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G63156))))            {
            return G63156;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail fs)] (_newline-sequence (lambda ((tail args)) (var rval (\\.\\. [fs (_- fs\\.length 1)])) (for ((var i (_- fs\\.length 2)) (_>= i 0) (set! i (- i 1))) (set! rval (\\.\\. [fs i] (call this rval)))) rval))) (anything-else-63155 (_throw (_+ ''Match fail in hooves/function-level-^^ against: '' anything-else-63155))))) for value ")+(JSON.stringify(G63157))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue63150 = actualFun63152.apply(this, arguments);
      while (recurP63153(returnValue63150))        {
        returnValue63150 = actualFun63152.apply(this, returnValue63150.args);
        };
      return returnValue63150;
      });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModule63026;
  }))