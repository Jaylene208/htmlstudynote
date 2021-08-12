arr=[1,2,3];
cars = ["Porsche", "LEXUS", "BMW"];
persons = {
    "firstName":"Jay",
    "lastName":"Jaylene",
    "age":"25"};
 //foreach遍历
arr.forEach(value => {     
    console.log(arr);
});
//pop() 删除最后一个元素
arr.pop();
//push() 添加新元素
arr.push("");
//toString():以逗号分隔的字符串返回数组
arr.toString();
// join() : 以指定方式连接成字符串
arr.join(" * ");
//shift() 删除首个数组元素
arr.shift();
//unshift() :（在开头）向数组添加新元素
arr.unshift("3");
//length属性添加元素
cars[cars.length] = "Benz";
//delete删除元素 
delete cars[0];
// splice拼接元素(应添加新元素的位置,应往后删除多少元素，要添加的元素)
cars.splice(0,1,"volvo");
//concat()合并两个数组
arr=arr1.concat(arr2);
//slice() 裁剪切出新数组
newArr=arr.slice(1);
//sort() 方法以字母顺序对数组进行排序
arr.sort();
//reverse() 方法反转数组中的元素
arr.reverse();
//数字排序：
//升序 function(a, b){return a - b}
//降序 function(a, b){return b - a}
arr.sort(function(a, b){return b - a});
//map()创建新数组
function myFunction(value) {
    return value*2;
};
arr2=arr1.map(myFunction);
//map循环
arr.map((o,i)=>{
    console.log(o);
});
//filter() 创建一个包含通过测试的数组元素的新数组
function myFunction(value) {
    return value>40;
};
arr2=arr1.filter(myFunction);
//reduce() 生成（减少它）单个值：从左到右
function myFunction(total,value) {
    return value+total;
};
sum=arr.reduce(myFunction)
// every() 测试所有元素是否通过
// some() 检查某些数组值是否通过了测试
function myFunction(value) {
    return value>9;
};
test=arr.every(myFunction);
//indexOf 检索元素位置
//lastIndexOf从数组结尾开始
arr.indexOf(x);
//find() :返回通过测试函数的第一个数组元素的值
//findIndex() :返回通过测试函数的第一个元素的下标
arr.find(myFunction);
//

