(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{AcTO:function(t,e,n){"use strict";n.r(e);var i=n("vk7+"),o=n("SL1t"),a=n("f2QL"),s=n("E7jC"),c=n("xWf0"),r=n("BQuk"),l=n("f/2o"),u={name:"Edit",components:{AutoComplete:r.a,TextInput:o.a,LoadingButton:a.a,TrashedMessage:s.a,Wysiwyg:c.a},props:{faction:{type:Object,default:function(){}}},data:function(){return{pageTitle:"Editing ".concat(this.faction.name),pageDescription:"Updating a faction.",sending:!1,form:{name:this.faction.name,description:this.faction.description,location:this.faction.location}}},computed:{syncedPageTitle:Object(l.c)("pageTitle")},watch:{},created:function(){},mounted:function(){this.syncedPageTitle=this.pageTitle},methods:{submit:function(){var t=this;this.sending=!0,this.$inertia.patch(this.route("factions.update",this.faction.slug),this.form).then((function(){return t.sending=!1}))},destroy:function(){confirm("Are you sure you want to delete this factions?")&&this.$inertia.delete(this.route("factions.destroy",this.faction.slug))},restore:function(){confirm("Are you sure you want to restore this factions?")&&this.$inertia.put(this.route("factions.restore",this.faction.slug))}},layout:i.a,metaInfo:function(){return{title:this.pageTitle,meta:[{name:"description",content:this.pageDescription}]}}},f=n("KHd+"),d=Object(f.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"h-screen container"},[t.faction.deleted_at?n("trashed-message",{staticClass:"mb-6",on:{restore:t.restore}},[t._v("\n        This faction has been deleted.\n    ")]):t._e(),t._v(" "),n("form",{staticClass:"w-full p-4 bg-white rounded md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("div",{staticClass:"flex flex-wrap mb-6"},[n("text-input",{staticClass:"w-full mb-6",attrs:{label:"Name",type:"text",errors:t.$page.errors.name,required:"",autofocus:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),n("div",{staticClass:"w-full mb-6"},[n("wysiwyg",{attrs:{label:"Description"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),t._v(" "),n("auto-complete",{attrs:{label:"Location",model:"location"},model:{value:t.form.location,callback:function(e){t.$set(t.form,"location",e)},expression:"form.location"}})],1),t._v(" "),n("div",{staticClass:"flex flex-wrap items-center justify-between"},[t.faction.deleted_at?t._e():n("button",{staticClass:"text-red-600 hover:underline",attrs:{tabindex:"-1",type:"button"},on:{click:t.destroy}},[t._v("\n                Delete Factions\n            ")]),t._v(" "),n("loading-button",{staticClass:"px-4 py-2 font-bold text-gray-100 bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline",attrs:{loading:t.sending,type:"submit"}},[t._v("\n                Submit\n            ")])],1)])],1)}),[],!1,null,null,null);e.default=d.exports}}]);