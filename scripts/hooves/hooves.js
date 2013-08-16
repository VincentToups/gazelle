define([], (function ()  {
  var currentModule13262 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModule13262 = value;
    });
  (function (arguments)    {
    // _current-module
    // macro - no dynamic value.
    ;
    // define+
    // macro - no dynamic value.
    ;
    // define-macro+
    // macro - no dynamic value.
    ;
    // define-pattern+
    // macro - no dynamic value.
    ;
    currentModule13262.definedPredicate = (function (x)      {
      return (!((((typeof x))===("undefined"))));
      });
    currentModule13262.undefinedPredicate = (function (x)      {
      return (((typeof x))===("undefined"));
      });
    currentModule13262.numberPredicate = (function (o)      {
      return (((typeof o))===("number"));
      });
    currentModule13262.stringPredicate = (function (o)      {
      return (((typeof o))===("string"));
      });
    currentModule13262.arrayPredicate = (function (o)      {
      return (o instanceof Array);
      });
    currentModule13262.emptyPredicate = (function (o)      {
      return (0===o.length);
      });
    currentModule13262.nullPredicate = (function (x)      {
      return currentModule13262.TripleEqualminus(null, x);
      });
    // collect{}
    // macro - no dynamic value.
    ;
    // collect->
    // macro - no dynamic value.
    ;
    // @
    // macro - no dynamic value.
    ;
    var apply = (function (f, lst)      {
      return f.apply(f, lst);
      });
    currentModule13262.TripleEqualminus_ = (function (partial)      {
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
    currentModule13262.Delay = (function (lambdaExpr)      {
      this.lambdaExpr = lambdaExpr;
      return this;
      });
    currentModule13262.Delay.prototype.value = (function ()      {
      return this.lambdaExpr();
      });
    // delay
    // macro - no dynamic value.
    ;
    currentModule13262.undelay = (function (o)      {
      return (function (arguments)        {
        var G13528 = undefined;
        var G13529 = o;
        G13528 = (function (arguments)          {
          var matchVal13530 = G13529;
          var matchFunExpr13532 = (function (G13531)            {
            return (G13531 instanceof currentModule13262.Delay);
            });
          if ((!(matchFunExpr13532(matchVal13530))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var delayObject = matchVal13530;
          return delayObject.value();
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G13528))))          {
          return G13528;
          };
        throw ((("match-fail at ((match o ((instance Delay delay-object) (delay-object\\.value)))) for value ")+(JSON.stringify(G13529))));
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
    currentModule13262.range = (function ()      {
      var returnValue13587 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil13586",
          args:arguments
        };
        });
      var recurP13590 = (function (val13591)        {
        if ((("undefined")===((typeof val13591))))          {
          return false;
          };
        return (val13591.recurSigil===("recurSigil13586"));
        });
      var actualFun13589 = (function ()        {
        return (function (arguments)          {
          var G13593 = undefined;
          var G13594 = Array.prototype.slice.apply(arguments);
          G13593 = (function (arguments)            {
            var matchVal13595 = G13594;
            if ((!((("object")===((typeof matchVal13595))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((4===matchVal13595.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchVal13595[0];
            var step = matchVal13595[1];
            var stop = matchVal13595[2];
            var transform = matchVal13595[3];
            var out = [];
            for (var i = start;(i<stop);i = ((i)+(step)))              {
              out.push(transform(i));
              };
            return out;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G13593))))            {
            return G13593;
            };
          G13593 = (function (arguments)            {
            var matchVal13596 = G13594;
            if ((!((("object")===((typeof matchVal13596))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchVal13596.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchVal13596[0];
            var step = matchVal13596[1];
            var stop = matchVal13596[2];
            return recur(start, step, stop, (function (v)              {
              return v;
              }));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G13593))))            {
            return G13593;
            };
          G13593 = (function (arguments)            {
            var matchVal13597 = G13594;
            if ((!((("object")===((typeof matchVal13597))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchVal13597.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchVal13597[0];
            var stop = matchVal13597[1];
            return recur(start, 1, stop, (function (v)              {
              return v;
              }));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G13593))))            {
            return G13593;
            };
          G13593 = (function (arguments)            {
            var matchVal13598 = G13594;
            if ((!((("object")===((typeof matchVal13598))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchVal13598.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var stop = matchVal13598[0];
            return recur(0, 1, stop, (function (v)              {
              return v;
              }));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G13593))))            {
            return G13593;
            };
          G13593 = (function (arguments)            {
            var matchVal13599 = G13594;
            var anythingElse13592 = matchVal13599;
            throw ((("Match fail in hooves/hooves-range against: ")+(anythingElse13592)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G13593))))            {
            return G13593;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: start step stop transform] (_newline-sequence (var out [:]) (for ((var i start) (_< i stop) (set! i (_+ i step))) (out\\.push (transform i))) out)) ([: start step stop] (_newline-sequence (recur start step stop (lambda (v) v)))) ([: start stop] (_newline-sequence (recur start 1 stop (lambda (v) v)))) ([: stop] (_newline-sequence (recur 0 1 stop (lambda (v) v)))) (anything-else-13592 (_throw (_+ ''Match fail in hooves/hooves-range against: '' anything-else-13592))))) for value ")+(JSON.stringify(G13594))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue13587 = actualFun13589.apply(this, arguments);
      while (recurP13590(returnValue13587))        {
        returnValue13587 = actualFun13589.apply(this, returnValue13587.args);
        };
      return returnValue13587;
      });
    currentModule13262.pureSort = (function ()      {
      var returnValue13623 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil13622",
          args:arguments
        };
        });
      var recurP13626 = (function (val13627)        {
        if ((("undefined")===((typeof val13627))))          {
          return false;
          };
        return (val13627.recurSigil===("recurSigil13622"));
        });
      var actualFun13625 = (function ()        {
        return (function (arguments)          {
          var G13629 = undefined;
          var G13630 = Array.prototype.slice.apply(arguments);
          G13629 = (function (arguments)            {
            var matchVal13631 = G13630;
            if ((!((("object")===((typeof matchVal13631))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal13631.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart13632 = Array.prototype.slice.call(matchVal13631, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart13632))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart13632.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var array = matchArraySimplePart13632[0];
            var matchArrayTailPart13633 = Array.prototype.slice.call(matchVal13631, 1);
            var matchTemp13634 = matchArrayTailPart13633[0];
            var previousMatchSucceeded13635 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTemp13634))))                {
                previousMatchSucceeded13635 = false;
                };
              var sortFun = matchTemp13634;
              if (previousMatchSucceeded13635)                {
                break;
                };
              previousMatchSucceeded13635 = true;
              case 1:
              var fResult13636 = ((function (x)                {
                return (function (a, b)                  {
                  return ((currentModule13262.lessThan(a, b))?(-1) : (1));
                  });
                }))(matchTemp13634);
              if ((fResult13636===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceeded13635 = false;
                };
              var sortFun = fResult13636;
              if (previousMatchSucceeded13635)                {
                break;
                };
              previousMatchSucceeded13635 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var copy = array.concat([]);
            copy.sort(sortFun);
            return copy;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G13629))))            {
            return G13629;
            };
          G13629 = (function (arguments)            {
            var matchVal13637 = G13630;
            var anythingElse13628 = matchVal13637;
            throw ((("Match fail in hooves/hooves-pure-sort against: ")+(anythingElse13628)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G13629))))            {
            return G13629;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: array :- (opt sort-fun (lambda (a b) (if (< a b) -1 1)))] (_newline-sequence (var copy (\\.\\. array (concat [:]))) (\\.\\. copy (sort sort-fun)) copy)) (anything-else-13628 (_throw (_+ ''Match fail in hooves/hooves-pure-sort against: '' anything-else-13628))))) for value ")+(JSON.stringify(G13630))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue13623 = actualFun13625.apply(this, arguments);
      while (recurP13626(returnValue13623))        {
        returnValue13623 = actualFun13625.apply(this, returnValue13623.args);
        };
      return returnValue13623;
      });
    // with-slots
    // macro - no dynamic value.
    ;
    currentModule13262.plus = (function ()      {
      var returnValue13667 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil13666",
          args:arguments
        };
        });
      var recurP13670 = (function (val13671)        {
        if ((("undefined")===((typeof val13671))))          {
          return false;
          };
        return (val13671.recurSigil===("recurSigil13666"));
        });
      var actualFun13669 = (function ()        {
        return (function (arguments)          {
          var G13673 = undefined;
          var G13674 = Array.prototype.slice.apply(arguments);
          G13673 = (function (arguments)            {
            var matchVal13675 = G13674;
            if ((!((("object")===((typeof matchVal13675))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal13675.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart13676 = Array.prototype.slice.call(matchVal13675, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart13676))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart13676.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart13676[0];
            var matchArrayTailPart13677 = Array.prototype.slice.call(matchVal13675, 1);
            var tl = matchArrayTailPart13677;
            var result = hd;
            for (i in (tl))              {
              result = ((result)+(tl[i]));
              };
            return result;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G13673))))            {
            return G13673;
            };
          G13673 = (function (arguments)            {
            var matchVal13678 = G13674;
            var anythingElse13672 = matchVal13678;
            throw ((("Match fail in hooves/hooves-+ against: ")+(anythingElse13672)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G13673))))            {
            return G13673;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result)) (anything-else-13672 (_throw (_+ ''Match fail in hooves/hooves-+ against: '' anything-else-13672))))) for value ")+(JSON.stringify(G13674))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue13667 = actualFun13669.apply(this, arguments);
      while (recurP13670(returnValue13667))        {
        returnValue13667 = actualFun13669.apply(this, returnValue13667.args);
        };
      return returnValue13667;
      });
    currentModule13262.minus = (function ()      {
      var returnValue13702 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil13701",
          args:arguments
        };
        });
      var recurP13705 = (function (val13706)        {
        if ((("undefined")===((typeof val13706))))          {
          return false;
          };
        return (val13706.recurSigil===("recurSigil13701"));
        });
      var actualFun13704 = (function ()        {
        return (function (arguments)          {
          var G13708 = undefined;
          var G13709 = Array.prototype.slice.apply(arguments);
          G13708 = (function (arguments)            {
            var matchVal13710 = G13709;
            if ((!((("object")===((typeof matchVal13710))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal13710.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart13711 = Array.prototype.slice.call(matchVal13710, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart13711))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart13711.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart13711[0];
            var matchArrayTailPart13712 = Array.prototype.slice.call(matchVal13710, 1);
            var tl = matchArrayTailPart13712;
            return (((tl.length>0))?(((hd)-(apply(currentModule13262.plus, tl)))) : ((-(hd))));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G13708))))            {
            return G13708;
            };
          G13708 = (function (arguments)            {
            var matchVal13713 = G13709;
            var anythingElse13707 = matchVal13713;
            throw ((("Match fail in hooves/hooves-- against: ")+(anythingElse13707)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G13708))))            {
            return G13708;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (if (_> tl\\.length 0) (_- hd (apply + tl)) (_- hd)))) (anything-else-13707 (_throw (_+ ''Match fail in hooves/hooves-- against: '' anything-else-13707))))) for value ")+(JSON.stringify(G13709))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue13702 = actualFun13704.apply(this, arguments);
      while (recurP13705(returnValue13702))        {
        returnValue13702 = actualFun13704.apply(this, returnValue13702.args);
        };
      return returnValue13702;
      });
    currentModule13262.times = (function ()      {
      var returnValue13737 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil13736",
          args:arguments
        };
        });
      var recurP13740 = (function (val13741)        {
        if ((("undefined")===((typeof val13741))))          {
          return false;
          };
        return (val13741.recurSigil===("recurSigil13736"));
        });
      var actualFun13739 = (function ()        {
        return (function (arguments)          {
          var G13743 = undefined;
          var G13744 = Array.prototype.slice.apply(arguments);
          G13743 = (function (arguments)            {
            var matchVal13745 = G13744;
            if ((!((("object")===((typeof matchVal13745))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal13745.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart13746 = Array.prototype.slice.call(matchVal13745, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart13746))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart13746.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart13746[0];
            var matchArrayTailPart13747 = Array.prototype.slice.call(matchVal13745, 1);
            var tl = matchArrayTailPart13747;
            var result = hd;
            for (i in (tl))              {
              result = ((result)*(tl[i]));
              };
            return result;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G13743))))            {
            return G13743;
            };
          G13743 = (function (arguments)            {
            var matchVal13748 = G13744;
            var anythingElse13742 = matchVal13748;
            throw ((("Match fail in hooves/hooves-* against: ")+(anythingElse13742)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G13743))))            {
            return G13743;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result)) (anything-else-13742 (_throw (_+ ''Match fail in hooves/hooves-* against: '' anything-else-13742))))) for value ")+(JSON.stringify(G13744))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue13737 = actualFun13739.apply(this, arguments);
      while (recurP13740(returnValue13737))        {
        returnValue13737 = actualFun13739.apply(this, returnValue13737.args);
        };
      return returnValue13737;
      });
    currentModule13262.divide = (function ()      {
      var returnValue13772 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil13771",
          args:arguments
        };
        });
      var recurP13775 = (function (val13776)        {
        if ((("undefined")===((typeof val13776))))          {
          return false;
          };
        return (val13776.recurSigil===("recurSigil13771"));
        });
      var actualFun13774 = (function ()        {
        return (function (arguments)          {
          var G13778 = undefined;
          var G13779 = Array.prototype.slice.apply(arguments);
          G13778 = (function (arguments)            {
            var matchVal13780 = G13779;
            if ((!((("object")===((typeof matchVal13780))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal13780.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart13781 = Array.prototype.slice.call(matchVal13780, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart13781))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart13781.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart13781[0];
            var matchArrayTailPart13782 = Array.prototype.slice.call(matchVal13780, 1);
            var tl = matchArrayTailPart13782;
            return ((hd)/((apply(currentModule13262.times, tl))));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G13778))))            {
            return G13778;
            };
          G13778 = (function (arguments)            {
            var matchVal13783 = G13779;
            var anythingElse13777 = matchVal13783;
            throw ((("Match fail in hooves/hooves-/ against: ")+(anythingElse13777)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G13778))))            {
            return G13778;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (_/ hd (apply * tl)))) (anything-else-13777 (_throw (_+ ''Match fail in hooves/hooves-/ against: '' anything-else-13777))))) for value ")+(JSON.stringify(G13779))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue13772 = actualFun13774.apply(this, arguments);
      while (recurP13775(returnValue13772))        {
        returnValue13772 = actualFun13774.apply(this, returnValue13772.args);
        };
      return returnValue13772;
      });
    currentModule13262.map1 = (function (f, a)      {
      var o = [];
      for (var i = 0;currentModule13262.lessThan(i, a.length);i = currentModule13262.plus(i, 1))        {
        o[i] = f(a[i]);
        };
      return o;
      });
    currentModule13262.min2 = (function (a, b)      {
      return ((currentModule13262.lessThan(a, b))?(a) : (b));
      });
    currentModule13262.max2 = (function (a, b)      {
      return ((currentModule13262.greaterThan(a, b))?(a) : (b));
      });
    var foldl = (function (fItAc, init, sequence)      {
      for (var i = 0;currentModule13262.lessThan(i, sequence.length);i = currentModule13262.plus(i, 1))        {
        init = fItAc(init, sequence[i]);
        };
      return init;
      });
    currentModule13262.min = (function ()      {
      var returnValue13873 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil13872",
          args:arguments
        };
        });
      var recurP13876 = (function (val13877)        {
        if ((("undefined")===((typeof val13877))))          {
          return false;
          };
        return (val13877.recurSigil===("recurSigil13872"));
        });
      var actualFun13875 = (function ()        {
        return (function (arguments)          {
          var G13879 = undefined;
          var G13880 = Array.prototype.slice.apply(arguments);
          G13879 = (function (arguments)            {
            var matchVal13881 = G13880;
            if ((!((("object")===((typeof matchVal13881))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal13881.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart13882 = Array.prototype.slice.call(matchVal13881, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePart13882))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePart13882.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPart13883 = Array.prototype.slice.call(matchVal13881, 0);
            var values = matchArrayTailPart13883;
            return foldl(currentModule13262.min2, Infinity, values);
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G13879))))            {
            return G13879;
            };
          G13879 = (function (arguments)            {
            var matchVal13884 = G13880;
            var anythingElse13878 = matchVal13884;
            throw ((("Match fail in hooves/hooves-min against: ")+(anythingElse13878)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G13879))))            {
            return G13879;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail values)] (_newline-sequence (foldl min2 Infinity values))) (anything-else-13878 (_throw (_+ ''Match fail in hooves/hooves-min against: '' anything-else-13878))))) for value ")+(JSON.stringify(G13880))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue13873 = actualFun13875.apply(this, arguments);
      while (recurP13876(returnValue13873))        {
        returnValue13873 = actualFun13875.apply(this, returnValue13873.args);
        };
      return returnValue13873;
      });
    currentModule13262.max = (function ()      {
      var returnValue13908 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil13907",
          args:arguments
        };
        });
      var recurP13911 = (function (val13912)        {
        if ((("undefined")===((typeof val13912))))          {
          return false;
          };
        return (val13912.recurSigil===("recurSigil13907"));
        });
      var actualFun13910 = (function ()        {
        return (function (arguments)          {
          var G13914 = undefined;
          var G13915 = Array.prototype.slice.apply(arguments);
          G13914 = (function (arguments)            {
            var matchVal13916 = G13915;
            if ((!((("object")===((typeof matchVal13916))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal13916.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart13917 = Array.prototype.slice.call(matchVal13916, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePart13917))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePart13917.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPart13918 = Array.prototype.slice.call(matchVal13916, 0);
            var values = matchArrayTailPart13918;
            return foldl(currentModule13262.max2, currentModule13262.minus(Infinity), values);
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G13914))))            {
            return G13914;
            };
          G13914 = (function (arguments)            {
            var matchVal13919 = G13915;
            var anythingElse13913 = matchVal13919;
            throw ((("Match fail in hooves/hooves-max against: ")+(anythingElse13913)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G13914))))            {
            return G13914;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail values)] (_newline-sequence (foldl max2 (- Infinity) values))) (anything-else-13913 (_throw (_+ ''Match fail in hooves/hooves-max against: '' anything-else-13913))))) for value ")+(JSON.stringify(G13915))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue13908 = actualFun13910.apply(this, arguments);
      while (recurP13911(returnValue13908))        {
        returnValue13908 = actualFun13910.apply(this, returnValue13908.args);
        };
      return returnValue13908;
      });
    currentModule13262.map = (function ()      {
      var returnValue13943 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil13942",
          args:arguments
        };
        });
      var recurP13946 = (function (val13947)        {
        if ((("undefined")===((typeof val13947))))          {
          return false;
          };
        return (val13947.recurSigil===("recurSigil13942"));
        });
      var actualFun13945 = (function ()        {
        return (function (arguments)          {
          var G13949 = undefined;
          var G13950 = Array.prototype.slice.apply(arguments);
          G13949 = (function (arguments)            {
            var matchVal13951 = G13950;
            if ((!((("object")===((typeof matchVal13951))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal13951.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart13952 = Array.prototype.slice.call(matchVal13951, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart13952))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart13952.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var f = matchArraySimplePart13952[0];
            var matchArrayTailPart13953 = Array.prototype.slice.call(matchVal13951, 1);
            var arrays = matchArrayTailPart13953;
            var minLen = currentModule13262.min.apply(undefined, currentModule13262.map1((function (a)              {
              return a.length;
              }), arrays));
            var out = [];
            for (var i = 0;currentModule13262.lessThan(i, minLen);i = currentModule13262.plus(i, 1))              {
              out[i] = f.apply(this, currentModule13262.map1((function (a)                {
                return a[i];
                }), arrays));
              };
            return out;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G13949))))            {
            return G13949;
            };
          G13949 = (function (arguments)            {
            var matchVal13954 = G13950;
            var anythingElse13948 = matchVal13954;
            throw ((("Match fail in hooves/hooves-map against: ")+(anythingElse13948)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G13949))))            {
            return G13949;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: f (tail arrays)] (_newline-sequence (var min-len (min\\.apply undefined (map1 (lambda (a) a\\.length) arrays))) (var out [:]) (for ((var i 0) (< i min-len) (set! i (+ i 1))) (set! [out i] (f\\.apply this (map1 (lambda (a) [a i]) arrays)))) out)) (anything-else-13948 (_throw (_+ ''Match fail in hooves/hooves-map against: '' anything-else-13948))))) for value ")+(JSON.stringify(G13950))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue13943 = actualFun13945.apply(this, arguments);
      while (recurP13946(returnValue13943))        {
        returnValue13943 = actualFun13945.apply(this, returnValue13943.args);
        };
      return returnValue13943;
      });
    currentModule13262.each = (function ()      {
      var returnValue13978 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil13977",
          args:arguments
        };
        });
      var recurP13981 = (function (val13982)        {
        if ((("undefined")===((typeof val13982))))          {
          return false;
          };
        return (val13982.recurSigil===("recurSigil13977"));
        });
      var actualFun13980 = (function ()        {
        return (function (arguments)          {
          var G13984 = undefined;
          var G13985 = Array.prototype.slice.apply(arguments);
          G13984 = (function (arguments)            {
            var matchVal13986 = G13985;
            if ((!((("object")===((typeof matchVal13986))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal13986.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart13987 = Array.prototype.slice.call(matchVal13986, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart13987))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart13987.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var f = matchArraySimplePart13987[0];
            var matchArrayTailPart13988 = Array.prototype.slice.call(matchVal13986, 1);
            var arrays = matchArrayTailPart13988;
            var minLen = currentModule13262.min.apply(undefined, currentModule13262.map1((function (a)              {
              return a.length;
              }), arrays));
            for (var i = 0;currentModule13262.lessThan(i, minLen);i = currentModule13262.plus(i, 1))              {
              f.apply(this, currentModule13262.map1((function (a)                {
                return a[i];
                }), arrays));
              };
            return undefined;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G13984))))            {
            return G13984;
            };
          G13984 = (function (arguments)            {
            var matchVal13989 = G13985;
            var anythingElse13983 = matchVal13989;
            throw ((("Match fail in hooves/hooves-each against: ")+(anythingElse13983)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G13984))))            {
            return G13984;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: f (tail arrays)] (_newline-sequence (var min-len (min\\.apply undefined (map1 (lambda (a) a\\.length) arrays))) (for ((var i 0) (< i min-len) (set! i (+ i 1))) (f\\.apply this (map1 (lambda (a) [a i]) arrays))) undefined)) (anything-else-13983 (_throw (_+ ''Match fail in hooves/hooves-each against: '' anything-else-13983))))) for value ")+(JSON.stringify(G13985))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue13978 = actualFun13980.apply(this, arguments);
      while (recurP13981(returnValue13978))        {
        returnValue13978 = actualFun13980.apply(this, returnValue13978.args);
        };
      return returnValue13978;
      });
    currentModule13262.zip = (function ()      {
      var returnValue14013 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil14012",
          args:arguments
        };
        });
      var recurP14016 = (function (val14017)        {
        if ((("undefined")===((typeof val14017))))          {
          return false;
          };
        return (val14017.recurSigil===("recurSigil14012"));
        });
      var actualFun14015 = (function ()        {
        return (function (arguments)          {
          var G14019 = undefined;
          var G14020 = Array.prototype.slice.apply(arguments);
          G14019 = (function (arguments)            {
            var matchVal14021 = G14020;
            if ((!((("object")===((typeof matchVal14021))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal14021.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart14022 = Array.prototype.slice.call(matchVal14021, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePart14022))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePart14022.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPart14023 = Array.prototype.slice.call(matchVal14021, 0);
            var arrays = matchArrayTailPart14023;
            return currentModule13262.map.apply(this, [(function ()              {
              var returnValue14025 = undefined;
              var recur = (function ()                {
                return {                  
                  recurSigil:"recurSigil14024",
                  args:arguments
                };
                });
              var recurP14028 = (function (val14029)                {
                if ((("undefined")===((typeof val14029))))                  {
                  return false;
                  };
                return (val14029.recurSigil===("recurSigil14024"));
                });
              var actualFun14027 = (function ()                {
                return (function (arguments)                  {
                  var G14031 = undefined;
                  var G14032 = Array.prototype.slice.apply(arguments);
                  G14031 = (function (arguments)                    {
                    var matchVal14033 = G14032;
                    if ((!((("object")===((typeof matchVal14033))))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    if ((!((matchVal14033.length>=0))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    var matchArraySimplePart14034 = Array.prototype.slice.call(matchVal14033, 0, 0);
                    if ((!((("object")===((typeof matchArraySimplePart14034))))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    if ((!((0===matchArraySimplePart14034.length))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    var matchArrayTailPart14035 = Array.prototype.slice.call(matchVal14033, 0);
                    var elements = matchArrayTailPart14035;
                    return elements;
                    ;
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G14031))))                    {
                    return G14031;
                    };
                  G14031 = (function (arguments)                    {
                    var matchVal14036 = G14032;
                    var anythingElse14030 = matchVal14036;
                    throw ((("Match fail in anonymous against: ")+(anythingElse14030)));
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G14031))))                    {
                    return G14031;
                    };
                  throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail elements)] (_newline-sequence elements)) (anything-else-14030 (_throw (_+ ''Match fail in anonymous against: '' anything-else-14030))))) for value ")+(JSON.stringify(G14032))));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                });
              returnValue14025 = actualFun14027.apply(this, arguments);
              while (recurP14028(returnValue14025))                {
                returnValue14025 = actualFun14027.apply(this, returnValue14025.args);
                };
              return returnValue14025;
              })].concat(arrays));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G14019))))            {
            return G14019;
            };
          G14019 = (function (arguments)            {
            var matchVal14037 = G14020;
            var anythingElse14018 = matchVal14037;
            throw ((("Match fail in hooves/hooves-zip against: ")+(anythingElse14018)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G14019))))            {
            return G14019;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail arrays)] (_newline-sequence (map\\.apply this (\\.\\. [: (lambda ((tail elements)) elements)] (concat arrays))))) (anything-else-14018 (_throw (_+ ''Match fail in hooves/hooves-zip against: '' anything-else-14018))))) for value ")+(JSON.stringify(G14020))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue14013 = actualFun14015.apply(this, arguments);
      while (recurP14016(returnValue14013))        {
        returnValue14013 = actualFun14015.apply(this, returnValue14013.args);
        };
      return returnValue14013;
      });
    // |
    // macro - no dynamic value.
    ;
    // define-external-binop
    // macro - no dynamic value.
    ;
    // define-external-binops
    // macro - no dynamic value.
    ;
    currentModule13262.lessThan = (function (G14053, G14054)      {
      return (G14053<G14054);
      });
    currentModule13262.lessThanequal = (function (G14080, G14081)      {
      return (G14080<=G14081);
      });
    currentModule13262.greaterThan = (function (G14107, G14108)      {
      return (G14107>G14108);
      });
    currentModule13262.greaterThanequal = (function (G14134, G14135)      {
      return (G14134>=G14135);
      });
    currentModule13262.ampersand = (function (G14161, G14162)      {
      return (G14161&G14162);
      });
    currentModule13262.pipe = (function (G14188, G14189)      {
      return (G14188|G14189);
      });
    currentModule13262.equalequal = (function (G14215, G14216)      {
      return (G14215==G14216);
      });
    currentModule13262.TripleEqualminus = (function (G14242, G14243)      {
      return (G14242===G14243);
      });
    currentModule13262.modsign = (function (G14269, G14270)      {
      return (G14269%G14270);
      });
    currentModule13262.caret = (function (G14296, G14297)      {
      return (G14296^G14297);
      });
    currentModule13262.lessThanlessThan = (function (G14323, G14324)      {
      return (G14323<<G14324);
      });
    currentModule13262.greaterThangreaterThan = (function (G14350, G14351)      {
      return (G14350>>G14351);
      });
    currentModule13262.greaterThangreaterThangreaterThan = (function (G14377, G14378)      {
      return (G14377>>>G14378);
      });
    // &&
    // macro - no dynamic value.
    ;
    // ||
    // macro - no dynamic value.
    ;
    currentModule13262.bang = (function (o)      {
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
    currentModule13262.plist = (function ()      {
      var returnValue14476 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil14475",
          args:arguments
        };
        });
      var recurP14479 = (function (val14480)        {
        if ((("undefined")===((typeof val14480))))          {
          return false;
          };
        return (val14480.recurSigil===("recurSigil14475"));
        });
      var actualFun14478 = (function ()        {
        return (function (arguments)          {
          var G14482 = undefined;
          var G14483 = Array.prototype.slice.apply(arguments);
          G14482 = (function (arguments)            {
            var matchVal14484 = G14483;
            if ((!((("object")===((typeof matchVal14484))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal14484.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart14485 = Array.prototype.slice.call(matchVal14484, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePart14485))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePart14485.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPart14486 = Array.prototype.slice.call(matchVal14484, 0);
            var parts = matchArrayTailPart14486;
            var out = {              
              
            };
            for (var i = 0;currentModule13262.lessThan(i, parts.length);i = currentModule13262.plus(i, 2))              {
              out[parts[i]] = parts[currentModule13262.plus(i, 1)];
              };
            return out;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G14482))))            {
            return G14482;
            };
          G14482 = (function (arguments)            {
            var matchVal14487 = G14483;
            var anythingElse14481 = matchVal14487;
            throw ((("Match fail in hooves/hooves-plist against: ")+(anythingElse14481)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G14482))))            {
            return G14482;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail parts)] (_newline-sequence (var out ({})) (for ((var i 0) (< i parts\\.length) (set! i (+ i 2))) (set! [out [parts i]] [parts (+ i 1)])) out)) (anything-else-14481 (_throw (_+ ''Match fail in hooves/hooves-plist against: '' anything-else-14481))))) for value ")+(JSON.stringify(G14483))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue14476 = actualFun14478.apply(this, arguments);
      while (recurP14479(returnValue14476))        {
        returnValue14476 = actualFun14478.apply(this, returnValue14476.args);
        };
      return returnValue14476;
      });
    // as-options{}
    // pattern - no dynamic value.
    ;
    currentModule13262.rx = (function ()      {
      var returnValue14517 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil14516",
          args:arguments
        };
        });
      var recurP14520 = (function (val14521)        {
        if ((("undefined")===((typeof val14521))))          {
          return false;
          };
        return (val14521.recurSigil===("recurSigil14516"));
        });
      var actualFun14519 = (function ()        {
        return (function (arguments)          {
          var G14523 = undefined;
          var G14524 = Array.prototype.slice.apply(arguments);
          G14523 = (function (arguments)            {
            var matchVal14525 = G14524;
            if ((!((("object")===((typeof matchVal14525))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal14525.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart14526 = Array.prototype.slice.call(matchVal14525, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart14526))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart14526.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var s = matchArraySimplePart14526[0];
            var matchArrayTailPart14527 = Array.prototype.slice.call(matchVal14525, 1);
            var matchTemp14528 = matchArrayTailPart14527[0];
            var previousMatchSucceeded14529 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTemp14528))))                {
                previousMatchSucceeded14529 = false;
                };
              var args = matchTemp14528;
              if (previousMatchSucceeded14529)                {
                break;
                };
              previousMatchSucceeded14529 = true;
              case 1:
              var fResult14530 = ((function (x)                {
                return "g";
                }))(matchTemp14528);
              if ((fResult14530===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceeded14529 = false;
                };
              var args = fResult14530;
              if (previousMatchSucceeded14529)                {
                break;
                };
              previousMatchSucceeded14529 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            return (new (RegExp)(s, args));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G14523))))            {
            return G14523;
            };
          G14523 = (function (arguments)            {
            var matchVal14531 = G14524;
            var anythingElse14522 = matchVal14531;
            throw ((("Match fail in hooves/hooves-rx against: ")+(anythingElse14522)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G14523))))            {
            return G14523;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: s :- (opt args ''g'')] (_newline-sequence (new RegExp s args))) (anything-else-14522 (_throw (_+ ''Match fail in hooves/hooves-rx against: '' anything-else-14522))))) for value ")+(JSON.stringify(G14524))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue14517 = actualFun14519.apply(this, arguments);
      while (recurP14520(returnValue14517))        {
        returnValue14517 = actualFun14519.apply(this, returnValue14517.args);
        };
      return returnValue14517;
      });
    // set-to!
    // macro - no dynamic value.
    ;
    currentModule13262.prefix = (function (i, ra)      {
      return [i].concat(ra);
      });
    currentModule13262.postfix = (function (i, ra)      {
      return [].concat(ra, [i]);
      });
    currentModule13262.identity = (function (x)      {
      return x;
      });
    var pushdividereturn = (function (item, array)      {
      array.push(item);
      return array;
      });
    var plistToObjectHelper = (function ()      {
      var returnValue14605 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil14604",
          args:arguments
        };
        });
      var recurP14608 = (function (val14609)        {
        if ((("undefined")===((typeof val14609))))          {
          return false;
          };
        return (val14609.recurSigil===("recurSigil14604"));
        });
      var actualFun14607 = (function ()        {
        return (function (arguments)          {
          var G14611 = undefined;
          var G14612 = Array.prototype.slice.apply(arguments);
          G14611 = (function (arguments)            {
            var matchVal14613 = G14612;
            if ((!((("object")===((typeof matchVal14613))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchVal14613.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp14614 = matchVal14613[0];
            var matchTemp14615 = matchVal14613[1];
            var objectAcc = matchTemp14614;
            if ((!((("object")===((typeof matchTemp14615))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchTemp14615.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return objectAcc;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G14611))))            {
            return G14611;
            };
          G14611 = (function (arguments)            {
            var matchVal14616 = G14612;
            if ((!((("object")===((typeof matchVal14616))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchVal14616.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp14617 = matchVal14616[0];
            var matchTemp14618 = matchVal14616[1];
            var objectAcc = matchTemp14617;
            if ((!((("object")===((typeof matchTemp14618))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchTemp14618.length>=2))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart14619 = Array.prototype.slice.call(matchTemp14618, 0, 2);
            if ((!((("object")===((typeof matchArraySimplePart14619))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchArraySimplePart14619.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp14620 = matchArraySimplePart14619[0];
            var matchTemp14621 = matchArraySimplePart14619[1];
            var matchFunExpr14626 = (function (G14625)              {
              return (((typeof G14625))===("string"));
              });
            if ((!(matchFunExpr14626(matchTemp14620))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var key = matchTemp14620;
            var value = matchTemp14621;
            var matchArrayTailPart14627 = Array.prototype.slice.call(matchTemp14618, 2);
            var rest = matchArrayTailPart14627;
            objectAcc[key] = value;
            return recur(objectAcc, rest);
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G14611))))            {
            return G14611;
            };
          G14611 = (function (arguments)            {
            var matchVal14628 = G14612;
            var anythingElse14610 = matchVal14628;
            throw ((("Match fail in plist->object-helper against: ")+(anythingElse14610)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G14611))))            {
            return G14611;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: object-acc [:]] (_newline-sequence object-acc)) ([: object-acc [: (string key) value (tail rest)]] (_newline-sequence (set! [object-acc key] value) (recur object-acc rest))) (anything-else-14610 (_throw (_+ ''Match fail in plist->object-helper against: '' anything-else-14610))))) for value ")+(JSON.stringify(G14612))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue14605 = actualFun14607.apply(this, arguments);
      while (recurP14608(returnValue14605))        {
        returnValue14605 = actualFun14607.apply(this, returnValue14605.args);
        };
      return returnValue14605;
      });
    currentModule13262.plistToObject = (function ()      {
      var returnValue14652 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil14651",
          args:arguments
        };
        });
      var recurP14655 = (function (val14656)        {
        if ((("undefined")===((typeof val14656))))          {
          return false;
          };
        return (val14656.recurSigil===("recurSigil14651"));
        });
      var actualFun14654 = (function ()        {
        return (function (arguments)          {
          var G14658 = undefined;
          var G14659 = Array.prototype.slice.apply(arguments);
          G14658 = (function (arguments)            {
            var matchVal14660 = G14659;
            if ((!((("object")===((typeof matchVal14660))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal14660.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart14661 = Array.prototype.slice.call(matchVal14660, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePart14661))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePart14661.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPart14662 = Array.prototype.slice.call(matchVal14660, 0);
            var kvPairs = matchArrayTailPart14662;
            return plistToObjectHelper({              
              
            }, kvPairs);
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G14658))))            {
            return G14658;
            };
          G14658 = (function (arguments)            {
            var matchVal14663 = G14659;
            var anythingElse14657 = matchVal14663;
            throw ((("Match fail in hooves/hooves-plist->object against: ")+(anythingElse14657)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G14658))))            {
            return G14658;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail kv-pairs)] (_newline-sequence (plist->object-helper ({}) kv-pairs))) (anything-else-14657 (_throw (_+ ''Match fail in hooves/hooves-plist->object against: '' anything-else-14657))))) for value ")+(JSON.stringify(G14659))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue14652 = actualFun14654.apply(this, arguments);
      while (recurP14655(returnValue14652))        {
        returnValue14652 = actualFun14654.apply(this, returnValue14652.args);
        };
      return returnValue14652;
      });
    currentModule13262.filter = (function ()      {
      var returnValue14694 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil14693",
          args:arguments
        };
        });
      var recurP14697 = (function (val14698)        {
        if ((("undefined")===((typeof val14698))))          {
          return false;
          };
        return (val14698.recurSigil===("recurSigil14693"));
        });
      var actualFun14696 = (function ()        {
        return (function (arguments)          {
          var G14700 = undefined;
          var G14701 = Array.prototype.slice.apply(arguments);
          G14700 = (function (arguments)            {
            var matchVal14702 = G14701;
            if ((!((("object")===((typeof matchVal14702))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchVal14702.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp14703 = matchVal14702[0];
            var matchTemp14704 = matchVal14702[1];
            var matchTemp14705 = matchVal14702[2];
            var fun = matchTemp14703;
            if ((!((("object")===((typeof matchTemp14704))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchTemp14704.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var acc = matchTemp14705;
            return acc;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G14700))))            {
            return G14700;
            };
          G14700 = (function (arguments)            {
            var matchVal14706 = G14701;
            if ((!((("object")===((typeof matchVal14706))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchVal14706.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp14707 = matchVal14706[0];
            var matchTemp14708 = matchVal14706[1];
            var matchTemp14709 = matchVal14706[2];
            var fun = matchTemp14707;
            if ((!((("object")===((typeof matchTemp14708))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchTemp14708.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart14710 = Array.prototype.slice.call(matchTemp14708, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart14710))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart14710.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart14710[0];
            var matchArrayTailPart14711 = Array.prototype.slice.call(matchTemp14708, 1);
            var tl = matchArrayTailPart14711;
            var acc = matchTemp14709;
            var r = fun(hd);
            return ((r)?(recur(fun, tl, pushdividereturn(hd, acc))) : (recur(fun, tl, acc)));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G14700))))            {
            return G14700;
            };
          G14700 = (function (arguments)            {
            var matchVal14712 = G14701;
            if ((!((("object")===((typeof matchVal14712))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchVal14712.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var fun = matchVal14712[0];
            var ra = matchVal14712[1];
            return recur(fun, ra, []);
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G14700))))            {
            return G14700;
            };
          G14700 = (function (arguments)            {
            var matchVal14713 = G14701;
            var anythingElse14699 = matchVal14713;
            throw ((("Match fail in hooves/hooves-filter against: ")+(anythingElse14699)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G14700))))            {
            return G14700;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: fun [:] acc] (_newline-sequence acc)) ([: fun [: hd (tail tl)] acc] (_newline-sequence (var r (fun hd)) (if r (recur fun tl (push/return hd acc)) (recur fun tl acc)))) ([: fun ra] (_newline-sequence (recur fun ra [:]))) (anything-else-14699 (_throw (_+ ''Match fail in hooves/hooves-filter against: '' anything-else-14699))))) for value ")+(JSON.stringify(G14701))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue14694 = actualFun14696.apply(this, arguments);
      while (recurP14697(returnValue14694))        {
        returnValue14694 = actualFun14696.apply(this, returnValue14694.args);
        };
      return returnValue14694;
      });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModule13262;
  }))