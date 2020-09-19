webpackHotUpdate_N_E("pages/posts/new",{

/***/ "./containers/NewPost/NewPost.tsx":
/*!****************************************!*\
  !*** ./containers/NewPost/NewPost.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/form */ "./components/form/index.ts");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Button */ "./components/Button/index.ts");
var _this = undefined,
    _jsxFileName = "D:\\Dima\\d-t-t-e\\containers\\NewPost\\NewPost.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var validators = {
  header: {
    required: "This field is required"
  },
  text: {
    required: "This field is required"
  }
};

var NewPost = function NewPost() {
  var onSubmit = function onSubmit(data) {
    console.log(data);
  };

  return __jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, function (register, errors) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      name: "header",
      label: "Post header",
      placeholder: "enter post header",
      errors: errors,
      component: _components_form__WEBPACK_IMPORTED_MODULE_1__["Input"],
      register: register,
      validator: validators.header,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }
    }), __jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      name: "text",
      label: "text",
      placeholder: "enter text",
      errors: errors,
      component: _components_form__WEBPACK_IMPORTED_MODULE_1__["Textarea"],
      register: register,
      validator: validators.text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }
    }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: "submit",
      label: "Add",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }
    }));
  });
};

_c = NewPost;
/* harmony default export */ __webpack_exports__["default"] = (NewPost);

var _c;

$RefreshReg$(_c, "NewPost");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9OZXdQb3N0L05ld1Bvc3QudHN4Il0sIm5hbWVzIjpbInZhbGlkYXRvcnMiLCJoZWFkZXIiLCJyZXF1aXJlZCIsInRleHQiLCJOZXdQb3N0Iiwib25TdWJtaXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlZ2lzdGVyIiwiZXJyb3JzIiwiSW5wdXQiLCJUZXh0YXJlYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBRztBQUNqQkMsUUFBTSxFQUFFO0FBQ05DLFlBQVEsRUFBRTtBQURKLEdBRFM7QUFJakJDLE1BQUksRUFBRTtBQUNKRCxZQUFRLEVBQUU7QUFETjtBQUpXLENBQW5COztBQVNBLElBQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDcEIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRCxFQUFVO0FBQ3pCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNELEdBRkQ7O0FBR0EsU0FDRSxNQUFDLHdEQUFEO0FBQU0sWUFBUSxFQUFFRCxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csVUFBQ0ksUUFBRCxFQUFXQyxNQUFYO0FBQUEsV0FDQyxtRUFDRSxNQUFDLHNEQUFEO0FBQ0UsVUFBSSxFQUFDLFFBRFA7QUFFRSxXQUFLLEVBQUMsYUFGUjtBQUdFLGlCQUFXLEVBQUMsbUJBSGQ7QUFJRSxZQUFNLEVBQUVBLE1BSlY7QUFLRSxlQUFTLEVBQUVDLHNEQUxiO0FBTUUsY0FBUSxFQUFFRixRQU5aO0FBT0UsZUFBUyxFQUFFVCxVQUFVLENBQUNDLE1BUHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQVVFLE1BQUMsc0RBQUQ7QUFDRSxVQUFJLEVBQUMsTUFEUDtBQUVFLFdBQUssRUFBQyxNQUZSO0FBR0UsaUJBQVcsRUFBQyxZQUhkO0FBSUUsWUFBTSxFQUFFUyxNQUpWO0FBS0UsZUFBUyxFQUFFRSx5REFMYjtBQU1FLGNBQVEsRUFBRUgsUUFOWjtBQU9FLGVBQVMsRUFBRVQsVUFBVSxDQUFDRyxJQVB4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVkYsRUFtQkUsTUFBQywwREFBRDtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQXNCLFdBQUssRUFBQyxLQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BbkJGLENBREQ7QUFBQSxHQURILENBREY7QUEyQkQsQ0EvQkQ7O0tBQU1DLE87QUFpQ1NBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL25ldy44ZTdjMjY1N2VjYWE1YjEyYTI5Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IEZvcm0sIHsgRmllbGQsIElucHV0LCBUZXh0YXJlYSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvcm1cIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CdXR0b25cIjtcclxuXHJcbmNvbnN0IHZhbGlkYXRvcnMgPSB7XHJcbiAgaGVhZGVyOiB7XHJcbiAgICByZXF1aXJlZDogXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkXCIsXHJcbiAgfSxcclxuICB0ZXh0OiB7XHJcbiAgICByZXF1aXJlZDogXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IE5ld1Bvc3QgPSAoKSA9PiB7XHJcbiAgY29uc3Qgb25TdWJtaXQgPSAoZGF0YSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgeyhyZWdpc3RlciwgZXJyb3JzKSA9PiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICBuYW1lPVwiaGVhZGVyXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJQb3N0IGhlYWRlclwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW50ZXIgcG9zdCBoZWFkZXJcIlxyXG4gICAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cclxuICAgICAgICAgICAgY29tcG9uZW50PXtJbnB1dH1cclxuICAgICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxyXG4gICAgICAgICAgICB2YWxpZGF0b3I9e3ZhbGlkYXRvcnMuaGVhZGVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICBuYW1lPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW50ZXIgdGV4dFwiXHJcbiAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxyXG4gICAgICAgICAgICBjb21wb25lbnQ9e1RleHRhcmVhfVxyXG4gICAgICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXJ9XHJcbiAgICAgICAgICAgIHZhbGlkYXRvcj17dmFsaWRhdG9ycy50ZXh0fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGxhYmVsPVwiQWRkXCIgLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3UG9zdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==