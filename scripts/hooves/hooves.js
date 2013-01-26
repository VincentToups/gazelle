define([], (function ()  {
  var currentModuleminus267051 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus267051 = value;
    });
  (function (arguments)    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    currentModuleminus267051.definedPredicate = (function (x)      {
      return (!((((typeof x))===("undefined"))));
      });
    currentModuleminus267051.undefinedPredicate = (function (x)      {
      return (((typeof x))===("undefined"));
      });
    currentModuleminus267051.numberPredicate = (function (o)      {
      return (((typeof o))===("number"));
      });
    currentModuleminus267051.stringPredicate = (function (o)      {
      return (((typeof o))===("string"));
      });
    currentModuleminus267051.arrayPredicate = (function (o)      {
      return (o instanceof Array);
      });
    currentModuleminus267051.emptyPredicate = (function (o)      {
      return (0===o.length);
      });
    var collectBracesminus = "macro - no dynamic value.";
    var at = "macro - no dynamic value.";
    currentModuleminus267051.TripleEqualminus_ = (function (partial)      {
      return (function (open)        {
        return (open===partial);
        });
      });
    var when = "macro - no dynamic value.";
    var unless = "macro - no dynamic value.";
    currentModuleminus267051.Delay = (function (lambdaExpr)      {
      this.lambdaExpr = lambdaExpr;
      return this;
      });
    currentModuleminus267051.Delay.prototype.value = (function ()      {
      return this.lambdaExpr();
      });
    var delay = "macro - no dynamic value.";
    currentModuleminus267051.undelay = (function (o)      {
      return (function (arguments)        {
        var G267287 = undefined;
        var G267288 = o;
        G267287 = (function (arguments)          {
          var matchValminus267289 = G267288;
          var matchFunExprminus267291 = (function (G267290)            {
            return (G267290 instanceof currentModuleminus267051.Delay);
            });
          if ((!(matchFunExprminus267291(matchValminus267289))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var delayObject = matchValminus267289;
          return delayObject.value();
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G267287))))          {
          return G267287;
          };
        throw ((("match-fail at ((match o ((instance Delay delay-object) (delay-object\.value)))) for value ")+(JSON.stringify(G267288))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var defineTo = "macro - no dynamic value.";
    var fortimes = "macro - no dynamic value.";
    currentModuleminus267051.range = (function ()      {
      var returnValueminus267334 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus267333",
          args:arguments
        };
        });
      var recurP267337 = (function (valminus267338)        {
        if ((("undefined")===((typeof valminus267338))))          {
          return false;
          };
        return (valminus267338.recurSigil===("recurSigilminus267333"));
        });
      var actualFunminus267336 = (function ()        {
        return (function (arguments)          {
          var G267340 = undefined;
          var G267341 = Array.prototype.slice.apply(arguments);
          G267340 = (function (arguments)            {
            var matchValminus267342 = G267341;
            if ((!((("object")===((typeof matchValminus267342))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((4===matchValminus267342.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchValminus267342[0];
            var step = matchValminus267342[1];
            var stop = matchValminus267342[2];
            var transform = matchValminus267342[3];
            var out = [];
            for (var i = start;(i<stop);i = (i+step))              {
              out.push(transform(i));
              };
            return out;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G267340))))            {
            return G267340;
            };
          G267340 = (function (arguments)            {
            var matchValminus267343 = G267341;
            if ((!((("object")===((typeof matchValminus267343))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchValminus267343.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchValminus267343[0];
            var step = matchValminus267343[1];
            var stop = matchValminus267343[2];
            return recur(start, step, stop, (function (v)              {
              return v;
              }));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G267340))))            {
            return G267340;
            };
          G267340 = (function (arguments)            {
            var matchValminus267344 = G267341;
            if ((!((("object")===((typeof matchValminus267344))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchValminus267344.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchValminus267344[0];
            var stop = matchValminus267344[1];
            return recur(start, 1, stop, (function (v)              {
              return v;
              }));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G267340))))            {
            return G267340;
            };
          G267340 = (function (arguments)            {
            var matchValminus267345 = G267341;
            if ((!((("object")===((typeof matchValminus267345))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchValminus267345.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var stop = matchValminus267345[0];
            return recur(0, 1, stop, (function (v)              {
              return v;
              }));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G267340))))            {
            return G267340;
            };
          G267340 = (function (arguments)            {
            var matchValminus267346 = G267341;
            var anythingElseminus267339 = matchValminus267346;
            throw ((("Match fail in hooves/hooves-range against: ")+anythingElseminus267339));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G267340))))            {
            return G267340;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: start step stop transform] (var out [:]) (for ((var i start) (_< i stop) (set! i (_+ i step))) (out\.push (transform i))) out) ([: start step stop] (recur start step stop (lambda (v) v))) ([: start stop] (recur start 1 stop (lambda (v) v))) ([: stop] (recur 0 1 stop (lambda (v) v))) (anything-else-267339 (_throw (_+ ''Match fail in hooves/hooves-range against: '' anything-else-267339))))) for value ")+(JSON.stringify(G267341))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus267334 = actualFunminus267336.apply(this, arguments);
      while (recurP267337(returnValueminus267334))        {
        returnValueminus267334 = actualFunminus267336.apply(this, returnValueminus267334.args);
        };
      return returnValueminus267334;
      });
    var withSlots = "macro - no dynamic value.";
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus267051;
  }))