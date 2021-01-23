$('.header-logo').on('mouseenter', function () {
    $('.mimi').stop().animate({
        left: 0
    }, 200, 'linear', () => { })

})

$('.header-logo').on('mouseleave', function () {
    $('.mimi').stop().animate({
        left: -55
    }, 200, 'linear', () => { })

})


// 二级菜单渲染
getlist()
function getlist() {
    $.ajax({
        url: '../lib/navTop.json',
        dataType: 'json',
        success: function (res) {
            // console.log(res);
            let str = ''
            res.forEach(item => {
                str += `<li><a>${item.name}<a/></li>`
            });
            // 在第一级ul里面追加内容
            $('.nav-list').append(str)
            // console.log($('.nav-category').siblings().children(':even'));
            $('.nav-category').siblings().on('mouseenter', function () {
                $('.nav_box').stop().slideDown(200, 'linear', function () { })
                // 5-1. 知道自己移入的时哪一个 li>a
                let index = $(this).index()
                // 5-2. 找到要渲染的数组
                // console.log(index);
                const list = res[index - 1].list
                $(this).children().eq(1).css({
                    display: 'none'
                })
                // console.log(list);
                let str = ''

                list.forEach(item => {
                    str += `
                      <li>
                        <div>
                          <img src="${item.list_url}" alt="">
                        </div>
                        <p class="title">${item.list_name}</p>
                        <span class="price">${item.list_price}</span>
                      </li>
                    `

                    $('.nav_box > ul').html(str)
                    $('.nav_box > ul >li').first().addClass('boxli')
                    $('.nav_box').css({
                        borderTop: ' 1px solid #e0e0e0'
                    })

                })

            })

            $('.nav-category').siblings().on('mouseleave', function () {
                $('.nav_box').stop().slideUp(200, 'linear', function () { })
            })


            $('.nav_box')
                .on({
                    mouseenter: function () {
                        $(this).finish().show()

                    },
                    mouseleave: function () {
                        $(this).finish().slideUp(200, 'linear', function () { })

                    }
                })

            // 把服务跟社区加上
            $('.nav-list').append(`<li><a>服务</a></li><li><a>社区</a></li>`)


        }

    })
}


$.ajax({
    url: '../lib/search.json',
    dataType: 'json',
    success: function (res) {
        console.log(res)
    }
})


$('.header-search').on('mouseenter', function () {
    $('.header-search>.inpj').css({
        borderColor:'#b0b0b0'
    })
    $('.butj>button').css({
        borderColor:'#b0b0b0'
    })

})

$('.header-search').on('mouseleave', function () {
    $('.header-search>.inpj').css({
        borderColor:'#e0e0e0'
    })
    $('.butj>button').css({
        borderColor:'#e0e0e0'
    })
})


$('.header-search>.inpj>input').on('focus', function () {
    $('.header-search>.inpj').css({
        borderColor:'red'
    })
    $('.butj>button').css({
        borderColor:'red'
    })
})
// $('.header-search>.inpj>input').on('blur', function () {
//     $('.header-search>.inpj').css({
//         borderColor:'red'

//     })
//     $('.butj>button').css({
//         borderColor:'red'

//     })
// })