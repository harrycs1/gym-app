"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/log-workout/page",{

/***/ "(app-pages-browser)/./src/app/components/Log/PostInput.js":
/*!*********************************************!*\
  !*** ./src/app/components/Log/PostInput.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PostInput: function() { return /* binding */ PostInput; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst PostInput = (param)=>{\n    let { setTitle, setDescription } = param;\n    function handleChangeTitle(e) {\n        setTitle(e.target.value);\n    }\n    function handleChangeDescription(e) {\n        setDescription(e.target.value);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mr-2\",\n                        children: \"Title: \"\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/PostInput.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"p-2 focus:outline-none rounded-lg\",\n                        onChange: handleChangeTitle\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/PostInput.js\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/PostInput.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full border\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"\",\n                        children: \"Description: \"\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/PostInput.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: \"p-2 focus:outline-none rounded-lg w-full\",\n                        onChange: handleChangeDescription\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/PostInput.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/PostInput.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/PostInput.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_c = PostInput;\nvar _c;\n$RefreshReg$(_c, \"PostInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Mb2cvUG9zdElucHV0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWlDO0FBRTFCLE1BQU1DLFlBQVk7UUFBQyxFQUFDQyxRQUFRLEVBQUVDLGNBQWMsRUFBQztJQUdsRCxTQUFTQyxrQkFBa0JDLENBQUM7UUFDMUJILFNBQVNHLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUN6QjtJQUNBLFNBQVNDLHdCQUF3QkgsQ0FBQztRQUNoQ0YsZUFBZUUsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO0lBQy9CO0lBR0EscUJBQ0UsOERBQUNFOzswQkFDQyw4REFBQ0E7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBRUQsV0FBVTtrQ0FBTzs7Ozs7O2tDQUNwQiw4REFBQ0U7d0JBQU1GLFdBQVU7d0JBQW9DRyxVQUFVVDs7Ozs7Ozs7Ozs7OzBCQUVqRSw4REFBQ0s7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBRUQsV0FBVTtrQ0FBRzs7Ozs7O2tDQUNoQiw4REFBQ0k7d0JBQVNKLFdBQVU7d0JBQTJDRyxVQUFVTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWpGLEVBQUU7S0F2QldQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Mb2cvUG9zdElucHV0LmpzP2EzODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IFBvc3RJbnB1dCA9ICh7c2V0VGl0bGUsIHNldERlc2NyaXB0aW9ufSkgPT4ge1xuICBcblxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VUaXRsZShlKXtcbiAgICBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSlcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VEZXNjcmlwdGlvbihlKXtcbiAgICBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm1yLTJcIj5UaXRsZTogPC9wPlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwicC0yIGZvY3VzOm91dGxpbmUtbm9uZSByb3VuZGVkLWxnXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVRpdGxlfT48L2lucHV0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXJcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+RGVzY3JpcHRpb246IDwvcD5cbiAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cInAtMiBmb2N1czpvdXRsaW5lLW5vbmUgcm91bmRlZC1sZyB3LWZ1bGxcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlRGVzY3JpcHRpb259PjwvdGV4dGFyZWE+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJQb3N0SW5wdXQiLCJzZXRUaXRsZSIsInNldERlc2NyaXB0aW9uIiwiaGFuZGxlQ2hhbmdlVGl0bGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDaGFuZ2VEZXNjcmlwdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJpbnB1dCIsIm9uQ2hhbmdlIiwidGV4dGFyZWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Log/PostInput.js\n"));

/***/ })

});