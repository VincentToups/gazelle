define(["hooves/lisp-idioms"], (function (moduleminus295baa4e1e)  {
  var currentModuleminus13379 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus13379 = value;
    });
  (function (arguments)    {
    // define+
    // macro - no dynamic value.
    ;
    // define-macro+
    // macro - no dynamic value.
    ;
    // define-pattern+
    // macro - no dynamic value.
    ;
    // ("hooves/lisp-idioms" (:as apply funcall))
    ;
    currentModuleminus13379.plus = (function ()      {
      var returnValueminus13588 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus13587",
          args:arguments
        };
        });
      var recurP13591 = (function (valminus13592)        {
        if ((("undefined")===((typeof valminus13592))))          {
          return false;
          };
        return (valminus13592.recurSigil===("recurSigilminus13587"));
        });
      var actualFunminus13590 = (function ()        {
        return (function (arguments)          {
          var G13594 = undefined;
          var G13595 = Array.prototype.slice.apply(arguments);
          G13594 = (function (arguments)            {
            var matchValminus13596 = G13595;
            if ((!((("object")===((typeof matchValminus13596))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus13596.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus13597 = Array.prototype.slice.call(matchValminus13596, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus13597))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus13597.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus13597[0];
            var matchArrayTailPartminus13598 = Array.prototype.slice.call(matchValminus13596, 1);
            var tl = matchArrayTailPartminus13598;
            var result = hd;
            for (i in (tl))              {
              result = (result+(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G13594))))            {
            return G13594;
            };
          G13594 = (function (arguments)            {
            var matchValminus13599 = G13595;
            var anythingElseminus13593 = matchValminus13599;
            throw ((("Match fail in hooves/operator-functions-+ against: ")+anythingElseminus13593));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G13594))))            {
            return G13594;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result) (anything-else-13593 (_throw (_+ ''Match fail in hooves/operator-functions-+ against: '' anything-else-13593))))) for value ")+(JSON.stringify(G13595))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus13588 = actualFunminus13590.apply(this, arguments);
      while (recurP13591(returnValueminus13588))        {
        returnValueminus13588 = actualFunminus13590.apply(this, returnValueminus13588.args);
        };
      return returnValueminus13588;
      });
    currentModuleminus13379.minus = (function ()      {
      var returnValueminus13623 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus13622",
          args:arguments
        };
        });
      var recurP13626 = (function (valminus13627)        {
        if ((("undefined")===((typeof valminus13627))))          {
          return false;
          };
        return (valminus13627.recurSigil===("recurSigilminus13622"));
        });
      var actualFunminus13625 = (function ()        {
        return (function (arguments)          {
          var G13629 = undefined;
          var G13630 = Array.prototype.slice.apply(arguments);
          G13629 = (function (arguments)            {
            var matchValminus13631 = G13630;
            if ((!((("object")===((typeof matchValminus13631))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus13631.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus13632 = Array.prototype.slice.call(matchValminus13631, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus13632))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus13632.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus13632[0];
            var matchArrayTailPartminus13633 = Array.prototype.slice.call(matchValminus13631, 1);
            var tl = matchArrayTailPartminus13633;
            return (((tl.length>0))?((hd-(moduleminus295baa4e1e.apply(currentModuleminus13379.plus, tl)))) : ((-(hd))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G13629))))            {
            return G13629;
            };
          G13629 = (function (arguments)            {
            var matchValminus13634 = G13630;
            var anythingElseminus13628 = matchValminus13634;
            throw ((("Match fail in hooves/operator-functions-- against: ")+anythingElseminus13628));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G13629))))            {
            return G13629;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (if (_> tl\.length 0) (_- hd (apply + tl)) (_- hd))) (anything-else-13628 (_throw (_+ ''Match fail in hooves/operator-functions-- against: '' anything-else-13628))))) for value ")+(JSON.stringify(G13630))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus13623 = actualFunminus13625.apply(this, arguments);
      while (recurP13626(returnValueminus13623))        {
        returnValueminus13623 = actualFunminus13625.apply(this, returnValueminus13623.args);
        };
      return returnValueminus13623;
      });
    currentModuleminus13379.times = (function ()      {
      var returnValueminus13658 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus13657",
          args:arguments
        };
        });
      var recurP13661 = (function (valminus13662)        {
        if ((("undefined")===((typeof valminus13662))))          {
          return false;
          };
        return (valminus13662.recurSigil===("recurSigilminus13657"));
        });
      var actualFunminus13660 = (function ()        {
        return (function (arguments)          {
          var G13664 = undefined;
          var G13665 = Array.prototype.slice.apply(arguments);
          G13664 = (function (arguments)            {
            var matchValminus13666 = G13665;
            if ((!((("object")===((typeof matchValminus13666))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus13666.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus13667 = Array.prototype.slice.call(matchValminus13666, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus13667))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus13667.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus13667[0];
            var matchArrayTailPartminus13668 = Array.prototype.slice.call(matchValminus13666, 1);
            var tl = matchArrayTailPartminus13668;
            var result = hd;
            for (i in (tl))              {
              result = (result*(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G13664))))            {
            return G13664;
            };
          G13664 = (function (arguments)            {
            var matchValminus13669 = G13665;
            var anythingElseminus13663 = matchValminus13669;
            throw ((("Match fail in hooves/operator-functions-* against: ")+anythingElseminus13663));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G13664))))            {
            return G13664;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result) (anything-else-13663 (_throw (_+ ''Match fail in hooves/operator-functions-* against: '' anything-else-13663))))) for value ")+(JSON.stringify(G13665))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus13658 = actualFunminus13660.apply(this, arguments);
      while (recurP13661(returnValueminus13658))        {
        returnValueminus13658 = actualFunminus13660.apply(this, returnValueminus13658.args);
        };
      return returnValueminus13658;
      });
    currentModuleminus13379.divide = (function ()      {
      var returnValueminus13693 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus13692",
          args:arguments
        };
        });
      var recurP13696 = (function (valminus13697)        {
        if ((("undefined")===((typeof valminus13697))))          {
          return false;
          };
        return (valminus13697.recurSigil===("recurSigilminus13692"));
        });
      var actualFunminus13695 = (function ()        {
        return (function (arguments)          {
          var G13699 = undefined;
          var G13700 = Array.prototype.slice.apply(arguments);
          G13699 = (function (arguments)            {
            var matchValminus13701 = G13700;
            if ((!((("object")===((typeof matchValminus13701))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus13701.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus13702 = Array.prototype.slice.call(matchValminus13701, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus13702))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus13702.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus13702[0];
            var matchArrayTailPartminus13703 = Array.prototype.slice.call(matchValminus13701, 1);
            var tl = matchArrayTailPartminus13703;
            return (hd/(moduleminus295baa4e1e.apply(currentModuleminus13379.times, tl)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G13699))))            {
            return G13699;
            };
          G13699 = (function (arguments)            {
            var matchValminus13704 = G13700;
            var anythingElseminus13698 = matchValminus13704;
            throw ((("Match fail in hooves/operator-functions-/ against: ")+anythingElseminus13698));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G13699))))            {
            return G13699;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_/ hd (apply * tl))) (anything-else-13698 (_throw (_+ ''Match fail in hooves/operator-functions-/ against: '' anything-else-13698))))) for value ")+(JSON.stringify(G13700))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus13693 = actualFunminus13695.apply(this, arguments);
      while (recurP13696(returnValueminus13693))        {
        returnValueminus13693 = actualFunminus13695.apply(this, returnValueminus13693.args);
        };
      return returnValueminus13693;
      });
    // define-external-binop
    // macro - no dynamic value.
    ;
    // define-external-binops
    // macro - no dynamic value.
    ;
    currentModuleminus13379.lessThan = (function (G13714, G13715)      {
      return (G13714<G13715);
      });
    currentModuleminus13379.lessThanequal = (function (G13741, G13742)      {
      return (G13741<=G13742);
      });
    currentModuleminus13379.greaterThan = (function (G13768, G13769)      {
      return (G13768>G13769);
      });
    currentModuleminus13379.greaterThanequal = (function (G13795, G13796)      {
      return (G13795>=G13796);
      });
    currentModuleminus13379.ampersand = (function (G13822, G13823)      {
      return (G13822&G13823);
      });
    currentModuleminus13379.pipe = (function (G13849, G13850)      {
      return (G13849|G13850);
      });
    currentModuleminus13379.equalequal = (function (G13876, G13877)      {
      return (G13876==G13877);
      });
    currentModuleminus13379.TripleEqualminus = (function (G13903, G13904)      {
      return (G13903===G13904);
      });
    currentModuleminus13379.modsign = (function (G13930, G13931)      {
      return (G13930%G13931);
      });
    currentModuleminus13379.caret = (function (G13957, G13958)      {
      return (G13957^G13958);
      });
    currentModuleminus13379.lessThanlessThan = (function (G13984, G13985)      {
      return (G13984<<G13985);
      });
    currentModuleminus13379.greaterThangreaterThan = (function (G14011, G14012)      {
      return (G14011>>G14012);
      });
    currentModuleminus13379.greaterThangreaterThangreaterThan = (function (G14038, G14039)      {
      return (G14038>>>G14039);
      });
    ;
    // &&
    // macro - no dynamic value.
    ;
    // ||
    // macro - no dynamic value.
    ;
    currentModuleminus13379.bang = (function (o)      {
      return (!(o));
      });
    // incr
    // macro - no dynamic value.
    ;
    return // decr
    // macro - no dynamic value.
    ;
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus13379;
  }))