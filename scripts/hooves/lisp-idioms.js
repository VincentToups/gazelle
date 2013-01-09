define([], (function ()  {
  var currentModuleminus43898 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus43898 = value;
    });
  ((function ()    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    currentModuleminus43898.map = (function (fun, anArray)      {
      var output = [];
      for (i in (anArray))        {
        output.push(fun(anArray[i]));
        };
      return output;
      });
    currentModuleminus43898.append = (function ()      {
      return Array.prototype.concat.apply([], Array.prototype.slice.apply(arguments));
      });
    currentModuleminus43898.filter = (function ()      {
      var returnValueminus43975 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus43974",
          args:arguments
        };
        });
      var recurP43978 = (function (valminus43979)        {
        if ((("undefined")===((typeof valminus43979))))          {
          return false;
          };
        return (valminus43979.recurSigil===("recurSigilminus43974"));
        });
      var actualFunminus43977 = (function ()        {
        return (function (arguments)          {
          var G43981 = undefined;
          var G43982 = Array.prototype.slice.apply(arguments);
          G43981 = (function (arguments)            {
            var matchValminus43983 = G43982;
            if ((!((3===matchValminus43983.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus43984 = matchValminus43983[0];
            var matchTempminus43985 = matchValminus43983[1];
            var matchTempminus43986 = matchValminus43983[2];
            var fun = matchTempminus43984;
            if ((!((0===matchTempminus43985.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((("undefined")===((typeof matchTempminus43986))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var acc = matchTempminus43986;
            return acc;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G43981))))            {
            return G43981;
            };
          G43981 = (function (arguments)            {
            var matchValminus43987 = G43982;
            if ((!((3===matchValminus43987.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus43988 = matchValminus43987[0];
            var matchTempminus43989 = matchValminus43987[1];
            var matchTempminus43990 = matchValminus43987[2];
            var fun = matchTempminus43988;
            if ((!((matchTempminus43989.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus43991 = Array.prototype.slice.call(matchTempminus43989, 0, 1);
            if ((!((1===matchArraySimplePartminus43991.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus43991[0];
            var matchArrayTailPartminus43992 = Array.prototype.slice.call(matchTempminus43989, 1);
            var tl = matchArrayTailPartminus43992;
            if ((("undefined")===((typeof matchTempminus43990))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var acc = matchTempminus43990;
            return ((fun(hd))?(recur(fun, tl, acc.concat([hd]))) : (recur(fun, tl, acc)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G43981))))            {
            return G43981;
            };
          G43981 = (function (arguments)            {
            var matchValminus43993 = G43982;
            var anythingElseminus43980 = matchValminus43993;
            throw ((("Match fail in hooves/lisp-idioms-filter against: ")+anythingElseminus43980));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G43981))))            {
            return G43981;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: fun [:] (defined acc)] acc) ([: fun [: hd (tail tl)] (defined acc)] (if (fun hd) (recur fun tl (\.\. acc (concat [: hd]))) (recur fun tl acc))) (anything-else-43980 (_throw (_+ ''Match fail in hooves/lisp-idioms-filter against: '' anything-else-43980))))) for value ")+(JSON.stringify(G43982))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus43975 = actualFunminus43977.apply(this, arguments);
      while (recurP43978(returnValueminus43975))        {
        returnValueminus43975 = actualFunminus43977.apply(this, returnValueminus43975.args);
        };
      return returnValueminus43975;
      });
    currentModuleminus43898.apply = (function (f, anArray)      {
      return f.apply(undefined, anArray);
      });
    currentModuleminus43898.funcall = (function ()      {
      var returnValueminus44039 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus44038",
          args:arguments
        };
        });
      var recurP44042 = (function (valminus44043)        {
        if ((("undefined")===((typeof valminus44043))))          {
          return false;
          };
        return (valminus44043.recurSigil===("recurSigilminus44038"));
        });
      var actualFunminus44041 = (function ()        {
        return (function (arguments)          {
          var G44045 = undefined;
          var G44046 = Array.prototype.slice.apply(arguments);
          G44045 = (function (arguments)            {
            var matchValminus44047 = G44046;
            if ((!((matchValminus44047.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus44048 = Array.prototype.slice.call(matchValminus44047, 0, 1);
            if ((!((1===matchArraySimplePartminus44048.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var f = matchArraySimplePartminus44048[0];
            var matchArrayTailPartminus44049 = Array.prototype.slice.call(matchValminus44047, 1);
            var args = matchArrayTailPartminus44049;
            return currentModuleminus43898.apply(f, args);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G44045))))            {
            return G44045;
            };
          G44045 = (function (arguments)            {
            var matchValminus44050 = G44046;
            var anythingElseminus44044 = matchValminus44050;
            throw ((("Match fail in hooves/lisp-idioms-funcall against: ")+anythingElseminus44044));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G44045))))            {
            return G44045;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: f (tail args)] (apply f args)) (anything-else-44044 (_throw (_+ ''Match fail in hooves/lisp-idioms-funcall against: '' anything-else-44044))))) for value ")+(JSON.stringify(G44046))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus44039 = actualFunminus44041.apply(this, arguments);
      while (recurP44042(returnValueminus44039))        {
        returnValueminus44039 = actualFunminus44041.apply(this, returnValueminus44039.args);
        };
      return returnValueminus44039;
      });
    var let = "macro - no dynamic value.";
    }))();
  return currentModuleminus43898;
  }))