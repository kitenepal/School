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

//Smooth Scrolling Using Navigation Menu
$('nav ul>li>a[href*="#"]').on('click', function(e){
    $('html,body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 25
    },500);
    e.preventDefault();
});