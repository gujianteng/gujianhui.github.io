var mySwipergu = new Swiper ('#swiper2', {
    slidesPerView : 4,
    slidesPerGroup : 4,
    spaceBetween : 14,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        disabledClass: 'my-button-disabled',
      },
    // direction: 'vertical', // 垂直切换选项
    // loop: true, // 循环模式选项
    autoplay: {
      delay: 3000,
    },
    speed:2000,
    // effect : 'fade',

    // // 如果需要前进后退按钮
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

  })

  $('.span-prev').on('mouseenter',function(){
      if($('.span-prev div').hasClass('my-button-disabled')){
        //   console.log(111);
        $('.span-prev>.swiper-button-prev').css({
            color:'#e0e0e0'
        })
      }else{
        $('.span-prev>.swiper-button-prev').css({
            color:'#ff6700'
        })
      }

  })

  $('.span-prev').on('mouseleave',function(){

    if($('.span-prev div').hasClass('my-button-disabled')){
        console.log(111);
      $('.span-prev>.swiper-button-prev').css({
        color:'#e0e0e0'
      })
    }else{
        $('.span-prev>.swiper-button-prev').css({
            color:'#b0b0b0'
        })
      }

  })

  $('.span-prev').on('click',function(){
    $('.span-next>.swiper-button-next').css({
        color:'#b0b0b0'
    })
    if($('.span-prev div').hasClass('my-button-disabled')){
      //   console.log(111);
      $('.span-prev>.swiper-button-prev').css({
          color:'#e0e0e0'
      })
    }else{
      $('.span-prev>.swiper-button-prev').css({
          color:'#ff6700'
      })
    }

})



$('.span-next').on('mouseenter',function(){
    if($('.span-next div').hasClass('my-button-disabled')){
      //   console.log(111);
      $('.span-next>.swiper-button-prev').css({
          color:'#e0e0e0'
      })
    }else{
      $('.span-next>.swiper-button-next').css({
          color:'#ff6700'
      })
    }

})

$('.span-next').on('mouseleave',function(){

  if($('.span-next div').hasClass('my-button-disabled')){
      console.log(111);
    $('.span-next>.swiper-button-next').css({
      color:'#e0e0e0'
    })
  }else{
      $('.span-next>.swiper-button-next').css({
          color:'#b0b0b0'
      })
    }

})

$('.span-next').on('click',function(){
    $('.span-prev>.swiper-button-prev').css({
        color:'#b0b0b0'
    })
  if($('.span-next div').hasClass('my-button-disabled')){
    //   console.log(111);
    $('.span-next>.swiper-button-next').css({
        color:'#e0e0e0'
    })
  }else{
    $('.span-next>.swiper-button-next').css({
        color:'#ff6700'
    })
  }

})