(((function ()  {
  var rjs = require("requirejs");
  // (console\.log (_+ "using requirejs in nodejs, rjs is " rjs))
  ;
  rjs.config({    
    nodeRequire:require
  });
  return rjs;
  }))())(["hooves/hooves", "test-module/a-module"], (function ()  {
  var returnValue30582 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigil30581",
      args:arguments
    };
    });
  var recurP30585 = (function (val30586)    {
    if ((("undefined")===((typeof val30586))))      {
      return false;
      };
    return (val30586.recurSigil===("recurSigil30581"));
    });
  var actualFun30584 = (function ()    {
    return (function (arguments30590)      {
      arguments = arguments30590;
      var G30588 = undefined;
      var G30589 = Array.prototype.slice.apply(arguments);
      G30588 = (function (arguments30592)        {
        arguments = arguments30592;
        var matchVal30591 = G30589;
        if ((!((("object")===((typeof matchVal30591))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((2===matchVal30591.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var module4745e9d952 = matchVal30591[0];
        var module102a23208a = matchVal30591[1];
        return (function (arguments31026)          {
          arguments = arguments31026;
          // ("hooves/hooves" :all)
          ;
          // ("test-module/a-module" :all)
          ;
          var globalAlias29712 = global;
          var setModuleObject = (function (value)            {
            globalAlias29712 = value;
            });
          return (function (arguments31025)            {
            arguments = arguments31025;
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
            // ("test-module/a-module" :all)
            ;
            globalAlias29712.testTable = {              
              
            };
            // define-test
            // macro - no dynamic value.
            ;
            globalAlias29712.runTests = (function ()              {
              var failures = {                
                
              };
              var successes = {                
                
              };
              var failuresCount = 0;
              var successesCount = 0;
              var arrayObject30664 = globalAlias29712.testTable;
              for (testName in (arrayObject30664))                {
                var matchVar30665 = arrayObject30664[testName];
                var testFun = matchVar30665;
                console.log("Running test <", testName, ">.");
                var result = testFun.call(undefined);
                if (result)                  {
                  successesCount = module4745e9d952.plus(1, successesCount);
                  console.log("\tSUCCESS");
                  successes[testName] = true;
                  } else                   {
                  failuresCount = module4745e9d952.plus(1, failuresCount);
                  console.log("\t**FAILURE**");
                  failures[testName] = true;
                  };
                };
              console.log("-----------------");
              console.log("Results: ", successesCount, " successes, ", failuresCount, " failures.");
              console.log("Failing tests: ");
              var arrayObject30678 = failures;
              for (testName in (arrayObject30678))                {
                var matchVar30679 = arrayObject30678[testName];
                var _ = matchVar30679;
                console.log("\t", "<", testName, ">");
                };
              return {                
                failures:failures,
                successes:successes
              };
              });
            globalAlias29712.testTable["intentionally fails"] = (function ()              {
              return false;
              });
            globalAlias29712.testTable["array match in lambda"] = (function ()              {
              var returnValue30719 = undefined;
              var recur = (function ()                {
                return {                  
                  recurSigil:"recurSigil30718",
                  args:arguments
                };
                });
              var recurP30722 = (function (val30723)                {
                if ((("undefined")===((typeof val30723))))                  {
                  return false;
                  };
                return (val30723.recurSigil===("recurSigil30718"));
                });
              var actualFun30721 = (function ()                {
                return (function (arguments30727)                  {
                  arguments = arguments30727;
                  var G30725 = undefined;
                  var G30726 = Array.prototype.slice.apply(arguments);
                  G30725 = (function (arguments30729)                    {
                    arguments = arguments30729;
                    var matchVal30728 = G30726;
                    if ((!((("object")===((typeof matchVal30728))))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    if ((!((0===matchVal30728.length))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    return module4745e9d952.TripleEqualminus((function ()                      {
                      var returnValue30731 = undefined;
                      var recur = (function ()                        {
                        return {                          
                          recurSigil:"recurSigil30730",
                          args:arguments
                        };
                        });
                      var recurP30734 = (function (val30735)                        {
                        if ((("undefined")===((typeof val30735))))                          {
                          return false;
                          };
                        return (val30735.recurSigil===("recurSigil30730"));
                        });
                      var actualFun30733 = (function ()                        {
                        return (function (arguments30739)                          {
                          arguments = arguments30739;
                          var G30737 = undefined;
                          var G30738 = Array.prototype.slice.apply(arguments);
                          G30737 = (function (arguments30742)                            {
                            arguments = arguments30742;
                            var matchVal30740 = G30738;
                            if ((!((("object")===((typeof matchVal30740))))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            if ((!((1===matchVal30740.length))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            var matchTemp30741 = matchVal30740[0];
                            if ((!((("object")===((typeof matchTemp30741))))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            if ((!((4===matchTemp30741.length))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            var a = matchTemp30741[0];
                            var b = matchTemp30741[1];
                            var c = matchTemp30741[2];
                            var d = matchTemp30741[3];
                            return module4745e9d952.plus(a, b, c, d);
                            ;
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30737))))                            {
                            return G30737;
                            };
                          G30737 = (function (arguments30744)                            {
                            arguments = arguments30744;
                            var matchVal30743 = G30738;
                            var anythingElse30736 = matchVal30743;
                            throw ((("Match fail in anonymous against: ")+(anythingElse30736)));
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30737))))                            {
                            return G30737;
                            };
                          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: [: a b c d]] (_newline-sequence (+ a b c d))) (anything-else-30736 (_throw (_+ ''Match fail in anonymous against: '' anything-else-30736))))) for value ")+(JSON.stringify(G30738))));
                          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                        });
                      returnValue30731 = actualFun30733.apply(this, arguments);
                      while (recurP30734(returnValue30731))                        {
                        returnValue30731 = actualFun30733.apply(this, returnValue30731.args);
                        };
                      return returnValue30731;
                      }).call(undefined, [1, 2, 3, 4]), 10);
                    ;
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30725))))                    {
                    return G30725;
                    };
                  G30725 = (function (arguments30746)                    {
                    arguments = arguments30746;
                    var matchVal30745 = G30726;
                    var anythingElse30724 = matchVal30745;
                    throw ((("Match fail in anonymous against: ")+(anythingElse30724)));
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30725))))                    {
                    return G30725;
                    };
                  throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([:] (_newline-sequence (=== (\\.\\. (lambda ([: a b c d]) (+ a b c d)) (call undefined [: 1 2 3 4])) 10))) (anything-else-30724 (_throw (_+ ''Match fail in anonymous against: '' anything-else-30724))))) for value ")+(JSON.stringify(G30726))));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                });
              returnValue30719 = actualFun30721.apply(this, arguments);
              while (recurP30722(returnValue30719))                {
                returnValue30719 = actualFun30721.apply(this, returnValue30719.args);
                };
              return returnValue30719;
              });
            globalAlias29712.testTable["array match fail in lambda"] = (function ()              {
              var returnValue30782 = undefined;
              var recur = (function ()                {
                return {                  
                  recurSigil:"recurSigil30781",
                  args:arguments
                };
                });
              var recurP30785 = (function (val30786)                {
                if ((("undefined")===((typeof val30786))))                  {
                  return false;
                  };
                return (val30786.recurSigil===("recurSigil30781"));
                });
              var actualFun30784 = (function ()                {
                return (function (arguments30790)                  {
                  arguments = arguments30790;
                  var G30788 = undefined;
                  var G30789 = Array.prototype.slice.apply(arguments);
                  G30788 = (function (arguments30792)                    {
                    arguments = arguments30792;
                    var matchVal30791 = G30789;
                    if ((!((("object")===((typeof matchVal30791))))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    if ((!((0===matchVal30791.length))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    try                      {
                      module4745e9d952.TripleEqualminus((function ()                        {
                        var returnValue30794 = undefined;
                        var recur = (function ()                          {
                          return {                            
                            recurSigil:"recurSigil30793",
                            args:arguments
                          };
                          });
                        var recurP30797 = (function (val30798)                          {
                          if ((("undefined")===((typeof val30798))))                            {
                            return false;
                            };
                          return (val30798.recurSigil===("recurSigil30793"));
                          });
                        var actualFun30796 = (function ()                          {
                          return (function (arguments30802)                            {
                            arguments = arguments30802;
                            var G30800 = undefined;
                            var G30801 = Array.prototype.slice.apply(arguments);
                            G30800 = (function (arguments30805)                              {
                              arguments = arguments30805;
                              var matchVal30803 = G30801;
                              if ((!((("object")===((typeof matchVal30803))))))                                {
                                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                };
                              if ((!((1===matchVal30803.length))))                                {
                                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                };
                              var matchTemp30804 = matchVal30803[0];
                              if ((!((("object")===((typeof matchTemp30804))))))                                {
                                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                };
                              if ((!((4===matchTemp30804.length))))                                {
                                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                };
                              var a = matchTemp30804[0];
                              var b = matchTemp30804[1];
                              var c = matchTemp30804[2];
                              var d = matchTemp30804[3];
                              return module4745e9d952.plus(a, b, c, d);
                              ;
                              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30800))))                              {
                              return G30800;
                              };
                            G30800 = (function (arguments30807)                              {
                              arguments = arguments30807;
                              var matchVal30806 = G30801;
                              var anythingElse30799 = matchVal30806;
                              throw ((("Match fail in anonymous against: ")+(anythingElse30799)));
                              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30800))))                              {
                              return G30800;
                              };
                            throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: [: a b c d]] (_newline-sequence (+ a b c d))) (anything-else-30799 (_throw (_+ ''Match fail in anonymous against: '' anything-else-30799))))) for value ")+(JSON.stringify(G30801))));
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                          });
                        returnValue30794 = actualFun30796.apply(this, arguments);
                        while (recurP30797(returnValue30794))                          {
                          returnValue30794 = actualFun30796.apply(this, returnValue30794.args);
                          };
                        return returnValue30794;
                        }).call(undefined, [1, 2, 3, 4, 5]), 15);
                      }catch (e)                      {
                      return true;
                      };
                    ;
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30788))))                    {
                    return G30788;
                    };
                  G30788 = (function (arguments30809)                    {
                    arguments = arguments30809;
                    var matchVal30808 = G30789;
                    var anythingElse30787 = matchVal30808;
                    throw ((("Match fail in anonymous against: ")+(anythingElse30787)));
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30788))))                    {
                    return G30788;
                    };
                  throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([:] (_newline-sequence (_try ((=== (\\.\\. (lambda ([: a b c d]) (+ a b c d)) (call undefined [: 1 2 3 4 5])) 15)) _catch (e) ((_return true))))) (anything-else-30787 (_throw (_+ ''Match fail in anonymous against: '' anything-else-30787))))) for value ")+(JSON.stringify(G30789))));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                });
              returnValue30782 = actualFun30784.apply(this, arguments);
              while (recurP30785(returnValue30782))                {
                returnValue30782 = actualFun30784.apply(this, returnValue30782.args);
                };
              return returnValue30782;
              });
            globalAlias29712.testTable["support for empty {} notation"] = (function ()              {
              return module4745e9d952.TripleEqualminus(JSON.stringify({}), JSON.stringify({                
                
              }));
              });
            globalAlias29712.testTable["support for {} notation"] = (function ()              {
              return module4745e9d952.TripleEqualminus(JSON.stringify({                
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
            globalAlias29712.testTable["{} not expanded in strings"] = (function ()              {
              return module4745e9d952.TripleEqualminus("{ x y z b}", "{ x y z b}");
              });
            globalAlias29712.testTable["{} not expanded as part of symbol."] = (function ()              {
              var returnValue30886 = undefined;
              var recur = (function ()                {
                return {                  
                  recurSigil:"recurSigil30885",
                  args:arguments
                };
                });
              var recurP30889 = (function (val30890)                {
                if ((("undefined")===((typeof val30890))))                  {
                  return false;
                  };
                return (val30890.recurSigil===("recurSigil30885"));
                });
              var actualFun30888 = (function ()                {
                return (function (arguments30894)                  {
                  arguments = arguments30894;
                  var G30892 = undefined;
                  var G30893 = Array.prototype.slice.apply(arguments);
                  G30892 = (function (arguments30896)                    {
                    arguments = arguments30896;
                    var matchVal30895 = G30893;
                    if ((!((("object")===((typeof matchVal30895))))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    if ((!((0===matchVal30895.length))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    return module4745e9d952.TripleEqualminus((function ()                      {
                      var returnValue30898 = undefined;
                      var recur = (function ()                        {
                        return {                          
                          recurSigil:"recurSigil30897",
                          args:arguments
                        };
                        });
                      var recurP30901 = (function (val30902)                        {
                        if ((("undefined")===((typeof val30902))))                          {
                          return false;
                          };
                        return (val30902.recurSigil===("recurSigil30897"));
                        });
                      var actualFun30900 = (function ()                        {
                        return (function (arguments30906)                          {
                          arguments = arguments30906;
                          var G30904 = undefined;
                          var G30905 = Array.prototype.slice.apply(arguments);
                          G30904 = (function (arguments30920)                            {
                            arguments = arguments30920;
                            var matchVal30907 = G30905;
                            if ((!((("object")===((typeof matchVal30907))))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            if ((!((matchVal30907.length>=0))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            var matchArraySimplePart30908 = Array.prototype.slice.call(matchVal30907, 0, 0);
                            if ((!((("object")===((typeof matchArraySimplePart30908))))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            if ((!((0===matchArraySimplePart30908.length))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            var matchArrayTailPart30909 = Array.prototype.slice.call(matchVal30907, 0);
                            var fResult30913 = ((function (arrayExpression30910)                              {
                              var out30911 = {                                
                                
                              };
                              for (var i30912 = 0;(i30912<arrayExpression30910.length);i30912 = ((i30912)+(2)))                                {
                                out30911[arrayExpression30910[i30912]] = arrayExpression30910[((i30912)+(1))];
                                };
                              return out30911;
                              }))(matchArrayTailPart30909);
                            if ((fResult30913===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            if ((("undefined")===((typeof fResult30913))))                              {
                              fResult30913 = {                                
                                
                              };
                              };
                            var matchObjectTemp30914 = fResult30913.x;
                            var previousMatchSucceeded30916 = true;
                            switch (1){
                                                          case 1:
                              if ((("undefined")===((typeof matchObjectTemp30914))))                                {
                                previousMatchSucceeded30916 = false;
                                };
                              var x = matchObjectTemp30914;
                              if (previousMatchSucceeded30916)                                {
                                break;
                                };
                              previousMatchSucceeded30916 = true;
                              case 1:
                              var fResult30917 = ((function (x)                                {
                                return 10;
                                }))(matchObjectTemp30914);
                              if ((fResult30917===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                                {
                                previousMatchSucceeded30916 = false;
                                };
                              var x = fResult30917;
                              if (previousMatchSucceeded30916)                                {
                                break;
                                };
                              previousMatchSucceeded30916 = true;
                              default :
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              
                            };
                            var matchObjectTemp30915 = fResult30913.y;
                            var previousMatchSucceeded30918 = true;
                            switch (1){
                                                          case 1:
                              if ((("undefined")===((typeof matchObjectTemp30915))))                                {
                                previousMatchSucceeded30918 = false;
                                };
                              var y = matchObjectTemp30915;
                              if (previousMatchSucceeded30918)                                {
                                break;
                                };
                              previousMatchSucceeded30918 = true;
                              case 1:
                              var fResult30919 = ((function (x)                                {
                                return 11;
                                }))(matchObjectTemp30915);
                              if ((fResult30919===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                                {
                                previousMatchSucceeded30918 = false;
                                };
                              var y = fResult30919;
                              if (previousMatchSucceeded30918)                                {
                                break;
                                };
                              previousMatchSucceeded30918 = true;
                              default :
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              
                            };
                            return module4745e9d952.plus(x, y);
                            ;
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30904))))                            {
                            return G30904;
                            };
                          G30904 = (function (arguments30922)                            {
                            arguments = arguments30922;
                            var matchVal30921 = G30905;
                            var anythingElse30903 = matchVal30921;
                            throw ((("Match fail in anonymous against: ")+(anythingElse30903)));
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30904))))                            {
                            return G30904;
                            };
                          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: :* (as-options{} (x 10) (y 11))] (_newline-sequence (+ x y))) (anything-else-30903 (_throw (_+ ''Match fail in anonymous against: '' anything-else-30903))))) for value ")+(JSON.stringify(G30905))));
                          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                        });
                      returnValue30898 = actualFun30900.apply(this, arguments);
                      while (recurP30901(returnValue30898))                        {
                        returnValue30898 = actualFun30900.apply(this, returnValue30898.args);
                        };
                      return returnValue30898;
                      }).call(undefined), 21);
                    ;
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30892))))                    {
                    return G30892;
                    };
                  G30892 = (function (arguments30924)                    {
                    arguments = arguments30924;
                    var matchVal30923 = G30893;
                    var anythingElse30891 = matchVal30923;
                    throw ((("Match fail in anonymous against: ")+(anythingElse30891)));
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30892))))                    {
                    return G30892;
                    };
                  throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([:] (_newline-sequence (=== (\\.\\. (lambda (:* (as-options{} (x 10) (y 11))) (+ x y)) (call undefined)) 21))) (anything-else-30891 (_throw (_+ ''Match fail in anonymous against: '' anything-else-30891))))) for value ")+(JSON.stringify(G30893))));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                });
              returnValue30886 = actualFun30888.apply(this, arguments);
              while (recurP30889(returnValue30886))                {
                returnValue30886 = actualFun30888.apply(this, returnValue30886.args);
                };
              return returnValue30886;
              });
            globalAlias29712.testTable["in operator prim"] = (function ()              {
              return (("x") in ({                
                x:10,
                y:11
              }));
              });
            globalAlias29712.testTable["in operator proper"] = (function ()              {
              return (("x") in ({                
                x:10,
                y:11
              }));
              });
            globalAlias29712.testTable["pattern-matching with {} syntax"] = (function ()              {
              var returnValue30974 = undefined;
              var recur = (function ()                {
                return {                  
                  recurSigil:"recurSigil30973",
                  args:arguments
                };
                });
              var recurP30977 = (function (val30978)                {
                if ((("undefined")===((typeof val30978))))                  {
                  return false;
                  };
                return (val30978.recurSigil===("recurSigil30973"));
                });
              var actualFun30976 = (function ()                {
                return (function (arguments30982)                  {
                  arguments = arguments30982;
                  var G30980 = undefined;
                  var G30981 = Array.prototype.slice.apply(arguments);
                  G30980 = (function (arguments30984)                    {
                    arguments = arguments30984;
                    var matchVal30983 = G30981;
                    if ((!((("object")===((typeof matchVal30983))))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    if ((!((0===matchVal30983.length))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    return module4745e9d952.TripleEqualminus(10, (function ()                      {
                      var returnValue30986 = undefined;
                      var recur = (function ()                        {
                        return {                          
                          recurSigil:"recurSigil30985",
                          args:arguments
                        };
                        });
                      var recurP30989 = (function (val30990)                        {
                        if ((("undefined")===((typeof val30990))))                          {
                          return false;
                          };
                        return (val30990.recurSigil===("recurSigil30985"));
                        });
                      var actualFun30988 = (function ()                        {
                        return (function (arguments30994)                          {
                          arguments = arguments30994;
                          var G30992 = undefined;
                          var G30993 = Array.prototype.slice.apply(arguments);
                          G30992 = (function (arguments31000)                            {
                            arguments = arguments31000;
                            var matchVal30995 = G30993;
                            if ((!((("object")===((typeof matchVal30995))))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            if ((!((1===matchVal30995.length))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            var matchTemp30996 = matchVal30995[0];
                            var matchObjectTemp30997 = matchTemp30996.x;
                            if ((("undefined")===((typeof matchObjectTemp30997))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            var matchFunExpr30999 = (function (G30998)                              {
                              return (((typeof G30998))===("number"));
                              });
                            if ((!(matchFunExpr30999(matchObjectTemp30997))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            var a = matchObjectTemp30997;
                            return a;
                            ;
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30992))))                            {
                            return G30992;
                            };
                          G30992 = (function (arguments31002)                            {
                            arguments = arguments31002;
                            var matchVal31001 = G30993;
                            var anythingElse30991 = matchVal31001;
                            throw ((("Match fail in anonymous against: ")+(anythingElse30991)));
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30992))))                            {
                            return G30992;
                            };
                          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: ({} x (number a))] (_newline-sequence a)) (anything-else-30991 (_throw (_+ ''Match fail in anonymous against: '' anything-else-30991))))) for value ")+(JSON.stringify(G30993))));
                          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                        });
                      returnValue30986 = actualFun30988.apply(this, arguments);
                      while (recurP30989(returnValue30986))                        {
                        returnValue30986 = actualFun30988.apply(this, returnValue30986.args);
                        };
                      return returnValue30986;
                      }).call(undefined, {                      
                      x:10
                    }));
                    ;
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30980))))                    {
                    return G30980;
                    };
                  G30980 = (function (arguments31004)                    {
                    arguments = arguments31004;
                    var matchVal31003 = G30981;
                    var anythingElse30979 = matchVal31003;
                    throw ((("Match fail in anonymous against: ")+(anythingElse30979)));
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30980))))                    {
                    return G30980;
                    };
                  throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([:] (_newline-sequence (=== 10 (\\.\\. (lambda (({} x (number a))) a) (call undefined ({} x 10)))))) (anything-else-30979 (_throw (_+ ''Match fail in anonymous against: '' anything-else-30979))))) for value ")+(JSON.stringify(G30981))));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                });
              returnValue30974 = actualFun30976.apply(this, arguments);
              while (recurP30977(returnValue30974))                {
                returnValue30974 = actualFun30976.apply(this, returnValue30974.args);
                };
              return returnValue30974;
              });
            globalAlias29712.testTable["quote inside a module"] = (function ()              {
              return module4745e9d952.TripleEqualminus("someValue", module102a23208a.quotedValue);
              });
            globalAlias29712.testTable["arguments preserved in _let"] = (function ()              {
              return module4745e9d952.TripleEqualminus(10, (function ()                {
                return (function (arguments31016, x)                  {
                  arguments = arguments31016;
                  return arguments[0];
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), 0);
                }).call(undefined, 10, 11, 12));
              });
            globalAlias29712.testTable["arguments preserved in progn"] = (function ()              {
              return module4745e9d952.TripleEqualminus(10, (function ()                {
                return (function (arguments31024)                  {
                  arguments = arguments31024;
                  return arguments[0];
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                }).call(undefined, 10, 11, 12));
              });
            return globalAlias29712.runTests();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          ;
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        ;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30588))))        {
        return G30588;
        };
      G30588 = (function (arguments31028)        {
        arguments = arguments31028;
        var matchVal31027 = G30589;
        var anythingElse30587 = matchVal31027;
        throw ((("Match fail in require-form against: ")+(anythingElse30587)));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30588))))        {
        return G30588;
        };
      throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: module-4745e9d952 module-102a23208a] (_newline-sequence (_proper:macro-context (_proper:require-spec ''hooves/hooves'' :all) (_proper:require-spec ''test-module/a-module'' :all) (_newline-sequence (_var global-alias29712 global) (define (set-module-object value) (_= global-alias29712 value)) (_proper:unit (define-macro _current-module nil current-module) (define-macro define+ ((tail parts)) (match parts ((list (non-kw-symbol name) value-expr) (proper:add-to-symbol-macro-context name (lexical-let ((lcurrent-module current-module) (lname name)) (lambda (_) (\\` (_\\. (\\, lcurrent-module) (\\, lname)))))) (\\` (_= (_\\. (\\, current-module) (\\, name)) (\\, value-expr)))) ((list (list (non-kw-symbol name) (tail args)) (tail (p (function proper:not-null) body))) (proper:add-to-symbol-macro-context name (lexical-let ((lcurrent-module current-module) (lname name)) (lambda (_) (\\` (_\\. (\\, lcurrent-module) (\\, lname)))))) (\\` (_= (_\\. (\\, current-module) (\\, name)) (designated-lambda (\\, (intern (concat spec ''-'' (symbol-name name)))) (\\, args) (\\,@ body))))) ((list (list (non-kw-symbol name) (tail function-terms))) (proper:add-to-symbol-macro-context name (lexical-let ((lcurrent-module current-module) (lname name)) (lambda (_) (\\` (_\\. (\\, lcurrent-module) (\\, lname)))))) (\\` (_= (_\\. (\\, current-module) (\\, name)) (designated-lambda (\\, (intern (concat spec ''-'' (symbol-name name)))) (\\,@ function-terms))))) (other-form (error (concat ''gazelle/proper define must either'' '' by (define symbol expr) or (define'' '' (name arg-pattern ...) body0 ...),'' '' got %S'') (\\` (define+ (\\,@ parts))))))) (define-macro define-macro+ (name (tail rest)) (\\` (define-macro (\\, name) (\\,@ rest)))) (define-macro define-pattern+ (name (tail rest)) (\\` (define-pattern (\\, name) (\\,@ rest)))) (_proper:require-spec ''hooves/hooves'' :all) (_proper:require-spec ''test-module/a-module'' :all) (define+ test-table ({})) (define-macro define-test (name expr) (\\` (set! [test-table (\\, name)] (lambda nil (\\, expr))))) (define+ (run-tests) (var failures ({})) (var successes ({})) (var failures-count 0) (var successes-count 0) (for* ((test-name test-fun) :in test-table) (console\\.log ''Running test <'' test-name ''>.'') (var result (test-fun\\.call undefined)) (_if result ((set! successes-count (+ 1 successes-count)) (console\\.log ''\tSUCCESS'') (set! [successes test-name] true)) _else ((set! failures-count (+ 1 failures-count)) (console\\.log ''\t**FAILURE**'') (set! [failures test-name] true)))) (console\\.log ''-----------------'') (console\\.log ''Results: '' successes-count '' successes, '' failures-count '' failures.'') (console\\.log ''Failing tests: '') (for* ((test-name _) :in failures) (console\\.log ''\t'' ''<'' test-name ''>'')) ({} failures failures successes successes)) (define-test ''intentionally fails'' false) (define-test ''array match in lambda'' (=== (\\.\\. (lambda ([: a b c d]) (+ a b c d)) (call undefined [: 1 2 3 4])) 10)) (define-test ''array match fail in lambda'' (_try ((=== (\\.\\. (lambda ([: a b c d]) (+ a b c d)) (call undefined [: 1 2 3 4 5])) 15)) _catch (e) ((_return true)))) (define-test ''support for empty {} notation'' (=== (JSON\\.stringify {}) (JSON\\.stringify ({})))) (define-test ''support for {} notation'' (=== (JSON\\.stringify ({} x 10 y 11)) (JSON\\.stringify ({} x 10 y 11)))) (define-macro file-as-string (filename) (with-temp-buffer (insert-file filename) (buffer-substring (point-min) (point-max)))) (define-test ''{} not expanded in strings'' (=== ''{ x y z b}'' (file-as-string ''test-brackets.string''))) (define-test ''{} not expanded as part of symbol.'' (=== (\\.\\. (lambda (:* (as-options{} (x 10) (y 11))) (+ x y)) (call undefined)) 21)) (define-test ''in operator prim'' (_in :x ({} x 10 y 11))) (define-test ''in operator proper'' (in :x ({} x 10 y 11))) (define-test ''pattern-matching with {} syntax'' (=== 10 (\\.\\. (lambda (({} x (number a))) a) (call undefined ({} x 10))))) (define-test ''quote inside a module'' (=== (quote some-value) quoted-value)) (define-test ''arguments preserved in _let'' (=== 10 (\\.\\. (lambda nil (_let ((x 0)) [arguments 0])) (call undefined 10 11 12)))) (define-test ''arguments preserved in progn'' (=== 10 (\\.\\. (lambda nil (progn [arguments 0])) (call undefined 10 11 12)))) (run-tests)))))) (anything-else-30587 (_throw (_+ ''Match fail in require-form against: '' anything-else-30587))))) for value ")+(JSON.stringify(G30589))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValue30582 = actualFun30584.apply(this, arguments);
  while (recurP30585(returnValue30582))    {
    returnValue30582 = actualFun30584.apply(this, returnValue30582.args);
    };
  return returnValue30582;
  }));
