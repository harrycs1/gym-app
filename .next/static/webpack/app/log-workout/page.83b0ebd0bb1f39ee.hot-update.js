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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PostInput: function() { return /* binding */ PostInput; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/style */ \"(app-pages-browser)/./src/app/style.js\");\n\n\n\nconst PostInput = (param)=>{\n    let { setTitle, setDescription } = param;\n    function handleChangeTitle(e) {\n        setTitle(e.target.value);\n    }\n    function handleChangeDescription(e) {\n        setDescription(e.target.value);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center rounded-lg overflow-hidden bg-platinum\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center gap-2 w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    placeholder: \"Title\",\n                    className: \"p-2 focus:outline-none w-full border-b border-platinum\",\n                    onChange: handleChangeTitle\n                }, void 0, false, {\n                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/PostInput.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/PostInput.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    placeholder: \"Description\",\n                    className: \"p-2 focus:outline-none resize-none w-full\",\n                    onChange: handleChangeDescription\n                }, void 0, false, {\n                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/PostInput.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/PostInput.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/PostInput.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_c = PostInput;\nvar _c;\n$RefreshReg$(_c, \"PostInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Mb2cvUG9zdElucHV0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFpQztBQUNBO0FBRTFCLE1BQU1FLFlBQVk7UUFBQyxFQUFDQyxRQUFRLEVBQUVDLGNBQWMsRUFBQztJQUdsRCxTQUFTQyxrQkFBa0JDLENBQUM7UUFDMUJILFNBQVNHLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUN6QjtJQUNBLFNBQVNDLHdCQUF3QkgsQ0FBQztRQUNoQ0YsZUFBZUUsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO0lBQy9CO0lBR0EscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQU1DLGFBQVk7b0JBQVFGLFdBQVU7b0JBQXlERyxVQUFVVDs7Ozs7Ozs7Ozs7MEJBRTFHLDhEQUFDSztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0k7b0JBQVNGLGFBQVk7b0JBQWNGLFdBQVU7b0JBQTRDRyxVQUFVTDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJNUcsRUFBRTtLQXJCV1AiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0xvZy9Qb3N0SW5wdXQuanM/YTM4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9hcHAvc3R5bGVcIjtcblxuZXhwb3J0IGNvbnN0IFBvc3RJbnB1dCA9ICh7c2V0VGl0bGUsIHNldERlc2NyaXB0aW9ufSkgPT4ge1xuICBcblxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VUaXRsZShlKXtcbiAgICBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSlcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VEZXNjcmlwdGlvbihlKXtcbiAgICBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gYmctcGxhdGludW1cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdy1mdWxsXCI+XG4gICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIlRpdGxlXCIgY2xhc3NOYW1lPVwicC0yIGZvY3VzOm91dGxpbmUtbm9uZSB3LWZ1bGwgYm9yZGVyLWIgYm9yZGVyLXBsYXRpbnVtXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVRpdGxlfT48L2lucHV0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiIGNsYXNzTmFtZT1cInAtMiBmb2N1czpvdXRsaW5lLW5vbmUgcmVzaXplLW5vbmUgdy1mdWxsXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZURlc2NyaXB0aW9ufT48L3RleHRhcmVhPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiUG9zdElucHV0Iiwic2V0VGl0bGUiLCJzZXREZXNjcmlwdGlvbiIsImhhbmRsZUNoYW5nZVRpdGxlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2hhbmdlRGVzY3JpcHRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0ZXh0YXJlYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Log/PostInput.js\n"));

/***/ })

});