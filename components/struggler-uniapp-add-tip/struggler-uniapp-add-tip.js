(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/struggler-uniapp-add-tip/struggler-uniapp-add-tip"],{3434:function(t,n,e){"use strict";e.r(n);var u=e("c15c"),r=e.n(u);for(var c in u)"default"!==c&&function(t){e.d(n,t,(function(){return u[t]}))}(c);n["default"]=r.a},"4a76":function(t,n,e){"use strict";var u=e("b7b2"),r=e.n(u);r.a},b7b2:function(t,n,e){},c15c:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e="SHOW_TIP",u={data:function(){return{showTip:!1}},mounted:function(){this.showTip=!t.getStorageInfoSync().keys.includes(e)},props:{tip:{type:String,default:"点击「添加小程序」，下次访问更便捷",required:!0},duration:{type:Number,default:5,required:!1}},methods:{hideTip:function(){t.setStorageSync(e,!0),this.showTip=!1}}};n.default=u}).call(this,e("543d")["default"])},c674:function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return u}));var r=function(){var t=this,n=t.$createElement;t._self._c},c=[]},e697:function(t,n,e){"use strict";e.r(n);var u=e("c674"),r=e("3434");for(var c in r)"default"!==c&&function(t){e.d(n,t,(function(){return r[t]}))}(c);e("4a76");var i,a=e("f0c5"),o=Object(a["a"])(r["default"],u["b"],u["c"],!1,null,"0ed7bccc",null,!1,u["a"],i);n["default"]=o.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/struggler-uniapp-add-tip/struggler-uniapp-add-tip-create-component',
    {
        'components/struggler-uniapp-add-tip/struggler-uniapp-add-tip-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("e697"))
        })
    },
    [['components/struggler-uniapp-add-tip/struggler-uniapp-add-tip-create-component']]
]);
