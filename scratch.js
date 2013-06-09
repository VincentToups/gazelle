var test = (function ()  {
  var returnValue15864 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigil15863",
      args:arguments
    };
    });
  var recurP15867 = (function (val15868)    {
    if ((("undefined")===((typeof val15868))))      {
      return false;
      };
    return (val15868.recurSigil===("recurSigil15863"));
    });
  var actualFun15866 = (function ()    {
    return (function (arguments)      {
      var G15870 = undefined;
      var G15871 = Array.prototype.slice.apply(arguments);
      G15870 = (function (arguments)        {
        var matchVal15872 = G15871;
        if ((!((("object")===((typeof matchVal15872))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((matchVal15872.length>=2))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArraySimplePart15873 = Array.prototype.slice.call(matchVal15872, 0, 2);
        if ((!((("object")===((typeof matchArraySimplePart15873))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((2===matchArraySimplePart15873.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var a = matchArraySimplePart15873[0];
        var b = matchArraySimplePart15873[1];
        var matchArrayTailPart15874 = Array.prototype.slice.call(matchVal15872, 2);
        var fResult15878 = ((function (arrayExpression15875)          {
          var out15876 = {            
            
          };
          for (var i15877 = 0;(i15877<arrayExpression15875.length);i15877 = (i15877+2))            {
            out15876[arrayExpression15875[i15877]] = arrayExpression15875[(i15877+1)];
            };
          return out15876;
          }))(matchArrayTailPart15874);
        if ((fResult15878===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((("undefined")===((typeof fResult15878))))          {
          fResult15878 = {            
            
          };
          };
        var matchObjectTemp15879 = fResult15878.r;
        var previousMatchSucceeded15881 = true;
        switch (1){
                  case 1:
          if ((("undefined")===((typeof matchObjectTemp15879))))            {
            previousMatchSucceeded15881 = false;
            };
          var r = matchObjectTemp15879;
          if (previousMatchSucceeded15881)            {
            break;
            };
          previousMatchSucceeded15881 = true;
          case 1:
          var fResult15882 = ((function (x)            {
            return 10;
            }))(matchObjectTemp15879);
          if ((fResult15882===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))            {
            previousMatchSucceeded15881 = false;
            };
          var r = fResult15882;
          if (previousMatchSucceeded15881)            {
            break;
            };
          previousMatchSucceeded15881 = true;
          default :
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          
        };
        var matchObjectTemp15880 = fResult15878.s;
        var previousMatchSucceeded15883 = true;
        switch (1){
                  case 1:
          if ((("undefined")===((typeof matchObjectTemp15880))))            {
            previousMatchSucceeded15883 = false;
            };
          var s = matchObjectTemp15880;
          if (previousMatchSucceeded15883)            {
            break;
            };
          previousMatchSucceeded15883 = true;
          case 1:
          var fResult15884 = ((function (x)            {
            return 13;
            }))(matchObjectTemp15880);
          if ((fResult15884===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))            {
            previousMatchSucceeded15883 = false;
            };
          var s = fResult15884;
          if (previousMatchSucceeded15883)            {
            break;
            };
          previousMatchSucceeded15883 = true;
          default :
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          
        };
        return [a, b, r, s];
        ;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G15870))))        {
        return G15870;
        };
      G15870 = (function (arguments)        {
        var matchVal15885 = G15871;
        var anythingElse15869 = matchVal15885;
        throw ((("Match fail in test against: ")+anythingElse15869));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G15870))))        {
        return G15870;
        };
      throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: a b :* (as-options{} (r 10) (s 13))] (_newline-sequence [: a b r s])) (anything-else-15869 (_throw (_+ ''Match fail in test against: '' anything-else-15869))))) for value ")+(JSON.stringify(G15871))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValue15864 = actualFun15866.apply(this, arguments);
  while (recurP15867(returnValue15864))    {
    returnValue15864 = actualFun15866.apply(this, returnValue15864.args);
    };
  return returnValue15864;
  });
console.log(test(1, 2, "r", 100));
