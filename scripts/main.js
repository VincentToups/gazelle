require(["hooves/operator-functions", "hooves/lisp-idioms", "hooves/hooves", "spotting-gazelle/symbol", "jquery/jquery"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus4745e9d952, moduleminus86ecf55a85, moduleA31d161fe8)  {
  return (function (arguments)    {
    // ("hooves/operator-functions" :all)
    ;
    // ("hooves/lisp-idioms" (:with-prefix idioms- :all))
    ;
    // ("hooves/hooves" :all)
    ;
    // ("spotting-gazelle/symbol" :all)
    ;
    // ("jquery/jquery" (:as $))
    ;
    (1+1);
    var d = (new ((require("hooves/hooves").Delay))((function ()      {
      console.log("In delay d.");
      return "Hiiii";
      })));
    console.log(moduleminus4745e9d952.undelay(d));
    var o = {      
      
    };
    (function (arguments)      {
      var defineToObjectminus14828 = o;
      var init = (function ()        {
        return moduleminus58c4bce870.plus(1, 2, 3);
        });
      defineToObjectminus14828.init = init;
      return defineToObjectminus14828;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    var x = 10;
    x = moduleminus58c4bce870.plus(1, x);
    console.log("(require(\"hooves/hooves\").numberPredicate)", (require("hooves/hooves").numberPredicate));
    console.log({      
      x:x
    });
    console.log((("X minus one is ")+(moduleminus58c4bce870.minus(x, 1))));
    console.log(moduleminus58c4bce870.plus("7 < 10", moduleminus58c4bce870.lessThan(7, 10)));
    console.log(moduleminus58c4bce870.plus("7 > 10", moduleminus58c4bce870.greaterThan(7, 10)));
    console.log(moduleminus58c4bce870.plus("using idioms- ", moduleminus295baa4e1e.apply(moduleminus58c4bce870.plus, [1, 2])));
    moduleA31d161fe8.$("body").append("Hello World.");
    moduleminus58c4bce870.plus(1, 2);
    var s = moduleminus86ecf55a85.symbol("test-press");
    console.log(moduleminus58c4bce870.plus("symbol :", s));
    return console.log(moduleminus58c4bce870.plus("trying match with symbol pattern.", (function (arguments)      {
      var G14852 = undefined;
      var G14853 = s;
      G14852 = (function (arguments)        {
        var matchValminus14854 = G14853;
        var matchFunExprminus14859 = (function (G14858)          {
          return (G14858 instanceof (require("spotting-gazelle/symbol").Symbol));
          });
        if ((!(matchFunExprminus14859(matchValminus14854))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var n = matchValminus14854.name;
        if ((("undefined")===((typeof n))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        return n;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G14852))))        {
        return G14852;
        };
      G14852 = (function (arguments)        {
        var matchValminus14860 = G14853;
        var anythingElse = matchValminus14860;
        return "failedToMatch";
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G14852))))        {
        return G14852;
        };
      throw ((("match-fail at ((match s ((symbol n) n) (anything-else :failed-to-match))) for value ")+(JSON.stringify(G14853))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)))));
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  }));
