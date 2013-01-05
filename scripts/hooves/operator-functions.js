define(["hooves/lisp-idioms"], (function (moduleminus295baa4e1e)  {
  var currentModuleminus80380 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus80380 = value;
    });
  ((function ()    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    // ("hooves/lisp-idioms" (:as apply funcall))
    ;
    currentModuleminus80380.plus = (function ()      {
      var returnValueminus80550 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus80549",
          args:arguments
        };
        });
      var recurP80553 = (function (valminus80554)        {
        return (valminus80554.recurSigil===("recurSigilminus80549"));
        });
      var actualFunminus80552 = (function ()        {
        return (function (arguments)          {
          var G80556 = undefined;
          var G80557 = Array.prototype.slice.apply(arguments);
          G80556 = (function (arguments)            {
            var G80558 = G80557;
            return ((function ()              {
              if ((!((((G80558 instanceof Array))&&((G80558.length>0))))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                } else                 {
                return (function (arguments, hd)                  {
                  return (function (arguments, tl)                    {
                    var result = hd;
                    for (i in (tl))                      {
                      result = (result+(tl[i]));
                      };
                    return result;
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), Array.prototype.slice.call(G80558, 1));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G80558[0]);
                };
              }))();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80556))))            {
            return G80556;
            };
          G80556 = (function (arguments, anythingElseminus80555)            {
            throw ((("Match fail in hooves/operator-functions-+ against: ")+anythingElseminus80555));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G80557);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80556))))            {
            return G80556;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array hd (tail tl)) (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result) (anything-else-80555 (_throw (_+ ''Match fail in hooves/operator-functions-+ against: '' anything-else-80555))))) for value ")+G80557));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus80550 = actualFunminus80552.apply(this, arguments);
      while (recurP80553(returnValueminus80550))        {
        returnValueminus80550 = actualFunminus80552.apply(this, returnValueminus80550.args);
        };
      return returnValueminus80550;
      });
    currentModuleminus80380.minus = (function ()      {
      var returnValueminus80583 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus80582",
          args:arguments
        };
        });
      var recurP80586 = (function (valminus80587)        {
        return (valminus80587.recurSigil===("recurSigilminus80582"));
        });
      var actualFunminus80585 = (function ()        {
        return (function (arguments)          {
          var G80589 = undefined;
          var G80590 = Array.prototype.slice.apply(arguments);
          G80589 = (function (arguments)            {
            var G80591 = G80590;
            return ((function ()              {
              if ((!((((G80591 instanceof Array))&&((G80591.length>0))))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                } else                 {
                return (function (arguments, hd)                  {
                  return (function (arguments, tl)                    {
                    return (hd-(moduleminus295baa4e1e.apply(currentModuleminus80380.plus, tl)));
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), Array.prototype.slice.call(G80591, 1));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G80591[0]);
                };
              }))();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80589))))            {
            return G80589;
            };
          G80589 = (function (arguments, anythingElseminus80588)            {
            throw ((("Match fail in hooves/operator-functions-- against: ")+anythingElseminus80588));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G80590);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80589))))            {
            return G80589;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array hd (tail tl)) (_- hd (apply + tl))) (anything-else-80588 (_throw (_+ ''Match fail in hooves/operator-functions-- against: '' anything-else-80588))))) for value ")+G80590));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus80583 = actualFunminus80585.apply(this, arguments);
      while (recurP80586(returnValueminus80583))        {
        returnValueminus80583 = actualFunminus80585.apply(this, returnValueminus80583.args);
        };
      return returnValueminus80583;
      });
    currentModuleminus80380.times = (function ()      {
      var returnValueminus80616 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus80615",
          args:arguments
        };
        });
      var recurP80619 = (function (valminus80620)        {
        return (valminus80620.recurSigil===("recurSigilminus80615"));
        });
      var actualFunminus80618 = (function ()        {
        return (function (arguments)          {
          var G80622 = undefined;
          var G80623 = Array.prototype.slice.apply(arguments);
          G80622 = (function (arguments)            {
            var G80624 = G80623;
            return ((function ()              {
              if ((!((((G80624 instanceof Array))&&((G80624.length>0))))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                } else                 {
                return (function (arguments, hd)                  {
                  return (function (arguments, tl)                    {
                    var result = hd;
                    for (i in (tl))                      {
                      result = (result*(tl[i]));
                      };
                    return result;
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), Array.prototype.slice.call(G80624, 1));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G80624[0]);
                };
              }))();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80622))))            {
            return G80622;
            };
          G80622 = (function (arguments, anythingElseminus80621)            {
            throw ((("Match fail in hooves/operator-functions-* against: ")+anythingElseminus80621));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G80623);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80622))))            {
            return G80622;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array hd (tail tl)) (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result) (anything-else-80621 (_throw (_+ ''Match fail in hooves/operator-functions-* against: '' anything-else-80621))))) for value ")+G80623));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus80616 = actualFunminus80618.apply(this, arguments);
      while (recurP80619(returnValueminus80616))        {
        returnValueminus80616 = actualFunminus80618.apply(this, returnValueminus80616.args);
        };
      return returnValueminus80616;
      });
    currentModuleminus80380.divide = (function ()      {
      var returnValueminus80649 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus80648",
          args:arguments
        };
        });
      var recurP80652 = (function (valminus80653)        {
        return (valminus80653.recurSigil===("recurSigilminus80648"));
        });
      var actualFunminus80651 = (function ()        {
        return (function (arguments)          {
          var G80655 = undefined;
          var G80656 = Array.prototype.slice.apply(arguments);
          G80655 = (function (arguments)            {
            var G80657 = G80656;
            return ((function ()              {
              if ((!((((G80657 instanceof Array))&&((G80657.length>0))))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                } else                 {
                return (function (arguments, hd)                  {
                  return (function (arguments, tl)                    {
                    return (hd/(moduleminus295baa4e1e.apply(currentModuleminus80380.times, tl)));
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), Array.prototype.slice.call(G80657, 1));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G80657[0]);
                };
              }))();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80655))))            {
            return G80655;
            };
          G80655 = (function (arguments, anythingElseminus80654)            {
            throw ((("Match fail in hooves/operator-functions-/ against: ")+anythingElseminus80654));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G80656);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80655))))            {
            return G80655;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array hd (tail tl)) (_/ hd (apply * tl))) (anything-else-80654 (_throw (_+ ''Match fail in hooves/operator-functions-/ against: '' anything-else-80654))))) for value ")+G80656));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus80649 = actualFunminus80651.apply(this, arguments);
      while (recurP80652(returnValueminus80649))        {
        returnValueminus80649 = actualFunminus80651.apply(this, returnValueminus80649.args);
        };
      return returnValueminus80649;
      });
    var defineExternalBinop = "macro - no dynamic value.";
    var defineExternalBinops = "macro - no dynamic value.";
    currentModuleminus80380.lessThan = (function (G80668, G80669)      {
      return (G80668<G80669);
      });
    currentModuleminus80380.lessThanequal = (function (G80695, G80696)      {
      return (G80695<=G80696);
      });
    currentModuleminus80380.greaterThan = (function (G80722, G80723)      {
      return (G80722>G80723);
      });
    currentModuleminus80380.greaterThanequal = (function (G80749, G80750)      {
      return (G80749>=G80750);
      });
    currentModuleminus80380.ampersand = (function (G80776, G80777)      {
      return (G80776&G80777);
      });
    currentModuleminus80380.pipe = (function (G80803, G80804)      {
      return (G80803|G80804);
      });
    currentModuleminus80380.equalequal = (function (G80830, G80831)      {
      return (G80830==G80831);
      });
    currentModuleminus80380.equalequalequal = (function (G80857, G80858)      {
      return (G80857===G80858);
      });
    currentModuleminus80380.modsign = (function (G80884, G80885)      {
      return (G80884%G80885);
      });
    currentModuleminus80380.caret = (function (G80911, G80912)      {
      return (G80911^G80912);
      });
    currentModuleminus80380.lessThanlessThan = (function (G80938, G80939)      {
      return (G80938<<G80939);
      });
    currentModuleminus80380.greaterThangreaterThan = (function (G80965, G80966)      {
      return (G80965>>G80966);
      });
    currentModuleminus80380.greaterThangreaterThangreaterThan = (function (G80992, G80993)      {
      return (G80992>>>G80993);
      });
    ;
    var ampersandampersand = "macro - no dynamic value.";
    var pipepipe = "macro - no dynamic value.";
    currentModuleminus80380.bang = (function (o)      {
      return (!(o));
      });
    var incr = "macro - no dynamic value.";
    var decr = "macro - no dynamic value.";
    }))();
  return currentModuleminus80380;
  }))