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

  return __jsx(_styledComponent__WEBPACK_IMPORTED_MODULE_1__["FieldContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, label && __jsx(_styledComponent__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, label), __jsx(_styledComponent__WEBPACK_IMPORTED_MODULE_1__["FieldContent"], {
    isError: error && !isFocus,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
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
      lineNumber: 30,
      columnNumber: 9
    }
  })), __jsx(_styledComponent__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, error && !isFocus && error.message));
};

_s(Field, "Ioko+NurZnYcx83iF0mDDG6apuM=");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtL0ZpZWxkL0ZpZWxkLnRzeCJdLCJuYW1lcyI6WyJGaWVsZCIsIm5hbWUiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwiZXJyb3JzIiwicmVnaXN0ZXIiLCJDb21wb25lbnQiLCJjb21wb25lbnQiLCJ2YWxpZGF0b3IiLCJlcnJvciIsInVzZVN0YXRlIiwiaXNGb2N1cyIsInNldElzRm9jdXMiLCJoYW5kbGVDb250cm9sIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBT0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FRUjtBQUFBOztBQUFBLE1BUEpDLElBT0ksUUFQSkEsSUFPSTtBQUFBLE1BTkpDLEtBTUksUUFOSkEsS0FNSTtBQUFBLE1BTEpDLFdBS0ksUUFMSkEsV0FLSTtBQUFBLE1BSkpDLE1BSUksUUFKSkEsTUFJSTtBQUFBLE1BSEpDLFFBR0ksUUFISkEsUUFHSTtBQUFBLE1BRk9DLFNBRVAsUUFGSkMsU0FFSTtBQUFBLE1BREpDLFNBQ0ksUUFESkEsU0FDSTtBQUNKLE1BQU1DLEtBQUssR0FBR0wsTUFBTSxDQUFDSCxJQUFELENBQXBCOztBQURJLGtCQUUwQlMsc0RBQVEsQ0FBQyxLQUFELENBRmxDO0FBQUEsTUFFR0MsT0FGSDtBQUFBLE1BRVlDLFVBRlo7O0FBSUosTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCRCxjQUFVLENBQUMsQ0FBQ0QsT0FBRixDQUFWO0FBQ0QsR0FGRDs7QUFJQSxTQUNFLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHVCxLQUFLLElBQUksTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFBLEtBQVIsQ0FEWixFQUVFLE1BQUMsNkRBQUQ7QUFBYyxXQUFPLEVBQUVPLEtBQUssSUFBSSxDQUFDRSxPQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFEO0FBQ0UsUUFBSSxFQUFFVixJQURSO0FBRUUsZUFBVyxFQUFFRSxXQUZmO0FBR0UsaUJBQWEsRUFBRVUsYUFIakI7QUFJRSxZQUFRLEVBQUVSLFFBSlo7QUFLRSxXQUFPLEVBQUVNLE9BTFg7QUFNRSxhQUFTLEVBQUVILFNBTmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRkYsRUFZRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZUMsS0FBSyxJQUFJLENBQUNFLE9BQVYsSUFBcUJGLEtBQUssQ0FBQ0ssT0FBMUMsQ0FaRixDQURGO0FBZ0JELENBaENEOztHQUFNZCxLOztLQUFBQSxLO0FBa0NTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9uZXcuYjY5ZDRhMzEzM2VhMjczNGQ1ZDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBGaWVsZENvbnRhaW5lcixcclxuICBMYWJlbCxcclxuICBGaWVsZENvbnRlbnQsXHJcbiAgRXJyb3JNZXNzYWdlLFxyXG59IGZyb20gXCIuL3N0eWxlZENvbXBvbmVudFwiO1xyXG5cclxuY29uc3QgRmllbGQgPSAoe1xyXG4gIG5hbWUsXHJcbiAgbGFiZWwsXHJcbiAgcGxhY2Vob2xkZXIsXHJcbiAgZXJyb3JzLFxyXG4gIHJlZ2lzdGVyLFxyXG4gIGNvbXBvbmVudDogQ29tcG9uZW50LFxyXG4gIHZhbGlkYXRvcixcclxufSkgPT4ge1xyXG4gIGNvbnN0IGVycm9yID0gZXJyb3JzW25hbWVdO1xyXG4gIGNvbnN0IFtpc0ZvY3VzLCBzZXRJc0ZvY3VzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ29udHJvbCA9ICgpID0+IHtcclxuICAgIHNldElzRm9jdXMoIWlzRm9jdXMpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RmllbGRDb250YWluZXI+XHJcbiAgICAgIHtsYWJlbCAmJiA8TGFiZWw+e2xhYmVsfTwvTGFiZWw+fVxyXG4gICAgICA8RmllbGRDb250ZW50IGlzRXJyb3I9e2Vycm9yICYmICFpc0ZvY3VzfT5cclxuICAgICAgICA8Q29tcG9uZW50XHJcbiAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgaGFuZGxlQ29udHJvbD17aGFuZGxlQ29udHJvbH1cclxuICAgICAgICAgIHJlZ2lzdGVyPXtyZWdpc3Rlcn1cclxuICAgICAgICAgIGlzRm9jdXM9e2lzRm9jdXN9XHJcbiAgICAgICAgICB2YWxpZGF0b3I9e3ZhbGlkYXRvcn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0ZpZWxkQ29udGVudD5cclxuICAgICAgPEVycm9yTWVzc2FnZT57ZXJyb3IgJiYgIWlzRm9jdXMgJiYgZXJyb3IubWVzc2FnZX08L0Vycm9yTWVzc2FnZT5cclxuICAgIDwvRmllbGRDb250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpZWxkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9