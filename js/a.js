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
dateFunction: {
    document.getElementById("change").innerHTML=Date();
}
/**
 * 返回字符串的长度
 * 通过关键词 new 定义为对象
 */
stringFunction1: {
    var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log(txt.length);
    var y = new String("Bill");
    console.log(typeof(y));
}
/**
 * 返回指定文本首次出现的位置
 */
stringFunction2: {
    var str = "The full name of China is the People's Republic of China.";
    var pos = str.indexOf("China");
    console.log(pos);
}
/**
 * 返回指定文本最后一次出现的位置
 */
stringFunction3: {
    var str = "The full name of China is the People's Republic of China.";
    var pos = str.lastIndexOf("China");
    console.log(pos);
}
/**
 * 提取部分字符串
 * substring(start end)不接受负索引
 * substr(start length)
 */
stringFunction4: {
    var str = "Apple Banana Mango";
    var res = str.substring(713);
    console.log(res);
    var sub = str.substr(76);
    console.log(sub);
}
/**
 * 替换内容
 */
stringFunction5: {
    var str = "Please visit Microsoft!";
    var res = str.replace("Microsoft" ,"W3School");
    console.log(res);
}
/**
 * 转换大小写
 */
stringFunction6: {
    var text1 = "Hello World!";
    var text2 = text1.toUpperCase();
    var text3 = text1.toLowerCase();
    console.log(text2);
    console.log(text3);
}
/**
 * 连接字符串 concat()
 */
stringFunction7: {
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
stringFunction8: {
    var str = "       Hello World!        ";
    alert(str.trim());
}
/**
 * 返回字符串中指定下标（位置）的字符串 charAt()
 */
stringFunction9: {
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

/**
* 数组:通过索引来引用某个数组元素
 * 修改数组元素并输出
 * 访问最后一个元素
 * 输出数组长度
 * 数组类型 object
 */
 arrayFunction1:{
    var cars = ["Porsche", "LEXUS", "BMW","Volvo"];
    console.log(cars[1]);
    cars[0] = "LEXUS";
    console.log(cars[0]);
    console.log(cars[cars.length-1]);
    console.log(cars.length);
    console.log(typeof(cars));
}
/**
 * 数组对象
 * 使用名称来访问其属性元素
 */
arrayFunction2:{
    var persons = {
        "firstName":"Jay",
        "lastName":"Jaylene",
        "age":"25"};
    console.log(persons.lastName);
}
/**
 * forEach遍历数组
 */
arrayFunction3:{
    var text, fLen, i;
    var cars = ["Porsche", "LEXUS", "BMW","volvo"];
    text = "<ul>";
    cars.forEach(arrayFunction);
    text += "</ul>";
    function arrayFunction(value) {
        text += "<li>" + value + "</li>";
        return 123;
    }
    document.getElementById("array1").innerHTML=text;
}
/**
 * push() 添加新元素
 * pop()  删除最后一个元素
 */
arrayFunction4:{
    var cars = ["Porsche", "LEXUS", "BMW"];
    cars.push("volvo"); 
    console.log(cars);

    cars.pop();
    console.log("被删除元素:"+cars.pop());
    console.log(cars);

}
/**
 * 关联数组:只支持数字索引，不支持命名索引
 */
arrayFunction5:{
    var cars = ["Porsche", "LEXUS", "BMW"];
    var persons = {
        "firstName":"Jay",
        "lastName":"Jaylene",
        "age":"25"};
    var x=cars[0];
    var y=persons["firstName"];
    console.log(x);
    console.log(y);
}
/**
 * toString():以逗号分隔的字符串返回数组
 * join() : 以指定方式连接成字符串
 */
arrayFunction6:{
    var cars = ["Porsche", "LEXUS", "BMW"];
    document.getElementById("array2").innerHTML=cars.toString();
    console.log(cars.join(" * "));
}
/**
 * shift() 删除首个数组元素
 * unshift()  （在开头）向数组添加新元素
 */
arrayFunction7:{
    var cars = ["Porsche", "LEXUS", "BMW"];
    console.log("被删除的首个元素："+cars.shift());
    console.log(cars);
    console.log(cars.unshift("volvo")); //返回新数组的长度
    console.log(cars);
}
/**
 * length属性添加元素
 */
arrayFunction8:{
    var cars = ["Porsche", "LEXUS", "BMW"];
    cars[cars.length] = "Benz";
    console.log(cars);
}
/**
 * 删除元素delete 
 * 拼接元素 splice(应添加新元素的位置,应往后删除多少元素，要添加的元素)
 */
arrayFunction9:{
    var cars = ["Porsche", "LEXUS", "BMW"];
    delete cars[0];
    console.log(cars);
    cars.splice(0,1,"volvo");
    console.log(cars);
}
/**
 * 合并两个数组 concat()
 * 裁剪切出新数组  slice()
 */
arrayFunction10:{
    var girls = ["Lisa", "Taylor", "Sadra"];
    var boys = ["Boze","Anny"];
    var all=girls.concat(boys);
    console.log(all);
    var newArr=all.slice(1); //从第一个元素开始切（不包含第一个）
    console.log(newArr);
}
/**
 * sort() 方法以字母顺序对数组进行排序
 * reverse() 方法反转数组中的元素
 */
arrayFunction11:{
    var girls = ["Lisa", "Taylor", "Sadra"];
    var boys = ["Boze","Anny"]
    var all=girls.concat(boys);
    all.sort();
    console.log(all);
    all.reverse(); 
    console.log(all);
}
/**
 * 数字排序
 * 比值函数：升序 function(a, b){return a - b}
 *          降序function(a, b){return b - a}
 * 查找最低值
 *  Math.max()找最高值
 * 自制函数遍历数组
 */
arrayFunction12:{
    var number = [26,34,9,56];
    console.log( number.sort(function (a,b) {return a-b}) );
    console.log(number[0]);

    function myArray(arr) {
        return (Math.max.apply(null,arr));
    };
    console.log(myArray(number));

    function myArrayMax(arr) {
        var len = arr.length;
        var max = -Infinity;
        while (len--) {
            if (arr[len] > max) {
            max = arr[len];
            }
        }
        return max;
    };
    console.log(myArrayMax(number));
}
/**
 * 按照年份升序排序数组对象
 */
arrayFunction13:{
    var cars = [
        {type:"BMW", year:2017},
        {type:"Audi", year:2019},
        {type:"porsche", year:2018}
    ];
    console.log(cars);
    console.log(cars.sort(function(a, b){return a.year - b.year}));
}
/**
 * Array.forEach()回调函数 
 */
arrayFunction14:{
    var txt="";
    var num = [2,45,92,71];
    num.forEach(value => {
        txt=txt+value+"<br>";
    });
    document.getElementById("array3").innerHTML=txt;
}
/**
 * map()创建新数组
 */
arrayFunction15:{
    var num1 = [2,45,92,71];
    var num2=num1.map(myFunction);
    function myFunction(value) {
        return value*2;
    }
    console.log(num2);
}
/**
 * filter() 创建一个包含通过测试的数组元素的新数组
 */
arrayFunction16:{
    var num1 = [2,45,92,71];
    var num2=num1.filter(myFunction);
    function myFunction(value) {
        return value>40;
    }
    console.log(num2);
}
/**
 * reduce() 生成（减少它）单个值：从左到右
 */
arrayFunction17:{
    var num1 = [2,45,92,71];
    var sum=num1.reduce(myFunction);
    function myFunction(total,value) {
        return value+total;
    }
    console.log(sum);
}
/**
 * every() 测试所有元素是否通过
 */
arrayFunction18:{
    var num1 = [2,45,92,71];
    var test=num1.every(myFunction);
    function myFunction(value) {
        return value>9;
    }
    console.log(test);
}
/**
 * some() 检查某些数组值是否通过了测试
 */
arrayFunction19:{
    var num1 = [2,45,92,71];
    var test=num1.some(myFunction);
    function myFunction(value) {
        return value>9;
    }
    console.log(test);
}
/**
 * 检索元素位置 indexOf (数组下标 从0开始)
 * lastIndexOf从数组结尾开始 
 */
arrayFunction20:{
    var num = [2,45,92,71];
    var a=num.indexOf(2);
    var b=num.lastIndexOf(45);
    console.log(a+1);
    console.log(b+1);// ?
}
/**
 * find() 方法返回通过测试函数的第一个元素的值
 * findIndex() 方法返回通过测试函数的第一个元素的下标
 */
arrayFunction21:{
    var num1 = [2,45,92,71];
    var test1=num1.find(myFunction);
    var test2=num1.findIndex(myFunction);
    function myFunction(value) {
        return value>9;
    }
    console.log(test1);
    console.log(test2);
}
/**
 * 时间对象方法
 */
dateFunction1: {
    var d= new Date();
    var da = new Date("2015-03");
    console.log(d.toDateString());
    console.log(da);
    console.log(d.getTime());
    console.log(d.getFullYear());
    console.log(d.getDay());
    d.setFullYear(2018);
    console.log(d);
    d.setHours(12);
    console.log(d);
}
/**
 * JS数学
 */
mathFunction: {
    console.log( Math.PI );
    console.log(Math.round(6.3));//x 四舍五入为最接近的整数
    console.log( Math.pow(8,2));// x 的 y 次幂
    console.log( Math.sqrt(64));// x 的平方根
    console.log( Math.abs(-6) );//x 的绝对值
    console.log( Math.ceil(8.3) );// x 上舍入最接近的整数
    console.log( Math.floor(8.3) );// x 下舍入最接近的整数
    console.log( Math.random() );// 随机数
}
/**
 * JS逻辑
 */
bolFunction: {
    console.log(Boolean(10 > 9));
    var a=null;
    var b=undefined;
    console.log(Boolean(a));
    console.log(Boolean(b));
    var x=20;
    var bool;
    bool = (x < 18) ? "偏小":"偏大";//条件（三元）运算符
    console.log(bool);
}
/**
 * JS条件:if else
 */
ifFunction: {
    var greeting;
    var time = new Date().getHours();
    if (time < 12) {
        greeting = "Good morning";
    } 
    else if (time < 24) {
        greeting = "Good day";
    } 
    else {
        greeting = "Good evening";
    }
    console.log(greeting);
}
/**
 * JS条件:switch
 */
switchFunction: {
    var text;
    switch (new Date().getDay()){
        case 1: text="Mon";break;
        case 3: text="Wed";break;
        case 6: text="Sat";break;
        default:text="1";
    }
    console.log(text);
}