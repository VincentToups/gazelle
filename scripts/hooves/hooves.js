define([], (function ()  {
  var currentModule110983 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModule110983 = value;
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
    currentModule110983.definedPredicate = (function (x)      {
      return (!((((typeof x))===("undefined"))));
      });
    currentModule110983.undefinedPredicate = (function (x)      {
      return (((typeof x))===("undefined"));
      });
    currentModule110983.numberPredicate = (function (o)      {
      return (((typeof o))===("number"));
      });
    currentModule110983.stringPredicate = (function (o)      {
      return (((typeof o))===("string"));
      });
    currentModule110983.arrayPredicate = (function (o)      {
      return (o instanceof Array);
      });
    currentModule110983.emptyPredicate = (function (o)      {
      return (0===o.length);
      });
    // collect{}
    // macro - no dynamic value.
    ;
    // @
    // macro - no dynamic value.
    ;
    currentModule110983.TripleEqualminus_ = (function (partial)      {
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
    currentModule110983.Delay = (function (lambdaExpr)      {
      this.lambdaExpr = lambdaExpr;
      return this;
      });
    currentModule110983.Delay.prototype.value = (function ()      {
      return this.lambdaExpr();
      });
    // delay
    // macro - no dynamic value.
    ;
    currentModule110983.undelay = (function (o)      {
      return (function (arguments)        {
        var G111220 = undefined;
        var G111221 = o;
        G111220 = (function (arguments)          {
          var matchVal111222 = G111221;
          var matchFunExpr111224 = (function (G111223)            {
            return (G111223 instanceof currentModule110983.Delay);
            });
          if ((!(matchFunExpr111224(matchVal111222))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var delayObject = matchVal111222;
          return delayObject.value();
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G111220))))          {
          return G111220;
          };
        throw ((("match-fail at ((match o ((instance Delay delay-object) (delay-object\\.value)))) for value ")+(JSON.stringify(G111221))));
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
    currentModule110983.range = (function ()      {
      var returnValue111279 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil111278",
          args:arguments
        };
        });
      var recurP111282 = (function (val111283)        {
        if ((("undefined")===((typeof val111283))))          {
          return false;
          };
        return (val111283.recurSigil===("recurSigil111278"));
        });
      var actualFun111281 = (function ()        {
        return (function (arguments)          {
          var G111285 = undefined;
          var G111286 = Array.prototype.slice.apply(arguments);
          G111285 = (function (arguments)            {
            var matchVal111287 = G111286;
            if ((!((("object")===((typeof matchVal111287))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((4===matchVal111287.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchVal111287[0];
            var step = matchVal111287[1];
            var stop = matchVal111287[2];
            var transform = matchVal111287[3];
            var out = [];
            for (var i = start;(i<stop);i = (i+step))              {
              out.push(transform(i));
              };
            return out;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G111285))))            {
            return G111285;
            };
          G111285 = (function (arguments)            {
            var matchVal111288 = G111286;
            if ((!((("object")===((typeof matchVal111288))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchVal111288.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchVal111288[0];
            var step = matchVal111288[1];
            var stop = matchVal111288[2];
            return recur(start, step, stop, (function (v)              {
              return v;
              }));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G111285))))            {
            return G111285;
            };
          G111285 = (function (arguments)            {
            var matchVal111289 = G111286;
            if ((!((("object")===((typeof matchVal111289))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchVal111289.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchVal111289[0];
            var stop = matchVal111289[1];
            return recur(start, 1, stop, (function (v)              {
              return v;
              }));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G111285))))            {
            return G111285;
            };
          G111285 = (function (arguments)            {
            var matchVal111290 = G111286;
            if ((!((("object")===((typeof matchVal111290))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchVal111290.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var stop = matchVal111290[0];
            return recur(0, 1, stop, (function (v)              {
              return v;
              }));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G111285))))            {
            return G111285;
            };
          G111285 = (function (arguments)            {
            var matchVal111291 = G111286;
            var anythingElse111284 = matchVal111291;
            throw ((("Match fail in hooves/hooves-range against: ")+anythingElse111284));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G111285))))            {
            return G111285;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: start step stop transform] (var out [:]) (for ((var i start) (_< i stop) (set! i (_+ i step))) (out\\.push (transform i))) out) ([: start step stop] (recur start step stop (lambda (v) v))) ([: start stop] (recur start 1 stop (lambda (v) v))) ([: stop] (recur 0 1 stop (lambda (v) v))) (anything-else-111284 (_throw (_+ ''Match fail in hooves/hooves-range against: '' anything-else-111284))))) for value ")+(JSON.stringify(G111286))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue111279 = actualFun111281.apply(this, arguments);
      while (recurP111282(returnValue111279))        {
        returnValue111279 = actualFun111281.apply(this, returnValue111279.args);
        };
      return returnValue111279;
      });
    // with-slots
    // macro - no dynamic value.
    ;
    currentModule110983.plus = (function ()      {
      var returnValue111321 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil111320",
          args:arguments
        };
        });
      var recurP111324 = (function (val111325)        {
        if ((("undefined")===((typeof val111325))))          {
          return false;
          };
        return (val111325.recurSigil===("recurSigil111320"));
        });
      var actualFun111323 = (function ()        {
        return (function (arguments)          {
          var G111327 = undefined;
          var G111328 = Array.prototype.slice.apply(arguments);
          G111327 = (function (arguments)            {
            var matchVal111329 = G111328;
            if ((!((("object")===((typeof matchVal111329))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal111329.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart111330 = Array.prototype.slice.call(matchVal111329, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart111330))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart111330.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart111330[0];
            var matchArrayTailPart111331 = Array.prototype.slice.call(matchVal111329, 1);
            var tl = matchArrayTailPart111331;
            var result = hd;
            for (i in (tl))              {
              result = (result+(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G111327))))            {
            return G111327;
            };
          G111327 = (function (arguments)            {
            var matchVal111332 = G111328;
            var anythingElse111326 = matchVal111332;
            throw ((("Match fail in hooves/hooves-+ against: ")+anythingElse111326));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G111327))))            {
            return G111327;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result) (anything-else-111326 (_throw (_+ ''Match fail in hooves/hooves-+ against: '' anything-else-111326))))) for value ")+(JSON.stringify(G111328))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue111321 = actualFun111323.apply(this, arguments);
      while (recurP111324(returnValue111321))        {
        returnValue111321 = actualFun111323.apply(this, returnValue111321.args);
        };
      return returnValue111321;
      });
    currentModule110983.minus = (function ()      {
      var returnValue111356 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil111355",
          args:arguments
        };
        });
      var recurP111359 = (function (val111360)        {
        if ((("undefined")===((typeof val111360))))          {
          return false;
          };
        return (val111360.recurSigil===("recurSigil111355"));
        });
      var actualFun111358 = (function ()        {
        return (function (arguments)          {
          var G111362 = undefined;
          var G111363 = Array.prototype.slice.apply(arguments);
          G111362 = (function (arguments)            {
            var matchVal111364 = G111363;
            if ((!((("object")===((typeof matchVal111364))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal111364.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart111365 = Array.prototype.slice.call(matchVal111364, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart111365))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart111365.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart111365[0];
            var matchArrayTailPart111366 = Array.prototype.slice.call(matchVal111364, 1);
            var tl = matchArrayTailPart111366;
            return (((tl.length>0))?((hd-(apply(currentModule110983.plus, tl)))) : ((-(hd))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G111362))))            {
            return G111362;
            };
          G111362 = (function (arguments)            {
            var matchVal111367 = G111363;
            var anythingElse111361 = matchVal111367;
            throw ((("Match fail in hooves/hooves-- against: ")+anythingElse111361));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G111362))))            {
            return G111362;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (if (_> tl\\.length 0) (_- hd (apply + tl)) (_- hd))) (anything-else-111361 (_throw (_+ ''Match fail in hooves/hooves-- against: '' anything-else-111361))))) for value ")+(JSON.stringify(G111363))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue111356 = actualFun111358.apply(this, arguments);
      while (recurP111359(returnValue111356))        {
        returnValue111356 = actualFun111358.apply(this, returnValue111356.args);
        };
      return returnValue111356;
      });
    currentModule110983.times = (function ()      {
      var returnValue111391 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil111390",
          args:arguments
        };
        });
      var recurP111394 = (function (val111395)        {
        if ((("undefined")===((typeof val111395))))          {
          return false;
          };
        return (val111395.recurSigil===("recurSigil111390"));
        });
      var actualFun111393 = (function ()        {
        return (function (arguments)          {
          var G111397 = undefined;
          var G111398 = Array.prototype.slice.apply(arguments);
          G111397 = (function (arguments)            {
            var matchVal111399 = G111398;
            if ((!((("object")===((typeof matchVal111399))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal111399.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart111400 = Array.prototype.slice.call(matchVal111399, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart111400))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart111400.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart111400[0];
            var matchArrayTailPart111401 = Array.prototype.slice.call(matchVal111399, 1);
            var tl = matchArrayTailPart111401;
            var result = hd;
            for (i in (tl))              {
              result = (result*(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G111397))))            {
            return G111397;
            };
          G111397 = (function (arguments)            {
            var matchVal111402 = G111398;
            var anythingElse111396 = matchVal111402;
            throw ((("Match fail in hooves/hooves-* against: ")+anythingElse111396));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G111397))))            {
            return G111397;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result) (anything-else-111396 (_throw (_+ ''Match fail in hooves/hooves-* against: '' anything-else-111396))))) for value ")+(JSON.stringify(G111398))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue111391 = actualFun111393.apply(this, arguments);
      while (recurP111394(returnValue111391))        {
        returnValue111391 = actualFun111393.apply(this, returnValue111391.args);
        };
      return returnValue111391;
      });
    currentModule110983.divide = (function ()      {
      var returnValue111426 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil111425",
          args:arguments
        };
        });
      var recurP111429 = (function (val111430)        {
        if ((("undefined")===((typeof val111430))))          {
          return false;
          };
        return (val111430.recurSigil===("recurSigil111425"));
        });
      var actualFun111428 = (function ()        {
        return (function (arguments)          {
          var G111432 = undefined;
          var G111433 = Array.prototype.slice.apply(arguments);
          G111432 = (function (arguments)            {
            var matchVal111434 = G111433;
            if ((!((("object")===((typeof matchVal111434))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal111434.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart111435 = Array.prototype.slice.call(matchVal111434, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart111435))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart111435.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart111435[0];
            var matchArrayTailPart111436 = Array.prototype.slice.call(matchVal111434, 1);
            var tl = matchArrayTailPart111436;
            return (hd/(apply(currentModule110983.times, tl)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G111432))))            {
            return G111432;
            };
          G111432 = (function (arguments)            {
            var matchVal111437 = G111433;
            var anythingElse111431 = matchVal111437;
            throw ((("Match fail in hooves/hooves-/ against: ")+anythingElse111431));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G111432))))            {
            return G111432;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_/ hd (apply * tl))) (anything-else-111431 (_throw (_+ ''Match fail in hooves/hooves-/ against: '' anything-else-111431))))) for value ")+(JSON.stringify(G111433))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue111426 = actualFun111428.apply(this, arguments);
      while (recurP111429(returnValue111426))        {
        returnValue111426 = actualFun111428.apply(this, returnValue111426.args);
        };
      return returnValue111426;
      });
    // define-external-binop
    // macro - no dynamic value.
    ;
    // define-external-binops
    // macro - no dynamic value.
    ;
    currentModule110983.lessThan = (function (G111447, G111448)      {
      return (G111447<G111448);
      });
    currentModule110983.lessThanequal = (function (G111474, G111475)      {
      return (G111474<=G111475);
      });
    currentModule110983.greaterThan = (function (G111501, G111502)      {
      return (G111501>G111502);
      });
    currentModule110983.greaterThanequal = (function (G111528, G111529)      {
      return (G111528>=G111529);
      });
    currentModule110983.ampersand = (function (G111555, G111556)      {
      return (G111555&G111556);
      });
    currentModule110983.pipe = (function (G111582, G111583)      {
      return (G111582|G111583);
      });
    currentModule110983.equalequal = (function (G111609, G111610)      {
      return (G111609==G111610);
      });
    currentModule110983.TripleEqualminus = (function (G111636, G111637)      {
      return (G111636===G111637);
      });
    currentModule110983.modsign = (function (G111663, G111664)      {
      return (G111663%G111664);
      });
    currentModule110983.caret = (function (G111690, G111691)      {
      return (G111690^G111691);
      });
    currentModule110983.lessThanlessThan = (function (G111717, G111718)      {
      return (G111717<<G111718);
      });
    currentModule110983.greaterThangreaterThan = (function (G111744, G111745)      {
      return (G111744>>G111745);
      });
    currentModule110983.greaterThangreaterThangreaterThan = (function (G111771, G111772)      {
      return (G111771>>>G111772);
      });
    ;
    // &&
    // macro - no dynamic value.
    ;
    // ||
    // macro - no dynamic value.
    ;
    currentModule110983.bang = (function (o)      {
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
    currentModule110983.rx = (function ()      {
      var returnValue111870 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil111869",
          args:arguments
        };
        });
      var recurP111873 = (function (val111874)        {
        if ((("undefined")===((typeof val111874))))          {
          return false;
          };
        return (val111874.recurSigil===("recurSigil111869"));
        });
      var actualFun111872 = (function ()        {
        return (function (arguments)          {
          var G111876 = undefined;
          var G111877 = Array.prototype.slice.apply(arguments);
          G111876 = (function (arguments)            {
            var matchVal111878 = G111877;
            if ((!((("object")===((typeof matchVal111878))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal111878.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart111879 = Array.prototype.slice.call(matchVal111878, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart111879))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart111879.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var s = matchArraySimplePart111879[0];
            var matchArrayTailPart111880 = Array.prototype.slice.call(matchVal111878, 1);
            var matchTemp111881 = matchArrayTailPart111880[0];
            var previousMatchSucceeded111882 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTemp111881))))                {
                previousMatchSucceeded111882 = false;
                };
              var args = matchTemp111881;
              if (previousMatchSucceeded111882)                {
                break;
                };
              previousMatchSucceeded111882 = true;
              case 1:
              var fResult111883 = ((function (x)                {
                return "g";
                }))(matchTemp111881);
              if ((fResult111883===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceeded111882 = false;
                };
              var args = fResult111883;
              if (previousMatchSucceeded111882)                {
                break;
                };
              previousMatchSucceeded111882 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            return (new (RegExp)(s, args));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G111876))))            {
            return G111876;
            };
          G111876 = (function (arguments)            {
            var matchVal111884 = G111877;
            var anythingElse111875 = matchVal111884;
            throw ((("Match fail in hooves/hooves-rx against: ")+anythingElse111875));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G111876))))            {
            return G111876;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: s :- (opt args ''g'')] (new RegExp s args)) (anything-else-111875 (_throw (_+ ''Match fail in hooves/hooves-rx against: '' anything-else-111875))))) for value ")+(JSON.stringify(G111877))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue111870 = actualFun111872.apply(this, arguments);
      while (recurP111873(returnValue111870))        {
        returnValue111870 = actualFun111872.apply(this, returnValue111870.args);
        };
      return returnValue111870;
      });
    currentModule110983.prefix = (function (i, ra)      {
      return [i].concat(ra);
      });
    var pushdividereturn = (function (item, array)      {
      array.push(item);
      return array;
      });
    currentModule110983.filter = (function ()      {
      var returnValue111937 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil111936",
          args:arguments
        };
        });
      var recurP111940 = (function (val111941)        {
        if ((("undefined")===((typeof val111941))))          {
          return false;
          };
        return (val111941.recurSigil===("recurSigil111936"));
        });
      var actualFun111939 = (function ()        {
        return (function (arguments)          {
          var G111943 = undefined;
          var G111944 = Array.prototype.slice.apply(arguments);
          G111943 = (function (arguments)            {
            var matchVal111945 = G111944;
            if ((!((("object")===((typeof matchVal111945))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchVal111945.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp111946 = matchVal111945[0];
            var matchTemp111947 = matchVal111945[1];
            var matchTemp111948 = matchVal111945[2];
            var fun = matchTemp111946;
            if ((!((("object")===((typeof matchTemp111947))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchTemp111947.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var acc = matchTemp111948;
            return acc;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G111943))))            {
            return G111943;
            };
          G111943 = (function (arguments)            {
            var matchVal111949 = G111944;
            if ((!((("object")===((typeof matchVal111949))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchVal111949.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp111950 = matchVal111949[0];
            var matchTemp111951 = matchVal111949[1];
            var matchTemp111952 = matchVal111949[2];
            var fun = matchTemp111950;
            if ((!((("object")===((typeof matchTemp111951))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchTemp111951.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart111953 = Array.prototype.slice.call(matchTemp111951, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart111953))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart111953.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart111953[0];
            var matchArrayTailPart111954 = Array.prototype.slice.call(matchTemp111951, 1);
            var tl = matchArrayTailPart111954;
            var acc = matchTemp111952;
            var r = fun(hd);
            return ((r)?(recur(fun, tl, pushdividereturn(hd, acc))) : (recur(fun, tl, acc)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G111943))))            {
            return G111943;
            };
          G111943 = (function (arguments)            {
            var matchVal111955 = G111944;
            if ((!((("object")===((typeof matchVal111955))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchVal111955.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var fun = matchVal111955[0];
            var ra = matchVal111955[1];
            return recur(fun, ra, []);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G111943))))            {
            return G111943;
            };
          G111943 = (function (arguments)            {
            var matchVal111956 = G111944;
            var anythingElse111942 = matchVal111956;
            throw ((("Match fail in hooves/hooves-filter against: ")+anythingElse111942));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G111943))))            {
            return G111943;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: fun [:] acc] acc) ([: fun [: hd (tail tl)] acc] (var r (fun hd)) (if r (recur fun tl (push/return hd acc)) (recur fun tl acc))) ([: fun ra] (recur fun ra [:])) (anything-else-111942 (_throw (_+ ''Match fail in hooves/hooves-filter against: '' anything-else-111942))))) for value ")+(JSON.stringify(G111944))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue111937 = actualFun111939.apply(this, arguments);
      while (recurP111940(returnValue111937))        {
        returnValue111937 = actualFun111939.apply(this, returnValue111937.args);
        };
      return returnValue111937;
      });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModule110983;
  }))