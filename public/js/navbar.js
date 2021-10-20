$(function() {
    // 导航栏
    $('.navbar-collapse .navbar-nav>li').mouseenter(function() {
        var index = $(this).index();
        $(this).children('ul').stop().slideDown()
    }).mouseleave(function() {
        $(this).children('ul').stop().slideUp()
    })


})