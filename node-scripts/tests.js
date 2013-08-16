(((function ()  {
  var rjs = require("requirejs");
  // (console\.log (_+ "using requirejs in nodejs, rjs is " rjs))
  ;
  rjs.config({    
    nodeRequire:require
  });
  return rjs;
  }))())(["hooves/hooves"], (function ()  {
  var returnValue82089 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigil82088",
      args:arguments
    };
    });
  var recurP82092 = (function (val82093)    {
    if ((("undefined")===((typeof val82093))))      {
      return false;
      };
    return (val82093.recurSigil===("recurSigil82088"));
    });
  var actualFun82091 = (function ()    {
    return (function (arguments)      {
      var G82095 = undefined;
      var G82096 = Array.prototype.slice.apply(arguments);
      G82095 = (function (arguments)        {
        var matchVal82097 = G82096;
        if ((!((("object")===((typeof matchVal82097))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((1===matchVal82097.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var module47c9484436 = matchVal82097[0];
        return (function (arguments)          {
          // ("hooves/hooves" :all)
          ;
          var globalAlias81653 = global;
          var setModuleObject = (function (value)            {
            globalAlias81653 = value;
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
            globalAlias81653.testTable = {              
              
            };
            // define-test
            // macro - no dynamic value.
            ;
            globalAlias81653.runTests = (function ()              {
              var failures = {                
                
              };
              var successes = {                
                
              };
              var failuresCount = 0;
              var successesCount = 0;
              var arrayObject82183 = globalAlias81653.testTable;
              for (testName in (arrayObject82183))                {
                var matchVar82184 = arrayObject82183[testName];
                var testFun = matchVar82184;
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
              var arrayObject82199 = failures;
              for (testName in (arrayObject82199))                {
                var matchVar82200 = arrayObject82199[testName];
                var _ = matchVar82200;
                console.log("\t", "<", testName, ">");
                };
              return {                
                failures:failures,
                successes:successes
              };
              });
            globalAlias81653.testTable["intentionally fails"] = (function ()              {
              return false;
              });
            globalAlias81653.testTable["array match in lambda"] = (function ()              {
              var returnValue82234 = undefined;
              var recur = (function ()                {
                return {                  
                  recurSigil:"recurSigil82233",
                  args:arguments
                };
                });
              var recurP82237 = (function (val82238)                {
                if ((("undefined")===((typeof val82238))))                  {
                  return false;
                  };
                return (val82238.recurSigil===("recurSigil82233"));
                });
              var actualFun82236 = (function ()                {
                return (function (arguments)                  {
                  var G82240 = undefined;
                  var G82241 = Array.prototype.slice.apply(arguments);
                  G82240 = (function (arguments)                    {
                    var matchVal82242 = G82241;
                    if ((!((("object")===((typeof matchVal82242))))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    if ((!((0===matchVal82242.length))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    return module47c9484436.TripleEqualminus((function ()                      {
                      var returnValue82244 = undefined;
                      var recur = (function ()                        {
                        return {                          
                          recurSigil:"recurSigil82243",
                          args:arguments
                        };
                        });
                      var recurP82247 = (function (val82248)                        {
                        if ((("undefined")===((typeof val82248))))                          {
                          return false;
                          };
                        return (val82248.recurSigil===("recurSigil82243"));
                        });
                      var actualFun82246 = (function ()                        {
                        return (function (arguments)                          {
                          var G82250 = undefined;
                          var G82251 = Array.prototype.slice.apply(arguments);
                          G82250 = (function (arguments)                            {
                            var matchVal82252 = G82251;
                            if ((!((("object")===((typeof matchVal82252))))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            if ((!((1===matchVal82252.length))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            var matchTemp82253 = matchVal82252[0];
                            if ((!((("object")===((typeof matchTemp82253))))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            if ((!((4===matchTemp82253.length))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            var a = matchTemp82253[0];
                            var b = matchTemp82253[1];
                            var c = matchTemp82253[2];
                            var d = matchTemp82253[3];
                            return module47c9484436.plus(a, b, c, d);
                            ;
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G82250))))                            {
                            return G82250;
                            };
                          G82250 = (function (arguments)                            {
                            var matchVal82254 = G82251;
                            var anythingElse82249 = matchVal82254;
                            throw ((("Match fail in anonymous against: ")+(anythingElse82249)));
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G82250))))                            {
                            return G82250;
                            };
                          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: [: a b c d]] (_newline-sequence (+ a b c d))) (anything-else-82249 (_throw (_+ ''Match fail in anonymous against: '' anything-else-82249))))) for value ")+(JSON.stringify(G82251))));
                          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                        });
                      returnValue82244 = actualFun82246.apply(this, arguments);
                      while (recurP82247(returnValue82244))                        {
                        returnValue82244 = actualFun82246.apply(this, returnValue82244.args);
                        };
                      return returnValue82244;
                      }).call(undefined, [1, 2, 3, 4]), 10);
                    ;
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G82240))))                    {
                    return G82240;
                    };
                  G82240 = (function (arguments)                    {
                    var matchVal82255 = G82241;
                    var anythingElse82239 = matchVal82255;
                    throw ((("Match fail in anonymous against: ")+(anythingElse82239)));
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G82240))))                    {
                    return G82240;
                    };
                  throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([:] (_newline-sequence (=== (\\.\\. (lambda ([: a b c d]) (+ a b c d)) (call undefined [: 1 2 3 4])) 10))) (anything-else-82239 (_throw (_+ ''Match fail in anonymous against: '' anything-else-82239))))) for value ")+(JSON.stringify(G82241))));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                });
              returnValue82234 = actualFun82236.apply(this, arguments);
              while (recurP82237(returnValue82234))                {
                returnValue82234 = actualFun82236.apply(this, returnValue82234.args);
                };
              return returnValue82234;
              });
            globalAlias81653.testTable["array match fail in lambda"] = (function ()              {
              var returnValue82285 = undefined;
              var recur = (function ()                {
                return {                  
                  recurSigil:"recurSigil82284",
                  args:arguments
                };
                });
              var recurP82288 = (function (val82289)                {
                if ((("undefined")===((typeof val82289))))                  {
                  return false;
                  };
                return (val82289.recurSigil===("recurSigil82284"));
                });
              var actualFun82287 = (function ()                {
                return (function (arguments)                  {
                  var G82291 = undefined;
                  var G82292 = Array.prototype.slice.apply(arguments);
                  G82291 = (function (arguments)                    {
                    var matchVal82293 = G82292;
                    if ((!((("object")===((typeof matchVal82293))))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    if ((!((0===matchVal82293.length))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    try                      {
                      module47c9484436.TripleEqualminus((function ()                        {
                        var returnValue82295 = undefined;
                        var recur = (function ()                          {
                          return {                            
                            recurSigil:"recurSigil82294",
                            args:arguments
                          };
                          });
                        var recurP82298 = (function (val82299)                          {
                          if ((("undefined")===((typeof val82299))))                            {
                            return false;
                            };
                          return (val82299.recurSigil===("recurSigil82294"));
                          });
                        var actualFun82297 = (function ()                          {
                          return (function (arguments)                            {
                            var G82301 = undefined;
                            var G82302 = Array.prototype.slice.apply(arguments);
                            G82301 = (function (arguments)                              {
                              var matchVal82303 = G82302;
                              if ((!((("object")===((typeof matchVal82303))))))                                {
                                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                };
                              if ((!((1===matchVal82303.length))))                                {
                                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                };
                              var matchTemp82304 = matchVal82303[0];
                              if ((!((("object")===((typeof matchTemp82304))))))                                {
                                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                };
                              if ((!((4===matchTemp82304.length))))                                {
                                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                };
                              var a = matchTemp82304[0];
                              var b = matchTemp82304[1];
                              var c = matchTemp82304[2];
                              var d = matchTemp82304[3];
                              return module47c9484436.plus(a, b, c, d);
                              ;
                              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G82301))))                              {
                              return G82301;
                              };
                            G82301 = (function (arguments)                              {
                              var matchVal82305 = G82302;
                              var anythingElse82300 = matchVal82305;
                              throw ((("Match fail in anonymous against: ")+(anythingElse82300)));
                              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G82301))))                              {
                              return G82301;
                              };
                            throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: [: a b c d]] (_newline-sequence (+ a b c d))) (anything-else-82300 (_throw (_+ ''Match fail in anonymous against: '' anything-else-82300))))) for value ")+(JSON.stringify(G82302))));
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                          });
                        returnValue82295 = actualFun82297.apply(this, arguments);
                        while (recurP82298(returnValue82295))                          {
                          returnValue82295 = actualFun82297.apply(this, returnValue82295.args);
                          };
                        return returnValue82295;
                        }).call(undefined, [1, 2, 3, 4, 5]), 15);
                      }catch (e)                      {
                      return true;
                      };
                    ;
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G82291))))                    {
                    return G82291;
                    };
                  G82291 = (function (arguments)                    {
                    var matchVal82306 = G82292;
                    var anythingElse82290 = matchVal82306;
                    throw ((("Match fail in anonymous against: ")+(anythingElse82290)));
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G82291))))                    {
                    return G82291;
                    };
                  throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([:] (_newline-sequence (_try ((=== (\\.\\. (lambda ([: a b c d]) (+ a b c d)) (call undefined [: 1 2 3 4 5])) 15)) _catch (e) ((_return true))))) (anything-else-82290 (_throw (_+ ''Match fail in anonymous against: '' anything-else-82290))))) for value ")+(JSON.stringify(G82292))));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                });
              returnValue82285 = actualFun82287.apply(this, arguments);
              while (recurP82288(returnValue82285))                {
                returnValue82285 = actualFun82287.apply(this, returnValue82285.args);
                };
              return returnValue82285;
              });
            globalAlias81653.testTable["support for empty {} notation"] = (function ()              {
              return module47c9484436.TripleEqualminus(JSON.stringify({}), JSON.stringify({                
                
              }));
              });
            globalAlias81653.testTable["support for {} notation"] = (function ()              {
              return module47c9484436.TripleEqualminus(JSON.stringify({                
                x:10,
                y:11
              }), JSON.stringify({                
                x:10,
                y:11
              }));
              });
            return globalAlias81653.runTests();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          ;
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        ;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G82095))))        {
        return G82095;
        };
      G82095 = (function (arguments)        {
        var matchVal82315 = G82096;
        var anythingElse82094 = matchVal82315;
        throw ((("Match fail in require-form against: ")+(anythingElse82094)));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G82095))))        {
        return G82095;
        };
      throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: module-47c9484436] (_newline-sequence (_proper:macro-context (_proper:require-spec ''hooves/hooves'' :all) (_newline-sequence (_var global-alias81653 global) (define (set-module-object value) (_= global-alias81653 value)) (_proper:unit (define-macro _current-module nil current-module) (define-macro define+ ((tail parts)) (match parts ((list (non-kw-symbol name) value-expr) (proper:add-to-symbol-macro-context name (lexical-let ((lcurrent-module current-module) (lname name)) (lambda (_) (\\` (_\\. (\\, lcurrent-module) (\\, lname)))))) (\\` (_= (_\\. (\\, current-module) (\\, name)) (\\, value-expr)))) ((list (list (non-kw-symbol name) (tail args)) (tail (p (function proper:not-null) body))) (proper:add-to-symbol-macro-context name (lexical-let ((lcurrent-module current-module) (lname name)) (lambda (_) (\\` (_\\. (\\, lcurrent-module) (\\, lname)))))) (\\` (_= (_\\. (\\, current-module) (\\, name)) (designated-lambda (\\, (intern (concat spec ''-'' (symbol-name name)))) (\\, args) (\\,@ body))))) ((list (list (non-kw-symbol name) (tail function-terms))) (proper:add-to-symbol-macro-context name (lexical-let ((lcurrent-module current-module) (lname name)) (lambda (_) (\\` (_\\. (\\, lcurrent-module) (\\, lname)))))) (\\` (_= (_\\. (\\, current-module) (\\, name)) (designated-lambda (\\, (intern (concat spec ''-'' (symbol-name name)))) (\\,@ function-terms))))) (other-form (error (concat ''gazelle/proper define must either'' '' by (define symbol expr) or (define'' '' (name arg-pattern ...) body0 ...),'' '' got %S'') (\\` (define+ (\\,@ parts))))))) (define-macro define-macro+ (name (tail rest)) (\\` (define-macro (\\, name) (\\,@ rest)))) (define-macro define-pattern+ (name (tail rest)) (\\` (define-pattern (\\, name) (\\,@ rest)))) (_proper:require-spec ''hooves/hooves'' :all) (define+ test-table ({})) (define-macro define-test (name expr) (\\` (set! [test-table (\\, name)] (lambda nil (\\, expr))))) (define+ (run-tests) (var failures ({})) (var successes ({})) (var failures-count 0) (var successes-count 0) (for* ((test-name test-fun) :in test-table) (console\\.log ''Running test <'' test-name ''>.'') (var result (test-fun\\.call undefined)) (_if result ((set! successes-count (+ 1 successes-count)) (console\\.log ''\tSUCCESS'') (set! [successes test-name] true)) _else ((set! failures-count (+ 1 failures-count)) (console\\.log ''\t**FAILURE**'') (set! [failures test-name] true)))) (console\\.log ''-----------------'') (console\\.log ''Results: '' successes-count '' successes, '' failures-count '' failures.'') (console\\.log ''Failing tests: '') (for* ((test-name _) :in failures) (console\\.log ''\t'' ''<'' test-name ''>'')) ({} failures failures successes successes)) (define-test ''intentionally fails'' false) (define-test ''array match in lambda'' (=== (\\.\\. (lambda ([: a b c d]) (+ a b c d)) (call undefined [: 1 2 3 4])) 10)) (define-test ''array match fail in lambda'' (_try ((=== (\\.\\. (lambda ([: a b c d]) (+ a b c d)) (call undefined [: 1 2 3 4 5])) 15)) _catch (e) ((_return true)))) (define-test ''support for empty {} notation'' (=== (JSON\\.stringify {}) (JSON\\.stringify ({})))) (define-test ''support for {} notation'' (=== (JSON\\.stringify ({} x 10 y 11)) (JSON\\.stringify ({} x 10 y 11)))) (run-tests)))))) (anything-else-82094 (_throw (_+ ''Match fail in require-form against: '' anything-else-82094))))) for value ")+(JSON.stringify(G82096))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValue82089 = actualFun82091.apply(this, arguments);
  while (recurP82092(returnValue82089))    {
    returnValue82089 = actualFun82091.apply(this, returnValue82089.args);
    };
  return returnValue82089;
  }));
