require(["hooves/hooves", "hooves/class-utils", "jquery/jquery"], (function ()  {
  var returnValueminus95504 = undefined;
  var recur = (function ()    {
    return {      
      recurSigil:"recurSigilminus95503",
      args:arguments
    };
    });
  var recurP95507 = (function (valminus95508)    {
    if ((("undefined")===((typeof valminus95508))))      {
      return false;
      };
    return (valminus95508.recurSigil===("recurSigilminus95503"));
    });
  var actualFunminus95506 = (function ()    {
    return (function (arguments)      {
      var G95510 = undefined;
      var G95511 = Array.prototype.slice.apply(arguments);
      G95510 = (function (arguments)        {
        var matchValminus95512 = G95511;
        if ((!((("object")===((typeof matchValminus95512))))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        if ((!((3===matchValminus95512.length))))          {
          return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
          };
        var moduleminus4745e9d952 = matchValminus95512[0];
        var moduleminus327750a039 = matchValminus95512[1];
        var moduleA31d161fe8 = matchValminus95512[2];
        return (function (arguments)          {
          // ("hooves/hooves" :all)
          ;
          // ("hooves/class-utils" :all)
          ;
          // ("jquery/jquery" (:as $))
          ;
          console.log("Testing class system.");
          var Person95529 = (function (firstName, lastName)            {
            this.firstName = firstName;
            this.lastName = lastName;
            return this;
            });
          var superClass95533 = Object;
          var Person = (function ()            {
            var returnValueminus95535 = undefined;
            var recur = (function ()              {
              return {                
                recurSigil:"recurSigilminus95534",
                args:arguments
              };
              });
            var recurP95538 = (function (valminus95539)              {
              if ((("undefined")===((typeof valminus95539))))                {
                return false;
                };
              return (valminus95539.recurSigil===("recurSigilminus95534"));
              });
            var actualFunminus95537 = (function ()              {
              return (function (arguments)                {
                var G95541 = undefined;
                var G95542 = Array.prototype.slice.apply(arguments);
                G95541 = (function (arguments)                  {
                  var matchValminus95543 = G95542;
                  if ((!((("object")===((typeof matchValminus95543))))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  if ((!((matchValminus95543.length>=0))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var matchArraySimplePartminus95544 = Array.prototype.slice.call(matchValminus95543, 0, 0);
                  if ((!((("object")===((typeof matchArraySimplePartminus95544))))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  if ((!((0===matchArraySimplePartminus95544.length))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var matchArrayTailPartminus95545 = Array.prototype.slice.call(matchValminus95543, 0);
                  var consArgs95530 = matchArrayTailPartminus95545;
                  var self95532 = this;
                  this.superConstructor = (function ()                    {
                    var returnValueminus95547 = undefined;
                    var recur = (function ()                      {
                      return {                        
                        recurSigil:"recurSigilminus95546",
                        args:arguments
                      };
                      });
                    var recurP95550 = (function (valminus95551)                      {
                      if ((("undefined")===((typeof valminus95551))))                        {
                        return false;
                        };
                      return (valminus95551.recurSigil===("recurSigilminus95546"));
                      });
                    var actualFunminus95549 = (function ()                      {
                      return (function (arguments)                        {
                        var G95553 = undefined;
                        var G95554 = Array.prototype.slice.apply(arguments);
                        G95553 = (function (arguments)                          {
                          var matchValminus95555 = G95554;
                          if ((!((("object")===((typeof matchValminus95555))))))                            {
                            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                            };
                          if ((!((matchValminus95555.length>=0))))                            {
                            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                            };
                          var matchArraySimplePartminus95556 = Array.prototype.slice.call(matchValminus95555, 0, 0);
                          if ((!((("object")===((typeof matchArraySimplePartminus95556))))))                            {
                            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                            };
                          if ((!((0===matchArraySimplePartminus95556.length))))                            {
                            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                            };
                          var matchArrayTailPartminus95557 = Array.prototype.slice.call(matchValminus95555, 0);
                          var tempArgs95531 = matchArrayTailPartminus95557;
                          return superClass95533.apply(self95532, tempArgs95531);
                          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95553))))                          {
                          return G95553;
                          };
                        G95553 = (function (arguments)                          {
                          var matchValminus95558 = G95554;
                          var anythingElseminus95552 = matchValminus95558;
                          throw ((("Match fail in anonymous against: ")+anythingElseminus95552));
                          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95553))))                          {
                          return G95553;
                          };
                        throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: (tail temp-args95531)] (\.\. super-class95533 (apply self95532 temp-args95531))) (anything-else-95552 (_throw (_+ ''Match fail in anonymous against: '' anything-else-95552))))) for value ")+(JSON.stringify(G95554))));
                        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                      });
                    returnValueminus95547 = actualFunminus95549.apply(this, arguments);
                    while (recurP95550(returnValueminus95547))                      {
                      returnValueminus95547 = actualFunminus95549.apply(this, returnValueminus95547.args);
                      };
                    return returnValueminus95547;
                    });
                  this.super = superClass95533.prototype;
                  Person95529.apply(this, consArgs95530);
                  return this;
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95541))))                  {
                  return G95541;
                  };
                G95541 = (function (arguments)                  {
                  var matchValminus95559 = G95542;
                  var anythingElseminus95540 = matchValminus95559;
                  throw ((("Match fail in anonymous against: ")+anythingElseminus95540));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95541))))                  {
                  return G95541;
                  };
                throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: (tail cons-args95530)] (var self95532 this) (set! this\.super-constructor (lambda ((tail temp-args95531)) (\.\. super-class95533 (apply self95532 temp-args95531)))) (set! this\.super (\.\. super-class95533 prototype)) (\.\. Person95529 (apply this cons-args95530)) this) (anything-else-95540 (_throw (_+ ''Match fail in anonymous against: '' anything-else-95540))))) for value ")+(JSON.stringify(G95542))));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              });
            returnValueminus95535 = actualFunminus95537.apply(this, arguments);
            while (recurP95538(returnValueminus95535))              {
              returnValueminus95535 = actualFunminus95537.apply(this, returnValueminus95535.args);
              };
            return returnValueminus95535;
            });
          (require("hooves/class-utils").extend).call(null, Person, superClass95533);
          ;
          var classValue95566 = Person;
          var superMethod95567 = ((((moduleminus4745e9d952.definedPredicate(classValue95566.superClass))&&(moduleminus4745e9d952.definedPredicate(classValue95566.superClass.toString))))?((function ()            {
            var returnValueminus95575 = undefined;
            var recur = (function ()              {
              return {                
                recurSigil:"recurSigilminus95574",
                args:arguments
              };
              });
            var recurP95578 = (function (valminus95579)              {
              if ((("undefined")===((typeof valminus95579))))                {
                return false;
                };
              return (valminus95579.recurSigil===("recurSigilminus95574"));
              });
            var actualFunminus95577 = (function ()              {
              return (function (arguments)                {
                var G95581 = undefined;
                var G95582 = Array.prototype.slice.apply(arguments);
                G95581 = (function (arguments)                  {
                  var matchValminus95583 = G95582;
                  if ((!((("object")===((typeof matchValminus95583))))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  if ((!((matchValminus95583.length>=0))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var matchArraySimplePartminus95584 = Array.prototype.slice.call(matchValminus95583, 0, 0);
                  if ((!((("object")===((typeof matchArraySimplePartminus95584))))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  if ((!((0===matchArraySimplePartminus95584.length))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var matchArrayTailPartminus95585 = Array.prototype.slice.call(matchValminus95583, 0);
                  var args95568 = matchArrayTailPartminus95585;
                  return classValue95566.superClass.toString.apply(this, args95568);
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95581))))                  {
                  return G95581;
                  };
                G95581 = (function (arguments)                  {
                  var matchValminus95586 = G95582;
                  var anythingElseminus95580 = matchValminus95586;
                  throw ((("Match fail in anonymous against: ")+anythingElseminus95580));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95581))))                  {
                  return G95581;
                  };
                throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: (tail args95568)] (\.\. (\.\. class-value95566 super-class to-string) (apply this args95568))) (anything-else-95580 (_throw (_+ ''Match fail in anonymous against: '' anything-else-95580))))) for value ")+(JSON.stringify(G95582))));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              });
            returnValueminus95575 = actualFunminus95577.apply(this, arguments);
            while (recurP95578(returnValueminus95575))              {
              returnValueminus95575 = actualFunminus95577.apply(this, returnValueminus95575.args);
              };
            return returnValueminus95575;
            })) : ((function ()            {
            var returnValueminus95588 = undefined;
            var recur = (function ()              {
              return {                
                recurSigil:"recurSigilminus95587",
                args:arguments
              };
              });
            var recurP95591 = (function (valminus95592)              {
              if ((("undefined")===((typeof valminus95592))))                {
                return false;
                };
              return (valminus95592.recurSigil===("recurSigilminus95587"));
              });
            var actualFunminus95590 = (function ()              {
              return (function (arguments)                {
                var G95594 = undefined;
                var G95595 = Array.prototype.slice.apply(arguments);
                G95594 = (function (arguments)                  {
                  var matchValminus95596 = G95595;
                  if ((!((("object")===((typeof matchValminus95596))))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  if ((!((matchValminus95596.length>=0))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var matchArraySimplePartminus95597 = Array.prototype.slice.call(matchValminus95596, 0, 0);
                  if ((!((("object")===((typeof matchArraySimplePartminus95597))))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  if ((!((0===matchArraySimplePartminus95597.length))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var matchArrayTailPartminus95598 = Array.prototype.slice.call(matchValminus95596, 0);
                  var args95568 = matchArrayTailPartminus95598;
                  throw (moduleminus4745e9d952.plus("No superclass method ", "toString", " in class ", classValue95566));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95594))))                  {
                  return G95594;
                  };
                G95594 = (function (arguments)                  {
                  var matchValminus95599 = G95595;
                  var anythingElseminus95593 = matchValminus95599;
                  throw ((("Match fail in anonymous against: ")+anythingElseminus95593));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95594))))                  {
                  return G95594;
                  };
                throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: (tail args95568)] (_throw (+ ''No superclass method '' (quote to-string) '' in class '' class-value95566))) (anything-else-95593 (_throw (_+ ''Match fail in anonymous against: '' anything-else-95593))))) for value ")+(JSON.stringify(G95595))));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              });
            returnValueminus95588 = actualFunminus95590.apply(this, arguments);
            while (recurP95591(returnValueminus95588))              {
              returnValueminus95588 = actualFunminus95590.apply(this, returnValueminus95588.args);
              };
            return returnValueminus95588;
            })));
          classValue95566.prototype.toString = (function ()            {
            var returnValueminus95601 = undefined;
            var recur = (function ()              {
              return {                
                recurSigil:"recurSigilminus95600",
                args:arguments
              };
              });
            var recurP95604 = (function (valminus95605)              {
              if ((("undefined")===((typeof valminus95605))))                {
                return false;
                };
              return (valminus95605.recurSigil===("recurSigilminus95600"));
              });
            var actualFunminus95603 = (function ()              {
              return (function (arguments)                {
                var G95607 = undefined;
                var G95608 = Array.prototype.slice.apply(arguments);
                G95607 = (function (arguments)                  {
                  var matchValminus95609 = G95608;
                  if ((!((("object")===((typeof matchValminus95609))))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  if ((!((matchValminus95609.length>=0))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var matchArraySimplePartminus95610 = Array.prototype.slice.call(matchValminus95609, 0, 0);
                  if ((!((("object")===((typeof matchArraySimplePartminus95610))))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  if ((!((0===matchArraySimplePartminus95610.length))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var matchArrayTailPartminus95611 = Array.prototype.slice.call(matchValminus95609, 0);
                  var args95568 = matchArrayTailPartminus95611;
                  var explicitThis95569 = this;
                  var superMethod = (function ()                    {
                    var returnValueminus95613 = undefined;
                    var recur = (function ()                      {
                      return {                        
                        recurSigil:"recurSigilminus95612",
                        args:arguments
                      };
                      });
                    var recurP95616 = (function (valminus95617)                      {
                      if ((("undefined")===((typeof valminus95617))))                        {
                        return false;
                        };
                      return (valminus95617.recurSigil===("recurSigilminus95612"));
                      });
                    var actualFunminus95615 = (function ()                      {
                      return (function (arguments)                        {
                        var G95619 = undefined;
                        var G95620 = Array.prototype.slice.apply(arguments);
                        G95619 = (function (arguments)                          {
                          var matchValminus95621 = G95620;
                          if ((!((("object")===((typeof matchValminus95621))))))                            {
                            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                            };
                          if ((!((matchValminus95621.length>=0))))                            {
                            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                            };
                          var matchArraySimplePartminus95622 = Array.prototype.slice.call(matchValminus95621, 0, 0);
                          if ((!((("object")===((typeof matchArraySimplePartminus95622))))))                            {
                            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                            };
                          if ((!((0===matchArraySimplePartminus95622.length))))                            {
                            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                            };
                          var matchArrayTailPartminus95623 = Array.prototype.slice.call(matchValminus95621, 0);
                          var args95568 = matchArrayTailPartminus95623;
                          return superMethod95567.apply(explicitThis95569, args95568);
                          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95619))))                          {
                          return G95619;
                          };
                        G95619 = (function (arguments)                          {
                          var matchValminus95624 = G95620;
                          var anythingElseminus95618 = matchValminus95624;
                          throw ((("Match fail in anonymous against: ")+anythingElseminus95618));
                          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95619))))                          {
                          return G95619;
                          };
                        throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: (tail args95568)] (\.\. super-method95567 (apply explicit-this95569 args95568))) (anything-else-95618 (_throw (_+ ''Match fail in anonymous against: '' anything-else-95618))))) for value ")+(JSON.stringify(G95620))));
                        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                      });
                    returnValueminus95613 = actualFunminus95615.apply(this, arguments);
                    while (recurP95616(returnValueminus95613))                      {
                      returnValueminus95613 = actualFunminus95615.apply(this, returnValueminus95613.args);
                      };
                    return returnValueminus95613;
                    });
                  return (function ()                    {
                    return moduleminus4745e9d952.plus("Don't shoot, I'm ", this.firstName, " ", this.lastName, "!");
                    }).apply(this, args95568);
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95607))))                  {
                  return G95607;
                  };
                G95607 = (function (arguments)                  {
                  var matchValminus95625 = G95608;
                  var anythingElseminus95606 = matchValminus95625;
                  throw ((("Match fail in anonymous against: ")+anythingElseminus95606));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95607))))                  {
                  return G95607;
                  };
                throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: (tail args95568)] (var explicit-this95569 this) (var super-method (lambda ((tail args95568)) (\.\. super-method95567 (apply explicit-this95569 args95568)))) (\.\. (lambda nil (+ ''Don't shoot, I'm '' this\.first-name '' '' this\.last-name ''!'')) (apply this args95568))) (anything-else-95606 (_throw (_+ ''Match fail in anonymous against: '' anything-else-95606))))) for value ")+(JSON.stringify(G95608))));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              });
            returnValueminus95601 = actualFunminus95603.apply(this, arguments);
            while (recurP95604(returnValueminus95601))              {
              returnValueminus95601 = actualFunminus95603.apply(this, returnValueminus95601.args);
              };
            return returnValueminus95601;
            });
          ;
          var Employee95642 = (function (firstName, lastName, company)            {
            this.superConstructor(firstName, lastName);
            this.company = company;
            return this;
            });
          var superClass95646 = Person;
          var Employee = (function ()            {
            var returnValueminus95648 = undefined;
            var recur = (function ()              {
              return {                
                recurSigil:"recurSigilminus95647",
                args:arguments
              };
              });
            var recurP95651 = (function (valminus95652)              {
              if ((("undefined")===((typeof valminus95652))))                {
                return false;
                };
              return (valminus95652.recurSigil===("recurSigilminus95647"));
              });
            var actualFunminus95650 = (function ()              {
              return (function (arguments)                {
                var G95654 = undefined;
                var G95655 = Array.prototype.slice.apply(arguments);
                G95654 = (function (arguments)                  {
                  var matchValminus95656 = G95655;
                  if ((!((("object")===((typeof matchValminus95656))))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  if ((!((matchValminus95656.length>=0))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var matchArraySimplePartminus95657 = Array.prototype.slice.call(matchValminus95656, 0, 0);
                  if ((!((("object")===((typeof matchArraySimplePartminus95657))))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  if ((!((0===matchArraySimplePartminus95657.length))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var matchArrayTailPartminus95658 = Array.prototype.slice.call(matchValminus95656, 0);
                  var consArgs95643 = matchArrayTailPartminus95658;
                  var self95645 = this;
                  this.superConstructor = (function ()                    {
                    var returnValueminus95660 = undefined;
                    var recur = (function ()                      {
                      return {                        
                        recurSigil:"recurSigilminus95659",
                        args:arguments
                      };
                      });
                    var recurP95663 = (function (valminus95664)                      {
                      if ((("undefined")===((typeof valminus95664))))                        {
                        return false;
                        };
                      return (valminus95664.recurSigil===("recurSigilminus95659"));
                      });
                    var actualFunminus95662 = (function ()                      {
                      return (function (arguments)                        {
                        var G95666 = undefined;
                        var G95667 = Array.prototype.slice.apply(arguments);
                        G95666 = (function (arguments)                          {
                          var matchValminus95668 = G95667;
                          if ((!((("object")===((typeof matchValminus95668))))))                            {
                            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                            };
                          if ((!((matchValminus95668.length>=0))))                            {
                            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                            };
                          var matchArraySimplePartminus95669 = Array.prototype.slice.call(matchValminus95668, 0, 0);
                          if ((!((("object")===((typeof matchArraySimplePartminus95669))))))                            {
                            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                            };
                          if ((!((0===matchArraySimplePartminus95669.length))))                            {
                            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                            };
                          var matchArrayTailPartminus95670 = Array.prototype.slice.call(matchValminus95668, 0);
                          var tempArgs95644 = matchArrayTailPartminus95670;
                          return superClass95646.apply(self95645, tempArgs95644);
                          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95666))))                          {
                          return G95666;
                          };
                        G95666 = (function (arguments)                          {
                          var matchValminus95671 = G95667;
                          var anythingElseminus95665 = matchValminus95671;
                          throw ((("Match fail in anonymous against: ")+anythingElseminus95665));
                          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95666))))                          {
                          return G95666;
                          };
                        throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: (tail temp-args95644)] (\.\. super-class95646 (apply self95645 temp-args95644))) (anything-else-95665 (_throw (_+ ''Match fail in anonymous against: '' anything-else-95665))))) for value ")+(JSON.stringify(G95667))));
                        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                      });
                    returnValueminus95660 = actualFunminus95662.apply(this, arguments);
                    while (recurP95663(returnValueminus95660))                      {
                      returnValueminus95660 = actualFunminus95662.apply(this, returnValueminus95660.args);
                      };
                    return returnValueminus95660;
                    });
                  this.super = superClass95646.prototype;
                  Employee95642.apply(this, consArgs95643);
                  return this;
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95654))))                  {
                  return G95654;
                  };
                G95654 = (function (arguments)                  {
                  var matchValminus95672 = G95655;
                  var anythingElseminus95653 = matchValminus95672;
                  throw ((("Match fail in anonymous against: ")+anythingElseminus95653));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95654))))                  {
                  return G95654;
                  };
                throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: (tail cons-args95643)] (var self95645 this) (set! this\.super-constructor (lambda ((tail temp-args95644)) (\.\. super-class95646 (apply self95645 temp-args95644)))) (set! this\.super (\.\. super-class95646 prototype)) (\.\. Employee95642 (apply this cons-args95643)) this) (anything-else-95653 (_throw (_+ ''Match fail in anonymous against: '' anything-else-95653))))) for value ")+(JSON.stringify(G95655))));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              });
            returnValueminus95648 = actualFunminus95650.apply(this, arguments);
            while (recurP95651(returnValueminus95648))              {
              returnValueminus95648 = actualFunminus95650.apply(this, returnValueminus95648.args);
              };
            return returnValueminus95648;
            });
          (require("hooves/class-utils").extend).call(null, Employee, superClass95646);
          ;
          var classValue95679 = Employee;
          var superMethod95680 = ((((moduleminus4745e9d952.definedPredicate(classValue95679.superClass))&&(moduleminus4745e9d952.definedPredicate(classValue95679.superClass.toString))))?((function ()            {
            var returnValueminus95688 = undefined;
            var recur = (function ()              {
              return {                
                recurSigil:"recurSigilminus95687",
                args:arguments
              };
              });
            var recurP95691 = (function (valminus95692)              {
              if ((("undefined")===((typeof valminus95692))))                {
                return false;
                };
              return (valminus95692.recurSigil===("recurSigilminus95687"));
              });
            var actualFunminus95690 = (function ()              {
              return (function (arguments)                {
                var G95694 = undefined;
                var G95695 = Array.prototype.slice.apply(arguments);
                G95694 = (function (arguments)                  {
                  var matchValminus95696 = G95695;
                  if ((!((("object")===((typeof matchValminus95696))))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  if ((!((matchValminus95696.length>=0))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var matchArraySimplePartminus95697 = Array.prototype.slice.call(matchValminus95696, 0, 0);
                  if ((!((("object")===((typeof matchArraySimplePartminus95697))))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  if ((!((0===matchArraySimplePartminus95697.length))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var matchArrayTailPartminus95698 = Array.prototype.slice.call(matchValminus95696, 0);
                  var args95681 = matchArrayTailPartminus95698;
                  return classValue95679.superClass.toString.apply(this, args95681);
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95694))))                  {
                  return G95694;
                  };
                G95694 = (function (arguments)                  {
                  var matchValminus95699 = G95695;
                  var anythingElseminus95693 = matchValminus95699;
                  throw ((("Match fail in anonymous against: ")+anythingElseminus95693));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95694))))                  {
                  return G95694;
                  };
                throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: (tail args95681)] (\.\. (\.\. class-value95679 super-class to-string) (apply this args95681))) (anything-else-95693 (_throw (_+ ''Match fail in anonymous against: '' anything-else-95693))))) for value ")+(JSON.stringify(G95695))));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              });
            returnValueminus95688 = actualFunminus95690.apply(this, arguments);
            while (recurP95691(returnValueminus95688))              {
              returnValueminus95688 = actualFunminus95690.apply(this, returnValueminus95688.args);
              };
            return returnValueminus95688;
            })) : ((function ()            {
            var returnValueminus95701 = undefined;
            var recur = (function ()              {
              return {                
                recurSigil:"recurSigilminus95700",
                args:arguments
              };
              });
            var recurP95704 = (function (valminus95705)              {
              if ((("undefined")===((typeof valminus95705))))                {
                return false;
                };
              return (valminus95705.recurSigil===("recurSigilminus95700"));
              });
            var actualFunminus95703 = (function ()              {
              return (function (arguments)                {
                var G95707 = undefined;
                var G95708 = Array.prototype.slice.apply(arguments);
                G95707 = (function (arguments)                  {
                  var matchValminus95709 = G95708;
                  if ((!((("object")===((typeof matchValminus95709))))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  if ((!((matchValminus95709.length>=0))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var matchArraySimplePartminus95710 = Array.prototype.slice.call(matchValminus95709, 0, 0);
                  if ((!((("object")===((typeof matchArraySimplePartminus95710))))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  if ((!((0===matchArraySimplePartminus95710.length))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var matchArrayTailPartminus95711 = Array.prototype.slice.call(matchValminus95709, 0);
                  var args95681 = matchArrayTailPartminus95711;
                  throw (moduleminus4745e9d952.plus("No superclass method ", "toString", " in class ", classValue95679));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95707))))                  {
                  return G95707;
                  };
                G95707 = (function (arguments)                  {
                  var matchValminus95712 = G95708;
                  var anythingElseminus95706 = matchValminus95712;
                  throw ((("Match fail in anonymous against: ")+anythingElseminus95706));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95707))))                  {
                  return G95707;
                  };
                throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: (tail args95681)] (_throw (+ ''No superclass method '' (quote to-string) '' in class '' class-value95679))) (anything-else-95706 (_throw (_+ ''Match fail in anonymous against: '' anything-else-95706))))) for value ")+(JSON.stringify(G95708))));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              });
            returnValueminus95701 = actualFunminus95703.apply(this, arguments);
            while (recurP95704(returnValueminus95701))              {
              returnValueminus95701 = actualFunminus95703.apply(this, returnValueminus95701.args);
              };
            return returnValueminus95701;
            })));
          classValue95679.prototype.toString = (function ()            {
            var returnValueminus95714 = undefined;
            var recur = (function ()              {
              return {                
                recurSigil:"recurSigilminus95713",
                args:arguments
              };
              });
            var recurP95717 = (function (valminus95718)              {
              if ((("undefined")===((typeof valminus95718))))                {
                return false;
                };
              return (valminus95718.recurSigil===("recurSigilminus95713"));
              });
            var actualFunminus95716 = (function ()              {
              return (function (arguments)                {
                var G95720 = undefined;
                var G95721 = Array.prototype.slice.apply(arguments);
                G95720 = (function (arguments)                  {
                  var matchValminus95722 = G95721;
                  if ((!((("object")===((typeof matchValminus95722))))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  if ((!((matchValminus95722.length>=0))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var matchArraySimplePartminus95723 = Array.prototype.slice.call(matchValminus95722, 0, 0);
                  if ((!((("object")===((typeof matchArraySimplePartminus95723))))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  if ((!((0===matchArraySimplePartminus95723.length))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var matchArrayTailPartminus95724 = Array.prototype.slice.call(matchValminus95722, 0);
                  var args95681 = matchArrayTailPartminus95724;
                  var explicitThis95682 = this;
                  var superMethod = (function ()                    {
                    var returnValueminus95726 = undefined;
                    var recur = (function ()                      {
                      return {                        
                        recurSigil:"recurSigilminus95725",
                        args:arguments
                      };
                      });
                    var recurP95729 = (function (valminus95730)                      {
                      if ((("undefined")===((typeof valminus95730))))                        {
                        return false;
                        };
                      return (valminus95730.recurSigil===("recurSigilminus95725"));
                      });
                    var actualFunminus95728 = (function ()                      {
                      return (function (arguments)                        {
                        var G95732 = undefined;
                        var G95733 = Array.prototype.slice.apply(arguments);
                        G95732 = (function (arguments)                          {
                          var matchValminus95734 = G95733;
                          if ((!((("object")===((typeof matchValminus95734))))))                            {
                            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                            };
                          if ((!((matchValminus95734.length>=0))))                            {
                            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                            };
                          var matchArraySimplePartminus95735 = Array.prototype.slice.call(matchValminus95734, 0, 0);
                          if ((!((("object")===((typeof matchArraySimplePartminus95735))))))                            {
                            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                            };
                          if ((!((0===matchArraySimplePartminus95735.length))))                            {
                            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                            };
                          var matchArrayTailPartminus95736 = Array.prototype.slice.call(matchValminus95734, 0);
                          var args95681 = matchArrayTailPartminus95736;
                          return superMethod95680.apply(explicitThis95682, args95681);
                          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95732))))                          {
                          return G95732;
                          };
                        G95732 = (function (arguments)                          {
                          var matchValminus95737 = G95733;
                          var anythingElseminus95731 = matchValminus95737;
                          throw ((("Match fail in anonymous against: ")+anythingElseminus95731));
                          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95732))))                          {
                          return G95732;
                          };
                        throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: (tail args95681)] (\.\. super-method95680 (apply explicit-this95682 args95681))) (anything-else-95731 (_throw (_+ ''Match fail in anonymous against: '' anything-else-95731))))) for value ")+(JSON.stringify(G95733))));
                        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                      });
                    returnValueminus95726 = actualFunminus95728.apply(this, arguments);
                    while (recurP95729(returnValueminus95726))                      {
                      returnValueminus95726 = actualFunminus95728.apply(this, returnValueminus95726.args);
                      };
                    return returnValueminus95726;
                    });
                  return (function ()                    {
                    return moduleminus4745e9d952.plus(superMethod(), "  Plus, I work for ", this.company, ".");
                    }).apply(this, args95681);
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95720))))                  {
                  return G95720;
                  };
                G95720 = (function (arguments)                  {
                  var matchValminus95738 = G95721;
                  var anythingElseminus95719 = matchValminus95738;
                  throw ((("Match fail in anonymous against: ")+anythingElseminus95719));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95720))))                  {
                  return G95720;
                  };
                throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: (tail args95681)] (var explicit-this95682 this) (var super-method (lambda ((tail args95681)) (\.\. super-method95680 (apply explicit-this95682 args95681)))) (\.\. (lambda nil (+ (super-method) ''  Plus, I work for '' this\.company ''.'')) (apply this args95681))) (anything-else-95719 (_throw (_+ ''Match fail in anonymous against: '' anything-else-95719))))) for value ")+(JSON.stringify(G95721))));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              });
            returnValueminus95714 = actualFunminus95716.apply(this, arguments);
            while (recurP95717(returnValueminus95714))              {
              returnValueminus95714 = actualFunminus95716.apply(this, returnValueminus95714.args);
              };
            return returnValueminus95714;
            });
          ;
          var newline = (function ()            {
            return moduleA31d161fe8.$("body").append(moduleA31d161fe8.$("<br>"));
            });
          moduleA31d161fe8.$("body").append("Hello World.");
          newline();
          moduleA31d161fe8.$("body").append(moduleminus4745e9d952.plus("", (new (Person)("James", "Cooper"))));
          newline();
          var card = (new (Employee)("Orson", "Card", "IBM"));
          moduleA31d161fe8.$("body").append(moduleminus4745e9d952.plus("", card));
          newline();
          moduleA31d161fe8.$("body").append(moduleminus4745e9d952.plus("instanceof card Person is ", (card instanceof Person)));
          newline();
          return moduleA31d161fe8.$("body").append(moduleminus4745e9d952.plus("instanceof card Employee is ", (card instanceof Employee)));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95510))))        {
        return G95510;
        };
      G95510 = (function (arguments)        {
        var matchValminus95739 = G95511;
        var anythingElseminus95509 = matchValminus95739;
        throw ((("Match fail in require-form against: ")+anythingElseminus95509));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G95510))))        {
        return G95510;
        };
      throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: module-4745e9d952 module-327750a039 module-a31d161fe8] (_proper:macro-context (_proper:require-spec ''hooves/hooves'' :all) (_proper:require-spec ''hooves/class-utils'' :all) (_proper:require-spec ''jquery/jquery'' (:as $)) (console\.log ''Testing class system.'') (define-class Person Object (first-name last-name) (set! this\.first-name first-name) (set! this\.last-name last-name) this) (define-method Person to-string nil (+ ''Don't shoot, I'm '' this\.first-name '' '' this\.last-name ''!'')) (define-class Employee Person (first-name last-name company) (this\.super-constructor first-name last-name) (set! this\.company company) this) (define-method Employee to-string nil (+ (super-method) ''  Plus, I work for '' this\.company ''.'')) (define (newline) (\.\. ($ ''body'') (append ($ ''<br>'')))) (\.\. ($ ''body'') (append ''Hello World.'')) (newline) (\.\. ($ ''body'') (append (+ '''' (new Person ''James'' ''Cooper'')))) (newline) (var card (new Employee ''Orson'' ''Card'' ''IBM'')) (\.\. ($ ''body'') (append (+ '''' card))) (newline) (\.\. ($ ''body'') (append (+ ''instanceof card Person is '' (instanceof card Person)))) (newline) (\.\. ($ ''body'') (append (+ ''instanceof card Employee is '' (instanceof card Employee)))))) (anything-else-95509 (_throw (_+ ''Match fail in require-form against: '' anything-else-95509))))) for value ")+(JSON.stringify(G95511))));
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    });
  returnValueminus95504 = actualFunminus95506.apply(this, arguments);
  while (recurP95507(returnValueminus95504))    {
    returnValueminus95504 = actualFunminus95506.apply(this, returnValueminus95504.args);
    };
  return returnValueminus95504;
  }));
