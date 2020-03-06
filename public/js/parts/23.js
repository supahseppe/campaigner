(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Logo.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Logo.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Logo',
  components: {},
  props: {
    color: {
      type: String,
      "default": null
    },
    iconOnly: {
      type: Boolean,
      "default": false
    },
    iconColor: {
      type: String,
      "default": 'black'
    },
    textColor: {
      type: String,
      "default": 'black'
    },
    size: {
      type: String,
      "default": null
    }
  },
  data: function data() {
    return {};
  },
  computed: {
    svgClass: function svgClass() {
      var color = this.color || this.iconColor;
      return ['fill-current', "text-".concat(color), 'h-full', 'w-auto'];
    },
    textClass: function textClass() {
      var color = this.getTextColor();
      var size = null;

      switch (this.size) {
        case 'large':
        case 'lg':
          size = 'text-xl tracking-wide';
          break;

        case 'xlarge':
        case 'xl':
          size = 'text-3xl tracking-wider';
          break;

        default:
          size = 'text-lg';
          break;
      }

      return ['ml-2', size, "text-".concat(color)];
    },
    heightClass: function heightClass() {
      switch (this.size) {
        case 'large':
        case 'lg':
          return 'h-10';

        case 'xlarge':
        case 'xl':
          return 'h-12';

        default:
          return 'h-8';
      }
    }
  },
  watch: {},
  created: function created() {},
  mounted: function mounted() {},
  methods: {
    getTextColor: function getTextColor() {
      var initialColor = this.color || this.textColor;

      if (initialColor === 'white' || initialColor === 'black') {
        return initialColor;
      }

      var parts = initialColor.split('-');

      if (parts[1] === '900') {
        return parts.concat('-');
      }

      var _int = parseInt(parts[1].charAt(0));

      _int++;
      _int = _int * 100;
      _int = _int + '';
      return "".concat(parts[0], "-").concat(_int);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/Welcome.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/pages/Welcome.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex_pathify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex-pathify */ "./node_modules/vuex-pathify/dist/vuex-pathify.esm.js");
/* harmony import */ var _Components_Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! _Components/Logo */ "./resources/js/components/Logo.vue");
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
  metaInfo: {
    title: 'Welcome'
  },
  components: {
    Logo: _Components_Logo__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      open: false
    };
  },
  computed: {
    headerLinks: Object(vuex_pathify__WEBPACK_IMPORTED_MODULE_0__["sync"])('headerLinks')
  },
  methods: {
    isRoute: function isRoute(name) {
      return name === this.$page.route.name;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Logo.vue?vue&type=template&id=1c796f16&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Logo.vue?vue&type=template&id=1c796f16& ***!
  \*******************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "flex items-center", class: _vm.heightClass },
    [
      _c(
        "svg",
        {
          class: _vm.svgClass,
          attrs: {
            version: "1.0",
            xmlns: "http://www.w3.org/2000/svg",
            width: "286.000000pt",
            height: "286.000000pt",
            viewBox: "0 0 286.000000 286.000000",
            preserveAspectRatio: "xMidYMid meet"
          }
        },
        [
          _c(
            "g",
            {
              attrs: {
                transform:
                  "translate(0.000000,286.000000) scale(0.100000,-0.100000)",
                stroke: "none"
              }
            },
            [
              _c("path", {
                attrs: {
                  d:
                    "M1735 2749 c-16 -5 -41 -11 -55 -13 -14 -1 -44 -8 -68 -15 -24 -7\n-55 -14 -70 -16 -15 -2 -52 -11 -82 -19 -30 -8 -56 -13 -59 -11 -2 3 -10 0\n-17 -5 -6 -6 -16 -10 -20 -9 -5 2 -29 -3 -53 -10 -25 -7 -54 -14 -65 -15 -12\n-2 -41 -9 -65 -15 -25 -7 -54 -14 -65 -15 -12 -2 -41 -9 -65 -15 -25 -7 -54\n-14 -65 -15 -12 -2 -41 -9 -65 -15 -25 -7 -54 -14 -65 -15 -12 -2 -40 -8 -64\n-15 -24 -7 -55 -14 -70 -16 -79 -13 -166 -42 -193 -64 -23 -21 -36 -47 -59\n-126 -17 -55 -33 -107 -37 -115 -3 -8 -7 -22 -9 -31 -4 -20 -83 -279 -91 -299\n-3 -8 -7 -22 -9 -30 -5 -22 -93 -312 -101 -330 -3 -8 -8 -25 -10 -38 -2 -12\n-9 -35 -15 -50 -6 -15 -12 -32 -14 -39 -1 -7 -16 -60 -34 -119 -23 -77 -30\n-117 -25 -143 7 -41 43 -100 84 -139 16 -15 57 -58 91 -97 34 -38 77 -86 95\n-105 36 -39 328 -362 409 -453 28 -31 89 -97 136 -145 82 -85 87 -89 132 -91\n26 -1 66 3 90 9 23 7 51 13 62 14 12 2 41 9 65 15 25 7 54 14 65 15 12 2 40 8\n64 15 24 7 55 14 70 16 32 5 55 10 101 24 19 6 37 9 39 6 3 -3 11 0 18 5 6 6\n16 10 20 9 5 -2 29 3 53 10 25 7 54 14 65 15 12 2 41 9 65 15 25 7 54 14 65\n15 12 2 41 9 65 15 25 7 54 14 65 15 12 2 40 8 64 15 24 7 55 14 70 16 71 11\n160 40 189 61 26 20 37 41 63 126 17 57 34 110 37 118 3 8 7 22 9 30 5 22 193\n643 201 660 3 8 8 23 9 33 2 9 25 85 50 168 35 116 44 159 39 187 -7 42 -43\n101 -84 140 -16 15 -57 59 -91 97 -34 39 -77 86 -95 105 -36 39 -328 362 -409\n453 -28 31 -89 97 -136 145 l-85 89 -55 1 c-30 0 -68 -4 -85 -9z m90 -85 c13\n-5 573 -616 819 -893 36 -41 38 -47 33 -90 -6 -46 -321 -1094 -350 -1163 -14\n-34 -22 -39 -84 -57 -137 -41 -1151 -271 -1168 -265 -13 5 -571 614 -819 893\n-36 41 -38 47 -33 90 6 46 321 1094 350 1162 12 30 24 40 64 53 38 12 1138\n273 1165 275 3 1 14 -2 23 -5z"
                }
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  d:
                    "M1311 2430 c-183 -44 -341 -82 -350 -85 -14 -6 -13 -8 4 -14 11 -4\n149 -34 308 -66 362 -74 340 -79 392 88 19 62 35 116 35 120 0 11 -31 37 -43\n36 -7 -1 -162 -36 -346 -79z"
                }
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  d:
                    "M1833 2443 c-7 -2 -29 -56 -49 -119 l-35 -115 18 -37 c17 -36 29 -42\n298 -159 154 -67 283 -122 288 -123 4 0 7 4 7 9 0 10 -396 451 -460 514 -39\n37 -45 40 -67 30z"
                }
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  d:
                    "M722 2228 c-7 -7 -12 -30 -12 -52 0 -91 69 -759 79 -769 7 -7 17 -7\n30 -1 10 5 166 150 345 323 247 238 326 320 326 338 0 13 -6 26 -12 28 -28 11\n-695 145 -718 145 -15 0 -31 -5 -38 -12z"
                }
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  d:
                    "M576 1943 c-82 -254 -196 -652 -191 -670 5 -19 12 -23 48 -23 23 1\n73 7 111 14 53 10 75 20 93 40 13 15 23 32 23 39 0 35 -60 640 -64 644 -2 2\n-11 -17 -20 -44z"
                }
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  d:
                    "M1760 1968 c0 -31 190 -899 202 -921 5 -10 17 -17 26 -15 14 3 145\n157 423 501 80 99 97 141 67 164 -29 22 -669 293 -692 293 -20 0 -26 -5 -26\n-22z"
                }
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  d:
                    "M1512 1898 c-42 -40 -200 -192 -350 -337 -233 -226 -273 -268 -270\n-290 3 -24 20 -31 438 -163 239 -75 449 -137 467 -137 22 -1 33 4 37 17 8 25\n-199 963 -216 973 -22 15 -28 11 -106 -63z"
                }
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  d:
                    "M2368 1290 c-340 -413 -336 -407 -305 -466 21 -41 132 -144 155 -144\n11 0 25 6 31 14 15 18 212 667 208 686 -1 9 -38 -29 -89 -90z"
                }
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  d:
                    "M520 1136 c-76 -14 -90 -21 -90 -45 0 -20 473 -547 478 -532 2 6 -40\n128 -93 273 -125 340 -121 336 -295 304z"
                }
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  d:
                    "M867 1113 c-4 -3 -7 -16 -7 -28 0 -21 226 -643 247 -679 25 -45 57\n-28 356 185 157 112 289 212 292 223 4 10 3 22 -2 27 -8 8 -857 279 -874 279\n-3 0 -9 -3 -12 -7z"
                }
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  d:
                    "M1645 574 c-217 -156 -263 -193 -219 -181 11 3 159 38 329 77 171 39\n320 75 333 80 37 16 25 43 -52 118 -69 67 -77 72 -117 72 -41 0 -61 -13 -274\n-166z"
                }
              })
            ]
          )
        ]
      ),
      _vm._v(" "),
      !_vm.iconOnly
        ? _c("p", { class: _vm.textClass }, [
            _vm._v("\n            Campaigner\n        ")
          ])
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/Welcome.vue?vue&type=template&id=61e7be8e&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/pages/Welcome.vue?vue&type=template&id=61e7be8e& ***!
  \********************************************************************************************************************************************************************************************************/
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
  return _c("main", [
    _c("div", { staticClass: "relative bg-white overflow-hidden" }, [
      _c("div", { staticClass: "max-w-screen-xl mx-auto " }, [
        _c(
          "div",
          {
            staticClass:
              "relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
          },
          [
            _c("div", { staticClass: "pt-6 px-4 sm:px-6 lg:px-8" }, [
              _c(
                "nav",
                {
                  staticClass:
                    "relative flex items-center justify-between sm:h-10 lg:justify-start"
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "flex items-center justify-between w-full md:w-auto"
                        },
                        [
                          _c(
                            "inertia-link",
                            { attrs: { href: _vm.route("page.welcome") } },
                            [_c("logo", { attrs: { color: "indigo-800" } })],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "-mr-2 flex items-center md:hidden"
                            },
                            [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      _vm.open = true
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      staticClass: "h-6 w-6",
                                      attrs: {
                                        stroke: "currentColor",
                                        fill: "none",
                                        viewBox: "0 0 24 24"
                                      }
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M4 6h16M4 12h16M4 18h16"
                                        }
                                      })
                                    ]
                                  )
                                ]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "hidden md:block md:ml-10 md:pr-4" },
                    [
                      _vm._l(_vm.headerLinks, function(link, i) {
                        return [
                          link.route !== "page.welcome"
                            ? _c(
                                "a",
                                {
                                  key: i,
                                  staticClass:
                                    "ml-4 first:ml-0 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out",
                                  class: {
                                    "text-indigo-500 hover:text-indigo-900 focus:text-indigo-900": _vm.isRoute(
                                      link.route
                                    )
                                  },
                                  attrs: { href: _vm.route(link.route) }
                                },
                                [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(link.label) +
                                      "\n                                "
                                  )
                                ]
                              )
                            : _vm._e()
                        ]
                      })
                    ],
                    2
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "transition",
              {
                attrs: {
                  "enter-class": "opacity-0 scale-95",
                  "enter-active-class": "duration-150 ease-out",
                  "enter-to-class": "opacity-100 scale-100",
                  "leave-class": "opacity-100 scale-100",
                  "leave-active-class": "duration-100 ease-in",
                  "leave-to-class": "opacity-0 scale-95"
                }
              },
              [
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.open,
                        expression: "open"
                      }
                    ],
                    staticClass:
                      "absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                  },
                  [
                    _c("div", { staticClass: "rounded-lg shadow-md" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "rounded-lg bg-white shadow-xs overflow-hidden"
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "px-5 pt-4 flex items-center justify-between"
                            },
                            [
                              _c(
                                "div",
                                [
                                  _c("logo", { attrs: { color: "indigo-600" } })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "-mr-2" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        _vm.open = false
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "svg",
                                      {
                                        staticClass: "h-6 w-6",
                                        attrs: {
                                          stroke: "currentColor",
                                          fill: "none",
                                          viewBox: "0 0 24 24"
                                        }
                                      },
                                      [
                                        _c("path", {
                                          attrs: {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            "stroke-width": "2",
                                            d: "M6 18L18 6M6 6l12 12"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "px-2 pt-2 pb-3" },
                            [
                              _vm._l(_vm.headerLinks, function(link, i) {
                                return [
                                  _c(
                                    "inertia-link",
                                    {
                                      staticClass:
                                        "mt-1 first:mt-0 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out",
                                      class: {
                                        "text-indigo-500 hover:text-indigo-900 focus:text-indigo-900": _vm.isRoute(
                                          link.route
                                        )
                                      },
                                      attrs: { href: _vm.route(link.route) }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                            " +
                                          _vm._s(_vm.route.label) +
                                          "\n                                        "
                                      )
                                    ]
                                  )
                                ]
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            [
                              _c(
                                "inertia-link",
                                {
                                  staticClass:
                                    "block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out",
                                  attrs: { href: _vm.route("login") }
                                },
                                [
                                  _vm._v(
                                    "\n                                        Log in\n                                    "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ]
                      )
                    ])
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
              },
              [
                _c("div", { staticClass: "sm:text-center lg:text-left" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      staticClass:
                        "mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                    },
                    [
                      _vm._v(
                        "\n                            Campaigner.app leverages the data you've already prepared\n                            to help create new content, organize your world, and guide\n                            your play via input from your players.\n                        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "rounded-md shadow" },
                        [
                          _c(
                            "inertia-link",
                            {
                              staticClass:
                                "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10",
                              attrs: { href: _vm.route("register") }
                            },
                            [
                              _vm._v(
                                "\n                                    Get started\n                                "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "mt-3 sm:mt-0 sm:ml-3" },
                        [
                          _c(
                            "inertia-link",
                            {
                              staticClass:
                                "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10",
                              attrs: { href: _vm.route("login") }
                            },
                            [
                              _vm._v(
                                "\n                                    Sign In\n                                "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ]
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "svg",
              {
                staticClass:
                  "hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2",
                attrs: {
                  fill: "currentColor",
                  viewBox: "0 0 100 100",
                  preserveAspectRatio: "none"
                }
              },
              [_c("polygon", { attrs: { points: "50,0 100,0 50,100 0,100" } })]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm._m(1)
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "py-16 bg-gray-50 overflow-hidden lg:py-24" }, [
      _c(
        "div",
        {
          staticClass:
            "relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl"
        },
        [
          _c(
            "svg",
            {
              staticClass:
                "hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4",
              attrs: {
                width: "404",
                height: "784",
                fill: "none",
                viewBox: "0 0 404 784"
              }
            },
            [
              _c("defs", [
                _c(
                  "pattern",
                  {
                    attrs: {
                      id: "svg-pattern-squares-1",
                      x: "0",
                      y: "0",
                      width: "20",
                      height: "20",
                      patternUnits: "userSpaceOnUse"
                    }
                  },
                  [
                    _c("rect", {
                      staticClass: "text-gray-200",
                      attrs: {
                        x: "0",
                        y: "0",
                        width: "4",
                        height: "4",
                        fill: "currentColor"
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _c("rect", {
                attrs: {
                  width: "404",
                  height: "784",
                  fill: "url(#svg-pattern-squares-1)"
                }
              })
            ]
          ),
          _vm._v(" "),
          _vm._m(2),
          _vm._v(" "),
          _c("div", { staticClass: "relative mt-12 sm:mt-16 lg:mt-24" }, [
            _c(
              "div",
              {
                staticClass:
                  "lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center"
              },
              [
                _c("div", { staticClass: "lg:col-start-1" }, [
                  _c(
                    "h4",
                    {
                      staticClass:
                        "text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9"
                    },
                    [
                      _vm._v(
                        "\n                            Always in the loop\n                        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    { staticClass: "mt-3 text-lg leading-7 text-gray-500" },
                    [
                      _vm._v(
                        "\n                            Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                            Impedit ex obcaecati natus eligendi delectus, cum deleniti\n                            sunt in labore nihil quod quibusdam expedita nemo.\n                        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("ul", { staticClass: "mt-10" }, [
                    _c("li", [
                      _c("div", { staticClass: "flex" }, [
                        _c("div", { staticClass: "flex-shrink-0" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                            },
                            [
                              _c(
                                "svg",
                                {
                                  staticClass: "h-6 w-6",
                                  attrs: {
                                    stroke: "currentColor",
                                    fill: "none",
                                    viewBox: "0 0 24 24"
                                  }
                                },
                                [
                                  _c("path", {
                                    attrs: {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d:
                                        "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                    }
                                  })
                                ]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _vm._m(3)
                      ])
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "mt-10" }, [
                      _c("div", { staticClass: "flex" }, [
                        _c("div", { staticClass: "flex-shrink-0" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                            },
                            [
                              _c(
                                "svg",
                                {
                                  staticClass: "h-6 w-6",
                                  attrs: {
                                    stroke: "currentColor",
                                    fill: "none",
                                    viewBox: "0 0 24 24"
                                  }
                                },
                                [
                                  _c("path", {
                                    attrs: {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d:
                                        "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    }
                                  })
                                ]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _vm._m(4)
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "mt-10 -mx-4 relative lg:mt-0 lg:col-start-2"
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass:
                          "absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden",
                        attrs: {
                          width: "784",
                          height: "404",
                          fill: "none",
                          viewBox: "0 0 784 404"
                        }
                      },
                      [
                        _c("defs", [
                          _c(
                            "pattern",
                            {
                              attrs: {
                                id: "svg-pattern-squares-4",
                                x: "0",
                                y: "0",
                                width: "20",
                                height: "20",
                                patternUnits: "userSpaceOnUse"
                              }
                            },
                            [
                              _c("rect", {
                                staticClass: "text-gray-200",
                                attrs: {
                                  x: "0",
                                  y: "0",
                                  width: "4",
                                  height: "4",
                                  fill: "currentColor"
                                }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("rect", {
                          attrs: {
                            width: "784",
                            height: "404",
                            fill: "url(#svg-pattern-squares-4)"
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c("img", {
                      staticClass: "relative mx-auto",
                      attrs: {
                        width: "490",
                        src: "/img/feature-example-2.png",
                        alt: ""
                      }
                    })
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "svg",
            {
              staticClass:
                "hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12",
              attrs: {
                width: "404",
                height: "784",
                fill: "none",
                viewBox: "0 0 404 784"
              }
            },
            [
              _c("defs", [
                _c(
                  "pattern",
                  {
                    attrs: {
                      id: "svg-pattern-squares-3",
                      x: "0",
                      y: "0",
                      width: "20",
                      height: "20",
                      patternUnits: "userSpaceOnUse"
                    }
                  },
                  [
                    _c("rect", {
                      staticClass: "text-gray-200",
                      attrs: {
                        x: "0",
                        y: "0",
                        width: "4",
                        height: "4",
                        fill: "currentColor"
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _c("rect", {
                attrs: {
                  width: "404",
                  height: "784",
                  fill: "url(#svg-pattern-squares-3)"
                }
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
            },
            [
              _c("div", { staticClass: "mt-10 -mx-4 relative lg:mt-0" }, [
                _c(
                  "svg",
                  {
                    staticClass:
                      "absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden",
                    attrs: {
                      width: "784",
                      height: "404",
                      fill: "none",
                      viewBox: "0 0 784 404"
                    }
                  },
                  [
                    _c("defs", [
                      _c(
                        "pattern",
                        {
                          attrs: {
                            id: "svg-pattern-squares-2",
                            x: "0",
                            y: "0",
                            width: "20",
                            height: "20",
                            patternUnits: "userSpaceOnUse"
                          }
                        },
                        [
                          _c("rect", {
                            staticClass: "text-gray-200",
                            attrs: {
                              x: "0",
                              y: "0",
                              width: "4",
                              height: "4",
                              fill: "currentColor"
                            }
                          })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("rect", {
                      attrs: {
                        width: "784",
                        height: "404",
                        fill: "url(#svg-pattern-squares-2)"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c("img", {
                  staticClass: "relative mx-auto",
                  attrs: {
                    width: "490",
                    src: "/img/feature-example-1.png",
                    alt: ""
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "relative" }, [
                _c(
                  "h4",
                  {
                    staticClass:
                      "text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9"
                  },
                  [
                    _vm._v(
                      "\n                        Getting started is hella simple\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "p",
                  { staticClass: "mt-3 text-lg leading-7 text-gray-500" },
                  [
                    _vm._v(
                      "\n                        Block of text saying that you don't need a bunch of detailed\n                        notes to get going--just the desire to get started and a\n                        campaign name.\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c("ul", { staticClass: "mt-10" }, [
                  _c("li", [
                    _c("div", { staticClass: "flex" }, [
                      _c("div", { staticClass: "flex-shrink-0" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                          },
                          [
                            _c(
                              "svg",
                              {
                                staticClass: "h-6 w-6",
                                attrs: {
                                  stroke: "currentColor",
                                  fill: "none",
                                  viewBox: "0 0 24 24"
                                }
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d:
                                      "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _vm._m(5)
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "mt-10" }, [
                    _c("div", { staticClass: "flex" }, [
                      _c("div", { staticClass: "flex-shrink-0" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                          },
                          [
                            _c(
                              "svg",
                              {
                                staticClass: "h-6 w-6",
                                attrs: {
                                  stroke: "currentColor",
                                  fill: "none",
                                  viewBox: "0 0 24 24"
                                }
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d:
                                      "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _vm._m(6)
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "mt-10" }, [
                    _c("div", { staticClass: "flex" }, [
                      _c("div", { staticClass: "flex-shrink-0" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                          },
                          [
                            _c(
                              "svg",
                              {
                                staticClass: "h-6 w-6",
                                attrs: {
                                  stroke: "currentColor",
                                  fill: "none",
                                  viewBox: "0 0 24 24"
                                }
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M13 10V3L4 14h7v7l9-11h-7z"
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _vm._m(7)
                    ])
                  ])
                ])
              ])
            ]
          )
        ]
      )
    ]),
    _vm._v(" "),
    _vm._m(8),
    _vm._v(" "),
    _c("div", { staticClass: "bg-white" }, [
      _c(
        "div",
        {
          staticClass:
            "max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8"
        },
        [
          _vm._m(9),
          _vm._v(" "),
          _c("div", { staticClass: "mt-8 flex justify-center" }, [
            _c(
              "a",
              {
                staticClass: "text-gray-400 hover:text-gray-500",
                attrs: { href: "#" }
              },
              [
                _c("span", { staticClass: "sr-only" }, [_vm._v("Facebook")]),
                _vm._v(" "),
                _c(
                  "svg",
                  {
                    staticClass: "h-6 w-6",
                    attrs: { fill: "currentColor", viewBox: "0 0 24 24" }
                  },
                  [
                    _c("path", {
                      attrs: {
                        "fill-rule": "evenodd",
                        d:
                          "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                        "clip-rule": "evenodd"
                      }
                    })
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "ml-6 text-gray-400 hover:text-gray-500",
                attrs: { href: "#" }
              },
              [
                _c("span", { staticClass: "sr-only" }, [_vm._v("Instagram")]),
                _vm._v(" "),
                _c(
                  "svg",
                  {
                    staticClass: "h-6 w-6",
                    attrs: { fill: "currentColor", viewBox: "0 0 24 24" }
                  },
                  [
                    _c("path", {
                      attrs: {
                        "fill-rule": "evenodd",
                        d:
                          "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
                        "clip-rule": "evenodd"
                      }
                    })
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "ml-6 text-gray-400 hover:text-gray-500",
                attrs: { href: "#" }
              },
              [
                _c("span", { staticClass: "sr-only" }, [_vm._v("Twitter")]),
                _vm._v(" "),
                _c(
                  "svg",
                  {
                    staticClass: "h-6 w-6",
                    attrs: { fill: "currentColor", viewBox: "0 0 24 24" }
                  },
                  [
                    _c("path", {
                      attrs: {
                        d:
                          "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                      }
                    })
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "ml-6 text-gray-400 hover:text-gray-500",
                attrs: { href: "#" }
              },
              [
                _c("span", { staticClass: "sr-only" }, [_vm._v("GitHub")]),
                _vm._v(" "),
                _c(
                  "svg",
                  {
                    staticClass: "h-6 w-6",
                    attrs: { fill: "currentColor", viewBox: "0 0 24 24" }
                  },
                  [
                    _c("path", {
                      attrs: {
                        "fill-rule": "evenodd",
                        d:
                          "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                        "clip-rule": "evenodd"
                      }
                    })
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "ml-6 text-gray-400 hover:text-gray-500",
                attrs: { href: "#" }
              },
              [
                _c("span", { staticClass: "sr-only" }, [_vm._v("Dribbble")]),
                _vm._v(" "),
                _c(
                  "svg",
                  {
                    staticClass: "h-6 w-6",
                    attrs: { fill: "currentColor", viewBox: "0 0 24 24" }
                  },
                  [
                    _c("path", {
                      attrs: {
                        "fill-rule": "evenodd",
                        d:
                          "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z",
                        "clip-rule": "evenodd"
                      }
                    })
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _vm._m(10)
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "h2",
      {
        staticClass:
          "text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
      },
      [
        _vm._v(
          "\n                            Level up your\n                            "
        ),
        _c("br", { staticClass: "xl:hidden" }),
        _vm._v(" "),
        _c("span", { staticClass: "text-indigo-600" }, [
          _vm._v("tabletop campaign")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2" },
      [
        _c("img", {
          staticClass:
            "h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full",
          attrs: { src: "img/dice.jpg", alt: "" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "relative" }, [
      _c(
        "h3",
        {
          staticClass:
            "text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
        },
        [
          _vm._v(
            "\n                    A smarter way to organize\n                "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "p",
        {
          staticClass:
            "mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500"
        },
        [
          _vm._v(
            "\n                    Yada yada data-driven approach to presenting your world to your\n                    players. Allowing input from players between sessions to drive\n                    action at the table.\n                "
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ml-4" }, [
      _c("h5", { staticClass: "text-lg leading-6 font-medium text-gray-900" }, [
        _vm._v(
          "\n                                            Mobile notifications\n                                        "
        )
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 text-base leading-6 text-gray-500" }, [
        _vm._v(
          "\n                                            Lorem ipsum, dolor sit amet consectetur\n                                            adipisicing elit. Maiores impedit\n                                            perferendis suscipit eaque, iste dolor\n                                            cupiditate blanditiis ratione.\n                                        "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ml-4" }, [
      _c("h5", { staticClass: "text-lg leading-6 font-medium text-gray-900" }, [
        _vm._v(
          "\n                                            Reminder emails\n                                        "
        )
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 text-base leading-6 text-gray-500" }, [
        _vm._v(
          "\n                                            Lorem ipsum, dolor sit amet consectetur\n                                            adipisicing elit. Maiores impedit\n                                            perferendis suscipit eaque, iste dolor\n                                            cupiditate blanditiis ratione.\n                                        "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ml-4" }, [
      _c("h5", { staticClass: "text-lg leading-6 font-medium text-gray-900" }, [
        _vm._v(
          "\n                                        Bullet Point\n                                    "
        )
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 text-base leading-6 text-gray-500" }, [
        _vm._v(
          "\n                                        Lorem ipsum, dolor sit amet consectetur\n                                        adipisicing elit. Maiores impedit perferendis\n                                        suscipit eaque, iste dolor cupiditate\n                                        blanditiis ratione.\n                                    "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ml-4" }, [
      _c("h5", { staticClass: "text-lg leading-6 font-medium text-gray-900" }, [
        _vm._v(
          "\n                                        Bullet Point\n                                    "
        )
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 text-base leading-6 text-gray-500" }, [
        _vm._v(
          "\n                                        Lorem ipsum, dolor sit amet consectetur\n                                        adipisicing elit. Maiores impedit perferendis\n                                        suscipit eaque, iste dolor cupiditate\n                                        blanditiis ratione.\n                                    "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ml-4" }, [
      _c("h5", { staticClass: "text-lg leading-6 font-medium text-gray-900" }, [
        _vm._v(
          "\n                                        Bullet Point\n                                    "
        )
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 text-base leading-6 text-gray-500" }, [
        _vm._v(
          "\n                                        Lorem ipsum, dolor sit amet consectetur\n                                        adipisicing elit. Maiores impedit perferendis\n                                        suscipit eaque, iste dolor cupiditate\n                                        blanditiis ratione.\n                                    "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "bg-gray-800" }, [
      _c(
        "div",
        {
          staticClass:
            "max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center"
        },
        [
          _c("div", { staticClass: "lg:w-0 lg:flex-1" }, [
            _c(
              "h2",
              {
                staticClass:
                  "text-3xl leading-9 font-extrabold tracking-tight text-white sm:text-4xl sm:leading-10"
              },
              [
                _vm._v(
                  "\n                    Sign up for our newsletter\n                "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "p",
              { staticClass: "mt-3 max-w-3xl text-lg leading-6 text-gray-300" },
              [
                _vm._v(
                  "\n                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui\n                    Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat\n                    fugiat.\n                "
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mt-8 lg:mt-0 lg:ml-8" }, [
            _c("form", { staticClass: "sm:flex" }, [
              _c("input", {
                staticClass:
                  "appearance-none w-full px-5 py-3 border border-transparent text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 transition duration-150 ease-in-out sm:max-w-xs",
                attrs: {
                  "aria-label": "Email address",
                  type: "email",
                  required: "",
                  placeholder: "Enter your email"
                }
              }),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0"
                },
                [
                  _c(
                    "button",
                    {
                      staticClass:
                        "w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400 transition duration-150 ease-in-out"
                    },
                    [
                      _vm._v(
                        "\n                            Notify me\n                        "
                      )
                    ]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "mt-3 text-sm leading-5 text-gray-300" }, [
              _vm._v(
                "\n                    We care about the protection of your data. Read our\n                    "
              ),
              _c(
                "a",
                {
                  staticClass: "text-white font-medium underline",
                  attrs: { href: "#" }
                },
                [
                  _vm._v(
                    "\n                        Privacy Policy.\n                    "
                  )
                ]
              )
            ])
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "nav",
      { staticClass: "-mx-5 -my-2 flex flex-wrap justify-center" },
      [
        _c("div", { staticClass: "px-5 py-2" }, [
          _c(
            "a",
            {
              staticClass:
                "text-base leading-6 text-gray-500 hover:text-gray-900",
              attrs: { href: "#" }
            },
            [_vm._v("\n                        About\n                    ")]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "px-5 py-2" }, [
          _c(
            "a",
            {
              staticClass:
                "text-base leading-6 text-gray-500 hover:text-gray-900",
              attrs: { href: "#" }
            },
            [_vm._v("\n                        Blog\n                    ")]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "px-5 py-2" }, [
          _c(
            "a",
            {
              staticClass:
                "text-base leading-6 text-gray-500 hover:text-gray-900",
              attrs: { href: "#" }
            },
            [_vm._v("\n                        Jobs\n                    ")]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "px-5 py-2" }, [
          _c(
            "a",
            {
              staticClass:
                "text-base leading-6 text-gray-500 hover:text-gray-900",
              attrs: { href: "#" }
            },
            [_vm._v("\n                        Press\n                    ")]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "px-5 py-2" }, [
          _c(
            "a",
            {
              staticClass:
                "text-base leading-6 text-gray-500 hover:text-gray-900",
              attrs: { href: "#" }
            },
            [
              _vm._v(
                "\n                        Accessibility\n                    "
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "px-5 py-2" }, [
          _c(
            "a",
            {
              staticClass:
                "text-base leading-6 text-gray-500 hover:text-gray-900",
              attrs: { href: "#" }
            },
            [_vm._v("\n                        Partners\n                    ")]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-8" }, [
      _c(
        "p",
        { staticClass: "text-center text-base leading-6 text-gray-400" },
        [
          _vm._v(
            "\n                    © 2020 Workflow, Inc. All rights reserved.\n                "
          )
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/components/Logo.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Logo.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Logo_vue_vue_type_template_id_1c796f16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo.vue?vue&type=template&id=1c796f16& */ "./resources/js/components/Logo.vue?vue&type=template&id=1c796f16&");
/* harmony import */ var _Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logo.vue?vue&type=script&lang=js& */ "./resources/js/components/Logo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Logo_vue_vue_type_template_id_1c796f16___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Logo_vue_vue_type_template_id_1c796f16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Logo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Logo.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Logo.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Logo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Logo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Logo.vue?vue&type=template&id=1c796f16&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Logo.vue?vue&type=template&id=1c796f16& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_1c796f16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Logo.vue?vue&type=template&id=1c796f16& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Logo.vue?vue&type=template&id=1c796f16&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_1c796f16___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_1c796f16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/views/pages/Welcome.vue":
/*!*******************************************!*\
  !*** ./resources/views/pages/Welcome.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Welcome_vue_vue_type_template_id_61e7be8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Welcome.vue?vue&type=template&id=61e7be8e& */ "./resources/views/pages/Welcome.vue?vue&type=template&id=61e7be8e&");
/* harmony import */ var _Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Welcome.vue?vue&type=script&lang=js& */ "./resources/views/pages/Welcome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Welcome_vue_vue_type_template_id_61e7be8e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Welcome_vue_vue_type_template_id_61e7be8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/views/pages/Welcome.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/views/pages/Welcome.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/views/pages/Welcome.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Welcome.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/Welcome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/views/pages/Welcome.vue?vue&type=template&id=61e7be8e&":
/*!**************************************************************************!*\
  !*** ./resources/views/pages/Welcome.vue?vue&type=template&id=61e7be8e& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_61e7be8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Welcome.vue?vue&type=template&id=61e7be8e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/Welcome.vue?vue&type=template&id=61e7be8e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_61e7be8e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_61e7be8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);