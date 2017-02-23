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

// var start=new Date();
// (function(){
//     setTimeout(function(){
//         console.log(new Date()-start)
//     },500);
//     setTimeout(function(){
//         console.log(new Date()-start)
//     },500);
//     while((new Date()-start)<2000){}
// })();

// (function(){
//     var a=null;
//     alert(a);
// })()

// (function(){
//     alertID=function(){
//         alert("div")
//     };
//     document.getElementById("div1").addEventListener("click",alertID,true)
// })()

// console.log([]==[]);
// console.log(0==null);
//   var arr1=[];
//   var arr2=[];
// console.log(arr1==arr2);
// console.log(null==NaN);



// var list1=[1,2];
// var list2=list1;
// list2[1]+=1;
// console.log(list1.join(""));
//
//
// var parent={type:"fruit"};
// var child=function(){
//     this.name="apple";
// };
// child.prototype=parent;
// var apple1=new child();
// console.log(apple1.type);

// function f(){
//     this.x=2;
//     this.test=function(){
//         return this.x;
//     }
// }
// var n={};
// f.apply(n);
// console.log(n.test())

// var a;
// console.log(a!==a);    //false  只有var a=NaN时，才是true
// console.log(0===-0);   //true
// console.log([]==![]);  //true
// console.log(0==null);  //false
// console.log([]==false);//true
// console.log([1,2]==false);//false


// function test(){
//     var i=0;
//     function test1(){
//         i++;
//        console.log(i);
//     }
//     return test1();
// }
// // test();
// // test();
//
// setTimeout(test,1000);


   //  for(var i=0;i<5;i++){
   //      (function(i){
   //          setTimeout(function(){
   //              console.log(i);
   //          },1000);
   //      })(i)
   // }

// function test(str){
//     var str=str;
//     var str1=str.split("").reverse().join("");
//     return str==str1;
// }
//
// console.log(test("aba"));

// function test(str){
//     var max=0;
//     var maxth='';
//     var arr=[];
//     for(var i=0;i<str.length;i++){
//         arr[i]=1;
//         for(var j=i+1;j<str.length;j++){
//             if(str.split("")[i]==str.split("")[j]){
//                 arr[i]++;
//             }
//         }
//         if(arr[i]>max){
//             max=arr[i];
//             maxth=str.split("")[i];
//         }
//     }
//     return max+maxth;
// }
//
// console.log(test("asdfgadsadsaaa"));

// var str1='{"name":"jmz","sex":"male","age":"24"}';
// var json1={'name':"jmz","sex":"male","age":"24"};
// console.log(JSON.parse(str1));
// console.log(JSON.stringify(json1));

// for(let i=0;i<3;i++){
//     setTimeout(function(){
//         console.log(i);
//     },1000)
// }


// (function(){
//     var docs=[
//         {id:1,words:['hello','world']},
//         {id:2,words:['hello','kids']},
//         {id:3,words:['zzzz','hello']},
//         {id:4,words:['world','kids']},
//     ];
//     function findDocList(docs,words){
//         let allDocs=[];
//         for(let i=0;i<docs.length;i++){
//             var hasWord=true;
//             for(let j=0;j<words.length;j++){
//                 if(docs[i].words.indexOf(words[j])==-1){
//                     hasWord=false;
//                 }
//             };
//             if(hasWord==true){
//                 let oneDoc='文档'+docs[i].id;
//                 allDocs.push(oneDoc);
//             }
//         }
//         return allDocs;
//     }
//     console.log(findDocList(docs,['hello','world']));
// })();

!function(global){
    function DetectorBase(configs){
        if(!this instanceof DetectorBase){
            throw new Error("Do not invoke without new.");//要用new调用
        }
        this.configs=configs;
        this.analyze();
    }
    DetectorBase.prototype.detect=function(){
        throw new Error("Not implemented");//?????????
    };
    DetectorBase.prototype.analyze=function(){
        console.log("analyzing..");
        this.data="##data##";
    };
    function LinkDetector(links){
        if(!this instanceof LinkDetector){
            throw new Error("Do not invoke without new.");//要用new调用
        };
        this.links=links;
        DetectorBase.apply(this,arguments)
    };
    inherit(LinkDetector,DetectorBase);
    LinkDetector.prototype.detect=function(){
        console.log("Loading data:"+this.data);
    };
    Object.freeze(DetectorBase);//冻结，不允许改变
    Object.freeze(DetectorBase.prototype);
    Object.freeze(LinkDetector);
    Object.freeze(LinkDetector.prototype);
    Object.defineProperties(global,{
        LinkDetector:{value:LinkDetector},
        DetectorBase:{value:DetectorBase}
    });
    function inherit(subClass,superClass){
        subClass.prototype=Object.create(superClass.prototype);
        subClass.prototype.Constructor=subClass;
    }
}(this);

   var cd=new LinkDetector("abc#def#ghi");
   cd.detect();