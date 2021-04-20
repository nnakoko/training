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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0KRp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("CafY");
/* harmony import */ var _components_Calc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Tl3G");



function Home() {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      header: "Calc",
      title: "Calculator",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "text-center",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_Calc__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {})
      })
    })
  });
}

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("0KRp");


/***/ }),

/***/ "CafY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Layout; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");

// CONCATENATED MODULE: ./components/header.js

function Header(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
      className: "bg-primary px-3 text-white display-4 text-right",
      children: props.header
    })
  });
}
// CONCATENATED MODULE: ./components/footer.js

function Footer(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "text-center h6 my-4",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: props.footer
    })
  });
}
// CONCATENATED MODULE: ./components/layout.js






function Layout(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("head", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: props.title
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
        crossOrigin: "anonymous"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Header, {
      header: props.header
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        className: "my-3 text-primary text-center",
        children: props.title
      }), props.children]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer, {
      footer: "copyright SYODA-Tuyano."
    })]
  });
}

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "Tl3G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Calc; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Wx3p");




function Calc(props) {
  const {
    0: massage,
    1: setMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: input,
    1: setInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const [data, setData] = Object(_Persist__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])('calc-history', []);
  const {
    0: func,
    1: setFunc
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    func: {}
  });

  const fetchFunc = address => fetch(address).then(res => res.json());

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    fetchFunc('/api/func').then(r => {
      setFunc(r);
    });
  }, [data]);

  const onChange = e => {
    setInput(e.target.value);
  };

  const onKeyPress = e => {
    if (e.key == 'Enter') {
      doAction(e);
    }
  }; //Enter時の処理


  const doAction = e => {
    const res = eval(input);
    setMessage(res);
    data.unshift(input + ' = ' + res);
    setData(data);
    setInput('');
  }; //履歴のクリア


  const clear = e => {
    setData([]);
    setMessage('Clear history');
  }; //関数ボタンの処理


  const doFunc = e => {
    const arr = input.split(',');
    const fid = e.target.id;
    const f = func.func[fid];
    const fe = eval(f.function);
    const res = fe(arr);
    setMessage(res);
    data.unshift(fid + ' = ' + res);
    setData(data);
    setInput('');
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "alert alert-primary",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("h5", {
        children: ["Result: ", message]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "form-group",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
          type: "text",
          value: input,
          className: "form-control",
          onChange: onChange,
          onKeyPress: onKeyPress
        })
      }), Object.entries(func.func).map((value, key) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
        className: "btn btn-secoundary m-1",
        title: value[1].caption,
        id: value[0],
        onClick: doFunc,
        children: value[0]
      }, key))]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("table", {
      className: "table",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("thead", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("tr", {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
            children: "Histroy:"
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("tbody", {
        children: data.map((value, key) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("tr", {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
            children: value
          })
        }, key))
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
      onClick: clear,
      className: "btn btn-warning",
      children: "Clear Histroy"
    })]
  });
}

/***/ }),

/***/ "Wx3p":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function usePersist(ky, initVal) {
  const key = "hooks:" + ky;

  const value = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initVal;
    } catch (err) {
      console.log(err);
      return initVal;
    }
  };

  const setValue = val => {
    try {
      setSavedValue(val);
      window.localStorage.setItem(key, JSON.stringify(val));
    } catch (err) {
      console.log(err);
    }
  };

  const {
    0: savedValue,
    1: setSavedValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value);
  return [savedValue, setValue];
}

/* harmony default export */ __webpack_exports__["a"] = (usePersist);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });