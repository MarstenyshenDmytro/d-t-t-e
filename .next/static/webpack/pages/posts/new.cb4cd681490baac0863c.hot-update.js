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
/* harmony import */ var _InfoMsg_InfoMsg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InfoMsg/InfoMsg */ "./containers/NewPost/InfoMsg/InfoMsg.tsx");
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styledComponents */ "./containers/NewPost/styledComponents.ts");
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
    newPostPush(data);
    e.target.reset();
  };

  return __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_6__["NewPostContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
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
        lineNumber: 38,
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
        lineNumber: 47,
        columnNumber: 13
      }
    }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: "submit",
      label: "Add",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }
    }));
  }), __jsx(_InfoMsg_InfoMsg__WEBPACK_IMPORTED_MODULE_5__["default"], {
    loading: loading,
    error: error,
    isSuccessed: isSuccessed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9OZXdQb3N0L05ld1Bvc3QudHN4Il0sIm5hbWVzIjpbInZhbGlkYXRvcnMiLCJ0aXRsZSIsInJlcXVpcmVkIiwidGV4dCIsIk5ld1Bvc3QiLCJsb2FkaW5nIiwiZXJyb3IiLCJpc1N1Y2Nlc3NlZCIsIm5ld1Bvc3RQdXNoIiwib25TdWJtaXQiLCJkYXRhIiwiZSIsInRhcmdldCIsInJlc2V0IiwicmVnaXN0ZXIiLCJlcnJvcnMiLCJJbnB1dCIsIlRleHRhcmVhIiwiY29ubmVjdCIsInN0YXRlIiwibmV3UG9zdFJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFFQSxJQUFNQSxVQUFVLEdBQUc7QUFDakJDLE9BQUssRUFBRTtBQUNMQyxZQUFRLEVBQUU7QUFETCxHQURVO0FBSWpCQyxNQUFJLEVBQUU7QUFDSkQsWUFBUSxFQUFFO0FBRE47QUFKVyxDQUFuQjs7QUFTQSxJQUFNRSxPQUFtQyxHQUFHLFNBQXRDQSxPQUFzQyxPQUt0QztBQUFBLE1BSkpDLE9BSUksUUFKSkEsT0FJSTtBQUFBLE1BSEpDLEtBR0ksUUFISkEsS0FHSTtBQUFBLE1BRkpDLFdBRUksUUFGSkEsV0FFSTtBQUFBLE1BREpDLFdBQ0ksUUFESkEsV0FDSTs7QUFDSixNQUFNQyxRQUF1QyxHQUFHLFNBQTFDQSxRQUEwQyxDQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBYTtBQUMzREgsZUFBVyxDQUFDRSxJQUFELENBQVg7QUFDQUMsS0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVQ7QUFDRCxHQUhEOztBQUlBLFNBQ0UsTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUFNLFlBQVEsRUFBRUosUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLFVBQUNLLFFBQUQsRUFBV0MsTUFBWDtBQUFBLFdBQ0MsbUVBQ0UsTUFBQyxzREFBRDtBQUNFLFVBQUksRUFBQyxPQURQO0FBRUUsV0FBSyxFQUFDLFlBRlI7QUFHRSxpQkFBVyxFQUFDLGtCQUhkO0FBSUUsWUFBTSxFQUFFQSxNQUpWO0FBS0UsZUFBUyxFQUFFQyxzREFMYjtBQU1FLGNBQVEsRUFBRUYsUUFOWjtBQU9FLGVBQVMsRUFBRWQsVUFBVSxDQUFDQyxLQVB4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFVRSxNQUFDLHNEQUFEO0FBQ0UsVUFBSSxFQUFDLE1BRFA7QUFFRSxXQUFLLEVBQUMsTUFGUjtBQUdFLGlCQUFXLEVBQUMsWUFIZDtBQUlFLFlBQU0sRUFBRWMsTUFKVjtBQUtFLGVBQVMsRUFBRUUseURBTGI7QUFNRSxjQUFRLEVBQUVILFFBTlo7QUFPRSxlQUFTLEVBQUVkLFVBQVUsQ0FBQ0csSUFQeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVZGLEVBbUJFLE1BQUMsMERBQUQ7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixXQUFLLEVBQUMsS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQW5CRixDQUREO0FBQUEsR0FESCxDQURGLEVBMEJFLE1BQUMsd0RBQUQ7QUFBUyxXQUFPLEVBQUVFLE9BQWxCO0FBQTJCLFNBQUssRUFBRUMsS0FBbEM7QUFBeUMsZUFBVyxFQUFFQyxXQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBMUJGLENBREY7QUE4QkQsQ0F4Q0Q7O0tBQU1ILE87QUEwQ1NjLDBIQUFPLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsY0FBakI7QUFBQSxDQUFELEVBQWtDO0FBQUVaLGFBQVcsRUFBWEEsa0VBQVdBO0FBQWIsQ0FBbEMsQ0FBUCxDQUNiSixPQURhLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvbmV3LmNiNGNkNjgxNDkwYmFhYzA4NjNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFN1Ym1pdEhhbmRsZXIgfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCB7IG5ld1Bvc3RQdXNoIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvbmV3UG9zdFwiO1xyXG5cclxuaW1wb3J0IEZvcm0sIHsgRmllbGQsIElucHV0LCBUZXh0YXJlYSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvcm1cIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CdXR0b25cIjtcclxuaW1wb3J0IEluZm9Nc2cgZnJvbSBcIi4vSW5mb01zZy9JbmZvTXNnXCI7XHJcblxyXG5pbXBvcnQgeyBOZXdQb3N0UHJvcHNUeXBlLCBGb3JtVmFsdWVzVHlwZSB9IGZyb20gXCIuL3R5cGVzXCI7XHJcbmltcG9ydCB7IE5ld1Bvc3RDb250YWluZXIgfSBmcm9tIFwiLi9zdHlsZWRDb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCB2YWxpZGF0b3JzID0ge1xyXG4gIHRpdGxlOiB7XHJcbiAgICByZXF1aXJlZDogXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkXCIsXHJcbiAgfSxcclxuICB0ZXh0OiB7XHJcbiAgICByZXF1aXJlZDogXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IE5ld1Bvc3Q6IFJlYWN0LkZDPE5ld1Bvc3RQcm9wc1R5cGU+ID0gKHtcclxuICBsb2FkaW5nLFxyXG4gIGVycm9yLFxyXG4gIGlzU3VjY2Vzc2VkLFxyXG4gIG5ld1Bvc3RQdXNoLFxyXG59KSA9PiB7XHJcbiAgY29uc3Qgb25TdWJtaXQ6IFN1Ym1pdEhhbmRsZXI8Rm9ybVZhbHVlc1R5cGU+ID0gKGRhdGEsIGUpID0+IHtcclxuICAgIG5ld1Bvc3RQdXNoKGRhdGEpO1xyXG4gICAgZS50YXJnZXQucmVzZXQoKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8TmV3UG9zdENvbnRhaW5lcj5cclxuICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICB7KHJlZ2lzdGVyLCBlcnJvcnMpID0+IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJQb3N0IHRpdGxlXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVudGVyIHBvc3QgdGl0bGVcIlxyXG4gICAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17SW5wdXR9XHJcbiAgICAgICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxyXG4gICAgICAgICAgICAgIHZhbGlkYXRvcj17dmFsaWRhdG9ycy50aXRsZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgbmFtZT1cImJvZHlcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbnRlciB0ZXh0XCJcclxuICAgICAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cclxuICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRhcmVhfVxyXG4gICAgICAgICAgICAgIHJlZ2lzdGVyPXtyZWdpc3Rlcn1cclxuICAgICAgICAgICAgICB2YWxpZGF0b3I9e3ZhbGlkYXRvcnMudGV4dH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgbGFiZWw9XCJBZGRcIiAvPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgICA8SW5mb01zZyBsb2FkaW5nPXtsb2FkaW5nfSBlcnJvcj17ZXJyb3J9IGlzU3VjY2Vzc2VkPXtpc1N1Y2Nlc3NlZH0gLz5cclxuICAgIDwvTmV3UG9zdENvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RhdGUpID0+IHN0YXRlLm5ld1Bvc3RSZWR1Y2VyLCB7IG5ld1Bvc3RQdXNoIH0pKFxyXG4gIE5ld1Bvc3RcclxuKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==