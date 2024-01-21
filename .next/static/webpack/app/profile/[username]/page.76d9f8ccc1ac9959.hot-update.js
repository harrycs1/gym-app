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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProfilePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_components_General_LoadingSkeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/components/General/LoadingSkeleton */ \"(app-pages-browser)/./src/app/components/General/LoadingSkeleton.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_contexts_userContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/contexts/userContext */ \"(app-pages-browser)/./src/app/contexts/userContext.js\");\n/* harmony import */ var _components_workouts_WorkoutCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/workouts/WorkoutCard */ \"(app-pages-browser)/./src/app/components/workouts/WorkoutCard.jsx\");\n/* harmony import */ var _app_components_Posts_UserPosts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/components/Posts/UserPosts */ \"(app-pages-browser)/./src/app/components/Posts/UserPosts.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _app_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app/style */ \"(app-pages-browser)/./src/app/style.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction ProfilePage(param) {\n    let { params } = param;\n    _s();\n    const { user, setUser } = (0,_app_contexts_userContext__WEBPACK_IMPORTED_MODULE_3__.useUserContext)();\n    const [profileUser, setProfileUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [workouts, setWorkouts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [isDeleted, setIsDeleted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [showPosts, setShowPosts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        Promise.all([\n            fetch(\"/api/workouts\"),\n            fetch(\"/api/posts\"),\n            fetch(\"/api/users/profile/\".concat(params.username))\n        ]).then((param)=>{\n            let [res, res2, res3] = param;\n            return Promise.all([\n                res.json(),\n                res2.json(),\n                res3.json()\n            ]);\n        }).then((param)=>{\n            let [workoutsData, postsData, userData] = param;\n            setProfileUser(userData);\n            const workoutData = workoutsData.filter((workout)=>workout.creator_id === userData.user_id);\n            const postData = postsData.filter((post)=>post.user_id === userData.user_id);\n            setWorkouts(workoutData);\n            setPosts(postData);\n            setIsLoading(false);\n        });\n    }, []);\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_General_LoadingSkeleton__WEBPACK_IMPORTED_MODULE_1__.LoadingSkeleton, {}, void 0, false, {\n            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n            lineNumber: 39,\n            columnNumber: 12\n        }, this);\n    }\n    const handleLogout = ()=>{\n        setUser({});\n        router.push(\"/\");\n    };\n    const handleShowPosts = ()=>{\n        setShowPosts(!showPosts);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat(_app_style__WEBPACK_IMPORTED_MODULE_7__[\"default\"].bodySection),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"border flex justify-between items-end pr-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"mb-5 \".concat(_app_style__WEBPACK_IMPORTED_MODULE_7__[\"default\"].title),\n                            children: profileUser.username\n                        }, void 0, false, {\n                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                            lineNumber: 55,\n                            columnNumber: 9\n                        }, this),\n                        user.username === profileUser.username ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"border rounded-lg p-2\",\n                            onClick: handleLogout,\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                            lineNumber: 56,\n                            columnNumber: 53\n                        }, this) : null\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"border pt-4 flex justify-around\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"hover:cursor-pointer p-1 rounded mr-4 \".concat(showPosts ? \"border font-bold\" : null),\n                                        onClick: handleShowPosts,\n                                        children: \"Recent Posts\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mr-5 hover:cursor-pointer p-1 rounded \".concat(!showPosts ? \"border font-bold\" : null),\n                                        onClick: handleShowPosts,\n                                        children: \"Workouts\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this),\n                            showPosts ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"rounded-2xl border mt-3 flex flex-col justify-center\",\n                                children: [\n                                    posts.map((post, index, array)=>{\n                                        const isNotLastChild = index !== array.length - 1 ? true : false;\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex justify-center mt-3\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Posts_UserPosts__WEBPACK_IMPORTED_MODULE_5__.UserPostContainer, {\n                                                post: post,\n                                                isNotLastChild: isNotLastChild\n                                            }, void 0, false, {\n                                                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                                lineNumber: 74,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, post.post_id, false, {\n                                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 19\n                                        }, this);\n                                    }),\n                                    posts.length > 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                        className: \"text\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 35\n                                    }, this) : null\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full mt-4\",\n                                children: workouts.map((workout)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex justify-start w-full\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_workouts_WorkoutCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            canDelete: user.user_id === workout.creator_id,\n                                            workout: workout,\n                                            setIsDeleted: setIsDeleted,\n                                            setWorkouts: setWorkouts\n                                        }, void 0, false, {\n                                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                            lineNumber: 88,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, workout.workout_id, false, {\n                                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                        lineNumber: 87,\n                                        columnNumber: 19\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(ProfilePage, \"1eCh0vtlZyFLC6OQQT/Qha4/55c=\", false, function() {\n    return [\n        _app_contexts_userContext__WEBPACK_IMPORTED_MODULE_3__.useUserContext,\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = ProfilePage;\nvar _c;\n$RefreshReg$(_c, \"ProfilePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZmlsZS9bdXNlcm5hbWVdL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUMyRTtBQUMvQjtBQUNnQjtBQUNJO0FBQ0s7QUFDekI7QUFDWDtBQUVsQixTQUFTUSxZQUFZLEtBQVE7UUFBUixFQUFDQyxNQUFNLEVBQUMsR0FBUjs7SUFDbEMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRSxHQUFHUix5RUFBY0E7SUFDeEMsTUFBTSxDQUFDUyxhQUFhQyxlQUFlLEdBQUdYLCtDQUFRQSxDQUFDLEVBQUU7SUFDakQsTUFBTSxDQUFDWSxXQUFXQyxhQUFhLEdBQUdiLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2MsT0FBT0MsU0FBUyxHQUFHZiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDLE1BQU0sQ0FBQ2dCLFVBQVVDLFlBQVksR0FBR2pCLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDa0IsV0FBV0MsYUFBYSxHQUFHbkIsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDb0IsV0FBV0MsYUFBYSxHQUFHckIsK0NBQVFBLENBQUM7SUFFM0MsTUFBTXNCLFNBQVNsQiwwREFBU0E7SUFFeEJMLGdEQUFTQSxDQUFDO1FBQ1J3QixRQUFRQyxHQUFHLENBQUM7WUFBQ0MsTUFBTztZQUFpQkEsTUFBTztZQUFjQSxNQUFNLHNCQUFzQyxPQUFoQmxCLE9BQU9tQixRQUFRO1NBQUksRUFDdEdDLElBQUksQ0FBQztnQkFBQyxDQUFDQyxLQUFLQyxNQUFNQyxLQUFLO1lBQ3RCLE9BQU9QLFFBQVFDLEdBQUcsQ0FBQztnQkFBQ0ksSUFBSUcsSUFBSTtnQkFBSUYsS0FBS0UsSUFBSTtnQkFBSUQsS0FBS0MsSUFBSTthQUFHO1FBQzNELEdBQ0NKLElBQUksQ0FBQztnQkFBQyxDQUFDSyxjQUFjQyxXQUFXQyxTQUFTO1lBQ3hDdkIsZUFBZXVCO1lBQ2YsTUFBTUMsY0FBY0gsYUFBYUksTUFBTSxDQUNyQyxDQUFDQyxVQUFZQSxRQUFRQyxVQUFVLEtBQUtKLFNBQVNLLE9BQU87WUFFdEQsTUFBTUMsV0FBV1AsVUFBVUcsTUFBTSxDQUFDLENBQUNLLE9BQVNBLEtBQUtGLE9BQU8sS0FBS0wsU0FBU0ssT0FBTztZQUM3RXRCLFlBQVlrQjtZQUNacEIsU0FBU3lCO1lBQ1QzQixhQUFhO1FBQ2Y7SUFDSixHQUFHLEVBQUU7SUFFTCxJQUFJRCxXQUFXO1FBQ2IscUJBQU8sOERBQUNkLG9GQUFlQTs7Ozs7SUFDekI7SUFFQSxNQUFNNEMsZUFBZTtRQUNuQmpDLFFBQVEsQ0FBQztRQUNUYSxPQUFPcUIsSUFBSSxDQUFDO0lBQ2Q7SUFFQSxNQUFNQyxrQkFBa0I7UUFDdEJ2QixhQUFhLENBQUNEO0lBQ2hCO0lBRUEscUJBQ0UsOERBQUN5QjtRQUFLQyxXQUFZO2tCQUNoQiw0RUFBQ0M7WUFBSUQsV0FBVyxHQUFzQixPQUFuQnpDLGtEQUFNQSxDQUFDMkMsV0FBVzs7OEJBQ25DLDhEQUFDRDtvQkFBSUQsV0FBVTs7c0NBQ2YsOERBQUNHOzRCQUFHSCxXQUFXLFFBQXFCLE9BQWJ6QyxrREFBTUEsQ0FBQzZDLEtBQUs7c0NBQUt4QyxZQUFZZ0IsUUFBUTs7Ozs7O3dCQUN6RGxCLEtBQUtrQixRQUFRLEtBQUtoQixZQUFZZ0IsUUFBUSxpQkFBRyw4REFBQ3lCOzRCQUFPTCxXQUFVOzRCQUF3Qk0sU0FBU1Y7c0NBQWM7Ozs7O21DQUFnQjs7Ozs7Ozs4QkFFN0gsOERBQUNLO29CQUFJRCxXQUFVOzhCQUNiLDRFQUFDQzt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFJRCxXQUFVOztrREFDZiw4REFBQ087d0NBQUVQLFdBQVcseUNBRWIsT0FEQzFCLFlBQVkscUJBQXFCO3dDQUMvQmdDLFNBQVNSO2tEQUFpQjs7Ozs7O2tEQUM5Qiw4REFBQ1M7d0NBQUVQLFdBQVcseUNBRWIsT0FEQyxDQUFDMUIsWUFBWSxxQkFBcUI7d0NBQ2hDZ0MsU0FBU1I7a0RBQWlCOzs7Ozs7Ozs7Ozs7NEJBRTdCeEIsMEJBQ0QsOERBQUMyQjtnQ0FBSUQsV0FBVTs7b0NBQ1poQyxNQUFNd0MsR0FBRyxDQUFDLENBQUNiLE1BQU1jLE9BQU9DO3dDQUN2QixNQUFNQyxpQkFBaUJGLFVBQVVDLE1BQU1FLE1BQU0sR0FBRyxJQUFJLE9BQU87d0NBQzNELHFCQUNFLDhEQUFDWDs0Q0FBdUJELFdBQVU7c0RBQ2hDLDRFQUFDM0MsOEVBQWlCQTtnREFDaEJzQyxNQUFNQTtnREFDTmdCLGdCQUFnQkE7Ozs7OzsyQ0FIVmhCLEtBQUtrQixPQUFPOzs7OztvQ0FPMUI7b0NBQ0M3QyxNQUFNNEMsTUFBTSxHQUFHLGtCQUFJLDhEQUFDRTt3Q0FBR2QsV0FBVTs7Ozs7K0NBQVk7Ozs7OztxREFHaEQsOERBQUNDO2dDQUFJRCxXQUFVOzBDQUNaOUIsU0FBU3NDLEdBQUcsQ0FBQyxDQUFDakI7b0NBQ2IscUJBQ0UsOERBQUNVO3dDQUFJRCxXQUFVO2tEQUNiLDRFQUFDNUMsd0VBQVdBOzRDQUNWMkQsV0FBV3JELEtBQUsrQixPQUFPLEtBQUtGLFFBQVFDLFVBQVU7NENBQzlDRCxTQUFTQTs0Q0FDVGxCLGNBQWNBOzRDQUNkRixhQUFhQTs7Ozs7O3VDQUwrQm9CLFFBQVF5QixVQUFVOzs7OztnQ0FTdEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRZDtHQTlGd0J4RDs7UUFDSUwscUVBQWNBO1FBUXpCRyxzREFBU0E7OztLQVRGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3Byb2ZpbGUvW3VzZXJuYW1lXS9wYWdlLmpzP2M1ZDEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBMb2FkaW5nU2tlbGV0b24gfSBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9HZW5lcmFsL0xvYWRpbmdTa2VsZXRvblwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlVXNlckNvbnRleHQgfSBmcm9tIFwiQC9hcHAvY29udGV4dHMvdXNlckNvbnRleHRcIjtcbmltcG9ydCBXb3Jrb3V0Q2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy93b3Jrb3V0cy9Xb3Jrb3V0Q2FyZFwiO1xuaW1wb3J0IHsgVXNlclBvc3RDb250YWluZXIgfSBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9Qb3N0cy9Vc2VyUG9zdHNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvYXBwL3N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGVQYWdlKHtwYXJhbXN9KSB7XG4gIGNvbnN0IHsgdXNlciwgc2V0VXNlciB9ID0gdXNlVXNlckNvbnRleHQoKTtcbiAgY29uc3QgW3Byb2ZpbGVVc2VyLCBzZXRQcm9maWxlVXNlcl0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3dvcmtvdXRzLCBzZXRXb3Jrb3V0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtpc0RlbGV0ZWQsIHNldElzRGVsZXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93UG9zdHMsIHNldFNob3dQb3N0c10gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgUHJvbWlzZS5hbGwoW2ZldGNoKGAvYXBpL3dvcmtvdXRzYCksIGZldGNoKGAvYXBpL3Bvc3RzYCksIGZldGNoKGAvYXBpL3VzZXJzL3Byb2ZpbGUvJHtwYXJhbXMudXNlcm5hbWV9YCldKVxuICAgICAgLnRoZW4oKFtyZXMsIHJlczIsIHJlczNdKSA9PiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbcmVzLmpzb24oKSwgcmVzMi5qc29uKCksIHJlczMuanNvbigpXSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKFt3b3Jrb3V0c0RhdGEsIHBvc3RzRGF0YSwgdXNlckRhdGFdKSA9PiB7XG4gICAgICAgIHNldFByb2ZpbGVVc2VyKHVzZXJEYXRhKVxuICAgICAgICBjb25zdCB3b3Jrb3V0RGF0YSA9IHdvcmtvdXRzRGF0YS5maWx0ZXIoXG4gICAgICAgICAgKHdvcmtvdXQpID0+IHdvcmtvdXQuY3JlYXRvcl9pZCA9PT0gdXNlckRhdGEudXNlcl9pZFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBwb3N0RGF0YSA9IHBvc3RzRGF0YS5maWx0ZXIoKHBvc3QpID0+IHBvc3QudXNlcl9pZCA9PT0gdXNlckRhdGEudXNlcl9pZCk7XG4gICAgICAgIHNldFdvcmtvdXRzKHdvcmtvdXREYXRhKTtcbiAgICAgICAgc2V0UG9zdHMocG9zdERhdGEpO1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxMb2FkaW5nU2tlbGV0b24gLz47XG4gIH1cblxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XG4gICAgc2V0VXNlcih7fSk7XG4gICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNob3dQb3N0cyA9ICgpID0+IHtcbiAgICBzZXRTaG93UG9zdHMoIXNob3dQb3N0cylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPXtgZmxleCBqdXN0aWZ5LWNlbnRlcmB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5ib2R5U2VjdGlvbn1gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtZW5kIHByLTE2XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e2BtYi01ICR7c3R5bGVzLnRpdGxlfWB9Pntwcm9maWxlVXNlci51c2VybmFtZX08L2gxPlxuICAgICAgICAgIHt1c2VyLnVzZXJuYW1lID09PSBwcm9maWxlVXNlci51c2VybmFtZSA/IDxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQtbGcgcC0yXCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5Mb2dvdXQ8L2J1dHRvbj46bnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHB0LTQgZmxleCBqdXN0aWZ5LWFyb3VuZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Bob3ZlcjpjdXJzb3ItcG9pbnRlciBwLTEgcm91bmRlZCBtci00ICR7XG4gICAgICAgICAgICAgIHNob3dQb3N0cyA/IFwiYm9yZGVyIGZvbnQtYm9sZFwiIDogbnVsbFxuICAgICAgICAgICAgfWB9IG9uQ2xpY2s9e2hhbmRsZVNob3dQb3N0c30+UmVjZW50IFBvc3RzPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgbXItNSBob3ZlcjpjdXJzb3ItcG9pbnRlciBwLTEgcm91bmRlZCAke1xuICAgICAgICAgICAgICAhc2hvd1Bvc3RzID8gXCJib3JkZXIgZm9udC1ib2xkXCIgOiBudWxsXG4gICAgICAgICAgICB9YH0gb25DbGljaz17aGFuZGxlU2hvd1Bvc3RzfT5Xb3Jrb3V0czwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3Nob3dQb3N0cyA/IFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBib3JkZXIgbXQtMyBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgIHtwb3N0cy5tYXAoKHBvc3QsIGluZGV4LCBhcnJheSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzTm90TGFzdENoaWxkID0gaW5kZXggIT09IGFycmF5Lmxlbmd0aCAtIDEgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwb3N0LnBvc3RfaWR9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtM1wiPlxuICAgICAgICAgICAgICAgICAgICA8VXNlclBvc3RDb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICBwb3N0PXtwb3N0fVxuICAgICAgICAgICAgICAgICAgICAgIGlzTm90TGFzdENoaWxkPXtpc05vdExhc3RDaGlsZH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICB7cG9zdHMubGVuZ3RoID4gMSA/IDxociBjbGFzc05hbWU9XCJ0ZXh0XCIgLz4gOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6IFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtNFwiPlxuICAgICAgICAgICAgICB7d29ya291dHMubWFwKCh3b3Jrb3V0KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IHctZnVsbFwiIGtleT17d29ya291dC53b3Jrb3V0X2lkfT5cbiAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgY2FuRGVsZXRlPXt1c2VyLnVzZXJfaWQgPT09IHdvcmtvdXQuY3JlYXRvcl9pZH1cbiAgICAgICAgICAgICAgICAgICAgICB3b3Jrb3V0PXt3b3Jrb3V0fVxuICAgICAgICAgICAgICAgICAgICAgIHNldElzRGVsZXRlZD17c2V0SXNEZWxldGVkfVxuICAgICAgICAgICAgICAgICAgICAgIHNldFdvcmtvdXRzPXtzZXRXb3Jrb3V0c31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufSJdLCJuYW1lcyI6WyJMb2FkaW5nU2tlbGV0b24iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVVzZXJDb250ZXh0IiwiV29ya291dENhcmQiLCJVc2VyUG9zdENvbnRhaW5lciIsInVzZVJvdXRlciIsInN0eWxlcyIsIlByb2ZpbGVQYWdlIiwicGFyYW1zIiwidXNlciIsInNldFVzZXIiLCJwcm9maWxlVXNlciIsInNldFByb2ZpbGVVc2VyIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwicG9zdHMiLCJzZXRQb3N0cyIsIndvcmtvdXRzIiwic2V0V29ya291dHMiLCJpc0RlbGV0ZWQiLCJzZXRJc0RlbGV0ZWQiLCJzaG93UG9zdHMiLCJzZXRTaG93UG9zdHMiLCJyb3V0ZXIiLCJQcm9taXNlIiwiYWxsIiwiZmV0Y2giLCJ1c2VybmFtZSIsInRoZW4iLCJyZXMiLCJyZXMyIiwicmVzMyIsImpzb24iLCJ3b3Jrb3V0c0RhdGEiLCJwb3N0c0RhdGEiLCJ1c2VyRGF0YSIsIndvcmtvdXREYXRhIiwiZmlsdGVyIiwid29ya291dCIsImNyZWF0b3JfaWQiLCJ1c2VyX2lkIiwicG9zdERhdGEiLCJwb3N0IiwiaGFuZGxlTG9nb3V0IiwicHVzaCIsImhhbmRsZVNob3dQb3N0cyIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJib2R5U2VjdGlvbiIsImgxIiwidGl0bGUiLCJidXR0b24iLCJvbkNsaWNrIiwicCIsIm1hcCIsImluZGV4IiwiYXJyYXkiLCJpc05vdExhc3RDaGlsZCIsImxlbmd0aCIsInBvc3RfaWQiLCJociIsImNhbkRlbGV0ZSIsIndvcmtvdXRfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/profile/[username]/page.js\n"));

/***/ })

});