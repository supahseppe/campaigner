(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{Zc98:function(t,e,n){"use strict";var a={name:"PageHeader",components:{},props:{},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},i=n("KHd+"),s=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-indigo-800 p-2 shadow text-xl text-white flex items-center justify-between w-full"},[e("span",{staticClass:"font-bold pl-2"},[this._t("default")],2),this._v(" "),e("div",{staticClass:"flex"},[this._t("aside")],2)])}),[],!1,null,null,null);e.a=s.exports},a3pg:function(t,e,n){"use strict";var a={name:"Btn",components:{},props:{href:{type:String,default:""}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},i=n("KHd+"),s=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.href?n("inertia-link",t._g({staticClass:"text-sm font-normal font-sans bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded",attrs:{href:t.href}},t.$listeners),[t._t("default")],2):n("button",t._g({staticClass:"text-sm font-normal font-sans bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"},t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},qIVb:function(t,e,n){"use strict";n.r(e);var a=n("vk7+"),i=n("Zc98"),s=n("a3pg"),c={name:"Campaign",components:{SectionHeader:i.a,Btn:s.a},props:{campaign:{type:Object,default:function(){}}},data:function(){return{pageTitle:"Campaign: ".concat(this.campaign.title),pageDescription:"Viewing the ".concat(this.campaign.title," campaign.")}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{},layout:a.a,metaInfo:function(){return{title:this.pageTitle,meta:[{name:"description",content:this.pageDescription}]}}},o=n("KHd+"),r=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"h-screen container"},[n("section-header",{staticClass:"px-4",scopedSlots:t._u([{key:"aside",fn:function(){return[n("btn",{attrs:{href:t.route("campaigns.edit",t.campaign.slug)}},[t._v("\n                Edit\n            ")])]},proxy:!0}])},[n("h1",[t._v(t._s(t.campaign.title))])]),t._v(" "),n("section",{staticClass:"p-4"},[n("div",{domProps:{innerHTML:t._s(t.campaign.description)}})])],1)}),[],!1,null,null,null);e.default=r.exports}}]);