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

/***/ "(app-pages-browser)/./src/app/components/Posts/UserPosts.js":
/*!***********************************************!*\
  !*** ./src/app/components/Posts/UserPosts.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserPostContainer: function() { return /* binding */ UserPostContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CommentsContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CommentsContainer */ \"(app-pages-browser)/./src/app/components/Posts/CommentsContainer.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _app_contexts_userContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/contexts/userContext */ \"(app-pages-browser)/./src/app/contexts/userContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst UserPostContainer = (param)=>{\n    let { post, isNotLastChild } = param;\n    _s();\n    const [postUser, setPostUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [comments, setComments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [showComments, setShowComments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [newComment, setNewComments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [showAddComments, setShowAddComments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { user, setUser } = (0,_app_contexts_userContext__WEBPACK_IMPORTED_MODULE_4__.useUserContext)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        Promise.all([\n            fetch(\"/api/users/\".concat(post.user_id)),\n            fetch(\"/api/posts/\".concat(post.post_id, \"/comments\"))\n        ]).then((param)=>{\n            let [res, res2] = param;\n            return Promise.all([\n                res.json(),\n                res2.json()\n            ]);\n        }).then((param)=>{\n            let [userData, commentsData] = param;\n            setPostUser(userData);\n            setComments(commentsData);\n            setIsLoading(false);\n            if (user.username) {\n                setShowAddComments(true);\n            }\n        });\n    }, []);\n    if (isLoading) {\n        return;\n    }\n    function handleShowComments(e) {\n        setShowComments(!showComments);\n    }\n    function convertToDateString(str) {\n        const date = str.slice(8, 10) + \"/\" + str.slice(5, 7) + \"/\" + str.slice(0, 4);\n        const time = str.slice(11, 16);\n        return {\n            time,\n            date\n        };\n    }\n    function handleNewComment(e) {\n        setNewComments(e.target.value);\n    }\n    function getCurrentTimestamp() {\n        const currentDate = new Date();\n        return currentDate.toISOString(); // This will return the timestamp in ISO format\n    }\n    function handleSubmit(e) {\n        e.preventDefault();\n        const commentData = {\n            post_id: post.post_id,\n            body: newComment,\n            user_id: user.user_id,\n            completed_at: getCurrentTimestamp()\n        };\n        setComments((prevVals)=>[\n                ...prevVals,\n                commentData\n            ]);\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"/api/comments\", commentData).then((res)=>{\n            setNewComments(\"\");\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mb-5 w-full max-w-[500px] \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"ml-3 opacity-50 text-sm text-DeepPurple\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            convertToDateString(post.completed_at).time,\n                            \" | \",\n                            convertToDateString(post.completed_at).date\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Posts/UserPosts.js\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Posts/UserPosts.js\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Posts/UserPosts.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-LightPurple text-platinum p-3 rounded-xl mb-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-bold pl-2 pt-1 text-xl\",\n                        children: post.session_name\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Posts/UserPosts.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"pl-2 pt-1 pb-2 text\",\n                        children: post.description\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Posts/UserPosts.js\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                        className: \"mt-1 opacity-40\"\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Posts/UserPosts.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, undefined),\n                    showAddComments ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        className: \"flex justify-center items-center pt-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"text-DeepPurple p-1 rounded-lg w-full\",\n                                name: \"comment\",\n                                id: \"comment\",\n                                value: newComment,\n                                onChange: handleNewComment,\n                                placeholder: \"New Comment...\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Posts/UserPosts.js\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/white-back-arrow.png\",\n                                    className: \"ml-1 -rotate-180\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Posts/UserPosts.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Posts/UserPosts.js\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Posts/UserPosts.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, undefined) : null,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"pl-2 pt-2 flex \".concat(comments.length ? null : \"italic\"),\n                        children: [\n                            comments.length ? \"Comments (\".concat(comments.length, \")\") : \"No comments\",\n                            \" \",\n                            comments.length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/white-back-arrow.png\",\n                                className: \"ml-1 hover:cursor-pointer transition-[0.15s] \".concat(showComments ? \"-rotate-90\" : \"-rotate-180\"),\n                                onClick: handleShowComments\n                            }, void 0, false, {\n                                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Posts/UserPosts.js\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, undefined) : null\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Posts/UserPosts.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, undefined),\n                    showComments ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CommentsContainer__WEBPACK_IMPORTED_MODULE_2__.CommentsContainer, {\n                        comments: comments\n                    }, void 0, false, {\n                        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Posts/UserPosts.js\",\n                        lineNumber: 104,\n                        columnNumber: 25\n                    }, undefined) : null\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Posts/UserPosts.js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, undefined),\n            isNotLastChild ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: \"opacity-20\"\n            }, void 0, false, {\n                fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Posts/UserPosts.js\",\n                lineNumber: 107,\n                columnNumber: 25\n            }, undefined) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/harrydaniels/github-clone-repos/northcoders/projects/gymie/gym-app/src/app/components/Posts/UserPosts.js\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UserPostContainer, \"YDGxfN5Zct6maYesd/KxkjTOaC8=\", false, function() {\n    return [\n        _app_contexts_userContext__WEBPACK_IMPORTED_MODULE_4__.useUserContext\n    ];\n});\n_c = UserPostContainer;\nvar _c;\n$RefreshReg$(_c, \"UserPostContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qb3N0cy9Vc2VyUG9zdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDWTtBQUMzQjtBQUNKO0FBQ21DO0FBRXJELE1BQU1NLG9CQUFvQjtRQUFDLEVBQUVDLElBQUksRUFBRUMsY0FBYyxFQUFFOztJQUN4RCxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDVSxVQUFVQyxZQUFZLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1ksY0FBY0MsZ0JBQWdCLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ2MsV0FBV0MsYUFBYSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNnQixZQUFZQyxlQUFlLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUM5QyxNQUFNLENBQUNrQixpQkFBaUJDLG1CQUFtQixHQUFHbkIsK0NBQVFBLENBQUM7SUFDdkQsTUFBTSxFQUFFb0IsSUFBSSxFQUFFQyxPQUFPLEVBQUUsR0FBR2pCLHlFQUFjQTtJQUV4Q0wsZ0RBQVNBLENBQUM7UUFDUnVCLFFBQVFDLEdBQUcsQ0FBQztZQUNWQyxNQUFNLGNBQTJCLE9BQWJsQixLQUFLbUIsT0FBTztZQUNoQ0QsTUFBTSxjQUEyQixPQUFibEIsS0FBS29CLE9BQU8sRUFBQztTQUNsQyxFQUNFQyxJQUFJLENBQUM7Z0JBQUMsQ0FBQ0MsS0FBS0MsS0FBSztZQUNoQixPQUFPUCxRQUFRQyxHQUFHLENBQUM7Z0JBQUNLLElBQUlFLElBQUk7Z0JBQUlELEtBQUtDLElBQUk7YUFBRztRQUM5QyxHQUNDSCxJQUFJLENBQUM7Z0JBQUMsQ0FBQ0ksVUFBVUMsYUFBYTtZQUM3QnZCLFlBQVlzQjtZQUNacEIsWUFBWXFCO1lBQ1pqQixhQUFhO1lBQ2IsSUFBR0ssS0FBS2EsUUFBUSxFQUFDO2dCQUNmZCxtQkFBbUI7WUFDckI7UUFDRjtJQUNKLEdBQUcsRUFBRTtJQUVMLElBQUlMLFdBQVc7UUFDYjtJQUNGO0lBRUEsU0FBU29CLG1CQUFtQkMsQ0FBQztRQUMzQnRCLGdCQUFnQixDQUFDRDtJQUNuQjtJQUVBLFNBQVN3QixvQkFBb0JDLEdBQUc7UUFDOUIsTUFBTUMsT0FBT0QsSUFBSUUsS0FBSyxDQUFDLEdBQUUsTUFBTSxNQUFNRixJQUFJRSxLQUFLLENBQUMsR0FBRSxLQUFLLE1BQU1GLElBQUlFLEtBQUssQ0FBQyxHQUFFO1FBQ3hFLE1BQU1DLE9BQU9ILElBQUlFLEtBQUssQ0FBQyxJQUFHO1FBRTFCLE9BQU87WUFBQ0M7WUFBTUY7UUFBSTtJQUNwQjtJQUVBLFNBQVNHLGlCQUFpQk4sQ0FBQztRQUN6QmxCLGVBQWVrQixFQUFFTyxNQUFNLENBQUNDLEtBQUs7SUFDL0I7SUFFQSxTQUFTQztRQUNQLE1BQU1DLGNBQWMsSUFBSUM7UUFDeEIsT0FBT0QsWUFBWUUsV0FBVyxJQUFJLCtDQUErQztJQUNuRjtJQUVBLFNBQVNDLGFBQWFiLENBQUM7UUFDckJBLEVBQUVjLGNBQWM7UUFDaEIsTUFBTUMsY0FBYztZQUNsQnhCLFNBQVNwQixLQUFLb0IsT0FBTztZQUNyQnlCLE1BQU1uQztZQUNOUyxTQUFTTCxLQUFLSyxPQUFPO1lBQ3JCMkIsY0FBY1I7UUFDaEI7UUFDQWpDLFlBQVksQ0FBQzBDLFdBQWE7bUJBQUlBO2dCQUFVSDthQUFZO1FBQ3BEL0MsNkNBQUtBLENBQUNHLElBQUksQ0FBQyxpQkFBaUI0QyxhQUFhdkIsSUFBSSxDQUFDLENBQUNDO1lBQzdDWCxlQUFlO1FBQ2pCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ3FDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNDOzs0QkFBR3BCLG9CQUFvQjlCLEtBQUs4QyxZQUFZLEVBQUVaLElBQUk7NEJBQUM7NEJBQUlKLG9CQUFvQjlCLEtBQUs4QyxZQUFZLEVBQUVkLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUluRyw4REFBQ2dCO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQUdGLFdBQVU7a0NBQStCakQsS0FBS29ELFlBQVk7Ozs7OztrQ0FDOUQsOERBQUNGO3dCQUFFRCxXQUFVO2tDQUF1QmpELEtBQUtxRCxXQUFXOzs7Ozs7a0NBQ3BELDhEQUFDQzt3QkFBR0wsV0FBVTs7Ozs7O29CQUNickMsZ0NBQ0QsOERBQUMyQzt3QkFBS0MsVUFBVWQ7d0JBQWNPLFdBQVU7OzBDQUN0Qyw4REFBQ1E7Z0NBQU1DLE1BQUs7Z0NBQU9ULFdBQVU7Z0NBQXdDVSxNQUFLO2dDQUFVQyxJQUFHO2dDQUFVdkIsT0FBTzNCO2dDQUFZbUQsVUFBVTFCO2dDQUFrQjJCLGFBQVk7Z0NBQWlCQyxRQUFROzs7Ozs7MENBQ3JMLDhEQUFDQzswQ0FBTyw0RUFBQ0M7b0NBQ0xDLEtBQUk7b0NBQ0pqQixXQUFZOzs7Ozs7Ozs7Ozs7Ozs7O29DQUNSO2tDQUVWLDhEQUFDQzt3QkFBRUQsV0FBVyxrQkFBb0QsT0FBbEM3QyxTQUFTK0QsTUFBTSxHQUFHLE9BQU87OzRCQUN0RC9ELFNBQVMrRCxNQUFNLEdBQUcsYUFBNkIsT0FBaEIvRCxTQUFTK0QsTUFBTSxFQUFDLE9BQUs7NEJBQWU7NEJBQ25FL0QsU0FBUytELE1BQU0saUJBQ2QsOERBQUNGO2dDQUNDQyxLQUFJO2dDQUNKakIsV0FBVyxnREFFVixPQURDM0MsZUFBZSxlQUFlO2dDQUVoQzhELFNBQVN4Qzs7Ozs7NENBRVQ7Ozs7Ozs7b0JBRUx0Qiw2QkFBZSw4REFBQ1gsaUVBQWlCQTt3QkFBQ1MsVUFBVUE7Ozs7O29DQUFlOzs7Ozs7O1lBRzdESCwrQkFBaUIsOERBQUNxRDtnQkFBR0wsV0FBVTs7Ozs7NEJBQWtCOzs7Ozs7O0FBR3hELEVBQUU7R0F2R1dsRDs7UUFPZUQscUVBQWNBOzs7S0FQN0JDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qb3N0cy9Vc2VyUG9zdHMuanM/YzNjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbW1lbnRzQ29udGFpbmVyIH0gZnJvbSBcIi4vQ29tbWVudHNDb250YWluZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IHVzZVVzZXJDb250ZXh0IH0gZnJvbSBcIkAvYXBwL2NvbnRleHRzL3VzZXJDb250ZXh0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgVXNlclBvc3RDb250YWluZXIgPSAoeyBwb3N0LCBpc05vdExhc3RDaGlsZCB9KSA9PiB7XHJcbiAgY29uc3QgW3Bvc3RVc2VyLCBzZXRQb3N0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbY29tbWVudHMsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtzaG93Q29tbWVudHMsIHNldFNob3dDb21tZW50c10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtuZXdDb21tZW50LCBzZXROZXdDb21tZW50c10gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbc2hvd0FkZENvbW1lbnRzLCBzZXRTaG93QWRkQ29tbWVudHNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgeyB1c2VyLCBzZXRVc2VyIH0gPSB1c2VVc2VyQ29udGV4dCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgUHJvbWlzZS5hbGwoW1xyXG4gICAgICBmZXRjaChgL2FwaS91c2Vycy8ke3Bvc3QudXNlcl9pZH1gKSxcclxuICAgICAgZmV0Y2goYC9hcGkvcG9zdHMvJHtwb3N0LnBvc3RfaWR9L2NvbW1lbnRzYCksXHJcbiAgICBdKVxyXG4gICAgICAudGhlbigoW3JlcywgcmVzMl0pID0+IHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW3Jlcy5qc29uKCksIHJlczIuanNvbigpXSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChbdXNlckRhdGEsIGNvbW1lbnRzRGF0YV0pID0+IHtcclxuICAgICAgICBzZXRQb3N0VXNlcih1c2VyRGF0YSk7XHJcbiAgICAgICAgc2V0Q29tbWVudHMoY29tbWVudHNEYXRhKTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIGlmKHVzZXIudXNlcm5hbWUpe1xyXG4gICAgICAgICAgc2V0U2hvd0FkZENvbW1lbnRzKHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGlmIChpc0xvYWRpbmcpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVNob3dDb21tZW50cyhlKSB7XHJcbiAgICBzZXRTaG93Q29tbWVudHMoIXNob3dDb21tZW50cyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjb252ZXJ0VG9EYXRlU3RyaW5nKHN0cil7XHJcbiAgICBjb25zdCBkYXRlID0gc3RyLnNsaWNlKDgsMTApICsgJy8nICsgc3RyLnNsaWNlKDUsNykgKyAnLycgKyBzdHIuc2xpY2UoMCw0KVxyXG4gICAgY29uc3QgdGltZSA9IHN0ci5zbGljZSgxMSwxNilcclxuICAgIFxyXG4gICAgcmV0dXJuIHt0aW1lLCBkYXRlfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlTmV3Q29tbWVudChlKXtcclxuICAgIHNldE5ld0NvbW1lbnRzKGUudGFyZ2V0LnZhbHVlKVxyXG4gIH0gXHJcblxyXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRUaW1lc3RhbXAoKSB7XHJcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICByZXR1cm4gY3VycmVudERhdGUudG9JU09TdHJpbmcoKTsgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgdGltZXN0YW1wIGluIElTTyBmb3JtYXRcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IGNvbW1lbnREYXRhID0ge1xyXG4gICAgICBwb3N0X2lkOiBwb3N0LnBvc3RfaWQsXHJcbiAgICAgIGJvZHk6IG5ld0NvbW1lbnQsXHJcbiAgICAgIHVzZXJfaWQ6IHVzZXIudXNlcl9pZCxcclxuICAgICAgY29tcGxldGVkX2F0OiBnZXRDdXJyZW50VGltZXN0YW1wKClcclxuICAgIH1cclxuICAgIHNldENvbW1lbnRzKChwcmV2VmFscykgPT4gWy4uLnByZXZWYWxzLCBjb21tZW50RGF0YV0pXHJcbiAgICBheGlvcy5wb3N0KCcvYXBpL2NvbW1lbnRzJywgY29tbWVudERhdGEpLnRoZW4oKHJlcyk9PntcclxuICAgICAgc2V0TmV3Q29tbWVudHMoJycpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNSB3LWZ1bGwgbWF4LXctWzUwMHB4XSBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtYi0zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0zIG9wYWNpdHktNTAgdGV4dC1zbSB0ZXh0LURlZXBQdXJwbGVcIj5cclxuICAgICAgICAgIDxwPntjb252ZXJ0VG9EYXRlU3RyaW5nKHBvc3QuY29tcGxldGVkX2F0KS50aW1lfSB8IHtjb252ZXJ0VG9EYXRlU3RyaW5nKHBvc3QuY29tcGxldGVkX2F0KS5kYXRlfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLUxpZ2h0UHVycGxlIHRleHQtcGxhdGludW0gcC0zIHJvdW5kZWQteGwgbWItNVwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgcGwtMiBwdC0xIHRleHQteGxcIj57cG9zdC5zZXNzaW9uX25hbWV9PC9oMT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwbC0yIHB0LTEgcGItMiB0ZXh0XCI+e3Bvc3QuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDxociBjbGFzc05hbWU9XCJtdC0xIG9wYWNpdHktNDBcIiAvPlxyXG4gICAgICAgIHtzaG93QWRkQ29tbWVudHMgPyBcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHB0LTMnPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPSd0ZXh0LURlZXBQdXJwbGUgcC0xIHJvdW5kZWQtbGcgdy1mdWxsJyBuYW1lPVwiY29tbWVudFwiIGlkPVwiY29tbWVudFwiIHZhbHVlPXtuZXdDb21tZW50fSBvbkNoYW5nZT17aGFuZGxlTmV3Q29tbWVudH0gcGxhY2Vob2xkZXI9J05ldyBDb21tZW50Li4uJyByZXF1aXJlZC8+XHJcbiAgICAgICAgICA8YnV0dG9uPjxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCIvd2hpdGUtYmFjay1hcnJvdy5wbmdcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1sLTEgLXJvdGF0ZS0xODBgfS8+PC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPiA6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtgcGwtMiBwdC0yIGZsZXggJHtjb21tZW50cy5sZW5ndGggPyBudWxsIDogXCJpdGFsaWNcIn1gfT5cclxuICAgICAgICAgIHtjb21tZW50cy5sZW5ndGggPyBgQ29tbWVudHMgKCR7Y29tbWVudHMubGVuZ3RofSlgIDogXCJObyBjb21tZW50c1wifXtcIiBcIn1cclxuICAgICAgICAgIHtjb21tZW50cy5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCIvd2hpdGUtYmFjay1hcnJvdy5wbmdcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1sLTEgaG92ZXI6Y3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbi1bMC4xNXNdICR7XHJcbiAgICAgICAgICAgICAgICBzaG93Q29tbWVudHMgPyBcIi1yb3RhdGUtOTBcIiA6IFwiLXJvdGF0ZS0xODBcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNob3dDb21tZW50c31cclxuICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIHtzaG93Q29tbWVudHMgPyA8Q29tbWVudHNDb250YWluZXIgY29tbWVudHM9e2NvbW1lbnRzfSAvPiA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge2lzTm90TGFzdENoaWxkID8gPGhyIGNsYXNzTmFtZT1cIm9wYWNpdHktMjBcIiAvPiA6IG51bGx9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59OyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbW1lbnRzQ29udGFpbmVyIiwiTGluayIsImF4aW9zIiwidXNlVXNlckNvbnRleHQiLCJVc2VyUG9zdENvbnRhaW5lciIsInBvc3QiLCJpc05vdExhc3RDaGlsZCIsInBvc3RVc2VyIiwic2V0UG9zdFVzZXIiLCJjb21tZW50cyIsInNldENvbW1lbnRzIiwic2hvd0NvbW1lbnRzIiwic2V0U2hvd0NvbW1lbnRzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwibmV3Q29tbWVudCIsInNldE5ld0NvbW1lbnRzIiwic2hvd0FkZENvbW1lbnRzIiwic2V0U2hvd0FkZENvbW1lbnRzIiwidXNlciIsInNldFVzZXIiLCJQcm9taXNlIiwiYWxsIiwiZmV0Y2giLCJ1c2VyX2lkIiwicG9zdF9pZCIsInRoZW4iLCJyZXMiLCJyZXMyIiwianNvbiIsInVzZXJEYXRhIiwiY29tbWVudHNEYXRhIiwidXNlcm5hbWUiLCJoYW5kbGVTaG93Q29tbWVudHMiLCJlIiwiY29udmVydFRvRGF0ZVN0cmluZyIsInN0ciIsImRhdGUiLCJzbGljZSIsInRpbWUiLCJoYW5kbGVOZXdDb21tZW50IiwidGFyZ2V0IiwidmFsdWUiLCJnZXRDdXJyZW50VGltZXN0YW1wIiwiY3VycmVudERhdGUiLCJEYXRlIiwidG9JU09TdHJpbmciLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbW1lbnREYXRhIiwiYm9keSIsImNvbXBsZXRlZF9hdCIsInByZXZWYWxzIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImgxIiwic2Vzc2lvbl9uYW1lIiwiZGVzY3JpcHRpb24iLCJociIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJpZCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsImJ1dHRvbiIsImltZyIsInNyYyIsImxlbmd0aCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Posts/UserPosts.js\n"));

/***/ })

});