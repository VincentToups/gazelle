define(["hooves/hooves", "hooves/class-utils"], (function (moduleminus4745e9d952, moduleminus327750a039)  {
  var currentModuleminus89317 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus89317 = value;
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
    var Symbol89337 = (function (name)      {
      this.name = name;
      return this;
      });
    var superClass89341 = Object;
    currentModuleminus89317.Symbol = (function (name)      {
      this.name = name;
      return this;
      });
    (require("hooves/class-utils").extend).call(null, currentModuleminus89317.Symbol, superClass89341);
    ;
    var classValue89360 = currentModuleminus89317.Symbol;
    classValue89360.prototype.toString = (function ()      {
      return moduleminus4745e9d952.plus("", this.name);
      });
    ;
    currentModuleminus89317.intern = (function (name)      {
      var maybeSymbol = internedSymbols[name];
      var theSymbol = ((moduleminus4745e9d952.definedPredicate(maybeSymbol))?(maybeSymbol) : ((new (currentModuleminus89317.Symbol)(name))));
      internedSymbols[name] = theSymbol;
      return theSymbol;
      });
    currentModuleminus89317.symbol = (function (name)      {
      return (new (currentModuleminus89317.Symbol)(name));
      });
    // symbol
    // pattern - no dynamic value.
    ;
    currentModuleminus89317.symbolName = (function (s)      {
      return (((s instanceof currentModuleminus89317.Symbol))?(s.name) : ((function (arguments)        {
        throw (moduleminus4745e9d952.plus("Tried to take the symbol-name of ", s));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)))));
      });
    currentModuleminus89317.symbolp = (function (s)      {
      return (s instanceof currentModuleminus89317.Symbol);
      });
    // symbol
    // pattern - no dynamic value.
    ;
    currentModuleminus89317.keywordp = (function (o)      {
      return (o instanceof currentModuleminus89317.Keyword);
      });
    currentModuleminus89317.nonKwSymbolp = (function (s)      {
      return ((currentModuleminus89317.symbolp(s))&&(not(currentModuleminus89317.keywordp(s))));
      });
    // keyword
    // pattern - no dynamic value.
    ;
    // non-kw-symbol
    // pattern - no dynamic value.
    ;
    var Keyword89544 = (function (name)      {
      return currentModuleminus89317.Symbol.call(this, name);
      });
    var superClass89548 = currentModuleminus89317.Symbol;
    currentModuleminus89317.Keyword = (function (name)      {
      return currentModuleminus89317.Symbol.call(this, name);
      });
    (require("hooves/class-utils").extend).call(null, currentModuleminus89317.Keyword, superClass89548);
    ;
    var classValue89567 = currentModuleminus89317.Keyword;
    classValue89567.prototype.toString = (function ()      {
      return moduleminus4745e9d952.plus(":", currentModuleminus89317.Keyword.superClass.toString.call(this));
      });
    ;
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus89317;
  }))