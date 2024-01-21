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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProfilePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_components_General_LoadingSkeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/components/General/LoadingSkeleton */ \"(app-pages-browser)/./src/app/components/General/LoadingSkeleton.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_contexts_userContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/contexts/userContext */ \"(app-pages-browser)/./src/app/contexts/userContext.js\");\n/* harmony import */ var _components_workouts_WorkoutCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/workouts/WorkoutCard */ \"(app-pages-browser)/./src/app/components/workouts/WorkoutCard.jsx\");\n/* harmony import */ var _app_components_Posts_UserPosts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/components/Posts/UserPosts */ \"(app-pages-browser)/./src/app/components/Posts/UserPosts.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _app_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app/style */ \"(app-pages-browser)/./src/app/style.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction ProfilePage(param) {\n    let { params } = param;\n    _s();\n    const { user, setUser } = (0,_app_contexts_userContext__WEBPACK_IMPORTED_MODULE_3__.useUserContext)();\n    const [profileUser, setProfileUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [workouts, setWorkouts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [isDeleted, setIsDeleted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [showPosts, setShowPosts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        Promise.all([\n            fetch(\"/api/workouts\"),\n            fetch(\"/api/posts\"),\n            fetch(\"/api/users/profile/\".concat(params.username))\n        ]).then((param)=>{\n            let [res, res2, res3] = param;\n            return Promise.all([\n                res.json(),\n                res2.json(),\n                res3.json()\n            ]);\n        }).then((param)=>{\n            let [workoutsData, postsData, userData] = param;\n            setProfileUser(userData);\n            const workoutData = workoutsData.filter((workout)=>workout.creator_id === userData.user_id);\n            const postData = postsData.filter((post)=>post.user_id === userData.user_id);\n            setWorkouts(workoutData);\n            setPosts(postData);\n            setIsLoading(false);\n        });\n    }, []);\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_General_LoadingSkeleton__WEBPACK_IMPORTED_MODULE_1__.LoadingSkeleton, {}, void 0, false, {\n            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n            lineNumber: 39,\n            columnNumber: 12\n        }, this);\n    }\n    const handleLogout = ()=>{\n        setUser({});\n        router.push(\"/\");\n    };\n    const handleShowPosts = ()=>{\n        setShowPosts(!showPosts);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat(_app_style__WEBPACK_IMPORTED_MODULE_7__[\"default\"].bodySection),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between items-end pr-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"mb-5 \".concat(_app_style__WEBPACK_IMPORTED_MODULE_7__[\"default\"].title),\n                            children: profileUser.username\n                        }, void 0, false, {\n                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                            lineNumber: 55,\n                            columnNumber: 9\n                        }, this),\n                        user.username === profileUser.username ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"border rounded-lg p-2\",\n                            onClick: handleLogout,\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                            lineNumber: 56,\n                            columnNumber: 53\n                        }, this) : null\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pt-4 mb-10 md:columns-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full break-inside-avoid\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"\".concat(_app_style__WEBPACK_IMPORTED_MODULE_7__[\"default\"].subtitle),\n                                    children: \"Recent Posts\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"hover:cursor-pointer p-1 rounded mr-4 \".concat(showPosts ? \"border font-bold\" : null),\n                                            onClick: handleShowPosts,\n                                            children: \"Recent Posts\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"mr-5 hover:cursor-pointer p-1 rounded \".concat(!showPosts ? \"border font-bold\" : null),\n                                            onClick: handleShowPosts,\n                                            children: \"Workouts\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 13\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, this),\n                                showPosts ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"rounded-2xl border mt-3 flex flex-col justify-center\",\n                                    children: [\n                                        posts.map((post, index, array)=>{\n                                            const isNotLastChild = index !== array.length - 1 ? true : false;\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex justify-center mt-3\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Posts_UserPosts__WEBPACK_IMPORTED_MODULE_5__.UserPostContainer, {\n                                                    post: post,\n                                                    isNotLastChild: isNotLastChild\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                                    lineNumber: 75,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, post.post_id, false, {\n                                                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                                lineNumber: 74,\n                                                columnNumber: 19\n                                            }, this);\n                                        }),\n                                        posts.length > 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                            className: \"text\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                            lineNumber: 82,\n                                            columnNumber: 35\n                                        }, this) : null\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-full mt-4\",\n                                    children: workouts.map((workout)=>{\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex justify-start w-full\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_workouts_WorkoutCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                canDelete: user.user_id === workout.creator_id,\n                                                workout: workout,\n                                                setIsDeleted: setIsDeleted,\n                                                setWorkouts: setWorkouts\n                                            }, void 0, false, {\n                                                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                                lineNumber: 89,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, workout.workout_id, false, {\n                                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                            lineNumber: 88,\n                                            columnNumber: 19\n                                        }, this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full mt-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"\".concat(_app_style__WEBPACK_IMPORTED_MODULE_7__[\"default\"].subtitle),\n                                    children: \"Workouts\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                    lineNumber: 102,\n                                    columnNumber: 13\n                                }, this),\n                                workouts.map((workout)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex justify-start w-full\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_workouts_WorkoutCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            canDelete: user.user_id === workout.creator_id,\n                                            workout: workout,\n                                            setIsDeleted: setIsDeleted,\n                                            setWorkouts: setWorkouts\n                                        }, void 0, false, {\n                                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                            lineNumber: 106,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, workout.workout_id, false, {\n                                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                        lineNumber: 105,\n                                        columnNumber: 17\n                                    }, this);\n                                })\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(ProfilePage, \"1eCh0vtlZyFLC6OQQT/Qha4/55c=\", false, function() {\n    return [\n        _app_contexts_userContext__WEBPACK_IMPORTED_MODULE_3__.useUserContext,\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = ProfilePage;\nvar _c;\n$RefreshReg$(_c, \"ProfilePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZmlsZS9bdXNlcm5hbWVdL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUMyRTtBQUMvQjtBQUNnQjtBQUNJO0FBQ0s7QUFDekI7QUFDWDtBQUVsQixTQUFTUSxZQUFZLEtBQVE7UUFBUixFQUFDQyxNQUFNLEVBQUMsR0FBUjs7SUFDbEMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRSxHQUFHUix5RUFBY0E7SUFDeEMsTUFBTSxDQUFDUyxhQUFhQyxlQUFlLEdBQUdYLCtDQUFRQSxDQUFDLEVBQUU7SUFDakQsTUFBTSxDQUFDWSxXQUFXQyxhQUFhLEdBQUdiLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2MsT0FBT0MsU0FBUyxHQUFHZiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDLE1BQU0sQ0FBQ2dCLFVBQVVDLFlBQVksR0FBR2pCLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDa0IsV0FBV0MsYUFBYSxHQUFHbkIsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDb0IsV0FBV0MsYUFBYSxHQUFHckIsK0NBQVFBLENBQUM7SUFFM0MsTUFBTXNCLFNBQVNsQiwwREFBU0E7SUFFeEJMLGdEQUFTQSxDQUFDO1FBQ1J3QixRQUFRQyxHQUFHLENBQUM7WUFBQ0MsTUFBTztZQUFpQkEsTUFBTztZQUFjQSxNQUFNLHNCQUFzQyxPQUFoQmxCLE9BQU9tQixRQUFRO1NBQUksRUFDdEdDLElBQUksQ0FBQztnQkFBQyxDQUFDQyxLQUFLQyxNQUFNQyxLQUFLO1lBQ3RCLE9BQU9QLFFBQVFDLEdBQUcsQ0FBQztnQkFBQ0ksSUFBSUcsSUFBSTtnQkFBSUYsS0FBS0UsSUFBSTtnQkFBSUQsS0FBS0MsSUFBSTthQUFHO1FBQzNELEdBQ0NKLElBQUksQ0FBQztnQkFBQyxDQUFDSyxjQUFjQyxXQUFXQyxTQUFTO1lBQ3hDdkIsZUFBZXVCO1lBQ2YsTUFBTUMsY0FBY0gsYUFBYUks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Qm9CLFFBQVEyQixVQUFVOzs7OztnQ0FTdEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1aO0dBOUd3QjFEOztRQUNJTCxxRUFBY0E7UUFRekJHLHNEQUFTQTs7O0tBVEZFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcHJvZmlsZS9bdXNlcm5hbWVdL3BhZ2UuanM/YzVkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IExvYWRpbmdTa2VsZXRvbiB9IGZyb20gXCJAL2FwcC9jb21wb25lbnRzL0dlbmVyYWwvTG9hZGluZ1NrZWxldG9uXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VVc2VyQ29udGV4dCB9IGZyb20gXCJAL2FwcC9jb250ZXh0cy91c2VyQ29udGV4dFwiO1xuaW1wb3J0IFdvcmtvdXRDYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3dvcmtvdXRzL1dvcmtvdXRDYXJkXCI7XG5pbXBvcnQgeyBVc2VyUG9zdENvbnRhaW5lciB9IGZyb20gXCJAL2FwcC9jb21wb25lbnRzL1Bvc3RzL1VzZXJQb3N0c1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9hcHAvc3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZVBhZ2Uoe3BhcmFtc30pIHtcbiAgY29uc3QgeyB1c2VyLCBzZXRVc2VyIH0gPSB1c2VVc2VyQ29udGV4dCgpO1xuICBjb25zdCBbcHJvZmlsZVVzZXIsIHNldFByb2ZpbGVVc2VyXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbd29ya291dHMsIHNldFdvcmtvdXRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2lzRGVsZXRlZCwgc2V0SXNEZWxldGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3dQb3N0cywgc2V0U2hvd1Bvc3RzXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBQcm9taXNlLmFsbChbZmV0Y2goYC9hcGkvd29ya291dHNgKSwgZmV0Y2goYC9hcGkvcG9zdHNgKSwgZmV0Y2goYC9hcGkvdXNlcnMvcHJvZmlsZS8ke3BhcmFtcy51c2VybmFtZX1gKV0pXG4gICAgICAudGhlbigoW3JlcywgcmVzMiwgcmVzM10pID0+IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtyZXMuanNvbigpLCByZXMyLmpzb24oKSwgcmVzMy5qc29uKCldKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoW3dvcmtvdXRzRGF0YSwgcG9zdHNEYXRhLCB1c2VyRGF0YV0pID0+IHtcbiAgICAgICAgc2V0UHJvZmlsZVVzZXIodXNlckRhdGEpXG4gICAgICAgIGNvbnN0IHdvcmtvdXREYXRhID0gd29ya291dHNEYXRhLmZpbHRlcihcbiAgICAgICAgICAod29ya291dCkgPT4gd29ya291dC5jcmVhdG9yX2lkID09PSB1c2VyRGF0YS51c2VyX2lkXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHBvc3REYXRhID0gcG9zdHNEYXRhLmZpbHRlcigocG9zdCkgPT4gcG9zdC51c2VyX2lkID09PSB1c2VyRGF0YS51c2VyX2lkKTtcbiAgICAgICAgc2V0V29ya291dHMod29ya291dERhdGEpO1xuICAgICAgICBzZXRQb3N0cyhwb3N0RGF0YSk7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gPExvYWRpbmdTa2VsZXRvbiAvPjtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICBzZXRVc2VyKHt9KTtcbiAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2hvd1Bvc3RzID0gKCkgPT4ge1xuICAgIHNldFNob3dQb3N0cyghc2hvd1Bvc3RzKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9e2BmbGV4IGp1c3RpZnktY2VudGVyYH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmJvZHlTZWN0aW9ufWB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWVuZCBwci0xNlwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtgbWItNSAke3N0eWxlcy50aXRsZX1gfT57cHJvZmlsZVVzZXIudXNlcm5hbWV9PC9oMT5cbiAgICAgICAgICB7dXNlci51c2VybmFtZSA9PT0gcHJvZmlsZVVzZXIudXNlcm5hbWUgPyA8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkLWxnIHAtMlwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+TG9nb3V0PC9idXR0b24+Om51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTQgbWItMTAgbWQ6Y29sdW1ucy0yXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYnJlYWstaW5zaWRlLWF2b2lkXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtgJHtzdHlsZXMuc3VidGl0bGV9YH0+UmVjZW50IFBvc3RzPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YGhvdmVyOmN1cnNvci1wb2ludGVyIHAtMSByb3VuZGVkIG1yLTQgJHtcbiAgICAgICAgICAgICAgc2hvd1Bvc3RzID8gXCJib3JkZXIgZm9udC1ib2xkXCIgOiBudWxsXG4gICAgICAgICAgICB9YH0gb25DbGljaz17aGFuZGxlU2hvd1Bvc3RzfT5SZWNlbnQgUG9zdHM8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Btci01IGhvdmVyOmN1cnNvci1wb2ludGVyIHAtMSByb3VuZGVkICR7XG4gICAgICAgICAgICAgICFzaG93UG9zdHMgPyBcImJvcmRlciBmb250LWJvbGRcIiA6IG51bGxcbiAgICAgICAgICAgIH1gfSBvbkNsaWNrPXtoYW5kbGVTaG93UG9zdHN9PldvcmtvdXRzPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7c2hvd1Bvc3RzID8gXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIGJvcmRlciBtdC0zIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCwgaW5kZXgsIGFycmF5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNOb3RMYXN0Q2hpbGQgPSBpbmRleCAhPT0gYXJyYXkubGVuZ3RoIC0gMSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Bvc3QucG9zdF9pZH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxVc2VyUG9zdENvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgIHBvc3Q9e3Bvc3R9XG4gICAgICAgICAgICAgICAgICAgICAgaXNOb3RMYXN0Q2hpbGQ9e2lzTm90TGFzdENoaWxkfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIHtwb3N0cy5sZW5ndGggPiAxID8gPGhyIGNsYXNzTmFtZT1cInRleHRcIiAvPiA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDogXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtdC00XCI+XG4gICAgICAgICAgICAgIHt3b3Jrb3V0cy5tYXAoKHdvcmtvdXQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgdy1mdWxsXCIga2V5PXt3b3Jrb3V0LndvcmtvdXRfaWR9PlxuICAgICAgICAgICAgICAgICAgICA8V29ya291dENhcmRcbiAgICAgICAgICAgICAgICAgICAgICBjYW5EZWxldGU9e3VzZXIudXNlcl9pZCA9PT0gd29ya291dC5jcmVhdG9yX2lkfVxuICAgICAgICAgICAgICAgICAgICAgIHdvcmtvdXQ9e3dvcmtvdXR9XG4gICAgICAgICAgICAgICAgICAgICAgc2V0SXNEZWxldGVkPXtzZXRJc0RlbGV0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgc2V0V29ya291dHM9e3NldFdvcmtvdXRzfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtdC00XCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtgJHtzdHlsZXMuc3VidGl0bGV9YH0+V29ya291dHM8L2gyPlxuICAgICAgICAgICAge3dvcmtvdXRzLm1hcCgod29ya291dCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IHctZnVsbFwiIGtleT17d29ya291dC53b3Jrb3V0X2lkfT5cbiAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0Q2FyZFxuICAgICAgICAgICAgICAgICAgICBjYW5EZWxldGU9e3VzZXIudXNlcl9pZCA9PT0gd29ya291dC5jcmVhdG9yX2lkfVxuICAgICAgICAgICAgICAgICAgICB3b3Jrb3V0PXt3b3Jrb3V0fVxuICAgICAgICAgICAgICAgICAgICBzZXRJc0RlbGV0ZWQ9e3NldElzRGVsZXRlZH1cbiAgICAgICAgICAgICAgICAgICAgc2V0V29ya291dHM9e3NldFdvcmtvdXRzfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiTG9hZGluZ1NrZWxldG9uIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VVc2VyQ29udGV4dCIsIldvcmtvdXRDYXJkIiwiVXNlclBvc3RDb250YWluZXIiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJQcm9maWxlUGFnZSIsInBhcmFtcyIsInVzZXIiLCJzZXRVc2VyIiwicHJvZmlsZVVzZXIiLCJzZXRQcm9maWxlVXNlciIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInBvc3RzIiwic2V0UG9zdHMiLCJ3b3Jrb3V0cyIsInNldFdvcmtvdXRzIiwiaXNEZWxldGVkIiwic2V0SXNEZWxldGVkIiwic2hvd1Bvc3RzIiwic2V0U2hvd1Bvc3RzIiwicm91dGVyIiwiUHJvbWlzZSIsImFsbCIsImZldGNoIiwidXNlcm5hbWUiLCJ0aGVuIiwicmVzIiwicmVzMiIsInJlczMiLCJqc29uIiwid29ya291dHNEYXRhIiwicG9zdHNEYXRhIiwidXNlckRhdGEiLCJ3b3Jrb3V0RGF0YSIsImZpbHRlciIsIndvcmtvdXQiLCJjcmVhdG9yX2lkIiwidXNlcl9pZCIsInBvc3REYXRhIiwicG9zdCIsImhhbmRsZUxvZ291dCIsInB1c2giLCJoYW5kbGVTaG93UG9zdHMiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiYm9keVNlY3Rpb24iLCJoMSIsInRpdGxlIiwiYnV0dG9uIiwib25DbGljayIsImgyIiwic3VidGl0bGUiLCJwIiwibWFwIiwiaW5kZXgiLCJhcnJheSIsImlzTm90TGFzdENoaWxkIiwibGVuZ3RoIiwicG9zdF9pZCIsImhyIiwiY2FuRGVsZXRlIiwid29ya291dF9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/profile/[username]/page.js\n"));

/***/ })

});