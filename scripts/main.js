require(["hooves/operator-functions", "hooves/lisp-idioms", "hooves/hooves", "jquery/jquery"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus4745e9d952, moduleA31d161fe8)  {
  return (function (arguments)    {
    // ("hooves/operator-functions" :all)
    ;
    // ("hooves/lisp-idioms" (:with-prefix idioms- :all))
    ;
    // ("hooves/hooves" :all)
    ;
    // ("jquery/jquery" (:as $))
    ;
    (1+1);
    var o = {      
      
    };
    (function (arguments, defineToObjectminus84231)      {
      var init = (function ()        {
        return moduleminus58c4bce870.plus(1, 2, 3);
        });
      defineToObjectminus84231.init = init;
      return defineToObjectminus84231;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), o);
    var x = 10;
    x = moduleminus58c4bce870.plus(1, x);
    console.log("require(\"hooves/hooves\").numberPredicate", require("hooves/hooves").numberPredicate);
    console.log({      
      x:x
    });
    console.log((("X minus one is ")+(moduleminus58c4bce870.minus(x, 1))));
    console.log(moduleminus58c4bce870.plus("7 < 10", moduleminus58c4bce870.lessThan(7, 10)));
    console.log(moduleminus58c4bce870.plus("7 > 10", moduleminus58c4bce870.greaterThan(7, 10)));
    console.log(moduleminus58c4bce870.plus("using idioms- ", moduleminus295baa4e1e.apply(moduleminus58c4bce870.plus, [1, 2])));
    moduleA31d161fe8.$("body").append("Hello World.");
    return moduleminus58c4bce870.plus(1, 2);
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  }));
