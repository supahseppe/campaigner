(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/Campaign/Browse.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/pages/Campaign/Browse.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layouts_MainLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! _Layouts/MainLayout */ "./resources/views/layouts/MainLayout.vue");
/* harmony import */ var _Layouts_Browse_BrowseLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! _Layouts/Browse/BrowseLayout */ "./resources/views/layouts/Browse/BrowseLayout.vue");
/* harmony import */ var _Components_cards_Panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! _Components/cards/Panel */ "./resources/js/components/cards/Panel.vue");
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
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Browse',
  components: {
    BrowseLayout: _Layouts_Browse_BrowseLayout__WEBPACK_IMPORTED_MODULE_1__["default"],
    Panel: _Components_cards_Panel__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    pager: {
      type: Object,
      "default": function _default() {}
    }
  },
  data: function data() {
    return {
      pageTitle: 'Browsing Campaigns',
      description: 'Viewing all campaigns associated with the current user'
    };
  },
  computed: {
    campaigns: function campaigns() {
      return this.pager.data;
    }
  },
  watch: {},
  created: function created() {},
  mounted: function mounted() {},
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/Campaign/Browse.vue?vue&type=template&id=ecaef796&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/pages/Campaign/Browse.vue?vue&type=template&id=ecaef796& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    { staticClass: "min-h-screen container" },
    [
      _c(
        "browse-layout",
        { attrs: { model: "campaign" } },
        _vm._l(_vm.campaigns, function(campaign) {
          return _c(
            "div",
            {
              key: campaign.id,
              staticClass:
                "flex-auto w-full p-2 md:max-w-5/12 lg:max-w-4/12 xl:max-w-3/12"
            },
            [
              _c(
                "panel",
                { staticClass: "w-full h-full" },
                [
                  _c(
                    "inertia-link",
                    {
                      attrs: {
                        href: _vm.route("campaigns.show", campaign.slug)
                      }
                    },
                    [
                      _c(
                        "h1",
                        {
                          staticClass:
                            "text-base font-semibold leading-tight xl:text-lg text-gray-900"
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(campaign.title) +
                              "\n                    "
                          )
                        ]
                      )
                    ]
                  )
                ],
                1
              )
            ],
            1
          )
        }),
        0
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/views/pages/Campaign/Browse.vue":
/*!***************************************************!*\
  !*** ./resources/views/pages/Campaign/Browse.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Browse_vue_vue_type_template_id_ecaef796___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Browse.vue?vue&type=template&id=ecaef796& */ "./resources/views/pages/Campaign/Browse.vue?vue&type=template&id=ecaef796&");
/* harmony import */ var _Browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Browse.vue?vue&type=script&lang=js& */ "./resources/views/pages/Campaign/Browse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Browse_vue_vue_type_template_id_ecaef796___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Browse_vue_vue_type_template_id_ecaef796___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/views/pages/Campaign/Browse.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/views/pages/Campaign/Browse.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/views/pages/Campaign/Browse.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Browse.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/Campaign/Browse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/views/pages/Campaign/Browse.vue?vue&type=template&id=ecaef796&":
/*!**********************************************************************************!*\
  !*** ./resources/views/pages/Campaign/Browse.vue?vue&type=template&id=ecaef796& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Browse_vue_vue_type_template_id_ecaef796___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Browse.vue?vue&type=template&id=ecaef796& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/Campaign/Browse.vue?vue&type=template&id=ecaef796&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Browse_vue_vue_type_template_id_ecaef796___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Browse_vue_vue_type_template_id_ecaef796___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);