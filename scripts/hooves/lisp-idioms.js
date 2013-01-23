define([], (function ()  {
  var currentModuleminus64298 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus64298 = value;
    });
  (function (arguments)    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    currentModuleminus64298.map = (function (fun, anArray)      {
      var output = [];
      for (i in (anArray))        {
        output.push(fun(anArray[i]));
        };
      return output;
      });
    currentModuleminus64298.append = (function ()      {
      return Array.prototype.concat.apply([], Array.prototype.slice.apply(arguments));
      });
    currentModuleminus64298.filter = (function ()      {
      var returnValueminus64375 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus64374",
          args:arguments
        };
        });
      var recurP64378 = (function (valminus64379)        {
        if ((("undefined")===((typeof valminus64379))))          {
          return false;
          };
        return (valminus64379.recurSigil===("recurSigilminus64374"));
        });
      var actualFunminus64377 = (function ()        {
        return (function (arguments)          {
          var G64381 = undefined;
          var G64382 = Array.prototype.slice.apply(arguments);
          G64381 = (function (arguments)            {
            var matchValminus64383 = G64382;
            if ((!((("object")===((typeof matchValminus64383))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchValminus64383.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus64384 = matchValminus64383[0];
            var matchTempminus64385 = matchValminus64383[1];
            var matchTempminus64386 = matchValminus64383[2];
            var fun = matchTempminus64384;
            if ((!((("object")===((typeof matchTempminus64385))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchTempminus64385.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((("undefined")===((typeof matchTempminus64386))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var acc = matchTempminus64386;
            return acc;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G64381))))            {
            return G64381;
            };
          G64381 = (function (arguments)            {
            var matchValminus64387 = G64382;
            if ((!((("object")===((typeof matchValminus64387))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchValminus64387.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus64388 = matchValminus64387[0];
            var matchTempminus64389 = matchValminus64387[1];
            var matchTempminus64390 = matchValminus64387[2];
            var fun = matchTempminus64388;
            if ((!((("object")===((typeof matchTempminus64389))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchTempminus64389.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus64391 = Array.prototype.slice.call(matchTempminus64389, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus64391))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus64391.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus64391[0];
            var matchArrayTailPartminus64392 = Array.prototype.slice.call(matchTempminus64389, 1);
            var tl = matchArrayTailPartminus64392;
            if ((("undefined")===((typeof matchTempminus64390))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var acc = matchTempminus64390;
            return ((fun(hd))?(recur(fun, tl, acc.concat([hd]))) : (recur(fun, tl, acc)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G64381))))            {
            return G64381;
            };
          G64381 = (function (arguments)            {
            var matchValminus64393 = G64382;
            var anythingElseminus64380 = matchValminus64393;
            throw ((("Match fail in hooves/lisp-idioms-filter against: ")+anythingElseminus64380));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G64381))))            {
            return G64381;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: fun [:] (defined acc)] acc) ([: fun [: hd (tail tl)] (defined acc)] (if (fun hd) (recur fun tl (\.\. acc (concat [: hd]))) (recur fun tl acc))) (anything-else-64380 (_throw (_+ ''Match fail in hooves/lisp-idioms-filter against: '' anything-else-64380))))) for value ")+(JSON.stringify(G64382))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus64375 = actualFunminus64377.apply(this, arguments);
      while (recurP64378(returnValueminus64375))        {
        returnValueminus64375 = actualFunminus64377.apply(this, returnValueminus64375.args);
        };
      return returnValueminus64375;
      });
    currentModuleminus64298.apply = (function (f, anArray)      {
      return f.apply(undefined, anArray);
      });
    currentModuleminus64298.funcall = (function ()      {
      var returnValueminus64439 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus64438",
          args:arguments
        };
        });
      var recurP64442 = (function (valminus64443)        {
        if ((("undefined")===((typeof valminus64443))))          {
          return false;
          };
        return (valminus64443.recurSigil===("recurSigilminus64438"));
        });
      var actualFunminus64441 = (function ()        {
        return (function (arguments)          {
          var G64445 = undefined;
          var G64446 = Array.prototype.slice.apply(arguments);
          G64445 = (function (arguments)            {
            var matchValminus64447 = G64446;
            if ((!((("object")===((typeof matchValminus64447))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus64447.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus64448 = Array.prototype.slice.call(matchValminus64447, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus64448))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus64448.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var f = matchArraySimplePartminus64448[0];
            var matchArrayTailPartminus64449 = Array.prototype.slice.call(matchValminus64447, 1);
            var args = matchArrayTailPartminus64449;
            return currentModuleminus64298.apply(f, args);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G64445))))            {
            return G64445;
            };
          G64445 = (function (arguments)            {
            var matchValminus64450 = G64446;
            var anythingElseminus64444 = matchValminus64450;
            throw ((("Match fail in hooves/lisp-idioms-funcall against: ")+anythingElseminus64444));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G64445))))            {
            return G64445;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: f (tail args)] (apply f args)) (anything-else-64444 (_throw (_+ ''Match fail in hooves/lisp-idioms-funcall against: '' anything-else-64444))))) for value ")+(JSON.stringify(G64446))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus64439 = actualFunminus64441.apply(this, arguments);
      while (recurP64442(returnValueminus64439))        {
        returnValueminus64439 = actualFunminus64441.apply(this, returnValueminus64439.args);
        };
      return returnValueminus64439;
      });
    var let = "macro - no dynamic value.";
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus64298;
  }))