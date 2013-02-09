define([], (function ()  {
  var currentModuleminus74723 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus74723 = value;
    });
  (function (arguments)    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    currentModuleminus74723.map = (function (fun, anArray)      {
      var output = [];
      for (i in (anArray))        {
        output.push(fun(anArray[i]));
        };
      return output;
      });
    currentModuleminus74723.append = (function ()      {
      return Array.prototype.concat.apply([], Array.prototype.slice.apply(arguments));
      });
    currentModuleminus74723.filter = (function ()      {
      var returnValueminus74800 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus74799",
          args:arguments
        };
        });
      var recurP74803 = (function (valminus74804)        {
        if ((("undefined")===((typeof valminus74804))))          {
          return false;
          };
        return (valminus74804.recurSigil===("recurSigilminus74799"));
        });
      var actualFunminus74802 = (function ()        {
        return (function (arguments)          {
          var G74806 = undefined;
          var G74807 = Array.prototype.slice.apply(arguments);
          G74806 = (function (arguments)            {
            var matchValminus74808 = G74807;
            if ((!((("object")===((typeof matchValminus74808))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchValminus74808.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus74809 = matchValminus74808[0];
            var matchTempminus74810 = matchValminus74808[1];
            var matchTempminus74811 = matchValminus74808[2];
            var fun = matchTempminus74809;
            if ((!((("object")===((typeof matchTempminus74810))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchTempminus74810.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((("undefined")===((typeof matchTempminus74811))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var acc = matchTempminus74811;
            return acc;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G74806))))            {
            return G74806;
            };
          G74806 = (function (arguments)            {
            var matchValminus74812 = G74807;
            if ((!((("object")===((typeof matchValminus74812))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchValminus74812.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus74813 = matchValminus74812[0];
            var matchTempminus74814 = matchValminus74812[1];
            var matchTempminus74815 = matchValminus74812[2];
            var fun = matchTempminus74813;
            if ((!((("object")===((typeof matchTempminus74814))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchTempminus74814.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus74816 = Array.prototype.slice.call(matchTempminus74814, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus74816))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus74816.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus74816[0];
            var matchArrayTailPartminus74817 = Array.prototype.slice.call(matchTempminus74814, 1);
            var tl = matchArrayTailPartminus74817;
            if ((("undefined")===((typeof matchTempminus74815))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var acc = matchTempminus74815;
            return ((fun(hd))?(recur(fun, tl, acc.concat([hd]))) : (recur(fun, tl, acc)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G74806))))            {
            return G74806;
            };
          G74806 = (function (arguments)            {
            var matchValminus74818 = G74807;
            var anythingElseminus74805 = matchValminus74818;
            throw ((("Match fail in hooves/lisp-idioms-filter against: ")+anythingElseminus74805));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G74806))))            {
            return G74806;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: fun [:] (defined acc)] acc) ([: fun [: hd (tail tl)] (defined acc)] (if (fun hd) (recur fun tl (\.\. acc (concat [: hd]))) (recur fun tl acc))) (anything-else-74805 (_throw (_+ ''Match fail in hooves/lisp-idioms-filter against: '' anything-else-74805))))) for value ")+(JSON.stringify(G74807))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus74800 = actualFunminus74802.apply(this, arguments);
      while (recurP74803(returnValueminus74800))        {
        returnValueminus74800 = actualFunminus74802.apply(this, returnValueminus74800.args);
        };
      return returnValueminus74800;
      });
    currentModuleminus74723.apply = (function (f, anArray)      {
      return f.apply(undefined, anArray);
      });
    currentModuleminus74723.funcall = (function ()      {
      var returnValueminus74864 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus74863",
          args:arguments
        };
        });
      var recurP74867 = (function (valminus74868)        {
        if ((("undefined")===((typeof valminus74868))))          {
          return false;
          };
        return (valminus74868.recurSigil===("recurSigilminus74863"));
        });
      var actualFunminus74866 = (function ()        {
        return (function (arguments)          {
          var G74870 = undefined;
          var G74871 = Array.prototype.slice.apply(arguments);
          G74870 = (function (arguments)            {
            var matchValminus74872 = G74871;
            if ((!((("object")===((typeof matchValminus74872))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus74872.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus74873 = Array.prototype.slice.call(matchValminus74872, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus74873))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus74873.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var f = matchArraySimplePartminus74873[0];
            var matchArrayTailPartminus74874 = Array.prototype.slice.call(matchValminus74872, 1);
            var args = matchArrayTailPartminus74874;
            return currentModuleminus74723.apply(f, args);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G74870))))            {
            return G74870;
            };
          G74870 = (function (arguments)            {
            var matchValminus74875 = G74871;
            var anythingElseminus74869 = matchValminus74875;
            throw ((("Match fail in hooves/lisp-idioms-funcall against: ")+anythingElseminus74869));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G74870))))            {
            return G74870;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: f (tail args)] (apply f args)) (anything-else-74869 (_throw (_+ ''Match fail in hooves/lisp-idioms-funcall against: '' anything-else-74869))))) for value ")+(JSON.stringify(G74871))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus74864 = actualFunminus74866.apply(this, arguments);
      while (recurP74867(returnValueminus74864))        {
        returnValueminus74864 = actualFunminus74866.apply(this, returnValueminus74864.args);
        };
      return returnValueminus74864;
      });
    var let = "macro - no dynamic value.";
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus74723;
  }))