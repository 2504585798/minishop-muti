(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);h&&h(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"templates/system/js/"+({}[e]||e)+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-02106e42":1,"chunk-20002ba5":1,"chunk-25a2043d":1,"chunk-344d20c9":1,"chunk-66f8ba76":1,"chunk-8eac587e":1,"chunk-ba6fb786":1,"chunk-c5014990":1,"chunk-ca41f2c0":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="templates/system/css/"+({}[e]||e)+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],h.parentNode.removeChild(h),n(c)},h.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(h)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var h=l;c.push([0,"template-elementUI","template-libs"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0bb7":function(e,t,n){},"1ec1":function(e,t,n){"use strict";var r=n("a054"),a=n.n(r);a.a},"41cb":function(e,t,n){"use strict";var r=n("2b0e"),a=n("8c4f"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-content"},[n("div",{staticClass:"page-header"},[n("div",{staticClass:"page-header-logo"},[e.logo&&"null"!==e.logo?n("img",{attrs:{src:e.logo}}):n("div",{staticStyle:{"line-height":"40px"}},[e._v("SaaS 系统后台")])]),n("div",{staticClass:"page-header-right"},[n("span",[e._v(e._s(e.$store.getters.username))]),n("span",{staticStyle:{"margin-left":"20px"},on:{click:e.tologout}},[e._v("退出")])])]),n("div",{staticClass:"page-container"},["Login"!==e.$route.name&&"Forget"!==e.$route.name?n("menu-bar",{staticClass:"page-sidebar"}):e._e(),n("router-view",{staticClass:"page-content",class:{"is-logged":"Login"!==e.$route.name&&"Forget"!==e.$route.name}})],1)])},c=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ul",{staticClass:"menu-bar"},[n("li",{class:{"is-active":1===e.currentIndex},on:{click:function(t){return e.toPage("Dashboard",1)}}},[e._v("首页")]),n("li",{class:{"is-active":2===e.currentIndex},on:{click:function(t){return e.toPage("Withdraw",2)}}},[e._v("提现管理")]),n("li",{class:{"is-active":3===e.currentIndex},on:{click:function(t){return e.toPage("Clear",3)}}},[e._v("结算管理")]),n("li",{class:{"is-active":4===e.currentIndex},on:{click:function(t){return e.toPage("Customer",4)}}},[e._v("顾客管理")]),n("li",{class:{"is-active":5===e.currentIndex},on:{click:function(t){return e.toPage("Message",5)}}},[e._v("短信签名管理")]),n("li",{class:{"is-active":6===e.currentIndex},on:{click:function(t){return e.toPage("Setting",6)}}},[e._v("系统设置")]),n("li",{class:{"is-active":7===e.currentIndex},on:{click:function(t){return e.toPage("HomePage",7)}}},[e._v("落地页设置")])])])},i=[],s=(n("b0c0"),{data:function(){return{currentIndex:null}},methods:{toPage:function(e,t){this.$router.push({name:e}).catch((function(){})),this.currentIndex=t}},watch:{"$route.name":{deep:!0,immediate:!0,handler:function(){"Dashboard"===this.$route.name?this.currentIndex=1:"Withdraw"===this.$route.name?this.currentIndex=2:"Clear"===this.$route.name?this.currentIndex=3:"Customer"===this.$route.name||"CustomerDetail"===this.$route.name?this.currentIndex=4:"Message"===this.$route.name||"CustomerDetail"===this.$route.name?this.currentIndex=5:"Setting"===this.$route.name?this.currentIndex=6:this.currentIndex=7}}}}),l=s,f=(n("1ec1"),n("2877")),h=Object(f["a"])(l,u,i,!1,null,"7a6d1708",null),d=h.exports,p=n("5f87"),m={components:{MenuBar:d},data:function(){return{logo:Object(p["a"])()}},methods:{tologout:function(){var e=this;this.$store.dispatch("logout").then((function(){e.$message.success("已安全登出"),e.$router.push({name:"Login"})}))}}},g=m,v=(n("b795"),Object(f["a"])(g,o,c,!1,null,"53460c8f",null)),b=v.exports;r["default"].use(a["a"]);var y=[{path:"/",component:b,children:[{path:"login",name:"Login",component:function(e){return n.e("chunk-ba6fb786").then(function(){var t=[n("aeab")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"forget",name:"Forget",component:function(e){return n.e("chunk-02106e42").then(function(){var t=[n("7d57")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"dashboard",name:"Dashboard",component:function(e){return n.e("chunk-2d0cfed0").then(function(){var t=[n("6693")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"setting",name:"Setting",component:function(e){return n.e("chunk-25a2043d").then(function(){var t=[n("82d4")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"customer",name:"Customer",component:function(e){return n.e("chunk-66f8ba76").then(function(){var t=[n("ffd3")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"customer/detail",name:"CustomerDetail",component:function(e){return n.e("chunk-8eac587e").then(function(){var t=[n("df8a")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"homepage",name:"HomePage",component:function(e){return n.e("chunk-344d20c9").then(function(){var t=[n("74a3")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"withdraw",name:"Withdraw",component:function(e){return n.e("chunk-ca41f2c0").then(function(){var t=[n("4d28")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"clear",name:"Clear",component:function(e){return n.e("chunk-20002ba5").then(function(){var t=[n("cb0e")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"message",name:"Message",component:function(e){return n.e("chunk-c5014990").then(function(){var t=[n("d80f")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]}];t["a"]=new a["a"]({mode:"history",routes:y})},4360:function(e,t,n){"use strict";var r=n("2b0e"),a=n("2f62"),o={token:function(e){return e.user.token},username:function(e){return e.user.username},created:function(e){return e.user.created},logo:function(e){return e.sys.logo}},c=o,u=(n("d3b7"),n("5f87")),i=n("b775");function s(e){return Object(i["a"])({url:"/login",method:"post",data:e})}function l(){return Object(i["a"])({url:"/me",method:"get"})}var f={state:{token:Object(u["b"])(),username:"",created:""},mutations:{SET_TOKEN:function(e,t){e.token=t},SET_USERNAME:function(e,t){e.username=t},SET_CREATED:function(e,t){e.created=t}},actions:{login:function(e,t){var n=e.commit;return new Promise((function(e,r){s(t).then((function(t){n("SET_TOKEN",t.data.body.access_token),Object(u["e"])(t.data.body.access_token),e(t)})).catch((function(e){r(e)}))}))},getUserInfo:function(e){var t=e.commit;return new Promise((function(e,n){l().then((function(n){t("SET_USERNAME",n.data.body.username),t("SET_CREATED",n.data.body.created_at),e(n)})).catch((function(e){n(e)}))}))},logout:function(e){var t=e.commit;return new Promise((function(e){Object(u["c"])(),t("SET_TOKEN",""),e()}))}}},h=f;function d(){return Object(i["a"])({url:"config",method:"get"})}var p={state:{logo:Object(u["a"])()},mutations:{SET_LOGO:function(e,t){e.logo=t}},actions:{getLogo:function(e){var t=e.commit;d().then((function(e){t("SET_LOGO",e.data.logo),Object(u["d"])(e.data.logo)}))}}},m=p;r["default"].use(a["a"]);var g=new a["a"].Store({modules:{user:h,sys:m},getters:c});t["a"]=g},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],c={name:"App"},u=c,i=(n("5c0b"),n("2877")),s=Object(i["a"])(u,a,o,!1,null,null,null),l=s.exports,f=n("4360"),h=n("41cb"),d=n("5c96"),p=n.n(d),m=(n("9d60"),n("c975"),n("96cf"),n("1da1")),g=n("5f87"),v=["/login","/forget"];h["a"].beforeEach(function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(Object(g["a"])()||f["a"].dispatch("getLogo"),Object(g["b"])())try{f["a"].dispatch("getUserInfo"),"/login"===t.path?r("/dashboard"):r()}catch(n){console.log(n)}else-1===v.indexOf(t.path)?r("/login?redirect=".concat(t.path)):r();case 2:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()),r["default"].use(p.a),new r["default"]({router:h["a"],store:f["a"],render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"5f87":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return l}));var r=n("a78e"),a=n.n(r),o="sysuserToken";function c(){return a.a.get(o)}function u(e){return a.a.set(o,e)}function i(){return a.a.remove(o)}function s(){return a.a.get("sysLogo")}function l(e){return a.a.set("sysLogo",e)}},"9c0c":function(e,t,n){},"9d60":function(e,t,n){},a054:function(e,t,n){},b775:function(e,t,n){"use strict";n("d3b7");var r=n("d4ec"),a=n("bee2"),o=n("bc3a"),c=n.n(o),u=n("4360"),i=n("41cb"),s=n("5c96"),l=n("5f87"),f=c.a.create({baseURL:"//asset.min-eshop.vip/api/admin"}),h=function(){function e(){Object(r["a"])(this,e)}return Object(a["a"])(e,[{key:"success",value:function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this[e]("success",t,n)}},{key:"warning",value:function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this[e]("warning",t,n)}},{key:"info",value:function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this[e]("info",t,n)}},{key:"error",value:function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this[e]("error",t,n)}},{key:e,value:function(e,t,n){n?0===document.getElementsByClassName("el-message").length&&s["Message"][e](t):s["Message"][e](t)}}]),e}(),d=new h;f.interceptors.request.use((function(e){return u["a"].getters.token&&(e.headers["Authorization"]="Bearer "+Object(l["b"])()),e}),(function(e){return Promise.reject(e)})),f.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status?(d.error("登录超时，请重新登录"),u["a"].dispatch("logout"),i["a"].push({name:"Login"})):d.error(e.response.data.message),Promise.reject(e)})),t["a"]=f},b795:function(e,t,n){"use strict";var r=n("0bb7"),a=n.n(r);a.a}});