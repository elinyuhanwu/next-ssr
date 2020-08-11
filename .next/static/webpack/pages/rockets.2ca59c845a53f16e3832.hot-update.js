webpackHotUpdate_N_E("pages/rockets",{

/***/ "./pages/rockets.js":
/*!**************************!*\
  !*** ./pages/rockets.js ***!
  \**************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/yuhanwu/sites/next-ssr/pages/rockets.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Rockets = function Rockets(_ref) {\n  var rockets = _ref.rockets;\n  console.log('ROCKETS', rockets);\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    style: {\n      backgroundColor: 'black',\n      color: 'white'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, \"Rockets Data\"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, __jsx(\"button\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, \"Home\")), rockets.map(function (rocket) {\n    return __jsx(\"div\", {\n      key: rocket.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 12\n      }\n    }, __jsx(\"h5\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 14\n      }\n    }, rocket.rocket_name), __jsx(\"div\", {\n      style: {\n        display: 'flex'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 14\n      }\n    }, rocket.flickr_images.map(function (img) {\n      return __jsx(\"img\", {\n        width: \"300\",\n        src: img,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 49\n        }\n      });\n    })));\n  }));\n};\n\n_c = Rockets;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Rockets);\n\nvar _c;\n\n$RefreshReg$(_c, \"Rockets\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcm9ja2V0cy5qcz9iNjliIl0sIm5hbWVzIjpbIlJvY2tldHMiLCJyb2NrZXRzIiwiY29uc29sZSIsImxvZyIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwibWFwIiwicm9ja2V0IiwiaWQiLCJyb2NrZXRfbmFtZSIsImRpc3BsYXkiLCJmbGlja3JfaW1hZ2VzIiwiaW1nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUdBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQWlCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQy9CQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCRixPQUF2QjtBQUNBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksU0FBSyxFQUFFO0FBQUNHLHFCQUFlLEVBQUUsT0FBbEI7QUFBMkJDLFdBQUssRUFBRTtBQUFsQyxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFFRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQUZGLEVBS0dKLE9BQU8sQ0FBQ0ssR0FBUixDQUFZLFVBQUFDLE1BQU0sRUFBSTtBQUNwQixXQUNFO0FBQUssU0FBRyxFQUFFQSxNQUFNLENBQUNDLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtELE1BQU0sQ0FBQ0UsV0FBWixDQURGLEVBRUU7QUFBSyxXQUFLLEVBQUU7QUFBQ0MsZUFBTyxFQUFFO0FBQVYsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dILE1BQU0sQ0FBQ0ksYUFBUCxDQUFxQkwsR0FBckIsQ0FBeUIsVUFBQU0sR0FBRztBQUFBLGFBQUk7QUFBSyxhQUFLLEVBQUMsS0FBWDtBQUFpQixXQUFHLEVBQUVBLEdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBSjtBQUFBLEtBQTVCLENBREgsQ0FGRixDQURGO0FBUUYsR0FUQSxDQUxILENBREY7QUFrQkQsQ0FwQkQ7O0tBQU1aLE87O0FBaUNTQSxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3JvY2tldHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5cbmNvbnN0IFJvY2tldHMgPSAoeyByb2NrZXRzIH0pID0+IHtcbiAgY29uc29sZS5sb2coJ1JPQ0tFVFMnLCByb2NrZXRzKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnYmxhY2snLCBjb2xvcjogJ3doaXRlJ319PlJvY2tldHMgRGF0YTwvaDE+XG4gICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgPGJ1dHRvbj5Ib21lPC9idXR0b24+XG4gICAgICA8L0xpbms+XG4gICAgICB7cm9ja2V0cy5tYXAocm9ja2V0ID0+IHtcbiAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgIDxkaXYga2V5PXtyb2NrZXQuaWR9PlxuICAgICAgICAgICAgIDxoNT57cm9ja2V0LnJvY2tldF9uYW1lfTwvaDU+XG4gICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4J319PlxuICAgICAgICAgICAgICAge3JvY2tldC5mbGlja3JfaW1hZ2VzLm1hcChpbWcgPT4gPGltZyB3aWR0aD0nMzAwJyBzcmM9e2ltZ30gLz4pfVxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIClcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5zcGFjZXhkYXRhLmNvbS92My9yb2NrZXRzP2xpbWl0PTEwJyk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICBjb25zb2xlLmxvZygnREFUQScsIGRhdGEpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICByb2NrZXRzOiBkYXRhXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvY2tldHM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/rockets.js\n");

/***/ })

})