(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/center/center"],{"25a4":function(e,t,n){"use strict";n.r(t);var a=n("74db"),r=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,(function(){return a[e]}))}(u);t["default"]=r.a},"2c9b":function(e,t,n){},"3d6e":function(e,t,n){"use strict";n.r(t);var a=n("aca5"),r=n("25a4");for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);n("bf82");var o,c=n("f0c5"),i=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);t["default"]=i.exports},"4f82":function(e,t,n){"use strict";(function(e){n("4416");a(n("66fd"));var t=a(n("3d6e"));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},"74db":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n("a34a")),r=u(n("a0ca"));function u(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n,a,r,u,o){try{var c=e[u](o),i=c.value}catch(s){return void n(s)}c.done?t(i):Promise.resolve(i).then(a,r)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var u=e.apply(t,n);function c(e){o(u,a,r,c,i,"next",e)}function i(e){o(u,a,r,c,i,"throw",e)}c(void 0)}))}}var i={data:function(){return{isH5Plus:!0,user:{},tableName:"",role:"",menuList:[]}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=this;return c(a.default.mark((function n(){var u,o,c;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.role=e.getStorageSync("role"),u=e.getStorageSync("nowTable"),n.next=4,t.$api.session(u);case 4:o=n.sent,t.user=o.data,t.tableName=u,c=r.default.list(),t.menuList=c;case 9:case"end":return n.stop()}}),n)})))()},onShow:function(){var t=this;return c(a.default.mark((function n(){var u,o,c;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.role=e.getStorageSync("role"),u=e.getStorageSync("nowTable"),n.next=4,t.$api.session(u);case 4:o=n.sent,t.user=o.data,t.tableName=u,c=r.default.list(),t.menuList=c;case 9:case"end":return n.stop()}}),n)})))()},methods:{chooseLocation:function(){e.chooseLocation({success:function(e){}})},onPageTap:function(t){e.navigateTo({url:t,fail:function(){e.switchTab({url:t})}})}}};t.default=i}).call(this,n("543d")["default"])},aca5:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return a}));var r=function(){var e=this,t=e.$createElement;e._self._c},u=[]},bf82:function(e,t,n){"use strict";var a=n("2c9b"),r=n.n(a);r.a}},[["4f82","common/runtime","common/vendor"]]]);