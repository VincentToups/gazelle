define([], (function ()  {
  var currentModule25938 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModule25938 = value;
    });
  (function (arguments27134)    {
    arguments = arguments27134;
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
    currentModule25938.definedPredicate = (function (x)      {
      return (!((((typeof x))===("undefined"))));
      });
    currentModule25938.undefinedPredicate = (function (x)      {
      return (((typeof x))===("undefined"));
      });
    currentModule25938.numberPredicate = (function (o)      {
      return (((typeof o))===("number"));
      });
    currentModule25938.stringPredicate = (function (o)      {
      return (((typeof o))===("string"));
      });
    currentModule25938.arrayPredicate = (function (o)      {
      return (o instanceof Array);
      });
    currentModule25938.emptyPredicate = (function (o)      {
      return (0===o.length);
      });
    currentModule25938.nullPredicate = (function (x)      {
      return currentModule25938.TripleEqualminus(null, x);
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
    currentModule25938.TripleEqualminus_ = (function (partial)      {
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
    currentModule25938.Delay = (function (lambdaExpr)      {
      this.lambdaExpr = lambdaExpr;
      return this;
      });
    currentModule25938.Delay.prototype.value = (function ()      {
      return this.lambdaExpr();
      });
    // delay
    // macro - no dynamic value.
    ;
    currentModule25938.undelay = (function (o)      {
      return (function (arguments26136)        {
        arguments = arguments26136;
        var G26134 = undefined;
        var G26135 = o;
        G26134 = (function (arguments26140)          {
          arguments = arguments26140;
          var matchVal26137 = G26135;
          var matchFunExpr26139 = (function (G26138)            {
            return (G26138 instanceof currentModule25938.Delay);
            });
          if ((!(matchFunExpr26139(matchVal26137))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var delayObject = matchVal26137;
          return delayObject.value();
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26134))))          {
          return G26134;
          };
        throw ((("match-fail at ((match o ((instance Delay delay-object) (delay-object\\.value)))) for value ")+(JSON.stringify(G26135))));
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
    currentModule25938.range = (function ()      {
      var returnValue26179 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil26178",
          args:arguments
        };
        });
      var recurP26182 = (function (val26183)        {
        if ((("undefined")===((typeof val26183))))          {
          return false;
          };
        return (val26183.recurSigil===("recurSigil26178"));
        });
      var actualFun26181 = (function ()        {
        return (function (arguments26187)          {
          arguments = arguments26187;
          var G26185 = undefined;
          var G26186 = Array.prototype.slice.apply(arguments);
          G26185 = (function (arguments26189)            {
            arguments = arguments26189;
            var matchVal26188 = G26186;
            if ((!((("object")===((typeof matchVal26188))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((4===matchVal26188.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchVal26188[0];
            var step = matchVal26188[1];
            var stop = matchVal26188[2];
            var transform = matchVal26188[3];
            var out = [];
            for (var i = start;(i<stop);i = ((i)+(step)))              {
              out.push(transform(i));
              };
            return out;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26185))))            {
            return G26185;
            };
          G26185 = (function (arguments26191)            {
            arguments = arguments26191;
            var matchVal26190 = G26186;
            if ((!((("object")===((typeof matchVal26190))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchVal26190.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchVal26190[0];
            var step = matchVal26190[1];
            var stop = matchVal26190[2];
            return recur(start, step, stop, (function (v)              {
              return v;
              }));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26185))))            {
            return G26185;
            };
          G26185 = (function (arguments26193)            {
            arguments = arguments26193;
            var matchVal26192 = G26186;
            if ((!((("object")===((typeof matchVal26192))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchVal26192.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var start = matchVal26192[0];
            var stop = matchVal26192[1];
            return recur(start, 1, stop, (function (v)              {
              return v;
              }));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26185))))            {
            return G26185;
            };
          G26185 = (function (arguments26195)            {
            arguments = arguments26195;
            var matchVal26194 = G26186;
            if ((!((("object")===((typeof matchVal26194))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchVal26194.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var stop = matchVal26194[0];
            return recur(0, 1, stop, (function (v)              {
              return v;
              }));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26185))))            {
            return G26185;
            };
          G26185 = (function (arguments26197)            {
            arguments = arguments26197;
            var matchVal26196 = G26186;
            var anythingElse26184 = matchVal26196;
            throw ((("Match fail in hooves/hooves-range against: ")+(anythingElse26184)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26185))))            {
            return G26185;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: start step stop transform] (_newline-sequence (var out [:]) (for ((var i start) (_< i stop) (set! i (_+ i step))) (out\\.push (transform i))) out)) ([: start step stop] (_newline-sequence (recur start step stop (lambda (v) v)))) ([: start stop] (_newline-sequence (recur start 1 stop (lambda (v) v)))) ([: stop] (_newline-sequence (recur 0 1 stop (lambda (v) v)))) (anything-else-26184 (_throw (_+ ''Match fail in hooves/hooves-range against: '' anything-else-26184))))) for value ")+(JSON.stringify(G26186))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue26179 = actualFun26181.apply(this, arguments);
      while (recurP26182(returnValue26179))        {
        returnValue26179 = actualFun26181.apply(this, returnValue26179.args);
        };
      return returnValue26179;
      });
    currentModule25938.pureSort = (function ()      {
      var returnValue26215 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil26214",
          args:arguments
        };
        });
      var recurP26218 = (function (val26219)        {
        if ((("undefined")===((typeof val26219))))          {
          return false;
          };
        return (val26219.recurSigil===("recurSigil26214"));
        });
      var actualFun26217 = (function ()        {
        return (function (arguments26223)          {
          arguments = arguments26223;
          var G26221 = undefined;
          var G26222 = Array.prototype.slice.apply(arguments);
          G26221 = (function (arguments26230)            {
            arguments = arguments26230;
            var matchVal26224 = G26222;
            if ((!((("object")===((typeof matchVal26224))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal26224.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart26225 = Array.prototype.slice.call(matchVal26224, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart26225))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart26225.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var array = matchArraySimplePart26225[0];
            var matchArrayTailPart26226 = Array.prototype.slice.call(matchVal26224, 1);
            var matchTemp26227 = matchArrayTailPart26226[0];
            var previousMatchSucceeded26228 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTemp26227))))                {
                previousMatchSucceeded26228 = false;
                };
              var sortFun = matchTemp26227;
              if (previousMatchSucceeded26228)                {
                break;
                };
              previousMatchSucceeded26228 = true;
              case 1:
              var fResult26229 = ((function (x)                {
                return (function (a, b)                  {
                  return ((currentModule25938.lessThan(a, b))?(-1) : (1));
                  });
                }))(matchTemp26227);
              if ((fResult26229===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceeded26228 = false;
                };
              var sortFun = fResult26229;
              if (previousMatchSucceeded26228)                {
                break;
                };
              previousMatchSucceeded26228 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var copy = array.concat([]);
            copy.sort(sortFun);
            return copy;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26221))))            {
            return G26221;
            };
          G26221 = (function (arguments26232)            {
            arguments = arguments26232;
            var matchVal26231 = G26222;
            var anythingElse26220 = matchVal26231;
            throw ((("Match fail in hooves/hooves-pure-sort against: ")+(anythingElse26220)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26221))))            {
            return G26221;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: array :- (opt sort-fun (lambda (a b) (if (< a b) -1 1)))] (_newline-sequence (var copy (\\.\\. array (concat [:]))) (\\.\\. copy (sort sort-fun)) copy)) (anything-else-26220 (_throw (_+ ''Match fail in hooves/hooves-pure-sort against: '' anything-else-26220))))) for value ")+(JSON.stringify(G26222))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue26215 = actualFun26217.apply(this, arguments);
      while (recurP26218(returnValue26215))        {
        returnValue26215 = actualFun26217.apply(this, returnValue26215.args);
        };
      return returnValue26215;
      });
    // with-slots
    // macro - no dynamic value.
    ;
    currentModule25938.plus = (function ()      {
      var returnValue26254 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil26253",
          args:arguments
        };
        });
      var recurP26257 = (function (val26258)        {
        if ((("undefined")===((typeof val26258))))          {
          return false;
          };
        return (val26258.recurSigil===("recurSigil26253"));
        });
      var actualFun26256 = (function ()        {
        return (function (arguments26262)          {
          arguments = arguments26262;
          var G26260 = undefined;
          var G26261 = Array.prototype.slice.apply(arguments);
          G26260 = (function (arguments26266)            {
            arguments = arguments26266;
            var matchVal26263 = G26261;
            if ((!((("object")===((typeof matchVal26263))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal26263.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart26264 = Array.prototype.slice.call(matchVal26263, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart26264))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart26264.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart26264[0];
            var matchArrayTailPart26265 = Array.prototype.slice.call(matchVal26263, 1);
            var tl = matchArrayTailPart26265;
            var result = hd;
            for (i in (tl))              {
              result = ((result)+(tl[i]));
              };
            return result;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26260))))            {
            return G26260;
            };
          G26260 = (function (arguments26268)            {
            arguments = arguments26268;
            var matchVal26267 = G26261;
            var anythingElse26259 = matchVal26267;
            throw ((("Match fail in hooves/hooves-+ against: ")+(anythingElse26259)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26260))))            {
            return G26260;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (var result hd) (for (i :in tl) (set! result (_+ result [tl i]))) result)) (anything-else-26259 (_throw (_+ ''Match fail in hooves/hooves-+ against: '' anything-else-26259))))) for value ")+(JSON.stringify(G26261))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue26254 = actualFun26256.apply(this, arguments);
      while (recurP26257(returnValue26254))        {
        returnValue26254 = actualFun26256.apply(this, returnValue26254.args);
        };
      return returnValue26254;
      });
    currentModule25938.minus = (function ()      {
      var returnValue26286 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil26285",
          args:arguments
        };
        });
      var recurP26289 = (function (val26290)        {
        if ((("undefined")===((typeof val26290))))          {
          return false;
          };
        return (val26290.recurSigil===("recurSigil26285"));
        });
      var actualFun26288 = (function ()        {
        return (function (arguments26294)          {
          arguments = arguments26294;
          var G26292 = undefined;
          var G26293 = Array.prototype.slice.apply(arguments);
          G26292 = (function (arguments26298)            {
            arguments = arguments26298;
            var matchVal26295 = G26293;
            if ((!((("object")===((typeof matchVal26295))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal26295.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart26296 = Array.prototype.slice.call(matchVal26295, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart26296))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart26296.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart26296[0];
            var matchArrayTailPart26297 = Array.prototype.slice.call(matchVal26295, 1);
            var tl = matchArrayTailPart26297;
            return (((tl.length>0))?(((hd)-(apply(currentModule25938.plus, tl)))) : ((-(hd))));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26292))))            {
            return G26292;
            };
          G26292 = (function (arguments26300)            {
            arguments = arguments26300;
            var matchVal26299 = G26293;
            var anythingElse26291 = matchVal26299;
            throw ((("Match fail in hooves/hooves-- against: ")+(anythingElse26291)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26292))))            {
            return G26292;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (if (_> tl\\.length 0) (_- hd (apply + tl)) (_- hd)))) (anything-else-26291 (_throw (_+ ''Match fail in hooves/hooves-- against: '' anything-else-26291))))) for value ")+(JSON.stringify(G26293))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue26286 = actualFun26288.apply(this, arguments);
      while (recurP26289(returnValue26286))        {
        returnValue26286 = actualFun26288.apply(this, returnValue26286.args);
        };
      return returnValue26286;
      });
    currentModule25938.times = (function ()      {
      var returnValue26318 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil26317",
          args:arguments
        };
        });
      var recurP26321 = (function (val26322)        {
        if ((("undefined")===((typeof val26322))))          {
          return false;
          };
        return (val26322.recurSigil===("recurSigil26317"));
        });
      var actualFun26320 = (function ()        {
        return (function (arguments26326)          {
          arguments = arguments26326;
          var G26324 = undefined;
          var G26325 = Array.prototype.slice.apply(arguments);
          G26324 = (function (arguments26330)            {
            arguments = arguments26330;
            var matchVal26327 = G26325;
            if ((!((("object")===((typeof matchVal26327))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal26327.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart26328 = Array.prototype.slice.call(matchVal26327, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart26328))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart26328.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart26328[0];
            var matchArrayTailPart26329 = Array.prototype.slice.call(matchVal26327, 1);
            var tl = matchArrayTailPart26329;
            var result = hd;
            for (i in (tl))              {
              result = ((result)*(tl[i]));
              };
            return result;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26324))))            {
            return G26324;
            };
          G26324 = (function (arguments26332)            {
            arguments = arguments26332;
            var matchVal26331 = G26325;
            var anythingElse26323 = matchVal26331;
            throw ((("Match fail in hooves/hooves-* against: ")+(anythingElse26323)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26324))))            {
            return G26324;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (var result hd) (for (i :in tl) (set! result (_* result [tl i]))) result)) (anything-else-26323 (_throw (_+ ''Match fail in hooves/hooves-* against: '' anything-else-26323))))) for value ")+(JSON.stringify(G26325))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue26318 = actualFun26320.apply(this, arguments);
      while (recurP26321(returnValue26318))        {
        returnValue26318 = actualFun26320.apply(this, returnValue26318.args);
        };
      return returnValue26318;
      });
    currentModule25938.divide = (function ()      {
      var returnValue26350 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil26349",
          args:arguments
        };
        });
      var recurP26353 = (function (val26354)        {
        if ((("undefined")===((typeof val26354))))          {
          return false;
          };
        return (val26354.recurSigil===("recurSigil26349"));
        });
      var actualFun26352 = (function ()        {
        return (function (arguments26358)          {
          arguments = arguments26358;
          var G26356 = undefined;
          var G26357 = Array.prototype.slice.apply(arguments);
          G26356 = (function (arguments26362)            {
            arguments = arguments26362;
            var matchVal26359 = G26357;
            if ((!((("object")===((typeof matchVal26359))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal26359.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart26360 = Array.prototype.slice.call(matchVal26359, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart26360))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart26360.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart26360[0];
            var matchArrayTailPart26361 = Array.prototype.slice.call(matchVal26359, 1);
            var tl = matchArrayTailPart26361;
            return ((hd)/((apply(currentModule25938.times, tl))));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26356))))            {
            return G26356;
            };
          G26356 = (function (arguments26364)            {
            arguments = arguments26364;
            var matchVal26363 = G26357;
            var anythingElse26355 = matchVal26363;
            throw ((("Match fail in hooves/hooves-/ against: ")+(anythingElse26355)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26356))))            {
            return G26356;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: hd (tail tl)] (_newline-sequence (_/ hd (apply * tl)))) (anything-else-26355 (_throw (_+ ''Match fail in hooves/hooves-/ against: '' anything-else-26355))))) for value ")+(JSON.stringify(G26357))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue26350 = actualFun26352.apply(this, arguments);
      while (recurP26353(returnValue26350))        {
        returnValue26350 = actualFun26352.apply(this, returnValue26350.args);
        };
      return returnValue26350;
      });
    currentModule25938.map1 = (function (f, a)      {
      var o = [];
      for (var i = 0;currentModule25938.lessThan(i, a.length);i = currentModule25938.plus(i, 1))        {
        o[i] = f(a[i]);
        };
      return o;
      });
    currentModule25938.min2 = (function (a, b)      {
      return ((currentModule25938.lessThan(a, b))?(a) : (b));
      });
    currentModule25938.max2 = (function (a, b)      {
      return ((currentModule25938.greaterThan(a, b))?(a) : (b));
      });
    var foldl = (function (fItAc, init, sequence)      {
      for (var i = 0;currentModule25938.lessThan(i, sequence.length);i = currentModule25938.plus(i, 1))        {
        init = fItAc(init, sequence[i]);
        };
      return init;
      });
    currentModule25938.min = (function ()      {
      var returnValue26430 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil26429",
          args:arguments
        };
        });
      var recurP26433 = (function (val26434)        {
        if ((("undefined")===((typeof val26434))))          {
          return false;
          };
        return (val26434.recurSigil===("recurSigil26429"));
        });
      var actualFun26432 = (function ()        {
        return (function (arguments26438)          {
          arguments = arguments26438;
          var G26436 = undefined;
          var G26437 = Array.prototype.slice.apply(arguments);
          G26436 = (function (arguments26442)            {
            arguments = arguments26442;
            var matchVal26439 = G26437;
            if ((!((("object")===((typeof matchVal26439))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal26439.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart26440 = Array.prototype.slice.call(matchVal26439, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePart26440))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePart26440.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPart26441 = Array.prototype.slice.call(matchVal26439, 0);
            var values = matchArrayTailPart26441;
            return foldl(currentModule25938.min2, Infinity, values);
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26436))))            {
            return G26436;
            };
          G26436 = (function (arguments26444)            {
            arguments = arguments26444;
            var matchVal26443 = G26437;
            var anythingElse26435 = matchVal26443;
            throw ((("Match fail in hooves/hooves-min against: ")+(anythingElse26435)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26436))))            {
            return G26436;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail values)] (_newline-sequence (foldl min2 Infinity values))) (anything-else-26435 (_throw (_+ ''Match fail in hooves/hooves-min against: '' anything-else-26435))))) for value ")+(JSON.stringify(G26437))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue26430 = actualFun26432.apply(this, arguments);
      while (recurP26433(returnValue26430))        {
        returnValue26430 = actualFun26432.apply(this, returnValue26430.args);
        };
      return returnValue26430;
      });
    currentModule25938.max = (function ()      {
      var returnValue26462 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil26461",
          args:arguments
        };
        });
      var recurP26465 = (function (val26466)        {
        if ((("undefined")===((typeof val26466))))          {
          return false;
          };
        return (val26466.recurSigil===("recurSigil26461"));
        });
      var actualFun26464 = (function ()        {
        return (function (arguments26470)          {
          arguments = arguments26470;
          var G26468 = undefined;
          var G26469 = Array.prototype.slice.apply(arguments);
          G26468 = (function (arguments26474)            {
            arguments = arguments26474;
            var matchVal26471 = G26469;
            if ((!((("object")===((typeof matchVal26471))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal26471.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart26472 = Array.prototype.slice.call(matchVal26471, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePart26472))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePart26472.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPart26473 = Array.prototype.slice.call(matchVal26471, 0);
            var values = matchArrayTailPart26473;
            return foldl(currentModule25938.max2, currentModule25938.minus(Infinity), values);
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26468))))            {
            return G26468;
            };
          G26468 = (function (arguments26476)            {
            arguments = arguments26476;
            var matchVal26475 = G26469;
            var anythingElse26467 = matchVal26475;
            throw ((("Match fail in hooves/hooves-max against: ")+(anythingElse26467)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26468))))            {
            return G26468;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail values)] (_newline-sequence (foldl max2 (- Infinity) values))) (anything-else-26467 (_throw (_+ ''Match fail in hooves/hooves-max against: '' anything-else-26467))))) for value ")+(JSON.stringify(G26469))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue26462 = actualFun26464.apply(this, arguments);
      while (recurP26465(returnValue26462))        {
        returnValue26462 = actualFun26464.apply(this, returnValue26462.args);
        };
      return returnValue26462;
      });
    currentModule25938.map = (function ()      {
      var returnValue26494 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil26493",
          args:arguments
        };
        });
      var recurP26497 = (function (val26498)        {
        if ((("undefined")===((typeof val26498))))          {
          return false;
          };
        return (val26498.recurSigil===("recurSigil26493"));
        });
      var actualFun26496 = (function ()        {
        return (function (arguments26502)          {
          arguments = arguments26502;
          var G26500 = undefined;
          var G26501 = Array.prototype.slice.apply(arguments);
          G26500 = (function (arguments26506)            {
            arguments = arguments26506;
            var matchVal26503 = G26501;
            if ((!((("object")===((typeof matchVal26503))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal26503.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart26504 = Array.prototype.slice.call(matchVal26503, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart26504))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart26504.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var f = matchArraySimplePart26504[0];
            var matchArrayTailPart26505 = Array.prototype.slice.call(matchVal26503, 1);
            var arrays = matchArrayTailPart26505;
            var minLen = currentModule25938.min.apply(undefined, currentModule25938.map1((function (a)              {
              return a.length;
              }), arrays));
            var out = [];
            for (var i = 0;currentModule25938.lessThan(i, minLen);i = currentModule25938.plus(i, 1))              {
              out[i] = f.apply(this, currentModule25938.map1((function (a)                {
                return a[i];
                }), arrays));
              };
            return out;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26500))))            {
            return G26500;
            };
          G26500 = (function (arguments26508)            {
            arguments = arguments26508;
            var matchVal26507 = G26501;
            var anythingElse26499 = matchVal26507;
            throw ((("Match fail in hooves/hooves-map against: ")+(anythingElse26499)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26500))))            {
            return G26500;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: f (tail arrays)] (_newline-sequence (var min-len (min\\.apply undefined (map1 (lambda (a) a\\.length) arrays))) (var out [:]) (for ((var i 0) (< i min-len) (set! i (+ i 1))) (set! [out i] (f\\.apply this (map1 (lambda (a) [a i]) arrays)))) out)) (anything-else-26499 (_throw (_+ ''Match fail in hooves/hooves-map against: '' anything-else-26499))))) for value ")+(JSON.stringify(G26501))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue26494 = actualFun26496.apply(this, arguments);
      while (recurP26497(returnValue26494))        {
        returnValue26494 = actualFun26496.apply(this, returnValue26494.args);
        };
      return returnValue26494;
      });
    currentModule25938.each = (function ()      {
      var returnValue26526 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil26525",
          args:arguments
        };
        });
      var recurP26529 = (function (val26530)        {
        if ((("undefined")===((typeof val26530))))          {
          return false;
          };
        return (val26530.recurSigil===("recurSigil26525"));
        });
      var actualFun26528 = (function ()        {
        return (function (arguments26534)          {
          arguments = arguments26534;
          var G26532 = undefined;
          var G26533 = Array.prototype.slice.apply(arguments);
          G26532 = (function (arguments26538)            {
            arguments = arguments26538;
            var matchVal26535 = G26533;
            if ((!((("object")===((typeof matchVal26535))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal26535.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart26536 = Array.prototype.slice.call(matchVal26535, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart26536))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart26536.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var f = matchArraySimplePart26536[0];
            var matchArrayTailPart26537 = Array.prototype.slice.call(matchVal26535, 1);
            var arrays = matchArrayTailPart26537;
            var minLen = currentModule25938.min.apply(undefined, currentModule25938.map1((function (a)              {
              return a.length;
              }), arrays));
            for (var i = 0;currentModule25938.lessThan(i, minLen);i = currentModule25938.plus(i, 1))              {
              f.apply(this, currentModule25938.map1((function (a)                {
                return a[i];
                }), arrays));
              };
            return undefined;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26532))))            {
            return G26532;
            };
          G26532 = (function (arguments26540)            {
            arguments = arguments26540;
            var matchVal26539 = G26533;
            var anythingElse26531 = matchVal26539;
            throw ((("Match fail in hooves/hooves-each against: ")+(anythingElse26531)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26532))))            {
            return G26532;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: f (tail arrays)] (_newline-sequence (var min-len (min\\.apply undefined (map1 (lambda (a) a\\.length) arrays))) (for ((var i 0) (< i min-len) (set! i (+ i 1))) (f\\.apply this (map1 (lambda (a) [a i]) arrays))) undefined)) (anything-else-26531 (_throw (_+ ''Match fail in hooves/hooves-each against: '' anything-else-26531))))) for value ")+(JSON.stringify(G26533))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue26526 = actualFun26528.apply(this, arguments);
      while (recurP26529(returnValue26526))        {
        returnValue26526 = actualFun26528.apply(this, returnValue26526.args);
        };
      return returnValue26526;
      });
    currentModule25938.zip = (function ()      {
      var returnValue26558 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil26557",
          args:arguments
        };
        });
      var recurP26561 = (function (val26562)        {
        if ((("undefined")===((typeof val26562))))          {
          return false;
          };
        return (val26562.recurSigil===("recurSigil26557"));
        });
      var actualFun26560 = (function ()        {
        return (function (arguments26566)          {
          arguments = arguments26566;
          var G26564 = undefined;
          var G26565 = Array.prototype.slice.apply(arguments);
          G26564 = (function (arguments26570)            {
            arguments = arguments26570;
            var matchVal26567 = G26565;
            if ((!((("object")===((typeof matchVal26567))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal26567.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart26568 = Array.prototype.slice.call(matchVal26567, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePart26568))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePart26568.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPart26569 = Array.prototype.slice.call(matchVal26567, 0);
            var arrays = matchArrayTailPart26569;
            return currentModule25938.map.apply(this, [(function ()              {
              var returnValue26572 = undefined;
              var recur = (function ()                {
                return {                  
                  recurSigil:"recurSigil26571",
                  args:arguments
                };
                });
              var recurP26575 = (function (val26576)                {
                if ((("undefined")===((typeof val26576))))                  {
                  return false;
                  };
                return (val26576.recurSigil===("recurSigil26571"));
                });
              var actualFun26574 = (function ()                {
                return (function (arguments26580)                  {
                  arguments = arguments26580;
                  var G26578 = undefined;
                  var G26579 = Array.prototype.slice.apply(arguments);
                  G26578 = (function (arguments26584)                    {
                    arguments = arguments26584;
                    var matchVal26581 = G26579;
                    if ((!((("object")===((typeof matchVal26581))))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    if ((!((matchVal26581.length>=0))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    var matchArraySimplePart26582 = Array.prototype.slice.call(matchVal26581, 0, 0);
                    if ((!((("object")===((typeof matchArraySimplePart26582))))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    if ((!((0===matchArraySimplePart26582.length))))                      {
                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                      };
                    var matchArrayTailPart26583 = Array.prototype.slice.call(matchVal26581, 0);
                    var elements = matchArrayTailPart26583;
                    return elements;
                    ;
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26578))))                    {
                    return G26578;
                    };
                  G26578 = (function (arguments26586)                    {
                    arguments = arguments26586;
                    var matchVal26585 = G26579;
                    var anythingElse26577 = matchVal26585;
                    throw ((("Match fail in anonymous against: ")+(anythingElse26577)));
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26578))))                    {
                    return G26578;
                    };
                  throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail elements)] (_newline-sequence elements)) (anything-else-26577 (_throw (_+ ''Match fail in anonymous against: '' anything-else-26577))))) for value ")+(JSON.stringify(G26579))));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                });
              returnValue26572 = actualFun26574.apply(this, arguments);
              while (recurP26575(returnValue26572))                {
                returnValue26572 = actualFun26574.apply(this, returnValue26572.args);
                };
              return returnValue26572;
              })].concat(arrays));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26564))))            {
            return G26564;
            };
          G26564 = (function (arguments26588)            {
            arguments = arguments26588;
            var matchVal26587 = G26565;
            var anythingElse26563 = matchVal26587;
            throw ((("Match fail in hooves/hooves-zip against: ")+(anythingElse26563)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26564))))            {
            return G26564;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail arrays)] (_newline-sequence (map\\.apply this (\\.\\. [: (lambda ((tail elements)) elements)] (concat arrays))))) (anything-else-26563 (_throw (_+ ''Match fail in hooves/hooves-zip against: '' anything-else-26563))))) for value ")+(JSON.stringify(G26565))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue26558 = actualFun26560.apply(this, arguments);
      while (recurP26561(returnValue26558))        {
        returnValue26558 = actualFun26560.apply(this, returnValue26558.args);
        };
      return returnValue26558;
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
    currentModule25938.lessThan = (function (G26600, G26601)      {
      return (G26600<G26601);
      });
    currentModule25938.lessThanequal = (function (G26621, G26622)      {
      return (G26621<=G26622);
      });
    currentModule25938.greaterThan = (function (G26642, G26643)      {
      return (G26642>G26643);
      });
    currentModule25938.greaterThanequal = (function (G26663, G26664)      {
      return (G26663>=G26664);
      });
    currentModule25938.ampersand = (function (G26684, G26685)      {
      return (G26684&G26685);
      });
    currentModule25938.pipe = (function (G26705, G26706)      {
      return (G26705|G26706);
      });
    currentModule25938.equalequal = (function (G26726, G26727)      {
      return (G26726==G26727);
      });
    currentModule25938.TripleEqualminus = (function (G26747, G26748)      {
      return (G26747===G26748);
      });
    currentModule25938.modsign = (function (G26768, G26769)      {
      return (G26768%G26769);
      });
    currentModule25938.caret = (function (G26789, G26790)      {
      return (G26789^G26790);
      });
    currentModule25938.lessThanlessThan = (function (G26810, G26811)      {
      return (G26810<<G26811);
      });
    currentModule25938.greaterThangreaterThan = (function (G26831, G26832)      {
      return (G26831>>G26832);
      });
    currentModule25938.greaterThangreaterThangreaterThan = (function (G26852, G26853)      {
      return (G26852>>>G26853);
      });
    // &&
    // macro - no dynamic value.
    ;
    // ||
    // macro - no dynamic value.
    ;
    currentModule25938.bang = (function (o)      {
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
    currentModule25938.plist = (function ()      {
      var returnValue26923 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil26922",
          args:arguments
        };
        });
      var recurP26926 = (function (val26927)        {
        if ((("undefined")===((typeof val26927))))          {
          return false;
          };
        return (val26927.recurSigil===("recurSigil26922"));
        });
      var actualFun26925 = (function ()        {
        return (function (arguments26931)          {
          arguments = arguments26931;
          var G26929 = undefined;
          var G26930 = Array.prototype.slice.apply(arguments);
          G26929 = (function (arguments26935)            {
            arguments = arguments26935;
            var matchVal26932 = G26930;
            if ((!((("object")===((typeof matchVal26932))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal26932.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart26933 = Array.prototype.slice.call(matchVal26932, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePart26933))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePart26933.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPart26934 = Array.prototype.slice.call(matchVal26932, 0);
            var parts = matchArrayTailPart26934;
            var out = {              
              
            };
            for (var i = 0;currentModule25938.lessThan(i, parts.length);i = currentModule25938.plus(i, 2))              {
              out[parts[i]] = parts[currentModule25938.plus(i, 1)];
              };
            return out;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26929))))            {
            return G26929;
            };
          G26929 = (function (arguments26937)            {
            arguments = arguments26937;
            var matchVal26936 = G26930;
            var anythingElse26928 = matchVal26936;
            throw ((("Match fail in hooves/hooves-plist against: ")+(anythingElse26928)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26929))))            {
            return G26929;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail parts)] (_newline-sequence (var out ({})) (for ((var i 0) (< i parts\\.length) (set! i (+ i 2))) (set! [out [parts i]] [parts (+ i 1)])) out)) (anything-else-26928 (_throw (_+ ''Match fail in hooves/hooves-plist against: '' anything-else-26928))))) for value ")+(JSON.stringify(G26930))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue26923 = actualFun26925.apply(this, arguments);
      while (recurP26926(returnValue26923))        {
        returnValue26923 = actualFun26925.apply(this, returnValue26923.args);
        };
      return returnValue26923;
      });
    // as-options{}
    // pattern - no dynamic value.
    ;
    currentModule25938.rx = (function ()      {
      var returnValue26959 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil26958",
          args:arguments
        };
        });
      var recurP26962 = (function (val26963)        {
        if ((("undefined")===((typeof val26963))))          {
          return false;
          };
        return (val26963.recurSigil===("recurSigil26958"));
        });
      var actualFun26961 = (function ()        {
        return (function (arguments26967)          {
          arguments = arguments26967;
          var G26965 = undefined;
          var G26966 = Array.prototype.slice.apply(arguments);
          G26965 = (function (arguments26974)            {
            arguments = arguments26974;
            var matchVal26968 = G26966;
            if ((!((("object")===((typeof matchVal26968))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal26968.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart26969 = Array.prototype.slice.call(matchVal26968, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart26969))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart26969.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var s = matchArraySimplePart26969[0];
            var matchArrayTailPart26970 = Array.prototype.slice.call(matchVal26968, 1);
            var matchTemp26971 = matchArrayTailPart26970[0];
            var previousMatchSucceeded26972 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTemp26971))))                {
                previousMatchSucceeded26972 = false;
                };
              var args = matchTemp26971;
              if (previousMatchSucceeded26972)                {
                break;
                };
              previousMatchSucceeded26972 = true;
              case 1:
              var fResult26973 = ((function (x)                {
                return "g";
                }))(matchTemp26971);
              if ((fResult26973===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceeded26972 = false;
                };
              var args = fResult26973;
              if (previousMatchSucceeded26972)                {
                break;
                };
              previousMatchSucceeded26972 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            return (new (RegExp)(s, args));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26965))))            {
            return G26965;
            };
          G26965 = (function (arguments26976)            {
            arguments = arguments26976;
            var matchVal26975 = G26966;
            var anythingElse26964 = matchVal26975;
            throw ((("Match fail in hooves/hooves-rx against: ")+(anythingElse26964)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26965))))            {
            return G26965;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: s :- (opt args ''g'')] (_newline-sequence (new RegExp s args))) (anything-else-26964 (_throw (_+ ''Match fail in hooves/hooves-rx against: '' anything-else-26964))))) for value ")+(JSON.stringify(G26966))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue26959 = actualFun26961.apply(this, arguments);
      while (recurP26962(returnValue26959))        {
        returnValue26959 = actualFun26961.apply(this, returnValue26959.args);
        };
      return returnValue26959;
      });
    // set-to!
    // macro - no dynamic value.
    ;
    currentModule25938.prefix = (function (i, ra)      {
      return [i].concat(ra);
      });
    currentModule25938.postfix = (function (i, ra)      {
      return [].concat(ra, [i]);
      });
    currentModule25938.identity = (function (x)      {
      return x;
      });
    var pushdividereturn = (function (item, array)      {
      array.push(item);
      return array;
      });
    var plistToObjectHelper = (function ()      {
      var returnValue27030 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil27029",
          args:arguments
        };
        });
      var recurP27033 = (function (val27034)        {
        if ((("undefined")===((typeof val27034))))          {
          return false;
          };
        return (val27034.recurSigil===("recurSigil27029"));
        });
      var actualFun27032 = (function ()        {
        return (function (arguments27038)          {
          arguments = arguments27038;
          var G27036 = undefined;
          var G27037 = Array.prototype.slice.apply(arguments);
          G27036 = (function (arguments27042)            {
            arguments = arguments27042;
            var matchVal27039 = G27037;
            if ((!((("object")===((typeof matchVal27039))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchVal27039.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp27040 = matchVal27039[0];
            var matchTemp27041 = matchVal27039[1];
            var objectAcc = matchTemp27040;
            if ((!((("object")===((typeof matchTemp27041))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchTemp27041.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return objectAcc;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G27036))))            {
            return G27036;
            };
          G27036 = (function (arguments27052)            {
            arguments = arguments27052;
            var matchVal27043 = G27037;
            if ((!((("object")===((typeof matchVal27043))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchVal27043.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp27044 = matchVal27043[0];
            var matchTemp27045 = matchVal27043[1];
            var objectAcc = matchTemp27044;
            if ((!((("object")===((typeof matchTemp27045))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchTemp27045.length>=2))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart27046 = Array.prototype.slice.call(matchTemp27045, 0, 2);
            if ((!((("object")===((typeof matchArraySimplePart27046))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchArraySimplePart27046.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp27047 = matchArraySimplePart27046[0];
            var matchTemp27048 = matchArraySimplePart27046[1];
            var matchFunExpr27050 = (function (G27049)              {
              return (((typeof G27049))===("string"));
              });
            if ((!(matchFunExpr27050(matchTemp27047))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var key = matchTemp27047;
            var value = matchTemp27048;
            var matchArrayTailPart27051 = Array.prototype.slice.call(matchTemp27045, 2);
            var rest = matchArrayTailPart27051;
            objectAcc[key] = value;
            return recur(objectAcc, rest);
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G27036))))            {
            return G27036;
            };
          G27036 = (function (arguments27054)            {
            arguments = arguments27054;
            var matchVal27053 = G27037;
            var anythingElse27035 = matchVal27053;
            throw ((("Match fail in plist->object-helper against: ")+(anythingElse27035)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G27036))))            {
            return G27036;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: object-acc [:]] (_newline-sequence object-acc)) ([: object-acc [: (string key) value (tail rest)]] (_newline-sequence (set! [object-acc key] value) (recur object-acc rest))) (anything-else-27035 (_throw (_+ ''Match fail in plist->object-helper against: '' anything-else-27035))))) for value ")+(JSON.stringify(G27037))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue27030 = actualFun27032.apply(this, arguments);
      while (recurP27033(returnValue27030))        {
        returnValue27030 = actualFun27032.apply(this, returnValue27030.args);
        };
      return returnValue27030;
      });
    currentModule25938.plistToObject = (function ()      {
      var returnValue27072 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil27071",
          args:arguments
        };
        });
      var recurP27075 = (function (val27076)        {
        if ((("undefined")===((typeof val27076))))          {
          return false;
          };
        return (val27076.recurSigil===("recurSigil27071"));
        });
      var actualFun27074 = (function ()        {
        return (function (arguments27080)          {
          arguments = arguments27080;
          var G27078 = undefined;
          var G27079 = Array.prototype.slice.apply(arguments);
          G27078 = (function (arguments27084)            {
            arguments = arguments27084;
            var matchVal27081 = G27079;
            if ((!((("object")===((typeof matchVal27081))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchVal27081.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart27082 = Array.prototype.slice.call(matchVal27081, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePart27082))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePart27082.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPart27083 = Array.prototype.slice.call(matchVal27081, 0);
            var kvPairs = matchArrayTailPart27083;
            return plistToObjectHelper({              
              
            }, kvPairs);
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G27078))))            {
            return G27078;
            };
          G27078 = (function (arguments27086)            {
            arguments = arguments27086;
            var matchVal27085 = G27079;
            var anythingElse27077 = matchVal27085;
            throw ((("Match fail in hooves/hooves-plist->object against: ")+(anythingElse27077)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G27078))))            {
            return G27078;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: (tail kv-pairs)] (_newline-sequence (plist->object-helper ({}) kv-pairs))) (anything-else-27077 (_throw (_+ ''Match fail in hooves/hooves-plist->object against: '' anything-else-27077))))) for value ")+(JSON.stringify(G27079))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue27072 = actualFun27074.apply(this, arguments);
      while (recurP27075(returnValue27072))        {
        returnValue27072 = actualFun27074.apply(this, returnValue27072.args);
        };
      return returnValue27072;
      });
    currentModule25938.filter = (function ()      {
      var returnValue27109 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigil27108",
          args:arguments
        };
        });
      var recurP27112 = (function (val27113)        {
        if ((("undefined")===((typeof val27113))))          {
          return false;
          };
        return (val27113.recurSigil===("recurSigil27108"));
        });
      var actualFun27111 = (function ()        {
        return (function (arguments27117)          {
          arguments = arguments27117;
          var G27115 = undefined;
          var G27116 = Array.prototype.slice.apply(arguments);
          G27115 = (function (arguments27122)            {
            arguments = arguments27122;
            var matchVal27118 = G27116;
            if ((!((("object")===((typeof matchVal27118))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchVal27118.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp27119 = matchVal27118[0];
            var matchTemp27120 = matchVal27118[1];
            var matchTemp27121 = matchVal27118[2];
            var fun = matchTemp27119;
            if ((!((("object")===((typeof matchTemp27120))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchTemp27120.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var acc = matchTemp27121;
            return acc;
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G27115))))            {
            return G27115;
            };
          G27115 = (function (arguments27129)            {
            arguments = arguments27129;
            var matchVal27123 = G27116;
            if ((!((("object")===((typeof matchVal27123))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchVal27123.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTemp27124 = matchVal27123[0];
            var matchTemp27125 = matchVal27123[1];
            var matchTemp27126 = matchVal27123[2];
            var fun = matchTemp27124;
            if ((!((("object")===((typeof matchTemp27125))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchTemp27125.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePart27127 = Array.prototype.slice.call(matchTemp27125, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePart27127))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePart27127.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var hd = matchArraySimplePart27127[0];
            var matchArrayTailPart27128 = Array.prototype.slice.call(matchTemp27125, 1);
            var tl = matchArrayTailPart27128;
            var acc = matchTemp27126;
            var r = fun(hd);
            return ((r)?(recur(fun, tl, pushdividereturn(hd, acc))) : (recur(fun, tl, acc)));
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G27115))))            {
            return G27115;
            };
          G27115 = (function (arguments27131)            {
            arguments = arguments27131;
            var matchVal27130 = G27116;
            if ((!((("object")===((typeof matchVal27130))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchVal27130.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var fun = matchVal27130[0];
            var ra = matchVal27130[1];
            return recur(fun, ra, []);
            ;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G27115))))            {
            return G27115;
            };
          G27115 = (function (arguments27133)            {
            arguments = arguments27133;
            var matchVal27132 = G27116;
            var anythingElse27114 = matchVal27132;
            throw ((("Match fail in hooves/hooves-filter against: ")+(anythingElse27114)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G27115))))            {
            return G27115;
            };
          throw ((("match-fail at ((match (\\.\\. Array prototype slice (apply arguments)) ([: fun [:] acc] (_newline-sequence acc)) ([: fun [: hd (tail tl)] acc] (_newline-sequence (var r (fun hd)) (if r (recur fun tl (push/return hd acc)) (recur fun tl acc)))) ([: fun ra] (_newline-sequence (recur fun ra [:]))) (anything-else-27114 (_throw (_+ ''Match fail in hooves/hooves-filter against: '' anything-else-27114))))) for value ")+(JSON.stringify(G27116))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValue27109 = actualFun27111.apply(this, arguments);
      while (recurP27112(returnValue27109))        {
        returnValue27109 = actualFun27111.apply(this, returnValue27109.args);
        };
      return returnValue27109;
      });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModule25938;
  }))