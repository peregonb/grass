$(document).ready(function() {
    $(".hamburger").click(function() {
        $(this).toggleClass("is-active");
    });
});
$(document).ready(function(){
    $('.cart-scatter-item-articul-buttons-number').css("font-size", "21px");
});
$('.hamburger').click(function() {
    $('#nav').slideToggle({ top: 'toggle' });
});

$('.cart_box').click(function() {
    $('.cart-selected').animate({width:'toggle'},220);
});

function scrollbarWidth() {
    var block = $('<div>').css({ 'height': '50px', 'width': '50px' }),
        indicator = $('<div>').css({ 'height': '200px' });

    $('body').append(block.append(indicator));
    var w1 = $('div', block).innerWidth();
    block.css('overflow-y', 'scroll');
    var w2 = $('div', block).innerWidth();
    $(block).remove();
    return (w1 - w2);
}
$(window).resize(function() {
    var winwidth = $(window).outerWidth();
    if (winwidth > 991 - scrollbarWidth()) {
        $('ul#nav.navbar').css("display", "block");
    } else if (winwidth < 992 - scrollbarWidth()) {
        $('ul#nav.navbar').css("display", "none");
    }
});

$('#owl-carousel-1').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
$('#owl-carousel-2').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    responsive: {
        0: {
            items: 1,
            dots: false
        },
        435: {
            items: 2
        },
        640: {
            items: 3
        },
        992: {
            items: 4
        },
        1200: {
            items: 5
        }
    }
});

$('#owl-carousel-3').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1,
            dots: false,
            margin: 0
        },
        620: {
            items: 2
        },
        640: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
});
$('#owl-carousel-4').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
});
$(".novelties-title-block").mouseover(function() {
    $(this).css("background-color", "#4fc344");
    $(this).css("border", "4px solid #30eb1b");
    $(this).css("border-radius", "22px");
    $(this).css("color", "white");
});
$(".novelties-title-block").mouseout(function() {
    $(this).css("background-color", "white");
    $(this).css("border", "1px solid #ddd");
    $(this).css("color", "black");
});

$(".plus-block").hover(function() {

    $(this).find(".novelties-plus + .novelties-plus-extended").css("display", "none");
    $(this).find(".novelties-plus + .novelties-plus-extended").animate({ width: 'toggle' }, 90);
    $(this).find(".novelties-plus + .novelties-plus-extended").css("display", "flex");
}, function() {
    $(this).find(".novelties-plus + .novelties-plus-extended").css("display", "flex");
    $(this).find(".novelties-plus + .novelties-plus-extended").animate({ width: 'toggle' }, 80);
});
$(".plus-block").click(function() {
    $(this).find(".novelties-plus").addClass("plus-clicked");
    $(this).find(".novelties-plus").text("");
    $(this).find(".novelties-plus").addClass("arrow");

    $(this).find(".novelties-plus + .novelties-plus-extended").css("display", "flex");
    $(this).find(".novelties-plus + .novelties-plus-extended").animate({ width: 'toggle' }, 80);
    $(this).find(".novelties-plus-extended").text(" ");

});
$(".product-item-scatter-item-price-add").click(function() {
    $(this).find(".novelties-plus").addClass("plus-clicked");
    $(this).find(".novelties-plus").text("");
    $(this).find(".novelties-plus").addClass("arrow");

    $(this).find(".product-item-plus-extended").css("display", "none");
    $(this).find(".product-item-plus-extended").css("transition", "80ms");
    $(this).find(".product-item-plus-extended").text(" ");

});
$(".plus-block").hover(function() {

    $(this).find(".plus-clicked + .novelties-plus-extended").css("display", "none");
}, function() {

    $(this).find(".plus-clicked + .novelties-plus-extended").removeClass("novelties-plus-extended");
});

$(document).ready(function() {
            $('.product-item-scatter-item-articul-buttons-button-left').click(function () {
                var $input = $(this).parent().find('input');
                var count = parseInt($input.val()) - 1;
                count = count < 1 ? 1 : count;
                $input.val(count);
                $input.change();
                return false;
            });
            $('.product-item-scatter-item-articul-buttons-button-right').click(function () {
                var $input = $(this).parent().find('input');
                $input.val(parseInt($input.val()) + 1);
                $input.change();
                return false;
            });
        });