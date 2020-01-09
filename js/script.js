$(document).ready(function () {
  /*for vertical Nav*/
  $('.flex-column').height($(document).height());



  /*for animation on header*/
  new WOW().init();



  /* to scroll to about section when click on the link */
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });






  /*to start carousel*/
  $('.home .carousel').carousel();

});