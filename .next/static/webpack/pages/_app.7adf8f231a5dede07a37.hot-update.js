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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _actions_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/post */ "./redux/actions/post.ts");
/* harmony import */ var _api_getPostAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/getPostAPI */ "./api/getPostAPI.ts");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");



var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(postSaga);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function postSaga(_ref) {
  var id, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = _ref.payload.id;
          _context.prev = 1;
          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_4__["call"])(_api_getPostAPI__WEBPACK_IMPORTED_MODULE_3__["getPostAPI"], id);

        case 4:
          data = _context.sent;
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_4__["put"])(Object(_actions_post__WEBPACK_IMPORTED_MODULE_2__["successPost"])(_objectSpread(_objectSpread({}, data), {}, {
            comments: data.comments.reverse()
          })));

        case 7:
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          _context.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_4__["put"])(Object(_actions_post__WEBPACK_IMPORTED_MODULE_2__["errorPost"])());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvbWlkZGxld2FyZXMvc2FnYS9wb3N0U2FnYS50cyJdLCJuYW1lcyI6WyJwb3N0U2FnYSIsImlkIiwicGF5bG9hZCIsImNhbGwiLCJnZXRQb3N0QVBJIiwiZGF0YSIsInB1dCIsInN1Y2Nlc3NQb3N0IiwiY29tbWVudHMiLCJyZXZlcnNlIiwiZXJyb3JQb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FLVUEsUTs7Ozs7O0FBTFY7QUFDQTtBQUNBOztBQUdBLFNBQVVBLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdDQyxZQUFoQyxRQUFxQkMsT0FBckIsQ0FBZ0NELEVBQWhDO0FBQUE7QUFBQTtBQUVpQixpQkFBTUUsK0RBQUksQ0FBQ0MsMERBQUQsRUFBYUgsRUFBYixDQUFWOztBQUZqQjtBQUVVSSxjQUZWO0FBQUE7QUFHSSxpQkFBTUMsOERBQUcsQ0FBQ0MsaUVBQVcsaUNBQU1GLElBQU47QUFBWUcsb0JBQVEsRUFBRUgsSUFBSSxDQUFDRyxRQUFMLENBQWNDLE9BQWQ7QUFBdEIsYUFBWixDQUFUOztBQUhKO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtJLGlCQUFNSCw4REFBRyxDQUFDSSwrREFBUyxFQUFWLENBQVQ7O0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBU2VWLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuN2FkZjhmMjMxYTVkZWRlMDdhMzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN1Y2Nlc3NQb3N0LCBlcnJvclBvc3QgfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9wb3N0XCI7XHJcbmltcG9ydCB7IGdldFBvc3RBUEkgfSBmcm9tIFwiLi4vLi4vLi4vYXBpL2dldFBvc3RBUElcIjtcclxuaW1wb3J0IHsgY2FsbCwgcHV0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBBbnlBY3Rpb24gfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbmZ1bmN0aW9uKiBwb3N0U2FnYSh7IHBheWxvYWQ6IHsgaWQgfSB9OiBBbnlBY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGF0YSA9IHlpZWxkIGNhbGwoZ2V0UG9zdEFQSSwgaWQpO1xyXG4gICAgeWllbGQgcHV0KHN1Y2Nlc3NQb3N0KHsgLi4uZGF0YSwgY29tbWVudHM6IGRhdGEuY29tbWVudHMucmV2ZXJzZSgpIH0pKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICB5aWVsZCBwdXQoZXJyb3JQb3N0KCkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcG9zdFNhZ2E7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=