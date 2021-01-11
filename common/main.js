(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["common/main"], {
    "64f8": function (e, t, a) {
      "use strict";
      (function (e) {
        a("9f31");
        var t = i(a("66fd")),
          n = i(a("99ec"));

        function i(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }

        function o(e, t) {
          var a = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), a.push.apply(a, n)
          }
          return a
        }

        function p(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {};
            t % 2 ? o(Object(a), !0).forEach((function (t) {
              r(e, t, a[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : o(Object(a)).forEach((function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
            }))
          }
          return e
        }

        function r(e, t, a) {
          return t in e ? Object.defineProperty(e, t, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = a, e
        }
        t.default.config.productionTip = !1, t.default.mixin({
          methods: {
            setData: function (e, t) {
              var a = this,
                n = function (e, t, a) {
                  return t = t.split("."), t.forEach((function (t) {
                    if (null === e[t] || void 0 === e[t]) {
                      var n = /^[0-9]+$/;
                      e[t] = n.test(a) ? [] : {}, e = e[t]
                    } else e = e[t]
                  })), e
                },
                i = function (e) {
                  return "function" == typeof e || !1
                };
              Object.keys(e).forEach((function (t) {
                var i, o, p = e[t];
                t = t.replace(/\]/g, "").replace(/\[/g, ".");
                var r = t.lastIndexOf("."); - 1 != r ? (o = t.slice(r + 1), i = n(a, t.slice(0, r), o)) : (o = t, i = a), i.$data && void 0 === i.$data[o] ? (Object.defineProperty(i, o, {
                  get: function () {
                    return i.$data[o]
                  },
                  set: function (e) {
                    i.$data[o] = e, a.$forceUpdate()
                  },
                  enumerable: !0,
                  configurable: !0
                }), i[o] = p) : a.$set(i, o, p)
              })), i(t) && this.$nextTick(t)
            }
          }
        }), n.default.mpType = "app";
        var c = new t.default(p({}, n.default));
        e(c).$mount()
      }).call(this, a("543d")["createApp"])
    },
    "99ec": function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a("b21d");
      for (var i in n) "default" !== i && function (e) {
        a.d(t, e, (function () {
          return n[e]
        }))
      }(i);
      var o, p, r, c, u = a("f0c5"),
        l = Object(u["a"])(n["default"], o, p, !1, null, null, null, !1, r, c);
      t["default"] = l.exports
    },
    b21d: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a("ba77"),
        i = a.n(n);
      for (var o in n) "default" !== o && function (e) {
        a.d(t, e, (function () {
          return n[e]
        }))
      }(o);
      t["default"] = i.a
    },
    ba77: function (e, t, a) {
      "use strict";
      (function (e) {
        function a(e, t, a) {
          return t in e ? Object.defineProperty(e, t, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = a, e
        }
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = {
          onLaunch: function () {
            console.log("App Launch");
            var t = e.getStorageSync("userInfo");
            t && (this.globalData.userInfo = t)
          },
          onShow: function () {
            console.log("App Show")
          },
          onHide: function () {
            console.log("App Hide")
          },
          globalData: {
            api: {
              home: "https://f0835796-2f6a-4060-8330-c51cf10fcbea.bspapp.com/http/api/home",
              openid: "https://f0835796-2f6a-4060-8330-c51cf10fcbea.bspapp.com/http/api/openid"
            },
            subscribe: "https://f0835796-2f6a-4060-8330-c51cf10fcbea.bspapp.com/http/api/subscribe",
            openid: "",
            userInfo: ""
          },
          methods: {
            shareConfig: function () {
              var e = [a({
                title: "美团饿了么大额红包，每日可领！",
                path: "/pages/index/index",
                imageUrl: "https://upload-images.jianshu.io/upload_images/302100-d28345a30e3c51c7.png"
              }, "imageUrl", "https://upload-images.jianshu.io/upload_images/302100-d28345a30e3c51c7.png"), {
                title: "吃了这么多年外卖，你知道这个秘密吗？",
                path: "/pages/index/index",
                imageUrl: "https://upload-images.jianshu.io/upload_images/302100-d28345a30e3c51c7.png"
              }, {
                title: "这样点外卖，一年省下一个亿",
                path: "/pages/index/index",
                imageUrl: "https://upload-images.jianshu.io/upload_images/302100-d28345a30e3c51c7.png"
              }, {
                title: "点外卖前先领券，吃霸王餐",
                path: "/pages/index/index",
                imageUrl: "https://upload-images.jianshu.io/upload_images/302100-d28345a30e3c51c7.png"
              }, {
                title: "美团饿了么内部优惠券，手慢无",
                path: "/pages/index/index",
                imageUrl: "https://upload-images.jianshu.io/upload_images/302100-d28345a30e3c51c7.png"
              }, {
                title: "点外卖不用优惠券，你就out了",
                path: "/pages/index/index",
                imageUrl: "https://upload-images.jianshu.io/upload_images/302100-d28345a30e3c51c7.png"
              }, {
                title: "外卖不为人知的秘密，点这解密",
                path: "/pages/index/index",
                imageUrl: "https://upload-images.jianshu.io/upload_images/302100-d28345a30e3c51c7.png"
              }, {
                title: "震惊！小伙点外卖竟然花了1分钱",
                path: "/pages/index/index",
                imageUrl: "https://upload-images.jianshu.io/upload_images/302100-d28345a30e3c51c7.png"
              }, {
                title: "从这点外卖，你也可以吃霸王餐",
                path: "/pages/index/index",
                imageUrl: "https://upload-images.jianshu.io/upload_images/302100-d28345a30e3c51c7.png"
              }];
              return e[Math.floor(Math.random() * e.length)]
            }
           
          }
        };
        t.default = n
      }).call(this, a("543d")["default"])
    }
  },
  [
    ["64f8", "common/runtime", "common/vendor"]
  ]
]);