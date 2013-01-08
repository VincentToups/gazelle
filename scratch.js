(function (arguments)  {
  var G109763 = undefined;
  var G109764 = {    
    x:10,
    y:11
  };
  G109763 = (function (arguments)    {
    var matchValminus109765 = G109764;
    var matchObjectTempminus109766 = matchValminus109765.z;
    var previousMatchSucceededminus109767 = true;
    switch (1){
          case 1:
      if ((("undefined")===((typeof matchObjectTempminus109766))))        {
        previousMatchSucceededminus109767 = false;
        };
      var a = matchObjectTempminus109766;
      if (previousMatchSucceededminus109767)        {
        break;
        };
      previousMatchSucceededminus109767 = true;
      case 1:
      var a = 10;
      if (previousMatchSucceededminus109767)        {
        break;
        };
      previousMatchSucceededminus109767 = true;
      default :
      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
      
    };
    return a;
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G109763))))    {
    return G109763;
    };
  throw ((("match-fail at ((match ({} x 10 y 11) (({}- z (or (defined a) (let (a 10)))) a))) for value ")+G109764));
  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
(function (arguments)  {
  var G109768 = undefined;
  var G109769 = {    
    x:10,
    y:11
  };
  G109768 = (function (arguments)    {
    var matchValminus109770 = G109769;
    var matchObjectTempminus109771 = matchValminus109770.x;
    if ((("undefined")===((typeof matchObjectTempminus109771))))      {
      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
      };
    if ((!((10===matchObjectTempminus109771))))      {
      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
      };
    var matchObjectTempminus109772 = matchValminus109770.y;
    if ((("undefined")===((typeof matchObjectTempminus109772))))      {
      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
      };
    var a = matchObjectTempminus109772;
    return a;
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G109768))))    {
    return G109768;
    };
  throw ((("match-fail at ((match ({} x 10 y 11) (({} x 10 y a) a))) for value ")+G109769));
  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
var product = (function ()  {
  var returnValueminus109774 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigilminus109773",
      args:arguments
    };
    });
  var recurP109777 = (function (valminus109778)    {
    if ((("undefined")===((typeof valminus109778))))      {
      return false;
      };
    return (valminus109778.recurSigil===("recurSigilminus109773"));
    });
  var actualFunminus109776 = (function ()    {
    return (function (arguments)      {
      var G109780 = undefined;
      var G109781 = Array.prototype.slice.apply(arguments);
      G109780 = (function (arguments)        {
        var matchValminus109782 = G109781;
        if ((!((2===matchValminus109782.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchTempminus109783 = matchValminus109782[0];
        var matchTempminus109784 = matchValminus109782[1];
        if ((!((0===matchTempminus109783.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var acc = matchTempminus109784;
        return acc;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G109780))))        {
        return G109780;
        };
      G109780 = (function (arguments)        {
        var matchValminus109785 = G109781;
        if ((!((2===matchValminus109785.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchTempminus109786 = matchValminus109785[0];
        var matchTempminus109787 = matchValminus109785[1];
        if ((!((matchTempminus109786.length>=1))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArraySimplePartminus109788 = Array.prototype.slice.call(matchTempminus109786, 0, 1);
        if ((!((1===matchArraySimplePartminus109788.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var hd = matchArraySimplePartminus109788[0];
        var matchArrayTailPartminus109789 = Array.prototype.slice.call(matchTempminus109786, 1);
        var tl = matchArrayTailPartminus109789;
        var acc = matchTempminus109787;
        return recur(tl, (acc*hd));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G109780))))        {
        return G109780;
        };
      G109780 = (function (arguments)        {
        var matchValminus109790 = G109781;
        if ((!((1===matchValminus109790.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchTempminus109791 = matchValminus109790[0];
        var object = matchTempminus109791;
        return recur(object, 1);
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G109780))))        {
        return G109780;
        };
      G109780 = (function (arguments)        {
        var matchValminus109792 = G109781;
        var anythingElseminus109779 = matchValminus109792;
        throw ((("Match fail in product against: ")+anythingElseminus109779));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G109780))))        {
        return G109780;
        };
      throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array [:] acc) acc) ((array [: hd (tail tl)] acc) (recur tl (_* acc hd))) ((array object) (recur object 1)) (anything-else-109779 (_throw (_+ ''Match fail in product against: '' anything-else-109779))))) for value ")+G109781));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValueminus109774 = actualFunminus109776.apply(this, arguments);
  while (recurP109777(returnValueminus109774))    {
    returnValueminus109774 = actualFunminus109776.apply(this, returnValueminus109774.args);
    };
  return returnValueminus109774;
  });
var productTwo = (function ()  {
  var returnValueminus109794 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigilminus109793",
      args:arguments
    };
    });
  var recurP109797 = (function (valminus109798)    {
    if ((("undefined")===((typeof valminus109798))))      {
      return false;
      };
    return (valminus109798.recurSigil===("recurSigilminus109793"));
    });
  var actualFunminus109796 = (function ()    {
    return (function (arguments)      {
      var G109800 = undefined;
      var G109801 = Array.prototype.slice.apply(arguments);
      G109800 = (function (arguments)        {
        var matchValminus109802 = G109801;
        if ((!((2===matchValminus109802.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchTempminus109803 = matchValminus109802[0];
        var matchTempminus109804 = matchValminus109802[1];
        if ((!((0===matchTempminus109803.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var acc = matchTempminus109804;
        return acc;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G109800))))        {
        return G109800;
        };
      G109800 = (function (arguments)        {
        var matchValminus109805 = G109801;
        if ((!((2===matchValminus109805.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchTempminus109806 = matchValminus109805[0];
        var matchTempminus109807 = matchValminus109805[1];
        if ((!((matchTempminus109806.length>=1))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArraySimplePartminus109808 = Array.prototype.slice.call(matchTempminus109806, 0, 1);
        if ((!((1===matchArraySimplePartminus109808.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var hd = matchArraySimplePartminus109808[0];
        var matchArrayTailPartminus109809 = Array.prototype.slice.call(matchTempminus109806, 1);
        var tl = matchArrayTailPartminus109809;
        var acc = matchTempminus109807;
        return recur(tl, (acc*hd));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G109800))))        {
        return G109800;
        };
      G109800 = (function (arguments)        {
        var matchValminus109810 = G109801;
        if ((!((1===matchValminus109810.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchTempminus109811 = matchValminus109810[0];
        var object = matchTempminus109811;
        return recur(object, 1);
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G109800))))        {
        return G109800;
        };
      G109800 = (function (arguments)        {
        var matchValminus109812 = G109801;
        var anythingElseminus109799 = matchValminus109812;
        throw ((("Match fail in anonymous against: ")+anythingElseminus109799));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G109800))))        {
        return G109800;
        };
      throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array [:] acc) acc) ((array [: hd (tail tl)] acc) (recur tl (_* acc hd))) ((array object) (recur object 1)) (anything-else-109799 (_throw (_+ ''Match fail in anonymous against: '' anything-else-109799))))) for value ")+G109801));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValueminus109794 = actualFunminus109796.apply(this, arguments);
  while (recurP109797(returnValueminus109794))    {
    returnValueminus109794 = actualFunminus109796.apply(this, returnValueminus109794.args);
    };
  return returnValueminus109794;
  });
var simple = (function (x)  {
  return (("what!? ")+x);
  });
var TestObject = (function ()  {
  var returnValueminus109842 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigilminus109841",
      args:arguments
    };
    });
  var recurP109845 = (function (valminus109846)    {
    if ((("undefined")===((typeof valminus109846))))      {
      return false;
      };
    return (valminus109846.recurSigil===("recurSigilminus109841"));
    });
  var actualFunminus109844 = (function ()    {
    return (function (arguments)      {
      var G109848 = undefined;
      var G109849 = Array.prototype.slice.apply(arguments);
      G109848 = (function (arguments)        {
        var matchValminus109850 = G109849;
        if ((!((1===matchValminus109850.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchTempminus109851 = matchValminus109850[0];
        var name = matchTempminus109851;
        this.name = name;
        this.introduceSelf = (function ()          {
          var returnValueminus109853 = undefined;
          var recur = (function ()            {
            return {              
              recurSigil:"recurSigilminus109852",
              args:arguments
            };
            });
          var recurP109856 = (function (valminus109857)            {
            if ((("undefined")===((typeof valminus109857))))              {
              return false;
              };
            return (valminus109857.recurSigil===("recurSigilminus109852"));
            });
          var actualFunminus109855 = (function ()            {
            return (function (arguments)              {
              var G109859 = undefined;
              var G109860 = Array.prototype.slice.apply(arguments);
              G109859 = (function (arguments)                {
                var matchValminus109861 = G109860;
                if ((!((1===matchValminus109861.length))))                  {
                  return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                  };
                var matchTempminus109862 = matchValminus109861[0];
                if ((!(("politely"===matchTempminus109862))))                  {
                  return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                  };
                return (("Hello sir or madame, I'm ")+this.name);
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G109859))))                {
                return G109859;
                };
              G109859 = (function (arguments)                {
                var matchValminus109863 = G109860;
                if ((!((1===matchValminus109863.length))))                  {
                  return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                  };
                var matchTempminus109864 = matchValminus109863[0];
                if ((!(("informally"===matchTempminus109864))))                  {
                  return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                  };
                return (("Sup bro, I am ")+this.name);
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G109859))))                {
                return G109859;
                };
              G109859 = (function (arguments)                {
                var matchValminus109865 = G109860;
                var anythingElseminus109858 = matchValminus109865;
                throw ((("Match fail in anonymous against: ")+anythingElseminus109858));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G109859))))                {
                return G109859;
                };
              throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array :politely) (_+ ''Hello sir or madame, I'm '' this\.name)) ((array :informally) (_+ ''Sup bro, I am '' this\.name)) (anything-else-109858 (_throw (_+ ''Match fail in anonymous against: '' anything-else-109858))))) for value ")+G109860));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            });
          returnValueminus109853 = actualFunminus109855.apply(this, arguments);
          while (recurP109856(returnValueminus109853))            {
            returnValueminus109853 = actualFunminus109855.apply(this, returnValueminus109853.args);
            };
          return returnValueminus109853;
          });
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G109848))))        {
        return G109848;
        };
      G109848 = (function (arguments)        {
        var matchValminus109866 = G109849;
        var anythingElseminus109847 = matchValminus109866;
        throw ((("Match fail in Test-Object against: ")+anythingElseminus109847));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G109848))))        {
        return G109848;
        };
      throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array name) (set! this\.name name) (set! this\.introduce-self (lambda [((:politely) (_+ ''Hello sir or madame, I'm '' this\.name)) ((:informally) (_+ ''Sup bro, I am '' this\.name))]))) (anything-else-109847 (_throw (_+ ''Match fail in Test-Object against: '' anything-else-109847))))) for value ")+G109849));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValueminus109842 = actualFunminus109844.apply(this, arguments);
  while (recurP109845(returnValueminus109842))    {
    returnValueminus109842 = actualFunminus109844.apply(this, returnValueminus109842.args);
    };
  return returnValueminus109842;
  });
var testOptionals = (function ()  {
  var returnValueminus109868 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigilminus109867",
      args:arguments
    };
    });
  var recurP109871 = (function (valminus109872)    {
    if ((("undefined")===((typeof valminus109872))))      {
      return false;
      };
    return (valminus109872.recurSigil===("recurSigilminus109867"));
    });
  var actualFunminus109870 = (function ()    {
    return (function (arguments)      {
      var G109874 = undefined;
      var G109875 = Array.prototype.slice.apply(arguments);
      G109874 = (function (arguments)        {
        var matchValminus109876 = G109875;
        if ((!((1===matchValminus109876.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchTempminus109877 = matchValminus109876[0];
        var matchObjectTempminus109878 = matchTempminus109877.optional1;
        var previousMatchSucceededminus109880 = true;
        switch (1){
                  case 1:
          if ((("undefined")===((typeof matchObjectTempminus109878))))            {
            previousMatchSucceededminus109880 = false;
            };
          var optional1 = matchObjectTempminus109878;
          if (previousMatchSucceededminus109880)            {
            break;
            };
          previousMatchSucceededminus109880 = true;
          case 1:
          var optional1 = "Dogman";
          if (previousMatchSucceededminus109880)            {
            break;
            };
          previousMatchSucceededminus109880 = true;
          default :
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          
        };
        var matchObjectTempminus109879 = matchTempminus109877.optional2;
        var previousMatchSucceededminus109881 = true;
        switch (1){
                  case 1:
          if ((("undefined")===((typeof matchObjectTempminus109879))))            {
            previousMatchSucceededminus109881 = false;
            };
          var optional2 = matchObjectTempminus109879;
          if (previousMatchSucceededminus109881)            {
            break;
            };
          previousMatchSucceededminus109881 = true;
          case 1:
          var optional2 = "Ok";
          if (previousMatchSucceededminus109881)            {
            break;
            };
          previousMatchSucceededminus109881 = true;
          default :
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          
        };
        return [optional1, optional2];
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G109874))))        {
        return G109874;
        };
      G109874 = (function (arguments)        {
        var matchValminus109882 = G109875;
        var anythingElseminus109873 = matchValminus109882;
        throw ((("Match fail in test-optionals against: ")+anythingElseminus109873));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G109874))))        {
        return G109874;
        };
      throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array ({}- optional1 (or (defined optional1) (let (optional1 ''Dogman''))) optional2 (or (defined optional2) (let (optional2 ''Ok''))))) [: optional1 optional2]) (anything-else-109873 (_throw (_+ ''Match fail in test-optionals against: '' anything-else-109873))))) for value ")+G109875));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValueminus109868 = actualFunminus109870.apply(this, arguments);
  while (recurP109871(returnValueminus109868))    {
    returnValueminus109868 = actualFunminus109870.apply(this, returnValueminus109868.args);
    };
  return returnValueminus109868;
  });
var testArrayOptionals = (function ()  {
  var returnValueminus109884 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigilminus109883",
      args:arguments
    };
    });
  var recurP109887 = (function (valminus109888)    {
    if ((("undefined")===((typeof valminus109888))))      {
      return false;
      };
    return (valminus109888.recurSigil===("recurSigilminus109883"));
    });
  var actualFunminus109886 = (function ()    {
    return (function (arguments)      {
      var G109890 = undefined;
      var G109891 = Array.prototype.slice.apply(arguments);
      G109890 = (function (arguments)        {
        var matchValminus109892 = G109891;
        if ((!((matchValminus109892.length>=2))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArraySimplePartminus109893 = Array.prototype.slice.call(matchValminus109892, 0, 2);
        if ((!((2===matchArraySimplePartminus109893.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var a = matchArraySimplePartminus109893[0];
        var b = matchArraySimplePartminus109893[1];
        var matchArrayTailPartminus109894 = Array.prototype.slice.call(matchValminus109892, 2);
        var matchTempminus109895 = matchArrayTailPartminus109894[0];
        var previousMatchSucceededminus109896 = true;
        switch (1){
                  case 1:
          if ((("undefined")===((typeof matchTempminus109895))))            {
            previousMatchSucceededminus109896 = false;
            };
          var x = matchTempminus109895;
          if (previousMatchSucceededminus109896)            {
            break;
            };
          previousMatchSucceededminus109896 = true;
          case 1:
          var x = 1000;
          if (previousMatchSucceededminus109896)            {
            break;
            };
          previousMatchSucceededminus109896 = true;
          default :
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          
        };
        return x;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G109890))))        {
        return G109890;
        };
      G109890 = (function (arguments)        {
        var matchValminus109897 = G109891;
        var anythingElseminus109889 = matchValminus109897;
        throw ((("Match fail in test-array-optionals against: ")+anythingElseminus109889));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G109890))))        {
        return G109890;
        };
      throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array a b (tail [:- (or (defined x) (let (x 1000)))])) x) (anything-else-109889 (_throw (_+ ''Match fail in test-array-optionals against: '' anything-else-109889))))) for value ")+G109891));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValueminus109884 = actualFunminus109886.apply(this, arguments);
  while (recurP109887(returnValueminus109884))    {
    returnValueminus109884 = actualFunminus109886.apply(this, returnValueminus109884.args);
    };
  return returnValueminus109884;
  });
