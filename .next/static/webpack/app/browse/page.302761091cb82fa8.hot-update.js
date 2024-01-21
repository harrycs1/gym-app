"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/browse/page",{

/***/ "(app-pages-browser)/./src/app/components/Browse/BrowseSingleContainer.js":
/*!************************************************************!*\
  !*** ./src/app/components/Browse/BrowseSingleContainer.js ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BrowseSingleContainer: function() { return /* binding */ BrowseSingleContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _General_LoadingSkeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../General/LoadingSkeleton */ \"(app-pages-browser)/./src/app/components/General/LoadingSkeleton.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _app_contexts_userContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/contexts/userContext */ \"(app-pages-browser)/./src/app/contexts/userContext.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var _app_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app/style */ \"(app-pages-browser)/./src/app/style.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst BrowseSingleContainer = (param)=>{\n    let { workout, creator } = param;\n    _s();\n    const { user, setUser } = (0,_app_contexts_userContext__WEBPACK_IMPORTED_MODULE_4__.useUserContext)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [exercises, setExercises] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        Promise.all([\n            fetch(\"/api/workouts/\".concat(workout.workout_id))\n        ]).then((param)=>{\n            let [res] = param;\n            return Promise.all([\n                res.json()\n            ]);\n        }).then((param)=>{\n            let [excerisesData] = param;\n            setExercises(excerisesData);\n            setIsLoading(false);\n        });\n    }, []);\n    const notify = (message)=>{\n        (0,react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast)(message, {\n            position: \"top-center\",\n            autoClose: 5000,\n            hideProgressBar: false,\n            closeOnClick: true,\n            pauseOnHover: true,\n            draggable: true,\n            progress: undefined,\n            theme: \"light\"\n        });\n    };\n    function postToJunction(workoutId) {\n        exercises.map((exercise)=>{\n            const postData = {\n                exercise_id: exercise.exercise_id,\n                workout_id: workoutId\n            };\n            axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].post(\"/api/workouts/\".concat(workoutId), postData).then((param)=>{\n                let { data } = param;\n            }).catch((err)=>{\n                notify(err);\n            });\n        });\n        notify(\"Workout Added Successfully\");\n    }\n    function copyWorkout() {\n        console.log(exercises);\n        const postData = {\n            workout_name: workout.workout_name,\n            creator_id: user.user_id\n        };\n        console.log(postData);\n        axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].post(\"/api/workouts\", postData).then((param)=>{\n            let { data: { newWorkout } } = param;\n            console.log(newWorkout);\n            postToJunction(newWorkout.workout_id);\n        }).catch((param)=>{\n            let { response: { data } } = param;\n            notify(data);\n        });\n    }\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"w-full pl-4 pt-5 pb-2 font-extrabold text-3xl text-DeepPurple mb-5 text-center opacity-70\",\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Browse/BrowseSingleContainer.js\",\n            lineNumber: 71,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col w-[85%] sm:w-[80%] border\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/workouts/\".concat(workout.workout_id),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"\".concat(_app_style__WEBPACK_IMPORTED_MODULE_7__[\"default\"].cardTitle, \" hover:underline\"),\n                                    children: workout.workout_name\n                                }, void 0, false, {\n                                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Browse/BrowseSingleContainer.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Browse/BrowseSingleContainer.js\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/profile/\",\n                                className: \"bg-LightPurple rounded-xl w-fit px-2 py-1 mt-2 h-fit\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"flex text-platinum text-sm font-light cursor-pointer hover:underline\",\n                                    children: creator\n                                }, void 0, false, {\n                                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Browse/BrowseSingleContainer.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Browse/BrowseSingleContainer.js\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Browse/BrowseSingleContainer.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hidden md:flex justify-center items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"h-fit font-bold text-right\",\n                            children: \"Add to your workouts\"\n                        }, void 0, false, {\n                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Browse/BrowseSingleContainer.js\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Browse/BrowseSingleContainer.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[15%] sm:w-[20%] flex justify-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: copyWorkout,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"h-full max-h-20 hover:scale-110 transition ease-in-out\",\n                                src: \"/add.svg\"\n                            }, void 0, false, {\n                                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Browse/BrowseSingleContainer.js\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Browse/BrowseSingleContainer.js\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Browse/BrowseSingleContainer.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Browse/BrowseSingleContainer.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, {\n                position: \"top-center\",\n                autoClose: 5000,\n                hideProgressBar: false,\n                newestOnTop: false,\n                closeOnClick: true,\n                rtl: false,\n                pauseOnFocusLoss: true,\n                draggable: true,\n                pauseOnHover: true,\n                theme: \"light\"\n            }, void 0, false, {\n                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Browse/BrowseSingleContainer.js\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Browse/BrowseSingleContainer.js\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BrowseSingleContainer, \"SPc78sFAfU8NCYH2vXU8i1t1xbg=\", false, function() {\n    return [\n        _app_contexts_userContext__WEBPACK_IMPORTED_MODULE_4__.useUserContext\n    ];\n});\n_c = BrowseSingleContainer;\nvar _c;\n$RefreshReg$(_c, \"BrowseSingleContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ccm93c2UvQnJvd3NlU2luZ2xlQ29udGFpbmVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ2U7QUFDaUI7QUFDcEM7QUFDbUM7QUFDTDtBQUNSO0FBQ2Q7QUFFMUIsTUFBTVMsd0JBQXdCO1FBQUMsRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUU7O0lBQ3hELE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUUsR0FBR1IseUVBQWNBO0lBQ3hDLE1BQU0sQ0FBQ1MsV0FBV0MsYUFBYSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNjLFdBQVlDLGFBQWEsR0FBR2YsK0NBQVFBLENBQUMsRUFBRTtJQUU5Q0QsZ0RBQVNBLENBQUM7UUFDUmlCLFFBQVFDLEdBQUcsQ0FBQztZQUFDQyxNQUFNLGlCQUFvQyxPQUFuQlYsUUFBUVcsVUFBVTtTQUFJLEVBQ3ZEQyxJQUFJLENBQUM7Z0JBQUMsQ0FBQ0MsSUFBSTtZQUNWLE9BQU9MLFFBQVFDLEdBQUcsQ0FBQztnQkFBQ0ksSUFBSUMsSUFBSTthQUFHO1FBQ2pDLEdBQ0NGLElBQUksQ0FBQztnQkFBQyxDQUFDRyxjQUFjO1lBQ3BCUixhQUFhUTtZQUNiVixhQUFhO1FBQ2Y7SUFDSixHQUFHLEVBQUU7SUFFTCxNQUFNVyxTQUFTLENBQUNDO1FBQ2RwQixxREFBS0EsQ0FBQ29CLFNBQVM7WUFDYkMsVUFBVTtZQUNWQyxXQUFXO1lBQ1hDLGlCQUFpQjtZQUNqQkMsY0FBYztZQUNkQyxjQUFjO1lBQ2RDLFdBQVc7WUFDWEMsVUFBVUM7WUFDVkMsT0FBTztRQUNUO0lBQ0Y7SUFFQSxTQUFTQyxlQUFlQyxTQUFTO1FBQy9CdEIsVUFBVXVCLEdBQUcsQ0FBQyxDQUFDQztZQUNiLE1BQU1DLFdBQVc7Z0JBQ2ZDLGFBQWFGLFNBQVNFLFdBQVc7Z0JBQ2pDckIsWUFBWWlCO1lBQ2Q7WUFDQWxDLDZDQUFLQSxDQUFDdUMsSUFBSSxDQUFDLGlCQUEyQixPQUFWTCxZQUFhRyxVQUFVbkIsSUFBSSxDQUFDO29CQUFDLEVBQUNzQixJQUFJLEVBQUM7WUFDL0QsR0FBR0MsS0FBSyxDQUFDQyxDQUFBQTtnQkFDUHBCLE9BQU9vQjtZQUNUO1FBQ0Y7UUFFQXBCLE9BQU87SUFDVDtJQUVBLFNBQVNxQjtRQUNQQyxRQUFRQyxHQUFHLENBQUNqQztRQUNaLE1BQU15QixXQUFXO1lBQ2ZTLGNBQWN4QyxRQUFRd0MsWUFBWTtZQUNsQ0MsWUFBWXZDLEtBQUt3QyxPQUFPO1FBQzFCO1FBQ0FKLFFBQVFDLEdBQUcsQ0FBQ1I7UUFDWnJDLDZDQUFLQSxDQUFDdUMsSUFBSSxDQUFDLGlCQUFpQkYsVUFBVW5CLElBQUksQ0FBQztnQkFBQyxFQUFDc0IsTUFBTSxFQUFDUyxVQUFVLEVBQUMsRUFBQztZQUM5REwsUUFBUUMsR0FBRyxDQUFDSTtZQUNaaEIsZUFBZWdCLFdBQVdoQyxVQUFVO1FBQ3RDLEdBQUd3QixLQUFLLENBQUM7Z0JBQUMsRUFBQ1MsVUFBVSxFQUFDVixJQUFJLEVBQUMsRUFBQztZQUMxQmxCLE9BQU9rQjtRQUNUO0lBQ0Y7SUFFQSxJQUFJOUIsV0FBVztRQUNiLHFCQUNFLDhEQUFDeUM7WUFBR0MsV0FBVTtzQkFBNEY7Ozs7OztJQUk5RztJQUVBLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNBO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUlELFdBQVk7OzBDQUNmLDhEQUFDeEQsa0RBQUlBO2dDQUFDMEQsTUFBTSxhQUFnQyxPQUFuQmhELFFBQVFXLFVBQVU7MENBQ3pDLDRFQUFDc0M7b0NBQUVILFdBQVcsR0FBb0IsT0FBakJoRCxrREFBTUEsQ0FBQ29ELFNBQVMsRUFBQzs4Q0FBb0JsRCxRQUFRd0MsWUFBWTs7Ozs7Ozs7Ozs7MENBRTVFLDhEQUFDbEQsa0RBQUlBO2dDQUFDMEQsTUFBTztnQ0FBaUJGLFdBQVU7MENBQ3RDLDRFQUFDRztvQ0FBRUgsV0FBVTs4Q0FBd0U3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR3pGLDhEQUFDOEM7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUNHOzRCQUFFSCxXQUFVO3NDQUE2Qjs7Ozs7Ozs7Ozs7a0NBRTVDLDhEQUFDQzt3QkFBSUQsV0FBVTtrQ0FDYiw0RUFBQ0s7NEJBQU9DLFNBQVNmO3NDQUNmLDRFQUFDZ0I7Z0NBQUlQLFdBQVU7Z0NBQXlEUSxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlsRiw4REFBQzFELDBEQUFjQTtnQkFDYnNCLFVBQVM7Z0JBQ1RDLFdBQVc7Z0JBQ1hDLGlCQUFpQjtnQkFDakJtQyxhQUFhO2dCQUNibEMsWUFBWTtnQkFDWm1DLEtBQUs7Z0JBQ0xDLGdCQUFnQjtnQkFDaEJsQyxTQUFTO2dCQUNURCxZQUFZO2dCQUNaSSxPQUFNOzs7Ozs7Ozs7Ozs7QUFJZCxFQUFFO0dBckdXM0I7O1FBQ2VKLHFFQUFjQTs7O0tBRDdCSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvQnJvd3NlL0Jyb3dzZVNpbmdsZUNvbnRhaW5lci5qcz82Zjc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExvYWRpbmdTa2VsZXRvbiB9IGZyb20gXCIuLi9HZW5lcmFsL0xvYWRpbmdTa2VsZXRvblwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgdXNlVXNlckNvbnRleHQgfSBmcm9tIFwiQC9hcHAvY29udGV4dHMvdXNlckNvbnRleHRcIjtcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9hcHAvc3R5bGVcIjtcblxuZXhwb3J0IGNvbnN0IEJyb3dzZVNpbmdsZUNvbnRhaW5lciA9ICh7IHdvcmtvdXQsIGNyZWF0b3IgfSkgPT4ge1xuICBjb25zdCB7IHVzZXIsIHNldFVzZXIgfSA9IHVzZVVzZXJDb250ZXh0KCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2V4ZXJjaXNlcyAsIHNldEV4ZXJjaXNlc10gPSB1c2VTdGF0ZShbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIFByb21pc2UuYWxsKFtmZXRjaChgL2FwaS93b3Jrb3V0cy8ke3dvcmtvdXQud29ya291dF9pZH1gKV0pXG4gICAgICAudGhlbigoW3Jlc10pID0+IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtyZXMuanNvbigpXSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKFtleGNlcmlzZXNEYXRhXSkgPT4ge1xuICAgICAgICBzZXRFeGVyY2lzZXMoZXhjZXJpc2VzRGF0YSk7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICB9KVxuICB9LCBbXSk7XG5cbiAgY29uc3Qgbm90aWZ5ID0gKG1lc3NhZ2UpID0+IHtcbiAgICB0b2FzdChtZXNzYWdlLCB7XG4gICAgICBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIsXG4gICAgICBhdXRvQ2xvc2U6IDUwMDAsXG4gICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxuICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcbiAgICAgIHRoZW1lOiBcImxpZ2h0XCIsXG4gICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gcG9zdFRvSnVuY3Rpb24od29ya291dElkKXtcbiAgICBleGVyY2lzZXMubWFwKChleGVyY2lzZSkgPT4ge1xuICAgICAgY29uc3QgcG9zdERhdGEgPSB7XG4gICAgICAgIGV4ZXJjaXNlX2lkOiBleGVyY2lzZS5leGVyY2lzZV9pZCxcbiAgICAgICAgd29ya291dF9pZDogd29ya291dElkXG4gICAgICB9XG4gICAgICBheGlvcy5wb3N0KGAvYXBpL3dvcmtvdXRzLyR7d29ya291dElkfWAsIHBvc3REYXRhKS50aGVuKCh7ZGF0YX0pPT57XG4gICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICBub3RpZnkoZXJyKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgbm90aWZ5KCdXb3Jrb3V0IEFkZGVkIFN1Y2Nlc3NmdWxseScpXG4gIH1cblxuICBmdW5jdGlvbiBjb3B5V29ya291dCgpe1xuICAgIGNvbnNvbGUubG9nKGV4ZXJjaXNlcylcbiAgICBjb25zdCBwb3N0RGF0YSA9IHtcbiAgICAgIHdvcmtvdXRfbmFtZTogd29ya291dC53b3Jrb3V0X25hbWUsXG4gICAgICBjcmVhdG9yX2lkOiB1c2VyLnVzZXJfaWRcbiAgICB9XG4gICAgY29uc29sZS5sb2cocG9zdERhdGEpXG4gICAgYXhpb3MucG9zdCgnL2FwaS93b3Jrb3V0cycsIHBvc3REYXRhKS50aGVuKCh7ZGF0YToge25ld1dvcmtvdXR9fSk9PntcbiAgICAgIGNvbnNvbGUubG9nKG5ld1dvcmtvdXQpXG4gICAgICBwb3N0VG9KdW5jdGlvbihuZXdXb3Jrb3V0LndvcmtvdXRfaWQpXG4gICAgfSkuY2F0Y2goKHtyZXNwb25zZToge2RhdGF9fSk9PntcbiAgICAgIG5vdGlmeShkYXRhKVxuICAgIH0pXG4gIH1cblxuICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ3LWZ1bGwgcGwtNCBwdC01IHBiLTIgZm9udC1leHRyYWJvbGQgdGV4dC0zeGwgdGV4dC1EZWVwUHVycGxlIG1iLTUgdGV4dC1jZW50ZXIgb3BhY2l0eS03MFwiPlxuICAgICAgICBMb2FkaW5nLi4uXG4gICAgICA8L2gxPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBmbGV4XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBmbGV4LWNvbCB3LVs4NSVdIHNtOnctWzgwJV0gYm9yZGVyYH0+XG4gICAgICAgICAgPExpbmsgaHJlZj17YC93b3Jrb3V0cy8ke3dvcmtvdXQud29ya291dF9pZH1gfT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNhcmRUaXRsZX0gaG92ZXI6dW5kZXJsaW5lYH0+e3dvcmtvdXQud29ya291dF9uYW1lfTwvcD5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9maWxlLyR7Jyd9YH0gY2xhc3NOYW1lPVwiYmctTGlnaHRQdXJwbGUgcm91bmRlZC14bCB3LWZpdCBweC0yIHB5LTEgbXQtMiBoLWZpdFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCB0ZXh0LXBsYXRpbnVtIHRleHQtc20gZm9udC1saWdodCBjdXJzb3ItcG9pbnRlciBob3Zlcjp1bmRlcmxpbmVcIj57Y3JlYXRvcn08L3A+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoLWZpdCBmb250LWJvbGQgdGV4dC1yaWdodFwiPkFkZCB0byB5b3VyIHdvcmtvdXRzPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVsxNSVdIHNtOnctWzIwJV0gZmxleCBqdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y29weVdvcmtvdXR9PlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLWZ1bGwgbWF4LWgtMjAgaG92ZXI6c2NhbGUtMTEwIHRyYW5zaXRpb24gZWFzZS1pbi1vdXRcIiBzcmM9Jy9hZGQuc3ZnJz48L2ltZz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxUb2FzdENvbnRhaW5lclxuICAgICAgICBwb3NpdGlvbj1cInRvcC1jZW50ZXJcIlxuICAgICAgICBhdXRvQ2xvc2U9ezUwMDB9XG4gICAgICAgIGhpZGVQcm9ncmVzc0Jhcj17ZmFsc2V9XG4gICAgICAgIG5ld2VzdE9uVG9wPXtmYWxzZX1cbiAgICAgICAgY2xvc2VPbkNsaWNrXG4gICAgICAgIHJ0bD17ZmFsc2V9XG4gICAgICAgIHBhdXNlT25Gb2N1c0xvc3NcbiAgICAgICAgZHJhZ2dhYmxlXG4gICAgICAgIHBhdXNlT25Ib3ZlclxuICAgICAgICB0aGVtZT1cImxpZ2h0XCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxvYWRpbmdTa2VsZXRvbiIsImF4aW9zIiwidXNlVXNlckNvbnRleHQiLCJUb2FzdENvbnRhaW5lciIsInRvYXN0Iiwic3R5bGVzIiwiQnJvd3NlU2luZ2xlQ29udGFpbmVyIiwid29ya291dCIsImNyZWF0b3IiLCJ1c2VyIiwic2V0VXNlciIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImV4ZXJjaXNlcyIsInNldEV4ZXJjaXNlcyIsIlByb21pc2UiLCJhbGwiLCJmZXRjaCIsIndvcmtvdXRfaWQiLCJ0aGVuIiwicmVzIiwianNvbiIsImV4Y2VyaXNlc0RhdGEiLCJub3RpZnkiLCJtZXNzYWdlIiwicG9zaXRpb24iLCJhdXRvQ2xvc2UiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJjbG9zZU9uQ2xpY2siLCJwYXVzZU9uSG92ZXIiLCJkcmFnZ2FibGUiLCJwcm9ncmVzcyIsInVuZGVmaW5lZCIsInRoZW1lIiwicG9zdFRvSnVuY3Rpb24iLCJ3b3Jrb3V0SWQiLCJtYXAiLCJleGVyY2lzZSIsInBvc3REYXRhIiwiZXhlcmNpc2VfaWQiLCJwb3N0IiwiZGF0YSIsImNhdGNoIiwiZXJyIiwiY29weVdvcmtvdXQiLCJjb25zb2xlIiwibG9nIiwid29ya291dF9uYW1lIiwiY3JlYXRvcl9pZCIsInVzZXJfaWQiLCJuZXdXb3Jrb3V0IiwicmVzcG9uc2UiLCJoMSIsImNsYXNzTmFtZSIsImRpdiIsImhyZWYiLCJwIiwiY2FyZFRpdGxlIiwiYnV0dG9uIiwib25DbGljayIsImltZyIsInNyYyIsIm5ld2VzdE9uVG9wIiwicnRsIiwicGF1c2VPbkZvY3VzTG9zcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Browse/BrowseSingleContainer.js\n"));

/***/ })

});