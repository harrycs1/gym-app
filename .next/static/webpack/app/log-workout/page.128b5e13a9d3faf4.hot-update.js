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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SetContainer: function() { return /* binding */ SetContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst SetContainer = (param)=>{\n    let { setSets, sets, index } = param;\n    _s();\n    const [weight, setWeight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [reps, setReps] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    function handleWeightChange(e) {\n        setWeight(e.target.value >= 1 ? parseInt(e.target.value) : 0);\n    }\n    function handleRepsChange(e) {\n        setReps(e.target.value >= 1 ? parseInt(e.target.value) : 0);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const copyArray = [\n            ...sets\n        ];\n        copyArray[index] = {\n            weight,\n            reps\n        };\n        setSets(copyArray);\n    }, [\n        weight,\n        reps\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-between md:justify-start md:gap-4 items-center mb-1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center w-9 bg-LightPurple rounded-md py-1.5 px-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: index + 1\n                }, void 0, false, {\n                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/SetContainer.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/SetContainer.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center bg-LightPurple md:grow md:justify-around rounded-md gap-5 py-1 px-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1.5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"md:flex\",\n                                children: \"Weight:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/SetContainer.js\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"w-10 text-DeepPurple bg-platinum rounded-md py-0.5 px-2\",\n                                onChange: handleWeightChange\n                            }, void 0, false, {\n                                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/SetContainer.js\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"\",\n                                children: \"kg\"\n                            }, void 0, false, {\n                                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/SetContainer.js\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/SetContainer.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1.5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"\",\n                                children: \"Reps:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/SetContainer.js\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"w-10 text-DeepPurple bg-platinum rounded-md py-0.5 px-2\",\n                                onChange: handleRepsChange\n                            }, void 0, false, {\n                                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/SetContainer.js\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/SetContainer.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/SetContainer.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/SetContainer.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SetContainer, \"Vmfkyp1GJAbEAqR8ollR/M3epwI=\");\n_c = SetContainer;\nvar _c;\n$RefreshReg$(_c, \"SetContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Mb2cvU2V0Q29udGFpbmVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE0QztBQUVyQyxNQUFNRSxlQUFlO1FBQUMsRUFBRUMsT0FBTyxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBSTs7SUFDckQsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ1EsTUFBTUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUVqQyxTQUFTVSxtQkFBbUJDLENBQUM7UUFDM0JKLFVBQVVJLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSyxJQUFJLElBQUlDLFNBQVNILEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSyxJQUFJO0lBQzdEO0lBRUEsU0FBU0UsaUJBQWlCSixDQUFDO1FBQ3pCRixRQUFRRSxFQUFFQyxNQUFNLENBQUNDLEtBQUssSUFBSSxJQUFJQyxTQUFTSCxFQUFFQyxNQUFNLENBQUNDLEtBQUssSUFBSTtJQUMzRDtJQUVBWixnREFBU0EsQ0FBQztRQUNSLE1BQU1lLFlBQVk7ZUFBSVo7U0FBSztRQUMzQlksU0FBUyxDQUFDWCxNQUFNLEdBQUc7WUFBRUM7WUFBUUU7UUFBSztRQUNsQ0wsUUFBUWE7SUFDVixHQUFHO1FBQUNWO1FBQVFFO0tBQUs7SUFFakIscUJBQ0UsOERBQUNTO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7OEJBQUdkLFFBQVE7Ozs7Ozs7Ozs7OzBCQUVkLDhEQUFDWTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0M7Z0NBQUVELFdBQVU7MENBQVU7Ozs7OzswQ0FDdkIsOERBQUNFO2dDQUNDRixXQUFVO2dDQUNWRyxVQUFVWDs7Ozs7OzBDQUVaLDhEQUFDUztnQ0FBRUQsV0FBVTswQ0FBRzs7Ozs7Ozs7Ozs7O2tDQUVsQiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBRUQsV0FBVTswQ0FBRzs7Ozs7OzBDQUNoQiw4REFBQ0U7Z0NBQ0NGLFdBQVU7Z0NBQ1ZHLFVBQVVOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEIsRUFBRTtHQTFDV2I7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0xvZy9TZXRDb250YWluZXIuanM/NjM0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBTZXRDb250YWluZXIgPSAoeyBzZXRTZXRzLCBzZXRzLCBpbmRleCwgIH0pID0+IHtcbiAgY29uc3QgW3dlaWdodCwgc2V0V2VpZ2h0XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbcmVwcywgc2V0UmVwc10gPSB1c2VTdGF0ZSgwKTtcblxuICBmdW5jdGlvbiBoYW5kbGVXZWlnaHRDaGFuZ2UoZSkge1xuICAgIHNldFdlaWdodChlLnRhcmdldC52YWx1ZSA+PSAxID8gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpIDogMCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVSZXBzQ2hhbmdlKGUpIHtcbiAgICBzZXRSZXBzKGUudGFyZ2V0LnZhbHVlID49IDEgPyBwYXJzZUludChlLnRhcmdldC52YWx1ZSkgOiAwKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY29weUFycmF5ID0gWy4uLnNldHNdO1xuICAgIGNvcHlBcnJheVtpbmRleF0gPSB7IHdlaWdodCwgcmVwcyB9O1xuICAgIHNldFNldHMoY29weUFycmF5KTtcbiAgfSwgW3dlaWdodCwgcmVwc10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtZDpqdXN0aWZ5LXN0YXJ0IG1kOmdhcC00IGl0ZW1zLWNlbnRlciBtYi0xXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctOSBiZy1MaWdodFB1cnBsZSByb3VuZGVkLW1kIHB5LTEuNSBweC0yXCI+XG4gICAgICAgIDxwPntpbmRleCArIDF9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGJnLUxpZ2h0UHVycGxlIG1kOmdyb3cgbWQ6anVzdGlmeS1hcm91bmQgcm91bmRlZC1tZCBnYXAtNSBweS0xIHB4LTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41XCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWQ6ZmxleFwiPldlaWdodDo8L3A+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwIHRleHQtRGVlcFB1cnBsZSBiZy1wbGF0aW51bSByb3VuZGVkLW1kIHB5LTAuNSBweC0yXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVXZWlnaHRDaGFuZ2V9XG4gICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+a2c8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjVcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj5SZXBzOjwvcD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAgdGV4dC1EZWVwUHVycGxlIGJnLXBsYXRpbnVtIHJvdW5kZWQtbWQgcHktMC41IHB4LTJcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVJlcHNDaGFuZ2V9XG4gICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU2V0Q29udGFpbmVyIiwic2V0U2V0cyIsInNldHMiLCJpbmRleCIsIndlaWdodCIsInNldFdlaWdodCIsInJlcHMiLCJzZXRSZXBzIiwiaGFuZGxlV2VpZ2h0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwicGFyc2VJbnQiLCJoYW5kbGVSZXBzQ2hhbmdlIiwiY29weUFycmF5IiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImlucHV0Iiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Log/SetContainer.js\n"));

/***/ })

});