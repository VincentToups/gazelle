define([], (function ()  {
  var currentModuleminus68364 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus68364 = value;
    });
  (function (arguments)    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    currentModuleminus68364.map = (function (fun, anArray)      {
      var output = [];
      for (i in (anArray))        {
        output.push(fun(anArray[i]));
        };
      return output;
      });
    currentModuleminus68364.append = (function ()      {
      return Array.prototype.concat.apply([], Array.prototype.slice.apply(arguments));
      });
    currentModuleminus68364.filter = (function ()      {
      var returnValueminus68441 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus68440",
          args:arguments
        };
        });
      var recurP68444 = (function (valminus68445)        {
        if ((("undefined")===((typeof valminus68445))))          {
          return false;
          };
        return (valminus68445.recurSigil===("recurSigilminus68440"));
        });
      var actualFunminus68443 = (function ()        {
        return (function (arguments)          {
          var G68447 = undefined;
          var G68448 = Array.prototype.slice.apply(arguments);
          G68447 = (function (arguments)            {
            var matchValminus68449 = G68448;
            if ((!((("object")===((typeof matchValminus68449))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchValminus68449.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus68450 = matchValminus68449[0];
            var matchTempminus68451 = matchValminus68449[1];
            var matchTempminus68452 = matchValminus68449[2];
            var fun = matchTempminus68450;
            if ((!((("object")===((typeof matchTempminus68451))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchTempminus68451.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((("undefined")===((typeof matchTempminus68452))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var acc = matchTempminus68452;
            return acc;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G68447))))            {
            return G68447;
            };
          G68447 = (function (arguments)            {
            var matchValminus68453 = G68448;
            if ((!((("object")===((typeof matchValminus68453))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchValminus68453.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus68454 = matchValminus68453[0];
            var matchTempminus68455 = matchValminus68453[1];
            var matchTempminus68456 = matchValminus68453[2];
            var fun = matchTempminus68454;
            if ((!((("object")===((typeof matchTempminus68455))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchTempminus68455.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus68457 = Array.prototype.slice.call(matchTempminus68455, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus68457))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus68457.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus68457[0];
            var matchArrayTailPartminus68458 = Array.prototype.slice.call(matchTempminus68455, 1);
            var tl = matchArrayTailPartminus68458;
            if ((("undefined")===((typeof matchTempminus68456))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var acc = matchTempminus68456;
            return ((fun(hd))?(recur(fun, tl, acc.concat([hd]))) : (recur(fun, tl, acc)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G68447))))            {
            return G68447;
            };
          G68447 = (function (arguments)            {
            var matchValminus68459 = G68448;
            var anythingElseminus68446 = matchValminus68459;
            throw ((("Match fail in hooves/lisp-idioms-filter against: ")+anythingElseminus68446));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G68447))))            {
            return G68447;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: fun [:] (defined acc)] acc) ([: fun [: hd (tail tl)] (defined acc)] (if (fun hd) (recur fun tl (\.\. acc (concat [: hd]))) (recur fun tl acc))) (anything-else-68446 (_throw (_+ ''Match fail in hooves/lisp-idioms-filter against: '' anything-else-68446))))) for value ")+(JSON.stringify(G68448))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus68441 = actualFunminus68443.apply(this, arguments);
      while (recurP68444(returnValueminus68441))        {
        returnValueminus68441 = actualFunminus68443.apply(this, returnValueminus68441.args);
        };
      return returnValueminus68441;
      });
    currentModuleminus68364.apply = (function (f, anArray)      {
      return f.apply(undefined, anArray);
      });
    currentModuleminus68364.funcall = (function ()      {
      var returnValueminus68505 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus68504",
          args:arguments
        };
        });
      var recurP68508 = (function (valminus68509)        {
        if ((("undefined")===((typeof valminus68509))))          {
          return false;
          };
        return (valminus68509.recurSigil===("recurSigilminus68504"));
        });
      var actualFunminus68507 = (function ()        {
        return (function (arguments)          {
          var G68511 = undefined;
          var G68512 = Array.prototype.slice.apply(arguments);
          G68511 = (function (arguments)            {
            var matchValminus68513 = G68512;
            if ((!((("object")===((typeof matchValminus68513))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus68513.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus68514 = Array.prototype.slice.call(matchValminus68513, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus68514))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus68514.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var f = matchArraySimplePartminus68514[0];
            var matchArrayTailPartminus68515 = Array.prototype.slice.call(matchValminus68513, 1);
            var args = matchArrayTailPartminus68515;
            return currentModuleminus68364.apply(f, args);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G68511))))            {
            return G68511;
            };
          G68511 = (function (arguments)            {
            var matchValminus68516 = G68512;
            var anythingElseminus68510 = matchValminus68516;
            throw ((("Match fail in hooves/lisp-idioms-funcall against: ")+anythingElseminus68510));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G68511))))            {
            return G68511;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: f (tail args)] (apply f args)) (anything-else-68510 (_throw (_+ ''Match fail in hooves/lisp-idioms-funcall against: '' anything-else-68510))))) for value ")+(JSON.stringify(G68512))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus68505 = actualFunminus68507.apply(this, arguments);
      while (recurP68508(returnValueminus68505))        {
        returnValueminus68505 = actualFunminus68507.apply(this, returnValueminus68505.args);
        };
      return returnValueminus68505;
      });
    var let = "macro - no dynamic value.";
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus68364;
  }))