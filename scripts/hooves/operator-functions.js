define(["hooves/lisp-idioms"], (function (moduleminus295baa4e1e)  {
  var currentModuleminus15261 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus15261 = value;
    });
  (function (arguments)    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    // ("hooves/lisp-idioms" (:as apply funcall))
    ;
    currentModuleminus15261.plus = (function ()      {
      var returnValueminus15468 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus15467",
          args:arguments
        };
        });
      var recurP15471 = (function (valminus15472)        {
        if ((("undefined")===((typeof valminus15472))))          {
          return false;
          };
        return (valminus15472.recurSigil===("recurSigilminus15467"));
        });
      var actualFunminus15470 = (function ()        {
        return (function (arguments)          {
          var G15474 = undefined;
          var G15475 = Array.prototype.slice.apply(arguments);
          G15474 = (function (arguments)            {
            var matchValminus15476 = G15475;
            if ((!((("object")===((typeof matchValminus15476))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus15476.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus15477 = Array.prototype.slice.call(matchValminus15476, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus15477))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus15477.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus15477[0];
            var matchArrayTailPartminus15478 = Array.prototype.slice.call(matchValminus15476, 1);
            var tl = matchArrayTailPartminus15478;
            var result = hd;
            for (i in (tl))              {
              result = (result+(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G15474))))            {
            return G15474;
            };
          G15474 = (function (arguments)            {
            var matchValminus15479 = G15475;
            var anythingElseminus15473 = matchValminus15479;
            throw ((("Match fail in hooves/operator-functions-+ against: ")+anythingElseminus15473));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G15474))))            {
            return G15474;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result) (anything-else-15473 (_throw (_+ ''Match fail in hooves/operator-functions-+ against: '' anything-else-15473))))) for value ")+(JSON.stringify(G15475))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus15468 = actualFunminus15470.apply(this, arguments);
      while (recurP15471(returnValueminus15468))        {
        returnValueminus15468 = actualFunminus15470.apply(this, returnValueminus15468.args);
        };
      return returnValueminus15468;
      });
    currentModuleminus15261.minus = (function ()      {
      var returnValueminus15503 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus15502",
          args:arguments
        };
        });
      var recurP15506 = (function (valminus15507)        {
        if ((("undefined")===((typeof valminus15507))))          {
          return false;
          };
        return (valminus15507.recurSigil===("recurSigilminus15502"));
        });
      var actualFunminus15505 = (function ()        {
        return (function (arguments)          {
          var G15509 = undefined;
          var G15510 = Array.prototype.slice.apply(arguments);
          G15509 = (function (arguments)            {
            var matchValminus15511 = G15510;
            if ((!((("object")===((typeof matchValminus15511))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus15511.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus15512 = Array.prototype.slice.call(matchValminus15511, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus15512))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus15512.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus15512[0];
            var matchArrayTailPartminus15513 = Array.prototype.slice.call(matchValminus15511, 1);
            var tl = matchArrayTailPartminus15513;
            return (((tl.length>0))?((hd-(moduleminus295baa4e1e.apply(currentModuleminus15261.plus, tl)))) : ((-(hd))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G15509))))            {
            return G15509;
            };
          G15509 = (function (arguments)            {
            var matchValminus15514 = G15510;
            var anythingElseminus15508 = matchValminus15514;
            throw ((("Match fail in hooves/operator-functions-- against: ")+anythingElseminus15508));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G15509))))            {
            return G15509;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (if (_> tl\.length 0) (_- hd (apply + tl)) (_- hd))) (anything-else-15508 (_throw (_+ ''Match fail in hooves/operator-functions-- against: '' anything-else-15508))))) for value ")+(JSON.stringify(G15510))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus15503 = actualFunminus15505.apply(this, arguments);
      while (recurP15506(returnValueminus15503))        {
        returnValueminus15503 = actualFunminus15505.apply(this, returnValueminus15503.args);
        };
      return returnValueminus15503;
      });
    currentModuleminus15261.times = (function ()      {
      var returnValueminus15538 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus15537",
          args:arguments
        };
        });
      var recurP15541 = (function (valminus15542)        {
        if ((("undefined")===((typeof valminus15542))))          {
          return false;
          };
        return (valminus15542.recurSigil===("recurSigilminus15537"));
        });
      var actualFunminus15540 = (function ()        {
        return (function (arguments)          {
          var G15544 = undefined;
          var G15545 = Array.prototype.slice.apply(arguments);
          G15544 = (function (arguments)            {
            var matchValminus15546 = G15545;
            if ((!((("object")===((typeof matchValminus15546))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus15546.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus15547 = Array.prototype.slice.call(matchValminus15546, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus15547))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus15547.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus15547[0];
            var matchArrayTailPartminus15548 = Array.prototype.slice.call(matchValminus15546, 1);
            var tl = matchArrayTailPartminus15548;
            var result = hd;
            for (i in (tl))              {
              result = (result*(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G15544))))            {
            return G15544;
            };
          G15544 = (function (arguments)            {
            var matchValminus15549 = G15545;
            var anythingElseminus15543 = matchValminus15549;
            throw ((("Match fail in hooves/operator-functions-* against: ")+anythingElseminus15543));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G15544))))            {
            return G15544;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result) (anything-else-15543 (_throw (_+ ''Match fail in hooves/operator-functions-* against: '' anything-else-15543))))) for value ")+(JSON.stringify(G15545))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus15538 = actualFunminus15540.apply(this, arguments);
      while (recurP15541(returnValueminus15538))        {
        returnValueminus15538 = actualFunminus15540.apply(this, returnValueminus15538.args);
        };
      return returnValueminus15538;
      });
    currentModuleminus15261.divide = (function ()      {
      var returnValueminus15573 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus15572",
          args:arguments
        };
        });
      var recurP15576 = (function (valminus15577)        {
        if ((("undefined")===((typeof valminus15577))))          {
          return false;
          };
        return (valminus15577.recurSigil===("recurSigilminus15572"));
        });
      var actualFunminus15575 = (function ()        {
        return (function (arguments)          {
          var G15579 = undefined;
          var G15580 = Array.prototype.slice.apply(arguments);
          G15579 = (function (arguments)            {
            var matchValminus15581 = G15580;
            if ((!((("object")===((typeof matchValminus15581))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus15581.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus15582 = Array.prototype.slice.call(matchValminus15581, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus15582))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus15582.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus15582[0];
            var matchArrayTailPartminus15583 = Array.prototype.slice.call(matchValminus15581, 1);
            var tl = matchArrayTailPartminus15583;
            return (hd/(moduleminus295baa4e1e.apply(currentModuleminus15261.times, tl)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G15579))))            {
            return G15579;
            };
          G15579 = (function (arguments)            {
            var matchValminus15584 = G15580;
            var anythingElseminus15578 = matchValminus15584;
            throw ((("Match fail in hooves/operator-functions-/ against: ")+anythingElseminus15578));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G15579))))            {
            return G15579;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_/ hd (apply * tl))) (anything-else-15578 (_throw (_+ ''Match fail in hooves/operator-functions-/ against: '' anything-else-15578))))) for value ")+(JSON.stringify(G15580))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus15573 = actualFunminus15575.apply(this, arguments);
      while (recurP15576(returnValueminus15573))        {
        returnValueminus15573 = actualFunminus15575.apply(this, returnValueminus15573.args);
        };
      return returnValueminus15573;
      });
    var defineExternalBinop = "macro - no dynamic value.";
    var defineExternalBinops = "macro - no dynamic value.";
    currentModuleminus15261.lessThan = (function (G15594, G15595)      {
      return (G15594<G15595);
      });
    currentModuleminus15261.lessThanequal = (function (G15621, G15622)      {
      return (G15621<=G15622);
      });
    currentModuleminus15261.greaterThan = (function (G15648, G15649)      {
      return (G15648>G15649);
      });
    currentModuleminus15261.greaterThanequal = (function (G15675, G15676)      {
      return (G15675>=G15676);
      });
    currentModuleminus15261.ampersand = (function (G15702, G15703)      {
      return (G15702&G15703);
      });
    currentModuleminus15261.pipe = (function (G15729, G15730)      {
      return (G15729|G15730);
      });
    currentModuleminus15261.equalequal = (function (G15756, G15757)      {
      return (G15756==G15757);
      });
    currentModuleminus15261.TripleEqualminus = (function (G15783, G15784)      {
      return (G15783===G15784);
      });
    currentModuleminus15261.modsign = (function (G15810, G15811)      {
      return (G15810%G15811);
      });
    currentModuleminus15261.caret = (function (G15837, G15838)      {
      return (G15837^G15838);
      });
    currentModuleminus15261.lessThanlessThan = (function (G15864, G15865)      {
      return (G15864<<G15865);
      });
    currentModuleminus15261.greaterThangreaterThan = (function (G15891, G15892)      {
      return (G15891>>G15892);
      });
    currentModuleminus15261.greaterThangreaterThangreaterThan = (function (G15918, G15919)      {
      return (G15918>>>G15919);
      });
    ;
    var ampersandampersand = "macro - no dynamic value.";
    var pipepipe = "macro - no dynamic value.";
    currentModuleminus15261.bang = (function (o)      {
      return (!(o));
      });
    var incr = "macro - no dynamic value.";
    var decr = "macro - no dynamic value.";
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus15261;
  }))