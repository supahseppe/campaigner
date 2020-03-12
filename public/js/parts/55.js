(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/Location/Read.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/pages/Location/Read.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layouts_MainLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! _Layouts/MainLayout */ "./resources/views/layouts/MainLayout.vue");
/* harmony import */ var _Components_Btn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! _Components/Btn */ "./resources/js/components/Btn.vue");
/* harmony import */ var _Components_SectionHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! _Components/SectionHeader */ "./resources/js/components/SectionHeader.vue");
/* harmony import */ var vuex_pathify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex-pathify */ "./node_modules/vuex-pathify/dist/vuex-pathify.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Location',
  components: {
    Btn: _Components_Btn__WEBPACK_IMPORTED_MODULE_1__["default"],
    SectionHeader: _Components_SectionHeader__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    location: {
      type: Object,
      "default": function _default() {}
    }
  },
  data: function data() {
    return {
      pageTitle: "Location: ".concat(this.location.name),
      pageDescription: "Viewing the ".concat(this.location.name, " location.")
    };
  },
  computed: {
    syncedPageTitle: Object(vuex_pathify__WEBPACK_IMPORTED_MODULE_3__["sync"])('pageTitle')
  },
  watch: {},
  created: function created() {},
  mounted: function mounted() {
    this.syncedPageTitle = this.pageTitle;
  },
  methods: {},
  layout: _Layouts_MainLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
  metaInfo: function metaInfo() {
    return {
      title: this.pageTitle,
      meta: [{
        name: 'description',
        content: this.pageDescription
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/Location/Read.vue?vue&type=template&id=fc907608&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/pages/Location/Read.vue?vue&type=template&id=fc907608& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "h-screen container" },
    [
      _c(
        "section-header",
        {
          staticClass: "px-4",
          scopedSlots: _vm._u([
            {
              key: "aside",
              fn: function() {
                return [
                  _c(
                    "btn",
                    {
                      attrs: {
                        href: _vm.route("locations.edit", _vm.location.slug)
                      }
                    },
                    [_vm._v("\n                Edit\n            ")]
                  )
                ]
              },
              proxy: true
            }
          ])
        },
        [_c("h1", [_vm._v(_vm._s(_vm.location.name))])]
      ),
      _vm._v(" "),
      _c("section", { staticClass: "p-4" }, [
        _c("p", [_vm._v(_vm._s(_vm.location.id))])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/views/pages/Location/Read.vue":
/*!*************************************************!*\
  !*** ./resources/views/pages/Location/Read.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Read_vue_vue_type_template_id_fc907608___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Read.vue?vue&type=template&id=fc907608& */ "./resources/views/pages/Location/Read.vue?vue&type=template&id=fc907608&");
/* harmony import */ var _Read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Read.vue?vue&type=script&lang=js& */ "./resources/views/pages/Location/Read.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Read_vue_vue_type_template_id_fc907608___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Read_vue_vue_type_template_id_fc907608___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/views/pages/Location/Read.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/views/pages/Location/Read.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/views/pages/Location/Read.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Read.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/Location/Read.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/views/pages/Location/Read.vue?vue&type=template&id=fc907608&":
/*!********************************************************************************!*\
  !*** ./resources/views/pages/Location/Read.vue?vue&type=template&id=fc907608& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Read_vue_vue_type_template_id_fc907608___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Read.vue?vue&type=template&id=fc907608& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/Location/Read.vue?vue&type=template&id=fc907608&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Read_vue_vue_type_template_id_fc907608___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Read_vue_vue_type_template_id_fc907608___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);