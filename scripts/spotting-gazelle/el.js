define(["hooves/hooves"], (function (module4745e9d952)  {
  var currentModule164486 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModule164486 = value;
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
    currentModule164486.Buffer = (function (name, initialContents)      {
      this.name = name;
      this.contents = contents;
      this.point = 0;
      this.mark = undefined;
      buffers.push(this);
      return this;
      });
    currentModule164486.killBuffer = (function ()      {
      var returnValue164575 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil164574",
          args:arguments
        };
        });
      var recurP164578 = (function (val164579)        {
        if ((("undefined")===((typeof val164579))))          {
          return false;
          };
        return (val164579.recurSigil===("recurSigil164574"));
        });
      var actualFun164577 = (function ()        {
        return (function (arguments)          {
          var G164581 = undefined;
          var G164582 = Array.prototype.slice.apply(arguments);
          G164581 = (function (arguments)            {
            var matchVal164583 = G164582;
            if ((!((("object")===((typeof matchVal164583))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchVal164583.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var bufferOrName = matchVal164583[0];
            return (function (arguments)              {
              var G164584 = undefined;
              var G164585 = bufferOrName;
              G164584 = (function (arguments)                {
                var matchVal164586 = G164585;
                var matchFunExpr164591 = (function (G164590)                  {
                  return (((typeof G164590))===("string"));
                  });
                if ((!(matchFunExpr164591(matchVal164586))))                  {
                  return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                  };
                var name = matchVal164586;
                buffers = module4745e9d952.filter((function ()                  {
                  var returnValue164593 = undefined;
                  var recur = (function ()                    {
                    return {                      
                      recurSigil:"recurSigil164592",
                      args:arguments
                    };
                    });
                  var recurP164596 = (function (val164597)                    {
                    if ((("undefined")===((typeof val164597))))                      {
                      return false;
                      };
                    return (val164597.recurSigil===("recurSigil164592"));
                    });
                  var actualFun164595 = (function ()                    {
                    return (function (arguments)                      {
                      var G164599 = undefined;
                      var G164600 = Array.prototype.slice.apply(arguments);
                      G164599 = (function (arguments)                        {
                        var matchVal164601 = G164600;
                        if ((!((("object")===((typeof matchVal164601))))))                          {
                          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                          };
                        if ((!((1===matchVal164601.length))))                          {
                          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                          };
                        var matchTemp164602 = matchVal164601[0];
                        var theBufferName = matchTemp164602.name;
                        if ((("undefined")===((typeof theBufferName))))                          {
                          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                          };
                        return not(module4745e9d952.TripleEqualminus(name, theBufferName));
                        ;
                        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G164599))))                        {
                        return G164599;
                        };
                      G164599 = (function (arguments)                        {
                        var matchVal164603 = G164600;
                        var anythingElse164598 = matchVal164603;
                        throw ((("Match fail in anonymous against: ")+anythingElse164598));
                        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G164599))))                        {
                        return G164599;
                        };
                      throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: ({} name the-buffer-name)] (_newline-sequence (not (=== name the-buffer-name)))) (anything-else-164598 (_throw (_+ ''Match fail in anonymous against: '' anything-else-164598))))) for value ")+(JSON.stringify(G164600))));
                      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                    });
                  returnValue164593 = actualFun164595.apply(this, arguments);
                  while (recurP164596(returnValue164593))                    {
                    returnValue164593 = actualFun164595.apply(this, returnValue164593.args);
                    };
                  return returnValue164593;
                  }), buffers);
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G164584))))                {
                return G164584;
                };
              throw ((("match-fail at ((match buffer-or-name ((string name) (set! buffers (filter (lambda (({} name the-buffer-name)) (not (=== name the-buffer-name))) buffers))))) for value ")+(JSON.stringify(G164585))));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G164581))))            {
            return G164581;
            };
          G164581 = (function (arguments)            {
            var matchVal164604 = G164582;
            var anythingElse164580 = matchVal164604;
            throw ((("Match fail in spotting-gazelle/el-kill-buffer against: ")+anythingElse164580));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G164581))))            {
            return G164581;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: buffer-or-name] (_newline-sequence (match buffer-or-name ((string name) (set! buffers (filter (lambda (({} name the-buffer-name)) (not (=== name the-buffer-name))) buffers)))))) (anything-else-164580 (_throw (_+ ''Match fail in spotting-gazelle/el-kill-buffer against: '' anything-else-164580))))) for value ")+(JSON.stringify(G164582))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue164575 = actualFun164577.apply(this, arguments);
      while (recurP164578(returnValue164575))        {
        returnValue164575 = actualFun164577.apply(this, returnValue164575.args);
        };
      return returnValue164575;
      });
    currentModule164486.newBuffer = (function ()      {
      var returnValue164628 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil164627",
          args:arguments
        };
        });
      var recurP164631 = (function (val164632)        {
        if ((("undefined")===((typeof val164632))))          {
          return false;
          };
        return (val164632.recurSigil===("recurSigil164627"));
        });
      var actualFun164630 = (function ()        {
        return (function (arguments)          {
          var G164634 = undefined;
          var G164635 = Array.prototype.slice.apply(arguments);
          G164634 = (function (arguments)            {
            var matchVal164636 = G164635;
            if ((!((("object")===((typeof matchVal164636))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal164636.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart164637 = Array.prototype.slice.call(matchVal164636, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePart164637))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePart164637.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPart164638 = Array.prototype.slice.call(matchVal164636, 0);
            var matchTemp164639 = matchArrayTailPart164638[0];
            var previousMatchSucceeded164640 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTemp164639))))                {
                previousMatchSucceeded164640 = false;
                };
              var contents = matchTemp164639;
              if (previousMatchSucceeded164640)                {
                break;
                };
              previousMatchSucceeded164640 = true;
              case 1:
              var fResult164641 = ((function (x)                {
                return "";
                }))(matchTemp164639);
              if ((fResult164641===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceeded164640 = false;
                };
              var contents = fResult164641;
              if (previousMatchSucceeded164640)                {
                break;
                };
              previousMatchSucceeded164640 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            return (new (currentModule164486.Buffer)(contents));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G164634))))            {
            return G164634;
            };
          G164634 = (function (arguments)            {
            var matchVal164642 = G164635;
            var anythingElse164633 = matchVal164642;
            throw ((("Match fail in spotting-gazelle/el-new-buffer against: ")+anythingElse164633));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G164634))))            {
            return G164634;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: :- (opt contents '''')] (_newline-sequence (new Buffer contents))) (anything-else-164633 (_throw (_+ ''Match fail in spotting-gazelle/el-new-buffer against: '' anything-else-164633))))) for value ")+(JSON.stringify(G164635))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue164628 = actualFun164630.apply(this, arguments);
      while (recurP164631(returnValue164628))        {
        returnValue164628 = actualFun164630.apply(this, returnValue164628.args);
        };
      return returnValue164628;
      });
    // buffer
    // pattern - no dynamic value.
    ;
    var currentBuffer = undefined;
    currentModule164486.getBuffer = (function (object)      {
      return (function (arguments)        {
        var G164682 = undefined;
        var G164683 = object;
        G164682 = (function (arguments)          {
          var matchVal164684 = G164683;
          var matchFunExpr164686 = (function (G164685)            {
            return (G164685 instanceof currentModule164486.Buffer);
            });
          if ((!(matchFunExpr164686(matchVal164684))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var object = matchVal164684;
          return object;
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G164682))))          {
          return G164682;
          };
        G164682 = (function (arguments)          {
          var matchVal164687 = G164683;
          var matchFunExpr164692 = (function (G164691)            {
            return (((typeof G164691))===("string"));
            });
          if ((!(matchFunExpr164692(matchVal164687))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var string = matchVal164687;
          return nil;
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G164682))))          {
          return G164682;
          };
        throw ((("match-fail at ((match object ((instance Buffer object) object) ((string string) nil))) for value ")+(JSON.stringify(G164683))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    currentModule164486.coerce = (function (object, type)      {
      return (function (arguments)        {
        var G164772 = undefined;
        var G164773 = type;
        G164772 = (function (arguments)          {
          var matchVal164774 = G164773;
          if ((!((("string")===matchVal164774))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          return (((object instanceof Array))?(object.join("")) : (object.toString()));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G164772))))          {
          return G164772;
          };
        G164772 = (function (arguments)          {
          var matchVal164775 = G164773;
          if ((!((("list")===matchVal164775))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          return (function (arguments)            {
            var G164776 = undefined;
            var G164777 = object;
            G164776 = (function (arguments)              {
              var matchVal164778 = G164777;
              var matchFunExpr164780 = (function (G164779)                {
                return (G164779 instanceof Array);
                });
              if ((!(matchFunExpr164780(matchVal164778))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              var a = matchVal164778;
              return a;
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G164776))))              {
              return G164776;
              };
            G164776 = (function (arguments)              {
              var matchVal164781 = G164777;
              var matchFunExpr164786 = (function (G164785)                {
                return (((typeof G164785))===("string"));
                });
              if ((!(matchFunExpr164786(matchVal164781))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              var object = matchVal164781;
              return currentModule164486.mapcar((function (x)                {
                return x;
                }), object);
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G164776))))              {
              return G164776;
              };
            G164776 = (function (arguments)              {
              var matchVal164787 = G164777;
              var matchFunExpr164789 = (function (G164788)                {
                return (G164788 instanceof Object);
                });
              if ((!(matchFunExpr164789(matchVal164787))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              var o = matchVal164787;
              return (function (arguments)                {
                var G164809 = undefined;
                var G164810 = [[], (function (index, element)                  {
                  return [index, element];
                  })];
                G164809 = (function (arguments)                  {
                  var matchVal164811 = G164810;
                  if ((!((("object")===((typeof matchVal164811))))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  if ((!((2===matchVal164811.length))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var collecter164804 = matchVal164811[0];
                  var collectForBodyLambda164806 = matchVal164811[1];
                  var arrayObject164826 = o;
                  for (index in (arrayObject164826))                    {
                    var matchVar164827 = arrayObject164826[index];
                    var collectForValue164805 = matchVar164827;
                    collecter164804.push(collectForBodyLambda164806.call(this, index, collectForValue164805));
                    };
                  return collecter164804;
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G164809))))                  {
                  return G164809;
                  };
                G164809 = (function (arguments)                  {
                  var matchVal164828 = G164810;
                  var G164808 = matchVal164828;
                  throw ((("Match error in ")+("(let ((collecter164804 [:]) (collect-for-body-lambda164806 (lambda (index element) [: index element]))) (for* ((index collect-for-value164805) :in o) (\\.\\. collecter164804 (push (\\.\\. collect-for-body-lambda164806 (call this index collect-for-value164805))))) collecter164804)")));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G164809))))                  {
                  return G164809;
                  };
                throw ((("match-fail at ((match [: [:] (lambda (index element) [: index element])] ([: collecter164804 collect-for-body-lambda164806] (for* ((index collect-for-value164805) :in o) (\\.\\. collecter164804 (push (\\.\\. collect-for-body-lambda164806 (call this index collect-for-value164805))))) collecter164804) (G164808 (_throw (_+ ''Match error in '' ''(let ((collecter164804 [:]) (collect-for-body-lambda164806 (lambda (index element) [: index element]))) (for* ((index collect-for-value164805) :in o) (\\\\.\\\\. collecter164804 (push (\\\\.\\\\. collect-for-body-lambda164806 (call this index collect-for-value164805))))) collecter164804)''))))) for value ")+(JSON.stringify(G164810))));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G164776))))              {
              return G164776;
              };
            throw ((("match-fail at ((match object ((instance Array a) a) ((string object) (mapcar (lambda (x) x) object)) ((instance Object o) (collect-for ((index element) :in o) [: index element])))) for value ")+(JSON.stringify(G164777))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G164772))))          {
          return G164772;
          };
        throw ((("match-fail at ((match type (''string'' (if (instanceof object Array) (\\.\\. object (join '''')) (\\.\\. object (to-string)))) (''list'' (match object ((instance Array a) a) ((string object) (mapcar (lambda (x) x) object)) ((instance Object o) (collect-for ((index element) :in o) [: index element])))))) for value ")+(JSON.stringify(G164773))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    currentModule164486.mapcar = (function (f, lst)      {
      var o = [];
      var arrayObject164881 = lst;
      for (index in (arrayObject164881))        {
        var matchVar164882 = arrayObject164881[index];
        var element = matchVar164882;
        o.push(f(element));
        };
      return o;
      });
    currentModule164486.regexpQuote = (function ()      {
      var returnValue164913 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil164912",
          args:arguments
        };
        });
      var recurP164916 = (function (val164917)        {
        if ((("undefined")===((typeof val164917))))          {
          return false;
          };
        return (val164917.recurSigil===("recurSigil164912"));
        });
      var actualFun164915 = (function ()        {
        return (function (arguments)          {
          var G164919 = undefined;
          var G164920 = Array.prototype.slice.apply(arguments);
          G164919 = (function (arguments)            {
            var matchVal164921 = G164920;
            if ((!((("object")===((typeof matchVal164921))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchVal164921.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var instance = matchVal164921[0];
            var RegExp = matchVal164921[1];
            var s = matchVal164921[2];
            return s.source;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G164919))))            {
            return G164919;
            };
          G164919 = (function (arguments)            {
            var matchVal164922 = G164920;
            if ((!((("object")===((typeof matchVal164922))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchVal164922.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp164923 = matchVal164922[0];
            var matchFunExpr164928 = (function (G164927)              {
              return (((typeof G164927))===("string"));
              });
            if ((!(matchFunExpr164928(matchTemp164923))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var s = matchTemp164923;
            return s;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G164919))))            {
            return G164919;
            };
          G164919 = (function (arguments)            {
            var matchVal164929 = G164920;
            var anythingElse164918 = matchVal164929;
            throw ((("Match fail in spotting-gazelle/el-regexp-quote against: ")+anythingElse164918));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G164919))))            {
            return G164919;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: instance RegExp s] (_newline-sequence (\\.\\. s source))) ([: (string s)] (_newline-sequence s)) (anything-else-164918 (_throw (_+ ''Match fail in spotting-gazelle/el-regexp-quote against: '' anything-else-164918))))) for value ")+(JSON.stringify(G164920))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue164913 = actualFun164915.apply(this, arguments);
      while (recurP164916(returnValue164913))        {
        returnValue164913 = actualFun164915.apply(this, returnValue164913.args);
        };
      return returnValue164913;
      });
    currentModule164486.replaceRegexpInString = (function (theRx, rep, s)      {
      return s.replace(theRx, rep);
      });
    currentModule164486.regularExpressionOr = (function ()      {
      var returnValue164975 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil164974",
          args:arguments
        };
        });
      var recurP164978 = (function (val164979)        {
        if ((("undefined")===((typeof val164979))))          {
          return false;
          };
        return (val164979.recurSigil===("recurSigil164974"));
        });
      var actualFun164977 = (function ()        {
        return (function (arguments)          {
          var G164981 = undefined;
          var G164982 = Array.prototype.slice.apply(arguments);
          G164981 = (function (arguments)            {
            var matchVal164983 = G164982;
            if ((!((("object")===((typeof matchVal164983))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal164983.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart164984 = Array.prototype.slice.call(matchVal164983, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePart164984))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePart164984.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPart164985 = Array.prototype.slice.call(matchVal164983, 0);
            var args = matchArrayTailPart164985;
            var source = "";
            var arrayObject165000 = args;
            for (index in (arrayObject165000))              {
              var matchVar165001 = arrayObject165000[index];
              var sub = matchVar165001;
              console.log(source);
              (function (arguments)                {
                var G165002 = undefined;
                var G165003 = sub;
                G165002 = (function (arguments)                  {
                  var matchVal165004 = G165003;
                  var matchFunExpr165009 = (function (G165008)                    {
                    return (((typeof G165008))===("string"));
                    });
                  if ((!(matchFunExpr165009(matchVal165004))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var sub = matchVal165004;
                  source = module4745e9d952.plus(source, "|", sub);
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G165002))))                  {
                  return G165002;
                  };
                G165002 = (function (arguments)                  {
                  var matchVal165010 = G165003;
                  var matchFunExpr165012 = (function (G165011)                    {
                    return (G165011 instanceof RegExp);
                    });
                  if ((!(matchFunExpr165012(matchVal165010))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var subSource = matchVal165010.source;
                  if ((("undefined")===((typeof subSource))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  source = module4745e9d952.plus(source, "|", subSource);
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G165002))))                  {
                  return G165002;
                  };
                throw ((("match-fail at ((match sub ((string sub) (set! source (+ source ''|'' sub))) ((instance RegExp ({} source sub-source)) (set! source (+ source ''|'' sub-source))))) for value ")+(JSON.stringify(G165003))));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              };
            return (new (RegExp)(source.substr(1), "g"));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G164981))))            {
            return G164981;
            };
          G164981 = (function (arguments)            {
            var matchVal165013 = G164982;
            var anythingElse164980 = matchVal165013;
            throw ((("Match fail in spotting-gazelle/el-regular-expression-or against: ")+anythingElse164980));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G164981))))            {
            return G164981;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail args)] (_newline-sequence (var source '''') (for* ((index sub) :in args) (console\\.log source) (match sub ((string sub) (set! source (+ source ''|'' sub))) ((instance RegExp ({} source sub-source)) (set! source (+ source ''|'' sub-source))))) (new RegExp (\\.\\. source (substr 1)) ''g''))) (anything-else-164980 (_throw (_+ ''Match fail in spotting-gazelle/el-regular-expression-or against: '' anything-else-164980))))) for value ")+(JSON.stringify(G164982))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue164975 = actualFun164977.apply(this, arguments);
      while (recurP164978(returnValue164975))        {
        returnValue164975 = actualFun164977.apply(this, returnValue164975.args);
        };
      return returnValue164975;
      });
    currentModule164486.replaceRegexpsInString = (function ()      {
      var returnValue165044 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil165043",
          args:arguments
        };
        });
      var recurP165047 = (function (val165048)        {
        if ((("undefined")===((typeof val165048))))          {
          return false;
          };
        return (val165048.recurSigil===("recurSigil165043"));
        });
      var actualFun165046 = (function ()        {
        return (function (arguments)          {
          var G165050 = undefined;
          var G165051 = Array.prototype.slice.apply(arguments);
          G165050 = (function (arguments)            {
            var matchVal165052 = G165051;
            if ((!((("object")===((typeof matchVal165052))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchVal165052.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp165053 = matchVal165052[0];
            var matchTemp165054 = matchVal165052[1];
            var matchTemp165055 = matchVal165052[2];
            var matchFunExpr165060 = (function (G165059)              {
              return (((typeof G165059))===("string"));
              });
            if ((!(matchFunExpr165060(matchTemp165053))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var s = matchTemp165053;
            var theRx = matchTemp165054;
            var rep = matchTemp165055;
            return currentModule164486.replaceRegexpInString(theRx, rep, s);
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G165050))))            {
            return G165050;
            };
          G165050 = (function (arguments)            {
            var matchVal165061 = G165051;
            if ((!((("object")===((typeof matchVal165061))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal165061.length>=3))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart165062 = Array.prototype.slice.call(matchVal165061, 0, 3);
            if ((!((("object")===((typeof matchArraySimplePart165062))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchArraySimplePart165062.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp165063 = matchArraySimplePart165062[0];
            var matchTemp165064 = matchArraySimplePart165062[1];
            var matchTemp165065 = matchArraySimplePart165062[2];
            var matchFunExpr165070 = (function (G165069)              {
              return (((typeof G165069))===("string"));
              });
            if ((!(matchFunExpr165070(matchTemp165063))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var s = matchTemp165063;
            var theRx = matchTemp165064;
            var rep = matchTemp165065;
            var matchArrayTailPart165071 = Array.prototype.slice.call(matchVal165061, 3);
            var rest = matchArrayTailPart165071;
            return currentModule164486.replaceRegexpsInString.apply(null, module4745e9d952.prefix(currentModule164486.replaceRegexpInString(theRx, rep, s), rest));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G165050))))            {
            return G165050;
            };
          G165050 = (function (arguments)            {
            var matchVal165072 = G165051;
            var anythingElse165049 = matchVal165072;
            throw ((("Match fail in spotting-gazelle/el-replace-regexps-in-string against: ")+anythingElse165049));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G165050))))            {
            return G165050;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (string s) the-rx rep] (_newline-sequence (replace-regexp-in-string the-rx rep s))) ([: (string s) the-rx rep (tail rest)] (_newline-sequence (replace-regexps-in-string\\.apply null (prefix (replace-regexp-in-string the-rx rep s) rest)))) (anything-else-165049 (_throw (_+ ''Match fail in spotting-gazelle/el-replace-regexps-in-string against: '' anything-else-165049))))) for value ")+(JSON.stringify(G165051))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue165044 = actualFun165046.apply(this, arguments);
      while (recurP165047(returnValue165044))        {
        returnValue165044 = actualFun165046.apply(this, returnValue165044.args);
        };
      return returnValue165044;
      });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModule164486;
  }))