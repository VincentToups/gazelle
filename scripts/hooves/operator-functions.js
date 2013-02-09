define(["hooves/lisp-idioms"], (function (moduleminus295baa4e1e)  {
  var currentModuleminus129768 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus129768 = value;
    });
  (function (arguments)    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    // ("hooves/lisp-idioms" (:as apply funcall))
    ;
    currentModuleminus129768.plus = (function ()      {
      var returnValueminus129953 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus129952",
          args:arguments
        };
        });
      var recurP129956 = (function (valminus129957)        {
        if ((("undefined")===((typeof valminus129957))))          {
          return false;
          };
        return (valminus129957.recurSigil===("recurSigilminus129952"));
        });
      var actualFunminus129955 = (function ()        {
        return (function (arguments)          {
          var G129959 = undefined;
          var G129960 = Array.prototype.slice.apply(arguments);
          G129959 = (function (arguments)            {
            var matchValminus129961 = G129960;
            if ((!((("object")===((typeof matchValminus129961))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus129961.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus129962 = Array.prototype.slice.call(matchValminus129961, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus129962))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus129962.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus129962[0];
            var matchArrayTailPartminus129963 = Array.prototype.slice.call(matchValminus129961, 1);
            var tl = matchArrayTailPartminus129963;
            var result = hd;
            for (i in (tl))              {
              result = (result+(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G129959))))            {
            return G129959;
            };
          G129959 = (function (arguments)            {
            var matchValminus129964 = G129960;
            var anythingElseminus129958 = matchValminus129964;
            throw ((("Match fail in hooves/operator-functions-+ against: ")+anythingElseminus129958));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G129959))))            {
            return G129959;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result) (anything-else-129958 (_throw (_+ ''Match fail in hooves/operator-functions-+ against: '' anything-else-129958))))) for value ")+(JSON.stringify(G129960))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus129953 = actualFunminus129955.apply(this, arguments);
      while (recurP129956(returnValueminus129953))        {
        returnValueminus129953 = actualFunminus129955.apply(this, returnValueminus129953.args);
        };
      return returnValueminus129953;
      });
    currentModuleminus129768.minus = (function ()      {
      var returnValueminus129988 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus129987",
          args:arguments
        };
        });
      var recurP129991 = (function (valminus129992)        {
        if ((("undefined")===((typeof valminus129992))))          {
          return false;
          };
        return (valminus129992.recurSigil===("recurSigilminus129987"));
        });
      var actualFunminus129990 = (function ()        {
        return (function (arguments)          {
          var G129994 = undefined;
          var G129995 = Array.prototype.slice.apply(arguments);
          G129994 = (function (arguments)            {
            var matchValminus129996 = G129995;
            if ((!((("object")===((typeof matchValminus129996))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus129996.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus129997 = Array.prototype.slice.call(matchValminus129996, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus129997))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus129997.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus129997[0];
            var matchArrayTailPartminus129998 = Array.prototype.slice.call(matchValminus129996, 1);
            var tl = matchArrayTailPartminus129998;
            return (((tl.length>0))?((hd-(moduleminus295baa4e1e.apply(currentModuleminus129768.plus, tl)))) : ((-(hd))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G129994))))            {
            return G129994;
            };
          G129994 = (function (arguments)            {
            var matchValminus129999 = G129995;
            var anythingElseminus129993 = matchValminus129999;
            throw ((("Match fail in hooves/operator-functions-- against: ")+anythingElseminus129993));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G129994))))            {
            return G129994;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (if (_> tl\.length 0) (_- hd (apply + tl)) (_- hd))) (anything-else-129993 (_throw (_+ ''Match fail in hooves/operator-functions-- against: '' anything-else-129993))))) for value ")+(JSON.stringify(G129995))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus129988 = actualFunminus129990.apply(this, arguments);
      while (recurP129991(returnValueminus129988))        {
        returnValueminus129988 = actualFunminus129990.apply(this, returnValueminus129988.args);
        };
      return returnValueminus129988;
      });
    currentModuleminus129768.times = (function ()      {
      var returnValueminus130023 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus130022",
          args:arguments
        };
        });
      var recurP130026 = (function (valminus130027)        {
        if ((("undefined")===((typeof valminus130027))))          {
          return false;
          };
        return (valminus130027.recurSigil===("recurSigilminus130022"));
        });
      var actualFunminus130025 = (function ()        {
        return (function (arguments)          {
          var G130029 = undefined;
          var G130030 = Array.prototype.slice.apply(arguments);
          G130029 = (function (arguments)            {
            var matchValminus130031 = G130030;
            if ((!((("object")===((typeof matchValminus130031))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus130031.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus130032 = Array.prototype.slice.call(matchValminus130031, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus130032))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus130032.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus130032[0];
            var matchArrayTailPartminus130033 = Array.prototype.slice.call(matchValminus130031, 1);
            var tl = matchArrayTailPartminus130033;
            var result = hd;
            for (i in (tl))              {
              result = (result*(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G130029))))            {
            return G130029;
            };
          G130029 = (function (arguments)            {
            var matchValminus130034 = G130030;
            var anythingElseminus130028 = matchValminus130034;
            throw ((("Match fail in hooves/operator-functions-* against: ")+anythingElseminus130028));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G130029))))            {
            return G130029;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result) (anything-else-130028 (_throw (_+ ''Match fail in hooves/operator-functions-* against: '' anything-else-130028))))) for value ")+(JSON.stringify(G130030))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus130023 = actualFunminus130025.apply(this, arguments);
      while (recurP130026(returnValueminus130023))        {
        returnValueminus130023 = actualFunminus130025.apply(this, returnValueminus130023.args);
        };
      return returnValueminus130023;
      });
    currentModuleminus129768.divide = (function ()      {
      var returnValueminus130058 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus130057",
          args:arguments
        };
        });
      var recurP130061 = (function (valminus130062)        {
        if ((("undefined")===((typeof valminus130062))))          {
          return false;
          };
        return (valminus130062.recurSigil===("recurSigilminus130057"));
        });
      var actualFunminus130060 = (function ()        {
        return (function (arguments)          {
          var G130064 = undefined;
          var G130065 = Array.prototype.slice.apply(arguments);
          G130064 = (function (arguments)            {
            var matchValminus130066 = G130065;
            if ((!((("object")===((typeof matchValminus130066))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus130066.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus130067 = Array.prototype.slice.call(matchValminus130066, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus130067))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus130067.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus130067[0];
            var matchArrayTailPartminus130068 = Array.prototype.slice.call(matchValminus130066, 1);
            var tl = matchArrayTailPartminus130068;
            return (hd/(moduleminus295baa4e1e.apply(currentModuleminus129768.times, tl)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G130064))))            {
            return G130064;
            };
          G130064 = (function (arguments)            {
            var matchValminus130069 = G130065;
            var anythingElseminus130063 = matchValminus130069;
            throw ((("Match fail in hooves/operator-functions-/ against: ")+anythingElseminus130063));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G130064))))            {
            return G130064;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_/ hd (apply * tl))) (anything-else-130063 (_throw (_+ ''Match fail in hooves/operator-functions-/ against: '' anything-else-130063))))) for value ")+(JSON.stringify(G130065))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus130058 = actualFunminus130060.apply(this, arguments);
      while (recurP130061(returnValueminus130058))        {
        returnValueminus130058 = actualFunminus130060.apply(this, returnValueminus130058.args);
        };
      return returnValueminus130058;
      });
    var defineExternalBinop = "macro - no dynamic value.";
    var defineExternalBinops = "macro - no dynamic value.";
    currentModuleminus129768.lessThan = (function (G130079, G130080)      {
      return (G130079<G130080);
      });
    currentModuleminus129768.lessThanequal = (function (G130106, G130107)      {
      return (G130106<=G130107);
      });
    currentModuleminus129768.greaterThan = (function (G130133, G130134)      {
      return (G130133>G130134);
      });
    currentModuleminus129768.greaterThanequal = (function (G130160, G130161)      {
      return (G130160>=G130161);
      });
    currentModuleminus129768.ampersand = (function (G130187, G130188)      {
      return (G130187&G130188);
      });
    currentModuleminus129768.pipe = (function (G130214, G130215)      {
      return (G130214|G130215);
      });
    currentModuleminus129768.equalequal = (function (G130241, G130242)      {
      return (G130241==G130242);
      });
    currentModuleminus129768.TripleEqualminus = (function (G130268, G130269)      {
      return (G130268===G130269);
      });
    currentModuleminus129768.modsign = (function (G130295, G130296)      {
      return (G130295%G130296);
      });
    currentModuleminus129768.caret = (function (G130322, G130323)      {
      return (G130322^G130323);
      });
    currentModuleminus129768.lessThanlessThan = (function (G130349, G130350)      {
      return (G130349<<G130350);
      });
    currentModuleminus129768.greaterThangreaterThan = (function (G130376, G130377)      {
      return (G130376>>G130377);
      });
    currentModuleminus129768.greaterThangreaterThangreaterThan = (function (G130403, G130404)      {
      return (G130403>>>G130404);
      });
    ;
    var ampersandampersand = "macro - no dynamic value.";
    var pipepipe = "macro - no dynamic value.";
    currentModuleminus129768.bang = (function (o)      {
      return (!(o));
      });
    var incr = "macro - no dynamic value.";
    var decr = "macro - no dynamic value.";
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus129768;
  }))