(((function ()  {
  var rjs = require("requirejs");
  // (console\.log (_+ "using requirejs in nodejs, rjs is " rjs))
  ;
  rjs.config({    
    nodeRequire:require
  });
  return rjs;
  }))())(["hooves/hooves"], (function ()  {
  var returnValue31536 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigil31535",
      args:arguments
    };
    });
  var recurP31539 = (function (val31540)    {
    if ((("undefined")===((typeof val31540))))      {
      return false;
      };
    return (val31540.recurSigil===("recurSigil31535"));
    });
  var actualFun31538 = (function ()    {
    return (function (arguments)      {
      var G31542 = undefined;
      var G31543 = Array.prototype.slice.apply(arguments);
      G31542 = (function (arguments)        {
        var matchVal31544 = G31543;
        if ((!((("object")===((typeof matchVal31544))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((1===matchVal31544.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var module47c9484436 = matchVal31544[0];
        return (function (arguments)          {
          // ("hooves/hooves" :all)
          ;
          var globalAlias29610 = global;
          var setModuleObject = (function (value)            {
            globalAlias29610 = value;
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
            globalAlias29610.testTable = {              
              
            };
            // define-test
            // macro - no dynamic value.
            ;
            globalAlias29610.runTests = (function ()              {
              var failures = {                
                
              };
              var successes = {                
                
              };
              var failuresCount = 0;
              var successesCount = 0;
              var arrayObject31630 = globalAlias29610.testTable;
              for (testName in (arrayObject31630))                {
                var matchVar31631 = arrayObject31630[testName];
                var testFun = matchVar31631;
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
              var arrayObject31646 = failures;
              for (testName in (arrayObject31646))                {
                var matchVar31647 = arrayObject31646[testName];
                var _ = matchVar31647;
                console.log("\t", "<", testName, ">");
                };
              return {                
                failures:failures,
                successes:successes
              };
              });
            globalAlias29610.testTable["intentionally fails"] = (function ()              {
              return false;
              });
            globalAlias29610.testTable["array match in lambda"] = (function ()              {
              var returnValue31681 = undefined;
              var recur = (function ()                {
                return {                  
                  recurSigil:"recurSigil31680",
                  args:arguments
                };
                });
              var recurP31684 = (function (val31685)                {
                if ((("undefined")===((typeof val31685))))                  {
                  return false;
                  };
                return (val31685.recurSigil===("recurSigil31680"));
                });
              var actualFun31683 = (function ()                {
                return (function (arguments)                  {
                  var G31687 = undefined;
                  var G31688 = Array.prototype.slice.apply(arguments);
                  G31687 = (function (arguments)                    {
                    var matchVal31689 = G31688;
                    if ((!((("object")===((typeof matchVal31689))))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    if ((!((0===matchVal31689.length))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    return module47c9484436.TripleEqualminus((function ()                      {
                      var returnValue31691 = undefined;
                      var recur = (function ()                        {
                        return {                          
                          recurSigil:"recurSigil31690",
                          args:arguments
                        };
                        });
                      var recurP31694 = (function (val31695)                        {
                        if ((("undefined")===((typeof val31695))))                          {
                          return false;
                          };
                        return (val31695.recurSigil===("recurSigil31690"));
                        });
                      var actualFun31693 = (function ()                        {
                        return (function (arguments)                          {
                          var G31697 = undefined;
                          var G31698 = Array.prototype.slice.apply(arguments);
                          G31697 = (function (arguments)                            {
                            var matchVal31699 = G31698;
                            if ((!((("object")===((typeof matchVal31699))))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            if ((!((1===matchVal31699.length))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            var matchTemp31700 = matchVal31699[0];
                            if ((!((("object")===((typeof matchTemp31700))))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            if ((!((4===matchTemp31700.length))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            var a = matchTemp31700[0];
                            var b = matchTemp31700[1];
                            var c = matchTemp31700[2];
                            var d = matchTemp31700[3];
                            return module47c9484436.plus(a, b, c, d);
                            ;
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G31697))))                            {
                            return G31697;
                            };
                          G31697 = (function (arguments)                            {
                            var matchVal31701 = G31698;
                            var anythingElse31696 = matchVal31701;
                            throw ((("Match fail in anonymous against: ")+(anythingElse31696)));
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G31697))))                            {
                            return G31697;
                            };
                          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: [: a b c d]] (_newline-sequence (+ a b c d))) (anything-else-31696 (_throw (_+ ''Match fail in anonymous against: '' anything-else-31696))))) for value ")+(JSON.stringify(G31698))));
                          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                        });
                      returnValue31691 = actualFun31693.apply(this, arguments);
                      while (recurP31694(returnValue31691))                        {
                        returnValue31691 = actualFun31693.apply(this, returnValue31691.args);
                        };
                      return returnValue31691;
                      }).call(undefined, [1, 2, 3, 4]), 10);
                    ;
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G31687))))                    {
                    return G31687;
                    };
                  G31687 = (function (arguments)                    {
                    var matchVal31702 = G31688;
                    var anythingElse31686 = matchVal31702;
                    throw ((("Match fail in anonymous against: ")+(anythingElse31686)));
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G31687))))                    {
                    return G31687;
                    };
                  throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([:] (_newline-sequence (=== (\\.\\. (lambda ([: a b c d]) (+ a b c d)) (call undefined [: 1 2 3 4])) 10))) (anything-else-31686 (_throw (_+ ''Match fail in anonymous against: '' anything-else-31686))))) for value ")+(JSON.stringify(G31688))));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                });
              returnValue31681 = actualFun31683.apply(this, arguments);
              while (recurP31684(returnValue31681))                {
                returnValue31681 = actualFun31683.apply(this, returnValue31681.args);
                };
              return returnValue31681;
              });
            globalAlias29610.testTable["array match fail in lambda"] = (function ()              {
              var returnValue31732 = undefined;
              var recur = (function ()                {
                return {                  
                  recurSigil:"recurSigil31731",
                  args:arguments
                };
                });
              var recurP31735 = (function (val31736)                {
                if ((("undefined")===((typeof val31736))))                  {
                  return false;
                  };
                return (val31736.recurSigil===("recurSigil31731"));
                });
              var actualFun31734 = (function ()                {
                return (function (arguments)                  {
                  var G31738 = undefined;
                  var G31739 = Array.prototype.slice.apply(arguments);
                  G31738 = (function (arguments)                    {
                    var matchVal31740 = G31739;
                    if ((!((("object")===((typeof matchVal31740))))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    if ((!((0===matchVal31740.length))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    try                      {
                      module47c9484436.TripleEqualminus((function ()                        {
                        var returnValue31742 = undefined;
                        var recur = (function ()                          {
                          return {                            
                            recurSigil:"recurSigil31741",
                            args:arguments
                          };
                          });
                        var recurP31745 = (function (val31746)                          {
                          if ((("undefined")===((typeof val31746))))                            {
                            return false;
                            };
                          return (val31746.recurSigil===("recurSigil31741"));
                          });
                        var actualFun31744 = (function ()                          {
                          return (function (arguments)                            {
                            var G31748 = undefined;
                            var G31749 = Array.prototype.slice.apply(arguments);
                            G31748 = (function (arguments)                              {
                              var matchVal31750 = G31749;
                              if ((!((("object")===((typeof matchVal31750))))))                                {
                                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                };
                              if ((!((1===matchVal31750.length))))                                {
                                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                };
                              var matchTemp31751 = matchVal31750[0];
                              if ((!((("object")===((typeof matchTemp31751))))))                                {
                                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                };
                              if ((!((4===matchTemp31751.length))))                                {
                                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                };
                              var a = matchTemp31751[0];
                              var b = matchTemp31751[1];
                              var c = matchTemp31751[2];
                              var d = matchTemp31751[3];
                              return module47c9484436.plus(a, b, c, d);
                              ;
                              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G31748))))                              {
                              return G31748;
                              };
                            G31748 = (function (arguments)                              {
                              var matchVal31752 = G31749;
                              var anythingElse31747 = matchVal31752;
                              throw ((("Match fail in anonymous against: ")+(anythingElse31747)));
                              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G31748))))                              {
                              return G31748;
                              };
                            throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: [: a b c d]] (_newline-sequence (+ a b c d))) (anything-else-31747 (_throw (_+ ''Match fail in anonymous against: '' anything-else-31747))))) for value ")+(JSON.stringify(G31749))));
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                          });
                        returnValue31742 = actualFun31744.apply(this, arguments);
                        while (recurP31745(returnValue31742))                          {
                          returnValue31742 = actualFun31744.apply(this, returnValue31742.args);
                          };
                        return returnValue31742;
                        }).call(undefined, [1, 2, 3, 4, 5]), 15);
                      }catch (e)                      {
                      return true;
                      };
                    ;
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G31738))))                    {
                    return G31738;
                    };
                  G31738 = (function (arguments)                    {
                    var matchVal31753 = G31739;
                    var anythingElse31737 = matchVal31753;
                    throw ((("Match fail in anonymous against: ")+(anythingElse31737)));
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G31738))))                    {
                    return G31738;
                    };
                  throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([:] (_newline-sequence (_try ((=== (\\.\\. (lambda ([: a b c d]) (+ a b c d)) (call undefined [: 1 2 3 4 5])) 15)) _catch (e) ((_return true))))) (anything-else-31737 (_throw (_+ ''Match fail in anonymous against: '' anything-else-31737))))) for value ")+(JSON.stringify(G31739))));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                });
              returnValue31732 = actualFun31734.apply(this, arguments);
              while (recurP31735(returnValue31732))                {
                returnValue31732 = actualFun31734.apply(this, returnValue31732.args);
                };
              return returnValue31732;
              });
            globalAlias29610.testTable["support for empty {} notation"] = (function ()              {
              return module47c9484436.TripleEqualminus(JSON.stringify({}), JSON.stringify({                
                
              }));
              });
            globalAlias29610.testTable["support for {} notation"] = (function ()              {
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
            globalAlias29610.testTable["{} not expanded in strings"] = (function ()              {
              return module47c9484436.TripleEqualminus("{ x y z b}", "{ x y z b}");
              });
            globalAlias29610.testTable["in operator prim"] = (function ()              {
              return (("x") in ({                
                x:10,
                y:11
              }));
              });
            globalAlias29610.testTable["in operator proper"] = (function ()              {
              return (("x") in ({                
                x:10,
                y:11
              }));
              });
            return globalAlias29610.runTests();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          ;
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        ;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G31542))))        {
        return G31542;
        };
      G31542 = (function (arguments)        {
        var matchVal31781 = G31543;
        var anythingElse31541 = matchVal31781;
        throw ((("Match fail in require-form against: ")+(anythingElse31541)));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G31542))))        {
        return G31542;
        };
      throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: module-47c9484436] (_newline-sequence (_proper:macro-context (_proper:require-spec ''hooves/hooves'' :all) (_newline-sequence (_var global-alias29610 global) (define (set-module-object value) (_= global-alias29610 value)) (_proper:unit (define-macro _current-module nil current-module) (define-macro define+ ((tail parts)) (match parts ((list (non-kw-symbol name) value-expr) (proper:add-to-symbol-macro-context name (lexical-let ((lcurrent-module current-module) (lname name)) (lambda (_) (\\` (_\\. (\\, lcurrent-module) (\\, lname)))))) (\\` (_= (_\\. (\\, current-module) (\\, name)) (\\, value-expr)))) ((list (list (non-kw-symbol name) (tail args)) (tail (p (function proper:not-null) body))) (proper:add-to-symbol-macro-context name (lexical-let ((lcurrent-module current-module) (lname name)) (lambda (_) (\\` (_\\. (\\, lcurrent-module) (\\, lname)))))) (\\` (_= (_\\. (\\, current-module) (\\, name)) (designated-lambda (\\, (intern (concat spec ''-'' (symbol-name name)))) (\\, args) (\\,@ body))))) ((list (list (non-kw-symbol name) (tail function-terms))) (proper:add-to-symbol-macro-context name (lexical-let ((lcurrent-module current-module) (lname name)) (lambda (_) (\\` (_\\. (\\, lcurrent-module) (\\, lname)))))) (\\` (_= (_\\. (\\, current-module) (\\, name)) (designated-lambda (\\, (intern (concat spec ''-'' (symbol-name name)))) (\\,@ function-terms))))) (other-form (error (concat ''gazelle/proper define must either'' '' by (define symbol expr) or (define'' '' (name arg-pattern ...) body0 ...),'' '' got %S'') (\\` (define+ (\\,@ parts))))))) (define-macro define-macro+ (name (tail rest)) (\\` (define-macro (\\, name) (\\,@ rest)))) (define-macro define-pattern+ (name (tail rest)) (\\` (define-pattern (\\, name) (\\,@ rest)))) (_proper:require-spec ''hooves/hooves'' :all) (define+ test-table ({})) (define-macro define-test (name expr) (\\` (set! [test-table (\\, name)] (lambda nil (\\, expr))))) (define+ (run-tests) (var failures ({})) (var successes ({})) (var failures-count 0) (var successes-count 0) (for* ((test-name test-fun) :in test-table) (console\\.log ''Running test <'' test-name ''>.'') (var result (test-fun\\.call undefined)) (_if result ((set! successes-count (+ 1 successes-count)) (console\\.log ''\tSUCCESS'') (set! [successes test-name] true)) _else ((set! failures-count (+ 1 failures-count)) (console\\.log ''\t**FAILURE**'') (set! [failures test-name] true)))) (console\\.log ''-----------------'') (console\\.log ''Results: '' successes-count '' successes, '' failures-count '' failures.'') (console\\.log ''Failing tests: '') (for* ((test-name _) :in failures) (console\\.log ''\t'' ''<'' test-name ''>'')) ({} failures failures successes successes)) (define-test ''intentionally fails'' false) (define-test ''array match in lambda'' (=== (\\.\\. (lambda ([: a b c d]) (+ a b c d)) (call undefined [: 1 2 3 4])) 10)) (define-test ''array match fail in lambda'' (_try ((=== (\\.\\. (lambda ([: a b c d]) (+ a b c d)) (call undefined [: 1 2 3 4 5])) 15)) _catch (e) ((_return true)))) (define-test ''support for empty {} notation'' (=== (JSON\\.stringify {}) (JSON\\.stringify ({})))) (define-test ''support for {} notation'' (=== (JSON\\.stringify ({} x 10 y 11)) (JSON\\.stringify ({} x 10 y 11)))) (define-macro file-as-string (filename) (with-temp-buffer (insert-file filename) (buffer-substring (point-min) (point-max)))) (define-test ''{} not expanded in strings'' (=== ''{ x y z b}'' (file-as-string ''test-brackets.string''))) (define-test ''in operator prim'' (_in :x ({} x 10 y 11))) (define-test ''in operator proper'' (in :x ({} x 10 y 11))) (run-tests)))))) (anything-else-31541 (_throw (_+ ''Match fail in require-form against: '' anything-else-31541))))) for value ")+(JSON.stringify(G31543))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValue31536 = actualFun31538.apply(this, arguments);
  while (recurP31539(returnValue31536))    {
    returnValue31536 = actualFun31538.apply(this, returnValue31536.args);
    };
  return returnValue31536;
  }));
