(function($){
    'use strict'

// menu.......................................................


$('.hair-menu1').hide();

$('.hair-menu-icon i.fa-bars').on('click', function(){
        $('.hair-menu1').show();
        $(this).hide();
        $('.hair-menu-icon i.fa-times').show();
})
$('.hair-menu-icon i.fa-times').on('click', function(){
    $('.hair-menu1').hide();
    $(this).hide();
    $('.hair-menu-icon i.fa-bars').show();
})

$('.hair-menu1 ul li i.fa-times').on('click', function(){
    $('.hair-menu1').hide();
    $('.hair-menu-icon i.fa-bars').show();
    $('.hair-menu-icon i.fa-times').hide();

})
$(window).resize(function(){
    var screenSize = $(window).width();
    if(screenSize>991){
        $(".hair-menu").removeAttr("style")
        $('.hair-menu1').hide();
        $('.hair-menu-icon i.fa-bars').show();
    $('.hair-menu-icon i.fa-times').hide();
    }
});

$('.c').on('click', function(){
    $('#log-form').show();
})

$('#submit1').on('click', function(){
    $('#log-form').hide();
})

$('.cancel').on('click', function(){
    $('#log-form').hide();
})

$(window).scroll(function(){
    var distance=$(window).scrollTop();
    if(distance>600){
        $('.arrow').fadeIn();
    }
    else{
        $('.arrow').fadeOut();
    }
});

$('.arrow').on('click',function(){
    $('html').animate({scrollTop:0});
});
// $('.veer-menu-icon i.fa-bars').on('click', function(){
//     $('.veer-menu').slideDown();
//     $(this).hide();
//     $('.veer-menu-icon i.fa-times').show();
// });
// $('.veer-menu-icon i.fa-times').on('click', function(){
//     $('.veer-menu').slideUp();
//     $(this).hide();
//     $('.veer-menu-icon i.fa-bars').show();
// });

// $(window).resize(function(){
//     var screenSize=$(window).width();
// if(screenSize>991){
//     $('.veer-menu').removeAttr('style');
// }
// });







})(jQuery);