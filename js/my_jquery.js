
/**
 * scrolling web-page
 */

$('nav a[href^="#"]').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top - 50}, 1000);
    return false;
});

/**
 * header  hamburger
 */

$(document).ready(function(){
    var touch 	= $('#touch-menu');
    var menu 	= $('.menu');

    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function(){
        var w = $(window).width();
        if(w > 860 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

});


/**
 * accordion
 */

$(".accordion dd").hide().prev().click(function() {
    $(this).parents(".accordion").find("dd").not(this).slideUp().prev().removeClass("active");
    $(this).next().not(":visible").slideDown().prev().addClass("active");
});

/**
 * modal
 */

$(function(){

    var appendthis =  ("<div class='modal-overlay js-modal-close'></div>");

    $('a[data-modal-id]').click(function(e) {
        e.preventDefault();
        $("body").append(appendthis);
        $(".modal-overlay").fadeTo(400, 0.7);
        //$(".js-modalbox").fadeIn(500);
        var modalBox = $(this).attr('data-modal-id');
        $('#'+modalBox).fadeIn($(this).data());
    });


    $(".js-modal-close, .modal-overlay").click(function() {
        $(".modal-box, .modal-overlay").fadeOut(500, function() {
            $(".modal-overlay").remove();
        });
    });

    $(window).resize(function() {
        $(".modal-box").css({
            top: 350+($(window).height() - $(".modal-box").outerHeight()) / 3,
            left: ($(window).width() - $(".modal-box").outerWidth()) / 2
        });
    });

    $(window).resize(function() {
        $(".modal-overlay").css({
            top: 350+($(window).height() - $(".modal-box").outerHeight()) / 2,
            left: ($(window).width() - $(".modal-overlay").outerWidth()) / 2
        });
    });

    $(window).resize();

});

/**
 * tabs
 */

$(document).ready(function(){
    var tabs = $('#tabs');
    $('.tabs-content > div', tabs).each(function(i){
        if ( i != 0 ) $(this).hide(0);
    });
    tabs.on('click', '.tabs a', function(e){
        /* Предотвращаем стандартную обработку клика по ссылке */
        e.preventDefault();

        /* Узнаем значения ID блока, который нужно отобразить */
        var tabId = $(this).attr('href');

        /* Удаляем все классы у якорей и ставим active текущей вкладке */
        $('.tabs a',tabs).removeClass();
        $(this).addClass('active');

        /* Прячем содержимое всех вкладок и отображаем содержимое нажатой */
        $('.tabs-content > div', tabs).hide(0);
        $(tabId).show();
    });
});



/**
 * tooltip
 */

function simple_tooltip(target_items, name){
    $(target_items).each(function(i){
        $("body").append("<div class='"+name+"' id='"+name+i+"'><p>"+$(this).attr('title')+"</p></div>");
        var my_tooltip = $("#"+name+i);

        $(this).removeAttr("title").mouseover(function(){
            my_tooltip.css({opacity:0.8, display:"none"}).fadeIn(400);
        }).mousemove(function(kmouse){
            my_tooltip.css({left:kmouse.pageX+10, top:kmouse.pageY+10});
        }).mouseout(function(){
            my_tooltip.fadeOut(300);
        });
    });
}
$(document).ready(function(){
    simple_tooltip(".part-tooltip a","tooltip");
});



/**
 * Carousel slide-1
 */

$(document).ready(function() {

    $("#owl-demo-1").owlCarousel({

        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });

});


/**
 * Carousel slide-2
 */

$(document).ready(function() {

    $("#owl-demo-2").owlCarousel({
        items : 4,
        lazyLoad : true,
        navigation : true
    });

});




