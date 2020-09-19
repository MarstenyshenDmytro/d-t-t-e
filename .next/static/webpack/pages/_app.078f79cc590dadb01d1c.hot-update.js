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
  console.log(action);

  switch (action.type) {
    case "__NEXT_REDUX_WRAPPER_HYDRATE__":
      {
        return _objectSpread(_objectSpread({}, state), action.payload.postReducer);
      }

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["SUCCESS_POST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        data: _objectSpread(_objectSpread({}, action.payload.data), {}, {
          comments: action.payload.data.comments
        })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcmVkdWNlcnMvcG9zdC50cyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJkYXRhIiwiZXJyb3IiLCJwb3N0UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJwYXlsb2FkIiwiU1VDQ0VTU19QT1NUIiwiY29tbWVudHMiLCJFUlJPUl9QT1NUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUE0QkEsSUFBTUEsWUFBOEIsR0FBRztBQUNyQ0MsTUFBSSxFQUFFLElBRCtCO0FBRXJDQyxPQUFLLEVBQUU7QUFGOEIsQ0FBdkM7O0FBS0EsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FHRztBQUFBLE1BRnJCQyxLQUVxQix1RUFGYkosWUFFYTtBQUFBLE1BRHJCSyxNQUNxQjtBQUNyQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7O0FBQ0EsVUFBUUEsTUFBTSxDQUFDRyxJQUFmO0FBQ0UsU0FBSyxnQ0FBTDtBQUF1QztBQUNyQywrQ0FBWUosS0FBWixHQUFzQkMsTUFBTSxDQUFDSSxPQUFQLENBQWVOLFdBQXJDO0FBQ0Q7O0FBQ0QsU0FBS08sMERBQUw7QUFDRSw2Q0FDS04sS0FETDtBQUVFSCxZQUFJLGtDQUNDSSxNQUFNLENBQUNJLE9BQVAsQ0FBZVIsSUFEaEI7QUFFRlUsa0JBQVEsRUFBRU4sTUFBTSxDQUFDSSxPQUFQLENBQWVSLElBQWYsQ0FBb0JVO0FBRjVCO0FBRk47O0FBT0YsU0FBS0Msd0RBQUw7QUFDRSw2Q0FBWVIsS0FBWjtBQUFtQkYsYUFBSyxFQUFFO0FBQTFCOztBQUNGO0FBQ0UsK0JBQVlFLEtBQVo7QUFmSjtBQWlCRCxDQXRCRDs7QUF3QmVELDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMDc4Zjc5Y2M1OTBkYWRiMDFkMWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRkVUQ0hfUE9TVCxcclxuICBTVUNDRVNTX1BPU1QsXHJcbiAgRVJST1JfUE9TVCxcclxuICBEYXRhVHlwZSxcclxufSBmcm9tIFwiLi4vYWN0aW9ucy9wb3N0XCI7XHJcblxyXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5cclxuZXhwb3J0IHR5cGUgSW5pdGlhbFN0YXRlVHlwZSA9IHtcclxuICBkYXRhOiBEYXRhVHlwZSB8IG51bGw7XHJcbiAgZXJyb3I6IGJvb2xlYW47XHJcbn07XHJcblxyXG50eXBlIEFjdGlvblBheWxvYWRUeXBlID0ge1xyXG4gIGRhdGE/OiBEYXRhVHlwZTtcclxuICBwb3N0UmVkdWNlcj86IEluaXRpYWxTdGF0ZVR5cGU7XHJcbn07XHJcblxyXG50eXBlIEFjdGlvblR5cGUgPSB7XHJcbiAgdHlwZTpcclxuICAgIHwgdHlwZW9mIEZFVENIX1BPU1RcclxuICAgIHwgdHlwZW9mIEhZRFJBVEVcclxuICAgIHwgdHlwZW9mIFNVQ0NFU1NfUE9TVFxyXG4gICAgfCB0eXBlb2YgRVJST1JfUE9TVDtcclxuICBwYXlsb2FkPzogQWN0aW9uUGF5bG9hZFR5cGU7XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IEluaXRpYWxTdGF0ZVR5cGUgPSB7XHJcbiAgZGF0YTogbnVsbCxcclxuICBlcnJvcjogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCBwb3N0UmVkdWNlciA9IChcclxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcclxuICBhY3Rpb246IEFjdGlvblR5cGVcclxuKTogSW5pdGlhbFN0YXRlVHlwZSA9PiB7XHJcbiAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiX19ORVhUX1JFRFVYX1dSQVBQRVJfSFlEUkFURV9fXCI6IHtcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkLnBvc3RSZWR1Y2VyIH07XHJcbiAgICB9XHJcbiAgICBjYXNlIFNVQ0NFU1NfUE9TVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZC5kYXRhLFxyXG4gICAgICAgICAgY29tbWVudHM6IGFjdGlvbi5wYXlsb2FkLmRhdGEuY29tbWVudHMsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgRVJST1JfUE9TVDpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVycm9yOiB0cnVlIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBvc3RSZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9