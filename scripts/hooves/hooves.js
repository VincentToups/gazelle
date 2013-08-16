define([], (function ()  {
  var currentModule48662 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModule48662 = value;
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
    currentModule48662.definedPredicate = (function (x)      {
      return (!((((typeof x))===("undefined"))));
      });
    currentModule48662.undefinedPredicate = (function (x)      {
      return (((typeof x))===("undefined"));
      });
    currentModule48662.numberPredicate = (function (o)      {
      return (((typeof o))===("number"));
      });
    currentModule48662.stringPredicate = (function (o)      {
      return (((typeof o))===("string"));
      });
    currentModule48662.arrayPredicate = (function (o)      {
      return (o instanceof Array);
      });
    currentModule48662.emptyPredicate = (function (o)      {
      return (0===o.length);
      });
    currentModule48662.nullPredicate = (function (x)      {
      return currentModule48662.TripleEqualminus(null, x);
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
    currentModule48662.TripleEqualminus_ = (function (partial)      {
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
    currentModule48662.Delay = (function (lambdaExpr)      {
      this.lambdaExpr = lambdaExpr;
      return this;
      });
    currentModule48662.Delay.prototype.value = (function ()      {
      return this.lambdaExpr();
      });
    // delay
    // macro - no dynamic value.
    ;
    currentModule48662.undelay = (function (o)      {
      return (function (arguments)        {
        var G48928 = undefined;
        var G48929 = o;
        G48928 = (function (arguments)          {
          var matchVal48930 = G48929;
          var matchFunExpr48932 = (function (G48931)            {
            return (G48931 instanceof currentModule48662.Delay);
            });
          if ((!(matchFunExpr48932(matchVal48930))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var delayObject = matchVal48930;
          return delayObject.value();
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G48928))))          {
          return G48928;
          };
        throw ((("match-fail at ((match o ((instance Delay delay-object) (delay-object\\.value)))) for value ")+(JSON.stringify(G48929))));
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
    currentModule48662.range = (function ()      {
      var returnValue48987 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil48986",
          args:arguments
        };
        });
      var recurP48990 = (function (val48991)        {
        if ((("undefined")===((typeof val48991))))          {
          return false;
          };
        return (val48991.recurSigil===("recurSigil48986"));
        });
      var actualFun48989 = (function ()        {
        return (function (arguments)          {
          var G48993 = undefined;
          var G48994 = Array.prototype.slice.apply(arguments);
          G48993 = (function (arguments)            {
            var matchVal48995 = G48994;
            if ((!((("object")===((typeof matchVal48995))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((4===matchVal48995.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchVal48995[0];
            var step = matchVal48995[1];
            var stop = matchVal48995[2];
            var transform = matchVal48995[3];
            var out = [];
            for (var i = start;(i<stop);i = ((i)+(step)))              {
              out.push(transform(i));
              };
            return out;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G48993))))            {
            return G48993;
            };
          G48993 = (function (arguments)            {
            var matchVal48996 = G48994;
            if ((!((("object")===((typeof matchVal48996))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchVal48996.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchVal48996[0];
            var step = matchVal48996[1];
            var stop = matchVal48996[2];
            return recur(start, step, stop, (function (v)              {
              return v;
              }));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G48993))))            {
            return G48993;
            };
          G48993 = (function (arguments)            {
            var matchVal48997 = G48994;
            if ((!((("object")===((typeof matchVal48997))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchVal48997.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchVal48997[0];
            var stop = matchVal48997[1];
            return recur(start, 1, stop, (function (v)              {
              return v;
              }));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G48993))))            {
            return G48993;
            };
          G48993 = (function (arguments)            {
            var matchVal48998 = G48994;
            if ((!((("object")===((typeof matchVal48998))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchVal48998.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var stop = matchVal48998[0];
            return recur(0, 1, stop, (function (v)              {
              return v;
              }));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G48993))))            {
            return G48993;
            };
          G48993 = (function (arguments)            {
            var matchVal48999 = G48994;
            var anythingElse48992 = matchVal48999;
            throw ((("Match fail in hooves/hooves-range against: ")+(anythingElse48992)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G48993))))            {
            return G48993;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: start step stop transform] (_newline-sequence (var out [:]) (for ((var i start) (_< i stop) (set! i (_+ i step))) (out\\.push (transform i))) out)) ([: start step stop] (_newline-sequence (recur start step stop (lambda (v) v)))) ([: start stop] (_newline-sequence (recur start 1 stop (lambda (v) v)))) ([: stop] (_newline-sequence (recur 0 1 stop (lambda (v) v)))) (anything-else-48992 (_throw (_+ ''Match fail in hooves/hooves-range against: '' anything-else-48992))))) for value ")+(JSON.stringify(G48994))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue48987 = actualFun48989.apply(this, arguments);
      while (recurP48990(returnValue48987))        {
        returnValue48987 = actualFun48989.apply(this, returnValue48987.args);
        };
      return returnValue48987;
      });
    currentModule48662.pureSort = (function ()      {
      var returnValue49023 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil49022",
          args:arguments
        };
        });
      var recurP49026 = (function (val49027)        {
        if ((("undefined")===((typeof val49027))))          {
          return false;
          };
        return (val49027.recurSigil===("recurSigil49022"));
        });
      var actualFun49025 = (function ()        {
        return (function (arguments)          {
          var G49029 = undefined;
          var G49030 = Array.prototype.slice.apply(arguments);
          G49029 = (function (arguments)            {
            var matchVal49031 = G49030;
            if ((!((("object")===((typeof matchVal49031))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal49031.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart49032 = Array.prototype.slice.call(matchVal49031, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart49032))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart49032.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var array = matchArraySimplePart49032[0];
            var matchArrayTailPart49033 = Array.prototype.slice.call(matchVal49031, 1);
            var matchTemp49034 = matchArrayTailPart49033[0];
            var previousMatchSucceeded49035 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTemp49034))))                {
                previousMatchSucceeded49035 = false;
                };
              var sortFun = matchTemp49034;
              if (previousMatchSucceeded49035)                {
                break;
                };
              previousMatchSucceeded49035 = true;
              case 1:
              var fResult49036 = ((function (x)                {
                return (function (a, b)                  {
                  return ((currentModule48662.lessThan(a, b))?(-1) : (1));
                  });
                }))(matchTemp49034);
              if ((fResult49036===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceeded49035 = false;
                };
              var sortFun = fResult49036;
              if (previousMatchSucceeded49035)                {
                break;
                };
              previousMatchSucceeded49035 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var copy = array.concat([]);
            copy.sort(sortFun);
            return copy;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G49029))))            {
            return G49029;
            };
          G49029 = (function (arguments)            {
            var matchVal49037 = G49030;
            var anythingElse49028 = matchVal49037;
            throw ((("Match fail in hooves/hooves-pure-sort against: ")+(anythingElse49028)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G49029))))            {
            return G49029;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: array :- (opt sort-fun (lambda (a b) (if (< a b) -1 1)))] (_newline-sequence (var copy (\\.\\. array (concat [:]))) (\\.\\. copy (sort sort-fun)) copy)) (anything-else-49028 (_throw (_+ ''Match fail in hooves/hooves-pure-sort against: '' anything-else-49028))))) for value ")+(JSON.stringify(G49030))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue49023 = actualFun49025.apply(this, arguments);
      while (recurP49026(returnValue49023))        {
        returnValue49023 = actualFun49025.apply(this, returnValue49023.args);
        };
      return returnValue49023;
      });
    // with-slots
    // macro - no dynamic value.
    ;
    currentModule48662.plus = (function ()      {
      var returnValue49067 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil49066",
          args:arguments
        };
        });
      var recurP49070 = (function (val49071)        {
        if ((("undefined")===((typeof val49071))))          {
          return false;
          };
        return (val49071.recurSigil===("recurSigil49066"));
        });
      var actualFun49069 = (function ()        {
        return (function (arguments)          {
          var G49073 = undefined;
          var G49074 = Array.prototype.slice.apply(arguments);
          G49073 = (function (arguments)            {
            var matchVal49075 = G49074;
            if ((!((("object")===((typeof matchVal49075))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal49075.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart49076 = Array.prototype.slice.call(matchVal49075, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart49076))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart49076.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart49076[0];
            var matchArrayTailPart49077 = Array.prototype.slice.call(matchVal49075, 1);
            var tl = matchArrayTailPart49077;
            var result = hd;
            for (i in (tl))              {
              result = ((result)+(tl[i]));
              };
            return result;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G49073))))            {
            return G49073;
            };
          G49073 = (function (arguments)            {
            var matchVal49078 = G49074;
            var anythingElse49072 = matchVal49078;
            throw ((("Match fail in hooves/hooves-+ against: ")+(anythingElse49072)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G49073))))            {
            return G49073;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result)) (anything-else-49072 (_throw (_+ ''Match fail in hooves/hooves-+ against: '' anything-else-49072))))) for value ")+(JSON.stringify(G49074))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue49067 = actualFun49069.apply(this, arguments);
      while (recurP49070(returnValue49067))        {
        returnValue49067 = actualFun49069.apply(this, returnValue49067.args);
        };
      return returnValue49067;
      });
    currentModule48662.minus = (function ()      {
      var returnValue49102 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil49101",
          args:arguments
        };
        });
      var recurP49105 = (function (val49106)        {
        if ((("undefined")===((typeof val49106))))          {
          return false;
          };
        return (val49106.recurSigil===("recurSigil49101"));
        });
      var actualFun49104 = (function ()        {
        return (function (arguments)          {
          var G49108 = undefined;
          var G49109 = Array.prototype.slice.apply(arguments);
          G49108 = (function (arguments)            {
            var matchVal49110 = G49109;
            if ((!((("object")===((typeof matchVal49110))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal49110.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart49111 = Array.prototype.slice.call(matchVal49110, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart49111))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart49111.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart49111[0];
            var matchArrayTailPart49112 = Array.prototype.slice.call(matchVal49110, 1);
            var tl = matchArrayTailPart49112;
            return (((tl.length>0))?(((hd)-(apply(currentModule48662.plus, tl)))) : ((-(hd))));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G49108))))            {
            return G49108;
            };
          G49108 = (function (arguments)            {
            var matchVal49113 = G49109;
            var anythingElse49107 = matchVal49113;
            throw ((("Match fail in hooves/hooves-- against: ")+(anythingElse49107)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G49108))))            {
            return G49108;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (if (_> tl\\.length 0) (_- hd (apply + tl)) (_- hd)))) (anything-else-49107 (_throw (_+ ''Match fail in hooves/hooves-- against: '' anything-else-49107))))) for value ")+(JSON.stringify(G49109))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue49102 = actualFun49104.apply(this, arguments);
      while (recurP49105(returnValue49102))        {
        returnValue49102 = actualFun49104.apply(this, returnValue49102.args);
        };
      return returnValue49102;
      });
    currentModule48662.times = (function ()      {
      var returnValue49137 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil49136",
          args:arguments
        };
        });
      var recurP49140 = (function (val49141)        {
        if ((("undefined")===((typeof val49141))))          {
          return false;
          };
        return (val49141.recurSigil===("recurSigil49136"));
        });
      var actualFun49139 = (function ()        {
        return (function (arguments)          {
          var G49143 = undefined;
          var G49144 = Array.prototype.slice.apply(arguments);
          G49143 = (function (arguments)            {
            var matchVal49145 = G49144;
            if ((!((("object")===((typeof matchVal49145))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal49145.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart49146 = Array.prototype.slice.call(matchVal49145, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart49146))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart49146.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart49146[0];
            var matchArrayTailPart49147 = Array.prototype.slice.call(matchVal49145, 1);
            var tl = matchArrayTailPart49147;
            var result = hd;
            for (i in (tl))              {
              result = ((result)*(tl[i]));
              };
            return result;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G49143))))            {
            return G49143;
            };
          G49143 = (function (arguments)            {
            var matchVal49148 = G49144;
            var anythingElse49142 = matchVal49148;
            throw ((("Match fail in hooves/hooves-* against: ")+(anythingElse49142)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G49143))))            {
            return G49143;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result)) (anything-else-49142 (_throw (_+ ''Match fail in hooves/hooves-* against: '' anything-else-49142))))) for value ")+(JSON.stringify(G49144))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue49137 = actualFun49139.apply(this, arguments);
      while (recurP49140(returnValue49137))        {
        returnValue49137 = actualFun49139.apply(this, returnValue49137.args);
        };
      return returnValue49137;
      });
    currentModule48662.divide = (function ()      {
      var returnValue49172 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil49171",
          args:arguments
        };
        });
      var recurP49175 = (function (val49176)        {
        if ((("undefined")===((typeof val49176))))          {
          return false;
          };
        return (val49176.recurSigil===("recurSigil49171"));
        });
      var actualFun49174 = (function ()        {
        return (function (arguments)          {
          var G49178 = undefined;
          var G49179 = Array.prototype.slice.apply(arguments);
          G49178 = (function (arguments)            {
            var matchVal49180 = G49179;
            if ((!((("object")===((typeof matchVal49180))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal49180.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart49181 = Array.prototype.slice.call(matchVal49180, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart49181))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart49181.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart49181[0];
            var matchArrayTailPart49182 = Array.prototype.slice.call(matchVal49180, 1);
            var tl = matchArrayTailPart49182;
            return ((hd)/((apply(currentModule48662.times, tl))));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G49178))))            {
            return G49178;
            };
          G49178 = (function (arguments)            {
            var matchVal49183 = G49179;
            var anythingElse49177 = matchVal49183;
            throw ((("Match fail in hooves/hooves-/ against: ")+(anythingElse49177)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G49178))))            {
            return G49178;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (_/ hd (apply * tl)))) (anything-else-49177 (_throw (_+ ''Match fail in hooves/hooves-/ against: '' anything-else-49177))))) for value ")+(JSON.stringify(G49179))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue49172 = actualFun49174.apply(this, arguments);
      while (recurP49175(returnValue49172))        {
        returnValue49172 = actualFun49174.apply(this, returnValue49172.args);
        };
      return returnValue49172;
      });
    currentModule48662.map1 = (function (f, a)      {
      var o = [];
      for (var i = 0;currentModule48662.lessThan(i, a.length);i = currentModule48662.plus(i, 1))        {
        o[i] = f(a[i]);
        };
      return o;
      });
    currentModule48662.min2 = (function (a, b)      {
      return ((currentModule48662.lessThan(a, b))?(a) : (b));
      });
    currentModule48662.max2 = (function (a, b)      {
      return ((currentModule48662.greaterThan(a, b))?(a) : (b));
      });
    var foldl = (function (fItAc, init, sequence)      {
      for (var i = 0;currentModule48662.lessThan(i, sequence.length);i = currentModule48662.plus(i, 1))        {
        init = fItAc(init, sequence[i]);
        };
      return init;
      });
    currentModule48662.min = (function ()      {
      var returnValue49273 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil49272",
          args:arguments
        };
        });
      var recurP49276 = (function (val49277)        {
        if ((("undefined")===((typeof val49277))))          {
          return false;
          };
        return (val49277.recurSigil===("recurSigil49272"));
        });
      var actualFun49275 = (function ()        {
        return (function (arguments)          {
          var G49279 = undefined;
          var G49280 = Array.prototype.slice.apply(arguments);
          G49279 = (function (arguments)            {
            var matchVal49281 = G49280;
            if ((!((("object")===((typeof matchVal49281))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal49281.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart49282 = Array.prototype.slice.call(matchVal49281, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePart49282))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePart49282.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPart49283 = Array.prototype.slice.call(matchVal49281, 0);
            var values = matchArrayTailPart49283;
            return foldl(currentModule48662.min2, Infinity, values);
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G49279))))            {
            return G49279;
            };
          G49279 = (function (arguments)            {
            var matchVal49284 = G49280;
            var anythingElse49278 = matchVal49284;
            throw ((("Match fail in hooves/hooves-min against: ")+(anythingElse49278)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G49279))))            {
            return G49279;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail values)] (_newline-sequence (foldl min2 Infinity values))) (anything-else-49278 (_throw (_+ ''Match fail in hooves/hooves-min against: '' anything-else-49278))))) for value ")+(JSON.stringify(G49280))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue49273 = actualFun49275.apply(this, arguments);
      while (recurP49276(returnValue49273))        {
        returnValue49273 = actualFun49275.apply(this, returnValue49273.args);
        };
      return returnValue49273;
      });
    currentModule48662.max = (function ()      {
      var returnValue49308 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil49307",
          args:arguments
        };
        });
      var recurP49311 = (function (val49312)        {
        if ((("undefined")===((typeof val49312))))          {
          return false;
          };
        return (val49312.recurSigil===("recurSigil49307"));
        });
      var actualFun49310 = (function ()        {
        return (function (arguments)          {
          var G49314 = undefined;
          var G49315 = Array.prototype.slice.apply(arguments);
          G49314 = (function (arguments)            {
            var matchVal49316 = G49315;
            if ((!((("object")===((typeof matchVal49316))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal49316.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart49317 = Array.prototype.slice.call(matchVal49316, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePart49317))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePart49317.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPart49318 = Array.prototype.slice.call(matchVal49316, 0);
            var values = matchArrayTailPart49318;
            return foldl(currentModule48662.max2, currentModule48662.minus(Infinity), values);
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G49314))))            {
            return G49314;
            };
          G49314 = (function (arguments)            {
            var matchVal49319 = G49315;
            var anythingElse49313 = matchVal49319;
            throw ((("Match fail in hooves/hooves-max against: ")+(anythingElse49313)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G49314))))            {
            return G49314;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail values)] (_newline-sequence (foldl max2 (- Infinity) values))) (anything-else-49313 (_throw (_+ ''Match fail in hooves/hooves-max against: '' anything-else-49313))))) for value ")+(JSON.stringify(G49315))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue49308 = actualFun49310.apply(this, arguments);
      while (recurP49311(returnValue49308))        {
        returnValue49308 = actualFun49310.apply(this, returnValue49308.args);
        };
      return returnValue49308;
      });
    currentModule48662.map = (function ()      {
      var returnValue49343 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil49342",
          args:arguments
        };
        });
      var recurP49346 = (function (val49347)        {
        if ((("undefined")===((typeof val49347))))          {
          return false;
          };
        return (val49347.recurSigil===("recurSigil49342"));
        });
      var actualFun49345 = (function ()        {
        return (function (arguments)          {
          var G49349 = undefined;
          var G49350 = Array.prototype.slice.apply(arguments);
          G49349 = (function (arguments)            {
            var matchVal49351 = G49350;
            if ((!((("object")===((typeof matchVal49351))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal49351.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart49352 = Array.prototype.slice.call(matchVal49351, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart49352))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart49352.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var f = matchArraySimplePart49352[0];
            var matchArrayTailPart49353 = Array.prototype.slice.call(matchVal49351, 1);
            var arrays = matchArrayTailPart49353;
            var minLen = currentModule48662.min.apply(undefined, currentModule48662.map1((function (a)              {
              return a.length;
              }), arrays));
            var out = [];
            for (var i = 0;currentModule48662.lessThan(i, minLen);i = currentModule48662.plus(i, 1))              {
              out[i] = f.apply(this, currentModule48662.map1((function (a)                {
                return a[i];
                }), arrays));
              };
            return out;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G49349))))            {
            return G49349;
            };
          G49349 = (function (arguments)            {
            var matchVal49354 = G49350;
            var anythingElse49348 = matchVal49354;
            throw ((("Match fail in hooves/hooves-map against: ")+(anythingElse49348)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G49349))))            {
            return G49349;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: f (tail arrays)] (_newline-sequence (var min-len (min\\.apply undefined (map1 (lambda (a) a\\.length) arrays))) (var out [:]) (for ((var i 0) (< i min-len) (set! i (+ i 1))) (set! [out i] (f\\.apply this (map1 (lambda (a) [a i]) arrays)))) out)) (anything-else-49348 (_throw (_+ ''Match fail in hooves/hooves-map against: '' anything-else-49348))))) for value ")+(JSON.stringify(G49350))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue49343 = actualFun49345.apply(this, arguments);
      while (recurP49346(returnValue49343))        {
        returnValue49343 = actualFun49345.apply(this, returnValue49343.args);
        };
      return returnValue49343;
      });
    currentModule48662.each = (function ()      {
      var returnValue49378 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil49377",
          args:arguments
        };
        });
      var recurP49381 = (function (val49382)        {
        if ((("undefined")===((typeof val49382))))          {
          return false;
          };
        return (val49382.recurSigil===("recurSigil49377"));
        });
      var actualFun49380 = (function ()        {
        return (function (arguments)          {
          var G49384 = undefined;
          var G49385 = Array.prototype.slice.apply(arguments);
          G49384 = (function (arguments)            {
            var matchVal49386 = G49385;
            if ((!((("object")===((typeof matchVal49386))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal49386.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart49387 = Array.prototype.slice.call(matchVal49386, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart49387))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart49387.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var f = matchArraySimplePart49387[0];
            var matchArrayTailPart49388 = Array.prototype.slice.call(matchVal49386, 1);
            var arrays = matchArrayTailPart49388;
            var minLen = currentModule48662.min.apply(undefined, currentModule48662.map1((function (a)              {
              return a.length;
              }), arrays));
            for (var i = 0;currentModule48662.lessThan(i, minLen);i = currentModule48662.plus(i, 1))              {
              f.apply(this, currentModule48662.map1((function (a)                {
                return a[i];
                }), arrays));
              };
            return undefined;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G49384))))            {
            return G49384;
            };
          G49384 = (function (arguments)            {
            var matchVal49389 = G49385;
            var anythingElse49383 = matchVal49389;
            throw ((("Match fail in hooves/hooves-each against: ")+(anythingElse49383)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G49384))))            {
            return G49384;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: f (tail arrays)] (_newline-sequence (var min-len (min\\.apply undefined (map1 (lambda (a) a\\.length) arrays))) (for ((var i 0) (< i min-len) (set! i (+ i 1))) (f\\.apply this (map1 (lambda (a) [a i]) arrays))) undefined)) (anything-else-49383 (_throw (_+ ''Match fail in hooves/hooves-each against: '' anything-else-49383))))) for value ")+(JSON.stringify(G49385))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue49378 = actualFun49380.apply(this, arguments);
      while (recurP49381(returnValue49378))        {
        returnValue49378 = actualFun49380.apply(this, returnValue49378.args);
        };
      return returnValue49378;
      });
    currentModule48662.zip = (function ()      {
      var returnValue49413 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil49412",
          args:arguments
        };
        });
      var recurP49416 = (function (val49417)        {
        if ((("undefined")===((typeof val49417))))          {
          return false;
          };
        return (val49417.recurSigil===("recurSigil49412"));
        });
      var actualFun49415 = (function ()        {
        return (function (arguments)          {
          var G49419 = undefined;
          var G49420 = Array.prototype.slice.apply(arguments);
          G49419 = (function (arguments)            {
            var matchVal49421 = G49420;
            if ((!((("object")===((typeof matchVal49421))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal49421.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart49422 = Array.prototype.slice.call(matchVal49421, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePart49422))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePart49422.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPart49423 = Array.prototype.slice.call(matchVal49421, 0);
            var arrays = matchArrayTailPart49423;
            return currentModule48662.map.apply(this, [(function ()              {
              var returnValue49425 = undefined;
              var recur = (function ()                {
                return {                  
                  recurSigil:"recurSigil49424",
                  args:arguments
                };
                });
              var recurP49428 = (function (val49429)                {
                if ((("undefined")===((typeof val49429))))                  {
                  return false;
                  };
                return (val49429.recurSigil===("recurSigil49424"));
                });
              var actualFun49427 = (function ()                {
                return (function (arguments)                  {
                  var G49431 = undefined;
                  var G49432 = Array.prototype.slice.apply(arguments);
                  G49431 = (function (arguments)                    {
                    var matchVal49433 = G49432;
                    if ((!((("object")===((typeof matchVal49433))))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    if ((!((matchVal49433.length>=0))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    var matchArraySimplePart49434 = Array.prototype.slice.call(matchVal49433, 0, 0);
                    if ((!((("object")===((typeof matchArraySimplePart49434))))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    if ((!((0===matchArraySimplePart49434.length))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    var matchArrayTailPart49435 = Array.prototype.slice.call(matchVal49433, 0);
                    var elements = matchArrayTailPart49435;
                    return elements;
                    ;
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G49431))))                    {
                    return G49431;
                    };
                  G49431 = (function (arguments)                    {
                    var matchVal49436 = G49432;
                    var anythingElse49430 = matchVal49436;
                    throw ((("Match fail in anonymous against: ")+(anythingElse49430)));
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G49431))))                    {
                    return G49431;
                    };
                  throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail elements)] (_newline-sequence elements)) (anything-else-49430 (_throw (_+ ''Match fail in anonymous against: '' anything-else-49430))))) for value ")+(JSON.stringify(G49432))));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                });
              returnValue49425 = actualFun49427.apply(this, arguments);
              while (recurP49428(returnValue49425))                {
                returnValue49425 = actualFun49427.apply(this, returnValue49425.args);
                };
              return returnValue49425;
              })].concat(arrays));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G49419))))            {
            return G49419;
            };
          G49419 = (function (arguments)            {
            var matchVal49437 = G49420;
            var anythingElse49418 = matchVal49437;
            throw ((("Match fail in hooves/hooves-zip against: ")+(anythingElse49418)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G49419))))            {
            return G49419;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail arrays)] (_newline-sequence (map\\.apply this (\\.\\. [: (lambda ((tail elements)) elements)] (concat arrays))))) (anything-else-49418 (_throw (_+ ''Match fail in hooves/hooves-zip against: '' anything-else-49418))))) for value ")+(JSON.stringify(G49420))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue49413 = actualFun49415.apply(this, arguments);
      while (recurP49416(returnValue49413))        {
        returnValue49413 = actualFun49415.apply(this, returnValue49413.args);
        };
      return returnValue49413;
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
    currentModule48662.lessThan = (function (G49453, G49454)      {
      return (G49453<G49454);
      });
    currentModule48662.lessThanequal = (function (G49480, G49481)      {
      return (G49480<=G49481);
      });
    currentModule48662.greaterThan = (function (G49507, G49508)      {
      return (G49507>G49508);
      });
    currentModule48662.greaterThanequal = (function (G49534, G49535)      {
      return (G49534>=G49535);
      });
    currentModule48662.ampersand = (function (G49561, G49562)      {
      return (G49561&G49562);
      });
    currentModule48662.pipe = (function (G49588, G49589)      {
      return (G49588|G49589);
      });
    currentModule48662.equalequal = (function (G49615, G49616)      {
      return (G49615==G49616);
      });
    currentModule48662.TripleEqualminus = (function (G49642, G49643)      {
      return (G49642===G49643);
      });
    currentModule48662.modsign = (function (G49669, G49670)      {
      return (G49669%G49670);
      });
    currentModule48662.caret = (function (G49696, G49697)      {
      return (G49696^G49697);
      });
    currentModule48662.lessThanlessThan = (function (G49723, G49724)      {
      return (G49723<<G49724);
      });
    currentModule48662.greaterThangreaterThan = (function (G49750, G49751)      {
      return (G49750>>G49751);
      });
    currentModule48662.greaterThangreaterThangreaterThan = (function (G49777, G49778)      {
      return (G49777>>>G49778);
      });
    // &&
    // macro - no dynamic value.
    ;
    // ||
    // macro - no dynamic value.
    ;
    currentModule48662.bang = (function (o)      {
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
    currentModule48662.plist = (function ()      {
      var returnValue49876 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil49875",
          args:arguments
        };
        });
      var recurP49879 = (function (val49880)        {
        if ((("undefined")===((typeof val49880))))          {
          return false;
          };
        return (val49880.recurSigil===("recurSigil49875"));
        });
      var actualFun49878 = (function ()        {
        return (function (arguments)          {
          var G49882 = undefined;
          var G49883 = Array.prototype.slice.apply(arguments);
          G49882 = (function (arguments)            {
            var matchVal49884 = G49883;
            if ((!((("object")===((typeof matchVal49884))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal49884.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart49885 = Array.prototype.slice.call(matchVal49884, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePart49885))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePart49885.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPart49886 = Array.prototype.slice.call(matchVal49884, 0);
            var parts = matchArrayTailPart49886;
            var out = {              
              
            };
            for (var i = 0;currentModule48662.lessThan(i, parts.length);i = currentModule48662.plus(i, 2))              {
              out[parts[i]] = parts[currentModule48662.plus(i, 1)];
              };
            return out;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G49882))))            {
            return G49882;
            };
          G49882 = (function (arguments)            {
            var matchVal49887 = G49883;
            var anythingElse49881 = matchVal49887;
            throw ((("Match fail in hooves/hooves-plist against: ")+(anythingElse49881)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G49882))))            {
            return G49882;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail parts)] (_newline-sequence (var out ({})) (for ((var i 0) (< i parts\\.length) (set! i (+ i 2))) (set! [out [parts i]] [parts (+ i 1)])) out)) (anything-else-49881 (_throw (_+ ''Match fail in hooves/hooves-plist against: '' anything-else-49881))))) for value ")+(JSON.stringify(G49883))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue49876 = actualFun49878.apply(this, arguments);
      while (recurP49879(returnValue49876))        {
        returnValue49876 = actualFun49878.apply(this, returnValue49876.args);
        };
      return returnValue49876;
      });
    // as-options{}
    // pattern - no dynamic value.
    ;
    currentModule48662.rx = (function ()      {
      var returnValue49917 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil49916",
          args:arguments
        };
        });
      var recurP49920 = (function (val49921)        {
        if ((("undefined")===((typeof val49921))))          {
          return false;
          };
        return (val49921.recurSigil===("recurSigil49916"));
        });
      var actualFun49919 = (function ()        {
        return (function (arguments)          {
          var G49923 = undefined;
          var G49924 = Array.prototype.slice.apply(arguments);
          G49923 = (function (arguments)            {
            var matchVal49925 = G49924;
            if ((!((("object")===((typeof matchVal49925))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal49925.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart49926 = Array.prototype.slice.call(matchVal49925, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart49926))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart49926.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var s = matchArraySimplePart49926[0];
            var matchArrayTailPart49927 = Array.prototype.slice.call(matchVal49925, 1);
            var matchTemp49928 = matchArrayTailPart49927[0];
            var previousMatchSucceeded49929 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTemp49928))))                {
                previousMatchSucceeded49929 = false;
                };
              var args = matchTemp49928;
              if (previousMatchSucceeded49929)                {
                break;
                };
              previousMatchSucceeded49929 = true;
              case 1:
              var fResult49930 = ((function (x)                {
                return "g";
                }))(matchTemp49928);
              if ((fResult49930===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceeded49929 = false;
                };
              var args = fResult49930;
              if (previousMatchSucceeded49929)                {
                break;
                };
              previousMatchSucceeded49929 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            return (new (RegExp)(s, args));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G49923))))            {
            return G49923;
            };
          G49923 = (function (arguments)            {
            var matchVal49931 = G49924;
            var anythingElse49922 = matchVal49931;
            throw ((("Match fail in hooves/hooves-rx against: ")+(anythingElse49922)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G49923))))            {
            return G49923;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: s :- (opt args ''g'')] (_newline-sequence (new RegExp s args))) (anything-else-49922 (_throw (_+ ''Match fail in hooves/hooves-rx against: '' anything-else-49922))))) for value ")+(JSON.stringify(G49924))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue49917 = actualFun49919.apply(this, arguments);
      while (recurP49920(returnValue49917))        {
        returnValue49917 = actualFun49919.apply(this, returnValue49917.args);
        };
      return returnValue49917;
      });
    // set-to!
    // macro - no dynamic value.
    ;
    currentModule48662.prefix = (function (i, ra)      {
      return [i].concat(ra);
      });
    currentModule48662.postfix = (function (i, ra)      {
      return [].concat(ra, [i]);
      });
    currentModule48662.identity = (function (x)      {
      return x;
      });
    var pushdividereturn = (function (item, array)      {
      array.push(item);
      return array;
      });
    var plistToObjectHelper = (function ()      {
      var returnValue50005 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil50004",
          args:arguments
        };
        });
      var recurP50008 = (function (val50009)        {
        if ((("undefined")===((typeof val50009))))          {
          return false;
          };
        return (val50009.recurSigil===("recurSigil50004"));
        });
      var actualFun50007 = (function ()        {
        return (function (arguments)          {
          var G50011 = undefined;
          var G50012 = Array.prototype.slice.apply(arguments);
          G50011 = (function (arguments)            {
            var matchVal50013 = G50012;
            if ((!((("object")===((typeof matchVal50013))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchVal50013.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp50014 = matchVal50013[0];
            var matchTemp50015 = matchVal50013[1];
            var objectAcc = matchTemp50014;
            if ((!((("object")===((typeof matchTemp50015))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchTemp50015.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return objectAcc;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G50011))))            {
            return G50011;
            };
          G50011 = (function (arguments)            {
            var matchVal50016 = G50012;
            if ((!((("object")===((typeof matchVal50016))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchVal50016.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp50017 = matchVal50016[0];
            var matchTemp50018 = matchVal50016[1];
            var objectAcc = matchTemp50017;
            if ((!((("object")===((typeof matchTemp50018))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchTemp50018.length>=2))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart50019 = Array.prototype.slice.call(matchTemp50018, 0, 2);
            if ((!((("object")===((typeof matchArraySimplePart50019))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchArraySimplePart50019.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp50020 = matchArraySimplePart50019[0];
            var matchTemp50021 = matchArraySimplePart50019[1];
            var matchFunExpr50026 = (function (G50025)              {
              return (((typeof G50025))===("string"));
              });
            if ((!(matchFunExpr50026(matchTemp50020))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var key = matchTemp50020;
            var value = matchTemp50021;
            var matchArrayTailPart50027 = Array.prototype.slice.call(matchTemp50018, 2);
            var rest = matchArrayTailPart50027;
            objectAcc[key] = value;
            return recur(objectAcc, rest);
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G50011))))            {
            return G50011;
            };
          G50011 = (function (arguments)            {
            var matchVal50028 = G50012;
            var anythingElse50010 = matchVal50028;
            throw ((("Match fail in plist->object-helper against: ")+(anythingElse50010)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G50011))))            {
            return G50011;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: object-acc [:]] (_newline-sequence object-acc)) ([: object-acc [: (string key) value (tail rest)]] (_newline-sequence (set! [object-acc key] value) (recur object-acc rest))) (anything-else-50010 (_throw (_+ ''Match fail in plist->object-helper against: '' anything-else-50010))))) for value ")+(JSON.stringify(G50012))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue50005 = actualFun50007.apply(this, arguments);
      while (recurP50008(returnValue50005))        {
        returnValue50005 = actualFun50007.apply(this, returnValue50005.args);
        };
      return returnValue50005;
      });
    currentModule48662.plistToObject = (function ()      {
      var returnValue50052 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil50051",
          args:arguments
        };
        });
      var recurP50055 = (function (val50056)        {
        if ((("undefined")===((typeof val50056))))          {
          return false;
          };
        return (val50056.recurSigil===("recurSigil50051"));
        });
      var actualFun50054 = (function ()        {
        return (function (arguments)          {
          var G50058 = undefined;
          var G50059 = Array.prototype.slice.apply(arguments);
          G50058 = (function (arguments)            {
            var matchVal50060 = G50059;
            if ((!((("object")===((typeof matchVal50060))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal50060.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart50061 = Array.prototype.slice.call(matchVal50060, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePart50061))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePart50061.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPart50062 = Array.prototype.slice.call(matchVal50060, 0);
            var kvPairs = matchArrayTailPart50062;
            return plistToObjectHelper({              
              
            }, kvPairs);
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G50058))))            {
            return G50058;
            };
          G50058 = (function (arguments)            {
            var matchVal50063 = G50059;
            var anythingElse50057 = matchVal50063;
            throw ((("Match fail in hooves/hooves-plist->object against: ")+(anythingElse50057)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G50058))))            {
            return G50058;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail kv-pairs)] (_newline-sequence (plist->object-helper ({}) kv-pairs))) (anything-else-50057 (_throw (_+ ''Match fail in hooves/hooves-plist->object against: '' anything-else-50057))))) for value ")+(JSON.stringify(G50059))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue50052 = actualFun50054.apply(this, arguments);
      while (recurP50055(returnValue50052))        {
        returnValue50052 = actualFun50054.apply(this, returnValue50052.args);
        };
      return returnValue50052;
      });
    currentModule48662.filter = (function ()      {
      var returnValue50094 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil50093",
          args:arguments
        };
        });
      var recurP50097 = (function (val50098)        {
        if ((("undefined")===((typeof val50098))))          {
          return false;
          };
        return (val50098.recurSigil===("recurSigil50093"));
        });
      var actualFun50096 = (function ()        {
        return (function (arguments)          {
          var G50100 = undefined;
          var G50101 = Array.prototype.slice.apply(arguments);
          G50100 = (function (arguments)            {
            var matchVal50102 = G50101;
            if ((!((("object")===((typeof matchVal50102))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchVal50102.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp50103 = matchVal50102[0];
            var matchTemp50104 = matchVal50102[1];
            var matchTemp50105 = matchVal50102[2];
            var fun = matchTemp50103;
            if ((!((("object")===((typeof matchTemp50104))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchTemp50104.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var acc = matchTemp50105;
            return acc;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G50100))))            {
            return G50100;
            };
          G50100 = (function (arguments)            {
            var matchVal50106 = G50101;
            if ((!((("object")===((typeof matchVal50106))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchVal50106.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp50107 = matchVal50106[0];
            var matchTemp50108 = matchVal50106[1];
            var matchTemp50109 = matchVal50106[2];
            var fun = matchTemp50107;
            if ((!((("object")===((typeof matchTemp50108))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchTemp50108.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart50110 = Array.prototype.slice.call(matchTemp50108, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart50110))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart50110.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart50110[0];
            var matchArrayTailPart50111 = Array.prototype.slice.call(matchTemp50108, 1);
            var tl = matchArrayTailPart50111;
            var acc = matchTemp50109;
            var r = fun(hd);
            return ((r)?(recur(fun, tl, pushdividereturn(hd, acc))) : (recur(fun, tl, acc)));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G50100))))            {
            return G50100;
            };
          G50100 = (function (arguments)            {
            var matchVal50112 = G50101;
            if ((!((("object")===((typeof matchVal50112))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchVal50112.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var fun = matchVal50112[0];
            var ra = matchVal50112[1];
            return recur(fun, ra, []);
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G50100))))            {
            return G50100;
            };
          G50100 = (function (arguments)            {
            var matchVal50113 = G50101;
            var anythingElse50099 = matchVal50113;
            throw ((("Match fail in hooves/hooves-filter against: ")+(anythingElse50099)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G50100))))            {
            return G50100;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: fun [:] acc] (_newline-sequence acc)) ([: fun [: hd (tail tl)] acc] (_newline-sequence (var r (fun hd)) (if r (recur fun tl (push/return hd acc)) (recur fun tl acc)))) ([: fun ra] (_newline-sequence (recur fun ra [:]))) (anything-else-50099 (_throw (_+ ''Match fail in hooves/hooves-filter against: '' anything-else-50099))))) for value ")+(JSON.stringify(G50101))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue50094 = actualFun50096.apply(this, arguments);
      while (recurP50097(returnValue50094))        {
        returnValue50094 = actualFun50096.apply(this, returnValue50094.args);
        };
      return returnValue50094;
      });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModule48662;
  }))