webpackHotUpdate_N_E("pages/posts/[postId]",{

/***/ "./containers/PostDetails/PostDetails.tsx":
/*!************************************************!*\
  !*** ./containers/PostDetails/PostDetails.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");


var PostDetails = function PostDetails(_ref) {
  var data = _ref.data,
      error = _ref.error;
  console.log(props);
  return null;
};

_c = PostDetails;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(function (state) {
  return state.postReducer;
})(PostDetails));

var _c;

$RefreshReg$(_c, "PostDetails");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9Qb3N0RGV0YWlscy9Qb3N0RGV0YWlscy50c3giXSwibmFtZXMiOlsiUG9zdERldGFpbHMiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJjb25uZWN0Iiwic3RhdGUiLCJwb3N0UmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTs7QUFJQSxJQUFNQSxXQUF1QyxHQUFHLFNBQTFDQSxXQUEwQyxPQUFxQjtBQUFBLE1BQWxCQyxJQUFrQixRQUFsQkEsSUFBa0I7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDbkVDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQyxLQUFaO0FBQ0EsU0FBTyxJQUFQO0FBQ0QsQ0FIRDs7S0FBTUwsVztBQUtTTSwwSEFBTyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLFdBQWpCO0FBQUEsQ0FBRCxDQUFQLENBQXNDUixXQUF0QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL1twb3N0SWRdLmMxMmI4YmM5N2E1NWVjNjc5NThmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCB7IEluaXRpYWxTdGF0ZVR5cGUgfSBmcm9tIFwiLi4vLi4vcmVkdXgvcmVkdWNlcnMvcG9zdFwiO1xyXG5cclxuY29uc3QgUG9zdERldGFpbHM6IFJlYWN0LkZDPEluaXRpYWxTdGF0ZVR5cGU+ID0gKHsgZGF0YSwgZXJyb3IgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHByb3BzKTtcclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0UmVkdWNlcikoUG9zdERldGFpbHMpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9