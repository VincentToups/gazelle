define([], (function ()  {
  var currentModuleminus99276 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus99276 = value;
    });
  ((function ()    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    currentModuleminus99276.map = (function (fun, anArray)      {
      var output = [];
      for (i in (anArray))        {
        output.push(fun(anArray[i]));
        };
      return output;
      });
    currentModuleminus99276.append = (function ()      {
      return Array.prototype.concat.apply([], Array.prototype.slice.apply(arguments));
      });
    currentModuleminus99276.filter = (function ()      {
      var returnValueminus99353 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus99352",
          args:arguments
        };
        });
      var recurP99356 = (function (valminus99357)        {
        if ((("undefined")===((typeof valminus99357))))          {
          return false;
          };
        return (valminus99357.recurSigil===("recurSigilminus99352"));
        });
      var actualFunminus99355 = (function ()        {
        return (function (arguments)          {
          var G99359 = undefined;
          var G99360 = Array.prototype.slice.apply(arguments);
          G99359 = (function (arguments)            {
            var matchValminus99361 = G99360;
            if ((!((3===matchValminus99361.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus99362 = matchValminus99361[0];
            var matchTempminus99363 = matchValminus99361[1];
            var matchTempminus99364 = matchValminus99361[2];
            var fun = matchTempminus99362;
            if ((!((0===matchTempminus99363.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((("undefined")===((typeof matchTempminus99364))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var acc = matchTempminus99364;
            return acc;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G99359))))            {
            return G99359;
            };
          G99359 = (function (arguments)            {
            var matchValminus99365 = G99360;
            if ((!((3===matchValminus99365.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus99366 = matchValminus99365[0];
            var matchTempminus99367 = matchValminus99365[1];
            var matchTempminus99368 = matchValminus99365[2];
            var fun = matchTempminus99366;
            if ((!((matchTempminus99367.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus99369 = Array.prototype.slice.call(matchTempminus99367, 0, 1);
            if ((!((1===matchArraySimplePartminus99369.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus99369[0];
            var matchArrayTailPartminus99370 = Array.prototype.slice.call(matchTempminus99367, 1);
            var tl = matchArrayTailPartminus99370;
            if ((("undefined")===((typeof matchTempminus99368))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var acc = matchTempminus99368;
            return ((fun(hd))?(recur(fun, tl, acc.concat([hd]))) : (recur(fun, tl, acc)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G99359))))            {
            return G99359;
            };
          G99359 = (function (arguments)            {
            var matchValminus99371 = G99360;
            var anythingElseminus99358 = matchValminus99371;
            throw ((("Match fail in hooves/lisp-idioms-filter against: ")+anythingElseminus99358));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G99359))))            {
            return G99359;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: fun [:] (defined acc)] acc) ([: fun [: hd (tail tl)] (defined acc)] (if (fun hd) (recur fun tl (\.\. acc (concat [: hd]))) (recur fun tl acc))) (anything-else-99358 (_throw (_+ ''Match fail in hooves/lisp-idioms-filter against: '' anything-else-99358))))) for value ")+(JSON.stringify(G99360))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus99353 = actualFunminus99355.apply(this, arguments);
      while (recurP99356(returnValueminus99353))        {
        returnValueminus99353 = actualFunminus99355.apply(this, returnValueminus99353.args);
        };
      return returnValueminus99353;
      });
    currentModuleminus99276.apply = (function (f, anArray)      {
      return f.apply(undefined, anArray);
      });
    currentModuleminus99276.funcall = (function ()      {
      var returnValueminus99417 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus99416",
          args:arguments
        };
        });
      var recurP99420 = (function (valminus99421)        {
        if ((("undefined")===((typeof valminus99421))))          {
          return false;
          };
        return (valminus99421.recurSigil===("recurSigilminus99416"));
        });
      var actualFunminus99419 = (function ()        {
        return (function (arguments)          {
          var G99423 = undefined;
          var G99424 = Array.prototype.slice.apply(arguments);
          G99423 = (function (arguments)            {
            var matchValminus99425 = G99424;
            if ((!((matchValminus99425.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus99426 = Array.prototype.slice.call(matchValminus99425, 0, 1);
            if ((!((1===matchArraySimplePartminus99426.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var f = matchArraySimplePartminus99426[0];
            var matchArrayTailPartminus99427 = Array.prototype.slice.call(matchValminus99425, 1);
            var args = matchArrayTailPartminus99427;
            return currentModuleminus99276.apply(f, args);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G99423))))            {
            return G99423;
            };
          G99423 = (function (arguments)            {
            var matchValminus99428 = G99424;
            var anythingElseminus99422 = matchValminus99428;
            throw ((("Match fail in hooves/lisp-idioms-funcall against: ")+anythingElseminus99422));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G99423))))            {
            return G99423;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: f (tail args)] (apply f args)) (anything-else-99422 (_throw (_+ ''Match fail in hooves/lisp-idioms-funcall against: '' anything-else-99422))))) for value ")+(JSON.stringify(G99424))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus99417 = actualFunminus99419.apply(this, arguments);
      while (recurP99420(returnValueminus99417))        {
        returnValueminus99417 = actualFunminus99419.apply(this, returnValueminus99417.args);
        };
      return returnValueminus99417;
      });
    var let = "macro - no dynamic value.";
    }))();
  return currentModuleminus99276;
  }))