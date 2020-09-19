webpackHotUpdate_N_E("pages/posts/[postId]",{

/***/ "./components/Post/Comment/Comment.tsx":
/*!*********************************************!*\
  !*** ./components/Post/Comment/Comment.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styledComponents */ "./components/Post/Comment/styledComponents.ts");
var _this = undefined,
    _jsxFileName = "D:\\Dima\\d-t-t-e\\components\\Post\\Comment\\Comment.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Comment = function Comment(_ref) {
  var id = _ref.id,
      postId = _ref.postId,
      body = _ref.body;
  return __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_1__["CommentContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 3
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_1__["CommentAdditionalText"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, "Post id: ".concat(postId)), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_1__["CommentAdditionalText"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, "Comment: ".concat(id)));
};

_c = Comment;
/* harmony default export */ __webpack_exports__["default"] = (Comment);

var _c;

$RefreshReg$(_c, "Comment");

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

/***/ "./components/Post/Comment/styledComponents.ts":
/*!*****************************************************!*\
  !*** ./components/Post/Comment/styledComponents.ts ***!
  \*****************************************************/
/*! exports provided: CommentContainer, CommentAdditionalText, CommentText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentContainer", function() { return CommentContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentAdditionalText", function() { return CommentAdditionalText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentText", function() { return CommentText; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var CommentContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styledComponents__CommentContainer",
  componentId: "tbgut7-0"
})(["padding:15px;border-bottom:1px solid grey;&:not(last-child){margin-bottom:20px;}"]);
var CommentAdditionalText = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "styledComponents__CommentAdditionalText",
  componentId: "tbgut7-1"
})(["font-size:14px;color:grey;"]);
var CommentText = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "styledComponents__CommentText",
  componentId: "tbgut7-2"
})(["margin-top:20px;"]);

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

/***/ "./components/Post/Post.tsx":
/*!**********************************!*\
  !*** ./components/Post/Post.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Link */ "./components/Link/index.ts");
/* harmony import */ var _Comment_Comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Comment/Comment */ "./components/Post/Comment/Comment.tsx");
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styledComponents */ "./components/Post/styledComponents.ts");
var _this = undefined,
    _jsxFileName = "D:\\Dima\\d-t-t-e\\components\\Post\\Post.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Post = function Post(_ref) {
  var title = _ref.title,
      body = _ref.body,
      id = _ref.id,
      comments = _ref.comments;
  return __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__["PostContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 3
    }
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: "back",
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__["PostContent"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__["Title"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, title), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__["PostId"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, "Post: ".concat(id))), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__["PostText"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, body)), comments.length && comments.reverse().map(function (_ref2) {
    var id = _ref2.id,
        postId = _ref2.postId,
        body = _ref2.body;
    return __jsx(_Comment_Comment__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: id,
      postId: postId,
      body: body,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }
    });
  }));
};

_c = Post;
/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c;

$RefreshReg$(_c, "Post");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0L0NvbW1lbnQvQ29tbWVudC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdC9Db21tZW50L3N0eWxlZENvbXBvbmVudHMudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdC9Qb3N0LnRzeCJdLCJuYW1lcyI6WyJDb21tZW50IiwiaWQiLCJwb3N0SWQiLCJib2R5IiwiQ29tbWVudENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkNvbW1lbnRBZGRpdGlvbmFsVGV4dCIsInAiLCJDb21tZW50VGV4dCIsIlBvc3QiLCJ0aXRsZSIsImNvbW1lbnRzIiwibGVuZ3RoIiwicmV2ZXJzZSIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTs7QUFNQSxJQUFNQSxPQUFtQyxHQUFHLFNBQXRDQSxPQUFzQztBQUFBLE1BQUdDLEVBQUgsUUFBR0EsRUFBSDtBQUFBLE1BQU9DLE1BQVAsUUFBT0EsTUFBUDtBQUFBLE1BQWVDLElBQWYsUUFBZUEsSUFBZjtBQUFBLFNBQzFDLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBb0NELE1BQXBDLEVBREYsRUFFRSxNQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBQW9DRCxFQUFwQyxFQUZGLENBRDBDO0FBQUEsQ0FBNUM7O0tBQU1ELE87QUFPU0Esc0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUksZ0JBQWdCLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsd0ZBQXRCO0FBUUEsSUFBTUMscUJBQXFCLEdBQUdGLHlEQUFNLENBQUNHLENBQVY7QUFBQTtBQUFBO0FBQUEsa0NBQTNCO0FBS0EsSUFBTUMsV0FBVyxHQUFHSix5REFBTSxDQUFDRyxDQUFWO0FBQUE7QUFBQTtBQUFBLHdCQUFqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZQO0FBQ0E7QUFFQTtBQUdBOztBQVNBLElBQU1FLElBQXdCLEdBQUcsU0FBM0JBLElBQTJCO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVVIsSUFBVixRQUFVQSxJQUFWO0FBQUEsTUFBZ0JGLEVBQWhCLFFBQWdCQSxFQUFoQjtBQUFBLE1BQW9CVyxRQUFwQixRQUFvQkEsUUFBcEI7QUFBQSxTQUMvQixNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZDQUFEO0FBQU0sUUFBSSxFQUFDLE1BQVg7QUFBa0IsUUFBSSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRRCxLQUFSLENBREYsRUFFRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWtCVixFQUFsQixFQUZGLENBREYsRUFLRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBV0UsSUFBWCxDQUxGLENBRkYsRUFTR1MsUUFBUSxDQUFDQyxNQUFULElBQ0NELFFBQVEsQ0FDTEUsT0FESCxHQUVHQyxHQUZILENBRU87QUFBQSxRQUFHZCxFQUFILFNBQUdBLEVBQUg7QUFBQSxRQUFPQyxNQUFQLFNBQU9BLE1BQVA7QUFBQSxRQUFlQyxJQUFmLFNBQWVBLElBQWY7QUFBQSxXQUNILE1BQUMsd0RBQUQ7QUFBUyxRQUFFLEVBQUVGLEVBQWI7QUFBaUIsWUFBTSxFQUFFQyxNQUF6QjtBQUFpQyxVQUFJLEVBQUVDLElBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERztBQUFBLEdBRlAsQ0FWSixDQUQrQjtBQUFBLENBQWpDOztLQUFNTyxJO0FBbUJTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9bcG9zdElkXS5iNmIwOThkNmYwYmQzYzAwMzAzMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgQ29tbWVudFByb3BzVHlwZSB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIENvbW1lbnRDb250YWluZXIsXHJcbiAgQ29tbWVudFRleHQsXHJcbiAgQ29tbWVudEFkZGl0aW9uYWxUZXh0LFxyXG59IGZyb20gXCIuL3N0eWxlZENvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IENvbW1lbnQ6IFJlYWN0LkZDPENvbW1lbnRQcm9wc1R5cGU+ID0gKHsgaWQsIHBvc3RJZCwgYm9keSB9KSA9PiAoXHJcbiAgPENvbW1lbnRDb250YWluZXI+XHJcbiAgICA8Q29tbWVudEFkZGl0aW9uYWxUZXh0PntgUG9zdCBpZDogJHtwb3N0SWR9YH08L0NvbW1lbnRBZGRpdGlvbmFsVGV4dD5cclxuICAgIDxDb21tZW50QWRkaXRpb25hbFRleHQ+e2BDb21tZW50OiAke2lkfWB9PC9Db21tZW50QWRkaXRpb25hbFRleHQ+XHJcbiAgPC9Db21tZW50Q29udGFpbmVyPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb21tZW50Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xyXG4gICY6bm90KGxhc3QtY2hpbGQpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbW1lbnRBZGRpdGlvbmFsVGV4dCA9IHN0eWxlZC5wYFxyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogZ3JleTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb21tZW50VGV4dCA9IHN0eWxlZC5wYFxyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIi4uL0xpbmtcIjtcclxuXHJcbmltcG9ydCBDb21tZW50IGZyb20gXCIuL0NvbW1lbnQvQ29tbWVudFwiO1xyXG5cclxuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9wb3N0XCI7XHJcbmltcG9ydCB7XHJcbiAgUG9zdENvbnRhaW5lcixcclxuICBQb3N0Q29udGVudCxcclxuICBIZWFkZXIsXHJcbiAgVGl0bGUsXHJcbiAgUG9zdElkLFxyXG4gIFBvc3RUZXh0LFxyXG59IGZyb20gXCIuL3N0eWxlZENvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IFBvc3Q6IFJlYWN0LkZDPERhdGFUeXBlPiA9ICh7IHRpdGxlLCBib2R5LCBpZCwgY29tbWVudHMgfSkgPT4gKFxyXG4gIDxQb3N0Q29udGFpbmVyPlxyXG4gICAgPExpbmsgdGV4dD1cImJhY2tcIiBocmVmPVwiL1wiIC8+XHJcbiAgICA8UG9zdENvbnRlbnQ+XHJcbiAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgPFRpdGxlPnt0aXRsZX08L1RpdGxlPlxyXG4gICAgICAgIDxQb3N0SWQ+e2BQb3N0OiAke2lkfWB9PC9Qb3N0SWQ+XHJcbiAgICAgIDwvSGVhZGVyPlxyXG4gICAgICA8UG9zdFRleHQ+e2JvZHl9PC9Qb3N0VGV4dD5cclxuICAgIDwvUG9zdENvbnRlbnQ+XHJcbiAgICB7Y29tbWVudHMubGVuZ3RoICYmXHJcbiAgICAgIGNvbW1lbnRzXHJcbiAgICAgICAgLnJldmVyc2UoKVxyXG4gICAgICAgIC5tYXAoKHsgaWQsIHBvc3RJZCwgYm9keSB9KSA9PiAoXHJcbiAgICAgICAgICA8Q29tbWVudCBpZD17aWR9IHBvc3RJZD17cG9zdElkfSBib2R5PXtib2R5fSAvPlxyXG4gICAgICAgICkpfVxyXG4gIDwvUG9zdENvbnRhaW5lcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=