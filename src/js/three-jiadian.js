// 第1大块div
// 给最后一个div 加样式
$('.home-brick-box-jiadian>.box-bd>.row>.span16>div').eq(0).children().eq(0).children().eq(7).children().eq(0).css({
    height: "143",
    width: "234",
    paddingTop: 50,
    background: "#fff",
    position: "relative",
    zIndex: 1,
    float: "left",
})
// 给最后一个单独的li 加样式
$('.home-brick-box-jiadian>.box-bd>.row>.span16>div').eq(0).children().eq(0).children().eq(7).children().eq(0).children().eq(0).css({
    position:" absolute",
    right: 20,
    top: 32,
    width: 80,
    height: 80
})


$('.home-brick-box-jiadian>.box-bd>.row>.span16>div').eq(0).children().eq(0).children().eq(7).children().eq(0).children().eq(1).css({
    margin:" -10px 110px 5px 30px",
    fontSize: 14,
    fontWeight: 400,
    width: 94,
    height: 63,
    // display: "block",
    whiteSpace:"normal",
    textAlign: "left"

})



$('.home-brick-box-jiadian>.box-bd>.row>.span16>div').eq(0).children().eq(0).children().eq(7).children().eq(0).children().eq(2).css({
    textAlign: "left",
    paddingLeft: 17
    
})






// 第2大块div
// 给最后一个div 加样式

$('.home-brick-box-jiadian>.box-bd>.row>.span16>div').eq(1).children().eq(0).children().eq(7).children().eq(0).css({
    height: "143",
    width: "234",
    paddingTop: 50,
    background: "#fff",
    position: "relative",
    zIndex: 1,
    float: "left",
})

// 给最后一个单独的li 加样式
$('.home-brick-box-jiadian>.box-bd>.row>.span16>div').eq(1).children().eq(0).children().eq(7).children().eq(0).children().eq(0).css({
    position:" absolute",
    right: 20,
    top: 32,
    width: 80,
    height: 80
})


$('.home-brick-box-jiadian>.box-bd>.row>.span16>div').eq(1).children().eq(0).children().eq(7).children().eq(0).children().eq(1).css({
    margin:" -10px 110px 5px 30px",
    fontSize: 14,
    fontWeight: 400,
    width: 94,
    whiteSpace:"normal",
    textAlign: "left"

})



$('.home-brick-box-jiadian>.box-bd>.row>.span16>div').eq(1).children().eq(0).children().eq(7).children().eq(0).children().eq(2).css({
    textAlign: "left",
    paddingLeft: 17
    
})




// 默认让除了第一大块的其他元素隐藏
$('.home-brick-box-jiadian>.box-bd>.row>.span16').children().first().siblings().css({
    display:"none"

})

// 家电TEB 切换
$('.home-brick-box-jiadian>.box-hd>.more>.tab-list').children().on('mouseenter',function(){
    var index=$(this).index()
    if($(this).hasClass("tab-active")){

    }else{
        $(this).removeClass().addClass('tab-active')
        $(this).siblings().removeClass()
    }
    $('.home-brick-box-jiadian>.box-bd>.row>.span16').children().eq(index).siblings().css({
        display:"none"
    
    })
    $('.home-brick-box-jiadian>.box-bd>.row>.span16').children().eq(index).css({
        display:"block"
    })
})
