"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/profile/[username]/page",{

/***/ "(app-pages-browser)/./src/app/profile/[username]/page.js":
/*!********************************************!*\
  !*** ./src/app/profile/[username]/page.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProfilePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_components_General_LoadingSkeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/components/General/LoadingSkeleton */ \"(app-pages-browser)/./src/app/components/General/LoadingSkeleton.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_contexts_userContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/contexts/userContext */ \"(app-pages-browser)/./src/app/contexts/userContext.js\");\n/* harmony import */ var _components_workouts_WorkoutCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/workouts/WorkoutCard */ \"(app-pages-browser)/./src/app/components/workouts/WorkoutCard.jsx\");\n/* harmony import */ var _app_components_Posts_UserPosts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/components/Posts/UserPosts */ \"(app-pages-browser)/./src/app/components/Posts/UserPosts.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _app_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app/style */ \"(app-pages-browser)/./src/app/style.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction ProfilePage(param) {\n    let { params } = param;\n    _s();\n    const { user, setUser } = (0,_app_contexts_userContext__WEBPACK_IMPORTED_MODULE_3__.useUserContext)();\n    const [profileUser, setProfileUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [workouts, setWorkouts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [isDeleted, setIsDeleted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [showPosts, setShowPosts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        Promise.all([\n            fetch(\"/api/workouts\"),\n            fetch(\"/api/posts\"),\n            fetch(\"/api/users/profile/\".concat(params.username))\n        ]).then((param)=>{\n            let [res, res2, res3] = param;\n            return Promise.all([\n                res.json(),\n                res2.json(),\n                res3.json()\n            ]);\n        }).then((param)=>{\n            let [workoutsData, postsData, userData] = param;\n            setProfileUser(userData);\n            const workoutData = workoutsData.filter((workout)=>workout.creator_id === userData.user_id);\n            const postData = postsData.filter((post)=>post.user_id === userData.user_id);\n            setWorkouts(workoutData);\n            setPosts(postData);\n            setIsLoading(false);\n        });\n    }, []);\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_General_LoadingSkeleton__WEBPACK_IMPORTED_MODULE_1__.LoadingSkeleton, {}, void 0, false, {\n            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n            lineNumber: 39,\n            columnNumber: 12\n        }, this);\n    }\n    const handleLogout = ()=>{\n        setUser({});\n        router.push(\"/\");\n    };\n    const handleShowPosts = ()=>{\n        setShowPosts(!showPosts);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat(_app_style__WEBPACK_IMPORTED_MODULE_7__[\"default\"].bodySection),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-full justify-between items-end pr-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-fit flex items-end gap-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"h-fit \".concat(_app_style__WEBPACK_IMPORTED_MODULE_7__[\"default\"].title),\n                                    children: profileUser.username\n                                }, void 0, false, {\n                                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"h-12\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: profileUser.image_url,\n                                        className: \"h-full\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this),\n                        user.username === profileUser.username ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"border rounded-lg p-2\",\n                            onClick: handleLogout,\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                            lineNumber: 61,\n                            columnNumber: 53\n                        }, this) : null\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pt-4 mb-10 md:columns-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full break-inside-avoid\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"\".concat(_app_style__WEBPACK_IMPORTED_MODULE_7__[\"default\"].subtitle),\n                                    children: \"Recent Posts\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"rounded-2xl flex flex-col justify-center\",\n                                    children: posts.map((post, index, array)=>{\n                                        const isNotLastChild = index !== array.length - 1 ? true : false;\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex justify-center mt-3\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Posts_UserPosts__WEBPACK_IMPORTED_MODULE_5__.UserPostContainer, {\n                                                post: post,\n                                                isNotLastChild: isNotLastChild\n                                            }, void 0, false, {\n                                                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                                lineNumber: 71,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, post.post_id, false, {\n                                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 19\n                                        }, this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full break-inside-avoid\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"\".concat(_app_style__WEBPACK_IMPORTED_MODULE_7__[\"default\"].subtitle),\n                                    children: \"Workouts\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, this),\n                                workouts.map((workout)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex justify-start w-full\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_workouts_WorkoutCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            canDelete: user.user_id === workout.creator_id,\n                                            workout: workout,\n                                            setIsDeleted: setIsDeleted,\n                                            setWorkouts: setWorkouts\n                                        }, void 0, false, {\n                                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                            lineNumber: 86,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, workout.workout_id, false, {\n                                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 17\n                                    }, this);\n                                })\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(ProfilePage, \"1eCh0vtlZyFLC6OQQT/Qha4/55c=\", false, function() {\n    return [\n        _app_contexts_userContext__WEBPACK_IMPORTED_MODULE_3__.useUserContext,\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = ProfilePage;\nvar _c;\n$RefreshReg$(_c, \"ProfilePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZmlsZS9bdXNlcm5hbWVdL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUMyRTtBQUMvQjtBQUNnQjtBQUNJO0FBQ0s7QUFDekI7QUFDWDtBQUVsQixTQUFTUSxZQUFZLEtBQVE7UUFBUixFQUFDQyxNQUFNLEVBQUMsR0FBUjs7SUFDbEMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRSxHQUFHUix5RUFBY0E7SUFDeEMsTUFBTSxDQUFDUyxhQUFhQyxlQUFlLEdBQUdYLCtDQUFRQSxDQUFDLEVBQUU7SUFDakQsTUFBTSxDQUFDWSxXQUFXQyxhQUFhLEdBQUdiLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2MsT0FBT0MsU0FBUyxHQUFHZiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDLE1BQU0sQ0FBQ2dCLFVBQVVDLFlBQVksR0FBR2pCLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDa0IsV0FBV0MsYUFBYSxHQUFHbkIsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDb0IsV0FBV0MsYUFBYSxHQUFHckIsK0NBQVFBLENBQUM7SUFFM0MsTUFBTXNCLFNBQVNsQiwwREFBU0E7SUFFeEJMLGdEQUFTQSxDQUFDO1FBQ1J3QixRQUFRQyxHQUFHLENBQUM7WUFBQ0MsTUFBTztZQUFpQkEsTUFBTztZQUFjQSxNQUFNLHNCQUFzQyxPQUFoQmxCLE9BQU9tQixRQUFRO1NBQUksRUFDdEdDLElBQUksQ0FBQztnQkFBQyxDQUFDQyxLQUFLQyxNQUFNQyxLQUFLO1lBQ3RCLE9BQU9QLFFBQVFDLEdBQUcsQ0FBQztnQkFBQ0ksSUFBSUcsSUFBSTtnQkFBSUYsS0FBS0UsSUFBSTtnQkFBSUQsS0FBS0MsSUFBSTthQUFHO1FBQzNELEdBQ0NKLElBQUksQ0FBQztnQkFBQyxDQUFDSyxjQUFjQyxXQUFXQyxTQUFTO1lBQ3hDdkIsZUFBZXVCO1lBQ2YsTUFBTUMsY0FBY0gsYUFBYUksTUFBTSxDQUNyQyxDQUFDQyxVQUFZQSxRQUFRQyxVQUFVLEtBQUtKLFNBQVNLLE9BQU87WUFFdEQsTUFBTUMsV0FBV1AsVUFBVUcsTUFBTSxDQUFDLENBQUNLLE9BQVNBLEtBQUtGLE9BQU8sS0FBS0wsU0FBU0ssT0FBTztZQUM3RXRCLFlBQVlrQjtZQUNacEIsU0FBU3lCO1lBQ1QzQixhQUFhO1FBQ2Y7SUFDSixHQUFHLEVBQUU7SUFFTCxJQUFJRCxXQUFXO1FBQ2IscUJBQU8sOERBQUNkLG9GQUFlQTs7Ozs7SUFDekI7SUFFQSxNQUFNNEMsZUFBZTtRQUNuQmpDLFFBQVEsQ0FBQztRQUNUYSxPQUFPcUIsSUFBSSxDQUFDO0lBQ2Q7SUFFQSxNQUFNQyxrQkFBa0I7UUFDdEJ2QixhQUFhLENBQUNEO0lBQ2hCO0lBRUEscUJBQ0UsOERBQUN5QjtRQUFLQyxXQUFZO2tCQUNoQiw0RUFBQ0M7WUFBSUQsV0FBVyxHQUFzQixPQUFuQnpDLGtEQUFNQSxDQUFDMkMsV0FBVzs7OEJBQ25DLDhEQUFDRDtvQkFBSUQsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFJRCxXQUFVOzs4Q0FDYiw4REFBQ0c7b0NBQUdILFdBQVcsU0FBc0IsT0FBYnpDLGtEQUFNQSxDQUFDNkMsS0FBSzs4Q0FBS3hDLFlBQVlnQixRQUFROzs7Ozs7OENBQzdELDhEQUFDcUI7b0NBQUlELFdBQVU7OENBQ2IsNEVBQUNLO3dDQUFJQyxLQUFLMUMsWUFBWTJDLFNBQVM7d0NBQUVQLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQUc5Q3RDLEtBQUtrQixRQUFRLEtBQUtoQixZQUFZZ0IsUUFBUSxpQkFBRyw4REFBQzRCOzRCQUFPUixXQUFVOzRCQUF3QlMsU0FBU2I7c0NBQWM7Ozs7O21DQUFnQjs7Ozs7Ozs4QkFFN0gsOERBQUNLO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ0M7NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDVTtvQ0FBR1YsV0FBVyxHQUFtQixPQUFoQnpDLGtEQUFNQSxDQUFDb0QsUUFBUTs4Q0FBSTs7Ozs7OzhDQUNyQyw4REFBQ1Y7b0NBQUlELFdBQVU7OENBQ1poQyxNQUFNNEMsR0FBRyxDQUFDLENBQUNqQixNQUFNa0IsT0FBT0M7d0NBQ3ZCLE1BQU1DLGlCQUFpQkYsVUFBVUMsTUFBTUUsTUFBTSxHQUFHLElBQUksT0FBTzt3Q0FDM0QscUJBQ0UsOERBQUNmOzRDQUF1QkQsV0FBVTtzREFDaEMsNEVBQUMzQyw4RUFBaUJBO2dEQUNoQnNDLE1BQU1BO2dEQUNOb0IsZ0JBQWdCQTs7Ozs7OzJDQUhWcEIsS0FBS3NCLE9BQU87Ozs7O29DQU8xQjs7Ozs7Ozs7Ozs7O3NDQUlKLDhEQUFDaEI7NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDVTtvQ0FBR1YsV0FBVyxHQUFtQixPQUFoQnpDLGtEQUFNQSxDQUFDb0QsUUFBUTs4Q0FBSTs7Ozs7O2dDQUNwQ3pDLFNBQVMwQyxHQUFHLENBQUMsQ0FBQ3JCO29DQUNiLHFCQUNFLDhEQUFDVTt3Q0FBSUQsV0FBVTtrREFDYiw0RUFBQzVDLHdFQUFXQTs0Q0FDVjhELFdBQVd4RCxLQUFLK0IsT0FBTyxLQUFLRixRQUFRQyxVQUFVOzRDQUM5Q0QsU0FBU0E7NENBQ1RsQixjQUFjQTs0Q0FDZEYsYUFBYUE7Ozs7Ozt1Q0FMK0JvQixRQUFRNEIsVUFBVTs7Ozs7Z0NBU3RFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNWjtHQTFGd0IzRDs7UUFDSUwscUVBQWNBO1FBUXpCRyxzREFBU0E7OztLQVRGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3Byb2ZpbGUvW3VzZXJuYW1lXS9wYWdlLmpzP2M1ZDEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBMb2FkaW5nU2tlbGV0b24gfSBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9HZW5lcmFsL0xvYWRpbmdTa2VsZXRvblwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlVXNlckNvbnRleHQgfSBmcm9tIFwiQC9hcHAvY29udGV4dHMvdXNlckNvbnRleHRcIjtcbmltcG9ydCBXb3Jrb3V0Q2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy93b3Jrb3V0cy9Xb3Jrb3V0Q2FyZFwiO1xuaW1wb3J0IHsgVXNlclBvc3RDb250YWluZXIgfSBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9Qb3N0cy9Vc2VyUG9zdHNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvYXBwL3N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGVQYWdlKHtwYXJhbXN9KSB7XG4gIGNvbnN0IHsgdXNlciwgc2V0VXNlciB9ID0gdXNlVXNlckNvbnRleHQoKTtcbiAgY29uc3QgW3Byb2ZpbGVVc2VyLCBzZXRQcm9maWxlVXNlcl0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3dvcmtvdXRzLCBzZXRXb3Jrb3V0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtpc0RlbGV0ZWQsIHNldElzRGVsZXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93UG9zdHMsIHNldFNob3dQb3N0c10gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgUHJvbWlzZS5hbGwoW2ZldGNoKGAvYXBpL3dvcmtvdXRzYCksIGZldGNoKGAvYXBpL3Bvc3RzYCksIGZldGNoKGAvYXBpL3VzZXJzL3Byb2ZpbGUvJHtwYXJhbXMudXNlcm5hbWV9YCldKVxuICAgICAgLnRoZW4oKFtyZXMsIHJlczIsIHJlczNdKSA9PiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbcmVzLmpzb24oKSwgcmVzMi5qc29uKCksIHJlczMuanNvbigpXSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKFt3b3Jrb3V0c0RhdGEsIHBvc3RzRGF0YSwgdXNlckRhdGFdKSA9PiB7XG4gICAgICAgIHNldFByb2ZpbGVVc2VyKHVzZXJEYXRhKVxuICAgICAgICBjb25zdCB3b3Jrb3V0RGF0YSA9IHdvcmtvdXRzRGF0YS5maWx0ZXIoXG4gICAgICAgICAgKHdvcmtvdXQpID0+IHdvcmtvdXQuY3JlYXRvcl9pZCA9PT0gdXNlckRhdGEudXNlcl9pZFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBwb3N0RGF0YSA9IHBvc3RzRGF0YS5maWx0ZXIoKHBvc3QpID0+IHBvc3QudXNlcl9pZCA9PT0gdXNlckRhdGEudXNlcl9pZCk7XG4gICAgICAgIHNldFdvcmtvdXRzKHdvcmtvdXREYXRhKTtcbiAgICAgICAgc2V0UG9zdHMocG9zdERhdGEpO1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxMb2FkaW5nU2tlbGV0b24gLz47XG4gIH1cblxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XG4gICAgc2V0VXNlcih7fSk7XG4gICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNob3dQb3N0cyA9ICgpID0+IHtcbiAgICBzZXRTaG93UG9zdHMoIXNob3dQb3N0cylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPXtgZmxleCBqdXN0aWZ5LWNlbnRlcmB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5ib2R5U2VjdGlvbn1gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtZW5kIHByLTE2XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZpdCBmbGV4IGl0ZW1zLWVuZCBnYXAtM1wiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17YGgtZml0ICR7c3R5bGVzLnRpdGxlfWB9Pntwcm9maWxlVXNlci51c2VybmFtZX08L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTEyXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9maWxlVXNlci5pbWFnZV91cmx9IGNsYXNzTmFtZT1cImgtZnVsbFwiPjwvaW1nPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3VzZXIudXNlcm5hbWUgPT09IHByb2ZpbGVVc2VyLnVzZXJuYW1lID8gPGJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZC1sZyBwLTJcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PkxvZ291dDwvYnV0dG9uPjpudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00IG1iLTEwIG1kOmNvbHVtbnMtMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJyZWFrLWluc2lkZS1hdm9pZFwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17YCR7c3R5bGVzLnN1YnRpdGxlfWB9PlJlY2VudCBQb3N0czwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCwgaW5kZXgsIGFycmF5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNOb3RMYXN0Q2hpbGQgPSBpbmRleCAhPT0gYXJyYXkubGVuZ3RoIC0gMSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Bvc3QucG9zdF9pZH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxVc2VyUG9zdENvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgIHBvc3Q9e3Bvc3R9XG4gICAgICAgICAgICAgICAgICAgICAgaXNOb3RMYXN0Q2hpbGQ9e2lzTm90TGFzdENoaWxkfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIHsvKiB7cG9zdHMubGVuZ3RoID4gMSA/IDxociBjbGFzc05hbWU9XCJ0ZXh0XCIgLz4gOiBudWxsfSAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJyZWFrLWluc2lkZS1hdm9pZFwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17YCR7c3R5bGVzLnN1YnRpdGxlfWB9PldvcmtvdXRzPC9oMj5cbiAgICAgICAgICAgIHt3b3Jrb3V0cy5tYXAoKHdvcmtvdXQpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCB3LWZ1bGxcIiBrZXk9e3dvcmtvdXQud29ya291dF9pZH0+XG4gICAgICAgICAgICAgICAgICA8V29ya291dENhcmRcbiAgICAgICAgICAgICAgICAgICAgY2FuRGVsZXRlPXt1c2VyLnVzZXJfaWQgPT09IHdvcmtvdXQuY3JlYXRvcl9pZH1cbiAgICAgICAgICAgICAgICAgICAgd29ya291dD17d29ya291dH1cbiAgICAgICAgICAgICAgICAgICAgc2V0SXNEZWxldGVkPXtzZXRJc0RlbGV0ZWR9XG4gICAgICAgICAgICAgICAgICAgIHNldFdvcmtvdXRzPXtzZXRXb3Jrb3V0c31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59Il0sIm5hbWVzIjpbIkxvYWRpbmdTa2VsZXRvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlVXNlckNvbnRleHQiLCJXb3Jrb3V0Q2FyZCIsIlVzZXJQb3N0Q29udGFpbmVyIiwidXNlUm91dGVyIiwic3R5bGVzIiwiUHJvZmlsZVBhZ2UiLCJwYXJhbXMiLCJ1c2VyIiwic2V0VXNlciIsInByb2ZpbGVVc2VyIiwic2V0UHJvZmlsZVVzZXIiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJwb3N0cyIsInNldFBvc3RzIiwid29ya291dHMiLCJzZXRXb3Jrb3V0cyIsImlzRGVsZXRlZCIsInNldElzRGVsZXRlZCIsInNob3dQb3N0cyIsInNldFNob3dQb3N0cyIsInJvdXRlciIsIlByb21pc2UiLCJhbGwiLCJmZXRjaCIsInVzZXJuYW1lIiwidGhlbiIsInJlcyIsInJlczIiLCJyZXMzIiwianNvbiIsIndvcmtvdXRzRGF0YSIsInBvc3RzRGF0YSIsInVzZXJEYXRhIiwid29ya291dERhdGEiLCJmaWx0ZXIiLCJ3b3Jrb3V0IiwiY3JlYXRvcl9pZCIsInVzZXJfaWQiLCJwb3N0RGF0YSIsInBvc3QiLCJoYW5kbGVMb2dvdXQiLCJwdXNoIiwiaGFuZGxlU2hvd1Bvc3RzIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImJvZHlTZWN0aW9uIiwiaDEiLCJ0aXRsZSIsImltZyIsInNyYyIsImltYWdlX3VybCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMiIsInN1YnRpdGxlIiwibWFwIiwiaW5kZXgiLCJhcnJheSIsImlzTm90TGFzdENoaWxkIiwibGVuZ3RoIiwicG9zdF9pZCIsImNhbkRlbGV0ZSIsIndvcmtvdXRfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/profile/[username]/page.js\n"));

/***/ })

});