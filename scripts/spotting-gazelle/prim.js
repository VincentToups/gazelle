define(["hooves/hooves", "spotting-gazelle/symbol", "spotting-gazelle/el"], (function (module47c9484436, module90647ddb5a, module9b2a6d3ede)  {
  var currentModule30744 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModule30744 = value;
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
      var returnValue31336 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil31335",
          args:arguments
        };
        });
      var recurP31339 = (function (val31340)        {
        if ((("undefined")===((typeof val31340))))          {
          return false;
          };
        return (val31340.recurSigil===("recurSigil31335"));
        });
      var actualFun31338 = (function ()        {
        return (function (arguments)          {
          var G31342 = undefined;
          var G31343 = Array.prototype.slice.apply(arguments);
          G31342 = (function (arguments)            {
            var matchVal31344 = G31343;
            if ((!((("object")===((typeof matchVal31344))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchVal31344.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp31345 = matchVal31344[0];
            var matchFunExpr31350 = (function (G31349)              {
              return (((typeof G31349))===("string"));
              });
            if ((!(matchFunExpr31350(matchTemp31345))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var s = matchTemp31345;
            return s;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G31342))))            {
            return G31342;
            };
          G31342 = (function (arguments)            {
            var matchVal31351 = G31343;
            if ((!((("object")===((typeof matchVal31351))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchVal31351.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp31352 = matchVal31351[0];
            var matchFunExpr31357 = (function (G31356)              {
              return (G31356 instanceof (require("spotting-gazelle/symbol").Symbol));
              });
            if ((!(matchFunExpr31357(matchTemp31352))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var s = matchTemp31352;
            return module90647ddb5a.symbolName(s);
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G31342))))            {
            return G31342;
            };
          G31342 = (function (arguments)            {
            var matchVal31358 = G31343;
            var anythingElse31341 = matchVal31358;
            throw ((("Match fail in string-or-symbol-name against: ")+anythingElse31341));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G31342))))            {
            return G31342;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (string s)] (_newline-sequence s)) ([: (symbol s)] (_newline-sequence (symbol-name s))) (anything-else-31341 (_throw (_+ ''Match fail in string-or-symbol-name against: '' anything-else-31341))))) for value ")+(JSON.stringify(G31343))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue31336 = actualFun31338.apply(this, arguments);
      while (recurP31339(returnValue31336))        {
        returnValue31336 = actualFun31338.apply(this, returnValue31336.args);
        };
      return returnValue31336;
      });
    currentModule30744.toCamelcase = (function (s)      {
      return module9b2a6d3ede.replaceRegexpInString(module47c9484436.rx("-([a-zA-Z])"), (function (s)        {
        return s.substr(1).toUpperCase();
        }), s);
      });
    var reallyMangle = (function (s)      {
      var s = stringOrSymbolName(s);
      var q = module9b2a6d3ede.regexpQuote;
      var s = module9b2a6d3ede.replaceRegexpsInString(s, q("->"), "-to-", q("==="), "-triple-equal-", q("{}"), "-braces-");
      var s = currentModule30744.toCamelcase(s);
      var s = module9b2a6d3ede.replaceRegexpInString("%", "modsign", s);
      var arrayObject31411 = [["|", "pipe"], ["+", "plus"], ["-", "minus"], ["*", "times"], ["<", "lessThan"], [">", "greaterThan"], ["$", "$"], ["=", "equal"], ["%", "modsign"], ["!", "bang"], ["?", "Predicate"], [":", "colon"], ["&", "ampersand"], ["^", "caret"], ["/", "divide"], ["\\", "mdivide"], ["#", "hash"], ["~", "tilda"], ["@", "at"], ["{", "openBrace"], ["}", "closeBrace"]];
      for (index in (arrayObject31411))        {
        var matchVar31412 = arrayObject31411[index];
        if ((!((("object")===((typeof matchVar31412))))))          {
          throw ((("Match error in var-match ([: p r] [array-object31411 index]) against: ")+matchVar31412));
          };
        if ((!((2===matchVar31412.length))))          {
          throw ((("Match error in var-match ([: p r] [array-object31411 index]) against: ")+matchVar31412));
          };
        var p = matchVar31412[0];
        var r = matchVar31412[1];
        s = module9b2a6d3ede.replaceRegexpInString(p, r, s);
        };
      return s;
      });
    var mangleCache = {      
      
    };
    currentModule30744.mangle = (function (s)      {
      var m = mangleCache[s];
      return ((m)?(m) : ((function (arguments)        {
        var G31443 = undefined;
        var G31444 = [reallyMangle(s)];
        G31443 = (function (arguments)          {
          var matchVal31445 = G31444;
          if ((!((("object")===((typeof matchVal31445))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((1===matchVal31445.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var m = matchVal31445[0];
          mangleCache[s] = m;
          return m;
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G31443))))          {
          return G31443;
          };
        G31443 = (function (arguments)          {
          var matchVal31446 = G31444;
          var G31442 = matchVal31446;
          throw ((("Match error in ")+("(let ((m (really-mangle s))) (set! [mangle-cache s] m) m)")));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G31443))))          {
          return G31443;
          };
        throw ((("match-fail at ((match [: (really-mangle s)] ([: m] (set! [mangle-cache s] m) m) (G31442 (_throw (_+ ''Match error in '' ''(let ((m (really-mangle s))) (set! [mangle-cache s] m) m)''))))) for value ")+(JSON.stringify(G31444))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)))));
      });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModule30744;
  }))