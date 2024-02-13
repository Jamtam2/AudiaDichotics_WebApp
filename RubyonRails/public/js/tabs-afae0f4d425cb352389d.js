/******/ (function(modules***REMOVED*** { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {***REMOVED***;
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId***REMOVED*** {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]***REMOVED*** {
/******/ 			return installedModules[moduleId].exports;
/******/ 		***REMOVED***
/******/ 		// Create a new module (and put it into the cache***REMOVED***
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {***REMOVED***
/******/ 		***REMOVED***;
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__***REMOVED***;
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	***REMOVED***
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__***REMOVED***
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter***REMOVED*** {
/******/ 		if(!__webpack_require__.o(exports, name***REMOVED******REMOVED*** {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter ***REMOVED******REMOVED***;
/******/ 		***REMOVED***
/******/ 	***REMOVED***;
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports***REMOVED*** {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag***REMOVED*** {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' ***REMOVED******REMOVED***;
/******/ 		***REMOVED***
/******/ 		Object.defineProperty(exports, '__esModule', { value: true ***REMOVED******REMOVED***;
/******/ 	***REMOVED***;
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode***REMOVED*** {
/******/ 		if(mode & 1***REMOVED*** value = __webpack_require__(value***REMOVED***;
/******/ 		if(mode & 8***REMOVED*** return value;
/******/ 		if((mode & 4***REMOVED*** && typeof value === 'object' && value && value.__esModule***REMOVED*** return value;
/******/ 		var ns = Object.create(null***REMOVED***;
/******/ 		__webpack_require__.r(ns***REMOVED***;
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value ***REMOVED******REMOVED***;
/******/ 		if(mode & 2 && typeof value != 'string'***REMOVED*** for(var key in value***REMOVED*** __webpack_require__.d(ns, key, function(key***REMOVED*** { return value[key]; ***REMOVED***.bind(null, key***REMOVED******REMOVED***;
/******/ 		return ns;
/******/ 	***REMOVED***;
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module***REMOVED*** {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault(***REMOVED*** { return module['default']; ***REMOVED*** :
/******/ 			function getModuleExports(***REMOVED*** { return module; ***REMOVED***;
/******/ 		__webpack_require__.d(getter, 'a', getter***REMOVED***;
/******/ 		return getter;
/******/ 	***REMOVED***;
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property***REMOVED*** { return Object.prototype.hasOwnProperty.call(object, property***REMOVED***; ***REMOVED***;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/tabs.js"***REMOVED***;
/******/ ***REMOVED******REMOVED***
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/tabs.js":
/*!**************************************!*\
  !*** ./app/javascript/packs/tabs.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports***REMOVED*** {

document.addEventListener('DOMContentLoaded', function (***REMOVED*** {
  var tabs = document.querySelectorAll('.tab'***REMOVED***;
  var contents = document.querySelectorAll('.tab-content'***REMOVED***;
  tabs.forEach(function (tab***REMOVED*** {
    tab.addEventListener('click', function (***REMOVED*** {
      // Remove 'active' class from all tabs and contents
      tabs.forEach(function (t***REMOVED*** {
        return t.classList.remove('active'***REMOVED***;
      ***REMOVED******REMOVED***;
      contents.forEach(function (c***REMOVED*** {
        return c.classList.remove('active'***REMOVED***;
      ***REMOVED******REMOVED***;

      // Add 'active' class to the clicked tab and its corresponding content
      tab.classList.add('active'***REMOVED***;
      var contentId = tab.id.replace('-tab', '-content'***REMOVED***;
      document.getElementById(contentId***REMOVED***.classList.add('active'***REMOVED***;
    ***REMOVED******REMOVED***;
  ***REMOVED******REMOVED***;
***REMOVED******REMOVED***;

/***/ ***REMOVED******REMOVED***

/******/ ***REMOVED******REMOVED***;
//# sourceMappingURL=tabs-afae0f4d425cb352389d.js.map