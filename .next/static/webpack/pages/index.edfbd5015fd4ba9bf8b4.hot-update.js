webpackHotUpdate_N_E("pages/index",{

/***/ "./containers/PostsList/PostsList.tsx":
/*!********************************************!*\
  !*** ./containers/PostsList/PostsList.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_PostPreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PostPreview */ "./components/PostPreview/index.ts");
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styledComponents */ "./containers/PostsList/styledComponents.ts");
var _this = undefined,
    _jsxFileName = "D:\\Dima\\d-t-t-e\\containers\\PostsList\\PostsList.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var PostsList = function PostsList(_ref) {
  var data = _ref.data,
      error = _ref.error;
  return error ? __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, "ERROR") : data && __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, data.map(function (_ref2) {
    var title = _ref2.title,
        body = _ref2.body,
        id = _ref2.id;
    return __jsx(_components_PostPreview__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: "".concat(title).concat(id),
      title: title,
      body: body,
      id: id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }
    });
  }));
};

_c = PostsList;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return state.postsListReducer;
})(PostsList));

var _c;

$RefreshReg$(_c, "PostsList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9Qb3N0c0xpc3QvUG9zdHNMaXN0LnRzeCJdLCJuYW1lcyI6WyJQb3N0c0xpc3QiLCJkYXRhIiwiZXJyb3IiLCJtYXAiLCJ0aXRsZSIsImJvZHkiLCJpZCIsImNvbm5lY3QiLCJzdGF0ZSIsInBvc3RzTGlzdFJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBS0E7O0FBRUEsSUFBTUEsU0FBcUMsR0FBRyxTQUF4Q0EsU0FBd0M7QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxNQUFTQyxLQUFULFFBQVNBLEtBQVQ7QUFBQSxTQUM1Q0EsS0FBSyxHQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERyxHQUdIRCxJQUFJLElBQ0YsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLElBQUksQ0FBQ0UsR0FBTCxDQUFTO0FBQUEsUUFBR0MsS0FBSCxTQUFHQSxLQUFIO0FBQUEsUUFBVUMsSUFBVixTQUFVQSxJQUFWO0FBQUEsUUFBZ0JDLEVBQWhCLFNBQWdCQSxFQUFoQjtBQUFBLFdBQ1IsTUFBQywrREFBRDtBQUNFLFNBQUcsWUFBS0YsS0FBTCxTQUFhRSxFQUFiLENBREw7QUFFRSxXQUFLLEVBQUVGLEtBRlQ7QUFHRSxVQUFJLEVBQUVDLElBSFI7QUFJRSxRQUFFLEVBQUVDLEVBSk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURRO0FBQUEsR0FBVCxDQURILENBTHdDO0FBQUEsQ0FBOUM7O0tBQU1OLFM7QUFrQlNPLDBIQUFPLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsZ0JBQWpCO0FBQUEsQ0FBRCxDQUFQLENBQTJDVCxTQUEzQyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVkZmJkNTAxNWZkNGJhOWJmOGI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCBQb3N0UHJldmlldyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qb3N0UHJldmlld1wiO1xyXG5cclxuaW1wb3J0IHsgSW5pdGlhbFN0YXRlVHlwZSB9IGZyb20gXCIuLi8uLi9yZWR1eC9yZWR1Y2Vycy9wb3N0c0xpc3RcIjtcclxuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9wb3N0c0xpc3RcIjtcclxuXHJcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tIFwiLi9zdHlsZWRDb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBQb3N0c0xpc3Q6IFJlYWN0LkZDPEluaXRpYWxTdGF0ZVR5cGU+ID0gKHsgZGF0YSwgZXJyb3IgfSkgPT5cclxuICBlcnJvciA/IChcclxuICAgIDxwPkVSUk9SPC9wPlxyXG4gICkgOiAoXHJcbiAgICBkYXRhICYmIChcclxuICAgICAgPFNlY3Rpb24+XHJcbiAgICAgICAge2RhdGEubWFwKCh7IHRpdGxlLCBib2R5LCBpZCB9OiBEYXRhVHlwZSkgPT4gKFxyXG4gICAgICAgICAgPFBvc3RQcmV2aWV3XHJcbiAgICAgICAgICAgIGtleT17YCR7dGl0bGV9JHtpZH1gfVxyXG4gICAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgICAgIGJvZHk9e2JvZHl9XHJcbiAgICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvU2VjdGlvbj5cclxuICAgIClcclxuICApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RhdGUpID0+IHN0YXRlLnBvc3RzTGlzdFJlZHVjZXIpKFBvc3RzTGlzdCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=