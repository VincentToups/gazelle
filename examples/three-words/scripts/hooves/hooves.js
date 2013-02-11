define([], (function ()  {
  var currentModuleminus21976 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus21976 = value;
    });
  (function (arguments)    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    currentModuleminus21976.definedPredicate = (function (x)      {
      return (!((((typeof x))===("undefined"))));
      });
    currentModuleminus21976.undefinedPredicate = (function (x)      {
      return (((typeof x))===("undefined"));
      });
    currentModuleminus21976.numberPredicate = (function (o)      {
      return (((typeof o))===("number"));
      });
    currentModuleminus21976.stringPredicate = (function (o)      {
      return (((typeof o))===("string"));
      });
    currentModuleminus21976.arrayPredicate = (function (o)      {
      return (o instanceof Array);
      });
    currentModuleminus21976.emptyPredicate = (function (o)      {
      return (0===o.length);
      });
    var collectBracesminus = "macro - no dynamic value.";
    var at = "macro - no dynamic value.";
    currentModuleminus21976.TripleEqualminus_ = (function (partial)      {
      return (function (open)        {
        return (open===partial);
        });
      });
    var when = "macro - no dynamic value.";
    var unless = "macro - no dynamic value.";
    currentModuleminus21976.Delay = (function (lambdaExpr)      {
      this.lambdaExpr = lambdaExpr;
      return this;
      });
    currentModuleminus21976.Delay.prototype.value = (function ()      {
      return this.lambdaExpr();
      });
    var delay = "macro - no dynamic value.";
    currentModuleminus21976.undelay = (function (o)      {
      return (function (arguments)        {
        var G22212 = undefined;
        var G22213 = o;
        G22212 = (function (arguments)          {
          var matchValminus22214 = G22213;
          var matchFunExprminus22216 = (function (G22215)            {
            return (G22215 instanceof currentModuleminus21976.Delay);
            });
          if ((!(matchFunExprminus22216(matchValminus22214))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var delayObject = matchValminus22214;
          return delayObject.value();
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G22212))))          {
          return G22212;
          };
        throw ((("match-fail at ((match o ((instance Delay delay-object) (delay-object\.value)))) for value ")+(JSON.stringify(G22213))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var defineTo = "macro - no dynamic value.";
    var fortimes = "macro - no dynamic value.";
    currentModuleminus21976.range = (function ()      {
      var returnValueminus22259 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus22258",
          args:arguments
        };
        });
      var recurP22262 = (function (valminus22263)        {
        if ((("undefined")===((typeof valminus22263))))          {
          return false;
          };
        return (valminus22263.recurSigil===("recurSigilminus22258"));
        });
      var actualFunminus22261 = (function ()        {
        return (function (arguments)          {
          var G22265 = undefined;
          var G22266 = Array.prototype.slice.apply(arguments);
          G22265 = (function (arguments)            {
            var matchValminus22267 = G22266;
            if ((!((("object")===((typeof matchValminus22267))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((4===matchValminus22267.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchValminus22267[0];
            var step = matchValminus22267[1];
            var stop = matchValminus22267[2];
            var transform = matchValminus22267[3];
            var out = [];
            for (var i = start;(i<stop);i = (i+step))              {
              out.push(transform(i));
              };
            return out;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G22265))))            {
            return G22265;
            };
          G22265 = (function (arguments)            {
            var matchValminus22268 = G22266;
            if ((!((("object")===((typeof matchValminus22268))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchValminus22268.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchValminus22268[0];
            var step = matchValminus22268[1];
            var stop = matchValminus22268[2];
            return recur(start, step, stop, (function (v)              {
              return v;
              }));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G22265))))            {
            return G22265;
            };
          G22265 = (function (arguments)            {
            var matchValminus22269 = G22266;
            if ((!((("object")===((typeof matchValminus22269))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchValminus22269.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchValminus22269[0];
            var stop = matchValminus22269[1];
            return recur(start, 1, stop, (function (v)              {
              return v;
              }));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G22265))))            {
            return G22265;
            };
          G22265 = (function (arguments)            {
            var matchValminus22270 = G22266;
            if ((!((("object")===((typeof matchValminus22270))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchValminus22270.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var stop = matchValminus22270[0];
            return recur(0, 1, stop, (function (v)              {
              return v;
              }));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G22265))))            {
            return G22265;
            };
          G22265 = (function (arguments)            {
            var matchValminus22271 = G22266;
            var anythingElseminus22264 = matchValminus22271;
            throw ((("Match fail in hooves/hooves-range against: ")+anythingElseminus22264));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G22265))))            {
            return G22265;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: start step stop transform] (var out [:]) (for ((var i start) (_< i stop) (set! i (_+ i step))) (out\.push (transform i))) out) ([: start step stop] (recur start step stop (lambda (v) v))) ([: start stop] (recur start 1 stop (lambda (v) v))) ([: stop] (recur 0 1 stop (lambda (v) v))) (anything-else-22264 (_throw (_+ ''Match fail in hooves/hooves-range against: '' anything-else-22264))))) for value ")+(JSON.stringify(G22266))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus22259 = actualFunminus22261.apply(this, arguments);
      while (recurP22262(returnValueminus22259))        {
        returnValueminus22259 = actualFunminus22261.apply(this, returnValueminus22259.args);
        };
      return returnValueminus22259;
      });
    var withSlots = "macro - no dynamic value.";
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus21976;
  }))