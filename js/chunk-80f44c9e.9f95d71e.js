(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-80f44c9e"],{"1f09":function(t,e,a){},3129:function(t,e,a){"use strict";a("a630"),a("c975"),a("d81d"),a("ac1f"),a("3ca3"),a("5319"),a("1276");var i=a("3835"),s=a("5530"),n=(a("1f09"),a("c995")),r=a("24b2"),o=a("7560"),l=a("58df"),c=a("80d2");e["a"]=Object(l["a"])(n["a"],r["a"],o["a"]).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,tile:Boolean,transition:String,type:String,types:{type:Object,default:function(){return{}}}},computed:{attrs:function(){return this.isLoading?this.boilerplate?{}:Object(s["a"])({"aria-busy":!0,"aria-live":"polite",role:"alert"},this.$attrs):this.$attrs},classes:function(){return Object(s["a"])(Object(s["a"])({"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile},this.themeClasses),this.elevationClasses)},isLoading:function(){return!("default"in this.$scopedSlots)||this.loading},rootTypes:function(){return Object(s["a"])({actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text"},this.types)}},methods:{genBone:function(t,e){return this.$createElement("div",{staticClass:"v-skeleton-loader__".concat(t," v-skeleton-loader__bone")},e)},genBones:function(t){var e=this,a=t.split("@"),s=Object(i["a"])(a,2),n=s[0],r=s[1],o=function(){return e.genStructure(n)};return Array.from({length:r}).map(o)},genStructure:function(t){var e=[];t=t||this.type||"";var a=this.rootTypes[t]||"";if(t===a);else{if(t.indexOf(",")>-1)return this.mapBones(t);if(t.indexOf("@")>-1)return this.genBones(t);a.indexOf(",")>-1?e=this.mapBones(a):a.indexOf("@")>-1?e=this.genBones(a):a&&e.push(this.genStructure(a))}return[this.genBone(t,e)]},genSkeleton:function(){var t=[];return this.isLoading?t.push(this.genStructure()):t.push(Object(c["s"])(this)),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{afterEnter:this.resetStyles,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,leaveCancelled:this.resetStyles}},t):t},mapBones:function(t){return t.replace(/\s/g,"").split(",").map(this.genStructure)},onBeforeEnter:function(t){this.resetStyles(t),this.isLoading&&(t._initialStyle={display:t.style.display,transition:t.style.transition},t.style.setProperty("transition","none","important"))},onBeforeLeave:function(t){t.style.setProperty("display","none","important")},resetStyles:function(t){t._initialStyle&&(t.style.display=t._initialStyle.display||"",t.style.transition=t._initialStyle.transition,delete t._initialStyle)}},render:function(t){return t("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}})},"5e23":function(t,e,a){},6724:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{id:"statistics_t",fluid:"",tag:"section"}},[t.flag17?[a("v-row",[a("v-tabs",{model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.times,(function(e,i){return a("v-tab",{key:i,attrs:{href:"#tab-"+i},on:{click:function(e){return t.change(i)}}},[t._v(t._s(e))])})),1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",md:"3"}},[a("v-card",{staticClass:"mx-auto",attrs:{height:"510px"}},[a("v-toolbar",{attrs:{color:"primary"}},[a("v-text-field",{staticStyle:{"margin-top":"8px"},attrs:{label:"搜索",color:"black","hide-details":""},scopedSlots:t._u([{key:"append-outer",fn:function(){return[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,s=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"mt-n2",attrs:{elevation:"1",fab:"",small:""}},"v-btn",s,!1),i),[a("v-icon",[t._v("mdi-magnify")])],1)]}}])},[a("span",[t._v("搜索")])])]},proxy:!0}])})],1),a("v-list",{attrs:{"two-line":""}},[a("v-list-item-group",{attrs:{color:"primary"},model:{value:t.pk,callback:function(e){t.pk=e},expression:"pk"}},[t._l(t.classes,(function(e,i){return[a("v-list-item",{key:i,attrs:{height:"70px"},on:{click:function(e){return t.choose(i)}}},[a("v-list-item-content",[a("v-list-item-title",{domProps:{innerHTML:t._s(e)}})],1)],1),i!=t.classes.length?a("v-divider",{key:i}):t._e()]}))],2)],1)],1)],1),a("v-col",{attrs:{cols:"12",md:"9"}},[a("base-material-card",{staticClass:"px-5 py-3",attrs:{color:"warning",height:"510px"},scopedSlots:t._u([{key:"heading",fn:function(){return[a("div",{staticClass:"display-2 font-weight-light"},[t._v(" 天梯榜 ")]),a("div",{staticClass:"subtitle-1 font-weight-light"},[t._v(" 默认以月学习时长排名 ")])]},proxy:!0}])},[a("v-card-text",[a("v-data-table",{attrs:{headers:t.headers,items:t.items}})],1)],1)],1)],1)]:[a("v-skeleton-loader",t._b({attrs:{type:"article, actions",height:"500px"}},"v-skeleton-loader",t.attrs,!1))]],2)},s=[],n=(a("b0c0"),a("b680"),a("d3b7"),a("25f0"),{name:"statistics_t",data:function(){return{model:"tab-2",flag17:!1,current_class_id:"",headers:[{sortable:!1,text:"学号",value:"student_number"},{sortable:!1,text:"姓名",value:"name"},{sortable:!0,text:"学习时长",value:"train_time",align:"right"},{sortable:!0,text:"题量",value:"practice_num",align:"right"},{sortable:!0,text:"正确率",value:"accuracy",align:"middle"}],rank_list:[],flag15:!1,items:[{student_number:1,name:"李华",train_time:30,practice_num:1,accuracy:22},{student_number:2,name:"张华",train_time:30,practice_num:30,accuracy:75},{student_number:3,name:"小刘",train_time:22,practice_num:15,accuracy:75},{student_number:4,name:"小润",train_time:30,practice_num:40,accuracy:65},{student_number:5,name:"小泽",train_time:23,practice_num:30,accuracy:50}],pk:0,key:0,times:["本日","最近一周","最近一个月","最近一年"],statistic_time:"month",s_items:["day","week","month","year"]}},created:function(){var t=this;t.get_classes_id(),t.classes=t.$global.userMsg.classes,setTimeout((function(){for(var e=0;e<t.rank_list.length;e++)"month"==t.statistic_time?(t.items[e].student_number=t.rank_list[e].student_number,t.items[e].name=t.rank_list[e].name,t.items[e].train_time=t.rank_list[e].train_time_lastmonth,t.items[e].practice_num=t.rank_list[e].train_questions_lastmonth,t.items[e].accuracy=t.rank_list[e].accuracy_lastmonth.toFixed(1).toString()+"%"):"week"==t.statistic_time?(t.items[e].student_number=t.rank_list[e].student_number,t.items[e].name=t.rank_list[e].name,t.items[e].train_time=t.rank_list[e].train_time_lastweek,t.items[e].practice_num=t.rank_list[e].train_questions_lastweek,t.items[e].accuracy=t.rank_list[e].accuracy_lastweek.toFixed(1).toString()+"%"):"day"==t.statistic_time?(t.items[e].student_number=t.rank_list[e].student_number,t.items[e].name=t.rank_list[e].name,t.items[e].train_time=t.rank_list[e].train_time_lastday,t.items[e].practice_num=t.rank_list[e].train_questions_lastday,t.items[e].accuracy=t.rank_list[e].accuracy_lastday.toFixed(1).toString()+"%"):"year"==t.statistic_time&&(t.items[e].student_number=t.rank_list[e].student_number,t.items[e].name=t.rank_list[e].name,t.items[e].train_time=t.rank_list[e].train_time_lastyear,t.items[e].practice_num=t.rank_list[e].train_questions_lastyear,t.items[e].accuracy=t.rank_list[e].accuracy_lastyear.toFixed(1).toString()+"%");setTimeout((function(){t.flag17=!0,t.$forceUpdate()}),6e3)}),500)},methods:{get_Info:function(){var t=this;this.$axios({method:"get",url:"/api/get_static_info_by_class/",params:{id:t.current_class_id}}).then((function(e){0==e.data.error_num?(console.log(e.data),t.rank_list=e.data.rank_list.reverse()):alert("查询失败！")}))},get_classes_id:function(){var t=this;this.$axios({method:"get",url:"/api/get_classes_id/",params:{id:t.$global.userMsg.id}}).then((function(e){0==e.data.error_num?(console.log(e.data),t.classes_id=e.data.classes_id,t.current_class_id=t.classes_id[0],t.get_Info()):alert("查询失败！")}))},choose:function(t){var e=this;this.current_class_id=this.classes_id[t],setTimeout((function(){e.get_Info()}),300)},change:function(t){var e=this;this.statistic_time=this.s_items[t],console.log("statistic_time = ",this.statistic_time),setTimeout((function(){for(var t=0;t<e.rank_list.length;t++)"month"==e.statistic_time?(e.items[t].student_number=e.rank_list[t].student_number,e.items[t].name=e.rank_list[t].name,e.items[t].train_time=e.rank_list[t].train_time_lastmonth,e.items[t].practice_num=e.rank_list[t].train_questions_lastmonth,e.items[t].accuracy=e.rank_list[t].accuracy_lastmonth.toFixed(1).toString()+"%"):"week"==e.statistic_time?(e.items[t].student_number=e.rank_list[t].student_number,e.items[t].name=e.rank_list[t].name,e.items[t].train_time=e.rank_list[t].train_time_lastweek,e.items[t].practice_num=e.rank_list[t].train_questions_lastweek,e.items[t].accuracy=e.rank_list[t].accuracy_lastweek.toFixed(1).toString()+"%"):"day"==e.statistic_time?(e.items[t].student_number=e.rank_list[t].student_number,e.items[t].name=e.rank_list[t].name,e.items[t].train_time=e.rank_list[t].train_time_lastday,e.items[t].practice_num=e.rank_list[t].train_questions_lastday,e.items[t].accuracy=e.rank_list[t].accuracy_lastday.toFixed(1).toString()+"%"):"year"==e.statistic_time&&(e.items[t].student_number=e.rank_list[t].student_number,e.items[t].name=e.rank_list[t].name,e.items[t].train_time=e.rank_list[t].train_time_lastyear,e.items[t].practice_num=e.rank_list[t].train_questions_lastyear,e.items[t].accuracy=e.rank_list[t].accuracy_lastyear.toFixed(1).toString()+"%");setTimeout((function(){e.$forceUpdate()}),6e3)}),200)}}}),r=n,o=a("2877"),l=a("6544"),c=a.n(l),u=a("8336"),d=a("b0af"),m=a("99d9"),h=a("62ad"),_=a("a523"),p=a("8fea"),b=a("ce7e"),f=a("132d"),g=a("8860"),v=a("da13"),y=a("5d23"),k=a("1baa"),x=a("0fd9b"),S=a("3129"),O=a("71a3"),j=a("fe57"),w=a("8654"),C=a("71d9"),$=a("3a2f"),B=Object(o["a"])(r,i,s,!1,null,null,null);e["default"]=B.exports;c()(B,{VBtn:u["a"],VCard:d["a"],VCardText:m["c"],VCol:h["a"],VContainer:_["a"],VDataTable:p["a"],VDivider:b["a"],VIcon:f["a"],VList:g["a"],VListItem:v["a"],VListItemContent:y["a"],VListItemGroup:k["a"],VListItemTitle:y["c"],VRow:x["a"],VSkeletonLoader:S["a"],VTab:O["a"],VTabs:j["a"],VTextField:w["a"],VToolbar:C["a"],VTooltip:$["a"]})},"71a3":function(t,e,a){"use strict";a("c975"),a("ac1f"),a("5319");var i=a("5530"),s=a("4e82"),n=a("1c87"),r=a("7560"),o=a("80d2"),l=a("58df"),c=Object(l["a"])(n["a"],Object(s["a"])("tabsBar"),r["a"]);e["a"]=c.extend().extend().extend({name:"v-tab",props:{ripple:{type:[Boolean,Object],default:!0}},data:function(){return{proxyClass:"v-tab--active"}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({"v-tab":!0},n["a"].options.computed.classes.call(this)),{},{"v-tab--disabled":this.disabled},this.groupClasses)},value:function(){var t=this.to||this.href||"";if(this.$router&&this.to===Object(this.to)){var e=this.$router.resolve(this.to,this.$route,this.append);t=e.href}return t.replace("#","")}},mounted:function(){this.onRouteChange()},methods:{click:function(t){this.href&&this.href.indexOf("#")>-1&&t.preventDefault(),t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()}},render:function(t){var e=this,a=this.generateRouteLink(),s=a.tag,n=a.data;return n.attrs=Object(i["a"])(Object(i["a"])({},n.attrs),{},{"aria-selected":String(this.isActive),role:"tab",tabindex:0}),n.on=Object(i["a"])(Object(i["a"])({},n.on),{},{keydown:function(t){t.keyCode===o["y"].enter&&e.click(t),e.$emit("keydown",t)}}),t(s,n,this.$slots.default)}})},"71d9":function(t,e,a){"use strict";a("0481"),a("4160"),a("4069"),a("a9e3");var i=a("3835"),s=a("5530"),n=(a("5e23"),a("8dd9")),r=a("adda"),o=a("80d2"),l=a("d9bd");e["a"]=n["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Object(s["a"])(Object(s["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Object(s["a"])(Object(s["a"])({},this.measurableStyles),{},{height:Object(o["g"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var a=Object(i["a"])(e,2),s=a[0],n=a[1];t.$attrs.hasOwnProperty(s)&&Object(l["a"])(s,n,t)}))},methods:{genBackground:function(){var t={height:Object(o["g"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(r["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(o["g"])(this.computedContentHeight)}},Object(o["s"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(o["g"])(this.extensionHeight)}},Object(o["s"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],a=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,a,e)}})}}]);
//# sourceMappingURL=chunk-80f44c9e.9f95d71e.js.map