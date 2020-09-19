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
        data: action.payload.data
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcmVkdWNlcnMvcG9zdHNMaXN0LnRzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImRhdGEiLCJlcnJvciIsInBvc3RzTGlzdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiU1VDQ0VTU19QT1NUU19MSVNUIiwiRVJST1JfUE9TVFNfTElTVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBNEJBLElBQU1BLFlBQThCLEdBQUc7QUFDckNDLE1BQUksRUFBRSxJQUQrQjtBQUVyQ0MsT0FBSyxFQUFFO0FBRjhCLENBQXZDOztBQUtBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FHRjtBQUFBLE1BRnJCQyxLQUVxQix1RUFGYkosWUFFYTtBQUFBLE1BRHJCSyxNQUNxQjs7QUFDckIsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBSyxnQ0FBTDtBQUF1QztBQUNyQywrQ0FBWUYsS0FBWixHQUFzQkMsTUFBTSxDQUFDRSxPQUFQLENBQWVKLGdCQUFyQztBQUNEOztBQUNELFNBQUtLLHFFQUFMO0FBQ0UsNkNBQVlKLEtBQVo7QUFBbUJILFlBQUksRUFBRUksTUFBTSxDQUFDRSxPQUFQLENBQWVOO0FBQXhDOztBQUNGLFNBQUtRLG1FQUFMO0FBQ0UsNkNBQVlMLEtBQVo7QUFBbUJGLGFBQUssRUFBRTtBQUExQjs7QUFDRjtBQUNFLCtCQUFZRSxLQUFaO0FBVEo7QUFXRCxDQWZEOztBQWlCZUQsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wMjY0Yjc5ZTU2NDJlZDViYjJhZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBGRVRDSF9QT1NUU19MSVNULFxyXG4gIFNVQ0NFU1NfUE9TVFNfTElTVCxcclxuICBFUlJPUl9QT1NUU19MSVNULFxyXG4gIERhdGFUeXBlLFxyXG59IGZyb20gXCIuLi9hY3Rpb25zL3Bvc3RzTGlzdFwiO1xyXG5cclxuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuXHJcbmV4cG9ydCB0eXBlIEluaXRpYWxTdGF0ZVR5cGUgPSB7XHJcbiAgZGF0YTogQXJyYXk8RGF0YVR5cGU+IHwgbnVsbDtcclxuICBlcnJvcjogYm9vbGVhbjtcclxufTtcclxuXHJcbnR5cGUgQWN0aW9uUGF5bG9hZFR5cGUgPSB7XHJcbiAgZGF0YT86IEFycmF5PERhdGFUeXBlPjtcclxuICBwb3N0c0xpc3RSZWR1Y2VyPzogSW5pdGlhbFN0YXRlVHlwZTtcclxufTtcclxuXHJcbnR5cGUgQWN0aW9uVHlwZSA9IHtcclxuICB0eXBlOlxyXG4gICAgfCB0eXBlb2YgRkVUQ0hfUE9TVFNfTElTVFxyXG4gICAgfCB0eXBlb2YgSFlEUkFURVxyXG4gICAgfCB0eXBlb2YgU1VDQ0VTU19QT1NUU19MSVNUXHJcbiAgICB8IHR5cGVvZiBFUlJPUl9QT1NUU19MSVNUO1xyXG4gIHBheWxvYWQ/OiBBY3Rpb25QYXlsb2FkVHlwZTtcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogSW5pdGlhbFN0YXRlVHlwZSA9IHtcclxuICBkYXRhOiBudWxsLFxyXG4gIGVycm9yOiBmYWxzZSxcclxufTtcclxuXHJcbmNvbnN0IHBvc3RzTGlzdFJlZHVjZXIgPSAoXHJcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXHJcbiAgYWN0aW9uOiBBY3Rpb25UeXBlXHJcbik6IEluaXRpYWxTdGF0ZVR5cGUgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgXCJfX05FWFRfUkVEVVhfV1JBUFBFUl9IWURSQVRFX19cIjoge1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQucG9zdHNMaXN0UmVkdWNlciB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSBTVUNDRVNTX1BPU1RTX0xJU1Q6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBkYXRhOiBhY3Rpb24ucGF5bG9hZC5kYXRhIH07XHJcbiAgICBjYXNlIEVSUk9SX1BPU1RTX0xJU1Q6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlcnJvcjogdHJ1ZSB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwb3N0c0xpc3RSZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9