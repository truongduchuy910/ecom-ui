webpackHotUpdate_N_E("pages/index",{

/***/ "./apollo/client.js":
/*!**************************!*\
  !*** ./apollo/client.js ***!
  \**************************/
/*! exports provided: orderCountVar, newOrderVar, newOrderCountVar, customerVar, refetchCustomer, cache, initializeApollo, useApollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"orderCountVar\", function() { return orderCountVar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newOrderVar\", function() { return newOrderVar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newOrderCountVar\", function() { return newOrderCountVar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"customerVar\", function() { return customerVar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"refetchCustomer\", function() { return refetchCustomer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cache\", function() { return cache; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeApollo\", function() { return initializeApollo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useApollo\", function() { return useApollo; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-link-http */ \"./node_modules/apollo-link-http/lib/bundle.esm.js\");\n/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apollo-client */ \"./node_modules/apollo-client/bundle.esm.js\");\n/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-cache-inmemory */ \"./node_modules/apollo-cache-inmemory/lib/bundle.esm.js\");\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config/index */ \"./config/index.js\");\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./action */ \"./apollo/action.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\nvar orderCountVar = makeVar(0);\nvar newOrderVar = makeVar(false);\nvar newOrderCountVar = makeVar();\nvar customerVar = makeVar({\n  id: null\n});\nvar refetchCustomer = makeVar( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n})));\nvar cache = new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_8__[\"InMemoryCache\"]();\nvar httpLink = new apollo_link_http__WEBPACK_IMPORTED_MODULE_6__[\"HttpLink\"]({\n  uri: _config_index__WEBPACK_IMPORTED_MODULE_9__[\"page\"].server + \"/admin/api\",\n  credentials: \"same-origin\"\n});\nvar authLink = setContext(function (_, _ref2) {\n  var headers = _ref2.headers;\n\n  if (true) {\n    var token = localStorage.getItem(\"token\");\n    return {\n      headers: _objectSpread(_objectSpread({}, headers), {}, {\n        authorization: token ? \"Bearer \".concat(token) : \"\"\n      })\n    };\n  }\n});\n\nfunction createApolloClient() {\n  return new apollo_client__WEBPACK_IMPORTED_MODULE_7__[\"ApolloClient\"]({\n    ssrMode: false,\n    link: authLink.concat(httpLink),\n    cache: cache\n  });\n}\n\nvar apolloClient;\nfunction initializeApollo() {\n  var _apolloClient2;\n\n  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\n  var _apolloClient = (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0 ? _apolloClient2 : createApolloClient();\n\n  if (initialState) {\n    _apolloClient.cache.restore(initialState);\n  }\n\n  if (false) {}\n  if (!apolloClient) apolloClient = _apolloClient;\n  return _apolloClient;\n}\nfunction useApollo(initialState) {\n  _s();\n\n  var store = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useMemo\"])(function () {\n    Object(_action__WEBPACK_IMPORTED_MODULE_10__[\"init\"])();\n    return initializeApollo(initialState);\n  }, [initialState]);\n  return store;\n}\n\n_s(useApollo, \"K8ucUnUnAgJZGJWAL9Ze8IHCmoQ=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBvbGxvL2NsaWVudC5qcz9hZGI0Il0sIm5hbWVzIjpbIm9yZGVyQ291bnRWYXIiLCJtYWtlVmFyIiwibmV3T3JkZXJWYXIiLCJuZXdPcmRlckNvdW50VmFyIiwiY3VzdG9tZXJWYXIiLCJpZCIsInJlZmV0Y2hDdXN0b21lciIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImh0dHBMaW5rIiwiSHR0cExpbmsiLCJ1cmkiLCJwYWdlIiwic2VydmVyIiwiY3JlZGVudGlhbHMiLCJhdXRoTGluayIsInNldENvbnRleHQiLCJfIiwiaGVhZGVycyIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImF1dGhvcml6YXRpb24iLCJjcmVhdGVBcG9sbG9DbGllbnQiLCJBcG9sbG9DbGllbnQiLCJzc3JNb2RlIiwibGluayIsImNvbmNhdCIsImFwb2xsb0NsaWVudCIsImluaXRpYWxpemVBcG9sbG8iLCJpbml0aWFsU3RhdGUiLCJfYXBvbGxvQ2xpZW50IiwicmVzdG9yZSIsInVzZUFwb2xsbyIsInN0b3JlIiwidXNlTWVtbyIsImluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxhQUFhLEdBQUdDLE9BQU8sQ0FBQyxDQUFELENBQTdCO0FBQ0EsSUFBTUMsV0FBVyxHQUFHRCxPQUFPLENBQUMsS0FBRCxDQUEzQjtBQUNBLElBQU1FLGdCQUFnQixHQUFHRixPQUFPLEVBQWhDO0FBQ0EsSUFBTUcsV0FBVyxHQUFHSCxPQUFPLENBQUM7QUFBRUksSUFBRSxFQUFFO0FBQU4sQ0FBRCxDQUEzQjtBQUNBLElBQU1DLGVBQWUsR0FBR0wsT0FBTyxnTUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQUQsR0FBL0I7QUFFQSxJQUFJTSxLQUFLLEdBQUcsSUFBSUMsbUVBQUosRUFBWjtBQUVQLElBQU1DLFFBQVEsR0FBRyxJQUFJQyx5REFBSixDQUFhO0FBQzVCQyxLQUFHLEVBQUVDLGtEQUFJLENBQUNDLE1BQUwsR0FBYyxZQURTO0FBRTVCQyxhQUFXLEVBQUU7QUFGZSxDQUFiLENBQWpCO0FBSUEsSUFBTUMsUUFBUSxHQUFHQyxVQUFVLENBQUMsVUFBQ0MsQ0FBRCxTQUFvQjtBQUFBLE1BQWRDLE9BQWMsU0FBZEEsT0FBYzs7QUFDOUMsWUFBbUM7QUFDakMsUUFBTUMsS0FBSyxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBZDtBQUNBLFdBQU87QUFDTEgsYUFBTyxrQ0FDRkEsT0FERTtBQUVMSSxxQkFBYSxFQUFFSCxLQUFLLG9CQUFhQSxLQUFiLElBQXVCO0FBRnRDO0FBREYsS0FBUDtBQU1EO0FBQ0YsQ0FWMEIsQ0FBM0I7O0FBV0EsU0FBU0ksa0JBQVQsR0FBOEI7QUFDNUIsU0FBTyxJQUFJQywwREFBSixDQUFpQjtBQUN0QkMsV0FBTyxPQURlO0FBRXRCQyxRQUFJLEVBQUVYLFFBQVEsQ0FBQ1ksTUFBVCxDQUFnQmxCLFFBQWhCLENBRmdCO0FBR3RCRixTQUFLLEVBQUxBO0FBSHNCLEdBQWpCLENBQVA7QUFLRDs7QUFFRCxJQUFJcUIsWUFBSjtBQUNPLFNBQVNDLGdCQUFULEdBQStDO0FBQUE7O0FBQUEsTUFBckJDLFlBQXFCLHVFQUFOLElBQU07O0FBQ3BELE1BQU1DLGFBQWEscUJBQUdILFlBQUgsMkRBQW1CTCxrQkFBa0IsRUFBeEQ7O0FBQ0EsTUFBSU8sWUFBSixFQUFrQjtBQUNoQkMsaUJBQWEsQ0FBQ3hCLEtBQWQsQ0FBb0J5QixPQUFwQixDQUE0QkYsWUFBNUI7QUFDRDs7QUFDRCxhQUFtQztBQUNuQyxNQUFJLENBQUNGLFlBQUwsRUFBbUJBLFlBQVksR0FBR0csYUFBZjtBQUNuQixTQUFPQSxhQUFQO0FBQ0Q7QUFDTSxTQUFTRSxTQUFULENBQW1CSCxZQUFuQixFQUFpQztBQUFBOztBQUN0QyxNQUFNSSxLQUFLLEdBQUdDLHFEQUFPLENBQUMsWUFBTTtBQUMxQkMseURBQUk7QUFFSixXQUFPUCxnQkFBZ0IsQ0FBQ0MsWUFBRCxDQUF2QjtBQUNELEdBSm9CLEVBSWxCLENBQUNBLFlBQUQsQ0FKa0IsQ0FBckI7QUFLQSxTQUFPSSxLQUFQO0FBQ0Q7O0dBUGVELFMiLCJmaWxlIjoiLi9hcG9sbG8vY2xpZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgeyBIdHRwTGluayB9IGZyb20gXCJhcG9sbG8tbGluay1odHRwXCI7XG5pbXBvcnQgeyBBcG9sbG9DbGllbnQgfSBmcm9tIFwiYXBvbGxvLWNsaWVudFwiO1xuaW1wb3J0IHsgSW5NZW1vcnlDYWNoZSB9IGZyb20gXCJhcG9sbG8tY2FjaGUtaW5tZW1vcnlcIjtcbmltcG9ydCB7IHBhZ2UgfSBmcm9tIFwiLi4vY29uZmlnL2luZGV4XCI7XG5pbXBvcnQgeyBpbml0IH0gZnJvbSBcIi4vYWN0aW9uXCI7XG5leHBvcnQgY29uc3Qgb3JkZXJDb3VudFZhciA9IG1ha2VWYXIoMCk7XG5leHBvcnQgY29uc3QgbmV3T3JkZXJWYXIgPSBtYWtlVmFyKGZhbHNlKTtcbmV4cG9ydCBjb25zdCBuZXdPcmRlckNvdW50VmFyID0gbWFrZVZhcigpO1xuZXhwb3J0IGNvbnN0IGN1c3RvbWVyVmFyID0gbWFrZVZhcih7IGlkOiBudWxsIH0pO1xuZXhwb3J0IGNvbnN0IHJlZmV0Y2hDdXN0b21lciA9IG1ha2VWYXIoYXN5bmMgKCkgPT4ge30pO1xuXG5leHBvcnQgbGV0IGNhY2hlID0gbmV3IEluTWVtb3J5Q2FjaGUoKTtcblxuY29uc3QgaHR0cExpbmsgPSBuZXcgSHR0cExpbmsoe1xuICB1cmk6IHBhZ2Uuc2VydmVyICsgXCIvYWRtaW4vYXBpXCIsXG4gIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsXG59KTtcbmNvbnN0IGF1dGhMaW5rID0gc2V0Q29udGV4dCgoXywgeyBoZWFkZXJzIH0pID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgLi4uaGVhZGVycyxcbiAgICAgICAgYXV0aG9yaXphdGlvbjogdG9rZW4gPyBgQmVhcmVyICR7dG9rZW59YCA6IFwiXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn0pO1xuZnVuY3Rpb24gY3JlYXRlQXBvbGxvQ2xpZW50KCkge1xuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgc3NyTW9kZTogdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIixcbiAgICBsaW5rOiBhdXRoTGluay5jb25jYXQoaHR0cExpbmspLFxuICAgIGNhY2hlLFxuICB9KTtcbn1cblxubGV0IGFwb2xsb0NsaWVudDtcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQXBvbGxvKGluaXRpYWxTdGF0ZSA9IG51bGwpIHtcbiAgY29uc3QgX2Fwb2xsb0NsaWVudCA9IGFwb2xsb0NsaWVudCA/PyBjcmVhdGVBcG9sbG9DbGllbnQoKTtcbiAgaWYgKGluaXRpYWxTdGF0ZSkge1xuICAgIF9hcG9sbG9DbGllbnQuY2FjaGUucmVzdG9yZShpbml0aWFsU3RhdGUpO1xuICB9XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gX2Fwb2xsb0NsaWVudDtcbiAgaWYgKCFhcG9sbG9DbGllbnQpIGFwb2xsb0NsaWVudCA9IF9hcG9sbG9DbGllbnQ7XG4gIHJldHVybiBfYXBvbGxvQ2xpZW50O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwb2xsbyhpbml0aWFsU3RhdGUpIHtcbiAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpbml0KCk7XG5cbiAgICByZXR1cm4gaW5pdGlhbGl6ZUFwb2xsbyhpbml0aWFsU3RhdGUpO1xuICB9LCBbaW5pdGlhbFN0YXRlXSk7XG4gIHJldHVybiBzdG9yZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./apollo/client.js\n");

/***/ })

})