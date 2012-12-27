((define))([], function ()  {
  var currentModuleminus17674 = {    
    
  };
  (function ()    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    currentModuleminus17674.apply = function (f, anArray)      {
      return (f.apply(undefined, anArray));
      };
    currentModuleminus17674.funcall = function ()      {
      return ((function (arguments)        {
        var G17718 = undefined;
        var G17719 = Array.prototype.slice.call(arguments, 0);
        G17718 = (function (arguments, G17720)          {
          return ((function ()            {
            if ((!((((G17720 instanceof Array))&&(((G17720.length)>0))))))              {
              return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
              } else               {
              return ((function (arguments, f)                {
                return ((function (arguments, args)                  {
                  return ((currentModuleminus17674.apply)(f, args));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G17720.slice(1)));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G17720[0]));
              };
            })());
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G17719);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G17718))))          {
          return (G17718);
          };
        G17718 = (function (arguments, G17717)          {
          throw ((("No match error in lambda ")+("(lambda (f (tail args)) (apply f args))")));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G17719);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G17718))))          {
          return (G17718);
          };
        throw ((("match-fail at ((match (_\. Array prototype slice (call arguments 0)) ([: f (tail args)] (apply f args)) (G17717 (_throw (_+ \"No match error in lambda \" \"(lambda (f (tail args)) (apply f args))\"))))) for value ")+G17719));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
      };
    })();
  return (currentModuleminus17674);
  })