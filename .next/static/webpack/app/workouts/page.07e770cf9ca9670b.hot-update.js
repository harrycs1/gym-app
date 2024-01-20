"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/workouts/page",{

/***/ "(app-pages-browser)/./src/app/workouts/page.js":
/*!**********************************!*\
  !*** ./src/app/workouts/page.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WorkoutsPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_components_General_LoadingSkeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/components/General/LoadingSkeleton */ \"(app-pages-browser)/./src/app/components/General/LoadingSkeleton.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_workouts_WorkoutCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/workouts/WorkoutCard */ \"(app-pages-browser)/./src/app/components/workouts/WorkoutCard.jsx\");\n/* harmony import */ var _app_components_General_ErrorPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/General/ErrorPage */ \"(app-pages-browser)/./src/app/components/General/ErrorPage.jsx\");\n/* harmony import */ var _app_contexts_userContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/contexts/userContext */ \"(app-pages-browser)/./src/app/contexts/userContext.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../style */ \"(app-pages-browser)/./src/app/style.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction WorkoutsPage() {\n    _s();\n    const { user, setUser } = (0,_app_contexts_userContext__WEBPACK_IMPORTED_MODULE_5__.useUserContext)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [isError, setIsError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isWorkoutError, setIsWorkoutError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [workouts, setWorkouts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [inputIsHidden, setInputIsHidden] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"hidden\");\n    const [workoutName, setWorkoutName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [isDeleted, setIsDeleted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetch(\"/api/workouts\").then((res)=>{\n            if (!res.ok) {\n                throw res;\n            }\n            return res.json();\n        }).then((data)=>{\n            if (!user) {\n                setWorkouts([]);\n            } else {\n                const workoutData = data.filter((workout)=>workout.creator_id === user.user_id);\n                setWorkouts(workoutData);\n            }\n        }).catch((error)=>{\n            setIsError(error);\n        }).finally(()=>{\n            setIsLoading(false);\n        });\n    }, []);\n    function handleNameInput(event) {\n        setWorkoutName(event.target.value);\n    }\n    function handleToggleForm() {\n        inputIsHidden === \"hidden\" ? setInputIsHidden(\"\") : setInputIsHidden(\"hidden\");\n    }\n    const handleSubmitForm = (event)=>{\n        event.preventDefault();\n        if (!workoutName) {\n            setIsWorkoutError(\"Workout name is empty.\");\n            setTimeout(()=>{\n                setIsWorkoutError(\"\");\n            }, 3000);\n        } else {\n            setWorkouts([\n                ...workouts,\n                {\n                    creator_id: user.user_id,\n                    workout_name: workoutName,\n                    workout_id: \"temp\"\n                }\n            ]);\n            fetch(\"/api/workouts\", {\n                method: \"POST\",\n                header: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    creator_id: user.user_id,\n                    workout_name: workoutName\n                })\n            }).then((res)=>{\n                setWorkoutName(\"\");\n                if (!res.ok) {\n                    throw res;\n                }\n                return res.json();\n            }).then((data)=>{\n                setWorkouts([\n                    ...workouts,\n                    data.newWorkout\n                ]);\n            }).catch((error)=>{\n                setIsError(error);\n            }).finally(()=>{\n                setInputIsHidden(false);\n                setIsLoading(false);\n            });\n        }\n    };\n    if (isError) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_General_ErrorPage__WEBPACK_IMPORTED_MODULE_4__.ErrorPage, {\n        error: Error\n    }, void 0, false, {\n        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n        lineNumber: 94,\n        columnNumber: 23\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat(_style__WEBPACK_IMPORTED_MODULE_6__[\"default\"].bodySection),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"\".concat(_style__WEBPACK_IMPORTED_MODULE_6__[\"default\"].title),\n                        children: \"My Workouts\"\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, this),\n                    isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_General_LoadingSkeleton__WEBPACK_IMPORTED_MODULE_1__.LoadingSkeleton, {}, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                        lineNumber: 101,\n                        columnNumber: 24\n                    }, this) : null,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            !workouts.length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"my-10 text-xl text-LightPurple\",\n                                children: \"Get started!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                                lineNumber: 103,\n                                columnNumber: 33\n                            }, this) : null,\n                            workouts.map((workout)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_workouts_WorkoutCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        workout: workout,\n                                        setWorkouts: setWorkouts,\n                                        setIsDeleted: setIsDeleted,\n                                        canDelete: true\n                                    }, void 0, false, {\n                                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                                        lineNumber: 107,\n                                        columnNumber: 19\n                                    }, this)\n                                }, workout.workout_id, false, {\n                                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                                    lineNumber: 106,\n                                    columnNumber: 17\n                                }, this);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, this),\n                    isDeleted ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Workout deleted.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                        lineNumber: 112,\n                        columnNumber: 24\n                    }, this) : null,\n                    isWorkoutError ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: isWorkoutError\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                        lineNumber: 113,\n                        columnNumber: 29\n                    }, this) : null,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                    href: \"/browse\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"\".concat(_style__WEBPACK_IMPORTED_MODULE_6__[\"default\"].button),\n                                        children: \"Browse our workouts\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                                        lineNumber: 117,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                                    lineNumber: 116,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                                lineNumber: 115,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"rounded-lg p-3 mt-2 w-fit text-platinum bg-DeepPurple overflow-hidden flex-column\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleToggleForm,\n                                        children: \"Create your own\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                                        lineNumber: 121,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                        onSubmit: handleSubmitForm,\n                                        className: \"\".concat(inputIsHidden, \" flex mt-3 border rounded-xl overflow-hidden\"),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                value: workoutName,\n                                                onChange: handleNameInput,\n                                                placeholder: \"Workout name\",\n                                                className: \"py-1 px-2 w-[80%] h-9 text-DeepPurple\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                                                lineNumber: 125,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"px-2 py-1 w-fit text-platinum bg-DeepPurple\",\n                                                children: \"Submit\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                                                lineNumber: 126,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                                        lineNumber: 124,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                                lineNumber: 120,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                        lineNumber: 114,\n                        columnNumber: 11\n                    }, this),\n                    isError ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Problem loading workouts. Please try again.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                        lineNumber: 130,\n                        columnNumber: 22\n                    }, this) : null\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                lineNumber: 99,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n            lineNumber: 98,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n        lineNumber: 97,\n        columnNumber: 5\n    }, this);\n}\n_s(WorkoutsPage, \"KKBIzx6FV2A+JCT5u2iuBLr7BAY=\", false, function() {\n    return [\n        _app_contexts_userContext__WEBPACK_IMPORTED_MODULE_5__.useUserContext\n    ];\n});\n_c = WorkoutsPage;\nvar _c;\n$RefreshReg$(_c, \"WorkoutsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvd29ya291dHMvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRTJFO0FBQy9CO0FBQ2lCO0FBQ0U7QUFDSDtBQUM5QjtBQUNEO0FBRWQsU0FBU1E7O0lBQ3RCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUUsR0FBR0wseUVBQWNBO0lBQ3hDLE1BQU0sQ0FBQ00sV0FBV0MsYUFBYSxHQUFHViwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNXLFNBQVNDLFdBQVcsR0FBR1osK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDYSxnQkFBZ0JDLGtCQUFrQixHQUFHZCwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNLENBQUNlLFVBQVVDLFlBQVksR0FBR2hCLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDaUIsZUFBZUMsaUJBQWlCLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNtQixhQUFhQyxlQUFlLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNxQixXQUFXQyxhQUFhLEdBQUd0QiwrQ0FBUUEsQ0FBQztJQUUzQ0QsZ0RBQVNBLENBQUM7UUFDUndCLE1BQU8saUJBQ05DLElBQUksQ0FBQyxDQUFDQztZQUNMLElBQUksQ0FBQ0EsSUFBSUMsRUFBRSxFQUFFO2dCQUFFLE1BQU1EO1lBQUk7WUFDekIsT0FBT0EsSUFBSUUsSUFBSTtRQUNqQixHQUNDSCxJQUFJLENBQUMsQ0FBQ0k7WUFDTCxJQUFHLENBQUNyQixNQUFLO2dCQUNQUyxZQUFZLEVBQUU7WUFDaEIsT0FBSztnQkFDSCxNQUFNYSxjQUFjRCxLQUFLRSxNQUFNLENBQzdCLENBQUNDLFVBQVlBLFFBQVFDLFVBQVUsS0FBS3pCLEtBQUswQixPQUFPO2dCQUVsRGpCLFlBQVlhO1lBQ2Q7UUFDRixHQUNDSyxLQUFLLENBQUMsQ0FBQ0M7WUFDTnZCLFdBQVd1QjtRQUNiLEdBQ0NDLE9BQU8sQ0FB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T1osV0FBWTswREFBOEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFJdkU1Qyx3QkFBVSw4REFBQ21EO2tDQUFFOzs7OzsrQkFBa0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzFFO0dBNUh3QnhEOztRQUNJSCxxRUFBY0E7OztLQURsQkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC93b3Jrb3V0cy9wYWdlLmpzPzk4OTQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IExvYWRpbmdTa2VsZXRvbiB9IGZyb20gXCJAL2FwcC9jb21wb25lbnRzL0dlbmVyYWwvTG9hZGluZ1NrZWxldG9uXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgV29ya291dENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvd29ya291dHMvV29ya291dENhcmRcIjtcbmltcG9ydCB7IEVycm9yUGFnZSB9IGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvR2VuZXJhbC9FcnJvclBhZ2UnO1xuaW1wb3J0IHsgdXNlVXNlckNvbnRleHQgfSBmcm9tIFwiQC9hcHAvY29udGV4dHMvdXNlckNvbnRleHRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmtvdXRzUGFnZSgpIHtcbiAgY29uc3QgeyB1c2VyLCBzZXRVc2VyIH0gPSB1c2VVc2VyQ29udGV4dCgpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtpc0Vycm9yLCBzZXRJc0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzV29ya291dEVycm9yLCBzZXRJc1dvcmtvdXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt3b3Jrb3V0cywgc2V0V29ya291dHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaW5wdXRJc0hpZGRlbiwgc2V0SW5wdXRJc0hpZGRlbl0gPSB1c2VTdGF0ZSgnaGlkZGVuJyk7XG4gIGNvbnN0IFt3b3Jrb3V0TmFtZSwgc2V0V29ya291dE5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbaXNEZWxldGVkLCBzZXRJc0RlbGV0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goYC9hcGkvd29ya291dHNgKVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmICghcmVzLm9rKSB7IHRocm93IHJlcyB9XG4gICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgIH0pXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmKCF1c2VyKXtcbiAgICAgICAgc2V0V29ya291dHMoW10pXG4gICAgICB9ZWxzZXtcbiAgICAgICAgY29uc3Qgd29ya291dERhdGEgPSBkYXRhLmZpbHRlcihcbiAgICAgICAgICAod29ya291dCkgPT4gd29ya291dC5jcmVhdG9yX2lkID09PSB1c2VyLnVzZXJfaWRcbiAgICAgICAgKTtcbiAgICAgICAgc2V0V29ya291dHMod29ya291dERhdGEpXG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBzZXRJc0Vycm9yKGVycm9yKVxuICAgIH0pXG4gICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICAgIH0pXG4gIH0sIFtdKVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU5hbWVJbnB1dChldmVudCkge1xuICAgIHNldFdvcmtvdXROYW1lKGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVRvZ2dsZUZvcm0gKCkge1xuICAgIGlucHV0SXNIaWRkZW4gPT09ICdoaWRkZW4nID8gc2V0SW5wdXRJc0hpZGRlbignJykgOiBzZXRJbnB1dElzSGlkZGVuKCdoaWRkZW4nKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdEZvcm0gPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKCF3b3Jrb3V0TmFtZSkge1xuICAgICAgc2V0SXNXb3Jrb3V0RXJyb3IoJ1dvcmtvdXQgbmFtZSBpcyBlbXB0eS4nKVxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0SXNXb3Jrb3V0RXJyb3IoJycpXG4gICAgfSwgMzAwMClcbiAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0V29ya291dHMoWy4uLndvcmtvdXRzLCB7IGNyZWF0b3JfaWQ6IHVzZXIudXNlcl9pZCwgd29ya291dF9uYW1lOiB3b3Jrb3V0TmFtZSwgd29ya291dF9pZDogJ3RlbXAnfV0pXG5cbiAgICAgIGZldGNoKGAvYXBpL3dvcmtvdXRzYCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBjcmVhdG9yX2lkOiB1c2VyLnVzZXJfaWQsXG4gICAgICAgICAgd29ya291dF9uYW1lOiB3b3Jrb3V0TmFtZSxcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHNldFdvcmtvdXROYW1lKCcnKVxuICAgICAgICBpZiAoIXJlcy5vaykgeyB0aHJvdyByZXMgfVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgfSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldFdvcmtvdXRzKFsuLi53b3Jrb3V0cywgZGF0YS5uZXdXb3Jrb3V0XSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHNldElzRXJyb3IoZXJyb3IpXG4gICAgICB9KVxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICBzZXRJbnB1dElzSGlkZGVuKGZhbHNlKVxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGlmIChpc0Vycm9yKSByZXR1cm4gPEVycm9yUGFnZSBlcnJvcj17RXJyb3J9Lz5cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YGZsZXgganVzdGlmeS1jZW50ZXJgfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYm9keVNlY3Rpb259YH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17YCR7c3R5bGVzLnRpdGxlfWB9Pk15IFdvcmtvdXRzPC9oMT5cbiAgICAgICAgICB7aXNMb2FkaW5nID8gPExvYWRpbmdTa2VsZXRvbi8+IDogbnVsbH1cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7IXdvcmtvdXRzLmxlbmd0aCA/IDxwIGNsYXNzTmFtZT1cIm15LTEwIHRleHQteGwgdGV4dC1MaWdodFB1cnBsZVwiPkdldCBzdGFydGVkITwvcD4gOiBudWxsfVxuICAgICAgICAgICAge3dvcmtvdXRzLm1hcCgod29ya291dCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e3dvcmtvdXQud29ya291dF9pZH0+XG4gICAgICAgICAgICAgICAgICA8V29ya291dENhcmQgd29ya291dD17d29ya291dH0gc2V0V29ya291dHM9e3NldFdvcmtvdXRzfSBzZXRJc0RlbGV0ZWQ9e3NldElzRGVsZXRlZH0gY2FuRGVsZXRlPXt0cnVlfS8+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICB7aXNEZWxldGVkID8gPHA+V29ya291dCBkZWxldGVkLjwvcD46IG51bGx9XG4gICAgICAgICAge2lzV29ya291dEVycm9yID8gPHA+e2lzV29ya291dEVycm9yfTwvcD4gOiBudWxsfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9icm93c2VcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLmJ1dHRvbn1gfT5Ccm93c2Ugb3VyIHdvcmtvdXRzPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Byb3VuZGVkLWxnIHAtMyBtdC0yIHctZml0IHRleHQtcGxhdGludW0gYmctRGVlcFB1cnBsZSBvdmVyZmxvdy1oaWRkZW4gZmxleC1jb2x1bW5gfT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUb2dnbGVGb3JtfVxuICAgICAgICAgICAgICA+Q3JlYXRlIHlvdXIgb3duPC9idXR0b24+XG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXRGb3JtfSBjbGFzc05hbWU9e2Ake2lucHV0SXNIaWRkZW59IGZsZXggbXQtMyBib3JkZXIgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW5gfT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3dvcmtvdXROYW1lfSBvbkNoYW5nZT17aGFuZGxlTmFtZUlucHV0fSBwbGFjZWhvbGRlcj1cIldvcmtvdXQgbmFtZVwiIGNsYXNzTmFtZT1cInB5LTEgcHgtMiB3LVs4MCVdIGgtOSB0ZXh0LURlZXBQdXJwbGVcIj48L2lucHV0PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgcHgtMiBweS0xIHctZml0IHRleHQtcGxhdGludW0gYmctRGVlcFB1cnBsZWB9PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7aXNFcnJvciA/IDxwPlByb2JsZW0gbG9hZGluZyB3b3Jrb3V0cy4gUGxlYXNlIHRyeSBhZ2Fpbi48L3A+IDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTG9hZGluZ1NrZWxldG9uIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJXb3Jrb3V0Q2FyZCIsIkVycm9yUGFnZSIsInVzZVVzZXJDb250ZXh0Iiwic3R5bGVzIiwiTGluayIsIldvcmtvdXRzUGFnZSIsInVzZXIiLCJzZXRVc2VyIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaXNFcnJvciIsInNldElzRXJyb3IiLCJpc1dvcmtvdXRFcnJvciIsInNldElzV29ya291dEVycm9yIiwid29ya291dHMiLCJzZXRXb3Jrb3V0cyIsImlucHV0SXNIaWRkZW4iLCJzZXRJbnB1dElzSGlkZGVuIiwid29ya291dE5hbWUiLCJzZXRXb3Jrb3V0TmFtZSIsImlzRGVsZXRlZCIsInNldElzRGVsZXRlZCIsImZldGNoIiwidGhlbiIsInJlcyIsIm9rIiwianNvbiIsImRhdGEiLCJ3b3Jrb3V0RGF0YSIsImZpbHRlciIsIndvcmtvdXQiLCJjcmVhdG9yX2lkIiwidXNlcl9pZCIsImNhdGNoIiwiZXJyb3IiLCJmaW5hbGx5IiwiaGFuZGxlTmFtZUlucHV0IiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVRvZ2dsZUZvcm0iLCJoYW5kbGVTdWJtaXRGb3JtIiwicHJldmVudERlZmF1bHQiLCJzZXRUaW1lb3V0Iiwid29ya291dF9uYW1lIiwid29ya291dF9pZCIsIm1ldGhvZCIsImhlYWRlciIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibmV3V29ya291dCIsIkVycm9yIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImJvZHlTZWN0aW9uIiwiaDEiLCJ0aXRsZSIsInVsIiwibGVuZ3RoIiwicCIsIm1hcCIsImxpIiwiY2FuRGVsZXRlIiwiaHJlZiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/workouts/page.js\n"));

/***/ })

});