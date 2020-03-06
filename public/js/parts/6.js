(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{HBJR:function(t,e,n){"use strict";n.r(e);var i=n("vk7+"),s=n("Zc98"),a=n("SL1t"),o=n("f2QL"),r=n("xWf0"),l=n("f/2o"),c={name:"Create",components:{SectionHeader:s.a,Wysiwyg:r.a,"text-input":a.a,"loading-button":o.a},props:{},data:function(){return{pageTitle:"Adding new campaign",pageDescription:"Adding a new campaign",sending:!1,form:{title:null,description:null}}},computed:{syncedPageTitle:Object(l.c)("pageTitle")},watch:{},created:function(){},mounted:function(){this.syncedPageTitle=this.pageTitle},methods:{submit:function(){var t=this,e=this.route("campaigns.store");this.sending=!0,this.$inertia.post(e,{title:this.form.title,description:this.form.description}).then((function(){return t.sending=!1}))}},layout:i.a,metaInfo:function(){return{title:this.pageTitle,meta:[{name:"description",content:this.pageDescription}]}}},u=n("KHd+"),d=Object(u.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"h-screen container"},[n("section-header",[t._v("\n        Creating Campaign\n    ")]),t._v(" "),n("form",{staticClass:"w-full p-4 bg-white rounded md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("div",{staticClass:"flex flex-wrap mb-6"},[n("text-input",{staticClass:"w-full mb-6",attrs:{label:"Title",type:"text",errors:t.$page.errors.title,required:"",autofocus:""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}}),t._v(" "),n("div",{staticClass:"w-full"},[n("wysiwyg",{attrs:{label:"Description"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1)],1),t._v(" "),n("div",{staticClass:"flex flex-wrap items-center"},[n("loading-button",{staticClass:"px-4 py-2 font-bold text-gray-100 bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline",attrs:{loading:t.sending,type:"submit"}},[t._v("\n                Submit\n            ")])],1)])],1)}),[],!1,null,null,null);e.default=d.exports},IbTx:function(t,e,n){var i=n("TWid");"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(i,s);i.locals&&(t.exports=i.locals)},OAA5:function(t,e,n){"use strict";var i=n("IbTx");n.n(i).a},SL1t:function(t,e,n){"use strict";var i={name:"TextInput",components:{},inheritAttrs:!1,props:{id:{type:String,default:function(){return"text-input-".concat(this._uid)}},type:{type:String,default:"text"},value:String,label:String,errors:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{focus:function(){this.$refs.input.focus()},select:function(){this.$refs.input.select()},setSelectionRange:function(t,e){this.$refs.input.setSelectionRange(t,e)}}},s=n("KHd+"),a=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.label?n("label",{staticClass:"block text-sm font-medium leading-5 text-gray-700",attrs:{for:t.id}},[t._v("\n        "+t._s(t.label)+"\n    ")]):t._e(),t._v(" "),n("div",{staticClass:"mt-1 relative rounded-md shadow-sm"},[n("input",t._b({ref:"input",staticClass:"form-input block w-full sm:text-sm sm:leading-5",class:{"pr-10 border-red-300 text-red-900 focus:border-red-300 focus:shadow-outline-red":t.errors.length},attrs:{id:t.id,type:t.type},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}},"input",t.$attrs,!1)),t._v(" "),t.errors.length?n("div",{staticClass:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"},[n("svg",{staticClass:"h-5 w-5 text-red-500",attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z","clip-rule":"evenodd"}})])]):t._e()]),t._v(" "),t.errors.length?n("p",{staticClass:"mt-2 text-sm text-red-600"},[t._v(t._s(t.errors[0]))]):t._e()])}),[],!1,null,null,null);e.a=a.exports},TWid:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,'.ProseMirror {\n  padding: 0.5rem;\n  min-height: 6rem;\n  line-height: 1.5;\n  display: block;\n  width: 100%;\n  border-width: 1px;\n  color: #374151;\n  background-color: #ffffff;\n  font-family: Inter var, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  border-radius: 0.25rem;\n  text-align: left;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  position: relative;\n}\n.ProseMirror [contenteditable=\'false\'] {\n  white-space: normal;\n}\n.ProseMirror [contenteditable=\'true\'] {\n  white-space: pre-wrap;\n}\n@media (min-width: 640px) {\n.ProseMirror {\n    font-size: 0.875rem;\n}\n}\n',""])},Zc98:function(t,e,n){"use strict";var i=n("f/2o"),s={name:"PageHeader",components:{},props:{},data:function(){return{}},computed:{pageTitle:Object(i.c)("pageTitle")},watch:{},created:function(){},mounted:function(){},methods:{}},a=n("KHd+"),o=Object(a.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"py-6 mb-6 px-4 bg-white shadow md:flex md:items-center md:justify-between"},[e("div",{staticClass:"flex-1 min-w-0"},[e("h2",{staticClass:"text-2xl font-bold leading-7 sm:text-3xl sm:leading-9 sm:truncate"},[this._t("default",[this._v("\n                "+this._s(this.pageTitle)+"\n            ")])],2)]),this._v(" "),e("div",{staticClass:"mt-4 flex md:mt-0 md:ml-4"},[this._t("aside")],2)])}),[],!1,null,null,null);e.a=o.exports},f2QL:function(t,e,n){"use strict";var i={name:"LoadingButton",props:{loading:Boolean}},s=n("KHd+"),a=Object(s.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"flex items-center",attrs:{disabled:this.loading}},[this.loading?e("div",{staticClass:"btn-spinner mr-2"}):this._e(),this._v(" "),this._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},xWf0:function(t,e,n){"use strict";var i=n("zUJn"),s=n("8j27"),a=n("cv7c"),o={name:"Wysiwyg",components:{EditorContent:i.b,EditorMenuBar:i.c,Icon:a.a},props:["value","label","rows"],data:function(){var t=this;return{editor:new i.a({content:this.value,extensions:[new s.a,new s.f,new s.g,new s.c({levels:[1,2,3,4]}),new s.d,new s.e,new s.h,new s.b,new s.i],onUpdate:function(e){var n=e.getJSON,i=e.getHTML;t.json=n(),t.html=i(),t.updateData()}}),json:"",html:""}},computed:{},watch:{},created:function(){},mounted:function(){},beforeDestroy:function(){this.editor.destroy()},methods:{updateData:function(){this.$emit("input",this.html)}}},r=(n("OAA5"),n("KHd+")),l=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full"},[t.label?n("p",{staticClass:"form-label"},[t._v(t._s(t.label))]):t._e(),t._v(" "),n("editor-menu-bar",{attrs:{editor:t.editor},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.commands,s=e.isActive;return[n("div",{staticClass:"text-black flex items-center justify-start"},[n("div",{staticClass:"mr-1 md:mr-2"},[n("button",{class:{"is-active":s.bold()},on:{click:i.bold}},[n("icon",{attrs:{icon:"bold"}})],1),t._v(" "),n("button",{class:{"is-active":s.italic()},on:{click:i.italic}},[n("icon",{attrs:{icon:"italic"}})],1)]),t._v(" "),n("div",{staticClass:"mr-1 md:mr-2"},[n("button",{class:{"is-active":s.bullet_list()},attrs:{type:"button"},on:{click:i.bullet_list}},[n("icon",{attrs:{icon:"bullets"}})],1),t._v(" "),n("button",{class:{"is-active":s.ordered_list()},attrs:{type:"button"},on:{click:i.ordered_list}},[n("icon",{attrs:{icon:"numbered"}})],1)]),t._v(" "),n("div",{staticClass:"mr-1 md:mr-2"},[n("button",{class:{"is-active":s.heading({level:1})},attrs:{type:"button"},on:{click:function(t){return i.heading({level:1})}}},[n("icon",{attrs:{icon:"heading1"}})],1),t._v(" "),n("button",{class:{"is-active":s.heading({level:2})},attrs:{type:"button"},on:{click:function(t){return i.heading({level:2})}}},[n("icon",{attrs:{icon:"heading2"}})],1),t._v(" "),n("button",{class:{"is-active":s.heading({level:3})},attrs:{type:"button"},on:{click:function(t){return i.heading({level:3})}}},[n("icon",{attrs:{icon:"heading3"}})],1),t._v(" "),n("button",{class:{"is-active":s.heading({level:4})},attrs:{type:"button"},on:{click:function(t){return i.heading({level:4})}}},[n("icon",{attrs:{icon:"heading4"}})],1)]),t._v(" "),n("div",{staticClass:"mr-1 md:mr-2"},[n("button",{class:{"is-active":s.link()},on:{click:i.link}},[n("icon",{attrs:{icon:"link"}})],1),t._v(" "),n("button",{staticClass:"menubar__button",on:{click:i.horizontal_rule}},[n("icon",{attrs:{icon:"minus"}})],1)]),t._v(" "),n("div",{staticClass:"ml-auto"},[n("button",{attrs:{type:"button"},on:{click:i.undo}},[n("icon",{attrs:{icon:"undo"}})],1),t._v(" "),n("button",{attrs:{type:"button"},on:{click:i.redo}},[n("icon",{attrs:{icon:"redo"}})],1)])])]}}])}),t._v(" "),n("editor-content",{attrs:{editor:t.editor}})],1)}),[],!1,null,null,null);e.a=l.exports}}]);