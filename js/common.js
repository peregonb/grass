$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });
});

$('.hamburger').click(function(){
$('#nav').slideToggle({top: 'toggle'});
});
$(window).resize(function(){
    var winwidth = $(window).innerWidth();
    if(winwidth > 992){
        $('ul#nav.navbar').css( "display", "block"); 
    }
    else if(winwidth < 992){
        $('ul#nav.navbar').css( "display", "none");  
    }
});