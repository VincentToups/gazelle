define(["hooves/lisp-idioms"], (function (moduleminus295baa4e1e)  {
  var currentModuleminus90304 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus90304 = value;
    });
  (function (arguments)    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    // ("hooves/lisp-idioms" (:as apply funcall))
    ;
    currentModuleminus90304.plus = (function ()      {
      var returnValueminus90489 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus90488",
          args:arguments
        };
        });
      var recurP90492 = (function (valminus90493)        {
        if ((("undefined")===((typeof valminus90493))))          {
          return false;
          };
        return (valminus90493.recurSigil===("recurSigilminus90488"));
        });
      var actualFunminus90491 = (function ()        {
        return (function (arguments)          {
          var G90495 = undefined;
          var G90496 = Array.prototype.slice.apply(arguments);
          G90495 = (function (arguments)            {
            var matchValminus90497 = G90496;
            if ((!((("object")===((typeof matchValminus90497))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus90497.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus90498 = Array.prototype.slice.call(matchValminus90497, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus90498))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus90498.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus90498[0];
            var matchArrayTailPartminus90499 = Array.prototype.slice.call(matchValminus90497, 1);
            var tl = matchArrayTailPartminus90499;
            var result = hd;
            for (i in (tl))              {
              result = (result+(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G90495))))            {
            return G90495;
            };
          G90495 = (function (arguments)            {
            var matchValminus90500 = G90496;
            var anythingElseminus90494 = matchValminus90500;
            throw ((("Match fail in hooves/operator-functions-+ against: ")+anythingElseminus90494));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G90495))))            {
            return G90495;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result) (anything-else-90494 (_throw (_+ ''Match fail in hooves/operator-functions-+ against: '' anything-else-90494))))) for value ")+(JSON.stringify(G90496))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus90489 = actualFunminus90491.apply(this, arguments);
      while (recurP90492(returnValueminus90489))        {
        returnValueminus90489 = actualFunminus90491.apply(this, returnValueminus90489.args);
        };
      return returnValueminus90489;
      });
    currentModuleminus90304.minus = (function ()      {
      var returnValueminus90524 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus90523",
          args:arguments
        };
        });
      var recurP90527 = (function (valminus90528)        {
        if ((("undefined")===((typeof valminus90528))))          {
          return false;
          };
        return (valminus90528.recurSigil===("recurSigilminus90523"));
        });
      var actualFunminus90526 = (function ()        {
        return (function (arguments)          {
          var G90530 = undefined;
          var G90531 = Array.prototype.slice.apply(arguments);
          G90530 = (function (arguments)            {
            var matchValminus90532 = G90531;
            if ((!((("object")===((typeof matchValminus90532))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus90532.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus90533 = Array.prototype.slice.call(matchValminus90532, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus90533))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus90533.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus90533[0];
            var matchArrayTailPartminus90534 = Array.prototype.slice.call(matchValminus90532, 1);
            var tl = matchArrayTailPartminus90534;
            return (((tl.length>0))?((hd-(moduleminus295baa4e1e.apply(currentModuleminus90304.plus, tl)))) : ((-(hd))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G90530))))            {
            return G90530;
            };
          G90530 = (function (arguments)            {
            var matchValminus90535 = G90531;
            var anythingElseminus90529 = matchValminus90535;
            throw ((("Match fail in hooves/operator-functions-- against: ")+anythingElseminus90529));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G90530))))            {
            return G90530;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (if (_> tl\.length 0) (_- hd (apply + tl)) (_- hd))) (anything-else-90529 (_throw (_+ ''Match fail in hooves/operator-functions-- against: '' anything-else-90529))))) for value ")+(JSON.stringify(G90531))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus90524 = actualFunminus90526.apply(this, arguments);
      while (recurP90527(returnValueminus90524))        {
        returnValueminus90524 = actualFunminus90526.apply(this, returnValueminus90524.args);
        };
      return returnValueminus90524;
      });
    currentModuleminus90304.times = (function ()      {
      var returnValueminus90559 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus90558",
          args:arguments
        };
        });
      var recurP90562 = (function (valminus90563)        {
        if ((("undefined")===((typeof valminus90563))))          {
          return false;
          };
        return (valminus90563.recurSigil===("recurSigilminus90558"));
        });
      var actualFunminus90561 = (function ()        {
        return (function (arguments)          {
          var G90565 = undefined;
          var G90566 = Array.prototype.slice.apply(arguments);
          G90565 = (function (arguments)            {
            var matchValminus90567 = G90566;
            if ((!((("object")===((typeof matchValminus90567))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus90567.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus90568 = Array.prototype.slice.call(matchValminus90567, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus90568))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus90568.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus90568[0];
            var matchArrayTailPartminus90569 = Array.prototype.slice.call(matchValminus90567, 1);
            var tl = matchArrayTailPartminus90569;
            var result = hd;
            for (i in (tl))              {
              result = (result*(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G90565))))            {
            return G90565;
            };
          G90565 = (function (arguments)            {
            var matchValminus90570 = G90566;
            var anythingElseminus90564 = matchValminus90570;
            throw ((("Match fail in hooves/operator-functions-* against: ")+anythingElseminus90564));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G90565))))            {
            return G90565;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result) (anything-else-90564 (_throw (_+ ''Match fail in hooves/operator-functions-* against: '' anything-else-90564))))) for value ")+(JSON.stringify(G90566))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus90559 = actualFunminus90561.apply(this, arguments);
      while (recurP90562(returnValueminus90559))        {
        returnValueminus90559 = actualFunminus90561.apply(this, returnValueminus90559.args);
        };
      return returnValueminus90559;
      });
    currentModuleminus90304.divide = (function ()      {
      var returnValueminus90594 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus90593",
          args:arguments
        };
        });
      var recurP90597 = (function (valminus90598)        {
        if ((("undefined")===((typeof valminus90598))))          {
          return false;
          };
        return (valminus90598.recurSigil===("recurSigilminus90593"));
        });
      var actualFunminus90596 = (function ()        {
        return (function (arguments)          {
          var G90600 = undefined;
          var G90601 = Array.prototype.slice.apply(arguments);
          G90600 = (function (arguments)            {
            var matchValminus90602 = G90601;
            if ((!((("object")===((typeof matchValminus90602))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus90602.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus90603 = Array.prototype.slice.call(matchValminus90602, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus90603))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus90603.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus90603[0];
            var matchArrayTailPartminus90604 = Array.prototype.slice.call(matchValminus90602, 1);
            var tl = matchArrayTailPartminus90604;
            return (hd/(moduleminus295baa4e1e.apply(currentModuleminus90304.times, tl)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G90600))))            {
            return G90600;
            };
          G90600 = (function (arguments)            {
            var matchValminus90605 = G90601;
            var anythingElseminus90599 = matchValminus90605;
            throw ((("Match fail in hooves/operator-functions-/ against: ")+anythingElseminus90599));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G90600))))            {
            return G90600;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_/ hd (apply * tl))) (anything-else-90599 (_throw (_+ ''Match fail in hooves/operator-functions-/ against: '' anything-else-90599))))) for value ")+(JSON.stringify(G90601))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus90594 = actualFunminus90596.apply(this, arguments);
      while (recurP90597(returnValueminus90594))        {
        returnValueminus90594 = actualFunminus90596.apply(this, returnValueminus90594.args);
        };
      return returnValueminus90594;
      });
    var defineExternalBinop = "macro - no dynamic value.";
    var defineExternalBinops = "macro - no dynamic value.";
    currentModuleminus90304.lessThan = (function (G90615, G90616)      {
      return (G90615<G90616);
      });
    currentModuleminus90304.lessThanequal = (function (G90642, G90643)      {
      return (G90642<=G90643);
      });
    currentModuleminus90304.greaterThan = (function (G90669, G90670)      {
      return (G90669>G90670);
      });
    currentModuleminus90304.greaterThanequal = (function (G90696, G90697)      {
      return (G90696>=G90697);
      });
    currentModuleminus90304.ampersand = (function (G90723, G90724)      {
      return (G90723&G90724);
      });
    currentModuleminus90304.pipe = (function (G90750, G90751)      {
      return (G90750|G90751);
      });
    currentModuleminus90304.equalequal = (function (G90777, G90778)      {
      return (G90777==G90778);
      });
    currentModuleminus90304.TripleEqualminus = (function (G90804, G90805)      {
      return (G90804===G90805);
      });
    currentModuleminus90304.modsign = (function (G90831, G90832)      {
      return (G90831%G90832);
      });
    currentModuleminus90304.caret = (function (G90858, G90859)      {
      return (G90858^G90859);
      });
    currentModuleminus90304.lessThanlessThan = (function (G90885, G90886)      {
      return (G90885<<G90886);
      });
    currentModuleminus90304.greaterThangreaterThan = (function (G90912, G90913)      {
      return (G90912>>G90913);
      });
    currentModuleminus90304.greaterThangreaterThangreaterThan = (function (G90939, G90940)      {
      return (G90939>>>G90940);
      });
    ;
    var ampersandampersand = "macro - no dynamic value.";
    var pipepipe = "macro - no dynamic value.";
    currentModuleminus90304.bang = (function (o)      {
      return (!(o));
      });
    var incr = "macro - no dynamic value.";
    var decr = "macro - no dynamic value.";
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus90304;
  }))