define(["hooves/lisp-idioms"], (function (moduleminus295baa4e1e)  {
  var currentModuleminus30297 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus30297 = value;
    });
  ((function ()    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    // ("hooves/lisp-idioms" (:as apply funcall))
    ;
    currentModuleminus30297.plus = (function ()      {
      var returnValueminus30460 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus30459",
          args:arguments
        };
        });
      var recurP30463 = (function (valminus30464)        {
        if ((("undefined")===((typeof valminus30464))))          {
          return false;
          };
        return (valminus30464.recurSigil===("recurSigilminus30459"));
        });
      var actualFunminus30462 = (function ()        {
        return (function (arguments)          {
          var G30466 = undefined;
          var G30467 = Array.prototype.slice.apply(arguments);
          G30466 = (function (arguments)            {
            var matchValminus30468 = G30467;
            if ((!((matchValminus30468.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus30469 = Array.prototype.slice.call(matchValminus30468, 0, 1);
            if ((!((1===matchArraySimplePartminus30469.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus30469[0];
            var matchArrayTailPartminus30470 = Array.prototype.slice.call(matchValminus30468, 1);
            var tl = matchArrayTailPartminus30470;
            var result = hd;
            for (i in (tl))              {
              result = (result+(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30466))))            {
            return G30466;
            };
          G30466 = (function (arguments)            {
            var matchValminus30471 = G30467;
            var anythingElseminus30465 = matchValminus30471;
            throw ((("Match fail in hooves/operator-functions-+ against: ")+anythingElseminus30465));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30466))))            {
            return G30466;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array hd (tail tl)) (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result) (anything-else-30465 (_throw (_+ ''Match fail in hooves/operator-functions-+ against: '' anything-else-30465))))) for value ")+G30467));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus30460 = actualFunminus30462.apply(this, arguments);
      while (recurP30463(returnValueminus30460))        {
        returnValueminus30460 = actualFunminus30462.apply(this, returnValueminus30460.args);
        };
      return returnValueminus30460;
      });
    currentModuleminus30297.minus = (function ()      {
      var returnValueminus30495 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus30494",
          args:arguments
        };
        });
      var recurP30498 = (function (valminus30499)        {
        if ((("undefined")===((typeof valminus30499))))          {
          return false;
          };
        return (valminus30499.recurSigil===("recurSigilminus30494"));
        });
      var actualFunminus30497 = (function ()        {
        return (function (arguments)          {
          var G30501 = undefined;
          var G30502 = Array.prototype.slice.apply(arguments);
          G30501 = (function (arguments)            {
            var matchValminus30503 = G30502;
            if ((!((matchValminus30503.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus30504 = Array.prototype.slice.call(matchValminus30503, 0, 1);
            if ((!((1===matchArraySimplePartminus30504.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus30504[0];
            var matchArrayTailPartminus30505 = Array.prototype.slice.call(matchValminus30503, 1);
            var tl = matchArrayTailPartminus30505;
            return (hd-(moduleminus295baa4e1e.apply(currentModuleminus30297.plus, tl)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30501))))            {
            return G30501;
            };
          G30501 = (function (arguments)            {
            var matchValminus30506 = G30502;
            var anythingElseminus30500 = matchValminus30506;
            throw ((("Match fail in hooves/operator-functions-- against: ")+anythingElseminus30500));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30501))))            {
            return G30501;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array hd (tail tl)) (_- hd (apply + tl))) (anything-else-30500 (_throw (_+ ''Match fail in hooves/operator-functions-- against: '' anything-else-30500))))) for value ")+G30502));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus30495 = actualFunminus30497.apply(this, arguments);
      while (recurP30498(returnValueminus30495))        {
        returnValueminus30495 = actualFunminus30497.apply(this, returnValueminus30495.args);
        };
      return returnValueminus30495;
      });
    currentModuleminus30297.times = (function ()      {
      var returnValueminus30530 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus30529",
          args:arguments
        };
        });
      var recurP30533 = (function (valminus30534)        {
        if ((("undefined")===((typeof valminus30534))))          {
          return false;
          };
        return (valminus30534.recurSigil===("recurSigilminus30529"));
        });
      var actualFunminus30532 = (function ()        {
        return (function (arguments)          {
          var G30536 = undefined;
          var G30537 = Array.prototype.slice.apply(arguments);
          G30536 = (function (arguments)            {
            var matchValminus30538 = G30537;
            if ((!((matchValminus30538.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus30539 = Array.prototype.slice.call(matchValminus30538, 0, 1);
            if ((!((1===matchArraySimplePartminus30539.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus30539[0];
            var matchArrayTailPartminus30540 = Array.prototype.slice.call(matchValminus30538, 1);
            var tl = matchArrayTailPartminus30540;
            var result = hd;
            for (i in (tl))              {
              result = (result*(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30536))))            {
            return G30536;
            };
          G30536 = (function (arguments)            {
            var matchValminus30541 = G30537;
            var anythingElseminus30535 = matchValminus30541;
            throw ((("Match fail in hooves/operator-functions-* against: ")+anythingElseminus30535));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30536))))            {
            return G30536;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array hd (tail tl)) (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result) (anything-else-30535 (_throw (_+ ''Match fail in hooves/operator-functions-* against: '' anything-else-30535))))) for value ")+G30537));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus30530 = actualFunminus30532.apply(this, arguments);
      while (recurP30533(returnValueminus30530))        {
        returnValueminus30530 = actualFunminus30532.apply(this, returnValueminus30530.args);
        };
      return returnValueminus30530;
      });
    currentModuleminus30297.divide = (function ()      {
      var returnValueminus30565 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus30564",
          args:arguments
        };
        });
      var recurP30568 = (function (valminus30569)        {
        if ((("undefined")===((typeof valminus30569))))          {
          return false;
          };
        return (valminus30569.recurSigil===("recurSigilminus30564"));
        });
      var actualFunminus30567 = (function ()        {
        return (function (arguments)          {
          var G30571 = undefined;
          var G30572 = Array.prototype.slice.apply(arguments);
          G30571 = (function (arguments)            {
            var matchValminus30573 = G30572;
            if ((!((matchValminus30573.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus30574 = Array.prototype.slice.call(matchValminus30573, 0, 1);
            if ((!((1===matchArraySimplePartminus30574.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus30574[0];
            var matchArrayTailPartminus30575 = Array.prototype.slice.call(matchValminus30573, 1);
            var tl = matchArrayTailPartminus30575;
            return (hd/(moduleminus295baa4e1e.apply(currentModuleminus30297.times, tl)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30571))))            {
            return G30571;
            };
          G30571 = (function (arguments)            {
            var matchValminus30576 = G30572;
            var anythingElseminus30570 = matchValminus30576;
            throw ((("Match fail in hooves/operator-functions-/ against: ")+anythingElseminus30570));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30571))))            {
            return G30571;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array hd (tail tl)) (_/ hd (apply * tl))) (anything-else-30570 (_throw (_+ ''Match fail in hooves/operator-functions-/ against: '' anything-else-30570))))) for value ")+G30572));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus30565 = actualFunminus30567.apply(this, arguments);
      while (recurP30568(returnValueminus30565))        {
        returnValueminus30565 = actualFunminus30567.apply(this, returnValueminus30565.args);
        };
      return returnValueminus30565;
      });
    var defineExternalBinop = "macro - no dynamic value.";
    var defineExternalBinops = "macro - no dynamic value.";
    currentModuleminus30297.lessThan = (function (G30586, G30587)      {
      return (G30586<G30587);
      });
    currentModuleminus30297.lessThanequal = (function (G30613, G30614)      {
      return (G30613<=G30614);
      });
    currentModuleminus30297.greaterThan = (function (G30640, G30641)      {
      return (G30640>G30641);
      });
    currentModuleminus30297.greaterThanequal = (function (G30667, G30668)      {
      return (G30667>=G30668);
      });
    currentModuleminus30297.ampersand = (function (G30694, G30695)      {
      return (G30694&G30695);
      });
    currentModuleminus30297.pipe = (function (G30721, G30722)      {
      return (G30721|G30722);
      });
    currentModuleminus30297.equalequal = (function (G30748, G30749)      {
      return (G30748==G30749);
      });
    currentModuleminus30297.TripleEqualminus = (function (G30775, G30776)      {
      return (G30775===G30776);
      });
    currentModuleminus30297.modsign = (function (G30802, G30803)      {
      return (G30802%G30803);
      });
    currentModuleminus30297.caret = (function (G30829, G30830)      {
      return (G30829^G30830);
      });
    currentModuleminus30297.lessThanlessThan = (function (G30856, G30857)      {
      return (G30856<<G30857);
      });
    currentModuleminus30297.greaterThangreaterThan = (function (G30883, G30884)      {
      return (G30883>>G30884);
      });
    currentModuleminus30297.greaterThangreaterThangreaterThan = (function (G30910, G30911)      {
      return (G30910>>>G30911);
      });
    ;
    var ampersandampersand = "macro - no dynamic value.";
    var pipepipe = "macro - no dynamic value.";
    currentModuleminus30297.bang = (function (o)      {
      return (!(o));
      });
    var incr = "macro - no dynamic value.";
    var decr = "macro - no dynamic value.";
    }))();
  return currentModuleminus30297;
  }))