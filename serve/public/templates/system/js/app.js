(function(e){function t(t){for(var r,o,u=t[0],i=t[1],s=t[2],l=0,f=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return i.p+"templates/system/js/"+({}[e]||e)+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-06d731b6":1,"chunk-21e87a81":1,"chunk-32f4a368":1,"chunk-54f72c3e":1,"chunk-61881990":1,"chunk-6d6020b4":1,"chunk-6d97e46a":1,"chunk-720ea646":1,"chunk-79d60b36":1,"chunk-bbcdf0e6":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="templates/system/css/"+({}[e]||e)+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;c.push([0,"template-elementUI","template-libs"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"241d":function(e,t,n){},"41cb":function(e,t,n){"use strict";var r=n("2b0e"),o=n("8c4f"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-content"},[n("div",{staticClass:"page-header"},[n("div",{staticClass:"page-header-logo"},[e.logo&&"null"!==e.logo?n("img",{attrs:{src:e.logo}}):n("div",{staticStyle:{"line-height":"40px"}},[e._v("SaaS 系统后台")])]),"Login"!==e.$route.name?n("div",{staticClass:"page-header-right"},[n("span",[e._v(e._s(e.$store.getters.username))]),n("span",{staticStyle:{"margin-left":"20px"},on:{click:e.tologout}},[e._v("退出")])]):e._e()]),n("div",{staticClass:"page-container"},["Login"!==e.$route.name&&"Forget"!==e.$route.name?n("menu-bar",{staticClass:"page-sidebar"}):e._e(),n("router-view",{staticClass:"page-content",class:{"is-logged":"Login"!==e.$route.name&&"Forget"!==e.$route.name}})],1),n("div",{staticClass:"page-float",on:{click:e.open}},[n("i",{staticClass:"iconfont iconfasong",staticStyle:{"font-size":"30px"}}),n("div",{staticStyle:{"margin-top":"5px"}},[e._v("提交BUG")])])])},c=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ul",{staticClass:"menu-bar"},[n("li",{class:{"is-active":1===e.currentIndex},on:{click:function(t){return e.toPage("Dashboard",1)}}},[e._v("首页")]),n("li",{class:{"is-active":2===e.currentIndex},on:{click:function(t){return e.toPage("Withdraw",2)}}},[e._v("提现管理")]),n("li",{class:{"is-active":3===e.currentIndex},on:{click:function(t){return e.toPage("Clear",3)}}},[e._v("结算管理")]),n("li",{class:{"is-active":4===e.currentIndex},on:{click:function(t){return e.toPage("Customer",4)}}},[e._v("顾客管理")]),n("li",{class:{"is-active":5===e.currentIndex},on:{click:function(t){return e.toPage("Message",5)}}},[e._v("短信签名管理")]),n("li",{class:{"is-active":6===e.currentIndex},on:{click:function(t){return e.toPage("Setting",6)}}},[e._v("系统设置")]),n("li",{class:{"is-active":7===e.currentIndex},on:{click:function(t){return e.toPage("HomePage",7)}}},[e._v("落地页设置")])])])},i=[],s=(n("b0c0"),{data:function(){return{currentIndex:null}},methods:{toPage:function(e,t){this.$router.push({name:e}).catch((function(){})),this.currentIndex=t}},watch:{"$route.name":{deep:!0,immediate:!0,handler:function(){"Dashboard"===this.$route.name?this.currentIndex=1:"Withdraw"===this.$route.name?this.currentIndex=2:"Clear"===this.$route.name?this.currentIndex=3:"Customer"===this.$route.name||"CustomerDetail"===this.$route.name?this.currentIndex=4:"Message"===this.$route.name||"CustomerDetail"===this.$route.name?this.currentIndex=5:"Setting"===this.$route.name?this.currentIndex=6:this.currentIndex=7}}}}),l=s,f=(n("aef8"),n("2877")),d=Object(f["a"])(l,u,i,!1,null,"bbdaf56e",null),h=d.exports,p=n("5f87"),m={components:{MenuBar:h},data:function(){return{logo:Object(p["a"])()}},methods:{tologout:function(){var e=this;this.$store.dispatch("logout").then((function(){e.$message.success("已安全登出"),e.$router.push({name:"Login"})}))},open:function(){window.open("http://t1.ink/f/qzkiv8","_blank")}}},g=m,v=(n("87ab"),Object(f["a"])(g,a,c,!1,null,"4062b8c2",null)),b=v.exports;r["default"].use(o["a"]);var y=[{path:"/",component:b,children:[{path:"login",name:"Login",component:function(e){return n.e("chunk-06d731b6").then(function(){var t=[n("aeab")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"forget",name:"Forget",component:function(e){return n.e("chunk-6d97e46a").then(function(){var t=[n("7d57")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"dashboard",name:"Dashboard",component:function(e){return n.e("chunk-54f72c3e").then(function(){var t=[n("6693")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"setting",name:"Setting",component:function(e){return n.e("chunk-6d6020b4").then(function(){var t=[n("82d4")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"customer",name:"Customer",component:function(e){return n.e("chunk-21e87a81").then(function(){var t=[n("ffd3")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"customer/detail",name:"CustomerDetail",component:function(e){return n.e("chunk-bbcdf0e6").then(function(){var t=[n("df8a")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"homepage",name:"HomePage",component:function(e){return n.e("chunk-32f4a368").then(function(){var t=[n("74a3")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"withdraw",name:"Withdraw",component:function(e){return n.e("chunk-61881990").then(function(){var t=[n("4d28")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"clear",name:"Clear",component:function(e){return n.e("chunk-720ea646").then(function(){var t=[n("cb0e")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"message",name:"Message",component:function(e){return n.e("chunk-79d60b36").then(function(){var t=[n("d80f")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]}];t["a"]=new o["a"]({mode:"history",routes:y})},4360:function(e,t,n){"use strict";var r=n("2b0e"),o=n("2f62"),a={token:function(e){return e.user.token},username:function(e){return e.user.username},created:function(e){return e.user.created},logo:function(e){return e.sys.logo}},c=a,u=(n("d3b7"),n("5f87")),i=n("b775");function s(e){return Object(i["a"])({url:"/login",method:"post",data:e})}function l(){return Object(i["a"])({url:"/me",method:"get"})}var f={state:{token:Object(u["b"])(),username:"",created:""},mutations:{SET_TOKEN:function(e,t){e.token=t},SET_USERNAME:function(e,t){e.username=t},SET_CREATED:function(e,t){e.created=t}},actions:{login:function(e,t){var n=e.commit;return new Promise((function(e,r){s(t).then((function(t){n("SET_TOKEN",t.data.body.access_token),Object(u["e"])(t.data.body.access_token),e(t)})).catch((function(e){r(e)}))}))},getUserInfo:function(e){var t=e.commit;return new Promise((function(e,n){l().then((function(n){t("SET_USERNAME",n.data.body.username),t("SET_CREATED",n.data.body.created_at),e(n)})).catch((function(e){n(e)}))}))},logout:function(e){var t=e.commit;return new Promise((function(e){Object(u["c"])(),t("SET_TOKEN",""),e()}))}}},d=f;function h(){return Object(i["a"])({url:"config",method:"get"})}var p={state:{logo:Object(u["a"])()},mutations:{SET_LOGO:function(e,t){e.logo=t}},actions:{getLogo:function(e){var t=e.commit;h().then((function(e){t("SET_LOGO",e.data.logo),Object(u["d"])(e.data.logo)}))}}},m=p;r["default"].use(o["a"]);var g=new o["a"].Store({modules:{user:d,sys:m},getters:c});t["a"]=g},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],c={name:"App"},u=c,i=(n("5c0b"),n("2877")),s=Object(i["a"])(u,o,a,!1,null,null,null),l=s.exports,f=n("4360"),d=n("41cb"),h=n("5c96"),p=n.n(h),m=(n("9d60"),n("c975"),n("96cf"),n("1da1")),g=n("5f87"),v=["/login","/forget"];d["a"].beforeEach(function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(Object(g["a"])()||f["a"].dispatch("getLogo"),Object(g["b"])())try{f["a"].dispatch("getUserInfo"),"/login"===t.path?r("/dashboard"):r()}catch(n){console.log(n)}else-1===v.indexOf(t.path)?r("/login?redirect=".concat(t.path)):r();case 2:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()),r["default"].use(p.a),new r["default"]({router:d["a"],store:f["a"],render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"5f87":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return l}));var r=n("a78e"),o=n.n(r),a="sysuserToken";function c(){return o.a.get(a)}function u(e){return o.a.set(a,e)}function i(){return o.a.remove(a)}function s(){return o.a.get("sysLogo")}function l(e){return o.a.set("sysLogo",e)}},"87ab":function(e,t,n){"use strict";var r=n("9ee7"),o=n.n(r);o.a},"9c0c":function(e,t,n){},"9d60":function(e,t,n){},"9ee7":function(e,t,n){},aef8:function(e,t,n){"use strict";var r=n("241d"),o=n.n(r);o.a},b775:function(e,t,n){"use strict";n("d3b7");var r=n("d4ec"),o=n("bee2"),a=n("bc3a"),c=n.n(a),u=n("4360"),i=n("41cb"),s=n("5c96"),l=n("5f87"),f=c.a.create({baseURL:"//asset.min-eshop.vip/api/admin"}),d=function(){function e(){Object(r["a"])(this,e)}return Object(o["a"])(e,[{key:"success",value:function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this[e]("success",t,n)}},{key:"warning",value:function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this[e]("warning",t,n)}},{key:"info",value:function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this[e]("info",t,n)}},{key:"error",value:function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this[e]("error",t,n)}},{key:e,value:function(e,t,n){n?0===document.getElementsByClassName("el-message").length&&s["Message"][e](t):s["Message"][e](t)}}]),e}(),h=new d;f.interceptors.request.use((function(e){return u["a"].getters.token&&(e.headers["Authorization"]="Bearer "+Object(l["b"])()),e}),(function(e){return Promise.reject(e)})),f.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status?(h.error("登录超时，请重新登录"),u["a"].dispatch("logout"),i["a"].push({name:"Login"})):h.error(e.response.data.message),Promise.reject(e)})),t["a"]=f}});