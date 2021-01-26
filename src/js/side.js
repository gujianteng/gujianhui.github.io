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
                // 鼠标移入让搜索框失去焦点
                $('.header-search>.inpj>input').attr('readonly', "readonly")
                // 让边框变回默认样式
                handlerB()
                // 让搜索框有移入效果
                $('.header-search').on('mouseenter', handlerA)
                // 让搜索框有移出效果
                $('.header-search').on('mouseleave', handlerB)
                // 让搜索框有点击的函数
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

// 获取搜索框自动轮播的数据
$.ajax({
    url: '../lib/search.json',
    dataType: 'json',
    success: function (res) {
        // console.log(res)
        // 每过三秒让input的placeholder属性变化
        var ding = null
        var index = 0
        $('.header-search>.inpj>input').attr('placeholder', `${res[index].search_title}`)
        setTimeout(() => {
            index++
        }, 1000);
        // 写一个自动轮播的函数
        function autoP() {
            ding = setInterval(() => {
                $('.header-search>.inpj>input').attr('placeholder', `${res[index].search_title}`)
                if (index == res.length - 1) {
                    index = 0 - 1
                }
                index++
            }, 1000);
        }
        autoP()
        // 切换窗口和最小化时停止定时器
        document.addEventListener('visibilitychange', () => {
            //       一定要写 else if , 因为 visibilityState 属性一共有四种值
            if (document.visibilityState === 'hidden') {
                // 表示离开当前页面了
                // 关闭定时器
                clearInterval(ding)
            } else if (document.visibilityState === 'visible') {
                // 表示回到当前页面了
                // 开启自动轮播
                autoP()
            }
        })

    }
})



// 鼠标移入搜索框的函数
function handlerA() {
    $('.header-search>.inpj').css({
        borderColor: '#b0b0b0'
    })
    $('.butj>button').css({
        borderColor: '#b0b0b0'
    })

    // 鼠标移入解绑按钮移入移出,再重新绑定事件
    $('.header-search>.butj>button').off('mouseenter', butA)
    $('.header-search>.butj>button').off('mouseleave', butB)
    $('.header-search>.butj>button').on('mouseenter', function () {
        $('.header-search>.butj>button>span').css({
            color: "white"
        })

        $('.header-search>.butj>button').css({
            background: "#ff6700",
            border: "none"
        })
    })
    $('.header-search>.butj>button').on('mouseleave', function () {
        $('.header-search>.butj>button>span').css({
            color: "#616161"
        })
        $('.header-search>.butj>button').css({
            background: "white",
            borderWidth: "1px",
            borderColor: "#b0b0b0",
            borderStyle: "solid"
        })
    })
}
$('.header-search').on('mouseenter', handlerA)
// 鼠标移出搜索框的函数
function handlerB() {
    $('.header-search>.inpj').css({
        borderColor: '#e0e0e0'
    })
    $('.butj>button').css({
        borderColor: '#e0e0e0'
    })
}
$('.header-search').on('mouseleave', handlerB)


// 聚焦的函数
function focusA() {


}
$('.header-search>.inpj>input').on('focus', focusA)
$('.header-search>.inpj>input').on('click', function () {
    $('.header-search>.inpj>input').removeAttr('readonly')
    $('.header-search>.inpj').css({
        borderColor: 'red'
    })
    $('.butj>button').css({
        borderColor: 'red'
    })
    // 鼠标点击时解绑搜索框的移入移出
    $('.header-search').off('mouseenter', handlerA)
    $('.header-search').off('mouseleave', handlerB)
    // 鼠标点击时解绑按钮移入移出,再重新绑定事件
    $('.header-search>.butj>button').off('mouseenter', butA)
    $('.header-search>.butj>button').off('mouseleave', butB)
    $('.header-search>.butj>button').on('mouseenter', function () {
        $('.header-search>.butj>button>span').css({
            color: "white"
        })

        $('.header-search>.butj>button').css({
            background: "#ff6700",
            border: "none"

        })
    })
    $('.header-search>.butj>button').on('mouseleave', function () {
        $('.header-search>.butj>button>span').css({
            color: "#616161"
        })
        $('.header-search>.butj>button').css({
            background: "white",
            borderWidth: "1px",
            borderColor: "red",
            borderStyle: "solid"
        })
    })
})



// 按钮移入函数butA
function butA() {
    $('.header-search>.butj>button>span').css({
        color: "white"
    })
    $('.header-search>.butj>button').css({
        background: "#ff6700",
        border: "none"

    })
}

// 按钮移出函数butB
function butB() {
    $('.header-search>.butj>button>span').css({
        color: "#616161"
    })
    $('.header-search>.butj>button').css({
        background: "white",
        borderWidth: "1px",
        borderColor: "#e0e0e0",
        borderStyle: "solid"

    })
}
$('.header-search>.butj>button').on('mouseenter', butA)
$('.header-search>.butj>button').on('mouseleave', butB)