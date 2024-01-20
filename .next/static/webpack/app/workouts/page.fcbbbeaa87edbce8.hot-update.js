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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WorkoutsPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_General_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/General/Title */ \"(app-pages-browser)/./src/app/components/General/Title.js\");\n/* harmony import */ var _app_components_General_LoadingSkeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/General/LoadingSkeleton */ \"(app-pages-browser)/./src/app/components/General/LoadingSkeleton.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_workouts_WorkoutCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/workouts/WorkoutCard */ \"(app-pages-browser)/./src/app/components/workouts/WorkoutCard.jsx\");\n/* harmony import */ var _app_components_General_ErrorPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/components/General/ErrorPage */ \"(app-pages-browser)/./src/app/components/General/ErrorPage.jsx\");\n/* harmony import */ var _app_contexts_userContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/contexts/userContext */ \"(app-pages-browser)/./src/app/contexts/userContext.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../style */ \"(app-pages-browser)/./src/app/style.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction WorkoutsPage() {\n    _s();\n    const { user, setUser } = (0,_app_contexts_userContext__WEBPACK_IMPORTED_MODULE_6__.useUserContext)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const [isError, setIsError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [isWorkoutError, setIsWorkoutError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [workouts, setWorkouts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [inputIsHidden, setInputIsHidden] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"hidden\");\n    const [workoutName, setWorkoutName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [isDeleted, setIsDeleted] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        fetch(\"/api/workouts\").then((res)=>{\n            if (!res.ok) {\n                throw res;\n            }\n            return res.json();\n        }).then((data)=>{\n            if (!user) {\n                setWorkouts([]);\n            } else {\n                const workoutData = data.filter((workout)=>workout.creator_id === user.user_id);\n                setWorkouts(workoutData);\n            }\n        }).catch((error)=>{\n            setIsError(error);\n        }).finally(()=>{\n            setIsLoading(false);\n        });\n    }, []);\n    function handleNameInput(event) {\n        setWorkoutName(event.target.value);\n    }\n    function handleToggleForm() {\n        inputIsHidden === \"hidden\" ? setInputIsHidden(\"\") : setInputIsHidden(\"hidden\");\n    }\n    const handleSubmitForm = (event)=>{\n        event.preventDefault();\n        if (!workoutName) {\n            setIsWorkoutError(\"Workout name is empty.\");\n            setTimeout(()=>{\n                setIsWorkoutError(\"\");\n            }, 3000);\n        } else {\n            setWorkouts([\n                ...workouts,\n                {\n                    creator_id: user.user_id,\n                    workout_name: workoutName,\n                    workout_id: \"temp\"\n                }\n            ]);\n            fetch(\"/api/workouts\", {\n                method: \"POST\",\n                header: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    creator_id: user.user_id,\n                    workout_name: workoutName\n                })\n            }).then((res)=>{\n                setWorkoutName(\"\");\n                if (!res.ok) {\n                    throw res;\n                }\n                return res.json();\n            }).then((data)=>{\n                setWorkouts([\n                    ...workouts,\n                    data.newWorkout\n                ]);\n            }).catch((error)=>{\n                setIsError(error);\n            }).finally(()=>{\n                setInputIsHidden(false);\n                setIsLoading(false);\n            });\n        }\n    };\n    if (isError) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_General_ErrorPage__WEBPACK_IMPORTED_MODULE_5__.ErrorPage, {\n        error: Error\n    }, void 0, false, {\n        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n        lineNumber: 94,\n        columnNumber: 23\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat(_style__WEBPACK_IMPORTED_MODULE_7__[\"default\"].bodySection),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"\".concat(_style__WEBPACK_IMPORTED_MODULE_7__[\"default\"].title),\n                    children: \"My Workouts\"\n                }, void 0, false, {\n                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                    lineNumber: 99,\n                    columnNumber: 9\n                }, this),\n                isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_General_LoadingSkeleton__WEBPACK_IMPORTED_MODULE_2__.LoadingSkeleton, {}, void 0, false, {\n                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                    lineNumber: 100,\n                    columnNumber: 22\n                }, this) : null,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: [\n                        !workouts.length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"my-10 text-xl text-LightPurple\",\n                            children: \"Get started!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                            lineNumber: 102,\n                            columnNumber: 31\n                        }, this) : null,\n                        workouts.map((workout)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_workouts_WorkoutCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    workout: workout,\n                                    setWorkouts: setWorkouts,\n                                    setIsDeleted: setIsDeleted,\n                                    canDelete: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                                    lineNumber: 106,\n                                    columnNumber: 17\n                                }, this)\n                            }, workout.workout_id, false, {\n                                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                                lineNumber: 105,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, this),\n                isDeleted ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Workout deleted.\"\n                }, void 0, false, {\n                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                    lineNumber: 111,\n                    columnNumber: 22\n                }, this) : null,\n                isWorkoutError ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: isWorkoutError\n                }, void 0, false, {\n                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                    lineNumber: 112,\n                    columnNumber: 27\n                }, this) : null,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"rounded-lg p-3 mt-2 w-fit text-platinum bg-DeepPurple overflow-hidden flex-column\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleToggleForm,\n                            children: \"Create new workout\"\n                        }, void 0, false, {\n                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                            lineNumber: 114,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmitForm,\n                            className: \"\".concat(inputIsHidden, \" flex mt-3 border rounded-xl overflow-hidden\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    value: workoutName,\n                                    onChange: handleNameInput,\n                                    placeholder: \"Workout name\",\n                                    className: \"py-1 px-2 w-[80%] h-9 text-DeepPurple\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                                    lineNumber: 118,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"px-2 py-1 w-fit text-platinum bg-DeepPurple\",\n                                    children: \"Submit\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                                    lineNumber: 119,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                            lineNumber: 117,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                    lineNumber: 113,\n                    columnNumber: 9\n                }, this),\n                isError ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Problem loading workouts. Please try again.\"\n                }, void 0, false, {\n                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n                    lineNumber: 122,\n                    columnNumber: 20\n                }, this) : null\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n            lineNumber: 98,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/workouts/page.js\",\n        lineNumber: 97,\n        columnNumber: 5\n    }, this);\n}\n_s(WorkoutsPage, \"KKBIzx6FV2A+JCT5u2iuBLr7BAY=\", false, function() {\n    return [\n        _app_contexts_userContext__WEBPACK_IMPORTED_MODULE_6__.useUserContext\n    ];\n});\n_c = WorkoutsPage;\nvar _c;\n$RefreshReg$(_c, \"WorkoutsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvd29ya291dHMvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFb0Q7QUFDdUI7QUFDL0I7QUFDaUI7QUFDRTtBQUNIO0FBQzlCO0FBRWYsU0FBU1E7O0lBQ3RCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUUsR0FBR0oseUVBQWNBO0lBQ3hDLE1BQU0sQ0FBQ0ssV0FBV0MsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNVLFNBQVNDLFdBQVcsR0FBR1gsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDWSxnQkFBZ0JDLGtCQUFrQixHQUFHYiwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNLENBQUNjLFVBQVVDLFlBQVksR0FBR2YsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNnQixlQUFlQyxpQkFBaUIsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sQ0FBQ2tCLGFBQWFDLGVBQWUsR0FBR25CLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ29CLFdBQVdDLGFBQWEsR0FBR3JCLCtDQUFRQSxDQUFDO0lBRTNDRCxnREFBU0EsQ0FBQztRQUNSdUIsTUFBTyxpQkFDTkMsSUFBSSxDQUFDLENBQUNDO1lBQ0wsSUFBSSxDQUFDQSxJQUFJQyxFQUFFLEVBQUU7Z0JBQUUsTUFBTUQ7WUFBSTtZQUN6QixPQUFPQSxJQUFJRSxJQUFJO1FBQ2pCLEdBQ0NILElBQUksQ0FBQyxDQUFDSTtZQUNMLElBQUcsQ0FBQ3JCLE1BQUs7Z0JBQ1BTLFlBQVksRUFBRTtZQUNoQixPQUFLO2dCQUNILE1BQU1hLGNBQWNELEtBQUtFLE1BQU0sQ0FDN0IsQ0FBQ0MsVUFBWUEsUUFBUUMsVUFBVSxLQUFLekIsS0FBSzBCLE9BQU87Z0JBRWxEakIsWUFBWWE7WUFDZDtRQUNGLEdBQ0NLLEtBQUssQ0FBQyxDQUFDQztZQUNOdkIsV0FBV3VCO1FBQ2IsR0FDQ0MsT0FBTyxDQUFD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OTQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IFRpdGxlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvR2VuZXJhbC9UaXRsZVwiO1xuaW1wb3J0IHsgTG9hZGluZ1NrZWxldG9uIH0gZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvR2VuZXJhbC9Mb2FkaW5nU2tlbGV0b25cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBXb3Jrb3V0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy93b3Jrb3V0cy9Xb3Jrb3V0Q2FyZFwiO1xuaW1wb3J0IHsgRXJyb3JQYWdlIH0gZnJvbSAnQC9hcHAvY29tcG9uZW50cy9HZW5lcmFsL0Vycm9yUGFnZSc7XG5pbXBvcnQgeyB1c2VVc2VyQ29udGV4dCB9IGZyb20gXCJAL2FwcC9jb250ZXh0cy91c2VyQ29udGV4dFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ya291dHNQYWdlKCkge1xuICBjb25zdCB7IHVzZXIsIHNldFVzZXIgfSA9IHVzZVVzZXJDb250ZXh0KCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2lzRXJyb3IsIHNldElzRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNXb3Jrb3V0RXJyb3IsIHNldElzV29ya291dEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3dvcmtvdXRzLCBzZXRXb3Jrb3V0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtpbnB1dElzSGlkZGVuLCBzZXRJbnB1dElzSGlkZGVuXSA9IHVzZVN0YXRlKCdoaWRkZW4nKTtcbiAgY29uc3QgW3dvcmtvdXROYW1lLCBzZXRXb3Jrb3V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtpc0RlbGV0ZWQsIHNldElzRGVsZXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChgL2FwaS93b3Jrb3V0c2ApXG4gICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKCFyZXMub2spIHsgdGhyb3cgcmVzIH1cbiAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgfSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYoIXVzZXIpe1xuICAgICAgICBzZXRXb3Jrb3V0cyhbXSlcbiAgICAgIH1lbHNle1xuICAgICAgICBjb25zdCB3b3Jrb3V0RGF0YSA9IGRhdGEuZmlsdGVyKFxuICAgICAgICAgICh3b3Jrb3V0KSA9PiB3b3Jrb3V0LmNyZWF0b3JfaWQgPT09IHVzZXIudXNlcl9pZFxuICAgICAgICApO1xuICAgICAgICBzZXRXb3Jrb3V0cyh3b3Jrb3V0RGF0YSlcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIHNldElzRXJyb3IoZXJyb3IpXG4gICAgfSlcbiAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXG4gICAgfSlcbiAgfSwgW10pXG5cbiAgZnVuY3Rpb24gaGFuZGxlTmFtZUlucHV0KGV2ZW50KSB7XG4gICAgc2V0V29ya291dE5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlVG9nZ2xlRm9ybSAoKSB7XG4gICAgaW5wdXRJc0hpZGRlbiA9PT0gJ2hpZGRlbicgPyBzZXRJbnB1dElzSGlkZGVuKCcnKSA6IHNldElucHV0SXNIaWRkZW4oJ2hpZGRlbicpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0Rm9ybSA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoIXdvcmtvdXROYW1lKSB7XG4gICAgICBzZXRJc1dvcmtvdXRFcnJvcignV29ya291dCBuYW1lIGlzIGVtcHR5LicpXG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRJc1dvcmtvdXRFcnJvcignJylcbiAgICB9LCAzMDAwKVxuICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRXb3Jrb3V0cyhbLi4ud29ya291dHMsIHsgY3JlYXRvcl9pZDogdXNlci51c2VyX2lkLCB3b3Jrb3V0X25hbWU6IHdvcmtvdXROYW1lLCB3b3Jrb3V0X2lkOiAndGVtcCd9XSlcblxuICAgICAgZmV0Y2goYC9hcGkvd29ya291dHNgLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGNyZWF0b3JfaWQ6IHVzZXIudXNlcl9pZCxcbiAgICAgICAgICB3b3Jrb3V0X25hbWU6IHdvcmtvdXROYW1lLFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgc2V0V29ya291dE5hbWUoJycpXG4gICAgICAgIGlmICghcmVzLm9rKSB7IHRocm93IHJlcyB9XG4gICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICB9KVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc2V0V29ya291dHMoWy4uLndvcmtvdXRzLCBkYXRhLm5ld1dvcmtvdXRdKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgc2V0SXNFcnJvcihlcnJvcilcbiAgICAgIH0pXG4gICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIHNldElucHV0SXNIaWRkZW4oZmFsc2UpXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaWYgKGlzRXJyb3IpIHJldHVybiA8RXJyb3JQYWdlIGVycm9yPXtFcnJvcn0vPlxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgZmxleCBqdXN0aWZ5LWNlbnRlcmB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5ib2R5U2VjdGlvbn1gfT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17YCR7c3R5bGVzLnRpdGxlfWB9Pk15IFdvcmtvdXRzPC9oMT5cbiAgICAgICAge2lzTG9hZGluZyA/IDxMb2FkaW5nU2tlbGV0b24vPiA6IG51bGx9XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7IXdvcmtvdXRzLmxlbmd0aCA/IDxwIGNsYXNzTmFtZT1cIm15LTEwIHRleHQteGwgdGV4dC1MaWdodFB1cnBsZVwiPkdldCBzdGFydGVkITwvcD4gOiBudWxsfVxuICAgICAgICAgIHt3b3Jrb3V0cy5tYXAoKHdvcmtvdXQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3dvcmtvdXQud29ya291dF9pZH0+XG4gICAgICAgICAgICAgICAgPFdvcmtvdXRDYXJkIHdvcmtvdXQ9e3dvcmtvdXR9IHNldFdvcmtvdXRzPXtzZXRXb3Jrb3V0c30gc2V0SXNEZWxldGVkPXtzZXRJc0RlbGV0ZWR9IGNhbkRlbGV0ZT17dHJ1ZX0vPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgICB7aXNEZWxldGVkID8gPHA+V29ya291dCBkZWxldGVkLjwvcD46IG51bGx9XG4gICAgICAgIHtpc1dvcmtvdXRFcnJvciA/IDxwPntpc1dvcmtvdXRFcnJvcn08L3A+IDogbnVsbH1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Byb3VuZGVkLWxnIHAtMyBtdC0yIHctZml0IHRleHQtcGxhdGludW0gYmctRGVlcFB1cnBsZSBvdmVyZmxvdy1oaWRkZW4gZmxleC1jb2x1bW5gfT5cbiAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVG9nZ2xlRm9ybX1cbiAgICAgICAgICA+Q3JlYXRlIG5ldyB3b3Jrb3V0PC9idXR0b24+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdEZvcm19IGNsYXNzTmFtZT17YCR7aW5wdXRJc0hpZGRlbn0gZmxleCBtdC0zIGJvcmRlciByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlbmB9PlxuICAgICAgICAgICAgPGlucHV0IHZhbHVlPXt3b3Jrb3V0TmFtZX0gb25DaGFuZ2U9e2hhbmRsZU5hbWVJbnB1dH0gcGxhY2Vob2xkZXI9XCJXb3Jrb3V0IG5hbWVcIiBjbGFzc05hbWU9XCJweS0xIHB4LTIgdy1bODAlXSBoLTkgdGV4dC1EZWVwUHVycGxlXCI+PC9pbnB1dD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgcHgtMiBweS0xIHctZml0IHRleHQtcGxhdGludW0gYmctRGVlcFB1cnBsZWB9PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtpc0Vycm9yID8gPHA+UHJvYmxlbSBsb2FkaW5nIHdvcmtvdXRzLiBQbGVhc2UgdHJ5IGFnYWluLjwvcD4gOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlRpdGxlIiwiTG9hZGluZ1NrZWxldG9uIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJXb3Jrb3V0Q2FyZCIsIkVycm9yUGFnZSIsInVzZVVzZXJDb250ZXh0Iiwic3R5bGVzIiwiV29ya291dHNQYWdlIiwidXNlciIsInNldFVzZXIiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0Vycm9yIiwic2V0SXNFcnJvciIsImlzV29ya291dEVycm9yIiwic2V0SXNXb3Jrb3V0RXJyb3IiLCJ3b3Jrb3V0cyIsInNldFdvcmtvdXRzIiwiaW5wdXRJc0hpZGRlbiIsInNldElucHV0SXNIaWRkZW4iLCJ3b3Jrb3V0TmFtZSIsInNldFdvcmtvdXROYW1lIiwiaXNEZWxldGVkIiwic2V0SXNEZWxldGVkIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwib2siLCJqc29uIiwiZGF0YSIsIndvcmtvdXREYXRhIiwiZmlsdGVyIiwid29ya291dCIsImNyZWF0b3JfaWQiLCJ1c2VyX2lkIiwiY2F0Y2giLCJlcnJvciIsImZpbmFsbHkiLCJoYW5kbGVOYW1lSW5wdXQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlVG9nZ2xlRm9ybSIsImhhbmRsZVN1Ym1pdEZvcm0iLCJwcmV2ZW50RGVmYXVsdCIsInNldFRpbWVvdXQiLCJ3b3Jrb3V0X25hbWUiLCJ3b3Jrb3V0X2lkIiwibWV0aG9kIiwiaGVhZGVyIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuZXdXb3Jrb3V0IiwiRXJyb3IiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiYm9keVNlY3Rpb24iLCJoMSIsInRpdGxlIiwidWwiLCJsZW5ndGgiLCJwIiwibWFwIiwibGkiLCJjYW5EZWxldGUiLCJidXR0b24iLCJvbkNsaWNrIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/workouts/page.js\n"));

/***/ })

});