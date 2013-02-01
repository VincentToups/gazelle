define(["hooves/lisp-idioms"], (function (moduleminus295baa4e1e)  {
  var currentModuleminus113330 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus113330 = value;
    });
  (function (arguments)    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    // ("hooves/lisp-idioms" (:as apply funcall))
    ;
    currentModuleminus113330.plus = (function ()      {
      var returnValueminus113356 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus113355",
          args:arguments
        };
        });
      var recurP113359 = (function (valminus113360)        {
        if ((("undefined")===((typeof valminus113360))))          {
          return false;
          };
        return (valminus113360.recurSigil===("recurSigilminus113355"));
        });
      var actualFunminus113358 = (function ()        {
        return (function (arguments)          {
          var G113362 = undefined;
          var G113363 = Array.prototype.slice.apply(arguments);
          G113362 = (function (arguments)            {
            var matchValminus113364 = G113363;
            if ((!((("object")===((typeof matchValminus113364))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus113364.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus113365 = Array.prototype.slice.call(matchValminus113364, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus113365))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus113365.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus113365[0];
            var matchArrayTailPartminus113366 = Array.prototype.slice.call(matchValminus113364, 1);
            var tl = matchArrayTailPartminus113366;
            var result = hd;
            for (i in (tl))              {
              result = (result+(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G113362))))            {
            return G113362;
            };
          G113362 = (function (arguments)            {
            var matchValminus113367 = G113363;
            var anythingElseminus113361 = matchValminus113367;
            throw ((("Match fail in hooves/operator-functions-+ against: ")+anythingElseminus113361));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G113362))))            {
            return G113362;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result) (anything-else-113361 (_throw (_+ ''Match fail in hooves/operator-functions-+ against: '' anything-else-113361))))) for value ")+(JSON.stringify(G113363))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus113356 = actualFunminus113358.apply(this, arguments);
      while (recurP113359(returnValueminus113356))        {
        returnValueminus113356 = actualFunminus113358.apply(this, returnValueminus113356.args);
        };
      return returnValueminus113356;
      });
    currentModuleminus113330.minus = (function ()      {
      var returnValueminus113391 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus113390",
          args:arguments
        };
        });
      var recurP113394 = (function (valminus113395)        {
        if ((("undefined")===((typeof valminus113395))))          {
          return false;
          };
        return (valminus113395.recurSigil===("recurSigilminus113390"));
        });
      var actualFunminus113393 = (function ()        {
        return (function (arguments)          {
          var G113397 = undefined;
          var G113398 = Array.prototype.slice.apply(arguments);
          G113397 = (function (arguments)            {
            var matchValminus113399 = G113398;
            if ((!((("object")===((typeof matchValminus113399))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus113399.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus113400 = Array.prototype.slice.call(matchValminus113399, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus113400))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus113400.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus113400[0];
            var matchArrayTailPartminus113401 = Array.prototype.slice.call(matchValminus113399, 1);
            var tl = matchArrayTailPartminus113401;
            return (((tl.length>0))?((hd-(moduleminus295baa4e1e.apply(currentModuleminus113330.plus, tl)))) : ((-(hd))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G113397))))            {
            return G113397;
            };
          G113397 = (function (arguments)            {
            var matchValminus113402 = G113398;
            var anythingElseminus113396 = matchValminus113402;
            throw ((("Match fail in hooves/operator-functions-- against: ")+anythingElseminus113396));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G113397))))            {
            return G113397;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (if (_> tl\.length 0) (_- hd (apply + tl)) (_- hd))) (anything-else-113396 (_throw (_+ ''Match fail in hooves/operator-functions-- against: '' anything-else-113396))))) for value ")+(JSON.stringify(G113398))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus113391 = actualFunminus113393.apply(this, arguments);
      while (recurP113394(returnValueminus113391))        {
        returnValueminus113391 = actualFunminus113393.apply(this, returnValueminus113391.args);
        };
      return returnValueminus113391;
      });
    currentModuleminus113330.times = (function ()      {
      var returnValueminus113426 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus113425",
          args:arguments
        };
        });
      var recurP113429 = (function (valminus113430)        {
        if ((("undefined")===((typeof valminus113430))))          {
          return false;
          };
        return (valminus113430.recurSigil===("recurSigilminus113425"));
        });
      var actualFunminus113428 = (function ()        {
        return (function (arguments)          {
          var G113432 = undefined;
          var G113433 = Array.prototype.slice.apply(arguments);
          G113432 = (function (arguments)            {
            var matchValminus113434 = G113433;
            if ((!((("object")===((typeof matchValminus113434))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus113434.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus113435 = Array.prototype.slice.call(matchValminus113434, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus113435))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus113435.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus113435[0];
            var matchArrayTailPartminus113436 = Array.prototype.slice.call(matchValminus113434, 1);
            var tl = matchArrayTailPartminus113436;
            var result = hd;
            for (i in (tl))              {
              result = (result*(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G113432))))            {
            return G113432;
            };
          G113432 = (function (arguments)            {
            var matchValminus113437 = G113433;
            var anythingElseminus113431 = matchValminus113437;
            throw ((("Match fail in hooves/operator-functions-* against: ")+anythingElseminus113431));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G113432))))            {
            return G113432;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result) (anything-else-113431 (_throw (_+ ''Match fail in hooves/operator-functions-* against: '' anything-else-113431))))) for value ")+(JSON.stringify(G113433))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus113426 = actualFunminus113428.apply(this, arguments);
      while (recurP113429(returnValueminus113426))        {
        returnValueminus113426 = actualFunminus113428.apply(this, returnValueminus113426.args);
        };
      return returnValueminus113426;
      });
    currentModuleminus113330.divide = (function ()      {
      var returnValueminus113461 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus113460",
          args:arguments
        };
        });
      var recurP113464 = (function (valminus113465)        {
        if ((("undefined")===((typeof valminus113465))))          {
          return false;
          };
        return (valminus113465.recurSigil===("recurSigilminus113460"));
        });
      var actualFunminus113463 = (function ()        {
        return (function (arguments)          {
          var G113467 = undefined;
          var G113468 = Array.prototype.slice.apply(arguments);
          G113467 = (function (arguments)            {
            var matchValminus113469 = G113468;
            if ((!((("object")===((typeof matchValminus113469))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus113469.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus113470 = Array.prototype.slice.call(matchValminus113469, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus113470))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus113470.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus113470[0];
            var matchArrayTailPartminus113471 = Array.prototype.slice.call(matchValminus113469, 1);
            var tl = matchArrayTailPartminus113471;
            return (hd/(moduleminus295baa4e1e.apply(currentModuleminus113330.times, tl)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G113467))))            {
            return G113467;
            };
          G113467 = (function (arguments)            {
            var matchValminus113472 = G113468;
            var anythingElseminus113466 = matchValminus113472;
            throw ((("Match fail in hooves/operator-functions-/ against: ")+anythingElseminus113466));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G113467))))            {
            return G113467;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_/ hd (apply * tl))) (anything-else-113466 (_throw (_+ ''Match fail in hooves/operator-functions-/ against: '' anything-else-113466))))) for value ")+(JSON.stringify(G113468))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus113461 = actualFunminus113463.apply(this, arguments);
      while (recurP113464(returnValueminus113461))        {
        returnValueminus113461 = actualFunminus113463.apply(this, returnValueminus113461.args);
        };
      return returnValueminus113461;
      });
    var defineExternalBinop = "macro - no dynamic value.";
    var defineExternalBinops = "macro - no dynamic value.";
    currentModuleminus113330.lessThan = (function (G113482, G113483)      {
      return (G113482<G113483);
      });
    currentModuleminus113330.lessThanequal = (function (G113509, G113510)      {
      return (G113509<=G113510);
      });
    currentModuleminus113330.greaterThan = (function (G113536, G113537)      {
      return (G113536>G113537);
      });
    currentModuleminus113330.greaterThanequal = (function (G113563, G113564)      {
      return (G113563>=G113564);
      });
    currentModuleminus113330.ampersand = (function (G113590, G113591)      {
      return (G113590&G113591);
      });
    currentModuleminus113330.pipe = (function (G113617, G113618)      {
      return (G113617|G113618);
      });
    currentModuleminus113330.equalequal = (function (G113644, G113645)      {
      return (G113644==G113645);
      });
    currentModuleminus113330.TripleEqualminus = (function (G113671, G113672)      {
      return (G113671===G113672);
      });
    currentModuleminus113330.modsign = (function (G113698, G113699)      {
      return (G113698%G113699);
      });
    currentModuleminus113330.caret = (function (G113725, G113726)      {
      return (G113725^G113726);
      });
    currentModuleminus113330.lessThanlessThan = (function (G113752, G113753)      {
      return (G113752<<G113753);
      });
    currentModuleminus113330.greaterThangreaterThan = (function (G113779, G113780)      {
      return (G113779>>G113780);
      });
    currentModuleminus113330.greaterThangreaterThangreaterThan = (function (G113806, G113807)      {
      return (G113806>>>G113807);
      });
    ;
    var ampersandampersand = "macro - no dynamic value.";
    var pipepipe = "macro - no dynamic value.";
    currentModuleminus113330.bang = (function (o)      {
      return (!(o));
      });
    var incr = "macro - no dynamic value.";
    var decr = "macro - no dynamic value.";
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus113330;
  }))