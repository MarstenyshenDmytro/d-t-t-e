webpackHotUpdate_N_E("pages/_app",{

/***/ "./redux/reducers/postsList.ts":
/*!*************************************!*\
  !*** ./redux/reducers/postsList.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _actions_postsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/postsList */ "./redux/actions/postsList.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  data: null,
  error: false
};

var postsListReducer = function postsListReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "__NEXT_REDUX_WRAPPER_HYDRATE__":
      {
        return _objectSpread(_objectSpread({}, state), action.payload.postsListReducer);
      }

    case _actions_postsList__WEBPACK_IMPORTED_MODULE_1__["SUCCESS_POSTS_LIST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        data: action.payload.data.reverse()
      });

    case _actions_postsList__WEBPACK_IMPORTED_MODULE_1__["ERROR_POSTS_LIST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: true
      });

    default:
      return _objectSpread({}, state);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (postsListReducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcmVkdWNlcnMvcG9zdHNMaXN0LnRzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImRhdGEiLCJlcnJvciIsInBvc3RzTGlzdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiU1VDQ0VTU19QT1NUU19MSVNUIiwicmV2ZXJzZSIsIkVSUk9SX1BPU1RTX0xJU1QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTRCQSxJQUFNQSxZQUE4QixHQUFHO0FBQ3JDQyxNQUFJLEVBQUUsSUFEK0I7QUFFckNDLE9BQUssRUFBRTtBQUY4QixDQUF2Qzs7QUFLQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBR0Y7QUFBQSxNQUZyQkMsS0FFcUIsdUVBRmJKLFlBRWE7QUFBQSxNQURyQkssTUFDcUI7O0FBQ3JCLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUssZ0NBQUw7QUFBdUM7QUFDckMsK0NBQVlGLEtBQVosR0FBc0JDLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlSixnQkFBckM7QUFDRDs7QUFDRCxTQUFLSyxxRUFBTDtBQUNFLDZDQUFZSixLQUFaO0FBQW1CSCxZQUFJLEVBQUVJLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlTixJQUFmLENBQW9CUSxPQUFwQjtBQUF6Qjs7QUFDRixTQUFLQyxtRUFBTDtBQUNFLDZDQUFZTixLQUFaO0FBQW1CRixhQUFLLEVBQUU7QUFBMUI7O0FBQ0Y7QUFDRSwrQkFBWUUsS0FBWjtBQVRKO0FBV0QsQ0FmRDs7QUFpQmVELCtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYWQ3Njk2NWZhYjY2YWMyOGI3M2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRkVUQ0hfUE9TVFNfTElTVCxcclxuICBTVUNDRVNTX1BPU1RTX0xJU1QsXHJcbiAgRVJST1JfUE9TVFNfTElTVCxcclxuICBEYXRhVHlwZSxcclxufSBmcm9tIFwiLi4vYWN0aW9ucy9wb3N0c0xpc3RcIjtcclxuXHJcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcblxyXG5leHBvcnQgdHlwZSBJbml0aWFsU3RhdGVUeXBlID0ge1xyXG4gIGRhdGE6IEFycmF5PERhdGFUeXBlPiB8IG51bGw7XHJcbiAgZXJyb3I6IGJvb2xlYW47XHJcbn07XHJcblxyXG50eXBlIEFjdGlvblBheWxvYWRUeXBlID0ge1xyXG4gIGRhdGE/OiBBcnJheTxEYXRhVHlwZT47XHJcbiAgcG9zdHNMaXN0UmVkdWNlcj86IEluaXRpYWxTdGF0ZVR5cGU7XHJcbn07XHJcblxyXG50eXBlIEFjdGlvblR5cGUgPSB7XHJcbiAgdHlwZTpcclxuICAgIHwgdHlwZW9mIEZFVENIX1BPU1RTX0xJU1RcclxuICAgIHwgdHlwZW9mIEhZRFJBVEVcclxuICAgIHwgdHlwZW9mIFNVQ0NFU1NfUE9TVFNfTElTVFxyXG4gICAgfCB0eXBlb2YgRVJST1JfUE9TVFNfTElTVDtcclxuICBwYXlsb2FkPzogQWN0aW9uUGF5bG9hZFR5cGU7XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IEluaXRpYWxTdGF0ZVR5cGUgPSB7XHJcbiAgZGF0YTogbnVsbCxcclxuICBlcnJvcjogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCBwb3N0c0xpc3RSZWR1Y2VyID0gKFxyXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxyXG4gIGFjdGlvbjogQWN0aW9uVHlwZVxyXG4pOiBJbml0aWFsU3RhdGVUeXBlID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiX19ORVhUX1JFRFVYX1dSQVBQRVJfSFlEUkFURV9fXCI6IHtcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkLnBvc3RzTGlzdFJlZHVjZXIgfTtcclxuICAgIH1cclxuICAgIGNhc2UgU1VDQ0VTU19QT1NUU19MSVNUOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZGF0YTogYWN0aW9uLnBheWxvYWQuZGF0YS5yZXZlcnNlKCkgfTtcclxuICAgIGNhc2UgRVJST1JfUE9TVFNfTElTVDpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVycm9yOiB0cnVlIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBvc3RzTGlzdFJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=