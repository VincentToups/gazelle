define([], (function ()  {
  var currentModule29611 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModule29611 = value;
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
    currentModule29611.definedPredicate = (function (x)      {
      return (!((((typeof x))===("undefined"))));
      });
    currentModule29611.undefinedPredicate = (function (x)      {
      return (((typeof x))===("undefined"));
      });
    currentModule29611.numberPredicate = (function (o)      {
      return (((typeof o))===("number"));
      });
    currentModule29611.stringPredicate = (function (o)      {
      return (((typeof o))===("string"));
      });
    currentModule29611.arrayPredicate = (function (o)      {
      return (o instanceof Array);
      });
    currentModule29611.emptyPredicate = (function (o)      {
      return (0===o.length);
      });
    currentModule29611.nullPredicate = (function (x)      {
      return currentModule29611.TripleEqualminus(null, x);
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
    currentModule29611.TripleEqualminus_ = (function (partial)      {
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
    currentModule29611.Delay = (function (lambdaExpr)      {
      this.lambdaExpr = lambdaExpr;
      return this;
      });
    currentModule29611.Delay.prototype.value = (function ()      {
      return this.lambdaExpr();
      });
    // delay
    // macro - no dynamic value.
    ;
    currentModule29611.undelay = (function (o)      {
      return (function (arguments)        {
        var G29877 = undefined;
        var G29878 = o;
        G29877 = (function (arguments)          {
          var matchVal29879 = G29878;
          var matchFunExpr29881 = (function (G29880)            {
            return (G29880 instanceof currentModule29611.Delay);
            });
          if ((!(matchFunExpr29881(matchVal29879))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var delayObject = matchVal29879;
          return delayObject.value();
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G29877))))          {
          return G29877;
          };
        throw ((("match-fail at ((match o ((instance Delay delay-object) (delay-object\\.value)))) for value ")+(JSON.stringify(G29878))));
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
    currentModule29611.range = (function ()      {
      var returnValue29936 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil29935",
          args:arguments
        };
        });
      var recurP29939 = (function (val29940)        {
        if ((("undefined")===((typeof val29940))))          {
          return false;
          };
        return (val29940.recurSigil===("recurSigil29935"));
        });
      var actualFun29938 = (function ()        {
        return (function (arguments)          {
          var G29942 = undefined;
          var G29943 = Array.prototype.slice.apply(arguments);
          G29942 = (function (arguments)            {
            var matchVal29944 = G29943;
            if ((!((("object")===((typeof matchVal29944))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((4===matchVal29944.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchVal29944[0];
            var step = matchVal29944[1];
            var stop = matchVal29944[2];
            var transform = matchVal29944[3];
            var out = [];
            for (var i = start;(i<stop);i = ((i)+(step)))              {
              out.push(transform(i));
              };
            return out;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G29942))))            {
            return G29942;
            };
          G29942 = (function (arguments)            {
            var matchVal29945 = G29943;
            if ((!((("object")===((typeof matchVal29945))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchVal29945.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchVal29945[0];
            var step = matchVal29945[1];
            var stop = matchVal29945[2];
            return recur(start, step, stop, (function (v)              {
              return v;
              }));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G29942))))            {
            return G29942;
            };
          G29942 = (function (arguments)            {
            var matchVal29946 = G29943;
            if ((!((("object")===((typeof matchVal29946))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchVal29946.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchVal29946[0];
            var stop = matchVal29946[1];
            return recur(start, 1, stop, (function (v)              {
              return v;
              }));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G29942))))            {
            return G29942;
            };
          G29942 = (function (arguments)            {
            var matchVal29947 = G29943;
            if ((!((("object")===((typeof matchVal29947))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchVal29947.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var stop = matchVal29947[0];
            return recur(0, 1, stop, (function (v)              {
              return v;
              }));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G29942))))            {
            return G29942;
            };
          G29942 = (function (arguments)            {
            var matchVal29948 = G29943;
            var anythingElse29941 = matchVal29948;
            throw ((("Match fail in hooves/hooves-range against: ")+(anythingElse29941)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G29942))))            {
            return G29942;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: start step stop transform] (_newline-sequence (var out [:]) (for ((var i start) (_< i stop) (set! i (_+ i step))) (out\\.push (transform i))) out)) ([: start step stop] (_newline-sequence (recur start step stop (lambda (v) v)))) ([: start stop] (_newline-sequence (recur start 1 stop (lambda (v) v)))) ([: stop] (_newline-sequence (recur 0 1 stop (lambda (v) v)))) (anything-else-29941 (_throw (_+ ''Match fail in hooves/hooves-range against: '' anything-else-29941))))) for value ")+(JSON.stringify(G29943))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue29936 = actualFun29938.apply(this, arguments);
      while (recurP29939(returnValue29936))        {
        returnValue29936 = actualFun29938.apply(this, returnValue29936.args);
        };
      return returnValue29936;
      });
    currentModule29611.pureSort = (function ()      {
      var returnValue29972 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil29971",
          args:arguments
        };
        });
      var recurP29975 = (function (val29976)        {
        if ((("undefined")===((typeof val29976))))          {
          return false;
          };
        return (val29976.recurSigil===("recurSigil29971"));
        });
      var actualFun29974 = (function ()        {
        return (function (arguments)          {
          var G29978 = undefined;
          var G29979 = Array.prototype.slice.apply(arguments);
          G29978 = (function (arguments)            {
            var matchVal29980 = G29979;
            if ((!((("object")===((typeof matchVal29980))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal29980.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart29981 = Array.prototype.slice.call(matchVal29980, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart29981))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart29981.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var array = matchArraySimplePart29981[0];
            var matchArrayTailPart29982 = Array.prototype.slice.call(matchVal29980, 1);
            var matchTemp29983 = matchArrayTailPart29982[0];
            var previousMatchSucceeded29984 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTemp29983))))                {
                previousMatchSucceeded29984 = false;
                };
              var sortFun = matchTemp29983;
              if (previousMatchSucceeded29984)                {
                break;
                };
              previousMatchSucceeded29984 = true;
              case 1:
              var fResult29985 = ((function (x)                {
                return (function (a, b)                  {
                  return ((currentModule29611.lessThan(a, b))?(-1) : (1));
                  });
                }))(matchTemp29983);
              if ((fResult29985===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceeded29984 = false;
                };
              var sortFun = fResult29985;
              if (previousMatchSucceeded29984)                {
                break;
                };
              previousMatchSucceeded29984 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var copy = array.concat([]);
            copy.sort(sortFun);
            return copy;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G29978))))            {
            return G29978;
            };
          G29978 = (function (arguments)            {
            var matchVal29986 = G29979;
            var anythingElse29977 = matchVal29986;
            throw ((("Match fail in hooves/hooves-pure-sort against: ")+(anythingElse29977)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G29978))))            {
            return G29978;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: array :- (opt sort-fun (lambda (a b) (if (< a b) -1 1)))] (_newline-sequence (var copy (\\.\\. array (concat [:]))) (\\.\\. copy (sort sort-fun)) copy)) (anything-else-29977 (_throw (_+ ''Match fail in hooves/hooves-pure-sort against: '' anything-else-29977))))) for value ")+(JSON.stringify(G29979))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue29972 = actualFun29974.apply(this, arguments);
      while (recurP29975(returnValue29972))        {
        returnValue29972 = actualFun29974.apply(this, returnValue29972.args);
        };
      return returnValue29972;
      });
    // with-slots
    // macro - no dynamic value.
    ;
    currentModule29611.plus = (function ()      {
      var returnValue30016 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil30015",
          args:arguments
        };
        });
      var recurP30019 = (function (val30020)        {
        if ((("undefined")===((typeof val30020))))          {
          return false;
          };
        return (val30020.recurSigil===("recurSigil30015"));
        });
      var actualFun30018 = (function ()        {
        return (function (arguments)          {
          var G30022 = undefined;
          var G30023 = Array.prototype.slice.apply(arguments);
          G30022 = (function (arguments)            {
            var matchVal30024 = G30023;
            if ((!((("object")===((typeof matchVal30024))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal30024.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart30025 = Array.prototype.slice.call(matchVal30024, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart30025))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart30025.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart30025[0];
            var matchArrayTailPart30026 = Array.prototype.slice.call(matchVal30024, 1);
            var tl = matchArrayTailPart30026;
            var result = hd;
            for (i in (tl))              {
              result = ((result)+(tl[i]));
              };
            return result;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30022))))            {
            return G30022;
            };
          G30022 = (function (arguments)            {
            var matchVal30027 = G30023;
            var anythingElse30021 = matchVal30027;
            throw ((("Match fail in hooves/hooves-+ against: ")+(anythingElse30021)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30022))))            {
            return G30022;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result)) (anything-else-30021 (_throw (_+ ''Match fail in hooves/hooves-+ against: '' anything-else-30021))))) for value ")+(JSON.stringify(G30023))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue30016 = actualFun30018.apply(this, arguments);
      while (recurP30019(returnValue30016))        {
        returnValue30016 = actualFun30018.apply(this, returnValue30016.args);
        };
      return returnValue30016;
      });
    currentModule29611.minus = (function ()      {
      var returnValue30051 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil30050",
          args:arguments
        };
        });
      var recurP30054 = (function (val30055)        {
        if ((("undefined")===((typeof val30055))))          {
          return false;
          };
        return (val30055.recurSigil===("recurSigil30050"));
        });
      var actualFun30053 = (function ()        {
        return (function (arguments)          {
          var G30057 = undefined;
          var G30058 = Array.prototype.slice.apply(arguments);
          G30057 = (function (arguments)            {
            var matchVal30059 = G30058;
            if ((!((("object")===((typeof matchVal30059))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal30059.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart30060 = Array.prototype.slice.call(matchVal30059, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart30060))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart30060.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart30060[0];
            var matchArrayTailPart30061 = Array.prototype.slice.call(matchVal30059, 1);
            var tl = matchArrayTailPart30061;
            return (((tl.length>0))?(((hd)-(apply(currentModule29611.plus, tl)))) : ((-(hd))));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30057))))            {
            return G30057;
            };
          G30057 = (function (arguments)            {
            var matchVal30062 = G30058;
            var anythingElse30056 = matchVal30062;
            throw ((("Match fail in hooves/hooves-- against: ")+(anythingElse30056)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30057))))            {
            return G30057;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (if (_> tl\\.length 0) (_- hd (apply + tl)) (_- hd)))) (anything-else-30056 (_throw (_+ ''Match fail in hooves/hooves-- against: '' anything-else-30056))))) for value ")+(JSON.stringify(G30058))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue30051 = actualFun30053.apply(this, arguments);
      while (recurP30054(returnValue30051))        {
        returnValue30051 = actualFun30053.apply(this, returnValue30051.args);
        };
      return returnValue30051;
      });
    currentModule29611.times = (function ()      {
      var returnValue30086 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil30085",
          args:arguments
        };
        });
      var recurP30089 = (function (val30090)        {
        if ((("undefined")===((typeof val30090))))          {
          return false;
          };
        return (val30090.recurSigil===("recurSigil30085"));
        });
      var actualFun30088 = (function ()        {
        return (function (arguments)          {
          var G30092 = undefined;
          var G30093 = Array.prototype.slice.apply(arguments);
          G30092 = (function (arguments)            {
            var matchVal30094 = G30093;
            if ((!((("object")===((typeof matchVal30094))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal30094.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart30095 = Array.prototype.slice.call(matchVal30094, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart30095))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart30095.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart30095[0];
            var matchArrayTailPart30096 = Array.prototype.slice.call(matchVal30094, 1);
            var tl = matchArrayTailPart30096;
            var result = hd;
            for (i in (tl))              {
              result = ((result)*(tl[i]));
              };
            return result;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30092))))            {
            return G30092;
            };
          G30092 = (function (arguments)            {
            var matchVal30097 = G30093;
            var anythingElse30091 = matchVal30097;
            throw ((("Match fail in hooves/hooves-* against: ")+(anythingElse30091)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30092))))            {
            return G30092;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result)) (anything-else-30091 (_throw (_+ ''Match fail in hooves/hooves-* against: '' anything-else-30091))))) for value ")+(JSON.stringify(G30093))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue30086 = actualFun30088.apply(this, arguments);
      while (recurP30089(returnValue30086))        {
        returnValue30086 = actualFun30088.apply(this, returnValue30086.args);
        };
      return returnValue30086;
      });
    currentModule29611.divide = (function ()      {
      var returnValue30121 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil30120",
          args:arguments
        };
        });
      var recurP30124 = (function (val30125)        {
        if ((("undefined")===((typeof val30125))))          {
          return false;
          };
        return (val30125.recurSigil===("recurSigil30120"));
        });
      var actualFun30123 = (function ()        {
        return (function (arguments)          {
          var G30127 = undefined;
          var G30128 = Array.prototype.slice.apply(arguments);
          G30127 = (function (arguments)            {
            var matchVal30129 = G30128;
            if ((!((("object")===((typeof matchVal30129))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal30129.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart30130 = Array.prototype.slice.call(matchVal30129, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart30130))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart30130.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart30130[0];
            var matchArrayTailPart30131 = Array.prototype.slice.call(matchVal30129, 1);
            var tl = matchArrayTailPart30131;
            return ((hd)/((apply(currentModule29611.times, tl))));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30127))))            {
            return G30127;
            };
          G30127 = (function (arguments)            {
            var matchVal30132 = G30128;
            var anythingElse30126 = matchVal30132;
            throw ((("Match fail in hooves/hooves-/ against: ")+(anythingElse30126)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30127))))            {
            return G30127;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (_/ hd (apply * tl)))) (anything-else-30126 (_throw (_+ ''Match fail in hooves/hooves-/ against: '' anything-else-30126))))) for value ")+(JSON.stringify(G30128))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue30121 = actualFun30123.apply(this, arguments);
      while (recurP30124(returnValue30121))        {
        returnValue30121 = actualFun30123.apply(this, returnValue30121.args);
        };
      return returnValue30121;
      });
    currentModule29611.map1 = (function (f, a)      {
      var o = [];
      for (var i = 0;currentModule29611.lessThan(i, a.length);i = currentModule29611.plus(i, 1))        {
        o[i] = f(a[i]);
        };
      return o;
      });
    currentModule29611.min2 = (function (a, b)      {
      return ((currentModule29611.lessThan(a, b))?(a) : (b));
      });
    currentModule29611.max2 = (function (a, b)      {
      return ((currentModule29611.greaterThan(a, b))?(a) : (b));
      });
    var foldl = (function (fItAc, init, sequence)      {
      for (var i = 0;currentModule29611.lessThan(i, sequence.length);i = currentModule29611.plus(i, 1))        {
        init = fItAc(init, sequence[i]);
        };
      return init;
      });
    currentModule29611.min = (function ()      {
      var returnValue30222 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil30221",
          args:arguments
        };
        });
      var recurP30225 = (function (val30226)        {
        if ((("undefined")===((typeof val30226))))          {
          return false;
          };
        return (val30226.recurSigil===("recurSigil30221"));
        });
      var actualFun30224 = (function ()        {
        return (function (arguments)          {
          var G30228 = undefined;
          var G30229 = Array.prototype.slice.apply(arguments);
          G30228 = (function (arguments)            {
            var matchVal30230 = G30229;
            if ((!((("object")===((typeof matchVal30230))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal30230.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart30231 = Array.prototype.slice.call(matchVal30230, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePart30231))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePart30231.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPart30232 = Array.prototype.slice.call(matchVal30230, 0);
            var values = matchArrayTailPart30232;
            return foldl(currentModule29611.min2, Infinity, values);
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30228))))            {
            return G30228;
            };
          G30228 = (function (arguments)            {
            var matchVal30233 = G30229;
            var anythingElse30227 = matchVal30233;
            throw ((("Match fail in hooves/hooves-min against: ")+(anythingElse30227)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30228))))            {
            return G30228;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail values)] (_newline-sequence (foldl min2 Infinity values))) (anything-else-30227 (_throw (_+ ''Match fail in hooves/hooves-min against: '' anything-else-30227))))) for value ")+(JSON.stringify(G30229))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue30222 = actualFun30224.apply(this, arguments);
      while (recurP30225(returnValue30222))        {
        returnValue30222 = actualFun30224.apply(this, returnValue30222.args);
        };
      return returnValue30222;
      });
    currentModule29611.max = (function ()      {
      var returnValue30257 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil30256",
          args:arguments
        };
        });
      var recurP30260 = (function (val30261)        {
        if ((("undefined")===((typeof val30261))))          {
          return false;
          };
        return (val30261.recurSigil===("recurSigil30256"));
        });
      var actualFun30259 = (function ()        {
        return (function (arguments)          {
          var G30263 = undefined;
          var G30264 = Array.prototype.slice.apply(arguments);
          G30263 = (function (arguments)            {
            var matchVal30265 = G30264;
            if ((!((("object")===((typeof matchVal30265))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal30265.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart30266 = Array.prototype.slice.call(matchVal30265, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePart30266))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePart30266.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPart30267 = Array.prototype.slice.call(matchVal30265, 0);
            var values = matchArrayTailPart30267;
            return foldl(currentModule29611.max2, currentModule29611.minus(Infinity), values);
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30263))))            {
            return G30263;
            };
          G30263 = (function (arguments)            {
            var matchVal30268 = G30264;
            var anythingElse30262 = matchVal30268;
            throw ((("Match fail in hooves/hooves-max against: ")+(anythingElse30262)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30263))))            {
            return G30263;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail values)] (_newline-sequence (foldl max2 (- Infinity) values))) (anything-else-30262 (_throw (_+ ''Match fail in hooves/hooves-max against: '' anything-else-30262))))) for value ")+(JSON.stringify(G30264))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue30257 = actualFun30259.apply(this, arguments);
      while (recurP30260(returnValue30257))        {
        returnValue30257 = actualFun30259.apply(this, returnValue30257.args);
        };
      return returnValue30257;
      });
    currentModule29611.map = (function ()      {
      var returnValue30292 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil30291",
          args:arguments
        };
        });
      var recurP30295 = (function (val30296)        {
        if ((("undefined")===((typeof val30296))))          {
          return false;
          };
        return (val30296.recurSigil===("recurSigil30291"));
        });
      var actualFun30294 = (function ()        {
        return (function (arguments)          {
          var G30298 = undefined;
          var G30299 = Array.prototype.slice.apply(arguments);
          G30298 = (function (arguments)            {
            var matchVal30300 = G30299;
            if ((!((("object")===((typeof matchVal30300))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal30300.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart30301 = Array.prototype.slice.call(matchVal30300, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart30301))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart30301.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var f = matchArraySimplePart30301[0];
            var matchArrayTailPart30302 = Array.prototype.slice.call(matchVal30300, 1);
            var arrays = matchArrayTailPart30302;
            var minLen = currentModule29611.min.apply(undefined, currentModule29611.map1((function (a)              {
              return a.length;
              }), arrays));
            var out = [];
            for (var i = 0;currentModule29611.lessThan(i, minLen);i = currentModule29611.plus(i, 1))              {
              out[i] = f.apply(this, currentModule29611.map1((function (a)                {
                return a[i];
                }), arrays));
              };
            return out;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30298))))            {
            return G30298;
            };
          G30298 = (function (arguments)            {
            var matchVal30303 = G30299;
            var anythingElse30297 = matchVal30303;
            throw ((("Match fail in hooves/hooves-map against: ")+(anythingElse30297)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30298))))            {
            return G30298;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: f (tail arrays)] (_newline-sequence (var min-len (min\\.apply undefined (map1 (lambda (a) a\\.length) arrays))) (var out [:]) (for ((var i 0) (< i min-len) (set! i (+ i 1))) (set! [out i] (f\\.apply this (map1 (lambda (a) [a i]) arrays)))) out)) (anything-else-30297 (_throw (_+ ''Match fail in hooves/hooves-map against: '' anything-else-30297))))) for value ")+(JSON.stringify(G30299))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue30292 = actualFun30294.apply(this, arguments);
      while (recurP30295(returnValue30292))        {
        returnValue30292 = actualFun30294.apply(this, returnValue30292.args);
        };
      return returnValue30292;
      });
    currentModule29611.each = (function ()      {
      var returnValue30327 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil30326",
          args:arguments
        };
        });
      var recurP30330 = (function (val30331)        {
        if ((("undefined")===((typeof val30331))))          {
          return false;
          };
        return (val30331.recurSigil===("recurSigil30326"));
        });
      var actualFun30329 = (function ()        {
        return (function (arguments)          {
          var G30333 = undefined;
          var G30334 = Array.prototype.slice.apply(arguments);
          G30333 = (function (arguments)            {
            var matchVal30335 = G30334;
            if ((!((("object")===((typeof matchVal30335))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal30335.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart30336 = Array.prototype.slice.call(matchVal30335, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart30336))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart30336.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var f = matchArraySimplePart30336[0];
            var matchArrayTailPart30337 = Array.prototype.slice.call(matchVal30335, 1);
            var arrays = matchArrayTailPart30337;
            var minLen = currentModule29611.min.apply(undefined, currentModule29611.map1((function (a)              {
              return a.length;
              }), arrays));
            for (var i = 0;currentModule29611.lessThan(i, minLen);i = currentModule29611.plus(i, 1))              {
              f.apply(this, currentModule29611.map1((function (a)                {
                return a[i];
                }), arrays));
              };
            return undefined;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30333))))            {
            return G30333;
            };
          G30333 = (function (arguments)            {
            var matchVal30338 = G30334;
            var anythingElse30332 = matchVal30338;
            throw ((("Match fail in hooves/hooves-each against: ")+(anythingElse30332)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30333))))            {
            return G30333;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: f (tail arrays)] (_newline-sequence (var min-len (min\\.apply undefined (map1 (lambda (a) a\\.length) arrays))) (for ((var i 0) (< i min-len) (set! i (+ i 1))) (f\\.apply this (map1 (lambda (a) [a i]) arrays))) undefined)) (anything-else-30332 (_throw (_+ ''Match fail in hooves/hooves-each against: '' anything-else-30332))))) for value ")+(JSON.stringify(G30334))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue30327 = actualFun30329.apply(this, arguments);
      while (recurP30330(returnValue30327))        {
        returnValue30327 = actualFun30329.apply(this, returnValue30327.args);
        };
      return returnValue30327;
      });
    currentModule29611.zip = (function ()      {
      var returnValue30362 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil30361",
          args:arguments
        };
        });
      var recurP30365 = (function (val30366)        {
        if ((("undefined")===((typeof val30366))))          {
          return false;
          };
        return (val30366.recurSigil===("recurSigil30361"));
        });
      var actualFun30364 = (function ()        {
        return (function (arguments)          {
          var G30368 = undefined;
          var G30369 = Array.prototype.slice.apply(arguments);
          G30368 = (function (arguments)            {
            var matchVal30370 = G30369;
            if ((!((("object")===((typeof matchVal30370))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal30370.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart30371 = Array.prototype.slice.call(matchVal30370, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePart30371))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePart30371.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPart30372 = Array.prototype.slice.call(matchVal30370, 0);
            var arrays = matchArrayTailPart30372;
            return currentModule29611.map.apply(this, [(function ()              {
              var returnValue30374 = undefined;
              var recur = (function ()                {
                return {                  
                  recurSigil:"recurSigil30373",
                  args:arguments
                };
                });
              var recurP30377 = (function (val30378)                {
                if ((("undefined")===((typeof val30378))))                  {
                  return false;
                  };
                return (val30378.recurSigil===("recurSigil30373"));
                });
              var actualFun30376 = (function ()                {
                return (function (arguments)                  {
                  var G30380 = undefined;
                  var G30381 = Array.prototype.slice.apply(arguments);
                  G30380 = (function (arguments)                    {
                    var matchVal30382 = G30381;
                    if ((!((("object")===((typeof matchVal30382))))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    if ((!((matchVal30382.length>=0))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    var matchArraySimplePart30383 = Array.prototype.slice.call(matchVal30382, 0, 0);
                    if ((!((("object")===((typeof matchArraySimplePart30383))))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    if ((!((0===matchArraySimplePart30383.length))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    var matchArrayTailPart30384 = Array.prototype.slice.call(matchVal30382, 0);
                    var elements = matchArrayTailPart30384;
                    return elements;
                    ;
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30380))))                    {
                    return G30380;
                    };
                  G30380 = (function (arguments)                    {
                    var matchVal30385 = G30381;
                    var anythingElse30379 = matchVal30385;
                    throw ((("Match fail in anonymous against: ")+(anythingElse30379)));
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30380))))                    {
                    return G30380;
                    };
                  throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail elements)] (_newline-sequence elements)) (anything-else-30379 (_throw (_+ ''Match fail in anonymous against: '' anything-else-30379))))) for value ")+(JSON.stringify(G30381))));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                });
              returnValue30374 = actualFun30376.apply(this, arguments);
              while (recurP30377(returnValue30374))                {
                returnValue30374 = actualFun30376.apply(this, returnValue30374.args);
                };
              return returnValue30374;
              })].concat(arrays));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30368))))            {
            return G30368;
            };
          G30368 = (function (arguments)            {
            var matchVal30386 = G30369;
            var anythingElse30367 = matchVal30386;
            throw ((("Match fail in hooves/hooves-zip against: ")+(anythingElse30367)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30368))))            {
            return G30368;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail arrays)] (_newline-sequence (map\\.apply this (\\.\\. [: (lambda ((tail elements)) elements)] (concat arrays))))) (anything-else-30367 (_throw (_+ ''Match fail in hooves/hooves-zip against: '' anything-else-30367))))) for value ")+(JSON.stringify(G30369))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue30362 = actualFun30364.apply(this, arguments);
      while (recurP30365(returnValue30362))        {
        returnValue30362 = actualFun30364.apply(this, returnValue30362.args);
        };
      return returnValue30362;
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
    currentModule29611.lessThan = (function (G30402, G30403)      {
      return (G30402<G30403);
      });
    currentModule29611.lessThanequal = (function (G30429, G30430)      {
      return (G30429<=G30430);
      });
    currentModule29611.greaterThan = (function (G30456, G30457)      {
      return (G30456>G30457);
      });
    currentModule29611.greaterThanequal = (function (G30483, G30484)      {
      return (G30483>=G30484);
      });
    currentModule29611.ampersand = (function (G30510, G30511)      {
      return (G30510&G30511);
      });
    currentModule29611.pipe = (function (G30537, G30538)      {
      return (G30537|G30538);
      });
    currentModule29611.equalequal = (function (G30564, G30565)      {
      return (G30564==G30565);
      });
    currentModule29611.TripleEqualminus = (function (G30591, G30592)      {
      return (G30591===G30592);
      });
    currentModule29611.modsign = (function (G30618, G30619)      {
      return (G30618%G30619);
      });
    currentModule29611.caret = (function (G30645, G30646)      {
      return (G30645^G30646);
      });
    currentModule29611.lessThanlessThan = (function (G30672, G30673)      {
      return (G30672<<G30673);
      });
    currentModule29611.greaterThangreaterThan = (function (G30699, G30700)      {
      return (G30699>>G30700);
      });
    currentModule29611.greaterThangreaterThangreaterThan = (function (G30726, G30727)      {
      return (G30726>>>G30727);
      });
    // &&
    // macro - no dynamic value.
    ;
    // ||
    // macro - no dynamic value.
    ;
    currentModule29611.bang = (function (o)      {
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
    currentModule29611.plist = (function ()      {
      var returnValue30825 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil30824",
          args:arguments
        };
        });
      var recurP30828 = (function (val30829)        {
        if ((("undefined")===((typeof val30829))))          {
          return false;
          };
        return (val30829.recurSigil===("recurSigil30824"));
        });
      var actualFun30827 = (function ()        {
        return (function (arguments)          {
          var G30831 = undefined;
          var G30832 = Array.prototype.slice.apply(arguments);
          G30831 = (function (arguments)            {
            var matchVal30833 = G30832;
            if ((!((("object")===((typeof matchVal30833))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal30833.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart30834 = Array.prototype.slice.call(matchVal30833, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePart30834))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePart30834.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPart30835 = Array.prototype.slice.call(matchVal30833, 0);
            var parts = matchArrayTailPart30835;
            var out = {              
              
            };
            for (var i = 0;currentModule29611.lessThan(i, parts.length);i = currentModule29611.plus(i, 2))              {
              out[parts[i]] = parts[currentModule29611.plus(i, 1)];
              };
            return out;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30831))))            {
            return G30831;
            };
          G30831 = (function (arguments)            {
            var matchVal30836 = G30832;
            var anythingElse30830 = matchVal30836;
            throw ((("Match fail in hooves/hooves-plist against: ")+(anythingElse30830)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30831))))            {
            return G30831;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail parts)] (_newline-sequence (var out ({})) (for ((var i 0) (< i parts\\.length) (set! i (+ i 2))) (set! [out [parts i]] [parts (+ i 1)])) out)) (anything-else-30830 (_throw (_+ ''Match fail in hooves/hooves-plist against: '' anything-else-30830))))) for value ")+(JSON.stringify(G30832))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue30825 = actualFun30827.apply(this, arguments);
      while (recurP30828(returnValue30825))        {
        returnValue30825 = actualFun30827.apply(this, returnValue30825.args);
        };
      return returnValue30825;
      });
    // as-options{}
    // pattern - no dynamic value.
    ;
    currentModule29611.rx = (function ()      {
      var returnValue30866 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil30865",
          args:arguments
        };
        });
      var recurP30869 = (function (val30870)        {
        if ((("undefined")===((typeof val30870))))          {
          return false;
          };
        return (val30870.recurSigil===("recurSigil30865"));
        });
      var actualFun30868 = (function ()        {
        return (function (arguments)          {
          var G30872 = undefined;
          var G30873 = Array.prototype.slice.apply(arguments);
          G30872 = (function (arguments)            {
            var matchVal30874 = G30873;
            if ((!((("object")===((typeof matchVal30874))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal30874.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart30875 = Array.prototype.slice.call(matchVal30874, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart30875))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart30875.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var s = matchArraySimplePart30875[0];
            var matchArrayTailPart30876 = Array.prototype.slice.call(matchVal30874, 1);
            var matchTemp30877 = matchArrayTailPart30876[0];
            var previousMatchSucceeded30878 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTemp30877))))                {
                previousMatchSucceeded30878 = false;
                };
              var args = matchTemp30877;
              if (previousMatchSucceeded30878)                {
                break;
                };
              previousMatchSucceeded30878 = true;
              case 1:
              var fResult30879 = ((function (x)                {
                return "g";
                }))(matchTemp30877);
              if ((fResult30879===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceeded30878 = false;
                };
              var args = fResult30879;
              if (previousMatchSucceeded30878)                {
                break;
                };
              previousMatchSucceeded30878 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            return (new (RegExp)(s, args));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30872))))            {
            return G30872;
            };
          G30872 = (function (arguments)            {
            var matchVal30880 = G30873;
            var anythingElse30871 = matchVal30880;
            throw ((("Match fail in hooves/hooves-rx against: ")+(anythingElse30871)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30872))))            {
            return G30872;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: s :- (opt args ''g'')] (_newline-sequence (new RegExp s args))) (anything-else-30871 (_throw (_+ ''Match fail in hooves/hooves-rx against: '' anything-else-30871))))) for value ")+(JSON.stringify(G30873))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue30866 = actualFun30868.apply(this, arguments);
      while (recurP30869(returnValue30866))        {
        returnValue30866 = actualFun30868.apply(this, returnValue30866.args);
        };
      return returnValue30866;
      });
    // set-to!
    // macro - no dynamic value.
    ;
    currentModule29611.prefix = (function (i, ra)      {
      return [i].concat(ra);
      });
    currentModule29611.postfix = (function (i, ra)      {
      return [].concat(ra, [i]);
      });
    currentModule29611.identity = (function (x)      {
      return x;
      });
    var pushdividereturn = (function (item, array)      {
      array.push(item);
      return array;
      });
    var plistToObjectHelper = (function ()      {
      var returnValue30954 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil30953",
          args:arguments
        };
        });
      var recurP30957 = (function (val30958)        {
        if ((("undefined")===((typeof val30958))))          {
          return false;
          };
        return (val30958.recurSigil===("recurSigil30953"));
        });
      var actualFun30956 = (function ()        {
        return (function (arguments)          {
          var G30960 = undefined;
          var G30961 = Array.prototype.slice.apply(arguments);
          G30960 = (function (arguments)            {
            var matchVal30962 = G30961;
            if ((!((("object")===((typeof matchVal30962))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchVal30962.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp30963 = matchVal30962[0];
            var matchTemp30964 = matchVal30962[1];
            var objectAcc = matchTemp30963;
            if ((!((("object")===((typeof matchTemp30964))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchTemp30964.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return objectAcc;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30960))))            {
            return G30960;
            };
          G30960 = (function (arguments)            {
            var matchVal30965 = G30961;
            if ((!((("object")===((typeof matchVal30965))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchVal30965.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp30966 = matchVal30965[0];
            var matchTemp30967 = matchVal30965[1];
            var objectAcc = matchTemp30966;
            if ((!((("object")===((typeof matchTemp30967))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchTemp30967.length>=2))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart30968 = Array.prototype.slice.call(matchTemp30967, 0, 2);
            if ((!((("object")===((typeof matchArraySimplePart30968))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchArraySimplePart30968.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp30969 = matchArraySimplePart30968[0];
            var matchTemp30970 = matchArraySimplePart30968[1];
            var matchFunExpr30975 = (function (G30974)              {
              return (((typeof G30974))===("string"));
              });
            if ((!(matchFunExpr30975(matchTemp30969))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var key = matchTemp30969;
            var value = matchTemp30970;
            var matchArrayTailPart30976 = Array.prototype.slice.call(matchTemp30967, 2);
            var rest = matchArrayTailPart30976;
            objectAcc[key] = value;
            return recur(objectAcc, rest);
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30960))))            {
            return G30960;
            };
          G30960 = (function (arguments)            {
            var matchVal30977 = G30961;
            var anythingElse30959 = matchVal30977;
            throw ((("Match fail in plist->object-helper against: ")+(anythingElse30959)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30960))))            {
            return G30960;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: object-acc [:]] (_newline-sequence object-acc)) ([: object-acc [: (string key) value (tail rest)]] (_newline-sequence (set! [object-acc key] value) (recur object-acc rest))) (anything-else-30959 (_throw (_+ ''Match fail in plist->object-helper against: '' anything-else-30959))))) for value ")+(JSON.stringify(G30961))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue30954 = actualFun30956.apply(this, arguments);
      while (recurP30957(returnValue30954))        {
        returnValue30954 = actualFun30956.apply(this, returnValue30954.args);
        };
      return returnValue30954;
      });
    currentModule29611.plistToObject = (function ()      {
      var returnValue31001 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil31000",
          args:arguments
        };
        });
      var recurP31004 = (function (val31005)        {
        if ((("undefined")===((typeof val31005))))          {
          return false;
          };
        return (val31005.recurSigil===("recurSigil31000"));
        });
      var actualFun31003 = (function ()        {
        return (function (arguments)          {
          var G31007 = undefined;
          var G31008 = Array.prototype.slice.apply(arguments);
          G31007 = (function (arguments)            {
            var matchVal31009 = G31008;
            if ((!((("object")===((typeof matchVal31009))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal31009.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart31010 = Array.prototype.slice.call(matchVal31009, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePart31010))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePart31010.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPart31011 = Array.prototype.slice.call(matchVal31009, 0);
            var kvPairs = matchArrayTailPart31011;
            return plistToObjectHelper({              
              
            }, kvPairs);
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G31007))))            {
            return G31007;
            };
          G31007 = (function (arguments)            {
            var matchVal31012 = G31008;
            var anythingElse31006 = matchVal31012;
            throw ((("Match fail in hooves/hooves-plist->object against: ")+(anythingElse31006)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G31007))))            {
            return G31007;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail kv-pairs)] (_newline-sequence (plist->object-helper ({}) kv-pairs))) (anything-else-31006 (_throw (_+ ''Match fail in hooves/hooves-plist->object against: '' anything-else-31006))))) for value ")+(JSON.stringify(G31008))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue31001 = actualFun31003.apply(this, arguments);
      while (recurP31004(returnValue31001))        {
        returnValue31001 = actualFun31003.apply(this, returnValue31001.args);
        };
      return returnValue31001;
      });
    currentModule29611.filter = (function ()      {
      var returnValue31043 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil31042",
          args:arguments
        };
        });
      var recurP31046 = (function (val31047)        {
        if ((("undefined")===((typeof val31047))))          {
          return false;
          };
        return (val31047.recurSigil===("recurSigil31042"));
        });
      var actualFun31045 = (function ()        {
        return (function (arguments)          {
          var G31049 = undefined;
          var G31050 = Array.prototype.slice.apply(arguments);
          G31049 = (function (arguments)            {
            var matchVal31051 = G31050;
            if ((!((("object")===((typeof matchVal31051))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchVal31051.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp31052 = matchVal31051[0];
            var matchTemp31053 = matchVal31051[1];
            var matchTemp31054 = matchVal31051[2];
            var fun = matchTemp31052;
            if ((!((("object")===((typeof matchTemp31053))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchTemp31053.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var acc = matchTemp31054;
            return acc;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G31049))))            {
            return G31049;
            };
          G31049 = (function (arguments)            {
            var matchVal31055 = G31050;
            if ((!((("object")===((typeof matchVal31055))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchVal31055.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp31056 = matchVal31055[0];
            var matchTemp31057 = matchVal31055[1];
            var matchTemp31058 = matchVal31055[2];
            var fun = matchTemp31056;
            if ((!((("object")===((typeof matchTemp31057))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchTemp31057.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart31059 = Array.prototype.slice.call(matchTemp31057, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart31059))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart31059.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart31059[0];
            var matchArrayTailPart31060 = Array.prototype.slice.call(matchTemp31057, 1);
            var tl = matchArrayTailPart31060;
            var acc = matchTemp31058;
            var r = fun(hd);
            return ((r)?(recur(fun, tl, pushdividereturn(hd, acc))) : (recur(fun, tl, acc)));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G31049))))            {
            return G31049;
            };
          G31049 = (function (arguments)            {
            var matchVal31061 = G31050;
            if ((!((("object")===((typeof matchVal31061))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchVal31061.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var fun = matchVal31061[0];
            var ra = matchVal31061[1];
            return recur(fun, ra, []);
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G31049))))            {
            return G31049;
            };
          G31049 = (function (arguments)            {
            var matchVal31062 = G31050;
            var anythingElse31048 = matchVal31062;
            throw ((("Match fail in hooves/hooves-filter against: ")+(anythingElse31048)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G31049))))            {
            return G31049;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: fun [:] acc] (_newline-sequence acc)) ([: fun [: hd (tail tl)] acc] (_newline-sequence (var r (fun hd)) (if r (recur fun tl (push/return hd acc)) (recur fun tl acc)))) ([: fun ra] (_newline-sequence (recur fun ra [:]))) (anything-else-31048 (_throw (_+ ''Match fail in hooves/hooves-filter against: '' anything-else-31048))))) for value ")+(JSON.stringify(G31050))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue31043 = actualFun31045.apply(this, arguments);
      while (recurP31046(returnValue31043))        {
        returnValue31043 = actualFun31045.apply(this, returnValue31043.args);
        };
      return returnValue31043;
      });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModule29611;
  }))