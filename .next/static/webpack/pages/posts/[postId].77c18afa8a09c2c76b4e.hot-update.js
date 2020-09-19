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
      lineNumber: 18,
      columnNumber: 3
    }
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: "back",
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__["PostContent"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__["Title"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, title), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__["PostId"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, "Post: ".concat(id))), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__["PostText"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, body)), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__["CommentsTitle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
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
        lineNumber: 32,
        columnNumber: 11
      }
    });
  }) : __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0L1Bvc3QudHN4Il0sIm5hbWVzIjpbIlBvc3QiLCJ0aXRsZSIsImJvZHkiLCJpZCIsImNvbW1lbnRzIiwibGVuZ3RoIiwicmV2ZXJzZSIsIm1hcCIsInBvc3RJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFHQTs7QUFVQSxJQUFNQSxJQUF3QixHQUFHLFNBQTNCQSxJQUEyQjtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLElBQVYsUUFBVUEsSUFBVjtBQUFBLE1BQWdCQyxFQUFoQixRQUFnQkEsRUFBaEI7QUFBQSxNQUFvQkMsUUFBcEIsUUFBb0JBLFFBQXBCO0FBQUEsU0FDL0IsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2Q0FBRDtBQUFNLFFBQUksRUFBQyxNQUFYO0FBQWtCLFFBQUksRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUUgsS0FBUixDQURGLEVBRUUsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFrQkUsRUFBbEIsRUFGRixDQURGLEVBS0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVdELElBQVgsQ0FMRixDQUZGLEVBU0UsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRGLEVBVUdFLFFBQVEsQ0FBQ0MsTUFBVCxHQUNDRCxRQUFRLENBQ0xFLE9BREgsR0FFR0MsR0FGSCxDQUVPO0FBQUEsUUFBR0osRUFBSCxTQUFHQSxFQUFIO0FBQUEsUUFBT0ssTUFBUCxTQUFPQSxNQUFQO0FBQUEsUUFBZU4sSUFBZixTQUFlQSxJQUFmO0FBQUEsV0FDSCxNQUFDLHdEQUFEO0FBQVMsU0FBRyxFQUFFQyxFQUFkO0FBQWtCLFFBQUUsRUFBRUEsRUFBdEI7QUFBMEIsWUFBTSxFQUFFSyxNQUFsQztBQUEwQyxVQUFJLEVBQUVOLElBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERztBQUFBLEdBRlAsQ0FERCxHQU9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBakJKLENBRCtCO0FBQUEsQ0FBakM7O0tBQU1GLEk7QUF1QlNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL1twb3N0SWRdLjc3YzE4YWZhOGEwOWMyYzc2YjRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCIuLi9MaW5rXCI7XHJcblxyXG5pbXBvcnQgQ29tbWVudCBmcm9tIFwiLi9Db21tZW50L0NvbW1lbnRcIjtcclxuXHJcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvcG9zdFwiO1xyXG5pbXBvcnQge1xyXG4gIFBvc3RDb250YWluZXIsXHJcbiAgUG9zdENvbnRlbnQsXHJcbiAgSGVhZGVyLFxyXG4gIFRpdGxlLFxyXG4gIFBvc3RJZCxcclxuICBQb3N0VGV4dCxcclxuICBDb21tZW50c1RpdGxlLFxyXG59IGZyb20gXCIuL3N0eWxlZENvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IFBvc3Q6IFJlYWN0LkZDPERhdGFUeXBlPiA9ICh7IHRpdGxlLCBib2R5LCBpZCwgY29tbWVudHMgfSkgPT4gKFxyXG4gIDxQb3N0Q29udGFpbmVyPlxyXG4gICAgPExpbmsgdGV4dD1cImJhY2tcIiBocmVmPVwiL1wiIC8+XHJcbiAgICA8UG9zdENvbnRlbnQ+XHJcbiAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgPFRpdGxlPnt0aXRsZX08L1RpdGxlPlxyXG4gICAgICAgIDxQb3N0SWQ+e2BQb3N0OiAke2lkfWB9PC9Qb3N0SWQ+XHJcbiAgICAgIDwvSGVhZGVyPlxyXG4gICAgICA8UG9zdFRleHQ+e2JvZHl9PC9Qb3N0VGV4dD5cclxuICAgIDwvUG9zdENvbnRlbnQ+XHJcbiAgICA8Q29tbWVudHNUaXRsZT5Db21tZW50czo8L0NvbW1lbnRzVGl0bGU+XHJcbiAgICB7Y29tbWVudHMubGVuZ3RoID8gKFxyXG4gICAgICBjb21tZW50c1xyXG4gICAgICAgIC5yZXZlcnNlKClcclxuICAgICAgICAubWFwKCh7IGlkLCBwb3N0SWQsIGJvZHkgfSkgPT4gKFxyXG4gICAgICAgICAgPENvbW1lbnQga2V5PXtpZH0gaWQ9e2lkfSBwb3N0SWQ9e3Bvc3RJZH0gYm9keT17Ym9keX0gLz5cclxuICAgICAgICApKVxyXG4gICAgKSA6IChcclxuICAgICAgPHA+VGhlcmUgYXJlIG5vIGNvbW1lbnRzPC9wPlxyXG4gICAgKX1cclxuICA8L1Bvc3RDb250YWluZXI+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9