(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{236:function(t,e,r){"use strict";r.r(e);r(20),r(15);var n=r(3),l=(r(44),r(2)),o=r(212),d=r.n(o);r(213);l.a.use(d.a);var m={scrollToTop:!0,layout:"no-header",middleware:"auth",data:function(){return{avatar:{},d:"",errMessges:""}},created:function(){var t=this;this.$axios.$get("/group/"+this.$route.params.url).then((function(data){data?(console.log(data),t.d=data):t.$router.push("/groups")}))},methods:{updateToString:function(t){"username"==t&&(this.d.username=this.d.username.replace(/[^a-zA-Z0-9]/g,"_"))},onInit:function(){this.avatar.addClipPlugin((function(t,e,r,n,l){t.beginPath(),t.arc(e+n/2,r+l/2,n/2,0,2*Math.PI,!0),t.closePath()}))},save:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.avatar.generateBlob((function(t){}),"image/jpeg",.8),t.d.avatar=t.avatar.generateDataUrl(),""!=t.d.name&&""!=t.d.desc&&""!=t.d.type&&t.$axios.post("/group/edit/"+t.d.id,t.d).then((function(e){e.data.info?t.errMessges="Username Telah digunakan":t.$router.push("/".concat(t.d.username))}));case 3:case"end":return e.stop()}}),e)})))()}}},c=r(9),component=Object(c.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full bg-theme_primary"},[r("section",{staticClass:"w-full shadow-sm rounded-xl mb-20"},[r("div",{staticClass:"shadow-sm rounded-xl px-5 pb-5"},[r("div",{staticClass:"flex flex-wrap"},[r("div",{staticClass:"w-full  px-5 flex flex-wrap"},[r("div",{staticClass:"flex w-full"},[r("croppa",{staticClass:"shadow-sm rounded-lg",attrs:{width:100,"prevent-white-space":"",height:100,placeholder:"100x100px","initial-image":t.d.avatar},on:{init:t.onInit},model:{value:t.avatar,callback:function(e){t.avatar=e},expression:"avatar"}}),t._v(" "),r("div",{staticClass:"w-full p-5 flex flex-wrap"},[r("label",{staticClass:"text-left  pl-2 w-full mb-3",attrs:{for:"usernama"}},[t._v("TagName")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.d.username,expression:"d.username"}],staticClass:"w-full\r\n                                  shadow-sm bg-theme_primary_light\r\n                                  py-2 px-4 \r\n                                  rounded-lg mb-3\r\n                                  ",attrs:{type:"text",placeholder:"Username"},domProps:{value:t.d.username},on:{keyup:function(e){return t.updateToString("username")},input:function(e){e.target.composing||t.$set(t.d,"username",e.target.value)}}})])],1),t._v(" "),r("div",{staticClass:"w-full flex flex-wrap"},[r("label",{staticClass:"text-left  pl-2 w-full my-3",attrs:{for:"nama"}},[t._v("Nama")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.d.name,expression:"d.name"}],staticClass:"w-full\r\n                          shadow-sm bg-theme_primary_light\r\n                          py-2 px-4 \r\n                          rounded-lg mb-3\r\n                          ",attrs:{type:"text",placeholder:"Nama"},domProps:{value:t.d.name},on:{input:function(e){e.target.composing||t.$set(t.d,"name",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"w-full flex flex-wrap"},[r("label",{staticClass:"text-left  pl-2 w-full my-3",attrs:{for:"instagram"}},[t._v("Instagram")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.d.instagram,expression:"d.instagram"}],staticClass:"w-full\r\n                          shadow-sm bg-theme_primary_light\r\n                          py-2 px-4 \r\n                          rounded-lg mb-3\r\n                          ",attrs:{type:"text",placeholder:"Instagram"},domProps:{value:t.d.instagram},on:{input:function(e){e.target.composing||t.$set(t.d,"instagram",e.target.value)}}})]),t._v(" "),r("label",{staticClass:"text-left  pl-2 w-full my-3",attrs:{for:"type"}},[t._v("Type")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.d.type,expression:"d.type"}],staticClass:"w-full\r\n                      shadow-sm bg-theme_primary_light\r\n                      py-2 px-4 \r\n                      rounded-lg mb-3\r\n                      ",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.d,"type",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"Ormawa"}},[t._v("Ormawa")]),t._v(" "),r("option",{attrs:{value:"UKM"}},[t._v("UKM")]),t._v(" "),r("option",{attrs:{value:"StartUp"}},[t._v("StartUp")]),t._v(" "),r("option",{attrs:{value:"Komunitas"}},[t._v("Komunitas")]),t._v(" "),r("option",{attrs:{value:"Lainnya"}},[t._v("Lainnya")])]),t._v(" "),r("label",{staticClass:"text-left  pl-2 w-full my-3",attrs:{for:"email"}},[t._v("Descriptions")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.d.desc,expression:"d.desc"}],staticClass:"w-full\r\n                          shadow-sm bg-theme_primary_light\r\n                          py-2 px-4 \r\n                          rounded-lg mb-3\r\n                          ",attrs:{placeholder:"Descriptions"},domProps:{value:t.d.desc},on:{input:function(e){e.target.composing||t.$set(t.d,"desc",e.target.value)}}}),t._v(" "),r("span",{staticClass:"w-full text-danger font-bold text-center"},[t._v("\r\n                          "+t._s(t.errMessges)+"\r\n                        ")]),t._v(" "),r("button",{staticClass:"w-full  py-2 px-4 bg-primary_dark text-white hover:opacity-75 rounded-lg mt-5",on:{click:t.save}},[r("i",{staticClass:"fa fa-plus"}),t._v("\r\n                          Simpan Perubahan\r\n                      ")]),t._v(" "),r("nuxt-link",{staticClass:"w-full text-center py-2 px-4 bg-theme_primary_light hover:opacity-75 rounded-lg mt-5",attrs:{to:"/groups"}},[r("i",{staticClass:"fa fa-plus"}),t._v("\r\n                          Batal\r\n                      ")])],1)])])])])}),[],!1,null,null,null);e.default=component.exports}}]);