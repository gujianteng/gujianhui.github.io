$('.four>.container>.site-footer>.footer-links>div>.follow>a:nth-of-type(2)').on('mouseenter',function(){
    $('.four>.container>.site-footer>.footer-links>div>.follow>img').css({
        display:'block'
    })
})
$('.four>.container>.site-footer>.footer-links>div>.follow>a:nth-of-type(2)').on('mouseleave',function(){
    $('.four>.container>.site-footer>.footer-links>div>.follow>img').css({
        display:'none'
    })
})




$('.five>.container>.info-links>.safe-auth>img').last().hide(0, 'linear', function () {})
var imgset=null
function toggle(){
    imgset=setInterval(() => {
    $('.five>.container>.info-links>.safe-auth>img').last().toggle(0, 'linear', function () {})
      }, 2000);
}
toggle()


document.addEventListener('visibilitychange', () => {
    //       一定要写 else if , 因为 visibilityState 属性一共有四种值
    if (document.visibilityState === 'hidden') {
      // 表示离开当前页面了
      // 关闭定时器
      clearInterval(imgset)
    } else if (document.visibilityState === 'visible') {
      // 表示回到当前页面了
      // 开启自动轮播
      toggle()
    }
  })