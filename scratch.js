var test = (function ()  {
  var returnValue23938 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigil23937",
      args:arguments
    };
    });
  var recurP23941 = (function (val23942)    {
    if ((("undefined")===((typeof val23942))))      {
      return false;
      };
    return (val23942.recurSigil===("recurSigil23937"));
    });
  var actualFun23940 = (function ()    {
    return (function (arguments)      {
      var G23944 = undefined;
      var G23945 = Array.prototype.slice.apply(arguments);
      G23944 = (function (arguments)        {
        var matchVal23946 = G23945;
        if ((!((("object")===((typeof matchVal23946))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((matchVal23946.length>=0))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArraySimplePart23947 = Array.prototype.slice.call(matchVal23946, 0, 0);
        if ((!((("object")===((typeof matchArraySimplePart23947))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((0===matchArraySimplePart23947.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArrayTailPart23948 = Array.prototype.slice.call(matchVal23946, 0);
        var fResult23952 = ((function (arrayExpression23949)          {
          var out23950 = {            
            
          };
          for (var i23951 = 0;(i23951<arrayExpression23949.length);i23951 = (i23951+2))            {
            out23950[arrayExpression23949[i23951]] = arrayExpression23949[(i23951+1)];
            };
          return out23950;
          }))(matchArrayTailPart23948);
        if ((fResult23952===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((("undefined")===((typeof fResult23952))))          {
          fResult23952 = {            
            
          };
          };
        var matchObjectTemp23953 = fResult23952.x;
        var previousMatchSucceeded23956 = true;
        switch (1){
                  case 1:
          if ((("undefined")===((typeof matchObjectTemp23953))))            {
            previousMatchSucceeded23956 = false;
            };
          if ((("undefined")===((typeof matchObjectTemp23953))))            {
            previousMatchSucceeded23956 = false;
            };
          var x = matchObjectTemp23953;
          if (previousMatchSucceeded23956)            {
            break;
            };
          previousMatchSucceeded23956 = true;
          case 1:
          var fResult23957 = ((function (x)            {
            return undefined;
            }))(matchObjectTemp23953);
          if ((fResult23957===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))            {
            previousMatchSucceeded23956 = false;
            };
          if ((("undefined")===((typeof fResult23957))))            {
            previousMatchSucceeded23956 = false;
            };
          var x = fResult23957;
          if (previousMatchSucceeded23956)            {
            break;
            };
          previousMatchSucceeded23956 = true;
          default :
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          
        };
        var matchObjectTemp23954 = fResult23952.y;
        var previousMatchSucceeded23958 = true;
        switch (1){
                  case 1:
          if ((("undefined")===((typeof matchObjectTemp23954))))            {
            previousMatchSucceeded23958 = false;
            };
          var y = matchObjectTemp23954;
          if (previousMatchSucceeded23958)            {
            break;
            };
          previousMatchSucceeded23958 = true;
          case 1:
          var fResult23959 = ((function (x)            {
            return 11;
            }))(matchObjectTemp23954);
          if ((fResult23959===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))            {
            previousMatchSucceeded23958 = false;
            };
          var y = fResult23959;
          if (previousMatchSucceeded23958)            {
            break;
            };
          previousMatchSucceeded23958 = true;
          default :
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          
        };
        var matchObjectTemp23955 = fResult23952.z;
        var previousMatchSucceeded23960 = true;
        switch (1){
                  case 1:
          if ((("undefined")===((typeof matchObjectTemp23955))))            {
            previousMatchSucceeded23960 = false;
            };
          var z = matchObjectTemp23955;
          if (previousMatchSucceeded23960)            {
            break;
            };
          previousMatchSucceeded23960 = true;
          case 1:
          var fResult23961 = ((function (x)            {
            return 13;
            }))(matchObjectTemp23955);
          if ((fResult23961===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))            {
            previousMatchSucceeded23960 = false;
            };
          var z = fResult23961;
          if (previousMatchSucceeded23960)            {
            break;
            };
          previousMatchSucceeded23960 = true;
          default :
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          
        };
        return [x, y, z];
        ;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G23944))))        {
        return G23944;
        };
      G23944 = (function (arguments)        {
        var matchVal23962 = G23945;
        var anythingElse23943 = matchVal23962;
        throw ((("Match fail in test against: ")+anythingElse23943));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G23944))))        {
        return G23944;
        };
      throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: :* (as-options{} (x (defined x) undefined) (y 11) (z 13))] (_newline-sequence [: x y z])) (anything-else-23943 (_throw (_+ ''Match fail in test against: '' anything-else-23943))))) for value ")+(JSON.stringify(G23945))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValue23938 = actualFun23940.apply(this, arguments);
  while (recurP23941(returnValue23938))    {
    returnValue23938 = actualFun23940.apply(this, returnValue23938.args);
    };
  return returnValue23938;
  });
console.log(test("y", 200, "z", "Hello"));
