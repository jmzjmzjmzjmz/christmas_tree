/**
 * Created by Administrator on 2017/1/12.
 */
(function(global,factory){
    console.log(typeof exports);
    console.log(typeof modules);
    console.log(typeof define);
    global.Vue=factory();
}(this,function(){
    var ob=new Object();
    console.log(ob.__ob__);
}));