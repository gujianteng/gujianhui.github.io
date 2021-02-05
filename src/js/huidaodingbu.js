$(window).on("scroll", function () {
    // console.log($(window).scrollTop());
    if ($(window).scrollTop() >= 1000) {
        $('.home-tool-bar').children().last().css({
            visibility: "visible"
            // display:"block"
        })
    }
    if ($(window).scrollTop() < 1000) {
        $('.home-tool-bar').children().last().css({
            visibility: "hidden"
            // display:"none"

        })
    }
})



$('.home-tool-bar>a>.text').stop().slideUp(0, function () { })
$('.home-tool-bar>a>.gujianh ').stop().slideUp(0, function () { })
$('.home-tool-bar>a>.pop-content').stop().slideUp(0, function () { })
$('.home-tool-bar>a').on("mouseenter", function () {
    $(this).children(".text").stop().slideDown(0, 'linear', function () { })
    $(this).children(".gujianh ").stop().slideDown(0, 'linear', function () { })
    $(this).children(".pop-content").stop().slideDown(0, 'linear', function () { })
})
$('.home-tool-bar>a').on("mouseleave", function () {
    $(this).children(".text").stop().hide(0, 'linear', function () { })
    $(this).children(".gujianh ").stop().hide(0, 'linear', function () { })
    $(this).children(".pop-content").stop().hide(0, 'linear', function () { })
})

$(this).children(".gujianh").on("mouseenter", function () {
    $(this).children(".text").stop().finish().show(0, 'linear', function () { })
    $(this).children(".gujianh").stop().finish().show(0, 'linear', function () { })
    $(this).children(".pop-content").stop().hide(0, 'linear', function () { })
})




// 点击回到顶部
$('.home-tool-bar').children().last().on('click', function () {
    $(window).scrollTop(0)
})

var guleft = parseInt($('.header-search').offset().left + 298) 

$('.home-tool-bar').css({
    left: guleft,
    right: "auto"

})

// 根据浏览器窗口改变定位
$(window).on("resize", function () {

    var guleft = parseInt($('.header-search').offset().left + 298) 

    if ($(window).width() > 1226) {
        $('.home-tool-bar').css({
            left: guleft,
            // right: 'auto'

        })
    }
    if ($(window).width() <= 1226) {
        $('.home-tool-bar').css({
            left: 'auto',
            right: 0

        })
    }

})
