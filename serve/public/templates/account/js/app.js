(function(e){function t(t){for(var r,o,u=t[0],i=t[1],s=t[2],l=0,f=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==c[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},c={app:0},a=[];function u(e){return i.p+"templates/account/js/"+({}[e]||e)+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-01e5cbf3":1,"chunk-0368fd04":1,"chunk-0dcf886e":1,"chunk-17b9d134":1,"chunk-2a87812c":1,"chunk-7956db03":1,"chunk-94ec928c":1,"chunk-bfba5fba":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="templates/account/css/"+({}[e]||e)+".css",c=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var s=a[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],d.parentNode.removeChild(d),n(a)},d.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}c[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;a.push([0,"template-elementUI","template-libs"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1ebe":function(e,t,n){"use strict";var r=n("5eb8"),o=n.n(r);o.a},"41cb":function(e,t,n){"use strict";var r=n("2b0e"),o=n("8c4f"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"web-container"},[n("div",{staticClass:"web-header"},[n("div",[n("div",{staticClass:"web-header-logo"},[e.logo&&"null"!==e.logo?n("img",{attrs:{src:e.logo}}):e._e(),n("span",[e._v("商城后台中心")])])]),n("div",{staticClass:"logout-btn",on:{click:e.logout}},[e._m(0)])]),n("div",{staticClass:"web-content"},[n("back-menu"),n("router-view")],1)])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e._v("退出"),n("i",{staticClass:"iconfont icontuichu1"})])}],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"back-menu"},[n("ul",[n("li",{class:{"is-active":1===e.activeIndex},on:{click:function(t){return e.toPage(1)}}},[e._v("商城列表")]),n("li",{class:{"is-active":2===e.activeIndex},on:{click:function(t){return e.toPage(2)}}},[e._v("消费记录")]),n("li",{class:{"is-active":3===e.activeIndex},on:{click:function(t){return e.toPage(3)}}},[e._v("我的钱包")]),n("li",{class:{"is-active":4===e.activeIndex},on:{click:function(t){return e.toPage(4)}}},[e._v("用户设置")])])])},i=[],s=(n("b0c0"),{data:function(){return{activeIndex:1}},created:function(){"Shops"===this.$route.name&&(this.activeIndex=1),"Purchase"===this.$route.name&&(this.activeIndex=2),"Wallet"===this.$route.name&&(this.activeIndex=3),"User"===this.$route.name&&(this.activeIndex=4)},methods:{toPage:function(e){this.activeIndex=e,1===e&&this.$router.push({name:"Shops"}),2===e&&this.$router.push({name:"Purchase"}),3===e&&this.$router.push({name:"Wallet"}),4===e&&this.$router.push({name:"User"})}}}),l=s,f=(n("c792"),n("2877")),d=Object(f["a"])(l,u,i,!1,null,"6737de00",null),h=d.exports,p=n("5f87"),m={components:{BackMenu:h},data:function(){return{logo:Object(p["a"])()}},methods:{logout:function(){var e=this;this.$store.dispatch("logout").then((function(){e.$message.success({message:"已安全退出",duration:2e3}),setTimeout((function(){e.$router.push({name:"Login"})}),2e3)}))}}},b=m,v=(n("1ebe"),Object(f["a"])(b,c,a,!1,null,"3986af96",null)),g=v.exports;r["default"].use(o["a"]);var y=[{path:"/",redirect:"/login"},{path:"/login",name:"Login",component:function(e){return n.e("chunk-0368fd04").then(function(){var t=[n("aeab")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/register",name:"Register",component:function(e){return n.e("chunk-17b9d134").then(function(){var t=[n("4eb4")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/forget",name:"Forget",component:function(e){return n.e("chunk-0dcf886e").then(function(){var t=[n("7d57")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/shops",component:g,children:[{path:"",name:"Shops",component:function(e){return n.e("chunk-01e5cbf3").then(function(){var t=[n("0c67")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"create",name:"ShopCreate",component:function(e){return n.e("chunk-2a87812c").then(function(){var t=[n("6f96")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]},{path:"/purchase",component:g,children:[{path:"",name:"Purchase",component:function(e){return n.e("chunk-7956db03").then(function(){var t=[n("b375")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]},{path:"/wallet",component:g,children:[{path:"",name:"Wallet",component:function(e){return n.e("chunk-bfba5fba").then(function(){var t=[n("114f")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]},{path:"/user",component:g,children:[{path:"",name:"User",component:function(e){return n.e("chunk-94ec928c").then(function(){var t=[n("a144")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]}];t["a"]=new o["a"]({mode:"history",routes:y})},4360:function(e,t,n){"use strict";var r=n("2b0e"),o=n("2f62"),c={token:function(e){return e.user.token},email:function(e){return e.user.email},mobile:function(e){return e.user.mobile},created_at:function(e){return e.user.created_at},webTitle:function(e){return e.web.title},logo:function(e){return e.sys.logo}},a=c,u=(n("d3b7"),n("5f87")),i=n("7ded"),s={state:{token:Object(u["b"])(),mobile:"",created_at:""},mutations:{SET_TOKEN:function(e,t){e.token=t},SET_MOBILE:function(e,t){e.mobile=t},SET_CREATE:function(e,t){e.created_at=t}},actions:{login:function(e,t){var n=e.commit;return new Promise((function(e,r){Object(i["e"])(t).then((function(t){n("SET_TOKEN",t.data.body.access_token),Object(u["e"])(t.data.body.access_token),e(t)})).catch((function(e){r(e)}))}))},getUserInfo:function(e){var t=e.commit;return new Promise((function(e,n){Object(i["c"])().then((function(n){t("SET_MOBILE",n.data.body.mobile),t("SET_CREATE",n.data.body.created_at),e(n)})).catch((function(e){n(e)}))}))},logout:function(e){var t=e.commit;Object(u["c"])(),t("SET_TOKEN","")}}},l=s,f={state:{title:""},mutations:{SET_TITLE:function(e,t){e.title=t}},actions:{setTitle:function(e,t){var n=e.commit;n("SET_TITLE",t)}}},d=f,h=n("b775");function p(){return Object(h["a"])({url:"/account/config",method:"get"})}var m={state:{logo:Object(u["a"])()},mutations:{SET_LOGO:function(e,t){e.logo=t}},actions:{getLogo:function(e){var t=e.commit;p().then((function(e){t("SET_LOGO",e.data.logo),Object(u["d"])(e.data.logo)}))}}},b=m;r["default"].use(o["a"]);var v=new o["a"].Store({modules:{user:l,web:d,sys:b},getters:a});t["a"]=v},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],a={name:"App"},u=a,i=(n("5c0b"),n("2877")),s=Object(i["a"])(u,o,c,!1,null,null,null),l=s.exports,f=n("41cb"),d=n("4360"),h=n("5c96"),p=n.n(h),m=(n("9d60"),n("c975"),n("96cf"),n("1da1")),b=n("5f87"),v=["/login","/register","/forget"];f["a"].beforeEach(function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t,n,r){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o=document.title,d["a"].dispatch("setTitle",o),Object(b["a"])()||d["a"].dispatch("getLogo"),!Object(b["b"])()){e.next=15;break}return e.prev=4,"/login"===t.path?r("/shops"):r(),e.next=8,d["a"].dispatch("getUserInfo");case 8:e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](4),401===e.t0.response.status&&(h["Message"].error({message:"登录超时，请重新登录",duration:1e3}),setTimeout((function(){d["a"].dispatch("logout"),r("/login?redirect=".concat(t.path))}),1e3));case 13:e.next=16;break;case 15:-1===v.indexOf(t.path)?r("/login?redirect=".concat(t.path)):r();case 16:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t,n,r){return e.apply(this,arguments)}}()),r["default"].use(p.a),new r["default"]({router:f["a"],store:d["a"],render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"5eb8":function(e,t,n){},"5f87":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return l}));var r=n("a78e"),o=n.n(r),c="backcenterToken";function a(){return o.a.get(c)}function u(e){return o.a.set(c,e)}function i(){return o.a.remove(c)}function s(){return o.a.get("accLogo")}function l(e){return o.a.set("accLogo",e)}},"7ded":function(e,t,n){"use strict";n.d(t,"e",(function(){return o})),n.d(t,"g",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return u})),n.d(t,"f",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return l}));var r=n("b775");function o(e){return Object(r["a"])({url:"/user/login",method:"post",data:e})}function c(e){return Object(r["a"])({url:"/user/register",method:"post",data:e})}function a(){return Object(r["a"])({url:"/user/info",method:"get"})}function u(e){return Object(r["a"])({url:"/user/edit",method:"put",data:e})}function i(){return Object(r["a"])({url:"/user/refresh",method:"get"})}function s(e){return Object(r["a"])({url:"/sms/verification",method:"post",data:e})}function l(e){return Object(r["a"])({url:"/user/forget",method:"post",data:e})}},"9c0c":function(e,t,n){},"9d60":function(e,t,n){},b775:function(e,t,n){"use strict";n("d3b7");var r=n("d4ec"),o=n("bee2"),c=n("bc3a"),a=n.n(c),u=n("4360"),i=n("41cb"),s=n("5c96"),l=n("5f87"),f=a.a.create({baseURL:location.origin+"/api"}),d=function(){function e(){Object(r["a"])(this,e)}return Object(o["a"])(e,[{key:"success",value:function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this[e]("success",t,n)}},{key:"warning",value:function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this[e]("warning",t,n)}},{key:"info",value:function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this[e]("info",t,n)}},{key:"error",value:function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this[e]("error",t,n)}},{key:e,value:function(e,t,n){n?0===document.getElementsByClassName("el-message").length&&s["Message"][e](t):s["Message"][e](t)}}]),e}(),h=new d;f.interceptors.request.use((function(e){return u["a"].getters.token&&(e.headers["Authorization"]="Bearer "+Object(l["b"])()),e}),(function(e){return Promise.reject(e)})),f.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status?(h.error("登录超时，请重新登录"),u["a"].dispatch("logout"),i["a"].push({name:"Login"})):h.error(e.response.data.message),Promise.reject(e)})),t["a"]=f},b78f:function(e,t,n){},c792:function(e,t,n){"use strict";var r=n("b78f"),o=n.n(r);o.a}});