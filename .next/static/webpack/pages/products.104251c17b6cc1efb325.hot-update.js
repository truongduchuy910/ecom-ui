webpackHotUpdate_N_E("pages/products",{

/***/ "./pages/products/index.js":
/*!*********************************!*\
  !*** ./pages/products/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Product_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Product/list */ \"./components/Product/list.js\");\n/* harmony import */ var _lib_chip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/chip */ \"./lib/chip.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Sidebar */ \"./components/Sidebar/index.js\");\n/* harmony import */ var _components_src_BirdBg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/src/BirdBg */ \"./components/src/BirdBg.js\");\n/* harmony import */ var _components_src_Divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/src/Divider */ \"./components/src/Divider/index.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../config.json */ \"./config.json\");\nvar _config_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../config.json */ \"./config.json\", 1);\nvar _this = undefined,\n    _jsxFileName = \"/home/huy/apps/ecom-ui/pages/products/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  var query = router.query;\n  var category = query.category;\n  var categories = query.categories;\n  var brand = query.brand;\n  var search = query.search;\n  var price_from = query.price_from ? Number(query.price_from) : 0;\n  var price_to = query.price_to ? Number(query.price_to) : 999999999;\n  var attributes = Object(_lib_chip__WEBPACK_IMPORTED_MODULE_3__[\"toAttributeGourpWhereInput\"])(query.attributes ? query.attributes.split(\",\") : []);\n  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n    style: {\n      backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_8__[\"theme\"].backgroundColor,\n      marginTop: 15,\n      borderRadius: 8\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(_components_src_Divider__WEBPACK_IMPORTED_MODULE_7__[\"Divider\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n    xs: 4,\n    md: 3,\n    lg: 3,\n    style: {\n      padding: 1\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_5__[\"Sidebar\"], {\n    onSearch: function onSearch(search) {\n      setSearch(search);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n    xs: 8,\n    md: 9,\n    lg: 9,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, __jsx(_components_Product_list__WEBPACK_IMPORTED_MODULE_2__[\"List\"], {\n    sm: 6,\n    lg: 4,\n    category: category,\n    categories: categories,\n    brand: brand,\n    search: search,\n    price_from: price_from,\n    price_to: price_to,\n    attributes: attributes,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(Index, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvaW5kZXguanM/OWIyZSJdLCJuYW1lcyI6WyJJbmRleCIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5IiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwiYnJhbmQiLCJzZWFyY2giLCJwcmljZV9mcm9tIiwiTnVtYmVyIiwicHJpY2VfdG8iLCJhdHRyaWJ1dGVzIiwidG9BdHRyaWJ1dGVHb3VycFdoZXJlSW5wdXQiLCJzcGxpdCIsImJhY2tncm91bmRDb2xvciIsInRoZW1lIiwibWFyZ2luVG9wIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsInNldFNlYXJjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFJQyxLQUFLLEdBQUdGLE1BQU0sQ0FBQ0UsS0FBbkI7QUFDQSxNQUFNQyxRQUFRLEdBQUdELEtBQUssQ0FBQ0MsUUFBdkI7QUFDQSxNQUFNQyxVQUFVLEdBQUdGLEtBQUssQ0FBQ0UsVUFBekI7QUFDQSxNQUFNQyxLQUFLLEdBQUdILEtBQUssQ0FBQ0csS0FBcEI7QUFDQSxNQUFNQyxNQUFNLEdBQUdKLEtBQUssQ0FBQ0ksTUFBckI7QUFDQSxNQUFNQyxVQUFVLEdBQUdMLEtBQUssQ0FBQ0ssVUFBTixHQUFtQkMsTUFBTSxDQUFDTixLQUFLLENBQUNLLFVBQVAsQ0FBekIsR0FBOEMsQ0FBakU7QUFDQSxNQUFNRSxRQUFRLEdBQUdQLEtBQUssQ0FBQ08sUUFBTixHQUFpQkQsTUFBTSxDQUFDTixLQUFLLENBQUNPLFFBQVAsQ0FBdkIsR0FBMEMsU0FBM0Q7QUFDQSxNQUFNQyxVQUFVLEdBQUdDLDRFQUEwQixDQUMzQ1QsS0FBSyxDQUFDUSxVQUFOLEdBQW1CUixLQUFLLENBQUNRLFVBQU4sQ0FBaUJFLEtBQWpCLENBQXVCLEdBQXZCLENBQW5CLEdBQWlELEVBRE4sQ0FBN0M7QUFJQSxTQUNFLE1BQUMsb0RBQUQ7QUFDRSxTQUFLLEVBQUU7QUFDTEMscUJBQWUsRUFBRUMsa0RBQUssQ0FBQ0QsZUFEbEI7QUFFTEUsZUFBUyxFQUFFLEVBRk47QUFHTEMsa0JBQVksRUFBRTtBQUhULEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLEVBUUUsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4Q0FBRDtBQUFLLE1BQUUsRUFBRSxDQUFUO0FBQVksTUFBRSxFQUFFLENBQWhCO0FBQW1CLE1BQUUsRUFBRSxDQUF2QjtBQUEwQixTQUFLLEVBQUU7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFDRSxZQUFRLEVBQUUsa0JBQUNYLE1BQUQsRUFBWTtBQUNwQlksZUFBUyxDQUFDWixNQUFELENBQVQ7QUFDRCxLQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBUUUsTUFBQyw4Q0FBRDtBQUFLLE1BQUUsRUFBRSxDQUFUO0FBQVksTUFBRSxFQUFFLENBQWhCO0FBQW1CLE1BQUUsRUFBRSxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUNFLE1BQUUsRUFBRSxDQUROO0FBRUUsTUFBRSxFQUFFLENBRk47QUFHRSxZQUFRLEVBQUVILFFBSFo7QUFJRSxjQUFVLEVBQUVDLFVBSmQ7QUFLRSxTQUFLLEVBQUVDLEtBTFQ7QUFNRSxVQUFNLEVBQUVDLE1BTlY7QUFPRSxjQUFVLEVBQUVDLFVBUGQ7QUFRRSxZQUFRLEVBQUVFLFFBUlo7QUFTRSxjQUFVLEVBQUVDLFVBVGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBUkYsQ0FSRixDQURGO0FBaUNELENBOUNEOztHQUFNWCxLO1VBQ1dFLHFEOzs7S0FEWEYsSztBQStDU0Esb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgTGlzdCBhcyBQcm9kdWN0cyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Byb2R1Y3QvbGlzdFwiO1xuXG5pbXBvcnQgeyB0b0F0dHJpYnV0ZUdvdXJwV2hlcmVJbnB1dCB9IGZyb20gXCIuLi8uLi9saWIvY2hpcFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IHsgU2lkZWJhciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NpZGViYXJcIjtcbmltcG9ydCB7IEJpcmRCZyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NyYy9CaXJkQmdcIjtcbmltcG9ydCB7IERpdmlkZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zcmMvRGl2aWRlclwiO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tIFwiLi4vLi4vY29uZmlnLmpzb25cIjtcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgbGV0IHF1ZXJ5ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCBjYXRlZ29yeSA9IHF1ZXJ5LmNhdGVnb3J5O1xuICBjb25zdCBjYXRlZ29yaWVzID0gcXVlcnkuY2F0ZWdvcmllcztcbiAgY29uc3QgYnJhbmQgPSBxdWVyeS5icmFuZDtcbiAgY29uc3Qgc2VhcmNoID0gcXVlcnkuc2VhcmNoO1xuICBjb25zdCBwcmljZV9mcm9tID0gcXVlcnkucHJpY2VfZnJvbSA/IE51bWJlcihxdWVyeS5wcmljZV9mcm9tKSA6IDA7XG4gIGNvbnN0IHByaWNlX3RvID0gcXVlcnkucHJpY2VfdG8gPyBOdW1iZXIocXVlcnkucHJpY2VfdG8pIDogOTk5OTk5OTk5O1xuICBjb25zdCBhdHRyaWJ1dGVzID0gdG9BdHRyaWJ1dGVHb3VycFdoZXJlSW5wdXQoXG4gICAgcXVlcnkuYXR0cmlidXRlcyA/IHF1ZXJ5LmF0dHJpYnV0ZXMuc3BsaXQoXCIsXCIpIDogW11cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXJcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuYmFja2dyb3VuZENvbG9yLFxuICAgICAgICBtYXJnaW5Ub3A6IDE1LFxuICAgICAgICBib3JkZXJSYWRpdXM6IDgsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxEaXZpZGVyIC8+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sIHhzPXs0fSBtZD17M30gbGc9ezN9IHN0eWxlPXt7IHBhZGRpbmc6IDEgfX0+XG4gICAgICAgICAgPFNpZGViYXJcbiAgICAgICAgICAgIG9uU2VhcmNoPXsoc2VhcmNoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFNlYXJjaChzZWFyY2gpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCB4cz17OH0gbWQ9ezl9IGxnPXs5fT5cbiAgICAgICAgICA8UHJvZHVjdHNcbiAgICAgICAgICAgIHNtPXs2fVxuICAgICAgICAgICAgbGc9ezR9XG4gICAgICAgICAgICBjYXRlZ29yeT17Y2F0ZWdvcnl9XG4gICAgICAgICAgICBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfVxuICAgICAgICAgICAgYnJhbmQ9e2JyYW5kfVxuICAgICAgICAgICAgc2VhcmNoPXtzZWFyY2h9XG4gICAgICAgICAgICBwcmljZV9mcm9tPXtwcmljZV9mcm9tfVxuICAgICAgICAgICAgcHJpY2VfdG89e3ByaWNlX3RvfVxuICAgICAgICAgICAgYXR0cmlidXRlcz17YXR0cmlidXRlc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/products/index.js\n");

/***/ })

})