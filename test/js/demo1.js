/**
 * Created by Administrator on 2017/1/10.
 */
// var traffic=document.getElementById("trafficLight");
// var stateList=['wait','stop','pass'];
//     (function(){
//     var currentIndex=0;
//         traffic.className=stateList[currentIndex];
//     setInterval(function(){
//         currentIndex=(currentIndex+1)%stateList.length;
//         traffic.className=stateList[currentIndex];
//     },2000);
// })();


// var traffic=document.getElementById("trafficLight");
// function poll(...fnList) {
//    let stateIndex=0;
//     return function(...args){
//         let fn=fnList[stateIndex++%fnList.length];
//         return fn.apply(this,args)
//     }
// }
// function setState(state){
//     traffic.className=state;
//     // console.log(this);
// }
// let trafficStatePoll=poll(setState.bind(window,"wait"),setState.bind(null,"stop")
// ,setState.bind(null,"pass"));
// setInterval(trafficStatePoll,2000)


// function stateSet(){
//     var state="pass";
//     var getState=function(){
//         return state;
//     };
//     return getState();
// }



