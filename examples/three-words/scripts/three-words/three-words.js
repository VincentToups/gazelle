define(["hooves/operator-functions", "hooves/hooves", "jquery/jquery"], (function (moduleminus58c4bce870, moduleminus4745e9d952, moduleA31d161fe8)  {
  var currentModuleminus23062 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus23062 = value;
    });
  (function (arguments)    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    // ("hooves/operator-functions" :all)
    ;
    // ("hooves/hooves" :all)
    ;
    // ("jquery/jquery" :all)
    ;
    var setDiff = (function (set1, set2)      {
      var out = [];
      var arrayObject23095 = set1;
      for (index in (arrayObject23095))        {
        var matchVar23096 = arrayObject23095[index];
        var element = matchVar23096;
        ;
        var i = set2.indexOf(element);
        ((moduleminus58c4bce870.TripleEqualminus(i, -1))?(out.push(element)) : (undefined));
        };
      ;
      return out;
      });
    var allLetters = "abcdefghijklmnopqrstuvwxyz";
    currentModuleminus23062.updateLetters = (function ()      {
      var letters = Array.prototype.join.call(moduleA31d161fe8.$(".word").map((function (index, inputElement)        {
        return moduleA31d161fe8.$(inputElement).val();
        })), "");
      return moduleA31d161fe8.$("#letters").text(setDiff(allLetters, letters).join(""));
      });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus23062;
  }))