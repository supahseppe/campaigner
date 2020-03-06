(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{HjfO:function(t,e,a){"use strict";a.r(e);var s=a("f/2o"),i=a("vk7+"),n=a("S1Fv"),l=a("a3pg"),r=a("cv7c"),o={name:"Dashboard",layout:i.a,components:{Icon:r.a,Btn:l.a,Panel:n.a},props:["campaigns","characters"],data:function(){return{pageTitle:"Dashboard",pageDescription:"User Dashboard"}},computed:{syncedPageTitle:Object(s.c)("pageTitle")},watch:{},created:function(){},mounted:function(){this.syncedPageTitle=this.pageTitle},methods:{},metaInfo:function(){return{title:this.pageTitle,meta:[{name:"description",content:this.pageDescription}]}}},c=a("KHd+"),d=Object(c.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"p-4"},[a("panel",{staticClass:"mb-6"},[a("div",{staticClass:"bg-white px-4 py-5 border-b border-gray-200 sm:px-6 flex items-center justify-between"},[a("h3",{staticClass:"text-lg leading-6 font-medium text-gray-900"},[t._v("\n                    Campaigns\n                ")]),t._v(" "),a("btn",{attrs:{href:t.route("campaigns.create")}},[a("p",[t._v("Create")]),t._v(" "),a("icon",{staticClass:"ml-1",attrs:{icon:"plus",color:"white"}})],1)],1),t._v(" "),a("div",{staticClass:"px-4 py-5 sm:px-6"},[t.campaigns.data.length?[a("ul",t._l(t.campaigns.data,(function(e,s){return a("li",{key:s},[a("inertia-link",{staticClass:"block rounded hover:bg-indigo-100 focus:outline-none focus:bg-indigo-100 transition duration-150 ease-in-out",attrs:{href:t.route("campaigns.show",[e.slug])}},[a("div",{staticClass:"flex items-center pr-4 py-4 sm:px-4"},[a("div",{staticClass:"min-w-0 flex-1 flex items-center"},[a("div",{staticClass:"min-w-0 flex-1 md:grid md:grid-cols-2 md:gap-4"},[a("div",{staticClass:"text-sm leading-5 font-medium text-indigo-600 truncate"},[t._v("\n                                                "+t._s(e.title)+"\n                                            ")]),t._v(" "),a("div",{staticClass:"pt-4 flex-shrink-0 sm:pt-0 sm:ml-auto"},[a("div",{staticClass:"flex overflow-hidden"},[a("img",{staticClass:"inline-block h-6 w-6 rounded-full text-white shadow-solid",attrs:{src:"https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:""}}),t._v(" "),a("img",{staticClass:"-ml-1 inline-block h-6 w-6 rounded-full text-white shadow-solid",attrs:{src:"https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:""}}),t._v(" "),a("img",{staticClass:"-ml-1 inline-block h-6 w-6 rounded-full text-white shadow-solid",attrs:{src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",alt:""}}),t._v(" "),a("img",{staticClass:"-ml-1 inline-block h-6 w-6 rounded-full text-white shadow-solid",attrs:{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:""}})])])])]),t._v(" "),a("div",[a("svg",{staticClass:"h-5 w-5 text-gray-400",attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])])])])],1)})),0)]:a("p",[t._v("\n                    You have no campaigns.\n                    "),a("inertia-link",{staticClass:"text-indigo-600 hover:text-indigo-700 focus:text-indigo-700",attrs:{href:t.route("campaigns.create")}},[t._v("\n                        Make one now!\n                    ")])],1)],2)]),t._v(" "),a("panel",{staticClass:"mb-6"},[a("div",{staticClass:"bg-white px-4 py-5 border-b border-gray-200 sm:px-6 flex items-center justify-between"},[a("h3",{staticClass:"text-lg leading-6 font-medium text-gray-900"},[t._v("\n                    Characters\n                ")]),t._v(" "),a("btn",{attrs:{href:t.route("campaigns.create")}},[a("p",[t._v("Create")]),t._v(" "),a("icon",{staticClass:"ml-1",attrs:{icon:"plus",color:"white"}})],1)],1),t._v(" "),a("div",{staticClass:"px-4 py-5 sm:px-6"},[t.characters.data.length?[a("ul",{staticClass:"list-disc"},t._l(t.characters.data,(function(e,s){return a("li",{key:s,staticClass:"ml-4"},[a("inertia-link",{staticClass:"block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out",attrs:{href:t.route("characters.show",[e.slug])}},[a("div",{staticClass:"flex items-center px-4 py-4 sm:px-6"},[a("div",{staticClass:"min-w-0 flex-1 flex items-center"},[a("div",{staticClass:"flex-shrink-0"},[a("img",{staticClass:"h-12 w-12 rounded-full",attrs:{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:""}})]),t._v(" "),a("div",{staticClass:"min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4"},[a("div",[a("div",{staticClass:"text-sm leading-5 font-medium text-indigo-600 truncate"},[t._v("\n                                                    "+t._s(e.name)+"\n                                                ")]),t._v(" "),a("div",{staticClass:"mt-2 flex items-center text-sm leading-5 text-gray-500"},[a("span",{staticClass:"truncate"},[t._v("\n                                                        "+t._s(e.high_concept)+"\n                                                    ")])])]),t._v(" "),a("div",{staticClass:"hidden md:block"},[a("div",[a("div",{staticClass:"text-sm leading-5 text-gray-900"},[t._v("\n                                                        Played by\n                                                        "+t._s(e.player[0].username)+"\n                                                    ")]),t._v(" "),a("div",{staticClass:"mt-2 flex items-center text-sm leading-5 text-gray-500"},[e.active?a("p",[t._v("\n                                                            Currently active\n                                                        ")]):a("p",[t._v("\n                                                            Currently inactive\n                                                        ")])])])])])]),t._v(" "),a("div",[a("svg",{staticClass:"h-5 w-5 text-gray-400",attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])])])])],1)})),0)]:a("p",[t._v("\n                    You have no characters.\n                    "),a("inertia-link",{staticClass:"text-indigo-600 hover:text-indigo-700 focus:text-indigo-700",attrs:{href:t.route("characters.create")}},[t._v("\n                        Make one now!\n                    ")])],1)],2)])],1)])}),[],!1,null,null,null);e.default=d.exports},S1Fv:function(t,e,a){"use strict";var s={name:"Panel"},i=a("KHd+"),n=Object(i.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"bg-white overflow-hidden sm:rounded-lg sm:shadow max-w-percent-90 mx-auto"},[this._t("default")],2)}),[],!1,null,null,null);e.a=n.exports},a3pg:function(t,e,a){"use strict";var s={name:"Btn",components:{},props:{href:{type:String,default:""},color:{type:String,default:"indigo"}},data:function(){return{}},computed:{classes:function(){return["inline-flex","items-center","px-4","py-2","border","border-transparent","text-base","leading-6","font-medium","rounded-md","text-white","bg-".concat(this.color,"-600"),"hover:bg-".concat(this.color,"-500"),"focus:outline-none","focus:border-".concat(this.color,"-700"),"focus:shadow-outline-".concat(this.color),"active:bg-".concat(this.color,"-700"),"transition","ease-in-out","duration-150"]}},watch:{},created:function(){},mounted:function(){},methods:{}},i=a("KHd+"),n=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.href?a("span",{staticClass:"inline-flex rounded-md shadow-sm"},[a("inertia-link",t._g({class:t.classes,attrs:{href:t.href}},t.$listeners),[t._t("default")],2)],1):a("span",{staticClass:"inline-flex rounded-md shadow-sm"},[a("button",t._g({class:t.classes,attrs:{type:"button"}},t.$listeners),[t._t("default")],2)])}),[],!1,null,null,null);e.a=n.exports}}]);