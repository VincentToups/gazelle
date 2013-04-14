define([], (function ()  {
  var currentModule112589 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModule112589 = value;
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
    currentModule112589.definedPredicate = (function (x)      {
      return (!((((typeof x))===("undefined"))));
      });
    currentModule112589.undefinedPredicate = (function (x)      {
      return (((typeof x))===("undefined"));
      });
    currentModule112589.numberPredicate = (function (o)      {
      return (((typeof o))===("number"));
      });
    currentModule112589.stringPredicate = (function (o)      {
      return (((typeof o))===("string"));
      });
    currentModule112589.arrayPredicate = (function (o)      {
      return (o instanceof Array);
      });
    currentModule112589.emptyPredicate = (function (o)      {
      return (0===o.length);
      });
    // collect{}
    // macro - no dynamic value.
    ;
    // @
    // macro - no dynamic value.
    ;
    currentModule112589.TripleEqualminus_ = (function (partial)      {
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
    currentModule112589.Delay = (function (lambdaExpr)      {
      this.lambdaExpr = lambdaExpr;
      return this;
      });
    currentModule112589.Delay.prototype.value = (function ()      {
      return this.lambdaExpr();
      });
    // delay
    // macro - no dynamic value.
    ;
    currentModule112589.undelay = (function (o)      {
      return (function (arguments)        {
        var G112826 = undefined;
        var G112827 = o;
        G112826 = (function (arguments)          {
          var matchVal112828 = G112827;
          var matchFunExpr112830 = (function (G112829)            {
            return (G112829 instanceof currentModule112589.Delay);
            });
          if ((!(matchFunExpr112830(matchVal112828))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var delayObject = matchVal112828;
          return delayObject.value();
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G112826))))          {
          return G112826;
          };
        throw ((("match-fail at ((match o ((instance Delay delay-object) (delay-object\\.value)))) for value ")+(JSON.stringify(G112827))));
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
    currentModule112589.range = (function ()      {
      var returnValue112885 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil112884",
          args:arguments
        };
        });
      var recurP112888 = (function (val112889)        {
        if ((("undefined")===((typeof val112889))))          {
          return false;
          };
        return (val112889.recurSigil===("recurSigil112884"));
        });
      var actualFun112887 = (function ()        {
        return (function (arguments)          {
          var G112891 = undefined;
          var G112892 = Array.prototype.slice.apply(arguments);
          G112891 = (function (arguments)            {
            var matchVal112893 = G112892;
            if ((!((("object")===((typeof matchVal112893))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((4===matchVal112893.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchVal112893[0];
            var step = matchVal112893[1];
            var stop = matchVal112893[2];
            var transform = matchVal112893[3];
            var out = [];
            for (var i = start;(i<stop);i = (i+step))              {
              out.push(transform(i));
              };
            return out;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G112891))))            {
            return G112891;
            };
          G112891 = (function (arguments)            {
            var matchVal112894 = G112892;
            if ((!((("object")===((typeof matchVal112894))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchVal112894.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchVal112894[0];
            var step = matchVal112894[1];
            var stop = matchVal112894[2];
            return recur(start, step, stop, (function (v)              {
              return v;
              }));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G112891))))            {
            return G112891;
            };
          G112891 = (function (arguments)            {
            var matchVal112895 = G112892;
            if ((!((("object")===((typeof matchVal112895))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchVal112895.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchVal112895[0];
            var stop = matchVal112895[1];
            return recur(start, 1, stop, (function (v)              {
              return v;
              }));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G112891))))            {
            return G112891;
            };
          G112891 = (function (arguments)            {
            var matchVal112896 = G112892;
            if ((!((("object")===((typeof matchVal112896))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchVal112896.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var stop = matchVal112896[0];
            return recur(0, 1, stop, (function (v)              {
              return v;
              }));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G112891))))            {
            return G112891;
            };
          G112891 = (function (arguments)            {
            var matchVal112897 = G112892;
            var anythingElse112890 = matchVal112897;
            throw ((("Match fail in hooves/hooves-range against: ")+anythingElse112890));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G112891))))            {
            return G112891;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: start step stop transform] (_newline-sequence (var out [:]) (for ((var i start) (_< i stop) (set! i (_+ i step))) (out\\.push (transform i))) out)) ([: start step stop] (_newline-sequence (recur start step stop (lambda (v) v)))) ([: start stop] (_newline-sequence (recur start 1 stop (lambda (v) v)))) ([: stop] (_newline-sequence (recur 0 1 stop (lambda (v) v)))) (anything-else-112890 (_throw (_+ ''Match fail in hooves/hooves-range against: '' anything-else-112890))))) for value ")+(JSON.stringify(G112892))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue112885 = actualFun112887.apply(this, arguments);
      while (recurP112888(returnValue112885))        {
        returnValue112885 = actualFun112887.apply(this, returnValue112885.args);
        };
      return returnValue112885;
      });
    // with-slots
    // macro - no dynamic value.
    ;
    currentModule112589.plus = (function ()      {
      var returnValue112927 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil112926",
          args:arguments
        };
        });
      var recurP112930 = (function (val112931)        {
        if ((("undefined")===((typeof val112931))))          {
          return false;
          };
        return (val112931.recurSigil===("recurSigil112926"));
        });
      var actualFun112929 = (function ()        {
        return (function (arguments)          {
          var G112933 = undefined;
          var G112934 = Array.prototype.slice.apply(arguments);
          G112933 = (function (arguments)            {
            var matchVal112935 = G112934;
            if ((!((("object")===((typeof matchVal112935))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal112935.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart112936 = Array.prototype.slice.call(matchVal112935, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart112936))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart112936.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart112936[0];
            var matchArrayTailPart112937 = Array.prototype.slice.call(matchVal112935, 1);
            var tl = matchArrayTailPart112937;
            var result = hd;
            for (i in (tl))              {
              result = (result+(tl[i]));
              };
            return result;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G112933))))            {
            return G112933;
            };
          G112933 = (function (arguments)            {
            var matchVal112938 = G112934;
            var anythingElse112932 = matchVal112938;
            throw ((("Match fail in hooves/hooves-+ against: ")+anythingElse112932));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G112933))))            {
            return G112933;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result)) (anything-else-112932 (_throw (_+ ''Match fail in hooves/hooves-+ against: '' anything-else-112932))))) for value ")+(JSON.stringify(G112934))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue112927 = actualFun112929.apply(this, arguments);
      while (recurP112930(returnValue112927))        {
        returnValue112927 = actualFun112929.apply(this, returnValue112927.args);
        };
      return returnValue112927;
      });
    currentModule112589.minus = (function ()      {
      var returnValue112962 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil112961",
          args:arguments
        };
        });
      var recurP112965 = (function (val112966)        {
        if ((("undefined")===((typeof val112966))))          {
          return false;
          };
        return (val112966.recurSigil===("recurSigil112961"));
        });
      var actualFun112964 = (function ()        {
        return (function (arguments)          {
          var G112968 = undefined;
          var G112969 = Array.prototype.slice.apply(arguments);
          G112968 = (function (arguments)            {
            var matchVal112970 = G112969;
            if ((!((("object")===((typeof matchVal112970))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal112970.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart112971 = Array.prototype.slice.call(matchVal112970, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart112971))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart112971.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart112971[0];
            var matchArrayTailPart112972 = Array.prototype.slice.call(matchVal112970, 1);
            var tl = matchArrayTailPart112972;
            return (((tl.length>0))?((hd-(apply(currentModule112589.plus, tl)))) : ((-(hd))));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G112968))))            {
            return G112968;
            };
          G112968 = (function (arguments)            {
            var matchVal112973 = G112969;
            var anythingElse112967 = matchVal112973;
            throw ((("Match fail in hooves/hooves-- against: ")+anythingElse112967));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G112968))))            {
            return G112968;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (if (_> tl\\.length 0) (_- hd (apply + tl)) (_- hd)))) (anything-else-112967 (_throw (_+ ''Match fail in hooves/hooves-- against: '' anything-else-112967))))) for value ")+(JSON.stringify(G112969))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue112962 = actualFun112964.apply(this, arguments);
      while (recurP112965(returnValue112962))        {
        returnValue112962 = actualFun112964.apply(this, returnValue112962.args);
        };
      return returnValue112962;
      });
    currentModule112589.times = (function ()      {
      var returnValue112997 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil112996",
          args:arguments
        };
        });
      var recurP113000 = (function (val113001)        {
        if ((("undefined")===((typeof val113001))))          {
          return false;
          };
        return (val113001.recurSigil===("recurSigil112996"));
        });
      var actualFun112999 = (function ()        {
        return (function (arguments)          {
          var G113003 = undefined;
          var G113004 = Array.prototype.slice.apply(arguments);
          G113003 = (function (arguments)            {
            var matchVal113005 = G113004;
            if ((!((("object")===((typeof matchVal113005))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal113005.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart113006 = Array.prototype.slice.call(matchVal113005, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart113006))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart113006.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart113006[0];
            var matchArrayTailPart113007 = Array.prototype.slice.call(matchVal113005, 1);
            var tl = matchArrayTailPart113007;
            var result = hd;
            for (i in (tl))              {
              result = (result*(tl[i]));
              };
            return result;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G113003))))            {
            return G113003;
            };
          G113003 = (function (arguments)            {
            var matchVal113008 = G113004;
            var anythingElse113002 = matchVal113008;
            throw ((("Match fail in hooves/hooves-* against: ")+anythingElse113002));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G113003))))            {
            return G113003;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result)) (anything-else-113002 (_throw (_+ ''Match fail in hooves/hooves-* against: '' anything-else-113002))))) for value ")+(JSON.stringify(G113004))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue112997 = actualFun112999.apply(this, arguments);
      while (recurP113000(returnValue112997))        {
        returnValue112997 = actualFun112999.apply(this, returnValue112997.args);
        };
      return returnValue112997;
      });
    currentModule112589.divide = (function ()      {
      var returnValue113032 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil113031",
          args:arguments
        };
        });
      var recurP113035 = (function (val113036)        {
        if ((("undefined")===((typeof val113036))))          {
          return false;
          };
        return (val113036.recurSigil===("recurSigil113031"));
        });
      var actualFun113034 = (function ()        {
        return (function (arguments)          {
          var G113038 = undefined;
          var G113039 = Array.prototype.slice.apply(arguments);
          G113038 = (function (arguments)            {
            var matchVal113040 = G113039;
            if ((!((("object")===((typeof matchVal113040))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal113040.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart113041 = Array.prototype.slice.call(matchVal113040, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart113041))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart113041.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart113041[0];
            var matchArrayTailPart113042 = Array.prototype.slice.call(matchVal113040, 1);
            var tl = matchArrayTailPart113042;
            return (hd/(apply(currentModule112589.times, tl)));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G113038))))            {
            return G113038;
            };
          G113038 = (function (arguments)            {
            var matchVal113043 = G113039;
            var anythingElse113037 = matchVal113043;
            throw ((("Match fail in hooves/hooves-/ against: ")+anythingElse113037));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G113038))))            {
            return G113038;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (_/ hd (apply * tl)))) (anything-else-113037 (_throw (_+ ''Match fail in hooves/hooves-/ against: '' anything-else-113037))))) for value ")+(JSON.stringify(G113039))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue113032 = actualFun113034.apply(this, arguments);
      while (recurP113035(returnValue113032))        {
        returnValue113032 = actualFun113034.apply(this, returnValue113032.args);
        };
      return returnValue113032;
      });
    // define-external-binop
    // macro - no dynamic value.
    ;
    // define-external-binops
    // macro - no dynamic value.
    ;
    currentModule112589.lessThan = (function (G113053, G113054)      {
      return (G113053<G113054);
      });
    currentModule112589.lessThanequal = (function (G113080, G113081)      {
      return (G113080<=G113081);
      });
    currentModule112589.greaterThan = (function (G113107, G113108)      {
      return (G113107>G113108);
      });
    currentModule112589.greaterThanequal = (function (G113134, G113135)      {
      return (G113134>=G113135);
      });
    currentModule112589.ampersand = (function (G113161, G113162)      {
      return (G113161&G113162);
      });
    currentModule112589.pipe = (function (G113188, G113189)      {
      return (G113188|G113189);
      });
    currentModule112589.equalequal = (function (G113215, G113216)      {
      return (G113215==G113216);
      });
    currentModule112589.TripleEqualminus = (function (G113242, G113243)      {
      return (G113242===G113243);
      });
    currentModule112589.modsign = (function (G113269, G113270)      {
      return (G113269%G113270);
      });
    currentModule112589.caret = (function (G113296, G113297)      {
      return (G113296^G113297);
      });
    currentModule112589.lessThanlessThan = (function (G113323, G113324)      {
      return (G113323<<G113324);
      });
    currentModule112589.greaterThangreaterThan = (function (G113350, G113351)      {
      return (G113350>>G113351);
      });
    currentModule112589.greaterThangreaterThangreaterThan = (function (G113377, G113378)      {
      return (G113377>>>G113378);
      });
    ;
    // &&
    // macro - no dynamic value.
    ;
    // ||
    // macro - no dynamic value.
    ;
    currentModule112589.bang = (function (o)      {
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
    currentModule112589.rx = (function ()      {
      var returnValue113476 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil113475",
          args:arguments
        };
        });
      var recurP113479 = (function (val113480)        {
        if ((("undefined")===((typeof val113480))))          {
          return false;
          };
        return (val113480.recurSigil===("recurSigil113475"));
        });
      var actualFun113478 = (function ()        {
        return (function (arguments)          {
          var G113482 = undefined;
          var G113483 = Array.prototype.slice.apply(arguments);
          G113482 = (function (arguments)            {
            var matchVal113484 = G113483;
            if ((!((("object")===((typeof matchVal113484))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal113484.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart113485 = Array.prototype.slice.call(matchVal113484, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart113485))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart113485.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var s = matchArraySimplePart113485[0];
            var matchArrayTailPart113486 = Array.prototype.slice.call(matchVal113484, 1);
            var matchTemp113487 = matchArrayTailPart113486[0];
            var previousMatchSucceeded113488 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTemp113487))))                {
                previousMatchSucceeded113488 = false;
                };
              var args = matchTemp113487;
              if (previousMatchSucceeded113488)                {
                break;
                };
              previousMatchSucceeded113488 = true;
              case 1:
              var fResult113489 = ((function (x)                {
                return "g";
                }))(matchTemp113487);
              if ((fResult113489===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceeded113488 = false;
                };
              var args = fResult113489;
              if (previousMatchSucceeded113488)                {
                break;
                };
              previousMatchSucceeded113488 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            return (new (RegExp)(s, args));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G113482))))            {
            return G113482;
            };
          G113482 = (function (arguments)            {
            var matchVal113490 = G113483;
            var anythingElse113481 = matchVal113490;
            throw ((("Match fail in hooves/hooves-rx against: ")+anythingElse113481));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G113482))))            {
            return G113482;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: s :- (opt args ''g'')] (_newline-sequence (new RegExp s args))) (anything-else-113481 (_throw (_+ ''Match fail in hooves/hooves-rx against: '' anything-else-113481))))) for value ")+(JSON.stringify(G113483))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue113476 = actualFun113478.apply(this, arguments);
      while (recurP113479(returnValue113476))        {
        returnValue113476 = actualFun113478.apply(this, returnValue113476.args);
        };
      return returnValue113476;
      });
    currentModule112589.prefix = (function (i, ra)      {
      return [i].concat(ra);
      });
    var pushdividereturn = (function (item, array)      {
      array.push(item);
      return array;
      });
    currentModule112589.filter = (function ()      {
      var returnValue113543 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil113542",
          args:arguments
        };
        });
      var recurP113546 = (function (val113547)        {
        if ((("undefined")===((typeof val113547))))          {
          return false;
          };
        return (val113547.recurSigil===("recurSigil113542"));
        });
      var actualFun113545 = (function ()        {
        return (function (arguments)          {
          var G113549 = undefined;
          var G113550 = Array.prototype.slice.apply(arguments);
          G113549 = (function (arguments)            {
            var matchVal113551 = G113550;
            if ((!((("object")===((typeof matchVal113551))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchVal113551.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp113552 = matchVal113551[0];
            var matchTemp113553 = matchVal113551[1];
            var matchTemp113554 = matchVal113551[2];
            var fun = matchTemp113552;
            if ((!((("object")===((typeof matchTemp113553))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchTemp113553.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var acc = matchTemp113554;
            return acc;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G113549))))            {
            return G113549;
            };
          G113549 = (function (arguments)            {
            var matchVal113555 = G113550;
            if ((!((("object")===((typeof matchVal113555))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchVal113555.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp113556 = matchVal113555[0];
            var matchTemp113557 = matchVal113555[1];
            var matchTemp113558 = matchVal113555[2];
            var fun = matchTemp113556;
            if ((!((("object")===((typeof matchTemp113557))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchTemp113557.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart113559 = Array.prototype.slice.call(matchTemp113557, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart113559))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart113559.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart113559[0];
            var matchArrayTailPart113560 = Array.prototype.slice.call(matchTemp113557, 1);
            var tl = matchArrayTailPart113560;
            var acc = matchTemp113558;
            var r = fun(hd);
            return ((r)?(recur(fun, tl, pushdividereturn(hd, acc))) : (recur(fun, tl, acc)));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G113549))))            {
            return G113549;
            };
          G113549 = (function (arguments)            {
            var matchVal113561 = G113550;
            if ((!((("object")===((typeof matchVal113561))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchVal113561.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var fun = matchVal113561[0];
            var ra = matchVal113561[1];
            return recur(fun, ra, []);
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G113549))))            {
            return G113549;
            };
          G113549 = (function (arguments)            {
            var matchVal113562 = G113550;
            var anythingElse113548 = matchVal113562;
            throw ((("Match fail in hooves/hooves-filter against: ")+anythingElse113548));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G113549))))            {
            return G113549;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: fun [:] acc] (_newline-sequence acc)) ([: fun [: hd (tail tl)] acc] (_newline-sequence (var r (fun hd)) (if r (recur fun tl (push/return hd acc)) (recur fun tl acc)))) ([: fun ra] (_newline-sequence (recur fun ra [:]))) (anything-else-113548 (_throw (_+ ''Match fail in hooves/hooves-filter against: '' anything-else-113548))))) for value ")+(JSON.stringify(G113550))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue113543 = actualFun113545.apply(this, arguments);
      while (recurP113546(returnValue113543))        {
        returnValue113543 = actualFun113545.apply(this, returnValue113543.args);
        };
      return returnValue113543;
      });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModule112589;
  }))