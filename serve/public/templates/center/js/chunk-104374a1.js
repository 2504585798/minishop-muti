(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-104374a1"],{"016f":function(e,t,i){"use strict";var a=i("cc0b"),n=i.n(a);n.a},"1ec0":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"shipment-header"},[i("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.createShipment}},[e._v("创建新模板")])],1),i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"shipment-list"},e._l(e.shipments,(function(t,a){return i("div",{key:a,staticClass:"shipment-list-item"},[i("div",{staticClass:"shipment-basic-info"},[i("div",{staticStyle:{width:"calc(100% - 220px)"}},[i("div",{staticStyle:{display:"inline-block","min-width":"100px","vertical-align":"bottom"}},[i("div",{staticClass:"shipment-info-title",staticStyle:{"font-weight":"500"}},[e._v(e._s(t.shipment_name))]),t.need_cost?i("div",{staticClass:"shipment-info-sub"},[e._v(e._s(t.cost_type)+"收费")]):i("div",{staticClass:"shipment-info-sub"},[e._v("包邮")])]),i("div",{staticStyle:{display:"inline-block","vertical-align":"bottom"}},[t.detailShow?e._e():i("el-button",{attrs:{size:"mini",type:"primary",plain:""},on:{click:function(i){return e.showDetail(t)}}},[e._v("查看详情")]),t.detailShow?i("el-button",{attrs:{size:"mini",type:"primary",plain:""},on:{click:function(i){return e.closeDetail(t)}}},[e._v("收起")]):e._e()],1)]),i("div",{staticStyle:{width:"220px"}},[i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(i){return e.editShip(t)}}},[e._v("修改")]),i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(i){return e.copyShip(t)}}},[e._v("复制模版")]),i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){return e.deleteShip(t)}}},[e._v("删除")])],1)]),i("transition",{attrs:{name:"shipment-detail"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.detailShow,expression:"item.detailShow"},{name:"loading",rawName:"v-loading",value:e.itemLoading,expression:"itemLoading"}],staticClass:"shipment-detail-table"},[i("div",{staticClass:"shipment-detail-list"},[i("div",{staticStyle:{"min-width":"80px"}},[e._v("运送方式")]),i("div",{staticStyle:{width:"100%"}},[e._v("地区")]),i("div",{staticStyle:{"min-width":"80px"}},[e._v("首重/件")]),i("div",{staticStyle:{"min-width":"80px"}},[e._v("运费")]),i("div",{staticStyle:{"min-width":"80px"}},[e._v("续重/件")]),i("div",{staticStyle:{"min-width":"80px"}},[e._v("运费")])]),i("div",{staticClass:"shipment-detail-list"},[i("div",{staticStyle:{"min-width":"80px"}},[e._v(e._s(t.shipment_title))]),i("div",{staticStyle:{width:"100%"}},[e._v("全国(除指定地区)")]),i("div",{staticStyle:{"min-width":"80px"}},[e._v(e._s(t.value_1))]),i("div",{staticStyle:{"min-width":"80px"}},[e._v(e._s(t.price_1))]),i("div",{staticStyle:{"min-width":"80px"}},[e._v(e._s(t.value_2))]),i("div",{staticStyle:{"min-width":"80px"}},[e._v(e._s(t.price_2))])]),e._l(e.current_ship.rules,(function(a,n){return i("div",{key:"c"+n,staticClass:"shipment-detail-list"},[i("div",{staticStyle:{"min-width":"80px"}},[e._v(e._s(t.shipment_title))]),i("div",{staticStyle:{width:"100%"}},e._l(a.area,(function(t,n){return i("span",{key:"a"+n},[e._v(e._s(t+(n===a.area.length-1?"":", ")))])})),0),i("div",{staticStyle:{"min-width":"80px"}},[e._v(e._s(a.value_1))]),i("div",{staticStyle:{"min-width":"80px"}},[e._v(e._s(a.price_1))]),i("div",{staticStyle:{"min-width":"80px"}},[e._v(e._s(a.value_2))]),i("div",{staticStyle:{"min-width":"80px"}},[e._v(e._s(a.price_2))])])}))],2)])],1)})),0),i("el-dialog",{attrs:{visible:e.editVisible,title:e.editTitle,width:"650px","before-close":e.close}},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:"修改模版"===e.editTitle&&e.diaLoading,expression:"editTitle === '修改模版' && diaLoading"}]},[i("el-form",{ref:"edit",attrs:{model:e.editData,rules:e.editRules,"label-width":"80px"}},[i("el-form-item",{attrs:{label:"模版名称",prop:"shipment_name"}},[i("el-input",{model:{value:e.editData.shipment_name,callback:function(t){e.$set(e.editData,"shipment_name",t)},expression:"editData.shipment_name"}})],1),i("el-form-item",{attrs:{label:"是否包邮",prop:"need_cost"}},[i("el-radio",{attrs:{label:!0},on:{change:function(t){e.needCost=!0}},model:{value:e.editData.need_cost,callback:function(t){e.$set(e.editData,"need_cost",t)},expression:"editData.need_cost"}},[e._v("自定义运费")]),i("el-radio",{attrs:{label:!1},on:{change:function(t){e.needCost=!1}},model:{value:e.editData.need_cost,callback:function(t){e.$set(e.editData,"need_cost",t)},expression:"editData.need_cost"}},[e._v("包邮")])],1),e.needCost?i("el-form-item",{attrs:{label:"计价方式",prop:"cost_type_code"}},[i("el-radio",{attrs:{label:"numeric"},model:{value:e.editData.cost_type_code,callback:function(t){e.$set(e.editData,"cost_type_code",t)},expression:"editData.cost_type_code"}},[e._v("按件数")]),i("el-radio",{attrs:{label:"weight"},model:{value:e.editData.cost_type_code,callback:function(t){e.$set(e.editData,"cost_type_code",t)},expression:"editData.cost_type_code"}},[e._v("按重量")])],1):e._e(),i("el-form-item",{attrs:{label:"运送方式",prop:"shipment_code"}},e._l(e.shipment_codes,(function(t,a){return i("el-radio",{key:a,attrs:{label:t.code},model:{value:e.editData.shipment_code,callback:function(t){e.$set(e.editData,"shipment_code",t)},expression:"editData.shipment_code"}},[e._v(e._s(t.title))])})),1),e.needCost?i("div",{staticClass:"edit-ship-list edit-ship-header"},[i("div",{staticStyle:{width:"70px"}},[e._v("默认运费")]),i("div",{staticStyle:{width:"calc(100% - 70px)"}},[i("el-input",{staticStyle:{display:"inline-block",width:"80px"},attrs:{size:"mini",type:"number",min:"1",step:"0.01"},on:{blur:function(t){return e.handleBlur("default","value_1")}},model:{value:e.editData.value_1,callback:function(t){e.$set(e.editData,"value_1",t)},expression:"editData.value_1"}}),i("span",{staticStyle:{margin:"0 5px"}},[e._v(e._s("numeric"===e.editData.cost_type_code?"件内":"kg内"))]),i("el-input",{staticStyle:{display:"inline-block",width:"80px"},attrs:{size:"mini",type:"number",min:"0",step:"0.01"},on:{blur:function(t){return e.handleBlur("default","price_1")}},model:{value:e.editData.price_1,callback:function(t){e.$set(e.editData,"price_1",t)},expression:"editData.price_1"}}),i("span",{staticStyle:{margin:"0 5px"}},[e._v("元，每增加")]),i("el-input",{staticStyle:{display:"inline-block",width:"80px"},attrs:{size:"mini",type:"number",min:"1",step:"0.01"},on:{blur:function(t){return e.handleBlur("default","value_2")}},model:{value:e.editData.value_2,callback:function(t){e.$set(e.editData,"value_2",t)},expression:"editData.value_2"}}),i("span",{staticStyle:{margin:"0 5px"}},[e._v(e._s("numeric"===e.editData.cost_type_code?"件":"kg"))]),i("el-input",{staticStyle:{display:"inline-block",width:"80px"},attrs:{size:"mini",type:"number",min:"0",step:"0.01"},on:{blur:function(t){return e.handleBlur("default","price_2")}},model:{value:e.editData.price_2,callback:function(t){e.$set(e.editData,"price_2",t)},expression:"editData.price_2"}}),i("span",{staticStyle:{margin:"0 5px"}},[e._v("元")])],1)]):e._e(),e.needCost&&0!==e.editData.rules.length?i("div",{staticClass:"edit-ship-list"},[i("div",{staticStyle:{width:"calc(100% - 340px)"}},[e._v("运送到")]),i("div",{staticStyle:{width:"75px"}},[e._v(e._s("numeric"===e.editData.cost_type_code?"首件数/件":"首重量/kg"))]),i("div",{staticStyle:{width:"75px"}},[e._v("首费/元")]),i("div",{staticStyle:{width:"75px"}},[e._v(e._s("numeric"===e.editData.cost_type_code?"续件数/件":"续重量/kg"))]),i("div",{staticStyle:{width:"75px"}},[e._v("续费/元")]),i("div",{staticStyle:{width:"40px"}},[e._v("操作")])]):e._e(),e.needCost&&0!==e.editData.rules.length?i("div",e._l(e.editData.rules,(function(t,a){return i("div",{key:a,staticClass:"edit-ship-list"},[i("div",{staticStyle:{width:"calc(100% - 340px)"}},[0!==t.area.length?i("div",{staticStyle:{display:"inline-block","vertical-align":"top",width:"calc(100% - 40px)"}},e._l(t.area,(function(a,n){return i("span",{key:"a"+n},[e._v(e._s(a+(n===t.area.length-1?"":", ")))])})),0):e._e(),0===t.area.length?i("div",{staticStyle:{display:"inline-block","vertical-align":"top",width:"calc(100% - 40px)"}},[e._v("未添加地区")]):e._e(),i("div",{staticStyle:{display:"inline-block","vertical-align":"top",width:"40px"}},[i("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(i){return e.addPlace(a,t)}}},[e._v("编辑")])],1)]),i("div",{staticStyle:{width:"75px"}},[i("el-input",{staticStyle:{display:"inline-block",width:"70px"},attrs:{size:"mini",type:"number",min:"1",step:"0.01"},on:{blur:function(t){return e.handleBlur(a,"value_1")}},model:{value:t.value_1,callback:function(i){e.$set(t,"value_1",i)},expression:"rule.value_1"}})],1),i("div",{staticStyle:{width:"75px"}},[i("el-input",{staticStyle:{display:"inline-block",width:"70px"},attrs:{size:"mini",type:"number",min:"0",step:"0.01"},on:{blur:function(t){return e.handleBlur(a,"price_1")}},model:{value:t.price_1,callback:function(i){e.$set(t,"price_1",i)},expression:"rule.price_1"}})],1),i("div",{staticStyle:{width:"75px"}},[i("el-input",{staticStyle:{display:"inline-block",width:"70px"},attrs:{size:"mini",type:"number",min:"1",step:"0.01"},on:{blur:function(t){return e.handleBlur(a,"value_2")}},model:{value:t.value_2,callback:function(i){e.$set(t,"value_2",i)},expression:"rule.value_2"}})],1),i("div",{staticStyle:{width:"75px"}},[i("el-input",{staticStyle:{display:"inline-block",width:"70px"},attrs:{size:"mini",type:"number",min:"0",step:"0.01"},on:{blur:function(t){return e.handleBlur(a,"price_2")}},model:{value:t.price_2,callback:function(i){e.$set(t,"price_2",i)},expression:"rule.price_2"}})],1),i("div",{staticStyle:{width:"40px"}},[i("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(t){return e.delRule(a)}}},[e._v("删除")])],1)])})),0):e._e(),e.needCost?i("div",{staticStyle:{padding:"5px"}},[i("el-button",{attrs:{type:"text",size:"mini"},on:{click:e.addRule}},[e._v("为指定地区设置运费")])],1):e._e()],1)],1),i("div",{staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:e.close}},[e._v("取消")]),i("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.confirm}},[e._v("确定")])],1)]),i("place-dialog",{attrs:{Visible:e.placeVisible,selected:e.selected_place},on:{close:e.closePlace,confirm:e.confirmPlace}})],1)},n=[],s=(i("d81d"),i("a434"),i("fe27")),l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{attrs:{visible:e.Visible,title:"选择地区","before-close":e.close,width:"600px"}},[e._l(e.places,(function(t,a){return i("div",{key:a,staticClass:"place-list"},[i("div",[i("el-checkbox",{attrs:{label:t.group},on:{change:function(i){return e.changeGroup(t,i)}},model:{value:e.selected_group,callback:function(t){e.selected_group=t},expression:"selected_group"}})],1),i("div",e._l(t.area,(function(a,n){return i("el-checkbox",{key:"a"+n,attrs:{label:a},on:{change:function(i){return e.changeArea(t,i)}},model:{value:e.selected_area,callback:function(t){e.selected_area=t},expression:"selected_area"}})})),1)])})),i("div",{staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:e.close}},[e._v("关闭")]),i("el-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v("确定")])],1)],2)},c=[],d=(i("4de4"),i("c975"),{props:{Visible:Boolean,selected:Array},data:function(){return{places:[{group:"华东",area:["上海市","江苏省","浙江省","安徽省","江西省"]},{group:"华北",area:["北京市","天津市","河北省","山西省","山东省","内蒙古自治区"]},{group:"华中",area:["河南省","湖北省","湖南省"]},{group:"华南",area:["广东省","广西壮族自治区","福建省","海南省"]},{group:"东北",area:["辽宁省","吉林省","黑龙江省"]},{group:"西北",area:["陕西省","甘肃省","青海省","宁夏回族自治区","新疆维吾尔自治区"]},{group:"西南",area:["重庆市","四川省","贵州省","云南省","西藏自治区"]},{group:"港澳台",area:["香港特别行政区","澳门特别行政区","台湾"]},{group:"海外",area:["海外"]}],selected_group:[],selected_area:[]}},methods:{close:function(){this.selected_group=[],this.selected_area=[],this.$emit("close")},confirm:function(){this.$emit("confirm",this.selected_area)},changeGroup:function(e,t){var i=this;t?e.area.map((function(e){i.selected_area.push(e)})):e.area.map((function(e){i.selected_area.splice(i.selected_area.indexOf(e),1)}))},changeArea:function(e,t){var i=this;t?0===e.area.filter((function(e){return-1===i.selected_area.indexOf(e)})).length&&this.selected_group.push(e.group):-1!==this.selected_group.indexOf(e.group)&&this.selected_group.splice(this.selected_group.indexOf(e.group),1)}},watch:{Visible:{deep:!0,handler:function(){var e=this;this.Visible&&(this.selected_group=[],this.selected_area=[],this.places.map((function(t){0===t.area.filter((function(t){return-1===e.selected.indexOf(t)})).length&&e.selected_group.push(t.group)})),this.selected.map((function(t){e.selected_area.push(t)})))}}}}),o=d,r=(i("016f"),i("2877")),u=Object(r["a"])(o,l,c,!1,null,"5128a7ce",null),p=u.exports,_={components:{PlaceDialog:p},data:function(){return{loading:!1,shipments:[],shipment_codes:[],current_ship:{},itemLoading:!1,editTitle:"",editVisible:!1,editData:{shipment_name:"",need_cost:!0,cost_type_code:"",shipment_code:"",value_1:1,price_1:0,value_2:1,price_2:0,rules:[]},editRules:{shipment_name:[{required:!0,message:"请填写运费模版名称",trigger:"blur"}],need_cost:[{required:!0,message:"请选择是否包邮",trigger:"blur"}],cost_type_code:[{required:!0,message:"请选择计价方式",trigger:"blur"}],shipment_code:[{required:!0,message:"请选择运送方式",trigger:"blur"}]},diaLoading:!1,placeVisible:!1,current_place:null,selected_place:[],needCost:!0,btnLoading:!1}},created:function(){this.getData()},methods:{getData:function(){var e=this;this.loading=!0,Object(s["f"])().then((function(t){e.shipment_codes=t.data.body})),Object(s["d"])().then((function(t){e.shipments=t.data.body,e.shipments.map((function(e){e["detailShow"]=!1})),e.loading=!1})).catch((function(){e.loading=!1}))},showDetail:function(e){var t=this;this.itemLoading=!0,e.detailShow=!0,Object(s["e"])(e.id).then((function(e){t.current_ship=e.data.body,t.itemLoading=!1})).catch((function(){t.itemLoading=!1}))},closeDetail:function(e){this.current_ship={},e.detailShow=!1},createShipment:function(){this.editVisible=!0,this.editTitle="创建模版",this.editData.shipment_code=this.shipment_codes[0].code},editShip:function(e){var t=this;this.editVisible=!0,this.editTitle="修改模版",this.diaLoading=!0,Object(s["e"])(e.id).then((function(e){t.editData=e.data.body,t.editData.value_1=t.editData.value_1?t.editData.value_1:1,t.editData.value_2=t.editData.value_2?t.editData.value_2:1,t.editData.price_1=null!==t.editData.price_1?t.editData.price_1:0,t.editData.price_2=null!==t.editData.price_2?t.editData.price_2:0,t.diaLoading=!1})).catch((function(){t.diaLoading=!1}))},close:function(){this.editTitle="",this.editVisible=!1,this.editData={shipment_name:"",need_cost:!0,cost_type_code:"",shipment_code:"",value_1:1,price_1:0,value_2:1,price_2:0,rules:[]},this.$refs.edit.clearValidate(),this.needCost=!0},confirm:function(){"修改模版"===this.editTitle?this.confirmEdit():this.confirmCreate()},confirmEdit:function(){var e=this;this.$refs.edit.validate((function(t){t&&(e.btnLoading=!0,Object(s["c"])(e.editData.id,e.editData).then((function(){e.$message.success("修改成功"),e.btnLoading=!1,e.close(),e.getData()})).catch((function(){e.btnLoading=!1})))}))},confirmCreate:function(){var e=this;this.$refs.edit.validate((function(t){t&&(e.btnLoading=!0,Object(s["a"])(e.editData).then((function(){e.$message.success("创建成功"),e.btnLoading=!1,e.close(),e.getData()})).catch((function(){e.btnLoading=!1})))}))},addRule:function(){this.editData.rules.push({area:[],value_1:1,price_1:0,value_2:1,price_2:0})},delRule:function(e){this.editData.rules.splice(e,1)},handleBlur:function(e,t){"default"===e?this.editData[t]=""!==this.editData[t]?this.editData[t]:"price_1"===t||"price_2"===t?0:1:this.editData.rules[e][t]=""!==this.editData.rules[e][t]?this.editData.rules[e][t]:"price_1"===t||"price_2"===t?0:1},addPlace:function(e,t){this.current_place=e,this.selected_place=t.area,this.placeVisible=!0},closePlace:function(){this.placeVisible=!1,this.selected_place=[],this.current_place=null},confirmPlace:function(e){this.editData.rules[this.current_place].area=e,this.placeVisible=!1},copyShip:function(e){var t=this;this.$loading(),Object(s["e"])(e.id).then((function(i){var a={shipment_name:e.shipment_name+"_副本",need_cost:e.need_cost,cost_type_code:e.cost_type_code,shipment_code:e.shipment_code,value_1:e.value_1,price_1:e.price_1,value_2:e.value_2,price_2:e.price_2,rules:i.data.body.rules};Object(s["a"])(a).then((function(){t.getData(),t.$loading().close()})).catch((function(){t.$loading().close()}))})).catch((function(){t.$loading().close()}))},deleteShip:function(e){var t=this;this.$confirm("是否确认删除该模版？","提示",{confirmButtonText:"确认",cancelButtonText:"取消"}).then((function(){t.$loading(),Object(s["b"])(e.id).then((function(){t.$message.success("删除成功"),t.getData(),t.$loading().close()})).catch((function(e){t.$message.warning({message:e.response.data.message,duration:4e3}),t.$loading().close()}))})).catch((function(){}))}}},h=_,m=(i("a4ba"),Object(r["a"])(h,a,n,!1,null,"19e68711",null));t["default"]=m.exports},8418:function(e,t,i){"use strict";var a=i("c04e"),n=i("9bf2"),s=i("5c6c");e.exports=function(e,t,i){var l=a(t);l in e?n.f(e,l,s(0,i)):e[l]=i}},a434:function(e,t,i){"use strict";var a=i("23e7"),n=i("23cb"),s=i("a691"),l=i("50c4"),c=i("7b0b"),d=i("65f0"),o=i("8418"),r=i("1dde"),u=i("ae40"),p=r("splice"),_=u("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,m=Math.min,v=9007199254740991,f="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!p||!_},{splice:function(e,t){var i,a,r,u,p,_,b=c(this),g=l(b.length),y=n(e,g),x=arguments.length;if(0===x?i=a=0:1===x?(i=0,a=g-y):(i=x-2,a=m(h(s(t),0),g-y)),g+i-a>v)throw TypeError(f);for(r=d(b,a),u=0;u<a;u++)p=y+u,p in b&&o(r,u,b[p]);if(r.length=a,i<a){for(u=y;u<g-a;u++)p=u+a,_=u+i,p in b?b[_]=b[p]:delete b[_];for(u=g;u>g-a+i;u--)delete b[u-1]}else if(i>a)for(u=g-a;u>y;u--)p=u+a-1,_=u+i-1,p in b?b[_]=b[p]:delete b[_];for(u=0;u<i;u++)b[u+y]=arguments[u+2];return b.length=g-a+i,r}})},a4ba:function(e,t,i){"use strict";var a=i("e527"),n=i.n(a);n.a},cc0b:function(e,t,i){},e527:function(e,t,i){},fe27:function(e,t,i){"use strict";i.d(t,"d",(function(){return n})),i.d(t,"e",(function(){return s})),i.d(t,"c",(function(){return l})),i.d(t,"a",(function(){return c})),i.d(t,"b",(function(){return d})),i.d(t,"f",(function(){return o}));var a=i("b775");function n(){return Object(a["a"])({url:"shipment",method:"get"})}function s(e){return Object(a["a"])({url:"shipment/"+e,method:"get"})}function l(e,t){return Object(a["a"])({url:"shipment/"+e,method:"put",data:t})}function c(e){return Object(a["a"])({url:"shipment",method:"post",data:e})}function d(e){return Object(a["a"])({url:"shipment/"+e,method:"delete"})}function o(){return Object(a["a"])({url:"shipment/type",method:"get"})}}}]);