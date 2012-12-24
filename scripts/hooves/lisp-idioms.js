((define))([], function ()  {
  var currentModuleminus202059 = {    
    
  };
  (function ()    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    currentModuleminus202059.apply = function (f, anArray)      {
      return (f.apply(undefined, anArray));
      };
    currentModuleminus202059.funcall = function ()      {
      return ((function (arguments)        {
        var G202103 = undefined;
        var G202104 = Array.prototype.slice.call(arguments, 0);
        G202103 = (function (arguments, G202105)          {
          return ((function ()            {
            if ((!((((G202105 instanceof Array))&&(((G202105.length)>0))))))              {
              return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
              } else               {
              return ((function (arguments, f)                {
                return ((function (arguments, args)                  {
                  return ((currentModuleminus202059.apply)(f, args));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G202105.slice(1)));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G202105[0]));
              };
            })());
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G202104);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G202103))))          {
          return (G202103);
          };
        G202103 = (function (arguments, G202102)          {
          throw ((("No match error in lambda ")+("(lambda (f (tail args)) (apply f args))")));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G202104);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G202103))))          {
          return (G202103);
          };
        throw ((("match-fail at ((match (_\. Array prototype slice (call arguments 0)) ([: f (tail args)] (apply f args)) (G202102 (_throw (_+ \"No match error in lambda \" \"(lambda (f (tail args)) (apply f args))\"))))) for value ")+G202104));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
      };
    })();
  return (currentModuleminus202059);
  })