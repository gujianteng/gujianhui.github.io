$('.home-brick-box-shipin>.box-bd>.video-list>li').on('mouseenter',function(){
    $('.home-brick-box-shipin>.box-bd>.video-list>li>a>.figure-img>span').eq($(this).index()).css({
        backgroundColor:" #ff6700",
        borderColor: "#ff6700"
    })
})
$('.home-brick-box-shipin>.box-bd>.video-list>li').on('mouseleave',function(){
    $('.home-brick-box-shipin>.box-bd>.video-list>li>a>.figure-img>span').eq($(this).index()).css({
        backgroundColor: "rgba(0,0,0,.6)",
        borderColor: "#fff"
    })
})