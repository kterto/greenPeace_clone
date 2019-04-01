(function () {
   "use strict";
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
  $('#junte-se-ao-time').css("display", "flex");
  $('#crie-sua').removeClass("hidden");
  $('#faca-voce').removeClass("hidden");
  $('#projeto-escola').removeClass("hidden");
  // $('#s2 .col-md-4').animate({
  //   paddingLeft: "-=13px",
  //   paddingRight: "-=13px"
  // }, 1000);
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
  } else if (state.counter === 1) {
    $('#mostrar-mais-cards-s4').addClass("hidden");
    $('#chega-de-madeira').removeClass("hidden");
    $('#segure-a-linha').removeClass("hidden"); 
  } else {}
})
 })()

// IIFE



