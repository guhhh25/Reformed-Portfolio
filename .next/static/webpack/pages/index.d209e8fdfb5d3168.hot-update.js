"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/sections/contact.tsx":
/*!*********************************************!*\
  !*** ./src/components/sections/contact.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Contact = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: \"#000\",\n            color: \"#fff\",\n            padding: \"50px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    textAlign: \"center\"\n                },\n                children: \"Contato\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guhhh\\\\Desktop\\\\port\\\\Reformed-Portfolio\\\\src\\\\components\\\\sections\\\\contact.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: enviarMensagem,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginBottom: \"20px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"nome\",\n                                children: \"Nome:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\guhhh\\\\Desktop\\\\port\\\\Reformed-Portfolio\\\\src\\\\components\\\\sections\\\\contact.tsx\",\n                                lineNumber: 11,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"nome\",\n                                name: \"nome\",\n                                value: nome,\n                                onChange: (e)=>setNome(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\guhhh\\\\Desktop\\\\port\\\\Reformed-Portfolio\\\\src\\\\components\\\\sections\\\\contact.tsx\",\n                                lineNumber: 12,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\guhhh\\\\Desktop\\\\port\\\\Reformed-Portfolio\\\\src\\\\components\\\\sections\\\\contact.tsx\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginBottom: \"20px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"email\",\n                                children: \"Email:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\guhhh\\\\Desktop\\\\port\\\\Reformed-Portfolio\\\\src\\\\components\\\\sections\\\\contact.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                id: \"email\",\n                                name: \"email\",\n                                value: email,\n                                onChange: (e)=>setEmail(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\guhhh\\\\Desktop\\\\port\\\\Reformed-Portfolio\\\\src\\\\components\\\\sections\\\\contact.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\guhhh\\\\Desktop\\\\port\\\\Reformed-Portfolio\\\\src\\\\components\\\\sections\\\\contact.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginBottom: \"20px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"mensagem\",\n                                children: \"Mensagem:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\guhhh\\\\Desktop\\\\port\\\\Reformed-Portfolio\\\\src\\\\components\\\\sections\\\\contact.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                id: \"mensagem\",\n                                name: \"mensagem\",\n                                value: mensagem,\n                                onChange: (e)=>setMensagem(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\guhhh\\\\Desktop\\\\port\\\\Reformed-Portfolio\\\\src\\\\components\\\\sections\\\\contact.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\guhhh\\\\Desktop\\\\port\\\\Reformed-Portfolio\\\\src\\\\components\\\\sections\\\\contact.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Enviar\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\guhhh\\\\Desktop\\\\port\\\\Reformed-Portfolio\\\\src\\\\components\\\\sections\\\\contact.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\guhhh\\\\Desktop\\\\port\\\\Reformed-Portfolio\\\\src\\\\components\\\\sections\\\\contact.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\guhhh\\\\Desktop\\\\port\\\\Reformed-Portfolio\\\\src\\\\components\\\\sections\\\\contact.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Contact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9jb250YWN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBR0EsTUFBTUEsVUFBVSxJQUFNO0lBRXBCLHFCQUNFLDhEQUFDQztRQUFJQyxPQUFPO1lBQUVDLGlCQUFpQjtZQUFRQyxPQUFPO1lBQVFDLFNBQVM7UUFBTzs7MEJBQ3BFLDhEQUFDQztnQkFBR0osT0FBTztvQkFBRUssV0FBVztnQkFBUzswQkFBRzs7Ozs7OzBCQUNwQyw4REFBQ0M7Z0JBQUtDLFVBQVVDOztrQ0FDZCw4REFBQ1Q7d0JBQUlDLE9BQU87NEJBQUVTLGNBQWM7d0JBQU87OzBDQUNqQyw4REFBQ0M7Z0NBQU1DLFNBQVE7MENBQU87Ozs7OzswQ0FDdEIsOERBQUNDO2dDQUNDQyxNQUFLO2dDQUNMQyxJQUFHO2dDQUNIQyxNQUFLO2dDQUNMQyxPQUFPQztnQ0FDUEMsVUFBVSxDQUFDQyxJQUFNQyxRQUFRRCxFQUFFRSxNQUFNLENBQUNMLEtBQUs7Ozs7Ozs7Ozs7OztrQ0FHM0MsOERBQUNqQjt3QkFBSUMsT0FBTzs0QkFBRVMsY0FBYzt3QkFBTzs7MENBQ2pDLDhEQUFDQztnQ0FBTUMsU0FBUTswQ0FBUTs7Ozs7OzBDQUN2Qiw4REFBQ0M7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLElBQUc7Z0NBQ0hDLE1BQUs7Z0NBQ0xDLE9BQU9NO2dDQUNQSixVQUFVLENBQUNDLElBQU1JLFNBQVNKLEVBQUVFLE1BQU0sQ0FBQ0wsS0FBSzs7Ozs7Ozs7Ozs7O2tDQUc1Qyw4REFBQ2pCO3dCQUFJQyxPQUFPOzRCQUFFUyxjQUFjO3dCQUFPOzswQ0FDakMsOERBQUNDO2dDQUFNQyxTQUFROzBDQUFXOzs7Ozs7MENBQzFCLDhEQUFDYTtnQ0FDQ1YsSUFBRztnQ0FDSEMsTUFBSztnQ0FDTEMsT0FBT1M7Z0NBQ1BQLFVBQVUsQ0FBQ0MsSUFBTU8sWUFBWVAsRUFBRUUsTUFBTSxDQUFDTCxLQUFLOzs7Ozs7Ozs7Ozs7a0NBRy9DLDhEQUFDVzt3QkFBT2QsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlCO0tBdkNNZjtBQXlDTiwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9jb250YWN0LnRzeD9jMzBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFNNVFBDbGllbnQgfSBmcm9tICdzbXRwLWNsaWVudCc7XHJcblxyXG5jb25zdCBDb250YWN0ID0gKCkgPT4ge1xyXG4gICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwJywgY29sb3I6ICcjZmZmJywgcGFkZGluZzogJzUwcHgnIH19PlxyXG4gICAgICA8aDEgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5Db250YXRvPC9oMT5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2Vudmlhck1lbnNhZ2VtfT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzIwcHgnIH19PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJub21lXCI+Tm9tZTo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJub21lXCJcclxuICAgICAgICAgICAgbmFtZT1cIm5vbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17bm9tZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROb21lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcyMHB4JyB9fT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzIwcHgnIH19PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtZW5zYWdlbVwiPk1lbnNhZ2VtOjwvbGFiZWw+XHJcbiAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgaWQ9XCJtZW5zYWdlbVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJtZW5zYWdlbVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXttZW5zYWdlbX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNZW5zYWdlbShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5FbnZpYXI8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Il0sIm5hbWVzIjpbIkNvbnRhY3QiLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwicGFkZGluZyIsImgxIiwidGV4dEFsaWduIiwiZm9ybSIsIm9uU3VibWl0IiwiZW52aWFyTWVuc2FnZW0iLCJtYXJnaW5Cb3R0b20iLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJ2YWx1ZSIsIm5vbWUiLCJvbkNoYW5nZSIsImUiLCJzZXROb21lIiwidGFyZ2V0IiwiZW1haWwiLCJzZXRFbWFpbCIsInRleHRhcmVhIiwibWVuc2FnZW0iLCJzZXRNZW5zYWdlbSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/sections/contact.tsx\n"));

/***/ })

});