webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/src/SellerProvider.js":
/*!******************************************!*\
  !*** ./components/src/SellerProvider.js ***!
  \******************************************/
/*! exports provided: SellerContext, SellerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SellerContext\", function() { return SellerContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SellerProvider\", function() { return SellerProvider; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _Query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Query */ \"./components/src/Query.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/media/huy/New Volume/linux/apps/ecom-ui/components/src/SellerProvider.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n        query($host: String) {\\n          allUsers(where: { host: $host }) {\\n            id\\n            email\\n            file {\\n              publicUrl\\n            }\\n            store\\n            slogan\\n            intro\\n            contact\\n            color\\n            primary\\n            backgroundColor\\n            descriptionBackgroundColor\\n            productBackgroundColor\\n          }\\n        }\\n      \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar SellerContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createContext\"])();\n\nvar level = [0, 5, 8, 13, 21, 34, 55, 89];\nvar prices = [100000, 200000, 500000, 1000000, 2000000];\n\nvar spacing = function spacing(i) {\n  return level[i];\n};\n\nvar uri = (false ? undefined : \"http://localhost:6007\") + \"/admin/api\";\nconsole.log(uri);\nvar SellerProvider = function SellerProvider(_ref) {\n  var children = _ref.children;\n  return __jsx(_Query__WEBPACK_IMPORTED_MODULE_4__[\"Query\"], {\n    query: Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"gql\"])(_templateObject()),\n    variables: {\n      host: true ? window.location.host : undefined\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, function (_ref2) {\n    var data = _ref2.data,\n        error = _ref2.error,\n        loading = _ref2.loading;\n    var theme = data === null || data === void 0 ? void 0 : data.allUsers[0];\n    return theme ? __jsx(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 11\n      }\n    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 13\n      }\n    }, __jsx(\"title\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 15\n      }\n    }, theme.store, \" | \", theme.slogan), __jsx(\"meta\", {\n      name: \"description\",\n      content: theme.intro,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 15\n      }\n    })), __jsx(SellerContext.Provider, {\n      value: _objectSpread(_objectSpread({}, theme), {}, {\n        server: false ? undefined : \"http://localhost:6007\",\n        seller: {\n          id: theme.id\n        },\n        spacing: spacing,\n        prices: prices,\n        css: css(theme)\n      }),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      style: {\n        backgroundColor: theme.backgroundColor,\n        color: theme.color\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 15\n      }\n    }, children))) : null;\n  });\n};\n_c = SellerProvider;\n\nvar css = function css(theme) {\n  return {\n    btnIcon: function btnIcon() {\n      var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -5;\n      var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : theme.backgroundColor;\n      return {\n        position: \"absolute\",\n        top: top,\n        right: -5,\n        padding: 3,\n        paddingTop: 5,\n        width: 30,\n        height: 30,\n        display: \"flex\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        borderRadius: \"50%\",\n        color: color,\n        fontWeight: 800,\n        backgroundColor: theme.primary\n      };\n    },\n    input: {\n      display: \"block-inline\",\n      border: \"1px solid \".concat(theme === null || theme === void 0 ? void 0 : theme.productBackgroundColor),\n      padding: spacing(1),\n      paddingLeft: spacing(3),\n      borderRadius: spacing(2),\n      backgroundColor: theme === null || theme === void 0 ? void 0 : theme.bgDark,\n      color: theme.color\n    },\n    btnInline: {\n      display: \"inline-block\",\n      backgroundColor: theme.primary,\n      color: theme.backgroundColor,\n      border: \"none\",\n      borderRadius: 35,\n      minWidth: 35\n    },\n    button: {\n      color: theme.backgroundColor,\n      width: \"100%\",\n      backgroundColor: theme.primary,\n      border: \"1px solid \".concat(theme.primary),\n      borderRadius: spacing(2),\n      paddingTop: spacing(1),\n      paddingBottom: spacing(1),\n      marginBottom: spacing(2)\n    },\n    btnOutline: {\n      color: theme.primary,\n      backgroundColor: theme.backgroundColor,\n      border: \"1px solid \".concat(theme.primary),\n      borderRadius: spacing(2),\n      paddingTop: spacing(1),\n      paddingBottom: spacing(1) + 1,\n      marginBottom: spacing(2)\n    },\n    h5: {\n      color: theme.primary,\n      fontSize: \"0.87rem\",\n      fontWeight: \"bold\",\n      marginBottom: spacing(3)\n    },\n    h6: {\n      color: theme.primary,\n      fontSize: \"0.8rem\",\n      textTransform: \"uppercase\",\n      margin: 0,\n      padding: 0\n    },\n    h1: {\n      color: theme.primary\n    },\n    h2: {\n      fontSize: \"1.5rem\",\n      fontWeight: \"bold\",\n      textTransform: \"uppercase\",\n      color: theme.primary,\n      marginBottom: spacing(2)\n    },\n    a: {\n      display: \"block\"\n    },\n    box: {\n      backgroundColor: theme.productBackgroundColor,\n      marginBottom: spacing(4),\n      padding: spacing(3),\n      borderRadius: spacing(1),\n      border: \"1px solid rgba(0,0,0,0.05)\",\n      boxShadow: \"5px 5px 5px rgba(0, 0, 0, 0.03)\"\n    },\n    filter: {\n      color: theme.color,\n      backgroundColor: theme.backgroundColor,\n      borderRadius: spacing(1),\n      border: \"1px solid rgba(0,0,0,0.05)\",\n      padding: spacing(2),\n      paddingLeft: spacing(3),\n      paddingRight: spacing(3),\n      display: \"inline-block\",\n      boxShadow: \"5px 5px 5px rgba(0, 0, 0, 0.03)\",\n      marginTop: spacing(4),\n      marginBottom: spacing(3),\n      marginLeft: spacing(3),\n      fontSize: \"0.9rem\",\n      position: \"relative\"\n    },\n    icon: {\n      color: theme.color\n    },\n    iconHeader: {\n      fontSize: \"1rem\",\n      marginRight: spacing(2),\n      marginBottom: spacing(1)\n    },\n    iconBorder: {\n      borderRadius: 35,\n      color: theme.primary,\n      width: 35,\n      height: 35,\n      padding: 8,\n      fontSize: \"1rem\"\n    }\n  };\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"SellerProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zcmMvU2VsbGVyUHJvdmlkZXIuanM/ODZkMSJdLCJuYW1lcyI6WyJTZWxsZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImxldmVsIiwicHJpY2VzIiwic3BhY2luZyIsImkiLCJ1cmkiLCJjb25zb2xlIiwibG9nIiwiU2VsbGVyUHJvdmlkZXIiLCJjaGlsZHJlbiIsImdxbCIsImhvc3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJ0aGVtZSIsImFsbFVzZXJzIiwic3RvcmUiLCJzbG9nYW4iLCJpbnRybyIsInNlcnZlciIsInNlbGxlciIsImlkIiwiY3NzIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJidG5JY29uIiwidG9wIiwicG9zaXRpb24iLCJyaWdodCIsInBhZGRpbmciLCJwYWRkaW5nVG9wIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYm9yZGVyUmFkaXVzIiwiZm9udFdlaWdodCIsInByaW1hcnkiLCJpbnB1dCIsImJvcmRlciIsInByb2R1Y3RCYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nTGVmdCIsImJnRGFyayIsImJ0bklubGluZSIsIm1pbldpZHRoIiwiYnV0dG9uIiwicGFkZGluZ0JvdHRvbSIsIm1hcmdpbkJvdHRvbSIsImJ0bk91dGxpbmUiLCJoNSIsImZvbnRTaXplIiwiaDYiLCJ0ZXh0VHJhbnNmb3JtIiwibWFyZ2luIiwiaDEiLCJoMiIsImEiLCJib3giLCJib3hTaGFkb3ciLCJmaWx0ZXIiLCJwYWRkaW5nUmlnaHQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwiaWNvbiIsImljb25IZWFkZXIiLCJtYXJnaW5SaWdodCIsImljb25Cb3JkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDTyxJQUFN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SjtBQWVOeEIsY0FBUSxFQUFFO0FBZkosS0F4RmM7QUF5R3RCcUMsUUFBSSxFQUFFO0FBQ0p4QyxXQUFLLEVBQUVWLEtBQUssQ0FBQ1U7QUFEVCxLQXpHZ0I7QUE0R3RCeUMsY0FBVSxFQUFFO0FBQ1ZkLGNBQVEsRUFBRSxNQURBO0FBRVZlLGlCQUFXLEVBQUVsRSxPQUFPLENBQUMsQ0FBRCxDQUZWO0FBR1ZnRCxrQkFBWSxFQUFFaEQsT0FBTyxDQUFDLENBQUQ7QUFIWCxLQTVHVTtBQWlIdEJtRSxjQUFVLEVBQUU7QUFDVi9CLGtCQUFZLEVBQUUsRUFESjtBQUVWWixXQUFLLEVBQUVWLEtBQUssQ0FBQ3dCLE9BRkg7QUFHVlAsV0FBSyxFQUFFLEVBSEc7QUFJVkMsWUFBTSxFQUFFLEVBSkU7QUFLVkgsYUFBTyxFQUFFLENBTEM7QUFNVnNCLGNBQVEsRUFBRTtBQU5BO0FBakhVLEdBQVo7QUFBQSxDQUFaIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zcmMvU2VsbGVyUHJvdmlkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCIuL1F1ZXJ5XCI7XG5leHBvcnQgY29uc3QgU2VsbGVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmNvbnN0IGxldmVsID0gWzAsIDUsIDgsIDEzLCAyMSwgMzQsIDU1LCA4OV07XG5jb25zdCBwcmljZXMgPSBbMTAwMDAwLCAyMDAwMDAsIDUwMDAwMCwgMTAwMDAwMCwgMjAwMDAwMF07XG5jb25zdCBzcGFjaW5nID0gKGkpID0+IGxldmVsW2ldO1xuY29uc3QgdXJpID1cbiAgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxuICAgID8gXCJodHRwczovL2Vjb21tZXJjZS5sb2Fsb2EudGVjaFwiXG4gICAgOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NjAwN1wiKSArIFwiL2FkbWluL2FwaVwiO1xuY29uc29sZS5sb2codXJpKTtcbmV4cG9ydCBjb25zdCBTZWxsZXJQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UXVlcnlcbiAgICAgIHF1ZXJ5PXtncWxgXG4gICAgICAgIHF1ZXJ5KCRob3N0OiBTdHJpbmcpIHtcbiAgICAgICAgICBhbGxVc2Vycyh3aGVyZTogeyBob3N0OiAkaG9zdCB9KSB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgZW1haWxcbiAgICAgICAgICAgIGZpbGUge1xuICAgICAgICAgICAgICBwdWJsaWNVcmxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0b3JlXG4gICAgICAgICAgICBzbG9nYW5cbiAgICAgICAgICAgIGludHJvXG4gICAgICAgICAgICBjb250YWN0XG4gICAgICAgICAgICBjb2xvclxuICAgICAgICAgICAgcHJpbWFyeVxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yXG4gICAgICAgICAgICBkZXNjcmlwdGlvbkJhY2tncm91bmRDb2xvclxuICAgICAgICAgICAgcHJvZHVjdEJhY2tncm91bmRDb2xvclxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIHZhcmlhYmxlcz17e1xuICAgICAgICBob3N0OiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LmxvY2F0aW9uLmhvc3QgOiBudWxsLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7KHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSkgPT4ge1xuICAgICAgICBjb25zdCB0aGVtZSA9IGRhdGE/LmFsbFVzZXJzWzBdO1xuICAgICAgICByZXR1cm4gdGhlbWUgPyAoXG4gICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgIDx0aXRsZT5cbiAgICAgICAgICAgICAgICB7dGhlbWUuc3RvcmV9IHwge3RoZW1lLnNsb2dhbn1cbiAgICAgICAgICAgICAgPC90aXRsZT5cbiAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17dGhlbWUuaW50cm99IC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8U2VsbGVyQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICAgIC4uLnRoZW1lLFxuICAgICAgICAgICAgICAgIHNlcnZlcjpcbiAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICA/IFwiaHR0cHM6Ly9lY29tbWVyY2UubG9hbG9hLnRlY2hcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiaHR0cDovL2xvY2FsaG9zdDo2MDA3XCIsXG4gICAgICAgICAgICAgICAgc2VsbGVyOiB7IGlkOiB0aGVtZS5pZCB9LFxuICAgICAgICAgICAgICAgIHNwYWNpbmcsXG4gICAgICAgICAgICAgICAgcHJpY2VzLFxuICAgICAgICAgICAgICAgIGNzczogY3NzKHRoZW1lKSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmJhY2tncm91bmRDb2xvcixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvU2VsbGVyQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICApIDogbnVsbDtcbiAgICAgIH19XG4gICAgPC9RdWVyeT5cbiAgKTtcbn07XG5jb25zdCBjc3MgPSAodGhlbWUpID0+ICh7XG4gIGJ0bkljb246ICh0b3AgPSAtNSwgY29sb3IgPSB0aGVtZS5iYWNrZ3JvdW5kQ29sb3IpID0+ICh7XG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICB0b3AsXG4gICAgcmlnaHQ6IC01LFxuICAgIHBhZGRpbmc6IDMsXG4gICAgcGFkZGluZ1RvcDogNSxcbiAgICB3aWR0aDogMzAsXG4gICAgaGVpZ2h0OiAzMCxcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICBjb2xvcixcbiAgICBmb250V2VpZ2h0OiA4MDAsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wcmltYXJ5LFxuICB9KSxcbiAgaW5wdXQ6IHtcbiAgICBkaXNwbGF5OiBcImJsb2NrLWlubGluZVwiLFxuICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lPy5wcm9kdWN0QmFja2dyb3VuZENvbG9yfWAsXG4gICAgcGFkZGluZzogc3BhY2luZygxKSxcbiAgICBwYWRkaW5nTGVmdDogc3BhY2luZygzKSxcbiAgICBib3JkZXJSYWRpdXM6IHNwYWNpbmcoMiksXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZT8uYmdEYXJrLFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcixcbiAgfSxcbiAgYnRuSW5saW5lOiB7XG4gICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnByaW1hcnksXG4gICAgY29sb3I6IHRoZW1lLmJhY2tncm91bmRDb2xvcixcbiAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgIGJvcmRlclJhZGl1czogMzUsXG4gICAgbWluV2lkdGg6IDM1LFxuICB9LFxuICBidXR0b246IHtcbiAgICBjb2xvcjogdGhlbWUuYmFja2dyb3VuZENvbG9yLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnByaW1hcnksXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUucHJpbWFyeX1gLFxuICAgIGJvcmRlclJhZGl1czogc3BhY2luZygyKSxcbiAgICBwYWRkaW5nVG9wOiBzcGFjaW5nKDEpLFxuICAgIHBhZGRpbmdCb3R0b206IHNwYWNpbmcoMSksXG4gICAgbWFyZ2luQm90dG9tOiBzcGFjaW5nKDIpLFxuICB9LFxuICBidG5PdXRsaW5lOiB7XG4gICAgY29sb3I6IHRoZW1lLnByaW1hcnksXG5cbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmJhY2tncm91bmRDb2xvcixcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5wcmltYXJ5fWAsXG4gICAgYm9yZGVyUmFkaXVzOiBzcGFjaW5nKDIpLFxuICAgIHBhZGRpbmdUb3A6IHNwYWNpbmcoMSksXG4gICAgcGFkZGluZ0JvdHRvbTogc3BhY2luZygxKSArIDEsXG4gICAgbWFyZ2luQm90dG9tOiBzcGFjaW5nKDIpLFxuICB9LFxuICBoNToge1xuICAgIGNvbG9yOiB0aGVtZS5wcmltYXJ5LFxuICAgIGZvbnRTaXplOiBcIjAuODdyZW1cIixcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICBtYXJnaW5Cb3R0b206IHNwYWNpbmcoMyksXG4gIH0sXG4gIGg2OiB7XG4gICAgY29sb3I6IHRoZW1lLnByaW1hcnksXG4gICAgZm9udFNpemU6IFwiMC44cmVtXCIsXG4gICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcbiAgICBtYXJnaW46IDAsXG4gICAgcGFkZGluZzogMCxcbiAgfSxcbiAgaDE6IHtcbiAgICBjb2xvcjogdGhlbWUucHJpbWFyeSxcbiAgfSxcbiAgaDI6IHtcbiAgICBmb250U2l6ZTogXCIxLjVyZW1cIixcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxuICAgIGNvbG9yOiB0aGVtZS5wcmltYXJ5LFxuICAgIG1hcmdpbkJvdHRvbTogc3BhY2luZygyKSxcbiAgfSxcbiAgYToge1xuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgfSxcbiAgYm94OiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wcm9kdWN0QmFja2dyb3VuZENvbG9yLFxuICAgIG1hcmdpbkJvdHRvbTogc3BhY2luZyg0KSxcbiAgICBwYWRkaW5nOiBzcGFjaW5nKDMpLFxuICAgIGJvcmRlclJhZGl1czogc3BhY2luZygxKSxcbiAgICBib3JkZXI6IFwiMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4wNSlcIixcbiAgICBib3hTaGFkb3c6IFwiNXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjAzKVwiLFxuICB9LFxuICBmaWx0ZXI6IHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3IsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgYm9yZGVyUmFkaXVzOiBzcGFjaW5nKDEpLFxuICAgIGJvcmRlcjogXCIxcHggc29saWQgcmdiYSgwLDAsMCwwLjA1KVwiLFxuXG4gICAgcGFkZGluZzogc3BhY2luZygyKSxcbiAgICBwYWRkaW5nTGVmdDogc3BhY2luZygzKSxcbiAgICBwYWRkaW5nUmlnaHQ6IHNwYWNpbmcoMyksXG4gICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICBib3hTaGFkb3c6IFwiNXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjAzKVwiLFxuICAgIG1hcmdpblRvcDogc3BhY2luZyg0KSxcbiAgICBtYXJnaW5Cb3R0b206IHNwYWNpbmcoMyksXG4gICAgbWFyZ2luTGVmdDogc3BhY2luZygzKSxcbiAgICBmb250U2l6ZTogXCIwLjlyZW1cIixcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICB9LFxuICBpY29uOiB7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9yLFxuICB9LFxuICBpY29uSGVhZGVyOiB7XG4gICAgZm9udFNpemU6IFwiMXJlbVwiLFxuICAgIG1hcmdpblJpZ2h0OiBzcGFjaW5nKDIpLFxuICAgIG1hcmdpbkJvdHRvbTogc3BhY2luZygxKSxcbiAgfSxcbiAgaWNvbkJvcmRlcjoge1xuICAgIGJvcmRlclJhZGl1czogMzUsXG4gICAgY29sb3I6IHRoZW1lLnByaW1hcnksXG4gICAgd2lkdGg6IDM1LFxuICAgIGhlaWdodDogMzUsXG4gICAgcGFkZGluZzogOCxcbiAgICBmb250U2l6ZTogXCIxcmVtXCIsXG4gIH0sXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/src/SellerProvider.js\n");

/***/ })

})