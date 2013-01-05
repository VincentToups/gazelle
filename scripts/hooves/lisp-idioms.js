define([], (function ()  {
  var currentModuleminus42280 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus42280 = value;
    });
  ((function ()    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    currentModuleminus42280.append = (function ()      {
      return Array.prototype.concat.apply([], Array.prototype.slice.apply(arguments));
      });
    currentModuleminus42280.filter = (function ()      {
      var returnValueminus42335 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus42334",
          args:arguments
        };
        });
      var recurP42338 = (function (valminus42339)        {
        return (valminus42339.recurSigil===("recurSigilminus42334"));
        });
      var actualFunminus42337 = (function ()        {
        return (function (arguments)          {
          var G42341 = undefined;
          var G42342 = Array.prototype.slice.apply(arguments);
          G42341 = (function (arguments)            {
            var G42343 = G42342;
            return ((function ()              {
              if ((!((((G42343 instanceof Array))&&((G42343.length>0))))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                } else                 {
                return (function (arguments, fun)                  {
                  return (function (arguments)                    {
                    var G42345 = Array.prototype.slice.call(G42343, 1);
                    return ((function ()                      {
                      if ((!((((G42345 instanceof Array))&&((G42345.length>0))))))                        {
                        return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                        } else                         {
                        return (function (arguments)                          {
                          var aMatchArray42347 = G42345[0];
                          if ((((!((aMatchArray42347.length===0))))||((!((aMatchArray42347 instanceof Array))))))                            {
                            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                            };
                          return (function (arguments)                            {
                            var aMatchArray42348 = Array.prototype.slice.call(G42345, 1);
                            if ((((!((aMatchArray42348.length===1))))||((!((aMatchArray42348 instanceof Array))))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            var acc = aMatchArray42348[0];
                            return acc;
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                        };
                      }))();
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G42343[0]);
                };
              }))();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G42341))))            {
            return G42341;
            };
          G42341 = (function (arguments)            {
            var G42349 = G42342;
            return ((function ()              {
              if ((!((((G42349 instanceof Array))&&((G42349.length>0))))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                } else                 {
                return (function (arguments, fun)                  {
                  return (function (arguments)                    {
                    var G42351 = Array.prototype.slice.call(G42349, 1);
                    return ((function ()                      {
                      if ((!((((G42351 instanceof Array))&&((G42351.length>0))))))                        {
                        return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                        } else                         {
                        return (function (arguments)                          {
                          var aMatchArray42353 = G42351[0];
                          if ((((!((aMatchArray42353.length>=1))))||((!((aMatchArray42353 instanceof Array))))))                            {
                            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                            };
                          var hd = aMatchArray42353[0];
                          var tl = Array.prototype.slice.call(aMatchArray42353, 1);
                          return (function (arguments)                            {
                            var aMatchArray42354 = Array.prototype.slice.call(G42351, 1);
                            if ((((!((aMatchArray42354.length===1))))||((!((aMatchArray42354 instanceof Array))))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            var acc = aMatchArray42354[0];
                            return ((fun(hd))?(recur(fun, tl, acc.concat([hd]))) : (recur(fun, tl, acc)));
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                        };
                      }))();
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G42349[0]);
                };
              }))();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G42341))))            {
            return G42341;
            };
          G42341 = (function (arguments, anythingElseminus42340)            {
            throw ((("Match fail in hooves/lisp-idioms-filter against: ")+anythingElseminus42340));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G42342);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G42341))))            {
            return G42341;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array fun [:] acc) acc) ((array fun [: hd (tail tl)] acc) (if (fun hd) (recur fun tl (\.\. acc (concat [: hd]))) (recur fun tl acc))) (anything-else-42340 (_throw (_+ ''Match fail in hooves/lisp-idioms-filter against: '' anything-else-42340))))) for value ")+G42342));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus42335 = actualFunminus42337.apply(this, arguments);
      while (recurP42338(returnValueminus42335))        {
        returnValueminus42335 = actualFunminus42337.apply(this, returnValueminus42335.args);
        };
      return returnValueminus42335;
      });
    currentModuleminus42280.apply = (function (f, anArray)      {
      return f.apply(undefined, anArray);
      });
    currentModuleminus42280.funcall = (function ()      {
      var returnValueminus42400 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus42399",
          args:arguments
        };
        });
      var recurP42403 = (function (valminus42404)        {
        return (valminus42404.recurSigil===("recurSigilminus42399"));
        });
      var actualFunminus42402 = (function ()        {
        return (function (arguments)          {
          var G42406 = undefined;
          var G42407 = Array.prototype.slice.apply(arguments);
          G42406 = (function (arguments)            {
            var aMatchArray42408 = G42407;
            if ((((!((aMatchArray42408.length>=1))))||((!((aMatchArray42408 instanceof Array))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var f = aMatchArray42408[0];
            var args = Array.prototype.slice.call(aMatchArray42408, 1);
            return currentModuleminus42280.apply(f, args);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G42406))))            {
            return G42406;
            };
          G42406 = (function (arguments, anythingElseminus42405)            {
            throw ((("Match fail in hooves/lisp-idioms-funcall against: ")+anythingElseminus42405));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G42407);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G42406))))            {
            return G42406;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array f (tail args)) (apply f args)) (anything-else-42405 (_throw (_+ ''Match fail in hooves/lisp-idioms-funcall against: '' anything-else-42405))))) for value ")+G42407));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus42400 = actualFunminus42402.apply(this, arguments);
      while (recurP42403(returnValueminus42400))        {
        returnValueminus42400 = actualFunminus42402.apply(this, returnValueminus42400.args);
        };
      return returnValueminus42400;
      });
    var let = "macro - no dynamic value.";
    }))();
  return currentModuleminus42280;
  }))