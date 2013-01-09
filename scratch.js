(function (arguments)  {
  var G43733 = undefined;
  var G43734 = [1, 2];
  G43733 = (function (arguments)    {
    var matchValminus43735 = G43734;
    if ((!((matchValminus43735.length>=2))))      {
      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
      };
    var matchArraySimplePartminus43736 = Array.prototype.slice.call(matchValminus43735, 0, 2);
    if ((!((2===matchArraySimplePartminus43736.length))))      {
      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
      };
    var a = matchArraySimplePartminus43736[0];
    var b = matchArraySimplePartminus43736[1];
    var matchArrayTailPartminus43737 = Array.prototype.slice.call(matchValminus43735, 2);
    var matchTempminus43738 = matchArrayTailPartminus43737[0];
    var matchTempminus43739 = matchArrayTailPartminus43737[1];
    var c = matchTempminus43738;
    var d = matchTempminus43739;
    return c;
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G43733))))    {
    return G43733;
    };
  throw ((("match-fail at ((match [: 1 2] ([: a b :- c d] c))) for value ")+(JSON.stringify(G43734))));
  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
(function (arguments)  {
  var G43740 = undefined;
  var G43741 = {    
    x:10,
    y:11
  };
  G43740 = (function (arguments)    {
    var matchValminus43742 = G43741;
    if ((("undefined")===((typeof matchValminus43742))))      {
      matchValminus43742 = {        
        
      };
      };
    var matchObjectTempminus43743 = matchValminus43742.z;
    var previousMatchSucceededminus43744 = true;
    switch (1){
          case 1:
      if ((("undefined")===((typeof matchObjectTempminus43743))))        {
        previousMatchSucceededminus43744 = false;
        };
      var a = matchObjectTempminus43743;
      if (previousMatchSucceededminus43744)        {
        break;
        };
      previousMatchSucceededminus43744 = true;
      case 1:
      var a = 10;
      if (previousMatchSucceededminus43744)        {
        break;
        };
      previousMatchSucceededminus43744 = true;
      default :
      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
      
    };
    return a;
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G43740))))    {
    return G43740;
    };
  throw ((("match-fail at ((match ({} x 10 y 11) (({}- z (or (defined a) (let (a 10)))) a))) for value ")+(JSON.stringify(G43741))));
  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
(function (arguments)  {
  var G43745 = undefined;
  var G43746 = {    
    x:10,
    y:11
  };
  G43745 = (function (arguments)    {
    var matchValminus43747 = G43746;
    var matchObjectTempminus43748 = matchValminus43747.x;
    if ((("undefined")===((typeof matchObjectTempminus43748))))      {
      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
      };
    if ((!((10===matchObjectTempminus43748))))      {
      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
      };
    var matchObjectTempminus43749 = matchValminus43747.y;
    if ((("undefined")===((typeof matchObjectTempminus43749))))      {
      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
      };
    var a = matchObjectTempminus43749;
    return a;
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G43745))))    {
    return G43745;
    };
  throw ((("match-fail at ((match ({} x 10 y 11) (({} x 10 y a) a))) for value ")+(JSON.stringify(G43746))));
  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
var product = (function ()  {
  var returnValueminus43751 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigilminus43750",
      args:arguments
    };
    });
  var recurP43754 = (function (valminus43755)    {
    if ((("undefined")===((typeof valminus43755))))      {
      return false;
      };
    return (valminus43755.recurSigil===("recurSigilminus43750"));
    });
  var actualFunminus43753 = (function ()    {
    return (function (arguments)      {
      var G43757 = undefined;
      var G43758 = Array.prototype.slice.apply(arguments);
      G43757 = (function (arguments)        {
        var matchValminus43759 = G43758;
        if ((!((2===matchValminus43759.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchTempminus43760 = matchValminus43759[0];
        var matchTempminus43761 = matchValminus43759[1];
        if ((!((0===matchTempminus43760.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((("undefined")===((typeof matchTempminus43761))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var acc = matchTempminus43761;
        return acc;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G43757))))        {
        return G43757;
        };
      G43757 = (function (arguments)        {
        var matchValminus43762 = G43758;
        if ((!((2===matchValminus43762.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchTempminus43763 = matchValminus43762[0];
        var matchTempminus43764 = matchValminus43762[1];
        if ((!((matchTempminus43763.length>=1))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArraySimplePartminus43765 = Array.prototype.slice.call(matchTempminus43763, 0, 1);
        if ((!((1===matchArraySimplePartminus43765.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var hd = matchArraySimplePartminus43765[0];
        var matchArrayTailPartminus43766 = Array.prototype.slice.call(matchTempminus43763, 1);
        var tl = matchArrayTailPartminus43766;
        if ((("undefined")===((typeof matchTempminus43764))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var acc = matchTempminus43764;
        return recur(tl, (acc*hd));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G43757))))        {
        return G43757;
        };
      G43757 = (function (arguments)        {
        var matchValminus43767 = G43758;
        if ((!((1===matchValminus43767.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var object = matchValminus43767[0];
        return recur(object, 1);
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G43757))))        {
        return G43757;
        };
      G43757 = (function (arguments)        {
        var matchValminus43768 = G43758;
        var anythingElseminus43756 = matchValminus43768;
        throw ((("Match fail in product against: ")+anythingElseminus43756));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G43757))))        {
        return G43757;
        };
      throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: [:] (defined acc)] acc) ([: [: hd (tail tl)] (defined acc)] (recur tl (_* acc hd))) ([: object] (recur object 1)) (anything-else-43756 (_throw (_+ ''Match fail in product against: '' anything-else-43756))))) for value ")+(JSON.stringify(G43758))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValueminus43751 = actualFunminus43753.apply(this, arguments);
  while (recurP43754(returnValueminus43751))    {
    returnValueminus43751 = actualFunminus43753.apply(this, returnValueminus43751.args);
    };
  return returnValueminus43751;
  });
var productTwo = (function ()  {
  var returnValueminus43770 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigilminus43769",
      args:arguments
    };
    });
  var recurP43773 = (function (valminus43774)    {
    if ((("undefined")===((typeof valminus43774))))      {
      return false;
      };
    return (valminus43774.recurSigil===("recurSigilminus43769"));
    });
  var actualFunminus43772 = (function ()    {
    return (function (arguments)      {
      var G43776 = undefined;
      var G43777 = Array.prototype.slice.apply(arguments);
      G43776 = (function (arguments)        {
        var matchValminus43778 = G43777;
        if ((!((2===matchValminus43778.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchTempminus43779 = matchValminus43778[0];
        var matchTempminus43780 = matchValminus43778[1];
        if ((!((0===matchTempminus43779.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var acc = matchTempminus43780;
        return acc;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G43776))))        {
        return G43776;
        };
      G43776 = (function (arguments)        {
        var matchValminus43781 = G43777;
        if ((!((2===matchValminus43781.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchTempminus43782 = matchValminus43781[0];
        var matchTempminus43783 = matchValminus43781[1];
        if ((!((matchTempminus43782.length>=1))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArraySimplePartminus43784 = Array.prototype.slice.call(matchTempminus43782, 0, 1);
        if ((!((1===matchArraySimplePartminus43784.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var hd = matchArraySimplePartminus43784[0];
        var matchArrayTailPartminus43785 = Array.prototype.slice.call(matchTempminus43782, 1);
        var tl = matchArrayTailPartminus43785;
        var acc = matchTempminus43783;
        return recur(tl, (acc*hd));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G43776))))        {
        return G43776;
        };
      G43776 = (function (arguments)        {
        var matchValminus43786 = G43777;
        if ((!((1===matchValminus43786.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var object = matchValminus43786[0];
        return recur(object, 1);
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G43776))))        {
        return G43776;
        };
      G43776 = (function (arguments)        {
        var matchValminus43787 = G43777;
        var anythingElseminus43775 = matchValminus43787;
        throw ((("Match fail in anonymous against: ")+anythingElseminus43775));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G43776))))        {
        return G43776;
        };
      throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: [:] acc] acc) ([: [: hd (tail tl)] acc] (recur tl (_* acc hd))) ([: object] (recur object 1)) (anything-else-43775 (_throw (_+ ''Match fail in anonymous against: '' anything-else-43775))))) for value ")+(JSON.stringify(G43777))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValueminus43770 = actualFunminus43772.apply(this, arguments);
  while (recurP43773(returnValueminus43770))    {
    returnValueminus43770 = actualFunminus43772.apply(this, returnValueminus43770.args);
    };
  return returnValueminus43770;
  });
var simple = (function (x)  {
  return (("what!? ")+x);
  });
var TestObject = (function ()  {
  var returnValueminus43817 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigilminus43816",
      args:arguments
    };
    });
  var recurP43820 = (function (valminus43821)    {
    if ((("undefined")===((typeof valminus43821))))      {
      return false;
      };
    return (valminus43821.recurSigil===("recurSigilminus43816"));
    });
  var actualFunminus43819 = (function ()    {
    return (function (arguments)      {
      var G43823 = undefined;
      var G43824 = Array.prototype.slice.apply(arguments);
      G43823 = (function (arguments)        {
        var matchValminus43825 = G43824;
        if ((!((1===matchValminus43825.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var name = matchValminus43825[0];
        this.name = name;
        this.introduceSelf = (function ()          {
          var returnValueminus43827 = undefined;
          var recur = (function ()            {
            return {              
              recurSigil:"recurSigilminus43826",
              args:arguments
            };
            });
          var recurP43830 = (function (valminus43831)            {
            if ((("undefined")===((typeof valminus43831))))              {
              return false;
              };
            return (valminus43831.recurSigil===("recurSigilminus43826"));
            });
          var actualFunminus43829 = (function ()            {
            return (function (arguments)              {
              var G43833 = undefined;
              var G43834 = Array.prototype.slice.apply(arguments);
              G43833 = (function (arguments)                {
                var matchValminus43835 = G43834;
                if ((!((1===matchValminus43835.length))))                  {
                  return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                  };
                var matchTempminus43836 = matchValminus43835[0];
                if ((!(("politely"===matchTempminus43836))))                  {
                  return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                  };
                return (("Hello sir or madame, I'm ")+this.name);
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G43833))))                {
                return G43833;
                };
              G43833 = (function (arguments)                {
                var matchValminus43837 = G43834;
                if ((!((1===matchValminus43837.length))))                  {
                  return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                  };
                var matchTempminus43838 = matchValminus43837[0];
                if ((!(("informally"===matchTempminus43838))))                  {
                  return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                  };
                return (("Sup bro, I am ")+this.name);
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G43833))))                {
                return G43833;
                };
              G43833 = (function (arguments)                {
                var matchValminus43839 = G43834;
                var anythingElseminus43832 = matchValminus43839;
                throw ((("Match fail in anonymous against: ")+anythingElseminus43832));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G43833))))                {
                return G43833;
                };
              throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: :politely] (_+ ''Hello sir or madame, I'm '' this\.name)) ([: :informally] (_+ ''Sup bro, I am '' this\.name)) (anything-else-43832 (_throw (_+ ''Match fail in anonymous against: '' anything-else-43832))))) for value ")+(JSON.stringify(G43834))));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            });
          returnValueminus43827 = actualFunminus43829.apply(this, arguments);
          while (recurP43830(returnValueminus43827))            {
            returnValueminus43827 = actualFunminus43829.apply(this, returnValueminus43827.args);
            };
          return returnValueminus43827;
          });
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G43823))))        {
        return G43823;
        };
      G43823 = (function (arguments)        {
        var matchValminus43840 = G43824;
        var anythingElseminus43822 = matchValminus43840;
        throw ((("Match fail in Test-Object against: ")+anythingElseminus43822));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G43823))))        {
        return G43823;
        };
      throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: name] (set! this\.name name) (set! this\.introduce-self (lambda [((:politely) (_+ ''Hello sir or madame, I'm '' this\.name)) ((:informally) (_+ ''Sup bro, I am '' this\.name))]))) (anything-else-43822 (_throw (_+ ''Match fail in Test-Object against: '' anything-else-43822))))) for value ")+(JSON.stringify(G43824))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValueminus43817 = actualFunminus43819.apply(this, arguments);
  while (recurP43820(returnValueminus43817))    {
    returnValueminus43817 = actualFunminus43819.apply(this, returnValueminus43817.args);
    };
  return returnValueminus43817;
  });
var testOptionals = (function ()  {
  var returnValueminus43842 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigilminus43841",
      args:arguments
    };
    });
  var recurP43845 = (function (valminus43846)    {
    if ((("undefined")===((typeof valminus43846))))      {
      return false;
      };
    return (valminus43846.recurSigil===("recurSigilminus43841"));
    });
  var actualFunminus43844 = (function ()    {
    return (function (arguments)      {
      var G43848 = undefined;
      var G43849 = Array.prototype.slice.apply(arguments);
      G43848 = (function (arguments)        {
        var matchValminus43850 = G43849;
        if ((!((matchValminus43850.length>=0))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArraySimplePartminus43851 = Array.prototype.slice.call(matchValminus43850, 0, 0);
        if ((!((0===matchArraySimplePartminus43851.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArrayTailPartminus43852 = Array.prototype.slice.call(matchValminus43850, 0);
        var matchTempminus43853 = matchArrayTailPartminus43852[0];
        if ((("undefined")===((typeof matchTempminus43853))))          {
          matchTempminus43853 = {            
            
          };
          };
        var matchObjectTempminus43854 = matchTempminus43853.optional1;
        var previousMatchSucceededminus43856 = true;
        switch (1){
                  case 1:
          if ((("undefined")===((typeof matchObjectTempminus43854))))            {
            previousMatchSucceededminus43856 = false;
            };
          var optional1 = matchObjectTempminus43854;
          if (previousMatchSucceededminus43856)            {
            break;
            };
          previousMatchSucceededminus43856 = true;
          case 1:
          var optional1 = "Dogman";
          if (previousMatchSucceededminus43856)            {
            break;
            };
          previousMatchSucceededminus43856 = true;
          default :
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          
        };
        var matchObjectTempminus43855 = matchTempminus43853.optional2;
        var previousMatchSucceededminus43857 = true;
        switch (1){
                  case 1:
          if ((("undefined")===((typeof matchObjectTempminus43855))))            {
            previousMatchSucceededminus43857 = false;
            };
          var optional2 = matchObjectTempminus43855;
          if (previousMatchSucceededminus43857)            {
            break;
            };
          previousMatchSucceededminus43857 = true;
          case 1:
          var optional2 = "Ok";
          if (previousMatchSucceededminus43857)            {
            break;
            };
          previousMatchSucceededminus43857 = true;
          default :
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          
        };
        return [optional1, optional2];
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G43848))))        {
        return G43848;
        };
      G43848 = (function (arguments)        {
        var matchValminus43858 = G43849;
        var anythingElseminus43847 = matchValminus43858;
        throw ((("Match fail in test-optionals against: ")+anythingElseminus43847));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G43848))))        {
        return G43848;
        };
      throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: :- ({}- optional1 (or (defined optional1) (let (optional1 ''Dogman''))) optional2 (or (defined optional2) (let (optional2 ''Ok''))))] [: optional1 optional2]) (anything-else-43847 (_throw (_+ ''Match fail in test-optionals against: '' anything-else-43847))))) for value ")+(JSON.stringify(G43849))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValueminus43842 = actualFunminus43844.apply(this, arguments);
  while (recurP43845(returnValueminus43842))    {
    returnValueminus43842 = actualFunminus43844.apply(this, returnValueminus43842.args);
    };
  return returnValueminus43842;
  });
var testOptionals2 = (function ()  {
  var returnValueminus43860 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigilminus43859",
      args:arguments
    };
    });
  var recurP43863 = (function (valminus43864)    {
    if ((("undefined")===((typeof valminus43864))))      {
      return false;
      };
    return (valminus43864.recurSigil===("recurSigilminus43859"));
    });
  var actualFunminus43862 = (function ()    {
    return (function (arguments)      {
      var G43866 = undefined;
      var G43867 = Array.prototype.slice.apply(arguments);
      G43866 = (function (arguments)        {
        var matchValminus43868 = G43867;
        if ((!((matchValminus43868.length>=0))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArraySimplePartminus43869 = Array.prototype.slice.call(matchValminus43868, 0, 0);
        if ((!((0===matchArraySimplePartminus43869.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArrayTailPartminus43870 = Array.prototype.slice.call(matchValminus43868, 0);
        var matchTempminus43871 = matchArrayTailPartminus43870[0];
        if ((("undefined")===((typeof matchTempminus43871))))          {
          matchTempminus43871 = {            
            
          };
          };
        var matchObjectTempminus43872 = matchTempminus43871.optional1;
        var previousMatchSucceededminus43874 = true;
        switch (1){
                  case 1:
          if ((("undefined")===((typeof matchObjectTempminus43872))))            {
            previousMatchSucceededminus43874 = false;
            };
          var optional1 = matchObjectTempminus43872;
          if (previousMatchSucceededminus43874)            {
            break;
            };
          previousMatchSucceededminus43874 = true;
          case 1:
          var fResult43875 = ((function (x)            {
            return "Dogman";
            }))(matchObjectTempminus43872);
          if ((fResult43875===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))            {
            previousMatchSucceededminus43874 = false;
            };
          var optional1 = fResult43875;
          if (previousMatchSucceededminus43874)            {
            break;
            };
          previousMatchSucceededminus43874 = true;
          default :
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          
        };
        var matchObjectTempminus43873 = matchTempminus43871.optional2;
        var previousMatchSucceededminus43876 = true;
        switch (1){
                  case 1:
          if ((("undefined")===((typeof matchObjectTempminus43873))))            {
            previousMatchSucceededminus43876 = false;
            };
          var optional2 = matchObjectTempminus43873;
          if (previousMatchSucceededminus43876)            {
            break;
            };
          previousMatchSucceededminus43876 = true;
          case 1:
          var fResult43877 = ((function (x)            {
            return "Ok";
            }))(matchObjectTempminus43873);
          if ((fResult43877===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))            {
            previousMatchSucceededminus43876 = false;
            };
          var optional2 = fResult43877;
          if (previousMatchSucceededminus43876)            {
            break;
            };
          previousMatchSucceededminus43876 = true;
          default :
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          
        };
        return [optional1, optional2];
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G43866))))        {
        return G43866;
        };
      G43866 = (function (arguments)        {
        var matchValminus43878 = G43867;
        var anythingElseminus43865 = matchValminus43878;
        throw ((("Match fail in test-optionals2 against: ")+anythingElseminus43865));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G43866))))        {
        return G43866;
        };
      throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: :- (options{} (optional1 ''Dogman'') (optional2 ''Ok''))] [: optional1 optional2]) (anything-else-43865 (_throw (_+ ''Match fail in test-optionals2 against: '' anything-else-43865))))) for value ")+(JSON.stringify(G43867))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValueminus43860 = actualFunminus43862.apply(this, arguments);
  while (recurP43863(returnValueminus43860))    {
    returnValueminus43860 = actualFunminus43862.apply(this, returnValueminus43860.args);
    };
  return returnValueminus43860;
  });
var testArrayOptionals = (function ()  {
  var returnValueminus43880 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigilminus43879",
      args:arguments
    };
    });
  var recurP43883 = (function (valminus43884)    {
    if ((("undefined")===((typeof valminus43884))))      {
      return false;
      };
    return (valminus43884.recurSigil===("recurSigilminus43879"));
    });
  var actualFunminus43882 = (function ()    {
    return (function (arguments)      {
      var G43886 = undefined;
      var G43887 = Array.prototype.slice.apply(arguments);
      G43886 = (function (arguments)        {
        var matchValminus43888 = G43887;
        if ((!((matchValminus43888.length>=2))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArraySimplePartminus43889 = Array.prototype.slice.call(matchValminus43888, 0, 2);
        if ((!((2===matchArraySimplePartminus43889.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var a = matchArraySimplePartminus43889[0];
        var b = matchArraySimplePartminus43889[1];
        var matchArrayTailPartminus43890 = Array.prototype.slice.call(matchValminus43888, 2);
        var matchTempminus43891 = matchArrayTailPartminus43890[0];
        var previousMatchSucceededminus43892 = true;
        switch (1){
                  case 1:
          if ((("undefined")===((typeof matchTempminus43891))))            {
            previousMatchSucceededminus43892 = false;
            };
          var x = matchTempminus43891;
          if (previousMatchSucceededminus43892)            {
            break;
            };
          previousMatchSucceededminus43892 = true;
          case 1:
          var fResult43893 = ((function (x)            {
            return 10;
            }))(matchTempminus43891);
          if ((fResult43893===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))            {
            previousMatchSucceededminus43892 = false;
            };
          var x = fResult43893;
          if (previousMatchSucceededminus43892)            {
            break;
            };
          previousMatchSucceededminus43892 = true;
          default :
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          
        };
        return x;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G43886))))        {
        return G43886;
        };
      G43886 = (function (arguments)        {
        var matchValminus43894 = G43887;
        var anythingElseminus43885 = matchValminus43894;
        throw ((("Match fail in test-array-optionals against: ")+anythingElseminus43885));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G43886))))        {
        return G43886;
        };
      throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: a b :- (defined-or x 10)] x) (anything-else-43885 (_throw (_+ ''Match fail in test-array-optionals against: '' anything-else-43885))))) for value ")+(JSON.stringify(G43887))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValueminus43880 = actualFunminus43882.apply(this, arguments);
  while (recurP43883(returnValueminus43880))    {
    returnValueminus43880 = actualFunminus43882.apply(this, returnValueminus43880.args);
    };
  return returnValueminus43880;
  });
