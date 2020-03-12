(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/Campaign/Read.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/pages/Campaign/Read.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layouts_MainLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! _Layouts/MainLayout */ "./resources/views/layouts/MainLayout.vue");
/* harmony import */ var _Components_SectionHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! _Components/SectionHeader */ "./resources/js/components/SectionHeader.vue");
/* harmony import */ var _Components_Btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! _Components/Btn */ "./resources/js/components/Btn.vue");
/* harmony import */ var vuex_pathify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex-pathify */ "./node_modules/vuex-pathify/dist/vuex-pathify.esm.js");
/* harmony import */ var _Components_cards_Panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! _Components/cards/Panel */ "./resources/js/components/cards/Panel.vue");
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
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Campaign',
  components: {
    Panel: _Components_cards_Panel__WEBPACK_IMPORTED_MODULE_4__["default"],
    SectionHeader: _Components_SectionHeader__WEBPACK_IMPORTED_MODULE_1__["default"],
    Btn: _Components_Btn__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    campaign: {
      type: Object,
      "default": function _default() {}
    }
  },
  data: function data() {
    return {
      pageTitle: "Campaign: ".concat(this.campaign.title),
      pageDescription: "Viewing the ".concat(this.campaign.title, " campaign.")
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/Campaign/Read.vue?vue&type=template&id=8d128bfe&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/pages/Campaign/Read.vue?vue&type=template&id=8d128bfe& ***!
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
                        href: _vm.route("campaigns.edit", _vm.campaign.slug)
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
        [_c("h1", [_vm._v(_vm._s(_vm.campaign.title))])]
      ),
      _vm._v(" "),
      _c("section", { staticClass: "p-4 pb-6 max-w-percent-90 mx-auto" }, [
        _c("div", { domProps: { innerHTML: _vm._s(_vm.campaign.description) } })
      ]),
      _vm._v(" "),
      _c("panel", [
        _c(
          "div",
          {
            staticClass: "bg-white px-4 py-5 border-b border-gray-200 sm:px-6"
          },
          [
            _c(
              "h3",
              { staticClass: "text-lg leading-6 font-medium text-gray-900" },
              [_vm._v("\n                Players\n            ")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "ul",
          _vm._l(_vm.campaign.users, function(user, i) {
            return _c(
              "li",
              {
                key: i,
                staticClass:
                  "text-sm px-4 py-3 border-t border-gray-300 first:border-0"
              },
              [
                _vm._v(
                  "\n                " +
                    _vm._s(user.username) +
                    ", " +
                    _vm._s(user.pivot.role) +
                    "\n            "
                )
              ]
            )
          }),
          0
        )
      ]),
      _vm._v(" "),
      _c("panel", { staticClass: "mt-6" }, [
        _c(
          "div",
          {
            staticClass: "bg-white px-4 py-5 border-b border-gray-200 sm:px-6"
          },
          [
            _c(
              "h3",
              { staticClass: "text-lg leading-6 font-medium text-gray-900" },
              [_vm._v("\n                Characters\n            ")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "ul",
          _vm._l(_vm.campaign.characters, function(character, i) {
            return _c(
              "li",
              {
                key: i,
                staticClass:
                  "text-sm px-4 py-3 border-t border-gray-300 first:border-0"
              },
              [
                _vm._v(
                  "\n                " +
                    _vm._s(character.name) +
                    "\n            "
                )
              ]
            )
          }),
          0
        )
      ]),
      _vm._v(" "),
      _c("panel", { staticClass: "mt-6" }, [
        _c(
          "div",
          {
            staticClass: "bg-white px-4 py-5 border-b border-gray-200 sm:px-6"
          },
          [
            _c(
              "h3",
              { staticClass: "text-lg leading-6 font-medium text-gray-900" },
              [_vm._v("\n                Factions\n            ")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "ul",
          _vm._l(_vm.campaign.factions, function(faction, i) {
            return _c(
              "li",
              {
                key: i,
                staticClass:
                  "text-sm px-4 py-3 border-t border-gray-300 first:border-0"
              },
              [
                _vm._v(
                  "\n                " + _vm._s(faction.name) + "\n            "
                )
              ]
            )
          }),
          0
        )
      ]),
      _vm._v(" "),
      _c("panel", { staticClass: "mt-6" }, [
        _c(
          "div",
          {
            staticClass: "bg-white px-4 py-5 border-b border-gray-200 sm:px-6"
          },
          [
            _c(
              "h3",
              { staticClass: "text-lg leading-6 font-medium text-gray-900" },
              [_vm._v("\n                NPCs\n            ")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "ul",
          _vm._l(_vm.campaign.npcs, function(npc, i) {
            return _c(
              "li",
              {
                key: i,
                staticClass:
                  "text-sm px-4 py-3 border-t border-gray-300 first:border-0"
              },
              [
                _vm._v(
                  "\n                " + _vm._s(npc.name) + "\n            "
                )
              ]
            )
          }),
          0
        )
      ]),
      _vm._v(" "),
      _c("panel", { staticClass: "mt-6" }, [
        _c(
          "div",
          {
            staticClass: "bg-white px-4 py-5 border-b border-gray-200 sm:px-6"
          },
          [
            _c(
              "h3",
              { staticClass: "text-lg leading-6 font-medium text-gray-900" },
              [_vm._v("\n                Locations\n            ")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "ul",
          _vm._l(_vm.campaign.locations, function(location, i) {
            return _c(
              "li",
              {
                key: i,
                staticClass:
                  "text-sm px-4 py-3 border-t border-gray-300 first:border-0"
              },
              [
                _vm._v(
                  "\n                " +
                    _vm._s(location.name) +
                    "\n            "
                )
              ]
            )
          }),
          0
        )
      ]),
      _vm._v(" "),
      _c("panel", { staticClass: "mt-6" }, [
        _c(
          "div",
          {
            staticClass: "bg-white px-4 py-5 border-b border-gray-200 sm:px-6"
          },
          [
            _c(
              "h3",
              { staticClass: "text-lg leading-6 font-medium text-gray-900" },
              [_vm._v("\n                Tasks\n            ")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "ul",
          _vm._l(_vm.campaign.tasks, function(task, i) {
            return _c(
              "li",
              {
                key: i,
                staticClass:
                  "text-sm px-4 py-3 border-t border-gray-300 first:border-0"
              },
              [
                _vm._v(
                  "\n                " + _vm._s(task.name) + "\n            "
                )
              ]
            )
          }),
          0
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/views/pages/Campaign/Read.vue":
/*!*************************************************!*\
  !*** ./resources/views/pages/Campaign/Read.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Read_vue_vue_type_template_id_8d128bfe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Read.vue?vue&type=template&id=8d128bfe& */ "./resources/views/pages/Campaign/Read.vue?vue&type=template&id=8d128bfe&");
/* harmony import */ var _Read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Read.vue?vue&type=script&lang=js& */ "./resources/views/pages/Campaign/Read.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Read_vue_vue_type_template_id_8d128bfe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Read_vue_vue_type_template_id_8d128bfe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/views/pages/Campaign/Read.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/views/pages/Campaign/Read.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/views/pages/Campaign/Read.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Read.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/Campaign/Read.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/views/pages/Campaign/Read.vue?vue&type=template&id=8d128bfe&":
/*!********************************************************************************!*\
  !*** ./resources/views/pages/Campaign/Read.vue?vue&type=template&id=8d128bfe& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Read_vue_vue_type_template_id_8d128bfe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Read.vue?vue&type=template&id=8d128bfe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/Campaign/Read.vue?vue&type=template&id=8d128bfe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Read_vue_vue_type_template_id_8d128bfe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Read_vue_vue_type_template_id_8d128bfe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);