"use strict";function getlist(){$.ajax({url:"../lib/navTop.json",dataType:"json",success:function(o){console.log(o);var i="";o.forEach(function(n){i+="<li><a>".concat(n.name,"<a/></li>")}),$(".nav-list").append(i),$(".nav-category").siblings().on("mouseenter",function(){$(".nav_box").stop().slideDown(200,"linear",function(){});var n=$(this).index(),n=o[n-1].list;$(this).children().eq(1).css({display:"none"});var i="";n.forEach(function(n){i+='\n                      <li>\n                        <div>\n                          <img src="'.concat(n.list_url,'" alt="">\n                        </div>\n                        <p class="title">').concat(n.list_name,'</p>\n                        <span class="price">').concat(n.list_price,"</span>\n                      </li>\n                    "),$(".nav_box > ul").html(i),$(".nav_box > ul >li").first().addClass("boxli"),$(".nav_box").css({borderTop:" 1px solid #e0e0e0"})})}),$(".nav-category").siblings().on("mouseleave",function(){$(".nav_box").stop().slideUp(200,"linear",function(){})}),$(".nav_box").on({mouseenter:function(){$(this).finish().show()},mouseleave:function(){$(this).finish().slideUp(200,"linear",function(){})}}),$(".nav-list").append("<li><a>服务</a></li><li><a>社区</a></li>")}})}$(".header-logo").on("mouseenter",function(){$(".mimi").stop().animate({left:0},200,"linear",function(){})}),$(".header-logo").on("mouseleave",function(){$(".mimi").stop().animate({left:-55},200,"linear",function(){})}),getlist();