(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{391:function(t,e,n){var content=n(408);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(74).default)("6197d49e",content,!0,{sourceMap:!1})},407:function(t,e,n){"use strict";n(391)},408:function(t,e,n){var l=n(65)(!1);l.push([t.i,"\n#avatar {\r\n  background-color: #EDEDF5;\r\n  max-height: 120px;\r\n  max-width: 120px !important;\r\n  font-size: 60px;\r\n  border-radius: 12px;\r\n  padding-right: 69px;\n}\n#avatar i {\r\n  margin-inline: 50%;\r\n  padding-top: 30px;\r\n  color: #01C68E;\n}\r\n",""]),t.exports=l},453:function(t,e,n){"use strict";n.r(e);var l=n(58),r=(n(126),{layout:"full",data:function(){return{anid:this.$route.params.id}},methods:{Goback:function(){window.history.go(-1)}},mounted:function(t){var e=this;l.a.firestore().collection("annunces").getDoc(t).then((function(){e.$store.commit("getAnnunce",{jobName:e.jobName,compName:e.compName,postDate:e.postDate,detail:e.detail,anid:e.anid})}))}}),o=(n(407),n(59)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("div",{staticClass:"appHeader"},[n("div",{staticClass:"left"},[n("a",{staticClass:"headerButton",attrs:{href:"#"},on:{click:t.Goback}},[n("i",{staticClass:"bx bx-arrow-back"})])]),t._v(" "),n("div",{staticClass:"pageTitle"},[t._v("Annunciation")]),t._v(" "),n("div",{staticClass:"right"},[n("b-dropdown",{attrs:{size:"sm",variant:"link","toggle-class":"text-decoration-none","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[n("i",{staticClass:"bx bx-dots-vertical-rounded"})]},proxy:!0}])},[t._v(" "),n("b-dropdown-item",{attrs:{href:"#"}},[n("span",{staticClass:"mx-1"},[n("i",{staticClass:"bx bx-share"})]),t._v("\n            Share\n          ")]),t._v(" "),n("b-dropdown-item",{attrs:{href:"#"}},[n("span",{staticClass:"mx-1"},[n("i",{staticClass:"bx bx-send"})]),t._v("\n            Send\n          ")]),t._v(" "),n("b-dropdown-item",{attrs:{href:"#"}},[n("span",{staticClass:"mx-1"},[n("i",{staticClass:"bx bx-flag"})]),t._v("\n            Report\n          ")])],1)],1)]),t._v(" "),n("div",{attrs:{id:"appCapsule"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"card mt-2"},[n("div",{staticClass:"row mt-2 mb-2 mx-2"},[t._m(0),t._v(" "),n("div",{staticClass:"col align-self-center"},[n("h3",[t._v("Your Dream Job")]),t._v(" "),n("div",{staticClass:"row card-body"},[n("nuxt-link",{attrs:{to:"../company"}},[n("div",{staticClass:"row"},[n("strong",[t._v(" Company Name  # "+t._s(t.$route.params.id))])])]),t._v(" "),n("div",{staticClass:"row"},[t._v("Professional Scammer Group.")]),t._v(" "),n("div",{staticClass:"row"},[t._v("London - England")])],1)])])]),t._v(" "),t._m(1)]),t._v(" "),n("b-navbar",{staticClass:"px-2",attrs:{fixed:"bottom",type:"light",variant:"light"}},[n("b-button",{staticClass:"mx-2 btn-lg",attrs:{block:"",variant:"primary"}},[t._v(" Apply ")]),t._v(" "),n("b-button",{staticClass:"mx-2 btn-lg",staticStyle:{padding:"14px"},attrs:{id:"liveAlertBtn",variant:"outline-primary"}},[n("i",{staticClass:"bx bx-bookmark",staticStyle:{"font-size":"25px"}})])],1),t._v(" "),t._m(2)],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-3 mx-2",attrs:{id:"avatar"}},[e("i",{staticClass:"bx bxs-buildings"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card mt-2"},[n("div",{staticClass:"card-body"},[n("ul",{staticClass:"nav nav-tabs style1",attrs:{role:"tablist"}},[n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link active",attrs:{"data-bs-toggle":"tab",href:"#overview",role:"tab"}},[t._v("\n                  Overview\n                ")])]),t._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{"data-bs-toggle":"tab",href:"#card",role:"tab"}},[t._v("\n                  Company\n                ")])]),t._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{"data-bs-toggle":"tab",href:"#settings",role:"tab"}},[t._v("\n                  Applicants\n                ")])])]),t._v(" "),n("div",{staticClass:"tab-content mt-1"},[n("div",{staticClass:"tab-pane fade show active",attrs:{id:"overview",role:"tabpanel"}},[t._v("\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin\n                vulputate enim sed elit consequat, sed ultricies ligula\n                venenatis. In nec arcu eget neque sodales accumsan vel et neque.\n              ")]),t._v(" "),n("div",{staticClass:"tab-pane fade",attrs:{id:"card",role:"tabpanel"}},[t._v("\n                Suspendisse maximus ligula eu ligula iaculis, eu bibendum odio\n                dignissim. Pellentesque elementum nisl elit, non feugiat risus\n                luctus sit amet.\n              ")]),t._v(" "),n("div",{staticClass:"tab-pane fade",attrs:{id:"settings",role:"tabpanel"}},[t._v("\n                Vestibulum sed facilisis diam, vel sodales leo. Aenean lacinia,\n                nisi sit amet iaculis maximus, nibh orci iaculis risus, vitae\n                faucibus dui orci quis elit.\n              ")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"alert alert-primary alert-dismissible",attrs:{role:"alert",id:"liveAlert"}},[n("strong",[t._v("Nice!")]),t._v(" You've triggered this alert.\n  "),n("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"alert","aria-label":"Close"}})])}],!1,null,null,null);e.default=component.exports}}]);