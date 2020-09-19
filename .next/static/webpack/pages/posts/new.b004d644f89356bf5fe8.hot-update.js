webpackHotUpdate_N_E("pages/posts/new",{

/***/ "./components/form/Form/Form.tsx":
/*!***************************************!*\
  !*** ./components/form/Form/Form.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styledComponents */ "./components/form/Form/styledComponents.ts");
var _this = undefined,
    _jsxFileName = "D:\\Dima\\d-t-t-e\\components\\form\\Form\\Form.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Form = function Form(_ref) {
  _s();

  var children = _ref.children,
      onSubmit = _ref.onSubmit;

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["useForm"])({
    mode: "onBlur"
  }),
      register = _useForm.register,
      errors = _useForm.errors,
      handleSubmit = _useForm.handleSubmit;

  return __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__["FormContainer"], {
    className: "form",
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, children(register, errors));
};

_s(Form, "CvCMr/aFHOfjpy7piEeMvygciec=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_1__["useForm"]];
});

_c = Form;
/* harmony default export */ __webpack_exports__["default"] = (Form);

var _c;

$RefreshReg$(_c, "Form");

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

/***/ "./components/form/Form/styledComponents.ts":
/*!**************************************************!*\
  !*** ./components/form/Form/styledComponents.ts ***!
  \**************************************************/
/*! exports provided: FormContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormContainer", function() { return FormContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].form.withConfig({
  displayName: "styledComponents__FormContainer",
  componentId: "sc-2urd1e-0"
})(["max-width:500px;"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtL0Zvcm0vRm9ybS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZm9ybS9Gb3JtL3N0eWxlZENvbXBvbmVudHMudHMiXSwibmFtZXMiOlsiRm9ybSIsImNoaWxkcmVuIiwib25TdWJtaXQiLCJ1c2VGb3JtIiwibW9kZSIsInJlZ2lzdGVyIiwiZXJyb3JzIiwiaGFuZGxlU3VibWl0IiwiRm9ybUNvbnRhaW5lciIsInN0eWxlZCIsImZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQTRCO0FBQUE7O0FBQUEsTUFBekJDLFFBQXlCLFFBQXpCQSxRQUF5QjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxpQkFDSUMsK0RBQU8sQ0FBQztBQUNqREMsUUFBSSxFQUFFO0FBRDJDLEdBQUQsQ0FEWDtBQUFBLE1BQy9CQyxRQUQrQixZQUMvQkEsUUFEK0I7QUFBQSxNQUNyQkMsTUFEcUIsWUFDckJBLE1BRHFCO0FBQUEsTUFDYkMsWUFEYSxZQUNiQSxZQURhOztBQUt2QyxTQUNFLE1BQUMsK0RBQUQ7QUFBZSxhQUFTLEVBQUMsTUFBekI7QUFBZ0MsWUFBUSxFQUFFQSxZQUFZLENBQUNMLFFBQUQsQ0FBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxRQUFRLENBQUNJLFFBQUQsRUFBV0MsTUFBWCxDQURYLENBREY7QUFLRCxDQVZEOztHQUFNTixJO1VBQ3VDRyx1RDs7O0tBRHZDSCxJO0FBWVNBLG1FQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTVEsYUFBYSxHQUFHQyx5REFBTSxDQUFDQyxJQUFWO0FBQUE7QUFBQTtBQUFBLHdCQUFuQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9uZXcuYjAwNGQ2NDRmODkzNTZiZjVmZTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuXHJcbmltcG9ydCB7IEZvcm1Db250YWluZXIgfSBmcm9tIFwiLi9zdHlsZWRDb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBGb3JtID0gKHsgY2hpbGRyZW4sIG9uU3VibWl0IH0pID0+IHtcclxuICBjb25zdCB7IHJlZ2lzdGVyLCBlcnJvcnMsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybSh7XHJcbiAgICBtb2RlOiBcIm9uQmx1clwiLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1Db250YWluZXIgY2xhc3NOYW1lPVwiZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuICAgICAge2NoaWxkcmVuKHJlZ2lzdGVyLCBlcnJvcnMpfVxyXG4gICAgPC9Gb3JtQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvcm1Db250YWluZXIgPSBzdHlsZWQuZm9ybWBcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG5gO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9