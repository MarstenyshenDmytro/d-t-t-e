webpackHotUpdate_N_E("pages/posts/[postId]",{

/***/ "./containers/PostDetails/PostDetails.tsx":
/*!************************************************!*\
  !*** ./containers/PostDetails/PostDetails.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Post */ "./components/Post/index.ts");
var _this = undefined,
    _jsxFileName = "D:\\Dima\\d-t-t-e\\containers\\PostDetails\\PostDetails.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var PostDetails = function PostDetails(_ref) {
  var data = _ref.data,
      error = _ref.error;
  return error ? __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, "ERROR") : data && __jsx(_components_Post__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: data.title,
    body: data.body,
    id: data.id,
    comments: data.comments,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  });
};

_c = PostDetails;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9Qb3N0RGV0YWlscy9Qb3N0RGV0YWlscy50c3giXSwibmFtZXMiOlsiUG9zdERldGFpbHMiLCJkYXRhIiwiZXJyb3IiLCJ0aXRsZSIsImJvZHkiLCJpZCIsImNvbW1lbnRzIiwiY29ubmVjdCIsInN0YXRlIiwicG9zdFJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBSUEsSUFBTUEsV0FBdUMsR0FBRyxTQUExQ0EsV0FBMEM7QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxNQUFTQyxLQUFULFFBQVNBLEtBQVQ7QUFBQSxTQUM5Q0EsS0FBSyxHQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERyxHQUdIRCxJQUFJLElBQ0YsTUFBQyx3REFBRDtBQUNFLFNBQUssRUFBRUEsSUFBSSxDQUFDRSxLQURkO0FBRUUsUUFBSSxFQUFFRixJQUFJLENBQUNHLElBRmI7QUFHRSxNQUFFLEVBQUVILElBQUksQ0FBQ0ksRUFIWDtBQUlFLFlBQVEsRUFBRUosSUFBSSxDQUFDSyxRQUpqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTDBDO0FBQUEsQ0FBaEQ7O0tBQU1OLFc7QUFjU08sMEhBQU8sQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxXQUFqQjtBQUFBLENBQUQsQ0FBUCxDQUFzQ1QsV0FBdEMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9bcG9zdElkXS4wZWU1MTY2MDRhY2I2MTNkYmU5Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQgUG9zdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qb3N0XCI7XHJcblxyXG5pbXBvcnQgeyBJbml0aWFsU3RhdGVUeXBlIH0gZnJvbSBcIi4uLy4uL3JlZHV4L3JlZHVjZXJzL3Bvc3RcIjtcclxuXHJcbmNvbnN0IFBvc3REZXRhaWxzOiBSZWFjdC5GQzxJbml0aWFsU3RhdGVUeXBlPiA9ICh7IGRhdGEsIGVycm9yIH0pID0+XHJcbiAgZXJyb3IgPyAoXHJcbiAgICA8cD5FUlJPUjwvcD5cclxuICApIDogKFxyXG4gICAgZGF0YSAmJiAoXHJcbiAgICAgIDxQb3N0XHJcbiAgICAgICAgdGl0bGU9e2RhdGEudGl0bGV9XHJcbiAgICAgICAgYm9keT17ZGF0YS5ib2R5fVxyXG4gICAgICAgIGlkPXtkYXRhLmlkfVxyXG4gICAgICAgIGNvbW1lbnRzPXtkYXRhLmNvbW1lbnRzfVxyXG4gICAgICAvPlxyXG4gICAgKVxyXG4gICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KChzdGF0ZSkgPT4gc3RhdGUucG9zdFJlZHVjZXIpKFBvc3REZXRhaWxzKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==