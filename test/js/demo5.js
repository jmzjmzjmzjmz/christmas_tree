/**
 * Created by Administrator on 2017/1/20.
 */
window.onload=function(){
    // var a = [];
    // for (let i = 0; i < 5; i++) {
    //     console.log(i);
    //     setTimeout(function(){
    //         console.log(i);
    //     },500)
    // }

    // var tmp=new Date();
    // function f(){
    //     console.log(tmp);
    //     if(true){
    //         // let tmp=new Date(); //打印出时间
    //         var tmp=new Date();   //undefined
    //     }
    // }
    // f();

    // var a=0;
    // function b(){
    //     a=10;
    //     function a(){}
    // }
    // b();
    // alert(a);   //0

    // s="hello";
    // for(var i=0;i<s.length;i++){
    //     console.log(s[i]);  //hello
    // }

    // {let a=0;}
    // console.log(a)    //块级作用域，内不能访问外部，外部不可以访问内部
                         //使得立即执行函数表达式不再需要了IIFE

    // 'use strict';
    // if(true){
    //     function f(){}   //es5规定，函数只能在顶层作用域和函数作用域中声明，不能在块级作用域中声明
    // }
}

function a(){alert('outside')}
(function() {
    if (false) {
        function a(){
            alert('inside')
        }
    }
    a(); //报错  /*
    //  实际执行的代码
    //  (function(){
    //   var a;
    //    if(false){
    //        a=function(){alert('inside')}
    //      }
    //    })
    //    a();
    // */ 
})()

