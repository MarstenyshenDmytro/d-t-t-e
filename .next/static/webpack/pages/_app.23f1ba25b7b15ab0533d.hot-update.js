webpackHotUpdate_N_E("pages/_app",{

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
/* harmony import */ var _actions_newPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/newPost */ "./redux/actions/newPost.ts");
/* harmony import */ var _api_postNewPostAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/postNewPostAPI */ "./api/postNewPostAPI.ts");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(newPostSaga);





function newPostSaga(_ref) {
  var data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function newPostSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          data = _ref.payload.data;
          _context.prev = 1;
          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(_api_postNewPostAPI__WEBPACK_IMPORTED_MODULE_2__["postNewPostAPI"], data);

        case 4:
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(Object(_actions_newPost__WEBPACK_IMPORTED_MODULE_1__["successPostPush"])());

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          _context.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(Object(_actions_newPost__WEBPACK_IMPORTED_MODULE_1__["errorPostPush"])());

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[1, 8]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvbWlkZGxld2FyZXMvc2FnYS9uZXdQb3N0U2FnYS50cyJdLCJuYW1lcyI6WyJuZXdQb3N0U2FnYSIsImRhdGEiLCJwYXlsb2FkIiwiY2FsbCIsInBvc3ROZXdQb3N0QVBJIiwicHV0Iiwic3VjY2Vzc1Bvc3RQdXNoIiwiZXJyb3JQb3N0UHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQUtVQSxXOztBQUxWO0FBQ0E7QUFDQTs7QUFHQSxTQUFVQSxXQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtQ0MsY0FBbkMsUUFBd0JDLE9BQXhCLENBQW1DRCxJQUFuQztBQUFBO0FBQUE7QUFFSSxpQkFBTUUsK0RBQUksQ0FBQ0Msa0VBQUQsRUFBaUJILElBQWpCLENBQVY7O0FBRko7QUFBQTtBQUdJLGlCQUFNSSw4REFBRyxDQUFDQyx3RUFBZSxFQUFoQixDQUFUOztBQUhKO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtJLGlCQUFNRCw4REFBRyxDQUFDRSxzRUFBYSxFQUFkLENBQVQ7O0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBU2VQLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMjNmMWJhMjViN2IxNWFiMDUzM2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN1Y2Nlc3NQb3N0UHVzaCwgZXJyb3JQb3N0UHVzaCB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL25ld1Bvc3RcIjtcclxuaW1wb3J0IHsgcG9zdE5ld1Bvc3RBUEkgfSBmcm9tIFwiLi4vLi4vLi4vYXBpL3Bvc3ROZXdQb3N0QVBJXCI7XHJcbmltcG9ydCB7IGNhbGwsIHB1dCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgQW55QWN0aW9uIH0gZnJvbSBcInJlZHV4XCI7XHJcblxyXG5mdW5jdGlvbiogbmV3UG9zdFNhZ2EoeyBwYXlsb2FkOiB7IGRhdGEgfSB9OiBBbnlBY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgY2FsbChwb3N0TmV3UG9zdEFQSSwgZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoc3VjY2Vzc1Bvc3RQdXNoKCkpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHlpZWxkIHB1dChlcnJvclBvc3RQdXNoKCkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3UG9zdFNhZ2E7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=