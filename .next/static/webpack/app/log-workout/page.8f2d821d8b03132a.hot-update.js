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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LogWorkoutContainer: function() { return /* binding */ LogWorkoutContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PickExercises__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PickExercises */ \"(app-pages-browser)/./src/app/components/Log/PickExercises.js\");\n/* harmony import */ var _ChosenExercisesContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChosenExercisesContainer */ \"(app-pages-browser)/./src/app/components/Log/ChosenExercisesContainer.js\");\n/* harmony import */ var _General_LoadingSkeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../General/LoadingSkeleton */ \"(app-pages-browser)/./src/app/components/General/LoadingSkeleton.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _PostInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PostInput */ \"(app-pages-browser)/./src/app/components/Log/PostInput.js\");\n/* harmony import */ var _app_contexts_userContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app/contexts/userContext */ \"(app-pages-browser)/./src/app/contexts/userContext.js\");\n/* harmony import */ var _app_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/app/style */ \"(app-pages-browser)/./src/app/style.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst LogWorkoutContainer = (param)=>{\n    let { chosenExercises, setChosenExercises, chosenWorkout } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const { user, setUser } = (0,_app_contexts_userContext__WEBPACK_IMPORTED_MODULE_7__.useUserContext)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [isLogLoading, setisLogLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isLogged, setIsLogged] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isPostError, setIsPostError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [workoutData, setWorkoutData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [numOfSessions, setNumOfSessions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [showPostDetails, setShowPostDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        Promise.all([\n            fetch(\"/api/checkLoggedWorkout\")\n        ]).then((param)=>{\n            let [res2] = param;\n            return Promise.all([\n                res2.json()\n            ]);\n        }).then((param)=>{\n            let [loggedWorkoutData] = param;\n            setNumOfSessions(loggedWorkoutData.session_id + 1);\n            setIsLoading(false);\n        });\n    }, []);\n    const handleLogWorkout = async (e)=>{\n        setisLogLoading(true);\n        const isLog = e.target.textContent === \"Log Workout\";\n        const workoutId = chosenWorkout.workout_id;\n        const userId = user.user_id;\n        for(const exerciseId in workoutData){\n            Promise.all(workoutData[exerciseId].map((set)=>{\n                const newLoggedWorkout = {\n                    session_id: numOfSessions,\n                    exercise_id: parseInt(exerciseId),\n                    workout_id: workoutId,\n                    user_id: userId,\n                    weight: set.weight,\n                    reps: set.reps\n                };\n                return fetch(\"/api/loggedWorkouts\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify(newLoggedWorkout)\n                });\n            })).then(()=>{\n                setisLogLoading(false);\n                setIsLogged(true);\n                isLog ? setTimeout(()=>router.push(\"/\"), 1000) : null;\n            }).then(()=>{}).catch(()=>setIsPostError(true));\n        }\n    };\n    const handlePostWorkout = async (e)=>{\n        await handleLogWorkout(e);\n        const userId = user.user_id;\n        const newPost = {\n            session_name: title,\n            description: description,\n            session_id: parseInt(numOfSessions),\n            user_id: userId\n        };\n        fetch(\"/api/posts\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(newPost)\n        }).then(()=>{\n            setTimeout(()=>router.push(\"/\"), 1000);\n        });\n    };\n    const handleShowPostDetails = ()=>{\n        setShowPostDetails(!showPostDetails);\n    };\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_General_LoadingSkeleton__WEBPACK_IMPORTED_MODULE_4__.LoadingSkeleton, {}, void 0, false, {\n        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/LogWorkoutContainer.js\",\n        lineNumber: 95,\n        columnNumber: 25\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"py-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"\".concat(_app_style__WEBPACK_IMPORTED_MODULE_8__[\"default\"].button, \" px-5 bg-LightPurple \").concat(!chosenExercises.length ? \"opacity-30\" : null),\n                        onClick: handleLogWorkout,\n                        disabled: !chosenExercises.length,\n                        children: \"Log\"\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/LogWorkoutContainer.js\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"\".concat(_app_style__WEBPACK_IMPORTED_MODULE_8__[\"default\"].button, \" px-5 bg-LightGreen\"),\n                        onClick: handleShowPostDetails,\n                        children: \"Post\"\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/LogWorkoutContainer.js\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"ml-4 italic text-lg \".concat(isLogged ? \"text-LightGreen\" : null, \" \").concat(isPostError ? \"text-Red\" : null),\n                        children: isLogLoading ? \"Logging...\" : isLogged ? \"Success\" : isPostError ? \"Error - try again\" : null\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/LogWorkoutContainer.js\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/LogWorkoutContainer.js\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, undefined),\n            showPostDetails ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-right my-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostInput__WEBPACK_IMPORTED_MODULE_6__.PostInput, {\n                        setTitle: setTitle,\n                        setDescription: setDescription\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/LogWorkoutContainer.js\",\n                        lineNumber: 132,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"\".concat(_app_style__WEBPACK_IMPORTED_MODULE_8__[\"default\"].button, \" \").concat(!chosenExercises.length || !title || !description ? \"opacity-30\" : null),\n                        onClick: handlePostWorkout,\n                        disabled: !chosenExercises.length || !title || !description,\n                        children: \"Post\"\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/LogWorkoutContainer.js\",\n                        lineNumber: 133,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-Red italic ml-2\",\n                        children: !title || !description ? \"Please provide both a title and description\" : null\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/LogWorkoutContainer.js\",\n                        lineNumber: 136,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/LogWorkoutContainer.js\",\n                lineNumber: 131,\n                columnNumber: 9\n            }, undefined) : null,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"z-1 mt-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ChosenExercisesContainer__WEBPACK_IMPORTED_MODULE_3__.ChosenExercisesContainer, {\n                    setChosenExercises: setChosenExercises,\n                    chosenExercises: chosenExercises,\n                    workoutData: workoutData,\n                    setWorkoutData: setWorkoutData\n                }, void 0, false, {\n                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/LogWorkoutContainer.js\",\n                    lineNumber: 141,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/LogWorkoutContainer.js\",\n                lineNumber: 140,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Log/LogWorkoutContainer.js\",\n        lineNumber: 98,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LogWorkoutContainer, \"5tcGRwtwOk04l6QgRdbVTcTzBjg=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        _app_contexts_userContext__WEBPACK_IMPORTED_MODULE_7__.useUserContext\n    ];\n});\n_c = LogWorkoutContainer;\nvar _c;\n$RefreshReg$(_c, \"LogWorkoutContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Mb2cvTG9nV29ya291dENvbnRhaW5lci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNNO0FBQ29CO0FBQ1Q7QUFDakI7QUFDSjtBQUNvQjtBQUMzQjtBQUUxQixNQUFNUyxzQkFBc0I7UUFBQyxFQUFDQyxlQUFlLEVBQUVDLGtCQUFrQixFQUFFQyxhQUFhLEVBQUM7O0lBQ3RGLE1BQU1DLFNBQVNSLDBEQUFTQTtJQUN4QixNQUFNLEVBQUNTLElBQUksRUFBRUMsT0FBTyxFQUFDLEdBQUdSLHlFQUFjQTtJQUN0QyxNQUFNLENBQUNTLFdBQVdDLGFBQWEsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2tCLGNBQWNDLGdCQUFnQixHQUFHbkIsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDb0IsVUFBVUMsWUFBWSxHQUFHckIsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDc0IsYUFBYUMsZUFBZSxHQUFHdkIsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDd0IsYUFBYUMsZUFBZSxHQUFHekIsK0NBQVFBLENBQUMsQ0FBQztJQUNoRCxNQUFNLENBQUMwQixlQUFlQyxpQkFBaUIsR0FBRzNCLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sQ0FBQzRCLGlCQUFpQkMsbUJBQW1CLEdBQUc3QiwrQ0FBUUEsQ0FBQztJQUN2RCxNQUFNLENBQUM4QixPQUFPQyxTQUFTLEdBQUcvQiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNnQyxhQUFhQyxlQUFlLEdBQUdqQywrQ0FBUUEsQ0FBQztJQUUvQ0MsZ0RBQVNBLENBQUM7UUFDUmlDLFFBQVFDLEdBQUcsQ0FBQztZQUFDQyxNQUFNO1NBQTJCLEVBQzNDQyxJQUFJLENBQUM7Z0JBQUMsQ0FBQ0MsS0FBSztZQUNYLE9BQU9KLFFBQVFDLEdBQUcsQ0FBQztnQkFBQ0csS0FBS0MsSUFBSTthQUFHO1FBQ2xDLEdBQ0NGLElBQUksQ0FBQztnQkFBQyxDQUFDRyxrQkFBa0I7WUFDeEJiLGlCQUFpQmEsa0JBQWtCQyxVQUFVLEdBQUc7WUFDaER4QixhQUFhO1FBQ2Y7SUFDSixHQUFHLEVBQUU7SUFFTCxNQUFNeUIsbUJBQW1CLE9BQU9DO1FBQzlCeEIsZ0JBQWdCO1FBQ2hCLE1BQU15QixRQUFRRCxFQUFFRSxNQUFNLENBQUNDLFdBQVcsS0FBSztRQUN2QyxNQUFNQyxZQUFZbkMsY0FBY29DLFVBQVU7UUFDMUMsTUFBTUMsU0FBU25DLEtBQUtvQyxPQUFPO1FBRTNCLElBQUssTUFBTUMsY0FBYzNCLFlBQWE7WUFDcENVLFFBQVFDLEdBQUcsQ0FDVFgsV0FBVyxDQUFDMkIsV0FBVyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0M7Z0JBQzNCLE1BQU1DLG1CQUFtQjtvQkFDdkJiLFlBQVlmO29CQUNaNkIsYUFBYUMsU0FBU0w7b0JBQ3RCSCxZQUFZRDtvQkFDWkcsU0FBU0Q7b0JBQ1RRLFFBQVFKLElBQUlJLE1BQU07b0JBQ2xCQyxNQUFNTCxJQUFJSyxJQUFJO2dCQUNoQjtnQkFFQSxPQUFPdEIsTUFBTyx1QkFBc0I7b0JBQ2xDdUIsUUFBUTtvQkFDUkMsU0FBUzt3QkFDUCxnQkFBZ0I7b0JBQ2xCO29CQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNUO2dCQUN2QjtZQUNGLElBRUNqQixJQUFJLENBQUM7Z0JBQ0psQixnQkFBZ0I7Z0JBQ2hCRSxZQUFZO2dCQUNadUIsUUFBUW9CLFdBQVcsSUFBTW5ELE9BQU9vRCxJQUFJLENBQUMsTUFBTSxRQUFRO1lBQ3JELEdBQ0M1QixJQUFJLENBQUMsS0FBTyxHQUNaNkIsS0FBSyxDQUFDLElBQU0zQyxlQUFlO1FBQ2hDO0lBQ0Y7SUFFQSxNQUFNNEMsb0JBQW9CLE9BQU94QjtRQUMvQixNQUFNRCxpQkFBaUJDO1FBQ3ZCLE1BQU1NLFNBQVNuQyxLQUFLb0MsT0FBTztRQUMzQixNQUFNa0IsVUFBVTtZQUNkQyxjQUFldkM7WUFDZkUsYUFBY0E7WUFDZFMsWUFBYWUsU0FBUzlCO1lBQ3RCd0IsU0FBVUQ7UUFDWjtRQUNBYixNQUFPLGNBQWE7WUFDbEJ1QixRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ0s7UUFDdkIsR0FBRy9CLElBQUksQ0FBQztZQUNOMkIsV0FBVyxJQUFNbkQsT0FBT29ELElBQUksQ0FBQyxNQUFNO1FBQ3JDO0lBQ0Y7SUFFQSxNQUFNSyx3QkFBd0I7UUFDNUJ6QyxtQkFBbUIsQ0FBQ0Q7SUFDdEI7SUFFQSxJQUFJWixXQUFXLHFCQUFPLDhEQUFDWixxRUFBZUE7Ozs7O0lBRXRDLHFCQUNFLDhEQUFDbUU7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQ0NELFdBQVcsR0FDVCxPQURZaEUsa0RBQU1BLENBQUNpRSxNQUFNLEVBQUMseUJBRTNCLE9BREMsQ0FBQy9ELGdCQUFnQmdFLE1BQU0sR0FBRyxlQUFlO3dCQUUzQ0MsU0FBU2pDO3dCQUNUa0MsVUFBVSxDQUFDbEUsZ0JBQWdCZ0UsTUFBTTtrQ0FDbEM7Ozs7OztrQ0FHRCw4REFBQ0Q7d0JBQ0NELFdBQVcsR0FBaUIsT0FBZGhFLGtEQUFNQSxDQUFDaUUsTUFBTSxFQUFDO3dCQUM1QkUsU0FBU0w7a0NBQ1Y7Ozs7OztrQ0FHRCw4REFBQ087d0JBQ0NMLFdBQVcsdUJBRVBsRCxPQURGRixXQUFXLG9CQUFvQixNQUNoQyxLQUFtQyxPQUFoQ0UsY0FBYyxhQUFhO2tDQUU5QkosZUFDRyxlQUNBRSxXQUNBLFlBQ0FFLGNBQ0Esc0JBQ0E7Ozs7Ozs7Ozs7OztZQUlQTSxnQ0FDQyw4REFBQzJDO2dCQUFJQyxXQUFZOztrQ0FDZiw4REFBQ2xFLGlEQUFTQTt3QkFBQ3lCLFVBQVVBO3dCQUFVRSxnQkFBZ0JBOzs7Ozs7a0NBQy9DLDhEQUFDd0M7d0JBQU9ELFdBQVcsR0FBb0IsT0FBakJoRSxrREFBTUEsQ0FBQ2lFLE1BQU0sRUFBQyxLQUEyRSxPQUF4RSxDQUFDL0QsZ0JBQWdCZ0UsTUFBTSxJQUFJLENBQUM1QyxTQUFTLENBQUNFLGNBQWMsZUFBZTt3QkFBUTJDLFNBQVNSO3dCQUFtQlMsVUFBVSxDQUFDbEUsZ0JBQWdCZ0UsTUFBTSxJQUFJLENBQUM1QyxTQUFTLENBQUNFO2tDQUFhOzs7Ozs7a0NBRzNNLDhEQUFDNkM7d0JBQUVMLFdBQVU7a0NBQXdCLENBQUMxQyxTQUFTLENBQUNFLGNBQWMsZ0RBQWdEOzs7Ozs7Ozs7Ozs0QkFFOUc7MEJBRUosOERBQUN1QztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ3JFLCtFQUF3QkE7b0JBQ3ZCUSxvQkFBb0JBO29CQUNwQkQsaUJBQWlCQTtvQkFDakJjLGFBQWFBO29CQUNiQyxnQkFBZ0JBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUsxQixFQUFFO0dBNUlXaEI7O1FBQ0lKLHNEQUFTQTtRQUNBRSxxRUFBY0E7OztLQUYzQkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0xvZy9Mb2dXb3Jrb3V0Q29udGFpbmVyLmpzPzg3NDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGlzdE9mRXhlcmNpc2VzIH0gZnJvbSBcIi4vUGlja0V4ZXJjaXNlc1wiO1xuaW1wb3J0IHsgQ2hvc2VuRXhlcmNpc2VzQ29udGFpbmVyIH0gZnJvbSBcIi4vQ2hvc2VuRXhlcmNpc2VzQ29udGFpbmVyXCI7XG5pbXBvcnQgeyBMb2FkaW5nU2tlbGV0b24gfSBmcm9tIFwiLi4vR2VuZXJhbC9Mb2FkaW5nU2tlbGV0b25cIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IFBvc3RJbnB1dCB9IGZyb20gXCIuL1Bvc3RJbnB1dFwiO1xuaW1wb3J0IHsgdXNlVXNlckNvbnRleHQgfSBmcm9tIFwiQC9hcHAvY29udGV4dHMvdXNlckNvbnRleHRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvYXBwL3N0eWxlXCI7XG5cbmV4cG9ydCBjb25zdCBMb2dXb3Jrb3V0Q29udGFpbmVyID0gKHtjaG9zZW5FeGVyY2lzZXMsIHNldENob3NlbkV4ZXJjaXNlcywgY2hvc2VuV29ya291dH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHt1c2VyLCBzZXRVc2VyfSA9IHVzZVVzZXJDb250ZXh0KCk7IFxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtpc0xvZ0xvYWRpbmcsIHNldGlzTG9nTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0xvZ2dlZCwgc2V0SXNMb2dnZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNQb3N0RXJyb3IsIHNldElzUG9zdEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3dvcmtvdXREYXRhLCBzZXRXb3Jrb3V0RGF0YV0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtudW1PZlNlc3Npb25zLCBzZXROdW1PZlNlc3Npb25zXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbc2hvd1Bvc3REZXRhaWxzLCBzZXRTaG93UG9zdERldGFpbHNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgUHJvbWlzZS5hbGwoW2ZldGNoKFwiL2FwaS9jaGVja0xvZ2dlZFdvcmtvdXRcIildKVxuICAgICAgLnRoZW4oKFtyZXMyXSkgPT4ge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW3JlczIuanNvbigpXSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKFtsb2dnZWRXb3Jrb3V0RGF0YV0pID0+IHtcbiAgICAgICAgc2V0TnVtT2ZTZXNzaW9ucyhsb2dnZWRXb3Jrb3V0RGF0YS5zZXNzaW9uX2lkICsgMSk7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUxvZ1dvcmtvdXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIHNldGlzTG9nTG9hZGluZyh0cnVlKTtcbiAgICBjb25zdCBpc0xvZyA9IGUudGFyZ2V0LnRleHRDb250ZW50ID09PSAnTG9nIFdvcmtvdXQnXG4gICAgY29uc3Qgd29ya291dElkID0gY2hvc2VuV29ya291dC53b3Jrb3V0X2lkO1xuICAgIGNvbnN0IHVzZXJJZCA9IHVzZXIudXNlcl9pZDtcblxuICAgIGZvciAoY29uc3QgZXhlcmNpc2VJZCBpbiB3b3Jrb3V0RGF0YSkge1xuICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgIHdvcmtvdXREYXRhW2V4ZXJjaXNlSWRdLm1hcCgoc2V0KSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3TG9nZ2VkV29ya291dCA9IHtcbiAgICAgICAgICAgIHNlc3Npb25faWQ6IG51bU9mU2Vzc2lvbnMsXG4gICAgICAgICAgICBleGVyY2lzZV9pZDogcGFyc2VJbnQoZXhlcmNpc2VJZCksXG4gICAgICAgICAgICB3b3Jrb3V0X2lkOiB3b3Jrb3V0SWQsXG4gICAgICAgICAgICB1c2VyX2lkOiB1c2VySWQsXG4gICAgICAgICAgICB3ZWlnaHQ6IHNldC53ZWlnaHQsXG4gICAgICAgICAgICByZXBzOiBzZXQucmVwcyxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgcmV0dXJuIGZldGNoKGAvYXBpL2xvZ2dlZFdvcmtvdXRzYCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3TG9nZ2VkV29ya291dCksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICBzZXRpc0xvZ0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgIHNldElzTG9nZ2VkKHRydWUpO1xuICAgICAgICAgIGlzTG9nID8gc2V0VGltZW91dCgoKSA9PiByb3V0ZXIucHVzaChcIi9cIiksIDEwMDApIDogbnVsbDtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge30pXG4gICAgICAgIC5jYXRjaCgoKSA9PiBzZXRJc1Bvc3RFcnJvcih0cnVlKSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVBvc3RXb3Jrb3V0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBhd2FpdCBoYW5kbGVMb2dXb3Jrb3V0KGUpO1xuICAgIGNvbnN0IHVzZXJJZCA9IHVzZXIudXNlcl9pZFxuICAgIGNvbnN0IG5ld1Bvc3QgPSB7XG4gICAgICBzZXNzaW9uX25hbWUgOiB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uIDogZGVzY3JpcHRpb24sXG4gICAgICBzZXNzaW9uX2lkIDogcGFyc2VJbnQobnVtT2ZTZXNzaW9ucyksXG4gICAgICB1c2VyX2lkIDogdXNlcklkXG4gICAgfVxuICAgIGZldGNoKGAvYXBpL3Bvc3RzYCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3UG9zdClcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gcm91dGVyLnB1c2goXCIvXCIpLCAxMDAwKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVNob3dQb3N0RGV0YWlscyA9ICgpID0+IHtcbiAgICBzZXRTaG93UG9zdERldGFpbHMoIXNob3dQb3N0RGV0YWlscyk7XG4gIH07XG5cbiAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxMb2FkaW5nU2tlbGV0b24gLz47XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmJ1dHRvbn0gcHgtNSBiZy1MaWdodFB1cnBsZSAke1xuICAgICAgICAgICAgIWNob3NlbkV4ZXJjaXNlcy5sZW5ndGggPyBcIm9wYWNpdHktMzBcIiA6IG51bGxcbiAgICAgICAgICB9YH1cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMb2dXb3Jrb3V0fVxuICAgICAgICAgIGRpc2FibGVkPXshY2hvc2VuRXhlcmNpc2VzLmxlbmd0aH1cbiAgICAgICAgPlxuICAgICAgICAgIExvZ1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmJ1dHRvbn0gcHgtNSBiZy1MaWdodEdyZWVuYH1cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTaG93UG9zdERldGFpbHN9XG4gICAgICAgID5cbiAgICAgICAgICBQb3N0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8cFxuICAgICAgICAgIGNsYXNzTmFtZT17YG1sLTQgaXRhbGljIHRleHQtbGcgJHtcbiAgICAgICAgICAgIGlzTG9nZ2VkID8gXCJ0ZXh0LUxpZ2h0R3JlZW5cIiA6IG51bGxcbiAgICAgICAgICB9ICR7aXNQb3N0RXJyb3IgPyBcInRleHQtUmVkXCIgOiBudWxsfWB9XG4gICAgICAgID5cbiAgICAgICAgICB7aXNMb2dMb2FkaW5nXG4gICAgICAgICAgICA/IFwiTG9nZ2luZy4uLlwiXG4gICAgICAgICAgICA6IGlzTG9nZ2VkXG4gICAgICAgICAgICA/IFwiU3VjY2Vzc1wiXG4gICAgICAgICAgICA6IGlzUG9zdEVycm9yXG4gICAgICAgICAgICA/IFwiRXJyb3IgLSB0cnkgYWdhaW5cIlxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAge3Nob3dQb3N0RGV0YWlscyA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sIGl0ZW1zLXJpZ2h0IG15LTNgfT5cbiAgICAgICAgICA8UG9zdElucHV0IHNldFRpdGxlPXtzZXRUaXRsZX0gc2V0RGVzY3JpcHRpb249e3NldERlc2NyaXB0aW9ufSAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHtzdHlsZXMuYnV0dG9ufSAkeyFjaG9zZW5FeGVyY2lzZXMubGVuZ3RoIHx8ICF0aXRsZSB8fCAhZGVzY3JpcHRpb24gPyBcIm9wYWNpdHktMzBcIiA6IG51bGx9YH0gb25DbGljaz17aGFuZGxlUG9zdFdvcmtvdXR9IGRpc2FibGVkPXshY2hvc2VuRXhlcmNpc2VzLmxlbmd0aCB8fCAhdGl0bGUgfHwgIWRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgIFBvc3RcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVJlZCBpdGFsaWMgbWwtMlwiPnshdGl0bGUgfHwgIWRlc2NyaXB0aW9uID8gJ1BsZWFzZSBwcm92aWRlIGJvdGggYSB0aXRsZSBhbmQgZGVzY3JpcHRpb24nIDogbnVsbH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei0xIG10LTVcIj5cbiAgICAgICAgPENob3NlbkV4ZXJjaXNlc0NvbnRhaW5lclxuICAgICAgICAgIHNldENob3NlbkV4ZXJjaXNlcz17c2V0Q2hvc2VuRXhlcmNpc2VzfVxuICAgICAgICAgIGNob3NlbkV4ZXJjaXNlcz17Y2hvc2VuRXhlcmNpc2VzfVxuICAgICAgICAgIHdvcmtvdXREYXRhPXt3b3Jrb3V0RGF0YX1cbiAgICAgICAgICBzZXRXb3Jrb3V0RGF0YT17c2V0V29ya291dERhdGF9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaXN0T2ZFeGVyY2lzZXMiLCJDaG9zZW5FeGVyY2lzZXNDb250YWluZXIiLCJMb2FkaW5nU2tlbGV0b24iLCJ1c2VSb3V0ZXIiLCJQb3N0SW5wdXQiLCJ1c2VVc2VyQ29udGV4dCIsInN0eWxlcyIsIkxvZ1dvcmtvdXRDb250YWluZXIiLCJjaG9zZW5FeGVyY2lzZXMiLCJzZXRDaG9zZW5FeGVyY2lzZXMiLCJjaG9zZW5Xb3Jrb3V0Iiwicm91dGVyIiwidXNlciIsInNldFVzZXIiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0xvZ0xvYWRpbmciLCJzZXRpc0xvZ0xvYWRpbmciLCJpc0xvZ2dlZCIsInNldElzTG9nZ2VkIiwiaXNQb3N0RXJyb3IiLCJzZXRJc1Bvc3RFcnJvciIsIndvcmtvdXREYXRhIiwic2V0V29ya291dERhdGEiLCJudW1PZlNlc3Npb25zIiwic2V0TnVtT2ZTZXNzaW9ucyIsInNob3dQb3N0RGV0YWlscyIsInNldFNob3dQb3N0RGV0YWlscyIsInRpdGxlIiwic2V0VGl0bGUiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwiUHJvbWlzZSIsImFsbCIsImZldGNoIiwidGhlbiIsInJlczIiLCJqc29uIiwibG9nZ2VkV29ya291dERhdGEiLCJzZXNzaW9uX2lkIiwiaGFuZGxlTG9nV29ya291dCIsImUiLCJpc0xvZyIsInRhcmdldCIsInRleHRDb250ZW50Iiwid29ya291dElkIiwid29ya291dF9pZCIsInVzZXJJZCIsInVzZXJfaWQiLCJleGVyY2lzZUlkIiwibWFwIiwic2V0IiwibmV3TG9nZ2VkV29ya291dCIsImV4ZXJjaXNlX2lkIiwicGFyc2VJbnQiLCJ3ZWlnaHQiLCJyZXBzIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic2V0VGltZW91dCIsInB1c2giLCJjYXRjaCIsImhhbmRsZVBvc3RXb3Jrb3V0IiwibmV3UG9zdCIsInNlc3Npb25fbmFtZSIsImhhbmRsZVNob3dQb3N0RGV0YWlscyIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsImxlbmd0aCIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Log/LogWorkoutContainer.js\n"));

/***/ })

});