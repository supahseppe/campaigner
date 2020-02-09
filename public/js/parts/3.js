(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"0lbY":function(t,e,n){"use strict";n.r(e);var a=n("vk7+"),i=n("Zc98"),r=n("SL1t"),s=n("f2QL"),o=n("E7jC"),c=n("xWf0"),l=n("a3pg"),u={name:"Edit",components:{SectionHeader:i.a,TextInput:r.a,LoadingButton:s.a,TrashedMessage:o.a,Wysiwyg:c.a,Btn:l.a},props:{character:{type:Object,default:function(){}}},data:function(){return{pageTitle:"Editing ".concat(this.character.title),pageDescription:"Updating a character.",sending:!1,form:{name:this.character.name,alias:this.character.alias,high_concept:this.character.high_concept,bio:this.character.bio,active:this.character.active,npc:!!this.character.npc}}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{submit:function(){var t=this;this.sending=!0,this.$inertia.patch(this.route("characters.update",this.character.slug),this.form).then((function(){return t.sending=!1}))},destroy:function(){confirm("Are you sure you want to delete this character?")&&this.$inertia.delete(this.route("characters.destroy",this.character.slug))},restore:function(){confirm("Are you sure you want to restore this character?")&&this.$inertia.put(this.route("characters.restore",this.character.slug))}},layout:a.a,metaInfo:function(){return{title:this.pageTitle,meta:[{name:"description",content:this.pageDescription}]}}},d=n("KHd+"),f=Object(d.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"h-screen container"},[n("section-header",[t._v("\n        Editing Character\n    ")]),t._v(" "),t.character.deleted_at?n("trashed-message",{staticClass:"mb-6",on:{restore:t.restore}},[t._v("\n        This character has been deleted.\n    ")]):t._e(),t._v(" "),n("form",{staticClass:"w-full p-4 bg-white rounded md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("div",{staticClass:"flex flex-wrap mb-6"},[n("text-input",{staticClass:"w-full mb-6",attrs:{label:"Name",type:"text",errors:t.$page.errors.name,required:"",autofocus:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),n("text-input",{staticClass:"w-full mb-6",attrs:{label:"Alias",type:"text",errors:t.$page.errors.alias,required:"",autofocus:""},model:{value:t.form.alias,callback:function(e){t.$set(t.form,"alias",e)},expression:"form.alias"}}),t._v(" "),n("text-input",{staticClass:"w-full mb-6",attrs:{label:"High Concept",type:"text",errors:t.$page.errors.high_concept,required:"",autofocus:""},model:{value:t.form.high_concept,callback:function(e){t.$set(t.form,"high_concept",e)},expression:"form.high_concept"}}),t._v(" "),n("div",{staticClass:"w-full mb-6"},[n("wysiwyg",{attrs:{label:"Description"},model:{value:t.form.bio,callback:function(e){t.$set(t.form,"bio",e)},expression:"form.bio"}})],1),t._v(" "),n("label",{staticClass:"w-full mb-6",attrs:{for:"active-field"}},[t._v("\n                Active: "+t._s(!!t.form.active)+"\n                "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.active,expression:"form.active"}],attrs:{type:"checkbox",id:"active-field"},domProps:{checked:Array.isArray(t.form.active)?t._i(t.form.active,null)>-1:t.form.active},on:{change:function(e){var n=t.form.active,a=e.target,i=!!a.checked;if(Array.isArray(n)){var r=t._i(n,null);a.checked?r<0&&t.$set(t.form,"active",n.concat([null])):r>-1&&t.$set(t.form,"active",n.slice(0,r).concat(n.slice(r+1)))}else t.$set(t.form,"active",i)}}})]),t._v(" "),n("btn",{on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.form.npc=!t.form.npc}}},[t.form.npc?n("p",[t._v("Convert to Character")]):n("p",[t._v("Convert to Npc")])])],1),t._v(" "),n("div",{staticClass:"flex flex-wrap items-center justify-between"},[t.character.deleted_at?t._e():n("button",{staticClass:"text-red-600 hover:underline",attrs:{tabindex:"-1",type:"button"},on:{click:t.destroy}},[t._v("\n                Delete Character\n            ")]),t._v(" "),n("loading-button",{staticClass:"px-4 py-2 font-bold text-gray-100 bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline",attrs:{loading:t.sending,type:"submit"}},[t._v("\n                Submit\n            ")])],1)])],1)}),[],!1,null,null,null);e.default=f.exports},E7jC:function(t,e,n){"use strict";var a={name:"TrashedMessage",components:{Icon:n("cv7c").a}},i=n("KHd+"),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-4 bg-yellow-400 rounded flex items-center justify-between max-w-3xl"},[n("div",{staticClass:"flex items-center"},[n("icon",{staticClass:"flex-shrink-0 w-4 h-4 fill-yellow-800 mr-2",attrs:{icon:"delete"}}),t._v(" "),n("div",{staticClass:"text-sm font-medium text-yellow-800"},[t._t("default")],2)],1),t._v(" "),n("button",{staticClass:"text-sm text-yellow-800 hover:underline",attrs:{tabindex:"-1",type:"button"},on:{click:function(e){return t.$emit("restore")}}},[t._v("\n        Restore\n    ")])])}),[],!1,null,null,null);e.a=r.exports},IbTx:function(t,e,n){var a=n("TWid");"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(a,i);a.locals&&(t.exports=a.locals)},OAA5:function(t,e,n){"use strict";var a=n("IbTx");n.n(a).a},SL1t:function(t,e,n){"use strict";var a={name:"TextInput",components:{},inheritAttrs:!1,props:{id:{type:String,default:function(){return"text-input-".concat(this._uid)}},type:{type:String,default:"text"},value:String,label:String,errors:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:{styles:function(){return{root:"",fieldset:"",label:"text-xs text-grey",text:"",input:"bg-transparent border-b m-auto block border-grey w-full mb-6 text-grey pb-1",description:""}}},watch:{},created:function(){},mounted:function(){},methods:{focus:function(){this.$refs.input.focus()},select:function(){this.$refs.input.select()},setSelectionRange:function(t,e){this.$refs.input.setSelectionRange(t,e)}}},i=n("KHd+"),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.label?n("label",{staticClass:"form-label",attrs:{for:t.id}},[t._v(t._s(t.label)+":")]):t._e(),t._v(" "),n("input",t._b({ref:"input",staticClass:"form-input",class:{error:t.errors.length},attrs:{id:t.id,type:t.type},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}},"input",t.$attrs,!1)),t._v(" "),t.errors.length?n("div",{staticClass:"form-error"},[n("p",[t._v(t._s(t.errors[0]))])]):t._e()])}),[],!1,null,null,null);e.a=r.exports},TWid:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,'.ProseMirror {\n  padding: 1rem;\n  padding: 0.5rem;\n  line-height: 1.5;\n  display: block;\n  width: 100%;\n  border-width: 1px;\n  color: #4a5568;\n  background-color: #fff;\n  font-family: Karla, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  border-radius: 0.25rem;\n  text-align: left;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  position: relative;\n}\n.ProseMirror [contenteditable=\'false\'] {\n  white-space: normal;\n}\n.ProseMirror [contenteditable=\'true\'] {\n  white-space: pre-wrap;\n}\n',""])},Zc98:function(t,e,n){"use strict";var a={name:"PageHeader",components:{},props:{},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},i=n("KHd+"),r=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-indigo-800 p-2 shadow text-xl text-white flex items-center justify-between w-full"},[e("span",{staticClass:"font-bold pl-2"},[this._t("default")],2),this._v(" "),e("div",{staticClass:"flex"},[this._t("aside")],2)])}),[],!1,null,null,null);e.a=r.exports},a3pg:function(t,e,n){"use strict";var a={name:"Btn",components:{},props:{href:{type:String,default:""}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},i=n("KHd+"),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.href?n("inertia-link",t._g({staticClass:"text-sm font-normal font-sans bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded",attrs:{href:t.href}},t.$listeners),[t._t("default")],2):n("button",t._g({staticClass:"text-sm font-normal font-sans bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"},t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.a=r.exports},f2QL:function(t,e,n){"use strict";var a={name:"LoadingButton",props:{loading:Boolean}},i=n("KHd+"),r=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"flex items-center",attrs:{disabled:this.loading}},[this.loading?e("div",{staticClass:"btn-spinner mr-2"}):this._e(),this._v(" "),this._t("default")],2)}),[],!1,null,null,null);e.a=r.exports},xWf0:function(t,e,n){"use strict";var a=n("zUJn"),i=n("8j27"),r=n("cv7c"),s={name:"Wysiwyg",components:{EditorContent:a.b,EditorMenuBar:a.c,Icon:r.a},props:["value","label"],data:function(){var t=this;return{editor:new a.a({content:this.value,extensions:[new i.a,new i.f,new i.g,new i.c({levels:[1,2,3,4]}),new i.d,new i.e,new i.h,new i.b,new i.i],onUpdate:function(e){var n=e.getJSON,a=e.getHTML;t.json=n(),t.html=a(),t.updateData()}}),json:"",html:""}},computed:{},watch:{},created:function(){},mounted:function(){},beforeDestroy:function(){this.editor.destroy()},methods:{updateData:function(){this.$emit("input",this.html)}}},o=(n("OAA5"),n("KHd+")),c=Object(o.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.label?n("p",{staticClass:"form-label"},[t._v(t._s(t.label))]):t._e(),t._v(" "),n("editor-menu-bar",{attrs:{editor:t.editor},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.commands,i=e.isActive;return[n("div",{staticClass:"text-black flex items-center justify-start"},[n("div",{staticClass:"mr-4"},[n("button",{class:{"is-active":i.bold()},on:{click:a.bold}},[n("icon",{attrs:{icon:"bold"}})],1),t._v(" "),n("button",{class:{"is-active":i.italic()},on:{click:a.italic}},[n("icon",{attrs:{icon:"italic"}})],1)]),t._v(" "),n("div",{staticClass:"mr-4"},[n("button",{class:{"is-active":i.bullet_list()},attrs:{type:"button"},on:{click:a.bullet_list}},[n("icon",{attrs:{icon:"bullets"}})],1),t._v(" "),n("button",{class:{"is-active":i.ordered_list()},attrs:{type:"button"},on:{click:a.ordered_list}},[n("icon",{attrs:{icon:"numbered"}})],1)]),t._v(" "),n("div",{staticClass:"mr-4"},[n("button",{class:{"is-active":i.heading({level:1})},attrs:{type:"button"},on:{click:function(t){return a.heading({level:1})}}},[n("icon",{attrs:{icon:"heading1"}})],1),t._v(" "),n("button",{class:{"is-active":i.heading({level:2})},attrs:{type:"button"},on:{click:function(t){return a.heading({level:2})}}},[n("icon",{attrs:{icon:"heading2"}})],1),t._v(" "),n("button",{class:{"is-active":i.heading({level:3})},attrs:{type:"button"},on:{click:function(t){return a.heading({level:3})}}},[n("icon",{attrs:{icon:"heading3"}})],1),t._v(" "),n("button",{class:{"is-active":i.heading({level:4})},attrs:{type:"button"},on:{click:function(t){return a.heading({level:4})}}},[n("icon",{attrs:{icon:"heading4"}})],1)]),t._v(" "),n("div",{staticClass:"mr-4"},[n("button",{class:{"is-active":i.link()},on:{click:a.link}},[n("icon",{attrs:{icon:"link"}})],1),t._v(" "),n("button",{staticClass:"menubar__button",on:{click:a.horizontal_rule}},[n("icon",{attrs:{icon:"minus"}})],1)]),t._v(" "),n("div",{staticClass:"ml-auto"},[n("button",{attrs:{type:"button"},on:{click:a.undo}},[n("icon",{attrs:{icon:"undo"}})],1),t._v(" "),n("button",{attrs:{type:"button"},on:{click:a.redo}},[n("icon",{attrs:{icon:"redo"}})],1)])])]}}])}),t._v(" "),n("editor-content",{attrs:{editor:t.editor}})],1)}),[],!1,null,null,null);e.a=c.exports}}]);