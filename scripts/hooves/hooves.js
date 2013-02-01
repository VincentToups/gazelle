define([], (function ()  {
  var currentModuleminus104161 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus104161 = value;
    });
  (function (arguments)    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    currentModuleminus104161.definedPredicate = (function (x)      {
      return (!((((typeof x))===("undefined"))));
      });
    currentModuleminus104161.undefinedPredicate = (function (x)      {
      return (((typeof x))===("undefined"));
      });
    currentModuleminus104161.numberPredicate = (function (o)      {
      return (((typeof o))===("number"));
      });
    currentModuleminus104161.stringPredicate = (function (o)      {
      return (((typeof o))===("string"));
      });
    currentModuleminus104161.arrayPredicate = (function (o)      {
      return (o instanceof Array);
      });
    currentModuleminus104161.emptyPredicate = (function (o)      {
      return (0===o.length);
      });
    var collectBracesminus = "macro - no dynamic value.";
    var at = "macro - no dynamic value.";
    currentModuleminus104161.TripleEqualminus_ = (function (partial)      {
      return (function (open)        {
        return (open===partial);
        });
      });
    var when = "macro - no dynamic value.";
    var unless = "macro - no dynamic value.";
    currentModuleminus104161.Delay = (function (lambdaExpr)      {
      this.lambdaExpr = lambdaExpr;
      return this;
      });
    currentModuleminus104161.Delay.prototype.value = (function ()      {
      return this.lambdaExpr();
      });
    var delay = "macro - no dynamic value.";
    currentModuleminus104161.undelay = (function (o)      {
      return (function (arguments)        {
        var G104397 = undefined;
        var G104398 = o;
        G104397 = (function (arguments)          {
          var matchValminus104399 = G104398;
          var matchFunExprminus104401 = (function (G104400)            {
            return (G104400 instanceof currentModuleminus104161.Delay);
            });
          if ((!(matchFunExprminus104401(matchValminus104399))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var delayObject = matchValminus104399;
          return delayObject.value();
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G104397))))          {
          return G104397;
          };
        throw ((("match-fail at ((match o ((instance Delay delay-object) (delay-object\.value)))) for value ")+(JSON.stringify(G104398))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var defineTo = "macro - no dynamic value.";
    var fortimes = "macro - no dynamic value.";
    currentModuleminus104161.range = (function ()      {
      var returnValueminus104444 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus104443",
          args:arguments
        };
        });
      var recurP104447 = (function (valminus104448)        {
        if ((("undefined")===((typeof valminus104448))))          {
          return false;
          };
        return (valminus104448.recurSigil===("recurSigilminus104443"));
        });
      var actualFunminus104446 = (function ()        {
        return (function (arguments)          {
          var G104450 = undefined;
          var G104451 = Array.prototype.slice.apply(arguments);
          G104450 = (function (arguments)            {
            var matchValminus104452 = G104451;
            if ((!((("object")===((typeof matchValminus104452))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((4===matchValminus104452.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchValminus104452[0];
            var step = matchValminus104452[1];
            var stop = matchValminus104452[2];
            var transform = matchValminus104452[3];
            var out = [];
            for (var i = start;(i<stop);i = (i+step))              {
              out.push(transform(i));
              };
            return out;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G104450))))            {
            return G104450;
            };
          G104450 = (function (arguments)            {
            var matchValminus104453 = G104451;
            if ((!((("object")===((typeof matchValminus104453))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchValminus104453.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchValminus104453[0];
            var step = matchValminus104453[1];
            var stop = matchValminus104453[2];
            return recur(start, step, stop, (function (v)              {
              return v;
              }));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G104450))))            {
            return G104450;
            };
          G104450 = (function (arguments)            {
            var matchValminus104454 = G104451;
            if ((!((("object")===((typeof matchValminus104454))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchValminus104454.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchValminus104454[0];
            var stop = matchValminus104454[1];
            return recur(start, 1, stop, (function (v)              {
              return v;
              }));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G104450))))            {
            return G104450;
            };
          G104450 = (function (arguments)            {
            var matchValminus104455 = G104451;
            if ((!((("object")===((typeof matchValminus104455))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchValminus104455.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var stop = matchValminus104455[0];
            return recur(0, 1, stop, (function (v)              {
              return v;
              }));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G104450))))            {
            return G104450;
            };
          G104450 = (function (arguments)            {
            var matchValminus104456 = G104451;
            var anythingElseminus104449 = matchValminus104456;
            throw ((("Match fail in hooves/hooves-range against: ")+anythingElseminus104449));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G104450))))            {
            return G104450;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: start step stop transform] (var out [:]) (for ((var i start) (_< i stop) (set! i (_+ i step))) (out\.push (transform i))) out) ([: start step stop] (recur start step stop (lambda (v) v))) ([: start stop] (recur start 1 stop (lambda (v) v))) ([: stop] (recur 0 1 stop (lambda (v) v))) (anything-else-104449 (_throw (_+ ''Match fail in hooves/hooves-range against: '' anything-else-104449))))) for value ")+(JSON.stringify(G104451))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus104444 = actualFunminus104446.apply(this, arguments);
      while (recurP104447(returnValueminus104444))        {
        returnValueminus104444 = actualFunminus104446.apply(this, returnValueminus104444.args);
        };
      return returnValueminus104444;
      });
    var withSlots = "macro - no dynamic value.";
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus104161;
  }))