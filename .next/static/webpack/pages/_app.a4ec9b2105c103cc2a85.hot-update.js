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
  var id, res;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = _ref.payload.id;
          _context.prev = 1;
          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_4__["call"])(_api_getPostAPI__WEBPACK_IMPORTED_MODULE_3__["getPostAPI"], id);

        case 4:
          res = _context.sent;
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_4__["put"])(Object(_actions_post__WEBPACK_IMPORTED_MODULE_2__["successPost"])(_objectSpread(_objectSpread({}, res), {}, {
            comments: res.comments.reverse()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvbWlkZGxld2FyZXMvc2FnYS9wb3N0U2FnYS50cyJdLCJuYW1lcyI6WyJwb3N0U2FnYSIsImlkIiwicGF5bG9hZCIsImNhbGwiLCJnZXRQb3N0QVBJIiwicmVzIiwicHV0Iiwic3VjY2Vzc1Bvc3QiLCJjb21tZW50cyIsInJldmVyc2UiLCJlcnJvclBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQUtVQSxROzs7Ozs7QUFMVjtBQUNBO0FBQ0E7O0FBR0EsU0FBVUEsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0NDLFlBQWhDLFFBQXFCQyxPQUFyQixDQUFnQ0QsRUFBaEM7QUFBQTtBQUFBO0FBRWdCLGlCQUFNRSwrREFBSSxDQUFDQywwREFBRCxFQUFhSCxFQUFiLENBQVY7O0FBRmhCO0FBRVVJLGFBRlY7QUFBQTtBQUlJLGlCQUFNQyw4REFBRyxDQUFDQyxpRUFBVyxpQ0FBTUYsR0FBTjtBQUFXRyxvQkFBUSxFQUFFSCxHQUFHLENBQUNHLFFBQUosQ0FBYUMsT0FBYjtBQUFyQixhQUFaLENBQVQ7O0FBSko7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUksaUJBQU1ILDhEQUFHLENBQUNJLCtEQUFTLEVBQVYsQ0FBVDs7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFVZVYsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hNGVjOWIyMTA1YzEwM2NjMmE4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3VjY2Vzc1Bvc3QsIGVycm9yUG9zdCB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL3Bvc3RcIjtcclxuaW1wb3J0IHsgZ2V0UG9zdEFQSSB9IGZyb20gXCIuLi8uLi8uLi9hcGkvZ2V0UG9zdEFQSVwiO1xyXG5pbXBvcnQgeyBjYWxsLCBwdXQgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IEFueUFjdGlvbiB9IGZyb20gXCJyZWR1eFwiO1xyXG5cclxuZnVuY3Rpb24qIHBvc3RTYWdhKHsgcGF5bG9hZDogeyBpZCB9IH06IEFueUFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSB5aWVsZCBjYWxsKGdldFBvc3RBUEksIGlkKTtcclxuICAgIC8vIGNvbnN0IGRhdGEgPSB7IC4uLnJlcywgY29tbWVudHM6IHJlcy5jb21tZW50cy5yZXZlcnNlKCkgfTtcclxuICAgIHlpZWxkIHB1dChzdWNjZXNzUG9zdCh7IC4uLnJlcywgY29tbWVudHM6IHJlcy5jb21tZW50cy5yZXZlcnNlKCkgfSkpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHlpZWxkIHB1dChlcnJvclBvc3QoKSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwb3N0U2FnYTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==