define(["hooves/lisp-idioms"], (function (moduleminus295baa4e1e)  {
  var currentModuleminus150185 = {    
    
  };
  ((function ()    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    // ("hooves/lisp-idioms" (:as apply funcall))
    ;
    currentModuleminus150185.plus = (function ()      {
      var returnValueminus150349 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus150348",
          args:arguments
        };
        });
      var recurP150352 = (function (valminus150353)        {
        return (valminus150353.recurSigil===("recurSigilminus150348"));
        });
      var actualFunminus150351 = (function ()        {
        return (function (arguments)          {
          var G150355 = undefined;
          var G150356 = Array.prototype.slice.apply(arguments);
          G150355 = (function (arguments)            {
            var aMatchArray150357 = G150356;
            if ((((!((aMatchArray150357.length>=1))))||((!((aMatchArray150357 instanceof Array))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = aMatchArray150357[0];
            var tl = Array.prototype.slice.call(aMatchArray150357, 1);
            var result = hd;
            for (i in (tl))              {
              result = (result+(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G150355))))            {
            return G150355;
            };
          G150355 = (function (arguments, anythingElseminus150354)            {
            throw ((("Match fail in hooves/operator-functions-+ against: ")+anythingElseminus150354));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G150356);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G150355))))            {
            return G150355;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array hd (tail tl)) (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result) (anything-else-150354 (_throw (_+ ''Match fail in hooves/operator-functions-+ against: '' anything-else-150354))))) for value ")+G150356));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus150349 = actualFunminus150351.apply(this, arguments);
      while (recurP150352(returnValueminus150349))        {
        returnValueminus150349 = actualFunminus150351.apply(this, returnValueminus150349.args);
        };
      return returnValueminus150349;
      });
    currentModuleminus150185.minus = (function ()      {
      var returnValueminus150381 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus150380",
          args:arguments
        };
        });
      var recurP150384 = (function (valminus150385)        {
        return (valminus150385.recurSigil===("recurSigilminus150380"));
        });
      var actualFunminus150383 = (function ()        {
        return (function (arguments)          {
          var G150387 = undefined;
          var G150388 = Array.prototype.slice.apply(arguments);
          G150387 = (function (arguments)            {
            var aMatchArray150389 = G150388;
            if ((((!((aMatchArray150389.length>=1))))||((!((aMatchArray150389 instanceof Array))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = aMatchArray150389[0];
            var tl = Array.prototype.slice.call(aMatchArray150389, 1);
            return (hd-(moduleminus295baa4e1e.apply(currentModuleminus150185.plus, tl)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G150387))))            {
            return G150387;
            };
          G150387 = (function (arguments, anythingElseminus150386)            {
            throw ((("Match fail in hooves/operator-functions-- against: ")+anythingElseminus150386));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G150388);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G150387))))            {
            return G150387;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array hd (tail tl)) (_- hd (apply + tl))) (anything-else-150386 (_throw (_+ ''Match fail in hooves/operator-functions-- against: '' anything-else-150386))))) for value ")+G150388));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus150381 = actualFunminus150383.apply(this, arguments);
      while (recurP150384(returnValueminus150381))        {
        returnValueminus150381 = actualFunminus150383.apply(this, returnValueminus150381.args);
        };
      return returnValueminus150381;
      });
    currentModuleminus150185.times = (function ()      {
      var returnValueminus150413 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus150412",
          args:arguments
        };
        });
      var recurP150416 = (function (valminus150417)        {
        return (valminus150417.recurSigil===("recurSigilminus150412"));
        });
      var actualFunminus150415 = (function ()        {
        return (function (arguments)          {
          var G150419 = undefined;
          var G150420 = Array.prototype.slice.apply(arguments);
          G150419 = (function (arguments)            {
            var aMatchArray150421 = G150420;
            if ((((!((aMatchArray150421.length>=1))))||((!((aMatchArray150421 instanceof Array))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = aMatchArray150421[0];
            var tl = Array.prototype.slice.call(aMatchArray150421, 1);
            var result = hd;
            for (i in (tl))              {
              result = (result*(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G150419))))            {
            return G150419;
            };
          G150419 = (function (arguments, anythingElseminus150418)            {
            throw ((("Match fail in hooves/operator-functions-* against: ")+anythingElseminus150418));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G150420);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G150419))))            {
            return G150419;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array hd (tail tl)) (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result) (anything-else-150418 (_throw (_+ ''Match fail in hooves/operator-functions-* against: '' anything-else-150418))))) for value ")+G150420));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus150413 = actualFunminus150415.apply(this, arguments);
      while (recurP150416(returnValueminus150413))        {
        returnValueminus150413 = actualFunminus150415.apply(this, returnValueminus150413.args);
        };
      return returnValueminus150413;
      });
    currentModuleminus150185.divide = (function ()      {
      var returnValueminus150445 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus150444",
          args:arguments
        };
        });
      var recurP150448 = (function (valminus150449)        {
        return (valminus150449.recurSigil===("recurSigilminus150444"));
        });
      var actualFunminus150447 = (function ()        {
        return (function (arguments)          {
          var G150451 = undefined;
          var G150452 = Array.prototype.slice.apply(arguments);
          G150451 = (function (arguments)            {
            var aMatchArray150453 = G150452;
            if ((((!((aMatchArray150453.length>=1))))||((!((aMatchArray150453 instanceof Array))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = aMatchArray150453[0];
            var tl = Array.prototype.slice.call(aMatchArray150453, 1);
            return (hd/(moduleminus295baa4e1e.apply(currentModuleminus150185.times, tl)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G150451))))            {
            return G150451;
            };
          G150451 = (function (arguments, anythingElseminus150450)            {
            throw ((("Match fail in hooves/operator-functions-/ against: ")+anythingElseminus150450));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G150452);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G150451))))            {
            return G150451;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array hd (tail tl)) (_/ hd (apply * tl))) (anything-else-150450 (_throw (_+ ''Match fail in hooves/operator-functions-/ against: '' anything-else-150450))))) for value ")+G150452));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus150445 = actualFunminus150447.apply(this, arguments);
      while (recurP150448(returnValueminus150445))        {
        returnValueminus150445 = actualFunminus150447.apply(this, returnValueminus150445.args);
        };
      return returnValueminus150445;
      });
    var defineExternalBinop = "macro - no dynamic value.";
    var defineExternalBinops = "macro - no dynamic value.";
    currentModuleminus150185.lessThan = (function (G150463, G150464)      {
      return (G150463<G150464);
      });
    currentModuleminus150185.lessThanequal = (function (G150490, G150491)      {
      return (G150490<=G150491);
      });
    currentModuleminus150185.greaterThan = (function (G150517, G150518)      {
      return (G150517>G150518);
      });
    currentModuleminus150185.greaterThanequal = (function (G150544, G150545)      {
      return (G150544>=G150545);
      });
    currentModuleminus150185.ampersand = (function (G150571, G150572)      {
      return (G150571&G150572);
      });
    currentModuleminus150185.pipe = (function (G150598, G150599)      {
      return (G150598|G150599);
      });
    currentModuleminus150185.equalequal = (function (G150625, G150626)      {
      return (G150625==G150626);
      });
    currentModuleminus150185.equalequalequal = (function (G150652, G150653)      {
      return (G150652===G150653);
      });
    currentModuleminus150185.modsign = (function (G150679, G150680)      {
      return (G150679%G150680);
      });
    currentModuleminus150185.caret = (function (G150706, G150707)      {
      return (G150706^G150707);
      });
    currentModuleminus150185.lessThanlessThan = (function (G150733, G150734)      {
      return (G150733<<G150734);
      });
    currentModuleminus150185.greaterThangreaterThan = (function (G150760, G150761)      {
      return (G150760>>G150761);
      });
    currentModuleminus150185.greaterThangreaterThangreaterThan = (function (G150787, G150788)      {
      return (G150787>>>G150788);
      });
    ;
    var ampersandampersand = "macro - no dynamic value.";
    var pipepipe = "macro - no dynamic value.";
    var incr = "macro - no dynamic value.";
    var decr = "macro - no dynamic value.";
    }))();
  return currentModuleminus150185;
  }))