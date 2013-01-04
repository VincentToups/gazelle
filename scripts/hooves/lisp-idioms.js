define([], (function ()  {
  var currentModuleminus150188 = {    
    
  };
  ((function ()    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    currentModuleminus150188.append = (function ()      {
      return Array.prototype.concat.apply([], Array.prototype.slice.apply(arguments));
      });
    currentModuleminus150188.filter = (function ()      {
      var returnValueminus150243 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus150242",
          args:arguments
        };
        });
      var recurP150246 = (function (valminus150247)        {
        return (valminus150247.recurSigil===("recurSigilminus150242"));
        });
      var actualFunminus150245 = (function ()        {
        return (function (arguments)          {
          var G150249 = undefined;
          var G150250 = Array.prototype.slice.apply(arguments);
          G150249 = (function (arguments)            {
            var G150251 = G150250;
            return ((function ()              {
              if ((!((((G150251 instanceof Array))&&((G150251.length>0))))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                } else                 {
                return (function (arguments, fun)                  {
                  return (function (arguments)                    {
                    var G150253 = Array.prototype.slice.call(G150251, 1);
                    return ((function ()                      {
                      if ((!((((G150253 instanceof Array))&&((G150253.length>0))))))                        {
                        return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                        } else                         {
                        return (function (arguments)                          {
                          var aMatchArray150255 = G150253[0];
                          if ((((!((aMatchArray150255.length===0))))||((!((aMatchArray150255 instanceof Array))))))                            {
                            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                            };
                          return (function (arguments)                            {
                            var aMatchArray150256 = Array.prototype.slice.call(G150253, 1);
                            if ((((!((aMatchArray150256.length===1))))||((!((aMatchArray150256 instanceof Array))))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            var acc = aMatchArray150256[0];
                            return acc;
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                        };
                      }))();
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G150251[0]);
                };
              }))();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G150249))))            {
            return G150249;
            };
          G150249 = (function (arguments)            {
            var G150257 = G150250;
            return ((function ()              {
              if ((!((((G150257 instanceof Array))&&((G150257.length>0))))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                } else                 {
                return (function (arguments, fun)                  {
                  return (function (arguments)                    {
                    var G150259 = Array.prototype.slice.call(G150257, 1);
                    return ((function ()                      {
                      if ((!((((G150259 instanceof Array))&&((G150259.length>0))))))                        {
                        return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                        } else                         {
                        return (function (arguments)                          {
                          var aMatchArray150261 = G150259[0];
                          if ((((!((aMatchArray150261.length>=1))))||((!((aMatchArray150261 instanceof Array))))))                            {
                            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                            };
                          var hd = aMatchArray150261[0];
                          var tl = Array.prototype.slice.call(aMatchArray150261, 1);
                          return (function (arguments)                            {
                            var aMatchArray150262 = Array.prototype.slice.call(G150259, 1);
                            if ((((!((aMatchArray150262.length===1))))||((!((aMatchArray150262 instanceof Array))))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            var acc = aMatchArray150262[0];
                            return ((fun(hd))?(recur(fun, tl, acc.concat([hd]))) : (recur(fun, tl, acc)));
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                        };
                      }))();
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G150257[0]);
                };
              }))();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G150249))))            {
            return G150249;
            };
          G150249 = (function (arguments, anythingElseminus150248)            {
            throw ((("Match fail in hooves/lisp-idioms-filter against: ")+anythingElseminus150248));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G150250);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G150249))))            {
            return G150249;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array fun [:] acc) acc) ((array fun [: hd (tail tl)] acc) (if (fun hd) (recur fun tl (\.\. acc (concat [: hd]))) (recur fun tl acc))) (anything-else-150248 (_throw (_+ ''Match fail in hooves/lisp-idioms-filter against: '' anything-else-150248))))) for value ")+G150250));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus150243 = actualFunminus150245.apply(this, arguments);
      while (recurP150246(returnValueminus150243))        {
        returnValueminus150243 = actualFunminus150245.apply(this, returnValueminus150243.args);
        };
      return returnValueminus150243;
      });
    currentModuleminus150188.apply = (function (f, anArray)      {
      return f.apply(undefined, anArray);
      });
    currentModuleminus150188.funcall = (function ()      {
      var returnValueminus150308 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus150307",
          args:arguments
        };
        });
      var recurP150311 = (function (valminus150312)        {
        return (valminus150312.recurSigil===("recurSigilminus150307"));
        });
      var actualFunminus150310 = (function ()        {
        return (function (arguments)          {
          var G150314 = undefined;
          var G150315 = Array.prototype.slice.apply(arguments);
          G150314 = (function (arguments)            {
            var aMatchArray150316 = G150315;
            if ((((!((aMatchArray150316.length>=1))))||((!((aMatchArray150316 instanceof Array))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var f = aMatchArray150316[0];
            var args = Array.prototype.slice.call(aMatchArray150316, 1);
            return currentModuleminus150188.apply(f, args);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G150314))))            {
            return G150314;
            };
          G150314 = (function (arguments, anythingElseminus150313)            {
            throw ((("Match fail in hooves/lisp-idioms-funcall against: ")+anythingElseminus150313));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G150315);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G150314))))            {
            return G150314;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array f (tail args)) (apply f args)) (anything-else-150313 (_throw (_+ ''Match fail in hooves/lisp-idioms-funcall against: '' anything-else-150313))))) for value ")+G150315));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus150308 = actualFunminus150310.apply(this, arguments);
      while (recurP150311(returnValueminus150308))        {
        returnValueminus150308 = actualFunminus150310.apply(this, returnValueminus150308.args);
        };
      return returnValueminus150308;
      });
    var let = "macro - no dynamic value.";
    }))();
  return currentModuleminus150188;
  }))