((define))([], function ()  {
  var currentModuleminus60994 = {    
    
  };
  (function ()    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    currentModuleminus60994.apply = function (f, anArray)      {
      return (f.apply(undefined, anArray));
      };
    currentModuleminus60994.funcall = function ()      {
      return (function (arguments)        {
        var G61038 = undefined;
        var G61039 = Array.prototype.slice.call(arguments, 0);
        G61038 = function (arguments, G61040)          {
          return ((function ()            {
            if ((!((((G61040 instanceof Array))&&(((G61040.length)>0))))))              {
              return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
              } else               {
              return (function (arguments, f)                {
                return (function (arguments, args)                  {
                  return ((currentModuleminus60994.apply)(f, args));
                  }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G61040.slice(1)));
                }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G61040[0]));
              };
            })());
          }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G61039);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G61038))))          {
          return (G61038);
          };
        G61038 = function (arguments, G61037)          {
          throw ((("No match error in lambda ")+("(lambda (f (tail args)) (apply f args))")));
          }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G61039);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G61038))))          {
          return (G61038);
          };
        throw ((("match-fail at ((match (_\. Array prototype slice (call arguments 0)) ([: f (tail args)] (apply f args)) (G61037 (_throw (_+ \"No match error in lambda \" \"(lambda (f (tail args)) (apply f args))\"))))) for value ")+G61039));
        }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
      };
    })();
  return (currentModuleminus60994);
  })