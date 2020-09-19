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

var NewPost = function NewPost(props) {
  console.log(props);

  var onSubmit = function onSubmit(data) {
    // postNewPostAPI(data).then((r) => console.log(r));
    props.newPostPush(data);
    console.log(data);
  };

  return __jsx(_components_form__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
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
        lineNumber: 31,
        columnNumber: 11
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
        lineNumber: 40,
        columnNumber: 11
      }
    }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: "submit",
      label: "Add",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }
    }));
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9OZXdQb3N0L05ld1Bvc3QudHN4Il0sIm5hbWVzIjpbInZhbGlkYXRvcnMiLCJ0aXRsZSIsInJlcXVpcmVkIiwidGV4dCIsIk5ld1Bvc3QiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJvblN1Ym1pdCIsImRhdGEiLCJuZXdQb3N0UHVzaCIsInJlZ2lzdGVyIiwiZXJyb3JzIiwiSW5wdXQiLCJUZXh0YXJlYSIsImNvbm5lY3QiLCJzdGF0ZSIsIm5ld1Bvc3RSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHO0FBQ2pCQyxPQUFLLEVBQUU7QUFDTEMsWUFBUSxFQUFFO0FBREwsR0FEVTtBQUlqQkMsTUFBSSxFQUFFO0FBQ0pELFlBQVEsRUFBRTtBQUROO0FBSlcsQ0FBbkI7O0FBU0EsSUFBTUUsT0FBaUIsR0FBRyxTQUFwQkEsT0FBb0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ25DQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjs7QUFDQSxNQUFNRyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxJQUFELEVBQVU7QUFDekI7QUFDQUosU0FBSyxDQUFDSyxXQUFOLENBQWtCRCxJQUFsQjtBQUNBSCxXQUFPLENBQUNDLEdBQVIsQ0FBWUUsSUFBWjtBQUNELEdBSkQ7O0FBS0EsU0FDRSxNQUFDLHdEQUFEO0FBQU0sWUFBUSxFQUFFRCxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csVUFBQ0csUUFBRCxFQUFXQyxNQUFYO0FBQUEsV0FDQyxtRUFDRSxNQUFDLHNEQUFEO0FBQ0UsVUFBSSxFQUFDLE9BRFA7QUFFRSxXQUFLLEVBQUMsWUFGUjtBQUdFLGlCQUFXLEVBQUMsa0JBSGQ7QUFJRSxZQUFNLEVBQUVBLE1BSlY7QUFLRSxlQUFTLEVBQUVDLHNEQUxiO0FBTUUsY0FBUSxFQUFFRixRQU5aO0FBT0UsZUFBUyxFQUFFWCxVQUFVLENBQUNDLEtBUHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQVVFLE1BQUMsc0RBQUQ7QUFDRSxVQUFJLEVBQUMsTUFEUDtBQUVFLFdBQUssRUFBQyxNQUZSO0FBR0UsaUJBQVcsRUFBQyxZQUhkO0FBSUUsWUFBTSxFQUFFVyxNQUpWO0FBS0UsZUFBUyxFQUFFRSx5REFMYjtBQU1FLGNBQVEsRUFBRUgsUUFOWjtBQU9FLGVBQVMsRUFBRVgsVUFBVSxDQUFDRyxJQVB4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVkYsRUFtQkUsTUFBQywwREFBRDtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQXNCLFdBQUssRUFBQyxLQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BbkJGLENBREQ7QUFBQSxHQURILENBREY7QUEyQkQsQ0FsQ0Q7O0tBQU1DLE87QUFvQ1NXLDBIQUFPLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsY0FBakI7QUFBQSxDQUFELEVBQWtDO0FBQUVQLGFBQVcsRUFBWEEsa0VBQVdBO0FBQWIsQ0FBbEMsQ0FBUCxDQUNiTixPQURhLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvbmV3LjNlZDg2ZThkMWI4ZWE3ODVlNGYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCB7IG5ld1Bvc3RQdXNoIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvbmV3UG9zdFwiO1xyXG5cclxuaW1wb3J0IHsgcG9zdE5ld1Bvc3RBUEkgfSBmcm9tIFwiLi4vLi4vYXBpL3Bvc3ROZXdQb3N0QVBJXCI7XHJcblxyXG5pbXBvcnQgRm9ybSwgeyBGaWVsZCwgSW5wdXQsIFRleHRhcmVhIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0J1dHRvblwiO1xyXG5cclxuY29uc3QgdmFsaWRhdG9ycyA9IHtcclxuICB0aXRsZToge1xyXG4gICAgcmVxdWlyZWQ6IFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZFwiLFxyXG4gIH0sXHJcbiAgdGV4dDoge1xyXG4gICAgcmVxdWlyZWQ6IFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZFwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBOZXdQb3N0OiBSZWFjdC5GQyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHByb3BzKTtcclxuICBjb25zdCBvblN1Ym1pdCA9IChkYXRhKSA9PiB7XHJcbiAgICAvLyBwb3N0TmV3UG9zdEFQSShkYXRhKS50aGVuKChyKSA9PiBjb25zb2xlLmxvZyhyKSk7XHJcbiAgICBwcm9wcy5uZXdQb3N0UHVzaChkYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgIHsocmVnaXN0ZXIsIGVycm9ycykgPT4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJQb3N0IHRpdGxlXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbnRlciBwb3N0IHRpdGxlXCJcclxuICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnN9XHJcbiAgICAgICAgICAgIGNvbXBvbmVudD17SW5wdXR9XHJcbiAgICAgICAgICAgIHJlZ2lzdGVyPXtyZWdpc3Rlcn1cclxuICAgICAgICAgICAgdmFsaWRhdG9yPXt2YWxpZGF0b3JzLnRpdGxlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICBuYW1lPVwiYm9keVwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW50ZXIgdGV4dFwiXHJcbiAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxyXG4gICAgICAgICAgICBjb21wb25lbnQ9e1RleHRhcmVhfVxyXG4gICAgICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXJ9XHJcbiAgICAgICAgICAgIHZhbGlkYXRvcj17dmFsaWRhdG9ycy50ZXh0fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGxhYmVsPVwiQWRkXCIgLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RhdGUpID0+IHN0YXRlLm5ld1Bvc3RSZWR1Y2VyLCB7IG5ld1Bvc3RQdXNoIH0pKFxyXG4gIE5ld1Bvc3RcclxuKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==