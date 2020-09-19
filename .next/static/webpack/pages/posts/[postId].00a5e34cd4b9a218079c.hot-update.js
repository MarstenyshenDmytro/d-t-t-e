webpackHotUpdate_N_E("pages/posts/[postId]",{

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
      lineNumber: 19,
      columnNumber: 3
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__["BackLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: "< Back to list",
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  })), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__["PostContent"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__["Title"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, title), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__["PostId"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, "Post: ".concat(id))), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__["PostText"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, body)), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__["CommentsTitle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, "Comments:"), comments.length ? comments.map(function (_ref2) {
    var id = _ref2.id,
        postId = _ref2.postId,
        body = _ref2.body;
    return __jsx(_Comment_Comment__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: id,
      id: id,
      postId: postId,
      body: body,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }
    });
  }) : __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, "There are no comments"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0L1Bvc3QudHN4Il0sIm5hbWVzIjpbIlBvc3QiLCJ0aXRsZSIsImJvZHkiLCJpZCIsImNvbW1lbnRzIiwibGVuZ3RoIiwibWFwIiwicG9zdElkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUdBOztBQVdBLElBQU1BLElBQXdCLEdBQUcsU0FBM0JBLElBQTJCO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsSUFBVixRQUFVQSxJQUFWO0FBQUEsTUFBZ0JDLEVBQWhCLFFBQWdCQSxFQUFoQjtBQUFBLE1BQW9CQyxRQUFwQixRQUFvQkEsUUFBcEI7QUFBQSxTQUMvQixNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZDQUFEO0FBQU0sUUFBSSxFQUFDLGdCQUFYO0FBQTRCLFFBQUksRUFBQyxHQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRSCxLQUFSLENBREYsRUFFRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWtCRSxFQUFsQixFQUZGLENBREYsRUFLRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBV0QsSUFBWCxDQUxGLENBSkYsRUFXRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEYsRUFZR0UsUUFBUSxDQUFDQyxNQUFULEdBQ0NELFFBQVEsQ0FBQ0UsR0FBVCxDQUFhO0FBQUEsUUFBR0gsRUFBSCxTQUFHQSxFQUFIO0FBQUEsUUFBT0ksTUFBUCxTQUFPQSxNQUFQO0FBQUEsUUFBZUwsSUFBZixTQUFlQSxJQUFmO0FBQUEsV0FDWCxNQUFDLHdEQUFEO0FBQVMsU0FBRyxFQUFFQyxFQUFkO0FBQWtCLFFBQUUsRUFBRUEsRUFBdEI7QUFBMEIsWUFBTSxFQUFFSSxNQUFsQztBQUEwQyxVQUFJLEVBQUVMLElBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEVztBQUFBLEdBQWIsQ0FERCxHQUtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBakJKLENBRCtCO0FBQUEsQ0FBakM7O0tBQU1GLEk7QUF1QlNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL1twb3N0SWRdLjAwYTVlMzRjZDRiOWEyMTgwNzljLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCIuLi9MaW5rXCI7XHJcblxyXG5pbXBvcnQgQ29tbWVudCBmcm9tIFwiLi9Db21tZW50L0NvbW1lbnRcIjtcclxuXHJcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvcG9zdFwiO1xyXG5pbXBvcnQge1xyXG4gIFBvc3RDb250YWluZXIsXHJcbiAgUG9zdENvbnRlbnQsXHJcbiAgSGVhZGVyLFxyXG4gIFRpdGxlLFxyXG4gIFBvc3RJZCxcclxuICBQb3N0VGV4dCxcclxuICBDb21tZW50c1RpdGxlLFxyXG4gIEJhY2tMaW5rLFxyXG59IGZyb20gXCIuL3N0eWxlZENvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IFBvc3Q6IFJlYWN0LkZDPERhdGFUeXBlPiA9ICh7IHRpdGxlLCBib2R5LCBpZCwgY29tbWVudHMgfSkgPT4gKFxyXG4gIDxQb3N0Q29udGFpbmVyPlxyXG4gICAgPEJhY2tMaW5rPlxyXG4gICAgICA8TGluayB0ZXh0PVwiPCBCYWNrIHRvIGxpc3RcIiBocmVmPVwiL1wiIC8+XHJcbiAgICA8L0JhY2tMaW5rPlxyXG4gICAgPFBvc3RDb250ZW50PlxyXG4gICAgICA8SGVhZGVyPlxyXG4gICAgICAgIDxUaXRsZT57dGl0bGV9PC9UaXRsZT5cclxuICAgICAgICA8UG9zdElkPntgUG9zdDogJHtpZH1gfTwvUG9zdElkPlxyXG4gICAgICA8L0hlYWRlcj5cclxuICAgICAgPFBvc3RUZXh0Pntib2R5fTwvUG9zdFRleHQ+XHJcbiAgICA8L1Bvc3RDb250ZW50PlxyXG4gICAgPENvbW1lbnRzVGl0bGU+Q29tbWVudHM6PC9Db21tZW50c1RpdGxlPlxyXG4gICAge2NvbW1lbnRzLmxlbmd0aCA/IChcclxuICAgICAgY29tbWVudHMubWFwKCh7IGlkLCBwb3N0SWQsIGJvZHkgfSkgPT4gKFxyXG4gICAgICAgIDxDb21tZW50IGtleT17aWR9IGlkPXtpZH0gcG9zdElkPXtwb3N0SWR9IGJvZHk9e2JvZHl9IC8+XHJcbiAgICAgICkpXHJcbiAgICApIDogKFxyXG4gICAgICA8cD5UaGVyZSBhcmUgbm8gY29tbWVudHM8L3A+XHJcbiAgICApfVxyXG4gIDwvUG9zdENvbnRhaW5lcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=