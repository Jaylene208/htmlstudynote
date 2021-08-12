//for循环和for/in循环
var arr=[1,3,5,6,"ab","bd"];
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
};
var x;
for(x in arr){
    console.log(arr[x]);
};
//map forEach
var arr=[1,3,5,6,"ab","bd"];
arr.map((o,i)=>{
    console.log(o);
});
arr.forEach(value => {
    console.log(value);
});
//比较for和while
while(cars[i]){
    console.log(cars[i]);
    i++;
};
for(;cars[i];){
    console.log(car[i]);
    i++;
};