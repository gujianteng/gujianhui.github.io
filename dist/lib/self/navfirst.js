var navf = function () {
    getnavfirst()
    function getnavfirst() {
        $.ajax({
            url: '../lib/navfirst.json',
            dataType: 'json',
            success: function (res) {
                // console.log(res);
                var str=''
                res.forEach(item => {
                    str += `<li>${ item.name }</li>`
                  })
                //   console.log(str);
                  $('.gu').html(str)
                //   第20个li创建三角型这个元素
                  $('.gu > li').eq(20)
                  .append("<div class='sanjiaoapp'><div class='sanjiao'></div><div class='sanjiaoimg'><img src='../../images/sanjiaoimg.jpg'><div class='appzi'>小米商城APP</div></div></div>")
                // 给第20个li添加类名
                $('.gu > li').eq(20).addClass('sanjiaoli')

                  $('.gu > li').eq(20).on('mouseover', function(){
                    $(".sanjiaoli>.sanjiaoapp>.sanjiao").css({
                        display:'block'
                    })
                    // 移入的时候app图片下滑
                    $('.sanjiaoimg').stop().slideDown(200, 'linear', function () {
                        console.log('下滑结束')
                      })
                  })
                  $('.gu > li').eq(20).on('mouseout', function(){
                    $(".sanjiaoli>.sanjiaoapp>.sanjiao").css({
                        display:'none'
                    })
                    // 鼠标一开上滑
                    $('.sanjiaoimg').stop().slideUp(200, 'linear', function () {
                        console.log('下滑结束')
                      })
                  })

            }
        })
    }
}
export default {
    navf
}