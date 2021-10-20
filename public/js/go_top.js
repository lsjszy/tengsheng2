$('.swiper-wrapper').bind('mouseenter', function() {
    $('.swiper-button-next').fadeIn();
    $('.swiper-button-prev').fadeIn();
})
$('.swiper-wrapper').bind('mouseleave', function() {
    $('.swiper-button-next').fadeOut();
    $('.swiper-button-prev').fadeOut();
})
$('#close_im').bind('click', function() {
    $('#main-im').css("height", "0");
    $('#im_main').hide();
    $('#open_im').show();
});
$('#open_im').bind('click', function(e) {
    $('#main-im').css("height", "272");
    $('#im_main').show();
    $(this).hide();
});
// 返回顶部
$('.go-top').bind('click', function() {
    $(window).scrollTop(0);
});
// 返回顶部
$(window).scroll(function() {
    if ($(document).scrollTop() >= 300) {
        $('.go-top').fadeIn();
    } else {
        $('.go-top').fadeOut();
    }
})