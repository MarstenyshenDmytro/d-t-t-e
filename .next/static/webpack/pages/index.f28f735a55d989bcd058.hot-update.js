webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostPreview/PostPreview.tsx":
/*!************************************************!*\
  !*** ./components/PostPreview/PostPreview.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styledComponents */ "./components/PostPreview/styledComponents.ts");
var _this = undefined,
    _jsxFileName = "D:\\Dima\\d-t-t-e\\components\\PostPreview\\PostPreview.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var PostPreview = function PostPreview(_ref) {
  var title = _ref.title,
      body = _ref.body,
      id = _ref.id;
  return __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_1__["PostPreviewContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_1__["Title"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, title), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, text));
};

_c = PostPreview;
/* harmony default export */ __webpack_exports__["default"] = (PostPreview);

var _c;

$RefreshReg$(_c, "PostPreview");

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

/***/ "./components/PostPreview/styledComponents.ts":
/*!****************************************************!*\
  !*** ./components/PostPreview/styledComponents.ts ***!
  \****************************************************/
/*! exports provided: PostPreviewContainer, Title, Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPreviewContainer", function() { return PostPreviewContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var PostPreviewContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styledComponents__PostPreviewContainer",
  componentId: "fxwa9j-0"
})(["padding:20px;border:1px solid transparent;&:hover{border-color:grey;}"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "styledComponents__Title",
  componentId: "fxwa9j-1"
})(["font-size:36px;font-weight:bold;letter-spacing:2px;"]);
var Text = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "styledComponents__Text",
  componentId: "fxwa9j-2"
})(["font-size:18px;margin:20px 0;"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0UHJldmlldy9Qb3N0UHJldmlldy50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdFByZXZpZXcvc3R5bGVkQ29tcG9uZW50cy50cyJdLCJuYW1lcyI6WyJQb3N0UHJldmlldyIsInRpdGxlIiwiYm9keSIsImlkIiwidGV4dCIsIlBvc3RQcmV2aWV3Q29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiVGl0bGUiLCJwIiwiVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTs7QUFFQSxJQUFNQSxXQUFzQyxHQUFHLFNBQXpDQSxXQUF5QztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLElBQVYsUUFBVUEsSUFBVjtBQUFBLE1BQWdCQyxFQUFoQixRQUFnQkEsRUFBaEI7QUFBQSxTQUM3QyxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUUYsS0FBUixDQURGLEVBRUUsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9HLElBQVAsQ0FGRixDQUQ2QztBQUFBLENBQS9DOztLQUFNSixXO0FBT1NBLDBFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUssb0JBQW9CLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNkVBQTFCO0FBUUEsSUFBTUMsS0FBSyxHQUFHRix5REFBTSxDQUFDRyxDQUFWO0FBQUE7QUFBQTtBQUFBLDJEQUFYO0FBTUEsSUFBTUMsSUFBSSxHQUFHSix5REFBTSxDQUFDRyxDQUFWO0FBQUE7QUFBQTtBQUFBLHFDQUFWIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmYyOGY3MzVhNTVkOTg5YmNkMDU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBQb3N0UHJldmlld1R5cGUgfSBmcm9tIFwiLi4vLi4vY29udGFpbmVycy9Qb3N0c0xpc3QvdHlwZXNcIjtcclxuXHJcbmltcG9ydCB7IFBvc3RQcmV2aWV3Q29udGFpbmVyLCBUaXRsZSwgVGV4dCB9IGZyb20gXCIuL3N0eWxlZENvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IFBvc3RQcmV2aWV3OiBSZWFjdC5GQzxQb3N0UHJldmlld1R5cGU+ID0gKHsgdGl0bGUsIGJvZHksIGlkIH0pID0+IChcclxuICA8UG9zdFByZXZpZXdDb250YWluZXI+XHJcbiAgICA8VGl0bGU+e3RpdGxlfTwvVGl0bGU+XHJcbiAgICA8VGV4dD57dGV4dH08L1RleHQ+XHJcbiAgPC9Qb3N0UHJldmlld0NvbnRhaW5lcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RQcmV2aWV3O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBvc3RQcmV2aWV3Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICY6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiBncmV5O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5wYFxyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRleHQgPSBzdHlsZWQucGBcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbmA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=