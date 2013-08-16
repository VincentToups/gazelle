var window = {  
  
};
(((function ()  {
  var rjs = require("requirejs");
  // (console\.log (_+ "using requirejs in nodejs, rjs is " rjs))
  ;
  rjs.config({    
    nodeRequire:require
  });
  return rjs;
  }))())(["hooves/hooves"], (function ()  {
  var returnValue32637 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigil32636",
      args:arguments
    };
    });
  var recurP32640 = (function (val32641)    {
    if ((("undefined")===((typeof val32641))))      {
      return false;
      };
    return (val32641.recurSigil===("recurSigil32636"));
    });
  var actualFun32639 = (function ()    {
    return (function (arguments)      {
      var G32643 = undefined;
      var G32644 = Array.prototype.slice.apply(arguments);
      G32643 = (function (arguments)        {
        var matchVal32645 = G32644;
        if ((!((("object")===((typeof matchVal32645))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((1===matchVal32645.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var module47c9484436 = matchVal32645[0];
        return (function (arguments)          {
          // ("hooves/hooves" :all)
          ;
          var array = (function ()            {
            var returnValue32647 = undefined;
            var recur = (function ()              {
              return {                
                recurSigil:"recurSigil32646",
                args:arguments
              };
              });
            var recurP32650 = (function (val32651)              {
              if ((("undefined")===((typeof val32651))))                {
                return false;
                };
              return (val32651.recurSigil===("recurSigil32646"));
              });
            var actualFun32649 = (function ()              {
              return (function (arguments)                {
                var G32653 = undefined;
                var G32654 = Array.prototype.slice.apply(arguments);
                G32653 = (function (arguments)                  {
                  var matchVal32655 = G32654;
                  if ((!((("object")===((typeof matchVal32655))))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  if ((!((matchVal32655.length>=0))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var matchArraySimplePart32656 = Array.prototype.slice.call(matchVal32655, 0, 0);
                  if ((!((("object")===((typeof matchArraySimplePart32656))))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  if ((!((0===matchArraySimplePart32656.length))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var matchArrayTailPart32657 = Array.prototype.slice.call(matchVal32655, 0);
                  var parts = matchArrayTailPart32657;
                  return parts;
                  ;
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G32653))))                  {
                  return G32653;
                  };
                G32653 = (function (arguments)                  {
                  var matchVal32658 = G32654;
                  var anythingElse32652 = matchVal32658;
                  throw ((("Match fail in array against: ")+(anythingElse32652)));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G32653))))                  {
                  return G32653;
                  };
                throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail parts)] (_newline-sequence parts)) (anything-else-32652 (_throw (_+ ''Match fail in array against: '' anything-else-32652))))) for value ")+(JSON.stringify(G32654))));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              });
            returnValue32647 = actualFun32649.apply(this, arguments);
            while (recurP32650(returnValue32647))              {
              returnValue32647 = actualFun32649.apply(this, returnValue32647.args);
              };
            return returnValue32647;
            });
          var results = array(module47c9484436.TripleEqualminus(((1)+(2)+(3)+(4)+(5)+(6)+(7)+(8)+(9)+(10)), module47c9484436.plus(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)), module47c9484436.TripleEqualminus(((1)*(2)*(3)*(4)*(5)*(6)*(7)*(8)*(9)*(10)), module47c9484436.times(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)), module47c9484436.TripleEqualminus(((1)/((2)*(3)*(4)*(5)*(6)*(7)*(8)*(9)*(10))), module47c9484436.divide(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)), module47c9484436.TripleEqualminus(((1)-(2)-(3)-(4)-(5)-(6)-(7)-(8)-(9)-(10)), module47c9484436.minus(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)));
          return console.log(results);
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        ;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G32643))))        {
        return G32643;
        };
      G32643 = (function (arguments)        {
        var matchVal32659 = G32644;
        var anythingElse32642 = matchVal32659;
        throw ((("Match fail in require-form against: ")+(anythingElse32642)));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G32643))))        {
        return G32643;
        };
      throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: module-47c9484436] (_newline-sequence (_proper:macro-context (_proper:require-spec ''hooves/hooves'' :all) (define (array (tail parts)) parts) (var results (array (=== (_+ 1 2 3 4 5 6 7 8 9 10) (+ 1 2 3 4 5 6 7 8 9 10)) (=== (_* 1 2 3 4 5 6 7 8 9 10) (* 1 2 3 4 5 6 7 8 9 10)) (=== (_/ 1 2 3 4 5 6 7 8 9 10) (/ 1 2 3 4 5 6 7 8 9 10)) (=== (_- 1 2 3 4 5 6 7 8 9 10) (- 1 2 3 4 5 6 7 8 9 10)))) (console\\.log results)))) (anything-else-32642 (_throw (_+ ''Match fail in require-form against: '' anything-else-32642))))) for value ")+(JSON.stringify(G32644))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValue32637 = actualFun32639.apply(this, arguments);
  while (recurP32640(returnValue32637))    {
    returnValue32637 = actualFun32639.apply(this, returnValue32637.args);
    };
  return returnValue32637;
  }));
