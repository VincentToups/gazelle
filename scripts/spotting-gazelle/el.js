define(["hooves/hooves"], (function (module47c9484436)  {
  var currentModule30748 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModule30748 = value;
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
    var buffers = [];
    currentModule30748.Buffer = (function (name, initialContents)      {
      this.name = name;
      this.contents = contents;
      this.point = 0;
      this.mark = undefined;
      buffers.push(this);
      return this;
      });
    currentModule30748.killBuffer = (function ()      {
      var returnValue30837 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil30836",
          args:arguments
        };
        });
      var recurP30840 = (function (val30841)        {
        if ((("undefined")===((typeof val30841))))          {
          return false;
          };
        return (val30841.recurSigil===("recurSigil30836"));
        });
      var actualFun30839 = (function ()        {
        return (function (arguments)          {
          var G30843 = undefined;
          var G30844 = Array.prototype.slice.apply(arguments);
          G30843 = (function (arguments)            {
            var matchVal30845 = G30844;
            if ((!((("object")===((typeof matchVal30845))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchVal30845.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var bufferOrName = matchVal30845[0];
            return (function (arguments)              {
              var G30846 = undefined;
              var G30847 = bufferOrName;
              G30846 = (function (arguments)                {
                var matchVal30848 = G30847;
                var matchFunExpr30853 = (function (G30852)                  {
                  return (((typeof G30852))===("string"));
                  });
                if ((!(matchFunExpr30853(matchVal30848))))                  {
                  return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                  };
                var name = matchVal30848;
                buffers = module47c9484436.filter((function ()                  {
                  var returnValue30855 = undefined;
                  var recur = (function ()                    {
                    return {                      
                      recurSigil:"recurSigil30854",
                      args:arguments
                    };
                    });
                  var recurP30858 = (function (val30859)                    {
                    if ((("undefined")===((typeof val30859))))                      {
                      return false;
                      };
                    return (val30859.recurSigil===("recurSigil30854"));
                    });
                  var actualFun30857 = (function ()                    {
                    return (function (arguments)                      {
                      var G30861 = undefined;
                      var G30862 = Array.prototype.slice.apply(arguments);
                      G30861 = (function (arguments)                        {
                        var matchVal30863 = G30862;
                        if ((!((("object")===((typeof matchVal30863))))))                          {
                          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                          };
                        if ((!((1===matchVal30863.length))))                          {
                          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                          };
                        var matchTemp30864 = matchVal30863[0];
                        var theBufferName = matchTemp30864.name;
                        if ((("undefined")===((typeof theBufferName))))                          {
                          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                          };
                        return not(module47c9484436.TripleEqualminus(name, theBufferName));
                        ;
                        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30861))))                        {
                        return G30861;
                        };
                      G30861 = (function (arguments)                        {
                        var matchVal30865 = G30862;
                        var anythingElse30860 = matchVal30865;
                        throw ((("Match fail in anonymous against: ")+anythingElse30860));
                        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30861))))                        {
                        return G30861;
                        };
                      throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: ({} name the-buffer-name)] (_newline-sequence (not (=== name the-buffer-name)))) (anything-else-30860 (_throw (_+ ''Match fail in anonymous against: '' anything-else-30860))))) for value ")+(JSON.stringify(G30862))));
                      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                    });
                  returnValue30855 = actualFun30857.apply(this, arguments);
                  while (recurP30858(returnValue30855))                    {
                    returnValue30855 = actualFun30857.apply(this, returnValue30855.args);
                    };
                  return returnValue30855;
                  }), buffers);
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30846))))                {
                return G30846;
                };
              throw ((("match-fail at ((match buffer-or-name ((string name) (set! buffers (filter (lambda (({} name the-buffer-name)) (not (=== name the-buffer-name))) buffers))))) for value ")+(JSON.stringify(G30847))));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30843))))            {
            return G30843;
            };
          G30843 = (function (arguments)            {
            var matchVal30866 = G30844;
            var anythingElse30842 = matchVal30866;
            throw ((("Match fail in spotting-gazelle/el-kill-buffer against: ")+anythingElse30842));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30843))))            {
            return G30843;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: buffer-or-name] (_newline-sequence (match buffer-or-name ((string name) (set! buffers (filter (lambda (({} name the-buffer-name)) (not (=== name the-buffer-name))) buffers)))))) (anything-else-30842 (_throw (_+ ''Match fail in spotting-gazelle/el-kill-buffer against: '' anything-else-30842))))) for value ")+(JSON.stringify(G30844))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue30837 = actualFun30839.apply(this, arguments);
      while (recurP30840(returnValue30837))        {
        returnValue30837 = actualFun30839.apply(this, returnValue30837.args);
        };
      return returnValue30837;
      });
    currentModule30748.newBuffer = (function ()      {
      var returnValue30890 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil30889",
          args:arguments
        };
        });
      var recurP30893 = (function (val30894)        {
        if ((("undefined")===((typeof val30894))))          {
          return false;
          };
        return (val30894.recurSigil===("recurSigil30889"));
        });
      var actualFun30892 = (function ()        {
        return (function (arguments)          {
          var G30896 = undefined;
          var G30897 = Array.prototype.slice.apply(arguments);
          G30896 = (function (arguments)            {
            var matchVal30898 = G30897;
            if ((!((("object")===((typeof matchVal30898))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal30898.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart30899 = Array.prototype.slice.call(matchVal30898, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePart30899))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePart30899.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPart30900 = Array.prototype.slice.call(matchVal30898, 0);
            var matchTemp30901 = matchArrayTailPart30900[0];
            var previousMatchSucceeded30902 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTemp30901))))                {
                previousMatchSucceeded30902 = false;
                };
              var contents = matchTemp30901;
              if (previousMatchSucceeded30902)                {
                break;
                };
              previousMatchSucceeded30902 = true;
              case 1:
              var fResult30903 = ((function (x)                {
                return "";
                }))(matchTemp30901);
              if ((fResult30903===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceeded30902 = false;
                };
              var contents = fResult30903;
              if (previousMatchSucceeded30902)                {
                break;
                };
              previousMatchSucceeded30902 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            return (new (currentModule30748.Buffer)(contents));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30896))))            {
            return G30896;
            };
          G30896 = (function (arguments)            {
            var matchVal30904 = G30897;
            var anythingElse30895 = matchVal30904;
            throw ((("Match fail in spotting-gazelle/el-new-buffer against: ")+anythingElse30895));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30896))))            {
            return G30896;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: :- (opt contents '''')] (_newline-sequence (new Buffer contents))) (anything-else-30895 (_throw (_+ ''Match fail in spotting-gazelle/el-new-buffer against: '' anything-else-30895))))) for value ")+(JSON.stringify(G30897))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue30890 = actualFun30892.apply(this, arguments);
      while (recurP30893(returnValue30890))        {
        returnValue30890 = actualFun30892.apply(this, returnValue30890.args);
        };
      return returnValue30890;
      });
    // buffer
    // pattern - no dynamic value.
    ;
    var currentBuffer = undefined;
    currentModule30748.getBuffer = (function (object)      {
      return (function (arguments)        {
        var G30944 = undefined;
        var G30945 = object;
        G30944 = (function (arguments)          {
          var matchVal30946 = G30945;
          var matchFunExpr30948 = (function (G30947)            {
            return (G30947 instanceof currentModule30748.Buffer);
            });
          if ((!(matchFunExpr30948(matchVal30946))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var object = matchVal30946;
          return object;
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30944))))          {
          return G30944;
          };
        G30944 = (function (arguments)          {
          var matchVal30949 = G30945;
          var matchFunExpr30954 = (function (G30953)            {
            return (((typeof G30953))===("string"));
            });
          if ((!(matchFunExpr30954(matchVal30949))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var string = matchVal30949;
          return nil;
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G30944))))          {
          return G30944;
          };
        throw ((("match-fail at ((match object ((instance Buffer object) object) ((string string) nil))) for value ")+(JSON.stringify(G30945))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    currentModule30748.coerce = (function (object, type)      {
      return (function (arguments)        {
        var G31034 = undefined;
        var G31035 = type;
        G31034 = (function (arguments)          {
          var matchVal31036 = G31035;
          if ((!((("string")===matchVal31036))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          return (((object instanceof Array))?(object.join("")) : (object.toString()));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G31034))))          {
          return G31034;
          };
        G31034 = (function (arguments)          {
          var matchVal31037 = G31035;
          if ((!((("list")===matchVal31037))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          return (function (arguments)            {
            var G31038 = undefined;
            var G31039 = object;
            G31038 = (function (arguments)              {
              var matchVal31040 = G31039;
              var matchFunExpr31042 = (function (G31041)                {
                return (G31041 instanceof Array);
                });
              if ((!(matchFunExpr31042(matchVal31040))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              var a = matchVal31040;
              return a;
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G31038))))              {
              return G31038;
              };
            G31038 = (function (arguments)              {
              var matchVal31043 = G31039;
              var matchFunExpr31048 = (function (G31047)                {
                return (((typeof G31047))===("string"));
                });
              if ((!(matchFunExpr31048(matchVal31043))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              var object = matchVal31043;
              return currentModule30748.mapcar((function (x)                {
                return x;
                }), object);
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G31038))))              {
              return G31038;
              };
            G31038 = (function (arguments)              {
              var matchVal31049 = G31039;
              var matchFunExpr31051 = (function (G31050)                {
                return (G31050 instanceof Object);
                });
              if ((!(matchFunExpr31051(matchVal31049))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              var o = matchVal31049;
              return (function (arguments)                {
                var G31071 = undefined;
                var G31072 = [[], (function (index, element)                  {
                  return [index, element];
                  })];
                G31071 = (function (arguments)                  {
                  var matchVal31073 = G31072;
                  if ((!((("object")===((typeof matchVal31073))))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  if ((!((2===matchVal31073.length))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var collecter31066 = matchVal31073[0];
                  var collectForBodyLambda31068 = matchVal31073[1];
                  var arrayObject31088 = o;
                  for (index in (arrayObject31088))                    {
                    var matchVar31089 = arrayObject31088[index];
                    var collectForValue31067 = matchVar31089;
                    collecter31066.push(collectForBodyLambda31068.call(this, index, collectForValue31067));
                    };
                  return collecter31066;
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G31071))))                  {
                  return G31071;
                  };
                G31071 = (function (arguments)                  {
                  var matchVal31090 = G31072;
                  var G31070 = matchVal31090;
                  throw ((("Match error in ")+("(let ((collecter31066 [:]) (collect-for-body-lambda31068 (lambda (index element) [: index element]))) (for* ((index collect-for-value31067) :in o) (\\.\\. collecter31066 (push (\\.\\. collect-for-body-lambda31068 (call this index collect-for-value31067))))) collecter31066)")));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G31071))))                  {
                  return G31071;
                  };
                throw ((("match-fail at ((match [: [:] (lambda (index element) [: index element])] ([: collecter31066 collect-for-body-lambda31068] (for* ((index collect-for-value31067) :in o) (\\.\\. collecter31066 (push (\\.\\. collect-for-body-lambda31068 (call this index collect-for-value31067))))) collecter31066) (G31070 (_throw (_+ ''Match error in '' ''(let ((collecter31066 [:]) (collect-for-body-lambda31068 (lambda (index element) [: index element]))) (for* ((index collect-for-value31067) :in o) (\\\\.\\\\. collecter31066 (push (\\\\.\\\\. collect-for-body-lambda31068 (call this index collect-for-value31067))))) collecter31066)''))))) for value ")+(JSON.stringify(G31072))));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G31038))))              {
              return G31038;
              };
            throw ((("match-fail at ((match object ((instance Array a) a) ((string object) (mapcar (lambda (x) x) object)) ((instance Object o) (collect-for ((index element) :in o) [: index element])))) for value ")+(JSON.stringify(G31039))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G31034))))          {
          return G31034;
          };
        throw ((("match-fail at ((match type (''string'' (if (instanceof object Array) (\\.\\. object (join '''')) (\\.\\. object (to-string)))) (''list'' (match object ((instance Array a) a) ((string object) (mapcar (lambda (x) x) object)) ((instance Object o) (collect-for ((index element) :in o) [: index element])))))) for value ")+(JSON.stringify(G31035))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    currentModule30748.mapcar = (function (f, lst)      {
      var o = [];
      var arrayObject31143 = lst;
      for (index in (arrayObject31143))        {
        var matchVar31144 = arrayObject31143[index];
        var element = matchVar31144;
        o.push(f(element));
        };
      return o;
      });
    currentModule30748.regexpQuote = (function ()      {
      var returnValue31175 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil31174",
          args:arguments
        };
        });
      var recurP31178 = (function (val31179)        {
        if ((("undefined")===((typeof val31179))))          {
          return false;
          };
        return (val31179.recurSigil===("recurSigil31174"));
        });
      var actualFun31177 = (function ()        {
        return (function (arguments)          {
          var G31181 = undefined;
          var G31182 = Array.prototype.slice.apply(arguments);
          G31181 = (function (arguments)            {
            var matchVal31183 = G31182;
            if ((!((("object")===((typeof matchVal31183))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchVal31183.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var instance = matchVal31183[0];
            var RegExp = matchVal31183[1];
            var s = matchVal31183[2];
            return s.source;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G31181))))            {
            return G31181;
            };
          G31181 = (function (arguments)            {
            var matchVal31184 = G31182;
            if ((!((("object")===((typeof matchVal31184))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchVal31184.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp31185 = matchVal31184[0];
            var matchFunExpr31190 = (function (G31189)              {
              return (((typeof G31189))===("string"));
              });
            if ((!(matchFunExpr31190(matchTemp31185))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var s = matchTemp31185;
            return s;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G31181))))            {
            return G31181;
            };
          G31181 = (function (arguments)            {
            var matchVal31191 = G31182;
            var anythingElse31180 = matchVal31191;
            throw ((("Match fail in spotting-gazelle/el-regexp-quote against: ")+anythingElse31180));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G31181))))            {
            return G31181;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: instance RegExp s] (_newline-sequence (\\.\\. s source))) ([: (string s)] (_newline-sequence s)) (anything-else-31180 (_throw (_+ ''Match fail in spotting-gazelle/el-regexp-quote against: '' anything-else-31180))))) for value ")+(JSON.stringify(G31182))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue31175 = actualFun31177.apply(this, arguments);
      while (recurP31178(returnValue31175))        {
        returnValue31175 = actualFun31177.apply(this, returnValue31175.args);
        };
      return returnValue31175;
      });
    currentModule30748.replaceRegexpInString = (function (theRx, rep, s)      {
      return s.replace(theRx, rep);
      });
    currentModule30748.regularExpressionOr = (function ()      {
      var returnValue31237 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil31236",
          args:arguments
        };
        });
      var recurP31240 = (function (val31241)        {
        if ((("undefined")===((typeof val31241))))          {
          return false;
          };
        return (val31241.recurSigil===("recurSigil31236"));
        });
      var actualFun31239 = (function ()        {
        return (function (arguments)          {
          var G31243 = undefined;
          var G31244 = Array.prototype.slice.apply(arguments);
          G31243 = (function (arguments)            {
            var matchVal31245 = G31244;
            if ((!((("object")===((typeof matchVal31245))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal31245.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart31246 = Array.prototype.slice.call(matchVal31245, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePart31246))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePart31246.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPart31247 = Array.prototype.slice.call(matchVal31245, 0);
            var args = matchArrayTailPart31247;
            var source = "";
            var arrayObject31262 = args;
            for (index in (arrayObject31262))              {
              var matchVar31263 = arrayObject31262[index];
              var sub = matchVar31263;
              console.log(source);
              (function (arguments)                {
                var G31264 = undefined;
                var G31265 = sub;
                G31264 = (function (arguments)                  {
                  var matchVal31266 = G31265;
                  var matchFunExpr31271 = (function (G31270)                    {
                    return (((typeof G31270))===("string"));
                    });
                  if ((!(matchFunExpr31271(matchVal31266))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var sub = matchVal31266;
                  source = module47c9484436.plus(source, "|", sub);
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G31264))))                  {
                  return G31264;
                  };
                G31264 = (function (arguments)                  {
                  var matchVal31272 = G31265;
                  var matchFunExpr31274 = (function (G31273)                    {
                    return (G31273 instanceof RegExp);
                    });
                  if ((!(matchFunExpr31274(matchVal31272))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var subSource = matchVal31272.source;
                  if ((("undefined")===((typeof subSource))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  source = module47c9484436.plus(source, "|", subSource);
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G31264))))                  {
                  return G31264;
                  };
                throw ((("match-fail at ((match sub ((string sub) (set! source (+ source ''|'' sub))) ((instance RegExp ({} source sub-source)) (set! source (+ source ''|'' sub-source))))) for value ")+(JSON.stringify(G31265))));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              };
            return (new (RegExp)(source.substr(1), "g"));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G31243))))            {
            return G31243;
            };
          G31243 = (function (arguments)            {
            var matchVal31275 = G31244;
            var anythingElse31242 = matchVal31275;
            throw ((("Match fail in spotting-gazelle/el-regular-expression-or against: ")+anythingElse31242));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G31243))))            {
            return G31243;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail args)] (_newline-sequence (var source '''') (for* ((index sub) :in args) (console\\.log source) (match sub ((string sub) (set! source (+ source ''|'' sub))) ((instance RegExp ({} source sub-source)) (set! source (+ source ''|'' sub-source))))) (new RegExp (\\.\\. source (substr 1)) ''g''))) (anything-else-31242 (_throw (_+ ''Match fail in spotting-gazelle/el-regular-expression-or against: '' anything-else-31242))))) for value ")+(JSON.stringify(G31244))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue31237 = actualFun31239.apply(this, arguments);
      while (recurP31240(returnValue31237))        {
        returnValue31237 = actualFun31239.apply(this, returnValue31237.args);
        };
      return returnValue31237;
      });
    currentModule30748.replaceRegexpsInString = (function ()      {
      var returnValue31306 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil31305",
          args:arguments
        };
        });
      var recurP31309 = (function (val31310)        {
        if ((("undefined")===((typeof val31310))))          {
          return false;
          };
        return (val31310.recurSigil===("recurSigil31305"));
        });
      var actualFun31308 = (function ()        {
        return (function (arguments)          {
          var G31312 = undefined;
          var G31313 = Array.prototype.slice.apply(arguments);
          G31312 = (function (arguments)            {
            var matchVal31314 = G31313;
            if ((!((("object")===((typeof matchVal31314))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchVal31314.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp31315 = matchVal31314[0];
            var matchTemp31316 = matchVal31314[1];
            var matchTemp31317 = matchVal31314[2];
            var matchFunExpr31322 = (function (G31321)              {
              return (((typeof G31321))===("string"));
              });
            if ((!(matchFunExpr31322(matchTemp31315))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var s = matchTemp31315;
            var theRx = matchTemp31316;
            var rep = matchTemp31317;
            return currentModule30748.replaceRegexpInString(theRx, rep, s);
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G31312))))            {
            return G31312;
            };
          G31312 = (function (arguments)            {
            var matchVal31323 = G31313;
            if ((!((("object")===((typeof matchVal31323))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal31323.length>=3))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart31324 = Array.prototype.slice.call(matchVal31323, 0, 3);
            if ((!((("object")===((typeof matchArraySimplePart31324))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchArraySimplePart31324.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp31325 = matchArraySimplePart31324[0];
            var matchTemp31326 = matchArraySimplePart31324[1];
            var matchTemp31327 = matchArraySimplePart31324[2];
            var matchFunExpr31332 = (function (G31331)              {
              return (((typeof G31331))===("string"));
              });
            if ((!(matchFunExpr31332(matchTemp31325))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var s = matchTemp31325;
            var theRx = matchTemp31326;
            var rep = matchTemp31327;
            var matchArrayTailPart31333 = Array.prototype.slice.call(matchVal31323, 3);
            var rest = matchArrayTailPart31333;
            return currentModule30748.replaceRegexpsInString.apply(null, module47c9484436.prefix(currentModule30748.replaceRegexpInString(theRx, rep, s), rest));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G31312))))            {
            return G31312;
            };
          G31312 = (function (arguments)            {
            var matchVal31334 = G31313;
            var anythingElse31311 = matchVal31334;
            throw ((("Match fail in spotting-gazelle/el-replace-regexps-in-string against: ")+anythingElse31311));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G31312))))            {
            return G31312;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (string s) the-rx rep] (_newline-sequence (replace-regexp-in-string the-rx rep s))) ([: (string s) the-rx rep (tail rest)] (_newline-sequence (replace-regexps-in-string\\.apply null (prefix (replace-regexp-in-string the-rx rep s) rest)))) (anything-else-31311 (_throw (_+ ''Match fail in spotting-gazelle/el-replace-regexps-in-string against: '' anything-else-31311))))) for value ")+(JSON.stringify(G31313))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue31306 = actualFun31308.apply(this, arguments);
      while (recurP31309(returnValue31306))        {
        returnValue31306 = actualFun31308.apply(this, returnValue31306.args);
        };
      return returnValue31306;
      });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModule30748;
  }))