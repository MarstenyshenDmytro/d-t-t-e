webpackHotUpdate_N_E("pages/_app",{

/***/ "./redux/store/store.ts":
/*!******************************!*\
  !*** ./redux/store/store.ts ***!
  \******************************/
/*! exports provided: makeStore, wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStore", function() { return makeStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ "./redux/reducers/index.ts");
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../middlewares */ "./redux/middlewares/index.ts");





var makeStore = function makeStore() {
  var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    postsListReducer: _reducers__WEBPACK_IMPORTED_MODULE_3__["postsListReducer"],
    postReducer: _reducers__WEBPACK_IMPORTED_MODULE_3__["postReducer"],
    newPostReducer: _reducers__WEBPACK_IMPORTED_MODULE_3__["newPostReducer"]
  }), Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(sagaMiddleware));
  store.sagaTask = sagaMiddleware.run(_middlewares__WEBPACK_IMPORTED_MODULE_4__["rootSaga"]);
  return store;
};
var wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__["createWrapper"])(makeStore, {
  debug: true
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvc3RvcmUvc3RvcmUudHMiXSwibmFtZXMiOlsibWFrZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJjb21iaW5lUmVkdWNlcnMiLCJwb3N0c0xpc3RSZWR1Y2VyIiwicG9zdFJlZHVjZXIiLCJuZXdQb3N0UmVkdWNlciIsImFwcGx5TWlkZGxld2FyZSIsInNhZ2FUYXNrIiwicnVuIiwicm9vdFNhZ2EiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFNTyxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQzdCLE1BQU1DLGNBQWMsR0FBR0MsMERBQW9CLEVBQTNDO0FBQ0EsTUFBTUMsS0FBSyxHQUFHQyx5REFBVyxDQUN2QkMsNkRBQWUsQ0FBQztBQUFFQyxvQkFBZ0IsRUFBaEJBLDBEQUFGO0FBQW9CQyxlQUFXLEVBQVhBLHFEQUFwQjtBQUFpQ0Msa0JBQWMsRUFBZEEsd0RBQWNBO0FBQS9DLEdBQUQsQ0FEUSxFQUV2QkMsNkRBQWUsQ0FBQ1IsY0FBRCxDQUZRLENBQXpCO0FBSUNFLE9BQUQsQ0FBcUJPLFFBQXJCLEdBQWdDVCxjQUFjLENBQUNVLEdBQWYsQ0FBbUJDLHFEQUFuQixDQUFoQztBQUVBLFNBQU9ULEtBQVA7QUFDRCxDQVRNO0FBV0EsSUFBTVUsT0FBTyxHQUFHQyx3RUFBYSxDQUFDZCxTQUFELEVBQVk7QUFBRWUsT0FBSyxFQUFFO0FBQVQsQ0FBWixDQUE3QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjlhMTcxOTUyZjI4NzJhZTIyMDMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlLCBTdG9yZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSwgeyBUYXNrIH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuXHJcbmltcG9ydCB7IHBvc3RzTGlzdFJlZHVjZXIsIHBvc3RSZWR1Y2VyLCBuZXdQb3N0UmVkdWNlciB9IGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyByb290U2FnYSB9IGZyb20gXCIuLi9taWRkbGV3YXJlc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTYWdhU3RvcmUgZXh0ZW5kcyBTdG9yZSB7XHJcbiAgc2FnYVRhc2s/OiBUYXNrO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFrZVN0b3JlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxyXG4gICAgY29tYmluZVJlZHVjZXJzKHsgcG9zdHNMaXN0UmVkdWNlciwgcG9zdFJlZHVjZXIsIG5ld1Bvc3RSZWR1Y2VyIH0pLFxyXG4gICAgYXBwbHlNaWRkbGV3YXJlKHNhZ2FNaWRkbGV3YXJlKVxyXG4gICk7XHJcbiAgKHN0b3JlIGFzIFNhZ2FTdG9yZSkuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG5cclxuICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlLCB7IGRlYnVnOiB0cnVlIH0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9