(((function ()  {
  var rjs = require("requirejs");
  console.log((("using requirejs in nodejs, rjs is ")+rjs));
  rjs.config({    
    nodeRequire:require,
    baseUrl:"/home/toups/src/elisp/gazelle/scripts/"
  });
  return rjs;
  }))())(["hooves/hooves", "hooves/operator-functions"], (function (moduleminus4745e9d952, moduleminus58c4bce870)  {
  return (function (arguments)    {
    // ("hooves/hooves" :all)
    ;
    // ("hooves/operator-functions" :all)
    ;
    moduleminus58c4bce870.plus(1, 1);
    return console.log("Hello WORLD!");
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  }));
