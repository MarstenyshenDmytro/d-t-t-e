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
/* harmony import */ var _api_postNewPostAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/postNewPostAPI */ "./api/postNewPostAPI.ts");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/form */ "./components/form/index.ts");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Button */ "./components/Button/index.ts");
var _this = undefined,
    _jsxFileName = "D:\\Dima\\d-t-t-e\\containers\\NewPost\\NewPost.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var validators = {
  title: {
    required: "This field is required"
  },
  text: {
    required: "This field is required"
  }
};

var NewPost = function NewPost() {
  var onSubmit = function onSubmit(data) {
    Object(_api_postNewPostAPI__WEBPACK_IMPORTED_MODULE_1__["postNewPostAPI"])(data).then(function (r) {
      return console.log(r);
    });
    console.log(data);
  };

  return __jsx(_components_form__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, function (register, errors) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "title",
      label: "Post title",
      placeholder: "enter post title",
      errors: errors,
      component: _components_form__WEBPACK_IMPORTED_MODULE_2__["Input"],
      register: register,
      validator: validators.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }
    }), __jsx(_components_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "body",
      label: "text",
      placeholder: "enter text",
      errors: errors,
      component: _components_form__WEBPACK_IMPORTED_MODULE_2__["Textarea"],
      register: register,
      validator: validators.text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }
    }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: "submit",
      label: "Add",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9OZXdQb3N0L05ld1Bvc3QudHN4Il0sIm5hbWVzIjpbInZhbGlkYXRvcnMiLCJ0aXRsZSIsInJlcXVpcmVkIiwidGV4dCIsIk5ld1Bvc3QiLCJvblN1Ym1pdCIsImRhdGEiLCJwb3N0TmV3UG9zdEFQSSIsInRoZW4iLCJyIiwiY29uc29sZSIsImxvZyIsInJlZ2lzdGVyIiwiZXJyb3JzIiwiSW5wdXQiLCJUZXh0YXJlYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBRztBQUNqQkMsT0FBSyxFQUFFO0FBQ0xDLFlBQVEsRUFBRTtBQURMLEdBRFU7QUFJakJDLE1BQUksRUFBRTtBQUNKRCxZQUFRLEVBQUU7QUFETjtBQUpXLENBQW5COztBQVNBLElBQU1FLE9BQWlCLEdBQUcsU0FBcEJBLE9BQW9CLEdBQU07QUFDOUIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRCxFQUFVO0FBQ3pCQyw4RUFBYyxDQUFDRCxJQUFELENBQWQsQ0FBcUJFLElBQXJCLENBQTBCLFVBQUNDLENBQUQ7QUFBQSxhQUFPQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWixDQUFQO0FBQUEsS0FBMUI7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlMLElBQVo7QUFDRCxHQUhEOztBQUlBLFNBQ0UsTUFBQyx3REFBRDtBQUFNLFlBQVEsRUFBRUQsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLFVBQUNPLFFBQUQsRUFBV0MsTUFBWDtBQUFBLFdBQ0MsbUVBQ0UsTUFBQyxzREFBRDtBQUNFLFVBQUksRUFBQyxPQURQO0FBRUUsV0FBSyxFQUFDLFlBRlI7QUFHRSxpQkFBVyxFQUFDLGtCQUhkO0FBSUUsWUFBTSxFQUFFQSxNQUpWO0FBS0UsZUFBUyxFQUFFQyxzREFMYjtBQU1FLGNBQVEsRUFBRUYsUUFOWjtBQU9FLGVBQVMsRUFBRVosVUFBVSxDQUFDQyxLQVB4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFVRSxNQUFDLHNEQUFEO0FBQ0UsVUFBSSxFQUFDLE1BRFA7QUFFRSxXQUFLLEVBQUMsTUFGUjtBQUdFLGlCQUFXLEVBQUMsWUFIZDtBQUlFLFlBQU0sRUFBRVksTUFKVjtBQUtFLGVBQVMsRUFBRUUseURBTGI7QUFNRSxjQUFRLEVBQUVILFFBTlo7QUFPRSxlQUFTLEVBQUVaLFVBQVUsQ0FBQ0csSUFQeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVZGLEVBbUJFLE1BQUMsMERBQUQ7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixXQUFLLEVBQUMsS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQW5CRixDQUREO0FBQUEsR0FESCxDQURGO0FBMkJELENBaENEOztLQUFNQyxPO0FBa0NTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9uZXcuNDhmNzU4N2QyNTQzNDhjMmIyMDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IHBvc3ROZXdQb3N0QVBJIH0gZnJvbSBcIi4uLy4uL2FwaS9wb3N0TmV3UG9zdEFQSVwiO1xyXG5cclxuaW1wb3J0IEZvcm0sIHsgRmllbGQsIElucHV0LCBUZXh0YXJlYSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvcm1cIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CdXR0b25cIjtcclxuXHJcbmNvbnN0IHZhbGlkYXRvcnMgPSB7XHJcbiAgdGl0bGU6IHtcclxuICAgIHJlcXVpcmVkOiBcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWRcIixcclxuICB9LFxyXG4gIHRleHQ6IHtcclxuICAgIHJlcXVpcmVkOiBcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWRcIixcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgTmV3UG9zdDogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3Qgb25TdWJtaXQgPSAoZGF0YSkgPT4ge1xyXG4gICAgcG9zdE5ld1Bvc3RBUEkoZGF0YSkudGhlbigocikgPT4gY29uc29sZS5sb2cocikpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgeyhyZWdpc3RlciwgZXJyb3JzKSA9PiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIlBvc3QgdGl0bGVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVudGVyIHBvc3QgdGl0bGVcIlxyXG4gICAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cclxuICAgICAgICAgICAgY29tcG9uZW50PXtJbnB1dH1cclxuICAgICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxyXG4gICAgICAgICAgICB2YWxpZGF0b3I9e3ZhbGlkYXRvcnMudGl0bGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgIG5hbWU9XCJib2R5XCJcclxuICAgICAgICAgICAgbGFiZWw9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbnRlciB0ZXh0XCJcclxuICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnN9XHJcbiAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dGFyZWF9XHJcbiAgICAgICAgICAgIHJlZ2lzdGVyPXtyZWdpc3Rlcn1cclxuICAgICAgICAgICAgdmFsaWRhdG9yPXt2YWxpZGF0b3JzLnRleHR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgbGFiZWw9XCJBZGRcIiAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdQb3N0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9