define(["hooves/lisp-idioms"], (function (moduleminus295baa4e1e)  {
  var currentModuleminus42277 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus42277 = value;
    });
  ((function ()    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    // ("hooves/lisp-idioms" (:as apply funcall))
    ;
    currentModuleminus42277.plus = (function ()      {
      var returnValueminus42441 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus42440",
          args:arguments
        };
        });
      var recurP42444 = (function (valminus42445)        {
        return (valminus42445.recurSigil===("recurSigilminus42440"));
        });
      var actualFunminus42443 = (function ()        {
        return (function (arguments)          {
          var G42447 = undefined;
          var G42448 = Array.prototype.slice.apply(arguments);
          G42447 = (function (arguments)            {
            var aMatchArray42449 = G42448;
            if ((((!((aMatchArray42449.length>=1))))||((!((aMatchArray42449 instanceof Array))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = aMatchArray42449[0];
            var tl = Array.prototype.slice.call(aMatchArray42449, 1);
            var result = hd;
            for (i in (tl))              {
              result = (result+(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G42447))))            {
            return G42447;
            };
          G42447 = (function (arguments, anythingElseminus42446)            {
            throw ((("Match fail in hooves/operator-functions-+ against: ")+anythingElseminus42446));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G42448);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G42447))))            {
            return G42447;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array hd (tail tl)) (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result) (anything-else-42446 (_throw (_+ ''Match fail in hooves/operator-functions-+ against: '' anything-else-42446))))) for value ")+G42448));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus42441 = actualFunminus42443.apply(this, arguments);
      while (recurP42444(returnValueminus42441))        {
        returnValueminus42441 = actualFunminus42443.apply(this, returnValueminus42441.args);
        };
      return returnValueminus42441;
      });
    currentModuleminus42277.minus = (function ()      {
      var returnValueminus42473 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus42472",
          args:arguments
        };
        });
      var recurP42476 = (function (valminus42477)        {
        return (valminus42477.recurSigil===("recurSigilminus42472"));
        });
      var actualFunminus42475 = (function ()        {
        return (function (arguments)          {
          var G42479 = undefined;
          var G42480 = Array.prototype.slice.apply(arguments);
          G42479 = (function (arguments)            {
            var aMatchArray42481 = G42480;
            if ((((!((aMatchArray42481.length>=1))))||((!((aMatchArray42481 instanceof Array))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = aMatchArray42481[0];
            var tl = Array.prototype.slice.call(aMatchArray42481, 1);
            return (hd-(moduleminus295baa4e1e.apply(currentModuleminus42277.plus, tl)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G42479))))            {
            return G42479;
            };
          G42479 = (function (arguments, anythingElseminus42478)            {
            throw ((("Match fail in hooves/operator-functions-- against: ")+anythingElseminus42478));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G42480);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G42479))))            {
            return G42479;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array hd (tail tl)) (_- hd (apply + tl))) (anything-else-42478 (_throw (_+ ''Match fail in hooves/operator-functions-- against: '' anything-else-42478))))) for value ")+G42480));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus42473 = actualFunminus42475.apply(this, arguments);
      while (recurP42476(returnValueminus42473))        {
        returnValueminus42473 = actualFunminus42475.apply(this, returnValueminus42473.args);
        };
      return returnValueminus42473;
      });
    currentModuleminus42277.times = (function ()      {
      var returnValueminus42505 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus42504",
          args:arguments
        };
        });
      var recurP42508 = (function (valminus42509)        {
        return (valminus42509.recurSigil===("recurSigilminus42504"));
        });
      var actualFunminus42507 = (function ()        {
        return (function (arguments)          {
          var G42511 = undefined;
          var G42512 = Array.prototype.slice.apply(arguments);
          G42511 = (function (arguments)            {
            var aMatchArray42513 = G42512;
            if ((((!((aMatchArray42513.length>=1))))||((!((aMatchArray42513 instanceof Array))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = aMatchArray42513[0];
            var tl = Array.prototype.slice.call(aMatchArray42513, 1);
            var result = hd;
            for (i in (tl))              {
              result = (result*(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G42511))))            {
            return G42511;
            };
          G42511 = (function (arguments, anythingElseminus42510)            {
            throw ((("Match fail in hooves/operator-functions-* against: ")+anythingElseminus42510));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G42512);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G42511))))            {
            return G42511;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array hd (tail tl)) (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result) (anything-else-42510 (_throw (_+ ''Match fail in hooves/operator-functions-* against: '' anything-else-42510))))) for value ")+G42512));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus42505 = actualFunminus42507.apply(this, arguments);
      while (recurP42508(returnValueminus42505))        {
        returnValueminus42505 = actualFunminus42507.apply(this, returnValueminus42505.args);
        };
      return returnValueminus42505;
      });
    currentModuleminus42277.divide = (function ()      {
      var returnValueminus42537 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus42536",
          args:arguments
        };
        });
      var recurP42540 = (function (valminus42541)        {
        return (valminus42541.recurSigil===("recurSigilminus42536"));
        });
      var actualFunminus42539 = (function ()        {
        return (function (arguments)          {
          var G42543 = undefined;
          var G42544 = Array.prototype.slice.apply(arguments);
          G42543 = (function (arguments)            {
            var aMatchArray42545 = G42544;
            if ((((!((aMatchArray42545.length>=1))))||((!((aMatchArray42545 instanceof Array))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = aMatchArray42545[0];
            var tl = Array.prototype.slice.call(aMatchArray42545, 1);
            return (hd/(moduleminus295baa4e1e.apply(currentModuleminus42277.times, tl)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G42543))))            {
            return G42543;
            };
          G42543 = (function (arguments, anythingElseminus42542)            {
            throw ((("Match fail in hooves/operator-functions-/ against: ")+anythingElseminus42542));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G42544);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G42543))))            {
            return G42543;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array hd (tail tl)) (_/ hd (apply * tl))) (anything-else-42542 (_throw (_+ ''Match fail in hooves/operator-functions-/ against: '' anything-else-42542))))) for value ")+G42544));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus42537 = actualFunminus42539.apply(this, arguments);
      while (recurP42540(returnValueminus42537))        {
        returnValueminus42537 = actualFunminus42539.apply(this, returnValueminus42537.args);
        };
      return returnValueminus42537;
      });
    var defineExternalBinop = "macro - no dynamic value.";
    var defineExternalBinops = "macro - no dynamic value.";
    currentModuleminus42277.lessThan = (function (G42555, G42556)      {
      return (G42555<G42556);
      });
    currentModuleminus42277.lessThanequal = (function (G42582, G42583)      {
      return (G42582<=G42583);
      });
    currentModuleminus42277.greaterThan = (function (G42609, G42610)      {
      return (G42609>G42610);
      });
    currentModuleminus42277.greaterThanequal = (function (G42636, G42637)      {
      return (G42636>=G42637);
      });
    currentModuleminus42277.ampersand = (function (G42663, G42664)      {
      return (G42663&G42664);
      });
    currentModuleminus42277.pipe = (function (G42690, G42691)      {
      return (G42690|G42691);
      });
    currentModuleminus42277.equalequal = (function (G42717, G42718)      {
      return (G42717==G42718);
      });
    currentModuleminus42277.equalequalequal = (function (G42744, G42745)      {
      return (G42744===G42745);
      });
    currentModuleminus42277.modsign = (function (G42771, G42772)      {
      return (G42771%G42772);
      });
    currentModuleminus42277.caret = (function (G42798, G42799)      {
      return (G42798^G42799);
      });
    currentModuleminus42277.lessThanlessThan = (function (G42825, G42826)      {
      return (G42825<<G42826);
      });
    currentModuleminus42277.greaterThangreaterThan = (function (G42852, G42853)      {
      return (G42852>>G42853);
      });
    currentModuleminus42277.greaterThangreaterThangreaterThan = (function (G42879, G42880)      {
      return (G42879>>>G42880);
      });
    ;
    var ampersandampersand = "macro - no dynamic value.";
    var pipepipe = "macro - no dynamic value.";
    currentModuleminus42277.bang = (function (o)      {
      return (!(o));
      });
    var incr = "macro - no dynamic value.";
    var decr = "macro - no dynamic value.";
    }))();
  return currentModuleminus42277;
  }))