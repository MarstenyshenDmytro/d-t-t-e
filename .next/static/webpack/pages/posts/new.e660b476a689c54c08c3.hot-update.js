webpackHotUpdate_N_E("pages/posts/new",{

/***/ "./containers/NewPost/InfoMsg/InfoMsg.tsx":
/*!************************************************!*\
  !*** ./containers/NewPost/InfoMsg/InfoMsg.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styledComponents */ "./containers/NewPost/InfoMsg/styledComponents.ts");
var _this = undefined,
    _jsxFileName = "D:\\Dima\\d-t-t-e\\containers\\NewPost\\InfoMsg\\InfoMsg.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var InfoMessage = function InfoMessage(_ref) {
  var loading = _ref.loading,
      isSuccesed = _ref.isSuccesed,
      error = _ref.error;

  if (loading) {
    return __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_1__["P"], {
      color: "grey",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 12
      }
    }, "Loading...");
  }

  if (!loading && error) {
    return __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_1__["P"], {
      color: "red",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 12
      }
    }, "Some error with server(");
  }

  if (isSuccesed) {
    return __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_1__["P"], {
      color: "green",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 12
      }
    }, "Post was created");
  }

  return null;
};

_c = InfoMessage;
/* harmony default export */ __webpack_exports__["default"] = (InfoMessage);

var _c;

$RefreshReg$(_c, "InfoMessage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9OZXdQb3N0L0luZm9Nc2cvSW5mb01zZy50c3giXSwibmFtZXMiOlsiSW5mb01lc3NhZ2UiLCJsb2FkaW5nIiwiaXNTdWNjZXNlZCIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQW9DO0FBQUEsTUFBakNDLE9BQWlDLFFBQWpDQSxPQUFpQztBQUFBLE1BQXhCQyxVQUF3QixRQUF4QkEsVUFBd0I7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQ3RELE1BQUlGLE9BQUosRUFBYTtBQUNYLFdBQU8sTUFBQyxtREFBRDtBQUFHLFdBQUssRUFBQyxNQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQVA7QUFDRDs7QUFFRCxNQUFJLENBQUNBLE9BQUQsSUFBWUUsS0FBaEIsRUFBdUI7QUFDckIsV0FBTyxNQUFDLG1EQUFEO0FBQUcsV0FBSyxFQUFDLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FBUDtBQUNEOztBQUVELE1BQUlELFVBQUosRUFBZ0I7QUFDZCxXQUFPLE1BQUMsbURBQUQ7QUFBRyxXQUFLLEVBQUMsT0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxJQUFQO0FBQ0QsQ0FiRDs7S0FBTUYsVztBQWNTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9uZXcuZTY2MGI0NzZhNjg5YzU0YzA4YzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IFAgfSBmcm9tIFwiLi9zdHlsZWRDb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBJbmZvTWVzc2FnZSA9ICh7IGxvYWRpbmcsIGlzU3VjY2VzZWQsIGVycm9yIH0pID0+IHtcclxuICBpZiAobG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxQIGNvbG9yPVwiZ3JleVwiPkxvYWRpbmcuLi48L1A+O1xyXG4gIH1cclxuXHJcbiAgaWYgKCFsb2FkaW5nICYmIGVycm9yKSB7XHJcbiAgICByZXR1cm4gPFAgY29sb3I9XCJyZWRcIj5Tb21lIGVycm9yIHdpdGggc2VydmVyKDwvUD47XHJcbiAgfVxyXG5cclxuICBpZiAoaXNTdWNjZXNlZCkge1xyXG4gICAgcmV0dXJuIDxQIGNvbG9yPVwiZ3JlZW5cIj5Qb3N0IHdhcyBjcmVhdGVkPC9QPjtcclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEluZm9NZXNzYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9