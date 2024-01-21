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

/***/ "(app-pages-browser)/./src/app/components/Log/LogWorkoutContainer.js":
/*!*******************************************************!*\
  !*** ./src/app/components/Log/LogWorkoutContainer.js ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LogWorkoutContainer: function() { return /* binding */ LogWorkoutContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PickExercises__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PickExercises */ \"(app-pages-browser)/./src/app/components/Log/PickExercises.js\");\n/* harmony import */ var _ChosenExercisesContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChosenExercisesContainer */ \"(app-pages-browser)/./src/app/components/Log/ChosenExercisesContainer.js\");\n/* harmony import */ var _General_LoadingSkeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../General/LoadingSkeleton */ \"(app-pages-browser)/./src/app/components/General/LoadingSkeleton.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _PostInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PostInput */ \"(app-pages-browser)/./src/app/components/Log/PostInput.js\");\n/* harmony import */ var _app_contexts_userContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app/contexts/userContext */ \"(app-pages-browser)/./src/app/contexts/userContext.js\");\n/* harmony import */ var _app_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/app/style */ \"(app-pages-browser)/./src/app/style.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst LogWorkoutContainer = (param)=>{\n    let { chosenExercises, setChosenExercises, chosenWorkout } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const { user, setUser } = (0,_app_contexts_userContext__WEBPACK_IMPORTED_MODULE_7__.useUserContext)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [isLogLoading, setisLogLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isLogged, setIsLogged] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isPostError, setIsPostError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [workoutData, setWorkoutData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [numOfSessions, setNumOfSessions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [showPostDetails, setShowPostDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        Promise.all([\n            fetch(\"/api/checkLoggedWorkout\")\n        ]).then((param)=>{\n            let [res2] = param;\n            return Promise.all([\n                res2.json()\n            ]);\n        }).then((param)=>{\n            let [loggedWorkoutData] = param;\n            setNumOfSessions(loggedWorkoutData.session_id + 1);\n            setIsLoading(false);\n        });\n    }, []);\n    const handleLogWorkout = async (e)=>{\n        setisLogLoading(true);\n        const isLog = e.target.textContent === \"Log Workout\";\n        const workoutId = chosenWorkout.workout_id;\n        const userId = user.user_id;\n        for(const exerciseId in workoutData){\n            Promise.all(workoutData[exerciseId].map((set)=>{\n                const newLoggedWorkout = {\n                    session_id: numOfSessions,\n                    exercise_id: parseInt(exerciseId),\n                    workout_id: workoutId,\n                    user_id: userId,\n                    weight: set.weight,\n                    reps: set.reps\n                };\n                return fetch(\"/api/loggedWorkouts\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify(newLoggedWorkout)\n                });\n            })).then(()=>{\n                setisLogLoading(false);\n                setIsLogged(true);\n                isLog ? setTimeout(()=>router.push(\"/\"), 1000) : null;\n            }).then(()=>{}).catch(()=>setIsPostError(true));\n        }\n    };\n    const handlePostWorkout = async (e)=>{\n        await handleLogWorkout(e);\n        const userId = user.user_id;\n        const newPost = {\n            session_name: title,\n            description: description,\n            session_id: parseInt(numOfSessions),\n            user_id: userId\n        };\n        fetch(\"/api/posts\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(newPost)\n        }).then(()=>{\n            setTimeout(()=>router.push(\"/\"), 1000);\n        });\n    };\n    const handleShowPostDetails = ()=>{\n        setShowPostDetails(!showPostDetails);\n    };\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_General_LoadingSkeleton__WEBPACK_IMPORTED_MODULE_4__.LoadingSkeleton, {}, void 0, false, {\n        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/LogWorkoutContainer.js\",\n        lineNumber: 95,\n        columnNumber: 25\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"py-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"\".concat(_app_style__WEBPACK_IMPORTED_MODULE_8__[\"default\"].button, \" px-5 bg-LightPurple \").concat(!chosenExercises.length ? \"opacity-30\" : null),\n                        onClick: handleLogWorkout,\n                        disabled: !chosenExercises.length,\n                        children: \"Log\"\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/LogWorkoutContainer.js\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"\".concat(_app_style__WEBPACK_IMPORTED_MODULE_8__[\"default\"].button, \" px-5 bg-LightGreen\"),\n                        onClick: handleShowPostDetails,\n                        children: \"Post\"\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/LogWorkoutContainer.js\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"ml-4 italic text-lg \".concat(isLogged ? \"text-LightGreen\" : null, \" \").concat(isPostError ? \"text-Red\" : null),\n                        children: isLogLoading ? \"Logging...\" : isLogged ? \"Success\" : isPostError ? \"Error - try again\" : null\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/LogWorkoutContainer.js\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/LogWorkoutContainer.js\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, undefined),\n            showPostDetails ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-right\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostInput__WEBPACK_IMPORTED_MODULE_6__.PostInput, {\n                        setTitle: setTitle,\n                        setDescription: setDescription\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/LogWorkoutContainer.js\",\n                        lineNumber: 132,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"border border-DeepPurple p-1 ml-4 rounded bg-LightGreen text-platinum \".concat(!chosenExercises.length || !title || !description ? \"opacity-30\" : null),\n                        onClick: handlePostWorkout,\n                        disabled: !chosenExercises.length || !title || !description,\n                        children: \"Post\"\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/LogWorkoutContainer.js\",\n                        lineNumber: 133,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-Red italic ml-2\",\n                        children: !title || !description ? \"Please provide both a title and description\" : null\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/LogWorkoutContainer.js\",\n                        lineNumber: 136,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/LogWorkoutContainer.js\",\n                lineNumber: 131,\n                columnNumber: 9\n            }, undefined) : null,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"z-1 mt-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ChosenExercisesContainer__WEBPACK_IMPORTED_MODULE_3__.ChosenExercisesContainer, {\n                    setChosenExercises: setChosenExercises,\n                    chosenExercises: chosenExercises,\n                    workoutData: workoutData,\n                    setWorkoutData: setWorkoutData\n                }, void 0, false, {\n                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/LogWorkoutContainer.js\",\n                    lineNumber: 141,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/LogWorkoutContainer.js\",\n                lineNumber: 140,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/LogWorkoutContainer.js\",\n        lineNumber: 98,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LogWorkoutContainer, \"5tcGRwtwOk04l6QgRdbVTcTzBjg=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        _app_contexts_userContext__WEBPACK_IMPORTED_MODULE_7__.useUserContext\n    ];\n});\n_c = LogWorkoutContainer;\nvar _c;\n$RefreshReg$(_c, \"LogWorkoutContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Mb2cvTG9nV29ya291dENvbnRhaW5lci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNNO0FBQ29CO0FBQ1Q7QUFDakI7QUFDSjtBQUNvQjtBQUMzQjtBQUUxQixNQUFNUyxzQkFBc0I7UUFBQyxFQUFDQyxlQUFlLEVBQUVDLGtCQUFrQixFQUFFQyxhQUFhLEVBQUM7O0lBQ3RGLE1BQU1DLFNBQVNSLDBEQUFTQTtJQUN4QixNQUFNLEVBQUNTLElBQUksRUFBRUMsT0FBTyxFQUFDLEdBQUdSLHlFQUFjQTtJQUN0QyxNQUFNLENBQUNTLFdBQVdDLGFBQWEsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2tCLGNBQWNDLGdCQUFnQixHQUFHbkIsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDb0IsVUFBVUMsWUFBWSxHQUFHckIsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDc0IsYUFBYUMsZUFBZSxHQUFHdkIsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDd0IsYUFBYUMsZUFBZSxHQUFHekIsK0NBQVFBLENBQUMsQ0FBQztJQUNoRCxNQUFNLENBQUMwQixlQUFlQyxpQkFBaUIsR0FBRzNCLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sQ0FBQzRCLGlCQUFpQkMsbUJBQW1CLEdBQUc3QiwrQ0FBUUEsQ0FBQztJQUN2RCxNQUFNLENBQUM4QixPQUFPQyxTQUFTLEdBQUcvQiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNnQyxhQUFhQyxlQUFlLEdBQUdqQywrQ0FBUUEsQ0FBQztJQUUvQ0MsZ0RBQVNBLENBQUM7UUFDUmlDLFFBQVFDLEdBQUcsQ0FBQztZQUFDQyxNQUFNO1NBQTJCLEVBQzNDQyxJQUFJLENBQUM7Z0JBQUMsQ0FBQ0MsS0FBSztZQUNYLE9BQU9KLFFBQVFDLEdBQUcsQ0FBQztnQkFBQ0csS0FBS0MsSUFBSTthQUFHO1FBQ2xDLEdB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d0JBQW1CUyxVQUFVLENBQUNsRSxnQkFBZ0JnRSxNQUFNLElBQUksQ0FBQzVDLFNBQVMsQ0FBQ0U7a0NBQWE7Ozs7OztrQ0FHaFEsOERBQUM2Qzt3QkFBRUwsV0FBVTtrQ0FBd0IsQ0FBQzFDLFNBQVMsQ0FBQ0UsY0FBYyxnREFBZ0Q7Ozs7Ozs7Ozs7OzRCQUU5RzswQkFFSiw4REFBQ3VDO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDckUsK0VBQXdCQTtvQkFDdkJRLG9CQUFvQkE7b0JBQ3BCRCxpQkFBaUJBO29CQUNqQmMsYUFBYUE7b0JBQ2JDLGdCQUFnQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzFCLEVBQUU7R0E1SVdoQjs7UUFDSUosc0RBQVNBO1FBQ0FFLHFFQUFjQTs7O0tBRjNCRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvTG9nL0xvZ1dvcmtvdXRDb250YWluZXIuanM/ODc0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaXN0T2ZFeGVyY2lzZXMgfSBmcm9tIFwiLi9QaWNrRXhlcmNpc2VzXCI7XG5pbXBvcnQgeyBDaG9zZW5FeGVyY2lzZXNDb250YWluZXIgfSBmcm9tIFwiLi9DaG9zZW5FeGVyY2lzZXNDb250YWluZXJcIjtcbmltcG9ydCB7IExvYWRpbmdTa2VsZXRvbiB9IGZyb20gXCIuLi9HZW5lcmFsL0xvYWRpbmdTa2VsZXRvblwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgUG9zdElucHV0IH0gZnJvbSBcIi4vUG9zdElucHV0XCI7XG5pbXBvcnQgeyB1c2VVc2VyQ29udGV4dCB9IGZyb20gXCJAL2FwcC9jb250ZXh0cy91c2VyQ29udGV4dFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9hcHAvc3R5bGVcIjtcblxuZXhwb3J0IGNvbnN0IExvZ1dvcmtvdXRDb250YWluZXIgPSAoe2Nob3NlbkV4ZXJjaXNlcywgc2V0Q2hvc2VuRXhlcmNpc2VzLCBjaG9zZW5Xb3Jrb3V0fSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qge3VzZXIsIHNldFVzZXJ9ID0gdXNlVXNlckNvbnRleHQoKTsgXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2lzTG9nTG9hZGluZywgc2V0aXNMb2dMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzTG9nZ2VkLCBzZXRJc0xvZ2dlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1Bvc3RFcnJvciwgc2V0SXNQb3N0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbd29ya291dERhdGEsIHNldFdvcmtvdXREYXRhXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW251bU9mU2Vzc2lvbnMsIHNldE51bU9mU2Vzc2lvbnNdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtzaG93UG9zdERldGFpbHMsIHNldFNob3dQb3N0RGV0YWlsc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBQcm9taXNlLmFsbChbZmV0Y2goXCIvYXBpL2NoZWNrTG9nZ2VkV29ya291dFwiKV0pXG4gICAgICAudGhlbigoW3JlczJdKSA9PiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbcmVzMi5qc29uKCldKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoW2xvZ2dlZFdvcmtvdXREYXRhXSkgPT4ge1xuICAgICAgICBzZXROdW1PZlNlc3Npb25zKGxvZ2dlZFdvcmtvdXREYXRhLnNlc3Npb25faWQgKyAxKTtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlTG9nV29ya291dCA9IGFzeW5jIChlKSA9PiB7XG4gICAgc2V0aXNMb2dMb2FkaW5nKHRydWUpO1xuICAgIGNvbnN0IGlzTG9nID0gZS50YXJnZXQudGV4dENvbnRlbnQgPT09ICdMb2cgV29ya291dCdcbiAgICBjb25zdCB3b3Jrb3V0SWQgPSBjaG9zZW5Xb3Jrb3V0LndvcmtvdXRfaWQ7XG4gICAgY29uc3QgdXNlcklkID0gdXNlci51c2VyX2lkO1xuXG4gICAgZm9yIChjb25zdCBleGVyY2lzZUlkIGluIHdvcmtvdXREYXRhKSB7XG4gICAgICBQcm9taXNlLmFsbChcbiAgICAgICAgd29ya291dERhdGFbZXhlcmNpc2VJZF0ubWFwKChzZXQpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdMb2dnZWRXb3Jrb3V0ID0ge1xuICAgICAgICAgICAgc2Vzc2lvbl9pZDogbnVtT2ZTZXNzaW9ucyxcbiAgICAgICAgICAgIGV4ZXJjaXNlX2lkOiBwYXJzZUludChleGVyY2lzZUlkKSxcbiAgICAgICAgICAgIHdvcmtvdXRfaWQ6IHdvcmtvdXRJZCxcbiAgICAgICAgICAgIHVzZXJfaWQ6IHVzZXJJZCxcbiAgICAgICAgICAgIHdlaWdodDogc2V0LndlaWdodCxcbiAgICAgICAgICAgIHJlcHM6IHNldC5yZXBzLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICByZXR1cm4gZmV0Y2goYC9hcGkvbG9nZ2VkV29ya291dHNgLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdMb2dnZWRXb3Jrb3V0KSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHNldGlzTG9nTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgc2V0SXNMb2dnZWQodHJ1ZSk7XG4gICAgICAgICAgaXNMb2cgPyBzZXRUaW1lb3V0KCgpID0+IHJvdXRlci5wdXNoKFwiL1wiKSwgMTAwMCkgOiBudWxsO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoKSA9PiB7fSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHNldElzUG9zdEVycm9yKHRydWUpKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUG9zdFdvcmtvdXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGF3YWl0IGhhbmRsZUxvZ1dvcmtvdXQoZSk7XG4gICAgY29uc3QgdXNlcklkID0gdXNlci51c2VyX2lkXG4gICAgY29uc3QgbmV3UG9zdCA9IHtcbiAgICAgIHNlc3Npb25fbmFtZSA6IHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24gOiBkZXNjcmlwdGlvbixcbiAgICAgIHNlc3Npb25faWQgOiBwYXJzZUludChudW1PZlNlc3Npb25zKSxcbiAgICAgIHVzZXJfaWQgOiB1c2VySWRcbiAgICB9XG4gICAgZmV0Y2goYC9hcGkvcG9zdHNgLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdQb3N0KVxuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiByb3V0ZXIucHVzaChcIi9cIiksIDEwMDApO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlU2hvd1Bvc3REZXRhaWxzID0gKCkgPT4ge1xuICAgIHNldFNob3dQb3N0RGV0YWlscyghc2hvd1Bvc3REZXRhaWxzKTtcbiAgfTtcblxuICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPExvYWRpbmdTa2VsZXRvbiAvPjtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYnV0dG9ufSBweC01IGJnLUxpZ2h0UHVycGxlICR7XG4gICAgICAgICAgICAhY2hvc2VuRXhlcmNpc2VzLmxlbmd0aCA/IFwib3BhY2l0eS0zMFwiIDogbnVsbFxuICAgICAgICAgIH1gfVxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ1dvcmtvdXR9XG4gICAgICAgICAgZGlzYWJsZWQ9eyFjaG9zZW5FeGVyY2lzZXMubGVuZ3RofVxuICAgICAgICA+XG4gICAgICAgICAgTG9nXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYnV0dG9ufSBweC01IGJnLUxpZ2h0R3JlZW5gfVxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNob3dQb3N0RGV0YWlsc31cbiAgICAgICAgPlxuICAgICAgICAgIFBvc3RcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxwXG4gICAgICAgICAgY2xhc3NOYW1lPXtgbWwtNCBpdGFsaWMgdGV4dC1sZyAke1xuICAgICAgICAgICAgaXNMb2dnZWQgPyBcInRleHQtTGlnaHRHcmVlblwiIDogbnVsbFxuICAgICAgICAgIH0gJHtpc1Bvc3RFcnJvciA/IFwidGV4dC1SZWRcIiA6IG51bGx9YH1cbiAgICAgICAgPlxuICAgICAgICAgIHtpc0xvZ0xvYWRpbmdcbiAgICAgICAgICAgID8gXCJMb2dnaW5nLi4uXCJcbiAgICAgICAgICAgIDogaXNMb2dnZWRcbiAgICAgICAgICAgID8gXCJTdWNjZXNzXCJcbiAgICAgICAgICAgIDogaXNQb3N0RXJyb3JcbiAgICAgICAgICAgID8gXCJFcnJvciAtIHRyeSBhZ2FpblwiXG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7c2hvd1Bvc3REZXRhaWxzID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggZmxleC1jb2wgaXRlbXMtcmlnaHRgfT5cbiAgICAgICAgICA8UG9zdElucHV0IHNldFRpdGxlPXtzZXRUaXRsZX0gc2V0RGVzY3JpcHRpb249e3NldERlc2NyaXB0aW9ufSAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgYm9yZGVyIGJvcmRlci1EZWVwUHVycGxlIHAtMSBtbC00IHJvdW5kZWQgYmctTGlnaHRHcmVlbiB0ZXh0LXBsYXRpbnVtICR7IWNob3NlbkV4ZXJjaXNlcy5sZW5ndGggfHwgIXRpdGxlIHx8ICFkZXNjcmlwdGlvbiA/IFwib3BhY2l0eS0zMFwiIDogbnVsbH1gfSBvbkNsaWNrPXtoYW5kbGVQb3N0V29ya291dH0gZGlzYWJsZWQ9eyFjaG9zZW5FeGVyY2lzZXMubGVuZ3RoIHx8ICF0aXRsZSB8fCAhZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgUG9zdFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtUmVkIGl0YWxpYyBtbC0yXCI+eyF0aXRsZSB8fCAhZGVzY3JpcHRpb24gPyAnUGxlYXNlIHByb3ZpZGUgYm90aCBhIHRpdGxlIGFuZCBkZXNjcmlwdGlvbicgOiBudWxsfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTEgbXQtNVwiPlxuICAgICAgICA8Q2hvc2VuRXhlcmNpc2VzQ29udGFpbmVyXG4gICAgICAgICAgc2V0Q2hvc2VuRXhlcmNpc2VzPXtzZXRDaG9zZW5FeGVyY2lzZXN9XG4gICAgICAgICAgY2hvc2VuRXhlcmNpc2VzPXtjaG9zZW5FeGVyY2lzZXN9XG4gICAgICAgICAgd29ya291dERhdGE9e3dvcmtvdXREYXRhfVxuICAgICAgICAgIHNldFdvcmtvdXREYXRhPXtzZXRXb3Jrb3V0RGF0YX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpc3RPZkV4ZXJjaXNlcyIsIkNob3NlbkV4ZXJjaXNlc0NvbnRhaW5lciIsIkxvYWRpbmdTa2VsZXRvbiIsInVzZVJvdXRlciIsIlBvc3RJbnB1dCIsInVzZVVzZXJDb250ZXh0Iiwic3R5bGVzIiwiTG9nV29ya291dENvbnRhaW5lciIsImNob3NlbkV4ZXJjaXNlcyIsInNldENob3NlbkV4ZXJjaXNlcyIsImNob3NlbldvcmtvdXQiLCJyb3V0ZXIiLCJ1c2VyIiwic2V0VXNlciIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImlzTG9nTG9hZGluZyIsInNldGlzTG9nTG9hZGluZyIsImlzTG9nZ2VkIiwic2V0SXNMb2dnZWQiLCJpc1Bvc3RFcnJvciIsInNldElzUG9zdEVycm9yIiwid29ya291dERhdGEiLCJzZXRXb3Jrb3V0RGF0YSIsIm51bU9mU2Vzc2lvbnMiLCJzZXROdW1PZlNlc3Npb25zIiwic2hvd1Bvc3REZXRhaWxzIiwic2V0U2hvd1Bvc3REZXRhaWxzIiwidGl0bGUiLCJzZXRUaXRsZSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJQcm9taXNlIiwiYWxsIiwiZmV0Y2giLCJ0aGVuIiwicmVzMiIsImpzb24iLCJsb2dnZWRXb3Jrb3V0RGF0YSIsInNlc3Npb25faWQiLCJoYW5kbGVMb2dXb3Jrb3V0IiwiZSIsImlzTG9nIiwidGFyZ2V0IiwidGV4dENvbnRlbnQiLCJ3b3Jrb3V0SWQiLCJ3b3Jrb3V0X2lkIiwidXNlcklkIiwidXNlcl9pZCIsImV4ZXJjaXNlSWQiLCJtYXAiLCJzZXQiLCJuZXdMb2dnZWRXb3Jrb3V0IiwiZXhlcmNpc2VfaWQiLCJwYXJzZUludCIsIndlaWdodCIsInJlcHMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXRUaW1lb3V0IiwicHVzaCIsImNhdGNoIiwiaGFuZGxlUG9zdFdvcmtvdXQiLCJuZXdQb3N0Iiwic2Vzc2lvbl9uYW1lIiwiaGFuZGxlU2hvd1Bvc3REZXRhaWxzIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwibGVuZ3RoIiwib25DbGljayIsImRpc2FibGVkIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Log/LogWorkoutContainer.js\n"));

/***/ })

});