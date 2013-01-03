((define))(["hooves/lisp-idioms"], (function (moduleminus295baa4e1e)  {
  var currentModuleminus83598 = {    
    
  };
  ((function ()    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    "(\"hooves/lisp-idioms\" (:as apply funcall))";
    currentModuleminus83598.plus = (function ()      {
      var returnValueminus83762 = undefined;
      var recur = (function ()        {
        return ({          
          recurSigil:"recurSigilminus83761",
          args:arguments
        });
        });
      var recurP83765 = (function (valminus83766)        {
        return (((valminus83766.recurSigil)===("recurSigilminus83761")));
        });
      var actualFunminus83764 = (function ()        {
        return ((function (arguments)          {
          var G83768 = undefined;
          var G83769 = Array.prototype.slice.apply(arguments);
          G83768 = (function (arguments)            {
            var aMatchArray83770 = G83769;
            if ((((!(((aMatchArray83770.length)>=1))))||((!((aMatchArray83770 instanceof Array))))))              {
              return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
              };
            var hd = aMatchArray83770[0];
            var tl = Array.prototype.slice.call(aMatchArray83770, 1);
            var result = hd;
            for (i in (tl))              {
              result = (result+(tl[i]));
              };
            return (result);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G83768))))            {
            return (G83768);
            };
          G83768 = (function (arguments, anythingElseminus83767)            {
            throw ((("Match fail in hooves/operator-functions-+ against: ")+anythingElseminus83767));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G83769);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G83768))))            {
            return (G83768);
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array hd (tail tl)) (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result) (anything-else-83767 (_throw (_+ ''Match fail in hooves/operator-functions-+ against: '' anything-else-83767))))) for value ")+G83769));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
        });
      returnValueminus83762 = actualFunminus83764.apply(this, arguments);
      while (recurP83765(returnValueminus83762))        {
        returnValueminus83762 = actualFunminus83764.apply(this, returnValueminus83762.args);
        };
      return (returnValueminus83762);
      });
    currentModuleminus83598.minus = (function ()      {
      var returnValueminus83794 = undefined;
      var recur = (function ()        {
        return ({          
          recurSigil:"recurSigilminus83793",
          args:arguments
        });
        });
      var recurP83797 = (function (valminus83798)        {
        return (((valminus83798.recurSigil)===("recurSigilminus83793")));
        });
      var actualFunminus83796 = (function ()        {
        return ((function (arguments)          {
          var G83800 = undefined;
          var G83801 = Array.prototype.slice.apply(arguments);
          G83800 = (function (arguments)            {
            var aMatchArray83802 = G83801;
            if ((((!(((aMatchArray83802.length)>=1))))||((!((aMatchArray83802 instanceof Array))))))              {
              return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
              };
            var hd = aMatchArray83802[0];
            var tl = Array.prototype.slice.call(aMatchArray83802, 1);
            return ((hd-((moduleminus295baa4e1e.apply)(currentModuleminus83598.plus, tl))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G83800))))            {
            return (G83800);
            };
          G83800 = (function (arguments, anythingElseminus83799)            {
            throw ((("Match fail in hooves/operator-functions-- against: ")+anythingElseminus83799));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G83801);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G83800))))            {
            return (G83800);
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array hd (tail tl)) (_- hd (apply + tl))) (anything-else-83799 (_throw (_+ ''Match fail in hooves/operator-functions-- against: '' anything-else-83799))))) for value ")+G83801));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
        });
      returnValueminus83794 = actualFunminus83796.apply(this, arguments);
      while (recurP83797(returnValueminus83794))        {
        returnValueminus83794 = actualFunminus83796.apply(this, returnValueminus83794.args);
        };
      return (returnValueminus83794);
      });
    currentModuleminus83598.times = (function ()      {
      var returnValueminus83826 = undefined;
      var recur = (function ()        {
        return ({          
          recurSigil:"recurSigilminus83825",
          args:arguments
        });
        });
      var recurP83829 = (function (valminus83830)        {
        return (((valminus83830.recurSigil)===("recurSigilminus83825")));
        });
      var actualFunminus83828 = (function ()        {
        return ((function (arguments)          {
          var G83832 = undefined;
          var G83833 = Array.prototype.slice.apply(arguments);
          G83832 = (function (arguments)            {
            var aMatchArray83834 = G83833;
            if ((((!(((aMatchArray83834.length)>=1))))||((!((aMatchArray83834 instanceof Array))))))              {
              return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
              };
            var hd = aMatchArray83834[0];
            var tl = Array.prototype.slice.call(aMatchArray83834, 1);
            var result = hd;
            for (i in (tl))              {
              result = (result*(tl[i]));
              };
            return (result);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G83832))))            {
            return (G83832);
            };
          G83832 = (function (arguments, anythingElseminus83831)            {
            throw ((("Match fail in hooves/operator-functions-* against: ")+anythingElseminus83831));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G83833);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G83832))))            {
            return (G83832);
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array hd (tail tl)) (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result) (anything-else-83831 (_throw (_+ ''Match fail in hooves/operator-functions-* against: '' anything-else-83831))))) for value ")+G83833));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
        });
      returnValueminus83826 = actualFunminus83828.apply(this, arguments);
      while (recurP83829(returnValueminus83826))        {
        returnValueminus83826 = actualFunminus83828.apply(this, returnValueminus83826.args);
        };
      return (returnValueminus83826);
      });
    currentModuleminus83598.divide = (function ()      {
      var returnValueminus83858 = undefined;
      var recur = (function ()        {
        return ({          
          recurSigil:"recurSigilminus83857",
          args:arguments
        });
        });
      var recurP83861 = (function (valminus83862)        {
        return (((valminus83862.recurSigil)===("recurSigilminus83857")));
        });
      var actualFunminus83860 = (function ()        {
        return ((function (arguments)          {
          var G83864 = undefined;
          var G83865 = Array.prototype.slice.apply(arguments);
          G83864 = (function (arguments)            {
            var aMatchArray83866 = G83865;
            if ((((!(((aMatchArray83866.length)>=1))))||((!((aMatchArray83866 instanceof Array))))))              {
              return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
              };
            var hd = aMatchArray83866[0];
            var tl = Array.prototype.slice.call(aMatchArray83866, 1);
            return ((hd/((moduleminus295baa4e1e.apply)(currentModuleminus83598.times, tl))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G83864))))            {
            return (G83864);
            };
          G83864 = (function (arguments, anythingElseminus83863)            {
            throw ((("Match fail in hooves/operator-functions-/ against: ")+anythingElseminus83863));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G83865);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G83864))))            {
            return (G83864);
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array hd (tail tl)) (_/ hd (apply * tl))) (anything-else-83863 (_throw (_+ ''Match fail in hooves/operator-functions-/ against: '' anything-else-83863))))) for value ")+G83865));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
        });
      returnValueminus83858 = actualFunminus83860.apply(this, arguments);
      while (recurP83861(returnValueminus83858))        {
        returnValueminus83858 = actualFunminus83860.apply(this, returnValueminus83858.args);
        };
      return (returnValueminus83858);
      });
    var defineExternalBinop = "macro - no dynamic value.";
    var defineExternalBinops = "macro - no dynamic value.";
    currentModuleminus83598.lessThan = (function (G83876, G83877)      {
      return ((G83876<G83877));
      });
    currentModuleminus83598.lessThanequal = (function (G83903, G83904)      {
      return ((G83903<=G83904));
      });
    currentModuleminus83598.greaterThan = (function (G83930, G83931)      {
      return ((G83930>G83931));
      });
    currentModuleminus83598.greaterThanequal = (function (G83957, G83958)      {
      return ((G83957>=G83958));
      });
    currentModuleminus83598.ampersand = (function (G83984, G83985)      {
      return ((G83984&G83985));
      });
    currentModuleminus83598.pipe = (function (G84011, G84012)      {
      return ((G84011|G84012));
      });
    currentModuleminus83598.equalequal = (function (G84038, G84039)      {
      return ((G84038==G84039));
      });
    currentModuleminus83598.equalequalequal = (function (G84065, G84066)      {
      return ((G84065===G84066));
      });
    currentModuleminus83598.modsign = (function (G84092, G84093)      {
      return ((G84092%G84093));
      });
    currentModuleminus83598.caret = (function (G84119, G84120)      {
      return ((G84119^G84120));
      });
    currentModuleminus83598.lessThanlessThan = (function (G84146, G84147)      {
      return ((G84146<<G84147));
      });
    currentModuleminus83598.greaterThangreaterThan = (function (G84173, G84174)      {
      return ((G84173>>G84174));
      });
    currentModuleminus83598.greaterThangreaterThangreaterThan = (function (G84200, G84201)      {
      return ((G84200>>>G84201));
      });
    ;
    var ampersandampersand = "macro - no dynamic value.";
    var pipepipe = "macro - no dynamic value.";
    var incr = "macro - no dynamic value.";
    var decr = "macro - no dynamic value.";
    }))();
  return (currentModuleminus83598);
  }))