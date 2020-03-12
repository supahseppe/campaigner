(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/Location/Browse.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/pages/Location/Browse.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layouts_MainLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! _Layouts/MainLayout */ "./resources/views/layouts/MainLayout.vue");
/* harmony import */ var _Layouts_Browse_BrowseLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! _Layouts/Browse/BrowseLayout */ "./resources/views/layouts/Browse/BrowseLayout.vue");
/* harmony import */ var _Components_cards_Panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! _Components/cards/Panel */ "./resources/js/components/cards/Panel.vue");
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
      pageTitle: 'Browsing Locations',
      description: 'Viewing all locations associated with the current user'
    };
  },
  computed: {
    locations: function locations() {
      return this.pager.data;
    },
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/Location/Browse.vue?vue&type=template&id=45d2bc70&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/pages/Location/Browse.vue?vue&type=template&id=45d2bc70& ***!
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
    [
      _c(
        "browse-layout",
        { attrs: { model: "location", pagination: _vm.pager.links } },
        [
          _c(
            "div",
            { staticClass: "bg-white shadow overflow-hidden sm:rounded-md" },
            [
              _c(
                "ul",
                _vm._l(_vm.locations, function(location) {
                  return _c(
                    "li",
                    {
                      key: location.id,
                      staticClass: "border-t border-200 first:border-0"
                    },
                    [
                      _c(
                        "inertia-link",
                        {
                          staticClass:
                            "block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out",
                          attrs: {
                            href: _vm.route("locations.show", [location.slug])
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "flex items-center px-4 py-4 sm:px-6"
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "min-w-0 flex-1 flex items-center"
                                },
                                [
                                  _c("div", { staticClass: "flex-shrink-0" }, [
                                    _c("img", {
                                      staticClass: "h-12 w-12 rounded-full",
                                      attrs: {
                                        src:
                                          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                                        alt: ""
                                      }
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4"
                                    },
                                    [
                                      _c("div", [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "text-sm leading-5 font-medium text-indigo-600 truncate"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                            " +
                                                _vm._s(location.name) +
                                                "\n                                        "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "mt-2 flex items-center text-sm leading-5 text-gray-500"
                                          },
                                          [
                                            _c(
                                              "span",
                                              { staticClass: "truncate" },
                                              [
                                                _vm._v(
                                                  "\n                                                Stuff\n                                            "
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "hidden md:block" },
                                        [
                                          _c("div", [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "text-sm leading-5 text-gray-900"
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                                Stuff\n                                            "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "mt-2 flex items-center text-sm leading-5 text-gray-500"
                                              },
                                              [_c("p", [_vm._v("Stuff")])]
                                            )
                                          ])
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", [
                                _c(
                                  "svg",
                                  {
                                    staticClass: "h-5 w-5 text-gray-400",
                                    attrs: {
                                      fill: "currentColor",
                                      viewBox: "0 0 20 20"
                                    }
                                  },
                                  [
                                    _c("path", {
                                      attrs: {
                                        "fill-rule": "evenodd",
                                        d:
                                          "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                                        "clip-rule": "evenodd"
                                      }
                                    })
                                  ]
                                )
                              ])
                            ]
                          )
                        ]
                      )
                    ],
                    1
                  )
                }),
                0
              )
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/views/pages/Location/Browse.vue":
/*!***************************************************!*\
  !*** ./resources/views/pages/Location/Browse.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Browse_vue_vue_type_template_id_45d2bc70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Browse.vue?vue&type=template&id=45d2bc70& */ "./resources/views/pages/Location/Browse.vue?vue&type=template&id=45d2bc70&");
/* harmony import */ var _Browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Browse.vue?vue&type=script&lang=js& */ "./resources/views/pages/Location/Browse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Browse_vue_vue_type_template_id_45d2bc70___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Browse_vue_vue_type_template_id_45d2bc70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/views/pages/Location/Browse.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/views/pages/Location/Browse.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/views/pages/Location/Browse.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Browse.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/Location/Browse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/views/pages/Location/Browse.vue?vue&type=template&id=45d2bc70&":
/*!**********************************************************************************!*\
  !*** ./resources/views/pages/Location/Browse.vue?vue&type=template&id=45d2bc70& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Browse_vue_vue_type_template_id_45d2bc70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Browse.vue?vue&type=template&id=45d2bc70& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/Location/Browse.vue?vue&type=template&id=45d2bc70&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Browse_vue_vue_type_template_id_45d2bc70___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Browse_vue_vue_type_template_id_45d2bc70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);