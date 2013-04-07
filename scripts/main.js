require(["hooves/hooves", "hooves/class-utils", "spotting-gazelle/symbol", "spotting-gazelle/el", "spotting-gazelle/prim", "jquery/jquery"], (function ()  {
  var returnValue99169 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigil99168",
      args:arguments
    };
    });
  var recurP99172 = (function (val99173)    {
    if ((("undefined")===((typeof val99173))))      {
      return false;
      };
    return (val99173.recurSigil===("recurSigil99168"));
    });
  var actualFun99171 = (function ()    {
    return (function (arguments)      {
      var G99175 = undefined;
      var G99176 = Array.prototype.slice.apply(arguments);
      G99175 = (function (arguments)        {
        var matchVal99177 = G99176;
        if ((!((("object")===((typeof matchVal99177))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((6===matchVal99177.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var module4745e9d952 = matchVal99177[0];
        var module327750a039 = matchVal99177[1];
        var module86ecf55a85 = matchVal99177[2];
        var module88a7ac9c6d = matchVal99177[3];
        var moduleEcade1678d = matchVal99177[4];
        var moduleA31d161fe8 = matchVal99177[5];
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
            var returnValue99179 = undefined;
            var recur = (function ()              {
              return {                
                recurSigil:"recurSigil99178",
                args:arguments
              };
              });
            var recurP99182 = (function (val99183)              {
              if ((("undefined")===((typeof val99183))))                {
                return false;
                };
              return (val99183.recurSigil===("recurSigil99178"));
              });
            var actualFun99181 = (function ()              {
              return (function (arguments)                {
                var G99185 = undefined;
                var G99186 = Array.prototype.slice.apply(arguments);
                G99185 = (function (arguments)                  {
                  var matchVal99187 = G99186;
                  if ((!((("object")===((typeof matchVal99187))))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  if ((!((matchVal99187.length>=0))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var matchArraySimplePart99188 = Array.prototype.slice.call(matchVal99187, 0, 0);
                  if ((!((("object")===((typeof matchArraySimplePart99188))))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  if ((!((0===matchArraySimplePart99188.length))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var matchArrayTailPart99189 = Array.prototype.slice.call(matchVal99187, 0);
                  var args = matchArrayTailPart99189;
                  return console.log.apply(console, args);
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G99185))))                  {
                  return G99185;
                  };
                G99185 = (function (arguments)                  {
                  var matchVal99190 = G99186;
                  var anythingElse99184 = matchVal99190;
                  throw ((("Match fail in pr against: ")+anythingElse99184));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G99185))))                  {
                  return G99185;
                  };
                throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail args)] (console\\.log\\.apply console args)) (anything-else-99184 (_throw (_+ ''Match fail in pr against: '' anything-else-99184))))) for value ")+(JSON.stringify(G99186))));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              });
            returnValue99179 = actualFun99181.apply(this, arguments);
            while (recurP99182(returnValue99179))              {
              returnValue99179 = actualFun99181.apply(this, returnValue99179.args);
              };
            return returnValue99179;
            });
          window.el = require("spotting-gazelle/el");
          window.prim = require("spotting-gazelle/prim");
          pr("Test collect-for ", (function (arguments)            {
            var G99210 = undefined;
            var G99211 = [[], (function (index, element)              {
              return module4745e9d952.plus(element, "!");
              })];
            G99210 = (function (arguments)              {
              var matchVal99212 = G99211;
              if ((!((("object")===((typeof matchVal99212))))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              if ((!((2===matchVal99212.length))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              var collecter99205 = matchVal99212[0];
              var collectForBodyLambda99207 = matchVal99212[1];
              var arrayObject99227 = ["x", "y", "z"];
              for (index in (arrayObject99227))                {
                var matchVar99228 = arrayObject99227[index];
                var collectForValue99206 = matchVar99228;
                ;
                collecter99205.push(collectForBodyLambda99207.call(this, index, collectForValue99206));
                };
              ;
              return collecter99205;
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G99210))))              {
              return G99210;
              };
            G99210 = (function (arguments)              {
              var matchVal99229 = G99211;
              var G99209 = matchVal99229;
              throw ((("Match error in ")+("(let ((collecter99205 [:]) (collect-for-body-lambda99207 (lambda (index element) (+ element \"!\")))) (for* ((index collect-for-value99206) :in [: (quote x) (quote y) (quote z)]) (\\.\\. collecter99205 (push (\\.\\. collect-for-body-lambda99207 (call this index collect-for-value99206))))) collecter99205)")));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G99210))))              {
              return G99210;
              };
            throw ((("match-fail at ((match [: [:] (lambda (index element) (+ element ''!''))] ([: collecter99205 collect-for-body-lambda99207] (for* ((index collect-for-value99206) :in [: (quote x) (quote y) (quote z)]) (\\.\\. collecter99205 (push (\\.\\. collect-for-body-lambda99207 (call this index collect-for-value99206))))) collecter99205) (G99209 (_throw (_+ ''Match error in '' ''(let ((collecter99205 [:]) (collect-for-body-lambda99207 (lambda (index element) (+ element \\''!\\'')))) (for* ((index collect-for-value99206) :in [: (quote x) (quote y) (quote z)]) (\\\\.\\\\. collecter99205 (push (\\\\.\\\\. collect-for-body-lambda99207 (call this index collect-for-value99206))))) collecter99205)''))))) for value ")+(JSON.stringify(G99211))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
          console.log("Testing class system.");
          console.log("match string", (function (arguments)            {
            var G99230 = undefined;
            var G99231 = "x";
            G99230 = (function (arguments)              {
              var matchVal99232 = G99231;
              var matchFunExpr99237 = (function (G99236)                {
                return (((typeof G99236))===("string"));
                });
              if ((!(matchFunExpr99237(matchVal99232))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              var s = matchVal99232;
              return s;
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G99230))))              {
              return G99230;
              };
            throw ((("match-fail at ((match ''x'' ((string s) s))) for value ")+(JSON.stringify(G99231))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
          pr("Testing replace-regexp-in-string");
          var s = "How bold!";
          var stimes = module88a7ac9c6d.replaceRegexpInString("bold", "jejune", s);
          pr("s: ", s, ", s*: ", stimes);
          var stimestimes = module88a7ac9c6d.replaceRegexpInString(module88a7ac9c6d.regexpQuote("bold"), "stupid", s);
          pr("s: ", s, ", s**: ", stimestimes);
          pr("rx-or test: ", module88a7ac9c6d.replaceRegexpInString(module88a7ac9c6d.regularExpressionOr("x", "y"), "___", "xyzy"));
          return pr("mangle test: ", moduleEcade1678d.mangle(module86ecf55a85.intern("dogsAndCatstimes")));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G99175))))        {
        return G99175;
        };
      G99175 = (function (arguments)        {
        var matchVal99238 = G99176;
        var anythingElse99174 = matchVal99238;
        throw ((("Match fail in require-form against: ")+anythingElse99174));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G99175))))        {
        return G99175;
        };
      throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: module-4745e9d952 module-327750a039 module-86ecf55a85 module-88a7ac9c6d module-ecade1678d module-a31d161fe8] (_proper:macro-context (_proper:require-spec ''hooves/hooves'' :all) (_proper:require-spec ''hooves/class-utils'' :all) (_proper:require-spec ''spotting-gazelle/symbol'' :all) (_proper:require-spec ''spotting-gazelle/el'' :all) (_proper:require-spec ''spotting-gazelle/prim'' :all) (_proper:require-spec ''jquery/jquery'' (:as $)) (define (pr (tail args)) (console\\.log\\.apply console args)) (set! window\\.el ((value require) ''spotting-gazelle/el'')) (set! window\\.prim ((value require) ''spotting-gazelle/prim'')) (pr ''Test collect-for '' (collect-for ((index element) :in [: (quote x) (quote y) (quote z)]) (+ element ''!''))) (console\\.log ''Testing class system.'') (console\\.log ''match string'' (match ''x'' ((string s) s))) (pr ''Testing replace-regexp-in-string'') (var s ''How bold!'') (var s* (replace-regexp-in-string ''bold'' ''jejune'' s)) (pr ''s: '' s '', s*: '' s*) (var s** (replace-regexp-in-string (regexp-quote ''bold'') ''stupid'' s)) (pr ''s: '' s '', s**: '' s**) (pr ''rx-or test: '' (replace-regexp-in-string (regular-expression-or ''x'' ''y'') ''___'' ''xyzy'')) (pr ''mangle test: '' (mangle (intern (quote dogs-and-cats*)))))) (anything-else-99174 (_throw (_+ ''Match fail in require-form against: '' anything-else-99174))))) for value ")+(JSON.stringify(G99176))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValue99169 = actualFun99171.apply(this, arguments);
  while (recurP99172(returnValue99169))    {
    returnValue99169 = actualFun99171.apply(this, returnValue99169.args);
    };
  return returnValue99169;
  }));
