define([], (function ()  {
  var currentModuleminus129466 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus129466 = value;
    });
  (function (arguments)    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    currentModuleminus129466.definedPredicate = (function (x)      {
      return (!((((typeof x))===("undefined"))));
      });
    currentModuleminus129466.undefinedPredicate = (function (x)      {
      return (((typeof x))===("undefined"));
      });
    currentModuleminus129466.numberPredicate = (function (o)      {
      return (((typeof o))===("number"));
      });
    currentModuleminus129466.stringPredicate = (function (o)      {
      return (((typeof o))===("string"));
      });
    currentModuleminus129466.arrayPredicate = (function (o)      {
      return (o instanceof Array);
      });
    currentModuleminus129466.emptyPredicate = (function (o)      {
      return (0===o.length);
      });
    var collectBracesminus = "macro - no dynamic value.";
    var at = "macro - no dynamic value.";
    currentModuleminus129466.TripleEqualminus_ = (function (partial)      {
      return (function (open)        {
        return (open===partial);
        });
      });
    var when = "macro - no dynamic value.";
    var unless = "macro - no dynamic value.";
    currentModuleminus129466.Delay = (function (lambdaExpr)      {
      this.lambdaExpr = lambdaExpr;
      return this;
      });
    currentModuleminus129466.Delay.prototype.value = (function ()      {
      return this.lambdaExpr();
      });
    var delay = "macro - no dynamic value.";
    currentModuleminus129466.undelay = (function (o)      {
      return (function (arguments)        {
        var G129702 = undefined;
        var G129703 = o;
        G129702 = (function (arguments)          {
          var matchValminus129704 = G129703;
          var matchFunExprminus129706 = (function (G129705)            {
            return (G129705 instanceof currentModuleminus129466.Delay);
            });
          if ((!(matchFunExprminus129706(matchValminus129704))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var delayObject = matchValminus129704;
          return delayObject.value();
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G129702))))          {
          return G129702;
          };
        throw ((("match-fail at ((match o ((instance Delay delay-object) (delay-object\.value)))) for value ")+(JSON.stringify(G129703))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var defineTo = "macro - no dynamic value.";
    var fortimes = "macro - no dynamic value.";
    currentModuleminus129466.range = (function ()      {
      var returnValueminus129749 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus129748",
          args:arguments
        };
        });
      var recurP129752 = (function (valminus129753)        {
        if ((("undefined")===((typeof valminus129753))))          {
          return false;
          };
        return (valminus129753.recurSigil===("recurSigilminus129748"));
        });
      var actualFunminus129751 = (function ()        {
        return (function (arguments)          {
          var G129755 = undefined;
          var G129756 = Array.prototype.slice.apply(arguments);
          G129755 = (function (arguments)            {
            var matchValminus129757 = G129756;
            if ((!((("object")===((typeof matchValminus129757))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((4===matchValminus129757.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchValminus129757[0];
            var step = matchValminus129757[1];
            var stop = matchValminus129757[2];
            var transform = matchValminus129757[3];
            var out = [];
            for (var i = start;(i<stop);i = (i+step))              {
              out.push(transform(i));
              };
            return out;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G129755))))            {
            return G129755;
            };
          G129755 = (function (arguments)            {
            var matchValminus129758 = G129756;
            if ((!((("object")===((typeof matchValminus129758))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchValminus129758.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchValminus129758[0];
            var step = matchValminus129758[1];
            var stop = matchValminus129758[2];
            return recur(start, step, stop, (function (v)              {
              return v;
              }));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G129755))))            {
            return G129755;
            };
          G129755 = (function (arguments)            {
            var matchValminus129759 = G129756;
            if ((!((("object")===((typeof matchValminus129759))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchValminus129759.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchValminus129759[0];
            var stop = matchValminus129759[1];
            return recur(start, 1, stop, (function (v)              {
              return v;
              }));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G129755))))            {
            return G129755;
            };
          G129755 = (function (arguments)            {
            var matchValminus129760 = G129756;
            if ((!((("object")===((typeof matchValminus129760))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchValminus129760.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var stop = matchValminus129760[0];
            return recur(0, 1, stop, (function (v)              {
              return v;
              }));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G129755))))            {
            return G129755;
            };
          G129755 = (function (arguments)            {
            var matchValminus129761 = G129756;
            var anythingElseminus129754 = matchValminus129761;
            throw ((("Match fail in hooves/hooves-range against: ")+anythingElseminus129754));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G129755))))            {
            return G129755;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: start step stop transform] (var out [:]) (for ((var i start) (_< i stop) (set! i (_+ i step))) (out\.push (transform i))) out) ([: start step stop] (recur start step stop (lambda (v) v))) ([: start stop] (recur start 1 stop (lambda (v) v))) ([: stop] (recur 0 1 stop (lambda (v) v))) (anything-else-129754 (_throw (_+ ''Match fail in hooves/hooves-range against: '' anything-else-129754))))) for value ")+(JSON.stringify(G129756))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus129749 = actualFunminus129751.apply(this, arguments);
      while (recurP129752(returnValueminus129749))        {
        returnValueminus129749 = actualFunminus129751.apply(this, returnValueminus129749.args);
        };
      return returnValueminus129749;
      });
    var withSlots = "macro - no dynamic value.";
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus129466;
  }))