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

/***/ "(app-pages-browser)/./src/app/components/Log/SetContainer.js":
/*!************************************************!*\
  !*** ./src/app/components/Log/SetContainer.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SetContainer: function() { return /* binding */ SetContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst SetContainer = (param)=>{\n    let { setSets, sets, index } = param;\n    _s();\n    const [weight, setWeight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [reps, setReps] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    function handleWeightChange(e) {\n        setWeight(e.target.value >= 1 ? parseInt(e.target.value) : 0);\n    }\n    function handleRepsChange(e) {\n        setReps(e.target.value >= 1 ? parseInt(e.target.value) : 0);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const copyArray = [\n            ...sets\n        ];\n        copyArray[index] = {\n            weight,\n            reps\n        };\n        setSets(copyArray);\n    }, [\n        weight,\n        reps\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-start items-center gap-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center h-full w-9 bg-LightPurple rounded-md py-1\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: index + 1\n                }, void 0, false, {\n                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/SetContainer.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/SetContainer.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center bg-LightPurple rounded-md gap-1.5 py-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"hidden md:flex\",\n                        children: \"Weight: \"\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/SetContainer.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"w-10 text-DeepPurple rounded-md\",\n                        onChange: handleWeightChange\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/SetContainer.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"\",\n                        children: \"kg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/SetContainer.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/SetContainer.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex bg-LightPurple rounded-md gap-1.5 py-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"\",\n                        children: \"Reps: \"\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/SetContainer.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"w-10 text-DeepPurple rounded-md\",\n                        onChange: handleRepsChange\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/SetContainer.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/SetContainer.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/SetContainer.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SetContainer, \"Vmfkyp1GJAbEAqR8ollR/M3epwI=\");\n_c = SetContainer;\nvar _c;\n$RefreshReg$(_c, \"SetContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Mb2cvU2V0Q29udGFpbmVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE0QztBQUVyQyxNQUFNRSxlQUFlO1FBQUMsRUFBRUMsT0FBTyxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBSTs7SUFDckQsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ1EsTUFBTUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUVqQyxTQUFTVSxtQkFBbUJDLENBQUM7UUFDM0JKLFVBQVVJLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSyxJQUFJLElBQUlDLFNBQVNILEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSyxJQUFJO0lBQzdEO0lBRUEsU0FBU0UsaUJBQWlCSixDQUFDO1FBQ3pCRixRQUFRRSxFQUFFQyxNQUFNLENBQUNDLEtBQUssSUFBSSxJQUFJQyxTQUFTSCxFQUFFQyxNQUFNLENBQUNDLEtBQUssSUFBSTtJQUMzRDtJQUVBWixnREFBU0EsQ0FBQztRQUNSLE1BQU1lLFlBQVk7ZUFBSVo7U0FBSztRQUMzQlksU0FBUyxDQUFDWCxNQUFNLEdBQUc7WUFBRUM7WUFBUUU7UUFBSztRQUNsQ0wsUUFBUWE7SUFDVixHQUFHO1FBQUNWO1FBQVFFO0tBQUs7SUFFakIscUJBQ0UsOERBQUNTO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7OEJBQUdkLFFBQVE7Ozs7Ozs7Ozs7OzBCQUVkLDhEQUFDWTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFFRCxXQUFVO2tDQUFpQjs7Ozs7O2tDQUM5Qiw4REFBQ0U7d0JBQ0NGLFdBQVU7d0JBQ1ZHLFVBQVVYOzs7Ozs7a0NBRVosOERBQUNTO3dCQUFFRCxXQUFVO2tDQUFHOzs7Ozs7Ozs7Ozs7MEJBRWxCLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFFRCxXQUFVO2tDQUFHOzs7Ozs7a0NBQ2hCLDhEQUFDRTt3QkFDQ0YsV0FBVTt3QkFDVkcsVUFBVU47Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtwQixFQUFFO0dBeENXYjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvTG9nL1NldENvbnRhaW5lci5qcz82MzRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IFNldENvbnRhaW5lciA9ICh7IHNldFNldHMsIHNldHMsIGluZGV4LCAgfSkgPT4ge1xuICBjb25zdCBbd2VpZ2h0LCBzZXRXZWlnaHRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtyZXBzLCBzZXRSZXBzXSA9IHVzZVN0YXRlKDApO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVdlaWdodENoYW5nZShlKSB7XG4gICAgc2V0V2VpZ2h0KGUudGFyZ2V0LnZhbHVlID49IDEgPyBwYXJzZUludChlLnRhcmdldC52YWx1ZSkgOiAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVJlcHNDaGFuZ2UoZSkge1xuICAgIHNldFJlcHMoZS50YXJnZXQudmFsdWUgPj0gMSA/IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSA6IDApO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjb3B5QXJyYXkgPSBbLi4uc2V0c107XG4gICAgY29weUFycmF5W2luZGV4XSA9IHsgd2VpZ2h0LCByZXBzIH07XG4gICAgc2V0U2V0cyhjb3B5QXJyYXkpO1xuICB9LCBbd2VpZ2h0LCByZXBzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1mdWxsIHctOSBiZy1MaWdodFB1cnBsZSByb3VuZGVkLW1kIHB5LTFcIj5cbiAgICAgICAgPHA+e2luZGV4ICsgMX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgYmctTGlnaHRQdXJwbGUgcm91bmRlZC1tZCBnYXAtMS41IHB5LTFcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmZsZXhcIj5XZWlnaHQ6IDwvcD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy0xMCB0ZXh0LURlZXBQdXJwbGUgcm91bmRlZC1tZFwiXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVdlaWdodENoYW5nZX1cbiAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPmtnPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYmctTGlnaHRQdXJwbGUgcm91bmRlZC1tZCBnYXAtMS41IHB5LTFcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+UmVwczogPC9wPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwIHRleHQtRGVlcFB1cnBsZSByb3VuZGVkLW1kXCJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUmVwc0NoYW5nZX1cbiAgICAgICAgPjwvaW5wdXQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTZXRDb250YWluZXIiLCJzZXRTZXRzIiwic2V0cyIsImluZGV4Iiwid2VpZ2h0Iiwic2V0V2VpZ2h0IiwicmVwcyIsInNldFJlcHMiLCJoYW5kbGVXZWlnaHRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJwYXJzZUludCIsImhhbmRsZVJlcHNDaGFuZ2UiLCJjb3B5QXJyYXkiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwiaW5wdXQiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Log/SetContainer.js\n"));

/***/ })

});