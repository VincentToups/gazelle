((define))(["hooves/lisp-idioms"], function (moduleminus295baa4e1e)  {
  var currentModuleminus17671 = {    
    
  };
  (function ()    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    "(\"hooves/lisp-idioms\" (:as apply funcall))";
    currentModuleminus17671.plus = function ()      {
      return ((function (arguments)        {
        var G17743 = undefined;
        var G17744 = Array.prototype.slice.call(arguments, 0);
        G17743 = (function (arguments, G17745)          {
          return ((function ()            {
            if ((!((((G17745 instanceof Array))&&(((G17745.length)>0))))))              {
              return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
              } else               {
              return ((function (arguments, hd)                {
                return ((function (arguments, tl)                  {
                  var result = hd;
                  for (i in (tl))                    {
                    result = (result+(tl[i]));
                    };
                  return (result);
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G17745.slice(1)));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G17745[0]));
              };
            })());
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G17744);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G17743))))          {
          return (G17743);
          };
        G17743 = (function (arguments, G17742)          {
          throw ((("No match error in lambda ")+("(lambda (hd (tail tl)) (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result)")));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G17744);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G17743))))          {
          return (G17743);
          };
        throw ((("match-fail at ((match (_\. Array prototype slice (call arguments 0)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result) (G17742 (_throw (_+ \"No match error in lambda \" \"(lambda (hd (tail tl)) (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result)\"))))) for value ")+G17744));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
      };
    currentModuleminus17671.minus = function ()      {
      return ((function (arguments)        {
        var G17768 = undefined;
        var G17769 = Array.prototype.slice.call(arguments, 0);
        G17768 = (function (arguments, G17770)          {
          return ((function ()            {
            if ((!((((G17770 instanceof Array))&&(((G17770.length)>0))))))              {
              return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
              } else               {
              return ((function (arguments, hd)                {
                return ((function (arguments, tl)                  {
                  return ((hd-((moduleminus295baa4e1e.apply)(currentModuleminus17671.plus, tl))));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G17770.slice(1)));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G17770[0]));
              };
            })());
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G17769);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G17768))))          {
          return (G17768);
          };
        G17768 = (function (arguments, G17767)          {
          throw ((("No match error in lambda ")+("(lambda (hd (tail tl)) (_- hd (apply + tl)))")));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G17769);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G17768))))          {
          return (G17768);
          };
        throw ((("match-fail at ((match (_\. Array prototype slice (call arguments 0)) ([: hd (tail tl)] (_- hd (apply + tl))) (G17767 (_throw (_+ \"No match error in lambda \" \"(lambda (hd (tail tl)) (_- hd (apply + tl)))\"))))) for value ")+G17769));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
      };
    currentModuleminus17671.times = function ()      {
      return ((function (arguments)        {
        var G17793 = undefined;
        var G17794 = Array.prototype.slice.call(arguments, 0);
        G17793 = (function (arguments, G17795)          {
          return ((function ()            {
            if ((!((((G17795 instanceof Array))&&(((G17795.length)>0))))))              {
              return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
              } else               {
              return ((function (arguments, hd)                {
                return ((function (arguments, tl)                  {
                  var result = hd;
                  for (i in (tl))                    {
                    result = (result*(tl[i]));
                    };
                  return (result);
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G17795.slice(1)));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G17795[0]));
              };
            })());
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G17794);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G17793))))          {
          return (G17793);
          };
        G17793 = (function (arguments, G17792)          {
          throw ((("No match error in lambda ")+("(lambda (hd (tail tl)) (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result)")));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G17794);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G17793))))          {
          return (G17793);
          };
        throw ((("match-fail at ((match (_\. Array prototype slice (call arguments 0)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result) (G17792 (_throw (_+ \"No match error in lambda \" \"(lambda (hd (tail tl)) (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result)\"))))) for value ")+G17794));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
      };
    currentModuleminus17671.divide = function ()      {
      return ((function (arguments)        {
        var G17818 = undefined;
        var G17819 = Array.prototype.slice.call(arguments, 0);
        G17818 = (function (arguments, G17820)          {
          return ((function ()            {
            if ((!((((G17820 instanceof Array))&&(((G17820.length)>0))))))              {
              return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
              } else               {
              return ((function (arguments, hd)                {
                return ((function (arguments, tl)                  {
                  return ((hd/((moduleminus295baa4e1e.apply)(currentModuleminus17671.times, tl))));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G17820.slice(1)));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G17820[0]));
              };
            })());
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G17819);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G17818))))          {
          return (G17818);
          };
        G17818 = (function (arguments, G17817)          {
          throw ((("No match error in lambda ")+("(lambda (hd (tail tl)) (_/ hd (apply * tl)))")));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G17819);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G17818))))          {
          return (G17818);
          };
        throw ((("match-fail at ((match (_\. Array prototype slice (call arguments 0)) ([: hd (tail tl)] (_/ hd (apply * tl))) (G17817 (_throw (_+ \"No match error in lambda \" \"(lambda (hd (tail tl)) (_/ hd (apply * tl)))\"))))) for value ")+G17819));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
      };
    var defineExternalBinop = "macro - no dynamic value.";
    var defineExternalBinops = "macro - no dynamic value.";
    currentModuleminus17671.lessThan = function (G17831, G17832)      {
      return ((G17831<G17832));
      };
    currentModuleminus17671.lessThanequal = function (G17856, G17857)      {
      return ((G17856<=G17857));
      };
    currentModuleminus17671.greaterThan = function (G17881, G17882)      {
      return ((G17881>G17882));
      };
    currentModuleminus17671.greaterThanequal = function (G17906, G17907)      {
      return ((G17906>=G17907));
      };
    currentModuleminus17671.ampersand = function (G17931, G17932)      {
      return ((G17931&G17932));
      };
    currentModuleminus17671.pipe = function (G17956, G17957)      {
      return ((G17956|G17957));
      };
    currentModuleminus17671.equalequal = function (G17981, G17982)      {
      return ((G17981==G17982));
      };
    currentModuleminus17671.equalequalequal = function (G18006, G18007)      {
      return ((G18006===G18007));
      };
    currentModuleminus17671.modsign = function (G18031, G18032)      {
      return ((G18031%G18032));
      };
    currentModuleminus17671.caret = function (G18056, G18057)      {
      return ((G18056^G18057));
      };
    currentModuleminus17671.lessThanlessThan = function (G18081, G18082)      {
      return ((G18081<<G18082));
      };
    currentModuleminus17671.greaterThangreaterThan = function (G18106, G18107)      {
      return ((G18106>>G18107));
      };
    currentModuleminus17671.greaterThangreaterThangreaterThan = function (G18131, G18132)      {
      return ((G18131>>>G18132));
      };
    ;
    var ampersandampersand = "macro - no dynamic value.";
    var pipepipe = "macro - no dynamic value.";
    var incr = "macro - no dynamic value.";
    var decr = "macro - no dynamic value.";
    })();
  return (currentModuleminus17671);
  })