/**
 * Created by lime on 28.01.16.
 */


$(document).ready(function() {

    $("#owl-demo").owlCarousel({
        items : 4,
        lazyLoad : true,
        navigation : true
    });

});

$(function($) {
    var allAccordions = $('.accordion div.data');
    var allAccordionItems = $('.accordion .accordion-item');
    $('.accordion > .accordion-item').click(function() {
        if($(this).hasClass('open'))
        {
            $(this).removeClass('open');
            $(this).next().slideUp("slow");
        }
        else
        {
            allAccordions.slideUp("slow");
            allAccordionItems.removeClass('open');
            $(this).addClass('open');
            $(this).next().slideDown("slow");
            return false;
        }
    });
});