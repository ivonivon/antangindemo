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
      
      
      

      Symbol.bindElementAction(compId, symbolName, "${_sym-env2}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 170000, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         EC.Parallax.setup(sym);
         
         sym.$("body").append(sym.$("sym-back-to").css({"position":"fixed", "top" : "94%"}));
         
         sym.$("html").niceScroll();
         //$("#divexample2").niceScroll("#Stage",{cursorcolor:"#0F0",boxzoom:true});

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_sym-but-kids}", "click", function(sym, e) {
         var element = sym.$("pages5");
         $('html,body').animate({scrollTop: element.offset().top}, "slow");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sym-but-news}", "click", function(sym, e) {
         var element = sym.$("pages4");
         $('html,body').animate({scrollTop: element.offset().top}, "slow");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sym-but-ing}", "click", function(sym, e) {
         var element = sym.$("pages3");
         $('html,body').animate({scrollTop: element.offset().top}, "slow");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sym-but-product}", "click", function(sym, e) {
         var element = sym.$("pages2");
         $('html,body').animate({scrollTop: element.offset().top}, "slow");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sym-but-help}", "click", function(sym, e) {
         var element = sym.$("pages6");
         $('html,body').animate({scrollTop: element.offset().top}, "slow");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sym-back-to}", "click", function(sym, e) {
         var element = sym.$("pages1");
         $('html,body').animate({scrollTop: element.offset().top}, "slow");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_en2}", "click", function(sym, e) {
         // Change the text in an element [English]
         
         // Menu
         sym.getSymbol("sym-but-product").$("text-product").html("PRODUCT");
         sym.getSymbol("sym-but-ing").$("text-ingredients").html("INGREDIENTS");
         sym.getSymbol("sym-but-news").$("text-news").html("NEWS");
         sym.getSymbol("sym-but-kids").$("text-corner").html("KID'S CORNER");
         sym.getSymbol("sym-but-help").$("text-help").html("HELP?");
         
         // Page1 
         sym.$("P_P1_A1").html("Masuk angin is often called the symptoms of stomach, fever, headache, and cold sweat.");
         sym.$("T_P1_A1").html("What is masuk angin?");
         sym.$("P_P1_A2").html("The fever and cold body condition is often followed by indigestion problem, which is acondition when you have an gastric indigestion.");
         sym.$("T_P1_A2").html("What are the symptoms?");
         sym.getSymbol("sym-know").$("Do_You").html("Do You");
         sym.getSymbol("sym-know").$("Know").html("Know?");
         
         // Page2-1
         sym.getSymbol("sym_page3x").getSymbol("sym-khasiat-1").$("T_P2_A1").html("Properties and usage:");
         sym.getSymbol("sym_page3x").getSymbol("sym-khasiat-1").$("P_P2_A1").html(" • Helps reduce cold, flatulence, nausea and vomit.<br />• Helps soothe throat<br />• Helps prevent travel sickness<br />• Helps improve immunity<br />• Helps maintain health and warms the body");
         sym.getSymbol("sym_page3x").getSymbol("sym-khasiat-1").$("T_P2_A2").html("Dosage and usage directions:");
         sym.getSymbol("sym_page3x").getSymbol("sym-khasiat-1").$("P_P2_A2").html("Take 3 times daily after meals until the condition improved<br />• For children aged 1 year : 1/2 sachet<br />• For children aged 2-6 year : 1 sachet.");
         sym.getSymbol("sym_page3x").getSymbol("sym-khasiat-1").$("T_P2_A3").html("Honey");
         sym.getSymbol("sym_page3x").getSymbol("sym-khasiat-1").$("T_P2_A4").html("Mint");
         
         // Page2-2
         sym.getSymbol("sym_page3x").getSymbol("sym-khasiat-2").$("T_P2").html("PROCESS");
         sym.getSymbol("sym_page3x").getSymbol("sym-khasiat-2").$("T_P22_A1").html("GOOD NATURE");
         sym.getSymbol("sym_page3x").getSymbol("sym-khasiat-2").$("T_P22_A2").html("CAREFULLY SELECTED");
         sym.getSymbol("sym_page3x").getSymbol("sym-khasiat-2").$("T_P22_A3").html("POTENTIAL RAW METARIAL");
         sym.getSymbol("sym_page3x").getSymbol("sym-khasiat-2").$("T_P22_A4").html("STATE OF THE ART TECHNOLOGY");
         sym.getSymbol("sym_page3x").getSymbol("sym-khasiat-2").$("T_P22_A5").html("QUALITY CONTROL");
         sym.getSymbol("sym_page3x").getSymbol("sym-khasiat-2").$("T_P22_A6").html("HIGH QUALITY PRODUCT");
         
         // Page2-3
         sym.getSymbol("sym_page3x").getSymbol("sym-khasiat-3").$("T_P23").html("RESEARCH & DEVELOPMENT");
         sym.getSymbol("sym_page3x").getSymbol("sym-khasiat-3").$("T_P23_A1").html("Pilot Plant");
         sym.getSymbol("sym_page3x").getSymbol("sym-khasiat-3").$("P_P23_A1").html("Our Pilot Plant offers ways to stimulate a continuous extraction process and preliminary measurement standards that include temperature, defoliation requirements, and production (in terms of time and cost).");
         sym.getSymbol("sym_page3x").getSymbol("sym-khasiat-3").$("T_P23_A2").html("Laboratory");
         sym.getSymbol("sym_page3x").getSymbol("sym-khasiat-3").$("P_P23_A2").html("Deltomed laboratory owns a comprehensive equipment used to support the performance of micro extraction, quality control technique as well as the research and development.");
         
         // Page3 / Ingredients
         sym.$("T_P3").html("INGREDIENTS");
         sym.$("P_P3_A1-2").html("To heal nausea & gastric indigestion and alleviate blood circulation.");
         sym.$("P_P3_A2-2").html("Increase the body's stamina.");
         sym.$("P_P3_A3-2").html("To help reducing gastric digestion, as in expelling the gas.");
         sym.$("P_P3_A4-2").html("Analgesic & antipyretic and to relief gastric digestion.");
         sym.$("P_P3_A5-2").html("Raise the stamina, increase the body’s immune, and accelerating the regeneration of a cell.");
         sym.$("P_P3_A6-2").html("Hepatoprotektor and increase appetite.");
         sym.$("P_P3_A7-2").html("Give warmth to body and reduce nausea & headache.");
         sym.$("P_P3_A8-2").html("Increase the body endurance, and against infection especially in the case of the common cold and ISPA.");
         
         // Page4 / News
         sym.getSymbol("sym-houseW").$("P_P4_A1").html("Full of Games of Coloring & Puzzles Activities.");
         sym.getSymbol("sym-houseW").getSymbol("sym-want-know").$("text-P4-want-to-know").html("Want to know?");
         sym.getSymbol("sym-houseW").getSymbol("sym-want-know").$("text-P4-click").html("Click...");
         
         // Page5 / Contact
         sym.$("T_P5").html("NEED HELP?");
         sym.$("T_P5_A2").html("— PLANT —");
         
         // Mail Form
         sym.getSymbol("sym-env2").$("text-P6-name").html("Full Name*:");
         sym.getSymbol("sym-env2").$("text-P6-company").html("Company*:");
         sym.getSymbol("sym-env2").$("text-P6-mail").html("Email Address*:");
         sym.getSymbol("sym-env2").$("text-P6-message").html("Message*:");
         sym.getSymbol("sym-env2").$("text-P6-mandatory").html("*) Must be Filled");
         sym.getSymbol("sym-env2").$("text-P6-send").html("Send");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_id2}", "click", function(sym, e) {
         // Change the text in an element [Bahasa]
         // Menu
         sym.getSymbol("sym-but-product").$("text-product").html("PRODUK");
         sym.getSymbol("sym-but-ing").$("text-ingredients").html("KOMPOSISI");
         sym.getSymbol("sym-but-news").$("text-news").html("BERITA");
         sym.getSymbol("sym-but-kids").$("text-corner").html("DUNIA ANAK");
         sym.getSymbol("sym-but-help").$("text-help").html("BANTUAN?");
         
         // Page1
         sym.$("P_P1_A1").html("Masuk angin sering disebut gejala perut kembung, meriang, kepala pusing dan keluar keringat dingin.");
         sym.$("T_P1_A1").html("Apa sih masuk angin?");
         sym.$("P_P1_A2").html("Meriang dan rasa dingin dalam tubuh ini sering diikuti gangguan saluran pencernaan, yaitu perut terasa kembung.");
         sym.$("T_P1_A2").html("Apa gejala masuk angin?");
         sym.getSymbol("sym-know").$("Do_You").html("Apakah Kamu");
         sym.getSymbol("sym-know").$("Know").html("Tahu?");
         
         // Page2-1
         sym.getSymbol("sym_page3x").getSymbol("sym-khasiat-1").$("T_P2_A1").html("Khasiat dan kegunaan:");
         sym.getSymbol("sym_page3x").getSymbol("sym-khasiat-1").$("P_P2_A1").html("• Membantu meredakan masuk angin, perut kembung, mual dan muntah<br />• Membantu melegakan tenggorokan<br />• Membantu mencegah mabuk perjalanan<br />• Membantu meningkatkan daya tahan tubuh<br />• Membantu memelihara kesehatan dan menghangatkan badan");
         sym.getSymbol("sym_page3x").getSymbol("sym-khasiat-1").$("T_P2_A2").html("Dosis dan cara pemakaian:");
         sym.getSymbol("sym_page3x").getSymbol("sym-khasiat-1").$("P_P2_A2").html("Minum 3 kali sehari, sesudah makan sampai membaik<br />• Untuk anak 1 tahun : 1/2 sachet<br />• Untuk anak 2-6 tahun : 1 sachet");
         sym.getSymbol("sym_page3x").getSymbol("sym-khasiat-1").$("T_P2_A3").html("Madu");
         sym.getSymbol("sym_page3x").getSymbol("sym-khasiat-1").$("T_P2_A4").html("Meniran");
         
         // Page2-2
         sym.getSymbol("sym_page3x").getSymbol("sym-khasiat-2").$("T_P2").html("PROSES");
         sym.getSymbol("sym_page3x").getSymbol("sym-khasiat-2").$("T_P22_A1").html("BERASAL DARI ALAM");
         sym.getSymbol("sym_page3x").getSymbol("sym-khasiat-2").$("T_P22_A2").html("DIPILIH HATI-HATI");
         sym.getSymbol("sym_page3x").getSymbol("sym-khasiat-2").$("T_P22_A3").html("BAHAN MENTAL YANG BERPOTENSI");
         sym.getSymbol("sym_page3x").getSymbol("sym-khasiat-2").$("T_P22_A4").html("TEKNOLOGI MODERN");
         sym.getSymbol("sym_page3x").getSymbol("sym-khasiat-2").$("T_P22_A5").html("PEMERIKSAAN KUALITAS SECARA KETAT");
         sym.getSymbol("sym_page3x").getSymbol("sym-khasiat-2").$("T_P22_A6").html("PRODUK BERKUALITAS TINGGI");
         
         // Page2-3
         sym.getSymbol("sym_page3x").getSymbol("sym-khasiat-3").$("T_P23").html("PENELITIAN & PENGEMBANGAN");
         sym.getSymbol("sym_page3x").getSymbol("sym-khasiat-3").$("T_P23_A1").html("Pilot Plant");
         sym.getSymbol("sym_page3x").getSymbol("sym-khasiat-3").$("P_P23_A1").html("Pilot Plant kami menyediakan cara untuk menstimulasi proses ekstraksi secara berkelanjutan dan proses penentuan pengukuran awal yang mencakup temperatur, persyaratan pengguguran, hasil panen, dan produksi dari segi waktu dan biaya.");
         sym.getSymbol("sym_page3x").getSymbol("sym-khasiat-3").$("T_P23_A2").html("Laboratorium");
         sym.getSymbol("sym_page3x").getSymbol("sym-khasiat-3").$("P_P23_A2").html("Laboratorium Deltomed memiliki peralatan yang sangat lengkap untuk mendukung kinerja ekstraksi mikro, teknik pengendalian mutu, serta penelitian dan pengembangan.");
         
         // Page3 / Ingredients
         sym.$("T_P3").html("KOMPOSISI");
         sym.$("P_P3_A1-2").html("Mengatasi mual & kembung dan melancarkan peredaran darah.");
         sym.$("P_P3_A2-2").html("Meningkatkan daya tahan tubuh.");
         sym.$("P_P3_A3-2").html("Meredakan kembung dan melegakan pernapasan.");
         sym.$("P_P3_A4-2").html("Analgesik & antipiretik dan anti kembung.");
         sym.$("P_P3_A5-2").html("Meningkatkan stamina, meningkatkan daya tahan tubuh, dan mempercepat regenerasi sel.");
         sym.$("P_P3_A6-2").html("Hepatoprotektor dan meningkatkan nafsu makan.");
         sym.$("P_P3_A7-2").html("Menghangatkan badan dan meredakan mual & pusing.");
         sym.$("P_P3_A8-2").html("Meningkatkan daya tahan tubuh dan melawan infeksi, khususnya pada kasus common cold dan ISPA.");
         
         // Page4 / News
         sym.getSymbol("sym-houseW").$("P_P4_A1").html("Lomba berisi aktivitas mewarnai dan merangkai puzzle.");
         sym.getSymbol("sym-houseW").getSymbol("sym-want-know").$("text-P4-want-to-know").html("Ingin tahu?");
         sym.getSymbol("sym-houseW").getSymbol("sym-want-know").$("text-P4-click").html("Klik...");
         
         
         // Page5 / Contact
         sym.$("T_P5").html("BANTUAN?");
         sym.$("T_P5_A2").html("— PABRIK —");
         
         // Mail Form
         sym.getSymbol("sym-env2").$("text-P6-name").html("Nama*:");
         sym.getSymbol("sym-env2").$("text-P6-company").html("Perusahaan*:");
         sym.getSymbol("sym-env2").$("text-P6-mail").html("Email*:");
         sym.getSymbol("sym-env2").$("text-P6-message").html("Pesan*:");
         sym.getSymbol("sym-env2").$("text-P6-mandatory").html("*) Harus Diisi");
         sym.getSymbol("sym-env2").$("text-P6-send").html("Kirim");

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
         sym.$("ubat").css("opacity", 0);
         sym.$("ubat2").css("opacity", 1);
         
         //sym.$("ubat1").css("z-index", 99);
         //sym.$("ubat2").css("z-index", 1000);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sym-pro-but2}", "mouseout", function(sym, e) {
         sym.$("sym-pro-but2").css("opacity", 1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sym-pro-but1}", "click", function(sym, e) {
         sym.$("sym-pro-but1").css("z-index", 100);
         sym.$("sym-pro-but2").css("z-index", 99);
         sym.$("ubat").css("opacity", 1);
         sym.$("ubat2").css("opacity", 0);
         //sym.$("ubat").css("z-index", 100);
         //sym.$("ubat2").css("z-index", 99);
         

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
   
      Symbol.bindElementAction(compId, symbolName, "${_text-news}", "mouseout", function(sym, e) {
         var pos = sym.getPosition();
         sym.playReverse(pos);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_text-news}", "mouseover", function(sym, e) {
         var pos = sym.getPosition();
         sym.play(pos);

      });
      //Edge binding end

   })("sym-but-news");
   //Edge symbol end:'sym-but-news'

   //=========================================================
   
   //Edge symbol: 'sym-but-kids'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_text-corner}", "mouseout", function(sym, e) {
         var pos = sym.getPosition();
         sym.playReverse(pos);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_text-corner}", "mouseover", function(sym, e) {
         var pos = sym.getPosition();
         sym.play(pos);

      });
      //Edge binding end

   })("sym-but-kids");
   //Edge symbol end:'sym-but-kids'

   //=========================================================
   
   //Edge symbol: 'sym-but-help'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_text-help}", "mouseout", function(sym, e) {
         var pos = sym.getPosition();
         sym.playReverse(pos);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_text-help}", "mouseover", function(sym, e) {
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

   //=========================================================
   
   //Edge symbol: 'sym-ball-rotate'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26000, function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("sym-ball-rotate");
   //Edge symbol end:'sym-ball-rotate'

   //=========================================================
   
   //Edge symbol: 'sym-know'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

   })("sym-know");
   //Edge symbol end:'sym-know'

   //=========================================================
   
   //Edge symbol: 'sym_page3x'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_il1}", "mouseover", function(sym, e) {
         sym.$("il1").css("background-color", "#f8981c");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_il1}", "mouseout", function(sym, e) {
         var current = sym.getVariable("current");
         if (!(current == "item1")) {
         	sym.$("il1").css("background-color", "rgba(255,255,255,0.00");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_il1}", "click", function(sym, e) {
         /*sym.$("il2").css("background-color", "rgba(255,255,255,0.00");
         sym.$("il3").css("background-color", "rgba(255,255,255,0.00");
         
         sym.setVariable("current", "item1");
         sym.$("il1").css("background-color", "#f8981c");
         
         sym.$("sym-khasiat-1").css("opacity", 1);
         sym.$("sym-khasiat-2").css("opacity", 0);
         sym.$("sym-khasiat-3").css("opacity", 0);
         
         var current = sym.getVariable("current");
         if (!(current == "item1")) {
         	sym.play();
         }*/
         
         sym.setVariable("current", "item1");
         sym.$("il2").css("background-color", "rgba(255,255,255,0.00");
         sym.$("il3").css("background-color", "rgba(255,255,255,0.00");
         sym.$("sym-khasiat-1").css("opacity", 1);
         sym.$("sym-khasiat-2").css("opacity", 0);
         sym.$("sym-khasiat-3").css("opacity", 0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_il2}", "click", function(sym, e) {
         /*sym.play();
         
         sym.$("sym-khasiat-1").css("opacity", 0);
         sym.$("sym-khasiat-2").css("opacity", 1);
         sym.$("sym-khasiat-3").css("opacity", 0);
         */
         
         sym.setVariable("current", "item2");
         sym.$("il1").css("background-color", "rgba(255,255,255,0.00");
         sym.$("il3").css("background-color", "rgba(255,255,255,0.00");
         sym.$("sym-khasiat-1").css("opacity", 0);
         sym.$("sym-khasiat-2").css("opacity", 1);
         sym.$("sym-khasiat-3").css("opacity", 0);
         
         sym.getSymbol("sym-khasiat-2").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_il2}", "mouseover", function(sym, e) {
         sym.$("il2").css("background-color", "#f8981c");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_il2}", "mouseout", function(sym, e) {
         var current = sym.getVariable("current");
         if (!(current == "item2")) {
         	sym.$("il2").css("background-color", "rgba(255,255,255,0.00");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_il3}", "click", function(sym, e) {
         /*sym.play();
         
         sym.$("sym-khasiat-1").css("opacity", 0);
         sym.$("sym-khasiat-2").css("opacity", 0);
         sym.$("sym-khasiat-3").css("opacity", 1);
         */
         
         sym.setVariable("current", "item3");
         sym.$("il2").css("background-color", "rgba(255,255,255,0.00");
         sym.$("il1").css("background-color", "rgba(255,255,255,0.00");
         sym.$("sym-khasiat-1").css("opacity", 0);
         sym.$("sym-khasiat-2").css("opacity", 0);
         sym.$("sym-khasiat-3").css("opacity", 1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_il3}", "mouseover", function(sym, e) {
         sym.$("il3").css("background-color", "#f8981c");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_il3}", "mouseout", function(sym, e) {
         var current = sym.getVariable("current");
         if (!(current == "item3")) {
         	sym.$("il3").css("background-color", "rgba(255,255,255,0.00");
         }

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.setVariable("current", "item1");

      });
      //Edge binding end

   })("sym_page3x");
   //Edge symbol end:'sym_page3x'

   //=========================================================
   
   //Edge symbol: 'sym-tv'
   (function(symbolName) {   
   
   })("sym-tv");
   //Edge symbol end:'sym-tv'

   //=========================================================
   
   //Edge symbol: 'sym-houseW'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Rectangle4}", "mouseover", function(sym, e) {
         var pos = sym.getSymbol("sym-tv-left").getPosition();
         sym.getSymbol("sym-tv-left").play(pos);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle4}", "mouseout", function(sym, e) {
         var pos = sym.getSymbol("sym-tv-left").getPosition();
         sym.getSymbol("sym-tv-left").playReverse(pos);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle4Copy}", "mouseover", function(sym, e) {
         var pos = sym.getSymbol("sym-tv-right").getPosition();
         sym.getSymbol("sym-tv-right").play(pos);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle4Copy}", "mouseout", function(sym, e) {
         var pos = sym.getSymbol("sym-tv-right").getPosition();
         sym.getSymbol("sym-tv-right").playReverse(pos);
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle4Copy}", "click", function(sym, e) {
         sym.getSymbol("sym-event-placeholder").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle4}", "click", function(sym, e) {
         var pos = sym.getSymbol("sym-event-placeholder").getPosition();
         if (pos == 0) {
         	sym.getSymbol("sym-event-placeholder").playReverse("end");
         } else {
         sym.getSymbol("sym-event-placeholder").playReverse();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sym-tv-right}", "click", function(sym, e) {
         
         	sym.getSymbol("sym-event-placeholder").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sym-tv-left}", "click", function(sym, e) {
         var pos = sym.getSymbol("sym-event-placeholder").getPosition();
         if (pos == 0) {
         	sym.getSymbol("sym-event-placeholder").playReverse("end");
         } else {
         sym.getSymbol("sym-event-placeholder").playReverse();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sym-info-but}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://www.youtube.com/watch?v=JYJbI0Q-OdM", "_blank");
         

      });
      //Edge binding end

   })("sym-houseW");
   //Edge symbol end:'sym-houseW'

   //=========================================================
   
   //Edge symbol: 'sym-info-but'
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

   })("sym-info-but");
   //Edge symbol end:'sym-info-but'

   //=========================================================
   
   //Edge symbol: 'sym-want-know'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("sym-want-know");
   //Edge symbol end:'sym-want-know'

   //=========================================================
   
   //Edge symbol: 'sym-back-top'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle5}", "click", function(sym, e) {
         var element = sym.$("pages1");
         $('html,body').animate({scrollTop: element.offset().top}, "slow");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle5}", "mouseover", function(sym, e) {
         var pos = sym.getPosition();
         sym.play(pos);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle5}", "mouseout", function(sym, e) {
         var pos = sym.getPosition();
         sym.playReverse(pos);
         

      });
      //Edge binding end

   })("sym-back-top");
   //Edge symbol end:'sym-back-top'

   //=========================================================
   
   //Edge symbol: 'sym-khasiat-1'
   (function(symbolName) {   
   
   })("sym-khasiat-1");
   //Edge symbol end:'sym-khasiat-1'

   //=========================================================
   
   //Edge symbol: 'sym-khasiat-2'
   (function(symbolName) {   
   
   })("sym-khasiat-2");
   //Edge symbol end:'sym-khasiat-2'

   //=========================================================
   
   //Edge symbol: 'sym-khasiat-3'
   (function(symbolName) {   
   
   })("sym-khasiat-3");
   //Edge symbol end:'sym-khasiat-3'

   //=========================================================
   
   //Edge symbol: 'sym-back-to'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Rectangle3}", "mouseover", function(sym, e) {
         var pos = sym.getPosition();
         sym.play(pos);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle3}", "mouseout", function(sym, e) {
         var pos = sym.getPosition();
         sym.playReverse(pos);
         

      });
      //Edge binding end

   })("sym-back-to");
   //Edge symbol end:'sym-back-to'

   //=========================================================
   
   //Edge symbol: 'sym-busa'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("sym-busa");
   //Edge symbol end:'sym-busa'

   //=========================================================
   
   //Edge symbol: 'sym-tv-left'
   (function(symbolName) {   
   
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

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle8}", "click", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

   })("sym-tv-left");
   //Edge symbol end:'sym-tv-left'

   //=========================================================
   
   //Edge symbol: 'sym-tv-right'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Rectangle5}", "mouseover", function(sym, e) {
         var pos = sym.getPosition();
         sym.play(pos);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle5}", "mouseout", function(sym, e) {
         var pos = sym.getPosition();
         sym.playReverse(pos);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle5}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("sym-tv-right");
   //Edge symbol end:'sym-tv-right'

   //=========================================================
   
   //Edge symbol: 'sym-event-placeholder'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("sym-event-placeholder");
   //Edge symbol end:'sym-event-placeholder'

   //=========================================================
   
   //Edge symbol: 'sym-delto'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Rectangle4}", "click", function(sym, e) {
         
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://www.deltomed.com/", "_blank");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle4}", "mouseover", function(sym, e) {
         sym.$("delto2").css("opacity", 1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle4}", "mouseout", function(sym, e) {
         sym.$("delto2").css("opacity", 0.8);

      });
      //Edge binding end

   })("sym-delto");
   //Edge symbol end:'sym-delto'

   //=========================================================
   
   //Edge symbol: 'sym-powered'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_powered}", "mouseover", function(sym, e) {
         var pos = sym.getPosition();
         sym.play(pos);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_powered}", "mouseout", function(sym, e) {
         var pos = sym.getPosition();
         sym.playReverse(pos);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_powered}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://www.inventgraphic.com", "_blank");
         

      });
      //Edge binding end

   })("sym-powered");
   //Edge symbol end:'sym-powered'

})(jQuery, AdobeEdge, "EDGE-96553822");