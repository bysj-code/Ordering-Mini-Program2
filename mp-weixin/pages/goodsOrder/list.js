(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goodsOrder/list"],{"094f":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return r}));var r={mescrollUni:function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"1fcb"))},uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"6249"))}},o=function(){var e=this,t=e.$createElement;e._self._c},s=[]},"21d5":function(e,t,n){"use strict";var r=n("8ad0"),o=n.n(r);o.a},"252a":function(e,t,n){"use strict";n.r(t);var r=n("094f"),o=n("6b38");for(var s in o)"default"!==s&&function(e){n.d(t,e,(function(){return o[e]}))}(s);n("21d5");var a,u=n("f0c5"),i=Object(u["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);t["default"]=i.exports},"6b38":function(e,t,n){"use strict";n.r(t);var r=n("ad23"),o=n.n(r);for(var s in r)"default"!==s&&function(e){n.d(t,e,(function(){return r[e]}))}(s);t["default"]=o.a},"8ad0":function(e,t,n){},ad23:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("a34a"));function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n,r,o,s,a){try{var u=e[s](a),i=u.value}catch(c){return void n(c)}u.done?t(i):Promise.resolve(i).then(r,o)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function u(e){s(a,r,o,u,i,"next",e)}function i(e){s(a,r,o,u,i,"throw",e)}u(void 0)}))}}var u={data:function(){return{navlist:[],currentIndex:0,pages:1,list:[],mescroll:null,downOption:{auto:!1},upOption:{page:{},noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,goodsLiuyanText:"",user:"",goodsId:null,goodsCommentbackText:null}},onShow:function(){var t=this;return a(r.default.mark((function n(){var o,s,a,u;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=e.getStorageSync("nowTable"),n.next=3,t.$api.session(o);case 3:return s=n.sent,t.user=s.data,t.hasNext=!0,a={page:1,limit:100,dicCode:"goods_order_types"},n.next=9,t.$api.page("dictionary",a);case 9:u=n.sent,t.navlist=u.data.list,t.mescroll&&t.mescroll.resetUpScroll();case 12:case"end":return n.stop()}}),n)})))()},methods:{navselect:function(e){this.currentIndex=e,this.goodsOrderTypes=e,this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll()},mescrollInit:function(e){this.mescroll=e},downCallback:function(e){this.hasNext=!0,e.resetUpScroll()},upCallback:function(e){var t=this;return a(r.default.mark((function n(){var o,s;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o={page:e.num,limit:e.size},t.goodsOrderTypes&&(o["goodsOrderTypes"]=t.goodsOrderTypes),n.next=4,t.$api.page("goodsOrder",o);case 4:s=n.sent,1==e.num&&(t.list=[]),t.list=t.list.concat(s.data.list),0==s.data.list.length&&(t.hasNext=!1),e.endSuccess(e.size,t.hasNext);case 9:case"end":return n.stop()}}),n)})))()},refund:function(t){var n=this;return a(r.default.mark((function o(){var s;return r.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:s=n,e.showModal({title:"提示",content:"是否确认退款",success:function(){var e=a(r.default.mark((function e(n){var o;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n.confirm){e.next=7;break}return o=[{key:"id",val:t.id}],e.next=4,s.$api.requestCondition("goodsOrder","refund",o);case 4:e.sent,s.$utils.msg("退款成功"),s.mescroll&&s.mescroll.resetUpScroll();case 7:case"end":return e.stop()}}),e)})));function n(t){return e.apply(this,arguments)}return n}()});case 2:case"end":return o.stop()}}),o)})))()},deliver:function(t){var n=this;return a(r.default.mark((function o(){var s;return r.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:s=n,e.showModal({title:"提示",content:"是否确认发货",success:function(){var e=a(r.default.mark((function e(n){var o;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n.confirm){e.next=7;break}return o=[{key:"id",val:t.id}],e.next=4,s.$api.requestCondition("goodsOrder","deliver",o);case 4:e.sent,s.$utils.msg("成功发货"),s.mescroll&&s.mescroll.resetUpScroll();case 7:case"end":return e.stop()}}),e)})));function n(t){return e.apply(this,arguments)}return n}()});case 2:case"end":return o.stop()}}),o)})))()},receiving:function(t){var n=this;return a(r.default.mark((function o(){var s;return r.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:s=n,e.showModal({title:"提示",content:"是否确认已取餐吗？",success:function(){var e=a(r.default.mark((function e(n){var o;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n.confirm){e.next=7;break}return o=[{key:"id",val:t}],e.next=4,s.$api.requestCondition("goodsOrder","receiving",o);case 4:e.sent,s.$utils.msg("操作成功"),s.mescroll&&s.mescroll.resetUpScroll();case 7:case"end":return e.stop()}}),e)})));function n(t){return e.apply(this,arguments)}return n}()});case 2:case"end":return o.stop()}}),o)})))()},commentback:function(e){this.goodsId=null,this.goodsId=e,this.$refs.popup.open()},onFinishTap:function(){var e=this;return a(r.default.mark((function t(){var n,o;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e,n.goodsCommentbackText){t.next=4;break}return n.$utils.msg("请填写评价内容"),t.abrupt("return");case 4:return o=[{key:"id",val:n.goodsId},{key:"commentbackText",val:n.goodsCommentbackText}],t.next=7,n.$api.requestCondition("goodsOrder","commentback",o);case 7:n.$utils.msg("评论成功"),n.$refs.popup.close(),n.mescroll&&n.mescroll.resetUpScroll();case 10:case"end":return t.stop()}}),t)})))()},onCloseWinTap:function(){this.$refs.popup.close()}}};t.default=u}).call(this,n("543d")["default"])},b8ed:function(e,t,n){"use strict";(function(e){n("4416");r(n("66fd"));var t=r(n("252a"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])}},[["b8ed","common/runtime","common/vendor"]]]);