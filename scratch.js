console.log("Hello World");
var plus = (function ()  {
  var returnValueminus21521 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigilminus21520",
      args:arguments
    };
    });
  var recurP21524 = (function (valminus21525)    {
    if ((("undefined")===((typeof valminus21525))))      {
      return false;
      };
    return (valminus21525.recurSigil===("recurSigilminus21520"));
    });
  var actualFunminus21523 = (function ()    {
    return (function (arguments)      {
      var G21527 = undefined;
      var G21528 = Array.prototype.slice.apply(arguments);
      G21527 = (function (arguments)        {
        var matchValminus21529 = G21528;
        if ((!((("object")===((typeof matchValminus21529))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((matchValminus21529.length>=1))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArraySimplePartminus21530 = Array.prototype.slice.call(matchValminus21529, 0, 1);
        if ((!((("object")===((typeof matchArraySimplePartminus21530))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((1===matchArraySimplePartminus21530.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var hd = matchArraySimplePartminus21530[0];
        var matchArrayTailPartminus21531 = Array.prototype.slice.call(matchValminus21529, 1);
        var tl = matchArrayTailPartminus21531;
        for (i in (tl))          {
          hd = (hd+(tl[i]));
          };
        return hd;
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G21527))))        {
        return G21527;
        };
      G21527 = (function (arguments)        {
        var matchValminus21532 = G21528;
        var anythingElseminus21526 = matchValminus21532;
        throw ((("Match fail in + against: ")+anythingElseminus21526));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G21527))))        {
        return G21527;
        };
      throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (for (i :in tl) (set! hd (_+ hd [tl i]))) hd) (anything-else-21526 (_throw (_+ ''Match fail in + against: '' anything-else-21526))))) for value ")+(JSON.stringify(G21528))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValueminus21521 = actualFunminus21523.apply(this, arguments);
  while (recurP21524(returnValueminus21521))    {
    returnValueminus21521 = actualFunminus21523.apply(this, returnValueminus21521.args);
    };
  return returnValueminus21521;
  });
var times = (function ()  {
  var returnValueminus21534 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigilminus21533",
      args:arguments
    };
    });
  var recurP21537 = (function (valminus21538)    {
    if ((("undefined")===((typeof valminus21538))))      {
      return false;
      };
    return (valminus21538.recurSigil===("recurSigilminus21533"));
    });
  var actualFunminus21536 = (function ()    {
    return (function (arguments)      {
      var G21540 = undefined;
      var G21541 = Array.prototype.slice.apply(arguments);
      G21540 = (function (arguments)        {
        var matchValminus21542 = G21541;
        if ((!((("object")===((typeof matchValminus21542))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((matchValminus21542.length>=1))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArraySimplePartminus21543 = Array.prototype.slice.call(matchValminus21542, 0, 1);
        if ((!((("object")===((typeof matchArraySimplePartminus21543))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((1===matchArraySimplePartminus21543.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var hd = matchArraySimplePartminus21543[0];
        var matchArrayTailPartminus21544 = Array.prototype.slice.call(matchValminus21542, 1);
        var tl = matchArrayTailPartminus21544;
        for (i in (tl))          {
          hd = (hd*(tl[i]));
          };
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G21540))))        {
        return G21540;
        };
      G21540 = (function (arguments)        {
        var matchValminus21545 = G21541;
        var anythingElseminus21539 = matchValminus21545;
        throw ((("Match fail in * against: ")+anythingElseminus21539));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G21540))))        {
        return G21540;
        };
      throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (for (i :in tl) (set! hd (_* hd [tl i])))) (anything-else-21539 (_throw (_+ ''Match fail in * against: '' anything-else-21539))))) for value ")+(JSON.stringify(G21541))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValueminus21534 = actualFunminus21536.apply(this, arguments);
  while (recurP21537(returnValueminus21534))    {
    returnValueminus21534 = actualFunminus21536.apply(this, returnValueminus21534.args);
    };
  return returnValueminus21534;
  });
var minus = (function ()  {
  var returnValueminus21547 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigilminus21546",
      args:arguments
    };
    });
  var recurP21550 = (function (valminus21551)    {
    if ((("undefined")===((typeof valminus21551))))      {
      return false;
      };
    return (valminus21551.recurSigil===("recurSigilminus21546"));
    });
  var actualFunminus21549 = (function ()    {
    return (function (arguments)      {
      var G21553 = undefined;
      var G21554 = Array.prototype.slice.apply(arguments);
      G21553 = (function (arguments)        {
        var matchValminus21555 = G21554;
        if ((!((("object")===((typeof matchValminus21555))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((matchValminus21555.length>=1))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArraySimplePartminus21556 = Array.prototype.slice.call(matchValminus21555, 0, 1);
        if ((!((("object")===((typeof matchArraySimplePartminus21556))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((1===matchArraySimplePartminus21556.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var hd = matchArraySimplePartminus21556[0];
        var matchArrayTailPartminus21557 = Array.prototype.slice.call(matchValminus21555, 1);
        var tl = matchArrayTailPartminus21557;
        return (hd-plus.apply(undefined, tl));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G21553))))        {
        return G21553;
        };
      G21553 = (function (arguments)        {
        var matchValminus21558 = G21554;
        var anythingElseminus21552 = matchValminus21558;
        throw ((("Match fail in - against: ")+anythingElseminus21552));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G21553))))        {
        return G21553;
        };
      throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_- hd (\.\. + (apply _undefined tl)))) (anything-else-21552 (_throw (_+ ''Match fail in - against: '' anything-else-21552))))) for value ")+(JSON.stringify(G21554))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValueminus21547 = actualFunminus21549.apply(this, arguments);
  while (recurP21550(returnValueminus21547))    {
    returnValueminus21547 = actualFunminus21549.apply(this, returnValueminus21547.args);
    };
  return returnValueminus21547;
  });
var divide = (function ()  {
  var returnValueminus21560 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigilminus21559",
      args:arguments
    };
    });
  var recurP21563 = (function (valminus21564)    {
    if ((("undefined")===((typeof valminus21564))))      {
      return false;
      };
    return (valminus21564.recurSigil===("recurSigilminus21559"));
    });
  var actualFunminus21562 = (function ()    {
    return (function (arguments)      {
      var G21566 = undefined;
      var G21567 = Array.prototype.slice.apply(arguments);
      G21566 = (function (arguments)        {
        var matchValminus21568 = G21567;
        if ((!((("object")===((typeof matchValminus21568))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((matchValminus21568.length>=1))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var matchArraySimplePartminus21569 = Array.prototype.slice.call(matchValminus21568, 0, 1);
        if ((!((("object")===((typeof matchArraySimplePartminus21569))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((1===matchArraySimplePartminus21569.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var hd = matchArraySimplePartminus21569[0];
        var matchArrayTailPartminus21570 = Array.prototype.slice.call(matchValminus21568, 1);
        var tl = matchArrayTailPartminus21570;
        return (hd/times.apply(undefined, tl));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G21566))))        {
        return G21566;
        };
      G21566 = (function (arguments)        {
        var matchValminus21571 = G21567;
        var anythingElseminus21565 = matchValminus21571;
        throw ((("Match fail in / against: ")+anythingElseminus21565));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G21566))))        {
        return G21566;
        };
      throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_/ hd (\.\. * (apply _undefined tl)))) (anything-else-21565 (_throw (_+ ''Match fail in / against: '' anything-else-21565))))) for value ")+(JSON.stringify(G21567))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValueminus21560 = actualFunminus21562.apply(this, arguments);
  while (recurP21563(returnValueminus21560))    {
    returnValueminus21560 = actualFunminus21562.apply(this, returnValueminus21560.args);
    };
  return returnValueminus21560;
  });
var lessThan = (function (a, b)  {
  return (a<b);
  });
var lessThanequal = (function (a, b)  {
  return (a<=b);
  });
var greaterThan = (function (a, b)  {
  return (a>b);
  });
var greaterThanequal = (function (a, b)  {
  return (a>=b);
  });
var equalequal = (function (a, b)  {
  return (a==b);
  });
var TripleEqualminus = (function (a, b)  {
  return (a===b);
  });
var greaterThangreaterThan = (function (a, b)  {
  return (a>>b);
  });
var lessThanlessThan = (function (a, b)  {
  return (a<<b);
  });
var greaterThangreaterThangreaterThan = (function (a, b)  {
  return (a>>>b);
  });
var ampersand = (function (a, b)  {
  return (a&b);
  });
var pipe = (function (a, b)  {
  return (a|b);
  });
var caret = (function (a, b)  {
  return (a^b);
  });
var ampersandampersand = "macro - no dynamic value.";
var pipepipe = "macro - no dynamic value.";
;
var Cons = (function (car, cdr)  {
  this.car = car;
  this.cdr = cdr;
  return this;
  });
var cons = (function (car, cdr)  {
  return (new (Cons)(car, cdr));
  });
var lastChar = (function (s)  {
  return s[minus(s.length, 1)];
  });
lastChar("super");
var appropriateSpacer = (function (consStrAcc)  {
  return ((TripleEqualminus(lastChar(consStrAcc), "("))?("") : (" "));
  });
var innerConsString = (function ()  {
  var returnValueminus21575 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigilminus21574",
      args:arguments
    };
    });
  var recurP21578 = (function (valminus21579)    {
    if ((("undefined")===((typeof valminus21579))))      {
      return false;
      };
    return (valminus21579.recurSigil===("recurSigilminus21574"));
    });
  var actualFunminus21577 = (function ()    {
    return (function (arguments)      {
      var G21581 = undefined;
      var G21582 = Array.prototype.slice.apply(arguments);
      G21581 = (function (arguments)        {
        var matchValminus21583 = G21582;
        if ((!((("object")===((typeof matchValminus21583))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((2===matchValminus21583.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var cons = matchValminus21583[0];
        var acc = matchValminus21583[1];
        var acc = plus(acc, appropriateSpacer(acc), cons.car);
        return (function (arguments)          {
          var G21584 = undefined;
          var G21585 = cons.cdr;
          G21584 = (function (arguments)            {
            var matchValminus21586 = G21585;
            if ((!((null===matchValminus21586))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return acc;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G21584))))            {
            return G21584;
            };
          G21584 = (function (arguments)            {
            var matchValminus21587 = G21585;
            var matchFunExprminus21589 = (function (G21588)              {
              return (G21588 instanceof Cons);
              });
            if ((!(matchFunExprminus21589(matchValminus21587))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var nextCons = matchValminus21587;
            return recur(nextCons, acc);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G21584))))            {
            return G21584;
            };
          G21584 = (function (arguments)            {
            var matchValminus21590 = G21585;
            var otherValue = matchValminus21590;
            return plus(acc, " . ", otherValue);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G21584))))            {
            return G21584;
            };
          throw ((("match-fail at ((match cons\.cdr (null acc) ((instance Cons next-cons) (recur next-cons acc)) (other-value (+ acc '' . '' other-value)))) for value ")+(JSON.stringify(G21585))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G21581))))        {
        return G21581;
        };
      G21581 = (function (arguments)        {
        var matchValminus21591 = G21582;
        if ((!((("object")===((typeof matchValminus21591))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((1===matchValminus21591.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var cons = matchValminus21591[0];
        return recur(cons, "");
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G21581))))        {
        return G21581;
        };
      G21581 = (function (arguments)        {
        var matchValminus21592 = G21582;
        var anythingElseminus21580 = matchValminus21592;
        throw ((("Match fail in inner-cons-string against: ")+anythingElseminus21580));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G21581))))        {
        return G21581;
        };
      throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: cons acc] (var acc (+ acc (appropriate-spacer acc) cons\.car)) (match cons\.cdr (null acc) ((instance Cons next-cons) (recur next-cons acc)) (other-value (+ acc '' . '' other-value)))) ([: cons] (recur cons '''')) (anything-else-21580 (_throw (_+ ''Match fail in inner-cons-string against: '' anything-else-21580))))) for value ")+(JSON.stringify(G21582))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValueminus21575 = actualFunminus21577.apply(this, arguments);
  while (recurP21578(returnValueminus21575))    {
    returnValueminus21575 = actualFunminus21577.apply(this, returnValueminus21575.args);
    };
  return returnValueminus21575;
  });
Cons.prototype.toString = (function ()  {
  return plus(innerConsString(this, "("), ")");
  });
console.log(plus("last of super is: ", lastChar("super")));
console.log(plus("improper list: ", cons("a", "b")));
console.log(plus("proper list: ", cons("a", cons("b", cons("c", null)))));
// cons
// pattern - no dynamic value.
;
console.log(plus("match test, with custom pattern: ", (function (arguments)  {
  var G21594 = undefined;
  var G21595 = cons("a", "b");
  G21594 = (function (arguments)    {
    var matchValminus21596 = G21595;
    var matchFunExprminus21602 = (function (G21601)      {
      return (G21601 instanceof Cons);
      });
    if ((!(matchFunExprminus21602(matchValminus21596))))      {
      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
      };
    var x = matchValminus21596.car;
    if ((("undefined")===((typeof x))))      {
      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
      };
    var y = matchValminus21596.cdr;
    if ((("undefined")===((typeof y))))      {
      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
      };
    return [x, y];
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G21594))))    {
    return G21594;
    };
  throw ((("match-fail at ((match (cons ''a'' ''b'') ((cons x y) [: x y]))) for value ")+(JSON.stringify(G21595))));
  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)))));
