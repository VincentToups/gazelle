(((function ()  {
  var rjs = require("requirejs");
  // (console\.log (_+ "using requirejs in nodejs, rjs is " rjs))
  ;
  rjs.config({    
    nodeRequire:require
  });
  return rjs;
  }))())(["hooves/hooves"], (function ()  {
  var returnValue52507 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigil52506",
      args:arguments
    };
    });
  var recurP52510 = (function (val52511)    {
    if ((("undefined")===((typeof val52511))))      {
      return false;
      };
    return (val52511.recurSigil===("recurSigil52506"));
    });
  var actualFun52509 = (function ()    {
    return (function (arguments)      {
      var G52513 = undefined;
      var G52514 = Array.prototype.slice.apply(arguments);
      G52513 = (function (arguments)        {
        var matchVal52515 = G52514;
        if ((!((("object")===((typeof matchVal52515))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((1===matchVal52515.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var module47c9484436 = matchVal52515[0];
        return (function (arguments)          {
          // ("hooves/hooves" :all)
          ;
          var globalAlias51913 = global;
          var setModuleObject = (function (value)            {
            globalAlias51913 = value;
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
            globalAlias51913.testTable = {              
              
            };
            // define-test
            // macro - no dynamic value.
            ;
            globalAlias51913.runTests = (function ()              {
              var failures = {                
                
              };
              var successes = {                
                
              };
              var failuresCount = 0;
              var successesCount = 0;
              var arrayObject52601 = globalAlias51913.testTable;
              for (testName in (arrayObject52601))                {
                var matchVar52602 = arrayObject52601[testName];
                var testFun = matchVar52602;
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
              var arrayObject52617 = failures;
              for (testName in (arrayObject52617))                {
                var matchVar52618 = arrayObject52617[testName];
                var _ = matchVar52618;
                console.log("\t", "<", testName, ">");
                };
              return {                
                failures:failures,
                successes:successes
              };
              });
            globalAlias51913.testTable["intentionally fails"] = (function ()              {
              return false;
              });
            globalAlias51913.testTable["array match in lambda"] = (function ()              {
              var returnValue52652 = undefined;
              var recur = (function ()                {
                return {                  
                  recurSigil:"recurSigil52651",
                  args:arguments
                };
                });
              var recurP52655 = (function (val52656)                {
                if ((("undefined")===((typeof val52656))))                  {
                  return false;
                  };
                return (val52656.recurSigil===("recurSigil52651"));
                });
              var actualFun52654 = (function ()                {
                return (function (arguments)                  {
                  var G52658 = undefined;
                  var G52659 = Array.prototype.slice.apply(arguments);
                  G52658 = (function (arguments)                    {
                    var matchVal52660 = G52659;
                    if ((!((("object")===((typeof matchVal52660))))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    if ((!((0===matchVal52660.length))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    return module47c9484436.TripleEqualminus((function ()                      {
                      var returnValue52662 = undefined;
                      var recur = (function ()                        {
                        return {                          
                          recurSigil:"recurSigil52661",
                          args:arguments
                        };
                        });
                      var recurP52665 = (function (val52666)                        {
                        if ((("undefined")===((typeof val52666))))                          {
                          return false;
                          };
                        return (val52666.recurSigil===("recurSigil52661"));
                        });
                      var actualFun52664 = (function ()                        {
                        return (function (arguments)                          {
                          var G52668 = undefined;
                          var G52669 = Array.prototype.slice.apply(arguments);
                          G52668 = (function (arguments)                            {
                            var matchVal52670 = G52669;
                            if ((!((("object")===((typeof matchVal52670))))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            if ((!((1===matchVal52670.length))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            var matchTemp52671 = matchVal52670[0];
                            if ((!((("object")===((typeof matchTemp52671))))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            if ((!((4===matchTemp52671.length))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            var a = matchTemp52671[0];
                            var b = matchTemp52671[1];
                            var c = matchTemp52671[2];
                            var d = matchTemp52671[3];
                            return module47c9484436.plus(a, b, c, d);
                            ;
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G52668))))                            {
                            return G52668;
                            };
                          G52668 = (function (arguments)                            {
                            var matchVal52672 = G52669;
                            var anythingElse52667 = matchVal52672;
                            throw ((("Match fail in anonymous against: ")+(anythingElse52667)));
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G52668))))                            {
                            return G52668;
                            };
                          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: [: a b c d]] (_newline-sequence (+ a b c d))) (anything-else-52667 (_throw (_+ ''Match fail in anonymous against: '' anything-else-52667))))) for value ")+(JSON.stringify(G52669))));
                          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                        });
                      returnValue52662 = actualFun52664.apply(this, arguments);
                      while (recurP52665(returnValue52662))                        {
                        returnValue52662 = actualFun52664.apply(this, returnValue52662.args);
                        };
                      return returnValue52662;
                      }).call(undefined, [1, 2, 3, 4]), 10);
                    ;
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G52658))))                    {
                    return G52658;
                    };
                  G52658 = (function (arguments)                    {
                    var matchVal52673 = G52659;
                    var anythingElse52657 = matchVal52673;
                    throw ((("Match fail in anonymous against: ")+(anythingElse52657)));
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G52658))))                    {
                    return G52658;
                    };
                  throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([:] (_newline-sequence (=== (\\.\\. (lambda ([: a b c d]) (+ a b c d)) (call undefined [: 1 2 3 4])) 10))) (anything-else-52657 (_throw (_+ ''Match fail in anonymous against: '' anything-else-52657))))) for value ")+(JSON.stringify(G52659))));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                });
              returnValue52652 = actualFun52654.apply(this, arguments);
              while (recurP52655(returnValue52652))                {
                returnValue52652 = actualFun52654.apply(this, returnValue52652.args);
                };
              return returnValue52652;
              });
            globalAlias51913.testTable["array match fail in lambda"] = (function ()              {
              var returnValue52703 = undefined;
              var recur = (function ()                {
                return {                  
                  recurSigil:"recurSigil52702",
                  args:arguments
                };
                });
              var recurP52706 = (function (val52707)                {
                if ((("undefined")===((typeof val52707))))                  {
                  return false;
                  };
                return (val52707.recurSigil===("recurSigil52702"));
                });
              var actualFun52705 = (function ()                {
                return (function (arguments)                  {
                  var G52709 = undefined;
                  var G52710 = Array.prototype.slice.apply(arguments);
                  G52709 = (function (arguments)                    {
                    var matchVal52711 = G52710;
                    if ((!((("object")===((typeof matchVal52711))))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    if ((!((0===matchVal52711.length))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    try                      {
                      module47c9484436.TripleEqualminus((function ()                        {
                        var returnValue52713 = undefined;
                        var recur = (function ()                          {
                          return {                            
                            recurSigil:"recurSigil52712",
                            args:arguments
                          };
                          });
                        var recurP52716 = (function (val52717)                          {
                          if ((("undefined")===((typeof val52717))))                            {
                            return false;
                            };
                          return (val52717.recurSigil===("recurSigil52712"));
                          });
                        var actualFun52715 = (function ()                          {
                          return (function (arguments)                            {
                            var G52719 = undefined;
                            var G52720 = Array.prototype.slice.apply(arguments);
                            G52719 = (function (arguments)                              {
                              var matchVal52721 = G52720;
                              if ((!((("object")===((typeof matchVal52721))))))                                {
                                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                };
                              if ((!((1===matchVal52721.length))))                                {
                                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                };
                              var matchTemp52722 = matchVal52721[0];
                              if ((!((("object")===((typeof matchTemp52722))))))                                {
                                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                };
                              if ((!((4===matchTemp52722.length))))                                {
                                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                };
                              var a = matchTemp52722[0];
                              var b = matchTemp52722[1];
                              var c = matchTemp52722[2];
                              var d = matchTemp52722[3];
                              return module47c9484436.plus(a, b, c, d);
                              ;
                              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G52719))))                              {
                              return G52719;
                              };
                            G52719 = (function (arguments)                              {
                              var matchVal52723 = G52720;
                              var anythingElse52718 = matchVal52723;
                              throw ((("Match fail in anonymous against: ")+(anythingElse52718)));
                              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G52719))))                              {
                              return G52719;
                              };
                            throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: [: a b c d]] (_newline-sequence (+ a b c d))) (anything-else-52718 (_throw (_+ ''Match fail in anonymous against: '' anything-else-52718))))) for value ")+(JSON.stringify(G52720))));
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                          });
                        returnValue52713 = actualFun52715.apply(this, arguments);
                        while (recurP52716(returnValue52713))                          {
                          returnValue52713 = actualFun52715.apply(this, returnValue52713.args);
                          };
                        return returnValue52713;
                        }).call(undefined, [1, 2, 3, 4, 5]), 15);
                      }catch (e)                      {
                      return true;
                      };
                    ;
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G52709))))                    {
                    return G52709;
                    };
                  G52709 = (function (arguments)                    {
                    var matchVal52724 = G52710;
                    var anythingElse52708 = matchVal52724;
                    throw ((("Match fail in anonymous against: ")+(anythingElse52708)));
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G52709))))                    {
                    return G52709;
                    };
                  throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([:] (_newline-sequence (_try ((=== (\\.\\. (lambda ([: a b c d]) (+ a b c d)) (call undefined [: 1 2 3 4 5])) 15)) _catch (e) ((_return true))))) (anything-else-52708 (_throw (_+ ''Match fail in anonymous against: '' anything-else-52708))))) for value ")+(JSON.stringify(G52710))));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                });
              returnValue52703 = actualFun52705.apply(this, arguments);
              while (recurP52706(returnValue52703))                {
                returnValue52703 = actualFun52705.apply(this, returnValue52703.args);
                };
              return returnValue52703;
              });
            globalAlias51913.testTable["support for empty {} notation"] = (function ()              {
              return module47c9484436.TripleEqualminus(JSON.stringify({}), JSON.stringify({                
                
              }));
              });
            globalAlias51913.testTable["support for {} notation"] = (function ()              {
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
            globalAlias51913.testTable["{} not expanded in strings"] = (function ()              {
              return module47c9484436.TripleEqualminus("{ x y z b}", "{ x y z b}");
              });
            globalAlias51913.testTable["in operator prim"] = (function ()              {
              return (("x") in ({                
                x:10,
                y:11
              }));
              });
            globalAlias51913.testTable["in operator proper"] = (function ()              {
              return (("x") in ({                
                x:10,
                y:11
              }));
              });
            globalAlias51913.testTable["pattern-matching with {} syntax"] = (function ()              {
              var returnValue52787 = undefined;
              var recur = (function ()                {
                return {                  
                  recurSigil:"recurSigil52786",
                  args:arguments
                };
                });
              var recurP52790 = (function (val52791)                {
                if ((("undefined")===((typeof val52791))))                  {
                  return false;
                  };
                return (val52791.recurSigil===("recurSigil52786"));
                });
              var actualFun52789 = (function ()                {
                return (function (arguments)                  {
                  var G52793 = undefined;
                  var G52794 = Array.prototype.slice.apply(arguments);
                  G52793 = (function (arguments)                    {
                    var matchVal52795 = G52794;
                    if ((!((("object")===((typeof matchVal52795))))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    if ((!((0===matchVal52795.length))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    return module47c9484436.TripleEqualminus(10, (function ()                      {
                      var returnValue52797 = undefined;
                      var recur = (function ()                        {
                        return {                          
                          recurSigil:"recurSigil52796",
                          args:arguments
                        };
                        });
                      var recurP52800 = (function (val52801)                        {
                        if ((("undefined")===((typeof val52801))))                          {
                          return false;
                          };
                        return (val52801.recurSigil===("recurSigil52796"));
                        });
                      var actualFun52799 = (function ()                        {
                        return (function (arguments)                          {
                          var G52803 = undefined;
                          var G52804 = Array.prototype.slice.apply(arguments);
                          G52803 = (function (arguments)                            {
                            var matchVal52805 = G52804;
                            if ((!((("object")===((typeof matchVal52805))))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            if ((!((1===matchVal52805.length))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            var matchTemp52806 = matchVal52805[0];
                            var matchObjectTemp52807 = matchTemp52806.x;
                            if ((("undefined")===((typeof matchObjectTemp52807))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            var matchFunExpr52809 = (function (G52808)                              {
                              return (((typeof G52808))===("number"));
                              });
                            if ((!(matchFunExpr52809(matchObjectTemp52807))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            var a = matchObjectTemp52807;
                            return a;
                            ;
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G52803))))                            {
                            return G52803;
                            };
                          G52803 = (function (arguments)                            {
                            var matchVal52810 = G52804;
                            var anythingElse52802 = matchVal52810;
                            throw ((("Match fail in anonymous against: ")+(anythingElse52802)));
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G52803))))                            {
                            return G52803;
                            };
                          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: ({} x (number a))] (_newline-sequence a)) (anything-else-52802 (_throw (_+ ''Match fail in anonymous against: '' anything-else-52802))))) for value ")+(JSON.stringify(G52804))));
                          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                        });
                      returnValue52797 = actualFun52799.apply(this, arguments);
                      while (recurP52800(returnValue52797))                        {
                        returnValue52797 = actualFun52799.apply(this, returnValue52797.args);
                        };
                      return returnValue52797;
                      }).call(undefined, {                      
                      x:10
                    }));
                    ;
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G52793))))                    {
                    return G52793;
                    };
                  G52793 = (function (arguments)                    {
                    var matchVal52811 = G52794;
                    var anythingElse52792 = matchVal52811;
                    throw ((("Match fail in anonymous against: ")+(anythingElse52792)));
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G52793))))                    {
                    return G52793;
                    };
                  throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([:] (_newline-sequence (=== 10 (\\.\\. (lambda (({} x (number a))) a) (call undefined ({} x 10)))))) (anything-else-52792 (_throw (_+ ''Match fail in anonymous against: '' anything-else-52792))))) for value ")+(JSON.stringify(G52794))));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                });
              returnValue52787 = actualFun52789.apply(this, arguments);
              while (recurP52790(returnValue52787))                {
                returnValue52787 = actualFun52789.apply(this, returnValue52787.args);
                };
              return returnValue52787;
              });
            return globalAlias51913.runTests();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          ;
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        ;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G52513))))        {
        return G52513;
        };
      G52513 = (function (arguments)        {
        var matchVal52812 = G52514;
        var anythingElse52512 = matchVal52812;
        throw ((("Match fail in require-form against: ")+(anythingElse52512)));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G52513))))        {
        return G52513;
        };
      throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: module-47c9484436] (_newline-sequence (_proper:macro-context (_proper:require-spec ''hooves/hooves'' :all) (_newline-sequence (_var global-alias51913 global) (define (set-module-object value) (_= global-alias51913 value)) (_proper:unit (define-macro _current-module nil current-module) (define-macro define+ ((tail parts)) (match parts ((list (non-kw-symbol name) value-expr) (proper:add-to-symbol-macro-context name (lexical-let ((lcurrent-module current-module) (lname name)) (lambda (_) (\\` (_\\. (\\, lcurrent-module) (\\, lname)))))) (\\` (_= (_\\. (\\, current-module) (\\, name)) (\\, value-expr)))) ((list (list (non-kw-symbol name) (tail args)) (tail (p (function proper:not-null) body))) (proper:add-to-symbol-macro-context name (lexical-let ((lcurrent-module current-module) (lname name)) (lambda (_) (\\` (_\\. (\\, lcurrent-module) (\\, lname)))))) (\\` (_= (_\\. (\\, current-module) (\\, name)) (designated-lambda (\\, (intern (concat spec ''-'' (symbol-name name)))) (\\, args) (\\,@ body))))) ((list (list (non-kw-symbol name) (tail function-terms))) (proper:add-to-symbol-macro-context name (lexical-let ((lcurrent-module current-module) (lname name)) (lambda (_) (\\` (_\\. (\\, lcurrent-module) (\\, lname)))))) (\\` (_= (_\\. (\\, current-module) (\\, name)) (designated-lambda (\\, (intern (concat spec ''-'' (symbol-name name)))) (\\,@ function-terms))))) (other-form (error (concat ''gazelle/proper define must either'' '' by (define symbol expr) or (define'' '' (name arg-pattern ...) body0 ...),'' '' got %S'') (\\` (define+ (\\,@ parts))))))) (define-macro define-macro+ (name (tail rest)) (\\` (define-macro (\\, name) (\\,@ rest)))) (define-macro define-pattern+ (name (tail rest)) (\\` (define-pattern (\\, name) (\\,@ rest)))) (_proper:require-spec ''hooves/hooves'' :all) (define+ test-table ({})) (define-macro define-test (name expr) (\\` (set! [test-table (\\, name)] (lambda nil (\\, expr))))) (define+ (run-tests) (var failures ({})) (var successes ({})) (var failures-count 0) (var successes-count 0) (for* ((test-name test-fun) :in test-table) (console\\.log ''Running test <'' test-name ''>.'') (var result (test-fun\\.call undefined)) (_if result ((set! successes-count (+ 1 successes-count)) (console\\.log ''\tSUCCESS'') (set! [successes test-name] true)) _else ((set! failures-count (+ 1 failures-count)) (console\\.log ''\t**FAILURE**'') (set! [failures test-name] true)))) (console\\.log ''-----------------'') (console\\.log ''Results: '' successes-count '' successes, '' failures-count '' failures.'') (console\\.log ''Failing tests: '') (for* ((test-name _) :in failures) (console\\.log ''\t'' ''<'' test-name ''>'')) ({} failures failures successes successes)) (define-test ''intentionally fails'' false) (define-test ''array match in lambda'' (=== (\\.\\. (lambda ([: a b c d]) (+ a b c d)) (call undefined [: 1 2 3 4])) 10)) (define-test ''array match fail in lambda'' (_try ((=== (\\.\\. (lambda ([: a b c d]) (+ a b c d)) (call undefined [: 1 2 3 4 5])) 15)) _catch (e) ((_return true)))) (define-test ''support for empty {} notation'' (=== (JSON\\.stringify {}) (JSON\\.stringify ({})))) (define-test ''support for {} notation'' (=== (JSON\\.stringify ({} x 10 y 11)) (JSON\\.stringify ({} x 10 y 11)))) (define-macro file-as-string (filename) (with-temp-buffer (insert-file filename) (buffer-substring (point-min) (point-max)))) (define-test ''{} not expanded in strings'' (=== ''{ x y z b}'' (file-as-string ''test-brackets.string''))) (define-test ''in operator prim'' (_in :x ({} x 10 y 11))) (define-test ''in operator proper'' (in :x ({} x 10 y 11))) (define-test ''pattern-matching with {} syntax'' (=== 10 (\\.\\. (lambda (({} x (number a))) a) (call undefined ({} x 10))))) (run-tests)))))) (anything-else-52512 (_throw (_+ ''Match fail in require-form against: '' anything-else-52512))))) for value ")+(JSON.stringify(G52514))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValue52507 = actualFun52509.apply(this, arguments);
  while (recurP52510(returnValue52507))    {
    returnValue52507 = actualFun52509.apply(this, returnValue52507.args);
    };
  return returnValue52507;
  }));
