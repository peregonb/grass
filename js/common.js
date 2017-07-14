var width_before = $(".search").width;
var width_after = width_before - 50;
$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });
  $(".width_search").css("width", width_after);
});
