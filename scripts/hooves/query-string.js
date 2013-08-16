define([], (function ()  {
  var currentModule30428 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModule30428 = value;
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
    currentModule30428.queryObject = (function ()      {
      // Return an object representing the current URL's query string.
      ;
      var result = {        
        
      }, queryString = location.search.slice(1), re = (new (RegExp)("([^&=]+)=([^&]*)", "g")), m = undefined;
      while (m = re.exec(queryString))        {
        if (m)          {
          result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
          };
        };
      return result;
      });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModule30428;
  }))