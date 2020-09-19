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
      lineNumber: 13,
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

/***/ }),

/***/ "./components/form/Input/styledComponents.ts":
/*!***************************************************!*\
  !*** ./components/form/Input/styledComponents.ts ***!
  \***************************************************/
/*! exports provided: InputContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputContainer", function() { return InputContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var InputContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input.withConfig({
  displayName: "styledComponents__InputContainer",
  componentId: "jlfdtx-0"
})(["border:none;font-size:18px;width:100%;"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtL0lucHV0L0lucHV0LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtL0lucHV0L3N0eWxlZENvbXBvbmVudHMudHMiXSwibmFtZXMiOlsiSW5wdXQiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJoYW5kbGVDb250cm9sIiwicmVnaXN0ZXIiLCJpc0ZvY3VzIiwidmFsaWRhdG9yIiwiSW5wdXRDb250YWluZXIiLCJzdHlsZWQiLCJpbnB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUTtBQUFBLE1BQ1pDLElBRFksUUFDWkEsSUFEWTtBQUFBLE1BRVpDLFdBRlksUUFFWkEsV0FGWTtBQUFBLE1BR1pDLGFBSFksUUFHWkEsYUFIWTtBQUFBLE1BSVpDLFFBSlksUUFJWkEsUUFKWTtBQUFBLE1BS1pDLE9BTFksUUFLWkEsT0FMWTtBQUFBLE1BTVpDLFNBTlksUUFNWkEsU0FOWTtBQUFBLFNBUVosTUFBQyxnRUFBRDtBQUNFLFFBQUksRUFBRUwsSUFEUjtBQUVFLFdBQU8sRUFBRUUsYUFGWDtBQUdFLFVBQU0sRUFBRUEsYUFIVjtBQUlFLE9BQUcsRUFBRUMsUUFBUSxDQUFDRSxTQUFELENBSmY7QUFLRSxlQUFXLFlBQUssQ0FBQ0QsT0FBRCxHQUFXSCxXQUFYLEdBQXlCLEVBQTlCLE1BTGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJZO0FBQUEsQ0FBZDs7S0FBTUYsSztBQWlCU0Esb0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNTyxjQUFjLEdBQUdDLHlEQUFNLENBQUNDLEtBQVY7QUFBQTtBQUFBO0FBQUEsOENBQXBCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL25ldy5jNGFjZGE5MjZiNzYxNzg2NThiNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRDb250YWluZXIgfSBmcm9tIFwiLi9zdHlsZWRDb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBJbnB1dCA9ICh7XHJcbiAgbmFtZSxcclxuICBwbGFjZWhvbGRlcixcclxuICBoYW5kbGVDb250cm9sLFxyXG4gIHJlZ2lzdGVyLFxyXG4gIGlzRm9jdXMsXHJcbiAgdmFsaWRhdG9yLFxyXG59KSA9PiAoXHJcbiAgPElucHV0Q29udGFpbmVyXHJcbiAgICBuYW1lPXtuYW1lfVxyXG4gICAgb25Gb2N1cz17aGFuZGxlQ29udHJvbH1cclxuICAgIG9uQmx1cj17aGFuZGxlQ29udHJvbH1cclxuICAgIHJlZj17cmVnaXN0ZXIodmFsaWRhdG9yKX1cclxuICAgIHBsYWNlaG9sZGVyPXtgJHshaXNGb2N1cyA/IHBsYWNlaG9sZGVyIDogXCJcIn0gYH1cclxuICAvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgSW5wdXRDb250YWluZXIgPSBzdHlsZWQuaW5wdXRgXHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB3aWR0aDogMTAwJTtcclxuYDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==