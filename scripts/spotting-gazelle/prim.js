define(["hooves/hooves", "spotting-gazelle/symbol", "spotting-gazelle/el"], (function (module4745e9d952, module86ecf55a85, module88a7ac9c6d)  {
  var currentModule165396 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModule165396 = value;
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
    // ("hooves/hooves" :all)
    ;
    // ("spotting-gazelle/symbol" :all)
    ;
    // ("spotting-gazelle/el" :all)
    ;
    var stringOrSymbolName = (function ()      {
      var returnValue165401 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil165400",
          args:arguments
        };
        });
      var recurP165404 = (function (val165405)        {
        if ((("undefined")===((typeof val165405))))          {
          return false;
          };
        return (val165405.recurSigil===("recurSigil165400"));
        });
      var actualFun165403 = (function ()        {
        return (function (arguments)          {
          var G165407 = undefined;
          var G165408 = Array.prototype.slice.apply(arguments);
          G165407 = (function (arguments)            {
            var matchVal165409 = G165408;
            if ((!((("object")===((typeof matchVal165409))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchVal165409.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp165410 = matchVal165409[0];
            var matchFunExpr165415 = (function (G165414)              {
              return (((typeof G165414))===("string"));
              });
            if ((!(matchFunExpr165415(matchTemp165410))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var s = matchTemp165410;
            return s;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G165407))))            {
            return G165407;
            };
          G165407 = (function (arguments)            {
            var matchVal165416 = G165408;
            if ((!((("object")===((typeof matchVal165416))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchVal165416.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp165417 = matchVal165416[0];
            var matchFunExpr165422 = (function (G165421)              {
              return (G165421 instanceof (require("spotting-gazelle/symbol").Symbol));
              });
            if ((!(matchFunExpr165422(matchTemp165417))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var s = matchTemp165417;
            return module86ecf55a85.symbolName(s);
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G165407))))            {
            return G165407;
            };
          G165407 = (function (arguments)            {
            var matchVal165423 = G165408;
            var anythingElse165406 = matchVal165423;
            throw ((("Match fail in string-or-symbol-name against: ")+anythingElse165406));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G165407))))            {
            return G165407;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (string s)] (_newline-sequence s)) ([: (symbol s)] (_newline-sequence (symbol-name s))) (anything-else-165406 (_throw (_+ ''Match fail in string-or-symbol-name against: '' anything-else-165406))))) for value ")+(JSON.stringify(G165408))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue165401 = actualFun165403.apply(this, arguments);
      while (recurP165404(returnValue165401))        {
        returnValue165401 = actualFun165403.apply(this, returnValue165401.args);
        };
      return returnValue165401;
      });
    currentModule165396.toCamelcase = (function (s)      {
      return module88a7ac9c6d.replaceRegexpInString(module4745e9d952.rx("-([a-zA-Z])"), (function (s)        {
        return s.substr(1).toUpperCase();
        }), s);
      });
    var reallyMangle = (function (s)      {
      var s = stringOrSymbolName(s);
      var q = module88a7ac9c6d.regexpQuote;
      var s = module88a7ac9c6d.replaceRegexpsInString(s, q("->"), "-to-", q("==="), "-triple-equal-", q("{}"), "-braces-");
      var s = currentModule165396.toCamelcase(s);
      var s = module88a7ac9c6d.replaceRegexpInString("%", "modsign", s);
      var arrayObject165476 = [["|", "pipe"], ["+", "plus"], ["-", "minus"], ["*", "times"], ["<", "lessThan"], [">", "greaterThan"], ["$", "$"], ["=", "equal"], ["%", "modsign"], ["!", "bang"], ["?", "Predicate"], [":", "colon"], ["&", "ampersand"], ["^", "caret"], ["/", "divide"], ["\\", "mdivide"], ["#", "hash"], ["~", "tilda"], ["@", "at"], ["{", "openBrace"], ["}", "closeBrace"]];
      for (index in (arrayObject165476))        {
        var matchVar165477 = arrayObject165476[index];
        if ((!((("object")===((typeof matchVar165477))))))          {
          throw ((("Match error in var-match ([: p r] [array-object165476 index]) against: ")+matchVar165477));
          };
        if ((!((2===matchVar165477.length))))          {
          throw ((("Match error in var-match ([: p r] [array-object165476 index]) against: ")+matchVar165477));
          };
        var p = matchVar165477[0];
        var r = matchVar165477[1];
        s = module88a7ac9c6d.replaceRegexpInString(p, r, s);
        };
      return s;
      });
    var mangleCache = {      
      
    };
    currentModule165396.mangle = (function (s)      {
      var m = mangleCache[s];
      return ((m)?(m) : ((function (arguments)        {
        var G165508 = undefined;
        var G165509 = [reallyMangle(s)];
        G165508 = (function (arguments)          {
          var matchVal165510 = G165509;
          if ((!((("object")===((typeof matchVal165510))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((1===matchVal165510.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var m = matchVal165510[0];
          mangleCache[s] = m;
          return m;
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G165508))))          {
          return G165508;
          };
        G165508 = (function (arguments)          {
          var matchVal165511 = G165509;
          var G165507 = matchVal165511;
          throw ((("Match error in ")+("(let ((m (really-mangle s))) (set! [mangle-cache s] m) m)")));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G165508))))          {
          return G165508;
          };
        throw ((("match-fail at ((match [: (really-mangle s)] ([: m] (set! [mangle-cache s] m) m) (G165507 (_throw (_+ ''Match error in '' ''(let ((m (really-mangle s))) (set! [mangle-cache s] m) m)''))))) for value ")+(JSON.stringify(G165509))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)))));
      });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModule165396;
  }))