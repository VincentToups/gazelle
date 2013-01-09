define(["hooves/lisp-idioms"], (function (moduleminus295baa4e1e)  {
  var currentModuleminus43895 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus43895 = value;
    });
  ((function ()    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    // ("hooves/lisp-idioms" (:as apply funcall))
    ;
    currentModuleminus43895.plus = (function ()      {
      var returnValueminus44080 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus44079",
          args:arguments
        };
        });
      var recurP44083 = (function (valminus44084)        {
        if ((("undefined")===((typeof valminus44084))))          {
          return false;
          };
        return (valminus44084.recurSigil===("recurSigilminus44079"));
        });
      var actualFunminus44082 = (function ()        {
        return (function (arguments)          {
          var G44086 = undefined;
          var G44087 = Array.prototype.slice.apply(arguments);
          G44086 = (function (arguments)            {
            var matchValminus44088 = G44087;
            if ((!((matchValminus44088.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus44089 = Array.prototype.slice.call(matchValminus44088, 0, 1);
            if ((!((1===matchArraySimplePartminus44089.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus44089[0];
            var matchArrayTailPartminus44090 = Array.prototype.slice.call(matchValminus44088, 1);
            var tl = matchArrayTailPartminus44090;
            var result = hd;
            for (i in (tl))              {
              result = (result+(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G44086))))            {
            return G44086;
            };
          G44086 = (function (arguments)            {
            var matchValminus44091 = G44087;
            var anythingElseminus44085 = matchValminus44091;
            throw ((("Match fail in hooves/operator-functions-+ against: ")+anythingElseminus44085));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G44086))))            {
            return G44086;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result) (anything-else-44085 (_throw (_+ ''Match fail in hooves/operator-functions-+ against: '' anything-else-44085))))) for value ")+(JSON.stringify(G44087))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus44080 = actualFunminus44082.apply(this, arguments);
      while (recurP44083(returnValueminus44080))        {
        returnValueminus44080 = actualFunminus44082.apply(this, returnValueminus44080.args);
        };
      return returnValueminus44080;
      });
    currentModuleminus43895.minus = (function ()      {
      var returnValueminus44115 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus44114",
          args:arguments
        };
        });
      var recurP44118 = (function (valminus44119)        {
        if ((("undefined")===((typeof valminus44119))))          {
          return false;
          };
        return (valminus44119.recurSigil===("recurSigilminus44114"));
        });
      var actualFunminus44117 = (function ()        {
        return (function (arguments)          {
          var G44121 = undefined;
          var G44122 = Array.prototype.slice.apply(arguments);
          G44121 = (function (arguments)            {
            var matchValminus44123 = G44122;
            if ((!((matchValminus44123.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus44124 = Array.prototype.slice.call(matchValminus44123, 0, 1);
            if ((!((1===matchArraySimplePartminus44124.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus44124[0];
            var matchArrayTailPartminus44125 = Array.prototype.slice.call(matchValminus44123, 1);
            var tl = matchArrayTailPartminus44125;
            return (hd-(moduleminus295baa4e1e.apply(currentModuleminus43895.plus, tl)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G44121))))            {
            return G44121;
            };
          G44121 = (function (arguments)            {
            var matchValminus44126 = G44122;
            var anythingElseminus44120 = matchValminus44126;
            throw ((("Match fail in hooves/operator-functions-- against: ")+anythingElseminus44120));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G44121))))            {
            return G44121;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_- hd (apply + tl))) (anything-else-44120 (_throw (_+ ''Match fail in hooves/operator-functions-- against: '' anything-else-44120))))) for value ")+(JSON.stringify(G44122))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus44115 = actualFunminus44117.apply(this, arguments);
      while (recurP44118(returnValueminus44115))        {
        returnValueminus44115 = actualFunminus44117.apply(this, returnValueminus44115.args);
        };
      return returnValueminus44115;
      });
    currentModuleminus43895.times = (function ()      {
      var returnValueminus44150 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus44149",
          args:arguments
        };
        });
      var recurP44153 = (function (valminus44154)        {
        if ((("undefined")===((typeof valminus44154))))          {
          return false;
          };
        return (valminus44154.recurSigil===("recurSigilminus44149"));
        });
      var actualFunminus44152 = (function ()        {
        return (function (arguments)          {
          var G44156 = undefined;
          var G44157 = Array.prototype.slice.apply(arguments);
          G44156 = (function (arguments)            {
            var matchValminus44158 = G44157;
            if ((!((matchValminus44158.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus44159 = Array.prototype.slice.call(matchValminus44158, 0, 1);
            if ((!((1===matchArraySimplePartminus44159.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus44159[0];
            var matchArrayTailPartminus44160 = Array.prototype.slice.call(matchValminus44158, 1);
            var tl = matchArrayTailPartminus44160;
            var result = hd;
            for (i in (tl))              {
              result = (result*(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G44156))))            {
            return G44156;
            };
          G44156 = (function (arguments)            {
            var matchValminus44161 = G44157;
            var anythingElseminus44155 = matchValminus44161;
            throw ((("Match fail in hooves/operator-functions-* against: ")+anythingElseminus44155));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G44156))))            {
            return G44156;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result) (anything-else-44155 (_throw (_+ ''Match fail in hooves/operator-functions-* against: '' anything-else-44155))))) for value ")+(JSON.stringify(G44157))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus44150 = actualFunminus44152.apply(this, arguments);
      while (recurP44153(returnValueminus44150))        {
        returnValueminus44150 = actualFunminus44152.apply(this, returnValueminus44150.args);
        };
      return returnValueminus44150;
      });
    currentModuleminus43895.divide = (function ()      {
      var returnValueminus44185 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus44184",
          args:arguments
        };
        });
      var recurP44188 = (function (valminus44189)        {
        if ((("undefined")===((typeof valminus44189))))          {
          return false;
          };
        return (valminus44189.recurSigil===("recurSigilminus44184"));
        });
      var actualFunminus44187 = (function ()        {
        return (function (arguments)          {
          var G44191 = undefined;
          var G44192 = Array.prototype.slice.apply(arguments);
          G44191 = (function (arguments)            {
            var matchValminus44193 = G44192;
            if ((!((matchValminus44193.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus44194 = Array.prototype.slice.call(matchValminus44193, 0, 1);
            if ((!((1===matchArraySimplePartminus44194.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus44194[0];
            var matchArrayTailPartminus44195 = Array.prototype.slice.call(matchValminus44193, 1);
            var tl = matchArrayTailPartminus44195;
            return (hd/(moduleminus295baa4e1e.apply(currentModuleminus43895.times, tl)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G44191))))            {
            return G44191;
            };
          G44191 = (function (arguments)            {
            var matchValminus44196 = G44192;
            var anythingElseminus44190 = matchValminus44196;
            throw ((("Match fail in hooves/operator-functions-/ against: ")+anythingElseminus44190));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G44191))))            {
            return G44191;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_/ hd (apply * tl))) (anything-else-44190 (_throw (_+ ''Match fail in hooves/operator-functions-/ against: '' anything-else-44190))))) for value ")+(JSON.stringify(G44192))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus44185 = actualFunminus44187.apply(this, arguments);
      while (recurP44188(returnValueminus44185))        {
        returnValueminus44185 = actualFunminus44187.apply(this, returnValueminus44185.args);
        };
      return returnValueminus44185;
      });
    var defineExternalBinop = "macro - no dynamic value.";
    var defineExternalBinops = "macro - no dynamic value.";
    currentModuleminus43895.lessThan = (function (G44206, G44207)      {
      return (G44206<G44207);
      });
    currentModuleminus43895.lessThanequal = (function (G44233, G44234)      {
      return (G44233<=G44234);
      });
    currentModuleminus43895.greaterThan = (function (G44260, G44261)      {
      return (G44260>G44261);
      });
    currentModuleminus43895.greaterThanequal = (function (G44287, G44288)      {
      return (G44287>=G44288);
      });
    currentModuleminus43895.ampersand = (function (G44314, G44315)      {
      return (G44314&G44315);
      });
    currentModuleminus43895.pipe = (function (G44341, G44342)      {
      return (G44341|G44342);
      });
    currentModuleminus43895.equalequal = (function (G44368, G44369)      {
      return (G44368==G44369);
      });
    currentModuleminus43895.TripleEqualminus = (function (G44395, G44396)      {
      return (G44395===G44396);
      });
    currentModuleminus43895.modsign = (function (G44422, G44423)      {
      return (G44422%G44423);
      });
    currentModuleminus43895.caret = (function (G44449, G44450)      {
      return (G44449^G44450);
      });
    currentModuleminus43895.lessThanlessThan = (function (G44476, G44477)      {
      return (G44476<<G44477);
      });
    currentModuleminus43895.greaterThangreaterThan = (function (G44503, G44504)      {
      return (G44503>>G44504);
      });
    currentModuleminus43895.greaterThangreaterThangreaterThan = (function (G44530, G44531)      {
      return (G44530>>>G44531);
      });
    ;
    var ampersandampersand = "macro - no dynamic value.";
    var pipepipe = "macro - no dynamic value.";
    currentModuleminus43895.bang = (function (o)      {
      return (!(o));
      });
    var incr = "macro - no dynamic value.";
    var decr = "macro - no dynamic value.";
    }))();
  return currentModuleminus43895;
  }))