/**
 * Created by Administrator on 2017/1/13.
 */
// if(true){
//     function sayHey(){
//         console.log("sayHey");
//     };
//     sayHello=function(){
//         console.log("sayHello")
//     }
// }else{
//     function sayHey(){
//         console.log("sayHey1");
//     };
//     sayHello=function(){
//         console.log("sayHello1")
//     }
// };
// sayHey();
// sayHello();


// function test(){
//     var a=1;
//     console.log("test "+a);  //test 1
//     console.log("test "+this);//test [object Window]
//     var test1=function(){
//         console.log("test1 "+a);//test1 undefined
//         console.log("test1 "+this);//test1 [object Window]
//         var a=2;
//         var test2=function(){
//             console.log('test2 '+a);//test2 2
//             console.log('test2 '+this)//test2 [object Window]
//         };
//         return test2();
//     };
//     return test1();
// }
// test();
/*a同名？？？应该是同一个作用域，test1中的a变量声明覆盖了test中的a变量，test1打印时并没有给a赋值，所以为undefined*/


// function test(){
//     var a=1;
//     console.log("test "+a);  //test 1
//     console.log("test "+this);//test [object Window]
//     function test1(){
//         var a=2;
//         console.log("test1 "+a);//test1 2
//         console.log("test1 "+this);//test1 [object Window]
//         var test2=function(){
//             console.log('test2 '+a);//test2 2
//             console.log('test2 '+this)//test2 [object Window]
//         };
//         return test2();
//     };
//     return test1();
// }
// test();

// var name="the window";
// var obj={
//     name:'the obj',
//     test1:function(){
//         // function test2(){
//         //     console.log(this.name);  //the window
//         // };
//         var test2=function(){
//             console.log(this.name);  //the window因为是纯粹的函数调用
//         };
//         return test2;
//     }
// };
// var obj1={
//     name:'the obj1',
//     test1:function(){
//         var that=this;
//         function test2(){
//             console.log(that.name);  //the obj1
//         };
//         return test2;
//     }
// };
// obj.test1()();
// obj1.test1()();

// var scope="global";
// function test(){
//     console.log(scope);
//     var scope="local";
//     console.log(scope)
// }
// test();

// (function test(){
//     for(var i=0;i<5;i++){
//         (function(i){
//             setTimeout(function(){
//                 console.log(i) ;
//             },0)
//         })(i)
//     }
// })()

//with用来临时扩展作用域链，将语句中的对象添加到作用域的头部
// var name="name1";
// var obj={
//     name:'name2',
//     obj2:{name:'name3',age:1}
// };
// with(obj.obj2){
//     console.log(name);
// }
