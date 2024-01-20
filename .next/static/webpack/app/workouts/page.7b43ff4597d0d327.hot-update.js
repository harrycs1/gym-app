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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WorkoutsPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_components_General_LoadingSkeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/components/General/LoadingSkeleton */ \"(app-pages-browser)/./src/app/components/General/LoadingSkeleton.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_workouts_WorkoutCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/workouts/WorkoutCard */ \"(app-pages-browser)/./src/app/components/workouts/WorkoutCard.jsx\");\n/* harmony import */ var _app_components_General_ErrorPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/General/ErrorPage */ \"(app-pages-browser)/./src/app/components/General/ErrorPage.jsx\");\n/* harmony import */ var _app_contexts_userContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/contexts/userContext */ \"(app-pages-browser)/./src/app/contexts/userContext.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../style */ \"(app-pages-browser)/./src/app/style.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction WorkoutsPage() {\n    _s();\n    const { user, setUser } = (0,_app_contexts_userContext__WEBPACK_IMPORTED_MODULE_5__.useUserContext)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [isError, setIsError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isWorkoutError, setIsWorkoutError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [workouts, setWorkouts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [inputIsHidden, setInputIsHidden] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"hidden\");\n    const [workoutName, setWorkoutName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [isDeleted, setIsDeleted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetch(\"/api/workouts\").then((res)=>{\n            if (!res.ok) {\n                throw res;\n            }\n            return res.json();\n        }).then((data)=>{\n            if (!user) {\n                setWorkouts([]);\n            } else {\n                const workoutData = data.filter((workout)=>workout.creator_id === user.user_id);\n                setWorkouts(workoutData);\n            }\n        }).catch((error)=>{\n            setIsError(error);\n        }).finally(()=>{\n            setIsLoading(false);\n        });\n    }, []);\n    function handleNameInput(event) {\n        setWorkoutName(event.target.value);\n    }\n    function handleToggleForm() {\n        inputIsHidden === \"hidden\" ? setInputIsHidden(\"\") : setInputIsHidden(\"hidden\");\n    }\n    const handleSubmitForm = (event)=>{\n        event.preventDefault();\n        if (!workoutName) {\n            setIsWorkoutError(\"Workout name is empty.\");\n            setTimeout(()=>{\n                setIsWorkoutError(\"\");\n            }, 3000);\n        } else {\n            setWorkouts([\n                ...workouts,\n                {\n                    creator_id: user.user_id,\n                    workout_name: workoutName,\n                    workout_id: \"temp\"\n                }\n            ]);\n            fetch(\"/api/workouts\", {\n                method: \"POST\",\n                header: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    creator_id: user.user_id,\n                    workout_name: workoutName\n                })\n            }).then((res)=>{\n                setWorkoutName(\"\");\n                if (!res.ok) {\n                    throw res;\n                }\n                return res.json();\n            }).then((data)=>{\n                setWorkouts([\n                    ...workouts,\n                    data.newWorkout\n                ]);\n            }).catch((error)=>{\n                setIsError(error);\n            }).finally(()=>{\n                setInputIsHidden(false);\n                setIsLoading(false);\n            });\n        }\n    };\n    if (isError) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_General_ErrorPage__WEBPACK_IMPORTED_MODULE_4__.ErrorPage, {\n        error: Error\n    }, void 0, false, {\n        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n        lineNumber: 94,\n        columnNumber: 23\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat(_style__WEBPACK_IMPORTED_MODULE_6__[\"default\"].bodySection),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"\".concat(_style__WEBPACK_IMPORTED_MODULE_6__[\"default\"].title),\n                    children: \"My Workouts\"\n                }, void 0, false, {\n                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                    lineNumber: 99,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" pt-20 pb-10 flex flex-col items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full mt-10 mb-5\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                children: [\n                                    isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_General_LoadingSkeleton__WEBPACK_IMPORTED_MODULE_1__.LoadingSkeleton, {}, void 0, false, {\n                                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                                        lineNumber: 103,\n                                        columnNumber: 26\n                                    }, this) : !workouts.length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"my-10 text-4xl text-LightPurple\",\n                                        children: \"Get started!\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                                        lineNumber: 103,\n                                        columnNumber: 66\n                                    }, this) : null,\n                                    workouts.map((workout)=>{\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_workouts_WorkoutCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                workout: workout,\n                                                setWorkouts: setWorkouts,\n                                                setIsDeleted: setIsDeleted,\n                                                canDelete: true\n                                            }, void 0, false, {\n                                                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                                                lineNumber: 107,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, workout.workout_id, false, {\n                                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                                            lineNumber: 106,\n                                            columnNumber: 19\n                                        }, this);\n                                    })\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                                lineNumber: 102,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, this),\n                        isDeleted ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Workout deleted.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                            lineNumber: 113,\n                            columnNumber: 24\n                        }, this) : null,\n                        isWorkoutError ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: isWorkoutError\n                        }, void 0, false, {\n                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                            lineNumber: 114,\n                            columnNumber: 29\n                        }, this) : null,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-4 w-fit\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                        href: \"/browse\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"\".concat(_style__WEBPACK_IMPORTED_MODULE_6__[\"default\"].button),\n                                            children: \"Browse\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                                            lineNumber: 118,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                                        lineNumber: 117,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                                    lineNumber: 116,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"rounded-lg p-3 mt-2 w-fit text-platinum bg-DeepPurple overflow-hidden flex-column\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: handleToggleForm,\n                                            children: \"Create\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                                            lineNumber: 122,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                            onSubmit: handleSubmitForm,\n                                            className: \"\".concat(inputIsHidden, \" flex mt-3 border rounded-xl overflow-hidden\"),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    value: workoutName,\n                                                    onChange: handleNameInput,\n                                                    placeholder: \"Workout name\",\n                                                    className: \"py-1 px-2 w-[80%] h-9 text-DeepPurple\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                                                    lineNumber: 124,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"px-2 py-1 w-fit text-platinum bg-DeepPurple\",\n                                                    children: \"Submit\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                                                    lineNumber: 125,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                                            lineNumber: 123,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                                    lineNumber: 121,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                            lineNumber: 115,\n                            columnNumber: 11\n                        }, this),\n                        isError ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Problem loading workouts. Please try again.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                            lineNumber: 129,\n                            columnNumber: 22\n                        }, this) : null\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                    lineNumber: 100,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n            lineNumber: 98,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n        lineNumber: 97,\n        columnNumber: 5\n    }, this);\n}\n_s(WorkoutsPage, \"KKBIzx6FV2A+JCT5u2iuBLr7BAY=\", false, function() {\n    return [\n        _app_contexts_userContext__WEBPACK_IMPORTED_MODULE_5__.useUserContext\n    ];\n});\n_c = WorkoutsPage;\nvar _c;\n$RefreshReg$(_c, \"WorkoutsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvd29ya291dHMvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRTJFO0FBQy9CO0FBQ2lCO0FBQ0U7QUFDSDtBQUM5QjtBQUNEO0FBRWQsU0FBU1E7O0lBQ3RCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUUsR0FBR0wseUVBQWNBO0lBQ3hDLE1BQU0sQ0FBQ00sV0FBV0MsYUFBYSxHQUFHViwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNXLFNBQVNDLFdBQVcsR0FBR1osK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDYSxnQkFBZ0JDLGtCQUFrQixHQUFHZCwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNLENBQUNlLFVBQVVDLFlBQVksR0FBR2hCLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDaUIsZUFBZUMsaUJBQWlCLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNtQixhQUFhQyxlQUFlLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNxQixXQUFXQyxhQUFhLEdBQUd0QiwrQ0FBUUEsQ0FBQztJQUUzQ0QsZ0RBQVNBLENBQUM7UUFDUndCLE1BQU8saUJBQ05DLElBQUksQ0FBQyxDQUFDQztZQUNMLElBQUksQ0FBQ0EsSUFBSUMsRUFBRSxFQUFFO2dCQUFFLE1BQU1EO1lBQUk7WUFDekIsT0FBT0EsSUFBSUUsSUFBSTtRQUNqQixHQUNDSCxJQUFJLENBQUMsQ0FBQ0k7WUFDTCxJQUFHLENBQUNyQixNQUFLO2dCQUNQUyxZQUFZLEVBQUU7WUFDaEIsT0FBSztnQkFDSCxNQUFNYSxjQUFjRCxLQUFLRSxNQUFNLENBQzdCLENBQUNDLFVBQVlBLFFBQVFDLFVBQVUsS0FBS3pCLEtBQUswQixPQUFPO2dCQUVsRGpCLFlBQVlhO1lBQ2Q7UUFDRixHQUNDSyxLQUFLLENBQUMsQ0FBQ0M7WUFDTnZCLFdBQVd1QjtRQUNiLEdBQ0NDLE9BQU8sQ0FB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VTs7Ozs7OzhEQUMzRiw4REFBQ1k7b0RBQU9aLFdBQVk7OERBQThDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBSXZFNUMsd0JBQVUsOERBQUNtRDtzQ0FBRTs7Ozs7bUNBQWtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLMUU7R0EzSHdCeEQ7O1FBQ0lILHFFQUFjQTs7O0tBRGxCRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3dvcmtvdXRzL3BhZ2UuanM/OTg5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgTG9hZGluZ1NrZWxldG9uIH0gZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvR2VuZXJhbC9Mb2FkaW5nU2tlbGV0b25cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBXb3Jrb3V0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy93b3Jrb3V0cy9Xb3Jrb3V0Q2FyZFwiO1xuaW1wb3J0IHsgRXJyb3JQYWdlIH0gZnJvbSAnQC9hcHAvY29tcG9uZW50cy9HZW5lcmFsL0Vycm9yUGFnZSc7XG5pbXBvcnQgeyB1c2VVc2VyQ29udGV4dCB9IGZyb20gXCJAL2FwcC9jb250ZXh0cy91c2VyQ29udGV4dFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ya291dHNQYWdlKCkge1xuICBjb25zdCB7IHVzZXIsIHNldFVzZXIgfSA9IHVzZVVzZXJDb250ZXh0KCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2lzRXJyb3IsIHNldElzRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNXb3Jrb3V0RXJyb3IsIHNldElzV29ya291dEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3dvcmtvdXRzLCBzZXRXb3Jrb3V0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtpbnB1dElzSGlkZGVuLCBzZXRJbnB1dElzSGlkZGVuXSA9IHVzZVN0YXRlKCdoaWRkZW4nKTtcbiAgY29uc3QgW3dvcmtvdXROYW1lLCBzZXRXb3Jrb3V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtpc0RlbGV0ZWQsIHNldElzRGVsZXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChgL2FwaS93b3Jrb3V0c2ApXG4gICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKCFyZXMub2spIHsgdGhyb3cgcmVzIH1cbiAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgfSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYoIXVzZXIpe1xuICAgICAgICBzZXRXb3Jrb3V0cyhbXSlcbiAgICAgIH1lbHNle1xuICAgICAgICBjb25zdCB3b3Jrb3V0RGF0YSA9IGRhdGEuZmlsdGVyKFxuICAgICAgICAgICh3b3Jrb3V0KSA9PiB3b3Jrb3V0LmNyZWF0b3JfaWQgPT09IHVzZXIudXNlcl9pZFxuICAgICAgICApO1xuICAgICAgICBzZXRXb3Jrb3V0cyh3b3Jrb3V0RGF0YSlcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIHNldElzRXJyb3IoZXJyb3IpXG4gICAgfSlcbiAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXG4gICAgfSlcbiAgfSwgW10pXG5cbiAgZnVuY3Rpb24gaGFuZGxlTmFtZUlucHV0KGV2ZW50KSB7XG4gICAgc2V0V29ya291dE5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlVG9nZ2xlRm9ybSAoKSB7XG4gICAgaW5wdXRJc0hpZGRlbiA9PT0gJ2hpZGRlbicgPyBzZXRJbnB1dElzSGlkZGVuKCcnKSA6IHNldElucHV0SXNIaWRkZW4oJ2hpZGRlbicpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0Rm9ybSA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoIXdvcmtvdXROYW1lKSB7XG4gICAgICBzZXRJc1dvcmtvdXRFcnJvcignV29ya291dCBuYW1lIGlzIGVtcHR5LicpXG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRJc1dvcmtvdXRFcnJvcignJylcbiAgICB9LCAzMDAwKVxuICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRXb3Jrb3V0cyhbLi4ud29ya291dHMsIHsgY3JlYXRvcl9pZDogdXNlci51c2VyX2lkLCB3b3Jrb3V0X25hbWU6IHdvcmtvdXROYW1lLCB3b3Jrb3V0X2lkOiAndGVtcCd9XSlcblxuICAgICAgZmV0Y2goYC9hcGkvd29ya291dHNgLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGNyZWF0b3JfaWQ6IHVzZXIudXNlcl9pZCxcbiAgICAgICAgICB3b3Jrb3V0X25hbWU6IHdvcmtvdXROYW1lLFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgc2V0V29ya291dE5hbWUoJycpXG4gICAgICAgIGlmICghcmVzLm9rKSB7IHRocm93IHJlcyB9XG4gICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICB9KVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc2V0V29ya291dHMoWy4uLndvcmtvdXRzLCBkYXRhLm5ld1dvcmtvdXRdKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgc2V0SXNFcnJvcihlcnJvcilcbiAgICAgIH0pXG4gICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIHNldElucHV0SXNIaWRkZW4oZmFsc2UpXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaWYgKGlzRXJyb3IpIHJldHVybiA8RXJyb3JQYWdlIGVycm9yPXtFcnJvcn0vPlxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgZmxleCBqdXN0aWZ5LWNlbnRlcmB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5ib2R5U2VjdGlvbn1gfT5cbiAgICAgIDxoMSBjbGFzc05hbWU9e2Ake3N0eWxlcy50aXRsZX1gfT5NeSBXb3Jrb3V0czwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHB0LTIwIHBiLTEwIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtMTAgbWItNVwiPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAge2lzTG9hZGluZyA/IDxMb2FkaW5nU2tlbGV0b24vPiA6ICF3b3Jrb3V0cy5sZW5ndGggPyA8cCBjbGFzc05hbWU9XCJteS0xMCB0ZXh0LTR4bCB0ZXh0LUxpZ2h0UHVycGxlXCI+R2V0IHN0YXJ0ZWQhPC9wPiA6IG51bGx9XG4gICAgICAgICAgICAgIHt3b3Jrb3V0cy5tYXAoKHdvcmtvdXQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17d29ya291dC53b3Jrb3V0X2lkfT5cbiAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRDYXJkIHdvcmtvdXQ9e3dvcmtvdXR9IHNldFdvcmtvdXRzPXtzZXRXb3Jrb3V0c30gc2V0SXNEZWxldGVkPXtzZXRJc0RlbGV0ZWR9IGNhbkRlbGV0ZT17dHJ1ZX0vPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7aXNEZWxldGVkID8gPHA+V29ya291dCBkZWxldGVkLjwvcD46IG51bGx9XG4gICAgICAgICAge2lzV29ya291dEVycm9yID8gPHA+e2lzV29ya291dEVycm9yfTwvcD4gOiBudWxsfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNCB3LWZpdFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9icm93c2VcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLmJ1dHRvbn1gfT5Ccm93c2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHJvdW5kZWQtbGcgcC0zIG10LTIgdy1maXQgdGV4dC1wbGF0aW51bSBiZy1EZWVwUHVycGxlIG92ZXJmbG93LWhpZGRlbiBmbGV4LWNvbHVtbmB9PlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZUZvcm19PkNyZWF0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0Rm9ybX0gY2xhc3NOYW1lPXtgJHtpbnB1dElzSGlkZGVufSBmbGV4IG10LTMgYm9yZGVyIHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuYH0+XG4gICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXt3b3Jrb3V0TmFtZX0gb25DaGFuZ2U9e2hhbmRsZU5hbWVJbnB1dH0gcGxhY2Vob2xkZXI9XCJXb3Jrb3V0IG5hbWVcIiBjbGFzc05hbWU9XCJweS0xIHB4LTIgdy1bODAlXSBoLTkgdGV4dC1EZWVwUHVycGxlXCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YHB4LTIgcHktMSB3LWZpdCB0ZXh0LXBsYXRpbnVtIGJnLURlZXBQdXJwbGVgfT5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2lzRXJyb3IgPyA8cD5Qcm9ibGVtIGxvYWRpbmcgd29ya291dHMuIFBsZWFzZSB0cnkgYWdhaW4uPC9wPiA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxvYWRpbmdTa2VsZXRvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiV29ya291dENhcmQiLCJFcnJvclBhZ2UiLCJ1c2VVc2VyQ29udGV4dCIsInN0eWxlcyIsIkxpbmsiLCJXb3Jrb3V0c1BhZ2UiLCJ1c2VyIiwic2V0VXNlciIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImlzRXJyb3IiLCJzZXRJc0Vycm9yIiwiaXNXb3Jrb3V0RXJyb3IiLCJzZXRJc1dvcmtvdXRFcnJvciIsIndvcmtvdXRzIiwic2V0V29ya291dHMiLCJpbnB1dElzSGlkZGVuIiwic2V0SW5wdXRJc0hpZGRlbiIsIndvcmtvdXROYW1lIiwic2V0V29ya291dE5hbWUiLCJpc0RlbGV0ZWQiLCJzZXRJc0RlbGV0ZWQiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJvayIsImpzb24iLCJkYXRhIiwid29ya291dERhdGEiLCJmaWx0ZXIiLCJ3b3Jrb3V0IiwiY3JlYXRvcl9pZCIsInVzZXJfaWQiLCJjYXRjaCIsImVycm9yIiwiZmluYWxseSIsImhhbmRsZU5hbWVJbnB1dCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVUb2dnbGVGb3JtIiwiaGFuZGxlU3VibWl0Rm9ybSIsInByZXZlbnREZWZhdWx0Iiwic2V0VGltZW91dCIsIndvcmtvdXRfbmFtZSIsIndvcmtvdXRfaWQiLCJtZXRob2QiLCJoZWFkZXIiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5ld1dvcmtvdXQiLCJFcnJvciIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJib2R5U2VjdGlvbiIsImgxIiwidGl0bGUiLCJ1bCIsImxlbmd0aCIsInAiLCJtYXAiLCJsaSIsImNhbkRlbGV0ZSIsImhyZWYiLCJidXR0b24iLCJvbkNsaWNrIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/workouts/page.js\n"));

/***/ })

});