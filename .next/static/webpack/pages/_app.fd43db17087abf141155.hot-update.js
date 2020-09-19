webpackHotUpdate_N_E("pages/_app",{

/***/ "./redux/middlewares/saga/rootSaga.ts":
/*!********************************************!*\
  !*** ./redux/middlewares/saga/rootSaga.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_postsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/postsList */ "./redux/actions/postsList.ts");
/* harmony import */ var _actions_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/post */ "./redux/actions/post.ts");
/* harmony import */ var _actions_newPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/newPost */ "./redux/actions/newPost.ts");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../saga */ "./redux/middlewares/saga/index.ts");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);






function rootSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_4__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_4__["takeLatest"])(_actions_postsList__WEBPACK_IMPORTED_MODULE_1__["FETCH_POSTS_LIST"], _saga__WEBPACK_IMPORTED_MODULE_5__["postsListSaga"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_4__["takeLatest"])(_actions_post__WEBPACK_IMPORTED_MODULE_2__["FETCH_POST"], _saga__WEBPACK_IMPORTED_MODULE_5__["postSaga"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_4__["takeLatest"])(_actions_newPost__WEBPACK_IMPORTED_MODULE_3__["NEW_POST_PUSH"], _saga__WEBPACK_IMPORTED_MODULE_5__["newPostSaga"])]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvbWlkZGxld2FyZXMvc2FnYS9yb290U2FnYS50cyJdLCJuYW1lcyI6WyJyb290U2FnYSIsImFsbCIsInRha2VMYXRlc3QiLCJGRVRDSF9QT1NUU19MSVNUIiwicG9zdHNMaXN0U2FnYSIsIkZFVENIX1BPU1QiLCJwb3N0U2FnYSIsIk5FV19QT1NUX1BVU0giLCJuZXdQb3N0U2FnYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQVF5QkEsUTs7QUFSekI7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVlLFNBQVVBLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2IsaUJBQU1DLDhEQUFHLENBQUMsQ0FDUkMscUVBQVUsQ0FBQ0MsbUVBQUQsRUFBbUJDLG1EQUFuQixDQURGLEVBRVJGLHFFQUFVLENBQUNHLHdEQUFELEVBQWFDLDhDQUFiLENBRkYsRUFHUkoscUVBQVUsQ0FBQ0ssOERBQUQsRUFBZ0JDLGlEQUFoQixDQUhGLENBQUQsQ0FBVDs7QUFEYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmZkNDNkYjE3MDg3YWJmMTQxMTU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGRVRDSF9QT1NUU19MSVNUIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvcG9zdHNMaXN0XCI7XHJcbmltcG9ydCB7IEZFVENIX1BPU1QgfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9wb3N0XCI7XHJcbmltcG9ydCB7IE5FV19QT1NUX1BVU0ggfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9uZXdQb3N0XCI7XHJcblxyXG5pbXBvcnQgeyB0YWtlTGF0ZXN0LCBhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgeyBwb3N0c0xpc3RTYWdhLCBwb3N0U2FnYSwgbmV3UG9zdFNhZ2EgfSBmcm9tIFwiLi4vc2FnYVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICB0YWtlTGF0ZXN0KEZFVENIX1BPU1RTX0xJU1QsIHBvc3RzTGlzdFNhZ2EpLFxyXG4gICAgdGFrZUxhdGVzdChGRVRDSF9QT1NULCBwb3N0U2FnYSksXHJcbiAgICB0YWtlTGF0ZXN0KE5FV19QT1NUX1BVU0gsIG5ld1Bvc3RTYWdhKSxcclxuICBdKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9