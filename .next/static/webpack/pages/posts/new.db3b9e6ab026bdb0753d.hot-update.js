webpackHotUpdate_N_E("pages/posts/new",{

/***/ "./components/Button/Button.tsx":
/*!**************************************!*\
  !*** ./components/Button/Button.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styledComponents */ "./components/Button/styledComponents.ts");
var _this = undefined,
    _jsxFileName = "D:\\Dima\\d-t-t-e\\components\\Button\\Button.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Button = function Button(_ref) {
  var label = _ref.label,
      onClick = _ref.onClick,
      type = _ref.type;
  return __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_1__["ButtonContainer"], {
    onClick: onClick ? onClick : function () {},
    type: type || "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }, label);
};

_c = Button;
/* harmony default export */ __webpack_exports__["default"] = (Button);

var _c;

$RefreshReg$(_c, "Button");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Button/styledComponents.ts":
/*!***********************************************!*\
  !*** ./components/Button/styledComponents.ts ***!
  \***********************************************/
/*! exports provided: ButtonContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonContainer", function() { return ButtonContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "styledComponents__ButtonContainer",
  componentId: "sc-189u61d-0"
})(["padding:20px 10px;border:1px solid grey;background-color:transparent;"]);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdXR0b24vc3R5bGVkQ29tcG9uZW50cy50cyJdLCJuYW1lcyI6WyJCdXR0b24iLCJsYWJlbCIsIm9uQ2xpY2siLCJ0eXBlIiwiQnV0dG9uQ29udGFpbmVyIiwic3R5bGVkIiwiYnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBOztBQUVBLElBQU1BLE1BQWlDLEdBQUcsU0FBcENBLE1BQW9DO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsT0FBVixRQUFVQSxPQUFWO0FBQUEsTUFBbUJDLElBQW5CLFFBQW1CQSxJQUFuQjtBQUFBLFNBQ3hDLE1BQUMsaUVBQUQ7QUFDRSxXQUFPLEVBQUVELE9BQU8sR0FBR0EsT0FBSCxHQUFhLFlBQU0sQ0FBRSxDQUR2QztBQUVFLFFBQUksRUFBRUMsSUFBSSxJQUFJLFFBRmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJR0YsS0FKSCxDQUR3QztBQUFBLENBQTFDOztLQUFNRCxNO0FBU1NBLHFFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNSSxlQUFlLEdBQUdDLHlEQUFNLENBQUNDLE1BQVY7QUFBQTtBQUFBO0FBQUEsNkVBQXJCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL25ldy5kYjNiOWU2YWIwMjZiZGIwNzUzZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgQnV0dG9uUHJvcHNUeXBlIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuXHJcbmltcG9ydCB7IEJ1dHRvbkNvbnRhaW5lciB9IGZyb20gXCIuL3N0eWxlZENvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IEJ1dHRvbjogUmVhY3QuRkM8QnV0dG9uUHJvcHNUeXBlPiA9ICh7IGxhYmVsLCBvbkNsaWNrLCB0eXBlIH0pID0+IChcclxuICA8QnV0dG9uQ29udGFpbmVyXHJcbiAgICBvbkNsaWNrPXtvbkNsaWNrID8gb25DbGljayA6ICgpID0+IHt9fVxyXG4gICAgdHlwZT17dHlwZSB8fCBcImJ1dHRvblwifVxyXG4gID5cclxuICAgIHtsYWJlbH1cclxuICA8L0J1dHRvbkNvbnRhaW5lcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b25Db250YWluZXIgPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5gO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9