define(["hooves/lisp-idioms"], (function (moduleminus295baa4e1e)  {
  var currentModuleminus68361 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus68361 = value;
    });
  (function (arguments)    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    // ("hooves/lisp-idioms" (:as apply funcall))
    ;
    currentModuleminus68361.plus = (function ()      {
      var returnValueminus68546 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus68545",
          args:arguments
        };
        });
      var recurP68549 = (function (valminus68550)        {
        if ((("undefined")===((typeof valminus68550))))          {
          return false;
          };
        return (valminus68550.recurSigil===("recurSigilminus68545"));
        });
      var actualFunminus68548 = (function ()        {
        return (function (arguments)          {
          var G68552 = undefined;
          var G68553 = Array.prototype.slice.apply(arguments);
          G68552 = (function (arguments)            {
            var matchValminus68554 = G68553;
            if ((!((("object")===((typeof matchValminus68554))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus68554.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus68555 = Array.prototype.slice.call(matchValminus68554, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus68555))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus68555.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus68555[0];
            var matchArrayTailPartminus68556 = Array.prototype.slice.call(matchValminus68554, 1);
            var tl = matchArrayTailPartminus68556;
            var result = hd;
            for (i in (tl))              {
              result = (result+(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G68552))))            {
            return G68552;
            };
          G68552 = (function (arguments)            {
            var matchValminus68557 = G68553;
            var anythingElseminus68551 = matchValminus68557;
            throw ((("Match fail in hooves/operator-functions-+ against: ")+anythingElseminus68551));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G68552))))            {
            return G68552;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result) (anything-else-68551 (_throw (_+ ''Match fail in hooves/operator-functions-+ against: '' anything-else-68551))))) for value ")+(JSON.stringify(G68553))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus68546 = actualFunminus68548.apply(this, arguments);
      while (recurP68549(returnValueminus68546))        {
        returnValueminus68546 = actualFunminus68548.apply(this, returnValueminus68546.args);
        };
      return returnValueminus68546;
      });
    currentModuleminus68361.minus = (function ()      {
      var returnValueminus68581 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus68580",
          args:arguments
        };
        });
      var recurP68584 = (function (valminus68585)        {
        if ((("undefined")===((typeof valminus68585))))          {
          return false;
          };
        return (valminus68585.recurSigil===("recurSigilminus68580"));
        });
      var actualFunminus68583 = (function ()        {
        return (function (arguments)          {
          var G68587 = undefined;
          var G68588 = Array.prototype.slice.apply(arguments);
          G68587 = (function (arguments)            {
            var matchValminus68589 = G68588;
            if ((!((("object")===((typeof matchValminus68589))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus68589.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus68590 = Array.prototype.slice.call(matchValminus68589, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus68590))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus68590.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus68590[0];
            var matchArrayTailPartminus68591 = Array.prototype.slice.call(matchValminus68589, 1);
            var tl = matchArrayTailPartminus68591;
            return (((tl.length>0))?((hd-(moduleminus295baa4e1e.apply(currentModuleminus68361.plus, tl)))) : ((-(hd))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G68587))))            {
            return G68587;
            };
          G68587 = (function (arguments)            {
            var matchValminus68592 = G68588;
            var anythingElseminus68586 = matchValminus68592;
            throw ((("Match fail in hooves/operator-functions-- against: ")+anythingElseminus68586));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G68587))))            {
            return G68587;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (if (_> tl\.length 0) (_- hd (apply + tl)) (_- hd))) (anything-else-68586 (_throw (_+ ''Match fail in hooves/operator-functions-- against: '' anything-else-68586))))) for value ")+(JSON.stringify(G68588))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus68581 = actualFunminus68583.apply(this, arguments);
      while (recurP68584(returnValueminus68581))        {
        returnValueminus68581 = actualFunminus68583.apply(this, returnValueminus68581.args);
        };
      return returnValueminus68581;
      });
    currentModuleminus68361.times = (function ()      {
      var returnValueminus68616 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus68615",
          args:arguments
        };
        });
      var recurP68619 = (function (valminus68620)        {
        if ((("undefined")===((typeof valminus68620))))          {
          return false;
          };
        return (valminus68620.recurSigil===("recurSigilminus68615"));
        });
      var actualFunminus68618 = (function ()        {
        return (function (arguments)          {
          var G68622 = undefined;
          var G68623 = Array.prototype.slice.apply(arguments);
          G68622 = (function (arguments)            {
            var matchValminus68624 = G68623;
            if ((!((("object")===((typeof matchValminus68624))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus68624.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus68625 = Array.prototype.slice.call(matchValminus68624, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus68625))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus68625.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus68625[0];
            var matchArrayTailPartminus68626 = Array.prototype.slice.call(matchValminus68624, 1);
            var tl = matchArrayTailPartminus68626;
            var result = hd;
            for (i in (tl))              {
              result = (result*(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G68622))))            {
            return G68622;
            };
          G68622 = (function (arguments)            {
            var matchValminus68627 = G68623;
            var anythingElseminus68621 = matchValminus68627;
            throw ((("Match fail in hooves/operator-functions-* against: ")+anythingElseminus68621));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G68622))))            {
            return G68622;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result) (anything-else-68621 (_throw (_+ ''Match fail in hooves/operator-functions-* against: '' anything-else-68621))))) for value ")+(JSON.stringify(G68623))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus68616 = actualFunminus68618.apply(this, arguments);
      while (recurP68619(returnValueminus68616))        {
        returnValueminus68616 = actualFunminus68618.apply(this, returnValueminus68616.args);
        };
      return returnValueminus68616;
      });
    currentModuleminus68361.divide = (function ()      {
      var returnValueminus68651 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus68650",
          args:arguments
        };
        });
      var recurP68654 = (function (valminus68655)        {
        if ((("undefined")===((typeof valminus68655))))          {
          return false;
          };
        return (valminus68655.recurSigil===("recurSigilminus68650"));
        });
      var actualFunminus68653 = (function ()        {
        return (function (arguments)          {
          var G68657 = undefined;
          var G68658 = Array.prototype.slice.apply(arguments);
          G68657 = (function (arguments)            {
            var matchValminus68659 = G68658;
            if ((!((("object")===((typeof matchValminus68659))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus68659.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus68660 = Array.prototype.slice.call(matchValminus68659, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus68660))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus68660.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus68660[0];
            var matchArrayTailPartminus68661 = Array.prototype.slice.call(matchValminus68659, 1);
            var tl = matchArrayTailPartminus68661;
            return (hd/(moduleminus295baa4e1e.apply(currentModuleminus68361.times, tl)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G68657))))            {
            return G68657;
            };
          G68657 = (function (arguments)            {
            var matchValminus68662 = G68658;
            var anythingElseminus68656 = matchValminus68662;
            throw ((("Match fail in hooves/operator-functions-/ against: ")+anythingElseminus68656));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G68657))))            {
            return G68657;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_/ hd (apply * tl))) (anything-else-68656 (_throw (_+ ''Match fail in hooves/operator-functions-/ against: '' anything-else-68656))))) for value ")+(JSON.stringify(G68658))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus68651 = actualFunminus68653.apply(this, arguments);
      while (recurP68654(returnValueminus68651))        {
        returnValueminus68651 = actualFunminus68653.apply(this, returnValueminus68651.args);
        };
      return returnValueminus68651;
      });
    var defineExternalBinop = "macro - no dynamic value.";
    var defineExternalBinops = "macro - no dynamic value.";
    currentModuleminus68361.lessThan = (function (G68672, G68673)      {
      return (G68672<G68673);
      });
    currentModuleminus68361.lessThanequal = (function (G68699, G68700)      {
      return (G68699<=G68700);
      });
    currentModuleminus68361.greaterThan = (function (G68726, G68727)      {
      return (G68726>G68727);
      });
    currentModuleminus68361.greaterThanequal = (function (G68753, G68754)      {
      return (G68753>=G68754);
      });
    currentModuleminus68361.ampersand = (function (G68780, G68781)      {
      return (G68780&G68781);
      });
    currentModuleminus68361.pipe = (function (G68807, G68808)      {
      return (G68807|G68808);
      });
    currentModuleminus68361.equalequal = (function (G68834, G68835)      {
      return (G68834==G68835);
      });
    currentModuleminus68361.TripleEqualminus = (function (G68861, G68862)      {
      return (G68861===G68862);
      });
    currentModuleminus68361.modsign = (function (G68888, G68889)      {
      return (G68888%G68889);
      });
    currentModuleminus68361.caret = (function (G68915, G68916)      {
      return (G68915^G68916);
      });
    currentModuleminus68361.lessThanlessThan = (function (G68942, G68943)      {
      return (G68942<<G68943);
      });
    currentModuleminus68361.greaterThangreaterThan = (function (G68969, G68970)      {
      return (G68969>>G68970);
      });
    currentModuleminus68361.greaterThangreaterThangreaterThan = (function (G68996, G68997)      {
      return (G68996>>>G68997);
      });
    ;
    var ampersandampersand = "macro - no dynamic value.";
    var pipepipe = "macro - no dynamic value.";
    currentModuleminus68361.bang = (function (o)      {
      return (!(o));
      });
    var incr = "macro - no dynamic value.";
    var decr = "macro - no dynamic value.";
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus68361;
  }))