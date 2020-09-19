webpackHotUpdate_N_E("pages/_app",{

/***/ "./redux/reducers/post.ts":
/*!********************************!*\
  !*** ./redux/reducers/post.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _actions_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/post */ "./redux/actions/post.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  data: null,
  error: false
};

var postReducer = function postReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "__NEXT_REDUX_WRAPPER_HYDRATE__":
      {
        return _objectSpread(_objectSpread({}, state), action.payload.postReducer);
      }

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["SUCCESS_POST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        data: _objectSpread(_objectSpread({}, action.payload.data), action.payload.data.comments.reverse())
      });

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["ERROR_POST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: true
      });

    default:
      return _objectSpread({}, state);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (postReducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcmVkdWNlcnMvcG9zdC50cyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJkYXRhIiwiZXJyb3IiLCJwb3N0UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJTVUNDRVNTX1BPU1QiLCJjb21tZW50cyIsInJldmVyc2UiLCJFUlJPUl9QT1NUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUE0QkEsSUFBTUEsWUFBOEIsR0FBRztBQUNyQ0MsTUFBSSxFQUFFLElBRCtCO0FBRXJDQyxPQUFLLEVBQUU7QUFGOEIsQ0FBdkM7O0FBS0EsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FHRztBQUFBLE1BRnJCQyxLQUVxQix1RUFGYkosWUFFYTtBQUFBLE1BRHJCSyxNQUNxQjs7QUFDckIsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBSyxnQ0FBTDtBQUF1QztBQUNyQywrQ0FBWUYsS0FBWixHQUFzQkMsTUFBTSxDQUFDRSxPQUFQLENBQWVKLFdBQXJDO0FBQ0Q7O0FBQ0QsU0FBS0ssMERBQUw7QUFDRSw2Q0FDS0osS0FETDtBQUVFSCxZQUFJLGtDQUNDSSxNQUFNLENBQUNFLE9BQVAsQ0FBZU4sSUFEaEIsR0FFQ0ksTUFBTSxDQUFDRSxPQUFQLENBQWVOLElBQWYsQ0FBb0JRLFFBQXBCLENBQTZCQyxPQUE3QixFQUZEO0FBRk47O0FBT0YsU0FBS0Msd0RBQUw7QUFDRSw2Q0FBWVAsS0FBWjtBQUFtQkYsYUFBSyxFQUFFO0FBQTFCOztBQUNGO0FBQ0UsK0JBQVlFLEtBQVo7QUFmSjtBQWlCRCxDQXJCRDs7QUF1QmVELDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMzA5N2QxN2QxMDVmYzBiYjhjNTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRkVUQ0hfUE9TVCxcclxuICBTVUNDRVNTX1BPU1QsXHJcbiAgRVJST1JfUE9TVCxcclxuICBEYXRhVHlwZSxcclxufSBmcm9tIFwiLi4vYWN0aW9ucy9wb3N0XCI7XHJcblxyXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5cclxuZXhwb3J0IHR5cGUgSW5pdGlhbFN0YXRlVHlwZSA9IHtcclxuICBkYXRhOiBEYXRhVHlwZSB8IG51bGw7XHJcbiAgZXJyb3I6IGJvb2xlYW47XHJcbn07XHJcblxyXG50eXBlIEFjdGlvblBheWxvYWRUeXBlID0ge1xyXG4gIGRhdGE/OiBEYXRhVHlwZTtcclxuICBwb3N0UmVkdWNlcj86IEluaXRpYWxTdGF0ZVR5cGU7XHJcbn07XHJcblxyXG50eXBlIEFjdGlvblR5cGUgPSB7XHJcbiAgdHlwZTpcclxuICAgIHwgdHlwZW9mIEZFVENIX1BPU1RcclxuICAgIHwgdHlwZW9mIEhZRFJBVEVcclxuICAgIHwgdHlwZW9mIFNVQ0NFU1NfUE9TVFxyXG4gICAgfCB0eXBlb2YgRVJST1JfUE9TVDtcclxuICBwYXlsb2FkPzogQWN0aW9uUGF5bG9hZFR5cGU7XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IEluaXRpYWxTdGF0ZVR5cGUgPSB7XHJcbiAgZGF0YTogbnVsbCxcclxuICBlcnJvcjogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCBwb3N0UmVkdWNlciA9IChcclxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcclxuICBhY3Rpb246IEFjdGlvblR5cGVcclxuKTogSW5pdGlhbFN0YXRlVHlwZSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIl9fTkVYVF9SRURVWF9XUkFQUEVSX0hZRFJBVEVfX1wiOiB7XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZC5wb3N0UmVkdWNlciB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSBTVUNDRVNTX1BPU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQuZGF0YSxcclxuICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLmRhdGEuY29tbWVudHMucmV2ZXJzZSgpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEVSUk9SX1BPU1Q6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlcnJvcjogdHJ1ZSB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwb3N0UmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==