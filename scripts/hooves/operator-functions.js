define(["hooves/lisp-idioms"], (function (moduleminus295baa4e1e)  {
  var currentModuleminus334528 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus334528 = value;
    });
  ((function ()    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    // ("hooves/lisp-idioms" (:as apply funcall))
    ;
    currentModuleminus334528.plus = (function ()      {
      var returnValueminus334694 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus334693",
          args:arguments
        };
        });
      var recurP334697 = (function (valminus334698)        {
        if ((("undefined")===((typeof valminus334698))))          {
          return false;
          };
        return (valminus334698.recurSigil===("recurSigilminus334693"));
        });
      var actualFunminus334696 = (function ()        {
        return (function (arguments)          {
          var G334700 = undefined;
          var G334701 = Array.prototype.slice.apply(arguments);
          G334700 = (function (arguments)            {
            var matchValminus334702 = G334701;
            if ((!((matchValminus334702.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus334703 = Array.prototype.slice.call(matchValminus334702, 0, 1);
            if ((!((1===matchArraySimplePartminus334703.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus334703[0];
            var matchArrayTailPartminus334704 = Array.prototype.slice.call(matchValminus334702, 1);
            var tl = matchArrayTailPartminus334704;
            var result = hd;
            for (i in (tl))              {
              result = (result+(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G334700))))            {
            return G334700;
            };
          G334700 = (function (arguments)            {
            var matchValminus334705 = G334701;
            var anythingElseminus334699 = matchValminus334705;
            throw ((("Match fail in hooves/operator-functions-+ against: ")+anythingElseminus334699));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G334700))))            {
            return G334700;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array hd (tail tl)) (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result) (anything-else-334699 (_throw (_+ ''Match fail in hooves/operator-functions-+ against: '' anything-else-334699))))) for value ")+G334701));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus334694 = actualFunminus334696.apply(this, arguments);
      while (recurP334697(returnValueminus334694))        {
        returnValueminus334694 = actualFunminus334696.apply(this, returnValueminus334694.args);
        };
      return returnValueminus334694;
      });
    currentModuleminus334528.minus = (function ()      {
      var returnValueminus334729 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus334728",
          args:arguments
        };
        });
      var recurP334732 = (function (valminus334733)        {
        if ((("undefined")===((typeof valminus334733))))          {
          return false;
          };
        return (valminus334733.recurSigil===("recurSigilminus334728"));
        });
      var actualFunminus334731 = (function ()        {
        return (function (arguments)          {
          var G334735 = undefined;
          var G334736 = Array.prototype.slice.apply(arguments);
          G334735 = (function (arguments)            {
            var matchValminus334737 = G334736;
            if ((!((matchValminus334737.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus334738 = Array.prototype.slice.call(matchValminus334737, 0, 1);
            if ((!((1===matchArraySimplePartminus334738.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus334738[0];
            var matchArrayTailPartminus334739 = Array.prototype.slice.call(matchValminus334737, 1);
            var tl = matchArrayTailPartminus334739;
            return (hd-(moduleminus295baa4e1e.apply(currentModuleminus334528.plus, tl)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G334735))))            {
            return G334735;
            };
          G334735 = (function (arguments)            {
            var matchValminus334740 = G334736;
            var anythingElseminus334734 = matchValminus334740;
            throw ((("Match fail in hooves/operator-functions-- against: ")+anythingElseminus334734));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G334735))))            {
            return G334735;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array hd (tail tl)) (_- hd (apply + tl))) (anything-else-334734 (_throw (_+ ''Match fail in hooves/operator-functions-- against: '' anything-else-334734))))) for value ")+G334736));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus334729 = actualFunminus334731.apply(this, arguments);
      while (recurP334732(returnValueminus334729))        {
        returnValueminus334729 = actualFunminus334731.apply(this, returnValueminus334729.args);
        };
      return returnValueminus334729;
      });
    currentModuleminus334528.times = (function ()      {
      var returnValueminus334764 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus334763",
          args:arguments
        };
        });
      var recurP334767 = (function (valminus334768)        {
        if ((("undefined")===((typeof valminus334768))))          {
          return false;
          };
        return (valminus334768.recurSigil===("recurSigilminus334763"));
        });
      var actualFunminus334766 = (function ()        {
        return (function (arguments)          {
          var G334770 = undefined;
          var G334771 = Array.prototype.slice.apply(arguments);
          G334770 = (function (arguments)            {
            var matchValminus334772 = G334771;
            if ((!((matchValminus334772.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus334773 = Array.prototype.slice.call(matchValminus334772, 0, 1);
            if ((!((1===matchArraySimplePartminus334773.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus334773[0];
            var matchArrayTailPartminus334774 = Array.prototype.slice.call(matchValminus334772, 1);
            var tl = matchArrayTailPartminus334774;
            var result = hd;
            for (i in (tl))              {
              result = (result*(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G334770))))            {
            return G334770;
            };
          G334770 = (function (arguments)            {
            var matchValminus334775 = G334771;
            var anythingElseminus334769 = matchValminus334775;
            throw ((("Match fail in hooves/operator-functions-* against: ")+anythingElseminus334769));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G334770))))            {
            return G334770;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array hd (tail tl)) (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result) (anything-else-334769 (_throw (_+ ''Match fail in hooves/operator-functions-* against: '' anything-else-334769))))) for value ")+G334771));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus334764 = actualFunminus334766.apply(this, arguments);
      while (recurP334767(returnValueminus334764))        {
        returnValueminus334764 = actualFunminus334766.apply(this, returnValueminus334764.args);
        };
      return returnValueminus334764;
      });
    currentModuleminus334528.divide = (function ()      {
      var returnValueminus334799 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus334798",
          args:arguments
        };
        });
      var recurP334802 = (function (valminus334803)        {
        if ((("undefined")===((typeof valminus334803))))          {
          return false;
          };
        return (valminus334803.recurSigil===("recurSigilminus334798"));
        });
      var actualFunminus334801 = (function ()        {
        return (function (arguments)          {
          var G334805 = undefined;
          var G334806 = Array.prototype.slice.apply(arguments);
          G334805 = (function (arguments)            {
            var matchValminus334807 = G334806;
            if ((!((matchValminus334807.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus334808 = Array.prototype.slice.call(matchValminus334807, 0, 1);
            if ((!((1===matchArraySimplePartminus334808.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus334808[0];
            var matchArrayTailPartminus334809 = Array.prototype.slice.call(matchValminus334807, 1);
            var tl = matchArrayTailPartminus334809;
            return (hd/(moduleminus295baa4e1e.apply(currentModuleminus334528.times, tl)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G334805))))            {
            return G334805;
            };
          G334805 = (function (arguments)            {
            var matchValminus334810 = G334806;
            var anythingElseminus334804 = matchValminus334810;
            throw ((("Match fail in hooves/operator-functions-/ against: ")+anythingElseminus334804));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G334805))))            {
            return G334805;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array hd (tail tl)) (_/ hd (apply * tl))) (anything-else-334804 (_throw (_+ ''Match fail in hooves/operator-functions-/ against: '' anything-else-334804))))) for value ")+G334806));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus334799 = actualFunminus334801.apply(this, arguments);
      while (recurP334802(returnValueminus334799))        {
        returnValueminus334799 = actualFunminus334801.apply(this, returnValueminus334799.args);
        };
      return returnValueminus334799;
      });
    var defineExternalBinop = "macro - no dynamic value.";
    var defineExternalBinops = "macro - no dynamic value.";
    currentModuleminus334528.lessThan = (function (G334820, G334821)      {
      return (G334820<G334821);
      });
    currentModuleminus334528.lessThanequal = (function (G334847, G334848)      {
      return (G334847<=G334848);
      });
    currentModuleminus334528.greaterThan = (function (G334874, G334875)      {
      return (G334874>G334875);
      });
    currentModuleminus334528.greaterThanequal = (function (G334901, G334902)      {
      return (G334901>=G334902);
      });
    currentModuleminus334528.ampersand = (function (G334928, G334929)      {
      return (G334928&G334929);
      });
    currentModuleminus334528.pipe = (function (G334955, G334956)      {
      return (G334955|G334956);
      });
    currentModuleminus334528.equalequal = (function (G334982, G334983)      {
      return (G334982==G334983);
      });
    currentModuleminus334528.equalequalequal = (function (G335009, G335010)      {
      return (G335009===G335010);
      });
    currentModuleminus334528.modsign = (function (G335036, G335037)      {
      return (G335036%G335037);
      });
    currentModuleminus334528.caret = (function (G335063, G335064)      {
      return (G335063^G335064);
      });
    currentModuleminus334528.lessThanlessThan = (function (G335090, G335091)      {
      return (G335090<<G335091);
      });
    currentModuleminus334528.greaterThangreaterThan = (function (G335117, G335118)      {
      return (G335117>>G335118);
      });
    currentModuleminus334528.greaterThangreaterThangreaterThan = (function (G335144, G335145)      {
      return (G335144>>>G335145);
      });
    ;
    var ampersandampersand = "macro - no dynamic value.";
    var pipepipe = "macro - no dynamic value.";
    currentModuleminus334528.bang = (function (o)      {
      return (!(o));
      });
    var incr = "macro - no dynamic value.";
    var decr = "macro - no dynamic value.";
    }))();
  return currentModuleminus334528;
  }))