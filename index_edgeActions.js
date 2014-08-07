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

      Symbol.bindElementAction(compId, symbolName, "${_sym-env2}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 170209, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'sym-baloon'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4598, function(sym, e) {
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

      

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle9}", "mouseover", function(sym, e) {
         var pos = sym.getPosition();
         sym.play(pos);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle9}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         var pos = sym.getPosition();
         sym.playReverse(pos);
         
         

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

   //=========================================================
   
   //Edge symbol: 'sym-ingredients'
   (function(symbolName) {   
   
   })("sym-ingredients");
   //Edge symbol end:'sym-ingredients'

   //=========================================================
   
   //Edge symbol: 'symbol-ing-1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_i1}", "mouseover", function(sym, e) {
         var pos = sym.getPosition();
         sym.play(pos);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_i1}", "mouseout", function(sym, e) {
         var pos = sym.getPosition();
         sym.playReverse(pos);

      });
      //Edge binding end

   })("symbol-ing-1");
   //Edge symbol end:'symbol-ing-1'

   //=========================================================
   
   //Edge symbol: 'sym-ing-2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Rectangle3}", "mouseover", function(sym, e) {
         sym.stop('hover');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle3}", "mouseout", function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

   })("sym-ing-2");
   //Edge symbol end:'sym-ing-2'

   //=========================================================
   
   //Edge symbol: 'sym-ing-3'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Rectangle2}", "mouseover", function(sym, e) {
         var pos = sym.getPosition();
         sym.play(pos);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle2}", "mouseout", function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

   })("sym-ing-3");
   //Edge symbol end:'sym-ing-3'

   //=========================================================
   
   //Edge symbol: 'sym-ing-4'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle10}", "mouseover", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle10}", "mouseout", function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

   })("sym-ing-4");
   //Edge symbol end:'sym-ing-4'

   //=========================================================
   
   //Edge symbol: 'sym-ing-8'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle8}", "mouseover", function(sym, e) {
         var pos = sym.getPosition();
         sym.play(pos);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle8}", "mouseout", function(sym, e) {
         var pos = sym.getPosition();
         sym.playReverse(pos);
         

      });
      //Edge binding end

   })("sym-ing-8");
   //Edge symbol end:'sym-ing-8'

   //=========================================================
   
   //Edge symbol: 'sym-ing-7'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Rectangle3}", "mouseover", function(sym, e) {
         var pos = sym.getPosition();
         sym.play(pos);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle3}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         var pos = sym.getPosition();
         sym.playReverse(pos);

      });
      //Edge binding end

   })("sym-ing-7");
   //Edge symbol end:'sym-ing-7'

   //=========================================================
   
   //Edge symbol: 'sym-ing-6'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Rectangle2}", "mouseover", function(sym, e) {
         var pos = sym.getPosition();
         sym.play(pos);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle2}", "mouseout", function(sym, e) {
         var pos = sym.getPosition();
         sym.playReverse(pos);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.play('hover');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.play('hover');

      });
      //Edge binding end

   })("sym-ing-6");
   //Edge symbol end:'sym-ing-6'

   //=========================================================
   
   //Edge symbol: 'sym-ing-5'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_i5}", "mouseover", function(sym, e) {
         var pos = sym.getPosition();
         sym.play(pos);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_i5}", "mouseout", function(sym, e) {
         var pos = sym.getPosition();
         sym.playReverse(pos);

      });
      //Edge binding end

   })("sym-ing-5");
   //Edge symbol end:'sym-ing-5'

   //=========================================================
   
   //Edge symbol: 'sym-ing-21'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6196, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("sym-ing-21");
   //Edge symbol end:'sym-ing-21'

   //=========================================================
   
   //Edge symbol: 'sym-ing-41'
   (function(symbolName) {   
   
   })("sym-ing-41");
   //Edge symbol end:'sym-ing-41'

   //=========================================================
   
   //Edge symbol: 'sym-boyEducated'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("sym-boyEducated");
   //Edge symbol end:'sym-boyEducated'

   //=========================================================
   
   //Edge symbol: 'sym-girl-educated'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("sym-girl-educated");
   //Edge symbol end:'sym-girl-educated'

   //=========================================================
   
   //Edge symbol: 'sym-kupu'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 31785, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("sym-kupu");
   //Edge symbol end:'sym-kupu'

   //=========================================================
   
   //Edge symbol: 'sym-kupu-fly'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("sym-kupu-fly");
   //Edge symbol end:'sym-kupu-fly'

   //=========================================================
   
   //Edge symbol: 'symbol-download-boy'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_RoundRect3}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute)
         window.open("files/kids_corner_boy.pdf", "_self");
         
         
         

      });
      //Edge binding end

   })("symbol-download-boy");
   //Edge symbol end:'symbol-download-boy'

   //=========================================================
   
   //Edge symbol: 'sym-download-girl'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_RoundRect2}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute)
         window.open("files/kids_corner_girl.pdf", "_self");
         
         
         

      });
      //Edge binding end

   })("sym-download-girl");
   //Edge symbol end:'sym-download-girl'

   //=========================================================
   
   //Edge symbol: 'sym-logo'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Rectangle2}", "mouseover", function(sym, e) {
         var pos = sym.getPosition();
         sym.play(pos);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle2}", "mouseout", function(sym, e) {
         var pos = sym.getPosition();
         sym.playReverse(pos);
         
         

      });
      //Edge binding end

   })("sym-logo");
   //Edge symbol end:'sym-logo'

   //=========================================================
   
   //Edge symbol: 'sym-but-product'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_text-product}", "mouseover", function(sym, e) {
         var pos = sym.getPosition();
         sym.play(pos);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_text-product}", "mouseout", function(sym, e) {
         var pos = sym.getPosition();
         sym.playReverse(pos);
         
         

      });
      //Edge binding end

   })("sym-but-product");
   //Edge symbol end:'sym-but-product'

   //=========================================================
   
   //Edge symbol: 'sym-but-ing'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_text-ingredients}", "mouseout", function(sym, e) {
         var pos = sym.getPosition();
         sym.playReverse(pos);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_text-ingredients}", "mouseover", function(sym, e) {
         var pos = sym.getPosition();
         sym.play(pos);

      });
      //Edge binding end

   })("sym-but-ing");
   //Edge symbol end:'sym-but-ing'

   //=========================================================
   
   //Edge symbol: 'sym-but-news'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_text-ingredientsCopy}", "mouseout", function(sym, e) {
         var pos = sym.getPosition();
         sym.playReverse(pos);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_text-ingredientsCopy}", "mouseover", function(sym, e) {
         var pos = sym.getPosition();
         sym.play(pos);

      });
      //Edge binding end

   })("sym-but-news");
   //Edge symbol end:'sym-but-news'

   //=========================================================
   
   //Edge symbol: 'sym-but-kids'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_text-ingredientsCopy2}", "mouseout", function(sym, e) {
         var pos = sym.getPosition();
         sym.playReverse(pos);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_text-ingredientsCopy2}", "mouseover", function(sym, e) {
         var pos = sym.getPosition();
         sym.play(pos);

      });
      //Edge binding end

   })("sym-but-kids");
   //Edge symbol end:'sym-but-kids'

   //=========================================================
   
   //Edge symbol: 'sym-but-help'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_text-ingredientsCopy3}", "mouseout", function(sym, e) {
         var pos = sym.getPosition();
         sym.playReverse(pos);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_text-ingredientsCopy3}", "mouseover", function(sym, e) {
         var pos = sym.getPosition();
         sym.play(pos);

      });
      //Edge binding end

   })("sym-but-help");
   //Edge symbol end:'sym-but-help'

   //=========================================================
   
   //Edge symbol: 'sym-arrow-know'
   (function(symbolName) {   
   
   })("sym-arrow-know");
   //Edge symbol end:'sym-arrow-know'

   //=========================================================
   
   //Edge symbol: 'sym-cloud-yellow-far'
   (function(symbolName) {   
   
   })("sym-cloud-yellow-far");
   //Edge symbol end:'sym-cloud-yellow-far'

   //=========================================================
   
   //Edge symbol: 'sym-cloud-yellow-near'
   (function(symbolName) {   
   
   })("sym-cloud-yellow-near");
   //Edge symbol end:'sym-cloud-yellow-near'

   //=========================================================
   
   //Edge symbol: 'sym-ball'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("sym-ball");
   //Edge symbol end:'sym-ball'

})(jQuery, AdobeEdge, "EDGE-96553822");