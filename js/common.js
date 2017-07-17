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

$('#owl-carousel-1').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('#owl-carousel-2').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})