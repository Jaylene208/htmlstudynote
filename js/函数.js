//arguments.length: 返回函数被调用时收到的参数数目
arguments.length;
//toString(): 以字符串返回函数
myFunction.toString();
//call():调用所有者对象作为参数
//apply() : 接受数组形式的参数
person.fullName.apply(person1);
person.fullName.call(person2); 
//对象构造器
function Person(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = a;
    this.d = d;
};
arr=new Person(a,b,c,d);
//Object.defineProperty()
Object.defineProperty(person, "language", function(){});