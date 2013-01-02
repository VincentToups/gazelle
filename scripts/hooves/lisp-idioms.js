((define))([], (function ()  {
  var currentModuleminus165182 = {    
    
  };
  ((function ()    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    currentModuleminus165182.append = (function ()      {
      return (Array.prototype.concat.apply([], Array.prototype.slice.apply(arguments)));
      });
    currentModuleminus165182.filter = (function ()      {
      var returnValueminus165237 = undefined;
      var recur = (function ()        {
        return ({          
          recurSigil:"recurSigilminus165236",
          args:arguments
        });
        });
      var recurP165240 = (function (valminus165241)        {
        return (((valminus165241.recurSigil)===("recurSigilminus165236")));
        });
      var actualFunminus165239 = (function ()        {
        return ((function (arguments)          {
          var G165243 = undefined;
          var G165244 = Array.prototype.slice.apply(arguments);
          G165243 = (function (arguments)            {
            var G165245 = G165244;
            return (((function ()              {
              if ((!((((G165245 instanceof Array))&&(((G165245.length)>0))))))                {
                return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
                } else                 {
                return ((function (arguments, fun)                  {
                  return ((function (arguments)                    {
                    var G165247 = Array.prototype.slice.call(G165245, 1);
                    return (((function ()                      {
                      if ((!((((G165247 instanceof Array))&&(((G165247.length)>0))))))                        {
                        return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
                        } else                         {
                        return ((function (arguments)                          {
                          var aMatchArray165249 = G165247[0];
                          if ((((!(((aMatchArray165249.length)===0))))||((!((aMatchArray165249 instanceof Array))))))                            {
                            return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
                            };
                          return ((function (arguments)                            {
                            var aMatchArray165250 = Array.prototype.slice.call(G165247, 1);
                            if ((((!(((aMatchArray165250.length)===1))))||((!((aMatchArray165250 instanceof Array))))))                              {
                              return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
                              };
                            var acc = aMatchArray165250[0];
                            return (acc);
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
                          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
                        };
                      }))());
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G165245[0]));
                };
              }))());
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G165243))))            {
            return (G165243);
            };
          G165243 = (function (arguments)            {
            var G165251 = G165244;
            return (((function ()              {
              if ((!((((G165251 instanceof Array))&&(((G165251.length)>0))))))                {
                return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
                } else                 {
                return ((function (arguments, fun)                  {
                  return ((function (arguments)                    {
                    var G165253 = Array.prototype.slice.call(G165251, 1);
                    return (((function ()                      {
                      if ((!((((G165253 instanceof Array))&&(((G165253.length)>0))))))                        {
                        return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
                        } else                         {
                        return ((function (arguments)                          {
                          var aMatchArray165255 = G165253[0];
                          if ((((!(((aMatchArray165255.length)>=1))))||((!((aMatchArray165255 instanceof Array))))))                            {
                            return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
                            };
                          var hd = aMatchArray165255[0];
                          var tl = Array.prototype.slice.call(aMatchArray165255, 1);
                          return ((function (arguments)                            {
                            var aMatchArray165256 = Array.prototype.slice.call(G165253, 1);
                            if ((((!(((aMatchArray165256.length)===1))))||((!((aMatchArray165256 instanceof Array))))))                              {
                              return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
                              };
                            var acc = aMatchArray165256[0];
                            return (((fun(hd))?(recur(fun, tl, acc.concat([hd]))) : (recur(fun, tl, acc))));
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
                          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
                        };
                      }))());
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G165251[0]));
                };
              }))());
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G165243))))            {
            return (G165243);
            };
          G165243 = (function (arguments, anythingElseminus165242)            {
            throw ((("Match fail in hooves/lisp-idioms-filter against: ")+anythingElseminus165242));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G165244);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G165243))))            {
            return (G165243);
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array fun [:] acc) acc) ((array fun [: hd (tail tl)] acc) (if (fun hd) (recur fun tl (\.\. acc (concat [: hd]))) (recur fun tl acc))) (anything-else-165242 (_throw (_+ \"Match fail in hooves/lisp-idioms-filter against: \" anything-else-165242))))) for value ")+G165244));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
        });
      returnValueminus165237 = actualFunminus165239.apply(this, arguments);
      while (recurP165240(returnValueminus165237))        {
        returnValueminus165237 = actualFunminus165239.apply(this, returnValueminus165237.args);
        };
      return (returnValueminus165237);
      });
    currentModuleminus165182.apply = (function (f, anArray)      {
      return (f.apply(undefined, anArray));
      });
    currentModuleminus165182.funcall = (function ()      {
      var returnValueminus165302 = undefined;
      var recur = (function ()        {
        return ({          
          recurSigil:"recurSigilminus165301",
          args:arguments
        });
        });
      var recurP165305 = (function (valminus165306)        {
        return (((valminus165306.recurSigil)===("recurSigilminus165301")));
        });
      var actualFunminus165304 = (function ()        {
        return ((function (arguments)          {
          var G165308 = undefined;
          var G165309 = Array.prototype.slice.apply(arguments);
          G165308 = (function (arguments)            {
            var aMatchArray165310 = G165309;
            if ((((!(((aMatchArray165310.length)>=1))))||((!((aMatchArray165310 instanceof Array))))))              {
              return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
              };
            var f = aMatchArray165310[0];
            var args = Array.prototype.slice.call(aMatchArray165310, 1);
            return ((currentModuleminus165182.apply)(f, args));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G165308))))            {
            return (G165308);
            };
          G165308 = (function (arguments, anythingElseminus165307)            {
            throw ((("Match fail in hooves/lisp-idioms-funcall against: ")+anythingElseminus165307));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G165309);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G165308))))            {
            return (G165308);
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array f (tail args)) (apply f args)) (anything-else-165307 (_throw (_+ \"Match fail in hooves/lisp-idioms-funcall against: \" anything-else-165307))))) for value ")+G165309));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
        });
      returnValueminus165302 = actualFunminus165304.apply(this, arguments);
      while (recurP165305(returnValueminus165302))        {
        returnValueminus165302 = actualFunminus165304.apply(this, returnValueminus165302.args);
        };
      return (returnValueminus165302);
      });
    }))();
  return (currentModuleminus165182);
  }))