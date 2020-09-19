webpackHotUpdate_N_E("pages/_app",{

/***/ "./redux/middlewares/saga/postSaga.ts":
/*!********************************************!*\
  !*** ./redux/middlewares/saga/postSaga.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/post */ "./redux/actions/post.ts");
/* harmony import */ var _api_getPostAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/getPostAPI */ "./api/getPostAPI.ts");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(postSaga);





function postSaga(_ref) {
  var id, res;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = _ref.payload.id;
          _context.prev = 1;
          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(_api_getPostAPI__WEBPACK_IMPORTED_MODULE_2__["getPostAPI"], id);

        case 4:
          res = _context.sent;
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(Object(_actions_post__WEBPACK_IMPORTED_MODULE_1__["successPost"])(res));

        case 7:
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          _context.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(Object(_actions_post__WEBPACK_IMPORTED_MODULE_1__["errorPost"])());

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[1, 9]]);
}

/* harmony default export */ __webpack_exports__["default"] = (postSaga);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvbWlkZGxld2FyZXMvc2FnYS9wb3N0U2FnYS50cyJdLCJuYW1lcyI6WyJwb3N0U2FnYSIsImlkIiwicGF5bG9hZCIsImNhbGwiLCJnZXRQb3N0QVBJIiwicmVzIiwicHV0Iiwic3VjY2Vzc1Bvc3QiLCJlcnJvclBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FLVUEsUTs7QUFMVjtBQUNBO0FBQ0E7O0FBR0EsU0FBVUEsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0NDLFlBQWhDLFFBQXFCQyxPQUFyQixDQUFnQ0QsRUFBaEM7QUFBQTtBQUFBO0FBRWdCLGlCQUFNRSwrREFBSSxDQUFDQywwREFBRCxFQUFhSCxFQUFiLENBQVY7O0FBRmhCO0FBRVVJLGFBRlY7QUFBQTtBQUlJLGlCQUFNQyw4REFBRyxDQUFDQyxpRUFBVyxDQUFDRixHQUFELENBQVosQ0FBVDs7QUFKSjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNSSxpQkFBTUMsOERBQUcsQ0FBQ0UsK0RBQVMsRUFBVixDQUFUOztBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVVlUix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjk4ZDE2YWRiZjczNzA5OTVhZDA5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdWNjZXNzUG9zdCwgZXJyb3JQb3N0IH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvcG9zdFwiO1xyXG5pbXBvcnQgeyBnZXRQb3N0QVBJIH0gZnJvbSBcIi4uLy4uLy4uL2FwaS9nZXRQb3N0QVBJXCI7XHJcbmltcG9ydCB7IGNhbGwsIHB1dCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgQW55QWN0aW9uIH0gZnJvbSBcInJlZHV4XCI7XHJcblxyXG5mdW5jdGlvbiogcG9zdFNhZ2EoeyBwYXlsb2FkOiB7IGlkIH0gfTogQW55QWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IHlpZWxkIGNhbGwoZ2V0UG9zdEFQSSwgaWQpO1xyXG4gICAgLy8gY29uc3QgZGF0YSA9IHsgLi4ucmVzLCBjb21tZW50czogcmVzLmNvbW1lbnRzLnJldmVyc2UoKSB9O1xyXG4gICAgeWllbGQgcHV0KHN1Y2Nlc3NQb3N0KHJlcykpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHlpZWxkIHB1dChlcnJvclBvc3QoKSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwb3N0U2FnYTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==