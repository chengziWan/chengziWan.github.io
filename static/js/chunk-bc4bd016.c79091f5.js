(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bc4bd016"],{"18a3":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("b775");function r(){return Object(a["a"])({url:"/dataUploadList",method:"get"})}},"841a":function(e,t,n){},a842:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[e._m(0),e._v(" "),n("aside",[n("strong",[e._v("分类上传")]),e._v(" "),n("DataTypeOption",{staticStyle:{"margin-left":"80px"},model:{value:e.dataType,callback:function(t){e.dataType=t},expression:"dataType"}}),e._v(" "),n("el-button",{attrs:{type:"primary",icon:"el-icon-upload"},on:{click:function(t){e.imagecropperShow=!0}}},[e._v("\n        上传\n      ")])],1),e._v(" "),n("aside",[n("strong",[e._v("打包上传")]),e._v(" "),n("el-button",{staticStyle:{"margin-left":"377px"},attrs:{type:"primary",icon:"el-icon-upload"},on:{click:function(t){e.imagecropperShow=!0}}},[e._v("\n        上传\n      ")])],1),e._v(" "),n("image-cropper",{directives:[{name:"show",rawName:"v-show",value:e.imagecropperShow,expression:"imagecropperShow"}],key:e.imagecropperKey,attrs:{width:300,height:300,url:"https://httpbin.org/post","lang-type":"en"},on:{close:e.close,"crop-upload-success":e.cropSuccess}}),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"拼命加载中",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"序号",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.$index+1)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"银行名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.bank_name)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"数据类型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.dataType)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"上传人",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.usrName)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"上传时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("i",{staticClass:"el-icon-time"}),e._v(" "),n("span",[e._v(e._s(e._f("parseTime")(t.row.timestamp,"{y}-{m}-{d} {h}:{i}:{s}")))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.status)+"\n      ")]}}])})],1)],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("aside",[n("strong",[e._v("提示：")]),e._v(" 分类上传请先选择数据类型\n      ")])}],i=(n("96cf"),n("3b8d")),o=n("896b"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{display:"inline-block"}},[n("label",{staticClass:"radio-label"},[e._v("数据类型: ")]),e._v(" "),n("el-select",{staticStyle:{width:"220px"},model:{value:e.dataType,callback:function(t){e.dataType=t},expression:"dataType"}},e._l(e.options,(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1)},s=[],c={props:{value:{type:String,default:"xlsx"}},data:function(){return{options:["存量个人客户信息表","存量单位客户信息表","等"]}},computed:{dataType:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},u=c,p=n("2877"),d=Object(p["a"])(u,l,s,!1,null,null,null),f=d.exports,m=n("18a3"),v={name:"AvatarUploadDemo",components:{ImageCropper:o["a"],DataTypeOption:f},data:function(){return{imagecropperShow:!1,imagecropperKey:0,dataType:"请选择",list:[],listLoading:!0,autoWidth:!0}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.listLoading=!0,e.next=3,Object(m["a"])();case 3:t=e.sent,this.list=t.data,this.listLoading=!1;case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),cropSuccess:function(e){this.imagecropperShow=!1,this.imagecropperKey=this.imagecropperKey+1},close:function(){this.imagecropperShow=!1}}},_=v,h=(n("c8a5"),Object(p["a"])(_,a,r,!1,null,"62b6db6d",null));t["default"]=h.exports},c8a5:function(e,t,n){"use strict";var a=n("841a"),r=n.n(a);r.a}}]);