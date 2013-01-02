((define))(["hooves/lisp-idioms"], (function (moduleminus295baa4e1e)  {
  var currentModuleminus165179 = {    
    
  };
  ((function ()    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    "(\"hooves/lisp-idioms\" (:as apply funcall))";
    currentModuleminus165179.plus = (function ()      {
      var returnValueminus165334 = undefined;
      var recur = (function ()        {
        return ({          
          recurSigil:"recurSigilminus165333",
          args:arguments
        });
        });
      var recurP165337 = (function (valminus165338)        {
        return (((valminus165338.recurSigil)===("recurSigilminus165333")));
        });
      var actualFunminus165336 = (function ()        {
        return ((function (arguments)          {
          var G165340 = undefined;
          var G165341 = Array.prototype.slice.apply(arguments);
          G165340 = (function (arguments)            {
            var aMatchArray165342 = G165341;
            if ((((!(((aMatchArray165342.length)>=1))))||((!((aMatchArray165342 instanceof Array))))))              {
              return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
              };
            var hd = aMatchArray165342[0];
            var tl = Array.prototype.slice.call(aMatchArray165342, 1);
            var result = hd;
            for (i in (tl))              {
              result = (result+(tl[i]));
              };
            return (result);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G165340))))            {
            return (G165340);
            };
          G165340 = (function (arguments, anythingElseminus165339)            {
            throw ((("Match fail in hooves/operator-functions-+ against: ")+anythingElseminus165339));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G165341);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G165340))))            {
            return (G165340);
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array hd (tail tl)) (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result) (anything-else-165339 (_throw (_+ \"Match fail in hooves/operator-functions-+ against: \" anything-else-165339))))) for value ")+G165341));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
        });
      returnValueminus165334 = actualFunminus165336.apply(this, arguments);
      while (recurP165337(returnValueminus165334))        {
        returnValueminus165334 = actualFunminus165336.apply(this, returnValueminus165334.args);
        };
      return (returnValueminus165334);
      });
    currentModuleminus165179.minus = (function ()      {
      var returnValueminus165366 = undefined;
      var recur = (function ()        {
        return ({          
          recurSigil:"recurSigilminus165365",
          args:arguments
        });
        });
      var recurP165369 = (function (valminus165370)        {
        return (((valminus165370.recurSigil)===("recurSigilminus165365")));
        });
      var actualFunminus165368 = (function ()        {
        return ((function (arguments)          {
          var G165372 = undefined;
          var G165373 = Array.prototype.slice.apply(arguments);
          G165372 = (function (arguments)            {
            var aMatchArray165374 = G165373;
            if ((((!(((aMatchArray165374.length)>=1))))||((!((aMatchArray165374 instanceof Array))))))              {
              return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
              };
            var hd = aMatchArray165374[0];
            var tl = Array.prototype.slice.call(aMatchArray165374, 1);
            return ((hd-((moduleminus295baa4e1e.apply)(currentModuleminus165179.plus, tl))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G165372))))            {
            return (G165372);
            };
          G165372 = (function (arguments, anythingElseminus165371)            {
            throw ((("Match fail in hooves/operator-functions-- against: ")+anythingElseminus165371));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G165373);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G165372))))            {
            return (G165372);
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array hd (tail tl)) (_- hd (apply + tl))) (anything-else-165371 (_throw (_+ \"Match fail in hooves/operator-functions-- against: \" anything-else-165371))))) for value ")+G165373));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
        });
      returnValueminus165366 = actualFunminus165368.apply(this, arguments);
      while (recurP165369(returnValueminus165366))        {
        returnValueminus165366 = actualFunminus165368.apply(this, returnValueminus165366.args);
        };
      return (returnValueminus165366);
      });
    currentModuleminus165179.times = (function ()      {
      var returnValueminus165398 = undefined;
      var recur = (function ()        {
        return ({          
          recurSigil:"recurSigilminus165397",
          args:arguments
        });
        });
      var recurP165401 = (function (valminus165402)        {
        return (((valminus165402.recurSigil)===("recurSigilminus165397")));
        });
      var actualFunminus165400 = (function ()        {
        return ((function (arguments)          {
          var G165404 = undefined;
          var G165405 = Array.prototype.slice.apply(arguments);
          G165404 = (function (arguments)            {
            var aMatchArray165406 = G165405;
            if ((((!(((aMatchArray165406.length)>=1))))||((!((aMatchArray165406 instanceof Array))))))              {
              return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
              };
            var hd = aMatchArray165406[0];
            var tl = Array.prototype.slice.call(aMatchArray165406, 1);
            var result = hd;
            for (i in (tl))              {
              result = (result*(tl[i]));
              };
            return (result);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G165404))))            {
            return (G165404);
            };
          G165404 = (function (arguments, anythingElseminus165403)            {
            throw ((("Match fail in hooves/operator-functions-* against: ")+anythingElseminus165403));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G165405);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G165404))))            {
            return (G165404);
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array hd (tail tl)) (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result) (anything-else-165403 (_throw (_+ \"Match fail in hooves/operator-functions-* against: \" anything-else-165403))))) for value ")+G165405));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
        });
      returnValueminus165398 = actualFunminus165400.apply(this, arguments);
      while (recurP165401(returnValueminus165398))        {
        returnValueminus165398 = actualFunminus165400.apply(this, returnValueminus165398.args);
        };
      return (returnValueminus165398);
      });
    currentModuleminus165179.divide = (function ()      {
      var returnValueminus165430 = undefined;
      var recur = (function ()        {
        return ({          
          recurSigil:"recurSigilminus165429",
          args:arguments
        });
        });
      var recurP165433 = (function (valminus165434)        {
        return (((valminus165434.recurSigil)===("recurSigilminus165429")));
        });
      var actualFunminus165432 = (function ()        {
        return ((function (arguments)          {
          var G165436 = undefined;
          var G165437 = Array.prototype.slice.apply(arguments);
          G165436 = (function (arguments)            {
            var aMatchArray165438 = G165437;
            if ((((!(((aMatchArray165438.length)>=1))))||((!((aMatchArray165438 instanceof Array))))))              {
              return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
              };
            var hd = aMatchArray165438[0];
            var tl = Array.prototype.slice.call(aMatchArray165438, 1);
            return ((hd/((moduleminus295baa4e1e.apply)(currentModuleminus165179.times, tl))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G165436))))            {
            return (G165436);
            };
          G165436 = (function (arguments, anythingElseminus165435)            {
            throw ((("Match fail in hooves/operator-functions-/ against: ")+anythingElseminus165435));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G165437);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G165436))))            {
            return (G165436);
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array hd (tail tl)) (_/ hd (apply * tl))) (anything-else-165435 (_throw (_+ \"Match fail in hooves/operator-functions-/ against: \" anything-else-165435))))) for value ")+G165437));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
        });
      returnValueminus165430 = actualFunminus165432.apply(this, arguments);
      while (recurP165433(returnValueminus165430))        {
        returnValueminus165430 = actualFunminus165432.apply(this, returnValueminus165430.args);
        };
      return (returnValueminus165430);
      });
    var defineExternalBinop = "macro - no dynamic value.";
    var defineExternalBinops = "macro - no dynamic value.";
    currentModuleminus165179.lessThan = (function (G165448, G165449)      {
      return ((G165448<G165449));
      });
    currentModuleminus165179.lessThanequal = (function (G165475, G165476)      {
      return ((G165475<=G165476));
      });
    currentModuleminus165179.greaterThan = (function (G165502, G165503)      {
      return ((G165502>G165503));
      });
    currentModuleminus165179.greaterThanequal = (function (G165529, G165530)      {
      return ((G165529>=G165530));
      });
    currentModuleminus165179.ampersand = (function (G165556, G165557)      {
      return ((G165556&G165557));
      });
    currentModuleminus165179.pipe = (function (G165583, G165584)      {
      return ((G165583|G165584));
      });
    currentModuleminus165179.equalequal = (function (G165610, G165611)      {
      return ((G165610==G165611));
      });
    currentModuleminus165179.equalequalequal = (function (G165637, G165638)      {
      return ((G165637===G165638));
      });
    currentModuleminus165179.modsign = (function (G165664, G165665)      {
      return ((G165664%G165665));
      });
    currentModuleminus165179.caret = (function (G165691, G165692)      {
      return ((G165691^G165692));
      });
    currentModuleminus165179.lessThanlessThan = (function (G165718, G165719)      {
      return ((G165718<<G165719));
      });
    currentModuleminus165179.greaterThangreaterThan = (function (G165745, G165746)      {
      return ((G165745>>G165746));
      });
    currentModuleminus165179.greaterThangreaterThangreaterThan = (function (G165772, G165773)      {
      return ((G165772>>>G165773));
      });
    ;
    var ampersandampersand = "macro - no dynamic value.";
    var pipepipe = "macro - no dynamic value.";
    var incr = "macro - no dynamic value.";
    var decr = "macro - no dynamic value.";
    }))();
  return (currentModuleminus165179);
  }))