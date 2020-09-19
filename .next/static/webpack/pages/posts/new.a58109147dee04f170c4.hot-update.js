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
    // postNewPostAPI(data).then((r) => console.log(r));
    newPostPush(data);
    e.target.reset();
    console.log(data);
  };

  return __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_6__["NewPostContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
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
        lineNumber: 40,
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
        lineNumber: 49,
        columnNumber: 13
      }
    }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: "submit",
      label: "Add",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }
    }));
  }), __jsx(_InfoMsg_InfoMsg__WEBPACK_IMPORTED_MODULE_5__["default"], {
    loading: loading,
    error: error,
    isSuccesed: isSuccessed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9OZXdQb3N0L05ld1Bvc3QudHN4Il0sIm5hbWVzIjpbInZhbGlkYXRvcnMiLCJ0aXRsZSIsInJlcXVpcmVkIiwidGV4dCIsIk5ld1Bvc3QiLCJsb2FkaW5nIiwiZXJyb3IiLCJpc1N1Y2Nlc3NlZCIsIm5ld1Bvc3RQdXNoIiwib25TdWJtaXQiLCJkYXRhIiwiZSIsInRhcmdldCIsInJlc2V0IiwiY29uc29sZSIsImxvZyIsInJlZ2lzdGVyIiwiZXJyb3JzIiwiSW5wdXQiLCJUZXh0YXJlYSIsImNvbm5lY3QiLCJzdGF0ZSIsIm5ld1Bvc3RSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBRUEsSUFBTUEsVUFBVSxHQUFHO0FBQ2pCQyxPQUFLLEVBQUU7QUFDTEMsWUFBUSxFQUFFO0FBREwsR0FEVTtBQUlqQkMsTUFBSSxFQUFFO0FBQ0pELFlBQVEsRUFBRTtBQUROO0FBSlcsQ0FBbkI7O0FBU0EsSUFBTUUsT0FBbUMsR0FBRyxTQUF0Q0EsT0FBc0MsT0FLdEM7QUFBQSxNQUpKQyxPQUlJLFFBSkpBLE9BSUk7QUFBQSxNQUhKQyxLQUdJLFFBSEpBLEtBR0k7QUFBQSxNQUZKQyxXQUVJLFFBRkpBLFdBRUk7QUFBQSxNQURKQyxXQUNJLFFBREpBLFdBQ0k7O0FBQ0osTUFBTUMsUUFBdUMsR0FBRyxTQUExQ0EsUUFBMEMsQ0FBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDM0Q7QUFDQUgsZUFBVyxDQUFDRSxJQUFELENBQVg7QUFDQUMsS0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVQ7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlMLElBQVo7QUFDRCxHQUxEOztBQU1BLFNBQ0UsTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUFNLFlBQVEsRUFBRUQsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLFVBQUNPLFFBQUQsRUFBV0MsTUFBWDtBQUFBLFdBQ0MsbUVBQ0UsTUFBQyxzREFBRDtBQUNFLFVBQUksRUFBQyxPQURQO0FBRUUsV0FBSyxFQUFDLFlBRlI7QUFHRSxpQkFBVyxFQUFDLGtCQUhkO0FBSUUsWUFBTSxFQUFFQSxNQUpWO0FBS0UsZUFBUyxFQUFFQyxzREFMYjtBQU1FLGNBQVEsRUFBRUYsUUFOWjtBQU9FLGVBQVMsRUFBRWhCLFVBQVUsQ0FBQ0MsS0FQeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBVUUsTUFBQyxzREFBRDtBQUNFLFVBQUksRUFBQyxNQURQO0FBRUUsV0FBSyxFQUFDLE1BRlI7QUFHRSxpQkFBVyxFQUFDLFlBSGQ7QUFJRSxZQUFNLEVBQUVnQixNQUpWO0FBS0UsZUFBUyxFQUFFRSx5REFMYjtBQU1FLGNBQVEsRUFBRUgsUUFOWjtBQU9FLGVBQVMsRUFBRWhCLFVBQVUsQ0FBQ0csSUFQeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVZGLEVBbUJFLE1BQUMsMERBQUQ7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixXQUFLLEVBQUMsS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQW5CRixDQUREO0FBQUEsR0FESCxDQURGLEVBMEJFLE1BQUMsd0RBQUQ7QUFBUyxXQUFPLEVBQUVFLE9BQWxCO0FBQTJCLFNBQUssRUFBRUMsS0FBbEM7QUFBeUMsY0FBVSxFQUFFQyxXQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBMUJGLENBREY7QUE4QkQsQ0ExQ0Q7O0tBQU1ILE87QUE0Q1NnQiwwSEFBTyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLGNBQWpCO0FBQUEsQ0FBRCxFQUFrQztBQUFFZCxhQUFXLEVBQVhBLGtFQUFXQTtBQUFiLENBQWxDLENBQVAsQ0FDYkosT0FEYSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL25ldy5hNTgxMDkxNDdkZWUwNGYxNzBjNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTdWJtaXRIYW5kbGVyIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQgeyBuZXdQb3N0UHVzaCB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL25ld1Bvc3RcIjtcclxuXHJcbmltcG9ydCBGb3JtLCB7IEZpZWxkLCBJbnB1dCwgVGV4dGFyZWEgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mb3JtXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnV0dG9uXCI7XHJcbmltcG9ydCBJbmZvTXNnIGZyb20gXCIuL0luZm9Nc2cvSW5mb01zZ1wiO1xyXG5cclxuaW1wb3J0IHsgTmV3UG9zdFByb3BzVHlwZSwgRm9ybVZhbHVlc1R5cGUgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBOZXdQb3N0Q29udGFpbmVyIH0gZnJvbSBcIi4vc3R5bGVkQ29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgdmFsaWRhdG9ycyA9IHtcclxuICB0aXRsZToge1xyXG4gICAgcmVxdWlyZWQ6IFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZFwiLFxyXG4gIH0sXHJcbiAgdGV4dDoge1xyXG4gICAgcmVxdWlyZWQ6IFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZFwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBOZXdQb3N0OiBSZWFjdC5GQzxOZXdQb3N0UHJvcHNUeXBlPiA9ICh7XHJcbiAgbG9hZGluZyxcclxuICBlcnJvcixcclxuICBpc1N1Y2Nlc3NlZCxcclxuICBuZXdQb3N0UHVzaCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IG9uU3VibWl0OiBTdWJtaXRIYW5kbGVyPEZvcm1WYWx1ZXNUeXBlPiA9IChkYXRhLCBlKSA9PiB7XHJcbiAgICAvLyBwb3N0TmV3UG9zdEFQSShkYXRhKS50aGVuKChyKSA9PiBjb25zb2xlLmxvZyhyKSk7XHJcbiAgICBuZXdQb3N0UHVzaChkYXRhKTtcclxuICAgIGUudGFyZ2V0LnJlc2V0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8TmV3UG9zdENvbnRhaW5lcj5cclxuICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICB7KHJlZ2lzdGVyLCBlcnJvcnMpID0+IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJQb3N0IHRpdGxlXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVudGVyIHBvc3QgdGl0bGVcIlxyXG4gICAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17SW5wdXR9XHJcbiAgICAgICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxyXG4gICAgICAgICAgICAgIHZhbGlkYXRvcj17dmFsaWRhdG9ycy50aXRsZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgbmFtZT1cImJvZHlcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbnRlciB0ZXh0XCJcclxuICAgICAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cclxuICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRhcmVhfVxyXG4gICAgICAgICAgICAgIHJlZ2lzdGVyPXtyZWdpc3Rlcn1cclxuICAgICAgICAgICAgICB2YWxpZGF0b3I9e3ZhbGlkYXRvcnMudGV4dH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgbGFiZWw9XCJBZGRcIiAvPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgICA8SW5mb01zZyBsb2FkaW5nPXtsb2FkaW5nfSBlcnJvcj17ZXJyb3J9IGlzU3VjY2VzZWQ9e2lzU3VjY2Vzc2VkfSAvPlxyXG4gICAgPC9OZXdQb3N0Q29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KChzdGF0ZSkgPT4gc3RhdGUubmV3UG9zdFJlZHVjZXIsIHsgbmV3UG9zdFB1c2ggfSkoXHJcbiAgTmV3UG9zdFxyXG4pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9