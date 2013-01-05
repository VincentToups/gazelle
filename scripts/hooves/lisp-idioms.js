define([], (function ()  {
  var currentModuleminus80383 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus80383 = value;
    });
  ((function ()    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    currentModuleminus80383.append = (function ()      {
      return Array.prototype.concat.apply([], Array.prototype.slice.apply(arguments));
      });
    currentModuleminus80383.filter = (function ()      {
      var returnValueminus80438 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus80437",
          args:arguments
        };
        });
      var recurP80441 = (function (valminus80442)        {
        return (valminus80442.recurSigil===("recurSigilminus80437"));
        });
      var actualFunminus80440 = (function ()        {
        return (function (arguments)          {
          var G80444 = undefined;
          var G80445 = Array.prototype.slice.apply(arguments);
          G80444 = (function (arguments)            {
            var G80446 = G80445;
            return ((function ()              {
              if ((!((((G80446 instanceof Array))&&((G80446.length>0))))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                } else                 {
                return (function (arguments, fun)                  {
                  return (function (arguments)                    {
                    var G80448 = Array.prototype.slice.call(G80446, 1);
                    return ((function ()                      {
                      if ((!((((G80448 instanceof Array))&&((G80448.length>0))))))                        {
                        return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                        } else                         {
                        return (function (arguments, G80450)                          {
                          return ((function ()                            {
                            if ((!((((G80450 instanceof Array))&&((G80450.length===0))))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              } else                               {
                              return (function (arguments)                                {
                                var G80451 = Array.prototype.slice.call(G80448, 1);
                                return ((function ()                                  {
                                  if ((!((((G80451 instanceof Array))&&((G80451.length>0))))))                                    {
                                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                    } else                                     {
                                    return (function (arguments, acc)                                      {
                                      return (function (arguments, G80453)                                        {
                                        return ((function ()                                          {
                                          if ((!((((G80453 instanceof Array))&&((G80453.length===0))))))                                            {
                                            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                            } else                                             {
                                            return acc;
                                            };
                                          }))();
                                        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), Array.prototype.slice.call(G80451, 1));
                                      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G80451[0]);
                                    };
                                  }))();
                                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                              };
                            }))();
                          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G80448[0]);
                        };
                      }))();
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G80446[0]);
                };
              }))();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80444))))            {
            return G80444;
            };
          G80444 = (function (arguments)            {
            var G80454 = G80445;
            return ((function ()              {
              if ((!((((G80454 instanceof Array))&&((G80454.length>0))))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                } else                 {
                return (function (arguments, fun)                  {
                  return (function (arguments)                    {
                    var G80456 = Array.prototype.slice.call(G80454, 1);
                    return ((function ()                      {
                      if ((!((((G80456 instanceof Array))&&((G80456.length>0))))))                        {
                        return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                        } else                         {
                        return (function (arguments)                          {
                          var G80458 = G80456[0];
                          return ((function ()                            {
                            if ((!((((G80458 instanceof Array))&&((G80458.length>0))))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              } else                               {
                              return (function (arguments, hd)                                {
                                return (function (arguments, tl)                                  {
                                  return (function (arguments)                                    {
                                    var G80460 = Array.prototype.slice.call(G80456, 1);
                                    return ((function ()                                      {
                                      if ((!((((G80460 instanceof Array))&&((G80460.length>0))))))                                        {
                                        return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                        } else                                         {
                                        return (function (arguments, acc)                                          {
                                          return (function (arguments, G80462)                                            {
                                            return ((function ()                                              {
                                              if ((!((((G80462 instanceof Array))&&((G80462.length===0))))))                                                {
                                                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                                } else                                                 {
                                                return ((fun(hd))?(recur(fun, tl, acc.concat([hd]))) : (recur(fun, tl, acc)));
                                                };
                                              }))();
                                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), Array.prototype.slice.call(G80460, 1));
                                          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G80460[0]);
                                        };
                                      }))();
                                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), Array.prototype.slice.call(G80458, 1));
                                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G80458[0]);
                              };
                            }))();
                          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                        };
                      }))();
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G80454[0]);
                };
              }))();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80444))))            {
            return G80444;
            };
          G80444 = (function (arguments, anythingElseminus80443)            {
            throw ((("Match fail in hooves/lisp-idioms-filter against: ")+anythingElseminus80443));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G80445);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80444))))            {
            return G80444;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array fun [:] acc) acc) ((array fun [: hd (tail tl)] acc) (if (fun hd) (recur fun tl (\.\. acc (concat [: hd]))) (recur fun tl acc))) (anything-else-80443 (_throw (_+ ''Match fail in hooves/lisp-idioms-filter against: '' anything-else-80443))))) for value ")+G80445));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus80438 = actualFunminus80440.apply(this, arguments);
      while (recurP80441(returnValueminus80438))        {
        returnValueminus80438 = actualFunminus80440.apply(this, returnValueminus80438.args);
        };
      return returnValueminus80438;
      });
    currentModuleminus80383.apply = (function (f, anArray)      {
      return f.apply(undefined, anArray);
      });
    currentModuleminus80383.funcall = (function ()      {
      var returnValueminus80508 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus80507",
          args:arguments
        };
        });
      var recurP80511 = (function (valminus80512)        {
        return (valminus80512.recurSigil===("recurSigilminus80507"));
        });
      var actualFunminus80510 = (function ()        {
        return (function (arguments)          {
          var G80514 = undefined;
          var G80515 = Array.prototype.slice.apply(arguments);
          G80514 = (function (arguments)            {
            var G80516 = G80515;
            return ((function ()              {
              if ((!((((G80516 instanceof Array))&&((G80516.length>0))))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                } else                 {
                return (function (arguments, f)                  {
                  return (function (arguments, args)                    {
                    return currentModuleminus80383.apply(f, args);
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), Array.prototype.slice.call(G80516, 1));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G80516[0]);
                };
              }))();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80514))))            {
            return G80514;
            };
          G80514 = (function (arguments, anythingElseminus80513)            {
            throw ((("Match fail in hooves/lisp-idioms-funcall against: ")+anythingElseminus80513));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G80515);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80514))))            {
            return G80514;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array f (tail args)) (apply f args)) (anything-else-80513 (_throw (_+ ''Match fail in hooves/lisp-idioms-funcall against: '' anything-else-80513))))) for value ")+G80515));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus80508 = actualFunminus80510.apply(this, arguments);
      while (recurP80511(returnValueminus80508))        {
        returnValueminus80508 = actualFunminus80510.apply(this, returnValueminus80508.args);
        };
      return returnValueminus80508;
      });
    var let = "macro - no dynamic value.";
    }))();
  return currentModuleminus80383;
  }))