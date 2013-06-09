define(["hooves/hooves", "hooves/class-utils"], (function (module4745e9d952, module327750a039)  {
  var currentModule164232 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModule164232 = value;
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
    // ("hooves/class-utils" :all)
    ;
    var internedSymbols = {      
      
    };
    var Symbol164252 = (function (name)      {
      this.name = name;
      return this;
      });
    var superClass164256 = Object;
    currentModule164232.Symbol = (function (name)      {
      this.name = name;
      return this;
      });
    (require("hooves/class-utils").extend).call(null, currentModule164232.Symbol, superClass164256);
    var classValue164275 = currentModule164232.Symbol;
    classValue164275.prototype.toString = (function ()      {
      return module4745e9d952.plus("", this.name);
      });
    currentModule164232.intern = (function (name)      {
      var maybeSymbol = internedSymbols[name];
      var theSymbol = ((module4745e9d952.definedPredicate(maybeSymbol))?(maybeSymbol) : ((new (currentModule164232.Symbol)(name))));
      internedSymbols[name] = theSymbol;
      return theSymbol;
      });
    currentModule164232.symbol = (function (name)      {
      return (new (currentModule164232.Symbol)(name));
      });
    // symbol
    // pattern - no dynamic value.
    ;
    currentModule164232.symbolName = (function (s)      {
      return (((s instanceof currentModule164232.Symbol))?(s.name) : ((function (arguments)        {
        throw (module4745e9d952.plus("Tried to take the symbol-name of ", s));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)))));
      });
    currentModule164232.symbolp = (function (s)      {
      return (s instanceof currentModule164232.Symbol);
      });
    // symbol
    // pattern - no dynamic value.
    ;
    currentModule164232.keywordp = (function (o)      {
      return (o instanceof currentModule164232.Keyword);
      });
    currentModule164232.nonKwSymbolp = (function (s)      {
      return ((currentModule164232.symbolp(s))&&(not(currentModule164232.keywordp(s))));
      });
    // keyword
    // pattern - no dynamic value.
    ;
    // non-kw-symbol
    // pattern - no dynamic value.
    ;
    var Keyword164459 = (function (name)      {
      return currentModule164232.Symbol.call(this, name);
      });
    var superClass164463 = currentModule164232.Symbol;
    currentModule164232.Keyword = (function (name)      {
      return currentModule164232.Symbol.call(this, name);
      });
    (require("hooves/class-utils").extend).call(null, currentModule164232.Keyword, superClass164463);
    var classValue164482 = currentModule164232.Keyword;
    classValue164482.prototype.toString = (function ()      {
      return module4745e9d952.plus(":", currentModule164232.Keyword.superClass.toString.call(this));
      });
    ;
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModule164232;
  }))