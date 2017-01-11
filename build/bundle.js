/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

var _big = __webpack_require__(3);

var _big2 = _interopRequireDefault(_big);

var _small = __webpack_require__(4);

var _small2 = _interopRequireDefault(_small);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var image = document.createElement('img');
image.src = _small2.default;

document.body.appendChild(image);

var bigImage = document.createElement('img');
bigImage.src = _big2.default;

document.body.appendChild(bigImage);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(a, b) {
  return a + b;
};

exports.default = sum;

/***/ },
/* 2 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "77e5f2f94a9d9c7079e223a36b080ae7.jpg";

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var total = (0, _sum2.default)(10, 5);
console.log(total);

/***/ }
/******/ ]);