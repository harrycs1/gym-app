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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProfilePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_components_General_LoadingSkeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/components/General/LoadingSkeleton */ \"(app-pages-browser)/./src/app/components/General/LoadingSkeleton.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_contexts_userContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/contexts/userContext */ \"(app-pages-browser)/./src/app/contexts/userContext.js\");\n/* harmony import */ var _components_workouts_WorkoutCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/workouts/WorkoutCard */ \"(app-pages-browser)/./src/app/components/workouts/WorkoutCard.jsx\");\n/* harmony import */ var _app_components_Posts_UserPosts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/components/Posts/UserPosts */ \"(app-pages-browser)/./src/app/components/Posts/UserPosts.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _app_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app/style */ \"(app-pages-browser)/./src/app/style.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction ProfilePage(param) {\n    let { params } = param;\n    _s();\n    const { user, setUser } = (0,_app_contexts_userContext__WEBPACK_IMPORTED_MODULE_3__.useUserContext)();\n    const [profileUser, setProfileUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [workouts, setWorkouts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [isDeleted, setIsDeleted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [showPosts, setShowPosts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        Promise.all([\n            fetch(\"/api/workouts\"),\n            fetch(\"/api/posts\"),\n            fetch(\"/api/users/profile/\".concat(params.username))\n        ]).then((param)=>{\n            let [res, res2, res3] = param;\n            return Promise.all([\n                res.json(),\n                res2.json(),\n                res3.json()\n            ]);\n        }).then((param)=>{\n            let [workoutsData, postsData, userData] = param;\n            setProfileUser(userData);\n            const workoutData = workoutsData.filter((workout)=>workout.creator_id === userData.user_id);\n            const postData = postsData.filter((post)=>post.user_id === userData.user_id);\n            setWorkouts(workoutData);\n            setPosts(postData);\n            setIsLoading(false);\n        });\n    }, []);\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_General_LoadingSkeleton__WEBPACK_IMPORTED_MODULE_1__.LoadingSkeleton, {}, void 0, false, {\n            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n            lineNumber: 39,\n            columnNumber: 12\n        }, this);\n    }\n    const handleLogout = ()=>{\n        setUser({});\n        router.push(\"/\");\n    };\n    const handleShowPosts = ()=>{\n        setShowPosts(!showPosts);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat(_app_style__WEBPACK_IMPORTED_MODULE_7__[\"default\"].bodySection),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-full justify-between items-end pr-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"border h-12 flex gap-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"border h-fit mb-5 \".concat(_app_style__WEBPACK_IMPORTED_MODULE_7__[\"default\"].title),\n                                    children: profileUser.username\n                                }, void 0, false, {\n                                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"border w-12 rounded-full overflow-hidden\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: profileUser.image_url,\n                                        className: \"h-full\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this),\n                        user.username === profileUser.username ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"border rounded-lg p-2\",\n                            onClick: handleLogout,\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                            lineNumber: 61,\n                            columnNumber: 53\n                        }, this) : null\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pt-4 mb-10 md:columns-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"border w-full break-inside-avoid\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"\".concat(_app_style__WEBPACK_IMPORTED_MODULE_7__[\"default\"].subtitle),\n                                    children: \"Recent Posts\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"rounded-2xl border flex flex-col justify-center\",\n                                    children: [\n                                        posts.map((post, index, array)=>{\n                                            const isNotLastChild = index !== array.length - 1 ? true : false;\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex justify-center mt-3\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Posts_UserPosts__WEBPACK_IMPORTED_MODULE_5__.UserPostContainer, {\n                                                    post: post,\n                                                    isNotLastChild: isNotLastChild\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, post.post_id, false, {\n                                                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                                lineNumber: 70,\n                                                columnNumber: 19\n                                            }, this);\n                                        }),\n                                        posts.length > 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                            className: \"text\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                            lineNumber: 78,\n                                            columnNumber: 35\n                                        }, this) : null\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"border w-full break-inside-avoid\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"\".concat(_app_style__WEBPACK_IMPORTED_MODULE_7__[\"default\"].subtitle),\n                                    children: \"Workouts\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, this),\n                                workouts.map((workout)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex justify-start w-full\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_workouts_WorkoutCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            canDelete: user.user_id === workout.creator_id,\n                                            workout: workout,\n                                            setIsDeleted: setIsDeleted,\n                                            setWorkouts: setWorkouts\n                                        }, void 0, false, {\n                                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                            lineNumber: 86,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, workout.workout_id, false, {\n                                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 17\n                                    }, this);\n                                })\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(ProfilePage, \"1eCh0vtlZyFLC6OQQT/Qha4/55c=\", false, function() {\n    return [\n        _app_contexts_userContext__WEBPACK_IMPORTED_MODULE_3__.useUserContext,\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = ProfilePage;\nvar _c;\n$RefreshReg$(_c, \"ProfilePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZmlsZS9bdXNlcm5hbWVdL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUMyRTtBQUMvQjtBQUNnQjtBQUNJO0FBQ0s7QUFDekI7QUFDWDtBQUVsQixTQUFTUSxZQUFZLEtBQVE7UUFBUixFQUFDQyxNQUFNLEVBQUMsR0FBUjs7SUFDbEMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRSxHQUFHUix5RUFBY0E7SUFDeEMsTUFBTSxDQUFDUyxhQUFhQyxlQUFlLEdBQUdYLCtDQUFRQSxDQUFDLEVBQUU7SUFDakQsTUFBTSxDQUFDWSxXQUFXQyxhQUFhLEdBQUdiLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2MsT0FBT0MsU0FBUyxHQUFHZiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDLE1BQU0sQ0FBQ2dCLFVBQVVDLFlBQVksR0FBR2pCLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDa0IsV0FBV0MsYUFBYSxHQUFHbkIsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDb0IsV0FBV0MsYUFBYSxHQUFHckIsK0NBQVFBLENBQUM7SUFFM0MsTUFBTXNCLFNBQVNsQiwwREFBU0E7SUFFeEJMLGdEQUFTQSxDQUFDO1FBQ1J3QixRQUFRQyxHQUFHLENBQUM7WUFBQ0MsTUFBTztZQUFpQkEsTUFBTztZQUFjQSxNQUFNLHNCQUFzQyxPQUFoQmxCLE9BQU9tQixRQUFRO1NBQUksRUFDdEdDLElBQUksQ0FBQztnQkFBQyxDQUFDQyxLQUFLQyxNQUFNQyxLQUFLO1lBQ3RCLE9BQU9QLFFBQVFDLEdBQUcsQ0FBQztnQkFBQ0ksSUFBSUcsSUFBSTtnQkFBSUYsS0FBS0UsSUFBSTtnQkFBSUQsS0FBS0MsSUFBSTthQUFHO1FBQzNELEdBQ0NKLElBQUksQ0FBQztnQkFBQyxDQUFDSyxjQUFjQyxXQUFXQyxTQUFTO1lBQ3hDdkIsZUFBZXVCO1lBQ2YsTUFBTUMsY0FBY0gsYUFBYUksTUFBTSxDQUNyQyxDQUFDQyxVQUFZQSxRQUFRQyxVQUFVLEtBQUtKLFNBQVNLLE9BQU87WUFFdEQsTUFBTUMsV0FBV1AsVUFBVUcsTUFBTSxDQUFDLENBQUNLLE9BQVNBLEtBQUtGLE9BQU8sS0FBS0wsU0FBU0ssT0FBTztZQUM3RXRCLFlBQVlrQjtZQUNacEIsU0FBU3lCO1lBQ1QzQixhQUFhO1FBQ2Y7SUFDSixHQUFHLEVBQUU7SUFFTCxJQUFJRCxXQUFXO1FBQ2IscUJBQU8sOERBQUNkLG9GQUFlQTs7Ozs7SUFDekI7SUFFQSxNQUFNNEMsZUFBZTtRQUNuQmpDLFFBQVEsQ0FBQztRQUNUYSxPQUFPcUIsSUFBSSxDQUFDO0lBQ2Q7SUFFQSxNQUFNQyxrQkFBa0I7UUFDdEJ2QixhQUFhLENBQUNEO0lBQ2hCO0lBRUEscUJBQ0UsOERBQUN5QjtRQUFLQyxXQUFZO2tCQUNoQiw0RUFBQ0M7WUFBSUQsV0FBVyxHQUFzQixPQUFuQnpDLGtEQUFNQSxDQUFDMkMsV0FBVzs7OEJBQ25DLDhEQUFDRDtvQkFBSUQsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFJRCxXQUFVOzs4Q0FDYiw4REFBQ0c7b0NBQUdILFdBQVcscUJBQWtDLE9BQWJ6QyxrREFBTUEsQ0FBQzZDLEtBQUs7OENBQUt4QyxZQUFZZ0IsUUFBUTs7Ozs7OzhDQUN6RSw4REFBQ3FCO29DQUFJRCxXQUFVOzhDQUNiLDRFQUFDSzt3Q0FBSUMsS0FBSzFDLFlBQVkyQyxTQUFTO3dDQUFFUCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFHOUN0QyxLQUFLa0IsUUFBUSxLQUFLaEIsWUFBWWdCLFFBQVEsaUJBQUcsOERBQUM0Qjs0QkFBT1IsV0FBVTs0QkFBd0JTLFNBQVNiO3NDQUFjOzs7OzttQ0FBZ0I7Ozs7Ozs7OEJBRTdILDhEQUFDSztvQkFBSUQsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFJRCxXQUFVOzs4Q0FDYiw4REFBQ1U7b0NBQUdWLFdBQVcsR0FBbUIsT0FBaEJ6QyxrREFBTUEsQ0FBQ29ELFFBQVE7OENBQUk7Ozs7Ozs4Q0FDckMsOERBQUNWO29DQUFJRCxXQUFVOzt3Q0FDWmhDLE1BQU00QyxHQUFHLENBQUMsQ0FBQ2pCLE1BQU1rQixPQUFPQzs0Q0FDdkIsTUFBTUMsaUJBQWlCRixVQUFVQyxNQUFNRSxNQUFNLEdBQUcsSUFBSSxPQUFPOzRDQUMzRCxxQkFDRSw4REFBQ2Y7Z0RBQXVCRCxXQUFVOzBEQUNoQyw0RUFBQzNDLDhFQUFpQkE7b0RBQ2hCc0MsTUFBTUE7b0RBQ05vQixnQkFBZ0JBOzs7Ozs7K0NBSFZwQixLQUFLc0IsT0FBTzs7Ozs7d0NBTzFCO3dDQUNDakQsTUFBTWdELE1BQU0sR0FBRyxrQkFBSSw4REFBQ0U7NENBQUdsQixXQUFVOzs7OzttREFBWTs7Ozs7Ozs7Ozs7OztzQ0FHbEQsOERBQUNDOzRCQUFJRCxXQUFVOzs4Q0FDYiw4REFBQ1U7b0NBQUdWLFdBQVcsR0FBbUIsT0FBaEJ6QyxrREFBTUEsQ0FBQ29ELFFBQVE7OENBQUk7Ozs7OztnQ0FDcEN6QyxTQUFTMEMsR0FBRyxDQUFDLENBQUNyQjtvQ0FDYixxQkFDRSw4REFBQ1U7d0NBQUlELFdBQVU7a0RBQ2IsNEVBQUM1Qyx3RUFBV0E7NENBQ1YrRCxXQUFXekQsS0FBSytCLE9BQU8sS0FBS0YsUUFBUUMsVUFBVTs0Q0FDOUNELFNBQVNBOzRDQUNUbEIsY0FBY0E7NENBQ2RGLGFBQWFBOzs7Ozs7dUNBTCtCb0IsUUFBUTZCLFVBQVU7Ozs7O2dDQVN0RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVo7R0ExRndCNUQ7O1FBQ0lMLHFFQUFjQTtRQVF6Qkcsc0RBQVNBOzs7S0FURkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm9maWxlL1t1c2VybmFtZV0vcGFnZS5qcz9jNWQxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgTG9hZGluZ1NrZWxldG9uIH0gZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvR2VuZXJhbC9Mb2FkaW5nU2tlbGV0b25cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVVzZXJDb250ZXh0IH0gZnJvbSBcIkAvYXBwL2NvbnRleHRzL3VzZXJDb250ZXh0XCI7XG5pbXBvcnQgV29ya291dENhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvd29ya291dHMvV29ya291dENhcmRcIjtcbmltcG9ydCB7IFVzZXJQb3N0Q29udGFpbmVyIH0gZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvUG9zdHMvVXNlclBvc3RzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL2FwcC9zdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlUGFnZSh7cGFyYW1zfSkge1xuICBjb25zdCB7IHVzZXIsIHNldFVzZXIgfSA9IHVzZVVzZXJDb250ZXh0KCk7XG4gIGNvbnN0IFtwcm9maWxlVXNlciwgc2V0UHJvZmlsZVVzZXJdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt3b3Jrb3V0cywgc2V0V29ya291dHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaXNEZWxldGVkLCBzZXRJc0RlbGV0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvd1Bvc3RzLCBzZXRTaG93UG9zdHNdID0gdXNlU3RhdGUodHJ1ZSlcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIFByb21pc2UuYWxsKFtmZXRjaChgL2FwaS93b3Jrb3V0c2ApLCBmZXRjaChgL2FwaS9wb3N0c2ApLCBmZXRjaChgL2FwaS91c2Vycy9wcm9maWxlLyR7cGFyYW1zLnVzZXJuYW1lfWApXSlcbiAgICAgIC50aGVuKChbcmVzLCByZXMyLCByZXMzXSkgPT4ge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW3Jlcy5qc29uKCksIHJlczIuanNvbigpLCByZXMzLmpzb24oKV0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChbd29ya291dHNEYXRhLCBwb3N0c0RhdGEsIHVzZXJEYXRhXSkgPT4ge1xuICAgICAgICBzZXRQcm9maWxlVXNlcih1c2VyRGF0YSlcbiAgICAgICAgY29uc3Qgd29ya291dERhdGEgPSB3b3Jrb3V0c0RhdGEuZmlsdGVyKFxuICAgICAgICAgICh3b3Jrb3V0KSA9PiB3b3Jrb3V0LmNyZWF0b3JfaWQgPT09IHVzZXJEYXRhLnVzZXJfaWRcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgcG9zdERhdGEgPSBwb3N0c0RhdGEuZmlsdGVyKChwb3N0KSA9PiBwb3N0LnVzZXJfaWQgPT09IHVzZXJEYXRhLnVzZXJfaWQpO1xuICAgICAgICBzZXRXb3Jrb3V0cyh3b3Jrb3V0RGF0YSk7XG4gICAgICAgIHNldFBvc3RzKHBvc3REYXRhKTtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgaWYgKGlzTG9hZGluZykge1xuICAgIHJldHVybiA8TG9hZGluZ1NrZWxldG9uIC8+O1xuICB9XG5cbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xuICAgIHNldFVzZXIoe30pO1xuICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTaG93UG9zdHMgPSAoKSA9PiB7XG4gICAgc2V0U2hvd1Bvc3RzKCFzaG93UG9zdHMpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT17YGZsZXgganVzdGlmeS1jZW50ZXJgfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYm9keVNlY3Rpb259YH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWVuZCBwci0xNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGgtMTIgZmxleCBnYXAtM1wiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17YGJvcmRlciBoLWZpdCBtYi01ICR7c3R5bGVzLnRpdGxlfWB9Pntwcm9maWxlVXNlci51c2VybmFtZX08L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgdy0xMiByb3VuZGVkLWZ1bGwgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9maWxlVXNlci5pbWFnZV91cmx9IGNsYXNzTmFtZT1cImgtZnVsbFwiPjwvaW1nPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3VzZXIudXNlcm5hbWUgPT09IHByb2ZpbGVVc2VyLnVzZXJuYW1lID8gPGJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZC1sZyBwLTJcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PkxvZ291dDwvYnV0dG9uPjpudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00IG1iLTEwIG1kOmNvbHVtbnMtMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHctZnVsbCBicmVhay1pbnNpZGUtYXZvaWRcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2Ake3N0eWxlcy5zdWJ0aXRsZX1gfT5SZWNlbnQgUG9zdHM8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBib3JkZXIgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICB7cG9zdHMubWFwKChwb3N0LCBpbmRleCwgYXJyYXkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc05vdExhc3RDaGlsZCA9IGluZGV4ICE9PSBhcnJheS5sZW5ndGggLSAxID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cG9zdC5wb3N0X2lkfSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPFVzZXJQb3N0Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zdD17cG9zdH1cbiAgICAgICAgICAgICAgICAgICAgICBpc05vdExhc3RDaGlsZD17aXNOb3RMYXN0Q2hpbGR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAge3Bvc3RzLmxlbmd0aCA+IDEgPyA8aHIgY2xhc3NOYW1lPVwidGV4dFwiIC8+IDogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHctZnVsbCBicmVhay1pbnNpZGUtYXZvaWRcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2Ake3N0eWxlcy5zdWJ0aXRsZX1gfT5Xb3Jrb3V0czwvaDI+XG4gICAgICAgICAgICB7d29ya291dHMubWFwKCh3b3Jrb3V0KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgdy1mdWxsXCIga2V5PXt3b3Jrb3V0LndvcmtvdXRfaWR9PlxuICAgICAgICAgICAgICAgICAgPFdvcmtvdXRDYXJkXG4gICAgICAgICAgICAgICAgICAgIGNhbkRlbGV0ZT17dXNlci51c2VyX2lkID09PSB3b3Jrb3V0LmNyZWF0b3JfaWR9XG4gICAgICAgICAgICAgICAgICAgIHdvcmtvdXQ9e3dvcmtvdXR9XG4gICAgICAgICAgICAgICAgICAgIHNldElzRGVsZXRlZD17c2V0SXNEZWxldGVkfVxuICAgICAgICAgICAgICAgICAgICBzZXRXb3Jrb3V0cz17c2V0V29ya291dHN9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufSJdLCJuYW1lcyI6WyJMb2FkaW5nU2tlbGV0b24iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVVzZXJDb250ZXh0IiwiV29ya291dENhcmQiLCJVc2VyUG9zdENvbnRhaW5lciIsInVzZVJvdXRlciIsInN0eWxlcyIsIlByb2ZpbGVQYWdlIiwicGFyYW1zIiwidXNlciIsInNldFVzZXIiLCJwcm9maWxlVXNlciIsInNldFByb2ZpbGVVc2VyIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwicG9zdHMiLCJzZXRQb3N0cyIsIndvcmtvdXRzIiwic2V0V29ya291dHMiLCJpc0RlbGV0ZWQiLCJzZXRJc0RlbGV0ZWQiLCJzaG93UG9zdHMiLCJzZXRTaG93UG9zdHMiLCJyb3V0ZXIiLCJQcm9taXNlIiwiYWxsIiwiZmV0Y2giLCJ1c2VybmFtZSIsInRoZW4iLCJyZXMiLCJyZXMyIiwicmVzMyIsImpzb24iLCJ3b3Jrb3V0c0RhdGEiLCJwb3N0c0RhdGEiLCJ1c2VyRGF0YSIsIndvcmtvdXREYXRhIiwiZmlsdGVyIiwid29ya291dCIsImNyZWF0b3JfaWQiLCJ1c2VyX2lkIiwicG9zdERhdGEiLCJwb3N0IiwiaGFuZGxlTG9nb3V0IiwicHVzaCIsImhhbmRsZVNob3dQb3N0cyIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJib2R5U2VjdGlvbiIsImgxIiwidGl0bGUiLCJpbWciLCJzcmMiLCJpbWFnZV91cmwiLCJidXR0b24iLCJvbkNsaWNrIiwiaDIiLCJzdWJ0aXRsZSIsIm1hcCIsImluZGV4IiwiYXJyYXkiLCJpc05vdExhc3RDaGlsZCIsImxlbmd0aCIsInBvc3RfaWQiLCJociIsImNhbkRlbGV0ZSIsIndvcmtvdXRfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/profile/[username]/page.js\n"));

/***/ })

});