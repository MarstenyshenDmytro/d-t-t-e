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

var NewPost = function NewPost(_ref) {
  var loading = _ref.loading,
      error = _ref.error,
      isSuccesed = _ref.isSuccesed,
      newPostPush = _ref.newPostPush;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9OZXdQb3N0L05ld1Bvc3QudHN4Il0sIm5hbWVzIjpbInZhbGlkYXRvcnMiLCJ0aXRsZSIsInJlcXVpcmVkIiwidGV4dCIsIk5ld1Bvc3QiLCJsb2FkaW5nIiwiZXJyb3IiLCJpc1N1Y2Nlc2VkIiwibmV3UG9zdFB1c2giLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJvblN1Ym1pdCIsImRhdGEiLCJyZWdpc3RlciIsImVycm9ycyIsIklucHV0IiwiVGV4dGFyZWEiLCJjb25uZWN0Iiwic3RhdGUiLCJuZXdQb3N0UmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBRztBQUNqQkMsT0FBSyxFQUFFO0FBQ0xDLFlBQVEsRUFBRTtBQURMLEdBRFU7QUFJakJDLE1BQUksRUFBRTtBQUNKRCxZQUFRLEVBQUU7QUFETjtBQUpXLENBQW5COztBQVNBLElBQU1FLE9BQWlCLEdBQUcsU0FBcEJBLE9BQW9CLE9BQWlEO0FBQUEsTUFBOUNDLE9BQThDLFFBQTlDQSxPQUE4QztBQUFBLE1BQXJDQyxLQUFxQyxRQUFyQ0EsS0FBcUM7QUFBQSxNQUE5QkMsVUFBOEIsUUFBOUJBLFVBQThCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUN6RUMsU0FBTyxDQUFDQyxHQUFSLENBQVlDLEtBQVo7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRCxFQUFVO0FBQ3pCO0FBQ0FGLFNBQUssQ0FBQ0gsV0FBTixDQUFrQkssSUFBbEI7QUFDQUosV0FBTyxDQUFDQyxHQUFSLENBQVlHLElBQVo7QUFDRCxHQUpEOztBQUtBLFNBQ0UsTUFBQyx3REFBRDtBQUFNLFlBQVEsRUFBRUQsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLFVBQUNFLFFBQUQsRUFBV0MsTUFBWDtBQUFBLFdBQ0MsbUVBQ0UsTUFBQyxzREFBRDtBQUNFLFVBQUksRUFBQyxPQURQO0FBRUUsV0FBSyxFQUFDLFlBRlI7QUFHRSxpQkFBVyxFQUFDLGtCQUhkO0FBSUUsWUFBTSxFQUFFQSxNQUpWO0FBS0UsZUFBUyxFQUFFQyxzREFMYjtBQU1FLGNBQVEsRUFBRUYsUUFOWjtBQU9FLGVBQVMsRUFBRWQsVUFBVSxDQUFDQyxLQVB4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFVRSxNQUFDLHNEQUFEO0FBQ0UsVUFBSSxFQUFDLE1BRFA7QUFFRSxXQUFLLEVBQUMsTUFGUjtBQUdFLGlCQUFXLEVBQUMsWUFIZDtBQUlFLFlBQU0sRUFBRWMsTUFKVjtBQUtFLGVBQVMsRUFBRUUseURBTGI7QUFNRSxjQUFRLEVBQUVILFFBTlo7QUFPRSxlQUFTLEVBQUVkLFVBQVUsQ0FBQ0csSUFQeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVZGLEVBbUJFLE1BQUMsMERBQUQ7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixXQUFLLEVBQUMsS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQW5CRixDQUREO0FBQUEsR0FESCxDQURGO0FBMkJELENBbENEOztLQUFNQyxPO0FBb0NTYywwSEFBTyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLGNBQWpCO0FBQUEsQ0FBRCxFQUFrQztBQUFFWixhQUFXLEVBQVhBLGtFQUFXQTtBQUFiLENBQWxDLENBQVAsQ0FDYkosT0FEYSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL25ldy4wOGY1M2I4NWEyMzc3MTljMmNjZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQgeyBuZXdQb3N0UHVzaCB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL25ld1Bvc3RcIjtcclxuXHJcbmltcG9ydCB7IHBvc3ROZXdQb3N0QVBJIH0gZnJvbSBcIi4uLy4uL2FwaS9wb3N0TmV3UG9zdEFQSVwiO1xyXG5cclxuaW1wb3J0IEZvcm0sIHsgRmllbGQsIElucHV0LCBUZXh0YXJlYSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvcm1cIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CdXR0b25cIjtcclxuXHJcbmNvbnN0IHZhbGlkYXRvcnMgPSB7XHJcbiAgdGl0bGU6IHtcclxuICAgIHJlcXVpcmVkOiBcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWRcIixcclxuICB9LFxyXG4gIHRleHQ6IHtcclxuICAgIHJlcXVpcmVkOiBcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWRcIixcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgTmV3UG9zdDogUmVhY3QuRkMgPSAoeyBsb2FkaW5nLCBlcnJvciwgaXNTdWNjZXNlZCwgbmV3UG9zdFB1c2ggfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHByb3BzKTtcclxuICBjb25zdCBvblN1Ym1pdCA9IChkYXRhKSA9PiB7XHJcbiAgICAvLyBwb3N0TmV3UG9zdEFQSShkYXRhKS50aGVuKChyKSA9PiBjb25zb2xlLmxvZyhyKSk7XHJcbiAgICBwcm9wcy5uZXdQb3N0UHVzaChkYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgIHsocmVnaXN0ZXIsIGVycm9ycykgPT4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJQb3N0IHRpdGxlXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbnRlciBwb3N0IHRpdGxlXCJcclxuICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnN9XHJcbiAgICAgICAgICAgIGNvbXBvbmVudD17SW5wdXR9XHJcbiAgICAgICAgICAgIHJlZ2lzdGVyPXtyZWdpc3Rlcn1cclxuICAgICAgICAgICAgdmFsaWRhdG9yPXt2YWxpZGF0b3JzLnRpdGxlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICBuYW1lPVwiYm9keVwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW50ZXIgdGV4dFwiXHJcbiAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxyXG4gICAgICAgICAgICBjb21wb25lbnQ9e1RleHRhcmVhfVxyXG4gICAgICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXJ9XHJcbiAgICAgICAgICAgIHZhbGlkYXRvcj17dmFsaWRhdG9ycy50ZXh0fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGxhYmVsPVwiQWRkXCIgLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RhdGUpID0+IHN0YXRlLm5ld1Bvc3RSZWR1Y2VyLCB7IG5ld1Bvc3RQdXNoIH0pKFxyXG4gIE5ld1Bvc3RcclxuKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==