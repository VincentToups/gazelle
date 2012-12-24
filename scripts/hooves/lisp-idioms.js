((define))([], function ()  {
  var currentModuleminus239807 = {    
    
  };
  (function ()    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    currentModuleminus239807.apply = function (f, anArray)      {
      return (f.apply(undefined, anArray));
      };
    currentModuleminus239807.funcall = function ()      {
      return ((function (arguments)        {
        var G239851 = undefined;
        var G239852 = Array.prototype.slice.call(arguments, 0);
        G239851 = (function (arguments, G239853)          {
          return ((function ()            {
            if ((!((((G239853 instanceof Array))&&(((G239853.length)>0))))))              {
              return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
              } else               {
              return ((function (arguments, f)                {
                return ((function (arguments, args)                  {
                  return ((currentModuleminus239807.apply)(f, args));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G239853.slice(1)));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G239853[0]));
              };
            })());
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G239852);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G239851))))          {
          return (G239851);
          };
        G239851 = (function (arguments, G239850)          {
          throw ((("No match error in lambda ")+("(lambda (f (tail args)) (apply f args))")));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G239852);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G239851))))          {
          return (G239851);
          };
        throw ((("match-fail at ((match (_\. Array prototype slice (call arguments 0)) ([: f (tail args)] (apply f args)) (G239850 (_throw (_+ \"No match error in lambda \" \"(lambda (f (tail args)) (apply f args))\"))))) for value ")+G239852));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
      };
    })();
  return (currentModuleminus239807);
  })