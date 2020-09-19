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
  var onSubmit = function onSubmit(_ref) {
    var email = _ref.email,
        password = _ref.password;
  };

  return __jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, function (register, errors) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      name: "header",
      label: "Post header",
      placeholder: "enter post header",
      errors: errors,
      component: Input,
      register: register,
      validator: validators.header,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
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
        lineNumber: 30,
        columnNumber: 11
      }
    }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: "submit",
      label: "Add",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9OZXdQb3N0L05ld1Bvc3QudHN4Il0sIm5hbWVzIjpbInZhbGlkYXRvcnMiLCJoZWFkZXIiLCJyZXF1aXJlZCIsInRleHQiLCJOZXdQb3N0Iiwib25TdWJtaXQiLCJlbWFpbCIsInBhc3N3b3JkIiwicmVnaXN0ZXIiLCJlcnJvcnMiLCJJbnB1dCIsIlRleHRhcmVhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHO0FBQ2pCQyxRQUFNLEVBQUU7QUFDTkMsWUFBUSxFQUFFO0FBREosR0FEUztBQUlqQkMsTUFBSSxFQUFFO0FBQ0pELFlBQVEsRUFBRTtBQUROO0FBSlcsQ0FBbkI7O0FBU0EsSUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNwQixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUF5QjtBQUFBLFFBQXRCQyxLQUFzQixRQUF0QkEsS0FBc0I7QUFBQSxRQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFBRSxHQUE1Qzs7QUFDQSxTQUNFLE1BQUMsd0RBQUQ7QUFBTSxZQUFRLEVBQUVGLFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxVQUFDRyxRQUFELEVBQVdDLE1BQVg7QUFBQSxXQUNDLG1FQUNFLE1BQUMsc0RBQUQ7QUFDRSxVQUFJLEVBQUMsUUFEUDtBQUVFLFdBQUssRUFBQyxhQUZSO0FBR0UsaUJBQVcsRUFBQyxtQkFIZDtBQUlFLFlBQU0sRUFBRUEsTUFKVjtBQUtFLGVBQVMsRUFBRUMsS0FMYjtBQU1FLGNBQVEsRUFBRUYsUUFOWjtBQU9FLGVBQVMsRUFBRVIsVUFBVSxDQUFDQyxNQVB4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFVRSxNQUFDLHNEQUFEO0FBQ0UsVUFBSSxFQUFDLE1BRFA7QUFFRSxXQUFLLEVBQUMsTUFGUjtBQUdFLGlCQUFXLEVBQUMsWUFIZDtBQUlFLFlBQU0sRUFBRVEsTUFKVjtBQUtFLGVBQVMsRUFBRUUseURBTGI7QUFNRSxjQUFRLEVBQUVILFFBTlo7QUFPRSxlQUFTLEVBQUVSLFVBQVUsQ0FBQ0csSUFQeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVZGLEVBbUJFLE1BQUMsMERBQUQ7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixXQUFLLEVBQUMsS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQW5CRixDQUREO0FBQUEsR0FESCxDQURGO0FBMkJELENBN0JEOztLQUFNQyxPO0FBK0JTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9uZXcuZDY3Yzg3ZDk5OTA5YWQ0MDcxZTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBGb3JtLCB7IEZpZWxkLCBUZXh0YXJlYSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvcm1cIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CdXR0b25cIjtcclxuXHJcbmNvbnN0IHZhbGlkYXRvcnMgPSB7XHJcbiAgaGVhZGVyOiB7XHJcbiAgICByZXF1aXJlZDogXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkXCIsXHJcbiAgfSxcclxuICB0ZXh0OiB7XHJcbiAgICByZXF1aXJlZDogXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IE5ld1Bvc3QgPSAoKSA9PiB7XHJcbiAgY29uc3Qgb25TdWJtaXQgPSAoeyBlbWFpbCwgcGFzc3dvcmQgfSkgPT4ge307XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgIHsocmVnaXN0ZXIsIGVycm9ycykgPT4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgbmFtZT1cImhlYWRlclwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiUG9zdCBoZWFkZXJcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVudGVyIHBvc3QgaGVhZGVyXCJcclxuICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnN9XHJcbiAgICAgICAgICAgIGNvbXBvbmVudD17SW5wdXR9XHJcbiAgICAgICAgICAgIHJlZ2lzdGVyPXtyZWdpc3Rlcn1cclxuICAgICAgICAgICAgdmFsaWRhdG9yPXt2YWxpZGF0b3JzLmhlYWRlcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgbmFtZT1cInRleHRcIlxyXG4gICAgICAgICAgICBsYWJlbD1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVudGVyIHRleHRcIlxyXG4gICAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cclxuICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0YXJlYX1cclxuICAgICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxyXG4gICAgICAgICAgICB2YWxpZGF0b3I9e3ZhbGlkYXRvcnMudGV4dH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBsYWJlbD1cIkFkZFwiIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L0Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld1Bvc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=