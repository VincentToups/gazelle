define(["hooves/lisp-idioms"], (function (moduleminus295baa4e1e)  {
  var currentModuleminus74720 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus74720 = value;
    });
  (function (arguments)    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    // ("hooves/lisp-idioms" (:as apply funcall))
    ;
    currentModuleminus74720.plus = (function ()      {
      var returnValueminus74905 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus74904",
          args:arguments
        };
        });
      var recurP74908 = (function (valminus74909)        {
        if ((("undefined")===((typeof valminus74909))))          {
          return false;
          };
        return (valminus74909.recurSigil===("recurSigilminus74904"));
        });
      var actualFunminus74907 = (function ()        {
        return (function (arguments)          {
          var G74911 = undefined;
          var G74912 = Array.prototype.slice.apply(arguments);
          G74911 = (function (arguments)            {
            var matchValminus74913 = G74912;
            if ((!((("object")===((typeof matchValminus74913))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus74913.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus74914 = Array.prototype.slice.call(matchValminus74913, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus74914))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus74914.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus74914[0];
            var matchArrayTailPartminus74915 = Array.prototype.slice.call(matchValminus74913, 1);
            var tl = matchArrayTailPartminus74915;
            var result = hd;
            for (i in (tl))              {
              result = (result+(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G74911))))            {
            return G74911;
            };
          G74911 = (function (arguments)            {
            var matchValminus74916 = G74912;
            var anythingElseminus74910 = matchValminus74916;
            throw ((("Match fail in hooves/operator-functions-+ against: ")+anythingElseminus74910));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G74911))))            {
            return G74911;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result) (anything-else-74910 (_throw (_+ ''Match fail in hooves/operator-functions-+ against: '' anything-else-74910))))) for value ")+(JSON.stringify(G74912))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus74905 = actualFunminus74907.apply(this, arguments);
      while (recurP74908(returnValueminus74905))        {
        returnValueminus74905 = actualFunminus74907.apply(this, returnValueminus74905.args);
        };
      return returnValueminus74905;
      });
    currentModuleminus74720.minus = (function ()      {
      var returnValueminus74940 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus74939",
          args:arguments
        };
        });
      var recurP74943 = (function (valminus74944)        {
        if ((("undefined")===((typeof valminus74944))))          {
          return false;
          };
        return (valminus74944.recurSigil===("recurSigilminus74939"));
        });
      var actualFunminus74942 = (function ()        {
        return (function (arguments)          {
          var G74946 = undefined;
          var G74947 = Array.prototype.slice.apply(arguments);
          G74946 = (function (arguments)            {
            var matchValminus74948 = G74947;
            if ((!((("object")===((typeof matchValminus74948))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus74948.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus74949 = Array.prototype.slice.call(matchValminus74948, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus74949))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus74949.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus74949[0];
            var matchArrayTailPartminus74950 = Array.prototype.slice.call(matchValminus74948, 1);
            var tl = matchArrayTailPartminus74950;
            return (((tl.length>0))?((hd-(moduleminus295baa4e1e.apply(currentModuleminus74720.plus, tl)))) : ((-(hd))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G74946))))            {
            return G74946;
            };
          G74946 = (function (arguments)            {
            var matchValminus74951 = G74947;
            var anythingElseminus74945 = matchValminus74951;
            throw ((("Match fail in hooves/operator-functions-- against: ")+anythingElseminus74945));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G74946))))            {
            return G74946;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (if (_> tl\.length 0) (_- hd (apply + tl)) (_- hd))) (anything-else-74945 (_throw (_+ ''Match fail in hooves/operator-functions-- against: '' anything-else-74945))))) for value ")+(JSON.stringify(G74947))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus74940 = actualFunminus74942.apply(this, arguments);
      while (recurP74943(returnValueminus74940))        {
        returnValueminus74940 = actualFunminus74942.apply(this, returnValueminus74940.args);
        };
      return returnValueminus74940;
      });
    currentModuleminus74720.times = (function ()      {
      var returnValueminus74975 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus74974",
          args:arguments
        };
        });
      var recurP74978 = (function (valminus74979)        {
        if ((("undefined")===((typeof valminus74979))))          {
          return false;
          };
        return (valminus74979.recurSigil===("recurSigilminus74974"));
        });
      var actualFunminus74977 = (function ()        {
        return (function (arguments)          {
          var G74981 = undefined;
          var G74982 = Array.prototype.slice.apply(arguments);
          G74981 = (function (arguments)            {
            var matchValminus74983 = G74982;
            if ((!((("object")===((typeof matchValminus74983))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus74983.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus74984 = Array.prototype.slice.call(matchValminus74983, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus74984))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus74984.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus74984[0];
            var matchArrayTailPartminus74985 = Array.prototype.slice.call(matchValminus74983, 1);
            var tl = matchArrayTailPartminus74985;
            var result = hd;
            for (i in (tl))              {
              result = (result*(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G74981))))            {
            return G74981;
            };
          G74981 = (function (arguments)            {
            var matchValminus74986 = G74982;
            var anythingElseminus74980 = matchValminus74986;
            throw ((("Match fail in hooves/operator-functions-* against: ")+anythingElseminus74980));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G74981))))            {
            return G74981;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result) (anything-else-74980 (_throw (_+ ''Match fail in hooves/operator-functions-* against: '' anything-else-74980))))) for value ")+(JSON.stringify(G74982))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus74975 = actualFunminus74977.apply(this, arguments);
      while (recurP74978(returnValueminus74975))        {
        returnValueminus74975 = actualFunminus74977.apply(this, returnValueminus74975.args);
        };
      return returnValueminus74975;
      });
    currentModuleminus74720.divide = (function ()      {
      var returnValueminus75010 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus75009",
          args:arguments
        };
        });
      var recurP75013 = (function (valminus75014)        {
        if ((("undefined")===((typeof valminus75014))))          {
          return false;
          };
        return (valminus75014.recurSigil===("recurSigilminus75009"));
        });
      var actualFunminus75012 = (function ()        {
        return (function (arguments)          {
          var G75016 = undefined;
          var G75017 = Array.prototype.slice.apply(arguments);
          G75016 = (function (arguments)            {
            var matchValminus75018 = G75017;
            if ((!((("object")===((typeof matchValminus75018))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus75018.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus75019 = Array.prototype.slice.call(matchValminus75018, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus75019))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus75019.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus75019[0];
            var matchArrayTailPartminus75020 = Array.prototype.slice.call(matchValminus75018, 1);
            var tl = matchArrayTailPartminus75020;
            return (hd/(moduleminus295baa4e1e.apply(currentModuleminus74720.times, tl)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G75016))))            {
            return G75016;
            };
          G75016 = (function (arguments)            {
            var matchValminus75021 = G75017;
            var anythingElseminus75015 = matchValminus75021;
            throw ((("Match fail in hooves/operator-functions-/ against: ")+anythingElseminus75015));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G75016))))            {
            return G75016;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_/ hd (apply * tl))) (anything-else-75015 (_throw (_+ ''Match fail in hooves/operator-functions-/ against: '' anything-else-75015))))) for value ")+(JSON.stringify(G75017))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus75010 = actualFunminus75012.apply(this, arguments);
      while (recurP75013(returnValueminus75010))        {
        returnValueminus75010 = actualFunminus75012.apply(this, returnValueminus75010.args);
        };
      return returnValueminus75010;
      });
    var defineExternalBinop = "macro - no dynamic value.";
    var defineExternalBinops = "macro - no dynamic value.";
    currentModuleminus74720.lessThan = (function (G75031, G75032)      {
      return (G75031<G75032);
      });
    currentModuleminus74720.lessThanequal = (function (G75058, G75059)      {
      return (G75058<=G75059);
      });
    currentModuleminus74720.greaterThan = (function (G75085, G75086)      {
      return (G75085>G75086);
      });
    currentModuleminus74720.greaterThanequal = (function (G75112, G75113)      {
      return (G75112>=G75113);
      });
    currentModuleminus74720.ampersand = (function (G75139, G75140)      {
      return (G75139&G75140);
      });
    currentModuleminus74720.pipe = (function (G75166, G75167)      {
      return (G75166|G75167);
      });
    currentModuleminus74720.equalequal = (function (G75193, G75194)      {
      return (G75193==G75194);
      });
    currentModuleminus74720.TripleEqualminus = (function (G75220, G75221)      {
      return (G75220===G75221);
      });
    currentModuleminus74720.modsign = (function (G75247, G75248)      {
      return (G75247%G75248);
      });
    currentModuleminus74720.caret = (function (G75274, G75275)      {
      return (G75274^G75275);
      });
    currentModuleminus74720.lessThanlessThan = (function (G75301, G75302)      {
      return (G75301<<G75302);
      });
    currentModuleminus74720.greaterThangreaterThan = (function (G75328, G75329)      {
      return (G75328>>G75329);
      });
    currentModuleminus74720.greaterThangreaterThangreaterThan = (function (G75355, G75356)      {
      return (G75355>>>G75356);
      });
    ;
    var ampersandampersand = "macro - no dynamic value.";
    var pipepipe = "macro - no dynamic value.";
    currentModuleminus74720.bang = (function (o)      {
      return (!(o));
      });
    var incr = "macro - no dynamic value.";
    var decr = "macro - no dynamic value.";
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus74720;
  }))