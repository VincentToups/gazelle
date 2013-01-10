define(["hooves/lisp-idioms"], (function (moduleminus295baa4e1e)  {
  var currentModuleminus99273 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus99273 = value;
    });
  ((function ()    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    // ("hooves/lisp-idioms" (:as apply funcall))
    ;
    currentModuleminus99273.plus = (function ()      {
      var returnValueminus99458 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus99457",
          args:arguments
        };
        });
      var recurP99461 = (function (valminus99462)        {
        if ((("undefined")===((typeof valminus99462))))          {
          return false;
          };
        return (valminus99462.recurSigil===("recurSigilminus99457"));
        });
      var actualFunminus99460 = (function ()        {
        return (function (arguments)          {
          var G99464 = undefined;
          var G99465 = Array.prototype.slice.apply(arguments);
          G99464 = (function (arguments)            {
            var matchValminus99466 = G99465;
            if ((!((matchValminus99466.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus99467 = Array.prototype.slice.call(matchValminus99466, 0, 1);
            if ((!((1===matchArraySimplePartminus99467.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus99467[0];
            var matchArrayTailPartminus99468 = Array.prototype.slice.call(matchValminus99466, 1);
            var tl = matchArrayTailPartminus99468;
            var result = hd;
            for (i in (tl))              {
              result = (result+(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G99464))))            {
            return G99464;
            };
          G99464 = (function (arguments)            {
            var matchValminus99469 = G99465;
            var anythingElseminus99463 = matchValminus99469;
            throw ((("Match fail in hooves/operator-functions-+ against: ")+anythingElseminus99463));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G99464))))            {
            return G99464;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result) (anything-else-99463 (_throw (_+ ''Match fail in hooves/operator-functions-+ against: '' anything-else-99463))))) for value ")+(JSON.stringify(G99465))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus99458 = actualFunminus99460.apply(this, arguments);
      while (recurP99461(returnValueminus99458))        {
        returnValueminus99458 = actualFunminus99460.apply(this, returnValueminus99458.args);
        };
      return returnValueminus99458;
      });
    currentModuleminus99273.minus = (function ()      {
      var returnValueminus99493 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus99492",
          args:arguments
        };
        });
      var recurP99496 = (function (valminus99497)        {
        if ((("undefined")===((typeof valminus99497))))          {
          return false;
          };
        return (valminus99497.recurSigil===("recurSigilminus99492"));
        });
      var actualFunminus99495 = (function ()        {
        return (function (arguments)          {
          var G99499 = undefined;
          var G99500 = Array.prototype.slice.apply(arguments);
          G99499 = (function (arguments)            {
            var matchValminus99501 = G99500;
            if ((!((matchValminus99501.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus99502 = Array.prototype.slice.call(matchValminus99501, 0, 1);
            if ((!((1===matchArraySimplePartminus99502.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus99502[0];
            var matchArrayTailPartminus99503 = Array.prototype.slice.call(matchValminus99501, 1);
            var tl = matchArrayTailPartminus99503;
            return (hd-(moduleminus295baa4e1e.apply(currentModuleminus99273.plus, tl)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G99499))))            {
            return G99499;
            };
          G99499 = (function (arguments)            {
            var matchValminus99504 = G99500;
            var anythingElseminus99498 = matchValminus99504;
            throw ((("Match fail in hooves/operator-functions-- against: ")+anythingElseminus99498));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G99499))))            {
            return G99499;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_- hd (apply + tl))) (anything-else-99498 (_throw (_+ ''Match fail in hooves/operator-functions-- against: '' anything-else-99498))))) for value ")+(JSON.stringify(G99500))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus99493 = actualFunminus99495.apply(this, arguments);
      while (recurP99496(returnValueminus99493))        {
        returnValueminus99493 = actualFunminus99495.apply(this, returnValueminus99493.args);
        };
      return returnValueminus99493;
      });
    currentModuleminus99273.times = (function ()      {
      var returnValueminus99528 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus99527",
          args:arguments
        };
        });
      var recurP99531 = (function (valminus99532)        {
        if ((("undefined")===((typeof valminus99532))))          {
          return false;
          };
        return (valminus99532.recurSigil===("recurSigilminus99527"));
        });
      var actualFunminus99530 = (function ()        {
        return (function (arguments)          {
          var G99534 = undefined;
          var G99535 = Array.prototype.slice.apply(arguments);
          G99534 = (function (arguments)            {
            var matchValminus99536 = G99535;
            if ((!((matchValminus99536.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus99537 = Array.prototype.slice.call(matchValminus99536, 0, 1);
            if ((!((1===matchArraySimplePartminus99537.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus99537[0];
            var matchArrayTailPartminus99538 = Array.prototype.slice.call(matchValminus99536, 1);
            var tl = matchArrayTailPartminus99538;
            var result = hd;
            for (i in (tl))              {
              result = (result*(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G99534))))            {
            return G99534;
            };
          G99534 = (function (arguments)            {
            var matchValminus99539 = G99535;
            var anythingElseminus99533 = matchValminus99539;
            throw ((("Match fail in hooves/operator-functions-* against: ")+anythingElseminus99533));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G99534))))            {
            return G99534;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result) (anything-else-99533 (_throw (_+ ''Match fail in hooves/operator-functions-* against: '' anything-else-99533))))) for value ")+(JSON.stringify(G99535))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus99528 = actualFunminus99530.apply(this, arguments);
      while (recurP99531(returnValueminus99528))        {
        returnValueminus99528 = actualFunminus99530.apply(this, returnValueminus99528.args);
        };
      return returnValueminus99528;
      });
    currentModuleminus99273.divide = (function ()      {
      var returnValueminus99563 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus99562",
          args:arguments
        };
        });
      var recurP99566 = (function (valminus99567)        {
        if ((("undefined")===((typeof valminus99567))))          {
          return false;
          };
        return (valminus99567.recurSigil===("recurSigilminus99562"));
        });
      var actualFunminus99565 = (function ()        {
        return (function (arguments)          {
          var G99569 = undefined;
          var G99570 = Array.prototype.slice.apply(arguments);
          G99569 = (function (arguments)            {
            var matchValminus99571 = G99570;
            if ((!((matchValminus99571.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus99572 = Array.prototype.slice.call(matchValminus99571, 0, 1);
            if ((!((1===matchArraySimplePartminus99572.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus99572[0];
            var matchArrayTailPartminus99573 = Array.prototype.slice.call(matchValminus99571, 1);
            var tl = matchArrayTailPartminus99573;
            return (hd/(moduleminus295baa4e1e.apply(currentModuleminus99273.times, tl)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G99569))))            {
            return G99569;
            };
          G99569 = (function (arguments)            {
            var matchValminus99574 = G99570;
            var anythingElseminus99568 = matchValminus99574;
            throw ((("Match fail in hooves/operator-functions-/ against: ")+anythingElseminus99568));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G99569))))            {
            return G99569;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_/ hd (apply * tl))) (anything-else-99568 (_throw (_+ ''Match fail in hooves/operator-functions-/ against: '' anything-else-99568))))) for value ")+(JSON.stringify(G99570))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus99563 = actualFunminus99565.apply(this, arguments);
      while (recurP99566(returnValueminus99563))        {
        returnValueminus99563 = actualFunminus99565.apply(this, returnValueminus99563.args);
        };
      return returnValueminus99563;
      });
    var defineExternalBinop = "macro - no dynamic value.";
    var defineExternalBinops = "macro - no dynamic value.";
    currentModuleminus99273.lessThan = (function (G99584, G99585)      {
      return (G99584<G99585);
      });
    currentModuleminus99273.lessThanequal = (function (G99611, G99612)      {
      return (G99611<=G99612);
      });
    currentModuleminus99273.greaterThan = (function (G99638, G99639)      {
      return (G99638>G99639);
      });
    currentModuleminus99273.greaterThanequal = (function (G99665, G99666)      {
      return (G99665>=G99666);
      });
    currentModuleminus99273.ampersand = (function (G99692, G99693)      {
      return (G99692&G99693);
      });
    currentModuleminus99273.pipe = (function (G99719, G99720)      {
      return (G99719|G99720);
      });
    currentModuleminus99273.equalequal = (function (G99746, G99747)      {
      return (G99746==G99747);
      });
    currentModuleminus99273.TripleEqualminus = (function (G99773, G99774)      {
      return (G99773===G99774);
      });
    currentModuleminus99273.modsign = (function (G99800, G99801)      {
      return (G99800%G99801);
      });
    currentModuleminus99273.caret = (function (G99827, G99828)      {
      return (G99827^G99828);
      });
    currentModuleminus99273.lessThanlessThan = (function (G99854, G99855)      {
      return (G99854<<G99855);
      });
    currentModuleminus99273.greaterThangreaterThan = (function (G99881, G99882)      {
      return (G99881>>G99882);
      });
    currentModuleminus99273.greaterThangreaterThangreaterThan = (function (G99908, G99909)      {
      return (G99908>>>G99909);
      });
    ;
    var ampersandampersand = "macro - no dynamic value.";
    var pipepipe = "macro - no dynamic value.";
    currentModuleminus99273.bang = (function (o)      {
      return (!(o));
      });
    var incr = "macro - no dynamic value.";
    var decr = "macro - no dynamic value.";
    }))();
  return currentModuleminus99273;
  }))