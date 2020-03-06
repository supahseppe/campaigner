(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{Kxo5:function(t,e,s){"use strict";s.r(e);var i=s("SL1t"),n={metaInfo:{title:"Login"},components:{Icon:s("cv7c").a,"text-input":i.a},data:function(){return{sending:!1,form:{email:null,password:null,remember:null}}},methods:{submit:function(){var t=this;this.sending=!0,this.$inertia.post(this.route("login"),this.form).then((function(){return t.sending=!1}))}}},r=s("KHd+"),a=Object(r.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"min-h-screen bg-white flex"},[s("div",{staticClass:"flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"},[s("div",{staticClass:"mx-auto w-full max-w-sm"},[t._m(0),t._v(" "),s("div",{staticClass:"mt-8"},[s("div",[s("div",[s("p",{staticClass:"text-sm leading-5 font-medium text-gray-700"},[t._v("\n                            Sign in with\n                        ")]),t._v(" "),s("div",{staticClass:"mt-1 grid grid-cols-3 gap-3"},[s("div",[s("span",{staticClass:"w-full inline-flex rounded-md shadow-sm"},[s("button",{staticClass:"w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out",attrs:{type:"button"}},[s("icon",{attrs:{icon:"google",color:"gray-500"}})],1)])]),t._v(" "),s("div",[s("span",{staticClass:"w-full inline-flex rounded-md shadow-sm"},[s("button",{staticClass:"w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out",attrs:{type:"button"}},[s("icon",{attrs:{icon:"twitter",color:"gray-500"}})],1)])]),t._v(" "),s("div",[s("span",{staticClass:"w-full inline-flex rounded-md shadow-sm"},[s("button",{staticClass:"w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out",attrs:{type:"button"}},[s("icon",{attrs:{icon:"facebook",color:"gray-500"}})],1)])])])]),t._v(" "),t._m(1)]),t._v(" "),s("div",{staticClass:"mt-6"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("text-input",{attrs:{label:"Email Address",type:"email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),s("text-input",{staticClass:"mt-6",attrs:{label:"Password",type:"password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t._v(" "),s("div",{staticClass:"mt-6 flex items-center justify-between"},[s("div",{staticClass:"flex items-center"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.remember,expression:"form.remember"}],staticClass:"form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out",attrs:{id:"remember_me",type:"checkbox"},domProps:{checked:Array.isArray(t.form.remember)?t._i(t.form.remember,null)>-1:t.form.remember},on:{change:function(e){var s=t.form.remember,i=e.target,n=!!i.checked;if(Array.isArray(s)){var r=t._i(s,null);i.checked?r<0&&t.$set(t.form,"remember",s.concat([null])):r>-1&&t.$set(t.form,"remember",s.slice(0,r).concat(s.slice(r+1)))}else t.$set(t.form,"remember",n)}}}),t._v(" "),s("label",{staticClass:"ml-2 block text-sm leading-5 text-gray-900",attrs:{for:"remember_me"}},[t._v("\n                                    Remember me\n                                ")])]),t._v(" "),s("div",{staticClass:"text-sm leading-5"},[s("a",{staticClass:"font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150",attrs:{href:t.route("password.request")}},[t._v("\n                                    Forgot your password?\n                                ")])])]),t._v(" "),t._m(2)],1)])])])]),t._v(" "),t._m(3)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticClass:"h-12 w-auto",attrs:{src:"/img/workflow-mark-on-white.svg",alt:"Workflow"}}),this._v(" "),e("h2",{staticClass:"mt-6 text-3xl leading-9 font-extrabold text-gray-900"},[this._v("\n                    Sign in to your account\n                ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mt-6 relative"},[e("div",{staticClass:"absolute inset-0 flex items-center"},[e("div",{staticClass:"w-full border-t border-gray-300"})]),this._v(" "),e("div",{staticClass:"relative flex justify-center text-sm leading-5"},[e("span",{staticClass:"px-2 bg-white text-gray-500"},[this._v("\n                                Or continue with\n                            ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mt-6"},[e("span",{staticClass:"block w-full rounded-md shadow-sm"},[e("button",{staticClass:"w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out",attrs:{type:"submit"}},[this._v("\n                                    Sign in\n                                ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hidden lg:block relative w-0 flex-1"},[e("img",{staticClass:"absolute inset-0 h-full w-full object-cover",attrs:{src:"/img/dice.jpg",alt:""}})])}],!1,null,null,null);e.default=a.exports},SL1t:function(t,e,s){"use strict";var i={name:"TextInput",components:{},inheritAttrs:!1,props:{id:{type:String,default:function(){return"text-input-".concat(this._uid)}},type:{type:String,default:"text"},value:String,label:String,errors:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{focus:function(){this.$refs.input.focus()},select:function(){this.$refs.input.select()},setSelectionRange:function(t,e){this.$refs.input.setSelectionRange(t,e)}}},n=s("KHd+"),r=Object(n.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.label?s("label",{staticClass:"block text-sm font-medium leading-5 text-gray-700",attrs:{for:t.id}},[t._v("\n        "+t._s(t.label)+"\n    ")]):t._e(),t._v(" "),s("div",{staticClass:"mt-1 relative rounded-md shadow-sm"},[s("input",t._b({ref:"input",staticClass:"form-input block w-full sm:text-sm sm:leading-5",class:{"pr-10 border-red-300 text-red-900 focus:border-red-300 focus:shadow-outline-red":t.errors.length},attrs:{id:t.id,type:t.type},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}},"input",t.$attrs,!1)),t._v(" "),t.errors.length?s("div",{staticClass:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"},[s("svg",{staticClass:"h-5 w-5 text-red-500",attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z","clip-rule":"evenodd"}})])]):t._e()]),t._v(" "),t.errors.length?s("p",{staticClass:"mt-2 text-sm text-red-600"},[t._v(t._s(t.errors[0]))]):t._e()])}),[],!1,null,null,null);e.a=r.exports},cv7c:function(t,e,s){"use strict";var i=s("dY/k"),n=s("o+7w"),r=s("sAq/"),a=s("rKjF"),o=s("AUie"),l=s("3dlv"),u=s("xV1l"),c=s("JnJ3"),d=s("tT9Y"),m=s("zovK"),f=s("cUN+"),v=s("Gkw6"),p=s("Fvdx"),h=s("Bkfh"),g=s("onJN"),b=s("MHhE"),x=s("9s2f"),w=s("gbah"),y=s("XxJV"),_=s("XGJR"),C=s("WiRQ"),k=s("wAoa"),$=s("7tgS"),S=s("2+I2"),j=s("1d8E"),A=s("55LK"),E={name:"Icon",components:{Plus:i.a,Minus:n.a,bold:r.a,italic:a.a,bullets:o.a,numbered:l.a,heading1:u.a,heading2:c.a,heading3:d.a,heading4:m.a,Link:f.a,Undo:v.a,Redo:p.a,Delete:h.a,globe:g.a,masks:b.a,fawkes:x.a,people:w.a,mountains:y.a,Home:_.a,houses:C.a,group:k.a,Tools:$.a,Google:S.a,Facebook:j.a,Twitter:A.a},props:{icon:{type:String,default:null},title:{type:String,default:null},color:{type:String,default:null},size:{type:Number,default:24},decorative:{type:Boolean,default:!0}},data:function(){return{}},computed:{hex:function(){if(this.color){var t=this.color.split("-");return this.$tailwind.theme.colors[t[0]][t[1]]}return null}},watch:{},created:function(){},mounted:function(){},methods:{}},z=s("KHd+"),J=Object(z.a)(E,(function(){var t=this.$createElement;return(this._self._c||t)(this.icon,{tag:"component",attrs:{title:this.title,"fill-color":this.hex,size:this.size,decorative:this.decorative}})}),[],!1,null,null,null);e.a=J.exports}}]);