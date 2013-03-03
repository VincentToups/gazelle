define([], (function ()  {
  var currentModuleminus15988 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus15988 = value;
    });
  (function (arguments)    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    currentModuleminus15988.definedPredicate = (function (x)      {
      return (!((((typeof x))===("undefined"))));
      });
    currentModuleminus15988.undefinedPredicate = (function (x)      {
      return (((typeof x))===("undefined"));
      });
    currentModuleminus15988.numberPredicate = (function (o)      {
      return (((typeof o))===("number"));
      });
    currentModuleminus15988.stringPredicate = (function (o)      {
      return (((typeof o))===("string"));
      });
    currentModuleminus15988.arrayPredicate = (function (o)      {
      return (o instanceof Array);
      });
    currentModuleminus15988.emptyPredicate = (function (o)      {
      return (0===o.length);
      });
    var collectBracesminus = "macro - no dynamic value.";
    var at = "macro - no dynamic value.";
    currentModuleminus15988.TripleEqualminus_ = (function (partial)      {
      return (function (open)        {
        return (open===partial);
        });
      });
    var when = "macro - no dynamic value.";
    var unless = "macro - no dynamic value.";
    currentModuleminus15988.Delay = (function (lambdaExpr)      {
      this.lambdaExpr = lambdaExpr;
      return this;
      });
    currentModuleminus15988.Delay.prototype.value = (function ()      {
      return this.lambdaExpr();
      });
    var delay = "macro - no dynamic value.";
    currentModuleminus15988.undelay = (function (o)      {
      return (function (arguments)        {
        var G16224 = undefined;
        var G16225 = o;
        G16224 = (function (arguments)          {
          var matchValminus16226 = G16225;
          var matchFunExprminus16228 = (function (G16227)            {
            return (G16227 instanceof currentModuleminus15988.Delay);
            });
          if ((!(matchFunExprminus16228(matchValminus16226))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var delayObject = matchValminus16226;
          return delayObject.value();
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G16224))))          {
          return G16224;
          };
        throw ((("match-fail at ((match o ((instance Delay delay-object) (delay-object\.value)))) for value ")+(JSON.stringify(G16225))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var defineTo = "macro - no dynamic value.";
    var fortimes = "macro - no dynamic value.";
    currentModuleminus15988.range = (function ()      {
      var returnValueminus16271 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus16270",
          args:arguments
        };
        });
      var recurP16274 = (function (valminus16275)        {
        if ((("undefined")===((typeof valminus16275))))          {
          return false;
          };
        return (valminus16275.recurSigil===("recurSigilminus16270"));
        });
      var actualFunminus16273 = (function ()        {
        return (function (arguments)          {
          var G16277 = undefined;
          var G16278 = Array.prototype.slice.apply(arguments);
          G16277 = (function (arguments)            {
            var matchValminus16279 = G16278;
            if ((!((("object")===((typeof matchValminus16279))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((4===matchValminus16279.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchValminus16279[0];
            var step = matchValminus16279[1];
            var stop = matchValminus16279[2];
            var transform = matchValminus16279[3];
            var out = [];
            for (var i = start;(i<stop);i = (i+step))              {
              out.push(transform(i));
              };
            return out;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G16277))))            {
            return G16277;
            };
          G16277 = (function (arguments)            {
            var matchValminus16280 = G16278;
            if ((!((("object")===((typeof matchValminus16280))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchValminus16280.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchValminus16280[0];
            var step = matchValminus16280[1];
            var stop = matchValminus16280[2];
            return recur(start, step, stop, (function (v)              {
              return v;
              }));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G16277))))            {
            return G16277;
            };
          G16277 = (function (arguments)            {
            var matchValminus16281 = G16278;
            if ((!((("object")===((typeof matchValminus16281))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchValminus16281.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchValminus16281[0];
            var stop = matchValminus16281[1];
            return recur(start, 1, stop, (function (v)              {
              return v;
              }));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G16277))))            {
            return G16277;
            };
          G16277 = (function (arguments)            {
            var matchValminus16282 = G16278;
            if ((!((("object")===((typeof matchValminus16282))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchValminus16282.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var stop = matchValminus16282[0];
            return recur(0, 1, stop, (function (v)              {
              return v;
              }));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G16277))))            {
            return G16277;
            };
          G16277 = (function (arguments)            {
            var matchValminus16283 = G16278;
            var anythingElseminus16276 = matchValminus16283;
            throw ((("Match fail in hooves/hooves-range against: ")+anythingElseminus16276));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G16277))))            {
            return G16277;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: start step stop transform] (var out [:]) (for ((var i start) (_< i stop) (set! i (_+ i step))) (out\.push (transform i))) out) ([: start step stop] (recur start step stop (lambda (v) v))) ([: start stop] (recur start 1 stop (lambda (v) v))) ([: stop] (recur 0 1 stop (lambda (v) v))) (anything-else-16276 (_throw (_+ ''Match fail in hooves/hooves-range against: '' anything-else-16276))))) for value ")+(JSON.stringify(G16278))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus16271 = actualFunminus16273.apply(this, arguments);
      while (recurP16274(returnValueminus16271))        {
        returnValueminus16271 = actualFunminus16273.apply(this, returnValueminus16271.args);
        };
      return returnValueminus16271;
      });
    var withSlots = "macro - no dynamic value.";
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus15988;
  }))