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

/***/ "(app-pages-browser)/./src/app/components/Log/SetsContainer.js":
/*!*************************************************!*\
  !*** ./src/app/components/Log/SetsContainer.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SetsContainer: function() { return /* binding */ SetsContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _SetContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SetContainer */ \"(app-pages-browser)/./src/app/components/Log/SetContainer.js\");\n\n\nconst SetsContainer = (param)=>{\n    let { sets, setSets } = param;\n    function handleAddSet(e) {\n        setSets([\n            ...sets,\n            {\n                weight: 0,\n                reps: 0\n            }\n        ]);\n    }\n    function handleDeleteSet(e) {\n        const amendedSets = [\n            ...sets.slice(0, sets.length - 1)\n        ];\n        setSets(amendedSets);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col\",\n        children: [\n            sets.map((set, index)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"border border-LightPurple\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SetContainer__WEBPACK_IMPORTED_MODULE_1__.SetContainer, {\n                        sets: sets,\n                        setSets: setSets,\n                        index: index,\n                        handleDeleteSet: handleDeleteSet\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/SetsContainer.js\",\n                        lineNumber: 19,\n                        columnNumber: 13\n                    }, undefined)\n                }, index, false, {\n                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/SetsContainer.js\",\n                    lineNumber: 18,\n                    columnNumber: 11\n                }, undefined);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"ml-5 border rounded p-1 w-24\",\n                        onClick: handleAddSet,\n                        children: \"Add Set\"\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/SetsContainer.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"ml-5 border rounded p-1 transition-[0.3s] z-[10] \".concat(sets.length === 1 ? \"opacity-30\" : null),\n                        onClick: handleDeleteSet,\n                        disabled: sets.length === 1,\n                        children: \"Remove Set\"\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/SetsContainer.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/SetsContainer.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/SetsContainer.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_c = SetsContainer;\nvar _c;\n$RefreshReg$(_c, \"SetsContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Mb2cvU2V0c0NvbnRhaW5lci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQThDO0FBRXZDLE1BQU1DLGdCQUFnQjtRQUFDLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFO0lBQzdDLFNBQVNDLGFBQWFDLENBQUM7UUFDckJGLFFBQVE7ZUFBSUQ7WUFBTTtnQkFBRUksUUFBUTtnQkFBR0MsTUFBTTtZQUFFO1NBQUU7SUFDM0M7SUFFQSxTQUFTQyxnQkFBZ0JILENBQUM7UUFDeEIsTUFBTUksY0FBYztlQUFJUCxLQUFLUSxLQUFLLENBQUMsR0FBR1IsS0FBS1MsTUFBTSxHQUFHO1NBQUc7UUFFdkRSLFFBQVFNO0lBQ1Y7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7WUFDWlgsS0FBS1ksR0FBRyxDQUFDLENBQUNDLEtBQUtDO2dCQUNkLHFCQUNFLDhEQUFDSjtvQkFBZ0JDLFdBQVU7OEJBQ3pCLDRFQUFDYix1REFBWUE7d0JBQ1hFLE1BQU1BO3dCQUNOQyxTQUFTQTt3QkFDVGEsT0FBT0E7d0JBQ1BSLGlCQUFpQkE7Ozs7OzttQkFMWFE7Ozs7O1lBU2Q7MEJBRUEsOERBQUNKO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0k7d0JBQU9KLFdBQVU7d0JBQStCSyxTQUFTZDtrQ0FBYzs7Ozs7O2tDQUd4RSw4REFBQ2E7d0JBQ0NKLFdBQVcsb0RBRVYsT0FEQ1gsS0FBS1MsTUFBTSxLQUFLLElBQUksZUFBZTt3QkFFckNPLFNBQVNWO3dCQUNUVyxVQUFVakIsS0FBS1MsTUFBTSxLQUFLO2tDQUMzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQsRUFBRTtLQTFDV1YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0xvZy9TZXRzQ29udGFpbmVyLmpzPzIyZmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2V0Q29udGFpbmVyIH0gZnJvbSBcIi4vU2V0Q29udGFpbmVyXCI7XG5cbmV4cG9ydCBjb25zdCBTZXRzQ29udGFpbmVyID0gKHsgc2V0cywgc2V0U2V0cyB9KSA9PiB7XG4gIGZ1bmN0aW9uIGhhbmRsZUFkZFNldChlKSB7XG4gICAgc2V0U2V0cyhbLi4uc2V0cywgeyB3ZWlnaHQ6IDAsIHJlcHM6IDAgfV0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRGVsZXRlU2V0KGUpIHtcbiAgICBjb25zdCBhbWVuZGVkU2V0cyA9IFsuLi5zZXRzLnNsaWNlKDAsIHNldHMubGVuZ3RoIC0gMSldO1xuXG4gICAgc2V0U2V0cyhhbWVuZGVkU2V0cyk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAge3NldHMubWFwKChzZXQsIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLUxpZ2h0UHVycGxlXCI+XG4gICAgICAgICAgICA8U2V0Q29udGFpbmVyXG4gICAgICAgICAgICAgIHNldHM9e3NldHN9XG4gICAgICAgICAgICAgIHNldFNldHM9e3NldFNldHN9XG4gICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgaGFuZGxlRGVsZXRlU2V0PXtoYW5kbGVEZWxldGVTZXR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSl9XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibWwtNSBib3JkZXIgcm91bmRlZCBwLTEgdy0yNFwiIG9uQ2xpY2s9e2hhbmRsZUFkZFNldH0+XG4gICAgICAgICAgQWRkIFNldFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17YG1sLTUgYm9yZGVyIHJvdW5kZWQgcC0xIHRyYW5zaXRpb24tWzAuM3NdIHotWzEwXSAke1xuICAgICAgICAgICAgc2V0cy5sZW5ndGggPT09IDEgPyBcIm9wYWNpdHktMzBcIiA6IG51bGxcbiAgICAgICAgICB9YH1cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEZWxldGVTZXR9XG4gICAgICAgICAgZGlzYWJsZWQ9e3NldHMubGVuZ3RoID09PSAxfVxuICAgICAgICA+XG4gICAgICAgICAgUmVtb3ZlIFNldFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJTZXRDb250YWluZXIiLCJTZXRzQ29udGFpbmVyIiwic2V0cyIsInNldFNldHMiLCJoYW5kbGVBZGRTZXQiLCJlIiwid2VpZ2h0IiwicmVwcyIsImhhbmRsZURlbGV0ZVNldCIsImFtZW5kZWRTZXRzIiwic2xpY2UiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJzZXQiLCJpbmRleCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Log/SetsContainer.js\n"));

/***/ })

});