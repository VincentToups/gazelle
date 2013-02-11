define(["hooves/lisp-idioms"], (function (moduleminus295baa4e1e)  {
  var currentModuleminus22278 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus22278 = value;
    });
  (function (arguments)    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    // ("hooves/lisp-idioms" (:as apply funcall))
    ;
    currentModuleminus22278.plus = (function ()      {
      var returnValueminus22485 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus22484",
          args:arguments
        };
        });
      var recurP22488 = (function (valminus22489)        {
        if ((("undefined")===((typeof valminus22489))))          {
          return false;
          };
        return (valminus22489.recurSigil===("recurSigilminus22484"));
        });
      var actualFunminus22487 = (function ()        {
        return (function (arguments)          {
          var G22491 = undefined;
          var G22492 = Array.prototype.slice.apply(arguments);
          G22491 = (function (arguments)            {
            var matchValminus22493 = G22492;
            if ((!((("object")===((typeof matchValminus22493))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus22493.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus22494 = Array.prototype.slice.call(matchValminus22493, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus22494))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus22494.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus22494[0];
            var matchArrayTailPartminus22495 = Array.prototype.slice.call(matchValminus22493, 1);
            var tl = matchArrayTailPartminus22495;
            var result = hd;
            for (i in (tl))              {
              result = (result+(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G22491))))            {
            return G22491;
            };
          G22491 = (function (arguments)            {
            var matchValminus22496 = G22492;
            var anythingElseminus22490 = matchValminus22496;
            throw ((("Match fail in hooves/operator-functions-+ against: ")+anythingElseminus22490));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G22491))))            {
            return G22491;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result) (anything-else-22490 (_throw (_+ ''Match fail in hooves/operator-functions-+ against: '' anything-else-22490))))) for value ")+(JSON.stringify(G22492))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus22485 = actualFunminus22487.apply(this, arguments);
      while (recurP22488(returnValueminus22485))        {
        returnValueminus22485 = actualFunminus22487.apply(this, returnValueminus22485.args);
        };
      return returnValueminus22485;
      });
    currentModuleminus22278.minus = (function ()      {
      var returnValueminus22520 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus22519",
          args:arguments
        };
        });
      var recurP22523 = (function (valminus22524)        {
        if ((("undefined")===((typeof valminus22524))))          {
          return false;
          };
        return (valminus22524.recurSigil===("recurSigilminus22519"));
        });
      var actualFunminus22522 = (function ()        {
        return (function (arguments)          {
          var G22526 = undefined;
          var G22527 = Array.prototype.slice.apply(arguments);
          G22526 = (function (arguments)            {
            var matchValminus22528 = G22527;
            if ((!((("object")===((typeof matchValminus22528))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus22528.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus22529 = Array.prototype.slice.call(matchValminus22528, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus22529))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus22529.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus22529[0];
            var matchArrayTailPartminus22530 = Array.prototype.slice.call(matchValminus22528, 1);
            var tl = matchArrayTailPartminus22530;
            return (((tl.length>0))?((hd-(moduleminus295baa4e1e.apply(currentModuleminus22278.plus, tl)))) : ((-(hd))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G22526))))            {
            return G22526;
            };
          G22526 = (function (arguments)            {
            var matchValminus22531 = G22527;
            var anythingElseminus22525 = matchValminus22531;
            throw ((("Match fail in hooves/operator-functions-- against: ")+anythingElseminus22525));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G22526))))            {
            return G22526;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (if (_> tl\.length 0) (_- hd (apply + tl)) (_- hd))) (anything-else-22525 (_throw (_+ ''Match fail in hooves/operator-functions-- against: '' anything-else-22525))))) for value ")+(JSON.stringify(G22527))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus22520 = actualFunminus22522.apply(this, arguments);
      while (recurP22523(returnValueminus22520))        {
        returnValueminus22520 = actualFunminus22522.apply(this, returnValueminus22520.args);
        };
      return returnValueminus22520;
      });
    currentModuleminus22278.times = (function ()      {
      var returnValueminus22555 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus22554",
          args:arguments
        };
        });
      var recurP22558 = (function (valminus22559)        {
        if ((("undefined")===((typeof valminus22559))))          {
          return false;
          };
        return (valminus22559.recurSigil===("recurSigilminus22554"));
        });
      var actualFunminus22557 = (function ()        {
        return (function (arguments)          {
          var G22561 = undefined;
          var G22562 = Array.prototype.slice.apply(arguments);
          G22561 = (function (arguments)            {
            var matchValminus22563 = G22562;
            if ((!((("object")===((typeof matchValminus22563))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus22563.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus22564 = Array.prototype.slice.call(matchValminus22563, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus22564))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus22564.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus22564[0];
            var matchArrayTailPartminus22565 = Array.prototype.slice.call(matchValminus22563, 1);
            var tl = matchArrayTailPartminus22565;
            var result = hd;
            for (i in (tl))              {
              result = (result*(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G22561))))            {
            return G22561;
            };
          G22561 = (function (arguments)            {
            var matchValminus22566 = G22562;
            var anythingElseminus22560 = matchValminus22566;
            throw ((("Match fail in hooves/operator-functions-* against: ")+anythingElseminus22560));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G22561))))            {
            return G22561;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result) (anything-else-22560 (_throw (_+ ''Match fail in hooves/operator-functions-* against: '' anything-else-22560))))) for value ")+(JSON.stringify(G22562))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus22555 = actualFunminus22557.apply(this, arguments);
      while (recurP22558(returnValueminus22555))        {
        returnValueminus22555 = actualFunminus22557.apply(this, returnValueminus22555.args);
        };
      return returnValueminus22555;
      });
    currentModuleminus22278.divide = (function ()      {
      var returnValueminus22590 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus22589",
          args:arguments
        };
        });
      var recurP22593 = (function (valminus22594)        {
        if ((("undefined")===((typeof valminus22594))))          {
          return false;
          };
        return (valminus22594.recurSigil===("recurSigilminus22589"));
        });
      var actualFunminus22592 = (function ()        {
        return (function (arguments)          {
          var G22596 = undefined;
          var G22597 = Array.prototype.slice.apply(arguments);
          G22596 = (function (arguments)            {
            var matchValminus22598 = G22597;
            if ((!((("object")===((typeof matchValminus22598))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus22598.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus22599 = Array.prototype.slice.call(matchValminus22598, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus22599))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus22599.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus22599[0];
            var matchArrayTailPartminus22600 = Array.prototype.slice.call(matchValminus22598, 1);
            var tl = matchArrayTailPartminus22600;
            return (hd/(moduleminus295baa4e1e.apply(currentModuleminus22278.times, tl)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G22596))))            {
            return G22596;
            };
          G22596 = (function (arguments)            {
            var matchValminus22601 = G22597;
            var anythingElseminus22595 = matchValminus22601;
            throw ((("Match fail in hooves/operator-functions-/ against: ")+anythingElseminus22595));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G22596))))            {
            return G22596;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_/ hd (apply * tl))) (anything-else-22595 (_throw (_+ ''Match fail in hooves/operator-functions-/ against: '' anything-else-22595))))) for value ")+(JSON.stringify(G22597))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus22590 = actualFunminus22592.apply(this, arguments);
      while (recurP22593(returnValueminus22590))        {
        returnValueminus22590 = actualFunminus22592.apply(this, returnValueminus22590.args);
        };
      return returnValueminus22590;
      });
    var defineExternalBinop = "macro - no dynamic value.";
    var defineExternalBinops = "macro - no dynamic value.";
    currentModuleminus22278.lessThan = (function (G22611, G22612)      {
      return (G22611<G22612);
      });
    currentModuleminus22278.lessThanequal = (function (G22638, G22639)      {
      return (G22638<=G22639);
      });
    currentModuleminus22278.greaterThan = (function (G22665, G22666)      {
      return (G22665>G22666);
      });
    currentModuleminus22278.greaterThanequal = (function (G22692, G22693)      {
      return (G22692>=G22693);
      });
    currentModuleminus22278.ampersand = (function (G22719, G22720)      {
      return (G22719&G22720);
      });
    currentModuleminus22278.pipe = (function (G22746, G22747)      {
      return (G22746|G22747);
      });
    currentModuleminus22278.equalequal = (function (G22773, G22774)      {
      return (G22773==G22774);
      });
    currentModuleminus22278.TripleEqualminus = (function (G22800, G22801)      {
      return (G22800===G22801);
      });
    currentModuleminus22278.modsign = (function (G22827, G22828)      {
      return (G22827%G22828);
      });
    currentModuleminus22278.caret = (function (G22854, G22855)      {
      return (G22854^G22855);
      });
    currentModuleminus22278.lessThanlessThan = (function (G22881, G22882)      {
      return (G22881<<G22882);
      });
    currentModuleminus22278.greaterThangreaterThan = (function (G22908, G22909)      {
      return (G22908>>G22909);
      });
    currentModuleminus22278.greaterThangreaterThangreaterThan = (function (G22935, G22936)      {
      return (G22935>>>G22936);
      });
    ;
    var ampersandampersand = "macro - no dynamic value.";
    var pipepipe = "macro - no dynamic value.";
    currentModuleminus22278.bang = (function (o)      {
      return (!(o));
      });
    var incr = "macro - no dynamic value.";
    var decr = "macro - no dynamic value.";
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus22278;
  }))