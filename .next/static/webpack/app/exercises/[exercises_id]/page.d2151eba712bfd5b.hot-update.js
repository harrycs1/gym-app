"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/exercises/[exercises_id]/page",{

/***/ "(app-pages-browser)/./src/app/exercises/[exercises_id]/page.js":
/*!**************************************************!*\
  !*** ./src/app/exercises/[exercises_id]/page.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SingleExercisePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_General_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/General/Title */ \"(app-pages-browser)/./src/app/components/General/Title.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_contexts_userContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/contexts/userContext */ \"(app-pages-browser)/./src/app/contexts/userContext.js\");\n/* harmony import */ var _app_components_Session_SessionCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/Session/SessionCard */ \"(app-pages-browser)/./src/app/components/Session/SessionCard.jsx\");\n/* harmony import */ var _app_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/style */ \"(app-pages-browser)/./src/app/style.js\");\n/* harmony import */ var _app_components_exercises_ExerciseChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/components/exercises/ExerciseChart */ \"(app-pages-browser)/./src/app/components/exercises/ExerciseChart.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction SingleExercisePage(param) {\n    let { params } = param;\n    _s();\n    const [currentExercise, setCurrentExercise] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const [currentExerciseData, setCurrentExerciseData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const { user, setUser } = (0,_app_contexts_userContext__WEBPACK_IMPORTED_MODULE_3__.useUserContext)();\n    const exercise_id = params.exercises_id;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchExercise = async ()=>{\n            fetch(\"/api/exercises/\".concat(exercise_id)).then((res)=>{\n                return res.json();\n            }).then((data)=>{\n                setCurrentExercise(data);\n            });\n        };\n        const fetchSessions = async ()=>{\n            fetch(\"/api/loggedWorkouts?exercise_id=\".concat(exercise_id, \"&user_id=\").concat(user.user_id)).then((res)=>{\n                return res.json();\n            }).then((data)=>{\n                console.log(data);\n                setCurrentExerciseData(data);\n            });\n        };\n        const fetchData = async ()=>{\n            fetchExercise();\n            user.user_id ? fetchSessions() : null;\n        };\n        fetchData();\n    }, [\n        exercise_id,\n        user.user_id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat(_app_style__WEBPACK_IMPORTED_MODULE_5__[\"default\"].bodySection),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"\".concat(_app_style__WEBPACK_IMPORTED_MODULE_5__[\"default\"].title),\n                    children: currentExercise.name\n                }, void 0, false, {\n                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/exercises/[exercises_id]/page.js\",\n                    lineNumber: 55,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex text-md font-bold h-6 rounded-lg mb-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                        href: \"/exercises\",\n                        className: \"flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/caret-left.svg\",\n                                className: \"h-full\"\n                            }, void 0, false, {\n                                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/exercises/[exercises_id]/page.js\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"w-fit\",\n                                children: \"All Exercises\"\n                            }, void 0, false, {\n                                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/exercises/[exercises_id]/page.js\",\n                                lineNumber: 59,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/exercises/[exercises_id]/page.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/exercises/[exercises_id]/page.js\",\n                    lineNumber: 56,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_exercises_ExerciseChart__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    data: currentExerciseData,\n                    exerciseName: currentExercise.name\n                }, void 0, false, {\n                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/exercises/[exercises_id]/page.js\",\n                    lineNumber: 62,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"\".concat(_app_style__WEBPACK_IMPORTED_MODULE_5__[\"default\"].subtitle, \" mt-5\"),\n                    children: \"History:\"\n                }, void 0, false, {\n                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/exercises/[exercises_id]/page.js\",\n                    lineNumber: 63,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"mb-5\",\n                    children: [\n                        currentExerciseData.length ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"No exercise history... yet.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/exercises/[exercises_id]/page.js\",\n                            lineNumber: 65,\n                            columnNumber: 54\n                        }, this),\n                        currentExerciseData.map((data)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Session_SessionCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    session: data\n                                }, void 0, false, {\n                                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/exercises/[exercises_id]/page.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 25\n                                }, this)\n                            }, data.logged_id, false, {\n                                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/exercises/[exercises_id]/page.js\",\n                                lineNumber: 68,\n                                columnNumber: 25\n                            }, this);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/exercises/[exercises_id]/page.js\",\n                    lineNumber: 64,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/exercises/[exercises_id]/page.js\",\n            lineNumber: 54,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/exercises/[exercises_id]/page.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_s(SingleExercisePage, \"Yvu+BL0Mt8HD16TZsNMXo8lZdwU=\", false, function() {\n    return [\n        _app_contexts_userContext__WEBPACK_IMPORTED_MODULE_3__.useUserContext\n    ];\n});\n_c = SingleExercisePage;\nvar _c;\n$RefreshReg$(_c, \"SingleExercisePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZXhlcmNpc2VzL1tleGVyY2lzZXNfaWRdL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUN1RDtBQUNYO0FBQ2dCO0FBQ0c7QUFDOUI7QUFDb0M7QUFDeEM7QUFFZCxTQUFTUSxtQkFBbUIsS0FBUTtRQUFSLEVBQUNDLE1BQU0sRUFBQyxHQUFSOztJQUN2QyxNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdWLCtDQUFRQSxDQUFDLENBQUM7SUFDeEQsTUFBTSxDQUFDVyxxQkFBcUJDLHVCQUF1QixHQUFHWiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRWpFLE1BQU0sRUFBRWEsSUFBSSxFQUFFQyxPQUFPLEVBQUUsR0FBR1oseUVBQWNBO0lBR3hDLE1BQU1hLGNBQWNQLE9BQU9RLFlBQVk7SUFFdkNmLGdEQUFTQSxDQUFDO1FBQ04sTUFBTWdCLGdCQUFnQjtZQUNsQkMsTUFBTSxrQkFBOEIsT0FBWkgsY0FDdkJJLElBQUksQ0FBQyxDQUFDQztnQkFDSCxPQUFPQSxJQUFJQyxJQUFJO1lBQ25CLEdBQ0NGLElBQUksQ0FBQyxDQUFDRztnQkFDSFosbUJBQW1CWTtZQUN2QjtRQUNKO1FBRUEsTUFBTUMsZ0JBQWdCO1lBQ2xCTCxNQUFNLG1DQUEwREwsT0FBdkJFLGFBQVksYUFBd0IsT0FBYkYsS0FBS1csT0FBTyxHQUMzRUwsSUFBSSxDQUFDLENBQUNDO2dCQUNILE9BQU9BLElBQUlDLElBQUk7WUFDbkIsR0FDQ0YsSUFBSSxDQUFDLENBQUNHO2dCQUNIRyxRQUFRQyxHQUFHLENBQUNKO2dCQUNaVix1QkFBdUJVO1lBQzNCO1FBQ0o7UUFFQSxNQUFNSyxZQUFZO1lBRWRWO1lBQ0FKLEtBQUtXLE9BQU8sR0FBR0Qsa0JBQWtCO1FBQ3JDO1FBRUFJO0lBQ0EsR0FBRztRQUFDWjtRQUFhRixLQUFLVyxPQUFPO0tBQUM7SUFJcEMscUJBQ0UsOERBQUNJO1FBQUtDLFdBQVk7a0JBQ2QsNEVBQUNDO1lBQUlELFdBQVcsR0FBc0IsT0FBbkJ6QixrREFBTUEsQ0FBQzJCLFdBQVc7OzhCQUNqQyw4REFBQ0M7b0JBQUdILFdBQVcsR0FBZ0IsT0FBYnpCLGtEQUFNQSxDQUFDNkIsS0FBSzs4QkFBS3hCLGdCQUFnQnlCLElBQUk7Ozs7Ozs4QkFDdkQsOERBQUNKO29CQUFJRCxXQUFVOzhCQUNYLDRFQUFDdkIsa0RBQUlBO3dCQUFDNkIsTUFBSzt3QkFBYU4sV0FBVTs7MENBQzlCLDhEQUFDTztnQ0FBSUMsS0FBSTtnQ0FBa0JSLFdBQVU7Ozs7OzswQ0FDckMsOERBQUNTO2dDQUFFVCxXQUFVOzBDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHN0IsOERBQUN4QiwrRUFBYUE7b0JBQUNpQixNQUFNWDtvQkFBcUI0QixjQUFjOUIsZ0JBQWdCeUIsSUFBSTs7Ozs7OzhCQUM1RSw4REFBQ007b0JBQUdYLFdBQVcsR0FBbUIsT0FBaEJ6QixrREFBTUEsQ0FBQ3FDLFFBQVEsRUFBQzs4QkFBUTs7Ozs7OzhCQUMxQyw4REFBQ0M7b0JBQUdiLFdBQVU7O3dCQUNUbEIsb0JBQW9CZ0MsTUFBTSxHQUFHLHFCQUFPLDhEQUFDTDtzQ0FBRTs7Ozs7O3dCQUN2QzNCLG9CQUFvQmlDLEdBQUcsQ0FBQyxDQUFDdEI7NEJBQ3RCLHFCQUNJLDhEQUFDdUI7MENBQ0QsNEVBQUMxQywyRUFBV0E7b0NBQUMyQyxTQUFTeEI7Ozs7OzsrQkFEYkEsS0FBS3lCLFNBQVM7Ozs7O3dCQUkvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hCO0dBbkV3QnhDOztRQUlNTCxxRUFBY0E7OztLQUpwQksiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9leGVyY2lzZXMvW2V4ZXJjaXNlc19pZF0vcGFnZS5qcz9iMTdlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9HZW5lcmFsL1RpdGxlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VVc2VyQ29udGV4dCB9IGZyb20gXCJAL2FwcC9jb250ZXh0cy91c2VyQ29udGV4dFwiO1xuaW1wb3J0IFNlc3Npb25DYXJkIGZyb20gXCJAL2FwcC9jb21wb25lbnRzL1Nlc3Npb24vU2Vzc2lvbkNhcmRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvYXBwL3N0eWxlXCI7XG5pbXBvcnQgRXhlcmNpc2VDaGFydCBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9leGVyY2lzZXMvRXhlcmNpc2VDaGFydFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW5nbGVFeGVyY2lzZVBhZ2Uoe3BhcmFtc30pIHtcbiAgICBjb25zdCBbY3VycmVudEV4ZXJjaXNlLCBzZXRDdXJyZW50RXhlcmNpc2VdID0gdXNlU3RhdGUoe30pXG4gICAgY29uc3QgW2N1cnJlbnRFeGVyY2lzZURhdGEsIHNldEN1cnJlbnRFeGVyY2lzZURhdGFdID0gdXNlU3RhdGUoW10pXG5cbiAgICBjb25zdCB7IHVzZXIsIHNldFVzZXIgfSA9IHVzZVVzZXJDb250ZXh0KCk7XG4gICAgXG5cbiAgICBjb25zdCBleGVyY2lzZV9pZCA9IHBhcmFtcy5leGVyY2lzZXNfaWQ7XG5cbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgY29uc3QgZmV0Y2hFeGVyY2lzZSA9IGFzeW5jICgpPT57XG4gICAgICAgICAgICBmZXRjaChgL2FwaS9leGVyY2lzZXMvJHtleGVyY2lzZV9pZH1gKVxuICAgICAgICAgICAgLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRFeGVyY2lzZShkYXRhKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZldGNoU2Vzc2lvbnMgPSBhc3luYyAoKT0+e1xuICAgICAgICAgICAgZmV0Y2goYC9hcGkvbG9nZ2VkV29ya291dHM/ZXhlcmNpc2VfaWQ9JHtleGVyY2lzZV9pZH0mdXNlcl9pZD0ke3VzZXIudXNlcl9pZH1gKVxuICAgICAgICAgICAgLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudEV4ZXJjaXNlRGF0YShkYXRhKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZmV0Y2hFeGVyY2lzZSgpO1xuICAgICAgICAgICAgdXNlci51c2VyX2lkID8gZmV0Y2hTZXNzaW9ucygpIDogbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZldGNoRGF0YSgpXG4gICAgICAgIH0sIFtleGVyY2lzZV9pZCwgdXNlci51c2VyX2lkXSlcblxuXG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9e2BmbGV4IGp1c3RpZnktY2VudGVyYH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYm9keVNlY3Rpb259YH0+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtgJHtzdHlsZXMudGl0bGV9YH0+e2N1cnJlbnRFeGVyY2lzZS5uYW1lfTwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdGV4dC1tZCBmb250LWJvbGQgaC02IHJvdW5kZWQtbGcgbWItNVwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXhlcmNpc2VzXCIgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9jYXJldC1sZWZ0LnN2Z1wiIGNsYXNzTmFtZT1cImgtZnVsbFwiPjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ3LWZpdFwiPkFsbCBFeGVyY2lzZXM8L3A+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8RXhlcmNpc2VDaGFydCBkYXRhPXtjdXJyZW50RXhlcmNpc2VEYXRhfSBleGVyY2lzZU5hbWU9e2N1cnJlbnRFeGVyY2lzZS5uYW1lfT48L0V4ZXJjaXNlQ2hhcnQ+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtgJHtzdHlsZXMuc3VidGl0bGV9IG10LTVgfT5IaXN0b3J5OjwvaDI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgICAgICAgICAgIHtjdXJyZW50RXhlcmNpc2VEYXRhLmxlbmd0aCA/IG51bGwgOiA8cD5ObyBleGVyY2lzZSBoaXN0b3J5Li4uIHlldC48L3A+fVxuICAgICAgICAgICAgICAgIHtjdXJyZW50RXhlcmNpc2VEYXRhLm1hcCgoZGF0YSk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2RhdGEubG9nZ2VkX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZXNzaW9uQ2FyZCBzZXNzaW9uPXtkYXRhfT48L1Nlc3Npb25DYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufSJdLCJuYW1lcyI6WyJUaXRsZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlVXNlckNvbnRleHQiLCJTZXNzaW9uQ2FyZCIsInN0eWxlcyIsIkV4ZXJjaXNlQ2hhcnQiLCJMaW5rIiwiU2luZ2xlRXhlcmNpc2VQYWdlIiwicGFyYW1zIiwiY3VycmVudEV4ZXJjaXNlIiwic2V0Q3VycmVudEV4ZXJjaXNlIiwiY3VycmVudEV4ZXJjaXNlRGF0YSIsInNldEN1cnJlbnRFeGVyY2lzZURhdGEiLCJ1c2VyIiwic2V0VXNlciIsImV4ZXJjaXNlX2lkIiwiZXhlcmNpc2VzX2lkIiwiZmV0Y2hFeGVyY2lzZSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiZmV0Y2hTZXNzaW9ucyIsInVzZXJfaWQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hEYXRhIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImJvZHlTZWN0aW9uIiwiaDEiLCJ0aXRsZSIsIm5hbWUiLCJocmVmIiwiaW1nIiwic3JjIiwicCIsImV4ZXJjaXNlTmFtZSIsImgyIiwic3VidGl0bGUiLCJ1bCIsImxlbmd0aCIsIm1hcCIsImxpIiwic2Vzc2lvbiIsImxvZ2dlZF9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/exercises/[exercises_id]/page.js\n"));

/***/ })

});