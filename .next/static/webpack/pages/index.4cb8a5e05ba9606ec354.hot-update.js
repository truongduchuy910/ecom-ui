webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Product_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Product/list */ \"./components/Product/list.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var _components_Banner_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Banner/list */ \"./components/Banner/list.js\");\n/* harmony import */ var _components_IntroBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/IntroBox */ \"./components/IntroBox/index.js\");\n/* harmony import */ var _components_src_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/src/Divider */ \"./components/src/Divider/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/huy/apps/ecom-ui/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar customerVar = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__[\"makeVar\"])(false);\n\nvar Index = function Index() {\n  var customer = customerVar();\n  console.log(customer);\n  return __jsx(\"div\", {\n    style: {\n      marginTop: -13\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Banner_list__WEBPACK_IMPORTED_MODULE_3__[\"List\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n    xs: 4,\n    md: 3,\n    lg: 3,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 11\n    }\n  }, __jsx(Sidebar, {\n    onSearch: function onSearch(search) {\n      setSearch(search);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n    xs: 8,\n    md: 9,\n    lg: 9,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 11\n    }\n  }, __jsx(_components_Product_list__WEBPACK_IMPORTED_MODULE_1__[\"List\"], {\n    sm: 6,\n    lg: 4,\n    category: category,\n    categories: categories,\n    brand: brand,\n    search: search,\n    price_from: price_from,\n    price_to: price_to,\n    attributes: attributes,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  })))));\n};\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJjdXN0b21lclZhciIsIm1ha2VWYXIiLCJJbmRleCIsImN1c3RvbWVyIiwiY29uc29sZSIsImxvZyIsIm1hcmdpblRvcCIsInNlYXJjaCIsInNldFNlYXJjaCIsImNhdGVnb3J5IiwiY2F0ZWdvcmllcyIsImJyYW5kIiwicHJpY2VfZnJvbSIsInByaWNlX3RvIiwiYXR0cmlidXRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxXQUFXLEdBQUdDLDhEQUFPLENBQUMsS0FBRCxDQUEzQjs7QUFDQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQ2xCLE1BQU1DLFFBQVEsR0FBR0gsV0FBVyxFQUE1QjtBQUNBSSxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUNBLFNBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRUcsZUFBUyxFQUFFLENBQUM7QUFBZCxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOENBQUQ7QUFBSyxNQUFFLEVBQUUsQ0FBVDtBQUFZLE1BQUUsRUFBRSxDQUFoQjtBQUFtQixNQUFFLEVBQUUsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsT0FBRDtBQUNFLFlBQVEsRUFBRSxrQkFBQ0MsTUFBRCxFQUFZO0FBQ3BCQyxlQUFTLENBQUNELE1BQUQsQ0FBVDtBQUNELEtBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFRRSxNQUFDLDhDQUFEO0FBQUssTUFBRSxFQUFFLENBQVQ7QUFBWSxNQUFFLEVBQUUsQ0FBaEI7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQ0UsTUFBRSxFQUFFLENBRE47QUFFRSxNQUFFLEVBQUUsQ0FGTjtBQUdFLFlBQVEsRUFBRUUsUUFIWjtBQUlFLGNBQVUsRUFBRUMsVUFKZDtBQUtFLFNBQUssRUFBRUMsS0FMVDtBQU1FLFVBQU0sRUFBRUosTUFOVjtBQU9FLGNBQVUsRUFBRUssVUFQZDtBQVFFLFlBQVEsRUFBRUMsUUFSWjtBQVNFLGNBQVUsRUFBRUMsVUFUZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FSRixDQURGLENBSEYsQ0FERjtBQThCRCxDQWpDRDs7S0FBTVosSztBQWtDU0Esb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3QgYXMgUHJvZHVjdHMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9kdWN0L2xpc3RcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IHsgTGlzdCBhcyBCYW5uZXJzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQmFubmVyL2xpc3RcIjtcbmltcG9ydCB7IEludHJvQm94IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSW50cm9Cb3hcIjtcbmltcG9ydCB7IERpdmlkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9zcmMvRGl2aWRlclwiO1xuaW1wb3J0IHsgbWFrZVZhciB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuY29uc3QgY3VzdG9tZXJWYXIgPSBtYWtlVmFyKGZhbHNlKTtcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBjdXN0b21lciA9IGN1c3RvbWVyVmFyKCk7XG4gIGNvbnNvbGUubG9nKGN1c3RvbWVyKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogLTEzIH19PlxuICAgICAgey8qICAqL31cbiAgICAgIDxCYW5uZXJzIC8+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgeHM9ezR9IG1kPXszfSBsZz17M30+XG4gICAgICAgICAgICA8U2lkZWJhclxuICAgICAgICAgICAgICBvblNlYXJjaD17KHNlYXJjaCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFNlYXJjaChzZWFyY2gpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHhzPXs4fSBtZD17OX0gbGc9ezl9PlxuICAgICAgICAgICAgPFByb2R1Y3RzXG4gICAgICAgICAgICAgIHNtPXs2fVxuICAgICAgICAgICAgICBsZz17NH1cbiAgICAgICAgICAgICAgY2F0ZWdvcnk9e2NhdGVnb3J5fVxuICAgICAgICAgICAgICBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfVxuICAgICAgICAgICAgICBicmFuZD17YnJhbmR9XG4gICAgICAgICAgICAgIHNlYXJjaD17c2VhcmNofVxuICAgICAgICAgICAgICBwcmljZV9mcm9tPXtwcmljZV9mcm9tfVxuICAgICAgICAgICAgICBwcmljZV90bz17cHJpY2VfdG99XG4gICAgICAgICAgICAgIGF0dHJpYnV0ZXM9e2F0dHJpYnV0ZXN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})