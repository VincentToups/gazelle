define([], (function ()  {
  var currentModule163198 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModule163198 = value;
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
    currentModule163198.definedPredicate = (function (x)      {
      return (!((((typeof x))===("undefined"))));
      });
    currentModule163198.undefinedPredicate = (function (x)      {
      return (((typeof x))===("undefined"));
      });
    currentModule163198.numberPredicate = (function (o)      {
      return (((typeof o))===("number"));
      });
    currentModule163198.stringPredicate = (function (o)      {
      return (((typeof o))===("string"));
      });
    currentModule163198.arrayPredicate = (function (o)      {
      return (o instanceof Array);
      });
    currentModule163198.emptyPredicate = (function (o)      {
      return (0===o.length);
      });
    // collect{}
    // macro - no dynamic value.
    ;
    // @
    // macro - no dynamic value.
    ;
    currentModule163198.TripleEqualminus_ = (function (partial)      {
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
    currentModule163198.Delay = (function (lambdaExpr)      {
      this.lambdaExpr = lambdaExpr;
      return this;
      });
    currentModule163198.Delay.prototype.value = (function ()      {
      return this.lambdaExpr();
      });
    // delay
    // macro - no dynamic value.
    ;
    currentModule163198.undelay = (function (o)      {
      return (function (arguments)        {
        var G163435 = undefined;
        var G163436 = o;
        G163435 = (function (arguments)          {
          var matchVal163437 = G163436;
          var matchFunExpr163439 = (function (G163438)            {
            return (G163438 instanceof currentModule163198.Delay);
            });
          if ((!(matchFunExpr163439(matchVal163437))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var delayObject = matchVal163437;
          return delayObject.value();
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G163435))))          {
          return G163435;
          };
        throw ((("match-fail at ((match o ((instance Delay delay-object) (delay-object\\.value)))) for value ")+(JSON.stringify(G163436))));
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
    currentModule163198.range = (function ()      {
      var returnValue163494 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil163493",
          args:arguments
        };
        });
      var recurP163497 = (function (val163498)        {
        if ((("undefined")===((typeof val163498))))          {
          return false;
          };
        return (val163498.recurSigil===("recurSigil163493"));
        });
      var actualFun163496 = (function ()        {
        return (function (arguments)          {
          var G163500 = undefined;
          var G163501 = Array.prototype.slice.apply(arguments);
          G163500 = (function (arguments)            {
            var matchVal163502 = G163501;
            if ((!((("object")===((typeof matchVal163502))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((4===matchVal163502.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchVal163502[0];
            var step = matchVal163502[1];
            var stop = matchVal163502[2];
            var transform = matchVal163502[3];
            var out = [];
            for (var i = start;(i<stop);i = (i+step))              {
              out.push(transform(i));
              };
            return out;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G163500))))            {
            return G163500;
            };
          G163500 = (function (arguments)            {
            var matchVal163503 = G163501;
            if ((!((("object")===((typeof matchVal163503))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchVal163503.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchVal163503[0];
            var step = matchVal163503[1];
            var stop = matchVal163503[2];
            return recur(start, step, stop, (function (v)              {
              return v;
              }));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G163500))))            {
            return G163500;
            };
          G163500 = (function (arguments)            {
            var matchVal163504 = G163501;
            if ((!((("object")===((typeof matchVal163504))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchVal163504.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchVal163504[0];
            var stop = matchVal163504[1];
            return recur(start, 1, stop, (function (v)              {
              return v;
              }));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G163500))))            {
            return G163500;
            };
          G163500 = (function (arguments)            {
            var matchVal163505 = G163501;
            if ((!((("object")===((typeof matchVal163505))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchVal163505.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var stop = matchVal163505[0];
            return recur(0, 1, stop, (function (v)              {
              return v;
              }));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G163500))))            {
            return G163500;
            };
          G163500 = (function (arguments)            {
            var matchVal163506 = G163501;
            var anythingElse163499 = matchVal163506;
            throw ((("Match fail in hooves/hooves-range against: ")+anythingElse163499));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G163500))))            {
            return G163500;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: start step stop transform] (_newline-sequence (var out [:]) (for ((var i start) (_< i stop) (set! i (_+ i step))) (out\\.push (transform i))) out)) ([: start step stop] (_newline-sequence (recur start step stop (lambda (v) v)))) ([: start stop] (_newline-sequence (recur start 1 stop (lambda (v) v)))) ([: stop] (_newline-sequence (recur 0 1 stop (lambda (v) v)))) (anything-else-163499 (_throw (_+ ''Match fail in hooves/hooves-range against: '' anything-else-163499))))) for value ")+(JSON.stringify(G163501))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue163494 = actualFun163496.apply(this, arguments);
      while (recurP163497(returnValue163494))        {
        returnValue163494 = actualFun163496.apply(this, returnValue163494.args);
        };
      return returnValue163494;
      });
    // with-slots
    // macro - no dynamic value.
    ;
    currentModule163198.plus = (function ()      {
      var returnValue163536 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil163535",
          args:arguments
        };
        });
      var recurP163539 = (function (val163540)        {
        if ((("undefined")===((typeof val163540))))          {
          return false;
          };
        return (val163540.recurSigil===("recurSigil163535"));
        });
      var actualFun163538 = (function ()        {
        return (function (arguments)          {
          var G163542 = undefined;
          var G163543 = Array.prototype.slice.apply(arguments);
          G163542 = (function (arguments)            {
            var matchVal163544 = G163543;
            if ((!((("object")===((typeof matchVal163544))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal163544.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart163545 = Array.prototype.slice.call(matchVal163544, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart163545))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart163545.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart163545[0];
            var matchArrayTailPart163546 = Array.prototype.slice.call(matchVal163544, 1);
            var tl = matchArrayTailPart163546;
            var result = hd;
            for (i in (tl))              {
              result = (result+(tl[i]));
              };
            return result;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G163542))))            {
            return G163542;
            };
          G163542 = (function (arguments)            {
            var matchVal163547 = G163543;
            var anythingElse163541 = matchVal163547;
            throw ((("Match fail in hooves/hooves-+ against: ")+anythingElse163541));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G163542))))            {
            return G163542;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result)) (anything-else-163541 (_throw (_+ ''Match fail in hooves/hooves-+ against: '' anything-else-163541))))) for value ")+(JSON.stringify(G163543))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue163536 = actualFun163538.apply(this, arguments);
      while (recurP163539(returnValue163536))        {
        returnValue163536 = actualFun163538.apply(this, returnValue163536.args);
        };
      return returnValue163536;
      });
    currentModule163198.minus = (function ()      {
      var returnValue163571 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil163570",
          args:arguments
        };
        });
      var recurP163574 = (function (val163575)        {
        if ((("undefined")===((typeof val163575))))          {
          return false;
          };
        return (val163575.recurSigil===("recurSigil163570"));
        });
      var actualFun163573 = (function ()        {
        return (function (arguments)          {
          var G163577 = undefined;
          var G163578 = Array.prototype.slice.apply(arguments);
          G163577 = (function (arguments)            {
            var matchVal163579 = G163578;
            if ((!((("object")===((typeof matchVal163579))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal163579.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart163580 = Array.prototype.slice.call(matchVal163579, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart163580))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart163580.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart163580[0];
            var matchArrayTailPart163581 = Array.prototype.slice.call(matchVal163579, 1);
            var tl = matchArrayTailPart163581;
            return (((tl.length>0))?((hd-(apply(currentModule163198.plus, tl)))) : ((-(hd))));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G163577))))            {
            return G163577;
            };
          G163577 = (function (arguments)            {
            var matchVal163582 = G163578;
            var anythingElse163576 = matchVal163582;
            throw ((("Match fail in hooves/hooves-- against: ")+anythingElse163576));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G163577))))            {
            return G163577;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (if (_> tl\\.length 0) (_- hd (apply + tl)) (_- hd)))) (anything-else-163576 (_throw (_+ ''Match fail in hooves/hooves-- against: '' anything-else-163576))))) for value ")+(JSON.stringify(G163578))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue163571 = actualFun163573.apply(this, arguments);
      while (recurP163574(returnValue163571))        {
        returnValue163571 = actualFun163573.apply(this, returnValue163571.args);
        };
      return returnValue163571;
      });
    currentModule163198.times = (function ()      {
      var returnValue163606 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil163605",
          args:arguments
        };
        });
      var recurP163609 = (function (val163610)        {
        if ((("undefined")===((typeof val163610))))          {
          return false;
          };
        return (val163610.recurSigil===("recurSigil163605"));
        });
      var actualFun163608 = (function ()        {
        return (function (arguments)          {
          var G163612 = undefined;
          var G163613 = Array.prototype.slice.apply(arguments);
          G163612 = (function (arguments)            {
            var matchVal163614 = G163613;
            if ((!((("object")===((typeof matchVal163614))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal163614.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart163615 = Array.prototype.slice.call(matchVal163614, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart163615))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart163615.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart163615[0];
            var matchArrayTailPart163616 = Array.prototype.slice.call(matchVal163614, 1);
            var tl = matchArrayTailPart163616;
            var result = hd;
            for (i in (tl))              {
              result = (result*(tl[i]));
              };
            return result;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G163612))))            {
            return G163612;
            };
          G163612 = (function (arguments)            {
            var matchVal163617 = G163613;
            var anythingElse163611 = matchVal163617;
            throw ((("Match fail in hooves/hooves-* against: ")+anythingElse163611));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G163612))))            {
            return G163612;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result)) (anything-else-163611 (_throw (_+ ''Match fail in hooves/hooves-* against: '' anything-else-163611))))) for value ")+(JSON.stringify(G163613))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue163606 = actualFun163608.apply(this, arguments);
      while (recurP163609(returnValue163606))        {
        returnValue163606 = actualFun163608.apply(this, returnValue163606.args);
        };
      return returnValue163606;
      });
    currentModule163198.divide = (function ()      {
      var returnValue163641 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil163640",
          args:arguments
        };
        });
      var recurP163644 = (function (val163645)        {
        if ((("undefined")===((typeof val163645))))          {
          return false;
          };
        return (val163645.recurSigil===("recurSigil163640"));
        });
      var actualFun163643 = (function ()        {
        return (function (arguments)          {
          var G163647 = undefined;
          var G163648 = Array.prototype.slice.apply(arguments);
          G163647 = (function (arguments)            {
            var matchVal163649 = G163648;
            if ((!((("object")===((typeof matchVal163649))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal163649.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart163650 = Array.prototype.slice.call(matchVal163649, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart163650))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart163650.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart163650[0];
            var matchArrayTailPart163651 = Array.prototype.slice.call(matchVal163649, 1);
            var tl = matchArrayTailPart163651;
            return (hd/(apply(currentModule163198.times, tl)));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G163647))))            {
            return G163647;
            };
          G163647 = (function (arguments)            {
            var matchVal163652 = G163648;
            var anythingElse163646 = matchVal163652;
            throw ((("Match fail in hooves/hooves-/ against: ")+anythingElse163646));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G163647))))            {
            return G163647;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (_/ hd (apply * tl)))) (anything-else-163646 (_throw (_+ ''Match fail in hooves/hooves-/ against: '' anything-else-163646))))) for value ")+(JSON.stringify(G163648))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue163641 = actualFun163643.apply(this, arguments);
      while (recurP163644(returnValue163641))        {
        returnValue163641 = actualFun163643.apply(this, returnValue163641.args);
        };
      return returnValue163641;
      });
    // define-external-binop
    // macro - no dynamic value.
    ;
    // define-external-binops
    // macro - no dynamic value.
    ;
    currentModule163198.lessThan = (function (G163662, G163663)      {
      return (G163662<G163663);
      });
    currentModule163198.lessThanequal = (function (G163689, G163690)      {
      return (G163689<=G163690);
      });
    currentModule163198.greaterThan = (function (G163716, G163717)      {
      return (G163716>G163717);
      });
    currentModule163198.greaterThanequal = (function (G163743, G163744)      {
      return (G163743>=G163744);
      });
    currentModule163198.ampersand = (function (G163770, G163771)      {
      return (G163770&G163771);
      });
    currentModule163198.pipe = (function (G163797, G163798)      {
      return (G163797|G163798);
      });
    currentModule163198.equalequal = (function (G163824, G163825)      {
      return (G163824==G163825);
      });
    currentModule163198.TripleEqualminus = (function (G163851, G163852)      {
      return (G163851===G163852);
      });
    currentModule163198.modsign = (function (G163878, G163879)      {
      return (G163878%G163879);
      });
    currentModule163198.caret = (function (G163905, G163906)      {
      return (G163905^G163906);
      });
    currentModule163198.lessThanlessThan = (function (G163932, G163933)      {
      return (G163932<<G163933);
      });
    currentModule163198.greaterThangreaterThan = (function (G163959, G163960)      {
      return (G163959>>G163960);
      });
    currentModule163198.greaterThangreaterThangreaterThan = (function (G163986, G163987)      {
      return (G163986>>>G163987);
      });
    // &&
    // macro - no dynamic value.
    ;
    // ||
    // macro - no dynamic value.
    ;
    currentModule163198.bang = (function (o)      {
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
    currentModule163198.rx = (function ()      {
      var returnValue164085 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil164084",
          args:arguments
        };
        });
      var recurP164088 = (function (val164089)        {
        if ((("undefined")===((typeof val164089))))          {
          return false;
          };
        return (val164089.recurSigil===("recurSigil164084"));
        });
      var actualFun164087 = (function ()        {
        return (function (arguments)          {
          var G164091 = undefined;
          var G164092 = Array.prototype.slice.apply(arguments);
          G164091 = (function (arguments)            {
            var matchVal164093 = G164092;
            if ((!((("object")===((typeof matchVal164093))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal164093.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart164094 = Array.prototype.slice.call(matchVal164093, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart164094))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart164094.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var s = matchArraySimplePart164094[0];
            var matchArrayTailPart164095 = Array.prototype.slice.call(matchVal164093, 1);
            var matchTemp164096 = matchArrayTailPart164095[0];
            var previousMatchSucceeded164097 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTemp164096))))                {
                previousMatchSucceeded164097 = false;
                };
              var args = matchTemp164096;
              if (previousMatchSucceeded164097)                {
                break;
                };
              previousMatchSucceeded164097 = true;
              case 1:
              var fResult164098 = ((function (x)                {
                return "g";
                }))(matchTemp164096);
              if ((fResult164098===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceeded164097 = false;
                };
              var args = fResult164098;
              if (previousMatchSucceeded164097)                {
                break;
                };
              previousMatchSucceeded164097 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            return (new (RegExp)(s, args));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G164091))))            {
            return G164091;
            };
          G164091 = (function (arguments)            {
            var matchVal164099 = G164092;
            var anythingElse164090 = matchVal164099;
            throw ((("Match fail in hooves/hooves-rx against: ")+anythingElse164090));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G164091))))            {
            return G164091;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: s :- (opt args ''g'')] (_newline-sequence (new RegExp s args))) (anything-else-164090 (_throw (_+ ''Match fail in hooves/hooves-rx against: '' anything-else-164090))))) for value ")+(JSON.stringify(G164092))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue164085 = actualFun164087.apply(this, arguments);
      while (recurP164088(returnValue164085))        {
        returnValue164085 = actualFun164087.apply(this, returnValue164085.args);
        };
      return returnValue164085;
      });
    currentModule163198.prefix = (function (i, ra)      {
      return [i].concat(ra);
      });
    var pushdividereturn = (function (item, array)      {
      array.push(item);
      return array;
      });
    currentModule163198.filter = (function ()      {
      var returnValue164152 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil164151",
          args:arguments
        };
        });
      var recurP164155 = (function (val164156)        {
        if ((("undefined")===((typeof val164156))))          {
          return false;
          };
        return (val164156.recurSigil===("recurSigil164151"));
        });
      var actualFun164154 = (function ()        {
        return (function (arguments)          {
          var G164158 = undefined;
          var G164159 = Array.prototype.slice.apply(arguments);
          G164158 = (function (arguments)            {
            var matchVal164160 = G164159;
            if ((!((("object")===((typeof matchVal164160))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchVal164160.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp164161 = matchVal164160[0];
            var matchTemp164162 = matchVal164160[1];
            var matchTemp164163 = matchVal164160[2];
            var fun = matchTemp164161;
            if ((!((("object")===((typeof matchTemp164162))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchTemp164162.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var acc = matchTemp164163;
            return acc;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G164158))))            {
            return G164158;
            };
          G164158 = (function (arguments)            {
            var matchVal164164 = G164159;
            if ((!((("object")===((typeof matchVal164164))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchVal164164.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp164165 = matchVal164164[0];
            var matchTemp164166 = matchVal164164[1];
            var matchTemp164167 = matchVal164164[2];
            var fun = matchTemp164165;
            if ((!((("object")===((typeof matchTemp164166))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchTemp164166.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart164168 = Array.prototype.slice.call(matchTemp164166, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart164168))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart164168.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart164168[0];
            var matchArrayTailPart164169 = Array.prototype.slice.call(matchTemp164166, 1);
            var tl = matchArrayTailPart164169;
            var acc = matchTemp164167;
            var r = fun(hd);
            return ((r)?(recur(fun, tl, pushdividereturn(hd, acc))) : (recur(fun, tl, acc)));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G164158))))            {
            return G164158;
            };
          G164158 = (function (arguments)            {
            var matchVal164170 = G164159;
            if ((!((("object")===((typeof matchVal164170))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchVal164170.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var fun = matchVal164170[0];
            var ra = matchVal164170[1];
            return recur(fun, ra, []);
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G164158))))            {
            return G164158;
            };
          G164158 = (function (arguments)            {
            var matchVal164171 = G164159;
            var anythingElse164157 = matchVal164171;
            throw ((("Match fail in hooves/hooves-filter against: ")+anythingElse164157));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G164158))))            {
            return G164158;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: fun [:] acc] (_newline-sequence acc)) ([: fun [: hd (tail tl)] acc] (_newline-sequence (var r (fun hd)) (if r (recur fun tl (push/return hd acc)) (recur fun tl acc)))) ([: fun ra] (_newline-sequence (recur fun ra [:]))) (anything-else-164157 (_throw (_+ ''Match fail in hooves/hooves-filter against: '' anything-else-164157))))) for value ")+(JSON.stringify(G164159))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue164152 = actualFun164154.apply(this, arguments);
      while (recurP164155(returnValue164152))        {
        returnValue164152 = actualFun164154.apply(this, returnValue164152.args);
        };
      return returnValue164152;
      });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModule163198;
  }))