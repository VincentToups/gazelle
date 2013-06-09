define([], (function ()  {
  var currentModule5261 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModule5261 = value;
    });
  (function (arguments)    {
    // define+
    // macro - no dynamic value.
    ;
    // define-macro+
    // macro - no dynamic value.
    ;
    // define-pattern+
    // macro - no dynamic value.
    ;
    currentModule5261.definedPredicate = (function (x)      {
      return (!((((typeof x))===("undefined"))));
      });
    currentModule5261.undefinedPredicate = (function (x)      {
      return (((typeof x))===("undefined"));
      });
    currentModule5261.numberPredicate = (function (o)      {
      return (((typeof o))===("number"));
      });
    currentModule5261.stringPredicate = (function (o)      {
      return (((typeof o))===("string"));
      });
    currentModule5261.arrayPredicate = (function (o)      {
      return (o instanceof Array);
      });
    currentModule5261.emptyPredicate = (function (o)      {
      return (0===o.length);
      });
    // collect{}
    // macro - no dynamic value.
    ;
    // @
    // macro - no dynamic value.
    ;
    var apply = (function (f, lst)      {
      return f.apply(f, lst);
      });
    currentModule5261.TripleEqualminus_ = (function (partial)      {
      return (function (open)        {
        return (open===partial);
        });
      });
    // when
    // macro - no dynamic value.
    ;
    // unless
    // macro - no dynamic value.
    ;
    currentModule5261.Delay = (function (lambdaExpr)      {
      this.lambdaExpr = lambdaExpr;
      return this;
      });
    currentModule5261.Delay.prototype.value = (function ()      {
      return this.lambdaExpr();
      });
    // delay
    // macro - no dynamic value.
    ;
    currentModule5261.undelay = (function (o)      {
      return (function (arguments)        {
        var G5498 = undefined;
        var G5499 = o;
        G5498 = (function (arguments)          {
          var matchVal5500 = G5499;
          var matchFunExpr5502 = (function (G5501)            {
            return (G5501 instanceof currentModule5261.Delay);
            });
          if ((!(matchFunExpr5502(matchVal5500))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var delayObject = matchVal5500;
          return delayObject.value();
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G5498))))          {
          return G5498;
          };
        throw ((("match-fail at ((match o ((instance Delay delay-object) (delay-object\\.value)))) for value ")+(JSON.stringify(G5499))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    // define-to
    // macro - no dynamic value.
    ;
    // for*
    // macro - no dynamic value.
    ;
    // collecting
    // macro - no dynamic value.
    ;
    // collect-for
    // macro - no dynamic value.
    ;
    currentModule5261.range = (function ()      {
      var returnValue5557 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil5556",
          args:arguments
        };
        });
      var recurP5560 = (function (val5561)        {
        if ((("undefined")===((typeof val5561))))          {
          return false;
          };
        return (val5561.recurSigil===("recurSigil5556"));
        });
      var actualFun5559 = (function ()        {
        return (function (arguments)          {
          var G5563 = undefined;
          var G5564 = Array.prototype.slice.apply(arguments);
          G5563 = (function (arguments)            {
            var matchVal5565 = G5564;
            if ((!((("object")===((typeof matchVal5565))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((4===matchVal5565.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchVal5565[0];
            var step = matchVal5565[1];
            var stop = matchVal5565[2];
            var transform = matchVal5565[3];
            var out = [];
            for (var i = start;(i<stop);i = (i+step))              {
              out.push(transform(i));
              };
            return out;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G5563))))            {
            return G5563;
            };
          G5563 = (function (arguments)            {
            var matchVal5566 = G5564;
            if ((!((("object")===((typeof matchVal5566))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchVal5566.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchVal5566[0];
            var step = matchVal5566[1];
            var stop = matchVal5566[2];
            return recur(start, step, stop, (function (v)              {
              return v;
              }));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G5563))))            {
            return G5563;
            };
          G5563 = (function (arguments)            {
            var matchVal5567 = G5564;
            if ((!((("object")===((typeof matchVal5567))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchVal5567.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchVal5567[0];
            var stop = matchVal5567[1];
            return recur(start, 1, stop, (function (v)              {
              return v;
              }));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G5563))))            {
            return G5563;
            };
          G5563 = (function (arguments)            {
            var matchVal5568 = G5564;
            if ((!((("object")===((typeof matchVal5568))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchVal5568.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var stop = matchVal5568[0];
            return recur(0, 1, stop, (function (v)              {
              return v;
              }));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G5563))))            {
            return G5563;
            };
          G5563 = (function (arguments)            {
            var matchVal5569 = G5564;
            var anythingElse5562 = matchVal5569;
            throw ((("Match fail in hooves/hooves-range against: ")+anythingElse5562));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G5563))))            {
            return G5563;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: start step stop transform] (_newline-sequence (var out [:]) (for ((var i start) (_< i stop) (set! i (_+ i step))) (out\\.push (transform i))) out)) ([: start step stop] (_newline-sequence (recur start step stop (lambda (v) v)))) ([: start stop] (_newline-sequence (recur start 1 stop (lambda (v) v)))) ([: stop] (_newline-sequence (recur 0 1 stop (lambda (v) v)))) (anything-else-5562 (_throw (_+ ''Match fail in hooves/hooves-range against: '' anything-else-5562))))) for value ")+(JSON.stringify(G5564))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue5557 = actualFun5559.apply(this, arguments);
      while (recurP5560(returnValue5557))        {
        returnValue5557 = actualFun5559.apply(this, returnValue5557.args);
        };
      return returnValue5557;
      });
    currentModule5261.pureSort = (function ()      {
      var returnValue5593 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil5592",
          args:arguments
        };
        });
      var recurP5596 = (function (val5597)        {
        if ((("undefined")===((typeof val5597))))          {
          return false;
          };
        return (val5597.recurSigil===("recurSigil5592"));
        });
      var actualFun5595 = (function ()        {
        return (function (arguments)          {
          var G5599 = undefined;
          var G5600 = Array.prototype.slice.apply(arguments);
          G5599 = (function (arguments)            {
            var matchVal5601 = G5600;
            if ((!((("object")===((typeof matchVal5601))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal5601.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart5602 = Array.prototype.slice.call(matchVal5601, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart5602))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart5602.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var array = matchArraySimplePart5602[0];
            var matchArrayTailPart5603 = Array.prototype.slice.call(matchVal5601, 1);
            var matchTemp5604 = matchArrayTailPart5603[0];
            var previousMatchSucceeded5605 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTemp5604))))                {
                previousMatchSucceeded5605 = false;
                };
              var sortFun = matchTemp5604;
              if (previousMatchSucceeded5605)                {
                break;
                };
              previousMatchSucceeded5605 = true;
              case 1:
              var fResult5606 = ((function (x)                {
                return (function (a, b)                  {
                  return ((currentModule5261.lessThan(a, b))?(-1) : (1));
                  });
                }))(matchTemp5604);
              if ((fResult5606===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceeded5605 = false;
                };
              var sortFun = fResult5606;
              if (previousMatchSucceeded5605)                {
                break;
                };
              previousMatchSucceeded5605 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var copy = array.concat([]);
            copy.sort(sortFun);
            return copy;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G5599))))            {
            return G5599;
            };
          G5599 = (function (arguments)            {
            var matchVal5607 = G5600;
            var anythingElse5598 = matchVal5607;
            throw ((("Match fail in hooves/hooves-pure-sort against: ")+anythingElse5598));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G5599))))            {
            return G5599;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: array :- (opt sort-fun (lambda (a b) (if (< a b) -1 1)))] (_newline-sequence (var copy (\\.\\. array (concat [:]))) (\\.\\. copy (sort sort-fun)) copy)) (anything-else-5598 (_throw (_+ ''Match fail in hooves/hooves-pure-sort against: '' anything-else-5598))))) for value ")+(JSON.stringify(G5600))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue5593 = actualFun5595.apply(this, arguments);
      while (recurP5596(returnValue5593))        {
        returnValue5593 = actualFun5595.apply(this, returnValue5593.args);
        };
      return returnValue5593;
      });
    // with-slots
    // macro - no dynamic value.
    ;
    currentModule5261.plus = (function ()      {
      var returnValue5637 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil5636",
          args:arguments
        };
        });
      var recurP5640 = (function (val5641)        {
        if ((("undefined")===((typeof val5641))))          {
          return false;
          };
        return (val5641.recurSigil===("recurSigil5636"));
        });
      var actualFun5639 = (function ()        {
        return (function (arguments)          {
          var G5643 = undefined;
          var G5644 = Array.prototype.slice.apply(arguments);
          G5643 = (function (arguments)            {
            var matchVal5645 = G5644;
            if ((!((("object")===((typeof matchVal5645))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal5645.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart5646 = Array.prototype.slice.call(matchVal5645, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart5646))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart5646.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart5646[0];
            var matchArrayTailPart5647 = Array.prototype.slice.call(matchVal5645, 1);
            var tl = matchArrayTailPart5647;
            var result = hd;
            for (i in (tl))              {
              result = (result+(tl[i]));
              };
            return result;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G5643))))            {
            return G5643;
            };
          G5643 = (function (arguments)            {
            var matchVal5648 = G5644;
            var anythingElse5642 = matchVal5648;
            throw ((("Match fail in hooves/hooves-+ against: ")+anythingElse5642));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G5643))))            {
            return G5643;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result)) (anything-else-5642 (_throw (_+ ''Match fail in hooves/hooves-+ against: '' anything-else-5642))))) for value ")+(JSON.stringify(G5644))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue5637 = actualFun5639.apply(this, arguments);
      while (recurP5640(returnValue5637))        {
        returnValue5637 = actualFun5639.apply(this, returnValue5637.args);
        };
      return returnValue5637;
      });
    currentModule5261.minus = (function ()      {
      var returnValue5672 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil5671",
          args:arguments
        };
        });
      var recurP5675 = (function (val5676)        {
        if ((("undefined")===((typeof val5676))))          {
          return false;
          };
        return (val5676.recurSigil===("recurSigil5671"));
        });
      var actualFun5674 = (function ()        {
        return (function (arguments)          {
          var G5678 = undefined;
          var G5679 = Array.prototype.slice.apply(arguments);
          G5678 = (function (arguments)            {
            var matchVal5680 = G5679;
            if ((!((("object")===((typeof matchVal5680))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal5680.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart5681 = Array.prototype.slice.call(matchVal5680, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart5681))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart5681.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart5681[0];
            var matchArrayTailPart5682 = Array.prototype.slice.call(matchVal5680, 1);
            var tl = matchArrayTailPart5682;
            return (((tl.length>0))?((hd-(apply(currentModule5261.plus, tl)))) : ((-(hd))));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G5678))))            {
            return G5678;
            };
          G5678 = (function (arguments)            {
            var matchVal5683 = G5679;
            var anythingElse5677 = matchVal5683;
            throw ((("Match fail in hooves/hooves-- against: ")+anythingElse5677));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G5678))))            {
            return G5678;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (if (_> tl\\.length 0) (_- hd (apply + tl)) (_- hd)))) (anything-else-5677 (_throw (_+ ''Match fail in hooves/hooves-- against: '' anything-else-5677))))) for value ")+(JSON.stringify(G5679))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue5672 = actualFun5674.apply(this, arguments);
      while (recurP5675(returnValue5672))        {
        returnValue5672 = actualFun5674.apply(this, returnValue5672.args);
        };
      return returnValue5672;
      });
    currentModule5261.times = (function ()      {
      var returnValue5707 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil5706",
          args:arguments
        };
        });
      var recurP5710 = (function (val5711)        {
        if ((("undefined")===((typeof val5711))))          {
          return false;
          };
        return (val5711.recurSigil===("recurSigil5706"));
        });
      var actualFun5709 = (function ()        {
        return (function (arguments)          {
          var G5713 = undefined;
          var G5714 = Array.prototype.slice.apply(arguments);
          G5713 = (function (arguments)            {
            var matchVal5715 = G5714;
            if ((!((("object")===((typeof matchVal5715))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal5715.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart5716 = Array.prototype.slice.call(matchVal5715, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart5716))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart5716.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart5716[0];
            var matchArrayTailPart5717 = Array.prototype.slice.call(matchVal5715, 1);
            var tl = matchArrayTailPart5717;
            var result = hd;
            for (i in (tl))              {
              result = (result*(tl[i]));
              };
            return result;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G5713))))            {
            return G5713;
            };
          G5713 = (function (arguments)            {
            var matchVal5718 = G5714;
            var anythingElse5712 = matchVal5718;
            throw ((("Match fail in hooves/hooves-* against: ")+anythingElse5712));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G5713))))            {
            return G5713;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result)) (anything-else-5712 (_throw (_+ ''Match fail in hooves/hooves-* against: '' anything-else-5712))))) for value ")+(JSON.stringify(G5714))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue5707 = actualFun5709.apply(this, arguments);
      while (recurP5710(returnValue5707))        {
        returnValue5707 = actualFun5709.apply(this, returnValue5707.args);
        };
      return returnValue5707;
      });
    currentModule5261.divide = (function ()      {
      var returnValue5742 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil5741",
          args:arguments
        };
        });
      var recurP5745 = (function (val5746)        {
        if ((("undefined")===((typeof val5746))))          {
          return false;
          };
        return (val5746.recurSigil===("recurSigil5741"));
        });
      var actualFun5744 = (function ()        {
        return (function (arguments)          {
          var G5748 = undefined;
          var G5749 = Array.prototype.slice.apply(arguments);
          G5748 = (function (arguments)            {
            var matchVal5750 = G5749;
            if ((!((("object")===((typeof matchVal5750))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal5750.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart5751 = Array.prototype.slice.call(matchVal5750, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart5751))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart5751.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart5751[0];
            var matchArrayTailPart5752 = Array.prototype.slice.call(matchVal5750, 1);
            var tl = matchArrayTailPart5752;
            return (hd/(apply(currentModule5261.times, tl)));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G5748))))            {
            return G5748;
            };
          G5748 = (function (arguments)            {
            var matchVal5753 = G5749;
            var anythingElse5747 = matchVal5753;
            throw ((("Match fail in hooves/hooves-/ against: ")+anythingElse5747));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G5748))))            {
            return G5748;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (_/ hd (apply * tl)))) (anything-else-5747 (_throw (_+ ''Match fail in hooves/hooves-/ against: '' anything-else-5747))))) for value ")+(JSON.stringify(G5749))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue5742 = actualFun5744.apply(this, arguments);
      while (recurP5745(returnValue5742))        {
        returnValue5742 = actualFun5744.apply(this, returnValue5742.args);
        };
      return returnValue5742;
      });
    // define-external-binop
    // macro - no dynamic value.
    ;
    // define-external-binops
    // macro - no dynamic value.
    ;
    currentModule5261.lessThan = (function (G5763, G5764)      {
      return (G5763<G5764);
      });
    currentModule5261.lessThanequal = (function (G5790, G5791)      {
      return (G5790<=G5791);
      });
    currentModule5261.greaterThan = (function (G5817, G5818)      {
      return (G5817>G5818);
      });
    currentModule5261.greaterThanequal = (function (G5844, G5845)      {
      return (G5844>=G5845);
      });
    currentModule5261.ampersand = (function (G5871, G5872)      {
      return (G5871&G5872);
      });
    currentModule5261.pipe = (function (G5898, G5899)      {
      return (G5898|G5899);
      });
    currentModule5261.equalequal = (function (G5925, G5926)      {
      return (G5925==G5926);
      });
    currentModule5261.TripleEqualminus = (function (G5952, G5953)      {
      return (G5952===G5953);
      });
    currentModule5261.modsign = (function (G5979, G5980)      {
      return (G5979%G5980);
      });
    currentModule5261.caret = (function (G6006, G6007)      {
      return (G6006^G6007);
      });
    currentModule5261.lessThanlessThan = (function (G6033, G6034)      {
      return (G6033<<G6034);
      });
    currentModule5261.greaterThangreaterThan = (function (G6060, G6061)      {
      return (G6060>>G6061);
      });
    currentModule5261.greaterThangreaterThangreaterThan = (function (G6087, G6088)      {
      return (G6087>>>G6088);
      });
    // &&
    // macro - no dynamic value.
    ;
    // ||
    // macro - no dynamic value.
    ;
    currentModule5261.bang = (function (o)      {
      return (!(o));
      });
    // incr
    // macro - no dynamic value.
    ;
    // decr
    // macro - no dynamic value.
    ;
    // string
    // pattern - no dynamic value.
    ;
    currentModule5261.plist = (function ()      {
      var returnValue6186 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil6185",
          args:arguments
        };
        });
      var recurP6189 = (function (val6190)        {
        if ((("undefined")===((typeof val6190))))          {
          return false;
          };
        return (val6190.recurSigil===("recurSigil6185"));
        });
      var actualFun6188 = (function ()        {
        return (function (arguments)          {
          var G6192 = undefined;
          var G6193 = Array.prototype.slice.apply(arguments);
          G6192 = (function (arguments)            {
            var matchVal6194 = G6193;
            if ((!((("object")===((typeof matchVal6194))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal6194.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart6195 = Array.prototype.slice.call(matchVal6194, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePart6195))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePart6195.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPart6196 = Array.prototype.slice.call(matchVal6194, 0);
            var parts = matchArrayTailPart6196;
            var out = {              
              
            };
            for (var i = nil;currentModule5261.lessThan(i, parts.length);i = currentModule5261.plus(i, 2))              {
              out[parts[i]] = parts[currentModule5261.plus(i, 1)];
              };
            return out;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G6192))))            {
            return G6192;
            };
          G6192 = (function (arguments)            {
            var matchVal6197 = G6193;
            var anythingElse6191 = matchVal6197;
            throw ((("Match fail in hooves/hooves-plist against: ")+anythingElse6191));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G6192))))            {
            return G6192;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail parts)] (_newline-sequence (var out ({})) (for ((var i) (< i parts\\.length) (set! i (+ i 2))) (set! [out [parts i]] [parts (+ i 1)])) out)) (anything-else-6191 (_throw (_+ ''Match fail in hooves/hooves-plist against: '' anything-else-6191))))) for value ")+(JSON.stringify(G6193))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue6186 = actualFun6188.apply(this, arguments);
      while (recurP6189(returnValue6186))        {
        returnValue6186 = actualFun6188.apply(this, returnValue6186.args);
        };
      return returnValue6186;
      });
    // as-options{}
    // pattern - no dynamic value.
    ;
    currentModule5261.rx = (function ()      {
      var returnValue6227 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil6226",
          args:arguments
        };
        });
      var recurP6230 = (function (val6231)        {
        if ((("undefined")===((typeof val6231))))          {
          return false;
          };
        return (val6231.recurSigil===("recurSigil6226"));
        });
      var actualFun6229 = (function ()        {
        return (function (arguments)          {
          var G6233 = undefined;
          var G6234 = Array.prototype.slice.apply(arguments);
          G6233 = (function (arguments)            {
            var matchVal6235 = G6234;
            if ((!((("object")===((typeof matchVal6235))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal6235.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart6236 = Array.prototype.slice.call(matchVal6235, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart6236))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart6236.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var s = matchArraySimplePart6236[0];
            var matchArrayTailPart6237 = Array.prototype.slice.call(matchVal6235, 1);
            var matchTemp6238 = matchArrayTailPart6237[0];
            var previousMatchSucceeded6239 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTemp6238))))                {
                previousMatchSucceeded6239 = false;
                };
              var args = matchTemp6238;
              if (previousMatchSucceeded6239)                {
                break;
                };
              previousMatchSucceeded6239 = true;
              case 1:
              var fResult6240 = ((function (x)                {
                return "g";
                }))(matchTemp6238);
              if ((fResult6240===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceeded6239 = false;
                };
              var args = fResult6240;
              if (previousMatchSucceeded6239)                {
                break;
                };
              previousMatchSucceeded6239 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            return (new (RegExp)(s, args));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G6233))))            {
            return G6233;
            };
          G6233 = (function (arguments)            {
            var matchVal6241 = G6234;
            var anythingElse6232 = matchVal6241;
            throw ((("Match fail in hooves/hooves-rx against: ")+anythingElse6232));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G6233))))            {
            return G6233;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: s :- (opt args ''g'')] (_newline-sequence (new RegExp s args))) (anything-else-6232 (_throw (_+ ''Match fail in hooves/hooves-rx against: '' anything-else-6232))))) for value ")+(JSON.stringify(G6234))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue6227 = actualFun6229.apply(this, arguments);
      while (recurP6230(returnValue6227))        {
        returnValue6227 = actualFun6229.apply(this, returnValue6227.args);
        };
      return returnValue6227;
      });
    currentModule5261.prefix = (function (i, ra)      {
      return [i].concat(ra);
      });
    var pushdividereturn = (function (item, array)      {
      array.push(item);
      return array;
      });
    var plistToObjectHelper = (function ()      {
      var returnValue6265 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil6264",
          args:arguments
        };
        });
      var recurP6268 = (function (val6269)        {
        if ((("undefined")===((typeof val6269))))          {
          return false;
          };
        return (val6269.recurSigil===("recurSigil6264"));
        });
      var actualFun6267 = (function ()        {
        return (function (arguments)          {
          var G6271 = undefined;
          var G6272 = Array.prototype.slice.apply(arguments);
          G6271 = (function (arguments)            {
            var matchVal6273 = G6272;
            if ((!((("object")===((typeof matchVal6273))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchVal6273.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp6274 = matchVal6273[0];
            var matchTemp6275 = matchVal6273[1];
            var objectAcc = matchTemp6274;
            if ((!((("object")===((typeof matchTemp6275))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchTemp6275.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return objectAcc;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G6271))))            {
            return G6271;
            };
          G6271 = (function (arguments)            {
            var matchVal6276 = G6272;
            if ((!((("object")===((typeof matchVal6276))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchVal6276.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp6277 = matchVal6276[0];
            var matchTemp6278 = matchVal6276[1];
            var objectAcc = matchTemp6277;
            if ((!((("object")===((typeof matchTemp6278))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchTemp6278.length>=2))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart6279 = Array.prototype.slice.call(matchTemp6278, 0, 2);
            if ((!((("object")===((typeof matchArraySimplePart6279))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchArraySimplePart6279.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp6280 = matchArraySimplePart6279[0];
            var matchTemp6281 = matchArraySimplePart6279[1];
            var matchFunExpr6286 = (function (G6285)              {
              return (((typeof G6285))===("string"));
              });
            if ((!(matchFunExpr6286(matchTemp6280))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var key = matchTemp6280;
            var value = matchTemp6281;
            var matchArrayTailPart6287 = Array.prototype.slice.call(matchTemp6278, 2);
            var rest = matchArrayTailPart6287;
            objectAcc[key] = value;
            return recur(objectAcc, rest);
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G6271))))            {
            return G6271;
            };
          G6271 = (function (arguments)            {
            var matchVal6288 = G6272;
            var anythingElse6270 = matchVal6288;
            throw ((("Match fail in plist->object-helper against: ")+anythingElse6270));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G6271))))            {
            return G6271;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: object-acc [:]] (_newline-sequence object-acc)) ([: object-acc [: (string key) value (tail rest)]] (_newline-sequence (set! [object-acc key] value) (recur object-acc rest))) (anything-else-6270 (_throw (_+ ''Match fail in plist->object-helper against: '' anything-else-6270))))) for value ")+(JSON.stringify(G6272))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue6265 = actualFun6267.apply(this, arguments);
      while (recurP6268(returnValue6265))        {
        returnValue6265 = actualFun6267.apply(this, returnValue6265.args);
        };
      return returnValue6265;
      });
    currentModule5261.plistToObject = (function ()      {
      var returnValue6312 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil6311",
          args:arguments
        };
        });
      var recurP6315 = (function (val6316)        {
        if ((("undefined")===((typeof val6316))))          {
          return false;
          };
        return (val6316.recurSigil===("recurSigil6311"));
        });
      var actualFun6314 = (function ()        {
        return (function (arguments)          {
          var G6318 = undefined;
          var G6319 = Array.prototype.slice.apply(arguments);
          G6318 = (function (arguments)            {
            var matchVal6320 = G6319;
            if ((!((("object")===((typeof matchVal6320))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal6320.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart6321 = Array.prototype.slice.call(matchVal6320, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePart6321))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePart6321.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPart6322 = Array.prototype.slice.call(matchVal6320, 0);
            var kvPairs = matchArrayTailPart6322;
            return plistToObjectHelper({              
              
            }, kvPairs);
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G6318))))            {
            return G6318;
            };
          G6318 = (function (arguments)            {
            var matchVal6323 = G6319;
            var anythingElse6317 = matchVal6323;
            throw ((("Match fail in hooves/hooves-plist->object against: ")+anythingElse6317));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G6318))))            {
            return G6318;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail kv-pairs)] (_newline-sequence (plist->object-helper ({}) kv-pairs))) (anything-else-6317 (_throw (_+ ''Match fail in hooves/hooves-plist->object against: '' anything-else-6317))))) for value ")+(JSON.stringify(G6319))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue6312 = actualFun6314.apply(this, arguments);
      while (recurP6315(returnValue6312))        {
        returnValue6312 = actualFun6314.apply(this, returnValue6312.args);
        };
      return returnValue6312;
      });
    currentModule5261.filter = (function ()      {
      var returnValue6354 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil6353",
          args:arguments
        };
        });
      var recurP6357 = (function (val6358)        {
        if ((("undefined")===((typeof val6358))))          {
          return false;
          };
        return (val6358.recurSigil===("recurSigil6353"));
        });
      var actualFun6356 = (function ()        {
        return (function (arguments)          {
          var G6360 = undefined;
          var G6361 = Array.prototype.slice.apply(arguments);
          G6360 = (function (arguments)            {
            var matchVal6362 = G6361;
            if ((!((("object")===((typeof matchVal6362))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchVal6362.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp6363 = matchVal6362[0];
            var matchTemp6364 = matchVal6362[1];
            var matchTemp6365 = matchVal6362[2];
            var fun = matchTemp6363;
            if ((!((("object")===((typeof matchTemp6364))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchTemp6364.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var acc = matchTemp6365;
            return acc;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G6360))))            {
            return G6360;
            };
          G6360 = (function (arguments)            {
            var matchVal6366 = G6361;
            if ((!((("object")===((typeof matchVal6366))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchVal6366.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp6367 = matchVal6366[0];
            var matchTemp6368 = matchVal6366[1];
            var matchTemp6369 = matchVal6366[2];
            var fun = matchTemp6367;
            if ((!((("object")===((typeof matchTemp6368))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchTemp6368.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart6370 = Array.prototype.slice.call(matchTemp6368, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart6370))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart6370.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart6370[0];
            var matchArrayTailPart6371 = Array.prototype.slice.call(matchTemp6368, 1);
            var tl = matchArrayTailPart6371;
            var acc = matchTemp6369;
            var r = fun(hd);
            return ((r)?(recur(fun, tl, pushdividereturn(hd, acc))) : (recur(fun, tl, acc)));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G6360))))            {
            return G6360;
            };
          G6360 = (function (arguments)            {
            var matchVal6372 = G6361;
            if ((!((("object")===((typeof matchVal6372))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchVal6372.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var fun = matchVal6372[0];
            var ra = matchVal6372[1];
            return recur(fun, ra, []);
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G6360))))            {
            return G6360;
            };
          G6360 = (function (arguments)            {
            var matchVal6373 = G6361;
            var anythingElse6359 = matchVal6373;
            throw ((("Match fail in hooves/hooves-filter against: ")+anythingElse6359));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G6360))))            {
            return G6360;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: fun [:] acc] (_newline-sequence acc)) ([: fun [: hd (tail tl)] acc] (_newline-sequence (var r (fun hd)) (if r (recur fun tl (push/return hd acc)) (recur fun tl acc)))) ([: fun ra] (_newline-sequence (recur fun ra [:]))) (anything-else-6359 (_throw (_+ ''Match fail in hooves/hooves-filter against: '' anything-else-6359))))) for value ")+(JSON.stringify(G6361))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue6354 = actualFun6356.apply(this, arguments);
      while (recurP6357(returnValue6354))        {
        returnValue6354 = actualFun6356.apply(this, returnValue6354.args);
        };
      return returnValue6354;
      });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModule5261;
  }))