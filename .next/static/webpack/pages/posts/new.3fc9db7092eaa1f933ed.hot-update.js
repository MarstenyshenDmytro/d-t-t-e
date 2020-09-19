webpackHotUpdate_N_E("pages/posts/new",{

/***/ "./api/postNewPostAPI.ts":
/*!*******************************!*\
  !*** ./api/postNewPostAPI.ts ***!
  \*******************************/
/*! exports provided: postNewPostAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postNewPostAPI", function() { return postNewPostAPI; });
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client */ "./api/client.ts");

var postNewPostAPI = function postNewPostAPI(_ref) {
  var title = _ref.title,
      body = _ref.body;
  return _client__WEBPACK_IMPORTED_MODULE_0__["default"].post("/posts", {
    title: title,
    body: body
  }).then(function (r) {
    return r.data;
  });
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

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
      name: "text",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBpL3Bvc3ROZXdQb3N0QVBJLnRzIiwid2VicGFjazovL19OX0UvLi9jb250YWluZXJzL05ld1Bvc3QvTmV3UG9zdC50c3giXSwibmFtZXMiOlsicG9zdE5ld1Bvc3RBUEkiLCJ0aXRsZSIsImJvZHkiLCJjbGllbnQiLCJwb3N0IiwidGhlbiIsInIiLCJkYXRhIiwidmFsaWRhdG9ycyIsInJlcXVpcmVkIiwidGV4dCIsIk5ld1Bvc3QiLCJvblN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJyZWdpc3RlciIsImVycm9ycyIsIklucHV0IiwiVGV4dGFyZWEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUI7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxJQUFWLFFBQVVBLElBQVY7QUFBQSxTQUM1QkMsK0NBQU0sQ0FBQ0MsSUFBUCxXQUFzQjtBQUFFSCxTQUFLLEVBQUxBLEtBQUY7QUFBU0MsUUFBSSxFQUFKQTtBQUFULEdBQXRCLEVBQXVDRyxJQUF2QyxDQUE0QyxVQUFDQyxDQUFEO0FBQUEsV0FBT0EsQ0FBQyxDQUFDQyxJQUFUO0FBQUEsR0FBNUMsQ0FENEI7QUFBQSxDQUF2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZQO0FBRUE7QUFFQTtBQUNBO0FBRUEsSUFBTUMsVUFBVSxHQUFHO0FBQ2pCUCxPQUFLLEVBQUU7QUFDTFEsWUFBUSxFQUFFO0FBREwsR0FEVTtBQUlqQkMsTUFBSSxFQUFFO0FBQ0pELFlBQVEsRUFBRTtBQUROO0FBSlcsQ0FBbkI7O0FBU0EsSUFBTUUsT0FBaUIsR0FBRyxTQUFwQkEsT0FBb0IsR0FBTTtBQUM5QixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDTCxJQUFELEVBQVU7QUFDekJQLDhFQUFjLENBQUNPLElBQUQsQ0FBZCxDQUFxQkYsSUFBckIsQ0FBMEIsVUFBQ0MsQ0FBRDtBQUFBLGFBQU9PLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUixDQUFaLENBQVA7QUFBQSxLQUExQjtBQUNBTyxXQUFPLENBQUNDLEdBQVIsQ0FBWVAsSUFBWjtBQUNELEdBSEQ7O0FBSUEsU0FDRSxNQUFDLHdEQUFEO0FBQU0sWUFBUSxFQUFFSyxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csVUFBQ0csUUFBRCxFQUFXQyxNQUFYO0FBQUEsV0FDQyxtRUFDRSxNQUFDLHNEQUFEO0FBQ0UsVUFBSSxFQUFDLE9BRFA7QUFFRSxXQUFLLEVBQUMsWUFGUjtBQUdFLGlCQUFXLEVBQUMsa0JBSGQ7QUFJRSxZQUFNLEVBQUVBLE1BSlY7QUFLRSxlQUFTLEVBQUVDLHNEQUxiO0FBTUUsY0FBUSxFQUFFRixRQU5aO0FBT0UsZUFBUyxFQUFFUCxVQUFVLENBQUNQLEtBUHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQVVFLE1BQUMsc0RBQUQ7QUFDRSxVQUFJLEVBQUMsTUFEUDtBQUVFLFdBQUssRUFBQyxNQUZSO0FBR0UsaUJBQVcsRUFBQyxZQUhkO0FBSUUsWUFBTSxFQUFFZSxNQUpWO0FBS0UsZUFBUyxFQUFFRSx5REFMYjtBQU1FLGNBQVEsRUFBRUgsUUFOWjtBQU9FLGVBQVMsRUFBRVAsVUFBVSxDQUFDRSxJQVB4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVkYsRUFtQkUsTUFBQywwREFBRDtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQXNCLFdBQUssRUFBQyxLQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BbkJGLENBREQ7QUFBQSxHQURILENBREY7QUEyQkQsQ0FoQ0Q7O0tBQU1DLE87QUFrQ1NBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL25ldy4zZmM5ZGI3MDkyZWFhMWY5MzNlZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsaWVudCBmcm9tIFwiLi9jbGllbnRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0TmV3UG9zdEFQSSA9ICh7IHRpdGxlLCBib2R5IH0pID0+XHJcbiAgY2xpZW50LnBvc3QoYC9wb3N0c2AsIHsgdGl0bGUsIGJvZHkgfSkudGhlbigocikgPT4gci5kYXRhKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgcG9zdE5ld1Bvc3RBUEkgfSBmcm9tIFwiLi4vLi4vYXBpL3Bvc3ROZXdQb3N0QVBJXCI7XHJcblxyXG5pbXBvcnQgRm9ybSwgeyBGaWVsZCwgSW5wdXQsIFRleHRhcmVhIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0J1dHRvblwiO1xyXG5cclxuY29uc3QgdmFsaWRhdG9ycyA9IHtcclxuICB0aXRsZToge1xyXG4gICAgcmVxdWlyZWQ6IFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZFwiLFxyXG4gIH0sXHJcbiAgdGV4dDoge1xyXG4gICAgcmVxdWlyZWQ6IFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZFwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBOZXdQb3N0OiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBvblN1Ym1pdCA9IChkYXRhKSA9PiB7XHJcbiAgICBwb3N0TmV3UG9zdEFQSShkYXRhKS50aGVuKChyKSA9PiBjb25zb2xlLmxvZyhyKSk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICB7KHJlZ2lzdGVyLCBlcnJvcnMpID0+IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiUG9zdCB0aXRsZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW50ZXIgcG9zdCB0aXRsZVwiXHJcbiAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxyXG4gICAgICAgICAgICBjb21wb25lbnQ9e0lucHV0fVxyXG4gICAgICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXJ9XHJcbiAgICAgICAgICAgIHZhbGlkYXRvcj17dmFsaWRhdG9ycy50aXRsZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgbmFtZT1cInRleHRcIlxyXG4gICAgICAgICAgICBsYWJlbD1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVudGVyIHRleHRcIlxyXG4gICAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cclxuICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0YXJlYX1cclxuICAgICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxyXG4gICAgICAgICAgICB2YWxpZGF0b3I9e3ZhbGlkYXRvcnMudGV4dH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBsYWJlbD1cIkFkZFwiIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L0Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld1Bvc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=