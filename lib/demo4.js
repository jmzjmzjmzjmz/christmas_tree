"use strict";

/**
 * Created by Administrator on 2017/1/15.
 */
// Array.prototype.numericSortReverse=function(data){
//     this.sort(function(a,b){
//         return data[a]-data[b];
//     })
// };

// var a=[1,5,2,6];
// a.numericSortReverse(this);
// console.log(a);
// a.sort(function(a,b){
//     return a-b;
// });
// console.log(a);

// console.log(a.sort);

var start = new Date();
(function () {
    setTimeout(function () {
        console.log(new Date() - start);
    }, 500);
    setTimeout(function () {
        console.log(new Date() - start);
    }, 500);
    while (new Date() - start < 2000) {}
})();