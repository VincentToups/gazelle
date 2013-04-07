define([], (function ()  {
  var currentModule95863 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModule95863 = value;
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
    currentModule95863.definedPredicate = (function (x)      {
      return (!((((typeof x))===("undefined"))));
      });
    currentModule95863.undefinedPredicate = (function (x)      {
      return (((typeof x))===("undefined"));
      });
    currentModule95863.numberPredicate = (function (o)      {
      return (((typeof o))===("number"));
      });
    currentModule95863.stringPredicate = (function (o)      {
      return (((typeof o))===("string"));
      });
    currentModule95863.arrayPredicate = (function (o)      {
      return (o instanceof Array);
      });
    currentModule95863.emptyPredicate = (function (o)      {
      return (0===o.length);
      });
    // collect{}
    // macro - no dynamic value.
    ;
    // @
    // macro - no dynamic value.
    ;
    currentModule95863.TripleEqualminus_ = (function (partial)      {
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
    currentModule95863.Delay = (function (lambdaExpr)      {
      this.lambdaExpr = lambdaExpr;
      return this;
      });
    currentModule95863.Delay.prototype.value = (function ()      {
      return this.lambdaExpr();
      });
    // delay
    // macro - no dynamic value.
    ;
    currentModule95863.undelay = (function (o)      {
      return (function (arguments)        {
        var G96100 = undefined;
        var G96101 = o;
        G96100 = (function (arguments)          {
          var matchVal96102 = G96101;
          var matchFunExpr96104 = (function (G96103)            {
            return (G96103 instanceof currentModule95863.Delay);
            });
          if ((!(matchFunExpr96104(matchVal96102))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var delayObject = matchVal96102;
          return delayObject.value();
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G96100))))          {
          return G96100;
          };
        throw ((("match-fail at ((match o ((instance Delay delay-object) (delay-object\.value)))) for value ")+(JSON.stringify(G96101))));
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
    currentModule95863.range = (function ()      {
      var returnValue96159 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil96158",
          args:arguments
        };
        });
      var recurP96162 = (function (val96163)        {
        if ((("undefined")===((typeof val96163))))          {
          return false;
          };
        return (val96163.recurSigil===("recurSigil96158"));
        });
      var actualFun96161 = (function ()        {
        return (function (arguments)          {
          var G96165 = undefined;
          var G96166 = Array.prototype.slice.apply(arguments);
          G96165 = (function (arguments)            {
            var matchVal96167 = G96166;
            if ((!((("object")===((typeof matchVal96167))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((4===matchVal96167.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchVal96167[0];
            var step = matchVal96167[1];
            var stop = matchVal96167[2];
            var transform = matchVal96167[3];
            var out = [];
            for (var i = start;(i<stop);i = (i+step))              {
              out.push(transform(i));
              };
            return out;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G96165))))            {
            return G96165;
            };
          G96165 = (function (arguments)            {
            var matchVal96168 = G96166;
            if ((!((("object")===((typeof matchVal96168))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchVal96168.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchVal96168[0];
            var step = matchVal96168[1];
            var stop = matchVal96168[2];
            return recur(start, step, stop, (function (v)              {
              return v;
              }));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G96165))))            {
            return G96165;
            };
          G96165 = (function (arguments)            {
            var matchVal96169 = G96166;
            if ((!((("object")===((typeof matchVal96169))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchVal96169.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchVal96169[0];
            var stop = matchVal96169[1];
            return recur(start, 1, stop, (function (v)              {
              return v;
              }));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G96165))))            {
            return G96165;
            };
          G96165 = (function (arguments)            {
            var matchVal96170 = G96166;
            if ((!((("object")===((typeof matchVal96170))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchVal96170.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var stop = matchVal96170[0];
            return recur(0, 1, stop, (function (v)              {
              return v;
              }));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G96165))))            {
            return G96165;
            };
          G96165 = (function (arguments)            {
            var matchVal96171 = G96166;
            var anythingElse96164 = matchVal96171;
            throw ((("Match fail in hooves/hooves-range against: ")+anythingElse96164));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G96165))))            {
            return G96165;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: start step stop transform] (var out [:]) (for ((var i start) (_< i stop) (set! i (_+ i step))) (out\.push (transform i))) out) ([: start step stop] (recur start step stop (lambda (v) v))) ([: start stop] (recur start 1 stop (lambda (v) v))) ([: stop] (recur 0 1 stop (lambda (v) v))) (anything-else-96164 (_throw (_+ ''Match fail in hooves/hooves-range against: '' anything-else-96164))))) for value ")+(JSON.stringify(G96166))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue96159 = actualFun96161.apply(this, arguments);
      while (recurP96162(returnValue96159))        {
        returnValue96159 = actualFun96161.apply(this, returnValue96159.args);
        };
      return returnValue96159;
      });
    // with-slots
    // macro - no dynamic value.
    ;
    currentModule95863.plus = (function ()      {
      var returnValue96201 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil96200",
          args:arguments
        };
        });
      var recurP96204 = (function (val96205)        {
        if ((("undefined")===((typeof val96205))))          {
          return false;
          };
        return (val96205.recurSigil===("recurSigil96200"));
        });
      var actualFun96203 = (function ()        {
        return (function (arguments)          {
          var G96207 = undefined;
          var G96208 = Array.prototype.slice.apply(arguments);
          G96207 = (function (arguments)            {
            var matchVal96209 = G96208;
            if ((!((("object")===((typeof matchVal96209))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal96209.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart96210 = Array.prototype.slice.call(matchVal96209, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart96210))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart96210.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart96210[0];
            var matchArrayTailPart96211 = Array.prototype.slice.call(matchVal96209, 1);
            var tl = matchArrayTailPart96211;
            var result = hd;
            for (i in (tl))              {
              result = (result+(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G96207))))            {
            return G96207;
            };
          G96207 = (function (arguments)            {
            var matchVal96212 = G96208;
            var anythingElse96206 = matchVal96212;
            throw ((("Match fail in hooves/hooves-+ against: ")+anythingElse96206));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G96207))))            {
            return G96207;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result) (anything-else-96206 (_throw (_+ ''Match fail in hooves/hooves-+ against: '' anything-else-96206))))) for value ")+(JSON.stringify(G96208))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue96201 = actualFun96203.apply(this, arguments);
      while (recurP96204(returnValue96201))        {
        returnValue96201 = actualFun96203.apply(this, returnValue96201.args);
        };
      return returnValue96201;
      });
    currentModule95863.minus = (function ()      {
      var returnValue96236 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil96235",
          args:arguments
        };
        });
      var recurP96239 = (function (val96240)        {
        if ((("undefined")===((typeof val96240))))          {
          return false;
          };
        return (val96240.recurSigil===("recurSigil96235"));
        });
      var actualFun96238 = (function ()        {
        return (function (arguments)          {
          var G96242 = undefined;
          var G96243 = Array.prototype.slice.apply(arguments);
          G96242 = (function (arguments)            {
            var matchVal96244 = G96243;
            if ((!((("object")===((typeof matchVal96244))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal96244.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart96245 = Array.prototype.slice.call(matchVal96244, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart96245))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart96245.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart96245[0];
            var matchArrayTailPart96246 = Array.prototype.slice.call(matchVal96244, 1);
            var tl = matchArrayTailPart96246;
            return (((tl.length>0))?((hd-(apply(currentModule95863.plus, tl)))) : ((-(hd))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G96242))))            {
            return G96242;
            };
          G96242 = (function (arguments)            {
            var matchVal96247 = G96243;
            var anythingElse96241 = matchVal96247;
            throw ((("Match fail in hooves/hooves-- against: ")+anythingElse96241));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G96242))))            {
            return G96242;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (if (_> tl\.length 0) (_- hd (apply + tl)) (_- hd))) (anything-else-96241 (_throw (_+ ''Match fail in hooves/hooves-- against: '' anything-else-96241))))) for value ")+(JSON.stringify(G96243))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue96236 = actualFun96238.apply(this, arguments);
      while (recurP96239(returnValue96236))        {
        returnValue96236 = actualFun96238.apply(this, returnValue96236.args);
        };
      return returnValue96236;
      });
    currentModule95863.times = (function ()      {
      var returnValue96271 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil96270",
          args:arguments
        };
        });
      var recurP96274 = (function (val96275)        {
        if ((("undefined")===((typeof val96275))))          {
          return false;
          };
        return (val96275.recurSigil===("recurSigil96270"));
        });
      var actualFun96273 = (function ()        {
        return (function (arguments)          {
          var G96277 = undefined;
          var G96278 = Array.prototype.slice.apply(arguments);
          G96277 = (function (arguments)            {
            var matchVal96279 = G96278;
            if ((!((("object")===((typeof matchVal96279))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal96279.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart96280 = Array.prototype.slice.call(matchVal96279, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart96280))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart96280.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart96280[0];
            var matchArrayTailPart96281 = Array.prototype.slice.call(matchVal96279, 1);
            var tl = matchArrayTailPart96281;
            var result = hd;
            for (i in (tl))              {
              result = (result*(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G96277))))            {
            return G96277;
            };
          G96277 = (function (arguments)            {
            var matchVal96282 = G96278;
            var anythingElse96276 = matchVal96282;
            throw ((("Match fail in hooves/hooves-* against: ")+anythingElse96276));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G96277))))            {
            return G96277;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result) (anything-else-96276 (_throw (_+ ''Match fail in hooves/hooves-* against: '' anything-else-96276))))) for value ")+(JSON.stringify(G96278))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue96271 = actualFun96273.apply(this, arguments);
      while (recurP96274(returnValue96271))        {
        returnValue96271 = actualFun96273.apply(this, returnValue96271.args);
        };
      return returnValue96271;
      });
    currentModule95863.divide = (function ()      {
      var returnValue96306 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil96305",
          args:arguments
        };
        });
      var recurP96309 = (function (val96310)        {
        if ((("undefined")===((typeof val96310))))          {
          return false;
          };
        return (val96310.recurSigil===("recurSigil96305"));
        });
      var actualFun96308 = (function ()        {
        return (function (arguments)          {
          var G96312 = undefined;
          var G96313 = Array.prototype.slice.apply(arguments);
          G96312 = (function (arguments)            {
            var matchVal96314 = G96313;
            if ((!((("object")===((typeof matchVal96314))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal96314.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart96315 = Array.prototype.slice.call(matchVal96314, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart96315))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart96315.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart96315[0];
            var matchArrayTailPart96316 = Array.prototype.slice.call(matchVal96314, 1);
            var tl = matchArrayTailPart96316;
            return (hd/(apply(currentModule95863.times, tl)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G96312))))            {
            return G96312;
            };
          G96312 = (function (arguments)            {
            var matchVal96317 = G96313;
            var anythingElse96311 = matchVal96317;
            throw ((("Match fail in hooves/hooves-/ against: ")+anythingElse96311));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G96312))))            {
            return G96312;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_/ hd (apply * tl))) (anything-else-96311 (_throw (_+ ''Match fail in hooves/hooves-/ against: '' anything-else-96311))))) for value ")+(JSON.stringify(G96313))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue96306 = actualFun96308.apply(this, arguments);
      while (recurP96309(returnValue96306))        {
        returnValue96306 = actualFun96308.apply(this, returnValue96306.args);
        };
      return returnValue96306;
      });
    // define-external-binop
    // macro - no dynamic value.
    ;
    // define-external-binops
    // macro - no dynamic value.
    ;
    currentModule95863.lessThan = (function (G96327, G96328)      {
      return (G96327<G96328);
      });
    currentModule95863.lessThanequal = (function (G96354, G96355)      {
      return (G96354<=G96355);
      });
    currentModule95863.greaterThan = (function (G96381, G96382)      {
      return (G96381>G96382);
      });
    currentModule95863.greaterThanequal = (function (G96408, G96409)      {
      return (G96408>=G96409);
      });
    currentModule95863.ampersand = (function (G96435, G96436)      {
      return (G96435&G96436);
      });
    currentModule95863.pipe = (function (G96462, G96463)      {
      return (G96462|G96463);
      });
    currentModule95863.equalequal = (function (G96489, G96490)      {
      return (G96489==G96490);
      });
    currentModule95863.TripleEqualminus = (function (G96516, G96517)      {
      return (G96516===G96517);
      });
    currentModule95863.modsign = (function (G96543, G96544)      {
      return (G96543%G96544);
      });
    currentModule95863.caret = (function (G96570, G96571)      {
      return (G96570^G96571);
      });
    currentModule95863.lessThanlessThan = (function (G96597, G96598)      {
      return (G96597<<G96598);
      });
    currentModule95863.greaterThangreaterThan = (function (G96624, G96625)      {
      return (G96624>>G96625);
      });
    currentModule95863.greaterThangreaterThangreaterThan = (function (G96651, G96652)      {
      return (G96651>>>G96652);
      });
    ;
    // &&
    // macro - no dynamic value.
    ;
    // ||
    // macro - no dynamic value.
    ;
    currentModule95863.bang = (function (o)      {
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
    currentModule95863.rx = (function ()      {
      var returnValue96750 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil96749",
          args:arguments
        };
        });
      var recurP96753 = (function (val96754)        {
        if ((("undefined")===((typeof val96754))))          {
          return false;
          };
        return (val96754.recurSigil===("recurSigil96749"));
        });
      var actualFun96752 = (function ()        {
        return (function (arguments)          {
          var G96756 = undefined;
          var G96757 = Array.prototype.slice.apply(arguments);
          G96756 = (function (arguments)            {
            var matchVal96758 = G96757;
            if ((!((("object")===((typeof matchVal96758))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal96758.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart96759 = Array.prototype.slice.call(matchVal96758, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart96759))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart96759.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var s = matchArraySimplePart96759[0];
            var matchArrayTailPart96760 = Array.prototype.slice.call(matchVal96758, 1);
            var matchTemp96761 = matchArrayTailPart96760[0];
            var previousMatchSucceeded96762 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTemp96761))))                {
                previousMatchSucceeded96762 = false;
                };
              var args = matchTemp96761;
              if (previousMatchSucceeded96762)                {
                break;
                };
              previousMatchSucceeded96762 = true;
              case 1:
              var fResult96763 = ((function (x)                {
                return "g";
                }))(matchTemp96761);
              if ((fResult96763===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceeded96762 = false;
                };
              var args = fResult96763;
              if (previousMatchSucceeded96762)                {
                break;
                };
              previousMatchSucceeded96762 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            return (new (RegExp)(s, args));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G96756))))            {
            return G96756;
            };
          G96756 = (function (arguments)            {
            var matchVal96764 = G96757;
            var anythingElse96755 = matchVal96764;
            throw ((("Match fail in hooves/hooves-rx against: ")+anythingElse96755));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G96756))))            {
            return G96756;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: s :- (opt args ''g'')] (new RegExp s args)) (anything-else-96755 (_throw (_+ ''Match fail in hooves/hooves-rx against: '' anything-else-96755))))) for value ")+(JSON.stringify(G96757))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue96750 = actualFun96752.apply(this, arguments);
      while (recurP96753(returnValue96750))        {
        returnValue96750 = actualFun96752.apply(this, returnValue96750.args);
        };
      return returnValue96750;
      });
    currentModule95863.prefix = (function (i, ra)      {
      return [i].concat(ra);
      });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModule95863;
  }))