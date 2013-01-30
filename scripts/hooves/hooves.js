define([], (function ()  {
  var currentModuleminus91009 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus91009 = value;
    });
  (function (arguments)    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    currentModuleminus91009.definedPredicate = (function (x)      {
      return (!((((typeof x))===("undefined"))));
      });
    currentModuleminus91009.undefinedPredicate = (function (x)      {
      return (((typeof x))===("undefined"));
      });
    currentModuleminus91009.numberPredicate = (function (o)      {
      return (((typeof o))===("number"));
      });
    currentModuleminus91009.stringPredicate = (function (o)      {
      return (((typeof o))===("string"));
      });
    currentModuleminus91009.arrayPredicate = (function (o)      {
      return (o instanceof Array);
      });
    currentModuleminus91009.emptyPredicate = (function (o)      {
      return (0===o.length);
      });
    var collectBracesminus = "macro - no dynamic value.";
    var at = "macro - no dynamic value.";
    currentModuleminus91009.TripleEqualminus_ = (function (partial)      {
      return (function (open)        {
        return (open===partial);
        });
      });
    var when = "macro - no dynamic value.";
    var unless = "macro - no dynamic value.";
    currentModuleminus91009.Delay = (function (lambdaExpr)      {
      this.lambdaExpr = lambdaExpr;
      return this;
      });
    currentModuleminus91009.Delay.prototype.value = (function ()      {
      return this.lambdaExpr();
      });
    var delay = "macro - no dynamic value.";
    currentModuleminus91009.undelay = (function (o)      {
      return (function (arguments)        {
        var G91245 = undefined;
        var G91246 = o;
        G91245 = (function (arguments)          {
          var matchValminus91247 = G91246;
          var matchFunExprminus91249 = (function (G91248)            {
            return (G91248 instanceof currentModuleminus91009.Delay);
            });
          if ((!(matchFunExprminus91249(matchValminus91247))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var delayObject = matchValminus91247;
          return delayObject.value();
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G91245))))          {
          return G91245;
          };
        throw ((("match-fail at ((match o ((instance Delay delay-object) (delay-object\.value)))) for value ")+(JSON.stringify(G91246))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var defineTo = "macro - no dynamic value.";
    var fortimes = "macro - no dynamic value.";
    currentModuleminus91009.range = (function ()      {
      var returnValueminus91292 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus91291",
          args:arguments
        };
        });
      var recurP91295 = (function (valminus91296)        {
        if ((("undefined")===((typeof valminus91296))))          {
          return false;
          };
        return (valminus91296.recurSigil===("recurSigilminus91291"));
        });
      var actualFunminus91294 = (function ()        {
        return (function (arguments)          {
          var G91298 = undefined;
          var G91299 = Array.prototype.slice.apply(arguments);
          G91298 = (function (arguments)            {
            var matchValminus91300 = G91299;
            if ((!((("object")===((typeof matchValminus91300))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((4===matchValminus91300.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchValminus91300[0];
            var step = matchValminus91300[1];
            var stop = matchValminus91300[2];
            var transform = matchValminus91300[3];
            var out = [];
            for (var i = start;(i<stop);i = (i+step))              {
              out.push(transform(i));
              };
            return out;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G91298))))            {
            return G91298;
            };
          G91298 = (function (arguments)            {
            var matchValminus91301 = G91299;
            if ((!((("object")===((typeof matchValminus91301))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchValminus91301.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchValminus91301[0];
            var step = matchValminus91301[1];
            var stop = matchValminus91301[2];
            return recur(start, step, stop, (function (v)              {
              return v;
              }));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G91298))))            {
            return G91298;
            };
          G91298 = (function (arguments)            {
            var matchValminus91302 = G91299;
            if ((!((("object")===((typeof matchValminus91302))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchValminus91302.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchValminus91302[0];
            var stop = matchValminus91302[1];
            return recur(start, 1, stop, (function (v)              {
              return v;
              }));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G91298))))            {
            return G91298;
            };
          G91298 = (function (arguments)            {
            var matchValminus91303 = G91299;
            if ((!((("object")===((typeof matchValminus91303))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchValminus91303.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var stop = matchValminus91303[0];
            return recur(0, 1, stop, (function (v)              {
              return v;
              }));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G91298))))            {
            return G91298;
            };
          G91298 = (function (arguments)            {
            var matchValminus91304 = G91299;
            var anythingElseminus91297 = matchValminus91304;
            throw ((("Match fail in hooves/hooves-range against: ")+anythingElseminus91297));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G91298))))            {
            return G91298;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: start step stop transform] (var out [:]) (for ((var i start) (_< i stop) (set! i (_+ i step))) (out\.push (transform i))) out) ([: start step stop] (recur start step stop (lambda (v) v))) ([: start stop] (recur start 1 stop (lambda (v) v))) ([: stop] (recur 0 1 stop (lambda (v) v))) (anything-else-91297 (_throw (_+ ''Match fail in hooves/hooves-range against: '' anything-else-91297))))) for value ")+(JSON.stringify(G91299))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus91292 = actualFunminus91294.apply(this, arguments);
      while (recurP91295(returnValueminus91292))        {
        returnValueminus91292 = actualFunminus91294.apply(this, returnValueminus91292.args);
        };
      return returnValueminus91292;
      });
    var withSlots = "macro - no dynamic value.";
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus91009;
  }))