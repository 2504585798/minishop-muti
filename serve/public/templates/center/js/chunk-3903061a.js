(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3903061a"],{"2a0a":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"dashboard-contain"},[a("div",{staticClass:"dashboard-1"},[t._m(0),a("div",{staticClass:"dashboard-1-data"},[a("div",[a("div",{staticClass:"data-card-title-1"},[a("strong",{staticStyle:{color:"#E6A23C"}},[t._v(t._s(t.order.processing_count))])]),a("div",{staticClass:"data-card-title-2"},[t._v("待配送订单")]),a("div",{staticClass:"data-card-title-3",staticStyle:{height:"34px"}},[a("span",{staticStyle:{color:"#409EFF",cursor:"pointer"},on:{click:function(e){return t.toOrder("processing")}}},[t._v("查看")])])]),a("div",[a("div",{staticClass:"data-card-title-1"},[t._v("¥ "+t._s(t.order.day_new_order_suc_amount))]),a("div",{staticClass:"data-card-title-2"},[t._v("今日总金额")]),a("div",{staticClass:"data-card-title-3"},[a("div",[t._v("昨日总金额: ")]),a("div",[a("strong",[t._v(t._s(t.order.yesterday_order_suc_amount))])])])]),a("div",[a("div",{staticClass:"data-card-title-1"},[t._v(t._s(t.order.day_new_order_count))]),a("div",{staticClass:"data-card-title-2"},[t._v("今日订单数")]),a("div",{staticClass:"data-card-title-3"},[a("div",[t._v("昨日订单数: ")]),a("div",[a("strong",[t._v(t._s(t.order.yesterday_order_count))])])])]),a("div",[a("div",{staticClass:"data-card-title-1"},[t._v(t._s(t.customer.today_customer_count))]),a("div",{staticClass:"data-card-title-2"},[t._v("今日新顾客")]),a("div",{staticClass:"data-card-title-3"},[a("div",[t._v("昨日新顾客: ")]),a("div",[a("strong",[t._v(t._s(t.customer.yesterday_customer_count))])])])]),a("div",[a("div",{staticClass:"data-card-title-1"},[t._v(t._s(t.order.refunding_count))]),a("div",{staticClass:"data-card-title-2"},[t._v("退款中")]),a("div",{staticClass:"data-card-title-3",staticStyle:{height:"34px"}},[a("span",{staticStyle:{color:"#409EFF",cursor:"pointer"},on:{click:function(e){return t.toOrder("refunding")}}},[t._v("查看")])])])])]),a("div",{staticClass:"dashboard-2"},[a("div",{staticClass:"order-line"},[t._m(1),a("div",[a("muti-line",{attrs:{id:"orderLineCircle",className:"orderLineCircleClass",Show:t.lineShow,Height:300,Values:t.order_line}})],1)]),a("div",{staticClass:"image-info"},[t._m(2),a("div",{staticStyle:{"padding-left":"20px"}},[a("div",[a("water-liquid",{attrs:{id:"ImageCircle",className:"ImageCircleClass",Show:t.waterShow,Height:200,Value:t.image.bytes_percent}})],1),a("div",{staticStyle:{padding:"0 0 48px 10px"}},[a("div",{staticClass:"data-card-title-3"},[t._v(" 已使用："+t._s(t.image.bytes_value)+" ")]),a("div",{staticClass:"data-card-title-3"},[t._v(" 总大小："),a("span",[t._v(t._s(t.$store.getters.shop_img_limit))]),t._v(" GB ")]),a("div",{staticClass:"data-card-title-3"},[t._v(" 图片数量："+t._s(t.image.count)+" ")])])])])])]),a("div",{staticClass:"ad-contain"},[a("div",{staticClass:"web-title-container"},[a("div",{staticClass:"web-title"},[a("strong",[t._v(t._s(t.$store.getters.shop_name))])]),a("div",{staticClass:"web-url"},[t._v(t._s(t.$store.getters.shop_url+"."+t.$store.getters.shop_host))])]),a("div",[a("div",{staticClass:"web-item"},[a("div",[t._v("认证状况")]),a("div",[a("div",[t._v(t._s(t.certify_type)),a("span",{staticClass:"inline-button",on:{click:function(e){return t.$router.push({name:"Certify"})}}},[t._v("查看")])])])]),a("div",{staticClass:"web-item"},[a("div",[t._v("当前版本")]),a("div",{staticClass:"web-item__level"},[a("i",{staticClass:"iconfont iconhuiyuan"}),a("span",[t._v(t._s(t.$store.getters.shop_level))])])]),a("div",{staticClass:"web-item"},[a("div",[t._v("有效期至")]),a("div",[t._v(t._s(t.$store.getters.shop_exp)),a("span",{staticClass:"inline-button"},[t._v("续费")])])])]),a("div",{staticClass:"web-service"},[a("div",{staticClass:"service-title"},[t._v("联系客服")]),a("div",{staticClass:"service-info"},[a("div",[t.service.qrcode?a("img",{attrs:{src:t.service.qrcode}}):t._e()])])])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-title"},[a("strong",[t._v("经营数据")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-title"},[a("strong",[t._v("实时概况")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-title"},[a("strong",[t._v("图片空间")])])}],s=a("5e24"),o=a("9c1a"),n=a("6797"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,staticStyle:{width:"100%"},style:{height:t.Height+"px"},attrs:{id:t.id}})},d=[],l=(a("a9e3"),a("313e")),u=a.n(l),_={props:{className:{type:String,default:"chart"},id:{type:String,default:"chart"},Show:Boolean,Height:Number,Value:{type:Number,default:0}},data:function(){return{chart:null,waterData:[.2,.2,.2],serieName:""}},mounted:function(){this.Show&&this.initChart()},methods:{initChart:function(){this.chart=u.a.init(this.$el),this.setOptions()},setOptions:function(){var t={normal:{label:{show:!1},labelLine:{show:!1},color:"rgba(0,0,0,0)",borderWidth:0},emphasis:{color:"rgba(0,0,0,0)",borderWidth:0}},e={normal:{formatter:"{c}%",position:"center",show:!0,textStyle:{fontSize:"20",fontWeight:"normal",color:"#34374E"}}};this.chart.setOption({title:[{text:"已使用",left:"48%",top:"70%",textAlign:"center",textStyle:{fontSize:15,fontFamily:"Microsoft Yahei",fontWeight:"normal",color:"#409EFF",textAlign:"center"}}],series:[{type:"pie",hoverAnimation:!1,radius:["100%","80%"],startAngle:225,labelLine:{normal:{show:!1}},label:{normal:{position:"center"}},data:[{value:100,itemStyle:{normal:{color:"#E1E8EE"}}},{value:35,itemStyle:t}]},{type:"pie",hoverAnimation:!1,radius:["100%","80%"],startAngle:225,labelLine:{normal:{show:!1}},label:{normal:{position:"center"}},data:[{value:this.Value,itemStyle:{normal:{color:"#E6A23C"}},label:e},{value:35,itemStyle:t}]}]})}},watch:{Show:{deep:!0,immediate:!0,handler:function(){this.Show&&this.initChart()}}}},h=_,v=a("2877"),y=Object(v["a"])(h,c,d,!1,null,null,null),m=y.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.Height+"px"},attrs:{id:t.id}})},p=[],g={props:{className:{type:String,default:"chart"},id:{type:String,default:"chart"},Show:Boolean,Height:Number,Values:Object},data:function(){return{chart:null}},mounted:function(){this.Show&&this.initChart()},methods:{initChart:function(){this.chart=u.a.init(this.$el),this.setOptions()},setOptions:function(){this.chart.setOption({tooltip:{trigger:"axis",axisPointer:{lineStyle:{color:"#ddd"}},backgroundColor:"rgba(255,255,255,1)",padding:[5,10],textStyle:{color:"#409EFF"},extraCssText:"box-shadow: 0 0 5px rgba(0,0,0,0.3)"},grid:{top:"12%",bottom:"19%",left:"6%",right:"4%"},legend:{data:["昨日","今日"],left:"left",top:"top"},xAxis:{type:"category",data:["0:00","1:00","2:00","3:00","4:00","5:00","6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00","24:00"],boundaryGap:!1,axisTick:{show:!1},axisLine:{show:!1,lineStyle:{color:"#646464"}},axisLabel:{margin:5,textStyle:{fontSize:10}}},yAxis:{type:"value",splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{margin:5,textStyle:{fontSize:10}}},series:[{name:"昨日",type:"line",smooth:!0,showSymbol:!1,symbol:"circle",symbolSize:6,data:this.Values.yesterday,itemStyle:{normal:{color:"rgba(64,158,255,0.4)"}},lineStyle:{normal:{width:2.5}}},{name:"今日",type:"line",smooth:!0,showSymbol:!1,symbol:"circle",symbolSize:6,data:this.Values.today,areaStyle:{normal:{color:new u.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(64,158,255,0.2)"},{offset:1,color:"rgba(64,158,255,0.05)"}],!1)}},itemStyle:{normal:{color:"rgba(64,158,255,1)"}},lineStyle:{normal:{width:2.5}}}]})}},watch:{Show:{deep:!0,immediate:!0,handler:function(){this.Show&&this.initChart()}}}},b=g,w=Object(v["a"])(b,f,p,!1,null,null,null),C=w.exports,S={components:{WaterLiquid:m,MutiLine:C},data:function(){return{order:{processing_count:0,refunding_count:0,day_new_order_count:0,day_new_order_suc_amount:0,yesterday_order_count:0,yesterday_order_amount:0,yesterday_order_suc_amount:0,yesterday_order_rate:0},customer:{today_customer_count:0,yesterday_customer_count:0,week_customer_count:0},image:{bytes:0,bytes_value:"",count:0,bytes_percent:0},order_line:{today:[],yesterday:[]},waterShow:!1,lineShow:!1,certify_type:"-",service:{qrcode:""}}},methods:{toOrder:function(t){this.$router.push({name:"OrderList",query:{status:t}})},getOrder:function(){var t=this;Object(s["a"])("order").then((function(e){var a=e.data.body;t.order={processing_count:1*a.processing_count,refunding_count:1*a.refunding_count,day_new_order_count:1*a.day_new_order_count,day_new_order_suc_amount:1*a.day_new_order_suc_amount,yesterday_order_count:1*a.yesterday_order_count,yesterday_order_amount:1*a.yesterday_order_amount,yesterday_order_suc_amount:1*a.yesterday_order_suc_amount,yesterday_order_rate:1*a.yesterday_order_rate}}))},getCustomer:function(){var t=this;Object(s["a"])("customer").then((function(e){var a=e.data.body;t.customer={today_customer_count:1*a.today_customer_count,yesterday_customer_count:1*a.yesterday_customer_count,week_customer_count:1*a.week_customer_count}}))},getImage:function(){var t=this;Object(s["a"])("image").then((function(e){var a=e.data.body;t.image={bytes:1*a.bytes,bytes_value:a.bytes_value,count:1*a.count,bytes_percent:1*a.bytes_percent},t.waterShow=!0}))},getOrderLine:function(){var t=this;Object(s["a"])("order_line").then((function(e){var a=e.data.body;t.order_line={today:a.today,yesterday:a.yesterday},t.lineShow=!0}))},getCertify:function(){var t=this;Object(o["b"])().then((function(e){var a=e.data.body;a?"failed"===a.status?t.certify_type="认证失败":t.certify_type=a.type_value:t.certify_type="未认证"}))},getService:function(){var t=this;Object(n["a"])().then((function(e){t.service.qrcode=e.data.service_qr_code}))}},created:function(){this.getOrder(),this.getImage(),this.getCustomer(),this.getOrderLine(),this.getCertify(),this.getService()}},x=S,O=(a("c021"),Object(v["a"])(x,i,r,!1,null,"59096011",null));e["default"]=O.exports},"5e24":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var i=a("b775");function r(t){return Object(i["a"])({url:"dashboard/"+t,method:"get"})}},"9c1a":function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return s})),a.d(e,"c",(function(){return o}));var i=a("b775");function r(){return Object(i["a"])({url:"shop/authenticate",method:"get"})}function s(t){return Object(i["a"])({url:"shop/authenticate",method:"post",data:t})}function o(t){return Object(i["a"])({url:"shop/authenticate",method:"put",data:t})}},b1dc:function(t,e,a){},c021:function(t,e,a){"use strict";var i=a("b1dc"),r=a.n(i);r.a}}]);