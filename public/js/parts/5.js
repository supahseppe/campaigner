(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{IbTx:function(t,e,n){var i=n("TWid");"string"==typeof i&&(i=[[t.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(i,a);i.locals&&(t.exports=i.locals)},OAA5:function(t,e,n){"use strict";var i=n("IbTx");n.n(i).a},SL1t:function(t,e,n){"use strict";var i={name:"TextInput",components:{},inheritAttrs:!1,props:{id:{type:String,default:function(){return"text-input-".concat(this._uid)}},type:{type:String,default:"text"},value:String,label:String,errors:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:{styles:function(){return{root:"",fieldset:"",label:"text-xs text-grey",text:"",input:"bg-transparent border-b m-auto block border-grey w-full mb-6 text-grey pb-1",description:""}}},watch:{},created:function(){},mounted:function(){},methods:{focus:function(){this.$refs.input.focus()},select:function(){this.$refs.input.select()},setSelectionRange:function(t,e){this.$refs.input.setSelectionRange(t,e)}}},a=n("KHd+"),o=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.label?n("label",{staticClass:"form-label",attrs:{for:t.id}},[t._v(t._s(t.label)+":")]):t._e(),t._v(" "),n("input",t._b({ref:"input",staticClass:"form-input",class:{error:t.errors.length},attrs:{id:t.id,type:t.type},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}},"input",t.$attrs,!1)),t._v(" "),t.errors.length?n("div",{staticClass:"form-error"},[n("p",[t._v(t._s(t.errors[0]))])]):t._e()])}),[],!1,null,null,null);e.a=o.exports},TWid:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,'.ProseMirror {\n  padding: 1rem;\n  padding: 0.5rem;\n  line-height: 1.5;\n  display: block;\n  width: 100%;\n  border-width: 1px;\n  color: #4a5568;\n  background-color: #fff;\n  font-family: Karla, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  border-radius: 0.25rem;\n  text-align: left;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  position: relative;\n}\n.ProseMirror [contenteditable=\'false\'] {\n  white-space: normal;\n}\n.ProseMirror [contenteditable=\'true\'] {\n  white-space: pre-wrap;\n}\n',""])},cv7c:function(t,e,n){"use strict";var i=n("o+7w"),a=n("sAq/"),o=n("rKjF"),s=n("AUie"),r=n("3dlv"),l=n("xV1l"),c=n("JnJ3"),u=n("tT9Y"),d=n("zovK"),p=n("cUN+"),f=n("Gkw6"),m=n("Fvdx"),b=n("Bkfh"),v=n("onJN"),h=n("MHhE"),g=n("9s2f"),x=n("gbah"),w=n("XxJV"),_=n("WiRQ"),y=n("wAoa"),k=n("7tgS"),C={name:"Icon",components:{minus:i.a,bold:a.a,italic:o.a,bullets:s.a,numbered:r.a,heading1:l.a,heading2:c.a,heading3:u.a,heading4:d.a,Link:p.a,Undo:f.a,Redo:m.a,Delete:b.a,GlobeModel:v.a,DramaMasks:h.a,GuyFawkesMask:g.a,AccountMultipleOutline:x.a,mountains:w.a,houses:_.a,group:y.a,Tools:k.a},props:{icon:{type:String,default:null},title:{type:String,default:null},color:{type:String,default:null},size:{type:Number,default:24},decorative:{type:Boolean,default:!0}},data:function(){return{}},computed:{hex:function(){if(this.color){var t=this.color.split("-");return this.$tailwind.theme.colors[t[0]][t[1]]}return null}},watch:{},created:function(){},mounted:function(){},methods:{}},S=n("KHd+"),A=Object(S.a)(C,(function(){var t=this.$createElement;return(this._self._c||t)(this.icon,{tag:"component",attrs:{title:this.title,fillColor:this.hex,size:this.size,decorative:this.decorative}})}),[],!1,null,null,null);e.a=A.exports},f2QL:function(t,e,n){"use strict";var i={name:"LoadingButton",props:{loading:Boolean}},a=n("KHd+"),o=Object(a.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"flex items-center",attrs:{disabled:this.loading}},[this.loading?e("div",{staticClass:"btn-spinner mr-2"}):this._e(),this._v(" "),this._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},vzev:function(t,e,n){"use strict";n.r(e);var i=n("SL1t"),a=n("f2QL"),o={name:"InitialCampaign",components:{Wysiwyg:n("xWf0").a,"text-input":i.a,"loading-button":a.a},props:{},data:function(){return{pageTitle:"Adding new campaign",pageDescription:"Adding a new campaign",sending:!1,form:{title:null,description:null,default:!0}}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{submit:function(){var t=this,e=this.route("campaigns.store");this.sending=!0,this.$inertia.post(e,{title:this.form.title,description:this.form.description}).then((function(){return t.sending=!1}))}},metaInfo:function(){return{title:this.pageTitle,meta:[{name:"description",content:this.pageDescription}]}}},s=n("KHd+"),r=Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mx-auto h-screen"},[n("div",{staticClass:"flex items-center justify-center h-full"},[n("div",{staticClass:"w-full max-w-sm lg:max-w-md"},[n("div",{staticClass:"flex flex-col break-words bg-white border border-2 rounded shadow-md"},[n("div",{staticClass:"px-6 py-3 mb-0 font-bold font-lg text-white bg-indigo-500"},[t._v("\n                    Please create a campaign\n                ")]),t._v(" "),n("form",{staticClass:"w-full p-4 bg-white rounded md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("div",{staticClass:"flex flex-wrap mb-6"},[n("text-input",{staticClass:"w-full mb-6",attrs:{label:"Title",type:"text",errors:t.$page.errors.title,required:"",autofocus:""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}}),t._v(" "),n("div",{staticClass:"w-full"},[n("wysiwyg",{attrs:{label:"Description"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1)],1),t._v(" "),n("div",{staticClass:"flex flex-wrap items-center"},[n("loading-button",{staticClass:"px-4 py-2 font-bold text-gray-100 bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline",attrs:{loading:t.sending,type:"submit"}},[t._v("\n                            Submit\n                        ")])],1)]),t._v(" "),n("div",{staticClass:"px-6 py-3 mb-0 text-sm bg-indigo-200"},[n("inertia-link",{attrs:{href:t.route("campaigns.index")}},[t._v("\n                        Already a part of a campaign? Search for it here.\n                    ")])],1)])])])])}),[],!1,null,null,null);e.default=r.exports},xWf0:function(t,e,n){"use strict";var i=n("zUJn"),a=n("8j27"),o=n("cv7c"),s={name:"Wysiwyg",components:{EditorContent:i.b,EditorMenuBar:i.c,Icon:o.a},props:["value","label"],data:function(){var t=this;return{editor:new i.a({content:this.value,extensions:[new a.a,new a.f,new a.g,new a.c({levels:[1,2,3,4]}),new a.d,new a.e,new a.h,new a.b,new a.i],onUpdate:function(e){var n=e.getJSON,i=e.getHTML;t.json=n(),t.html=i(),t.updateData()}}),json:"",html:""}},computed:{},watch:{},created:function(){},mounted:function(){},beforeDestroy:function(){this.editor.destroy()},methods:{updateData:function(){this.$emit("input",this.html)}}},r=(n("OAA5"),n("KHd+")),l=Object(r.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.label?n("p",{staticClass:"form-label"},[t._v(t._s(t.label))]):t._e(),t._v(" "),n("editor-menu-bar",{attrs:{editor:t.editor},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.commands,a=e.isActive;return[n("div",{staticClass:"text-black flex items-center justify-start"},[n("div",{staticClass:"mr-4"},[n("button",{class:{"is-active":a.bold()},on:{click:i.bold}},[n("icon",{attrs:{icon:"bold"}})],1),t._v(" "),n("button",{class:{"is-active":a.italic()},on:{click:i.italic}},[n("icon",{attrs:{icon:"italic"}})],1)]),t._v(" "),n("div",{staticClass:"mr-4"},[n("button",{class:{"is-active":a.bullet_list()},attrs:{type:"button"},on:{click:i.bullet_list}},[n("icon",{attrs:{icon:"bullets"}})],1),t._v(" "),n("button",{class:{"is-active":a.ordered_list()},attrs:{type:"button"},on:{click:i.ordered_list}},[n("icon",{attrs:{icon:"numbered"}})],1)]),t._v(" "),n("div",{staticClass:"mr-4"},[n("button",{class:{"is-active":a.heading({level:1})},attrs:{type:"button"},on:{click:function(t){return i.heading({level:1})}}},[n("icon",{attrs:{icon:"heading1"}})],1),t._v(" "),n("button",{class:{"is-active":a.heading({level:2})},attrs:{type:"button"},on:{click:function(t){return i.heading({level:2})}}},[n("icon",{attrs:{icon:"heading2"}})],1),t._v(" "),n("button",{class:{"is-active":a.heading({level:3})},attrs:{type:"button"},on:{click:function(t){return i.heading({level:3})}}},[n("icon",{attrs:{icon:"heading3"}})],1),t._v(" "),n("button",{class:{"is-active":a.heading({level:4})},attrs:{type:"button"},on:{click:function(t){return i.heading({level:4})}}},[n("icon",{attrs:{icon:"heading4"}})],1)]),t._v(" "),n("div",{staticClass:"mr-4"},[n("button",{class:{"is-active":a.link()},on:{click:i.link}},[n("icon",{attrs:{icon:"link"}})],1),t._v(" "),n("button",{staticClass:"menubar__button",on:{click:i.horizontal_rule}},[n("icon",{attrs:{icon:"minus"}})],1)]),t._v(" "),n("div",{staticClass:"ml-auto"},[n("button",{attrs:{type:"button"},on:{click:i.undo}},[n("icon",{attrs:{icon:"undo"}})],1),t._v(" "),n("button",{attrs:{type:"button"},on:{click:i.redo}},[n("icon",{attrs:{icon:"redo"}})],1)])])]}}])}),t._v(" "),n("editor-content",{attrs:{editor:t.editor}})],1)}),[],!1,null,null,null);e.a=l.exports}}]);