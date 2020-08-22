webpackHotUpdate_N_E("pages/products",{

/***/ "./pages/products/index.js":
/*!*********************************!*\
  !*** ./pages/products/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Product_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Product/list */ \"./components/Product/list.js\");\n/* harmony import */ var _lib_chip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/chip */ \"./lib/chip.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Sidebar */ \"./components/Sidebar/index.js\");\n/* harmony import */ var _components_src_BirdBg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/src/BirdBg */ \"./components/src/BirdBg.js\");\n/* harmony import */ var _components_src_Divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/src/Divider */ \"./components/src/Divider/index.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../config.json */ \"./config.json\");\nvar _config_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../config.json */ \"./config.json\", 1);\nvar _this = undefined,\n    _jsxFileName = \"/home/huy/apps/ecom-ui/pages/products/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  var query = router.query;\n  var category = query.category;\n  var categories = query.categories;\n  var brand = query.brand;\n  var search = query.search;\n  var price_from = query.price_from ? Number(query.price_from) : 0;\n  var price_to = query.price_to ? Number(query.price_to) : 999999999;\n  var attributes = Object(_lib_chip__WEBPACK_IMPORTED_MODULE_3__[\"toAttributeGourpWhereInput\"])(query.attributes ? query.attributes.split(\",\") : []);\n  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n    style: {\n      backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_8__[\"theme\"].backgroundColor,\n      marginTop: 15,\n      borderRadius: 8\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(_components_src_Divider__WEBPACK_IMPORTED_MODULE_7__[\"Divider\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n    xs: 4,\n    md: 3,\n    lg: 3,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_5__[\"Sidebar\"], {\n    onSearch: function onSearch(search) {\n      setSearch(search);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n    xs: 8,\n    md: 9,\n    lg: 9,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, __jsx(Filter, {\n    category: category,\n    categories: categories,\n    brand: brand,\n    search: search,\n    price_from: price_from,\n    price_to: price_to,\n    attributes: query.attributes ? query.attributes.split(\",\") : [],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }), __jsx(_components_Product_list__WEBPACK_IMPORTED_MODULE_2__[\"List\"], {\n    sm: 6,\n    lg: 4,\n    category: category,\n    categories: categories,\n    brand: brand,\n    search: search,\n    price_from: price_from,\n    price_to: price_to,\n    attributes: attributes,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(Index, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvaW5kZXguanM/OWIyZSJdLCJuYW1lcyI6WyJJbmRleCIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5IiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwiYnJhbmQiLCJzZWFyY2giLCJwcmljZV9mcm9tIiwiTnVtYmVyIiwicHJpY2VfdG8iLCJhdHRyaWJ1dGVzIiwidG9BdHRyaWJ1dGVHb3VycFdoZXJlSW5wdXQiLCJzcGxpdCIsImJhY2tncm91bmRDb2xvciIsInRoZW1lIiwibWFyZ2luVG9wIiwiYm9yZGVyUmFkaXVzIiwic2V0U2VhcmNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQUlDLEtBQUssR0FBR0YsTUFBTSxDQUFDRSxLQUFuQjtBQUNBLE1BQU1DLFFBQVEsR0FBR0QsS0FBSyxDQUFDQyxRQUF2QjtBQUNBLE1BQU1DLFVBQVUsR0FBR0YsS0FBSyxDQUFDRSxVQUF6QjtBQUNBLE1BQU1DLEtBQUssR0FBR0gsS0FBSyxDQUFDRyxLQUFwQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0osS0FBSyxDQUFDSSxNQUFyQjtBQUNBLE1BQU1DLFVBQVUsR0FBR0wsS0FBSyxDQUFDSyxVQUFOLEdBQW1CQyxNQUFNLENBQUNOLEtBQUssQ0FBQ0ssVUFBUCxDQUF6QixHQUE4QyxDQUFqRTtBQUNBLE1BQU1FLFFBQVEsR0FBR1AsS0FBSyxDQUFDTyxRQUFOLEdBQWlCRCxNQUFNLENBQUNOLEtBQUssQ0FBQ08sUUFBUCxDQUF2QixHQUEwQyxTQUEzRDtBQUNBLE1BQU1DLFVBQVUsR0FBR0MsNEVBQTBCLENBQzNDVCxLQUFLLENBQUNRLFVBQU4sR0FBbUJSLEtBQUssQ0FBQ1EsVUFBTixDQUFpQkUsS0FBakIsQ0FBdUIsR0FBdkIsQ0FBbkIsR0FBaUQsRUFETixDQUE3QztBQUlBLFNBQ0UsTUFBQyxvREFBRDtBQUNFLFNBQUssRUFBRTtBQUNMQyxxQkFBZSxFQUFFQyxrREFBSyxDQUFDRCxlQURsQjtBQUVMRSxlQUFTLEVBQUUsRUFGTjtBQUdMQyxrQkFBWSxFQUFFO0FBSFQsS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0UsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsRUFRRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhDQUFEO0FBQUssTUFBRSxFQUFFLENBQVQ7QUFBWSxNQUFFLEVBQUUsQ0FBaEI7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQ0UsWUFBUSxFQUFFLGtCQUFDVixNQUFELEVBQVk7QUFDcEJXLGVBQVMsQ0FBQ1gsTUFBRCxDQUFUO0FBQ0QsS0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQVFFLE1BQUMsOENBQUQ7QUFBSyxNQUFFLEVBQUUsQ0FBVDtBQUFZLE1BQUUsRUFBRSxDQUFoQjtBQUFtQixNQUFFLEVBQUUsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsTUFBRDtBQUNFLFlBQVEsRUFBRUgsUUFEWjtBQUVFLGNBQVUsRUFBRUMsVUFGZDtBQUdFLFNBQUssRUFBRUMsS0FIVDtBQUlFLFVBQU0sRUFBRUMsTUFKVjtBQUtFLGNBQVUsRUFBRUMsVUFMZDtBQU1FLFlBQVEsRUFBRUUsUUFOWjtBQU9FLGNBQVUsRUFBRVAsS0FBSyxDQUFDUSxVQUFOLEdBQW1CUixLQUFLLENBQUNRLFVBQU4sQ0FBaUJFLEtBQWpCLENBQXVCLEdBQXZCLENBQW5CLEdBQWlELEVBUC9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVVFLE1BQUMsNkRBQUQ7QUFDRSxNQUFFLEVBQUUsQ0FETjtBQUVFLE1BQUUsRUFBRSxDQUZOO0FBR0UsWUFBUSxFQUFFVCxRQUhaO0FBSUUsY0FBVSxFQUFFQyxVQUpkO0FBS0UsU0FBSyxFQUFFQyxLQUxUO0FBTUUsVUFBTSxFQUFFQyxNQU5WO0FBT0UsY0FBVSxFQUFFQyxVQVBkO0FBUUUsWUFBUSxFQUFFRSxRQVJaO0FBU0UsY0FBVSxFQUFFQyxVQVRkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixDQVJGLENBUkYsQ0FERjtBQTBDRCxDQXZERDs7R0FBTVgsSztVQUNXRSxxRDs7O0tBRFhGLEs7QUF3RFNBLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcHJvZHVjdHMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IExpc3QgYXMgUHJvZHVjdHMgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qcm9kdWN0L2xpc3RcIjtcblxuaW1wb3J0IHsgdG9BdHRyaWJ1dGVHb3VycFdoZXJlSW5wdXQgfSBmcm9tIFwiLi4vLi4vbGliL2NoaXBcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCB7IFNpZGViYXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TaWRlYmFyXCI7XG5pbXBvcnQgeyBCaXJkQmcgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zcmMvQmlyZEJnXCI7XG5pbXBvcnQgeyBEaXZpZGVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3JjL0RpdmlkZXJcIjtcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSBcIi4uLy4uL2NvbmZpZy5qc29uXCI7XG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGxldCBxdWVyeSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgY2F0ZWdvcnkgPSBxdWVyeS5jYXRlZ29yeTtcbiAgY29uc3QgY2F0ZWdvcmllcyA9IHF1ZXJ5LmNhdGVnb3JpZXM7XG4gIGNvbnN0IGJyYW5kID0gcXVlcnkuYnJhbmQ7XG4gIGNvbnN0IHNlYXJjaCA9IHF1ZXJ5LnNlYXJjaDtcbiAgY29uc3QgcHJpY2VfZnJvbSA9IHF1ZXJ5LnByaWNlX2Zyb20gPyBOdW1iZXIocXVlcnkucHJpY2VfZnJvbSkgOiAwO1xuICBjb25zdCBwcmljZV90byA9IHF1ZXJ5LnByaWNlX3RvID8gTnVtYmVyKHF1ZXJ5LnByaWNlX3RvKSA6IDk5OTk5OTk5OTtcbiAgY29uc3QgYXR0cmlidXRlcyA9IHRvQXR0cmlidXRlR291cnBXaGVyZUlucHV0KFxuICAgIHF1ZXJ5LmF0dHJpYnV0ZXMgPyBxdWVyeS5hdHRyaWJ1dGVzLnNwbGl0KFwiLFwiKSA6IFtdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyXG4gICAgICBzdHlsZT17e1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmJhY2tncm91bmRDb2xvcixcbiAgICAgICAgbWFyZ2luVG9wOiAxNSxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA4LFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8RGl2aWRlciAvPlxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCB4cz17NH0gbWQ9ezN9IGxnPXszfT5cbiAgICAgICAgICA8U2lkZWJhclxuICAgICAgICAgICAgb25TZWFyY2g9eyhzZWFyY2gpID0+IHtcbiAgICAgICAgICAgICAgc2V0U2VhcmNoKHNlYXJjaCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHhzPXs4fSBtZD17OX0gbGc9ezl9PlxuICAgICAgICAgIDxGaWx0ZXJcbiAgICAgICAgICAgIGNhdGVnb3J5PXtjYXRlZ29yeX1cbiAgICAgICAgICAgIGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9XG4gICAgICAgICAgICBicmFuZD17YnJhbmR9XG4gICAgICAgICAgICBzZWFyY2g9e3NlYXJjaH1cbiAgICAgICAgICAgIHByaWNlX2Zyb209e3ByaWNlX2Zyb219XG4gICAgICAgICAgICBwcmljZV90bz17cHJpY2VfdG99XG4gICAgICAgICAgICBhdHRyaWJ1dGVzPXtxdWVyeS5hdHRyaWJ1dGVzID8gcXVlcnkuYXR0cmlidXRlcy5zcGxpdChcIixcIikgOiBbXX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxQcm9kdWN0c1xuICAgICAgICAgICAgc209ezZ9XG4gICAgICAgICAgICBsZz17NH1cbiAgICAgICAgICAgIGNhdGVnb3J5PXtjYXRlZ29yeX1cbiAgICAgICAgICAgIGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9XG4gICAgICAgICAgICBicmFuZD17YnJhbmR9XG4gICAgICAgICAgICBzZWFyY2g9e3NlYXJjaH1cbiAgICAgICAgICAgIHByaWNlX2Zyb209e3ByaWNlX2Zyb219XG4gICAgICAgICAgICBwcmljZV90bz17cHJpY2VfdG99XG4gICAgICAgICAgICBhdHRyaWJ1dGVzPXthdHRyaWJ1dGVzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/products/index.js\n");

/***/ })

})