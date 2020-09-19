webpackHotUpdate_N_E("pages/posts/new",{

/***/ "./containers/NewPost/InfoMsg/InfoMsg.tsx":
/*!************************************************!*\
  !*** ./containers/NewPost/InfoMsg/InfoMsg.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styledComponents */ "./containers/NewPost/InfoMsg/styledComponents.ts");
var _this = undefined,
    _jsxFileName = "D:\\Dima\\d-t-t-e\\containers\\NewPost\\InfoMsg\\InfoMsg.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var InfoMessage = function InfoMessage(_ref) {
  var loading = _ref.loading,
      isSuccesed = _ref.isSuccesed,
      error = _ref.error;

  if (loading) {
    return __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_1__["P"], {
      color: "grey",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 12
      }
    }, "Loading...");
  }

  if (!loading && error) {
    return __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_1__["P"], {
      color: "red",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 12
      }
    }, "Some error with server(");
  }

  if (isSuccesed) {
    return __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_1__["P"], {
      color: "green",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 12
      }
    }, "Post was created");
  }
};

_c = InfoMessage;
/* harmony default export */ __webpack_exports__["default"] = (InfoMessage);

var _c;

$RefreshReg$(_c, "InfoMessage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/NewPost/InfoMsg/styledComponents.ts":
/*!********************************************************!*\
  !*** ./containers/NewPost/InfoMsg/styledComponents.ts ***!
  \********************************************************/
/*! exports provided: P */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return P; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var P = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "styledComponents__P",
  componentId: "sc-1quvmn-0"
})(["font-size:18px;font-weight:bold;color:", ";"], function (props) {
  return props.color;
});

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9OZXdQb3N0L0luZm9Nc2cvSW5mb01zZy50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRhaW5lcnMvTmV3UG9zdC9JbmZvTXNnL3N0eWxlZENvbXBvbmVudHMudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRhaW5lcnMvTmV3UG9zdC9OZXdQb3N0LnRzeCJdLCJuYW1lcyI6WyJJbmZvTWVzc2FnZSIsImxvYWRpbmciLCJpc1N1Y2Nlc2VkIiwiZXJyb3IiLCJQIiwic3R5bGVkIiwicCIsInByb3BzIiwiY29sb3IiLCJ2YWxpZGF0b3JzIiwidGl0bGUiLCJyZXF1aXJlZCIsInRleHQiLCJOZXdQb3N0IiwiaXNTdWNjZXNzZWQiLCJuZXdQb3N0UHVzaCIsIm9uU3VibWl0IiwiZGF0YSIsImUiLCJ0YXJnZXQiLCJyZXNldCIsImNvbnNvbGUiLCJsb2ciLCJyZWdpc3RlciIsImVycm9ycyIsIklucHV0IiwiVGV4dGFyZWEiLCJjb25uZWN0Iiwic3RhdGUiLCJuZXdQb3N0UmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFvQztBQUFBLE1BQWpDQyxPQUFpQyxRQUFqQ0EsT0FBaUM7QUFBQSxNQUF4QkMsVUFBd0IsUUFBeEJBLFVBQXdCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUN0RCxNQUFJRixPQUFKLEVBQWE7QUFDWCxXQUFPLE1BQUMsbURBQUQ7QUFBRyxXQUFLLEVBQUMsTUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFQO0FBQ0Q7O0FBRUQsTUFBSSxDQUFDQSxPQUFELElBQVlFLEtBQWhCLEVBQXVCO0FBQ3JCLFdBQU8sTUFBQyxtREFBRDtBQUFHLFdBQUssRUFBQyxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBQVA7QUFDRDs7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LFNBQVdBLEtBQUssQ0FBQ0MsY0FBakI7QUFBQSxDQUFELEVBQWtDO0FBQUVkLGFBQVcsRUFBWEEsa0VBQVdBO0FBQWIsQ0FBbEMsQ0FBUCxDQUNiRixPQURhLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvbmV3LjFmMjI5NWIxN2UxNWQ5MDBlMGQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBQIH0gZnJvbSBcIi4vc3R5bGVkQ29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgSW5mb01lc3NhZ2UgPSAoeyBsb2FkaW5nLCBpc1N1Y2Nlc2VkLCBlcnJvciB9KSA9PiB7XHJcbiAgaWYgKGxvYWRpbmcpIHtcclxuICAgIHJldHVybiA8UCBjb2xvcj1cImdyZXlcIj5Mb2FkaW5nLi4uPC9QPjtcclxuICB9XHJcblxyXG4gIGlmICghbG9hZGluZyAmJiBlcnJvcikge1xyXG4gICAgcmV0dXJuIDxQIGNvbG9yPVwicmVkXCI+U29tZSBlcnJvciB3aXRoIHNlcnZlcig8L1A+O1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzU3VjY2VzZWQpIHtcclxuICAgIHJldHVybiA8UCBjb2xvcj1cImdyZWVuXCI+UG9zdCB3YXMgY3JlYXRlZDwvUD47XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBJbmZvTWVzc2FnZTtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQID0gc3R5bGVkLnBgXHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMuY29sb3J9O1xyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFN1Ym1pdEhhbmRsZXIgfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCB7IG5ld1Bvc3RQdXNoIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvbmV3UG9zdFwiO1xyXG5cclxuaW1wb3J0IEZvcm0sIHsgRmllbGQsIElucHV0LCBUZXh0YXJlYSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvcm1cIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CdXR0b25cIjtcclxuaW1wb3J0IEluZm9NZXNzYWdlIGZyb20gXCIuL0luZm9Nc2cvSW5mb01zZ1wiO1xyXG5cclxuaW1wb3J0IHsgTmV3UG9zdFByb3BzVHlwZSwgRm9ybVZhbHVlc1R5cGUgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBOZXdQb3N0Q29udGFpbmVyIH0gZnJvbSBcIi4vc3R5bGVkQ29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgdmFsaWRhdG9ycyA9IHtcclxuICB0aXRsZToge1xyXG4gICAgcmVxdWlyZWQ6IFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZFwiLFxyXG4gIH0sXHJcbiAgdGV4dDoge1xyXG4gICAgcmVxdWlyZWQ6IFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZFwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBOZXdQb3N0OiBSZWFjdC5GQzxOZXdQb3N0UHJvcHNUeXBlPiA9ICh7XHJcbiAgbG9hZGluZyxcclxuICBlcnJvcixcclxuICBpc1N1Y2Nlc3NlZCxcclxuICBuZXdQb3N0UHVzaCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IG9uU3VibWl0OiBTdWJtaXRIYW5kbGVyPEZvcm1WYWx1ZXNUeXBlPiA9IChkYXRhLCBlKSA9PiB7XHJcbiAgICAvLyBwb3N0TmV3UG9zdEFQSShkYXRhKS50aGVuKChyKSA9PiBjb25zb2xlLmxvZyhyKSk7XHJcbiAgICBuZXdQb3N0UHVzaChkYXRhKTtcclxuICAgIGUudGFyZ2V0LnJlc2V0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8TmV3UG9zdENvbnRhaW5lcj5cclxuICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICB7KHJlZ2lzdGVyLCBlcnJvcnMpID0+IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJQb3N0IHRpdGxlXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVudGVyIHBvc3QgdGl0bGVcIlxyXG4gICAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17SW5wdXR9XHJcbiAgICAgICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxyXG4gICAgICAgICAgICAgIHZhbGlkYXRvcj17dmFsaWRhdG9ycy50aXRsZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgbmFtZT1cImJvZHlcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbnRlciB0ZXh0XCJcclxuICAgICAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cclxuICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRhcmVhfVxyXG4gICAgICAgICAgICAgIHJlZ2lzdGVyPXtyZWdpc3Rlcn1cclxuICAgICAgICAgICAgICB2YWxpZGF0b3I9e3ZhbGlkYXRvcnMudGV4dH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgbGFiZWw9XCJBZGRcIiAvPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgICA8SW5mb01lc3NhZ2UgbG9hZGluZz17bG9hZGluZ30gZXJyb3I9e2Vycm9yfSBpc1N1Y2Nlc2VkPXtpc1N1Y2Nlc3NlZH0gLz5cclxuICAgIDwvTmV3UG9zdENvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RhdGUpID0+IHN0YXRlLm5ld1Bvc3RSZWR1Y2VyLCB7IG5ld1Bvc3RQdXNoIH0pKFxyXG4gIE5ld1Bvc3RcclxuKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==