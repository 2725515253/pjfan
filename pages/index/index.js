(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/index/index"], {
    5034: function (t, o, n) {
      "use strict";
      (function (t) {
        n("9f31");
        e(n("66fd"));
        var o = e(n("5509"));

        function e(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        t(o.default)
      }).call(this, n("543d")["createPage"])
    },
    5509: function (t, o, n) {
      "use strict";
      n.r(o);
      var e = n("ae9e"),
        a = n("d8d0");
      for (var s in a) "default" !== s && function (t) {
        n.d(o, t, (function () {
          return a[t]
        }))
      }(s);
      n("83b3");
      var i, c = n("f0c5"),
        u = Object(c["a"])(a["default"], e["b"], e["c"], !1, null, null, null, !1, e["a"], i);
      o["default"] = u.exports
    },
    "5e87": function (t, o, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(o, "__esModule", {
          value: !0
        }), o.default = void 0;
        var n = {
          data: function () {
            return {
              current: 0,
              tabs: [],
              couponList: [],
              coupons: [],
              tip: "点击「添加到我的小程序」，方便下次访问",
              openid: ""
            }
          },
          onLoad: function (t) {
            this.getHome();
            var o = t.tabId ? parseInt(t.tabId) : 0;
        
            this.changeTab(this.current)
          },
          onShareAppMessage: function (t) {
            return getApp().shareConfig()
          },
          methods: {
            
            getOpenId: function () {
              try {
                var o = t.getStorageSync("openid");
                o ? (console.log("获取缓存openid"), getApp().globalData.openid = o) : (console.log("本地未获取到openid"), t.login({
                  success: function (n) {
                    n.code ? (t.getUserInfo({
                      success: function (t) {
                        console.log("存在code")
                      }
                    }), t.request({
                      url: getApp().globalData.api.openid,
                      data: {
                        jsCode: n.code
                      },
                      success: function (n) {
                        console.log(n.data), getApp().globalData.openid = n.data.data.openid, t.setStorage({
                          key: "openid",
                          data: o
                        })
                      }
                    })) : console.log("获取用户登录态失败！" + n.errMsg)
                  }
                }))
              } catch (n) {
                console.log("获取openid失败")
              }
            },
            changeTab: function (o) {
              if (console.log("当前选中的项：" + o), this.couponList = [], t.showLoading({
                  title: "获取优惠中"
                }), 0 == o) this.couponList = this.coupons;
              else
                for (var n in this.coupons) this.coupons[n].tabId == this.tabs[o].tabId && this.couponList.push(this.coupons[n]);
              setTimeout((function () {
                t.hideLoading()
              }), 500)
            },
            toCoupon: function (t) {
              console.log(this.couponList[t]), this.couponList[t].minapp && wx.navigateToMiniProgram({
                appId: this.couponList[t].minapp.appid,
                path: this.couponList[t].minapp.path,
                success: function (t) {}
              })
            },
            getHome: function () {
              var o = this;
              t.request({
                url: getApp().globalData.api.home,
                success: function (t) {
                  o.tabs = t.data.data.tabs, o.coupons = t.data.data.coupons, o.changeTab(0)
                }
              })
            }
          }
        };
        o.default = n
      }).call(this, n("543d")["default"])
    },
    7274: function (t, o, n) {},
    "83b3": function (t, o, n) {
      "use strict";
      var e = n("7274"),
        a = n.n(e);
      a.a
    },
    ae9e: function (t, o, n) {
      "use strict";
      n.d(o, "b", (function () {
        return a
      })), n.d(o, "c", (function () {
        return s
      })), n.d(o, "a", (function () {
        return e
      }));
      var e = {
          vTabs: function () {
            return n.e("components/v-tabs/v-tabs").then(n.bind(null, "f38d"))
          }
        },
        a = function () {
          var t = this,
            o = t.$createElement;
          t._self._c
        },
        s = []
    },
    d8d0: function (t, o, n) {
      "use strict";
      n.r(o);
      var e = n("5e87"),
        a = n.n(e);
      for (var s in e) "default" !== s && function (t) {
        n.d(o, t, (function () {
          return e[t]
        }))
      }(s);
      o["default"] = a.a
    }
  },
  [
    ["5034", "common/runtime", "common/vendor"]
  ]
]);