define([], (function ()  {
  var currentModule23963 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModule23963 = value;
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
    currentModule23963.definedPredicate = (function (x)      {
      return (!((((typeof x))===("undefined"))));
      });
    currentModule23963.undefinedPredicate = (function (x)      {
      return (((typeof x))===("undefined"));
      });
    currentModule23963.numberPredicate = (function (o)      {
      return (((typeof o))===("number"));
      });
    currentModule23963.stringPredicate = (function (o)      {
      return (((typeof o))===("string"));
      });
    currentModule23963.arrayPredicate = (function (o)      {
      return (o instanceof Array);
      });
    currentModule23963.emptyPredicate = (function (o)      {
      return (0===o.length);
      });
    // collect{}
    // macro - no dynamic value.
    ;
    // @
    // macro - no dynamic value.
    ;
    var apply = (function (f, lst)      {
      return f.apply(f, lst);
      });
    currentModule23963.TripleEqualminus_ = (function (partial)      {
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
    currentModule23963.Delay = (function (lambdaExpr)      {
      this.lambdaExpr = lambdaExpr;
      return this;
      });
    currentModule23963.Delay.prototype.value = (function ()      {
      return this.lambdaExpr();
      });
    // delay
    // macro - no dynamic value.
    ;
    currentModule23963.undelay = (function (o)      {
      return (function (arguments)        {
        var G24200 = undefined;
        var G24201 = o;
        G24200 = (function (arguments)          {
          var matchVal24202 = G24201;
          var matchFunExpr24204 = (function (G24203)            {
            return (G24203 instanceof currentModule23963.Delay);
            });
          if ((!(matchFunExpr24204(matchVal24202))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var delayObject = matchVal24202;
          return delayObject.value();
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G24200))))          {
          return G24200;
          };
        throw ((("match-fail at ((match o ((instance Delay delay-object) (delay-object\\.value)))) for value ")+(JSON.stringify(G24201))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    // define-to
    // macro - no dynamic value.
    ;
    // for*
    // macro - no dynamic value.
    ;
    // collecting
    // macro - no dynamic value.
    ;
    // collect-for
    // macro - no dynamic value.
    ;
    currentModule23963.range = (function ()      {
      var returnValue24259 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil24258",
          args:arguments
        };
        });
      var recurP24262 = (function (val24263)        {
        if ((("undefined")===((typeof val24263))))          {
          return false;
          };
        return (val24263.recurSigil===("recurSigil24258"));
        });
      var actualFun24261 = (function ()        {
        return (function (arguments)          {
          var G24265 = undefined;
          var G24266 = Array.prototype.slice.apply(arguments);
          G24265 = (function (arguments)            {
            var matchVal24267 = G24266;
            if ((!((("object")===((typeof matchVal24267))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((4===matchVal24267.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchVal24267[0];
            var step = matchVal24267[1];
            var stop = matchVal24267[2];
            var transform = matchVal24267[3];
            var out = [];
            for (var i = start;(i<stop);i = (i+step))              {
              out.push(transform(i));
              };
            return out;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G24265))))            {
            return G24265;
            };
          G24265 = (function (arguments)            {
            var matchVal24268 = G24266;
            if ((!((("object")===((typeof matchVal24268))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchVal24268.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchVal24268[0];
            var step = matchVal24268[1];
            var stop = matchVal24268[2];
            return recur(start, step, stop, (function (v)              {
              return v;
              }));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G24265))))            {
            return G24265;
            };
          G24265 = (function (arguments)            {
            var matchVal24269 = G24266;
            if ((!((("object")===((typeof matchVal24269))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchVal24269.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchVal24269[0];
            var stop = matchVal24269[1];
            return recur(start, 1, stop, (function (v)              {
              return v;
              }));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G24265))))            {
            return G24265;
            };
          G24265 = (function (arguments)            {
            var matchVal24270 = G24266;
            if ((!((("object")===((typeof matchVal24270))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchVal24270.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var stop = matchVal24270[0];
            return recur(0, 1, stop, (function (v)              {
              return v;
              }));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G24265))))            {
            return G24265;
            };
          G24265 = (function (arguments)            {
            var matchVal24271 = G24266;
            var anythingElse24264 = matchVal24271;
            throw ((("Match fail in hooves/hooves-range against: ")+anythingElse24264));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G24265))))            {
            return G24265;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: start step stop transform] (_newline-sequence (var out [:]) (for ((var i start) (_< i stop) (set! i (_+ i step))) (out\\.push (transform i))) out)) ([: start step stop] (_newline-sequence (recur start step stop (lambda (v) v)))) ([: start stop] (_newline-sequence (recur start 1 stop (lambda (v) v)))) ([: stop] (_newline-sequence (recur 0 1 stop (lambda (v) v)))) (anything-else-24264 (_throw (_+ ''Match fail in hooves/hooves-range against: '' anything-else-24264))))) for value ")+(JSON.stringify(G24266))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue24259 = actualFun24261.apply(this, arguments);
      while (recurP24262(returnValue24259))        {
        returnValue24259 = actualFun24261.apply(this, returnValue24259.args);
        };
      return returnValue24259;
      });
    currentModule23963.pureSort = (function ()      {
      var returnValue24295 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil24294",
          args:arguments
        };
        });
      var recurP24298 = (function (val24299)        {
        if ((("undefined")===((typeof val24299))))          {
          return false;
          };
        return (val24299.recurSigil===("recurSigil24294"));
        });
      var actualFun24297 = (function ()        {
        return (function (arguments)          {
          var G24301 = undefined;
          var G24302 = Array.prototype.slice.apply(arguments);
          G24301 = (function (arguments)            {
            var matchVal24303 = G24302;
            if ((!((("object")===((typeof matchVal24303))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal24303.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart24304 = Array.prototype.slice.call(matchVal24303, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart24304))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart24304.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var array = matchArraySimplePart24304[0];
            var matchArrayTailPart24305 = Array.prototype.slice.call(matchVal24303, 1);
            var matchTemp24306 = matchArrayTailPart24305[0];
            var previousMatchSucceeded24307 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTemp24306))))                {
                previousMatchSucceeded24307 = false;
                };
              var sortFun = matchTemp24306;
              if (previousMatchSucceeded24307)                {
                break;
                };
              previousMatchSucceeded24307 = true;
              case 1:
              var fResult24308 = ((function (x)                {
                return (function (a, b)                  {
                  return ((currentModule23963.lessThan(a, b))?(-1) : (1));
                  });
                }))(matchTemp24306);
              if ((fResult24308===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceeded24307 = false;
                };
              var sortFun = fResult24308;
              if (previousMatchSucceeded24307)                {
                break;
                };
              previousMatchSucceeded24307 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var copy = array.concat([]);
            copy.sort(sortFun);
            return copy;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G24301))))            {
            return G24301;
            };
          G24301 = (function (arguments)            {
            var matchVal24309 = G24302;
            var anythingElse24300 = matchVal24309;
            throw ((("Match fail in hooves/hooves-pure-sort against: ")+anythingElse24300));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G24301))))            {
            return G24301;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: array :- (opt sort-fun (lambda (a b) (if (< a b) -1 1)))] (_newline-sequence (var copy (\\.\\. array (concat [:]))) (\\.\\. copy (sort sort-fun)) copy)) (anything-else-24300 (_throw (_+ ''Match fail in hooves/hooves-pure-sort against: '' anything-else-24300))))) for value ")+(JSON.stringify(G24302))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue24295 = actualFun24297.apply(this, arguments);
      while (recurP24298(returnValue24295))        {
        returnValue24295 = actualFun24297.apply(this, returnValue24295.args);
        };
      return returnValue24295;
      });
    // with-slots
    // macro - no dynamic value.
    ;
    currentModule23963.plus = (function ()      {
      var returnValue24339 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil24338",
          args:arguments
        };
        });
      var recurP24342 = (function (val24343)        {
        if ((("undefined")===((typeof val24343))))          {
          return false;
          };
        return (val24343.recurSigil===("recurSigil24338"));
        });
      var actualFun24341 = (function ()        {
        return (function (arguments)          {
          var G24345 = undefined;
          var G24346 = Array.prototype.slice.apply(arguments);
          G24345 = (function (arguments)            {
            var matchVal24347 = G24346;
            if ((!((("object")===((typeof matchVal24347))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal24347.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart24348 = Array.prototype.slice.call(matchVal24347, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart24348))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart24348.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart24348[0];
            var matchArrayTailPart24349 = Array.prototype.slice.call(matchVal24347, 1);
            var tl = matchArrayTailPart24349;
            var result = hd;
            for (i in (tl))              {
              result = (result+(tl[i]));
              };
            return result;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G24345))))            {
            return G24345;
            };
          G24345 = (function (arguments)            {
            var matchVal24350 = G24346;
            var anythingElse24344 = matchVal24350;
            throw ((("Match fail in hooves/hooves-+ against: ")+anythingElse24344));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G24345))))            {
            return G24345;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result)) (anything-else-24344 (_throw (_+ ''Match fail in hooves/hooves-+ against: '' anything-else-24344))))) for value ")+(JSON.stringify(G24346))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue24339 = actualFun24341.apply(this, arguments);
      while (recurP24342(returnValue24339))        {
        returnValue24339 = actualFun24341.apply(this, returnValue24339.args);
        };
      return returnValue24339;
      });
    currentModule23963.minus = (function ()      {
      var returnValue24374 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil24373",
          args:arguments
        };
        });
      var recurP24377 = (function (val24378)        {
        if ((("undefined")===((typeof val24378))))          {
          return false;
          };
        return (val24378.recurSigil===("recurSigil24373"));
        });
      var actualFun24376 = (function ()        {
        return (function (arguments)          {
          var G24380 = undefined;
          var G24381 = Array.prototype.slice.apply(arguments);
          G24380 = (function (arguments)            {
            var matchVal24382 = G24381;
            if ((!((("object")===((typeof matchVal24382))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal24382.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart24383 = Array.prototype.slice.call(matchVal24382, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart24383))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart24383.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart24383[0];
            var matchArrayTailPart24384 = Array.prototype.slice.call(matchVal24382, 1);
            var tl = matchArrayTailPart24384;
            return (((tl.length>0))?((hd-(apply(currentModule23963.plus, tl)))) : ((-(hd))));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G24380))))            {
            return G24380;
            };
          G24380 = (function (arguments)            {
            var matchVal24385 = G24381;
            var anythingElse24379 = matchVal24385;
            throw ((("Match fail in hooves/hooves-- against: ")+anythingElse24379));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G24380))))            {
            return G24380;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (if (_> tl\\.length 0) (_- hd (apply + tl)) (_- hd)))) (anything-else-24379 (_throw (_+ ''Match fail in hooves/hooves-- against: '' anything-else-24379))))) for value ")+(JSON.stringify(G24381))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue24374 = actualFun24376.apply(this, arguments);
      while (recurP24377(returnValue24374))        {
        returnValue24374 = actualFun24376.apply(this, returnValue24374.args);
        };
      return returnValue24374;
      });
    currentModule23963.times = (function ()      {
      var returnValue24409 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil24408",
          args:arguments
        };
        });
      var recurP24412 = (function (val24413)        {
        if ((("undefined")===((typeof val24413))))          {
          return false;
          };
        return (val24413.recurSigil===("recurSigil24408"));
        });
      var actualFun24411 = (function ()        {
        return (function (arguments)          {
          var G24415 = undefined;
          var G24416 = Array.prototype.slice.apply(arguments);
          G24415 = (function (arguments)            {
            var matchVal24417 = G24416;
            if ((!((("object")===((typeof matchVal24417))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal24417.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart24418 = Array.prototype.slice.call(matchVal24417, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart24418))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart24418.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart24418[0];
            var matchArrayTailPart24419 = Array.prototype.slice.call(matchVal24417, 1);
            var tl = matchArrayTailPart24419;
            var result = hd;
            for (i in (tl))              {
              result = (result*(tl[i]));
              };
            return result;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G24415))))            {
            return G24415;
            };
          G24415 = (function (arguments)            {
            var matchVal24420 = G24416;
            var anythingElse24414 = matchVal24420;
            throw ((("Match fail in hooves/hooves-* against: ")+anythingElse24414));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G24415))))            {
            return G24415;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result)) (anything-else-24414 (_throw (_+ ''Match fail in hooves/hooves-* against: '' anything-else-24414))))) for value ")+(JSON.stringify(G24416))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue24409 = actualFun24411.apply(this, arguments);
      while (recurP24412(returnValue24409))        {
        returnValue24409 = actualFun24411.apply(this, returnValue24409.args);
        };
      return returnValue24409;
      });
    currentModule23963.divide = (function ()      {
      var returnValue24444 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil24443",
          args:arguments
        };
        });
      var recurP24447 = (function (val24448)        {
        if ((("undefined")===((typeof val24448))))          {
          return false;
          };
        return (val24448.recurSigil===("recurSigil24443"));
        });
      var actualFun24446 = (function ()        {
        return (function (arguments)          {
          var G24450 = undefined;
          var G24451 = Array.prototype.slice.apply(arguments);
          G24450 = (function (arguments)            {
            var matchVal24452 = G24451;
            if ((!((("object")===((typeof matchVal24452))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal24452.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart24453 = Array.prototype.slice.call(matchVal24452, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart24453))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart24453.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart24453[0];
            var matchArrayTailPart24454 = Array.prototype.slice.call(matchVal24452, 1);
            var tl = matchArrayTailPart24454;
            return (hd/(apply(currentModule23963.times, tl)));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G24450))))            {
            return G24450;
            };
          G24450 = (function (arguments)            {
            var matchVal24455 = G24451;
            var anythingElse24449 = matchVal24455;
            throw ((("Match fail in hooves/hooves-/ against: ")+anythingElse24449));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G24450))))            {
            return G24450;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (_/ hd (apply * tl)))) (anything-else-24449 (_throw (_+ ''Match fail in hooves/hooves-/ against: '' anything-else-24449))))) for value ")+(JSON.stringify(G24451))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue24444 = actualFun24446.apply(this, arguments);
      while (recurP24447(returnValue24444))        {
        returnValue24444 = actualFun24446.apply(this, returnValue24444.args);
        };
      return returnValue24444;
      });
    // define-external-binop
    // macro - no dynamic value.
    ;
    // define-external-binops
    // macro - no dynamic value.
    ;
    currentModule23963.lessThan = (function (G24465, G24466)      {
      return (G24465<G24466);
      });
    currentModule23963.lessThanequal = (function (G24492, G24493)      {
      return (G24492<=G24493);
      });
    currentModule23963.greaterThan = (function (G24519, G24520)      {
      return (G24519>G24520);
      });
    currentModule23963.greaterThanequal = (function (G24546, G24547)      {
      return (G24546>=G24547);
      });
    currentModule23963.ampersand = (function (G24573, G24574)      {
      return (G24573&G24574);
      });
    currentModule23963.pipe = (function (G24600, G24601)      {
      return (G24600|G24601);
      });
    currentModule23963.equalequal = (function (G24627, G24628)      {
      return (G24627==G24628);
      });
    currentModule23963.TripleEqualminus = (function (G24654, G24655)      {
      return (G24654===G24655);
      });
    currentModule23963.modsign = (function (G24681, G24682)      {
      return (G24681%G24682);
      });
    currentModule23963.caret = (function (G24708, G24709)      {
      return (G24708^G24709);
      });
    currentModule23963.lessThanlessThan = (function (G24735, G24736)      {
      return (G24735<<G24736);
      });
    currentModule23963.greaterThangreaterThan = (function (G24762, G24763)      {
      return (G24762>>G24763);
      });
    currentModule23963.greaterThangreaterThangreaterThan = (function (G24789, G24790)      {
      return (G24789>>>G24790);
      });
    // &&
    // macro - no dynamic value.
    ;
    // ||
    // macro - no dynamic value.
    ;
    currentModule23963.bang = (function (o)      {
      return (!(o));
      });
    // incr
    // macro - no dynamic value.
    ;
    // decr
    // macro - no dynamic value.
    ;
    // string
    // pattern - no dynamic value.
    ;
    currentModule23963.plist = (function ()      {
      var returnValue24888 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil24887",
          args:arguments
        };
        });
      var recurP24891 = (function (val24892)        {
        if ((("undefined")===((typeof val24892))))          {
          return false;
          };
        return (val24892.recurSigil===("recurSigil24887"));
        });
      var actualFun24890 = (function ()        {
        return (function (arguments)          {
          var G24894 = undefined;
          var G24895 = Array.prototype.slice.apply(arguments);
          G24894 = (function (arguments)            {
            var matchVal24896 = G24895;
            if ((!((("object")===((typeof matchVal24896))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal24896.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart24897 = Array.prototype.slice.call(matchVal24896, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePart24897))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePart24897.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPart24898 = Array.prototype.slice.call(matchVal24896, 0);
            var parts = matchArrayTailPart24898;
            var out = {              
              
            };
            for (var i = nil;currentModule23963.lessThan(i, parts.length);i = currentModule23963.plus(i, 2))              {
              out[parts[i]] = parts[currentModule23963.plus(i, 1)];
              };
            return out;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G24894))))            {
            return G24894;
            };
          G24894 = (function (arguments)            {
            var matchVal24899 = G24895;
            var anythingElse24893 = matchVal24899;
            throw ((("Match fail in hooves/hooves-plist against: ")+anythingElse24893));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G24894))))            {
            return G24894;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail parts)] (_newline-sequence (var out ({})) (for ((var i) (< i parts\\.length) (set! i (+ i 2))) (set! [out [parts i]] [parts (+ i 1)])) out)) (anything-else-24893 (_throw (_+ ''Match fail in hooves/hooves-plist against: '' anything-else-24893))))) for value ")+(JSON.stringify(G24895))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue24888 = actualFun24890.apply(this, arguments);
      while (recurP24891(returnValue24888))        {
        returnValue24888 = actualFun24890.apply(this, returnValue24888.args);
        };
      return returnValue24888;
      });
    // as-options{}
    // pattern - no dynamic value.
    ;
    currentModule23963.rx = (function ()      {
      var returnValue24929 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil24928",
          args:arguments
        };
        });
      var recurP24932 = (function (val24933)        {
        if ((("undefined")===((typeof val24933))))          {
          return false;
          };
        return (val24933.recurSigil===("recurSigil24928"));
        });
      var actualFun24931 = (function ()        {
        return (function (arguments)          {
          var G24935 = undefined;
          var G24936 = Array.prototype.slice.apply(arguments);
          G24935 = (function (arguments)            {
            var matchVal24937 = G24936;
            if ((!((("object")===((typeof matchVal24937))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal24937.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart24938 = Array.prototype.slice.call(matchVal24937, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart24938))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart24938.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var s = matchArraySimplePart24938[0];
            var matchArrayTailPart24939 = Array.prototype.slice.call(matchVal24937, 1);
            var matchTemp24940 = matchArrayTailPart24939[0];
            var previousMatchSucceeded24941 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTemp24940))))                {
                previousMatchSucceeded24941 = false;
                };
              var args = matchTemp24940;
              if (previousMatchSucceeded24941)                {
                break;
                };
              previousMatchSucceeded24941 = true;
              case 1:
              var fResult24942 = ((function (x)                {
                return "g";
                }))(matchTemp24940);
              if ((fResult24942===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceeded24941 = false;
                };
              var args = fResult24942;
              if (previousMatchSucceeded24941)                {
                break;
                };
              previousMatchSucceeded24941 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            return (new (RegExp)(s, args));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G24935))))            {
            return G24935;
            };
          G24935 = (function (arguments)            {
            var matchVal24943 = G24936;
            var anythingElse24934 = matchVal24943;
            throw ((("Match fail in hooves/hooves-rx against: ")+anythingElse24934));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G24935))))            {
            return G24935;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: s :- (opt args ''g'')] (_newline-sequence (new RegExp s args))) (anything-else-24934 (_throw (_+ ''Match fail in hooves/hooves-rx against: '' anything-else-24934))))) for value ")+(JSON.stringify(G24936))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue24929 = actualFun24931.apply(this, arguments);
      while (recurP24932(returnValue24929))        {
        returnValue24929 = actualFun24931.apply(this, returnValue24929.args);
        };
      return returnValue24929;
      });
    // set-to!
    // macro - no dynamic value.
    ;
    currentModule23963.prefix = (function (i, ra)      {
      return [i].concat(ra);
      });
    var pushdividereturn = (function (item, array)      {
      array.push(item);
      return array;
      });
    var plistToObjectHelper = (function ()      {
      var returnValue24973 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil24972",
          args:arguments
        };
        });
      var recurP24976 = (function (val24977)        {
        if ((("undefined")===((typeof val24977))))          {
          return false;
          };
        return (val24977.recurSigil===("recurSigil24972"));
        });
      var actualFun24975 = (function ()        {
        return (function (arguments)          {
          var G24979 = undefined;
          var G24980 = Array.prototype.slice.apply(arguments);
          G24979 = (function (arguments)            {
            var matchVal24981 = G24980;
            if ((!((("object")===((typeof matchVal24981))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchVal24981.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp24982 = matchVal24981[0];
            var matchTemp24983 = matchVal24981[1];
            var objectAcc = matchTemp24982;
            if ((!((("object")===((typeof matchTemp24983))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchTemp24983.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return objectAcc;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G24979))))            {
            return G24979;
            };
          G24979 = (function (arguments)            {
            var matchVal24984 = G24980;
            if ((!((("object")===((typeof matchVal24984))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchVal24984.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp24985 = matchVal24984[0];
            var matchTemp24986 = matchVal24984[1];
            var objectAcc = matchTemp24985;
            if ((!((("object")===((typeof matchTemp24986))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchTemp24986.length>=2))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart24987 = Array.prototype.slice.call(matchTemp24986, 0, 2);
            if ((!((("object")===((typeof matchArraySimplePart24987))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchArraySimplePart24987.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp24988 = matchArraySimplePart24987[0];
            var matchTemp24989 = matchArraySimplePart24987[1];
            var matchFunExpr24994 = (function (G24993)              {
              return (((typeof G24993))===("string"));
              });
            if ((!(matchFunExpr24994(matchTemp24988))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var key = matchTemp24988;
            var value = matchTemp24989;
            var matchArrayTailPart24995 = Array.prototype.slice.call(matchTemp24986, 2);
            var rest = matchArrayTailPart24995;
            objectAcc[key] = value;
            return recur(objectAcc, rest);
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G24979))))            {
            return G24979;
            };
          G24979 = (function (arguments)            {
            var matchVal24996 = G24980;
            var anythingElse24978 = matchVal24996;
            throw ((("Match fail in plist->object-helper against: ")+anythingElse24978));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G24979))))            {
            return G24979;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: object-acc [:]] (_newline-sequence object-acc)) ([: object-acc [: (string key) value (tail rest)]] (_newline-sequence (set! [object-acc key] value) (recur object-acc rest))) (anything-else-24978 (_throw (_+ ''Match fail in plist->object-helper against: '' anything-else-24978))))) for value ")+(JSON.stringify(G24980))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue24973 = actualFun24975.apply(this, arguments);
      while (recurP24976(returnValue24973))        {
        returnValue24973 = actualFun24975.apply(this, returnValue24973.args);
        };
      return returnValue24973;
      });
    currentModule23963.plistToObject = (function ()      {
      var returnValue25020 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil25019",
          args:arguments
        };
        });
      var recurP25023 = (function (val25024)        {
        if ((("undefined")===((typeof val25024))))          {
          return false;
          };
        return (val25024.recurSigil===("recurSigil25019"));
        });
      var actualFun25022 = (function ()        {
        return (function (arguments)          {
          var G25026 = undefined;
          var G25027 = Array.prototype.slice.apply(arguments);
          G25026 = (function (arguments)            {
            var matchVal25028 = G25027;
            if ((!((("object")===((typeof matchVal25028))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal25028.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart25029 = Array.prototype.slice.call(matchVal25028, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePart25029))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePart25029.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPart25030 = Array.prototype.slice.call(matchVal25028, 0);
            var kvPairs = matchArrayTailPart25030;
            return plistToObjectHelper({              
              
            }, kvPairs);
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G25026))))            {
            return G25026;
            };
          G25026 = (function (arguments)            {
            var matchVal25031 = G25027;
            var anythingElse25025 = matchVal25031;
            throw ((("Match fail in hooves/hooves-plist->object against: ")+anythingElse25025));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G25026))))            {
            return G25026;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail kv-pairs)] (_newline-sequence (plist->object-helper ({}) kv-pairs))) (anything-else-25025 (_throw (_+ ''Match fail in hooves/hooves-plist->object against: '' anything-else-25025))))) for value ")+(JSON.stringify(G25027))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue25020 = actualFun25022.apply(this, arguments);
      while (recurP25023(returnValue25020))        {
        returnValue25020 = actualFun25022.apply(this, returnValue25020.args);
        };
      return returnValue25020;
      });
    currentModule23963.filter = (function ()      {
      var returnValue25062 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil25061",
          args:arguments
        };
        });
      var recurP25065 = (function (val25066)        {
        if ((("undefined")===((typeof val25066))))          {
          return false;
          };
        return (val25066.recurSigil===("recurSigil25061"));
        });
      var actualFun25064 = (function ()        {
        return (function (arguments)          {
          var G25068 = undefined;
          var G25069 = Array.prototype.slice.apply(arguments);
          G25068 = (function (arguments)            {
            var matchVal25070 = G25069;
            if ((!((("object")===((typeof matchVal25070))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchVal25070.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp25071 = matchVal25070[0];
            var matchTemp25072 = matchVal25070[1];
            var matchTemp25073 = matchVal25070[2];
            var fun = matchTemp25071;
            if ((!((("object")===((typeof matchTemp25072))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchTemp25072.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var acc = matchTemp25073;
            return acc;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G25068))))            {
            return G25068;
            };
          G25068 = (function (arguments)            {
            var matchVal25074 = G25069;
            if ((!((("object")===((typeof matchVal25074))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchVal25074.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp25075 = matchVal25074[0];
            var matchTemp25076 = matchVal25074[1];
            var matchTemp25077 = matchVal25074[2];
            var fun = matchTemp25075;
            if ((!((("object")===((typeof matchTemp25076))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchTemp25076.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart25078 = Array.prototype.slice.call(matchTemp25076, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart25078))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart25078.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart25078[0];
            var matchArrayTailPart25079 = Array.prototype.slice.call(matchTemp25076, 1);
            var tl = matchArrayTailPart25079;
            var acc = matchTemp25077;
            var r = fun(hd);
            return ((r)?(recur(fun, tl, pushdividereturn(hd, acc))) : (recur(fun, tl, acc)));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G25068))))            {
            return G25068;
            };
          G25068 = (function (arguments)            {
            var matchVal25080 = G25069;
            if ((!((("object")===((typeof matchVal25080))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchVal25080.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var fun = matchVal25080[0];
            var ra = matchVal25080[1];
            return recur(fun, ra, []);
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G25068))))            {
            return G25068;
            };
          G25068 = (function (arguments)            {
            var matchVal25081 = G25069;
            var anythingElse25067 = matchVal25081;
            throw ((("Match fail in hooves/hooves-filter against: ")+anythingElse25067));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G25068))))            {
            return G25068;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: fun [:] acc] (_newline-sequence acc)) ([: fun [: hd (tail tl)] acc] (_newline-sequence (var r (fun hd)) (if r (recur fun tl (push/return hd acc)) (recur fun tl acc)))) ([: fun ra] (_newline-sequence (recur fun ra [:]))) (anything-else-25067 (_throw (_+ ''Match fail in hooves/hooves-filter against: '' anything-else-25067))))) for value ")+(JSON.stringify(G25069))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue25062 = actualFun25064.apply(this, arguments);
      while (recurP25065(returnValue25062))        {
        returnValue25062 = actualFun25064.apply(this, returnValue25062.args);
        };
      return returnValue25062;
      });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModule23963;
  }))