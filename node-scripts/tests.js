(((function ()  {
  var rjs = require("requirejs");
  // (console\.log (_+ "using requirejs in nodejs, rjs is " rjs))
  ;
  rjs.config({    
    nodeRequire:require
  });
  return rjs;
  }))())(["hooves/hooves", "test-module/a-module"], (function ()  {
  var returnValue98725 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigil98724",
      args:arguments
    };
    });
  var recurP98728 = (function (val98729)    {
    if ((("undefined")===((typeof val98729))))      {
      return false;
      };
    return (val98729.recurSigil===("recurSigil98724"));
    });
  var actualFun98727 = (function ()    {
    return (function (arguments)      {
      var G98731 = undefined;
      var G98732 = Array.prototype.slice.apply(arguments);
      G98731 = (function (arguments)        {
        var matchVal98733 = G98732;
        if ((!((("object")===((typeof matchVal98733))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((2===matchVal98733.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var module47c9484436 = matchVal98733[0];
        var module5143dd100c = matchVal98733[1];
        return (function (arguments)          {
          // ("hooves/hooves" :all)
          ;
          // ("test-module/a-module" :all)
          ;
          var globalAlias97938 = global;
          var setModuleObject = (function (value)            {
            globalAlias97938 = value;
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
            // ("test-module/a-module" :all)
            ;
            globalAlias97938.testTable = {              
              
            };
            // define-test
            // macro - no dynamic value.
            ;
            globalAlias97938.runTests = (function ()              {
              var failures = {                
                
              };
              var successes = {                
                
              };
              var failuresCount = 0;
              var successesCount = 0;
              var arrayObject98819 = globalAlias97938.testTable;
              for (testName in (arrayObject98819))                {
                var matchVar98820 = arrayObject98819[testName];
                var testFun = matchVar98820;
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
              var arrayObject98835 = failures;
              for (testName in (arrayObject98835))                {
                var matchVar98836 = arrayObject98835[testName];
                var _ = matchVar98836;
                console.log("\t", "<", testName, ">");
                };
              return {                
                failures:failures,
                successes:successes
              };
              });
            globalAlias97938.testTable["intentionally fails"] = (function ()              {
              return false;
              });
            globalAlias97938.testTable["array match in lambda"] = (function ()              {
              var returnValue98870 = undefined;
              var recur = (function ()                {
                return {                  
                  recurSigil:"recurSigil98869",
                  args:arguments
                };
                });
              var recurP98873 = (function (val98874)                {
                if ((("undefined")===((typeof val98874))))                  {
                  return false;
                  };
                return (val98874.recurSigil===("recurSigil98869"));
                });
              var actualFun98872 = (function ()                {
                return (function (arguments)                  {
                  var G98876 = undefined;
                  var G98877 = Array.prototype.slice.apply(arguments);
                  G98876 = (function (arguments)                    {
                    var matchVal98878 = G98877;
                    if ((!((("object")===((typeof matchVal98878))))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    if ((!((0===matchVal98878.length))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    return module47c9484436.TripleEqualminus((function ()                      {
                      var returnValue98880 = undefined;
                      var recur = (function ()                        {
                        return {                          
                          recurSigil:"recurSigil98879",
                          args:arguments
                        };
                        });
                      var recurP98883 = (function (val98884)                        {
                        if ((("undefined")===((typeof val98884))))                          {
                          return false;
                          };
                        return (val98884.recurSigil===("recurSigil98879"));
                        });
                      var actualFun98882 = (function ()                        {
                        return (function (arguments)                          {
                          var G98886 = undefined;
                          var G98887 = Array.prototype.slice.apply(arguments);
                          G98886 = (function (arguments)                            {
                            var matchVal98888 = G98887;
                            if ((!((("object")===((typeof matchVal98888))))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            if ((!((1===matchVal98888.length))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            var matchTemp98889 = matchVal98888[0];
                            if ((!((("object")===((typeof matchTemp98889))))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            if ((!((4===matchTemp98889.length))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            var a = matchTemp98889[0];
                            var b = matchTemp98889[1];
                            var c = matchTemp98889[2];
                            var d = matchTemp98889[3];
                            return module47c9484436.plus(a, b, c, d);
                            ;
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G98886))))                            {
                            return G98886;
                            };
                          G98886 = (function (arguments)                            {
                            var matchVal98890 = G98887;
                            var anythingElse98885 = matchVal98890;
                            throw ((("Match fail in anonymous against: ")+(anythingElse98885)));
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G98886))))                            {
                            return G98886;
                            };
                          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: [: a b c d]] (_newline-sequence (+ a b c d))) (anything-else-98885 (_throw (_+ ''Match fail in anonymous against: '' anything-else-98885))))) for value ")+(JSON.stringify(G98887))));
                          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                        });
                      returnValue98880 = actualFun98882.apply(this, arguments);
                      while (recurP98883(returnValue98880))                        {
                        returnValue98880 = actualFun98882.apply(this, returnValue98880.args);
                        };
                      return returnValue98880;
                      }).call(undefined, [1, 2, 3, 4]), 10);
                    ;
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G98876))))                    {
                    return G98876;
                    };
                  G98876 = (function (arguments)                    {
                    var matchVal98891 = G98877;
                    var anythingElse98875 = matchVal98891;
                    throw ((("Match fail in anonymous against: ")+(anythingElse98875)));
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G98876))))                    {
                    return G98876;
                    };
                  throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([:] (_newline-sequence (=== (\\.\\. (lambda ([: a b c d]) (+ a b c d)) (call undefined [: 1 2 3 4])) 10))) (anything-else-98875 (_throw (_+ ''Match fail in anonymous against: '' anything-else-98875))))) for value ")+(JSON.stringify(G98877))));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                });
              returnValue98870 = actualFun98872.apply(this, arguments);
              while (recurP98873(returnValue98870))                {
                returnValue98870 = actualFun98872.apply(this, returnValue98870.args);
                };
              return returnValue98870;
              });
            globalAlias97938.testTable["array match fail in lambda"] = (function ()              {
              var returnValue98921 = undefined;
              var recur = (function ()                {
                return {                  
                  recurSigil:"recurSigil98920",
                  args:arguments
                };
                });
              var recurP98924 = (function (val98925)                {
                if ((("undefined")===((typeof val98925))))                  {
                  return false;
                  };
                return (val98925.recurSigil===("recurSigil98920"));
                });
              var actualFun98923 = (function ()                {
                return (function (arguments)                  {
                  var G98927 = undefined;
                  var G98928 = Array.prototype.slice.apply(arguments);
                  G98927 = (function (arguments)                    {
                    var matchVal98929 = G98928;
                    if ((!((("object")===((typeof matchVal98929))))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    if ((!((0===matchVal98929.length))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    try                      {
                      module47c9484436.TripleEqualminus((function ()                        {
                        var returnValue98931 = undefined;
                        var recur = (function ()                          {
                          return {                            
                            recurSigil:"recurSigil98930",
                            args:arguments
                          };
                          });
                        var recurP98934 = (function (val98935)                          {
                          if ((("undefined")===((typeof val98935))))                            {
                            return false;
                            };
                          return (val98935.recurSigil===("recurSigil98930"));
                          });
                        var actualFun98933 = (function ()                          {
                          return (function (arguments)                            {
                            var G98937 = undefined;
                            var G98938 = Array.prototype.slice.apply(arguments);
                            G98937 = (function (arguments)                              {
                              var matchVal98939 = G98938;
                              if ((!((("object")===((typeof matchVal98939))))))                                {
                                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                };
                              if ((!((1===matchVal98939.length))))                                {
                                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                };
                              var matchTemp98940 = matchVal98939[0];
                              if ((!((("object")===((typeof matchTemp98940))))))                                {
                                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                };
                              if ((!((4===matchTemp98940.length))))                                {
                                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                };
                              var a = matchTemp98940[0];
                              var b = matchTemp98940[1];
                              var c = matchTemp98940[2];
                              var d = matchTemp98940[3];
                              return module47c9484436.plus(a, b, c, d);
                              ;
                              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G98937))))                              {
                              return G98937;
                              };
                            G98937 = (function (arguments)                              {
                              var matchVal98941 = G98938;
                              var anythingElse98936 = matchVal98941;
                              throw ((("Match fail in anonymous against: ")+(anythingElse98936)));
                              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G98937))))                              {
                              return G98937;
                              };
                            throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: [: a b c d]] (_newline-sequence (+ a b c d))) (anything-else-98936 (_throw (_+ ''Match fail in anonymous against: '' anything-else-98936))))) for value ")+(JSON.stringify(G98938))));
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                          });
                        returnValue98931 = actualFun98933.apply(this, arguments);
                        while (recurP98934(returnValue98931))                          {
                          returnValue98931 = actualFun98933.apply(this, returnValue98931.args);
                          };
                        return returnValue98931;
                        }).call(undefined, [1, 2, 3, 4, 5]), 15);
                      }catch (e)                      {
                      return true;
                      };
                    ;
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G98927))))                    {
                    return G98927;
                    };
                  G98927 = (function (arguments)                    {
                    var matchVal98942 = G98928;
                    var anythingElse98926 = matchVal98942;
                    throw ((("Match fail in anonymous against: ")+(anythingElse98926)));
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G98927))))                    {
                    return G98927;
                    };
                  throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([:] (_newline-sequence (_try ((=== (\\.\\. (lambda ([: a b c d]) (+ a b c d)) (call undefined [: 1 2 3 4 5])) 15)) _catch (e) ((_return true))))) (anything-else-98926 (_throw (_+ ''Match fail in anonymous against: '' anything-else-98926))))) for value ")+(JSON.stringify(G98928))));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                });
              returnValue98921 = actualFun98923.apply(this, arguments);
              while (recurP98924(returnValue98921))                {
                returnValue98921 = actualFun98923.apply(this, returnValue98921.args);
                };
              return returnValue98921;
              });
            globalAlias97938.testTable["support for empty {} notation"] = (function ()              {
              return module47c9484436.TripleEqualminus(JSON.stringify({}), JSON.stringify({                
                
              }));
              });
            globalAlias97938.testTable["support for {} notation"] = (function ()              {
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
            globalAlias97938.testTable["{} not expanded in strings"] = (function ()              {
              return module47c9484436.TripleEqualminus("{ x y z b}", "{ x y z b}");
              });
            globalAlias97938.testTable["{} not expanded as part of symbol."] = (function ()              {
              var returnValue99013 = undefined;
              var recur = (function ()                {
                return {                  
                  recurSigil:"recurSigil99012",
                  args:arguments
                };
                });
              var recurP99016 = (function (val99017)                {
                if ((("undefined")===((typeof val99017))))                  {
                  return false;
                  };
                return (val99017.recurSigil===("recurSigil99012"));
                });
              var actualFun99015 = (function ()                {
                return (function (arguments)                  {
                  var G99019 = undefined;
                  var G99020 = Array.prototype.slice.apply(arguments);
                  G99019 = (function (arguments)                    {
                    var matchVal99021 = G99020;
                    if ((!((("object")===((typeof matchVal99021))))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    if ((!((0===matchVal99021.length))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    return module47c9484436.TripleEqualminus((function ()                      {
                      var returnValue99023 = undefined;
                      var recur = (function ()                        {
                        return {                          
                          recurSigil:"recurSigil99022",
                          args:arguments
                        };
                        });
                      var recurP99026 = (function (val99027)                        {
                        if ((("undefined")===((typeof val99027))))                          {
                          return false;
                          };
                        return (val99027.recurSigil===("recurSigil99022"));
                        });
                      var actualFun99025 = (function ()                        {
                        return (function (arguments)                          {
                          var G99029 = undefined;
                          var G99030 = Array.prototype.slice.apply(arguments);
                          G99029 = (function (arguments)                            {
                            var matchVal99031 = G99030;
                            if ((!((("object")===((typeof matchVal99031))))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            if ((!((matchVal99031.length>=0))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            var matchArraySimplePart99032 = Array.prototype.slice.call(matchVal99031, 0, 0);
                            if ((!((("object")===((typeof matchArraySimplePart99032))))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            if ((!((0===matchArraySimplePart99032.length))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            var matchArrayTailPart99033 = Array.prototype.slice.call(matchVal99031, 0);
                            var fResult99037 = ((function (arrayExpression99034)                              {
                              var out99035 = {                                
                                
                              };
                              for (var i99036 = 0;(i99036<arrayExpression99034.length);i99036 = ((i99036)+(2)))                                {
                                out99035[arrayExpression99034[i99036]] = arrayExpression99034[((i99036)+(1))];
                                };
                              return out99035;
                              }))(matchArrayTailPart99033);
                            if ((fResult99037===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            if ((("undefined")===((typeof fResult99037))))                              {
                              fResult99037 = {                                
                                
                              };
                              };
                            var matchObjectTemp99038 = fResult99037.x;
                            var previousMatchSucceeded99040 = true;
                            switch (1){
                                                          case 1:
                              if ((("undefined")===((typeof matchObjectTemp99038))))                                {
                                previousMatchSucceeded99040 = false;
                                };
                              var x = matchObjectTemp99038;
                              if (previousMatchSucceeded99040)                                {
                                break;
                                };
                              previousMatchSucceeded99040 = true;
                              case 1:
                              var fResult99041 = ((function (x)                                {
                                return 10;
                                }))(matchObjectTemp99038);
                              if ((fResult99041===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                                {
                                previousMatchSucceeded99040 = false;
                                };
                              var x = fResult99041;
                              if (previousMatchSucceeded99040)                                {
                                break;
                                };
                              previousMatchSucceeded99040 = true;
                              default :
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              
                            };
                            var matchObjectTemp99039 = fResult99037.y;
                            var previousMatchSucceeded99042 = true;
                            switch (1){
                                                          case 1:
                              if ((("undefined")===((typeof matchObjectTemp99039))))                                {
                                previousMatchSucceeded99042 = false;
                                };
                              var y = matchObjectTemp99039;
                              if (previousMatchSucceeded99042)                                {
                                break;
                                };
                              previousMatchSucceeded99042 = true;
                              case 1:
                              var fResult99043 = ((function (x)                                {
                                return 11;
                                }))(matchObjectTemp99039);
                              if ((fResult99043===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                                {
                                previousMatchSucceeded99042 = false;
                                };
                              var y = fResult99043;
                              if (previousMatchSucceeded99042)                                {
                                break;
                                };
                              previousMatchSucceeded99042 = true;
                              default :
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              
                            };
                            return module47c9484436.plus(x, y);
                            ;
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G99029))))                            {
                            return G99029;
                            };
                          G99029 = (function (arguments)                            {
                            var matchVal99044 = G99030;
                            var anythingElse99028 = matchVal99044;
                            throw ((("Match fail in anonymous against: ")+(anythingElse99028)));
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G99029))))                            {
                            return G99029;
                            };
                          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: :* (as-options{} (x 10) (y 11))] (_newline-sequence (+ x y))) (anything-else-99028 (_throw (_+ ''Match fail in anonymous against: '' anything-else-99028))))) for value ")+(JSON.stringify(G99030))));
                          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                        });
                      returnValue99023 = actualFun99025.apply(this, arguments);
                      while (recurP99026(returnValue99023))                        {
                        returnValue99023 = actualFun99025.apply(this, returnValue99023.args);
                        };
                      return returnValue99023;
                      }).call(undefined), 21);
                    ;
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G99019))))                    {
                    return G99019;
                    };
                  G99019 = (function (arguments)                    {
                    var matchVal99045 = G99020;
                    var anythingElse99018 = matchVal99045;
                    throw ((("Match fail in anonymous against: ")+(anythingElse99018)));
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G99019))))                    {
                    return G99019;
                    };
                  throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([:] (_newline-sequence (=== (\\.\\. (lambda (:* (as-options{} (x 10) (y 11))) (+ x y)) (call undefined)) 21))) (anything-else-99018 (_throw (_+ ''Match fail in anonymous against: '' anything-else-99018))))) for value ")+(JSON.stringify(G99020))));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                });
              returnValue99013 = actualFun99015.apply(this, arguments);
              while (recurP99016(returnValue99013))                {
                returnValue99013 = actualFun99015.apply(this, returnValue99013.args);
                };
              return returnValue99013;
              });
            globalAlias97938.testTable["in operator prim"] = (function ()              {
              return (("x") in ({                
                x:10,
                y:11
              }));
              });
            globalAlias97938.testTable["in operator proper"] = (function ()              {
              return (("x") in ({                
                x:10,
                y:11
              }));
              });
            globalAlias97938.testTable["pattern-matching with {} syntax"] = (function ()              {
              var returnValue99089 = undefined;
              var recur = (function ()                {
                return {                  
                  recurSigil:"recurSigil99088",
                  args:arguments
                };
                });
              var recurP99092 = (function (val99093)                {
                if ((("undefined")===((typeof val99093))))                  {
                  return false;
                  };
                return (val99093.recurSigil===("recurSigil99088"));
                });
              var actualFun99091 = (function ()                {
                return (function (arguments)                  {
                  var G99095 = undefined;
                  var G99096 = Array.prototype.slice.apply(arguments);
                  G99095 = (function (arguments)                    {
                    var matchVal99097 = G99096;
                    if ((!((("object")===((typeof matchVal99097))))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    if ((!((0===matchVal99097.length))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    return module47c9484436.TripleEqualminus(10, (function ()                      {
                      var returnValue99099 = undefined;
                      var recur = (function ()                        {
                        return {                          
                          recurSigil:"recurSigil99098",
                          args:arguments
                        };
                        });
                      var recurP99102 = (function (val99103)                        {
                        if ((("undefined")===((typeof val99103))))                          {
                          return false;
                          };
                        return (val99103.recurSigil===("recurSigil99098"));
                        });
                      var actualFun99101 = (function ()                        {
                        return (function (arguments)                          {
                          var G99105 = undefined;
                          var G99106 = Array.prototype.slice.apply(arguments);
                          G99105 = (function (arguments)                            {
                            var matchVal99107 = G99106;
                            if ((!((("object")===((typeof matchVal99107))))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            if ((!((1===matchVal99107.length))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            var matchTemp99108 = matchVal99107[0];
                            var matchObjectTemp99109 = matchTemp99108.x;
                            if ((("undefined")===((typeof matchObjectTemp99109))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            var matchFunExpr99111 = (function (G99110)                              {
                              return (((typeof G99110))===("number"));
                              });
                            if ((!(matchFunExpr99111(matchObjectTemp99109))))                              {
                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                              };
                            var a = matchObjectTemp99109;
                            return a;
                            ;
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G99105))))                            {
                            return G99105;
                            };
                          G99105 = (function (arguments)                            {
                            var matchVal99112 = G99106;
                            var anythingElse99104 = matchVal99112;
                            throw ((("Match fail in anonymous against: ")+(anythingElse99104)));
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G99105))))                            {
                            return G99105;
                            };
                          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: ({} x (number a))] (_newline-sequence a)) (anything-else-99104 (_throw (_+ ''Match fail in anonymous against: '' anything-else-99104))))) for value ")+(JSON.stringify(G99106))));
                          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                        });
                      returnValue99099 = actualFun99101.apply(this, arguments);
                      while (recurP99102(returnValue99099))                        {
                        returnValue99099 = actualFun99101.apply(this, returnValue99099.args);
                        };
                      return returnValue99099;
                      }).call(undefined, {                      
                      x:10
                    }));
                    ;
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G99095))))                    {
                    return G99095;
                    };
                  G99095 = (function (arguments)                    {
                    var matchVal99113 = G99096;
                    var anythingElse99094 = matchVal99113;
                    throw ((("Match fail in anonymous against: ")+(anythingElse99094)));
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G99095))))                    {
                    return G99095;
                    };
                  throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([:] (_newline-sequence (=== 10 (\\.\\. (lambda (({} x (number a))) a) (call undefined ({} x 10)))))) (anything-else-99094 (_throw (_+ ''Match fail in anonymous against: '' anything-else-99094))))) for value ")+(JSON.stringify(G99096))));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                });
              returnValue99089 = actualFun99091.apply(this, arguments);
              while (recurP99092(returnValue99089))                {
                returnValue99089 = actualFun99091.apply(this, returnValue99089.args);
                };
              return returnValue99089;
              });
            globalAlias97938.testTable["quote inside a module"] = (function ()              {
              return module47c9484436.TripleEqualminus("someValue", module5143dd100c.quotedValue);
              });
            return globalAlias97938.runTests();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          ;
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        ;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G98731))))        {
        return G98731;
        };
      G98731 = (function (arguments)        {
        var matchVal99118 = G98732;
        var anythingElse98730 = matchVal99118;
        throw ((("Match fail in require-form against: ")+(anythingElse98730)));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G98731))))        {
        return G98731;
        };
      throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: module-47c9484436 module-5143dd100c] (_newline-sequence (_proper:macro-context (_proper:require-spec ''hooves/hooves'' :all) (_proper:require-spec ''test-module/a-module'' :all) (_newline-sequence (_var global-alias97938 global) (define (set-module-object value) (_= global-alias97938 value)) (_proper:unit (define-macro _current-module nil current-module) (define-macro define+ ((tail parts)) (match parts ((list (non-kw-symbol name) value-expr) (proper:add-to-symbol-macro-context name (lexical-let ((lcurrent-module current-module) (lname name)) (lambda (_) (\\` (_\\. (\\, lcurrent-module) (\\, lname)))))) (\\` (_= (_\\. (\\, current-module) (\\, name)) (\\, value-expr)))) ((list (list (non-kw-symbol name) (tail args)) (tail (p (function proper:not-null) body))) (proper:add-to-symbol-macro-context name (lexical-let ((lcurrent-module current-module) (lname name)) (lambda (_) (\\` (_\\. (\\, lcurrent-module) (\\, lname)))))) (\\` (_= (_\\. (\\, current-module) (\\, name)) (designated-lambda (\\, (intern (concat spec ''-'' (symbol-name name)))) (\\, args) (\\,@ body))))) ((list (list (non-kw-symbol name) (tail function-terms))) (proper:add-to-symbol-macro-context name (lexical-let ((lcurrent-module current-module) (lname name)) (lambda (_) (\\` (_\\. (\\, lcurrent-module) (\\, lname)))))) (\\` (_= (_\\. (\\, current-module) (\\, name)) (designated-lambda (\\, (intern (concat spec ''-'' (symbol-name name)))) (\\,@ function-terms))))) (other-form (error (concat ''gazelle/proper define must either'' '' by (define symbol expr) or (define'' '' (name arg-pattern ...) body0 ...),'' '' got %S'') (\\` (define+ (\\,@ parts))))))) (define-macro define-macro+ (name (tail rest)) (\\` (define-macro (\\, name) (\\,@ rest)))) (define-macro define-pattern+ (name (tail rest)) (\\` (define-pattern (\\, name) (\\,@ rest)))) (_proper:require-spec ''hooves/hooves'' :all) (_proper:require-spec ''test-module/a-module'' :all) (define+ test-table ({})) (define-macro define-test (name expr) (\\` (set! [test-table (\\, name)] (lambda nil (\\, expr))))) (define+ (run-tests) (var failures ({})) (var successes ({})) (var failures-count 0) (var successes-count 0) (for* ((test-name test-fun) :in test-table) (console\\.log ''Running test <'' test-name ''>.'') (var result (test-fun\\.call undefined)) (_if result ((set! successes-count (+ 1 successes-count)) (console\\.log ''\tSUCCESS'') (set! [successes test-name] true)) _else ((set! failures-count (+ 1 failures-count)) (console\\.log ''\t**FAILURE**'') (set! [failures test-name] true)))) (console\\.log ''-----------------'') (console\\.log ''Results: '' successes-count '' successes, '' failures-count '' failures.'') (console\\.log ''Failing tests: '') (for* ((test-name _) :in failures) (console\\.log ''\t'' ''<'' test-name ''>'')) ({} failures failures successes successes)) (define-test ''intentionally fails'' false) (define-test ''array match in lambda'' (=== (\\.\\. (lambda ([: a b c d]) (+ a b c d)) (call undefined [: 1 2 3 4])) 10)) (define-test ''array match fail in lambda'' (_try ((=== (\\.\\. (lambda ([: a b c d]) (+ a b c d)) (call undefined [: 1 2 3 4 5])) 15)) _catch (e) ((_return true)))) (define-test ''support for empty {} notation'' (=== (JSON\\.stringify {}) (JSON\\.stringify ({})))) (define-test ''support for {} notation'' (=== (JSON\\.stringify ({} x 10 y 11)) (JSON\\.stringify ({} x 10 y 11)))) (define-macro file-as-string (filename) (with-temp-buffer (insert-file filename) (buffer-substring (point-min) (point-max)))) (define-test ''{} not expanded in strings'' (=== ''{ x y z b}'' (file-as-string ''test-brackets.string''))) (define-test ''{} not expanded as part of symbol.'' (=== (\\.\\. (lambda (:* (as-options{} (x 10) (y 11))) (+ x y)) (call undefined)) 21)) (define-test ''in operator prim'' (_in :x ({} x 10 y 11))) (define-test ''in operator proper'' (in :x ({} x 10 y 11))) (define-test ''pattern-matching with {} syntax'' (=== 10 (\\.\\. (lambda (({} x (number a))) a) (call undefined ({} x 10))))) (define-test ''quote inside a module'' (=== (quote some-value) quoted-value)) (run-tests)))))) (anything-else-98730 (_throw (_+ ''Match fail in require-form against: '' anything-else-98730))))) for value ")+(JSON.stringify(G98732))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValue98725 = actualFun98727.apply(this, arguments);
  while (recurP98728(returnValue98725))    {
    returnValue98725 = actualFun98727.apply(this, returnValue98725.args);
    };
  return returnValue98725;
  }));
