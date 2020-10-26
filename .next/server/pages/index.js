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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
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

/***/ "./components/Animations/FadeIn.js":
/*!*****************************************!*\
  !*** ./components/Animations/FadeIn.js ***!
  \*****************************************/
/*! exports provided: FadeIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FadeIn", function() { return FadeIn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Github\\ecom-ui\\components\\Animations\\FadeIn.js";

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
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, children);
}

/***/ }),

/***/ "./components/Attribute/item.js":
/*!**************************************!*\
  !*** ./components/Attribute/item.js ***!
  \**************************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_chip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/chip */ "./lib/chip.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../apollo/client */ "./apollo/client.js");
/* harmony import */ var _src_SellerProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/SellerProvider */ "./components/src/SellerProvider.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "D:\\Github\\ecom-ui\\components\\Attribute\\item.js";

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
  const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_src_SellerProvider__WEBPACK_IMPORTED_MODULE_5__["SellerContext"]);
  let query = router.query;
  let currentAttributes = query.attributes ? query.attributes.split(",") : [];
  const exist = currentAttributes.includes(attribute.url);

  const handleClick = () => {
    if (exist) {
      currentAttributes = Object(_lib_chip__WEBPACK_IMPORTED_MODULE_2__["removeItemOnce"])(currentAttributes, attribute.url);
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
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, attribute.name, removeIcon ? __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_6__["IoIosRemoveCircleOutline"], {
    style: theme.css.removeIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }) : null);
}

/***/ }),

/***/ "./components/Brand/item.js":
/*!**********************************!*\
  !*** ./components/Brand/item.js ***!
  \**********************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_SellerProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/SellerProvider */ "./components/src/SellerProvider.js");
var _jsxFileName = "D:\\Github\\ecom-ui\\components\\Brand\\item.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function Item({
  brand,
  style
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_src_SellerProvider__WEBPACK_IMPORTED_MODULE_2__["SellerContext"]);
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
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, brand.name);
}

/***/ }),

/***/ "./components/Brand/list.js":
/*!**********************************!*\
  !*** ./components/Brand/list.js ***!
  \**********************************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item */ "./components/Brand/item.js");
/* harmony import */ var _lib_chip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/chip */ "./lib/chip.js");
/* harmony import */ var _src_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Loading */ "./components/src/Loading.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_SellerProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/SellerProvider */ "./components/src/SellerProvider.js");
var _jsxFileName = "D:\\Github\\ecom-ui\\components\\Brand\\list.js";

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

  const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_src_SellerProvider__WEBPACK_IMPORTED_MODULE_6__["SellerContext"]);
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
  if (loading) return __jsx(_src_Loading__WEBPACK_IMPORTED_MODULE_4__["Loading"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 23
    }
  });
  if (error) return __jsx("i", {
    color: "danger",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, Object(_lib_chip__WEBPACK_IMPORTED_MODULE_3__["getErrorMessage"])(error));
  return !loading && data ? __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("h5", {
    style: theme.css.h5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_5__["IoIosBookmark"], {
    style: theme.css.iconHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), " Th\u01B0\u01A1ng Hi\u1EC7u"), __jsx(_item__WEBPACK_IMPORTED_MODULE_2__["Item"], {
    brand: {
      id: "all-brand",
      name: "Tất Cả ",
      url: "all"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }), data === null || data === void 0 ? void 0 : (_data$allBrands = data.allBrands) === null || _data$allBrands === void 0 ? void 0 : _data$allBrands.slice(0, open ? data === null || data === void 0 ? void 0 : (_data$allBrands2 = data.allBrands) === null || _data$allBrands2 === void 0 ? void 0 : _data$allBrands2.lenght : 7).map(brand => __jsx(_item__WEBPACK_IMPORTED_MODULE_2__["Item"], {
    key: brand.id,
    brand: brand,
    style: {
      display: "block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  })), (data === null || data === void 0 ? void 0 : (_data$allBrands3 = data.allBrands) === null || _data$allBrands3 === void 0 ? void 0 : _data$allBrands3.length) > 7 ? open ? __jsx("a", {
    onClick: () => setOpen(false),
    style: {
      color: theme.primary
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, "R\xFAt g\u1ECDn") : __jsx("a", {
    onClick: () => setOpen(true),
    style: {
      color: theme.primary
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, "Xem th\xEAm") : null) : null;
}

/***/ }),

/***/ "./components/Category/item.js":
/*!*************************************!*\
  !*** ./components/Category/item.js ***!
  \*************************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-ga */ "react-ga");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Github\\ecom-ui\\components\\Category\\item.js";

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
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, (category === null || category === void 0 ? void 0 : category.label) ? category === null || category === void 0 ? void 0 : category.label : category === null || category === void 0 ? void 0 : category.name) : null;
}

/***/ }),

/***/ "./components/Category/list.js":
/*!*************************************!*\
  !*** ./components/Category/list.js ***!
  \*************************************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item */ "./components/Category/item.js");
/* harmony import */ var _src_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Loading */ "./components/src/Loading.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_SellerProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/SellerProvider */ "./components/src/SellerProvider.js");
var _jsxFileName = "D:\\Github\\ecom-ui\\components\\Category\\list.js";

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

  const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_src_SellerProvider__WEBPACK_IMPORTED_MODULE_6__["SellerContext"]);
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
  if (error || loading) return __jsx(_src_Loading__WEBPACK_IMPORTED_MODULE_3__["Loading"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 32
    }
  });
  return !loading && data ? __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx("h5", {
    style: theme.css.h5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_5__["IoIosList"], {
    style: theme.css.iconHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }), category ? data === null || data === void 0 ? void 0 : (_data$allCategories$ = data.allCategories[0]) === null || _data$allCategories$ === void 0 ? void 0 : _data$allCategories$.name : "Danh Mục"), category ? data === null || data === void 0 ? void 0 : (_data$allCategories$2 = data.allCategories[0]) === null || _data$allCategories$2 === void 0 ? void 0 : _data$allCategories$2.childs.map(cate => __jsx(_item__WEBPACK_IMPORTED_MODULE_2__["Item"], {
    key: cate.id,
    category: cate,
    style: {
      display: "block",
      marginBottom: theme.spacing(2)
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  })) : (_data$allCategories = data.allCategories) === null || _data$allCategories === void 0 ? void 0 : _data$allCategories.slice(0, open ? data.allCategories.length : 7).map(category => __jsx(_item__WEBPACK_IMPORTED_MODULE_2__["Item"], {
    key: category.id,
    category: category,
    style: {
      display: "block",
      marginBottom: theme.spacing(2)
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  })), (data === null || data === void 0 ? void 0 : (_data$allCategories2 = data.allCategories) === null || _data$allCategories2 === void 0 ? void 0 : _data$allCategories2.length) > 7 ? open ? __jsx("a", {
    onClick: () => setOpen(false),
    style: {
      color: theme.primary
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, "R\xFAt g\u1ECDn") : __jsx("a", {
    onClick: () => setOpen(true),
    style: {
      color: theme.primary
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
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
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_5__["IoIosArrowRoundBack"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }), " Quay l\u1EA1i") : null) : null;
}

/***/ }),

/***/ "./components/Hashtag/item.js":
/*!************************************!*\
  !*** ./components/Hashtag/item.js ***!
  \************************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_SellerProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/SellerProvider */ "./components/src/SellerProvider.js");
var _jsxFileName = "D:\\Github\\ecom-ui\\components\\Hashtag\\item.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function Item({
  hashtag,
  style
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_src_SellerProvider__WEBPACK_IMPORTED_MODULE_2__["SellerContext"]);
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
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, hashtag.name);
}

/***/ }),

/***/ "./components/Hashtag/list.js":
/*!************************************!*\
  !*** ./components/Hashtag/list.js ***!
  \************************************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item */ "./components/Hashtag/item.js");
/* harmony import */ var _lib_chip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/chip */ "./lib/chip.js");
/* harmony import */ var _src_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Loading */ "./components/src/Loading.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_SellerProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/SellerProvider */ "./components/src/SellerProvider.js");
var _jsxFileName = "D:\\Github\\ecom-ui\\components\\Hashtag\\list.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const GET_HASHTAGS = _apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"]`
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

  const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_src_SellerProvider__WEBPACK_IMPORTED_MODULE_6__["SellerContext"]);
  const {
    data,
    loading,
    error
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(GET_HASHTAGS, {
    variables: {
      seller: theme.seller
    }
  });
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  if (loading) return __jsx(_src_Loading__WEBPACK_IMPORTED_MODULE_4__["Loading"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 23
    }
  });
  if (error) return __jsx("i", {
    color: "danger",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, Object(_lib_chip__WEBPACK_IMPORTED_MODULE_3__["getErrorMessage"])(error));
  return !loading && data ? __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx("h5", {
    style: theme.css.h5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_5__["IoIosBookmark"], {
    style: theme.css.iconHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), " B\xE0i vi\u1EBFt"), data === null || data === void 0 ? void 0 : (_data$allHashtags = data.allHashtags) === null || _data$allHashtags === void 0 ? void 0 : _data$allHashtags.slice(0, open ? data === null || data === void 0 ? void 0 : (_data$allHashtags2 = data.allHashtags) === null || _data$allHashtags2 === void 0 ? void 0 : _data$allHashtags2.lenght : 7).map(hashtag => __jsx(_item__WEBPACK_IMPORTED_MODULE_2__["Item"], {
    key: hashtag.id,
    hashtag: hashtag,
    style: {
      display: "block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  })), (data === null || data === void 0 ? void 0 : (_data$allHashtags3 = data.allHashtags) === null || _data$allHashtags3 === void 0 ? void 0 : _data$allHashtags3.length) > 7 ? open ? __jsx("a", {
    onClick: () => setOpen(false),
    style: {
      color: theme.primary
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, "R\xFAt g\u1ECDn") : __jsx("a", {
    onClick: () => setOpen(true),
    style: {
      color: theme.primary
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, "Xem th\xEAm") : null) : null;
}

/***/ }),

/***/ "./components/Product/filter.js":
/*!**************************************!*\
  !*** ./components/Product/filter.js ***!
  \**************************************/
/*! exports provided: Filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return Filter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Category_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Category/item */ "./components/Category/item.js");
/* harmony import */ var _Attribute_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Attribute/item */ "./components/Attribute/item.js");
/* harmony import */ var _lib_chip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/chip */ "./lib/chip.js");
/* harmony import */ var _Brand_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Brand/item */ "./components/Brand/item.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_SellerProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/SellerProvider */ "./components/src/SellerProvider.js");
var _jsxFileName = "D:\\Github\\ecom-ui\\components\\Product\\filter.js";

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

  const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_src_SellerProvider__WEBPACK_IMPORTED_MODULE_8__["SellerContext"]);
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
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, search ? __jsx("div", {
    style: theme.css.filter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx("h6", {
    style: _objectSpread(_objectSpread({}, theme.css.h6), {}, {
      display: "inline-block",
      marginRight: theme.spacing(2)
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, "T\xECm ki\u1EBFm:"), __jsx("a", {
    style: {
      color: theme.color
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, search), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_6__["IoIosRemoveCircleOutline"], {
    onClick: removeSearch,
    style: theme.css.removeIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  })) : null, price_to != 999999999 ? __jsx("div", {
    style: theme.css.filter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx("h6", {
    style: _objectSpread(_objectSpread({}, theme.css.h6), {}, {
      display: "inline-block",
      marginRight: theme.spacing(2)
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, "Gi\xE1:"), Object(_lib_chip__WEBPACK_IMPORTED_MODULE_4__["formatMoney"])(price_from), " - ", Object(_lib_chip__WEBPACK_IMPORTED_MODULE_4__["formatMoney"])(price_to), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_6__["IoIosRemoveCircleOutline"], {
    onClick: removePrice,
    style: theme.css.removeIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  })) : null, (data === null || data === void 0 ? void 0 : data.allCategories.length) ? __jsx("div", {
    style: theme.css.filter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, __jsx("h6", {
    style: _objectSpread(_objectSpread({}, theme.css.h6), {}, {
      display: "inline-block",
      marginRight: theme.spacing(2)
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, "Danh m\u1EE5c:"), __jsx(_Category_item__WEBPACK_IMPORTED_MODULE_2__["Item"], {
    category: data === null || data === void 0 ? void 0 : data.allCategories[0],
    style: {
      display: "inline-block",
      marginBottom: 0,
      padding: 0
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  })) : null, (data === null || data === void 0 ? void 0 : (_data$allAttributes = data.allAttributes) === null || _data$allAttributes === void 0 ? void 0 : _data$allAttributes.length) ? __jsx("div", {
    style: theme.css.filter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, __jsx("h6", {
    style: _objectSpread(_objectSpread({}, theme.css.h6), {}, {
      display: "inline-block",
      marginRight: theme.spacing(2)
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, "Thu\u1ED9c T\xEDnh:"), data === null || data === void 0 ? void 0 : data.allAttributes.map(attribute => __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, __jsx(_Attribute_item__WEBPACK_IMPORTED_MODULE_3__["Item"], {
    key: attribute.id,
    attribute: attribute,
    style: {
      display: "inline",
      marginRight: 8
    },
    removeIcon: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 15
    }
  })))) : null, (data === null || data === void 0 ? void 0 : data.allBrands.length) ? __jsx("div", {
    style: theme.css.filter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }, __jsx("h6", {
    style: _objectSpread(_objectSpread({}, theme.css.h6), {}, {
      display: "inline-block",
      marginRight: theme.spacing(2)
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  }, "Th\u01B0\u01A1ng Hi\u1EC7u:"), __jsx(_Brand_item__WEBPACK_IMPORTED_MODULE_5__["Item"], {
    brand: data === null || data === void 0 ? void 0 : data.allBrands[0],
    style: {
      display: "inline-block"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 11
    }
  })) : null);
};

/***/ }),

/***/ "./components/Product/imageProduct.js":
/*!********************************************!*\
  !*** ./components/Product/imageProduct.js ***!
  \********************************************/
/*! exports provided: ImgProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgProduct", function() { return ImgProduct; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../apollo/action */ "./apollo/action.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_SellerProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/SellerProvider */ "./components/src/SellerProvider.js");
var _jsxFileName = "D:\\Github\\ecom-ui\\components\\Product\\imageProduct.js";

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

  const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_src_SellerProvider__WEBPACK_IMPORTED_MODULE_5__["SellerContext"]);
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
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: ImgSrcs[imgIndex] ? ImgSrcs[imgIndex] : "/img/no-img.png",
    onClick: onClick,
    style: _objectSpread(_objectSpread({}, style), {}, {
      width: "100%",
      cursor: "pointer"
    }),
    key: (_ImgSrcs$imgIndex = ImgSrcs[imgIndex]) === null || _ImgSrcs$imgIndex === void 0 ? void 0 : (_ImgSrcs$imgIndex$fil = _ImgSrcs$imgIndex.file) === null || _ImgSrcs$imgIndex$fil === void 0 ? void 0 : _ImgSrcs$imgIndex$fil.publicUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }), __jsx("i", {
    onClick: () => isInWishlist ? Object(_apollo_action__WEBPACK_IMPORTED_MODULE_3__["removeWishListItem"])(product) : Object(_apollo_action__WEBPACK_IMPORTED_MODULE_3__["addProductToLocalWishlist"])(product),
    style: theme.css.btnIcon(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, isInWishlist ? __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdDoneAll"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }) : __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosHeartEmpty"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 41
    }
  })));
}

/***/ }),

/***/ "./components/Product/item.js":
/*!************************************!*\
  !*** ./components/Product/item.js ***!
  \************************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_chip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/chip */ "./lib/chip.js");
/* harmony import */ var _src_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/Link */ "./components/src/Link.js");
/* harmony import */ var _imageProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imageProduct */ "./components/Product/imageProduct.js");
/* harmony import */ var _Animations_FadeIn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Animations/FadeIn */ "./components/Animations/FadeIn.js");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-ga */ "react-ga");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_SellerProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/SellerProvider */ "./components/src/SellerProvider.js");
var _jsxFileName = "D:\\Github\\ecom-ui\\components\\Product\\item.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const Item = ({
  product
}) => {
  const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_src_SellerProvider__WEBPACK_IMPORTED_MODULE_7__["SellerContext"]);
  const {
    0: show,
    1: setShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  return __jsx(_Animations_FadeIn__WEBPACK_IMPORTED_MODULE_4__["FadeIn"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: _objectSpread(_objectSpread({}, theme.css.box), {}, {
      padding: 0,
      position: "relative"
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(_imageProduct__WEBPACK_IMPORTED_MODULE_3__["ImgProduct"], {
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
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
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
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(_src_Link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: {
      pathname: "/detail",
      query: {
        detail: product.url
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx("p", {
    style: {
      color: theme.color,
      textTransform: "capitalize"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
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
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, Object(_lib_chip__WEBPACK_IMPORTED_MODULE_1__["formatMoney"])(product.price)), product.sale ? __jsx("p", {
    style: {
      color: theme.primary,
      display: show ? "none" : "block",
      fontWeigh: "bold",
      fontSize: "0.85rem",
      marginBottom: theme.spacing(0)
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, Object(_lib_chip__WEBPACK_IMPORTED_MODULE_1__["formatMoney"])(product.price - product.sale)) : null)));
};

/***/ }),

/***/ "./components/Product/list.js":
/*!************************************!*\
  !*** ./components/Product/list.js ***!
  \************************************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item */ "./components/Product/item.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_chip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/chip */ "./lib/chip.js");
/* harmony import */ var _src_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/Loading */ "./components/src/Loading.js");
/* harmony import */ var _UI_moreProducts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UI/moreProducts */ "./components/UI/moreProducts.js");
/* harmony import */ var _src_SellerProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/SellerProvider */ "./components/src/SellerProvider.js");
var _jsxFileName = "D:\\Github\\ecom-ui\\components\\Product\\list.js";

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

  const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_src_SellerProvider__WEBPACK_IMPORTED_MODULE_7__["SellerContext"]);
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
  if (search) variables.keyword = Object(_lib_chip__WEBPACK_IMPORTED_MODULE_4__["toSlug"])(search);
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
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }
  }, __jsx(_src_Loading__WEBPACK_IMPORTED_MODULE_5__["Loading"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  }));
  return (data === null || data === void 0 ? void 0 : (_data$allProducts2 = data.allProducts) === null || _data$allProducts2 === void 0 ? void 0 : _data$allProducts2.length) ? __jsx("section", {
    id: "products",
    style: {
      paddingLeft: theme.spacing(2)
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 5
    }
  }, title ? __jsx("h2", {
    style: _objectSpread(_objectSpread({}, theme.css.h2), {}, {
      textAlign: "center",
      marginBottom: theme.spacing(5)
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }
  }, title) : null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    noGutters: true,
    style: {
      display: "flex",
      justifyContent: "center"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
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
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 11
      }
    }, __jsx(_item__WEBPACK_IMPORTED_MODULE_2__["Item"], {
      product: product,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 13
      }
    }));
  }))) : __jsx("p", {
    style: {
      textAlign: "center"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 5
    }
  }, "Kh\xF4ng c\xF3 k\u1EBFt qu\u1EA3!");
};

/***/ }),

/***/ "./components/Search/index.js":
/*!************************************!*\
  !*** ./components/Search/index.js ***!
  \************************************/
/*! exports provided: Search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_SellerProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/SellerProvider */ "./components/src/SellerProvider.js");
var _jsxFileName = "D:\\Github\\ecom-ui\\components\\Search\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// search in nav




function Search({
  style
}) {
  const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_src_SellerProvider__WEBPACK_IMPORTED_MODULE_3__["SellerContext"]);
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
    style: _objectSpread({}, style),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("input", {
    placeholder: "T\xECm s\u1EA3n ph\u1EA9m...",
    name: "search",
    onChange: event => {
      setSearchInput(event.target.value);
    },
    style: _objectSpread(_objectSpread({}, theme.css.input), {}, {
      width: "100%"
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./components/Sidebar/index.js":
/*!*************************************!*\
  !*** ./components/Sidebar/index.js ***!
  \*************************************/
/*! exports provided: Sidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return Sidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_chip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/chip */ "./lib/chip.js");
/* harmony import */ var _Category_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Category/list */ "./components/Category/list.js");
/* harmony import */ var _Brand_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Brand/list */ "./components/Brand/list.js");
/* harmony import */ var _Hashtag_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Hashtag/list */ "./components/Hashtag/list.js");
/* harmony import */ var _Search_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Search/index */ "./components/Search/index.js");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-ga */ "react-ga");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_SellerProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/SellerProvider */ "./components/src/SellerProvider.js");
var _jsxFileName = "D:\\Github\\ecom-ui\\components\\Sidebar\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // import { List as Attributes } from "../Attribute/list";








function Sidebar() {
  const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_src_SellerProvider__WEBPACK_IMPORTED_MODULE_9__["SellerContext"]);
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
  return __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: theme.css.box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("h5", {
    style: theme.css.h5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosSearch"], {
    style: theme.css.iconHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }), "T\xECm Ki\u1EBFm"), __jsx(_Search_index__WEBPACK_IMPORTED_MODULE_6__["Search"], {
    style: {
      width: "100%",
      marginBottom: theme.spacing(3)
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  })), __jsx("div", {
    style: theme.css.box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx(_Category_list__WEBPACK_IMPORTED_MODULE_3__["List"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  })), __jsx("form", {
    onSubmit: onSubmit,
    action: "",
    style: theme.css.box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx("h5", {
    style: theme.css.h5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosPricetag"], {
    style: theme.css.iconHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
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
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }
    }, index > 0 ? Object(_lib_chip__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(theme.prices[index - 1]) : 0, " - ", Object(_lib_chip__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(price));
  })), __jsx("div", {
    style: theme.css.box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  }, __jsx(_Brand_list__WEBPACK_IMPORTED_MODULE_4__["List"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  })), __jsx("div", {
    style: theme.css.box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, __jsx(_Hashtag_list__WEBPACK_IMPORTED_MODULE_5__["List"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "./components/UI/moreProducts.js":
/*!***************************************!*\
  !*** ./components/UI/moreProducts.js ***!
  \***************************************/
/*! exports provided: MoreProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreProducts", function() { return MoreProducts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/Link */ "./components/src/Link.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_SellerProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/SellerProvider */ "./components/src/SellerProvider.js");
var _jsxFileName = "D:\\Github\\ecom-ui\\components\\UI\\moreProducts.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const MoreProducts = () => {
  const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_src_SellerProvider__WEBPACK_IMPORTED_MODULE_3__["SellerContext"]);
  return __jsx(_src_Link__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    style: {
      color: theme.primary,
      marginBottom: theme.spacing(4)
    },
    href: {
      pathname: "/products"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosBasket"], {
    style: {
      marginBottom: 2,
      marginRight: theme.spacing(1)
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), "Xem S\u1EA3n Ph\u1EA9m");
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

/***/ "./components/src/Loading.js":
/*!***********************************!*\
  !*** ./components/src/Loading.js ***!
  \***********************************/
/*! exports provided: Loading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return Loading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Github\\ecom-ui\\components\\src\\Loading.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Loading() {
  const props = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({
    opacity: 1,
    from: {
      opacity: 0
    }
  });
  return __jsx(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div, {
    style: props,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      backgroundColor: "rgba(0,0,0,0.05)",
      width: "100%",
      height: "100%",
      minHeight: 200
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }));
}

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

/***/ "./lib/chip.js":
/*!*********************!*\
  !*** ./lib/chip.js ***!
  \*********************/
/*! exports provided: removeItemOnce, removeItemAll, toAttributeGourpWhereInput, formatMoney, toSlug, getErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItemOnce", function() { return removeItemOnce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItemAll", function() { return removeItemAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toAttributeGourpWhereInput", function() { return toAttributeGourpWhereInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMoney", function() { return formatMoney; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSlug", function() { return toSlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorMessage", function() { return getErrorMessage; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apollo/client */ "./apollo/client.js");
/* harmony import */ var _apollo_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apollo/action */ "./apollo/action.js");



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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Product_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Product/list */ "./components/Product/list.js");
/* harmony import */ var _lib_chip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/chip */ "./lib/chip.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Sidebar */ "./components/Sidebar/index.js");
/* harmony import */ var _components_Product_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Product/filter */ "./components/Product/filter.js");
/* harmony import */ var _components_src_SellerProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/src/SellerProvider */ "./components/src/SellerProvider.js");
var _jsxFileName = "D:\\Github\\ecom-ui\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const Index = () => {
  var _theme$file;

  const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_components_src_SellerProvider__WEBPACK_IMPORTED_MODULE_7__["SellerContext"]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  let query = router.query;
  const category = query.category;
  const categories = query.categories;
  const brand = query.brand;
  const search = query.search;
  const price_from = query.price_from ? Number(query.price_from) : 0;
  const price_to = query.price_to ? Number(query.price_to) : 999999999;
  const attributes = Object(_lib_chip__WEBPACK_IMPORTED_MODULE_3__["toAttributeGourpWhereInput"])(query.attributes ? query.attributes.split(",") : []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      width: "100%",
      height: "60vh",
      background: `url(${theme.server + ((_theme$file = theme.file) === null || _theme$file === void 0 ? void 0 : _theme$file.publicUrl)})`,
      backgroundPosition: "center",
      backgroundSize: "cover"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    fluid: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    noGutters: true,
    style: {
      paddingTop: theme.spacing(4)
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 4,
    md: 3,
    lg: 3,
    xl: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_5__["Sidebar"], {
    onSearch: search => {
      setSearch(search);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 8,
    md: 9,
    lg: 9,
    xl: 10,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx(_components_Product_filter__WEBPACK_IMPORTED_MODULE_6__["Filter"], {
    category: category,
    categories: categories,
    brand: brand,
    search: search,
    price_from: price_from,
    price_to: price_to,
    attributes: query.attributes ? query.attributes.split(",") : [],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }), category || categories || brand || search || price_from || price_to != 999999999 || attributes ? __jsx(_components_Product_list__WEBPACK_IMPORTED_MODULE_2__["List"], {
    sm: 6,
    lg: 4,
    xl: 3,
    category: category,
    categories: categories,
    brand: brand,
    search: search,
    price_from: price_from,
    price_to: price_to,
    attributes: attributes,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, __jsx("div", {
    style: theme.css.filter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, __jsx("h6", {
    style: {
      display: "inline-block",
      margin: 0,
      textTransform: "uppercase",
      color: theme.primary
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 19
    }
  }, "Khuy\u1EBFn M\xE3i")), __jsx(_components_Product_list__WEBPACK_IMPORTED_MODULE_2__["List"], {
    sm: 6,
    lg: 4,
    xl: 3,
    sale: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }), __jsx("div", {
    style: theme.css.filter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, __jsx("h6", {
    style: {
      display: "inline-block",
      margin: 0,
      textTransform: "uppercase",
      color: theme.primary
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 19
    }
  }, "B\xE1n Ch\u1EA1y")), __jsx(_components_Product_list__WEBPACK_IMPORTED_MODULE_2__["List"], {
    sm: 6,
    lg: 4,
    xl: 3,
    suggestions: "bestSeller",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

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

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9hcG9sbG8vYWN0aW9uLmpzIiwid2VicGFjazovLy8uL2Fwb2xsby9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BbmltYXRpb25zL0ZhZGVJbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0F0dHJpYnV0ZS9pdGVtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQnJhbmQvaXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0JyYW5kL2xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXRlZ29yeS9pdGVtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2F0ZWdvcnkvbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hhc2h0YWcvaXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hhc2h0YWcvbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2R1Y3QvZmlsdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZHVjdC9pbWFnZVByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9kdWN0L2l0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9kdWN0L2xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaWRlYmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvbW9yZVByb2R1Y3RzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3JjL0xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcmMvTG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9RdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9TZWxsZXJQcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY2hpcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9zZWFyY2gtcGFyYW1zLXRvLXVybC1xdWVyeS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudC9saW5rL2NvbnRleHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudC9saW5rL2h0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicXVlcnlzdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvZmlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9pb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL21kXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zcHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCIiXSwibmFtZXMiOlsiVVNFUiIsImdxbCIsIkNBUlQiLCJXSVNITElTVCIsIkNPTVBBUkUiLCJDVVNUT01FUiIsImluaXQiLCJjYWNoZSIsIndyaXRlUXVlcnkiLCJxdWVyeSIsImRhdGEiLCJ1c2VyIiwiSlNPTiIsImlkIiwiZW1haWwiLCJpc0FkbWluIiwiaXNTZWxsZXIiLCJjYXJ0SXRlbXMiLCJjb21wYXJlIiwid2lzaGxpc3QiLCJjdXN0b21lciIsInBob25lIiwibmFtZSIsImFkZHJlc3MiLCJtb2RpZnlVc2VyIiwibW9kaWZ5Q2FydCIsIml0ZW1zIiwibW9kaWZ5V2lzaGxpc3QiLCJtb2RpZnlDb21wYXJlIiwibW9kaWZ5Q3VzdG9tZXIiLCJlbXB0eUNvbXBhcmUiLCJyZW1vdmVDb21wYXJlSXRlbSIsInJlbW92ZUl0ZW0iLCJwcm9kdWN0cyIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm1hcCIsInByb2R1Y3QiLCJwdXNoIiwiYWRkUHJvZHVjdFRvTG9jYWxDb21wYXJlIiwibmV3UHJvZHVjdCIsIm90aGVycyIsIm9uU2lnbkluIiwib25TaWduT3V0IiwiY2hvb3NlQ3VzdG9tZXIiLCJlbXB0eUNhcnQiLCJyZW1vdmVDYXJ0SXRlbSIsIml0ZW0iLCJjaGFuZ2VDYXJ0SXRlbSIsImNhcnRJdGVtIiwiY2hhbmdlIiwicHJpY2UiLCJzYWxlIiwiaW5kZXgiLCJxdWFudGl0eSIsImFkZFByb2R1Y3RUb0xvY2FsQ2FydCIsInZhcmlhYmxlcyIsImV4aXN0IiwiZW1wdHlXaXNobGlzdCIsInJlbW92ZVdpc2hMaXN0SXRlbSIsImFkZFByb2R1Y3RUb0xvY2FsV2lzaGxpc3QiLCJvcmRlckNvdW50VmFyIiwibWFrZVZhciIsIm5ld09yZGVyVmFyIiwibmV3T3JkZXJDb3VudFZhciIsImN1c3RvbWVyVmFyIiwicmVmZXRjaEN1c3RvbWVyIiwiSW5NZW1vcnlDYWNoZSIsInVyaSIsImNvbnNvbGUiLCJsb2ciLCJodHRwTGluayIsIkh0dHBMaW5rIiwiY3JlZGVudGlhbHMiLCJhdXRoTGluayIsInNldENvbnRleHQiLCJfIiwiaGVhZGVycyIsImNyZWF0ZUFwb2xsb0NsaWVudCIsIkFwb2xsb0NsaWVudCIsInNzck1vZGUiLCJsaW5rIiwiY29uY2F0IiwiYXBvbGxvQ2xpZW50IiwiaW5pdGlhbGl6ZUFwb2xsbyIsImluaXRpYWxTdGF0ZSIsIl9hcG9sbG9DbGllbnQiLCJyZXN0b3JlIiwidXNlQXBvbGxvIiwic3RvcmUiLCJ1c2VNZW1vIiwiRmFkZUluIiwiY2hpbGRyZW4iLCJwcm9wcyIsInVzZVNwcmluZyIsIm9wYWNpdHkiLCJmcm9tIiwid2lkdGgiLCJoZWlnaHQiLCJJdGVtIiwiYXR0cmlidXRlIiwic3R5bGUiLCJyZW1vdmVJY29uIiwicm91dGVyIiwidXNlUm91dGVyIiwidGhlbWUiLCJ1c2VDb250ZXh0IiwiU2VsbGVyQ29udGV4dCIsImN1cnJlbnRBdHRyaWJ1dGVzIiwiYXR0cmlidXRlcyIsInNwbGl0IiwiaW5jbHVkZXMiLCJ1cmwiLCJoYW5kbGVDbGljayIsInJlbW92ZUl0ZW1PbmNlIiwidG9TdHJpbmciLCJjb2xvciIsImZvbnRXZWlnaHQiLCJkaXNwbGF5IiwiY3Vyc29yIiwiY3NzIiwiYnJhbmQiLCJHRVRfQ0FURUdPUklFUyIsIkxpc3QiLCJsb2FkaW5nIiwiZXJyb3IiLCJ1c2VRdWVyeSIsInNlbGxlciIsIm9wZW4iLCJzZXRPcGVuIiwidXNlU3RhdGUiLCJnZXRFcnJvck1lc3NhZ2UiLCJoNSIsImljb25IZWFkZXIiLCJhbGxCcmFuZHMiLCJzbGljZSIsImxlbmdodCIsImxlbmd0aCIsInByaW1hcnkiLCJHRVRfUEFSRU5UIiwiY2F0ZWdvcnkiLCJjaGlsZFVybCIsImNoaWxkcyIsImV2ZW50IiwiYWN0aW9uIiwidmFsdWUiLCJSZWFjdEdBIiwicGFyZW50IiwiY2F0ZWdvcmllcyIsImxhYmVsIiwicm9vdCIsImFsbENhdGVnb3JpZXMiLCJjYXRlIiwibWFyZ2luQm90dG9tIiwic3BhY2luZyIsImhhc2h0YWciLCJwYXRobmFtZSIsIkdFVF9IQVNIVEFHUyIsImFsbEhhc2h0YWdzIiwiR0VUX0NBVEUiLCJGaWx0ZXIiLCJzZWFyY2giLCJwcmljZV9mcm9tIiwicHJpY2VfdG8iLCJyZW1vdmVTZWFyY2giLCJyZW1vdmVQcmljZSIsInBhZGRpbmdSaWdodCIsImZpbHRlciIsImg2IiwibWFyZ2luUmlnaHQiLCJmb3JtYXRNb25leSIsInBhZGRpbmciLCJhbGxBdHRyaWJ1dGVzIiwiSW1nUHJvZHVjdCIsIm9uQ2xpY2siLCJpc0luV2lzaGxpc3QiLCJzb21lIiwiSW1nU3JjcyIsImltYWdlcyIsImltYWdlIiwiZmlsZSIsInNyYyIsInNlcnZlciIsInB1YmxpY1VybCIsImFsdEltYWdlcyIsImltZ0luZGV4Iiwic2V0SW1nSW5kZXgiLCJwb3NpdGlvbiIsImJ0bkljb24iLCJzaG93Iiwic2V0U2hvdyIsImJveCIsImJvcmRlclJhZGl1cyIsImRldGFpbCIsInRleHRUcmFuc2Zvcm0iLCJ0ZXh0RGVjb3JhdGlvbiIsInNlY29uZGFyeSIsImZvbnRTaXplIiwiZmxvYXQiLCJ3b3JkV3JhcCIsImZvbnRXZWlnaCIsIkdFVF9QUk9EVUNUUyIsInRpdGxlIiwiZmlyc3QiLCJza2lwIiwib3JkZXJCeSIsInN1Z2dlc3Rpb25zIiwieHMiLCJzbSIsIm1kIiwibGciLCJ4bCIsIm1vcmUiLCJleGNlcHQiLCJjZW50ZXIiLCJ1cmxfY29udGFpbnMiLCJrZXl3b3JkIiwidG9TbHVnIiwic2FsZV9ndCIsImZldGNoTW9yZSIsIm9uIiwic2V0T24iLCJ1c2VFZmZlY3QiLCJwcm9kdWN0c0VsZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhbHBoYSIsImNsaWVudEhlaWdodCIsInNjcm9sbGluZ0VsZW1lbnQiLCJzY3JvbGxUb3AiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImFsIiwibG9hZGluZ01vcmUiLCJvbnNjcm9sbCIsImlubmVyV2lkdGgiLCJjb3VudCIsImFsbFByb2R1Y3RzIiwidXBkYXRlUXVlcnkiLCJwcmV2IiwiZmV0Y2hNb3JlUmVzdWx0IiwiT2JqZWN0IiwiYXNzaWduIiwiZSIsIm1hcmdpbiIsInBhZGRpbmdMZWZ0IiwiaDIiLCJ0ZXh0QWxpZ24iLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmdUb3AiLCJTZWFyY2giLCJzZWFyY2hJbnB1dCIsInNldFNlYXJjaElucHV0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0YXJnZXQiLCJpbnB1dCIsIlNpZGViYXIiLCJOdW1iZXIiLCJwcmljZUZyb20iLCJzZXRQcmljZUZyb20iLCJwcmljZVRvIiwic2V0UHJpY2VUbyIsIm9uU3VibWl0IiwiY29sbGFwc2VkIiwic2V0Q29sbGFwc2VkIiwidG9wIiwidXNlUmVmIiwicHJpY2VzIiwiY2hvb3NlZCIsIk1vcmVQcm9kdWN0cyIsIkxpbmsiLCJocmVmIiwiTG9hZGluZyIsImJhY2tncm91bmRDb2xvciIsIm1pbkhlaWdodCIsIlF1ZXJ5IiwiY3JlYXRlQ29udGV4dCIsImxldmVsIiwiaSIsIlNlbGxlclByb3ZpZGVyIiwiaXNMb2FkIiwic2V0SXNMb2FkIiwiR0EiLCJzZXRHQSIsImluaXRpYWxpemUiLCJsb2NhdGlvbiIsInBhZ2V2aWV3IiwiaG9zdCIsImFsbFVzZXJzIiwiZ29vZ2xlSWQiLCJzbG9nYW4iLCJpbnRybyIsImxvZ28iLCJyZXBsYWNlIiwicmlnaHQiLCJhbGlnbkl0ZW1zIiwiYm9yZGVyIiwicHJvZHVjdEJhY2tncm91bmRDb2xvciIsImJ0bklubGluZSIsIm1pbldpZHRoIiwiYnV0dG9uIiwicGFkZGluZ0JvdHRvbSIsImJ0bk91dGxpbmUiLCJoMSIsImEiLCJib3hTaGFkb3ciLCJtYXJnaW5MZWZ0IiwiaWNvbiIsImljb25Cb3JkZXIiLCJtYXJnaW5Ub3AiLCJhcnIiLCJpbmRleE9mIiwic3BsaWNlIiwicmVtb3ZlSXRlbUFsbCIsInRvQXR0cmlidXRlR291cnBXaGVyZUlucHV0IiwiYXR0cmlidXRlc19zb21lIiwidXJsX2luIiwiYW1vdW50IiwiZGVjaW1hbENvdW50IiwiZGVjaW1hbCIsInRob3VzYW5kcyIsIk1hdGgiLCJhYnMiLCJpc05hTiIsIm5lZ2F0aXZlU2lnbiIsInBhcnNlSW50IiwidG9GaXhlZCIsImoiLCJzdWJzdHIiLCJzdHIiLCJub3JtYWxpemUiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImdyYXBoUUxFcnJvcnMiLCJncmFwaFFMRXJyb3IiLCJleHRlbnNpb25zIiwiY29kZSIsIm1lc3NhZ2UiLCJ0b2tlbiIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJlcnIiLCJub2RlTmFtZSIsImlzTG9jYWwiLCJzY3JvbGwiLCJhcyIsInN1Y2Nlc3MiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJyZXNvbHZlZEhyZWYiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsInByZWZldGNoIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsInByb2Nlc3MiLCJ3YXJuIiwiUHJvcFR5cGVzIiwicmVxdWlyZSIsImV4YWN0Iiwic2hhbGxvdyIsInBhc3NIcmVmIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiYWxsIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInVwZGF0ZSIsIm1vZCIsIm5ld0RhdGEiLCJyZWxvYWQiLCJiYWNrIiwib3B0aW9ucyIsInByZXBhcmVVcmxBcyIsIlNUIiwicGVyZm9ybWFuY2UiLCJjbGVhbmVkQXMiLCJkZWxCYXNlUGF0aCIsInBhcnNlZCIsInRyeVBhcnNlUmVsYXRpdmVVcmwiLCJtZXRob2QiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwicGFnZSIsImNhY2hlZFJvdXRlSW5mbyIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJQcm9taXNlIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImF1dGgiLCJlbmNvZGVVUklDb21wb25lbnQiLCJob3N0bmFtZSIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwib3B0aW9uYWwiLCJyZXBlYXQiLCJrZXkiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJzZWdtZW50IiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsIlN0cmluZyIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJuYW1lZFJlZ2V4Iiwic2VhcmNoUGFyYW1zIiwiQXJyYXkiLCJ1c2VkIiwicmVzdWx0IiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiSW5kZXgiLCJiYWNrZ3JvdW5kIiwi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Q0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgeyBjYWNoZSB9IGZyb20gXCIuL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBtYWtlVmFyLCBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVU0VSID0gZ3FsYFxyXG4gIHF1ZXJ5IHtcclxuICAgIHVzZXIgQGNsaWVudFxyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IENBUlQgPSBncWxgXHJcbiAgcXVlcnkge1xyXG4gICAgY2FydEl0ZW1zIEBjbGllbnRcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBXSVNITElTVCA9IGdxbGBcclxuICBxdWVyeSB7XHJcbiAgICB3aXNobGlzdCBAY2xpZW50XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgQ09NUEFSRSA9IGdxbGBcclxuICBxdWVyeSB7XHJcbiAgICBjb21wYXJlIEBjbGllbnRcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBDVVNUT01FUiA9IGdxbGBcclxuICBxdWVyeSB7XHJcbiAgICBjdXN0b21lciBAY2xpZW50XHJcbiAgfVxyXG5gO1xyXG4vLyBpbml0aWFsaXplXHJcbmV4cG9ydCBjb25zdCBpbml0ID0gKCkgPT4ge1xyXG4gXHJcbiAgY2FjaGUud3JpdGVRdWVyeSh7XHJcbiAgICBxdWVyeTogVVNFUixcclxuXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHVzZXI6XHJcbiAgICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICAgICAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSlcclxuICAgICAgICAgIDogeyBpZDogbnVsbCwgZW1haWw6IG51bGwsIGlzQWRtaW46IG51bGwsIGlzU2VsbGVyOiBudWxsIH0sXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBjYWNoZS53cml0ZVF1ZXJ5KHtcclxuICAgIHF1ZXJ5OiBDQVJULFxyXG4gICAgZGF0YToge1xyXG4gICAgICBjYXJ0SXRlbXM6XHJcbiAgICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICAgICAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydEl0ZW1zXCIpIHx8ICd7IFwiZGF0YVwiOiBbXSB9JylcclxuICAgICAgICAgICAgICAuZGF0YVxyXG4gICAgICAgICAgOiBudWxsLFxyXG4gICAgfSxcclxuICB9KTtcclxuICBjYWNoZS53cml0ZVF1ZXJ5KHtcclxuICAgIHF1ZXJ5OiBDT01QQVJFLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBjb21wYXJlOlxyXG4gICAgICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCJcclxuICAgICAgICAgID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvbXBhcmVcIikgfHwgJ3sgXCJkYXRhXCI6IFtdIH0nKS5kYXRhXHJcbiAgICAgICAgICA6IG51bGwsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNhY2hlLndyaXRlUXVlcnkoe1xyXG4gICAgcXVlcnk6IFdJU0hMSVNULFxyXG4gICAgZGF0YToge1xyXG4gICAgICB3aXNobGlzdDpcclxuICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiXHJcbiAgICAgICAgICA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aXNobGlzdFwiKSB8fCAneyBcImRhdGFcIjogW10gfScpXHJcbiAgICAgICAgICAgICAgLmRhdGFcclxuICAgICAgICAgIDogbnVsbCxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgY2FjaGUud3JpdGVRdWVyeSh7XHJcbiAgICBxdWVyeTogQ1VTVE9NRVIsXHJcblxyXG4gICAgZGF0YToge1xyXG4gICAgICBjdXN0b21lcjogeyBwaG9uZTogbnVsbCwgbmFtZTogbnVsbCwgYWRkcmVzczogbnVsbCB9LFxyXG4gICAgfSxcclxuICB9KTtcclxufTtcclxuY29uc3QgbW9kaWZ5VXNlciA9ICh7IHVzZXIgfSkgPT4ge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xyXG4gICAgfVxyXG4gICAgY2FjaGUubW9kaWZ5KHtcclxuICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgdXNlcigpIHtcclxuICAgICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcbmNvbnN0IG1vZGlmeUNhcnQgPSAoeyBpdGVtcyB9KSA9PiB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydEl0ZW1zXCIsIEpTT04uc3RyaW5naWZ5KHsgZGF0YTogaXRlbXMgfSkpO1xyXG4gICAgY2FjaGUubW9kaWZ5KHtcclxuICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgY2FydEl0ZW1zKCkge1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcbmNvbnN0IG1vZGlmeVdpc2hsaXN0ID0gKHsgaXRlbXMgfSkgPT4ge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndpc2hsaXN0XCIsIEpTT04uc3RyaW5naWZ5KHsgZGF0YTogaXRlbXMgfSkpO1xyXG4gICAgY2FjaGUubW9kaWZ5KHtcclxuICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgd2lzaGxpc3QoKSB7XHJcbiAgICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuY29uc3QgbW9kaWZ5Q29tcGFyZSA9ICh7IGl0ZW1zIH0pID0+IHtcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb21wYXJlXCIsIEpTT04uc3RyaW5naWZ5KHsgZGF0YTogaXRlbXMgfSkpO1xyXG4gICAgY2FjaGUubW9kaWZ5KHtcclxuICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgY29tcGFyZSgpIHtcclxuICAgICAgICAgIHJldHVybiBpdGVtcztcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgbW9kaWZ5Q3VzdG9tZXIgPSAoeyBjdXN0b21lciB9KSA9PiB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGlmIChjdXN0b21lcikge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImN1c3RvbWVyXCIsIEpTT04uc3RyaW5naWZ5KGN1c3RvbWVyKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImN1c3RvbWVyXCIpO1xyXG4gICAgfVxyXG4gICAgY2FjaGUubW9kaWZ5KHtcclxuICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgY3VzdG9tZXIoKSB7XHJcbiAgICAgICAgICByZXR1cm4gY3VzdG9tZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbi8qIFxyXG4gICAgeW91IGNhbiB1c2UgY2xpZW50IHZhcmlhYmxlIGJlbG93XHJcbiovXHJcbmV4cG9ydCBjb25zdCBlbXB0eUNvbXBhcmUgPSAoKSA9PiB7XHJcbiAgbW9kaWZ5Q29tcGFyZSh7IGl0ZW1zOiBbXSB9KTtcclxufTtcclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNvbXBhcmVJdGVtID0gZnVuY3Rpb24gKHJlbW92ZUl0ZW0pIHtcclxuICBsZXQgcHJvZHVjdHMgPSBbXTtcclxuICB0cnkge1xyXG4gICAgLy8gZ2V0XHJcbiAgICBwcm9kdWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb21wYXJlXCIpIHx8ICd7IFwiZGF0YVwiOiBbXSB9JylcclxuICAgICAgLmRhdGE7XHJcbiAgfSBjYXRjaCB7fVxyXG5cclxuICAvLyBjaGFuZ2VcclxuICBsZXQgaXRlbXMgPSBbXTtcclxuICBwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IHtcclxuICAgIGlmIChwcm9kdWN0LmlkICE9PSByZW1vdmVJdGVtLmlkKSBpdGVtcy5wdXNoKHByb2R1Y3QpO1xyXG4gIH0pO1xyXG4gIG1vZGlmeUNvbXBhcmUoeyBpdGVtcyB9KTtcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2R1Y3RUb0xvY2FsQ29tcGFyZShuZXdQcm9kdWN0KSB7XHJcbiAgLy8gZ2V0XHJcblxyXG4gIGxldCBwcm9kdWN0cyA9IFtdO1xyXG4gIHRyeSB7XHJcbiAgICBwcm9kdWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb21wYXJlXCIpIHx8ICd7IFwiZGF0YVwiOiBbXSB9JylcclxuICAgICAgLmRhdGE7XHJcbiAgfSBjYXRjaCB7fVxyXG5cclxuICAvLyBjaGFuZ2VcclxuICBsZXQgb3RoZXJzID0gW107XHJcbiAgcHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiB7XHJcbiAgICBpZiAocHJvZHVjdC5pZCAhPT0gbmV3UHJvZHVjdC5pZCkge1xyXG4gICAgICBvdGhlcnMucHVzaChwcm9kdWN0KTtcclxuICAgIH1cclxuICB9KTtcclxuICBjb25zdCBpdGVtcyA9IFsuLi5vdGhlcnMsIG5ld1Byb2R1Y3RdO1xyXG5cclxuICAvLyBzYXZlXHJcbiAgbW9kaWZ5Q29tcGFyZSh7IGl0ZW1zIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgb25TaWduSW4gPSAoeyB1c2VyIH0pID0+IHtcclxuICBtb2RpZnlVc2VyKHsgdXNlciB9KTtcclxufTtcclxuZXhwb3J0IGNvbnN0IG9uU2lnbk91dCA9ICgpID0+IHtcclxuICBtb2RpZnlVc2VyKHsgdXNlcjogbnVsbCB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjaG9vc2VDdXN0b21lciA9ICh7IGN1c3RvbWVyIH0pID0+IHtcclxuICBtb2RpZnlDdXN0b21lcih7IGN1c3RvbWVyIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVtcHR5Q2FydCA9IGZ1bmN0aW9uICgpIHtcclxuICBtb2RpZnlDYXJ0KHsgaXRlbXM6IFtdIH0pO1xyXG59O1xyXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2FydEl0ZW0gPSAocmVtb3ZlSXRlbSkgPT4ge1xyXG4gIC8vIGdldFxyXG4gIGNvbnN0IGNhcnRJdGVtcyA9IEpTT04ucGFyc2UoXHJcbiAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRJdGVtc1wiKSB8fCAneyBcImRhdGFcIjogW10gfSdcclxuICApLmRhdGE7XHJcbiAgLy8gY2hhbmdlXHJcbiAgbGV0IGl0ZW1zID0gW107XHJcbiAgY2FydEl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgaWYgKGl0ZW0ucHJvZHVjdC5pZCAhPT0gcmVtb3ZlSXRlbS5wcm9kdWN0LmlkKSBpdGVtcy5wdXNoKGl0ZW0pO1xyXG4gIH0pO1xyXG4gIG1vZGlmeUNhcnQoeyBpdGVtcyB9KTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGNoYW5nZUNhcnRJdGVtID0gZnVuY3Rpb24gKGNhcnRJdGVtLCBjaGFuZ2UpIHtcclxuICAvLyBnZXRcclxuICBsZXQgY2FydEl0ZW1zID0gW107XHJcbiAgdHJ5IHtcclxuICAgIGNhcnRJdGVtcyA9IEpTT04ucGFyc2UoXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydEl0ZW1zXCIpIHx8ICd7IFwiZGF0YVwiOiBbXSB9J1xyXG4gICAgKS5kYXRhO1xyXG4gIH0gY2F0Y2gge31cclxuXHJcbiAgLy8gY2hhbmdlXHJcbiAgbGV0IGl0ZW1zID0gW107XHJcbiAgY29uc3QgcHJpY2UgPSBjYXJ0SXRlbS5wcm9kdWN0LnByaWNlIC0gY2FydEl0ZW0ucHJvZHVjdC5zYWxlO1xyXG5cclxuICBjYXJ0SXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgcXVhbnRpdHkgPVxyXG4gICAgICBpdGVtLnF1YW50aXR5ICsgY2hhbmdlID4gMCA/IGl0ZW0ucXVhbnRpdHkgKyBjaGFuZ2UgOiBpdGVtLnF1YW50aXR5O1xyXG4gICAgaWYgKGl0ZW0ucHJvZHVjdC5pZCAhPT0gY2FydEl0ZW0ucHJvZHVjdC5pZCkge1xyXG4gICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaXRlbXMucHVzaCh7XHJcbiAgICAgICAgcHJvZHVjdDogaXRlbS5wcm9kdWN0LFxyXG4gICAgICAgIHF1YW50aXR5LFxyXG4gICAgICAgIHByaWNlOiBwcmljZSAqIHF1YW50aXR5LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxuICAvLyBzYXZlXHJcbiAgbW9kaWZ5Q2FydCh7IGl0ZW1zIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2R1Y3RUb0xvY2FsQ2FydCh7IHByb2R1Y3QsIHZhcmlhYmxlcyB9KSB7XHJcbiAgLy8gZ2V0XHJcblxyXG4gIGxldCBjYXJ0SXRlbXMgPSBbXTtcclxuICB0cnkge1xyXG4gICAgY2FydEl0ZW1zID0gSlNPTi5wYXJzZShcclxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0SXRlbXNcIikgfHwgJ3sgXCJkYXRhXCI6IFtdIH0nXHJcbiAgICApLmRhdGE7XHJcbiAgfSBjYXRjaCB7fVxyXG5cclxuICAvLyBjaGFuZ2VcclxuICBsZXQgaXRlbXMgPSBbXTtcclxuICBsZXQgZXhpc3QgPSBmYWxzZTtcclxuICBjb25zdCBwcmljZSA9IHByb2R1Y3QucHJpY2UgLSBwcm9kdWN0LnNhbGU7XHJcblxyXG4gIGNhcnRJdGVtcy5tYXAoKGNhcnRJdGVtKSA9PiB7XHJcbiAgICBpZiAoY2FydEl0ZW0ucHJvZHVjdC5pZCAhPT0gcHJvZHVjdC5pZCkge1xyXG4gICAgICBpdGVtcy5wdXNoKGNhcnRJdGVtKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGV4aXN0ID0gdHJ1ZTtcclxuICAgICAgaXRlbXMucHVzaCh7XHJcbiAgICAgICAgcHJvZHVjdDogY2FydEl0ZW0ucHJvZHVjdCxcclxuICAgICAgICBxdWFudGl0eTogY2FydEl0ZW0ucXVhbnRpdHkgKyAxLFxyXG4gICAgICAgIHByaWNlOiBwcmljZSAqIChjYXJ0SXRlbS5xdWFudGl0eSArIDEpLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxuICBpZiAoZXhpc3QgPT09IGZhbHNlKSBpdGVtcy5wdXNoKHsgcHJvZHVjdCwgcXVhbnRpdHk6IDEsIHByaWNlIH0pO1xyXG4gIC8vIHNhdmVcclxuICBtb2RpZnlDYXJ0KHsgaXRlbXMgfSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGVtcHR5V2lzaGxpc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgbW9kaWZ5V2lzaGxpc3QoeyBpdGVtczogW10gfSk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCByZW1vdmVXaXNoTGlzdEl0ZW0gPSBmdW5jdGlvbiAocmVtb3ZlSXRlbSkge1xyXG4gIGxldCBwcm9kdWN0cyA9IFtdO1xyXG4gIHRyeSB7XHJcbiAgICAvLyBnZXRcclxuICAgIHByb2R1Y3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndpc2hsaXN0XCIpIHx8ICd7IFwiZGF0YVwiOiBbXSB9JylcclxuICAgICAgLmRhdGE7XHJcbiAgfSBjYXRjaCB7fVxyXG5cclxuICAvLyBjaGFuZ2VcclxuICBsZXQgaXRlbXMgPSBbXTtcclxuICBwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IHtcclxuICAgIGlmIChwcm9kdWN0LmlkICE9PSByZW1vdmVJdGVtLmlkKSBpdGVtcy5wdXNoKHByb2R1Y3QpO1xyXG4gIH0pO1xyXG4gIG1vZGlmeVdpc2hsaXN0KHsgaXRlbXMgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvZHVjdFRvTG9jYWxXaXNobGlzdChuZXdQcm9kdWN0KSB7XHJcbiAgLy8gZ2V0XHJcblxyXG4gIGxldCBwcm9kdWN0cyA9IFtdO1xyXG4gIHRyeSB7XHJcbiAgICBwcm9kdWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aXNobGlzdFwiKSB8fCAneyBcImRhdGFcIjogW10gfScpXHJcbiAgICAgIC5kYXRhO1xyXG4gIH0gY2F0Y2gge31cclxuXHJcbiAgLy8gY2hhbmdlXHJcbiAgbGV0IG90aGVycyA9IFtdO1xyXG4gIHByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4ge1xyXG4gICAgaWYgKHByb2R1Y3QuaWQgIT09IG5ld1Byb2R1Y3QuaWQpIHtcclxuICAgICAgb3RoZXJzLnB1c2gocHJvZHVjdCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgY29uc3QgaXRlbXMgPSBbLi4ub3RoZXJzLCBuZXdQcm9kdWN0XTtcclxuXHJcbiAgLy8gc2F2ZVxyXG4gIG1vZGlmeVdpc2hsaXN0KHsgaXRlbXMgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHt1c2VNZW1vfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7QXBvbGxvQ2xpZW50fSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCB7c2V0Q29udGV4dH0gZnJvbSAnQGFwb2xsby9jbGllbnQvbGluay9jb250ZXh0JztcclxuaW1wb3J0IHtIdHRwTGlua30gZnJvbSAnQGFwb2xsby9jbGllbnQvbGluay9odHRwJztcclxuXHJcbmltcG9ydCB7SW5NZW1vcnlDYWNoZSwgbWFrZVZhciwgZ3FsfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCB7aW5pdH0gZnJvbSAnLi9hY3Rpb24nO1xyXG5leHBvcnQgY29uc3Qgb3JkZXJDb3VudFZhciA9IG1ha2VWYXIoMCk7XHJcbmV4cG9ydCBjb25zdCBuZXdPcmRlclZhciA9IG1ha2VWYXIoZmFsc2UpO1xyXG5leHBvcnQgY29uc3QgbmV3T3JkZXJDb3VudFZhciA9IG1ha2VWYXIoKTtcclxuZXhwb3J0IGNvbnN0IGN1c3RvbWVyVmFyID0gbWFrZVZhcih7aWQ6IG51bGx9KTtcclxuZXhwb3J0IGNvbnN0IHJlZmV0Y2hDdXN0b21lciA9IG1ha2VWYXIoYXN5bmMgKCkgPT4ge30pO1xyXG5cclxuZXhwb3J0IGxldCBjYWNoZSA9IG5ldyBJbk1lbW9yeUNhY2hlKCk7XHJcbmNvbnN0IHVyaSA9XHJcbiAgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgID8gJ2h0dHBzOi8vZWNvbW1lcmNlLmxvYWxvYS50ZWNoJ1xyXG4gICAgOiAnaHR0cDovL2xvY2FsaG9zdDo2MDA3JykgKyAnL2FkbWluL2FwaSc7XHJcbmNvbnNvbGUubG9nKHVyaSk7XHJcbmNvbnN0IGh0dHBMaW5rID0gbmV3IEh0dHBMaW5rKHtcclxuICB1cmksXHJcbiAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXHJcbn0pO1xyXG5jb25zdCBhdXRoTGluayA9IHNldENvbnRleHQoKF8sIHtoZWFkZXJzfSkgPT4ge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAuLi5oZWFkZXJzLFxyXG4gICAgICAgIGF1dGhvcml6YXRpb246IHRva2VuID8gYEJlYXJlciAke3Rva2VufWAgOiAnJyxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG59KTtcclxuZnVuY3Rpb24gY3JlYXRlQXBvbGxvQ2xpZW50KCkge1xyXG4gIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICAgIHNzck1vZGU6IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnLFxyXG4gICAgbGluazogYXV0aExpbmsuY29uY2F0KGh0dHBMaW5rKSxcclxuICAgIGNhY2hlLFxyXG4gIH0pO1xyXG59XHJcblxyXG5sZXQgYXBvbGxvQ2xpZW50O1xyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFwb2xsbyhpbml0aWFsU3RhdGUgPSBudWxsKSB7XHJcbiAgY29uc3QgX2Fwb2xsb0NsaWVudCA9IGFwb2xsb0NsaWVudCA/PyBjcmVhdGVBcG9sbG9DbGllbnQoKTtcclxuICBpZiAoaW5pdGlhbFN0YXRlKSB7XHJcbiAgICBfYXBvbGxvQ2xpZW50LmNhY2hlLnJlc3RvcmUoaW5pdGlhbFN0YXRlKTtcclxuICB9XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX2Fwb2xsb0NsaWVudDtcclxuICBpZiAoIWFwb2xsb0NsaWVudCkgYXBvbGxvQ2xpZW50ID0gX2Fwb2xsb0NsaWVudDtcclxuICByZXR1cm4gX2Fwb2xsb0NsaWVudDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXBvbGxvKGluaXRpYWxTdGF0ZSkge1xyXG4gIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBpbml0KCk7XHJcblxyXG4gICAgcmV0dXJuIGluaXRpYWxpemVBcG9sbG8oaW5pdGlhbFN0YXRlKTtcclxuICB9LCBbaW5pdGlhbFN0YXRlXSk7XHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59XHJcbiIsImltcG9ydCB7dXNlU3ByaW5nLCBhbmltYXRlZH0gZnJvbSAncmVhY3Qtc3ByaW5nJztcclxuZXhwb3J0IGZ1bmN0aW9uIEZhZGVJbih7Y2hpbGRyZW59KSB7XHJcbiAgY29uc3QgcHJvcHMgPSB1c2VTcHJpbmcoe29wYWNpdHk6IDEsIGZyb206IHtvcGFjaXR5OiAwfX0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8YW5pbWF0ZWQuZGl2IHN0eWxlPXt7Li4ucHJvcHMsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvYW5pbWF0ZWQuZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHJlbW92ZUl0ZW1PbmNlIH0gZnJvbSBcIi4uLy4uL2xpYi9jaGlwXCI7XHJcbmltcG9ydCB7IEZpVGhlcm1vbWV0ZXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcclxuXHJcbmltcG9ydCB7IGZpbHRlckF0dHJpYnV0ZVZhciB9IGZyb20gXCIuLi8uLi9hcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU2VsbGVyQ29udGV4dCB9IGZyb20gXCIuLi9zcmMvU2VsbGVyUHJvdmlkZXJcIjtcclxuaW1wb3J0IHsgSW9Jb3NSZW1vdmVDaXJjbGVPdXRsaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBJdGVtKHsgYXR0cmlidXRlLCBzdHlsZSwgcmVtb3ZlSWNvbiB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VDb250ZXh0KFNlbGxlckNvbnRleHQpO1xyXG5cclxuICBsZXQgcXVlcnkgPSByb3V0ZXIucXVlcnk7XHJcbiAgbGV0IGN1cnJlbnRBdHRyaWJ1dGVzID0gcXVlcnkuYXR0cmlidXRlcyA/IHF1ZXJ5LmF0dHJpYnV0ZXMuc3BsaXQoXCIsXCIpIDogW107XHJcbiAgY29uc3QgZXhpc3QgPSBjdXJyZW50QXR0cmlidXRlcy5pbmNsdWRlcyhhdHRyaWJ1dGUudXJsKTtcclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIGlmIChleGlzdCkge1xyXG4gICAgICBjdXJyZW50QXR0cmlidXRlcyA9IHJlbW92ZUl0ZW1PbmNlKGN1cnJlbnRBdHRyaWJ1dGVzLCBhdHRyaWJ1dGUudXJsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGN1cnJlbnRBdHRyaWJ1dGVzID0gY3VycmVudEF0dHJpYnV0ZXMuY29uY2F0KFthdHRyaWJ1dGUudXJsXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcXVlcnkuYXR0cmlidXRlcyA9IGN1cnJlbnRBdHRyaWJ1dGVzLnRvU3RyaW5nKCk7XHJcbiAgICBpZiAoYXR0cmlidXRlLnVybCA9PT0gXCJhbGxcIikgZGVsZXRlIHF1ZXJ5LmF0dHJpYnV0ZXM7XHJcbiAgICByb3V0ZXIucHVzaCh7IHF1ZXJ5IH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIC4uLnN0eWxlLFxyXG4gICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcixcclxuICAgICAgICBmb250V2VpZ2h0OiBleGlzdCA/IFwiYm9sZFwiIDogbnVsbCxcclxuICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgfX1cclxuICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICA+XHJcbiAgICAgIHthdHRyaWJ1dGUubmFtZX1cclxuICAgICAge3JlbW92ZUljb24gPyA8SW9Jb3NSZW1vdmVDaXJjbGVPdXRsaW5lIHN0eWxlPXt0aGVtZS5jc3MucmVtb3ZlSWNvbn0gLz4gOiBudWxsfVxyXG4gICAgPC9hPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU2VsbGVyQ29udGV4dCB9IGZyb20gXCIuLi9zcmMvU2VsbGVyUHJvdmlkZXJcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIEl0ZW0oeyBicmFuZCwgc3R5bGUgfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlQ29udGV4dChTZWxsZXJDb250ZXh0KTtcclxuXHJcbiAgbGV0IHF1ZXJ5ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IGV4aXN0ID0gcXVlcnkuYnJhbmQgPT0gYnJhbmQudXJsO1xyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgcXVlcnkuYnJhbmQgPSBicmFuZC51cmw7XHJcbiAgICBpZiAoYnJhbmQudXJsID09PSBcImFsbFwiKSBkZWxldGUgcXVlcnkuYnJhbmQ7XHJcbiAgICByb3V0ZXIucHVzaCh7IHF1ZXJ5IH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxhXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgLi4uc3R5bGUsXHJcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6IGV4aXN0ID8gXCJib2xkXCIgOiBudWxsLFxyXG4gICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgIH19XHJcbiAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgPlxyXG4gICAgICB7YnJhbmQubmFtZX1cclxuICAgIDwvYT5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcclxuXHJcbmltcG9ydCB7IGdldEVycm9yTWVzc2FnZSB9IGZyb20gXCIuLi8uLi9saWIvY2hpcFwiO1xyXG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSBcIi4uL3NyYy9Mb2FkaW5nXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIElvSW9zQm9va21hcmssXHJcbn0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcbmltcG9ydCB7IFNlbGxlckNvbnRleHQgfSBmcm9tIFwiLi4vc3JjL1NlbGxlclByb3ZpZGVyXCI7XHJcbmNvbnN0IEdFVF9DQVRFR09SSUVTID0gZ3FsYFxyXG4gIHF1ZXJ5KCRzZWxsZXI6IFVzZXJXaGVyZUlucHV0KSB7XHJcbiAgICBhbGxCcmFuZHMod2hlcmU6IHsgc2VsbGVyOiAkc2VsbGVyIH0pIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICB1cmxcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmV4cG9ydCBmdW5jdGlvbiBMaXN0KCkge1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlQ29udGV4dChTZWxsZXJDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlUXVlcnkoR0VUX0NBVEVHT1JJRVMsIHtcclxuICAgIHZhcmlhYmxlczogeyBzZWxsZXI6IHRoZW1lLnNlbGxlciB9LFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBpZiAobG9hZGluZykgcmV0dXJuIDxMb2FkaW5nIC8+O1xyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxpIGNvbG9yPVwiZGFuZ2VyXCI+e2dldEVycm9yTWVzc2FnZShlcnJvcil9PC9pPjtcclxuICByZXR1cm4gIWxvYWRpbmcgJiYgZGF0YSA/IChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoNSBzdHlsZT17dGhlbWUuY3NzLmg1fT5cclxuICAgICAgICA8SW9Jb3NCb29rbWFyayBzdHlsZT17dGhlbWUuY3NzLmljb25IZWFkZXJ9IC8+IFRoxrDGoW5nIEhp4buHdVxyXG4gICAgICA8L2g1PlxyXG4gICAgICA8SXRlbSBicmFuZD17eyBpZDogXCJhbGwtYnJhbmRcIiwgbmFtZTogXCJU4bqldCBD4bqjIFwiLCB1cmw6IFwiYWxsXCIgfX0gLz5cclxuICAgICAge2RhdGE/LmFsbEJyYW5kc1xyXG4gICAgICAgID8uc2xpY2UoMCwgb3BlbiA/IGRhdGE/LmFsbEJyYW5kcz8ubGVuZ2h0IDogNylcclxuICAgICAgICAubWFwKChicmFuZCkgPT4gKFxyXG4gICAgICAgICAgPEl0ZW0ga2V5PXticmFuZC5pZH0gYnJhbmQ9e2JyYW5kfSBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIgfX0gLz5cclxuICAgICAgICApKX1cclxuICAgICAge2RhdGE/LmFsbEJyYW5kcz8ubGVuZ3RoID4gNyA/IChcclxuICAgICAgICBvcGVuID8gKFxyXG4gICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gc2V0T3BlbihmYWxzZSl9IHN0eWxlPXt7IGNvbG9yOiB0aGVtZS5wcmltYXJ5IH19PlxyXG4gICAgICAgICAgICBSw7p0IGfhu41uXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHNldE9wZW4odHJ1ZSl9IHN0eWxlPXt7IGNvbG9yOiB0aGVtZS5wcmltYXJ5IH19PlxyXG4gICAgICAgICAgICBYZW0gdGjDqm1cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICApXHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgPC9kaXY+XHJcbiAgKSA6IG51bGw7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0R0EgZnJvbSBcInJlYWN0LWdhXCI7XHJcblxyXG5jb25zdCBHRVRfUEFSRU5UID0gZ3FsYFxyXG4gIHF1ZXJ5KCR1cmw6IFN0cmluZykge1xyXG4gICAgYWxsQ2F0ZWdvcmllcyh3aGVyZTogeyB1cmw6ICR1cmwgfSkge1xyXG4gICAgICBwYXJlbnQge1xyXG4gICAgICAgIHVybFxyXG4gICAgICB9XHJcbiAgICAgIGNoaWxkcyB7XHJcbiAgICAgICAgdXJsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmV4cG9ydCBmdW5jdGlvbiBJdGVtKHsgY2F0ZWdvcnksIHN0eWxlIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeShHRVRfUEFSRU5ULCB7IHZhcmlhYmxlczogeyB1cmw6IGNhdGVnb3J5Py51cmwgfSB9KTtcclxuICBsZXQgcXVlcnkgPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIGNvbnN0IGNoaWxkVXJsID0gY2F0ZWdvcnk/LmNoaWxkc1xyXG4gICAgPyBjYXRlZ29yeT8uY2hpbGRzLm1hcCgoY2F0ZWdvcnkpID0+IGNhdGVnb3J5Py51cmwpLnRvU3RyaW5nKClcclxuICAgIDogW107XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAvLyBnb29nbGUgYW5hbHl0aWNzXHJcbiAgICBjb25zdCBldmVudCA9IHtcclxuICAgICAgY2F0ZWdvcnk6IFwiQ2F0ZWdvcnlcIixcclxuICAgICAgYWN0aW9uOiBcInZpZXdcIixcclxuICAgICAgdmFsdWU6IGNhdGVnb3J5Lm5hbWUsXHJcbiAgICB9O1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgUmVhY3RHQS5ldmVudChldmVudCk7XHJcblxyXG4gICAgaWYgKGNhdGVnb3J5Py51cmwgPT09IFwiYmFja1wiKSB7XHJcbiAgICAgIGlmIChjYXRlZ29yeT8ucGFyZW50KSBxdWVyeS5jYXRlZ29yeSA9IGNhdGVnb3J5Py5wYXJlbnQudXJsO1xyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBkZWxldGUgcXVlcnkuY2F0ZWdvcnk7XHJcbiAgICAgIH1cclxuICAgICAgZGVsZXRlIHF1ZXJ5LmNhdGVnb3JpZXM7XHJcbiAgICAgIHJvdXRlci5wdXNoKHsgcXVlcnkgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBxdWVyeS5jYXRlZ29yeSA9IGNhdGVnb3J5Py51cmw7XHJcbiAgICAgIGlmIChxdWVyeT8uY2F0ZWdvcmllcykgcXVlcnkuY2F0ZWdvcmllcyA9IGNoaWxkVXJsO1xyXG4gICAgICBlbHNlIGRlbGV0ZSBxdWVyeS5jYXRlZ29yaWVzO1xyXG4gICAgICByb3V0ZXIucHVzaCh7IHF1ZXJ5IH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIGNhdGVnb3J5ID8gKFxyXG4gICAgPGFcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICAuLi5zdHlsZSxcclxuICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgICAgfX1cclxuICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICA+XHJcbiAgICAgIHtjYXRlZ29yeT8ubGFiZWwgPyBjYXRlZ29yeT8ubGFiZWwgOiBjYXRlZ29yeT8ubmFtZX1cclxuICAgIDwvYT5cclxuICApIDogbnVsbDtcclxufVxyXG4iLCJpbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xyXG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSBcIi4uL3NyYy9Mb2FkaW5nXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSW9Jb3NMaXN0LCBJb0lvc0Fycm93Um91bmRCYWNrIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcbmltcG9ydCB7IFNlbGxlckNvbnRleHQgfSBmcm9tIFwiLi4vc3JjL1NlbGxlclByb3ZpZGVyXCI7XHJcblxyXG5jb25zdCBHRVRfQ0FURUdPUklFUyA9IGdxbGBcclxuICBxdWVyeSgkc2VsbGVyOiBVc2VyV2hlcmVJbnB1dCwgJGNhdGVnb3J5OiBTdHJpbmcsICRyb290OiBCb29sZWFuKSB7XHJcbiAgICBhbGxDYXRlZ29yaWVzKFxyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIHNlbGxlcjogJHNlbGxlclxyXG4gICAgICAgIE9SOiBbeyB1cmw6ICRjYXRlZ29yeSB9LCB7IHBhcmVudF9pc19udWxsOiAkcm9vdCB9XVxyXG4gICAgICB9XHJcbiAgICApIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICBsYWJlbFxyXG4gICAgICB1cmxcclxuICAgICAgcGFyZW50IHtcclxuICAgICAgICB1cmxcclxuICAgICAgfVxyXG4gICAgICBjaGlsZHMge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIGxhYmVsXHJcbiAgICAgICAgdXJsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmV4cG9ydCBmdW5jdGlvbiBMaXN0KCkge1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlQ29udGV4dChTZWxsZXJDb250ZXh0KTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB7IGNhdGVnb3J5IH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlUXVlcnkoR0VUX0NBVEVHT1JJRVMsIHtcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICBzZWxsZXI6IHRoZW1lLnNlbGxlcixcclxuICAgICAgY2F0ZWdvcnksXHJcbiAgICAgIHJvb3Q6IGNhdGVnb3J5ID8gZmFsc2UgOiB0cnVlLFxyXG4gICAgfSxcclxuICB9KTtcclxuICBpZiAoZXJyb3IgfHwgbG9hZGluZykgcmV0dXJuIDxMb2FkaW5nIC8+O1xyXG4gIHJldHVybiAhbG9hZGluZyAmJiBkYXRhID8gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGg1IHN0eWxlPXt0aGVtZS5jc3MuaDV9PlxyXG4gICAgICAgIDxJb0lvc0xpc3Qgc3R5bGU9e3RoZW1lLmNzcy5pY29uSGVhZGVyfSAvPlxyXG4gICAgICAgIHtjYXRlZ29yeSA/IGRhdGE/LmFsbENhdGVnb3JpZXNbMF0/Lm5hbWUgOiBcIkRhbmggTeG7pWNcIn1cclxuICAgICAgPC9oNT5cclxuXHJcbiAgICAgIHtjYXRlZ29yeVxyXG4gICAgICAgID8gZGF0YT8uYWxsQ2F0ZWdvcmllc1swXT8uY2hpbGRzLm1hcCgoY2F0ZSkgPT4gKFxyXG4gICAgICAgICAgICA8SXRlbVxyXG4gICAgICAgICAgICAgIGtleT17Y2F0ZS5pZH1cclxuICAgICAgICAgICAgICBjYXRlZ29yeT17Y2F0ZX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygyKSB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICA6IGRhdGEuYWxsQ2F0ZWdvcmllc1xyXG4gICAgICAgICAgICA/LnNsaWNlKDAsIG9wZW4gPyBkYXRhLmFsbENhdGVnb3JpZXMubGVuZ3RoIDogNylcclxuICAgICAgICAgICAgLm1hcCgoY2F0ZWdvcnkpID0+IChcclxuICAgICAgICAgICAgICA8SXRlbVxyXG4gICAgICAgICAgICAgICAga2V5PXtjYXRlZ29yeS5pZH1cclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtjYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgIHtkYXRhPy5hbGxDYXRlZ29yaWVzPy5sZW5ndGggPiA3ID8gKFxyXG4gICAgICAgIG9wZW4gPyAoXHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX0gc3R5bGU9e3sgY29sb3I6IHRoZW1lLnByaW1hcnkgfX0+XHJcbiAgICAgICAgICAgIFLDunQgZ+G7jW5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gc2V0T3Blbih0cnVlKX0gc3R5bGU9e3sgY29sb3I6IHRoZW1lLnByaW1hcnkgfX0+XHJcbiAgICAgICAgICAgIFhlbSB0aMOqbVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIClcclxuICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICB7Y2F0ZWdvcnkgPyAoXHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgICAgICAgICBjb2xvcjogdGhlbWUucHJpbWFyeSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBxdWVyeSA9IHJvdXRlci5xdWVyeTtcclxuICAgICAgICAgICAgaWYgKGRhdGEuYWxsQ2F0ZWdvcmllc1swXT8ucGFyZW50KVxyXG4gICAgICAgICAgICAgIHF1ZXJ5LmNhdGVnb3J5ID0gZGF0YS5hbGxDYXRlZ29yaWVzWzBdLnBhcmVudC51cmw7XHJcbiAgICAgICAgICAgIGVsc2UgZGVsZXRlIHF1ZXJ5LmNhdGVnb3J5O1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCh7IHF1ZXJ5IH0pO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW9Jb3NBcnJvd1JvdW5kQmFjayAvPiBRdWF5IGzhuqFpXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvZGl2PlxyXG4gICkgOiBudWxsO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFNlbGxlckNvbnRleHQgfSBmcm9tIFwiLi4vc3JjL1NlbGxlclByb3ZpZGVyXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBJdGVtKHsgaGFzaHRhZywgc3R5bGUgfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlQ29udGV4dChTZWxsZXJDb250ZXh0KTtcclxuXHJcbiAgbGV0IHF1ZXJ5ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IGV4aXN0ID0gcXVlcnkuaGFzaHRhZyA9PSBoYXNodGFnLnVybDtcclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIHF1ZXJ5Lmhhc2h0YWcgPSBoYXNodGFnLnVybDtcclxuICAgIGlmIChoYXNodGFnLnVybCA9PT0gXCJhbGxcIikgZGVsZXRlIHF1ZXJ5Lmhhc2h0YWc7XHJcblxyXG4gICAgcm91dGVyLnB1c2goeyBwYXRobmFtZTogXCIvcG9zdHNcIiwgcXVlcnkgfSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGFcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICAuLi5zdHlsZSxcclxuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3IsXHJcbiAgICAgICAgZm9udFdlaWdodDogZXhpc3QgPyBcImJvbGRcIiA6IG51bGwsXHJcbiAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgfX1cclxuICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICA+XHJcbiAgICAgIHtoYXNodGFnLm5hbWV9XHJcbiAgICA8L2E+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XHJcblxyXG5pbXBvcnQgeyBnZXRFcnJvck1lc3NhZ2UgfSBmcm9tIFwiLi4vLi4vbGliL2NoaXBcIjtcclxuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gXCIuLi9zcmMvTG9hZGluZ1wiO1xyXG5cclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSW9Jb3NCb29rbWFyayB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xyXG5pbXBvcnQgeyBTZWxsZXJDb250ZXh0IH0gZnJvbSBcIi4uL3NyYy9TZWxsZXJQcm92aWRlclwiO1xyXG5jb25zdCBHRVRfSEFTSFRBR1MgPSBncWxgXHJcbiAgcXVlcnkoJHNlbGxlcjogVXNlcldoZXJlSW5wdXQpIHtcclxuICAgIGFsbEhhc2h0YWdzKHdoZXJlOiB7IHNlbGxlcjogJHNlbGxlciB9KSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgdXJsXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgZnVuY3Rpb24gTGlzdCgpIHtcclxuICBjb25zdCB0aGVtZSA9IHVzZUNvbnRleHQoU2VsbGVyQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVF1ZXJ5KEdFVF9IQVNIVEFHUywge1xyXG4gICAgdmFyaWFibGVzOiB7IHNlbGxlcjogdGhlbWUuc2VsbGVyIH0sXHJcbiAgfSk7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPExvYWRpbmcgLz47XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPGkgY29sb3I9XCJkYW5nZXJcIj57Z2V0RXJyb3JNZXNzYWdlKGVycm9yKX08L2k+O1xyXG4gIHJldHVybiAhbG9hZGluZyAmJiBkYXRhID8gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGg1IHN0eWxlPXt0aGVtZS5jc3MuaDV9PlxyXG4gICAgICAgIDxJb0lvc0Jvb2ttYXJrIHN0eWxlPXt0aGVtZS5jc3MuaWNvbkhlYWRlcn0gLz4gQsOgaSB2aeG6v3RcclxuICAgICAgPC9oNT5cclxuICAgICAgey8qIDxJdGVtIGhhc2h0YWc9e3sgaWQ6IFwiYWxsLWhhc2h0YWdcIiwgbmFtZTogXCJU4bqldCBD4bqjIFwiLCB1cmw6IFwiYWxsXCIgfX0gLz4gKi99XHJcbiAgICAgIHtkYXRhPy5hbGxIYXNodGFnc1xyXG4gICAgICAgID8uc2xpY2UoMCwgb3BlbiA/IGRhdGE/LmFsbEhhc2h0YWdzPy5sZW5naHQgOiA3KVxyXG4gICAgICAgIC5tYXAoKGhhc2h0YWcpID0+IChcclxuICAgICAgICAgIDxJdGVtXHJcbiAgICAgICAgICAgIGtleT17aGFzaHRhZy5pZH1cclxuICAgICAgICAgICAgaGFzaHRhZz17aGFzaHRhZ31cclxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICB7ZGF0YT8uYWxsSGFzaHRhZ3M/Lmxlbmd0aCA+IDcgPyAoXHJcbiAgICAgICAgb3BlbiA/IChcclxuICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oZmFsc2UpfSBzdHlsZT17eyBjb2xvcjogdGhlbWUucHJpbWFyeSB9fT5cclxuICAgICAgICAgICAgUsO6dCBn4buNblxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKHRydWUpfSBzdHlsZT17eyBjb2xvcjogdGhlbWUucHJpbWFyeSB9fT5cclxuICAgICAgICAgICAgWGVtIHRow6ptXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgKVxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvZGl2PlxyXG4gICkgOiBudWxsO1xyXG59XHJcbiIsImltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgSXRlbSBhcyBDYXRlZ29yeSB9IGZyb20gXCIuLi9DYXRlZ29yeS9pdGVtXCI7XHJcbmltcG9ydCB7IEl0ZW0gYXMgQXR0cmlidXRlIH0gZnJvbSBcIi4uL0F0dHJpYnV0ZS9pdGVtXCI7XHJcbmltcG9ydCB7IGZvcm1hdE1vbmV5IH0gZnJvbSBcIi4uLy4uL2xpYi9jaGlwXCI7XHJcblxyXG5pbXBvcnQgeyBJdGVtIGFzIEJyYW5kIH0gZnJvbSBcIi4uL0JyYW5kL2l0ZW1cIjtcclxuaW1wb3J0IHsgSW9Jb3NSZW1vdmVDaXJjbGVPdXRsaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTZWxsZXJDb250ZXh0IH0gZnJvbSBcIi4uL3NyYy9TZWxsZXJQcm92aWRlclwiO1xyXG5pbXBvcnQgeyBGcmFnbWVudCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5jb25zdCBHRVRfQ0FURSA9IGdxbGBcclxuICBxdWVyeSgkY2F0ZWdvcnk6IFN0cmluZywgJGF0dHJpYnV0ZXM6IFtTdHJpbmddLCAkYnJhbmQ6IFN0cmluZykge1xyXG4gICAgYWxsQ2F0ZWdvcmllcyh3aGVyZTogeyB1cmw6ICRjYXRlZ29yeSB9KSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgdXJsXHJcbiAgICB9XHJcbiAgICBhbGxBdHRyaWJ1dGVzKHdoZXJlOiB7IHVybF9pbjogJGF0dHJpYnV0ZXMgfSkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIHVybFxyXG4gICAgfVxyXG4gICAgYWxsQnJhbmRzKHdoZXJlOiB7IHVybDogJGJyYW5kIH0pIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICB1cmxcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBGaWx0ZXIgPSAoe1xyXG4gIGNhdGVnb3J5ID0gXCItXCIsXHJcbiAgYnJhbmQgPSBcIi1cIixcclxuICBzZWFyY2gsXHJcbiAgcHJpY2VfZnJvbSxcclxuICBwcmljZV90byxcclxuICBhdHRyaWJ1dGVzLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VDb250ZXh0KFNlbGxlckNvbnRleHQpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB2YXJpYWJsZXMgPSB7XHJcbiAgICBjYXRlZ29yeSxcclxuICAgIGF0dHJpYnV0ZXMsXHJcbiAgICBicmFuZCxcclxuICB9O1xyXG5cclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VRdWVyeShHRVRfQ0FURSwge1xyXG4gICAgdmFyaWFibGVzLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHJlbW92ZVNlYXJjaCA9ICgpID0+IHtcclxuICAgIGxldCBxdWVyeSA9IHJvdXRlci5xdWVyeTtcclxuICAgIGRlbGV0ZSBxdWVyeS5zZWFyY2g7XHJcbiAgICByb3V0ZXIucHVzaCh7IHF1ZXJ5IH0pO1xyXG4gIH07XHJcbiAgY29uc3QgcmVtb3ZlUHJpY2UgPSAoKSA9PiB7XHJcbiAgICBsZXQgcXVlcnkgPSByb3V0ZXIucXVlcnk7XHJcbiAgICBkZWxldGUgcXVlcnkucHJpY2VfZnJvbTtcclxuICAgIGRlbGV0ZSBxdWVyeS5wcmljZV90bztcclxuICAgIHJvdXRlci5wdXNoKHsgcXVlcnkgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiAwLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7c2VhcmNoID8gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3RoZW1lLmNzcy5maWx0ZXJ9PlxyXG4gICAgICAgICAgPGg2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgLi4udGhlbWUuY3NzLmg2LFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFTDrG0ga2nhur9tOlxyXG4gICAgICAgICAgPC9oNj5cclxuICAgICAgICAgIDxhIHN0eWxlPXt7IGNvbG9yOiB0aGVtZS5jb2xvciB9fT57c2VhcmNofTwvYT5cclxuICAgICAgICAgIDxJb0lvc1JlbW92ZUNpcmNsZU91dGxpbmVcclxuICAgICAgICAgICAgb25DbGljaz17cmVtb3ZlU2VhcmNofVxyXG4gICAgICAgICAgICBzdHlsZT17dGhlbWUuY3NzLnJlbW92ZUljb259XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogbnVsbH1cclxuICAgICAge3ByaWNlX3RvICE9IDk5OTk5OTk5OSA/IChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt0aGVtZS5jc3MuZmlsdGVyfT5cclxuICAgICAgICAgIDxoNlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIC4uLnRoZW1lLmNzcy5oNixcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBHacOhOlxyXG4gICAgICAgICAgPC9oNj5cclxuICAgICAgICAgIHtmb3JtYXRNb25leShwcmljZV9mcm9tKX0gLSB7Zm9ybWF0TW9uZXkocHJpY2VfdG8pfVxyXG4gICAgICAgICAgPElvSW9zUmVtb3ZlQ2lyY2xlT3V0bGluZVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtyZW1vdmVQcmljZX1cclxuICAgICAgICAgICAgc3R5bGU9e3RoZW1lLmNzcy5yZW1vdmVJY29ufVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICB7ZGF0YT8uYWxsQ2F0ZWdvcmllcy5sZW5ndGggPyAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17dGhlbWUuY3NzLmZpbHRlcn0+XHJcbiAgICAgICAgICA8aDZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAuLi50aGVtZS5jc3MuaDYsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRGFuaCBt4bulYzpcclxuICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICA8Q2F0ZWdvcnlcclxuICAgICAgICAgICAgY2F0ZWdvcnk9e2RhdGE/LmFsbENhdGVnb3JpZXNbMF19XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsIG1hcmdpbkJvdHRvbTogMCwgcGFkZGluZzogMCB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICAgIHtkYXRhPy5hbGxBdHRyaWJ1dGVzPy5sZW5ndGggPyAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17dGhlbWUuY3NzLmZpbHRlcn0+XHJcbiAgICAgICAgICA8aDZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAuLi50aGVtZS5jc3MuaDYsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVGh14buZYyBUw61uaDpcclxuICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICB7ZGF0YT8uYWxsQXR0cmlidXRlcy5tYXAoKGF0dHJpYnV0ZSkgPT4gKFxyXG4gICAgICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgPEF0dHJpYnV0ZVxyXG4gICAgICAgICAgICAgICAga2V5PXthdHRyaWJ1dGUuaWR9XHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGU9e2F0dHJpYnV0ZX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiaW5saW5lXCIsIG1hcmdpblJpZ2h0OiA4IH19XHJcbiAgICAgICAgICAgICAgICByZW1vdmVJY29uXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogbnVsbH1cclxuICAgICAge2RhdGE/LmFsbEJyYW5kcy5sZW5ndGggPyAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17dGhlbWUuY3NzLmZpbHRlcn0+XHJcbiAgICAgICAgICA8aDZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAuLi50aGVtZS5jc3MuaDYsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVGjGsMahbmcgSGnhu4d1OlxyXG4gICAgICAgICAgPC9oNj5cclxuICAgICAgICAgIDxCcmFuZFxyXG4gICAgICAgICAgICBicmFuZD17ZGF0YT8uYWxsQnJhbmRzWzBdfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBJb0lvc0hlYXJ0RW1wdHksIElvSW9zSGVhcnQgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcclxuaW1wb3J0IHsgTWRDb21wYXJlQXJyb3dzLCBNZERvbmVBbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcclxuaW1wb3J0IHtcclxuICByZW1vdmVXaXNoTGlzdEl0ZW0sXHJcbiAgYWRkUHJvZHVjdFRvTG9jYWxXaXNobGlzdCxcclxuICBhZGRQcm9kdWN0VG9Mb2NhbENvbXBhcmUsXHJcbn0gZnJvbSBcIi4uLy4uL2Fwb2xsby9hY3Rpb25cIjtcclxuaW1wb3J0IHsgdXNlUXVlcnksIGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgU2VsbGVyQ29udGV4dCB9IGZyb20gXCIuLi9zcmMvU2VsbGVyUHJvdmlkZXJcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJbWdQcm9kdWN0KHsgcHJvZHVjdCwgc3R5bGUsIG9uQ2xpY2sgfSkge1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlQ29udGV4dChTZWxsZXJDb250ZXh0KTtcclxuICBjb25zdCB7IGRhdGEgfSA9IHVzZVF1ZXJ5KGdxbGBcclxuICAgIHF1ZXJ5IHtcclxuICAgICAgd2lzaGxpc3QgQGNsaWVudFxyXG4gICAgfVxyXG4gIGApO1xyXG5cclxuICBjb25zdCBpc0luV2lzaGxpc3QgPSBkYXRhPy53aXNobGlzdD8uc29tZSgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcHJvZHVjdC5pZCk7XHJcblxyXG4gIGxldCBJbWdTcmNzID0gcHJvZHVjdD8uaW1hZ2VzIHx8IFtdO1xyXG4gIGlmIChwcm9kdWN0LmltYWdlKSB7XHJcbiAgICBJbWdTcmNzID0gW3sgZmlsZTogcHJvZHVjdC5pbWFnZSB9XS5jb25jYXQoSW1nU3Jjcyk7XHJcbiAgfVxyXG4gIEltZ1NyY3MgPSBJbWdTcmNzLm1hcCgoc3JjKSA9PiB0aGVtZS5zZXJ2ZXIgKyBzcmM/LmZpbGU/LnB1YmxpY1VybCk7XHJcbiAgaWYgKHByb2R1Y3QuYWx0SW1hZ2VzKSB7XHJcbiAgICBJbWdTcmNzID0gcHJvZHVjdC5hbHRJbWFnZXMuc3BsaXQoXCIsXCIpLmNvbmNhdChJbWdTcmNzKTtcclxuICB9XHJcbiAgY29uc3QgW2ltZ0luZGV4LCBzZXRJbWdJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBwb3NpdGlvbjogXCJpbmhlcml0XCIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9e0ltZ1NyY3NbaW1nSW5kZXhdID8gSW1nU3Jjc1tpbWdJbmRleF0gOiBcIi9pbWcvbm8taW1nLnBuZ1wifVxyXG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgICAgc3R5bGU9e3sgLi4uc3R5bGUsIHdpZHRoOiBcIjEwMCVcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgIGtleT17SW1nU3Jjc1tpbWdJbmRleF0/LmZpbGU/LnB1YmxpY1VybH1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIHsvKiBpY29uIHdpc2hsaXN0ICovfVxyXG4gICAgICA8aVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICBpc0luV2lzaGxpc3RcclxuICAgICAgICAgICAgPyByZW1vdmVXaXNoTGlzdEl0ZW0ocHJvZHVjdClcclxuICAgICAgICAgICAgOiBhZGRQcm9kdWN0VG9Mb2NhbFdpc2hsaXN0KHByb2R1Y3QpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0eWxlPXt0aGVtZS5jc3MuYnRuSWNvbigpfVxyXG4gICAgICA+XHJcbiAgICAgICAge2lzSW5XaXNobGlzdCA/IDxNZERvbmVBbGwgLz4gOiA8SW9Jb3NIZWFydEVtcHR5IC8+fVxyXG4gICAgICA8L2k+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IGZvcm1hdE1vbmV5IH0gZnJvbSBcIi4uLy4uL2xpYi9jaGlwXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vc3JjL0xpbmtcIjtcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlLCBGcmFnbWVudCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgSW1nUHJvZHVjdCB9IGZyb20gXCIuL2ltYWdlUHJvZHVjdFwiO1xyXG5pbXBvcnQgeyBGYWRlSW4gfSBmcm9tIFwiLi4vQW5pbWF0aW9ucy9GYWRlSW5cIjtcclxuaW1wb3J0IFJlYWN0R0EgZnJvbSBcInJlYWN0LWdhXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTZWxsZXJDb250ZXh0IH0gZnJvbSBcIi4uL3NyYy9TZWxsZXJQcm92aWRlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEl0ZW0gPSAoeyBwcm9kdWN0IH0pID0+IHtcclxuICBjb25zdCB0aGVtZSA9IHVzZUNvbnRleHQoU2VsbGVyQ29udGV4dCk7XHJcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8RmFkZUluPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIC4uLnRoZW1lLmNzcy5ib3gsXHJcbiAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEltZ1Byb2R1Y3RcclxuICAgICAgICAgIHByb2R1Y3Q9e3Byb2R1Y3R9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IDAsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogYCR7dGhlbWUuc3BhY2luZygxKX1weCAke3RoZW1lLnNwYWNpbmcoMSl9cHggMHB4IDBweGAsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL2RldGFpbFwiLFxyXG4gICAgICAgICAgICAgIHF1ZXJ5OiB7IGRldGFpbDogcHJvZHVjdC51cmwgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBldmVudCA9IHtcclxuICAgICAgICAgICAgICBjYXRlZ29yeTogXCJQcm9kdWN0XCIsXHJcbiAgICAgICAgICAgICAgYWN0aW9uOiBcInZpZXdcIixcclxuICAgICAgICAgICAgICB2YWx1ZTogcHJvZHVjdC5uYW1lLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgICAgIFJlYWN0R0EuZXZlbnQoZXZlbnQpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBocmVmPXt7XHJcbiAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL2RldGFpbFwiLFxyXG4gICAgICAgICAgICAgIHF1ZXJ5OiB7IGRldGFpbDogcHJvZHVjdC51cmwgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcixcclxuICAgICAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8cFxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBwcm9kdWN0LnNhbGUgPyBcImxpbmUtdGhyb3VnaFwiIDogXCJcIixcclxuICAgICAgICAgICAgICBjb2xvcjogcHJvZHVjdC5zYWxlID8gdGhlbWUuc2Vjb25kYXJ5IDogdGhlbWUucHJpbWFyeSxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogcHJvZHVjdC5zYWxlID8gXCIwLjhyZW1cIiA6IFwiMC44NXJlbVwiLFxyXG4gICAgICAgICAgICAgIGZsb2F0OiBwcm9kdWN0LnNhbGUgPyBcInJpZ2h0XCIgOiBcImRlZmF1bHRcIixcclxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiBwcm9kdWN0LnNhbGUgPyBcIm5vcm1hbFwiIDogXCJib2xkXCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDApLFxyXG4gICAgICAgICAgICAgIHdvcmRXcmFwOiBcImJyZWFrLXdvcmRcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2Zvcm1hdE1vbmV5KHByb2R1Y3QucHJpY2UpfVxyXG4gICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgIHtwcm9kdWN0LnNhbGUgPyAoXHJcbiAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5wcmltYXJ5LFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogc2hvdyA/IFwibm9uZVwiIDogXCJibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdoOiBcImJvbGRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjAuODVyZW1cIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygwKSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2Zvcm1hdE1vbmV5KHByb2R1Y3QucHJpY2UgLSBwcm9kdWN0LnNhbGUpfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICB7LyogPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBhZGRQcm9kdWN0VG9Mb2NhbENhcnQoeyBwcm9kdWN0IH0pO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFRow6ptIHbDoG8gZ2nhu49cclxuICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9GYWRlSW4+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgRnJhZ21lbnQsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSwgcmV3cml0ZVVSSUZvckdFVCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBJdGVtIGFzIFByb2R1Y3QgfSBmcm9tIFwiLi9pdGVtXCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIFNwaW5uZXIgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5cclxuaW1wb3J0IHsgdG9TbHVnIH0gZnJvbSBcIi4uLy4uL2xpYi9jaGlwXCI7XHJcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tIFwiLi4vc3JjL0xvYWRpbmdcIjtcclxuXHJcbmltcG9ydCB7IE1vcmVQcm9kdWN0cyB9IGZyb20gXCIuLi9VSS9tb3JlUHJvZHVjdHNcIjtcclxuXHJcbmltcG9ydCB7IFNlbGxlckNvbnRleHQgfSBmcm9tIFwiLi4vc3JjL1NlbGxlclByb3ZpZGVyXCI7XHJcbmNvbnN0IEdFVF9QUk9EVUNUUyA9IGdxbGBcclxuICBxdWVyeShcclxuICAgICRmaXJzdDogSW50XHJcbiAgICAkc2tpcDogSW50XHJcbiAgICAkY2F0ZWdvcnk6IFN0cmluZ1xyXG4gICAgJGNhdGVnb3JpZXM6IFtTdHJpbmddXHJcbiAgICAkYnJhbmQ6IEJyYW5kV2hlcmVJbnB1dFxyXG4gICAgJG9yZGVyQnk6IFN0cmluZ1xyXG4gICAgJHN1Z2dlc3Rpb25zOiBQcm9kdWN0U3VnZ2VzdGlvblR5cGVcclxuICAgICRzZWxsZXI6IFVzZXJXaGVyZUlucHV0XHJcbiAgICAkc2FsZV9ndDogSW50XHJcbiAgICAkcHJpY2VfZnJvbTogSW50XHJcbiAgICAkcHJpY2VfdG86IEludFxyXG4gICAgJGtleXdvcmQ6IFN0cmluZ1xyXG4gICAgJGV4Y2VwdDogU3RyaW5nXHJcbiAgKSB7XHJcbiAgICBhbGxQcm9kdWN0cyhcclxuICAgICAgZmlyc3Q6ICRmaXJzdFxyXG4gICAgICBza2lwOiAkc2tpcFxyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIEFORDogW1xyXG4gICAgICAgICAgeyB1cmxfY29udGFpbnM6ICRrZXl3b3JkIH1cclxuICAgICAgICAgIHsgY2F0ZWdvcnk6IHsgT1I6IFt7IHVybDogJGNhdGVnb3J5IH0sIHsgdXJsX2luOiAkY2F0ZWdvcmllcyB9XSB9IH1cclxuICAgICAgICAgIHsgYnJhbmQ6ICRicmFuZCB9XHJcbiAgICAgICAgICB7IHN1Z2dlc3Rpb25zOiAkc3VnZ2VzdGlvbnMgfVxyXG4gICAgICAgICAgeyBzZWxsZXI6ICRzZWxsZXIgfVxyXG4gICAgICAgICAgeyBzYWxlX2d0OiAkc2FsZV9ndCB9XHJcbiAgICAgICAgICB7IHByaWNlX2d0OiAkcHJpY2VfZnJvbSB9XHJcbiAgICAgICAgICB7IHByaWNlX2x0OiAkcHJpY2VfdG8gfVxyXG4gICAgICAgICAgeyB1cmxfbm90OiAkZXhjZXB0IH1cclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgICAgb3JkZXJCeTogJG9yZGVyQnlcclxuICAgICkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIGltYWdlIHtcclxuICAgICAgICBwdWJsaWNVcmxcclxuICAgICAgfVxyXG4gICAgICBpbWFnZXMge1xyXG4gICAgICAgIGZpbGUge1xyXG4gICAgICAgICAgcHVibGljVXJsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGFsdEltYWdlc1xyXG4gICAgICBwcmljZVxyXG4gICAgICBzYWxlXHJcbiAgICAgIHVybFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IExpc3QgPSAoe1xyXG4gIHRpdGxlID0gXCJcIixcclxuICBmaXJzdCA9IDQsXHJcbiAgc2tpcCA9IDAsXHJcbiAgY2F0ZWdvcnksXHJcbiAgY2F0ZWdvcmllcyxcclxuICBicmFuZCA9IFwiXCIsXHJcbiAgYXR0cmlidXRlcyxcclxuICBvcmRlckJ5LFxyXG4gIHN1Z2dlc3Rpb25zLFxyXG4gIHNhbGUsXHJcbiAgcHJpY2VfZnJvbSA9IDAsXHJcbiAgcHJpY2VfdG8sXHJcbiAgeHMsXHJcbiAgc20sXHJcbiAgbWQsXHJcbiAgbGcsXHJcbiAgeGwsXHJcbiAgbW9yZSA9IHRydWUsXHJcbiAgc2VhcmNoLFxyXG4gIGV4Y2VwdCxcclxuICBjZW50ZXIsXHJcbn0pID0+IHtcclxuICBjb25zdCB0aGVtZSA9IHVzZUNvbnRleHQoU2VsbGVyQ29udGV4dCk7XHJcbiAgbGV0IHZhcmlhYmxlcyA9IHtcclxuICAgIGZpcnN0LFxyXG4gICAgc2tpcCxcclxuICAgIGNhdGVnb3J5LFxyXG4gICAgY2F0ZWdvcmllcyxcclxuICAgIGJyYW5kOiBicmFuZCA/IHsgdXJsX2NvbnRhaW5zOiBicmFuZCB9IDogbnVsbCxcclxuICAgIGF0dHJpYnV0ZXMsXHJcbiAgICBvcmRlckJ5LFxyXG4gICAgc3VnZ2VzdGlvbnMsXHJcbiAgICBzZWxsZXI6IHRoZW1lLnNlbGxlcixcclxuICAgIHByaWNlX2Zyb20sXHJcbiAgICBwcmljZV90bzogcHJpY2VfdG8gPyBwcmljZV90byA6IDk5OTk5OTk5OSxcclxuICAgIGV4Y2VwdCxcclxuICB9O1xyXG4gIGlmIChzZWFyY2gpIHZhcmlhYmxlcy5rZXl3b3JkID0gdG9TbHVnKHNlYXJjaCk7XHJcbiAgaWYgKHNhbGUpIHZhcmlhYmxlcy5zYWxlX2d0ID0gMDtcclxuICBsZXQgeyBkYXRhLCBlcnJvciwgbG9hZGluZywgZmV0Y2hNb3JlIH0gPSB1c2VRdWVyeShHRVRfUFJPRFVDVFMsIHtcclxuICAgIHZhcmlhYmxlcyxcclxuICB9KTtcclxuICBsZXQgW29uLCBzZXRPbl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBsZXQgd2lkdGggPSAwO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBmZXRjaCBtb3JlIGRhdGFcclxuICAgIGlmIChtb3JlKSB7XHJcbiAgICAgIGNvbnN0IHByb2R1Y3RzRWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0c1wiKTtcclxuICAgICAgLy8gaGlnaHQgb2YgZWxlbWVudCAtIHNjcm9sbFRvcCA8IHdpbmRvdyBoZWlnaHQgP1xyXG4gICAgICBjb25zdCBhbHBoYSA9ICgpID0+XHJcbiAgICAgICAgcHJvZHVjdHNFbGU/LmNsaWVudEhlaWdodCAtXHJcbiAgICAgICAgZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3AgLVxyXG4gICAgICAgIHdpbmRvdy5pbm5lckhlaWdodCArXHJcbiAgICAgICAgMTUwO1xyXG4gICAgICAvLyBsb2FkaW5nIGRvbmVcclxuICAgICAgbGV0IGFsID0gYWxwaGEoKTtcclxuICAgICAgaWYgKGFsID4gMCkgc2V0T24oZmFsc2UpO1xyXG4gICAgICBpZiAob24gJiYgIWxvYWRpbmcgJiYgYWwgPCAwKSB7XHJcbiAgICAgICAgbG9hZGluZ01vcmUoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgd2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChhbHBoYSgpIDwgMCAmJiAhb24pIHNldE9uKHRydWUpO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgaWYgKCF3aWR0aCkgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICB9KTtcclxuICBmdW5jdGlvbiBsb2FkaW5nTW9yZSgpIHtcclxuICAgIGNvbnN0IGNvdW50ID0gZGF0YT8uYWxsUHJvZHVjdHM/Lmxlbmd0aDtcclxuICAgIHZhcmlhYmxlcy5za2lwID0gY291bnQ7XHJcbiAgICB0cnkge1xyXG4gICAgICBmZXRjaE1vcmUoe1xyXG4gICAgICAgIHZhcmlhYmxlcyxcclxuICAgICAgICB1cGRhdGVRdWVyeTogKHByZXYsIHsgZmV0Y2hNb3JlUmVzdWx0IH0pID0+IHtcclxuICAgICAgICAgIGlmICghZmV0Y2hNb3JlUmVzdWx0LmFsbFByb2R1Y3RzPy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByZXY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldiwge1xyXG4gICAgICAgICAgICBhbGxQcm9kdWN0czogWy4uLnByZXYuYWxsUHJvZHVjdHMsIC4uLmZldGNoTW9yZVJlc3VsdC5hbGxQcm9kdWN0c10sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgfVxyXG4gIGlmIChlcnJvciB8fCBsb2FkaW5nKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMykgfX0+XHJcbiAgICAgICAgPExvYWRpbmcgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIHJldHVybiBkYXRhPy5hbGxQcm9kdWN0cz8ubGVuZ3RoID8gKFxyXG4gICAgPHNlY3Rpb25cclxuICAgICAgaWQ9XCJwcm9kdWN0c1wiXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHt0aXRsZSA/IChcclxuICAgICAgICA8aDJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIC4uLnRoZW1lLmNzcy5oMixcclxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNSksXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgICAgPFJvdyBub0d1dHRlcnMgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgIHtkYXRhLmFsbFByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgPENvbFxyXG4gICAgICAgICAgICBrZXk9e3Byb2R1Y3QuaWR9XHJcbiAgICAgICAgICAgIHhzPXtkYXRhPy5hbGxQcm9kdWN0cz8ubGVuZ3RoID4gMiA/ICh4cyA/IHhzIDogNikgOiAxMn1cclxuICAgICAgICAgICAgc209e2RhdGE/LmFsbFByb2R1Y3RzPy5sZW5ndGggPiAyID8gKHNtID8gc20gOiA2KSA6IDZ9XHJcbiAgICAgICAgICAgIG1kPXtkYXRhPy5hbGxQcm9kdWN0cz8ubGVuZ3RoID4gMiA/IChtZCA/IG1kIDogNCkgOiA0fVxyXG4gICAgICAgICAgICBsZz17ZGF0YT8uYWxsUHJvZHVjdHM/Lmxlbmd0aCA+IDIgPyAobGcgPyBsZyA6IDMpIDogM31cclxuICAgICAgICAgICAgeGw9e2RhdGE/LmFsbFByb2R1Y3RzPy5sZW5ndGggPiAyID8gKHhsID8geGwgOiAyKSA6IDN9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogd2lkdGggPD0gNzY4ICYmIHdpZHRoICE9IDAgPyAzIDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAwLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8UHJvZHVjdCBwcm9kdWN0PXtwcm9kdWN0fSAvPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICkgOiAoXHJcbiAgICA8cCBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+S2jDtG5nIGPDsyBr4bq/dCBxdeG6oyE8L3A+XHJcbiAgKTtcclxufTtcclxuIiwiLy8gc2VhcmNoIGluIG5hdlxyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCB7IFNlbGxlckNvbnRleHQgfSBmcm9tIFwiLi4vc3JjL1NlbGxlclByb3ZpZGVyXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2VhcmNoKHsgc3R5bGUgfSkge1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlQ29udGV4dChTZWxsZXJDb250ZXh0KTtcclxuICBjb25zdCBbc2VhcmNoSW5wdXQsIHNldFNlYXJjaElucHV0XSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtXHJcbiAgICAgIGlubGluZVxyXG4gICAgICBvblN1Ym1pdD17KGUpID0+IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBQcmV2ZW50IHN1Ym1pdCBmcm9tIHJlbG9hZGluZyB0aGUgcGFnZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKHsgcGF0aG5hbWU6IFwiL3Byb2R1Y3RzXCIsIHF1ZXJ5OiB7IHNlYXJjaDogc2VhcmNoSW5wdXQgfSB9KTtcclxuICAgICAgfX1cclxuICAgICAgYWN0aW9uPVwiXCJcclxuICAgICAgc3R5bGU9e3sgLi4uc3R5bGUgfX1cclxuICAgID5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJUw6xtIHPhuqNuIHBo4bqpbS4uLlwiXHJcbiAgICAgICAgbmFtZT1cInNlYXJjaFwiXHJcbiAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgc2V0U2VhcmNoSW5wdXQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIHN0eWxlPXt7IC4uLnRoZW1lLmNzcy5pbnB1dCwgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgIC8+XHJcbiAgICA8L0Zvcm0+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgZm9ybWF0TW9uZXkgfSBmcm9tIFwiLi4vLi4vbGliL2NoaXBcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IHsgTGlzdCBhcyBBdHRyaWJ1dGVzIH0gZnJvbSBcIi4uL0F0dHJpYnV0ZS9saXN0XCI7XHJcbmltcG9ydCB7IExpc3QgYXMgQ2F0ZWdvcmllcyB9IGZyb20gXCIuLi9DYXRlZ29yeS9saXN0XCI7XHJcbmltcG9ydCB7IExpc3QgYXMgQnJhbmRzIH0gZnJvbSBcIi4uL0JyYW5kL2xpc3RcIjtcclxuaW1wb3J0IHsgTGlzdCBhcyBIYXNodGFncyB9IGZyb20gXCIuLi9IYXNodGFnL2xpc3RcIjtcclxuaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSBcIi4uL1NlYXJjaC9pbmRleFwiO1xyXG5pbXBvcnQgUmVhY3RHQSBmcm9tIFwicmVhY3QtZ2FcIjtcclxuXHJcbmltcG9ydCB7IElvSW9zU2VhcmNoLCBJb0lvc1ByaWNldGFnIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcbmltcG9ydCB7IFNlbGxlckNvbnRleHQgfSBmcm9tIFwiLi4vc3JjL1NlbGxlclByb3ZpZGVyXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2lkZWJhcigpIHtcclxuICBjb25zdCB0aGVtZSA9IHVzZUNvbnRleHQoU2VsbGVyQ29udGV4dCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgbGV0IHF1ZXJ5ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IHByaWNlX2Zyb20gPSBxdWVyeS5wcmljZV9mcm9tID8gTnVtYmVyKHF1ZXJ5LnByaWNlX2Zyb20pIDogMDtcclxuICBjb25zdCBwcmljZV90byA9IHF1ZXJ5LnByaWNlX3RvID8gTnVtYmVyKHF1ZXJ5LnByaWNlX3RvKSA6IDA7XHJcbiAgLy9cclxuICBjb25zdCBbcHJpY2VGcm9tLCBzZXRQcmljZUZyb21dID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3ByaWNlVG8sIHNldFByaWNlVG9dID0gdXNlU3RhdGUoOTk5OTk5OTkpO1xyXG4gIC8vXHJcbiAgY29uc3Qgb25TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBQcmV2ZW50IHN1Ym1pdCBmcm9tIHJlbG9hZGluZyB0aGUgcGFnZVxyXG4gICAgICovXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgcXVlcnkucHJpY2VfZnJvbSA9IHByaWNlRnJvbTtcclxuICAgIHF1ZXJ5LnByaWNlX3RvID0gcHJpY2VUbztcclxuICAgIHJvdXRlci5wdXNoKHsgcXVlcnkgfSk7XHJcbiAgfTtcclxuICBjb25zdCBbY29sbGFwc2VkLCBzZXRDb2xsYXBzZWRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgdG9wID0gdXNlUmVmKG51bGwpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgey8qIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgaGVpZ2h0OiBcIjkwdmhcIixcclxuICAgICAgICAgIG92ZXJmbG93WTogXCJzY3JvbGxcIixcclxuICAgICAgICAgIGRpcmVjdGlvbjogXCJydGxcIixcclxuICAgICAgICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXJlY3Rpb246IFwibHRyXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID4gKi99XHJcbiAgICAgIDxkaXYgc3R5bGU9e3RoZW1lLmNzcy5ib3h9PlxyXG4gICAgICAgIDxoNSBzdHlsZT17dGhlbWUuY3NzLmg1fT5cclxuICAgICAgICAgIDxJb0lvc1NlYXJjaCBzdHlsZT17dGhlbWUuY3NzLmljb25IZWFkZXJ9IC8+XHJcbiAgICAgICAgICBUw6xtIEtp4bq/bVxyXG4gICAgICAgIDwvaDU+XHJcbiAgICAgICAgPFNlYXJjaCBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygzKSB9fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzdHlsZT17dGhlbWUuY3NzLmJveH0+XHJcbiAgICAgICAgPENhdGVnb3JpZXMgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiBLSE9BTkcgR0lBICovfVxyXG5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBhY3Rpb249XCJcIiBzdHlsZT17dGhlbWUuY3NzLmJveH0+XHJcbiAgICAgICAgPGg1IHN0eWxlPXt0aGVtZS5jc3MuaDV9PlxyXG4gICAgICAgICAgPElvSW9zUHJpY2V0YWcgc3R5bGU9e3RoZW1lLmNzcy5pY29uSGVhZGVyfSAvPlxyXG4gICAgICAgICAgR2nDoVxyXG4gICAgICAgIDwvaDU+XHJcbiAgICAgICAge3RoZW1lLnByaWNlcy5tYXAoKHByaWNlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgY2hvb3NlZCA9IE51bWJlcihxdWVyeS5wcmljZV90bykgPT09IHByaWNlO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjAuOHJlbVwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygzKSxcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLmNvbG9yfWAsXHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogY2hvb3NlZCA/IDcwMCA6IDMwMCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBjaG9vc2VkID8gdGhlbWUucHJpbWFyeSA6IHRoZW1lLmNvbG9yLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcXVlcnkucHJpY2VfZnJvbSA9IGluZGV4ID4gMCA/IHRoZW1lLnByaWNlc1tpbmRleCAtIDFdIDogMDtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5LnByaWNlX3RvID0gcHJpY2U7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZXZlbnQgPSB7XHJcbiAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIlByaWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJmaWx0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgdmFsdWU6IHByaWNlLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIFJlYWN0R0EuZXZlbnQoZXZlbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKHsgcXVlcnkgfSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtpbmRleCA+IDAgPyBmb3JtYXRNb25leSh0aGVtZS5wcmljZXNbaW5kZXggLSAxXSkgOiAwfVxyXG4gICAgICAgICAgICAgIHtcIiAtIFwifVxyXG4gICAgICAgICAgICAgIHtmb3JtYXRNb25leShwcmljZSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICB7LyogICAgICA8ZGl2IHN0eWxlPXt0aGVtZS5jc3MuYm94fT5cclxuICAgICAgICA8QXR0cmlidXRlcyAvPlxyXG4gICAgICA8L2Rpdj4qL31cclxuICAgICAgPGRpdiBzdHlsZT17dGhlbWUuY3NzLmJveH0+XHJcbiAgICAgICAgPEJyYW5kcyAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzdHlsZT17dGhlbWUuY3NzLmJveH0+XHJcbiAgICAgICAgPEhhc2h0YWdzIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogPC9kaXY+ICovfVxyXG5cclxuICAgICAgey8qIDwvZGl2PiAqL31cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vc3JjL0xpbmtcIjtcclxuaW1wb3J0IHsgSW9Jb3NCYXNrZXQgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTZWxsZXJDb250ZXh0IH0gZnJvbSBcIi4uL3NyYy9TZWxsZXJQcm92aWRlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1vcmVQcm9kdWN0cyA9ICgpID0+IHtcclxuICBjb25zdCB0aGVtZSA9IHVzZUNvbnRleHQoU2VsbGVyQ29udGV4dCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rXHJcbiAgICAgIHN0eWxlPXt7IGNvbG9yOiB0aGVtZS5wcmltYXJ5LCBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNCkgfX1cclxuICAgICAgaHJlZj17eyBwYXRobmFtZTogXCIvcHJvZHVjdHNcIiB9fVxyXG4gICAgPlxyXG4gICAgICA8SW9Jb3NCYXNrZXQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyLCBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSB9fSAvPlxyXG4gICAgICBYZW0gU+G6o24gUGjhuqltXHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IE5leHRMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlU3ByaW5nIH0gZnJvbSBcInJlYWN0LXNwcmluZ1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rID0gKHsgY2hpbGRyZW4sIHN0eWxlLCBocmVmID0gXCJcIiwgb25DbGljayB9KSA9PiB7XHJcbiAgY29uc3QgbGluayA9IChcclxuICAgIDxhIHN0eWxlPXt7IC4uLnN0eWxlLCBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH19IG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2E+XHJcbiAgKTtcclxuICByZXR1cm4gaHJlZiA/IDxOZXh0TGluayBocmVmPXtocmVmfT57bGlua308L05leHRMaW5rPiA6IGxpbms7XHJcbn07XHJcbiIsImltcG9ydCB7IHVzZVNwcmluZywgYW5pbWF0ZWQgfSBmcm9tIFwicmVhY3Qtc3ByaW5nXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTG9hZGluZygpIHtcclxuICBjb25zdCBwcm9wcyA9IHVzZVNwcmluZyh7XHJcbiAgICBvcGFjaXR5OiAxLFxyXG4gICAgZnJvbTogeyBvcGFjaXR5OiAwIH0sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxhbmltYXRlZC5kaXYgc3R5bGU9e3Byb3BzfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLDAsMCwwLjA1KVwiLFxyXG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgIG1pbkhlaWdodDogMjAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgID48L2Rpdj5cclxuICAgIDwvYW5pbWF0ZWQuZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBRdWVyeSA9ICh7IHF1ZXJ5LCB2YXJpYWJsZXMsIGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShxdWVyeSwgeyB2YXJpYWJsZXMgfSk7XHJcbiAgcmV0dXJuIGNoaWxkcmVuKHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSk7XHJcbn07XHJcbiIsImltcG9ydCB7IGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCIuL1F1ZXJ5XCI7XHJcbmV4cG9ydCBjb25zdCBTZWxsZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdEdBIGZyb20gXCJyZWFjdC1nYVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IGxldmVsID0gWzAsIDUsIDgsIDEzLCAyMSwgMzQsIDU1LCA4OV07XHJcbmNvbnN0IHByaWNlcyA9IFsxMDAwMDAsIDIwMDAwMCwgNTAwMDAwLCAxMDAwMDAwLCAyMDAwMDAwXTtcclxuY29uc3Qgc3BhY2luZyA9IChpKSA9PiBsZXZlbFtpXTtcclxuY29uc3QgdXJpID1cclxuICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcclxuICAgID8gXCJodHRwczovL2Vjb21tZXJjZS5sb2Fsb2EudGVjaFwiXHJcbiAgICA6IFwiaHR0cDovL2xvY2FsaG9zdDo2MDA3XCI7XHJcbmV4cG9ydCBjb25zdCBTZWxsZXJQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbaXNMb2FkLCBzZXRJc0xvYWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtHQSwgc2V0R0FdID0gdXNlU3RhdGUoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKEdBICYmICFpc0xvYWQpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJpbml0XCIsIEdBKTtcclxuICAgICAgUmVhY3RHQS5pbml0aWFsaXplKEdBKTtcclxuICAgICAgc2V0SXNMb2FkKHRydWUpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuICAgIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgICBSZWFjdEdBLnBhZ2V2aWV3KHVybCk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxRdWVyeVxyXG4gICAgICBxdWVyeT17Z3FsYFxyXG4gICAgICAgIHF1ZXJ5KCRob3N0OiBTdHJpbmcpIHtcclxuICAgICAgICAgIGFsbFVzZXJzKHdoZXJlOiB7IGhvc3Q6ICRob3N0IH0pIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgZW1haWxcclxuICAgICAgICAgICAgZmlsZSB7XHJcbiAgICAgICAgICAgICAgcHVibGljVXJsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbG9nbyB7XHJcbiAgICAgICAgICAgICAgcHVibGljVXJsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RvcmVcclxuICAgICAgICAgICAgc2xvZ2FuXHJcbiAgICAgICAgICAgIGludHJvXHJcbiAgICAgICAgICAgIGNvbnRhY3RcclxuICAgICAgICAgICAgY29sb3JcclxuICAgICAgICAgICAgcHJpbWFyeVxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JcclxuICAgICAgICAgICAgcHJvZHVjdEJhY2tncm91bmRDb2xvclxyXG4gICAgICAgICAgICBwYWdlSWRcclxuICAgICAgICAgICAgZ29vZ2xlSWRcclxuICAgICAgICAgICAgcGhvbmVcclxuICAgICAgICAgICAgZW1haWxcclxuICAgICAgICAgICAgYWRkcmVzc1xyXG4gICAgICAgICAgICBwcmljZXNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9XHJcbiAgICAgIHZhcmlhYmxlcz17e1xyXG4gICAgICAgIGhvc3Q6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cubG9jYXRpb24uaG9zdCA6IG51bGwsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHsoeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGhlbWUgPSBkYXRhPy5hbGxVc2Vyc1swXTtcclxuICAgICAgICBpZiAodGhlbWUpIHtcclxuICAgICAgICAgIHNldEdBKHRoZW1lLmdvb2dsZUlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoZW1lID8gKFxyXG4gICAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICA8dGl0bGU+XHJcbiAgICAgICAgICAgICAgICB7dGhlbWUuc3RvcmV9IHwge3RoZW1lLnNsb2dhbn1cclxuICAgICAgICAgICAgICA8L3RpdGxlPlxyXG4gICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3RoZW1lLmludHJvfSAvPlxyXG4gICAgICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlXCJcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3VyaSArIHRoZW1lPy5maWxlPy5wdWJsaWNVcmx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgICAgcmVsPVwiaWNvblwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcclxuICAgICAgICAgICAgICAgIGhyZWY9e3VyaSArIHRoZW1lPy5sb2dvPy5wdWJsaWNVcmx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8U2VsbGVyQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgICAgICAuLi50aGVtZSxcclxuICAgICAgICAgICAgICAgIHNlcnZlcjpcclxuICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcImh0dHBzOi8vZWNvbW1lcmNlLmxvYWxvYS50ZWNoXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiaHR0cDovL2xvY2FsaG9zdDo2MDA3XCIsXHJcbiAgICAgICAgICAgICAgICBzZWxsZXI6IHsgaWQ6IHRoZW1lLmlkIH0sXHJcbiAgICAgICAgICAgICAgICBzcGFjaW5nLFxyXG4gICAgICAgICAgICAgICAgcHJpY2VzOiB0aGVtZS5wcmljZXNcclxuICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wcmljZXNcclxuICAgICAgICAgICAgICAgICAgICAgID8ucmVwbGFjZSgvIC9nLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KFwiLFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLm1hcCgoZSkgPT4gTnVtYmVyKGUpKVxyXG4gICAgICAgICAgICAgICAgICA6IFtdLFxyXG4gICAgICAgICAgICAgICAgY3NzOiBjc3ModGhlbWUpLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmJhY2tncm91bmRDb2xvcixcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvU2VsbGVyQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgKSA6IG51bGw7XHJcbiAgICAgIH19XHJcbiAgICA8L1F1ZXJ5PlxyXG4gICk7XHJcbn07XHJcbmNvbnN0IGNzcyA9ICh0aGVtZSkgPT4gKHtcclxuICBidG5JY29uOiAodG9wID0gLTUsIGNvbG9yID0gdGhlbWUuYmFja2dyb3VuZENvbG9yKSA9PiAoe1xyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIHRvcCxcclxuICAgIHJpZ2h0OiAtNSxcclxuICAgIHBhZGRpbmc6IDMsXHJcbiAgICBwYWRkaW5nVG9wOiA1LFxyXG4gICAgd2lkdGg6IDMwLFxyXG4gICAgaGVpZ2h0OiAzMCxcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgY29sb3IsXHJcbiAgICBmb250V2VpZ2h0OiA4MDAsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnByaW1hcnksXHJcbiAgfSksXHJcbiAgaW5wdXQ6IHtcclxuICAgIGRpc3BsYXk6IFwiYmxvY2staW5saW5lXCIsXHJcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZT8ucHJvZHVjdEJhY2tncm91bmRDb2xvcn1gLFxyXG4gICAgcGFkZGluZzogc3BhY2luZygxKSxcclxuICAgIHBhZGRpbmdMZWZ0OiBzcGFjaW5nKDMpLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBzcGFjaW5nKDIpLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZT8uYmFja2dyb3VuZENvbG9yLFxyXG4gICAgY29sb3I6IHRoZW1lLmNvbG9yLFxyXG4gIH0sXHJcbiAgYnRuSW5saW5lOiB7XHJcbiAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wcmltYXJ5LFxyXG4gICAgY29sb3I6IHRoZW1lLmJhY2tncm91bmRDb2xvcixcclxuICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IDM1LFxyXG4gICAgbWluV2lkdGg6IDM1LFxyXG4gIH0sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICBjb2xvcjogdGhlbWUuYmFja2dyb3VuZENvbG9yLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wcmltYXJ5LFxyXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUucHJpbWFyeX1gLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBzcGFjaW5nKDIpLFxyXG4gICAgcGFkZGluZ1RvcDogc3BhY2luZygxKSxcclxuICAgIHBhZGRpbmdCb3R0b206IHNwYWNpbmcoMSksXHJcbiAgICBtYXJnaW5Cb3R0b206IHNwYWNpbmcoMiksXHJcbiAgfSxcclxuICBidG5PdXRsaW5lOiB7XHJcbiAgICBjb2xvcjogdGhlbWUucHJpbWFyeSxcclxuXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmJhY2tncm91bmRDb2xvcixcclxuICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLnByaW1hcnl9YCxcclxuICAgIGJvcmRlclJhZGl1czogc3BhY2luZygyKSxcclxuICAgIHBhZGRpbmdUb3A6IHNwYWNpbmcoMSksXHJcbiAgICBwYWRkaW5nQm90dG9tOiBzcGFjaW5nKDEpICsgMSxcclxuICAgIG1hcmdpbkJvdHRvbTogc3BhY2luZygyKSxcclxuICB9LFxyXG4gIGg1OiB7XHJcbiAgICBjb2xvcjogdGhlbWUucHJpbWFyeSxcclxuICAgIGZvbnRTaXplOiBcIjAuODdyZW1cIixcclxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgbWFyZ2luQm90dG9tOiBzcGFjaW5nKDMpLFxyXG4gIH0sXHJcbiAgaDY6IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wcmltYXJ5LFxyXG4gICAgZm9udFNpemU6IFwiMC44cmVtXCIsXHJcbiAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxyXG4gICAgbWFyZ2luOiAwLFxyXG4gICAgcGFkZGluZzogMCxcclxuICB9LFxyXG4gIGgxOiB7XHJcbiAgICBjb2xvcjogdGhlbWUucHJpbWFyeSxcclxuICB9LFxyXG4gIGgyOiB7XHJcbiAgICBmb250U2l6ZTogXCIxLjVyZW1cIixcclxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcclxuICAgIGNvbG9yOiB0aGVtZS5wcmltYXJ5LFxyXG4gICAgbWFyZ2luQm90dG9tOiBzcGFjaW5nKDIpLFxyXG4gIH0sXHJcbiAgYToge1xyXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gIH0sXHJcbiAgYm94OiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnByb2R1Y3RCYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICBtYXJnaW5Cb3R0b206IHNwYWNpbmcoNCksXHJcbiAgICBwYWRkaW5nOiBzcGFjaW5nKDMpLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBzcGFjaW5nKDEpLFxyXG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMDUpXCIsXHJcbiAgICBib3hTaGFkb3c6IFwiNXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjAzKVwiLFxyXG4gIH0sXHJcbiAgZmlsdGVyOiB7XHJcbiAgICBjb2xvcjogdGhlbWUuY29sb3IsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnByb2R1Y3RCYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICBib3JkZXJSYWRpdXM6IHNwYWNpbmcoMSksXHJcbiAgICBib3JkZXI6IFwiMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4wNSlcIixcclxuXHJcbiAgICBwYWRkaW5nOiBzcGFjaW5nKDIpLFxyXG4gICAgcGFkZGluZ0xlZnQ6IHNwYWNpbmcoMyksXHJcbiAgICBwYWRkaW5nUmlnaHQ6IHNwYWNpbmcoMyksXHJcbiAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgYm94U2hhZG93OiBcIjVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4wMylcIixcclxuICAgIG1hcmdpbkJvdHRvbTogc3BhY2luZygzKSxcclxuICAgIG1hcmdpbkxlZnQ6IHNwYWNpbmcoMyksXHJcbiAgICBmb250U2l6ZTogXCIwLjlyZW1cIixcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgfSxcclxuICBpY29uOiB7XHJcbiAgICBjb2xvcjogdGhlbWUuY29sb3IsXHJcbiAgfSxcclxuICBpY29uSGVhZGVyOiB7XHJcbiAgICBmb250U2l6ZTogXCIxcmVtXCIsXHJcbiAgICBtYXJnaW5SaWdodDogc3BhY2luZygyKSxcclxuICAgIG1hcmdpbkJvdHRvbTogc3BhY2luZygxKSxcclxuICB9LFxyXG4gIGljb25Cb3JkZXI6IHtcclxuICAgIGJvcmRlclJhZGl1czogMzUsXHJcbiAgICBjb2xvcjogdGhlbWUucHJpbWFyeSxcclxuICAgIHdpZHRoOiAzNSxcclxuICAgIGhlaWdodDogMzUsXHJcbiAgICBwYWRkaW5nOiA4LFxyXG4gICAgZm9udFNpemU6IFwiMXJlbVwiLFxyXG4gIH0sXHJcbiAgcmVtb3ZlSWNvbjoge1xyXG4gICAgbWFyZ2luVG9wOiAwLFxyXG4gICAgbWFyZ2luQm90dG9tOiAwLFxyXG4gICAgbWFyZ2luUmlnaHQ6IDAsXHJcbiAgICBtYXJnaW5MZWZ0OiBzcGFjaW5nKDIpLFxyXG4gICAgcGFkZGluZzogMyxcclxuICAgIGNvbG9yOiB0aGVtZS5wcmltYXJ5LFxyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIHRvcDogMCxcclxuICAgIHdpZHRoOiAyNSxcclxuICAgIGhlaWdodDogMjUsXHJcbiAgfSxcclxufSk7XHJcbiIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VBcG9sbG8gfSBmcm9tIFwiLi4vYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBVU0VSIH0gZnJvbSBcIi4uL2Fwb2xsby9hY3Rpb25cIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVJdGVtT25jZShhcnIsIHZhbHVlKSB7XHJcbiAgdmFyIGluZGV4ID0gYXJyLmluZGV4T2YodmFsdWUpO1xyXG4gIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICBhcnIuc3BsaWNlKGluZGV4LCAxKTtcclxuICB9XHJcbiAgcmV0dXJuIGFycjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUl0ZW1BbGwoYXJyLCB2YWx1ZSkge1xyXG4gIHZhciBpID0gMDtcclxuICB3aGlsZSAoaSA8IGFyci5sZW5ndGgpIHtcclxuICAgIGlmIChhcnJbaV0gPT09IHZhbHVlKSB7XHJcbiAgICAgIGFyci5zcGxpY2UoaSwgMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICArK2k7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBhcnI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b0F0dHJpYnV0ZUdvdXJwV2hlcmVJbnB1dChhdHRyaWJ1dGVzKSB7XHJcbiAgaWYgKGF0dHJpYnV0ZXMubGVuZ3RoKSByZXR1cm4geyBhdHRyaWJ1dGVzX3NvbWU6IHsgdXJsX2luOiBhdHRyaWJ1dGVzIH0gfTtcclxuICBlbHNlIHJldHVybiBudWxsO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRNb25leShcclxuICBhbW91bnQsXHJcbiAgZGVjaW1hbENvdW50ID0gMCxcclxuICBkZWNpbWFsID0gXCIuXCIsXHJcbiAgdGhvdXNhbmRzID0gXCIsXCJcclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIGRlY2ltYWxDb3VudCA9IE1hdGguYWJzKGRlY2ltYWxDb3VudCk7XHJcbiAgICBkZWNpbWFsQ291bnQgPSBpc05hTihkZWNpbWFsQ291bnQpID8gMiA6IGRlY2ltYWxDb3VudDtcclxuICAgIGNvbnN0IG5lZ2F0aXZlU2lnbiA9IGFtb3VudCA8IDAgPyBcIi1cIiA6IFwiXCI7XHJcbiAgICBsZXQgaSA9IHBhcnNlSW50KFxyXG4gICAgICAoYW1vdW50ID0gTWF0aC5hYnMoTnVtYmVyKGFtb3VudCkgfHwgMCkudG9GaXhlZChkZWNpbWFsQ291bnQpKVxyXG4gICAgKS50b1N0cmluZygpO1xyXG4gICAgbGV0IGogPSBpLmxlbmd0aCA+IDMgPyBpLmxlbmd0aCAlIDMgOiAwO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgbmVnYXRpdmVTaWduICtcclxuICAgICAgKGogPyBpLnN1YnN0cigwLCBqKSArIHRob3VzYW5kcyA6IFwiXCIpICtcclxuICAgICAgaS5zdWJzdHIoaikucmVwbGFjZSgvKFxcZHszfSkoPz1cXGQpL2csIFwiJDFcIiArIHRob3VzYW5kcykgK1xyXG4gICAgICAoZGVjaW1hbENvdW50XHJcbiAgICAgICAgPyBkZWNpbWFsICtcclxuICAgICAgICAgIE1hdGguYWJzKGFtb3VudCAtIGkpXHJcbiAgICAgICAgICAgIC50b0ZpeGVkKGRlY2ltYWxDb3VudClcclxuICAgICAgICAgICAgLnNsaWNlKDIpXHJcbiAgICAgICAgOiBcIlwiKSArXHJcbiAgICAgIFwiIMSRXCJcclxuICAgICk7XHJcbiAgfSBjYXRjaCAoZSkge31cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdG9TbHVnKHN0cikge1xyXG4gIHJldHVybiBzdHJcclxuICAgIC5ub3JtYWxpemUoXCJORkRcIilcclxuICAgIC5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCBcIlwiKVxyXG4gICAgLnJlcGxhY2UoL8SRL2csIFwiZFwiKVxyXG4gICAgLnJlcGxhY2UoL8SQL2csIFwiRFwiKVxyXG4gICAgLnJlcGxhY2UoLyAvZywgXCItXCIpXHJcbiAgICAudG9Mb2NhbGVMb3dlckNhc2UoKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXJyb3JNZXNzYWdlKGVycm9yKSB7XHJcbiAgaWYgKGVycm9yLmdyYXBoUUxFcnJvcnMpIHtcclxuICAgIGZvciAoY29uc3QgZ3JhcGhRTEVycm9yIG9mIGVycm9yLmdyYXBoUUxFcnJvcnMpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGdyYXBoUUxFcnJvci5leHRlbnNpb25zICYmXHJcbiAgICAgICAgZ3JhcGhRTEVycm9yLmV4dGVuc2lvbnMuY29kZSA9PT0gXCJCQURfVVNFUl9JTlBVVFwiXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJldHVybiBncmFwaFFMRXJyb3IubWVzc2FnZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBzd2l0Y2ggKGVycm9yLm1lc3NhZ2Uuc2xpY2UoMCwgMjApKSB7XHJcbiAgICBjYXNlIFwiRTExMDAwIGR1cGxpY2F0ZSBrZXlcIjpcclxuICAgICAgcmV0dXJuIFwiVMOqbiDEkcSDbmcgbmjhuq1wIGLhu4sgdHLDuW5nLlwiO1xyXG4gIH1cclxuICBzd2l0Y2ggKGVycm9yLm1lc3NhZ2UpIHtcclxuICAgIGNhc2UgYGtldFF1YSB2YWxpZGF0aW9uIGZhaWxlZDoga2V0UXVhOiBDYXN0IHRvIEFycmF5IGZhaWxlZCBmb3IgdmFsdWUgXCJC4bqhbiDEkcOjIMSR4bqhdCDEkeG6v24gZ2nhu5tpIGjhuqFuIHRydXkgY+G6rXAuXCIgYXQgcGF0aCBcImtldFF1YVwiYDpcclxuICAgICAgcmV0dXJuIGBC4bqhbiBraMO0bmcgxJHhu6cgbMaw4bujdCB0cnV5IGPhuq1wLCBsacOqbiBo4buHIMSR4buDIG5o4bqtbiB0aMOqbWA7XHJcbiAgICBjYXNlIGBSZXNwb25zZSBub3Qgc3VjY2Vzc2Z1bDogUmVjZWl2ZWQgc3RhdHVzIGNvZGUgNDAwYDpcclxuICAgICAgcmV0dXJuIGBE4buvIGxp4buHdSBuaOG6rXAgdsOgbyBraMO0bmcgaOG7o3AgbOG7hy5gO1xyXG4gICAgY2FzZSBgWW91IGRvIG5vdCBoYXZlIGFjY2VzcyB0byB0aGlzIHJlc291cmNlYDpcclxuICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgICByZXR1cm4gdG9rZW5cclxuICAgICAgICA/IGDEkMOjIHjhuqN5IHJhIGzhu5dpLCB0cnV5IGPhuq1wIGLhu4sgdOG7qyBjaOG7kWksIGjDo3kgdGjhu60gxJHEg25nIG5o4bqtcCBs4bqhaSFgXHJcbiAgICAgICAgOiBgVnVpIGzDsm5nIMSRxINuZyBuaOG6rXAgxJHhu4MgdGnhur9wIHThu6VjIWA7XHJcbiAgICBjYXNlIGBOZXR3b3JrRXJyb3Igd2hlbiBhdHRlbXB0aW5nIHRvIGZldGNoIHJlc291cmNlLmA6XHJcbiAgICAgIHJldHVybiBgTOG7l2kga+G6v3QgbuG7kWksIMSR4bujaSA1IHBow7p0IHbDoCB0aOG7rSBs4bqhaSFgO1xyXG4gICAgY2FzZSBgW3Bhc3N3b3JkQXV0aDppZGVudGl0eTpub3RGb3VuZF0gVGhlIGVtYWlsIHByb3ZpZGVkIGRpZG4ndCBpZGVudGlmeSBhbnkgdW5kZWZpbmVkYDpcclxuICAgICAgcmV0dXJuIGBTYWkgVMOqbiDEkMSDbmcgTmjhuq1wYDtcclxuICAgIGNhc2UgYFtwYXNzd29yZEF1dGg6c2VjcmV0Om1pc21hdGNoXSBUaGUgcGFzc3dvcmQgcHJvdmlkZWQgaXMgaW5jb3JyZWN0YDpcclxuICAgICAgcmV0dXJuIGBTYWkgTeG6rXQgS2jhuql1YDtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xyXG4gIH1cclxufVxyXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJkZWNsYXJlIGNvbnN0IF9fTkVYVF9EQVRBX186IGFueVxuXG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFByZWZldGNoT3B0aW9ucywgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgZXhlY09uY2UsIGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyBhZGRCYXNlUGF0aCwgcmVzb2x2ZUhyZWYgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgZnJvbSB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgcGFnZSAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZnVuY3Rpb24gaXNMb2NhbCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luXG59XG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSwgdGFyZ2V0IH0gPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgaWYgKFxuICAgIG5vZGVOYW1lID09PSAnQScgJiZcbiAgICAoKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgICBlLm1ldGFLZXkgfHxcbiAgICAgIGUuY3RybEtleSB8fFxuICAgICAgZS5zaGlmdEtleSB8fFxuICAgICAgKGUubmF0aXZlRXZlbnQgJiYgZS5uYXRpdmVFdmVudC53aGljaCA9PT0gMikpXG4gICkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICghaXNMb2NhbChocmVmKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXMgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpIDogcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocCAmJiBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJiBjaGlsZEVsbSAmJiBjaGlsZEVsbS50YWdOYW1lKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKGFzKVxuICB9XG5cbiAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgaWYgKFxuICAgICAgY2hpbGRQcm9wcy5ocmVmICYmXG4gICAgICB0eXBlb2YgX19ORVhUX0RBVEFfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydFxuICAgICkge1xuICAgICAgY2hpbGRQcm9wcy5ocmVmID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoY2hpbGRQcm9wcy5ocmVmKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCB3YXJuID0gZXhlY09uY2UoY29uc29sZS5lcnJvcilcblxuICAvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbiAgY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpXG4gIGNvbnN0IGV4YWN0ID0gcmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpXG4gIC8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbiAgTGluay5wcm9wVHlwZXMgPSBleGFjdCh7XG4gICAgaHJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gICAgYXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBwcmVmZXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hhbGxvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGFzc0hyZWY6IFByb3BUeXBlcy5ib29sLFxuICAgIHNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAocHJvcHM6IGFueSwgcHJvcE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIGBXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3NlYXJjaC1wYXJhbXMtdG8tdXJsLXF1ZXJ5J1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHtcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBiYXNlUGF0aFxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGJhc2VQYXRoKVxuICAgICAgOiBiYXNlUGF0aCArIHBhdGhcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihjdXJyZW50UGF0aDogc3RyaW5nLCBocmVmOiBVcmwpOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gIHJldHVybiBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgOiBmaW5hbFVybC5ocmVmXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5mdW5jdGlvbiB0cnlQYXJzZVJlbGF0aXZlVXJsKFxuICB1cmw6IHN0cmluZ1xuKTogbnVsbCB8IFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxudHlwZSBDb21wb25lbnRSZXMgPSB7IHBhZ2U6IENvbXBvbmVudFR5cGU7IG1vZDogYW55IH1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbnR5cGUgUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBhbnlcbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUm91dGVJbmZvLCBBcHA/OiBDb21wb25lbnRUeXBlKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogYW55KSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgOyhlcnIgYXMgYW55KS5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUidcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBDb21wb25lbnRUeXBlXG4gICAgICB3cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdXJsXG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zLCBfX04gfSA9IGUuc3RhdGVcbiAgICBpZiAoIV9fTikge1xuICAgICAgLy8gdGhpcyBoaXN0b3J5IHN0YXRlIHdhc24ndCBjcmVhdGVkIGJ5IG5leHQuanMgc28gaXQgY2FuIGJlIGlnbm9yZWRcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eSdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHVwZGF0ZShyb3V0ZTogc3RyaW5nLCBtb2Q6IGFueSkge1xuICAgIGNvbnN0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZSA9IG1vZC5kZWZhdWx0IHx8IG1vZFxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YClcbiAgICB9XG5cbiAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgQ29tcG9uZW50LFxuICAgICAgX19OX1NTRzogbW9kLl9fTl9TU0csXG4gICAgICBfX05fU1NQOiBtb2QuX19OX1NTUCxcbiAgICB9KVxuICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhXG5cbiAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSlcbiAgICB9XG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogYW55XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBwYXJzZWQgPSB0cnlQYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGlmICghcGFyc2VkKSByZXR1cm4gZmFsc2VcblxuICAgIGxldCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMgfSA9IHBhcnNlZFxuICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKGNsZWFuZWRBcylcbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKG9wdGlvbnMuX05fWCwgb3B0aW9ucy5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICBjb25zdCByb3V0ZUluZm86IFJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIsIGVycm9yOiBlcnIgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oXG4gICAgICAgICAgICAocmVzKSA9PlxuICAgICAgICAgICAgICAoe1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICAgICAgfSBhcyBSb3V0ZUluZm8pXG4gICAgICAgICAgKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgcGFyc2VkID0gdHJ5UGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBpZiAoIXBhcnNlZCkgcmV0dXJuXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgYXNQYXRoKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Q29tcG9uZW50UmVzPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBlbmNvZGUgYXMgZW5jb2RlUXVlcnlzdHJpbmcgfSBmcm9tICdxdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICAvLyBxdWVyeSA9ICcnICsgbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeSk7XG4gICAgcXVlcnkgPSBlbmNvZGVRdWVyeXN0cmluZyhxdWVyeSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKCdodHRwOi8vbicpXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcywgc2VhcmNoLCBoYXNoLCBocmVmLCBvcmlnaW4gfSA9IG5ldyBVUkwoXG4gICAgdXJsLFxuICAgIHJlc29sdmVkQmFzZVxuICApXG4gIGlmIChvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi4vLi4vbGliL2xvYWQtZW52LWNvbmZpZydcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBhbnlcbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZmlsZXM6IHN0cmluZ1tdXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IExpc3QgYXMgUHJvZHVjdHMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9kdWN0L2xpc3RcIjtcclxuXHJcbmltcG9ydCB7IHRvQXR0cmlidXRlR291cnBXaGVyZUlucHV0IH0gZnJvbSBcIi4uL2xpYi9jaGlwXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIEZyYWdtZW50LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBTaWRlYmFyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2lkZWJhclwiO1xyXG5cclxuaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZHVjdC9maWx0ZXJcIjtcclxuaW1wb3J0IHsgU2VsbGVyQ29udGV4dCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3NyYy9TZWxsZXJQcm92aWRlclwiO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VDb250ZXh0KFNlbGxlckNvbnRleHQpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGxldCBxdWVyeSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBjYXRlZ29yeSA9IHF1ZXJ5LmNhdGVnb3J5O1xyXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBxdWVyeS5jYXRlZ29yaWVzO1xyXG4gIGNvbnN0IGJyYW5kID0gcXVlcnkuYnJhbmQ7XHJcbiAgY29uc3Qgc2VhcmNoID0gcXVlcnkuc2VhcmNoO1xyXG4gIGNvbnN0IHByaWNlX2Zyb20gPSBxdWVyeS5wcmljZV9mcm9tID8gTnVtYmVyKHF1ZXJ5LnByaWNlX2Zyb20pIDogMDtcclxuICBjb25zdCBwcmljZV90byA9IHF1ZXJ5LnByaWNlX3RvID8gTnVtYmVyKHF1ZXJ5LnByaWNlX3RvKSA6IDk5OTk5OTk5OTtcclxuICBjb25zdCBhdHRyaWJ1dGVzID0gdG9BdHRyaWJ1dGVHb3VycFdoZXJlSW5wdXQoXHJcbiAgICBxdWVyeS5hdHRyaWJ1dGVzID8gcXVlcnkuYXR0cmlidXRlcy5zcGxpdChcIixcIikgOiBbXVxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgaGVpZ2h0OiBcIjYwdmhcIixcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGB1cmwoJHt0aGVtZS5zZXJ2ZXIgKyB0aGVtZS5maWxlPy5wdWJsaWNVcmx9KWAsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID48L2Rpdj5cclxuICAgICAgPENvbnRhaW5lciBmbHVpZD5cclxuICAgICAgICA8Um93IG5vR3V0dGVycyBzdHlsZT17eyBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDQpIH19PlxyXG4gICAgICAgICAgPENvbCB4cz17NH0gbWQ9ezN9IGxnPXszfSB4bD17Mn0+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyXHJcbiAgICAgICAgICAgICAgb25TZWFyY2g9eyhzZWFyY2gpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFNlYXJjaChzZWFyY2gpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgeHM9ezh9IG1kPXs5fSBsZz17OX0geGw9ezEwfT5cclxuICAgICAgICAgICAgPEZpbHRlclxyXG4gICAgICAgICAgICAgIGNhdGVnb3J5PXtjYXRlZ29yeX1cclxuICAgICAgICAgICAgICBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfVxyXG4gICAgICAgICAgICAgIGJyYW5kPXticmFuZH1cclxuICAgICAgICAgICAgICBzZWFyY2g9e3NlYXJjaH1cclxuICAgICAgICAgICAgICBwcmljZV9mcm9tPXtwcmljZV9mcm9tfVxyXG4gICAgICAgICAgICAgIHByaWNlX3RvPXtwcmljZV90b31cclxuICAgICAgICAgICAgICBhdHRyaWJ1dGVzPXtxdWVyeS5hdHRyaWJ1dGVzID8gcXVlcnkuYXR0cmlidXRlcy5zcGxpdChcIixcIikgOiBbXX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2NhdGVnb3J5IHx8XHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXMgfHxcclxuICAgICAgICAgICAgYnJhbmQgfHxcclxuICAgICAgICAgICAgc2VhcmNoIHx8XHJcbiAgICAgICAgICAgIHByaWNlX2Zyb20gfHxcclxuICAgICAgICAgICAgcHJpY2VfdG8gIT0gOTk5OTk5OTk5IHx8XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgPyAoXHJcbiAgICAgICAgICAgICAgPFByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgICBzbT17Nn1cclxuICAgICAgICAgICAgICAgIGxnPXs0fVxyXG4gICAgICAgICAgICAgICAgeGw9ezN9XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeT17Y2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfVxyXG4gICAgICAgICAgICAgICAgYnJhbmQ9e2JyYW5kfVxyXG4gICAgICAgICAgICAgICAgc2VhcmNoPXtzZWFyY2h9XHJcbiAgICAgICAgICAgICAgICBwcmljZV9mcm9tPXtwcmljZV9mcm9tfVxyXG4gICAgICAgICAgICAgICAgcHJpY2VfdG89e3ByaWNlX3RvfVxyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcz17YXR0cmlidXRlc31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RoZW1lLmNzcy5maWx0ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8aDZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWUucHJpbWFyeSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgS2h1eeG6v24gTcOjaVxyXG4gICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8UHJvZHVjdHMgc209ezZ9IGxnPXs0fSB4bD17M30gc2FsZSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGhlbWUuY3NzLmZpbHRlcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxoNlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5wcmltYXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBCw6FuIENo4bqheVxyXG4gICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8UHJvZHVjdHMgc209ezZ9IGxnPXs0fSB4bD17M30gc3VnZ2VzdGlvbnM9XCJiZXN0U2VsbGVyXCIgLz5cclxuICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnQvbGluay9jb250ZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50L2xpbmsvaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInF1ZXJ5c3RyaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2ZpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2lvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL21kXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNwcmluZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdHN0cmFwXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=