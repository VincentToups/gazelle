define(["hooves/lisp-idioms"], (function (moduleminus295baa4e1e)  {
  var currentModuleminus64295 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus64295 = value;
    });
  (function (arguments)    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    // ("hooves/lisp-idioms" (:as apply funcall))
    ;
    currentModuleminus64295.plus = (function ()      {
      var returnValueminus64480 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus64479",
          args:arguments
        };
        });
      var recurP64483 = (function (valminus64484)        {
        if ((("undefined")===((typeof valminus64484))))          {
          return false;
          };
        return (valminus64484.recurSigil===("recurSigilminus64479"));
        });
      var actualFunminus64482 = (function ()        {
        return (function (arguments)          {
          var G64486 = undefined;
          var G64487 = Array.prototype.slice.apply(arguments);
          G64486 = (function (arguments)            {
            var matchValminus64488 = G64487;
            if ((!((("object")===((typeof matchValminus64488))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus64488.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus64489 = Array.prototype.slice.call(matchValminus64488, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus64489))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus64489.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus64489[0];
            var matchArrayTailPartminus64490 = Array.prototype.slice.call(matchValminus64488, 1);
            var tl = matchArrayTailPartminus64490;
            var result = hd;
            for (i in (tl))              {
              result = (result+(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G64486))))            {
            return G64486;
            };
          G64486 = (function (arguments)            {
            var matchValminus64491 = G64487;
            var anythingElseminus64485 = matchValminus64491;
            throw ((("Match fail in hooves/operator-functions-+ against: ")+anythingElseminus64485));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G64486))))            {
            return G64486;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result) (anything-else-64485 (_throw (_+ ''Match fail in hooves/operator-functions-+ against: '' anything-else-64485))))) for value ")+(JSON.stringify(G64487))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus64480 = actualFunminus64482.apply(this, arguments);
      while (recurP64483(returnValueminus64480))        {
        returnValueminus64480 = actualFunminus64482.apply(this, returnValueminus64480.args);
        };
      return returnValueminus64480;
      });
    currentModuleminus64295.minus = (function ()      {
      var returnValueminus64515 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus64514",
          args:arguments
        };
        });
      var recurP64518 = (function (valminus64519)        {
        if ((("undefined")===((typeof valminus64519))))          {
          return false;
          };
        return (valminus64519.recurSigil===("recurSigilminus64514"));
        });
      var actualFunminus64517 = (function ()        {
        return (function (arguments)          {
          var G64521 = undefined;
          var G64522 = Array.prototype.slice.apply(arguments);
          G64521 = (function (arguments)            {
            var matchValminus64523 = G64522;
            if ((!((("object")===((typeof matchValminus64523))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus64523.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus64524 = Array.prototype.slice.call(matchValminus64523, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus64524))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus64524.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus64524[0];
            var matchArrayTailPartminus64525 = Array.prototype.slice.call(matchValminus64523, 1);
            var tl = matchArrayTailPartminus64525;
            return (((tl.length>0))?((hd-(moduleminus295baa4e1e.apply(currentModuleminus64295.plus, tl)))) : ((-(hd))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G64521))))            {
            return G64521;
            };
          G64521 = (function (arguments)            {
            var matchValminus64526 = G64522;
            var anythingElseminus64520 = matchValminus64526;
            throw ((("Match fail in hooves/operator-functions-- against: ")+anythingElseminus64520));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G64521))))            {
            return G64521;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (if (_> tl\.length 0) (_- hd (apply + tl)) (_- hd))) (anything-else-64520 (_throw (_+ ''Match fail in hooves/operator-functions-- against: '' anything-else-64520))))) for value ")+(JSON.stringify(G64522))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus64515 = actualFunminus64517.apply(this, arguments);
      while (recurP64518(returnValueminus64515))        {
        returnValueminus64515 = actualFunminus64517.apply(this, returnValueminus64515.args);
        };
      return returnValueminus64515;
      });
    currentModuleminus64295.times = (function ()      {
      var returnValueminus64550 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus64549",
          args:arguments
        };
        });
      var recurP64553 = (function (valminus64554)        {
        if ((("undefined")===((typeof valminus64554))))          {
          return false;
          };
        return (valminus64554.recurSigil===("recurSigilminus64549"));
        });
      var actualFunminus64552 = (function ()        {
        return (function (arguments)          {
          var G64556 = undefined;
          var G64557 = Array.prototype.slice.apply(arguments);
          G64556 = (function (arguments)            {
            var matchValminus64558 = G64557;
            if ((!((("object")===((typeof matchValminus64558))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus64558.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus64559 = Array.prototype.slice.call(matchValminus64558, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus64559))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus64559.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus64559[0];
            var matchArrayTailPartminus64560 = Array.prototype.slice.call(matchValminus64558, 1);
            var tl = matchArrayTailPartminus64560;
            var result = hd;
            for (i in (tl))              {
              result = (result*(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G64556))))            {
            return G64556;
            };
          G64556 = (function (arguments)            {
            var matchValminus64561 = G64557;
            var anythingElseminus64555 = matchValminus64561;
            throw ((("Match fail in hooves/operator-functions-* against: ")+anythingElseminus64555));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G64556))))            {
            return G64556;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result) (anything-else-64555 (_throw (_+ ''Match fail in hooves/operator-functions-* against: '' anything-else-64555))))) for value ")+(JSON.stringify(G64557))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus64550 = actualFunminus64552.apply(this, arguments);
      while (recurP64553(returnValueminus64550))        {
        returnValueminus64550 = actualFunminus64552.apply(this, returnValueminus64550.args);
        };
      return returnValueminus64550;
      });
    currentModuleminus64295.divide = (function ()      {
      var returnValueminus64585 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus64584",
          args:arguments
        };
        });
      var recurP64588 = (function (valminus64589)        {
        if ((("undefined")===((typeof valminus64589))))          {
          return false;
          };
        return (valminus64589.recurSigil===("recurSigilminus64584"));
        });
      var actualFunminus64587 = (function ()        {
        return (function (arguments)          {
          var G64591 = undefined;
          var G64592 = Array.prototype.slice.apply(arguments);
          G64591 = (function (arguments)            {
            var matchValminus64593 = G64592;
            if ((!((("object")===((typeof matchValminus64593))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus64593.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus64594 = Array.prototype.slice.call(matchValminus64593, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus64594))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus64594.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus64594[0];
            var matchArrayTailPartminus64595 = Array.prototype.slice.call(matchValminus64593, 1);
            var tl = matchArrayTailPartminus64595;
            return (hd/(moduleminus295baa4e1e.apply(currentModuleminus64295.times, tl)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G64591))))            {
            return G64591;
            };
          G64591 = (function (arguments)            {
            var matchValminus64596 = G64592;
            var anythingElseminus64590 = matchValminus64596;
            throw ((("Match fail in hooves/operator-functions-/ against: ")+anythingElseminus64590));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G64591))))            {
            return G64591;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_/ hd (apply * tl))) (anything-else-64590 (_throw (_+ ''Match fail in hooves/operator-functions-/ against: '' anything-else-64590))))) for value ")+(JSON.stringify(G64592))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus64585 = actualFunminus64587.apply(this, arguments);
      while (recurP64588(returnValueminus64585))        {
        returnValueminus64585 = actualFunminus64587.apply(this, returnValueminus64585.args);
        };
      return returnValueminus64585;
      });
    var defineExternalBinop = "macro - no dynamic value.";
    var defineExternalBinops = "macro - no dynamic value.";
    currentModuleminus64295.lessThan = (function (G64606, G64607)      {
      return (G64606<G64607);
      });
    currentModuleminus64295.lessThanequal = (function (G64633, G64634)      {
      return (G64633<=G64634);
      });
    currentModuleminus64295.greaterThan = (function (G64660, G64661)      {
      return (G64660>G64661);
      });
    currentModuleminus64295.greaterThanequal = (function (G64687, G64688)      {
      return (G64687>=G64688);
      });
    currentModuleminus64295.ampersand = (function (G64714, G64715)      {
      return (G64714&G64715);
      });
    currentModuleminus64295.pipe = (function (G64741, G64742)      {
      return (G64741|G64742);
      });
    currentModuleminus64295.equalequal = (function (G64768, G64769)      {
      return (G64768==G64769);
      });
    currentModuleminus64295.TripleEqualminus = (function (G64795, G64796)      {
      return (G64795===G64796);
      });
    currentModuleminus64295.modsign = (function (G64822, G64823)      {
      return (G64822%G64823);
      });
    currentModuleminus64295.caret = (function (G64849, G64850)      {
      return (G64849^G64850);
      });
    currentModuleminus64295.lessThanlessThan = (function (G64876, G64877)      {
      return (G64876<<G64877);
      });
    currentModuleminus64295.greaterThangreaterThan = (function (G64903, G64904)      {
      return (G64903>>G64904);
      });
    currentModuleminus64295.greaterThangreaterThangreaterThan = (function (G64930, G64931)      {
      return (G64930>>>G64931);
      });
    ;
    var ampersandampersand = "macro - no dynamic value.";
    var pipepipe = "macro - no dynamic value.";
    currentModuleminus64295.bang = (function (o)      {
      return (!(o));
      });
    var incr = "macro - no dynamic value.";
    var decr = "macro - no dynamic value.";
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus64295;
  }))