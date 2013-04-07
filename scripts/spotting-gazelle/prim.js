define(["hooves/hooves", "spotting-gazelle/symbol", "spotting-gazelle/el"], (function (module4745e9d952, module86ecf55a85, module88a7ac9c6d)  {
  var currentModule98944 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModule98944 = value;
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
      var returnValue98949 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil98948",
          args:arguments
        };
        });
      var recurP98952 = (function (val98953)        {
        if ((("undefined")===((typeof val98953))))          {
          return false;
          };
        return (val98953.recurSigil===("recurSigil98948"));
        });
      var actualFun98951 = (function ()        {
        return (function (arguments)          {
          var G98955 = undefined;
          var G98956 = Array.prototype.slice.apply(arguments);
          G98955 = (function (arguments)            {
            var matchVal98957 = G98956;
            if ((!((("object")===((typeof matchVal98957))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchVal98957.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp98958 = matchVal98957[0];
            var matchFunExpr98963 = (function (G98962)              {
              return (((typeof G98962))===("string"));
              });
            if ((!(matchFunExpr98963(matchTemp98958))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var s = matchTemp98958;
            return s;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G98955))))            {
            return G98955;
            };
          G98955 = (function (arguments)            {
            var matchVal98964 = G98956;
            if ((!((("object")===((typeof matchVal98964))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchVal98964.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp98965 = matchVal98964[0];
            var matchFunExpr98970 = (function (G98969)              {
              return (G98969 instanceof (require("spotting-gazelle/symbol").Symbol));
              });
            if ((!(matchFunExpr98970(matchTemp98965))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var s = matchTemp98965;
            return module86ecf55a85.symbolName(s);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G98955))))            {
            return G98955;
            };
          G98955 = (function (arguments)            {
            var matchVal98971 = G98956;
            var anythingElse98954 = matchVal98971;
            throw ((("Match fail in string-or-symbol-name against: ")+anythingElse98954));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G98955))))            {
            return G98955;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (string s)] s) ([: (symbol s)] (symbol-name s)) (anything-else-98954 (_throw (_+ ''Match fail in string-or-symbol-name against: '' anything-else-98954))))) for value ")+(JSON.stringify(G98956))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue98949 = actualFun98951.apply(this, arguments);
      while (recurP98952(returnValue98949))        {
        returnValue98949 = actualFun98951.apply(this, returnValue98949.args);
        };
      return returnValue98949;
      });
    currentModule98944.toCamelcase = (function (s)      {
      return module88a7ac9c6d.replaceRegexpInString(module4745e9d952.rx("-([a-zA-Z])"), (function (s)        {
        return s.substr(1).toUpperCase();
        }), s);
      });
    currentModule98944.mangle = (function (s)      {
      var s = stringOrSymbolName(s);
      var q = module88a7ac9c6d.regexpQuote;
      var s = module88a7ac9c6d.replaceRegexpsInString(s, q("->"), "-to-", q("==="), "-triple-equal-", q("{}"), "-braces-");
      var s = currentModule98944.toCamelcase(s);
      var s = module88a7ac9c6d.replaceRegexpInString("%", "modsign", s);
      var arrayObject99046 = [["|", "pipe"], ["+", "plus"], ["-", "minus"], ["*", "times"], ["<", "lessThan"], [">", "greaterThan"], ["$", "$"], ["=", "equal"], ["%", "modsign"], ["!", "bang"], ["?", "Predicate"], [":", "colon"], ["&", "ampersand"], ["^", "caret"], ["/", "divide"], ["\\", "mdivide"], ["#", "hash"], ["~", "tilda"], ["@", "at"], ["{", "openBrace"], ["}", "closeBrace"]];
      for (index in (arrayObject99046))        {
        var matchVar99047 = arrayObject99046[index];
        if ((!((("object")===((typeof matchVar99047))))))          {
          throw ((("Match error in var-match ([: p r] [array-object99046 index]) against: ")+matchVar99047));
          };
        if ((!((2===matchVar99047.length))))          {
          throw ((("Match error in var-match ([: p r] [array-object99046 index]) against: ")+matchVar99047));
          };
        var p = matchVar99047[0];
        var r = matchVar99047[1];
        ;
        s = module88a7ac9c6d.replaceRegexpInString(p, r, s);
        };
      ;
      return s;
      });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModule98944;
  }))