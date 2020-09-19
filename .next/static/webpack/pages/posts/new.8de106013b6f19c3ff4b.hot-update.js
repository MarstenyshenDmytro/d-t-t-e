webpackHotUpdate_N_E("pages/posts/new",{

/***/ "./components/form/Input/Input.tsx":
/*!*****************************************!*\
  !*** ./components/form/Input/Input.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styledComponents */ "./components/form/Input/styledComponents.ts");
var _this = undefined,
    _jsxFileName = "D:\\Dima\\d-t-t-e\\components\\form\\Input\\Input.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Input = function Input(_ref) {
  var name = _ref.name,
      placeholder = _ref.placeholder,
      handleControl = _ref.handleControl,
      register = _ref.register,
      isFocus = _ref.isFocus,
      validator = _ref.validator;
  return __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_1__["InputContainer"], {
    name: name,
    onFocus: handleControl,
    onBlur: handleControl,
    ref: register(validator),
    placeholder: "".concat(!isFocus ? placeholder : "", " "),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 3
    }
  });
};

_c = Input;
/* harmony default export */ __webpack_exports__["default"] = (Input);

var _c;

$RefreshReg$(_c, "Input");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtL0lucHV0L0lucHV0LnRzeCJdLCJuYW1lcyI6WyJJbnB1dCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsImhhbmRsZUNvbnRyb2wiLCJyZWdpc3RlciIsImlzRm9jdXMiLCJ2YWxpZGF0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7O0FBRUEsSUFBTUEsS0FBK0IsR0FBRyxTQUFsQ0EsS0FBa0M7QUFBQSxNQUN0Q0MsSUFEc0MsUUFDdENBLElBRHNDO0FBQUEsTUFFdENDLFdBRnNDLFFBRXRDQSxXQUZzQztBQUFBLE1BR3RDQyxhQUhzQyxRQUd0Q0EsYUFIc0M7QUFBQSxNQUl0Q0MsUUFKc0MsUUFJdENBLFFBSnNDO0FBQUEsTUFLdENDLE9BTHNDLFFBS3RDQSxPQUxzQztBQUFBLE1BTXRDQyxTQU5zQyxRQU10Q0EsU0FOc0M7QUFBQSxTQVF0QyxNQUFDLGdFQUFEO0FBQ0UsUUFBSSxFQUFFTCxJQURSO0FBRUUsV0FBTyxFQUFFRSxhQUZYO0FBR0UsVUFBTSxFQUFFQSxhQUhWO0FBSUUsT0FBRyxFQUFFQyxRQUFRLENBQUNFLFNBQUQsQ0FKZjtBQUtFLGVBQVcsWUFBSyxDQUFDRCxPQUFELEdBQVdILFdBQVgsR0FBeUIsRUFBOUIsTUFMYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUnNDO0FBQUEsQ0FBeEM7O0tBQU1GLEs7QUFpQlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL25ldy44ZGUxMDYwMTNiNmYxOWMzZmY0Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRQcm9wc1R5cGUgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBJbnB1dENvbnRhaW5lciB9IGZyb20gXCIuL3N0eWxlZENvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IElucHV0OiBSZWFjdC5GQzxJbnB1dFByb3BzVHlwZT4gPSAoe1xyXG4gIG5hbWUsXHJcbiAgcGxhY2Vob2xkZXIsXHJcbiAgaGFuZGxlQ29udHJvbCxcclxuICByZWdpc3RlcixcclxuICBpc0ZvY3VzLFxyXG4gIHZhbGlkYXRvcixcclxufSkgPT4gKFxyXG4gIDxJbnB1dENvbnRhaW5lclxyXG4gICAgbmFtZT17bmFtZX1cclxuICAgIG9uRm9jdXM9e2hhbmRsZUNvbnRyb2x9XHJcbiAgICBvbkJsdXI9e2hhbmRsZUNvbnRyb2x9XHJcbiAgICByZWY9e3JlZ2lzdGVyKHZhbGlkYXRvcil9XHJcbiAgICBwbGFjZWhvbGRlcj17YCR7IWlzRm9jdXMgPyBwbGFjZWhvbGRlciA6IFwiXCJ9IGB9XHJcbiAgLz5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9