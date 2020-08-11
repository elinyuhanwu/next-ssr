webpackHotUpdate_N_E("pages/rockets",{

/***/ "./pages/rockets.js":
/*!**************************!*\
  !*** ./pages/rockets.js ***!
  \**************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/yuhanwu/sites/next-ssr/pages/rockets.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Rockets = function Rockets(_ref) {\n  var rockets = _ref.rockets;\n  console.log('ROCKETS', rockets);\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, \"Rockets Data\"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, __jsx(\"button\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, \"Home\")), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, rockets && rockets.map(function (rocket) {\n    __jsx(\"div\", {\n      style: {\n        color: 'red',\n        fontSize: '14px'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 11\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: \"rockets/\".concat(rocket.id),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 13\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 15\n      }\n    }, rocket.name)), rocket.description);\n  }), __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, rockets[0].company), __jsx(\"img\", {\n    src: rockets[0].flickr_images[0],\n    alt: \"rockets\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  })));\n};\n\n_c = Rockets;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Rockets);\n\nvar _c;\n\n$RefreshReg$(_c, \"Rockets\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcm9ja2V0cy5qcz9iNjliIl0sIm5hbWVzIjpbIlJvY2tldHMiLCJyb2NrZXRzIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInJvY2tldCIsImNvbG9yIiwiZm9udFNpemUiLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImNvbXBhbnkiLCJmbGlja3JfaW1hZ2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUdBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQWlCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQy9CQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCRixPQUF2QjtBQUNBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFFRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQUZGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxPQUFPLElBQUlBLE9BQU8sQ0FBQ0csR0FBUixDQUFZLFVBQUFDLE1BQU0sRUFBSTtBQUNoQztBQUFLLFdBQUssRUFBRTtBQUFDQyxhQUFLLEVBQUUsS0FBUjtBQUFlQyxnQkFBUSxFQUFFO0FBQXpCLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLG9CQUFhRixNQUFNLENBQUNHLEVBQXBCLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUgsTUFBTSxDQUFDSSxJQUFYLENBREYsQ0FERixFQUlHSixNQUFNLENBQUNLLFdBSlY7QUFNRCxHQVBXLENBRGQsRUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtULE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV1UsT0FBaEIsQ0FURixFQVVFO0FBQUssT0FBRyxFQUFFVixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdXLGFBQVgsQ0FBeUIsQ0FBekIsQ0FBVjtBQUF1QyxPQUFHLEVBQUMsU0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLENBTEYsQ0FERjtBQW9CRCxDQXRCRDs7S0FBTVosTzs7QUFtQ1NBLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcm9ja2V0cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcblxuY29uc3QgUm9ja2V0cyA9ICh7IHJvY2tldHMgfSkgPT4ge1xuICBjb25zb2xlLmxvZygnUk9DS0VUUycsIHJvY2tldHMpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+Um9ja2V0cyBEYXRhPC9oMT5cbiAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICA8YnV0dG9uPkhvbWU8L2J1dHRvbj5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtyb2NrZXRzICYmIHJvY2tldHMubWFwKHJvY2tldCA9PiB7XG4gICAgICAgICAgPGRpdiBzdHlsZT17e2NvbG9yOiAncmVkJywgZm9udFNpemU6ICcxNHB4J319PlxuICAgICAgICAgICAgPExpbmsgaHJlZj17YHJvY2tldHMvJHtyb2NrZXQuaWR9YH0+XG4gICAgICAgICAgICAgIDxhPntyb2NrZXQubmFtZX08L2E+XG4gICAgICAgICAgICA8L0xpbms+ICAgICAgICAgICAgXG4gICAgICAgICAgICB7cm9ja2V0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9KX1cbiAgICAgICAgPGgyPntyb2NrZXRzWzBdLmNvbXBhbnl9PC9oMj5cbiAgICAgICAgPGltZyBzcmM9e3JvY2tldHNbMF0uZmxpY2tyX2ltYWdlc1swXX0gYWx0PSdyb2NrZXRzJz48L2ltZz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5zcGFjZXhkYXRhLmNvbS92My9yb2NrZXRzP2xpbWl0PTEwJyk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICBjb25zb2xlLmxvZygnREFUQScsIGRhdGEpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICByb2NrZXRzOiBkYXRhXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvY2tldHM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/rockets.js\n");

/***/ })

})