define(["hooves/lisp-idioms"], (function (moduleminus295baa4e1e)  {
  var currentModuleminus266346 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus266346 = value;
    });
  (function (arguments)    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    // ("hooves/lisp-idioms" (:as apply funcall))
    ;
    currentModuleminus266346.plus = (function ()      {
      var returnValueminus266531 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus266530",
          args:arguments
        };
        });
      var recurP266534 = (function (valminus266535)        {
        if ((("undefined")===((typeof valminus266535))))          {
          return false;
          };
        return (valminus266535.recurSigil===("recurSigilminus266530"));
        });
      var actualFunminus266533 = (function ()        {
        return (function (arguments)          {
          var G266537 = undefined;
          var G266538 = Array.prototype.slice.apply(arguments);
          G266537 = (function (arguments)            {
            var matchValminus266539 = G266538;
            if ((!((("object")===((typeof matchValminus266539))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus266539.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus266540 = Array.prototype.slice.call(matchValminus266539, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus266540))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus266540.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus266540[0];
            var matchArrayTailPartminus266541 = Array.prototype.slice.call(matchValminus266539, 1);
            var tl = matchArrayTailPartminus266541;
            var result = hd;
            for (i in (tl))              {
              result = (result+(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G266537))))            {
            return G266537;
            };
          G266537 = (function (arguments)            {
            var matchValminus266542 = G266538;
            var anythingElseminus266536 = matchValminus266542;
            throw ((("Match fail in hooves/operator-functions-+ against: ")+anythingElseminus266536));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G266537))))            {
            return G266537;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result) (anything-else-266536 (_throw (_+ ''Match fail in hooves/operator-functions-+ against: '' anything-else-266536))))) for value ")+(JSON.stringify(G266538))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus266531 = actualFunminus266533.apply(this, arguments);
      while (recurP266534(returnValueminus266531))        {
        returnValueminus266531 = actualFunminus266533.apply(this, returnValueminus266531.args);
        };
      return returnValueminus266531;
      });
    currentModuleminus266346.minus = (function ()      {
      var returnValueminus266566 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus266565",
          args:arguments
        };
        });
      var recurP266569 = (function (valminus266570)        {
        if ((("undefined")===((typeof valminus266570))))          {
          return false;
          };
        return (valminus266570.recurSigil===("recurSigilminus266565"));
        });
      var actualFunminus266568 = (function ()        {
        return (function (arguments)          {
          var G266572 = undefined;
          var G266573 = Array.prototype.slice.apply(arguments);
          G266572 = (function (arguments)            {
            var matchValminus266574 = G266573;
            if ((!((("object")===((typeof matchValminus266574))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus266574.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus266575 = Array.prototype.slice.call(matchValminus266574, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus266575))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus266575.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus266575[0];
            var matchArrayTailPartminus266576 = Array.prototype.slice.call(matchValminus266574, 1);
            var tl = matchArrayTailPartminus266576;
            return (((tl.length>0))?((hd-(moduleminus295baa4e1e.apply(currentModuleminus266346.plus, tl)))) : ((-(hd))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G266572))))            {
            return G266572;
            };
          G266572 = (function (arguments)            {
            var matchValminus266577 = G266573;
            var anythingElseminus266571 = matchValminus266577;
            throw ((("Match fail in hooves/operator-functions-- against: ")+anythingElseminus266571));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G266572))))            {
            return G266572;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (if (_> tl\.length 0) (_- hd (apply + tl)) (_- hd))) (anything-else-266571 (_throw (_+ ''Match fail in hooves/operator-functions-- against: '' anything-else-266571))))) for value ")+(JSON.stringify(G266573))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus266566 = actualFunminus266568.apply(this, arguments);
      while (recurP266569(returnValueminus266566))        {
        returnValueminus266566 = actualFunminus266568.apply(this, returnValueminus266566.args);
        };
      return returnValueminus266566;
      });
    currentModuleminus266346.times = (function ()      {
      var returnValueminus266601 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus266600",
          args:arguments
        };
        });
      var recurP266604 = (function (valminus266605)        {
        if ((("undefined")===((typeof valminus266605))))          {
          return false;
          };
        return (valminus266605.recurSigil===("recurSigilminus266600"));
        });
      var actualFunminus266603 = (function ()        {
        return (function (arguments)          {
          var G266607 = undefined;
          var G266608 = Array.prototype.slice.apply(arguments);
          G266607 = (function (arguments)            {
            var matchValminus266609 = G266608;
            if ((!((("object")===((typeof matchValminus266609))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus266609.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus266610 = Array.prototype.slice.call(matchValminus266609, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus266610))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus266610.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus266610[0];
            var matchArrayTailPartminus266611 = Array.prototype.slice.call(matchValminus266609, 1);
            var tl = matchArrayTailPartminus266611;
            var result = hd;
            for (i in (tl))              {
              result = (result*(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G266607))))            {
            return G266607;
            };
          G266607 = (function (arguments)            {
            var matchValminus266612 = G266608;
            var anythingElseminus266606 = matchValminus266612;
            throw ((("Match fail in hooves/operator-functions-* against: ")+anythingElseminus266606));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G266607))))            {
            return G266607;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result) (anything-else-266606 (_throw (_+ ''Match fail in hooves/operator-functions-* against: '' anything-else-266606))))) for value ")+(JSON.stringify(G266608))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus266601 = actualFunminus266603.apply(this, arguments);
      while (recurP266604(returnValueminus266601))        {
        returnValueminus266601 = actualFunminus266603.apply(this, returnValueminus266601.args);
        };
      return returnValueminus266601;
      });
    currentModuleminus266346.divide = (function ()      {
      var returnValueminus266636 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus266635",
          args:arguments
        };
        });
      var recurP266639 = (function (valminus266640)        {
        if ((("undefined")===((typeof valminus266640))))          {
          return false;
          };
        return (valminus266640.recurSigil===("recurSigilminus266635"));
        });
      var actualFunminus266638 = (function ()        {
        return (function (arguments)          {
          var G266642 = undefined;
          var G266643 = Array.prototype.slice.apply(arguments);
          G266642 = (function (arguments)            {
            var matchValminus266644 = G266643;
            if ((!((("object")===((typeof matchValminus266644))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus266644.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus266645 = Array.prototype.slice.call(matchValminus266644, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus266645))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus266645.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus266645[0];
            var matchArrayTailPartminus266646 = Array.prototype.slice.call(matchValminus266644, 1);
            var tl = matchArrayTailPartminus266646;
            return (hd/(moduleminus295baa4e1e.apply(currentModuleminus266346.times, tl)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G266642))))            {
            return G266642;
            };
          G266642 = (function (arguments)            {
            var matchValminus266647 = G266643;
            var anythingElseminus266641 = matchValminus266647;
            throw ((("Match fail in hooves/operator-functions-/ against: ")+anythingElseminus266641));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G266642))))            {
            return G266642;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_/ hd (apply * tl))) (anything-else-266641 (_throw (_+ ''Match fail in hooves/operator-functions-/ against: '' anything-else-266641))))) for value ")+(JSON.stringify(G266643))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus266636 = actualFunminus266638.apply(this, arguments);
      while (recurP266639(returnValueminus266636))        {
        returnValueminus266636 = actualFunminus266638.apply(this, returnValueminus266636.args);
        };
      return returnValueminus266636;
      });
    var defineExternalBinop = "macro - no dynamic value.";
    var defineExternalBinops = "macro - no dynamic value.";
    currentModuleminus266346.lessThan = (function (G266657, G266658)      {
      return (G266657<G266658);
      });
    currentModuleminus266346.lessThanequal = (function (G266684, G266685)      {
      return (G266684<=G266685);
      });
    currentModuleminus266346.greaterThan = (function (G266711, G266712)      {
      return (G266711>G266712);
      });
    currentModuleminus266346.greaterThanequal = (function (G266738, G266739)      {
      return (G266738>=G266739);
      });
    currentModuleminus266346.ampersand = (function (G266765, G266766)      {
      return (G266765&G266766);
      });
    currentModuleminus266346.pipe = (function (G266792, G266793)      {
      return (G266792|G266793);
      });
    currentModuleminus266346.equalequal = (function (G266819, G266820)      {
      return (G266819==G266820);
      });
    currentModuleminus266346.TripleEqualminus = (function (G266846, G266847)      {
      return (G266846===G266847);
      });
    currentModuleminus266346.modsign = (function (G266873, G266874)      {
      return (G266873%G266874);
      });
    currentModuleminus266346.caret = (function (G266900, G266901)      {
      return (G266900^G266901);
      });
    currentModuleminus266346.lessThanlessThan = (function (G266927, G266928)      {
      return (G266927<<G266928);
      });
    currentModuleminus266346.greaterThangreaterThan = (function (G266954, G266955)      {
      return (G266954>>G266955);
      });
    currentModuleminus266346.greaterThangreaterThangreaterThan = (function (G266981, G266982)      {
      return (G266981>>>G266982);
      });
    ;
    var ampersandampersand = "macro - no dynamic value.";
    var pipepipe = "macro - no dynamic value.";
    currentModuleminus266346.bang = (function (o)      {
      return (!(o));
      });
    var incr = "macro - no dynamic value.";
    var decr = "macro - no dynamic value.";
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus266346;
  }))