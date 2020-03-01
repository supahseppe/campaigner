(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/Character/Browse.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/pages/Character/Browse.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layouts_MainLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! _Layouts/MainLayout */ "./resources/views/layouts/MainLayout.vue");
/* harmony import */ var _Layouts_Browse_BrowseLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! _Layouts/Browse/BrowseLayout */ "./resources/views/layouts/Browse/BrowseLayout.vue");
/* harmony import */ var _Components_cards_Panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! _Components/cards/Panel */ "./resources/js/components/cards/Panel.vue");
/* harmony import */ var _Components_Btn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! _Components/Btn */ "./resources/js/components/Btn.vue");
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/Character/Browse.vue?vue&type=template&id=44f827d4&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/pages/Character/Browse.vue?vue&type=template&id=44f827d4& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    { staticClass: "h-full container" },
    [
      _c(
        "browse-layout",
        {
          attrs: {
            model: "character",
            title: _vm.npcTitle,
            pagination: _vm.pager.links
          },
          scopedSlots: _vm._u(
            [
              _vm.npcs
                ? {
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
                : null
            ],
            null,
            true
          )
        },
        [
          _vm._v(" "),
          _vm._l(_vm.characters, function(character) {
            return _c(
              "panel",
              { key: character.id, staticClass: "w-full h-full" },
              [
                _c(
                  "inertia-link",
                  {
                    attrs: {
                      href: _vm.route("characters.show", character.slug)
                    }
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(character.name) +
                        "\n            "
                    )
                  ]
                ),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(character.high_concept))])
              ],
              1
            )
          })
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/views/pages/Character/Browse.vue":
/*!****************************************************!*\
  !*** ./resources/views/pages/Character/Browse.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Browse_vue_vue_type_template_id_44f827d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Browse.vue?vue&type=template&id=44f827d4& */ "./resources/views/pages/Character/Browse.vue?vue&type=template&id=44f827d4&");
/* harmony import */ var _Browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Browse.vue?vue&type=script&lang=js& */ "./resources/views/pages/Character/Browse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Browse_vue_vue_type_template_id_44f827d4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Browse_vue_vue_type_template_id_44f827d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/views/pages/Character/Browse.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/views/pages/Character/Browse.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/views/pages/Character/Browse.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Browse.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/Character/Browse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/views/pages/Character/Browse.vue?vue&type=template&id=44f827d4&":
/*!***********************************************************************************!*\
  !*** ./resources/views/pages/Character/Browse.vue?vue&type=template&id=44f827d4& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Browse_vue_vue_type_template_id_44f827d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Browse.vue?vue&type=template&id=44f827d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/Character/Browse.vue?vue&type=template&id=44f827d4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Browse_vue_vue_type_template_id_44f827d4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Browse_vue_vue_type_template_id_44f827d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);