window.open();//打开新窗口
screen.height;//屏幕高度
window.location.href;//返回当前页面的URL
window.location.pathname;//返回当前页面的路径名
navigator.platform;//返回浏览器平台（操作系统）
navigator.cookieEnabled;
navigator.appName;//返回浏览器的应用程序名称
//确认框
var txt;
if (confirm("Press YES")) {
    txt = "YES";
} else {
    txt = "no";
}
console.log(txt);
//提示框
var person = prompt("请输入您的名字：");
if (person == null || person == "") {
    txt = "取消输入";
} else {
    txt = "你好，" + person;
}
//时间事件
setTimeout(myFunction, 3000);//延迟三秒
setInterval(myTimer, 1000);//间隔一秒