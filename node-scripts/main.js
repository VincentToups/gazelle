(((function ()  {
  var rjs = require("requirejs");
  console.log((("using requirejs in nodejs, rjs is ")+rjs));
  rjs.config({    
    nodeRequire:require,
    baseUrl:"~/src/elisp/gazelle/node-scripts/"
  });
  return rjs;
  }))())(["hooves/hooves", "hooves/operator-functions"], (function (moduleminus4745e9d952, moduleminus58c4bce870)  {
  return (function (arguments)    {
    // ("hooves/hooves" :all)
    ;
    // ("hooves/operator-functions" :all)
    ;
    return moduleminus58c4bce870.plus(1, 1);
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  }));
