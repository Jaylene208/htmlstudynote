$("div > p").css();
$().add();     //将元素添加到匹配元素的集合中。
$().parent();  //返回被选元素的直接父元素
$().parentsUntil();    //返回介于两个给定元素之间的所有祖先元素。
$().children();    //返回被选元素的所有直接子元素
$().filter();      //过滤元素
$().find();    //返回被选元素的后代元素
$().prev();     //获得紧邻的前一个同辈元素
$().prevUntil();    //获得每个元素之前所有的同辈元素
$().siblings();    // 返回被选元素的所有同胞元素。
$().next();    // 返回被选元素的下一个同胞元素。
$().nextAll(); // 返回被选元素的所有跟随的同胞元素。
$().nextUntil();   // 返回介于两个给定参数之间的所有跟随的同胞元素。
$().first();       //返回被选元素的首个元素。
$().last();     //返回被选元素的最后一个元素。
$().eq();      //返回被选元素中带有指定索引号的元素。
$().closest();    //从元素本身开始，逐级向上级元素匹配，并返回最先匹配的祖先元素。
$("input").map(function(){       //map()：把每个元素通过函数传递到当前匹配集合中
    return $(this).val();} ).get().join(", ");    
