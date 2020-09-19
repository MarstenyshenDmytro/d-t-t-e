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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_newPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/actions/newPost */ "./redux/actions/newPost.ts");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/form */ "./components/form/index.ts");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Button */ "./components/Button/index.ts");
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styledComponents */ "./containers/NewPost/styledComponents.ts");
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

var NewPost = function NewPost(_ref) {
  var loading = _ref.loading,
      error = _ref.error,
      isSuccessed = _ref.isSuccessed,
      newPostPush = _ref.newPostPush;

  var onSubmit = function onSubmit(data, e) {
    // postNewPostAPI(data).then((r) => console.log(r));
    newPostPush(data);
    e.target.reset();
    console.log(data);
  };

  return __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_5__["NewPostContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, function (register, errors) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      name: "title",
      label: "Post title",
      placeholder: "enter post title",
      errors: errors,
      component: _components_form__WEBPACK_IMPORTED_MODULE_3__["Input"],
      register: register,
      validator: validators.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    }), __jsx(_components_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      name: "body",
      label: "text",
      placeholder: "enter text",
      errors: errors,
      component: _components_form__WEBPACK_IMPORTED_MODULE_3__["Textarea"],
      register: register,
      validator: validators.text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }
    }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: "submit",
      label: "Add",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }
    }));
  }), loading && __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 19
    }
  }, "Loading..."));
};

_c = NewPost;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return state.newPostReducer;
}, {
  newPostPush: _redux_actions_newPost__WEBPACK_IMPORTED_MODULE_2__["newPostPush"]
})(NewPost));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9OZXdQb3N0L05ld1Bvc3QudHN4Il0sIm5hbWVzIjpbInZhbGlkYXRvcnMiLCJ0aXRsZSIsInJlcXVpcmVkIiwidGV4dCIsIk5ld1Bvc3QiLCJsb2FkaW5nIiwiZXJyb3IiLCJpc1N1Y2Nlc3NlZCIsIm5ld1Bvc3RQdXNoIiwib25TdWJtaXQiLCJkYXRhIiwiZSIsInRhcmdldCIsInJlc2V0IiwiY29uc29sZSIsImxvZyIsInJlZ2lzdGVyIiwiZXJyb3JzIiwiSW5wdXQiLCJUZXh0YXJlYSIsImNvbm5lY3QiLCJzdGF0ZSIsIm5ld1Bvc3RSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBRUEsSUFBTUEsVUFBVSxHQUFHO0FBQ2pCQyxPQUFLLEVBQUU7QUFDTEMsWUFBUSxFQUFFO0FBREwsR0FEVTtBQUlqQkMsTUFBSSxFQUFFO0FBQ0pELFlBQVEsRUFBRTtBQUROO0FBSlcsQ0FBbkI7O0FBU0EsSUFBTUUsT0FBbUMsR0FBRyxTQUF0Q0EsT0FBc0MsT0FLdEM7QUFBQSxNQUpKQyxPQUlJLFFBSkpBLE9BSUk7QUFBQSxNQUhKQyxLQUdJLFFBSEpBLEtBR0k7QUFBQSxNQUZKQyxXQUVJLFFBRkpBLFdBRUk7QUFBQSxNQURKQyxXQUNJLFFBREpBLFdBQ0k7O0FBQ0osTUFBTUMsUUFBdUMsR0FBRyxTQUExQ0EsUUFBMEMsQ0FBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDM0Q7QUFDQUgsZUFBVyxDQUFDRSxJQUFELENBQVg7QUFDQUMsS0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVQ7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlMLElBQVo7QUFDRCxHQUxEOztBQU1BLFNBQ0UsTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUFNLFlBQVEsRUFBRUQsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLFVBQUNPLFFBQUQsRUFBV0MsTUFBWDtBQUFBLFdBQ0MsbUVBQ0UsTUFBQyxzREFBRDtBQUNFLFVBQUksRUFBQyxPQURQO0FBRUUsV0FBSyxFQUFDLFlBRlI7QUFHRSxpQkFBVyxFQUFDLGtCQUhkO0FBSUUsWUFBTSxFQUFFQSxNQUpWO0FBS0UsZUFBUyxFQUFFQyxzREFMYjtBQU1FLGNBQVEsRUFBRUYsUUFOWjtBQU9FLGVBQVMsRUFBRWhCLFVBQVUsQ0FBQ0MsS0FQeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBVUUsTUFBQyxzREFBRDtBQUNFLFVBQUksRUFBQyxNQURQO0FBRUUsV0FBSyxFQUFDLE1BRlI7QUFHRSxpQkFBVyxFQUFDLFlBSGQ7QUFJRSxZQUFNLEVBQUVnQixNQUpWO0FBS0UsZUFBUyxFQUFFRSx5REFMYjtBQU1FLGNBQVEsRUFBRUgsUUFOWjtBQU9FLGVBQVMsRUFBRWhCLFVBQVUsQ0FBQ0csSUFQeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVZGLEVBbUJFLE1BQUMsMERBQUQ7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixXQUFLLEVBQUMsS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQW5CRixDQUREO0FBQUEsR0FESCxDQURGLEVBMEJHRSxPQUFPLElBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkExQmQsQ0FERjtBQThCRCxDQTFDRDs7S0FBTUQsTztBQTRDU2dCLDBIQUFPLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsY0FBakI7QUFBQSxDQUFELEVBQWtDO0FBQUVkLGFBQVcsRUFBWEEsa0VBQVdBO0FBQWIsQ0FBbEMsQ0FBUCxDQUNiSixPQURhLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvbmV3LmI2YWM2YzdlODMwMWExMzMzZTA2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFN1Ym1pdEhhbmRsZXIgfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCB7IG5ld1Bvc3RQdXNoIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvbmV3UG9zdFwiO1xyXG5cclxuaW1wb3J0IEZvcm0sIHsgRmllbGQsIElucHV0LCBUZXh0YXJlYSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvcm1cIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CdXR0b25cIjtcclxuXHJcbmltcG9ydCB7IE5ld1Bvc3RQcm9wc1R5cGUsIEZvcm1WYWx1ZXNUeXBlIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgTmV3UG9zdENvbnRhaW5lciB9IGZyb20gXCIuL3N0eWxlZENvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IHZhbGlkYXRvcnMgPSB7XHJcbiAgdGl0bGU6IHtcclxuICAgIHJlcXVpcmVkOiBcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWRcIixcclxuICB9LFxyXG4gIHRleHQ6IHtcclxuICAgIHJlcXVpcmVkOiBcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWRcIixcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgTmV3UG9zdDogUmVhY3QuRkM8TmV3UG9zdFByb3BzVHlwZT4gPSAoe1xyXG4gIGxvYWRpbmcsXHJcbiAgZXJyb3IsXHJcbiAgaXNTdWNjZXNzZWQsXHJcbiAgbmV3UG9zdFB1c2gsXHJcbn0pID0+IHtcclxuICBjb25zdCBvblN1Ym1pdDogU3VibWl0SGFuZGxlcjxGb3JtVmFsdWVzVHlwZT4gPSAoZGF0YSwgZSkgPT4ge1xyXG4gICAgLy8gcG9zdE5ld1Bvc3RBUEkoZGF0YSkudGhlbigocikgPT4gY29uc29sZS5sb2cocikpO1xyXG4gICAgbmV3UG9zdFB1c2goZGF0YSk7XHJcbiAgICBlLnRhcmdldC5yZXNldCgpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPE5ld1Bvc3RDb250YWluZXI+XHJcbiAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgeyhyZWdpc3RlciwgZXJyb3JzKSA9PiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiUG9zdCB0aXRsZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbnRlciBwb3N0IHRpdGxlXCJcclxuICAgICAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cclxuICAgICAgICAgICAgICBjb21wb25lbnQ9e0lucHV0fVxyXG4gICAgICAgICAgICAgIHJlZ2lzdGVyPXtyZWdpc3Rlcn1cclxuICAgICAgICAgICAgICB2YWxpZGF0b3I9e3ZhbGlkYXRvcnMudGl0bGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJib2R5XCJcclxuICAgICAgICAgICAgICBsYWJlbD1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW50ZXIgdGV4dFwiXHJcbiAgICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnN9XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0YXJlYX1cclxuICAgICAgICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXJ9XHJcbiAgICAgICAgICAgICAgdmFsaWRhdG9yPXt2YWxpZGF0b3JzLnRleHR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGxhYmVsPVwiQWRkXCIgLz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvRm9ybT5cclxuICAgICAge2xvYWRpbmcgJiYgPHA+TG9hZGluZy4uLjwvcD59XHJcbiAgICA8L05ld1Bvc3RDb250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKHN0YXRlKSA9PiBzdGF0ZS5uZXdQb3N0UmVkdWNlciwgeyBuZXdQb3N0UHVzaCB9KShcclxuICBOZXdQb3N0XHJcbik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=