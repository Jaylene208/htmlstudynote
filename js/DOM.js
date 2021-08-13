x=document.getElementsByClassName("intro");
console.log(x[0].innerHTML);//通过类名
y=document.getElementsByTagName("p");
console.log(y[0].innerHTML);//通过标签名
m=document.querySelectorAll("p.intro");
console.log(m[0].innerHTML);//通过CSS样式
document.getElementById().addEventListener("click", function() {});//事件监听
//appendChild()追加最后一个子
p=document.createElement("p");//创建新元素
txt=document.createTextNode("txt");//创建文本节点
p.appendChild(txt);//元素追加文本节点
//insertBefore()在前面追加子
element.insertBefore(p,child);


