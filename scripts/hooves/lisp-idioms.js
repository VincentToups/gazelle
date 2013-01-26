define([], (function ()  {
  var currentModuleminus266349 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus266349 = value;
    });
  (function (arguments)    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    currentModuleminus266349.map = (function (fun, anArray)      {
      var output = [];
      for (i in (anArray))        {
        output.push(fun(anArray[i]));
        };
      return output;
      });
    currentModuleminus266349.append = (function ()      {
      return Array.prototype.concat.apply([], Array.prototype.slice.apply(arguments));
      });
    currentModuleminus266349.filter = (function ()      {
      var returnValueminus266426 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus266425",
          args:arguments
        };
        });
      var recurP266429 = (function (valminus266430)        {
        if ((("undefined")===((typeof valminus266430))))          {
          return false;
          };
        return (valminus266430.recurSigil===("recurSigilminus266425"));
        });
      var actualFunminus266428 = (function ()        {
        return (function (arguments)          {
          var G266432 = undefined;
          var G266433 = Array.prototype.slice.apply(arguments);
          G266432 = (function (arguments)            {
            var matchValminus266434 = G266433;
            if ((!((("object")===((typeof matchValminus266434))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchValminus266434.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus266435 = matchValminus266434[0];
            var matchTempminus266436 = matchValminus266434[1];
            var matchTempminus266437 = matchValminus266434[2];
            var fun = matchTempminus266435;
            if ((!((("object")===((typeof matchTempminus266436))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchTempminus266436.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((("undefined")===((typeof matchTempminus266437))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var acc = matchTempminus266437;
            return acc;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G266432))))            {
            return G266432;
            };
          G266432 = (function (arguments)            {
            var matchValminus266438 = G266433;
            if ((!((("object")===((typeof matchValminus266438))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchValminus266438.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus266439 = matchValminus266438[0];
            var matchTempminus266440 = matchValminus266438[1];
            var matchTempminus266441 = matchValminus266438[2];
            var fun = matchTempminus266439;
            if ((!((("object")===((typeof matchTempminus266440))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchTempminus266440.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus266442 = Array.prototype.slice.call(matchTempminus266440, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus266442))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus266442.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus266442[0];
            var matchArrayTailPartminus266443 = Array.prototype.slice.call(matchTempminus266440, 1);
            var tl = matchArrayTailPartminus266443;
            if ((("undefined")===((typeof matchTempminus266441))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var acc = matchTempminus266441;
            return ((fun(hd))?(recur(fun, tl, acc.concat([hd]))) : (recur(fun, tl, acc)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G266432))))            {
            return G266432;
            };
          G266432 = (function (arguments)            {
            var matchValminus266444 = G266433;
            var anythingElseminus266431 = matchValminus266444;
            throw ((("Match fail in hooves/lisp-idioms-filter against: ")+anythingElseminus266431));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G266432))))            {
            return G266432;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: fun [:] (defined acc)] acc) ([: fun [: hd (tail tl)] (defined acc)] (if (fun hd) (recur fun tl (\.\. acc (concat [: hd]))) (recur fun tl acc))) (anything-else-266431 (_throw (_+ ''Match fail in hooves/lisp-idioms-filter against: '' anything-else-266431))))) for value ")+(JSON.stringify(G266433))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus266426 = actualFunminus266428.apply(this, arguments);
      while (recurP266429(returnValueminus266426))        {
        returnValueminus266426 = actualFunminus266428.apply(this, returnValueminus266426.args);
        };
      return returnValueminus266426;
      });
    currentModuleminus266349.apply = (function (f, anArray)      {
      return f.apply(undefined, anArray);
      });
    currentModuleminus266349.funcall = (function ()      {
      var returnValueminus266490 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus266489",
          args:arguments
        };
        });
      var recurP266493 = (function (valminus266494)        {
        if ((("undefined")===((typeof valminus266494))))          {
          return false;
          };
        return (valminus266494.recurSigil===("recurSigilminus266489"));
        });
      var actualFunminus266492 = (function ()        {
        return (function (arguments)          {
          var G266496 = undefined;
          var G266497 = Array.prototype.slice.apply(arguments);
          G266496 = (function (arguments)            {
            var matchValminus266498 = G266497;
            if ((!((("object")===((typeof matchValminus266498))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus266498.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus266499 = Array.prototype.slice.call(matchValminus266498, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus266499))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus266499.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var f = matchArraySimplePartminus266499[0];
            var matchArrayTailPartminus266500 = Array.prototype.slice.call(matchValminus266498, 1);
            var args = matchArrayTailPartminus266500;
            return currentModuleminus266349.apply(f, args);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G266496))))            {
            return G266496;
            };
          G266496 = (function (arguments)            {
            var matchValminus266501 = G266497;
            var anythingElseminus266495 = matchValminus266501;
            throw ((("Match fail in hooves/lisp-idioms-funcall against: ")+anythingElseminus266495));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G266496))))            {
            return G266496;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: f (tail args)] (apply f args)) (anything-else-266495 (_throw (_+ ''Match fail in hooves/lisp-idioms-funcall against: '' anything-else-266495))))) for value ")+(JSON.stringify(G266497))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus266490 = actualFunminus266492.apply(this, arguments);
      while (recurP266493(returnValueminus266490))        {
        returnValueminus266490 = actualFunminus266492.apply(this, returnValueminus266490.args);
        };
      return returnValueminus266490;
      });
    var let = "macro - no dynamic value.";
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus266349;
  }))