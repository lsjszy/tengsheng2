//轮播
function basicSlider(wrap, box, prev, next, or) {

    var wrap = $(wrap);
    var box = $(box);
    var prev = $(prev);
    var next = $(next);
    // console.log(box.find("li").size());
    // var l = box.find("li").size();
    var w = box.find("li").outerWidth();


    box.css({ "width": "9999px" });
    box.find("li").css({ "width": w });

    prev.click(function() {
        box.find("li:last").prependTo(box);
        box.css({ "margin-left": -w });
        box.stop().animate({ "margin-left": "0px" });
    });

    next.click(function() {
        box.stop().animate({ "margin-left": -w }, function() {
            box.find("li").eq(0).appendTo(box);
            box.css({ "margin-left": "0px" });
        });

    });

    if (or == true) {
        var sdd = setInterval(function() {
            next.click();
        }, 3000);

        wrap.hover(function() {
            clearInterval(sdd)
        }, function() {
            sdd = setInterval(function() {
                next.click();
            }, 3000);
        });
    }

}
//工程项目
basicSlider(".project-body", ".project-body ul", ".project-body .prev", ".project-body .next", true);

console.log($('.project-body .box ul li'));


var $li = $('.project-body .box ul>li');
$li.mouseenter(function() {
    var index = $(this).index();
    $(this).children('a').children('.mask').stop().slideDown()
}).mouseleave(function() {
    $(this).children('a').children('.mask').stop().slideUp()
})