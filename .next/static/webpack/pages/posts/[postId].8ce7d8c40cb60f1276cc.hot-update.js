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
    text: "< Back",
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
  }, "Comments:"), comments.length ? comments.reverse().map(function (_ref2) {
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
        lineNumber: 35,
        columnNumber: 11
      }
    });
  }) : __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0L1Bvc3QudHN4Il0sIm5hbWVzIjpbIlBvc3QiLCJ0aXRsZSIsImJvZHkiLCJpZCIsImNvbW1lbnRzIiwibGVuZ3RoIiwicmV2ZXJzZSIsIm1hcCIsInBvc3RJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFHQTs7QUFXQSxJQUFNQSxJQUF3QixHQUFHLFNBQTNCQSxJQUEyQjtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLElBQVYsUUFBVUEsSUFBVjtBQUFBLE1BQWdCQyxFQUFoQixRQUFnQkEsRUFBaEI7QUFBQSxNQUFvQkMsUUFBcEIsUUFBb0JBLFFBQXBCO0FBQUEsU0FDL0IsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2Q0FBRDtBQUFNLFFBQUksRUFBQyxRQUFYO0FBQW9CLFFBQUksRUFBQyxHQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRSCxLQUFSLENBREYsRUFFRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWtCRSxFQUFsQixFQUZGLENBREYsRUFLRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBV0QsSUFBWCxDQUxGLENBSkYsRUFXRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEYsRUFZR0UsUUFBUSxDQUFDQyxNQUFULEdBQ0NELFFBQVEsQ0FDTEUsT0FESCxHQUVHQyxHQUZILENBRU87QUFBQSxRQUFHSixFQUFILFNBQUdBLEVBQUg7QUFBQSxRQUFPSyxNQUFQLFNBQU9BLE1BQVA7QUFBQSxRQUFlTixJQUFmLFNBQWVBLElBQWY7QUFBQSxXQUNILE1BQUMsd0RBQUQ7QUFBUyxTQUFHLEVBQUVDLEVBQWQ7QUFBa0IsUUFBRSxFQUFFQSxFQUF0QjtBQUEwQixZQUFNLEVBQUVLLE1BQWxDO0FBQTBDLFVBQUksRUFBRU4sSUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURHO0FBQUEsR0FGUCxDQURELEdBT0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFuQkosQ0FEK0I7QUFBQSxDQUFqQzs7S0FBTUYsSTtBQXlCU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvW3Bvc3RJZF0uOGNlN2Q4YzQwY2I2MGYxMjc2Y2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIi4uL0xpbmtcIjtcclxuXHJcbmltcG9ydCBDb21tZW50IGZyb20gXCIuL0NvbW1lbnQvQ29tbWVudFwiO1xyXG5cclxuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9wb3N0XCI7XHJcbmltcG9ydCB7XHJcbiAgUG9zdENvbnRhaW5lcixcclxuICBQb3N0Q29udGVudCxcclxuICBIZWFkZXIsXHJcbiAgVGl0bGUsXHJcbiAgUG9zdElkLFxyXG4gIFBvc3RUZXh0LFxyXG4gIENvbW1lbnRzVGl0bGUsXHJcbiAgQmFja0xpbmssXHJcbn0gZnJvbSBcIi4vc3R5bGVkQ29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgUG9zdDogUmVhY3QuRkM8RGF0YVR5cGU+ID0gKHsgdGl0bGUsIGJvZHksIGlkLCBjb21tZW50cyB9KSA9PiAoXHJcbiAgPFBvc3RDb250YWluZXI+XHJcbiAgICA8QmFja0xpbms+XHJcbiAgICAgIDxMaW5rIHRleHQ9XCI8IEJhY2tcIiBocmVmPVwiL1wiIC8+XHJcbiAgICA8L0JhY2tMaW5rPlxyXG4gICAgPFBvc3RDb250ZW50PlxyXG4gICAgICA8SGVhZGVyPlxyXG4gICAgICAgIDxUaXRsZT57dGl0bGV9PC9UaXRsZT5cclxuICAgICAgICA8UG9zdElkPntgUG9zdDogJHtpZH1gfTwvUG9zdElkPlxyXG4gICAgICA8L0hlYWRlcj5cclxuICAgICAgPFBvc3RUZXh0Pntib2R5fTwvUG9zdFRleHQ+XHJcbiAgICA8L1Bvc3RDb250ZW50PlxyXG4gICAgPENvbW1lbnRzVGl0bGU+Q29tbWVudHM6PC9Db21tZW50c1RpdGxlPlxyXG4gICAge2NvbW1lbnRzLmxlbmd0aCA/IChcclxuICAgICAgY29tbWVudHNcclxuICAgICAgICAucmV2ZXJzZSgpXHJcbiAgICAgICAgLm1hcCgoeyBpZCwgcG9zdElkLCBib2R5IH0pID0+IChcclxuICAgICAgICAgIDxDb21tZW50IGtleT17aWR9IGlkPXtpZH0gcG9zdElkPXtwb3N0SWR9IGJvZHk9e2JvZHl9IC8+XHJcbiAgICAgICAgKSlcclxuICAgICkgOiAoXHJcbiAgICAgIDxwPlRoZXJlIGFyZSBubyBjb21tZW50czwvcD5cclxuICAgICl9XHJcbiAgPC9Qb3N0Q29udGFpbmVyPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==