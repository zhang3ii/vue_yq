webpackJsonp([1],{"+skl":function(t,e){},K5gc:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=i("VU/8")({name:"app",data:function(){return{}}},a,!1,function(t){i("nILf")},null,null).exports,s=i("/ocq"),o=i("mtWM"),l=i.n(o),c={data:function(){return{movieList:[]}},methods:{response:function(){var t=this,e=t.$route.params.word;l.a.get("http://148.70.148.229:8003/api/report/",{params:{report_title:e}}).then(function(e){var i=e.data.data;t.movieList=i})}},created:function(){this.response()}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Card",{staticStyle:{width:"auto",margin:"0 auto"}},[i("p",{staticClass:"report_title"},[t._v("\n    舆情报告\n  ")]),t._v(" "),i("ul",t._l(t.movieList,function(e){return i("li",{staticStyle:{"list-style":"none","margin-top":"30px",padding:"10px"}},[i("div",[i("a",{staticClass:"title_css",attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.title))])]),t._v(" "),i("div",{staticClass:"digest_css"},[t._v(t._s(e.digest))]),t._v(" "),i("div",{staticClass:"source_css"},[t._v("来源:"+t._s(e.source))]),t._v(" "),i("div",{staticClass:"ReportTime_css"},[t._v("发布时间:"+t._s(e.report_time))]),t._v(" "),i("div",{staticClass:"clearfloat"})])}),0)])},staticRenderFns:[]};var u=i("VU/8")(c,d,!1,function(t){i("uKDA")},"data-v-7da5aa60",null).exports,p={data:function(){var t=this;return{search_model:"",YQcolumns:[{title:"id",key:"id",width:70},{title:"标题",key:"title"},{title:"概要",key:"digest"},{title:"来源",align:"center",key:"source",width:100},{title:"发布时间",align:"center",key:"report_time",width:100},{title:"操作",key:"action",align:"center",width:200,render:function(e,i){return e("div",[e("Button",{props:{type:"success",size:"small"},style:{marginLeft:"2px"},on:{click:function(){t.show(i.index)}}},"去原网站看看"),e("Button",{props:{type:"warning",size:"small"},style:{marginLeft:"5px"},on:{click:function(){t.collect(i.index)}}},"收藏添加")])}}],YQdata:[],pageTotal:0,page_now:1,search_source:"",ListOfsource:[]}},methods:{getData:function(){var t=this;l.a.get("http://148.70.148.229:8003/api/page/").then(function(e){var i=e.data.data;t.YQdata=i,t.pageTotal=e.data.pageNum,t.ListOfsource=e.data.source_num})},show:function(t){window.open(this.YQdata[t].url,"_blank")},collect:function(t){this.time();var e=this.YQdata[t].id;l.a.get("http://148.70.148.229:8003/api/update/",{params:{edit_id:e}}).then(function(t){})},time:function(){this.$Notice.open({title:"收藏添加完毕",desc:"已经将本文章添加至本日收藏",duration:2})},changePage:function(t){var e=this;l.a.get("http://148.70.148.229:8003/api/page/",{params:{keyword:e.search_model,pageNum:t,sourceWord:e.search_source}}).then(function(t){var i=t.data.data;e.YQdata=i})},search:function(){this.$refs.pages.currentPage=1;var t=this;l.a.get("http://148.70.148.229:8003/api/page/",{params:{keyword:t.search_model,sourceWord:t.search_source}}).then(function(e){var i=e.data.data;t.YQdata=i,t.pageTotal=e.data.pageNum})},jump_collect:function(){var t=this.$router.resolve({path:"report_list"});window.open(t.href,"_blank")}},created:function(){this.getData()}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"layout"},[i("Layout",[i("Header"),t._v(" "),i("Content",{style:{padding:"0 50px"}},[i("Card",[i("div",{staticStyle:{"min-height":"800px"}},[i("div",[i("Input",{staticStyle:{width:"400px",float:"left",margin:"auto"},attrs:{placeholder:"在此处输入进行搜索"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)}},model:{value:t.search_model,callback:function(e){t.search_model=e},expression:"search_model"}},[i("Select",{staticStyle:{width:"80px"},attrs:{slot:"prepend",clearable:""},slot:"prepend",model:{value:t.search_source,callback:function(e){t.search_source=e},expression:"search_source"}},t._l(t.ListOfsource,function(e){return i("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}),1),t._v(" "),i("Button",{attrs:{slot:"append",icon:"ios-search"},on:{click:t.search},slot:"append"})],1),t._v(" "),i("Button",{staticStyle:{float:"right"},attrs:{type:"info"},on:{click:function(e){return t.jump_collect()}}},[t._v("周报收藏")])],1),t._v(" "),i("div",{staticClass:"clearfloat"}),t._v(" "),i("div",{staticClass:"Table_data",staticStyle:{"margin-top":"20px"}},[i("Table",{ref:"table",attrs:{"no-data-text":"稍等数据正在获取",windth:"800",height:"auto",border:"",columns:t.YQcolumns,data:t.YQdata}})],1),t._v(" "),[i("Page",{ref:"pages",staticStyle:{"text-align":"center","margin-top":"20px"},attrs:{total:t.pageTotal,current:t.page_now,"prev-text":"Previous","next-text":"Next"},on:{"on-change":t.changePage}})]],2)])],1),t._v(" "),i("Footer",{staticClass:"layout-footer-center"},[t._v("BIG_DATA 舆情搜索")])],1)],1)},staticRenderFns:[]};var _=i("VU/8")(p,h,!1,function(t){i("K5gc")},"data-v-f9b2b6ea",null).exports,f={data:function(){var t=this;return{search_model:"",warning:!1,report_columns:[{title:"报告列表",align:"center",key:"collect_time"},{title:"操作",align:"center",render:function(e,i){return e("div",[e("Icon",{props:{type:"md-trash",size:30},style:{marginRight:"30px"},on:{click:function(){t.remove(i.index)}}}),e("Icon",{props:{type:"md-clipboard",size:30},style:{marginLeft:"30px"},on:{click:function(){t.jump_info(i.index)}}})])}}],report_list:[],click_num:""}},methods:{remove:function(t){this.warning=!0,this.click_num=t},jump_info:function(t){var e=this.report_list[t].collect_time,i=this.$router.resolve({path:"report/"+e});window.open(i.href,"_blank")},ok:function(){this.$Message.info("已删除");var t=this.report_list[this.click_num].collect_time;l.a.get("http://148.70.148.229:8003/api/delete_report/",{params:{collect_time:t}}).then(function(t){}),this.$router.go(0)},cancel:function(){this.$Message.info("取消了删除")},get_list:function(){var t=this;l.a.get("http://148.70.148.229:8003/api/report_list/").then(function(e){var i=e.data.report_list;t.report_list=i})}},created:function(){this.get_list()}},v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"600px",margin:"0 auto"}},[i("h1",{staticStyle:{"text-align":"center"}},[t._v("舆情报告")]),t._v(" "),i("Modal",{attrs:{scrollable:"",title:"删除提醒"},on:{"on-ok":t.ok,"on-cancel":t.cancel},model:{value:t.warning,callback:function(e){t.warning=e},expression:"warning"}},[i("div",[t._v("是否删除周报")])]),t._v(" "),i("Table",{attrs:{border:"",stripe:"",columns:t.report_columns,data:t.report_list}})],1)},staticRenderFns:[]};var m=i("VU/8")(f,v,!1,function(t){i("nSd8")},"data-v-003d105b",null).exports,g={data:function(){return{report_result:[{title:"编号",slot:"id",width:70},{title:"标题",slot:"title",align:"center"},{title:"概要",slot:"digest",align:"center"},{title:"来源",slot:"source",width:100,align:"center"},{title:"发表时间",slot:"report_time",width:100,align:"center"},{title:"文章链接",slot:"url",width:150,align:"center"},{title:"操作",slot:"action",width:180,align:"center"}],result_list:[],editIndex:-1,editID:"",editTitle:"",editDigest:"",editSource:"",editReportTime:"",editUrl:""}},methods:{response:function(){var t=this,e=t.$route.params.word;l.a.get("http://148.70.148.229:8003/api/report/",{params:{report_title:e}}).then(function(e){var i=e.data.data;t.result_list=i})},exportData:function(){var t="http://148.70.148.229/#/export/"+this.$route.params.word;window.open(t,"_blank")},handleEdit:function(t,e){this.editID=t.id,this.editTitle=t.title,this.editDigest=t.digest,this.editSource=t.source,this.editReportTime=t.report_time,this.editUrl=t.url,this.editIndex=e},handleSave:function(t){this.result_list[t].id=this.editID,this.result_list[t].title=this.editTitle,this.result_list[t].digest=this.editDigest,this.result_list[t].source=this.editSource,this.result_list[t].report_time=this.editReportTime,this.result_list[t].url=this.editUrl,this.editIndex=-1,this.update_data()},update_data:function(){l.a.get("http://148.70.148.229:8003/api/edit/",{params:{id:this.editID,title:this.editTitle,digest:this.editDigest,report_time:this.editReportTime,source:this.editSource,url:this.editUrl}}).then(function(t){})},handleDelete:function(t){l.a.get("http://148.70.148.229:8003/api/delete/",{params:{re_id:this.result_list[t].id}}).then(function(t){}),this.$router.go(0)},addData:function(){l.a.get("http://148.70.148.229:8003/api/add/",{params:{collect_time:this.$route.params.word}}).then(function(t){}),this.$router.go(0)}},created:function(){this.response()}},x={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"layout"},[i("Layout",[i("Header"),t._v(" "),i("Content",{style:{padding:"0 50px"}},[i("Card",[i("div",{staticStyle:{"min-height":"800px"}},[i("h1",{staticStyle:{"text-align":"center"}},[t._v(t._s(this.$route.params.word))]),t._v(" "),i("Button",{staticStyle:{"text-align":"right"},attrs:{type:"primary",size:"large"},on:{click:t.exportData}},[i("Icon",{attrs:{type:"ios-download-outline"}}),t._v(" 分享页面")],1),t._v(" "),i("Button",{staticStyle:{"text-align":"right"},attrs:{type:"primary",size:"large"},on:{click:t.addData}},[i("Icon",{attrs:{type:"heart"}}),t._v("新增内容")],1),t._v(" "),i("div",{staticClass:"Table_data",staticStyle:{"margin-top":"20px"}},[i("Table",{ref:"table",attrs:{border:"",stripe:"",columns:t.report_result,data:t.result_list},scopedSlots:t._u([{key:"id",fn:function(e){var n=e.row,a=e.index;return[t.editIndex===a?i("Input",{attrs:{type:"text"},model:{value:t.editID,callback:function(e){t.editID=e},expression:"editID"}}):i("span",[t._v(t._s(n.id))])]}},{key:"title",fn:function(e){var n=e.row,a=e.index;return[t.editIndex===a?i("Input",{attrs:{type:"text"},model:{value:t.editTitle,callback:function(e){t.editTitle=e},expression:"editTitle"}}):i("span",[t._v(t._s(n.title))])]}},{key:"digest",fn:function(e){var n=e.row,a=e.index;return[t.editIndex===a?i("Input",{attrs:{type:"text"},model:{value:t.editDigest,callback:function(e){t.editDigest=e},expression:"editDigest"}}):i("span",[t._v(t._s(n.digest))])]}},{key:"source",fn:function(e){var n=e.row,a=e.index;return[t.editIndex===a?i("Input",{attrs:{type:"text"},model:{value:t.editSource,callback:function(e){t.editSource=e},expression:"editSource"}}):i("span",[t._v(t._s(n.source))])]}},{key:"report_time",fn:function(e){var n=e.row,a=e.index;return[t.editIndex===a?i("Input",{attrs:{type:"text"},model:{value:t.editReportTime,callback:function(e){t.editReportTime=e},expression:"editReportTime"}}):i("span",[t._v(t._s(n.report_time))])]}},{key:"url",fn:function(e){var n=e.row,a=e.index;return[t.editIndex===a?i("Input",{attrs:{type:"text"},model:{value:t.editUrl,callback:function(e){t.editUrl=e},expression:"editUrl"}}):i("span",[t._v(t._s(n.url))])]}},{key:"action",fn:function(e){var n=e.row,a=e.index;return[t.editIndex===a?i("div",[i("Button",{on:{click:function(e){return t.handleSave(a)}}},[t._v("保存")]),t._v(" "),i("Button",{on:{click:function(e){t.editIndex=-1}}},[t._v("取消")])],1):i("div",[i("Button",{on:{click:function(e){return t.handleEdit(n,a)}}},[t._v("操作")]),t._v(" "),i("Button",{on:{click:function(e){return t.handleDelete(a)}}},[t._v("删除")])],1)]}}])})],1)],1)])],1),t._v(" "),i("Footer",{staticClass:"layout-footer-center"},[t._v("BIG_DATA 舆情搜索")])],1)],1)},staticRenderFns:[]};var y=i("VU/8")(g,x,!1,function(t){i("umwC")},"data-v-288ea535",null).exports;n.default.use(s.a);var k=new s.a({routes:[{path:"/index",name:"首页",component:_},{path:"/export/:word",name:"搜索页面",component:u},{path:"/report_list",name:"周报列表",component:m},{path:"/report/:word",name:"周报编辑页",component:y}]}),w=i("BTaQ"),b=i.n(w);i("+skl");n.default.config.productionTip=!1,n.default.use(b.a),new n.default({el:"#app",router:k,components:{App:r},template:"<App/>",render:function(t){return t(r)}})},nILf:function(t,e){},nSd8:function(t,e){},uKDA:function(t,e){},umwC:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.21194bfc9ca414b471bc.js.map