webpackHotUpdate_N_E("pages/_app",{

/***/ "./redux/actions/newPost.ts":
/*!**********************************!*\
  !*** ./redux/actions/newPost.ts ***!
  \**********************************/
/*! exports provided: NEW_POST_PUSH, SUCCESS_POST_PUSH, ERROR_POST_PUSH, newPostPush, successPostPush, errorPostPush */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_POST_PUSH", function() { return NEW_POST_PUSH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUCCESS_POST_PUSH", function() { return SUCCESS_POST_PUSH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_POST_PUSH", function() { return ERROR_POST_PUSH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newPostPush", function() { return newPostPush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successPostPush", function() { return successPostPush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorPostPush", function() { return errorPostPush; });
var NEW_POST_PUSH = "NEW_POST_PUSH";
var SUCCESS_POST_PUSH = "SUCCESS_POST_PUSH";
var ERROR_POST_PUSH = "ERROR_POST_PUSH";
var newPostPush = function newPostPush(data) {
  return {
    type: NEW_POST_PUSH,
    payload: {
      data: data,
      loading: true
    }
  };
};
var successPostPush = function successPostPush() {
  return {
    type: SUCCESS_POST_PUSH,
    payload: {
      loading: false,
      isSuccessed: true
    }
  };
};
var errorPostPush = function errorPostPush() {
  return {
    type: ERROR_POST_PUSH,
    payload: {
      loading: false,
      error: true
    }
  };
};

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

/***/ }),

/***/ "./redux/reducers/index.ts":
/*!*********************************!*\
  !*** ./redux/reducers/index.ts ***!
  \*********************************/
/*! exports provided: postsListReducer, postReducer, newPostReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _postsList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postsList */ "./redux/reducers/postsList.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postsListReducer", function() { return _postsList__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post */ "./redux/reducers/post.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postReducer", function() { return _post__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _newPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newPost */ "./redux/reducers/newPost.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "newPostReducer", function() { return _newPost__WEBPACK_IMPORTED_MODULE_2__["default"]; });





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

/***/ }),

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy9uZXdQb3N0LnRzIiwid2VicGFjazovL19OX0UvLi9yZWR1eC9yZWR1Y2Vycy9pbmRleC50cyIsIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcmVkdWNlcnMvbmV3UG9zdC50cyJdLCJuYW1lcyI6WyJORVdfUE9TVF9QVVNIIiwiU1VDQ0VTU19QT1NUX1BVU0giLCJFUlJPUl9QT1NUX1BVU0giLCJuZXdQb3N0UHVzaCIsImRhdGEiLCJ0eXBlIiwicGF5bG9hZCIsImxvYWRpbmciLCJzdWNjZXNzUG9zdFB1c2giLCJpc1N1Y2Nlc3NlZCIsImVycm9yUG9zdFB1c2giLCJlcnJvciIsImluaXRpYWxTdGF0ZSIsIm5ld1Bvc3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU1BLGFBQWEsR0FBRyxlQUF0QjtBQUNBLElBQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFtQ0EsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsSUFBRDtBQUFBLFNBQTRDO0FBQ3JFQyxRQUFJLEVBQUVMLGFBRCtEO0FBRXJFTSxXQUFPLEVBQUU7QUFBRUYsVUFBSSxFQUFKQSxJQUFGO0FBQVFHLGFBQU8sRUFBRTtBQUFqQjtBQUY0RCxHQUE1QztBQUFBLENBQXBCO0FBS0EsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQjtBQUFBLFNBQWtDO0FBQy9ESCxRQUFJLEVBQUVKLGlCQUR5RDtBQUUvREssV0FBTyxFQUFFO0FBQUVDLGFBQU8sRUFBRSxLQUFYO0FBQWtCRSxpQkFBVyxFQUFFO0FBQS9CO0FBRnNELEdBQWxDO0FBQUEsQ0FBeEI7QUFLQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0FBQUEsU0FBZ0M7QUFDM0RMLFFBQUksRUFBRUgsZUFEcUQ7QUFFM0RJLFdBQU8sRUFBRTtBQUFFQyxhQUFPLEVBQUUsS0FBWDtBQUFrQkksV0FBSyxFQUFFO0FBQXpCO0FBRmtELEdBQWhDO0FBQUEsQ0FBdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUE2QkEsSUFBTUMsWUFBOEIsR0FBRztBQUNyQ0wsU0FBTyxFQUFFLEtBRDRCO0FBRXJDRSxhQUFXLEVBQUUsS0FGd0I7QUFHckNFLE9BQUssRUFBRTtBQUg4QixDQUF2Qzs7QUFNQSxJQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBR0E7QUFBQSxNQUZyQkMsS0FFcUIsdUVBRmJGLFlBRWE7QUFBQSxNQURyQkcsTUFDcUI7O0FBQ3JCLFVBQVFBLE1BQU0sQ0FBQ1YsSUFBZjtBQUNFLFNBQUssZ0NBQUw7QUFBdUM7QUFDckMsK0NBQVlTLEtBQVosR0FBc0JDLE1BQU0sQ0FBQ1QsT0FBUCxDQUFlTyxjQUFyQztBQUNEOztBQUNELFNBQUtiLDhEQUFMO0FBQ0UsNkNBQVljLEtBQVo7QUFBbUJQLGVBQU8sRUFBRTtBQUE1Qjs7QUFDRixTQUFLTixrRUFBTDtBQUNFLDZDQUFZYSxLQUFaO0FBQW1CUCxlQUFPLEVBQUUsS0FBNUI7QUFBbUNFLG1CQUFXLEVBQUU7QUFBaEQ7O0FBQ0YsU0FBS1AsZ0VBQUw7QUFDRSw2Q0FBWVksS0FBWjtBQUFtQlAsZUFBTyxFQUFFLEtBQTVCO0FBQW1DSSxhQUFLLEVBQUU7QUFBMUM7O0FBQ0Y7QUFDRSwrQkFBWUcsS0FBWjtBQVhKO0FBYUQsQ0FqQkQ7O0FBbUJlRCw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmZiOTZhNDM3ZGNkNTI3YzY2ZTRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgTkVXX1BPU1RfUFVTSCA9IFwiTkVXX1BPU1RfUFVTSFwiO1xyXG5leHBvcnQgY29uc3QgU1VDQ0VTU19QT1NUX1BVU0ggPSBcIlNVQ0NFU1NfUE9TVF9QVVNIXCI7XHJcbmV4cG9ydCBjb25zdCBFUlJPUl9QT1NUX1BVU0ggPSBcIkVSUk9SX1BPU1RfUFVTSFwiO1xyXG5cclxuZXhwb3J0IHR5cGUgRGF0YVR5cGUgPSB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBib2R5OiBzdHJpbmc7XHJcbn07XHJcblxyXG50eXBlIE5ld1Bvc3RQdXNoQWN0aW9uVHlwZSA9IHtcclxuICB0eXBlOiB0eXBlb2YgTkVXX1BPU1RfUFVTSDtcclxuICBwYXlsb2FkOiB7XHJcbiAgICBkYXRhOiBEYXRhVHlwZTtcclxuICAgIGxvYWRpbmc6IGJvb2xlYW47XHJcbiAgfTtcclxufTtcclxuXHJcbnR5cGUgU3VjY2Vzc1Bvc3RQdXNoQWN0aW9uUGF5bG9hZFR5cGUgPSB7XHJcbiAgbG9hZGluZzogYm9vbGVhbjtcclxuICBpc1N1Y2Nlc3NlZDogYm9vbGVhbjtcclxufTtcclxuXHJcbnR5cGUgU3VjY2Vzc1Bvc3RQdXNoQWN0aW9uVHlwZSA9IHtcclxuICB0eXBlOiB0eXBlb2YgU1VDQ0VTU19QT1NUX1BVU0g7XHJcbiAgcGF5bG9hZDogU3VjY2Vzc1Bvc3RQdXNoQWN0aW9uUGF5bG9hZFR5cGU7XHJcbn07XHJcblxyXG50eXBlIEVycm9yUG9zdFB1c2hBY3Rpb25QYXlsb2FkVHlwZSA9IHtcclxuICBlcnJvcjogYm9vbGVhbjtcclxuICBsb2FkaW5nOiBib29sZWFuO1xyXG59O1xyXG5cclxudHlwZSBFcnJvclBvc3RQdXNoQWN0aW9uVHlwZSA9IHtcclxuICB0eXBlOiB0eXBlb2YgRVJST1JfUE9TVF9QVVNIO1xyXG4gIHBheWxvYWQ6IEVycm9yUG9zdFB1c2hBY3Rpb25QYXlsb2FkVHlwZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBuZXdQb3N0UHVzaCA9IChkYXRhOiBEYXRhVHlwZSk6IE5ld1Bvc3RQdXNoQWN0aW9uVHlwZSA9PiAoe1xyXG4gIHR5cGU6IE5FV19QT1NUX1BVU0gsXHJcbiAgcGF5bG9hZDogeyBkYXRhLCBsb2FkaW5nOiB0cnVlIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN1Y2Nlc3NQb3N0UHVzaCA9ICgpOiBTdWNjZXNzUG9zdFB1c2hBY3Rpb25UeXBlID0+ICh7XHJcbiAgdHlwZTogU1VDQ0VTU19QT1NUX1BVU0gsXHJcbiAgcGF5bG9hZDogeyBsb2FkaW5nOiBmYWxzZSwgaXNTdWNjZXNzZWQ6IHRydWUgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZXJyb3JQb3N0UHVzaCA9ICgpOiBFcnJvclBvc3RQdXNoQWN0aW9uVHlwZSA9PiAoe1xyXG4gIHR5cGU6IEVSUk9SX1BPU1RfUFVTSCxcclxuICBwYXlsb2FkOiB7IGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogdHJ1ZSB9LFxyXG59KTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBwb3N0c0xpc3RSZWR1Y2VyIH0gZnJvbSBcIi4vcG9zdHNMaXN0XCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcG9zdFJlZHVjZXIgfSBmcm9tIFwiLi9wb3N0XCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbmV3UG9zdFJlZHVjZXIgfSBmcm9tIFwiLi9uZXdQb3N0XCI7XHJcbiIsImltcG9ydCB7XHJcbiAgTkVXX1BPU1RfUFVTSCxcclxuICBTVUNDRVNTX1BPU1RfUFVTSCxcclxuICBFUlJPUl9QT1NUX1BVU0gsXHJcbiAgRGF0YVR5cGUsXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnMvbmV3UG9zdFwiO1xyXG5cclxuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuXHJcbmV4cG9ydCB0eXBlIEluaXRpYWxTdGF0ZVR5cGUgPSB7XHJcbiAgbG9hZGluZzogYm9vbGVhbjtcclxuICBpc1N1Y2Nlc3NlZDogYm9vbGVhbjtcclxuICBlcnJvcjogYm9vbGVhbjtcclxufTtcclxuXHJcbnR5cGUgQWN0aW9uUGF5bG9hZFR5cGUgPSB7XHJcbiAgZGF0YT86IERhdGFUeXBlO1xyXG4gIG5ld1Bvc3RSZWR1Y2VyPzogSW5pdGlhbFN0YXRlVHlwZTtcclxufTtcclxuXHJcbnR5cGUgQWN0aW9uVHlwZSA9IHtcclxuICB0eXBlOlxyXG4gICAgfCB0eXBlb2YgTkVXX1BPU1RfUFVTSFxyXG4gICAgfCB0eXBlb2YgSFlEUkFURVxyXG4gICAgfCB0eXBlb2YgU1VDQ0VTU19QT1NUX1BVU0hcclxuICAgIHwgdHlwZW9mIEVSUk9SX1BPU1RfUFVTSDtcclxuICBwYXlsb2FkPzogQWN0aW9uUGF5bG9hZFR5cGU7XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IEluaXRpYWxTdGF0ZVR5cGUgPSB7XHJcbiAgbG9hZGluZzogZmFsc2UsXHJcbiAgaXNTdWNjZXNzZWQ6IGZhbHNlLFxyXG4gIGVycm9yOiBmYWxzZSxcclxufTtcclxuXHJcbmNvbnN0IG5ld1Bvc3RSZWR1Y2VyID0gKFxyXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxyXG4gIGFjdGlvbjogQWN0aW9uVHlwZVxyXG4pOiBJbml0aWFsU3RhdGVUeXBlID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiX19ORVhUX1JFRFVYX1dSQVBQRVJfSFlEUkFURV9fXCI6IHtcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkLm5ld1Bvc3RSZWR1Y2VyIH07XHJcbiAgICB9XHJcbiAgICBjYXNlIE5FV19QT1NUX1BVU0g6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlIH07XHJcbiAgICBjYXNlIFNVQ0NFU1NfUE9TVF9QVVNIOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIGlzU3VjY2Vzc2VkOiB0cnVlIH07XHJcbiAgICBjYXNlIEVSUk9SX1BPU1RfUFVTSDpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogdHJ1ZSB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXdQb3N0UmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==