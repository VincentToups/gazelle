define(["hooves/lisp-idioms"], (function (moduleminus295baa4e1e)  {
  var currentModuleminus55406 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus55406 = value;
    });
  ((function ()    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    // ("hooves/lisp-idioms" (:as apply funcall))
    ;
    currentModuleminus55406.plus = (function ()      {
      var returnValueminus55591 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus55590",
          args:arguments
        };
        });
      var recurP55594 = (function (valminus55595)        {
        if ((("undefined")===((typeof valminus55595))))          {
          return false;
          };
        return (valminus55595.recurSigil===("recurSigilminus55590"));
        });
      var actualFunminus55593 = (function ()        {
        return (function (arguments)          {
          var G55597 = undefined;
          var G55598 = Array.prototype.slice.apply(arguments);
          G55597 = (function (arguments)            {
            var matchValminus55599 = G55598;
            if ((!((matchValminus55599.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus55600 = Array.prototype.slice.call(matchValminus55599, 0, 1);
            if ((!((1===matchArraySimplePartminus55600.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus55600[0];
            var matchArrayTailPartminus55601 = Array.prototype.slice.call(matchValminus55599, 1);
            var tl = matchArrayTailPartminus55601;
            var result = hd;
            for (i in (tl))              {
              result = (result+(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G55597))))            {
            return G55597;
            };
          G55597 = (function (arguments)            {
            var matchValminus55602 = G55598;
            var anythingElseminus55596 = matchValminus55602;
            throw ((("Match fail in hooves/operator-functions-+ against: ")+anythingElseminus55596));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G55597))))            {
            return G55597;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result) (anything-else-55596 (_throw (_+ ''Match fail in hooves/operator-functions-+ against: '' anything-else-55596))))) for value ")+(JSON.stringify(G55598))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus55591 = actualFunminus55593.apply(this, arguments);
      while (recurP55594(returnValueminus55591))        {
        returnValueminus55591 = actualFunminus55593.apply(this, returnValueminus55591.args);
        };
      return returnValueminus55591;
      });
    currentModuleminus55406.minus = (function ()      {
      var returnValueminus55626 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus55625",
          args:arguments
        };
        });
      var recurP55629 = (function (valminus55630)        {
        if ((("undefined")===((typeof valminus55630))))          {
          return false;
          };
        return (valminus55630.recurSigil===("recurSigilminus55625"));
        });
      var actualFunminus55628 = (function ()        {
        return (function (arguments)          {
          var G55632 = undefined;
          var G55633 = Array.prototype.slice.apply(arguments);
          G55632 = (function (arguments)            {
            var matchValminus55634 = G55633;
            if ((!((matchValminus55634.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus55635 = Array.prototype.slice.call(matchValminus55634, 0, 1);
            if ((!((1===matchArraySimplePartminus55635.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus55635[0];
            var matchArrayTailPartminus55636 = Array.prototype.slice.call(matchValminus55634, 1);
            var tl = matchArrayTailPartminus55636;
            return (((tl.length>0))?((hd-(moduleminus295baa4e1e.apply(currentModuleminus55406.plus, tl)))) : ((-(hd))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G55632))))            {
            return G55632;
            };
          G55632 = (function (arguments)            {
            var matchValminus55637 = G55633;
            var anythingElseminus55631 = matchValminus55637;
            throw ((("Match fail in hooves/operator-functions-- against: ")+anythingElseminus55631));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G55632))))            {
            return G55632;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (if (_> tl\.length 0) (_- hd (apply + tl)) (_- hd))) (anything-else-55631 (_throw (_+ ''Match fail in hooves/operator-functions-- against: '' anything-else-55631))))) for value ")+(JSON.stringify(G55633))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus55626 = actualFunminus55628.apply(this, arguments);
      while (recurP55629(returnValueminus55626))        {
        returnValueminus55626 = actualFunminus55628.apply(this, returnValueminus55626.args);
        };
      return returnValueminus55626;
      });
    currentModuleminus55406.times = (function ()      {
      var returnValueminus55661 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus55660",
          args:arguments
        };
        });
      var recurP55664 = (function (valminus55665)        {
        if ((("undefined")===((typeof valminus55665))))          {
          return false;
          };
        return (valminus55665.recurSigil===("recurSigilminus55660"));
        });
      var actualFunminus55663 = (function ()        {
        return (function (arguments)          {
          var G55667 = undefined;
          var G55668 = Array.prototype.slice.apply(arguments);
          G55667 = (function (arguments)            {
            var matchValminus55669 = G55668;
            if ((!((matchValminus55669.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus55670 = Array.prototype.slice.call(matchValminus55669, 0, 1);
            if ((!((1===matchArraySimplePartminus55670.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus55670[0];
            var matchArrayTailPartminus55671 = Array.prototype.slice.call(matchValminus55669, 1);
            var tl = matchArrayTailPartminus55671;
            var result = hd;
            for (i in (tl))              {
              result = (result*(tl[i]));
              };
            return result;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G55667))))            {
            return G55667;
            };
          G55667 = (function (arguments)            {
            var matchValminus55672 = G55668;
            var anythingElseminus55666 = matchValminus55672;
            throw ((("Match fail in hooves/operator-functions-* against: ")+anythingElseminus55666));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G55667))))            {
            return G55667;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result) (anything-else-55666 (_throw (_+ ''Match fail in hooves/operator-functions-* against: '' anything-else-55666))))) for value ")+(JSON.stringify(G55668))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus55661 = actualFunminus55663.apply(this, arguments);
      while (recurP55664(returnValueminus55661))        {
        returnValueminus55661 = actualFunminus55663.apply(this, returnValueminus55661.args);
        };
      return returnValueminus55661;
      });
    currentModuleminus55406.divide = (function ()      {
      var returnValueminus55696 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus55695",
          args:arguments
        };
        });
      var recurP55699 = (function (valminus55700)        {
        if ((("undefined")===((typeof valminus55700))))          {
          return false;
          };
        return (valminus55700.recurSigil===("recurSigilminus55695"));
        });
      var actualFunminus55698 = (function ()        {
        return (function (arguments)          {
          var G55702 = undefined;
          var G55703 = Array.prototype.slice.apply(arguments);
          G55702 = (function (arguments)            {
            var matchValminus55704 = G55703;
            if ((!((matchValminus55704.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus55705 = Array.prototype.slice.call(matchValminus55704, 0, 1);
            if ((!((1===matchArraySimplePartminus55705.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePartminus55705[0];
            var matchArrayTailPartminus55706 = Array.prototype.slice.call(matchValminus55704, 1);
            var tl = matchArrayTailPartminus55706;
            return (hd/(moduleminus295baa4e1e.apply(currentModuleminus55406.times, tl)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G55702))))            {
            return G55702;
            };
          G55702 = (function (arguments)            {
            var matchValminus55707 = G55703;
            var anythingElseminus55701 = matchValminus55707;
            throw ((("Match fail in hooves/operator-functions-/ against: ")+anythingElseminus55701));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G55702))))            {
            return G55702;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_/ hd (apply * tl))) (anything-else-55701 (_throw (_+ ''Match fail in hooves/operator-functions-/ against: '' anything-else-55701))))) for value ")+(JSON.stringify(G55703))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus55696 = actualFunminus55698.apply(this, arguments);
      while (recurP55699(returnValueminus55696))        {
        returnValueminus55696 = actualFunminus55698.apply(this, returnValueminus55696.args);
        };
      return returnValueminus55696;
      });
    var defineExternalBinop = "macro - no dynamic value.";
    var defineExternalBinops = "macro - no dynamic value.";
    currentModuleminus55406.lessThan = (function (G55717, G55718)      {
      return (G55717<G55718);
      });
    currentModuleminus55406.lessThanequal = (function (G55744, G55745)      {
      return (G55744<=G55745);
      });
    currentModuleminus55406.greaterThan = (function (G55771, G55772)      {
      return (G55771>G55772);
      });
    currentModuleminus55406.greaterThanequal = (function (G55798, G55799)      {
      return (G55798>=G55799);
      });
    currentModuleminus55406.ampersand = (function (G55825, G55826)      {
      return (G55825&G55826);
      });
    currentModuleminus55406.pipe = (function (G55852, G55853)      {
      return (G55852|G55853);
      });
    currentModuleminus55406.equalequal = (function (G55879, G55880)      {
      return (G55879==G55880);
      });
    currentModuleminus55406.TripleEqualminus = (function (G55906, G55907)      {
      return (G55906===G55907);
      });
    currentModuleminus55406.modsign = (function (G55933, G55934)      {
      return (G55933%G55934);
      });
    currentModuleminus55406.caret = (function (G55960, G55961)      {
      return (G55960^G55961);
      });
    currentModuleminus55406.lessThanlessThan = (function (G55987, G55988)      {
      return (G55987<<G55988);
      });
    currentModuleminus55406.greaterThangreaterThan = (function (G56014, G56015)      {
      return (G56014>>G56015);
      });
    currentModuleminus55406.greaterThangreaterThangreaterThan = (function (G56041, G56042)      {
      return (G56041>>>G56042);
      });
    ;
    var ampersandampersand = "macro - no dynamic value.";
    var pipepipe = "macro - no dynamic value.";
    currentModuleminus55406.bang = (function (o)      {
      return (!(o));
      });
    var incr = "macro - no dynamic value.";
    var decr = "macro - no dynamic value.";
    }))();
  return currentModuleminus55406;
  }))