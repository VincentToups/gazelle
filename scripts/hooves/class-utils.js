define(["hooves/hooves"], (function (module4745e9d952)  {
  var currentModule6374 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModule6374 = value;
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
    // A simple class system based on Kevin Lindsey's code:
    // http://www.kevlindev.com/tutorials/javascript/inheritance/
    ;
    currentModule6374.extend = (function (subClass, baseClass)      {
      // extend sub-class base-class: 
      // Where both sub-class and base-class are constructors, extend
      // contrives that sub-class will be a sub class of base-class, 
      // able to access its methods and values.
      ;
      var inheritance = (function ()        {
        return undefined;
        });
      inheritance.prototype = baseClass.prototype;
      subClass.prototype = (new (inheritance)());
      subClass.prototype.constructor = subClass;
      subClass.superConstructor = baseClass;
      subClass.superClass = baseClass.prototype;
      });
    // define-class
    // macro - no dynamic value.
    ;
    // define-class+
    // macro - no dynamic value.
    ;
    return // define-method
    // macro - no dynamic value.
    ;
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModule6374;
  }))