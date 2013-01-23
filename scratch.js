var o = {  
  x:10,
  y:[1, 2]
};
var matchTest = (function ()  {
  return (function (arguments)    {
    var G81316 = undefined;
    var G81317 = o.z;
    G81316 = (function (arguments)      {
      var matchValminus81318 = G81317;
      if ((!((("undefined")===((typeof matchValminus81318))))))        {
        return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
        };
      return "matched";
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G81316))))      {
      return G81316;
      };
    G81316 = (function (arguments)      {
      var matchValminus81319 = G81317;
      var otherwise = matchValminus81319;
      return "didntMatch";
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G81316))))      {
      return G81316;
      };
    throw ((("match-fail at ((match o\.z (undefined :matched) (otherwise :didnt-match))) for value ")+(JSON.stringify(G81317))));
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  });

