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

  var classes = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (mainClass) {
    return error && !isFocus ? "".concat(mainClass, " ").concat(mainClass, "_error") : mainClass;
  }, [error, isFocus]);
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
  })), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, error && !isFocus && error.message));
};

_s(Field, "0JKsLAYk5WiqKTsS1Tn1h5ysmkM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtL0ZpZWxkL0ZpZWxkLnRzeCJdLCJuYW1lcyI6WyJGaWVsZCIsIm5hbWUiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwiZXJyb3JzIiwicmVnaXN0ZXIiLCJDb21wb25lbnQiLCJjb21wb25lbnQiLCJ2YWxpZGF0b3IiLCJlcnJvciIsInVzZVN0YXRlIiwiaXNGb2N1cyIsInNldElzRm9jdXMiLCJoYW5kbGVDb250cm9sIiwiY2xhc3NlcyIsInVzZUNhbGxiYWNrIiwibWFpbkNsYXNzIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FRUjtBQUFBOztBQUFBLE1BUEpDLElBT0ksUUFQSkEsSUFPSTtBQUFBLE1BTkpDLEtBTUksUUFOSkEsS0FNSTtBQUFBLE1BTEpDLFdBS0ksUUFMSkEsV0FLSTtBQUFBLE1BSkpDLE1BSUksUUFKSkEsTUFJSTtBQUFBLE1BSEpDLFFBR0ksUUFISkEsUUFHSTtBQUFBLE1BRk9DLFNBRVAsUUFGSkMsU0FFSTtBQUFBLE1BREpDLFNBQ0ksUUFESkEsU0FDSTtBQUNKLE1BQU1DLEtBQUssR0FBR0wsTUFBTSxDQUFDSCxJQUFELENBQXBCOztBQURJLGtCQUUwQlMsc0RBQVEsQ0FBQyxLQUFELENBRmxDO0FBQUEsTUFFR0MsT0FGSDtBQUFBLE1BRVlDLFVBRlo7O0FBSUosTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCRCxjQUFVLENBQUMsQ0FBQ0QsT0FBRixDQUFWO0FBQ0QsR0FGRDs7QUFJQSxNQUFNRyxPQUFPLEdBQUdDLHlEQUFXLENBQ3pCLFVBQUNDLFNBQUQ7QUFBQSxXQUNFUCxLQUFLLElBQUksQ0FBQ0UsT0FBVixhQUF1QkssU0FBdkIsY0FBb0NBLFNBQXBDLGNBQXdEQSxTQUQxRDtBQUFBLEdBRHlCLEVBR3pCLENBQUNQLEtBQUQsRUFBUUUsT0FBUixDQUh5QixDQUEzQjtBQU1BLFNBQ0UsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dULEtBQUssSUFBSSxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUUEsS0FBUixDQURaLEVBRUUsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFEO0FBQ0UsUUFBSSxFQUFFRCxJQURSO0FBRUUsZUFBVyxFQUFFRSxXQUZmO0FBR0UsaUJBQWEsRUFBRVUsYUFIakI7QUFJRSxZQUFRLEVBQUVSLFFBSlo7QUFLRSxXQUFPLEVBQUVNLE9BTFg7QUFNRSxhQUFTLEVBQUVILFNBTmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRkYsRUFZRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlDLEtBQUssSUFBSSxDQUFDRSxPQUFWLElBQXFCRixLQUFLLENBQUNRLE9BQS9CLENBWkYsQ0FERjtBQWdCRCxDQXRDRDs7R0FBTWpCLEs7O0tBQUFBLEs7QUF3Q1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL25ldy4xMzkzYmJkOWFlMGMyN2E1Mzk5ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgRmllbGRDb250YWluZXIsIExhYmVsLCBGaWVsZENvbnRlbnQgfSBmcm9tIFwiLi9zdHlsZWRDb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IEZpZWxkID0gKHtcclxuICBuYW1lLFxyXG4gIGxhYmVsLFxyXG4gIHBsYWNlaG9sZGVyLFxyXG4gIGVycm9ycyxcclxuICByZWdpc3RlcixcclxuICBjb21wb25lbnQ6IENvbXBvbmVudCxcclxuICB2YWxpZGF0b3IsXHJcbn0pID0+IHtcclxuICBjb25zdCBlcnJvciA9IGVycm9yc1tuYW1lXTtcclxuICBjb25zdCBbaXNGb2N1cywgc2V0SXNGb2N1c10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvbnRyb2wgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0ZvY3VzKCFpc0ZvY3VzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlQ2FsbGJhY2soXHJcbiAgICAobWFpbkNsYXNzKSA9PlxyXG4gICAgICBlcnJvciAmJiAhaXNGb2N1cyA/IGAke21haW5DbGFzc30gJHttYWluQ2xhc3N9X2Vycm9yYCA6IG1haW5DbGFzcyxcclxuICAgIFtlcnJvciwgaXNGb2N1c11cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZpZWxkQ29udGFpbmVyPlxyXG4gICAgICB7bGFiZWwgJiYgPExhYmVsPntsYWJlbH08L0xhYmVsPn1cclxuICAgICAgPEZpZWxkQ29udGVudD5cclxuICAgICAgICA8Q29tcG9uZW50XHJcbiAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgaGFuZGxlQ29udHJvbD17aGFuZGxlQ29udHJvbH1cclxuICAgICAgICAgIHJlZ2lzdGVyPXtyZWdpc3Rlcn1cclxuICAgICAgICAgIGlzRm9jdXM9e2lzRm9jdXN9XHJcbiAgICAgICAgICB2YWxpZGF0b3I9e3ZhbGlkYXRvcn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0ZpZWxkQ29udGVudD5cclxuICAgICAgPHA+e2Vycm9yICYmICFpc0ZvY3VzICYmIGVycm9yLm1lc3NhZ2V9PC9wPlxyXG4gICAgPC9GaWVsZENvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmllbGQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=