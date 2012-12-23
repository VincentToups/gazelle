((define))([], function ()  {
  var currentModuleminus159656 = {    
    
  };
  (function ()    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    currentModuleminus159656.plus = function ()      {
      return ((function (arguments)        {
        var G159678 = undefined;
        var G159679 = Array.prototype.slice.call(arguments, 0);
        G159678 = (function (arguments, G159680)          {
          return ((function ()            {
            if ((!((((G159680 instanceof Array))&&(((G159680.length)>0))))))              {
              return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
              } else               {
              return ((function (arguments, hd)                {
                return ((function (arguments, tl)                  {
                  var result = hd;
                  for (i in (tl))                    {
                    result = (result+(tl[i]));
                    };
                  return (result);
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G159680.slice(1)));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G159680[0]));
              };
            })());
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G159679);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G159678))))          {
          return (G159678);
          };
        G159678 = (function (arguments, G159677)          {
          throw ((("No match error in lambda ")+("(lambda (hd (tail tl)) (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result)")));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G159679);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G159678))))          {
          return (G159678);
          };
        throw ((("match-fail at ((match (_\. Array prototype slice (call arguments 0)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result) (G159677 (_throw (_+ \"No match error in lambda \" \"(lambda (hd (tail tl)) (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result)\"))))) for value ")+G159679));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
      };
    var incr = "macro - no dynamic value.";
    })();
  return (currentModuleminus159656);
  })