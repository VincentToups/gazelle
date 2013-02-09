define([], (function ()  {
  var currentModuleminus75425 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus75425 = value;
    });
  (function (arguments)    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    currentModuleminus75425.definedPredicate = (function (x)      {
      return (!((((typeof x))===("undefined"))));
      });
    currentModuleminus75425.undefinedPredicate = (function (x)      {
      return (((typeof x))===("undefined"));
      });
    currentModuleminus75425.numberPredicate = (function (o)      {
      return (((typeof o))===("number"));
      });
    currentModuleminus75425.stringPredicate = (function (o)      {
      return (((typeof o))===("string"));
      });
    currentModuleminus75425.arrayPredicate = (function (o)      {
      return (o instanceof Array);
      });
    currentModuleminus75425.emptyPredicate = (function (o)      {
      return (0===o.length);
      });
    var collectBracesminus = "macro - no dynamic value.";
    var at = "macro - no dynamic value.";
    currentModuleminus75425.TripleEqualminus_ = (function (partial)      {
      return (function (open)        {
        return (open===partial);
        });
      });
    var when = "macro - no dynamic value.";
    var unless = "macro - no dynamic value.";
    currentModuleminus75425.Delay = (function (lambdaExpr)      {
      this.lambdaExpr = lambdaExpr;
      return this;
      });
    currentModuleminus75425.Delay.prototype.value = (function ()      {
      return this.lambdaExpr();
      });
    var delay = "macro - no dynamic value.";
    currentModuleminus75425.undelay = (function (o)      {
      return (function (arguments)        {
        var G75661 = undefined;
        var G75662 = o;
        G75661 = (function (arguments)          {
          var matchValminus75663 = G75662;
          var matchFunExprminus75665 = (function (G75664)            {
            return (G75664 instanceof currentModuleminus75425.Delay);
            });
          if ((!(matchFunExprminus75665(matchValminus75663))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var delayObject = matchValminus75663;
          return delayObject.value();
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G75661))))          {
          return G75661;
          };
        throw ((("match-fail at ((match o ((instance Delay delay-object) (delay-object\.value)))) for value ")+(JSON.stringify(G75662))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var defineTo = "macro - no dynamic value.";
    var fortimes = "macro - no dynamic value.";
    currentModuleminus75425.range = (function ()      {
      var returnValueminus75708 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus75707",
          args:arguments
        };
        });
      var recurP75711 = (function (valminus75712)        {
        if ((("undefined")===((typeof valminus75712))))          {
          return false;
          };
        return (valminus75712.recurSigil===("recurSigilminus75707"));
        });
      var actualFunminus75710 = (function ()        {
        return (function (arguments)          {
          var G75714 = undefined;
          var G75715 = Array.prototype.slice.apply(arguments);
          G75714 = (function (arguments)            {
            var matchValminus75716 = G75715;
            if ((!((("object")===((typeof matchValminus75716))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((4===matchValminus75716.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchValminus75716[0];
            var step = matchValminus75716[1];
            var stop = matchValminus75716[2];
            var transform = matchValminus75716[3];
            var out = [];
            for (var i = start;(i<stop);i = (i+step))              {
              out.push(transform(i));
              };
            return out;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G75714))))            {
            return G75714;
            };
          G75714 = (function (arguments)            {
            var matchValminus75717 = G75715;
            if ((!((("object")===((typeof matchValminus75717))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchValminus75717.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchValminus75717[0];
            var step = matchValminus75717[1];
            var stop = matchValminus75717[2];
            return recur(start, step, stop, (function (v)              {
              return v;
              }));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G75714))))            {
            return G75714;
            };
          G75714 = (function (arguments)            {
            var matchValminus75718 = G75715;
            if ((!((("object")===((typeof matchValminus75718))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchValminus75718.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchValminus75718[0];
            var stop = matchValminus75718[1];
            return recur(start, 1, stop, (function (v)              {
              return v;
              }));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G75714))))            {
            return G75714;
            };
          G75714 = (function (arguments)            {
            var matchValminus75719 = G75715;
            if ((!((("object")===((typeof matchValminus75719))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchValminus75719.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var stop = matchValminus75719[0];
            return recur(0, 1, stop, (function (v)              {
              return v;
              }));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G75714))))            {
            return G75714;
            };
          G75714 = (function (arguments)            {
            var matchValminus75720 = G75715;
            var anythingElseminus75713 = matchValminus75720;
            throw ((("Match fail in hooves/hooves-range against: ")+anythingElseminus75713));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G75714))))            {
            return G75714;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: start step stop transform] (var out [:]) (for ((var i start) (_< i stop) (set! i (_+ i step))) (out\.push (transform i))) out) ([: start step stop] (recur start step stop (lambda (v) v))) ([: start stop] (recur start 1 stop (lambda (v) v))) ([: stop] (recur 0 1 stop (lambda (v) v))) (anything-else-75713 (_throw (_+ ''Match fail in hooves/hooves-range against: '' anything-else-75713))))) for value ")+(JSON.stringify(G75715))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus75708 = actualFunminus75710.apply(this, arguments);
      while (recurP75711(returnValueminus75708))        {
        returnValueminus75708 = actualFunminus75710.apply(this, returnValueminus75708.args);
        };
      return returnValueminus75708;
      });
    var withSlots = "macro - no dynamic value.";
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus75425;
  }))