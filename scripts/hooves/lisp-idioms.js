define([], (function ()  {
  var currentModuleminus103459 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus103459 = value;
    });
  (function (arguments)    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    currentModuleminus103459.map = (function (fun, anArray)      {
      var output = [];
      for (i in (anArray))        {
        output.push(fun(anArray[i]));
        };
      return output;
      });
    currentModuleminus103459.append = (function ()      {
      return Array.prototype.concat.apply([], Array.prototype.slice.apply(arguments));
      });
    currentModuleminus103459.filter = (function ()      {
      var returnValueminus103536 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus103535",
          args:arguments
        };
        });
      var recurP103539 = (function (valminus103540)        {
        if ((("undefined")===((typeof valminus103540))))          {
          return false;
          };
        return (valminus103540.recurSigil===("recurSigilminus103535"));
        });
      var actualFunminus103538 = (function ()        {
        return (function (arguments)          {
          var G103542 = undefined;
          var G103543 = Array.prototype.slice.apply(arguments);
          G103542 = (function (arguments)            {
            var matchValminus103544 = G103543;
            if ((!((("object")===((typeof matchValminus103544))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchValminus103544.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus103545 = matchValminus103544[0];
            var matchTempminus103546 = matchValminus103544[1];
            var matchTempminus103547 = matchValminus103544[2];
            var fun = matchTempminus103545;
            if ((!((("object")===((typeof matchTempminus103546))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchTempminus103546.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((("undefined")===((typeof matchTempminus103547))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var acc = matchTempminus103547;
            return acc;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G103542))))            {
            return G103542;
            };
          G103542 = (function (arguments)            {
            var matchValminus103548 = G103543;
            if ((!((("object")===((typeof matchValminus103548))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchValminus103548.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus103549 = matchValminus103548[0];
            var matchTempminus103550 = matchValminus103548[1];
            var matchTempminus103551 = matchValminus103548[2];
            var fun = matchTempminus103549;
            if ((!((("object")===((typeof matchTempminus103550))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchTempminus103550.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus103552 = Array.prototype.slice.call(matchTempminus103550, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus103552))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus103552.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus103552[0];
            var matchArrayTailPartminus103553 = Array.prototype.slice.call(matchTempminus103550, 1);
            var tl = matchArrayTailPartminus103553;
            if ((("undefined")===((typeof matchTempminus103551))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var acc = matchTempminus103551;
            return ((fun(hd))?(recur(fun, tl, acc.concat([hd]))) : (recur(fun, tl, acc)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G103542))))            {
            return G103542;
            };
          G103542 = (function (arguments)            {
            var matchValminus103554 = G103543;
            var anythingElseminus103541 = matchValminus103554;
            throw ((("Match fail in hooves/lisp-idioms-filter against: ")+anythingElseminus103541));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G103542))))            {
            return G103542;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: fun [:] (defined acc)] acc) ([: fun [: hd (tail tl)] (defined acc)] (if (fun hd) (recur fun tl (\.\. acc (concat [: hd]))) (recur fun tl acc))) (anything-else-103541 (_throw (_+ ''Match fail in hooves/lisp-idioms-filter against: '' anything-else-103541))))) for value ")+(JSON.stringify(G103543))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus103536 = actualFunminus103538.apply(this, arguments);
      while (recurP103539(returnValueminus103536))        {
        returnValueminus103536 = actualFunminus103538.apply(this, returnValueminus103536.args);
        };
      return returnValueminus103536;
      });
    currentModuleminus103459.apply = (function (f, anArray)      {
      return f.apply(undefined, anArray);
      });
    currentModuleminus103459.funcall = (function ()      {
      var returnValueminus103600 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus103599",
          args:arguments
        };
        });
      var recurP103603 = (function (valminus103604)        {
        if ((("undefined")===((typeof valminus103604))))          {
          return false;
          };
        return (valminus103604.recurSigil===("recurSigilminus103599"));
        });
      var actualFunminus103602 = (function ()        {
        return (function (arguments)          {
          var G103606 = undefined;
          var G103607 = Array.prototype.slice.apply(arguments);
          G103606 = (function (arguments)            {
            var matchValminus103608 = G103607;
            if ((!((("object")===((typeof matchValminus103608))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus103608.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus103609 = Array.prototype.slice.call(matchValminus103608, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus103609))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus103609.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var f = matchArraySimplePartminus103609[0];
            var matchArrayTailPartminus103610 = Array.prototype.slice.call(matchValminus103608, 1);
            var args = matchArrayTailPartminus103610;
            return currentModuleminus103459.apply(f, args);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G103606))))            {
            return G103606;
            };
          G103606 = (function (arguments)            {
            var matchValminus103611 = G103607;
            var anythingElseminus103605 = matchValminus103611;
            throw ((("Match fail in hooves/lisp-idioms-funcall against: ")+anythingElseminus103605));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G103606))))            {
            return G103606;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: f (tail args)] (apply f args)) (anything-else-103605 (_throw (_+ ''Match fail in hooves/lisp-idioms-funcall against: '' anything-else-103605))))) for value ")+(JSON.stringify(G103607))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus103600 = actualFunminus103602.apply(this, arguments);
      while (recurP103603(returnValueminus103600))        {
        returnValueminus103600 = actualFunminus103602.apply(this, returnValueminus103600.args);
        };
      return returnValueminus103600;
      });
    var let = "macro - no dynamic value.";
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus103459;
  }))