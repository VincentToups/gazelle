((define))(["hooves/lisp-idioms"], function (moduleminus295baa4e1e)  {
  var currentModuleminus201518 = {    
    
  };
  (function ()    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    "(\"hooves/lisp-idioms\" (:as apply funcall))";
    currentModuleminus201518.plus = function ()      {
      return ((function (arguments)        {
        var G201590 = undefined;
        var G201591 = Array.prototype.slice.call(arguments, 0);
        G201590 = (function (arguments, G201592)          {
          return ((function ()            {
            if ((!((((G201592 instanceof Array))&&(((G201592.length)>0))))))              {
              return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
              } else               {
              return ((function (arguments, hd)                {
                return ((function (arguments, tl)                  {
                  var result = hd;
                  for (i in (tl))                    {
                    result = (result+(tl[i]));
                    };
                  return (result);
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G201592.slice(1)));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G201592[0]));
              };
            })());
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G201591);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G201590))))          {
          return (G201590);
          };
        G201590 = (function (arguments, G201589)          {
          throw ((("No match error in lambda ")+("(lambda (hd (tail tl)) (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result)")));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G201591);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G201590))))          {
          return (G201590);
          };
        throw ((("match-fail at ((match (_\. Array prototype slice (call arguments 0)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result) (G201589 (_throw (_+ \"No match error in lambda \" \"(lambda (hd (tail tl)) (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result)\"))))) for value ")+G201591));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
      };
    currentModuleminus201518.minus = function ()      {
      return ((function (arguments)        {
        var G201615 = undefined;
        var G201616 = Array.prototype.slice.call(arguments, 0);
        G201615 = (function (arguments, G201617)          {
          return ((function ()            {
            if ((!((((G201617 instanceof Array))&&(((G201617.length)>0))))))              {
              return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
              } else               {
              return ((function (arguments, hd)                {
                return ((function (arguments, tl)                  {
                  return ((hd-((moduleminus295baa4e1e.apply)(currentModuleminus201518.plus, tl))));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G201617.slice(1)));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G201617[0]));
              };
            })());
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G201616);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G201615))))          {
          return (G201615);
          };
        G201615 = (function (arguments, G201614)          {
          throw ((("No match error in lambda ")+("(lambda (hd (tail tl)) (_- hd (apply + tl)))")));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G201616);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G201615))))          {
          return (G201615);
          };
        throw ((("match-fail at ((match (_\. Array prototype slice (call arguments 0)) ([: hd (tail tl)] (_- hd (apply + tl))) (G201614 (_throw (_+ \"No match error in lambda \" \"(lambda (hd (tail tl)) (_- hd (apply + tl)))\"))))) for value ")+G201616));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
      };
    currentModuleminus201518.times = function ()      {
      return ((function (arguments)        {
        var G201640 = undefined;
        var G201641 = Array.prototype.slice.call(arguments, 0);
        G201640 = (function (arguments, G201642)          {
          return ((function ()            {
            if ((!((((G201642 instanceof Array))&&(((G201642.length)>0))))))              {
              return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
              } else               {
              return ((function (arguments, hd)                {
                return ((function (arguments, tl)                  {
                  var result = hd;
                  for (i in (tl))                    {
                    result = (result*(tl[i]));
                    };
                  return (result);
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G201642.slice(1)));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G201642[0]));
              };
            })());
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G201641);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G201640))))          {
          return (G201640);
          };
        G201640 = (function (arguments, G201639)          {
          throw ((("No match error in lambda ")+("(lambda (hd (tail tl)) (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result)")));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G201641);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G201640))))          {
          return (G201640);
          };
        throw ((("match-fail at ((match (_\. Array prototype slice (call arguments 0)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result) (G201639 (_throw (_+ \"No match error in lambda \" \"(lambda (hd (tail tl)) (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result)\"))))) for value ")+G201641));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
      };
    currentModuleminus201518.divide = function ()      {
      return ((function (arguments)        {
        var G201665 = undefined;
        var G201666 = Array.prototype.slice.call(arguments, 0);
        G201665 = (function (arguments, G201667)          {
          return ((function ()            {
            if ((!((((G201667 instanceof Array))&&(((G201667.length)>0))))))              {
              return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
              } else               {
              return ((function (arguments, hd)                {
                return ((function (arguments, tl)                  {
                  return ((hd/((moduleminus295baa4e1e.apply)(currentModuleminus201518.times, tl))));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G201667.slice(1)));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G201667[0]));
              };
            })());
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G201666);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G201665))))          {
          return (G201665);
          };
        G201665 = (function (arguments, G201664)          {
          throw ((("No match error in lambda ")+("(lambda (hd (tail tl)) (_/ hd (apply * tl)))")));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G201666);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G201665))))          {
          return (G201665);
          };
        throw ((("match-fail at ((match (_\. Array prototype slice (call arguments 0)) ([: hd (tail tl)] (_/ hd (apply * tl))) (G201664 (_throw (_+ \"No match error in lambda \" \"(lambda (hd (tail tl)) (_/ hd (apply * tl)))\"))))) for value ")+G201666));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
      };
    var defineExternalBinop = "macro - no dynamic value.";
    var defineExternalBinops = "macro - no dynamic value.";
    currentModuleminus201518.lessThan = function (G201678, G201679)      {
      return ((G201678<G201679));
      };
    currentModuleminus201518.lessThanequal = function (G201703, G201704)      {
      return ((G201703<=G201704));
      };
    currentModuleminus201518.greaterThan = function (G201728, G201729)      {
      return ((G201728>G201729));
      };
    currentModuleminus201518.greaterThanequal = function (G201753, G201754)      {
      return ((G201753>=G201754));
      };
    currentModuleminus201518.ampersand = function (G201778, G201779)      {
      return ((G201778&G201779));
      };
    currentModuleminus201518.pipepipe = function (G201803, G201804)      {
      return ((G201803||G201804));
      };
    currentModuleminus201518.ampersandampersand = function (G201828, G201829)      {
      return ((G201828&&G201829));
      };
    currentModuleminus201518.pipe = function (G201853, G201854)      {
      return ((G201853|G201854));
      };
    currentModuleminus201518.equalequal = function (G201878, G201879)      {
      return ((G201878==G201879));
      };
    currentModuleminus201518.equalequalequal = function (G201903, G201904)      {
      return ((G201903===G201904));
      };
    currentModuleminus201518.modsign = function (G201928, G201929)      {
      return ((G201928%G201929));
      };
    currentModuleminus201518.caret = function (G201953, G201954)      {
      return ((G201953^G201954));
      };
    currentModuleminus201518.lessThanlessThan = function (G201978, G201979)      {
      return ((G201978<<G201979));
      };
    currentModuleminus201518.greaterThangreaterThan = function (G202003, G202004)      {
      return ((G202003>>G202004));
      };
    currentModuleminus201518.greaterThangreaterThangreaterThan = function (G202028, G202029)      {
      return ((G202028>>>G202029));
      };
    ;
    var incr = "macro - no dynamic value.";
    })();
  return (currentModuleminus201518);
  })