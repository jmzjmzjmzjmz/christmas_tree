/**
 * Created by Administrator on 2017/2/14.
 */
(function(){
    // function f(){
    //     "use strict";
    //     this.a=1
    //     console.log(this);
    // };
    // new f();           //禁止关键字this指向全局对象，因此构造函数要new。
                         //如果不new，则在非严格模式下，this指向全局对象window


     // function f1(){
     //     f1.caller;
     //     f1.arguments;
     //     console.log(f1.caller);
     //     console.log(f1.arguments);
     // }
     // f1();           //禁止在函数内部遍历调用栈


    // var o={
    //     get v(){return 1;}
    // };
    // o.v=2;
    // console.log(o.v);    //对一个使用getter方法读取的属性进行赋值，会报错
                         //一般模式下赋值不成功，严格模式下显示报错


    let a=[];
    for(let i=0;i<10;i++){
        a[i]=function(){
            console.log(i)
        };
    }
    a[6]();
})();