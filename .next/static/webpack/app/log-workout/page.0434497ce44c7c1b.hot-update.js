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

/***/ "(app-pages-browser)/./src/app/components/Log/ChosenExerciseContainer.js":
/*!***********************************************************!*\
  !*** ./src/app/components/Log/ChosenExerciseContainer.js ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ChosenExerciseContainer: function() { return /* binding */ ChosenExerciseContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SetsContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SetsContainer */ \"(app-pages-browser)/./src/app/components/Log/SetsContainer.js\");\n/* harmony import */ var _app_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/style */ \"(app-pages-browser)/./src/app/style.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ChosenExerciseContainer = (param)=>{\n    let { exercise, chosenExercises, setChosenExercises, index, workoutData, setWorkoutData } = param;\n    _s();\n    const exerciseId = exercise.exercise_id;\n    const [sets, setSets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            weight: 0,\n            reps: 0\n        }\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const copyObject = {\n            ...workoutData\n        };\n        copyObject[exerciseId] = sets;\n        setWorkoutData(copyObject);\n    }, [\n        sets\n    ]);\n    function handleRemove(e) {\n        const index = chosenExercises.indexOf(exercise);\n        if (index !== -1) {\n            const amendedChosenExercises = index === 0 ? [\n                ...chosenExercises.slice(1)\n            ] : [\n                ...chosenExercises.slice(0, index),\n                ...chosenExercises.slice(index + 1)\n            ];\n            setChosenExercises(amendedChosenExercises);\n            const copyObject = {\n                ...workoutData\n            };\n            delete copyObject[exerciseId];\n            setWorkoutData(copyObject);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"font-bold\",\n                children: [\n                    index,\n                    \". \",\n                    exercise.name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/ChosenExerciseContainer.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \" text-sm pl-2 pb-2\",\n                children: [\n                    exercise.difficulty,\n                    \" | \",\n                    exercise.equipment\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/ChosenExerciseContainer.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"pl-2 pb-2 hidden\",\n                children: exercise.instructions\n            }, void 0, false, {\n                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/ChosenExerciseContainer.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border flex items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border w-[85%]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SetsContainer__WEBPACK_IMPORTED_MODULE_2__.SetsContainer, {\n                            sets: sets,\n                            setSets: setSets\n                        }, void 0, false, {\n                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/ChosenExerciseContainer.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/ChosenExerciseContainer.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border w-[15%]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"hover:cursor-pointer hover:bg-opacity-70 transition ease-in-out bg-Red\",\n                            onClick: handleRemove,\n                            children: \"Remove\"\n                        }, void 0, false, {\n                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/ChosenExerciseContainer.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/ChosenExerciseContainer.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/ChosenExerciseContainer.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(ChosenExerciseContainer, \"xlZiblRci0Hft+PZQbF0iGU0TLo=\");\n_c = ChosenExerciseContainer;\nvar _c;\n$RefreshReg$(_c, \"ChosenExerciseContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Mb2cvQ2hvc2VuRXhlcmNpc2VDb250YWluZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNEM7QUFDSTtBQUNmO0FBRTFCLE1BQU1JLDBCQUEwQjtRQUFDLEVBQ3RDQyxRQUFRLEVBQ1JDLGVBQWUsRUFDZkMsa0JBQWtCLEVBQ2xCQyxLQUFLLEVBQ0xDLFdBQVcsRUFDWEMsY0FBYyxFQUNmOztJQUNDLE1BQU1DLGFBQWFOLFNBQVNPLFdBQVc7SUFDdkMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdkLCtDQUFRQSxDQUFDO1FBQUM7WUFBRWUsUUFBUTtZQUFHQyxNQUFNO1FBQUU7S0FBRTtJQUV6RGYsZ0RBQVNBLENBQUM7UUFDUixNQUFNZ0IsYUFBYTtZQUFFLEdBQUdSLFdBQVc7UUFBQztRQUNwQ1EsVUFBVSxDQUFDTixXQUFXLEdBQUdFO1FBQ3pCSCxlQUFlTztJQUNqQixHQUFHO1FBQUNKO0tBQUs7SUFFVCxTQUFTSyxhQUFhQyxDQUFDO1FBQ3JCLE1BQU1YLFFBQVFGLGdCQUFnQmMsT0FBTyxDQUFDZjtRQUN0QyxJQUFJRyxVQUFVLENBQUMsR0FBRztZQUNoQixNQUFNYSx5QkFDSmIsVUFBVSxJQUNOO21CQUFJRixnQkFBZ0JnQixLQUFLLENBQUM7YUFBRyxHQUM3QjttQkFDS2hCLGdCQUFnQmdCLEtBQUssQ0FBQyxHQUFHZDttQkFDekJGLGdCQUFnQmdCLEtBQUssQ0FBQ2QsUUFBUTthQUNsQztZQUVQRCxtQkFBbUJjO1lBRW5CLE1BQU1KLGFBQWE7Z0JBQUMsR0FBR1IsV0FBVztZQUFBO1lBQ2xDLE9BQU9RLFVBQVUsQ0FBQ04sV0FBVztZQUM3QkQsZUFBZU87UUFDakI7SUFDRjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ007Z0JBQUVDLFdBQVU7O29CQUNWaEI7b0JBQU07b0JBQUdILFNBQVNvQixJQUFJOzs7Ozs7OzBCQUV6Qiw4REFBQ0Y7Z0JBQUVDLFdBQVU7O29CQUNWbkIsU0FBU3FCLFVBQVU7b0JBQUM7b0JBQUlyQixTQUFTc0IsU0FBUzs7Ozs7OzswQkFFN0MsOERBQUNKO2dCQUFFQyxXQUFVOzBCQUFvQm5CLFNBQVN1QixZQUFZOzs7Ozs7MEJBRXRELDhEQUFDQztnQkFBSUwsV0FBVTs7a0NBQ2IsOERBQUNLO3dCQUFJTCxXQUFVO2tDQUNiLDRFQUFDdEIseURBQWFBOzRCQUFDVyxNQUFNQTs0QkFBTUMsU0FBU0E7Ozs7Ozs7Ozs7O2tDQUV0Qyw4REFBQ2U7d0JBQUlMLFdBQVU7a0NBQ2IsNEVBQUNNOzRCQUFPTixXQUFZOzRCQUF5RU8sU0FBU2I7c0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLOUgsRUFBRTtHQXhEV2Q7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0xvZy9DaG9zZW5FeGVyY2lzZUNvbnRhaW5lci5qcz9lYzdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNldHNDb250YWluZXIgfSBmcm9tIFwiLi9TZXRzQ29udGFpbmVyXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL2FwcC9zdHlsZVwiO1xuXG5leHBvcnQgY29uc3QgQ2hvc2VuRXhlcmNpc2VDb250YWluZXIgPSAoe1xuICBleGVyY2lzZSxcbiAgY2hvc2VuRXhlcmNpc2VzLFxuICBzZXRDaG9zZW5FeGVyY2lzZXMsXG4gIGluZGV4LFxuICB3b3Jrb3V0RGF0YSxcbiAgc2V0V29ya291dERhdGEsXG59KSA9PiB7XG4gIGNvbnN0IGV4ZXJjaXNlSWQgPSBleGVyY2lzZS5leGVyY2lzZV9pZDtcbiAgY29uc3QgW3NldHMsIHNldFNldHNdID0gdXNlU3RhdGUoW3sgd2VpZ2h0OiAwLCByZXBzOiAwIH1dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNvcHlPYmplY3QgPSB7IC4uLndvcmtvdXREYXRhIH07XG4gICAgY29weU9iamVjdFtleGVyY2lzZUlkXSA9IHNldHM7XG4gICAgc2V0V29ya291dERhdGEoY29weU9iamVjdCk7XG4gIH0sIFtzZXRzXSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlUmVtb3ZlKGUpIHtcbiAgICBjb25zdCBpbmRleCA9IGNob3NlbkV4ZXJjaXNlcy5pbmRleE9mKGV4ZXJjaXNlKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBjb25zdCBhbWVuZGVkQ2hvc2VuRXhlcmNpc2VzID1cbiAgICAgICAgaW5kZXggPT09IDBcbiAgICAgICAgICA/IFsuLi5jaG9zZW5FeGVyY2lzZXMuc2xpY2UoMSldXG4gICAgICAgICAgOiBbXG4gICAgICAgICAgICAgIC4uLmNob3NlbkV4ZXJjaXNlcy5zbGljZSgwLCBpbmRleCksXG4gICAgICAgICAgICAgIC4uLmNob3NlbkV4ZXJjaXNlcy5zbGljZShpbmRleCArIDEpLFxuICAgICAgICAgICAgXTtcblxuICAgICAgc2V0Q2hvc2VuRXhlcmNpc2VzKGFtZW5kZWRDaG9zZW5FeGVyY2lzZXMpO1xuICAgICAgXG4gICAgICBjb25zdCBjb3B5T2JqZWN0ID0gey4uLndvcmtvdXREYXRhfVxuICAgICAgZGVsZXRlIGNvcHlPYmplY3RbZXhlcmNpc2VJZF07XG4gICAgICBzZXRXb3Jrb3V0RGF0YShjb3B5T2JqZWN0KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlxuICAgICAgICB7aW5kZXh9LiB7ZXhlcmNpc2UubmFtZX1cbiAgICAgIDwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIiB0ZXh0LXNtIHBsLTIgcGItMlwiPlxuICAgICAgICB7ZXhlcmNpc2UuZGlmZmljdWx0eX0gfCB7ZXhlcmNpc2UuZXF1aXBtZW50fVxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwicGwtMiBwYi0yIGhpZGRlblwiPntleGVyY2lzZS5pbnN0cnVjdGlvbnN9PC9wPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciB3LVs4NSVdXCI+XG4gICAgICAgICAgPFNldHNDb250YWluZXIgc2V0cz17c2V0c30gc2V0U2V0cz17c2V0U2V0c30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHctWzE1JV1cIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YGhvdmVyOmN1cnNvci1wb2ludGVyIGhvdmVyOmJnLW9wYWNpdHktNzAgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBiZy1SZWRgfSBvbkNsaWNrPXtoYW5kbGVSZW1vdmV9PlJlbW92ZTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlNldHNDb250YWluZXIiLCJzdHlsZXMiLCJDaG9zZW5FeGVyY2lzZUNvbnRhaW5lciIsImV4ZXJjaXNlIiwiY2hvc2VuRXhlcmNpc2VzIiwic2V0Q2hvc2VuRXhlcmNpc2VzIiwiaW5kZXgiLCJ3b3Jrb3V0RGF0YSIsInNldFdvcmtvdXREYXRhIiwiZXhlcmNpc2VJZCIsImV4ZXJjaXNlX2lkIiwic2V0cyIsInNldFNldHMiLCJ3ZWlnaHQiLCJyZXBzIiwiY29weU9iamVjdCIsImhhbmRsZVJlbW92ZSIsImUiLCJpbmRleE9mIiwiYW1lbmRlZENob3NlbkV4ZXJjaXNlcyIsInNsaWNlIiwicCIsImNsYXNzTmFtZSIsIm5hbWUiLCJkaWZmaWN1bHR5IiwiZXF1aXBtZW50IiwiaW5zdHJ1Y3Rpb25zIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Log/ChosenExerciseContainer.js\n"));

/***/ })

});