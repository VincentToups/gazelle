define([], (function ()  {
  var currentModuleminus14108 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus14108 = value;
    });
  (function (arguments)    {
    // define+
    // macro - no dynamic value.
    ;
    // define-macro+
    // macro - no dynamic value.
    ;
    // define-pattern+
    // macro - no dynamic value.
    ;
    currentModuleminus14108.definedPredicate = (function (x)      {
      return (!((((typeof x))===("undefined"))));
      });
    currentModuleminus14108.undefinedPredicate = (function (x)      {
      return (((typeof x))===("undefined"));
      });
    currentModuleminus14108.numberPredicate = (function (o)      {
      return (((typeof o))===("number"));
      });
    currentModuleminus14108.stringPredicate = (function (o)      {
      return (((typeof o))===("string"));
      });
    currentModuleminus14108.arrayPredicate = (function (o)      {
      return (o instanceof Array);
      });
    currentModuleminus14108.emptyPredicate = (function (o)      {
      return (0===o.length);
      });
    // collect{}
    // macro - no dynamic value.
    ;
    // @
    // macro - no dynamic value.
    ;
    currentModuleminus14108.TripleEqualminus_ = (function (partial)      {
      return (function (open)        {
        return (open===partial);
        });
      });
    // when
    // macro - no dynamic value.
    ;
    // unless
    // macro - no dynamic value.
    ;
    currentModuleminus14108.Delay = (function (lambdaExpr)      {
      this.lambdaExpr = lambdaExpr;
      return this;
      });
    currentModuleminus14108.Delay.prototype.value = (function ()      {
      return this.lambdaExpr();
      });
    // delay
    // macro - no dynamic value.
    ;
    currentModuleminus14108.undelay = (function (o)      {
      return (function (arguments)        {
        var G14345 = undefined;
        var G14346 = o;
        G14345 = (function (arguments)          {
          var matchValminus14347 = G14346;
          var matchFunExprminus14349 = (function (G14348)            {
            return (G14348 instanceof currentModuleminus14108.Delay);
            });
          if ((!(matchFunExprminus14349(matchValminus14347))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var delayObject = matchValminus14347;
          return delayObject.value();
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G14345))))          {
          return G14345;
          };
        throw ((("match-fail at ((match o ((instance Delay delay-object) (delay-object\.value)))) for value ")+(JSON.stringify(G14346))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    // define-to
    // macro - no dynamic value.
    ;
    // for*
    // macro - no dynamic value.
    ;
    currentModuleminus14108.range = (function ()      {
      var returnValueminus14392 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus14391",
          args:arguments
        };
        });
      var recurP14395 = (function (valminus14396)        {
        if ((("undefined")===((typeof valminus14396))))          {
          return false;
          };
        return (valminus14396.recurSigil===("recurSigilminus14391"));
        });
      var actualFunminus14394 = (function ()        {
        return (function (arguments)          {
          var G14398 = undefined;
          var G14399 = Array.prototype.slice.apply(arguments);
          G14398 = (function (arguments)            {
            var matchValminus14400 = G14399;
            if ((!((("object")===((typeof matchValminus14400))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((4===matchValminus14400.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchValminus14400[0];
            var step = matchValminus14400[1];
            var stop = matchValminus14400[2];
            var transform = matchValminus14400[3];
            var out = [];
            for (var i = start;(i<stop);i = (i+step))              {
              out.push(transform(i));
              };
            return out;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G14398))))            {
            return G14398;
            };
          G14398 = (function (arguments)            {
            var matchValminus14401 = G14399;
            if ((!((("object")===((typeof matchValminus14401))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchValminus14401.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchValminus14401[0];
            var step = matchValminus14401[1];
            var stop = matchValminus14401[2];
            return recur(start, step, stop, (function (v)              {
              return v;
              }));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G14398))))            {
            return G14398;
            };
          G14398 = (function (arguments)            {
            var matchValminus14402 = G14399;
            if ((!((("object")===((typeof matchValminus14402))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchValminus14402.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchValminus14402[0];
            var stop = matchValminus14402[1];
            return recur(start, 1, stop, (function (v)              {
              return v;
              }));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G14398))))            {
            return G14398;
            };
          G14398 = (function (arguments)            {
            var matchValminus14403 = G14399;
            if ((!((("object")===((typeof matchValminus14403))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchValminus14403.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var stop = matchValminus14403[0];
            return recur(0, 1, stop, (function (v)              {
              return v;
              }));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G14398))))            {
            return G14398;
            };
          G14398 = (function (arguments)            {
            var matchValminus14404 = G14399;
            var anythingElseminus14397 = matchValminus14404;
            throw ((("Match fail in hooves/hooves-range against: ")+anythingElseminus14397));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G14398))))            {
            return G14398;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: start step stop transform] (var out [:]) (for ((var i start) (_< i stop) (set! i (_+ i step))) (out\.push (transform i))) out) ([: start step stop] (recur start step stop (lambda (v) v))) ([: start stop] (recur start 1 stop (lambda (v) v))) ([: stop] (recur 0 1 stop (lambda (v) v))) (anything-else-14397 (_throw (_+ ''Match fail in hooves/hooves-range against: '' anything-else-14397))))) for value ")+(JSON.stringify(G14399))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus14392 = actualFunminus14394.apply(this, arguments);
      while (recurP14395(returnValueminus14392))        {
        returnValueminus14392 = actualFunminus14394.apply(this, returnValueminus14392.args);
        };
      return returnValueminus14392;
      });
    return // with-slots
    // macro - no dynamic value.
    ;
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus14108;
  }))