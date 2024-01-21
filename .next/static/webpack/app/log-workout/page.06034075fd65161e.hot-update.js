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

/***/ "(app-pages-browser)/./src/app/log-workout/page.js":
/*!*************************************!*\
  !*** ./src/app/log-workout/page.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LogPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_General_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/General/Title */ \"(app-pages-browser)/./src/app/components/General/Title.js\");\n/* harmony import */ var _components_Log_LogWorkoutContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Log/LogWorkoutContainer */ \"(app-pages-browser)/./src/app/components/Log/LogWorkoutContainer.js\");\n/* harmony import */ var _contexts_userContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/userContext */ \"(app-pages-browser)/./src/app/contexts/userContext.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Log_WorkoutsDropDown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Log/WorkoutsDropDown */ \"(app-pages-browser)/./src/app/components/Log/WorkoutsDropDown.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../style */ \"(app-pages-browser)/./src/app/style.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction LogPage() {\n    _s();\n    const { user, setUser } = (0,_contexts_userContext__WEBPACK_IMPORTED_MODULE_4__.useUserContext)();\n    const [showWorkouts, setShowWorkouts] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const [chosenExercises, setChosenExercises] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [chosenWorkout, setChosenWorkout] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({});\n    const [userWorkouts, setUserWorkouts] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        fetch(\"/api/workouts\").then((res)=>res.json()).then((workoutData)=>{\n            const workoutsByCreator = workoutData.filter((workout)=>workout.creator_id === user.user_id);\n            setUserWorkouts(workoutsByCreator);\n        });\n    }, []);\n    function handleShowWorkouts() {\n        setShowWorkouts(!showWorkouts);\n    }\n    if (!user.user_id) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat(_style__WEBPACK_IMPORTED_MODULE_7__[\"default\"].bodySection),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"mb-5 \".concat(_style__WEBPACK_IMPORTED_MODULE_7__[\"default\"].title),\n                    children: \"My Workouts\"\n                }, void 0, false, {\n                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/log-workout/page.js\",\n                    lineNumber: 37,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/login\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"\".concat(_style__WEBPACK_IMPORTED_MODULE_7__[\"default\"].button),\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/log-workout/page.js\",\n                        lineNumber: 39,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/log-workout/page.js\",\n                    lineNumber: 38,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/log-workout/page.js\",\n            lineNumber: 36,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/log-workout/page.js\",\n        lineNumber: 35,\n        columnNumber: 7\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat(_style__WEBPACK_IMPORTED_MODULE_7__[\"default\"].bodySection),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_General_Title__WEBPACK_IMPORTED_MODULE_2__.Title, {\n                    text: \"Log Workout\"\n                }, void 0, false, {\n                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/log-workout/page.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"ml-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleShowWorkouts,\n                            className: \"ml-5 border p-1 rounded relative\",\n                            children: [\n                                !chosenWorkout.workout_name ? \"Choose a workout\" : \"Chosen Workout\",\n                                \" \",\n                                chosenWorkout.workout_name ? \": \".concat(chosenWorkout.workout_name) : null,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: showWorkouts ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Log_WorkoutsDropDown__WEBPACK_IMPORTED_MODULE_6__.WorkoutsDropDown, {\n                                        setChosenExercises: setChosenExercises,\n                                        setChosenWorkout: setChosenWorkout,\n                                        chosenWorkout: chosenWorkout,\n                                        userWorkouts: userWorkouts\n                                    }, void 0, false, {\n                                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/log-workout/page.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 17\n                                    }, this) : null\n                                }, void 0, false)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/log-workout/page.js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this),\n                        chosenWorkout.workout_name ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Log_LogWorkoutContainer__WEBPACK_IMPORTED_MODULE_3__.LogWorkoutContainer, {\n                            chosenExercises: chosenExercises,\n                            setChosenExercises: setChosenExercises,\n                            chosenWorkout: chosenWorkout\n                        }, void 0, false, {\n                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/log-workout/page.js\",\n                            lineNumber: 70,\n                            columnNumber: 13\n                        }, this) : null\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/log-workout/page.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/log-workout/page.js\",\n            lineNumber: 47,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/log-workout/page.js\",\n        lineNumber: 46,\n        columnNumber: 7\n    }, this);\n}\n_s(LogPage, \"9GSCdmFLx4DcU71/zLp66YGpWJ8=\", false, function() {\n    return [\n        _contexts_userContext__WEBPACK_IMPORTED_MODULE_4__.useUserContext\n    ];\n});\n_c = LogPage;\nvar _c;\n$RefreshReg$(_c, \"LogPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9nLXdvcmtvdXQvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRTZCO0FBQ3VCO0FBQ3dCO0FBQ25CO0FBQ2I7QUFDMEI7QUFDeEM7QUFFZixTQUFTUTs7SUFDdEIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRSxHQUFHUCxxRUFBY0E7SUFDeEMsTUFBTSxDQUFDUSxjQUFjQyxnQkFBZ0IsR0FBR1IsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDUyxpQkFBaUJDLG1CQUFtQixHQUFHViwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3pELE1BQU0sQ0FBQ1csZUFBZUMsaUJBQWlCLEdBQUdaLCtDQUFRQSxDQUFDLENBQUM7SUFDcEQsTUFBTSxDQUFDYSxjQUFjQyxnQkFBZ0IsR0FBR2QsK0NBQVFBLENBQUMsRUFBRTtJQUVuREMsZ0RBQVNBLENBQUM7UUFDUmMsTUFBTyxpQkFDSkMsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUksSUFDdEJGLElBQUksQ0FBQyxDQUFDRztZQUNMLE1BQU1DLG9CQUFvQkQsWUFBWUUsTUFBTSxDQUMxQyxDQUFDQyxVQUFZQSxRQUFRQyxVQUFVLEtBQUtsQixLQUFLbUIsT0FBTztZQUVsRFYsZ0JBQWdCTTtRQUNsQjtJQUNKLEdBQUcsRUFBRTtJQUVMLFNBQVNLO1FBQ1BqQixnQkFBZ0IsQ0FBQ0Q7SUFDbkI7SUFFQSxJQUFJLENBQUNGLEtBQUttQixPQUFPLEVBQ2YscUJBQ0UsOERBQUNFO1FBQVFDLFdBQVk7a0JBQ25CLDRFQUFDQztZQUFJRCxXQUFXLEdBQXNCLE9BQW5CeEIsOENBQU1BLENBQUMwQixXQUFXOzs4QkFDakMsOERBQUNDO29CQUFHSCxXQUFXLFFBQXFCLE9BQWJ4Qiw4Q0FBTUEsQ0FBQzRCLEtBQUs7OEJBQUk7Ozs7Ozs4QkFDdkMsOERBQUNuQyxrREFBSUE7b0JBQUNvQyxNQUFLOzhCQUNULDRFQUFDQzt3QkFBT04sV0FBVyxHQUFpQixPQUFkeEIsOENBQU1BLENBQUM4QixNQUFNO2tDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTWpELHFCQUNFLDhEQUFDQztRQUFLUCxXQUFZO2tCQUNoQiw0RUFBQ0M7WUFBSUQsV0FBVyxHQUFzQixPQUFuQnhCLDhDQUFNQSxDQUFDMEIsV0FBVzs7OEJBQ3JDLDhEQUFDaEMsNERBQUtBO29CQUFDc0MsTUFBTTs7Ozs7OzhCQUNiLDhEQUFDUDtvQkFBSUQsV0FBVTs7c0NBQ2IsOERBQUNNOzRCQUNDRyxTQUFTWDs0QkFDVEUsV0FBVTs7Z0NBRVQsQ0FBQ2hCLGNBQWMwQixZQUFZLEdBQUcscUJBQXFCO2dDQUFrQjtnQ0FDckUxQixjQUFjMEIsWUFBWSxHQUN2QixLQUFnQyxPQUEzQjFCLGNBQWMwQixZQUFZLElBQy9COzhDQUNKOzhDQUNHOUIsNkJBQ0MsOERBQUNMLDhFQUFnQkE7d0NBQ2ZRLG9CQUFvQkE7d0NBQ3BCRSxrQkFBa0JBO3dDQUNsQkQsZUFBZUE7d0NBQ2ZFLGNBQWNBOzs7OzsrQ0FFZDs7Ozs7Ozs7d0JBR1BGLGNBQWMwQixZQUFZLGlCQUN6Qiw4REFBQ3ZDLG9GQUFtQkE7NEJBQ2xCVyxpQkFBaUJBOzRCQUNqQkMsb0JBQW9CQTs0QkFDcEJDLGVBQWVBOzs7OzttQ0FFZjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2Q7R0FyRXdCUDs7UUFDSUwsaUVBQWNBOzs7S0FEbEJLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbG9nLXdvcmtvdXQvcGFnZS5qcz9kZWY4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0dlbmVyYWwvVGl0bGVcIjtcbmltcG9ydCB7IExvZ1dvcmtvdXRDb250YWluZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2cvTG9nV29ya291dENvbnRhaW5lclwiO1xuaW1wb3J0IHsgdXNlVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvdXNlckNvbnRleHRcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFdvcmtvdXRzRHJvcERvd24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2cvV29ya291dHNEcm9wRG93blwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9nUGFnZSgpIHtcbiAgY29uc3QgeyB1c2VyLCBzZXRVc2VyIH0gPSB1c2VVc2VyQ29udGV4dCgpO1xuICBjb25zdCBbc2hvd1dvcmtvdXRzLCBzZXRTaG93V29ya291dHNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY2hvc2VuRXhlcmNpc2VzLCBzZXRDaG9zZW5FeGVyY2lzZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbY2hvc2VuV29ya291dCwgc2V0Q2hvc2VuV29ya291dF0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFt1c2VyV29ya291dHMsIHNldFVzZXJXb3Jrb3V0c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChgL2FwaS93b3Jrb3V0c2ApXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHdvcmtvdXREYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IHdvcmtvdXRzQnlDcmVhdG9yID0gd29ya291dERhdGEuZmlsdGVyKFxuICAgICAgICAgICh3b3Jrb3V0KSA9PiB3b3Jrb3V0LmNyZWF0b3JfaWQgPT09IHVzZXIudXNlcl9pZFxuICAgICAgICApO1xuICAgICAgICBzZXRVc2VyV29ya291dHMod29ya291dHNCeUNyZWF0b3IpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICBmdW5jdGlvbiBoYW5kbGVTaG93V29ya291dHMoKSB7XG4gICAgc2V0U2hvd1dvcmtvdXRzKCFzaG93V29ya291dHMpO1xuICB9XG5cbiAgaWYgKCF1c2VyLnVzZXJfaWQpXG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YGZsZXgganVzdGlmeS1jZW50ZXJgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5ib2R5U2VjdGlvbn1gfT5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2BtYi01ICR7c3R5bGVzLnRpdGxlfWB9Pk15IFdvcmtvdXRzPC9oMT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5idXR0b259YH0+TG9naW48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e2BmbGV4IGp1c3RpZnktY2VudGVyYH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYm9keVNlY3Rpb259YH0+XG4gICAgICAgIDxUaXRsZSB0ZXh0PXtcIkxvZyBXb3Jrb3V0XCJ9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtOFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNob3dXb3Jrb3V0c31cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTUgYm9yZGVyIHAtMSByb3VuZGVkIHJlbGF0aXZlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7IWNob3NlbldvcmtvdXQud29ya291dF9uYW1lID8gXCJDaG9vc2UgYSB3b3Jrb3V0XCIgOiBcIkNob3NlbiBXb3Jrb3V0XCJ9e1wiIFwifVxuICAgICAgICAgICAge2Nob3NlbldvcmtvdXQud29ya291dF9uYW1lXG4gICAgICAgICAgICAgID8gYDogJHtjaG9zZW5Xb3Jrb3V0LndvcmtvdXRfbmFtZX1gXG4gICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIHtzaG93V29ya291dHMgPyAoXG4gICAgICAgICAgICAgICAgPFdvcmtvdXRzRHJvcERvd25cbiAgICAgICAgICAgICAgICAgIHNldENob3NlbkV4ZXJjaXNlcz17c2V0Q2hvc2VuRXhlcmNpc2VzfVxuICAgICAgICAgICAgICAgICAgc2V0Q2hvc2VuV29ya291dD17c2V0Q2hvc2VuV29ya291dH1cbiAgICAgICAgICAgICAgICAgIGNob3NlbldvcmtvdXQ9e2Nob3NlbldvcmtvdXR9XG4gICAgICAgICAgICAgICAgICB1c2VyV29ya291dHM9e3VzZXJXb3Jrb3V0c31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIHtjaG9zZW5Xb3Jrb3V0LndvcmtvdXRfbmFtZSA/IChcbiAgICAgICAgICAgIDxMb2dXb3Jrb3V0Q29udGFpbmVyXG4gICAgICAgICAgICAgIGNob3NlbkV4ZXJjaXNlcz17Y2hvc2VuRXhlcmNpc2VzfVxuICAgICAgICAgICAgICBzZXRDaG9zZW5FeGVyY2lzZXM9e3NldENob3NlbkV4ZXJjaXNlc31cbiAgICAgICAgICAgICAgY2hvc2VuV29ya291dD17Y2hvc2VuV29ya291dH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJUaXRsZSIsIkxvZ1dvcmtvdXRDb250YWluZXIiLCJ1c2VVc2VyQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiV29ya291dHNEcm9wRG93biIsInN0eWxlcyIsIkxvZ1BhZ2UiLCJ1c2VyIiwic2V0VXNlciIsInNob3dXb3Jrb3V0cyIsInNldFNob3dXb3Jrb3V0cyIsImNob3NlbkV4ZXJjaXNlcyIsInNldENob3NlbkV4ZXJjaXNlcyIsImNob3NlbldvcmtvdXQiLCJzZXRDaG9zZW5Xb3Jrb3V0IiwidXNlcldvcmtvdXRzIiwic2V0VXNlcldvcmtvdXRzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsIndvcmtvdXREYXRhIiwid29ya291dHNCeUNyZWF0b3IiLCJmaWx0ZXIiLCJ3b3Jrb3V0IiwiY3JlYXRvcl9pZCIsInVzZXJfaWQiLCJoYW5kbGVTaG93V29ya291dHMiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiYm9keVNlY3Rpb24iLCJoMSIsInRpdGxlIiwiaHJlZiIsImJ1dHRvbiIsIm1haW4iLCJ0ZXh0Iiwib25DbGljayIsIndvcmtvdXRfbmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/log-workout/page.js\n"));

/***/ })

});