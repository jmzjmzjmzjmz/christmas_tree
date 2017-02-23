"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Created by Administrator on 2017/1/12.
 */
(function (global, factory) {
    console.log(typeof exports === "undefined" ? "undefined" : _typeof(exports));
    console.log(typeof modules === "undefined" ? "undefined" : _typeof(modules));
    console.log(typeof define === "undefined" ? "undefined" : _typeof(define));
    global.Vue = factory();
})(undefined, function () {
    var ob = new Object();
    console.log(ob.__ob__);
});