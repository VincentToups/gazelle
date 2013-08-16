define(["hooves/hooves", "hooves/class-utils"], (function (module47c9484436, moduleB9320eb5f4)  {
  var currentModule30478 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModule30478 = value;
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
    var Symbol30498 = (function (name)      {
      this.name = name;
      return this;
      });
    var superClass30502 = Object;
    currentModule30478.Symbol = (function (name)      {
      this.name = name;
      return this;
      });
    (require("hooves/class-utils").extend).call(null, currentModule30478.Symbol, superClass30502);
    var classValue30521 = currentModule30478.Symbol;
    classValue30521.prototype.toString = (function ()      {
      return module47c9484436.plus("", this.name);
      });
    currentModule30478.intern = (function (name)      {
      var maybeSymbol = internedSymbols[name];
      var theSymbol = ((module47c9484436.definedPredicate(maybeSymbol))?(maybeSymbol) : ((new (currentModule30478.Symbol)(name))));
      internedSymbols[name] = theSymbol;
      return theSymbol;
      });
    currentModule30478.symbol = (function (name)      {
      return (new (currentModule30478.Symbol)(name));
      });
    // symbol
    // pattern - no dynamic value.
    ;
    currentModule30478.symbolName = (function (s)      {
      return (((s instanceof currentModule30478.Symbol))?(s.name) : ((function (arguments)        {
        throw (module47c9484436.plus("Tried to take the symbol-name of ", s));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)))));
      });
    currentModule30478.symbolp = (function (s)      {
      return (s instanceof currentModule30478.Symbol);
      });
    // symbol
    // pattern - no dynamic value.
    ;
    currentModule30478.keywordp = (function (o)      {
      return (o instanceof currentModule30478.Keyword);
      });
    currentModule30478.nonKwSymbolp = (function (s)      {
      return ((currentModule30478.symbolp(s))&&(not(currentModule30478.keywordp(s))));
      });
    // keyword
    // pattern - no dynamic value.
    ;
    // non-kw-symbol
    // pattern - no dynamic value.
    ;
    var Keyword30705 = (function (name)      {
      return currentModule30478.Symbol.call(this, name);
      });
    var superClass30709 = currentModule30478.Symbol;
    currentModule30478.Keyword = (function (name)      {
      return currentModule30478.Symbol.call(this, name);
      });
    (require("hooves/class-utils").extend).call(null, currentModule30478.Keyword, superClass30709);
    var classValue30728 = currentModule30478.Keyword;
    classValue30728.prototype.toString = (function ()      {
      return module47c9484436.plus(":", currentModule30478.Keyword.superClass.toString.call(this));
      });
    ;
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModule30478;
  }))