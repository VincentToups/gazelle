var range = (function ()  {
  var returnValueminus86706 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigilminus86705",
      args:arguments
    };
    });
  var recurP86709 = (function (valminus86710)    {
    if ((("undefined")===((typeof valminus86710))))      {
      return false;
      };
    return (valminus86710.recurSigil===("recurSigilminus86705"));
    });
  var actualFunminus86708 = (function ()    {
    return (function (arguments)      {
      var G86712 = undefined;
      var G86713 = Array.prototype.slice.apply(arguments);
      G86712 = (function (arguments)        {
        var matchValminus86714 = G86713;
        if ((!((("object")===((typeof matchValminus86714))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((4===matchValminus86714.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var start = matchValminus86714[0];
        var step = matchValminus86714[1];
        var stop = matchValminus86714[2];
        var transform = matchValminus86714[3];
        var out = [];
        for (var i = start;(i<stop);i = (i+step))          {
          out.push(transform(i));
          };
        return out;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G86712))))        {
        return G86712;
        };
      G86712 = (function (arguments)        {
        var matchValminus86715 = G86713;
        if ((!((("object")===((typeof matchValminus86715))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((3===matchValminus86715.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var start = matchValminus86715[0];
        var step = matchValminus86715[1];
        var stop = matchValminus86715[2];
        return recur(start, step, stop, (function (v)          {
          return v;
          }));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G86712))))        {
        return G86712;
        };
      G86712 = (function (arguments)        {
        var matchValminus86716 = G86713;
        if ((!((("object")===((typeof matchValminus86716))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((2===matchValminus86716.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var start = matchValminus86716[0];
        var stop = matchValminus86716[1];
        return recur(start, 1, stop, (function (v)          {
          return v;
          }));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G86712))))        {
        return G86712;
        };
      G86712 = (function (arguments)        {
        var matchValminus86717 = G86713;
        if ((!((("object")===((typeof matchValminus86717))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((1===matchValminus86717.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var stop = matchValminus86717[0];
        return recur(0, 1, stop, (function (v)          {
          return v;
          }));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G86712))))        {
        return G86712;
        };
      G86712 = (function (arguments)        {
        var matchValminus86718 = G86713;
        var anythingElseminus86711 = matchValminus86718;
        throw ((("Match fail in range against: ")+anythingElseminus86711));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G86712))))        {
        return G86712;
        };
      throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: start step stop transform] (var out [:]) (for ((var i start) (_< i stop) (set! i (_+ i step))) (out\.push (transform i))) out) ([: start step stop] (recur start step stop (lambda (v) v))) ([: start stop] (recur start 1 stop (lambda (v) v))) ([: stop] (recur 0 1 stop (lambda (v) v))) (anything-else-86711 (_throw (_+ ''Match fail in range against: '' anything-else-86711))))) for value ")+(JSON.stringify(G86713))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValueminus86706 = actualFunminus86708.apply(this, arguments);
  while (recurP86709(returnValueminus86706))    {
    returnValueminus86706 = actualFunminus86708.apply(this, returnValueminus86706.args);
    };
  return returnValueminus86706;
  });
(function ()  {
  a;
  b;
  return c;
  ;
  });
