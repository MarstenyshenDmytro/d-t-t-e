module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/posts/new.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Button/Button.tsx":
/*!**************************************!*\
  !*** ./components/Button/Button.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styledComponents */ "./components/Button/styledComponents.ts");
var _jsxFileName = "D:\\Dima\\d-t-t-e\\components\\Button\\Button.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Button = ({
  label,
  onClick,
  type
}) => __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_1__["ButtonContainer"], {
  onClick: onClick ? onClick : () => {},
  type: type || "button",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}, label);

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/Button/index.ts":
/*!************************************!*\
  !*** ./components/Button/index.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./components/Button/Button.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Button__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Button/styledComponents.ts":
/*!***********************************************!*\
  !*** ./components/Button/styledComponents.ts ***!
  \***********************************************/
/*! exports provided: ButtonContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonContainer", function() { return ButtonContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "styledComponents__ButtonContainer",
  componentId: "sc-189u61d-0"
})(["padding:10px 20px;border:1px solid grey;background-color:transparent;&:hover{cursor:pointer;background-color:rgb(232,232,232);}"]);

/***/ }),

/***/ "./components/form/Field/Field.tsx":
/*!*****************************************!*\
  !*** ./components/form/Field/Field.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styledComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styledComponent */ "./components/form/Field/styledComponent.ts");
var _jsxFileName = "D:\\Dima\\d-t-t-e\\components\\form\\Field\\Field.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Field = ({
  name,
  label,
  placeholder,
  errors,
  register,
  component: Component,
  validator
}) => {
  const error = errors[name];
  const {
    0: isFocus,
    1: setIsFocus
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleControl = () => {
    setIsFocus(!isFocus);
  };

  return __jsx(_styledComponent__WEBPACK_IMPORTED_MODULE_1__["FieldContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, label && __jsx(_styledComponent__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, label), __jsx(_styledComponent__WEBPACK_IMPORTED_MODULE_1__["FieldContent"], {
    isError: error && !isFocus,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(Component, {
    name: name,
    placeholder: placeholder,
    handleControl: handleControl,
    register: register,
    isFocus: isFocus,
    validator: validator,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  })), __jsx(_styledComponent__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, error && !isFocus && error.message));
};

/* harmony default export */ __webpack_exports__["default"] = (Field);

/***/ }),

/***/ "./components/form/Field/index.ts":
/*!****************************************!*\
  !*** ./components/form/Field/index.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field */ "./components/form/Field/Field.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Field__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/form/Field/styledComponent.ts":
/*!**************************************************!*\
  !*** ./components/form/Field/styledComponent.ts ***!
  \**************************************************/
/*! exports provided: FieldContainer, Label, FieldContent, ErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldContainer", function() { return FieldContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldContent", function() { return FieldContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessage", function() { return ErrorMessage; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FieldContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styledComponent__FieldContainer",
  componentId: "sc-13719qw-0"
})(["width:100%;&:not(last-child){margin-bottom:10px;}"]);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "styledComponent__Label",
  componentId: "sc-13719qw-1"
})(["font-size:18px;"]);
const FieldContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styledComponent__FieldContent",
  componentId: "sc-13719qw-2"
})(["border:1px solid ", ";margin:5px 0;"], props => props.isError ? "rgb(137,0,0)" : "black");
const ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "styledComponent__ErrorMessage",
  componentId: "sc-13719qw-3"
})(["font-size:14px;color:rgb(137,0,0);"]);

/***/ }),

/***/ "./components/form/Form/Form.tsx":
/*!***************************************!*\
  !*** ./components/form/Form/Form.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styledComponents */ "./components/form/Form/styledComponents.ts");
var _jsxFileName = "D:\\Dima\\d-t-t-e\\components\\form\\Form\\Form.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Form = ({
  children,
  onSubmit
}) => {
  const {
    register,
    errors,
    handleSubmit
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["useForm"])({
    mode: "onBlur"
  });
  return __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__["FormContainer"], {
    className: "form",
    onSubmit: handleSubmit(onSubmit),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, children(register, errors));
};

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./components/form/Form/index.ts":
/*!***************************************!*\
  !*** ./components/form/Form/index.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form */ "./components/form/Form/Form.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Form__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/form/Form/styledComponents.ts":
/*!**************************************************!*\
  !*** ./components/form/Form/styledComponents.ts ***!
  \**************************************************/
/*! exports provided: FormContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormContainer", function() { return FormContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "styledComponents__FormContainer",
  componentId: "sc-2urd1e-0"
})(["width:400px;padding:20px;border:1px solid grey;"]);

/***/ }),

/***/ "./components/form/Input/Input.tsx":
/*!*****************************************!*\
  !*** ./components/form/Input/Input.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styledComponents */ "./components/form/Input/styledComponents.ts");
var _jsxFileName = "D:\\Dima\\d-t-t-e\\components\\form\\Input\\Input.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Input = ({
  name,
  placeholder,
  handleControl,
  register,
  isFocus,
  validator
}) => __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_1__["InputContainer"], {
  name: name,
  onFocus: handleControl,
  onBlur: handleControl,
  ref: register(validator),
  placeholder: `${!isFocus ? placeholder : ""} `,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 3
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./components/form/Input/index.ts":
/*!****************************************!*\
  !*** ./components/form/Input/index.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input */ "./components/form/Input/Input.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Input__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/form/Input/styledComponents.ts":
/*!***************************************************!*\
  !*** ./components/form/Input/styledComponents.ts ***!
  \***************************************************/
/*! exports provided: InputContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputContainer", function() { return InputContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const InputContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "styledComponents__InputContainer",
  componentId: "jlfdtx-0"
})(["border:none;width:100%;&:focus{outline:none;}"]);

/***/ }),

/***/ "./components/form/Textarea/Textarea.tsx":
/*!***********************************************!*\
  !*** ./components/form/Textarea/Textarea.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styledComponents */ "./components/form/Textarea/styledComponents.ts");
var _jsxFileName = "D:\\Dima\\d-t-t-e\\components\\form\\Textarea\\Textarea.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Textarea = ({
  name,
  handleControl,
  register,
  validator,
  isFocus,
  placeholder
}) => __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_1__["TextareaContainer"], {
  rows: 10,
  name: name,
  onFocus: handleControl,
  onBlur: handleControl,
  ref: register(validator),
  placeholder: `${!isFocus ? placeholder : ""} `,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 3
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Textarea);

/***/ }),

/***/ "./components/form/Textarea/index.ts":
/*!*******************************************!*\
  !*** ./components/form/Textarea/index.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Textarea */ "./components/form/Textarea/Textarea.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Textarea__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/form/Textarea/styledComponents.ts":
/*!******************************************************!*\
  !*** ./components/form/Textarea/styledComponents.ts ***!
  \******************************************************/
/*! exports provided: TextareaContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaContainer", function() { return TextareaContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const TextareaContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.textarea.withConfig({
  displayName: "styledComponents__TextareaContainer",
  componentId: "sc-1hqy343-0"
})(["border:none;width:100%;resize:vertical;&:focus{outline:none;}"]);

/***/ }),

/***/ "./components/form/index.ts":
/*!**********************************!*\
  !*** ./components/form/index.ts ***!
  \**********************************/
/*! exports provided: default, Field, Input, Textarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form */ "./components/form/Form/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Form__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field */ "./components/form/Field/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return _Field__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input */ "./components/form/Input/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _Input__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Textarea */ "./components/form/Textarea/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _Textarea__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./containers/NewPost/InfoMsg/InfoMsg.tsx":
/*!************************************************!*\
  !*** ./containers/NewPost/InfoMsg/InfoMsg.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styledComponents */ "./containers/NewPost/InfoMsg/styledComponents.ts");
var _jsxFileName = "D:\\Dima\\d-t-t-e\\containers\\NewPost\\InfoMsg\\InfoMsg.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const InfoMsg = ({
  loading,
  isSuccessed,
  error
}) => {
  if (loading) {
    return __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_1__["P"], {
      color: "grey",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 12
      }
    }, "Loading...");
  }

  if (!loading && error) {
    return __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_1__["P"], {
      color: "red",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 12
      }
    }, "Some error with server(");
  }

  if (isSuccessed) {
    return __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_1__["P"], {
      color: "green",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 12
      }
    }, "Post was created");
  }

  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (InfoMsg);

/***/ }),

/***/ "./containers/NewPost/InfoMsg/styledComponents.ts":
/*!********************************************************!*\
  !*** ./containers/NewPost/InfoMsg/styledComponents.ts ***!
  \********************************************************/
/*! exports provided: P */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return P; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const P = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "styledComponents__P",
  componentId: "sc-1quvmn-0"
})(["margin-top:20px;font-size:18px;font-weight:bold;color:", ";"], props => props.color);

/***/ }),

/***/ "./containers/NewPost/NewPost.tsx":
/*!****************************************!*\
  !*** ./containers/NewPost/NewPost.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions_newPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/actions/newPost */ "./redux/actions/newPost.ts");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/form */ "./components/form/index.ts");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Button */ "./components/Button/index.ts");
/* harmony import */ var _InfoMsg_InfoMsg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InfoMsg/InfoMsg */ "./containers/NewPost/InfoMsg/InfoMsg.tsx");
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styledComponents */ "./containers/NewPost/styledComponents.ts");
var _jsxFileName = "D:\\Dima\\d-t-t-e\\containers\\NewPost\\NewPost.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const validators = {
  title: {
    required: "This field is required"
  },
  text: {
    required: "This field is required"
  }
};

const NewPost = ({
  loading,
  error,
  isSuccessed,
  newPostPush
}) => {
  const onSubmit = (data, e) => {
    newPostPush(data);
    e.target.reset();
  };

  return __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_6__["NewPostContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onSubmit: onSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, (register, errors) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
    name: "title",
    label: "Post title",
    placeholder: "enter post title",
    errors: errors,
    component: _components_form__WEBPACK_IMPORTED_MODULE_3__["Input"],
    register: register,
    validator: validators.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }), __jsx(_components_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
    name: "body",
    label: "text",
    placeholder: "enter text",
    errors: errors,
    component: _components_form__WEBPACK_IMPORTED_MODULE_3__["Textarea"],
    register: register,
    validator: validators.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "submit",
    label: "Add",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }))), __jsx(_InfoMsg_InfoMsg__WEBPACK_IMPORTED_MODULE_5__["default"], {
    loading: loading,
    error: error,
    isSuccessed: isSuccessed,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(state => state.newPostReducer, {
  newPostPush: _redux_actions_newPost__WEBPACK_IMPORTED_MODULE_2__["newPostPush"]
})(NewPost));

/***/ }),

/***/ "./containers/NewPost/index.ts":
/*!*************************************!*\
  !*** ./containers/NewPost/index.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewPost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewPost */ "./containers/NewPost/NewPost.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _NewPost__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./containers/NewPost/styledComponents.ts":
/*!************************************************!*\
  !*** ./containers/NewPost/styledComponents.ts ***!
  \************************************************/
/*! exports provided: NewPostContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPostContainer", function() { return NewPostContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const NewPostContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styledComponents__NewPostContainer",
  componentId: "sc-4wr90l-0"
})(["display:flex;flex-direction:column;align-items:center;"]);

/***/ }),

/***/ "./pages/posts/new.tsx":
/*!*****************************!*\
  !*** ./pages/posts/new.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_NewPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../containers/NewPost */ "./containers/NewPost/index.ts");
var _jsxFileName = "D:\\Dima\\d-t-t-e\\pages\\posts\\new.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const NewPostPage = () => __jsx(_containers_NewPost__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 37
  }
});

/* harmony default export */ __webpack_exports__["default"] = (NewPostPage);

/***/ }),

/***/ "./redux/actions/newPost.ts":
/*!**********************************!*\
  !*** ./redux/actions/newPost.ts ***!
  \**********************************/
/*! exports provided: NEW_POST_PUSH, SUCCESS_POST_PUSH, ERROR_POST_PUSH, newPostPush, successPostPush, errorPostPush */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_POST_PUSH", function() { return NEW_POST_PUSH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUCCESS_POST_PUSH", function() { return SUCCESS_POST_PUSH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_POST_PUSH", function() { return ERROR_POST_PUSH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newPostPush", function() { return newPostPush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successPostPush", function() { return successPostPush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorPostPush", function() { return errorPostPush; });
const NEW_POST_PUSH = "NEW_POST_PUSH";
const SUCCESS_POST_PUSH = "SUCCESS_POST_PUSH";
const ERROR_POST_PUSH = "ERROR_POST_PUSH";
const newPostPush = data => ({
  type: NEW_POST_PUSH,
  payload: {
    data,
    loading: true
  }
});
const successPostPush = () => ({
  type: SUCCESS_POST_PUSH,
  payload: {
    loading: false,
    isSuccessed: true
  }
});
const errorPostPush = () => ({
  type: ERROR_POST_PUSH,
  payload: {
    loading: false,
    error: true
  }
});

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0J1dHRvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0J1dHRvbi9zdHlsZWRDb21wb25lbnRzLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9ybS9GaWVsZC9GaWVsZC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb3JtL0ZpZWxkL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9ybS9GaWVsZC9zdHlsZWRDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb3JtL0Zvcm0vRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb3JtL0Zvcm0vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb3JtL0Zvcm0vc3R5bGVkQ29tcG9uZW50cy50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm0vSW5wdXQvSW5wdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9ybS9JbnB1dC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm0vSW5wdXQvc3R5bGVkQ29tcG9uZW50cy50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm0vVGV4dGFyZWEvVGV4dGFyZWEudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9ybS9UZXh0YXJlYS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm0vVGV4dGFyZWEvc3R5bGVkQ29tcG9uZW50cy50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm0vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9OZXdQb3N0L0luZm9Nc2cvSW5mb01zZy50c3giLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9OZXdQb3N0L0luZm9Nc2cvc3R5bGVkQ29tcG9uZW50cy50cyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL05ld1Bvc3QvTmV3UG9zdC50c3giLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9OZXdQb3N0L2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvTmV3UG9zdC9zdHlsZWRDb21wb25lbnRzLnRzIiwid2VicGFjazovLy8uL3BhZ2VzL3Bvc3RzL25ldy50c3giLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9uZXdQb3N0LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaG9vay1mb3JtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkJ1dHRvbiIsImxhYmVsIiwib25DbGljayIsInR5cGUiLCJCdXR0b25Db250YWluZXIiLCJzdHlsZWQiLCJidXR0b24iLCJGaWVsZCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsImVycm9ycyIsInJlZ2lzdGVyIiwiY29tcG9uZW50IiwiQ29tcG9uZW50IiwidmFsaWRhdG9yIiwiZXJyb3IiLCJpc0ZvY3VzIiwic2V0SXNGb2N1cyIsInVzZVN0YXRlIiwiaGFuZGxlQ29udHJvbCIsIm1lc3NhZ2UiLCJGaWVsZENvbnRhaW5lciIsImRpdiIsIkxhYmVsIiwicCIsIkZpZWxkQ29udGVudCIsInByb3BzIiwiaXNFcnJvciIsIkVycm9yTWVzc2FnZSIsIkZvcm0iLCJjaGlsZHJlbiIsIm9uU3VibWl0IiwiaGFuZGxlU3VibWl0IiwidXNlRm9ybSIsIm1vZGUiLCJGb3JtQ29udGFpbmVyIiwiZm9ybSIsIklucHV0IiwiSW5wdXRDb250YWluZXIiLCJpbnB1dCIsIlRleHRhcmVhIiwiVGV4dGFyZWFDb250YWluZXIiLCJ0ZXh0YXJlYSIsIkluZm9Nc2ciLCJsb2FkaW5nIiwiaXNTdWNjZXNzZWQiLCJQIiwiY29sb3IiLCJ2YWxpZGF0b3JzIiwidGl0bGUiLCJyZXF1aXJlZCIsInRleHQiLCJOZXdQb3N0IiwibmV3UG9zdFB1c2giLCJkYXRhIiwiZSIsInRhcmdldCIsInJlc2V0IiwiY29ubmVjdCIsInN0YXRlIiwibmV3UG9zdFJlZHVjZXIiLCJOZXdQb3N0Q29udGFpbmVyIiwiTmV3UG9zdFBhZ2UiLCJORVdfUE9TVF9QVVNIIiwiU1VDQ0VTU19QT1NUX1BVU0giLCJFUlJPUl9QT1NUX1BVU0giLCJwYXlsb2FkIiwic3VjY2Vzc1Bvc3RQdXNoIiwiZXJyb3JQb3N0UHVzaCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUlBOztBQUVBLE1BQU1BLE1BQWlDLEdBQUcsQ0FBQztBQUFFQyxP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Ozs7QUNGUDtBQUVBOztBQUVBLE1BQU13QyxXQUFxQixHQUFHLE1BQU0sTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQXBDOztBQUVlQSwwRUFBZixFOzs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1DLGFBQWEsR0FBRyxlQUF0QjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFtQ0EsTUFBTVosV0FBVyxHQUFJQyxJQUFELEtBQTRDO0FBQ3JFbkQsTUFBSSxFQUFFNEQsYUFEK0Q7QUFFckVHLFNBQU8sRUFBRTtBQUFFWixRQUFGO0FBQVFWLFdBQU8sRUFBRTtBQUFqQjtBQUY0RCxDQUE1QyxDQUFwQjtBQUtBLE1BQU11QixlQUFlLEdBQUcsT0FBa0M7QUFDL0RoRSxNQUFJLEVBQUU2RCxpQkFEeUQ7QUFFL0RFLFNBQU8sRUFBRTtBQUFFdEIsV0FBTyxFQUFFLEtBQVg7QUFBa0JDLGVBQVcsRUFBRTtBQUEvQjtBQUZzRCxDQUFsQyxDQUF4QjtBQUtBLE1BQU11QixhQUFhLEdBQUcsT0FBZ0M7QUFDM0RqRSxNQUFJLEVBQUU4RCxlQURxRDtBQUUzREMsU0FBTyxFQUFFO0FBQUV0QixXQUFPLEVBQUUsS0FBWDtBQUFrQjdCLFNBQUssRUFBRTtBQUF6QjtBQUZrRCxDQUFoQyxDQUF0QixDOzs7Ozs7Ozs7OztBQy9DUCxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9wb3N0cy9uZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3Bvc3RzL25ldy50c3hcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBCdXR0b25Qcm9wc1R5cGUgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuaW1wb3J0IHsgQnV0dG9uQ29udGFpbmVyIH0gZnJvbSBcIi4vc3R5bGVkQ29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgQnV0dG9uOiBSZWFjdC5GQzxCdXR0b25Qcm9wc1R5cGU+ID0gKHsgbGFiZWwsIG9uQ2xpY2ssIHR5cGUgfSkgPT4gKFxyXG4gIDxCdXR0b25Db250YWluZXJcclxuICAgIG9uQ2xpY2s9e29uQ2xpY2sgPyBvbkNsaWNrIDogKCkgPT4ge319XHJcbiAgICB0eXBlPXt0eXBlIHx8IFwiYnV0dG9uXCJ9XHJcbiAgPlxyXG4gICAge2xhYmVsfVxyXG4gIDwvQnV0dG9uQ29udGFpbmVyPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vQnV0dG9uXCI7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uQ29udGFpbmVyID0gc3R5bGVkLmJ1dHRvbmBcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAmOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzIsIDIzMiwgMjMyKTtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgRmllbGRQcm9wc1R5cGUgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5pbXBvcnQge1xyXG4gIEZpZWxkQ29udGFpbmVyLFxyXG4gIExhYmVsLFxyXG4gIEZpZWxkQ29udGVudCxcclxuICBFcnJvck1lc3NhZ2UsXHJcbn0gZnJvbSBcIi4vc3R5bGVkQ29tcG9uZW50XCI7XHJcblxyXG5jb25zdCBGaWVsZDogUmVhY3QuRkM8RmllbGRQcm9wc1R5cGU+ID0gKHtcclxuICBuYW1lLFxyXG4gIGxhYmVsLFxyXG4gIHBsYWNlaG9sZGVyLFxyXG4gIGVycm9ycyxcclxuICByZWdpc3RlcixcclxuICBjb21wb25lbnQ6IENvbXBvbmVudCxcclxuICB2YWxpZGF0b3IsXHJcbn0pID0+IHtcclxuICBjb25zdCBlcnJvciA9IGVycm9yc1tuYW1lXTtcclxuICBjb25zdCBbaXNGb2N1cywgc2V0SXNGb2N1c10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvbnRyb2w6IFJlYWN0LlJlYWN0RXZlbnRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0SXNGb2N1cyghaXNGb2N1cyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGaWVsZENvbnRhaW5lcj5cclxuICAgICAge2xhYmVsICYmIDxMYWJlbD57bGFiZWx9PC9MYWJlbD59XHJcbiAgICAgIDxGaWVsZENvbnRlbnQgaXNFcnJvcj17ZXJyb3IgJiYgIWlzRm9jdXN9PlxyXG4gICAgICAgIDxDb21wb25lbnRcclxuICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICBoYW5kbGVDb250cm9sPXtoYW5kbGVDb250cm9sfVxyXG4gICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxyXG4gICAgICAgICAgaXNGb2N1cz17aXNGb2N1c31cclxuICAgICAgICAgIHZhbGlkYXRvcj17dmFsaWRhdG9yfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvRmllbGRDb250ZW50PlxyXG4gICAgICA8RXJyb3JNZXNzYWdlPntlcnJvciAmJiAhaXNGb2N1cyAmJiBlcnJvci5tZXNzYWdlfTwvRXJyb3JNZXNzYWdlPlxyXG4gICAgPC9GaWVsZENvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmllbGQ7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9GaWVsZFwiO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZpZWxkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICAmOm5vdChsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMYWJlbCA9IHN0eWxlZC5wYFxyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBGaWVsZENvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gIGJvcmRlcjogMXB4IHNvbGlkICR7KHByb3BzKSA9PiAocHJvcHMuaXNFcnJvciA/IFwicmdiKDEzNywwLDApXCIgOiBcImJsYWNrXCIpfTtcclxuICBtYXJnaW46IDVweCAwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVycm9yTWVzc2FnZSA9IHN0eWxlZC5wYFxyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogcmdiKDEzNywgMCwgMCk7XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuXHJcbmltcG9ydCB7IEZvcm1WYWx1ZXNUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnRhaW5lcnMvTmV3UG9zdC90eXBlc1wiO1xyXG5pbXBvcnQgeyBGb3JtUHJvcHNUeXBlIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRhaW5lciB9IGZyb20gXCIuL3N0eWxlZENvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IEZvcm06IFJlYWN0LkZDPEZvcm1Qcm9wc1R5cGU+ID0gKHsgY2hpbGRyZW4sIG9uU3VibWl0IH0pID0+IHtcclxuICBjb25zdCB7IHJlZ2lzdGVyLCBlcnJvcnMsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybTxGb3JtVmFsdWVzVHlwZT4oe1xyXG4gICAgbW9kZTogXCJvbkJsdXJcIixcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtQ29udGFpbmVyIGNsYXNzTmFtZT1cImZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcbiAgICAgIHtjaGlsZHJlbihyZWdpc3RlciwgZXJyb3JzKX1cclxuICAgIDwvRm9ybUNvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCIuL0Zvcm1cIjtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGb3JtQ29udGFpbmVyID0gc3R5bGVkLmZvcm1gXHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRQcm9wc1R5cGUgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBJbnB1dENvbnRhaW5lciB9IGZyb20gXCIuL3N0eWxlZENvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IElucHV0OiBSZWFjdC5GQzxJbnB1dFByb3BzVHlwZT4gPSAoe1xyXG4gIG5hbWUsXHJcbiAgcGxhY2Vob2xkZXIsXHJcbiAgaGFuZGxlQ29udHJvbCxcclxuICByZWdpc3RlcixcclxuICBpc0ZvY3VzLFxyXG4gIHZhbGlkYXRvcixcclxufSkgPT4gKFxyXG4gIDxJbnB1dENvbnRhaW5lclxyXG4gICAgbmFtZT17bmFtZX1cclxuICAgIG9uRm9jdXM9e2hhbmRsZUNvbnRyb2x9XHJcbiAgICBvbkJsdXI9e2hhbmRsZUNvbnRyb2x9XHJcbiAgICByZWY9e3JlZ2lzdGVyKHZhbGlkYXRvcil9XHJcbiAgICBwbGFjZWhvbGRlcj17YCR7IWlzRm9jdXMgPyBwbGFjZWhvbGRlciA6IFwiXCJ9IGB9XHJcbiAgLz5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0O1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vSW5wdXRcIjtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnB1dENvbnRhaW5lciA9IHN0eWxlZC5pbnB1dGBcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgVGV4dGFyZWFQcm9wc1R5cGUgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBUZXh0YXJlYUNvbnRhaW5lciB9IGZyb20gXCIuL3N0eWxlZENvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IFRleHRhcmVhOiBSZWFjdC5GQzxUZXh0YXJlYVByb3BzVHlwZT4gPSAoe1xyXG4gIG5hbWUsXHJcbiAgaGFuZGxlQ29udHJvbCxcclxuICByZWdpc3RlcixcclxuICB2YWxpZGF0b3IsXHJcbiAgaXNGb2N1cyxcclxuICBwbGFjZWhvbGRlcixcclxufSkgPT4gKFxyXG4gIDxUZXh0YXJlYUNvbnRhaW5lclxyXG4gICAgcm93cz17MTB9XHJcbiAgICBuYW1lPXtuYW1lfVxyXG4gICAgb25Gb2N1cz17aGFuZGxlQ29udHJvbH1cclxuICAgIG9uQmx1cj17aGFuZGxlQ29udHJvbH1cclxuICAgIHJlZj17cmVnaXN0ZXIodmFsaWRhdG9yKX1cclxuICAgIHBsYWNlaG9sZGVyPXtgJHshaXNGb2N1cyA/IHBsYWNlaG9sZGVyIDogXCJcIn0gYH1cclxuICAvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dGFyZWE7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9UZXh0YXJlYVwiO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRleHRhcmVhQ29udGFpbmVyID0gc3R5bGVkLnRleHRhcmVhYFxyXG4gIGJvcmRlcjogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICByZXNpemU6IHZlcnRpY2FsO1xyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbmA7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9Gb3JtXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmllbGQgfSBmcm9tIFwiLi9GaWVsZFwiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIElucHV0IH0gZnJvbSBcIi4vSW5wdXRcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZXh0YXJlYSB9IGZyb20gXCIuL1RleHRhcmVhXCI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IEluZm9Nc2dQcm9wc1R5cGUgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBQIH0gZnJvbSBcIi4vc3R5bGVkQ29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgSW5mb01zZzogUmVhY3QuRkM8SW5mb01zZ1Byb3BzVHlwZT4gPSAoe1xyXG4gIGxvYWRpbmcsXHJcbiAgaXNTdWNjZXNzZWQsXHJcbiAgZXJyb3IsXHJcbn0pID0+IHtcclxuICBpZiAobG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxQIGNvbG9yPVwiZ3JleVwiPkxvYWRpbmcuLi48L1A+O1xyXG4gIH1cclxuXHJcbiAgaWYgKCFsb2FkaW5nICYmIGVycm9yKSB7XHJcbiAgICByZXR1cm4gPFAgY29sb3I9XCJyZWRcIj5Tb21lIGVycm9yIHdpdGggc2VydmVyKDwvUD47XHJcbiAgfVxyXG5cclxuICBpZiAoaXNTdWNjZXNzZWQpIHtcclxuICAgIHJldHVybiA8UCBjb2xvcj1cImdyZWVuXCI+UG9zdCB3YXMgY3JlYXRlZDwvUD47XHJcbiAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5mb01zZztcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQID0gc3R5bGVkLnBgXHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy5jb2xvcn07XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU3VibWl0SGFuZGxlciB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IHsgbmV3UG9zdFB1c2ggfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9uZXdQb3N0XCI7XHJcblxyXG5pbXBvcnQgRm9ybSwgeyBGaWVsZCwgSW5wdXQsIFRleHRhcmVhIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0J1dHRvblwiO1xyXG5pbXBvcnQgSW5mb01zZyBmcm9tIFwiLi9JbmZvTXNnL0luZm9Nc2dcIjtcclxuXHJcbmltcG9ydCB7IE5ld1Bvc3RQcm9wc1R5cGUsIEZvcm1WYWx1ZXNUeXBlIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgTmV3UG9zdENvbnRhaW5lciB9IGZyb20gXCIuL3N0eWxlZENvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IHZhbGlkYXRvcnMgPSB7XHJcbiAgdGl0bGU6IHtcclxuICAgIHJlcXVpcmVkOiBcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWRcIixcclxuICB9LFxyXG4gIHRleHQ6IHtcclxuICAgIHJlcXVpcmVkOiBcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWRcIixcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgTmV3UG9zdDogUmVhY3QuRkM8TmV3UG9zdFByb3BzVHlwZT4gPSAoe1xyXG4gIGxvYWRpbmcsXHJcbiAgZXJyb3IsXHJcbiAgaXNTdWNjZXNzZWQsXHJcbiAgbmV3UG9zdFB1c2gsXHJcbn0pID0+IHtcclxuICBjb25zdCBvblN1Ym1pdDogU3VibWl0SGFuZGxlcjxGb3JtVmFsdWVzVHlwZT4gPSAoZGF0YSwgZSkgPT4ge1xyXG4gICAgbmV3UG9zdFB1c2goZGF0YSk7XHJcbiAgICBlLnRhcmdldC5yZXNldCgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TmV3UG9zdENvbnRhaW5lcj5cclxuICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICB7KHJlZ2lzdGVyLCBlcnJvcnMpID0+IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJQb3N0IHRpdGxlXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVudGVyIHBvc3QgdGl0bGVcIlxyXG4gICAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17SW5wdXR9XHJcbiAgICAgICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxyXG4gICAgICAgICAgICAgIHZhbGlkYXRvcj17dmFsaWRhdG9ycy50aXRsZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgbmFtZT1cImJvZHlcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbnRlciB0ZXh0XCJcclxuICAgICAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cclxuICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRhcmVhfVxyXG4gICAgICAgICAgICAgIHJlZ2lzdGVyPXtyZWdpc3Rlcn1cclxuICAgICAgICAgICAgICB2YWxpZGF0b3I9e3ZhbGlkYXRvcnMudGV4dH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgbGFiZWw9XCJBZGRcIiAvPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgICA8SW5mb01zZyBsb2FkaW5nPXtsb2FkaW5nfSBlcnJvcj17ZXJyb3J9IGlzU3VjY2Vzc2VkPXtpc1N1Y2Nlc3NlZH0gLz5cclxuICAgIDwvTmV3UG9zdENvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RhdGUpID0+IHN0YXRlLm5ld1Bvc3RSZWR1Y2VyLCB7IG5ld1Bvc3RQdXNoIH0pKFxyXG4gIE5ld1Bvc3RcclxuKTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCIuL05ld1Bvc3RcIjtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBOZXdQb3N0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IE5ld1Bvc3QgZnJvbSBcIi4uLy4uL2NvbnRhaW5lcnMvTmV3UG9zdFwiO1xyXG5cclxuY29uc3QgTmV3UG9zdFBhZ2U6IFJlYWN0LkZDID0gKCkgPT4gPE5ld1Bvc3QgLz47XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdQb3N0UGFnZTtcclxuIiwiZXhwb3J0IGNvbnN0IE5FV19QT1NUX1BVU0ggPSBcIk5FV19QT1NUX1BVU0hcIjtcclxuZXhwb3J0IGNvbnN0IFNVQ0NFU1NfUE9TVF9QVVNIID0gXCJTVUNDRVNTX1BPU1RfUFVTSFwiO1xyXG5leHBvcnQgY29uc3QgRVJST1JfUE9TVF9QVVNIID0gXCJFUlJPUl9QT1NUX1BVU0hcIjtcclxuXHJcbmV4cG9ydCB0eXBlIERhdGFUeXBlID0ge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgYm9keTogc3RyaW5nO1xyXG59O1xyXG5cclxudHlwZSBOZXdQb3N0UHVzaEFjdGlvblR5cGUgPSB7XHJcbiAgdHlwZTogdHlwZW9mIE5FV19QT1NUX1BVU0g7XHJcbiAgcGF5bG9hZDoge1xyXG4gICAgZGF0YTogRGF0YVR5cGU7XHJcbiAgICBsb2FkaW5nOiBib29sZWFuO1xyXG4gIH07XHJcbn07XHJcblxyXG50eXBlIFN1Y2Nlc3NQb3N0UHVzaEFjdGlvblBheWxvYWRUeXBlID0ge1xyXG4gIGxvYWRpbmc6IGJvb2xlYW47XHJcbiAgaXNTdWNjZXNzZWQ6IGJvb2xlYW47XHJcbn07XHJcblxyXG50eXBlIFN1Y2Nlc3NQb3N0UHVzaEFjdGlvblR5cGUgPSB7XHJcbiAgdHlwZTogdHlwZW9mIFNVQ0NFU1NfUE9TVF9QVVNIO1xyXG4gIHBheWxvYWQ6IFN1Y2Nlc3NQb3N0UHVzaEFjdGlvblBheWxvYWRUeXBlO1xyXG59O1xyXG5cclxudHlwZSBFcnJvclBvc3RQdXNoQWN0aW9uUGF5bG9hZFR5cGUgPSB7XHJcbiAgZXJyb3I6IGJvb2xlYW47XHJcbiAgbG9hZGluZzogYm9vbGVhbjtcclxufTtcclxuXHJcbnR5cGUgRXJyb3JQb3N0UHVzaEFjdGlvblR5cGUgPSB7XHJcbiAgdHlwZTogdHlwZW9mIEVSUk9SX1BPU1RfUFVTSDtcclxuICBwYXlsb2FkOiBFcnJvclBvc3RQdXNoQWN0aW9uUGF5bG9hZFR5cGU7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbmV3UG9zdFB1c2ggPSAoZGF0YTogRGF0YVR5cGUpOiBOZXdQb3N0UHVzaEFjdGlvblR5cGUgPT4gKHtcclxuICB0eXBlOiBORVdfUE9TVF9QVVNILFxyXG4gIHBheWxvYWQ6IHsgZGF0YSwgbG9hZGluZzogdHJ1ZSB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdWNjZXNzUG9zdFB1c2ggPSAoKTogU3VjY2Vzc1Bvc3RQdXNoQWN0aW9uVHlwZSA9PiAoe1xyXG4gIHR5cGU6IFNVQ0NFU1NfUE9TVF9QVVNILFxyXG4gIHBheWxvYWQ6IHsgbG9hZGluZzogZmFsc2UsIGlzU3VjY2Vzc2VkOiB0cnVlIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVycm9yUG9zdFB1c2ggPSAoKTogRXJyb3JQb3N0UHVzaEFjdGlvblR5cGUgPT4gKHtcclxuICB0eXBlOiBFUlJPUl9QT1NUX1BVU0gsXHJcbiAgcGF5bG9hZDogeyBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IHRydWUgfSxcclxufSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhvb2stZm9ybVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9