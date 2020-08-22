webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Brand/item.js":
/*!**********************************!*\
  !*** ./components/Brand/item.js ***!
  \**********************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Item\", function() { return Item; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/next-server/server/router */ \"./node_modules/next/dist/next-server/server/router.js\");\n/* harmony import */ var next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config.json */ \"./config.json\");\nvar _config_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../config.json */ \"./config.json\", 1);\nvar _jsxFileName = \"/home/huy/apps/ecom-ui/components/Brand/item.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Item(_ref) {\n  _s();\n\n  var brand = _ref.brand;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var query = router.query;\n  var exist = query.brand == brand.url;\n\n  var handleClick = function handleClick() {\n    query.brand = brand.url;\n    if (brand.url === \"all\") delete query.brand;\n    router.push({\n      query: query\n    });\n  };\n\n  return __jsx(\"a\", {\n    style: {\n      color: _config_json__WEBPACK_IMPORTED_MODULE_4__[\"theme\"].color,\n      fontWeight: exist ? \"bold\" : null\n    },\n    onClick: handleClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, brand.name);\n}\n\n_s(Item, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Item;\n\nvar _c;\n\n$RefreshReg$(_c, \"Item\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CcmFuZC9pdGVtLmpzPzBjODgiXSwibmFtZXMiOlsiSXRlbSIsImJyYW5kIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJleGlzdCIsInVybCIsImhhbmRsZUNsaWNrIiwicHVzaCIsImNvbG9yIiwidGhlbWUiLCJmb250V2VpZ2h0IiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNBLElBQVQsT0FBeUI7QUFBQTs7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFDOUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQUlDLEtBQUssR0FBR0YsTUFBTSxDQUFDRSxLQUFuQjtBQUNBLE1BQU1DLEtBQUssR0FBR0QsS0FBSyxDQUFDSCxLQUFOLElBQWVBLEtBQUssQ0FBQ0ssR0FBbkM7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkgsU0FBSyxDQUFDSCxLQUFOLEdBQWNBLEtBQUssQ0FBQ0ssR0FBcEI7QUFDQSxRQUFJTCxLQUFLLENBQUNLLEdBQU4sS0FBYyxLQUFsQixFQUF5QixPQUFPRixLQUFLLENBQUNILEtBQWI7QUFDekJDLFVBQU0sQ0FBQ00sSUFBUCxDQUFZO0FBQUVKLFdBQUssRUFBTEE7QUFBRixLQUFaO0FBQ0QsR0FKRDs7QUFLQSxTQUNFO0FBQ0UsU0FBSyxFQUFFO0FBQ0xLLFdBQUssRUFBRUMsa0RBQUssQ0FBQ0QsS0FEUjtBQUVMRSxnQkFBVSxFQUFFTixLQUFLLEdBQUcsTUFBSCxHQUFZO0FBRnhCLEtBRFQ7QUFLRSxXQUFPLEVBQUVFLFdBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9HTixLQUFLLENBQUNXLElBUFQsQ0FERjtBQVdEOztHQXBCZVosSTtVQUNDRyxxRDs7O0tBRERILEkiLCJmaWxlIjoiLi9jb21wb25lbnRzL0JyYW5kL2l0ZW0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHJvdXRlIH0gZnJvbSBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvcm91dGVyXCI7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gXCIuLi8uLi9jb25maWcuanNvblwiO1xuZXhwb3J0IGZ1bmN0aW9uIEl0ZW0oeyBicmFuZCB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBsZXQgcXVlcnkgPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IGV4aXN0ID0gcXVlcnkuYnJhbmQgPT0gYnJhbmQudXJsO1xuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBxdWVyeS5icmFuZCA9IGJyYW5kLnVybDtcbiAgICBpZiAoYnJhbmQudXJsID09PSBcImFsbFwiKSBkZWxldGUgcXVlcnkuYnJhbmQ7XG4gICAgcm91dGVyLnB1c2goeyBxdWVyeSB9KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8YVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yLFxuICAgICAgICBmb250V2VpZ2h0OiBleGlzdCA/IFwiYm9sZFwiIDogbnVsbCxcbiAgICAgIH19XG4gICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICA+XG4gICAgICB7YnJhbmQubmFtZX1cbiAgICA8L2E+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Brand/item.js\n");

/***/ })

})