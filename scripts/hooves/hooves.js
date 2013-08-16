define([], (function ()  {
  var currentModule79551 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModule79551 = value;
    });
  (function (arguments)    {
    // _current-module
    // macro - no dynamic value.
    ;
    // define+
    // macro - no dynamic value.
    ;
    // define-macro+
    // macro - no dynamic value.
    ;
    // define-pattern+
    // macro - no dynamic value.
    ;
    currentModule79551.definedPredicate = (function (x)      {
      return (!((((typeof x))===("undefined"))));
      });
    currentModule79551.undefinedPredicate = (function (x)      {
      return (((typeof x))===("undefined"));
      });
    currentModule79551.numberPredicate = (function (o)      {
      return (((typeof o))===("number"));
      });
    currentModule79551.stringPredicate = (function (o)      {
      return (((typeof o))===("string"));
      });
    currentModule79551.arrayPredicate = (function (o)      {
      return (o instanceof Array);
      });
    currentModule79551.emptyPredicate = (function (o)      {
      return (0===o.length);
      });
    currentModule79551.nullPredicate = (function (x)      {
      return currentModule79551.TripleEqualminus(null, x);
      });
    // collect{}
    // macro - no dynamic value.
    ;
    // collect->
    // macro - no dynamic value.
    ;
    // @
    // macro - no dynamic value.
    ;
    var apply = (function (f, lst)      {
      return f.apply(f, lst);
      });
    currentModule79551.TripleEqualminus_ = (function (partial)      {
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
    currentModule79551.Delay = (function (lambdaExpr)      {
      this.lambdaExpr = lambdaExpr;
      return this;
      });
    currentModule79551.Delay.prototype.value = (function ()      {
      return this.lambdaExpr();
      });
    // delay
    // macro - no dynamic value.
    ;
    currentModule79551.undelay = (function (o)      {
      return (function (arguments)        {
        var G79817 = undefined;
        var G79818 = o;
        G79817 = (function (arguments)          {
          var matchVal79819 = G79818;
          var matchFunExpr79821 = (function (G79820)            {
            return (G79820 instanceof currentModule79551.Delay);
            });
          if ((!(matchFunExpr79821(matchVal79819))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var delayObject = matchVal79819;
          return delayObject.value();
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G79817))))          {
          return G79817;
          };
        throw ((("match-fail at ((match o ((instance Delay delay-object) (delay-object\\.value)))) for value ")+(JSON.stringify(G79818))));
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
    currentModule79551.range = (function ()      {
      var returnValue79876 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil79875",
          args:arguments
        };
        });
      var recurP79879 = (function (val79880)        {
        if ((("undefined")===((typeof val79880))))          {
          return false;
          };
        return (val79880.recurSigil===("recurSigil79875"));
        });
      var actualFun79878 = (function ()        {
        return (function (arguments)          {
          var G79882 = undefined;
          var G79883 = Array.prototype.slice.apply(arguments);
          G79882 = (function (arguments)            {
            var matchVal79884 = G79883;
            if ((!((("object")===((typeof matchVal79884))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((4===matchVal79884.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchVal79884[0];
            var step = matchVal79884[1];
            var stop = matchVal79884[2];
            var transform = matchVal79884[3];
            var out = [];
            for (var i = start;(i<stop);i = ((i)+(step)))              {
              out.push(transform(i));
              };
            return out;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G79882))))            {
            return G79882;
            };
          G79882 = (function (arguments)            {
            var matchVal79885 = G79883;
            if ((!((("object")===((typeof matchVal79885))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchVal79885.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchVal79885[0];
            var step = matchVal79885[1];
            var stop = matchVal79885[2];
            return recur(start, step, stop, (function (v)              {
              return v;
              }));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G79882))))            {
            return G79882;
            };
          G79882 = (function (arguments)            {
            var matchVal79886 = G79883;
            if ((!((("object")===((typeof matchVal79886))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchVal79886.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchVal79886[0];
            var stop = matchVal79886[1];
            return recur(start, 1, stop, (function (v)              {
              return v;
              }));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G79882))))            {
            return G79882;
            };
          G79882 = (function (arguments)            {
            var matchVal79887 = G79883;
            if ((!((("object")===((typeof matchVal79887))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchVal79887.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var stop = matchVal79887[0];
            return recur(0, 1, stop, (function (v)              {
              return v;
              }));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G79882))))            {
            return G79882;
            };
          G79882 = (function (arguments)            {
            var matchVal79888 = G79883;
            var anythingElse79881 = matchVal79888;
            throw ((("Match fail in hooves/hooves-range against: ")+(anythingElse79881)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G79882))))            {
            return G79882;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: start step stop transform] (_newline-sequence (var out [:]) (for ((var i start) (_< i stop) (set! i (_+ i step))) (out\\.push (transform i))) out)) ([: start step stop] (_newline-sequence (recur start step stop (lambda (v) v)))) ([: start stop] (_newline-sequence (recur start 1 stop (lambda (v) v)))) ([: stop] (_newline-sequence (recur 0 1 stop (lambda (v) v)))) (anything-else-79881 (_throw (_+ ''Match fail in hooves/hooves-range against: '' anything-else-79881))))) for value ")+(JSON.stringify(G79883))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue79876 = actualFun79878.apply(this, arguments);
      while (recurP79879(returnValue79876))        {
        returnValue79876 = actualFun79878.apply(this, returnValue79876.args);
        };
      return returnValue79876;
      });
    currentModule79551.pureSort = (function ()      {
      var returnValue79912 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil79911",
          args:arguments
        };
        });
      var recurP79915 = (function (val79916)        {
        if ((("undefined")===((typeof val79916))))          {
          return false;
          };
        return (val79916.recurSigil===("recurSigil79911"));
        });
      var actualFun79914 = (function ()        {
        return (function (arguments)          {
          var G79918 = undefined;
          var G79919 = Array.prototype.slice.apply(arguments);
          G79918 = (function (arguments)            {
            var matchVal79920 = G79919;
            if ((!((("object")===((typeof matchVal79920))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal79920.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart79921 = Array.prototype.slice.call(matchVal79920, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart79921))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart79921.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var array = matchArraySimplePart79921[0];
            var matchArrayTailPart79922 = Array.prototype.slice.call(matchVal79920, 1);
            var matchTemp79923 = matchArrayTailPart79922[0];
            var previousMatchSucceeded79924 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTemp79923))))                {
                previousMatchSucceeded79924 = false;
                };
              var sortFun = matchTemp79923;
              if (previousMatchSucceeded79924)                {
                break;
                };
              previousMatchSucceeded79924 = true;
              case 1:
              var fResult79925 = ((function (x)                {
                return (function (a, b)                  {
                  return ((currentModule79551.lessThan(a, b))?(-1) : (1));
                  });
                }))(matchTemp79923);
              if ((fResult79925===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceeded79924 = false;
                };
              var sortFun = fResult79925;
              if (previousMatchSucceeded79924)                {
                break;
                };
              previousMatchSucceeded79924 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var copy = array.concat([]);
            copy.sort(sortFun);
            return copy;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G79918))))            {
            return G79918;
            };
          G79918 = (function (arguments)            {
            var matchVal79926 = G79919;
            var anythingElse79917 = matchVal79926;
            throw ((("Match fail in hooves/hooves-pure-sort against: ")+(anythingElse79917)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G79918))))            {
            return G79918;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: array :- (opt sort-fun (lambda (a b) (if (< a b) -1 1)))] (_newline-sequence (var copy (\\.\\. array (concat [:]))) (\\.\\. copy (sort sort-fun)) copy)) (anything-else-79917 (_throw (_+ ''Match fail in hooves/hooves-pure-sort against: '' anything-else-79917))))) for value ")+(JSON.stringify(G79919))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue79912 = actualFun79914.apply(this, arguments);
      while (recurP79915(returnValue79912))        {
        returnValue79912 = actualFun79914.apply(this, returnValue79912.args);
        };
      return returnValue79912;
      });
    // with-slots
    // macro - no dynamic value.
    ;
    currentModule79551.plus = (function ()      {
      var returnValue79956 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil79955",
          args:arguments
        };
        });
      var recurP79959 = (function (val79960)        {
        if ((("undefined")===((typeof val79960))))          {
          return false;
          };
        return (val79960.recurSigil===("recurSigil79955"));
        });
      var actualFun79958 = (function ()        {
        return (function (arguments)          {
          var G79962 = undefined;
          var G79963 = Array.prototype.slice.apply(arguments);
          G79962 = (function (arguments)            {
            var matchVal79964 = G79963;
            if ((!((("object")===((typeof matchVal79964))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal79964.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart79965 = Array.prototype.slice.call(matchVal79964, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart79965))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart79965.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart79965[0];
            var matchArrayTailPart79966 = Array.prototype.slice.call(matchVal79964, 1);
            var tl = matchArrayTailPart79966;
            var result = hd;
            for (i in (tl))              {
              result = ((result)+(tl[i]));
              };
            return result;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G79962))))            {
            return G79962;
            };
          G79962 = (function (arguments)            {
            var matchVal79967 = G79963;
            var anythingElse79961 = matchVal79967;
            throw ((("Match fail in hooves/hooves-+ against: ")+(anythingElse79961)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G79962))))            {
            return G79962;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result)) (anything-else-79961 (_throw (_+ ''Match fail in hooves/hooves-+ against: '' anything-else-79961))))) for value ")+(JSON.stringify(G79963))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue79956 = actualFun79958.apply(this, arguments);
      while (recurP79959(returnValue79956))        {
        returnValue79956 = actualFun79958.apply(this, returnValue79956.args);
        };
      return returnValue79956;
      });
    currentModule79551.minus = (function ()      {
      var returnValue79991 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil79990",
          args:arguments
        };
        });
      var recurP79994 = (function (val79995)        {
        if ((("undefined")===((typeof val79995))))          {
          return false;
          };
        return (val79995.recurSigil===("recurSigil79990"));
        });
      var actualFun79993 = (function ()        {
        return (function (arguments)          {
          var G79997 = undefined;
          var G79998 = Array.prototype.slice.apply(arguments);
          G79997 = (function (arguments)            {
            var matchVal79999 = G79998;
            if ((!((("object")===((typeof matchVal79999))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal79999.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart80000 = Array.prototype.slice.call(matchVal79999, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart80000))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart80000.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart80000[0];
            var matchArrayTailPart80001 = Array.prototype.slice.call(matchVal79999, 1);
            var tl = matchArrayTailPart80001;
            return (((tl.length>0))?(((hd)-(apply(currentModule79551.plus, tl)))) : ((-(hd))));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G79997))))            {
            return G79997;
            };
          G79997 = (function (arguments)            {
            var matchVal80002 = G79998;
            var anythingElse79996 = matchVal80002;
            throw ((("Match fail in hooves/hooves-- against: ")+(anythingElse79996)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G79997))))            {
            return G79997;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (if (_> tl\\.length 0) (_- hd (apply + tl)) (_- hd)))) (anything-else-79996 (_throw (_+ ''Match fail in hooves/hooves-- against: '' anything-else-79996))))) for value ")+(JSON.stringify(G79998))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue79991 = actualFun79993.apply(this, arguments);
      while (recurP79994(returnValue79991))        {
        returnValue79991 = actualFun79993.apply(this, returnValue79991.args);
        };
      return returnValue79991;
      });
    currentModule79551.times = (function ()      {
      var returnValue80026 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil80025",
          args:arguments
        };
        });
      var recurP80029 = (function (val80030)        {
        if ((("undefined")===((typeof val80030))))          {
          return false;
          };
        return (val80030.recurSigil===("recurSigil80025"));
        });
      var actualFun80028 = (function ()        {
        return (function (arguments)          {
          var G80032 = undefined;
          var G80033 = Array.prototype.slice.apply(arguments);
          G80032 = (function (arguments)            {
            var matchVal80034 = G80033;
            if ((!((("object")===((typeof matchVal80034))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal80034.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart80035 = Array.prototype.slice.call(matchVal80034, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart80035))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart80035.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart80035[0];
            var matchArrayTailPart80036 = Array.prototype.slice.call(matchVal80034, 1);
            var tl = matchArrayTailPart80036;
            var result = hd;
            for (i in (tl))              {
              result = ((result)*(tl[i]));
              };
            return result;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80032))))            {
            return G80032;
            };
          G80032 = (function (arguments)            {
            var matchVal80037 = G80033;
            var anythingElse80031 = matchVal80037;
            throw ((("Match fail in hooves/hooves-* against: ")+(anythingElse80031)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80032))))            {
            return G80032;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result)) (anything-else-80031 (_throw (_+ ''Match fail in hooves/hooves-* against: '' anything-else-80031))))) for value ")+(JSON.stringify(G80033))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue80026 = actualFun80028.apply(this, arguments);
      while (recurP80029(returnValue80026))        {
        returnValue80026 = actualFun80028.apply(this, returnValue80026.args);
        };
      return returnValue80026;
      });
    currentModule79551.divide = (function ()      {
      var returnValue80061 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil80060",
          args:arguments
        };
        });
      var recurP80064 = (function (val80065)        {
        if ((("undefined")===((typeof val80065))))          {
          return false;
          };
        return (val80065.recurSigil===("recurSigil80060"));
        });
      var actualFun80063 = (function ()        {
        return (function (arguments)          {
          var G80067 = undefined;
          var G80068 = Array.prototype.slice.apply(arguments);
          G80067 = (function (arguments)            {
            var matchVal80069 = G80068;
            if ((!((("object")===((typeof matchVal80069))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal80069.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart80070 = Array.prototype.slice.call(matchVal80069, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart80070))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart80070.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart80070[0];
            var matchArrayTailPart80071 = Array.prototype.slice.call(matchVal80069, 1);
            var tl = matchArrayTailPart80071;
            return ((hd)/((apply(currentModule79551.times, tl))));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80067))))            {
            return G80067;
            };
          G80067 = (function (arguments)            {
            var matchVal80072 = G80068;
            var anythingElse80066 = matchVal80072;
            throw ((("Match fail in hooves/hooves-/ against: ")+(anythingElse80066)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80067))))            {
            return G80067;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (_/ hd (apply * tl)))) (anything-else-80066 (_throw (_+ ''Match fail in hooves/hooves-/ against: '' anything-else-80066))))) for value ")+(JSON.stringify(G80068))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue80061 = actualFun80063.apply(this, arguments);
      while (recurP80064(returnValue80061))        {
        returnValue80061 = actualFun80063.apply(this, returnValue80061.args);
        };
      return returnValue80061;
      });
    currentModule79551.map1 = (function (f, a)      {
      var o = [];
      for (var i = 0;currentModule79551.lessThan(i, a.length);i = currentModule79551.plus(i, 1))        {
        o[i] = f(a[i]);
        };
      return o;
      });
    currentModule79551.min2 = (function (a, b)      {
      return ((currentModule79551.lessThan(a, b))?(a) : (b));
      });
    currentModule79551.max2 = (function (a, b)      {
      return ((currentModule79551.greaterThan(a, b))?(a) : (b));
      });
    var foldl = (function (fItAc, init, sequence)      {
      for (var i = 0;currentModule79551.lessThan(i, sequence.length);i = currentModule79551.plus(i, 1))        {
        init = fItAc(init, sequence[i]);
        };
      return init;
      });
    currentModule79551.min = (function ()      {
      var returnValue80162 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil80161",
          args:arguments
        };
        });
      var recurP80165 = (function (val80166)        {
        if ((("undefined")===((typeof val80166))))          {
          return false;
          };
        return (val80166.recurSigil===("recurSigil80161"));
        });
      var actualFun80164 = (function ()        {
        return (function (arguments)          {
          var G80168 = undefined;
          var G80169 = Array.prototype.slice.apply(arguments);
          G80168 = (function (arguments)            {
            var matchVal80170 = G80169;
            if ((!((("object")===((typeof matchVal80170))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal80170.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart80171 = Array.prototype.slice.call(matchVal80170, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePart80171))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePart80171.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPart80172 = Array.prototype.slice.call(matchVal80170, 0);
            var values = matchArrayTailPart80172;
            return foldl(currentModule79551.min2, Infinity, values);
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80168))))            {
            return G80168;
            };
          G80168 = (function (arguments)            {
            var matchVal80173 = G80169;
            var anythingElse80167 = matchVal80173;
            throw ((("Match fail in hooves/hooves-min against: ")+(anythingElse80167)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80168))))            {
            return G80168;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail values)] (_newline-sequence (foldl min2 Infinity values))) (anything-else-80167 (_throw (_+ ''Match fail in hooves/hooves-min against: '' anything-else-80167))))) for value ")+(JSON.stringify(G80169))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue80162 = actualFun80164.apply(this, arguments);
      while (recurP80165(returnValue80162))        {
        returnValue80162 = actualFun80164.apply(this, returnValue80162.args);
        };
      return returnValue80162;
      });
    currentModule79551.max = (function ()      {
      var returnValue80197 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil80196",
          args:arguments
        };
        });
      var recurP80200 = (function (val80201)        {
        if ((("undefined")===((typeof val80201))))          {
          return false;
          };
        return (val80201.recurSigil===("recurSigil80196"));
        });
      var actualFun80199 = (function ()        {
        return (function (arguments)          {
          var G80203 = undefined;
          var G80204 = Array.prototype.slice.apply(arguments);
          G80203 = (function (arguments)            {
            var matchVal80205 = G80204;
            if ((!((("object")===((typeof matchVal80205))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal80205.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart80206 = Array.prototype.slice.call(matchVal80205, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePart80206))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePart80206.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPart80207 = Array.prototype.slice.call(matchVal80205, 0);
            var values = matchArrayTailPart80207;
            return foldl(currentModule79551.max2, currentModule79551.minus(Infinity), values);
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80203))))            {
            return G80203;
            };
          G80203 = (function (arguments)            {
            var matchVal80208 = G80204;
            var anythingElse80202 = matchVal80208;
            throw ((("Match fail in hooves/hooves-max against: ")+(anythingElse80202)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80203))))            {
            return G80203;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail values)] (_newline-sequence (foldl max2 (- Infinity) values))) (anything-else-80202 (_throw (_+ ''Match fail in hooves/hooves-max against: '' anything-else-80202))))) for value ")+(JSON.stringify(G80204))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue80197 = actualFun80199.apply(this, arguments);
      while (recurP80200(returnValue80197))        {
        returnValue80197 = actualFun80199.apply(this, returnValue80197.args);
        };
      return returnValue80197;
      });
    currentModule79551.map = (function ()      {
      var returnValue80232 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil80231",
          args:arguments
        };
        });
      var recurP80235 = (function (val80236)        {
        if ((("undefined")===((typeof val80236))))          {
          return false;
          };
        return (val80236.recurSigil===("recurSigil80231"));
        });
      var actualFun80234 = (function ()        {
        return (function (arguments)          {
          var G80238 = undefined;
          var G80239 = Array.prototype.slice.apply(arguments);
          G80238 = (function (arguments)            {
            var matchVal80240 = G80239;
            if ((!((("object")===((typeof matchVal80240))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal80240.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart80241 = Array.prototype.slice.call(matchVal80240, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart80241))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart80241.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var f = matchArraySimplePart80241[0];
            var matchArrayTailPart80242 = Array.prototype.slice.call(matchVal80240, 1);
            var arrays = matchArrayTailPart80242;
            var minLen = currentModule79551.min.apply(undefined, currentModule79551.map1((function (a)              {
              return a.length;
              }), arrays));
            var out = [];
            for (var i = 0;currentModule79551.lessThan(i, minLen);i = currentModule79551.plus(i, 1))              {
              out[i] = f.apply(this, currentModule79551.map1((function (a)                {
                return a[i];
                }), arrays));
              };
            return out;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80238))))            {
            return G80238;
            };
          G80238 = (function (arguments)            {
            var matchVal80243 = G80239;
            var anythingElse80237 = matchVal80243;
            throw ((("Match fail in hooves/hooves-map against: ")+(anythingElse80237)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80238))))            {
            return G80238;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: f (tail arrays)] (_newline-sequence (var min-len (min\\.apply undefined (map1 (lambda (a) a\\.length) arrays))) (var out [:]) (for ((var i 0) (< i min-len) (set! i (+ i 1))) (set! [out i] (f\\.apply this (map1 (lambda (a) [a i]) arrays)))) out)) (anything-else-80237 (_throw (_+ ''Match fail in hooves/hooves-map against: '' anything-else-80237))))) for value ")+(JSON.stringify(G80239))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue80232 = actualFun80234.apply(this, arguments);
      while (recurP80235(returnValue80232))        {
        returnValue80232 = actualFun80234.apply(this, returnValue80232.args);
        };
      return returnValue80232;
      });
    currentModule79551.each = (function ()      {
      var returnValue80267 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil80266",
          args:arguments
        };
        });
      var recurP80270 = (function (val80271)        {
        if ((("undefined")===((typeof val80271))))          {
          return false;
          };
        return (val80271.recurSigil===("recurSigil80266"));
        });
      var actualFun80269 = (function ()        {
        return (function (arguments)          {
          var G80273 = undefined;
          var G80274 = Array.prototype.slice.apply(arguments);
          G80273 = (function (arguments)            {
            var matchVal80275 = G80274;
            if ((!((("object")===((typeof matchVal80275))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal80275.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart80276 = Array.prototype.slice.call(matchVal80275, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart80276))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart80276.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var f = matchArraySimplePart80276[0];
            var matchArrayTailPart80277 = Array.prototype.slice.call(matchVal80275, 1);
            var arrays = matchArrayTailPart80277;
            var minLen = currentModule79551.min.apply(undefined, currentModule79551.map1((function (a)              {
              return a.length;
              }), arrays));
            for (var i = 0;currentModule79551.lessThan(i, minLen);i = currentModule79551.plus(i, 1))              {
              f.apply(this, currentModule79551.map1((function (a)                {
                return a[i];
                }), arrays));
              };
            return undefined;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80273))))            {
            return G80273;
            };
          G80273 = (function (arguments)            {
            var matchVal80278 = G80274;
            var anythingElse80272 = matchVal80278;
            throw ((("Match fail in hooves/hooves-each against: ")+(anythingElse80272)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80273))))            {
            return G80273;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: f (tail arrays)] (_newline-sequence (var min-len (min\\.apply undefined (map1 (lambda (a) a\\.length) arrays))) (for ((var i 0) (< i min-len) (set! i (+ i 1))) (f\\.apply this (map1 (lambda (a) [a i]) arrays))) undefined)) (anything-else-80272 (_throw (_+ ''Match fail in hooves/hooves-each against: '' anything-else-80272))))) for value ")+(JSON.stringify(G80274))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue80267 = actualFun80269.apply(this, arguments);
      while (recurP80270(returnValue80267))        {
        returnValue80267 = actualFun80269.apply(this, returnValue80267.args);
        };
      return returnValue80267;
      });
    currentModule79551.zip = (function ()      {
      var returnValue80302 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil80301",
          args:arguments
        };
        });
      var recurP80305 = (function (val80306)        {
        if ((("undefined")===((typeof val80306))))          {
          return false;
          };
        return (val80306.recurSigil===("recurSigil80301"));
        });
      var actualFun80304 = (function ()        {
        return (function (arguments)          {
          var G80308 = undefined;
          var G80309 = Array.prototype.slice.apply(arguments);
          G80308 = (function (arguments)            {
            var matchVal80310 = G80309;
            if ((!((("object")===((typeof matchVal80310))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal80310.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart80311 = Array.prototype.slice.call(matchVal80310, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePart80311))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePart80311.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPart80312 = Array.prototype.slice.call(matchVal80310, 0);
            var arrays = matchArrayTailPart80312;
            return currentModule79551.map.apply(this, [(function ()              {
              var returnValue80314 = undefined;
              var recur = (function ()                {
                return {                  
                  recurSigil:"recurSigil80313",
                  args:arguments
                };
                });
              var recurP80317 = (function (val80318)                {
                if ((("undefined")===((typeof val80318))))                  {
                  return false;
                  };
                return (val80318.recurSigil===("recurSigil80313"));
                });
              var actualFun80316 = (function ()                {
                return (function (arguments)                  {
                  var G80320 = undefined;
                  var G80321 = Array.prototype.slice.apply(arguments);
                  G80320 = (function (arguments)                    {
                    var matchVal80322 = G80321;
                    if ((!((("object")===((typeof matchVal80322))))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    if ((!((matchVal80322.length>=0))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    var matchArraySimplePart80323 = Array.prototype.slice.call(matchVal80322, 0, 0);
                    if ((!((("object")===((typeof matchArraySimplePart80323))))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    if ((!((0===matchArraySimplePart80323.length))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    var matchArrayTailPart80324 = Array.prototype.slice.call(matchVal80322, 0);
                    var elements = matchArrayTailPart80324;
                    return elements;
                    ;
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80320))))                    {
                    return G80320;
                    };
                  G80320 = (function (arguments)                    {
                    var matchVal80325 = G80321;
                    var anythingElse80319 = matchVal80325;
                    throw ((("Match fail in anonymous against: ")+(anythingElse80319)));
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80320))))                    {
                    return G80320;
                    };
                  throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail elements)] (_newline-sequence elements)) (anything-else-80319 (_throw (_+ ''Match fail in anonymous against: '' anything-else-80319))))) for value ")+(JSON.stringify(G80321))));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                });
              returnValue80314 = actualFun80316.apply(this, arguments);
              while (recurP80317(returnValue80314))                {
                returnValue80314 = actualFun80316.apply(this, returnValue80314.args);
                };
              return returnValue80314;
              })].concat(arrays));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80308))))            {
            return G80308;
            };
          G80308 = (function (arguments)            {
            var matchVal80326 = G80309;
            var anythingElse80307 = matchVal80326;
            throw ((("Match fail in hooves/hooves-zip against: ")+(anythingElse80307)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80308))))            {
            return G80308;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail arrays)] (_newline-sequence (map\\.apply this (\\.\\. [: (lambda ((tail elements)) elements)] (concat arrays))))) (anything-else-80307 (_throw (_+ ''Match fail in hooves/hooves-zip against: '' anything-else-80307))))) for value ")+(JSON.stringify(G80309))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue80302 = actualFun80304.apply(this, arguments);
      while (recurP80305(returnValue80302))        {
        returnValue80302 = actualFun80304.apply(this, returnValue80302.args);
        };
      return returnValue80302;
      });
    // |
    // macro - no dynamic value.
    ;
    // define-external-binop
    // macro - no dynamic value.
    ;
    // define-external-binops
    // macro - no dynamic value.
    ;
    currentModule79551.lessThan = (function (G80342, G80343)      {
      return (G80342<G80343);
      });
    currentModule79551.lessThanequal = (function (G80369, G80370)      {
      return (G80369<=G80370);
      });
    currentModule79551.greaterThan = (function (G80396, G80397)      {
      return (G80396>G80397);
      });
    currentModule79551.greaterThanequal = (function (G80423, G80424)      {
      return (G80423>=G80424);
      });
    currentModule79551.ampersand = (function (G80450, G80451)      {
      return (G80450&G80451);
      });
    currentModule79551.pipe = (function (G80477, G80478)      {
      return (G80477|G80478);
      });
    currentModule79551.equalequal = (function (G80504, G80505)      {
      return (G80504==G80505);
      });
    currentModule79551.TripleEqualminus = (function (G80531, G80532)      {
      return (G80531===G80532);
      });
    currentModule79551.modsign = (function (G80558, G80559)      {
      return (G80558%G80559);
      });
    currentModule79551.caret = (function (G80585, G80586)      {
      return (G80585^G80586);
      });
    currentModule79551.lessThanlessThan = (function (G80612, G80613)      {
      return (G80612<<G80613);
      });
    currentModule79551.greaterThangreaterThan = (function (G80639, G80640)      {
      return (G80639>>G80640);
      });
    currentModule79551.greaterThangreaterThangreaterThan = (function (G80666, G80667)      {
      return (G80666>>>G80667);
      });
    // &&
    // macro - no dynamic value.
    ;
    // ||
    // macro - no dynamic value.
    ;
    currentModule79551.bang = (function (o)      {
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
    currentModule79551.plist = (function ()      {
      var returnValue80765 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil80764",
          args:arguments
        };
        });
      var recurP80768 = (function (val80769)        {
        if ((("undefined")===((typeof val80769))))          {
          return false;
          };
        return (val80769.recurSigil===("recurSigil80764"));
        });
      var actualFun80767 = (function ()        {
        return (function (arguments)          {
          var G80771 = undefined;
          var G80772 = Array.prototype.slice.apply(arguments);
          G80771 = (function (arguments)            {
            var matchVal80773 = G80772;
            if ((!((("object")===((typeof matchVal80773))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal80773.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart80774 = Array.prototype.slice.call(matchVal80773, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePart80774))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePart80774.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPart80775 = Array.prototype.slice.call(matchVal80773, 0);
            var parts = matchArrayTailPart80775;
            var out = {              
              
            };
            for (var i = 0;currentModule79551.lessThan(i, parts.length);i = currentModule79551.plus(i, 2))              {
              out[parts[i]] = parts[currentModule79551.plus(i, 1)];
              };
            return out;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80771))))            {
            return G80771;
            };
          G80771 = (function (arguments)            {
            var matchVal80776 = G80772;
            var anythingElse80770 = matchVal80776;
            throw ((("Match fail in hooves/hooves-plist against: ")+(anythingElse80770)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80771))))            {
            return G80771;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail parts)] (_newline-sequence (var out ({})) (for ((var i 0) (< i parts\\.length) (set! i (+ i 2))) (set! [out [parts i]] [parts (+ i 1)])) out)) (anything-else-80770 (_throw (_+ ''Match fail in hooves/hooves-plist against: '' anything-else-80770))))) for value ")+(JSON.stringify(G80772))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue80765 = actualFun80767.apply(this, arguments);
      while (recurP80768(returnValue80765))        {
        returnValue80765 = actualFun80767.apply(this, returnValue80765.args);
        };
      return returnValue80765;
      });
    // as-options{}
    // pattern - no dynamic value.
    ;
    currentModule79551.rx = (function ()      {
      var returnValue80806 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil80805",
          args:arguments
        };
        });
      var recurP80809 = (function (val80810)        {
        if ((("undefined")===((typeof val80810))))          {
          return false;
          };
        return (val80810.recurSigil===("recurSigil80805"));
        });
      var actualFun80808 = (function ()        {
        return (function (arguments)          {
          var G80812 = undefined;
          var G80813 = Array.prototype.slice.apply(arguments);
          G80812 = (function (arguments)            {
            var matchVal80814 = G80813;
            if ((!((("object")===((typeof matchVal80814))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal80814.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart80815 = Array.prototype.slice.call(matchVal80814, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart80815))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart80815.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var s = matchArraySimplePart80815[0];
            var matchArrayTailPart80816 = Array.prototype.slice.call(matchVal80814, 1);
            var matchTemp80817 = matchArrayTailPart80816[0];
            var previousMatchSucceeded80818 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTemp80817))))                {
                previousMatchSucceeded80818 = false;
                };
              var args = matchTemp80817;
              if (previousMatchSucceeded80818)                {
                break;
                };
              previousMatchSucceeded80818 = true;
              case 1:
              var fResult80819 = ((function (x)                {
                return "g";
                }))(matchTemp80817);
              if ((fResult80819===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceeded80818 = false;
                };
              var args = fResult80819;
              if (previousMatchSucceeded80818)                {
                break;
                };
              previousMatchSucceeded80818 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            return (new (RegExp)(s, args));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80812))))            {
            return G80812;
            };
          G80812 = (function (arguments)            {
            var matchVal80820 = G80813;
            var anythingElse80811 = matchVal80820;
            throw ((("Match fail in hooves/hooves-rx against: ")+(anythingElse80811)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80812))))            {
            return G80812;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: s :- (opt args ''g'')] (_newline-sequence (new RegExp s args))) (anything-else-80811 (_throw (_+ ''Match fail in hooves/hooves-rx against: '' anything-else-80811))))) for value ")+(JSON.stringify(G80813))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue80806 = actualFun80808.apply(this, arguments);
      while (recurP80809(returnValue80806))        {
        returnValue80806 = actualFun80808.apply(this, returnValue80806.args);
        };
      return returnValue80806;
      });
    // set-to!
    // macro - no dynamic value.
    ;
    currentModule79551.prefix = (function (i, ra)      {
      return [i].concat(ra);
      });
    currentModule79551.postfix = (function (i, ra)      {
      return [].concat(ra, [i]);
      });
    currentModule79551.identity = (function (x)      {
      return x;
      });
    var pushdividereturn = (function (item, array)      {
      array.push(item);
      return array;
      });
    var plistToObjectHelper = (function ()      {
      var returnValue80894 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil80893",
          args:arguments
        };
        });
      var recurP80897 = (function (val80898)        {
        if ((("undefined")===((typeof val80898))))          {
          return false;
          };
        return (val80898.recurSigil===("recurSigil80893"));
        });
      var actualFun80896 = (function ()        {
        return (function (arguments)          {
          var G80900 = undefined;
          var G80901 = Array.prototype.slice.apply(arguments);
          G80900 = (function (arguments)            {
            var matchVal80902 = G80901;
            if ((!((("object")===((typeof matchVal80902))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchVal80902.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp80903 = matchVal80902[0];
            var matchTemp80904 = matchVal80902[1];
            var objectAcc = matchTemp80903;
            if ((!((("object")===((typeof matchTemp80904))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchTemp80904.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return objectAcc;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80900))))            {
            return G80900;
            };
          G80900 = (function (arguments)            {
            var matchVal80905 = G80901;
            if ((!((("object")===((typeof matchVal80905))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchVal80905.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp80906 = matchVal80905[0];
            var matchTemp80907 = matchVal80905[1];
            var objectAcc = matchTemp80906;
            if ((!((("object")===((typeof matchTemp80907))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchTemp80907.length>=2))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart80908 = Array.prototype.slice.call(matchTemp80907, 0, 2);
            if ((!((("object")===((typeof matchArraySimplePart80908))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchArraySimplePart80908.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp80909 = matchArraySimplePart80908[0];
            var matchTemp80910 = matchArraySimplePart80908[1];
            var matchFunExpr80915 = (function (G80914)              {
              return (((typeof G80914))===("string"));
              });
            if ((!(matchFunExpr80915(matchTemp80909))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var key = matchTemp80909;
            var value = matchTemp80910;
            var matchArrayTailPart80916 = Array.prototype.slice.call(matchTemp80907, 2);
            var rest = matchArrayTailPart80916;
            objectAcc[key] = value;
            return recur(objectAcc, rest);
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80900))))            {
            return G80900;
            };
          G80900 = (function (arguments)            {
            var matchVal80917 = G80901;
            var anythingElse80899 = matchVal80917;
            throw ((("Match fail in plist->object-helper against: ")+(anythingElse80899)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80900))))            {
            return G80900;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: object-acc [:]] (_newline-sequence object-acc)) ([: object-acc [: (string key) value (tail rest)]] (_newline-sequence (set! [object-acc key] value) (recur object-acc rest))) (anything-else-80899 (_throw (_+ ''Match fail in plist->object-helper against: '' anything-else-80899))))) for value ")+(JSON.stringify(G80901))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue80894 = actualFun80896.apply(this, arguments);
      while (recurP80897(returnValue80894))        {
        returnValue80894 = actualFun80896.apply(this, returnValue80894.args);
        };
      return returnValue80894;
      });
    currentModule79551.plistToObject = (function ()      {
      var returnValue80941 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil80940",
          args:arguments
        };
        });
      var recurP80944 = (function (val80945)        {
        if ((("undefined")===((typeof val80945))))          {
          return false;
          };
        return (val80945.recurSigil===("recurSigil80940"));
        });
      var actualFun80943 = (function ()        {
        return (function (arguments)          {
          var G80947 = undefined;
          var G80948 = Array.prototype.slice.apply(arguments);
          G80947 = (function (arguments)            {
            var matchVal80949 = G80948;
            if ((!((("object")===((typeof matchVal80949))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal80949.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart80950 = Array.prototype.slice.call(matchVal80949, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePart80950))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePart80950.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPart80951 = Array.prototype.slice.call(matchVal80949, 0);
            var kvPairs = matchArrayTailPart80951;
            return plistToObjectHelper({              
              
            }, kvPairs);
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80947))))            {
            return G80947;
            };
          G80947 = (function (arguments)            {
            var matchVal80952 = G80948;
            var anythingElse80946 = matchVal80952;
            throw ((("Match fail in hooves/hooves-plist->object against: ")+(anythingElse80946)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80947))))            {
            return G80947;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail kv-pairs)] (_newline-sequence (plist->object-helper ({}) kv-pairs))) (anything-else-80946 (_throw (_+ ''Match fail in hooves/hooves-plist->object against: '' anything-else-80946))))) for value ")+(JSON.stringify(G80948))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue80941 = actualFun80943.apply(this, arguments);
      while (recurP80944(returnValue80941))        {
        returnValue80941 = actualFun80943.apply(this, returnValue80941.args);
        };
      return returnValue80941;
      });
    currentModule79551.filter = (function ()      {
      var returnValue80983 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil80982",
          args:arguments
        };
        });
      var recurP80986 = (function (val80987)        {
        if ((("undefined")===((typeof val80987))))          {
          return false;
          };
        return (val80987.recurSigil===("recurSigil80982"));
        });
      var actualFun80985 = (function ()        {
        return (function (arguments)          {
          var G80989 = undefined;
          var G80990 = Array.prototype.slice.apply(arguments);
          G80989 = (function (arguments)            {
            var matchVal80991 = G80990;
            if ((!((("object")===((typeof matchVal80991))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchVal80991.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp80992 = matchVal80991[0];
            var matchTemp80993 = matchVal80991[1];
            var matchTemp80994 = matchVal80991[2];
            var fun = matchTemp80992;
            if ((!((("object")===((typeof matchTemp80993))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchTemp80993.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var acc = matchTemp80994;
            return acc;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80989))))            {
            return G80989;
            };
          G80989 = (function (arguments)            {
            var matchVal80995 = G80990;
            if ((!((("object")===((typeof matchVal80995))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchVal80995.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp80996 = matchVal80995[0];
            var matchTemp80997 = matchVal80995[1];
            var matchTemp80998 = matchVal80995[2];
            var fun = matchTemp80996;
            if ((!((("object")===((typeof matchTemp80997))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchTemp80997.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart80999 = Array.prototype.slice.call(matchTemp80997, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart80999))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart80999.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart80999[0];
            var matchArrayTailPart81000 = Array.prototype.slice.call(matchTemp80997, 1);
            var tl = matchArrayTailPart81000;
            var acc = matchTemp80998;
            var r = fun(hd);
            return ((r)?(recur(fun, tl, pushdividereturn(hd, acc))) : (recur(fun, tl, acc)));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80989))))            {
            return G80989;
            };
          G80989 = (function (arguments)            {
            var matchVal81001 = G80990;
            if ((!((("object")===((typeof matchVal81001))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchVal81001.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var fun = matchVal81001[0];
            var ra = matchVal81001[1];
            return recur(fun, ra, []);
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80989))))            {
            return G80989;
            };
          G80989 = (function (arguments)            {
            var matchVal81002 = G80990;
            var anythingElse80988 = matchVal81002;
            throw ((("Match fail in hooves/hooves-filter against: ")+(anythingElse80988)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G80989))))            {
            return G80989;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: fun [:] acc] (_newline-sequence acc)) ([: fun [: hd (tail tl)] acc] (_newline-sequence (var r (fun hd)) (if r (recur fun tl (push/return hd acc)) (recur fun tl acc)))) ([: fun ra] (_newline-sequence (recur fun ra [:]))) (anything-else-80988 (_throw (_+ ''Match fail in hooves/hooves-filter against: '' anything-else-80988))))) for value ")+(JSON.stringify(G80990))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue80983 = actualFun80985.apply(this, arguments);
      while (recurP80986(returnValue80983))        {
        returnValue80983 = actualFun80985.apply(this, returnValue80983.args);
        };
      return returnValue80983;
      });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModule79551;
  }))