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

  var onSubmit = function onSubmit(data) {
    // postNewPostAPI(data).then((r) => console.log(r));
    newPostPush(data);
    console.log(data);
  };

  return __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_5__["NewPostContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, loading && __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 19
    }
  }, "Loading..."), __jsx(_components_form__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9OZXdQb3N0L05ld1Bvc3QudHN4Il0sIm5hbWVzIjpbInZhbGlkYXRvcnMiLCJ0aXRsZSIsInJlcXVpcmVkIiwidGV4dCIsIk5ld1Bvc3QiLCJsb2FkaW5nIiwiZXJyb3IiLCJpc1N1Y2Nlc3NlZCIsIm5ld1Bvc3RQdXNoIiwib25TdWJtaXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlZ2lzdGVyIiwiZXJyb3JzIiwiSW5wdXQiLCJUZXh0YXJlYSIsImNvbm5lY3QiLCJzdGF0ZSIsIm5ld1Bvc3RSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBRUEsSUFBTUEsVUFBVSxHQUFHO0FBQ2pCQyxPQUFLLEVBQUU7QUFDTEMsWUFBUSxFQUFFO0FBREwsR0FEVTtBQUlqQkMsTUFBSSxFQUFFO0FBQ0pELFlBQVEsRUFBRTtBQUROO0FBSlcsQ0FBbkI7O0FBU0EsSUFBTUUsT0FBbUMsR0FBRyxTQUF0Q0EsT0FBc0MsT0FLdEM7QUFBQSxNQUpKQyxPQUlJLFFBSkpBLE9BSUk7QUFBQSxNQUhKQyxLQUdJLFFBSEpBLEtBR0k7QUFBQSxNQUZKQyxXQUVJLFFBRkpBLFdBRUk7QUFBQSxNQURKQyxXQUNJLFFBREpBLFdBQ0k7O0FBQ0osTUFBTUMsUUFBdUMsR0FBRyxTQUExQ0EsUUFBMEMsQ0FBQ0MsSUFBRCxFQUFVO0FBQ3hEO0FBQ0FGLGVBQVcsQ0FBQ0UsSUFBRCxDQUFYO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0QsR0FKRDs7QUFLQSxTQUNFLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTCxPQUFPLElBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEZCxFQUVFLE1BQUMsd0RBQUQ7QUFBTSxZQUFRLEVBQUVJLFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxVQUFDSSxRQUFELEVBQVdDLE1BQVg7QUFBQSxXQUNDLG1FQUNFLE1BQUMsc0RBQUQ7QUFDRSxVQUFJLEVBQUMsT0FEUDtBQUVFLFdBQUssRUFBQyxZQUZSO0FBR0UsaUJBQVcsRUFBQyxrQkFIZDtBQUlFLFlBQU0sRUFBRUEsTUFKVjtBQUtFLGVBQVMsRUFBRUMsc0RBTGI7QUFNRSxjQUFRLEVBQUVGLFFBTlo7QUFPRSxlQUFTLEVBQUViLFVBQVUsQ0FBQ0MsS0FQeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBVUUsTUFBQyxzREFBRDtBQUNFLFVBQUksRUFBQyxNQURQO0FBRUUsV0FBSyxFQUFDLE1BRlI7QUFHRSxpQkFBVyxFQUFDLFlBSGQ7QUFJRSxZQUFNLEVBQUVhLE1BSlY7QUFLRSxlQUFTLEVBQUVFLHlEQUxiO0FBTUUsY0FBUSxFQUFFSCxRQU5aO0FBT0UsZUFBUyxFQUFFYixVQUFVLENBQUNHLElBUHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFWRixFQW1CRSxNQUFDLDBEQUFEO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBc0IsV0FBSyxFQUFDLEtBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFuQkYsQ0FERDtBQUFBLEdBREgsQ0FGRixDQURGO0FBOEJELENBekNEOztLQUFNQyxPO0FBMkNTYSwwSEFBTyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLGNBQWpCO0FBQUEsQ0FBRCxFQUFrQztBQUFFWCxhQUFXLEVBQVhBLGtFQUFXQTtBQUFiLENBQWxDLENBQVAsQ0FDYkosT0FEYSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL25ldy4wZmEyYWNiMjhiMTQ5OTc5ZDU3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTdWJtaXRIYW5kbGVyIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQgeyBuZXdQb3N0UHVzaCB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL25ld1Bvc3RcIjtcclxuXHJcbmltcG9ydCBGb3JtLCB7IEZpZWxkLCBJbnB1dCwgVGV4dGFyZWEgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mb3JtXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnV0dG9uXCI7XHJcblxyXG5pbXBvcnQgeyBOZXdQb3N0UHJvcHNUeXBlLCBGb3JtVmFsdWVzVHlwZSB9IGZyb20gXCIuL3R5cGVzXCI7XHJcbmltcG9ydCB7IE5ld1Bvc3RDb250YWluZXIgfSBmcm9tIFwiLi9zdHlsZWRDb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCB2YWxpZGF0b3JzID0ge1xyXG4gIHRpdGxlOiB7XHJcbiAgICByZXF1aXJlZDogXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkXCIsXHJcbiAgfSxcclxuICB0ZXh0OiB7XHJcbiAgICByZXF1aXJlZDogXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IE5ld1Bvc3Q6IFJlYWN0LkZDPE5ld1Bvc3RQcm9wc1R5cGU+ID0gKHtcclxuICBsb2FkaW5nLFxyXG4gIGVycm9yLFxyXG4gIGlzU3VjY2Vzc2VkLFxyXG4gIG5ld1Bvc3RQdXNoLFxyXG59KSA9PiB7XHJcbiAgY29uc3Qgb25TdWJtaXQ6IFN1Ym1pdEhhbmRsZXI8Rm9ybVZhbHVlc1R5cGU+ID0gKGRhdGEpID0+IHtcclxuICAgIC8vIHBvc3ROZXdQb3N0QVBJKGRhdGEpLnRoZW4oKHIpID0+IGNvbnNvbGUubG9nKHIpKTtcclxuICAgIG5ld1Bvc3RQdXNoKGRhdGEpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPE5ld1Bvc3RDb250YWluZXI+XHJcbiAgICAgIHtsb2FkaW5nICYmIDxwPkxvYWRpbmcuLi48L3A+fVxyXG4gICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgIHsocmVnaXN0ZXIsIGVycm9ycykgPT4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIlBvc3QgdGl0bGVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW50ZXIgcG9zdCB0aXRsZVwiXHJcbiAgICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnN9XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtJbnB1dH1cclxuICAgICAgICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXJ9XHJcbiAgICAgICAgICAgICAgdmFsaWRhdG9yPXt2YWxpZGF0b3JzLnRpdGxlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICBuYW1lPVwiYm9keVwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVudGVyIHRleHRcIlxyXG4gICAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dGFyZWF9XHJcbiAgICAgICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxyXG4gICAgICAgICAgICAgIHZhbGlkYXRvcj17dmFsaWRhdG9ycy50ZXh0fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBsYWJlbD1cIkFkZFwiIC8+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L05ld1Bvc3RDb250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKHN0YXRlKSA9PiBzdGF0ZS5uZXdQb3N0UmVkdWNlciwgeyBuZXdQb3N0UHVzaCB9KShcclxuICBOZXdQb3N0XHJcbik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=