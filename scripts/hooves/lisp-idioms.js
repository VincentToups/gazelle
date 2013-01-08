define([], (function ()  {
  var currentModuleminus30300 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus30300 = value;
    });
  ((function ()    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    currentModuleminus30300.append = (function ()      {
      return Array.prototype.concat.apply([], Array.prototype.slice.apply(arguments));
      });
    currentModuleminus30300.filter = (function ()      {
      var returnValueminus30355 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus30354",
          args:arguments
        };
        });
      var recurP30358 = (function (valminus30359)        {
        if ((("undefined")===((typeof valminus30359))))          {
          return false;
          };
        return (valminus30359.recurSigil===("recurSigilminus30354"));
        });
      var actualFunminus30357 = (function ()        {
        return (function (arguments)          {
          var G30361 = undefined;
          var G30362 = Array.prototype.slice.apply(arguments);
          G30361 = (function (arguments)            {
            var matchValminus30363 = G30362;
            if ((!((3===matchValminus30363.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus30364 = matchValminus30363[0];
            var matchTempminus30365 = matchValminus30363[1];
            var matchTempminus30366 = matchValminus30363[2];
            var fun = matchTempminus30364;
            if ((!((0===matchTempminus30365.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var acc = matchTempminus30366;
            return acc;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30361))))            {
            return G30361;
            };
          G30361 = (function (arguments)            {
            var matchValminus30367 = G30362;
            if ((!((3===matchValminus30367.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus30368 = matchValminus30367[0];
            var matchTempminus30369 = matchValminus30367[1];
            var matchTempminus30370 = matchValminus30367[2];
            var fun = matchTempminus30368;
            if ((!((matchTempminus30369.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus30371 = Array.prototype.slice.call(matchTempminus30369, 0, 1);
            if ((!((1===matchArraySimplePartminus30371.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus30371[0];
            var matchArrayTailPartminus30372 = Array.prototype.slice.call(matchTempminus30369, 1);
            var tl = matchArrayTailPartminus30372;
            var acc = matchTempminus30370;
            return ((fun(hd))?(recur(fun, tl, acc.concat([hd]))) : (recur(fun, tl, acc)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30361))))            {
            return G30361;
            };
          G30361 = (function (arguments)            {
            var matchValminus30373 = G30362;
            var anythingElseminus30360 = matchValminus30373;
            throw ((("Match fail in hooves/lisp-idioms-filter against: ")+anythingElseminus30360));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30361))))            {
            return G30361;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array fun [:] acc) acc) ((array fun [: hd (tail tl)] acc) (if (fun hd) (recur fun tl (\.\. acc (concat [: hd]))) (recur fun tl acc))) (anything-else-30360 (_throw (_+ ''Match fail in hooves/lisp-idioms-filter against: '' anything-else-30360))))) for value ")+G30362));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus30355 = actualFunminus30357.apply(this, arguments);
      while (recurP30358(returnValueminus30355))        {
        returnValueminus30355 = actualFunminus30357.apply(this, returnValueminus30355.args);
        };
      return returnValueminus30355;
      });
    currentModuleminus30300.apply = (function (f, anArray)      {
      return f.apply(undefined, anArray);
      });
    currentModuleminus30300.funcall = (function ()      {
      var returnValueminus30419 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus30418",
          args:arguments
        };
        });
      var recurP30422 = (function (valminus30423)        {
        if ((("undefined")===((typeof valminus30423))))          {
          return false;
          };
        return (valminus30423.recurSigil===("recurSigilminus30418"));
        });
      var actualFunminus30421 = (function ()        {
        return (function (arguments)          {
          var G30425 = undefined;
          var G30426 = Array.prototype.slice.apply(arguments);
          G30425 = (function (arguments)            {
            var matchValminus30427 = G30426;
            if ((!((matchValminus30427.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus30428 = Array.prototype.slice.call(matchValminus30427, 0, 1);
            if ((!((1===matchArraySimplePartminus30428.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var f = matchArraySimplePartminus30428[0];
            var matchArrayTailPartminus30429 = Array.prototype.slice.call(matchValminus30427, 1);
            var args = matchArrayTailPartminus30429;
            return currentModuleminus30300.apply(f, args);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30425))))            {
            return G30425;
            };
          G30425 = (function (arguments)            {
            var matchValminus30430 = G30426;
            var anythingElseminus30424 = matchValminus30430;
            throw ((("Match fail in hooves/lisp-idioms-funcall against: ")+anythingElseminus30424));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30425))))            {
            return G30425;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array f (tail args)) (apply f args)) (anything-else-30424 (_throw (_+ ''Match fail in hooves/lisp-idioms-funcall against: '' anything-else-30424))))) for value ")+G30426));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus30419 = actualFunminus30421.apply(this, arguments);
      while (recurP30422(returnValueminus30419))        {
        returnValueminus30419 = actualFunminus30421.apply(this, returnValueminus30419.args);
        };
      return returnValueminus30419;
      });
    var let = "macro - no dynamic value.";
    }))();
  return currentModuleminus30300;
  }))