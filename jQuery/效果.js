$("").hide();        //隐藏元素
$("").hide(1000);   //带有速度的隐藏元素
$("").show();       //显示元素
$("").toggle();     //切换隐藏和显示效果 toggle()
$("").fadeIn("slow");      //淡入效果 fadeIn()
$("").fadeOut();        //淡出效果 fadeOut()
$("").fadeToggle();     //切换淡入淡出
$("").fadeTo("slow",0.1);       //fadeTo()渐变为给定的不透明度(0-1)
$("").slideDown();      //slideDown()向下滑动
$("").slideUp();        //slideUp()向上滑动
$("").slideToggle("slow");  //slideToggle()切换滑动方式
$("").animate({ height:'+=50px',/**相对值 */ },"slow")       //动画animate() 
$(".box").stop();        //stop(stopAll,goToEnd)停止动画或效果
$("").hide(speed,callback);//callback函数是一个在 hide()100%操作完成后被执行的函数
$("").css("color","red").slideUp(2000);//chaining 动作追加





