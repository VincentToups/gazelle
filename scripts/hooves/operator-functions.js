((define))(["hooves/lisp-idioms"], function (moduleminus295baa4e1e)  {
  var currentModuleminus107711 = {    
    
  };
  (function ()    {
    return ((function ()      {
      var defineplus = "macro - no dynamic value.";
      var defineMacroplus = "macro - no dynamic value.";
      "(\"hooves/lisp-idioms\" (:as apply funcall))";
      currentModuleminus107711.plus = function ()        {
        return (function (arguments)          {
          var G107783 = undefined;
          var G107784 = Array.prototype.slice.call(arguments, 0);
          G107783 = function (arguments, G107785)            {
            return ((function ()              {
              if ((!((((G107785 instanceof Array))&&(((G107785.length)>0))))))                {
                return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
                } else                 {
                return (function (arguments, hd)                  {
                  return (function (arguments, tl)                    {
                    var result = hd;
                    for (i in (tl))                      {
                      result = (result+(tl[i]));
                      };
                    return (result);
                    }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G107785.slice(1)));
                  }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G107785[0]));
                };
              })());
            }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G107784);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G107783))))            {
            return (G107783);
            };
          G107783 = function (arguments, G107782)            {
            throw ((("No match error in lambda ")+("(lambda (hd (tail tl)) (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result)")));
            }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G107784);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G107783))))            {
            return (G107783);
            };
          throw ((("match-fail at ((match (_\. Array prototype slice (call arguments 0)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result) (G107782 (_throw (_+ \"No match error in lambda \" \"(lambda (hd (tail tl)) (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result)\"))))) for value ")+G107784));
          }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
        };
      currentModuleminus107711.minus = function ()        {
        return (function (arguments)          {
          var G107808 = undefined;
          var G107809 = Array.prototype.slice.call(arguments, 0);
          G107808 = function (arguments, G107810)            {
            return ((function ()              {
              if ((!((((G107810 instanceof Array))&&(((G107810.length)>0))))))                {
                return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
                } else                 {
                return (function (arguments, hd)                  {
                  return (function (arguments, tl)                    {
                    return ((hd-((moduleminus295baa4e1e.apply)(currentModuleminus107711.plus, tl))));
                    }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G107810.slice(1)));
                  }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G107810[0]));
                };
              })());
            }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G107809);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G107808))))            {
            return (G107808);
            };
          G107808 = function (arguments, G107807)            {
            throw ((("No match error in lambda ")+("(lambda (hd (tail tl)) (_- hd (apply + tl)))")));
            }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G107809);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G107808))))            {
            return (G107808);
            };
          throw ((("match-fail at ((match (_\. Array prototype slice (call arguments 0)) ([: hd (tail tl)] (_- hd (apply + tl))) (G107807 (_throw (_+ \"No match error in lambda \" \"(lambda (hd (tail tl)) (_- hd (apply + tl)))\"))))) for value ")+G107809));
          }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
        };
      currentModuleminus107711.times = function ()        {
        return (function (arguments)          {
          var G107833 = undefined;
          var G107834 = Array.prototype.slice.call(arguments, 0);
          G107833 = function (arguments, G107835)            {
            return ((function ()              {
              if ((!((((G107835 instanceof Array))&&(((G107835.length)>0))))))                {
                return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
                } else                 {
                return (function (arguments, hd)                  {
                  return (function (arguments, tl)                    {
                    var result = hd;
                    for (i in (tl))                      {
                      result = (result*(tl[i]));
                      };
                    return (result);
                    }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G107835.slice(1)));
                  }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G107835[0]));
                };
              })());
            }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G107834);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G107833))))            {
            return (G107833);
            };
          G107833 = function (arguments, G107832)            {
            throw ((("No match error in lambda ")+("(lambda (hd (tail tl)) (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result)")));
            }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G107834);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G107833))))            {
            return (G107833);
            };
          throw ((("match-fail at ((match (_\. Array prototype slice (call arguments 0)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result) (G107832 (_throw (_+ \"No match error in lambda \" \"(lambda (hd (tail tl)) (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result)\"))))) for value ")+G107834));
          }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
        };
      currentModuleminus107711.divide = function ()        {
        return (function (arguments)          {
          var G107858 = undefined;
          var G107859 = Array.prototype.slice.call(arguments, 0);
          G107858 = function (arguments, G107860)            {
            return ((function ()              {
              if ((!((((G107860 instanceof Array))&&(((G107860.length)>0))))))                {
                return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
                } else                 {
                return (function (arguments, hd)                  {
                  return (function (arguments, tl)                    {
                    return ((hd/((moduleminus295baa4e1e.apply)(currentModuleminus107711.times, tl))));
                    }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G107860.slice(1)));
                  }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G107860[0]));
                };
              })());
            }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G107859);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G107858))))            {
            return (G107858);
            };
          G107858 = function (arguments, G107857)            {
            throw ((("No match error in lambda ")+("(lambda (hd (tail tl)) (_/ hd (apply * tl)))")));
            }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G107859);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G107858))))            {
            return (G107858);
            };
          throw ((("match-fail at ((match (_\. Array prototype slice (call arguments 0)) ([: hd (tail tl)] (_/ hd (apply * tl))) (G107857 (_throw (_+ \"No match error in lambda \" \"(lambda (hd (tail tl)) (_/ hd (apply * tl)))\"))))) for value ")+G107859));
          }.call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
        };
      var defineExternalBinop = "macro - no dynamic value.";
      var defineExternalBinops = "macro - no dynamic value.";
      currentModuleminus107711.lessThan = function (G107871, G107872)        {
        return ((G107871<G107872));
        };
      currentModuleminus107711.lessThanequal = function (G107896, G107897)        {
        return ((G107896<=G107897));
        };
      currentModuleminus107711.greaterThan = function (G107921, G107922)        {
        return ((G107921>G107922));
        };
      currentModuleminus107711.greaterThanequal = function (G107946, G107947)        {
        return ((G107946>=G107947));
        };
      currentModuleminus107711.ampersand = function (G107971, G107972)        {
        return ((G107971&G107972));
        };
      currentModuleminus107711.pipe = function (G107996, G107997)        {
        return ((G107996|G107997));
        };
      currentModuleminus107711.equalequal = function (G108021, G108022)        {
        return ((G108021==G108022));
        };
      currentModuleminus107711.equalequalequal = function (G108046, G108047)        {
        return ((G108046===G108047));
        };
      currentModuleminus107711.modsign = function (G108071, G108072)        {
        return ((G108071%G108072));
        };
      currentModuleminus107711.caret = function (G108096, G108097)        {
        return ((G108096^G108097));
        };
      currentModuleminus107711.lessThanlessThan = function (G108121, G108122)        {
        return ((G108121<<G108122));
        };
      currentModuleminus107711.greaterThangreaterThan = function (G108146, G108147)        {
        return ((G108146>>G108147));
        };
      currentModuleminus107711.greaterThangreaterThangreaterThan = function (G108171, G108172)        {
        return ((G108171>>>G108172));
        };
      ;
      var ampersandampersand = "macro - no dynamic value.";
      var pipepipe = "macro - no dynamic value.";
      var incr = "macro - no dynamic value.";
      var decr = "macro - no dynamic value.";
      })());
    })();
  return (currentModuleminus107711);
  })