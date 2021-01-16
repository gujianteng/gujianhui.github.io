/*
  loading 效果
    + 请求发送的时候的加载效果
      => 当请求发送出去以后
      => 页面上有一个小东西再转圈(从页面最左边到最右边有一个进度条)
      => 当请求完成的时候
      => 这个效果就消失了
    + 利用 钩子函数 再制作的

  业务逻辑
    + 当点击 button 按钮的时候就会发送一个请求
    + 每一个请求发送出去的时候就会触发 loading 效果, 图片显示出来
    + 当请求完成对的时候, loading 效果消失, 图片再次隐藏起来
      => 一定是 ajaxComplete(), 不管成功失败, 完成就触发
      => 不能是 ajaxSuccess(), 只有成功会触发
*/

// 提前利用钩子函数准备 loading 效果
// 每一次发送出去的时候都要显示图片






// $(window).ajaxSend(() => {
//     $('img').show()
//   })

//   // 每一次完成的时候都要图片再隐藏起来
//   $(window).ajaxComplete(() => {
//     $('img').hide()
//   })

//   // 每次点击按钮的时候都会发送一个 ajax 请求
//   $('button').click(() => {
//     // 发送一个 ajax 请求
//     $.ajax({
//       url: './server/get.php',
//       data: { a: 100, b: 200 },
//       dataType: 'json',
//       success: function (res) {
//         console.log('请求成功了')
//         console.log(res)
//       }
//     })
//   })







$('.card').on('mouseover', function () {
    $(".iconliang ").css({
        background: 'white'
    })
    $('.iconright').css({
        color: 'red'
    })
    $('.icon').css({
        color: 'red'
    })


    clearInterval(aa)
    var aa = setTimeout(function () {
        console.log('gu');
    }, 1000)
    // 发送一个ajax请求
    //     $.ajax({
    //         url: '../lib/nav.json',
    //         // data: { a: 100, b: 200 },
    //         dataType: 'json',
    //         success: function (res) {
    //             // console.log('请求成功了')
    //             // console.log(res)
    //         }
    // })



    // 移入的时候.cardxiahua下滑
    $('.cardxiahua').stop().slideDown(200, 'linear', function () {
        // $('.iconliang').css({
        //     position: 'absolute',
        // })
    })
    //   $('.cardxiahua').show



})














$('.card').on('mouseout', function () {
    $(".iconliang ").css({
        background: '#424242'
    })
    $('.iconright').css({
        color: 'white'
    })
    $('.icon').css({
        color: 'white'
    })

    $('.cardxiahua').stop().slideUp(200, 'linear', function () {
        // console.log('下滑结束')
    })
})






              // 移入之前写好ajax钩子函数
        // 发送请求之前让img元素显示
        // $(window).ajaxSend(() => {
        //     // setTimeout(function(){
        //         $('.cardxiahua').html('<div class="xiahuazi">购物车还没有商品，赶紧选购吧</div>')

        //         // $('.cardxiahua').html('<img src="../images/loading.gif" alt="" class="cardimg">')
        //         // $('.cardimg').show()

        //     // },5000)

        //     // console.log( $('.cardxiahua'));
        //     // $('.cardimg').show()

        // })


        // 发送请求完成时让img元素消失，并且变别的内容

        // $(window).ajaxComplete(() => {

        //         // $('.cardxiahua').html('<div class="xiahuazi">购物车还没有商品，赶紧选购吧</div>')
        //         $('.cardxiahua').html('<img src="../images/loading.gif" alt="" class="cardimg">')
        //         // $('.cardimg').hide()


        //     // $('.cardxiahua').html('<div class="xiahuazi">购物车还没有商品，赶紧选购吧</div>')

        //                         })