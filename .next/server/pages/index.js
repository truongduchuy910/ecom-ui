module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "2yjL":
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "4FuJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Link; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("KwCx");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Link = ({
  children,
  style,
  href = "",
  onClick
}) => {
  const link = __jsx("a", {
    style: _objectSpread(_objectSpread({}, style), {}, {
      display: "inline-block"
    }),
    onClick: onClick
  }, children);

  return href ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: href
  }, link) : link;
};

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var _querystring = __webpack_require__("8xkj"); // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    // query = '' + new URLSearchParams(query);
    query = (0, _querystring.encode)(query);
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "6x3k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return removeItemOnce; });
/* unused harmony export removeItemAll */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return toAttributeGourpWhereInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatMoney; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return toSlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getErrorMessage; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rbTy");
/* harmony import */ var _apollo_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("CO9l");



function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);

  if (index > -1) {
    arr.splice(index, 1);
  }

  return arr;
}
function removeItemAll(arr, value) {
  var i = 0;

  while (i < arr.length) {
    if (arr[i] === value) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }

  return arr;
}
function toAttributeGourpWhereInput(attributes) {
  if (attributes.length) return {
    attributes_some: {
      url_in: attributes
    }
  };else return null;
}
function formatMoney(amount, decimalCount = 0, decimal = ".", thousands = ",") {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
    const negativeSign = amount < 0 ? "-" : "";
    let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    let j = i.length > 3 ? i.length % 3 : 0;
    return negativeSign + (j ? i.substr(0, j) + thousands : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "") + " đ";
  } catch (e) {}
}
function toSlug(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").replace(/ /g, "-").toLocaleLowerCase();
}
function getErrorMessage(error) {
  if (error.graphQLErrors) {
    for (const graphQLError of error.graphQLErrors) {
      if (graphQLError.extensions && graphQLError.extensions.code === "BAD_USER_INPUT") {
        return graphQLError.message;
      }
    }
  }

  switch (error.message.slice(0, 20)) {
    case "E11000 duplicate key":
      return "Tên đăng nhập bị trùng.";
  }

  switch (error.message) {
    case `ketQua validation failed: ketQua: Cast to Array failed for value "Bạn đã đạt đến giới hạn truy cập." at path "ketQua"`:
      return `Bạn không đủ lượt truy cập, liên hệ để nhận thêm`;

    case `Response not successful: Received status code 400`:
      return `Dữ liệu nhập vào không hợp lệ.`;

    case `You do not have access to this resource`:
      const token = localStorage.getItem("token");
      return token ? `Đã xảy ra lỗi, truy cập bị từ chối, hãy thử đăng nhập lại!` : `Vui lòng đăng nhập để tiếp tục!`;

    case `NetworkError when attempting to fetch resource.`:
      return `Lỗi kết nối, đợi 5 phút và thử lại!`;

    case `[passwordAuth:identity:notFound] The email provided didn't identify any undefined`:
      return `Sai Tên Đăng Nhập`;

    case `[passwordAuth:secret:mismatch] The password provided is incorrect`:
      return `Sai Mật Khẩu`;

    default:
      return error.message;
  }
}

/***/ }),

/***/ "7JLP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImgProduct; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2yjL");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("j3R+");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("CO9l");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("z+8S");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_SellerProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("htFV");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function ImgProduct({
  product,
  style,
  onClick
}) {
  var _data$wishlist, _ImgSrcs$imgIndex, _ImgSrcs$imgIndex$fil;

  const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_src_SellerProvider__WEBPACK_IMPORTED_MODULE_5__[/* SellerContext */ "a"]);
  const {
    data
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["gql"]`
    query {
      wishlist @client
    }
  `);
  const isInWishlist = data === null || data === void 0 ? void 0 : (_data$wishlist = data.wishlist) === null || _data$wishlist === void 0 ? void 0 : _data$wishlist.some(item => item.id === product.id);
  let ImgSrcs = (product === null || product === void 0 ? void 0 : product.images) || [];

  if (product.image) {
    ImgSrcs = [{
      file: product.image
    }].concat(ImgSrcs);
  }

  ImgSrcs = ImgSrcs.map(src => {
    var _src$file;

    return theme.server + (src === null || src === void 0 ? void 0 : (_src$file = src.file) === null || _src$file === void 0 ? void 0 : _src$file.publicUrl);
  });

  if (product.altImages) {
    ImgSrcs = product.altImages.split(",").concat(ImgSrcs);
  }

  const {
    0: imgIndex,
    1: setImgIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  return __jsx("div", {
    style: {
      position: "inherit"
    }
  }, __jsx("img", {
    src: ImgSrcs[imgIndex] ? ImgSrcs[imgIndex] : "/img/no-img.png",
    onClick: onClick,
    style: _objectSpread(_objectSpread({}, style), {}, {
      width: "100%",
      cursor: "pointer"
    }),
    key: (_ImgSrcs$imgIndex = ImgSrcs[imgIndex]) === null || _ImgSrcs$imgIndex === void 0 ? void 0 : (_ImgSrcs$imgIndex$fil = _ImgSrcs$imgIndex.file) === null || _ImgSrcs$imgIndex$fil === void 0 ? void 0 : _ImgSrcs$imgIndex$fil.publicUrl
  }), __jsx("i", {
    onClick: () => isInWishlist ? Object(_apollo_action__WEBPACK_IMPORTED_MODULE_3__[/* removeWishListItem */ "n"])(product) : Object(_apollo_action__WEBPACK_IMPORTED_MODULE_3__[/* addProductToLocalWishlist */ "f"])(product),
    style: theme.css.btnIcon()
  }, isInWishlist ? __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdDoneAll"], null) : __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosHeartEmpty"], null)));
}

/***/ }),

/***/ "7QIf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_chip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("6x3k");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("C9pf");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("rbTy");
/* harmony import */ var _src_SellerProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("htFV");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("2yjL");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_6__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function Item({
  attribute,
  style,
  removeIcon
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_src_SellerProvider__WEBPACK_IMPORTED_MODULE_5__[/* SellerContext */ "a"]);
  let query = router.query;
  let currentAttributes = query.attributes ? query.attributes.split(",") : [];
  const exist = currentAttributes.includes(attribute.url);

  const handleClick = () => {
    if (exist) {
      currentAttributes = Object(_lib_chip__WEBPACK_IMPORTED_MODULE_2__[/* removeItemOnce */ "c"])(currentAttributes, attribute.url);
    } else {
      currentAttributes = currentAttributes.concat([attribute.url]);
    }

    query.attributes = currentAttributes.toString();
    if (attribute.url === "all") delete query.attributes;
    router.push({
      query
    });
  };

  return __jsx("a", {
    style: _objectSpread(_objectSpread({}, style), {}, {
      color: theme.color,
      fontWeight: exist ? "bold" : null,
      display: "block",
      cursor: "pointer"
    }),
    onClick: handleClick
  }, attribute.name, removeIcon ? __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_6__["IoIosRemoveCircleOutline"], {
    style: theme.css.removeIcon
  }) : null);
}

/***/ }),

/***/ "7z3o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("z+8S");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8z4u");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_chip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("6x3k");
/* harmony import */ var _src_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("pRrB");
/* harmony import */ var _UI_moreProducts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("jMFK");
/* harmony import */ var _src_SellerProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("htFV");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const GET_PRODUCTS = _apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"]`
  query(
    $first: Int
    $skip: Int
    $category: String
    $categories: [String]
    $brand: BrandWhereInput
    $orderBy: String
    $suggestions: ProductSuggestionType
    $seller: UserWhereInput
    $sale_gt: Int
    $price_from: Int
    $price_to: Int
    $keyword: String
    $except: String
  ) {
    allProducts(
      first: $first
      skip: $skip
      where: {
        AND: [
          { url_contains: $keyword }
          { category: { OR: [{ url: $category }, { url_in: $categories }] } }
          { brand: $brand }
          { suggestions: $suggestions }
          { seller: $seller }
          { sale_gt: $sale_gt }
          { price_gt: $price_from }
          { price_lt: $price_to }
          { url_not: $except }
        ]
      }
      orderBy: $orderBy
    ) {
      id
      name
      description
      image {
        publicUrl
      }
      images {
        file {
          publicUrl
        }
      }
      altImages
      price
      sale
      url
    }
  }
`;
const List = ({
  title = "",
  first = 4,
  skip = 0,
  category,
  categories,
  brand = "",
  attributes,
  orderBy,
  suggestions,
  sale,
  price_from = 0,
  price_to,
  xs,
  sm,
  md,
  lg,
  xl,
  more = true,
  search,
  except,
  center
}) => {
  var _data$allProducts2;

  const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_src_SellerProvider__WEBPACK_IMPORTED_MODULE_7__[/* SellerContext */ "a"]);
  let variables = {
    first,
    skip,
    category,
    categories,
    brand: brand ? {
      url_contains: brand
    } : null,
    attributes,
    orderBy,
    suggestions,
    seller: theme.seller,
    price_from,
    price_to: price_to ? price_to : 999999999,
    except
  };
  if (search) variables.keyword = Object(_lib_chip__WEBPACK_IMPORTED_MODULE_4__[/* toSlug */ "e"])(search);
  if (sale) variables.sale_gt = 0;
  let {
    data,
    error,
    loading,
    fetchMore
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(GET_PRODUCTS, {
    variables
  });
  let {
    0: on,
    1: setOn
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  let width = 0;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // fetch more data
    if (more) {
      const productsEle = document.getElementById("products"); // hight of element - scrollTop < window height ?

      const alpha = () => (productsEle === null || productsEle === void 0 ? void 0 : productsEle.clientHeight) - document.scrollingElement.scrollTop - window.innerHeight + 150; // loading done


      let al = alpha();
      if (al > 0) setOn(false);

      if (on && !loading && al < 0) {
        loadingMore();
      }

      window.onscroll = () => {
        if (alpha() < 0 && !on) setOn(true);
      };
    }

    if (!width) width = window.innerWidth;
  });

  function loadingMore() {
    var _data$allProducts;

    const count = data === null || data === void 0 ? void 0 : (_data$allProducts = data.allProducts) === null || _data$allProducts === void 0 ? void 0 : _data$allProducts.length;
    variables.skip = count;

    try {
      fetchMore({
        variables,
        updateQuery: (prev, {
          fetchMoreResult
        }) => {
          var _fetchMoreResult$allP;

          if (!((_fetchMoreResult$allP = fetchMoreResult.allProducts) === null || _fetchMoreResult$allP === void 0 ? void 0 : _fetchMoreResult$allP.length)) {
            return prev;
          }

          return Object.assign({}, prev, {
            allProducts: [...prev.allProducts, ...fetchMoreResult.allProducts]
          });
        }
      });
    } catch (e) {}
  }

  if (error || loading) return __jsx("div", {
    style: {
      margin: theme.spacing(3)
    }
  }, __jsx(_src_Loading__WEBPACK_IMPORTED_MODULE_5__[/* Loading */ "a"], null));
  return (data === null || data === void 0 ? void 0 : (_data$allProducts2 = data.allProducts) === null || _data$allProducts2 === void 0 ? void 0 : _data$allProducts2.length) ? __jsx("section", {
    id: "products",
    style: {
      paddingLeft: theme.spacing(2)
    }
  }, title ? __jsx("h2", {
    style: _objectSpread(_objectSpread({}, theme.css.h2), {}, {
      textAlign: "center",
      marginBottom: theme.spacing(5)
    })
  }, title) : null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    noGutters: true,
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, data.allProducts.map(product => {
    var _data$allProducts3, _data$allProducts4, _data$allProducts5, _data$allProducts6, _data$allProducts7;

    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      key: product.id,
      xs: (data === null || data === void 0 ? void 0 : (_data$allProducts3 = data.allProducts) === null || _data$allProducts3 === void 0 ? void 0 : _data$allProducts3.length) > 2 ? xs ? xs : 6 : 12,
      sm: (data === null || data === void 0 ? void 0 : (_data$allProducts4 = data.allProducts) === null || _data$allProducts4 === void 0 ? void 0 : _data$allProducts4.length) > 2 ? sm ? sm : 6 : 6,
      md: (data === null || data === void 0 ? void 0 : (_data$allProducts5 = data.allProducts) === null || _data$allProducts5 === void 0 ? void 0 : _data$allProducts5.length) > 2 ? md ? md : 4 : 4,
      lg: (data === null || data === void 0 ? void 0 : (_data$allProducts6 = data.allProducts) === null || _data$allProducts6 === void 0 ? void 0 : _data$allProducts6.length) > 2 ? lg ? lg : 3 : 3,
      xl: (data === null || data === void 0 ? void 0 : (_data$allProducts7 = data.allProducts) === null || _data$allProducts7 === void 0 ? void 0 : _data$allProducts7.length) > 2 ? xl ? xl : 2 : 3,
      style: {
        padding: width <= 768 && width != 0 ? 3 : theme.spacing(2),
        paddingTop: 0
      }
    }, __jsx(_item__WEBPACK_IMPORTED_MODULE_2__[/* Item */ "a"], {
      product: product
    }));
  }))) : __jsx("p", {
    style: {
      textAlign: "center"
    }
  }, "Kh\xF4ng c\xF3 k\u1EBFt qu\u1EA3!");
};

/***/ }),

/***/ "8xkj":
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "8z4u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_chip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6x3k");
/* harmony import */ var _src_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4FuJ");
/* harmony import */ var _imageProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("7JLP");
/* harmony import */ var _Animations_FadeIn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("seEB");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("lJcc");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_SellerProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("htFV");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const Item = ({
  product
}) => {
  const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_src_SellerProvider__WEBPACK_IMPORTED_MODULE_7__[/* SellerContext */ "a"]);
  const {
    0: show,
    1: setShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  return __jsx(_Animations_FadeIn__WEBPACK_IMPORTED_MODULE_4__[/* FadeIn */ "a"], null, __jsx("div", {
    style: _objectSpread(_objectSpread({}, theme.css.box), {}, {
      padding: 0,
      position: "relative"
    })
  }, __jsx(_imageProduct__WEBPACK_IMPORTED_MODULE_3__[/* ImgProduct */ "a"], {
    product: product,
    style: {
      marginBottom: 0,
      borderRadius: `${theme.spacing(1)}px ${theme.spacing(1)}px 0px 0px`
    },
    onClick: () => {
      router.push({
        pathname: "/detail",
        query: {
          detail: product.url
        }
      });
    }
  }), __jsx("div", {
    style: {
      padding: theme.spacing(2)
    },
    onClick: () => {
      const event = {
        category: "Product",
        action: "view",
        value: product.name
      };
      console.log(event);
      react_ga__WEBPACK_IMPORTED_MODULE_5___default.a.event(event);
    }
  }, __jsx(_src_Link__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "a"], {
    href: {
      pathname: "/detail",
      query: {
        detail: product.url
      }
    }
  }, __jsx("a", null, __jsx("p", {
    style: {
      color: theme.color,
      textTransform: "capitalize"
    }
  }, product.name))), __jsx("p", {
    style: {
      textDecoration: product.sale ? "line-through" : "",
      color: product.sale ? theme.secondary : theme.primary,
      fontSize: product.sale ? "0.8rem" : "0.85rem",
      float: product.sale ? "right" : "default",
      fontWeight: product.sale ? "normal" : "bold",
      marginBottom: theme.spacing(0),
      wordWrap: "break-word"
    }
  }, Object(_lib_chip__WEBPACK_IMPORTED_MODULE_1__[/* formatMoney */ "a"])(product.price)), product.sale ? __jsx("p", {
    style: {
      color: theme.primary,
      display: show ? "none" : "block",
      fontWeigh: "bold",
      fontSize: "0.85rem",
      marginBottom: theme.spacing(0)
    }
  }, Object(_lib_chip__WEBPACK_IMPORTED_MODULE_1__[/* formatMoney */ "a"])(product.price - product.sale)) : null)));
};

/***/ }),

/***/ "C9pf":
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ }),

/***/ "CIJA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ List; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__("z+8S");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./components/src/SellerProvider.js + 1 modules
var SellerProvider = __webpack_require__("htFV");

// CONCATENATED MODULE: ./components/Hashtag/item.js

var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function Item({
  hashtag,
  style
}) {
  const router = Object(router_["useRouter"])();
  const theme = Object(external_react_["useContext"])(SellerProvider["a" /* SellerContext */]);
  let query = router.query;
  const exist = query.hashtag == hashtag.url;

  const handleClick = () => {
    query.hashtag = hashtag.url;
    if (hashtag.url === "all") delete query.hashtag;
    router.push({
      pathname: "/posts",
      query
    });
  };

  return __jsx("a", {
    style: _objectSpread(_objectSpread({}, style), {}, {
      color: theme.color,
      fontWeight: exist ? "bold" : null,
      cursor: "pointer"
    }),
    onClick: handleClick
  }, hashtag.name);
}
// EXTERNAL MODULE: ./lib/chip.js
var chip = __webpack_require__("6x3k");

// EXTERNAL MODULE: ./components/src/Loading.js
var Loading = __webpack_require__("pRrB");

// EXTERNAL MODULE: external "react-icons/io"
var io_ = __webpack_require__("2yjL");

// CONCATENATED MODULE: ./components/Hashtag/list.js

var list_jsx = external_react_default.a.createElement;







const GET_HASHTAGS = client_["gql"]`
  query($seller: UserWhereInput) {
    allHashtags(where: { seller: $seller }) {
      id
      name
      url
    }
  }
`;
function List() {
  var _data$allHashtags, _data$allHashtags2, _data$allHashtags3;

  const theme = Object(external_react_["useContext"])(SellerProvider["a" /* SellerContext */]);
  const {
    data,
    loading,
    error
  } = Object(client_["useQuery"])(GET_HASHTAGS, {
    variables: {
      seller: theme.seller
    }
  });
  const {
    0: open,
    1: setOpen
  } = Object(external_react_["useState"])(false);
  if (loading) return list_jsx(Loading["a" /* Loading */], null);
  if (error) return list_jsx("i", {
    color: "danger"
  }, Object(chip["b" /* getErrorMessage */])(error));
  return !loading && data ? list_jsx("div", null, list_jsx("h5", {
    style: theme.css.h5
  }, list_jsx(io_["IoIosBookmark"], {
    style: theme.css.iconHeader
  }), " B\xE0i vi\u1EBFt"), data === null || data === void 0 ? void 0 : (_data$allHashtags = data.allHashtags) === null || _data$allHashtags === void 0 ? void 0 : _data$allHashtags.slice(0, open ? data === null || data === void 0 ? void 0 : (_data$allHashtags2 = data.allHashtags) === null || _data$allHashtags2 === void 0 ? void 0 : _data$allHashtags2.lenght : 7).map(hashtag => list_jsx(Item, {
    key: hashtag.id,
    hashtag: hashtag,
    style: {
      display: "block"
    }
  })), (data === null || data === void 0 ? void 0 : (_data$allHashtags3 = data.allHashtags) === null || _data$allHashtags3 === void 0 ? void 0 : _data$allHashtags3.length) > 7 ? open ? list_jsx("a", {
    onClick: () => setOpen(false),
    style: {
      color: theme.primary
    }
  }, "R\xFAt g\u1ECDn") : list_jsx("a", {
    onClick: () => setOpen(true),
    style: {
      color: theme.primary
    }
  }, "Xem th\xEAm") : null) : null;
}

/***/ }),

/***/ "CO9l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return WISHLIST; });
/* unused harmony export COMPARE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CUSTOMER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return init; });
/* unused harmony export emptyCompare */
/* unused harmony export removeCompareItem */
/* unused harmony export addProductToLocalCompare */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return onSignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return onSignOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return chooseCustomer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return emptyCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return removeCartItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return changeCartItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return addProductToLocalCart; });
/* unused harmony export emptyWishlist */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return removeWishListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return addProductToLocalWishlist; });
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rbTy");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("z+8S");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);


const USER = _apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"]`
  query {
    user @client
  }
`;
const CART = _apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"]`
  query {
    cartItems @client
  }
`;
const WISHLIST = _apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"]`
  query {
    wishlist @client
  }
`;
const COMPARE = _apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"]`
  query {
    compare @client
  }
`;
const CUSTOMER = _apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"]`
  query {
    customer @client
  }
`; // initialize

const init = () => {
  _client__WEBPACK_IMPORTED_MODULE_0__[/* cache */ "a"].writeQuery({
    query: USER,
    data: {
      user: false ? undefined : {
        id: null,
        email: null,
        isAdmin: null,
        isSeller: null
      }
    }
  });
  _client__WEBPACK_IMPORTED_MODULE_0__[/* cache */ "a"].writeQuery({
    query: CART,
    data: {
      cartItems: false ? undefined : null
    }
  });
  _client__WEBPACK_IMPORTED_MODULE_0__[/* cache */ "a"].writeQuery({
    query: COMPARE,
    data: {
      compare: false ? undefined : null
    }
  });
  _client__WEBPACK_IMPORTED_MODULE_0__[/* cache */ "a"].writeQuery({
    query: WISHLIST,
    data: {
      wishlist: false ? undefined : null
    }
  });
  _client__WEBPACK_IMPORTED_MODULE_0__[/* cache */ "a"].writeQuery({
    query: CUSTOMER,
    data: {
      customer: {
        phone: null,
        name: null,
        address: null
      }
    }
  });
};

const modifyUser = ({
  user
}) => {
  if (false) {}
};

const modifyCart = ({
  items
}) => {
  if (false) {}
};

const modifyWishlist = ({
  items
}) => {
  if (false) {}
};

const modifyCompare = ({
  items
}) => {
  if (false) {}
};

const modifyCustomer = ({
  customer
}) => {
  if (false) {}
};
/* 
    you can use client variable below
*/


const emptyCompare = () => {
  modifyCompare({
    items: []
  });
};
const removeCompareItem = function (removeItem) {
  let products = [];

  try {
    // get
    products = JSON.parse(localStorage.getItem("compare") || '{ "data": [] }').data;
  } catch {} // change


  let items = [];
  products.map(product => {
    if (product.id !== removeItem.id) items.push(product);
  });
  modifyCompare({
    items
  });
};
function addProductToLocalCompare(newProduct) {
  // get
  let products = [];

  try {
    products = JSON.parse(localStorage.getItem("compare") || '{ "data": [] }').data;
  } catch {} // change


  let others = [];
  products.map(product => {
    if (product.id !== newProduct.id) {
      others.push(product);
    }
  });
  const items = [...others, newProduct]; // save

  modifyCompare({
    items
  });
}
const onSignIn = ({
  user
}) => {
  modifyUser({
    user
  });
};
const onSignOut = () => {
  modifyUser({
    user: null
  });
};
const chooseCustomer = ({
  customer
}) => {
  modifyCustomer({
    customer
  });
};
const emptyCart = function () {
  modifyCart({
    items: []
  });
};
const removeCartItem = removeItem => {
  // get
  const cartItems = JSON.parse(localStorage.getItem("cartItems") || '{ "data": [] }').data; // change

  let items = [];
  cartItems.map(item => {
    if (item.product.id !== removeItem.product.id) items.push(item);
  });
  modifyCart({
    items
  });
};
const changeCartItem = function (cartItem, change) {
  // get
  let cartItems = [];

  try {
    cartItems = JSON.parse(localStorage.getItem("cartItems") || '{ "data": [] }').data;
  } catch {} // change


  let items = [];
  const price = cartItem.product.price - cartItem.product.sale;
  cartItems.map((item, index) => {
    const quantity = item.quantity + change > 0 ? item.quantity + change : item.quantity;

    if (item.product.id !== cartItem.product.id) {
      items.push(item);
    } else {
      items.push({
        product: item.product,
        quantity,
        price: price * quantity
      });
    }
  }); // save

  modifyCart({
    items
  });
};
function addProductToLocalCart({
  product,
  variables
}) {
  // get
  let cartItems = [];

  try {
    cartItems = JSON.parse(localStorage.getItem("cartItems") || '{ "data": [] }').data;
  } catch {} // change


  let items = [];
  let exist = false;
  const price = product.price - product.sale;
  cartItems.map(cartItem => {
    if (cartItem.product.id !== product.id) {
      items.push(cartItem);
    } else {
      exist = true;
      items.push({
        product: cartItem.product,
        quantity: cartItem.quantity + 1,
        price: price * (cartItem.quantity + 1)
      });
    }
  });
  if (exist === false) items.push({
    product,
    quantity: 1,
    price
  }); // save

  modifyCart({
    items
  });
}
const emptyWishlist = function () {
  modifyWishlist({
    items: []
  });
};
const removeWishListItem = function (removeItem) {
  let products = [];

  try {
    // get
    products = JSON.parse(localStorage.getItem("wishlist") || '{ "data": [] }').data;
  } catch {} // change


  let items = [];
  products.map(product => {
    if (product.id !== removeItem.id) items.push(product);
  });
  modifyWishlist({
    items
  });
};
function addProductToLocalWishlist(newProduct) {
  // get
  let products = [];

  try {
    products = JSON.parse(localStorage.getItem("wishlist") || '{ "data": [] }').data;
  } catch {} // change


  let others = [];
  products.map(product => {
    if (product.id !== newProduct.id) {
      others.push(product);
    }
  });
  const items = [...others, newProduct]; // save

  modifyWishlist({
    items
  });
}

/***/ }),

/***/ "DHnX":
/***/ (function(module, exports) {

module.exports = require("@apollo/client/link/http");

/***/ }),

/***/ "DIgQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_SellerProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("htFV");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function Item({
  brand,
  style
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_src_SellerProvider__WEBPACK_IMPORTED_MODULE_2__[/* SellerContext */ "a"]);
  let query = router.query;
  const exist = query.brand == brand.url;

  const handleClick = () => {
    query.brand = brand.url;
    if (brand.url === "all") delete query.brand;
    router.push({
      query
    });
  };

  return __jsx("a", {
    style: _objectSpread(_objectSpread({}, style), {}, {
      color: theme.color,
      fontWeight: exist ? "bold" : null,
      cursor: "pointer"
    }),
    onClick: handleClick
  }, brand.name);
}

/***/ }),

/***/ "KwCx":
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),

/***/ "O/l+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_chip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("6x3k");
/* harmony import */ var _Category_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("QIHE");
/* harmony import */ var _Brand_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("WPJR");
/* harmony import */ var _Hashtag_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("CIJA");
/* harmony import */ var _Search_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("nntU");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("lJcc");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("2yjL");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_SellerProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("htFV");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // import { List as Attributes } from "../Attribute/list";








function Sidebar() {
  const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_src_SellerProvider__WEBPACK_IMPORTED_MODULE_9__[/* SellerContext */ "a"]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  let query = router.query;
  const price_from = query.price_from ? Number(query.price_from) : 0;
  const price_to = query.price_to ? Number(query.price_to) : 0; //

  const {
    0: priceFrom,
    1: setPriceFrom
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: priceTo,
    1: setPriceTo
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(99999999); //

  const onSubmit = e => {
    /**
     * Prevent submit from reloading the page
     */
    e.preventDefault();
    e.stopPropagation();
    query.price_from = priceFrom;
    query.price_to = priceTo;
    router.push({
      query
    });
  };

  const {
    0: collapsed,
    1: setCollapsed
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const top = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  return __jsx("section", null, __jsx("div", {
    style: theme.css.box
  }, __jsx("h5", {
    style: theme.css.h5
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosSearch"], {
    style: theme.css.iconHeader
  }), "T\xECm Ki\u1EBFm"), __jsx(_Search_index__WEBPACK_IMPORTED_MODULE_6__[/* Search */ "a"], {
    style: {
      width: "100%",
      marginBottom: theme.spacing(3)
    }
  })), __jsx("div", {
    style: theme.css.box
  }, __jsx(_Category_list__WEBPACK_IMPORTED_MODULE_3__[/* List */ "a"], null)), __jsx("form", {
    onSubmit: onSubmit,
    action: "",
    style: theme.css.box
  }, __jsx("h5", {
    style: theme.css.h5
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosPricetag"], {
    style: theme.css.iconHeader
  }), "Gi\xE1"), theme.prices.map((price, index) => {
    const choosed = Number(query.price_to) === price;
    return __jsx("div", {
      key: index,
      style: {
        fontSize: "0.8rem",
        borderRadius: theme.spacing(1),
        padding: theme.spacing(1),
        marginBottom: theme.spacing(3),
        textAlign: "center",
        // border: `1px solid ${theme.color}`,
        cursor: "pointer",
        fontWeight: choosed ? 700 : 300,
        color: choosed ? theme.primary : theme.color
      },
      onClick: () => {
        query.price_from = index > 0 ? theme.prices[index - 1] : 0;
        query.price_to = price;
        const event = {
          category: "Price",
          action: "filter",
          value: price
        };
        console.log(event);
        react_ga__WEBPACK_IMPORTED_MODULE_7___default.a.event(event);
        router.push({
          query
        });
      }
    }, index > 0 ? Object(_lib_chip__WEBPACK_IMPORTED_MODULE_2__[/* formatMoney */ "a"])(theme.prices[index - 1]) : 0, " - ", Object(_lib_chip__WEBPACK_IMPORTED_MODULE_2__[/* formatMoney */ "a"])(price));
  })), __jsx("div", {
    style: theme.css.box
  }, __jsx(_Brand_list__WEBPACK_IMPORTED_MODULE_4__[/* List */ "a"], null)), __jsx("div", {
    style: theme.css.box
  }, __jsx(_Hashtag_list__WEBPACK_IMPORTED_MODULE_5__[/* List */ "a"], null)));
}

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "QIHE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("z+8S");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("hlhG");
/* harmony import */ var _src_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("pRrB");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("2yjL");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_SellerProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("htFV");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const GET_CATEGORIES = _apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"]`
  query($seller: UserWhereInput, $category: String, $root: Boolean) {
    allCategories(
      where: {
        seller: $seller
        OR: [{ url: $category }, { parent_is_null: $root }]
      }
    ) {
      id
      name
      label
      url
      parent {
        url
      }
      childs {
        id
        name
        label
        url
      }
    }
  }
`;
function List() {
  var _data$allCategories$, _data$allCategories$2, _data$allCategories, _data$allCategories2;

  const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_src_SellerProvider__WEBPACK_IMPORTED_MODULE_6__[/* SellerContext */ "a"]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    category
  } = router.query;
  const {
    data,
    loading,
    error
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(GET_CATEGORIES, {
    variables: {
      seller: theme.seller,
      category,
      root: category ? false : true
    }
  });
  if (error || loading) return __jsx(_src_Loading__WEBPACK_IMPORTED_MODULE_3__[/* Loading */ "a"], null);
  return !loading && data ? __jsx("div", null, __jsx("h5", {
    style: theme.css.h5
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_5__["IoIosList"], {
    style: theme.css.iconHeader
  }), category ? data === null || data === void 0 ? void 0 : (_data$allCategories$ = data.allCategories[0]) === null || _data$allCategories$ === void 0 ? void 0 : _data$allCategories$.name : "Danh Mục"), category ? data === null || data === void 0 ? void 0 : (_data$allCategories$2 = data.allCategories[0]) === null || _data$allCategories$2 === void 0 ? void 0 : _data$allCategories$2.childs.map(cate => __jsx(_item__WEBPACK_IMPORTED_MODULE_2__[/* Item */ "a"], {
    key: cate.id,
    category: cate,
    style: {
      display: "block",
      marginBottom: theme.spacing(2)
    }
  })) : (_data$allCategories = data.allCategories) === null || _data$allCategories === void 0 ? void 0 : _data$allCategories.slice(0, open ? data.allCategories.length : 7).map(category => __jsx(_item__WEBPACK_IMPORTED_MODULE_2__[/* Item */ "a"], {
    key: category.id,
    category: category,
    style: {
      display: "block",
      marginBottom: theme.spacing(2)
    }
  })), (data === null || data === void 0 ? void 0 : (_data$allCategories2 = data.allCategories) === null || _data$allCategories2 === void 0 ? void 0 : _data$allCategories2.length) > 7 ? open ? __jsx("a", {
    onClick: () => setOpen(false),
    style: {
      color: theme.primary
    }
  }, "R\xFAt g\u1ECDn") : __jsx("a", {
    onClick: () => setOpen(true),
    style: {
      color: theme.primary
    }
  }, "Xem th\xEAm") : null, category ? __jsx("a", {
    style: {
      display: "block",
      marginBottom: theme.spacing(2),
      color: theme.primary
    },
    onClick: () => {
      var _data$allCategories$3;

      let query = router.query;
      if ((_data$allCategories$3 = data.allCategories[0]) === null || _data$allCategories$3 === void 0 ? void 0 : _data$allCategories$3.parent) query.category = data.allCategories[0].parent.url;else delete query.category;
      router.push({
        query
      });
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_5__["IoIosArrowRoundBack"], null), " Quay l\u1EA1i") : null) : null;
}

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Product_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("7z3o");
/* harmony import */ var _lib_chip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("6x3k");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("O/l+");
/* harmony import */ var _components_Product_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ucXV");
/* harmony import */ var _components_src_SellerProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("htFV");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const Index = () => {
  var _theme$file;

  const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_components_src_SellerProvider__WEBPACK_IMPORTED_MODULE_7__[/* SellerContext */ "a"]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  let query = router.query;
  const category = query.category;
  const categories = query.categories;
  const brand = query.brand;
  const search = query.search;
  const price_from = query.price_from ? Number(query.price_from) : 0;
  const price_to = query.price_to ? Number(query.price_to) : 999999999;
  const attributes = Object(_lib_chip__WEBPACK_IMPORTED_MODULE_3__[/* toAttributeGourpWhereInput */ "d"])(query.attributes ? query.attributes.split(",") : []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, (theme === null || theme === void 0 ? void 0 : theme.file) && __jsx("div", {
    style: {
      width: "100%",
      height: "60vh",
      background: `url(${theme.server + (theme === null || theme === void 0 ? void 0 : (_theme$file = theme.file) === null || _theme$file === void 0 ? void 0 : _theme$file.publicUrl)})`,
      backgroundPosition: "center",
      backgroundSize: "cover"
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    fluid: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    noGutters: true,
    style: {
      paddingTop: theme.spacing(4)
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 4,
    md: 3,
    lg: 3,
    xl: 2
  }, __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_5__[/* Sidebar */ "a"], {
    onSearch: search => {
      setSearch(search);
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 8,
    md: 9,
    lg: 9,
    xl: 10
  }, __jsx(_components_Product_filter__WEBPACK_IMPORTED_MODULE_6__[/* Filter */ "a"], {
    category: category,
    categories: categories,
    brand: brand,
    search: search,
    price_from: price_from,
    price_to: price_to,
    attributes: query.attributes ? query.attributes.split(",") : []
  }), category || categories || brand || search || price_from || price_to != 999999999 || attributes ? __jsx(_components_Product_list__WEBPACK_IMPORTED_MODULE_2__[/* List */ "a"], {
    sm: 6,
    lg: 4,
    xl: 3,
    category: category,
    categories: categories,
    brand: brand,
    search: search,
    price_from: price_from,
    price_to: price_to,
    attributes: attributes
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    style: theme.css.filter
  }, __jsx("h6", {
    style: {
      display: "inline-block",
      margin: 0,
      textTransform: "uppercase",
      color: theme.primary
    }
  }, "Khuy\u1EBFn M\xE3i")), __jsx(_components_Product_list__WEBPACK_IMPORTED_MODULE_2__[/* List */ "a"], {
    sm: 6,
    lg: 4,
    xl: 3,
    sale: true
  }), __jsx("div", {
    style: theme.css.filter
  }, __jsx("h6", {
    style: {
      display: "inline-block",
      margin: 0,
      textTransform: "uppercase",
      color: theme.primary
    }
  }, "B\xE1n Ch\u1EA1y")), __jsx(_components_Product_list__WEBPACK_IMPORTED_MODULE_2__[/* List */ "a"], {
    sm: 6,
    lg: 4,
    xl: 3,
    suggestions: "bestSeller"
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "VU9W":
/***/ (function(module, exports) {

module.exports = require("@apollo/client/link/context");

/***/ }),

/***/ "WPJR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("z+8S");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("DIgQ");
/* harmony import */ var _lib_chip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("6x3k");
/* harmony import */ var _src_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("pRrB");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("2yjL");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_SellerProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("htFV");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const GET_CATEGORIES = _apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"]`
  query($seller: UserWhereInput) {
    allBrands(where: { seller: $seller }) {
      id
      name
      url
    }
  }
`;
function List() {
  var _data$allBrands, _data$allBrands2, _data$allBrands3;

  const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_src_SellerProvider__WEBPACK_IMPORTED_MODULE_6__[/* SellerContext */ "a"]);
  const {
    data,
    loading,
    error
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(GET_CATEGORIES, {
    variables: {
      seller: theme.seller
    }
  });
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  if (loading) return __jsx(_src_Loading__WEBPACK_IMPORTED_MODULE_4__[/* Loading */ "a"], null);
  if (error) return __jsx("i", {
    color: "danger"
  }, Object(_lib_chip__WEBPACK_IMPORTED_MODULE_3__[/* getErrorMessage */ "b"])(error));
  return !loading && data ? __jsx("div", null, __jsx("h5", {
    style: theme.css.h5
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_5__["IoIosBookmark"], {
    style: theme.css.iconHeader
  }), " Th\u01B0\u01A1ng Hi\u1EC7u"), __jsx(_item__WEBPACK_IMPORTED_MODULE_2__[/* Item */ "a"], {
    brand: {
      id: "all-brand",
      name: "Tất Cả ",
      url: "all"
    }
  }), data === null || data === void 0 ? void 0 : (_data$allBrands = data.allBrands) === null || _data$allBrands === void 0 ? void 0 : _data$allBrands.slice(0, open ? data === null || data === void 0 ? void 0 : (_data$allBrands2 = data.allBrands) === null || _data$allBrands2 === void 0 ? void 0 : _data$allBrands2.lenght : 7).map(brand => __jsx(_item__WEBPACK_IMPORTED_MODULE_2__[/* Item */ "a"], {
    key: brand.id,
    brand: brand,
    style: {
      display: "block"
    }
  })), (data === null || data === void 0 ? void 0 : (_data$allBrands3 = data.allBrands) === null || _data$allBrands3 === void 0 ? void 0 : _data$allBrands3.length) > 7 ? open ? __jsx("a", {
    onClick: () => setOpen(false),
    style: {
      color: theme.primary
    }
  }, "R\xFAt g\u1ECDn") : __jsx("a", {
    onClick: () => setOpen(true),
    style: {
      color: theme.primary
    }
  }, "Xem th\xEAm") : null) : null;
}

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cE6r":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

var _router = __webpack_require__("nOHt");

var _router2 = __webpack_require__("elyg");
/**
* Detects whether a given url is from the same origin as the current page (browser only).
*/


function isLocal(url) {
  const locationOrigin = (0, _utils.getLocationOrigin)();
  const resolved = new URL(url, locationOrigin);
  return resolved.origin === locationOrigin;
}

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName,
    target
  } = e.currentTarget;

  if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
    // ignore click for new tab / new window behavior
    return;
  }

  if (!isLocal(href)) {
    // ignore click if it's outside our scope (e.g. https://google.com)
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router2.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router2.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router2.addBasePath)(as);
  } // Add the ending slash to the paths. So, we can serve the
  // "<page>/index.html" directly.


  if (false) {}

  return _react.default.cloneElement(child, childProps);
}

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _searchParamsToUrlQuery = __webpack_require__("cE6r");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _normalizeTrailingSlash = __webpack_require__("X24+");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addBasePath(path) {
  return basePath ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);
  const finalUrl = new URL(urlAsString, base);
  finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

  return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

function tryParseRelativeUrl(url) {
  try {
    return (0, _parseRelativeUrl.parseRelativeUrl)(url);
  } catch (err) {
    if (false) {}

    return null;
  }
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      const {
        url,
        as,
        options,
        __N
      } = e.state;

      if (!__N) {
        // this history state wasn't created by next.js so it can be ignored
        return;
      }

      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      if (false) {}

      this.change('replaceState', url, as, options);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly for the SSR page.


    if (false) {}

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = delBasePath(as);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as);
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return false;
    let {
      pathname,
      searchParams
    } = parsed;
    const query = (0, _searchParamsToUrlQuery.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options;

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(cleanedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      const {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo);

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), as, __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return;
    const {
      pathname
    } = parsed; // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;
const DUMMY_BASE = new URL('http://n');
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected.
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "hlhG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("z+8S");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("lJcc");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const GET_PARENT = _apollo_client__WEBPACK_IMPORTED_MODULE_2__["gql"]`
  query($url: String) {
    allCategories(where: { url: $url }) {
      parent {
        url
      }
      childs {
        url
      }
    }
  }
`;
function Item({
  category,
  style
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    data
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_PARENT, {
    variables: {
      url: category === null || category === void 0 ? void 0 : category.url
    }
  });
  let query = router.query;
  const childUrl = (category === null || category === void 0 ? void 0 : category.childs) ? category === null || category === void 0 ? void 0 : category.childs.map(category => category === null || category === void 0 ? void 0 : category.url).toString() : [];

  const handleClick = () => {
    // google analytics
    const event = {
      category: "Category",
      action: "view",
      value: category.name
    };
    console.log(event);
    react_ga__WEBPACK_IMPORTED_MODULE_3___default.a.event(event);

    if ((category === null || category === void 0 ? void 0 : category.url) === "back") {
      if (category === null || category === void 0 ? void 0 : category.parent) query.category = category === null || category === void 0 ? void 0 : category.parent.url;else {
        delete query.category;
      }
      delete query.categories;
      router.push({
        query
      });
    } else {
      query.category = category === null || category === void 0 ? void 0 : category.url;
      if (query === null || query === void 0 ? void 0 : query.categories) query.categories = childUrl;else delete query.categories;
      router.push({
        query
      });
    }
  };

  return category ? __jsx("a", {
    style: _objectSpread(_objectSpread({}, style), {}, {
      cursor: "pointer",
      display: "block"
    }),
    onClick: handleClick
  }, (category === null || category === void 0 ? void 0 : category.label) ? category === null || category === void 0 ? void 0 : category.label : category === null || category === void 0 ? void 0 : category.name) : null;
}

/***/ }),

/***/ "htFV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ SellerContext; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ SellerProvider; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__("z+8S");

// CONCATENATED MODULE: ./components/src/Query.js

const Query = ({
  query,
  variables,
  children
}) => {
  const {
    data,
    error,
    loading
  } = Object(client_["useQuery"])(query, {
    variables
  });
  return children({
    data,
    error,
    loading
  });
};
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__("lJcc");
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_);

// CONCATENATED MODULE: ./components/src/SellerProvider.js

var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const SellerContext = Object(external_react_["createContext"])();




const level = [0, 5, 8, 13, 21, 34, 55, 89];
const prices = [100000, 200000, 500000, 1000000, 2000000];

const spacing = i => level[i];

const uri = true ? "https://ecommerce.loaloa.tech" : undefined;
const SellerProvider = ({
  children,
  host
}) => {
  const {
    0: isLoad,
    1: setIsLoad
  } = Object(external_react_["useState"])(false);
  const {
    0: GA,
    1: setGA
  } = Object(external_react_["useState"])();
  Object(external_react_["useEffect"])(() => {
    if (GA && !isLoad) {
      console.log("init", GA);
      external_react_ga_default.a.initialize(GA);
      setIsLoad(true);
    }

    const url = window.location.pathname + window.location.search;
    console.log(url);
    external_react_ga_default.a.pageview(url);
  });
  return __jsx(Query, {
    query: client_["gql"]`
        query($host: String) {
          allUsers(where: { host: $host }) {
            id
            email
            file {
              publicUrl
            }
            logo {
              publicUrl
            }
            store
            slogan
            intro
            contact
            color
            primary
            backgroundColor
            productBackgroundColor
            pageId
            googleId
            phone
            email
            address
            prices
          }
        }
      `,
    variables: {
      host
    }
  }, ({
    data,
    error,
    loading
  }) => {
    var _theme$file, _theme$logo, _theme$prices;

    const theme = data === null || data === void 0 ? void 0 : data.allUsers[0];

    if (theme) {
      setGA(theme.googleId);
    }

    return theme ? __jsx(external_react_["Fragment"], null, __jsx(head_default.a, null, __jsx("title", null, theme.store, " | ", theme.slogan), __jsx("meta", {
      name: "description",
      content: theme.intro
    }), __jsx("meta", {
      property: "og:image",
      content: uri + (theme === null || theme === void 0 ? void 0 : (_theme$file = theme.file) === null || _theme$file === void 0 ? void 0 : _theme$file.publicUrl)
    }), __jsx("link", {
      rel: "icon",
      type: "image/png",
      href: uri + (theme === null || theme === void 0 ? void 0 : (_theme$logo = theme.logo) === null || _theme$logo === void 0 ? void 0 : _theme$logo.publicUrl)
    })), __jsx(SellerContext.Provider, {
      value: _objectSpread(_objectSpread({}, theme), {}, {
        server: true ? "https://ecommerce.loaloa.tech" : undefined,
        seller: {
          id: theme.id
        },
        spacing,
        prices: theme.prices ? (_theme$prices = theme.prices) === null || _theme$prices === void 0 ? void 0 : _theme$prices.replace(/ /g, "").split(",").map(e => Number(e)) : [],
        css: css(theme)
      })
    }, __jsx("div", {
      style: {
        backgroundColor: theme.backgroundColor,
        color: theme.color
      }
    }, children))) : null;
  });
};

const css = theme => ({
  btnIcon: (top = -5, color = theme.backgroundColor) => ({
    position: "absolute",
    top,
    right: -5,
    padding: 3,
    paddingTop: 5,
    width: 30,
    height: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    color,
    fontWeight: 800,
    backgroundColor: theme.primary
  }),
  input: {
    display: "block-inline",
    border: `1px solid ${theme === null || theme === void 0 ? void 0 : theme.productBackgroundColor}`,
    padding: spacing(1),
    paddingLeft: spacing(3),
    borderRadius: spacing(2),
    backgroundColor: theme === null || theme === void 0 ? void 0 : theme.backgroundColor,
    color: theme.color
  },
  btnInline: {
    display: "inline-block",
    backgroundColor: theme.primary,
    color: theme.backgroundColor,
    border: "none",
    borderRadius: 35,
    minWidth: 35
  },
  button: {
    color: theme.backgroundColor,
    width: "100%",
    backgroundColor: theme.primary,
    border: `1px solid ${theme.primary}`,
    borderRadius: spacing(4),
    paddingTop: spacing(1),
    paddingBottom: spacing(1),
    marginBottom: spacing(2)
  },
  btnOutline: {
    color: theme.primary,
    backgroundColor: theme.backgroundColor,
    border: `1px solid ${theme.primary}`,
    borderRadius: spacing(2),
    paddingTop: spacing(1),
    paddingBottom: spacing(1) + 1,
    marginBottom: spacing(2)
  },
  h5: {
    color: theme.primary,
    fontSize: "0.87rem",
    fontWeight: "bold",
    marginBottom: spacing(3)
  },
  h6: {
    color: theme.primary,
    fontSize: "0.8rem",
    textTransform: "uppercase",
    margin: 0,
    padding: 0
  },
  h1: {
    color: theme.primary
  },
  h2: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: theme.primary,
    marginBottom: spacing(2)
  },
  a: {
    display: "block"
  },
  box: {
    backgroundColor: theme.productBackgroundColor,
    marginBottom: spacing(4),
    padding: spacing(3),
    borderRadius: spacing(1),
    border: "1px solid rgba(0,0,0,0.05)",
    boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.03)"
  },
  filter: {
    color: theme.color,
    backgroundColor: theme.productBackgroundColor,
    borderRadius: spacing(1),
    border: "1px solid rgba(0,0,0,0.05)",
    padding: spacing(2),
    paddingLeft: spacing(3),
    paddingRight: spacing(3),
    display: "inline-block",
    boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.03)",
    marginBottom: spacing(3),
    marginLeft: spacing(3),
    fontSize: "0.9rem",
    position: "relative"
  },
  icon: {
    color: theme.color
  },
  iconHeader: {
    fontSize: "1rem",
    marginRight: spacing(2),
    marginBottom: spacing(1)
  },
  iconBorder: {
    borderRadius: 35,
    color: theme.primary,
    width: 35,
    height: 35,
    padding: 8,
    fontSize: "1rem"
  },
  removeIcon: {
    marginTop: 0,
    marginBottom: 0,
    marginRight: 0,
    marginLeft: spacing(2),
    padding: 3,
    color: theme.primary,
    position: "relative",
    top: 0,
    width: 25,
    height: 25
  }
});

/***/ }),

/***/ "j3R+":
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),

/***/ "jMFK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoreProducts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4FuJ");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2yjL");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_SellerProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("htFV");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const MoreProducts = () => {
  const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_src_SellerProvider__WEBPACK_IMPORTED_MODULE_3__[/* SellerContext */ "a"]);
  return __jsx(_src_Link__WEBPACK_IMPORTED_MODULE_1__[/* Link */ "a"], {
    style: {
      color: theme.primary,
      marginBottom: theme.spacing(4)
    },
    href: {
      pathname: "/products"
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosBasket"], {
    style: {
      marginBottom: 2,
      marginRight: theme.spacing(1)
    }
  }), "Xem S\u1EA3n Ph\u1EA9m");
};

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "lJcc":
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nntU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Search; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_SellerProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("htFV");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// search in nav




function Search({
  style
}) {
  const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_src_SellerProvider__WEBPACK_IMPORTED_MODULE_3__[/* SellerContext */ "a"]);
  const {
    0: searchInput,
    1: setSearchInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    inline: true,
    onSubmit: e => {
      /**
       * Prevent submit from reloading the page
       */
      e.preventDefault();
      e.stopPropagation();
      router.push({
        pathname: "/products",
        query: {
          search: searchInput
        }
      });
    },
    action: "",
    style: _objectSpread({}, style)
  }, __jsx("input", {
    placeholder: "T\xECm s\u1EA3n ph\u1EA9m...",
    name: "search",
    onChange: event => {
      setSearchInput(event.target.value);
    },
    style: _objectSpread(_objectSpread({}, theme.css.input), {}, {
      width: "100%"
    })
  }));
}

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "pRrB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Loading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KwCx");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Loading() {
  const props = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({
    opacity: 1,
    from: {
      opacity: 0
    }
  });
  return __jsx(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div, {
    style: props
  }, __jsx("div", {
    style: {
      backgroundColor: "rgba(0,0,0,0.05)",
      width: "100%",
      height: "100%",
      minHeight: 200
    }
  }));
}

/***/ }),

/***/ "rbTy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export orderCountVar */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return newOrderVar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return newOrderCountVar; });
/* unused harmony export customerVar */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return refetchCustomer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cache; });
/* unused harmony export initializeApollo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return useApollo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("z+8S");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("VU9W");
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client_link_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("DHnX");
/* harmony import */ var _apollo_client_link_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_http__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("CO9l");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const orderCountVar = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["makeVar"])(0);
const newOrderVar = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["makeVar"])(false);
const newOrderCountVar = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["makeVar"])();
const customerVar = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["makeVar"])({
  id: null
});
const refetchCustomer = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["makeVar"])(async () => {});
let cache = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"]();
const uri = (true ? "https://ecommerce.loaloa.tech" : undefined) + "/admin/api";
console.log(uri);
const httpLink = new _apollo_client_link_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"]({
  uri,
  credentials: "same-origin"
});
const authLink = Object(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2__["setContext"])((_, {
  headers
}) => {
  if (false) {}
});

function createApolloClient() {
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloClient"]({
    ssrMode: true,
    link: authLink.concat(httpLink),
    cache
  });
}

let apolloClient;
function initializeApollo(initialState = null) {
  var _apolloClient2;

  const _apolloClient = (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0 ? _apolloClient2 : createApolloClient();

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  if (true) return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}
function useApollo(initialState) {
  const store = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    Object(_action__WEBPACK_IMPORTED_MODULE_4__[/* init */ "j"])();
    return initializeApollo(initialState);
  }, [initialState]);
  return store;
}

/***/ }),

/***/ "seEB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FadeIn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KwCx");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function FadeIn({
  children
}) {
  const props = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({
    opacity: 1,
    from: {
      opacity: 0
    }
  });
  return __jsx(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div, {
    style: _objectSpread(_objectSpread({}, props), {}, {
      width: '100%',
      height: '100%'
    })
  }, children);
}

/***/ }),

/***/ "ucXV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Filter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("z+8S");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Category_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("hlhG");
/* harmony import */ var _Attribute_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("7QIf");
/* harmony import */ var _lib_chip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("6x3k");
/* harmony import */ var _Brand_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("DIgQ");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("2yjL");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_SellerProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("htFV");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const GET_CATE = _apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"]`
  query($category: String, $attributes: [String], $brand: String) {
    allCategories(where: { url: $category }) {
      id
      name
      url
    }
    allAttributes(where: { url_in: $attributes }) {
      id
      name
      url
    }
    allBrands(where: { url: $brand }) {
      id
      name
      url
    }
  }
`;
const Filter = ({
  category = "-",
  brand = "-",
  search,
  price_from,
  price_to,
  attributes
}) => {
  var _data$allAttributes;

  const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_src_SellerProvider__WEBPACK_IMPORTED_MODULE_8__[/* SellerContext */ "a"]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  const variables = {
    category,
    attributes,
    brand
  };
  const {
    data,
    error
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(GET_CATE, {
    variables
  });

  const removeSearch = () => {
    let query = router.query;
    delete query.search;
    router.push({
      query
    });
  };

  const removePrice = () => {
    let query = router.query;
    delete query.price_from;
    delete query.price_to;
    router.push({
      query
    });
  };

  return __jsx("section", {
    style: {
      paddingRight: 0
    }
  }, search ? __jsx("div", {
    style: theme.css.filter
  }, __jsx("h6", {
    style: _objectSpread(_objectSpread({}, theme.css.h6), {}, {
      display: "inline-block",
      marginRight: theme.spacing(2)
    })
  }, "T\xECm ki\u1EBFm:"), __jsx("a", {
    style: {
      color: theme.color
    }
  }, search), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_6__["IoIosRemoveCircleOutline"], {
    onClick: removeSearch,
    style: theme.css.removeIcon
  })) : null, price_to != 999999999 ? __jsx("div", {
    style: theme.css.filter
  }, __jsx("h6", {
    style: _objectSpread(_objectSpread({}, theme.css.h6), {}, {
      display: "inline-block",
      marginRight: theme.spacing(2)
    })
  }, "Gi\xE1:"), Object(_lib_chip__WEBPACK_IMPORTED_MODULE_4__[/* formatMoney */ "a"])(price_from), " - ", Object(_lib_chip__WEBPACK_IMPORTED_MODULE_4__[/* formatMoney */ "a"])(price_to), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_6__["IoIosRemoveCircleOutline"], {
    onClick: removePrice,
    style: theme.css.removeIcon
  })) : null, (data === null || data === void 0 ? void 0 : data.allCategories.length) ? __jsx("div", {
    style: theme.css.filter
  }, __jsx("h6", {
    style: _objectSpread(_objectSpread({}, theme.css.h6), {}, {
      display: "inline-block",
      marginRight: theme.spacing(2)
    })
  }, "Danh m\u1EE5c:"), __jsx(_Category_item__WEBPACK_IMPORTED_MODULE_2__[/* Item */ "a"], {
    category: data === null || data === void 0 ? void 0 : data.allCategories[0],
    style: {
      display: "inline-block",
      marginBottom: 0,
      padding: 0
    }
  })) : null, (data === null || data === void 0 ? void 0 : (_data$allAttributes = data.allAttributes) === null || _data$allAttributes === void 0 ? void 0 : _data$allAttributes.length) ? __jsx("div", {
    style: theme.css.filter
  }, __jsx("h6", {
    style: _objectSpread(_objectSpread({}, theme.css.h6), {}, {
      display: "inline-block",
      marginRight: theme.spacing(2)
    })
  }, "Thu\u1ED9c T\xEDnh:"), data === null || data === void 0 ? void 0 : data.allAttributes.map(attribute => __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_Attribute_item__WEBPACK_IMPORTED_MODULE_3__[/* Item */ "a"], {
    key: attribute.id,
    attribute: attribute,
    style: {
      display: "inline",
      marginRight: 8
    },
    removeIcon: true
  })))) : null, (data === null || data === void 0 ? void 0 : data.allBrands.length) ? __jsx("div", {
    style: theme.css.filter
  }, __jsx("h6", {
    style: _objectSpread(_objectSpread({}, theme.css.h6), {}, {
      display: "inline-block",
      marginRight: theme.spacing(2)
    })
  }, "Th\u01B0\u01A1ng Hi\u1EC7u:"), __jsx(_Brand_item__WEBPACK_IMPORTED_MODULE_5__[/* Item */ "a"], {
    brand: data === null || data === void 0 ? void 0 : data.allBrands[0],
    style: {
      display: "inline-block"
    }
  })) : null);
};

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "z+8S":
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ })

/******/ });