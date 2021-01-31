// 第三部分轮播图
var mySwipergu = new Swiper('#swiper2', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 14,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        disabledClass: 'my-button-disabled',
    },
    autoplay: {
        delay: 3000,
    },
    speed: 2000,
    // effect : 'fade',

    // // 如果需要前进后退按钮
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

})

$('.span-prev').on('mouseenter', function () {
    if ($('.span-prev div').hasClass('my-button-disabled')) {
        //   console.log(111);
        $('.span-prev>.swiper-button-prev').css({
            color: '#e0e0e0'
        })
    } else {
        $('.span-prev>.swiper-button-prev').css({
            color: '#ff6700'
        })
    }

})

$('.span-prev').on('mouseleave', function () {

    if ($('.span-prev div').hasClass('my-button-disabled')) {
        console.log(111);
        $('.span-prev>.swiper-button-prev').css({
            color: '#e0e0e0'
        })
    } else {
        $('.span-prev>.swiper-button-prev').css({
            color: '#b0b0b0'
        })
    }

})

$('.span-prev').on('click', function () {
    $('.span-next>.swiper-button-next').css({
        color: '#b0b0b0'
    })
    if ($('.span-prev div').hasClass('my-button-disabled')) {
        //   console.log(111);
        $('.span-prev>.swiper-button-prev').css({
            color: '#e0e0e0'
        })
    } else {
        $('.span-prev>.swiper-button-prev').css({
            color: '#ff6700'
        })
    }

})



$('.span-next').on('mouseenter', function () {
    if ($('.span-next div').hasClass('my-button-disabled')) {
        //   console.log(111);
        $('.span-next>.swiper-button-prev').css({
            color: '#e0e0e0'
        })
    } else {
        $('.span-next>.swiper-button-next').css({
            color: '#ff6700'
        })
    }

})

$('.span-next').on('mouseleave', function () {

    if ($('.span-next div').hasClass('my-button-disabled')) {
        console.log(111);
        $('.span-next>.swiper-button-next').css({
            color: '#e0e0e0'
        })

    } else {
        $('.span-next>.swiper-button-next').css({
            color: '#b0b0b0'
        })
    }

})

$('.span-next').on('click', function () {
    $('.span-prev>.swiper-button-prev').css({
        color: '#b0b0b0'
    })
    if ($('.span-next div').hasClass('my-button-disabled')) {
        //   console.log(111);
        $('.span-next>.swiper-button-next').css({
            color: '#e0e0e0'
        })
    } else {
        $('.span-next>.swiper-button-next').css({
            color: '#ff6700'
        })
    }

})


// 第三部分倒计时秒杀
// 自动倒计时的函数
var ccgu = null
function guplay() {
    ccgu = setInterval(() => {
        var a = new Date()
        var time = new Date()
        var dhours = time.getHours()
        var dfen = time.getMinutes()
        // 00 点场

        if (dhours >= 0 && dhours < 10) {
            var b = new Date('2031/2/1 9:42:00')
            var ss = timeDiff(a, b)

            $('.flashsale-countdown>.round').html('00:00 场')
            $('.flashsale-countdown>.desc').html('距离结束还有')
            $('.flashsale-countdown>.countdown').children().eq(0).html(`${ss.hours}`)
            $('.flashsale-countdown>.countdown').children().eq(2).html(`${ss.minutes}`)
            $('.flashsale-countdown>.countdown').children().eq(4).html(`${ss.seconds}`)


            if (dhours == 9 && dfen > 42) {
                {
                    var b = new Date('2031/2/1 10:00:00')
                    var ss = timeDiff(a, b)

                    $('.flashsale-countdown>.round').html(`10:00 场 即将开始`)
                    $('.flashsale-countdown>.desc').html('距离开始还有')
                    $('.flashsale-countdown>.countdown').children().eq(0).html(`${ss.hours}`)
                    $('.flashsale-countdown>.countdown').children().eq(2).html(`${ss.minutes}`)
                    $('.flashsale-countdown>.countdown').children().eq(4).html(`${ss.seconds}`)

                    if (ss.seconds < 10) {
                        $('.flashsale-countdown>.countdown').children().eq(4).html(`0${ss.seconds}`)
                    }
                    if (ss.minutes < 10) {
                        $('.flashsale-countdown>.countdown').children().eq(2).html(`0${ss.minutes}`)
                    }
                    if (ss.hours < 10) {
                        $('.flashsale-countdown>.countdown').children().eq(0).html(`0${ss.hours}`)

                    }

                }
            }


            if (ss.hours < 10) {
                $('.flashsale-countdown>.countdown').children().eq(0).html(`0${ss.hours}`)

            }
            if (ss.minutes < 10) {
                $('.flashsale-countdown>.countdown').children().eq(2).html(`0${ss.minutes}`)
            }
            if (ss.seconds < 10) {
                $('.flashsale-countdown>.countdown').children().eq(4).html(`0${ss.seconds}`)
            }



        }
        // 10 点场
        if (dhours >= 10 && dhours < 14) {
            var b = new Date('2031/2/1 13:42:00')
            var ss = timeDiff(a, b)

            $('.flashsale-countdown>.round').html(`10:00 场`)
            $('.flashsale-countdown>.desc').html('距离结束还有')
            $('.flashsale-countdown>.countdown').children().eq(0).html(`${ss.hours}`)
            $('.flashsale-countdown>.countdown').children().eq(2).html(`${ss.minutes}`)
            $('.flashsale-countdown>.countdown').children().eq(4).html(`${ss.seconds}`)


            if (dhours == 13 && dfen > 42) {
                {
                    var b = new Date('2031/2/1 10:00:00')
                    var ss = timeDiff(a, b)

                    $('.flashsale-countdown>.round').html(`14:00 场 即将开始`)
                    $('.flashsale-countdown>.desc').html('距离开始还有')
                    $('.flashsale-countdown>.countdown').children().eq(0).html(`${ss.hours}`)
                    $('.flashsale-countdown>.countdown').children().eq(2).html(`${ss.minutes}`)
                    $('.flashsale-countdown>.countdown').children().eq(4).html(`${ss.seconds}`)

                    if (ss.seconds < 10) {
                        $('.flashsale-countdown>.countdown').children().eq(4).html(`0${ss.seconds}`)
                    }
                    if (ss.minutes < 10) {
                        $('.flashsale-countdown>.countdown').children().eq(2).html(`0${ss.minutes}`)
                    }
                    if (ss.hours < 10) {
                        $('.flashsale-countdown>.countdown').children().eq(0).html(`0${ss.hours}`)

                    }

                }
            }


            if (ss.hours < 10) {
                $('.flashsale-countdown>.countdown').children().eq(0).html(`0${ss.hours}`)

            }
            if (ss.minutes < 10) {
                $('.flashsale-countdown>.countdown').children().eq(2).html(`0${ss.minutes}`)
            }
            if (ss.seconds < 10) {
                $('.flashsale-countdown>.countdown').children().eq(4).html(`0${ss.seconds}`)
            }



        }
        // 14 点场
        if (dhours >= 14 && dhours < 20) {
            var b = new Date('2031/2/1 19:42:00')
            var ss = timeDiff(a, b)

            $('.flashsale-countdown>.round').html(`14:00 场`)
            $('.flashsale-countdown>.desc').html('距离结束还有')
            $('.flashsale-countdown>.countdown').children().eq(0).html(`${ss.hours}`)
            $('.flashsale-countdown>.countdown').children().eq(2).html(`${ss.minutes}`)
            $('.flashsale-countdown>.countdown').children().eq(4).html(`${ss.seconds}`)


            if (dhours == 19 && dfen > 42) {
                {
                    var b = new Date('2031/2/1 20:00:00')
                    var ss = timeDiff(a, b)

                    $('.flashsale-countdown>.round').html(`20:00 场 即将开始`)
                    $('.flashsale-countdown>.desc').html('距离开始还有')
                    $('.flashsale-countdown>.countdown').children().eq(0).html(`${ss.hours}`)
                    $('.flashsale-countdown>.countdown').children().eq(2).html(`${ss.minutes}`)
                    $('.flashsale-countdown>.countdown').children().eq(4).html(`${ss.seconds}`)

                    if (ss.seconds < 10) {
                        $('.flashsale-countdown>.countdown').children().eq(4).html(`0${ss.seconds}`)
                    }
                    if (ss.minutes < 10) {
                        $('.flashsale-countdown>.countdown').children().eq(2).html(`0${ss.minutes}`)
                    }
                    if (ss.hours < 10) {
                        $('.flashsale-countdown>.countdown').children().eq(0).html(`0${ss.hours}`)

                    }

                }
            }


            if (ss.hours < 10) {
                $('.flashsale-countdown>.countdown').children().eq(0).html(`0${ss.hours}`)

            }
            if (ss.minutes < 10) {
                $('.flashsale-countdown>.countdown').children().eq(2).html(`0${ss.minutes}`)
            }
            if (ss.seconds < 10) {
                $('.flashsale-countdown>.countdown').children().eq(4).html(`0${ss.seconds}`)
            }



        }
        // 20 点场

        if (dhours >= 20 && dhours < 22) {
            var b = new Date('2031/2/1 21:42:00')
            var ss = timeDiff(a, b)

            $('.flashsale-countdown>.round').html(`20:00 场`)
            $('.flashsale-countdown>.desc').html('距离结束还有')
            $('.flashsale-countdown>.countdown').children().eq(0).html(`${ss.hours}`)
            $('.flashsale-countdown>.countdown').children().eq(2).html(`${ss.minutes}`)
            $('.flashsale-countdown>.countdown').children().eq(4).html(`${ss.seconds}`)


            if (dhours == 21 && dfen > 42) {
                {
                    var b = new Date('2031/2/1 22:00:00')
                    var ss = timeDiff(a, b)

                    $('.flashsale-countdown>.round').html(`22:00 场 即将开始`)
                    $('.flashsale-countdown>.desc').html('距离开始还有')
                    $('.flashsale-countdown>.countdown').children().eq(0).html(`${ss.hours}`)
                    $('.flashsale-countdown>.countdown').children().eq(2).html(`${ss.minutes}`)
                    $('.flashsale-countdown>.countdown').children().eq(4).html(`${ss.seconds}`)

                    if (ss.seconds < 10) {
                        $('.flashsale-countdown>.countdown').children().eq(4).html(`0${ss.seconds}`)
                    }
                    if (ss.minutes < 10) {
                        $('.flashsale-countdown>.countdown').children().eq(2).html(`0${ss.minutes}`)
                    }
                    if (ss.hours < 10) {
                        $('.flashsale-countdown>.countdown').children().eq(0).html(`0${ss.hours}`)

                    }

                }
            }


            if (ss.hours < 10) {
                $('.flashsale-countdown>.countdown').children().eq(0).html(`0${ss.hours}`)

            }
            if (ss.minutes < 10) {
                $('.flashsale-countdown>.countdown').children().eq(2).html(`0${ss.minutes}`)
            }
            if (ss.seconds < 10) {
                $('.flashsale-countdown>.countdown').children().eq(4).html(`0${ss.seconds}`)
            }



        }

        // 22 点场
        if (dhours >= 22 && dhours < 24) {
            var b = new Date('2031/2/1 23:42:00')
            var ss = timeDiff(a, b)

            $('.flashsale-countdown>.round').html(`22:00 场`)
            $('.flashsale-countdown>.desc').html('距离结束还有')
            $('.flashsale-countdown>.countdown').children().eq(0).html(`${ss.hours}`)
            $('.flashsale-countdown>.countdown').children().eq(2).html(`${ss.minutes}`)
            $('.flashsale-countdown>.countdown').children().eq(4).html(`${ss.seconds}`)


            if (dhours == 23 && dfen > 42) {
                {
                    var b = new Date('2031/2/1 23:59:59')
                    var ss = timeDiff(a, b)

                    $('.flashsale-countdown>.round').html(`00:00 场 即将开始`)
                    $('.flashsale-countdown>.desc').html('距离开始还有')
                    $('.flashsale-countdown>.countdown').children().eq(0).html(`${ss.hours}`)
                    $('.flashsale-countdown>.countdown').children().eq(2).html(`${ss.minutes}`)
                    $('.flashsale-countdown>.countdown').children().eq(4).html(`${ss.seconds}`)

                    if (ss.seconds < 10) {
                        $('.flashsale-countdown>.countdown').children().eq(4).html(`0${ss.seconds}`)
                    }
                    if (ss.minutes < 10) {
                        $('.flashsale-countdown>.countdown').children().eq(2).html(`0${ss.minutes}`)
                    }
                    if (ss.hours < 10) {
                        $('.flashsale-countdown>.countdown').children().eq(0).html(`0${ss.hours}`)

                    }

                }
            }


            if (ss.hours < 10) {
                $('.flashsale-countdown>.countdown').children().eq(0).html(`0${ss.hours}`)

            }
            if (ss.minutes < 10) {
                $('.flashsale-countdown>.countdown').children().eq(2).html(`0${ss.minutes}`)
            }
            if (ss.seconds < 10) {
                $('.flashsale-countdown>.countdown').children().eq(4).html(`0${ss.seconds}`)
            }



        }
        // console.log(222222);
    }, 1000);
}
guplay()

// console.log(ccgu);
// 切换窗口和最小化时停止定时器
document.addEventListener('visibilitychange', () => {
    //       一定要写 else if , 因为 visibilityState 属性一共有四种值
    if (document.visibilityState === 'hidden') {
        // 表示离开当前页面了
        // 关闭定时器
        // console.log(ccgu);
        clearInterval(ccgu)
    } else if (document.visibilityState === 'visible') {
        // 表示回到当前页面了
        // 开启自动轮播
        guplay()
    }
})

function timeDiff(time1, time2) {
    var diff = Math.floor(Math.abs(time1.getTime() - time2.getTime()) / 1000)
    var day = Math.floor(diff / (60 * 60 * 24))
    var hours = Math.floor(diff % (60 * 60 * 24) / (60 * 60))
    var minutes = Math.floor(diff % (60 * 60) / 60)
    var seconds = diff % 60
    var mm = diff = Math.abs(time1.getTime() - time2.getTime()) % 1000
    var obj = {}
    obj.day = day
    obj.hours = hours
    obj.minutes = minutes
    obj.seconds = seconds
    obj.mm = mm
    return obj
}