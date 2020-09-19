webpackHotUpdate_N_E("pages/_app",{

/***/ "./api/postNewPostAPI.ts":
/*!*******************************!*\
  !*** ./api/postNewPostAPI.ts ***!
  \*******************************/
/*! exports provided: postNewPostAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postNewPostAPI", function() { return postNewPostAPI; });
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client */ "./api/client.ts");

var postNewPostAPI = function postNewPostAPI(_ref) {
  var title = _ref.title,
      body = _ref.body;
  return _client__WEBPACK_IMPORTED_MODULE_0__["default"].post("/posts", {
    title: title,
    body: body
  }).then(function (r) {
    return r.data;
  });
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

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
/* harmony import */ var _actions_newPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/newPost */ "./redux/actions/newPost.ts");
/* harmony import */ var _api_postNewPostAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/postNewPostAPI */ "./api/postNewPostAPI.ts");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(newPostSaga);





function newPostSaga(_ref) {
  var data, res;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function newPostSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          data = _ref.payload.data;
          _context.prev = 1;
          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(_api_postNewPostAPI__WEBPACK_IMPORTED_MODULE_2__["postNewPostAPI"], data);

        case 4:
          res = _context.sent;
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(Object(_actions_newPost__WEBPACK_IMPORTED_MODULE_1__["successPostPush"])());

        case 7:
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          _context.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(Object(_actions_newPost__WEBPACK_IMPORTED_MODULE_1__["errorPostPush"])());

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[1, 9]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBpL3Bvc3ROZXdQb3N0QVBJLnRzIiwid2VicGFjazovL19OX0UvLi9yZWR1eC9taWRkbGV3YXJlcy9zYWdhL25ld1Bvc3RTYWdhLnRzIl0sIm5hbWVzIjpbInBvc3ROZXdQb3N0QVBJIiwidGl0bGUiLCJib2R5IiwiY2xpZW50IiwicG9zdCIsInRoZW4iLCJyIiwiZGF0YSIsIm5ld1Bvc3RTYWdhIiwicGF5bG9hZCIsImNhbGwiLCJyZXMiLCJwdXQiLCJzdWNjZXNzUG9zdFB1c2giLCJlcnJvclBvc3RQdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsSUFBVixRQUFVQSxJQUFWO0FBQUEsU0FDNUJDLCtDQUFNLENBQUNDLElBQVAsV0FBc0I7QUFBRUgsU0FBSyxFQUFMQSxLQUFGO0FBQVNDLFFBQUksRUFBSkE7QUFBVCxHQUF0QixFQUF1Q0csSUFBdkMsQ0FBNEMsVUFBQ0MsQ0FBRDtBQUFBLFdBQU9BLENBQUMsQ0FBQ0MsSUFBVDtBQUFBLEdBQTVDLENBRDRCO0FBQUEsQ0FBdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQ0dHQyxXOztBQUxWO0FBQ0E7QUFDQTs7QUFHQSxTQUFVQSxXQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtQ0QsY0FBbkMsUUFBd0JFLE9BQXhCLENBQW1DRixJQUFuQztBQUFBO0FBQUE7QUFFZ0IsaUJBQU1HLCtEQUFJLENBQUNWLGtFQUFELEVBQWlCTyxJQUFqQixDQUFWOztBQUZoQjtBQUVVSSxhQUZWO0FBQUE7QUFHSSxpQkFBTUMsOERBQUcsQ0FBQ0Msd0VBQWUsRUFBaEIsQ0FBVDs7QUFISjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLSSxpQkFBTUQsOERBQUcsQ0FBQ0Usc0VBQWEsRUFBZCxDQUFUOztBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVNlTiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmMyYTk2Nzc0YzdlNWUyNzIyYTAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50IGZyb20gXCIuL2NsaWVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3ROZXdQb3N0QVBJID0gKHsgdGl0bGUsIGJvZHkgfSkgPT5cclxuICBjbGllbnQucG9zdChgL3Bvc3RzYCwgeyB0aXRsZSwgYm9keSB9KS50aGVuKChyKSA9PiByLmRhdGEpO1xyXG4iLCJpbXBvcnQgeyBzdWNjZXNzUG9zdFB1c2gsIGVycm9yUG9zdFB1c2ggfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9uZXdQb3N0XCI7XHJcbmltcG9ydCB7IHBvc3ROZXdQb3N0QVBJIH0gZnJvbSBcIi4uLy4uLy4uL2FwaS9wb3N0TmV3UG9zdEFQSVwiO1xyXG5pbXBvcnQgeyBjYWxsLCBwdXQgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IEFueUFjdGlvbiB9IGZyb20gXCJyZWR1eFwiO1xyXG5cclxuZnVuY3Rpb24qIG5ld1Bvc3RTYWdhKHsgcGF5bG9hZDogeyBkYXRhIH0gfTogQW55QWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IHlpZWxkIGNhbGwocG9zdE5ld1Bvc3RBUEksIGRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHN1Y2Nlc3NQb3N0UHVzaCgpKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICB5aWVsZCBwdXQoZXJyb3JQb3N0UHVzaCgpKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ld1Bvc3RTYWdhO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9