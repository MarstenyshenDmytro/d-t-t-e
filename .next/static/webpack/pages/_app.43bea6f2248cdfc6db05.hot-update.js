webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/store/store */ "./redux/store/store.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ "./components/Header/index.ts");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.ts");



var _this = undefined,
    _jsxFileName = "D:\\Dima\\d-t-t-e\\pages\\_app.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  body {\n    padding: 0;\n    margin: 0;\n  \n    & * {\n      box-sizing: border-box;\n    }\n  }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["createGlobalStyle"])(_templateObject());
_c = GlobalStyle;
var PageLayout = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "_app__PageLayout",
  componentId: "sc-1dvual3-0"
})(["display:grid;grid-template-rows:auto 1fr auto;margin:0 50px;"]);
_c2 = PageLayout;
var MainContent = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "_app__MainContent",
  componentId: "sc-1dvual3-1"
})(["min-height:100vh;"]);
_c3 = MainContent;

var MyApp = function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return __jsx(PageLayout, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 3
    }
  }, __jsx(GlobalStyle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Blog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }), __jsx(MainContent, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    text: "FOOTER",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }));
};

_c4 = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (_c5 = _redux_store_store__WEBPACK_IMPORTED_MODULE_3__["wrapper"].withRedux(MyApp));

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "GlobalStyle");
$RefreshReg$(_c2, "PageLayout");
$RefreshReg$(_c3, "MainContent");
$RefreshReg$(_c4, "MyApp");
$RefreshReg$(_c5, "%default%");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOlsiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIlBhZ2VMYXlvdXQiLCJzdHlsZWQiLCJkaXYiLCJNYWluQ29udGVudCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwid3JhcHBlciIsIndpdGhSZWR1eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBR0MsMkVBQUgsbUJBQWpCO0tBQU1ELFc7QUFZTixJQUFNRSxVQUFVLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsb0VBQWhCO01BQU1GLFU7QUFNTixJQUFNRyxXQUFXLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEseUJBQWpCO01BQU1DLFc7O0FBSU4sSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQSxNQUFHQyxTQUFILFFBQUdBLFNBQUg7QUFBQSxNQUFjQyxTQUFkLFFBQWNBLFNBQWQ7QUFBQSxTQUNaLE1BQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsMERBQUQ7QUFBUSxTQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsU0FBRCx5RkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsQ0FIRixFQU1FLE1BQUMsMERBQUQ7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0FEWTtBQUFBLENBQWQ7O01BQU1GLEs7QUFXUyxxRUFBQUcsMERBQU8sQ0FBQ0MsU0FBUixDQUFrQkosS0FBbEIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjQzYmVhNmYyMjQ4Y2RmYzZkYjA1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tIFwiLi4vcmVkdXgvc3RvcmUvc3RvcmVcIjtcclxuXHJcbmltcG9ydCBzdHlsZWQsIHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XHJcblxyXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gIGJvZHkge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICBcclxuICAgICYgKiB7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB9XHJcbiAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFBhZ2VMYXlvdXQgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xyXG4gIG1hcmdpbjogMCA1MHB4O1xyXG5gO1xyXG5cclxuY29uc3QgTWFpbkNvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG5gO1xyXG5cclxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykgPT4gKFxyXG4gIDxQYWdlTGF5b3V0PlxyXG4gICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICA8SGVhZGVyIHRpdGxlPVwiQmxvZ1wiIC8+XHJcbiAgICA8TWFpbkNvbnRlbnQ+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvTWFpbkNvbnRlbnQ+XHJcbiAgICA8Rm9vdGVyIHRleHQ9XCJGT09URVJcIiAvPlxyXG4gIDwvUGFnZUxheW91dD5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE15QXBwKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==