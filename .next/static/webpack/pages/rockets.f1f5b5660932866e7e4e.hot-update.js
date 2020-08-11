webpackHotUpdate_N_E("pages/rockets",{

/***/ "./pages/rockets.js":
/*!**************************!*\
  !*** ./pages/rockets.js ***!
  \**************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/yuhanwu/sites/next-ssr/pages/rockets.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Rockets = function Rockets(_ref) {\n  var rockets = _ref.rockets;\n  console.log('ROCKETS', rockets);\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, \"Rockets Data\"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, __jsx(\"button\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, \"Home\")), rockets.map(function (rocket) {\n    return __jsx(\"div\", {\n      key: rocket.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 12\n      }\n    }, __jsx(\"h5\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 14\n      }\n    }, rocket.rocket_name), __jsx(\"div\", {\n      style: {\n        display: 'flex'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 14\n      }\n    }, rocket.flickr_images.map(function (img) {\n      return __jsx(\"img\", {\n        width: \"300\",\n        src: img,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 49\n        }\n      });\n    })));\n  }));\n};\n\n_c = Rockets;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Rockets);\n\nvar _c;\n\n$RefreshReg$(_c, \"Rockets\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcm9ja2V0cy5qcz9iNjliIl0sIm5hbWVzIjpbIlJvY2tldHMiLCJyb2NrZXRzIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInJvY2tldCIsImlkIiwicm9ja2V0X25hbWUiLCJkaXNwbGF5IiwiZmxpY2tyX2ltYWdlcyIsImltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFpQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUMvQkMsU0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QkYsT0FBdkI7QUFDQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUUsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FGRixFQUtHQSxPQUFPLENBQUNHLEdBQVIsQ0FBWSxVQUFBQyxNQUFNLEVBQUk7QUFDcEIsV0FDRTtBQUFLLFNBQUcsRUFBRUEsTUFBTSxDQUFDQyxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLRCxNQUFNLENBQUNFLFdBQVosQ0FERixFQUVFO0FBQUssV0FBSyxFQUFFO0FBQUNDLGVBQU8sRUFBRTtBQUFWLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHSCxNQUFNLENBQUNJLGFBQVAsQ0FBcUJMLEdBQXJCLENBQXlCLFVBQUFNLEdBQUc7QUFBQSxhQUFJO0FBQUssYUFBSyxFQUFDLEtBQVg7QUFBaUIsV0FBRyxFQUFFQSxHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQUo7QUFBQSxLQUE1QixDQURILENBRkYsQ0FERjtBQVFGLEdBVEEsQ0FMSCxDQURGO0FBa0JELENBcEJEOztLQUFNVixPOztBQWlDU0Esc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9yb2NrZXRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG5jb25zdCBSb2NrZXRzID0gKHsgcm9ja2V0cyB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKCdST0NLRVRTJywgcm9ja2V0cyk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5Sb2NrZXRzIERhdGE8L2gxPlxuICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgIDxidXR0b24+SG9tZTwvYnV0dG9uPlxuICAgICAgPC9MaW5rPlxuICAgICAge3JvY2tldHMubWFwKHJvY2tldCA9PiB7XG4gICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICA8ZGl2IGtleT17cm9ja2V0LmlkfT5cbiAgICAgICAgICAgICA8aDU+e3JvY2tldC5yb2NrZXRfbmFtZX08L2g1PlxuICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCd9fT5cbiAgICAgICAgICAgICAgIHtyb2NrZXQuZmxpY2tyX2ltYWdlcy5tYXAoaW1nID0+IDxpbWcgd2lkdGg9JzMwMCcgc3JjPXtpbWd9IC8+KX1cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICApXG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuc3BhY2V4ZGF0YS5jb20vdjMvcm9ja2V0cz9saW1pdD0xMCcpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgY29uc29sZS5sb2coJ0RBVEEnLCBkYXRhKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcm9ja2V0czogZGF0YVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb2NrZXRzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/rockets.js\n");

/***/ })

})