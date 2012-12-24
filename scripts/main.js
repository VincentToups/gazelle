((require))(["hooves/operator-functions", "hooves/lisp-idioms", "jquery/jquery"], function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleA31d161fe8)  {
  return ((function ()    {
    "(\"hooves/operator-functions\" :all)";
    "(\"hooves/lisp-idioms\" (:with-prefix idioms- :all))";
    "(\"jquery/jquery\" (:as $))";
    (1+1);
    var x = 10;
    x = (moduleminus58c4bce870.plus)(1, x);
    (console.log)((("X minus one is ")+((moduleminus58c4bce870.minus)(x, 1))));
    (console.log)((moduleminus58c4bce870.plus)("7 < 10", (moduleminus58c4bce870.lessThan)(7, 10)));
    (console.log)((moduleminus58c4bce870.plus)("7 > 10", (moduleminus58c4bce870.greaterThan)(7, 10)));
    (console.log)((moduleminus58c4bce870.plus)("using idioms- ", (moduleminus295baa4e1e.apply)(moduleminus58c4bce870.plus, [1, 2])));
    ((moduleA31d161fe8.$)("body")).append("Hello World.");
    return ((moduleminus58c4bce870.plus)(1, 2));
    })());
  });
