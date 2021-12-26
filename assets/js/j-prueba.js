// Permite que las anclas desde el menu se deslicen suavemente y ademas mas abajo la section desplegar
$(document).ready(function (){

$("a").click(function () {
var gato=this.hash;
$("html, body").animate(
    {
scrollTop: $(gato).offset().top - 70

    }, 3000
)


})



})
// Se agrega tooltiptrigger
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
/* uso de clase con js script al hacer click*/
$(document).ready(function (){

    $("#cambia").click(function(){
 $("#cambia").toggleClass("fs-4");
    })

  })

