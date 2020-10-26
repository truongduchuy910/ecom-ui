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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./apollo/action.js":
/*!**************************!*\
  !*** ./apollo/action.js ***!
  \**************************/
/*! exports provided: USER, CART, WISHLIST, COMPARE, CUSTOMER, init, emptyCompare, removeCompareItem, addProductToLocalCompare, onSignIn, onSignOut, chooseCustomer, emptyCart, removeCartItem, changeCartItem, addProductToLocalCart, emptyWishlist, removeWishListItem, addProductToLocalWishlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER", function() { return USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CART", function() { return CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WISHLIST", function() { return WISHLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPARE", function() { return COMPARE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOMER", function() { return CUSTOMER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyCompare", function() { return emptyCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCompareItem", function() { return removeCompareItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProductToLocalCompare", function() { return addProductToLocalCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSignIn", function() { return onSignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSignOut", function() { return onSignOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseCustomer", function() { return chooseCustomer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyCart", function() { return emptyCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCartItem", function() { return removeCartItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeCartItem", function() { return changeCartItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProductToLocalCart", function() { return addProductToLocalCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyWishlist", function() { return emptyWishlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeWishListItem", function() { return removeWishListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProductToLocalWishlist", function() { return addProductToLocalWishlist; });
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client */ "./apollo/client.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
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
  _client__WEBPACK_IMPORTED_MODULE_0__["cache"].writeQuery({
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
  _client__WEBPACK_IMPORTED_MODULE_0__["cache"].writeQuery({
    query: CART,
    data: {
      cartItems: false ? undefined : null
    }
  });
  _client__WEBPACK_IMPORTED_MODULE_0__["cache"].writeQuery({
    query: COMPARE,
    data: {
      compare: false ? undefined : null
    }
  });
  _client__WEBPACK_IMPORTED_MODULE_0__["cache"].writeQuery({
    query: WISHLIST,
    data: {
      wishlist: false ? undefined : null
    }
  });
  _client__WEBPACK_IMPORTED_MODULE_0__["cache"].writeQuery({
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

/***/ "./apollo/client.js":
/*!**************************!*\
  !*** ./apollo/client.js ***!
  \**************************/
/*! exports provided: orderCountVar, newOrderVar, newOrderCountVar, customerVar, refetchCustomer, cache, initializeApollo, useApollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderCountVar", function() { return orderCountVar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newOrderVar", function() { return newOrderVar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newOrderCountVar", function() { return newOrderCountVar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerVar", function() { return customerVar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refetchCustomer", function() { return refetchCustomer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return cache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeApollo", function() { return initializeApollo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useApollo", function() { return useApollo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/link/context */ "@apollo/client/link/context");
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client_link_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client/link/http */ "@apollo/client/link/http");
/* harmony import */ var _apollo_client_link_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_http__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action */ "./apollo/action.js");
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
const uri = (false ? undefined : 'http://localhost:6007') + '/admin/api';
console.log(uri);
const httpLink = new _apollo_client_link_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"]({
  uri,
  credentials: 'same-origin'
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
    Object(_action__WEBPACK_IMPORTED_MODULE_4__["init"])();
    return initializeApollo(initialState);
  }, [initialState]);
  return store;
}

/***/ }),

/***/ "./components/Cart/icon.js":
/*!*********************************!*\
  !*** ./components/Cart/icon.js ***!
  \*********************************/
/*! exports provided: Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apollo/action */ "./apollo/action.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Link */ "./components/src/Link.js");
/* harmony import */ var _src_count__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/count */ "./components/src/count.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_SellerProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/SellerProvider */ "./components/src/SellerProvider.js");
var _jsxFileName = "D:\\Github\\ecom-ui\\components\\Cart\\icon.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function Icon({
  onClick,
  style
}) {
  var _data$cartItems;

  const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_src_SellerProvider__WEBPACK_IMPORTED_MODULE_7__["SellerContext"]);
  const {
    data,
    loading,
    error
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(_apollo_action__WEBPACK_IMPORTED_MODULE_2__["CART"]);
  if (loading || error || !data) return null;
  let count = 0;

  if (data === null || data === void 0 ? void 0 : (_data$cartItems = data.cartItems) === null || _data$cartItems === void 0 ? void 0 : _data$cartItems.length) {
    data.cartItems.map(cartItem => {
      count += cartItem.quantity;
    });
  }

  return __jsx(_src_Link__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    href: "/cart",
    onClick: onClick,
    style: {
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_6__["IoIosCart"], {
    style: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), count ? __jsx(_src_count__WEBPACK_IMPORTED_MODULE_5__["CountIcon"], {
    count: count,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 16
    }
  }) : null);
}

/***/ }),

/***/ "./components/MenuApp/index.js":
/*!*************************************!*\
  !*** ./components/MenuApp/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _User_DropdownUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../User/DropdownUser */ "./components/User/DropdownUser.js");
/* harmony import */ var _Cart_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Cart/icon */ "./components/Cart/icon.js");
/* harmony import */ var _Wishlist_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Wishlist/icon */ "./components/Wishlist/icon.js");
/* harmony import */ var _Order_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Order/icon */ "./components/Order/icon.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/logo */ "./components/src/logo.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_SellerProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/SellerProvider */ "./components/src/SellerProvider.js");
var _jsxFileName = "D:\\Github\\ecom-ui\\components\\MenuApp\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function MenuApp() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_src_SellerProvider__WEBPACK_IMPORTED_MODULE_9__["SellerContext"]);
  const {
    data
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_8__["useQuery"])(_apollo_client__WEBPACK_IMPORTED_MODULE_8__["gql"]`
      query {
        user @client
      }
    `, {});
  const isLogin = data === null || data === void 0 ? void 0 : data.user; // ANIMATION

  return __jsx("section", {
    style: {
      position: 'fixed',
      width: '100%',
      zIndex: 100,
      top: 0,
      backgroundColor: theme.productBackgroundColor,
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      border: '1px solid rgba(0,0,0,0.05)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    fluid: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      height: 40,
      width: '100%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(_src_logo__WEBPACK_IMPORTED_MODULE_6__["Logo"], {
    style: {
      float: 'left',
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
      height: '100%'
    },
    onClick: () => {
      router.push('/');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }), __jsx("h1", {
    style: {
      float: 'left',
      marginLeft: theme.spacing(3),
      fontSize: '0.9rem',
      width: '100%',
      padding: 0,
      margin: 0,
      color: theme.primary,
      cursor: 'pointer',
      wordWrap: 'initial',
      fontWeight: 'bold'
    },
    onClick: () => {
      router.push('/');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, theme.store), __jsx(_Wishlist_icon__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    style: _objectSpread(_objectSpread({}, theme.css.iconBorder), {}, {
      float: 'right'
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }), __jsx(_Cart_icon__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    style: _objectSpread(_objectSpread({}, theme.css.iconBorder), {}, {
      float: 'right'
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }), __jsx(_Order_icon__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    style: _objectSpread(_objectSpread({}, theme.css.iconBorder), {}, {
      float: 'right'
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }), __jsx(_User_DropdownUser__WEBPACK_IMPORTED_MODULE_1__["CategoriesDropdownMenu"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./components/Order/icon.js":
/*!**********************************!*\
  !*** ./components/Order/icon.js ***!
  \**********************************/
/*! exports provided: Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/Link */ "./components/src/Link.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../apollo/client */ "./apollo/client.js");
/* harmony import */ var _apollo_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../apollo/action */ "./apollo/action.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_count__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/count */ "./components/src/count.js");
var _jsxFileName = "D:\\Github\\ecom-ui\\components\\Order\\icon.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ORDER_COUNT = _apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"]`
  query {
    user @client
    _allOrdersMeta {
      count
    }
  }
`;
function Icon({
  onClick,
  style
}) {
  var _data, _data$user, _data2, _data2$_allOrdersMeta, _data3, _data3$_allOrdersMeta;

  let data;
  const {
    data: orderData,
    refetch,
    error
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(ORDER_COUNT);
  data = orderData;
  const newOrderCount = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["newOrderCountVar"])();

  if (newOrderCount) {
    try {
      refetch();
    } catch {}

    Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["newOrderCountVar"])(false);
  }

  return ((_data = data) === null || _data === void 0 ? void 0 : (_data$user = _data.user) === null || _data$user === void 0 ? void 0 : _data$user.id) && ((_data2 = data) === null || _data2 === void 0 ? void 0 : (_data2$_allOrdersMeta = _data2._allOrdersMeta) === null || _data2$_allOrdersMeta === void 0 ? void 0 : _data2$_allOrdersMeta.count) ? __jsx(_src_Link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: "/order",
    style: {
      position: "relative"
    },
    onClick: onClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__["FiPackage"], {
    style: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), __jsx(_src_count__WEBPACK_IMPORTED_MODULE_6__["CountIcon"], {
    count: (_data3 = data) === null || _data3 === void 0 ? void 0 : (_data3$_allOrdersMeta = _data3._allOrdersMeta) === null || _data3$_allOrdersMeta === void 0 ? void 0 : _data3$_allOrdersMeta.count,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  })) : null;
}

/***/ }),

/***/ "./components/User/DropdownUser.js":
/*!*****************************************!*\
  !*** ./components/User/DropdownUser.js ***!
  \*****************************************/
/*! exports provided: CategoriesDropdownMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesDropdownMenu", function() { return CategoriesDropdownMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Link */ "./components/src/Link.js");
/* harmony import */ var _apollo_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../apollo/action */ "./apollo/action.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_SellerProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/SellerProvider */ "./components/src/SellerProvider.js");
var _jsxFileName = "D:\\Github\\ecom-ui\\components\\User\\DropdownUser.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const GET_CATEGORIES = _apollo_client__WEBPACK_IMPORTED_MODULE_2__["gql"]`
  query($seller: UserWhereInput) {
    allCategories(where: { seller: $seller }) {
      id
      name
      url
    }
  }
`;
function CategoriesDropdownMenu({
  onClick
}) {
  var _data$user, _data$user2;

  const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_src_SellerProvider__WEBPACK_IMPORTED_MODULE_6__["SellerContext"]);
  const {
    data
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_apollo_action__WEBPACK_IMPORTED_MODULE_4__["USER"]);
  return false ? undefined : __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, "server");
}

/***/ }),

/***/ "./components/Wishlist/icon.js":
/*!*************************************!*\
  !*** ./components/Wishlist/icon.js ***!
  \*************************************/
/*! exports provided: Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apollo/action */ "./apollo/action.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_count__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/count */ "./components/src/count.js");
/* harmony import */ var _src_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/Link */ "./components/src/Link.js");
/* harmony import */ var _src_SellerProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/SellerProvider */ "./components/src/SellerProvider.js");
var _jsxFileName = "D:\\Github\\ecom-ui\\components\\Wishlist\\icon.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function Icon({
  onClick,
  style
}) {
  var _data$wishlist;

  const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_src_SellerProvider__WEBPACK_IMPORTED_MODULE_6__["SellerContext"]);
  const {
    data,
    loading,
    error
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(_apollo_action__WEBPACK_IMPORTED_MODULE_2__["WISHLIST"]);
  if (loading || error || !data) return null;
  const count = data === null || data === void 0 ? void 0 : (_data$wishlist = data.wishlist) === null || _data$wishlist === void 0 ? void 0 : _data$wishlist.length;
  return __jsx(_src_Link__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    href: "/wishlist",
    onClick: onClick,
    style: {
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoIosHeartEmpty"], {
    style: _objectSpread({}, style),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), " ", count ? __jsx(_src_count__WEBPACK_IMPORTED_MODULE_4__["CountIcon"], {
    count: count,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 16
    }
  }) : null);
}

/***/ }),

/***/ "./components/src/Footer.js":
/*!**********************************!*\
  !*** ./components/src/Footer.js ***!
  \**********************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SellerProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SellerProvider */ "./components/src/SellerProvider.js");
/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-facebook */ "react-facebook");
/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_facebook__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/go */ "react-icons/go");
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_go__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\Github\\ecom-ui\\components\\src\\Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Footer = () => {
  const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_SellerProvider__WEBPACK_IMPORTED_MODULE_2__["SellerContext"]);
  return __jsx("div", {
    style: {
      backgroundColor: theme.backgroundColor,
      width: "100%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(react_facebook__WEBPACK_IMPORTED_MODULE_3__["FacebookProvider"], {
    appId: "404979820059541",
    chatSupport: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    style: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5)
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    md: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("h2", {
    style: theme.css.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }, "Gi\u1EDBi Thi\u1EC7u"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }, theme.store, " ", theme.slogan), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, theme.intro)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    md: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("h2", {
    style: theme.css.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }, "Li\xEAn H\u1EC7"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__["AiOutlinePhone"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }), " ", theme.phone), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, __jsx(react_icons_go__WEBPACK_IMPORTED_MODULE_5__["GoLocation"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }), " ", theme.address), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__["AiOutlineClockCircle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }), " ", theme.contact)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    md: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("h2", {
    style: theme.css.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, "Facebook"), __jsx(react_facebook__WEBPACK_IMPORTED_MODULE_3__["Page"], {
    href: "https://www.facebook.com/" + theme.pageId,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }))), __jsx("center", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, __jsx("a", {
    style: {
      color: theme.color
    },
    href: "https://loaloa.tech",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, "cung c\u1EA5p b\u1EDFi Loa Loa Tech"))), __jsx(react_facebook__WEBPACK_IMPORTED_MODULE_3__["CustomChat"], {
    pageId: theme === null || theme === void 0 ? void 0 : theme.pageId,
    minimized: false // themeColor={theme.color}
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  })));
};

/***/ }),

/***/ "./components/src/Link.js":
/*!********************************!*\
  !*** ./components/src/Link.js ***!
  \********************************/
/*! exports provided: Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Github\\ecom-ui\\components\\src\\Link.js";

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
    onClick: onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, children);

  return href ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: href,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, link) : link;
};

/***/ }),

/***/ "./components/src/Query.js":
/*!*********************************!*\
  !*** ./components/src/Query.js ***!
  \*********************************/
/*! exports provided: Query */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return Query; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const Query = ({
  query,
  variables,
  children
}) => {
  const {
    data,
    error,
    loading
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"])(query, {
    variables
  });
  return children({
    data,
    error,
    loading
  });
};

/***/ }),

/***/ "./components/src/SellerProvider.js":
/*!******************************************!*\
  !*** ./components/src/SellerProvider.js ***!
  \******************************************/
/*! exports provided: SellerContext, SellerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerContext", function() { return SellerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerProvider", function() { return SellerProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Query */ "./components/src/Query.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-ga */ "react-ga");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\Github\\ecom-ui\\components\\src\\SellerProvider.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const SellerContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();




const level = [0, 5, 8, 13, 21, 34, 55, 89];
const prices = [100000, 200000, 500000, 1000000, 2000000];

const spacing = i => level[i];

const uri = false ? undefined : "http://localhost:6007";
const SellerProvider = ({
  children
}) => {
  const {
    0: isLoad,
    1: setIsLoad
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: GA,
    1: setGA
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (GA && !isLoad) {
      console.log("init", GA);
      react_ga__WEBPACK_IMPORTED_MODULE_4___default.a.initialize(GA);
      setIsLoad(true);
    }

    const url = window.location.pathname + window.location.search;
    console.log(url);
    react_ga__WEBPACK_IMPORTED_MODULE_4___default.a.pageview(url);
  });
  return __jsx(_Query__WEBPACK_IMPORTED_MODULE_2__["Query"], {
    query: _apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"]`
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
      host: false ? undefined : null
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
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

    return theme ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 11
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }
    }, __jsx("title", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 15
      }
    }, theme.store, " | ", theme.slogan), __jsx("meta", {
      name: "description",
      content: theme.intro,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 15
      }
    }), __jsx("meta", {
      property: "og:image",
      content: uri + (theme === null || theme === void 0 ? void 0 : (_theme$file = theme.file) === null || _theme$file === void 0 ? void 0 : _theme$file.publicUrl),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 15
      }
    }), __jsx("link", {
      rel: "icon",
      type: "image/png",
      href: uri + (theme === null || theme === void 0 ? void 0 : (_theme$logo = theme.logo) === null || _theme$logo === void 0 ? void 0 : _theme$logo.publicUrl),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 15
      }
    })), __jsx(SellerContext.Provider, {
      value: _objectSpread(_objectSpread({}, theme), {}, {
        server: false ? undefined : "http://localhost:6007",
        seller: {
          id: theme.id
        },
        spacing,
        prices: theme.prices ? (_theme$prices = theme.prices) === null || _theme$prices === void 0 ? void 0 : _theme$prices.replace(/ /g, "").split(",").map(e => Number(e)) : [],
        css: css(theme)
      }),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }
    }, __jsx("div", {
      style: {
        backgroundColor: theme.backgroundColor,
        color: theme.color
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 15
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
    borderRadius: spacing(2),
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

/***/ "./components/src/count.js":
/*!*********************************!*\
  !*** ./components/src/count.js ***!
  \*********************************/
/*! exports provided: CountIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountIcon", function() { return CountIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SellerProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SellerProvider */ "./components/src/SellerProvider.js");
var _jsxFileName = "D:\\Github\\ecom-ui\\components\\src\\count.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function CountIcon({
  count
}) {
  const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_SellerProvider__WEBPACK_IMPORTED_MODULE_1__["SellerContext"]);
  return __jsx("span", {
    style: {
      position: "absolute",
      fontSize: 12,
      fontWeight: 500,
      float: "right",
      right: 0,
      display: "inline",
      color: theme.primary
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, count);
}

/***/ }),

/***/ "./components/src/logo.js":
/*!********************************!*\
  !*** ./components/src/logo.js ***!
  \********************************/
/*! exports provided: Logo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SellerProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SellerProvider */ "./components/src/SellerProvider.js");
var _jsxFileName = "D:\\Github\\ecom-ui\\components\\src\\logo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function Logo({
  onClick,
  style
}) {
  var _theme$logo, _theme$logo2;

  const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_SellerProvider__WEBPACK_IMPORTED_MODULE_1__["SellerContext"]);
  return (theme === null || theme === void 0 ? void 0 : (_theme$logo = theme.logo) === null || _theme$logo === void 0 ? void 0 : _theme$logo.publicUrl) ? __jsx("img", {
    src: (theme === null || theme === void 0 ? void 0 : theme.server) + (theme === null || theme === void 0 ? void 0 : (_theme$logo2 = theme.logo) === null || _theme$logo2 === void 0 ? void 0 : _theme$logo2.publicUrl),
    style: _objectSpread(_objectSpread({}, style), {}, {
      padding: 0
    }),
    onClick: onClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }) : null;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

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

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
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

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");
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
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
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
  if (true) {
    // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

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

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

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

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _searchParamsToUrlQuery = __webpack_require__(/*! ./utils/search-params-to-url-query */ "./node_modules/next/dist/next-server/lib/router/utils/search-params-to-url-query.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

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
    if (true) {
      throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
    }

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

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

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
          if (true) {
            console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

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

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

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
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

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

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

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

    if (true) {
      return;
    }

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

    if (false) {}

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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var _querystring = __webpack_require__(/*! querystring */ "querystring"); // Format function modified from nodejs
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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/search-params-to-url-query.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/search-params-to-url-query.js ***!
  \*******************************************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
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

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
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
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


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

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MenuApp_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MenuApp/index */ "./components/MenuApp/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apollo/client */ "./apollo/client.js");
/* harmony import */ var _components_src_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/src/Footer */ "./components/src/Footer.js");
/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-facebook */ "react-facebook");
/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_facebook__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_src_SellerProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/src/SellerProvider */ "./components/src/SellerProvider.js");
var _jsxFileName = "D:\\Github\\ecom-ui\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


 // import "../public/yensaodatquang/assets/css/style.css";








function App(props) {
  const {
    Component,
    pageProps
  } = props;
  const apolloClient = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["useApollo"])(pageProps.initialApolloState);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloProvider"], {
    client: apolloClient,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(_components_src_SellerProvider__WEBPACK_IMPORTED_MODULE_7__["SellerProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx(_components_MenuApp_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  })), __jsx("main", {
    style: {
      paddingTop: 68,
      minHeight: '60vh'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }))), __jsx(_components_src_Footer__WEBPACK_IMPORTED_MODULE_5__["Footer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ }),

/***/ "@apollo/client/link/context":
/*!**********************************************!*\
  !*** external "@apollo/client/link/context" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client/link/context");

/***/ }),

/***/ "@apollo/client/link/http":
/*!*******************************************!*\
  !*** external "@apollo/client/link/http" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client/link/http");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-facebook":
/*!*********************************!*\
  !*** external "react-facebook" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-facebook");

/***/ }),

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "react-icons/ai":
/*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ai");

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ }),

/***/ "react-icons/go":
/*!*********************************!*\
  !*** external "react-icons/go" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/go");

/***/ }),

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-spring":
/*!*******************************!*\
  !*** external "react-spring" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9hcG9sbG8vYWN0aW9uLmpzIiwid2VicGFjazovLy8uL2Fwb2xsby9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJ0L2ljb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NZW51QXBwL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvT3JkZXIvaWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VzZXIvRHJvcGRvd25Vc2VyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvV2lzaGxpc3QvaWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcmMvTGluay5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9RdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9TZWxsZXJQcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9jb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9sb2dvLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3NlYXJjaC1wYXJhbXMtdG8tdXJsLXF1ZXJ5LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnQvbGluay9jb250ZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnQvbGluay9odHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInF1ZXJ5c3RyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1mYWNlYm9va1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvYWlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9maVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2dvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvaW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9tZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3ByaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RzdHJhcFwiIl0sIm5hbWVzIjpbIlVTRVIiLCJncWwiLCJDQVJUIiwiV0lTSExJU1QiLCJDT01QQVJFIiwiQ1VTVE9NRVIiLCJpbml0IiwiY2FjaGUiLCJ3cml0ZVF1ZXJ5IiwicXVlcnkiLCJkYXRhIiwidXNlciIsIkpTT04iLCJpZCIsImVtYWlsIiwiaXNBZG1pbiIsImlzU2VsbGVyIiwiY2FydEl0ZW1zIiwiY29tcGFyZSIsIndpc2hsaXN0IiwiY3VzdG9tZXIiLCJwaG9uZSIsIm5hbWUiLCJhZGRyZXNzIiwibW9kaWZ5VXNlciIsIm1vZGlmeUNhcnQiLCJpdGVtcyIsIm1vZGlmeVdpc2hsaXN0IiwibW9kaWZ5Q29tcGFyZSIsIm1vZGlmeUN1c3RvbWVyIiwiZW1wdHlDb21wYXJlIiwicmVtb3ZlQ29tcGFyZUl0ZW0iLCJyZW1vdmVJdGVtIiwicHJvZHVjdHMiLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJtYXAiLCJwcm9kdWN0IiwicHVzaCIsImFkZFByb2R1Y3RUb0xvY2FsQ29tcGFyZSIsIm5ld1Byb2R1Y3QiLCJvdGhlcnMiLCJvblNpZ25JbiIsIm9uU2lnbk91dCIsImNob29zZUN1c3RvbWVyIiwiZW1wdHlDYXJ0IiwicmVtb3ZlQ2FydEl0ZW0iLCJpdGVtIiwiY2hhbmdlQ2FydEl0ZW0iLCJjYXJ0SXRlbSIsImNoYW5nZSIsInByaWNlIiwic2FsZSIsImluZGV4IiwicXVhbnRpdHkiLCJhZGRQcm9kdWN0VG9Mb2NhbENhcnQiLCJ2YXJpYWJsZXMiLCJleGlzdCIsImVtcHR5V2lzaGxpc3QiLCJyZW1vdmVXaXNoTGlzdEl0ZW0iLCJhZGRQcm9kdWN0VG9Mb2NhbFdpc2hsaXN0Iiwib3JkZXJDb3VudFZhciIsIm1ha2VWYXIiLCJuZXdPcmRlclZhciIsIm5ld09yZGVyQ291bnRWYXIiLCJjdXN0b21lclZhciIsInJlZmV0Y2hDdXN0b21lciIsIkluTWVtb3J5Q2FjaGUiLCJ1cmkiLCJjb25zb2xlIiwibG9nIiwiaHR0cExpbmsiLCJIdHRwTGluayIsImNyZWRlbnRpYWxzIiwiYXV0aExpbmsiLCJzZXRDb250ZXh0IiwiXyIsImhlYWRlcnMiLCJjcmVhdGVBcG9sbG9DbGllbnQiLCJBcG9sbG9DbGllbnQiLCJzc3JNb2RlIiwibGluayIsImNvbmNhdCIsImFwb2xsb0NsaWVudCIsImluaXRpYWxpemVBcG9sbG8iLCJpbml0aWFsU3RhdGUiLCJfYXBvbGxvQ2xpZW50IiwicmVzdG9yZSIsInVzZUFwb2xsbyIsInN0b3JlIiwidXNlTWVtbyIsIkljb24iLCJvbkNsaWNrIiwic3R5bGUiLCJ0aGVtZSIsInVzZUNvbnRleHQiLCJTZWxsZXJDb250ZXh0IiwibG9hZGluZyIsImVycm9yIiwidXNlUXVlcnkiLCJjb3VudCIsImxlbmd0aCIsInBvc2l0aW9uIiwiTWVudUFwcCIsInJvdXRlciIsInVzZVJvdXRlciIsImlzTG9naW4iLCJ3aWR0aCIsInpJbmRleCIsInRvcCIsImJhY2tncm91bmRDb2xvciIsInByb2R1Y3RCYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nVG9wIiwic3BhY2luZyIsInBhZGRpbmdCb3R0b20iLCJib3JkZXIiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImhlaWdodCIsImZsb2F0IiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiZm9udFNpemUiLCJwYWRkaW5nIiwibWFyZ2luIiwiY29sb3IiLCJwcmltYXJ5IiwiY3Vyc29yIiwid29yZFdyYXAiLCJmb250V2VpZ2h0IiwiY3NzIiwiaWNvbkJvcmRlciIsIk9SREVSX0NPVU5UIiwib3JkZXJEYXRhIiwicmVmZXRjaCIsIm5ld09yZGVyQ291bnQiLCJfYWxsT3JkZXJzTWV0YSIsIkdFVF9DQVRFR09SSUVTIiwiQ2F0ZWdvcmllc0Ryb3Bkb3duTWVudSIsIkZvb3RlciIsImgyIiwic2xvZ2FuIiwiaW50cm8iLCJjb250YWN0IiwicGFnZUlkIiwiTGluayIsImNoaWxkcmVuIiwiaHJlZiIsIlF1ZXJ5IiwiY3JlYXRlQ29udGV4dCIsImxldmVsIiwicHJpY2VzIiwiaSIsIlNlbGxlclByb3ZpZGVyIiwiaXNMb2FkIiwic2V0SXNMb2FkIiwidXNlU3RhdGUiLCJHQSIsInNldEdBIiwidXNlRWZmZWN0IiwiUmVhY3RHQSIsImluaXRpYWxpemUiLCJ1cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic2VhcmNoIiwicGFnZXZpZXciLCJob3N0IiwiYWxsVXNlcnMiLCJnb29nbGVJZCIsImZpbGUiLCJwdWJsaWNVcmwiLCJsb2dvIiwic2VydmVyIiwic2VsbGVyIiwicmVwbGFjZSIsInNwbGl0IiwiZSIsIk51bWJlciIsImJ0bkljb24iLCJyaWdodCIsImp1c3RpZnlDb250ZW50IiwiYm9yZGVyUmFkaXVzIiwiaW5wdXQiLCJwYWRkaW5nTGVmdCIsImJ0bklubGluZSIsIm1pbldpZHRoIiwiYnV0dG9uIiwibWFyZ2luQm90dG9tIiwiYnRuT3V0bGluZSIsImg1IiwiaDYiLCJ0ZXh0VHJhbnNmb3JtIiwiaDEiLCJhIiwiYm94IiwiYm94U2hhZG93IiwiZmlsdGVyIiwicGFkZGluZ1JpZ2h0IiwiaWNvbiIsImljb25IZWFkZXIiLCJyZW1vdmVJY29uIiwibWFyZ2luVG9wIiwiQ291bnRJY29uIiwiTG9nbyIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJlcnIiLCJub2RlTmFtZSIsInRhcmdldCIsImlzTG9jYWwiLCJzY3JvbGwiLCJhcyIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImhhc1dhcm5lZCIsIlJlYWN0IiwicHJvcHMiLCJwIiwicmVzb2x2ZWRIcmVmIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJwcmVmZXRjaCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJwcm9jZXNzIiwid2FybiIsIlByb3BUeXBlcyIsInJlcXVpcmUiLCJleGFjdCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInZhbHVlIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnQiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwicm91dGUiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJfX05FWFRfREFUQV9fIiwidXBkYXRlIiwibW9kIiwibmV3RGF0YSIsInJlbG9hZCIsImJhY2siLCJvcHRpb25zIiwicHJlcGFyZVVybEFzIiwiU1QiLCJwZXJmb3JtYW5jZSIsImNsZWFuZWRBcyIsImRlbEJhc2VQYXRoIiwicGFyc2VkIiwidHJ5UGFyc2VSZWxhdGl2ZVVybCIsIm1ldGhvZCIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwibWlzc2luZ1BhcmFtcyIsInBhcmFtIiwiYXNQYXRobmFtZSIsInJvdXRlSW5mbyIsImFwcENvbXAiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiY2FjaGVkUm91dGVJbmZvIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIlByb21pc2UiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiYXV0aCIsImVuY29kZVVSSUNvbXBvbmVudCIsImhvc3RuYW1lIiwiVEVTVF9ST1VURSIsIkRVTU1ZX0JBU0UiLCJyZXNvbHZlZEJhc2UiLCJvcmlnaW4iLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcmFtcyIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJvcHRpb25hbCIsInJlcGVhdCIsImtleSIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInNlZ21lbnQiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiU3RyaW5nIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsImlzTmFOIiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4Iiwic2VhcmNoUGFyYW1zIiwiQXJyYXkiLCJ1c2VkIiwicmVzdWx0IiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiaW5pdGlhbEFwb2xsb1N0YXRlIiwibWluSGVpZ2h0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sTUFBTUEsSUFBSSxHQUFHQyxrREFBSTs7OztD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Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IHsgY2FjaGUgfSBmcm9tIFwiLi9jbGllbnRcIjtcclxuaW1wb3J0IHsgbWFrZVZhciwgZ3FsIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3QgVVNFUiA9IGdxbGBcclxuICBxdWVyeSB7XHJcbiAgICB1c2VyIEBjbGllbnRcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBDQVJUID0gZ3FsYFxyXG4gIHF1ZXJ5IHtcclxuICAgIGNhcnRJdGVtcyBAY2xpZW50XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgV0lTSExJU1QgPSBncWxgXHJcbiAgcXVlcnkge1xyXG4gICAgd2lzaGxpc3QgQGNsaWVudFxyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IENPTVBBUkUgPSBncWxgXHJcbiAgcXVlcnkge1xyXG4gICAgY29tcGFyZSBAY2xpZW50XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgQ1VTVE9NRVIgPSBncWxgXHJcbiAgcXVlcnkge1xyXG4gICAgY3VzdG9tZXIgQGNsaWVudFxyXG4gIH1cclxuYDtcclxuLy8gaW5pdGlhbGl6ZVxyXG5leHBvcnQgY29uc3QgaW5pdCA9ICgpID0+IHtcclxuIFxyXG4gIGNhY2hlLndyaXRlUXVlcnkoe1xyXG4gICAgcXVlcnk6IFVTRVIsXHJcblxyXG4gICAgZGF0YToge1xyXG4gICAgICB1c2VyOlxyXG4gICAgICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCJcclxuICAgICAgICAgID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpXHJcbiAgICAgICAgICA6IHsgaWQ6IG51bGwsIGVtYWlsOiBudWxsLCBpc0FkbWluOiBudWxsLCBpc1NlbGxlcjogbnVsbCB9LFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY2FjaGUud3JpdGVRdWVyeSh7XHJcbiAgICBxdWVyeTogQ0FSVCxcclxuICAgIGRhdGE6IHtcclxuICAgICAgY2FydEl0ZW1zOlxyXG4gICAgICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCJcclxuICAgICAgICAgID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRJdGVtc1wiKSB8fCAneyBcImRhdGFcIjogW10gfScpXHJcbiAgICAgICAgICAgICAgLmRhdGFcclxuICAgICAgICAgIDogbnVsbCxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgY2FjaGUud3JpdGVRdWVyeSh7XHJcbiAgICBxdWVyeTogQ09NUEFSRSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgY29tcGFyZTpcclxuICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiXHJcbiAgICAgICAgICA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb21wYXJlXCIpIHx8ICd7IFwiZGF0YVwiOiBbXSB9JykuZGF0YVxyXG4gICAgICAgICAgOiBudWxsLFxyXG4gICAgfSxcclxuICB9KTtcclxuICBjYWNoZS53cml0ZVF1ZXJ5KHtcclxuICAgIHF1ZXJ5OiBXSVNITElTVCxcclxuICAgIGRhdGE6IHtcclxuICAgICAgd2lzaGxpc3Q6XHJcbiAgICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICAgICAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2lzaGxpc3RcIikgfHwgJ3sgXCJkYXRhXCI6IFtdIH0nKVxyXG4gICAgICAgICAgICAgIC5kYXRhXHJcbiAgICAgICAgICA6IG51bGwsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNhY2hlLndyaXRlUXVlcnkoe1xyXG4gICAgcXVlcnk6IENVU1RPTUVSLFxyXG5cclxuICAgIGRhdGE6IHtcclxuICAgICAgY3VzdG9tZXI6IHsgcGhvbmU6IG51bGwsIG5hbWU6IG51bGwsIGFkZHJlc3M6IG51bGwgfSxcclxuICAgIH0sXHJcbiAgfSk7XHJcbn07XHJcbmNvbnN0IG1vZGlmeVVzZXIgPSAoeyB1c2VyIH0pID0+IHtcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclwiKTtcclxuICAgIH1cclxuICAgIGNhY2hlLm1vZGlmeSh7XHJcbiAgICAgIGZpZWxkczoge1xyXG4gICAgICAgIHVzZXIoKSB7XHJcbiAgICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5jb25zdCBtb2RpZnlDYXJ0ID0gKHsgaXRlbXMgfSkgPT4ge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRJdGVtc1wiLCBKU09OLnN0cmluZ2lmeSh7IGRhdGE6IGl0ZW1zIH0pKTtcclxuICAgIGNhY2hlLm1vZGlmeSh7XHJcbiAgICAgIGZpZWxkczoge1xyXG4gICAgICAgIGNhcnRJdGVtcygpIHtcclxuICAgICAgICAgIHJldHVybiBpdGVtcztcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5jb25zdCBtb2RpZnlXaXNobGlzdCA9ICh7IGl0ZW1zIH0pID0+IHtcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aXNobGlzdFwiLCBKU09OLnN0cmluZ2lmeSh7IGRhdGE6IGl0ZW1zIH0pKTtcclxuICAgIGNhY2hlLm1vZGlmeSh7XHJcbiAgICAgIGZpZWxkczoge1xyXG4gICAgICAgIHdpc2hsaXN0KCkge1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcbmNvbnN0IG1vZGlmeUNvbXBhcmUgPSAoeyBpdGVtcyB9KSA9PiB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29tcGFyZVwiLCBKU09OLnN0cmluZ2lmeSh7IGRhdGE6IGl0ZW1zIH0pKTtcclxuICAgIGNhY2hlLm1vZGlmeSh7XHJcbiAgICAgIGZpZWxkczoge1xyXG4gICAgICAgIGNvbXBhcmUoKSB7XHJcbiAgICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IG1vZGlmeUN1c3RvbWVyID0gKHsgY3VzdG9tZXIgfSkgPT4ge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBpZiAoY3VzdG9tZXIpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjdXN0b21lclwiLCBKU09OLnN0cmluZ2lmeShjdXN0b21lcikpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJjdXN0b21lclwiKTtcclxuICAgIH1cclxuICAgIGNhY2hlLm1vZGlmeSh7XHJcbiAgICAgIGZpZWxkczoge1xyXG4gICAgICAgIGN1c3RvbWVyKCkge1xyXG4gICAgICAgICAgcmV0dXJuIGN1c3RvbWVyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG4vKiBcclxuICAgIHlvdSBjYW4gdXNlIGNsaWVudCB2YXJpYWJsZSBiZWxvd1xyXG4qL1xyXG5leHBvcnQgY29uc3QgZW1wdHlDb21wYXJlID0gKCkgPT4ge1xyXG4gIG1vZGlmeUNvbXBhcmUoeyBpdGVtczogW10gfSk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCByZW1vdmVDb21wYXJlSXRlbSA9IGZ1bmN0aW9uIChyZW1vdmVJdGVtKSB7XHJcbiAgbGV0IHByb2R1Y3RzID0gW107XHJcbiAgdHJ5IHtcclxuICAgIC8vIGdldFxyXG4gICAgcHJvZHVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29tcGFyZVwiKSB8fCAneyBcImRhdGFcIjogW10gfScpXHJcbiAgICAgIC5kYXRhO1xyXG4gIH0gY2F0Y2gge31cclxuXHJcbiAgLy8gY2hhbmdlXHJcbiAgbGV0IGl0ZW1zID0gW107XHJcbiAgcHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiB7XHJcbiAgICBpZiAocHJvZHVjdC5pZCAhPT0gcmVtb3ZlSXRlbS5pZCkgaXRlbXMucHVzaChwcm9kdWN0KTtcclxuICB9KTtcclxuICBtb2RpZnlDb21wYXJlKHsgaXRlbXMgfSk7XHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9kdWN0VG9Mb2NhbENvbXBhcmUobmV3UHJvZHVjdCkge1xyXG4gIC8vIGdldFxyXG5cclxuICBsZXQgcHJvZHVjdHMgPSBbXTtcclxuICB0cnkge1xyXG4gICAgcHJvZHVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29tcGFyZVwiKSB8fCAneyBcImRhdGFcIjogW10gfScpXHJcbiAgICAgIC5kYXRhO1xyXG4gIH0gY2F0Y2gge31cclxuXHJcbiAgLy8gY2hhbmdlXHJcbiAgbGV0IG90aGVycyA9IFtdO1xyXG4gIHByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4ge1xyXG4gICAgaWYgKHByb2R1Y3QuaWQgIT09IG5ld1Byb2R1Y3QuaWQpIHtcclxuICAgICAgb3RoZXJzLnB1c2gocHJvZHVjdCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgY29uc3QgaXRlbXMgPSBbLi4ub3RoZXJzLCBuZXdQcm9kdWN0XTtcclxuXHJcbiAgLy8gc2F2ZVxyXG4gIG1vZGlmeUNvbXBhcmUoeyBpdGVtcyB9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG9uU2lnbkluID0gKHsgdXNlciB9KSA9PiB7XHJcbiAgbW9kaWZ5VXNlcih7IHVzZXIgfSk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBvblNpZ25PdXQgPSAoKSA9PiB7XHJcbiAgbW9kaWZ5VXNlcih7IHVzZXI6IG51bGwgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2hvb3NlQ3VzdG9tZXIgPSAoeyBjdXN0b21lciB9KSA9PiB7XHJcbiAgbW9kaWZ5Q3VzdG9tZXIoeyBjdXN0b21lciB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBlbXB0eUNhcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgbW9kaWZ5Q2FydCh7IGl0ZW1zOiBbXSB9KTtcclxufTtcclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNhcnRJdGVtID0gKHJlbW92ZUl0ZW0pID0+IHtcclxuICAvLyBnZXRcclxuICBjb25zdCBjYXJ0SXRlbXMgPSBKU09OLnBhcnNlKFxyXG4gICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0SXRlbXNcIikgfHwgJ3sgXCJkYXRhXCI6IFtdIH0nXHJcbiAgKS5kYXRhO1xyXG4gIC8vIGNoYW5nZVxyXG4gIGxldCBpdGVtcyA9IFtdO1xyXG4gIGNhcnRJdGVtcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgIGlmIChpdGVtLnByb2R1Y3QuaWQgIT09IHJlbW92ZUl0ZW0ucHJvZHVjdC5pZCkgaXRlbXMucHVzaChpdGVtKTtcclxuICB9KTtcclxuICBtb2RpZnlDYXJ0KHsgaXRlbXMgfSk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBjaGFuZ2VDYXJ0SXRlbSA9IGZ1bmN0aW9uIChjYXJ0SXRlbSwgY2hhbmdlKSB7XHJcbiAgLy8gZ2V0XHJcbiAgbGV0IGNhcnRJdGVtcyA9IFtdO1xyXG4gIHRyeSB7XHJcbiAgICBjYXJ0SXRlbXMgPSBKU09OLnBhcnNlKFxyXG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRJdGVtc1wiKSB8fCAneyBcImRhdGFcIjogW10gfSdcclxuICAgICkuZGF0YTtcclxuICB9IGNhdGNoIHt9XHJcblxyXG4gIC8vIGNoYW5nZVxyXG4gIGxldCBpdGVtcyA9IFtdO1xyXG4gIGNvbnN0IHByaWNlID0gY2FydEl0ZW0ucHJvZHVjdC5wcmljZSAtIGNhcnRJdGVtLnByb2R1Y3Quc2FsZTtcclxuXHJcbiAgY2FydEl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IHF1YW50aXR5ID1cclxuICAgICAgaXRlbS5xdWFudGl0eSArIGNoYW5nZSA+IDAgPyBpdGVtLnF1YW50aXR5ICsgY2hhbmdlIDogaXRlbS5xdWFudGl0eTtcclxuICAgIGlmIChpdGVtLnByb2R1Y3QuaWQgIT09IGNhcnRJdGVtLnByb2R1Y3QuaWQpIHtcclxuICAgICAgaXRlbXMucHVzaChpdGVtKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGl0ZW1zLnB1c2goe1xyXG4gICAgICAgIHByb2R1Y3Q6IGl0ZW0ucHJvZHVjdCxcclxuICAgICAgICBxdWFudGl0eSxcclxuICAgICAgICBwcmljZTogcHJpY2UgKiBxdWFudGl0eSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgLy8gc2F2ZVxyXG4gIG1vZGlmeUNhcnQoeyBpdGVtcyB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9kdWN0VG9Mb2NhbENhcnQoeyBwcm9kdWN0LCB2YXJpYWJsZXMgfSkge1xyXG4gIC8vIGdldFxyXG5cclxuICBsZXQgY2FydEl0ZW1zID0gW107XHJcbiAgdHJ5IHtcclxuICAgIGNhcnRJdGVtcyA9IEpTT04ucGFyc2UoXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydEl0ZW1zXCIpIHx8ICd7IFwiZGF0YVwiOiBbXSB9J1xyXG4gICAgKS5kYXRhO1xyXG4gIH0gY2F0Y2gge31cclxuXHJcbiAgLy8gY2hhbmdlXHJcbiAgbGV0IGl0ZW1zID0gW107XHJcbiAgbGV0IGV4aXN0ID0gZmFsc2U7XHJcbiAgY29uc3QgcHJpY2UgPSBwcm9kdWN0LnByaWNlIC0gcHJvZHVjdC5zYWxlO1xyXG5cclxuICBjYXJ0SXRlbXMubWFwKChjYXJ0SXRlbSkgPT4ge1xyXG4gICAgaWYgKGNhcnRJdGVtLnByb2R1Y3QuaWQgIT09IHByb2R1Y3QuaWQpIHtcclxuICAgICAgaXRlbXMucHVzaChjYXJ0SXRlbSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBleGlzdCA9IHRydWU7XHJcbiAgICAgIGl0ZW1zLnB1c2goe1xyXG4gICAgICAgIHByb2R1Y3Q6IGNhcnRJdGVtLnByb2R1Y3QsXHJcbiAgICAgICAgcXVhbnRpdHk6IGNhcnRJdGVtLnF1YW50aXR5ICsgMSxcclxuICAgICAgICBwcmljZTogcHJpY2UgKiAoY2FydEl0ZW0ucXVhbnRpdHkgKyAxKSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgaWYgKGV4aXN0ID09PSBmYWxzZSkgaXRlbXMucHVzaCh7IHByb2R1Y3QsIHF1YW50aXR5OiAxLCBwcmljZSB9KTtcclxuICAvLyBzYXZlXHJcbiAgbW9kaWZ5Q2FydCh7IGl0ZW1zIH0pO1xyXG59XHJcbmV4cG9ydCBjb25zdCBlbXB0eVdpc2hsaXN0ID0gZnVuY3Rpb24gKCkge1xyXG4gIG1vZGlmeVdpc2hsaXN0KHsgaXRlbXM6IFtdIH0pO1xyXG59O1xyXG5leHBvcnQgY29uc3QgcmVtb3ZlV2lzaExpc3RJdGVtID0gZnVuY3Rpb24gKHJlbW92ZUl0ZW0pIHtcclxuICBsZXQgcHJvZHVjdHMgPSBbXTtcclxuICB0cnkge1xyXG4gICAgLy8gZ2V0XHJcbiAgICBwcm9kdWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aXNobGlzdFwiKSB8fCAneyBcImRhdGFcIjogW10gfScpXHJcbiAgICAgIC5kYXRhO1xyXG4gIH0gY2F0Y2gge31cclxuXHJcbiAgLy8gY2hhbmdlXHJcbiAgbGV0IGl0ZW1zID0gW107XHJcbiAgcHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiB7XHJcbiAgICBpZiAocHJvZHVjdC5pZCAhPT0gcmVtb3ZlSXRlbS5pZCkgaXRlbXMucHVzaChwcm9kdWN0KTtcclxuICB9KTtcclxuICBtb2RpZnlXaXNobGlzdCh7IGl0ZW1zIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2R1Y3RUb0xvY2FsV2lzaGxpc3QobmV3UHJvZHVjdCkge1xyXG4gIC8vIGdldFxyXG5cclxuICBsZXQgcHJvZHVjdHMgPSBbXTtcclxuICB0cnkge1xyXG4gICAgcHJvZHVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2lzaGxpc3RcIikgfHwgJ3sgXCJkYXRhXCI6IFtdIH0nKVxyXG4gICAgICAuZGF0YTtcclxuICB9IGNhdGNoIHt9XHJcblxyXG4gIC8vIGNoYW5nZVxyXG4gIGxldCBvdGhlcnMgPSBbXTtcclxuICBwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IHtcclxuICAgIGlmIChwcm9kdWN0LmlkICE9PSBuZXdQcm9kdWN0LmlkKSB7XHJcbiAgICAgIG90aGVycy5wdXNoKHByb2R1Y3QpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGNvbnN0IGl0ZW1zID0gWy4uLm90aGVycywgbmV3UHJvZHVjdF07XHJcblxyXG4gIC8vIHNhdmVcclxuICBtb2RpZnlXaXNobGlzdCh7IGl0ZW1zIH0pO1xyXG59XHJcbiIsImltcG9ydCB7dXNlTWVtb30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0Fwb2xsb0NsaWVudH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQge3NldENvbnRleHR9IGZyb20gJ0BhcG9sbG8vY2xpZW50L2xpbmsvY29udGV4dCc7XHJcbmltcG9ydCB7SHR0cExpbmt9IGZyb20gJ0BhcG9sbG8vY2xpZW50L2xpbmsvaHR0cCc7XHJcblxyXG5pbXBvcnQge0luTWVtb3J5Q2FjaGUsIG1ha2VWYXIsIGdxbH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQge2luaXR9IGZyb20gJy4vYWN0aW9uJztcclxuZXhwb3J0IGNvbnN0IG9yZGVyQ291bnRWYXIgPSBtYWtlVmFyKDApO1xyXG5leHBvcnQgY29uc3QgbmV3T3JkZXJWYXIgPSBtYWtlVmFyKGZhbHNlKTtcclxuZXhwb3J0IGNvbnN0IG5ld09yZGVyQ291bnRWYXIgPSBtYWtlVmFyKCk7XHJcbmV4cG9ydCBjb25zdCBjdXN0b21lclZhciA9IG1ha2VWYXIoe2lkOiBudWxsfSk7XHJcbmV4cG9ydCBjb25zdCByZWZldGNoQ3VzdG9tZXIgPSBtYWtlVmFyKGFzeW5jICgpID0+IHt9KTtcclxuXHJcbmV4cG9ydCBsZXQgY2FjaGUgPSBuZXcgSW5NZW1vcnlDYWNoZSgpO1xyXG5jb25zdCB1cmkgPVxyXG4gIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICA/ICdodHRwczovL2Vjb21tZXJjZS5sb2Fsb2EudGVjaCdcclxuICAgIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NjAwNycpICsgJy9hZG1pbi9hcGknO1xyXG5jb25zb2xlLmxvZyh1cmkpO1xyXG5jb25zdCBodHRwTGluayA9IG5ldyBIdHRwTGluayh7XHJcbiAgdXJpLFxyXG4gIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxyXG59KTtcclxuY29uc3QgYXV0aExpbmsgPSBzZXRDb250ZXh0KChfLCB7aGVhZGVyc30pID0+IHtcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgLi4uaGVhZGVycyxcclxuICAgICAgICBhdXRob3JpemF0aW9uOiB0b2tlbiA/IGBCZWFyZXIgJHt0b2tlbn1gIDogJycsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxufSk7XHJcbmZ1bmN0aW9uIGNyZWF0ZUFwb2xsb0NsaWVudCgpIHtcclxuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgICBzc3JNb2RlOiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyxcclxuICAgIGxpbms6IGF1dGhMaW5rLmNvbmNhdChodHRwTGluayksXHJcbiAgICBjYWNoZSxcclxuICB9KTtcclxufVxyXG5cclxubGV0IGFwb2xsb0NsaWVudDtcclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVBcG9sbG8oaW5pdGlhbFN0YXRlID0gbnVsbCkge1xyXG4gIGNvbnN0IF9hcG9sbG9DbGllbnQgPSBhcG9sbG9DbGllbnQgPz8gY3JlYXRlQXBvbGxvQ2xpZW50KCk7XHJcbiAgaWYgKGluaXRpYWxTdGF0ZSkge1xyXG4gICAgX2Fwb2xsb0NsaWVudC5jYWNoZS5yZXN0b3JlKGluaXRpYWxTdGF0ZSk7XHJcbiAgfVxyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIF9hcG9sbG9DbGllbnQ7XHJcbiAgaWYgKCFhcG9sbG9DbGllbnQpIGFwb2xsb0NsaWVudCA9IF9hcG9sbG9DbGllbnQ7XHJcbiAgcmV0dXJuIF9hcG9sbG9DbGllbnQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwb2xsbyhpbml0aWFsU3RhdGUpIHtcclxuICBjb25zdCBzdG9yZSA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaW5pdCgpO1xyXG5cclxuICAgIHJldHVybiBpbml0aWFsaXplQXBvbGxvKGluaXRpYWxTdGF0ZSk7XHJcbiAgfSwgW2luaXRpYWxTdGF0ZV0pO1xyXG4gIHJldHVybiBzdG9yZTtcclxufVxyXG4iLCJpbXBvcnQgeyBncWwsIHVzZVF1ZXJ5LCB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIEZyYWdtZW50LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNhcnRJdGVtc1ZhciwgQ0FSVCB9IGZyb20gXCIuLi8uLi9hcG9sbG8vYWN0aW9uXCI7XHJcbmltcG9ydCB7IE1kQWRkU2hvcHBpbmdDYXJ0IH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vc3JjL0xpbmtcIjtcclxuaW1wb3J0IHsgQ291bnRJY29uIH0gZnJvbSBcIi4uL3NyYy9jb3VudFwiO1xyXG5cclxuaW1wb3J0IHsgSW9Jb3NDYXJ0IH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcbmltcG9ydCB7IFNlbGxlckNvbnRleHQgfSBmcm9tIFwiLi4vc3JjL1NlbGxlclByb3ZpZGVyXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBJY29uKHsgb25DbGljaywgc3R5bGUgfSkge1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlQ29udGV4dChTZWxsZXJDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlUXVlcnkoQ0FSVCk7XHJcbiAgaWYgKGxvYWRpbmcgfHwgZXJyb3IgfHwgIWRhdGEpIHJldHVybiBudWxsO1xyXG5cclxuICBsZXQgY291bnQgPSAwO1xyXG4gIGlmIChkYXRhPy5jYXJ0SXRlbXM/Lmxlbmd0aCkge1xyXG4gICAgZGF0YS5jYXJ0SXRlbXMubWFwKChjYXJ0SXRlbSkgPT4ge1xyXG4gICAgICBjb3VudCArPSBjYXJ0SXRlbS5xdWFudGl0eTtcclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj1cIi9jYXJ0XCIgb25DbGljaz17b25DbGlja30gc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fT5cclxuICAgICAgPElvSW9zQ2FydCBzdHlsZT17c3R5bGV9IC8+XHJcbiAgICAgIHtjb3VudCA/IDxDb3VudEljb24gY291bnQ9e2NvdW50fSAvPiA6IG51bGx9XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQge0NhdGVnb3JpZXNEcm9wZG93bk1lbnUgYXMgVXNlcnN9IGZyb20gJy4uL1VzZXIvRHJvcGRvd25Vc2VyJztcclxuaW1wb3J0IHtJY29uIGFzIENhcnRJY29ufSBmcm9tICcuLi9DYXJ0L2ljb24nO1xyXG5pbXBvcnQge0ljb24gYXMgV2lzaGxpc3RJY29ufSBmcm9tICcuLi9XaXNobGlzdC9pY29uJztcclxuaW1wb3J0IHtJY29uIGFzIE9yZGVySWNvbn0gZnJvbSAnLi4vT3JkZXIvaWNvbic7XHJcbmltcG9ydCB7Q29udGFpbmVyfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHtMb2dvfSBmcm9tICcuLi9zcmMvbG9nbyc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQge3VzZVF1ZXJ5LCBncWx9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7U2VsbGVyQ29udGV4dH0gZnJvbSAnLi4vc3JjL1NlbGxlclByb3ZpZGVyJztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudUFwcCgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB0aGVtZSA9IHVzZUNvbnRleHQoU2VsbGVyQ29udGV4dCk7XHJcbiAgY29uc3Qge2RhdGF9ID0gdXNlUXVlcnkoXHJcbiAgICBncWxgXHJcbiAgICAgIHF1ZXJ5IHtcclxuICAgICAgICB1c2VyIEBjbGllbnRcclxuICAgICAgfVxyXG4gICAgYCxcclxuICAgIHt9LFxyXG4gICk7XHJcbiAgY29uc3QgaXNMb2dpbiA9IGRhdGE/LnVzZXI7XHJcbiAgLy8gQU5JTUFUSU9OXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICB6SW5kZXg6IDEwMCxcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wcm9kdWN0QmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZygzKSxcclxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgcmdiYSgwLDAsMCwwLjA1KScsXHJcbiAgICAgIH19PlxyXG4gICAgICA8Q29udGFpbmVyIGZsdWlkPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGhlaWdodDogNDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICB9fT5cclxuICAgICAgICAgIDxMb2dvXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgZmxvYXQ6ICdsZWZ0JyxcclxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBmbG9hdDogJ2xlZnQnLFxyXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6ICcwLjlyZW0nLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgICAgICAgY29sb3I6IHRoZW1lLnByaW1hcnksXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgICAgICAgd29yZFdyYXA6ICdpbml0aWFsJyxcclxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAge3RoZW1lLnN0b3JlfVxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDxXaXNobGlzdEljb25cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAuLi50aGVtZS5jc3MuaWNvbkJvcmRlcixcclxuICAgICAgICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Q2FydEljb25cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAuLi50aGVtZS5jc3MuaWNvbkJvcmRlcixcclxuICAgICAgICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8T3JkZXJJY29uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgLi4udGhlbWUuY3NzLmljb25Cb3JkZXIsXHJcbiAgICAgICAgICAgICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFVzZXJzIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSwgdXNlTXV0YXRpb24sIHVzZUFwb2xsb0NsaWVudCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIi4uL3NyYy9MaW5rXCI7XHJcbmltcG9ydCB7IG5ld09yZGVyQ291bnRWYXIgfSBmcm9tIFwiLi4vLi4vYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBVU0VSIH0gZnJvbSBcIi4uLy4uL2Fwb2xsby9hY3Rpb25cIjtcclxuaW1wb3J0IHsgRmlQYWNrYWdlIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XHJcbmltcG9ydCB7IENvdW50SWNvbiB9IGZyb20gXCIuLi9zcmMvY291bnRcIjtcclxuY29uc3QgT1JERVJfQ09VTlQgPSBncWxgXHJcbiAgcXVlcnkge1xyXG4gICAgdXNlciBAY2xpZW50XHJcbiAgICBfYWxsT3JkZXJzTWV0YSB7XHJcbiAgICAgIGNvdW50XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgZnVuY3Rpb24gSWNvbih7IG9uQ2xpY2ssIHN0eWxlIH0pIHtcclxuICBsZXQgZGF0YTtcclxuICBjb25zdCB7IGRhdGE6IG9yZGVyRGF0YSwgcmVmZXRjaCwgZXJyb3IgfSA9IHVzZVF1ZXJ5KE9SREVSX0NPVU5UKTtcclxuICBkYXRhID0gb3JkZXJEYXRhO1xyXG5cclxuICBjb25zdCBuZXdPcmRlckNvdW50ID0gbmV3T3JkZXJDb3VudFZhcigpO1xyXG4gIGlmIChuZXdPcmRlckNvdW50KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZWZldGNoKCk7XHJcbiAgICB9IGNhdGNoIHt9XHJcbiAgICBuZXdPcmRlckNvdW50VmFyKGZhbHNlKTtcclxuICB9XHJcbiAgcmV0dXJuIGRhdGE/LnVzZXI/LmlkICYmIGRhdGE/Ll9hbGxPcmRlcnNNZXRhPy5jb3VudCA/IChcclxuICAgIDxMaW5rIGhyZWY9XCIvb3JkZXJcIiBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19IG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICA8RmlQYWNrYWdlIHN0eWxlPXtzdHlsZX0gLz5cclxuICAgICAgPENvdW50SWNvbiBjb3VudD17ZGF0YT8uX2FsbE9yZGVyc01ldGE/LmNvdW50fSAvPlxyXG4gICAgPC9MaW5rPlxyXG4gICkgOiBudWxsO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgRHJvcGRvd25JdGVtLFxyXG4gIERyb3Bkb3duTWVudSxcclxuICBEcm9wZG93blRvZ2dsZSxcclxuICBVbmNvbnRyb2xsZWREcm9wZG93bixcclxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIi4uL3NyYy9MaW5rXCI7XHJcbmltcG9ydCB7IFVTRVIgfSBmcm9tIFwiLi4vLi4vYXBvbGxvL2FjdGlvblwiO1xyXG5cclxuaW1wb3J0IHsgQWlPdXRsaW5lVXNlciB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5cclxuXHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU2VsbGVyQ29udGV4dCB9IGZyb20gXCIuLi9zcmMvU2VsbGVyUHJvdmlkZXJcIjtcclxuY29uc3QgR0VUX0NBVEVHT1JJRVMgPSBncWxgXHJcbiAgcXVlcnkoJHNlbGxlcjogVXNlcldoZXJlSW5wdXQpIHtcclxuICAgIGFsbENhdGVnb3JpZXMod2hlcmU6IHsgc2VsbGVyOiAkc2VsbGVyIH0pIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICB1cmxcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmV4cG9ydCBmdW5jdGlvbiBDYXRlZ29yaWVzRHJvcGRvd25NZW51KHsgb25DbGljayB9KSB7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VDb250ZXh0KFNlbGxlckNvbnRleHQpO1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlUXVlcnkoVVNFUik7XHJcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyAoXHJcbiAgICBkYXRhPy51c2VyPy5pZCA/IChcclxuICAgICAgPFVuY29udHJvbGxlZERyb3Bkb3duIG5hdiBpbk5hdmJhciBzdHlsZT17eyBsaXN0U3R5bGU6IFwibm9uZVwiIH19PlxyXG4gICAgICAgIDxEcm9wZG93blRvZ2dsZVxyXG4gICAgICAgICAgbmF2XHJcbiAgICAgICAgICBjYXJldFxyXG4gICAgICAgICAgc3R5bGU9e3sgY29sb3I6IHRoZW1lLnByaW1hcnksIG1hcmdpbjogMCwgcGFkZGluZzogMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxBaU91dGxpbmVVc2VyIHN0eWxlPXt0aGVtZS5jc3MuaWNvbkJvcmRlcn0gLz5cclxuICAgICAgICA8L0Ryb3Bkb3duVG9nZ2xlPlxyXG4gICAgICAgIDxEcm9wZG93bk1lbnVcclxuICAgICAgICAgIHJpZ2h0XHJcbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmJhY2tncm91bmRDb2xvciwgY29sb3I6IHRoZW1lLmNvbG9yIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPERyb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgPGEgb25DbGljaz17b25DbGlja30gc3R5bGU9e3sgY29sb3I6IHRoZW1lLmNvbG9yIH19PlxyXG4gICAgICAgICAgICAgIEhpIHtkYXRhPy51c2VyPy5pc1NlbGxlciA/IFwic2VsbGVyXCIgOiBudWxsfSB7ZGF0YS51c2VyLmVtYWlsfVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIGhyZWY9XCIvc2lnbm91dFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiB0aGVtZS5jb2xvciB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8RHJvcGRvd25JdGVtIGhyZWY9XCJcIiBzdHlsZT17eyBjb2xvcjogdGhlbWUuY29sb3IgfX0+XHJcbiAgICAgICAgICAgICAgxJDEg25nIFh14bqldFxyXG4gICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L0Ryb3Bkb3duTWVudT5cclxuICAgICAgPC9VbmNvbnRyb2xsZWREcm9wZG93bj5cclxuICAgICkgOiAoXHJcbiAgICAgIDxMaW5rXHJcbiAgICAgICAgaHJlZj1cIi9zaWduaW5cIlxyXG4gICAgICAgIHN0eWxlPXt7IGNvbG9yOiB0aGVtZS5wcmltYXJ5LCBtYXJnaW46IDAsIHBhZGRpbmc6IDAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxBaU91dGxpbmVVc2VyIHN0eWxlPXt0aGVtZS5jc3MuaWNvbkJvcmRlcn0gLz5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgKVxyXG4gICkgOiAoXHJcbiAgICA8bGFiZWw+c2VydmVyPC9sYWJlbD5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IGdxbCwgdXNlUXVlcnksIHVzZU11dGF0aW9uIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IFdJU0hMSVNUIH0gZnJvbSBcIi4uLy4uL2Fwb2xsby9hY3Rpb25cIjtcclxuaW1wb3J0IHsgSW9Jb3NIZWFydEVtcHR5IH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcbmltcG9ydCB7IENvdW50SWNvbiB9IGZyb20gXCIuLi9zcmMvY291bnRcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCIuLi9zcmMvTGlua1wiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFNlbGxlckNvbnRleHQgfSBmcm9tIFwiLi4vc3JjL1NlbGxlclByb3ZpZGVyXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSWNvbih7IG9uQ2xpY2ssIHN0eWxlIH0pIHtcclxuICBjb25zdCB0aGVtZSA9IHVzZUNvbnRleHQoU2VsbGVyQ29udGV4dCk7XHJcbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlUXVlcnkoV0lTSExJU1QpO1xyXG4gIGlmIChsb2FkaW5nIHx8IGVycm9yIHx8ICFkYXRhKSByZXR1cm4gbnVsbDtcclxuICBjb25zdCBjb3VudCA9IGRhdGE/Lndpc2hsaXN0Py5sZW5ndGg7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9XCIvd2lzaGxpc3RcIiBvbkNsaWNrPXtvbkNsaWNrfSBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19PlxyXG4gICAgICA8SW9Jb3NIZWFydEVtcHR5IHN0eWxlPXt7IC4uLnN0eWxlIH19IC8+e1wiIFwifVxyXG4gICAgICB7Y291bnQgPyA8Q291bnRJY29uIGNvdW50PXtjb3VudH0gLz4gOiBudWxsfVxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU2VsbGVyQ29udGV4dCB9IGZyb20gXCIuL1NlbGxlclByb3ZpZGVyXCI7XHJcbmltcG9ydCB7IEZhY2Vib29rUHJvdmlkZXIsIFBhZ2UsIEN1c3RvbUNoYXQgfSBmcm9tIFwicmVhY3QtZmFjZWJvb2tcIjtcclxuaW1wb3J0IHsgQWlPdXRsaW5lQ2xvY2tDaXJjbGUsIEFpT3V0bGluZVBob25lIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcbmltcG9ydCB7IEdvTG9jYXRpb24gfSBmcm9tIFwicmVhY3QtaWNvbnMvZ29cIjtcclxuZXhwb3J0IGNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICBjb25zdCB0aGVtZSA9IHVzZUNvbnRleHQoU2VsbGVyQ29udGV4dCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5iYWNrZ3JvdW5kQ29sb3IsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgPEZhY2Vib29rUHJvdmlkZXIgYXBwSWQ9XCI0MDQ5Nzk4MjAwNTk1NDFcIiBjaGF0U3VwcG9ydD5cclxuICAgICAgICA8Q29udGFpbmVyXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDUpLFxyXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nKDUpLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgIDxoMiBzdHlsZT17dGhlbWUuY3NzLmgyfT5HaeG7m2kgVGhp4buHdTwvaDI+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICB7dGhlbWUuc3RvcmV9IHt0aGVtZS5zbG9nYW59XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxwPnt0aGVtZS5pbnRyb308L3A+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgIDxoMiBzdHlsZT17dGhlbWUuY3NzLmgyfT5MacOqbiBI4buHPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8QWlPdXRsaW5lUGhvbmUgLz4ge3RoZW1lLnBob25lfVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDxHb0xvY2F0aW9uIC8+IHt0aGVtZS5hZGRyZXNzfVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDxBaU91dGxpbmVDbG9ja0NpcmNsZSAvPiB7dGhlbWUuY29udGFjdH1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgIDxoMiBzdHlsZT17dGhlbWUuY3NzLmgyfT5GYWNlYm9vazwvaDI+XHJcbiAgICAgICAgICAgICAgPFBhZ2UgaHJlZj17XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vXCIgKyB0aGVtZS5wYWdlSWR9IC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8Y2VudGVyPlxyXG4gICAgICAgICAgICA8YSBzdHlsZT17eyBjb2xvcjogdGhlbWUuY29sb3IgfX0gaHJlZj1cImh0dHBzOi8vbG9hbG9hLnRlY2hcIj5cclxuICAgICAgICAgICAgICBjdW5nIGPhuqVwIGLhu59pIExvYSBMb2EgVGVjaFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2NlbnRlcj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8Q3VzdG9tQ2hhdFxyXG4gICAgICAgICAgcGFnZUlkPXt0aGVtZT8ucGFnZUlkfVxyXG4gICAgICAgICAgbWluaW1pemVkPXtmYWxzZX1cclxuICAgICAgICAgIC8vIHRoZW1lQ29sb3I9e3RoZW1lLmNvbG9yfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvRmFjZWJvb2tQcm92aWRlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBOZXh0TGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVNwcmluZyB9IGZyb20gXCJyZWFjdC1zcHJpbmdcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgTGluayA9ICh7IGNoaWxkcmVuLCBzdHlsZSwgaHJlZiA9IFwiXCIsIG9uQ2xpY2sgfSkgPT4ge1xyXG4gIGNvbnN0IGxpbmsgPSAoXHJcbiAgICA8YSBzdHlsZT17eyAuLi5zdHlsZSwgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9fSBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9hPlxyXG4gICk7XHJcbiAgcmV0dXJuIGhyZWYgPyA8TmV4dExpbmsgaHJlZj17aHJlZn0+e2xpbmt9PC9OZXh0TGluaz4gOiBsaW5rO1xyXG59O1xyXG4iLCJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFF1ZXJ5ID0gKHsgcXVlcnksIHZhcmlhYmxlcywgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KHF1ZXJ5LCB7IHZhcmlhYmxlcyB9KTtcclxuICByZXR1cm4gY2hpbGRyZW4oeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9KTtcclxufTtcclxuIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIi4vUXVlcnlcIjtcclxuZXhwb3J0IGNvbnN0IFNlbGxlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0R0EgZnJvbSBcInJlYWN0LWdhXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgbGV2ZWwgPSBbMCwgNSwgOCwgMTMsIDIxLCAzNCwgNTUsIDg5XTtcclxuY29uc3QgcHJpY2VzID0gWzEwMDAwMCwgMjAwMDAwLCA1MDAwMDAsIDEwMDAwMDAsIDIwMDAwMDBdO1xyXG5jb25zdCBzcGFjaW5nID0gKGkpID0+IGxldmVsW2ldO1xyXG5jb25zdCB1cmkgPVxyXG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxyXG4gICAgPyBcImh0dHBzOi8vZWNvbW1lcmNlLmxvYWxvYS50ZWNoXCJcclxuICAgIDogXCJodHRwOi8vbG9jYWxob3N0OjYwMDdcIjtcclxuZXhwb3J0IGNvbnN0IFNlbGxlclByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtpc0xvYWQsIHNldElzTG9hZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW0dBLCBzZXRHQV0gPSB1c2VTdGF0ZSgpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoR0EgJiYgIWlzTG9hZCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImluaXRcIiwgR0EpO1xyXG4gICAgICBSZWFjdEdBLmluaXRpYWxpemUoR0EpO1xyXG4gICAgICBzZXRJc0xvYWQodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xyXG4gICAgY29uc29sZS5sb2codXJsKTtcclxuICAgIFJlYWN0R0EucGFnZXZpZXcodXJsKTtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPFF1ZXJ5XHJcbiAgICAgIHF1ZXJ5PXtncWxgXHJcbiAgICAgICAgcXVlcnkoJGhvc3Q6IFN0cmluZykge1xyXG4gICAgICAgICAgYWxsVXNlcnMod2hlcmU6IHsgaG9zdDogJGhvc3QgfSkge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBlbWFpbFxyXG4gICAgICAgICAgICBmaWxlIHtcclxuICAgICAgICAgICAgICBwdWJsaWNVcmxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsb2dvIHtcclxuICAgICAgICAgICAgICBwdWJsaWNVcmxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdG9yZVxyXG4gICAgICAgICAgICBzbG9nYW5cclxuICAgICAgICAgICAgaW50cm9cclxuICAgICAgICAgICAgY29udGFjdFxyXG4gICAgICAgICAgICBjb2xvclxyXG4gICAgICAgICAgICBwcmltYXJ5XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvclxyXG4gICAgICAgICAgICBwcm9kdWN0QmFja2dyb3VuZENvbG9yXHJcbiAgICAgICAgICAgIHBhZ2VJZFxyXG4gICAgICAgICAgICBnb29nbGVJZFxyXG4gICAgICAgICAgICBwaG9uZVxyXG4gICAgICAgICAgICBlbWFpbFxyXG4gICAgICAgICAgICBhZGRyZXNzXHJcbiAgICAgICAgICAgIHByaWNlc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH1cclxuICAgICAgdmFyaWFibGVzPXt7XHJcbiAgICAgICAgaG9zdDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5sb2NhdGlvbi5ob3N0IDogbnVsbCxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgeyh7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0pID0+IHtcclxuICAgICAgICBjb25zdCB0aGVtZSA9IGRhdGE/LmFsbFVzZXJzWzBdO1xyXG4gICAgICAgIGlmICh0aGVtZSkge1xyXG4gICAgICAgICAgc2V0R0EodGhlbWUuZ29vZ2xlSWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhlbWUgPyAoXHJcbiAgICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgIDx0aXRsZT5cclxuICAgICAgICAgICAgICAgIHt0aGVtZS5zdG9yZX0gfCB7dGhlbWUuc2xvZ2FufVxyXG4gICAgICAgICAgICAgIDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17dGhlbWUuaW50cm99IC8+XHJcbiAgICAgICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgY29udGVudD17dXJpICsgdGhlbWU/LmZpbGU/LnB1YmxpY1VybH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICByZWw9XCJpY29uXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxyXG4gICAgICAgICAgICAgICAgaHJlZj17dXJpICsgdGhlbWU/LmxvZ28/LnB1YmxpY1VybH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxTZWxsZXJDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgIC4uLnRoZW1lLFxyXG4gICAgICAgICAgICAgICAgc2VydmVyOlxyXG4gICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICA/IFwiaHR0cHM6Ly9lY29tbWVyY2UubG9hbG9hLnRlY2hcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJodHRwOi8vbG9jYWxob3N0OjYwMDdcIixcclxuICAgICAgICAgICAgICAgIHNlbGxlcjogeyBpZDogdGhlbWUuaWQgfSxcclxuICAgICAgICAgICAgICAgIHNwYWNpbmcsXHJcbiAgICAgICAgICAgICAgICBwcmljZXM6IHRoZW1lLnByaWNlc1xyXG4gICAgICAgICAgICAgICAgICA/IHRoZW1lLnByaWNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgPy5yZXBsYWNlKC8gL2csIFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoXCIsXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAubWFwKChlKSA9PiBOdW1iZXIoZSkpXHJcbiAgICAgICAgICAgICAgICAgIDogW10sXHJcbiAgICAgICAgICAgICAgICBjc3M6IGNzcyh0aGVtZSksXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWUuY29sb3IsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9TZWxsZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICApIDogbnVsbDtcclxuICAgICAgfX1cclxuICAgIDwvUXVlcnk+XHJcbiAgKTtcclxufTtcclxuY29uc3QgY3NzID0gKHRoZW1lKSA9PiAoe1xyXG4gIGJ0bkljb246ICh0b3AgPSAtNSwgY29sb3IgPSB0aGVtZS5iYWNrZ3JvdW5kQ29sb3IpID0+ICh7XHJcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgdG9wLFxyXG4gICAgcmlnaHQ6IC01LFxyXG4gICAgcGFkZGluZzogMyxcclxuICAgIHBhZGRpbmdUb3A6IDUsXHJcbiAgICB3aWR0aDogMzAsXHJcbiAgICBoZWlnaHQ6IDMwLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICBjb2xvcixcclxuICAgIGZvbnRXZWlnaHQ6IDgwMCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucHJpbWFyeSxcclxuICB9KSxcclxuICBpbnB1dDoge1xyXG4gICAgZGlzcGxheTogXCJibG9jay1pbmxpbmVcIixcclxuICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lPy5wcm9kdWN0QmFja2dyb3VuZENvbG9yfWAsXHJcbiAgICBwYWRkaW5nOiBzcGFjaW5nKDEpLFxyXG4gICAgcGFkZGluZ0xlZnQ6IHNwYWNpbmcoMyksXHJcbiAgICBib3JkZXJSYWRpdXM6IHNwYWNpbmcoMiksXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lPy5iYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICBjb2xvcjogdGhlbWUuY29sb3IsXHJcbiAgfSxcclxuICBidG5JbmxpbmU6IHtcclxuICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnByaW1hcnksXHJcbiAgICBjb2xvcjogdGhlbWUuYmFja2dyb3VuZENvbG9yLFxyXG4gICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgIGJvcmRlclJhZGl1czogMzUsXHJcbiAgICBtaW5XaWR0aDogMzUsXHJcbiAgfSxcclxuICBidXR0b246IHtcclxuICAgIGNvbG9yOiB0aGVtZS5iYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnByaW1hcnksXHJcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5wcmltYXJ5fWAsXHJcbiAgICBib3JkZXJSYWRpdXM6IHNwYWNpbmcoMiksXHJcbiAgICBwYWRkaW5nVG9wOiBzcGFjaW5nKDEpLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogc3BhY2luZygxKSxcclxuICAgIG1hcmdpbkJvdHRvbTogc3BhY2luZygyKSxcclxuICB9LFxyXG4gIGJ0bk91dGxpbmU6IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wcmltYXJ5LFxyXG5cclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuYmFja2dyb3VuZENvbG9yLFxyXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUucHJpbWFyeX1gLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBzcGFjaW5nKDIpLFxyXG4gICAgcGFkZGluZ1RvcDogc3BhY2luZygxKSxcclxuICAgIHBhZGRpbmdCb3R0b206IHNwYWNpbmcoMSkgKyAxLFxyXG4gICAgbWFyZ2luQm90dG9tOiBzcGFjaW5nKDIpLFxyXG4gIH0sXHJcbiAgaDU6IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wcmltYXJ5LFxyXG4gICAgZm9udFNpemU6IFwiMC44N3JlbVwiLFxyXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICBtYXJnaW5Cb3R0b206IHNwYWNpbmcoMyksXHJcbiAgfSxcclxuICBoNjoge1xyXG4gICAgY29sb3I6IHRoZW1lLnByaW1hcnksXHJcbiAgICBmb250U2l6ZTogXCIwLjhyZW1cIixcclxuICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXHJcbiAgICBtYXJnaW46IDAsXHJcbiAgICBwYWRkaW5nOiAwLFxyXG4gIH0sXHJcbiAgaDE6IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wcmltYXJ5LFxyXG4gIH0sXHJcbiAgaDI6IHtcclxuICAgIGZvbnRTaXplOiBcIjEuNXJlbVwiLFxyXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxyXG4gICAgY29sb3I6IHRoZW1lLnByaW1hcnksXHJcbiAgICBtYXJnaW5Cb3R0b206IHNwYWNpbmcoMiksXHJcbiAgfSxcclxuICBhOiB7XHJcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgfSxcclxuICBib3g6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucHJvZHVjdEJhY2tncm91bmRDb2xvcixcclxuICAgIG1hcmdpbkJvdHRvbTogc3BhY2luZyg0KSxcclxuICAgIHBhZGRpbmc6IHNwYWNpbmcoMyksXHJcbiAgICBib3JkZXJSYWRpdXM6IHNwYWNpbmcoMSksXHJcbiAgICBib3JkZXI6IFwiMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4wNSlcIixcclxuICAgIGJveFNoYWRvdzogXCI1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMDMpXCIsXHJcbiAgfSxcclxuICBmaWx0ZXI6IHtcclxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcixcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucHJvZHVjdEJhY2tncm91bmRDb2xvcixcclxuICAgIGJvcmRlclJhZGl1czogc3BhY2luZygxKSxcclxuICAgIGJvcmRlcjogXCIxcHggc29saWQgcmdiYSgwLDAsMCwwLjA1KVwiLFxyXG5cclxuICAgIHBhZGRpbmc6IHNwYWNpbmcoMiksXHJcbiAgICBwYWRkaW5nTGVmdDogc3BhY2luZygzKSxcclxuICAgIHBhZGRpbmdSaWdodDogc3BhY2luZygzKSxcclxuICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICBib3hTaGFkb3c6IFwiNXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjAzKVwiLFxyXG4gICAgbWFyZ2luQm90dG9tOiBzcGFjaW5nKDMpLFxyXG4gICAgbWFyZ2luTGVmdDogc3BhY2luZygzKSxcclxuICAgIGZvbnRTaXplOiBcIjAuOXJlbVwiLFxyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICB9LFxyXG4gIGljb246IHtcclxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcixcclxuICB9LFxyXG4gIGljb25IZWFkZXI6IHtcclxuICAgIGZvbnRTaXplOiBcIjFyZW1cIixcclxuICAgIG1hcmdpblJpZ2h0OiBzcGFjaW5nKDIpLFxyXG4gICAgbWFyZ2luQm90dG9tOiBzcGFjaW5nKDEpLFxyXG4gIH0sXHJcbiAgaWNvbkJvcmRlcjoge1xyXG4gICAgYm9yZGVyUmFkaXVzOiAzNSxcclxuICAgIGNvbG9yOiB0aGVtZS5wcmltYXJ5LFxyXG4gICAgd2lkdGg6IDM1LFxyXG4gICAgaGVpZ2h0OiAzNSxcclxuICAgIHBhZGRpbmc6IDgsXHJcbiAgICBmb250U2l6ZTogXCIxcmVtXCIsXHJcbiAgfSxcclxuICByZW1vdmVJY29uOiB7XHJcbiAgICBtYXJnaW5Ub3A6IDAsXHJcbiAgICBtYXJnaW5Cb3R0b206IDAsXHJcbiAgICBtYXJnaW5SaWdodDogMCxcclxuICAgIG1hcmdpbkxlZnQ6IHNwYWNpbmcoMiksXHJcbiAgICBwYWRkaW5nOiAzLFxyXG4gICAgY29sb3I6IHRoZW1lLnByaW1hcnksXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgd2lkdGg6IDI1LFxyXG4gICAgaGVpZ2h0OiAyNSxcclxuICB9LFxyXG59KTtcclxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTZWxsZXJDb250ZXh0IH0gZnJvbSBcIi4vU2VsbGVyUHJvdmlkZXJcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb3VudEljb24oeyBjb3VudCB9KSB7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VDb250ZXh0KFNlbGxlckNvbnRleHQpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3BhblxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgZm9udFNpemU6IDEyLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgICBmbG9hdDogXCJyaWdodFwiLFxyXG4gICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiaW5saW5lXCIsXHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnByaW1hcnksXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjb3VudH1cclxuICAgIDwvc3Bhbj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU2VsbGVyQ29udGV4dCB9IGZyb20gXCIuL1NlbGxlclByb3ZpZGVyXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTG9nbyh7IG9uQ2xpY2ssIHN0eWxlIH0pIHtcclxuICBjb25zdCB0aGVtZSA9IHVzZUNvbnRleHQoU2VsbGVyQ29udGV4dCk7XHJcbiAgcmV0dXJuIHRoZW1lPy5sb2dvPy5wdWJsaWNVcmwgPyAoXHJcbiAgICA8aW1nXHJcbiAgICAgIHNyYz17dGhlbWU/LnNlcnZlciArIHRoZW1lPy5sb2dvPy5wdWJsaWNVcmx9XHJcbiAgICAgIHN0eWxlPXt7IC4uLnN0eWxlLCBwYWRkaW5nOiAwIH19XHJcbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAvPlxyXG4gICkgOiBudWxsO1xyXG59XHJcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImRlY2xhcmUgY29uc3QgX19ORVhUX0RBVEFfXzogYW55XG5cbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUHJlZmV0Y2hPcHRpb25zLCBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBleGVjT25jZSwgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IGFkZEJhc2VQYXRoLCByZXNvbHZlSHJlZiB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyBmcm9tIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBwYWdlIChicm93c2VyIG9ubHkpLlxuICovXG5mdW5jdGlvbiBpc0xvY2FsKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW5cbn1cblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lLCB0YXJnZXQgfSA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICBpZiAoXG4gICAgbm9kZU5hbWUgPT09ICdBJyAmJlxuICAgICgodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICAgIGUubWV0YUtleSB8fFxuICAgICAgZS5jdHJsS2V5IHx8XG4gICAgICBlLnNoaWZ0S2V5IHx8XG4gICAgICAoZS5uYXRpdmVFdmVudCAmJiBlLm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKSlcbiAgKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKCFpc0xvY2FsKGhyZWYpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hcyA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcykgOiByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIGNoaWxkRWxtICYmIGNoaWxkRWxtLnRhZ05hbWUpIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoYXMpXG4gIH1cblxuICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICBpZiAoXG4gICAgICBjaGlsZFByb3BzLmhyZWYgJiZcbiAgICAgIHR5cGVvZiBfX05FWFRfREFUQV9fICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0XG4gICAgKSB7XG4gICAgICBjaGlsZFByb3BzLmhyZWYgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChjaGlsZFByb3BzLmhyZWYpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGNvbnN0IHdhcm4gPSBleGVjT25jZShjb25zb2xlLmVycm9yKVxuXG4gIC8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxuICBjb25zdCBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJylcbiAgY29uc3QgZXhhY3QgPSByZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0JylcbiAgLy8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuICBMaW5rLnByb3BUeXBlcyA9IGV4YWN0KHtcbiAgICBocmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxcbiAgICBhczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIHByZWZldGNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZXBsYWNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaGFsbG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwYXNzSHJlZjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIChwcm9wczogYW55LCBwcm9wTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNbcHJvcE5hbWVdXG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgYFdhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5gXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0sXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvc2VhcmNoLXBhcmFtcy10by11cmwtcXVlcnknXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQge1xuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGJhc2VQYXRoXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goYmFzZVBhdGgpXG4gICAgICA6IGJhc2VQYXRoICsgcGF0aFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKGN1cnJlbnRQYXRoOiBzdHJpbmcsIGhyZWY6IFVybCk6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgcmV0dXJuIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICA6IGZpbmFsVXJsLmhyZWZcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmZ1bmN0aW9uIHRyeVBhcnNlUmVsYXRpdmVVcmwoXG4gIHVybDogc3RyaW5nXG4pOiBudWxsIHwgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4ge1xuICB0cnkge1xuICAgIHJldHVybiBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG50eXBlIENvbXBvbmVudFJlcyA9IHsgcGFnZTogQ29tcG9uZW50VHlwZTsgbW9kOiBhbnkgfVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxudHlwZSBSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IGFueVxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBSb3V0ZUluZm8sIEFwcD86IENvbXBvbmVudFR5cGUpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBhbnkpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICA7KGVyciBhcyBhbnkpLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJ1xuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IENvbXBvbmVudFR5cGVcbiAgICAgIHdyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIF9fTiB9ID0gZS5zdGF0ZVxuICAgIGlmICghX19OKSB7XG4gICAgICAvLyB0aGlzIGhpc3Rvcnkgc3RhdGUgd2Fzbid0IGNyZWF0ZWQgYnkgbmV4dC5qcyBzbyBpdCBjYW4gYmUgaWdub3JlZFxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5J1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBhbnlcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxCYXNlUGF0aChhcylcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IHBhcnNlZCA9IHRyeVBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgaWYgKCFwYXJzZWQpIHJldHVybiBmYWxzZVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcyB9ID0gcGFyc2VkXG4gICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcylcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwoY2xlYW5lZEFzKVxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8ob3B0aW9ucy5fTl9YLCBvcHRpb25zLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciwgZXJyb3I6IGVyciB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihcbiAgICAgICAgICAgIChyZXMpID0+XG4gICAgICAgICAgICAgICh7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgICAgICB9IGFzIFJvdXRlSW5mbylcbiAgICAgICAgICApXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBwYXJzZWQgPSB0cnlQYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGlmICghcGFyc2VkKSByZXR1cm5cblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBhc1BhdGgpLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxDb21wb25lbnRSZXM+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGVuY29kZSBhcyBlbmNvZGVRdWVyeXN0cmluZyB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIC8vIHF1ZXJ5ID0gJycgKyBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5KTtcbiAgICBxdWVyeSA9IGVuY29kZVF1ZXJ5c3RyaW5nKHF1ZXJ5KVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoJ2h0dHA6Ly9uJylcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IGFueVxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGludGVyZmFjZS1uYW1lXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBmaWxlczogc3RyaW5nW11cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2Vcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQge0Fwb2xsb1Byb3ZpZGVyLCBncWwsIHVzZVF1ZXJ5fSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcblxyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbi8vIGltcG9ydCBcIi4uL3B1YmxpYy95ZW5zYW9kYXRxdWFuZy9hc3NldHMvY3NzL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgTWVudUFwcCBmcm9tICcuLi9jb21wb25lbnRzL01lbnVBcHAvaW5kZXgnO1xyXG5pbXBvcnQge3VzZUFwb2xsb30gZnJvbSAnLi4vYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCB7Rm9vdGVyfSBmcm9tICcuLi9jb21wb25lbnRzL3NyYy9Gb290ZXInO1xyXG5pbXBvcnQge0ZhY2Vib29rUHJvdmlkZXIsIEN1c3RvbUNoYXR9IGZyb20gJ3JlYWN0LWZhY2Vib29rJztcclxuaW1wb3J0IHtjcmVhdGVDb250ZXh0LCBGcmFnbWVudCwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1NlbGxlclByb3ZpZGVyfSBmcm9tICcuLi9jb21wb25lbnRzL3NyYy9TZWxsZXJQcm92aWRlcic7XHJcbmZ1bmN0aW9uIEFwcChwcm9wcykge1xyXG4gIGNvbnN0IHtDb21wb25lbnQsIHBhZ2VQcm9wc30gPSBwcm9wcztcclxuICBjb25zdCBhcG9sbG9DbGllbnQgPSB1c2VBcG9sbG8ocGFnZVByb3BzLmluaXRpYWxBcG9sbG9TdGF0ZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17YXBvbGxvQ2xpZW50fT5cclxuICAgICAgICA8U2VsbGVyUHJvdmlkZXI+XHJcbiAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICA8TWVudUFwcCAvPlxyXG4gICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICA8bWFpbiBzdHlsZT17e3BhZGRpbmdUb3A6IDY4LCBtaW5IZWlnaHQ6ICc2MHZoJ319PlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9TZWxsZXJQcm92aWRlcj5cclxuICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50L2xpbmsvY29udGV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudC9saW5rL2h0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJxdWVyeXN0cmluZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1mYWNlYm9va1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1nYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9haVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9maVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9nb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9pb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9tZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zcHJpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9