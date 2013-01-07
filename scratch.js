(function (arguments)  {
  var G335679 = undefined;
  var G335680 = {    
    x:10,
    y:11
  };
  G335679 = (function (arguments)    {
    var matchValminus335681 = G335680;
    var matchObjectTempminus335682 = matchValminus335681.x;
    if ((("undefined")===((typeof matchObjectTempminus335682))))      {
      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
      };
    if ((!((10===matchObjectTempminus335682))))      {
      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
      };
    var matchObjectTempminus335683 = matchValminus335681.y;
    if ((("undefined")===((typeof matchObjectTempminus335683))))      {
      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
      };
    var a = matchObjectTempminus335683;
    return a;
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G335679))))    {
    return G335679;
    };
  throw ((("match-fail at ((match ({} x 10 y 11) (({} x 10 y a) a))) for value ")+G335680));
  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
var product = (function ()  {
  var returnValueminus335685 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigilminus335684",
      args:arguments
    };
    });
  var recurP335688 = (function (valminus335689)    {
    if ((("undefined")===((typeof valminus335689))))      {
      return false;
      };
    return (valminus335689.recurSigil===("recurSigilminus335684"));
    });
  var actualFunminus335687 = (function ()    {
    return (function (arguments)      {
      var G335691 = undefined;
      var G335692 = Array.prototype.slice.apply(arguments);
      G335691 = (function (arguments)        {
        var matchValminus335693 = G335692;
        if ((!((2===matchValminus335693.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchTempminus335694 = matchValminus335693[0];
        var matchTempminus335695 = matchValminus335693[1];
        if ((!((0===matchTempminus335694.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var acc = matchTempminus335695;
        return acc;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G335691))))        {
        return G335691;
        };
      G335691 = (function (arguments)        {
        var matchValminus335696 = G335692;
        if ((!((2===matchValminus335696.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchTempminus335697 = matchValminus335696[0];
        var matchTempminus335698 = matchValminus335696[1];
        if ((!((matchTempminus335697.length>=1))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArraySimplePartminus335699 = Array.prototype.slice.call(matchTempminus335697, 0, 1);
        if ((!((1===matchArraySimplePartminus335699.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var hd = matchArraySimplePartminus335699[0];
        var matchArrayTailPartminus335700 = Array.prototype.slice.call(matchTempminus335697, 1);
        var tl = matchArrayTailPartminus335700;
        var acc = matchTempminus335698;
        return recur(tl, (acc*hd));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G335691))))        {
        return G335691;
        };
      G335691 = (function (arguments)        {
        var matchValminus335701 = G335692;
        if ((!((1===matchValminus335701.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchTempminus335702 = matchValminus335701[0];
        var object = matchTempminus335702;
        return recur(object, 1);
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G335691))))        {
        return G335691;
        };
      G335691 = (function (arguments)        {
        var matchValminus335703 = G335692;
        var anythingElseminus335690 = matchValminus335703;
        throw ((("Match fail in product against: ")+anythingElseminus335690));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G335691))))        {
        return G335691;
        };
      throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array [:] acc) acc) ((array [: hd (tail tl)] acc) (recur tl (_* acc hd))) ((array object) (recur object 1)) (anything-else-335690 (_throw (_+ ''Match fail in product against: '' anything-else-335690))))) for value ")+G335692));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValueminus335685 = actualFunminus335687.apply(this, arguments);
  while (recurP335688(returnValueminus335685))    {
    returnValueminus335685 = actualFunminus335687.apply(this, returnValueminus335685.args);
    };
  return returnValueminus335685;
  });
var productTwo = (function ()  {
  var returnValueminus335705 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigilminus335704",
      args:arguments
    };
    });
  var recurP335708 = (function (valminus335709)    {
    if ((("undefined")===((typeof valminus335709))))      {
      return false;
      };
    return (valminus335709.recurSigil===("recurSigilminus335704"));
    });
  var actualFunminus335707 = (function ()    {
    return (function (arguments)      {
      var G335711 = undefined;
      var G335712 = Array.prototype.slice.apply(arguments);
      G335711 = (function (arguments)        {
        var matchValminus335713 = G335712;
        if ((!((2===matchValminus335713.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchTempminus335714 = matchValminus335713[0];
        var matchTempminus335715 = matchValminus335713[1];
        if ((!((0===matchTempminus335714.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var acc = matchTempminus335715;
        return acc;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G335711))))        {
        return G335711;
        };
      G335711 = (function (arguments)        {
        var matchValminus335716 = G335712;
        if ((!((2===matchValminus335716.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchTempminus335717 = matchValminus335716[0];
        var matchTempminus335718 = matchValminus335716[1];
        if ((!((matchTempminus335717.length>=1))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArraySimplePartminus335719 = Array.prototype.slice.call(matchTempminus335717, 0, 1);
        if ((!((1===matchArraySimplePartminus335719.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var hd = matchArraySimplePartminus335719[0];
        var matchArrayTailPartminus335720 = Array.prototype.slice.call(matchTempminus335717, 1);
        var tl = matchArrayTailPartminus335720;
        var acc = matchTempminus335718;
        return recur(tl, (acc*hd));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G335711))))        {
        return G335711;
        };
      G335711 = (function (arguments)        {
        var matchValminus335721 = G335712;
        if ((!((1===matchValminus335721.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchTempminus335722 = matchValminus335721[0];
        var object = matchTempminus335722;
        return recur(object, 1);
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G335711))))        {
        return G335711;
        };
      G335711 = (function (arguments)        {
        var matchValminus335723 = G335712;
        var anythingElseminus335710 = matchValminus335723;
        throw ((("Match fail in anonymous against: ")+anythingElseminus335710));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G335711))))        {
        return G335711;
        };
      throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array [:] acc) acc) ((array [: hd (tail tl)] acc) (recur tl (_* acc hd))) ((array object) (recur object 1)) (anything-else-335710 (_throw (_+ ''Match fail in anonymous against: '' anything-else-335710))))) for value ")+G335712));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValueminus335705 = actualFunminus335707.apply(this, arguments);
  while (recurP335708(returnValueminus335705))    {
    returnValueminus335705 = actualFunminus335707.apply(this, returnValueminus335705.args);
    };
  return returnValueminus335705;
  });
var simple = (function (x)  {
  return (("what!? ")+x);
  });
var TestObject = (function ()  {
  var returnValueminus335753 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigilminus335752",
      args:arguments
    };
    });
  var recurP335756 = (function (valminus335757)    {
    if ((("undefined")===((typeof valminus335757))))      {
      return false;
      };
    return (valminus335757.recurSigil===("recurSigilminus335752"));
    });
  var actualFunminus335755 = (function ()    {
    return (function (arguments)      {
      var G335759 = undefined;
      var G335760 = Array.prototype.slice.apply(arguments);
      G335759 = (function (arguments)        {
        var matchValminus335761 = G335760;
        if ((!((1===matchValminus335761.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchTempminus335762 = matchValminus335761[0];
        var name = matchTempminus335762;
        this.name = name;
        this.introduceSelf = (function ()          {
          var returnValueminus335764 = undefined;
          var recur = (function ()            {
            return {              
              recurSigil:"recurSigilminus335763",
              args:arguments
            };
            });
          var recurP335767 = (function (valminus335768)            {
            if ((("undefined")===((typeof valminus335768))))              {
              return false;
              };
            return (valminus335768.recurSigil===("recurSigilminus335763"));
            });
          var actualFunminus335766 = (function ()            {
            return (function (arguments)              {
              var G335770 = undefined;
              var G335771 = Array.prototype.slice.apply(arguments);
              G335770 = (function (arguments)                {
                var matchValminus335772 = G335771;
                if ((!((1===matchValminus335772.length))))                  {
                  return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                  };
                var matchTempminus335773 = matchValminus335772[0];
                if ((!(("politely"===matchTempminus335773))))                  {
                  return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                  };
                return (("Hello sir or madame, I'm ")+this.name);
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G335770))))                {
                return G335770;
                };
              G335770 = (function (arguments)                {
                var matchValminus335774 = G335771;
                if ((!((1===matchValminus335774.length))))                  {
                  return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                  };
                var matchTempminus335775 = matchValminus335774[0];
                if ((!(("informally"===matchTempminus335775))))                  {
                  return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                  };
                return (("Sup bro, I am ")+this.name);
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G335770))))                {
                return G335770;
                };
              G335770 = (function (arguments)                {
                var matchValminus335776 = G335771;
                var anythingElseminus335769 = matchValminus335776;
                throw ((("Match fail in anonymous against: ")+anythingElseminus335769));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G335770))))                {
                return G335770;
                };
              throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array :politely) (_+ ''Hello sir or madame, I'm '' this\.name)) ((array :informally) (_+ ''Sup bro, I am '' this\.name)) (anything-else-335769 (_throw (_+ ''Match fail in anonymous against: '' anything-else-335769))))) for value ")+G335771));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            });
          returnValueminus335764 = actualFunminus335766.apply(this, arguments);
          while (recurP335767(returnValueminus335764))            {
            returnValueminus335764 = actualFunminus335766.apply(this, returnValueminus335764.args);
            };
          return returnValueminus335764;
          });
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G335759))))        {
        return G335759;
        };
      G335759 = (function (arguments)        {
        var matchValminus335777 = G335760;
        var anythingElseminus335758 = matchValminus335777;
        throw ((("Match fail in Test-Object against: ")+anythingElseminus335758));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G335759))))        {
        return G335759;
        };
      throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array name) (set! this\.name name) (set! this\.introduce-self (lambda [((:politely) (_+ ''Hello sir or madame, I'm '' this\.name)) ((:informally) (_+ ''Sup bro, I am '' this\.name))]))) (anything-else-335758 (_throw (_+ ''Match fail in Test-Object against: '' anything-else-335758))))) for value ")+G335760));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValueminus335753 = actualFunminus335755.apply(this, arguments);
  while (recurP335756(returnValueminus335753))    {
    returnValueminus335753 = actualFunminus335755.apply(this, returnValueminus335753.args);
    };
  return returnValueminus335753;
  });
