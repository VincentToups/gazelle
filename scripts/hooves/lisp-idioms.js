define([], (function ()  {
  var currentModuleminus15264 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus15264 = value;
    });
  (function (arguments)    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    currentModuleminus15264.map = (function (fun, anArray)      {
      var output = [];
      for (i in (anArray))        {
        output.push(fun(anArray[i]));
        };
      return output;
      });
    currentModuleminus15264.append = (function ()      {
      return Array.prototype.concat.apply([], Array.prototype.slice.apply(arguments));
      });
    currentModuleminus15264.filter = (function ()      {
      var returnValueminus15341 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus15340",
          args:arguments
        };
        });
      var recurP15344 = (function (valminus15345)        {
        if ((("undefined")===((typeof valminus15345))))          {
          return false;
          };
        return (valminus15345.recurSigil===("recurSigilminus15340"));
        });
      var actualFunminus15343 = (function ()        {
        return (function (arguments)          {
          var G15347 = undefined;
          var G15348 = Array.prototype.slice.apply(arguments);
          G15347 = (function (arguments)            {
            var matchValminus15349 = G15348;
            if ((!((("object")===((typeof matchValminus15349))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchValminus15349.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus15350 = matchValminus15349[0];
            var matchTempminus15351 = matchValminus15349[1];
            var matchTempminus15352 = matchValminus15349[2];
            var fun = matchTempminus15350;
            if ((!((("object")===((typeof matchTempminus15351))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchTempminus15351.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((("undefined")===((typeof matchTempminus15352))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var acc = matchTempminus15352;
            return acc;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G15347))))            {
            return G15347;
            };
          G15347 = (function (arguments)            {
            var matchValminus15353 = G15348;
            if ((!((("object")===((typeof matchValminus15353))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchValminus15353.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus15354 = matchValminus15353[0];
            var matchTempminus15355 = matchValminus15353[1];
            var matchTempminus15356 = matchValminus15353[2];
            var fun = matchTempminus15354;
            if ((!((("object")===((typeof matchTempminus15355))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchTempminus15355.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus15357 = Array.prototype.slice.call(matchTempminus15355, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus15357))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus15357.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus15357[0];
            var matchArrayTailPartminus15358 = Array.prototype.slice.call(matchTempminus15355, 1);
            var tl = matchArrayTailPartminus15358;
            if ((("undefined")===((typeof matchTempminus15356))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var acc = matchTempminus15356;
            return ((fun(hd))?(recur(fun, tl, acc.concat([hd]))) : (recur(fun, tl, acc)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G15347))))            {
            return G15347;
            };
          G15347 = (function (arguments)            {
            var matchValminus15359 = G15348;
            var anythingElseminus15346 = matchValminus15359;
            throw ((("Match fail in hooves/lisp-idioms-filter against: ")+anythingElseminus15346));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G15347))))            {
            return G15347;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: fun [:] (defined acc)] acc) ([: fun [: hd (tail tl)] (defined acc)] (if (fun hd) (recur fun tl (\.\. acc (concat [: hd]))) (recur fun tl acc))) (anything-else-15346 (_throw (_+ ''Match fail in hooves/lisp-idioms-filter against: '' anything-else-15346))))) for value ")+(JSON.stringify(G15348))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus15341 = actualFunminus15343.apply(this, arguments);
      while (recurP15344(returnValueminus15341))        {
        returnValueminus15341 = actualFunminus15343.apply(this, returnValueminus15341.args);
        };
      return returnValueminus15341;
      });
    currentModuleminus15264.apply = (function (f, anArray)      {
      return f.apply(undefined, anArray);
      });
    currentModuleminus15264.funcall = (function ()      {
      var returnValueminus15405 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus15404",
          args:arguments
        };
        });
      var recurP15408 = (function (valminus15409)        {
        if ((("undefined")===((typeof valminus15409))))          {
          return false;
          };
        return (valminus15409.recurSigil===("recurSigilminus15404"));
        });
      var actualFunminus15407 = (function ()        {
        return (function (arguments)          {
          var G15411 = undefined;
          var G15412 = Array.prototype.slice.apply(arguments);
          G15411 = (function (arguments)            {
            var matchValminus15413 = G15412;
            if ((!((("object")===((typeof matchValminus15413))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus15413.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus15414 = Array.prototype.slice.call(matchValminus15413, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus15414))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus15414.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var f = matchArraySimplePartminus15414[0];
            var matchArrayTailPartminus15415 = Array.prototype.slice.call(matchValminus15413, 1);
            var args = matchArrayTailPartminus15415;
            return currentModuleminus15264.apply(f, args);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G15411))))            {
            return G15411;
            };
          G15411 = (function (arguments)            {
            var matchValminus15416 = G15412;
            var anythingElseminus15410 = matchValminus15416;
            throw ((("Match fail in hooves/lisp-idioms-funcall against: ")+anythingElseminus15410));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G15411))))            {
            return G15411;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: f (tail args)] (apply f args)) (anything-else-15410 (_throw (_+ ''Match fail in hooves/lisp-idioms-funcall against: '' anything-else-15410))))) for value ")+(JSON.stringify(G15412))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus15405 = actualFunminus15407.apply(this, arguments);
      while (recurP15408(returnValueminus15405))        {
        returnValueminus15405 = actualFunminus15407.apply(this, returnValueminus15405.args);
        };
      return returnValueminus15405;
      });
    currentModuleminus15264.reduce = (function (f, init, array)      {
      for (i in (array))        {
        var e = array[i];
        init = f(e, init);
        };
      return init;
      });
    var let = "macro - no dynamic value.";
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus15264;
  }))