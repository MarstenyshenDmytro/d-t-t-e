webpackHotUpdate_N_E("pages/_app",{

/***/ "./redux/middlewares/saga/postsListSaga.ts":
/*!*************************************************!*\
  !*** ./redux/middlewares/saga/postsListSaga.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_postsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/postsList */ "./redux/actions/postsList.ts");
/* harmony import */ var _api_getPostsListAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/getPostsListAPI */ "./api/getPostsListAPI.ts");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(postsListSaga);





function postsListSaga() {
  var data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postsListSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(_api_getPostsListAPI__WEBPACK_IMPORTED_MODULE_2__["getPostsListAPI"]);

        case 3:
          data = _context.sent;
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(Object(_actions_postsList__WEBPACK_IMPORTED_MODULE_1__["successPostsList"])(data.reverse()));

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          _context.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(Object(_actions_postsList__WEBPACK_IMPORTED_MODULE_1__["errorPostsList"])());

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}

/* harmony default export */ __webpack_exports__["default"] = (postsListSaga);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvbWlkZGxld2FyZXMvc2FnYS9wb3N0c0xpc3RTYWdhLnRzIl0sIm5hbWVzIjpbInBvc3RzTGlzdFNhZ2EiLCJjYWxsIiwiZ2V0UG9zdHNMaXN0QVBJIiwiZGF0YSIsInB1dCIsInN1Y2Nlc3NQb3N0c0xpc3QiLCJyZXZlcnNlIiwiZXJyb3JQb3N0c0xpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FJVUEsYTs7QUFKVjtBQUNBO0FBQ0E7O0FBRUEsU0FBVUEsYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWlCLGlCQUFNQywrREFBSSxDQUFDQyxvRUFBRCxDQUFWOztBQUZqQjtBQUVVQyxjQUZWO0FBQUE7QUFHSSxpQkFBTUMsOERBQUcsQ0FBQ0MsMkVBQWdCLENBQUNGLElBQUksQ0FBQ0csT0FBTCxFQUFELENBQWpCLENBQVQ7O0FBSEo7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0ksaUJBQU1GLDhEQUFHLENBQUNHLHlFQUFjLEVBQWYsQ0FBVDs7QUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFTZVAsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kZmRiYmZkOWNiYTNkZDNlMDU0Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3VjY2Vzc1Bvc3RzTGlzdCwgZXJyb3JQb3N0c0xpc3QgfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9wb3N0c0xpc3RcIjtcclxuaW1wb3J0IHsgZ2V0UG9zdHNMaXN0QVBJIH0gZnJvbSBcIi4uLy4uLy4uL2FwaS9nZXRQb3N0c0xpc3RBUElcIjtcclxuaW1wb3J0IHsgY2FsbCwgcHV0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5cclxuZnVuY3Rpb24qIHBvc3RzTGlzdFNhZ2EoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRhdGEgPSB5aWVsZCBjYWxsKGdldFBvc3RzTGlzdEFQSSk7XHJcbiAgICB5aWVsZCBwdXQoc3VjY2Vzc1Bvc3RzTGlzdChkYXRhLnJldmVyc2UoKSkpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHlpZWxkIHB1dChlcnJvclBvc3RzTGlzdCgpKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBvc3RzTGlzdFNhZ2E7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=