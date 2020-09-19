webpackHotUpdate_N_E("pages/posts/new",{

/***/ "./components/form/Field/Field.tsx":
/*!*****************************************!*\
  !*** ./components/form/Field/Field.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styledComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styledComponent */ "./components/form/Field/styledComponent.ts");
var _this = undefined,
    _jsxFileName = "D:\\Dima\\d-t-t-e\\components\\form\\Field\\Field.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Field = function Field(_ref) {
  _s();

  var name = _ref.name,
      label = _ref.label,
      placeholder = _ref.placeholder,
      errors = _ref.errors,
      register = _ref.register,
      Component = _ref.component,
      validator = _ref.validator;
  var error = errors[name];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isFocus = _useState[0],
      setIsFocus = _useState[1];

  var handleControl = function handleControl() {
    setIsFocus(!isFocus);
  };

  return __jsx(_styledComponent__WEBPACK_IMPORTED_MODULE_1__["FieldContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, label && __jsx(_styledComponent__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, label), __jsx(_styledComponent__WEBPACK_IMPORTED_MODULE_1__["FieldContent"], {
    isError: error && !isFocus,
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  })), __jsx(_styledComponent__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, error && !isFocus && error.message));
};

_s(Field, "Ioko+NurZnYcx83iF0mDDG6apuM=");

_c = Field;
/* harmony default export */ __webpack_exports__["default"] = (Field);

var _c;

$RefreshReg$(_c, "Field");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtL0ZpZWxkL0ZpZWxkLnRzeCJdLCJuYW1lcyI6WyJGaWVsZCIsIm5hbWUiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwiZXJyb3JzIiwicmVnaXN0ZXIiLCJDb21wb25lbnQiLCJjb21wb25lbnQiLCJ2YWxpZGF0b3IiLCJlcnJvciIsInVzZVN0YXRlIiwiaXNGb2N1cyIsInNldElzRm9jdXMiLCJoYW5kbGVDb250cm9sIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7O0FBT0EsSUFBTUEsS0FBK0IsR0FBRyxTQUFsQ0EsS0FBa0MsT0FRbEM7QUFBQTs7QUFBQSxNQVBKQyxJQU9JLFFBUEpBLElBT0k7QUFBQSxNQU5KQyxLQU1JLFFBTkpBLEtBTUk7QUFBQSxNQUxKQyxXQUtJLFFBTEpBLFdBS0k7QUFBQSxNQUpKQyxNQUlJLFFBSkpBLE1BSUk7QUFBQSxNQUhKQyxRQUdJLFFBSEpBLFFBR0k7QUFBQSxNQUZPQyxTQUVQLFFBRkpDLFNBRUk7QUFBQSxNQURKQyxTQUNJLFFBREpBLFNBQ0k7QUFDSixNQUFNQyxLQUFLLEdBQUdMLE1BQU0sQ0FBQ0gsSUFBRCxDQUFwQjs7QUFESSxrQkFFMEJTLHNEQUFRLENBQUMsS0FBRCxDQUZsQztBQUFBLE1BRUdDLE9BRkg7QUFBQSxNQUVZQyxVQUZaOztBQUlKLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQkQsY0FBVSxDQUFDLENBQUNELE9BQUYsQ0FBVjtBQUNELEdBRkQ7O0FBSUEsU0FDRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1QsS0FBSyxJQUFJLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRQSxLQUFSLENBRFosRUFFRSxNQUFDLDZEQUFEO0FBQWMsV0FBTyxFQUFFTyxLQUFLLElBQUksQ0FBQ0UsT0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsU0FBRDtBQUNFLFFBQUksRUFBRVYsSUFEUjtBQUVFLGVBQVcsRUFBRUUsV0FGZjtBQUdFLGlCQUFhLEVBQUVVLGFBSGpCO0FBSUUsWUFBUSxFQUFFUixRQUpaO0FBS0UsV0FBTyxFQUFFTSxPQUxYO0FBTUUsYUFBUyxFQUFFSCxTQU5iO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZGLEVBWUUsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWVDLEtBQUssSUFBSSxDQUFDRSxPQUFWLElBQXFCRixLQUFLLENBQUNLLE9BQTFDLENBWkYsQ0FERjtBQWdCRCxDQWhDRDs7R0FBTWQsSzs7S0FBQUEsSztBQWtDU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvbmV3LmNjMTA3MmM3OWM2NmI0MTA1OTcyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IEZpZWxkUHJvcHNUeXBlIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuaW1wb3J0IHtcclxuICBGaWVsZENvbnRhaW5lcixcclxuICBMYWJlbCxcclxuICBGaWVsZENvbnRlbnQsXHJcbiAgRXJyb3JNZXNzYWdlLFxyXG59IGZyb20gXCIuL3N0eWxlZENvbXBvbmVudFwiO1xyXG5cclxuY29uc3QgRmllbGQ6IFJlYWN0LkZDPEZpZWxkUHJvcHNUeXBlPiA9ICh7XHJcbiAgbmFtZSxcclxuICBsYWJlbCxcclxuICBwbGFjZWhvbGRlcixcclxuICBlcnJvcnMsXHJcbiAgcmVnaXN0ZXIsXHJcbiAgY29tcG9uZW50OiBDb21wb25lbnQsXHJcbiAgdmFsaWRhdG9yLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgZXJyb3IgPSBlcnJvcnNbbmFtZV07XHJcbiAgY29uc3QgW2lzRm9jdXMsIHNldElzRm9jdXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDb250cm9sID0gKCkgPT4ge1xyXG4gICAgc2V0SXNGb2N1cyghaXNGb2N1cyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGaWVsZENvbnRhaW5lcj5cclxuICAgICAge2xhYmVsICYmIDxMYWJlbD57bGFiZWx9PC9MYWJlbD59XHJcbiAgICAgIDxGaWVsZENvbnRlbnQgaXNFcnJvcj17ZXJyb3IgJiYgIWlzRm9jdXN9PlxyXG4gICAgICAgIDxDb21wb25lbnRcclxuICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICBoYW5kbGVDb250cm9sPXtoYW5kbGVDb250cm9sfVxyXG4gICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxyXG4gICAgICAgICAgaXNGb2N1cz17aXNGb2N1c31cclxuICAgICAgICAgIHZhbGlkYXRvcj17dmFsaWRhdG9yfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvRmllbGRDb250ZW50PlxyXG4gICAgICA8RXJyb3JNZXNzYWdlPntlcnJvciAmJiAhaXNGb2N1cyAmJiBlcnJvci5tZXNzYWdlfTwvRXJyb3JNZXNzYWdlPlxyXG4gICAgPC9GaWVsZENvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmllbGQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=