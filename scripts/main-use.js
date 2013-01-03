var _localRequire = ((require))(["hooves/operator-functions", "hooves/lisp-idioms", "jquery/jquery"]);
// Symbol macro for 
// ("hooves/operator-functions" :all)
// proper: Hey. Symbol macro keys are nil
;
// Symbol macro for 
// ("hooves/lisp-idioms" (:with-prefix idioms- :all))
// proper: Hey. Symbol macro keys are (module-58c4bce870)
;
// Symbol macro for 
// ("jquery/jquery" (:as $))
// proper: Hey. Symbol macro keys are (module-58c4bce870 module-295baa4e1e)
;
"(\"hooves/operator-functions\" :all)";
"(\"hooves/lisp-idioms\" (:with-prefix idioms- :all))";
"(\"jquery/jquery\" (:as $))";
;
(1+1);
var x = 10;
incr(x);
(console.log)((("X minus one is ")+(minus(x, 1))));
(console.log)(plus("7 < 10", lessThan(7, 10)));
(console.log)(plus("7 > 10", greaterThan(7, 10)));
(console.log)(plus("using idioms- ", idiomsApply(plus, [1, 2])));
$("body").append("Hello World.");
plus(1, 2);
