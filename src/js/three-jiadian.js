

$('.home-brick-box-jiadian>.box-bd>.row>.span16>div').eq(0).children().eq(0).children().eq(7).children().eq(0).css({
    height: "143",
    width: "234",
    paddingTop: 50,
    background: "#fff",
    position: "relative",
    zIndex: 1,
    float: "left",
})

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








$('.home-brick-box-jiadian>.box-bd>.row>.span16>div').eq(1).children().eq(0).children().eq(7).children().eq(0).css({
    height: "143",
    width: "234",
    paddingTop: 50,
    background: "#fff",
    position: "relative",
    zIndex: 1,
    float: "left",
})

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





$('.home-brick-box-jiadian>.box-bd>.row>.span16').children().eq(1).css({
    display:"none"

})

// TEB 切换
$('.box-hd>.more>.tab-list').children().first().on('mouseenter',function(){
    if($('.box-hd>.more>.tab-list').children().first().hasClass("tab-active")){

    }else{
        $(this).removeClass().addClass('tab-active')
        $('.box-hd>.more>.tab-list').children().last().removeClass()
    }
    $('.home-brick-box-jiadian>.box-bd>.row>.span16').children().eq(1).css({
        display:"none"
    
    })
    $('.home-brick-box-jiadian>.box-bd>.row>.span16').children().eq(0).css({
        display:"block"
    })
})


$('.box-hd>.more>.tab-list').children().last().on('mouseenter',function(){
    if($('.box-hd>.more>.tab-list').children().last().hasClass("tab-active")){

    }
    else{
        $(this).removeClass().addClass('tab-active')
        $('.box-hd>.more>.tab-list').children().first().removeClass()
    }
    $('.home-brick-box-jiadian>.box-bd>.row>.span16').children().eq(0).css({
        display:"none"
    })
    $('.home-brick-box-jiadian>.box-bd>.row>.span16').children().eq(1).css({
        display:"block"
    
    })
})