define([], (function ()  {
  var currentModuleminus13383 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus13383 = value;
    });
  (function (arguments)    {
    // define+
    // macro - no dynamic value.
    ;
    // define-macro+
    // macro - no dynamic value.
    ;
    // define-pattern+
    // macro - no dynamic value.
    ;
    currentModuleminus13383.map = (function (fun, anArray)      {
      var output = [];
      for (i in (anArray))        {
        output.push(fun(anArray[i]));
        };
      return output;
      });
    currentModuleminus13383.append = (function ()      {
      return Array.prototype.concat.apply([], Array.prototype.slice.apply(arguments));
      });
    currentModuleminus13383.filter = (function ()      {
      var returnValueminus13461 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus13460",
          args:arguments
        };
        });
      var recurP13464 = (function (valminus13465)        {
        if ((("undefined")===((typeof valminus13465))))          {
          return false;
          };
        return (valminus13465.recurSigil===("recurSigilminus13460"));
        });
      var actualFunminus13463 = (function ()        {
        return (function (arguments)          {
          var G13467 = undefined;
          var G13468 = Array.prototype.slice.apply(arguments);
          G13467 = (function (arguments)            {
            var matchValminus13469 = G13468;
            if ((!((("object")===((typeof matchValminus13469))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchValminus13469.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus13470 = matchValminus13469[0];
            var matchTempminus13471 = matchValminus13469[1];
            var matchTempminus13472 = matchValminus13469[2];
            var fun = matchTempminus13470;
            if ((!((("object")===((typeof matchTempminus13471))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchTempminus13471.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((("undefined")===((typeof matchTempminus13472))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var acc = matchTempminus13472;
            return acc;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G13467))))            {
            return G13467;
            };
          G13467 = (function (arguments)            {
            var matchValminus13473 = G13468;
            if ((!((("object")===((typeof matchValminus13473))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchValminus13473.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus13474 = matchValminus13473[0];
            var matchTempminus13475 = matchValminus13473[1];
            var matchTempminus13476 = matchValminus13473[2];
            var fun = matchTempminus13474;
            if ((!((("object")===((typeof matchTempminus13475))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchTempminus13475.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus13477 = Array.prototype.slice.call(matchTempminus13475, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus13477))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus13477.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus13477[0];
            var matchArrayTailPartminus13478 = Array.prototype.slice.call(matchTempminus13475, 1);
            var tl = matchArrayTailPartminus13478;
            if ((("undefined")===((typeof matchTempminus13476))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var acc = matchTempminus13476;
            return ((fun(hd))?(recur(fun, tl, acc.concat([hd]))) : (recur(fun, tl, acc)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G13467))))            {
            return G13467;
            };
          G13467 = (function (arguments)            {
            var matchValminus13479 = G13468;
            var anythingElseminus13466 = matchValminus13479;
            throw ((("Match fail in hooves/lisp-idioms-filter against: ")+anythingElseminus13466));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G13467))))            {
            return G13467;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: fun [:] (defined acc)] acc) ([: fun [: hd (tail tl)] (defined acc)] (if (fun hd) (recur fun tl (\.\. acc (concat [: hd]))) (recur fun tl acc))) (anything-else-13466 (_throw (_+ ''Match fail in hooves/lisp-idioms-filter against: '' anything-else-13466))))) for value ")+(JSON.stringify(G13468))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus13461 = actualFunminus13463.apply(this, arguments);
      while (recurP13464(returnValueminus13461))        {
        returnValueminus13461 = actualFunminus13463.apply(this, returnValueminus13461.args);
        };
      return returnValueminus13461;
      });
    currentModuleminus13383.apply = (function (f, anArray)      {
      return f.apply(undefined, anArray);
      });
    currentModuleminus13383.funcall = (function ()      {
      var returnValueminus13525 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus13524",
          args:arguments
        };
        });
      var recurP13528 = (function (valminus13529)        {
        if ((("undefined")===((typeof valminus13529))))          {
          return false;
          };
        return (valminus13529.recurSigil===("recurSigilminus13524"));
        });
      var actualFunminus13527 = (function ()        {
        return (function (arguments)          {
          var G13531 = undefined;
          var G13532 = Array.prototype.slice.apply(arguments);
          G13531 = (function (arguments)            {
            var matchValminus13533 = G13532;
            if ((!((("object")===((typeof matchValminus13533))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus13533.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus13534 = Array.prototype.slice.call(matchValminus13533, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus13534))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus13534.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var f = matchArraySimplePartminus13534[0];
            var matchArrayTailPartminus13535 = Array.prototype.slice.call(matchValminus13533, 1);
            var args = matchArrayTailPartminus13535;
            return currentModuleminus13383.apply(f, args);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G13531))))            {
            return G13531;
            };
          G13531 = (function (arguments)            {
            var matchValminus13536 = G13532;
            var anythingElseminus13530 = matchValminus13536;
            throw ((("Match fail in hooves/lisp-idioms-funcall against: ")+anythingElseminus13530));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G13531))))            {
            return G13531;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: f (tail args)] (apply f args)) (anything-else-13530 (_throw (_+ ''Match fail in hooves/lisp-idioms-funcall against: '' anything-else-13530))))) for value ")+(JSON.stringify(G13532))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus13525 = actualFunminus13527.apply(this, arguments);
      while (recurP13528(returnValueminus13525))        {
        returnValueminus13525 = actualFunminus13527.apply(this, returnValueminus13525.args);
        };
      return returnValueminus13525;
      });
    currentModuleminus13383.reduce = (function (f, init, array)      {
      for (i in (array))        {
        var e = array[i];
        init = f(e, init);
        };
      return init;
      });
    return // let
    // macro - no dynamic value.
    ;
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus13383;
  }))