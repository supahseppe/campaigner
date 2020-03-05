(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/Character/BrowseNpc.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/pages/Character/BrowseNpc.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layouts_MainLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! _Layouts/MainLayout */ "./resources/views/layouts/MainLayout.vue");
/* harmony import */ var _Layouts_Browse_BrowseLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! _Layouts/Browse/BrowseLayout */ "./resources/views/layouts/Browse/BrowseLayout.vue");
/* harmony import */ var _Components_cards_Panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! _Components/cards/Panel */ "./resources/js/components/cards/Panel.vue");
/* harmony import */ var _Components_Btn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! _Components/Btn */ "./resources/js/components/Btn.vue");
/* harmony import */ var vuex_pathify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex-pathify */ "./node_modules/vuex-pathify/dist/vuex-pathify.esm.js");
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
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Browse',
  components: {
    Panel: _Components_cards_Panel__WEBPACK_IMPORTED_MODULE_2__["default"],
    BrowseLayout: _Layouts_Browse_BrowseLayout__WEBPACK_IMPORTED_MODULE_1__["default"],
    Btn: _Components_Btn__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    npcs: {
      type: Boolean,
      "default": false
    },
    pager: {
      type: Object,
      "default": function _default() {}
    }
  },
  data: function data() {
    return {
      pageTitle: 'Browsing Characters',
      description: 'Viewing all characters associated with the current user'
    };
  },
  computed: {
    characters: function characters() {
      return this.pager.data;
    },
    npcTitle: function npcTitle() {
      return this.npcs ? 'Your NPCs' : null;
    },
    syncedPageTitle: Object(vuex_pathify__WEBPACK_IMPORTED_MODULE_4__["sync"])('pageTitle')
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/Character/BrowseNpc.vue?vue&type=template&id=c8cf63c6&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/pages/Character/BrowseNpc.vue?vue&type=template&id=c8cf63c6& ***!
  \********************************************************************************************************************************************************************************************************************/
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
        {
          attrs: {
            model: "character",
            title: _vm.npcTitle,
            pagination: _vm.pager.links
          },
          scopedSlots: _vm._u([
            {
              key: "header-buttons",
              fn: function() {
                return [
                  _c(
                    "btn",
                    {
                      staticClass: "ml-4",
                      attrs: { href: _vm.route("npcs.create") }
                    },
                    [_vm._v("Add New NPC")]
                  )
                ]
              },
              proxy: true
            }
          ])
        },
        [
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "bg-white shadow overflow-hidden sm:rounded-md" },
            [
              _c(
                "ul",
                _vm._l(_vm.characters, function(character) {
                  return _c(
                    "li",
                    {
                      key: character.id,
                      staticClass: "border-t border-200 first:border-0"
                    },
                    [
                      _c(
                        "inertia-link",
                        {
                          staticClass:
                            "block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out",
                          attrs: {
                            href: _vm.route("characters.show", [character.slug])
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
                                                _vm._s(character.name) +
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
                                                  "\n                                                " +
                                                    _vm._s(
                                                      character.high_concept
                                                    ) +
                                                    "\n                                            "
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
                                                  "\n                                                Info\n                                            "
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
                                                character.active
                                                  ? _c("p", [
                                                      _vm._v(
                                                        "\n                                                    Currently active\n                                                "
                                                      )
                                                    ])
                                                  : _c("p", [
                                                      _vm._v(
                                                        "Currently inactive"
                                                      )
                                                    ])
                                              ]
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

/***/ "./resources/views/pages/Character/BrowseNpc.vue":
/*!*******************************************************!*\
  !*** ./resources/views/pages/Character/BrowseNpc.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BrowseNpc_vue_vue_type_template_id_c8cf63c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BrowseNpc.vue?vue&type=template&id=c8cf63c6& */ "./resources/views/pages/Character/BrowseNpc.vue?vue&type=template&id=c8cf63c6&");
/* harmony import */ var _BrowseNpc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BrowseNpc.vue?vue&type=script&lang=js& */ "./resources/views/pages/Character/BrowseNpc.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BrowseNpc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BrowseNpc_vue_vue_type_template_id_c8cf63c6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BrowseNpc_vue_vue_type_template_id_c8cf63c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/views/pages/Character/BrowseNpc.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/views/pages/Character/BrowseNpc.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/views/pages/Character/BrowseNpc.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BrowseNpc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BrowseNpc.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/Character/BrowseNpc.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BrowseNpc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/views/pages/Character/BrowseNpc.vue?vue&type=template&id=c8cf63c6&":
/*!**************************************************************************************!*\
  !*** ./resources/views/pages/Character/BrowseNpc.vue?vue&type=template&id=c8cf63c6& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BrowseNpc_vue_vue_type_template_id_c8cf63c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BrowseNpc.vue?vue&type=template&id=c8cf63c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/Character/BrowseNpc.vue?vue&type=template&id=c8cf63c6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BrowseNpc_vue_vue_type_template_id_c8cf63c6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BrowseNpc_vue_vue_type_template_id_c8cf63c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);