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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProfilePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_components_General_LoadingSkeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/components/General/LoadingSkeleton */ \"(app-pages-browser)/./src/app/components/General/LoadingSkeleton.js\");\n/* harmony import */ var _app_components_General_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/General/Title */ \"(app-pages-browser)/./src/app/components/General/Title.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_contexts_userContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/contexts/userContext */ \"(app-pages-browser)/./src/app/contexts/userContext.js\");\n/* harmony import */ var _components_workouts_WorkoutCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/workouts/WorkoutCard */ \"(app-pages-browser)/./src/app/components/workouts/WorkoutCard.jsx\");\n/* harmony import */ var _app_components_Posts_UserPosts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/components/Posts/UserPosts */ \"(app-pages-browser)/./src/app/components/Posts/UserPosts.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_7__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction ProfilePage(param) {\n    let { params } = param;\n    _s();\n    const { user, setUser } = (0,_app_contexts_userContext__WEBPACK_IMPORTED_MODULE_4__.useUserContext)();\n    const [profileUser, setProfileUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [workouts, setWorkouts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [isDeleted, setIsDeleted] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        Promise.all([\n            fetch(\"/api/workouts\"),\n            fetch(\"/api/posts\"),\n            fetch(\"/api/users/profile/\".concat(params.username))\n        ]).then((param)=>{\n            let [res, res2, res3] = param;\n            return Promise.all([\n                res.json(),\n                res2.json(),\n                res3.json()\n            ]);\n        }).then((param)=>{\n            let [workoutsData, postsData, userData] = param;\n            setProfileUser(userData);\n            const workoutData = workoutsData.filter((workout)=>workout.creator_id === userData.user_id);\n            const postData = postsData.filter((post)=>post.user_id === userData.user_id);\n            setWorkouts(workoutData);\n            setPosts(postData);\n            setIsLoading(false);\n        });\n    }, []);\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_General_LoadingSkeleton__WEBPACK_IMPORTED_MODULE_1__.LoadingSkeleton, {}, void 0, false, {\n            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n            lineNumber: 38,\n            columnNumber: 12\n        }, this);\n    }\n    const handleLogout = ()=>{\n        setUser({});\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-end pr-16\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_General_Title__WEBPACK_IMPORTED_MODULE_2__.Title, {\n                        text: profileUser.username\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    user.username === profileUser.username ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"border rounded-lg p-2\",\n                        onClick: handleLogout,\n                        children: \"Logout\"\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this) : null\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-12 pt-4 flex justify-around\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-2xl font-bold text-DeepPurple\",\n                                children: \"Recent Posts\"\n                            }, void 0, false, {\n                                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"rounded-2xl border w-5/6 mt-3\",\n                                children: [\n                                    posts.map((post, index, array)=>{\n                                        const isNotLastChild = index !== array.length - 1 ? true : false;\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex justify-center mt-3\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Posts_UserPosts__WEBPACK_IMPORTED_MODULE_6__.UserPostContainer, {\n                                                post: post,\n                                                isNotLastChild: isNotLastChild\n                                            }, void 0, false, {\n                                                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                                lineNumber: 65,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, post.post_id, false, {\n                                            fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 17\n                                        }, this);\n                                    }),\n                                    posts.length > 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                        className: \"text\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 33\n                                    }, this) : null\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-2xl font-bold text-DeepPurple\",\n                                children: \"Workouts\"\n                            }, void 0, false, {\n                                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this),\n                            workouts.map((workout)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-start w-full\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_workouts_WorkoutCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        workout: workout,\n                                        setIsDeleted: setIsDeleted,\n                                        setWorkouts: setWorkouts\n                                    }, void 0, false, {\n                                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 17\n                                    }, this)\n                                }, workout.workout_id, false, {\n                                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, this);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/profile/[username]/page.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(ProfilePage, \"hj7PblTlM6j33UK6TBJqfagLOQk=\", false, function() {\n    return [\n        _app_contexts_userContext__WEBPACK_IMPORTED_MODULE_4__.useUserContext,\n        next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = ProfilePage;\nvar _c;\n$RefreshReg$(_c, \"ProfilePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZmlsZS9bdXNlcm5hbWVdL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUMyRTtBQUNwQjtBQUNYO0FBQ2dCO0FBQ0k7QUFDSztBQUN6QjtBQUU3QixTQUFTUSxZQUFZLEtBQVU7UUFBVixFQUFFQyxNQUFNLEVBQUUsR0FBVjs7SUFDbEMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRSxHQUFHUCx5RUFBY0E7SUFDeEMsTUFBTSxDQUFDUSxhQUFhQyxlQUFlLEdBQUdWLCtDQUFRQSxDQUFDLEVBQUU7SUFDakQsTUFBTSxDQUFDVyxXQUFXQyxhQUFhLEdBQUdaLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2EsT0FBT0MsU0FBUyxHQUFHZCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDLE1BQU0sQ0FBQ2UsVUFBVUMsWUFBWSxHQUFHaEIsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNpQixXQUFXQyxhQUFhLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNbUIsU0FBU2YsMERBQVNBO0lBRXhCTCxnREFBU0EsQ0FBQztRQUNScUIsUUFBUUMsR0FBRyxDQUFDO1lBQUNDLE1BQU87WUFBaUJBLE1BQU87WUFBY0EsTUFBTSxzQkFBc0MsT0FBaEJoQixPQUFPaUIsUUFBUTtTQUFJLEVBQ3RHQyxJQUFJLENBQUM7Z0JBQUMsQ0FBQ0MsS0FBS0MsTUFBTUMsS0FBSztZQUN0QixPQUFPUCxRQUFRQyxHQUFHLENBQUM7Z0JBQUNJLElBQUlHLElBQUk7Z0JBQUlGLEtBQUtFLElBQUk7Z0JBQUlELEtBQUtDLElBQUk7YUFBRztRQUMzRCxHQUNDSixJQUFJLENBQUM7Z0JBQUMsQ0FBQ0ssY0FBY0MsV0FBV0MsU0FBUztZQUN4Q3JCLGVBQWVxQjtZQUNmLE1BQU1DLGNBQWNILGFBQWFJLE1BQU0sQ0FDckMsQ0FBQ0MsVUFBWUEsUUFBUUMsVUFBVSxLQUFLSixTQUFTSyxPQUFPO1lBRXRELE1BQU1DLFdBQVdQLFVBQVVHLE1BQU0sQ0FBQyxDQUFDSyxPQUFTQSxLQUFLRixPQUFPLEtBQUtMLFNBQVNLLE9BQU87WUFDN0VwQixZQUFZZ0I7WUFDWmxCLFNBQVN1QjtZQUNUekIsYUFBYTtRQUNmO0lBQ0osR0FBRyxFQUFFO0lBRUwsSUFBSUQsV0FBVztRQUNiLHFCQUFPLDhEQUFDZCxvRkFBZUE7Ozs7O0lBQ3pCO0lBRUEsTUFBTTBDLGVBQWU7UUFDbkIvQixRQUFRLENBQUM7UUFDVFcsT0FBT3FCLElBQUksQ0FBQztJQUNkO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDQztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUM1QyxnRUFBS0E7d0JBQUM2QyxNQUFNbEMsWUFBWWMsUUFBUTs7Ozs7O29CQUNoQ2hCLEtBQUtnQixRQUFRLEtBQUtkLFlBQVljLFFBQVEsaUJBQ3JDLDhEQUFDcUI7d0JBQU9GLFdBQVU7d0JBQXdCRyxTQUFTTjtrQ0FBYzs7Ozs7K0JBR2pFOzs7Ozs7OzBCQUdKLDhEQUFDRTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0k7Z0NBQUVKLFdBQVU7MENBQXFDOzs7Ozs7MENBQ2xELDhEQUFDRDtnQ0FBSUMsV0FBVTs7b0NBQ1o3QixNQUFNa0MsR0FBRyxDQUFDLENBQUNULE1BQU1VLE9BQU9DO3dDQUN2QixNQUFNQyxpQkFBaUJGLFVBQVVDLE1BQU1FLE1BQU0sR0FBRyxJQUFJLE9BQU87d0NBQzNELHFCQUNFLDhEQUFDVjs0Q0FBdUJDLFdBQVU7c0RBQ2hDLDRFQUFDdkMsOEVBQWlCQTtnREFDaEJtQyxNQUFNQTtnREFDTlksZ0JBQWdCQTs7Ozs7OzJDQUhWWixLQUFLYyxPQUFPOzs7OztvQ0FPMUI7b0NBQ0N2QyxNQUFNc0MsTUFBTSxHQUFHLGtCQUFJLDhEQUFDRTt3Q0FBR1gsV0FBVTs7Ozs7K0NBQVk7Ozs7Ozs7Ozs7Ozs7a0NBR2xELDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNJO2dDQUFFSixXQUFVOzBDQUFxQzs7Ozs7OzRCQUNqRDNCLFNBQVNnQyxHQUFHLENBQUMsQ0FBQ2I7Z0NBQ2IscUJBQ0UsOERBQUNPO29DQUE2QkMsV0FBVTs4Q0FDdEMsNEVBQUN4Qyx3RUFBV0E7d0NBQ1ZnQyxTQUFTQTt3Q0FDVGhCLGNBQWNBO3dDQUNkRixhQUFhQTs7Ozs7O21DQUpQa0IsUUFBUW9CLFVBQVU7Ozs7OzRCQVFoQzs7Ozs7Ozs7Ozs7Ozs7O0FBS1Y7R0FsRndCakQ7O1FBQ0lKLHFFQUFjQTtRQU96Qkcsc0RBQVNBOzs7S0FSRkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm9maWxlL1t1c2VybmFtZV0vcGFnZS5qcz9jNWQxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgTG9hZGluZ1NrZWxldG9uIH0gZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvR2VuZXJhbC9Mb2FkaW5nU2tlbGV0b25cIjtcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvR2VuZXJhbC9UaXRsZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlVXNlckNvbnRleHQgfSBmcm9tIFwiQC9hcHAvY29udGV4dHMvdXNlckNvbnRleHRcIjtcbmltcG9ydCBXb3Jrb3V0Q2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy93b3Jrb3V0cy9Xb3Jrb3V0Q2FyZFwiO1xuaW1wb3J0IHsgVXNlclBvc3RDb250YWluZXIgfSBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9Qb3N0cy9Vc2VyUG9zdHNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZVBhZ2UoeyBwYXJhbXMgfSkge1xuICBjb25zdCB7IHVzZXIsIHNldFVzZXIgfSA9IHVzZVVzZXJDb250ZXh0KCk7XG4gIGNvbnN0IFtwcm9maWxlVXNlciwgc2V0UHJvZmlsZVVzZXJdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbd29ya291dHMsIHNldFdvcmtvdXRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2lzRGVsZXRlZCwgc2V0SXNEZWxldGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIFByb21pc2UuYWxsKFtmZXRjaChgL2FwaS93b3Jrb3V0c2ApLCBmZXRjaChgL2FwaS9wb3N0c2ApLCBmZXRjaChgL2FwaS91c2Vycy9wcm9maWxlLyR7cGFyYW1zLnVzZXJuYW1lfWApXSlcbiAgICAgIC50aGVuKChbcmVzLCByZXMyLCByZXMzXSkgPT4ge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW3Jlcy5qc29uKCksIHJlczIuanNvbigpLCByZXMzLmpzb24oKV0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChbd29ya291dHNEYXRhLCBwb3N0c0RhdGEsIHVzZXJEYXRhXSkgPT4ge1xuICAgICAgICBzZXRQcm9maWxlVXNlcih1c2VyRGF0YSlcbiAgICAgICAgY29uc3Qgd29ya291dERhdGEgPSB3b3Jrb3V0c0RhdGEuZmlsdGVyKFxuICAgICAgICAgICh3b3Jrb3V0KSA9PiB3b3Jrb3V0LmNyZWF0b3JfaWQgPT09IHVzZXJEYXRhLnVzZXJfaWRcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgcG9zdERhdGEgPSBwb3N0c0RhdGEuZmlsdGVyKChwb3N0KSA9PiBwb3N0LnVzZXJfaWQgPT09IHVzZXJEYXRhLnVzZXJfaWQpO1xuICAgICAgICBzZXRXb3Jrb3V0cyh3b3Jrb3V0RGF0YSk7XG4gICAgICAgIHNldFBvc3RzKHBvc3REYXRhKTtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgaWYgKGlzTG9hZGluZykge1xuICAgIHJldHVybiA8TG9hZGluZ1NrZWxldG9uIC8+O1xuICB9XG5cbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xuICAgIHNldFVzZXIoe30pO1xuICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWVuZCBwci0xNlwiPlxuICAgICAgICA8VGl0bGUgdGV4dD17cHJvZmlsZVVzZXIudXNlcm5hbWV9IC8+XG4gICAgICAgIHt1c2VyLnVzZXJuYW1lID09PSBwcm9maWxlVXNlci51c2VybmFtZSA/IFxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQtbGcgcC0yXCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5cbiAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgIDwvYnV0dG9uPiA6XG4gICAgICAgICAgbnVsbFxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMTIgcHQtNCBmbGV4IGp1c3RpZnktYXJvdW5kXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtRGVlcFB1cnBsZVwiPlJlY2VudCBQb3N0czwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIGJvcmRlciB3LTUvNiBtdC0zXCI+XG4gICAgICAgICAgICB7cG9zdHMubWFwKChwb3N0LCBpbmRleCwgYXJyYXkpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaXNOb3RMYXN0Q2hpbGQgPSBpbmRleCAhPT0gYXJyYXkubGVuZ3RoIC0gMSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17cG9zdC5wb3N0X2lkfSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTNcIj5cbiAgICAgICAgICAgICAgICAgIDxVc2VyUG9zdENvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICBwb3N0PXtwb3N0fVxuICAgICAgICAgICAgICAgICAgICBpc05vdExhc3RDaGlsZD17aXNOb3RMYXN0Q2hpbGR9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICB7cG9zdHMubGVuZ3RoID4gMSA/IDxociBjbGFzc05hbWU9XCJ0ZXh0XCIgLz4gOiBudWxsfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1EZWVwUHVycGxlXCI+V29ya291dHM8L3A+XG4gICAgICAgICAge3dvcmtvdXRzLm1hcCgod29ya291dCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e3dvcmtvdXQud29ya291dF9pZH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IHctZnVsbFwiPlxuICAgICAgICAgICAgICAgIDxXb3Jrb3V0Q2FyZFxuICAgICAgICAgICAgICAgICAgd29ya291dD17d29ya291dH1cbiAgICAgICAgICAgICAgICAgIHNldElzRGVsZXRlZD17c2V0SXNEZWxldGVkfVxuICAgICAgICAgICAgICAgICAgc2V0V29ya291dHM9e3NldFdvcmtvdXRzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJMb2FkaW5nU2tlbGV0b24iLCJUaXRsZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlVXNlckNvbnRleHQiLCJXb3Jrb3V0Q2FyZCIsIlVzZXJQb3N0Q29udGFpbmVyIiwidXNlUm91dGVyIiwiUHJvZmlsZVBhZ2UiLCJwYXJhbXMiLCJ1c2VyIiwic2V0VXNlciIsInByb2ZpbGVVc2VyIiwic2V0UHJvZmlsZVVzZXIiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJwb3N0cyIsInNldFBvc3RzIiwid29ya291dHMiLCJzZXRXb3Jrb3V0cyIsImlzRGVsZXRlZCIsInNldElzRGVsZXRlZCIsInJvdXRlciIsIlByb21pc2UiLCJhbGwiLCJmZXRjaCIsInVzZXJuYW1lIiwidGhlbiIsInJlcyIsInJlczIiLCJyZXMzIiwianNvbiIsIndvcmtvdXRzRGF0YSIsInBvc3RzRGF0YSIsInVzZXJEYXRhIiwid29ya291dERhdGEiLCJmaWx0ZXIiLCJ3b3Jrb3V0IiwiY3JlYXRvcl9pZCIsInVzZXJfaWQiLCJwb3N0RGF0YSIsInBvc3QiLCJoYW5kbGVMb2dvdXQiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwidGV4dCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwIiwibWFwIiwiaW5kZXgiLCJhcnJheSIsImlzTm90TGFzdENoaWxkIiwibGVuZ3RoIiwicG9zdF9pZCIsImhyIiwid29ya291dF9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/profile/[username]/page.js\n"));

/***/ })

});