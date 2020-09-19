webpackHotUpdate_N_E("pages/posts/new",{

/***/ "./components/form/Textarea/Textarea.tsx":
/*!***********************************************!*\
  !*** ./components/form/Textarea/Textarea.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styledComponents */ "./components/form/Textarea/styledComponents.ts");
var _this = undefined,
    _jsxFileName = "D:\\Dima\\d-t-t-e\\components\\form\\Textarea\\Textarea.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Textarea = function Textarea(_ref) {
  var name = _ref.name,
      handleControl = _ref.handleControl,
      register = _ref.register,
      validator = _ref.validator,
      isFocus = _ref.isFocus;
  return __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_1__["TextareaContainer"], {
    className: "textarea txt--18",
    rows: 10,
    name: name,
    onFocus: handleControl,
    onBlur: handleControl,
    ref: register(validator),
    placeholder: "".concat(!isFocus ? "| Type Your message" : "", " "),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  });
};

_c = Textarea;
/* harmony default export */ __webpack_exports__["default"] = (Textarea);

var _c;

$RefreshReg$(_c, "Textarea");

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

/***/ "./components/form/Textarea/styledComponents.ts":
/*!******************************************************!*\
  !*** ./components/form/Textarea/styledComponents.ts ***!
  \******************************************************/
/*! exports provided: TextareaContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaContainer", function() { return TextareaContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var TextareaContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].textarea.withConfig({
  displayName: "styledComponents__TextareaContainer",
  componentId: "sc-1hqy343-0"
})(["border:none;width:100%;"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtL1RleHRhcmVhL1RleHRhcmVhLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtL1RleHRhcmVhL3N0eWxlZENvbXBvbmVudHMudHMiXSwibmFtZXMiOlsiVGV4dGFyZWEiLCJuYW1lIiwiaGFuZGxlQ29udHJvbCIsInJlZ2lzdGVyIiwidmFsaWRhdG9yIiwiaXNGb2N1cyIsIlRleHRhcmVhQ29udGFpbmVyIiwic3R5bGVkIiwidGV4dGFyZWEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxNQUFTQyxhQUFULFFBQVNBLGFBQVQ7QUFBQSxNQUF3QkMsUUFBeEIsUUFBd0JBLFFBQXhCO0FBQUEsTUFBa0NDLFNBQWxDLFFBQWtDQSxTQUFsQztBQUFBLE1BQTZDQyxPQUE3QyxRQUE2Q0EsT0FBN0M7QUFBQSxTQUNmLE1BQUMsbUVBQUQ7QUFDRSxhQUFTLEVBQUMsa0JBRFo7QUFFRSxRQUFJLEVBQUUsRUFGUjtBQUdFLFFBQUksRUFBRUosSUFIUjtBQUlFLFdBQU8sRUFBRUMsYUFKWDtBQUtFLFVBQU0sRUFBRUEsYUFMVjtBQU1FLE9BQUcsRUFBRUMsUUFBUSxDQUFDQyxTQUFELENBTmY7QUFPRSxlQUFXLFlBQUssQ0FBQ0MsT0FBRCxHQUFXLHFCQUFYLEdBQW1DLEVBQXhDLE1BUGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURlO0FBQUEsQ0FBakI7O0tBQU1MLFE7QUFZU0EsdUVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNTSxpQkFBaUIsR0FBR0MseURBQU0sQ0FBQ0MsUUFBVjtBQUFBO0FBQUE7QUFBQSwrQkFBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvbmV3LmZkZGIyYzhhNjBlMDE5MDViZjllLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBUZXh0YXJlYUNvbnRhaW5lciB9IGZyb20gXCIuL3N0eWxlZENvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IFRleHRhcmVhID0gKHsgbmFtZSwgaGFuZGxlQ29udHJvbCwgcmVnaXN0ZXIsIHZhbGlkYXRvciwgaXNGb2N1cyB9KSA9PiAoXHJcbiAgPFRleHRhcmVhQ29udGFpbmVyXHJcbiAgICBjbGFzc05hbWU9XCJ0ZXh0YXJlYSB0eHQtLTE4XCJcclxuICAgIHJvd3M9ezEwfVxyXG4gICAgbmFtZT17bmFtZX1cclxuICAgIG9uRm9jdXM9e2hhbmRsZUNvbnRyb2x9XHJcbiAgICBvbkJsdXI9e2hhbmRsZUNvbnRyb2x9XHJcbiAgICByZWY9e3JlZ2lzdGVyKHZhbGlkYXRvcil9XHJcbiAgICBwbGFjZWhvbGRlcj17YCR7IWlzRm9jdXMgPyBcInwgVHlwZSBZb3VyIG1lc3NhZ2VcIiA6IFwiXCJ9IGB9XHJcbiAgLz5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHRhcmVhO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRleHRhcmVhQ29udGFpbmVyID0gc3R5bGVkLnRleHRhcmVhYFxyXG4gIGJvcmRlcjogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuYDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==