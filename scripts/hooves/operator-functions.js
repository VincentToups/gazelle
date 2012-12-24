((define))(["hooves/lisp-idioms"], function (moduleminus295baa4e1e)  {
  var currentModuleminus239804 = {    
    
  };
  (function ()    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    "(\"hooves/lisp-idioms\" (:as apply funcall))";
    currentModuleminus239804.plus = function ()      {
      return ((function (arguments)        {
        var G239876 = undefined;
        var G239877 = Array.prototype.slice.call(arguments, 0);
        G239876 = (function (arguments, G239878)          {
          return ((function ()            {
            if ((!((((G239878 instanceof Array))&&(((G239878.length)>0))))))              {
              return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
              } else               {
              return ((function (arguments, hd)                {
                return ((function (arguments, tl)                  {
                  var result = hd;
                  for (i in (tl))                    {
                    result = (result+(tl[i]));
                    };
                  return (result);
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G239878.slice(1)));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G239878[0]));
              };
            })());
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G239877);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G239876))))          {
          return (G239876);
          };
        G239876 = (function (arguments, G239875)          {
          throw ((("No match error in lambda ")+("(lambda (hd (tail tl)) (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result)")));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G239877);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G239876))))          {
          return (G239876);
          };
        throw ((("match-fail at ((match (_\. Array prototype slice (call arguments 0)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result) (G239875 (_throw (_+ \"No match error in lambda \" \"(lambda (hd (tail tl)) (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result)\"))))) for value ")+G239877));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
      };
    currentModuleminus239804.minus = function ()      {
      return ((function (arguments)        {
        var G239901 = undefined;
        var G239902 = Array.prototype.slice.call(arguments, 0);
        G239901 = (function (arguments, G239903)          {
          return ((function ()            {
            if ((!((((G239903 instanceof Array))&&(((G239903.length)>0))))))              {
              return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
              } else               {
              return ((function (arguments, hd)                {
                return ((function (arguments, tl)                  {
                  return ((hd-((moduleminus295baa4e1e.apply)(currentModuleminus239804.plus, tl))));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G239903.slice(1)));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G239903[0]));
              };
            })());
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G239902);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G239901))))          {
          return (G239901);
          };
        G239901 = (function (arguments, G239900)          {
          throw ((("No match error in lambda ")+("(lambda (hd (tail tl)) (_- hd (apply + tl)))")));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G239902);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G239901))))          {
          return (G239901);
          };
        throw ((("match-fail at ((match (_\. Array prototype slice (call arguments 0)) ([: hd (tail tl)] (_- hd (apply + tl))) (G239900 (_throw (_+ \"No match error in lambda \" \"(lambda (hd (tail tl)) (_- hd (apply + tl)))\"))))) for value ")+G239902));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
      };
    currentModuleminus239804.times = function ()      {
      return ((function (arguments)        {
        var G239926 = undefined;
        var G239927 = Array.prototype.slice.call(arguments, 0);
        G239926 = (function (arguments, G239928)          {
          return ((function ()            {
            if ((!((((G239928 instanceof Array))&&(((G239928.length)>0))))))              {
              return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
              } else               {
              return ((function (arguments, hd)                {
                return ((function (arguments, tl)                  {
                  var result = hd;
                  for (i in (tl))                    {
                    result = (result*(tl[i]));
                    };
                  return (result);
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G239928.slice(1)));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G239928[0]));
              };
            })());
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G239927);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G239926))))          {
          return (G239926);
          };
        G239926 = (function (arguments, G239925)          {
          throw ((("No match error in lambda ")+("(lambda (hd (tail tl)) (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result)")));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G239927);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G239926))))          {
          return (G239926);
          };
        throw ((("match-fail at ((match (_\. Array prototype slice (call arguments 0)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result) (G239925 (_throw (_+ \"No match error in lambda \" \"(lambda (hd (tail tl)) (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result)\"))))) for value ")+G239927));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
      };
    currentModuleminus239804.divide = function ()      {
      return ((function (arguments)        {
        var G239951 = undefined;
        var G239952 = Array.prototype.slice.call(arguments, 0);
        G239951 = (function (arguments, G239953)          {
          return ((function ()            {
            if ((!((((G239953 instanceof Array))&&(((G239953.length)>0))))))              {
              return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
              } else               {
              return ((function (arguments, hd)                {
                return ((function (arguments, tl)                  {
                  return ((hd/((moduleminus295baa4e1e.apply)(currentModuleminus239804.times, tl))));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G239953.slice(1)));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G239953[0]));
              };
            })());
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G239952);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G239951))))          {
          return (G239951);
          };
        G239951 = (function (arguments, G239950)          {
          throw ((("No match error in lambda ")+("(lambda (hd (tail tl)) (_/ hd (apply * tl)))")));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G239952);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G239951))))          {
          return (G239951);
          };
        throw ((("match-fail at ((match (_\. Array prototype slice (call arguments 0)) ([: hd (tail tl)] (_/ hd (apply * tl))) (G239950 (_throw (_+ \"No match error in lambda \" \"(lambda (hd (tail tl)) (_/ hd (apply * tl)))\"))))) for value ")+G239952));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
      };
    var defineExternalBinop = "macro - no dynamic value.";
    var defineExternalBinops = "macro - no dynamic value.";
    currentModuleminus239804.lessThan = function (G239964, G239965)      {
      return ((G239964<G239965));
      };
    currentModuleminus239804.lessThanequal = function (G239989, G239990)      {
      return ((G239989<=G239990));
      };
    currentModuleminus239804.greaterThan = function (G240014, G240015)      {
      return ((G240014>G240015));
      };
    currentModuleminus239804.greaterThanequal = function (G240039, G240040)      {
      return ((G240039>=G240040));
      };
    currentModuleminus239804.ampersand = function (G240064, G240065)      {
      return ((G240064&G240065));
      };
    currentModuleminus239804.pipe = function (G240089, G240090)      {
      return ((G240089|G240090));
      };
    currentModuleminus239804.equalequal = function (G240114, G240115)      {
      return ((G240114==G240115));
      };
    currentModuleminus239804.equalequalequal = function (G240139, G240140)      {
      return ((G240139===G240140));
      };
    currentModuleminus239804.modsign = function (G240164, G240165)      {
      return ((G240164%G240165));
      };
    currentModuleminus239804.caret = function (G240189, G240190)      {
      return ((G240189^G240190));
      };
    currentModuleminus239804.lessThanlessThan = function (G240214, G240215)      {
      return ((G240214<<G240215));
      };
    currentModuleminus239804.greaterThangreaterThan = function (G240239, G240240)      {
      return ((G240239>>G240240));
      };
    currentModuleminus239804.greaterThangreaterThangreaterThan = function (G240264, G240265)      {
      return ((G240264>>>G240265));
      };
    ;
    var ampersandampersand = "macro - no dynamic value.";
    var pipepipe = "macro - no dynamic value.";
    var incr = "macro - no dynamic value.";
    var decr = "macro - no dynamic value.";
    })();
  return (currentModuleminus239804);
  })