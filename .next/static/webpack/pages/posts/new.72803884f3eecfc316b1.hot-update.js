webpackHotUpdate_N_E("pages/posts/new",{

/***/ "./components/form/Field/Field.tsx":
/*!*****************************************!*\
  !*** ./components/form/Field/Field.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styledComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styledComponent */ "./components/form/Field/styledComponent.ts");
var _this = undefined,
    _jsxFileName = "D:\\Dima\\d-t-t-e\\components\\form\\Field\\Field.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Field = function Field(_ref) {
  _s();

  var name = _ref.name,
      label = _ref.label,
      placeholder = _ref.placeholder,
      errors = _ref.errors,
      register = _ref.register,
      Component = _ref.component,
      validator = _ref.validator;
  var error = errors[name];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isFocus = _useState[0],
      setIsFocus = _useState[1];

  var handleControl = function handleControl() {
    setIsFocus(!isFocus);
  };

  var classes = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (mainClass) {
    return error && !isFocus ? "".concat(mainClass, " ").concat(mainClass, "_error") : mainClass;
  }, [error, isFocus]);
  return __jsx(_styledComponent__WEBPACK_IMPORTED_MODULE_1__["FieldContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, label && __jsx("p", {
    className: "field__name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, label), __jsx("div", {
    className: classes("field__input"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(Component, {
    name: name,
    placeholder: placeholder,
    handleControl: handleControl,
    register: register,
    isFocus: isFocus,
    validator: validator,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  })), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, error && !isFocus && error.message));
};

_s(Field, "0JKsLAYk5WiqKTsS1Tn1h5ysmkM=");

_c = Field;
/* harmony default export */ __webpack_exports__["default"] = (Field);

var _c;

$RefreshReg$(_c, "Field");

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

/***/ "./components/form/Field/styledComponent.ts":
/*!**************************************************!*\
  !*** ./components/form/Field/styledComponent.ts ***!
  \**************************************************/
/*! exports provided: FieldContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldContainer", function() { return FieldContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var FieldContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styledComponent__FieldContainer",
  componentId: "sc-13719qw-0"
})(["&:not(last-child){margin-bottom:20px;}"]);

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtL0ZpZWxkL0ZpZWxkLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtL0ZpZWxkL3N0eWxlZENvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJGaWVsZCIsIm5hbWUiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwiZXJyb3JzIiwicmVnaXN0ZXIiLCJDb21wb25lbnQiLCJjb21wb25lbnQiLCJ2YWxpZGF0b3IiLCJlcnJvciIsInVzZVN0YXRlIiwiaXNGb2N1cyIsInNldElzRm9jdXMiLCJoYW5kbGVDb250cm9sIiwiY2xhc3NlcyIsInVzZUNhbGxiYWNrIiwibWFpbkNsYXNzIiwibWVzc2FnZSIsIkZpZWxkQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQVFSO0FBQUE7O0FBQUEsTUFQSkMsSUFPSSxRQVBKQSxJQU9JO0FBQUEsTUFOSkMsS0FNSSxRQU5KQSxLQU1JO0FBQUEsTUFMSkMsV0FLSSxRQUxKQSxXQUtJO0FBQUEsTUFKSkMsTUFJSSxRQUpKQSxNQUlJO0FBQUEsTUFISkMsUUFHSSxRQUhKQSxRQUdJO0FBQUEsTUFGT0MsU0FFUCxRQUZKQyxTQUVJO0FBQUEsTUFESkMsU0FDSSxRQURKQSxTQUNJO0FBQ0osTUFBTUMsS0FBSyxHQUFHTCxNQUFNLENBQUNILElBQUQsQ0FBcEI7O0FBREksa0JBRTBCUyxzREFBUSxDQUFDLEtBQUQsQ0FGbEM7QUFBQSxNQUVHQyxPQUZIO0FBQUEsTUFFWUMsVUFGWjs7QUFJSixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDMUJELGNBQVUsQ0FBQyxDQUFDRCxPQUFGLENBQVY7QUFDRCxHQUZEOztBQUlBLE1BQU1HLE9BQU8sR0FBR0MseURBQVcsQ0FDekIsVUFBQ0MsU0FBRDtBQUFBLFdBQ0VQLEtBQUssSUFBSSxDQUFDRSxPQUFWLGFBQXVCSyxTQUF2QixjQUFvQ0EsU0FBcEMsY0FBd0RBLFNBRDFEO0FBQUEsR0FEeUIsRUFHekIsQ0FBQ1AsS0FBRCxFQUFRRSxPQUFSLENBSHlCLENBQTNCO0FBTUEsU0FDRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1QsS0FBSyxJQUFJO0FBQUcsYUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0QkEsS0FBNUIsQ0FEWixFQUVFO0FBQUssYUFBUyxFQUFFWSxPQUFPLENBQUMsY0FBRCxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFEO0FBQ0UsUUFBSSxFQUFFYixJQURSO0FBRUUsZUFBVyxFQUFFRSxXQUZmO0FBR0UsaUJBQWEsRUFBRVUsYUFIakI7QUFJRSxZQUFRLEVBQUVSLFFBSlo7QUFLRSxXQUFPLEVBQUVNLE9BTFg7QUFNRSxhQUFTLEVBQUVILFNBTmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRkYsRUFZRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlDLEtBQUssSUFBSSxDQUFDRSxPQUFWLElBQXFCRixLQUFLLENBQUNRLE9BQS9CLENBWkYsQ0FERjtBQWdCRCxDQXRDRDs7R0FBTWpCLEs7O0tBQUFBLEs7QUF3Q1NBLG9FQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTWtCLGNBQWMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw4Q0FBcEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvbmV3LjcyODAzODg0ZjNlZWNmYzMxNmIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBGaWVsZENvbnRhaW5lciB9IGZyb20gXCIuL3N0eWxlZENvbXBvbmVudFwiO1xyXG5cclxuY29uc3QgRmllbGQgPSAoe1xyXG4gIG5hbWUsXHJcbiAgbGFiZWwsXHJcbiAgcGxhY2Vob2xkZXIsXHJcbiAgZXJyb3JzLFxyXG4gIHJlZ2lzdGVyLFxyXG4gIGNvbXBvbmVudDogQ29tcG9uZW50LFxyXG4gIHZhbGlkYXRvcixcclxufSkgPT4ge1xyXG4gIGNvbnN0IGVycm9yID0gZXJyb3JzW25hbWVdO1xyXG4gIGNvbnN0IFtpc0ZvY3VzLCBzZXRJc0ZvY3VzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ29udHJvbCA9ICgpID0+IHtcclxuICAgIHNldElzRm9jdXMoIWlzRm9jdXMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VDYWxsYmFjayhcclxuICAgIChtYWluQ2xhc3MpID0+XHJcbiAgICAgIGVycm9yICYmICFpc0ZvY3VzID8gYCR7bWFpbkNsYXNzfSAke21haW5DbGFzc31fZXJyb3JgIDogbWFpbkNsYXNzLFxyXG4gICAgW2Vycm9yLCBpc0ZvY3VzXVxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RmllbGRDb250YWluZXI+XHJcbiAgICAgIHtsYWJlbCAmJiA8cCBjbGFzc05hbWU9XCJmaWVsZF9fbmFtZVwiPntsYWJlbH08L3A+fVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NlcyhcImZpZWxkX19pbnB1dFwiKX0+XHJcbiAgICAgICAgPENvbXBvbmVudFxyXG4gICAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuICAgICAgICAgIGhhbmRsZUNvbnRyb2w9e2hhbmRsZUNvbnRyb2x9XHJcbiAgICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXJ9XHJcbiAgICAgICAgICBpc0ZvY3VzPXtpc0ZvY3VzfVxyXG4gICAgICAgICAgdmFsaWRhdG9yPXt2YWxpZGF0b3J9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxwPntlcnJvciAmJiAhaXNGb2N1cyAmJiBlcnJvci5tZXNzYWdlfTwvcD5cclxuICAgIDwvRmllbGRDb250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpZWxkO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZpZWxkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAmOm5vdChsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuYDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==