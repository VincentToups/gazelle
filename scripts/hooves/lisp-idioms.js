((define))([], (function ()  {
  var currentModuleminus83601 = {    
    
  };
  ((function ()    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    currentModuleminus83601.append = (function ()      {
      return (Array.prototype.concat.apply([], Array.prototype.slice.apply(arguments)));
      });
    currentModuleminus83601.filter = (function ()      {
      var returnValueminus83656 = undefined;
      var recur = (function ()        {
        return ({          
          recurSigil:"recurSigilminus83655",
          args:arguments
        });
        });
      var recurP83659 = (function (valminus83660)        {
        return (((valminus83660.recurSigil)===("recurSigilminus83655")));
        });
      var actualFunminus83658 = (function ()        {
        return ((function (arguments)          {
          var G83662 = undefined;
          var G83663 = Array.prototype.slice.apply(arguments);
          G83662 = (function (arguments)            {
            var G83664 = G83663;
            return (((function ()              {
              if ((!((((G83664 instanceof Array))&&(((G83664.length)>0))))))                {
                return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
                } else                 {
                return ((function (arguments, fun)                  {
                  return ((function (arguments)                    {
                    var G83666 = Array.prototype.slice.call(G83664, 1);
                    return (((function ()                      {
                      if ((!((((G83666 instanceof Array))&&(((G83666.length)>0))))))                        {
                        return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
                        } else                         {
                        return ((function (arguments)                          {
                          var aMatchArray83668 = G83666[0];
                          if ((((!(((aMatchArray83668.length)===0))))||((!((aMatchArray83668 instanceof Array))))))                            {
                            return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
                            };
                          return ((function (arguments)                            {
                            var aMatchArray83669 = Array.prototype.slice.call(G83666, 1);
                            if ((((!(((aMatchArray83669.length)===1))))||((!((aMatchArray83669 instanceof Array))))))                              {
                              return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
                              };
                            var acc = aMatchArray83669[0];
                            return (acc);
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
                          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
                        };
                      }))());
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G83664[0]));
                };
              }))());
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G83662))))            {
            return (G83662);
            };
          G83662 = (function (arguments)            {
            var G83670 = G83663;
            return (((function ()              {
              if ((!((((G83670 instanceof Array))&&(((G83670.length)>0))))))                {
                return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
                } else                 {
                return ((function (arguments, fun)                  {
                  return ((function (arguments)                    {
                    var G83672 = Array.prototype.slice.call(G83670, 1);
                    return (((function ()                      {
                      if ((!((((G83672 instanceof Array))&&(((G83672.length)>0))))))                        {
                        return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
                        } else                         {
                        return ((function (arguments)                          {
                          var aMatchArray83674 = G83672[0];
                          if ((((!(((aMatchArray83674.length)>=1))))||((!((aMatchArray83674 instanceof Array))))))                            {
                            return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
                            };
                          var hd = aMatchArray83674[0];
                          var tl = Array.prototype.slice.call(aMatchArray83674, 1);
                          return ((function (arguments)                            {
                            var aMatchArray83675 = Array.prototype.slice.call(G83672, 1);
                            if ((((!(((aMatchArray83675.length)===1))))||((!((aMatchArray83675 instanceof Array))))))                              {
                              return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
                              };
                            var acc = aMatchArray83675[0];
                            return (((fun(hd))?(recur(fun, tl, acc.concat([hd]))) : (recur(fun, tl, acc))));
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
                          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
                        };
                      }))());
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G83670[0]));
                };
              }))());
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G83662))))            {
            return (G83662);
            };
          G83662 = (function (arguments, anythingElseminus83661)            {
            throw ((("Match fail in hooves/lisp-idioms-filter against: ")+anythingElseminus83661));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G83663);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G83662))))            {
            return (G83662);
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array fun [:] acc) acc) ((array fun [: hd (tail tl)] acc) (if (fun hd) (recur fun tl (\.\. acc (concat [: hd]))) (recur fun tl acc))) (anything-else-83661 (_throw (_+ ''Match fail in hooves/lisp-idioms-filter against: '' anything-else-83661))))) for value ")+G83663));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
        });
      returnValueminus83656 = actualFunminus83658.apply(this, arguments);
      while (recurP83659(returnValueminus83656))        {
        returnValueminus83656 = actualFunminus83658.apply(this, returnValueminus83656.args);
        };
      return (returnValueminus83656);
      });
    currentModuleminus83601.apply = (function (f, anArray)      {
      return (f.apply(undefined, anArray));
      });
    currentModuleminus83601.funcall = (function ()      {
      var returnValueminus83721 = undefined;
      var recur = (function ()        {
        return ({          
          recurSigil:"recurSigilminus83720",
          args:arguments
        });
        });
      var recurP83724 = (function (valminus83725)        {
        return (((valminus83725.recurSigil)===("recurSigilminus83720")));
        });
      var actualFunminus83723 = (function ()        {
        return ((function (arguments)          {
          var G83727 = undefined;
          var G83728 = Array.prototype.slice.apply(arguments);
          G83727 = (function (arguments)            {
            var aMatchArray83729 = G83728;
            if ((((!(((aMatchArray83729.length)>=1))))||((!((aMatchArray83729 instanceof Array))))))              {
              return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
              };
            var f = aMatchArray83729[0];
            var args = Array.prototype.slice.call(aMatchArray83729, 1);
            return ((currentModuleminus83601.apply)(f, args));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G83727))))            {
            return (G83727);
            };
          G83727 = (function (arguments, anythingElseminus83726)            {
            throw ((("Match fail in hooves/lisp-idioms-funcall against: ")+anythingElseminus83726));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G83728);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G83727))))            {
            return (G83727);
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array f (tail args)) (apply f args)) (anything-else-83726 (_throw (_+ ''Match fail in hooves/lisp-idioms-funcall against: '' anything-else-83726))))) for value ")+G83728));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
        });
      returnValueminus83721 = actualFunminus83723.apply(this, arguments);
      while (recurP83724(returnValueminus83721))        {
        returnValueminus83721 = actualFunminus83723.apply(this, returnValueminus83721.args);
        };
      return (returnValueminus83721);
      });
    var let = "macro - no dynamic value.";
    }))();
  return (currentModuleminus83601);
  }))