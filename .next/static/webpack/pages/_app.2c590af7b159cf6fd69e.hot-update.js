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
        data: _objectSpread(_objectSpread({}, action.payload.data), action.payload.data.comments)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcmVkdWNlcnMvcG9zdC50cyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJkYXRhIiwiZXJyb3IiLCJwb3N0UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJTVUNDRVNTX1BPU1QiLCJjb21tZW50cyIsIkVSUk9SX1BPU1QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTRCQSxJQUFNQSxZQUE4QixHQUFHO0FBQ3JDQyxNQUFJLEVBQUUsSUFEK0I7QUFFckNDLE9BQUssRUFBRTtBQUY4QixDQUF2Qzs7QUFLQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUdHO0FBQUEsTUFGckJDLEtBRXFCLHVFQUZiSixZQUVhO0FBQUEsTUFEckJLLE1BQ3FCOztBQUNyQixVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLGdDQUFMO0FBQXVDO0FBQ3JDLCtDQUFZRixLQUFaLEdBQXNCQyxNQUFNLENBQUNFLE9BQVAsQ0FBZUosV0FBckM7QUFDRDs7QUFDRCxTQUFLSywwREFBTDtBQUNFLDZDQUNLSixLQURMO0FBRUVILFlBQUksa0NBQ0NJLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlTixJQURoQixHQUVDSSxNQUFNLENBQUNFLE9BQVAsQ0FBZU4sSUFBZixDQUFvQlEsUUFGckI7QUFGTjs7QUFPRixTQUFLQyx3REFBTDtBQUNFLDZDQUFZTixLQUFaO0FBQW1CRixhQUFLLEVBQUU7QUFBMUI7O0FBQ0Y7QUFDRSwrQkFBWUUsS0FBWjtBQWZKO0FBaUJELENBckJEOztBQXVCZUQsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yYzU5MGFmN2IxNTljZjZmZDY5ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBGRVRDSF9QT1NULFxyXG4gIFNVQ0NFU1NfUE9TVCxcclxuICBFUlJPUl9QT1NULFxyXG4gIERhdGFUeXBlLFxyXG59IGZyb20gXCIuLi9hY3Rpb25zL3Bvc3RcIjtcclxuXHJcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcblxyXG5leHBvcnQgdHlwZSBJbml0aWFsU3RhdGVUeXBlID0ge1xyXG4gIGRhdGE6IERhdGFUeXBlIHwgbnVsbDtcclxuICBlcnJvcjogYm9vbGVhbjtcclxufTtcclxuXHJcbnR5cGUgQWN0aW9uUGF5bG9hZFR5cGUgPSB7XHJcbiAgZGF0YT86IERhdGFUeXBlO1xyXG4gIHBvc3RSZWR1Y2VyPzogSW5pdGlhbFN0YXRlVHlwZTtcclxufTtcclxuXHJcbnR5cGUgQWN0aW9uVHlwZSA9IHtcclxuICB0eXBlOlxyXG4gICAgfCB0eXBlb2YgRkVUQ0hfUE9TVFxyXG4gICAgfCB0eXBlb2YgSFlEUkFURVxyXG4gICAgfCB0eXBlb2YgU1VDQ0VTU19QT1NUXHJcbiAgICB8IHR5cGVvZiBFUlJPUl9QT1NUO1xyXG4gIHBheWxvYWQ/OiBBY3Rpb25QYXlsb2FkVHlwZTtcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogSW5pdGlhbFN0YXRlVHlwZSA9IHtcclxuICBkYXRhOiBudWxsLFxyXG4gIGVycm9yOiBmYWxzZSxcclxufTtcclxuXHJcbmNvbnN0IHBvc3RSZWR1Y2VyID0gKFxyXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxyXG4gIGFjdGlvbjogQWN0aW9uVHlwZVxyXG4pOiBJbml0aWFsU3RhdGVUeXBlID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiX19ORVhUX1JFRFVYX1dSQVBQRVJfSFlEUkFURV9fXCI6IHtcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkLnBvc3RSZWR1Y2VyIH07XHJcbiAgICB9XHJcbiAgICBjYXNlIFNVQ0NFU1NfUE9TVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZC5kYXRhLFxyXG4gICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQuZGF0YS5jb21tZW50cyxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBFUlJPUl9QT1NUOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3I6IHRydWUgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcG9zdFJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=