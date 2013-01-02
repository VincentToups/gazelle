(function ()  {
  var returnValueminus135229 = undefined;
  var recur = (function ()    {
    return ({      
      recurSigil:"recurSigilminus135228",
      args:arguments
    });
    });
  var recurP135232 = (function (valminus135233)    {
    return (((valminus135233.recurSigil)===("recurSigilminus135228")));
    });
  var actualFunminus135231 = (function ()    {
    return ((function (arguments)      {
      var G135235 = undefined;
      var G135236 = Array.prototype.slice.apply(arguments);
      G135235 = (function (arguments)        {
        var G135237 = G135236;
        return (((function ()          {
          if ((!((((G135237 instanceof Array))&&(((G135237.length)>0))))))            {
            return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
            } else             {
            return ((function (arguments)              {
              var aMatchArray135239 = G135237[0];
              if ((((!(((aMatchArray135239.length)===0))))||((!((aMatchArray135239 instanceof Array))))))                {
                return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
                };
              return ((function (arguments)                {
                var aMatchArray135240 = Array.prototype.slice.call(G135237, 1);
                if ((((!(((aMatchArray135240.length)===1))))||((!((aMatchArray135240 instanceof Array))))))                  {
                  return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
                  };
                var acc = aMatchArray135240[0];
                return (acc);
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
            };
          }))());
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G135235))))        {
        return (G135235);
        };
      G135235 = (function (arguments)        {
        var G135241 = G135236;
        return (((function ()          {
          if ((!((((G135241 instanceof Array))&&(((G135241.length)>0))))))            {
            return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
            } else             {
            return ((function (arguments)              {
              var aMatchArray135243 = G135241[0];
              if ((((!(((aMatchArray135243.length)>=1))))||((!((aMatchArray135243 instanceof Array))))))                {
                return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
                };
              var hd = aMatchArray135243[0];
              var tl = Array.prototype.slice.call(aMatchArray135243, 1);
              return ((function (arguments)                {
                var aMatchArray135244 = Array.prototype.slice.call(G135241, 1);
                if ((((!(((aMatchArray135244.length)===1))))||((!((aMatchArray135244 instanceof Array))))))                  {
                  return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
                  };
                var acc = aMatchArray135244[0];
                return (recur(tl, times(acc, hd)));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
            };
          }))());
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G135235))))        {
        return (G135235);
        };
      G135235 = (function (arguments)        {
        var aMatchArray135245 = G135236;
        if ((((!(((aMatchArray135245.length)===1))))||((!((aMatchArray135245 instanceof Array))))))          {
          return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
          };
        var object = aMatchArray135245[0];
        return (recur(object, 1));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G135235))))        {
        return (G135235);
        };
      G135235 = (function (arguments, anythingElseminus135234)        {
        throw ((("Match fail in product against: ")+anythingElseminus135234));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G135236);
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G135235))))        {
        return (G135235);
        };
      throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array [:] acc) acc) ((array [: hd (tail tl)] acc) (recur tl (* acc hd))) ((array object) (recur object 1)) (anything-else-135234 (_throw (_+ \"Match fail in product against: \" anything-else-135234))))) for value ")+G135236));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
    });
  returnValueminus135229 = actualFunminus135231.apply(this, arguments);
  while (recurP135232(returnValueminus135229))    {
    returnValueminus135229 = actualFunminus135231.apply(this, returnValueminus135229.args);
    };
  return (returnValueminus135229);
  });
var product = (function ()  {
  var returnValueminus135247 = undefined;
  var recur = (function ()    {
    return ({      
      recurSigil:"recurSigilminus135246",
      args:arguments
    });
    });
  var recurP135250 = (function (valminus135251)    {
    return (((valminus135251.recurSigil)===("recurSigilminus135246")));
    });
  var actualFunminus135249 = (function ()    {
    return ((function (arguments)      {
      var G135253 = undefined;
      var G135254 = Array.prototype.slice.apply(arguments);
      G135253 = (function (arguments)        {
        var G135255 = G135254;
        return (((function ()          {
          if ((!((((G135255 instanceof Array))&&(((G135255.length)>0))))))            {
            return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
            } else             {
            return ((function (arguments)              {
              var aMatchArray135257 = G135255[0];
              if ((((!(((aMatchArray135257.length)===0))))||((!((aMatchArray135257 instanceof Array))))))                {
                return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
                };
              return ((function (arguments)                {
                var aMatchArray135258 = Array.prototype.slice.call(G135255, 1);
                if ((((!(((aMatchArray135258.length)===1))))||((!((aMatchArray135258 instanceof Array))))))                  {
                  return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
                  };
                var acc = aMatchArray135258[0];
                return (acc);
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
            };
          }))());
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G135253))))        {
        return (G135253);
        };
      G135253 = (function (arguments)        {
        var G135259 = G135254;
        return (((function ()          {
          if ((!((((G135259 instanceof Array))&&(((G135259.length)>0))))))            {
            return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
            } else             {
            return ((function (arguments)              {
              var aMatchArray135261 = G135259[0];
              if ((((!(((aMatchArray135261.length)>=1))))||((!((aMatchArray135261 instanceof Array))))))                {
                return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
                };
              var hd = aMatchArray135261[0];
              var tl = Array.prototype.slice.call(aMatchArray135261, 1);
              return ((function (arguments)                {
                var aMatchArray135262 = Array.prototype.slice.call(G135259, 1);
                if ((((!(((aMatchArray135262.length)===1))))||((!((aMatchArray135262 instanceof Array))))))                  {
                  return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
                  };
                var acc = aMatchArray135262[0];
                return (recur(tl, times(acc, hd)));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
            };
          }))());
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G135253))))        {
        return (G135253);
        };
      G135253 = (function (arguments)        {
        var aMatchArray135263 = G135254;
        if ((((!(((aMatchArray135263.length)===1))))||((!((aMatchArray135263 instanceof Array))))))          {
          return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
          };
        var object = aMatchArray135263[0];
        return (recur(object, 1));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G135253))))        {
        return (G135253);
        };
      G135253 = (function (arguments, anythingElseminus135252)        {
        throw ((("Match fail in product against: ")+anythingElseminus135252));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G135254);
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G135253))))        {
        return (G135253);
        };
      throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array [:] acc) acc) ((array [: hd (tail tl)] acc) (recur tl (* acc hd))) ((array object) (recur object 1)) (anything-else-135252 (_throw (_+ \"Match fail in product against: \" anything-else-135252))))) for value ")+G135254));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
    });
  returnValueminus135247 = actualFunminus135249.apply(this, arguments);
  while (recurP135250(returnValueminus135247))    {
    returnValueminus135247 = actualFunminus135249.apply(this, returnValueminus135247.args);
    };
  return (returnValueminus135247);
  });
