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
          comments: action.payload.data.comments.reverse()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcmVkdWNlcnMvcG9zdC50cyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJkYXRhIiwiZXJyb3IiLCJwb3N0UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJwYXlsb2FkIiwiU1VDQ0VTU19QT1NUIiwiY29tbWVudHMiLCJyZXZlcnNlIiwiRVJST1JfUE9TVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBNEJBLElBQU1BLFlBQThCLEdBQUc7QUFDckNDLE1BQUksRUFBRSxJQUQrQjtBQUVyQ0MsT0FBSyxFQUFFO0FBRjhCLENBQXZDOztBQUtBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBR0c7QUFBQSxNQUZyQkMsS0FFcUIsdUVBRmJKLFlBRWE7QUFBQSxNQURyQkssTUFDcUI7QUFDckJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaOztBQUNBLFVBQVFBLE1BQU0sQ0FBQ0csSUFBZjtBQUNFLFNBQUssZ0NBQUw7QUFBdUM7QUFDckMsK0NBQVlKLEtBQVosR0FBc0JDLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlTixXQUFyQztBQUNEOztBQUNELFNBQUtPLDBEQUFMO0FBQ0UsNkNBQ0tOLEtBREw7QUFFRUgsWUFBSSxrQ0FDQ0ksTUFBTSxDQUFDSSxPQUFQLENBQWVSLElBRGhCO0FBRUZVLGtCQUFRLEVBQUVOLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlUixJQUFmLENBQW9CVSxRQUFwQixDQUE2QkMsT0FBN0I7QUFGUjtBQUZOOztBQU9GLFNBQUtDLHdEQUFMO0FBQ0UsNkNBQVlULEtBQVo7QUFBbUJGLGFBQUssRUFBRTtBQUExQjs7QUFDRjtBQUNFLCtCQUFZRSxLQUFaO0FBZko7QUFpQkQsQ0F0QkQ7O0FBd0JlRCwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmE2ZTNhMzY5OTcxY2MxZjE4MzkxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEZFVENIX1BPU1QsXHJcbiAgU1VDQ0VTU19QT1NULFxyXG4gIEVSUk9SX1BPU1QsXHJcbiAgRGF0YVR5cGUsXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnMvcG9zdFwiO1xyXG5cclxuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuXHJcbmV4cG9ydCB0eXBlIEluaXRpYWxTdGF0ZVR5cGUgPSB7XHJcbiAgZGF0YTogRGF0YVR5cGUgfCBudWxsO1xyXG4gIGVycm9yOiBib29sZWFuO1xyXG59O1xyXG5cclxudHlwZSBBY3Rpb25QYXlsb2FkVHlwZSA9IHtcclxuICBkYXRhPzogRGF0YVR5cGU7XHJcbiAgcG9zdFJlZHVjZXI/OiBJbml0aWFsU3RhdGVUeXBlO1xyXG59O1xyXG5cclxudHlwZSBBY3Rpb25UeXBlID0ge1xyXG4gIHR5cGU6XHJcbiAgICB8IHR5cGVvZiBGRVRDSF9QT1NUXHJcbiAgICB8IHR5cGVvZiBIWURSQVRFXHJcbiAgICB8IHR5cGVvZiBTVUNDRVNTX1BPU1RcclxuICAgIHwgdHlwZW9mIEVSUk9SX1BPU1Q7XHJcbiAgcGF5bG9hZD86IEFjdGlvblBheWxvYWRUeXBlO1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBJbml0aWFsU3RhdGVUeXBlID0ge1xyXG4gIGRhdGE6IG51bGwsXHJcbiAgZXJyb3I6IGZhbHNlLFxyXG59O1xyXG5cclxuY29uc3QgcG9zdFJlZHVjZXIgPSAoXHJcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXHJcbiAgYWN0aW9uOiBBY3Rpb25UeXBlXHJcbik6IEluaXRpYWxTdGF0ZVR5cGUgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGFjdGlvbik7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIl9fTkVYVF9SRURVWF9XUkFQUEVSX0hZRFJBVEVfX1wiOiB7XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZC5wb3N0UmVkdWNlciB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSBTVUNDRVNTX1BPU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQuZGF0YSxcclxuICAgICAgICAgIGNvbW1lbnRzOiBhY3Rpb24ucGF5bG9hZC5kYXRhLmNvbW1lbnRzLnJldmVyc2UoKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBFUlJPUl9QT1NUOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3I6IHRydWUgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcG9zdFJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=