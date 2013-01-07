define([], (function ()  {
  var currentModuleminus334531 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus334531 = value;
    });
  ((function ()    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    currentModuleminus334531.append = (function ()      {
      return Array.prototype.concat.apply([], Array.prototype.slice.apply(arguments));
      });
    currentModuleminus334531.filter = (function ()      {
      var returnValueminus334586 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus334585",
          args:arguments
        };
        });
      var recurP334589 = (function (valminus334590)        {
        if ((("undefined")===((typeof valminus334590))))          {
          return false;
          };
        return (valminus334590.recurSigil===("recurSigilminus334585"));
        });
      var actualFunminus334588 = (function ()        {
        return (function (arguments)          {
          var G334592 = undefined;
          var G334593 = Array.prototype.slice.apply(arguments);
          G334592 = (function (arguments)            {
            var matchValminus334594 = G334593;
            if ((!((3===matchValminus334594.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus334595 = matchValminus334594[0];
            var matchTempminus334596 = matchValminus334594[1];
            var matchTempminus334597 = matchValminus334594[2];
            var fun = matchTempminus334595;
            if ((!((0===matchTempminus334596.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var acc = matchTempminus334597;
            return acc;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G334592))))            {
            return G334592;
            };
          G334592 = (function (arguments)            {
            var matchValminus334598 = G334593;
            if ((!((3===matchValminus334598.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus334599 = matchValminus334598[0];
            var matchTempminus334600 = matchValminus334598[1];
            var matchTempminus334601 = matchValminus334598[2];
            var fun = matchTempminus334599;
            if ((!((matchTempminus334600.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus334602 = Array.prototype.slice.call(matchTempminus334600, 0, 1);
            if ((!((1===matchArraySimplePartminus334602.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus334602[0];
            var matchArrayTailPartminus334603 = Array.prototype.slice.call(matchTempminus334600, 1);
            var tl = matchArrayTailPartminus334603;
            var acc = matchTempminus334601;
            return ((fun(hd))?(recur(fun, tl, acc.concat([hd]))) : (recur(fun, tl, acc)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G334592))))            {
            return G334592;
            };
          G334592 = (function (arguments)            {
            var matchValminus334604 = G334593;
            var anythingElseminus334591 = matchValminus334604;
            throw ((("Match fail in hooves/lisp-idioms-filter against: ")+anythingElseminus334591));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G334592))))            {
            return G334592;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array fun [:] acc) acc) ((array fun [: hd (tail tl)] acc) (if (fun hd) (recur fun tl (\.\. acc (concat [: hd]))) (recur fun tl acc))) (anything-else-334591 (_throw (_+ ''Match fail in hooves/lisp-idioms-filter against: '' anything-else-334591))))) for value ")+G334593));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus334586 = actualFunminus334588.apply(this, arguments);
      while (recurP334589(returnValueminus334586))        {
        returnValueminus334586 = actualFunminus334588.apply(this, returnValueminus334586.args);
        };
      return returnValueminus334586;
      });
    currentModuleminus334531.apply = (function (f, anArray)      {
      return f.apply(undefined, anArray);
      });
    currentModuleminus334531.funcall = (function ()      {
      var returnValueminus334650 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus334649",
          args:arguments
        };
        });
      var recurP334653 = (function (valminus334654)        {
        if ((("undefined")===((typeof valminus334654))))          {
          return false;
          };
        return (valminus334654.recurSigil===("recurSigilminus334649"));
        });
      var actualFunminus334652 = (function ()        {
        return (function (arguments)          {
          var G334656 = undefined;
          var G334657 = Array.prototype.slice.apply(arguments);
          G334656 = (function (arguments)            {
            var matchValminus334658 = G334657;
            if ((!((matchValminus334658.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus334659 = Array.prototype.slice.call(matchValminus334658, 0, 1);
            if ((!((1===matchArraySimplePartminus334659.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var f = matchArraySimplePartminus334659[0];
            var matchArrayTailPartminus334660 = Array.prototype.slice.call(matchValminus334658, 1);
            var args = matchArrayTailPartminus334660;
            return currentModuleminus334531.apply(f, args);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G334656))))            {
            return G334656;
            };
          G334656 = (function (arguments)            {
            var matchValminus334661 = G334657;
            var anythingElseminus334655 = matchValminus334661;
            throw ((("Match fail in hooves/lisp-idioms-funcall against: ")+anythingElseminus334655));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G334656))))            {
            return G334656;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array f (tail args)) (apply f args)) (anything-else-334655 (_throw (_+ ''Match fail in hooves/lisp-idioms-funcall against: '' anything-else-334655))))) for value ")+G334657));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus334650 = actualFunminus334652.apply(this, arguments);
      while (recurP334653(returnValueminus334650))        {
        returnValueminus334650 = actualFunminus334652.apply(this, returnValueminus334650.args);
        };
      return returnValueminus334650;
      });
    var let = "macro - no dynamic value.";
    }))();
  return currentModuleminus334531;
  }))