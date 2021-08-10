/*
* 修改innerHTML内容；输出
 */
testFunction:{
    document.getElementById('demo1').innerHTML="hello";
    var a=document.getElementById('demo1');
    console.log(a);//输出整个标签
}
/**
 * 显示日期
 */
test2Function:{
    document.getElementById('demo2').innerHTML=Date();
}
/**
 * 修改字体样式大小
 */
test3Function:{
    document.getElementById('demo3').style.fontSize='32px';
}
/**
 * 隐藏元素
 */
test4Function:{
    document.getElementById('demo4').style.display='none';
}
/**
 * 定义元素；弹出警告框
 */
test5Function:{
    var a=111;
    window.alert(a);
}
/**
 * JS变量（如果把要给数值放入引号中，其余数值会被视作字符串并被级联）
 */
test6Function:{
    var x = 3 + 5 + "8"
    var a=document.getElementById("demo5").innerHTML = '3+5+"8"=' + x;
    var y = "8" + 3 + 5
    var b=document.getElementById("demo6").innerHTML = '"8"+3+5=' + y;
    console.log(a);
    console.log(b);
}
/**
 * 运算符使用
 */
test7Function:{
    var txt1 = "Bill";
    var txt2 = "Gates";
    var a=document.getElementById("demo7").innerHTML = txt1 + " "+txt2;
    console.log(a);
}
/**
 * 算术运算
 */
test8Function:{
    var a = 2;
    var x = (7 + 8) * a;
    console.log(x);
}
/**
 * 输出数组
 */
test9Function:{
    var cars = ["Porsche", "LEXUS" ,"BMW"];
    document.getElementById("demo9").innerHTML = cars[1];
}
/**
 * JS对象
 */
test10Function:{
    var person = {
        firstName : "Bill",
        lastName  : "Gates",
        age       : 26
    };
    document.getElementById("demo10").innerHTML =
    person.firstName + " is " + person.age + " years old.";
}
/**
 * typeof运算符
 */
test11Function:{
    document.getElementById("demo11").innerHTML =
     typeof (26)+" <br>"+ typeof "Bill Gates";
    document.getElementById("demo12").innerHTML =
     typeof [1234];
}
/**
 * 定义函数计算
 */
countFunction:{
    function myFunction(p1 ,p2) {
        return p1 * p2;
    }
    console.log(myFunction(78));
    console.log(myFunction);//输出函数内容
}
/**
 * 创建对象
 * 显示对象属性和对象方法
 */
carFunction:{
    var car = {
        type:"porsche", model:"718", color:"white",
        fullType:{//定义对象方法
            return :type+" " +this.model
        }
    };
    console.log(car.fullType());
    console.log(car.color);
}
/**
 * 改变自身元素
 */
dateFunction:  {
    document.getElementById("change").innerHTML=Date();
}
/**
 * 返回字符串的长度
 * 通过关键词 new 定义为对象
 */
stringFunction1:  {
    var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log(txt.length);
    var y = new String("Bill");
    console.log(typeof(y));
}
/**
 * 返回指定文本首次出现的位置
 */
stringFunction2:  {
    var str = "The full name of China is the People's Republic of China.";
    var pos = str.indexOf("China");
    console.log(pos);
}
/**
 * 返回指定文本最后一次出现的位置
 */
stringFunction3:  {
    var str = "The full name of China is the People's Republic of China.";
    var pos = str.lastIndexOf("China");
    console.log(pos);
}
/**
 * 提取部分字符串
 * substring(start end)不接受负索引
 * substr(start length)
 */
stringFunction4:  {
    var str = "Apple Banana Mango";
    var res = str.substring(713);
    console.log(res);
    var sub = str.substr(76);
    console.log(sub);
}
/**
 * 替换内容
 */
stringFunction5:  {
    var str = "Please visit Microsoft!";
    var res = str.replace("Microsoft" ,"W3School");
    console.log(res);
}
/**
 * 转换大小写
 */
stringFunction6:  {
    var text1 = "Hello World!";
    var text2 = text1.toUpperCase();
    var text3 = text1.toLowerCase();
    console.log(text2);
    console.log(text3);
}
/**
 * 连接字符串 concat()
 */
stringFunction7:  {
    var text1 = "Hello";
    var text2 = "World";
    var text3 = text1.concat(" ",text2);
    console.log(text3);

    var text = "Hello".concat(" ","World!");// 等同于：var text = "Hello" + " " + "World!";
    console.log(text);
}
/**
 * 删除字符串两端的空白符 trim()
 */
stringFunction8:  {
    var str = "       Hello World!        ";
    alert(str.trim());
}
/**
 * 返回字符串中指定下标（位置）的字符串 charAt()
 */
stringFunction9:  {
    var str = "HELLO WORLD";
    console.log(str.charAt(0));  
}
/**
 * 将字符串转为数组
 */
stringFunction10: {
    var txt="abcd";
    var sp=txt.split("");
    console.log(sp);
}
/**
 * 以字符串返回数值
 */
numberFunction1: {
    var x =26;
    console.log(x.toString());
}
/**
 * 指定小数点位数
 */
numberFunction2: {
    var x = 9.656;
    console.log(x.toFixed(0));
    console.log (x.toFixed(2));   
}
/**
 * 指定长度
 */
numberFunction3: {
    var x = 9.656;
    x.toPrecision(2);
}
/**
 * 把变量转换为数值
 */
numberFunction4: {
    var x=true;
    var y= new Date();
    var z="10";
    console.log(Number(x));
    console.log(Number(y));
    console.log(Number(z));
}
/**
 * 解析一段字符串并返回数值
 */
numberFunction5: {
    console.log(parseInt("10 30"));
    console.log(parseInt("26 years"));
    console.log(parseFloat("10.33"));     
}