(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dashboard"],{"0bd5":function(t,e,a){},"36e8":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",[a("div",{staticClass:"layout row ma-0 justify-space-between pb-1"},[a("div",{staticClass:"subheading"},[t._v(t._s(t.title))]),a("div",{staticClass:"icon"},[a("v-icon",{attrs:{mini:"",color:t.color}},[t._v(t._s(t.icon))])],1)])]),a("v-card-text",{staticClass:"pt-2"},[a("h3",{staticClass:"headline"},[t._v(t._s(t.subTitle))]),a("v-progress-linear",{attrs:{value:t.value,height:"5",color:t.color}}),a("span",{staticClass:"caption"},[t._v(t._s(t.caption))])],1)],1)},s=[],r=(a("c5f6"),{props:{icon:String,title:String,subTitle:String,value:Number,color:String},computed:{caption:function(){return this.value+"% "+this.subTitle}}}),l=r,n=a("2877"),o=a("6544"),c=a.n(o),d=a("b0af"),v=a("99d9"),u=a("12b2"),h=a("132d"),p=a("8e36"),f=Object(n["a"])(l,i,s,!1,null,null,null);e["a"]=f.exports;c()(f,{VCard:d["a"],VCardText:v["b"],VCardTitle:u["a"],VIcon:h["a"],VProgressLinear:p["a"]})},"386b":function(t,e,a){var i=a("5ca1"),s=a("79e5"),r=a("be13"),l=/"/g,n=function(t,e,a,i){var s=String(r(t)),n="<"+e;return""!==a&&(n+=" "+a+'="'+String(i).replace(l,"&quot;")+'"'),n+">"+s+"</"+e+">"};t.exports=function(t,e){var a={};a[t]=e(n),i(i.P+i.F*s(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",a)}},"3abd":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-toolbar",{attrs:{card:"",dense:"",color:"transparent"}},[a("v-toolbar-title",[a("h4",[t._v("Project")])]),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("more_vert")])],1)],1),a("v-divider"),a("v-card-text",{staticClass:"pa-0"},[[a("v-data-table",{staticClass:"elevation-0",attrs:{headers:t.headers,items:t.projects,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",[a("v-avatar",{attrs:{size:"36px"}},[a("img",{attrs:{src:e.item.avatar,alt:e.item.username}})])],1),a("td",[t._v(t._s(e.item.name))]),a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.deadline))]),a("td",{staticClass:"text-xs-left"},[a("v-progress-linear",{attrs:{value:e.item.progress,height:"5",color:e.item.color}})],1),a("td",{staticClass:"text-xs-right"},[a("v-btn",{attrs:{flat:"",icon:"",color:"grey"}},[a("v-icon",[t._v("edit")])],1),a("v-btn",{attrs:{flat:"",icon:"",color:"grey"}},[a("v-icon",[t._v("delete")])],1)],1)]}}])})],a("v-divider")],2)],1)},s=[],r=a("24d2"),l={data:function(){return{headers:[{text:"",align:"center",sortable:!1,value:"avatar"},{text:"Name",align:"left",value:"name"},{text:"Deadline",value:"deadline"},{text:"Progress",value:"progress"},{text:"Action",value:"action",align:"right"}]}},computed:{projects:function(){return r["a"]}}},n=l,o=a("2877"),c=a("6544"),d=a.n(c),v=a("8212"),u=a("8336"),h=a("b0af"),p=a("99d9"),f=a("8fea"),m=a("ce7e"),g=a("132d"),b=a("8e36"),_=a("9910"),x=a("71d9"),C=a("2a7f"),y=Object(o["a"])(n,i,s,!1,null,null,null);e["a"]=y.exports;d()(y,{VAvatar:v["a"],VBtn:u["a"],VCard:h["a"],VCardText:p["b"],VDataTable:f["a"],VDivider:m["a"],VIcon:g["a"],VProgressLinear:b["a"],VSpacer:_["a"],VToolbar:x["a"],VToolbarTitle:C["b"]})},"428a":function(t,e,a){"use strict";a("f386"),a("614c");var i=a("a608"),s=a.n(i);e["a"]={mixins:[s.a],props:{text:String,small:Boolean,large:Boolean,medium:Boolean,dot:Boolean,pill:Boolean,ring:Boolean},computed:{classes:function(){var t={"circle-sm":this.small,"circle-lg":this.medium,"circle-xl":this.large,"circle-ring":this.ring,"circle-dot":this.dot,"circle-pill":this.pill,"theme--light":this.light,"theme--dark":this.dark};return t}},render:function(t){var e={staticClass:"circle",class:this.classes,attrs:{tabindex:this.disabled?-1:0},on:this.$listeners};return t("span",e,[this.$slots.default])}}},"4f16":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-text",{staticClass:"pa-0"},[a("v-container",{staticClass:"pa-0"},[a("div",{staticClass:"layout row ma-0"},[a("div",{staticClass:"sm6 xs6 flex"},[a("div",{staticClass:"layout column ma-0 justify-center align-center"},[a("v-icon",{attrs:{size:"56px",color:t.color}},[t._v(t._s(t.icon))])],1)]),a("div",{staticClass:"sm6 xs6 flex text-sm-center py-3 white--text",class:t.color},[a("div",{staticClass:"headline"},[t._v(t._s(t.title))]),a("span",{staticClass:"caption"},[t._v(t._s(t.subTitle))])])])])],1)],1)},s=[],r={props:{icon:String,title:String,subTitle:String,color:String}},l=r,n=a("2877"),o=a("6544"),c=a.n(o),d=a("b0af"),v=a("99d9"),u=a("a523"),h=a("132d"),p=Object(n["a"])(l,i,s,!1,null,null,null);e["a"]=p.exports;c()(p,{VCard:d["a"],VCardText:v["b"],VContainer:u["a"],VIcon:h["a"]})},"60e8":function(t,e,a){},"614c":function(t,e,a){},7277:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"pageDashboard"}},[a("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{lg3:"",sm6:"",xs12:""}},[a("mini-statistic",{attrs:{icon:"fa fa-facebook",title:"100+","sub-title":"Likes",color:"indigo"}})],1),a("v-flex",{attrs:{lg3:"",sm6:"",xs12:""}},[a("mini-statistic",{attrs:{icon:"fa fa-google",title:"150+","sub-title":"Connections",color:"red"}})],1),a("v-flex",{attrs:{lg3:"",sm6:"",xs12:""}},[a("mini-statistic",{attrs:{icon:"fa fa-twitter",title:"200+","sub-title":"Followers",color:"light-blue"}})],1),a("v-flex",{attrs:{lg3:"",sm6:"",xs12:""}},[a("mini-statistic",{attrs:{icon:"fa fa-instagram",title:"50+","sub-title":"Shots",color:"purple"}})],1),a("v-flex",{attrs:{lg8:"",sm12:"",xs12:""}},[a("v-widget",{attrs:{title:"Site Traffic","content-bg":"white"}},[a("v-btn",{attrs:{slot:"widget-header-action",icon:""},slot:"widget-header-action"},[a("v-icon",{staticClass:"text--secondary"},[t._v("refresh")])],1),a("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[a("e-chart",{attrs:{"path-option":[["dataset.source",t.siteTrafficData],["color",[t.color.lightBlue.base,t.color.green.lighten1]],["legend.show",!0],["xAxis.axisLabel.show",!0],["yAxis.axisLabel.show",!0],["grid.left","2%"],["grid.bottom","5%"],["grid.right","3%"],["series[0].type","bar"],["series[0].areaStyle",{}],["series[0].smooth",!0],["series[1].smooth",!0],["series[1].type","bar"],["series[1].areaStyle",{}]],height:"400px",width:"100%"}})],1)],1)],1),a("v-flex",{attrs:{lg4:"",sm12:"",xs12:""}},[a("v-widget",{attrs:{title:"Top Location","content-bg":"white"}},[a("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[a("e-chart",{attrs:{"path-option":[["dataset.source",t.locationData],["legend.bottom","0"],["color",[t.color.lightBlue.base,t.color.indigo.base,t.color.pink.base,t.color.green.base,t.color.cyan.base,t.color.teal.base]],["xAxis.show",!1],["yAxis.show",!1],["series[0].type","pie"],["series[0].avoidLabelOverlap",!0],["series[0].radius",["50%","70%"]]],height:"400px",width:"100%"}})],1)])],1),a("v-flex",{attrs:{lg4:"",sm12:"",xs12:""}},[a("profile-card")],1),a("v-flex",{attrs:{lg4:"",sm12:"",xs12:""}},[a("box-chart",{attrs:{"card-color":"indigo",title:"Trending","sub-title":"10%",icon:"trending_up",data:t.siteTrafficData,"chart-color":[t.color.indigo.lighten1],type:"line"}}),a("box-chart",{staticClass:"mt-4",attrs:{"card-color":"pink",title:"Page views","sub-title":"10%",icon:"trending_up",data:t.siteTrafficData,"chart-color":[t.color.pink.darken1,"rgba(255,255,255,0.3)"],gradient:"",type:"area"}})],1),a("v-flex",{attrs:{lg4:"",sm12:"",xs12:""}},[a("linear-statistic",{attrs:{title:"Sales","sub-title":"Sales increase",icon:"trending_up",color:"success",value:15}}),a("linear-statistic",{staticClass:"my-4",attrs:{title:"Orders","sub-title":"Increase",icon:"trending_up",color:"pink",value:30}}),a("linear-statistic",{staticClass:"my-4",attrs:{title:"Revenue","sub-title":"Revenue increase",icon:"trending_up",color:"primary",value:50}}),a("linear-statistic",{staticClass:"mt-4",attrs:{title:"Cost","sub-title":"Cost reduce",icon:"trending_down",color:"orange",value:25}})],1),t._l(t.trending,function(t,e){return a("v-flex",{key:"c-trending"+e,attrs:{lg4:"",sm12:"",xs12:""}},[a("circle-statistic",{attrs:{title:t.subheading,"sub-title":t.headline,caption:t.caption,icon:t.icon.label,color:t.linear.color,value:t.linear.value}})],1)}),a("v-flex",{attrs:{lg6:"",sm12:"",xs12:""}},[a("chat-window",{attrs:{height:"308px"}})],1),a("v-flex",{attrs:{lg6:"",sm12:"",xs12:""}},[a("v-widget",{attrs:{title:"Activities","content-bg":"white"}},[a("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[a("ol",{staticClass:"timeline timeline-activity timeline-point-sm timeline-content-right"},t._l(t.activity,function(e,i){return a("li",{key:i,staticClass:"timeline-block"},[a("div",{staticClass:"timeline-point"},[a("v-circle",{attrs:{dot:"",large:"",color:e.color}})],1),a("div",{staticClass:"timeline-content"},[a("time",{staticClass:"subheading",attrs:{datetime:"2018"}},[t._v(t._s(e.timeString))]),a("div",{staticClass:"py-2 text--secondary",domProps:{innerHTML:t._s(e.text)}})])])}),0)])])],1),a("v-flex",{attrs:{lg7:"",sm12:"",xs12:""}},[a("plain-table")],1),a("v-flex",{attrs:{lg5:"",sm12:"",xs12:""}},[a("plain-table-order")],1)],2)],1)],1)},s=[],r=a("365c"),l=a("1cc5"),n=a("4f16"),o=a("8f2d"),c=a("f513"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-responsive",{staticClass:"white--text",attrs:{src:"/static/nature/n3.jpeg",height:t.imageHeight}},[a("v-layout",{staticClass:"ma-0",attrs:{row:"","justify-space-between":""}},[a("v-flex",{attrs:{xs2:""}},[a("v-icon",{attrs:{color:"white"}},[t._v("favorite")])],1),a("v-flex",{staticClass:"text-sm-right",attrs:{xs2:""}},[a("v-icon",{attrs:{color:"white"}},[t._v("share")])],1)],1)],1),a("v-card-text",[a("div",{staticClass:"post--item"},[a("div",{staticClass:"post--title"},[a("h3",{staticClass:"title"},[t._v(t._s(t.title))])]),a("div",{staticClass:"post--meta grey--text text--darken-1 caption my-3"},[a("span",{staticClass:"mr-3"},[t._v(t._s(t.author))]),a("time",[t._v(t._s(t.createdAt))])]),a("div",{staticClass:"post--desc text--secondary"},[t._v("\n        "+t._s(t.desc)+"\n      ")]),a("div",{staticClass:"post--action align-center justify-space-between mt-2"},[a("div",{staticClass:"social"},[a("a",{staticClass:"grey--text",on:{click:t.handleThumb}},[a("v-icon",{attrs:{small:""}},[t._v("thumb_up")]),a("small",[t._v("100+")])],1),a("a",{staticClass:"grey--text mx-3",on:{click:t.handleComment}},[a("v-icon",{attrs:{small:""}},[t._v("mode_comment")]),a("small",[t._v("12+")])],1),a("a",{staticClass:"grey--text ",on:{click:t.handleFavorite}},[a("v-icon",{attrs:{small:""}},[t._v("favorite")]),a("small",[t._v("50+")])],1)]),a("v-btn",{attrs:{outline:"",flat:"",color:"primary"}},[t._v("\n          More\n        ")])],1)])]),a("v-divider"),a("v-toolbar",{attrs:{card:"",color:"white"}},[a("v-text-field",{attrs:{flat:"",solo:"",label:"Comment here","append-icon":"photo_camera","hide-details":""}})],1)],1)},v=[],u=(a("c5f6"),{props:{featuredImage:{type:String},imageHeight:{type:[String,Number],default:"350"},author:{type:String},title:{type:String},desc:{type:String},createdAt:{type:String}},methods:{handleThumb:function(){},handleComment:function(){},handleFavorite:function(){}}}),h=u,p=a("2877"),f=a("6544"),m=a.n(f),g=a("8336"),b=a("b0af"),_=a("99d9"),x=a("ce7e"),C=a("0e8f"),y=a("132d"),V=a("a722"),w=a("6b53"),T=a("2677"),S=a("71d9"),k=Object(p["a"])(h,d,v,!1,null,null,null),j=k.exports;m()(k,{VBtn:g["a"],VCard:b["a"],VCardText:_["b"],VDivider:x["a"],VFlex:C["a"],VIcon:y["a"],VLayout:V["a"],VResponsive:w["a"],VTextField:T["a"],VToolbar:S["a"]});var L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-responsive",{attrs:{src:"/static/nature/n5.jpeg",height:"350"}},[a("v-layout",{staticClass:"media ma-0",attrs:{column:""}},[a("v-card-title",[a("v-btn",{attrs:{dark:"",icon:""}},[a("v-icon",[t._v("chevron_left")])],1),a("v-spacer"),a("v-btn",{staticClass:"mr-3",attrs:{dark:"",icon:""}},[a("v-icon",[t._v("edit")])],1),a("v-btn",{attrs:{dark:"",icon:""}},[a("v-icon",[t._v("more_vert")])],1)],1),a("v-spacer"),a("v-card-title",{staticClass:"white--text pl-5 pt-5"},[a("div",{staticClass:"display-1 pl-5 pt-5"},[t._v("Ali Conners")])])],1)],1),a("v-list",{attrs:{"two-line":""}},[a("v-list-tile",{attrs:{href:"#"}},[a("v-list-tile-content",[a("v-list-tile-title",[t._v("Monday")])],1)],1),a("v-list-tile",{attrs:{href:"#"}},[a("v-list-tile-action"),a("v-list-tile-content",[a("v-list-tile-title",[t._v("(323) 555-6789")]),a("v-list-tile-sub-title",[t._v("Work")])],1),a("v-list-tile-action",[a("v-icon",[t._v("chat")])],1)],1),a("v-divider",{attrs:{inset:""}}),a("v-list-tile",{attrs:{href:"#"}},[a("v-list-tile-action",[a("v-icon",{attrs:{color:"indigo"}},[t._v("mail")])],1),a("v-list-tile-content",[a("v-list-tile-title",[t._v("aliconnors@example.com")]),a("v-list-tile-sub-title",[t._v("Personal")])],1)],1),a("v-list-tile",{attrs:{href:"#"}},[a("v-list-tile-action"),a("v-list-tile-content",[a("v-list-tile-title",[t._v("ali_connors@example.com")]),a("v-list-tile-sub-title",[t._v("Work")])],1)],1),a("v-divider",{attrs:{inset:""}}),a("v-list-tile",{attrs:{href:"#"}},[a("v-list-tile-action",[a("v-icon",{attrs:{color:"indigo"}},[t._v("location_on")])],1),a("v-list-tile-content",[a("v-list-tile-title",[t._v("1400 Main Street")]),a("v-list-tile-sub-title",[t._v("Orlando, FL 79938")])],1)],1)],1)],1)},O=[],A={},P=A,I=a("12b2"),B=a("8860"),D=a("ba95"),$=a("40fe"),E=a("5d23"),M=a("9910"),F=Object(p["a"])(P,L,O,!1,null,null,null),W=F.exports;m()(F,{VBtn:g["a"],VCard:b["a"],VCardTitle:I["a"],VDivider:x["a"],VIcon:y["a"],VLayout:V["a"],VList:B["a"],VListTile:D["a"],VListTileAction:$["a"],VListTileContent:E["b"],VListTileSubTitle:E["c"],VListTileTitle:E["d"],VResponsive:w["a"],VSpacer:M["a"]});var z=a("3abd"),N=a("7810"),R=a("129e"),H=a("c0a4"),Y=a.n(H),q=a("428a"),G=a("153c"),J=a("9d8c"),X=a("edcb"),Z=a("36e8"),K={components:{VWidget:R["a"],MiniStatistic:n["a"],ChatWindow:J["a"],VCircle:q["a"],WeatherCard:W,PostSingleCard:j,PostListCard:o["a"],ProfileCard:c["a"],EChart:l["a"],BoxChart:G["a"],CircleStatistic:X["a"],LinearStatistic:Z["a"],PlainTable:z["a"],PlainTableOrder:N["a"]},data:function(){return{color:Y.a,selectedTab:"tab-1",linearTrending:[{subheading:"Sales",headline:"2,55",caption:"increase",percent:15,icon:{label:"trending_up",color:"success"},linear:{value:15,color:"success"}},{subheading:"Revenue",headline:"6,553",caption:"increase",percent:10,icon:{label:"trending_down",color:"error"},linear:{value:15,color:"error"}},{subheading:"Orders",headline:"5,00",caption:"increase",percent:50,icon:{label:"arrow_upward",color:"info"},linear:{value:50,color:"info"}}],trending:[{subheading:"Email",headline:"15+",caption:"email opens",percent:15,icon:{label:"email",color:"info"},linear:{value:15,color:"info"}},{subheading:"Tasks",headline:"90%",caption:"tasks completed.",percent:90,icon:{label:"list",color:"primary"},linear:{value:90,color:"success"}},{subheading:"Issues",headline:"100%",caption:"issues fixed.",percent:100,icon:{label:"bug_report",color:"primary"},linear:{value:100,color:"error"}}]}},computed:{activity:function(){return r["a"].getActivity()},posts:function(){return r["a"].getPost(3)},siteTrafficData:function(){return r["a"].getMonthVisit},locationData:function(){return r["a"].getLocation}}},Q=K,U=a("a523"),tt=Object(p["a"])(Q,i,s,!1,null,null,null);e["default"]=tt.exports;m()(tt,{VBtn:g["a"],VContainer:U["a"],VFlex:C["a"],VIcon:y["a"],VLayout:V["a"]})},7810:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-toolbar",{attrs:{card:"",dense:"",color:"transparent"}},[a("v-toolbar-title",[a("h4",[t._v("Order")])]),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("more_vert")])],1)],1),a("v-divider"),a("v-card-text",{staticClass:"pa-0"},[[a("v-data-table",{staticClass:"elevation-0 table-striped",attrs:{headers:t.headers,items:t.items,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",[t._v(t._s(e.item.id))]),a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.product))]),a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.price))]),a("td",{staticClass:"text-xs-left"},[a("v-chip",{attrs:{label:"",small:"",color:t.getColorByStatus(e.item.status),"text-color":"white"}},[t._v(t._s(e.item.status))])],1)]}}])})],a("v-divider")],2)],1)},s=[],r=[{id:"150",product:"iPhone6",price:"$699",status:"processing"},{id:"151",product:"iPad Pro",price:"$299",status:"sent"},{id:"300",product:"Microsoft surface",price:"$1,699",status:"processing"},{id:"320",product:"Galaxy S7 edge",price:"$729",status:"processing"},{id:"501",product:"128G SD Card",price:"$699",status:"delivered"}],l={data:function(){return{headers:[{text:"#",align:"left",sortable:!1,value:"id"},{text:"Product",value:"deadline"},{text:"Price",value:"progress"},{text:"Status",value:"status"}],items:r,colors:{processing:"blue",sent:"red",delivered:"green"}}},computed:{randomColor:function(){var t=Math.floor(Math.random()*this.colors.length);return this.colors[t]}},methods:{getColorByStatus:function(t){return this.colors[t]}}},n=l,o=a("2877"),c=a("6544"),d=a.n(c),v=a("8336"),u=a("b0af"),h=a("99d9"),p=a("cc20"),f=a("8fea"),m=a("ce7e"),g=a("132d"),b=a("9910"),_=a("71d9"),x=a("2a7f"),C=Object(o["a"])(n,i,s,!1,null,null,null);e["a"]=C.exports;d()(C,{VBtn:v["a"],VCard:u["a"],VCardText:h["b"],VChip:p["a"],VDataTable:f["a"],VDivider:m["a"],VIcon:g["a"],VSpacer:b["a"],VToolbar:_["a"],VToolbarTitle:x["b"]})},"8f2d":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"post-card"},[a("v-toolbar",{attrs:{color:"transparent",flat:"",dense:"",card:""}},[a("v-toolbar-title",{staticClass:"subheading ft-200"},[t._v("Recent Posts")]),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",{staticClass:"text--secondary"},[t._v("more_vert")])],1)],1),a("v-divider"),a("v-card-text",{staticClass:"pa-0"},[a("ul",{staticClass:"post--list flex-list vertical"},t._l(t.items,function(e,i){return a("li",{key:i,staticClass:"post--item"},[a("a",{staticClass:" post--link pa-4 layout row ma-0 text--primary",attrs:{href:"#"}},[a("div",{staticClass:"post--media"},[a("img",{staticClass:"image-scale",attrs:{src:e.featuredImage,alt:"",height:"100"}})]),a("div",{staticClass:"post--content ml-3"},[a("h3",{staticClass:"title post--title"},[t._v("\n              "+t._s(e.title)+"\n            ")]),a("div",{staticClass:"post--desc py-2 text--secondary"},[t._v("\n              "+t._s(e.desc)+"\n            ")]),a("div",{staticClass:"post--meta o-flex justify-space-between"},[a("div",{staticClass:"post--author caption grey--text text--darken-1"},[a("span",[t._v(t._s(e.author))]),a("time",{staticClass:"px-2"},[t._v(t._s(e.createdAt))])]),a("div",{staticClass:"social"},[a("a",{staticClass:"grey--text text--darken-1",on:{click:t.handleThumb}},[a("v-icon",{attrs:{small:""}},[t._v("thumb_up")]),a("small",[t._v("100+")])],1),a("a",{staticClass:"grey--text text--darken-1 mx-3",on:{click:t.handleComment}},[a("v-icon",{attrs:{small:""}},[t._v("mode_comment")]),a("small",[t._v("12+")])],1),a("a",{staticClass:"grey--text text--darken-1",on:{click:t.handleFavorite}},[a("v-icon",{attrs:{small:""}},[t._v("favorite")]),a("small",[t._v("50+")])],1)])])])])])}),0)])],1)},s=[],r={props:{items:{type:[Array,Object]}},methods:{handleThumb:function(){},handleComment:function(){},handleFavorite:function(){}}},l=r,n=(a("fdc5"),a("2877")),o=a("6544"),c=a.n(o),d=a("8336"),v=a("b0af"),u=a("99d9"),h=a("ce7e"),p=a("132d"),f=a("9910"),m=a("71d9"),g=a("2a7f"),b=Object(n["a"])(l,i,s,!1,null,"04a71544",null);e["a"]=b.exports;c()(b,{VBtn:d["a"],VCard:v["a"],VCardText:u["b"],VDivider:h["a"],VIcon:p["a"],VSpacer:f["a"],VToolbar:m["a"],VToolbarTitle:g["b"]})},"9d8c":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"chat-room"},[a("v-toolbar",{staticClass:"white chat-room--toolbar",attrs:{card:"",dense:"",flat:"",light:""}},[a("v-btn",{attrs:{icon:""}},[a("v-icon",{attrs:{color:"text--secondary"}},[t._v("keyboard_arrow_left")])],1),t.chat.users?t._l(t.chat.users,function(e,i){return a("v-avatar",{key:i,staticClass:"avatar-stack",attrs:{size:"32"}},[a("img",{attrs:{src:t.getAvatar(e),alt:""}})])}):t._e(),a("v-spacer"),a("v-toolbar-title",[a("h4",[t._v("Chat Channel")])]),a("v-spacer"),a("v-tooltip",{attrs:{bottom:""}},[a("v-btn",{attrs:{slot:"activator",icon:""},slot:"activator"},[a("v-icon",{attrs:{color:"text--secondary"}},[t._v("add")])],1),a("span",[t._v("Add user")])],1)],2),a("vue-perfect-scrollbar",{staticClass:"chat-room--scrollbar grey lighten-5",style:t.computeHeight},[a("v-card-text",{staticClass:"chat-room--list pa-3"},[t._l(t.chat.messages,function(e,i){return[a("div",{key:i,staticClass:"messaging-item layout row my-4",class:[i%2==0?"reverse":""]},[a("v-avatar",{staticClass:"indigo mx-1",attrs:{size:"40"}},[a("img",{attrs:{src:e.user.avatar,alt:""}})]),a("div",{staticClass:"messaging--body layout column mx-2"},[a("p",{staticClass:"pa-2",class:[i%2==0?"primary white--text":"white"],attrs:{value:!0}},[t._v("\n              "+t._s(e.text)+"\n            ")]),a("div",{staticClass:"caption px-2 text--secondary"},[t._v("\n              "+t._s(new Date(e.created_at).toLocaleString())+"\n            ")])]),a("v-spacer")],1)]})],2)],1),a("v-card-actions",[a("v-text-field",{attrs:{"full-width":"",flat:"",clearable:"",solo:"","append-icon":"send",label:"Type some message here"}},[a("v-icon",{attrs:{slot:"append-icon"},slot:"append-icon"},[t._v("send")]),a("v-icon",{staticClass:"mx-2",attrs:{slot:"append-icon"},slot:"append-icon"},[t._v("photo")]),a("v-icon",{attrs:{slot:"append-icon"},slot:"append-icon"},[t._v("face")])],1)],1)],1)},s=[],r=a("d800"),l=a("c24f"),n=a("9d63"),o=a.n(n),c={components:{VuePerfectScrollbar:o.a},props:{uuid:{type:String,default:""},height:{type:String,default:null}},computed:{chat:function(){var t={title:"Chat",users:[],messages:[]},e=Object(r["c"])(this.$route.params.uuid);return Object.assign(t,e)},computeHeight:function(){return{height:this.height||""}}},methods:{getAvatar:function(t){return Object(l["c"])(t).avatar}}},d=c,v=a("2877"),u=a("6544"),h=a.n(u),p=a("8212"),f=a("8336"),m=a("b0af"),g=a("99d9"),b=a("132d"),_=a("9910"),x=a("2677"),C=a("71d9"),y=a("2a7f"),V=(a("60e8"),a("b64a")),w=a("163b"),T=a("c69d"),S=a("30d4"),k=a("b8d7"),j=a("98a1"),L=a("80d2"),O=a("d9bd");function A(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var P={name:"v-tooltip",mixins:[V["a"],w["a"],T["a"],S["a"],k["a"],j["a"]],props:{closeDelay:{type:[Number,String],default:200},debounce:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:200},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,a=t.content,i=!this.bottom&&!this.left&&!this.top&&!this.right,s=this.isAttached?e.offsetLeft:e.left,r=0;return this.top||this.bottom||i?r=s+e.width/2-a.width/2:(this.left||this.right)&&(r=s+(this.right?e.width:-a.width)+(this.right?10:-10)),this.nudgeLeft&&(r-=parseInt(this.nudgeLeft)),this.nudgeRight&&(r+=parseInt(this.nudgeRight)),this.calcXOverflow(r,this.dimensions.content.width)+"px"},calculatedTop:function(){var t=this.dimensions,e=t.activator,a=t.content,i=this.isAttached?e.offsetTop:e.top,s=0;return this.top||this.bottom?s=i+(this.bottom?e.height:-a.height)+(this.bottom?10:-10):(this.left||this.right)&&(s=i+e.height/2-a.height/2),this.nudgeTop&&(s-=parseInt(this.nudgeTop)),this.nudgeBottom&&(s+=parseInt(this.nudgeBottom)),this.calcYOverflow(s+this.pageYOffset)+"px"},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left}},computedTransition:function(){return this.transition?this.transition:this.top?"slide-y-reverse-transition":this.right?"slide-x-transition":this.bottom?"slide-y-transition":this.left?"slide-x-reverse-transition":""},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(L["c"])(this.maxWidth),minWidth:Object(L["c"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick(function(){t.value&&t.callActivate()})},mounted:function(){"v-slot"===Object(L["l"])(this,"activator",!0)&&Object(O["a"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},genActivator:function(){var t=this,e=this.disabled?{}:{mouseenter:function(e){t.getActivator(e),t.runDelay("open")},mouseleave:function(e){t.getActivator(e),t.runDelay("close")}};if("scoped"===Object(L["l"])(this,"activator")){var a=this.$scopedSlots.activator({on:e});return this.activatorNode=a,a}return this.$createElement("span",{on:e,ref:"activator"},this.$slots.activator)}},render:function(t){var e,a=t("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(e={},A(e,this.contentClass,!0),A(e,"menuable__content__active",this.isActive),A(e,"v-tooltip__content--fixed",this.activatorFixed),e),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.showLazyContent(this.$slots.default));return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[t("transition",{props:{name:this.computedTransition}},[a]),this.genActivator()])}},I=Object(v["a"])(d,i,s,!1,null,null,null);e["a"]=I.exports;h()(I,{VAvatar:p["a"],VBtn:f["a"],VCard:m["a"],VCardActions:g["a"],VCardText:g["b"],VIcon:b["a"],VSpacer:_["a"],VTextField:x["a"],VToolbar:C["a"],VToolbarTitle:y["b"],VTooltip:P})},a608:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){var a=[],i=!0,s=!1,r=void 0;try{for(var l,n=t[Symbol.iterator]();!(i=(l=n.next()).done);i=!0)if(a.push(l.value),e&&a.length===e)break}catch(o){s=!0,r=o}finally{try{!i&&n["return"]&&n["return"]()}finally{if(s)throw r}}return a}return function(e,a){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},r=a("a026"),l=n(r);function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function c(t){return!!t&&!!t.match(/^(#|(rgb|hsl)a?\()/)}e.default=l.default.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return c(t)?e.style=s({},e.style,{"background-color":""+t,"border-color":""+t}):t&&(e.class=s({},e.class,o({},t,!0))),e},setTextColor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(c(t))e.style=s({},e.style,{color:""+t,"caret-color":""+t});else if(t){var a=t.toString().trim().split(" ",2),r=i(a,2),l=r[0],n=r[1];e.class=s({},e.class,o({},l+"--text",!0)),n&&(e.class["text--"+n]=!0)}return e}}})},edcb:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",[a("div",{staticClass:"layout row ma-0 justify-space-between pb-1"},[a("div",{staticClass:"subheading"},[t._v(t._s(t.title))]),a("div",{staticClass:"icon"},[a("v-icon",{attrs:{color:t.color}},[t._v(t._s(t.icon))])],1)])]),a("v-card-text",[a("div",{staticClass:"justify-center row layout ma-0"},[a("v-progress-circular",{attrs:{size:150,width:15,rotate:-90,value:t.value,color:t.color}},[t._v("\n        "+t._s(t.value)+"\n      ")])],1)]),a("v-divider"),a("v-card-actions",[a("div",{staticClass:"headline"},[t._v(t._s(t.subTitle))]),a("div",{staticClass:"caption"},[t._v(t._s(t.caption))])])],1)},s=[],r=(a("c5f6"),{props:{icon:String,title:String,subTitle:String,caption:String,value:Number,color:String}}),l=r,n=a("2877"),o=a("6544"),c=a.n(o),d=a("b0af"),v=a("99d9"),u=a("12b2"),h=a("ce7e"),p=a("132d"),f=a("490a"),m=Object(n["a"])(l,i,s,!1,null,null,null);e["a"]=m.exports;c()(m,{VCard:d["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:u["a"],VDivider:h["a"],VIcon:p["a"],VProgressCircular:f["a"]})},f386:function(t,e,a){"use strict";a("386b")("small",function(t){return function(){return t(this,"small","","")}})},f513:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-img",{attrs:{src:"/static/people/man/m1.jpg",height:"390"}},[a("v-layout",{staticClass:"media ma-0",attrs:{column:""}},[a("v-card-title",[a("v-btn",{attrs:{dark:"",icon:""}},[a("v-icon",[t._v("chevron_left")])],1),a("v-spacer"),a("v-btn",{staticClass:"mr-3",attrs:{dark:"",icon:""}},[a("v-icon",[t._v("edit")])],1),a("v-btn",{attrs:{dark:"",icon:""}},[a("v-icon",[t._v("more_vert")])],1)],1),a("v-spacer"),a("v-card-title",{staticClass:"white--text pl-5 pt-5"},[a("div",{staticClass:"display-1 pl-5 pt-5"},[t._v("Ali Conners")])])],1)],1),a("v-list",{staticClass:"pa-0",attrs:{"two-line":""}},[a("v-list-tile",{attrs:{href:"#"}},[a("v-list-tile-action",[a("v-icon",{attrs:{color:"indigo"}},[t._v("phone")])],1),a("v-list-tile-content",[a("v-list-tile-title",[t._v("(650) 555-1234")]),a("v-list-tile-sub-title",[t._v("Mobile")])],1),a("v-list-tile-action",[a("v-icon",[t._v("chat")])],1)],1),a("v-list-tile",{attrs:{href:"#"}},[a("v-list-tile-action"),a("v-list-tile-content",[a("v-list-tile-title",[t._v("(323) 555-6789")]),a("v-list-tile-sub-title",[t._v("Work")])],1),a("v-list-tile-action",[a("v-icon",[t._v("chat")])],1)],1),a("v-divider",{attrs:{inset:""}}),a("v-list-tile",{attrs:{href:"#"}},[a("v-list-tile-action",[a("v-icon",{attrs:{color:"indigo"}},[t._v("mail")])],1),a("v-list-tile-content",[a("v-list-tile-title",[t._v("aliconnors@example.com")]),a("v-list-tile-sub-title",[t._v("Personal")])],1)],1),a("v-list-tile",{attrs:{href:"#"}},[a("v-list-tile-action"),a("v-list-tile-content",[a("v-list-tile-title",[t._v("ali_connors@example.com")]),a("v-list-tile-sub-title",[t._v("Work")])],1)],1),a("v-divider",{attrs:{inset:""}}),a("v-list-tile",{attrs:{href:"#"}},[a("v-list-tile-action",[a("v-icon",{attrs:{color:"indigo"}},[t._v("location_on")])],1),a("v-list-tile-content",[a("v-list-tile-title",[t._v("1400 Main Street")]),a("v-list-tile-sub-title",[t._v("Orlando, FL 79938")])],1)],1)],1)],1)},s=[],r={},l=r,n=a("2877"),o=a("6544"),c=a.n(o),d=a("8336"),v=a("b0af"),u=a("12b2"),h=a("ce7e"),p=a("132d"),f=a("adda"),m=a("a722"),g=a("8860"),b=a("ba95"),_=a("40fe"),x=a("5d23"),C=a("9910"),y=Object(n["a"])(l,i,s,!1,null,null,null);e["a"]=y.exports;c()(y,{VBtn:d["a"],VCard:v["a"],VCardTitle:u["a"],VDivider:h["a"],VIcon:p["a"],VImg:f["a"],VLayout:m["a"],VList:g["a"],VListTile:b["a"],VListTileAction:_["a"],VListTileContent:x["b"],VListTileSubTitle:x["c"],VListTileTitle:x["d"],VSpacer:C["a"]})},fdc5:function(t,e,a){"use strict";var i=a("0bd5"),s=a.n(i);s.a}}]);
//# sourceMappingURL=dashboard.91dac47f.js.map