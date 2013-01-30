define([], (function ()  {
  var currentModuleminus90307 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus90307 = value;
    });
  (function (arguments)    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    currentModuleminus90307.map = (function (fun, anArray)      {
      var output = [];
      for (i in (anArray))        {
        output.push(fun(anArray[i]));
        };
      return output;
      });
    currentModuleminus90307.append = (function ()      {
      return Array.prototype.concat.apply([], Array.prototype.slice.apply(arguments));
      });
    currentModuleminus90307.filter = (function ()      {
      var returnValueminus90384 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus90383",
          args:arguments
        };
        });
      var recurP90387 = (function (valminus90388)        {
        if ((("undefined")===((typeof valminus90388))))          {
          return false;
          };
        return (valminus90388.recurSigil===("recurSigilminus90383"));
        });
      var actualFunminus90386 = (function ()        {
        return (function (arguments)          {
          var G90390 = undefined;
          var G90391 = Array.prototype.slice.apply(arguments);
          G90390 = (function (arguments)            {
            var matchValminus90392 = G90391;
            if ((!((("object")===((typeof matchValminus90392))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchValminus90392.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus90393 = matchValminus90392[0];
            var matchTempminus90394 = matchValminus90392[1];
            var matchTempminus90395 = matchValminus90392[2];
            var fun = matchTempminus90393;
            if ((!((("object")===((typeof matchTempminus90394))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchTempminus90394.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((("undefined")===((typeof matchTempminus90395))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var acc = matchTempminus90395;
            return acc;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G90390))))            {
            return G90390;
            };
          G90390 = (function (arguments)            {
            var matchValminus90396 = G90391;
            if ((!((("object")===((typeof matchValminus90396))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchValminus90396.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus90397 = matchValminus90396[0];
            var matchTempminus90398 = matchValminus90396[1];
            var matchTempminus90399 = matchValminus90396[2];
            var fun = matchTempminus90397;
            if ((!((("object")===((typeof matchTempminus90398))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchTempminus90398.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus90400 = Array.prototype.slice.call(matchTempminus90398, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus90400))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus90400.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus90400[0];
            var matchArrayTailPartminus90401 = Array.prototype.slice.call(matchTempminus90398, 1);
            var tl = matchArrayTailPartminus90401;
            if ((("undefined")===((typeof matchTempminus90399))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var acc = matchTempminus90399;
            return ((fun(hd))?(recur(fun, tl, acc.concat([hd]))) : (recur(fun, tl, acc)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G90390))))            {
            return G90390;
            };
          G90390 = (function (arguments)            {
            var matchValminus90402 = G90391;
            var anythingElseminus90389 = matchValminus90402;
            throw ((("Match fail in hooves/lisp-idioms-filter against: ")+anythingElseminus90389));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G90390))))            {
            return G90390;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: fun [:] (defined acc)] acc) ([: fun [: hd (tail tl)] (defined acc)] (if (fun hd) (recur fun tl (\.\. acc (concat [: hd]))) (recur fun tl acc))) (anything-else-90389 (_throw (_+ ''Match fail in hooves/lisp-idioms-filter against: '' anything-else-90389))))) for value ")+(JSON.stringify(G90391))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus90384 = actualFunminus90386.apply(this, arguments);
      while (recurP90387(returnValueminus90384))        {
        returnValueminus90384 = actualFunminus90386.apply(this, returnValueminus90384.args);
        };
      return returnValueminus90384;
      });
    currentModuleminus90307.apply = (function (f, anArray)      {
      return f.apply(undefined, anArray);
      });
    currentModuleminus90307.funcall = (function ()      {
      var returnValueminus90448 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus90447",
          args:arguments
        };
        });
      var recurP90451 = (function (valminus90452)        {
        if ((("undefined")===((typeof valminus90452))))          {
          return false;
          };
        return (valminus90452.recurSigil===("recurSigilminus90447"));
        });
      var actualFunminus90450 = (function ()        {
        return (function (arguments)          {
          var G90454 = undefined;
          var G90455 = Array.prototype.slice.apply(arguments);
          G90454 = (function (arguments)            {
            var matchValminus90456 = G90455;
            if ((!((("object")===((typeof matchValminus90456))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus90456.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus90457 = Array.prototype.slice.call(matchValminus90456, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus90457))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus90457.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var f = matchArraySimplePartminus90457[0];
            var matchArrayTailPartminus90458 = Array.prototype.slice.call(matchValminus90456, 1);
            var args = matchArrayTailPartminus90458;
            return currentModuleminus90307.apply(f, args);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G90454))))            {
            return G90454;
            };
          G90454 = (function (arguments)            {
            var matchValminus90459 = G90455;
            var anythingElseminus90453 = matchValminus90459;
            throw ((("Match fail in hooves/lisp-idioms-funcall against: ")+anythingElseminus90453));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G90454))))            {
            return G90454;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: f (tail args)] (apply f args)) (anything-else-90453 (_throw (_+ ''Match fail in hooves/lisp-idioms-funcall against: '' anything-else-90453))))) for value ")+(JSON.stringify(G90455))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus90448 = actualFunminus90450.apply(this, arguments);
      while (recurP90451(returnValueminus90448))        {
        returnValueminus90448 = actualFunminus90450.apply(this, returnValueminus90448.args);
        };
      return returnValueminus90448;
      });
    var let = "macro - no dynamic value.";
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus90307;
  }))