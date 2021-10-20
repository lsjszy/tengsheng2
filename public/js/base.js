//const { listenerCount } = require("../../models/img");
//小导航
var sm_lis = $(".small-nav li");
for (var i = 0; i < sm_lis; i++) {
    sm_lis[i].onclick = function() {
        for (var j = 0; j < sm_lis.length; j++) {
            sm_lis[j].className = "";
        }
        this.className = "active";
    }
};
// 轮播图
var swiper = new Swiper('.swiper-container', {
    loop: true, //复制多份循环(这里就是让轮播看起来是循环的，去掉这个就恢复了默认的swiper轮播)
    spaceBetween: 300, //slide之间的距离（ 单位px）。
    autoplay: 2500, //自动切换的时间间隔（单位ms），不设定该参数slide不会自动切换。
    autoplayDisableOnInteraction: false, //点击后打断auto-play
});
// 在线咨询
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