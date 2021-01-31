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
var time = new Date()
var dhours = time.getHours()

// 计算两个时间的倒计时
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

if (dhours >= 0 && dhours < 10) {
    $('.flashsale-countdown>.round').html(`00:00 场`)

    var b = new Date('2031/2/1 9:42:00')

    var cc = null
    cc = setInterval(() => {

        var a = new Date()
        var ss = timeDiff(a, b)
        // console.log(ss.day);
        // console.log(ss.mm);
        var bg = b.getTime()
        var ag = a.getTime()
        // console.log(bg - ag);
        bg - ag <= 0 ? (ss.mm = 0, ss.seconds = 0, ss.minutes = 0, ss.hours = 0, ss.day = 0, clearInterval(cc)) : ''
        // console.log($('.flashsale-countdown>.countdown').children().eq(0));
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

    }, 1000);
}
if (dhours >= 10 && dhours < 14) {
    $('.flashsale-countdown>.round').html(`10:00 场`)

    var b = new Date('2031/2/1 13:42:00')

    var cc = null
    cc = setInterval(() => {

        var a = new Date()
        var ss = timeDiff(a, b)
        // console.log(ss.day);
        // console.log(ss.mm);
        var bg = b.getTime()
        var ag = a.getTime()
        // console.log(bg - ag);
        bg - ag <= 0 ? (ss.mm = 0, ss.seconds = 0, ss.minutes = 0, ss.hours = 0, ss.day = 0, clearInterval(cc)) : ''
        // console.log($('.flashsale-countdown>.countdown').children().eq(0));
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

    }, 1000);
}
if (dhours >= 14 && dhours < 20) {
    $('.flashsale-countdown>.round').html(`14:00 场`)
    var b = new Date('2031/2/1 19:42:00')

    var cc = null
    cc = setInterval(() => {

        var a = new Date()
        var ss = timeDiff(a, b)
        // console.log(ss.day);
        // console.log(ss.mm);
        var bg = b.getTime()
        var ag = a.getTime()
        // console.log(bg - ag);
        bg - ag <= 0 ? (ss.mm = 0, ss.seconds = 0, ss.minutes = 0, ss.hours = 0, ss.day = 0, clearInterval(cc)) : ''
        // console.log($('.flashsale-countdown>.countdown').children().eq(0));
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

    }, 1000);
}
if (dhours >= 20 && dhours < 22) {
    $('.flashsale-countdown>.round').html(`20:00 场`)

    var b = new Date('2031/2/1 21:42:00')

    var cc = null
    cc = setInterval(() => {

        var a = new Date()
        var ss = timeDiff(a, b)
        // console.log(ss.day);
        // console.log(ss.mm);
        var bg = b.getTime()
        var ag = a.getTime()
        // console.log(bg - ag);
        bg - ag <= 0 ? (ss.mm = 0, ss.seconds = 0, ss.minutes = 0, ss.hours = 0, ss.day = 0, clearInterval(cc)) : ''
        // console.log($('.flashsale-countdown>.countdown').children().eq(0));
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

    }, 1000);
}
if (dhours >= 22 && dhours < 24) {
    $('.flashsale-countdown>.round').html(`22:00 场`)
    var b = new Date('2031/2/1 23:42:00')

    var cc = null
    cc = setInterval(() => {

        var a = new Date()
        var ss = timeDiff(a, b)
        // console.log(ss.day);
        // console.log(ss.mm);
        var bg = b.getTime()
        var ag = a.getTime()
        // console.log(bg - ag);
        bg - ag <= 0 ? (ss.mm = 0, ss.seconds = 0, ss.minutes = 0, ss.hours = 0, ss.day = 0, clearInterval(cc)) : ''
        // console.log($('.flashsale-countdown>.countdown').children().eq(0));
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

    }, 1000);
}
