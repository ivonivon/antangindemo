/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         EC.Parallax.setup(sym);
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'sym-baloon'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("sym-baloon");
   //Edge symbol end:'sym-baloon'

   //=========================================================
   
   //Edge symbol: 'sym-env'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_env-letter}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("sym-env");
   //Edge symbol end:'sym-env'

   //=========================================================
   
   //Edge symbol: 'sym-crayons'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3690, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("sym-crayons");
   //Edge symbol end:'sym-crayons'

   //=========================================================
   
   //Edge symbol: 'sym-boy-sic'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("sym-boy-sic");
   //Edge symbol end:'sym-boy-sic'

   //=========================================================
   
   //Edge symbol: 'sym-sun'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("sym-sun");
   //Edge symbol end:'sym-sun'

   //=========================================================
   
   //Edge symbol: 'sym-product'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_sym-pro-but2}", "mouseover", function(sym, e) {
         sym.$("sym-pro-but2").css("opacity", 0.8);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sym-pro-but2}", "click", function(sym, e) {
         sym.$("sym-pro-but2").css("z-index", 100);
         sym.$("sym-pro-but1").css("z-index", 99);
         sym.$("ubat1").css("z-index", 99);
         sym.$("ubat2").css("z-index", 1000);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sym-pro-but2}", "mouseout", function(sym, e) {
         sym.$("sym-pro-but2").css("opacity", 1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sym-pro-but1}", "click", function(sym, e) {
         sym.$("sym-pro-but1").css("z-index", 100);
         sym.$("sym-pro-but2").css("z-index", 99);
         sym.$("ubat").css("z-index", 100);
         sym.$("ubat2").css("z-index", 99);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sym-pro-but1}", "mouseover", function(sym, e) {
         sym.$("sym-pro-but1").css("opacity", 0.8);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sym-pro-but1}", "mouseout", function(sym, e) {
         sym.$("sym-pro-but1").css("opacity", 1);

      });
      //Edge binding end

   })("sym-product");
   //Edge symbol end:'sym-product'

   //=========================================================
   
   //Edge symbol: 'sym-pro-but2'
   (function(symbolName) {   
   
   })("sym-pro-but2");
   //Edge symbol end:'sym-pro-but2'

   //=========================================================
   
   //Edge symbol: 'sym-pro-but1'
   (function(symbolName) {   
   
   })("sym-pro-but1");
   //Edge symbol end:'sym-pro-but1'

   //=========================================================
   
   //Edge symbol: 'sym-cloud-white'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 105000, function(sym, e) {
         // insert code here
         sym.play(0);

      });
      //Edge binding end

   })("sym-cloud-white");
   //Edge symbol end:'sym-cloud-white'

   //=========================================================
   
   //Edge symbol: 'sym-cloud-far'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 170000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("sym-cloud-far");
   //Edge symbol end:'sym-cloud-far'

   //=========================================================
   
   //Edge symbol: 'sym-sunlight'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 45000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("sym-sunlight");
   //Edge symbol end:'sym-sunlight'

   //=========================================================
   
   //Edge symbol: 'sym-grass-1'
   (function(symbolName) {   
   
   })("sym-grass-1");
   //Edge symbol end:'sym-grass-1'

   //=========================================================
   
   //Edge symbol: 'sym-tower'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 598, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("sym-tower");
   //Edge symbol end:'sym-tower'

   //=========================================================
   
   //Edge symbol: 'sym-houses'
   (function(symbolName) {   
   
   })("sym-houses");
   //Edge symbol end:'sym-houses'

   //=========================================================
   
   //Edge symbol: 'sym-boy-play'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2044, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("sym-boy-play");
   //Edge symbol end:'sym-boy-play'

   //=========================================================
   
   //Edge symbol: 'sym-girl-play'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("sym-girl-play");
   //Edge symbol end:'sym-girl-play'

   //=========================================================
   
   //Edge symbol: 'sym-ropeGirl'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2185, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("sym-ropeGirl");
   //Edge symbol end:'sym-ropeGirl'

   //=========================================================
   
   //Edge symbol: 'sym-GirlHair'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1057, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("sym-GirlHair");
   //Edge symbol end:'sym-GirlHair'

   //=========================================================
   
   //Edge symbol: 'sym-boy-roller'
   (function(symbolName) {   
   
   })("sym-boy-roller");
   //Edge symbol end:'sym-boy-roller'

   //=========================================================
   
   //Edge symbol: 'sym-eyes'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("sym-eyes");
   //Edge symbol end:'sym-eyes'

})(jQuery, AdobeEdge, "EDGE-96553822");