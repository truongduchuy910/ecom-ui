webpackHotUpdate_N_E("pages/index",{

/***/ "./apollo/client.js":
/*!**************************!*\
  !*** ./apollo/client.js ***!
  \**************************/
/*! exports provided: orderCountVar, newOrderVar, newOrderCountVar, customerVar, refetchCustomer, cache, initializeApollo, useApollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"orderCountVar\", function() { return orderCountVar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newOrderVar\", function() { return newOrderVar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newOrderCountVar\", function() { return newOrderCountVar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"customerVar\", function() { return customerVar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"refetchCustomer\", function() { return refetchCustomer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cache\", function() { return cache; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeApollo\", function() { return initializeApollo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useApollo\", function() { return useApollo; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client/link/context */ \"./node_modules/@apollo/client/link/context/index.js\");\n/* harmony import */ var _apollo_client_link_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client/link/http */ \"./node_modules/@apollo/client/link/http/index.js\");\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config/index */ \"./config/index.js\");\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./action */ \"./apollo/action.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar orderCountVar = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"makeVar\"])(0);\nvar newOrderVar = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"makeVar\"])(false);\nvar newOrderCountVar = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"makeVar\"])();\nvar customerVar = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"makeVar\"])({\n  id: null\n});\nvar refetchCustomer = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"makeVar\"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n})));\nvar cache = new _apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"InMemoryCache\"]();\nvar httpLink = new _apollo_client_link_http__WEBPACK_IMPORTED_MODULE_6__[\"HttpLink\"]({\n  uri: _config_index__WEBPACK_IMPORTED_MODULE_7__[\"page\"].server + \"/admin/api\",\n  credentials: \"same-origin\"\n});\nvar authLink = Object(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_5__[\"setContext\"])(function (_, _ref2) {\n  var headers = _ref2.headers;\n\n  if (true) {\n    var token = localStorage.getItem(\"token\");\n    return {\n      headers: _objectSpread(_objectSpread({}, headers), {}, {\n        authorization: token ? \"Bearer \".concat(token) : \"\"\n      })\n    };\n  }\n});\n\nfunction createApolloClient() {\n  return new _apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"ApolloClient\"]({\n    ssrMode: false,\n    link: authLink.concat(httpLink),\n    cache: cache\n  });\n}\n\nvar apolloClient;\nfunction initializeApollo() {\n  var _apolloClient2;\n\n  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\n  var _apolloClient = (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0 ? _apolloClient2 : createApolloClient();\n\n  if (initialState) {\n    _apolloClient.cache.restore(initialState);\n  }\n\n  if (false) {}\n  if (!apolloClient) apolloClient = _apolloClient;\n  return _apolloClient;\n}\nfunction useApollo(initialState) {\n  _s();\n\n  var store = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useMemo\"])(function () {\n    Object(_action__WEBPACK_IMPORTED_MODULE_8__[\"init\"])();\n    return initializeApollo(initialState);\n  }, [initialState]);\n  return store;\n}\n\n_s(useApollo, \"K8ucUnUnAgJZGJWAL9Ze8IHCmoQ=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBvbGxvL2NsaWVudC5qcz9hZGI0Il0sIm5hbWVzIjpbIm9yZGVyQ291bnRWYXIiLCJtYWtlVmFyIiwibmV3T3JkZXJWYXIiLCJuZXdPcmRlckNvdW50VmFyIiwiY3VzdG9tZXJWYXIiLCJpZCIsInJlZmV0Y2hDdXN0b21lciIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImh0dHBMaW5rIiwiSHR0cExpbmsiLCJ1cmkiLCJwYWdlIiwic2VydmVyIiwiY3JlZGVudGlhbHMiLCJhdXRoTGluayIsInNldENvbnRleHQiLCJfIiwiaGVhZGVycyIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImF1dGhvcml6YXRpb24iLCJjcmVhdGVBcG9sbG9DbGllbnQiLCJBcG9sbG9DbGllbnQiLCJzc3JNb2RlIiwibGluayIsImNvbmNhdCIsImFwb2xsb0NsaWVudCIsImluaXRpYWxpemVBcG9sbG8iLCJpbml0aWFsU3RhdGUiLCJfYXBvbGxvQ2xpZW50IiwicmVzdG9yZSIsInVzZUFwb2xsbyIsInN0b3JlIiwidXNlTWVtbyIsImluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ08sSUFBTUEsYUFBYSxHQUFHQyw4REFBTyxDQUFDLENBQUQsQ0FBN0I7QUFDQSxJQUFNQyxXQUFXLEdBQUdELDhEQUFPLENBQUMsS0FBRCxDQUEzQjtBQUNBLElBQU1FLGdCQUFnQixHQUFHRiw4REFBTyxFQUFoQztBQUNBLElBQU1HLFdBQVcsR0FBR0gsOERBQU8sQ0FBQztBQUFFSSxJQUFFLEVBQUU7QUFBTixDQUFELENBQTNCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHTCw4REFBTyxnTUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQUQsR0FBL0I7QUFFQSxJQUFJTSxLQUFLLEdBQUcsSUFBSUMsNERBQUosRUFBWjtBQUVQLElBQU1DLFFBQVEsR0FBRyxJQUFJQyxpRUFBSixDQUFhO0FBQzVCQyxLQUFHLEVBQUVDLGtEQUFJLENBQUNDLE1BQUwsR0FBYyxZQURTO0FBRTVCQyxhQUFXLEVBQUU7QUFGZSxDQUFiLENBQWpCO0FBSUEsSUFBTUMsUUFBUSxHQUFHQyw4RUFBVSxDQUFDLFVBQUNDLENBQUQsU0FBb0I7QUFBQSxNQUFkQyxPQUFjLFNBQWRBLE9BQWM7O0FBQzlDLFlBQW1DO0FBQ2pDLFFBQU1DLEtBQUssR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBQWQ7QUFDQSxXQUFPO0FBQ0xILGFBQU8sa0NBQ0ZBLE9BREU7QUFFTEkscUJBQWEsRUFBRUgsS0FBSyxvQkFBYUEsS0FBYixJQUF1QjtBQUZ0QztBQURGLEtBQVA7QUFNRDtBQUNGLENBVjBCLENBQTNCOztBQVdBLFNBQVNJLGtCQUFULEdBQThCO0FBQzVCLFNBQU8sSUFBSUMsMkRBQUosQ0FBaUI7QUFDdEJDLFdBQU8sT0FEZTtBQUV0QkMsUUFBSSxFQUFFWCxRQUFRLENBQUNZLE1BQVQsQ0FBZ0JsQixRQUFoQixDQUZnQjtBQUd0QkYsU0FBSyxFQUFMQTtBQUhzQixHQUFqQixDQUFQO0FBS0Q7O0FBRUQsSUFBSXFCLFlBQUo7QUFDTyxTQUFTQyxnQkFBVCxHQUErQztBQUFBOztBQUFBLE1BQXJCQyxZQUFxQix1RUFBTixJQUFNOztBQUNwRCxNQUFNQyxhQUFhLHFCQUFHSCxZQUFILDJEQUFtQkwsa0JBQWtCLEVBQXhEOztBQUNBLE1BQUlPLFlBQUosRUFBa0I7QUFDaEJDLGlCQUFhLENBQUN4QixLQUFkLENBQW9CeUIsT0FBcEIsQ0FBNEJGLFlBQTVCO0FBQ0Q7O0FBQ0QsYUFBbUM7QUFDbkMsTUFBSSxDQUFDRixZQUFMLEVBQW1CQSxZQUFZLEdBQUdHLGFBQWY7QUFDbkIsU0FBT0EsYUFBUDtBQUNEO0FBQ00sU0FBU0UsU0FBVCxDQUFtQkgsWUFBbkIsRUFBaUM7QUFBQTs7QUFDdEMsTUFBTUksS0FBSyxHQUFHQyxxREFBTyxDQUFDLFlBQU07QUFDMUJDLHdEQUFJO0FBRUosV0FBT1AsZ0JBQWdCLENBQUNDLFlBQUQsQ0FBdkI7QUFDRCxHQUpvQixFQUlsQixDQUFDQSxZQUFELENBSmtCLENBQXJCO0FBS0EsU0FBT0ksS0FBUDtBQUNEOztHQVBlRCxTIiwiZmlsZSI6Ii4vYXBvbGxvL2NsaWVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFwb2xsb0NsaWVudCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgc2V0Q29udGV4dCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudC9saW5rL2NvbnRleHRcIjtcbmltcG9ydCB7IEh0dHBMaW5rIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50L2xpbmsvaHR0cFwiO1xuXG5pbXBvcnQgeyBwYWdlIH0gZnJvbSBcIi4uL2NvbmZpZy9pbmRleFwiO1xuaW1wb3J0IHsgSW5NZW1vcnlDYWNoZSwgbWFrZVZhciwgZ3FsIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBpbml0IH0gZnJvbSBcIi4vYWN0aW9uXCI7XG5leHBvcnQgY29uc3Qgb3JkZXJDb3VudFZhciA9IG1ha2VWYXIoMCk7XG5leHBvcnQgY29uc3QgbmV3T3JkZXJWYXIgPSBtYWtlVmFyKGZhbHNlKTtcbmV4cG9ydCBjb25zdCBuZXdPcmRlckNvdW50VmFyID0gbWFrZVZhcigpO1xuZXhwb3J0IGNvbnN0IGN1c3RvbWVyVmFyID0gbWFrZVZhcih7IGlkOiBudWxsIH0pO1xuZXhwb3J0IGNvbnN0IHJlZmV0Y2hDdXN0b21lciA9IG1ha2VWYXIoYXN5bmMgKCkgPT4ge30pO1xuXG5leHBvcnQgbGV0IGNhY2hlID0gbmV3IEluTWVtb3J5Q2FjaGUoKTtcblxuY29uc3QgaHR0cExpbmsgPSBuZXcgSHR0cExpbmsoe1xuICB1cmk6IHBhZ2Uuc2VydmVyICsgXCIvYWRtaW4vYXBpXCIsXG4gIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsXG59KTtcbmNvbnN0IGF1dGhMaW5rID0gc2V0Q29udGV4dCgoXywgeyBoZWFkZXJzIH0pID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgLi4uaGVhZGVycyxcbiAgICAgICAgYXV0aG9yaXphdGlvbjogdG9rZW4gPyBgQmVhcmVyICR7dG9rZW59YCA6IFwiXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn0pO1xuZnVuY3Rpb24gY3JlYXRlQXBvbGxvQ2xpZW50KCkge1xuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgc3NyTW9kZTogdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIixcbiAgICBsaW5rOiBhdXRoTGluay5jb25jYXQoaHR0cExpbmspLFxuICAgIGNhY2hlLFxuICB9KTtcbn1cblxubGV0IGFwb2xsb0NsaWVudDtcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQXBvbGxvKGluaXRpYWxTdGF0ZSA9IG51bGwpIHtcbiAgY29uc3QgX2Fwb2xsb0NsaWVudCA9IGFwb2xsb0NsaWVudCA/PyBjcmVhdGVBcG9sbG9DbGllbnQoKTtcbiAgaWYgKGluaXRpYWxTdGF0ZSkge1xuICAgIF9hcG9sbG9DbGllbnQuY2FjaGUucmVzdG9yZShpbml0aWFsU3RhdGUpO1xuICB9XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gX2Fwb2xsb0NsaWVudDtcbiAgaWYgKCFhcG9sbG9DbGllbnQpIGFwb2xsb0NsaWVudCA9IF9hcG9sbG9DbGllbnQ7XG4gIHJldHVybiBfYXBvbGxvQ2xpZW50O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwb2xsbyhpbml0aWFsU3RhdGUpIHtcbiAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpbml0KCk7XG5cbiAgICByZXR1cm4gaW5pdGlhbGl6ZUFwb2xsbyhpbml0aWFsU3RhdGUpO1xuICB9LCBbaW5pdGlhbFN0YXRlXSk7XG4gIHJldHVybiBzdG9yZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./apollo/client.js\n");

/***/ }),

/***/ "./node_modules/@apollo/client/link/context/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@apollo/client/link/context/index.js ***!
  \***********************************************************/
/*! exports provided: setContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setContext\", function() { return setContext; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/index.js */ \"./node_modules/@apollo/client/link/core/index.js\");\n/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/index.js */ \"./node_modules/@apollo/client/utilities/index.js\");\n\n\n\nfunction setContext(setter) {\n    return new _core_index_js__WEBPACK_IMPORTED_MODULE_1__[\"ApolloLink\"](function (operation, forward) {\n        var request = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__rest\"])(operation, []);\n        return new _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__[\"Observable\"](function (observer) {\n            var handle;\n            Promise.resolve(request)\n                .then(function (req) { return setter(req, operation.getContext()); })\n                .then(operation.setContext)\n                .then(function () {\n                handle = forward(operation).subscribe({\n                    next: observer.next.bind(observer),\n                    error: observer.error.bind(observer),\n                    complete: observer.complete.bind(observer),\n                });\n            })\n                .catch(observer.error.bind(observer));\n            return function () {\n                if (handle)\n                    handle.unsubscribe();\n            };\n        });\n    });\n}\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L2xpbmsvY29udGV4dC9pbmRleC5qcz8zMTYxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFDZTtBQUNRO0FBQy9DO0FBQ1AsZUFBZSx5REFBVTtBQUN6QixzQkFBc0Isb0RBQU07QUFDNUIsbUJBQW1CLDhEQUFVO0FBQzdCO0FBQ0E7QUFDQSxzQ0FBc0MsNENBQTRDLEVBQUU7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L2xpbmsvY29udGV4dC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9fcmVzdCB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgQXBvbGxvTGluayB9IGZyb20gXCIuLi9jb3JlL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9pbmRleC5qc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIHNldENvbnRleHQoc2V0dGVyKSB7XG4gICAgcmV0dXJuIG5ldyBBcG9sbG9MaW5rKGZ1bmN0aW9uIChvcGVyYXRpb24sIGZvcndhcmQpIHtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBfX3Jlc3Qob3BlcmF0aW9uLCBbXSk7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGU7XG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUocmVxdWVzdClcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVxKSB7IHJldHVybiBzZXR0ZXIocmVxLCBvcGVyYXRpb24uZ2V0Q29udGV4dCgpKTsgfSlcbiAgICAgICAgICAgICAgICAudGhlbihvcGVyYXRpb24uc2V0Q29udGV4dClcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlID0gZm9yd2FyZChvcGVyYXRpb24pLnN1YnNjcmliZSh7XG4gICAgICAgICAgICAgICAgICAgIG5leHQ6IG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlciksXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBvYnNlcnZlci5lcnJvci5iaW5kKG9ic2VydmVyKSxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IG9ic2VydmVyLmNvbXBsZXRlLmJpbmQob2JzZXJ2ZXIpLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2gob2JzZXJ2ZXIuZXJyb3IuYmluZChvYnNlcnZlcikpO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlKVxuICAgICAgICAgICAgICAgICAgICBoYW5kbGUudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@apollo/client/link/context/index.js\n");

/***/ }),

/***/ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js":
false,

/***/ "./node_modules/apollo-cache-inmemory/node_modules/@wry/context/lib/context.esm.js":
false,

/***/ "./node_modules/apollo-cache-inmemory/node_modules/optimism/lib/bundle.esm.js":
false,

/***/ "./node_modules/apollo-cache/lib/bundle.esm.js":
false,

/***/ "./node_modules/apollo-client/bundle.esm.js":
false,

/***/ "./node_modules/apollo-link-http-common/lib/bundle.esm.js":
false,

/***/ "./node_modules/apollo-link-http/lib/bundle.esm.js":
false,

/***/ "./node_modules/apollo-link/lib/bundle.esm.js":
false,

/***/ "./node_modules/apollo-utilities/lib/bundle.esm.js":
false,

/***/ "./node_modules/apollo-utilities/node_modules/@wry/equality/lib/equality.esm.js":
false,

/***/ "./node_modules/react-dom/cjs/react-dom.development.js":
false,

/***/ "./node_modules/react-dom/index.js":
false,

/***/ "./node_modules/scheduler/cjs/scheduler-tracing.development.js":
false,

/***/ "./node_modules/scheduler/cjs/scheduler.development.js":
false,

/***/ "./node_modules/scheduler/index.js":
false,

/***/ "./node_modules/scheduler/tracing.js":
false,

/***/ "./node_modules/zen-observable-ts/lib/bundle.esm.js":
false

})