var product = (function ()  {
  var returnValueminus39143 = undefined;
  var recur = (function ()    {
    return ({      
      recurSigil:"recurSigilminus39142",
      args:arguments
    });
    });
  var recurP39146 = (function (valminus39147)    {
    return (((valminus39147.recurSigil)===("recurSigilminus39142")));
    });
  var actualFunminus39145 = (function ()    {
    return ((function (arguments)      {
      var G39149 = undefined;
      var G39150 = Array.prototype.slice.apply(arguments);
      G39149 = (function (arguments)        {
        var G39151 = G39150;
        return (((function ()          {
          if ((!((((G39151 instanceof Array))&&(((G39151.length)>0))))))            {
            return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
            } else             {
            return ((function (arguments)              {
              var aMatchArray39153 = G39151[0];
              if ((((!(((aMatchArray39153.length)===0))))||((!((aMatchArray39153 instanceof Array))))))                {
                return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
                };
              return ((function (arguments)                {
                var aMatchArray39154 = Array.prototype.slice.call(G39151, 1);
                if ((((!(((aMatchArray39154.length)===1))))||((!((aMatchArray39154 instanceof Array))))))                  {
                  return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
                  };
                var acc = aMatchArray39154[0];
                return (acc);
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
            };
          }))());
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G39149))))        {
        return (G39149);
        };
      G39149 = (function (arguments)        {
        var G39155 = G39150;
        return (((function ()          {
          if ((!((((G39155 instanceof Array))&&(((G39155.length)>0))))))            {
            return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
            } else             {
            return ((function (arguments)              {
              var aMatchArray39157 = G39155[0];
              if ((((!(((aMatchArray39157.length)>=1))))||((!((aMatchArray39157 instanceof Array))))))                {
                return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
                };
              var hd = aMatchArray39157[0];
              var tl = Array.prototype.slice.call(aMatchArray39157, 1);
              return ((function (arguments)                {
                var aMatchArray39158 = Array.prototype.slice.call(G39155, 1);
                if ((((!(((aMatchArray39158.length)===1))))||((!((aMatchArray39158 instanceof Array))))))                  {
                  return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
                  };
                var acc = aMatchArray39158[0];
                return (recur(tl, (acc*hd)));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
            };
          }))());
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G39149))))        {
        return (G39149);
        };
      G39149 = (function (arguments)        {
        var aMatchArray39159 = G39150;
        if ((((!(((aMatchArray39159.length)===1))))||((!((aMatchArray39159 instanceof Array))))))          {
          return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
          };
        var object = aMatchArray39159[0];
        return (recur(object, 1));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G39149))))        {
        return (G39149);
        };
      G39149 = (function (arguments, anythingElseminus39148)        {
        throw ((("Match fail in product against: ")+anythingElseminus39148));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G39150);
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G39149))))        {
        return (G39149);
        };
      throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array [:] acc) acc) ((array [: hd (tail tl)] acc) (recur tl (_* acc hd))) ((array object) (recur object 1)) (anything-else-39148 (_throw (_+ \"Match fail in product against: \" anything-else-39148))))) for value ")+G39150));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
    });
  returnValueminus39143 = actualFunminus39145.apply(this, arguments);
  while (recurP39146(returnValueminus39143))    {
    returnValueminus39143 = actualFunminus39145.apply(this, returnValueminus39143.args);
    };
  return (returnValueminus39143);
  });
var productTwo = (function ()  {
  var returnValueminus39161 = undefined;
  var recur = (function ()    {
    return ({      
      recurSigil:"recurSigilminus39160",
      args:arguments
    });
    });
  var recurP39164 = (function (valminus39165)    {
    return (((valminus39165.recurSigil)===("recurSigilminus39160")));
    });
  var actualFunminus39163 = (function ()    {
    return ((function (arguments)      {
      var G39167 = undefined;
      var G39168 = Array.prototype.slice.apply(arguments);
      G39167 = (function (arguments)        {
        var G39169 = G39168;
        return (((function ()          {
          if ((!((((G39169 instanceof Array))&&(((G39169.length)>0))))))            {
            return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
            } else             {
            return ((function (arguments)              {
              var aMatchArray39171 = G39169[0];
              if ((((!(((aMatchArray39171.length)===0))))||((!((aMatchArray39171 instanceof Array))))))                {
                return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
                };
              return ((function (arguments)                {
                var aMatchArray39172 = Array.prototype.slice.call(G39169, 1);
                if ((((!(((aMatchArray39172.length)===1))))||((!((aMatchArray39172 instanceof Array))))))                  {
                  return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
                  };
                var acc = aMatchArray39172[0];
                return (acc);
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
            };
          }))());
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G39167))))        {
        return (G39167);
        };
      G39167 = (function (arguments)        {
        var G39173 = G39168;
        return (((function ()          {
          if ((!((((G39173 instanceof Array))&&(((G39173.length)>0))))))            {
            return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
            } else             {
            return ((function (arguments)              {
              var aMatchArray39175 = G39173[0];
              if ((((!(((aMatchArray39175.length)>=1))))||((!((aMatchArray39175 instanceof Array))))))                {
                return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
                };
              var hd = aMatchArray39175[0];
              var tl = Array.prototype.slice.call(aMatchArray39175, 1);
              return ((function (arguments)                {
                var aMatchArray39176 = Array.prototype.slice.call(G39173, 1);
                if ((((!(((aMatchArray39176.length)===1))))||((!((aMatchArray39176 instanceof Array))))))                  {
                  return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
                  };
                var acc = aMatchArray39176[0];
                return (recur(tl, (acc*hd)));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
            };
          }))());
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G39167))))        {
        return (G39167);
        };
      G39167 = (function (arguments)        {
        var aMatchArray39177 = G39168;
        if ((((!(((aMatchArray39177.length)===1))))||((!((aMatchArray39177 instanceof Array))))))          {
          return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
          };
        var object = aMatchArray39177[0];
        return (recur(object, 1));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G39167))))        {
        return (G39167);
        };
      G39167 = (function (arguments, anythingElseminus39166)        {
        throw ((("Match fail in anonymous against: ")+anythingElseminus39166));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G39168);
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G39167))))        {
        return (G39167);
        };
      throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array [:] acc) acc) ((array [: hd (tail tl)] acc) (recur tl (_* acc hd))) ((array object) (recur object 1)) (anything-else-39166 (_throw (_+ \"Match fail in anonymous against: \" anything-else-39166))))) for value ")+G39168));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
    });
  returnValueminus39161 = actualFunminus39163.apply(this, arguments);
  while (recurP39164(returnValueminus39161))    {
    returnValueminus39161 = actualFunminus39163.apply(this, returnValueminus39161.args);
    };
  return (returnValueminus39161);
  });
var simple = (function (x)  {
  return ((("what!? ")+x));
  });
