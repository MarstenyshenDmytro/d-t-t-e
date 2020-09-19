webpackHotUpdate_N_E("pages/_app",{

/***/ "./redux/middlewares/saga/index.ts":
/*!*****************************************!*\
  !*** ./redux/middlewares/saga/index.ts ***!
  \*****************************************/
/*! exports provided: postsListSaga, postSaga, newPostSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _postsListSaga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postsListSaga */ "./redux/middlewares/saga/postsListSaga.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postsListSaga", function() { return _postsListSaga__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _postSaga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postSaga */ "./redux/middlewares/saga/postSaga.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postSaga", function() { return _postSaga__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _newPostSaga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newPostSaga */ "./redux/middlewares/saga/newPostSaga.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "newPostSaga", function() { return _newPostSaga__WEBPACK_IMPORTED_MODULE_2__["default"]; });





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

/***/ "./redux/middlewares/saga/newPostSaga.ts":
/*!***********************************************!*\
  !*** ./redux/middlewares/saga/newPostSaga.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(newPostSaga);

function newPostSaga(_ref) {
  var data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function newPostSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          data = _ref.payload.data;
          console.log("POST SAGA", data); // try {
          //   const data = yield call(getPostAPI, id);
          //   yield put(successPost(data));
          // } catch (e) {
          //   yield put(errorPost());
          // }

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

/* harmony default export */ __webpack_exports__["default"] = (newPostSaga);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvbWlkZGxld2FyZXMvc2FnYS9pbmRleC50cyIsIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvbWlkZGxld2FyZXMvc2FnYS9uZXdQb3N0U2FnYS50cyJdLCJuYW1lcyI6WyJuZXdQb3N0U2FnYSIsImRhdGEiLCJwYXlsb2FkIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0NHVUEsVzs7QUFBVixTQUFVQSxXQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtQ0MsY0FBbkMsUUFBd0JDLE9BQXhCLENBQW1DRCxJQUFuQztBQUNFRSxpQkFBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QkgsSUFBekIsRUFERixDQUVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFVZUQsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jNDBiNjI5ODM3ZjdjNWI1ZTVmZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgZGVmYXVsdCBhcyBwb3N0c0xpc3RTYWdhIH0gZnJvbSBcIi4vcG9zdHNMaXN0U2FnYVwiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHBvc3RTYWdhIH0gZnJvbSBcIi4vcG9zdFNhZ2FcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBuZXdQb3N0U2FnYSB9IGZyb20gXCIuL25ld1Bvc3RTYWdhXCI7XHJcbiIsImltcG9ydCB7IHN1Y2Nlc3NQb3N0UHVzaCwgZXJyb3JQb3N0UHVzaCB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL25ld1Bvc3RcIjtcclxuaW1wb3J0IHsgcG9zdE5ld1Bvc3RBUEkgfSBmcm9tIFwiLi4vLi4vLi4vYXBpL3Bvc3ROZXdQb3N0QVBJXCI7XHJcbmltcG9ydCB7IGNhbGwsIHB1dCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgQW55QWN0aW9uIH0gZnJvbSBcInJlZHV4XCI7XHJcblxyXG5mdW5jdGlvbiogbmV3UG9zdFNhZ2EoeyBwYXlsb2FkOiB7IGRhdGEgfSB9OiBBbnlBY3Rpb24pIHtcclxuICBjb25zb2xlLmxvZyhcIlBPU1QgU0FHQVwiLCBkYXRhKTtcclxuICAvLyB0cnkge1xyXG4gIC8vICAgY29uc3QgZGF0YSA9IHlpZWxkIGNhbGwoZ2V0UG9zdEFQSSwgaWQpO1xyXG4gIC8vICAgeWllbGQgcHV0KHN1Y2Nlc3NQb3N0KGRhdGEpKTtcclxuICAvLyB9IGNhdGNoIChlKSB7XHJcbiAgLy8gICB5aWVsZCBwdXQoZXJyb3JQb3N0KCkpO1xyXG4gIC8vIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3UG9zdFNhZ2E7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=