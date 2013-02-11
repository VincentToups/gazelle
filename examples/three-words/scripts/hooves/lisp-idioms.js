define([], (function ()  {
  var currentModuleminus22281 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus22281 = value;
    });
  (function (arguments)    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    currentModuleminus22281.map = (function (fun, anArray)      {
      var output = [];
      for (i in (anArray))        {
        output.push(fun(anArray[i]));
        };
      return output;
      });
    currentModuleminus22281.append = (function ()      {
      return Array.prototype.concat.apply([], Array.prototype.slice.apply(arguments));
      });
    currentModuleminus22281.filter = (function ()      {
      var returnValueminus22358 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus22357",
          args:arguments
        };
        });
      var recurP22361 = (function (valminus22362)        {
        if ((("undefined")===((typeof valminus22362))))          {
          return false;
          };
        return (valminus22362.recurSigil===("recurSigilminus22357"));
        });
      var actualFunminus22360 = (function ()        {
        return (function (arguments)          {
          var G22364 = undefined;
          var G22365 = Array.prototype.slice.apply(arguments);
          G22364 = (function (arguments)            {
            var matchValminus22366 = G22365;
            if ((!((("object")===((typeof matchValminus22366))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchValminus22366.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus22367 = matchValminus22366[0];
            var matchTempminus22368 = matchValminus22366[1];
            var matchTempminus22369 = matchValminus22366[2];
            var fun = matchTempminus22367;
            if ((!((("object")===((typeof matchTempminus22368))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchTempminus22368.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((("undefined")===((typeof matchTempminus22369))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var acc = matchTempminus22369;
            return acc;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G22364))))            {
            return G22364;
            };
          G22364 = (function (arguments)            {
            var matchValminus22370 = G22365;
            if ((!((("object")===((typeof matchValminus22370))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchValminus22370.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus22371 = matchValminus22370[0];
            var matchTempminus22372 = matchValminus22370[1];
            var matchTempminus22373 = matchValminus22370[2];
            var fun = matchTempminus22371;
            if ((!((("object")===((typeof matchTempminus22372))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchTempminus22372.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus22374 = Array.prototype.slice.call(matchTempminus22372, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus22374))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus22374.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus22374[0];
            var matchArrayTailPartminus22375 = Array.prototype.slice.call(matchTempminus22372, 1);
            var tl = matchArrayTailPartminus22375;
            if ((("undefined")===((typeof matchTempminus22373))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var acc = matchTempminus22373;
            return ((fun(hd))?(recur(fun, tl, acc.concat([hd]))) : (recur(fun, tl, acc)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G22364))))            {
            return G22364;
            };
          G22364 = (function (arguments)            {
            var matchValminus22376 = G22365;
            var anythingElseminus22363 = matchValminus22376;
            throw ((("Match fail in hooves/lisp-idioms-filter against: ")+anythingElseminus22363));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G22364))))            {
            return G22364;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: fun [:] (defined acc)] acc) ([: fun [: hd (tail tl)] (defined acc)] (if (fun hd) (recur fun tl (\.\. acc (concat [: hd]))) (recur fun tl acc))) (anything-else-22363 (_throw (_+ ''Match fail in hooves/lisp-idioms-filter against: '' anything-else-22363))))) for value ")+(JSON.stringify(G22365))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus22358 = actualFunminus22360.apply(this, arguments);
      while (recurP22361(returnValueminus22358))        {
        returnValueminus22358 = actualFunminus22360.apply(this, returnValueminus22358.args);
        };
      return returnValueminus22358;
      });
    currentModuleminus22281.apply = (function (f, anArray)      {
      return f.apply(undefined, anArray);
      });
    currentModuleminus22281.funcall = (function ()      {
      var returnValueminus22422 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus22421",
          args:arguments
        };
        });
      var recurP22425 = (function (valminus22426)        {
        if ((("undefined")===((typeof valminus22426))))          {
          return false;
          };
        return (valminus22426.recurSigil===("recurSigilminus22421"));
        });
      var actualFunminus22424 = (function ()        {
        return (function (arguments)          {
          var G22428 = undefined;
          var G22429 = Array.prototype.slice.apply(arguments);
          G22428 = (function (arguments)            {
            var matchValminus22430 = G22429;
            if ((!((("object")===((typeof matchValminus22430))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus22430.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus22431 = Array.prototype.slice.call(matchValminus22430, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus22431))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus22431.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var f = matchArraySimplePartminus22431[0];
            var matchArrayTailPartminus22432 = Array.prototype.slice.call(matchValminus22430, 1);
            var args = matchArrayTailPartminus22432;
            return currentModuleminus22281.apply(f, args);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G22428))))            {
            return G22428;
            };
          G22428 = (function (arguments)            {
            var matchValminus22433 = G22429;
            var anythingElseminus22427 = matchValminus22433;
            throw ((("Match fail in hooves/lisp-idioms-funcall against: ")+anythingElseminus22427));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G22428))))            {
            return G22428;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: f (tail args)] (apply f args)) (anything-else-22427 (_throw (_+ ''Match fail in hooves/lisp-idioms-funcall against: '' anything-else-22427))))) for value ")+(JSON.stringify(G22429))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus22422 = actualFunminus22424.apply(this, arguments);
      while (recurP22425(returnValueminus22422))        {
        returnValueminus22422 = actualFunminus22424.apply(this, returnValueminus22422.args);
        };
      return returnValueminus22422;
      });
    currentModuleminus22281.reduce = (function (f, init, array)      {
      for (i in (array))        {
        var e = array[i];
        init = f(e, init);
        };
      return init;
      });
    var let = "macro - no dynamic value.";
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus22281;
  }))