var mySwiper = new Swiper ('.swiper-container', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    effect : 'fade',

    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable :true,
    },

    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })
//   鼠标移入轮播图内轮播图停止轮播
  $('.swiper-container').on('mouseenter',function(){
    mySwiper.autoplay.stop();
  })
  //   鼠标移出轮播图时轮播图又自动轮播
  $('.swiper-container').on('mouseleave',function(){
    mySwiper.autoplay.start();
  })

  $.ajax({
      url:"../lib/swiper.json",
      dataType:'json',
      success:function(res){
        // console.log(res);
        var str=''
        res.forEach(item => {
            str += `<li><a>${item.name}</a><span class="icon iconfont">&#xe603;</span></li>`

        });
        $('.nav_list>ul').append(str)

        $('.nav_list>ul>li').on('mouseenter',function(){
            // console.log($(this));
            let index = $(this).index()
            // console.log(index);
            var ul_list=res[index].list
            // console.log(ul_list);
            var stra=''
            var strb=''
            ul_list.forEach(item=>{
                    // console.log(item.ul_name);
                    item.ul_name.forEach(item=>{
                        console.log(item);
                        strb+=`<li><img src=${item.li_url}><span>${item.li_name}<span></li>`
                    })
                    stra+=`<ul>${strb}</ul>`
                    strb=''
            })

            $('.nav_list_erji').html(`${stra}`)

            // console.log(wid);
            $('.nav_list_erji').stop().fadeIn(0, 'linear', function () { })
        })
        $('.nav_list>ul>li').on('mouseleave',function(){
            $('.nav_list_erji').stop().fadeOut(0, 'linear', function () { })
        })

        $('.nav_list_erji')
        .on({
            mouseenter: function () {
                $(this).finish().show()
            },
            mouseleave: function () {
                $(this).finish().fadeOut(0, 'linear', function () { })
            }
        })

      }


  })

