(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"8fl7":function(t,e,n){"use strict";n.r(e);var a=n("vk7+"),s=n("Zc98"),c=n("a3pg"),i=n("8oW1"),o=n("f/2o"),r={name:"Character",components:{Container:i.a,SectionHeader:s.a,Btn:c.a},props:{character:{type:Object,default:function(){}}},data:function(){return{pageTitle:"Character: ".concat(this.character.name),pageDescription:"Viewing the character ".concat(this.character.name,".")}},computed:{syncedPageTitle:Object(o.c)("pageTitle")},watch:{},created:function(){},mounted:function(){this.syncedPageTitle=this.pageTitle},methods:{},layout:a.a,metaInfo:function(){return{title:this.pageTitle,meta:[{name:"description",content:this.pageDescription}]}}},l=n("KHd+"),u=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{},[n("section-header",{scopedSlots:t._u([{key:"aside",fn:function(){return[n("btn",{attrs:{href:t.route("characters.edit",t.character.slug)}},[t._v("\n                Edit\n            ")])]},proxy:!0}])},[n("div",[n("h1",[t._v(t._s(t.character.name))]),t._v(" "),t.character.alias?n("p",{staticClass:"text-base font-normal italic opacity-75"},[t._v("\n                ( "+t._s(t.character.alias)+" )\n            ")]):t._e()])]),t._v(" "),n("container",[n("p",[t._v("\n            High Concept: "+t._s(t.character.high_concept)+"\n            "),t.character.npc?n("span",{staticClass:"p-2 bg-indigo-300"},[t._v("NPC")]):t._e()]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.character.bio)}})])],1)}),[],!1,null,null,null);e.default=u.exports},"8oW1":function(t,e,n){"use strict";var a={components:{},data:function(){return{}},computed:{},methods:{}},s=n("KHd+"),c=Object(s.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"pt-2 pb-6 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 md:py-6"},[this._t("default")],2)}),[],!1,null,null,null);e.a=c.exports},Zc98:function(t,e,n){"use strict";var a=n("f/2o"),s={name:"PageHeader",components:{},props:{},data:function(){return{}},computed:{pageTitle:Object(a.c)("pageTitle")},watch:{},created:function(){},mounted:function(){},methods:{}},c=n("KHd+"),i=Object(c.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"py-6 mb-6 px-4 bg-white shadow md:flex md:items-center md:justify-between"},[e("div",{staticClass:"flex-1 min-w-0"},[e("h2",{staticClass:"text-2xl font-bold leading-7 sm:text-3xl sm:leading-9 sm:truncate"},[this._t("default",[this._v("\n                "+this._s(this.pageTitle)+"\n            ")])],2)]),this._v(" "),e("div",{staticClass:"mt-4 flex md:mt-0 md:ml-4"},[this._t("aside")],2)])}),[],!1,null,null,null);e.a=i.exports},a3pg:function(t,e,n){"use strict";var a={name:"Btn",components:{},props:{href:{type:String,default:""},color:{type:String,default:"indigo"}},data:function(){return{}},computed:{classes:function(){return["inline-flex","items-center","px-4","py-2","border","border-transparent","text-base","leading-6","font-medium","rounded-md","text-white","bg-".concat(this.color,"-600"),"hover:bg-".concat(this.color,"-500"),"focus:outline-none","focus:border-".concat(this.color,"-700"),"focus:shadow-outline-".concat(this.color),"active:bg-".concat(this.color,"-700"),"transition","ease-in-out","duration-150"]}},watch:{},created:function(){},mounted:function(){},methods:{}},s=n("KHd+"),c=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.href?n("span",{staticClass:"inline-flex rounded-md shadow-sm"},[n("inertia-link",t._g({class:t.classes,attrs:{href:t.href}},t.$listeners),[t._t("default")],2)],1):n("span",{staticClass:"inline-flex rounded-md shadow-sm"},[n("button",t._g({class:t.classes,attrs:{type:"button"}},t.$listeners),[t._t("default")],2)])}),[],!1,null,null,null);e.a=c.exports}}]);