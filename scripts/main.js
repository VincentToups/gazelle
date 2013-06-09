require(["hooves/hooves", "hooves/class-utils", "spotting-gazelle/symbol", "spotting-gazelle/el", "spotting-gazelle/prim", "jquery/jquery"], (function ()  {
  var returnValue165633 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigil165632",
      args:arguments
    };
    });
  var recurP165636 = (function (val165637)    {
    if ((("undefined")===((typeof val165637))))      {
      return false;
      };
    return (val165637.recurSigil===("recurSigil165632"));
    });
  var actualFun165635 = (function ()    {
    return (function (arguments)      {
      var G165639 = undefined;
      var G165640 = Array.prototype.slice.apply(arguments);
      G165639 = (function (arguments)        {
        var matchVal165641 = G165640;
        if ((!((("object")===((typeof matchVal165641))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((6===matchVal165641.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var module4745e9d952 = matchVal165641[0];
        var module327750a039 = matchVal165641[1];
        var module86ecf55a85 = matchVal165641[2];
        var module88a7ac9c6d = matchVal165641[3];
        var moduleEcade1678d = matchVal165641[4];
        var moduleA31d161fe8 = matchVal165641[5];
        return (function (arguments)          {
          // ("hooves/hooves" :all)
          ;
          // ("hooves/class-utils" :all)
          ;
          // ("spotting-gazelle/symbol" :all)
          ;
          // ("spotting-gazelle/el" :all)
          ;
          // ("spotting-gazelle/prim" :all)
          ;
          // ("jquery/jquery" (:as $))
          ;
          var pr = (function ()            {
            var returnValue165643 = undefined;
            var recur = (function ()              {
              return {                
                recurSigil:"recurSigil165642",
                args:arguments
              };
              });
            var recurP165646 = (function (val165647)              {
              if ((("undefined")===((typeof val165647))))                {
                return false;
                };
              return (val165647.recurSigil===("recurSigil165642"));
              });
            var actualFun165645 = (function ()              {
              return (function (arguments)                {
                var G165649 = undefined;
                var G165650 = Array.prototype.slice.apply(arguments);
                G165649 = (function (arguments)                  {
                  var matchVal165651 = G165650;
                  if ((!((("object")===((typeof matchVal165651))))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  if ((!((matchVal165651.length>=0))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var matchArraySimplePart165652 = Array.prototype.slice.call(matchVal165651, 0, 0);
                  if ((!((("object")===((typeof matchArraySimplePart165652))))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  if ((!((0===matchArraySimplePart165652.length))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var matchArrayTailPart165653 = Array.prototype.slice.call(matchVal165651, 0);
                  var args = matchArrayTailPart165653;
                  return console.log.apply(console, args);
                  ;
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G165649))))                  {
                  return G165649;
                  };
                G165649 = (function (arguments)                  {
                  var matchVal165654 = G165650;
                  var anythingElse165648 = matchVal165654;
                  throw ((("Match fail in pr against: ")+anythingElse165648));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G165649))))                  {
                  return G165649;
                  };
                throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail args)] (_newline-sequence (console\\.log\\.apply console args))) (anything-else-165648 (_throw (_+ ''Match fail in pr against: '' anything-else-165648))))) for value ")+(JSON.stringify(G165650))));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              });
            returnValue165643 = actualFun165645.apply(this, arguments);
            while (recurP165646(returnValue165643))              {
              returnValue165643 = actualFun165645.apply(this, returnValue165643.args);
              };
            return returnValue165643;
            });
          window.el = require("spotting-gazelle/el");
          window.prim = require("spotting-gazelle/prim");
          pr("Test collect-for ", (function (arguments)            {
            var G165674 = undefined;
            var G165675 = [[], (function (index, element)              {
              return module4745e9d952.plus(element, "!");
              })];
            G165674 = (function (arguments)              {
              var matchVal165676 = G165675;
              if ((!((("object")===((typeof matchVal165676))))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              if ((!((2===matchVal165676.length))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              var collecter165669 = matchVal165676[0];
              var collectForBodyLambda165671 = matchVal165676[1];
              var arrayObject165691 = ["x", "y", "z"];
              for (index in (arrayObject165691))                {
                var matchVar165692 = arrayObject165691[index];
                var collectForValue165670 = matchVar165692;
                collecter165669.push(collectForBodyLambda165671.call(this, index, collectForValue165670));
                };
              return collecter165669;
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G165674))))              {
              return G165674;
              };
            G165674 = (function (arguments)              {
              var matchVal165693 = G165675;
              var G165673 = matchVal165693;
              throw ((("Match error in ")+("(let ((collecter165669 [:]) (collect-for-body-lambda165671 (lambda (index element) (+ element \"!\")))) (for* ((index collect-for-value165670) :in [: (quote x) (quote y) (quote z)]) (\\.\\. collecter165669 (push (\\.\\. collect-for-body-lambda165671 (call this index collect-for-value165670))))) collecter165669)")));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G165674))))              {
              return G165674;
              };
            throw ((("match-fail at ((match [: [:] (lambda (index element) (+ element ''!''))] ([: collecter165669 collect-for-body-lambda165671] (for* ((index collect-for-value165670) :in [: (quote x) (quote y) (quote z)]) (\\.\\. collecter165669 (push (\\.\\. collect-for-body-lambda165671 (call this index collect-for-value165670))))) collecter165669) (G165673 (_throw (_+ ''Match error in '' ''(let ((collecter165669 [:]) (collect-for-body-lambda165671 (lambda (index element) (+ element \\''!\\'')))) (for* ((index collect-for-value165670) :in [: (quote x) (quote y) (quote z)]) (\\\\.\\\\. collecter165669 (push (\\\\.\\\\. collect-for-body-lambda165671 (call this index collect-for-value165670))))) collecter165669)''))))) for value ")+(JSON.stringify(G165675))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
          console.log("Testing class system.");
          console.log("match string", (function (arguments)            {
            var G165694 = undefined;
            var G165695 = "x";
            G165694 = (function (arguments)              {
              var matchVal165696 = G165695;
              var matchFunExpr165701 = (function (G165700)                {
                return (((typeof G165700))===("string"));
                });
              if ((!(matchFunExpr165701(matchVal165696))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              var s = matchVal165696;
              return s;
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G165694))))              {
              return G165694;
              };
            throw ((("match-fail at ((match ''x'' ((string s) s))) for value ")+(JSON.stringify(G165695))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
          pr("Testing replace-regexp-in-string");
          var s = "How bold!";
          var stimes = module88a7ac9c6d.replaceRegexpInString("bold", "jejune", s);
          pr("s: ", s, ", s*: ", stimes);
          var stimestimes = module88a7ac9c6d.replaceRegexpInString(module88a7ac9c6d.regexpQuote("bold"), "stupid", s);
          pr("s: ", s, ", s**: ", stimestimes);
          pr("rx-or test: ", module88a7ac9c6d.replaceRegexpInString(module88a7ac9c6d.regularExpressionOr("x", "y"), "___", "xyzy"));
          return pr("mangle test: ", moduleEcade1678d.mangle(module86ecf55a85.intern("dogsAndCatstimes")));
          ;
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        ;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G165639))))        {
        return G165639;
        };
      G165639 = (function (arguments)        {
        var matchVal165702 = G165640;
        var anythingElse165638 = matchVal165702;
        throw ((("Match fail in require-form against: ")+anythingElse165638));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G165639))))        {
        return G165639;
        };
      throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: module-4745e9d952 module-327750a039 module-86ecf55a85 module-88a7ac9c6d module-ecade1678d module-a31d161fe8] (_newline-sequence (_proper:macro-context (_proper:require-spec ''hooves/hooves'' :all) (_proper:require-spec ''hooves/class-utils'' :all) (_proper:require-spec ''spotting-gazelle/symbol'' :all) (_proper:require-spec ''spotting-gazelle/el'' :all) (_proper:require-spec ''spotting-gazelle/prim'' :all) (_proper:require-spec ''jquery/jquery'' (:as $)) (_newline-sequence (define (pr (tail args)) (console\\.log\\.apply console args)) (set! window\\.el ((value require) ''spotting-gazelle/el'')) (set! window\\.prim ((value require) ''spotting-gazelle/prim'')) (pr ''Test collect-for '' (collect-for ((index element) :in [: (quote x) (quote y) (quote z)]) (+ element ''!''))) (console\\.log ''Testing class system.'') (console\\.log ''match string'' (match ''x'' ((string s) s))) (pr ''Testing replace-regexp-in-string'') (var s ''How bold!'') (var s* (replace-regexp-in-string ''bold'' ''jejune'' s)) (pr ''s: '' s '', s*: '' s*) (var s** (replace-regexp-in-string (regexp-quote ''bold'') ''stupid'' s)) (pr ''s: '' s '', s**: '' s**) (pr ''rx-or test: '' (replace-regexp-in-string (regular-expression-or ''x'' ''y'') ''___'' ''xyzy'')) (pr ''mangle test: '' (mangle (intern (quote dogs-and-cats*)))))))) (anything-else-165638 (_throw (_+ ''Match fail in require-form against: '' anything-else-165638))))) for value ")+(JSON.stringify(G165640))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValue165633 = actualFun165635.apply(this, arguments);
  while (recurP165636(returnValue165633))    {
    returnValue165633 = actualFun165635.apply(this, returnValue165633.args);
    };
  return returnValue165633;
  }));
