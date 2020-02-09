(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"6+6M":function(t,e,a){"use strict";var n=a("Zc98"),s=a("a3pg"),l={name:"BrowseLayout",components:{SectionHeader:n.a,Btn:s.a},props:{model:{type:String,default:"Model"},plural:{type:String,default:null},title:{type:String,default:null}},computed:{models:function(){return this.plural?this.plural:this.model+"s"}},methods:{capitalize:function(t){var e=t[0]||t.charAt(0);return e?e.toUpperCase()+t.slice(1):""}}},r=a("KHd+"),i=Object(r.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"min-h-screen h-screen max-h-screen pb-40 bg-gray-300"},[a("section-header",{scopedSlots:t._u([{key:"aside",fn:function(){return[t._t("header-buttons",[a("btn",{attrs:{href:t.route(t.models+".create")}},[t._v("\n                    Create new "+t._s(t.capitalize(t.model))+"\n                ")])]),t._v(" "),t._t("extra-header-buttons")]},proxy:!0}],null,!0)},[t.title?a("h1",[t._v(t._s(t.title))]):a("h1",[t._v("Your "+t._s(t.capitalize(t.models)))])]),t._v(" "),a("div",{staticClass:"px-4 py-2 flex items-center border-b bg-gray-200"},[a("button",{staticClass:"flex items-center text-xs font-semibold text-gray-600"},[t._v("\n            Sorted by Date\n            "),a("svg",{staticClass:"ml-1 h-6 w-6 fill-current text-gray-500",attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M7.293 9.293a1 1 0 011.414 0L12 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}})])]),t._v(" "),a("button",[a("svg",{staticClass:"h-6 w-6 fill-current text-gray-500",attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M16 3H3a1 1 0 000 2h13a1 1 0 100-2zm-4 4H3a1 1 0 000 2h9a1 1 0 100-2zm-9 4h6a1 1 0 110 2H3a1 1 0 110-2zm9.293.293l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L18 10.414V20a1 1 0 11-2 0v-9.586l-2.293 2.293a1 1 0 01-1.414-1.414z"}})])])]),t._v(" "),a("div",{staticClass:"flex flex-wrap justify-start w-full h-full border-b p-2 overflow-y-auto"},[t._t("default")],2)],1)}),[],!1,null,"07ff0ef0",null);e.a=i.exports},"9vvT":function(t,e,a){"use strict";a.r(e);var n=a("vk7+"),s=a("6+6M"),l=a("S1Fv"),r={name:"Browse",components:{BrowseLayout:s.a,Panel:l.a},props:{pager:{type:Object,default:function(){}}},data:function(){return{pageTitle:"Browsing Tasks",description:"Viewing all tasks associated with the current user"}},computed:{tasks:function(){return this.pager.data}},watch:{},created:function(){},mounted:function(){},methods:{},layout:n.a,metaInfo:function(){return{title:this.pageTitle,meta:[{name:"description",content:this.pageDescription}]}}},i=a("KHd+"),o=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"h-screen container"},[a("browse-layout",{attrs:{model:"task"}},[a("div",{staticClass:"flex-grow w-full pt-2 p-4 flex"},[t._l(t.tasks,(function(e){return[a("panel",{key:e.id,staticClass:"flex-1 max-w-sm lg:max-w-md first:mr-0 mr-4"},[a("h1",{staticClass:"text-base font-semibold leading-tight xl:text-lg text-gray-900"},[t._v("\n                        "+t._s(e.name)+"\n                    ")])])]}))],2)])],1)}),[],!1,null,null,null);e.default=o.exports},S1Fv:function(t,e,a){"use strict";var n={name:"Panel"},s=a("KHd+"),l=Object(s.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"mt-3 px-6 pt-4 pb-6 xl:px-10 xl:pt-6 xl:pb-8 bg-white rounded-lg shadow"},[this._t("default")],2)}),[],!1,null,null,null);e.a=l.exports},Zc98:function(t,e,a){"use strict";var n={name:"PageHeader",components:{},props:{},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},s=a("KHd+"),l=Object(s.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-indigo-800 p-2 shadow text-xl text-white flex items-center justify-between w-full"},[e("span",{staticClass:"font-bold pl-2"},[this._t("default")],2),this._v(" "),e("div",{staticClass:"flex"},[this._t("aside")],2)])}),[],!1,null,null,null);e.a=l.exports},a3pg:function(t,e,a){"use strict";var n={name:"Btn",components:{},props:{href:{type:String,default:""}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},s=a("KHd+"),l=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.href?a("inertia-link",t._g({staticClass:"text-sm font-normal font-sans bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded",attrs:{href:t.href}},t.$listeners),[t._t("default")],2):a("button",t._g({staticClass:"text-sm font-normal font-sans bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"},t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.a=l.exports}}]);