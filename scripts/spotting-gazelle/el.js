define(["hooves/hooves"], (function (module4745e9d952)  {
  var currentModule95312 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModule95312 = value;
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
    currentModule95312.coerce = (function (object, type)      {
      return (function (arguments)        {
        var G95395 = undefined;
        var G95396 = type;
        G95395 = (function (arguments)          {
          var matchVal95397 = G95396;
          if ((!((("string")===matchVal95397))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          return (((object instanceof Array))?(object.join("")) : (object.toString()));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95395))))          {
          return G95395;
          };
        G95395 = (function (arguments)          {
          var matchVal95398 = G95396;
          if ((!((("list")===matchVal95398))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          return (function (arguments)            {
            var G95399 = undefined;
            var G95400 = object;
            G95399 = (function (arguments)              {
              var matchVal95401 = G95400;
              var matchFunExpr95403 = (function (G95402)                {
                return (G95402 instanceof Array);
                });
              if ((!(matchFunExpr95403(matchVal95401))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              var a = matchVal95401;
              return a;
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95399))))              {
              return G95399;
              };
            G95399 = (function (arguments)              {
              var matchVal95404 = G95400;
              var matchFunExpr95409 = (function (G95408)                {
                return (((typeof G95408))===("string"));
                });
              if ((!(matchFunExpr95409(matchVal95404))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              var object = matchVal95404;
              return currentModule95312.mapcar((function (x)                {
                return x;
                }), object);
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95399))))              {
              return G95399;
              };
            G95399 = (function (arguments)              {
              var matchVal95410 = G95400;
              var matchFunExpr95412 = (function (G95411)                {
                return (G95411 instanceof Object);
                });
              if ((!(matchFunExpr95412(matchVal95410))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              var o = matchVal95410;
              return (function (arguments)                {
                var G95432 = undefined;
                var G95433 = [[], (function (index, element)                  {
                  return [index, element];
                  })];
                G95432 = (function (arguments)                  {
                  var matchVal95434 = G95433;
                  if ((!((("object")===((typeof matchVal95434))))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  if ((!((2===matchVal95434.length))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var collecter95427 = matchVal95434[0];
                  var collectForBodyLambda95429 = matchVal95434[1];
                  var arrayObject95449 = o;
                  for (index in (arrayObject95449))                    {
                    var matchVar95450 = arrayObject95449[index];
                    var collectForValue95428 = matchVar95450;
                    ;
                    collecter95427.push(collectForBodyLambda95429.this.index.collectForValue95428);
                    };
                  ;
                  return collecter95427;
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95432))))                  {
                  return G95432;
                  };
                G95432 = (function (arguments)                  {
                  var matchVal95451 = G95433;
                  var G95431 = matchVal95451;
                  throw ((("Match error in ")+("(let ((collecter95427 [:]) (collect-for-body-lambda95429 (lambda (index element) [: index element]))) (for* ((index collect-for-value95428) :in o) (\.\. collecter95427 (push (\.\. collect-for-body-lambda95429 this index collect-for-value95428)))) collecter95427)")));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95432))))                  {
                  return G95432;
                  };
                throw ((("match-fail at ((match [: [:] (lambda (index element) [: index element])] ([: collecter95427 collect-for-body-lambda95429] (for* ((index collect-for-value95428) :in o) (\.\. collecter95427 (push (\.\. collect-for-body-lambda95429 this index collect-for-value95428)))) collecter95427) (G95431 (_throw (_+ ''Match error in '' ''(let ((collecter95427 [:]) (collect-for-body-lambda95429 (lambda (index element) [: index element]))) (for* ((index collect-for-value95428) :in o) (\\.\\. collecter95427 (push (\\.\\. collect-for-body-lambda95429 this index collect-for-value95428)))) collecter95427)''))))) for value ")+(JSON.stringify(G95433))));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95399))))              {
              return G95399;
              };
            throw ((("match-fail at ((match object ((instance Array a) a) ((string object) (mapcar (lambda (x) x) object)) ((instance Object o) (collect-for ((index element) :in o) [: index element])))) for value ")+(JSON.stringify(G95400))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95395))))          {
          return G95395;
          };
        throw ((("match-fail at ((match type (''string'' (if (instanceof object Array) (\.\. object (join '''')) (\.\. object (to-string)))) (''list'' (match object ((instance Array a) a) ((string object) (mapcar (lambda (x) x) object)) ((instance Object o) (collect-for ((index element) :in o) [: index element])))))) for value ")+(JSON.stringify(G95396))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    currentModule95312.mapcar = (function (f, lst)      {
      var o = [];
      var arrayObject95504 = lst;
      for (index in (arrayObject95504))        {
        var matchVar95505 = arrayObject95504[index];
        var element = matchVar95505;
        ;
        o.push(f(element));
        };
      ;
      return o;
      });
    currentModule95312.regexpQuote = (function ()      {
      var returnValue95536 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil95535",
          args:arguments
        };
        });
      var recurP95539 = (function (val95540)        {
        if ((("undefined")===((typeof val95540))))          {
          return false;
          };
        return (val95540.recurSigil===("recurSigil95535"));
        });
      var actualFun95538 = (function ()        {
        return (function (arguments)          {
          var G95542 = undefined;
          var G95543 = Array.prototype.slice.apply(arguments);
          G95542 = (function (arguments)            {
            var matchVal95544 = G95543;
            if ((!((("object")===((typeof matchVal95544))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchVal95544.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var instance = matchVal95544[0];
            var RegExp = matchVal95544[1];
            var s = matchVal95544[2];
            return s.source;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95542))))            {
            return G95542;
            };
          G95542 = (function (arguments)            {
            var matchVal95545 = G95543;
            if ((!((("object")===((typeof matchVal95545))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchVal95545.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp95546 = matchVal95545[0];
            var matchFunExpr95551 = (function (G95550)              {
              return (((typeof G95550))===("string"));
              });
            if ((!(matchFunExpr95551(matchTemp95546))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var s = matchTemp95546;
            return s;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95542))))            {
            return G95542;
            };
          G95542 = (function (arguments)            {
            var matchVal95552 = G95543;
            var anythingElse95541 = matchVal95552;
            throw ((("Match fail in spotting-gazelle/el-regexp-quote against: ")+anythingElse95541));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95542))))            {
            return G95542;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: instance RegExp s] (\.\. s source)) ([: (string s)] s) (anything-else-95541 (_throw (_+ ''Match fail in spotting-gazelle/el-regexp-quote against: '' anything-else-95541))))) for value ")+(JSON.stringify(G95543))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue95536 = actualFun95538.apply(this, arguments);
      while (recurP95539(returnValue95536))        {
        returnValue95536 = actualFun95538.apply(this, returnValue95536.args);
        };
      return returnValue95536;
      });
    currentModule95312.replaceRegexpInString = (function (theRx, rep, s)      {
      return s.replace(theRx, rep);
      });
    currentModule95312.regularExpressionOr = (function ()      {
      var returnValue95598 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil95597",
          args:arguments
        };
        });
      var recurP95601 = (function (val95602)        {
        if ((("undefined")===((typeof val95602))))          {
          return false;
          };
        return (val95602.recurSigil===("recurSigil95597"));
        });
      var actualFun95600 = (function ()        {
        return (function (arguments)          {
          var G95604 = undefined;
          var G95605 = Array.prototype.slice.apply(arguments);
          G95604 = (function (arguments)            {
            var matchVal95606 = G95605;
            if ((!((("object")===((typeof matchVal95606))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal95606.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart95607 = Array.prototype.slice.call(matchVal95606, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePart95607))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePart95607.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPart95608 = Array.prototype.slice.call(matchVal95606, 0);
            var args = matchArrayTailPart95608;
            var source = "";
            var arrayObject95623 = args;
            for (index in (arrayObject95623))              {
              var matchVar95624 = arrayObject95623[index];
              var sub = matchVar95624;
              ;
              console.log(source);
              (function (arguments)                {
                var G95625 = undefined;
                var G95626 = sub;
                G95625 = (function (arguments)                  {
                  var matchVal95627 = G95626;
                  var matchFunExpr95632 = (function (G95631)                    {
                    return (((typeof G95631))===("string"));
                    });
                  if ((!(matchFunExpr95632(matchVal95627))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var sub = matchVal95627;
                  source = module4745e9d952.plus(source, "|", sub);
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95625))))                  {
                  return G95625;
                  };
                G95625 = (function (arguments)                  {
                  var matchVal95633 = G95626;
                  var matchFunExpr95635 = (function (G95634)                    {
                    return (G95634 instanceof RegExp);
                    });
                  if ((!(matchFunExpr95635(matchVal95633))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var subSource = matchVal95633.source;
                  if ((("undefined")===((typeof subSource))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  source = module4745e9d952.plus(source, "|", subSource);
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95625))))                  {
                  return G95625;
                  };
                throw ((("match-fail at ((match sub ((string sub) (set! source (+ source ''|'' sub))) ((instance RegExp ({} source sub-source)) (set! source (+ source ''|'' sub-source))))) for value ")+(JSON.stringify(G95626))));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              };
            ;
            return (new (RegExp)(source.substr(1), "g"));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95604))))            {
            return G95604;
            };
          G95604 = (function (arguments)            {
            var matchVal95636 = G95605;
            var anythingElse95603 = matchVal95636;
            throw ((("Match fail in spotting-gazelle/el-regular-expression-or against: ")+anythingElse95603));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95604))))            {
            return G95604;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: (tail args)] (var source '''') (for* ((index sub) :in args) (console\.log source) (match sub ((string sub) (set! source (+ source ''|'' sub))) ((instance RegExp ({} source sub-source)) (set! source (+ source ''|'' sub-source))))) (new RegExp (\.\. source (substr 1)) ''g'')) (anything-else-95603 (_throw (_+ ''Match fail in spotting-gazelle/el-regular-expression-or against: '' anything-else-95603))))) for value ")+(JSON.stringify(G95605))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue95598 = actualFun95600.apply(this, arguments);
      while (recurP95601(returnValue95598))        {
        returnValue95598 = actualFun95600.apply(this, returnValue95598.args);
        };
      return returnValue95598;
      });
    currentModule95312.replaceRegexpsInString = (function ()      {
      var returnValue95667 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil95666",
          args:arguments
        };
        });
      var recurP95670 = (function (val95671)        {
        if ((("undefined")===((typeof val95671))))          {
          return false;
          };
        return (val95671.recurSigil===("recurSigil95666"));
        });
      var actualFun95669 = (function ()        {
        return (function (arguments)          {
          var G95673 = undefined;
          var G95674 = Array.prototype.slice.apply(arguments);
          G95673 = (function (arguments)            {
            var matchVal95675 = G95674;
            if ((!((("object")===((typeof matchVal95675))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchVal95675.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp95676 = matchVal95675[0];
            var matchTemp95677 = matchVal95675[1];
            var matchTemp95678 = matchVal95675[2];
            var matchFunExpr95683 = (function (G95682)              {
              return (((typeof G95682))===("string"));
              });
            if ((!(matchFunExpr95683(matchTemp95676))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var s = matchTemp95676;
            var theRx = matchTemp95677;
            var rep = matchTemp95678;
            return currentModule95312.replaceRegexpInString(theRx, rep, s);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95673))))            {
            return G95673;
            };
          G95673 = (function (arguments)            {
            var matchVal95684 = G95674;
            if ((!((("object")===((typeof matchVal95684))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal95684.length>=3))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart95685 = Array.prototype.slice.call(matchVal95684, 0, 3);
            if ((!((("object")===((typeof matchArraySimplePart95685))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchArraySimplePart95685.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp95686 = matchArraySimplePart95685[0];
            var matchTemp95687 = matchArraySimplePart95685[1];
            var matchTemp95688 = matchArraySimplePart95685[2];
            var matchFunExpr95693 = (function (G95692)              {
              return (((typeof G95692))===("string"));
              });
            if ((!(matchFunExpr95693(matchTemp95686))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var s = matchTemp95686;
            var theRx = matchTemp95687;
            var rep = matchTemp95688;
            var matchArrayTailPart95694 = Array.prototype.slice.call(matchVal95684, 3);
            var rest = matchArrayTailPart95694;
            return currentModule95312.replaceRegexpsInString.apply(null, module4745e9d952.prefix(currentModule95312.replaceRegexpInString(theRx, rep, s), rest));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95673))))            {
            return G95673;
            };
          G95673 = (function (arguments)            {
            var matchVal95695 = G95674;
            var anythingElse95672 = matchVal95695;
            throw ((("Match fail in spotting-gazelle/el-replace-regexps-in-string against: ")+anythingElse95672));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95673))))            {
            return G95673;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: (string s) the-rx rep] (replace-regexp-in-string the-rx rep s)) ([: (string s) the-rx rep (tail rest)] (replace-regexps-in-string\.apply null (prefix (replace-regexp-in-string the-rx rep s) rest))) (anything-else-95672 (_throw (_+ ''Match fail in spotting-gazelle/el-replace-regexps-in-string against: '' anything-else-95672))))) for value ")+(JSON.stringify(G95674))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue95667 = actualFun95669.apply(this, arguments);
      while (recurP95670(returnValue95667))        {
        returnValue95667 = actualFun95669.apply(this, returnValue95667.args);
        };
      return returnValue95667;
      });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModule95312;
  }))