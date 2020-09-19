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
  var id, data, newData;
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
          newData = _objectSpread(_objectSpread({}, data), {}, {
            comments: data.comments.reverse()
          });
          _context.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_4__["put"])(Object(_actions_post__WEBPACK_IMPORTED_MODULE_2__["successPost"])(data));

        case 8:
          _context.next = 14;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](1);
          _context.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_4__["put"])(Object(_actions_post__WEBPACK_IMPORTED_MODULE_2__["errorPost"])());

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[1, 10]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvbWlkZGxld2FyZXMvc2FnYS9wb3N0U2FnYS50cyJdLCJuYW1lcyI6WyJwb3N0U2FnYSIsImlkIiwicGF5bG9hZCIsImNhbGwiLCJnZXRQb3N0QVBJIiwiZGF0YSIsIm5ld0RhdGEiLCJjb21tZW50cyIsInJldmVyc2UiLCJwdXQiLCJzdWNjZXNzUG9zdCIsImVycm9yUG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBS1VBLFE7Ozs7OztBQUxWO0FBQ0E7QUFDQTs7QUFHQSxTQUFVQSxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnQ0MsWUFBaEMsUUFBcUJDLE9BQXJCLENBQWdDRCxFQUFoQztBQUFBO0FBQUE7QUFFaUIsaUJBQU1FLCtEQUFJLENBQUNDLDBEQUFELEVBQWFILEVBQWIsQ0FBVjs7QUFGakI7QUFFVUksY0FGVjtBQUdVQyxpQkFIVixtQ0FHeUJELElBSHpCO0FBRytCRSxvQkFBUSxFQUFFRixJQUFJLENBQUNFLFFBQUwsQ0FBY0MsT0FBZDtBQUh6QztBQUFBO0FBSUksaUJBQU1DLDhEQUFHLENBQUNDLGlFQUFXLENBQUNMLElBQUQsQ0FBWixDQUFUOztBQUpKO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1JLGlCQUFNSSw4REFBRyxDQUFDRSwrREFBUyxFQUFWLENBQVQ7O0FBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVWVYLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMDY0YTZmN2UxMDcwNTMwOTE3YjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN1Y2Nlc3NQb3N0LCBlcnJvclBvc3QgfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9wb3N0XCI7XHJcbmltcG9ydCB7IGdldFBvc3RBUEkgfSBmcm9tIFwiLi4vLi4vLi4vYXBpL2dldFBvc3RBUElcIjtcclxuaW1wb3J0IHsgY2FsbCwgcHV0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBBbnlBY3Rpb24gfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbmZ1bmN0aW9uKiBwb3N0U2FnYSh7IHBheWxvYWQ6IHsgaWQgfSB9OiBBbnlBY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGF0YSA9IHlpZWxkIGNhbGwoZ2V0UG9zdEFQSSwgaWQpO1xyXG4gICAgY29uc3QgbmV3RGF0YSA9IHsgLi4uZGF0YSwgY29tbWVudHM6IGRhdGEuY29tbWVudHMucmV2ZXJzZSgpIH07XHJcbiAgICB5aWVsZCBwdXQoc3VjY2Vzc1Bvc3QoZGF0YSkpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHlpZWxkIHB1dChlcnJvclBvc3QoKSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwb3N0U2FnYTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==