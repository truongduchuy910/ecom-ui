webpackHotUpdate_N_E("pages/products",{

/***/ "./components/Category/item.js":
/*!*************************************!*\
  !*** ./components/Category/item.js ***!
  \*************************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Item\", function() { return Item; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../apollo/action */ \"./apollo/action.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dist/next-server/server/router */ \"./node_modules/next/dist/next-server/server/router.js\");\n/* harmony import */ var next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config.json */ \"./config.json\");\nvar _config_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../config.json */ \"./config.json\", 1);\n\n\nvar _jsxFileName = \"/home/huy/apps/ecom-ui/components/Category/item.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nfunction Item(_ref) {\n  _s();\n\n  var _this = this;\n\n  var categories = _ref.categories;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  var query = router.query;\n  var category = categories[categories.length - 1];\n  var childUrl = category.childs ? category.childs.map(function (category) {\n    return category.url;\n  }).toString() : [];\n  console.log(query.category === category.url, category.name);\n\n  var handleClick = function handleClick() {\n    if (category.url === \"all\") {\n      delete query.category;\n      delete query.categories;\n      router.push({\n        query: query\n      });\n    } else {\n      query.category = category.url;\n      query.categories = childUrl;\n      router.push({\n        query: query\n      });\n    }\n  };\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    style: {\n      color: _config_json__WEBPACK_IMPORTED_MODULE_6__[\"theme\"].color,\n      fontWeight: query.category === category.url ? \"bold\" : null,\n      paddingLeft: (categories.length - 1) * 13,\n      marginBottom: 13\n    },\n    onClick: handleClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, category.label ? category.label : category.name), category.childs ? category.childs.map(function (child) {\n    return __jsx(Item, {\n      key: child.id,\n      category: child,\n      categories: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(categories), [child]),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 13\n      }\n    });\n  }) : null);\n}\n\n_s(Item, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = Item;\n\nvar _c;\n\n$RefreshReg$(_c, \"Item\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXRlZ29yeS9pdGVtLmpzPzg2NTgiXSwibmFtZXMiOlsiSXRlbSIsImNhdGVnb3JpZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsImNhdGVnb3J5IiwibGVuZ3RoIiwiY2hpbGRVcmwiLCJjaGlsZHMiLCJtYXAiLCJ1cmwiLCJ0b1N0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiaGFuZGxlQ2xpY2siLCJwdXNoIiwiY29sb3IiLCJ0aGVtZSIsImZvbnRXZWlnaHQiLCJwYWRkaW5nTGVmdCIsIm1hcmdpbkJvdHRvbSIsImxhYmVsIiwiY2hpbGQiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNBLElBQVQsT0FBOEI7QUFBQTs7QUFBQTs7QUFBQSxNQUFkQyxVQUFjLFFBQWRBLFVBQWM7QUFDbkMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQUlDLEtBQUssR0FBR0YsTUFBTSxDQUFDRSxLQUFuQjtBQUVBLE1BQU1DLFFBQVEsR0FBR0osVUFBVSxDQUFDQSxVQUFVLENBQUNLLE1BQVgsR0FBb0IsQ0FBckIsQ0FBM0I7QUFFQSxNQUFNQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0csTUFBVCxHQUNiSCxRQUFRLENBQUNHLE1BQVQsQ0FBZ0JDLEdBQWhCLENBQW9CLFVBQUNKLFFBQUQ7QUFBQSxXQUFjQSxRQUFRLENBQUNLLEdBQXZCO0FBQUEsR0FBcEIsRUFBZ0RDLFFBQWhELEVBRGEsR0FFYixFQUZKO0FBR0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZVCxLQUFLLENBQUNDLFFBQU4sS0FBbUJBLFFBQVEsQ0FBQ0ssR0FBeEMsRUFBNkNMLFFBQVEsQ0FBQ1MsSUFBdEQ7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixRQUFJVixRQUFRLENBQUNLLEdBQVQsS0FBaUIsS0FBckIsRUFBNEI7QUFDMUIsYUFBT04sS0FBSyxDQUFDQyxRQUFiO0FBQ0EsYUFBT0QsS0FBSyxDQUFDSCxVQUFiO0FBQ0FDLFlBQU0sQ0FBQ2MsSUFBUCxDQUFZO0FBQUVaLGFBQUssRUFBTEE7QUFBRixPQUFaO0FBQ0QsS0FKRCxNQUlPO0FBQ0xBLFdBQUssQ0FBQ0MsUUFBTixHQUFpQkEsUUFBUSxDQUFDSyxHQUExQjtBQUNBTixXQUFLLENBQUNILFVBQU4sR0FBbUJNLFFBQW5CO0FBQ0FMLFlBQU0sQ0FBQ2MsSUFBUCxDQUFZO0FBQUVaLGFBQUssRUFBTEE7QUFBRixPQUFaO0FBQ0Q7QUFDRixHQVZEOztBQVdBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsU0FBSyxFQUFFO0FBQ0xhLFdBQUssRUFBRUMsa0RBQUssQ0FBQ0QsS0FEUjtBQUVMRSxnQkFBVSxFQUFFZixLQUFLLENBQUNDLFFBQU4sS0FBbUJBLFFBQVEsQ0FBQ0ssR0FBNUIsR0FBa0MsTUFBbEMsR0FBMkMsSUFGbEQ7QUFHTFUsaUJBQVcsRUFBRSxDQUFDbkIsVUFBVSxDQUFDSyxNQUFYLEdBQW9CLENBQXJCLElBQTBCLEVBSGxDO0FBSUxlLGtCQUFZLEVBQUU7QUFKVCxLQURUO0FBT0UsV0FBTyxFQUFFTixXQVBYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTR1YsUUFBUSxDQUFDaUIsS0FBVCxHQUFpQmpCLFFBQVEsQ0FBQ2lCLEtBQTFCLEdBQWtDakIsUUFBUSxDQUFDUyxJQVQ5QyxDQURGLEVBWUdULFFBQVEsQ0FBQ0csTUFBVCxHQUNHSCxRQUFRLENBQUNHLE1BQVQsQ0FBZ0JDLEdBQWhCLENBQW9CLFVBQUNjLEtBQUQ7QUFBQSxXQUNsQixNQUFDLElBQUQ7QUFDRSxTQUFHLEVBQUVBLEtBQUssQ0FBQ0MsRUFEYjtBQUVFLGNBQVEsRUFBRUQsS0FGWjtBQUdFLGdCQUFVLHlHQUFNdEIsVUFBTixJQUFrQnNCLEtBQWxCLEVBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURrQjtBQUFBLEdBQXBCLENBREgsR0FRRyxJQXBCTixDQURGO0FBd0JEOztHQTdDZXZCLEk7VUFDQ0cscUQ7OztLQURESCxJIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXRlZ29yeS9pdGVtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgY2F0ZWdvcnlWYXIsIHF1ZXJ5VmFyIH0gZnJvbSBcIi4uLy4uL2Fwb2xsby9hY3Rpb25cIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgcm91dGUgfSBmcm9tIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9yb3V0ZXJcIjtcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSBcIi4uLy4uL2NvbmZpZy5qc29uXCI7XG5leHBvcnQgZnVuY3Rpb24gSXRlbSh7IGNhdGVnb3JpZXMgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgbGV0IHF1ZXJ5ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIGNvbnN0IGNhdGVnb3J5ID0gY2F0ZWdvcmllc1tjYXRlZ29yaWVzLmxlbmd0aCAtIDFdO1xuXG4gIGNvbnN0IGNoaWxkVXJsID0gY2F0ZWdvcnkuY2hpbGRzXG4gICAgPyBjYXRlZ29yeS5jaGlsZHMubWFwKChjYXRlZ29yeSkgPT4gY2F0ZWdvcnkudXJsKS50b1N0cmluZygpXG4gICAgOiBbXTtcbiAgY29uc29sZS5sb2cocXVlcnkuY2F0ZWdvcnkgPT09IGNhdGVnb3J5LnVybCwgY2F0ZWdvcnkubmFtZSk7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIGlmIChjYXRlZ29yeS51cmwgPT09IFwiYWxsXCIpIHtcbiAgICAgIGRlbGV0ZSBxdWVyeS5jYXRlZ29yeTtcbiAgICAgIGRlbGV0ZSBxdWVyeS5jYXRlZ29yaWVzO1xuICAgICAgcm91dGVyLnB1c2goeyBxdWVyeSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnkuY2F0ZWdvcnkgPSBjYXRlZ29yeS51cmw7XG4gICAgICBxdWVyeS5jYXRlZ29yaWVzID0gY2hpbGRVcmw7XG4gICAgICByb3V0ZXIucHVzaCh7IHF1ZXJ5IH0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGFcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBjb2xvcjogdGhlbWUuY29sb3IsXG4gICAgICAgICAgZm9udFdlaWdodDogcXVlcnkuY2F0ZWdvcnkgPT09IGNhdGVnb3J5LnVybCA/IFwiYm9sZFwiIDogbnVsbCxcbiAgICAgICAgICBwYWRkaW5nTGVmdDogKGNhdGVnb3JpZXMubGVuZ3RoIC0gMSkgKiAxMyxcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IDEzLFxuICAgICAgICB9fVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgID5cbiAgICAgICAge2NhdGVnb3J5LmxhYmVsID8gY2F0ZWdvcnkubGFiZWwgOiBjYXRlZ29yeS5uYW1lfVxuICAgICAgPC9hPlxuICAgICAge2NhdGVnb3J5LmNoaWxkc1xuICAgICAgICA/IGNhdGVnb3J5LmNoaWxkcy5tYXAoKGNoaWxkKSA9PiAoXG4gICAgICAgICAgICA8SXRlbVxuICAgICAgICAgICAgICBrZXk9e2NoaWxkLmlkfVxuICAgICAgICAgICAgICBjYXRlZ29yeT17Y2hpbGR9XG4gICAgICAgICAgICAgIGNhdGVnb3JpZXM9e1suLi5jYXRlZ29yaWVzLCBjaGlsZF19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpXG4gICAgICAgIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Category/item.js\n");

/***/ })

})