define([], (function ()  {
  var currentModuleminus55409 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus55409 = value;
    });
  ((function ()    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    currentModuleminus55409.map = (function (fun, anArray)      {
      var output = [];
      for (i in (anArray))        {
        output.push(fun(anArray[i]));
        };
      return output;
      });
    currentModuleminus55409.append = (function ()      {
      return Array.prototype.concat.apply([], Array.prototype.slice.apply(arguments));
      });
    currentModuleminus55409.filter = (function ()      {
      var returnValueminus55486 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus55485",
          args:arguments
        };
        });
      var recurP55489 = (function (valminus55490)        {
        if ((("undefined")===((typeof valminus55490))))          {
          return false;
          };
        return (valminus55490.recurSigil===("recurSigilminus55485"));
        });
      var actualFunminus55488 = (function ()        {
        return (function (arguments)          {
          var G55492 = undefined;
          var G55493 = Array.prototype.slice.apply(arguments);
          G55492 = (function (arguments)            {
            var matchValminus55494 = G55493;
            if ((!((3===matchValminus55494.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus55495 = matchValminus55494[0];
            var matchTempminus55496 = matchValminus55494[1];
            var matchTempminus55497 = matchValminus55494[2];
            var fun = matchTempminus55495;
            if ((!((0===matchTempminus55496.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((("undefined")===((typeof matchTempminus55497))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var acc = matchTempminus55497;
            return acc;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G55492))))            {
            return G55492;
            };
          G55492 = (function (arguments)            {
            var matchValminus55498 = G55493;
            if ((!((3===matchValminus55498.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus55499 = matchValminus55498[0];
            var matchTempminus55500 = matchValminus55498[1];
            var matchTempminus55501 = matchValminus55498[2];
            var fun = matchTempminus55499;
            if ((!((matchTempminus55500.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus55502 = Array.prototype.slice.call(matchTempminus55500, 0, 1);
            if ((!((1===matchArraySimplePartminus55502.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus55502[0];
            var matchArrayTailPartminus55503 = Array.prototype.slice.call(matchTempminus55500, 1);
            var tl = matchArrayTailPartminus55503;
            if ((("undefined")===((typeof matchTempminus55501))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var acc = matchTempminus55501;
            return ((fun(hd))?(recur(fun, tl, acc.concat([hd]))) : (recur(fun, tl, acc)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G55492))))            {
            return G55492;
            };
          G55492 = (function (arguments)            {
            var matchValminus55504 = G55493;
            var anythingElseminus55491 = matchValminus55504;
            throw ((("Match fail in hooves/lisp-idioms-filter against: ")+anythingElseminus55491));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G55492))))            {
            return G55492;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: fun [:] (defined acc)] acc) ([: fun [: hd (tail tl)] (defined acc)] (if (fun hd) (recur fun tl (\.\. acc (concat [: hd]))) (recur fun tl acc))) (anything-else-55491 (_throw (_+ ''Match fail in hooves/lisp-idioms-filter against: '' anything-else-55491))))) for value ")+(JSON.stringify(G55493))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus55486 = actualFunminus55488.apply(this, arguments);
      while (recurP55489(returnValueminus55486))        {
        returnValueminus55486 = actualFunminus55488.apply(this, returnValueminus55486.args);
        };
      return returnValueminus55486;
      });
    currentModuleminus55409.apply = (function (f, anArray)      {
      return f.apply(undefined, anArray);
      });
    currentModuleminus55409.funcall = (function ()      {
      var returnValueminus55550 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus55549",
          args:arguments
        };
        });
      var recurP55553 = (function (valminus55554)        {
        if ((("undefined")===((typeof valminus55554))))          {
          return false;
          };
        return (valminus55554.recurSigil===("recurSigilminus55549"));
        });
      var actualFunminus55552 = (function ()        {
        return (function (arguments)          {
          var G55556 = undefined;
          var G55557 = Array.prototype.slice.apply(arguments);
          G55556 = (function (arguments)            {
            var matchValminus55558 = G55557;
            if ((!((matchValminus55558.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus55559 = Array.prototype.slice.call(matchValminus55558, 0, 1);
            if ((!((1===matchArraySimplePartminus55559.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var f = matchArraySimplePartminus55559[0];
            var matchArrayTailPartminus55560 = Array.prototype.slice.call(matchValminus55558, 1);
            var args = matchArrayTailPartminus55560;
            return currentModuleminus55409.apply(f, args);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G55556))))            {
            return G55556;
            };
          G55556 = (function (arguments)            {
            var matchValminus55561 = G55557;
            var anythingElseminus55555 = matchValminus55561;
            throw ((("Match fail in hooves/lisp-idioms-funcall against: ")+anythingElseminus55555));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G55556))))            {
            return G55556;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: f (tail args)] (apply f args)) (anything-else-55555 (_throw (_+ ''Match fail in hooves/lisp-idioms-funcall against: '' anything-else-55555))))) for value ")+(JSON.stringify(G55557))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus55550 = actualFunminus55552.apply(this, arguments);
      while (recurP55553(returnValueminus55550))        {
        returnValueminus55550 = actualFunminus55552.apply(this, returnValueminus55550.args);
        };
      return returnValueminus55550;
      });
    var let = "macro - no dynamic value.";
    }))();
  return currentModuleminus55409;
  }))