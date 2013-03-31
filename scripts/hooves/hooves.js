define([], (function ()  {
  var currentModuleminus89561 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus89561 = value;
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
    currentModuleminus89561.definedPredicate = (function (x)      {
      return (!((((typeof x))===("undefined"))));
      });
    currentModuleminus89561.undefinedPredicate = (function (x)      {
      return (((typeof x))===("undefined"));
      });
    currentModuleminus89561.numberPredicate = (function (o)      {
      return (((typeof o))===("number"));
      });
    currentModuleminus89561.stringPredicate = (function (o)      {
      return (((typeof o))===("string"));
      });
    currentModuleminus89561.arrayPredicate = (function (o)      {
      return (o instanceof Array);
      });
    currentModuleminus89561.emptyPredicate = (function (o)      {
      return (0===o.length);
      });
    // collect{}
    // macro - no dynamic value.
    ;
    // @
    // macro - no dynamic value.
    ;
    currentModuleminus89561.TripleEqualminus_ = (function (partial)      {
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
    currentModuleminus89561.Delay = (function (lambdaExpr)      {
      this.lambdaExpr = lambdaExpr;
      return this;
      });
    currentModuleminus89561.Delay.prototype.value = (function ()      {
      return this.lambdaExpr();
      });
    // delay
    // macro - no dynamic value.
    ;
    currentModuleminus89561.undelay = (function (o)      {
      return (function (arguments)        {
        var G89798 = undefined;
        var G89799 = o;
        G89798 = (function (arguments)          {
          var matchValminus89800 = G89799;
          var matchFunExprminus89802 = (function (G89801)            {
            return (G89801 instanceof currentModuleminus89561.Delay);
            });
          if ((!(matchFunExprminus89802(matchValminus89800))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var delayObject = matchValminus89800;
          return delayObject.value();
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G89798))))          {
          return G89798;
          };
        throw ((("match-fail at ((match o ((instance Delay delay-object) (delay-object\.value)))) for value ")+(JSON.stringify(G89799))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    // define-to
    // macro - no dynamic value.
    ;
    // for*
    // macro - no dynamic value.
    ;
    currentModuleminus89561.range = (function ()      {
      var returnValueminus89845 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus89844",
          args:arguments
        };
        });
      var recurP89848 = (function (valminus89849)        {
        if ((("undefined")===((typeof valminus89849))))          {
          return false;
          };
        return (valminus89849.recurSigil===("recurSigilminus89844"));
        });
      var actualFunminus89847 = (function ()        {
        return (function (arguments)          {
          var G89851 = undefined;
          var G89852 = Array.prototype.slice.apply(arguments);
          G89851 = (function (arguments)            {
            var matchValminus89853 = G89852;
            if ((!((("object")===((typeof matchValminus89853))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((4===matchValminus89853.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchValminus89853[0];
            var step = matchValminus89853[1];
            var stop = matchValminus89853[2];
            var transform = matchValminus89853[3];
            var out = [];
            for (var i = start;(i<stop);i = (i+step))              {
              out.push(transform(i));
              };
            return out;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G89851))))            {
            return G89851;
            };
          G89851 = (function (arguments)            {
            var matchValminus89854 = G89852;
            if ((!((("object")===((typeof matchValminus89854))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchValminus89854.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchValminus89854[0];
            var step = matchValminus89854[1];
            var stop = matchValminus89854[2];
            return recur(start, step, stop, (function (v)              {
              return v;
              }));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G89851))))            {
            return G89851;
            };
          G89851 = (function (arguments)            {
            var matchValminus89855 = G89852;
            if ((!((("object")===((typeof matchValminus89855))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchValminus89855.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchValminus89855[0];
            var stop = matchValminus89855[1];
            return recur(start, 1, stop, (function (v)              {
              return v;
              }));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G89851))))            {
            return G89851;
            };
          G89851 = (function (arguments)            {
            var matchValminus89856 = G89852;
            if ((!((("object")===((typeof matchValminus89856))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchValminus89856.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var stop = matchValminus89856[0];
            return recur(0, 1, stop, (function (v)              {
              return v;
              }));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G89851))))            {
            return G89851;
            };
          G89851 = (function (arguments)            {
            var matchValminus89857 = G89852;
            var anythingElseminus89850 = matchValminus89857;
            throw ((("Match fail in hooves/hooves-range against: ")+anythingElseminus89850));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G89851))))            {
            return G89851;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: start step stop transform] (var out [:]) (for ((var i start) (_< i stop) (set! i (_+ i step))) (out\.push (transform i))) out) ([: start step stop] (recur start step stop (lambda (v) v))) ([: start stop] (recur start 1 stop (lambda (v) v))) ([: stop] (recur 0 1 stop (lambda (v) v))) (anything-else-89850 (_throw (_+ ''Match fail in hooves/hooves-range against: '' anything-else-89850))))) for value ")+(JSON.stringify(G89852))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus89845 = actualFunminus89847.apply(this, arguments);
      while (recurP89848(returnValueminus89845))        {
        returnValueminus89845 = actualFunminus89847.apply(this, returnValueminus89845.args);
        };
      return returnValueminus89845;
      });
    // with-slots
    // macro - no dynamic value.
    ;
    currentModuleminus89561.plus = (function ()      {
      var returnValueminus89887 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus89886",
          args:arguments
        };
        });
      var recurP89890 = (function (valminus89891)        {
        if ((("undefined")===((typeof valminus89891))))          {
          return false;
          };
        return (valminus89891.recurSigil===("recurSigilminus89886"));
        });
      var actualFunminus89889 = (function ()        {
        return (function (arguments)          {
          var G89893 = undefined;
          var G89894 = Array.prototype.slice.apply(arguments);
          G89893 = (function (arguments)            {
            var matchValminus89895 = G89894;
            if ((!((("object")===((typeof matchValminus89895))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus89895.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus89896 = Array.prototype.slice.call(matchValminus89895, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus89896))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus89896.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus89896[0];
            var matchArrayTailPartminus89897 = Array.prototype.slice.call(matchValminus89895, 1);
            var tl = matchArrayTailPartminus89897;
            var result = hd;
            for (i in (tl))              {
              result = (result+(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G89893))))            {
            return G89893;
            };
          G89893 = (function (arguments)            {
            var matchValminus89898 = G89894;
            var anythingElseminus89892 = matchValminus89898;
            throw ((("Match fail in hooves/hooves-+ against: ")+anythingElseminus89892));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G89893))))            {
            return G89893;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result) (anything-else-89892 (_throw (_+ ''Match fail in hooves/hooves-+ against: '' anything-else-89892))))) for value ")+(JSON.stringify(G89894))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus89887 = actualFunminus89889.apply(this, arguments);
      while (recurP89890(returnValueminus89887))        {
        returnValueminus89887 = actualFunminus89889.apply(this, returnValueminus89887.args);
        };
      return returnValueminus89887;
      });
    currentModuleminus89561.minus = (function ()      {
      var returnValueminus89922 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus89921",
          args:arguments
        };
        });
      var recurP89925 = (function (valminus89926)        {
        if ((("undefined")===((typeof valminus89926))))          {
          return false;
          };
        return (valminus89926.recurSigil===("recurSigilminus89921"));
        });
      var actualFunminus89924 = (function ()        {
        return (function (arguments)          {
          var G89928 = undefined;
          var G89929 = Array.prototype.slice.apply(arguments);
          G89928 = (function (arguments)            {
            var matchValminus89930 = G89929;
            if ((!((("object")===((typeof matchValminus89930))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus89930.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus89931 = Array.prototype.slice.call(matchValminus89930, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus89931))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus89931.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus89931[0];
            var matchArrayTailPartminus89932 = Array.prototype.slice.call(matchValminus89930, 1);
            var tl = matchArrayTailPartminus89932;
            return (((tl.length>0))?((hd-(apply(currentModuleminus89561.plus, tl)))) : ((-(hd))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G89928))))            {
            return G89928;
            };
          G89928 = (function (arguments)            {
            var matchValminus89933 = G89929;
            var anythingElseminus89927 = matchValminus89933;
            throw ((("Match fail in hooves/hooves-- against: ")+anythingElseminus89927));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G89928))))            {
            return G89928;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (if (_> tl\.length 0) (_- hd (apply + tl)) (_- hd))) (anything-else-89927 (_throw (_+ ''Match fail in hooves/hooves-- against: '' anything-else-89927))))) for value ")+(JSON.stringify(G89929))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus89922 = actualFunminus89924.apply(this, arguments);
      while (recurP89925(returnValueminus89922))        {
        returnValueminus89922 = actualFunminus89924.apply(this, returnValueminus89922.args);
        };
      return returnValueminus89922;
      });
    currentModuleminus89561.times = (function ()      {
      var returnValueminus89957 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus89956",
          args:arguments
        };
        });
      var recurP89960 = (function (valminus89961)        {
        if ((("undefined")===((typeof valminus89961))))          {
          return false;
          };
        return (valminus89961.recurSigil===("recurSigilminus89956"));
        });
      var actualFunminus89959 = (function ()        {
        return (function (arguments)          {
          var G89963 = undefined;
          var G89964 = Array.prototype.slice.apply(arguments);
          G89963 = (function (arguments)            {
            var matchValminus89965 = G89964;
            if ((!((("object")===((typeof matchValminus89965))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus89965.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus89966 = Array.prototype.slice.call(matchValminus89965, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus89966))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus89966.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus89966[0];
            var matchArrayTailPartminus89967 = Array.prototype.slice.call(matchValminus89965, 1);
            var tl = matchArrayTailPartminus89967;
            var result = hd;
            for (i in (tl))              {
              result = (result*(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G89963))))            {
            return G89963;
            };
          G89963 = (function (arguments)            {
            var matchValminus89968 = G89964;
            var anythingElseminus89962 = matchValminus89968;
            throw ((("Match fail in hooves/hooves-* against: ")+anythingElseminus89962));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G89963))))            {
            return G89963;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result) (anything-else-89962 (_throw (_+ ''Match fail in hooves/hooves-* against: '' anything-else-89962))))) for value ")+(JSON.stringify(G89964))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus89957 = actualFunminus89959.apply(this, arguments);
      while (recurP89960(returnValueminus89957))        {
        returnValueminus89957 = actualFunminus89959.apply(this, returnValueminus89957.args);
        };
      return returnValueminus89957;
      });
    currentModuleminus89561.divide = (function ()      {
      var returnValueminus89992 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus89991",
          args:arguments
        };
        });
      var recurP89995 = (function (valminus89996)        {
        if ((("undefined")===((typeof valminus89996))))          {
          return false;
          };
        return (valminus89996.recurSigil===("recurSigilminus89991"));
        });
      var actualFunminus89994 = (function ()        {
        return (function (arguments)          {
          var G89998 = undefined;
          var G89999 = Array.prototype.slice.apply(arguments);
          G89998 = (function (arguments)            {
            var matchValminus90000 = G89999;
            if ((!((("object")===((typeof matchValminus90000))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus90000.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus90001 = Array.prototype.slice.call(matchValminus90000, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus90001))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus90001.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus90001[0];
            var matchArrayTailPartminus90002 = Array.prototype.slice.call(matchValminus90000, 1);
            var tl = matchArrayTailPartminus90002;
            return (hd/(apply(currentModuleminus89561.times, tl)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G89998))))            {
            return G89998;
            };
          G89998 = (function (arguments)            {
            var matchValminus90003 = G89999;
            var anythingElseminus89997 = matchValminus90003;
            throw ((("Match fail in hooves/hooves-/ against: ")+anythingElseminus89997));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G89998))))            {
            return G89998;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_/ hd (apply * tl))) (anything-else-89997 (_throw (_+ ''Match fail in hooves/hooves-/ against: '' anything-else-89997))))) for value ")+(JSON.stringify(G89999))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus89992 = actualFunminus89994.apply(this, arguments);
      while (recurP89995(returnValueminus89992))        {
        returnValueminus89992 = actualFunminus89994.apply(this, returnValueminus89992.args);
        };
      return returnValueminus89992;
      });
    // define-external-binop
    // macro - no dynamic value.
    ;
    // define-external-binops
    // macro - no dynamic value.
    ;
    currentModuleminus89561.lessThan = (function (G90013, G90014)      {
      return (G90013<G90014);
      });
    currentModuleminus89561.lessThanequal = (function (G90040, G90041)      {
      return (G90040<=G90041);
      });
    currentModuleminus89561.greaterThan = (function (G90067, G90068)      {
      return (G90067>G90068);
      });
    currentModuleminus89561.greaterThanequal = (function (G90094, G90095)      {
      return (G90094>=G90095);
      });
    currentModuleminus89561.ampersand = (function (G90121, G90122)      {
      return (G90121&G90122);
      });
    currentModuleminus89561.pipe = (function (G90148, G90149)      {
      return (G90148|G90149);
      });
    currentModuleminus89561.equalequal = (function (G90175, G90176)      {
      return (G90175==G90176);
      });
    currentModuleminus89561.TripleEqualminus = (function (G90202, G90203)      {
      return (G90202===G90203);
      });
    currentModuleminus89561.modsign = (function (G90229, G90230)      {
      return (G90229%G90230);
      });
    currentModuleminus89561.caret = (function (G90256, G90257)      {
      return (G90256^G90257);
      });
    currentModuleminus89561.lessThanlessThan = (function (G90283, G90284)      {
      return (G90283<<G90284);
      });
    currentModuleminus89561.greaterThangreaterThan = (function (G90310, G90311)      {
      return (G90310>>G90311);
      });
    currentModuleminus89561.greaterThangreaterThangreaterThan = (function (G90337, G90338)      {
      return (G90337>>>G90338);
      });
    ;
    // &&
    // macro - no dynamic value.
    ;
    // ||
    // macro - no dynamic value.
    ;
    currentModuleminus89561.bang = (function (o)      {
      return (!(o));
      });
    // incr
    // macro - no dynamic value.
    ;
    return // decr
    // macro - no dynamic value.
    ;
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus89561;
  }))