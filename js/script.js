// (function () {
//   "use strict";
//   // codigo
// })()

// IIFE

/* =============================================== 
					          Home
===============================================  */

// $(window).on('load', function(){
//   $(".carousel").carousel({
//     interval: 2000
//   });
// });

$('.carousel').carousel({
  interval: false
})

/* =============================================== 
					          section 2
===============================================  */

$('#mostrar-mais-cards').on("click", function() {
  $('#mostrar-mais-cards').addClass("hidden");
  $('#crie-sua').removeClass("hidden");
  $('#faca-voce').removeClass("hidden");
  $('#projeto-escola').removeClass("hidden");
})

/* =============================================== 
					          section 4
===============================================  */
let state = {
  counter: 0
}
$('#mostrar-mais-cards-s4').on("click", function(ev){
  if (state.counter === 0) {
    $('#reduza-seu-consumo').removeClass("hidden");
    $('#chega-de-destruir').removeClass("hidden");
    $('#salve-o-coracao').removeClass("hidden");
    state.counter = 1;
    // console.log("oi bb!");
  } else if (state.counter === 1) {
    $('#mostrar-mais-cards-s4').addClass("hidden");
    $('#chega-de-madeira').removeClass("hidden");
    $('#segure-a-linha').removeClass("hidden");
    // console.log("oi bb!");    
  } else {}
})
