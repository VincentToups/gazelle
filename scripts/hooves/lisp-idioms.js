((define))([], function ()  {
  var currentModuleminus107714 = {    
    
  };
  (function ()    {
    return ((function ()      {
      var defineplus = "macro - no dynamic value.";
      var defineMacroplus = "macro - no dynamic value.";
      currentModuleminus107714.apply = function (f, anArray)        {
        return (f.apply(undefined, anArray));
        };
      currentModuleminus107714.funcall = function ()        {
        return (function (arguments)          {
          var G107758 = undefined;
          var G107759 = Array.prototype.slice.call(arguments, 0);
          G107758 = function (arguments, G107760)            {
            return ((function ()              {
              if ((!((((G107760 instanceof Array))&&(((G107760.length)>0))))))                {
                return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
                } else                 {
                return (function (arguments, f)                  {
                  return (function (arguments, args)                    {
                    return ((currentModuleminus107714.apply)(f, args));
                    }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G107760.slice(1)));
                  }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G107760[0]));
                };
              })());
            }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G107759);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G107758))))            {
            return (G107758);
            };
          G107758 = function (arguments, G107757)            {
            throw ((("No match error in lambda ")+("(lambda (f (tail args)) (apply f args))")));
            }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G107759);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G107758))))            {
            return (G107758);
            };
          throw ((("match-fail at ((match (_\. Array prototype slice (call arguments 0)) ([: f (tail args)] (apply f args)) (G107757 (_throw (_+ \"No match error in lambda \" \"(lambda (f (tail args)) (apply f args))\"))))) for value ")+G107759));
          }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
        };
      })());
    })();
  return (currentModuleminus107714);
  })