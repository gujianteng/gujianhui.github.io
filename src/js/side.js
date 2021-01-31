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

            // 一级菜单鼠标移入的函数
            function yijicai() {
                // console.log($('.nav-category').siblings());
                // 鼠标移入让搜索框失去焦点
                $('.header-search>.inpj>input').attr('readonly', "readonly")
                // 鼠标移入到二级菜单时让搜索框下面div消失
                $('.keyword-list').css({
                    display: 'none'
                })
                handlerB()
                // 让搜索框有移入效果
                $('.header-search').on('mouseenter', handlerA)
                // 让搜索框有移出效果
                $('.header-search').on('mouseleave', handlerB)
                // 让搜索框有点击的函数
                $('.nav_box').stop().slideDown(200, function () {
                 })

                // 5-1. 知道自己移入的时哪一个 li>a
                let index = $(this).index()
                // 5-2. 找到要渲染的数组
                const list = res[index - 1].list
                $(this).children().eq(1).css({
                    display: 'none'
                })
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
                    if ($(this).index() == 7) {
                        $('.nav_box > ul >li').last().addClass('hjhj')
                        $('.hjhj>.title').css({
                            color: "#333",
                            fontSize: 12

                        })
                        $('.hjhj>.price').css({
                            color: "#333",
                            fontSize: 12
                        })
                    }

                })
            }
            $('.nav-category').siblings().on('mouseenter', yijicai)
            $('.nav-category').siblings().on('mouseleave', function () {
                $('.nav_box').finish().slideUp(200,function () { 
                })
            })


            // 解决导航二级菜单抽搐函数
            function tiantian() {
                $('.nav_box').stop().slideDown(0, 'linear', function () { })
            }


            $('.nav_box')
                .on({
                    mouseenter: function () {
                        $(this).finish().slideDown(0,function () { })
                    },
                    mouseleave: function () {
                        $(this).finish().slideUp(200,function () { })
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
        }, 5000);
        // 写一个自动轮播的函数
        function autoP() {
            ding = setInterval(() => {
                $('.header-search>.inpj>input').attr('placeholder', `${res[index].search_title}`)
                if (index == res.length - 1) {
                    index = 0 - 1
                }
                index++
            }, 5000);
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


// 失去焦点的函数
function blurA() {
    $('.keyword-list').css({
        display: 'none'
    })
    handlerB()
    // 让搜索框有移入效果
    $('.header-search').on('mouseenter', handlerA)
    // 让搜索框有移出效果
    $('.header-search').on('mouseleave', handlerB)


}
$('.header-search>.inpj>input').on('blur', blurA)
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
    // 鼠标按下时 让搜索框下面的DIV显示
    $('.keyword-list').css({
        display: 'block'
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
// 移动到搜索框下面DIV的时候解绑搜索框失焦事件
$('.header-search>.keyword-list>ul').on('mouseenter', function () {
    $('.header-search>.inpj>input').off('blur', blurA)
})
// 移出搜索框下面DIV的时候重新绑定搜索框失焦事件
$('.header-search>.keyword-list>ul').on('mouseleave', function () {
    $('.header-search>.inpj>input').on('blur', blurA)
})