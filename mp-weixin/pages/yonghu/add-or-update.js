(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/yonghu/add-or-update"],{1704:function(e,n,t){"use strict";t.r(n);var u=t("8ce8"),r=t("d091");for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);t("2dff");var a,o=t("f0c5"),s=Object(o["a"])(r["default"],u["b"],u["c"],!1,null,"40bab322",null,!1,u["a"],a);n["default"]=s.exports},"2dff":function(e,n,t){"use strict";var u=t("d4fa"),r=t.n(u);r.a},6309:function(e,n,t){"use strict";(function(e){t("4416");u(t("66fd"));var n=u(t("1704"));function u(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])},"8ce8":function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return u}));var u={wPicker:function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"db2c"))}},r=function(){var e=this,n=e.$createElement;e._self._c},i=[]},d091:function(e,n,t){"use strict";t.r(n);var u=t("fb6b"),r=t.n(u);for(var i in u)"default"!==i&&function(e){t.d(n,e,(function(){return u[e]}))}(i);n["default"]=r.a},d4fa:function(e,n,t){},fb6b:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,u,r,i,a){try{var o=e[i](a),s=o.value}catch(c){return void t(c)}o.done?n(s):Promise.resolve(s).then(u,r)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(u,r){var a=e.apply(n,t);function o(e){i(a,u,r,o,s,"next",e)}function s(e){i(a,u,r,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("db2c"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{cross:"",ro:{username:!1,password:!1,yonghuName:!1,yonghuPhoto:!1,yonghuPhone:!1,yonghuIdNumber:!1,yonghuEmail:!1,sexTypes:!1,newMoney:!1,yonghuSumJifen:!1,huiyuandengjiTypes:!1,yonghuDelete:!1,createTime:!1},ruleForm:{username:"",password:"",yonghuName:"",yonghuPhoto:"",yonghuPhone:"",yonghuIdNumber:"",yonghuEmail:"",sexTypes:"",sexValue:"",newMoney:"",yonghuSumJifen:"",huiyuandengjiTypes:"",huiyuandengjiValue:"",yonghuDelete:"",createTime:""},user:{},sexTypesOptions:[],sexTypesIndex:0,huiyuandengjiTypesOptions:[],huiyuandengjiTypesIndex:0}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var n=this;return a(u.default.mark((function t(){var r,i,a,o,s;return u.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={page:1,limit:100,dicCode:"sex_types"},t.next=3,n.$api.page("dictionary",r);case 3:return i=t.sent,n.sexTypesOptions=i.data.list,a={page:1,limit:100,dicCode:"huiyuandengji_types"},t.next=8,n.$api.page("dictionary",a);case 8:if(o=t.sent,n.huiyuandengjiTypesOptions=o.data.list,!e.id){t.next=16;break}return n.ruleForm.id=e.id,t.next=14,n.$api.info("yonghu",n.ruleForm.id);case 14:s=t.sent,n.ruleForm=s.data;case 16:e.yonghuId&&(n.ruleForm.yonghuId=e.yonghuId);case 17:case"end":return t.stop()}}),t)})))()},methods:{sexTypesChange:function(e){this.sexTypesIndex=e.target.value,this.ruleForm.sexValue=this.sexTypesOptions[this.sexTypesIndex].indexName,this.ruleForm.sexTypes=this.sexTypesOptions[this.sexTypesIndex].codeIndex},huiyuandengjiTypesChange:function(e){this.huiyuandengjiTypesIndex=e.target.value,this.ruleForm.huiyuandengjiValue=this.huiyuandengjiTypesOptions[this.huiyuandengjiTypesIndex].indexName,this.ruleForm.huiyuandengjiTypes=this.huiyuandengjiTypesOptions[this.huiyuandengjiTypesIndex].codeIndex},yonghuPhotoTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.yonghuPhoto=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){}))}))},createTimeConfirm:function(e){console.log(e),this.ruleForm.createTime=e.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return a(u.default.mark((function t(){return u.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.ruleForm.username){t.next=3;break}return n.$utils.msg("账户不能为空"),t.abrupt("return");case 3:if(n.ruleForm.yonghuName){t.next=6;break}return n.$utils.msg("用户姓名不能为空"),t.abrupt("return");case 6:if(n.ruleForm.yonghuPhoto){t.next=9;break}return n.$utils.msg("头像不能为空"),t.abrupt("return");case 9:if(n.ruleForm.yonghuPhone||n.$validate.isMobile(n.ruleForm.yonghuPhone)){t.next=12;break}return n.$utils.msg("用户手机号不能为空并且需要输入正确格式"),t.abrupt("return");case 12:if(n.ruleForm.yonghuIdNumber||n.$validate.checkIdCard(n.ruleForm.yonghuIdNumber)){t.next=15;break}return n.$utils.msg("用户身份证号不能为空并且需要输入正确格式"),t.abrupt("return");case 15:if(n.ruleForm.yonghuEmail||n.$validate.isEmail(n.ruleForm.yonghuEmail)){t.next=18;break}return n.$utils.msg("邮箱不能为空并且需要输入正确格式"),t.abrupt("return");case 18:if(n.ruleForm.sexTypes){t.next=21;break}return n.$utils.msg("性别不能为空"),t.abrupt("return");case 21:if(n.ruleForm.huiyuandengjiTypes){t.next=24;break}return n.$utils.msg("会员等级不能为空"),t.abrupt("return");case 24:if(!n.ruleForm.id){t.next=29;break}return t.next=27,n.$api.update("yonghu",n.ruleForm);case 27:t.next=31;break;case 29:return t.next=31,n.$api.save("yonghu",n.ruleForm);case 31:e.setStorageSync("pingluenStateState",!0),n.$utils.msgBack("提交成功");case 33:case"end":return t.stop()}}),t)})))()},getDate:function(e){var n=new Date,t=n.getFullYear(),u=n.getMonth()+1,r=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),u=u>9?u:"0"+u,r=r>9?r:"0"+r,"".concat(t,"-").concat(u,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,t("543d")["default"])}},[["6309","common/runtime","common/vendor"]]]);