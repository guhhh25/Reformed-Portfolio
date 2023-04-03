"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/sendgrid";
exports.ids = ["pages/api/sendgrid"];
exports.modules = {

/***/ "@sendgrid/mail":
/*!*********************************!*\
  !*** external "@sendgrid/mail" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sendgrid/mail");

/***/ }),

/***/ "(api)/./src/pages/api/sendgrid.js":
/*!***********************************!*\
  !*** ./src/pages/api/sendgrid.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sendgrid/mail */ \"@sendgrid/mail\");\n/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sendgrid_mail__WEBPACK_IMPORTED_MODULE_0__);\n\n_sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default().setApiKey(process.env.SENDGRID_API_KEY);\nasync function sendEmail(req, res) {\n    try {\n        // console.log(\"REQ.BODY\", req.body);\n        await _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default().send({\n            to: \"henrique.ramos8123@outlook.com\",\n            from: \"guhhh25@gmail.com\",\n            subject: `${req.body.subject}`,\n            html: `<div>You've got a mail</div>`\n        });\n    } catch (error) {\n        // console.log(error);\n        return res.status(error.statusCode || 500).json({\n            error: error.message\n        });\n    }\n    return res.status(200).json({\n        error: \"\"\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendEmail);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3NlbmRncmlkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzQztBQUV0Q0EsK0RBQWtCLENBQUNFLFFBQVFDLEdBQUcsQ0FBQ0MsZ0JBQWdCO0FBRS9DLGVBQWVDLFVBQVVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ2pDLElBQUk7UUFDRixxQ0FBcUM7UUFDckMsTUFBTVAsMERBQWEsQ0FBQztZQUNsQlMsSUFBSTtZQUNKQyxNQUFNO1lBQ05DLFNBQVMsQ0FBQyxFQUFFTCxJQUFJTSxJQUFJLENBQUNELE9BQU8sQ0FBQyxDQUFDO1lBQzlCRSxNQUFNLENBQUMsNEJBQTRCLENBQUM7UUFDdEM7SUFDRixFQUFFLE9BQU9DLE9BQU87UUFDZCxzQkFBc0I7UUFDdEIsT0FBT1AsSUFBSVEsTUFBTSxDQUFDRCxNQUFNRSxVQUFVLElBQUksS0FBS0MsSUFBSSxDQUFDO1lBQUVILE9BQU9BLE1BQU1JLE9BQU87UUFBQztJQUN6RTtJQUVBLE9BQU9YLElBQUlRLE1BQU0sQ0FBQyxLQUFLRSxJQUFJLENBQUM7UUFBRUgsT0FBTztJQUFHO0FBQzFDO0FBRUEsaUVBQWVULFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvcGFnZXMvYXBpL3NlbmRncmlkLmpzPzIwYTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNlbmRncmlkIGZyb20gXCJAc2VuZGdyaWQvbWFpbFwiO1xyXG5cclxuc2VuZGdyaWQuc2V0QXBpS2V5KHByb2Nlc3MuZW52LlNFTkRHUklEX0FQSV9LRVkpO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2VuZEVtYWlsKHJlcSwgcmVzKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiUkVRLkJPRFlcIiwgcmVxLmJvZHkpO1xyXG4gICAgYXdhaXQgc2VuZGdyaWQuc2VuZCh7XHJcbiAgICAgIHRvOiBcImhlbnJpcXVlLnJhbW9zODEyM0BvdXRsb29rLmNvbVwiLCAvLyBZb3VyIGVtYWlsIHdoZXJlIHlvdSdsbCByZWNlaXZlIGVtYWlsc1xyXG4gICAgICBmcm9tOiBcImd1aGhoMjVAZ21haWwuY29tXCIsIC8vIHlvdXIgd2Vic2l0ZSBlbWFpbCBhZGRyZXNzIGhlcmVcclxuICAgICAgc3ViamVjdDogYCR7cmVxLmJvZHkuc3ViamVjdH1gLFxyXG4gICAgICBodG1sOiBgPGRpdj5Zb3UndmUgZ290IGEgbWFpbDwvZGl2PmAsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8gY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoZXJyb3Iuc3RhdHVzQ29kZSB8fCA1MDApLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IGVycm9yOiBcIlwiIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZW5kRW1haWw7Il0sIm5hbWVzIjpbInNlbmRncmlkIiwic2V0QXBpS2V5IiwicHJvY2VzcyIsImVudiIsIlNFTkRHUklEX0FQSV9LRVkiLCJzZW5kRW1haWwiLCJyZXEiLCJyZXMiLCJzZW5kIiwidG8iLCJmcm9tIiwic3ViamVjdCIsImJvZHkiLCJodG1sIiwiZXJyb3IiLCJzdGF0dXMiLCJzdGF0dXNDb2RlIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/sendgrid.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/sendgrid.js"));
module.exports = __webpack_exports__;

})();