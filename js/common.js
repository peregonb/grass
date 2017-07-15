$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });
});

$('.hamburger').click(function(){
$('#nav').slideToggle({top: 'toggle'});
});