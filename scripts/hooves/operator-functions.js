((define))(["hooves/lisp-idioms"], function (moduleminus295baa4e1e)  {
  var currentModuleminus60991 = {    
    
  };
  (function ()    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    "(\"hooves/lisp-idioms\" (:as apply funcall))";
    currentModuleminus60991.plus = function ()      {
      return (function (arguments)        {
        var G61063 = undefined;
        var G61064 = Array.prototype.slice.call(arguments, 0);
        G61063 = function (arguments, G61065)          {
          return ((function ()            {
            if ((!((((G61065 instanceof Array))&&(((G61065.length)>0))))))              {
              return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
              } else               {
              return (function (arguments, hd)                {
                return (function (arguments, tl)                  {
                  var result = hd;
                  for (i in (tl))                    {
                    result = (result+(tl[i]));
                    };
                  return (result);
                  }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G61065.slice(1)));
                }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G61065[0]));
              };
            })());
          }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G61064);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G61063))))          {
          return (G61063);
          };
        G61063 = function (arguments, G61062)          {
          throw ((("No match error in lambda ")+("(lambda (hd (tail tl)) (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result)")));
          }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G61064);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G61063))))          {
          return (G61063);
          };
        throw ((("match-fail at ((match (_\. Array prototype slice (call arguments 0)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result) (G61062 (_throw (_+ \"No match error in lambda \" \"(lambda (hd (tail tl)) (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result)\"))))) for value ")+G61064));
        }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
      };
    currentModuleminus60991.minus = function ()      {
      return (function (arguments)        {
        var G61088 = undefined;
        var G61089 = Array.prototype.slice.call(arguments, 0);
        G61088 = function (arguments, G61090)          {
          return ((function ()            {
            if ((!((((G61090 instanceof Array))&&(((G61090.length)>0))))))              {
              return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
              } else               {
              return (function (arguments, hd)                {
                return (function (arguments, tl)                  {
                  return ((hd-((moduleminus295baa4e1e.apply)(currentModuleminus60991.plus, tl))));
                  }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G61090.slice(1)));
                }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G61090[0]));
              };
            })());
          }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G61089);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G61088))))          {
          return (G61088);
          };
        G61088 = function (arguments, G61087)          {
          throw ((("No match error in lambda ")+("(lambda (hd (tail tl)) (_- hd (apply + tl)))")));
          }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G61089);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G61088))))          {
          return (G61088);
          };
        throw ((("match-fail at ((match (_\. Array prototype slice (call arguments 0)) ([: hd (tail tl)] (_- hd (apply + tl))) (G61087 (_throw (_+ \"No match error in lambda \" \"(lambda (hd (tail tl)) (_- hd (apply + tl)))\"))))) for value ")+G61089));
        }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
      };
    currentModuleminus60991.times = function ()      {
      return (function (arguments)        {
        var G61113 = undefined;
        var G61114 = Array.prototype.slice.call(arguments, 0);
        G61113 = function (arguments, G61115)          {
          return ((function ()            {
            if ((!((((G61115 instanceof Array))&&(((G61115.length)>0))))))              {
              return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
              } else               {
              return (function (arguments, hd)                {
                return (function (arguments, tl)                  {
                  var result = hd;
                  for (i in (tl))                    {
                    result = (result*(tl[i]));
                    };
                  return (result);
                  }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G61115.slice(1)));
                }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G61115[0]));
              };
            })());
          }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G61114);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G61113))))          {
          return (G61113);
          };
        G61113 = function (arguments, G61112)          {
          throw ((("No match error in lambda ")+("(lambda (hd (tail tl)) (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result)")));
          }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G61114);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G61113))))          {
          return (G61113);
          };
        throw ((("match-fail at ((match (_\. Array prototype slice (call arguments 0)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result) (G61112 (_throw (_+ \"No match error in lambda \" \"(lambda (hd (tail tl)) (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result)\"))))) for value ")+G61114));
        }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
      };
    currentModuleminus60991.divide = function ()      {
      return (function (arguments)        {
        var G61138 = undefined;
        var G61139 = Array.prototype.slice.call(arguments, 0);
        G61138 = function (arguments, G61140)          {
          return ((function ()            {
            if ((!((((G61140 instanceof Array))&&(((G61140.length)>0))))))              {
              return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
              } else               {
              return (function (arguments, hd)                {
                return (function (arguments, tl)                  {
                  return ((hd/((moduleminus295baa4e1e.apply)(currentModuleminus60991.times, tl))));
                  }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G61140.slice(1)));
                }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G61140[0]));
              };
            })());
          }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G61139);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G61138))))          {
          return (G61138);
          };
        G61138 = function (arguments, G61137)          {
          throw ((("No match error in lambda ")+("(lambda (hd (tail tl)) (_/ hd (apply * tl)))")));
          }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G61139);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G61138))))          {
          return (G61138);
          };
        throw ((("match-fail at ((match (_\. Array prototype slice (call arguments 0)) ([: hd (tail tl)] (_/ hd (apply * tl))) (G61137 (_throw (_+ \"No match error in lambda \" \"(lambda (hd (tail tl)) (_/ hd (apply * tl)))\"))))) for value ")+G61139));
        }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
      };
    var defineExternalBinop = "macro - no dynamic value.";
    var defineExternalBinops = "macro - no dynamic value.";
    currentModuleminus60991.lessThan = function (G61151, G61152)      {
      return ((G61151<G61152));
      };
    currentModuleminus60991.lessThanequal = function (G61176, G61177)      {
      return ((G61176<=G61177));
      };
    currentModuleminus60991.greaterThan = function (G61201, G61202)      {
      return ((G61201>G61202));
      };
    currentModuleminus60991.greaterThanequal = function (G61226, G61227)      {
      return ((G61226>=G61227));
      };
    currentModuleminus60991.ampersand = function (G61251, G61252)      {
      return ((G61251&G61252));
      };
    currentModuleminus60991.pipe = function (G61276, G61277)      {
      return ((G61276|G61277));
      };
    currentModuleminus60991.equalequal = function (G61301, G61302)      {
      return ((G61301==G61302));
      };
    currentModuleminus60991.equalequalequal = function (G61326, G61327)      {
      return ((G61326===G61327));
      };
    currentModuleminus60991.modsign = function (G61351, G61352)      {
      return ((G61351%G61352));
      };
    currentModuleminus60991.caret = function (G61376, G61377)      {
      return ((G61376^G61377));
      };
    currentModuleminus60991.lessThanlessThan = function (G61401, G61402)      {
      return ((G61401<<G61402));
      };
    currentModuleminus60991.greaterThangreaterThan = function (G61426, G61427)      {
      return ((G61426>>G61427));
      };
    currentModuleminus60991.greaterThangreaterThangreaterThan = function (G61451, G61452)      {
      return ((G61451>>>G61452));
      };
    ;
    var ampersandampersand = "macro - no dynamic value.";
    var pipepipe = "macro - no dynamic value.";
    var incr = "macro - no dynamic value.";
    var decr = "macro - no dynamic value.";
    })();
  return (currentModuleminus60991);
  })