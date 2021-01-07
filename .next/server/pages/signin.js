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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("DB6d");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "DB6d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ signin_SignIn; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__("z+8S");

// EXTERNAL MODULE: ./apollo/action.js
var action = __webpack_require__("CO9l");

// EXTERNAL MODULE: ./lib/chip.js
var chip = __webpack_require__("6x3k");

// EXTERNAL MODULE: ./apollo/client.js
var apollo_client = __webpack_require__("rbTy");

// EXTERNAL MODULE: ./components/src/SellerProvider.js + 1 modules
var SellerProvider = __webpack_require__("htFV");

// CONCATENATED MODULE: ./components/User/signin.js

var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const SignInMutation = client_["gql"]`
  mutation($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      token
      item {
        id
        email
        isAdmin
        isSeller
      }
    }
  }
`;
function SignIn() {
  var _router$query;

  const theme = Object(external_react_["useContext"])(SellerProvider["a" /* SellerContext */]);
  const router = Object(router_["useRouter"])();
  const client = Object(apollo_client["e" /* useApollo */])();
  const [signIn] = Object(client_["useMutation"])(SignInMutation);
  const {
    0: errorMsg,
    1: setErrorMsg
  } = Object(external_react_["useState"])();
  const redirect = (_router$query = router.query) === null || _router$query === void 0 ? void 0 : _router$query.redirect;

  async function handleSubmit(event) {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    try {
      await client.clearStore();
      const {
        data
      } = await signIn({
        variables: {
          email: email,
          password: password
        }
      });

      if (data.authenticateUserWithPassword) {
        const {
          authenticateUserWithPassword: {
            token,
            item
          }
        } = data;
        localStorage.setItem("token", token);
        await client.resetStore();
        await router.push({
          pathname: redirect ? redirect : "/"
        });
        Object(action["j" /* init */])();
        Object(action["k" /* onSignIn */])({
          user: item
        });
      }
    } catch (error) {
      setErrorMsg(Object(chip["b" /* getErrorMessage */])(error));
    }
  }

  return __jsx(external_react_["Fragment"], null, __jsx("h2", {
    style: theme.css.h2
  }, "\u0110\u0103ng Nh\u1EADp"), __jsx("form", {
    noValidate: true,
    onSubmit: handleSubmit
  }, __jsx("h5", {
    style: theme.css.h5
  }, "T\xE0i kho\u1EA3n"), __jsx("input", {
    required: true,
    id: "email",
    label: "T\xE0i kho\u1EA3n",
    name: "email",
    placeholder: "Nh\u1EADp T\xE0i kho\u1EA3n",
    style: _objectSpread(_objectSpread({}, theme.css.input), {}, {
      width: "100%",
      marginBottom: theme.spacing(3),
      borderRadius: theme.spacing(2)
    })
  }), __jsx("h5", {
    style: theme.css.h5
  }, "M\u1EADt kh\u1EA9u"), __jsx("input", {
    required: true,
    name: "password",
    label: "M\u1EADt kh\u1EA9u",
    placeholder: "Nh\u1EADp M\u1EADt kh\u1EA9u",
    type: "password",
    id: "password",
    style: _objectSpread(_objectSpread({}, theme.css.input), {}, {
      width: "100%",
      borderRadius: theme.spacing(2)
    })
  }), __jsx("button", {
    type: "submit",
    style: _objectSpread(_objectSpread({}, theme.css.button), {}, {
      marginTop: 21
    })
  }, "Ti\u1EBFp T\u1EE5c"), __jsx("p", null, " ", errorMsg)));
}
// CONCATENATED MODULE: ./components/User/signup.js

var signup_jsx = external_react_default.a.createElement;

function signup_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function signup_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { signup_ownKeys(Object(source), true).forEach(function (key) { signup_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { signup_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function signup_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const SignUpMutation = client_["gql"]`
  mutation($email: String!, $password: String!) {
    createUser(data: { email: $email, password: $password }) {
      id
      email
    }
  }
`;
function SignUp() {
  const theme = Object(external_react_["useContext"])(SellerProvider["a" /* SellerContext */]);
  const [signUp] = Object(client_["useMutation"])(SignUpMutation);
  const [signIn] = Object(client_["useMutation"])(SignInMutation);
  const {
    0: errorMsg,
    1: setErrorMsg
  } = Object(external_react_["useState"])();
  const router = Object(router_["useRouter"])();
  const client = Object(apollo_client["e" /* useApollo */])();
  const {
    0: email,
    1: setEmail
  } = Object(external_react_["useState"])();
  const {
    0: password,
    1: setPassword
  } = Object(external_react_["useState"])();

  async function letSignIn({
    email,
    password
  }) {
    try {
      const {
        data: dataSignIn
      } = await signIn({
        variables: {
          email: email,
          password: password
        }
      }); // if success

      if (dataSignIn.authenticateUserWithPassword) {
        const {
          authenticateUserWithPassword: {
            token,
            item
          }
        } = dataSignIn;
        localStorage.setItem("token", token);
        Object(action["k" /* onSignIn */])({
          user: item
        });
        await router.push({
          pathname: "/"
        });
        await client.resetStore();
        Object(action["j" /* init */])();
      }
    } catch (error) {
      setErrorMsg(Object(chip["b" /* getErrorMessage */])(error));
    }
  } //if (email && password) letSignIn();


  async function handleSubmit(event) {
    var _event$currentTarget$, _event$currentTarget$2, _event$currentTarget$3;

    event.preventDefault();
    const email = (_event$currentTarget$ = event.currentTarget.elements.email) === null || _event$currentTarget$ === void 0 ? void 0 : _event$currentTarget$.value;
    const password = (_event$currentTarget$2 = event.currentTarget.elements.password) === null || _event$currentTarget$2 === void 0 ? void 0 : _event$currentTarget$2.value;
    const confirm = (_event$currentTarget$3 = event.currentTarget.elements.confirm) === null || _event$currentTarget$3 === void 0 ? void 0 : _event$currentTarget$3.value;
    console.log(email, password, confirm); // pre check

    if (!email) {
      setErrorMsg("Vui lòng nhập tên tài khoản");
      return;
    }

    if (password !== confirm) {
      setErrorMsg("Nhập khẩu nhập lại không khớp");
      return;
    } // Sign up


    try {
      await client.clearStore();
      const {
        data
      } = await signUp({
        variables: {
          email,
          password
        }
      }); // if Success

      if (data.createUser) {
        // try login
        letSignIn({
          email,
          password
        });
      }
    } catch (error) {
      setErrorMsg(Object(chip["b" /* getErrorMessage */])(error));
    }
  }

  return signup_jsx(external_react_["Fragment"], null, signup_jsx("h2", {
    style: theme.css.h2
  }, "\u0110\u0103ng K\xFD T\xE0i Kho\u1EA3n"), signup_jsx("form", {
    noValidate: true,
    onSubmit: handleSubmit
  }, signup_jsx("h5", {
    style: theme.css.h5
  }, "T\xE0i kho\u1EA3n"), signup_jsx("input", {
    required: true,
    label: "T\xE0i kho\u1EA3n",
    name: "email",
    placeholder: "Nh\u1EADp T\xE0i kho\u1EA3n",
    style: signup_objectSpread(signup_objectSpread({}, theme.css.input), {}, {
      width: "100%",
      marginBottom: theme.spacing(3),
      borderRadius: theme.spacing(2)
    })
  }), signup_jsx("h5", {
    style: theme.css.h5
  }, "M\u1EADt kh\u1EA9u"), signup_jsx("input", {
    required: true,
    name: "password",
    label: "M\u1EADt kh\u1EA9u",
    placeholder: "Nh\u1EADp M\u1EADt kh\u1EA9u",
    type: "password",
    style: signup_objectSpread(signup_objectSpread({}, theme.css.input), {}, {
      width: "100%",
      marginBottom: theme.spacing(3),
      borderRadius: theme.spacing(2)
    })
  }), signup_jsx("h5", {
    style: theme.css.h5
  }, "Nh\u1EADp L\u1EA1i M\u1EADt Kh\u1EA9u"), signup_jsx("input", {
    required: true,
    name: "confirm",
    label: "M\u1EADt kh\u1EA9u",
    placeholder: "Nh\u1EADp L\u1EA1i M\u1EADt Kh\u1EA9u",
    type: "password",
    style: signup_objectSpread(signup_objectSpread({}, theme.css.input), {}, {
      width: "100%",
      marginBottom: theme.spacing(3),
      borderRadius: theme.spacing(2)
    })
  }), signup_jsx("button", {
    type: "submit",
    style: signup_objectSpread({}, theme.css.button)
  }, "\u0110\u0103ng K\xFD"), signup_jsx("p", null, errorMsg)));
}
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: ./components/Banner/list.js + 1 modules
var list = __webpack_require__("RJlF");

// CONCATENATED MODULE: ./pages/signin.js

var signin_jsx = external_react_default.a.createElement;






function signin_SignIn() {
  var _theme$file;

  const theme = Object(external_react_["useContext"])(SellerProvider["a" /* SellerContext */]);
  return signin_jsx(external_reactstrap_["Container"], null, signin_jsx("section", {
    style: {
      marginTop: 34,
      marginBottom: 34,
      backgroundColor: theme.backgroundColor,
      padding: theme.spacing(4)
    }
  }, signin_jsx(external_reactstrap_["Row"], null, signin_jsx(external_reactstrap_["Col"], {
    xs: 12,
    md: 4,
    style: {
      paddingTop: theme.spacing(4)
    }
  }, signin_jsx(SignIn, null), signin_jsx(SignUp, null)), signin_jsx(external_reactstrap_["Col"], {
    xs: 12,
    md: 8
  }, signin_jsx("div", {
    style: {
      height: "100%"
    }
  }, signin_jsx("div", {
    style: {
      width: "100%",
      height: "60vh",
      background: `url(${theme.server + ((_theme$file = theme.file) === null || _theme$file === void 0 ? void 0 : _theme$file.publicUrl)})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      borderRadius: theme.spacing(2)
    }
  }), " ")))));
}

/***/ }),

/***/ "DHnX":
/***/ (function(module, exports) {

module.exports = require("@apollo/client/link/http");

/***/ }),

/***/ "KwCx":
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),

/***/ "RJlF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: ListBanner

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__("z+8S");

// EXTERNAL MODULE: ./lib/chip.js
var chip = __webpack_require__("6x3k");

// EXTERNAL MODULE: ./components/Animations/FadeIn.js
var FadeIn = __webpack_require__("seEB");

// EXTERNAL MODULE: ./components/src/SellerProvider.js + 1 modules
var SellerProvider = __webpack_require__("htFV");

// CONCATENATED MODULE: ./components/Banner/item.js

var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function Item({
  style,
  banner
}) {
  const theme = Object(external_react_["useContext"])(SellerProvider["a" /* SellerContext */]);
  return __jsx(FadeIn["a" /* FadeIn */], null, __jsx("div", {
    style: _objectSpread(_objectSpread({}, style), {}, {
      width: "100%",
      backgroundImage: `url(${theme.server + banner.file.publicUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "inherit",
      borderRadius: theme.spacing(2)
    })
  }));
}
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: ./components/src/Loading.js
var Loading = __webpack_require__("pRrB");

// CONCATENATED MODULE: ./components/Banner/list.js

var list_jsx = external_react_default.a.createElement;






const GET_ATTRIBUTES = client_["gql"]`
  query($seller: UserWhereInput) {
    allBanners(where: { seller: $seller }) {
      id
      file {
        publicUrl
      }
    }
  }
`;
function ListBanner({
  style
}) {
  const theme = Object(external_react_["useContext"])(SellerProvider["a" /* SellerContext */]);
  const {
    data,
    loading,
    error
  } = Object(client_["useQuery"])(GET_ATTRIBUTES, {
    variables: {
      seller: theme.seller
    }
  });
  if (loading) return list_jsx(Loading["a" /* Loading */], null);
  return !loading && data ? data.allBanners.slice(0, 1).map(banner => list_jsx(Item, {
    key: banner.id,
    banner: banner,
    style: style
  })) : null;
}

/***/ }),

/***/ "VU9W":
/***/ (function(module, exports) {

module.exports = require("@apollo/client/link/context");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ "lJcc":
/***/ (function(module, exports) {

module.exports = require("react-ga");

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

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "z+8S":
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ })

/******/ });