(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{263:function(t,e,l){"use strict";l.r(e);var r={layout:"no-header",middleware:"auth",props:["group","text"],computed:{urlQuest:function(){return this.$props.text?"/new/quest?text=".concat(this.$props.text):"/new/quest"}}},o=l(11),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"w-full p-2"},[l("div",{class:t.$store.state.topMenu?"":"hidden"},[l("nuxt-link",{staticClass:"bg-theme_primary_dark text-primary p-3 right-0 rounded-full fixed bottom-0 mr-5 z-30 mb-16 lg:mr-20 flex lg:px-5 ",attrs:{to:t.localePath(t.group?"/new/quest?group_id="+t.group.id+"&group_username="+t.group.username:t.urlQuest)}},[l("svg",{staticClass:"bi bi-cursor",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z"}})]),t._v(" "),l("span",{staticClass:"hidden lg:block px-2 text-xs"},[t._v(" Buat ")])])],1)])}),[],!1,null,null,null);e.default=component.exports},318:function(t,e,l){"use strict";l.r(e);l(160),l(47),l(48);var r=l(256),o={components:{InfiniteLoading:l.n(r).a},layout:"no-header",middleware:"auth",props:["id","editprofile"],data:function(){return{filterClassActive:"cursor-pointer relative mx-1 px-6 bg-primary text-secondary rounded-full rounded-tl-none flex text-sm items-center justify-center p-2",filterClass:"cursor-pointer relative mx-1 px-6 bg-theme_primary_dark rounded-xl flex text-sm items-center justify-center p-2",profile:"",quest:"",search:"",filter:"New",balas_quest:"",page:1,loadMore:!1,last_page:!1,usernameIg:"",followTemp:!1}},fetch:function(){var t=this;this.$axios.$get("/profile/"+this.id).then((function(data){t.profile=data,t.getData(),t.profile.instagram&&(t.profile.instagram.includes("@")?t.usernameIg=t.profile.instagram.substring(1):t.usernameIg=t.profile.instagram)}))},methods:{chatTo:function(){var t=this;this.$axios.get("/chat_to/"+this.profile.id).then((function(e){t.$router.push("/messages/"+e.data)}))},followUser:function(t){var e=this;this.$axios.get("/user/follow/"+t).then((function(l){e.followTemp=!0,e.$store.commit("setNotif",{to:t,text:"@"+e.$store.state.user.username+" Mengikuti anda"})}))},unFollow:function(t){var e=this;this.$axios.get("/user/unfollow/"+t).then((function(t){e.followTemp=!1,e.profile.followed=!1}))},loadMoregetData:function(t){var e=this;this.page=this.page+1,this.$axios.$get("/profile/quest/"+this.profile.id+"?filter="+this.filter+"&search="+this.search+"&page="+this.page).then((function(l){l.data.length>0?(t.loaded(),e.quest.data=e.quest.data.concat(l.data)):t.complete()}))},newQuest:function(){this.balas_quest="",this.getData()},balasQuest:function(data){this.balas_quest=data},getData:function(){var t=this;this.last_page=!1,this.page=1,this.$axios.$get("/profile/quest/"+this.profile.id+"?filter="+this.filter+"&search="+this.search+"&page="+this.page).then((function(data){t.quest=data}))}}},n=l(11),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return t.profile?l("div",{staticClass:"w-full  mt-2"},[t.editprofile?t._e():l("button",{staticClass:"flex p-3 bg-theme_primary_dark mx-2 rounded-full mr-auto",staticStyle:{top:"10px"},on:{click:function(e){return t.$router.back()}}},[l("svg",{staticClass:"bi bi-arrow-left-circle",attrs:{width:"1.2em",height:"1.2em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}}),t._v(" "),l("path",{attrs:{"fill-rule":"evenodd",d:"M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"}})])]),t._v(" "),l("div",{staticClass:"w-full flex flex-wrap bg-theme_primary p-2 rounded-xl justify-center lg:mt-0"},[l("div",{staticClass:"w-full lg:w-1/2 flex justify-center lg:justify-start lg:pt-3"},[l("img",{staticClass:"w-16 h-16  rounded-full hidden lg:block",attrs:{src:t.profile.avatar,alt:t.profile.name}}),t._v(" "),l("div",{staticClass:"text-center lg:text-left mt-3 lg:pl-3"},[l("div",{staticClass:"w-full lg:text-left font-bold "},[t._v("\n                "+t._s(t.profile.name)+" \n              ")]),t._v(" "),l("img",{staticClass:"w-20 h-20  rounded-full lg:hidden my-2",attrs:{src:t.profile.avatar,alt:t.profile.name}}),t._v(" "),l("router-link",{staticClass:"text-sm text-primary",attrs:{to:t.localePath("/@"+t.profile.username)}},[t._v("@"+t._s(t.profile.username))])],1)]),t._v(" "),l("div",{staticClass:"w-full lg:w-1/2 flex flex-wrap justify-center"},[l("div",{staticClass:"flex w-full justify-center lg:justify-end mt-2"},[l("nuxt-link",{staticClass:"font-normal  text-xs text-center px-4",attrs:{to:t.localePath("/followed/user/"+t.profile.id)}},[l("div",{staticClass:"font-bold text-primary"},[t._v(t._s(t.profile.follower))]),t._v("\n                     "+t._s(t.$t("Follower"))+"\n                  ")]),t._v(" "),l("nuxt-link",{staticClass:"font-normal text-xs  text-center px-4",attrs:{to:t.localePath("/following/"+t.profile.id)}},[l("div",{staticClass:"font-bold text-primary"},[t._v(t._s(t.profile.following))]),t._v("\n                     "+t._s(t.$t("Following"))+"\n                  ")])],1),t._v(" "),l("div",{staticClass:"flex w-full justify-center lg:justify-end mt-5"},[t.profile.followed||t.followTemp?l("div",[l("span",{staticClass:"cursor-pointer bg-primary text-secondary mr-2 text-primary px-6 py-1 -mt-1 rounded-full",on:{click:t.chatTo}},[t._v("\n                        Pesan\n                    ")])]):t._e(),t._v(" "),t.profile.followed||t.followTemp?l("div",{on:{click:function(e){return t.unFollow(t.profile.id)}}},[l("span",{staticClass:"cursor-pointer bg-theme_primary_dark text-primary px-6 py-1 rounded-full"},[t._v("\n                        Diikuti\n                    ")])]):l("span",{staticClass:"cursor-pointer -mt-1 bg-danger px-6 py-1 rounded-full text-secondary",on:{click:function(e){return t.followUser(t.profile.id)}}},[t._v("\n                      Ikuti\n                  ")]),t._v(" "),t.usernameIg?l("div",{staticClass:"px-3"},[l("a",{staticClass:"text-primary",attrs:{href:"https://instagram.com/"+t.usernameIg}},[l("img",{staticClass:"h-6 w-6",attrs:{src:"/instagram.png"}})])]):t._e()])]),t._v(" "),l("div",{staticClass:"flex text-sm w-full text-center lg:text-left mt-3 px-4"},[t._v("\n          "+t._s(t.profile.bio)+"\n        ")])]),t._v(" "),t.balas_quest?l("balas-quest",{attrs:{quest:t.balas_quest},on:{batal:function(e){t.balas_quest=!1}}}):t._e(),t._v(" "),l("div",{staticClass:"p-2 flex flex-row mt-2",staticStyle:{"overflow-x":"scroll"}},[l("div",{class:"New"==t.filter?t.filterClassActive:t.filterClass,on:{click:function(e){t.filter="New",t.getData()}}},[t._v("\n        Terbaru\n    ")]),t._v(" "),l("div",{class:"Story"==t.filter?t.filterClassActive:t.filterClass,on:{click:function(e){t.filter="Story",t.getData()}}},[t._v("\n        Cerita\n    ")]),t._v(" "),l("div",{class:"Voice"==t.filter?t.filterClassActive:t.filterClass,on:{click:function(e){t.filter="Voice",t.getData()}}},[t._v("\n        Suara\n    ")])]),t._v(" "),l("section",{staticClass:"w-full rounded-xl pb-20 flex flex-wrap"},[t._l(t.quest.data,(function(e){return l("card-post",{key:e.id,attrs:{data:e},on:{balas:t.balasQuest}})})),t._v(" "),l("infinite-loading",{on:{infinite:t.loadMoregetData}},[l("div",{staticClass:"text-center flex w-full p-4",attrs:{slot:"no-more"},slot:"no-more"}),t._v(" "),l("div",{attrs:{slot:"no-results"},slot:"no-results"})])],2)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BalasQuest:l(262).default,CardPost:l(271).default})},704:function(t,e,l){"use strict";l.r(e);l(160),l(47),l(48);var r=l(256),o={components:{InfiniteLoading:l.n(r).a},layout:"no-header",middleware:"auth",data:function(){return{filterClassActive:"cursor-pointer relative mx-1 px-6 bg-primary text-secondary rounded-full rounded-tl-none flex text-sm items-center justify-center p-2",filterClass:"cursor-pointer relative mx-1 px-6 bg-theme_primary_dark rounded-xl flex text-sm items-center justify-center p-2",group:"",quest:"",search:"",filter:"New",balas_quest:"",page:1,usernameIg:"",feedIg:[],followTemp:!1}},fetch:function(){var t=this;this.$axios.$get("/group/"+this.$route.params.url).then((function(data){t.group=data,t.group.id||t.$router.push(t.localePath("/search?keyword="+t.$route.params.url)),t.getData(),t.group.instagram&&(t.group.instagram.includes("@")?t.usernameIg=t.group.instagram.substring(1):t.usernameIg=t.group.instagram)}))},methods:{unFollow:function(t){var e=this;this.$axios.get("/group/unfollow/"+t).then((function(t){e.followTemp=!1,e.group.followed=!1}))},followGroup:function(t){var e=this;this.$axios.get("/group/follow/"+t).then((function(t){e.followTemp=!0}))},loadMoregetData:function(t){var e=this;this.page=this.page+1,this.$axios.$get("/group/quest/"+this.group.id+"?filter="+this.filter+"&search="+this.search+"&page="+this.page).then((function(l){l.data.length>0?(t.loaded(),e.quest.data=e.quest.data.concat(l.data)):t.complete()}))},newQuest:function(){this.balas_quest="",this.getData()},balasQuest:function(data){this.balas_quest=data},getData:function(){var t=this;this.last_page=!1,this.page=1,this.$axios.$get("/group/quest/"+this.group.id+"?filter="+this.filter+"&search="+this.search+"&page="+this.page).then((function(data){t.quest=data}))}}},n=l(11),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return t.group?l("div",{staticClass:"w-full"},[l("button",{staticClass:"flex p-3 bg-theme_primary_dark mx-2 rounded-full mr-auto mt-2",staticStyle:{top:"10px"},on:{click:function(e){return t.$router.back()}}},[l("svg",{staticClass:"bi bi-arrow-left-circle",attrs:{width:"1.2em",height:"1.2em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}}),t._v(" "),l("path",{attrs:{"fill-rule":"evenodd",d:"M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"}})])]),t._v(" "),l("section",[l("div",{staticClass:"w-full flex flex-wrap bg-theme_primary p-2 pt-6 rounded-xl "},[l("div",{staticClass:"w-full font-bold flex "},[l("img",{staticClass:"w-16 h-16  rounded-full",attrs:{src:t.group.avatar,alt:t.group.name}}),t._v(" "),l("div",{staticClass:"w-full pl-5 mt-1 flex flex-wrap items-start "},[l("div",{staticClass:"w-full lg:text-md mb-2 flex"},[l("div",[t._v("\n              "+t._s(t.group.name)+"  \n            "),l("br"),t._v(" "),l("small",{staticClass:"text-primary"},[t._v("#"+t._s(t.group.username))])]),t._v(" "),l("div",{staticClass:"ml-auto text-sm flex items-start"},[t.group.followed||t.followTemp?l("div",{on:{click:function(e){return t.unFollow(t.group.id)}}},[l("span",{staticClass:"float-right cursor-pointer bg-secondary text-primary px-4 py-1 rounded-full"},[t._v("\n                Diikuti\n            ")])]):l("span",{staticClass:"float-right cursor-pointer bg-primary text-secondary px-4 py-1 rounded-full",on:{click:function(e){return t.followGroup(t.group.id)}}},[t._v("\n              Ikuti\n          ")]),t._v(" "),t.usernameIg?l("div",{staticClass:"px-3"},[l("a",{staticClass:"text-primary",attrs:{href:"https://instagram.com/"+t.usernameIg}},[l("img",{staticClass:"h-8 w-8",attrs:{src:"/instagram.png"}})])]):t._e()])]),t._v(" "),l("div",{staticClass:"w-full pr-4 -mt-2"},[l("span",{staticClass:"text-sm"},[l("nuxt-link",{staticClass:"text-primary cursor-pointer",attrs:{to:t.localePath("/@"+t.group.owner.username)}},[t._v("@"+t._s(t.group.owner.username))])],1),t._v(" "),l("nuxt-link",{staticClass:"font-bold mb-2 float-right mr-2",attrs:{to:t.localePath("/followed/group/"+t.group.id)}},[l("span",{staticClass:"text-primary"},[t._v(" "+t._s(t.$t("Follower"))+"\n        "+t._s(t.group.follower))])])],1),t._v(" "),l("div",{staticClass:" font-normal text-sm pr-4"},[t._v("\n              "+t._s(t.group.desc)+"\n          ")]),t._v(" "),t.group.user_id==t.$store.state.user.id?l("router-link",{staticClass:"text-sm ml-auto cursor-pointer bg-theme_primary_dark px-4 py-1 rounded-full text-primary",attrs:{to:"/edit/group/"+t.group.username}},[t._v("\n                      Edit Group\n            ")]):t._e()],1)])])]),t._v(" "),l("new-quest",{attrs:{group:t.group},on:{kirim:t.newQuest}}),t._v(" "),t.balas_quest?l("balas-quest",{attrs:{quest:t.balas_quest},on:{batal:function(e){t.balas_quest=!1}}}):t._e(),t._v(" "),l("div",{staticClass:"p-2 flex flex-row",staticStyle:{"overflow-x":"scroll"}},[l("div",{class:"New"==t.filter?t.filterClassActive:t.filterClass,on:{click:function(e){t.filter="New",t.getData()}}},[t._v("\n        Terbaru\n    ")]),t._v(" "),l("div",{class:"Event"==t.filter?t.filterClassActive:t.filterClass,on:{click:function(e){t.filter="Event",t.getData()}}},[t._v("\n        Acara\n    ")]),t._v(" "),l("div",{class:"Voice"==t.filter?t.filterClassActive:t.filterClass,on:{click:function(e){t.filter="Voice",t.getData()}}},[t._v("\n       Suara\n    ")])]),t._v(" "),l("section",{staticClass:"w-full rounded-xl pb-20 flex flex-wrap"},[t._l(t.quest.data,(function(e){return l("card-post",{key:e.id,attrs:{data:e},on:{balas:t.balasQuest}})})),t._v(" "),l("infinite-loading",{on:{infinite:t.loadMoregetData}},[l("div",{staticClass:"text-center flex w-full p-4",attrs:{slot:"no-more"},slot:"no-more"}),t._v(" "),l("div",{attrs:{slot:"no-results"},slot:"no-results"})])],2)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NewQuest:l(263).default,BalasQuest:l(262).default,CardPost:l(271).default})},732:function(t,e,l){"use strict";l.r(e);l(47),l(48);var r={scrollToTop:!0,layout:"no-header",middleware:"auth",data:function(){return{page:!1,forpage:""}},created:function(){this.$route.params.url.includes("@")?(this.page=!0,this.forpage="user"):(this.page=!0,this.forpage="group")}},o=l(11),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",["group"==t.forpage?l("detail-group",{attrs:{id:t.$route.params.url}}):t._e(),t._v(" "),"user"==t.forpage?l("detail-user",{attrs:{id:t.$route.params.url}}):t._e(),t._v(" "),t.page?t._e():l("div",[t._v("\n        404\n    ")])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DetailGroup:l(704).default,DetailUser:l(318).default})}}]);