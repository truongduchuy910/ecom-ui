webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Attribute/item.js":
/*!**************************************!*\
  !*** ./components/Attribute/item.js ***!
  \**************************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Item\", function() { return Item; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_chip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/chip */ \"./lib/chip.js\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config.json */ \"./config.json\");\nvar _config_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../config.json */ \"./config.json\", 1);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../apollo/client */ \"./apollo/client.js\");\nvar _jsxFileName = \"/home/huy/apps/ecom-ui/components/Attribute/item.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction Item(_ref) {\n  _s();\n\n  var attribute = _ref.attribute;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  var query = router.query;\n  var currentAttributes = query.attributes ? query.attributes.split(\",\") : [];\n  var exist = currentAttributes.includes(attribute.url);\n\n  var handleClick = function handleClick() {\n    if (exist) {\n      currentAttributes = Object(_lib_chip__WEBPACK_IMPORTED_MODULE_2__[\"removeItemOnce\"])(currentAttributes, attribute.url);\n    } else {\n      currentAttributes = currentAttributes.concat([attribute.url]);\n    }\n\n    query.attributes = currentAttributes.toString();\n    if (attribute.url === \"all\") delete query.attributes;\n    router.push({\n      query: query\n    });\n  };\n\n  return __jsx(\"a\", {\n    style: {\n      color: _config_json__WEBPACK_IMPORTED_MODULE_4__[\"theme\"].color,\n      fontWeight: exist ? \"bold\" : null\n    },\n    onClick: handleClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, attribute.name);\n}\n\n_s(Item, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = Item;\n\nvar _c;\n\n$RefreshReg$(_c, \"Item\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdHRyaWJ1dGUvaXRlbS5qcz9lZDAyIl0sIm5hbWVzIjpbIkl0ZW0iLCJhdHRyaWJ1dGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsImN1cnJlbnRBdHRyaWJ1dGVzIiwiYXR0cmlidXRlcyIsInNwbGl0IiwiZXhpc3QiLCJpbmNsdWRlcyIsInVybCIsImhhbmRsZUNsaWNrIiwicmVtb3ZlSXRlbU9uY2UiLCJjb25jYXQiLCJ0b1N0cmluZyIsInB1c2giLCJjb2xvciIsInRoZW1lIiwiZm9udFdlaWdodCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU0EsSUFBVCxPQUE2QjtBQUFBOztBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUNsQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBSUMsS0FBSyxHQUFHRixNQUFNLENBQUNFLEtBQW5CO0FBQ0EsTUFBSUMsaUJBQWlCLEdBQUdELEtBQUssQ0FBQ0UsVUFBTixHQUFtQkYsS0FBSyxDQUFDRSxVQUFOLENBQWlCQyxLQUFqQixDQUF1QixHQUF2QixDQUFuQixHQUFpRCxFQUF6RTtBQUNBLE1BQU1DLEtBQUssR0FBR0gsaUJBQWlCLENBQUNJLFFBQWxCLENBQTJCUixTQUFTLENBQUNTLEdBQXJDLENBQWQ7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixRQUFJSCxLQUFKLEVBQVc7QUFDVEgsdUJBQWlCLEdBQUdPLGdFQUFjLENBQUNQLGlCQUFELEVBQW9CSixTQUFTLENBQUNTLEdBQTlCLENBQWxDO0FBQ0QsS0FGRCxNQUVPO0FBQ0xMLHVCQUFpQixHQUFHQSxpQkFBaUIsQ0FBQ1EsTUFBbEIsQ0FBeUIsQ0FBQ1osU0FBUyxDQUFDUyxHQUFYLENBQXpCLENBQXBCO0FBQ0Q7O0FBRUROLFNBQUssQ0FBQ0UsVUFBTixHQUFtQkQsaUJBQWlCLENBQUNTLFFBQWxCLEVBQW5CO0FBQ0EsUUFBSWIsU0FBUyxDQUFDUyxHQUFWLEtBQWtCLEtBQXRCLEVBQTZCLE9BQU9OLEtBQUssQ0FBQ0UsVUFBYjtBQUM3QkosVUFBTSxDQUFDYSxJQUFQLENBQVk7QUFBRVgsV0FBSyxFQUFMQTtBQUFGLEtBQVo7QUFDRCxHQVZEOztBQVdBLFNBQ0U7QUFDRSxTQUFLLEVBQUU7QUFDTFksV0FBSyxFQUFFQyxrREFBSyxDQUFDRCxLQURSO0FBRUxFLGdCQUFVLEVBQUVWLEtBQUssR0FBRyxNQUFILEdBQVk7QUFGeEIsS0FEVDtBQUtFLFdBQU8sRUFBRUcsV0FMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0dWLFNBQVMsQ0FBQ2tCLElBUGIsQ0FERjtBQVdEOztHQTNCZW5CLEk7VUFDQ0cscUQ7OztLQURESCxJIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9BdHRyaWJ1dGUvaXRlbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgcmVtb3ZlSXRlbU9uY2UgfSBmcm9tIFwiLi4vLi4vbGliL2NoaXBcIjtcbmltcG9ydCB7IEZpVGhlcm1vbWV0ZXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSBcIi4uLy4uL2NvbmZpZy5qc29uXCI7XG5pbXBvcnQgeyBmaWx0ZXJBdHRyaWJ1dGVWYXIgfSBmcm9tIFwiLi4vLi4vYXBvbGxvL2NsaWVudFwiO1xuZXhwb3J0IGZ1bmN0aW9uIEl0ZW0oeyBhdHRyaWJ1dGUgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgbGV0IHF1ZXJ5ID0gcm91dGVyLnF1ZXJ5O1xuICBsZXQgY3VycmVudEF0dHJpYnV0ZXMgPSBxdWVyeS5hdHRyaWJ1dGVzID8gcXVlcnkuYXR0cmlidXRlcy5zcGxpdChcIixcIikgOiBbXTtcbiAgY29uc3QgZXhpc3QgPSBjdXJyZW50QXR0cmlidXRlcy5pbmNsdWRlcyhhdHRyaWJ1dGUudXJsKTtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgaWYgKGV4aXN0KSB7XG4gICAgICBjdXJyZW50QXR0cmlidXRlcyA9IHJlbW92ZUl0ZW1PbmNlKGN1cnJlbnRBdHRyaWJ1dGVzLCBhdHRyaWJ1dGUudXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudEF0dHJpYnV0ZXMgPSBjdXJyZW50QXR0cmlidXRlcy5jb25jYXQoW2F0dHJpYnV0ZS51cmxdKTtcbiAgICB9XG5cbiAgICBxdWVyeS5hdHRyaWJ1dGVzID0gY3VycmVudEF0dHJpYnV0ZXMudG9TdHJpbmcoKTtcbiAgICBpZiAoYXR0cmlidXRlLnVybCA9PT0gXCJhbGxcIikgZGVsZXRlIHF1ZXJ5LmF0dHJpYnV0ZXM7XG4gICAgcm91dGVyLnB1c2goeyBxdWVyeSB9KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8YVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yLFxuICAgICAgICBmb250V2VpZ2h0OiBleGlzdCA/IFwiYm9sZFwiIDogbnVsbCxcbiAgICAgIH19XG4gICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICA+XG4gICAgICB7YXR0cmlidXRlLm5hbWV9XG4gICAgPC9hPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Attribute/item.js\n");

/***/ })

})