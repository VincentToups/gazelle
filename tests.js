(((function ()  {
  var rjs = require("requirejs");
  // (console\.log (_+ "using requirejs in nodejs, rjs is " rjs))
  ;
  rjs.config({    
    nodeRequire:require
  });
  return rjs;
  }))())(["hooves/hooves"], (function ()  {
  var returnValue75090 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigil75089",
      args:arguments
    };
    });
  var recurP75093 = (function (val75094)    {
    if ((("undefined")===((typeof val75094))))      {
      return false;
      };
    return (val75094.recurSigil===("recurSigil75089"));
    });
  var actualFun75092 = (function ()    {
    return (function (arguments)      {
      var G75096 = undefined;
      var G75097 = Array.prototype.slice.apply(arguments);
      G75096 = (function (arguments)        {
        var matchVal75098 = G75097;
        if ((!((("object")===((typeof matchVal75098))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((1===matchVal75098.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var module47c9484436 = matchVal75098[0];
        return (function (arguments)          {
          // ("hooves/hooves" :all)
          ;
          var globalAlias73328 = global;
          var setModuleObject = (function (value)            {
            globalAlias73328 = value;
            });
          return (function (arguments)            {
            // _current-module
            // macro - no dynamic value.
            ;
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
            globalAlias73328.testTable = {              
              
            };
            // define-test
            // macro - no dynamic value.
            ;
            globalAlias73328.runTests = (function ()              {
              var failures = {                
                
              };
              var successes = {                
                
              };
              var failuresCount = {                
                
              };
              var successesCount = {                
                
              };
              var arrayObject75184 = globalAlias73328.testTable;
              for (testName in (arrayObject75184))                {
                var matchVar75185 = arrayObject75184[testName];
                var testFun = matchVar75185;
                console.log("Running test <", testName, ">.");
                var result = testFun.call(undefined);
                if (result)                  {
                  successesCount = module47c9484436.plus(1, successesCount);
                  console.log("\tSUCCESS");
                  successes[testName] = true;
                  } else                   {
                  failuresCount = module47c9484436.plus(1, failuresCount);
                  console.log("\t**FAILURE**");
                  failures[testName] = true;
                  };
                };
              console.log("-----------------");
              console.log("Results: ", successesCount, " successes, ", failuresCount, " failures.");
              console.log("Failing tests: ");
              var arrayObject75200 = failures;
              for (testName in (arrayObject75200))                {
                var matchVar75201 = arrayObject75200[testName];
                var _ = matchVar75201;
                console.log("\t", testName);
                };
              return {                
                failures:failures,
                successes:successes
              };
              });
            globalAlias73328.testTable["array match in lambda"] = (function ()              {
              var returnValue75231 = undefined;
              var recur = (function ()                {
                return {                  
                  recurSigil:"recurSigil75230",
                  args:arguments
                };
                });
              var recurP75234 = (function (val75235)                {
                if ((("undefined")===((typeof val75235))))                  {
                  return false;
                  };
                return (val75235.recurSigil===("recurSigil75230"));
                });
              var actualFun75233 = (function ()                {
                return (function (arguments)                  {
                  var G75237 = undefined;
                  var G75238 = Array.prototype.slice.apply(arguments);
                  G75237 = (function (arguments)                    {
                    var matchVal75239 = G75238;
                    if ((!((("object")===((typeof matchVal75239))))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    if ((!((0===matchVal75239.length))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    return module47c9484436.TripleEqualminus((function ()                      {
                      var returnValue75241 = undefined;
                      var recur = (function ()                        {
                        return {                          
                          recurSigil:"recurSigil75240",
                          args:arguments
                        };
                        });
                      var recurP75244 = (function (val75245)                        {
                        if ((("undefined")===((typeof val75245))))                          {
                          return false;
                          };
                        return (val75245.recurSigil===("recurSigil75240"));
                        });
                      var actualFun75243 = (function ()                        {
                        return (function (arguments)                          {
                          var G75247 = undefined;
                          var G75248 = Array.prototype.slice.apply(arguments);
                          G75247 = (function (arguments)                            {
                            var matchVal75249 = G75248;
                            if ((!((("object")===((typeof matchVal75249))))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            if ((!((1===matchVal75249.length))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            var matchTemp75250 = matchVal75249[0];
                            if ((!((("object")===((typeof matchTemp75250))))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            if ((!((4===matchTemp75250.length))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            var a = matchTemp75250[0];
                            var b = matchTemp75250[1];
                            var c = matchTemp75250[2];
                            var d = matchTemp75250[3];
                            return module47c9484436.plus(a, b, c, d);
                            ;
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G75247))))                            {
                            return G75247;
                            };
                          G75247 = (function (arguments)                            {
                            var matchVal75251 = G75248;
                            var anythingElse75246 = matchVal75251;
                            throw ((("Match fail in anonymous against: ")+(anythingElse75246)));
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G75247))))                            {
                            return G75247;
                            };
                          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: [: a b c d]] (_newline-sequence (+ a b c d))) (anything-else-75246 (_throw (_+ ''Match fail in anonymous against: '' anything-else-75246))))) for value ")+(JSON.stringify(G75248))));
                          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                        });
                      returnValue75241 = actualFun75243.apply(this, arguments);
                      while (recurP75244(returnValue75241))                        {
                        returnValue75241 = actualFun75243.apply(this, returnValue75241.args);
                        };
                      return returnValue75241;
                      }).call(undefined, [1, 2, 3, 4]), 10);
                    ;
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G75237))))                    {
                    return G75237;
                    };
                  G75237 = (function (arguments)                    {
                    var matchVal75252 = G75238;
                    var anythingElse75236 = matchVal75252;
                    throw ((("Match fail in anonymous against: ")+(anythingElse75236)));
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G75237))))                    {
                    return G75237;
                    };
                  throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([:] (_newline-sequence (=== (\\.\\. (lambda ([: a b c d]) (+ a b c d)) (call undefined [: 1 2 3 4])) 10))) (anything-else-75236 (_throw (_+ ''Match fail in anonymous against: '' anything-else-75236))))) for value ")+(JSON.stringify(G75238))));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                });
              returnValue75231 = actualFun75233.apply(this, arguments);
              while (recurP75234(returnValue75231))                {
                returnValue75231 = actualFun75233.apply(this, returnValue75231.args);
                };
              return returnValue75231;
              });
            return globalAlias73328.runTests();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          ;
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        ;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G75096))))        {
        return G75096;
        };
      G75096 = (function (arguments)        {
        var matchVal75253 = G75097;
        var anythingElse75095 = matchVal75253;
        throw ((("Match fail in require-form against: ")+(anythingElse75095)));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G75096))))        {
        return G75096;
        };
      throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: module-47c9484436] (_newline-sequence (_proper:macro-context (_proper:require-spec ''hooves/hooves'' :all) (_newline-sequence (_var global-alias73328 global) (define (set-module-object value) (_= global-alias73328 value)) (_proper:unit (define-macro _current-module nil current-module) (define-macro define+ ((tail parts)) (match parts ((list (non-kw-symbol name) value-expr) (proper:add-to-symbol-macro-context name (lexical-let ((lcurrent-module current-module) (lname name)) (lambda (_) (\\` (_\\. (\\, lcurrent-module) (\\, lname)))))) (\\` (_= (_\\. (\\, current-module) (\\, name)) (\\, value-expr)))) ((list (list (non-kw-symbol name) (tail args)) (tail (p (function proper:not-null) body))) (proper:add-to-symbol-macro-context name (lexical-let ((lcurrent-module current-module) (lname name)) (lambda (_) (\\` (_\\. (\\, lcurrent-module) (\\, lname)))))) (\\` (_= (_\\. (\\, current-module) (\\, name)) (designated-lambda (\\, (intern (concat spec ''-'' (symbol-name name)))) (\\, args) (\\,@ body))))) ((list (list (non-kw-symbol name) (tail function-terms))) (proper:add-to-symbol-macro-context name (lexical-let ((lcurrent-module current-module) (lname name)) (lambda (_) (\\` (_\\. (\\, lcurrent-module) (\\, lname)))))) (\\` (_= (_\\. (\\, current-module) (\\, name)) (designated-lambda (\\, (intern (concat spec ''-'' (symbol-name name)))) (\\,@ function-terms))))) (other-form (error (concat ''gazelle/proper define must either'' '' by (define symbol expr) or (define'' '' (name arg-pattern ...) body0 ...),'' '' got %S'') (\\` (define+ (\\,@ parts))))))) (define-macro define-macro+ (name (tail rest)) (\\` (define-macro (\\, name) (\\,@ rest)))) (define-macro define-pattern+ (name (tail rest)) (\\` (define-pattern (\\, name) (\\,@ rest)))) (_proper:require-spec ''hooves/hooves'' :all) (define+ test-table ({})) (define-macro define-test (name expr) (\\` (set! [test-table (\\, name)] (lambda nil (\\, expr))))) (define+ (run-tests) (var failures ({})) (var successes ({})) (var failures-count ({})) (var successes-count ({})) (for* ((test-name test-fun) :in test-table) (console\\.log ''Running test <'' test-name ''>.'') (var result (test-fun\\.call undefined)) (_if result ((set! successes-count (+ 1 successes-count)) (console\\.log ''\tSUCCESS'') (set! [successes test-name] true)) _else ((set! failures-count (+ 1 failures-count)) (console\\.log ''\t**FAILURE**'') (set! [failures test-name] true)))) (console\\.log ''-----------------'') (console\\.log ''Results: '' successes-count '' successes, '' failures-count '' failures.'') (console\\.log ''Failing tests: '') (for* ((test-name _) :in failures) (console\\.log ''\t'' test-name)) ({} failures failures successes successes)) (define-test ''array match in lambda'' (=== (\\.\\. (lambda ([: a b c d]) (+ a b c d)) (call undefined [: 1 2 3 4])) 10)) (run-tests)))))) (anything-else-75095 (_throw (_+ ''Match fail in require-form against: '' anything-else-75095))))) for value ")+(JSON.stringify(G75097))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValue75090 = actualFun75092.apply(this, arguments);
  while (recurP75093(returnValue75090))    {
    returnValue75090 = actualFun75092.apply(this, returnValue75090.args);
    };
  return returnValue75090;
  }));
