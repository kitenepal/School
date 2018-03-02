	$(window).bind("load resize slid.bs.carousel", function() {
  var imageHeight = $(".active .holder").height();
  $(".controllers").height( imageHeight );
  console.log("Slid");
});



$(document).ready(function(){
  $('.close').click(function(){
    $('.floating-event').slideUp();
  });
  $('.fa-angle-double-up').click(function(){
    $('.floating-event').slideDown();
  });
});