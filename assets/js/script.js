$(function(){

  $("a").click(function(event){
    if (this.hash !== "") {
      event.preventDefault();

      var gato = this.hash;

      $("html, body").animate({
        scrollTop: $(gato).offset().top
      }, 800, function(){
        window.location.hash = gato;
      });
    }
  });

// Hace que al pasar el puntero del mouse apararezca el nombre del icono
  $('[data-toggle="popover"]').popover();

});
