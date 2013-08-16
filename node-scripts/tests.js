(((function ()  {
  var rjs = require("requirejs");
  // (console\.log (_+ "using requirejs in nodejs, rjs is " rjs))
  ;
  rjs.config({    
    nodeRequire:require
  });
  return rjs;
  }))())(["hooves/hooves"], (function ()  {
  var returnValue15171 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigil15170",
      args:arguments
    };
    });
  var recurP15174 = (function (val15175)    {
    if ((("undefined")===((typeof val15175))))      {
      return false;
      };
    return (val15175.recurSigil===("recurSigil15170"));
    });
  var actualFun15173 = (function ()    {
    return (function (arguments)      {
      var G15177 = undefined;
      var G15178 = Array.prototype.slice.apply(arguments);
      G15177 = (function (arguments)        {
        var matchVal15179 = G15178;
        if ((!((("object")===((typeof matchVal15179))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((1===matchVal15179.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var module47c9484436 = matchVal15179[0];
        return (function (arguments)          {
          // ("hooves/hooves" :all)
          ;
          var globalAlias13261 = global;
          var setModuleObject = (function (value)            {
            globalAlias13261 = value;
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
            globalAlias13261.testTable = {              
              
            };
            // define-test
            // macro - no dynamic value.
            ;
            globalAlias13261.runTests = (function ()              {
              var failures = {                
                
              };
              var successes = {                
                
              };
              var failuresCount = 0;
              var successesCount = 0;
              var arrayObject15265 = globalAlias13261.testTable;
              for (testName in (arrayObject15265))                {
                var matchVar15266 = arrayObject15265[testName];
                var testFun = matchVar15266;
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
              var arrayObject15281 = failures;
              for (testName in (arrayObject15281))                {
                var matchVar15282 = arrayObject15281[testName];
                var _ = matchVar15282;
                console.log("\t", "<", testName, ">");
                };
              return {                
                failures:failures,
                successes:successes
              };
              });
            globalAlias13261.testTable["intentionally fails"] = (function ()              {
              return false;
              });
            globalAlias13261.testTable["array match in lambda"] = (function ()              {
              var returnValue15316 = undefined;
              var recur = (function ()                {
                return {                  
                  recurSigil:"recurSigil15315",
                  args:arguments
                };
                });
              var recurP15319 = (function (val15320)                {
                if ((("undefined")===((typeof val15320))))                  {
                  return false;
                  };
                return (val15320.recurSigil===("recurSigil15315"));
                });
              var actualFun15318 = (function ()                {
                return (function (arguments)                  {
                  var G15322 = undefined;
                  var G15323 = Array.prototype.slice.apply(arguments);
                  G15322 = (function (arguments)                    {
                    var matchVal15324 = G15323;
                    if ((!((("object")===((typeof matchVal15324))))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    if ((!((0===matchVal15324.length))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    return module47c9484436.TripleEqualminus((function ()                      {
                      var returnValue15326 = undefined;
                      var recur = (function ()                        {
                        return {                          
                          recurSigil:"recurSigil15325",
                          args:arguments
                        };
                        });
                      var recurP15329 = (function (val15330)                        {
                        if ((("undefined")===((typeof val15330))))                          {
                          return false;
                          };
                        return (val15330.recurSigil===("recurSigil15325"));
                        });
                      var actualFun15328 = (function ()                        {
                        return (function (arguments)                          {
                          var G15332 = undefined;
                          var G15333 = Array.prototype.slice.apply(arguments);
                          G15332 = (function (arguments)                            {
                            var matchVal15334 = G15333;
                            if ((!((("object")===((typeof matchVal15334))))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            if ((!((1===matchVal15334.length))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            var matchTemp15335 = matchVal15334[0];
                            if ((!((("object")===((typeof matchTemp15335))))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            if ((!((4===matchTemp15335.length))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            var a = matchTemp15335[0];
                            var b = matchTemp15335[1];
                            var c = matchTemp15335[2];
                            var d = matchTemp15335[3];
                            return module47c9484436.plus(a, b, c, d);
                            ;
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G15332))))                            {
                            return G15332;
                            };
                          G15332 = (function (arguments)                            {
                            var matchVal15336 = G15333;
                            var anythingElse15331 = matchVal15336;
                            throw ((("Match fail in anonymous against: ")+(anythingElse15331)));
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G15332))))                            {
                            return G15332;
                            };
                          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: [: a b c d]] (_newline-sequence (+ a b c d))) (anything-else-15331 (_throw (_+ ''Match fail in anonymous against: '' anything-else-15331))))) for value ")+(JSON.stringify(G15333))));
                          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                        });
                      returnValue15326 = actualFun15328.apply(this, arguments);
                      while (recurP15329(returnValue15326))                        {
                        returnValue15326 = actualFun15328.apply(this, returnValue15326.args);
                        };
                      return returnValue15326;
                      }).call(undefined, [1, 2, 3, 4]), 10);
                    ;
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G15322))))                    {
                    return G15322;
                    };
                  G15322 = (function (arguments)                    {
                    var matchVal15337 = G15323;
                    var anythingElse15321 = matchVal15337;
                    throw ((("Match fail in anonymous against: ")+(anythingElse15321)));
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G15322))))                    {
                    return G15322;
                    };
                  throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([:] (_newline-sequence (=== (\\.\\. (lambda ([: a b c d]) (+ a b c d)) (call undefined [: 1 2 3 4])) 10))) (anything-else-15321 (_throw (_+ ''Match fail in anonymous against: '' anything-else-15321))))) for value ")+(JSON.stringify(G15323))));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                });
              returnValue15316 = actualFun15318.apply(this, arguments);
              while (recurP15319(returnValue15316))                {
                returnValue15316 = actualFun15318.apply(this, returnValue15316.args);
                };
              return returnValue15316;
              });
            globalAlias13261.testTable["array match fail in lambda"] = (function ()              {
              var returnValue15367 = undefined;
              var recur = (function ()                {
                return {                  
                  recurSigil:"recurSigil15366",
                  args:arguments
                };
                });
              var recurP15370 = (function (val15371)                {
                if ((("undefined")===((typeof val15371))))                  {
                  return false;
                  };
                return (val15371.recurSigil===("recurSigil15366"));
                });
              var actualFun15369 = (function ()                {
                return (function (arguments)                  {
                  var G15373 = undefined;
                  var G15374 = Array.prototype.slice.apply(arguments);
                  G15373 = (function (arguments)                    {
                    var matchVal15375 = G15374;
                    if ((!((("object")===((typeof matchVal15375))))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    if ((!((0===matchVal15375.length))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    try                      {
                      module47c9484436.TripleEqualminus((function ()                        {
                        var returnValue15377 = undefined;
                        var recur = (function ()                          {
                          return {                            
                            recurSigil:"recurSigil15376",
                            args:arguments
                          };
                          });
                        var recurP15380 = (function (val15381)                          {
                          if ((("undefined")===((typeof val15381))))                            {
                            return false;
                            };
                          return (val15381.recurSigil===("recurSigil15376"));
                          });
                        var actualFun15379 = (function ()                          {
                          return (function (arguments)                            {
                            var G15383 = undefined;
                            var G15384 = Array.prototype.slice.apply(arguments);
                            G15383 = (function (arguments)                              {
                              var matchVal15385 = G15384;
                              if ((!((("object")===((typeof matchVal15385))))))                                {
                                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                };
                              if ((!((1===matchVal15385.length))))                                {
                                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                };
                              var matchTemp15386 = matchVal15385[0];
                              if ((!((("object")===((typeof matchTemp15386))))))                                {
                                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                };
                              if ((!((4===matchTemp15386.length))))                                {
                                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                };
                              var a = matchTemp15386[0];
                              var b = matchTemp15386[1];
                              var c = matchTemp15386[2];
                              var d = matchTemp15386[3];
                              return module47c9484436.plus(a, b, c, d);
                              ;
                              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G15383))))                              {
                              return G15383;
                              };
                            G15383 = (function (arguments)                              {
                              var matchVal15387 = G15384;
                              var anythingElse15382 = matchVal15387;
                              throw ((("Match fail in anonymous against: ")+(anythingElse15382)));
                              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G15383))))                              {
                              return G15383;
                              };
                            throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: [: a b c d]] (_newline-sequence (+ a b c d))) (anything-else-15382 (_throw (_+ ''Match fail in anonymous against: '' anything-else-15382))))) for value ")+(JSON.stringify(G15384))));
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                          });
                        returnValue15377 = actualFun15379.apply(this, arguments);
                        while (recurP15380(returnValue15377))                          {
                          returnValue15377 = actualFun15379.apply(this, returnValue15377.args);
                          };
                        return returnValue15377;
                        }).call(undefined, [1, 2, 3, 4, 5]), 15);
                      }catch (e)                      {
                      return true;
                      };
                    ;
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G15373))))                    {
                    return G15373;
                    };
                  G15373 = (function (arguments)                    {
                    var matchVal15388 = G15374;
                    var anythingElse15372 = matchVal15388;
                    throw ((("Match fail in anonymous against: ")+(anythingElse15372)));
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G15373))))                    {
                    return G15373;
                    };
                  throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([:] (_newline-sequence (_try ((=== (\\.\\. (lambda ([: a b c d]) (+ a b c d)) (call undefined [: 1 2 3 4 5])) 15)) _catch (e) ((_return true))))) (anything-else-15372 (_throw (_+ ''Match fail in anonymous against: '' anything-else-15372))))) for value ")+(JSON.stringify(G15374))));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                });
              returnValue15367 = actualFun15369.apply(this, arguments);
              while (recurP15370(returnValue15367))                {
                returnValue15367 = actualFun15369.apply(this, returnValue15367.args);
                };
              return returnValue15367;
              });
            globalAlias13261.testTable["support for empty {} notation"] = (function ()              {
              return module47c9484436.TripleEqualminus(JSON.stringify({}), JSON.stringify({                
                
              }));
              });
            globalAlias13261.testTable["support for {} notation"] = (function ()              {
              return module47c9484436.TripleEqualminus(JSON.stringify({                
                x:10,
                y:11
              }), JSON.stringify({                
                x:10,
                y:11
              }));
              });
            // file-as-string
            // macro - no dynamic value.
            ;
            globalAlias13261.testTable["{} not expanded in strings"] = (function ()              {
              return module47c9484436.TripleEqualminus("{ x y z b}", "{ x y z b}");
              });
            return globalAlias13261.runTests();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          ;
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        ;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G15177))))        {
        return G15177;
        };
      G15177 = (function (arguments)        {
        var matchVal15408 = G15178;
        var anythingElse15176 = matchVal15408;
        throw ((("Match fail in require-form against: ")+(anythingElse15176)));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G15177))))        {
        return G15177;
        };
      throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: module-47c9484436] (_newline-sequence (_proper:macro-context (_proper:require-spec ''hooves/hooves'' :all) (_newline-sequence (_var global-alias13261 global) (define (set-module-object value) (_= global-alias13261 value)) (_proper:unit (define-macro _current-module nil current-module) (define-macro define+ ((tail parts)) (match parts ((list (non-kw-symbol name) value-expr) (proper:add-to-symbol-macro-context name (lexical-let ((lcurrent-module current-module) (lname name)) (lambda (_) (\\` (_\\. (\\, lcurrent-module) (\\, lname)))))) (\\` (_= (_\\. (\\, current-module) (\\, name)) (\\, value-expr)))) ((list (list (non-kw-symbol name) (tail args)) (tail (p (function proper:not-null) body))) (proper:add-to-symbol-macro-context name (lexical-let ((lcurrent-module current-module) (lname name)) (lambda (_) (\\` (_\\. (\\, lcurrent-module) (\\, lname)))))) (\\` (_= (_\\. (\\, current-module) (\\, name)) (designated-lambda (\\, (intern (concat spec ''-'' (symbol-name name)))) (\\, args) (\\,@ body))))) ((list (list (non-kw-symbol name) (tail function-terms))) (proper:add-to-symbol-macro-context name (lexical-let ((lcurrent-module current-module) (lname name)) (lambda (_) (\\` (_\\. (\\, lcurrent-module) (\\, lname)))))) (\\` (_= (_\\. (\\, current-module) (\\, name)) (designated-lambda (\\, (intern (concat spec ''-'' (symbol-name name)))) (\\,@ function-terms))))) (other-form (error (concat ''gazelle/proper define must either'' '' by (define symbol expr) or (define'' '' (name arg-pattern ...) body0 ...),'' '' got %S'') (\\` (define+ (\\,@ parts))))))) (define-macro define-macro+ (name (tail rest)) (\\` (define-macro (\\, name) (\\,@ rest)))) (define-macro define-pattern+ (name (tail rest)) (\\` (define-pattern (\\, name) (\\,@ rest)))) (_proper:require-spec ''hooves/hooves'' :all) (define+ test-table ({})) (define-macro define-test (name expr) (\\` (set! [test-table (\\, name)] (lambda nil (\\, expr))))) (define+ (run-tests) (var failures ({})) (var successes ({})) (var failures-count 0) (var successes-count 0) (for* ((test-name test-fun) :in test-table) (console\\.log ''Running test <'' test-name ''>.'') (var result (test-fun\\.call undefined)) (_if result ((set! successes-count (+ 1 successes-count)) (console\\.log ''\tSUCCESS'') (set! [successes test-name] true)) _else ((set! failures-count (+ 1 failures-count)) (console\\.log ''\t**FAILURE**'') (set! [failures test-name] true)))) (console\\.log ''-----------------'') (console\\.log ''Results: '' successes-count '' successes, '' failures-count '' failures.'') (console\\.log ''Failing tests: '') (for* ((test-name _) :in failures) (console\\.log ''\t'' ''<'' test-name ''>'')) ({} failures failures successes successes)) (define-test ''intentionally fails'' false) (define-test ''array match in lambda'' (=== (\\.\\. (lambda ([: a b c d]) (+ a b c d)) (call undefined [: 1 2 3 4])) 10)) (define-test ''array match fail in lambda'' (_try ((=== (\\.\\. (lambda ([: a b c d]) (+ a b c d)) (call undefined [: 1 2 3 4 5])) 15)) _catch (e) ((_return true)))) (define-test ''support for empty {} notation'' (=== (JSON\\.stringify {}) (JSON\\.stringify ({})))) (define-test ''support for {} notation'' (=== (JSON\\.stringify ({} x 10 y 11)) (JSON\\.stringify ({} x 10 y 11)))) (define-macro file-as-string (filename) (with-temp-buffer (insert-file filename) (buffer-substring (point-min) (point-max)))) (define-test ''{} not expanded in strings'' (=== ''{ x y z b}'' (file-as-string ''test-brackets.string''))) (run-tests)))))) (anything-else-15176 (_throw (_+ ''Match fail in require-form against: '' anything-else-15176))))) for value ")+(JSON.stringify(G15178))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValue15171 = actualFun15173.apply(this, arguments);
  while (recurP15174(returnValue15171))    {
    returnValue15171 = actualFun15173.apply(this, returnValue15171.args);
    };
  return returnValue15171;
  }));
