define([], (function ()  {
  var currentModuleminus129771 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus129771 = value;
    });
  (function (arguments)    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    currentModuleminus129771.map = (function (fun, anArray)      {
      var output = [];
      for (i in (anArray))        {
        output.push(fun(anArray[i]));
        };
      return output;
      });
    currentModuleminus129771.append = (function ()      {
      return Array.prototype.concat.apply([], Array.prototype.slice.apply(arguments));
      });
    currentModuleminus129771.filter = (function ()      {
      var returnValueminus129848 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus129847",
          args:arguments
        };
        });
      var recurP129851 = (function (valminus129852)        {
        if ((("undefined")===((typeof valminus129852))))          {
          return false;
          };
        return (valminus129852.recurSigil===("recurSigilminus129847"));
        });
      var actualFunminus129850 = (function ()        {
        return (function (arguments)          {
          var G129854 = undefined;
          var G129855 = Array.prototype.slice.apply(arguments);
          G129854 = (function (arguments)            {
            var matchValminus129856 = G129855;
            if ((!((("object")===((typeof matchValminus129856))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchValminus129856.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus129857 = matchValminus129856[0];
            var matchTempminus129858 = matchValminus129856[1];
            var matchTempminus129859 = matchValminus129856[2];
            var fun = matchTempminus129857;
            if ((!((("object")===((typeof matchTempminus129858))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchTempminus129858.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((("undefined")===((typeof matchTempminus129859))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var acc = matchTempminus129859;
            return acc;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G129854))))            {
            return G129854;
            };
          G129854 = (function (arguments)            {
            var matchValminus129860 = G129855;
            if ((!((("object")===((typeof matchValminus129860))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchValminus129860.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus129861 = matchValminus129860[0];
            var matchTempminus129862 = matchValminus129860[1];
            var matchTempminus129863 = matchValminus129860[2];
            var fun = matchTempminus129861;
            if ((!((("object")===((typeof matchTempminus129862))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchTempminus129862.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus129864 = Array.prototype.slice.call(matchTempminus129862, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus129864))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus129864.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus129864[0];
            var matchArrayTailPartminus129865 = Array.prototype.slice.call(matchTempminus129862, 1);
            var tl = matchArrayTailPartminus129865;
            if ((("undefined")===((typeof matchTempminus129863))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var acc = matchTempminus129863;
            return ((fun(hd))?(recur(fun, tl, acc.concat([hd]))) : (recur(fun, tl, acc)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G129854))))            {
            return G129854;
            };
          G129854 = (function (arguments)            {
            var matchValminus129866 = G129855;
            var anythingElseminus129853 = matchValminus129866;
            throw ((("Match fail in hooves/lisp-idioms-filter against: ")+anythingElseminus129853));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G129854))))            {
            return G129854;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: fun [:] (defined acc)] acc) ([: fun [: hd (tail tl)] (defined acc)] (if (fun hd) (recur fun tl (\.\. acc (concat [: hd]))) (recur fun tl acc))) (anything-else-129853 (_throw (_+ ''Match fail in hooves/lisp-idioms-filter against: '' anything-else-129853))))) for value ")+(JSON.stringify(G129855))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus129848 = actualFunminus129850.apply(this, arguments);
      while (recurP129851(returnValueminus129848))        {
        returnValueminus129848 = actualFunminus129850.apply(this, returnValueminus129848.args);
        };
      return returnValueminus129848;
      });
    currentModuleminus129771.apply = (function (f, anArray)      {
      return f.apply(undefined, anArray);
      });
    currentModuleminus129771.funcall = (function ()      {
      var returnValueminus129912 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus129911",
          args:arguments
        };
        });
      var recurP129915 = (function (valminus129916)        {
        if ((("undefined")===((typeof valminus129916))))          {
          return false;
          };
        return (valminus129916.recurSigil===("recurSigilminus129911"));
        });
      var actualFunminus129914 = (function ()        {
        return (function (arguments)          {
          var G129918 = undefined;
          var G129919 = Array.prototype.slice.apply(arguments);
          G129918 = (function (arguments)            {
            var matchValminus129920 = G129919;
            if ((!((("object")===((typeof matchValminus129920))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus129920.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus129921 = Array.prototype.slice.call(matchValminus129920, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus129921))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus129921.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var f = matchArraySimplePartminus129921[0];
            var matchArrayTailPartminus129922 = Array.prototype.slice.call(matchValminus129920, 1);
            var args = matchArrayTailPartminus129922;
            return currentModuleminus129771.apply(f, args);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G129918))))            {
            return G129918;
            };
          G129918 = (function (arguments)            {
            var matchValminus129923 = G129919;
            var anythingElseminus129917 = matchValminus129923;
            throw ((("Match fail in hooves/lisp-idioms-funcall against: ")+anythingElseminus129917));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G129918))))            {
            return G129918;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: f (tail args)] (apply f args)) (anything-else-129917 (_throw (_+ ''Match fail in hooves/lisp-idioms-funcall against: '' anything-else-129917))))) for value ")+(JSON.stringify(G129919))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus129912 = actualFunminus129914.apply(this, arguments);
      while (recurP129915(returnValueminus129912))        {
        returnValueminus129912 = actualFunminus129914.apply(this, returnValueminus129912.args);
        };
      return returnValueminus129912;
      });
    var let = "macro - no dynamic value.";
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus129771;
  }))