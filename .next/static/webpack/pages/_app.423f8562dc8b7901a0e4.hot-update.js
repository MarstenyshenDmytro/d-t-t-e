webpackHotUpdate_N_E("pages/_app",{

/***/ "./redux/reducers/newPost.ts":
/*!***********************************!*\
  !*** ./redux/reducers/newPost.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _actions_newPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/newPost */ "./redux/actions/newPost.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  loading: false,
  isSuccessed: false,
  error: false
};

var newPostReducer = function newPostReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "__NEXT_REDUX_WRAPPER_HYDRATE__":
      {
        return _objectSpread(_objectSpread({}, state), action.payload.newPostReducer);
      }

    case _actions_newPost__WEBPACK_IMPORTED_MODULE_1__["NEW_POST_PUSH"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _actions_newPost__WEBPACK_IMPORTED_MODULE_1__["SUCCESS_POST_PUSH"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        isSuccessed: true
      });

    case _actions_newPost__WEBPACK_IMPORTED_MODULE_1__["ERROR_POST_PUSH"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: true
      });

    default:
      return _objectSpread({}, state);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (newPostReducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcmVkdWNlcnMvbmV3UG9zdC50cyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2FkaW5nIiwiaXNTdWNjZXNzZWQiLCJlcnJvciIsIm5ld1Bvc3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsIk5FV19QT1NUX1BVU0giLCJTVUNDRVNTX1BPU1RfUFVTSCIsIkVSUk9SX1BPU1RfUFVTSCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBNkJBLElBQU1BLFlBQThCLEdBQUc7QUFDckNDLFNBQU8sRUFBRSxLQUQ0QjtBQUVyQ0MsYUFBVyxFQUFFLEtBRndCO0FBR3JDQyxPQUFLLEVBQUU7QUFIOEIsQ0FBdkM7O0FBTUEsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUdBO0FBQUEsTUFGckJDLEtBRXFCLHVFQUZiTCxZQUVhO0FBQUEsTUFEckJNLE1BQ3FCOztBQUNyQixVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLGdDQUFMO0FBQXVDO0FBQ3JDLCtDQUFZRixLQUFaLEdBQXNCQyxNQUFNLENBQUNFLE9BQVAsQ0FBZUosY0FBckM7QUFDRDs7QUFDRCxTQUFLSyw4REFBTDtBQUNFLDZDQUFZSixLQUFaO0FBQW1CSixlQUFPLEVBQUU7QUFBNUI7O0FBQ0YsU0FBS1Msa0VBQUw7QUFDRSw2Q0FBWUwsS0FBWjtBQUFtQkosZUFBTyxFQUFFLEtBQTVCO0FBQW1DQyxtQkFBVyxFQUFFO0FBQWhEOztBQUNGLFNBQUtTLGdFQUFMO0FBQ0UsNkNBQVlOLEtBQVo7QUFBbUJKLGVBQU8sRUFBRSxLQUE1QjtBQUFtQ0UsYUFBSyxFQUFFO0FBQTFDOztBQUNGO0FBQ0UsK0JBQVlFLEtBQVo7QUFYSjtBQWFELENBakJEOztBQW1CZUQsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40MjNmODU2MmRjOGI3OTAxYTBlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBORVdfUE9TVF9QVVNILFxyXG4gIFNVQ0NFU1NfUE9TVF9QVVNILFxyXG4gIEVSUk9SX1BPU1RfUFVTSCxcclxuICBEYXRhVHlwZSxcclxufSBmcm9tIFwiLi4vYWN0aW9ucy9uZXdQb3N0XCI7XHJcblxyXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5cclxuZXhwb3J0IHR5cGUgSW5pdGlhbFN0YXRlVHlwZSA9IHtcclxuICBsb2FkaW5nOiBib29sZWFuO1xyXG4gIGlzU3VjY2Vzc2VkOiBib29sZWFuO1xyXG4gIGVycm9yOiBib29sZWFuO1xyXG59O1xyXG5cclxudHlwZSBBY3Rpb25QYXlsb2FkVHlwZSA9IHtcclxuICBkYXRhPzogRGF0YVR5cGU7XHJcbiAgbmV3UG9zdFJlZHVjZXI/OiBJbml0aWFsU3RhdGVUeXBlO1xyXG59O1xyXG5cclxudHlwZSBBY3Rpb25UeXBlID0ge1xyXG4gIHR5cGU6XHJcbiAgICB8IHR5cGVvZiBORVdfUE9TVF9QVVNIXHJcbiAgICB8IHR5cGVvZiBIWURSQVRFXHJcbiAgICB8IHR5cGVvZiBTVUNDRVNTX1BPU1RfUFVTSFxyXG4gICAgfCB0eXBlb2YgRVJST1JfUE9TVF9QVVNIO1xyXG4gIHBheWxvYWQ/OiBBY3Rpb25QYXlsb2FkVHlwZTtcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogSW5pdGlhbFN0YXRlVHlwZSA9IHtcclxuICBsb2FkaW5nOiBmYWxzZSxcclxuICBpc1N1Y2Nlc3NlZDogZmFsc2UsXHJcbiAgZXJyb3I6IGZhbHNlLFxyXG59O1xyXG5cclxuY29uc3QgbmV3UG9zdFJlZHVjZXIgPSAoXHJcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXHJcbiAgYWN0aW9uOiBBY3Rpb25UeXBlXHJcbik6IEluaXRpYWxTdGF0ZVR5cGUgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgXCJfX05FWFRfUkVEVVhfV1JBUFBFUl9IWURSQVRFX19cIjoge1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQubmV3UG9zdFJlZHVjZXIgfTtcclxuICAgIH1cclxuICAgIGNhc2UgTkVXX1BPU1RfUFVTSDpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IHRydWUgfTtcclxuICAgIGNhc2UgU1VDQ0VTU19QT1NUX1BVU0g6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgaXNTdWNjZXNzZWQ6IHRydWUgfTtcclxuICAgIGNhc2UgRVJST1JfUE9TVF9QVVNIOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIGVycm9yOiB0cnVlIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ld1Bvc3RSZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9