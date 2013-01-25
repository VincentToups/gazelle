var defineTo = "macro - no dynamic value.";
var o = {  
  
};
(function (arguments, defineToObjectminus80291)  {
  var x = 10;
  defineToObjectminus80291.x = x;
  return defineToObjectminus80291;
  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), o);
(function (arguments, defineToObjectminus80303)  {
  var f = (function (x)    {
    return (x+x);
    });
  defineToObjectminus80303.f = f;
  return defineToObjectminus80303;
  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), o);
print(o.f(o.x));
