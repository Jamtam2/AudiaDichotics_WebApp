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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js"***REMOVED***;
/******/ ***REMOVED******REMOVED***
/************************************************************************/
/******/ ({

/***/ "./app/javascript/channels sync recursive _channel\\.js$":
/*!****************************************************!*\
  !*** ./app/javascript/channels sync _channel\.js$ ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports***REMOVED*** {

function webpackEmptyContext(req***REMOVED*** {
	var e = new Error("Cannot find module '" + req + "'"***REMOVED***;
	e.code = 'MODULE_NOT_FOUND';
	throw e;
***REMOVED***
webpackEmptyContext.keys = function(***REMOVED*** { return []; ***REMOVED***;
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./app/javascript/channels sync recursive _channel\\.js$";

/***/ ***REMOVED******REMOVED***,

/***/ "./app/javascript/channels/index.js":
/*!******************************************!*\
  !*** ./app/javascript/channels/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__***REMOVED*** {

// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

var channels = __webpack_require__("./app/javascript/channels sync recursive _channel\\.js$"***REMOVED***;
channels.keys(***REMOVED***.forEach(channels***REMOVED***;

/***/ ***REMOVED******REMOVED***,

/***/ "./app/javascript/controllers sync recursive \\.js$":
/*!***********************************************!*\
  !*** ./app/javascript/controllers sync \.js$ ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__***REMOVED*** {

var map = {
	"./hello_controller.js": "./app/javascript/controllers/hello_controller.js",
	"./index.js": "./app/javascript/controllers/index.js"
***REMOVED***;


function webpackContext(req***REMOVED*** {
	var id = webpackContextResolve(req***REMOVED***;
	return __webpack_require__(id***REMOVED***;
***REMOVED***
function webpackContextResolve(req***REMOVED*** {
	if(!__webpack_require__.o(map, req***REMOVED******REMOVED*** {
		var e = new Error("Cannot find module '" + req + "'"***REMOVED***;
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	***REMOVED***
	return map[req];
***REMOVED***
webpackContext.keys = function webpackContextKeys(***REMOVED*** {
	return Object.keys(map***REMOVED***;
***REMOVED***;
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./app/javascript/controllers sync recursive \\.js$";

/***/ ***REMOVED******REMOVED***,

/***/ "./app/javascript/controllers/hello_controller.js":
/*!********************************************************!*\
  !*** ./app/javascript/controllers/hello_controller.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__***REMOVED*** {

"use strict";
__webpack_require__.r(__webpack_exports__***REMOVED***;
/* harmony export (binding***REMOVED*** */ __webpack_require__.d(__webpack_exports__, "default", function(***REMOVED*** { return _default; ***REMOVED******REMOVED***;
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/dist/stimulus.js"***REMOVED***;
function _classCallCheck(instance, Constructor***REMOVED*** { if (!(instance instanceof Constructor***REMOVED******REMOVED*** { throw new TypeError("Cannot call a class as a function"***REMOVED***; ***REMOVED*** ***REMOVED***
function _defineProperties(target, props***REMOVED*** { for (var i = 0; i < props.length; i++***REMOVED*** { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor***REMOVED*** descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key***REMOVED***, descriptor***REMOVED***; ***REMOVED*** ***REMOVED***
function _createClass(Constructor, protoProps, staticProps***REMOVED*** { if (protoProps***REMOVED*** _defineProperties(Constructor.prototype, protoProps***REMOVED***; if (staticProps***REMOVED*** _defineProperties(Constructor, staticProps***REMOVED***; Object.defineProperty(Constructor, "prototype", { writable: false ***REMOVED******REMOVED***; return Constructor; ***REMOVED***
function _toPropertyKey(arg***REMOVED*** { var key = _toPrimitive(arg, "string"***REMOVED***; return typeof key === "symbol" ? key : String(key***REMOVED***; ***REMOVED***
function _toPrimitive(input, hint***REMOVED*** { if (typeof input !== "object" || input === null***REMOVED*** return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined***REMOVED*** { var res = prim.call(input, hint || "default"***REMOVED***; if (typeof res !== "object"***REMOVED*** return res; throw new TypeError("@@toPrimitive must return a primitive value."***REMOVED***; ***REMOVED*** return (hint === "string" ? String : Number***REMOVED***(input***REMOVED***; ***REMOVED***
function _inherits(subClass, superClass***REMOVED*** { if (typeof superClass !== "function" && superClass !== null***REMOVED*** { throw new TypeError("Super expression must either be null or a function"***REMOVED***; ***REMOVED*** subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true ***REMOVED*** ***REMOVED******REMOVED***; Object.defineProperty(subClass, "prototype", { writable: false ***REMOVED******REMOVED***; if (superClass***REMOVED*** _setPrototypeOf(subClass, superClass***REMOVED***; ***REMOVED***
function _setPrototypeOf(o, p***REMOVED*** { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind(***REMOVED*** : function _setPrototypeOf(o, p***REMOVED*** { o.__proto__ = p; return o; ***REMOVED***; return _setPrototypeOf(o, p***REMOVED***; ***REMOVED***
function _createSuper(Derived***REMOVED*** { var hasNativeReflectConstruct = _isNativeReflectConstruct(***REMOVED***; return function _createSuperInternal(***REMOVED*** { var Super = _getPrototypeOf(Derived***REMOVED***, result; if (hasNativeReflectConstruct***REMOVED*** { var NewTarget = _getPrototypeOf(this***REMOVED***.constructor; result = Reflect.construct(Super, arguments, NewTarget***REMOVED***; ***REMOVED*** else { result = Super.apply(this, arguments***REMOVED***; ***REMOVED*** return _possibleConstructorReturn(this, result***REMOVED***; ***REMOVED***; ***REMOVED***
function _possibleConstructorReturn(self, call***REMOVED*** { if (call && (typeof call === "object" || typeof call === "function"***REMOVED******REMOVED*** { return call; ***REMOVED*** else if (call !== void 0***REMOVED*** { throw new TypeError("Derived constructors may only return object or undefined"***REMOVED***; ***REMOVED*** return _assertThisInitialized(self***REMOVED***; ***REMOVED***
function _assertThisInitialized(self***REMOVED*** { if (self === void 0***REMOVED*** { throw new ReferenceError("this hasn't been initialised - super(***REMOVED*** hasn't been called"***REMOVED***; ***REMOVED*** return self; ***REMOVED***
function _isNativeReflectConstruct(***REMOVED*** { if (typeof Reflect === "undefined" || !Reflect.construct***REMOVED*** return false; if (Reflect.construct.sham***REMOVED*** return false; if (typeof Proxy === "function"***REMOVED*** return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function (***REMOVED*** {***REMOVED******REMOVED******REMOVED***; return true; ***REMOVED*** catch (e***REMOVED*** { return false; ***REMOVED*** ***REMOVED***
function _getPrototypeOf(o***REMOVED*** { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind(***REMOVED*** : function _getPrototypeOf(o***REMOVED*** { return o.__proto__ || Object.getPrototypeOf(o***REMOVED***; ***REMOVED***; return _getPrototypeOf(o***REMOVED***; ***REMOVED***

var _default = /*#__PURE__*/function (_Controller***REMOVED*** {
  _inherits(_default, _Controller***REMOVED***;
  var _super = _createSuper(_default***REMOVED***;
  function _default(***REMOVED*** {
    _classCallCheck(this, _default***REMOVED***;
    return _super.apply(this, arguments***REMOVED***;
  ***REMOVED***
  _createClass(_default, [{
    key: "connect",
    value: function connect(***REMOVED*** {
      console.log("hello from StimulusJS"***REMOVED***;
    ***REMOVED***
  ***REMOVED***, {
    key: "greet",
    value: function greet(***REMOVED*** {
      console.log("click"***REMOVED***;
    ***REMOVED***
  ***REMOVED***]***REMOVED***;
  return _default;
***REMOVED***(stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"]***REMOVED***;


/***/ ***REMOVED******REMOVED***,

/***/ "./app/javascript/controllers/index.js":
/*!*********************************************!*\
  !*** ./app/javascript/controllers/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__***REMOVED*** {

"use strict";
__webpack_require__.r(__webpack_exports__***REMOVED***;
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/dist/stimulus.js"***REMOVED***;
/* harmony import */ var stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stimulus/webpack-helpers */ "./node_modules/stimulus/webpack-helpers.js"***REMOVED***;


var application = stimulus__WEBPACK_IMPORTED_MODULE_0__["Application"].start(***REMOVED***;
var context = __webpack_require__("./app/javascript/controllers sync recursive \\.js$"***REMOVED***;
application.load(Object(stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_1__["definitionsFromContext"]***REMOVED***(context***REMOVED******REMOVED***;

/***/ ***REMOVED******REMOVED***,

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__***REMOVED*** {

"use strict";
__webpack_require__.r(__webpack_exports__***REMOVED***;
/* WEBPACK VAR INJECTION */(function($***REMOVED*** {/* harmony import */ var controllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! controllers */ "./app/javascript/controllers/index.js"***REMOVED***;
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rails/ujs */ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js"***REMOVED***;
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rails_ujs__WEBPACK_IMPORTED_MODULE_1__***REMOVED***;
/* harmony import */ var turbolinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! turbolinks */ "./node_modules/turbolinks/dist/turbolinks.js"***REMOVED***;
/* harmony import */ var turbolinks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(turbolinks__WEBPACK_IMPORTED_MODULE_2__***REMOVED***;
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rails/activestorage */ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js"***REMOVED***;
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_rails_activestorage__WEBPACK_IMPORTED_MODULE_3__***REMOVED***;
/* harmony import */ var channels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! channels */ "./app/javascript/channels/index.js"***REMOVED***;
/* harmony import */ var channels__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(channels__WEBPACK_IMPORTED_MODULE_4__***REMOVED***;
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js"***REMOVED***;
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_5__***REMOVED***;
/* harmony import */ var autosize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! autosize */ "./node_modules/autosize/dist/autosize.js"***REMOVED***;
/* harmony import */ var autosize__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(autosize__WEBPACK_IMPORTED_MODULE_6__***REMOVED***;
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.





_rails_ujs__WEBPACK_IMPORTED_MODULE_1___default.a.start(***REMOVED***;
turbolinks__WEBPACK_IMPORTED_MODULE_2___default.a.start(***REMOVED***;
_rails_activestorage__WEBPACK_IMPORTED_MODULE_3__["start"](***REMOVED***;


document.addEventListener("turbolinks:load", function (***REMOVED*** {
  $('[data-toggle="tooltip"]'***REMOVED***.tooltip(***REMOVED***;
  $('[data-toggle="popover"]'***REMOVED***.popover(***REMOVED***;
  autosize__WEBPACK_IMPORTED_MODULE_6___default(***REMOVED***(document.querySelectorAll('textarea'***REMOVED******REMOVED***;
***REMOVED******REMOVED***;
function hideInput(***REMOVED*** {
  var colDiv = document.getElementById("normalCol"***REMOVED***;
  colDiv.style.display === "block" ? colDiv.style.display = 'none' : colDiv.style.display = 'block';
***REMOVED***
document.addEventListener("turbolinks:load", function (***REMOVED*** {
  // reset the active tab when the page is loaded
  $(".tab-content.active"***REMOVED***.removeClass("active"***REMOVED***;
  $(".tab.active"***REMOVED***.removeClass("active"***REMOVED***;

  // set the active tab based on the URL anchor
  var tabAnchor = window.location.hash.substring(1***REMOVED***;
  $("#" + tabAnchor + "-content"***REMOVED***.addClass("active"***REMOVED***;
  $("#" + tabAnchor + "-tab"***REMOVED***.addClass("active"***REMOVED***;

  // update the URL anchor when a tab is clicked
  $(".tab"***REMOVED***.on("click", function (***REMOVED*** {
    var tabAnchor = $(this***REMOVED***.attr("id"***REMOVED***;
    window.location.hash = tabAnchor;
  ***REMOVED******REMOVED***;
***REMOVED******REMOVED***;
/* WEBPACK VAR INJECTION */***REMOVED***.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"***REMOVED******REMOVED******REMOVED***

/***/ ***REMOVED******REMOVED***,

/***/ "./node_modules/@hotwired/stimulus-webpack-helpers/dist/stimulus-webpack-helpers.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@hotwired/stimulus-webpack-helpers/dist/stimulus-webpack-helpers.js ***!
  \******************************************************************************************/
/*! exports provided: definitionForModuleAndIdentifier, definitionForModuleWithContextAndKey, definitionsFromContext, identifierForContextKey */
/***/ (function(module, __webpack_exports__, __webpack_require__***REMOVED*** {

"use strict";
__webpack_require__.r(__webpack_exports__***REMOVED***;
/* harmony export (binding***REMOVED*** */ __webpack_require__.d(__webpack_exports__, "definitionForModuleAndIdentifier", function(***REMOVED*** { return definitionForModuleAndIdentifier; ***REMOVED******REMOVED***;
/* harmony export (binding***REMOVED*** */ __webpack_require__.d(__webpack_exports__, "definitionForModuleWithContextAndKey", function(***REMOVED*** { return definitionForModuleWithContextAndKey; ***REMOVED******REMOVED***;
/* harmony export (binding***REMOVED*** */ __webpack_require__.d(__webpack_exports__, "definitionsFromContext", function(***REMOVED*** { return definitionsFromContext; ***REMOVED******REMOVED***;
/* harmony export (binding***REMOVED*** */ __webpack_require__.d(__webpack_exports__, "identifierForContextKey", function(***REMOVED*** { return identifierForContextKey; ***REMOVED******REMOVED***;
/*
Stimulus Webpack Helpers 1.0.0
Copyright © 2021 Basecamp, LLC
 */
function definitionsFromContext(context***REMOVED*** {
  return context.keys(***REMOVED***.map(key => definitionForModuleWithContextAndKey(context, key***REMOVED******REMOVED***.filter(value => value***REMOVED***;
***REMOVED***
function definitionForModuleWithContextAndKey(context, key***REMOVED*** {
  const identifier = identifierForContextKey(key***REMOVED***;
  if (identifier***REMOVED*** {
    return definitionForModuleAndIdentifier(context(key***REMOVED***, identifier***REMOVED***;
  ***REMOVED***
***REMOVED***
function definitionForModuleAndIdentifier(module, identifier***REMOVED*** {
  const controllerConstructor = module.default;
  if (typeof controllerConstructor == "function"***REMOVED*** {
    return {
      identifier,
      controllerConstructor
    ***REMOVED***;
  ***REMOVED***
***REMOVED***
function identifierForContextKey(key***REMOVED*** {
  const logicalName = (key.match(/^(?:\.\/***REMOVED***?(.+***REMOVED***(?:[_-]controller\..+?***REMOVED***$/***REMOVED*** || []***REMOVED***[1];
  if (logicalName***REMOVED*** {
    return logicalName.replace(/_/g, "-"***REMOVED***.replace(/\//g, "--"***REMOVED***;
  ***REMOVED***
***REMOVED***


/***/ ***REMOVED******REMOVED***,

/***/ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__***REMOVED*** {

(function (global, factory***REMOVED*** {
   true ? factory(exports***REMOVED*** : undefined;
***REMOVED******REMOVED***(this, function (exports***REMOVED*** {
  "use strict";

  function createCommonjsModule(fn, module***REMOVED*** {
    return module = {
      exports: {***REMOVED***
    ***REMOVED***, fn(module, module.exports***REMOVED***, module.exports;
  ***REMOVED***
  var sparkMd5 = createCommonjsModule(function (module, exports***REMOVED*** {
    (function (factory***REMOVED*** {
      {
        module.exports = factory(***REMOVED***;
      ***REMOVED***
    ***REMOVED******REMOVED***(function (undefined***REMOVED*** {
      var hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
      function md5cycle(x, k***REMOVED*** {
        var a = x[0],
          b = x[1],
          c = x[2],
          d = x[3];
        a += (b & c | ~b & d***REMOVED*** + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25***REMOVED*** + b | 0;
        d += (a & b | ~a & c***REMOVED*** + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20***REMOVED*** + a | 0;
        c += (d & a | ~d & b***REMOVED*** + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15***REMOVED*** + d | 0;
        b += (c & d | ~c & a***REMOVED*** + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10***REMOVED*** + c | 0;
        a += (b & c | ~b & d***REMOVED*** + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25***REMOVED*** + b | 0;
        d += (a & b | ~a & c***REMOVED*** + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20***REMOVED*** + a | 0;
        c += (d & a | ~d & b***REMOVED*** + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15***REMOVED*** + d | 0;
        b += (c & d | ~c & a***REMOVED*** + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10***REMOVED*** + c | 0;
        a += (b & c | ~b & d***REMOVED*** + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25***REMOVED*** + b | 0;
        d += (a & b | ~a & c***REMOVED*** + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20***REMOVED*** + a | 0;
        c += (d & a | ~d & b***REMOVED*** + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15***REMOVED*** + d | 0;
        b += (c & d | ~c & a***REMOVED*** + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10***REMOVED*** + c | 0;
        a += (b & c | ~b & d***REMOVED*** + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25***REMOVED*** + b | 0;
        d += (a & b | ~a & c***REMOVED*** + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20***REMOVED*** + a | 0;
        c += (d & a | ~d & b***REMOVED*** + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15***REMOVED*** + d | 0;
        b += (c & d | ~c & a***REMOVED*** + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10***REMOVED*** + c | 0;
        a += (b & d | c & ~d***REMOVED*** + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27***REMOVED*** + b | 0;
        d += (a & c | b & ~c***REMOVED*** + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23***REMOVED*** + a | 0;
        c += (d & b | a & ~b***REMOVED*** + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18***REMOVED*** + d | 0;
        b += (c & a | d & ~a***REMOVED*** + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12***REMOVED*** + c | 0;
        a += (b & d | c & ~d***REMOVED*** + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27***REMOVED*** + b | 0;
        d += (a & c | b & ~c***REMOVED*** + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23***REMOVED*** + a | 0;
        c += (d & b | a & ~b***REMOVED*** + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18***REMOVED*** + d | 0;
        b += (c & a | d & ~a***REMOVED*** + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12***REMOVED*** + c | 0;
        a += (b & d | c & ~d***REMOVED*** + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27***REMOVED*** + b | 0;
        d += (a & c | b & ~c***REMOVED*** + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23***REMOVED*** + a | 0;
        c += (d & b | a & ~b***REMOVED*** + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18***REMOVED*** + d | 0;
        b += (c & a | d & ~a***REMOVED*** + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12***REMOVED*** + c | 0;
        a += (b & d | c & ~d***REMOVED*** + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27***REMOVED*** + b | 0;
        d += (a & c | b & ~c***REMOVED*** + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23***REMOVED*** + a | 0;
        c += (d & b | a & ~b***REMOVED*** + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18***REMOVED*** + d | 0;
        b += (c & a | d & ~a***REMOVED*** + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12***REMOVED*** + c | 0;
        a += (b ^ c ^ d***REMOVED*** + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28***REMOVED*** + b | 0;
        d += (a ^ b ^ c***REMOVED*** + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21***REMOVED*** + a | 0;
        c += (d ^ a ^ b***REMOVED*** + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16***REMOVED*** + d | 0;
        b += (c ^ d ^ a***REMOVED*** + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9***REMOVED*** + c | 0;
        a += (b ^ c ^ d***REMOVED*** + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28***REMOVED*** + b | 0;
        d += (a ^ b ^ c***REMOVED*** + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21***REMOVED*** + a | 0;
        c += (d ^ a ^ b***REMOVED*** + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16***REMOVED*** + d | 0;
        b += (c ^ d ^ a***REMOVED*** + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9***REMOVED*** + c | 0;
        a += (b ^ c ^ d***REMOVED*** + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28***REMOVED*** + b | 0;
        d += (a ^ b ^ c***REMOVED*** + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21***REMOVED*** + a | 0;
        c += (d ^ a ^ b***REMOVED*** + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16***REMOVED*** + d | 0;
        b += (c ^ d ^ a***REMOVED*** + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9***REMOVED*** + c | 0;
        a += (b ^ c ^ d***REMOVED*** + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28***REMOVED*** + b | 0;
        d += (a ^ b ^ c***REMOVED*** + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21***REMOVED*** + a | 0;
        c += (d ^ a ^ b***REMOVED*** + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16***REMOVED*** + d | 0;
        b += (c ^ d ^ a***REMOVED*** + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9***REMOVED*** + c | 0;
        a += (c ^ (b | ~d***REMOVED******REMOVED*** + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26***REMOVED*** + b | 0;
        d += (b ^ (a | ~c***REMOVED******REMOVED*** + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22***REMOVED*** + a | 0;
        c += (a ^ (d | ~b***REMOVED******REMOVED*** + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17***REMOVED*** + d | 0;
        b += (d ^ (c | ~a***REMOVED******REMOVED*** + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11***REMOVED*** + c | 0;
        a += (c ^ (b | ~d***REMOVED******REMOVED*** + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26***REMOVED*** + b | 0;
        d += (b ^ (a | ~c***REMOVED******REMOVED*** + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22***REMOVED*** + a | 0;
        c += (a ^ (d | ~b***REMOVED******REMOVED*** + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17***REMOVED*** + d | 0;
        b += (d ^ (c | ~a***REMOVED******REMOVED*** + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11***REMOVED*** + c | 0;
        a += (c ^ (b | ~d***REMOVED******REMOVED*** + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26***REMOVED*** + b | 0;
        d += (b ^ (a | ~c***REMOVED******REMOVED*** + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22***REMOVED*** + a | 0;
        c += (a ^ (d | ~b***REMOVED******REMOVED*** + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17***REMOVED*** + d | 0;
        b += (d ^ (c | ~a***REMOVED******REMOVED*** + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11***REMOVED*** + c | 0;
        a += (c ^ (b | ~d***REMOVED******REMOVED*** + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26***REMOVED*** + b | 0;
        d += (b ^ (a | ~c***REMOVED******REMOVED*** + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22***REMOVED*** + a | 0;
        c += (a ^ (d | ~b***REMOVED******REMOVED*** + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17***REMOVED*** + d | 0;
        b += (d ^ (c | ~a***REMOVED******REMOVED*** + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11***REMOVED*** + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
      ***REMOVED***
      function md5blk(s***REMOVED*** {
        var md5blks = [],
          i;
        for (i = 0; i < 64; i += 4***REMOVED*** {
          md5blks[i >> 2] = s.charCodeAt(i***REMOVED*** + (s.charCodeAt(i + 1***REMOVED*** << 8***REMOVED*** + (s.charCodeAt(i + 2***REMOVED*** << 16***REMOVED*** + (s.charCodeAt(i + 3***REMOVED*** << 24***REMOVED***;
        ***REMOVED***
        return md5blks;
      ***REMOVED***
      function md5blk_array(a***REMOVED*** {
        var md5blks = [],
          i;
        for (i = 0; i < 64; i += 4***REMOVED*** {
          md5blks[i >> 2] = a[i] + (a[i + 1] << 8***REMOVED*** + (a[i + 2] << 16***REMOVED*** + (a[i + 3] << 24***REMOVED***;
        ***REMOVED***
        return md5blks;
      ***REMOVED***
      function md51(s***REMOVED*** {
        var n = s.length,
          state = [1732584193, -271733879, -1732584194, 271733878],
          i,
          length,
          tail,
          tmp,
          lo,
          hi;
        for (i = 64; i <= n; i += 64***REMOVED*** {
          md5cycle(state, md5blk(s.substring(i - 64, i***REMOVED******REMOVED******REMOVED***;
        ***REMOVED***
        s = s.substring(i - 64***REMOVED***;
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1***REMOVED*** {
          tail[i >> 2] |= s.charCodeAt(i***REMOVED*** << (i % 4 << 3***REMOVED***;
        ***REMOVED***
        tail[i >> 2] |= 128 << (i % 4 << 3***REMOVED***;
        if (i > 55***REMOVED*** {
          md5cycle(state, tail***REMOVED***;
          for (i = 0; i < 16; i += 1***REMOVED*** {
            tail[i] = 0;
          ***REMOVED***
        ***REMOVED***
        tmp = n * 8;
        tmp = tmp.toString(16***REMOVED***.match(/(.*?***REMOVED***(.{0,8***REMOVED******REMOVED***$/***REMOVED***;
        lo = parseInt(tmp[2], 16***REMOVED***;
        hi = parseInt(tmp[1], 16***REMOVED*** || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail***REMOVED***;
        return state;
      ***REMOVED***
      function md51_array(a***REMOVED*** {
        var n = a.length,
          state = [1732584193, -271733879, -1732584194, 271733878],
          i,
          length,
          tail,
          tmp,
          lo,
          hi;
        for (i = 64; i <= n; i += 64***REMOVED*** {
          md5cycle(state, md5blk_array(a.subarray(i - 64, i***REMOVED******REMOVED******REMOVED***;
        ***REMOVED***
        a = i - 64 < n ? a.subarray(i - 64***REMOVED*** : new Uint8Array(0***REMOVED***;
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1***REMOVED*** {
          tail[i >> 2] |= a[i] << (i % 4 << 3***REMOVED***;
        ***REMOVED***
        tail[i >> 2] |= 128 << (i % 4 << 3***REMOVED***;
        if (i > 55***REMOVED*** {
          md5cycle(state, tail***REMOVED***;
          for (i = 0; i < 16; i += 1***REMOVED*** {
            tail[i] = 0;
          ***REMOVED***
        ***REMOVED***
        tmp = n * 8;
        tmp = tmp.toString(16***REMOVED***.match(/(.*?***REMOVED***(.{0,8***REMOVED******REMOVED***$/***REMOVED***;
        lo = parseInt(tmp[2], 16***REMOVED***;
        hi = parseInt(tmp[1], 16***REMOVED*** || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail***REMOVED***;
        return state;
      ***REMOVED***
      function rhex(n***REMOVED*** {
        var s = "",
          j;
        for (j = 0; j < 4; j += 1***REMOVED*** {
          s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
        ***REMOVED***
        return s;
      ***REMOVED***
      function hex(x***REMOVED*** {
        var i;
        for (i = 0; i < x.length; i += 1***REMOVED*** {
          x[i] = rhex(x[i]***REMOVED***;
        ***REMOVED***
        return x.join(""***REMOVED***;
      ***REMOVED***
      if (hex(md51("hello"***REMOVED******REMOVED*** !== "5d41402abc4b2a76b9719d911017c592"***REMOVED*** ;
      if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice***REMOVED*** {
        (function (***REMOVED*** {
          function clamp(val, length***REMOVED*** {
            val = val | 0 || 0;
            if (val < 0***REMOVED*** {
              return Math.max(val + length, 0***REMOVED***;
            ***REMOVED***
            return Math.min(val, length***REMOVED***;
          ***REMOVED***
          ArrayBuffer.prototype.slice = function (from, to***REMOVED*** {
            var length = this.byteLength,
              begin = clamp(from, length***REMOVED***,
              end = length,
              num,
              target,
              targetArray,
              sourceArray;
            if (to !== undefined***REMOVED*** {
              end = clamp(to, length***REMOVED***;
            ***REMOVED***
            if (begin > end***REMOVED*** {
              return new ArrayBuffer(0***REMOVED***;
            ***REMOVED***
            num = end - begin;
            target = new ArrayBuffer(num***REMOVED***;
            targetArray = new Uint8Array(target***REMOVED***;
            sourceArray = new Uint8Array(this, begin, num***REMOVED***;
            targetArray.set(sourceArray***REMOVED***;
            return target;
          ***REMOVED***;
        ***REMOVED******REMOVED***(***REMOVED***;
      ***REMOVED***
      function toUtf8(str***REMOVED*** {
        if (/[\u0080-\uFFFF]/.test(str***REMOVED******REMOVED*** {
          str = unescape(encodeURIComponent(str***REMOVED******REMOVED***;
        ***REMOVED***
        return str;
      ***REMOVED***
      function utf8Str2ArrayBuffer(str, returnUInt8Array***REMOVED*** {
        var length = str.length,
          buff = new ArrayBuffer(length***REMOVED***,
          arr = new Uint8Array(buff***REMOVED***,
          i;
        for (i = 0; i < length; i += 1***REMOVED*** {
          arr[i] = str.charCodeAt(i***REMOVED***;
        ***REMOVED***
        return returnUInt8Array ? arr : buff;
      ***REMOVED***
      function arrayBuffer2Utf8Str(buff***REMOVED*** {
        return String.fromCharCode.apply(null, new Uint8Array(buff***REMOVED******REMOVED***;
      ***REMOVED***
      function concatenateArrayBuffers(first, second, returnUInt8Array***REMOVED*** {
        var result = new Uint8Array(first.byteLength + second.byteLength***REMOVED***;
        result.set(new Uint8Array(first***REMOVED******REMOVED***;
        result.set(new Uint8Array(second***REMOVED***, first.byteLength***REMOVED***;
        return returnUInt8Array ? result : result.buffer;
      ***REMOVED***
      function hexToBinaryString(hex***REMOVED*** {
        var bytes = [],
          length = hex.length,
          x;
        for (x = 0; x < length - 1; x += 2***REMOVED*** {
          bytes.push(parseInt(hex.substr(x, 2***REMOVED***, 16***REMOVED******REMOVED***;
        ***REMOVED***
        return String.fromCharCode.apply(String, bytes***REMOVED***;
      ***REMOVED***
      function SparkMD5(***REMOVED*** {
        this.reset(***REMOVED***;
      ***REMOVED***
      SparkMD5.prototype.append = function (str***REMOVED*** {
        this.appendBinary(toUtf8(str***REMOVED******REMOVED***;
        return this;
      ***REMOVED***;
      SparkMD5.prototype.appendBinary = function (contents***REMOVED*** {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length,
          i;
        for (i = 64; i <= length; i += 64***REMOVED*** {
          md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i***REMOVED******REMOVED******REMOVED***;
        ***REMOVED***
        this._buff = this._buff.substring(i - 64***REMOVED***;
        return this;
      ***REMOVED***;
      SparkMD5.prototype.end = function (raw***REMOVED*** {
        var buff = this._buff,
          length = buff.length,
          i,
          tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ret;
        for (i = 0; i < length; i += 1***REMOVED*** {
          tail[i >> 2] |= buff.charCodeAt(i***REMOVED*** << (i % 4 << 3***REMOVED***;
        ***REMOVED***
        this._finish(tail, length***REMOVED***;
        ret = hex(this._hash***REMOVED***;
        if (raw***REMOVED*** {
          ret = hexToBinaryString(ret***REMOVED***;
        ***REMOVED***
        this.reset(***REMOVED***;
        return ret;
      ***REMOVED***;
      SparkMD5.prototype.reset = function (***REMOVED*** {
        this._buff = "";
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      ***REMOVED***;
      SparkMD5.prototype.getState = function (***REMOVED*** {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash
        ***REMOVED***;
      ***REMOVED***;
      SparkMD5.prototype.setState = function (state***REMOVED*** {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      ***REMOVED***;
      SparkMD5.prototype.destroy = function (***REMOVED*** {
        delete this._hash;
        delete this._buff;
        delete this._length;
      ***REMOVED***;
      SparkMD5.prototype._finish = function (tail, length***REMOVED*** {
        var i = length,
          tmp,
          lo,
          hi;
        tail[i >> 2] |= 128 << (i % 4 << 3***REMOVED***;
        if (i > 55***REMOVED*** {
          md5cycle(this._hash, tail***REMOVED***;
          for (i = 0; i < 16; i += 1***REMOVED*** {
            tail[i] = 0;
          ***REMOVED***
        ***REMOVED***
        tmp = this._length * 8;
        tmp = tmp.toString(16***REMOVED***.match(/(.*?***REMOVED***(.{0,8***REMOVED******REMOVED***$/***REMOVED***;
        lo = parseInt(tmp[2], 16***REMOVED***;
        hi = parseInt(tmp[1], 16***REMOVED*** || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail***REMOVED***;
      ***REMOVED***;
      SparkMD5.hash = function (str, raw***REMOVED*** {
        return SparkMD5.hashBinary(toUtf8(str***REMOVED***, raw***REMOVED***;
      ***REMOVED***;
      SparkMD5.hashBinary = function (content, raw***REMOVED*** {
        var hash = md51(content***REMOVED***,
          ret = hex(hash***REMOVED***;
        return raw ? hexToBinaryString(ret***REMOVED*** : ret;
      ***REMOVED***;
      SparkMD5.ArrayBuffer = function (***REMOVED*** {
        this.reset(***REMOVED***;
      ***REMOVED***;
      SparkMD5.ArrayBuffer.prototype.append = function (arr***REMOVED*** {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true***REMOVED***,
          length = buff.length,
          i;
        this._length += arr.byteLength;
        for (i = 64; i <= length; i += 64***REMOVED*** {
          md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i***REMOVED******REMOVED******REMOVED***;
        ***REMOVED***
        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64***REMOVED******REMOVED*** : new Uint8Array(0***REMOVED***;
        return this;
      ***REMOVED***;
      SparkMD5.ArrayBuffer.prototype.end = function (raw***REMOVED*** {
        var buff = this._buff,
          length = buff.length,
          tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          i,
          ret;
        for (i = 0; i < length; i += 1***REMOVED*** {
          tail[i >> 2] |= buff[i] << (i % 4 << 3***REMOVED***;
        ***REMOVED***
        this._finish(tail, length***REMOVED***;
        ret = hex(this._hash***REMOVED***;
        if (raw***REMOVED*** {
          ret = hexToBinaryString(ret***REMOVED***;
        ***REMOVED***
        this.reset(***REMOVED***;
        return ret;
      ***REMOVED***;
      SparkMD5.ArrayBuffer.prototype.reset = function (***REMOVED*** {
        this._buff = new Uint8Array(0***REMOVED***;
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      ***REMOVED***;
      SparkMD5.ArrayBuffer.prototype.getState = function (***REMOVED*** {
        var state = SparkMD5.prototype.getState.call(this***REMOVED***;
        state.buff = arrayBuffer2Utf8Str(state.buff***REMOVED***;
        return state;
      ***REMOVED***;
      SparkMD5.ArrayBuffer.prototype.setState = function (state***REMOVED*** {
        state.buff = utf8Str2ArrayBuffer(state.buff, true***REMOVED***;
        return SparkMD5.prototype.setState.call(this, state***REMOVED***;
      ***REMOVED***;
      SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
      SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;
      SparkMD5.ArrayBuffer.hash = function (arr, raw***REMOVED*** {
        var hash = md51_array(new Uint8Array(arr***REMOVED******REMOVED***,
          ret = hex(hash***REMOVED***;
        return raw ? hexToBinaryString(ret***REMOVED*** : ret;
      ***REMOVED***;
      return SparkMD5;
    ***REMOVED******REMOVED***;
  ***REMOVED******REMOVED***;
  var classCallCheck = function (instance, Constructor***REMOVED*** {
    if (!(instance instanceof Constructor***REMOVED******REMOVED*** {
      throw new TypeError("Cannot call a class as a function"***REMOVED***;
    ***REMOVED***
  ***REMOVED***;
  var createClass = function (***REMOVED*** {
    function defineProperties(target, props***REMOVED*** {
      for (var i = 0; i < props.length; i++***REMOVED*** {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor***REMOVED*** descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor***REMOVED***;
      ***REMOVED***
    ***REMOVED***
    return function (Constructor, protoProps, staticProps***REMOVED*** {
      if (protoProps***REMOVED*** defineProperties(Constructor.prototype, protoProps***REMOVED***;
      if (staticProps***REMOVED*** defineProperties(Constructor, staticProps***REMOVED***;
      return Constructor;
    ***REMOVED***;
  ***REMOVED***(***REMOVED***;
  var fileSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;
  var FileChecksum = function (***REMOVED*** {
    createClass(FileChecksum, null, [{
      key: "create",
      value: function create(file, callback***REMOVED*** {
        var instance = new FileChecksum(file***REMOVED***;
        instance.create(callback***REMOVED***;
      ***REMOVED***
    ***REMOVED***]***REMOVED***;
    function FileChecksum(file***REMOVED*** {
      classCallCheck(this, FileChecksum***REMOVED***;
      this.file = file;
      this.chunkSize = 2097152;
      this.chunkCount = Math.ceil(this.file.size / this.chunkSize***REMOVED***;
      this.chunkIndex = 0;
    ***REMOVED***
    createClass(FileChecksum, [{
      key: "create",
      value: function create(callback***REMOVED*** {
        var _this = this;
        this.callback = callback;
        this.md5Buffer = new sparkMd5.ArrayBuffer(***REMOVED***;
        this.fileReader = new FileReader(***REMOVED***;
        this.fileReader.addEventListener("load", function (event***REMOVED*** {
          return _this.fileReaderDidLoad(event***REMOVED***;
        ***REMOVED******REMOVED***;
        this.fileReader.addEventListener("error", function (event***REMOVED*** {
          return _this.fileReaderDidError(event***REMOVED***;
        ***REMOVED******REMOVED***;
        this.readNextChunk(***REMOVED***;
      ***REMOVED***
    ***REMOVED***, {
      key: "fileReaderDidLoad",
      value: function fileReaderDidLoad(event***REMOVED*** {
        this.md5Buffer.append(event.target.result***REMOVED***;
        if (!this.readNextChunk(***REMOVED******REMOVED*** {
          var binaryDigest = this.md5Buffer.end(true***REMOVED***;
          var base64digest = btoa(binaryDigest***REMOVED***;
          this.callback(null, base64digest***REMOVED***;
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***, {
      key: "fileReaderDidError",
      value: function fileReaderDidError(event***REMOVED*** {
        this.callback("Error reading " + this.file.name***REMOVED***;
      ***REMOVED***
    ***REMOVED***, {
      key: "readNextChunk",
      value: function readNextChunk(***REMOVED*** {
        if (this.chunkIndex < this.chunkCount || this.chunkIndex == 0 && this.chunkCount == 0***REMOVED*** {
          var start = this.chunkIndex * this.chunkSize;
          var end = Math.min(start + this.chunkSize, this.file.size***REMOVED***;
          var bytes = fileSlice.call(this.file, start, end***REMOVED***;
          this.fileReader.readAsArrayBuffer(bytes***REMOVED***;
          this.chunkIndex++;
          return true;
        ***REMOVED*** else {
          return false;
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***]***REMOVED***;
    return FileChecksum;
  ***REMOVED***(***REMOVED***;
  function getMetaValue(name***REMOVED*** {
    var element = findElement(document.head, 'meta[name="' + name + '"]'***REMOVED***;
    if (element***REMOVED*** {
      return element.getAttribute("content"***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  function findElements(root, selector***REMOVED*** {
    if (typeof root == "string"***REMOVED*** {
      selector = root;
      root = document;
    ***REMOVED***
    var elements = root.querySelectorAll(selector***REMOVED***;
    return toArray$1(elements***REMOVED***;
  ***REMOVED***
  function findElement(root, selector***REMOVED*** {
    if (typeof root == "string"***REMOVED*** {
      selector = root;
      root = document;
    ***REMOVED***
    return root.querySelector(selector***REMOVED***;
  ***REMOVED***
  function dispatchEvent(element, type***REMOVED*** {
    var eventInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {***REMOVED***;
    var disabled = element.disabled;
    var bubbles = eventInit.bubbles,
      cancelable = eventInit.cancelable,
      detail = eventInit.detail;
    var event = document.createEvent("Event"***REMOVED***;
    event.initEvent(type, bubbles || true, cancelable || true***REMOVED***;
    event.detail = detail || {***REMOVED***;
    try {
      element.disabled = false;
      element.dispatchEvent(event***REMOVED***;
    ***REMOVED*** finally {
      element.disabled = disabled;
    ***REMOVED***
    return event;
  ***REMOVED***
  function toArray$1(value***REMOVED*** {
    if (Array.isArray(value***REMOVED******REMOVED*** {
      return value;
    ***REMOVED*** else if (Array.from***REMOVED*** {
      return Array.from(value***REMOVED***;
    ***REMOVED*** else {
      return [].slice.call(value***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  var BlobRecord = function (***REMOVED*** {
    function BlobRecord(file, checksum, url***REMOVED*** {
      var _this = this;
      classCallCheck(this, BlobRecord***REMOVED***;
      this.file = file;
      this.attributes = {
        filename: file.name,
        content_type: file.type || "application/octet-stream",
        byte_size: file.size,
        checksum: checksum
      ***REMOVED***;
      this.xhr = new XMLHttpRequest(***REMOVED***;
      this.xhr.open("POST", url, true***REMOVED***;
      this.xhr.responseType = "json";
      this.xhr.setRequestHeader("Content-Type", "application/json"***REMOVED***;
      this.xhr.setRequestHeader("Accept", "application/json"***REMOVED***;
      this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"***REMOVED***;
      var csrfToken = getMetaValue("csrf-token"***REMOVED***;
      if (csrfToken != undefined***REMOVED*** {
        this.xhr.setRequestHeader("X-CSRF-Token", csrfToken***REMOVED***;
      ***REMOVED***
      this.xhr.addEventListener("load", function (event***REMOVED*** {
        return _this.requestDidLoad(event***REMOVED***;
      ***REMOVED******REMOVED***;
      this.xhr.addEventListener("error", function (event***REMOVED*** {
        return _this.requestDidError(event***REMOVED***;
      ***REMOVED******REMOVED***;
    ***REMOVED***
    createClass(BlobRecord, [{
      key: "create",
      value: function create(callback***REMOVED*** {
        this.callback = callback;
        this.xhr.send(JSON.stringify({
          blob: this.attributes
        ***REMOVED******REMOVED******REMOVED***;
      ***REMOVED***
    ***REMOVED***, {
      key: "requestDidLoad",
      value: function requestDidLoad(event***REMOVED*** {
        if (this.status >= 200 && this.status < 300***REMOVED*** {
          var response = this.response;
          var direct_upload = response.direct_upload;
          delete response.direct_upload;
          this.attributes = response;
          this.directUploadData = direct_upload;
          this.callback(null, this.toJSON(***REMOVED******REMOVED***;
        ***REMOVED*** else {
          this.requestDidError(event***REMOVED***;
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***, {
      key: "requestDidError",
      value: function requestDidError(event***REMOVED*** {
        this.callback('Error creating Blob for "' + this.file.name + '". Status: ' + this.status***REMOVED***;
      ***REMOVED***
    ***REMOVED***, {
      key: "toJSON",
      value: function toJSON(***REMOVED*** {
        var result = {***REMOVED***;
        for (var key in this.attributes***REMOVED*** {
          result[key] = this.attributes[key];
        ***REMOVED***
        return result;
      ***REMOVED***
    ***REMOVED***, {
      key: "status",
      get: function get$$1(***REMOVED*** {
        return this.xhr.status;
      ***REMOVED***
    ***REMOVED***, {
      key: "response",
      get: function get$$1(***REMOVED*** {
        var _xhr = this.xhr,
          responseType = _xhr.responseType,
          response = _xhr.response;
        if (responseType == "json"***REMOVED*** {
          return response;
        ***REMOVED*** else {
          return JSON.parse(response***REMOVED***;
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***]***REMOVED***;
    return BlobRecord;
  ***REMOVED***(***REMOVED***;
  var BlobUpload = function (***REMOVED*** {
    function BlobUpload(blob***REMOVED*** {
      var _this = this;
      classCallCheck(this, BlobUpload***REMOVED***;
      this.blob = blob;
      this.file = blob.file;
      var _blob$directUploadDat = blob.directUploadData,
        url = _blob$directUploadDat.url,
        headers = _blob$directUploadDat.headers;
      this.xhr = new XMLHttpRequest(***REMOVED***;
      this.xhr.open("PUT", url, true***REMOVED***;
      this.xhr.responseType = "text";
      for (var key in headers***REMOVED*** {
        this.xhr.setRequestHeader(key, headers[key]***REMOVED***;
      ***REMOVED***
      this.xhr.addEventListener("load", function (event***REMOVED*** {
        return _this.requestDidLoad(event***REMOVED***;
      ***REMOVED******REMOVED***;
      this.xhr.addEventListener("error", function (event***REMOVED*** {
        return _this.requestDidError(event***REMOVED***;
      ***REMOVED******REMOVED***;
    ***REMOVED***
    createClass(BlobUpload, [{
      key: "create",
      value: function create(callback***REMOVED*** {
        this.callback = callback;
        this.xhr.send(this.file.slice(***REMOVED******REMOVED***;
      ***REMOVED***
    ***REMOVED***, {
      key: "requestDidLoad",
      value: function requestDidLoad(event***REMOVED*** {
        var _xhr = this.xhr,
          status = _xhr.status,
          response = _xhr.response;
        if (status >= 200 && status < 300***REMOVED*** {
          this.callback(null, response***REMOVED***;
        ***REMOVED*** else {
          this.requestDidError(event***REMOVED***;
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***, {
      key: "requestDidError",
      value: function requestDidError(event***REMOVED*** {
        this.callback('Error storing "' + this.file.name + '". Status: ' + this.xhr.status***REMOVED***;
      ***REMOVED***
    ***REMOVED***]***REMOVED***;
    return BlobUpload;
  ***REMOVED***(***REMOVED***;
  var id = 0;
  var DirectUpload = function (***REMOVED*** {
    function DirectUpload(file, url, delegate***REMOVED*** {
      classCallCheck(this, DirectUpload***REMOVED***;
      this.id = ++id;
      this.file = file;
      this.url = url;
      this.delegate = delegate;
    ***REMOVED***
    createClass(DirectUpload, [{
      key: "create",
      value: function create(callback***REMOVED*** {
        var _this = this;
        FileChecksum.create(this.file, function (error, checksum***REMOVED*** {
          if (error***REMOVED*** {
            callback(error***REMOVED***;
            return;
          ***REMOVED***
          var blob = new BlobRecord(_this.file, checksum, _this.url***REMOVED***;
          notify(_this.delegate, "directUploadWillCreateBlobWithXHR", blob.xhr***REMOVED***;
          blob.create(function (error***REMOVED*** {
            if (error***REMOVED*** {
              callback(error***REMOVED***;
            ***REMOVED*** else {
              var upload = new BlobUpload(blob***REMOVED***;
              notify(_this.delegate, "directUploadWillStoreFileWithXHR", upload.xhr***REMOVED***;
              upload.create(function (error***REMOVED*** {
                if (error***REMOVED*** {
                  callback(error***REMOVED***;
                ***REMOVED*** else {
                  callback(null, blob.toJSON(***REMOVED******REMOVED***;
                ***REMOVED***
              ***REMOVED******REMOVED***;
            ***REMOVED***
          ***REMOVED******REMOVED***;
        ***REMOVED******REMOVED***;
      ***REMOVED***
    ***REMOVED***]***REMOVED***;
    return DirectUpload;
  ***REMOVED***(***REMOVED***;
  function notify(object, methodName***REMOVED*** {
    if (object && typeof object[methodName] == "function"***REMOVED*** {
      for (var _len = arguments.length, messages = Array(_len > 2 ? _len - 2 : 0***REMOVED***, _key = 2; _key < _len; _key++***REMOVED*** {
        messages[_key - 2] = arguments[_key];
      ***REMOVED***
      return object[methodName].apply(object, messages***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  var DirectUploadController = function (***REMOVED*** {
    function DirectUploadController(input, file***REMOVED*** {
      classCallCheck(this, DirectUploadController***REMOVED***;
      this.input = input;
      this.file = file;
      this.directUpload = new DirectUpload(this.file, this.url, this***REMOVED***;
      this.dispatch("initialize"***REMOVED***;
    ***REMOVED***
    createClass(DirectUploadController, [{
      key: "start",
      value: function start(callback***REMOVED*** {
        var _this = this;
        var hiddenInput = document.createElement("input"***REMOVED***;
        hiddenInput.type = "hidden";
        hiddenInput.name = this.input.name;
        this.input.insertAdjacentElement("beforebegin", hiddenInput***REMOVED***;
        this.dispatch("start"***REMOVED***;
        this.directUpload.create(function (error, attributes***REMOVED*** {
          if (error***REMOVED*** {
            hiddenInput.parentNode.removeChild(hiddenInput***REMOVED***;
            _this.dispatchError(error***REMOVED***;
          ***REMOVED*** else {
            hiddenInput.value = attributes.signed_id;
          ***REMOVED***
          _this.dispatch("end"***REMOVED***;
          callback(error***REMOVED***;
        ***REMOVED******REMOVED***;
      ***REMOVED***
    ***REMOVED***, {
      key: "uploadRequestDidProgress",
      value: function uploadRequestDidProgress(event***REMOVED*** {
        var progress = event.loaded / event.total * 100;
        if (progress***REMOVED*** {
          this.dispatch("progress", {
            progress: progress
          ***REMOVED******REMOVED***;
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***, {
      key: "dispatch",
      value: function dispatch(name***REMOVED*** {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {***REMOVED***;
        detail.file = this.file;
        detail.id = this.directUpload.id;
        return dispatchEvent(this.input, "direct-upload:" + name, {
          detail: detail
        ***REMOVED******REMOVED***;
      ***REMOVED***
    ***REMOVED***, {
      key: "dispatchError",
      value: function dispatchError(error***REMOVED*** {
        var event = this.dispatch("error", {
          error: error
        ***REMOVED******REMOVED***;
        if (!event.defaultPrevented***REMOVED*** {
          alert(error***REMOVED***;
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***, {
      key: "directUploadWillCreateBlobWithXHR",
      value: function directUploadWillCreateBlobWithXHR(xhr***REMOVED*** {
        this.dispatch("before-blob-request", {
          xhr: xhr
        ***REMOVED******REMOVED***;
      ***REMOVED***
    ***REMOVED***, {
      key: "directUploadWillStoreFileWithXHR",
      value: function directUploadWillStoreFileWithXHR(xhr***REMOVED*** {
        var _this2 = this;
        this.dispatch("before-storage-request", {
          xhr: xhr
        ***REMOVED******REMOVED***;
        xhr.upload.addEventListener("progress", function (event***REMOVED*** {
          return _this2.uploadRequestDidProgress(event***REMOVED***;
        ***REMOVED******REMOVED***;
      ***REMOVED***
    ***REMOVED***, {
      key: "url",
      get: function get$$1(***REMOVED*** {
        return this.input.getAttribute("data-direct-upload-url"***REMOVED***;
      ***REMOVED***
    ***REMOVED***]***REMOVED***;
    return DirectUploadController;
  ***REMOVED***(***REMOVED***;
  var inputSelector = "input[type=file][data-direct-upload-url]:not([disabled]***REMOVED***";
  var DirectUploadsController = function (***REMOVED*** {
    function DirectUploadsController(form***REMOVED*** {
      classCallCheck(this, DirectUploadsController***REMOVED***;
      this.form = form;
      this.inputs = findElements(form, inputSelector***REMOVED***.filter(function (input***REMOVED*** {
        return input.files.length;
      ***REMOVED******REMOVED***;
    ***REMOVED***
    createClass(DirectUploadsController, [{
      key: "start",
      value: function start(callback***REMOVED*** {
        var _this = this;
        var controllers = this.createDirectUploadControllers(***REMOVED***;
        var startNextController = function startNextController(***REMOVED*** {
          var controller = controllers.shift(***REMOVED***;
          if (controller***REMOVED*** {
            controller.start(function (error***REMOVED*** {
              if (error***REMOVED*** {
                callback(error***REMOVED***;
                _this.dispatch("end"***REMOVED***;
              ***REMOVED*** else {
                startNextController(***REMOVED***;
              ***REMOVED***
            ***REMOVED******REMOVED***;
          ***REMOVED*** else {
            callback(***REMOVED***;
            _this.dispatch("end"***REMOVED***;
          ***REMOVED***
        ***REMOVED***;
        this.dispatch("start"***REMOVED***;
        startNextController(***REMOVED***;
      ***REMOVED***
    ***REMOVED***, {
      key: "createDirectUploadControllers",
      value: function createDirectUploadControllers(***REMOVED*** {
        var controllers = [];
        this.inputs.forEach(function (input***REMOVED*** {
          toArray$1(input.files***REMOVED***.forEach(function (file***REMOVED*** {
            var controller = new DirectUploadController(input, file***REMOVED***;
            controllers.push(controller***REMOVED***;
          ***REMOVED******REMOVED***;
        ***REMOVED******REMOVED***;
        return controllers;
      ***REMOVED***
    ***REMOVED***, {
      key: "dispatch",
      value: function dispatch(name***REMOVED*** {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {***REMOVED***;
        return dispatchEvent(this.form, "direct-uploads:" + name, {
          detail: detail
        ***REMOVED******REMOVED***;
      ***REMOVED***
    ***REMOVED***]***REMOVED***;
    return DirectUploadsController;
  ***REMOVED***(***REMOVED***;
  var processingAttribute = "data-direct-uploads-processing";
  var submitButtonsByForm = new WeakMap(***REMOVED***;
  var started = false;
  function start(***REMOVED*** {
    if (!started***REMOVED*** {
      started = true;
      document.addEventListener("click", didClick, true***REMOVED***;
      document.addEventListener("submit", didSubmitForm***REMOVED***;
      document.addEventListener("ajax:before", didSubmitRemoteElement***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  function didClick(event***REMOVED*** {
    var target = event.target;
    if ((target.tagName == "INPUT" || target.tagName == "BUTTON"***REMOVED*** && target.type == "submit" && target.form***REMOVED*** {
      submitButtonsByForm.set(target.form, target***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  function didSubmitForm(event***REMOVED*** {
    handleFormSubmissionEvent(event***REMOVED***;
  ***REMOVED***
  function didSubmitRemoteElement(event***REMOVED*** {
    if (event.target.tagName == "FORM"***REMOVED*** {
      handleFormSubmissionEvent(event***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  function handleFormSubmissionEvent(event***REMOVED*** {
    var form = event.target;
    if (form.hasAttribute(processingAttribute***REMOVED******REMOVED*** {
      event.preventDefault(***REMOVED***;
      return;
    ***REMOVED***
    var controller = new DirectUploadsController(form***REMOVED***;
    var inputs = controller.inputs;
    if (inputs.length***REMOVED*** {
      event.preventDefault(***REMOVED***;
      form.setAttribute(processingAttribute, ""***REMOVED***;
      inputs.forEach(disable***REMOVED***;
      controller.start(function (error***REMOVED*** {
        form.removeAttribute(processingAttribute***REMOVED***;
        if (error***REMOVED*** {
          inputs.forEach(enable***REMOVED***;
        ***REMOVED*** else {
          submitForm(form***REMOVED***;
        ***REMOVED***
      ***REMOVED******REMOVED***;
    ***REMOVED***
  ***REMOVED***
  function submitForm(form***REMOVED*** {
    var button = submitButtonsByForm.get(form***REMOVED*** || findElement(form, "input[type=submit], button[type=submit]"***REMOVED***;
    if (button***REMOVED*** {
      var _button = button,
        disabled = _button.disabled;
      button.disabled = false;
      button.focus(***REMOVED***;
      button.click(***REMOVED***;
      button.disabled = disabled;
    ***REMOVED*** else {
      button = document.createElement("input"***REMOVED***;
      button.type = "submit";
      button.style.display = "none";
      form.appendChild(button***REMOVED***;
      button.click(***REMOVED***;
      form.removeChild(button***REMOVED***;
    ***REMOVED***
    submitButtonsByForm.delete(form***REMOVED***;
  ***REMOVED***
  function disable(input***REMOVED*** {
    input.disabled = true;
  ***REMOVED***
  function enable(input***REMOVED*** {
    input.disabled = false;
  ***REMOVED***
  function autostart(***REMOVED*** {
    if (window.ActiveStorage***REMOVED*** {
      start(***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  setTimeout(autostart, 1***REMOVED***;
  exports.start = start;
  exports.DirectUpload = DirectUpload;
  Object.defineProperty(exports, "__esModule", {
    value: true
  ***REMOVED******REMOVED***;
***REMOVED******REMOVED***;

/***/ ***REMOVED******REMOVED***,

/***/ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js":
/*!******************************************************************!*\
  !*** ./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__***REMOVED*** {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
Unobtrusive JavaScript
https://github.com/rails/rails/blob/master/actionview/app/assets/javascripts
Released under the MIT license
 */;
(function (***REMOVED*** {
  var context = this;
  (function (***REMOVED*** {
    (function (***REMOVED*** {
      this.Rails = {
        linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]***REMOVED***, a[data-disable-with], a[data-disable]',
        buttonClickSelector: {
          selector: 'button[data-remote]:not([form]***REMOVED***, button[data-confirm]:not([form]***REMOVED***',
          exclude: 'form button'
        ***REMOVED***,
        inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
        formSubmitSelector: 'form',
        formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]***REMOVED***, input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type]***REMOVED***',
        formDisableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',
        formEnableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',
        fileInputSelector: 'input[name][type=file]:not([disabled]***REMOVED***',
        linkDisableSelector: 'a[data-disable-with], a[data-disable]',
        buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]'
      ***REMOVED***;
    ***REMOVED******REMOVED***.call(this***REMOVED***;
  ***REMOVED******REMOVED***.call(context***REMOVED***;
  var Rails = context.Rails;
  (function (***REMOVED*** {
    (function (***REMOVED*** {
      var nonce;
      nonce = null;
      Rails.loadCSPNonce = function (***REMOVED*** {
        var ref;
        return nonce = (ref = document.querySelector("meta[name=csp-nonce]"***REMOVED******REMOVED*** != null ? ref.content : void 0;
      ***REMOVED***;
      Rails.cspNonce = function (***REMOVED*** {
        return nonce != null ? nonce : Rails.loadCSPNonce(***REMOVED***;
      ***REMOVED***;
    ***REMOVED******REMOVED***.call(this***REMOVED***;
    (function (***REMOVED*** {
      var expando, m;
      m = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;
      Rails.matches = function (element, selector***REMOVED*** {
        if (selector.exclude != null***REMOVED*** {
          return m.call(element, selector.selector***REMOVED*** && !m.call(element, selector.exclude***REMOVED***;
        ***REMOVED*** else {
          return m.call(element, selector***REMOVED***;
        ***REMOVED***
      ***REMOVED***;
      expando = '_ujsData';
      Rails.getData = function (element, key***REMOVED*** {
        var ref;
        return (ref = element[expando]***REMOVED*** != null ? ref[key] : void 0;
      ***REMOVED***;
      Rails.setData = function (element, key, value***REMOVED*** {
        if (element[expando] == null***REMOVED*** {
          element[expando] = {***REMOVED***;
        ***REMOVED***
        return element[expando][key] = value;
      ***REMOVED***;
      Rails.$ = function (selector***REMOVED*** {
        return Array.prototype.slice.call(document.querySelectorAll(selector***REMOVED******REMOVED***;
      ***REMOVED***;
    ***REMOVED******REMOVED***.call(this***REMOVED***;
    (function (***REMOVED*** {
      var $, csrfParam, csrfToken;
      $ = Rails.$;
      csrfToken = Rails.csrfToken = function (***REMOVED*** {
        var meta;
        meta = document.querySelector('meta[name=csrf-token]'***REMOVED***;
        return meta && meta.content;
      ***REMOVED***;
      csrfParam = Rails.csrfParam = function (***REMOVED*** {
        var meta;
        meta = document.querySelector('meta[name=csrf-param]'***REMOVED***;
        return meta && meta.content;
      ***REMOVED***;
      Rails.CSRFProtection = function (xhr***REMOVED*** {
        var token;
        token = csrfToken(***REMOVED***;
        if (token != null***REMOVED*** {
          return xhr.setRequestHeader('X-CSRF-Token', token***REMOVED***;
        ***REMOVED***
      ***REMOVED***;
      Rails.refreshCSRFTokens = function (***REMOVED*** {
        var param, token;
        token = csrfToken(***REMOVED***;
        param = csrfParam(***REMOVED***;
        if (token != null && param != null***REMOVED*** {
          return $('form input[name="' + param + '"]'***REMOVED***.forEach(function (input***REMOVED*** {
            return input.value = token;
          ***REMOVED******REMOVED***;
        ***REMOVED***
      ***REMOVED***;
    ***REMOVED******REMOVED***.call(this***REMOVED***;
    (function (***REMOVED*** {
      var CustomEvent, fire, matches, preventDefault;
      matches = Rails.matches;
      CustomEvent = window.CustomEvent;
      if (typeof CustomEvent !== 'function'***REMOVED*** {
        CustomEvent = function (event, params***REMOVED*** {
          var evt;
          evt = document.createEvent('CustomEvent'***REMOVED***;
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail***REMOVED***;
          return evt;
        ***REMOVED***;
        CustomEvent.prototype = window.Event.prototype;
        preventDefault = CustomEvent.prototype.preventDefault;
        CustomEvent.prototype.preventDefault = function (***REMOVED*** {
          var result;
          result = preventDefault.call(this***REMOVED***;
          if (this.cancelable && !this.defaultPrevented***REMOVED*** {
            Object.defineProperty(this, 'defaultPrevented', {
              get: function (***REMOVED*** {
                return true;
              ***REMOVED***
            ***REMOVED******REMOVED***;
          ***REMOVED***
          return result;
        ***REMOVED***;
      ***REMOVED***
      fire = Rails.fire = function (obj, name, data***REMOVED*** {
        var event;
        event = new CustomEvent(name, {
          bubbles: true,
          cancelable: true,
          detail: data
        ***REMOVED******REMOVED***;
        obj.dispatchEvent(event***REMOVED***;
        return !event.defaultPrevented;
      ***REMOVED***;
      Rails.stopEverything = function (e***REMOVED*** {
        fire(e.target, 'ujs:everythingStopped'***REMOVED***;
        e.preventDefault(***REMOVED***;
        e.stopPropagation(***REMOVED***;
        return e.stopImmediatePropagation(***REMOVED***;
      ***REMOVED***;
      Rails.delegate = function (element, selector, eventType, handler***REMOVED*** {
        return element.addEventListener(eventType, function (e***REMOVED*** {
          var target;
          target = e.target;
          while (!(!(target instanceof Element***REMOVED*** || matches(target, selector***REMOVED******REMOVED******REMOVED*** {
            target = target.parentNode;
          ***REMOVED***
          if (target instanceof Element && handler.call(target, e***REMOVED*** === false***REMOVED*** {
            e.preventDefault(***REMOVED***;
            return e.stopPropagation(***REMOVED***;
          ***REMOVED***
        ***REMOVED******REMOVED***;
      ***REMOVED***;
    ***REMOVED******REMOVED***.call(this***REMOVED***;
    (function (***REMOVED*** {
      var AcceptHeaders, CSRFProtection, createXHR, cspNonce, fire, prepareOptions, processResponse;
      cspNonce = Rails.cspNonce, CSRFProtection = Rails.CSRFProtection, fire = Rails.fire;
      AcceptHeaders = {
        '*': '*/*',
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
        script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      ***REMOVED***;
      Rails.ajax = function (options***REMOVED*** {
        var xhr;
        options = prepareOptions(options***REMOVED***;
        xhr = createXHR(options, function (***REMOVED*** {
          var ref, response;
          response = processResponse((ref = xhr.response***REMOVED*** != null ? ref : xhr.responseText, xhr.getResponseHeader('Content-Type'***REMOVED******REMOVED***;
          if (Math.floor(xhr.status / 100***REMOVED*** === 2***REMOVED*** {
            if (typeof options.success === "function"***REMOVED*** {
              options.success(response, xhr.statusText, xhr***REMOVED***;
            ***REMOVED***
          ***REMOVED*** else {
            if (typeof options.error === "function"***REMOVED*** {
              options.error(response, xhr.statusText, xhr***REMOVED***;
            ***REMOVED***
          ***REMOVED***
          return typeof options.complete === "function" ? options.complete(xhr, xhr.statusText***REMOVED*** : void 0;
        ***REMOVED******REMOVED***;
        if (options.beforeSend != null && !options.beforeSend(xhr, options***REMOVED******REMOVED*** {
          return false;
        ***REMOVED***
        if (xhr.readyState === XMLHttpRequest.OPENED***REMOVED*** {
          return xhr.send(options.data***REMOVED***;
        ***REMOVED***
      ***REMOVED***;
      prepareOptions = function (options***REMOVED*** {
        options.url = options.url || location.href;
        options.type = options.type.toUpperCase(***REMOVED***;
        if (options.type === 'GET' && options.data***REMOVED*** {
          if (options.url.indexOf('?'***REMOVED*** < 0***REMOVED*** {
            options.url += '?' + options.data;
          ***REMOVED*** else {
            options.url += '&' + options.data;
          ***REMOVED***
        ***REMOVED***
        if (AcceptHeaders[options.dataType] == null***REMOVED*** {
          options.dataType = '*';
        ***REMOVED***
        options.accept = AcceptHeaders[options.dataType];
        if (options.dataType !== '*'***REMOVED*** {
          options.accept += ', */*; q=0.01';
        ***REMOVED***
        return options;
      ***REMOVED***;
      createXHR = function (options, done***REMOVED*** {
        var xhr;
        xhr = new XMLHttpRequest(***REMOVED***;
        xhr.open(options.type, options.url, true***REMOVED***;
        xhr.setRequestHeader('Accept', options.accept***REMOVED***;
        if (typeof options.data === 'string'***REMOVED*** {
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8'***REMOVED***;
        ***REMOVED***
        if (!options.crossDomain***REMOVED*** {
          xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest'***REMOVED***;
          CSRFProtection(xhr***REMOVED***;
        ***REMOVED***
        xhr.withCredentials = !!options.withCredentials;
        xhr.onreadystatechange = function (***REMOVED*** {
          if (xhr.readyState === XMLHttpRequest.DONE***REMOVED*** {
            return done(xhr***REMOVED***;
          ***REMOVED***
        ***REMOVED***;
        return xhr;
      ***REMOVED***;
      processResponse = function (response, type***REMOVED*** {
        var parser, script;
        if (typeof response === 'string' && typeof type === 'string'***REMOVED*** {
          if (type.match(/\bjson\b/***REMOVED******REMOVED*** {
            try {
              response = JSON.parse(response***REMOVED***;
            ***REMOVED*** catch (error***REMOVED*** {***REMOVED***
          ***REMOVED*** else if (type.match(/\b(?:java|ecma***REMOVED***script\b/***REMOVED******REMOVED*** {
            script = document.createElement('script'***REMOVED***;
            script.setAttribute('nonce', cspNonce(***REMOVED******REMOVED***;
            script.text = response;
            document.head.appendChild(script***REMOVED***.parentNode.removeChild(script***REMOVED***;
          ***REMOVED*** else if (type.match(/\b(xml|html|svg***REMOVED***\b/***REMOVED******REMOVED*** {
            parser = new DOMParser(***REMOVED***;
            type = type.replace(/;.+/, ''***REMOVED***;
            try {
              response = parser.parseFromString(response, type***REMOVED***;
            ***REMOVED*** catch (error***REMOVED*** {***REMOVED***
          ***REMOVED***
        ***REMOVED***
        return response;
      ***REMOVED***;
      Rails.href = function (element***REMOVED*** {
        return element.href;
      ***REMOVED***;
      Rails.isCrossDomain = function (url***REMOVED*** {
        var e, originAnchor, urlAnchor;
        originAnchor = document.createElement('a'***REMOVED***;
        originAnchor.href = location.href;
        urlAnchor = document.createElement('a'***REMOVED***;
        try {
          urlAnchor.href = url;
          return !((!urlAnchor.protocol || urlAnchor.protocol === ':'***REMOVED*** && !urlAnchor.host || originAnchor.protocol + '//' + originAnchor.host === urlAnchor.protocol + '//' + urlAnchor.host***REMOVED***;
        ***REMOVED*** catch (error***REMOVED*** {
          e = error;
          return true;
        ***REMOVED***
      ***REMOVED***;
    ***REMOVED******REMOVED***.call(this***REMOVED***;
    (function (***REMOVED*** {
      var matches, toArray;
      matches = Rails.matches;
      toArray = function (e***REMOVED*** {
        return Array.prototype.slice.call(e***REMOVED***;
      ***REMOVED***;
      Rails.serializeElement = function (element, additionalParam***REMOVED*** {
        var inputs, params;
        inputs = [element];
        if (matches(element, 'form'***REMOVED******REMOVED*** {
          inputs = toArray(element.elements***REMOVED***;
        ***REMOVED***
        params = [];
        inputs.forEach(function (input***REMOVED*** {
          if (!input.name || input.disabled***REMOVED*** {
            return;
          ***REMOVED***
          if (matches(input, 'fieldset[disabled] *'***REMOVED******REMOVED*** {
            return;
          ***REMOVED***
          if (matches(input, 'select'***REMOVED******REMOVED*** {
            return toArray(input.options***REMOVED***.forEach(function (option***REMOVED*** {
              if (option.selected***REMOVED*** {
                return params.push({
                  name: input.name,
                  value: option.value
                ***REMOVED******REMOVED***;
              ***REMOVED***
            ***REMOVED******REMOVED***;
          ***REMOVED*** else if (input.checked || ['radio', 'checkbox', 'submit'].indexOf(input.type***REMOVED*** === -1***REMOVED*** {
            return params.push({
              name: input.name,
              value: input.value
            ***REMOVED******REMOVED***;
          ***REMOVED***
        ***REMOVED******REMOVED***;
        if (additionalParam***REMOVED*** {
          params.push(additionalParam***REMOVED***;
        ***REMOVED***
        return params.map(function (param***REMOVED*** {
          if (param.name != null***REMOVED*** {
            return encodeURIComponent(param.name***REMOVED*** + "=" + encodeURIComponent(param.value***REMOVED***;
          ***REMOVED*** else {
            return param;
          ***REMOVED***
        ***REMOVED******REMOVED***.join('&'***REMOVED***;
      ***REMOVED***;
      Rails.formElements = function (form, selector***REMOVED*** {
        if (matches(form, 'form'***REMOVED******REMOVED*** {
          return toArray(form.elements***REMOVED***.filter(function (el***REMOVED*** {
            return matches(el, selector***REMOVED***;
          ***REMOVED******REMOVED***;
        ***REMOVED*** else {
          return toArray(form.querySelectorAll(selector***REMOVED******REMOVED***;
        ***REMOVED***
      ***REMOVED***;
    ***REMOVED******REMOVED***.call(this***REMOVED***;
    (function (***REMOVED*** {
      var allowAction, fire, stopEverything;
      fire = Rails.fire, stopEverything = Rails.stopEverything;
      Rails.handleConfirm = function (e***REMOVED*** {
        if (!allowAction(this***REMOVED******REMOVED*** {
          return stopEverything(e***REMOVED***;
        ***REMOVED***
      ***REMOVED***;
      Rails.confirm = function (message, element***REMOVED*** {
        return confirm(message***REMOVED***;
      ***REMOVED***;
      allowAction = function (element***REMOVED*** {
        var answer, callback, message;
        message = element.getAttribute('data-confirm'***REMOVED***;
        if (!message***REMOVED*** {
          return true;
        ***REMOVED***
        answer = false;
        if (fire(element, 'confirm'***REMOVED******REMOVED*** {
          try {
            answer = Rails.confirm(message, element***REMOVED***;
          ***REMOVED*** catch (error***REMOVED*** {***REMOVED***
          callback = fire(element, 'confirm:complete', [answer]***REMOVED***;
        ***REMOVED***
        return answer && callback;
      ***REMOVED***;
    ***REMOVED******REMOVED***.call(this***REMOVED***;
    (function (***REMOVED*** {
      var disableFormElement, disableFormElements, disableLinkElement, enableFormElement, enableFormElements, enableLinkElement, formElements, getData, isXhrRedirect, matches, setData, stopEverything;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, stopEverything = Rails.stopEverything, formElements = Rails.formElements;
      Rails.handleDisabledElement = function (e***REMOVED*** {
        var element;
        element = this;
        if (element.disabled***REMOVED*** {
          return stopEverything(e***REMOVED***;
        ***REMOVED***
      ***REMOVED***;
      Rails.enableElement = function (e***REMOVED*** {
        var element;
        if (e instanceof Event***REMOVED*** {
          if (isXhrRedirect(e***REMOVED******REMOVED*** {
            return;
          ***REMOVED***
          element = e.target;
        ***REMOVED*** else {
          element = e;
        ***REMOVED***
        if (matches(element, Rails.linkDisableSelector***REMOVED******REMOVED*** {
          return enableLinkElement(element***REMOVED***;
        ***REMOVED*** else if (matches(element, Rails.buttonDisableSelector***REMOVED*** || matches(element, Rails.formEnableSelector***REMOVED******REMOVED*** {
          return enableFormElement(element***REMOVED***;
        ***REMOVED*** else if (matches(element, Rails.formSubmitSelector***REMOVED******REMOVED*** {
          return enableFormElements(element***REMOVED***;
        ***REMOVED***
      ***REMOVED***;
      Rails.disableElement = function (e***REMOVED*** {
        var element;
        element = e instanceof Event ? e.target : e;
        if (matches(element, Rails.linkDisableSelector***REMOVED******REMOVED*** {
          return disableLinkElement(element***REMOVED***;
        ***REMOVED*** else if (matches(element, Rails.buttonDisableSelector***REMOVED*** || matches(element, Rails.formDisableSelector***REMOVED******REMOVED*** {
          return disableFormElement(element***REMOVED***;
        ***REMOVED*** else if (matches(element, Rails.formSubmitSelector***REMOVED******REMOVED*** {
          return disableFormElements(element***REMOVED***;
        ***REMOVED***
      ***REMOVED***;
      disableLinkElement = function (element***REMOVED*** {
        var replacement;
        if (getData(element, 'ujs:disabled'***REMOVED******REMOVED*** {
          return;
        ***REMOVED***
        replacement = element.getAttribute('data-disable-with'***REMOVED***;
        if (replacement != null***REMOVED*** {
          setData(element, 'ujs:enable-with', element.innerHTML***REMOVED***;
          element.innerHTML = replacement;
        ***REMOVED***
        element.addEventListener('click', stopEverything***REMOVED***;
        return setData(element, 'ujs:disabled', true***REMOVED***;
      ***REMOVED***;
      enableLinkElement = function (element***REMOVED*** {
        var originalText;
        originalText = getData(element, 'ujs:enable-with'***REMOVED***;
        if (originalText != null***REMOVED*** {
          element.innerHTML = originalText;
          setData(element, 'ujs:enable-with', null***REMOVED***;
        ***REMOVED***
        element.removeEventListener('click', stopEverything***REMOVED***;
        return setData(element, 'ujs:disabled', null***REMOVED***;
      ***REMOVED***;
      disableFormElements = function (form***REMOVED*** {
        return formElements(form, Rails.formDisableSelector***REMOVED***.forEach(disableFormElement***REMOVED***;
      ***REMOVED***;
      disableFormElement = function (element***REMOVED*** {
        var replacement;
        if (getData(element, 'ujs:disabled'***REMOVED******REMOVED*** {
          return;
        ***REMOVED***
        replacement = element.getAttribute('data-disable-with'***REMOVED***;
        if (replacement != null***REMOVED*** {
          if (matches(element, 'button'***REMOVED******REMOVED*** {
            setData(element, 'ujs:enable-with', element.innerHTML***REMOVED***;
            element.innerHTML = replacement;
          ***REMOVED*** else {
            setData(element, 'ujs:enable-with', element.value***REMOVED***;
            element.value = replacement;
          ***REMOVED***
        ***REMOVED***
        element.disabled = true;
        return setData(element, 'ujs:disabled', true***REMOVED***;
      ***REMOVED***;
      enableFormElements = function (form***REMOVED*** {
        return formElements(form, Rails.formEnableSelector***REMOVED***.forEach(enableFormElement***REMOVED***;
      ***REMOVED***;
      enableFormElement = function (element***REMOVED*** {
        var originalText;
        originalText = getData(element, 'ujs:enable-with'***REMOVED***;
        if (originalText != null***REMOVED*** {
          if (matches(element, 'button'***REMOVED******REMOVED*** {
            element.innerHTML = originalText;
          ***REMOVED*** else {
            element.value = originalText;
          ***REMOVED***
          setData(element, 'ujs:enable-with', null***REMOVED***;
        ***REMOVED***
        element.disabled = false;
        return setData(element, 'ujs:disabled', null***REMOVED***;
      ***REMOVED***;
      isXhrRedirect = function (event***REMOVED*** {
        var ref, xhr;
        xhr = (ref = event.detail***REMOVED*** != null ? ref[0] : void 0;
        return (xhr != null ? xhr.getResponseHeader("X-Xhr-Redirect"***REMOVED*** : void 0***REMOVED*** != null;
      ***REMOVED***;
    ***REMOVED******REMOVED***.call(this***REMOVED***;
    (function (***REMOVED*** {
      var stopEverything;
      stopEverything = Rails.stopEverything;
      Rails.handleMethod = function (e***REMOVED*** {
        var csrfParam, csrfToken, form, formContent, href, link, method;
        link = this;
        method = link.getAttribute('data-method'***REMOVED***;
        if (!method***REMOVED*** {
          return;
        ***REMOVED***
        href = Rails.href(link***REMOVED***;
        csrfToken = Rails.csrfToken(***REMOVED***;
        csrfParam = Rails.csrfParam(***REMOVED***;
        form = document.createElement('form'***REMOVED***;
        formContent = "<input name='_method' value='" + method + "' type='hidden' />";
        if (csrfParam != null && csrfToken != null && !Rails.isCrossDomain(href***REMOVED******REMOVED*** {
          formContent += "<input name='" + csrfParam + "' value='" + csrfToken + "' type='hidden' />";
        ***REMOVED***
        formContent += '<input type="submit" />';
        form.method = 'post';
        form.action = href;
        form.target = link.target;
        form.innerHTML = formContent;
        form.style.display = 'none';
        document.body.appendChild(form***REMOVED***;
        form.querySelector('[type="submit"]'***REMOVED***.click(***REMOVED***;
        return stopEverything(e***REMOVED***;
      ***REMOVED***;
    ***REMOVED******REMOVED***.call(this***REMOVED***;
    (function (***REMOVED*** {
      var ajax,
        fire,
        getData,
        isCrossDomain,
        isRemote,
        matches,
        serializeElement,
        setData,
        stopEverything,
        slice = [].slice;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, fire = Rails.fire, stopEverything = Rails.stopEverything, ajax = Rails.ajax, isCrossDomain = Rails.isCrossDomain, serializeElement = Rails.serializeElement;
      isRemote = function (element***REMOVED*** {
        var value;
        value = element.getAttribute('data-remote'***REMOVED***;
        return value != null && value !== 'false';
      ***REMOVED***;
      Rails.handleRemote = function (e***REMOVED*** {
        var button, data, dataType, element, method, url, withCredentials;
        element = this;
        if (!isRemote(element***REMOVED******REMOVED*** {
          return true;
        ***REMOVED***
        if (!fire(element, 'ajax:before'***REMOVED******REMOVED*** {
          fire(element, 'ajax:stopped'***REMOVED***;
          return false;
        ***REMOVED***
        withCredentials = element.getAttribute('data-with-credentials'***REMOVED***;
        dataType = element.getAttribute('data-type'***REMOVED*** || 'script';
        if (matches(element, Rails.formSubmitSelector***REMOVED******REMOVED*** {
          button = getData(element, 'ujs:submit-button'***REMOVED***;
          method = getData(element, 'ujs:submit-button-formmethod'***REMOVED*** || element.method;
          url = getData(element, 'ujs:submit-button-formaction'***REMOVED*** || element.getAttribute('action'***REMOVED*** || location.href;
          if (method.toUpperCase(***REMOVED*** === 'GET'***REMOVED*** {
            url = url.replace(/\?.*$/, ''***REMOVED***;
          ***REMOVED***
          if (element.enctype === 'multipart/form-data'***REMOVED*** {
            data = new FormData(element***REMOVED***;
            if (button != null***REMOVED*** {
              data.append(button.name, button.value***REMOVED***;
            ***REMOVED***
          ***REMOVED*** else {
            data = serializeElement(element, button***REMOVED***;
          ***REMOVED***
          setData(element, 'ujs:submit-button', null***REMOVED***;
          setData(element, 'ujs:submit-button-formmethod', null***REMOVED***;
          setData(element, 'ujs:submit-button-formaction', null***REMOVED***;
        ***REMOVED*** else if (matches(element, Rails.buttonClickSelector***REMOVED*** || matches(element, Rails.inputChangeSelector***REMOVED******REMOVED*** {
          method = element.getAttribute('data-method'***REMOVED***;
          url = element.getAttribute('data-url'***REMOVED***;
          data = serializeElement(element, element.getAttribute('data-params'***REMOVED******REMOVED***;
        ***REMOVED*** else {
          method = element.getAttribute('data-method'***REMOVED***;
          url = Rails.href(element***REMOVED***;
          data = element.getAttribute('data-params'***REMOVED***;
        ***REMOVED***
        ajax({
          type: method || 'GET',
          url: url,
          data: data,
          dataType: dataType,
          beforeSend: function (xhr, options***REMOVED*** {
            if (fire(element, 'ajax:beforeSend', [xhr, options]***REMOVED******REMOVED*** {
              return fire(element, 'ajax:send', [xhr]***REMOVED***;
            ***REMOVED*** else {
              fire(element, 'ajax:stopped'***REMOVED***;
              return false;
            ***REMOVED***
          ***REMOVED***,
          success: function (***REMOVED*** {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0***REMOVED*** : [];
            return fire(element, 'ajax:success', args***REMOVED***;
          ***REMOVED***,
          error: function (***REMOVED*** {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0***REMOVED*** : [];
            return fire(element, 'ajax:error', args***REMOVED***;
          ***REMOVED***,
          complete: function (***REMOVED*** {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0***REMOVED*** : [];
            return fire(element, 'ajax:complete', args***REMOVED***;
          ***REMOVED***,
          crossDomain: isCrossDomain(url***REMOVED***,
          withCredentials: withCredentials != null && withCredentials !== 'false'
        ***REMOVED******REMOVED***;
        return stopEverything(e***REMOVED***;
      ***REMOVED***;
      Rails.formSubmitButtonClick = function (e***REMOVED*** {
        var button, form;
        button = this;
        form = button.form;
        if (!form***REMOVED*** {
          return;
        ***REMOVED***
        if (button.name***REMOVED*** {
          setData(form, 'ujs:submit-button', {
            name: button.name,
            value: button.value
          ***REMOVED******REMOVED***;
        ***REMOVED***
        setData(form, 'ujs:formnovalidate-button', button.formNoValidate***REMOVED***;
        setData(form, 'ujs:submit-button-formaction', button.getAttribute('formaction'***REMOVED******REMOVED***;
        return setData(form, 'ujs:submit-button-formmethod', button.getAttribute('formmethod'***REMOVED******REMOVED***;
      ***REMOVED***;
      Rails.preventInsignificantClick = function (e***REMOVED*** {
        var data, insignificantMetaClick, link, metaClick, method, nonPrimaryMouseClick;
        link = this;
        method = (link.getAttribute('data-method'***REMOVED*** || 'GET'***REMOVED***.toUpperCase(***REMOVED***;
        data = link.getAttribute('data-params'***REMOVED***;
        metaClick = e.metaKey || e.ctrlKey;
        insignificantMetaClick = metaClick && method === 'GET' && !data;
        nonPrimaryMouseClick = e.button != null && e.button !== 0;
        if (nonPrimaryMouseClick || insignificantMetaClick***REMOVED*** {
          return e.stopImmediatePropagation(***REMOVED***;
        ***REMOVED***
      ***REMOVED***;
    ***REMOVED******REMOVED***.call(this***REMOVED***;
    (function (***REMOVED*** {
      var $, CSRFProtection, delegate, disableElement, enableElement, fire, formSubmitButtonClick, getData, handleConfirm, handleDisabledElement, handleMethod, handleRemote, loadCSPNonce, preventInsignificantClick, refreshCSRFTokens;
      fire = Rails.fire, delegate = Rails.delegate, getData = Rails.getData, $ = Rails.$, refreshCSRFTokens = Rails.refreshCSRFTokens, CSRFProtection = Rails.CSRFProtection, loadCSPNonce = Rails.loadCSPNonce, enableElement = Rails.enableElement, disableElement = Rails.disableElement, handleDisabledElement = Rails.handleDisabledElement, handleConfirm = Rails.handleConfirm, preventInsignificantClick = Rails.preventInsignificantClick, handleRemote = Rails.handleRemote, formSubmitButtonClick = Rails.formSubmitButtonClick, handleMethod = Rails.handleMethod;
      if (typeof jQuery !== "undefined" && jQuery !== null && jQuery.ajax != null***REMOVED*** {
        if (jQuery.rails***REMOVED*** {
          throw new Error('If you load both jquery_ujs and rails-ujs, use rails-ujs only.'***REMOVED***;
        ***REMOVED***
        jQuery.rails = Rails;
        jQuery.ajaxPrefilter(function (options, originalOptions, xhr***REMOVED*** {
          if (!options.crossDomain***REMOVED*** {
            return CSRFProtection(xhr***REMOVED***;
          ***REMOVED***
        ***REMOVED******REMOVED***;
      ***REMOVED***
      Rails.start = function (***REMOVED*** {
        if (window._rails_loaded***REMOVED*** {
          throw new Error('rails-ujs has already been loaded!'***REMOVED***;
        ***REMOVED***
        window.addEventListener('pageshow', function (***REMOVED*** {
          $(Rails.formEnableSelector***REMOVED***.forEach(function (el***REMOVED*** {
            if (getData(el, 'ujs:disabled'***REMOVED******REMOVED*** {
              return enableElement(el***REMOVED***;
            ***REMOVED***
          ***REMOVED******REMOVED***;
          return $(Rails.linkDisableSelector***REMOVED***.forEach(function (el***REMOVED*** {
            if (getData(el, 'ujs:disabled'***REMOVED******REMOVED*** {
              return enableElement(el***REMOVED***;
            ***REMOVED***
          ***REMOVED******REMOVED***;
        ***REMOVED******REMOVED***;
        delegate(document, Rails.linkDisableSelector, 'ajax:complete', enableElement***REMOVED***;
        delegate(document, Rails.linkDisableSelector, 'ajax:stopped', enableElement***REMOVED***;
        delegate(document, Rails.buttonDisableSelector, 'ajax:complete', enableElement***REMOVED***;
        delegate(document, Rails.buttonDisableSelector, 'ajax:stopped', enableElement***REMOVED***;
        delegate(document, Rails.linkClickSelector, 'click', preventInsignificantClick***REMOVED***;
        delegate(document, Rails.linkClickSelector, 'click', handleDisabledElement***REMOVED***;
        delegate(document, Rails.linkClickSelector, 'click', handleConfirm***REMOVED***;
        delegate(document, Rails.linkClickSelector, 'click', disableElement***REMOVED***;
        delegate(document, Rails.linkClickSelector, 'click', handleRemote***REMOVED***;
        delegate(document, Rails.linkClickSelector, 'click', handleMethod***REMOVED***;
        delegate(document, Rails.buttonClickSelector, 'click', preventInsignificantClick***REMOVED***;
        delegate(document, Rails.buttonClickSelector, 'click', handleDisabledElement***REMOVED***;
        delegate(document, Rails.buttonClickSelector, 'click', handleConfirm***REMOVED***;
        delegate(document, Rails.buttonClickSelector, 'click', disableElement***REMOVED***;
        delegate(document, Rails.buttonClickSelector, 'click', handleRemote***REMOVED***;
        delegate(document, Rails.inputChangeSelector, 'change', handleDisabledElement***REMOVED***;
        delegate(document, Rails.inputChangeSelector, 'change', handleConfirm***REMOVED***;
        delegate(document, Rails.inputChangeSelector, 'change', handleRemote***REMOVED***;
        delegate(document, Rails.formSubmitSelector, 'submit', handleDisabledElement***REMOVED***;
        delegate(document, Rails.formSubmitSelector, 'submit', handleConfirm***REMOVED***;
        delegate(document, Rails.formSubmitSelector, 'submit', handleRemote***REMOVED***;
        delegate(document, Rails.formSubmitSelector, 'submit', function (e***REMOVED*** {
          return setTimeout(function (***REMOVED*** {
            return disableElement(e***REMOVED***;
          ***REMOVED***, 13***REMOVED***;
        ***REMOVED******REMOVED***;
        delegate(document, Rails.formSubmitSelector, 'ajax:send', disableElement***REMOVED***;
        delegate(document, Rails.formSubmitSelector, 'ajax:complete', enableElement***REMOVED***;
        delegate(document, Rails.formInputClickSelector, 'click', preventInsignificantClick***REMOVED***;
        delegate(document, Rails.formInputClickSelector, 'click', handleDisabledElement***REMOVED***;
        delegate(document, Rails.formInputClickSelector, 'click', handleConfirm***REMOVED***;
        delegate(document, Rails.formInputClickSelector, 'click', formSubmitButtonClick***REMOVED***;
        document.addEventListener('DOMContentLoaded', refreshCSRFTokens***REMOVED***;
        document.addEventListener('DOMContentLoaded', loadCSPNonce***REMOVED***;
        return window._rails_loaded = true;
      ***REMOVED***;
      if (window.Rails === Rails && fire(document, 'rails:attachBindings'***REMOVED******REMOVED*** {
        Rails.start(***REMOVED***;
      ***REMOVED***
    ***REMOVED******REMOVED***.call(this***REMOVED***;
  ***REMOVED******REMOVED***.call(this***REMOVED***;
  if ( true && module.exports***REMOVED*** {
    module.exports = Rails;
  ***REMOVED*** else if (true***REMOVED*** {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (Rails***REMOVED***,
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module***REMOVED******REMOVED*** :
				__WEBPACK_AMD_DEFINE_FACTORY__***REMOVED***,
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__***REMOVED******REMOVED***;
  ***REMOVED***
***REMOVED******REMOVED***.call(this***REMOVED***;

/***/ ***REMOVED******REMOVED***,

/***/ "./node_modules/autosize/dist/autosize.js":
/*!************************************************!*\
  !*** ./node_modules/autosize/dist/autosize.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__***REMOVED*** {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	autosize 4.0.2
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function (global, factory***REMOVED*** {
  if (true***REMOVED*** {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory***REMOVED***,
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__***REMOVED******REMOVED*** : __WEBPACK_AMD_DEFINE_FACTORY__***REMOVED***,
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__***REMOVED******REMOVED***;
  ***REMOVED*** else { var mod; ***REMOVED***
***REMOVED******REMOVED***(this, function (module, exports***REMOVED*** {
  'use strict';

  var map = typeof Map === "function" ? new Map(***REMOVED*** : function (***REMOVED*** {
    var keys = [];
    var values = [];
    return {
      has: function has(key***REMOVED*** {
        return keys.indexOf(key***REMOVED*** > -1;
      ***REMOVED***,
      get: function get(key***REMOVED*** {
        return values[keys.indexOf(key***REMOVED***];
      ***REMOVED***,
      set: function set(key, value***REMOVED*** {
        if (keys.indexOf(key***REMOVED*** === -1***REMOVED*** {
          keys.push(key***REMOVED***;
          values.push(value***REMOVED***;
        ***REMOVED***
      ***REMOVED***,
      delete: function _delete(key***REMOVED*** {
        var index = keys.indexOf(key***REMOVED***;
        if (index > -1***REMOVED*** {
          keys.splice(index, 1***REMOVED***;
          values.splice(index, 1***REMOVED***;
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***;
  ***REMOVED***(***REMOVED***;
  var createEvent = function createEvent(name***REMOVED*** {
    return new Event(name, {
      bubbles: true
    ***REMOVED******REMOVED***;
  ***REMOVED***;
  try {
    new Event('test'***REMOVED***;
  ***REMOVED*** catch (e***REMOVED*** {
    // IE does not support `new Event(***REMOVED***`
    createEvent = function createEvent(name***REMOVED*** {
      var evt = document.createEvent('Event'***REMOVED***;
      evt.initEvent(name, true, false***REMOVED***;
      return evt;
    ***REMOVED***;
  ***REMOVED***
  function assign(ta***REMOVED*** {
    if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta***REMOVED******REMOVED*** return;
    var heightOffset = null;
    var clientWidth = null;
    var cachedHeight = null;
    function init(***REMOVED*** {
      var style = window.getComputedStyle(ta, null***REMOVED***;
      if (style.resize === 'vertical'***REMOVED*** {
        ta.style.resize = 'none';
      ***REMOVED*** else if (style.resize === 'both'***REMOVED*** {
        ta.style.resize = 'horizontal';
      ***REMOVED***
      if (style.boxSizing === 'content-box'***REMOVED*** {
        heightOffset = -(parseFloat(style.paddingTop***REMOVED*** + parseFloat(style.paddingBottom***REMOVED******REMOVED***;
      ***REMOVED*** else {
        heightOffset = parseFloat(style.borderTopWidth***REMOVED*** + parseFloat(style.borderBottomWidth***REMOVED***;
      ***REMOVED***
      // Fix when a textarea is not on document body and heightOffset is Not a Number
      if (isNaN(heightOffset***REMOVED******REMOVED*** {
        heightOffset = 0;
      ***REMOVED***
      update(***REMOVED***;
    ***REMOVED***
    function changeOverflow(value***REMOVED*** {
      {
        // Chrome/Safari-specific fix:
        // When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
        // made available by removing the scrollbar. The following forces the necessary text reflow.
        var width = ta.style.width;
        ta.style.width = '0px';
        // Force reflow:
        /* jshint ignore:start */
        ta.offsetWidth;
        /* jshint ignore:end */
        ta.style.width = width;
      ***REMOVED***
      ta.style.overflowY = value;
    ***REMOVED***
    function getParentOverflows(el***REMOVED*** {
      var arr = [];
      while (el && el.parentNode && el.parentNode instanceof Element***REMOVED*** {
        if (el.parentNode.scrollTop***REMOVED*** {
          arr.push({
            node: el.parentNode,
            scrollTop: el.parentNode.scrollTop
          ***REMOVED******REMOVED***;
        ***REMOVED***
        el = el.parentNode;
      ***REMOVED***
      return arr;
    ***REMOVED***
    function resize(***REMOVED*** {
      if (ta.scrollHeight === 0***REMOVED*** {
        // If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
        return;
      ***REMOVED***
      var overflows = getParentOverflows(ta***REMOVED***;
      var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240***REMOVED***

      ta.style.height = '';
      ta.style.height = ta.scrollHeight + heightOffset + 'px';

      // used to check if an update is actually necessary on window.resize
      clientWidth = ta.clientWidth;

      // prevents scroll-position jumping
      overflows.forEach(function (el***REMOVED*** {
        el.node.scrollTop = el.scrollTop;
      ***REMOVED******REMOVED***;
      if (docTop***REMOVED*** {
        document.documentElement.scrollTop = docTop;
      ***REMOVED***
    ***REMOVED***
    function update(***REMOVED*** {
      resize(***REMOVED***;
      var styleHeight = Math.round(parseFloat(ta.style.height***REMOVED******REMOVED***;
      var computed = window.getComputedStyle(ta, null***REMOVED***;

      // Using offsetHeight as a replacement for computed.height in IE, because IE does not account use of border-box
      var actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(computed.height***REMOVED******REMOVED*** : ta.offsetHeight;

      // The actual height not matching the style height (set via the resize method***REMOVED*** indicates that 
      // the max-height has been exceeded, in which case the overflow should be allowed.
      if (actualHeight < styleHeight***REMOVED*** {
        if (computed.overflowY === 'hidden'***REMOVED*** {
          changeOverflow('scroll'***REMOVED***;
          resize(***REMOVED***;
          actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null***REMOVED***.height***REMOVED******REMOVED*** : ta.offsetHeight;
        ***REMOVED***
      ***REMOVED*** else {
        // Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
        if (computed.overflowY !== 'hidden'***REMOVED*** {
          changeOverflow('hidden'***REMOVED***;
          resize(***REMOVED***;
          actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null***REMOVED***.height***REMOVED******REMOVED*** : ta.offsetHeight;
        ***REMOVED***
      ***REMOVED***
      if (cachedHeight !== actualHeight***REMOVED*** {
        cachedHeight = actualHeight;
        var evt = createEvent('autosize:resized'***REMOVED***;
        try {
          ta.dispatchEvent(evt***REMOVED***;
        ***REMOVED*** catch (err***REMOVED*** {
          // Firefox will throw an error on dispatchEvent for a detached element
          // https://bugzilla.mozilla.org/show_bug.cgi?id=889376
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    var pageResize = function pageResize(***REMOVED*** {
      if (ta.clientWidth !== clientWidth***REMOVED*** {
        update(***REMOVED***;
      ***REMOVED***
    ***REMOVED***;
    var destroy = function (style***REMOVED*** {
      window.removeEventListener('resize', pageResize, false***REMOVED***;
      ta.removeEventListener('input', update, false***REMOVED***;
      ta.removeEventListener('keyup', update, false***REMOVED***;
      ta.removeEventListener('autosize:destroy', destroy, false***REMOVED***;
      ta.removeEventListener('autosize:update', update, false***REMOVED***;
      Object.keys(style***REMOVED***.forEach(function (key***REMOVED*** {
        ta.style[key] = style[key];
      ***REMOVED******REMOVED***;
      map.delete(ta***REMOVED***;
    ***REMOVED***.bind(ta, {
      height: ta.style.height,
      resize: ta.style.resize,
      overflowY: ta.style.overflowY,
      overflowX: ta.style.overflowX,
      wordWrap: ta.style.wordWrap
    ***REMOVED******REMOVED***;
    ta.addEventListener('autosize:destroy', destroy, false***REMOVED***;

    // IE9 does not fire onpropertychange or oninput for deletions,
    // so binding to onkeyup to catch most of those events.
    // There is no way that I know of to detect something like 'cut' in IE9.
    if ('onpropertychange' in ta && 'oninput' in ta***REMOVED*** {
      ta.addEventListener('keyup', update, false***REMOVED***;
    ***REMOVED***
    window.addEventListener('resize', pageResize, false***REMOVED***;
    ta.addEventListener('input', update, false***REMOVED***;
    ta.addEventListener('autosize:update', update, false***REMOVED***;
    ta.style.overflowX = 'hidden';
    ta.style.wordWrap = 'break-word';
    map.set(ta, {
      destroy: destroy,
      update: update
    ***REMOVED******REMOVED***;
    init(***REMOVED***;
  ***REMOVED***
  function destroy(ta***REMOVED*** {
    var methods = map.get(ta***REMOVED***;
    if (methods***REMOVED*** {
      methods.destroy(***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  function update(ta***REMOVED*** {
    var methods = map.get(ta***REMOVED***;
    if (methods***REMOVED*** {
      methods.update(***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  var autosize = null;

  // Do nothing in Node.js environment and IE8 (or lower***REMOVED***
  if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function'***REMOVED*** {
    autosize = function autosize(el***REMOVED*** {
      return el;
    ***REMOVED***;
    autosize.destroy = function (el***REMOVED*** {
      return el;
    ***REMOVED***;
    autosize.update = function (el***REMOVED*** {
      return el;
    ***REMOVED***;
  ***REMOVED*** else {
    autosize = function autosize(el, options***REMOVED*** {
      if (el***REMOVED*** {
        Array.prototype.forEach.call(el.length ? el : [el], function (x***REMOVED*** {
          return assign(x, options***REMOVED***;
        ***REMOVED******REMOVED***;
      ***REMOVED***
      return el;
    ***REMOVED***;
    autosize.destroy = function (el***REMOVED*** {
      if (el***REMOVED*** {
        Array.prototype.forEach.call(el.length ? el : [el], destroy***REMOVED***;
      ***REMOVED***
      return el;
    ***REMOVED***;
    autosize.update = function (el***REMOVED*** {
      if (el***REMOVED*** {
        Array.prototype.forEach.call(el.length ? el : [el], update***REMOVED***;
      ***REMOVED***
      return el;
    ***REMOVED***;
  ***REMOVED***
  exports.default = autosize;
  module.exports = exports['default'];
***REMOVED******REMOVED***;

/***/ ***REMOVED******REMOVED***,

/***/ "./node_modules/bootstrap/dist/js/bootstrap.js":
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap/dist/js/bootstrap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__***REMOVED*** {

/*!
  * Bootstrap v4.5.3 (https://getbootstrap.com/***REMOVED***
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors***REMOVED***
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE***REMOVED***
  */
(function (global, factory***REMOVED*** {
   true ? factory(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"***REMOVED***, __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js"***REMOVED******REMOVED*** : undefined;
***REMOVED******REMOVED***(this, function (exports, $, Popper***REMOVED*** {
  'use strict';

  function _interopDefaultLegacy(e***REMOVED*** {
    return e && typeof e === 'object' && 'default' in e ? e : {
      'default': e
    ***REMOVED***;
  ***REMOVED***
  var $__default = /*#__PURE__*/_interopDefaultLegacy($***REMOVED***;
  var Popper__default = /*#__PURE__*/_interopDefaultLegacy(Popper***REMOVED***;
  function _defineProperties(target, props***REMOVED*** {
    for (var i = 0; i < props.length; i++***REMOVED*** {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor***REMOVED*** descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  function _createClass(Constructor, protoProps, staticProps***REMOVED*** {
    if (protoProps***REMOVED*** _defineProperties(Constructor.prototype, protoProps***REMOVED***;
    if (staticProps***REMOVED*** _defineProperties(Constructor, staticProps***REMOVED***;
    return Constructor;
  ***REMOVED***
  function _extends(***REMOVED*** {
    _extends = Object.assign || function (target***REMOVED*** {
      for (var i = 1; i < arguments.length; i++***REMOVED*** {
        var source = arguments[i];
        for (var key in source***REMOVED*** {
          if (Object.prototype.hasOwnProperty.call(source, key***REMOVED******REMOVED*** {
            target[key] = source[key];
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***
      return target;
    ***REMOVED***;
    return _extends.apply(this, arguments***REMOVED***;
  ***REMOVED***
  function _inheritsLoose(subClass, superClass***REMOVED*** {
    subClass.prototype = Object.create(superClass.prototype***REMOVED***;
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  ***REMOVED***

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.5.3***REMOVED***: util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE***REMOVED***
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp***REMOVED***

  function toType(obj***REMOVED*** {
    if (obj === null || typeof obj === 'undefined'***REMOVED*** {
      return "" + obj;
    ***REMOVED***
    return {***REMOVED***.toString.call(obj***REMOVED***.match(/\s([a-z]+***REMOVED***/i***REMOVED***[1].toLowerCase(***REMOVED***;
  ***REMOVED***
  function getSpecialTransitionEndEvent(***REMOVED*** {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event***REMOVED*** {
        if ($__default['default'](event.target***REMOVED***.is(this***REMOVED******REMOVED*** {
          return event.handleObj.handler.apply(this, arguments***REMOVED***; // eslint-disable-line prefer-rest-params
        ***REMOVED***

        return undefined;
      ***REMOVED***
    ***REMOVED***;
  ***REMOVED***
  function transitionEndEmulator(duration***REMOVED*** {
    var _this = this;
    var called = false;
    $__default['default'](this***REMOVED***.one(Util.TRANSITION_END, function (***REMOVED*** {
      called = true;
    ***REMOVED******REMOVED***;
    setTimeout(function (***REMOVED*** {
      if (!called***REMOVED*** {
        Util.triggerTransitionEnd(_this***REMOVED***;
      ***REMOVED***
    ***REMOVED***, duration***REMOVED***;
    return this;
  ***REMOVED***
  function setTransitionEndSupport(***REMOVED*** {
    $__default['default'].fn.emulateTransitionEnd = transitionEndEmulator;
    $__default['default'].event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent(***REMOVED***;
  ***REMOVED***
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */

  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix***REMOVED*** {
      do {
        prefix += ~~(Math.random(***REMOVED*** * MAX_UID***REMOVED***; // "~~" acts like a faster Math.floor(***REMOVED*** here
      ***REMOVED*** while (document.getElementById(prefix***REMOVED******REMOVED***;
      return prefix;
    ***REMOVED***,
    getSelectorFromElement: function getSelectorFromElement(element***REMOVED*** {
      var selector = element.getAttribute('data-target'***REMOVED***;
      if (!selector || selector === '#'***REMOVED*** {
        var hrefAttr = element.getAttribute('href'***REMOVED***;
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim(***REMOVED*** : '';
      ***REMOVED***
      try {
        return document.querySelector(selector***REMOVED*** ? selector : null;
      ***REMOVED*** catch (_***REMOVED*** {
        return null;
      ***REMOVED***
    ***REMOVED***,
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element***REMOVED*** {
      if (!element***REMOVED*** {
        return 0;
      ***REMOVED*** // Get transition-duration of the element

      var transitionDuration = $__default['default'](element***REMOVED***.css('transition-duration'***REMOVED***;
      var transitionDelay = $__default['default'](element***REMOVED***.css('transition-delay'***REMOVED***;
      var floatTransitionDuration = parseFloat(transitionDuration***REMOVED***;
      var floatTransitionDelay = parseFloat(transitionDelay***REMOVED***; // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay***REMOVED*** {
        return 0;
      ***REMOVED*** // If multiple durations are defined, take the first

      transitionDuration = transitionDuration.split(','***REMOVED***[0];
      transitionDelay = transitionDelay.split(','***REMOVED***[0];
      return (parseFloat(transitionDuration***REMOVED*** + parseFloat(transitionDelay***REMOVED******REMOVED*** * MILLISECONDS_MULTIPLIER;
    ***REMOVED***,
    reflow: function reflow(element***REMOVED*** {
      return element.offsetHeight;
    ***REMOVED***,
    triggerTransitionEnd: function triggerTransitionEnd(element***REMOVED*** {
      $__default['default'](element***REMOVED***.trigger(TRANSITION_END***REMOVED***;
    ***REMOVED***,
    supportsTransitionEnd: function supportsTransitionEnd(***REMOVED*** {
      return Boolean(TRANSITION_END***REMOVED***;
    ***REMOVED***,
    isElement: function isElement(obj***REMOVED*** {
      return (obj[0] || obj***REMOVED***.nodeType;
    ***REMOVED***,
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes***REMOVED*** {
      for (var property in configTypes***REMOVED*** {
        if (Object.prototype.hasOwnProperty.call(configTypes, property***REMOVED******REMOVED*** {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value***REMOVED*** ? 'element' : toType(value***REMOVED***;
          if (!new RegExp(expectedTypes***REMOVED***.test(valueType***REMOVED******REMOVED*** {
            throw new Error(componentName.toUpperCase(***REMOVED*** + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" "***REMOVED*** + ("but expected type \"" + expectedTypes + "\"."***REMOVED******REMOVED***;
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***,
    findShadowRoot: function findShadowRoot(element***REMOVED*** {
      if (!document.documentElement.attachShadow***REMOVED*** {
        return null;
      ***REMOVED*** // Can find the shadow root otherwise it'll return the document

      if (typeof element.getRootNode === 'function'***REMOVED*** {
        var root = element.getRootNode(***REMOVED***;
        return root instanceof ShadowRoot ? root : null;
      ***REMOVED***
      if (element instanceof ShadowRoot***REMOVED*** {
        return element;
      ***REMOVED*** // when we don't find a shadow root

      if (!element.parentNode***REMOVED*** {
        return null;
      ***REMOVED***
      return Util.findShadowRoot(element.parentNode***REMOVED***;
    ***REMOVED***,
    jQueryDetection: function jQueryDetection(***REMOVED*** {
      if (typeof $__default['default'] === 'undefined'***REMOVED*** {
        throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.'***REMOVED***;
      ***REMOVED***
      var version = $__default['default'].fn.jquery.split(' '***REMOVED***[0].split('.'***REMOVED***;
      var minMajor = 1;
      var ltMajor = 2;
      var minMinor = 9;
      var minPatch = 1;
      var maxMajor = 4;
      if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor***REMOVED*** {
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0'***REMOVED***;
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***;
  Util.jQueryDetection(***REMOVED***;
  setTransitionEndSupport(***REMOVED***;

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.5.3';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $__default['default'].fn[NAME];
  var SELECTOR_DISMISS = '[data-dismiss="alert"]';
  var EVENT_CLOSE = "close" + EVENT_KEY;
  var EVENT_CLOSED = "closed" + EVENT_KEY;
  var EVENT_CLICK_DATA_API = "click" + EVENT_KEY + DATA_API_KEY;
  var CLASS_NAME_ALERT = 'alert';
  var CLASS_NAME_FADE = 'fade';
  var CLASS_NAME_SHOW = 'show';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert = /*#__PURE__*/function (***REMOVED*** {
    function Alert(element***REMOVED*** {
      this._element = element;
    ***REMOVED*** // Getters

    var _proto = Alert.prototype;

    // Public
    _proto.close = function close(element***REMOVED*** {
      var rootElement = this._element;
      if (element***REMOVED*** {
        rootElement = this._getRootElement(element***REMOVED***;
      ***REMOVED***
      var customEvent = this._triggerCloseEvent(rootElement***REMOVED***;
      if (customEvent.isDefaultPrevented(***REMOVED******REMOVED*** {
        return;
      ***REMOVED***
      this._removeElement(rootElement***REMOVED***;
    ***REMOVED***;
    _proto.dispose = function dispose(***REMOVED*** {
      $__default['default'].removeData(this._element, DATA_KEY***REMOVED***;
      this._element = null;
    ***REMOVED*** // Private
    ;

    _proto._getRootElement = function _getRootElement(element***REMOVED*** {
      var selector = Util.getSelectorFromElement(element***REMOVED***;
      var parent = false;
      if (selector***REMOVED*** {
        parent = document.querySelector(selector***REMOVED***;
      ***REMOVED***
      if (!parent***REMOVED*** {
        parent = $__default['default'](element***REMOVED***.closest("." + CLASS_NAME_ALERT***REMOVED***[0];
      ***REMOVED***
      return parent;
    ***REMOVED***;
    _proto._triggerCloseEvent = function _triggerCloseEvent(element***REMOVED*** {
      var closeEvent = $__default['default'].Event(EVENT_CLOSE***REMOVED***;
      $__default['default'](element***REMOVED***.trigger(closeEvent***REMOVED***;
      return closeEvent;
    ***REMOVED***;
    _proto._removeElement = function _removeElement(element***REMOVED*** {
      var _this = this;
      $__default['default'](element***REMOVED***.removeClass(CLASS_NAME_SHOW***REMOVED***;
      if (!$__default['default'](element***REMOVED***.hasClass(CLASS_NAME_FADE***REMOVED******REMOVED*** {
        this._destroyElement(element***REMOVED***;
        return;
      ***REMOVED***
      var transitionDuration = Util.getTransitionDurationFromElement(element***REMOVED***;
      $__default['default'](element***REMOVED***.one(Util.TRANSITION_END, function (event***REMOVED*** {
        return _this._destroyElement(element, event***REMOVED***;
      ***REMOVED******REMOVED***.emulateTransitionEnd(transitionDuration***REMOVED***;
    ***REMOVED***;
    _proto._destroyElement = function _destroyElement(element***REMOVED*** {
      $__default['default'](element***REMOVED***.detach(***REMOVED***.trigger(EVENT_CLOSED***REMOVED***.remove(***REMOVED***;
    ***REMOVED*** // Static
    ;

    Alert._jQueryInterface = function _jQueryInterface(config***REMOVED*** {
      return this.each(function (***REMOVED*** {
        var $element = $__default['default'](this***REMOVED***;
        var data = $element.data(DATA_KEY***REMOVED***;
        if (!data***REMOVED*** {
          data = new Alert(this***REMOVED***;
          $element.data(DATA_KEY, data***REMOVED***;
        ***REMOVED***
        if (config === 'close'***REMOVED*** {
          data[config](this***REMOVED***;
        ***REMOVED***
      ***REMOVED******REMOVED***;
    ***REMOVED***;
    Alert._handleDismiss = function _handleDismiss(alertInstance***REMOVED*** {
      return function (event***REMOVED*** {
        if (event***REMOVED*** {
          event.preventDefault(***REMOVED***;
        ***REMOVED***
        alertInstance.close(this***REMOVED***;
      ***REMOVED***;
    ***REMOVED***;
    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get(***REMOVED*** {
        return VERSION;
      ***REMOVED***
    ***REMOVED***]***REMOVED***;
    return Alert;
  ***REMOVED***(***REMOVED***;
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $__default['default'](document***REMOVED***.on(EVENT_CLICK_DATA_API, SELECTOR_DISMISS, Alert._handleDismiss(new Alert(***REMOVED******REMOVED******REMOVED***;
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME] = Alert._jQueryInterface;
  $__default['default'].fn[NAME].Constructor = Alert;
  $__default['default'].fn[NAME].noConflict = function (***REMOVED*** {
    $__default['default'].fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  ***REMOVED***;

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$1 = 'button';
  var VERSION$1 = '4.5.3';
  var DATA_KEY$1 = 'bs.button';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var DATA_API_KEY$1 = '.data-api';
  var JQUERY_NO_CONFLICT$1 = $__default['default'].fn[NAME$1];
  var CLASS_NAME_ACTIVE = 'active';
  var CLASS_NAME_BUTTON = 'btn';
  var CLASS_NAME_FOCUS = 'focus';
  var SELECTOR_DATA_TOGGLE_CARROT = '[data-toggle^="button"]';
  var SELECTOR_DATA_TOGGLES = '[data-toggle="buttons"]';
  var SELECTOR_DATA_TOGGLE = '[data-toggle="button"]';
  var SELECTOR_DATA_TOGGLES_BUTTONS = '[data-toggle="buttons"] .btn';
  var SELECTOR_INPUT = 'input:not([type="hidden"]***REMOVED***';
  var SELECTOR_ACTIVE = '.active';
  var SELECTOR_BUTTON = '.btn';
  var EVENT_CLICK_DATA_API$1 = "click" + EVENT_KEY$1 + DATA_API_KEY$1;
  var EVENT_FOCUS_BLUR_DATA_API = "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1***REMOVED***;
  var EVENT_LOAD_DATA_API = "load" + EVENT_KEY$1 + DATA_API_KEY$1;
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button = /*#__PURE__*/function (***REMOVED*** {
    function Button(element***REMOVED*** {
      this._element = element;
      this.shouldAvoidTriggerChange = false;
    ***REMOVED*** // Getters

    var _proto = Button.prototype;

    // Public
    _proto.toggle = function toggle(***REMOVED*** {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $__default['default'](this._element***REMOVED***.closest(SELECTOR_DATA_TOGGLES***REMOVED***[0];
      if (rootElement***REMOVED*** {
        var input = this._element.querySelector(SELECTOR_INPUT***REMOVED***;
        if (input***REMOVED*** {
          if (input.type === 'radio'***REMOVED*** {
            if (input.checked && this._element.classList.contains(CLASS_NAME_ACTIVE***REMOVED******REMOVED*** {
              triggerChangeEvent = false;
            ***REMOVED*** else {
              var activeElement = rootElement.querySelector(SELECTOR_ACTIVE***REMOVED***;
              if (activeElement***REMOVED*** {
                $__default['default'](activeElement***REMOVED***.removeClass(CLASS_NAME_ACTIVE***REMOVED***;
              ***REMOVED***
            ***REMOVED***
          ***REMOVED***
          if (triggerChangeEvent***REMOVED*** {
            // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
            if (input.type === 'checkbox' || input.type === 'radio'***REMOVED*** {
              input.checked = !this._element.classList.contains(CLASS_NAME_ACTIVE***REMOVED***;
            ***REMOVED***
            if (!this.shouldAvoidTriggerChange***REMOVED*** {
              $__default['default'](input***REMOVED***.trigger('change'***REMOVED***;
            ***REMOVED***
          ***REMOVED***
          input.focus(***REMOVED***;
          addAriaPressed = false;
        ***REMOVED***
      ***REMOVED***
      if (!(this._element.hasAttribute('disabled'***REMOVED*** || this._element.classList.contains('disabled'***REMOVED******REMOVED******REMOVED*** {
        if (addAriaPressed***REMOVED*** {
          this._element.setAttribute('aria-pressed', !this._element.classList.contains(CLASS_NAME_ACTIVE***REMOVED******REMOVED***;
        ***REMOVED***
        if (triggerChangeEvent***REMOVED*** {
          $__default['default'](this._element***REMOVED***.toggleClass(CLASS_NAME_ACTIVE***REMOVED***;
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***;
    _proto.dispose = function dispose(***REMOVED*** {
      $__default['default'].removeData(this._element, DATA_KEY$1***REMOVED***;
      this._element = null;
    ***REMOVED*** // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config, avoidTriggerChange***REMOVED*** {
      return this.each(function (***REMOVED*** {
        var $element = $__default['default'](this***REMOVED***;
        var data = $element.data(DATA_KEY$1***REMOVED***;
        if (!data***REMOVED*** {
          data = new Button(this***REMOVED***;
          $element.data(DATA_KEY$1, data***REMOVED***;
        ***REMOVED***
        data.shouldAvoidTriggerChange = avoidTriggerChange;
        if (config === 'toggle'***REMOVED*** {
          data[config](***REMOVED***;
        ***REMOVED***
      ***REMOVED******REMOVED***;
    ***REMOVED***;
    _createClass(Button, null, [{
      key: "VERSION",
      get: function get(***REMOVED*** {
        return VERSION$1;
      ***REMOVED***
    ***REMOVED***]***REMOVED***;
    return Button;
  ***REMOVED***(***REMOVED***;
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $__default['default'](document***REMOVED***.on(EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE_CARROT, function (event***REMOVED*** {
    var button = event.target;
    var initialButton = button;
    if (!$__default['default'](button***REMOVED***.hasClass(CLASS_NAME_BUTTON***REMOVED******REMOVED*** {
      button = $__default['default'](button***REMOVED***.closest(SELECTOR_BUTTON***REMOVED***[0];
    ***REMOVED***
    if (!button || button.hasAttribute('disabled'***REMOVED*** || button.classList.contains('disabled'***REMOVED******REMOVED*** {
      event.preventDefault(***REMOVED***; // work around Firefox bug #1540995
    ***REMOVED*** else {
      var inputBtn = button.querySelector(SELECTOR_INPUT***REMOVED***;
      if (inputBtn && (inputBtn.hasAttribute('disabled'***REMOVED*** || inputBtn.classList.contains('disabled'***REMOVED******REMOVED******REMOVED*** {
        event.preventDefault(***REMOVED***; // work around Firefox bug #1540995

        return;
      ***REMOVED***
      if (initialButton.tagName === 'INPUT' || button.tagName !== 'LABEL'***REMOVED*** {
        Button._jQueryInterface.call($__default['default'](button***REMOVED***, 'toggle', initialButton.tagName === 'INPUT'***REMOVED***;
      ***REMOVED***
    ***REMOVED***
  ***REMOVED******REMOVED***.on(EVENT_FOCUS_BLUR_DATA_API, SELECTOR_DATA_TOGGLE_CARROT, function (event***REMOVED*** {
    var button = $__default['default'](event.target***REMOVED***.closest(SELECTOR_BUTTON***REMOVED***[0];
    $__default['default'](button***REMOVED***.toggleClass(CLASS_NAME_FOCUS, /^focus(in***REMOVED***?$/.test(event.type***REMOVED******REMOVED***;
  ***REMOVED******REMOVED***;
  $__default['default'](window***REMOVED***.on(EVENT_LOAD_DATA_API, function (***REMOVED*** {
    // ensure correct active class is set to match the controls' actual values/states
    // find all checkboxes/readio buttons inside data-toggle groups
    var buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLES_BUTTONS***REMOVED******REMOVED***;
    for (var i = 0, len = buttons.length; i < len; i++***REMOVED*** {
      var button = buttons[i];
      var input = button.querySelector(SELECTOR_INPUT***REMOVED***;
      if (input.checked || input.hasAttribute('checked'***REMOVED******REMOVED*** {
        button.classList.add(CLASS_NAME_ACTIVE***REMOVED***;
      ***REMOVED*** else {
        button.classList.remove(CLASS_NAME_ACTIVE***REMOVED***;
      ***REMOVED***
    ***REMOVED*** // find all button toggles

    buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE***REMOVED******REMOVED***;
    for (var _i = 0, _len = buttons.length; _i < _len; _i++***REMOVED*** {
      var _button = buttons[_i];
      if (_button.getAttribute('aria-pressed'***REMOVED*** === 'true'***REMOVED*** {
        _button.classList.add(CLASS_NAME_ACTIVE***REMOVED***;
      ***REMOVED*** else {
        _button.classList.remove(CLASS_NAME_ACTIVE***REMOVED***;
      ***REMOVED***
    ***REMOVED***
  ***REMOVED******REMOVED***;
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$1] = Button._jQueryInterface;
  $__default['default'].fn[NAME$1].Constructor = Button;
  $__default['default'].fn[NAME$1].noConflict = function (***REMOVED*** {
    $__default['default'].fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return Button._jQueryInterface;
  ***REMOVED***;

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$2 = 'carousel';
  var VERSION$2 = '4.5.3';
  var DATA_KEY$2 = 'bs.carousel';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var DATA_API_KEY$2 = '.data-api';
  var JQUERY_NO_CONFLICT$2 = $__default['default'].fn[NAME$2];
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  ***REMOVED***;
  var DefaultType = {
    interval: '(number|boolean***REMOVED***',
    keyboard: 'boolean',
    slide: '(boolean|string***REMOVED***',
    pause: '(string|boolean***REMOVED***',
    wrap: 'boolean',
    touch: 'boolean'
  ***REMOVED***;
  var DIRECTION_NEXT = 'next';
  var DIRECTION_PREV = 'prev';
  var DIRECTION_LEFT = 'left';
  var DIRECTION_RIGHT = 'right';
  var EVENT_SLIDE = "slide" + EVENT_KEY$2;
  var EVENT_SLID = "slid" + EVENT_KEY$2;
  var EVENT_KEYDOWN = "keydown" + EVENT_KEY$2;
  var EVENT_MOUSEENTER = "mouseenter" + EVENT_KEY$2;
  var EVENT_MOUSELEAVE = "mouseleave" + EVENT_KEY$2;
  var EVENT_TOUCHSTART = "touchstart" + EVENT_KEY$2;
  var EVENT_TOUCHMOVE = "touchmove" + EVENT_KEY$2;
  var EVENT_TOUCHEND = "touchend" + EVENT_KEY$2;
  var EVENT_POINTERDOWN = "pointerdown" + EVENT_KEY$2;
  var EVENT_POINTERUP = "pointerup" + EVENT_KEY$2;
  var EVENT_DRAG_START = "dragstart" + EVENT_KEY$2;
  var EVENT_LOAD_DATA_API$1 = "load" + EVENT_KEY$2 + DATA_API_KEY$2;
  var EVENT_CLICK_DATA_API$2 = "click" + EVENT_KEY$2 + DATA_API_KEY$2;
  var CLASS_NAME_CAROUSEL = 'carousel';
  var CLASS_NAME_ACTIVE$1 = 'active';
  var CLASS_NAME_SLIDE = 'slide';
  var CLASS_NAME_RIGHT = 'carousel-item-right';
  var CLASS_NAME_LEFT = 'carousel-item-left';
  var CLASS_NAME_NEXT = 'carousel-item-next';
  var CLASS_NAME_PREV = 'carousel-item-prev';
  var CLASS_NAME_POINTER_EVENT = 'pointer-event';
  var SELECTOR_ACTIVE$1 = '.active';
  var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
  var SELECTOR_ITEM = '.carousel-item';
  var SELECTOR_ITEM_IMG = '.carousel-item img';
  var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
  var SELECTOR_INDICATORS = '.carousel-indicators';
  var SELECTOR_DATA_SLIDE = '[data-slide], [data-slide-to]';
  var SELECTOR_DATA_RIDE = '[data-ride="carousel"]';
  var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
  ***REMOVED***;
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel = /*#__PURE__*/function (***REMOVED*** {
    function Carousel(element, config***REMOVED*** {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config***REMOVED***;
      this._element = element;
      this._indicatorsElement = this._element.querySelector(SELECTOR_INDICATORS***REMOVED***;
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent***REMOVED***;
      this._addEventListeners(***REMOVED***;
    ***REMOVED*** // Getters

    var _proto = Carousel.prototype;

    // Public
    _proto.next = function next(***REMOVED*** {
      if (!this._isSliding***REMOVED*** {
        this._slide(DIRECTION_NEXT***REMOVED***;
      ***REMOVED***
    ***REMOVED***;
    _proto.nextWhenVisible = function nextWhenVisible(***REMOVED*** {
      var $element = $__default['default'](this._element***REMOVED***; // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible

      if (!document.hidden && $element.is(':visible'***REMOVED*** && $element.css('visibility'***REMOVED*** !== 'hidden'***REMOVED*** {
        this.next(***REMOVED***;
      ***REMOVED***
    ***REMOVED***;
    _proto.prev = function prev(***REMOVED*** {
      if (!this._isSliding***REMOVED*** {
        this._slide(DIRECTION_PREV***REMOVED***;
      ***REMOVED***
    ***REMOVED***;
    _proto.pause = function pause(event***REMOVED*** {
      if (!event***REMOVED*** {
        this._isPaused = true;
      ***REMOVED***
      if (this._element.querySelector(SELECTOR_NEXT_PREV***REMOVED******REMOVED*** {
        Util.triggerTransitionEnd(this._element***REMOVED***;
        this.cycle(true***REMOVED***;
      ***REMOVED***
      clearInterval(this._interval***REMOVED***;
      this._interval = null;
    ***REMOVED***;
    _proto.cycle = function cycle(event***REMOVED*** {
      if (!event***REMOVED*** {
        this._isPaused = false;
      ***REMOVED***
      if (this._interval***REMOVED*** {
        clearInterval(this._interval***REMOVED***;
        this._interval = null;
      ***REMOVED***
      if (this._config.interval && !this._isPaused***REMOVED*** {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next***REMOVED***.bind(this***REMOVED***, this._config.interval***REMOVED***;
      ***REMOVED***
    ***REMOVED***;
    _proto.to = function to(index***REMOVED*** {
      var _this = this;
      this._activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM***REMOVED***;
      var activeIndex = this._getItemIndex(this._activeElement***REMOVED***;
      if (index > this._items.length - 1 || index < 0***REMOVED*** {
        return;
      ***REMOVED***
      if (this._isSliding***REMOVED*** {
        $__default['default'](this._element***REMOVED***.one(EVENT_SLID, function (***REMOVED*** {
          return _this.to(index***REMOVED***;
        ***REMOVED******REMOVED***;
        return;
      ***REMOVED***
      if (activeIndex === index***REMOVED*** {
        this.pause(***REMOVED***;
        this.cycle(***REMOVED***;
        return;
      ***REMOVED***
      var direction = index > activeIndex ? DIRECTION_NEXT : DIRECTION_PREV;
      this._slide(direction, this._items[index]***REMOVED***;
    ***REMOVED***;
    _proto.dispose = function dispose(***REMOVED*** {
      $__default['default'](this._element***REMOVED***.off(EVENT_KEY$2***REMOVED***;
      $__default['default'].removeData(this._element, DATA_KEY$2***REMOVED***;
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    ***REMOVED*** // Private
    ;

    _proto._getConfig = function _getConfig(config***REMOVED*** {
      config = _extends({***REMOVED***, Default, config***REMOVED***;
      Util.typeCheckConfig(NAME$2, config, DefaultType***REMOVED***;
      return config;
    ***REMOVED***;
    _proto._handleSwipe = function _handleSwipe(***REMOVED*** {
      var absDeltax = Math.abs(this.touchDeltaX***REMOVED***;
      if (absDeltax <= SWIPE_THRESHOLD***REMOVED*** {
        return;
      ***REMOVED***
      var direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0; // swipe left

      if (direction > 0***REMOVED*** {
        this.prev(***REMOVED***;
      ***REMOVED*** // swipe right

      if (direction < 0***REMOVED*** {
        this.next(***REMOVED***;
      ***REMOVED***
    ***REMOVED***;
    _proto._addEventListeners = function _addEventListeners(***REMOVED*** {
      var _this2 = this;
      if (this._config.keyboard***REMOVED*** {
        $__default['default'](this._element***REMOVED***.on(EVENT_KEYDOWN, function (event***REMOVED*** {
          return _this2._keydown(event***REMOVED***;
        ***REMOVED******REMOVED***;
      ***REMOVED***
      if (this._config.pause === 'hover'***REMOVED*** {
        $__default['default'](this._element***REMOVED***.on(EVENT_MOUSEENTER, function (event***REMOVED*** {
          return _this2.pause(event***REMOVED***;
        ***REMOVED******REMOVED***.on(EVENT_MOUSELEAVE, function (event***REMOVED*** {
          return _this2.cycle(event***REMOVED***;
        ***REMOVED******REMOVED***;
      ***REMOVED***
      if (this._config.touch***REMOVED*** {
        this._addTouchEventListeners(***REMOVED***;
      ***REMOVED***
    ***REMOVED***;
    _proto._addTouchEventListeners = function _addTouchEventListeners(***REMOVED*** {
      var _this3 = this;
      if (!this._touchSupported***REMOVED*** {
        return;
      ***REMOVED***
      var start = function start(event***REMOVED*** {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase(***REMOVED***]***REMOVED*** {
          _this3.touchStartX = event.originalEvent.clientX;
        ***REMOVED*** else if (!_this3._pointerEvent***REMOVED*** {
          _this3.touchStartX = event.originalEvent.touches[0].clientX;
        ***REMOVED***
      ***REMOVED***;
      var move = function move(event***REMOVED*** {
        // ensure swiping with one touch and not pinching
        if (event.originalEvent.touches && event.originalEvent.touches.length > 1***REMOVED*** {
          _this3.touchDeltaX = 0;
        ***REMOVED*** else {
          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
        ***REMOVED***
      ***REMOVED***;
      var end = function end(event***REMOVED*** {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase(***REMOVED***]***REMOVED*** {
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        ***REMOVED***
        _this3._handleSwipe(***REMOVED***;
        if (_this3._config.pause === 'hover'***REMOVED*** {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired***REMOVED*** and after a timeout (to allow for mouse compatibility
          // events to fire***REMOVED*** we explicitly restart cycling
          _this3.pause(***REMOVED***;
          if (_this3.touchTimeout***REMOVED*** {
            clearTimeout(_this3.touchTimeout***REMOVED***;
          ***REMOVED***
          _this3.touchTimeout = setTimeout(function (event***REMOVED*** {
            return _this3.cycle(event***REMOVED***;
          ***REMOVED***, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval***REMOVED***;
        ***REMOVED***
      ***REMOVED***;
      $__default['default'](this._element.querySelectorAll(SELECTOR_ITEM_IMG***REMOVED******REMOVED***.on(EVENT_DRAG_START, function (e***REMOVED*** {
        return e.preventDefault(***REMOVED***;
      ***REMOVED******REMOVED***;
      if (this._pointerEvent***REMOVED*** {
        $__default['default'](this._element***REMOVED***.on(EVENT_POINTERDOWN, function (event***REMOVED*** {
          return start(event***REMOVED***;
        ***REMOVED******REMOVED***;
        $__default['default'](this._element***REMOVED***.on(EVENT_POINTERUP, function (event***REMOVED*** {
          return end(event***REMOVED***;
        ***REMOVED******REMOVED***;
        this._element.classList.add(CLASS_NAME_POINTER_EVENT***REMOVED***;
      ***REMOVED*** else {
        $__default['default'](this._element***REMOVED***.on(EVENT_TOUCHSTART, function (event***REMOVED*** {
          return start(event***REMOVED***;
        ***REMOVED******REMOVED***;
        $__default['default'](this._element***REMOVED***.on(EVENT_TOUCHMOVE, function (event***REMOVED*** {
          return move(event***REMOVED***;
        ***REMOVED******REMOVED***;
        $__default['default'](this._element***REMOVED***.on(EVENT_TOUCHEND, function (event***REMOVED*** {
          return end(event***REMOVED***;
        ***REMOVED******REMOVED***;
      ***REMOVED***
    ***REMOVED***;
    _proto._keydown = function _keydown(event***REMOVED*** {
      if (/input|textarea/i.test(event.target.tagName***REMOVED******REMOVED*** {
        return;
      ***REMOVED***
      switch (event.which***REMOVED*** {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault(***REMOVED***;
          this.prev(***REMOVED***;
          break;
        case ARROW_RIGHT_KEYCODE:
          event.preventDefault(***REMOVED***;
          this.next(***REMOVED***;
          break;
      ***REMOVED***
    ***REMOVED***;
    _proto._getItemIndex = function _getItemIndex(element***REMOVED*** {
      this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(SELECTOR_ITEM***REMOVED******REMOVED*** : [];
      return this._items.indexOf(element***REMOVED***;
    ***REMOVED***;
    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement***REMOVED*** {
      var isNextDirection = direction === DIRECTION_NEXT;
      var isPrevDirection = direction === DIRECTION_PREV;
      var activeIndex = this._getItemIndex(activeElement***REMOVED***;
      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;
      if (isGoingToWrap && !this._config.wrap***REMOVED*** {
        return activeElement;
      ***REMOVED***
      var delta = direction === DIRECTION_PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta***REMOVED*** % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    ***REMOVED***;
    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName***REMOVED*** {
      var targetIndex = this._getItemIndex(relatedTarget***REMOVED***;
      var fromIndex = this._getItemIndex(this._element.querySelector(SELECTOR_ACTIVE_ITEM***REMOVED******REMOVED***;
      var slideEvent = $__default['default'].Event(EVENT_SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      ***REMOVED******REMOVED***;
      $__default['default'](this._element***REMOVED***.trigger(slideEvent***REMOVED***;
      return slideEvent;
    ***REMOVED***;
    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element***REMOVED*** {
      if (this._indicatorsElement***REMOVED*** {
        var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(SELECTOR_ACTIVE$1***REMOVED******REMOVED***;
        $__default['default'](indicators***REMOVED***.removeClass(CLASS_NAME_ACTIVE$1***REMOVED***;
        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element***REMOVED***];
        if (nextIndicator***REMOVED*** {
          $__default['default'](nextIndicator***REMOVED***.addClass(CLASS_NAME_ACTIVE$1***REMOVED***;
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***;
    _proto._slide = function _slide(direction, element***REMOVED*** {
      var _this4 = this;
      var activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM***REMOVED***;
      var activeElementIndex = this._getItemIndex(activeElement***REMOVED***;
      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement***REMOVED***;
      var nextElementIndex = this._getItemIndex(nextElement***REMOVED***;
      var isCycling = Boolean(this._interval***REMOVED***;
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;
      if (direction === DIRECTION_NEXT***REMOVED*** {
        directionalClassName = CLASS_NAME_LEFT;
        orderClassName = CLASS_NAME_NEXT;
        eventDirectionName = DIRECTION_LEFT;
      ***REMOVED*** else {
        directionalClassName = CLASS_NAME_RIGHT;
        orderClassName = CLASS_NAME_PREV;
        eventDirectionName = DIRECTION_RIGHT;
      ***REMOVED***
      if (nextElement && $__default['default'](nextElement***REMOVED***.hasClass(CLASS_NAME_ACTIVE$1***REMOVED******REMOVED*** {
        this._isSliding = false;
        return;
      ***REMOVED***
      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName***REMOVED***;
      if (slideEvent.isDefaultPrevented(***REMOVED******REMOVED*** {
        return;
      ***REMOVED***
      if (!activeElement || !nextElement***REMOVED*** {
        // Some weirdness is happening, so we bail
        return;
      ***REMOVED***
      this._isSliding = true;
      if (isCycling***REMOVED*** {
        this.pause(***REMOVED***;
      ***REMOVED***
      this._setActiveIndicatorElement(nextElement***REMOVED***;
      var slidEvent = $__default['default'].Event(EVENT_SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      ***REMOVED******REMOVED***;
      if ($__default['default'](this._element***REMOVED***.hasClass(CLASS_NAME_SLIDE***REMOVED******REMOVED*** {
        $__default['default'](nextElement***REMOVED***.addClass(orderClassName***REMOVED***;
        Util.reflow(nextElement***REMOVED***;
        $__default['default'](activeElement***REMOVED***.addClass(directionalClassName***REMOVED***;
        $__default['default'](nextElement***REMOVED***.addClass(directionalClassName***REMOVED***;
        var nextElementInterval = parseInt(nextElement.getAttribute('data-interval'***REMOVED***, 10***REMOVED***;
        if (nextElementInterval***REMOVED*** {
          this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
          this._config.interval = nextElementInterval;
        ***REMOVED*** else {
          this._config.interval = this._config.defaultInterval || this._config.interval;
        ***REMOVED***
        var transitionDuration = Util.getTransitionDurationFromElement(activeElement***REMOVED***;
        $__default['default'](activeElement***REMOVED***.one(Util.TRANSITION_END, function (***REMOVED*** {
          $__default['default'](nextElement***REMOVED***.removeClass(directionalClassName + " " + orderClassName***REMOVED***.addClass(CLASS_NAME_ACTIVE$1***REMOVED***;
          $__default['default'](activeElement***REMOVED***.removeClass(CLASS_NAME_ACTIVE$1 + " " + orderClassName + " " + directionalClassName***REMOVED***;
          _this4._isSliding = false;
          setTimeout(function (***REMOVED*** {
            return $__default['default'](_this4._element***REMOVED***.trigger(slidEvent***REMOVED***;
          ***REMOVED***, 0***REMOVED***;
        ***REMOVED******REMOVED***.emulateTransitionEnd(transitionDuration***REMOVED***;
      ***REMOVED*** else {
        $__default['default'](activeElement***REMOVED***.removeClass(CLASS_NAME_ACTIVE$1***REMOVED***;
        $__default['default'](nextElement***REMOVED***.addClass(CLASS_NAME_ACTIVE$1***REMOVED***;
        this._isSliding = false;
        $__default['default'](this._element***REMOVED***.trigger(slidEvent***REMOVED***;
      ***REMOVED***
      if (isCycling***REMOVED*** {
        this.cycle(***REMOVED***;
      ***REMOVED***
    ***REMOVED*** // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config***REMOVED*** {
      return this.each(function (***REMOVED*** {
        var data = $__default['default'](this***REMOVED***.data(DATA_KEY$2***REMOVED***;
        var _config = _extends({***REMOVED***, Default, $__default['default'](this***REMOVED***.data(***REMOVED******REMOVED***;
        if (typeof config === 'object'***REMOVED*** {
          _config = _extends({***REMOVED***, _config, config***REMOVED***;
        ***REMOVED***
        var action = typeof config === 'string' ? config : _config.slide;
        if (!data***REMOVED*** {
          data = new Carousel(this, _config***REMOVED***;
          $__default['default'](this***REMOVED***.data(DATA_KEY$2, data***REMOVED***;
        ***REMOVED***
        if (typeof config === 'number'***REMOVED*** {
          data.to(config***REMOVED***;
        ***REMOVED*** else if (typeof action === 'string'***REMOVED*** {
          if (typeof data[action] === 'undefined'***REMOVED*** {
            throw new TypeError("No method named \"" + action + "\""***REMOVED***;
          ***REMOVED***
          data[action](***REMOVED***;
        ***REMOVED*** else if (_config.interval && _config.ride***REMOVED*** {
          data.pause(***REMOVED***;
          data.cycle(***REMOVED***;
        ***REMOVED***
      ***REMOVED******REMOVED***;
    ***REMOVED***;
    Carousel._dataApiClickHandler = function _dataApiClickHandler(event***REMOVED*** {
      var selector = Util.getSelectorFromElement(this***REMOVED***;
      if (!selector***REMOVED*** {
        return;
      ***REMOVED***
      var target = $__default['default'](selector***REMOVED***[0];
      if (!target || !$__default['default'](target***REMOVED***.hasClass(CLASS_NAME_CAROUSEL***REMOVED******REMOVED*** {
        return;
      ***REMOVED***
      var config = _extends({***REMOVED***, $__default['default'](target***REMOVED***.data(***REMOVED***, $__default['default'](this***REMOVED***.data(***REMOVED******REMOVED***;
      var slideIndex = this.getAttribute('data-slide-to'***REMOVED***;
      if (slideIndex***REMOVED*** {
        config.interval = false;
      ***REMOVED***
      Carousel._jQueryInterface.call($__default['default'](target***REMOVED***, config***REMOVED***;
      if (slideIndex***REMOVED*** {
        $__default['default'](target***REMOVED***.data(DATA_KEY$2***REMOVED***.to(slideIndex***REMOVED***;
      ***REMOVED***
      event.preventDefault(***REMOVED***;
    ***REMOVED***;
    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get(***REMOVED*** {
        return VERSION$2;
      ***REMOVED***
    ***REMOVED***, {
      key: "Default",
      get: function get(***REMOVED*** {
        return Default;
      ***REMOVED***
    ***REMOVED***]***REMOVED***;
    return Carousel;
  ***REMOVED***(***REMOVED***;
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $__default['default'](document***REMOVED***.on(EVENT_CLICK_DATA_API$2, SELECTOR_DATA_SLIDE, Carousel._dataApiClickHandler***REMOVED***;
  $__default['default'](window***REMOVED***.on(EVENT_LOAD_DATA_API$1, function (***REMOVED*** {
    var carousels = [].slice.call(document.querySelectorAll(SELECTOR_DATA_RIDE***REMOVED******REMOVED***;
    for (var i = 0, len = carousels.length; i < len; i++***REMOVED*** {
      var $carousel = $__default['default'](carousels[i]***REMOVED***;
      Carousel._jQueryInterface.call($carousel, $carousel.data(***REMOVED******REMOVED***;
    ***REMOVED***
  ***REMOVED******REMOVED***;
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$2] = Carousel._jQueryInterface;
  $__default['default'].fn[NAME$2].Constructor = Carousel;
  $__default['default'].fn[NAME$2].noConflict = function (***REMOVED*** {
    $__default['default'].fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return Carousel._jQueryInterface;
  ***REMOVED***;

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$3 = 'collapse';
  var VERSION$3 = '4.5.3';
  var DATA_KEY$3 = 'bs.collapse';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var DATA_API_KEY$3 = '.data-api';
  var JQUERY_NO_CONFLICT$3 = $__default['default'].fn[NAME$3];
  var Default$1 = {
    toggle: true,
    parent: ''
  ***REMOVED***;
  var DefaultType$1 = {
    toggle: 'boolean',
    parent: '(string|element***REMOVED***'
  ***REMOVED***;
  var EVENT_SHOW = "show" + EVENT_KEY$3;
  var EVENT_SHOWN = "shown" + EVENT_KEY$3;
  var EVENT_HIDE = "hide" + EVENT_KEY$3;
  var EVENT_HIDDEN = "hidden" + EVENT_KEY$3;
  var EVENT_CLICK_DATA_API$3 = "click" + EVENT_KEY$3 + DATA_API_KEY$3;
  var CLASS_NAME_SHOW$1 = 'show';
  var CLASS_NAME_COLLAPSE = 'collapse';
  var CLASS_NAME_COLLAPSING = 'collapsing';
  var CLASS_NAME_COLLAPSED = 'collapsed';
  var DIMENSION_WIDTH = 'width';
  var DIMENSION_HEIGHT = 'height';
  var SELECTOR_ACTIVES = '.show, .collapsing';
  var SELECTOR_DATA_TOGGLE$1 = '[data-toggle="collapse"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse = /*#__PURE__*/function (***REMOVED*** {
    function Collapse(element, config***REMOVED*** {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config***REMOVED***;
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]"***REMOVED******REMOVED******REMOVED***;
      var toggleList = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$1***REMOVED******REMOVED***;
      for (var i = 0, len = toggleList.length; i < len; i++***REMOVED*** {
        var elem = toggleList[i];
        var selector = Util.getSelectorFromElement(elem***REMOVED***;
        var filterElement = [].slice.call(document.querySelectorAll(selector***REMOVED******REMOVED***.filter(function (foundElem***REMOVED*** {
          return foundElem === element;
        ***REMOVED******REMOVED***;
        if (selector !== null && filterElement.length > 0***REMOVED*** {
          this._selector = selector;
          this._triggerArray.push(elem***REMOVED***;
        ***REMOVED***
      ***REMOVED***
      this._parent = this._config.parent ? this._getParent(***REMOVED*** : null;
      if (!this._config.parent***REMOVED*** {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray***REMOVED***;
      ***REMOVED***
      if (this._config.toggle***REMOVED*** {
        this.toggle(***REMOVED***;
      ***REMOVED***
    ***REMOVED*** // Getters

    var _proto = Collapse.prototype;

    // Public
    _proto.toggle = function toggle(***REMOVED*** {
      if ($__default['default'](this._element***REMOVED***.hasClass(CLASS_NAME_SHOW$1***REMOVED******REMOVED*** {
        this.hide(***REMOVED***;
      ***REMOVED*** else {
        this.show(***REMOVED***;
      ***REMOVED***
    ***REMOVED***;
    _proto.show = function show(***REMOVED*** {
      var _this = this;
      if (this._isTransitioning || $__default['default'](this._element***REMOVED***.hasClass(CLASS_NAME_SHOW$1***REMOVED******REMOVED*** {
        return;
      ***REMOVED***
      var actives;
      var activesData;
      if (this._parent***REMOVED*** {
        actives = [].slice.call(this._parent.querySelectorAll(SELECTOR_ACTIVES***REMOVED******REMOVED***.filter(function (elem***REMOVED*** {
          if (typeof _this._config.parent === 'string'***REMOVED*** {
            return elem.getAttribute('data-parent'***REMOVED*** === _this._config.parent;
          ***REMOVED***
          return elem.classList.contains(CLASS_NAME_COLLAPSE***REMOVED***;
        ***REMOVED******REMOVED***;
        if (actives.length === 0***REMOVED*** {
          actives = null;
        ***REMOVED***
      ***REMOVED***
      if (actives***REMOVED*** {
        activesData = $__default['default'](actives***REMOVED***.not(this._selector***REMOVED***.data(DATA_KEY$3***REMOVED***;
        if (activesData && activesData._isTransitioning***REMOVED*** {
          return;
        ***REMOVED***
      ***REMOVED***
      var startEvent = $__default['default'].Event(EVENT_SHOW***REMOVED***;
      $__default['default'](this._element***REMOVED***.trigger(startEvent***REMOVED***;
      if (startEvent.isDefaultPrevented(***REMOVED******REMOVED*** {
        return;
      ***REMOVED***
      if (actives***REMOVED*** {
        Collapse._jQueryInterface.call($__default['default'](actives***REMOVED***.not(this._selector***REMOVED***, 'hide'***REMOVED***;
        if (!activesData***REMOVED*** {
          $__default['default'](actives***REMOVED***.data(DATA_KEY$3, null***REMOVED***;
        ***REMOVED***
      ***REMOVED***
      var dimension = this._getDimension(***REMOVED***;
      $__default['default'](this._element***REMOVED***.removeClass(CLASS_NAME_COLLAPSE***REMOVED***.addClass(CLASS_NAME_COLLAPSING***REMOVED***;
      this._element.style[dimension] = 0;
      if (this._triggerArray.length***REMOVED*** {
        $__default['default'](this._triggerArray***REMOVED***.removeClass(CLASS_NAME_COLLAPSED***REMOVED***.attr('aria-expanded', true***REMOVED***;
      ***REMOVED***
      this.setTransitioning(true***REMOVED***;
      var complete = function complete(***REMOVED*** {
        $__default['default'](_this._element***REMOVED***.removeClass(CLASS_NAME_COLLAPSING***REMOVED***.addClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1***REMOVED***;
        _this._element.style[dimension] = '';
        _this.setTransitioning(false***REMOVED***;
        $__default['default'](_this._element***REMOVED***.trigger(EVENT_SHOWN***REMOVED***;
      ***REMOVED***;
      var capitalizedDimension = dimension[0].toUpperCase(***REMOVED*** + dimension.slice(1***REMOVED***;
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = Util.getTransitionDurationFromElement(this._element***REMOVED***;
      $__default['default'](this._element***REMOVED***.one(Util.TRANSITION_END, complete***REMOVED***.emulateTransitionEnd(transitionDuration***REMOVED***;
      this._element.style[dimension] = this._element[scrollSize] + "px";
    ***REMOVED***;
    _proto.hide = function hide(***REMOVED*** {
      var _this2 = this;
      if (this._isTransitioning || !$__default['default'](this._element***REMOVED***.hasClass(CLASS_NAME_SHOW$1***REMOVED******REMOVED*** {
        return;
      ***REMOVED***
      var startEvent = $__default['default'].Event(EVENT_HIDE***REMOVED***;
      $__default['default'](this._element***REMOVED***.trigger(startEvent***REMOVED***;
      if (startEvent.isDefaultPrevented(***REMOVED******REMOVED*** {
        return;
      ***REMOVED***
      var dimension = this._getDimension(***REMOVED***;
      this._element.style[dimension] = this._element.getBoundingClientRect(***REMOVED***[dimension] + "px";
      Util.reflow(this._element***REMOVED***;
      $__default['default'](this._element***REMOVED***.addClass(CLASS_NAME_COLLAPSING***REMOVED***.removeClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1***REMOVED***;
      var triggerArrayLength = this._triggerArray.length;
      if (triggerArrayLength > 0***REMOVED*** {
        for (var i = 0; i < triggerArrayLength; i++***REMOVED*** {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger***REMOVED***;
          if (selector !== null***REMOVED*** {
            var $elem = $__default['default']([].slice.call(document.querySelectorAll(selector***REMOVED******REMOVED******REMOVED***;
            if (!$elem.hasClass(CLASS_NAME_SHOW$1***REMOVED******REMOVED*** {
              $__default['default'](trigger***REMOVED***.addClass(CLASS_NAME_COLLAPSED***REMOVED***.attr('aria-expanded', false***REMOVED***;
            ***REMOVED***
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***
      this.setTransitioning(true***REMOVED***;
      var complete = function complete(***REMOVED*** {
        _this2.setTransitioning(false***REMOVED***;
        $__default['default'](_this2._element***REMOVED***.removeClass(CLASS_NAME_COLLAPSING***REMOVED***.addClass(CLASS_NAME_COLLAPSE***REMOVED***.trigger(EVENT_HIDDEN***REMOVED***;
      ***REMOVED***;
      this._element.style[dimension] = '';
      var transitionDuration = Util.getTransitionDurationFromElement(this._element***REMOVED***;
      $__default['default'](this._element***REMOVED***.one(Util.TRANSITION_END, complete***REMOVED***.emulateTransitionEnd(transitionDuration***REMOVED***;
    ***REMOVED***;
    _proto.setTransitioning = function setTransitioning(isTransitioning***REMOVED*** {
      this._isTransitioning = isTransitioning;
    ***REMOVED***;
    _proto.dispose = function dispose(***REMOVED*** {
      $__default['default'].removeData(this._element, DATA_KEY$3***REMOVED***;
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    ***REMOVED*** // Private
    ;

    _proto._getConfig = function _getConfig(config***REMOVED*** {
      config = _extends({***REMOVED***, Default$1, config***REMOVED***;
      config.toggle = Boolean(config.toggle***REMOVED***; // Coerce string values

      Util.typeCheckConfig(NAME$3, config, DefaultType$1***REMOVED***;
      return config;
    ***REMOVED***;
    _proto._getDimension = function _getDimension(***REMOVED*** {
      var hasWidth = $__default['default'](this._element***REMOVED***.hasClass(DIMENSION_WIDTH***REMOVED***;
      return hasWidth ? DIMENSION_WIDTH : DIMENSION_HEIGHT;
    ***REMOVED***;
    _proto._getParent = function _getParent(***REMOVED*** {
      var _this3 = this;
      var parent;
      if (Util.isElement(this._config.parent***REMOVED******REMOVED*** {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined'***REMOVED*** {
          parent = this._config.parent[0];
        ***REMOVED***
      ***REMOVED*** else {
        parent = document.querySelector(this._config.parent***REMOVED***;
      ***REMOVED***
      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      var children = [].slice.call(parent.querySelectorAll(selector***REMOVED******REMOVED***;
      $__default['default'](children***REMOVED***.each(function (i, element***REMOVED*** {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element***REMOVED***, [element]***REMOVED***;
      ***REMOVED******REMOVED***;
      return parent;
    ***REMOVED***;
    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray***REMOVED*** {
      var isOpen = $__default['default'](element***REMOVED***.hasClass(CLASS_NAME_SHOW$1***REMOVED***;
      if (triggerArray.length***REMOVED*** {
        $__default['default'](triggerArray***REMOVED***.toggleClass(CLASS_NAME_COLLAPSED, !isOpen***REMOVED***.attr('aria-expanded', isOpen***REMOVED***;
      ***REMOVED***
    ***REMOVED*** // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element***REMOVED*** {
      var selector = Util.getSelectorFromElement(element***REMOVED***;
      return selector ? document.querySelector(selector***REMOVED*** : null;
    ***REMOVED***;
    Collapse._jQueryInterface = function _jQueryInterface(config***REMOVED*** {
      return this.each(function (***REMOVED*** {
        var $element = $__default['default'](this***REMOVED***;
        var data = $element.data(DATA_KEY$3***REMOVED***;
        var _config = _extends({***REMOVED***, Default$1, $element.data(***REMOVED***, typeof config === 'object' && config ? config : {***REMOVED******REMOVED***;
        if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config***REMOVED******REMOVED*** {
          _config.toggle = false;
        ***REMOVED***
        if (!data***REMOVED*** {
          data = new Collapse(this, _config***REMOVED***;
          $element.data(DATA_KEY$3, data***REMOVED***;
        ***REMOVED***
        if (typeof config === 'string'***REMOVED*** {
          if (typeof data[config] === 'undefined'***REMOVED*** {
            throw new TypeError("No method named \"" + config + "\""***REMOVED***;
          ***REMOVED***
          data[config](***REMOVED***;
        ***REMOVED***
      ***REMOVED******REMOVED***;
    ***REMOVED***;
    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get(***REMOVED*** {
        return VERSION$3;
      ***REMOVED***
    ***REMOVED***, {
      key: "Default",
      get: function get(***REMOVED*** {
        return Default$1;
      ***REMOVED***
    ***REMOVED***]***REMOVED***;
    return Collapse;
  ***REMOVED***(***REMOVED***;
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $__default['default'](document***REMOVED***.on(EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$1, function (event***REMOVED*** {
    // preventDefault only for <a> elements (which change the URL***REMOVED*** not inside the collapsible element
    if (event.currentTarget.tagName === 'A'***REMOVED*** {
      event.preventDefault(***REMOVED***;
    ***REMOVED***
    var $trigger = $__default['default'](this***REMOVED***;
    var selector = Util.getSelectorFromElement(this***REMOVED***;
    var selectors = [].slice.call(document.querySelectorAll(selector***REMOVED******REMOVED***;
    $__default['default'](selectors***REMOVED***.each(function (***REMOVED*** {
      var $target = $__default['default'](this***REMOVED***;
      var data = $target.data(DATA_KEY$3***REMOVED***;
      var config = data ? 'toggle' : $trigger.data(***REMOVED***;
      Collapse._jQueryInterface.call($target, config***REMOVED***;
    ***REMOVED******REMOVED***;
  ***REMOVED******REMOVED***;
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$3] = Collapse._jQueryInterface;
  $__default['default'].fn[NAME$3].Constructor = Collapse;
  $__default['default'].fn[NAME$3].noConflict = function (***REMOVED*** {
    $__default['default'].fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return Collapse._jQueryInterface;
  ***REMOVED***;

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$4 = 'dropdown';
  var VERSION$4 = '4.5.3';
  var DATA_KEY$4 = 'bs.dropdown';
  var EVENT_KEY$4 = "." + DATA_KEY$4;
  var DATA_API_KEY$4 = '.data-api';
  var JQUERY_NO_CONFLICT$4 = $__default['default'].fn[NAME$4];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc***REMOVED*** key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse***REMOVED***

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE***REMOVED***;
  var EVENT_HIDE$1 = "hide" + EVENT_KEY$4;
  var EVENT_HIDDEN$1 = "hidden" + EVENT_KEY$4;
  var EVENT_SHOW$1 = "show" + EVENT_KEY$4;
  var EVENT_SHOWN$1 = "shown" + EVENT_KEY$4;
  var EVENT_CLICK = "click" + EVENT_KEY$4;
  var EVENT_CLICK_DATA_API$4 = "click" + EVENT_KEY$4 + DATA_API_KEY$4;
  var EVENT_KEYDOWN_DATA_API = "keydown" + EVENT_KEY$4 + DATA_API_KEY$4;
  var EVENT_KEYUP_DATA_API = "keyup" + EVENT_KEY$4 + DATA_API_KEY$4;
  var CLASS_NAME_DISABLED = 'disabled';
  var CLASS_NAME_SHOW$2 = 'show';
  var CLASS_NAME_DROPUP = 'dropup';
  var CLASS_NAME_DROPRIGHT = 'dropright';
  var CLASS_NAME_DROPLEFT = 'dropleft';
  var CLASS_NAME_MENURIGHT = 'dropdown-menu-right';
  var CLASS_NAME_POSITION_STATIC = 'position-static';
  var SELECTOR_DATA_TOGGLE$2 = '[data-toggle="dropdown"]';
  var SELECTOR_FORM_CHILD = '.dropdown form';
  var SELECTOR_MENU = '.dropdown-menu';
  var SELECTOR_NAVBAR_NAV = '.navbar-nav';
  var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled***REMOVED***:not(:disabled***REMOVED***';
  var PLACEMENT_TOP = 'top-start';
  var PLACEMENT_TOPEND = 'top-end';
  var PLACEMENT_BOTTOM = 'bottom-start';
  var PLACEMENT_BOTTOMEND = 'bottom-end';
  var PLACEMENT_RIGHT = 'right-start';
  var PLACEMENT_LEFT = 'left-start';
  var Default$2 = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null
  ***REMOVED***;
  var DefaultType$2 = {
    offset: '(number|string|function***REMOVED***',
    flip: 'boolean',
    boundary: '(string|element***REMOVED***',
    reference: '(string|element***REMOVED***',
    display: 'string',
    popperConfig: '(null|object***REMOVED***'
  ***REMOVED***;
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown = /*#__PURE__*/function (***REMOVED*** {
    function Dropdown(element, config***REMOVED*** {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config***REMOVED***;
      this._menu = this._getMenuElement(***REMOVED***;
      this._inNavbar = this._detectNavbar(***REMOVED***;
      this._addEventListeners(***REMOVED***;
    ***REMOVED*** // Getters

    var _proto = Dropdown.prototype;

    // Public
    _proto.toggle = function toggle(***REMOVED*** {
      if (this._element.disabled || $__default['default'](this._element***REMOVED***.hasClass(CLASS_NAME_DISABLED***REMOVED******REMOVED*** {
        return;
      ***REMOVED***
      var isActive = $__default['default'](this._menu***REMOVED***.hasClass(CLASS_NAME_SHOW$2***REMOVED***;
      Dropdown._clearMenus(***REMOVED***;
      if (isActive***REMOVED*** {
        return;
      ***REMOVED***
      this.show(true***REMOVED***;
    ***REMOVED***;
    _proto.show = function show(usePopper***REMOVED*** {
      if (usePopper === void 0***REMOVED*** {
        usePopper = false;
      ***REMOVED***
      if (this._element.disabled || $__default['default'](this._element***REMOVED***.hasClass(CLASS_NAME_DISABLED***REMOVED*** || $__default['default'](this._menu***REMOVED***.hasClass(CLASS_NAME_SHOW$2***REMOVED******REMOVED*** {
        return;
      ***REMOVED***
      var relatedTarget = {
        relatedTarget: this._element
      ***REMOVED***;
      var showEvent = $__default['default'].Event(EVENT_SHOW$1, relatedTarget***REMOVED***;
      var parent = Dropdown._getParentFromElement(this._element***REMOVED***;
      $__default['default'](parent***REMOVED***.trigger(showEvent***REMOVED***;
      if (showEvent.isDefaultPrevented(***REMOVED******REMOVED*** {
        return;
      ***REMOVED*** // Disable totally Popper.js for Dropdown in Navbar

      if (!this._inNavbar && usePopper***REMOVED*** {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper__default['default'] === 'undefined'***REMOVED*** {
          throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/***REMOVED***'***REMOVED***;
        ***REMOVED***
        var referenceElement = this._element;
        if (this._config.reference === 'parent'***REMOVED*** {
          referenceElement = parent;
        ***REMOVED*** else if (Util.isElement(this._config.reference***REMOVED******REMOVED*** {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined'***REMOVED*** {
            referenceElement = this._config.reference[0];
          ***REMOVED***
        ***REMOVED*** // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251

        if (this._config.boundary !== 'scrollParent'***REMOVED*** {
          $__default['default'](parent***REMOVED***.addClass(CLASS_NAME_POSITION_STATIC***REMOVED***;
        ***REMOVED***
        this._popper = new Popper__default['default'](referenceElement, this._menu, this._getPopperConfig(***REMOVED******REMOVED***;
      ***REMOVED*** // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

      if ('ontouchstart' in document.documentElement && $__default['default'](parent***REMOVED***.closest(SELECTOR_NAVBAR_NAV***REMOVED***.length === 0***REMOVED*** {
        $__default['default'](document.body***REMOVED***.children(***REMOVED***.on('mouseover', null, $__default['default'].noop***REMOVED***;
      ***REMOVED***
      this._element.focus(***REMOVED***;
      this._element.setAttribute('aria-expanded', true***REMOVED***;
      $__default['default'](this._menu***REMOVED***.toggleClass(CLASS_NAME_SHOW$2***REMOVED***;
      $__default['default'](parent***REMOVED***.toggleClass(CLASS_NAME_SHOW$2***REMOVED***.trigger($__default['default'].Event(EVENT_SHOWN$1, relatedTarget***REMOVED******REMOVED***;
    ***REMOVED***;
    _proto.hide = function hide(***REMOVED*** {
      if (this._element.disabled || $__default['default'](this._element***REMOVED***.hasClass(CLASS_NAME_DISABLED***REMOVED*** || !$__default['default'](this._menu***REMOVED***.hasClass(CLASS_NAME_SHOW$2***REMOVED******REMOVED*** {
        return;
      ***REMOVED***
      var relatedTarget = {
        relatedTarget: this._element
      ***REMOVED***;
      var hideEvent = $__default['default'].Event(EVENT_HIDE$1, relatedTarget***REMOVED***;
      var parent = Dropdown._getParentFromElement(this._element***REMOVED***;
      $__default['default'](parent***REMOVED***.trigger(hideEvent***REMOVED***;
      if (hideEvent.isDefaultPrevented(***REMOVED******REMOVED*** {
        return;
      ***REMOVED***
      if (this._popper***REMOVED*** {
        this._popper.destroy(***REMOVED***;
      ***REMOVED***
      $__default['default'](this._menu***REMOVED***.toggleClass(CLASS_NAME_SHOW$2***REMOVED***;
      $__default['default'](parent***REMOVED***.toggleClass(CLASS_NAME_SHOW$2***REMOVED***.trigger($__default['default'].Event(EVENT_HIDDEN$1, relatedTarget***REMOVED******REMOVED***;
    ***REMOVED***;
    _proto.dispose = function dispose(***REMOVED*** {
      $__default['default'].removeData(this._element, DATA_KEY$4***REMOVED***;
      $__default['default'](this._element***REMOVED***.off(EVENT_KEY$4***REMOVED***;
      this._element = null;
      this._menu = null;
      if (this._popper !== null***REMOVED*** {
        this._popper.destroy(***REMOVED***;
        this._popper = null;
      ***REMOVED***
    ***REMOVED***;
    _proto.update = function update(***REMOVED*** {
      this._inNavbar = this._detectNavbar(***REMOVED***;
      if (this._popper !== null***REMOVED*** {
        this._popper.scheduleUpdate(***REMOVED***;
      ***REMOVED***
    ***REMOVED*** // Private
    ;

    _proto._addEventListeners = function _addEventListeners(***REMOVED*** {
      var _this = this;
      $__default['default'](this._element***REMOVED***.on(EVENT_CLICK, function (event***REMOVED*** {
        event.preventDefault(***REMOVED***;
        event.stopPropagation(***REMOVED***;
        _this.toggle(***REMOVED***;
      ***REMOVED******REMOVED***;
    ***REMOVED***;
    _proto._getConfig = function _getConfig(config***REMOVED*** {
      config = _extends({***REMOVED***, this.constructor.Default, $__default['default'](this._element***REMOVED***.data(***REMOVED***, config***REMOVED***;
      Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType***REMOVED***;
      return config;
    ***REMOVED***;
    _proto._getMenuElement = function _getMenuElement(***REMOVED*** {
      if (!this._menu***REMOVED*** {
        var parent = Dropdown._getParentFromElement(this._element***REMOVED***;
        if (parent***REMOVED*** {
          this._menu = parent.querySelector(SELECTOR_MENU***REMOVED***;
        ***REMOVED***
      ***REMOVED***
      return this._menu;
    ***REMOVED***;
    _proto._getPlacement = function _getPlacement(***REMOVED*** {
      var $parentDropdown = $__default['default'](this._element.parentNode***REMOVED***;
      var placement = PLACEMENT_BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(CLASS_NAME_DROPUP***REMOVED******REMOVED*** {
        placement = $__default['default'](this._menu***REMOVED***.hasClass(CLASS_NAME_MENURIGHT***REMOVED*** ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      ***REMOVED*** else if ($parentDropdown.hasClass(CLASS_NAME_DROPRIGHT***REMOVED******REMOVED*** {
        placement = PLACEMENT_RIGHT;
      ***REMOVED*** else if ($parentDropdown.hasClass(CLASS_NAME_DROPLEFT***REMOVED******REMOVED*** {
        placement = PLACEMENT_LEFT;
      ***REMOVED*** else if ($__default['default'](this._menu***REMOVED***.hasClass(CLASS_NAME_MENURIGHT***REMOVED******REMOVED*** {
        placement = PLACEMENT_BOTTOMEND;
      ***REMOVED***
      return placement;
    ***REMOVED***;
    _proto._detectNavbar = function _detectNavbar(***REMOVED*** {
      return $__default['default'](this._element***REMOVED***.closest('.navbar'***REMOVED***.length > 0;
    ***REMOVED***;
    _proto._getOffset = function _getOffset(***REMOVED*** {
      var _this2 = this;
      var offset = {***REMOVED***;
      if (typeof this._config.offset === 'function'***REMOVED*** {
        offset.fn = function (data***REMOVED*** {
          data.offsets = _extends({***REMOVED***, data.offsets, _this2._config.offset(data.offsets, _this2._element***REMOVED*** || {***REMOVED******REMOVED***;
          return data;
        ***REMOVED***;
      ***REMOVED*** else {
        offset.offset = this._config.offset;
      ***REMOVED***
      return offset;
    ***REMOVED***;
    _proto._getPopperConfig = function _getPopperConfig(***REMOVED*** {
      var popperConfig = {
        placement: this._getPlacement(***REMOVED***,
        modifiers: {
          offset: this._getOffset(***REMOVED***,
          flip: {
            enabled: this._config.flip
          ***REMOVED***,
          preventOverflow: {
            boundariesElement: this._config.boundary
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***; // Disable Popper.js if we have a static display

      if (this._config.display === 'static'***REMOVED*** {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        ***REMOVED***;
      ***REMOVED***
      return _extends({***REMOVED***, popperConfig, this._config.popperConfig***REMOVED***;
    ***REMOVED*** // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config***REMOVED*** {
      return this.each(function (***REMOVED*** {
        var data = $__default['default'](this***REMOVED***.data(DATA_KEY$4***REMOVED***;
        var _config = typeof config === 'object' ? config : null;
        if (!data***REMOVED*** {
          data = new Dropdown(this, _config***REMOVED***;
          $__default['default'](this***REMOVED***.data(DATA_KEY$4, data***REMOVED***;
        ***REMOVED***
        if (typeof config === 'string'***REMOVED*** {
          if (typeof data[config] === 'undefined'***REMOVED*** {
            throw new TypeError("No method named \"" + config + "\""***REMOVED***;
          ***REMOVED***
          data[config](***REMOVED***;
        ***REMOVED***
      ***REMOVED******REMOVED***;
    ***REMOVED***;
    Dropdown._clearMenus = function _clearMenus(event***REMOVED*** {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE***REMOVED******REMOVED*** {
        return;
      ***REMOVED***
      var toggles = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$2***REMOVED******REMOVED***;
      for (var i = 0, len = toggles.length; i < len; i++***REMOVED*** {
        var parent = Dropdown._getParentFromElement(toggles[i]***REMOVED***;
        var context = $__default['default'](toggles[i]***REMOVED***.data(DATA_KEY$4***REMOVED***;
        var relatedTarget = {
          relatedTarget: toggles[i]
        ***REMOVED***;
        if (event && event.type === 'click'***REMOVED*** {
          relatedTarget.clickEvent = event;
        ***REMOVED***
        if (!context***REMOVED*** {
          continue;
        ***REMOVED***
        var dropdownMenu = context._menu;
        if (!$__default['default'](parent***REMOVED***.hasClass(CLASS_NAME_SHOW$2***REMOVED******REMOVED*** {
          continue;
        ***REMOVED***
        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName***REMOVED*** || event.type === 'keyup' && event.which === TAB_KEYCODE***REMOVED*** && $__default['default'].contains(parent, event.target***REMOVED******REMOVED*** {
          continue;
        ***REMOVED***
        var hideEvent = $__default['default'].Event(EVENT_HIDE$1, relatedTarget***REMOVED***;
        $__default['default'](parent***REMOVED***.trigger(hideEvent***REMOVED***;
        if (hideEvent.isDefaultPrevented(***REMOVED******REMOVED*** {
          continue;
        ***REMOVED*** // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support

        if ('ontouchstart' in document.documentElement***REMOVED*** {
          $__default['default'](document.body***REMOVED***.children(***REMOVED***.off('mouseover', null, $__default['default'].noop***REMOVED***;
        ***REMOVED***
        toggles[i].setAttribute('aria-expanded', 'false'***REMOVED***;
        if (context._popper***REMOVED*** {
          context._popper.destroy(***REMOVED***;
        ***REMOVED***
        $__default['default'](dropdownMenu***REMOVED***.removeClass(CLASS_NAME_SHOW$2***REMOVED***;
        $__default['default'](parent***REMOVED***.removeClass(CLASS_NAME_SHOW$2***REMOVED***.trigger($__default['default'].Event(EVENT_HIDDEN$1, relatedTarget***REMOVED******REMOVED***;
      ***REMOVED***
    ***REMOVED***;
    Dropdown._getParentFromElement = function _getParentFromElement(element***REMOVED*** {
      var parent;
      var selector = Util.getSelectorFromElement(element***REMOVED***;
      if (selector***REMOVED*** {
        parent = document.querySelector(selector***REMOVED***;
      ***REMOVED***
      return parent || element.parentNode;
    ***REMOVED*** // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event***REMOVED*** {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName***REMOVED*** ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $__default['default'](event.target***REMOVED***.closest(SELECTOR_MENU***REMOVED***.length***REMOVED*** : !REGEXP_KEYDOWN.test(event.which***REMOVED******REMOVED*** {
        return;
      ***REMOVED***
      if (this.disabled || $__default['default'](this***REMOVED***.hasClass(CLASS_NAME_DISABLED***REMOVED******REMOVED*** {
        return;
      ***REMOVED***
      var parent = Dropdown._getParentFromElement(this***REMOVED***;
      var isActive = $__default['default'](parent***REMOVED***.hasClass(CLASS_NAME_SHOW$2***REMOVED***;
      if (!isActive && event.which === ESCAPE_KEYCODE***REMOVED*** {
        return;
      ***REMOVED***
      event.preventDefault(***REMOVED***;
      event.stopPropagation(***REMOVED***;
      if (!isActive || event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE***REMOVED*** {
        if (event.which === ESCAPE_KEYCODE***REMOVED*** {
          $__default['default'](parent.querySelector(SELECTOR_DATA_TOGGLE$2***REMOVED******REMOVED***.trigger('focus'***REMOVED***;
        ***REMOVED***
        $__default['default'](this***REMOVED***.trigger('click'***REMOVED***;
        return;
      ***REMOVED***
      var items = [].slice.call(parent.querySelectorAll(SELECTOR_VISIBLE_ITEMS***REMOVED******REMOVED***.filter(function (item***REMOVED*** {
        return $__default['default'](item***REMOVED***.is(':visible'***REMOVED***;
      ***REMOVED******REMOVED***;
      if (items.length === 0***REMOVED*** {
        return;
      ***REMOVED***
      var index = items.indexOf(event.target***REMOVED***;
      if (event.which === ARROW_UP_KEYCODE && index > 0***REMOVED*** {
        // Up
        index--;
      ***REMOVED***
      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1***REMOVED*** {
        // Down
        index++;
      ***REMOVED***
      if (index < 0***REMOVED*** {
        index = 0;
      ***REMOVED***
      items[index].focus(***REMOVED***;
    ***REMOVED***;
    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get(***REMOVED*** {
        return VERSION$4;
      ***REMOVED***
    ***REMOVED***, {
      key: "Default",
      get: function get(***REMOVED*** {
        return Default$2;
      ***REMOVED***
    ***REMOVED***, {
      key: "DefaultType",
      get: function get(***REMOVED*** {
        return DefaultType$2;
      ***REMOVED***
    ***REMOVED***]***REMOVED***;
    return Dropdown;
  ***REMOVED***(***REMOVED***;
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $__default['default'](document***REMOVED***.on(EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$2, Dropdown._dataApiKeydownHandler***REMOVED***.on(EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown._dataApiKeydownHandler***REMOVED***.on(EVENT_CLICK_DATA_API$4 + " " + EVENT_KEYUP_DATA_API, Dropdown._clearMenus***REMOVED***.on(EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$2, function (event***REMOVED*** {
    event.preventDefault(***REMOVED***;
    event.stopPropagation(***REMOVED***;
    Dropdown._jQueryInterface.call($__default['default'](this***REMOVED***, 'toggle'***REMOVED***;
  ***REMOVED******REMOVED***.on(EVENT_CLICK_DATA_API$4, SELECTOR_FORM_CHILD, function (e***REMOVED*** {
    e.stopPropagation(***REMOVED***;
  ***REMOVED******REMOVED***;
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$4] = Dropdown._jQueryInterface;
  $__default['default'].fn[NAME$4].Constructor = Dropdown;
  $__default['default'].fn[NAME$4].noConflict = function (***REMOVED*** {
    $__default['default'].fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return Dropdown._jQueryInterface;
  ***REMOVED***;

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$5 = 'modal';
  var VERSION$5 = '4.5.3';
  var DATA_KEY$5 = 'bs.modal';
  var EVENT_KEY$5 = "." + DATA_KEY$5;
  var DATA_API_KEY$5 = '.data-api';
  var JQUERY_NO_CONFLICT$5 = $__default['default'].fn[NAME$5];
  var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc***REMOVED*** key

  var Default$3 = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  ***REMOVED***;
  var DefaultType$3 = {
    backdrop: '(boolean|string***REMOVED***',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  ***REMOVED***;
  var EVENT_HIDE$2 = "hide" + EVENT_KEY$5;
  var EVENT_HIDE_PREVENTED = "hidePrevented" + EVENT_KEY$5;
  var EVENT_HIDDEN$2 = "hidden" + EVENT_KEY$5;
  var EVENT_SHOW$2 = "show" + EVENT_KEY$5;
  var EVENT_SHOWN$2 = "shown" + EVENT_KEY$5;
  var EVENT_FOCUSIN = "focusin" + EVENT_KEY$5;
  var EVENT_RESIZE = "resize" + EVENT_KEY$5;
  var EVENT_CLICK_DISMISS = "click.dismiss" + EVENT_KEY$5;
  var EVENT_KEYDOWN_DISMISS = "keydown.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss" + EVENT_KEY$5;
  var EVENT_CLICK_DATA_API$5 = "click" + EVENT_KEY$5 + DATA_API_KEY$5;
  var CLASS_NAME_SCROLLABLE = 'modal-dialog-scrollable';
  var CLASS_NAME_SCROLLBAR_MEASURER = 'modal-scrollbar-measure';
  var CLASS_NAME_BACKDROP = 'modal-backdrop';
  var CLASS_NAME_OPEN = 'modal-open';
  var CLASS_NAME_FADE$1 = 'fade';
  var CLASS_NAME_SHOW$3 = 'show';
  var CLASS_NAME_STATIC = 'modal-static';
  var SELECTOR_DIALOG = '.modal-dialog';
  var SELECTOR_MODAL_BODY = '.modal-body';
  var SELECTOR_DATA_TOGGLE$3 = '[data-toggle="modal"]';
  var SELECTOR_DATA_DISMISS = '[data-dismiss="modal"]';
  var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  var SELECTOR_STICKY_CONTENT = '.sticky-top';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal = /*#__PURE__*/function (***REMOVED*** {
    function Modal(element, config***REMOVED*** {
      this._config = this._getConfig(config***REMOVED***;
      this._element = element;
      this._dialog = element.querySelector(SELECTOR_DIALOG***REMOVED***;
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    ***REMOVED*** // Getters

    var _proto = Modal.prototype;

    // Public
    _proto.toggle = function toggle(relatedTarget***REMOVED*** {
      return this._isShown ? this.hide(***REMOVED*** : this.show(relatedTarget***REMOVED***;
    ***REMOVED***;
    _proto.show = function show(relatedTarget***REMOVED*** {
      var _this = this;
      if (this._isShown || this._isTransitioning***REMOVED*** {
        return;
      ***REMOVED***
      if ($__default['default'](this._element***REMOVED***.hasClass(CLASS_NAME_FADE$1***REMOVED******REMOVED*** {
        this._isTransitioning = true;
      ***REMOVED***
      var showEvent = $__default['default'].Event(EVENT_SHOW$2, {
        relatedTarget: relatedTarget
      ***REMOVED******REMOVED***;
      $__default['default'](this._element***REMOVED***.trigger(showEvent***REMOVED***;
      if (this._isShown || showEvent.isDefaultPrevented(***REMOVED******REMOVED*** {
        return;
      ***REMOVED***
      this._isShown = true;
      this._checkScrollbar(***REMOVED***;
      this._setScrollbar(***REMOVED***;
      this._adjustDialog(***REMOVED***;
      this._setEscapeEvent(***REMOVED***;
      this._setResizeEvent(***REMOVED***;
      $__default['default'](this._element***REMOVED***.on(EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function (event***REMOVED*** {
        return _this.hide(event***REMOVED***;
      ***REMOVED******REMOVED***;
      $__default['default'](this._dialog***REMOVED***.on(EVENT_MOUSEDOWN_DISMISS, function (***REMOVED*** {
        $__default['default'](_this._element***REMOVED***.one(EVENT_MOUSEUP_DISMISS, function (event***REMOVED*** {
          if ($__default['default'](event.target***REMOVED***.is(_this._element***REMOVED******REMOVED*** {
            _this._ignoreBackdropClick = true;
          ***REMOVED***
        ***REMOVED******REMOVED***;
      ***REMOVED******REMOVED***;
      this._showBackdrop(function (***REMOVED*** {
        return _this._showElement(relatedTarget***REMOVED***;
      ***REMOVED******REMOVED***;
    ***REMOVED***;
    _proto.hide = function hide(event***REMOVED*** {
      var _this2 = this;
      if (event***REMOVED*** {
        event.preventDefault(***REMOVED***;
      ***REMOVED***
      if (!this._isShown || this._isTransitioning***REMOVED*** {
        return;
      ***REMOVED***
      var hideEvent = $__default['default'].Event(EVENT_HIDE$2***REMOVED***;
      $__default['default'](this._element***REMOVED***.trigger(hideEvent***REMOVED***;
      if (!this._isShown || hideEvent.isDefaultPrevented(***REMOVED******REMOVED*** {
        return;
      ***REMOVED***
      this._isShown = false;
      var transition = $__default['default'](this._element***REMOVED***.hasClass(CLASS_NAME_FADE$1***REMOVED***;
      if (transition***REMOVED*** {
        this._isTransitioning = true;
      ***REMOVED***
      this._setEscapeEvent(***REMOVED***;
      this._setResizeEvent(***REMOVED***;
      $__default['default'](document***REMOVED***.off(EVENT_FOCUSIN***REMOVED***;
      $__default['default'](this._element***REMOVED***.removeClass(CLASS_NAME_SHOW$3***REMOVED***;
      $__default['default'](this._element***REMOVED***.off(EVENT_CLICK_DISMISS***REMOVED***;
      $__default['default'](this._dialog***REMOVED***.off(EVENT_MOUSEDOWN_DISMISS***REMOVED***;
      if (transition***REMOVED*** {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element***REMOVED***;
        $__default['default'](this._element***REMOVED***.one(Util.TRANSITION_END, function (event***REMOVED*** {
          return _this2._hideModal(event***REMOVED***;
        ***REMOVED******REMOVED***.emulateTransitionEnd(transitionDuration***REMOVED***;
      ***REMOVED*** else {
        this._hideModal(***REMOVED***;
      ***REMOVED***
    ***REMOVED***;
    _proto.dispose = function dispose(***REMOVED*** {
      [window, this._element, this._dialog].forEach(function (htmlElement***REMOVED*** {
        return $__default['default'](htmlElement***REMOVED***.off(EVENT_KEY$5***REMOVED***;
      ***REMOVED******REMOVED***;
      /**
       * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `EVENT_CLICK_DATA_API` event that should remain
       */

      $__default['default'](document***REMOVED***.off(EVENT_FOCUSIN***REMOVED***;
      $__default['default'].removeData(this._element, DATA_KEY$5***REMOVED***;
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    ***REMOVED***;
    _proto.handleUpdate = function handleUpdate(***REMOVED*** {
      this._adjustDialog(***REMOVED***;
    ***REMOVED*** // Private
    ;

    _proto._getConfig = function _getConfig(config***REMOVED*** {
      config = _extends({***REMOVED***, Default$3, config***REMOVED***;
      Util.typeCheckConfig(NAME$5, config, DefaultType$3***REMOVED***;
      return config;
    ***REMOVED***;
    _proto._triggerBackdropTransition = function _triggerBackdropTransition(***REMOVED*** {
      var _this3 = this;
      if (this._config.backdrop === 'static'***REMOVED*** {
        var hideEventPrevented = $__default['default'].Event(EVENT_HIDE_PREVENTED***REMOVED***;
        $__default['default'](this._element***REMOVED***.trigger(hideEventPrevented***REMOVED***;
        if (hideEventPrevented.isDefaultPrevented(***REMOVED******REMOVED*** {
          return;
        ***REMOVED***
        var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
        if (!isModalOverflowing***REMOVED*** {
          this._element.style.overflowY = 'hidden';
        ***REMOVED***
        this._element.classList.add(CLASS_NAME_STATIC***REMOVED***;
        var modalTransitionDuration = Util.getTransitionDurationFromElement(this._dialog***REMOVED***;
        $__default['default'](this._element***REMOVED***.off(Util.TRANSITION_END***REMOVED***;
        $__default['default'](this._element***REMOVED***.one(Util.TRANSITION_END, function (***REMOVED*** {
          _this3._element.classList.remove(CLASS_NAME_STATIC***REMOVED***;
          if (!isModalOverflowing***REMOVED*** {
            $__default['default'](_this3._element***REMOVED***.one(Util.TRANSITION_END, function (***REMOVED*** {
              _this3._element.style.overflowY = '';
            ***REMOVED******REMOVED***.emulateTransitionEnd(_this3._element, modalTransitionDuration***REMOVED***;
          ***REMOVED***
        ***REMOVED******REMOVED***.emulateTransitionEnd(modalTransitionDuration***REMOVED***;
        this._element.focus(***REMOVED***;
      ***REMOVED*** else {
        this.hide(***REMOVED***;
      ***REMOVED***
    ***REMOVED***;
    _proto._showElement = function _showElement(relatedTarget***REMOVED*** {
      var _this4 = this;
      var transition = $__default['default'](this._element***REMOVED***.hasClass(CLASS_NAME_FADE$1***REMOVED***;
      var modalBody = this._dialog ? this._dialog.querySelector(SELECTOR_MODAL_BODY***REMOVED*** : null;
      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE***REMOVED*** {
        // Don't move modal's DOM position
        document.body.appendChild(this._element***REMOVED***;
      ***REMOVED***
      this._element.style.display = 'block';
      this._element.removeAttribute('aria-hidden'***REMOVED***;
      this._element.setAttribute('aria-modal', true***REMOVED***;
      this._element.setAttribute('role', 'dialog'***REMOVED***;
      if ($__default['default'](this._dialog***REMOVED***.hasClass(CLASS_NAME_SCROLLABLE***REMOVED*** && modalBody***REMOVED*** {
        modalBody.scrollTop = 0;
      ***REMOVED*** else {
        this._element.scrollTop = 0;
      ***REMOVED***
      if (transition***REMOVED*** {
        Util.reflow(this._element***REMOVED***;
      ***REMOVED***
      $__default['default'](this._element***REMOVED***.addClass(CLASS_NAME_SHOW$3***REMOVED***;
      if (this._config.focus***REMOVED*** {
        this._enforceFocus(***REMOVED***;
      ***REMOVED***
      var shownEvent = $__default['default'].Event(EVENT_SHOWN$2, {
        relatedTarget: relatedTarget
      ***REMOVED******REMOVED***;
      var transitionComplete = function transitionComplete(***REMOVED*** {
        if (_this4._config.focus***REMOVED*** {
          _this4._element.focus(***REMOVED***;
        ***REMOVED***
        _this4._isTransitioning = false;
        $__default['default'](_this4._element***REMOVED***.trigger(shownEvent***REMOVED***;
      ***REMOVED***;
      if (transition***REMOVED*** {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog***REMOVED***;
        $__default['default'](this._dialog***REMOVED***.one(Util.TRANSITION_END, transitionComplete***REMOVED***.emulateTransitionEnd(transitionDuration***REMOVED***;
      ***REMOVED*** else {
        transitionComplete(***REMOVED***;
      ***REMOVED***
    ***REMOVED***;
    _proto._enforceFocus = function _enforceFocus(***REMOVED*** {
      var _this5 = this;
      $__default['default'](document***REMOVED***.off(EVENT_FOCUSIN***REMOVED*** // Guard against infinite focus loop
      .on(EVENT_FOCUSIN, function (event***REMOVED*** {
        if (document !== event.target && _this5._element !== event.target && $__default['default'](_this5._element***REMOVED***.has(event.target***REMOVED***.length === 0***REMOVED*** {
          _this5._element.focus(***REMOVED***;
        ***REMOVED***
      ***REMOVED******REMOVED***;
    ***REMOVED***;
    _proto._setEscapeEvent = function _setEscapeEvent(***REMOVED*** {
      var _this6 = this;
      if (this._isShown***REMOVED*** {
        $__default['default'](this._element***REMOVED***.on(EVENT_KEYDOWN_DISMISS, function (event***REMOVED*** {
          if (_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1***REMOVED*** {
            event.preventDefault(***REMOVED***;
            _this6.hide(***REMOVED***;
          ***REMOVED*** else if (!_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1***REMOVED*** {
            _this6._triggerBackdropTransition(***REMOVED***;
          ***REMOVED***
        ***REMOVED******REMOVED***;
      ***REMOVED*** else if (!this._isShown***REMOVED*** {
        $__default['default'](this._element***REMOVED***.off(EVENT_KEYDOWN_DISMISS***REMOVED***;
      ***REMOVED***
    ***REMOVED***;
    _proto._setResizeEvent = function _setResizeEvent(***REMOVED*** {
      var _this7 = this;
      if (this._isShown***REMOVED*** {
        $__default['default'](window***REMOVED***.on(EVENT_RESIZE, function (event***REMOVED*** {
          return _this7.handleUpdate(event***REMOVED***;
        ***REMOVED******REMOVED***;
      ***REMOVED*** else {
        $__default['default'](window***REMOVED***.off(EVENT_RESIZE***REMOVED***;
      ***REMOVED***
    ***REMOVED***;
    _proto._hideModal = function _hideModal(***REMOVED*** {
      var _this8 = this;
      this._element.style.display = 'none';
      this._element.setAttribute('aria-hidden', true***REMOVED***;
      this._element.removeAttribute('aria-modal'***REMOVED***;
      this._element.removeAttribute('role'***REMOVED***;
      this._isTransitioning = false;
      this._showBackdrop(function (***REMOVED*** {
        $__default['default'](document.body***REMOVED***.removeClass(CLASS_NAME_OPEN***REMOVED***;
        _this8._resetAdjustments(***REMOVED***;
        _this8._resetScrollbar(***REMOVED***;
        $__default['default'](_this8._element***REMOVED***.trigger(EVENT_HIDDEN$2***REMOVED***;
      ***REMOVED******REMOVED***;
    ***REMOVED***;
    _proto._removeBackdrop = function _removeBackdrop(***REMOVED*** {
      if (this._backdrop***REMOVED*** {
        $__default['default'](this._backdrop***REMOVED***.remove(***REMOVED***;
        this._backdrop = null;
      ***REMOVED***
    ***REMOVED***;
    _proto._showBackdrop = function _showBackdrop(callback***REMOVED*** {
      var _this9 = this;
      var animate = $__default['default'](this._element***REMOVED***.hasClass(CLASS_NAME_FADE$1***REMOVED*** ? CLASS_NAME_FADE$1 : '';
      if (this._isShown && this._config.backdrop***REMOVED*** {
        this._backdrop = document.createElement('div'***REMOVED***;
        this._backdrop.className = CLASS_NAME_BACKDROP;
        if (animate***REMOVED*** {
          this._backdrop.classList.add(animate***REMOVED***;
        ***REMOVED***
        $__default['default'](this._backdrop***REMOVED***.appendTo(document.body***REMOVED***;
        $__default['default'](this._element***REMOVED***.on(EVENT_CLICK_DISMISS, function (event***REMOVED*** {
          if (_this9._ignoreBackdropClick***REMOVED*** {
            _this9._ignoreBackdropClick = false;
            return;
          ***REMOVED***
          if (event.target !== event.currentTarget***REMOVED*** {
            return;
          ***REMOVED***
          _this9._triggerBackdropTransition(***REMOVED***;
        ***REMOVED******REMOVED***;
        if (animate***REMOVED*** {
          Util.reflow(this._backdrop***REMOVED***;
        ***REMOVED***
        $__default['default'](this._backdrop***REMOVED***.addClass(CLASS_NAME_SHOW$3***REMOVED***;
        if (!callback***REMOVED*** {
          return;
        ***REMOVED***
        if (!animate***REMOVED*** {
          callback(***REMOVED***;
          return;
        ***REMOVED***
        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop***REMOVED***;
        $__default['default'](this._backdrop***REMOVED***.one(Util.TRANSITION_END, callback***REMOVED***.emulateTransitionEnd(backdropTransitionDuration***REMOVED***;
      ***REMOVED*** else if (!this._isShown && this._backdrop***REMOVED*** {
        $__default['default'](this._backdrop***REMOVED***.removeClass(CLASS_NAME_SHOW$3***REMOVED***;
        var callbackRemove = function callbackRemove(***REMOVED*** {
          _this9._removeBackdrop(***REMOVED***;
          if (callback***REMOVED*** {
            callback(***REMOVED***;
          ***REMOVED***
        ***REMOVED***;
        if ($__default['default'](this._element***REMOVED***.hasClass(CLASS_NAME_FADE$1***REMOVED******REMOVED*** {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop***REMOVED***;
          $__default['default'](this._backdrop***REMOVED***.one(Util.TRANSITION_END, callbackRemove***REMOVED***.emulateTransitionEnd(_backdropTransitionDuration***REMOVED***;
        ***REMOVED*** else {
          callbackRemove(***REMOVED***;
        ***REMOVED***
      ***REMOVED*** else if (callback***REMOVED*** {
        callback(***REMOVED***;
      ***REMOVED***
    ***REMOVED*** // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat***REMOVED***: these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog(***REMOVED*** {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      if (!this._isBodyOverflowing && isModalOverflowing***REMOVED*** {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      ***REMOVED***
      if (this._isBodyOverflowing && !isModalOverflowing***REMOVED*** {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      ***REMOVED***
    ***REMOVED***;
    _proto._resetAdjustments = function _resetAdjustments(***REMOVED*** {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    ***REMOVED***;
    _proto._checkScrollbar = function _checkScrollbar(***REMOVED*** {
      var rect = document.body.getBoundingClientRect(***REMOVED***;
      this._isBodyOverflowing = Math.round(rect.left + rect.right***REMOVED*** < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth(***REMOVED***;
    ***REMOVED***;
    _proto._setScrollbar = function _setScrollbar(***REMOVED*** {
      var _this10 = this;
      if (this._isBodyOverflowing***REMOVED*** {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode***REMOVED***.css('padding-right'***REMOVED*** returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT***REMOVED******REMOVED***;
        var stickyContent = [].slice.call(document.querySelectorAll(SELECTOR_STICKY_CONTENT***REMOVED******REMOVED***; // Adjust fixed content padding

        $__default['default'](fixedContent***REMOVED***.each(function (index, element***REMOVED*** {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $__default['default'](element***REMOVED***.css('padding-right'***REMOVED***;
          $__default['default'](element***REMOVED***.data('padding-right', actualPadding***REMOVED***.css('padding-right', parseFloat(calculatedPadding***REMOVED*** + _this10._scrollbarWidth + "px"***REMOVED***;
        ***REMOVED******REMOVED***; // Adjust sticky content margin

        $__default['default'](stickyContent***REMOVED***.each(function (index, element***REMOVED*** {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $__default['default'](element***REMOVED***.css('margin-right'***REMOVED***;
          $__default['default'](element***REMOVED***.data('margin-right', actualMargin***REMOVED***.css('margin-right', parseFloat(calculatedMargin***REMOVED*** - _this10._scrollbarWidth + "px"***REMOVED***;
        ***REMOVED******REMOVED***; // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $__default['default'](document.body***REMOVED***.css('padding-right'***REMOVED***;
        $__default['default'](document.body***REMOVED***.data('padding-right', actualPadding***REMOVED***.css('padding-right', parseFloat(calculatedPadding***REMOVED*** + this._scrollbarWidth + "px"***REMOVED***;
      ***REMOVED***
      $__default['default'](document.body***REMOVED***.addClass(CLASS_NAME_OPEN***REMOVED***;
    ***REMOVED***;
    _proto._resetScrollbar = function _resetScrollbar(***REMOVED*** {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT***REMOVED******REMOVED***;
      $__default['default'](fixedContent***REMOVED***.each(function (index, element***REMOVED*** {
        var padding = $__default['default'](element***REMOVED***.data('padding-right'***REMOVED***;
        $__default['default'](element***REMOVED***.removeData('padding-right'***REMOVED***;
        element.style.paddingRight = padding ? padding : '';
      ***REMOVED******REMOVED***; // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + SELECTOR_STICKY_CONTENT***REMOVED******REMOVED***;
      $__default['default'](elements***REMOVED***.each(function (index, element***REMOVED*** {
        var margin = $__default['default'](element***REMOVED***.data('margin-right'***REMOVED***;
        if (typeof margin !== 'undefined'***REMOVED*** {
          $__default['default'](element***REMOVED***.css('margin-right', margin***REMOVED***.removeData('margin-right'***REMOVED***;
        ***REMOVED***
      ***REMOVED******REMOVED***; // Restore body padding

      var padding = $__default['default'](document.body***REMOVED***.data('padding-right'***REMOVED***;
      $__default['default'](document.body***REMOVED***.removeData('padding-right'***REMOVED***;
      document.body.style.paddingRight = padding ? padding : '';
    ***REMOVED***;
    _proto._getScrollbarWidth = function _getScrollbarWidth(***REMOVED*** {
      // thx d.walsh
      var scrollDiv = document.createElement('div'***REMOVED***;
      scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv***REMOVED***;
      var scrollbarWidth = scrollDiv.getBoundingClientRect(***REMOVED***.width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv***REMOVED***;
      return scrollbarWidth;
    ***REMOVED*** // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget***REMOVED*** {
      return this.each(function (***REMOVED*** {
        var data = $__default['default'](this***REMOVED***.data(DATA_KEY$5***REMOVED***;
        var _config = _extends({***REMOVED***, Default$3, $__default['default'](this***REMOVED***.data(***REMOVED***, typeof config === 'object' && config ? config : {***REMOVED******REMOVED***;
        if (!data***REMOVED*** {
          data = new Modal(this, _config***REMOVED***;
          $__default['default'](this***REMOVED***.data(DATA_KEY$5, data***REMOVED***;
        ***REMOVED***
        if (typeof config === 'string'***REMOVED*** {
          if (typeof data[config] === 'undefined'***REMOVED*** {
            throw new TypeError("No method named \"" + config + "\""***REMOVED***;
          ***REMOVED***
          data[config](relatedTarget***REMOVED***;
        ***REMOVED*** else if (_config.show***REMOVED*** {
          data.show(relatedTarget***REMOVED***;
        ***REMOVED***
      ***REMOVED******REMOVED***;
    ***REMOVED***;
    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get(***REMOVED*** {
        return VERSION$5;
      ***REMOVED***
    ***REMOVED***, {
      key: "Default",
      get: function get(***REMOVED*** {
        return Default$3;
      ***REMOVED***
    ***REMOVED***]***REMOVED***;
    return Modal;
  ***REMOVED***(***REMOVED***;
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $__default['default'](document***REMOVED***.on(EVENT_CLICK_DATA_API$5, SELECTOR_DATA_TOGGLE$3, function (event***REMOVED*** {
    var _this11 = this;
    var target;
    var selector = Util.getSelectorFromElement(this***REMOVED***;
    if (selector***REMOVED*** {
      target = document.querySelector(selector***REMOVED***;
    ***REMOVED***
    var config = $__default['default'](target***REMOVED***.data(DATA_KEY$5***REMOVED*** ? 'toggle' : _extends({***REMOVED***, $__default['default'](target***REMOVED***.data(***REMOVED***, $__default['default'](this***REMOVED***.data(***REMOVED******REMOVED***;
    if (this.tagName === 'A' || this.tagName === 'AREA'***REMOVED*** {
      event.preventDefault(***REMOVED***;
    ***REMOVED***
    var $target = $__default['default'](target***REMOVED***.one(EVENT_SHOW$2, function (showEvent***REMOVED*** {
      if (showEvent.isDefaultPrevented(***REMOVED******REMOVED*** {
        // Only register focus restorer if modal will actually get shown
        return;
      ***REMOVED***
      $target.one(EVENT_HIDDEN$2, function (***REMOVED*** {
        if ($__default['default'](_this11***REMOVED***.is(':visible'***REMOVED******REMOVED*** {
          _this11.focus(***REMOVED***;
        ***REMOVED***
      ***REMOVED******REMOVED***;
    ***REMOVED******REMOVED***;
    Modal._jQueryInterface.call($__default['default'](target***REMOVED***, config, this***REMOVED***;
  ***REMOVED******REMOVED***;
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$5] = Modal._jQueryInterface;
  $__default['default'].fn[NAME$5].Constructor = Modal;
  $__default['default'].fn[NAME$5].noConflict = function (***REMOVED*** {
    $__default['default'].fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return Modal._jQueryInterface;
  ***REMOVED***;

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.5.3***REMOVED***: tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE***REMOVED***
   * --------------------------------------------------------------------------
   */
  var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  ***REMOVED***;
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file***REMOVED***:|[^#&/:?]*(?:[#/?]|$***REMOVED******REMOVED***/gi;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp***REMOVED***|video\/(?:mpeg|mp4|ogg|webm***REMOVED***|audio\/(?:mp3|oga|ogg|opus***REMOVED******REMOVED***;base64,[\d+/a-z]+=*$/i;
  function allowedAttribute(attr, allowedAttributeList***REMOVED*** {
    var attrName = attr.nodeName.toLowerCase(***REMOVED***;
    if (allowedAttributeList.indexOf(attrName***REMOVED*** !== -1***REMOVED*** {
      if (uriAttrs.indexOf(attrName***REMOVED*** !== -1***REMOVED*** {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN***REMOVED*** || attr.nodeValue.match(DATA_URL_PATTERN***REMOVED******REMOVED***;
      ***REMOVED***
      return true;
    ***REMOVED***
    var regExp = allowedAttributeList.filter(function (attrRegex***REMOVED*** {
      return attrRegex instanceof RegExp;
    ***REMOVED******REMOVED***; // Check if a regular expression validates the attribute.

    for (var i = 0, len = regExp.length; i < len; i++***REMOVED*** {
      if (attrName.match(regExp[i]***REMOVED******REMOVED*** {
        return true;
      ***REMOVED***
    ***REMOVED***
    return false;
  ***REMOVED***
  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn***REMOVED*** {
    if (unsafeHtml.length === 0***REMOVED*** {
      return unsafeHtml;
    ***REMOVED***
    if (sanitizeFn && typeof sanitizeFn === 'function'***REMOVED*** {
      return sanitizeFn(unsafeHtml***REMOVED***;
    ***REMOVED***
    var domParser = new window.DOMParser(***REMOVED***;
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html'***REMOVED***;
    var whitelistKeys = Object.keys(whiteList***REMOVED***;
    var elements = [].slice.call(createdDocument.body.querySelectorAll('*'***REMOVED******REMOVED***;
    var _loop = function _loop(i, len***REMOVED*** {
      var el = elements[i];
      var elName = el.nodeName.toLowerCase(***REMOVED***;
      if (whitelistKeys.indexOf(el.nodeName.toLowerCase(***REMOVED******REMOVED*** === -1***REMOVED*** {
        el.parentNode.removeChild(el***REMOVED***;
        return "continue";
      ***REMOVED***
      var attributeList = [].slice.call(el.attributes***REMOVED***;
      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []***REMOVED***;
      attributeList.forEach(function (attr***REMOVED*** {
        if (!allowedAttribute(attr, whitelistedAttributes***REMOVED******REMOVED*** {
          el.removeAttribute(attr.nodeName***REMOVED***;
        ***REMOVED***
      ***REMOVED******REMOVED***;
    ***REMOVED***;
    for (var i = 0, len = elements.length; i < len; i++***REMOVED*** {
      var _ret = _loop(i***REMOVED***;
      if (_ret === "continue"***REMOVED*** continue;
    ***REMOVED***
    return createdDocument.body.innerHTML;
  ***REMOVED***

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$6 = 'tooltip';
  var VERSION$6 = '4.5.3';
  var DATA_KEY$6 = 'bs.tooltip';
  var EVENT_KEY$6 = "." + DATA_KEY$6;
  var JQUERY_NO_CONFLICT$6 = $__default['default'].fn[NAME$6];
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s***REMOVED***" + CLASS_PREFIX + "\\S+", 'g'***REMOVED***;
  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
  var DefaultType$4 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function***REMOVED***',
    trigger: 'string',
    delay: '(number|object***REMOVED***',
    html: 'boolean',
    selector: '(string|boolean***REMOVED***',
    placement: '(string|function***REMOVED***',
    offset: '(number|string|function***REMOVED***',
    container: '(string|element|boolean***REMOVED***',
    fallbackPlacement: '(string|array***REMOVED***',
    boundary: '(string|element***REMOVED***',
    sanitize: 'boolean',
    sanitizeFn: '(null|function***REMOVED***',
    whiteList: 'object',
    popperConfig: '(null|object***REMOVED***'
  ***REMOVED***;
  var AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  ***REMOVED***;
  var Default$4 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist,
    popperConfig: null
  ***REMOVED***;
  var HOVER_STATE_SHOW = 'show';
  var HOVER_STATE_OUT = 'out';
  var Event = {
    HIDE: "hide" + EVENT_KEY$6,
    HIDDEN: "hidden" + EVENT_KEY$6,
    SHOW: "show" + EVENT_KEY$6,
    SHOWN: "shown" + EVENT_KEY$6,
    INSERTED: "inserted" + EVENT_KEY$6,
    CLICK: "click" + EVENT_KEY$6,
    FOCUSIN: "focusin" + EVENT_KEY$6,
    FOCUSOUT: "focusout" + EVENT_KEY$6,
    MOUSEENTER: "mouseenter" + EVENT_KEY$6,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$6
  ***REMOVED***;
  var CLASS_NAME_FADE$2 = 'fade';
  var CLASS_NAME_SHOW$4 = 'show';
  var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  var SELECTOR_ARROW = '.arrow';
  var TRIGGER_HOVER = 'hover';
  var TRIGGER_FOCUS = 'focus';
  var TRIGGER_CLICK = 'click';
  var TRIGGER_MANUAL = 'manual';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip = /*#__PURE__*/function (***REMOVED*** {
    function Tooltip(element, config***REMOVED*** {
      if (typeof Popper__default['default'] === 'undefined'***REMOVED*** {
        throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/***REMOVED***'***REMOVED***;
      ***REMOVED*** // private

      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {***REMOVED***;
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config***REMOVED***;
      this.tip = null;
      this._setListeners(***REMOVED***;
    ***REMOVED*** // Getters

    var _proto = Tooltip.prototype;

    // Public
    _proto.enable = function enable(***REMOVED*** {
      this._isEnabled = true;
    ***REMOVED***;
    _proto.disable = function disable(***REMOVED*** {
      this._isEnabled = false;
    ***REMOVED***;
    _proto.toggleEnabled = function toggleEnabled(***REMOVED*** {
      this._isEnabled = !this._isEnabled;
    ***REMOVED***;
    _proto.toggle = function toggle(event***REMOVED*** {
      if (!this._isEnabled***REMOVED*** {
        return;
      ***REMOVED***
      if (event***REMOVED*** {
        var dataKey = this.constructor.DATA_KEY;
        var context = $__default['default'](event.currentTarget***REMOVED***.data(dataKey***REMOVED***;
        if (!context***REMOVED*** {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig(***REMOVED******REMOVED***;
          $__default['default'](event.currentTarget***REMOVED***.data(dataKey, context***REMOVED***;
        ***REMOVED***
        context._activeTrigger.click = !context._activeTrigger.click;
        if (context._isWithActiveTrigger(***REMOVED******REMOVED*** {
          context._enter(null, context***REMOVED***;
        ***REMOVED*** else {
          context._leave(null, context***REMOVED***;
        ***REMOVED***
      ***REMOVED*** else {
        if ($__default['default'](this.getTipElement(***REMOVED******REMOVED***.hasClass(CLASS_NAME_SHOW$4***REMOVED******REMOVED*** {
          this._leave(null, this***REMOVED***;
          return;
        ***REMOVED***
        this._enter(null, this***REMOVED***;
      ***REMOVED***
    ***REMOVED***;
    _proto.dispose = function dispose(***REMOVED*** {
      clearTimeout(this._timeout***REMOVED***;
      $__default['default'].removeData(this.element, this.constructor.DATA_KEY***REMOVED***;
      $__default['default'](this.element***REMOVED***.off(this.constructor.EVENT_KEY***REMOVED***;
      $__default['default'](this.element***REMOVED***.closest('.modal'***REMOVED***.off('hide.bs.modal', this._hideModalHandler***REMOVED***;
      if (this.tip***REMOVED*** {
        $__default['default'](this.tip***REMOVED***.remove(***REMOVED***;
      ***REMOVED***
      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;
      if (this._popper***REMOVED*** {
        this._popper.destroy(***REMOVED***;
      ***REMOVED***
      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    ***REMOVED***;
    _proto.show = function show(***REMOVED*** {
      var _this = this;
      if ($__default['default'](this.element***REMOVED***.css('display'***REMOVED*** === 'none'***REMOVED*** {
        throw new Error('Please use show on visible elements'***REMOVED***;
      ***REMOVED***
      var showEvent = $__default['default'].Event(this.constructor.Event.SHOW***REMOVED***;
      if (this.isWithContent(***REMOVED*** && this._isEnabled***REMOVED*** {
        $__default['default'](this.element***REMOVED***.trigger(showEvent***REMOVED***;
        var shadowRoot = Util.findShadowRoot(this.element***REMOVED***;
        var isInTheDom = $__default['default'].contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element***REMOVED***;
        if (showEvent.isDefaultPrevented(***REMOVED*** || !isInTheDom***REMOVED*** {
          return;
        ***REMOVED***
        var tip = this.getTipElement(***REMOVED***;
        var tipId = Util.getUID(this.constructor.NAME***REMOVED***;
        tip.setAttribute('id', tipId***REMOVED***;
        this.element.setAttribute('aria-describedby', tipId***REMOVED***;
        this.setContent(***REMOVED***;
        if (this.config.animation***REMOVED*** {
          $__default['default'](tip***REMOVED***.addClass(CLASS_NAME_FADE$2***REMOVED***;
        ***REMOVED***
        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element***REMOVED*** : this.config.placement;
        var attachment = this._getAttachment(placement***REMOVED***;
        this.addAttachmentClass(attachment***REMOVED***;
        var container = this._getContainer(***REMOVED***;
        $__default['default'](tip***REMOVED***.data(this.constructor.DATA_KEY, this***REMOVED***;
        if (!$__default['default'].contains(this.element.ownerDocument.documentElement, this.tip***REMOVED******REMOVED*** {
          $__default['default'](tip***REMOVED***.appendTo(container***REMOVED***;
        ***REMOVED***
        $__default['default'](this.element***REMOVED***.trigger(this.constructor.Event.INSERTED***REMOVED***;
        this._popper = new Popper__default['default'](this.element, tip, this._getPopperConfig(attachment***REMOVED******REMOVED***;
        $__default['default'](tip***REMOVED***.addClass(CLASS_NAME_SHOW$4***REMOVED***; // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement***REMOVED*** {
          $__default['default'](document.body***REMOVED***.children(***REMOVED***.on('mouseover', null, $__default['default'].noop***REMOVED***;
        ***REMOVED***
        var complete = function complete(***REMOVED*** {
          if (_this.config.animation***REMOVED*** {
            _this._fixTransition(***REMOVED***;
          ***REMOVED***
          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $__default['default'](_this.element***REMOVED***.trigger(_this.constructor.Event.SHOWN***REMOVED***;
          if (prevHoverState === HOVER_STATE_OUT***REMOVED*** {
            _this._leave(null, _this***REMOVED***;
          ***REMOVED***
        ***REMOVED***;
        if ($__default['default'](this.tip***REMOVED***.hasClass(CLASS_NAME_FADE$2***REMOVED******REMOVED*** {
          var transitionDuration = Util.getTransitionDurationFromElement(this.tip***REMOVED***;
          $__default['default'](this.tip***REMOVED***.one(Util.TRANSITION_END, complete***REMOVED***.emulateTransitionEnd(transitionDuration***REMOVED***;
        ***REMOVED*** else {
          complete(***REMOVED***;
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***;
    _proto.hide = function hide(callback***REMOVED*** {
      var _this2 = this;
      var tip = this.getTipElement(***REMOVED***;
      var hideEvent = $__default['default'].Event(this.constructor.Event.HIDE***REMOVED***;
      var complete = function complete(***REMOVED*** {
        if (_this2._hoverState !== HOVER_STATE_SHOW && tip.parentNode***REMOVED*** {
          tip.parentNode.removeChild(tip***REMOVED***;
        ***REMOVED***
        _this2._cleanTipClass(***REMOVED***;
        _this2.element.removeAttribute('aria-describedby'***REMOVED***;
        $__default['default'](_this2.element***REMOVED***.trigger(_this2.constructor.Event.HIDDEN***REMOVED***;
        if (_this2._popper !== null***REMOVED*** {
          _this2._popper.destroy(***REMOVED***;
        ***REMOVED***
        if (callback***REMOVED*** {
          callback(***REMOVED***;
        ***REMOVED***
      ***REMOVED***;
      $__default['default'](this.element***REMOVED***.trigger(hideEvent***REMOVED***;
      if (hideEvent.isDefaultPrevented(***REMOVED******REMOVED*** {
        return;
      ***REMOVED***
      $__default['default'](tip***REMOVED***.removeClass(CLASS_NAME_SHOW$4***REMOVED***; // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement***REMOVED*** {
        $__default['default'](document.body***REMOVED***.children(***REMOVED***.off('mouseover', null, $__default['default'].noop***REMOVED***;
      ***REMOVED***
      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;
      if ($__default['default'](this.tip***REMOVED***.hasClass(CLASS_NAME_FADE$2***REMOVED******REMOVED*** {
        var transitionDuration = Util.getTransitionDurationFromElement(tip***REMOVED***;
        $__default['default'](tip***REMOVED***.one(Util.TRANSITION_END, complete***REMOVED***.emulateTransitionEnd(transitionDuration***REMOVED***;
      ***REMOVED*** else {
        complete(***REMOVED***;
      ***REMOVED***
      this._hoverState = '';
    ***REMOVED***;
    _proto.update = function update(***REMOVED*** {
      if (this._popper !== null***REMOVED*** {
        this._popper.scheduleUpdate(***REMOVED***;
      ***REMOVED***
    ***REMOVED*** // Protected
    ;

    _proto.isWithContent = function isWithContent(***REMOVED*** {
      return Boolean(this.getTitle(***REMOVED******REMOVED***;
    ***REMOVED***;
    _proto.addAttachmentClass = function addAttachmentClass(attachment***REMOVED*** {
      $__default['default'](this.getTipElement(***REMOVED******REMOVED***.addClass(CLASS_PREFIX + "-" + attachment***REMOVED***;
    ***REMOVED***;
    _proto.getTipElement = function getTipElement(***REMOVED*** {
      this.tip = this.tip || $__default['default'](this.config.template***REMOVED***[0];
      return this.tip;
    ***REMOVED***;
    _proto.setContent = function setContent(***REMOVED*** {
      var tip = this.getTipElement(***REMOVED***;
      this.setElementContent($__default['default'](tip.querySelectorAll(SELECTOR_TOOLTIP_INNER***REMOVED******REMOVED***, this.getTitle(***REMOVED******REMOVED***;
      $__default['default'](tip***REMOVED***.removeClass(CLASS_NAME_FADE$2 + " " + CLASS_NAME_SHOW$4***REMOVED***;
    ***REMOVED***;
    _proto.setElementContent = function setElementContent($element, content***REMOVED*** {
      if (typeof content === 'object' && (content.nodeType || content.jquery***REMOVED******REMOVED*** {
        // Content is a DOM node or a jQuery
        if (this.config.html***REMOVED*** {
          if (!$__default['default'](content***REMOVED***.parent(***REMOVED***.is($element***REMOVED******REMOVED*** {
            $element.empty(***REMOVED***.append(content***REMOVED***;
          ***REMOVED***
        ***REMOVED*** else {
          $element.text($__default['default'](content***REMOVED***.text(***REMOVED******REMOVED***;
        ***REMOVED***
        return;
      ***REMOVED***
      if (this.config.html***REMOVED*** {
        if (this.config.sanitize***REMOVED*** {
          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn***REMOVED***;
        ***REMOVED***
        $element.html(content***REMOVED***;
      ***REMOVED*** else {
        $element.text(content***REMOVED***;
      ***REMOVED***
    ***REMOVED***;
    _proto.getTitle = function getTitle(***REMOVED*** {
      var title = this.element.getAttribute('data-original-title'***REMOVED***;
      if (!title***REMOVED*** {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element***REMOVED*** : this.config.title;
      ***REMOVED***
      return title;
    ***REMOVED*** // Private
    ;

    _proto._getPopperConfig = function _getPopperConfig(attachment***REMOVED*** {
      var _this3 = this;
      var defaultBsConfig = {
        placement: attachment,
        modifiers: {
          offset: this._getOffset(***REMOVED***,
          flip: {
            behavior: this.config.fallbackPlacement
          ***REMOVED***,
          arrow: {
            element: SELECTOR_ARROW
          ***REMOVED***,
          preventOverflow: {
            boundariesElement: this.config.boundary
          ***REMOVED***
        ***REMOVED***,
        onCreate: function onCreate(data***REMOVED*** {
          if (data.originalPlacement !== data.placement***REMOVED*** {
            _this3._handlePopperPlacementChange(data***REMOVED***;
          ***REMOVED***
        ***REMOVED***,
        onUpdate: function onUpdate(data***REMOVED*** {
          return _this3._handlePopperPlacementChange(data***REMOVED***;
        ***REMOVED***
      ***REMOVED***;
      return _extends({***REMOVED***, defaultBsConfig, this.config.popperConfig***REMOVED***;
    ***REMOVED***;
    _proto._getOffset = function _getOffset(***REMOVED*** {
      var _this4 = this;
      var offset = {***REMOVED***;
      if (typeof this.config.offset === 'function'***REMOVED*** {
        offset.fn = function (data***REMOVED*** {
          data.offsets = _extends({***REMOVED***, data.offsets, _this4.config.offset(data.offsets, _this4.element***REMOVED*** || {***REMOVED******REMOVED***;
          return data;
        ***REMOVED***;
      ***REMOVED*** else {
        offset.offset = this.config.offset;
      ***REMOVED***
      return offset;
    ***REMOVED***;
    _proto._getContainer = function _getContainer(***REMOVED*** {
      if (this.config.container === false***REMOVED*** {
        return document.body;
      ***REMOVED***
      if (Util.isElement(this.config.container***REMOVED******REMOVED*** {
        return $__default['default'](this.config.container***REMOVED***;
      ***REMOVED***
      return $__default['default'](document***REMOVED***.find(this.config.container***REMOVED***;
    ***REMOVED***;
    _proto._getAttachment = function _getAttachment(placement***REMOVED*** {
      return AttachmentMap[placement.toUpperCase(***REMOVED***];
    ***REMOVED***;
    _proto._setListeners = function _setListeners(***REMOVED*** {
      var _this5 = this;
      var triggers = this.config.trigger.split(' '***REMOVED***;
      triggers.forEach(function (trigger***REMOVED*** {
        if (trigger === 'click'***REMOVED*** {
          $__default['default'](_this5.element***REMOVED***.on(_this5.constructor.Event.CLICK, _this5.config.selector, function (event***REMOVED*** {
            return _this5.toggle(event***REMOVED***;
          ***REMOVED******REMOVED***;
        ***REMOVED*** else if (trigger !== TRIGGER_MANUAL***REMOVED*** {
          var eventIn = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
          var eventOut = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
          $__default['default'](_this5.element***REMOVED***.on(eventIn, _this5.config.selector, function (event***REMOVED*** {
            return _this5._enter(event***REMOVED***;
          ***REMOVED******REMOVED***.on(eventOut, _this5.config.selector, function (event***REMOVED*** {
            return _this5._leave(event***REMOVED***;
          ***REMOVED******REMOVED***;
        ***REMOVED***
      ***REMOVED******REMOVED***;
      this._hideModalHandler = function (***REMOVED*** {
        if (_this5.element***REMOVED*** {
          _this5.hide(***REMOVED***;
        ***REMOVED***
      ***REMOVED***;
      $__default['default'](this.element***REMOVED***.closest('.modal'***REMOVED***.on('hide.bs.modal', this._hideModalHandler***REMOVED***;
      if (this.config.selector***REMOVED*** {
        this.config = _extends({***REMOVED***, this.config, {
          trigger: 'manual',
          selector: ''
        ***REMOVED******REMOVED***;
      ***REMOVED*** else {
        this._fixTitle(***REMOVED***;
      ***REMOVED***
    ***REMOVED***;
    _proto._fixTitle = function _fixTitle(***REMOVED*** {
      var titleType = typeof this.element.getAttribute('data-original-title'***REMOVED***;
      if (this.element.getAttribute('title'***REMOVED*** || titleType !== 'string'***REMOVED*** {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title'***REMOVED*** || ''***REMOVED***;
        this.element.setAttribute('title', ''***REMOVED***;
      ***REMOVED***
    ***REMOVED***;
    _proto._enter = function _enter(event, context***REMOVED*** {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $__default['default'](event.currentTarget***REMOVED***.data(dataKey***REMOVED***;
      if (!context***REMOVED*** {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig(***REMOVED******REMOVED***;
        $__default['default'](event.currentTarget***REMOVED***.data(dataKey, context***REMOVED***;
      ***REMOVED***
      if (event***REMOVED*** {
        context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
      ***REMOVED***
      if ($__default['default'](context.getTipElement(***REMOVED******REMOVED***.hasClass(CLASS_NAME_SHOW$4***REMOVED*** || context._hoverState === HOVER_STATE_SHOW***REMOVED*** {
        context._hoverState = HOVER_STATE_SHOW;
        return;
      ***REMOVED***
      clearTimeout(context._timeout***REMOVED***;
      context._hoverState = HOVER_STATE_SHOW;
      if (!context.config.delay || !context.config.delay.show***REMOVED*** {
        context.show(***REMOVED***;
        return;
      ***REMOVED***
      context._timeout = setTimeout(function (***REMOVED*** {
        if (context._hoverState === HOVER_STATE_SHOW***REMOVED*** {
          context.show(***REMOVED***;
        ***REMOVED***
      ***REMOVED***, context.config.delay.show***REMOVED***;
    ***REMOVED***;
    _proto._leave = function _leave(event, context***REMOVED*** {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $__default['default'](event.currentTarget***REMOVED***.data(dataKey***REMOVED***;
      if (!context***REMOVED*** {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig(***REMOVED******REMOVED***;
        $__default['default'](event.currentTarget***REMOVED***.data(dataKey, context***REMOVED***;
      ***REMOVED***
      if (event***REMOVED*** {
        context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = false;
      ***REMOVED***
      if (context._isWithActiveTrigger(***REMOVED******REMOVED*** {
        return;
      ***REMOVED***
      clearTimeout(context._timeout***REMOVED***;
      context._hoverState = HOVER_STATE_OUT;
      if (!context.config.delay || !context.config.delay.hide***REMOVED*** {
        context.hide(***REMOVED***;
        return;
      ***REMOVED***
      context._timeout = setTimeout(function (***REMOVED*** {
        if (context._hoverState === HOVER_STATE_OUT***REMOVED*** {
          context.hide(***REMOVED***;
        ***REMOVED***
      ***REMOVED***, context.config.delay.hide***REMOVED***;
    ***REMOVED***;
    _proto._isWithActiveTrigger = function _isWithActiveTrigger(***REMOVED*** {
      for (var trigger in this._activeTrigger***REMOVED*** {
        if (this._activeTrigger[trigger]***REMOVED*** {
          return true;
        ***REMOVED***
      ***REMOVED***
      return false;
    ***REMOVED***;
    _proto._getConfig = function _getConfig(config***REMOVED*** {
      var dataAttributes = $__default['default'](this.element***REMOVED***.data(***REMOVED***;
      Object.keys(dataAttributes***REMOVED***.forEach(function (dataAttr***REMOVED*** {
        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr***REMOVED*** !== -1***REMOVED*** {
          delete dataAttributes[dataAttr];
        ***REMOVED***
      ***REMOVED******REMOVED***;
      config = _extends({***REMOVED***, this.constructor.Default, dataAttributes, typeof config === 'object' && config ? config : {***REMOVED******REMOVED***;
      if (typeof config.delay === 'number'***REMOVED*** {
        config.delay = {
          show: config.delay,
          hide: config.delay
        ***REMOVED***;
      ***REMOVED***
      if (typeof config.title === 'number'***REMOVED*** {
        config.title = config.title.toString(***REMOVED***;
      ***REMOVED***
      if (typeof config.content === 'number'***REMOVED*** {
        config.content = config.content.toString(***REMOVED***;
      ***REMOVED***
      Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType***REMOVED***;
      if (config.sanitize***REMOVED*** {
        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn***REMOVED***;
      ***REMOVED***
      return config;
    ***REMOVED***;
    _proto._getDelegateConfig = function _getDelegateConfig(***REMOVED*** {
      var config = {***REMOVED***;
      if (this.config***REMOVED*** {
        for (var key in this.config***REMOVED*** {
          if (this.constructor.Default[key] !== this.config[key]***REMOVED*** {
            config[key] = this.config[key];
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***
      return config;
    ***REMOVED***;
    _proto._cleanTipClass = function _cleanTipClass(***REMOVED*** {
      var $tip = $__default['default'](this.getTipElement(***REMOVED******REMOVED***;
      var tabClass = $tip.attr('class'***REMOVED***.match(BSCLS_PREFIX_REGEX***REMOVED***;
      if (tabClass !== null && tabClass.length***REMOVED*** {
        $tip.removeClass(tabClass.join(''***REMOVED******REMOVED***;
      ***REMOVED***
    ***REMOVED***;
    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData***REMOVED*** {
      this.tip = popperData.instance.popper;
      this._cleanTipClass(***REMOVED***;
      this.addAttachmentClass(this._getAttachment(popperData.placement***REMOVED******REMOVED***;
    ***REMOVED***;
    _proto._fixTransition = function _fixTransition(***REMOVED*** {
      var tip = this.getTipElement(***REMOVED***;
      var initConfigAnimation = this.config.animation;
      if (tip.getAttribute('x-placement'***REMOVED*** !== null***REMOVED*** {
        return;
      ***REMOVED***
      $__default['default'](tip***REMOVED***.removeClass(CLASS_NAME_FADE$2***REMOVED***;
      this.config.animation = false;
      this.hide(***REMOVED***;
      this.show(***REMOVED***;
      this.config.animation = initConfigAnimation;
    ***REMOVED*** // Static
    ;

    Tooltip._jQueryInterface = function _jQueryInterface(config***REMOVED*** {
      return this.each(function (***REMOVED*** {
        var $element = $__default['default'](this***REMOVED***;
        var data = $element.data(DATA_KEY$6***REMOVED***;
        var _config = typeof config === 'object' && config;
        if (!data && /dispose|hide/.test(config***REMOVED******REMOVED*** {
          return;
        ***REMOVED***
        if (!data***REMOVED*** {
          data = new Tooltip(this, _config***REMOVED***;
          $element.data(DATA_KEY$6, data***REMOVED***;
        ***REMOVED***
        if (typeof config === 'string'***REMOVED*** {
          if (typeof data[config] === 'undefined'***REMOVED*** {
            throw new TypeError("No method named \"" + config + "\""***REMOVED***;
          ***REMOVED***
          data[config](***REMOVED***;
        ***REMOVED***
      ***REMOVED******REMOVED***;
    ***REMOVED***;
    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get(***REMOVED*** {
        return VERSION$6;
      ***REMOVED***
    ***REMOVED***, {
      key: "Default",
      get: function get(***REMOVED*** {
        return Default$4;
      ***REMOVED***
    ***REMOVED***, {
      key: "NAME",
      get: function get(***REMOVED*** {
        return NAME$6;
      ***REMOVED***
    ***REMOVED***, {
      key: "DATA_KEY",
      get: function get(***REMOVED*** {
        return DATA_KEY$6;
      ***REMOVED***
    ***REMOVED***, {
      key: "Event",
      get: function get(***REMOVED*** {
        return Event;
      ***REMOVED***
    ***REMOVED***, {
      key: "EVENT_KEY",
      get: function get(***REMOVED*** {
        return EVENT_KEY$6;
      ***REMOVED***
    ***REMOVED***, {
      key: "DefaultType",
      get: function get(***REMOVED*** {
        return DefaultType$4;
      ***REMOVED***
    ***REMOVED***]***REMOVED***;
    return Tooltip;
  ***REMOVED***(***REMOVED***;
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$6] = Tooltip._jQueryInterface;
  $__default['default'].fn[NAME$6].Constructor = Tooltip;
  $__default['default'].fn[NAME$6].noConflict = function (***REMOVED*** {
    $__default['default'].fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Tooltip._jQueryInterface;
  ***REMOVED***;

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$7 = 'popover';
  var VERSION$7 = '4.5.3';
  var DATA_KEY$7 = 'bs.popover';
  var EVENT_KEY$7 = "." + DATA_KEY$7;
  var JQUERY_NO_CONFLICT$7 = $__default['default'].fn[NAME$7];
  var CLASS_PREFIX$1 = 'bs-popover';
  var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s***REMOVED***" + CLASS_PREFIX$1 + "\\S+", 'g'***REMOVED***;
  var Default$5 = _extends({***REMOVED***, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  ***REMOVED******REMOVED***;
  var DefaultType$5 = _extends({***REMOVED***, Tooltip.DefaultType, {
    content: '(string|element|function***REMOVED***'
  ***REMOVED******REMOVED***;
  var CLASS_NAME_FADE$3 = 'fade';
  var CLASS_NAME_SHOW$5 = 'show';
  var SELECTOR_TITLE = '.popover-header';
  var SELECTOR_CONTENT = '.popover-body';
  var Event$1 = {
    HIDE: "hide" + EVENT_KEY$7,
    HIDDEN: "hidden" + EVENT_KEY$7,
    SHOW: "show" + EVENT_KEY$7,
    SHOWN: "shown" + EVENT_KEY$7,
    INSERTED: "inserted" + EVENT_KEY$7,
    CLICK: "click" + EVENT_KEY$7,
    FOCUSIN: "focusin" + EVENT_KEY$7,
    FOCUSOUT: "focusout" + EVENT_KEY$7,
    MOUSEENTER: "mouseenter" + EVENT_KEY$7,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$7
  ***REMOVED***;
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Popover = /*#__PURE__*/function (_Tooltip***REMOVED*** {
    _inheritsLoose(Popover, _Tooltip***REMOVED***;
    function Popover(***REMOVED*** {
      return _Tooltip.apply(this, arguments***REMOVED*** || this;
    ***REMOVED***
    var _proto = Popover.prototype;

    // Overrides
    _proto.isWithContent = function isWithContent(***REMOVED*** {
      return this.getTitle(***REMOVED*** || this._getContent(***REMOVED***;
    ***REMOVED***;
    _proto.addAttachmentClass = function addAttachmentClass(attachment***REMOVED*** {
      $__default['default'](this.getTipElement(***REMOVED******REMOVED***.addClass(CLASS_PREFIX$1 + "-" + attachment***REMOVED***;
    ***REMOVED***;
    _proto.getTipElement = function getTipElement(***REMOVED*** {
      this.tip = this.tip || $__default['default'](this.config.template***REMOVED***[0];
      return this.tip;
    ***REMOVED***;
    _proto.setContent = function setContent(***REMOVED*** {
      var $tip = $__default['default'](this.getTipElement(***REMOVED******REMOVED***; // We use append for html objects to maintain js events

      this.setElementContent($tip.find(SELECTOR_TITLE***REMOVED***, this.getTitle(***REMOVED******REMOVED***;
      var content = this._getContent(***REMOVED***;
      if (typeof content === 'function'***REMOVED*** {
        content = content.call(this.element***REMOVED***;
      ***REMOVED***
      this.setElementContent($tip.find(SELECTOR_CONTENT***REMOVED***, content***REMOVED***;
      $tip.removeClass(CLASS_NAME_FADE$3 + " " + CLASS_NAME_SHOW$5***REMOVED***;
    ***REMOVED*** // Private
    ;

    _proto._getContent = function _getContent(***REMOVED*** {
      return this.element.getAttribute('data-content'***REMOVED*** || this.config.content;
    ***REMOVED***;
    _proto._cleanTipClass = function _cleanTipClass(***REMOVED*** {
      var $tip = $__default['default'](this.getTipElement(***REMOVED******REMOVED***;
      var tabClass = $tip.attr('class'***REMOVED***.match(BSCLS_PREFIX_REGEX$1***REMOVED***;
      if (tabClass !== null && tabClass.length > 0***REMOVED*** {
        $tip.removeClass(tabClass.join(''***REMOVED******REMOVED***;
      ***REMOVED***
    ***REMOVED*** // Static
    ;

    Popover._jQueryInterface = function _jQueryInterface(config***REMOVED*** {
      return this.each(function (***REMOVED*** {
        var data = $__default['default'](this***REMOVED***.data(DATA_KEY$7***REMOVED***;
        var _config = typeof config === 'object' ? config : null;
        if (!data && /dispose|hide/.test(config***REMOVED******REMOVED*** {
          return;
        ***REMOVED***
        if (!data***REMOVED*** {
          data = new Popover(this, _config***REMOVED***;
          $__default['default'](this***REMOVED***.data(DATA_KEY$7, data***REMOVED***;
        ***REMOVED***
        if (typeof config === 'string'***REMOVED*** {
          if (typeof data[config] === 'undefined'***REMOVED*** {
            throw new TypeError("No method named \"" + config + "\""***REMOVED***;
          ***REMOVED***
          data[config](***REMOVED***;
        ***REMOVED***
      ***REMOVED******REMOVED***;
    ***REMOVED***;
    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get(***REMOVED*** {
        return VERSION$7;
      ***REMOVED***
    ***REMOVED***, {
      key: "Default",
      get: function get(***REMOVED*** {
        return Default$5;
      ***REMOVED***
    ***REMOVED***, {
      key: "NAME",
      get: function get(***REMOVED*** {
        return NAME$7;
      ***REMOVED***
    ***REMOVED***, {
      key: "DATA_KEY",
      get: function get(***REMOVED*** {
        return DATA_KEY$7;
      ***REMOVED***
    ***REMOVED***, {
      key: "Event",
      get: function get(***REMOVED*** {
        return Event$1;
      ***REMOVED***
    ***REMOVED***, {
      key: "EVENT_KEY",
      get: function get(***REMOVED*** {
        return EVENT_KEY$7;
      ***REMOVED***
    ***REMOVED***, {
      key: "DefaultType",
      get: function get(***REMOVED*** {
        return DefaultType$5;
      ***REMOVED***
    ***REMOVED***]***REMOVED***;
    return Popover;
  ***REMOVED***(Tooltip***REMOVED***;
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$7] = Popover._jQueryInterface;
  $__default['default'].fn[NAME$7].Constructor = Popover;
  $__default['default'].fn[NAME$7].noConflict = function (***REMOVED*** {
    $__default['default'].fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return Popover._jQueryInterface;
  ***REMOVED***;

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$8 = 'scrollspy';
  var VERSION$8 = '4.5.3';
  var DATA_KEY$8 = 'bs.scrollspy';
  var EVENT_KEY$8 = "." + DATA_KEY$8;
  var DATA_API_KEY$6 = '.data-api';
  var JQUERY_NO_CONFLICT$8 = $__default['default'].fn[NAME$8];
  var Default$6 = {
    offset: 10,
    method: 'auto',
    target: ''
  ***REMOVED***;
  var DefaultType$6 = {
    offset: 'number',
    method: 'string',
    target: '(string|element***REMOVED***'
  ***REMOVED***;
  var EVENT_ACTIVATE = "activate" + EVENT_KEY$8;
  var EVENT_SCROLL = "scroll" + EVENT_KEY$8;
  var EVENT_LOAD_DATA_API$2 = "load" + EVENT_KEY$8 + DATA_API_KEY$6;
  var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  var CLASS_NAME_ACTIVE$2 = 'active';
  var SELECTOR_DATA_SPY = '[data-spy="scroll"]';
  var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  var SELECTOR_NAV_LINKS = '.nav-link';
  var SELECTOR_NAV_ITEMS = '.nav-item';
  var SELECTOR_LIST_ITEMS = '.list-group-item';
  var SELECTOR_DROPDOWN = '.dropdown';
  var SELECTOR_DROPDOWN_ITEMS = '.dropdown-item';
  var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  var METHOD_OFFSET = 'offset';
  var METHOD_POSITION = 'position';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy = /*#__PURE__*/function (***REMOVED*** {
    function ScrollSpy(element, config***REMOVED*** {
      var _this = this;
      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config***REMOVED***;
      this._selector = this._config.target + " " + SELECTOR_NAV_LINKS + "," + (this._config.target + " " + SELECTOR_LIST_ITEMS + ","***REMOVED*** + (this._config.target + " " + SELECTOR_DROPDOWN_ITEMS***REMOVED***;
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $__default['default'](this._scrollElement***REMOVED***.on(EVENT_SCROLL, function (event***REMOVED*** {
        return _this._process(event***REMOVED***;
      ***REMOVED******REMOVED***;
      this.refresh(***REMOVED***;
      this._process(***REMOVED***;
    ***REMOVED*** // Getters

    var _proto = ScrollSpy.prototype;

    // Public
    _proto.refresh = function refresh(***REMOVED*** {
      var _this2 = this;
      var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop(***REMOVED*** : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight(***REMOVED***;
      var targets = [].slice.call(document.querySelectorAll(this._selector***REMOVED******REMOVED***;
      targets.map(function (element***REMOVED*** {
        var target;
        var targetSelector = Util.getSelectorFromElement(element***REMOVED***;
        if (targetSelector***REMOVED*** {
          target = document.querySelector(targetSelector***REMOVED***;
        ***REMOVED***
        if (target***REMOVED*** {
          var targetBCR = target.getBoundingClientRect(***REMOVED***;
          if (targetBCR.width || targetBCR.height***REMOVED*** {
            // TODO (fat***REMOVED***: remove sketch reliance on jQuery position/offset
            return [$__default['default'](target***REMOVED***[offsetMethod](***REMOVED***.top + offsetBase, targetSelector];
          ***REMOVED***
        ***REMOVED***
        return null;
      ***REMOVED******REMOVED***.filter(function (item***REMOVED*** {
        return item;
      ***REMOVED******REMOVED***.sort(function (a, b***REMOVED*** {
        return a[0] - b[0];
      ***REMOVED******REMOVED***.forEach(function (item***REMOVED*** {
        _this2._offsets.push(item[0]***REMOVED***;
        _this2._targets.push(item[1]***REMOVED***;
      ***REMOVED******REMOVED***;
    ***REMOVED***;
    _proto.dispose = function dispose(***REMOVED*** {
      $__default['default'].removeData(this._element, DATA_KEY$8***REMOVED***;
      $__default['default'](this._scrollElement***REMOVED***.off(EVENT_KEY$8***REMOVED***;
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    ***REMOVED*** // Private
    ;

    _proto._getConfig = function _getConfig(config***REMOVED*** {
      config = _extends({***REMOVED***, Default$6, typeof config === 'object' && config ? config : {***REMOVED******REMOVED***;
      if (typeof config.target !== 'string' && Util.isElement(config.target***REMOVED******REMOVED*** {
        var id = $__default['default'](config.target***REMOVED***.attr('id'***REMOVED***;
        if (!id***REMOVED*** {
          id = Util.getUID(NAME$8***REMOVED***;
          $__default['default'](config.target***REMOVED***.attr('id', id***REMOVED***;
        ***REMOVED***
        config.target = "#" + id;
      ***REMOVED***
      Util.typeCheckConfig(NAME$8, config, DefaultType$6***REMOVED***;
      return config;
    ***REMOVED***;
    _proto._getScrollTop = function _getScrollTop(***REMOVED*** {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    ***REMOVED***;
    _proto._getScrollHeight = function _getScrollHeight(***REMOVED*** {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight***REMOVED***;
    ***REMOVED***;
    _proto._getOffsetHeight = function _getOffsetHeight(***REMOVED*** {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect(***REMOVED***.height;
    ***REMOVED***;
    _proto._process = function _process(***REMOVED*** {
      var scrollTop = this._getScrollTop(***REMOVED*** + this._config.offset;
      var scrollHeight = this._getScrollHeight(***REMOVED***;
      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight(***REMOVED***;
      if (this._scrollHeight !== scrollHeight***REMOVED*** {
        this.refresh(***REMOVED***;
      ***REMOVED***
      if (scrollTop >= maxScroll***REMOVED*** {
        var target = this._targets[this._targets.length - 1];
        if (this._activeTarget !== target***REMOVED*** {
          this._activate(target***REMOVED***;
        ***REMOVED***
        return;
      ***REMOVED***
      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0***REMOVED*** {
        this._activeTarget = null;
        this._clear(***REMOVED***;
        return;
      ***REMOVED***
      for (var i = this._offsets.length; i--;***REMOVED*** {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]***REMOVED***;
        if (isActiveTarget***REMOVED*** {
          this._activate(this._targets[i]***REMOVED***;
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***;
    _proto._activate = function _activate(target***REMOVED*** {
      this._activeTarget = target;
      this._clear(***REMOVED***;
      var queries = this._selector.split(','***REMOVED***.map(function (selector***REMOVED*** {
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      ***REMOVED******REMOVED***;
      var $link = $__default['default']([].slice.call(document.querySelectorAll(queries.join(','***REMOVED******REMOVED******REMOVED******REMOVED***;
      if ($link.hasClass(CLASS_NAME_DROPDOWN_ITEM***REMOVED******REMOVED*** {
        $link.closest(SELECTOR_DROPDOWN***REMOVED***.find(SELECTOR_DROPDOWN_TOGGLE***REMOVED***.addClass(CLASS_NAME_ACTIVE$2***REMOVED***;
        $link.addClass(CLASS_NAME_ACTIVE$2***REMOVED***;
      ***REMOVED*** else {
        // Set triggered link as active
        $link.addClass(CLASS_NAME_ACTIVE$2***REMOVED***; // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(SELECTOR_NAV_LIST_GROUP***REMOVED***.prev(SELECTOR_NAV_LINKS + ", " + SELECTOR_LIST_ITEMS***REMOVED***.addClass(CLASS_NAME_ACTIVE$2***REMOVED***; // Handle special case when .nav-link is inside .nav-item

        $link.parents(SELECTOR_NAV_LIST_GROUP***REMOVED***.prev(SELECTOR_NAV_ITEMS***REMOVED***.children(SELECTOR_NAV_LINKS***REMOVED***.addClass(CLASS_NAME_ACTIVE$2***REMOVED***;
      ***REMOVED***
      $__default['default'](this._scrollElement***REMOVED***.trigger(EVENT_ACTIVATE, {
        relatedTarget: target
      ***REMOVED******REMOVED***;
    ***REMOVED***;
    _proto._clear = function _clear(***REMOVED*** {
      [].slice.call(document.querySelectorAll(this._selector***REMOVED******REMOVED***.filter(function (node***REMOVED*** {
        return node.classList.contains(CLASS_NAME_ACTIVE$2***REMOVED***;
      ***REMOVED******REMOVED***.forEach(function (node***REMOVED*** {
        return node.classList.remove(CLASS_NAME_ACTIVE$2***REMOVED***;
      ***REMOVED******REMOVED***;
    ***REMOVED*** // Static
    ;

    ScrollSpy._jQueryInterface = function _jQueryInterface(config***REMOVED*** {
      return this.each(function (***REMOVED*** {
        var data = $__default['default'](this***REMOVED***.data(DATA_KEY$8***REMOVED***;
        var _config = typeof config === 'object' && config;
        if (!data***REMOVED*** {
          data = new ScrollSpy(this, _config***REMOVED***;
          $__default['default'](this***REMOVED***.data(DATA_KEY$8, data***REMOVED***;
        ***REMOVED***
        if (typeof config === 'string'***REMOVED*** {
          if (typeof data[config] === 'undefined'***REMOVED*** {
            throw new TypeError("No method named \"" + config + "\""***REMOVED***;
          ***REMOVED***
          data[config](***REMOVED***;
        ***REMOVED***
      ***REMOVED******REMOVED***;
    ***REMOVED***;
    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get(***REMOVED*** {
        return VERSION$8;
      ***REMOVED***
    ***REMOVED***, {
      key: "Default",
      get: function get(***REMOVED*** {
        return Default$6;
      ***REMOVED***
    ***REMOVED***]***REMOVED***;
    return ScrollSpy;
  ***REMOVED***(***REMOVED***;
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $__default['default'](window***REMOVED***.on(EVENT_LOAD_DATA_API$2, function (***REMOVED*** {
    var scrollSpys = [].slice.call(document.querySelectorAll(SELECTOR_DATA_SPY***REMOVED******REMOVED***;
    var scrollSpysLength = scrollSpys.length;
    for (var i = scrollSpysLength; i--;***REMOVED*** {
      var $spy = $__default['default'](scrollSpys[i]***REMOVED***;
      ScrollSpy._jQueryInterface.call($spy, $spy.data(***REMOVED******REMOVED***;
    ***REMOVED***
  ***REMOVED******REMOVED***;
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$8] = ScrollSpy._jQueryInterface;
  $__default['default'].fn[NAME$8].Constructor = ScrollSpy;
  $__default['default'].fn[NAME$8].noConflict = function (***REMOVED*** {
    $__default['default'].fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return ScrollSpy._jQueryInterface;
  ***REMOVED***;

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$9 = 'tab';
  var VERSION$9 = '4.5.3';
  var DATA_KEY$9 = 'bs.tab';
  var EVENT_KEY$9 = "." + DATA_KEY$9;
  var DATA_API_KEY$7 = '.data-api';
  var JQUERY_NO_CONFLICT$9 = $__default['default'].fn[NAME$9];
  var EVENT_HIDE$3 = "hide" + EVENT_KEY$9;
  var EVENT_HIDDEN$3 = "hidden" + EVENT_KEY$9;
  var EVENT_SHOW$3 = "show" + EVENT_KEY$9;
  var EVENT_SHOWN$3 = "shown" + EVENT_KEY$9;
  var EVENT_CLICK_DATA_API$6 = "click" + EVENT_KEY$9 + DATA_API_KEY$7;
  var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
  var CLASS_NAME_ACTIVE$3 = 'active';
  var CLASS_NAME_DISABLED$1 = 'disabled';
  var CLASS_NAME_FADE$4 = 'fade';
  var CLASS_NAME_SHOW$6 = 'show';
  var SELECTOR_DROPDOWN$1 = '.dropdown';
  var SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
  var SELECTOR_ACTIVE$2 = '.active';
  var SELECTOR_ACTIVE_UL = '> li > .active';
  var SELECTOR_DATA_TOGGLE$4 = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]';
  var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  var SELECTOR_DROPDOWN_ACTIVE_CHILD = '> .dropdown-menu .active';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab = /*#__PURE__*/function (***REMOVED*** {
    function Tab(element***REMOVED*** {
      this._element = element;
    ***REMOVED*** // Getters

    var _proto = Tab.prototype;

    // Public
    _proto.show = function show(***REMOVED*** {
      var _this = this;
      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $__default['default'](this._element***REMOVED***.hasClass(CLASS_NAME_ACTIVE$3***REMOVED*** || $__default['default'](this._element***REMOVED***.hasClass(CLASS_NAME_DISABLED$1***REMOVED******REMOVED*** {
        return;
      ***REMOVED***
      var target;
      var previous;
      var listElement = $__default['default'](this._element***REMOVED***.closest(SELECTOR_NAV_LIST_GROUP$1***REMOVED***[0];
      var selector = Util.getSelectorFromElement(this._element***REMOVED***;
      if (listElement***REMOVED*** {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE$2;
        previous = $__default['default'].makeArray($__default['default'](listElement***REMOVED***.find(itemSelector***REMOVED******REMOVED***;
        previous = previous[previous.length - 1];
      ***REMOVED***
      var hideEvent = $__default['default'].Event(EVENT_HIDE$3, {
        relatedTarget: this._element
      ***REMOVED******REMOVED***;
      var showEvent = $__default['default'].Event(EVENT_SHOW$3, {
        relatedTarget: previous
      ***REMOVED******REMOVED***;
      if (previous***REMOVED*** {
        $__default['default'](previous***REMOVED***.trigger(hideEvent***REMOVED***;
      ***REMOVED***
      $__default['default'](this._element***REMOVED***.trigger(showEvent***REMOVED***;
      if (showEvent.isDefaultPrevented(***REMOVED*** || hideEvent.isDefaultPrevented(***REMOVED******REMOVED*** {
        return;
      ***REMOVED***
      if (selector***REMOVED*** {
        target = document.querySelector(selector***REMOVED***;
      ***REMOVED***
      this._activate(this._element, listElement***REMOVED***;
      var complete = function complete(***REMOVED*** {
        var hiddenEvent = $__default['default'].Event(EVENT_HIDDEN$3, {
          relatedTarget: _this._element
        ***REMOVED******REMOVED***;
        var shownEvent = $__default['default'].Event(EVENT_SHOWN$3, {
          relatedTarget: previous
        ***REMOVED******REMOVED***;
        $__default['default'](previous***REMOVED***.trigger(hiddenEvent***REMOVED***;
        $__default['default'](_this._element***REMOVED***.trigger(shownEvent***REMOVED***;
      ***REMOVED***;
      if (target***REMOVED*** {
        this._activate(target, target.parentNode, complete***REMOVED***;
      ***REMOVED*** else {
        complete(***REMOVED***;
      ***REMOVED***
    ***REMOVED***;
    _proto.dispose = function dispose(***REMOVED*** {
      $__default['default'].removeData(this._element, DATA_KEY$9***REMOVED***;
      this._element = null;
    ***REMOVED*** // Private
    ;

    _proto._activate = function _activate(element, container, callback***REMOVED*** {
      var _this2 = this;
      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL'***REMOVED*** ? $__default['default'](container***REMOVED***.find(SELECTOR_ACTIVE_UL***REMOVED*** : $__default['default'](container***REMOVED***.children(SELECTOR_ACTIVE$2***REMOVED***;
      var active = activeElements[0];
      var isTransitioning = callback && active && $__default['default'](active***REMOVED***.hasClass(CLASS_NAME_FADE$4***REMOVED***;
      var complete = function complete(***REMOVED*** {
        return _this2._transitionComplete(element, active, callback***REMOVED***;
      ***REMOVED***;
      if (active && isTransitioning***REMOVED*** {
        var transitionDuration = Util.getTransitionDurationFromElement(active***REMOVED***;
        $__default['default'](active***REMOVED***.removeClass(CLASS_NAME_SHOW$6***REMOVED***.one(Util.TRANSITION_END, complete***REMOVED***.emulateTransitionEnd(transitionDuration***REMOVED***;
      ***REMOVED*** else {
        complete(***REMOVED***;
      ***REMOVED***
    ***REMOVED***;
    _proto._transitionComplete = function _transitionComplete(element, active, callback***REMOVED*** {
      if (active***REMOVED*** {
        $__default['default'](active***REMOVED***.removeClass(CLASS_NAME_ACTIVE$3***REMOVED***;
        var dropdownChild = $__default['default'](active.parentNode***REMOVED***.find(SELECTOR_DROPDOWN_ACTIVE_CHILD***REMOVED***[0];
        if (dropdownChild***REMOVED*** {
          $__default['default'](dropdownChild***REMOVED***.removeClass(CLASS_NAME_ACTIVE$3***REMOVED***;
        ***REMOVED***
        if (active.getAttribute('role'***REMOVED*** === 'tab'***REMOVED*** {
          active.setAttribute('aria-selected', false***REMOVED***;
        ***REMOVED***
      ***REMOVED***
      $__default['default'](element***REMOVED***.addClass(CLASS_NAME_ACTIVE$3***REMOVED***;
      if (element.getAttribute('role'***REMOVED*** === 'tab'***REMOVED*** {
        element.setAttribute('aria-selected', true***REMOVED***;
      ***REMOVED***
      Util.reflow(element***REMOVED***;
      if (element.classList.contains(CLASS_NAME_FADE$4***REMOVED******REMOVED*** {
        element.classList.add(CLASS_NAME_SHOW$6***REMOVED***;
      ***REMOVED***
      if (element.parentNode && $__default['default'](element.parentNode***REMOVED***.hasClass(CLASS_NAME_DROPDOWN_MENU***REMOVED******REMOVED*** {
        var dropdownElement = $__default['default'](element***REMOVED***.closest(SELECTOR_DROPDOWN$1***REMOVED***[0];
        if (dropdownElement***REMOVED*** {
          var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(SELECTOR_DROPDOWN_TOGGLE$1***REMOVED******REMOVED***;
          $__default['default'](dropdownToggleList***REMOVED***.addClass(CLASS_NAME_ACTIVE$3***REMOVED***;
        ***REMOVED***
        element.setAttribute('aria-expanded', true***REMOVED***;
      ***REMOVED***
      if (callback***REMOVED*** {
        callback(***REMOVED***;
      ***REMOVED***
    ***REMOVED*** // Static
    ;

    Tab._jQueryInterface = function _jQueryInterface(config***REMOVED*** {
      return this.each(function (***REMOVED*** {
        var $this = $__default['default'](this***REMOVED***;
        var data = $this.data(DATA_KEY$9***REMOVED***;
        if (!data***REMOVED*** {
          data = new Tab(this***REMOVED***;
          $this.data(DATA_KEY$9, data***REMOVED***;
        ***REMOVED***
        if (typeof config === 'string'***REMOVED*** {
          if (typeof data[config] === 'undefined'***REMOVED*** {
            throw new TypeError("No method named \"" + config + "\""***REMOVED***;
          ***REMOVED***
          data[config](***REMOVED***;
        ***REMOVED***
      ***REMOVED******REMOVED***;
    ***REMOVED***;
    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get(***REMOVED*** {
        return VERSION$9;
      ***REMOVED***
    ***REMOVED***]***REMOVED***;
    return Tab;
  ***REMOVED***(***REMOVED***;
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $__default['default'](document***REMOVED***.on(EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$4, function (event***REMOVED*** {
    event.preventDefault(***REMOVED***;
    Tab._jQueryInterface.call($__default['default'](this***REMOVED***, 'show'***REMOVED***;
  ***REMOVED******REMOVED***;
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$9] = Tab._jQueryInterface;
  $__default['default'].fn[NAME$9].Constructor = Tab;
  $__default['default'].fn[NAME$9].noConflict = function (***REMOVED*** {
    $__default['default'].fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return Tab._jQueryInterface;
  ***REMOVED***;

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$a = 'toast';
  var VERSION$a = '4.5.3';
  var DATA_KEY$a = 'bs.toast';
  var EVENT_KEY$a = "." + DATA_KEY$a;
  var JQUERY_NO_CONFLICT$a = $__default['default'].fn[NAME$a];
  var EVENT_CLICK_DISMISS$1 = "click.dismiss" + EVENT_KEY$a;
  var EVENT_HIDE$4 = "hide" + EVENT_KEY$a;
  var EVENT_HIDDEN$4 = "hidden" + EVENT_KEY$a;
  var EVENT_SHOW$4 = "show" + EVENT_KEY$a;
  var EVENT_SHOWN$4 = "shown" + EVENT_KEY$a;
  var CLASS_NAME_FADE$5 = 'fade';
  var CLASS_NAME_HIDE = 'hide';
  var CLASS_NAME_SHOW$7 = 'show';
  var CLASS_NAME_SHOWING = 'showing';
  var DefaultType$7 = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  ***REMOVED***;
  var Default$7 = {
    animation: true,
    autohide: true,
    delay: 500
  ***REMOVED***;
  var SELECTOR_DATA_DISMISS$1 = '[data-dismiss="toast"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Toast = /*#__PURE__*/function (***REMOVED*** {
    function Toast(element, config***REMOVED*** {
      this._element = element;
      this._config = this._getConfig(config***REMOVED***;
      this._timeout = null;
      this._setListeners(***REMOVED***;
    ***REMOVED*** // Getters

    var _proto = Toast.prototype;

    // Public
    _proto.show = function show(***REMOVED*** {
      var _this = this;
      var showEvent = $__default['default'].Event(EVENT_SHOW$4***REMOVED***;
      $__default['default'](this._element***REMOVED***.trigger(showEvent***REMOVED***;
      if (showEvent.isDefaultPrevented(***REMOVED******REMOVED*** {
        return;
      ***REMOVED***
      this._clearTimeout(***REMOVED***;
      if (this._config.animation***REMOVED*** {
        this._element.classList.add(CLASS_NAME_FADE$5***REMOVED***;
      ***REMOVED***
      var complete = function complete(***REMOVED*** {
        _this._element.classList.remove(CLASS_NAME_SHOWING***REMOVED***;
        _this._element.classList.add(CLASS_NAME_SHOW$7***REMOVED***;
        $__default['default'](_this._element***REMOVED***.trigger(EVENT_SHOWN$4***REMOVED***;
        if (_this._config.autohide***REMOVED*** {
          _this._timeout = setTimeout(function (***REMOVED*** {
            _this.hide(***REMOVED***;
          ***REMOVED***, _this._config.delay***REMOVED***;
        ***REMOVED***
      ***REMOVED***;
      this._element.classList.remove(CLASS_NAME_HIDE***REMOVED***;
      Util.reflow(this._element***REMOVED***;
      this._element.classList.add(CLASS_NAME_SHOWING***REMOVED***;
      if (this._config.animation***REMOVED*** {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element***REMOVED***;
        $__default['default'](this._element***REMOVED***.one(Util.TRANSITION_END, complete***REMOVED***.emulateTransitionEnd(transitionDuration***REMOVED***;
      ***REMOVED*** else {
        complete(***REMOVED***;
      ***REMOVED***
    ***REMOVED***;
    _proto.hide = function hide(***REMOVED*** {
      if (!this._element.classList.contains(CLASS_NAME_SHOW$7***REMOVED******REMOVED*** {
        return;
      ***REMOVED***
      var hideEvent = $__default['default'].Event(EVENT_HIDE$4***REMOVED***;
      $__default['default'](this._element***REMOVED***.trigger(hideEvent***REMOVED***;
      if (hideEvent.isDefaultPrevented(***REMOVED******REMOVED*** {
        return;
      ***REMOVED***
      this._close(***REMOVED***;
    ***REMOVED***;
    _proto.dispose = function dispose(***REMOVED*** {
      this._clearTimeout(***REMOVED***;
      if (this._element.classList.contains(CLASS_NAME_SHOW$7***REMOVED******REMOVED*** {
        this._element.classList.remove(CLASS_NAME_SHOW$7***REMOVED***;
      ***REMOVED***
      $__default['default'](this._element***REMOVED***.off(EVENT_CLICK_DISMISS$1***REMOVED***;
      $__default['default'].removeData(this._element, DATA_KEY$a***REMOVED***;
      this._element = null;
      this._config = null;
    ***REMOVED*** // Private
    ;

    _proto._getConfig = function _getConfig(config***REMOVED*** {
      config = _extends({***REMOVED***, Default$7, $__default['default'](this._element***REMOVED***.data(***REMOVED***, typeof config === 'object' && config ? config : {***REMOVED******REMOVED***;
      Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType***REMOVED***;
      return config;
    ***REMOVED***;
    _proto._setListeners = function _setListeners(***REMOVED*** {
      var _this2 = this;
      $__default['default'](this._element***REMOVED***.on(EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, function (***REMOVED*** {
        return _this2.hide(***REMOVED***;
      ***REMOVED******REMOVED***;
    ***REMOVED***;
    _proto._close = function _close(***REMOVED*** {
      var _this3 = this;
      var complete = function complete(***REMOVED*** {
        _this3._element.classList.add(CLASS_NAME_HIDE***REMOVED***;
        $__default['default'](_this3._element***REMOVED***.trigger(EVENT_HIDDEN$4***REMOVED***;
      ***REMOVED***;
      this._element.classList.remove(CLASS_NAME_SHOW$7***REMOVED***;
      if (this._config.animation***REMOVED*** {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element***REMOVED***;
        $__default['default'](this._element***REMOVED***.one(Util.TRANSITION_END, complete***REMOVED***.emulateTransitionEnd(transitionDuration***REMOVED***;
      ***REMOVED*** else {
        complete(***REMOVED***;
      ***REMOVED***
    ***REMOVED***;
    _proto._clearTimeout = function _clearTimeout(***REMOVED*** {
      clearTimeout(this._timeout***REMOVED***;
      this._timeout = null;
    ***REMOVED*** // Static
    ;

    Toast._jQueryInterface = function _jQueryInterface(config***REMOVED*** {
      return this.each(function (***REMOVED*** {
        var $element = $__default['default'](this***REMOVED***;
        var data = $element.data(DATA_KEY$a***REMOVED***;
        var _config = typeof config === 'object' && config;
        if (!data***REMOVED*** {
          data = new Toast(this, _config***REMOVED***;
          $element.data(DATA_KEY$a, data***REMOVED***;
        ***REMOVED***
        if (typeof config === 'string'***REMOVED*** {
          if (typeof data[config] === 'undefined'***REMOVED*** {
            throw new TypeError("No method named \"" + config + "\""***REMOVED***;
          ***REMOVED***
          data[config](this***REMOVED***;
        ***REMOVED***
      ***REMOVED******REMOVED***;
    ***REMOVED***;
    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get(***REMOVED*** {
        return VERSION$a;
      ***REMOVED***
    ***REMOVED***, {
      key: "DefaultType",
      get: function get(***REMOVED*** {
        return DefaultType$7;
      ***REMOVED***
    ***REMOVED***, {
      key: "Default",
      get: function get(***REMOVED*** {
        return Default$7;
      ***REMOVED***
    ***REMOVED***]***REMOVED***;
    return Toast;
  ***REMOVED***(***REMOVED***;
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$a] = Toast._jQueryInterface;
  $__default['default'].fn[NAME$a].Constructor = Toast;
  $__default['default'].fn[NAME$a].noConflict = function (***REMOVED*** {
    $__default['default'].fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return Toast._jQueryInterface;
  ***REMOVED***;
  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;
  exports.Util = Util;
  Object.defineProperty(exports, '__esModule', {
    value: true
  ***REMOVED******REMOVED***;
***REMOVED******REMOVED***;

/***/ ***REMOVED******REMOVED***,

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__***REMOVED*** {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
(function (global, factory***REMOVED*** {
  "use strict";

  if ( true && typeof module.exports === "object"***REMOVED*** {
    // For CommonJS and CommonJS-like environments where a proper `window`
    // is present, execute the factory and get jQuery.
    // For environments that do not have a `window` with a `document`
    // (such as Node.js***REMOVED***, expose a factory as module.exports.
    // This accentuates the need for the creation of a real `window`.
    // e.g. var jQuery = require("jquery"***REMOVED***(window***REMOVED***;
    // See ticket #14549 for more info.
    module.exports = global.document ? factory(global, true***REMOVED*** : function (w***REMOVED*** {
      if (!w.document***REMOVED*** {
        throw new Error("jQuery requires a window with a document"***REMOVED***;
      ***REMOVED***
      return factory(w***REMOVED***;
    ***REMOVED***;
  ***REMOVED*** else {
    factory(global***REMOVED***;
  ***REMOVED***

  // Pass this if window is not defined yet
***REMOVED******REMOVED***(typeof window !== "undefined" ? window : this, function (window, noGlobal***REMOVED*** {
  // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
  // throw exceptions when non-strict code (e.g., ASP.NET 4.5***REMOVED*** accesses strict mode
  // arguments.callee.caller (trac-13335***REMOVED***. But as of jQuery 3.0 (2016***REMOVED***, strict mode should be common
  // enough that all such attempts are guarded in a try block.
  "use strict";

  var arr = [];
  var getProto = Object.getPrototypeOf;
  var slice = arr.slice;
  var flat = arr.flat ? function (array***REMOVED*** {
    return arr.flat.call(array***REMOVED***;
  ***REMOVED*** : function (array***REMOVED*** {
    return arr.concat.apply([], array***REMOVED***;
  ***REMOVED***;
  var push = arr.push;
  var indexOf = arr.indexOf;
  var class2type = {***REMOVED***;
  var toString = class2type.toString;
  var hasOwn = class2type.hasOwnProperty;
  var fnToString = hasOwn.toString;
  var ObjectFunctionString = fnToString.call(Object***REMOVED***;
  var support = {***REMOVED***;
  var isFunction = function isFunction(obj***REMOVED*** {
    // Support: Chrome <=57, Firefox <=52
    // In some browsers, typeof returns "function" for HTML <object> elements
    // (i.e., `typeof document.createElement( "object" ***REMOVED*** === "function"`***REMOVED***.
    // We don't want to classify *any* DOM node as a function.
    return typeof obj === "function" && typeof obj.nodeType !== "number";
  ***REMOVED***;
  var isWindow = function isWindow(obj***REMOVED*** {
    return obj != null && obj === obj.window;
  ***REMOVED***;
  var document = window.document;
  var preservedScriptAttributes = {
    type: true,
    src: true,
    nonce: true,
    noModule: true
  ***REMOVED***;
  function DOMEval(code, node, doc***REMOVED*** {
    doc = doc || document;
    var i,
      val,
      script = doc.createElement("script"***REMOVED***;
    script.text = code;
    if (node***REMOVED*** {
      for (i in preservedScriptAttributes***REMOVED*** {
        // Support: Firefox 64+, Edge 18+
        // Some browsers don't support the "nonce" property on scripts.
        // On the other hand, just using `getAttribute` is not enough as
        // the `nonce` attribute is reset to an empty string whenever it
        // becomes browsing-context connected.
        // See https://github.com/whatwg/html/issues/2369
        // See https://html.spec.whatwg.org/#nonce-attributes
        // The `node.getAttribute` check was added for the sake of
        // `jQuery.globalEval` so that it can fake a nonce-containing node
        // via an object.
        val = node[i] || node.getAttribute && node.getAttribute(i***REMOVED***;
        if (val***REMOVED*** {
          script.setAttribute(i, val***REMOVED***;
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    doc.head.appendChild(script***REMOVED***.parentNode.removeChild(script***REMOVED***;
  ***REMOVED***
  function toType(obj***REMOVED*** {
    if (obj == null***REMOVED*** {
      return obj + "";
    ***REMOVED***

    // Support: Android <=2.3 only (functionish RegExp***REMOVED***
    return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj***REMOVED***] || "object" : typeof obj;
  ***REMOVED***
  /* global Symbol */
  // Defining this global in .eslintrc.json would create a danger of using the global
  // unguarded in another place, it seems safer to define global only for this module

  var version = "3.5.1",
    // Define a local copy of jQuery
    jQuery = function (selector, context***REMOVED*** {
      // The jQuery object is actually just the init constructor 'enhanced'
      // Need init if jQuery is called (just allow error to be thrown if not included***REMOVED***
      return new jQuery.fn.init(selector, context***REMOVED***;
    ***REMOVED***;
  jQuery.fn = jQuery.prototype = {
    // The current version of jQuery being used
    jquery: version,
    constructor: jQuery,
    // The default length of a jQuery object is 0
    length: 0,
    toArray: function (***REMOVED*** {
      return slice.call(this***REMOVED***;
    ***REMOVED***,
    // Get the Nth element in the matched element set OR
    // Get the whole matched element set as a clean array
    get: function (num***REMOVED*** {
      // Return all the elements in a clean array
      if (num == null***REMOVED*** {
        return slice.call(this***REMOVED***;
      ***REMOVED***

      // Return just the one element from the set
      return num < 0 ? this[num + this.length] : this[num];
    ***REMOVED***,
    // Take an array of elements and push it onto the stack
    // (returning the new matched element set***REMOVED***
    pushStack: function (elems***REMOVED*** {
      // Build a new jQuery matched element set
      var ret = jQuery.merge(this.constructor(***REMOVED***, elems***REMOVED***;

      // Add the old object onto the stack (as a reference***REMOVED***
      ret.prevObject = this;

      // Return the newly-formed element set
      return ret;
    ***REMOVED***,
    // Execute a callback for every element in the matched set.
    each: function (callback***REMOVED*** {
      return jQuery.each(this, callback***REMOVED***;
    ***REMOVED***,
    map: function (callback***REMOVED*** {
      return this.pushStack(jQuery.map(this, function (elem, i***REMOVED*** {
        return callback.call(elem, i, elem***REMOVED***;
      ***REMOVED******REMOVED******REMOVED***;
    ***REMOVED***,
    slice: function (***REMOVED*** {
      return this.pushStack(slice.apply(this, arguments***REMOVED******REMOVED***;
    ***REMOVED***,
    first: function (***REMOVED*** {
      return this.eq(0***REMOVED***;
    ***REMOVED***,
    last: function (***REMOVED*** {
      return this.eq(-1***REMOVED***;
    ***REMOVED***,
    even: function (***REMOVED*** {
      return this.pushStack(jQuery.grep(this, function (_elem, i***REMOVED*** {
        return (i + 1***REMOVED*** % 2;
      ***REMOVED******REMOVED******REMOVED***;
    ***REMOVED***,
    odd: function (***REMOVED*** {
      return this.pushStack(jQuery.grep(this, function (_elem, i***REMOVED*** {
        return i % 2;
      ***REMOVED******REMOVED******REMOVED***;
    ***REMOVED***,
    eq: function (i***REMOVED*** {
      var len = this.length,
        j = +i + (i < 0 ? len : 0***REMOVED***;
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []***REMOVED***;
    ***REMOVED***,
    end: function (***REMOVED*** {
      return this.prevObject || this.constructor(***REMOVED***;
    ***REMOVED***,
    // For internal use only.
    // Behaves like an Array's method, not like a jQuery method.
    push: push,
    sort: arr.sort,
    splice: arr.splice
  ***REMOVED***;
  jQuery.extend = jQuery.fn.extend = function (***REMOVED*** {
    var options,
      name,
      src,
      copy,
      copyIsArray,
      clone,
      target = arguments[0] || {***REMOVED***,
      i = 1,
      length = arguments.length,
      deep = false;

    // Handle a deep copy situation
    if (typeof target === "boolean"***REMOVED*** {
      deep = target;

      // Skip the boolean and the target
      target = arguments[i] || {***REMOVED***;
      i++;
    ***REMOVED***

    // Handle case when target is a string or something (possible in deep copy***REMOVED***
    if (typeof target !== "object" && !isFunction(target***REMOVED******REMOVED*** {
      target = {***REMOVED***;
    ***REMOVED***

    // Extend jQuery itself if only one argument is passed
    if (i === length***REMOVED*** {
      target = this;
      i--;
    ***REMOVED***
    for (; i < length; i++***REMOVED*** {
      // Only deal with non-null/undefined values
      if ((options = arguments[i]***REMOVED*** != null***REMOVED*** {
        // Extend the base object
        for (name in options***REMOVED*** {
          copy = options[name];

          // Prevent Object.prototype pollution
          // Prevent never-ending loop
          if (name === "__proto__" || target === copy***REMOVED*** {
            continue;
          ***REMOVED***

          // Recurse if we're merging plain objects or arrays
          if (deep && copy && (jQuery.isPlainObject(copy***REMOVED*** || (copyIsArray = Array.isArray(copy***REMOVED******REMOVED******REMOVED******REMOVED*** {
            src = target[name];

            // Ensure proper type for the source value
            if (copyIsArray && !Array.isArray(src***REMOVED******REMOVED*** {
              clone = [];
            ***REMOVED*** else if (!copyIsArray && !jQuery.isPlainObject(src***REMOVED******REMOVED*** {
              clone = {***REMOVED***;
            ***REMOVED*** else {
              clone = src;
            ***REMOVED***
            copyIsArray = false;

            // Never move original objects, clone them
            target[name] = jQuery.extend(deep, clone, copy***REMOVED***;

            // Don't bring in undefined values
          ***REMOVED*** else if (copy !== undefined***REMOVED*** {
            target[name] = copy;
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***

    // Return the modified object
    return target;
  ***REMOVED***;
  jQuery.extend({
    // Unique for each copy of jQuery on the page
    expando: "jQuery" + (version + Math.random(***REMOVED******REMOVED***.replace(/\D/g, ""***REMOVED***,
    // Assume jQuery is ready without the ready module
    isReady: true,
    error: function (msg***REMOVED*** {
      throw new Error(msg***REMOVED***;
    ***REMOVED***,
    noop: function (***REMOVED*** {***REMOVED***,
    isPlainObject: function (obj***REMOVED*** {
      var proto, Ctor;

      // Detect obvious negatives
      // Use toString instead of jQuery.type to catch host objects
      if (!obj || toString.call(obj***REMOVED*** !== "[object Object]"***REMOVED*** {
        return false;
      ***REMOVED***
      proto = getProto(obj***REMOVED***;

      // Objects with no prototype (e.g., `Object.create( null ***REMOVED***`***REMOVED*** are plain
      if (!proto***REMOVED*** {
        return true;
      ***REMOVED***

      // Objects with prototype are plain iff they were constructed by a global Object function
      Ctor = hasOwn.call(proto, "constructor"***REMOVED*** && proto.constructor;
      return typeof Ctor === "function" && fnToString.call(Ctor***REMOVED*** === ObjectFunctionString;
    ***REMOVED***,
    isEmptyObject: function (obj***REMOVED*** {
      var name;
      for (name in obj***REMOVED*** {
        return false;
      ***REMOVED***
      return true;
    ***REMOVED***,
    // Evaluates a script in a provided context; falls back to the global one
    // if not specified.
    globalEval: function (code, options, doc***REMOVED*** {
      DOMEval(code, {
        nonce: options && options.nonce
      ***REMOVED***, doc***REMOVED***;
    ***REMOVED***,
    each: function (obj, callback***REMOVED*** {
      var length,
        i = 0;
      if (isArrayLike(obj***REMOVED******REMOVED*** {
        length = obj.length;
        for (; i < length; i++***REMOVED*** {
          if (callback.call(obj[i], i, obj[i]***REMOVED*** === false***REMOVED*** {
            break;
          ***REMOVED***
        ***REMOVED***
      ***REMOVED*** else {
        for (i in obj***REMOVED*** {
          if (callback.call(obj[i], i, obj[i]***REMOVED*** === false***REMOVED*** {
            break;
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***
      return obj;
    ***REMOVED***,
    // results is for internal usage only
    makeArray: function (arr, results***REMOVED*** {
      var ret = results || [];
      if (arr != null***REMOVED*** {
        if (isArrayLike(Object(arr***REMOVED******REMOVED******REMOVED*** {
          jQuery.merge(ret, typeof arr === "string" ? [arr] : arr***REMOVED***;
        ***REMOVED*** else {
          push.call(ret, arr***REMOVED***;
        ***REMOVED***
      ***REMOVED***
      return ret;
    ***REMOVED***,
    inArray: function (elem, arr, i***REMOVED*** {
      return arr == null ? -1 : indexOf.call(arr, elem, i***REMOVED***;
    ***REMOVED***,
    // Support: Android <=4.0 only, PhantomJS 1 only
    // push.apply(_, arraylike***REMOVED*** throws on ancient WebKit
    merge: function (first, second***REMOVED*** {
      var len = +second.length,
        j = 0,
        i = first.length;
      for (; j < len; j++***REMOVED*** {
        first[i++] = second[j];
      ***REMOVED***
      first.length = i;
      return first;
    ***REMOVED***,
    grep: function (elems, callback, invert***REMOVED*** {
      var callbackInverse,
        matches = [],
        i = 0,
        length = elems.length,
        callbackExpect = !invert;

      // Go through the array, only saving the items
      // that pass the validator function
      for (; i < length; i++***REMOVED*** {
        callbackInverse = !callback(elems[i], i***REMOVED***;
        if (callbackInverse !== callbackExpect***REMOVED*** {
          matches.push(elems[i]***REMOVED***;
        ***REMOVED***
      ***REMOVED***
      return matches;
    ***REMOVED***,
    // arg is for internal usage only
    map: function (elems, callback, arg***REMOVED*** {
      var length,
        value,
        i = 0,
        ret = [];

      // Go through the array, translating each of the items to their new values
      if (isArrayLike(elems***REMOVED******REMOVED*** {
        length = elems.length;
        for (; i < length; i++***REMOVED*** {
          value = callback(elems[i], i, arg***REMOVED***;
          if (value != null***REMOVED*** {
            ret.push(value***REMOVED***;
          ***REMOVED***
        ***REMOVED***

        // Go through every key on the object,
      ***REMOVED*** else {
        for (i in elems***REMOVED*** {
          value = callback(elems[i], i, arg***REMOVED***;
          if (value != null***REMOVED*** {
            ret.push(value***REMOVED***;
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***

      // Flatten any nested arrays
      return flat(ret***REMOVED***;
    ***REMOVED***,
    // A global GUID counter for objects
    guid: 1,
    // jQuery.support is not used in Core but other projects attach their
    // properties to it so it needs to exist.
    support: support
  ***REMOVED******REMOVED***;
  if (typeof Symbol === "function"***REMOVED*** {
    jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
  ***REMOVED***

  // Populate the class2type map
  jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "***REMOVED***, function (_i, name***REMOVED*** {
    class2type["[object " + name + "]"] = name.toLowerCase(***REMOVED***;
  ***REMOVED******REMOVED***;
  function isArrayLike(obj***REMOVED*** {
    // Support: real iOS 8.2 only (not reproducible in simulator***REMOVED***
    // `in` check used to prevent JIT error (gh-2145***REMOVED***
    // hasOwn isn't used here due to false negatives
    // regarding Nodelist length in IE
    var length = !!obj && "length" in obj && obj.length,
      type = toType(obj***REMOVED***;
    if (isFunction(obj***REMOVED*** || isWindow(obj***REMOVED******REMOVED*** {
      return false;
    ***REMOVED***
    return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
  ***REMOVED***
  var Sizzle =
  /*!
   * Sizzle CSS Selector Engine v2.3.5
   * https://sizzlejs.com/
   *
   * Copyright JS Foundation and other contributors
   * Released under the MIT license
   * https://js.foundation/
   *
   * Date: 2020-03-14
   */
  function (window***REMOVED*** {
    var i,
      support,
      Expr,
      getText,
      isXML,
      tokenize,
      compile,
      select,
      outermostContext,
      sortInput,
      hasDuplicate,
      // Local document vars
      setDocument,
      document,
      docElem,
      documentIsHTML,
      rbuggyQSA,
      rbuggyMatches,
      matches,
      contains,
      // Instance-specific data
      expando = "sizzle" + 1 * new Date(***REMOVED***,
      preferredDoc = window.document,
      dirruns = 0,
      done = 0,
      classCache = createCache(***REMOVED***,
      tokenCache = createCache(***REMOVED***,
      compilerCache = createCache(***REMOVED***,
      nonnativeSelectorCache = createCache(***REMOVED***,
      sortOrder = function (a, b***REMOVED*** {
        if (a === b***REMOVED*** {
          hasDuplicate = true;
        ***REMOVED***
        return 0;
      ***REMOVED***,
      // Instance methods
      hasOwn = {***REMOVED***.hasOwnProperty,
      arr = [],
      pop = arr.pop,
      pushNative = arr.push,
      push = arr.push,
      slice = arr.slice,
      // Use a stripped-down indexOf as it's faster than native
      // https://jsperf.com/thor-indexof-vs-for/5
      indexOf = function (list, elem***REMOVED*** {
        var i = 0,
          len = list.length;
        for (; i < len; i++***REMOVED*** {
          if (list[i] === elem***REMOVED*** {
            return i;
          ***REMOVED***
        ***REMOVED***
        return -1;
      ***REMOVED***,
      booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" + "ismap|loop|multiple|open|readonly|required|scoped",
      // Regular expressions

      // http://www.w3.org/TR/css3-selectors/#whitespace
      whitespace = "[\\x20\\t\\r\\n\\f]",
      // https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
      identifier = "(?:\\\\[\\da-fA-F]{1,6***REMOVED***" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f]***REMOVED***+",
      // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
      attributes = "\\[" + whitespace + "*(" + identifier + "***REMOVED***(?:" + whitespace +
      // Operator (capture 2***REMOVED***
      "*([*^$|!~]?=***REMOVED***" + whitespace +
      // "Attribute values must be CSS identifiers [capture 5]
      // or strings [capture 3 or capture 4]"
      "*(?:'((?:\\\\.|[^\\\\']***REMOVED*******REMOVED***'|\"((?:\\\\.|[^\\\\\"]***REMOVED*******REMOVED***\"|(" + identifier + "***REMOVED******REMOVED***|***REMOVED***" + whitespace + "*\\]",
      pseudos = ":(" + identifier + "***REMOVED***(?:\\((" +
      // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
      // 1. quoted (capture 3; capture 4 or capture 5***REMOVED***
      "('((?:\\\\.|[^\\\\']***REMOVED*******REMOVED***'|\"((?:\\\\.|[^\\\\\"]***REMOVED*******REMOVED***\"***REMOVED***|" +
      // 2. simple (capture 6***REMOVED***
      "((?:\\\\.|[^\\\\(***REMOVED***[\\]]|" + attributes + "***REMOVED*******REMOVED***|" +
      // 3. anything else (capture 2***REMOVED***
      ".*" + "***REMOVED***\\***REMOVED***|***REMOVED***",
      // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
      rwhitespace = new RegExp(whitespace + "+", "g"***REMOVED***,
      rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\]***REMOVED***(?:\\\\.***REMOVED*******REMOVED***" + whitespace + "+$", "g"***REMOVED***,
      rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"***REMOVED***,
      rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + "***REMOVED***" + whitespace + "*"***REMOVED***,
      rdescend = new RegExp(whitespace + "|>"***REMOVED***,
      rpseudo = new RegExp(pseudos***REMOVED***,
      ridentifier = new RegExp("^" + identifier + "$"***REMOVED***,
      matchExpr = {
        "ID": new RegExp("^#(" + identifier + "***REMOVED***"***REMOVED***,
        "CLASS": new RegExp("^\\.(" + identifier + "***REMOVED***"***REMOVED***,
        "TAG": new RegExp("^(" + identifier + "|[*]***REMOVED***"***REMOVED***,
        "ATTR": new RegExp("^" + attributes***REMOVED***,
        "PSEUDO": new RegExp("^" + pseudos***REMOVED***,
        "CHILD": new RegExp("^:(only|first|last|nth|nth-last***REMOVED***-(child|of-type***REMOVED***(?:\\(" + whitespace + "*(even|odd|(([+-]|***REMOVED***(\\d****REMOVED***n|***REMOVED***" + whitespace + "*(?:([+-]|***REMOVED***" + whitespace + "*(\\d+***REMOVED***|***REMOVED******REMOVED***" + whitespace + "*\\***REMOVED***|***REMOVED***", "i"***REMOVED***,
        "bool": new RegExp("^(?:" + booleans + "***REMOVED***$", "i"***REMOVED***,
        // For use in libraries implementing .is(***REMOVED***
        // We use this for POS matching in `select`
        "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last***REMOVED***(?:\\(" + whitespace + "*((?:-\\d***REMOVED***?\\d****REMOVED***" + whitespace + "*\\***REMOVED***|***REMOVED***(?=[^-]|$***REMOVED***", "i"***REMOVED***
      ***REMOVED***,
      rhtml = /HTML$/i,
      rinputs = /^(?:input|select|textarea|button***REMOVED***$/i,
      rheader = /^h\d$/i,
      rnative = /^[^{]+\{\s*\[native \w/,
      // Easily-parseable/retrievable ID or TAG or CLASS selectors
      rquickExpr = /^(?:#([\w-]+***REMOVED***|(\w+***REMOVED***|\.([\w-]+***REMOVED******REMOVED***$/,
      rsibling = /[+~]/,
      // CSS escapes
      // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
      runescape = new RegExp("\\\\[\\da-fA-F]{1,6***REMOVED***" + whitespace + "?|\\\\([^\\r\\n\\f]***REMOVED***", "g"***REMOVED***,
      funescape = function (escape, nonHex***REMOVED*** {
        var high = "0x" + escape.slice(1***REMOVED*** - 0x10000;
        return nonHex ?
        // Strip the backslash prefix from a non-hex escape sequence
        nonHex :
        // Replace a hexadecimal escape sequence with the encoded Unicode code point
        // Support: IE <=11+
        // For values outside the Basic Multilingual Plane (BMP***REMOVED***, manually construct a
        // surrogate pair
        high < 0 ? String.fromCharCode(high + 0x10000***REMOVED*** : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00***REMOVED***;
      ***REMOVED***,
      // CSS string/identifier serialization
      // https://drafts.csswg.org/cssom/#common-serializing-idioms
      rcssescape = /([\0-\x1f\x7f]|^-?\d***REMOVED***|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      fcssescape = function (ch, asCodePoint***REMOVED*** {
        if (asCodePoint***REMOVED*** {
          // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
          if (ch === "\0"***REMOVED*** {
            return "\uFFFD";
          ***REMOVED***

          // Control characters and (dependent upon position***REMOVED*** numbers get escaped as code points
          return ch.slice(0, -1***REMOVED*** + "\\" + ch.charCodeAt(ch.length - 1***REMOVED***.toString(16***REMOVED*** + " ";
        ***REMOVED***

        // Other potentially-special ASCII characters get backslash-escaped
        return "\\" + ch;
      ***REMOVED***,
      // Used for iframes
      // See setDocument(***REMOVED***
      // Removing the function wrapper causes a "Permission Denied"
      // error in IE
      unloadHandler = function (***REMOVED*** {
        setDocument(***REMOVED***;
      ***REMOVED***,
      inDisabledFieldset = addCombinator(function (elem***REMOVED*** {
        return elem.disabled === true && elem.nodeName.toLowerCase(***REMOVED*** === "fieldset";
      ***REMOVED***, {
        dir: "parentNode",
        next: "legend"
      ***REMOVED******REMOVED***;

    // Optimize for push.apply( _, NodeList ***REMOVED***
    try {
      push.apply(arr = slice.call(preferredDoc.childNodes***REMOVED***, preferredDoc.childNodes***REMOVED***;

      // Support: Android<4.0
      // Detect silently failing push.apply
      // eslint-disable-next-line no-unused-expressions
      arr[preferredDoc.childNodes.length].nodeType;
    ***REMOVED*** catch (e***REMOVED*** {
      push = {
        apply: arr.length ?
        // Leverage slice if possible
        function (target, els***REMOVED*** {
          pushNative.apply(target, slice.call(els***REMOVED******REMOVED***;
        ***REMOVED*** :
        // Support: IE<9
        // Otherwise append directly
        function (target, els***REMOVED*** {
          var j = target.length,
            i = 0;

          // Can't trust NodeList.length
          while (target[j++] = els[i++]***REMOVED*** {***REMOVED***
          target.length = j - 1;
        ***REMOVED***
      ***REMOVED***;
    ***REMOVED***
    function Sizzle(selector, context, results, seed***REMOVED*** {
      var m,
        i,
        elem,
        nid,
        match,
        groups,
        newSelector,
        newContext = context && context.ownerDocument,
        // nodeType defaults to 9, since context defaults to document
        nodeType = context ? context.nodeType : 9;
      results = results || [];

      // Return early from calls with invalid selector or context
      if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11***REMOVED*** {
        return results;
      ***REMOVED***

      // Try to shortcut find operations (as opposed to filters***REMOVED*** in HTML documents
      if (!seed***REMOVED*** {
        setDocument(context***REMOVED***;
        context = context || document;
        if (documentIsHTML***REMOVED*** {
          // If the selector is sufficiently simple, try using a "get*By*" DOM method
          // (excepting DocumentFragment context, where the methods don't exist***REMOVED***
          if (nodeType !== 11 && (match = rquickExpr.exec(selector***REMOVED******REMOVED******REMOVED*** {
            // ID selector
            if (m = match[1]***REMOVED*** {
              // Document context
              if (nodeType === 9***REMOVED*** {
                if (elem = context.getElementById(m***REMOVED******REMOVED*** {
                  // Support: IE, Opera, Webkit
                  // TODO: identify versions
                  // getElementById can match elements by name instead of ID
                  if (elem.id === m***REMOVED*** {
                    results.push(elem***REMOVED***;
                    return results;
                  ***REMOVED***
                ***REMOVED*** else {
                  return results;
                ***REMOVED***

                // Element context
              ***REMOVED*** else {
                // Support: IE, Opera, Webkit
                // TODO: identify versions
                // getElementById can match elements by name instead of ID
                if (newContext && (elem = newContext.getElementById(m***REMOVED******REMOVED*** && contains(context, elem***REMOVED*** && elem.id === m***REMOVED*** {
                  results.push(elem***REMOVED***;
                  return results;
                ***REMOVED***
              ***REMOVED***

              // Type selector
            ***REMOVED*** else if (match[2]***REMOVED*** {
              push.apply(results, context.getElementsByTagName(selector***REMOVED******REMOVED***;
              return results;

              // Class selector
            ***REMOVED*** else if ((m = match[3]***REMOVED*** && support.getElementsByClassName && context.getElementsByClassName***REMOVED*** {
              push.apply(results, context.getElementsByClassName(m***REMOVED******REMOVED***;
              return results;
            ***REMOVED***
          ***REMOVED***

          // Take advantage of querySelectorAll
          if (support.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector***REMOVED******REMOVED*** && (
          // Support: IE 8 only
          // Exclude object elements
          nodeType !== 1 || context.nodeName.toLowerCase(***REMOVED*** !== "object"***REMOVED******REMOVED*** {
            newSelector = selector;
            newContext = context;

            // qSA considers elements outside a scoping root when evaluating child or
            // descendant combinators, which is not what we want.
            // In such cases, we work around the behavior by prefixing every selector in the
            // list with an ID selector referencing the scope context.
            // The technique has to be used as well when a leading combinator is used
            // as such selectors are not recognized by querySelectorAll.
            // Thanks to Andrew Dupont for this technique.
            if (nodeType === 1 && (rdescend.test(selector***REMOVED*** || rcombinators.test(selector***REMOVED******REMOVED******REMOVED*** {
              // Expand context for sibling selectors
              newContext = rsibling.test(selector***REMOVED*** && testContext(context.parentNode***REMOVED*** || context;

              // We can use :scope instead of the ID hack if the browser
              // supports it & if we're not changing the context.
              if (newContext !== context || !support.scope***REMOVED*** {
                // Capture the context ID, setting it first if necessary
                if (nid = context.getAttribute("id"***REMOVED******REMOVED*** {
                  nid = nid.replace(rcssescape, fcssescape***REMOVED***;
                ***REMOVED*** else {
                  context.setAttribute("id", nid = expando***REMOVED***;
                ***REMOVED***
              ***REMOVED***

              // Prefix every selector in the list
              groups = tokenize(selector***REMOVED***;
              i = groups.length;
              while (i--***REMOVED*** {
                groups[i] = (nid ? "#" + nid : ":scope"***REMOVED*** + " " + toSelector(groups[i]***REMOVED***;
              ***REMOVED***
              newSelector = groups.join(","***REMOVED***;
            ***REMOVED***
            try {
              push.apply(results, newContext.querySelectorAll(newSelector***REMOVED******REMOVED***;
              return results;
            ***REMOVED*** catch (qsaError***REMOVED*** {
              nonnativeSelectorCache(selector, true***REMOVED***;
            ***REMOVED*** finally {
              if (nid === expando***REMOVED*** {
                context.removeAttribute("id"***REMOVED***;
              ***REMOVED***
            ***REMOVED***
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***

      // All others
      return select(selector.replace(rtrim, "$1"***REMOVED***, context, results, seed***REMOVED***;
    ***REMOVED***

    /**
     * Create key-value caches of limited size
     * @returns {function(string, object***REMOVED******REMOVED*** Returns the Object data after storing it on itself with
     *	property name the (space-suffixed***REMOVED*** string and (if the cache is larger than Expr.cacheLength***REMOVED***
     *	deleting the oldest entry
     */
    function createCache(***REMOVED*** {
      var keys = [];
      function cache(key, value***REMOVED*** {
        // Use (key + " "***REMOVED*** to avoid collision with native prototype properties (see Issue #157***REMOVED***
        if (keys.push(key + " "***REMOVED*** > Expr.cacheLength***REMOVED*** {
          // Only keep the most recent entries
          delete cache[keys.shift(***REMOVED***];
        ***REMOVED***
        return cache[key + " "] = value;
      ***REMOVED***
      return cache;
    ***REMOVED***

    /**
     * Mark a function for special use by Sizzle
     * @param {Function***REMOVED*** fn The function to mark
     */
    function markFunction(fn***REMOVED*** {
      fn[expando] = true;
      return fn;
    ***REMOVED***

    /**
     * Support testing using an element
     * @param {Function***REMOVED*** fn Passed the created element and returns a boolean result
     */
    function assert(fn***REMOVED*** {
      var el = document.createElement("fieldset"***REMOVED***;
      try {
        return !!fn(el***REMOVED***;
      ***REMOVED*** catch (e***REMOVED*** {
        return false;
      ***REMOVED*** finally {
        // Remove from its parent by default
        if (el.parentNode***REMOVED*** {
          el.parentNode.removeChild(el***REMOVED***;
        ***REMOVED***

        // release memory in IE
        el = null;
      ***REMOVED***
    ***REMOVED***

    /**
     * Adds the same handler for all of the specified attrs
     * @param {String***REMOVED*** attrs Pipe-separated list of attributes
     * @param {Function***REMOVED*** handler The method that will be applied
     */
    function addHandle(attrs, handler***REMOVED*** {
      var arr = attrs.split("|"***REMOVED***,
        i = arr.length;
      while (i--***REMOVED*** {
        Expr.attrHandle[arr[i]] = handler;
      ***REMOVED***
    ***REMOVED***

    /**
     * Checks document order of two siblings
     * @param {Element***REMOVED*** a
     * @param {Element***REMOVED*** b
     * @returns {Number***REMOVED*** Returns less than 0 if a precedes b, greater than 0 if a follows b
     */
    function siblingCheck(a, b***REMOVED*** {
      var cur = b && a,
        diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;

      // Use IE sourceIndex if available on both nodes
      if (diff***REMOVED*** {
        return diff;
      ***REMOVED***

      // Check if b follows a
      if (cur***REMOVED*** {
        while (cur = cur.nextSibling***REMOVED*** {
          if (cur === b***REMOVED*** {
            return -1;
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***
      return a ? 1 : -1;
    ***REMOVED***

    /**
     * Returns a function to use in pseudos for input types
     * @param {String***REMOVED*** type
     */
    function createInputPseudo(type***REMOVED*** {
      return function (elem***REMOVED*** {
        var name = elem.nodeName.toLowerCase(***REMOVED***;
        return name === "input" && elem.type === type;
      ***REMOVED***;
    ***REMOVED***

    /**
     * Returns a function to use in pseudos for buttons
     * @param {String***REMOVED*** type
     */
    function createButtonPseudo(type***REMOVED*** {
      return function (elem***REMOVED*** {
        var name = elem.nodeName.toLowerCase(***REMOVED***;
        return (name === "input" || name === "button"***REMOVED*** && elem.type === type;
      ***REMOVED***;
    ***REMOVED***

    /**
     * Returns a function to use in pseudos for :enabled/:disabled
     * @param {Boolean***REMOVED*** disabled true for :disabled; false for :enabled
     */
    function createDisabledPseudo(disabled***REMOVED*** {
      // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2***REMOVED*** :can-disable
      return function (elem***REMOVED*** {
        // Only certain elements can match :enabled or :disabled
        // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
        // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
        if ("form" in elem***REMOVED*** {
          // Check for inherited disabledness on relevant non-disabled elements:
          // * listed form-associated elements in a disabled fieldset
          //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
          //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
          // * option elements in a disabled optgroup
          //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
          // All such elements have a "form" property.
          if (elem.parentNode && elem.disabled === false***REMOVED*** {
            // Option elements defer to a parent optgroup if present
            if ("label" in elem***REMOVED*** {
              if ("label" in elem.parentNode***REMOVED*** {
                return elem.parentNode.disabled === disabled;
              ***REMOVED*** else {
                return elem.disabled === disabled;
              ***REMOVED***
            ***REMOVED***

            // Support: IE 6 - 11
            // Use the isDisabled shortcut property to check for disabled fieldset ancestors
            return elem.isDisabled === disabled ||
            // Where there is no isDisabled, check manually
            /* jshint -W018 */
            elem.isDisabled !== !disabled && inDisabledFieldset(elem***REMOVED*** === disabled;
          ***REMOVED***
          return elem.disabled === disabled;

          // Try to winnow out elements that can't be disabled before trusting the disabled property.
          // Some victims get caught in our net (label, legend, menu, track***REMOVED***, but it shouldn't
          // even exist on them, let alone have a boolean value.
        ***REMOVED*** else if ("label" in elem***REMOVED*** {
          return elem.disabled === disabled;
        ***REMOVED***

        // Remaining elements are neither :enabled nor :disabled
        return false;
      ***REMOVED***;
    ***REMOVED***

    /**
     * Returns a function to use in pseudos for positionals
     * @param {Function***REMOVED*** fn
     */
    function createPositionalPseudo(fn***REMOVED*** {
      return markFunction(function (argument***REMOVED*** {
        argument = +argument;
        return markFunction(function (seed, matches***REMOVED*** {
          var j,
            matchIndexes = fn([], seed.length, argument***REMOVED***,
            i = matchIndexes.length;

          // Match elements found at the specified indexes
          while (i--***REMOVED*** {
            if (seed[j = matchIndexes[i]]***REMOVED*** {
              seed[j] = !(matches[j] = seed[j]***REMOVED***;
            ***REMOVED***
          ***REMOVED***
        ***REMOVED******REMOVED***;
      ***REMOVED******REMOVED***;
    ***REMOVED***

    /**
     * Checks a node for validity as a Sizzle context
     * @param {Element|Object=***REMOVED*** context
     * @returns {Element|Object|Boolean***REMOVED*** The input node if acceptable, otherwise a falsy value
     */
    function testContext(context***REMOVED*** {
      return context && typeof context.getElementsByTagName !== "undefined" && context;
    ***REMOVED***

    // Expose support vars for convenience
    support = Sizzle.support = {***REMOVED***;

    /**
     * Detects XML nodes
     * @param {Element|Object***REMOVED*** elem An element or a document
     * @returns {Boolean***REMOVED*** True iff elem is a non-HTML XML node
     */
    isXML = Sizzle.isXML = function (elem***REMOVED*** {
      var namespace = elem.namespaceURI,
        docElem = (elem.ownerDocument || elem***REMOVED***.documentElement;

      // Support: IE <=8
      // Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
      // https://bugs.jquery.com/ticket/4833
      return !rhtml.test(namespace || docElem && docElem.nodeName || "HTML"***REMOVED***;
    ***REMOVED***;

    /**
     * Sets document-related variables once based on the current document
     * @param {Element|Object***REMOVED*** [doc] An element or document object to use to set the document
     * @returns {Object***REMOVED*** Returns the current document
     */
    setDocument = Sizzle.setDocument = function (node***REMOVED*** {
      var hasCompare,
        subWindow,
        doc = node ? node.ownerDocument || node : preferredDoc;

      // Return early if doc is invalid or already selected
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq
      if (doc == document || doc.nodeType !== 9 || !doc.documentElement***REMOVED*** {
        return document;
      ***REMOVED***

      // Update global variables
      document = doc;
      docElem = document.documentElement;
      documentIsHTML = !isXML(document***REMOVED***;

      // Support: IE 9 - 11+, Edge 12 - 18+
      // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936***REMOVED***
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq
      if (preferredDoc != document && (subWindow = document.defaultView***REMOVED*** && subWindow.top !== subWindow***REMOVED*** {
        // Support: IE 11, Edge
        if (subWindow.addEventListener***REMOVED*** {
          subWindow.addEventListener("unload", unloadHandler, false***REMOVED***;

          // Support: IE 9 - 10 only
        ***REMOVED*** else if (subWindow.attachEvent***REMOVED*** {
          subWindow.attachEvent("onunload", unloadHandler***REMOVED***;
        ***REMOVED***
      ***REMOVED***

      // Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
      // Safari 4 - 5 only, Opera <=11.6 - 12.x only
      // IE/Edge & older browsers don't support the :scope pseudo-class.
      // Support: Safari 6.0 only
      // Safari 6.0 supports :scope but it's an alias of :root there.
      support.scope = assert(function (el***REMOVED*** {
        docElem.appendChild(el***REMOVED***.appendChild(document.createElement("div"***REMOVED******REMOVED***;
        return typeof el.querySelectorAll !== "undefined" && !el.querySelectorAll(":scope fieldset div"***REMOVED***.length;
      ***REMOVED******REMOVED***;

      /* Attributes
      ---------------------------------------------------------------------- */

      // Support: IE<8
      // Verify that getAttribute really returns attributes and not properties
      // (excepting IE8 booleans***REMOVED***
      support.attributes = assert(function (el***REMOVED*** {
        el.className = "i";
        return !el.getAttribute("className"***REMOVED***;
      ***REMOVED******REMOVED***;

      /* getElement(s***REMOVED***By*
      ---------------------------------------------------------------------- */

      // Check if getElementsByTagName("*"***REMOVED*** returns only elements
      support.getElementsByTagName = assert(function (el***REMOVED*** {
        el.appendChild(document.createComment(""***REMOVED******REMOVED***;
        return !el.getElementsByTagName("*"***REMOVED***.length;
      ***REMOVED******REMOVED***;

      // Support: IE<9
      support.getElementsByClassName = rnative.test(document.getElementsByClassName***REMOVED***;

      // Support: IE<10
      // Check if getElementById returns elements by name
      // The broken getElementById methods don't pick up programmatically-set names,
      // so use a roundabout getElementsByName test
      support.getById = assert(function (el***REMOVED*** {
        docElem.appendChild(el***REMOVED***.id = expando;
        return !document.getElementsByName || !document.getElementsByName(expando***REMOVED***.length;
      ***REMOVED******REMOVED***;

      // ID filter and find
      if (support.getById***REMOVED*** {
        Expr.filter["ID"] = function (id***REMOVED*** {
          var attrId = id.replace(runescape, funescape***REMOVED***;
          return function (elem***REMOVED*** {
            return elem.getAttribute("id"***REMOVED*** === attrId;
          ***REMOVED***;
        ***REMOVED***;
        Expr.find["ID"] = function (id, context***REMOVED*** {
          if (typeof context.getElementById !== "undefined" && documentIsHTML***REMOVED*** {
            var elem = context.getElementById(id***REMOVED***;
            return elem ? [elem] : [];
          ***REMOVED***
        ***REMOVED***;
      ***REMOVED*** else {
        Expr.filter["ID"] = function (id***REMOVED*** {
          var attrId = id.replace(runescape, funescape***REMOVED***;
          return function (elem***REMOVED*** {
            var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id"***REMOVED***;
            return node && node.value === attrId;
          ***REMOVED***;
        ***REMOVED***;

        // Support: IE 6 - 7 only
        // getElementById is not reliable as a find shortcut
        Expr.find["ID"] = function (id, context***REMOVED*** {
          if (typeof context.getElementById !== "undefined" && documentIsHTML***REMOVED*** {
            var node,
              i,
              elems,
              elem = context.getElementById(id***REMOVED***;
            if (elem***REMOVED*** {
              // Verify the id attribute
              node = elem.getAttributeNode("id"***REMOVED***;
              if (node && node.value === id***REMOVED*** {
                return [elem];
              ***REMOVED***

              // Fall back on getElementsByName
              elems = context.getElementsByName(id***REMOVED***;
              i = 0;
              while (elem = elems[i++]***REMOVED*** {
                node = elem.getAttributeNode("id"***REMOVED***;
                if (node && node.value === id***REMOVED*** {
                  return [elem];
                ***REMOVED***
              ***REMOVED***
            ***REMOVED***
            return [];
          ***REMOVED***
        ***REMOVED***;
      ***REMOVED***

      // Tag
      Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context***REMOVED*** {
        if (typeof context.getElementsByTagName !== "undefined"***REMOVED*** {
          return context.getElementsByTagName(tag***REMOVED***;

          // DocumentFragment nodes don't have gEBTN
        ***REMOVED*** else if (support.qsa***REMOVED*** {
          return context.querySelectorAll(tag***REMOVED***;
        ***REMOVED***
      ***REMOVED*** : function (tag, context***REMOVED*** {
        var elem,
          tmp = [],
          i = 0,
          // By happy coincidence, a (broken***REMOVED*** gEBTN appears on DocumentFragment nodes too
          results = context.getElementsByTagName(tag***REMOVED***;

        // Filter out possible comments
        if (tag === "*"***REMOVED*** {
          while (elem = results[i++]***REMOVED*** {
            if (elem.nodeType === 1***REMOVED*** {
              tmp.push(elem***REMOVED***;
            ***REMOVED***
          ***REMOVED***
          return tmp;
        ***REMOVED***
        return results;
      ***REMOVED***;

      // Class
      Expr.find["CLASS"] = support.getElementsByClassName && function (className, context***REMOVED*** {
        if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML***REMOVED*** {
          return context.getElementsByClassName(className***REMOVED***;
        ***REMOVED***
      ***REMOVED***;

      /* QSA/matchesSelector
      ---------------------------------------------------------------------- */

      // QSA and matchesSelector support

      // matchesSelector(:active***REMOVED*** reports false when true (IE9/Opera 11.5***REMOVED***
      rbuggyMatches = [];

      // qSa(:focus***REMOVED*** reports false when true (Chrome 21***REMOVED***
      // We allow this because of a bug in IE8/9 that throws an error
      // whenever `document.activeElement` is accessed on an iframe
      // So, we allow :focus to pass through QSA all the time to avoid the IE error
      // See https://bugs.jquery.com/ticket/13378
      rbuggyQSA = [];
      if (support.qsa = rnative.test(document.querySelectorAll***REMOVED******REMOVED*** {
        // Build QSA regex
        // Regex strategy adopted from Diego Perini
        assert(function (el***REMOVED*** {
          var input;

          // Select is set to empty string on purpose
          // This is to test IE's treatment of not explicitly
          // setting a boolean content attribute,
          // since its presence should be enough
          // https://bugs.jquery.com/ticket/12359
          docElem.appendChild(el***REMOVED***.innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";

          // Support: IE8, Opera 11-12.16
          // Nothing should be selected when empty strings follow ^= or $= or *=
          // The test attribute must be unknown in Opera but "safe" for WinRT
          // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
          if (el.querySelectorAll("[msallowcapture^='']"***REMOVED***.length***REMOVED*** {
            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\"***REMOVED***"***REMOVED***;
          ***REMOVED***

          // Support: IE8
          // Boolean attributes and "value" are not treated correctly
          if (!el.querySelectorAll("[selected]"***REMOVED***.length***REMOVED*** {
            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + "***REMOVED***"***REMOVED***;
          ***REMOVED***

          // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
          if (!el.querySelectorAll("[id~=" + expando + "-]"***REMOVED***.length***REMOVED*** {
            rbuggyQSA.push("~="***REMOVED***;
          ***REMOVED***

          // Support: IE 11+, Edge 15 - 18+
          // IE 11/Edge don't find elements on a `[name='']` query in some cases.
          // Adding a temporary attribute to the document before the selection works
          // around the issue.
          // Interestingly, IE 10 & older don't seem to have the issue.
          input = document.createElement("input"***REMOVED***;
          input.setAttribute("name", ""***REMOVED***;
          el.appendChild(input***REMOVED***;
          if (!el.querySelectorAll("[name='']"***REMOVED***.length***REMOVED*** {
            rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + "*(?:''|\"\"***REMOVED***"***REMOVED***;
          ***REMOVED***

          // Webkit/Opera - :checked should return selected option elements
          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          // IE8 throws error here and will not see later tests
          if (!el.querySelectorAll(":checked"***REMOVED***.length***REMOVED*** {
            rbuggyQSA.push(":checked"***REMOVED***;
          ***REMOVED***

          // Support: Safari 8+, iOS 8+
          // https://bugs.webkit.org/show_bug.cgi?id=136851
          // In-page `selector#id sibling-combinator selector` fails
          if (!el.querySelectorAll("a#" + expando + "+*"***REMOVED***.length***REMOVED*** {
            rbuggyQSA.push(".#.+[+~]"***REMOVED***;
          ***REMOVED***

          // Support: Firefox <=3.6 - 5 only
          // Old Firefox doesn't throw on a badly-escaped identifier.
          el.querySelectorAll("\\\f"***REMOVED***;
          rbuggyQSA.push("[\\r\\n\\f]"***REMOVED***;
        ***REMOVED******REMOVED***;
        assert(function (el***REMOVED*** {
          el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";

          // Support: Windows 8 Native Apps
          // The type and name attributes are restricted during .innerHTML assignment
          var input = document.createElement("input"***REMOVED***;
          input.setAttribute("type", "hidden"***REMOVED***;
          el.appendChild(input***REMOVED***.setAttribute("name", "D"***REMOVED***;

          // Support: IE8
          // Enforce case-sensitivity of name attribute
          if (el.querySelectorAll("[name=d]"***REMOVED***.length***REMOVED*** {
            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?="***REMOVED***;
          ***REMOVED***

          // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled***REMOVED***
          // IE8 throws error here and will not see later tests
          if (el.querySelectorAll(":enabled"***REMOVED***.length !== 2***REMOVED*** {
            rbuggyQSA.push(":enabled", ":disabled"***REMOVED***;
          ***REMOVED***

          // Support: IE9-11+
          // IE's :disabled selector does not pick up the children of disabled fieldsets
          docElem.appendChild(el***REMOVED***.disabled = true;
          if (el.querySelectorAll(":disabled"***REMOVED***.length !== 2***REMOVED*** {
            rbuggyQSA.push(":enabled", ":disabled"***REMOVED***;
          ***REMOVED***

          // Support: Opera 10 - 11 only
          // Opera 10-11 does not throw on post-comma invalid pseudos
          el.querySelectorAll("*,:x"***REMOVED***;
          rbuggyQSA.push(",.*:"***REMOVED***;
        ***REMOVED******REMOVED***;
      ***REMOVED***
      if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector***REMOVED******REMOVED*** {
        assert(function (el***REMOVED*** {
          // Check to see if it's possible to do matchesSelector
          // on a disconnected node (IE 9***REMOVED***
          support.disconnectedMatch = matches.call(el, "*"***REMOVED***;

          // This should fail with an exception
          // Gecko does not error, returns false instead
          matches.call(el, "[s!='']:x"***REMOVED***;
          rbuggyMatches.push("!=", pseudos***REMOVED***;
        ***REMOVED******REMOVED***;
      ***REMOVED***
      rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"***REMOVED******REMOVED***;
      rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"***REMOVED******REMOVED***;

      /* Contains
      ---------------------------------------------------------------------- */
      hasCompare = rnative.test(docElem.compareDocumentPosition***REMOVED***;

      // Element contains another
      // Purposefully self-exclusive
      // As in, an element does not contain itself
      contains = hasCompare || rnative.test(docElem.contains***REMOVED*** ? function (a, b***REMOVED*** {
        var adown = a.nodeType === 9 ? a.documentElement : a,
          bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup***REMOVED*** : a.compareDocumentPosition && a.compareDocumentPosition(bup***REMOVED*** & 16***REMOVED******REMOVED***;
      ***REMOVED*** : function (a, b***REMOVED*** {
        if (b***REMOVED*** {
          while (b = b.parentNode***REMOVED*** {
            if (b === a***REMOVED*** {
              return true;
            ***REMOVED***
          ***REMOVED***
        ***REMOVED***
        return false;
      ***REMOVED***;

      /* Sorting
      ---------------------------------------------------------------------- */

      // Document order sorting
      sortOrder = hasCompare ? function (a, b***REMOVED*** {
        // Flag for duplicate removal
        if (a === b***REMOVED*** {
          hasDuplicate = true;
          return 0;
        ***REMOVED***

        // Sort on method existence if only one input has compareDocumentPosition
        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
        if (compare***REMOVED*** {
          return compare;
        ***REMOVED***

        // Calculate position if both inputs belong to the same document
        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.
        // eslint-disable-next-line eqeqeq
        compare = (a.ownerDocument || a***REMOVED*** == (b.ownerDocument || b***REMOVED*** ? a.compareDocumentPosition(b***REMOVED*** :
        // Otherwise we know they are disconnected
        1;

        // Disconnected nodes
        if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a***REMOVED*** === compare***REMOVED*** {
          // Choose the first element that is related to our preferred document
          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          if (a == document || a.ownerDocument == preferredDoc && contains(preferredDoc, a***REMOVED******REMOVED*** {
            return -1;
          ***REMOVED***

          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          if (b == document || b.ownerDocument == preferredDoc && contains(preferredDoc, b***REMOVED******REMOVED*** {
            return 1;
          ***REMOVED***

          // Maintain original order
          return sortInput ? indexOf(sortInput, a***REMOVED*** - indexOf(sortInput, b***REMOVED*** : 0;
        ***REMOVED***
        return compare & 4 ? -1 : 1;
      ***REMOVED*** : function (a, b***REMOVED*** {
        // Exit early if the nodes are identical
        if (a === b***REMOVED*** {
          hasDuplicate = true;
          return 0;
        ***REMOVED***
        var cur,
          i = 0,
          aup = a.parentNode,
          bup = b.parentNode,
          ap = [a],
          bp = [b];

        // Parentless nodes are either documents or disconnected
        if (!aup || !bup***REMOVED*** {
          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          /* eslint-disable eqeqeq */
          return a == document ? -1 : b == document ? 1 : /* eslint-enable eqeqeq */
          aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a***REMOVED*** - indexOf(sortInput, b***REMOVED*** : 0;

          // If the nodes are siblings, we can do a quick check
        ***REMOVED*** else if (aup === bup***REMOVED*** {
          return siblingCheck(a, b***REMOVED***;
        ***REMOVED***

        // Otherwise we need full lists of their ancestors for comparison
        cur = a;
        while (cur = cur.parentNode***REMOVED*** {
          ap.unshift(cur***REMOVED***;
        ***REMOVED***
        cur = b;
        while (cur = cur.parentNode***REMOVED*** {
          bp.unshift(cur***REMOVED***;
        ***REMOVED***

        // Walk down the tree looking for a discrepancy
        while (ap[i] === bp[i]***REMOVED*** {
          i++;
        ***REMOVED***
        return i ?
        // Do a sibling check if the nodes have a common ancestor
        siblingCheck(ap[i], bp[i]***REMOVED*** :
        // Otherwise nodes in our document sort first
        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.
        /* eslint-disable eqeqeq */
        ap[i] == preferredDoc ? -1 : bp[i] == preferredDoc ? 1 : /* eslint-enable eqeqeq */
        0;
      ***REMOVED***;
      return document;
    ***REMOVED***;
    Sizzle.matches = function (expr, elements***REMOVED*** {
      return Sizzle(expr, null, null, elements***REMOVED***;
    ***REMOVED***;
    Sizzle.matchesSelector = function (elem, expr***REMOVED*** {
      setDocument(elem***REMOVED***;
      if (support.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr***REMOVED******REMOVED*** && (!rbuggyQSA || !rbuggyQSA.test(expr***REMOVED******REMOVED******REMOVED*** {
        try {
          var ret = matches.call(elem, expr***REMOVED***;

          // IE 9's matchesSelector returns false on disconnected nodes
          if (ret || support.disconnectedMatch ||
          // As well, disconnected nodes are said to be in a document
          // fragment in IE 9
          elem.document && elem.document.nodeType !== 11***REMOVED*** {
            return ret;
          ***REMOVED***
        ***REMOVED*** catch (e***REMOVED*** {
          nonnativeSelectorCache(expr, true***REMOVED***;
        ***REMOVED***
      ***REMOVED***
      return Sizzle(expr, document, null, [elem]***REMOVED***.length > 0;
    ***REMOVED***;
    Sizzle.contains = function (context, elem***REMOVED*** {
      // Set document vars if needed
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq
      if ((context.ownerDocument || context***REMOVED*** != document***REMOVED*** {
        setDocument(context***REMOVED***;
      ***REMOVED***
      return contains(context, elem***REMOVED***;
    ***REMOVED***;
    Sizzle.attr = function (elem, name***REMOVED*** {
      // Set document vars if needed
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq
      if ((elem.ownerDocument || elem***REMOVED*** != document***REMOVED*** {
        setDocument(elem***REMOVED***;
      ***REMOVED***
      var fn = Expr.attrHandle[name.toLowerCase(***REMOVED***],
        // Don't get fooled by Object.prototype properties (jQuery #13807***REMOVED***
        val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase(***REMOVED******REMOVED*** ? fn(elem, name, !documentIsHTML***REMOVED*** : undefined;
      return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name***REMOVED*** : (val = elem.getAttributeNode(name***REMOVED******REMOVED*** && val.specified ? val.value : null;
    ***REMOVED***;
    Sizzle.escape = function (sel***REMOVED*** {
      return (sel + ""***REMOVED***.replace(rcssescape, fcssescape***REMOVED***;
    ***REMOVED***;
    Sizzle.error = function (msg***REMOVED*** {
      throw new Error("Syntax error, unrecognized expression: " + msg***REMOVED***;
    ***REMOVED***;

    /**
     * Document sorting and removing duplicates
     * @param {ArrayLike***REMOVED*** results
     */
    Sizzle.uniqueSort = function (results***REMOVED*** {
      var elem,
        duplicates = [],
        j = 0,
        i = 0;

      // Unless we *know* we can detect duplicates, assume their presence
      hasDuplicate = !support.detectDuplicates;
      sortInput = !support.sortStable && results.slice(0***REMOVED***;
      results.sort(sortOrder***REMOVED***;
      if (hasDuplicate***REMOVED*** {
        while (elem = results[i++]***REMOVED*** {
          if (elem === results[i]***REMOVED*** {
            j = duplicates.push(i***REMOVED***;
          ***REMOVED***
        ***REMOVED***
        while (j--***REMOVED*** {
          results.splice(duplicates[j], 1***REMOVED***;
        ***REMOVED***
      ***REMOVED***

      // Clear input after sorting to release objects
      // See https://github.com/jquery/sizzle/pull/225
      sortInput = null;
      return results;
    ***REMOVED***;

    /**
     * Utility function for retrieving the text value of an array of DOM nodes
     * @param {Array|Element***REMOVED*** elem
     */
    getText = Sizzle.getText = function (elem***REMOVED*** {
      var node,
        ret = "",
        i = 0,
        nodeType = elem.nodeType;
      if (!nodeType***REMOVED*** {
        // If no nodeType, this is expected to be an array
        while (node = elem[i++]***REMOVED*** {
          // Do not traverse comment nodes
          ret += getText(node***REMOVED***;
        ***REMOVED***
      ***REMOVED*** else if (nodeType === 1 || nodeType === 9 || nodeType === 11***REMOVED*** {
        // Use textContent for elements
        // innerText usage removed for consistency of new lines (jQuery #11153***REMOVED***
        if (typeof elem.textContent === "string"***REMOVED*** {
          return elem.textContent;
        ***REMOVED*** else {
          // Traverse its children
          for (elem = elem.firstChild; elem; elem = elem.nextSibling***REMOVED*** {
            ret += getText(elem***REMOVED***;
          ***REMOVED***
        ***REMOVED***
      ***REMOVED*** else if (nodeType === 3 || nodeType === 4***REMOVED*** {
        return elem.nodeValue;
      ***REMOVED***

      // Do not include comment or processing instruction nodes

      return ret;
    ***REMOVED***;
    Expr = Sizzle.selectors = {
      // Can be adjusted by the user
      cacheLength: 50,
      createPseudo: markFunction,
      match: matchExpr,
      attrHandle: {***REMOVED***,
      find: {***REMOVED***,
      relative: {
        ">": {
          dir: "parentNode",
          first: true
        ***REMOVED***,
        " ": {
          dir: "parentNode"
        ***REMOVED***,
        "+": {
          dir: "previousSibling",
          first: true
        ***REMOVED***,
        "~": {
          dir: "previousSibling"
        ***REMOVED***
      ***REMOVED***,
      preFilter: {
        "ATTR": function (match***REMOVED*** {
          match[1] = match[1].replace(runescape, funescape***REMOVED***;

          // Move the given value to match[3] whether quoted or unquoted
          match[3] = (match[3] || match[4] || match[5] || ""***REMOVED***.replace(runescape, funescape***REMOVED***;
          if (match[2] === "~="***REMOVED*** {
            match[3] = " " + match[3] + " ";
          ***REMOVED***
          return match.slice(0, 4***REMOVED***;
        ***REMOVED***,
        "CHILD": function (match***REMOVED*** {
          /* matches from matchExpr["CHILD"]
          	1 type (only|nth|...***REMOVED***
          	2 what (child|of-type***REMOVED***
          	3 argument (even|odd|\d*|\d*n([+-]\d+***REMOVED***?|...***REMOVED***
          	4 xn-component of xn+y argument ([+-]?\d*n|***REMOVED***
          	5 sign of xn-component
          	6 x of xn-component
          	7 sign of y-component
          	8 y of y-component
          */
          match[1] = match[1].toLowerCase(***REMOVED***;
          if (match[1].slice(0, 3***REMOVED*** === "nth"***REMOVED*** {
            // nth-* requires argument
            if (!match[3]***REMOVED*** {
              Sizzle.error(match[0]***REMOVED***;
            ***REMOVED***

            // numeric x and y parameters for Expr.filter.CHILD
            // remember that false/true cast respectively to 0/1
            match[4] = +(match[4] ? match[5] + (match[6] || 1***REMOVED*** : 2 * (match[3] === "even" || match[3] === "odd"***REMOVED******REMOVED***;
            match[5] = +(match[7] + match[8] || match[3] === "odd"***REMOVED***;

            // other types prohibit arguments
          ***REMOVED*** else if (match[3]***REMOVED*** {
            Sizzle.error(match[0]***REMOVED***;
          ***REMOVED***
          return match;
        ***REMOVED***,
        "PSEUDO": function (match***REMOVED*** {
          var excess,
            unquoted = !match[6] && match[2];
          if (matchExpr["CHILD"].test(match[0]***REMOVED******REMOVED*** {
            return null;
          ***REMOVED***

          // Accept quoted arguments as-is
          if (match[3]***REMOVED*** {
            match[2] = match[4] || match[5] || "";

            // Strip excess characters from unquoted arguments
          ***REMOVED*** else if (unquoted && rpseudo.test(unquoted***REMOVED*** && (
          // Get excess from tokenize (recursively***REMOVED***
          excess = tokenize(unquoted, true***REMOVED******REMOVED*** && (
          // advance to the next closing parenthesis
          excess = unquoted.indexOf("***REMOVED***", unquoted.length - excess***REMOVED*** - unquoted.length***REMOVED******REMOVED*** {
            // excess is a negative index
            match[0] = match[0].slice(0, excess***REMOVED***;
            match[2] = unquoted.slice(0, excess***REMOVED***;
          ***REMOVED***

          // Return only captures needed by the pseudo filter method (type and argument***REMOVED***
          return match.slice(0, 3***REMOVED***;
        ***REMOVED***
      ***REMOVED***,
      filter: {
        "TAG": function (nodeNameSelector***REMOVED*** {
          var nodeName = nodeNameSelector.replace(runescape, funescape***REMOVED***.toLowerCase(***REMOVED***;
          return nodeNameSelector === "*" ? function (***REMOVED*** {
            return true;
          ***REMOVED*** : function (elem***REMOVED*** {
            return elem.nodeName && elem.nodeName.toLowerCase(***REMOVED*** === nodeName;
          ***REMOVED***;
        ***REMOVED***,
        "CLASS": function (className***REMOVED*** {
          var pattern = classCache[className + " "];
          return pattern || (pattern = new RegExp("(^|" + whitespace + "***REMOVED***" + className + "(" + whitespace + "|$***REMOVED***"***REMOVED******REMOVED*** && classCache(className, function (elem***REMOVED*** {
            return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class"***REMOVED*** || ""***REMOVED***;
          ***REMOVED******REMOVED***;
        ***REMOVED***,
        "ATTR": function (name, operator, check***REMOVED*** {
          return function (elem***REMOVED*** {
            var result = Sizzle.attr(elem, name***REMOVED***;
            if (result == null***REMOVED*** {
              return operator === "!=";
            ***REMOVED***
            if (!operator***REMOVED*** {
              return true;
            ***REMOVED***
            result += "";

            /* eslint-disable max-len */

            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check***REMOVED*** === 0 : operator === "*=" ? check && result.indexOf(check***REMOVED*** > -1 : operator === "$=" ? check && result.slice(-check.length***REMOVED*** === check : operator === "~=" ? (" " + result.replace(rwhitespace, " "***REMOVED*** + " "***REMOVED***.indexOf(check***REMOVED*** > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1***REMOVED*** === check + "-" : false;
            /* eslint-enable max-len */
          ***REMOVED***;
        ***REMOVED***,

        "CHILD": function (type, what, _argument, first, last***REMOVED*** {
          var simple = type.slice(0, 3***REMOVED*** !== "nth",
            forward = type.slice(-4***REMOVED*** !== "last",
            ofType = what === "of-type";
          return first === 1 && last === 0 ?
          // Shortcut for :nth-*(n***REMOVED***
          function (elem***REMOVED*** {
            return !!elem.parentNode;
          ***REMOVED*** : function (elem, _context, xml***REMOVED*** {
            var cache,
              uniqueCache,
              outerCache,
              node,
              nodeIndex,
              start,
              dir = simple !== forward ? "nextSibling" : "previousSibling",
              parent = elem.parentNode,
              name = ofType && elem.nodeName.toLowerCase(***REMOVED***,
              useCache = !xml && !ofType,
              diff = false;
            if (parent***REMOVED*** {
              // :(first|last|only***REMOVED***-(child|of-type***REMOVED***
              if (simple***REMOVED*** {
                while (dir***REMOVED*** {
                  node = elem;
                  while (node = node[dir]***REMOVED*** {
                    if (ofType ? node.nodeName.toLowerCase(***REMOVED*** === name : node.nodeType === 1***REMOVED*** {
                      return false;
                    ***REMOVED***
                  ***REMOVED***

                  // Reverse direction for :only-* (if we haven't yet done so***REMOVED***
                  start = dir = type === "only" && !start && "nextSibling";
                ***REMOVED***
                return true;
              ***REMOVED***
              start = [forward ? parent.firstChild : parent.lastChild];

              // non-xml :nth-child(...***REMOVED*** stores cache data on `parent`
              if (forward && useCache***REMOVED*** {
                // Seek `elem` from a previously-cached index

                // ...in a gzip-friendly way
                node = parent;
                outerCache = node[expando] || (node[expando] = {***REMOVED******REMOVED***;

                // Support: IE <9 only
                // Defend against cloned attroperties (jQuery gh-1709***REMOVED***
                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {***REMOVED******REMOVED***;
                cache = uniqueCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = nodeIndex && cache[2];
                node = nodeIndex && parent.childNodes[nodeIndex];
                while (node = ++nodeIndex && node && node[dir] || (
                // Fallback to seeking `elem` from the start
                diff = nodeIndex = 0***REMOVED*** || start.pop(***REMOVED******REMOVED*** {
                  // When found, cache indexes on `parent` and break
                  if (node.nodeType === 1 && ++diff && node === elem***REMOVED*** {
                    uniqueCache[type] = [dirruns, nodeIndex, diff];
                    break;
                  ***REMOVED***
                ***REMOVED***
              ***REMOVED*** else {
                // Use previously-cached element index if available
                if (useCache***REMOVED*** {
                  // ...in a gzip-friendly way
                  node = elem;
                  outerCache = node[expando] || (node[expando] = {***REMOVED******REMOVED***;

                  // Support: IE <9 only
                  // Defend against cloned attroperties (jQuery gh-1709***REMOVED***
                  uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {***REMOVED******REMOVED***;
                  cache = uniqueCache[type] || [];
                  nodeIndex = cache[0] === dirruns && cache[1];
                  diff = nodeIndex;
                ***REMOVED***

                // xml :nth-child(...***REMOVED***
                // or :nth-last-child(...***REMOVED*** or :nth(-last***REMOVED***?-of-type(...***REMOVED***
                if (diff === false***REMOVED*** {
                  // Use the same loop as above to seek `elem` from the start
                  while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0***REMOVED*** || start.pop(***REMOVED******REMOVED*** {
                    if ((ofType ? node.nodeName.toLowerCase(***REMOVED*** === name : node.nodeType === 1***REMOVED*** && ++diff***REMOVED*** {
                      // Cache the index of each encountered element
                      if (useCache***REMOVED*** {
                        outerCache = node[expando] || (node[expando] = {***REMOVED******REMOVED***;

                        // Support: IE <9 only
                        // Defend against cloned attroperties (jQuery gh-1709***REMOVED***
                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {***REMOVED******REMOVED***;
                        uniqueCache[type] = [dirruns, diff];
                      ***REMOVED***
                      if (node === elem***REMOVED*** {
                        break;
                      ***REMOVED***
                    ***REMOVED***
                  ***REMOVED***
                ***REMOVED***
              ***REMOVED***

              // Incorporate the offset, then check against cycle size
              diff -= last;
              return diff === first || diff % first === 0 && diff / first >= 0;
            ***REMOVED***
          ***REMOVED***;
        ***REMOVED***,
        "PSEUDO": function (pseudo, argument***REMOVED*** {
          // pseudo-class names are case-insensitive
          // http://www.w3.org/TR/selectors/#pseudo-classes
          // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
          // Remember that setFilters inherits from pseudos
          var args,
            fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase(***REMOVED***] || Sizzle.error("unsupported pseudo: " + pseudo***REMOVED***;

          // The user may use createPseudo to indicate that
          // arguments are needed to create the filter function
          // just as Sizzle does
          if (fn[expando]***REMOVED*** {
            return fn(argument***REMOVED***;
          ***REMOVED***

          // But maintain support for old signatures
          if (fn.length > 1***REMOVED*** {
            args = [pseudo, pseudo, "", argument];
            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase(***REMOVED******REMOVED*** ? markFunction(function (seed, matches***REMOVED*** {
              var idx,
                matched = fn(seed, argument***REMOVED***,
                i = matched.length;
              while (i--***REMOVED*** {
                idx = indexOf(seed, matched[i]***REMOVED***;
                seed[idx] = !(matches[idx] = matched[i]***REMOVED***;
              ***REMOVED***
            ***REMOVED******REMOVED*** : function (elem***REMOVED*** {
              return fn(elem, 0, args***REMOVED***;
            ***REMOVED***;
          ***REMOVED***
          return fn;
        ***REMOVED***
      ***REMOVED***,
      pseudos: {
        // Potentially complex pseudos
        "not": markFunction(function (selector***REMOVED*** {
          // Trim the selector passed to compile
          // to avoid treating leading and trailing
          // spaces as combinators
          var input = [],
            results = [],
            matcher = compile(selector.replace(rtrim, "$1"***REMOVED******REMOVED***;
          return matcher[expando] ? markFunction(function (seed, matches, _context, xml***REMOVED*** {
            var elem,
              unmatched = matcher(seed, null, xml, []***REMOVED***,
              i = seed.length;

            // Match elements unmatched by `matcher`
            while (i--***REMOVED*** {
              if (elem = unmatched[i]***REMOVED*** {
                seed[i] = !(matches[i] = elem***REMOVED***;
              ***REMOVED***
            ***REMOVED***
          ***REMOVED******REMOVED*** : function (elem, _context, xml***REMOVED*** {
            input[0] = elem;
            matcher(input, null, xml, results***REMOVED***;

            // Don't keep the element (issue #299***REMOVED***
            input[0] = null;
            return !results.pop(***REMOVED***;
          ***REMOVED***;
        ***REMOVED******REMOVED***,
        "has": markFunction(function (selector***REMOVED*** {
          return function (elem***REMOVED*** {
            return Sizzle(selector, elem***REMOVED***.length > 0;
          ***REMOVED***;
        ***REMOVED******REMOVED***,
        "contains": markFunction(function (text***REMOVED*** {
          text = text.replace(runescape, funescape***REMOVED***;
          return function (elem***REMOVED*** {
            return (elem.textContent || getText(elem***REMOVED******REMOVED***.indexOf(text***REMOVED*** > -1;
          ***REMOVED***;
        ***REMOVED******REMOVED***,
        // "Whether an element is represented by a :lang(***REMOVED*** selector
        // is based solely on the element's language value
        // being equal to the identifier C,
        // or beginning with the identifier C immediately followed by "-".
        // The matching of C against the element's language value is performed case-insensitively.
        // The identifier C does not have to be a valid language name."
        // http://www.w3.org/TR/selectors/#lang-pseudo
        "lang": markFunction(function (lang***REMOVED*** {
          // lang value must be a valid identifier
          if (!ridentifier.test(lang || ""***REMOVED******REMOVED*** {
            Sizzle.error("unsupported lang: " + lang***REMOVED***;
          ***REMOVED***
          lang = lang.replace(runescape, funescape***REMOVED***.toLowerCase(***REMOVED***;
          return function (elem***REMOVED*** {
            var elemLang;
            do {
              if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang"***REMOVED*** || elem.getAttribute("lang"***REMOVED******REMOVED*** {
                elemLang = elemLang.toLowerCase(***REMOVED***;
                return elemLang === lang || elemLang.indexOf(lang + "-"***REMOVED*** === 0;
              ***REMOVED***
            ***REMOVED*** while ((elem = elem.parentNode***REMOVED*** && elem.nodeType === 1***REMOVED***;
            return false;
          ***REMOVED***;
        ***REMOVED******REMOVED***,
        // Miscellaneous
        "target": function (elem***REMOVED*** {
          var hash = window.location && window.location.hash;
          return hash && hash.slice(1***REMOVED*** === elem.id;
        ***REMOVED***,
        "root": function (elem***REMOVED*** {
          return elem === docElem;
        ***REMOVED***,
        "focus": function (elem***REMOVED*** {
          return elem === document.activeElement && (!document.hasFocus || document.hasFocus(***REMOVED******REMOVED*** && !!(elem.type || elem.href || ~elem.tabIndex***REMOVED***;
        ***REMOVED***,
        // Boolean properties
        "enabled": createDisabledPseudo(false***REMOVED***,
        "disabled": createDisabledPseudo(true***REMOVED***,
        "checked": function (elem***REMOVED*** {
          // In CSS3, :checked should return both checked and selected elements
          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          var nodeName = elem.nodeName.toLowerCase(***REMOVED***;
          return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
        ***REMOVED***,
        "selected": function (elem***REMOVED*** {
          // Accessing this property makes selected-by-default
          // options in Safari work properly
          if (elem.parentNode***REMOVED*** {
            // eslint-disable-next-line no-unused-expressions
            elem.parentNode.selectedIndex;
          ***REMOVED***
          return elem.selected === true;
        ***REMOVED***,
        // Contents
        "empty": function (elem***REMOVED*** {
          // http://www.w3.org/TR/selectors/#empty-pseudo
          // :empty is negated by element (1***REMOVED*** or content nodes (text: 3; cdata: 4; entity ref: 5***REMOVED***,
          //   but not by others (comment: 8; processing instruction: 7; etc.***REMOVED***
          // nodeType < 6 works because attributes (2***REMOVED*** do not appear as children
          for (elem = elem.firstChild; elem; elem = elem.nextSibling***REMOVED*** {
            if (elem.nodeType < 6***REMOVED*** {
              return false;
            ***REMOVED***
          ***REMOVED***
          return true;
        ***REMOVED***,
        "parent": function (elem***REMOVED*** {
          return !Expr.pseudos["empty"](elem***REMOVED***;
        ***REMOVED***,
        // Element/input types
        "header": function (elem***REMOVED*** {
          return rheader.test(elem.nodeName***REMOVED***;
        ***REMOVED***,
        "input": function (elem***REMOVED*** {
          return rinputs.test(elem.nodeName***REMOVED***;
        ***REMOVED***,
        "button": function (elem***REMOVED*** {
          var name = elem.nodeName.toLowerCase(***REMOVED***;
          return name === "input" && elem.type === "button" || name === "button";
        ***REMOVED***,
        "text": function (elem***REMOVED*** {
          var attr;
          return elem.nodeName.toLowerCase(***REMOVED*** === "input" && elem.type === "text" && (
          // Support: IE<8
          // New HTML5 attribute values (e.g., "search"***REMOVED*** appear with elem.type === "text"
          (attr = elem.getAttribute("type"***REMOVED******REMOVED*** == null || attr.toLowerCase(***REMOVED*** === "text"***REMOVED***;
        ***REMOVED***,
        // Position-in-collection
        "first": createPositionalPseudo(function (***REMOVED*** {
          return [0];
        ***REMOVED******REMOVED***,
        "last": createPositionalPseudo(function (_matchIndexes, length***REMOVED*** {
          return [length - 1];
        ***REMOVED******REMOVED***,
        "eq": createPositionalPseudo(function (_matchIndexes, length, argument***REMOVED*** {
          return [argument < 0 ? argument + length : argument];
        ***REMOVED******REMOVED***,
        "even": createPositionalPseudo(function (matchIndexes, length***REMOVED*** {
          var i = 0;
          for (; i < length; i += 2***REMOVED*** {
            matchIndexes.push(i***REMOVED***;
          ***REMOVED***
          return matchIndexes;
        ***REMOVED******REMOVED***,
        "odd": createPositionalPseudo(function (matchIndexes, length***REMOVED*** {
          var i = 1;
          for (; i < length; i += 2***REMOVED*** {
            matchIndexes.push(i***REMOVED***;
          ***REMOVED***
          return matchIndexes;
        ***REMOVED******REMOVED***,
        "lt": createPositionalPseudo(function (matchIndexes, length, argument***REMOVED*** {
          var i = argument < 0 ? argument + length : argument > length ? length : argument;
          for (; --i >= 0;***REMOVED*** {
            matchIndexes.push(i***REMOVED***;
          ***REMOVED***
          return matchIndexes;
        ***REMOVED******REMOVED***,
        "gt": createPositionalPseudo(function (matchIndexes, length, argument***REMOVED*** {
          var i = argument < 0 ? argument + length : argument;
          for (; ++i < length;***REMOVED*** {
            matchIndexes.push(i***REMOVED***;
          ***REMOVED***
          return matchIndexes;
        ***REMOVED******REMOVED***
      ***REMOVED***
    ***REMOVED***;
    Expr.pseudos["nth"] = Expr.pseudos["eq"];

    // Add button/input type pseudos
    for (i in {
      radio: true,
      checkbox: true,
      file: true,
      password: true,
      image: true
    ***REMOVED******REMOVED*** {
      Expr.pseudos[i] = createInputPseudo(i***REMOVED***;
    ***REMOVED***
    for (i in {
      submit: true,
      reset: true
    ***REMOVED******REMOVED*** {
      Expr.pseudos[i] = createButtonPseudo(i***REMOVED***;
    ***REMOVED***

    // Easy API for creating new setFilters
    function setFilters(***REMOVED*** {***REMOVED***
    setFilters.prototype = Expr.filters = Expr.pseudos;
    Expr.setFilters = new setFilters(***REMOVED***;
    tokenize = Sizzle.tokenize = function (selector, parseOnly***REMOVED*** {
      var matched,
        match,
        tokens,
        type,
        soFar,
        groups,
        preFilters,
        cached = tokenCache[selector + " "];
      if (cached***REMOVED*** {
        return parseOnly ? 0 : cached.slice(0***REMOVED***;
      ***REMOVED***
      soFar = selector;
      groups = [];
      preFilters = Expr.preFilter;
      while (soFar***REMOVED*** {
        // Comma and first run
        if (!matched || (match = rcomma.exec(soFar***REMOVED******REMOVED******REMOVED*** {
          if (match***REMOVED*** {
            // Don't consume trailing commas as valid
            soFar = soFar.slice(match[0].length***REMOVED*** || soFar;
          ***REMOVED***
          groups.push(tokens = []***REMOVED***;
        ***REMOVED***
        matched = false;

        // Combinators
        if (match = rcombinators.exec(soFar***REMOVED******REMOVED*** {
          matched = match.shift(***REMOVED***;
          tokens.push({
            value: matched,
            // Cast descendant combinators to space
            type: match[0].replace(rtrim, " "***REMOVED***
          ***REMOVED******REMOVED***;
          soFar = soFar.slice(matched.length***REMOVED***;
        ***REMOVED***

        // Filters
        for (type in Expr.filter***REMOVED*** {
          if ((match = matchExpr[type].exec(soFar***REMOVED******REMOVED*** && (!preFilters[type] || (match = preFilters[type](match***REMOVED******REMOVED******REMOVED******REMOVED*** {
            matched = match.shift(***REMOVED***;
            tokens.push({
              value: matched,
              type: type,
              matches: match
            ***REMOVED******REMOVED***;
            soFar = soFar.slice(matched.length***REMOVED***;
          ***REMOVED***
        ***REMOVED***
        if (!matched***REMOVED*** {
          break;
        ***REMOVED***
      ***REMOVED***

      // Return the length of the invalid excess
      // if we're just parsing
      // Otherwise, throw an error or return tokens
      return parseOnly ? soFar.length : soFar ? Sizzle.error(selector***REMOVED*** :
      // Cache the tokens
      tokenCache(selector, groups***REMOVED***.slice(0***REMOVED***;
    ***REMOVED***;
    function toSelector(tokens***REMOVED*** {
      var i = 0,
        len = tokens.length,
        selector = "";
      for (; i < len; i++***REMOVED*** {
        selector += tokens[i].value;
      ***REMOVED***
      return selector;
    ***REMOVED***
    function addCombinator(matcher, combinator, base***REMOVED*** {
      var dir = combinator.dir,
        skip = combinator.next,
        key = skip || dir,
        checkNonElements = base && key === "parentNode",
        doneName = done++;
      return combinator.first ?
      // Check against closest ancestor/preceding element
      function (elem, context, xml***REMOVED*** {
        while (elem = elem[dir]***REMOVED*** {
          if (elem.nodeType === 1 || checkNonElements***REMOVED*** {
            return matcher(elem, context, xml***REMOVED***;
          ***REMOVED***
        ***REMOVED***
        return false;
      ***REMOVED*** :
      // Check against all ancestor/preceding elements
      function (elem, context, xml***REMOVED*** {
        var oldCache,
          uniqueCache,
          outerCache,
          newCache = [dirruns, doneName];

        // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
        if (xml***REMOVED*** {
          while (elem = elem[dir]***REMOVED*** {
            if (elem.nodeType === 1 || checkNonElements***REMOVED*** {
              if (matcher(elem, context, xml***REMOVED******REMOVED*** {
                return true;
              ***REMOVED***
            ***REMOVED***
          ***REMOVED***
        ***REMOVED*** else {
          while (elem = elem[dir]***REMOVED*** {
            if (elem.nodeType === 1 || checkNonElements***REMOVED*** {
              outerCache = elem[expando] || (elem[expando] = {***REMOVED******REMOVED***;

              // Support: IE <9 only
              // Defend against cloned attroperties (jQuery gh-1709***REMOVED***
              uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {***REMOVED******REMOVED***;
              if (skip && skip === elem.nodeName.toLowerCase(***REMOVED******REMOVED*** {
                elem = elem[dir] || elem;
              ***REMOVED*** else if ((oldCache = uniqueCache[key]***REMOVED*** && oldCache[0] === dirruns && oldCache[1] === doneName***REMOVED*** {
                // Assign to newCache so results back-propagate to previous elements
                return newCache[2] = oldCache[2];
              ***REMOVED*** else {
                // Reuse newcache so results back-propagate to previous elements
                uniqueCache[key] = newCache;

                // A match means we're done; a fail means we have to keep checking
                if (newCache[2] = matcher(elem, context, xml***REMOVED******REMOVED*** {
                  return true;
                ***REMOVED***
              ***REMOVED***
            ***REMOVED***
          ***REMOVED***
        ***REMOVED***
        return false;
      ***REMOVED***;
    ***REMOVED***
    function elementMatcher(matchers***REMOVED*** {
      return matchers.length > 1 ? function (elem, context, xml***REMOVED*** {
        var i = matchers.length;
        while (i--***REMOVED*** {
          if (!matchers[i](elem, context, xml***REMOVED******REMOVED*** {
            return false;
          ***REMOVED***
        ***REMOVED***
        return true;
      ***REMOVED*** : matchers[0];
    ***REMOVED***
    function multipleContexts(selector, contexts, results***REMOVED*** {
      var i = 0,
        len = contexts.length;
      for (; i < len; i++***REMOVED*** {
        Sizzle(selector, contexts[i], results***REMOVED***;
      ***REMOVED***
      return results;
    ***REMOVED***
    function condense(unmatched, map, filter, context, xml***REMOVED*** {
      var elem,
        newUnmatched = [],
        i = 0,
        len = unmatched.length,
        mapped = map != null;
      for (; i < len; i++***REMOVED*** {
        if (elem = unmatched[i]***REMOVED*** {
          if (!filter || filter(elem, context, xml***REMOVED******REMOVED*** {
            newUnmatched.push(elem***REMOVED***;
            if (mapped***REMOVED*** {
              map.push(i***REMOVED***;
            ***REMOVED***
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***
      return newUnmatched;
    ***REMOVED***
    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector***REMOVED*** {
      if (postFilter && !postFilter[expando]***REMOVED*** {
        postFilter = setMatcher(postFilter***REMOVED***;
      ***REMOVED***
      if (postFinder && !postFinder[expando]***REMOVED*** {
        postFinder = setMatcher(postFinder, postSelector***REMOVED***;
      ***REMOVED***
      return markFunction(function (seed, results, context, xml***REMOVED*** {
        var temp,
          i,
          elem,
          preMap = [],
          postMap = [],
          preexisting = results.length,
          // Get initial elements from seed or context
          elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []***REMOVED***,
          // Prefilter to get matcher input, preserving a map for seed-results synchronization
          matcherIn = preFilter && (seed || !selector***REMOVED*** ? condense(elems, preMap, preFilter, context, xml***REMOVED*** : elems,
          matcherOut = matcher ?
          // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
          postFinder || (seed ? preFilter : preexisting || postFilter***REMOVED*** ?
          // ...intermediate processing is necessary
          [] :
          // ...otherwise use results directly
          results : matcherIn;

        // Find primary matches
        if (matcher***REMOVED*** {
          matcher(matcherIn, matcherOut, context, xml***REMOVED***;
        ***REMOVED***

        // Apply postFilter
        if (postFilter***REMOVED*** {
          temp = condense(matcherOut, postMap***REMOVED***;
          postFilter(temp, [], context, xml***REMOVED***;

          // Un-match failing elements by moving them back to matcherIn
          i = temp.length;
          while (i--***REMOVED*** {
            if (elem = temp[i]***REMOVED*** {
              matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem***REMOVED***;
            ***REMOVED***
          ***REMOVED***
        ***REMOVED***
        if (seed***REMOVED*** {
          if (postFinder || preFilter***REMOVED*** {
            if (postFinder***REMOVED*** {
              // Get the final matcherOut by condensing this intermediate into postFinder contexts
              temp = [];
              i = matcherOut.length;
              while (i--***REMOVED*** {
                if (elem = matcherOut[i]***REMOVED*** {
                  // Restore matcherIn since elem is not yet a final match
                  temp.push(matcherIn[i] = elem***REMOVED***;
                ***REMOVED***
              ***REMOVED***
              postFinder(null, matcherOut = [], temp, xml***REMOVED***;
            ***REMOVED***

            // Move matched elements from seed to results to keep them synchronized
            i = matcherOut.length;
            while (i--***REMOVED*** {
              if ((elem = matcherOut[i]***REMOVED*** && (temp = postFinder ? indexOf(seed, elem***REMOVED*** : preMap[i]***REMOVED*** > -1***REMOVED*** {
                seed[temp] = !(results[temp] = elem***REMOVED***;
              ***REMOVED***
            ***REMOVED***
          ***REMOVED***

          // Add elements to results, through postFinder if defined
        ***REMOVED*** else {
          matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length***REMOVED*** : matcherOut***REMOVED***;
          if (postFinder***REMOVED*** {
            postFinder(null, results, matcherOut, xml***REMOVED***;
          ***REMOVED*** else {
            push.apply(results, matcherOut***REMOVED***;
          ***REMOVED***
        ***REMOVED***
      ***REMOVED******REMOVED***;
    ***REMOVED***
    function matcherFromTokens(tokens***REMOVED*** {
      var checkContext,
        matcher,
        j,
        len = tokens.length,
        leadingRelative = Expr.relative[tokens[0].type],
        implicitRelative = leadingRelative || Expr.relative[" "],
        i = leadingRelative ? 1 : 0,
        // The foundational matcher ensures that elements are reachable from top-level context(s***REMOVED***
        matchContext = addCombinator(function (elem***REMOVED*** {
          return elem === checkContext;
        ***REMOVED***, implicitRelative, true***REMOVED***,
        matchAnyContext = addCombinator(function (elem***REMOVED*** {
          return indexOf(checkContext, elem***REMOVED*** > -1;
        ***REMOVED***, implicitRelative, true***REMOVED***,
        matchers = [function (elem, context, xml***REMOVED*** {
          var ret = !leadingRelative && (xml || context !== outermostContext***REMOVED*** || ((checkContext = context***REMOVED***.nodeType ? matchContext(elem, context, xml***REMOVED*** : matchAnyContext(elem, context, xml***REMOVED******REMOVED***;

          // Avoid hanging onto element (issue #299***REMOVED***
          checkContext = null;
          return ret;
        ***REMOVED***];
      for (; i < len; i++***REMOVED*** {
        if (matcher = Expr.relative[tokens[i].type]***REMOVED*** {
          matchers = [addCombinator(elementMatcher(matchers***REMOVED***, matcher***REMOVED***];
        ***REMOVED*** else {
          matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches***REMOVED***;

          // Return special upon seeing a positional matcher
          if (matcher[expando]***REMOVED*** {
            // Find the next relative operator (if any***REMOVED*** for proper handling
            j = ++i;
            for (; j < len; j++***REMOVED*** {
              if (Expr.relative[tokens[j].type]***REMOVED*** {
                break;
              ***REMOVED***
            ***REMOVED***
            return setMatcher(i > 1 && elementMatcher(matchers***REMOVED***, i > 1 && toSelector(
            // If the preceding token was a descendant combinator, insert an implicit any-element `*`
            tokens.slice(0, i - 1***REMOVED***.concat({
              value: tokens[i - 2].type === " " ? "*" : ""
            ***REMOVED******REMOVED******REMOVED***.replace(rtrim, "$1"***REMOVED***, matcher, i < j && matcherFromTokens(tokens.slice(i, j***REMOVED******REMOVED***, j < len && matcherFromTokens(tokens = tokens.slice(j***REMOVED******REMOVED***, j < len && toSelector(tokens***REMOVED******REMOVED***;
          ***REMOVED***
          matchers.push(matcher***REMOVED***;
        ***REMOVED***
      ***REMOVED***
      return elementMatcher(matchers***REMOVED***;
    ***REMOVED***
    function matcherFromGroupMatchers(elementMatchers, setMatchers***REMOVED*** {
      var bySet = setMatchers.length > 0,
        byElement = elementMatchers.length > 0,
        superMatcher = function (seed, context, xml, results, outermost***REMOVED*** {
          var elem,
            j,
            matcher,
            matchedCount = 0,
            i = "0",
            unmatched = seed && [],
            setMatched = [],
            contextBackup = outermostContext,
            // We must always have either seed elements or outermost context
            elems = seed || byElement && Expr.find["TAG"]("*", outermost***REMOVED***,
            // Use integer dirruns iff this is the outermost matcher
            dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random(***REMOVED*** || 0.1,
            len = elems.length;
          if (outermost***REMOVED*** {
            // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            outermostContext = context == document || context || outermost;
          ***REMOVED***

          // Add elements passing elementMatchers directly to results
          // Support: IE<9, Safari
          // Tolerate NodeList properties (IE: "length"; Safari: <number>***REMOVED*** matching elements by id
          for (; i !== len && (elem = elems[i]***REMOVED*** != null; i++***REMOVED*** {
            if (byElement && elem***REMOVED*** {
              j = 0;

              // Support: IE 11+, Edge 17 - 18+
              // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
              // two documents; shallow comparisons work.
              // eslint-disable-next-line eqeqeq
              if (!context && elem.ownerDocument != document***REMOVED*** {
                setDocument(elem***REMOVED***;
                xml = !documentIsHTML;
              ***REMOVED***
              while (matcher = elementMatchers[j++]***REMOVED*** {
                if (matcher(elem, context || document, xml***REMOVED******REMOVED*** {
                  results.push(elem***REMOVED***;
                  break;
                ***REMOVED***
              ***REMOVED***
              if (outermost***REMOVED*** {
                dirruns = dirrunsUnique;
              ***REMOVED***
            ***REMOVED***

            // Track unmatched elements for set filters
            if (bySet***REMOVED*** {
              // They will have gone through all possible matchers
              if (elem = !matcher && elem***REMOVED*** {
                matchedCount--;
              ***REMOVED***

              // Lengthen the array for every element, matched or not
              if (seed***REMOVED*** {
                unmatched.push(elem***REMOVED***;
              ***REMOVED***
            ***REMOVED***
          ***REMOVED***

          // `i` is now the count of elements visited above, and adding it to `matchedCount`
          // makes the latter nonnegative.
          matchedCount += i;

          // Apply set filters to unmatched elements
          // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
          // equals `i`***REMOVED***, unless we didn't visit _any_ elements in the above loop because we have
          // no element matchers and no seed.
          // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
          // case, which will result in a "00" `matchedCount` that differs from `i` but is also
          // numerically zero.
          if (bySet && i !== matchedCount***REMOVED*** {
            j = 0;
            while (matcher = setMatchers[j++]***REMOVED*** {
              matcher(unmatched, setMatched, context, xml***REMOVED***;
            ***REMOVED***
            if (seed***REMOVED*** {
              // Reintegrate element matches to eliminate the need for sorting
              if (matchedCount > 0***REMOVED*** {
                while (i--***REMOVED*** {
                  if (!(unmatched[i] || setMatched[i]***REMOVED******REMOVED*** {
                    setMatched[i] = pop.call(results***REMOVED***;
                  ***REMOVED***
                ***REMOVED***
              ***REMOVED***

              // Discard index placeholder values to get only actual matches
              setMatched = condense(setMatched***REMOVED***;
            ***REMOVED***

            // Add matches to results
            push.apply(results, setMatched***REMOVED***;

            // Seedless set matches succeeding multiple successful matchers stipulate sorting
            if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1***REMOVED*** {
              Sizzle.uniqueSort(results***REMOVED***;
            ***REMOVED***
          ***REMOVED***

          // Override manipulation of globals by nested matchers
          if (outermost***REMOVED*** {
            dirruns = dirrunsUnique;
            outermostContext = contextBackup;
          ***REMOVED***
          return unmatched;
        ***REMOVED***;
      return bySet ? markFunction(superMatcher***REMOVED*** : superMatcher;
    ***REMOVED***
    compile = Sizzle.compile = function (selector, match /* Internal Use Only */***REMOVED*** {
      var i,
        setMatchers = [],
        elementMatchers = [],
        cached = compilerCache[selector + " "];
      if (!cached***REMOVED*** {
        // Generate a function of recursive functions that can be used to check each element
        if (!match***REMOVED*** {
          match = tokenize(selector***REMOVED***;
        ***REMOVED***
        i = match.length;
        while (i--***REMOVED*** {
          cached = matcherFromTokens(match[i]***REMOVED***;
          if (cached[expando]***REMOVED*** {
            setMatchers.push(cached***REMOVED***;
          ***REMOVED*** else {
            elementMatchers.push(cached***REMOVED***;
          ***REMOVED***
        ***REMOVED***

        // Cache the compiled function
        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers***REMOVED******REMOVED***;

        // Save selector and tokenization
        cached.selector = selector;
      ***REMOVED***
      return cached;
    ***REMOVED***;

    /**
     * A low-level selection function that works with Sizzle's compiled
     *  selector functions
     * @param {String|Function***REMOVED*** selector A selector or a pre-compiled
     *  selector function built with Sizzle.compile
     * @param {Element***REMOVED*** context
     * @param {Array***REMOVED*** [results]
     * @param {Array***REMOVED*** [seed] A set of elements to match against
     */
    select = Sizzle.select = function (selector, context, results, seed***REMOVED*** {
      var i,
        tokens,
        token,
        type,
        find,
        compiled = typeof selector === "function" && selector,
        match = !seed && tokenize(selector = compiled.selector || selector***REMOVED***;
      results = results || [];

      // Try to minimize operations if there is only one selector in the list and no seed
      // (the latter of which guarantees us context***REMOVED***
      if (match.length === 1***REMOVED*** {
        // Reduce context if the leading compound selector is an ID
        tokens = match[0] = match[0].slice(0***REMOVED***;
        if (tokens.length > 2 && (token = tokens[0]***REMOVED***.type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]***REMOVED*** {
          context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape***REMOVED***, context***REMOVED*** || []***REMOVED***[0];
          if (!context***REMOVED*** {
            return results;

            // Precompiled matchers will still verify ancestry, so step up a level
          ***REMOVED*** else if (compiled***REMOVED*** {
            context = context.parentNode;
          ***REMOVED***
          selector = selector.slice(tokens.shift(***REMOVED***.value.length***REMOVED***;
        ***REMOVED***

        // Fetch a seed set for right-to-left matching
        i = matchExpr["needsContext"].test(selector***REMOVED*** ? 0 : tokens.length;
        while (i--***REMOVED*** {
          token = tokens[i];

          // Abort if we hit a combinator
          if (Expr.relative[type = token.type]***REMOVED*** {
            break;
          ***REMOVED***
          if (find = Expr.find[type]***REMOVED*** {
            // Search, expanding context for leading sibling combinators
            if (seed = find(token.matches[0].replace(runescape, funescape***REMOVED***, rsibling.test(tokens[0].type***REMOVED*** && testContext(context.parentNode***REMOVED*** || context***REMOVED******REMOVED*** {
              // If seed is empty or no tokens remain, we can return early
              tokens.splice(i, 1***REMOVED***;
              selector = seed.length && toSelector(tokens***REMOVED***;
              if (!selector***REMOVED*** {
                push.apply(results, seed***REMOVED***;
                return results;
              ***REMOVED***
              break;
            ***REMOVED***
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***

      // Compile and execute a filtering function if one is not provided
      // Provide `match` to avoid retokenization if we modified the selector above
      (compiled || compile(selector, match***REMOVED******REMOVED***(seed, context, !documentIsHTML, results, !context || rsibling.test(selector***REMOVED*** && testContext(context.parentNode***REMOVED*** || context***REMOVED***;
      return results;
    ***REMOVED***;

    // One-time assignments

    // Sort stability
    support.sortStable = expando.split(""***REMOVED***.sort(sortOrder***REMOVED***.join(""***REMOVED*** === expando;

    // Support: Chrome 14-35+
    // Always assume duplicates if they aren't passed to the comparison function
    support.detectDuplicates = !!hasDuplicate;

    // Initialize against the default document
    setDocument(***REMOVED***;

    // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27***REMOVED***
    // Detached nodes confoundingly follow *each other*
    support.sortDetached = assert(function (el***REMOVED*** {
      // Should return 1, but returns 4 (following***REMOVED***
      return el.compareDocumentPosition(document.createElement("fieldset"***REMOVED******REMOVED*** & 1;
    ***REMOVED******REMOVED***;

    // Support: IE<8
    // Prevent attribute/property "interpolation"
    // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
    if (!assert(function (el***REMOVED*** {
      el.innerHTML = "<a href='#'></a>";
      return el.firstChild.getAttribute("href"***REMOVED*** === "#";
    ***REMOVED******REMOVED******REMOVED*** {
      addHandle("type|href|height|width", function (elem, name, isXML***REMOVED*** {
        if (!isXML***REMOVED*** {
          return elem.getAttribute(name, name.toLowerCase(***REMOVED*** === "type" ? 1 : 2***REMOVED***;
        ***REMOVED***
      ***REMOVED******REMOVED***;
    ***REMOVED***

    // Support: IE<9
    // Use defaultValue in place of getAttribute("value"***REMOVED***
    if (!support.attributes || !assert(function (el***REMOVED*** {
      el.innerHTML = "<input/>";
      el.firstChild.setAttribute("value", ""***REMOVED***;
      return el.firstChild.getAttribute("value"***REMOVED*** === "";
    ***REMOVED******REMOVED******REMOVED*** {
      addHandle("value", function (elem, _name, isXML***REMOVED*** {
        if (!isXML && elem.nodeName.toLowerCase(***REMOVED*** === "input"***REMOVED*** {
          return elem.defaultValue;
        ***REMOVED***
      ***REMOVED******REMOVED***;
    ***REMOVED***

    // Support: IE<9
    // Use getAttributeNode to fetch booleans when getAttribute lies
    if (!assert(function (el***REMOVED*** {
      return el.getAttribute("disabled"***REMOVED*** == null;
    ***REMOVED******REMOVED******REMOVED*** {
      addHandle(booleans, function (elem, name, isXML***REMOVED*** {
        var val;
        if (!isXML***REMOVED*** {
          return elem[name] === true ? name.toLowerCase(***REMOVED*** : (val = elem.getAttributeNode(name***REMOVED******REMOVED*** && val.specified ? val.value : null;
        ***REMOVED***
      ***REMOVED******REMOVED***;
    ***REMOVED***
    return Sizzle;
  ***REMOVED***(window***REMOVED***;
  jQuery.find = Sizzle;
  jQuery.expr = Sizzle.selectors;

  // Deprecated
  jQuery.expr[":"] = jQuery.expr.pseudos;
  jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
  jQuery.text = Sizzle.getText;
  jQuery.isXMLDoc = Sizzle.isXML;
  jQuery.contains = Sizzle.contains;
  jQuery.escapeSelector = Sizzle.escape;
  var dir = function (elem, dir, until***REMOVED*** {
    var matched = [],
      truncate = until !== undefined;
    while ((elem = elem[dir]***REMOVED*** && elem.nodeType !== 9***REMOVED*** {
      if (elem.nodeType === 1***REMOVED*** {
        if (truncate && jQuery(elem***REMOVED***.is(until***REMOVED******REMOVED*** {
          break;
        ***REMOVED***
        matched.push(elem***REMOVED***;
      ***REMOVED***
    ***REMOVED***
    return matched;
  ***REMOVED***;
  var siblings = function (n, elem***REMOVED*** {
    var matched = [];
    for (; n; n = n.nextSibling***REMOVED*** {
      if (n.nodeType === 1 && n !== elem***REMOVED*** {
        matched.push(n***REMOVED***;
      ***REMOVED***
    ***REMOVED***
    return matched;
  ***REMOVED***;
  var rneedsContext = jQuery.expr.match.needsContext;
  function nodeName(elem, name***REMOVED*** {
    return elem.nodeName && elem.nodeName.toLowerCase(***REMOVED*** === name.toLowerCase(***REMOVED***;
  ***REMOVED***
  ;
  var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]****REMOVED***[\x20\t\r\n\f]*\/?>(?:<\/\1>|***REMOVED***$/i;

  // Implement the identical functionality for filter and not
  function winnow(elements, qualifier, not***REMOVED*** {
    if (isFunction(qualifier***REMOVED******REMOVED*** {
      return jQuery.grep(elements, function (elem, i***REMOVED*** {
        return !!qualifier.call(elem, i, elem***REMOVED*** !== not;
      ***REMOVED******REMOVED***;
    ***REMOVED***

    // Single element
    if (qualifier.nodeType***REMOVED*** {
      return jQuery.grep(elements, function (elem***REMOVED*** {
        return elem === qualifier !== not;
      ***REMOVED******REMOVED***;
    ***REMOVED***

    // Arraylike of elements (jQuery, arguments, Array***REMOVED***
    if (typeof qualifier !== "string"***REMOVED*** {
      return jQuery.grep(elements, function (elem***REMOVED*** {
        return indexOf.call(qualifier, elem***REMOVED*** > -1 !== not;
      ***REMOVED******REMOVED***;
    ***REMOVED***

    // Filtered directly for both simple and complex selectors
    return jQuery.filter(qualifier, elements, not***REMOVED***;
  ***REMOVED***
  jQuery.filter = function (expr, elems, not***REMOVED*** {
    var elem = elems[0];
    if (not***REMOVED*** {
      expr = ":not(" + expr + "***REMOVED***";
    ***REMOVED***
    if (elems.length === 1 && elem.nodeType === 1***REMOVED*** {
      return jQuery.find.matchesSelector(elem, expr***REMOVED*** ? [elem] : [];
    ***REMOVED***
    return jQuery.find.matches(expr, jQuery.grep(elems, function (elem***REMOVED*** {
      return elem.nodeType === 1;
    ***REMOVED******REMOVED******REMOVED***;
  ***REMOVED***;
  jQuery.fn.extend({
    find: function (selector***REMOVED*** {
      var i,
        ret,
        len = this.length,
        self = this;
      if (typeof selector !== "string"***REMOVED*** {
        return this.pushStack(jQuery(selector***REMOVED***.filter(function (***REMOVED*** {
          for (i = 0; i < len; i++***REMOVED*** {
            if (jQuery.contains(self[i], this***REMOVED******REMOVED*** {
              return true;
            ***REMOVED***
          ***REMOVED***
        ***REMOVED******REMOVED******REMOVED***;
      ***REMOVED***
      ret = this.pushStack([]***REMOVED***;
      for (i = 0; i < len; i++***REMOVED*** {
        jQuery.find(selector, self[i], ret***REMOVED***;
      ***REMOVED***
      return len > 1 ? jQuery.uniqueSort(ret***REMOVED*** : ret;
    ***REMOVED***,
    filter: function (selector***REMOVED*** {
      return this.pushStack(winnow(this, selector || [], false***REMOVED******REMOVED***;
    ***REMOVED***,
    not: function (selector***REMOVED*** {
      return this.pushStack(winnow(this, selector || [], true***REMOVED******REMOVED***;
    ***REMOVED***,
    is: function (selector***REMOVED*** {
      return !!winnow(this,
      // If this is a positional/relative selector, check membership in the returned set
      // so $("p:first"***REMOVED***.is("p:last"***REMOVED*** won't return true for a doc with two "p".
      typeof selector === "string" && rneedsContext.test(selector***REMOVED*** ? jQuery(selector***REMOVED*** : selector || [], false***REMOVED***.length;
    ***REMOVED***
  ***REMOVED******REMOVED***;

  // Initialize a jQuery object

  // A central reference to the root jQuery(document***REMOVED***
  var rootjQuery,
    // A simple way to check for HTML strings
    // Prioritize #id over <tag> to avoid XSS via location.hash (#9521***REMOVED***
    // Strict HTML recognition (#11290: must start with <***REMOVED***
    // Shortcut simple #id case for speed
    rquickExpr = /^(?:\s*(<[\w\W]+>***REMOVED***[^>]*|#([\w-]+***REMOVED******REMOVED***$/,
    init = jQuery.fn.init = function (selector, context, root***REMOVED*** {
      var match, elem;

      // HANDLE: $(""***REMOVED***, $(null***REMOVED***, $(undefined***REMOVED***, $(false***REMOVED***
      if (!selector***REMOVED*** {
        return this;
      ***REMOVED***

      // Method init(***REMOVED*** accepts an alternate rootjQuery
      // so migrate can support jQuery.sub (gh-2101***REMOVED***
      root = root || rootjQuery;

      // Handle HTML strings
      if (typeof selector === "string"***REMOVED*** {
        if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3***REMOVED*** {
          // Assume that strings that start and end with <> are HTML and skip the regex check
          match = [null, selector, null];
        ***REMOVED*** else {
          match = rquickExpr.exec(selector***REMOVED***;
        ***REMOVED***

        // Match html or make sure no context is specified for #id
        if (match && (match[1] || !context***REMOVED******REMOVED*** {
          // HANDLE: $(html***REMOVED*** -> $(array***REMOVED***
          if (match[1]***REMOVED*** {
            context = context instanceof jQuery ? context[0] : context;

            // Option to run scripts is true for back-compat
            // Intentionally let the error be thrown if parseHTML is not present
            jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true***REMOVED******REMOVED***;

            // HANDLE: $(html, props***REMOVED***
            if (rsingleTag.test(match[1]***REMOVED*** && jQuery.isPlainObject(context***REMOVED******REMOVED*** {
              for (match in context***REMOVED*** {
                // Properties of context are called as methods if possible
                if (isFunction(this[match]***REMOVED******REMOVED*** {
                  this[match](context[match]***REMOVED***;

                  // ...and otherwise set as attributes
                ***REMOVED*** else {
                  this.attr(match, context[match]***REMOVED***;
                ***REMOVED***
              ***REMOVED***
            ***REMOVED***
            return this;

            // HANDLE: $(#id***REMOVED***
          ***REMOVED*** else {
            elem = document.getElementById(match[2]***REMOVED***;
            if (elem***REMOVED*** {
              // Inject the element directly into the jQuery object
              this[0] = elem;
              this.length = 1;
            ***REMOVED***
            return this;
          ***REMOVED***

          // HANDLE: $(expr, $(...***REMOVED******REMOVED***
        ***REMOVED*** else if (!context || context.jquery***REMOVED*** {
          return (context || root***REMOVED***.find(selector***REMOVED***;

          // HANDLE: $(expr, context***REMOVED***
          // (which is just equivalent to: $(context***REMOVED***.find(expr***REMOVED***
        ***REMOVED*** else {
          return this.constructor(context***REMOVED***.find(selector***REMOVED***;
        ***REMOVED***

        // HANDLE: $(DOMElement***REMOVED***
      ***REMOVED*** else if (selector.nodeType***REMOVED*** {
        this[0] = selector;
        this.length = 1;
        return this;

        // HANDLE: $(function***REMOVED***
        // Shortcut for document ready
      ***REMOVED*** else if (isFunction(selector***REMOVED******REMOVED*** {
        return root.ready !== undefined ? root.ready(selector***REMOVED*** :
        // Execute immediately if ready is not present
        selector(jQuery***REMOVED***;
      ***REMOVED***
      return jQuery.makeArray(selector, this***REMOVED***;
    ***REMOVED***;

  // Give the init function the jQuery prototype for later instantiation
  init.prototype = jQuery.fn;

  // Initialize central reference
  rootjQuery = jQuery(document***REMOVED***;
  var rparentsprev = /^(?:parents|prev(?:Until|All***REMOVED******REMOVED***/,
    // Methods guaranteed to produce a unique set when starting from a unique set
    guaranteedUnique = {
      children: true,
      contents: true,
      next: true,
      prev: true
    ***REMOVED***;
  jQuery.fn.extend({
    has: function (target***REMOVED*** {
      var targets = jQuery(target, this***REMOVED***,
        l = targets.length;
      return this.filter(function (***REMOVED*** {
        var i = 0;
        for (; i < l; i++***REMOVED*** {
          if (jQuery.contains(this, targets[i]***REMOVED******REMOVED*** {
            return true;
          ***REMOVED***
        ***REMOVED***
      ***REMOVED******REMOVED***;
    ***REMOVED***,
    closest: function (selectors, context***REMOVED*** {
      var cur,
        i = 0,
        l = this.length,
        matched = [],
        targets = typeof selectors !== "string" && jQuery(selectors***REMOVED***;

      // Positional selectors never match, since there's no _selection_ context
      if (!rneedsContext.test(selectors***REMOVED******REMOVED*** {
        for (; i < l; i++***REMOVED*** {
          for (cur = this[i]; cur && cur !== context; cur = cur.parentNode***REMOVED*** {
            // Always skip document fragments
            if (cur.nodeType < 11 && (targets ? targets.index(cur***REMOVED*** > -1 :
            // Don't pass non-elements to Sizzle
            cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors***REMOVED******REMOVED******REMOVED*** {
              matched.push(cur***REMOVED***;
              break;
            ***REMOVED***
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***
      return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched***REMOVED*** : matched***REMOVED***;
    ***REMOVED***,
    // Determine the position of an element within the set
    index: function (elem***REMOVED*** {
      // No argument, return index in parent
      if (!elem***REMOVED*** {
        return this[0] && this[0].parentNode ? this.first(***REMOVED***.prevAll(***REMOVED***.length : -1;
      ***REMOVED***

      // Index in selector
      if (typeof elem === "string"***REMOVED*** {
        return indexOf.call(jQuery(elem***REMOVED***, this[0]***REMOVED***;
      ***REMOVED***

      // Locate the position of the desired element
      return indexOf.call(this,
      // If it receives a jQuery object, the first element is used
      elem.jquery ? elem[0] : elem***REMOVED***;
    ***REMOVED***,
    add: function (selector, context***REMOVED*** {
      return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(***REMOVED***, jQuery(selector, context***REMOVED******REMOVED******REMOVED******REMOVED***;
    ***REMOVED***,
    addBack: function (selector***REMOVED*** {
      return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector***REMOVED******REMOVED***;
    ***REMOVED***
  ***REMOVED******REMOVED***;
  function sibling(cur, dir***REMOVED*** {
    while ((cur = cur[dir]***REMOVED*** && cur.nodeType !== 1***REMOVED*** {***REMOVED***
    return cur;
  ***REMOVED***
  jQuery.each({
    parent: function (elem***REMOVED*** {
      var parent = elem.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    ***REMOVED***,
    parents: function (elem***REMOVED*** {
      return dir(elem, "parentNode"***REMOVED***;
    ***REMOVED***,
    parentsUntil: function (elem, _i, until***REMOVED*** {
      return dir(elem, "parentNode", until***REMOVED***;
    ***REMOVED***,
    next: function (elem***REMOVED*** {
      return sibling(elem, "nextSibling"***REMOVED***;
    ***REMOVED***,
    prev: function (elem***REMOVED*** {
      return sibling(elem, "previousSibling"***REMOVED***;
    ***REMOVED***,
    nextAll: function (elem***REMOVED*** {
      return dir(elem, "nextSibling"***REMOVED***;
    ***REMOVED***,
    prevAll: function (elem***REMOVED*** {
      return dir(elem, "previousSibling"***REMOVED***;
    ***REMOVED***,
    nextUntil: function (elem, _i, until***REMOVED*** {
      return dir(elem, "nextSibling", until***REMOVED***;
    ***REMOVED***,
    prevUntil: function (elem, _i, until***REMOVED*** {
      return dir(elem, "previousSibling", until***REMOVED***;
    ***REMOVED***,
    siblings: function (elem***REMOVED*** {
      return siblings((elem.parentNode || {***REMOVED******REMOVED***.firstChild, elem***REMOVED***;
    ***REMOVED***,
    children: function (elem***REMOVED*** {
      return siblings(elem.firstChild***REMOVED***;
    ***REMOVED***,
    contents: function (elem***REMOVED*** {
      if (elem.contentDocument != null &&
      // Support: IE 11+
      // <object> elements with no `data` attribute has an object
      // `contentDocument` with a `null` prototype.
      getProto(elem.contentDocument***REMOVED******REMOVED*** {
        return elem.contentDocument;
      ***REMOVED***

      // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
      // Treat the template element as a regular one in browsers that
      // don't support it.
      if (nodeName(elem, "template"***REMOVED******REMOVED*** {
        elem = elem.content || elem;
      ***REMOVED***
      return jQuery.merge([], elem.childNodes***REMOVED***;
    ***REMOVED***
  ***REMOVED***, function (name, fn***REMOVED*** {
    jQuery.fn[name] = function (until, selector***REMOVED*** {
      var matched = jQuery.map(this, fn, until***REMOVED***;
      if (name.slice(-5***REMOVED*** !== "Until"***REMOVED*** {
        selector = until;
      ***REMOVED***
      if (selector && typeof selector === "string"***REMOVED*** {
        matched = jQuery.filter(selector, matched***REMOVED***;
      ***REMOVED***
      if (this.length > 1***REMOVED*** {
        // Remove duplicates
        if (!guaranteedUnique[name]***REMOVED*** {
          jQuery.uniqueSort(matched***REMOVED***;
        ***REMOVED***

        // Reverse order for parents* and prev-derivatives
        if (rparentsprev.test(name***REMOVED******REMOVED*** {
          matched.reverse(***REMOVED***;
        ***REMOVED***
      ***REMOVED***
      return this.pushStack(matched***REMOVED***;
    ***REMOVED***;
  ***REMOVED******REMOVED***;
  var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;

  // Convert String-formatted options into Object-formatted ones
  function createOptions(options***REMOVED*** {
    var object = {***REMOVED***;
    jQuery.each(options.match(rnothtmlwhite***REMOVED*** || [], function (_, flag***REMOVED*** {
      object[flag] = true;
    ***REMOVED******REMOVED***;
    return object;
  ***REMOVED***

  /*
   * Create a callback list using the following parameters:
   *
   *	options: an optional list of space-separated options that will change how
   *			the callback list behaves or a more traditional option object
   *
   * By default a callback list will act like an event callback list and can be
   * "fired" multiple times.
   *
   * Possible options:
   *
   *	once:			will ensure the callback list can only be fired once (like a Deferred***REMOVED***
   *
   *	memory:			will keep track of previous values and will call any callback added
   *					after the list has been fired right away with the latest "memorized"
   *					values (like a Deferred***REMOVED***
   *
   *	unique:			will ensure a callback can only be added once (no duplicate in the list***REMOVED***
   *
   *	stopOnFalse:	interrupt callings when a callback returns false
   *
   */
  jQuery.Callbacks = function (options***REMOVED*** {
    // Convert options from String-formatted to Object-formatted if needed
    // (we check in cache first***REMOVED***
    options = typeof options === "string" ? createOptions(options***REMOVED*** : jQuery.extend({***REMOVED***, options***REMOVED***;
    var
      // Flag to know if list is currently firing
      firing,
      // Last fire value for non-forgettable lists
      memory,
      // Flag to know if list was already fired
      fired,
      // Flag to prevent firing
      locked,
      // Actual callback list
      list = [],
      // Queue of execution data for repeatable lists
      queue = [],
      // Index of currently firing callback (modified by add/remove as needed***REMOVED***
      firingIndex = -1,
      // Fire callbacks
      fire = function (***REMOVED*** {
        // Enforce single-firing
        locked = locked || options.once;

        // Execute callbacks for all pending executions,
        // respecting firingIndex overrides and runtime changes
        fired = firing = true;
        for (; queue.length; firingIndex = -1***REMOVED*** {
          memory = queue.shift(***REMOVED***;
          while (++firingIndex < list.length***REMOVED*** {
            // Run callback and check for early termination
            if (list[firingIndex].apply(memory[0], memory[1]***REMOVED*** === false && options.stopOnFalse***REMOVED*** {
              // Jump to end and forget the data so .add doesn't re-fire
              firingIndex = list.length;
              memory = false;
            ***REMOVED***
          ***REMOVED***
        ***REMOVED***

        // Forget the data if we're done with it
        if (!options.memory***REMOVED*** {
          memory = false;
        ***REMOVED***
        firing = false;

        // Clean up if we're done firing for good
        if (locked***REMOVED*** {
          // Keep an empty list if we have data for future add calls
          if (memory***REMOVED*** {
            list = [];

            // Otherwise, this object is spent
          ***REMOVED*** else {
            list = "";
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***,
      // Actual Callbacks object
      self = {
        // Add a callback or a collection of callbacks to the list
        add: function (***REMOVED*** {
          if (list***REMOVED*** {
            // If we have memory from a past run, we should fire after adding
            if (memory && !firing***REMOVED*** {
              firingIndex = list.length - 1;
              queue.push(memory***REMOVED***;
            ***REMOVED***
            (function add(args***REMOVED*** {
              jQuery.each(args, function (_, arg***REMOVED*** {
                if (isFunction(arg***REMOVED******REMOVED*** {
                  if (!options.unique || !self.has(arg***REMOVED******REMOVED*** {
                    list.push(arg***REMOVED***;
                  ***REMOVED***
                ***REMOVED*** else if (arg && arg.length && toType(arg***REMOVED*** !== "string"***REMOVED*** {
                  // Inspect recursively
                  add(arg***REMOVED***;
                ***REMOVED***
              ***REMOVED******REMOVED***;
            ***REMOVED******REMOVED***(arguments***REMOVED***;
            if (memory && !firing***REMOVED*** {
              fire(***REMOVED***;
            ***REMOVED***
          ***REMOVED***
          return this;
        ***REMOVED***,
        // Remove a callback from the list
        remove: function (***REMOVED*** {
          jQuery.each(arguments, function (_, arg***REMOVED*** {
            var index;
            while ((index = jQuery.inArray(arg, list, index***REMOVED******REMOVED*** > -1***REMOVED*** {
              list.splice(index, 1***REMOVED***;

              // Handle firing indexes
              if (index <= firingIndex***REMOVED*** {
                firingIndex--;
              ***REMOVED***
            ***REMOVED***
          ***REMOVED******REMOVED***;
          return this;
        ***REMOVED***,
        // Check if a given callback is in the list.
        // If no argument is given, return whether or not list has callbacks attached.
        has: function (fn***REMOVED*** {
          return fn ? jQuery.inArray(fn, list***REMOVED*** > -1 : list.length > 0;
        ***REMOVED***,
        // Remove all callbacks from the list
        empty: function (***REMOVED*** {
          if (list***REMOVED*** {
            list = [];
          ***REMOVED***
          return this;
        ***REMOVED***,
        // Disable .fire and .add
        // Abort any current/pending executions
        // Clear all callbacks and values
        disable: function (***REMOVED*** {
          locked = queue = [];
          list = memory = "";
          return this;
        ***REMOVED***,
        disabled: function (***REMOVED*** {
          return !list;
        ***REMOVED***,
        // Disable .fire
        // Also disable .add unless we have memory (since it would have no effect***REMOVED***
        // Abort any pending executions
        lock: function (***REMOVED*** {
          locked = queue = [];
          if (!memory && !firing***REMOVED*** {
            list = memory = "";
          ***REMOVED***
          return this;
        ***REMOVED***,
        locked: function (***REMOVED*** {
          return !!locked;
        ***REMOVED***,
        // Call all callbacks with the given context and arguments
        fireWith: function (context, args***REMOVED*** {
          if (!locked***REMOVED*** {
            args = args || [];
            args = [context, args.slice ? args.slice(***REMOVED*** : args];
            queue.push(args***REMOVED***;
            if (!firing***REMOVED*** {
              fire(***REMOVED***;
            ***REMOVED***
          ***REMOVED***
          return this;
        ***REMOVED***,
        // Call all the callbacks with the given arguments
        fire: function (***REMOVED*** {
          self.fireWith(this, arguments***REMOVED***;
          return this;
        ***REMOVED***,
        // To know if the callbacks have already been called at least once
        fired: function (***REMOVED*** {
          return !!fired;
        ***REMOVED***
      ***REMOVED***;
    return self;
  ***REMOVED***;
  function Identity(v***REMOVED*** {
    return v;
  ***REMOVED***
  function Thrower(ex***REMOVED*** {
    throw ex;
  ***REMOVED***
  function adoptValue(value, resolve, reject, noValue***REMOVED*** {
    var method;
    try {
      // Check for promise aspect first to privilege synchronous behavior
      if (value && isFunction(method = value.promise***REMOVED******REMOVED*** {
        method.call(value***REMOVED***.done(resolve***REMOVED***.fail(reject***REMOVED***;

        // Other thenables
      ***REMOVED*** else if (value && isFunction(method = value.then***REMOVED******REMOVED*** {
        method.call(value, resolve, reject***REMOVED***;

        // Other non-thenables
      ***REMOVED*** else {
        // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
        // * false: [ value ].slice( 0 ***REMOVED*** => resolve( value ***REMOVED***
        // * true: [ value ].slice( 1 ***REMOVED*** => resolve(***REMOVED***
        resolve.apply(undefined, [value].slice(noValue***REMOVED******REMOVED***;
      ***REMOVED***

      // For Promises/A+, convert exceptions into rejections
      // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
      // Deferred#then to conditionally suppress rejection.
    ***REMOVED*** catch (value***REMOVED*** {
      // Support: Android 4.0 only
      // Strict mode functions invoked without .call/.apply get global-object context
      reject.apply(undefined, [value]***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  jQuery.extend({
    Deferred: function (func***REMOVED*** {
      var tuples = [
        // action, add listener, callbacks,
        // ... .then handlers, argument index, [final state]
        ["notify", "progress", jQuery.Callbacks("memory"***REMOVED***, jQuery.Callbacks("memory"***REMOVED***, 2], ["resolve", "done", jQuery.Callbacks("once memory"***REMOVED***, jQuery.Callbacks("once memory"***REMOVED***, 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"***REMOVED***, jQuery.Callbacks("once memory"***REMOVED***, 1, "rejected"]],
        state = "pending",
        promise = {
          state: function (***REMOVED*** {
            return state;
          ***REMOVED***,
          always: function (***REMOVED*** {
            deferred.done(arguments***REMOVED***.fail(arguments***REMOVED***;
            return this;
          ***REMOVED***,
          "catch": function (fn***REMOVED*** {
            return promise.then(null, fn***REMOVED***;
          ***REMOVED***,
          // Keep pipe for back-compat
          pipe: function /* fnDone, fnFail, fnProgress */
          (***REMOVED*** {
            var fns = arguments;
            return jQuery.Deferred(function (newDefer***REMOVED*** {
              jQuery.each(tuples, function (_i, tuple***REMOVED*** {
                // Map tuples (progress, done, fail***REMOVED*** to arguments (done, fail, progress***REMOVED***
                var fn = isFunction(fns[tuple[4]]***REMOVED*** && fns[tuple[4]];

                // deferred.progress(function(***REMOVED*** { bind to newDefer or newDefer.notify ***REMOVED******REMOVED***
                // deferred.done(function(***REMOVED*** { bind to newDefer or newDefer.resolve ***REMOVED******REMOVED***
                // deferred.fail(function(***REMOVED*** { bind to newDefer or newDefer.reject ***REMOVED******REMOVED***
                deferred[tuple[1]](function (***REMOVED*** {
                  var returned = fn && fn.apply(this, arguments***REMOVED***;
                  if (returned && isFunction(returned.promise***REMOVED******REMOVED*** {
                    returned.promise(***REMOVED***.progress(newDefer.notify***REMOVED***.done(newDefer.resolve***REMOVED***.fail(newDefer.reject***REMOVED***;
                  ***REMOVED*** else {
                    newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments***REMOVED***;
                  ***REMOVED***
                ***REMOVED******REMOVED***;
              ***REMOVED******REMOVED***;
              fns = null;
            ***REMOVED******REMOVED***.promise(***REMOVED***;
          ***REMOVED***,
          then: function (onFulfilled, onRejected, onProgress***REMOVED*** {
            var maxDepth = 0;
            function resolve(depth, deferred, handler, special***REMOVED*** {
              return function (***REMOVED*** {
                var that = this,
                  args = arguments,
                  mightThrow = function (***REMOVED*** {
                    var returned, then;

                    // Support: Promises/A+ section 2.3.3.3.3
                    // https://promisesaplus.com/#point-59
                    // Ignore double-resolution attempts
                    if (depth < maxDepth***REMOVED*** {
                      return;
                    ***REMOVED***
                    returned = handler.apply(that, args***REMOVED***;

                    // Support: Promises/A+ section 2.3.1
                    // https://promisesaplus.com/#point-48
                    if (returned === deferred.promise(***REMOVED******REMOVED*** {
                      throw new TypeError("Thenable self-resolution"***REMOVED***;
                    ***REMOVED***

                    // Support: Promises/A+ sections 2.3.3.1, 3.5
                    // https://promisesaplus.com/#point-54
                    // https://promisesaplus.com/#point-75
                    // Retrieve `then` only once
                    then = returned && (
                    // Support: Promises/A+ section 2.3.4
                    // https://promisesaplus.com/#point-64
                    // Only check objects and functions for thenability
                    typeof returned === "object" || typeof returned === "function"***REMOVED*** && returned.then;

                    // Handle a returned thenable
                    if (isFunction(then***REMOVED******REMOVED*** {
                      // Special processors (notify***REMOVED*** just wait for resolution
                      if (special***REMOVED*** {
                        then.call(returned, resolve(maxDepth, deferred, Identity, special***REMOVED***, resolve(maxDepth, deferred, Thrower, special***REMOVED******REMOVED***;

                        // Normal processors (resolve***REMOVED*** also hook into progress
                      ***REMOVED*** else {
                        // ...and disregard older resolution values
                        maxDepth++;
                        then.call(returned, resolve(maxDepth, deferred, Identity, special***REMOVED***, resolve(maxDepth, deferred, Thrower, special***REMOVED***, resolve(maxDepth, deferred, Identity, deferred.notifyWith***REMOVED******REMOVED***;
                      ***REMOVED***

                      // Handle all other returned values
                    ***REMOVED*** else {
                      // Only substitute handlers pass on context
                      // and multiple values (non-spec behavior***REMOVED***
                      if (handler !== Identity***REMOVED*** {
                        that = undefined;
                        args = [returned];
                      ***REMOVED***

                      // Process the value(s***REMOVED***
                      // Default process is resolve
                      (special || deferred.resolveWith***REMOVED***(that, args***REMOVED***;
                    ***REMOVED***
                  ***REMOVED***,
                  // Only normal processors (resolve***REMOVED*** catch and reject exceptions
                  process = special ? mightThrow : function (***REMOVED*** {
                    try {
                      mightThrow(***REMOVED***;
                    ***REMOVED*** catch (e***REMOVED*** {
                      if (jQuery.Deferred.exceptionHook***REMOVED*** {
                        jQuery.Deferred.exceptionHook(e, process.stackTrace***REMOVED***;
                      ***REMOVED***

                      // Support: Promises/A+ section 2.3.3.3.4.1
                      // https://promisesaplus.com/#point-61
                      // Ignore post-resolution exceptions
                      if (depth + 1 >= maxDepth***REMOVED*** {
                        // Only substitute handlers pass on context
                        // and multiple values (non-spec behavior***REMOVED***
                        if (handler !== Thrower***REMOVED*** {
                          that = undefined;
                          args = [e];
                        ***REMOVED***
                        deferred.rejectWith(that, args***REMOVED***;
                      ***REMOVED***
                    ***REMOVED***
                  ***REMOVED***;

                // Support: Promises/A+ section 2.3.3.3.1
                // https://promisesaplus.com/#point-57
                // Re-resolve promises immediately to dodge false rejection from
                // subsequent errors
                if (depth***REMOVED*** {
                  process(***REMOVED***;
                ***REMOVED*** else {
                  // Call an optional hook to record the stack, in case of exception
                  // since it's otherwise lost when execution goes async
                  if (jQuery.Deferred.getStackHook***REMOVED*** {
                    process.stackTrace = jQuery.Deferred.getStackHook(***REMOVED***;
                  ***REMOVED***
                  window.setTimeout(process***REMOVED***;
                ***REMOVED***
              ***REMOVED***;
            ***REMOVED***
            return jQuery.Deferred(function (newDefer***REMOVED*** {
              // progress_handlers.add( ... ***REMOVED***
              tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress***REMOVED*** ? onProgress : Identity, newDefer.notifyWith***REMOVED******REMOVED***;

              // fulfilled_handlers.add( ... ***REMOVED***
              tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled***REMOVED*** ? onFulfilled : Identity***REMOVED******REMOVED***;

              // rejected_handlers.add( ... ***REMOVED***
              tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected***REMOVED*** ? onRejected : Thrower***REMOVED******REMOVED***;
            ***REMOVED******REMOVED***.promise(***REMOVED***;
          ***REMOVED***,
          // Get a promise for this deferred
          // If obj is provided, the promise aspect is added to the object
          promise: function (obj***REMOVED*** {
            return obj != null ? jQuery.extend(obj, promise***REMOVED*** : promise;
          ***REMOVED***
        ***REMOVED***,
        deferred = {***REMOVED***;

      // Add list-specific methods
      jQuery.each(tuples, function (i, tuple***REMOVED*** {
        var list = tuple[2],
          stateString = tuple[5];

        // promise.progress = list.add
        // promise.done = list.add
        // promise.fail = list.add
        promise[tuple[1]] = list.add;

        // Handle state
        if (stateString***REMOVED*** {
          list.add(function (***REMOVED*** {
            // state = "resolved" (i.e., fulfilled***REMOVED***
            // state = "rejected"
            state = stateString;
          ***REMOVED***,
          // rejected_callbacks.disable
          // fulfilled_callbacks.disable
          tuples[3 - i][2].disable,
          // rejected_handlers.disable
          // fulfilled_handlers.disable
          tuples[3 - i][3].disable,
          // progress_callbacks.lock
          tuples[0][2].lock,
          // progress_handlers.lock
          tuples[0][3].lock***REMOVED***;
        ***REMOVED***

        // progress_handlers.fire
        // fulfilled_handlers.fire
        // rejected_handlers.fire
        list.add(tuple[3].fire***REMOVED***;

        // deferred.notify = function(***REMOVED*** { deferred.notifyWith(...***REMOVED*** ***REMOVED***
        // deferred.resolve = function(***REMOVED*** { deferred.resolveWith(...***REMOVED*** ***REMOVED***
        // deferred.reject = function(***REMOVED*** { deferred.rejectWith(...***REMOVED*** ***REMOVED***
        deferred[tuple[0]] = function (***REMOVED*** {
          deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments***REMOVED***;
          return this;
        ***REMOVED***;

        // deferred.notifyWith = list.fireWith
        // deferred.resolveWith = list.fireWith
        // deferred.rejectWith = list.fireWith
        deferred[tuple[0] + "With"] = list.fireWith;
      ***REMOVED******REMOVED***;

      // Make the deferred a promise
      promise.promise(deferred***REMOVED***;

      // Call given func if any
      if (func***REMOVED*** {
        func.call(deferred, deferred***REMOVED***;
      ***REMOVED***

      // All done!
      return deferred;
    ***REMOVED***,
    // Deferred helper
    when: function (singleValue***REMOVED*** {
      var
        // count of uncompleted subordinates
        remaining = arguments.length,
        // count of unprocessed arguments
        i = remaining,
        // subordinate fulfillment data
        resolveContexts = Array(i***REMOVED***,
        resolveValues = slice.call(arguments***REMOVED***,
        // the master Deferred
        master = jQuery.Deferred(***REMOVED***,
        // subordinate callback factory
        updateFunc = function (i***REMOVED*** {
          return function (value***REMOVED*** {
            resolveContexts[i] = this;
            resolveValues[i] = arguments.length > 1 ? slice.call(arguments***REMOVED*** : value;
            if (! --remaining***REMOVED*** {
              master.resolveWith(resolveContexts, resolveValues***REMOVED***;
            ***REMOVED***
          ***REMOVED***;
        ***REMOVED***;

      // Single- and empty arguments are adopted like Promise.resolve
      if (remaining <= 1***REMOVED*** {
        adoptValue(singleValue, master.done(updateFunc(i***REMOVED******REMOVED***.resolve, master.reject, !remaining***REMOVED***;

        // Use .then(***REMOVED*** to unwrap secondary thenables (cf. gh-3000***REMOVED***
        if (master.state(***REMOVED*** === "pending" || isFunction(resolveValues[i] && resolveValues[i].then***REMOVED******REMOVED*** {
          return master.then(***REMOVED***;
        ***REMOVED***
      ***REMOVED***

      // Multiple arguments are aggregated like Promise.all array elements
      while (i--***REMOVED*** {
        adoptValue(resolveValues[i], updateFunc(i***REMOVED***, master.reject***REMOVED***;
      ***REMOVED***
      return master.promise(***REMOVED***;
    ***REMOVED***
  ***REMOVED******REMOVED***;

  // These usually indicate a programmer mistake during development,
  // warn about them ASAP rather than swallowing them by default.
  var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI***REMOVED***Error$/;
  jQuery.Deferred.exceptionHook = function (error, stack***REMOVED*** {
    // Support: IE 8 - 9 only
    // Console exists when dev tools are open, which can happen at any time
    if (window.console && window.console.warn && error && rerrorNames.test(error.name***REMOVED******REMOVED*** {
      window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack***REMOVED***;
    ***REMOVED***
  ***REMOVED***;
  jQuery.readyException = function (error***REMOVED*** {
    window.setTimeout(function (***REMOVED*** {
      throw error;
    ***REMOVED******REMOVED***;
  ***REMOVED***;

  // The deferred used on DOM ready
  var readyList = jQuery.Deferred(***REMOVED***;
  jQuery.fn.ready = function (fn***REMOVED*** {
    readyList.then(fn***REMOVED***

    // Wrap jQuery.readyException in a function so that the lookup
    // happens at the time of error handling instead of callback
    // registration.
    .catch(function (error***REMOVED*** {
      jQuery.readyException(error***REMOVED***;
    ***REMOVED******REMOVED***;
    return this;
  ***REMOVED***;
  jQuery.extend({
    // Is the DOM ready to be used? Set to true once it occurs.
    isReady: false,
    // A counter to track how many items to wait for before
    // the ready event fires. See #6781
    readyWait: 1,
    // Handle when the DOM is ready
    ready: function (wait***REMOVED*** {
      // Abort if there are pending holds or we're already ready
      if (wait === true ? --jQuery.readyWait : jQuery.isReady***REMOVED*** {
        return;
      ***REMOVED***

      // Remember that the DOM is ready
      jQuery.isReady = true;

      // If a normal DOM Ready event fired, decrement, and wait if need be
      if (wait !== true && --jQuery.readyWait > 0***REMOVED*** {
        return;
      ***REMOVED***

      // If there are functions bound, to execute
      readyList.resolveWith(document, [jQuery]***REMOVED***;
    ***REMOVED***
  ***REMOVED******REMOVED***;
  jQuery.ready.then = readyList.then;

  // The ready event handler and self cleanup method
  function completed(***REMOVED*** {
    document.removeEventListener("DOMContentLoaded", completed***REMOVED***;
    window.removeEventListener("load", completed***REMOVED***;
    jQuery.ready(***REMOVED***;
  ***REMOVED***

  // Catch cases where $(document***REMOVED***.ready(***REMOVED*** is called
  // after the browser event has already occurred.
  // Support: IE <=9 - 10 only
  // Older IE sometimes signals "interactive" too soon
  if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll***REMOVED*** {
    // Handle it asynchronously to allow scripts the opportunity to delay ready
    window.setTimeout(jQuery.ready***REMOVED***;
  ***REMOVED*** else {
    // Use the handy event callback
    document.addEventListener("DOMContentLoaded", completed***REMOVED***;

    // A fallback to window.onload, that will always work
    window.addEventListener("load", completed***REMOVED***;
  ***REMOVED***

  // Multifunctional method to get and set values of a collection
  // The value/s can optionally be executed if it's a function
  var access = function (elems, fn, key, value, chainable, emptyGet, raw***REMOVED*** {
    var i = 0,
      len = elems.length,
      bulk = key == null;

    // Sets many values
    if (toType(key***REMOVED*** === "object"***REMOVED*** {
      chainable = true;
      for (i in key***REMOVED*** {
        access(elems, fn, i, key[i], true, emptyGet, raw***REMOVED***;
      ***REMOVED***

      // Sets one value
    ***REMOVED*** else if (value !== undefined***REMOVED*** {
      chainable = true;
      if (!isFunction(value***REMOVED******REMOVED*** {
        raw = true;
      ***REMOVED***
      if (bulk***REMOVED*** {
        // Bulk operations run against the entire set
        if (raw***REMOVED*** {
          fn.call(elems, value***REMOVED***;
          fn = null;

          // ...except when executing function values
        ***REMOVED*** else {
          bulk = fn;
          fn = function (elem, _key, value***REMOVED*** {
            return bulk.call(jQuery(elem***REMOVED***, value***REMOVED***;
          ***REMOVED***;
        ***REMOVED***
      ***REMOVED***
      if (fn***REMOVED*** {
        for (; i < len; i++***REMOVED*** {
          fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key***REMOVED******REMOVED******REMOVED***;
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    if (chainable***REMOVED*** {
      return elems;
    ***REMOVED***

    // Gets
    if (bulk***REMOVED*** {
      return fn.call(elems***REMOVED***;
    ***REMOVED***
    return len ? fn(elems[0], key***REMOVED*** : emptyGet;
  ***REMOVED***;

  // Matches dashed string for camelizing
  var rmsPrefix = /^-ms-/,
    rdashAlpha = /-([a-z]***REMOVED***/g;

  // Used by camelCase as callback to replace(***REMOVED***
  function fcamelCase(_all, letter***REMOVED*** {
    return letter.toUpperCase(***REMOVED***;
  ***REMOVED***

  // Convert dashed to camelCase; used by the css and data modules
  // Support: IE <=9 - 11, Edge 12 - 15
  // Microsoft forgot to hump their vendor prefix (#9572***REMOVED***
  function camelCase(string***REMOVED*** {
    return string.replace(rmsPrefix, "ms-"***REMOVED***.replace(rdashAlpha, fcamelCase***REMOVED***;
  ***REMOVED***
  var acceptData = function (owner***REMOVED*** {
    // Accepts only:
    //  - Node
    //    - Node.ELEMENT_NODE
    //    - Node.DOCUMENT_NODE
    //  - Object
    //    - Any
    return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
  ***REMOVED***;
  function Data(***REMOVED*** {
    this.expando = jQuery.expando + Data.uid++;
  ***REMOVED***
  Data.uid = 1;
  Data.prototype = {
    cache: function (owner***REMOVED*** {
      // Check if the owner object already has a cache
      var value = owner[this.expando];

      // If not, create one
      if (!value***REMOVED*** {
        value = {***REMOVED***;

        // We can accept data for non-element nodes in modern browsers,
        // but we should not, see #8335.
        // Always return an empty object.
        if (acceptData(owner***REMOVED******REMOVED*** {
          // If it is a node unlikely to be stringify-ed or looped over
          // use plain assignment
          if (owner.nodeType***REMOVED*** {
            owner[this.expando] = value;

            // Otherwise secure it in a non-enumerable property
            // configurable must be true to allow the property to be
            // deleted when data is removed
          ***REMOVED*** else {
            Object.defineProperty(owner, this.expando, {
              value: value,
              configurable: true
            ***REMOVED******REMOVED***;
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***
      return value;
    ***REMOVED***,
    set: function (owner, data, value***REMOVED*** {
      var prop,
        cache = this.cache(owner***REMOVED***;

      // Handle: [ owner, key, value ] args
      // Always use camelCase key (gh-2257***REMOVED***
      if (typeof data === "string"***REMOVED*** {
        cache[camelCase(data***REMOVED***] = value;

        // Handle: [ owner, { properties ***REMOVED*** ] args
      ***REMOVED*** else {
        // Copy the properties one-by-one to the cache object
        for (prop in data***REMOVED*** {
          cache[camelCase(prop***REMOVED***] = data[prop];
        ***REMOVED***
      ***REMOVED***
      return cache;
    ***REMOVED***,
    get: function (owner, key***REMOVED*** {
      return key === undefined ? this.cache(owner***REMOVED*** :
      // Always use camelCase key (gh-2257***REMOVED***
      owner[this.expando] && owner[this.expando][camelCase(key***REMOVED***];
    ***REMOVED***,
    access: function (owner, key, value***REMOVED*** {
      // In cases where either:
      //
      //   1. No key was specified
      //   2. A string key was specified, but no value provided
      //
      // Take the "read" path and allow the get method to determine
      // which value to return, respectively either:
      //
      //   1. The entire cache object
      //   2. The data stored at the key
      //
      if (key === undefined || key && typeof key === "string" && value === undefined***REMOVED*** {
        return this.get(owner, key***REMOVED***;
      ***REMOVED***

      // When the key is not a string, or both a key and value
      // are specified, set or extend (existing objects***REMOVED*** with either:
      //
      //   1. An object of properties
      //   2. A key and value
      //
      this.set(owner, key, value***REMOVED***;

      // Since the "set" path can have two possible entry points
      // return the expected data based on which path was taken[*]
      return value !== undefined ? value : key;
    ***REMOVED***,
    remove: function (owner, key***REMOVED*** {
      var i,
        cache = owner[this.expando];
      if (cache === undefined***REMOVED*** {
        return;
      ***REMOVED***
      if (key !== undefined***REMOVED*** {
        // Support array or space separated string of keys
        if (Array.isArray(key***REMOVED******REMOVED*** {
          // If key is an array of keys...
          // We always set camelCase keys, so remove that.
          key = key.map(camelCase***REMOVED***;
        ***REMOVED*** else {
          key = camelCase(key***REMOVED***;

          // If a key with the spaces exists, use it.
          // Otherwise, create an array by matching non-whitespace
          key = key in cache ? [key] : key.match(rnothtmlwhite***REMOVED*** || [];
        ***REMOVED***
        i = key.length;
        while (i--***REMOVED*** {
          delete cache[key[i]];
        ***REMOVED***
      ***REMOVED***

      // Remove the expando if there's no more data
      if (key === undefined || jQuery.isEmptyObject(cache***REMOVED******REMOVED*** {
        // Support: Chrome <=35 - 45
        // Webkit & Blink performance suffers when deleting properties
        // from DOM nodes, so set to undefined instead
        // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted***REMOVED***
        if (owner.nodeType***REMOVED*** {
          owner[this.expando] = undefined;
        ***REMOVED*** else {
          delete owner[this.expando];
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***,
    hasData: function (owner***REMOVED*** {
      var cache = owner[this.expando];
      return cache !== undefined && !jQuery.isEmptyObject(cache***REMOVED***;
    ***REMOVED***
  ***REMOVED***;
  var dataPriv = new Data(***REMOVED***;
  var dataUser = new Data(***REMOVED***;

  //	Implementation Summary
  //
  //	1. Enforce API surface and semantic compatibility with 1.9.x branch
  //	2. Improve the module's maintainability by reducing the storage
  //		paths to a single mechanism.
  //	3. Use the same single mechanism to support "private" and "user" data.
  //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData***REMOVED***
  //	5. Avoid exposing implementation details on user objects (eg. expando properties***REMOVED***
  //	6. Provide a clear path for implementation upgrade to WeakMap in 2014

  var rbrace = /^(?:\{[\w\W]*\***REMOVED***|\[[\w\W]*\]***REMOVED***$/,
    rmultiDash = /[A-Z]/g;
  function getData(data***REMOVED*** {
    if (data === "true"***REMOVED*** {
      return true;
    ***REMOVED***
    if (data === "false"***REMOVED*** {
      return false;
    ***REMOVED***
    if (data === "null"***REMOVED*** {
      return null;
    ***REMOVED***

    // Only convert to a number if it doesn't change the string
    if (data === +data + ""***REMOVED*** {
      return +data;
    ***REMOVED***
    if (rbrace.test(data***REMOVED******REMOVED*** {
      return JSON.parse(data***REMOVED***;
    ***REMOVED***
    return data;
  ***REMOVED***
  function dataAttr(elem, key, data***REMOVED*** {
    var name;

    // If nothing was found internally, try to fetch any
    // data from the HTML5 data-* attribute
    if (data === undefined && elem.nodeType === 1***REMOVED*** {
      name = "data-" + key.replace(rmultiDash, "-$&"***REMOVED***.toLowerCase(***REMOVED***;
      data = elem.getAttribute(name***REMOVED***;
      if (typeof data === "string"***REMOVED*** {
        try {
          data = getData(data***REMOVED***;
        ***REMOVED*** catch (e***REMOVED*** {***REMOVED***

        // Make sure we set the data so it isn't changed later
        dataUser.set(elem, key, data***REMOVED***;
      ***REMOVED*** else {
        data = undefined;
      ***REMOVED***
    ***REMOVED***
    return data;
  ***REMOVED***
  jQuery.extend({
    hasData: function (elem***REMOVED*** {
      return dataUser.hasData(elem***REMOVED*** || dataPriv.hasData(elem***REMOVED***;
    ***REMOVED***,
    data: function (elem, name, data***REMOVED*** {
      return dataUser.access(elem, name, data***REMOVED***;
    ***REMOVED***,
    removeData: function (elem, name***REMOVED*** {
      dataUser.remove(elem, name***REMOVED***;
    ***REMOVED***,
    // TODO: Now that all calls to _data and _removeData have been replaced
    // with direct calls to dataPriv methods, these can be deprecated.
    _data: function (elem, name, data***REMOVED*** {
      return dataPriv.access(elem, name, data***REMOVED***;
    ***REMOVED***,
    _removeData: function (elem, name***REMOVED*** {
      dataPriv.remove(elem, name***REMOVED***;
    ***REMOVED***
  ***REMOVED******REMOVED***;
  jQuery.fn.extend({
    data: function (key, value***REMOVED*** {
      var i,
        name,
        data,
        elem = this[0],
        attrs = elem && elem.attributes;

      // Gets all values
      if (key === undefined***REMOVED*** {
        if (this.length***REMOVED*** {
          data = dataUser.get(elem***REMOVED***;
          if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs"***REMOVED******REMOVED*** {
            i = attrs.length;
            while (i--***REMOVED*** {
              // Support: IE 11 only
              // The attrs elements can be null (#14894***REMOVED***
              if (attrs[i]***REMOVED*** {
                name = attrs[i].name;
                if (name.indexOf("data-"***REMOVED*** === 0***REMOVED*** {
                  name = camelCase(name.slice(5***REMOVED******REMOVED***;
                  dataAttr(elem, name, data[name]***REMOVED***;
                ***REMOVED***
              ***REMOVED***
            ***REMOVED***
            dataPriv.set(elem, "hasDataAttrs", true***REMOVED***;
          ***REMOVED***
        ***REMOVED***
        return data;
      ***REMOVED***

      // Sets multiple values
      if (typeof key === "object"***REMOVED*** {
        return this.each(function (***REMOVED*** {
          dataUser.set(this, key***REMOVED***;
        ***REMOVED******REMOVED***;
      ***REMOVED***
      return access(this, function (value***REMOVED*** {
        var data;

        // The calling jQuery object (element matches***REMOVED*** is not empty
        // (and therefore has an element appears at this[ 0 ]***REMOVED*** and the
        // `value` parameter was not undefined. An empty jQuery object
        // will result in `undefined` for elem = this[ 0 ] which will
        // throw an exception if an attempt to read a data cache is made.
        if (elem && value === undefined***REMOVED*** {
          // Attempt to get data from the cache
          // The key will always be camelCased in Data
          data = dataUser.get(elem, key***REMOVED***;
          if (data !== undefined***REMOVED*** {
            return data;
          ***REMOVED***

          // Attempt to "discover" the data in
          // HTML5 custom data-* attrs
          data = dataAttr(elem, key***REMOVED***;
          if (data !== undefined***REMOVED*** {
            return data;
          ***REMOVED***

          // We tried really hard, but the data doesn't exist.
          return;
        ***REMOVED***

        // Set the data...
        this.each(function (***REMOVED*** {
          // We always store the camelCased key
          dataUser.set(this, key, value***REMOVED***;
        ***REMOVED******REMOVED***;
      ***REMOVED***, null, value, arguments.length > 1, null, true***REMOVED***;
    ***REMOVED***,
    removeData: function (key***REMOVED*** {
      return this.each(function (***REMOVED*** {
        dataUser.remove(this, key***REMOVED***;
      ***REMOVED******REMOVED***;
    ***REMOVED***
  ***REMOVED******REMOVED***;
  jQuery.extend({
    queue: function (elem, type, data***REMOVED*** {
      var queue;
      if (elem***REMOVED*** {
        type = (type || "fx"***REMOVED*** + "queue";
        queue = dataPriv.get(elem, type***REMOVED***;

        // Speed up dequeue by getting out quickly if this is just a lookup
        if (data***REMOVED*** {
          if (!queue || Array.isArray(data***REMOVED******REMOVED*** {
            queue = dataPriv.access(elem, type, jQuery.makeArray(data***REMOVED******REMOVED***;
          ***REMOVED*** else {
            queue.push(data***REMOVED***;
          ***REMOVED***
        ***REMOVED***
        return queue || [];
      ***REMOVED***
    ***REMOVED***,
    dequeue: function (elem, type***REMOVED*** {
      type = type || "fx";
      var queue = jQuery.queue(elem, type***REMOVED***,
        startLength = queue.length,
        fn = queue.shift(***REMOVED***,
        hooks = jQuery._queueHooks(elem, type***REMOVED***,
        next = function (***REMOVED*** {
          jQuery.dequeue(elem, type***REMOVED***;
        ***REMOVED***;

      // If the fx queue is dequeued, always remove the progress sentinel
      if (fn === "inprogress"***REMOVED*** {
        fn = queue.shift(***REMOVED***;
        startLength--;
      ***REMOVED***
      if (fn***REMOVED*** {
        // Add a progress sentinel to prevent the fx queue from being
        // automatically dequeued
        if (type === "fx"***REMOVED*** {
          queue.unshift("inprogress"***REMOVED***;
        ***REMOVED***

        // Clear up the last queue stop function
        delete hooks.stop;
        fn.call(elem, next, hooks***REMOVED***;
      ***REMOVED***
      if (!startLength && hooks***REMOVED*** {
        hooks.empty.fire(***REMOVED***;
      ***REMOVED***
    ***REMOVED***,
    // Not public - generate a queueHooks object, or return the current one
    _queueHooks: function (elem, type***REMOVED*** {
      var key = type + "queueHooks";
      return dataPriv.get(elem, key***REMOVED*** || dataPriv.access(elem, key, {
        empty: jQuery.Callbacks("once memory"***REMOVED***.add(function (***REMOVED*** {
          dataPriv.remove(elem, [type + "queue", key]***REMOVED***;
        ***REMOVED******REMOVED***
      ***REMOVED******REMOVED***;
    ***REMOVED***
  ***REMOVED******REMOVED***;
  jQuery.fn.extend({
    queue: function (type, data***REMOVED*** {
      var setter = 2;
      if (typeof type !== "string"***REMOVED*** {
        data = type;
        type = "fx";
        setter--;
      ***REMOVED***
      if (arguments.length < setter***REMOVED*** {
        return jQuery.queue(this[0], type***REMOVED***;
      ***REMOVED***
      return data === undefined ? this : this.each(function (***REMOVED*** {
        var queue = jQuery.queue(this, type, data***REMOVED***;

        // Ensure a hooks for this queue
        jQuery._queueHooks(this, type***REMOVED***;
        if (type === "fx" && queue[0] !== "inprogress"***REMOVED*** {
          jQuery.dequeue(this, type***REMOVED***;
        ***REMOVED***
      ***REMOVED******REMOVED***;
    ***REMOVED***,
    dequeue: function (type***REMOVED*** {
      return this.each(function (***REMOVED*** {
        jQuery.dequeue(this, type***REMOVED***;
      ***REMOVED******REMOVED***;
    ***REMOVED***,
    clearQueue: function (type***REMOVED*** {
      return this.queue(type || "fx", []***REMOVED***;
    ***REMOVED***,
    // Get a promise resolved when queues of a certain type
    // are emptied (fx is the type by default***REMOVED***
    promise: function (type, obj***REMOVED*** {
      var tmp,
        count = 1,
        defer = jQuery.Deferred(***REMOVED***,
        elements = this,
        i = this.length,
        resolve = function (***REMOVED*** {
          if (! --count***REMOVED*** {
            defer.resolveWith(elements, [elements]***REMOVED***;
          ***REMOVED***
        ***REMOVED***;
      if (typeof type !== "string"***REMOVED*** {
        obj = type;
        type = undefined;
      ***REMOVED***
      type = type || "fx";
      while (i--***REMOVED*** {
        tmp = dataPriv.get(elements[i], type + "queueHooks"***REMOVED***;
        if (tmp && tmp.empty***REMOVED*** {
          count++;
          tmp.empty.add(resolve***REMOVED***;
        ***REMOVED***
      ***REMOVED***
      resolve(***REMOVED***;
      return defer.promise(obj***REMOVED***;
    ***REMOVED***
  ***REMOVED******REMOVED***;
  var pnum = /[+-]?(?:\d*\.|***REMOVED***\d+(?:[eE][+-]?\d+|***REMOVED***/.source;
  var rcssNum = new RegExp("^(?:([+-]***REMOVED***=|***REMOVED***(" + pnum + "***REMOVED***([a-z%]****REMOVED***$", "i"***REMOVED***;
  var cssExpand = ["Top", "Right", "Bottom", "Left"];
  var documentElement = document.documentElement;
  var isAttached = function (elem***REMOVED*** {
      return jQuery.contains(elem.ownerDocument, elem***REMOVED***;
    ***REMOVED***,
    composed = {
      composed: true
    ***REMOVED***;

  // Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
  // Check attachment across shadow DOM boundaries when possible (gh-3504***REMOVED***
  // Support: iOS 10.0-10.2 only
  // Early iOS 10 versions support `attachShadow` but not `getRootNode`,
  // leading to errors. We need to check for `getRootNode`.
  if (documentElement.getRootNode***REMOVED*** {
    isAttached = function (elem***REMOVED*** {
      return jQuery.contains(elem.ownerDocument, elem***REMOVED*** || elem.getRootNode(composed***REMOVED*** === elem.ownerDocument;
    ***REMOVED***;
  ***REMOVED***
  var isHiddenWithinTree = function (elem, el***REMOVED*** {
    // isHiddenWithinTree might be called from jQuery#filter function;
    // in that case, element will be second argument
    elem = el || elem;

    // Inline style trumps all
    return elem.style.display === "none" || elem.style.display === "" &&
    // Otherwise, check computed style
    // Support: Firefox <=43 - 45
    // Disconnected elements can have computed display: none, so first confirm that elem is
    // in the document.
    isAttached(elem***REMOVED*** && jQuery.css(elem, "display"***REMOVED*** === "none";
  ***REMOVED***;
  function adjustCSS(elem, prop, valueParts, tween***REMOVED*** {
    var adjusted,
      scale,
      maxIterations = 20,
      currentValue = tween ? function (***REMOVED*** {
        return tween.cur(***REMOVED***;
      ***REMOVED*** : function (***REMOVED*** {
        return jQuery.css(elem, prop, ""***REMOVED***;
      ***REMOVED***,
      initial = currentValue(***REMOVED***,
      unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"***REMOVED***,
      // Starting value computation is required for potential unit mismatches
      initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial***REMOVED*** && rcssNum.exec(jQuery.css(elem, prop***REMOVED******REMOVED***;
    if (initialInUnit && initialInUnit[3] !== unit***REMOVED*** {
      // Support: Firefox <=54
      // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144***REMOVED***
      initial = initial / 2;

      // Trust units reported by jQuery.css
      unit = unit || initialInUnit[3];

      // Iteratively approximate from a nonzero starting point
      initialInUnit = +initial || 1;
      while (maxIterations--***REMOVED*** {
        // Evaluate and update our best guess (doubling guesses that zero out***REMOVED***.
        // Finish if the scale equals or crosses 1 (making the old*new product non-positive***REMOVED***.
        jQuery.style(elem, prop, initialInUnit + unit***REMOVED***;
        if ((1 - scale***REMOVED*** * (1 - (scale = currentValue(***REMOVED*** / initial || 0.5***REMOVED******REMOVED*** <= 0***REMOVED*** {
          maxIterations = 0;
        ***REMOVED***
        initialInUnit = initialInUnit / scale;
      ***REMOVED***
      initialInUnit = initialInUnit * 2;
      jQuery.style(elem, prop, initialInUnit + unit***REMOVED***;

      // Make sure we update the tween properties later on
      valueParts = valueParts || [];
    ***REMOVED***
    if (valueParts***REMOVED*** {
      initialInUnit = +initialInUnit || +initial || 0;

      // Apply relative offset (+=/-=***REMOVED*** if specified
      adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1***REMOVED*** * valueParts[2] : +valueParts[2];
      if (tween***REMOVED*** {
        tween.unit = unit;
        tween.start = initialInUnit;
        tween.end = adjusted;
      ***REMOVED***
    ***REMOVED***
    return adjusted;
  ***REMOVED***
  var defaultDisplayMap = {***REMOVED***;
  function getDefaultDisplay(elem***REMOVED*** {
    var temp,
      doc = elem.ownerDocument,
      nodeName = elem.nodeName,
      display = defaultDisplayMap[nodeName];
    if (display***REMOVED*** {
      return display;
    ***REMOVED***
    temp = doc.body.appendChild(doc.createElement(nodeName***REMOVED******REMOVED***;
    display = jQuery.css(temp, "display"***REMOVED***;
    temp.parentNode.removeChild(temp***REMOVED***;
    if (display === "none"***REMOVED*** {
      display = "block";
    ***REMOVED***
    defaultDisplayMap[nodeName] = display;
    return display;
  ***REMOVED***
  function showHide(elements, show***REMOVED*** {
    var display,
      elem,
      values = [],
      index = 0,
      length = elements.length;

    // Determine new display value for elements that need to change
    for (; index < length; index++***REMOVED*** {
      elem = elements[index];
      if (!elem.style***REMOVED*** {
        continue;
      ***REMOVED***
      display = elem.style.display;
      if (show***REMOVED*** {
        // Since we force visibility upon cascade-hidden elements, an immediate (and slow***REMOVED***
        // check is required in this first loop unless we have a nonempty display value (either
        // inline or about-to-be-restored***REMOVED***
        if (display === "none"***REMOVED*** {
          values[index] = dataPriv.get(elem, "display"***REMOVED*** || null;
          if (!values[index]***REMOVED*** {
            elem.style.display = "";
          ***REMOVED***
        ***REMOVED***
        if (elem.style.display === "" && isHiddenWithinTree(elem***REMOVED******REMOVED*** {
          values[index] = getDefaultDisplay(elem***REMOVED***;
        ***REMOVED***
      ***REMOVED*** else {
        if (display !== "none"***REMOVED*** {
          values[index] = "none";

          // Remember what we're overwriting
          dataPriv.set(elem, "display", display***REMOVED***;
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***

    // Set the display of the elements in a second loop to avoid constant reflow
    for (index = 0; index < length; index++***REMOVED*** {
      if (values[index] != null***REMOVED*** {
        elements[index].style.display = values[index];
      ***REMOVED***
    ***REMOVED***
    return elements;
  ***REMOVED***
  jQuery.fn.extend({
    show: function (***REMOVED*** {
      return showHide(this, true***REMOVED***;
    ***REMOVED***,
    hide: function (***REMOVED*** {
      return showHide(this***REMOVED***;
    ***REMOVED***,
    toggle: function (state***REMOVED*** {
      if (typeof state === "boolean"***REMOVED*** {
        return state ? this.show(***REMOVED*** : this.hide(***REMOVED***;
      ***REMOVED***
      return this.each(function (***REMOVED*** {
        if (isHiddenWithinTree(this***REMOVED******REMOVED*** {
          jQuery(this***REMOVED***.show(***REMOVED***;
        ***REMOVED*** else {
          jQuery(this***REMOVED***.hide(***REMOVED***;
        ***REMOVED***
      ***REMOVED******REMOVED***;
    ***REMOVED***
  ***REMOVED******REMOVED***;
  var rcheckableType = /^(?:checkbox|radio***REMOVED***$/i;
  var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]****REMOVED***/i;
  var rscriptType = /^$|^module$|\/(?:java|ecma***REMOVED***script/i;
  (function (***REMOVED*** {
    var fragment = document.createDocumentFragment(***REMOVED***,
      div = fragment.appendChild(document.createElement("div"***REMOVED******REMOVED***,
      input = document.createElement("input"***REMOVED***;

    // Support: Android 4.0 - 4.3 only
    // Check state lost if the name is set (#11217***REMOVED***
    // Support: Windows Web Apps (WWA***REMOVED***
    // `name` and `type` must use .setAttribute for WWA (#14901***REMOVED***
    input.setAttribute("type", "radio"***REMOVED***;
    input.setAttribute("checked", "checked"***REMOVED***;
    input.setAttribute("name", "t"***REMOVED***;
    div.appendChild(input***REMOVED***;

    // Support: Android <=4.1 only
    // Older WebKit doesn't clone checked state correctly in fragments
    support.checkClone = div.cloneNode(true***REMOVED***.cloneNode(true***REMOVED***.lastChild.checked;

    // Support: IE <=11 only
    // Make sure textarea (and checkbox***REMOVED*** defaultValue is properly cloned
    div.innerHTML = "<textarea>x</textarea>";
    support.noCloneChecked = !!div.cloneNode(true***REMOVED***.lastChild.defaultValue;

    // Support: IE <=9 only
    // IE <=9 replaces <option> tags with their contents when inserted outside of
    // the select element.
    div.innerHTML = "<option></option>";
    support.option = !!div.lastChild;
  ***REMOVED******REMOVED***(***REMOVED***;

  // We have to close these tags to support XHTML (#13200***REMOVED***
  var wrapMap = {
    // XHTML parsers do not magically insert elements in the
    // same way that tag soup parsers do. So we cannot shorten
    // this by omitting <tbody> or other required elements.
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  ***REMOVED***;
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td;

  // Support: IE <=9 only
  if (!support.option***REMOVED*** {
    wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
  ***REMOVED***
  function getAll(context, tag***REMOVED*** {
    // Support: IE <=9 - 11 only
    // Use typeof to avoid zero-argument method invocation on host objects (#15151***REMOVED***
    var ret;
    if (typeof context.getElementsByTagName !== "undefined"***REMOVED*** {
      ret = context.getElementsByTagName(tag || "*"***REMOVED***;
    ***REMOVED*** else if (typeof context.querySelectorAll !== "undefined"***REMOVED*** {
      ret = context.querySelectorAll(tag || "*"***REMOVED***;
    ***REMOVED*** else {
      ret = [];
    ***REMOVED***
    if (tag === undefined || tag && nodeName(context, tag***REMOVED******REMOVED*** {
      return jQuery.merge([context], ret***REMOVED***;
    ***REMOVED***
    return ret;
  ***REMOVED***

  // Mark scripts as having already been evaluated
  function setGlobalEval(elems, refElements***REMOVED*** {
    var i = 0,
      l = elems.length;
    for (; i < l; i++***REMOVED*** {
      dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"***REMOVED******REMOVED***;
    ***REMOVED***
  ***REMOVED***
  var rhtml = /<|&#?\w+;/;
  function buildFragment(elems, context, scripts, selection, ignored***REMOVED*** {
    var elem,
      tmp,
      tag,
      wrap,
      attached,
      j,
      fragment = context.createDocumentFragment(***REMOVED***,
      nodes = [],
      i = 0,
      l = elems.length;
    for (; i < l; i++***REMOVED*** {
      elem = elems[i];
      if (elem || elem === 0***REMOVED*** {
        // Add nodes directly
        if (toType(elem***REMOVED*** === "object"***REMOVED*** {
          // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike***REMOVED*** throws on ancient WebKit
          jQuery.merge(nodes, elem.nodeType ? [elem] : elem***REMOVED***;

          // Convert non-html into a text node
        ***REMOVED*** else if (!rhtml.test(elem***REMOVED******REMOVED*** {
          nodes.push(context.createTextNode(elem***REMOVED******REMOVED***;

          // Convert html into DOM nodes
        ***REMOVED*** else {
          tmp = tmp || fragment.appendChild(context.createElement("div"***REMOVED******REMOVED***;

          // Deserialize a standard representation
          tag = (rtagName.exec(elem***REMOVED*** || ["", ""]***REMOVED***[1].toLowerCase(***REMOVED***;
          wrap = wrapMap[tag] || wrapMap._default;
          tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem***REMOVED*** + wrap[2];

          // Descend through wrappers to the right content
          j = wrap[0];
          while (j--***REMOVED*** {
            tmp = tmp.lastChild;
          ***REMOVED***

          // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike***REMOVED*** throws on ancient WebKit
          jQuery.merge(nodes, tmp.childNodes***REMOVED***;

          // Remember the top-level container
          tmp = fragment.firstChild;

          // Ensure the created nodes are orphaned (#12392***REMOVED***
          tmp.textContent = "";
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***

    // Remove wrapper from fragment
    fragment.textContent = "";
    i = 0;
    while (elem = nodes[i++]***REMOVED*** {
      // Skip elements already in the context collection (trac-4087***REMOVED***
      if (selection && jQuery.inArray(elem, selection***REMOVED*** > -1***REMOVED*** {
        if (ignored***REMOVED*** {
          ignored.push(elem***REMOVED***;
        ***REMOVED***
        continue;
      ***REMOVED***
      attached = isAttached(elem***REMOVED***;

      // Append to fragment
      tmp = getAll(fragment.appendChild(elem***REMOVED***, "script"***REMOVED***;

      // Preserve script evaluation history
      if (attached***REMOVED*** {
        setGlobalEval(tmp***REMOVED***;
      ***REMOVED***

      // Capture executables
      if (scripts***REMOVED*** {
        j = 0;
        while (elem = tmp[j++]***REMOVED*** {
          if (rscriptType.test(elem.type || ""***REMOVED******REMOVED*** {
            scripts.push(elem***REMOVED***;
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    return fragment;
  ***REMOVED***
  var rkeyEvent = /^key/,
    rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop***REMOVED***|click/,
    rtypenamespace = /^([^.]****REMOVED***(?:\.(.+***REMOVED***|***REMOVED***/;
  function returnTrue(***REMOVED*** {
    return true;
  ***REMOVED***
  function returnFalse(***REMOVED*** {
    return false;
  ***REMOVED***

  // Support: IE <=9 - 11+
  // focus(***REMOVED*** and blur(***REMOVED*** are asynchronous, except when they are no-op.
  // So expect focus to be synchronous when the element is already active,
  // and blur to be synchronous when the element is not already active.
  // (focus and blur are always synchronous in other supported browsers,
  // this just defines when we can count on it***REMOVED***.
  function expectSync(elem, type***REMOVED*** {
    return elem === safeActiveElement(***REMOVED*** === (type === "focus"***REMOVED***;
  ***REMOVED***

  // Support: IE <=9 only
  // Accessing document.activeElement can throw unexpectedly
  // https://bugs.jquery.com/ticket/13393
  function safeActiveElement(***REMOVED*** {
    try {
      return document.activeElement;
    ***REMOVED*** catch (err***REMOVED*** {***REMOVED***
  ***REMOVED***
  function on(elem, types, selector, data, fn, one***REMOVED*** {
    var origFn, type;

    // Types can be a map of types/handlers
    if (typeof types === "object"***REMOVED*** {
      // ( types-Object, selector, data ***REMOVED***
      if (typeof selector !== "string"***REMOVED*** {
        // ( types-Object, data ***REMOVED***
        data = data || selector;
        selector = undefined;
      ***REMOVED***
      for (type in types***REMOVED*** {
        on(elem, type, selector, data, types[type], one***REMOVED***;
      ***REMOVED***
      return elem;
    ***REMOVED***
    if (data == null && fn == null***REMOVED*** {
      // ( types, fn ***REMOVED***
      fn = selector;
      data = selector = undefined;
    ***REMOVED*** else if (fn == null***REMOVED*** {
      if (typeof selector === "string"***REMOVED*** {
        // ( types, selector, fn ***REMOVED***
        fn = data;
        data = undefined;
      ***REMOVED*** else {
        // ( types, data, fn ***REMOVED***
        fn = data;
        data = selector;
        selector = undefined;
      ***REMOVED***
    ***REMOVED***
    if (fn === false***REMOVED*** {
      fn = returnFalse;
    ***REMOVED*** else if (!fn***REMOVED*** {
      return elem;
    ***REMOVED***
    if (one === 1***REMOVED*** {
      origFn = fn;
      fn = function (event***REMOVED*** {
        // Can use an empty set, since event contains the info
        jQuery(***REMOVED***.off(event***REMOVED***;
        return origFn.apply(this, arguments***REMOVED***;
      ***REMOVED***;

      // Use same guid so caller can remove using origFn
      fn.guid = origFn.guid || (origFn.guid = jQuery.guid++***REMOVED***;
    ***REMOVED***
    return elem.each(function (***REMOVED*** {
      jQuery.event.add(this, types, fn, data, selector***REMOVED***;
    ***REMOVED******REMOVED***;
  ***REMOVED***

  /*
   * Helper functions for managing events -- not part of the public interface.
   * Props to Dean Edwards' addEvent library for many of the ideas.
   */
  jQuery.event = {
    global: {***REMOVED***,
    add: function (elem, types, handler, data, selector***REMOVED*** {
      var handleObjIn,
        eventHandle,
        tmp,
        events,
        t,
        handleObj,
        special,
        handlers,
        type,
        namespaces,
        origType,
        elemData = dataPriv.get(elem***REMOVED***;

      // Only attach events to objects that accept data
      if (!acceptData(elem***REMOVED******REMOVED*** {
        return;
      ***REMOVED***

      // Caller can pass in an object of custom data in lieu of the handler
      if (handler.handler***REMOVED*** {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
      ***REMOVED***

      // Ensure that invalid selectors throw exceptions at attach time
      // Evaluate against documentElement in case elem is a non-element node (e.g., document***REMOVED***
      if (selector***REMOVED*** {
        jQuery.find.matchesSelector(documentElement, selector***REMOVED***;
      ***REMOVED***

      // Make sure that the handler has a unique ID, used to find/remove it later
      if (!handler.guid***REMOVED*** {
        handler.guid = jQuery.guid++;
      ***REMOVED***

      // Init the element's event structure and main handler, if this is the first
      if (!(events = elemData.events***REMOVED******REMOVED*** {
        events = elemData.events = Object.create(null***REMOVED***;
      ***REMOVED***
      if (!(eventHandle = elemData.handle***REMOVED******REMOVED*** {
        eventHandle = elemData.handle = function (e***REMOVED*** {
          // Discard the second event of a jQuery.event.trigger(***REMOVED*** and
          // when an event is called after a page has unloaded
          return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments***REMOVED*** : undefined;
        ***REMOVED***;
      ***REMOVED***

      // Handle multiple events separated by a space
      types = (types || ""***REMOVED***.match(rnothtmlwhite***REMOVED*** || [""];
      t = types.length;
      while (t--***REMOVED*** {
        tmp = rtypenamespace.exec(types[t]***REMOVED*** || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || ""***REMOVED***.split("."***REMOVED***.sort(***REMOVED***;

        // There *must* be a type, no attaching namespace-only handlers
        if (!type***REMOVED*** {
          continue;
        ***REMOVED***

        // If event changes its type, use the special event handlers for the changed type
        special = jQuery.event.special[type] || {***REMOVED***;

        // If selector defined, determine special event api type, otherwise given type
        type = (selector ? special.delegateType : special.bindType***REMOVED*** || type;

        // Update special based on newly reset type
        special = jQuery.event.special[type] || {***REMOVED***;

        // handleObj is passed to all event handlers
        handleObj = jQuery.extend({
          type: type,
          origType: origType,
          data: data,
          handler: handler,
          guid: handler.guid,
          selector: selector,
          needsContext: selector && jQuery.expr.match.needsContext.test(selector***REMOVED***,
          namespace: namespaces.join("."***REMOVED***
        ***REMOVED***, handleObjIn***REMOVED***;

        // Init the event handler queue if we're the first
        if (!(handlers = events[type]***REMOVED******REMOVED*** {
          handlers = events[type] = [];
          handlers.delegateCount = 0;

          // Only use addEventListener if the special events handler returns false
          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle***REMOVED*** === false***REMOVED*** {
            if (elem.addEventListener***REMOVED*** {
              elem.addEventListener(type, eventHandle***REMOVED***;
            ***REMOVED***
          ***REMOVED***
        ***REMOVED***
        if (special.add***REMOVED*** {
          special.add.call(elem, handleObj***REMOVED***;
          if (!handleObj.handler.guid***REMOVED*** {
            handleObj.handler.guid = handler.guid;
          ***REMOVED***
        ***REMOVED***

        // Add to the element's handler list, delegates in front
        if (selector***REMOVED*** {
          handlers.splice(handlers.delegateCount++, 0, handleObj***REMOVED***;
        ***REMOVED*** else {
          handlers.push(handleObj***REMOVED***;
        ***REMOVED***

        // Keep track of which events have ever been used, for event optimization
        jQuery.event.global[type] = true;
      ***REMOVED***
    ***REMOVED***,
    // Detach an event or set of events from an element
    remove: function (elem, types, handler, selector, mappedTypes***REMOVED*** {
      var j,
        origCount,
        tmp,
        events,
        t,
        handleObj,
        special,
        handlers,
        type,
        namespaces,
        origType,
        elemData = dataPriv.hasData(elem***REMOVED*** && dataPriv.get(elem***REMOVED***;
      if (!elemData || !(events = elemData.events***REMOVED******REMOVED*** {
        return;
      ***REMOVED***

      // Once for each type.namespace in types; type may be omitted
      types = (types || ""***REMOVED***.match(rnothtmlwhite***REMOVED*** || [""];
      t = types.length;
      while (t--***REMOVED*** {
        tmp = rtypenamespace.exec(types[t]***REMOVED*** || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || ""***REMOVED***.split("."***REMOVED***.sort(***REMOVED***;

        // Unbind all events (on this namespace, if provided***REMOVED*** for the element
        if (!type***REMOVED*** {
          for (type in events***REMOVED*** {
            jQuery.event.remove(elem, type + types[t], handler, selector, true***REMOVED***;
          ***REMOVED***
          continue;
        ***REMOVED***
        special = jQuery.event.special[type] || {***REMOVED***;
        type = (selector ? special.delegateType : special.bindType***REMOVED*** || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp("(^|\\.***REMOVED***" + namespaces.join("\\.(?:.*\\.|***REMOVED***"***REMOVED*** + "(\\.|$***REMOVED***"***REMOVED***;

        // Remove matching events
        origCount = j = handlers.length;
        while (j--***REMOVED*** {
          handleObj = handlers[j];
          if ((mappedTypes || origType === handleObj.origType***REMOVED*** && (!handler || handler.guid === handleObj.guid***REMOVED*** && (!tmp || tmp.test(handleObj.namespace***REMOVED******REMOVED*** && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector***REMOVED******REMOVED*** {
            handlers.splice(j, 1***REMOVED***;
            if (handleObj.selector***REMOVED*** {
              handlers.delegateCount--;
            ***REMOVED***
            if (special.remove***REMOVED*** {
              special.remove.call(elem, handleObj***REMOVED***;
            ***REMOVED***
          ***REMOVED***
        ***REMOVED***

        // Remove generic event handler if we removed something and no more handlers exist
        // (avoids potential for endless recursion during removal of special event handlers***REMOVED***
        if (origCount && !handlers.length***REMOVED*** {
          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle***REMOVED*** === false***REMOVED*** {
            jQuery.removeEvent(elem, type, elemData.handle***REMOVED***;
          ***REMOVED***
          delete events[type];
        ***REMOVED***
      ***REMOVED***

      // Remove data and the expando if it's no longer used
      if (jQuery.isEmptyObject(events***REMOVED******REMOVED*** {
        dataPriv.remove(elem, "handle events"***REMOVED***;
      ***REMOVED***
    ***REMOVED***,
    dispatch: function (nativeEvent***REMOVED*** {
      var i,
        j,
        ret,
        matched,
        handleObj,
        handlerQueue,
        args = new Array(arguments.length***REMOVED***,
        // Make a writable jQuery.Event from the native event object
        event = jQuery.event.fix(nativeEvent***REMOVED***,
        handlers = (dataPriv.get(this, "events"***REMOVED*** || Object.create(null***REMOVED******REMOVED***[event.type] || [],
        special = jQuery.event.special[event.type] || {***REMOVED***;

      // Use the fix-ed jQuery.Event rather than the (read-only***REMOVED*** native event
      args[0] = event;
      for (i = 1; i < arguments.length; i++***REMOVED*** {
        args[i] = arguments[i];
      ***REMOVED***
      event.delegateTarget = this;

      // Call the preDispatch hook for the mapped type, and let it bail if desired
      if (special.preDispatch && special.preDispatch.call(this, event***REMOVED*** === false***REMOVED*** {
        return;
      ***REMOVED***

      // Determine handlers
      handlerQueue = jQuery.event.handlers.call(this, event, handlers***REMOVED***;

      // Run delegates first; they may want to stop propagation beneath us
      i = 0;
      while ((matched = handlerQueue[i++]***REMOVED*** && !event.isPropagationStopped(***REMOVED******REMOVED*** {
        event.currentTarget = matched.elem;
        j = 0;
        while ((handleObj = matched.handlers[j++]***REMOVED*** && !event.isImmediatePropagationStopped(***REMOVED******REMOVED*** {
          // If the event is namespaced, then each handler is only invoked if it is
          // specially universal or its namespaces are a superset of the event's.
          if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace***REMOVED******REMOVED*** {
            event.handleObj = handleObj;
            event.data = handleObj.data;
            ret = ((jQuery.event.special[handleObj.origType] || {***REMOVED******REMOVED***.handle || handleObj.handler***REMOVED***.apply(matched.elem, args***REMOVED***;
            if (ret !== undefined***REMOVED*** {
              if ((event.result = ret***REMOVED*** === false***REMOVED*** {
                event.preventDefault(***REMOVED***;
                event.stopPropagation(***REMOVED***;
              ***REMOVED***
            ***REMOVED***
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***

      // Call the postDispatch hook for the mapped type
      if (special.postDispatch***REMOVED*** {
        special.postDispatch.call(this, event***REMOVED***;
      ***REMOVED***
      return event.result;
    ***REMOVED***,
    handlers: function (event, handlers***REMOVED*** {
      var i,
        handleObj,
        sel,
        matchedHandlers,
        matchedSelectors,
        handlerQueue = [],
        delegateCount = handlers.delegateCount,
        cur = event.target;

      // Find delegate handlers
      if (delegateCount &&
      // Support: IE <=9
      // Black-hole SVG <use> instance trees (trac-13180***REMOVED***
      cur.nodeType &&
      // Support: Firefox <=42
      // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861***REMOVED***
      // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
      // Support: IE 11 only
      // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343***REMOVED***
      !(event.type === "click" && event.button >= 1***REMOVED******REMOVED*** {
        for (; cur !== this; cur = cur.parentNode || this***REMOVED*** {
          // Don't check non-elements (#13208***REMOVED***
          // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764***REMOVED***
          if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true***REMOVED******REMOVED*** {
            matchedHandlers = [];
            matchedSelectors = {***REMOVED***;
            for (i = 0; i < delegateCount; i++***REMOVED*** {
              handleObj = handlers[i];

              // Don't conflict with Object.prototype properties (#13203***REMOVED***
              sel = handleObj.selector + " ";
              if (matchedSelectors[sel] === undefined***REMOVED*** {
                matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this***REMOVED***.index(cur***REMOVED*** > -1 : jQuery.find(sel, this, null, [cur]***REMOVED***.length;
              ***REMOVED***
              if (matchedSelectors[sel]***REMOVED*** {
                matchedHandlers.push(handleObj***REMOVED***;
              ***REMOVED***
            ***REMOVED***
            if (matchedHandlers.length***REMOVED*** {
              handlerQueue.push({
                elem: cur,
                handlers: matchedHandlers
              ***REMOVED******REMOVED***;
            ***REMOVED***
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***

      // Add the remaining (directly-bound***REMOVED*** handlers
      cur = this;
      if (delegateCount < handlers.length***REMOVED*** {
        handlerQueue.push({
          elem: cur,
          handlers: handlers.slice(delegateCount***REMOVED***
        ***REMOVED******REMOVED***;
      ***REMOVED***
      return handlerQueue;
    ***REMOVED***,
    addProp: function (name, hook***REMOVED*** {
      Object.defineProperty(jQuery.Event.prototype, name, {
        enumerable: true,
        configurable: true,
        get: isFunction(hook***REMOVED*** ? function (***REMOVED*** {
          if (this.originalEvent***REMOVED*** {
            return hook(this.originalEvent***REMOVED***;
          ***REMOVED***
        ***REMOVED*** : function (***REMOVED*** {
          if (this.originalEvent***REMOVED*** {
            return this.originalEvent[name];
          ***REMOVED***
        ***REMOVED***,
        set: function (value***REMOVED*** {
          Object.defineProperty(this, name, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
          ***REMOVED******REMOVED***;
        ***REMOVED***
      ***REMOVED******REMOVED***;
    ***REMOVED***,
    fix: function (originalEvent***REMOVED*** {
      return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent***REMOVED***;
    ***REMOVED***,
    special: {
      load: {
        // Prevent triggered image.load events from bubbling to window.load
        noBubble: true
      ***REMOVED***,
      click: {
        // Utilize native event to ensure correct state for checkable inputs
        setup: function (data***REMOVED*** {
          // For mutual compressibility with _default, replace `this` access with a local var.
          // `|| data` is dead code meant only to preserve the variable through minification.
          var el = this || data;

          // Claim the first handler
          if (rcheckableType.test(el.type***REMOVED*** && el.click && nodeName(el, "input"***REMOVED******REMOVED*** {
            // dataPriv.set( el, "click", ... ***REMOVED***
            leverageNative(el, "click", returnTrue***REMOVED***;
          ***REMOVED***

          // Return false to allow normal processing in the caller
          return false;
        ***REMOVED***,
        trigger: function (data***REMOVED*** {
          // For mutual compressibility with _default, replace `this` access with a local var.
          // `|| data` is dead code meant only to preserve the variable through minification.
          var el = this || data;

          // Force setup before triggering a click
          if (rcheckableType.test(el.type***REMOVED*** && el.click && nodeName(el, "input"***REMOVED******REMOVED*** {
            leverageNative(el, "click"***REMOVED***;
          ***REMOVED***

          // Return non-false to allow normal event-path propagation
          return true;
        ***REMOVED***,
        // For cross-browser consistency, suppress native .click(***REMOVED*** on links
        // Also prevent it if we're currently inside a leveraged native-event stack
        _default: function (event***REMOVED*** {
          var target = event.target;
          return rcheckableType.test(target.type***REMOVED*** && target.click && nodeName(target, "input"***REMOVED*** && dataPriv.get(target, "click"***REMOVED*** || nodeName(target, "a"***REMOVED***;
        ***REMOVED***
      ***REMOVED***,
      beforeunload: {
        postDispatch: function (event***REMOVED*** {
          // Support: Firefox 20+
          // Firefox doesn't alert if the returnValue field is not set.
          if (event.result !== undefined && event.originalEvent***REMOVED*** {
            event.originalEvent.returnValue = event.result;
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***;

  // Ensure the presence of an event listener that handles manually-triggered
  // synthetic events by interrupting progress until reinvoked in response to
  // *native* events that it fires directly, ensuring that state changes have
  // already occurred before other listeners are invoked.
  function leverageNative(el, type, expectSync***REMOVED*** {
    // Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
    if (!expectSync***REMOVED*** {
      if (dataPriv.get(el, type***REMOVED*** === undefined***REMOVED*** {
        jQuery.event.add(el, type, returnTrue***REMOVED***;
      ***REMOVED***
      return;
    ***REMOVED***

    // Register the controller as a special universal handler for all event namespaces
    dataPriv.set(el, type, false***REMOVED***;
    jQuery.event.add(el, type, {
      namespace: false,
      handler: function (event***REMOVED*** {
        var notAsync,
          result,
          saved = dataPriv.get(this, type***REMOVED***;
        if (event.isTrigger & 1 && this[type]***REMOVED*** {
          // Interrupt processing of the outer synthetic .trigger(***REMOVED***ed event
          // Saved data should be false in such cases, but might be a leftover capture object
          // from an async native handler (gh-4350***REMOVED***
          if (!saved.length***REMOVED*** {
            // Store arguments for use when handling the inner native event
            // There will always be at least one argument (an event object***REMOVED***, so this array
            // will not be confused with a leftover capture object.
            saved = slice.call(arguments***REMOVED***;
            dataPriv.set(this, type, saved***REMOVED***;

            // Trigger the native event and capture its result
            // Support: IE <=9 - 11+
            // focus(***REMOVED*** and blur(***REMOVED*** are asynchronous
            notAsync = expectSync(this, type***REMOVED***;
            this[type](***REMOVED***;
            result = dataPriv.get(this, type***REMOVED***;
            if (saved !== result || notAsync***REMOVED*** {
              dataPriv.set(this, type, false***REMOVED***;
            ***REMOVED*** else {
              result = {***REMOVED***;
            ***REMOVED***
            if (saved !== result***REMOVED*** {
              // Cancel the outer synthetic event
              event.stopImmediatePropagation(***REMOVED***;
              event.preventDefault(***REMOVED***;
              return result.value;
            ***REMOVED***

            // If this is an inner synthetic event for an event with a bubbling surrogate
            // (focus or blur***REMOVED***, assume that the surrogate already propagated from triggering the
            // native event and prevent that from happening again here.
            // This technically gets the ordering wrong w.r.t. to `.trigger(***REMOVED***` (in which the
            // bubbling surrogate propagates *after* the non-bubbling base***REMOVED***, but that seems
            // less bad than duplication.
          ***REMOVED*** else if ((jQuery.event.special[type] || {***REMOVED******REMOVED***.delegateType***REMOVED*** {
            event.stopPropagation(***REMOVED***;
          ***REMOVED***

          // If this is a native event triggered above, everything is now in order
          // Fire an inner synthetic event with the original arguments
        ***REMOVED*** else if (saved.length***REMOVED*** {
          // ...and capture the result
          dataPriv.set(this, type, {
            value: jQuery.event.trigger(
            // Support: IE <=9 - 11+
            // Extend with the prototype to reset the above stopImmediatePropagation(***REMOVED***
            jQuery.extend(saved[0], jQuery.Event.prototype***REMOVED***, saved.slice(1***REMOVED***, this***REMOVED***
          ***REMOVED******REMOVED***;

          // Abort handling of the native event
          event.stopImmediatePropagation(***REMOVED***;
        ***REMOVED***
      ***REMOVED***
    ***REMOVED******REMOVED***;
  ***REMOVED***
  jQuery.removeEvent = function (elem, type, handle***REMOVED*** {
    // This "if" is needed for plain objects
    if (elem.removeEventListener***REMOVED*** {
      elem.removeEventListener(type, handle***REMOVED***;
    ***REMOVED***
  ***REMOVED***;
  jQuery.Event = function (src, props***REMOVED*** {
    // Allow instantiation without the 'new' keyword
    if (!(this instanceof jQuery.Event***REMOVED******REMOVED*** {
      return new jQuery.Event(src, props***REMOVED***;
    ***REMOVED***

    // Event object
    if (src && src.type***REMOVED*** {
      this.originalEvent = src;
      this.type = src.type;

      // Events bubbling up the document may have been marked as prevented
      // by a handler lower down the tree; reflect the correct value.
      this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined &&
      // Support: Android <=2.3 only
      src.returnValue === false ? returnTrue : returnFalse;

      // Create target properties
      // Support: Safari <=6 - 7 only
      // Target should not be a text node (#504, #13143***REMOVED***
      this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
      this.currentTarget = src.currentTarget;
      this.relatedTarget = src.relatedTarget;

      // Event type
    ***REMOVED*** else {
      this.type = src;
    ***REMOVED***

    // Put explicitly provided properties onto the event object
    if (props***REMOVED*** {
      jQuery.extend(this, props***REMOVED***;
    ***REMOVED***

    // Create a timestamp if incoming event doesn't have one
    this.timeStamp = src && src.timeStamp || Date.now(***REMOVED***;

    // Mark it as fixed
    this[jQuery.expando] = true;
  ***REMOVED***;

  // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
  // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
  jQuery.Event.prototype = {
    constructor: jQuery.Event,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    isSimulated: false,
    preventDefault: function (***REMOVED*** {
      var e = this.originalEvent;
      this.isDefaultPrevented = returnTrue;
      if (e && !this.isSimulated***REMOVED*** {
        e.preventDefault(***REMOVED***;
      ***REMOVED***
    ***REMOVED***,
    stopPropagation: function (***REMOVED*** {
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue;
      if (e && !this.isSimulated***REMOVED*** {
        e.stopPropagation(***REMOVED***;
      ***REMOVED***
    ***REMOVED***,
    stopImmediatePropagation: function (***REMOVED*** {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = returnTrue;
      if (e && !this.isSimulated***REMOVED*** {
        e.stopImmediatePropagation(***REMOVED***;
      ***REMOVED***
      this.stopPropagation(***REMOVED***;
    ***REMOVED***
  ***REMOVED***;

  // Includes all common event props including KeyEvent and MouseEvent specific props
  jQuery.each({
    altKey: true,
    bubbles: true,
    cancelable: true,
    changedTouches: true,
    ctrlKey: true,
    detail: true,
    eventPhase: true,
    metaKey: true,
    pageX: true,
    pageY: true,
    shiftKey: true,
    view: true,
    "char": true,
    code: true,
    charCode: true,
    key: true,
    keyCode: true,
    button: true,
    buttons: true,
    clientX: true,
    clientY: true,
    offsetX: true,
    offsetY: true,
    pointerId: true,
    pointerType: true,
    screenX: true,
    screenY: true,
    targetTouches: true,
    toElement: true,
    touches: true,
    which: function (event***REMOVED*** {
      var button = event.button;

      // Add which for key events
      if (event.which == null && rkeyEvent.test(event.type***REMOVED******REMOVED*** {
        return event.charCode != null ? event.charCode : event.keyCode;
      ***REMOVED***

      // Add which for click: 1 === left; 2 === middle; 3 === right
      if (!event.which && button !== undefined && rmouseEvent.test(event.type***REMOVED******REMOVED*** {
        if (button & 1***REMOVED*** {
          return 1;
        ***REMOVED***
        if (button & 2***REMOVED*** {
          return 3;
        ***REMOVED***
        if (button & 4***REMOVED*** {
          return 2;
        ***REMOVED***
        return 0;
      ***REMOVED***
      return event.which;
    ***REMOVED***
  ***REMOVED***, jQuery.event.addProp***REMOVED***;
  jQuery.each({
    focus: "focusin",
    blur: "focusout"
  ***REMOVED***, function (type, delegateType***REMOVED*** {
    jQuery.event.special[type] = {
      // Utilize native event if possible so blur/focus sequence is correct
      setup: function (***REMOVED*** {
        // Claim the first handler
        // dataPriv.set( this, "focus", ... ***REMOVED***
        // dataPriv.set( this, "blur", ... ***REMOVED***
        leverageNative(this, type, expectSync***REMOVED***;

        // Return false to allow normal processing in the caller
        return false;
      ***REMOVED***,
      trigger: function (***REMOVED*** {
        // Force setup before trigger
        leverageNative(this, type***REMOVED***;

        // Return non-false to allow normal event-path propagation
        return true;
      ***REMOVED***,
      delegateType: delegateType
    ***REMOVED***;
  ***REMOVED******REMOVED***;

  // Create mouseenter/leave events using mouseover/out and event-time checks
  // so that event delegation works in jQuery.
  // Do the same for pointerenter/pointerleave and pointerover/pointerout
  //
  // Support: Safari 7 only
  // Safari sends mouseenter too often; see:
  // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
  // for the description of the bug (it existed in older Chrome versions as well***REMOVED***.
  jQuery.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  ***REMOVED***, function (orig, fix***REMOVED*** {
    jQuery.event.special[orig] = {
      delegateType: fix,
      bindType: fix,
      handle: function (event***REMOVED*** {
        var ret,
          target = this,
          related = event.relatedTarget,
          handleObj = event.handleObj;

        // For mouseenter/leave call the handler if related is outside the target.
        // NB: No relatedTarget if the mouse left/entered the browser window
        if (!related || related !== target && !jQuery.contains(target, related***REMOVED******REMOVED*** {
          event.type = handleObj.origType;
          ret = handleObj.handler.apply(this, arguments***REMOVED***;
          event.type = fix;
        ***REMOVED***
        return ret;
      ***REMOVED***
    ***REMOVED***;
  ***REMOVED******REMOVED***;
  jQuery.fn.extend({
    on: function (types, selector, data, fn***REMOVED*** {
      return on(this, types, selector, data, fn***REMOVED***;
    ***REMOVED***,
    one: function (types, selector, data, fn***REMOVED*** {
      return on(this, types, selector, data, fn, 1***REMOVED***;
    ***REMOVED***,
    off: function (types, selector, fn***REMOVED*** {
      var handleObj, type;
      if (types && types.preventDefault && types.handleObj***REMOVED*** {
        // ( event ***REMOVED***  dispatched jQuery.Event
        handleObj = types.handleObj;
        jQuery(types.delegateTarget***REMOVED***.off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler***REMOVED***;
        return this;
      ***REMOVED***
      if (typeof types === "object"***REMOVED*** {
        // ( types-object [, selector] ***REMOVED***
        for (type in types***REMOVED*** {
          this.off(type, selector, types[type]***REMOVED***;
        ***REMOVED***
        return this;
      ***REMOVED***
      if (selector === false || typeof selector === "function"***REMOVED*** {
        // ( types [, fn] ***REMOVED***
        fn = selector;
        selector = undefined;
      ***REMOVED***
      if (fn === false***REMOVED*** {
        fn = returnFalse;
      ***REMOVED***
      return this.each(function (***REMOVED*** {
        jQuery.event.remove(this, types, fn, selector***REMOVED***;
      ***REMOVED******REMOVED***;
    ***REMOVED***
  ***REMOVED******REMOVED***;
  var
    // Support: IE <=10 - 11, Edge 12 - 13 only
    // In IE/Edge using regex groups here causes severe slowdowns.
    // See https://connect.microsoft.com/IE/feedback/details/1736512/
    rnoInnerhtml = /<script|<style|<link/i,
    // checked="checked" or checked
    rchecked = /checked\s*(?:[^=]|=\s*.checked.***REMOVED***/i,
    rcleanScript = /^\s*<!(?:\[CDATA\[|--***REMOVED***|(?:\]\]|--***REMOVED***>\s*$/g;

  // Prefer a tbody over its parent table for containing new rows
  function manipulationTarget(elem, content***REMOVED*** {
    if (nodeName(elem, "table"***REMOVED*** && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr"***REMOVED******REMOVED*** {
      return jQuery(elem***REMOVED***.children("tbody"***REMOVED***[0] || elem;
    ***REMOVED***
    return elem;
  ***REMOVED***

  // Replace/restore the type attribute of script elements for safe DOM manipulation
  function disableScript(elem***REMOVED*** {
    elem.type = (elem.getAttribute("type"***REMOVED*** !== null***REMOVED*** + "/" + elem.type;
    return elem;
  ***REMOVED***
  function restoreScript(elem***REMOVED*** {
    if ((elem.type || ""***REMOVED***.slice(0, 5***REMOVED*** === "true/"***REMOVED*** {
      elem.type = elem.type.slice(5***REMOVED***;
    ***REMOVED*** else {
      elem.removeAttribute("type"***REMOVED***;
    ***REMOVED***
    return elem;
  ***REMOVED***
  function cloneCopyEvent(src, dest***REMOVED*** {
    var i, l, type, pdataOld, udataOld, udataCur, events;
    if (dest.nodeType !== 1***REMOVED*** {
      return;
    ***REMOVED***

    // 1. Copy private data: events, handlers, etc.
    if (dataPriv.hasData(src***REMOVED******REMOVED*** {
      pdataOld = dataPriv.get(src***REMOVED***;
      events = pdataOld.events;
      if (events***REMOVED*** {
        dataPriv.remove(dest, "handle events"***REMOVED***;
        for (type in events***REMOVED*** {
          for (i = 0, l = events[type].length; i < l; i++***REMOVED*** {
            jQuery.event.add(dest, type, events[type][i]***REMOVED***;
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***

    // 2. Copy user data
    if (dataUser.hasData(src***REMOVED******REMOVED*** {
      udataOld = dataUser.access(src***REMOVED***;
      udataCur = jQuery.extend({***REMOVED***, udataOld***REMOVED***;
      dataUser.set(dest, udataCur***REMOVED***;
    ***REMOVED***
  ***REMOVED***

  // Fix IE bugs, see support tests
  function fixInput(src, dest***REMOVED*** {
    var nodeName = dest.nodeName.toLowerCase(***REMOVED***;

    // Fails to persist the checked state of a cloned checkbox or radio button.
    if (nodeName === "input" && rcheckableType.test(src.type***REMOVED******REMOVED*** {
      dest.checked = src.checked;

      // Fails to return the selected option to the default selected state when cloning options
    ***REMOVED*** else if (nodeName === "input" || nodeName === "textarea"***REMOVED*** {
      dest.defaultValue = src.defaultValue;
    ***REMOVED***
  ***REMOVED***
  function domManip(collection, args, callback, ignored***REMOVED*** {
    // Flatten any nested arrays
    args = flat(args***REMOVED***;
    var fragment,
      first,
      scripts,
      hasScripts,
      node,
      doc,
      i = 0,
      l = collection.length,
      iNoClone = l - 1,
      value = args[0],
      valueIsFunction = isFunction(value***REMOVED***;

    // We can't cloneNode fragments that contain checked, in WebKit
    if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value***REMOVED******REMOVED*** {
      return collection.each(function (index***REMOVED*** {
        var self = collection.eq(index***REMOVED***;
        if (valueIsFunction***REMOVED*** {
          args[0] = value.call(this, index, self.html(***REMOVED******REMOVED***;
        ***REMOVED***
        domManip(self, args, callback, ignored***REMOVED***;
      ***REMOVED******REMOVED***;
    ***REMOVED***
    if (l***REMOVED*** {
      fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored***REMOVED***;
      first = fragment.firstChild;
      if (fragment.childNodes.length === 1***REMOVED*** {
        fragment = first;
      ***REMOVED***

      // Require either new content or an interest in ignored elements to invoke the callback
      if (first || ignored***REMOVED*** {
        scripts = jQuery.map(getAll(fragment, "script"***REMOVED***, disableScript***REMOVED***;
        hasScripts = scripts.length;

        // Use the original fragment for the last item
        // instead of the first because it can end up
        // being emptied incorrectly in certain situations (#8070***REMOVED***.
        for (; i < l; i++***REMOVED*** {
          node = fragment;
          if (i !== iNoClone***REMOVED*** {
            node = jQuery.clone(node, true, true***REMOVED***;

            // Keep references to cloned scripts for later restoration
            if (hasScripts***REMOVED*** {
              // Support: Android <=4.0 only, PhantomJS 1 only
              // push.apply(_, arraylike***REMOVED*** throws on ancient WebKit
              jQuery.merge(scripts, getAll(node, "script"***REMOVED******REMOVED***;
            ***REMOVED***
          ***REMOVED***
          callback.call(collection[i], node, i***REMOVED***;
        ***REMOVED***
        if (hasScripts***REMOVED*** {
          doc = scripts[scripts.length - 1].ownerDocument;

          // Reenable scripts
          jQuery.map(scripts, restoreScript***REMOVED***;

          // Evaluate executable scripts on first document insertion
          for (i = 0; i < hasScripts; i++***REMOVED*** {
            node = scripts[i];
            if (rscriptType.test(node.type || ""***REMOVED*** && !dataPriv.access(node, "globalEval"***REMOVED*** && jQuery.contains(doc, node***REMOVED******REMOVED*** {
              if (node.src && (node.type || ""***REMOVED***.toLowerCase(***REMOVED*** !== "module"***REMOVED*** {
                // Optional AJAX dependency, but won't run scripts if not present
                if (jQuery._evalUrl && !node.noModule***REMOVED*** {
                  jQuery._evalUrl(node.src, {
                    nonce: node.nonce || node.getAttribute("nonce"***REMOVED***
                  ***REMOVED***, doc***REMOVED***;
                ***REMOVED***
              ***REMOVED*** else {
                DOMEval(node.textContent.replace(rcleanScript, ""***REMOVED***, node, doc***REMOVED***;
              ***REMOVED***
            ***REMOVED***
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    return collection;
  ***REMOVED***
  function remove(elem, selector, keepData***REMOVED*** {
    var node,
      nodes = selector ? jQuery.filter(selector, elem***REMOVED*** : elem,
      i = 0;
    for (; (node = nodes[i]***REMOVED*** != null; i++***REMOVED*** {
      if (!keepData && node.nodeType === 1***REMOVED*** {
        jQuery.cleanData(getAll(node***REMOVED******REMOVED***;
      ***REMOVED***
      if (node.parentNode***REMOVED*** {
        if (keepData && isAttached(node***REMOVED******REMOVED*** {
          setGlobalEval(getAll(node, "script"***REMOVED******REMOVED***;
        ***REMOVED***
        node.parentNode.removeChild(node***REMOVED***;
      ***REMOVED***
    ***REMOVED***
    return elem;
  ***REMOVED***
  jQuery.extend({
    htmlPrefilter: function (html***REMOVED*** {
      return html;
    ***REMOVED***,
    clone: function (elem, dataAndEvents, deepDataAndEvents***REMOVED*** {
      var i,
        l,
        srcElements,
        destElements,
        clone = elem.cloneNode(true***REMOVED***,
        inPage = isAttached(elem***REMOVED***;

      // Fix IE cloning issues
      if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11***REMOVED*** && !jQuery.isXMLDoc(elem***REMOVED******REMOVED*** {
        // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
        destElements = getAll(clone***REMOVED***;
        srcElements = getAll(elem***REMOVED***;
        for (i = 0, l = srcElements.length; i < l; i++***REMOVED*** {
          fixInput(srcElements[i], destElements[i]***REMOVED***;
        ***REMOVED***
      ***REMOVED***

      // Copy the events from the original to the clone
      if (dataAndEvents***REMOVED*** {
        if (deepDataAndEvents***REMOVED*** {
          srcElements = srcElements || getAll(elem***REMOVED***;
          destElements = destElements || getAll(clone***REMOVED***;
          for (i = 0, l = srcElements.length; i < l; i++***REMOVED*** {
            cloneCopyEvent(srcElements[i], destElements[i]***REMOVED***;
          ***REMOVED***
        ***REMOVED*** else {
          cloneCopyEvent(elem, clone***REMOVED***;
        ***REMOVED***
      ***REMOVED***

      // Preserve script evaluation history
      destElements = getAll(clone, "script"***REMOVED***;
      if (destElements.length > 0***REMOVED*** {
        setGlobalEval(destElements, !inPage && getAll(elem, "script"***REMOVED******REMOVED***;
      ***REMOVED***

      // Return the cloned set
      return clone;
    ***REMOVED***,
    cleanData: function (elems***REMOVED*** {
      var data,
        elem,
        type,
        special = jQuery.event.special,
        i = 0;
      for (; (elem = elems[i]***REMOVED*** !== undefined; i++***REMOVED*** {
        if (acceptData(elem***REMOVED******REMOVED*** {
          if (data = elem[dataPriv.expando]***REMOVED*** {
            if (data.events***REMOVED*** {
              for (type in data.events***REMOVED*** {
                if (special[type]***REMOVED*** {
                  jQuery.event.remove(elem, type***REMOVED***;

                  // This is a shortcut to avoid jQuery.event.remove's overhead
                ***REMOVED*** else {
                  jQuery.removeEvent(elem, type, data.handle***REMOVED***;
                ***REMOVED***
              ***REMOVED***
            ***REMOVED***

            // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove
            elem[dataPriv.expando] = undefined;
          ***REMOVED***
          if (elem[dataUser.expando]***REMOVED*** {
            // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove
            elem[dataUser.expando] = undefined;
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
  ***REMOVED******REMOVED***;
  jQuery.fn.extend({
    detach: function (selector***REMOVED*** {
      return remove(this, selector, true***REMOVED***;
    ***REMOVED***,
    remove: function (selector***REMOVED*** {
      return remove(this, selector***REMOVED***;
    ***REMOVED***,
    text: function (value***REMOVED*** {
      return access(this, function (value***REMOVED*** {
        return value === undefined ? jQuery.text(this***REMOVED*** : this.empty(***REMOVED***.each(function (***REMOVED*** {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9***REMOVED*** {
            this.textContent = value;
          ***REMOVED***
        ***REMOVED******REMOVED***;
      ***REMOVED***, null, value, arguments.length***REMOVED***;
    ***REMOVED***,
    append: function (***REMOVED*** {
      return domManip(this, arguments, function (elem***REMOVED*** {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9***REMOVED*** {
          var target = manipulationTarget(this, elem***REMOVED***;
          target.appendChild(elem***REMOVED***;
        ***REMOVED***
      ***REMOVED******REMOVED***;
    ***REMOVED***,
    prepend: function (***REMOVED*** {
      return domManip(this, arguments, function (elem***REMOVED*** {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9***REMOVED*** {
          var target = manipulationTarget(this, elem***REMOVED***;
          target.insertBefore(elem, target.firstChild***REMOVED***;
        ***REMOVED***
      ***REMOVED******REMOVED***;
    ***REMOVED***,
    before: function (***REMOVED*** {
      return domManip(this, arguments, function (elem***REMOVED*** {
        if (this.parentNode***REMOVED*** {
          this.parentNode.insertBefore(elem, this***REMOVED***;
        ***REMOVED***
      ***REMOVED******REMOVED***;
    ***REMOVED***,
    after: function (***REMOVED*** {
      return domManip(this, arguments, function (elem***REMOVED*** {
        if (this.parentNode***REMOVED*** {
          this.parentNode.insertBefore(elem, this.nextSibling***REMOVED***;
        ***REMOVED***
      ***REMOVED******REMOVED***;
    ***REMOVED***,
    empty: function (***REMOVED*** {
      var elem,
        i = 0;
      for (; (elem = this[i]***REMOVED*** != null; i++***REMOVED*** {
        if (elem.nodeType === 1***REMOVED*** {
          // Prevent memory leaks
          jQuery.cleanData(getAll(elem, false***REMOVED******REMOVED***;

          // Remove any remaining nodes
          elem.textContent = "";
        ***REMOVED***
      ***REMOVED***
      return this;
    ***REMOVED***,
    clone: function (dataAndEvents, deepDataAndEvents***REMOVED*** {
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
      return this.map(function (***REMOVED*** {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents***REMOVED***;
      ***REMOVED******REMOVED***;
    ***REMOVED***,
    html: function (value***REMOVED*** {
      return access(this, function (value***REMOVED*** {
        var elem = this[0] || {***REMOVED***,
          i = 0,
          l = this.length;
        if (value === undefined && elem.nodeType === 1***REMOVED*** {
          return elem.innerHTML;
        ***REMOVED***

        // See if we can take a shortcut and just use innerHTML
        if (typeof value === "string" && !rnoInnerhtml.test(value***REMOVED*** && !wrapMap[(rtagName.exec(value***REMOVED*** || ["", ""]***REMOVED***[1].toLowerCase(***REMOVED***]***REMOVED*** {
          value = jQuery.htmlPrefilter(value***REMOVED***;
          try {
            for (; i < l; i++***REMOVED*** {
              elem = this[i] || {***REMOVED***;

              // Remove element nodes and prevent memory leaks
              if (elem.nodeType === 1***REMOVED*** {
                jQuery.cleanData(getAll(elem, false***REMOVED******REMOVED***;
                elem.innerHTML = value;
              ***REMOVED***
            ***REMOVED***
            elem = 0;

            // If using innerHTML throws an exception, use the fallback method
          ***REMOVED*** catch (e***REMOVED*** {***REMOVED***
        ***REMOVED***
        if (elem***REMOVED*** {
          this.empty(***REMOVED***.append(value***REMOVED***;
        ***REMOVED***
      ***REMOVED***, null, value, arguments.length***REMOVED***;
    ***REMOVED***,
    replaceWith: function (***REMOVED*** {
      var ignored = [];

      // Make the changes, replacing each non-ignored context element with the new content
      return domManip(this, arguments, function (elem***REMOVED*** {
        var parent = this.parentNode;
        if (jQuery.inArray(this, ignored***REMOVED*** < 0***REMOVED*** {
          jQuery.cleanData(getAll(this***REMOVED******REMOVED***;
          if (parent***REMOVED*** {
            parent.replaceChild(elem, this***REMOVED***;
          ***REMOVED***
        ***REMOVED***

        // Force callback invocation
      ***REMOVED***, ignored***REMOVED***;
    ***REMOVED***
  ***REMOVED******REMOVED***;
  jQuery.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  ***REMOVED***, function (name, original***REMOVED*** {
    jQuery.fn[name] = function (selector***REMOVED*** {
      var elems,
        ret = [],
        insert = jQuery(selector***REMOVED***,
        last = insert.length - 1,
        i = 0;
      for (; i <= last; i++***REMOVED*** {
        elems = i === last ? this : this.clone(true***REMOVED***;
        jQuery(insert[i]***REMOVED***[original](elems***REMOVED***;

        // Support: Android <=4.0 only, PhantomJS 1 only
        // .get(***REMOVED*** because push.apply(_, arraylike***REMOVED*** throws on ancient WebKit
        push.apply(ret, elems.get(***REMOVED******REMOVED***;
      ***REMOVED***
      return this.pushStack(ret***REMOVED***;
    ***REMOVED***;
  ***REMOVED******REMOVED***;
  var rnumnonpx = new RegExp("^(" + pnum + "***REMOVED***(?!px***REMOVED***[a-z%]+$", "i"***REMOVED***;
  var getStyles = function (elem***REMOVED*** {
    // Support: IE <=11 only, Firefox <=30 (#15098, #14150***REMOVED***
    // IE throws on elements created in popups
    // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
    var view = elem.ownerDocument.defaultView;
    if (!view || !view.opener***REMOVED*** {
      view = window;
    ***REMOVED***
    return view.getComputedStyle(elem***REMOVED***;
  ***REMOVED***;
  var swap = function (elem, options, callback***REMOVED*** {
    var ret,
      name,
      old = {***REMOVED***;

    // Remember the old values, and insert the new ones
    for (name in options***REMOVED*** {
      old[name] = elem.style[name];
      elem.style[name] = options[name];
    ***REMOVED***
    ret = callback.call(elem***REMOVED***;

    // Revert the old values
    for (name in options***REMOVED*** {
      elem.style[name] = old[name];
    ***REMOVED***
    return ret;
  ***REMOVED***;
  var rboxStyle = new RegExp(cssExpand.join("|"***REMOVED***, "i"***REMOVED***;
  (function (***REMOVED*** {
    // Executing both pixelPosition & boxSizingReliable tests require only one layout
    // so they're executed at the same time to save the second computation.
    function computeStyleTests(***REMOVED*** {
      // This is a singleton, we need to execute it only once
      if (!div***REMOVED*** {
        return;
      ***REMOVED***
      container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
      div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
      documentElement.appendChild(container***REMOVED***.appendChild(div***REMOVED***;
      var divStyle = window.getComputedStyle(div***REMOVED***;
      pixelPositionVal = divStyle.top !== "1%";

      // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
      reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft***REMOVED*** === 12;

      // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
      // Some styles come back with percentage values, even though they shouldn't
      div.style.right = "60%";
      pixelBoxStylesVal = roundPixelMeasures(divStyle.right***REMOVED*** === 36;

      // Support: IE 9 - 11 only
      // Detect misreporting of content dimensions for box-sizing:border-box elements
      boxSizingReliableVal = roundPixelMeasures(divStyle.width***REMOVED*** === 36;

      // Support: IE 9 only
      // Detect overflow:scroll screwiness (gh-3699***REMOVED***
      // Support: Chrome <=64
      // Don't get tricked when zoom affects offsetWidth (gh-4029***REMOVED***
      div.style.position = "absolute";
      scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3***REMOVED*** === 12;
      documentElement.removeChild(container***REMOVED***;

      // Nullify the div so it wouldn't be stored in the memory and
      // it will also be a sign that checks already performed
      div = null;
    ***REMOVED***
    function roundPixelMeasures(measure***REMOVED*** {
      return Math.round(parseFloat(measure***REMOVED******REMOVED***;
    ***REMOVED***
    var pixelPositionVal,
      boxSizingReliableVal,
      scrollboxSizeVal,
      pixelBoxStylesVal,
      reliableTrDimensionsVal,
      reliableMarginLeftVal,
      container = document.createElement("div"***REMOVED***,
      div = document.createElement("div"***REMOVED***;

    // Finish early in limited (non-browser***REMOVED*** environments
    if (!div.style***REMOVED*** {
      return;
    ***REMOVED***

    // Support: IE <=9 - 11 only
    // Style of cloned element affects source element cloned (#8908***REMOVED***
    div.style.backgroundClip = "content-box";
    div.cloneNode(true***REMOVED***.style.backgroundClip = "";
    support.clearCloneStyle = div.style.backgroundClip === "content-box";
    jQuery.extend(support, {
      boxSizingReliable: function (***REMOVED*** {
        computeStyleTests(***REMOVED***;
        return boxSizingReliableVal;
      ***REMOVED***,
      pixelBoxStyles: function (***REMOVED*** {
        computeStyleTests(***REMOVED***;
        return pixelBoxStylesVal;
      ***REMOVED***,
      pixelPosition: function (***REMOVED*** {
        computeStyleTests(***REMOVED***;
        return pixelPositionVal;
      ***REMOVED***,
      reliableMarginLeft: function (***REMOVED*** {
        computeStyleTests(***REMOVED***;
        return reliableMarginLeftVal;
      ***REMOVED***,
      scrollboxSize: function (***REMOVED*** {
        computeStyleTests(***REMOVED***;
        return scrollboxSizeVal;
      ***REMOVED***,
      // Support: IE 9 - 11+, Edge 15 - 18+
      // IE/Edge misreport `getComputedStyle` of table rows with width/height
      // set in CSS while `offset*` properties report correct values.
      // Behavior in IE 9 is more subtle than in newer versions & it passes
      // some versions of this test; make sure not to make it pass there!
      reliableTrDimensions: function (***REMOVED*** {
        var table, tr, trChild, trStyle;
        if (reliableTrDimensionsVal == null***REMOVED*** {
          table = document.createElement("table"***REMOVED***;
          tr = document.createElement("tr"***REMOVED***;
          trChild = document.createElement("div"***REMOVED***;
          table.style.cssText = "position:absolute;left:-11111px";
          tr.style.height = "1px";
          trChild.style.height = "9px";
          documentElement.appendChild(table***REMOVED***.appendChild(tr***REMOVED***.appendChild(trChild***REMOVED***;
          trStyle = window.getComputedStyle(tr***REMOVED***;
          reliableTrDimensionsVal = parseInt(trStyle.height***REMOVED*** > 3;
          documentElement.removeChild(table***REMOVED***;
        ***REMOVED***
        return reliableTrDimensionsVal;
      ***REMOVED***
    ***REMOVED******REMOVED***;
  ***REMOVED******REMOVED***(***REMOVED***;
  function curCSS(elem, name, computed***REMOVED*** {
    var width,
      minWidth,
      maxWidth,
      ret,
      // Support: Firefox 51+
      // Retrieving style before computed somehow
      // fixes an issue with getting wrong values
      // on detached elements
      style = elem.style;
    computed = computed || getStyles(elem***REMOVED***;

    // getPropertyValue is needed for:
    //   .css('filter'***REMOVED*** (IE 9 only, #12537***REMOVED***
    //   .css('--customProperty***REMOVED*** (#3144***REMOVED***
    if (computed***REMOVED*** {
      ret = computed.getPropertyValue(name***REMOVED*** || computed[name];
      if (ret === "" && !isAttached(elem***REMOVED******REMOVED*** {
        ret = jQuery.style(elem, name***REMOVED***;
      ***REMOVED***

      // A tribute to the "awesome hack by Dean Edwards"
      // Android Browser returns percentage for some values,
      // but width seems to be reliably pixels.
      // This is against the CSSOM draft spec:
      // https://drafts.csswg.org/cssom/#resolved-values
      if (!support.pixelBoxStyles(***REMOVED*** && rnumnonpx.test(ret***REMOVED*** && rboxStyle.test(name***REMOVED******REMOVED*** {
        // Remember the original values
        width = style.width;
        minWidth = style.minWidth;
        maxWidth = style.maxWidth;

        // Put in the new values to get a computed value out
        style.minWidth = style.maxWidth = style.width = ret;
        ret = computed.width;

        // Revert the changed values
        style.width = width;
        style.minWidth = minWidth;
        style.maxWidth = maxWidth;
      ***REMOVED***
    ***REMOVED***
    return ret !== undefined ?
    // Support: IE <=9 - 11 only
    // IE returns zIndex value as an integer.
    ret + "" : ret;
  ***REMOVED***
  function addGetHookIf(conditionFn, hookFn***REMOVED*** {
    // Define the hook, we'll check on the first run if it's really needed.
    return {
      get: function (***REMOVED*** {
        if (conditionFn(***REMOVED******REMOVED*** {
          // Hook not needed (or it's not possible to use it due
          // to missing dependency***REMOVED***, remove it.
          delete this.get;
          return;
        ***REMOVED***

        // Hook needed; redefine it so that the support test is not executed again.
        return (this.get = hookFn***REMOVED***.apply(this, arguments***REMOVED***;
      ***REMOVED***
    ***REMOVED***;
  ***REMOVED***
  var cssPrefixes = ["Webkit", "Moz", "ms"],
    emptyStyle = document.createElement("div"***REMOVED***.style,
    vendorProps = {***REMOVED***;

  // Return a vendor-prefixed property or undefined
  function vendorPropName(name***REMOVED*** {
    // Check for vendor prefixed names
    var capName = name[0].toUpperCase(***REMOVED*** + name.slice(1***REMOVED***,
      i = cssPrefixes.length;
    while (i--***REMOVED*** {
      name = cssPrefixes[i] + capName;
      if (name in emptyStyle***REMOVED*** {
        return name;
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***

  // Return a potentially-mapped jQuery.cssProps or vendor prefixed property
  function finalPropName(name***REMOVED*** {
    var final = jQuery.cssProps[name] || vendorProps[name];
    if (final***REMOVED*** {
      return final;
    ***REMOVED***
    if (name in emptyStyle***REMOVED*** {
      return name;
    ***REMOVED***
    return vendorProps[name] = vendorPropName(name***REMOVED*** || name;
  ***REMOVED***
  var
    // Swappable if display is none or starts with table
    // except "table", "table-cell", or "table-caption"
    // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
    rdisplayswap = /^(none|table(?!-c[ea]***REMOVED***.+***REMOVED***/,
    rcustomProp = /^--/,
    cssShow = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    ***REMOVED***,
    cssNormalTransform = {
      letterSpacing: "0",
      fontWeight: "400"
    ***REMOVED***;
  function setPositiveNumber(_elem, value, subtract***REMOVED*** {
    // Any relative (+/-***REMOVED*** values have already been
    // normalized at this point
    var matches = rcssNum.exec(value***REMOVED***;
    return matches ?
    // Guard against undefined "subtract", e.g., when used as in cssHooks
    Math.max(0, matches[2] - (subtract || 0***REMOVED******REMOVED*** + (matches[3] || "px"***REMOVED*** : value;
  ***REMOVED***
  function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal***REMOVED*** {
    var i = dimension === "width" ? 1 : 0,
      extra = 0,
      delta = 0;

    // Adjustment may not be necessary
    if (box === (isBorderBox ? "border" : "content"***REMOVED******REMOVED*** {
      return 0;
    ***REMOVED***
    for (; i < 4; i += 2***REMOVED*** {
      // Both box models exclude margin
      if (box === "margin"***REMOVED*** {
        delta += jQuery.css(elem, box + cssExpand[i], true, styles***REMOVED***;
      ***REMOVED***

      // If we get here with a content-box, we're seeking "padding" or "border" or "margin"
      if (!isBorderBox***REMOVED*** {
        // Add padding
        delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles***REMOVED***;

        // For "border" or "margin", add border
        if (box !== "padding"***REMOVED*** {
          delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles***REMOVED***;

          // But still keep track of it otherwise
        ***REMOVED*** else {
          extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles***REMOVED***;
        ***REMOVED***

        // If we get here with a border-box (content + padding + border***REMOVED***, we're seeking "content" or
        // "padding" or "margin"
      ***REMOVED*** else {
        // For "content", subtract padding
        if (box === "content"***REMOVED*** {
          delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles***REMOVED***;
        ***REMOVED***

        // For "content" or "padding", subtract border
        if (box !== "margin"***REMOVED*** {
          delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles***REMOVED***;
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***

    // Account for positive content-box scroll gutter when requested by providing computedVal
    if (!isBorderBox && computedVal >= 0***REMOVED*** {
      // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
      // Assuming integer scroll gutter, subtract the rest and round down
      delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase(***REMOVED*** + dimension.slice(1***REMOVED***] - computedVal - delta - extra - 0.5

      // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
      // Use an explicit zero to avoid NaN (gh-3964***REMOVED***
      ***REMOVED******REMOVED*** || 0;
    ***REMOVED***
    return delta;
  ***REMOVED***
  function getWidthOrHeight(elem, dimension, extra***REMOVED*** {
    // Start with computed style
    var styles = getStyles(elem***REMOVED***,
      // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322***REMOVED***.
      // Fake content-box until we know it's needed to know the true value.
      boxSizingNeeded = !support.boxSizingReliable(***REMOVED*** || extra,
      isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles***REMOVED*** === "border-box",
      valueIsBorderBox = isBorderBox,
      val = curCSS(elem, dimension, styles***REMOVED***,
      offsetProp = "offset" + dimension[0].toUpperCase(***REMOVED*** + dimension.slice(1***REMOVED***;

    // Support: Firefox <=54
    // Return a confounding non-pixel value or feign ignorance, as appropriate.
    if (rnumnonpx.test(val***REMOVED******REMOVED*** {
      if (!extra***REMOVED*** {
        return val;
      ***REMOVED***
      val = "auto";
    ***REMOVED***

    // Support: IE 9 - 11 only
    // Use offsetWidth/offsetHeight for when box sizing is unreliable.
    // In those cases, the computed value can be trusted to be border-box.
    if ((!support.boxSizingReliable(***REMOVED*** && isBorderBox ||
    // Support: IE 10 - 11+, Edge 15 - 18+
    // IE/Edge misreport `getComputedStyle` of table rows with width/height
    // set in CSS while `offset*` properties report correct values.
    // Interestingly, in some cases IE 9 doesn't suffer from this issue.
    !support.reliableTrDimensions(***REMOVED*** && nodeName(elem, "tr"***REMOVED*** ||
    // Fall back to offsetWidth/offsetHeight when value is "auto"
    // This happens for inline elements with no explicit setting (gh-3571***REMOVED***
    val === "auto" ||
    // Support: Android <=4.1 - 4.3 only
    // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602***REMOVED***
    !parseFloat(val***REMOVED*** && jQuery.css(elem, "display", false, styles***REMOVED*** === "inline"***REMOVED*** &&
    // Make sure the element is visible & connected
    elem.getClientRects(***REMOVED***.length***REMOVED*** {
      isBorderBox = jQuery.css(elem, "boxSizing", false, styles***REMOVED*** === "border-box";

      // Where available, offsetWidth/offsetHeight approximate border box dimensions.
      // Where not available (e.g., SVG***REMOVED***, assume unreliable box-sizing and interpret the
      // retrieved value as a content box dimension.
      valueIsBorderBox = offsetProp in elem;
      if (valueIsBorderBox***REMOVED*** {
        val = elem[offsetProp];
      ***REMOVED***
    ***REMOVED***

    // Normalize "" and auto
    val = parseFloat(val***REMOVED*** || 0;

    // Adjust for the element's box model
    return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"***REMOVED***, valueIsBorderBox, styles,
    // Provide the current computed size to request scroll gutter calculation (gh-3589***REMOVED***
    val***REMOVED*** + "px";
  ***REMOVED***
  jQuery.extend({
    // Add in style property hooks for overriding the default
    // behavior of getting and setting a style property
    cssHooks: {
      opacity: {
        get: function (elem, computed***REMOVED*** {
          if (computed***REMOVED*** {
            // We should always get a number back from opacity
            var ret = curCSS(elem, "opacity"***REMOVED***;
            return ret === "" ? "1" : ret;
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***,
    // Don't automatically add "px" to these possibly-unitless properties
    cssNumber: {
      "animationIterationCount": true,
      "columnCount": true,
      "fillOpacity": true,
      "flexGrow": true,
      "flexShrink": true,
      "fontWeight": true,
      "gridArea": true,
      "gridColumn": true,
      "gridColumnEnd": true,
      "gridColumnStart": true,
      "gridRow": true,
      "gridRowEnd": true,
      "gridRowStart": true,
      "lineHeight": true,
      "opacity": true,
      "order": true,
      "orphans": true,
      "widows": true,
      "zIndex": true,
      "zoom": true
    ***REMOVED***,
    // Add in properties whose names you wish to fix before
    // setting or getting the value
    cssProps: {***REMOVED***,
    // Get and set the style property on a DOM Node
    style: function (elem, name, value, extra***REMOVED*** {
      // Don't set styles on text and comment nodes
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style***REMOVED*** {
        return;
      ***REMOVED***

      // Make sure that we're working with the right name
      var ret,
        type,
        hooks,
        origName = camelCase(name***REMOVED***,
        isCustomProp = rcustomProp.test(name***REMOVED***,
        style = elem.style;

      // Make sure that we're working with the right name. We don't
      // want to query the value if it is a CSS custom property
      // since they are user-defined.
      if (!isCustomProp***REMOVED*** {
        name = finalPropName(origName***REMOVED***;
      ***REMOVED***

      // Gets hook for the prefixed version, then unprefixed version
      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

      // Check if we're setting a value
      if (value !== undefined***REMOVED*** {
        type = typeof value;

        // Convert "+=" or "-=" to relative numbers (#7345***REMOVED***
        if (type === "string" && (ret = rcssNum.exec(value***REMOVED******REMOVED*** && ret[1]***REMOVED*** {
          value = adjustCSS(elem, name, ret***REMOVED***;

          // Fixes bug #9237
          type = "number";
        ***REMOVED***

        // Make sure that null and NaN values aren't set (#7116***REMOVED***
        if (value == null || value !== value***REMOVED*** {
          return;
        ***REMOVED***

        // If a number was passed in, add the unit (except for certain CSS properties***REMOVED***
        // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
        // "px" to a few hardcoded values.
        if (type === "number" && !isCustomProp***REMOVED*** {
          value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px"***REMOVED***;
        ***REMOVED***

        // background-* props affect original clone's values
        if (!support.clearCloneStyle && value === "" && name.indexOf("background"***REMOVED*** === 0***REMOVED*** {
          style[name] = "inherit";
        ***REMOVED***

        // If a hook was provided, use that value, otherwise just set the specified value
        if (!hooks || !("set" in hooks***REMOVED*** || (value = hooks.set(elem, value, extra***REMOVED******REMOVED*** !== undefined***REMOVED*** {
          if (isCustomProp***REMOVED*** {
            style.setProperty(name, value***REMOVED***;
          ***REMOVED*** else {
            style[name] = value;
          ***REMOVED***
        ***REMOVED***
      ***REMOVED*** else {
        // If a hook was provided get the non-computed value from there
        if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra***REMOVED******REMOVED*** !== undefined***REMOVED*** {
          return ret;
        ***REMOVED***

        // Otherwise just get the value from the style object
        return style[name];
      ***REMOVED***
    ***REMOVED***,
    css: function (elem, name, extra, styles***REMOVED*** {
      var val,
        num,
        hooks,
        origName = camelCase(name***REMOVED***,
        isCustomProp = rcustomProp.test(name***REMOVED***;

      // Make sure that we're working with the right name. We don't
      // want to modify the value if it is a CSS custom property
      // since they are user-defined.
      if (!isCustomProp***REMOVED*** {
        name = finalPropName(origName***REMOVED***;
      ***REMOVED***

      // Try prefixed name followed by the unprefixed name
      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

      // If a hook was provided get the computed value from there
      if (hooks && "get" in hooks***REMOVED*** {
        val = hooks.get(elem, true, extra***REMOVED***;
      ***REMOVED***

      // Otherwise, if a way to get the computed value exists, use that
      if (val === undefined***REMOVED*** {
        val = curCSS(elem, name, styles***REMOVED***;
      ***REMOVED***

      // Convert "normal" to computed value
      if (val === "normal" && name in cssNormalTransform***REMOVED*** {
        val = cssNormalTransform[name];
      ***REMOVED***

      // Make numeric if forced or a qualifier was provided and val looks numeric
      if (extra === "" || extra***REMOVED*** {
        num = parseFloat(val***REMOVED***;
        return extra === true || isFinite(num***REMOVED*** ? num || 0 : val;
      ***REMOVED***
      return val;
    ***REMOVED***
  ***REMOVED******REMOVED***;
  jQuery.each(["height", "width"], function (_i, dimension***REMOVED*** {
    jQuery.cssHooks[dimension] = {
      get: function (elem, computed, extra***REMOVED*** {
        if (computed***REMOVED*** {
          // Certain elements can have dimension info if we invisibly show them
          // but it must have a current display style that would benefit
          return rdisplayswap.test(jQuery.css(elem, "display"***REMOVED******REMOVED*** && (
          // Support: Safari 8+
          // Table columns in Safari have non-zero offsetWidth & zero
          // getBoundingClientRect(***REMOVED***.width unless display is changed.
          // Support: IE <=11 only
          // Running getBoundingClientRect on a disconnected node
          // in IE throws an error.
          !elem.getClientRects(***REMOVED***.length || !elem.getBoundingClientRect(***REMOVED***.width***REMOVED*** ? swap(elem, cssShow, function (***REMOVED*** {
            return getWidthOrHeight(elem, dimension, extra***REMOVED***;
          ***REMOVED******REMOVED*** : getWidthOrHeight(elem, dimension, extra***REMOVED***;
        ***REMOVED***
      ***REMOVED***,
      set: function (elem, value, extra***REMOVED*** {
        var matches,
          styles = getStyles(elem***REMOVED***,
          // Only read styles.position if the test has a chance to fail
          // to avoid forcing a reflow.
          scrollboxSizeBuggy = !support.scrollboxSize(***REMOVED*** && styles.position === "absolute",
          // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991***REMOVED***
          boxSizingNeeded = scrollboxSizeBuggy || extra,
          isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles***REMOVED*** === "border-box",
          subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles***REMOVED*** : 0;

        // Account for unreliable border-box dimensions by comparing offset* to computed and
        // faking a content-box to get border and padding (gh-3699***REMOVED***
        if (isBorderBox && scrollboxSizeBuggy***REMOVED*** {
          subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase(***REMOVED*** + dimension.slice(1***REMOVED***] - parseFloat(styles[dimension]***REMOVED*** - boxModelAdjustment(elem, dimension, "border", false, styles***REMOVED*** - 0.5***REMOVED***;
        ***REMOVED***

        // Convert to pixels if value adjustment is needed
        if (subtract && (matches = rcssNum.exec(value***REMOVED******REMOVED*** && (matches[3] || "px"***REMOVED*** !== "px"***REMOVED*** {
          elem.style[dimension] = value;
          value = jQuery.css(elem, dimension***REMOVED***;
        ***REMOVED***
        return setPositiveNumber(elem, value, subtract***REMOVED***;
      ***REMOVED***
    ***REMOVED***;
  ***REMOVED******REMOVED***;
  jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed***REMOVED*** {
    if (computed***REMOVED*** {
      return (parseFloat(curCSS(elem, "marginLeft"***REMOVED******REMOVED*** || elem.getBoundingClientRect(***REMOVED***.left - swap(elem, {
        marginLeft: 0
      ***REMOVED***, function (***REMOVED*** {
        return elem.getBoundingClientRect(***REMOVED***.left;
      ***REMOVED******REMOVED******REMOVED*** + "px";
    ***REMOVED***
  ***REMOVED******REMOVED***;

  // These hooks are used by animate to expand properties
  jQuery.each({
    margin: "",
    padding: "",
    border: "Width"
  ***REMOVED***, function (prefix, suffix***REMOVED*** {
    jQuery.cssHooks[prefix + suffix] = {
      expand: function (value***REMOVED*** {
        var i = 0,
          expanded = {***REMOVED***,
          // Assumes a single number if not a string
          parts = typeof value === "string" ? value.split(" "***REMOVED*** : [value];
        for (; i < 4; i++***REMOVED*** {
          expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
        ***REMOVED***
        return expanded;
      ***REMOVED***
    ***REMOVED***;
    if (prefix !== "margin"***REMOVED*** {
      jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    ***REMOVED***
  ***REMOVED******REMOVED***;
  jQuery.fn.extend({
    css: function (name, value***REMOVED*** {
      return access(this, function (elem, name, value***REMOVED*** {
        var styles,
          len,
          map = {***REMOVED***,
          i = 0;
        if (Array.isArray(name***REMOVED******REMOVED*** {
          styles = getStyles(elem***REMOVED***;
          len = name.length;
          for (; i < len; i++***REMOVED*** {
            map[name[i]] = jQuery.css(elem, name[i], false, styles***REMOVED***;
          ***REMOVED***
          return map;
        ***REMOVED***
        return value !== undefined ? jQuery.style(elem, name, value***REMOVED*** : jQuery.css(elem, name***REMOVED***;
      ***REMOVED***, name, value, arguments.length > 1***REMOVED***;
    ***REMOVED***
  ***REMOVED******REMOVED***;
  function Tween(elem, options, prop, end, easing***REMOVED*** {
    return new Tween.prototype.init(elem, options, prop, end, easing***REMOVED***;
  ***REMOVED***
  jQuery.Tween = Tween;
  Tween.prototype = {
    constructor: Tween,
    init: function (elem, options, prop, end, easing, unit***REMOVED*** {
      this.elem = elem;
      this.prop = prop;
      this.easing = easing || jQuery.easing._default;
      this.options = options;
      this.start = this.now = this.cur(***REMOVED***;
      this.end = end;
      this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px"***REMOVED***;
    ***REMOVED***,
    cur: function (***REMOVED*** {
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get ? hooks.get(this***REMOVED*** : Tween.propHooks._default.get(this***REMOVED***;
    ***REMOVED***,
    run: function (percent***REMOVED*** {
      var eased,
        hooks = Tween.propHooks[this.prop];
      if (this.options.duration***REMOVED*** {
        this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration***REMOVED***;
      ***REMOVED*** else {
        this.pos = eased = percent;
      ***REMOVED***
      this.now = (this.end - this.start***REMOVED*** * eased + this.start;
      if (this.options.step***REMOVED*** {
        this.options.step.call(this.elem, this.now, this***REMOVED***;
      ***REMOVED***
      if (hooks && hooks.set***REMOVED*** {
        hooks.set(this***REMOVED***;
      ***REMOVED*** else {
        Tween.propHooks._default.set(this***REMOVED***;
      ***REMOVED***
      return this;
    ***REMOVED***
  ***REMOVED***;
  Tween.prototype.init.prototype = Tween.prototype;
  Tween.propHooks = {
    _default: {
      get: function (tween***REMOVED*** {
        var result;

        // Use a property on the element directly when it is not a DOM element,
        // or when there is no matching style property that exists.
        if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null***REMOVED*** {
          return tween.elem[tween.prop];
        ***REMOVED***

        // Passing an empty string as a 3rd parameter to .css will automatically
        // attempt a parseFloat and fallback to a string if the parse fails.
        // Simple values such as "10px" are parsed to Float;
        // complex values such as "rotate(1rad***REMOVED***" are returned as-is.
        result = jQuery.css(tween.elem, tween.prop, ""***REMOVED***;

        // Empty strings, null, undefined and "auto" are converted to 0.
        return !result || result === "auto" ? 0 : result;
      ***REMOVED***,
      set: function (tween***REMOVED*** {
        // Use step hook for back compat.
        // Use cssHook if its there.
        // Use .style if available and use plain properties where available.
        if (jQuery.fx.step[tween.prop]***REMOVED*** {
          jQuery.fx.step[tween.prop](tween***REMOVED***;
        ***REMOVED*** else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop***REMOVED***] != null***REMOVED******REMOVED*** {
          jQuery.style(tween.elem, tween.prop, tween.now + tween.unit***REMOVED***;
        ***REMOVED*** else {
          tween.elem[tween.prop] = tween.now;
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***;

  // Support: IE <=9 only
  // Panic based approach to setting things on disconnected nodes
  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
    set: function (tween***REMOVED*** {
      if (tween.elem.nodeType && tween.elem.parentNode***REMOVED*** {
        tween.elem[tween.prop] = tween.now;
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***;
  jQuery.easing = {
    linear: function (p***REMOVED*** {
      return p;
    ***REMOVED***,
    swing: function (p***REMOVED*** {
      return 0.5 - Math.cos(p * Math.PI***REMOVED*** / 2;
    ***REMOVED***,
    _default: "swing"
  ***REMOVED***;
  jQuery.fx = Tween.prototype.init;

  // Back compat <1.8 extension point
  jQuery.fx.step = {***REMOVED***;
  var fxNow,
    inProgress,
    rfxtypes = /^(?:toggle|show|hide***REMOVED***$/,
    rrun = /queueHooks$/;
  function schedule(***REMOVED*** {
    if (inProgress***REMOVED*** {
      if (document.hidden === false && window.requestAnimationFrame***REMOVED*** {
        window.requestAnimationFrame(schedule***REMOVED***;
      ***REMOVED*** else {
        window.setTimeout(schedule, jQuery.fx.interval***REMOVED***;
      ***REMOVED***
      jQuery.fx.tick(***REMOVED***;
    ***REMOVED***
  ***REMOVED***

  // Animations created synchronously will run synchronously
  function createFxNow(***REMOVED*** {
    window.setTimeout(function (***REMOVED*** {
      fxNow = undefined;
    ***REMOVED******REMOVED***;
    return fxNow = Date.now(***REMOVED***;
  ***REMOVED***

  // Generate parameters to create a standard animation
  function genFx(type, includeWidth***REMOVED*** {
    var which,
      i = 0,
      attrs = {
        height: type
      ***REMOVED***;

    // If we include width, step value is 1 to do all cssExpand values,
    // otherwise step value is 2 to skip over Left and Right
    includeWidth = includeWidth ? 1 : 0;
    for (; i < 4; i += 2 - includeWidth***REMOVED*** {
      which = cssExpand[i];
      attrs["margin" + which] = attrs["padding" + which] = type;
    ***REMOVED***
    if (includeWidth***REMOVED*** {
      attrs.opacity = attrs.width = type;
    ***REMOVED***
    return attrs;
  ***REMOVED***
  function createTween(value, prop, animation***REMOVED*** {
    var tween,
      collection = (Animation.tweeners[prop] || []***REMOVED***.concat(Animation.tweeners["*"]***REMOVED***,
      index = 0,
      length = collection.length;
    for (; index < length; index++***REMOVED*** {
      if (tween = collection[index].call(animation, prop, value***REMOVED******REMOVED*** {
        // We're done with this property
        return tween;
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
  function defaultPrefilter(elem, props, opts***REMOVED*** {
    var prop,
      value,
      toggle,
      hooks,
      oldfire,
      propTween,
      restoreDisplay,
      display,
      isBox = "width" in props || "height" in props,
      anim = this,
      orig = {***REMOVED***,
      style = elem.style,
      hidden = elem.nodeType && isHiddenWithinTree(elem***REMOVED***,
      dataShow = dataPriv.get(elem, "fxshow"***REMOVED***;

    // Queue-skipping animations hijack the fx hooks
    if (!opts.queue***REMOVED*** {
      hooks = jQuery._queueHooks(elem, "fx"***REMOVED***;
      if (hooks.unqueued == null***REMOVED*** {
        hooks.unqueued = 0;
        oldfire = hooks.empty.fire;
        hooks.empty.fire = function (***REMOVED*** {
          if (!hooks.unqueued***REMOVED*** {
            oldfire(***REMOVED***;
          ***REMOVED***
        ***REMOVED***;
      ***REMOVED***
      hooks.unqueued++;
      anim.always(function (***REMOVED*** {
        // Ensure the complete handler is called before this completes
        anim.always(function (***REMOVED*** {
          hooks.unqueued--;
          if (!jQuery.queue(elem, "fx"***REMOVED***.length***REMOVED*** {
            hooks.empty.fire(***REMOVED***;
          ***REMOVED***
        ***REMOVED******REMOVED***;
      ***REMOVED******REMOVED***;
    ***REMOVED***

    // Detect show/hide animations
    for (prop in props***REMOVED*** {
      value = props[prop];
      if (rfxtypes.test(value***REMOVED******REMOVED*** {
        delete props[prop];
        toggle = toggle || value === "toggle";
        if (value === (hidden ? "hide" : "show"***REMOVED******REMOVED*** {
          // Pretend to be hidden if this is a "show" and
          // there is still data from a stopped show/hide
          if (value === "show" && dataShow && dataShow[prop] !== undefined***REMOVED*** {
            hidden = true;

            // Ignore all other no-op show/hide data
          ***REMOVED*** else {
            continue;
          ***REMOVED***
        ***REMOVED***
        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop***REMOVED***;
      ***REMOVED***
    ***REMOVED***

    // Bail out if this is a no-op like .hide(***REMOVED***.hide(***REMOVED***
    propTween = !jQuery.isEmptyObject(props***REMOVED***;
    if (!propTween && jQuery.isEmptyObject(orig***REMOVED******REMOVED*** {
      return;
    ***REMOVED***

    // Restrict "overflow" and "display" styles during box animations
    if (isBox && elem.nodeType === 1***REMOVED*** {
      // Support: IE <=9 - 11, Edge 12 - 15
      // Record all 3 overflow attributes because IE does not infer the shorthand
      // from identically-valued overflowX and overflowY and Edge just mirrors
      // the overflowX value there.
      opts.overflow = [style.overflow, style.overflowX, style.overflowY];

      // Identify a display type, preferring old show/hide data over the CSS cascade
      restoreDisplay = dataShow && dataShow.display;
      if (restoreDisplay == null***REMOVED*** {
        restoreDisplay = dataPriv.get(elem, "display"***REMOVED***;
      ***REMOVED***
      display = jQuery.css(elem, "display"***REMOVED***;
      if (display === "none"***REMOVED*** {
        if (restoreDisplay***REMOVED*** {
          display = restoreDisplay;
        ***REMOVED*** else {
          // Get nonempty value(s***REMOVED*** by temporarily forcing visibility
          showHide([elem], true***REMOVED***;
          restoreDisplay = elem.style.display || restoreDisplay;
          display = jQuery.css(elem, "display"***REMOVED***;
          showHide([elem]***REMOVED***;
        ***REMOVED***
      ***REMOVED***

      // Animate inline elements as inline-block
      if (display === "inline" || display === "inline-block" && restoreDisplay != null***REMOVED*** {
        if (jQuery.css(elem, "float"***REMOVED*** === "none"***REMOVED*** {
          // Restore the original display value at the end of pure show/hide animations
          if (!propTween***REMOVED*** {
            anim.done(function (***REMOVED*** {
              style.display = restoreDisplay;
            ***REMOVED******REMOVED***;
            if (restoreDisplay == null***REMOVED*** {
              display = style.display;
              restoreDisplay = display === "none" ? "" : display;
            ***REMOVED***
          ***REMOVED***
          style.display = "inline-block";
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    if (opts.overflow***REMOVED*** {
      style.overflow = "hidden";
      anim.always(function (***REMOVED*** {
        style.overflow = opts.overflow[0];
        style.overflowX = opts.overflow[1];
        style.overflowY = opts.overflow[2];
      ***REMOVED******REMOVED***;
    ***REMOVED***

    // Implement show/hide animations
    propTween = false;
    for (prop in orig***REMOVED*** {
      // General show/hide setup for this element animation
      if (!propTween***REMOVED*** {
        if (dataShow***REMOVED*** {
          if ("hidden" in dataShow***REMOVED*** {
            hidden = dataShow.hidden;
          ***REMOVED***
        ***REMOVED*** else {
          dataShow = dataPriv.access(elem, "fxshow", {
            display: restoreDisplay
          ***REMOVED******REMOVED***;
        ***REMOVED***

        // Store hidden/visible for toggle so `.stop(***REMOVED***.toggle(***REMOVED***` "reverses"
        if (toggle***REMOVED*** {
          dataShow.hidden = !hidden;
        ***REMOVED***

        // Show elements before animating them
        if (hidden***REMOVED*** {
          showHide([elem], true***REMOVED***;
        ***REMOVED***

        /* eslint-disable no-loop-func */

        anim.done(function (***REMOVED*** {
          /* eslint-enable no-loop-func */

          // The final step of a "hide" animation is actually hiding the element
          if (!hidden***REMOVED*** {
            showHide([elem]***REMOVED***;
          ***REMOVED***
          dataPriv.remove(elem, "fxshow"***REMOVED***;
          for (prop in orig***REMOVED*** {
            jQuery.style(elem, prop, orig[prop]***REMOVED***;
          ***REMOVED***
        ***REMOVED******REMOVED***;
      ***REMOVED***

      // Per-property setup
      propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim***REMOVED***;
      if (!(prop in dataShow***REMOVED******REMOVED*** {
        dataShow[prop] = propTween.start;
        if (hidden***REMOVED*** {
          propTween.end = propTween.start;
          propTween.start = 0;
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
  function propFilter(props, specialEasing***REMOVED*** {
    var index, name, easing, value, hooks;

    // camelCase, specialEasing and expand cssHook pass
    for (index in props***REMOVED*** {
      name = camelCase(index***REMOVED***;
      easing = specialEasing[name];
      value = props[index];
      if (Array.isArray(value***REMOVED******REMOVED*** {
        easing = value[1];
        value = props[index] = value[0];
      ***REMOVED***
      if (index !== name***REMOVED*** {
        props[name] = value;
        delete props[index];
      ***REMOVED***
      hooks = jQuery.cssHooks[name];
      if (hooks && "expand" in hooks***REMOVED*** {
        value = hooks.expand(value***REMOVED***;
        delete props[name];

        // Not quite $.extend, this won't overwrite existing keys.
        // Reusing 'index' because we have the correct "name"
        for (index in value***REMOVED*** {
          if (!(index in props***REMOVED******REMOVED*** {
            props[index] = value[index];
            specialEasing[index] = easing;
          ***REMOVED***
        ***REMOVED***
      ***REMOVED*** else {
        specialEasing[name] = easing;
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
  function Animation(elem, properties, options***REMOVED*** {
    var result,
      stopped,
      index = 0,
      length = Animation.prefilters.length,
      deferred = jQuery.Deferred(***REMOVED***.always(function (***REMOVED*** {
        // Don't match elem in the :animated selector
        delete tick.elem;
      ***REMOVED******REMOVED***,
      tick = function (***REMOVED*** {
        if (stopped***REMOVED*** {
          return false;
        ***REMOVED***
        var currentTime = fxNow || createFxNow(***REMOVED***,
          remaining = Math.max(0, animation.startTime + animation.duration - currentTime***REMOVED***,
          // Support: Android 2.3 only
          // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 ***REMOVED***` (#12497***REMOVED***
          temp = remaining / animation.duration || 0,
          percent = 1 - temp,
          index = 0,
          length = animation.tweens.length;
        for (; index < length; index++***REMOVED*** {
          animation.tweens[index].run(percent***REMOVED***;
        ***REMOVED***
        deferred.notifyWith(elem, [animation, percent, remaining]***REMOVED***;

        // If there's more to do, yield
        if (percent < 1 && length***REMOVED*** {
          return remaining;
        ***REMOVED***

        // If this was an empty animation, synthesize a final progress notification
        if (!length***REMOVED*** {
          deferred.notifyWith(elem, [animation, 1, 0]***REMOVED***;
        ***REMOVED***

        // Resolve the animation and report its conclusion
        deferred.resolveWith(elem, [animation]***REMOVED***;
        return false;
      ***REMOVED***,
      animation = deferred.promise({
        elem: elem,
        props: jQuery.extend({***REMOVED***, properties***REMOVED***,
        opts: jQuery.extend(true, {
          specialEasing: {***REMOVED***,
          easing: jQuery.easing._default
        ***REMOVED***, options***REMOVED***,
        originalProperties: properties,
        originalOptions: options,
        startTime: fxNow || createFxNow(***REMOVED***,
        duration: options.duration,
        tweens: [],
        createTween: function (prop, end***REMOVED*** {
          var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing***REMOVED***;
          animation.tweens.push(tween***REMOVED***;
          return tween;
        ***REMOVED***,
        stop: function (gotoEnd***REMOVED*** {
          var index = 0,
            // If we are going to the end, we want to run all the tweens
            // otherwise we skip this part
            length = gotoEnd ? animation.tweens.length : 0;
          if (stopped***REMOVED*** {
            return this;
          ***REMOVED***
          stopped = true;
          for (; index < length; index++***REMOVED*** {
            animation.tweens[index].run(1***REMOVED***;
          ***REMOVED***

          // Resolve when we played the last frame; otherwise, reject
          if (gotoEnd***REMOVED*** {
            deferred.notifyWith(elem, [animation, 1, 0]***REMOVED***;
            deferred.resolveWith(elem, [animation, gotoEnd]***REMOVED***;
          ***REMOVED*** else {
            deferred.rejectWith(elem, [animation, gotoEnd]***REMOVED***;
          ***REMOVED***
          return this;
        ***REMOVED***
      ***REMOVED******REMOVED***,
      props = animation.props;
    propFilter(props, animation.opts.specialEasing***REMOVED***;
    for (; index < length; index++***REMOVED*** {
      result = Animation.prefilters[index].call(animation, elem, props, animation.opts***REMOVED***;
      if (result***REMOVED*** {
        if (isFunction(result.stop***REMOVED******REMOVED*** {
          jQuery._queueHooks(animation.elem, animation.opts.queue***REMOVED***.stop = result.stop.bind(result***REMOVED***;
        ***REMOVED***
        return result;
      ***REMOVED***
    ***REMOVED***
    jQuery.map(props, createTween, animation***REMOVED***;
    if (isFunction(animation.opts.start***REMOVED******REMOVED*** {
      animation.opts.start.call(elem, animation***REMOVED***;
    ***REMOVED***

    // Attach callbacks from options
    animation.progress(animation.opts.progress***REMOVED***.done(animation.opts.done, animation.opts.complete***REMOVED***.fail(animation.opts.fail***REMOVED***.always(animation.opts.always***REMOVED***;
    jQuery.fx.timer(jQuery.extend(tick, {
      elem: elem,
      anim: animation,
      queue: animation.opts.queue
    ***REMOVED******REMOVED******REMOVED***;
    return animation;
  ***REMOVED***
  jQuery.Animation = jQuery.extend(Animation, {
    tweeners: {
      "*": [function (prop, value***REMOVED*** {
        var tween = this.createTween(prop, value***REMOVED***;
        adjustCSS(tween.elem, prop, rcssNum.exec(value***REMOVED***, tween***REMOVED***;
        return tween;
      ***REMOVED***]
    ***REMOVED***,
    tweener: function (props, callback***REMOVED*** {
      if (isFunction(props***REMOVED******REMOVED*** {
        callback = props;
        props = ["*"];
      ***REMOVED*** else {
        props = props.match(rnothtmlwhite***REMOVED***;
      ***REMOVED***
      var prop,
        index = 0,
        length = props.length;
      for (; index < length; index++***REMOVED*** {
        prop = props[index];
        Animation.tweeners[prop] = Animation.tweeners[prop] || [];
        Animation.tweeners[prop].unshift(callback***REMOVED***;
      ***REMOVED***
    ***REMOVED***,
    prefilters: [defaultPrefilter],
    prefilter: function (callback, prepend***REMOVED*** {
      if (prepend***REMOVED*** {
        Animation.prefilters.unshift(callback***REMOVED***;
      ***REMOVED*** else {
        Animation.prefilters.push(callback***REMOVED***;
      ***REMOVED***
    ***REMOVED***
  ***REMOVED******REMOVED***;
  jQuery.speed = function (speed, easing, fn***REMOVED*** {
    var opt = speed && typeof speed === "object" ? jQuery.extend({***REMOVED***, speed***REMOVED*** : {
      complete: fn || !fn && easing || isFunction(speed***REMOVED*** && speed,
      duration: speed,
      easing: fn && easing || easing && !isFunction(easing***REMOVED*** && easing
    ***REMOVED***;

    // Go to the end state if fx are off
    if (jQuery.fx.off***REMOVED*** {
      opt.duration = 0;
    ***REMOVED*** else {
      if (typeof opt.duration !== "number"***REMOVED*** {
        if (opt.duration in jQuery.fx.speeds***REMOVED*** {
          opt.duration = jQuery.fx.speeds[opt.duration];
        ***REMOVED*** else {
          opt.duration = jQuery.fx.speeds._default;
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***

    // Normalize opt.queue - true/undefined/null -> "fx"
    if (opt.queue == null || opt.queue === true***REMOVED*** {
      opt.queue = "fx";
    ***REMOVED***

    // Queueing
    opt.old = opt.complete;
    opt.complete = function (***REMOVED*** {
      if (isFunction(opt.old***REMOVED******REMOVED*** {
        opt.old.call(this***REMOVED***;
      ***REMOVED***
      if (opt.queue***REMOVED*** {
        jQuery.dequeue(this, opt.queue***REMOVED***;
      ***REMOVED***
    ***REMOVED***;
    return opt;
  ***REMOVED***;
  jQuery.fn.extend({
    fadeTo: function (speed, to, easing, callback***REMOVED*** {
      // Show any hidden elements after setting opacity to 0
      return this.filter(isHiddenWithinTree***REMOVED***.css("opacity", 0***REMOVED***.show(***REMOVED***

      // Animate to the value specified
      .end(***REMOVED***.animate({
        opacity: to
      ***REMOVED***, speed, easing, callback***REMOVED***;
    ***REMOVED***,
    animate: function (prop, speed, easing, callback***REMOVED*** {
      var empty = jQuery.isEmptyObject(prop***REMOVED***,
        optall = jQuery.speed(speed, easing, callback***REMOVED***,
        doAnimation = function (***REMOVED*** {
          // Operate on a copy of prop so per-property easing won't be lost
          var anim = Animation(this, jQuery.extend({***REMOVED***, prop***REMOVED***, optall***REMOVED***;

          // Empty animations, or finishing resolves immediately
          if (empty || dataPriv.get(this, "finish"***REMOVED******REMOVED*** {
            anim.stop(true***REMOVED***;
          ***REMOVED***
        ***REMOVED***;
      doAnimation.finish = doAnimation;
      return empty || optall.queue === false ? this.each(doAnimation***REMOVED*** : this.queue(optall.queue, doAnimation***REMOVED***;
    ***REMOVED***,
    stop: function (type, clearQueue, gotoEnd***REMOVED*** {
      var stopQueue = function (hooks***REMOVED*** {
        var stop = hooks.stop;
        delete hooks.stop;
        stop(gotoEnd***REMOVED***;
      ***REMOVED***;
      if (typeof type !== "string"***REMOVED*** {
        gotoEnd = clearQueue;
        clearQueue = type;
        type = undefined;
      ***REMOVED***
      if (clearQueue***REMOVED*** {
        this.queue(type || "fx", []***REMOVED***;
      ***REMOVED***
      return this.each(function (***REMOVED*** {
        var dequeue = true,
          index = type != null && type + "queueHooks",
          timers = jQuery.timers,
          data = dataPriv.get(this***REMOVED***;
        if (index***REMOVED*** {
          if (data[index] && data[index].stop***REMOVED*** {
            stopQueue(data[index]***REMOVED***;
          ***REMOVED***
        ***REMOVED*** else {
          for (index in data***REMOVED*** {
            if (data[index] && data[index].stop && rrun.test(index***REMOVED******REMOVED*** {
              stopQueue(data[index]***REMOVED***;
            ***REMOVED***
          ***REMOVED***
        ***REMOVED***
        for (index = timers.length; index--;***REMOVED*** {
          if (timers[index].elem === this && (type == null || timers[index].queue === type***REMOVED******REMOVED*** {
            timers[index].anim.stop(gotoEnd***REMOVED***;
            dequeue = false;
            timers.splice(index, 1***REMOVED***;
          ***REMOVED***
        ***REMOVED***

        // Start the next in the queue if the last step wasn't forced.
        // Timers currently will call their complete callbacks, which
        // will dequeue but only if they were gotoEnd.
        if (dequeue || !gotoEnd***REMOVED*** {
          jQuery.dequeue(this, type***REMOVED***;
        ***REMOVED***
      ***REMOVED******REMOVED***;
    ***REMOVED***,
    finish: function (type***REMOVED*** {
      if (type !== false***REMOVED*** {
        type = type || "fx";
      ***REMOVED***
      return this.each(function (***REMOVED*** {
        var index,
          data = dataPriv.get(this***REMOVED***,
          queue = data[type + "queue"],
          hooks = data[type + "queueHooks"],
          timers = jQuery.timers,
          length = queue ? queue.length : 0;

        // Enable finishing flag on private data
        data.finish = true;

        // Empty the queue first
        jQuery.queue(this, type, []***REMOVED***;
        if (hooks && hooks.stop***REMOVED*** {
          hooks.stop.call(this, true***REMOVED***;
        ***REMOVED***

        // Look for any active animations, and finish them
        for (index = timers.length; index--;***REMOVED*** {
          if (timers[index].elem === this && timers[index].queue === type***REMOVED*** {
            timers[index].anim.stop(true***REMOVED***;
            timers.splice(index, 1***REMOVED***;
          ***REMOVED***
        ***REMOVED***

        // Look for any animations in the old queue and finish them
        for (index = 0; index < length; index++***REMOVED*** {
          if (queue[index] && queue[index].finish***REMOVED*** {
            queue[index].finish.call(this***REMOVED***;
          ***REMOVED***
        ***REMOVED***

        // Turn off finishing flag
        delete data.finish;
      ***REMOVED******REMOVED***;
    ***REMOVED***
  ***REMOVED******REMOVED***;
  jQuery.each(["toggle", "show", "hide"], function (_i, name***REMOVED*** {
    var cssFn = jQuery.fn[name];
    jQuery.fn[name] = function (speed, easing, callback***REMOVED*** {
      return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments***REMOVED*** : this.animate(genFx(name, true***REMOVED***, speed, easing, callback***REMOVED***;
    ***REMOVED***;
  ***REMOVED******REMOVED***;

  // Generate shortcuts for custom animations
  jQuery.each({
    slideDown: genFx("show"***REMOVED***,
    slideUp: genFx("hide"***REMOVED***,
    slideToggle: genFx("toggle"***REMOVED***,
    fadeIn: {
      opacity: "show"
    ***REMOVED***,
    fadeOut: {
      opacity: "hide"
    ***REMOVED***,
    fadeToggle: {
      opacity: "toggle"
    ***REMOVED***
  ***REMOVED***, function (name, props***REMOVED*** {
    jQuery.fn[name] = function (speed, easing, callback***REMOVED*** {
      return this.animate(props, speed, easing, callback***REMOVED***;
    ***REMOVED***;
  ***REMOVED******REMOVED***;
  jQuery.timers = [];
  jQuery.fx.tick = function (***REMOVED*** {
    var timer,
      i = 0,
      timers = jQuery.timers;
    fxNow = Date.now(***REMOVED***;
    for (; i < timers.length; i++***REMOVED*** {
      timer = timers[i];

      // Run the timer and safely remove it when done (allowing for external removal***REMOVED***
      if (!timer(***REMOVED*** && timers[i] === timer***REMOVED*** {
        timers.splice(i--, 1***REMOVED***;
      ***REMOVED***
    ***REMOVED***
    if (!timers.length***REMOVED*** {
      jQuery.fx.stop(***REMOVED***;
    ***REMOVED***
    fxNow = undefined;
  ***REMOVED***;
  jQuery.fx.timer = function (timer***REMOVED*** {
    jQuery.timers.push(timer***REMOVED***;
    jQuery.fx.start(***REMOVED***;
  ***REMOVED***;
  jQuery.fx.interval = 13;
  jQuery.fx.start = function (***REMOVED*** {
    if (inProgress***REMOVED*** {
      return;
    ***REMOVED***
    inProgress = true;
    schedule(***REMOVED***;
  ***REMOVED***;
  jQuery.fx.stop = function (***REMOVED*** {
    inProgress = null;
  ***REMOVED***;
  jQuery.fx.speeds = {
    slow: 600,
    fast: 200,
    // Default speed
    _default: 400
  ***REMOVED***;

  // Based off of the plugin by Clint Helfers, with permission.
  // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
  jQuery.fn.delay = function (time, type***REMOVED*** {
    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
    type = type || "fx";
    return this.queue(type, function (next, hooks***REMOVED*** {
      var timeout = window.setTimeout(next, time***REMOVED***;
      hooks.stop = function (***REMOVED*** {
        window.clearTimeout(timeout***REMOVED***;
      ***REMOVED***;
    ***REMOVED******REMOVED***;
  ***REMOVED***;
  (function (***REMOVED*** {
    var input = document.createElement("input"***REMOVED***,
      select = document.createElement("select"***REMOVED***,
      opt = select.appendChild(document.createElement("option"***REMOVED******REMOVED***;
    input.type = "checkbox";

    // Support: Android <=4.3 only
    // Default value for a checkbox should be "on"
    support.checkOn = input.value !== "";

    // Support: IE <=11 only
    // Must access selectedIndex to make default options select
    support.optSelected = opt.selected;

    // Support: IE <=11 only
    // An input loses its value after becoming a radio
    input = document.createElement("input"***REMOVED***;
    input.value = "t";
    input.type = "radio";
    support.radioValue = input.value === "t";
  ***REMOVED******REMOVED***(***REMOVED***;
  var boolHook,
    attrHandle = jQuery.expr.attrHandle;
  jQuery.fn.extend({
    attr: function (name, value***REMOVED*** {
      return access(this, jQuery.attr, name, value, arguments.length > 1***REMOVED***;
    ***REMOVED***,
    removeAttr: function (name***REMOVED*** {
      return this.each(function (***REMOVED*** {
        jQuery.removeAttr(this, name***REMOVED***;
      ***REMOVED******REMOVED***;
    ***REMOVED***
  ***REMOVED******REMOVED***;
  jQuery.extend({
    attr: function (elem, name, value***REMOVED*** {
      var ret,
        hooks,
        nType = elem.nodeType;

      // Don't get/set attributes on text, comment and attribute nodes
      if (nType === 3 || nType === 8 || nType === 2***REMOVED*** {
        return;
      ***REMOVED***

      // Fallback to prop when attributes are not supported
      if (typeof elem.getAttribute === "undefined"***REMOVED*** {
        return jQuery.prop(elem, name, value***REMOVED***;
      ***REMOVED***

      // Attribute hooks are determined by the lowercase version
      // Grab necessary hook if one is defined
      if (nType !== 1 || !jQuery.isXMLDoc(elem***REMOVED******REMOVED*** {
        hooks = jQuery.attrHooks[name.toLowerCase(***REMOVED***] || (jQuery.expr.match.bool.test(name***REMOVED*** ? boolHook : undefined***REMOVED***;
      ***REMOVED***
      if (value !== undefined***REMOVED*** {
        if (value === null***REMOVED*** {
          jQuery.removeAttr(elem, name***REMOVED***;
          return;
        ***REMOVED***
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name***REMOVED******REMOVED*** !== undefined***REMOVED*** {
          return ret;
        ***REMOVED***
        elem.setAttribute(name, value + ""***REMOVED***;
        return value;
      ***REMOVED***
      if (hooks && "get" in hooks && (ret = hooks.get(elem, name***REMOVED******REMOVED*** !== null***REMOVED*** {
        return ret;
      ***REMOVED***
      ret = jQuery.find.attr(elem, name***REMOVED***;

      // Non-existent attributes return null, we normalize to undefined
      return ret == null ? undefined : ret;
    ***REMOVED***,
    attrHooks: {
      type: {
        set: function (elem, value***REMOVED*** {
          if (!support.radioValue && value === "radio" && nodeName(elem, "input"***REMOVED******REMOVED*** {
            var val = elem.value;
            elem.setAttribute("type", value***REMOVED***;
            if (val***REMOVED*** {
              elem.value = val;
            ***REMOVED***
            return value;
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***,
    removeAttr: function (elem, value***REMOVED*** {
      var name,
        i = 0,
        // Attribute names can contain non-HTML whitespace characters
        // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
        attrNames = value && value.match(rnothtmlwhite***REMOVED***;
      if (attrNames && elem.nodeType === 1***REMOVED*** {
        while (name = attrNames[i++]***REMOVED*** {
          elem.removeAttribute(name***REMOVED***;
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
  ***REMOVED******REMOVED***;

  // Hooks for boolean attributes
  boolHook = {
    set: function (elem, value, name***REMOVED*** {
      if (value === false***REMOVED*** {
        // Remove boolean attributes when set to false
        jQuery.removeAttr(elem, name***REMOVED***;
      ***REMOVED*** else {
        elem.setAttribute(name, name***REMOVED***;
      ***REMOVED***
      return name;
    ***REMOVED***
  ***REMOVED***;
  jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g***REMOVED***, function (_i, name***REMOVED*** {
    var getter = attrHandle[name] || jQuery.find.attr;
    attrHandle[name] = function (elem, name, isXML***REMOVED*** {
      var ret,
        handle,
        lowercaseName = name.toLowerCase(***REMOVED***;
      if (!isXML***REMOVED*** {
        // Avoid an infinite loop by temporarily removing this function from the getter
        handle = attrHandle[lowercaseName];
        attrHandle[lowercaseName] = ret;
        ret = getter(elem, name, isXML***REMOVED*** != null ? lowercaseName : null;
        attrHandle[lowercaseName] = handle;
      ***REMOVED***
      return ret;
    ***REMOVED***;
  ***REMOVED******REMOVED***;
  var rfocusable = /^(?:input|select|textarea|button***REMOVED***$/i,
    rclickable = /^(?:a|area***REMOVED***$/i;
  jQuery.fn.extend({
    prop: function (name, value***REMOVED*** {
      return access(this, jQuery.prop, name, value, arguments.length > 1***REMOVED***;
    ***REMOVED***,
    removeProp: function (name***REMOVED*** {
      return this.each(function (***REMOVED*** {
        delete this[jQuery.propFix[name] || name];
      ***REMOVED******REMOVED***;
    ***REMOVED***
  ***REMOVED******REMOVED***;
  jQuery.extend({
    prop: function (elem, name, value***REMOVED*** {
      var ret,
        hooks,
        nType = elem.nodeType;

      // Don't get/set properties on text, comment and attribute nodes
      if (nType === 3 || nType === 8 || nType === 2***REMOVED*** {
        return;
      ***REMOVED***
      if (nType !== 1 || !jQuery.isXMLDoc(elem***REMOVED******REMOVED*** {
        // Fix name and attach hooks
        name = jQuery.propFix[name] || name;
        hooks = jQuery.propHooks[name];
      ***REMOVED***
      if (value !== undefined***REMOVED*** {
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name***REMOVED******REMOVED*** !== undefined***REMOVED*** {
          return ret;
        ***REMOVED***
        return elem[name] = value;
      ***REMOVED***
      if (hooks && "get" in hooks && (ret = hooks.get(elem, name***REMOVED******REMOVED*** !== null***REMOVED*** {
        return ret;
      ***REMOVED***
      return elem[name];
    ***REMOVED***,
    propHooks: {
      tabIndex: {
        get: function (elem***REMOVED*** {
          // Support: IE <=9 - 11 only
          // elem.tabIndex doesn't always return the
          // correct value when it hasn't been explicitly set
          // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
          // Use proper attribute retrieval(#12072***REMOVED***
          var tabindex = jQuery.find.attr(elem, "tabindex"***REMOVED***;
          if (tabindex***REMOVED*** {
            return parseInt(tabindex, 10***REMOVED***;
          ***REMOVED***
          if (rfocusable.test(elem.nodeName***REMOVED*** || rclickable.test(elem.nodeName***REMOVED*** && elem.href***REMOVED*** {
            return 0;
          ***REMOVED***
          return -1;
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***,
    propFix: {
      "for": "htmlFor",
      "class": "className"
    ***REMOVED***
  ***REMOVED******REMOVED***;

  // Support: IE <=11 only
  // Accessing the selectedIndex property
  // forces the browser to respect setting selected
  // on the option
  // The getter ensures a default option is selected
  // when in an optgroup
  // eslint rule "no-unused-expressions" is disabled for this code
  // since it considers such accessions noop
  if (!support.optSelected***REMOVED*** {
    jQuery.propHooks.selected = {
      get: function (elem***REMOVED*** {
        /* eslint no-unused-expressions: "off" */

        var parent = elem.parentNode;
        if (parent && parent.parentNode***REMOVED*** {
          parent.parentNode.selectedIndex;
        ***REMOVED***
        return null;
      ***REMOVED***,
      set: function (elem***REMOVED*** {
        /* eslint no-unused-expressions: "off" */

        var parent = elem.parentNode;
        if (parent***REMOVED*** {
          parent.selectedIndex;
          if (parent.parentNode***REMOVED*** {
            parent.parentNode.selectedIndex;
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***;
  ***REMOVED***
  jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function (***REMOVED*** {
    jQuery.propFix[this.toLowerCase(***REMOVED***] = this;
  ***REMOVED******REMOVED***;

  // Strip and collapse whitespace according to HTML spec
  // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
  function stripAndCollapse(value***REMOVED*** {
    var tokens = value.match(rnothtmlwhite***REMOVED*** || [];
    return tokens.join(" "***REMOVED***;
  ***REMOVED***
  function getClass(elem***REMOVED*** {
    return elem.getAttribute && elem.getAttribute("class"***REMOVED*** || "";
  ***REMOVED***
  function classesToArray(value***REMOVED*** {
    if (Array.isArray(value***REMOVED******REMOVED*** {
      return value;
    ***REMOVED***
    if (typeof value === "string"***REMOVED*** {
      return value.match(rnothtmlwhite***REMOVED*** || [];
    ***REMOVED***
    return [];
  ***REMOVED***
  jQuery.fn.extend({
    addClass: function (value***REMOVED*** {
      var classes,
        elem,
        cur,
        curValue,
        clazz,
        j,
        finalValue,
        i = 0;
      if (isFunction(value***REMOVED******REMOVED*** {
        return this.each(function (j***REMOVED*** {
          jQuery(this***REMOVED***.addClass(value.call(this, j, getClass(this***REMOVED******REMOVED******REMOVED***;
        ***REMOVED******REMOVED***;
      ***REMOVED***
      classes = classesToArray(value***REMOVED***;
      if (classes.length***REMOVED*** {
        while (elem = this[i++]***REMOVED*** {
          curValue = getClass(elem***REMOVED***;
          cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue***REMOVED*** + " ";
          if (cur***REMOVED*** {
            j = 0;
            while (clazz = classes[j++]***REMOVED*** {
              if (cur.indexOf(" " + clazz + " "***REMOVED*** < 0***REMOVED*** {
                cur += clazz + " ";
              ***REMOVED***
            ***REMOVED***

            // Only assign if different to avoid unneeded rendering.
            finalValue = stripAndCollapse(cur***REMOVED***;
            if (curValue !== finalValue***REMOVED*** {
              elem.setAttribute("class", finalValue***REMOVED***;
            ***REMOVED***
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***
      return this;
    ***REMOVED***,
    removeClass: function (value***REMOVED*** {
      var classes,
        elem,
        cur,
        curValue,
        clazz,
        j,
        finalValue,
        i = 0;
      if (isFunction(value***REMOVED******REMOVED*** {
        return this.each(function (j***REMOVED*** {
          jQuery(this***REMOVED***.removeClass(value.call(this, j, getClass(this***REMOVED******REMOVED******REMOVED***;
        ***REMOVED******REMOVED***;
      ***REMOVED***
      if (!arguments.length***REMOVED*** {
        return this.attr("class", ""***REMOVED***;
      ***REMOVED***
      classes = classesToArray(value***REMOVED***;
      if (classes.length***REMOVED*** {
        while (elem = this[i++]***REMOVED*** {
          curValue = getClass(elem***REMOVED***;

          // This expression is here for better compressibility (see addClass***REMOVED***
          cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue***REMOVED*** + " ";
          if (cur***REMOVED*** {
            j = 0;
            while (clazz = classes[j++]***REMOVED*** {
              // Remove *all* instances
              while (cur.indexOf(" " + clazz + " "***REMOVED*** > -1***REMOVED*** {
                cur = cur.replace(" " + clazz + " ", " "***REMOVED***;
              ***REMOVED***
            ***REMOVED***

            // Only assign if different to avoid unneeded rendering.
            finalValue = stripAndCollapse(cur***REMOVED***;
            if (curValue !== finalValue***REMOVED*** {
              elem.setAttribute("class", finalValue***REMOVED***;
            ***REMOVED***
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***
      return this;
    ***REMOVED***,
    toggleClass: function (value, stateVal***REMOVED*** {
      var type = typeof value,
        isValidValue = type === "string" || Array.isArray(value***REMOVED***;
      if (typeof stateVal === "boolean" && isValidValue***REMOVED*** {
        return stateVal ? this.addClass(value***REMOVED*** : this.removeClass(value***REMOVED***;
      ***REMOVED***
      if (isFunction(value***REMOVED******REMOVED*** {
        return this.each(function (i***REMOVED*** {
          jQuery(this***REMOVED***.toggleClass(value.call(this, i, getClass(this***REMOVED***, stateVal***REMOVED***, stateVal***REMOVED***;
        ***REMOVED******REMOVED***;
      ***REMOVED***
      return this.each(function (***REMOVED*** {
        var className, i, self, classNames;
        if (isValidValue***REMOVED*** {
          // Toggle individual class names
          i = 0;
          self = jQuery(this***REMOVED***;
          classNames = classesToArray(value***REMOVED***;
          while (className = classNames[i++]***REMOVED*** {
            // Check each className given, space separated list
            if (self.hasClass(className***REMOVED******REMOVED*** {
              self.removeClass(className***REMOVED***;
            ***REMOVED*** else {
              self.addClass(className***REMOVED***;
            ***REMOVED***
          ***REMOVED***

          // Toggle whole class name
        ***REMOVED*** else if (value === undefined || type === "boolean"***REMOVED*** {
          className = getClass(this***REMOVED***;
          if (className***REMOVED*** {
            // Store className if set
            dataPriv.set(this, "__className__", className***REMOVED***;
          ***REMOVED***

          // If the element has a class name or if we're passed `false`,
          // then remove the whole classname (if there was one, the above saved it***REMOVED***.
          // Otherwise bring back whatever was previously saved (if anything***REMOVED***,
          // falling back to the empty string if nothing was stored.
          if (this.setAttribute***REMOVED*** {
            this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__"***REMOVED*** || ""***REMOVED***;
          ***REMOVED***
        ***REMOVED***
      ***REMOVED******REMOVED***;
    ***REMOVED***,
    hasClass: function (selector***REMOVED*** {
      var className,
        elem,
        i = 0;
      className = " " + selector + " ";
      while (elem = this[i++]***REMOVED*** {
        if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem***REMOVED******REMOVED*** + " "***REMOVED***.indexOf(className***REMOVED*** > -1***REMOVED*** {
          return true;
        ***REMOVED***
      ***REMOVED***
      return false;
    ***REMOVED***
  ***REMOVED******REMOVED***;
  var rreturn = /\r/g;
  jQuery.fn.extend({
    val: function (value***REMOVED*** {
      var hooks,
        ret,
        valueIsFunction,
        elem = this[0];
      if (!arguments.length***REMOVED*** {
        if (elem***REMOVED*** {
          hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase(***REMOVED***];
          if (hooks && "get" in hooks && (ret = hooks.get(elem, "value"***REMOVED******REMOVED*** !== undefined***REMOVED*** {
            return ret;
          ***REMOVED***
          ret = elem.value;

          // Handle most common string cases
          if (typeof ret === "string"***REMOVED*** {
            return ret.replace(rreturn, ""***REMOVED***;
          ***REMOVED***

          // Handle cases where value is null/undef or number
          return ret == null ? "" : ret;
        ***REMOVED***
        return;
      ***REMOVED***
      valueIsFunction = isFunction(value***REMOVED***;
      return this.each(function (i***REMOVED*** {
        var val;
        if (this.nodeType !== 1***REMOVED*** {
          return;
        ***REMOVED***
        if (valueIsFunction***REMOVED*** {
          val = value.call(this, i, jQuery(this***REMOVED***.val(***REMOVED******REMOVED***;
        ***REMOVED*** else {
          val = value;
        ***REMOVED***

        // Treat null/undefined as ""; convert numbers to string
        if (val == null***REMOVED*** {
          val = "";
        ***REMOVED*** else if (typeof val === "number"***REMOVED*** {
          val += "";
        ***REMOVED*** else if (Array.isArray(val***REMOVED******REMOVED*** {
          val = jQuery.map(val, function (value***REMOVED*** {
            return value == null ? "" : value + "";
          ***REMOVED******REMOVED***;
        ***REMOVED***
        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase(***REMOVED***];

        // If set returns undefined, fall back to normal setting
        if (!hooks || !("set" in hooks***REMOVED*** || hooks.set(this, val, "value"***REMOVED*** === undefined***REMOVED*** {
          this.value = val;
        ***REMOVED***
      ***REMOVED******REMOVED***;
    ***REMOVED***
  ***REMOVED******REMOVED***;
  jQuery.extend({
    valHooks: {
      option: {
        get: function (elem***REMOVED*** {
          var val = jQuery.find.attr(elem, "value"***REMOVED***;
          return val != null ? val :
          // Support: IE <=10 - 11 only
          // option.text throws exceptions (#14686, #14858***REMOVED***
          // Strip and collapse whitespace
          // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
          stripAndCollapse(jQuery.text(elem***REMOVED******REMOVED***;
        ***REMOVED***
      ***REMOVED***,
      select: {
        get: function (elem***REMOVED*** {
          var value,
            option,
            i,
            options = elem.options,
            index = elem.selectedIndex,
            one = elem.type === "select-one",
            values = one ? null : [],
            max = one ? index + 1 : options.length;
          if (index < 0***REMOVED*** {
            i = max;
          ***REMOVED*** else {
            i = one ? index : 0;
          ***REMOVED***

          // Loop through all the selected options
          for (; i < max; i++***REMOVED*** {
            option = options[i];

            // Support: IE <=9 only
            // IE8-9 doesn't update selected after form reset (#2551***REMOVED***
            if ((option.selected || i === index***REMOVED*** &&
            // Don't return options that are disabled or in a disabled optgroup
            !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"***REMOVED******REMOVED******REMOVED*** {
              // Get the specific value for the option
              value = jQuery(option***REMOVED***.val(***REMOVED***;

              // We don't need an array for one selects
              if (one***REMOVED*** {
                return value;
              ***REMOVED***

              // Multi-Selects return an array
              values.push(value***REMOVED***;
            ***REMOVED***
          ***REMOVED***
          return values;
        ***REMOVED***,
        set: function (elem, value***REMOVED*** {
          var optionSet,
            option,
            options = elem.options,
            values = jQuery.makeArray(value***REMOVED***,
            i = options.length;
          while (i--***REMOVED*** {
            option = options[i];

            /* eslint-disable no-cond-assign */

            if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option***REMOVED***, values***REMOVED*** > -1***REMOVED*** {
              optionSet = true;
            ***REMOVED***

            /* eslint-enable no-cond-assign */
          ***REMOVED***

          // Force browsers to behave consistently when non-matching value is set
          if (!optionSet***REMOVED*** {
            elem.selectedIndex = -1;
          ***REMOVED***
          return values;
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
  ***REMOVED******REMOVED***;

  // Radios and checkboxes getter/setter
  jQuery.each(["radio", "checkbox"], function (***REMOVED*** {
    jQuery.valHooks[this] = {
      set: function (elem, value***REMOVED*** {
        if (Array.isArray(value***REMOVED******REMOVED*** {
          return elem.checked = jQuery.inArray(jQuery(elem***REMOVED***.val(***REMOVED***, value***REMOVED*** > -1;
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***;
    if (!support.checkOn***REMOVED*** {
      jQuery.valHooks[this].get = function (elem***REMOVED*** {
        return elem.getAttribute("value"***REMOVED*** === null ? "on" : elem.value;
      ***REMOVED***;
    ***REMOVED***
  ***REMOVED******REMOVED***;

  // Return jQuery for attributes-only inclusion

  support.focusin = "onfocusin" in window;
  var rfocusMorph = /^(?:focusinfocus|focusoutblur***REMOVED***$/,
    stopPropagationCallback = function (e***REMOVED*** {
      e.stopPropagation(***REMOVED***;
    ***REMOVED***;
  jQuery.extend(jQuery.event, {
    trigger: function (event, data, elem, onlyHandlers***REMOVED*** {
      var i,
        cur,
        tmp,
        bubbleType,
        ontype,
        handle,
        special,
        lastElement,
        eventPath = [elem || document],
        type = hasOwn.call(event, "type"***REMOVED*** ? event.type : event,
        namespaces = hasOwn.call(event, "namespace"***REMOVED*** ? event.namespace.split("."***REMOVED*** : [];
      cur = lastElement = tmp = elem = elem || document;

      // Don't do events on text and comment nodes
      if (elem.nodeType === 3 || elem.nodeType === 8***REMOVED*** {
        return;
      ***REMOVED***

      // focus/blur morphs to focusin/out; ensure we're not firing them right now
      if (rfocusMorph.test(type + jQuery.event.triggered***REMOVED******REMOVED*** {
        return;
      ***REMOVED***
      if (type.indexOf("."***REMOVED*** > -1***REMOVED*** {
        // Namespaced trigger; create a regexp to match event type in handle(***REMOVED***
        namespaces = type.split("."***REMOVED***;
        type = namespaces.shift(***REMOVED***;
        namespaces.sort(***REMOVED***;
      ***REMOVED***
      ontype = type.indexOf(":"***REMOVED*** < 0 && "on" + type;

      // Caller can pass in a jQuery.Event object, Object, or just an event type string
      event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event***REMOVED***;

      // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true***REMOVED***
      event.isTrigger = onlyHandlers ? 2 : 3;
      event.namespace = namespaces.join("."***REMOVED***;
      event.rnamespace = event.namespace ? new RegExp("(^|\\.***REMOVED***" + namespaces.join("\\.(?:.*\\.|***REMOVED***"***REMOVED*** + "(\\.|$***REMOVED***"***REMOVED*** : null;

      // Clean up the event in case it is being reused
      event.result = undefined;
      if (!event.target***REMOVED*** {
        event.target = elem;
      ***REMOVED***

      // Clone any incoming data and prepend the event, creating the handler arg list
      data = data == null ? [event] : jQuery.makeArray(data, [event]***REMOVED***;

      // Allow special events to draw outside the lines
      special = jQuery.event.special[type] || {***REMOVED***;
      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data***REMOVED*** === false***REMOVED*** {
        return;
      ***REMOVED***

      // Determine event propagation path in advance, per W3C events spec (#9951***REMOVED***
      // Bubble up to document, then to window; watch for a global ownerDocument var (#9724***REMOVED***
      if (!onlyHandlers && !special.noBubble && !isWindow(elem***REMOVED******REMOVED*** {
        bubbleType = special.delegateType || type;
        if (!rfocusMorph.test(bubbleType + type***REMOVED******REMOVED*** {
          cur = cur.parentNode;
        ***REMOVED***
        for (; cur; cur = cur.parentNode***REMOVED*** {
          eventPath.push(cur***REMOVED***;
          tmp = cur;
        ***REMOVED***

        // Only add window if we got to document (e.g., not plain obj or detached DOM***REMOVED***
        if (tmp === (elem.ownerDocument || document***REMOVED******REMOVED*** {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window***REMOVED***;
        ***REMOVED***
      ***REMOVED***

      // Fire handlers on the event path
      i = 0;
      while ((cur = eventPath[i++]***REMOVED*** && !event.isPropagationStopped(***REMOVED******REMOVED*** {
        lastElement = cur;
        event.type = i > 1 ? bubbleType : special.bindType || type;

        // jQuery handler
        handle = (dataPriv.get(cur, "events"***REMOVED*** || Object.create(null***REMOVED******REMOVED***[event.type] && dataPriv.get(cur, "handle"***REMOVED***;
        if (handle***REMOVED*** {
          handle.apply(cur, data***REMOVED***;
        ***REMOVED***

        // Native handler
        handle = ontype && cur[ontype];
        if (handle && handle.apply && acceptData(cur***REMOVED******REMOVED*** {
          event.result = handle.apply(cur, data***REMOVED***;
          if (event.result === false***REMOVED*** {
            event.preventDefault(***REMOVED***;
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***
      event.type = type;

      // If nobody prevented the default action, do it now
      if (!onlyHandlers && !event.isDefaultPrevented(***REMOVED******REMOVED*** {
        if ((!special._default || special._default.apply(eventPath.pop(***REMOVED***, data***REMOVED*** === false***REMOVED*** && acceptData(elem***REMOVED******REMOVED*** {
          // Call a native DOM method on the target with the same name as the event.
          // Don't do default actions on window, that's where global variables be (#6170***REMOVED***
          if (ontype && isFunction(elem[type]***REMOVED*** && !isWindow(elem***REMOVED******REMOVED*** {
            // Don't re-trigger an onFOO event when we call its FOO(***REMOVED*** method
            tmp = elem[ontype];
            if (tmp***REMOVED*** {
              elem[ontype] = null;
            ***REMOVED***

            // Prevent re-triggering of the same event, since we already bubbled it above
            jQuery.event.triggered = type;
            if (event.isPropagationStopped(***REMOVED******REMOVED*** {
              lastElement.addEventListener(type, stopPropagationCallback***REMOVED***;
            ***REMOVED***
            elem[type](***REMOVED***;
            if (event.isPropagationStopped(***REMOVED******REMOVED*** {
              lastElement.removeEventListener(type, stopPropagationCallback***REMOVED***;
            ***REMOVED***
            jQuery.event.triggered = undefined;
            if (tmp***REMOVED*** {
              elem[ontype] = tmp;
            ***REMOVED***
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***
      return event.result;
    ***REMOVED***,
    // Piggyback on a donor event to simulate a different one
    // Used only for `focus(in | out***REMOVED***` events
    simulate: function (type, elem, event***REMOVED*** {
      var e = jQuery.extend(new jQuery.Event(***REMOVED***, event, {
        type: type,
        isSimulated: true
      ***REMOVED******REMOVED***;
      jQuery.event.trigger(e, null, elem***REMOVED***;
    ***REMOVED***
  ***REMOVED******REMOVED***;
  jQuery.fn.extend({
    trigger: function (type, data***REMOVED*** {
      return this.each(function (***REMOVED*** {
        jQuery.event.trigger(type, data, this***REMOVED***;
      ***REMOVED******REMOVED***;
    ***REMOVED***,
    triggerHandler: function (type, data***REMOVED*** {
      var elem = this[0];
      if (elem***REMOVED*** {
        return jQuery.event.trigger(type, data, elem, true***REMOVED***;
      ***REMOVED***
    ***REMOVED***
  ***REMOVED******REMOVED***;

  // Support: Firefox <=44
  // Firefox doesn't have focus(in | out***REMOVED*** events
  // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
  //
  // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
  // focus(in | out***REMOVED*** events fire after focus & blur events,
  // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
  // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
  if (!support.focusin***REMOVED*** {
    jQuery.each({
      focus: "focusin",
      blur: "focusout"
    ***REMOVED***, function (orig, fix***REMOVED*** {
      // Attach a single capturing handler on the document while someone wants focusin/focusout
      var handler = function (event***REMOVED*** {
        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event***REMOVED******REMOVED***;
      ***REMOVED***;
      jQuery.event.special[fix] = {
        setup: function (***REMOVED*** {
          // Handle: regular nodes (via `this.ownerDocument`***REMOVED***, window
          // (via `this.document`***REMOVED*** & document (via `this`***REMOVED***.
          var doc = this.ownerDocument || this.document || this,
            attaches = dataPriv.access(doc, fix***REMOVED***;
          if (!attaches***REMOVED*** {
            doc.addEventListener(orig, handler, true***REMOVED***;
          ***REMOVED***
          dataPriv.access(doc, fix, (attaches || 0***REMOVED*** + 1***REMOVED***;
        ***REMOVED***,
        teardown: function (***REMOVED*** {
          var doc = this.ownerDocument || this.document || this,
            attaches = dataPriv.access(doc, fix***REMOVED*** - 1;
          if (!attaches***REMOVED*** {
            doc.removeEventListener(orig, handler, true***REMOVED***;
            dataPriv.remove(doc, fix***REMOVED***;
          ***REMOVED*** else {
            dataPriv.access(doc, fix, attaches***REMOVED***;
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***;
    ***REMOVED******REMOVED***;
  ***REMOVED***
  var location = window.location;
  var nonce = {
    guid: Date.now(***REMOVED***
  ***REMOVED***;
  var rquery = /\?/;

  // Cross-browser xml parsing
  jQuery.parseXML = function (data***REMOVED*** {
    var xml;
    if (!data || typeof data !== "string"***REMOVED*** {
      return null;
    ***REMOVED***

    // Support: IE 9 - 11 only
    // IE throws on parseFromString with invalid input.
    try {
      xml = new window.DOMParser(***REMOVED***.parseFromString(data, "text/xml"***REMOVED***;
    ***REMOVED*** catch (e***REMOVED*** {
      xml = undefined;
    ***REMOVED***
    if (!xml || xml.getElementsByTagName("parsererror"***REMOVED***.length***REMOVED*** {
      jQuery.error("Invalid XML: " + data***REMOVED***;
    ***REMOVED***
    return xml;
  ***REMOVED***;
  var rbracket = /\[\]$/,
    rCRLF = /\r?\n/g,
    rsubmitterTypes = /^(?:submit|button|image|reset|file***REMOVED***$/i,
    rsubmittable = /^(?:input|select|textarea|keygen***REMOVED***/i;
  function buildParams(prefix, obj, traditional, add***REMOVED*** {
    var name;
    if (Array.isArray(obj***REMOVED******REMOVED*** {
      // Serialize array item.
      jQuery.each(obj, function (i, v***REMOVED*** {
        if (traditional || rbracket.test(prefix***REMOVED******REMOVED*** {
          // Treat each array item as a scalar.
          add(prefix, v***REMOVED***;
        ***REMOVED*** else {
          // Item is non-scalar (array or object***REMOVED***, encode its numeric index.
          buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : ""***REMOVED*** + "]", v, traditional, add***REMOVED***;
        ***REMOVED***
      ***REMOVED******REMOVED***;
    ***REMOVED*** else if (!traditional && toType(obj***REMOVED*** === "object"***REMOVED*** {
      // Serialize object item.
      for (name in obj***REMOVED*** {
        buildParams(prefix + "[" + name + "]", obj[name], traditional, add***REMOVED***;
      ***REMOVED***
    ***REMOVED*** else {
      // Serialize scalar item.
      add(prefix, obj***REMOVED***;
    ***REMOVED***
  ***REMOVED***

  // Serialize an array of form elements or a set of
  // key/values into a query string
  jQuery.param = function (a, traditional***REMOVED*** {
    var prefix,
      s = [],
      add = function (key, valueOrFunction***REMOVED*** {
        // If value is a function, invoke it and use its return value
        var value = isFunction(valueOrFunction***REMOVED*** ? valueOrFunction(***REMOVED*** : valueOrFunction;
        s[s.length] = encodeURIComponent(key***REMOVED*** + "=" + encodeURIComponent(value == null ? "" : value***REMOVED***;
      ***REMOVED***;
    if (a == null***REMOVED*** {
      return "";
    ***REMOVED***

    // If an array was passed in, assume that it is an array of form elements.
    if (Array.isArray(a***REMOVED*** || a.jquery && !jQuery.isPlainObject(a***REMOVED******REMOVED*** {
      // Serialize the form elements
      jQuery.each(a, function (***REMOVED*** {
        add(this.name, this.value***REMOVED***;
      ***REMOVED******REMOVED***;
    ***REMOVED*** else {
      // If traditional, encode the "old" way (the way 1.3.2 or older
      // did it***REMOVED***, otherwise encode params recursively.
      for (prefix in a***REMOVED*** {
        buildParams(prefix, a[prefix], traditional, add***REMOVED***;
      ***REMOVED***
    ***REMOVED***

    // Return the resulting serialization
    return s.join("&"***REMOVED***;
  ***REMOVED***;
  jQuery.fn.extend({
    serialize: function (***REMOVED*** {
      return jQuery.param(this.serializeArray(***REMOVED******REMOVED***;
    ***REMOVED***,
    serializeArray: function (***REMOVED*** {
      return this.map(function (***REMOVED*** {
        // Can add propHook for "elements" to filter or add form elements
        var elements = jQuery.prop(this, "elements"***REMOVED***;
        return elements ? jQuery.makeArray(elements***REMOVED*** : this;
      ***REMOVED******REMOVED***.filter(function (***REMOVED*** {
        var type = this.type;

        // Use .is( ":disabled" ***REMOVED*** so that fieldset[disabled] works
        return this.name && !jQuery(this***REMOVED***.is(":disabled"***REMOVED*** && rsubmittable.test(this.nodeName***REMOVED*** && !rsubmitterTypes.test(type***REMOVED*** && (this.checked || !rcheckableType.test(type***REMOVED******REMOVED***;
      ***REMOVED******REMOVED***.map(function (_i, elem***REMOVED*** {
        var val = jQuery(this***REMOVED***.val(***REMOVED***;
        if (val == null***REMOVED*** {
          return null;
        ***REMOVED***
        if (Array.isArray(val***REMOVED******REMOVED*** {
          return jQuery.map(val, function (val***REMOVED*** {
            return {
              name: elem.name,
              value: val.replace(rCRLF, "\r\n"***REMOVED***
            ***REMOVED***;
          ***REMOVED******REMOVED***;
        ***REMOVED***
        return {
          name: elem.name,
          value: val.replace(rCRLF, "\r\n"***REMOVED***
        ***REMOVED***;
      ***REMOVED******REMOVED***.get(***REMOVED***;
    ***REMOVED***
  ***REMOVED******REMOVED***;
  var r20 = /%20/g,
    rhash = /#.*$/,
    rantiCache = /([?&]***REMOVED***_=[^&]*/,
    rheaders = /^(.*?***REMOVED***:[ \t]*([^\r\n]****REMOVED***$/mg,
    // #7653, #8125, #8152: local protocol detection
    rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget***REMOVED***:$/,
    rnoContent = /^(?:GET|HEAD***REMOVED***$/,
    rprotocol = /^\/\//,
    /* Prefilters
     * 1***REMOVED*** They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example***REMOVED***
     * 2***REMOVED*** These are called:
     *    - BEFORE asking for a transport
     *    - AFTER param serialization (s.data is a string if s.processData is true***REMOVED***
     * 3***REMOVED*** key is the dataType
     * 4***REMOVED*** the catchall symbol "*" can be used
     * 5***REMOVED*** execution will start with transport dataType and THEN continue down to "*" if needed
     */
    prefilters = {***REMOVED***,
    /* Transports bindings
     * 1***REMOVED*** key is the dataType
     * 2***REMOVED*** the catchall symbol "*" can be used
     * 3***REMOVED*** selection will start with transport dataType and THEN go to "*" if needed
     */
    transports = {***REMOVED***,
    // Avoid comment-prolog char sequence (#10098***REMOVED***; must appease lint and evade compression
    allTypes = "*/".concat("*"***REMOVED***,
    // Anchor tag for parsing the document origin
    originAnchor = document.createElement("a"***REMOVED***;
  originAnchor.href = location.href;

  // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
  function addToPrefiltersOrTransports(structure***REMOVED*** {
    // dataTypeExpression is optional and defaults to "*"
    return function (dataTypeExpression, func***REMOVED*** {
      if (typeof dataTypeExpression !== "string"***REMOVED*** {
        func = dataTypeExpression;
        dataTypeExpression = "*";
      ***REMOVED***
      var dataType,
        i = 0,
        dataTypes = dataTypeExpression.toLowerCase(***REMOVED***.match(rnothtmlwhite***REMOVED*** || [];
      if (isFunction(func***REMOVED******REMOVED*** {
        // For each dataType in the dataTypeExpression
        while (dataType = dataTypes[i++]***REMOVED*** {
          // Prepend if requested
          if (dataType[0] === "+"***REMOVED*** {
            dataType = dataType.slice(1***REMOVED*** || "*";
            (structure[dataType] = structure[dataType] || []***REMOVED***.unshift(func***REMOVED***;

            // Otherwise append
          ***REMOVED*** else {
            (structure[dataType] = structure[dataType] || []***REMOVED***.push(func***REMOVED***;
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***;
  ***REMOVED***

  // Base inspection function for prefilters and transports
  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR***REMOVED*** {
    var inspected = {***REMOVED***,
      seekingTransport = structure === transports;
    function inspect(dataType***REMOVED*** {
      var selected;
      inspected[dataType] = true;
      jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory***REMOVED*** {
        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR***REMOVED***;
        if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]***REMOVED*** {
          options.dataTypes.unshift(dataTypeOrTransport***REMOVED***;
          inspect(dataTypeOrTransport***REMOVED***;
          return false;
        ***REMOVED*** else if (seekingTransport***REMOVED*** {
          return !(selected = dataTypeOrTransport***REMOVED***;
        ***REMOVED***
      ***REMOVED******REMOVED***;
      return selected;
    ***REMOVED***
    return inspect(options.dataTypes[0]***REMOVED*** || !inspected["*"] && inspect("*"***REMOVED***;
  ***REMOVED***

  // A special extend for ajax options
  // that takes "flat" options (not to be deep extended***REMOVED***
  // Fixes #9887
  function ajaxExtend(target, src***REMOVED*** {
    var key,
      deep,
      flatOptions = jQuery.ajaxSettings.flatOptions || {***REMOVED***;
    for (key in src***REMOVED*** {
      if (src[key] !== undefined***REMOVED*** {
        (flatOptions[key] ? target : deep || (deep = {***REMOVED******REMOVED******REMOVED***[key] = src[key];
      ***REMOVED***
    ***REMOVED***
    if (deep***REMOVED*** {
      jQuery.extend(true, target, deep***REMOVED***;
    ***REMOVED***
    return target;
  ***REMOVED***

  /* Handles responses to an ajax request:
   * - finds the right dataType (mediates between content-type and expected dataType***REMOVED***
   * - returns the corresponding response
   */
  function ajaxHandleResponses(s, jqXHR, responses***REMOVED*** {
    var ct,
      type,
      finalDataType,
      firstDataType,
      contents = s.contents,
      dataTypes = s.dataTypes;

    // Remove auto dataType and get content-type in the process
    while (dataTypes[0] === "*"***REMOVED*** {
      dataTypes.shift(***REMOVED***;
      if (ct === undefined***REMOVED*** {
        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type"***REMOVED***;
      ***REMOVED***
    ***REMOVED***

    // Check if we're dealing with a known content-type
    if (ct***REMOVED*** {
      for (type in contents***REMOVED*** {
        if (contents[type] && contents[type].test(ct***REMOVED******REMOVED*** {
          dataTypes.unshift(type***REMOVED***;
          break;
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***

    // Check to see if we have a response for the expected dataType
    if (dataTypes[0] in responses***REMOVED*** {
      finalDataType = dataTypes[0];
    ***REMOVED*** else {
      // Try convertible dataTypes
      for (type in responses***REMOVED*** {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]***REMOVED*** {
          finalDataType = type;
          break;
        ***REMOVED***
        if (!firstDataType***REMOVED*** {
          firstDataType = type;
        ***REMOVED***
      ***REMOVED***

      // Or just use first one
      finalDataType = finalDataType || firstDataType;
    ***REMOVED***

    // If we found a dataType
    // We add the dataType to the list if needed
    // and return the corresponding response
    if (finalDataType***REMOVED*** {
      if (finalDataType !== dataTypes[0]***REMOVED*** {
        dataTypes.unshift(finalDataType***REMOVED***;
      ***REMOVED***
      return responses[finalDataType];
    ***REMOVED***
  ***REMOVED***

  /* Chain conversions given the request and the original response
   * Also sets the responseXXX fields on the jqXHR instance
   */
  function ajaxConvert(s, response, jqXHR, isSuccess***REMOVED*** {
    var conv2,
      current,
      conv,
      tmp,
      prev,
      converters = {***REMOVED***,
      // Work with a copy of dataTypes in case we need to modify it for conversion
      dataTypes = s.dataTypes.slice(***REMOVED***;

    // Create converters map with lowercased keys
    if (dataTypes[1]***REMOVED*** {
      for (conv in s.converters***REMOVED*** {
        converters[conv.toLowerCase(***REMOVED***] = s.converters[conv];
      ***REMOVED***
    ***REMOVED***
    current = dataTypes.shift(***REMOVED***;

    // Convert to each sequential dataType
    while (current***REMOVED*** {
      if (s.responseFields[current]***REMOVED*** {
        jqXHR[s.responseFields[current]] = response;
      ***REMOVED***

      // Apply the dataFilter if provided
      if (!prev && isSuccess && s.dataFilter***REMOVED*** {
        response = s.dataFilter(response, s.dataType***REMOVED***;
      ***REMOVED***
      prev = current;
      current = dataTypes.shift(***REMOVED***;
      if (current***REMOVED*** {
        // There's only work to do if current dataType is non-auto
        if (current === "*"***REMOVED*** {
          current = prev;

          // Convert response if prev dataType is non-auto and differs from current
        ***REMOVED*** else if (prev !== "*" && prev !== current***REMOVED*** {
          // Seek a direct converter
          conv = converters[prev + " " + current] || converters["* " + current];

          // If none found, seek a pair
          if (!conv***REMOVED*** {
            for (conv2 in converters***REMOVED*** {
              // If conv2 outputs current
              tmp = conv2.split(" "***REMOVED***;
              if (tmp[1] === current***REMOVED*** {
                // If prev can be converted to accepted input
                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                if (conv***REMOVED*** {
                  // Condense equivalence converters
                  if (conv === true***REMOVED*** {
                    conv = converters[conv2];

                    // Otherwise, insert the intermediate dataType
                  ***REMOVED*** else if (converters[conv2] !== true***REMOVED*** {
                    current = tmp[0];
                    dataTypes.unshift(tmp[1]***REMOVED***;
                  ***REMOVED***
                  break;
                ***REMOVED***
              ***REMOVED***
            ***REMOVED***
          ***REMOVED***

          // Apply converter (if not an equivalence***REMOVED***
          if (conv !== true***REMOVED*** {
            // Unless errors are allowed to bubble, catch and return them
            if (conv && s.throws***REMOVED*** {
              response = conv(response***REMOVED***;
            ***REMOVED*** else {
              try {
                response = conv(response***REMOVED***;
              ***REMOVED*** catch (e***REMOVED*** {
                return {
                  state: "parsererror",
                  error: conv ? e : "No conversion from " + prev + " to " + current
                ***REMOVED***;
              ***REMOVED***
            ***REMOVED***
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    return {
      state: "success",
      data: response
    ***REMOVED***;
  ***REMOVED***
  jQuery.extend({
    // Counter for holding the number of active queries
    active: 0,
    // Last-Modified header cache for next request
    lastModified: {***REMOVED***,
    etag: {***REMOVED***,
    ajaxSettings: {
      url: location.href,
      type: "GET",
      isLocal: rlocalProtocol.test(location.protocol***REMOVED***,
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      /*
      timeout: 0,
      data: null,
      dataType: null,
      username: null,
      password: null,
      cache: null,
      throws: false,
      traditional: false,
      headers: {***REMOVED***,
      */

      accepts: {
        "*": allTypes,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      ***REMOVED***,
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      ***REMOVED***,
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      ***REMOVED***,
      // Data converters
      // Keys separate source (or catchall "*"***REMOVED*** and destination types with a single space
      converters: {
        // Convert anything to text
        "* text": String,
        // Text to html (true = no transformation***REMOVED***
        "text html": true,
        // Evaluate text as a json expression
        "text json": JSON.parse,
        // Parse text as xml
        "text xml": jQuery.parseXML
      ***REMOVED***,
      // For options that shouldn't be deep extended:
      // you can add your own custom options here if
      // and when you create one that shouldn't be
      // deep extended (see ajaxExtend***REMOVED***
      flatOptions: {
        url: true,
        context: true
      ***REMOVED***
    ***REMOVED***,
    // Creates a full fledged settings object into target
    // with both ajaxSettings and settings fields.
    // If target is omitted, writes into ajaxSettings.
    ajaxSetup: function (target, settings***REMOVED*** {
      return settings ?
      // Building a settings object
      ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings***REMOVED***, settings***REMOVED*** :
      // Extending ajaxSettings
      ajaxExtend(jQuery.ajaxSettings, target***REMOVED***;
    ***REMOVED***,
    ajaxPrefilter: addToPrefiltersOrTransports(prefilters***REMOVED***,
    ajaxTransport: addToPrefiltersOrTransports(transports***REMOVED***,
    // Main method
    ajax: function (url, options***REMOVED*** {
      // If url is an object, simulate pre-1.5 signature
      if (typeof url === "object"***REMOVED*** {
        options = url;
        url = undefined;
      ***REMOVED***

      // Force options to be an object
      options = options || {***REMOVED***;
      var transport,
        // URL without anti-cache param
        cacheURL,
        // Response headers
        responseHeadersString,
        responseHeaders,
        // timeout handle
        timeoutTimer,
        // Url cleanup var
        urlAnchor,
        // Request state (becomes false upon send and true upon completion***REMOVED***
        completed,
        // To know if global events are to be dispatched
        fireGlobals,
        // Loop variable
        i,
        // uncached part of the url
        uncached,
        // Create the final options object
        s = jQuery.ajaxSetup({***REMOVED***, options***REMOVED***,
        // Callbacks context
        callbackContext = s.context || s,
        // Context for global events is callbackContext if it is a DOM node or jQuery collection
        globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery***REMOVED*** ? jQuery(callbackContext***REMOVED*** : jQuery.event,
        // Deferreds
        deferred = jQuery.Deferred(***REMOVED***,
        completeDeferred = jQuery.Callbacks("once memory"***REMOVED***,
        // Status-dependent callbacks
        statusCode = s.statusCode || {***REMOVED***,
        // Headers (they are sent all at once***REMOVED***
        requestHeaders = {***REMOVED***,
        requestHeadersNames = {***REMOVED***,
        // Default abort message
        strAbort = "canceled",
        // Fake xhr
        jqXHR = {
          readyState: 0,
          // Builds headers hashtable if needed
          getResponseHeader: function (key***REMOVED*** {
            var match;
            if (completed***REMOVED*** {
              if (!responseHeaders***REMOVED*** {
                responseHeaders = {***REMOVED***;
                while (match = rheaders.exec(responseHeadersString***REMOVED******REMOVED*** {
                  responseHeaders[match[1].toLowerCase(***REMOVED*** + " "] = (responseHeaders[match[1].toLowerCase(***REMOVED*** + " "] || []***REMOVED***.concat(match[2]***REMOVED***;
                ***REMOVED***
              ***REMOVED***
              match = responseHeaders[key.toLowerCase(***REMOVED*** + " "];
            ***REMOVED***
            return match == null ? null : match.join(", "***REMOVED***;
          ***REMOVED***,
          // Raw string
          getAllResponseHeaders: function (***REMOVED*** {
            return completed ? responseHeadersString : null;
          ***REMOVED***,
          // Caches the header
          setRequestHeader: function (name, value***REMOVED*** {
            if (completed == null***REMOVED*** {
              name = requestHeadersNames[name.toLowerCase(***REMOVED***] = requestHeadersNames[name.toLowerCase(***REMOVED***] || name;
              requestHeaders[name] = value;
            ***REMOVED***
            return this;
          ***REMOVED***,
          // Overrides response content-type header
          overrideMimeType: function (type***REMOVED*** {
            if (completed == null***REMOVED*** {
              s.mimeType = type;
            ***REMOVED***
            return this;
          ***REMOVED***,
          // Status-dependent callbacks
          statusCode: function (map***REMOVED*** {
            var code;
            if (map***REMOVED*** {
              if (completed***REMOVED*** {
                // Execute the appropriate callbacks
                jqXHR.always(map[jqXHR.status]***REMOVED***;
              ***REMOVED*** else {
                // Lazy-add the new callbacks in a way that preserves old ones
                for (code in map***REMOVED*** {
                  statusCode[code] = [statusCode[code], map[code]];
                ***REMOVED***
              ***REMOVED***
            ***REMOVED***
            return this;
          ***REMOVED***,
          // Cancel the request
          abort: function (statusText***REMOVED*** {
            var finalText = statusText || strAbort;
            if (transport***REMOVED*** {
              transport.abort(finalText***REMOVED***;
            ***REMOVED***
            done(0, finalText***REMOVED***;
            return this;
          ***REMOVED***
        ***REMOVED***;

      // Attach deferreds
      deferred.promise(jqXHR***REMOVED***;

      // Add protocol if not provided (prefilters might expect it***REMOVED***
      // Handle falsy url in the settings object (#10093: consistency with old signature***REMOVED***
      // We also use the url parameter if available
      s.url = ((url || s.url || location.href***REMOVED*** + ""***REMOVED***.replace(rprotocol, location.protocol + "//"***REMOVED***;

      // Alias method option to type as per ticket #12004
      s.type = options.method || options.type || s.method || s.type;

      // Extract dataTypes list
      s.dataTypes = (s.dataType || "*"***REMOVED***.toLowerCase(***REMOVED***.match(rnothtmlwhite***REMOVED*** || [""];

      // A cross-domain request is in order when the origin doesn't match the current origin.
      if (s.crossDomain == null***REMOVED*** {
        urlAnchor = document.createElement("a"***REMOVED***;

        // Support: IE <=8 - 11, Edge 12 - 15
        // IE throws exception on accessing the href property if url is malformed,
        // e.g. http://example.com:80x/
        try {
          urlAnchor.href = s.url;

          // Support: IE <=8 - 11 only
          // Anchor's host property isn't correctly set when s.url is relative
          urlAnchor.href = urlAnchor.href;
          s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
        ***REMOVED*** catch (e***REMOVED*** {
          // If there is an error parsing the URL, assume it is crossDomain,
          // it can be rejected by the transport if it is invalid
          s.crossDomain = true;
        ***REMOVED***
      ***REMOVED***

      // Convert data if not already a string
      if (s.data && s.processData && typeof s.data !== "string"***REMOVED*** {
        s.data = jQuery.param(s.data, s.traditional***REMOVED***;
      ***REMOVED***

      // Apply prefilters
      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR***REMOVED***;

      // If request was aborted inside a prefilter, stop there
      if (completed***REMOVED*** {
        return jqXHR;
      ***REMOVED***

      // We can fire global events as of now if asked to
      // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118***REMOVED***
      fireGlobals = jQuery.event && s.global;

      // Watch for a new set of requests
      if (fireGlobals && jQuery.active++ === 0***REMOVED*** {
        jQuery.event.trigger("ajaxStart"***REMOVED***;
      ***REMOVED***

      // Uppercase the type
      s.type = s.type.toUpperCase(***REMOVED***;

      // Determine if request has content
      s.hasContent = !rnoContent.test(s.type***REMOVED***;

      // Save the URL in case we're toying with the If-Modified-Since
      // and/or If-None-Match header later on
      // Remove hash to simplify url manipulation
      cacheURL = s.url.replace(rhash, ""***REMOVED***;

      // More options handling for requests with no content
      if (!s.hasContent***REMOVED*** {
        // Remember the hash so we can put it back
        uncached = s.url.slice(cacheURL.length***REMOVED***;

        // If data is available and should be processed, append data to url
        if (s.data && (s.processData || typeof s.data === "string"***REMOVED******REMOVED*** {
          cacheURL += (rquery.test(cacheURL***REMOVED*** ? "&" : "?"***REMOVED*** + s.data;

          // #9682: remove data so that it's not used in an eventual retry
          delete s.data;
        ***REMOVED***

        // Add or update anti-cache param if needed
        if (s.cache === false***REMOVED*** {
          cacheURL = cacheURL.replace(rantiCache, "$1"***REMOVED***;
          uncached = (rquery.test(cacheURL***REMOVED*** ? "&" : "?"***REMOVED*** + "_=" + nonce.guid++ + uncached;
        ***REMOVED***

        // Put hash and anti-cache on the URL that will be requested (gh-1732***REMOVED***
        s.url = cacheURL + uncached;

        // Change '%20' to '+' if this is encoded form body content (gh-2658***REMOVED***
      ***REMOVED*** else if (s.data && s.processData && (s.contentType || ""***REMOVED***.indexOf("application/x-www-form-urlencoded"***REMOVED*** === 0***REMOVED*** {
        s.data = s.data.replace(r20, "+"***REMOVED***;
      ***REMOVED***

      // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
      if (s.ifModified***REMOVED*** {
        if (jQuery.lastModified[cacheURL]***REMOVED*** {
          jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]***REMOVED***;
        ***REMOVED***
        if (jQuery.etag[cacheURL]***REMOVED*** {
          jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]***REMOVED***;
        ***REMOVED***
      ***REMOVED***

      // Set the correct header, if data is being sent
      if (s.data && s.hasContent && s.contentType !== false || options.contentType***REMOVED*** {
        jqXHR.setRequestHeader("Content-Type", s.contentType***REMOVED***;
      ***REMOVED***

      // Set the Accepts header for the server, depending on the dataType
      jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : ""***REMOVED*** : s.accepts["*"]***REMOVED***;

      // Check for headers option
      for (i in s.headers***REMOVED*** {
        jqXHR.setRequestHeader(i, s.headers[i]***REMOVED***;
      ***REMOVED***

      // Allow custom headers/mimetypes and early abort
      if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s***REMOVED*** === false || completed***REMOVED******REMOVED*** {
        // Abort if not done already and return
        return jqXHR.abort(***REMOVED***;
      ***REMOVED***

      // Aborting is no longer a cancellation
      strAbort = "abort";

      // Install callbacks on deferreds
      completeDeferred.add(s.complete***REMOVED***;
      jqXHR.done(s.success***REMOVED***;
      jqXHR.fail(s.error***REMOVED***;

      // Get transport
      transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR***REMOVED***;

      // If no transport, we auto-abort
      if (!transport***REMOVED*** {
        done(-1, "No Transport"***REMOVED***;
      ***REMOVED*** else {
        jqXHR.readyState = 1;

        // Send global event
        if (fireGlobals***REMOVED*** {
          globalEventContext.trigger("ajaxSend", [jqXHR, s]***REMOVED***;
        ***REMOVED***

        // If request was aborted inside ajaxSend, stop there
        if (completed***REMOVED*** {
          return jqXHR;
        ***REMOVED***

        // Timeout
        if (s.async && s.timeout > 0***REMOVED*** {
          timeoutTimer = window.setTimeout(function (***REMOVED*** {
            jqXHR.abort("timeout"***REMOVED***;
          ***REMOVED***, s.timeout***REMOVED***;
        ***REMOVED***
        try {
          completed = false;
          transport.send(requestHeaders, done***REMOVED***;
        ***REMOVED*** catch (e***REMOVED*** {
          // Rethrow post-completion exceptions
          if (completed***REMOVED*** {
            throw e;
          ***REMOVED***

          // Propagate others as results
          done(-1, e***REMOVED***;
        ***REMOVED***
      ***REMOVED***

      // Callback for when everything is done
      function done(status, nativeStatusText, responses, headers***REMOVED*** {
        var isSuccess,
          success,
          error,
          response,
          modified,
          statusText = nativeStatusText;

        // Ignore repeat invocations
        if (completed***REMOVED*** {
          return;
        ***REMOVED***
        completed = true;

        // Clear timeout if it exists
        if (timeoutTimer***REMOVED*** {
          window.clearTimeout(timeoutTimer***REMOVED***;
        ***REMOVED***

        // Dereference transport for early garbage collection
        // (no matter how long the jqXHR object will be used***REMOVED***
        transport = undefined;

        // Cache response headers
        responseHeadersString = headers || "";

        // Set readyState
        jqXHR.readyState = status > 0 ? 4 : 0;

        // Determine if successful
        isSuccess = status >= 200 && status < 300 || status === 304;

        // Get response data
        if (responses***REMOVED*** {
          response = ajaxHandleResponses(s, jqXHR, responses***REMOVED***;
        ***REMOVED***

        // Use a noop converter for missing script
        if (!isSuccess && jQuery.inArray("script", s.dataTypes***REMOVED*** > -1***REMOVED*** {
          s.converters["text script"] = function (***REMOVED*** {***REMOVED***;
        ***REMOVED***

        // Convert no matter what (that way responseXXX fields are always set***REMOVED***
        response = ajaxConvert(s, response, jqXHR, isSuccess***REMOVED***;

        // If successful, handle type chaining
        if (isSuccess***REMOVED*** {
          // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
          if (s.ifModified***REMOVED*** {
            modified = jqXHR.getResponseHeader("Last-Modified"***REMOVED***;
            if (modified***REMOVED*** {
              jQuery.lastModified[cacheURL] = modified;
            ***REMOVED***
            modified = jqXHR.getResponseHeader("etag"***REMOVED***;
            if (modified***REMOVED*** {
              jQuery.etag[cacheURL] = modified;
            ***REMOVED***
          ***REMOVED***

          // if no content
          if (status === 204 || s.type === "HEAD"***REMOVED*** {
            statusText = "nocontent";

            // if not modified
          ***REMOVED*** else if (status === 304***REMOVED*** {
            statusText = "notmodified";

            // If we have data, let's convert it
          ***REMOVED*** else {
            statusText = response.state;
            success = response.data;
            error = response.error;
            isSuccess = !error;
          ***REMOVED***
        ***REMOVED*** else {
          // Extract error from statusText and normalize for non-aborts
          error = statusText;
          if (status || !statusText***REMOVED*** {
            statusText = "error";
            if (status < 0***REMOVED*** {
              status = 0;
            ***REMOVED***
          ***REMOVED***
        ***REMOVED***

        // Set data for the fake xhr object
        jqXHR.status = status;
        jqXHR.statusText = (nativeStatusText || statusText***REMOVED*** + "";

        // Success/Error
        if (isSuccess***REMOVED*** {
          deferred.resolveWith(callbackContext, [success, statusText, jqXHR]***REMOVED***;
        ***REMOVED*** else {
          deferred.rejectWith(callbackContext, [jqXHR, statusText, error]***REMOVED***;
        ***REMOVED***

        // Status-dependent callbacks
        jqXHR.statusCode(statusCode***REMOVED***;
        statusCode = undefined;
        if (fireGlobals***REMOVED*** {
          globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]***REMOVED***;
        ***REMOVED***

        // Complete
        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]***REMOVED***;
        if (fireGlobals***REMOVED*** {
          globalEventContext.trigger("ajaxComplete", [jqXHR, s]***REMOVED***;

          // Handle the global AJAX counter
          if (! --jQuery.active***REMOVED*** {
            jQuery.event.trigger("ajaxStop"***REMOVED***;
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***
      return jqXHR;
    ***REMOVED***,
    getJSON: function (url, data, callback***REMOVED*** {
      return jQuery.get(url, data, callback, "json"***REMOVED***;
    ***REMOVED***,
    getScript: function (url, callback***REMOVED*** {
      return jQuery.get(url, undefined, callback, "script"***REMOVED***;
    ***REMOVED***
  ***REMOVED******REMOVED***;
  jQuery.each(["get", "post"], function (_i, method***REMOVED*** {
    jQuery[method] = function (url, data, callback, type***REMOVED*** {
      // Shift arguments if data argument was omitted
      if (isFunction(data***REMOVED******REMOVED*** {
        type = type || callback;
        callback = data;
        data = undefined;
      ***REMOVED***

      // The url can be an options object (which then must have .url***REMOVED***
      return jQuery.ajax(jQuery.extend({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
      ***REMOVED***, jQuery.isPlainObject(url***REMOVED*** && url***REMOVED******REMOVED***;
    ***REMOVED***;
  ***REMOVED******REMOVED***;
  jQuery.ajaxPrefilter(function (s***REMOVED*** {
    var i;
    for (i in s.headers***REMOVED*** {
      if (i.toLowerCase(***REMOVED*** === "content-type"***REMOVED*** {
        s.contentType = s.headers[i] || "";
      ***REMOVED***
    ***REMOVED***
  ***REMOVED******REMOVED***;
  jQuery._evalUrl = function (url, options, doc***REMOVED*** {
    return jQuery.ajax({
      url: url,
      // Make this explicit, since user can override this through ajaxSetup (#11264***REMOVED***
      type: "GET",
      dataType: "script",
      cache: true,
      async: false,
      global: false,
      // Only evaluate the response if it is successful (gh-4126***REMOVED***
      // dataFilter is not invoked for failure responses, so using it instead
      // of the default converter is kludgy but it works.
      converters: {
        "text script": function (***REMOVED*** {***REMOVED***
      ***REMOVED***,
      dataFilter: function (response***REMOVED*** {
        jQuery.globalEval(response, options, doc***REMOVED***;
      ***REMOVED***
    ***REMOVED******REMOVED***;
  ***REMOVED***;
  jQuery.fn.extend({
    wrapAll: function (html***REMOVED*** {
      var wrap;
      if (this[0]***REMOVED*** {
        if (isFunction(html***REMOVED******REMOVED*** {
          html = html.call(this[0]***REMOVED***;
        ***REMOVED***

        // The elements to wrap the target around
        wrap = jQuery(html, this[0].ownerDocument***REMOVED***.eq(0***REMOVED***.clone(true***REMOVED***;
        if (this[0].parentNode***REMOVED*** {
          wrap.insertBefore(this[0]***REMOVED***;
        ***REMOVED***
        wrap.map(function (***REMOVED*** {
          var elem = this;
          while (elem.firstElementChild***REMOVED*** {
            elem = elem.firstElementChild;
          ***REMOVED***
          return elem;
        ***REMOVED******REMOVED***.append(this***REMOVED***;
      ***REMOVED***
      return this;
    ***REMOVED***,
    wrapInner: function (html***REMOVED*** {
      if (isFunction(html***REMOVED******REMOVED*** {
        return this.each(function (i***REMOVED*** {
          jQuery(this***REMOVED***.wrapInner(html.call(this, i***REMOVED******REMOVED***;
        ***REMOVED******REMOVED***;
      ***REMOVED***
      return this.each(function (***REMOVED*** {
        var self = jQuery(this***REMOVED***,
          contents = self.contents(***REMOVED***;
        if (contents.length***REMOVED*** {
          contents.wrapAll(html***REMOVED***;
        ***REMOVED*** else {
          self.append(html***REMOVED***;
        ***REMOVED***
      ***REMOVED******REMOVED***;
    ***REMOVED***,
    wrap: function (html***REMOVED*** {
      var htmlIsFunction = isFunction(html***REMOVED***;
      return this.each(function (i***REMOVED*** {
        jQuery(this***REMOVED***.wrapAll(htmlIsFunction ? html.call(this, i***REMOVED*** : html***REMOVED***;
      ***REMOVED******REMOVED***;
    ***REMOVED***,
    unwrap: function (selector***REMOVED*** {
      this.parent(selector***REMOVED***.not("body"***REMOVED***.each(function (***REMOVED*** {
        jQuery(this***REMOVED***.replaceWith(this.childNodes***REMOVED***;
      ***REMOVED******REMOVED***;
      return this;
    ***REMOVED***
  ***REMOVED******REMOVED***;
  jQuery.expr.pseudos.hidden = function (elem***REMOVED*** {
    return !jQuery.expr.pseudos.visible(elem***REMOVED***;
  ***REMOVED***;
  jQuery.expr.pseudos.visible = function (elem***REMOVED*** {
    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects(***REMOVED***.length***REMOVED***;
  ***REMOVED***;
  jQuery.ajaxSettings.xhr = function (***REMOVED*** {
    try {
      return new window.XMLHttpRequest(***REMOVED***;
    ***REMOVED*** catch (e***REMOVED*** {***REMOVED***
  ***REMOVED***;
  var xhrSuccessStatus = {
      // File protocol always yields status code 0, assume 200
      0: 200,
      // Support: IE <=9 only
      // #1450: sometimes IE returns 1223 when it should be 204
      1223: 204
    ***REMOVED***,
    xhrSupported = jQuery.ajaxSettings.xhr(***REMOVED***;
  support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
  support.ajax = xhrSupported = !!xhrSupported;
  jQuery.ajaxTransport(function (options***REMOVED*** {
    var callback, errorCallback;

    // Cross domain only allowed if supported through XMLHttpRequest
    if (support.cors || xhrSupported && !options.crossDomain***REMOVED*** {
      return {
        send: function (headers, complete***REMOVED*** {
          var i,
            xhr = options.xhr(***REMOVED***;
          xhr.open(options.type, options.url, options.async, options.username, options.password***REMOVED***;

          // Apply custom fields if provided
          if (options.xhrFields***REMOVED*** {
            for (i in options.xhrFields***REMOVED*** {
              xhr[i] = options.xhrFields[i];
            ***REMOVED***
          ***REMOVED***

          // Override mime type if needed
          if (options.mimeType && xhr.overrideMimeType***REMOVED*** {
            xhr.overrideMimeType(options.mimeType***REMOVED***;
          ***REMOVED***

          // X-Requested-With header
          // For cross-domain requests, seeing as conditions for a preflight are
          // akin to a jigsaw puzzle, we simply never set it to be sure.
          // (it can always be set on a per-request basis or even using ajaxSetup***REMOVED***
          // For same-domain requests, won't change header if already provided.
          if (!options.crossDomain && !headers["X-Requested-With"]***REMOVED*** {
            headers["X-Requested-With"] = "XMLHttpRequest";
          ***REMOVED***

          // Set headers
          for (i in headers***REMOVED*** {
            xhr.setRequestHeader(i, headers[i]***REMOVED***;
          ***REMOVED***

          // Callback
          callback = function (type***REMOVED*** {
            return function (***REMOVED*** {
              if (callback***REMOVED*** {
                callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                if (type === "abort"***REMOVED*** {
                  xhr.abort(***REMOVED***;
                ***REMOVED*** else if (type === "error"***REMOVED*** {
                  // Support: IE <=9 only
                  // On a manual native abort, IE9 throws
                  // errors on any property access that is not readyState
                  if (typeof xhr.status !== "number"***REMOVED*** {
                    complete(0, "error"***REMOVED***;
                  ***REMOVED*** else {
                    complete(
                    // File: protocol always yields status 0; see #8605, #14207
                    xhr.status, xhr.statusText***REMOVED***;
                  ***REMOVED***
                ***REMOVED*** else {
                  complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText,
                  // Support: IE <=9 only
                  // IE9 has no XHR2 but throws on binary (trac-11426***REMOVED***
                  // For XHR2 non-text, let the caller handle it (gh-2498***REMOVED***
                  (xhr.responseType || "text"***REMOVED*** !== "text" || typeof xhr.responseText !== "string" ? {
                    binary: xhr.response
                  ***REMOVED*** : {
                    text: xhr.responseText
                  ***REMOVED***, xhr.getAllResponseHeaders(***REMOVED******REMOVED***;
                ***REMOVED***
              ***REMOVED***
            ***REMOVED***;
          ***REMOVED***;

          // Listen to events
          xhr.onload = callback(***REMOVED***;
          errorCallback = xhr.onerror = xhr.ontimeout = callback("error"***REMOVED***;

          // Support: IE 9 only
          // Use onreadystatechange to replace onabort
          // to handle uncaught aborts
          if (xhr.onabort !== undefined***REMOVED*** {
            xhr.onabort = errorCallback;
          ***REMOVED*** else {
            xhr.onreadystatechange = function (***REMOVED*** {
              // Check readyState before timeout as it changes
              if (xhr.readyState === 4***REMOVED*** {
                // Allow onerror to be called first,
                // but that will not handle a native abort
                // Also, save errorCallback to a variable
                // as xhr.onerror cannot be accessed
                window.setTimeout(function (***REMOVED*** {
                  if (callback***REMOVED*** {
                    errorCallback(***REMOVED***;
                  ***REMOVED***
                ***REMOVED******REMOVED***;
              ***REMOVED***
            ***REMOVED***;
          ***REMOVED***

          // Create the abort callback
          callback = callback("abort"***REMOVED***;
          try {
            // Do send the request (this may raise an exception***REMOVED***
            xhr.send(options.hasContent && options.data || null***REMOVED***;
          ***REMOVED*** catch (e***REMOVED*** {
            // #14683: Only rethrow if this hasn't been notified as an error yet
            if (callback***REMOVED*** {
              throw e;
            ***REMOVED***
          ***REMOVED***
        ***REMOVED***,
        abort: function (***REMOVED*** {
          if (callback***REMOVED*** {
            callback(***REMOVED***;
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***;
    ***REMOVED***
  ***REMOVED******REMOVED***;

  // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432***REMOVED***
  jQuery.ajaxPrefilter(function (s***REMOVED*** {
    if (s.crossDomain***REMOVED*** {
      s.contents.script = false;
    ***REMOVED***
  ***REMOVED******REMOVED***;

  // Install script dataType
  jQuery.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
    ***REMOVED***,
    contents: {
      script: /\b(?:java|ecma***REMOVED***script\b/
    ***REMOVED***,
    converters: {
      "text script": function (text***REMOVED*** {
        jQuery.globalEval(text***REMOVED***;
        return text;
      ***REMOVED***
    ***REMOVED***
  ***REMOVED******REMOVED***;

  // Handle cache's special case and crossDomain
  jQuery.ajaxPrefilter("script", function (s***REMOVED*** {
    if (s.cache === undefined***REMOVED*** {
      s.cache = false;
    ***REMOVED***
    if (s.crossDomain***REMOVED*** {
      s.type = "GET";
    ***REMOVED***
  ***REMOVED******REMOVED***;

  // Bind script tag hack transport
  jQuery.ajaxTransport("script", function (s***REMOVED*** {
    // This transport only deals with cross domain or forced-by-attrs requests
    if (s.crossDomain || s.scriptAttrs***REMOVED*** {
      var script, callback;
      return {
        send: function (_, complete***REMOVED*** {
          script = jQuery("<script>"***REMOVED***.attr(s.scriptAttrs || {***REMOVED******REMOVED***.prop({
            charset: s.scriptCharset,
            src: s.url
          ***REMOVED******REMOVED***.on("load error", callback = function (evt***REMOVED*** {
            script.remove(***REMOVED***;
            callback = null;
            if (evt***REMOVED*** {
              complete(evt.type === "error" ? 404 : 200, evt.type***REMOVED***;
            ***REMOVED***
          ***REMOVED******REMOVED***;

          // Use native DOM manipulation to avoid our domManip AJAX trickery
          document.head.appendChild(script[0]***REMOVED***;
        ***REMOVED***,
        abort: function (***REMOVED*** {
          if (callback***REMOVED*** {
            callback(***REMOVED***;
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***;
    ***REMOVED***
  ***REMOVED******REMOVED***;
  var oldCallbacks = [],
    rjsonp = /(=***REMOVED***\?(?=&|$***REMOVED***|\?\?/;

  // Default jsonp settings
  jQuery.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function (***REMOVED*** {
      var callback = oldCallbacks.pop(***REMOVED*** || jQuery.expando + "_" + nonce.guid++;
      this[callback] = true;
      return callback;
    ***REMOVED***
  ***REMOVED******REMOVED***;

  // Detect, normalize options and install callbacks for jsonp requests
  jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR***REMOVED*** {
    var callbackName,
      overwritten,
      responseContainer,
      jsonProp = s.jsonp !== false && (rjsonp.test(s.url***REMOVED*** ? "url" : typeof s.data === "string" && (s.contentType || ""***REMOVED***.indexOf("application/x-www-form-urlencoded"***REMOVED*** === 0 && rjsonp.test(s.data***REMOVED*** && "data"***REMOVED***;

    // Handle iff the expected data type is "jsonp" or we have a parameter to set
    if (jsonProp || s.dataTypes[0] === "jsonp"***REMOVED*** {
      // Get callback name, remembering preexisting value associated with it
      callbackName = s.jsonpCallback = isFunction(s.jsonpCallback***REMOVED*** ? s.jsonpCallback(***REMOVED*** : s.jsonpCallback;

      // Insert callback into url or form data
      if (jsonProp***REMOVED*** {
        s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName***REMOVED***;
      ***REMOVED*** else if (s.jsonp !== false***REMOVED*** {
        s.url += (rquery.test(s.url***REMOVED*** ? "&" : "?"***REMOVED*** + s.jsonp + "=" + callbackName;
      ***REMOVED***

      // Use data converter to retrieve json after script execution
      s.converters["script json"] = function (***REMOVED*** {
        if (!responseContainer***REMOVED*** {
          jQuery.error(callbackName + " was not called"***REMOVED***;
        ***REMOVED***
        return responseContainer[0];
      ***REMOVED***;

      // Force json dataType
      s.dataTypes[0] = "json";

      // Install callback
      overwritten = window[callbackName];
      window[callbackName] = function (***REMOVED*** {
        responseContainer = arguments;
      ***REMOVED***;

      // Clean-up function (fires after converters***REMOVED***
      jqXHR.always(function (***REMOVED*** {
        // If previous value didn't exist - remove it
        if (overwritten === undefined***REMOVED*** {
          jQuery(window***REMOVED***.removeProp(callbackName***REMOVED***;

          // Otherwise restore preexisting value
        ***REMOVED*** else {
          window[callbackName] = overwritten;
        ***REMOVED***

        // Save back as free
        if (s[callbackName]***REMOVED*** {
          // Make sure that re-using the options doesn't screw things around
          s.jsonpCallback = originalSettings.jsonpCallback;

          // Save the callback name for future use
          oldCallbacks.push(callbackName***REMOVED***;
        ***REMOVED***

        // Call if it was a function and we have a response
        if (responseContainer && isFunction(overwritten***REMOVED******REMOVED*** {
          overwritten(responseContainer[0]***REMOVED***;
        ***REMOVED***
        responseContainer = overwritten = undefined;
      ***REMOVED******REMOVED***;

      // Delegate to script
      return "script";
    ***REMOVED***
  ***REMOVED******REMOVED***;

  // Support: Safari 8 only
  // In Safari 8 documents created via document.implementation.createHTMLDocument
  // collapse sibling forms: the second one becomes a child of the first one.
  // Because of that, this security measure has to be disabled in Safari 8.
  // https://bugs.webkit.org/show_bug.cgi?id=137337
  support.createHTMLDocument = function (***REMOVED*** {
    var body = document.implementation.createHTMLDocument(""***REMOVED***.body;
    body.innerHTML = "<form></form><form></form>";
    return body.childNodes.length === 2;
  ***REMOVED***(***REMOVED***;

  // Argument "data" should be string of html
  // context (optional***REMOVED***: If specified, the fragment will be created in this context,
  // defaults to document
  // keepScripts (optional***REMOVED***: If true, will include scripts passed in the html string
  jQuery.parseHTML = function (data, context, keepScripts***REMOVED*** {
    if (typeof data !== "string"***REMOVED*** {
      return [];
    ***REMOVED***
    if (typeof context === "boolean"***REMOVED*** {
      keepScripts = context;
      context = false;
    ***REMOVED***
    var base, parsed, scripts;
    if (!context***REMOVED*** {
      // Stop scripts or inline event handlers from being executed immediately
      // by using document.implementation
      if (support.createHTMLDocument***REMOVED*** {
        context = document.implementation.createHTMLDocument(""***REMOVED***;

        // Set the base href for the created document
        // so any parsed elements with URLs
        // are based on the document's URL (gh-2965***REMOVED***
        base = context.createElement("base"***REMOVED***;
        base.href = document.location.href;
        context.head.appendChild(base***REMOVED***;
      ***REMOVED*** else {
        context = document;
      ***REMOVED***
    ***REMOVED***
    parsed = rsingleTag.exec(data***REMOVED***;
    scripts = !keepScripts && [];

    // Single tag
    if (parsed***REMOVED*** {
      return [context.createElement(parsed[1]***REMOVED***];
    ***REMOVED***
    parsed = buildFragment([data], context, scripts***REMOVED***;
    if (scripts && scripts.length***REMOVED*** {
      jQuery(scripts***REMOVED***.remove(***REMOVED***;
    ***REMOVED***
    return jQuery.merge([], parsed.childNodes***REMOVED***;
  ***REMOVED***;

  /**
   * Load a url into a page
   */
  jQuery.fn.load = function (url, params, callback***REMOVED*** {
    var selector,
      type,
      response,
      self = this,
      off = url.indexOf(" "***REMOVED***;
    if (off > -1***REMOVED*** {
      selector = stripAndCollapse(url.slice(off***REMOVED******REMOVED***;
      url = url.slice(0, off***REMOVED***;
    ***REMOVED***

    // If it's a function
    if (isFunction(params***REMOVED******REMOVED*** {
      // We assume that it's the callback
      callback = params;
      params = undefined;

      // Otherwise, build a param string
    ***REMOVED*** else if (params && typeof params === "object"***REMOVED*** {
      type = "POST";
    ***REMOVED***

    // If we have elements to modify, make the request
    if (self.length > 0***REMOVED*** {
      jQuery.ajax({
        url: url,
        // If "type" variable is undefined, then "GET" method will be used.
        // Make value of this field explicit since
        // user can override it through ajaxSetup method
        type: type || "GET",
        dataType: "html",
        data: params
      ***REMOVED******REMOVED***.done(function (responseText***REMOVED*** {
        // Save response for use in complete callback
        response = arguments;
        self.html(selector ?
        // If a selector was specified, locate the right elements in a dummy div
        // Exclude scripts to avoid IE 'Permission Denied' errors
        jQuery("<div>"***REMOVED***.append(jQuery.parseHTML(responseText***REMOVED******REMOVED***.find(selector***REMOVED*** :
        // Otherwise use the full result
        responseText***REMOVED***;

        // If the request succeeds, this function gets "data", "status", "jqXHR"
        // but they are ignored because response was set above.
        // If it fails, this function gets "jqXHR", "status", "error"
      ***REMOVED******REMOVED***.always(callback && function (jqXHR, status***REMOVED*** {
        self.each(function (***REMOVED*** {
          callback.apply(this, response || [jqXHR.responseText, status, jqXHR]***REMOVED***;
        ***REMOVED******REMOVED***;
      ***REMOVED******REMOVED***;
    ***REMOVED***
    return this;
  ***REMOVED***;
  jQuery.expr.pseudos.animated = function (elem***REMOVED*** {
    return jQuery.grep(jQuery.timers, function (fn***REMOVED*** {
      return elem === fn.elem;
    ***REMOVED******REMOVED***.length;
  ***REMOVED***;
  jQuery.offset = {
    setOffset: function (elem, options, i***REMOVED*** {
      var curPosition,
        curLeft,
        curCSSTop,
        curTop,
        curOffset,
        curCSSLeft,
        calculatePosition,
        position = jQuery.css(elem, "position"***REMOVED***,
        curElem = jQuery(elem***REMOVED***,
        props = {***REMOVED***;

      // Set position first, in-case top/left are set even on static elem
      if (position === "static"***REMOVED*** {
        elem.style.position = "relative";
      ***REMOVED***
      curOffset = curElem.offset(***REMOVED***;
      curCSSTop = jQuery.css(elem, "top"***REMOVED***;
      curCSSLeft = jQuery.css(elem, "left"***REMOVED***;
      calculatePosition = (position === "absolute" || position === "fixed"***REMOVED*** && (curCSSTop + curCSSLeft***REMOVED***.indexOf("auto"***REMOVED*** > -1;

      // Need to be able to calculate position if either
      // top or left is auto and position is either absolute or fixed
      if (calculatePosition***REMOVED*** {
        curPosition = curElem.position(***REMOVED***;
        curTop = curPosition.top;
        curLeft = curPosition.left;
      ***REMOVED*** else {
        curTop = parseFloat(curCSSTop***REMOVED*** || 0;
        curLeft = parseFloat(curCSSLeft***REMOVED*** || 0;
      ***REMOVED***
      if (isFunction(options***REMOVED******REMOVED*** {
        // Use jQuery.extend here to allow modification of coordinates argument (gh-1848***REMOVED***
        options = options.call(elem, i, jQuery.extend({***REMOVED***, curOffset***REMOVED******REMOVED***;
      ***REMOVED***
      if (options.top != null***REMOVED*** {
        props.top = options.top - curOffset.top + curTop;
      ***REMOVED***
      if (options.left != null***REMOVED*** {
        props.left = options.left - curOffset.left + curLeft;
      ***REMOVED***
      if ("using" in options***REMOVED*** {
        options.using.call(elem, props***REMOVED***;
      ***REMOVED*** else {
        if (typeof props.top === "number"***REMOVED*** {
          props.top += "px";
        ***REMOVED***
        if (typeof props.left === "number"***REMOVED*** {
          props.left += "px";
        ***REMOVED***
        curElem.css(props***REMOVED***;
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***;
  jQuery.fn.extend({
    // offset(***REMOVED*** relates an element's border box to the document origin
    offset: function (options***REMOVED*** {
      // Preserve chaining for setter
      if (arguments.length***REMOVED*** {
        return options === undefined ? this : this.each(function (i***REMOVED*** {
          jQuery.offset.setOffset(this, options, i***REMOVED***;
        ***REMOVED******REMOVED***;
      ***REMOVED***
      var rect,
        win,
        elem = this[0];
      if (!elem***REMOVED*** {
        return;
      ***REMOVED***

      // Return zeros for disconnected and hidden (display: none***REMOVED*** elements (gh-2310***REMOVED***
      // Support: IE <=11 only
      // Running getBoundingClientRect on a
      // disconnected node in IE throws an error
      if (!elem.getClientRects(***REMOVED***.length***REMOVED*** {
        return {
          top: 0,
          left: 0
        ***REMOVED***;
      ***REMOVED***

      // Get document-relative position by adding viewport scroll to viewport-relative gBCR
      rect = elem.getBoundingClientRect(***REMOVED***;
      win = elem.ownerDocument.defaultView;
      return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
      ***REMOVED***;
    ***REMOVED***,
    // position(***REMOVED*** relates an element's margin box to its offset parent's padding box
    // This corresponds to the behavior of CSS absolute positioning
    position: function (***REMOVED*** {
      if (!this[0]***REMOVED*** {
        return;
      ***REMOVED***
      var offsetParent,
        offset,
        doc,
        elem = this[0],
        parentOffset = {
          top: 0,
          left: 0
        ***REMOVED***;

      // position:fixed elements are offset from the viewport, which itself always has zero offset
      if (jQuery.css(elem, "position"***REMOVED*** === "fixed"***REMOVED*** {
        // Assume position:fixed implies availability of getBoundingClientRect
        offset = elem.getBoundingClientRect(***REMOVED***;
      ***REMOVED*** else {
        offset = this.offset(***REMOVED***;

        // Account for the *real* offset parent, which can be the document or its root element
        // when a statically positioned element is identified
        doc = elem.ownerDocument;
        offsetParent = elem.offsetParent || doc.documentElement;
        while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement***REMOVED*** && jQuery.css(offsetParent, "position"***REMOVED*** === "static"***REMOVED*** {
          offsetParent = offsetParent.parentNode;
        ***REMOVED***
        if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1***REMOVED*** {
          // Incorporate borders into its offset, since they are outside its content origin
          parentOffset = jQuery(offsetParent***REMOVED***.offset(***REMOVED***;
          parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true***REMOVED***;
          parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true***REMOVED***;
        ***REMOVED***
      ***REMOVED***

      // Subtract parent offsets and element margins
      return {
        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true***REMOVED***,
        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true***REMOVED***
      ***REMOVED***;
    ***REMOVED***,
    // This method will return documentElement in the following cases:
    // 1***REMOVED*** For the element inside the iframe without offsetParent, this method will return
    //    documentElement of the parent window
    // 2***REMOVED*** For the hidden or detached element
    // 3***REMOVED*** For body or html element, i.e. in case of the html node - it will return itself
    //
    // but those exceptions were never presented as a real life use-cases
    // and might be considered as more preferable results.
    //
    // This logic, however, is not guaranteed and can change at any point in the future
    offsetParent: function (***REMOVED*** {
      return this.map(function (***REMOVED*** {
        var offsetParent = this.offsetParent;
        while (offsetParent && jQuery.css(offsetParent, "position"***REMOVED*** === "static"***REMOVED*** {
          offsetParent = offsetParent.offsetParent;
        ***REMOVED***
        return offsetParent || documentElement;
      ***REMOVED******REMOVED***;
    ***REMOVED***
  ***REMOVED******REMOVED***;

  // Create scrollLeft and scrollTop methods
  jQuery.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  ***REMOVED***, function (method, prop***REMOVED*** {
    var top = "pageYOffset" === prop;
    jQuery.fn[method] = function (val***REMOVED*** {
      return access(this, function (elem, method, val***REMOVED*** {
        // Coalesce documents and windows
        var win;
        if (isWindow(elem***REMOVED******REMOVED*** {
          win = elem;
        ***REMOVED*** else if (elem.nodeType === 9***REMOVED*** {
          win = elem.defaultView;
        ***REMOVED***
        if (val === undefined***REMOVED*** {
          return win ? win[prop] : elem[method];
        ***REMOVED***
        if (win***REMOVED*** {
          win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset***REMOVED***;
        ***REMOVED*** else {
          elem[method] = val;
        ***REMOVED***
      ***REMOVED***, method, val, arguments.length***REMOVED***;
    ***REMOVED***;
  ***REMOVED******REMOVED***;

  // Support: Safari <=7 - 9.1, Chrome <=37 - 49
  // Add the top/left cssHooks using jQuery.fn.position
  // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
  // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
  // getComputedStyle returns percent when specified for top/left/bottom/right;
  // rather than make the css module depend on the offset module, just check for it here
  jQuery.each(["top", "left"], function (_i, prop***REMOVED*** {
    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed***REMOVED*** {
      if (computed***REMOVED*** {
        computed = curCSS(elem, prop***REMOVED***;

        // If curCSS returns percentage, fallback to offset
        return rnumnonpx.test(computed***REMOVED*** ? jQuery(elem***REMOVED***.position(***REMOVED***[prop] + "px" : computed;
      ***REMOVED***
    ***REMOVED******REMOVED***;
  ***REMOVED******REMOVED***;

  // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
  jQuery.each({
    Height: "height",
    Width: "width"
  ***REMOVED***, function (name, type***REMOVED*** {
    jQuery.each({
      padding: "inner" + name,
      content: type,
      "": "outer" + name
    ***REMOVED***, function (defaultExtra, funcName***REMOVED*** {
      // Margin is only for outerHeight, outerWidth
      jQuery.fn[funcName] = function (margin, value***REMOVED*** {
        var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"***REMOVED***,
          extra = defaultExtra || (margin === true || value === true ? "margin" : "border"***REMOVED***;
        return access(this, function (elem, type, value***REMOVED*** {
          var doc;
          if (isWindow(elem***REMOVED******REMOVED*** {
            // $( window ***REMOVED***.outerWidth/Height return w/h including scrollbars (gh-1729***REMOVED***
            return funcName.indexOf("outer"***REMOVED*** === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
          ***REMOVED***

          // Get document width or height
          if (elem.nodeType === 9***REMOVED*** {
            doc = elem.documentElement;

            // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
            // whichever is greatest
            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]***REMOVED***;
          ***REMOVED***
          return value === undefined ?
          // Get width or height on the element, requesting but not forcing parseFloat
          jQuery.css(elem, type, extra***REMOVED*** :
          // Set width or height on the element
          jQuery.style(elem, type, value, extra***REMOVED***;
        ***REMOVED***, type, chainable ? margin : undefined, chainable***REMOVED***;
      ***REMOVED***;
    ***REMOVED******REMOVED***;
  ***REMOVED******REMOVED***;
  jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (_i, type***REMOVED*** {
    jQuery.fn[type] = function (fn***REMOVED*** {
      return this.on(type, fn***REMOVED***;
    ***REMOVED***;
  ***REMOVED******REMOVED***;
  jQuery.fn.extend({
    bind: function (types, data, fn***REMOVED*** {
      return this.on(types, null, data, fn***REMOVED***;
    ***REMOVED***,
    unbind: function (types, fn***REMOVED*** {
      return this.off(types, null, fn***REMOVED***;
    ***REMOVED***,
    delegate: function (selector, types, data, fn***REMOVED*** {
      return this.on(types, selector, data, fn***REMOVED***;
    ***REMOVED***,
    undelegate: function (selector, types, fn***REMOVED*** {
      // ( namespace ***REMOVED*** or ( selector, types [, fn] ***REMOVED***
      return arguments.length === 1 ? this.off(selector, "**"***REMOVED*** : this.off(types, selector || "**", fn***REMOVED***;
    ***REMOVED***,
    hover: function (fnOver, fnOut***REMOVED*** {
      return this.mouseenter(fnOver***REMOVED***.mouseleave(fnOut || fnOver***REMOVED***;
    ***REMOVED***
  ***REMOVED******REMOVED***;
  jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu"***REMOVED***.split(" "***REMOVED***, function (_i, name***REMOVED*** {
    // Handle event binding
    jQuery.fn[name] = function (data, fn***REMOVED*** {
      return arguments.length > 0 ? this.on(name, null, data, fn***REMOVED*** : this.trigger(name***REMOVED***;
    ***REMOVED***;
  ***REMOVED******REMOVED***;

  // Support: Android <=4.0 only
  // Make sure we trim BOM and NBSP
  var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  // Bind a function to a context, optionally partially applying any
  // arguments.
  // jQuery.proxy is deprecated to promote standards (specifically Function#bind***REMOVED***
  // However, it is not slated for removal any time soon
  jQuery.proxy = function (fn, context***REMOVED*** {
    var tmp, args, proxy;
    if (typeof context === "string"***REMOVED*** {
      tmp = fn[context];
      context = fn;
      fn = tmp;
    ***REMOVED***

    // Quick check to determine if target is callable, in the spec
    // this throws a TypeError, but we will just return undefined.
    if (!isFunction(fn***REMOVED******REMOVED*** {
      return undefined;
    ***REMOVED***

    // Simulated bind
    args = slice.call(arguments, 2***REMOVED***;
    proxy = function (***REMOVED*** {
      return fn.apply(context || this, args.concat(slice.call(arguments***REMOVED******REMOVED******REMOVED***;
    ***REMOVED***;

    // Set the guid of unique handler to the same of original handler, so it can be removed
    proxy.guid = fn.guid = fn.guid || jQuery.guid++;
    return proxy;
  ***REMOVED***;
  jQuery.holdReady = function (hold***REMOVED*** {
    if (hold***REMOVED*** {
      jQuery.readyWait++;
    ***REMOVED*** else {
      jQuery.ready(true***REMOVED***;
    ***REMOVED***
  ***REMOVED***;
  jQuery.isArray = Array.isArray;
  jQuery.parseJSON = JSON.parse;
  jQuery.nodeName = nodeName;
  jQuery.isFunction = isFunction;
  jQuery.isWindow = isWindow;
  jQuery.camelCase = camelCase;
  jQuery.type = toType;
  jQuery.now = Date.now;
  jQuery.isNumeric = function (obj***REMOVED*** {
    // As of jQuery 3.0, isNumeric is limited to
    // strings and numbers (primitives or objects***REMOVED***
    // that can be coerced to finite numbers (gh-2662***REMOVED***
    var type = jQuery.type(obj***REMOVED***;
    return (type === "number" || type === "string"***REMOVED*** &&
    // parseFloat NaNs numeric-cast false positives (""***REMOVED***
    // ...but misinterprets leading-number strings, particularly hex literals ("0x..."***REMOVED***
    // subtraction forces infinities to NaN
    !isNaN(obj - parseFloat(obj***REMOVED******REMOVED***;
  ***REMOVED***;
  jQuery.trim = function (text***REMOVED*** {
    return text == null ? "" : (text + ""***REMOVED***.replace(rtrim, ""***REMOVED***;
  ***REMOVED***;

  // Register as a named AMD module, since jQuery can be concatenated with other
  // files that may use define, but not via a proper concatenation script that
  // understands anonymous AMD modules. A named AMD is safest and most robust
  // way to register. Lowercase jquery is used because AMD module names are
  // derived from file names, and jQuery is normally delivered in a lowercase
  // file name. Do this after creating the global so that if an AMD module wants
  // to call noConflict to hide this version of jQuery, it will work.

  // Note that for maximum portability, libraries that are not jQuery should
  // declare themselves as anonymous modules, and avoid setting a global if an
  // AMD loader is present. jQuery is a special case. For more information, see
  // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

  if (true***REMOVED*** {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function (***REMOVED*** {
      return jQuery;
    ***REMOVED******REMOVED***.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__***REMOVED***,
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__***REMOVED******REMOVED***;
  ***REMOVED***
  var
    // Map over jQuery in case of overwrite
    _jQuery = window.jQuery,
    // Map over the $ in case of overwrite
    _$ = window.$;
  jQuery.noConflict = function (deep***REMOVED*** {
    if (window.$ === jQuery***REMOVED*** {
      window.$ = _$;
    ***REMOVED***
    if (deep && window.jQuery === jQuery***REMOVED*** {
      window.jQuery = _jQuery;
    ***REMOVED***
    return jQuery;
  ***REMOVED***;

  // Expose jQuery and $ identifiers, even in AMD
  // (#7102#comment:10, https://github.com/jquery/jquery/pull/557***REMOVED***
  // and CommonJS for browser emulators (#13566***REMOVED***
  if (typeof noGlobal === "undefined"***REMOVED*** {
    window.jQuery = window.$ = jQuery;
  ***REMOVED***
  return jQuery;
***REMOVED******REMOVED***;

/***/ ***REMOVED******REMOVED***,

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__***REMOVED*** {

"use strict";
__webpack_require__.r(__webpack_exports__***REMOVED***;
/* WEBPACK VAR INJECTION */(function(global***REMOVED*** {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c***REMOVED*** 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"***REMOVED***, to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';
var timeoutDuration = function (***REMOVED*** {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1***REMOVED*** {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]***REMOVED*** >= 0***REMOVED*** {
      return 1;
    ***REMOVED***
  ***REMOVED***
  return 0;
***REMOVED***(***REMOVED***;
function microtaskDebounce(fn***REMOVED*** {
  var called = false;
  return function (***REMOVED*** {
    if (called***REMOVED*** {
      return;
    ***REMOVED***
    called = true;
    window.Promise.resolve(***REMOVED***.then(function (***REMOVED*** {
      called = false;
      fn(***REMOVED***;
    ***REMOVED******REMOVED***;
  ***REMOVED***;
***REMOVED***
function taskDebounce(fn***REMOVED*** {
  var scheduled = false;
  return function (***REMOVED*** {
    if (!scheduled***REMOVED*** {
      scheduled = true;
      setTimeout(function (***REMOVED*** {
        scheduled = false;
        fn(***REMOVED***;
      ***REMOVED***, timeoutDuration***REMOVED***;
    ***REMOVED***
  ***REMOVED***;
***REMOVED***
var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function***REMOVED*** fn
* @returns {Function***REMOVED***
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any***REMOVED*** functionToCheck - variable to check
 * @returns {Boolean***REMOVED*** answer to: is a function?
 */
function isFunction(functionToCheck***REMOVED*** {
  var getType = {***REMOVED***;
  return functionToCheck && getType.toString.call(functionToCheck***REMOVED*** === '[object Function]';
***REMOVED***

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement***REMOVED*** element
 * @argument {String***REMOVED*** property
 */
function getStyleComputedProperty(element, property***REMOVED*** {
  if (element.nodeType !== 1***REMOVED*** {
    return [];
  ***REMOVED***
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null***REMOVED***;
  return property ? css[property] : css;
***REMOVED***

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element***REMOVED*** element
 * @returns {Element***REMOVED*** parent
 */
function getParentNode(element***REMOVED*** {
  if (element.nodeName === 'HTML'***REMOVED*** {
    return element;
  ***REMOVED***
  return element.parentNode || element.host;
***REMOVED***

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element***REMOVED*** element
 * @returns {Element***REMOVED*** scroll parent
 */
function getScrollParent(element***REMOVED*** {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element***REMOVED*** {
    return document.body;
  ***REMOVED***
  switch (element.nodeName***REMOVED*** {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  ***REMOVED***

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element***REMOVED***,
    overflow = _getStyleComputedProp.overflow,
    overflowX = _getStyleComputedProp.overflowX,
    overflowY = _getStyleComputedProp.overflowY;
  if (/(auto|scroll|overlay***REMOVED***/.test(overflow + overflowY + overflowX***REMOVED******REMOVED*** {
    return element;
  ***REMOVED***
  return getScrollParent(getParentNode(element***REMOVED******REMOVED***;
***REMOVED***

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object***REMOVED*** reference - the reference element (the popper will be relative to this***REMOVED***
 * @returns {Element***REMOVED*** parent
 */
function getReferenceNode(reference***REMOVED*** {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
***REMOVED***
var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode***REMOVED***;
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent***REMOVED***;

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number***REMOVED*** version to check
 * @returns {Boolean***REMOVED*** isIE
 */
function isIE(version***REMOVED*** {
  if (version === 11***REMOVED*** {
    return isIE11;
  ***REMOVED***
  if (version === 10***REMOVED*** {
    return isIE10;
  ***REMOVED***
  return isIE11 || isIE10;
***REMOVED***

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element***REMOVED*** element
 * @returns {Element***REMOVED*** offset parent
 */
function getOffsetParent(element***REMOVED*** {
  if (!element***REMOVED*** {
    return document.documentElement;
  ***REMOVED***
  var noOffsetParent = isIE(10***REMOVED*** ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling***REMOVED*** {
    offsetParent = (element = element.nextElementSibling***REMOVED***.offsetParent;
  ***REMOVED***
  var nodeName = offsetParent && offsetParent.nodeName;
  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML'***REMOVED*** {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  ***REMOVED***

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName***REMOVED*** !== -1 && getStyleComputedProperty(offsetParent, 'position'***REMOVED*** === 'static'***REMOVED*** {
    return getOffsetParent(offsetParent***REMOVED***;
  ***REMOVED***
  return offsetParent;
***REMOVED***
function isOffsetContainer(element***REMOVED*** {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY'***REMOVED*** {
    return false;
  ***REMOVED***
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild***REMOVED*** === element;
***REMOVED***

/**
 * Finds the root node (document, shadowDOM root***REMOVED*** of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element***REMOVED*** node
 * @returns {Element***REMOVED*** root node
 */
function getRoot(node***REMOVED*** {
  if (node.parentNode !== null***REMOVED*** {
    return getRoot(node.parentNode***REMOVED***;
  ***REMOVED***
  return node;
***REMOVED***

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element***REMOVED*** element1
 * @argument {Element***REMOVED*** element2
 * @returns {Element***REMOVED*** common offset parent
 */
function findCommonOffsetParent(element1, element2***REMOVED*** {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType***REMOVED*** {
    return document.documentElement;
  ***REMOVED***

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2***REMOVED*** & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange(***REMOVED***;
  range.setStart(start, 0***REMOVED***;
  range.setEnd(end, 0***REMOVED***;
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end***REMOVED******REMOVED*** {
    if (isOffsetContainer(commonAncestorContainer***REMOVED******REMOVED*** {
      return commonAncestorContainer;
    ***REMOVED***
    return getOffsetParent(commonAncestorContainer***REMOVED***;
  ***REMOVED***

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1***REMOVED***;
  if (element1root.host***REMOVED*** {
    return findCommonOffsetParent(element1root.host, element2***REMOVED***;
  ***REMOVED*** else {
    return findCommonOffsetParent(element1, getRoot(element2***REMOVED***.host***REMOVED***;
  ***REMOVED***
***REMOVED***

/**
 * Gets the scroll value of the given element in the given side (top and left***REMOVED***
 * @method
 * @memberof Popper.Utils
 * @argument {Element***REMOVED*** element
 * @argument {String***REMOVED*** side `top` or `left`
 * @returns {number***REMOVED*** amount of scrolled pixels
 */
function getScroll(element***REMOVED*** {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML'***REMOVED*** {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  ***REMOVED***
  return element[upperSide];
***REMOVED***

/*
 * Sum or subtract the element scroll values (left and top***REMOVED*** from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object***REMOVED*** rect - Rect object you want to change
 * @param {HTMLElement***REMOVED*** element - The element from the function reads the scroll values
 * @param {Boolean***REMOVED*** subtract - set to true if you want to subtract the scroll values
 * @return {Object***REMOVED*** rect - The modifier rect object
 */
function includeScroll(rect, element***REMOVED*** {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var scrollTop = getScroll(element, 'top'***REMOVED***;
  var scrollLeft = getScroll(element, 'left'***REMOVED***;
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
***REMOVED***

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration***REMOVED*** styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String***REMOVED*** axis - `x` or `y`
 * @return {number***REMOVED*** borders - The borders size of the given axis
 */

function getBordersSize(styles, axis***REMOVED*** {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
  return parseFloat(styles['border' + sideA + 'Width']***REMOVED*** + parseFloat(styles['border' + sideB + 'Width']***REMOVED***;
***REMOVED***
function getSize(axis, body, html, computedStyle***REMOVED*** {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10***REMOVED*** ? parseInt(html['offset' + axis]***REMOVED*** + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left'***REMOVED***]***REMOVED*** + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right'***REMOVED***]***REMOVED*** : 0***REMOVED***;
***REMOVED***
function getWindowSizes(document***REMOVED*** {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10***REMOVED*** && getComputedStyle(html***REMOVED***;
  return {
    height: getSize('Height', body, html, computedStyle***REMOVED***,
    width: getSize('Width', body, html, computedStyle***REMOVED***
  ***REMOVED***;
***REMOVED***
var classCallCheck = function (instance, Constructor***REMOVED*** {
  if (!(instance instanceof Constructor***REMOVED******REMOVED*** {
    throw new TypeError("Cannot call a class as a function"***REMOVED***;
  ***REMOVED***
***REMOVED***;
var createClass = function (***REMOVED*** {
  function defineProperties(target, props***REMOVED*** {
    for (var i = 0; i < props.length; i++***REMOVED*** {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor***REMOVED*** descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  return function (Constructor, protoProps, staticProps***REMOVED*** {
    if (protoProps***REMOVED*** defineProperties(Constructor.prototype, protoProps***REMOVED***;
    if (staticProps***REMOVED*** defineProperties(Constructor, staticProps***REMOVED***;
    return Constructor;
  ***REMOVED***;
***REMOVED***(***REMOVED***;
var defineProperty = function (obj, key, value***REMOVED*** {
  if (key in obj***REMOVED*** {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    ***REMOVED******REMOVED***;
  ***REMOVED*** else {
    obj[key] = value;
  ***REMOVED***
  return obj;
***REMOVED***;
var _extends = Object.assign || function (target***REMOVED*** {
  for (var i = 1; i < arguments.length; i++***REMOVED*** {
    var source = arguments[i];
    for (var key in source***REMOVED*** {
      if (Object.prototype.hasOwnProperty.call(source, key***REMOVED******REMOVED*** {
        target[key] = source[key];
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
  return target;
***REMOVED***;

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object***REMOVED*** offsets
 * @returns {Object***REMOVED*** ClientRect like output
 */
function getClientRect(offsets***REMOVED*** {
  return _extends({***REMOVED***, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  ***REMOVED******REMOVED***;
***REMOVED***

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement***REMOVED*** element
 * @return {Object***REMOVED*** client rect
 */
function getBoundingClientRect(element***REMOVED*** {
  var rect = {***REMOVED***;

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10***REMOVED******REMOVED*** {
      rect = element.getBoundingClientRect(***REMOVED***;
      var scrollTop = getScroll(element, 'top'***REMOVED***;
      var scrollLeft = getScroll(element, 'left'***REMOVED***;
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    ***REMOVED*** else {
      rect = element.getBoundingClientRect(***REMOVED***;
    ***REMOVED***
  ***REMOVED*** catch (e***REMOVED*** {***REMOVED***
  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  ***REMOVED***;

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument***REMOVED*** : {***REMOVED***;
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;
  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar***REMOVED*** {
    var styles = getStyleComputedProperty(element***REMOVED***;
    horizScrollbar -= getBordersSize(styles, 'x'***REMOVED***;
    vertScrollbar -= getBordersSize(styles, 'y'***REMOVED***;
    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  ***REMOVED***
  return getClientRect(result***REMOVED***;
***REMOVED***
function getOffsetRectRelativeToArbitraryNode(children, parent***REMOVED*** {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isIE10 = isIE(10***REMOVED***;
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children***REMOVED***;
  var parentRect = getBoundingClientRect(parent***REMOVED***;
  var scrollParent = getScrollParent(children***REMOVED***;
  var styles = getStyleComputedProperty(parent***REMOVED***;
  var borderTopWidth = parseFloat(styles.borderTopWidth***REMOVED***;
  var borderLeftWidth = parseFloat(styles.borderLeftWidth***REMOVED***;

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML***REMOVED*** {
    parentRect.top = Math.max(parentRect.top, 0***REMOVED***;
    parentRect.left = Math.max(parentRect.left, 0***REMOVED***;
  ***REMOVED***
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  ***REMOVED******REMOVED***;
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML***REMOVED*** {
    var marginTop = parseFloat(styles.marginTop***REMOVED***;
    var marginLeft = parseFloat(styles.marginLeft***REMOVED***;
    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  ***REMOVED***
  if (isIE10 && !fixedPosition ? parent.contains(scrollParent***REMOVED*** : parent === scrollParent && scrollParent.nodeName !== 'BODY'***REMOVED*** {
    offsets = includeScroll(offsets, parent***REMOVED***;
  ***REMOVED***
  return offsets;
***REMOVED***
function getViewportOffsetRectRelativeToArtbitraryNode(element***REMOVED*** {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html***REMOVED***;
  var width = Math.max(html.clientWidth, window.innerWidth || 0***REMOVED***;
  var height = Math.max(html.clientHeight, window.innerHeight || 0***REMOVED***;
  var scrollTop = !excludeScroll ? getScroll(html***REMOVED*** : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left'***REMOVED*** : 0;
  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  ***REMOVED***;
  return getClientRect(offset***REMOVED***;
***REMOVED***

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element***REMOVED*** element
 * @argument {Element***REMOVED*** customContainer
 * @returns {Boolean***REMOVED*** answer to "isFixed?"
 */
function isFixed(element***REMOVED*** {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML'***REMOVED*** {
    return false;
  ***REMOVED***
  if (getStyleComputedProperty(element, 'position'***REMOVED*** === 'fixed'***REMOVED*** {
    return true;
  ***REMOVED***
  var parentNode = getParentNode(element***REMOVED***;
  if (!parentNode***REMOVED*** {
    return false;
  ***REMOVED***
  return isFixed(parentNode***REMOVED***;
***REMOVED***

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element***REMOVED*** element
 * @returns {Element***REMOVED*** first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element***REMOVED*** {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE(***REMOVED******REMOVED*** {
    return document.documentElement;
  ***REMOVED***
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform'***REMOVED*** === 'none'***REMOVED*** {
    el = el.parentElement;
  ***REMOVED***
  return el || document.documentElement;
***REMOVED***

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement***REMOVED*** popper
 * @param {HTMLElement***REMOVED*** reference
 * @param {number***REMOVED*** padding
 * @param {HTMLElement***REMOVED*** boundariesElement - Element used to define the boundaries
 * @param {Boolean***REMOVED*** fixedPosition - Is in fixed position mode
 * @returns {Object***REMOVED*** Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement***REMOVED*** {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = {
    top: 0,
    left: 0
  ***REMOVED***;
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper***REMOVED*** : findCommonOffsetParent(popper, getReferenceNode(reference***REMOVED******REMOVED***;

  // Handle viewport case
  if (boundariesElement === 'viewport'***REMOVED*** {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition***REMOVED***;
  ***REMOVED*** else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent'***REMOVED*** {
      boundariesNode = getScrollParent(getParentNode(reference***REMOVED******REMOVED***;
      if (boundariesNode.nodeName === 'BODY'***REMOVED*** {
        boundariesNode = popper.ownerDocument.documentElement;
      ***REMOVED***
    ***REMOVED*** else if (boundariesElement === 'window'***REMOVED*** {
      boundariesNode = popper.ownerDocument.documentElement;
    ***REMOVED*** else {
      boundariesNode = boundariesElement;
    ***REMOVED***
    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition***REMOVED***;

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent***REMOVED******REMOVED*** {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument***REMOVED***,
        height = _getWindowSizes.height,
        width = _getWindowSizes.width;
      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    ***REMOVED*** else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    ***REMOVED***
  ***REMOVED***

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
  return boundaries;
***REMOVED***
function getArea(_ref***REMOVED*** {
  var width = _ref.width,
    height = _ref.height;
  return width * height;
***REMOVED***

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object***REMOVED*** data - The data object generated by update method
 * @argument {Object***REMOVED*** options - Modifiers configuration and options
 * @returns {Object***REMOVED*** The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement***REMOVED*** {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  if (placement.indexOf('auto'***REMOVED*** === -1***REMOVED*** {
    return placement;
  ***REMOVED***
  var boundaries = getBoundaries(popper, reference, padding, boundariesElement***REMOVED***;
  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    ***REMOVED***,
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    ***REMOVED***,
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    ***REMOVED***,
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    ***REMOVED***
  ***REMOVED***;
  var sortedAreas = Object.keys(rects***REMOVED***.map(function (key***REMOVED*** {
    return _extends({
      key: key
    ***REMOVED***, rects[key], {
      area: getArea(rects[key]***REMOVED***
    ***REMOVED******REMOVED***;
  ***REMOVED******REMOVED***.sort(function (a, b***REMOVED*** {
    return b.area - a.area;
  ***REMOVED******REMOVED***;
  var filteredAreas = sortedAreas.filter(function (_ref2***REMOVED*** {
    var width = _ref2.width,
      height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  ***REMOVED******REMOVED***;
  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
  var variation = placement.split('-'***REMOVED***[1];
  return computedPlacement + (variation ? '-' + variation : ''***REMOVED***;
***REMOVED***

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object***REMOVED*** state
 * @param {Element***REMOVED*** popper - the popper element
 * @param {Element***REMOVED*** reference - the reference element (the popper will be relative to this***REMOVED***
 * @param {Element***REMOVED*** fixedPosition - is in fixed position mode
 * @returns {Object***REMOVED*** An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference***REMOVED*** {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper***REMOVED*** : findCommonOffsetParent(popper, getReferenceNode(reference***REMOVED******REMOVED***;
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition***REMOVED***;
***REMOVED***

/**
 * Get the outer sizes of the given element (offset size + margins***REMOVED***
 * @method
 * @memberof Popper.Utils
 * @argument {Element***REMOVED*** element
 * @returns {Object***REMOVED*** object containing width and height properties
 */
function getOuterSizes(element***REMOVED*** {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element***REMOVED***;
  var x = parseFloat(styles.marginTop || 0***REMOVED*** + parseFloat(styles.marginBottom || 0***REMOVED***;
  var y = parseFloat(styles.marginLeft || 0***REMOVED*** + parseFloat(styles.marginRight || 0***REMOVED***;
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  ***REMOVED***;
  return result;
***REMOVED***

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String***REMOVED*** placement
 * @returns {String***REMOVED*** flipped placement
 */
function getOppositePlacement(placement***REMOVED*** {
  var hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  ***REMOVED***;
  return placement.replace(/left|right|bottom|top/g, function (matched***REMOVED*** {
    return hash[matched];
  ***REMOVED******REMOVED***;
***REMOVED***

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object***REMOVED*** position - CSS position the Popper will get applied
 * @param {HTMLElement***REMOVED*** popper - the popper element
 * @param {Object***REMOVED*** referenceOffsets - the reference offsets (the popper will be relative to this***REMOVED***
 * @param {String***REMOVED*** placement - one of the valid placement options
 * @returns {Object***REMOVED*** popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement***REMOVED*** {
  placement = placement.split('-'***REMOVED***[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper***REMOVED***;

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  ***REMOVED***;

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement***REMOVED*** !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';
  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide***REMOVED*** {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  ***REMOVED*** else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide***REMOVED***];
  ***REMOVED***
  return popperOffsets;
***REMOVED***

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array***REMOVED*** arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check***REMOVED*** {
  // use native find if supported
  if (Array.prototype.find***REMOVED*** {
    return arr.find(check***REMOVED***;
  ***REMOVED***

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check***REMOVED***[0];
***REMOVED***

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array***REMOVED*** arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value***REMOVED*** {
  // use native findIndex if supported
  if (Array.prototype.findIndex***REMOVED*** {
    return arr.findIndex(function (cur***REMOVED*** {
      return cur[prop] === value;
    ***REMOVED******REMOVED***;
  ***REMOVED***

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj***REMOVED*** {
    return obj[prop] === value;
  ***REMOVED******REMOVED***;
  return arr.indexOf(match***REMOVED***;
***REMOVED***

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject***REMOVED*** data
 * @param {Array***REMOVED*** modifiers
 * @param {String***REMOVED*** ends - Optional modifier name used as stopper
 * @returns {dataObject***REMOVED***
 */
function runModifiers(modifiers, data, ends***REMOVED*** {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends***REMOVED******REMOVED***;
  modifiersToRun.forEach(function (modifier***REMOVED*** {
    if (modifier['function']***REMOVED*** {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!'***REMOVED***;
    ***REMOVED***
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn***REMOVED******REMOVED*** {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper***REMOVED***;
      data.offsets.reference = getClientRect(data.offsets.reference***REMOVED***;
      data = fn(data, modifier***REMOVED***;
    ***REMOVED***
  ***REMOVED******REMOVED***;
  return data;
***REMOVED***

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update(***REMOVED*** {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed***REMOVED*** {
    return;
  ***REMOVED***
  var data = {
    instance: this,
    styles: {***REMOVED***,
    arrowStyles: {***REMOVED***,
    attributes: {***REMOVED***,
    flipped: false,
    offsets: {***REMOVED***
  ***REMOVED***;

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed***REMOVED***;

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding***REMOVED***;

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;
  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement***REMOVED***;
  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data***REMOVED***;

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated***REMOVED*** {
    this.state.isCreated = true;
    this.options.onCreate(data***REMOVED***;
  ***REMOVED*** else {
    this.options.onUpdate(data***REMOVED***;
  ***REMOVED***
***REMOVED***

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean***REMOVED***
 */
function isModifierEnabled(modifiers, modifierName***REMOVED*** {
  return modifiers.some(function (_ref***REMOVED*** {
    var name = _ref.name,
      enabled = _ref.enabled;
    return enabled && name === modifierName;
  ***REMOVED******REMOVED***;
***REMOVED***

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String***REMOVED*** property (camelCase***REMOVED***
 * @returns {String***REMOVED*** prefixed property (camelCase or PascalCase, depending on the vendor prefix***REMOVED***
 */
function getSupportedPropertyName(property***REMOVED*** {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0***REMOVED***.toUpperCase(***REMOVED*** + property.slice(1***REMOVED***;
  for (var i = 0; i < prefixes.length; i++***REMOVED*** {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined'***REMOVED*** {
      return toCheck;
    ***REMOVED***
  ***REMOVED***
  return null;
***REMOVED***

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy(***REMOVED*** {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle'***REMOVED******REMOVED*** {
    this.popper.removeAttribute('x-placement'***REMOVED***;
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform'***REMOVED***] = '';
  ***REMOVED***
  this.disableEventListeners(***REMOVED***;

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy***REMOVED*** {
    this.popper.parentNode.removeChild(this.popper***REMOVED***;
  ***REMOVED***
  return this;
***REMOVED***

/**
 * Get the window associated with the element
 * @argument {Element***REMOVED*** element
 * @returns {Window***REMOVED***
 */
function getWindow(element***REMOVED*** {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
***REMOVED***
function attachToScrollParents(scrollParent, event, callback, scrollParents***REMOVED*** {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, {
    passive: true
  ***REMOVED******REMOVED***;
  if (!isBody***REMOVED*** {
    attachToScrollParents(getScrollParent(target.parentNode***REMOVED***, event, callback, scrollParents***REMOVED***;
  ***REMOVED***
  scrollParents.push(target***REMOVED***;
***REMOVED***

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound***REMOVED*** {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference***REMOVED***.addEventListener('resize', state.updateBound, {
    passive: true
  ***REMOVED******REMOVED***;

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference***REMOVED***;
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents***REMOVED***;
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;
  return state;
***REMOVED***

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners(***REMOVED*** {
  if (!this.state.eventsEnabled***REMOVED*** {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate***REMOVED***;
  ***REMOVED***
***REMOVED***

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state***REMOVED*** {
  // Remove resize event listener on window
  getWindow(reference***REMOVED***.removeEventListener('resize', state.updateBound***REMOVED***;

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target***REMOVED*** {
    target.removeEventListener('scroll', state.updateBound***REMOVED***;
  ***REMOVED******REMOVED***;

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
***REMOVED***

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners(***REMOVED*** {
  if (this.state.eventsEnabled***REMOVED*** {
    cancelAnimationFrame(this.scheduleUpdate***REMOVED***;
    this.state = removeEventListeners(this.reference, this.state***REMOVED***;
  ***REMOVED***
***REMOVED***

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {****REMOVED*** input to check
 * @return {Boolean***REMOVED***
 */
function isNumeric(n***REMOVED*** {
  return n !== '' && !isNaN(parseFloat(n***REMOVED******REMOVED*** && isFinite(n***REMOVED***;
***REMOVED***

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element***REMOVED*** element - Element to apply the style to
 * @argument {Object***REMOVED*** styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles***REMOVED*** {
  Object.keys(styles***REMOVED***.forEach(function (prop***REMOVED*** {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop***REMOVED*** !== -1 && isNumeric(styles[prop]***REMOVED******REMOVED*** {
      unit = 'px';
    ***REMOVED***
    element.style[prop] = styles[prop] + unit;
  ***REMOVED******REMOVED***;
***REMOVED***

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element***REMOVED*** element - Element to apply the attributes to
 * @argument {Object***REMOVED*** styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes***REMOVED*** {
  Object.keys(attributes***REMOVED***.forEach(function (prop***REMOVED*** {
    var value = attributes[prop];
    if (value !== false***REMOVED*** {
      element.setAttribute(prop, attributes[prop]***REMOVED***;
    ***REMOVED*** else {
      element.removeAttribute(prop***REMOVED***;
    ***REMOVED***
  ***REMOVED******REMOVED***;
***REMOVED***

/**
 * @function
 * @memberof Modifiers
 * @argument {Object***REMOVED*** data - The data object generated by `update` method
 * @argument {Object***REMOVED*** data.styles - List of style properties - values to apply to popper element
 * @argument {Object***REMOVED*** data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object***REMOVED*** options - Modifiers configuration and options
 * @returns {Object***REMOVED*** The same data object
 */
function applyStyle(data***REMOVED*** {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles***REMOVED***;

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes***REMOVED***;

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles***REMOVED***.length***REMOVED*** {
    setStyles(data.arrowElement, data.arrowStyles***REMOVED***;
  ***REMOVED***
  return data;
***REMOVED***

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement***REMOVED*** reference - The reference element used to position the popper
 * @param {HTMLElement***REMOVED*** popper - The HTML element used as popper
 * @param {Object***REMOVED*** options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state***REMOVED*** {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed***REMOVED***;

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding***REMOVED***;
  popper.setAttribute('x-placement', placement***REMOVED***;

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, {
    position: options.positionFixed ? 'fixed' : 'absolute'
  ***REMOVED******REMOVED***;
  return options;
***REMOVED***

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object***REMOVED*** data - The data object generated by `update` method
 * @argument {Boolean***REMOVED*** shouldRound - If the offsets should be rounded at all
 * @returns {Object***REMOVED*** The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens***REMOVED***.
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound***REMOVED*** {
  var _data$offsets = data.offsets,
    popper = _data$offsets.popper,
    reference = _data$offsets.reference;
  var round = Math.round,
    floor = Math.floor;
  var noRound = function noRound(v***REMOVED*** {
    return v;
  ***REMOVED***;
  var referenceWidth = round(reference.width***REMOVED***;
  var popperWidth = round(popper.width***REMOVED***;
  var isVertical = ['left', 'right'].indexOf(data.placement***REMOVED*** !== -1;
  var isVariation = data.placement.indexOf('-'***REMOVED*** !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;
  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left***REMOVED***,
    top: verticalToInteger(popper.top***REMOVED***,
    bottom: verticalToInteger(popper.bottom***REMOVED***,
    right: horizontalToInteger(popper.right***REMOVED***
  ***REMOVED***;
***REMOVED***
var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent***REMOVED***;

/**
 * @function
 * @memberof Modifiers
 * @argument {Object***REMOVED*** data - The data object generated by `update` method
 * @argument {Object***REMOVED*** options - Modifiers configuration and options
 * @returns {Object***REMOVED*** The data object, properly modified
 */
function computeStyle(data, options***REMOVED*** {
  var x = options.x,
    y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier***REMOVED*** {
    return modifier.name === 'applyStyle';
  ***REMOVED******REMOVED***.gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined***REMOVED*** {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'***REMOVED***;
  ***REMOVED***
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
  var offsetParent = getOffsetParent(data.instance.popper***REMOVED***;
  var offsetParentRect = getBoundingClientRect(offsetParent***REMOVED***;

  // Styles
  var styles = {
    position: popper.position
  ***REMOVED***;
  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox***REMOVED***;
  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform'***REMOVED***;

  // now, let's make a step back and look at this code closely (wtf?***REMOVED***
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y***REMOVED***, which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
    top = void 0;
  if (sideA === 'bottom'***REMOVED*** {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar***REMOVED***
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML'***REMOVED*** {
      top = -offsetParent.clientHeight + offsets.bottom;
    ***REMOVED*** else {
      top = -offsetParentRect.height + offsets.bottom;
    ***REMOVED***
  ***REMOVED*** else {
    top = offsets.top;
  ***REMOVED***
  if (sideB === 'right'***REMOVED*** {
    if (offsetParent.nodeName === 'HTML'***REMOVED*** {
      left = -offsetParent.clientWidth + offsets.right;
    ***REMOVED*** else {
      left = -offsetParentRect.width + offsets.right;
    ***REMOVED***
  ***REMOVED*** else {
    left = offsets.left;
  ***REMOVED***
  if (gpuAcceleration && prefixedProperty***REMOVED*** {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0***REMOVED***';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  ***REMOVED*** else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  ***REMOVED***

  // Attributes
  var attributes = {
    'x-placement': data.placement
  ***REMOVED***;

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({***REMOVED***, attributes, data.attributes***REMOVED***;
  data.styles = _extends({***REMOVED***, styles, data.styles***REMOVED***;
  data.arrowStyles = _extends({***REMOVED***, data.offsets.arrow, data.arrowStyles***REMOVED***;
  return data;
***REMOVED***

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array***REMOVED*** modifiers - list of modifiers
 * @param {String***REMOVED*** requestingName - name of requesting modifier
 * @param {String***REMOVED*** requestedName - name of requested modifier
 * @returns {Boolean***REMOVED***
 */
function isModifierRequired(modifiers, requestingName, requestedName***REMOVED*** {
  var requesting = find(modifiers, function (_ref***REMOVED*** {
    var name = _ref.name;
    return name === requestingName;
  ***REMOVED******REMOVED***;
  var isRequired = !!requesting && modifiers.some(function (modifier***REMOVED*** {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  ***REMOVED******REMOVED***;
  if (!isRequired***REMOVED*** {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!'***REMOVED***;
  ***REMOVED***
  return isRequired;
***REMOVED***

/**
 * @function
 * @memberof Modifiers
 * @argument {Object***REMOVED*** data - The data object generated by update method
 * @argument {Object***REMOVED*** options - Modifiers configuration and options
 * @returns {Object***REMOVED*** The data object, properly modified
 */
function arrow(data, options***REMOVED*** {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether'***REMOVED******REMOVED*** {
    return data;
  ***REMOVED***
  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string'***REMOVED*** {
    arrowElement = data.instance.popper.querySelector(arrowElement***REMOVED***;

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement***REMOVED*** {
      return data;
    ***REMOVED***
  ***REMOVED*** else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement***REMOVED******REMOVED*** {
      console.warn('WARNING: `arrow.element` must be child of its popper element!'***REMOVED***;
      return data;
    ***REMOVED***
  ***REMOVED***
  var placement = data.placement.split('-'***REMOVED***[0];
  var _data$offsets = data.offsets,
    popper = _data$offsets.popper,
    reference = _data$offsets.reference;
  var isVertical = ['left', 'right'].indexOf(placement***REMOVED*** !== -1;
  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase(***REMOVED***;
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement***REMOVED***[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]***REMOVED*** {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize***REMOVED***;
  ***REMOVED***
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]***REMOVED*** {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  ***REMOVED***
  data.offsets.popper = getClientRect(data.offsets.popper***REMOVED***;

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper***REMOVED***;
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]***REMOVED***;
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']***REMOVED***;
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue***REMOVED***, 0***REMOVED***;
  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {***REMOVED***, defineProperty(_data$offsets$arrow, side, Math.round(sideValue***REMOVED******REMOVED***, defineProperty(_data$offsets$arrow, altSide, ''***REMOVED***, _data$offsets$arrow***REMOVED***;
  return data;
***REMOVED***

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String***REMOVED*** placement variation
 * @returns {String***REMOVED*** flipped placement variation
 */
function getOppositeVariation(variation***REMOVED*** {
  if (variation === 'end'***REMOVED*** {
    return 'start';
  ***REMOVED*** else if (variation === 'start'***REMOVED*** {
    return 'end';
  ***REMOVED***
  return variation;
***REMOVED***

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`***REMOVED***, `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`***REMOVED***, `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned***REMOVED***
 * - `right-start` (on right of reference, top aligned***REMOVED***
 * - `bottom` (on bottom, centered***REMOVED***
 * - `auto-end` (on the side with more space available, alignment depends by placement***REMOVED***
 *
 * @static
 * @type {Array***REMOVED***
 * @enum {String***REMOVED***
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3***REMOVED***;

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise***REMOVED***.
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String***REMOVED*** placement - A valid placement (it accepts variations***REMOVED***
 * @argument {Boolean***REMOVED*** counter - Set to true to walk the placements counterclockwise
 * @returns {Array***REMOVED*** placements including their variations
 */
function clockwise(placement***REMOVED*** {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var index = validPlacements.indexOf(placement***REMOVED***;
  var arr = validPlacements.slice(index + 1***REMOVED***.concat(validPlacements.slice(0, index***REMOVED******REMOVED***;
  return counter ? arr.reverse(***REMOVED*** : arr;
***REMOVED***
var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
***REMOVED***;

/**
 * @function
 * @memberof Modifiers
 * @argument {Object***REMOVED*** data - The data object generated by update method
 * @argument {Object***REMOVED*** options - Modifiers configuration and options
 * @returns {Object***REMOVED*** The data object, properly modified
 */
function flip(data, options***REMOVED*** {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner'***REMOVED******REMOVED*** {
    return data;
  ***REMOVED***
  if (data.flipped && data.placement === data.originalPlacement***REMOVED*** {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  ***REMOVED***
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed***REMOVED***;
  var placement = data.placement.split('-'***REMOVED***[0];
  var placementOpposite = getOppositePlacement(placement***REMOVED***;
  var variation = data.placement.split('-'***REMOVED***[1] || '';
  var flipOrder = [];
  switch (options.behavior***REMOVED*** {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement***REMOVED***;
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true***REMOVED***;
      break;
    default:
      flipOrder = options.behavior;
  ***REMOVED***
  flipOrder.forEach(function (step, index***REMOVED*** {
    if (placement !== step || flipOrder.length === index + 1***REMOVED*** {
      return data;
    ***REMOVED***
    placement = data.placement.split('-'***REMOVED***[0];
    placementOpposite = getOppositePlacement(placement***REMOVED***;
    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right***REMOVED*** > floor(refOffsets.left***REMOVED*** || placement === 'right' && floor(popperOffsets.left***REMOVED*** < floor(refOffsets.right***REMOVED*** || placement === 'top' && floor(popperOffsets.bottom***REMOVED*** > floor(refOffsets.top***REMOVED*** || placement === 'bottom' && floor(popperOffsets.top***REMOVED*** < floor(refOffsets.bottom***REMOVED***;
    var overflowsLeft = floor(popperOffsets.left***REMOVED*** < floor(boundaries.left***REMOVED***;
    var overflowsRight = floor(popperOffsets.right***REMOVED*** > floor(boundaries.right***REMOVED***;
    var overflowsTop = floor(popperOffsets.top***REMOVED*** < floor(boundaries.top***REMOVED***;
    var overflowsBottom = floor(popperOffsets.bottom***REMOVED*** > floor(boundaries.bottom***REMOVED***;
    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement***REMOVED*** !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom***REMOVED***;

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop***REMOVED***;
    var flippedVariation = flippedVariationByRef || flippedVariationByContent;
    if (overlapsRef || overflowsBoundaries || flippedVariation***REMOVED*** {
      // this boolean to detect any flip loop
      data.flipped = true;
      if (overlapsRef || overflowsBoundaries***REMOVED*** {
        placement = flipOrder[index + 1];
      ***REMOVED***
      if (flippedVariation***REMOVED*** {
        variation = getOppositeVariation(variation***REMOVED***;
      ***REMOVED***
      data.placement = placement + (variation ? '-' + variation : ''***REMOVED***;

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({***REMOVED***, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement***REMOVED******REMOVED***;
      data = runModifiers(data.instance.modifiers, data, 'flip'***REMOVED***;
    ***REMOVED***
  ***REMOVED******REMOVED***;
  return data;
***REMOVED***

/**
 * @function
 * @memberof Modifiers
 * @argument {Object***REMOVED*** data - The data object generated by update method
 * @argument {Object***REMOVED*** options - Modifiers configuration and options
 * @returns {Object***REMOVED*** The data object, properly modified
 */
function keepTogether(data***REMOVED*** {
  var _data$offsets = data.offsets,
    popper = _data$offsets.popper,
    reference = _data$offsets.reference;
  var placement = data.placement.split('-'***REMOVED***[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement***REMOVED*** !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';
  if (popper[side] < floor(reference[opSide]***REMOVED******REMOVED*** {
    data.offsets.popper[opSide] = floor(reference[opSide]***REMOVED*** - popper[measurement];
  ***REMOVED***
  if (popper[opSide] > floor(reference[side]***REMOVED******REMOVED*** {
    data.offsets.popper[opSide] = floor(reference[side]***REMOVED***;
  ***REMOVED***
  return data;
***REMOVED***

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset***REMOVED***
 * @private
 * @argument {String***REMOVED*** str - Value + unit string
 * @argument {String***REMOVED*** measurement - `height` or `width`
 * @argument {Object***REMOVED*** popperOffsets
 * @argument {Object***REMOVED*** referenceOffsets
 * @returns {Number|String***REMOVED***
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets***REMOVED*** {
  // separate value from unit
  var split = str.match(/((?:\-|\+***REMOVED***?\d*\.?\d****REMOVED***(.****REMOVED***/***REMOVED***;
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value***REMOVED*** {
    return str;
  ***REMOVED***
  if (unit.indexOf('%'***REMOVED*** === 0***REMOVED*** {
    var element = void 0;
    switch (unit***REMOVED*** {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    ***REMOVED***
    var rect = getClientRect(element***REMOVED***;
    return rect[measurement] / 100 * value;
  ***REMOVED*** else if (unit === 'vh' || unit === 'vw'***REMOVED*** {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh'***REMOVED*** {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0***REMOVED***;
    ***REMOVED*** else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0***REMOVED***;
    ***REMOVED***
    return size / 100 * value;
  ***REMOVED*** else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  ***REMOVED***
***REMOVED***

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset***REMOVED***
 * @private
 * @argument {String***REMOVED*** offset
 * @argument {Object***REMOVED*** popperOffsets
 * @argument {Object***REMOVED*** referenceOffsets
 * @argument {String***REMOVED*** basePlacement
 * @returns {Array***REMOVED*** a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement***REMOVED*** {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement***REMOVED*** !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc***REMOVED***
  var fragments = offset.split(/(\+|\-***REMOVED***/***REMOVED***.map(function (frag***REMOVED*** {
    return frag.trim(***REMOVED***;
  ***REMOVED******REMOVED***;

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag***REMOVED*** {
    return frag.search(/,|\s/***REMOVED*** !== -1;
  ***REMOVED******REMOVED******REMOVED***;
  if (fragments[divider] && fragments[divider].indexOf(','***REMOVED*** === -1***REMOVED*** {
    console.warn('Offsets separated by white space(s***REMOVED*** are deprecated, use a comma (,***REMOVED*** instead.'***REMOVED***;
  ***REMOVED***

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider***REMOVED***.concat([fragments[divider].split(splitRegex***REMOVED***[0]]***REMOVED***, [fragments[divider].split(splitRegex***REMOVED***[1]].concat(fragments.slice(divider + 1***REMOVED******REMOVED***] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index***REMOVED*** {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight***REMOVED*** ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b***REMOVED*** {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b***REMOVED*** !== -1***REMOVED*** {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      ***REMOVED*** else if (mergeWithPrevious***REMOVED*** {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      ***REMOVED*** else {
        return a.concat(b***REMOVED***;
      ***REMOVED***
    ***REMOVED***, []***REMOVED***
    // Here we convert the string values into number values (in px***REMOVED***
    .map(function (str***REMOVED*** {
      return toValue(str, measurement, popperOffsets, referenceOffsets***REMOVED***;
    ***REMOVED******REMOVED***;
  ***REMOVED******REMOVED***;

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index***REMOVED*** {
    op.forEach(function (frag, index2***REMOVED*** {
      if (isNumeric(frag***REMOVED******REMOVED*** {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1***REMOVED***;
      ***REMOVED***
    ***REMOVED******REMOVED***;
  ***REMOVED******REMOVED***;
  return offsets;
***REMOVED***

/**
 * @function
 * @memberof Modifiers
 * @argument {Object***REMOVED*** data - The data object generated by update method
 * @argument {Object***REMOVED*** options - Modifiers configuration and options
 * @argument {Number|String***REMOVED*** options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object***REMOVED*** The data object, properly modified
 */
function offset(data, _ref***REMOVED*** {
  var offset = _ref.offset;
  var placement = data.placement,
    _data$offsets = data.offsets,
    popper = _data$offsets.popper,
    reference = _data$offsets.reference;
  var basePlacement = placement.split('-'***REMOVED***[0];
  var offsets = void 0;
  if (isNumeric(+offset***REMOVED******REMOVED*** {
    offsets = [+offset, 0];
  ***REMOVED*** else {
    offsets = parseOffset(offset, popper, reference, basePlacement***REMOVED***;
  ***REMOVED***
  if (basePlacement === 'left'***REMOVED*** {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  ***REMOVED*** else if (basePlacement === 'right'***REMOVED*** {
    popper.top += offsets[0];
    popper.left += offsets[1];
  ***REMOVED*** else if (basePlacement === 'top'***REMOVED*** {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  ***REMOVED*** else if (basePlacement === 'bottom'***REMOVED*** {
    popper.left += offsets[0];
    popper.top += offsets[1];
  ***REMOVED***
  data.popper = popper;
  return data;
***REMOVED***

/**
 * @function
 * @memberof Modifiers
 * @argument {Object***REMOVED*** data - The data object generated by `update` method
 * @argument {Object***REMOVED*** options - Modifiers configuration and options
 * @returns {Object***REMOVED*** The data object, properly modified
 */
function preventOverflow(data, options***REMOVED*** {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper***REMOVED***;

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement***REMOVED*** {
    boundariesElement = getOffsetParent(boundariesElement***REMOVED***;
  ***REMOVED***

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform'***REMOVED***;
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
    left = popperStyles.left,
    transform = popperStyles[transformProp];
  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed***REMOVED***;

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;
  options.boundaries = boundaries;
  var order = options.priority;
  var popper = data.offsets.popper;
  var check = {
    primary: function primary(placement***REMOVED*** {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference***REMOVED*** {
        value = Math.max(popper[placement], boundaries[placement]***REMOVED***;
      ***REMOVED***
      return defineProperty({***REMOVED***, placement, value***REMOVED***;
    ***REMOVED***,
    secondary: function secondary(placement***REMOVED*** {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference***REMOVED*** {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height***REMOVED******REMOVED***;
      ***REMOVED***
      return defineProperty({***REMOVED***, mainSide, value***REMOVED***;
    ***REMOVED***
  ***REMOVED***;
  order.forEach(function (placement***REMOVED*** {
    var side = ['left', 'top'].indexOf(placement***REMOVED*** !== -1 ? 'primary' : 'secondary';
    popper = _extends({***REMOVED***, popper, check[side](placement***REMOVED******REMOVED***;
  ***REMOVED******REMOVED***;
  data.offsets.popper = popper;
  return data;
***REMOVED***

/**
 * @function
 * @memberof Modifiers
 * @argument {Object***REMOVED*** data - The data object generated by `update` method
 * @argument {Object***REMOVED*** options - Modifiers configuration and options
 * @returns {Object***REMOVED*** The data object, properly modified
 */
function shift(data***REMOVED*** {
  var placement = data.placement;
  var basePlacement = placement.split('-'***REMOVED***[0];
  var shiftvariation = placement.split('-'***REMOVED***[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation***REMOVED*** {
    var _data$offsets = data.offsets,
      reference = _data$offsets.reference,
      popper = _data$offsets.popper;
    var isVertical = ['bottom', 'top'].indexOf(basePlacement***REMOVED*** !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';
    var shiftOffsets = {
      start: defineProperty({***REMOVED***, side, reference[side]***REMOVED***,
      end: defineProperty({***REMOVED***, side, reference[side] + reference[measurement] - popper[measurement]***REMOVED***
    ***REMOVED***;
    data.offsets.popper = _extends({***REMOVED***, popper, shiftOffsets[shiftvariation]***REMOVED***;
  ***REMOVED***
  return data;
***REMOVED***

/**
 * @function
 * @memberof Modifiers
 * @argument {Object***REMOVED*** data - The data object generated by update method
 * @argument {Object***REMOVED*** options - Modifiers configuration and options
 * @returns {Object***REMOVED*** The data object, properly modified
 */
function hide(data***REMOVED*** {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow'***REMOVED******REMOVED*** {
    return data;
  ***REMOVED***
  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier***REMOVED*** {
    return modifier.name === 'preventOverflow';
  ***REMOVED******REMOVED***.boundaries;
  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left***REMOVED*** {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true***REMOVED*** {
      return data;
    ***REMOVED***
    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  ***REMOVED*** else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false***REMOVED*** {
      return data;
    ***REMOVED***
    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  ***REMOVED***
  return data;
***REMOVED***

/**
 * @function
 * @memberof Modifiers
 * @argument {Object***REMOVED*** data - The data object generated by `update` method
 * @argument {Object***REMOVED*** options - Modifiers configuration and options
 * @returns {Object***REMOVED*** The data object, properly modified
 */
function inner(data***REMOVED*** {
  var placement = data.placement;
  var basePlacement = placement.split('-'***REMOVED***[0];
  var _data$offsets = data.offsets,
    popper = _data$offsets.popper,
    reference = _data$offsets.reference;
  var isHoriz = ['left', 'right'].indexOf(basePlacement***REMOVED*** !== -1;
  var subtractLength = ['top', 'left'].indexOf(basePlacement***REMOVED*** === -1;
  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0***REMOVED***;
  data.placement = getOppositePlacement(placement***REMOVED***;
  data.offsets.popper = getClientRect(popper***REMOVED***;
  return data;
***REMOVED***

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject***REMOVED*** data - The data object generated by `update` method
 * @argument {Object***REMOVED*** options - Modifiers configuration and options
 * @returns {dataObject***REMOVED*** The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number***REMOVED*** order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean***REMOVED*** enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn***REMOVED*** */
    fn: shift
  ***REMOVED***,
  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`***REMOVED***, or a pair of values
   * as `String` divided by a comma or one (or more***REMOVED*** white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373***REMOVED***.
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number***REMOVED*** order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean***REMOVED*** enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn***REMOVED*** */
    fn: offset,
    /** @prop {Number|String***REMOVED*** offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  ***REMOVED***,
  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave***REMOVED***
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number***REMOVED*** order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean***REMOVED*** enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn***REMOVED*** */
    fn: preventOverflow,
    /**
     * @prop {Array***REMOVED*** [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number***REMOVED*** padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement***REMOVED*** boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  ***REMOVED***,
  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number***REMOVED*** order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean***REMOVED*** enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn***REMOVED*** */
    fn: keepTogether
  ***REMOVED***,
  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number***REMOVED*** order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean***REMOVED*** enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn***REMOVED*** */
    fn: arrow,
    /** @prop {String|HTMLElement***REMOVED*** element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  ***REMOVED***,
  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number***REMOVED*** order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean***REMOVED*** enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn***REMOVED*** */
    fn: flip,
    /**
     * @prop {String|Array***REMOVED*** behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations***REMOVED***
     */
    behavior: 'flip',
    /**
     * @prop {number***REMOVED*** padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement***REMOVED*** boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled***REMOVED***
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean***REMOVED*** flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean***REMOVED*** flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  ***REMOVED***,
  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number***REMOVED*** order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean***REMOVED*** enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn***REMOVED*** */
    fn: inner
  ***REMOVED***,
  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number***REMOVED*** order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean***REMOVED*** enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn***REMOVED*** */
    fn: hide
  ***REMOVED***,
  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number***REMOVED*** order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean***REMOVED*** enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn***REMOVED*** */
    fn: computeStyle,
    /**
     * @prop {Boolean***REMOVED*** gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string***REMOVED*** [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`***REMOVED***. AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string***REMOVED*** [x='left']
     * Where to anchor the Y axis (`left` or `right`***REMOVED***. AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  ***REMOVED***,
  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number***REMOVED*** order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean***REMOVED*** enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn***REMOVED*** */
    fn: applyStyle,
    /** @prop {Function***REMOVED*** */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean***REMOVED*** gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  ***REMOVED***
***REMOVED***;

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object***REMOVED*** data.instance The Popper.js instance
 * @property {String***REMOVED*** data.placement Placement applied to popper
 * @property {String***REMOVED*** data.originalPlacement Placement originally defined on init
 * @property {Boolean***REMOVED*** data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean***REMOVED*** data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement***REMOVED*** data.arrowElement Node used as arrow by arrow modifier
 * @property {Object***REMOVED*** data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`***REMOVED***
 * @property {Object***REMOVED*** data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`***REMOVED***
 * @property {Object***REMOVED*** data.boundaries Offsets of the popper boundaries
 * @property {Object***REMOVED*** data.offsets The measurements of popper, reference and arrow elements
 * @property {Object***REMOVED*** data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object***REMOVED*** data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object***REMOVED*** data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false ***REMOVED***
 *   ***REMOVED***
 * ***REMOVED******REMOVED***
 * ```
 * @type {Object***REMOVED***
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements***REMOVED*** placement='bottom'
   */
  placement: 'bottom',
  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean***REMOVED*** positionFixed=false
   */
  positionFixed: false,
  /**
   * Whether events (resize, scroll***REMOVED*** are initially enabled.
   * @prop {Boolean***REMOVED*** eventsEnabled=true
   */
  eventsEnabled: true,
  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean***REMOVED*** removeOnDestroy=false
   */
  removeOnDestroy: false,
  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate***REMOVED***
   */
  onCreate: function onCreate(***REMOVED*** {***REMOVED***,
  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate***REMOVED***
   */
  onUpdate: function onUpdate(***REMOVED*** {***REMOVED***,
  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers***REMOVED***
   */
  modifiers: modifiers
***REMOVED***;

/**
 * @callback onCreate
 * @param {dataObject***REMOVED*** data
 */

/**
 * @callback onUpdate
 * @param {dataObject***REMOVED*** data
 */

// Utils
// Methods
var Popper = function (***REMOVED*** {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject***REMOVED*** reference - The reference element used to position the popper
   * @param {Element***REMOVED*** popper - The HTML / XML element used as the popper
   * @param {Object***REMOVED*** options - Your custom options to override the ones defined in [Defaults](#defaults***REMOVED***
   * @return {Object***REMOVED*** instance - The generated Popper.js instance
   */
  function Popper(reference, popper***REMOVED*** {
    var _this = this;
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {***REMOVED***;
    classCallCheck(this, Popper***REMOVED***;
    this.scheduleUpdate = function (***REMOVED*** {
      return requestAnimationFrame(_this.update***REMOVED***;
    ***REMOVED***;

    // make update(***REMOVED*** debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this***REMOVED******REMOVED***;

    // with {***REMOVED*** we create a new object with the options inside it
    this.options = _extends({***REMOVED***, Popper.Defaults, options***REMOVED***;

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    ***REMOVED***;

    // get reference and popper elements (allow jQuery wrappers***REMOVED***
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {***REMOVED***;
    Object.keys(_extends({***REMOVED***, Popper.Defaults.modifiers, options.modifiers***REMOVED******REMOVED***.forEach(function (name***REMOVED*** {
      _this.options.modifiers[name] = _extends({***REMOVED***, Popper.Defaults.modifiers[name] || {***REMOVED***, options.modifiers ? options.modifiers[name] : {***REMOVED******REMOVED***;
    ***REMOVED******REMOVED***;

    // Refactoring modifiers' list (Object => Array***REMOVED***
    this.modifiers = Object.keys(this.options.modifiers***REMOVED***.map(function (name***REMOVED*** {
      return _extends({
        name: name
      ***REMOVED***, _this.options.modifiers[name]***REMOVED***;
    ***REMOVED******REMOVED***
    // sort the modifiers by order
    .sort(function (a, b***REMOVED*** {
      return a.order - b.order;
    ***REMOVED******REMOVED***;

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions***REMOVED*** {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad***REMOVED******REMOVED*** {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state***REMOVED***;
      ***REMOVED***
    ***REMOVED******REMOVED***;

    // fire the first update to position the popper in the right place
    this.update(***REMOVED***;
    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled***REMOVED*** {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners(***REMOVED***;
    ***REMOVED***
    this.state.eventsEnabled = eventsEnabled;
  ***REMOVED***

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs

  createClass(Popper, [{
    key: 'update',
    value: function update$$1(***REMOVED*** {
      return update.call(this***REMOVED***;
    ***REMOVED***
  ***REMOVED***, {
    key: 'destroy',
    value: function destroy$$1(***REMOVED*** {
      return destroy.call(this***REMOVED***;
    ***REMOVED***
  ***REMOVED***, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1(***REMOVED*** {
      return enableEventListeners.call(this***REMOVED***;
    ***REMOVED***
  ***REMOVED***, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1(***REMOVED*** {
      return disableEventListeners.call(this***REMOVED***;
    ***REMOVED***

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */

    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object***REMOVED***
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */
  ***REMOVED***]***REMOVED***;

  return Popper;
***REMOVED***(***REMOVED***;

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode***REMOVED***;
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function***REMOVED*** data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number***REMOVED*** data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number***REMOVED*** data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */

Popper.Utils = (typeof window !== 'undefined' ? window : global***REMOVED***.PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;
/* harmony default export */ __webpack_exports__["default"] = (Popper***REMOVED***;
/* WEBPACK VAR INJECTION */***REMOVED***.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"***REMOVED******REMOVED******REMOVED***

/***/ ***REMOVED******REMOVED***,

/***/ "./node_modules/stimulus/dist/stimulus.js":
/*!************************************************!*\
  !*** ./node_modules/stimulus/dist/stimulus.js ***!
  \************************************************/
/*! exports provided: Application, AttributeObserver, Context, Controller, ElementObserver, IndexedMultimap, Multimap, SelectorObserver, StringMapObserver, TokenListObserver, ValueListObserver, add, defaultSchema, del, fetch, prune */
/***/ (function(module, __webpack_exports__, __webpack_require__***REMOVED*** {

"use strict";
__webpack_require__.r(__webpack_exports__***REMOVED***;
/* harmony export (binding***REMOVED*** */ __webpack_require__.d(__webpack_exports__, "Application", function(***REMOVED*** { return Application; ***REMOVED******REMOVED***;
/* harmony export (binding***REMOVED*** */ __webpack_require__.d(__webpack_exports__, "AttributeObserver", function(***REMOVED*** { return AttributeObserver; ***REMOVED******REMOVED***;
/* harmony export (binding***REMOVED*** */ __webpack_require__.d(__webpack_exports__, "Context", function(***REMOVED*** { return Context; ***REMOVED******REMOVED***;
/* harmony export (binding***REMOVED*** */ __webpack_require__.d(__webpack_exports__, "Controller", function(***REMOVED*** { return Controller; ***REMOVED******REMOVED***;
/* harmony export (binding***REMOVED*** */ __webpack_require__.d(__webpack_exports__, "ElementObserver", function(***REMOVED*** { return ElementObserver; ***REMOVED******REMOVED***;
/* harmony export (binding***REMOVED*** */ __webpack_require__.d(__webpack_exports__, "IndexedMultimap", function(***REMOVED*** { return IndexedMultimap; ***REMOVED******REMOVED***;
/* harmony export (binding***REMOVED*** */ __webpack_require__.d(__webpack_exports__, "Multimap", function(***REMOVED*** { return Multimap; ***REMOVED******REMOVED***;
/* harmony export (binding***REMOVED*** */ __webpack_require__.d(__webpack_exports__, "SelectorObserver", function(***REMOVED*** { return SelectorObserver; ***REMOVED******REMOVED***;
/* harmony export (binding***REMOVED*** */ __webpack_require__.d(__webpack_exports__, "StringMapObserver", function(***REMOVED*** { return StringMapObserver; ***REMOVED******REMOVED***;
/* harmony export (binding***REMOVED*** */ __webpack_require__.d(__webpack_exports__, "TokenListObserver", function(***REMOVED*** { return TokenListObserver; ***REMOVED******REMOVED***;
/* harmony export (binding***REMOVED*** */ __webpack_require__.d(__webpack_exports__, "ValueListObserver", function(***REMOVED*** { return ValueListObserver; ***REMOVED******REMOVED***;
/* harmony export (binding***REMOVED*** */ __webpack_require__.d(__webpack_exports__, "add", function(***REMOVED*** { return add; ***REMOVED******REMOVED***;
/* harmony export (binding***REMOVED*** */ __webpack_require__.d(__webpack_exports__, "defaultSchema", function(***REMOVED*** { return defaultSchema; ***REMOVED******REMOVED***;
/* harmony export (binding***REMOVED*** */ __webpack_require__.d(__webpack_exports__, "del", function(***REMOVED*** { return del; ***REMOVED******REMOVED***;
/* harmony export (binding***REMOVED*** */ __webpack_require__.d(__webpack_exports__, "fetch", function(***REMOVED*** { return fetch; ***REMOVED******REMOVED***;
/* harmony export (binding***REMOVED*** */ __webpack_require__.d(__webpack_exports__, "prune", function(***REMOVED*** { return prune; ***REMOVED******REMOVED***;
function _slicedToArray(arr, i***REMOVED*** { return _arrayWithHoles(arr***REMOVED*** || _iterableToArrayLimit(arr, i***REMOVED*** || _unsupportedIterableToArray(arr, i***REMOVED*** || _nonIterableRest(***REMOVED***; ***REMOVED***
function _nonIterableRest(***REMOVED*** { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator](***REMOVED*** method."***REMOVED***; ***REMOVED***
function _unsupportedIterableToArray(o, minLen***REMOVED*** { if (!o***REMOVED*** return; if (typeof o === "string"***REMOVED*** return _arrayLikeToArray(o, minLen***REMOVED***; var n = Object.prototype.toString.call(o***REMOVED***.slice(8, -1***REMOVED***; if (n === "Object" && o.constructor***REMOVED*** n = o.constructor.name; if (n === "Map" || n === "Set"***REMOVED*** return Array.from(o***REMOVED***; if (n === "Arguments" || /^(?:Ui|I***REMOVED***nt(?:8|16|32***REMOVED***(?:Clamped***REMOVED***?Array$/.test(n***REMOVED******REMOVED*** return _arrayLikeToArray(o, minLen***REMOVED***; ***REMOVED***
function _arrayLikeToArray(arr, len***REMOVED*** { if (len == null || len > arr.length***REMOVED*** len = arr.length; for (var i = 0, arr2 = new Array(len***REMOVED***; i < len; i++***REMOVED*** arr2[i] = arr[i]; return arr2; ***REMOVED***
function _iterableToArrayLimit(arr, i***REMOVED*** { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i***REMOVED*** { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr***REMOVED******REMOVED***.next, 0 === i***REMOVED*** { if (Object(_i***REMOVED*** !== _i***REMOVED*** return; _n = !1; ***REMOVED*** else for (; !(_n = (_s = _x.call(_i***REMOVED******REMOVED***.done***REMOVED*** && (_arr.push(_s.value***REMOVED***, _arr.length !== i***REMOVED***; _n = !0***REMOVED***; ***REMOVED*** catch (err***REMOVED*** { _d = !0, _e = err; ***REMOVED*** finally { try { if (!_n && null != _i.return && (_r = _i.return(***REMOVED***, Object(_r***REMOVED*** !== _r***REMOVED******REMOVED*** return; ***REMOVED*** finally { if (_d***REMOVED*** throw _e; ***REMOVED*** ***REMOVED*** return _arr; ***REMOVED*** ***REMOVED***
function _arrayWithHoles(arr***REMOVED*** { if (Array.isArray(arr***REMOVED******REMOVED*** return arr; ***REMOVED***
/*
Stimulus 3.2.1
Copyright © 2022 Basecamp, LLC
 */
class EventListener {
  constructor(eventTarget, eventName, eventOptions***REMOVED*** {
    this.eventTarget = eventTarget;
    this.eventName = eventName;
    this.eventOptions = eventOptions;
    this.unorderedBindings = new Set(***REMOVED***;
  ***REMOVED***
  connect(***REMOVED*** {
    this.eventTarget.addEventListener(this.eventName, this, this.eventOptions***REMOVED***;
  ***REMOVED***
  disconnect(***REMOVED*** {
    this.eventTarget.removeEventListener(this.eventName, this, this.eventOptions***REMOVED***;
  ***REMOVED***
  bindingConnected(binding***REMOVED*** {
    this.unorderedBindings.add(binding***REMOVED***;
  ***REMOVED***
  bindingDisconnected(binding***REMOVED*** {
    this.unorderedBindings.delete(binding***REMOVED***;
  ***REMOVED***
  handleEvent(event***REMOVED*** {
    const extendedEvent = extendEvent(event***REMOVED***;
    for (const binding of this.bindings***REMOVED*** {
      if (extendedEvent.immediatePropagationStopped***REMOVED*** {
        break;
      ***REMOVED*** else {
        binding.handleEvent(extendedEvent***REMOVED***;
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
  hasBindings(***REMOVED*** {
    return this.unorderedBindings.size > 0;
  ***REMOVED***
  get bindings(***REMOVED*** {
    return Array.from(this.unorderedBindings***REMOVED***.sort((left, right***REMOVED*** => {
      const leftIndex = left.index,
        rightIndex = right.index;
      return leftIndex < rightIndex ? -1 : leftIndex > rightIndex ? 1 : 0;
    ***REMOVED******REMOVED***;
  ***REMOVED***
***REMOVED***
function extendEvent(event***REMOVED*** {
  if ("immediatePropagationStopped" in event***REMOVED*** {
    return event;
  ***REMOVED*** else {
    const stopImmediatePropagation = event.stopImmediatePropagation;
    return Object.assign(event, {
      immediatePropagationStopped: false,
      stopImmediatePropagation(***REMOVED*** {
        this.immediatePropagationStopped = true;
        stopImmediatePropagation.call(this***REMOVED***;
      ***REMOVED***
    ***REMOVED******REMOVED***;
  ***REMOVED***
***REMOVED***
class Dispatcher {
  constructor(application***REMOVED*** {
    this.application = application;
    this.eventListenerMaps = new Map(***REMOVED***;
    this.started = false;
  ***REMOVED***
  start(***REMOVED*** {
    if (!this.started***REMOVED*** {
      this.started = true;
      this.eventListeners.forEach(eventListener => eventListener.connect(***REMOVED******REMOVED***;
    ***REMOVED***
  ***REMOVED***
  stop(***REMOVED*** {
    if (this.started***REMOVED*** {
      this.started = false;
      this.eventListeners.forEach(eventListener => eventListener.disconnect(***REMOVED******REMOVED***;
    ***REMOVED***
  ***REMOVED***
  get eventListeners(***REMOVED*** {
    return Array.from(this.eventListenerMaps.values(***REMOVED******REMOVED***.reduce((listeners, map***REMOVED*** => listeners.concat(Array.from(map.values(***REMOVED******REMOVED******REMOVED***, []***REMOVED***;
  ***REMOVED***
  bindingConnected(binding***REMOVED*** {
    this.fetchEventListenerForBinding(binding***REMOVED***.bindingConnected(binding***REMOVED***;
  ***REMOVED***
  bindingDisconnected(binding***REMOVED*** {
    let clearEventListeners = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    this.fetchEventListenerForBinding(binding***REMOVED***.bindingDisconnected(binding***REMOVED***;
    if (clearEventListeners***REMOVED*** this.clearEventListenersForBinding(binding***REMOVED***;
  ***REMOVED***
  handleError(error, message***REMOVED*** {
    let detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {***REMOVED***;
    this.application.handleError(error, `Error ${message***REMOVED***`, detail***REMOVED***;
  ***REMOVED***
  clearEventListenersForBinding(binding***REMOVED*** {
    const eventListener = this.fetchEventListenerForBinding(binding***REMOVED***;
    if (!eventListener.hasBindings(***REMOVED******REMOVED*** {
      eventListener.disconnect(***REMOVED***;
      this.removeMappedEventListenerFor(binding***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  removeMappedEventListenerFor(binding***REMOVED*** {
    const eventTarget = binding.eventTarget,
      eventName = binding.eventName,
      eventOptions = binding.eventOptions;
    const eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget***REMOVED***;
    const cacheKey = this.cacheKey(eventName, eventOptions***REMOVED***;
    eventListenerMap.delete(cacheKey***REMOVED***;
    if (eventListenerMap.size == 0***REMOVED*** this.eventListenerMaps.delete(eventTarget***REMOVED***;
  ***REMOVED***
  fetchEventListenerForBinding(binding***REMOVED*** {
    const eventTarget = binding.eventTarget,
      eventName = binding.eventName,
      eventOptions = binding.eventOptions;
    return this.fetchEventListener(eventTarget, eventName, eventOptions***REMOVED***;
  ***REMOVED***
  fetchEventListener(eventTarget, eventName, eventOptions***REMOVED*** {
    const eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget***REMOVED***;
    const cacheKey = this.cacheKey(eventName, eventOptions***REMOVED***;
    let eventListener = eventListenerMap.get(cacheKey***REMOVED***;
    if (!eventListener***REMOVED*** {
      eventListener = this.createEventListener(eventTarget, eventName, eventOptions***REMOVED***;
      eventListenerMap.set(cacheKey, eventListener***REMOVED***;
    ***REMOVED***
    return eventListener;
  ***REMOVED***
  createEventListener(eventTarget, eventName, eventOptions***REMOVED*** {
    const eventListener = new EventListener(eventTarget, eventName, eventOptions***REMOVED***;
    if (this.started***REMOVED*** {
      eventListener.connect(***REMOVED***;
    ***REMOVED***
    return eventListener;
  ***REMOVED***
  fetchEventListenerMapForEventTarget(eventTarget***REMOVED*** {
    let eventListenerMap = this.eventListenerMaps.get(eventTarget***REMOVED***;
    if (!eventListenerMap***REMOVED*** {
      eventListenerMap = new Map(***REMOVED***;
      this.eventListenerMaps.set(eventTarget, eventListenerMap***REMOVED***;
    ***REMOVED***
    return eventListenerMap;
  ***REMOVED***
  cacheKey(eventName, eventOptions***REMOVED*** {
    const parts = [eventName];
    Object.keys(eventOptions***REMOVED***.sort(***REMOVED***.forEach(key => {
      parts.push(`${eventOptions[key] ? "" : "!"***REMOVED***${key***REMOVED***`***REMOVED***;
    ***REMOVED******REMOVED***;
    return parts.join(":"***REMOVED***;
  ***REMOVED***
***REMOVED***
const defaultActionDescriptorFilters = {
  stop(_ref***REMOVED*** {
    let event = _ref.event,
      value = _ref.value;
    if (value***REMOVED*** event.stopPropagation(***REMOVED***;
    return true;
  ***REMOVED***,
  prevent(_ref2***REMOVED*** {
    let event = _ref2.event,
      value = _ref2.value;
    if (value***REMOVED*** event.preventDefault(***REMOVED***;
    return true;
  ***REMOVED***,
  self(_ref3***REMOVED*** {
    let event = _ref3.event,
      value = _ref3.value,
      element = _ref3.element;
    if (value***REMOVED*** {
      return element === event.target;
    ***REMOVED*** else {
      return true;
    ***REMOVED***
  ***REMOVED***
***REMOVED***;
const descriptorPattern = /^(?:(.+?***REMOVED***(?:\.(.+?***REMOVED******REMOVED***?(?:@(window|document***REMOVED******REMOVED***?->***REMOVED***?(.+?***REMOVED***(?:#([^:]+?***REMOVED******REMOVED***(?::(.+***REMOVED******REMOVED***?$/;
function parseActionDescriptorString(descriptorString***REMOVED*** {
  const source = descriptorString.trim(***REMOVED***;
  const matches = source.match(descriptorPattern***REMOVED*** || [];
  let eventName = matches[1];
  let keyFilter = matches[2];
  if (keyFilter && !["keydown", "keyup", "keypress"].includes(eventName***REMOVED******REMOVED*** {
    eventName += `.${keyFilter***REMOVED***`;
    keyFilter = "";
  ***REMOVED***
  return {
    eventTarget: parseEventTarget(matches[3]***REMOVED***,
    eventName,
    eventOptions: matches[6] ? parseEventOptions(matches[6]***REMOVED*** : {***REMOVED***,
    identifier: matches[4],
    methodName: matches[5],
    keyFilter
  ***REMOVED***;
***REMOVED***
function parseEventTarget(eventTargetName***REMOVED*** {
  if (eventTargetName == "window"***REMOVED*** {
    return window;
  ***REMOVED*** else if (eventTargetName == "document"***REMOVED*** {
    return document;
  ***REMOVED***
***REMOVED***
function parseEventOptions(eventOptions***REMOVED*** {
  return eventOptions.split(":"***REMOVED***.reduce((options, token***REMOVED*** => Object.assign(options, {
    [token.replace(/^!/, ""***REMOVED***]: !/^!/.test(token***REMOVED***
  ***REMOVED******REMOVED***, {***REMOVED******REMOVED***;
***REMOVED***
function stringifyEventTarget(eventTarget***REMOVED*** {
  if (eventTarget == window***REMOVED*** {
    return "window";
  ***REMOVED*** else if (eventTarget == document***REMOVED*** {
    return "document";
  ***REMOVED***
***REMOVED***
function camelize(value***REMOVED*** {
  return value.replace(/(?:[_-]***REMOVED***([a-z0-9]***REMOVED***/g, (_, char***REMOVED*** => char.toUpperCase(***REMOVED******REMOVED***;
***REMOVED***
function namespaceCamelize(value***REMOVED*** {
  return camelize(value.replace(/--/g, "-"***REMOVED***.replace(/__/g, "_"***REMOVED******REMOVED***;
***REMOVED***
function capitalize(value***REMOVED*** {
  return value.charAt(0***REMOVED***.toUpperCase(***REMOVED*** + value.slice(1***REMOVED***;
***REMOVED***
function dasherize(value***REMOVED*** {
  return value.replace(/([A-Z]***REMOVED***/g, (_, char***REMOVED*** => `-${char.toLowerCase(***REMOVED******REMOVED***`***REMOVED***;
***REMOVED***
function tokenize(value***REMOVED*** {
  return value.match(/[^\s]+/g***REMOVED*** || [];
***REMOVED***
class Action {
  constructor(element, index, descriptor, schema***REMOVED*** {
    this.element = element;
    this.index = index;
    this.eventTarget = descriptor.eventTarget || element;
    this.eventName = descriptor.eventName || getDefaultEventNameForElement(element***REMOVED*** || error("missing event name"***REMOVED***;
    this.eventOptions = descriptor.eventOptions || {***REMOVED***;
    this.identifier = descriptor.identifier || error("missing identifier"***REMOVED***;
    this.methodName = descriptor.methodName || error("missing method name"***REMOVED***;
    this.keyFilter = descriptor.keyFilter || "";
    this.schema = schema;
  ***REMOVED***
  static forToken(token, schema***REMOVED*** {
    return new this(token.element, token.index, parseActionDescriptorString(token.content***REMOVED***, schema***REMOVED***;
  ***REMOVED***
  toString(***REMOVED*** {
    const eventFilter = this.keyFilter ? `.${this.keyFilter***REMOVED***` : "";
    const eventTarget = this.eventTargetName ? `@${this.eventTargetName***REMOVED***` : "";
    return `${this.eventName***REMOVED***${eventFilter***REMOVED***${eventTarget***REMOVED***->${this.identifier***REMOVED***#${this.methodName***REMOVED***`;
  ***REMOVED***
  isFilterTarget(event***REMOVED*** {
    if (!this.keyFilter***REMOVED*** {
      return false;
    ***REMOVED***
    const filteres = this.keyFilter.split("+"***REMOVED***;
    const modifiers = ["meta", "ctrl", "alt", "shift"];
    const _modifiers$map = modifiers.map(modifier => filteres.includes(modifier***REMOVED******REMOVED***,
      _modifiers$map2 = _slicedToArray(_modifiers$map, 4***REMOVED***,
      meta = _modifiers$map2[0],
      ctrl = _modifiers$map2[1],
      alt = _modifiers$map2[2],
      shift = _modifiers$map2[3];
    if (event.metaKey !== meta || event.ctrlKey !== ctrl || event.altKey !== alt || event.shiftKey !== shift***REMOVED*** {
      return true;
    ***REMOVED***
    const standardFilter = filteres.filter(key => !modifiers.includes(key***REMOVED******REMOVED***[0];
    if (!standardFilter***REMOVED*** {
      return false;
    ***REMOVED***
    if (!Object.prototype.hasOwnProperty.call(this.keyMappings, standardFilter***REMOVED******REMOVED*** {
      error(`contains unknown key filter: ${this.keyFilter***REMOVED***`***REMOVED***;
    ***REMOVED***
    return this.keyMappings[standardFilter].toLowerCase(***REMOVED*** !== event.key.toLowerCase(***REMOVED***;
  ***REMOVED***
  get params(***REMOVED*** {
    const params = {***REMOVED***;
    const pattern = new RegExp(`^data-${this.identifier***REMOVED***-(.+***REMOVED***-param$`, "i"***REMOVED***;
    for (const _ref4 of Array.from(this.element.attributes***REMOVED******REMOVED*** {
      const name = _ref4.name;
      const value = _ref4.value;
      const match = name.match(pattern***REMOVED***;
      const key = match && match[1];
      if (key***REMOVED*** {
        params[camelize(key***REMOVED***] = typecast(value***REMOVED***;
      ***REMOVED***
    ***REMOVED***
    return params;
  ***REMOVED***
  get eventTargetName(***REMOVED*** {
    return stringifyEventTarget(this.eventTarget***REMOVED***;
  ***REMOVED***
  get keyMappings(***REMOVED*** {
    return this.schema.keyMappings;
  ***REMOVED***
***REMOVED***
const defaultEventNames = {
  a: (***REMOVED*** => "click",
  button: (***REMOVED*** => "click",
  form: (***REMOVED*** => "submit",
  details: (***REMOVED*** => "toggle",
  input: e => e.getAttribute("type"***REMOVED*** == "submit" ? "click" : "input",
  select: (***REMOVED*** => "change",
  textarea: (***REMOVED*** => "input"
***REMOVED***;
function getDefaultEventNameForElement(element***REMOVED*** {
  const tagName = element.tagName.toLowerCase(***REMOVED***;
  if (tagName in defaultEventNames***REMOVED*** {
    return defaultEventNames[tagName](element***REMOVED***;
  ***REMOVED***
***REMOVED***
function error(message***REMOVED*** {
  throw new Error(message***REMOVED***;
***REMOVED***
function typecast(value***REMOVED*** {
  try {
    return JSON.parse(value***REMOVED***;
  ***REMOVED*** catch (o_O***REMOVED*** {
    return value;
  ***REMOVED***
***REMOVED***
class Binding {
  constructor(context, action***REMOVED*** {
    this.context = context;
    this.action = action;
  ***REMOVED***
  get index(***REMOVED*** {
    return this.action.index;
  ***REMOVED***
  get eventTarget(***REMOVED*** {
    return this.action.eventTarget;
  ***REMOVED***
  get eventOptions(***REMOVED*** {
    return this.action.eventOptions;
  ***REMOVED***
  get identifier(***REMOVED*** {
    return this.context.identifier;
  ***REMOVED***
  handleEvent(event***REMOVED*** {
    if (this.willBeInvokedByEvent(event***REMOVED*** && this.applyEventModifiers(event***REMOVED******REMOVED*** {
      this.invokeWithEvent(event***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  get eventName(***REMOVED*** {
    return this.action.eventName;
  ***REMOVED***
  get method(***REMOVED*** {
    const method = this.controller[this.methodName];
    if (typeof method == "function"***REMOVED*** {
      return method;
    ***REMOVED***
    throw new Error(`Action "${this.action***REMOVED***" references undefined method "${this.methodName***REMOVED***"`***REMOVED***;
  ***REMOVED***
  applyEventModifiers(event***REMOVED*** {
    const element = this.action.element;
    const actionDescriptorFilters = this.context.application.actionDescriptorFilters;
    let passes = true;
    for (const _ref5 of Object.entries(this.eventOptions***REMOVED******REMOVED*** {
      var _ref6 = _slicedToArray(_ref5, 2***REMOVED***;
      const name = _ref6[0];
      const value = _ref6[1];
      if (name in actionDescriptorFilters***REMOVED*** {
        const filter = actionDescriptorFilters[name];
        passes = passes && filter({
          name,
          value,
          event,
          element
        ***REMOVED******REMOVED***;
      ***REMOVED*** else {
        continue;
      ***REMOVED***
    ***REMOVED***
    return passes;
  ***REMOVED***
  invokeWithEvent(event***REMOVED*** {
    const target = event.target,
      currentTarget = event.currentTarget;
    try {
      const params = this.action.params;
      const actionEvent = Object.assign(event, {
        params
      ***REMOVED******REMOVED***;
      this.method.call(this.controller, actionEvent***REMOVED***;
      this.context.logDebugActivity(this.methodName, {
        event,
        target,
        currentTarget,
        action: this.methodName
      ***REMOVED******REMOVED***;
    ***REMOVED*** catch (error***REMOVED*** {
      const identifier = this.identifier,
        controller = this.controller,
        element = this.element,
        index = this.index;
      const detail = {
        identifier,
        controller,
        element,
        index,
        event
      ***REMOVED***;
      this.context.handleError(error, `invoking action "${this.action***REMOVED***"`, detail***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  willBeInvokedByEvent(event***REMOVED*** {
    const eventTarget = event.target;
    if (event instanceof KeyboardEvent && this.action.isFilterTarget(event***REMOVED******REMOVED*** {
      return false;
    ***REMOVED***
    if (this.element === eventTarget***REMOVED*** {
      return true;
    ***REMOVED*** else if (eventTarget instanceof Element && this.element.contains(eventTarget***REMOVED******REMOVED*** {
      return this.scope.containsElement(eventTarget***REMOVED***;
    ***REMOVED*** else {
      return this.scope.containsElement(this.action.element***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  get controller(***REMOVED*** {
    return this.context.controller;
  ***REMOVED***
  get methodName(***REMOVED*** {
    return this.action.methodName;
  ***REMOVED***
  get element(***REMOVED*** {
    return this.scope.element;
  ***REMOVED***
  get scope(***REMOVED*** {
    return this.context.scope;
  ***REMOVED***
***REMOVED***
class ElementObserver {
  constructor(element, delegate***REMOVED*** {
    this.mutationObserverInit = {
      attributes: true,
      childList: true,
      subtree: true
    ***REMOVED***;
    this.element = element;
    this.started = false;
    this.delegate = delegate;
    this.elements = new Set(***REMOVED***;
    this.mutationObserver = new MutationObserver(mutations => this.processMutations(mutations***REMOVED******REMOVED***;
  ***REMOVED***
  start(***REMOVED*** {
    if (!this.started***REMOVED*** {
      this.started = true;
      this.mutationObserver.observe(this.element, this.mutationObserverInit***REMOVED***;
      this.refresh(***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  pause(callback***REMOVED*** {
    if (this.started***REMOVED*** {
      this.mutationObserver.disconnect(***REMOVED***;
      this.started = false;
    ***REMOVED***
    callback(***REMOVED***;
    if (!this.started***REMOVED*** {
      this.mutationObserver.observe(this.element, this.mutationObserverInit***REMOVED***;
      this.started = true;
    ***REMOVED***
  ***REMOVED***
  stop(***REMOVED*** {
    if (this.started***REMOVED*** {
      this.mutationObserver.takeRecords(***REMOVED***;
      this.mutationObserver.disconnect(***REMOVED***;
      this.started = false;
    ***REMOVED***
  ***REMOVED***
  refresh(***REMOVED*** {
    if (this.started***REMOVED*** {
      const matches = new Set(this.matchElementsInTree(***REMOVED******REMOVED***;
      for (const element of Array.from(this.elements***REMOVED******REMOVED*** {
        if (!matches.has(element***REMOVED******REMOVED*** {
          this.removeElement(element***REMOVED***;
        ***REMOVED***
      ***REMOVED***
      for (const element of Array.from(matches***REMOVED******REMOVED*** {
        this.addElement(element***REMOVED***;
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
  processMutations(mutations***REMOVED*** {
    if (this.started***REMOVED*** {
      for (const mutation of mutations***REMOVED*** {
        this.processMutation(mutation***REMOVED***;
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
  processMutation(mutation***REMOVED*** {
    if (mutation.type == "attributes"***REMOVED*** {
      this.processAttributeChange(mutation.target, mutation.attributeName***REMOVED***;
    ***REMOVED*** else if (mutation.type == "childList"***REMOVED*** {
      this.processRemovedNodes(mutation.removedNodes***REMOVED***;
      this.processAddedNodes(mutation.addedNodes***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  processAttributeChange(node, attributeName***REMOVED*** {
    const element = node;
    if (this.elements.has(element***REMOVED******REMOVED*** {
      if (this.delegate.elementAttributeChanged && this.matchElement(element***REMOVED******REMOVED*** {
        this.delegate.elementAttributeChanged(element, attributeName***REMOVED***;
      ***REMOVED*** else {
        this.removeElement(element***REMOVED***;
      ***REMOVED***
    ***REMOVED*** else if (this.matchElement(element***REMOVED******REMOVED*** {
      this.addElement(element***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  processRemovedNodes(nodes***REMOVED*** {
    for (const node of Array.from(nodes***REMOVED******REMOVED*** {
      const element = this.elementFromNode(node***REMOVED***;
      if (element***REMOVED*** {
        this.processTree(element, this.removeElement***REMOVED***;
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
  processAddedNodes(nodes***REMOVED*** {
    for (const node of Array.from(nodes***REMOVED******REMOVED*** {
      const element = this.elementFromNode(node***REMOVED***;
      if (element && this.elementIsActive(element***REMOVED******REMOVED*** {
        this.processTree(element, this.addElement***REMOVED***;
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
  matchElement(element***REMOVED*** {
    return this.delegate.matchElement(element***REMOVED***;
  ***REMOVED***
  matchElementsInTree(***REMOVED*** {
    let tree = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.element;
    return this.delegate.matchElementsInTree(tree***REMOVED***;
  ***REMOVED***
  processTree(tree, processor***REMOVED*** {
    for (const element of this.matchElementsInTree(tree***REMOVED******REMOVED*** {
      processor.call(this, element***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  elementFromNode(node***REMOVED*** {
    if (node.nodeType == Node.ELEMENT_NODE***REMOVED*** {
      return node;
    ***REMOVED***
  ***REMOVED***
  elementIsActive(element***REMOVED*** {
    if (element.isConnected != this.element.isConnected***REMOVED*** {
      return false;
    ***REMOVED*** else {
      return this.element.contains(element***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  addElement(element***REMOVED*** {
    if (!this.elements.has(element***REMOVED******REMOVED*** {
      if (this.elementIsActive(element***REMOVED******REMOVED*** {
        this.elements.add(element***REMOVED***;
        if (this.delegate.elementMatched***REMOVED*** {
          this.delegate.elementMatched(element***REMOVED***;
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
  removeElement(element***REMOVED*** {
    if (this.elements.has(element***REMOVED******REMOVED*** {
      this.elements.delete(element***REMOVED***;
      if (this.delegate.elementUnmatched***REMOVED*** {
        this.delegate.elementUnmatched(element***REMOVED***;
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
***REMOVED***
class AttributeObserver {
  constructor(element, attributeName, delegate***REMOVED*** {
    this.attributeName = attributeName;
    this.delegate = delegate;
    this.elementObserver = new ElementObserver(element, this***REMOVED***;
  ***REMOVED***
  get element(***REMOVED*** {
    return this.elementObserver.element;
  ***REMOVED***
  get selector(***REMOVED*** {
    return `[${this.attributeName***REMOVED***]`;
  ***REMOVED***
  start(***REMOVED*** {
    this.elementObserver.start(***REMOVED***;
  ***REMOVED***
  pause(callback***REMOVED*** {
    this.elementObserver.pause(callback***REMOVED***;
  ***REMOVED***
  stop(***REMOVED*** {
    this.elementObserver.stop(***REMOVED***;
  ***REMOVED***
  refresh(***REMOVED*** {
    this.elementObserver.refresh(***REMOVED***;
  ***REMOVED***
  get started(***REMOVED*** {
    return this.elementObserver.started;
  ***REMOVED***
  matchElement(element***REMOVED*** {
    return element.hasAttribute(this.attributeName***REMOVED***;
  ***REMOVED***
  matchElementsInTree(tree***REMOVED*** {
    const match = this.matchElement(tree***REMOVED*** ? [tree] : [];
    const matches = Array.from(tree.querySelectorAll(this.selector***REMOVED******REMOVED***;
    return match.concat(matches***REMOVED***;
  ***REMOVED***
  elementMatched(element***REMOVED*** {
    if (this.delegate.elementMatchedAttribute***REMOVED*** {
      this.delegate.elementMatchedAttribute(element, this.attributeName***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  elementUnmatched(element***REMOVED*** {
    if (this.delegate.elementUnmatchedAttribute***REMOVED*** {
      this.delegate.elementUnmatchedAttribute(element, this.attributeName***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  elementAttributeChanged(element, attributeName***REMOVED*** {
    if (this.delegate.elementAttributeValueChanged && this.attributeName == attributeName***REMOVED*** {
      this.delegate.elementAttributeValueChanged(element, attributeName***REMOVED***;
    ***REMOVED***
  ***REMOVED***
***REMOVED***
function add(map, key, value***REMOVED*** {
  fetch(map, key***REMOVED***.add(value***REMOVED***;
***REMOVED***
function del(map, key, value***REMOVED*** {
  fetch(map, key***REMOVED***.delete(value***REMOVED***;
  prune(map, key***REMOVED***;
***REMOVED***
function fetch(map, key***REMOVED*** {
  let values = map.get(key***REMOVED***;
  if (!values***REMOVED*** {
    values = new Set(***REMOVED***;
    map.set(key, values***REMOVED***;
  ***REMOVED***
  return values;
***REMOVED***
function prune(map, key***REMOVED*** {
  const values = map.get(key***REMOVED***;
  if (values != null && values.size == 0***REMOVED*** {
    map.delete(key***REMOVED***;
  ***REMOVED***
***REMOVED***
class Multimap {
  constructor(***REMOVED*** {
    this.valuesByKey = new Map(***REMOVED***;
  ***REMOVED***
  get keys(***REMOVED*** {
    return Array.from(this.valuesByKey.keys(***REMOVED******REMOVED***;
  ***REMOVED***
  get values(***REMOVED*** {
    const sets = Array.from(this.valuesByKey.values(***REMOVED******REMOVED***;
    return sets.reduce((values, set***REMOVED*** => values.concat(Array.from(set***REMOVED******REMOVED***, []***REMOVED***;
  ***REMOVED***
  get size(***REMOVED*** {
    const sets = Array.from(this.valuesByKey.values(***REMOVED******REMOVED***;
    return sets.reduce((size, set***REMOVED*** => size + set.size, 0***REMOVED***;
  ***REMOVED***
  add(key, value***REMOVED*** {
    add(this.valuesByKey, key, value***REMOVED***;
  ***REMOVED***
  delete(key, value***REMOVED*** {
    del(this.valuesByKey, key, value***REMOVED***;
  ***REMOVED***
  has(key, value***REMOVED*** {
    const values = this.valuesByKey.get(key***REMOVED***;
    return values != null && values.has(value***REMOVED***;
  ***REMOVED***
  hasKey(key***REMOVED*** {
    return this.valuesByKey.has(key***REMOVED***;
  ***REMOVED***
  hasValue(value***REMOVED*** {
    const sets = Array.from(this.valuesByKey.values(***REMOVED******REMOVED***;
    return sets.some(set => set.has(value***REMOVED******REMOVED***;
  ***REMOVED***
  getValuesForKey(key***REMOVED*** {
    const values = this.valuesByKey.get(key***REMOVED***;
    return values ? Array.from(values***REMOVED*** : [];
  ***REMOVED***
  getKeysForValue(value***REMOVED*** {
    return Array.from(this.valuesByKey***REMOVED***.filter(_ref7 => {
      let _ref8 = _slicedToArray(_ref7, 2***REMOVED***,
        _key = _ref8[0],
        values = _ref8[1];
      return values.has(value***REMOVED***;
    ***REMOVED******REMOVED***.map(_ref9 => {
      let _ref10 = _slicedToArray(_ref9, 2***REMOVED***,
        key = _ref10[0],
        _values = _ref10[1];
      return key;
    ***REMOVED******REMOVED***;
  ***REMOVED***
***REMOVED***
class IndexedMultimap extends Multimap {
  constructor(***REMOVED*** {
    super(***REMOVED***;
    this.keysByValue = new Map(***REMOVED***;
  ***REMOVED***
  get values(***REMOVED*** {
    return Array.from(this.keysByValue.keys(***REMOVED******REMOVED***;
  ***REMOVED***
  add(key, value***REMOVED*** {
    super.add(key, value***REMOVED***;
    add(this.keysByValue, value, key***REMOVED***;
  ***REMOVED***
  delete(key, value***REMOVED*** {
    super.delete(key, value***REMOVED***;
    del(this.keysByValue, value, key***REMOVED***;
  ***REMOVED***
  hasValue(value***REMOVED*** {
    return this.keysByValue.has(value***REMOVED***;
  ***REMOVED***
  getKeysForValue(value***REMOVED*** {
    const set = this.keysByValue.get(value***REMOVED***;
    return set ? Array.from(set***REMOVED*** : [];
  ***REMOVED***
***REMOVED***
class SelectorObserver {
  constructor(element, selector, delegate***REMOVED*** {
    let details = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {***REMOVED***;
    this.selector = selector;
    this.details = details;
    this.elementObserver = new ElementObserver(element, this***REMOVED***;
    this.delegate = delegate;
    this.matchesByElement = new Multimap(***REMOVED***;
  ***REMOVED***
  get started(***REMOVED*** {
    return this.elementObserver.started;
  ***REMOVED***
  start(***REMOVED*** {
    this.elementObserver.start(***REMOVED***;
  ***REMOVED***
  pause(callback***REMOVED*** {
    this.elementObserver.pause(callback***REMOVED***;
  ***REMOVED***
  stop(***REMOVED*** {
    this.elementObserver.stop(***REMOVED***;
  ***REMOVED***
  refresh(***REMOVED*** {
    this.elementObserver.refresh(***REMOVED***;
  ***REMOVED***
  get element(***REMOVED*** {
    return this.elementObserver.element;
  ***REMOVED***
  matchElement(element***REMOVED*** {
    const matches = element.matches(this.selector***REMOVED***;
    if (this.delegate.selectorMatchElement***REMOVED*** {
      return matches && this.delegate.selectorMatchElement(element, this.details***REMOVED***;
    ***REMOVED***
    return matches;
  ***REMOVED***
  matchElementsInTree(tree***REMOVED*** {
    const match = this.matchElement(tree***REMOVED*** ? [tree] : [];
    const matches = Array.from(tree.querySelectorAll(this.selector***REMOVED******REMOVED***.filter(match => this.matchElement(match***REMOVED******REMOVED***;
    return match.concat(matches***REMOVED***;
  ***REMOVED***
  elementMatched(element***REMOVED*** {
    this.selectorMatched(element***REMOVED***;
  ***REMOVED***
  elementUnmatched(element***REMOVED*** {
    this.selectorUnmatched(element***REMOVED***;
  ***REMOVED***
  elementAttributeChanged(element, _attributeName***REMOVED*** {
    const matches = this.matchElement(element***REMOVED***;
    const matchedBefore = this.matchesByElement.has(this.selector, element***REMOVED***;
    if (!matches && matchedBefore***REMOVED*** {
      this.selectorUnmatched(element***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  selectorMatched(element***REMOVED*** {
    if (this.delegate.selectorMatched***REMOVED*** {
      this.delegate.selectorMatched(element, this.selector, this.details***REMOVED***;
      this.matchesByElement.add(this.selector, element***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  selectorUnmatched(element***REMOVED*** {
    this.delegate.selectorUnmatched(element, this.selector, this.details***REMOVED***;
    this.matchesByElement.delete(this.selector, element***REMOVED***;
  ***REMOVED***
***REMOVED***
class StringMapObserver {
  constructor(element, delegate***REMOVED*** {
    this.element = element;
    this.delegate = delegate;
    this.started = false;
    this.stringMap = new Map(***REMOVED***;
    this.mutationObserver = new MutationObserver(mutations => this.processMutations(mutations***REMOVED******REMOVED***;
  ***REMOVED***
  start(***REMOVED*** {
    if (!this.started***REMOVED*** {
      this.started = true;
      this.mutationObserver.observe(this.element, {
        attributes: true,
        attributeOldValue: true
      ***REMOVED******REMOVED***;
      this.refresh(***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  stop(***REMOVED*** {
    if (this.started***REMOVED*** {
      this.mutationObserver.takeRecords(***REMOVED***;
      this.mutationObserver.disconnect(***REMOVED***;
      this.started = false;
    ***REMOVED***
  ***REMOVED***
  refresh(***REMOVED*** {
    if (this.started***REMOVED*** {
      for (const attributeName of this.knownAttributeNames***REMOVED*** {
        this.refreshAttribute(attributeName, null***REMOVED***;
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
  processMutations(mutations***REMOVED*** {
    if (this.started***REMOVED*** {
      for (const mutation of mutations***REMOVED*** {
        this.processMutation(mutation***REMOVED***;
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
  processMutation(mutation***REMOVED*** {
    const attributeName = mutation.attributeName;
    if (attributeName***REMOVED*** {
      this.refreshAttribute(attributeName, mutation.oldValue***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  refreshAttribute(attributeName, oldValue***REMOVED*** {
    const key = this.delegate.getStringMapKeyForAttribute(attributeName***REMOVED***;
    if (key != null***REMOVED*** {
      if (!this.stringMap.has(attributeName***REMOVED******REMOVED*** {
        this.stringMapKeyAdded(key, attributeName***REMOVED***;
      ***REMOVED***
      const value = this.element.getAttribute(attributeName***REMOVED***;
      if (this.stringMap.get(attributeName***REMOVED*** != value***REMOVED*** {
        this.stringMapValueChanged(value, key, oldValue***REMOVED***;
      ***REMOVED***
      if (value == null***REMOVED*** {
        const oldValue = this.stringMap.get(attributeName***REMOVED***;
        this.stringMap.delete(attributeName***REMOVED***;
        if (oldValue***REMOVED*** this.stringMapKeyRemoved(key, attributeName, oldValue***REMOVED***;
      ***REMOVED*** else {
        this.stringMap.set(attributeName, value***REMOVED***;
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
  stringMapKeyAdded(key, attributeName***REMOVED*** {
    if (this.delegate.stringMapKeyAdded***REMOVED*** {
      this.delegate.stringMapKeyAdded(key, attributeName***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  stringMapValueChanged(value, key, oldValue***REMOVED*** {
    if (this.delegate.stringMapValueChanged***REMOVED*** {
      this.delegate.stringMapValueChanged(value, key, oldValue***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  stringMapKeyRemoved(key, attributeName, oldValue***REMOVED*** {
    if (this.delegate.stringMapKeyRemoved***REMOVED*** {
      this.delegate.stringMapKeyRemoved(key, attributeName, oldValue***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  get knownAttributeNames(***REMOVED*** {
    return Array.from(new Set(this.currentAttributeNames.concat(this.recordedAttributeNames***REMOVED******REMOVED******REMOVED***;
  ***REMOVED***
  get currentAttributeNames(***REMOVED*** {
    return Array.from(this.element.attributes***REMOVED***.map(attribute => attribute.name***REMOVED***;
  ***REMOVED***
  get recordedAttributeNames(***REMOVED*** {
    return Array.from(this.stringMap.keys(***REMOVED******REMOVED***;
  ***REMOVED***
***REMOVED***
class TokenListObserver {
  constructor(element, attributeName, delegate***REMOVED*** {
    this.attributeObserver = new AttributeObserver(element, attributeName, this***REMOVED***;
    this.delegate = delegate;
    this.tokensByElement = new Multimap(***REMOVED***;
  ***REMOVED***
  get started(***REMOVED*** {
    return this.attributeObserver.started;
  ***REMOVED***
  start(***REMOVED*** {
    this.attributeObserver.start(***REMOVED***;
  ***REMOVED***
  pause(callback***REMOVED*** {
    this.attributeObserver.pause(callback***REMOVED***;
  ***REMOVED***
  stop(***REMOVED*** {
    this.attributeObserver.stop(***REMOVED***;
  ***REMOVED***
  refresh(***REMOVED*** {
    this.attributeObserver.refresh(***REMOVED***;
  ***REMOVED***
  get element(***REMOVED*** {
    return this.attributeObserver.element;
  ***REMOVED***
  get attributeName(***REMOVED*** {
    return this.attributeObserver.attributeName;
  ***REMOVED***
  elementMatchedAttribute(element***REMOVED*** {
    this.tokensMatched(this.readTokensForElement(element***REMOVED******REMOVED***;
  ***REMOVED***
  elementAttributeValueChanged(element***REMOVED*** {
    const _this$refreshTokensFo = this.refreshTokensForElement(element***REMOVED***,
      _this$refreshTokensFo2 = _slicedToArray(_this$refreshTokensFo, 2***REMOVED***,
      unmatchedTokens = _this$refreshTokensFo2[0],
      matchedTokens = _this$refreshTokensFo2[1];
    this.tokensUnmatched(unmatchedTokens***REMOVED***;
    this.tokensMatched(matchedTokens***REMOVED***;
  ***REMOVED***
  elementUnmatchedAttribute(element***REMOVED*** {
    this.tokensUnmatched(this.tokensByElement.getValuesForKey(element***REMOVED******REMOVED***;
  ***REMOVED***
  tokensMatched(tokens***REMOVED*** {
    tokens.forEach(token => this.tokenMatched(token***REMOVED******REMOVED***;
  ***REMOVED***
  tokensUnmatched(tokens***REMOVED*** {
    tokens.forEach(token => this.tokenUnmatched(token***REMOVED******REMOVED***;
  ***REMOVED***
  tokenMatched(token***REMOVED*** {
    this.delegate.tokenMatched(token***REMOVED***;
    this.tokensByElement.add(token.element, token***REMOVED***;
  ***REMOVED***
  tokenUnmatched(token***REMOVED*** {
    this.delegate.tokenUnmatched(token***REMOVED***;
    this.tokensByElement.delete(token.element, token***REMOVED***;
  ***REMOVED***
  refreshTokensForElement(element***REMOVED*** {
    const previousTokens = this.tokensByElement.getValuesForKey(element***REMOVED***;
    const currentTokens = this.readTokensForElement(element***REMOVED***;
    const firstDifferingIndex = zip(previousTokens, currentTokens***REMOVED***.findIndex(_ref11 => {
      let _ref12 = _slicedToArray(_ref11, 2***REMOVED***,
        previousToken = _ref12[0],
        currentToken = _ref12[1];
      return !tokensAreEqual(previousToken, currentToken***REMOVED***;
    ***REMOVED******REMOVED***;
    if (firstDifferingIndex == -1***REMOVED*** {
      return [[], []];
    ***REMOVED*** else {
      return [previousTokens.slice(firstDifferingIndex***REMOVED***, currentTokens.slice(firstDifferingIndex***REMOVED***];
    ***REMOVED***
  ***REMOVED***
  readTokensForElement(element***REMOVED*** {
    const attributeName = this.attributeName;
    const tokenString = element.getAttribute(attributeName***REMOVED*** || "";
    return parseTokenString(tokenString, element, attributeName***REMOVED***;
  ***REMOVED***
***REMOVED***
function parseTokenString(tokenString, element, attributeName***REMOVED*** {
  return tokenString.trim(***REMOVED***.split(/\s+/***REMOVED***.filter(content => content.length***REMOVED***.map((content, index***REMOVED*** => ({
    element,
    attributeName,
    content,
    index
  ***REMOVED******REMOVED******REMOVED***;
***REMOVED***
function zip(left, right***REMOVED*** {
  const length = Math.max(left.length, right.length***REMOVED***;
  return Array.from({
    length
  ***REMOVED***, (_, index***REMOVED*** => [left[index], right[index]]***REMOVED***;
***REMOVED***
function tokensAreEqual(left, right***REMOVED*** {
  return left && right && left.index == right.index && left.content == right.content;
***REMOVED***
class ValueListObserver {
  constructor(element, attributeName, delegate***REMOVED*** {
    this.tokenListObserver = new TokenListObserver(element, attributeName, this***REMOVED***;
    this.delegate = delegate;
    this.parseResultsByToken = new WeakMap(***REMOVED***;
    this.valuesByTokenByElement = new WeakMap(***REMOVED***;
  ***REMOVED***
  get started(***REMOVED*** {
    return this.tokenListObserver.started;
  ***REMOVED***
  start(***REMOVED*** {
    this.tokenListObserver.start(***REMOVED***;
  ***REMOVED***
  stop(***REMOVED*** {
    this.tokenListObserver.stop(***REMOVED***;
  ***REMOVED***
  refresh(***REMOVED*** {
    this.tokenListObserver.refresh(***REMOVED***;
  ***REMOVED***
  get element(***REMOVED*** {
    return this.tokenListObserver.element;
  ***REMOVED***
  get attributeName(***REMOVED*** {
    return this.tokenListObserver.attributeName;
  ***REMOVED***
  tokenMatched(token***REMOVED*** {
    const element = token.element;
    const _this$fetchParseResul = this.fetchParseResultForToken(token***REMOVED***,
      value = _this$fetchParseResul.value;
    if (value***REMOVED*** {
      this.fetchValuesByTokenForElement(element***REMOVED***.set(token, value***REMOVED***;
      this.delegate.elementMatchedValue(element, value***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  tokenUnmatched(token***REMOVED*** {
    const element = token.element;
    const _this$fetchParseResul2 = this.fetchParseResultForToken(token***REMOVED***,
      value = _this$fetchParseResul2.value;
    if (value***REMOVED*** {
      this.fetchValuesByTokenForElement(element***REMOVED***.delete(token***REMOVED***;
      this.delegate.elementUnmatchedValue(element, value***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  fetchParseResultForToken(token***REMOVED*** {
    let parseResult = this.parseResultsByToken.get(token***REMOVED***;
    if (!parseResult***REMOVED*** {
      parseResult = this.parseToken(token***REMOVED***;
      this.parseResultsByToken.set(token, parseResult***REMOVED***;
    ***REMOVED***
    return parseResult;
  ***REMOVED***
  fetchValuesByTokenForElement(element***REMOVED*** {
    let valuesByToken = this.valuesByTokenByElement.get(element***REMOVED***;
    if (!valuesByToken***REMOVED*** {
      valuesByToken = new Map(***REMOVED***;
      this.valuesByTokenByElement.set(element, valuesByToken***REMOVED***;
    ***REMOVED***
    return valuesByToken;
  ***REMOVED***
  parseToken(token***REMOVED*** {
    try {
      const value = this.delegate.parseValueForToken(token***REMOVED***;
      return {
        value
      ***REMOVED***;
    ***REMOVED*** catch (error***REMOVED*** {
      return {
        error
      ***REMOVED***;
    ***REMOVED***
  ***REMOVED***
***REMOVED***
class BindingObserver {
  constructor(context, delegate***REMOVED*** {
    this.context = context;
    this.delegate = delegate;
    this.bindingsByAction = new Map(***REMOVED***;
  ***REMOVED***
  start(***REMOVED*** {
    if (!this.valueListObserver***REMOVED*** {
      this.valueListObserver = new ValueListObserver(this.element, this.actionAttribute, this***REMOVED***;
      this.valueListObserver.start(***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  stop(***REMOVED*** {
    if (this.valueListObserver***REMOVED*** {
      this.valueListObserver.stop(***REMOVED***;
      delete this.valueListObserver;
      this.disconnectAllActions(***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  get element(***REMOVED*** {
    return this.context.element;
  ***REMOVED***
  get identifier(***REMOVED*** {
    return this.context.identifier;
  ***REMOVED***
  get actionAttribute(***REMOVED*** {
    return this.schema.actionAttribute;
  ***REMOVED***
  get schema(***REMOVED*** {
    return this.context.schema;
  ***REMOVED***
  get bindings(***REMOVED*** {
    return Array.from(this.bindingsByAction.values(***REMOVED******REMOVED***;
  ***REMOVED***
  connectAction(action***REMOVED*** {
    const binding = new Binding(this.context, action***REMOVED***;
    this.bindingsByAction.set(action, binding***REMOVED***;
    this.delegate.bindingConnected(binding***REMOVED***;
  ***REMOVED***
  disconnectAction(action***REMOVED*** {
    const binding = this.bindingsByAction.get(action***REMOVED***;
    if (binding***REMOVED*** {
      this.bindingsByAction.delete(action***REMOVED***;
      this.delegate.bindingDisconnected(binding***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  disconnectAllActions(***REMOVED*** {
    this.bindings.forEach(binding => this.delegate.bindingDisconnected(binding, true***REMOVED******REMOVED***;
    this.bindingsByAction.clear(***REMOVED***;
  ***REMOVED***
  parseValueForToken(token***REMOVED*** {
    const action = Action.forToken(token, this.schema***REMOVED***;
    if (action.identifier == this.identifier***REMOVED*** {
      return action;
    ***REMOVED***
  ***REMOVED***
  elementMatchedValue(element, action***REMOVED*** {
    this.connectAction(action***REMOVED***;
  ***REMOVED***
  elementUnmatchedValue(element, action***REMOVED*** {
    this.disconnectAction(action***REMOVED***;
  ***REMOVED***
***REMOVED***
class ValueObserver {
  constructor(context, receiver***REMOVED*** {
    this.context = context;
    this.receiver = receiver;
    this.stringMapObserver = new StringMapObserver(this.element, this***REMOVED***;
    this.valueDescriptorMap = this.controller.valueDescriptorMap;
  ***REMOVED***
  start(***REMOVED*** {
    this.stringMapObserver.start(***REMOVED***;
    this.invokeChangedCallbacksForDefaultValues(***REMOVED***;
  ***REMOVED***
  stop(***REMOVED*** {
    this.stringMapObserver.stop(***REMOVED***;
  ***REMOVED***
  get element(***REMOVED*** {
    return this.context.element;
  ***REMOVED***
  get controller(***REMOVED*** {
    return this.context.controller;
  ***REMOVED***
  getStringMapKeyForAttribute(attributeName***REMOVED*** {
    if (attributeName in this.valueDescriptorMap***REMOVED*** {
      return this.valueDescriptorMap[attributeName].name;
    ***REMOVED***
  ***REMOVED***
  stringMapKeyAdded(key, attributeName***REMOVED*** {
    const descriptor = this.valueDescriptorMap[attributeName];
    if (!this.hasValue(key***REMOVED******REMOVED*** {
      this.invokeChangedCallback(key, descriptor.writer(this.receiver[key]***REMOVED***, descriptor.writer(descriptor.defaultValue***REMOVED******REMOVED***;
    ***REMOVED***
  ***REMOVED***
  stringMapValueChanged(value, name, oldValue***REMOVED*** {
    const descriptor = this.valueDescriptorNameMap[name];
    if (value === null***REMOVED*** return;
    if (oldValue === null***REMOVED*** {
      oldValue = descriptor.writer(descriptor.defaultValue***REMOVED***;
    ***REMOVED***
    this.invokeChangedCallback(name, value, oldValue***REMOVED***;
  ***REMOVED***
  stringMapKeyRemoved(key, attributeName, oldValue***REMOVED*** {
    const descriptor = this.valueDescriptorNameMap[key];
    if (this.hasValue(key***REMOVED******REMOVED*** {
      this.invokeChangedCallback(key, descriptor.writer(this.receiver[key]***REMOVED***, oldValue***REMOVED***;
    ***REMOVED*** else {
      this.invokeChangedCallback(key, descriptor.writer(descriptor.defaultValue***REMOVED***, oldValue***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  invokeChangedCallbacksForDefaultValues(***REMOVED*** {
    for (const _ref13 of this.valueDescriptors***REMOVED*** {
      const key = _ref13.key;
      const name = _ref13.name;
      const defaultValue = _ref13.defaultValue;
      const writer = _ref13.writer;
      if (defaultValue != undefined && !this.controller.data.has(key***REMOVED******REMOVED*** {
        this.invokeChangedCallback(name, writer(defaultValue***REMOVED***, undefined***REMOVED***;
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
  invokeChangedCallback(name, rawValue, rawOldValue***REMOVED*** {
    const changedMethodName = `${name***REMOVED***Changed`;
    const changedMethod = this.receiver[changedMethodName];
    if (typeof changedMethod == "function"***REMOVED*** {
      const descriptor = this.valueDescriptorNameMap[name];
      try {
        const value = descriptor.reader(rawValue***REMOVED***;
        let oldValue = rawOldValue;
        if (rawOldValue***REMOVED*** {
          oldValue = descriptor.reader(rawOldValue***REMOVED***;
        ***REMOVED***
        changedMethod.call(this.receiver, value, oldValue***REMOVED***;
      ***REMOVED*** catch (error***REMOVED*** {
        if (error instanceof TypeError***REMOVED*** {
          error.message = `Stimulus Value "${this.context.identifier***REMOVED***.${descriptor.name***REMOVED***" - ${error.message***REMOVED***`;
        ***REMOVED***
        throw error;
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
  get valueDescriptors(***REMOVED*** {
    const valueDescriptorMap = this.valueDescriptorMap;
    return Object.keys(valueDescriptorMap***REMOVED***.map(key => valueDescriptorMap[key]***REMOVED***;
  ***REMOVED***
  get valueDescriptorNameMap(***REMOVED*** {
    const descriptors = {***REMOVED***;
    Object.keys(this.valueDescriptorMap***REMOVED***.forEach(key => {
      const descriptor = this.valueDescriptorMap[key];
      descriptors[descriptor.name] = descriptor;
    ***REMOVED******REMOVED***;
    return descriptors;
  ***REMOVED***
  hasValue(attributeName***REMOVED*** {
    const descriptor = this.valueDescriptorNameMap[attributeName];
    const hasMethodName = `has${capitalize(descriptor.name***REMOVED******REMOVED***`;
    return this.receiver[hasMethodName];
  ***REMOVED***
***REMOVED***
class TargetObserver {
  constructor(context, delegate***REMOVED*** {
    this.context = context;
    this.delegate = delegate;
    this.targetsByName = new Multimap(***REMOVED***;
  ***REMOVED***
  start(***REMOVED*** {
    if (!this.tokenListObserver***REMOVED*** {
      this.tokenListObserver = new TokenListObserver(this.element, this.attributeName, this***REMOVED***;
      this.tokenListObserver.start(***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  stop(***REMOVED*** {
    if (this.tokenListObserver***REMOVED*** {
      this.disconnectAllTargets(***REMOVED***;
      this.tokenListObserver.stop(***REMOVED***;
      delete this.tokenListObserver;
    ***REMOVED***
  ***REMOVED***
  tokenMatched(_ref14***REMOVED*** {
    let element = _ref14.element,
      name = _ref14.content;
    if (this.scope.containsElement(element***REMOVED******REMOVED*** {
      this.connectTarget(element, name***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  tokenUnmatched(_ref15***REMOVED*** {
    let element = _ref15.element,
      name = _ref15.content;
    this.disconnectTarget(element, name***REMOVED***;
  ***REMOVED***
  connectTarget(element, name***REMOVED*** {
    var _a;
    if (!this.targetsByName.has(name, element***REMOVED******REMOVED*** {
      this.targetsByName.add(name, element***REMOVED***;
      (_a = this.tokenListObserver***REMOVED*** === null || _a === void 0 ? void 0 : _a.pause((***REMOVED*** => this.delegate.targetConnected(element, name***REMOVED******REMOVED***;
    ***REMOVED***
  ***REMOVED***
  disconnectTarget(element, name***REMOVED*** {
    var _a;
    if (this.targetsByName.has(name, element***REMOVED******REMOVED*** {
      this.targetsByName.delete(name, element***REMOVED***;
      (_a = this.tokenListObserver***REMOVED*** === null || _a === void 0 ? void 0 : _a.pause((***REMOVED*** => this.delegate.targetDisconnected(element, name***REMOVED******REMOVED***;
    ***REMOVED***
  ***REMOVED***
  disconnectAllTargets(***REMOVED*** {
    for (const name of this.targetsByName.keys***REMOVED*** {
      for (const element of this.targetsByName.getValuesForKey(name***REMOVED******REMOVED*** {
        this.disconnectTarget(element, name***REMOVED***;
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
  get attributeName(***REMOVED*** {
    return `data-${this.context.identifier***REMOVED***-target`;
  ***REMOVED***
  get element(***REMOVED*** {
    return this.context.element;
  ***REMOVED***
  get scope(***REMOVED*** {
    return this.context.scope;
  ***REMOVED***
***REMOVED***
function readInheritableStaticArrayValues(constructor, propertyName***REMOVED*** {
  const ancestors = getAncestorsForConstructor(constructor***REMOVED***;
  return Array.from(ancestors.reduce((values, constructor***REMOVED*** => {
    getOwnStaticArrayValues(constructor, propertyName***REMOVED***.forEach(name => values.add(name***REMOVED******REMOVED***;
    return values;
  ***REMOVED***, new Set(***REMOVED******REMOVED******REMOVED***;
***REMOVED***
function readInheritableStaticObjectPairs(constructor, propertyName***REMOVED*** {
  const ancestors = getAncestorsForConstructor(constructor***REMOVED***;
  return ancestors.reduce((pairs, constructor***REMOVED*** => {
    pairs.push(...getOwnStaticObjectPairs(constructor, propertyName***REMOVED******REMOVED***;
    return pairs;
  ***REMOVED***, []***REMOVED***;
***REMOVED***
function getAncestorsForConstructor(constructor***REMOVED*** {
  const ancestors = [];
  while (constructor***REMOVED*** {
    ancestors.push(constructor***REMOVED***;
    constructor = Object.getPrototypeOf(constructor***REMOVED***;
  ***REMOVED***
  return ancestors.reverse(***REMOVED***;
***REMOVED***
function getOwnStaticArrayValues(constructor, propertyName***REMOVED*** {
  const definition = constructor[propertyName];
  return Array.isArray(definition***REMOVED*** ? definition : [];
***REMOVED***
function getOwnStaticObjectPairs(constructor, propertyName***REMOVED*** {
  const definition = constructor[propertyName];
  return definition ? Object.keys(definition***REMOVED***.map(key => [key, definition[key]]***REMOVED*** : [];
***REMOVED***
class OutletObserver {
  constructor(context, delegate***REMOVED*** {
    this.context = context;
    this.delegate = delegate;
    this.outletsByName = new Multimap(***REMOVED***;
    this.outletElementsByName = new Multimap(***REMOVED***;
    this.selectorObserverMap = new Map(***REMOVED***;
  ***REMOVED***
  start(***REMOVED*** {
    if (this.selectorObserverMap.size === 0***REMOVED*** {
      this.outletDefinitions.forEach(outletName => {
        const selector = this.selector(outletName***REMOVED***;
        const details = {
          outletName
        ***REMOVED***;
        if (selector***REMOVED*** {
          this.selectorObserverMap.set(outletName, new SelectorObserver(document.body, selector, this, details***REMOVED******REMOVED***;
        ***REMOVED***
      ***REMOVED******REMOVED***;
      this.selectorObserverMap.forEach(observer => observer.start(***REMOVED******REMOVED***;
    ***REMOVED***
    this.dependentContexts.forEach(context => context.refresh(***REMOVED******REMOVED***;
  ***REMOVED***
  stop(***REMOVED*** {
    if (this.selectorObserverMap.size > 0***REMOVED*** {
      this.disconnectAllOutlets(***REMOVED***;
      this.selectorObserverMap.forEach(observer => observer.stop(***REMOVED******REMOVED***;
      this.selectorObserverMap.clear(***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  refresh(***REMOVED*** {
    this.selectorObserverMap.forEach(observer => observer.refresh(***REMOVED******REMOVED***;
  ***REMOVED***
  selectorMatched(element, _selector, _ref16***REMOVED*** {
    let outletName = _ref16.outletName;
    const outlet = this.getOutlet(element, outletName***REMOVED***;
    if (outlet***REMOVED*** {
      this.connectOutlet(outlet, element, outletName***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  selectorUnmatched(element, _selector, _ref17***REMOVED*** {
    let outletName = _ref17.outletName;
    const outlet = this.getOutletFromMap(element, outletName***REMOVED***;
    if (outlet***REMOVED*** {
      this.disconnectOutlet(outlet, element, outletName***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  selectorMatchElement(element, _ref18***REMOVED*** {
    let outletName = _ref18.outletName;
    return this.hasOutlet(element, outletName***REMOVED*** && element.matches(`[${this.context.application.schema.controllerAttribute***REMOVED***~=${outletName***REMOVED***]`***REMOVED***;
  ***REMOVED***
  connectOutlet(outlet, element, outletName***REMOVED*** {
    var _a;
    if (!this.outletElementsByName.has(outletName, element***REMOVED******REMOVED*** {
      this.outletsByName.add(outletName, outlet***REMOVED***;
      this.outletElementsByName.add(outletName, element***REMOVED***;
      (_a = this.selectorObserverMap.get(outletName***REMOVED******REMOVED*** === null || _a === void 0 ? void 0 : _a.pause((***REMOVED*** => this.delegate.outletConnected(outlet, element, outletName***REMOVED******REMOVED***;
    ***REMOVED***
  ***REMOVED***
  disconnectOutlet(outlet, element, outletName***REMOVED*** {
    var _a;
    if (this.outletElementsByName.has(outletName, element***REMOVED******REMOVED*** {
      this.outletsByName.delete(outletName, outlet***REMOVED***;
      this.outletElementsByName.delete(outletName, element***REMOVED***;
      (_a = this.selectorObserverMap.get(outletName***REMOVED******REMOVED*** === null || _a === void 0 ? void 0 : _a.pause((***REMOVED*** => this.delegate.outletDisconnected(outlet, element, outletName***REMOVED******REMOVED***;
    ***REMOVED***
  ***REMOVED***
  disconnectAllOutlets(***REMOVED*** {
    for (const outletName of this.outletElementsByName.keys***REMOVED*** {
      for (const element of this.outletElementsByName.getValuesForKey(outletName***REMOVED******REMOVED*** {
        for (const outlet of this.outletsByName.getValuesForKey(outletName***REMOVED******REMOVED*** {
          this.disconnectOutlet(outlet, element, outletName***REMOVED***;
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
  selector(outletName***REMOVED*** {
    return this.scope.outlets.getSelectorForOutletName(outletName***REMOVED***;
  ***REMOVED***
  get outletDependencies(***REMOVED*** {
    const dependencies = new Multimap(***REMOVED***;
    this.router.modules.forEach(module => {
      const constructor = module.definition.controllerConstructor;
      const outlets = readInheritableStaticArrayValues(constructor, "outlets"***REMOVED***;
      outlets.forEach(outlet => dependencies.add(outlet, module.identifier***REMOVED******REMOVED***;
    ***REMOVED******REMOVED***;
    return dependencies;
  ***REMOVED***
  get outletDefinitions(***REMOVED*** {
    return this.outletDependencies.getKeysForValue(this.identifier***REMOVED***;
  ***REMOVED***
  get dependentControllerIdentifiers(***REMOVED*** {
    return this.outletDependencies.getValuesForKey(this.identifier***REMOVED***;
  ***REMOVED***
  get dependentContexts(***REMOVED*** {
    const identifiers = this.dependentControllerIdentifiers;
    return this.router.contexts.filter(context => identifiers.includes(context.identifier***REMOVED******REMOVED***;
  ***REMOVED***
  hasOutlet(element, outletName***REMOVED*** {
    return !!this.getOutlet(element, outletName***REMOVED*** || !!this.getOutletFromMap(element, outletName***REMOVED***;
  ***REMOVED***
  getOutlet(element, outletName***REMOVED*** {
    return this.application.getControllerForElementAndIdentifier(element, outletName***REMOVED***;
  ***REMOVED***
  getOutletFromMap(element, outletName***REMOVED*** {
    return this.outletsByName.getValuesForKey(outletName***REMOVED***.find(outlet => outlet.element === element***REMOVED***;
  ***REMOVED***
  get scope(***REMOVED*** {
    return this.context.scope;
  ***REMOVED***
  get identifier(***REMOVED*** {
    return this.context.identifier;
  ***REMOVED***
  get application(***REMOVED*** {
    return this.context.application;
  ***REMOVED***
  get router(***REMOVED*** {
    return this.application.router;
  ***REMOVED***
***REMOVED***
class Context {
  constructor(module, scope***REMOVED*** {
    var _this = this;
    this.logDebugActivity = function (functionName***REMOVED*** {
      let detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {***REMOVED***;
      const identifier = _this.identifier,
        controller = _this.controller,
        element = _this.element;
      detail = Object.assign({
        identifier,
        controller,
        element
      ***REMOVED***, detail***REMOVED***;
      _this.application.logDebugActivity(_this.identifier, functionName, detail***REMOVED***;
    ***REMOVED***;
    this.module = module;
    this.scope = scope;
    this.controller = new module.controllerConstructor(this***REMOVED***;
    this.bindingObserver = new BindingObserver(this, this.dispatcher***REMOVED***;
    this.valueObserver = new ValueObserver(this, this.controller***REMOVED***;
    this.targetObserver = new TargetObserver(this, this***REMOVED***;
    this.outletObserver = new OutletObserver(this, this***REMOVED***;
    try {
      this.controller.initialize(***REMOVED***;
      this.logDebugActivity("initialize"***REMOVED***;
    ***REMOVED*** catch (error***REMOVED*** {
      this.handleError(error, "initializing controller"***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  connect(***REMOVED*** {
    this.bindingObserver.start(***REMOVED***;
    this.valueObserver.start(***REMOVED***;
    this.targetObserver.start(***REMOVED***;
    this.outletObserver.start(***REMOVED***;
    try {
      this.controller.connect(***REMOVED***;
      this.logDebugActivity("connect"***REMOVED***;
    ***REMOVED*** catch (error***REMOVED*** {
      this.handleError(error, "connecting controller"***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  refresh(***REMOVED*** {
    this.outletObserver.refresh(***REMOVED***;
  ***REMOVED***
  disconnect(***REMOVED*** {
    try {
      this.controller.disconnect(***REMOVED***;
      this.logDebugActivity("disconnect"***REMOVED***;
    ***REMOVED*** catch (error***REMOVED*** {
      this.handleError(error, "disconnecting controller"***REMOVED***;
    ***REMOVED***
    this.outletObserver.stop(***REMOVED***;
    this.targetObserver.stop(***REMOVED***;
    this.valueObserver.stop(***REMOVED***;
    this.bindingObserver.stop(***REMOVED***;
  ***REMOVED***
  get application(***REMOVED*** {
    return this.module.application;
  ***REMOVED***
  get identifier(***REMOVED*** {
    return this.module.identifier;
  ***REMOVED***
  get schema(***REMOVED*** {
    return this.application.schema;
  ***REMOVED***
  get dispatcher(***REMOVED*** {
    return this.application.dispatcher;
  ***REMOVED***
  get element(***REMOVED*** {
    return this.scope.element;
  ***REMOVED***
  get parentElement(***REMOVED*** {
    return this.element.parentElement;
  ***REMOVED***
  handleError(error, message***REMOVED*** {
    let detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {***REMOVED***;
    const identifier = this.identifier,
      controller = this.controller,
      element = this.element;
    detail = Object.assign({
      identifier,
      controller,
      element
    ***REMOVED***, detail***REMOVED***;
    this.application.handleError(error, `Error ${message***REMOVED***`, detail***REMOVED***;
  ***REMOVED***
  targetConnected(element, name***REMOVED*** {
    this.invokeControllerMethod(`${name***REMOVED***TargetConnected`, element***REMOVED***;
  ***REMOVED***
  targetDisconnected(element, name***REMOVED*** {
    this.invokeControllerMethod(`${name***REMOVED***TargetDisconnected`, element***REMOVED***;
  ***REMOVED***
  outletConnected(outlet, element, name***REMOVED*** {
    this.invokeControllerMethod(`${namespaceCamelize(name***REMOVED******REMOVED***OutletConnected`, outlet, element***REMOVED***;
  ***REMOVED***
  outletDisconnected(outlet, element, name***REMOVED*** {
    this.invokeControllerMethod(`${namespaceCamelize(name***REMOVED******REMOVED***OutletDisconnected`, outlet, element***REMOVED***;
  ***REMOVED***
  invokeControllerMethod(methodName***REMOVED*** {
    const controller = this.controller;
    if (typeof controller[methodName] == "function"***REMOVED*** {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0***REMOVED***, _key2 = 1; _key2 < _len; _key2++***REMOVED*** {
        args[_key2 - 1] = arguments[_key2];
      ***REMOVED***
      controller[methodName](...args***REMOVED***;
    ***REMOVED***
  ***REMOVED***
***REMOVED***
function bless(constructor***REMOVED*** {
  return shadow(constructor, getBlessedProperties(constructor***REMOVED******REMOVED***;
***REMOVED***
function shadow(constructor, properties***REMOVED*** {
  const shadowConstructor = extend(constructor***REMOVED***;
  const shadowProperties = getShadowProperties(constructor.prototype, properties***REMOVED***;
  Object.defineProperties(shadowConstructor.prototype, shadowProperties***REMOVED***;
  return shadowConstructor;
***REMOVED***
function getBlessedProperties(constructor***REMOVED*** {
  const blessings = readInheritableStaticArrayValues(constructor, "blessings"***REMOVED***;
  return blessings.reduce((blessedProperties, blessing***REMOVED*** => {
    const properties = blessing(constructor***REMOVED***;
    for (const key in properties***REMOVED*** {
      const descriptor = blessedProperties[key] || {***REMOVED***;
      blessedProperties[key] = Object.assign(descriptor, properties[key]***REMOVED***;
    ***REMOVED***
    return blessedProperties;
  ***REMOVED***, {***REMOVED******REMOVED***;
***REMOVED***
function getShadowProperties(prototype, properties***REMOVED*** {
  return getOwnKeys(properties***REMOVED***.reduce((shadowProperties, key***REMOVED*** => {
    const descriptor = getShadowedDescriptor(prototype, properties, key***REMOVED***;
    if (descriptor***REMOVED*** {
      Object.assign(shadowProperties, {
        [key]: descriptor
      ***REMOVED******REMOVED***;
    ***REMOVED***
    return shadowProperties;
  ***REMOVED***, {***REMOVED******REMOVED***;
***REMOVED***
function getShadowedDescriptor(prototype, properties, key***REMOVED*** {
  const shadowingDescriptor = Object.getOwnPropertyDescriptor(prototype, key***REMOVED***;
  const shadowedByValue = shadowingDescriptor && "value" in shadowingDescriptor;
  if (!shadowedByValue***REMOVED*** {
    const descriptor = Object.getOwnPropertyDescriptor(properties, key***REMOVED***.value;
    if (shadowingDescriptor***REMOVED*** {
      descriptor.get = shadowingDescriptor.get || descriptor.get;
      descriptor.set = shadowingDescriptor.set || descriptor.set;
    ***REMOVED***
    return descriptor;
  ***REMOVED***
***REMOVED***
const getOwnKeys = ((***REMOVED*** => {
  if (typeof Object.getOwnPropertySymbols == "function"***REMOVED*** {
    return object => [...Object.getOwnPropertyNames(object***REMOVED***, ...Object.getOwnPropertySymbols(object***REMOVED***];
  ***REMOVED*** else {
    return Object.getOwnPropertyNames;
  ***REMOVED***
***REMOVED******REMOVED***(***REMOVED***;
const extend = ((***REMOVED*** => {
  function extendWithReflect(constructor***REMOVED*** {
    function extended(***REMOVED*** {
      return Reflect.construct(constructor, arguments, new.target***REMOVED***;
    ***REMOVED***
    extended.prototype = Object.create(constructor.prototype, {
      constructor: {
        value: extended
      ***REMOVED***
    ***REMOVED******REMOVED***;
    Reflect.setPrototypeOf(extended, constructor***REMOVED***;
    return extended;
  ***REMOVED***
  function testReflectExtension(***REMOVED*** {
    const a = function (***REMOVED*** {
      this.a.call(this***REMOVED***;
    ***REMOVED***;
    const b = extendWithReflect(a***REMOVED***;
    b.prototype.a = function (***REMOVED*** {***REMOVED***;
    return new b(***REMOVED***;
  ***REMOVED***
  try {
    testReflectExtension(***REMOVED***;
    return extendWithReflect;
  ***REMOVED*** catch (error***REMOVED*** {
    return constructor => class extended extends constructor {***REMOVED***;
  ***REMOVED***
***REMOVED******REMOVED***(***REMOVED***;
function blessDefinition(definition***REMOVED*** {
  return {
    identifier: definition.identifier,
    controllerConstructor: bless(definition.controllerConstructor***REMOVED***
  ***REMOVED***;
***REMOVED***
class Module {
  constructor(application, definition***REMOVED*** {
    this.application = application;
    this.definition = blessDefinition(definition***REMOVED***;
    this.contextsByScope = new WeakMap(***REMOVED***;
    this.connectedContexts = new Set(***REMOVED***;
  ***REMOVED***
  get identifier(***REMOVED*** {
    return this.definition.identifier;
  ***REMOVED***
  get controllerConstructor(***REMOVED*** {
    return this.definition.controllerConstructor;
  ***REMOVED***
  get contexts(***REMOVED*** {
    return Array.from(this.connectedContexts***REMOVED***;
  ***REMOVED***
  connectContextForScope(scope***REMOVED*** {
    const context = this.fetchContextForScope(scope***REMOVED***;
    this.connectedContexts.add(context***REMOVED***;
    context.connect(***REMOVED***;
  ***REMOVED***
  disconnectContextForScope(scope***REMOVED*** {
    const context = this.contextsByScope.get(scope***REMOVED***;
    if (context***REMOVED*** {
      this.connectedContexts.delete(context***REMOVED***;
      context.disconnect(***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  fetchContextForScope(scope***REMOVED*** {
    let context = this.contextsByScope.get(scope***REMOVED***;
    if (!context***REMOVED*** {
      context = new Context(this, scope***REMOVED***;
      this.contextsByScope.set(scope, context***REMOVED***;
    ***REMOVED***
    return context;
  ***REMOVED***
***REMOVED***
class ClassMap {
  constructor(scope***REMOVED*** {
    this.scope = scope;
  ***REMOVED***
  has(name***REMOVED*** {
    return this.data.has(this.getDataKey(name***REMOVED******REMOVED***;
  ***REMOVED***
  get(name***REMOVED*** {
    return this.getAll(name***REMOVED***[0];
  ***REMOVED***
  getAll(name***REMOVED*** {
    const tokenString = this.data.get(this.getDataKey(name***REMOVED******REMOVED*** || "";
    return tokenize(tokenString***REMOVED***;
  ***REMOVED***
  getAttributeName(name***REMOVED*** {
    return this.data.getAttributeNameForKey(this.getDataKey(name***REMOVED******REMOVED***;
  ***REMOVED***
  getDataKey(name***REMOVED*** {
    return `${name***REMOVED***-class`;
  ***REMOVED***
  get data(***REMOVED*** {
    return this.scope.data;
  ***REMOVED***
***REMOVED***
class DataMap {
  constructor(scope***REMOVED*** {
    this.scope = scope;
  ***REMOVED***
  get element(***REMOVED*** {
    return this.scope.element;
  ***REMOVED***
  get identifier(***REMOVED*** {
    return this.scope.identifier;
  ***REMOVED***
  get(key***REMOVED*** {
    const name = this.getAttributeNameForKey(key***REMOVED***;
    return this.element.getAttribute(name***REMOVED***;
  ***REMOVED***
  set(key, value***REMOVED*** {
    const name = this.getAttributeNameForKey(key***REMOVED***;
    this.element.setAttribute(name, value***REMOVED***;
    return this.get(key***REMOVED***;
  ***REMOVED***
  has(key***REMOVED*** {
    const name = this.getAttributeNameForKey(key***REMOVED***;
    return this.element.hasAttribute(name***REMOVED***;
  ***REMOVED***
  delete(key***REMOVED*** {
    if (this.has(key***REMOVED******REMOVED*** {
      const name = this.getAttributeNameForKey(key***REMOVED***;
      this.element.removeAttribute(name***REMOVED***;
      return true;
    ***REMOVED*** else {
      return false;
    ***REMOVED***
  ***REMOVED***
  getAttributeNameForKey(key***REMOVED*** {
    return `data-${this.identifier***REMOVED***-${dasherize(key***REMOVED******REMOVED***`;
  ***REMOVED***
***REMOVED***
class Guide {
  constructor(logger***REMOVED*** {
    this.warnedKeysByObject = new WeakMap(***REMOVED***;
    this.logger = logger;
  ***REMOVED***
  warn(object, key, message***REMOVED*** {
    let warnedKeys = this.warnedKeysByObject.get(object***REMOVED***;
    if (!warnedKeys***REMOVED*** {
      warnedKeys = new Set(***REMOVED***;
      this.warnedKeysByObject.set(object, warnedKeys***REMOVED***;
    ***REMOVED***
    if (!warnedKeys.has(key***REMOVED******REMOVED*** {
      warnedKeys.add(key***REMOVED***;
      this.logger.warn(message, object***REMOVED***;
    ***REMOVED***
  ***REMOVED***
***REMOVED***
function attributeValueContainsToken(attributeName, token***REMOVED*** {
  return `[${attributeName***REMOVED***~="${token***REMOVED***"]`;
***REMOVED***
class TargetSet {
  constructor(scope***REMOVED*** {
    this.scope = scope;
  ***REMOVED***
  get element(***REMOVED*** {
    return this.scope.element;
  ***REMOVED***
  get identifier(***REMOVED*** {
    return this.scope.identifier;
  ***REMOVED***
  get schema(***REMOVED*** {
    return this.scope.schema;
  ***REMOVED***
  has(targetName***REMOVED*** {
    return this.find(targetName***REMOVED*** != null;
  ***REMOVED***
  find(***REMOVED*** {
    for (var _len2 = arguments.length, targetNames = new Array(_len2***REMOVED***, _key3 = 0; _key3 < _len2; _key3++***REMOVED*** {
      targetNames[_key3] = arguments[_key3];
    ***REMOVED***
    return targetNames.reduce((target, targetName***REMOVED*** => target || this.findTarget(targetName***REMOVED*** || this.findLegacyTarget(targetName***REMOVED***, undefined***REMOVED***;
  ***REMOVED***
  findAll(***REMOVED*** {
    for (var _len3 = arguments.length, targetNames = new Array(_len3***REMOVED***, _key4 = 0; _key4 < _len3; _key4++***REMOVED*** {
      targetNames[_key4] = arguments[_key4];
    ***REMOVED***
    return targetNames.reduce((targets, targetName***REMOVED*** => [...targets, ...this.findAllTargets(targetName***REMOVED***, ...this.findAllLegacyTargets(targetName***REMOVED***], []***REMOVED***;
  ***REMOVED***
  findTarget(targetName***REMOVED*** {
    const selector = this.getSelectorForTargetName(targetName***REMOVED***;
    return this.scope.findElement(selector***REMOVED***;
  ***REMOVED***
  findAllTargets(targetName***REMOVED*** {
    const selector = this.getSelectorForTargetName(targetName***REMOVED***;
    return this.scope.findAllElements(selector***REMOVED***;
  ***REMOVED***
  getSelectorForTargetName(targetName***REMOVED*** {
    const attributeName = this.schema.targetAttributeForScope(this.identifier***REMOVED***;
    return attributeValueContainsToken(attributeName, targetName***REMOVED***;
  ***REMOVED***
  findLegacyTarget(targetName***REMOVED*** {
    const selector = this.getLegacySelectorForTargetName(targetName***REMOVED***;
    return this.deprecate(this.scope.findElement(selector***REMOVED***, targetName***REMOVED***;
  ***REMOVED***
  findAllLegacyTargets(targetName***REMOVED*** {
    const selector = this.getLegacySelectorForTargetName(targetName***REMOVED***;
    return this.scope.findAllElements(selector***REMOVED***.map(element => this.deprecate(element, targetName***REMOVED******REMOVED***;
  ***REMOVED***
  getLegacySelectorForTargetName(targetName***REMOVED*** {
    const targetDescriptor = `${this.identifier***REMOVED***.${targetName***REMOVED***`;
    return attributeValueContainsToken(this.schema.targetAttribute, targetDescriptor***REMOVED***;
  ***REMOVED***
  deprecate(element, targetName***REMOVED*** {
    if (element***REMOVED*** {
      const identifier = this.identifier;
      const attributeName = this.schema.targetAttribute;
      const revisedAttributeName = this.schema.targetAttributeForScope(identifier***REMOVED***;
      this.guide.warn(element, `target:${targetName***REMOVED***`, `Please replace ${attributeName***REMOVED***="${identifier***REMOVED***.${targetName***REMOVED***" with ${revisedAttributeName***REMOVED***="${targetName***REMOVED***". ` + `The ${attributeName***REMOVED*** attribute is deprecated and will be removed in a future version of Stimulus.`***REMOVED***;
    ***REMOVED***
    return element;
  ***REMOVED***
  get guide(***REMOVED*** {
    return this.scope.guide;
  ***REMOVED***
***REMOVED***
class OutletSet {
  constructor(scope, controllerElement***REMOVED*** {
    this.scope = scope;
    this.controllerElement = controllerElement;
  ***REMOVED***
  get element(***REMOVED*** {
    return this.scope.element;
  ***REMOVED***
  get identifier(***REMOVED*** {
    return this.scope.identifier;
  ***REMOVED***
  get schema(***REMOVED*** {
    return this.scope.schema;
  ***REMOVED***
  has(outletName***REMOVED*** {
    return this.find(outletName***REMOVED*** != null;
  ***REMOVED***
  find(***REMOVED*** {
    for (var _len4 = arguments.length, outletNames = new Array(_len4***REMOVED***, _key5 = 0; _key5 < _len4; _key5++***REMOVED*** {
      outletNames[_key5] = arguments[_key5];
    ***REMOVED***
    return outletNames.reduce((outlet, outletName***REMOVED*** => outlet || this.findOutlet(outletName***REMOVED***, undefined***REMOVED***;
  ***REMOVED***
  findAll(***REMOVED*** {
    for (var _len5 = arguments.length, outletNames = new Array(_len5***REMOVED***, _key6 = 0; _key6 < _len5; _key6++***REMOVED*** {
      outletNames[_key6] = arguments[_key6];
    ***REMOVED***
    return outletNames.reduce((outlets, outletName***REMOVED*** => [...outlets, ...this.findAllOutlets(outletName***REMOVED***], []***REMOVED***;
  ***REMOVED***
  getSelectorForOutletName(outletName***REMOVED*** {
    const attributeName = this.schema.outletAttributeForScope(this.identifier, outletName***REMOVED***;
    return this.controllerElement.getAttribute(attributeName***REMOVED***;
  ***REMOVED***
  findOutlet(outletName***REMOVED*** {
    const selector = this.getSelectorForOutletName(outletName***REMOVED***;
    if (selector***REMOVED*** return this.findElement(selector, outletName***REMOVED***;
  ***REMOVED***
  findAllOutlets(outletName***REMOVED*** {
    const selector = this.getSelectorForOutletName(outletName***REMOVED***;
    return selector ? this.findAllElements(selector, outletName***REMOVED*** : [];
  ***REMOVED***
  findElement(selector, outletName***REMOVED*** {
    const elements = this.scope.queryElements(selector***REMOVED***;
    return elements.filter(element => this.matchesElement(element, selector, outletName***REMOVED******REMOVED***[0];
  ***REMOVED***
  findAllElements(selector, outletName***REMOVED*** {
    const elements = this.scope.queryElements(selector***REMOVED***;
    return elements.filter(element => this.matchesElement(element, selector, outletName***REMOVED******REMOVED***;
  ***REMOVED***
  matchesElement(element, selector, outletName***REMOVED*** {
    const controllerAttribute = element.getAttribute(this.scope.schema.controllerAttribute***REMOVED*** || "";
    return element.matches(selector***REMOVED*** && controllerAttribute.split(" "***REMOVED***.includes(outletName***REMOVED***;
  ***REMOVED***
***REMOVED***
class Scope {
  constructor(schema, element, identifier, logger***REMOVED*** {
    this.targets = new TargetSet(this***REMOVED***;
    this.classes = new ClassMap(this***REMOVED***;
    this.data = new DataMap(this***REMOVED***;
    this.containsElement = element => {
      return element.closest(this.controllerSelector***REMOVED*** === this.element;
    ***REMOVED***;
    this.schema = schema;
    this.element = element;
    this.identifier = identifier;
    this.guide = new Guide(logger***REMOVED***;
    this.outlets = new OutletSet(this.documentScope, element***REMOVED***;
  ***REMOVED***
  findElement(selector***REMOVED*** {
    return this.element.matches(selector***REMOVED*** ? this.element : this.queryElements(selector***REMOVED***.find(this.containsElement***REMOVED***;
  ***REMOVED***
  findAllElements(selector***REMOVED*** {
    return [...(this.element.matches(selector***REMOVED*** ? [this.element] : []***REMOVED***, ...this.queryElements(selector***REMOVED***.filter(this.containsElement***REMOVED***];
  ***REMOVED***
  queryElements(selector***REMOVED*** {
    return Array.from(this.element.querySelectorAll(selector***REMOVED******REMOVED***;
  ***REMOVED***
  get controllerSelector(***REMOVED*** {
    return attributeValueContainsToken(this.schema.controllerAttribute, this.identifier***REMOVED***;
  ***REMOVED***
  get isDocumentScope(***REMOVED*** {
    return this.element === document.documentElement;
  ***REMOVED***
  get documentScope(***REMOVED*** {
    return this.isDocumentScope ? this : new Scope(this.schema, document.documentElement, this.identifier, this.guide.logger***REMOVED***;
  ***REMOVED***
***REMOVED***
class ScopeObserver {
  constructor(element, schema, delegate***REMOVED*** {
    this.element = element;
    this.schema = schema;
    this.delegate = delegate;
    this.valueListObserver = new ValueListObserver(this.element, this.controllerAttribute, this***REMOVED***;
    this.scopesByIdentifierByElement = new WeakMap(***REMOVED***;
    this.scopeReferenceCounts = new WeakMap(***REMOVED***;
  ***REMOVED***
  start(***REMOVED*** {
    this.valueListObserver.start(***REMOVED***;
  ***REMOVED***
  stop(***REMOVED*** {
    this.valueListObserver.stop(***REMOVED***;
  ***REMOVED***
  get controllerAttribute(***REMOVED*** {
    return this.schema.controllerAttribute;
  ***REMOVED***
  parseValueForToken(token***REMOVED*** {
    const element = token.element,
      identifier = token.content;
    const scopesByIdentifier = this.fetchScopesByIdentifierForElement(element***REMOVED***;
    let scope = scopesByIdentifier.get(identifier***REMOVED***;
    if (!scope***REMOVED*** {
      scope = this.delegate.createScopeForElementAndIdentifier(element, identifier***REMOVED***;
      scopesByIdentifier.set(identifier, scope***REMOVED***;
    ***REMOVED***
    return scope;
  ***REMOVED***
  elementMatchedValue(element, value***REMOVED*** {
    const referenceCount = (this.scopeReferenceCounts.get(value***REMOVED*** || 0***REMOVED*** + 1;
    this.scopeReferenceCounts.set(value, referenceCount***REMOVED***;
    if (referenceCount == 1***REMOVED*** {
      this.delegate.scopeConnected(value***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  elementUnmatchedValue(element, value***REMOVED*** {
    const referenceCount = this.scopeReferenceCounts.get(value***REMOVED***;
    if (referenceCount***REMOVED*** {
      this.scopeReferenceCounts.set(value, referenceCount - 1***REMOVED***;
      if (referenceCount == 1***REMOVED*** {
        this.delegate.scopeDisconnected(value***REMOVED***;
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
  fetchScopesByIdentifierForElement(element***REMOVED*** {
    let scopesByIdentifier = this.scopesByIdentifierByElement.get(element***REMOVED***;
    if (!scopesByIdentifier***REMOVED*** {
      scopesByIdentifier = new Map(***REMOVED***;
      this.scopesByIdentifierByElement.set(element, scopesByIdentifier***REMOVED***;
    ***REMOVED***
    return scopesByIdentifier;
  ***REMOVED***
***REMOVED***
class Router {
  constructor(application***REMOVED*** {
    this.application = application;
    this.scopeObserver = new ScopeObserver(this.element, this.schema, this***REMOVED***;
    this.scopesByIdentifier = new Multimap(***REMOVED***;
    this.modulesByIdentifier = new Map(***REMOVED***;
  ***REMOVED***
  get element(***REMOVED*** {
    return this.application.element;
  ***REMOVED***
  get schema(***REMOVED*** {
    return this.application.schema;
  ***REMOVED***
  get logger(***REMOVED*** {
    return this.application.logger;
  ***REMOVED***
  get controllerAttribute(***REMOVED*** {
    return this.schema.controllerAttribute;
  ***REMOVED***
  get modules(***REMOVED*** {
    return Array.from(this.modulesByIdentifier.values(***REMOVED******REMOVED***;
  ***REMOVED***
  get contexts(***REMOVED*** {
    return this.modules.reduce((contexts, module***REMOVED*** => contexts.concat(module.contexts***REMOVED***, []***REMOVED***;
  ***REMOVED***
  start(***REMOVED*** {
    this.scopeObserver.start(***REMOVED***;
  ***REMOVED***
  stop(***REMOVED*** {
    this.scopeObserver.stop(***REMOVED***;
  ***REMOVED***
  loadDefinition(definition***REMOVED*** {
    this.unloadIdentifier(definition.identifier***REMOVED***;
    const module = new Module(this.application, definition***REMOVED***;
    this.connectModule(module***REMOVED***;
    const afterLoad = definition.controllerConstructor.afterLoad;
    if (afterLoad***REMOVED*** {
      afterLoad(definition.identifier, this.application***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  unloadIdentifier(identifier***REMOVED*** {
    const module = this.modulesByIdentifier.get(identifier***REMOVED***;
    if (module***REMOVED*** {
      this.disconnectModule(module***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  getContextForElementAndIdentifier(element, identifier***REMOVED*** {
    const module = this.modulesByIdentifier.get(identifier***REMOVED***;
    if (module***REMOVED*** {
      return module.contexts.find(context => context.element == element***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  handleError(error, message, detail***REMOVED*** {
    this.application.handleError(error, message, detail***REMOVED***;
  ***REMOVED***
  createScopeForElementAndIdentifier(element, identifier***REMOVED*** {
    return new Scope(this.schema, element, identifier, this.logger***REMOVED***;
  ***REMOVED***
  scopeConnected(scope***REMOVED*** {
    this.scopesByIdentifier.add(scope.identifier, scope***REMOVED***;
    const module = this.modulesByIdentifier.get(scope.identifier***REMOVED***;
    if (module***REMOVED*** {
      module.connectContextForScope(scope***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  scopeDisconnected(scope***REMOVED*** {
    this.scopesByIdentifier.delete(scope.identifier, scope***REMOVED***;
    const module = this.modulesByIdentifier.get(scope.identifier***REMOVED***;
    if (module***REMOVED*** {
      module.disconnectContextForScope(scope***REMOVED***;
    ***REMOVED***
  ***REMOVED***
  connectModule(module***REMOVED*** {
    this.modulesByIdentifier.set(module.identifier, module***REMOVED***;
    const scopes = this.scopesByIdentifier.getValuesForKey(module.identifier***REMOVED***;
    scopes.forEach(scope => module.connectContextForScope(scope***REMOVED******REMOVED***;
  ***REMOVED***
  disconnectModule(module***REMOVED*** {
    this.modulesByIdentifier.delete(module.identifier***REMOVED***;
    const scopes = this.scopesByIdentifier.getValuesForKey(module.identifier***REMOVED***;
    scopes.forEach(scope => module.disconnectContextForScope(scope***REMOVED******REMOVED***;
  ***REMOVED***
***REMOVED***
const defaultSchema = {
  controllerAttribute: "data-controller",
  actionAttribute: "data-action",
  targetAttribute: "data-target",
  targetAttributeForScope: identifier => `data-${identifier***REMOVED***-target`,
  outletAttributeForScope: (identifier, outlet***REMOVED*** => `data-${identifier***REMOVED***-${outlet***REMOVED***-outlet`,
  keyMappings: Object.assign(Object.assign({
    enter: "Enter",
    tab: "Tab",
    esc: "Escape",
    space: " ",
    up: "ArrowUp",
    down: "ArrowDown",
    left: "ArrowLeft",
    right: "ArrowRight",
    home: "Home",
    end: "End"
  ***REMOVED***, objectFromEntries("abcdefghijklmnopqrstuvwxyz".split(""***REMOVED***.map(c => [c, c]***REMOVED******REMOVED******REMOVED***, objectFromEntries("0123456789".split(""***REMOVED***.map(n => [n, n]***REMOVED******REMOVED******REMOVED***
***REMOVED***;
function objectFromEntries(array***REMOVED*** {
  return array.reduce((memo, _ref19***REMOVED*** => {
    let _ref20 = _slicedToArray(_ref19, 2***REMOVED***,
      k = _ref20[0],
      v = _ref20[1];
    return Object.assign(Object.assign({***REMOVED***, memo***REMOVED***, {
      [k]: v
    ***REMOVED******REMOVED***;
  ***REMOVED***, {***REMOVED******REMOVED***;
***REMOVED***
class Application {
  constructor(***REMOVED*** {
    var _this2 = this;
    let element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.documentElement;
    let schema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSchema;
    this.logger = console;
    this.debug = false;
    this.logDebugActivity = function (identifier, functionName***REMOVED*** {
      let detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {***REMOVED***;
      if (_this2.debug***REMOVED*** {
        _this2.logFormattedMessage(identifier, functionName, detail***REMOVED***;
      ***REMOVED***
    ***REMOVED***;
    this.element = element;
    this.schema = schema;
    this.dispatcher = new Dispatcher(this***REMOVED***;
    this.router = new Router(this***REMOVED***;
    this.actionDescriptorFilters = Object.assign({***REMOVED***, defaultActionDescriptorFilters***REMOVED***;
  ***REMOVED***
  static start(element, schema***REMOVED*** {
    const application = new this(element, schema***REMOVED***;
    application.start(***REMOVED***;
    return application;
  ***REMOVED***
  async start(***REMOVED*** {
    await domReady(***REMOVED***;
    this.logDebugActivity("application", "starting"***REMOVED***;
    this.dispatcher.start(***REMOVED***;
    this.router.start(***REMOVED***;
    this.logDebugActivity("application", "start"***REMOVED***;
  ***REMOVED***
  stop(***REMOVED*** {
    this.logDebugActivity("application", "stopping"***REMOVED***;
    this.dispatcher.stop(***REMOVED***;
    this.router.stop(***REMOVED***;
    this.logDebugActivity("application", "stop"***REMOVED***;
  ***REMOVED***
  register(identifier, controllerConstructor***REMOVED*** {
    this.load({
      identifier,
      controllerConstructor
    ***REMOVED******REMOVED***;
  ***REMOVED***
  registerActionOption(name, filter***REMOVED*** {
    this.actionDescriptorFilters[name] = filter;
  ***REMOVED***
  load(head***REMOVED*** {
    for (var _len6 = arguments.length, rest = new Array(_len6 > 1 ? _len6 - 1 : 0***REMOVED***, _key7 = 1; _key7 < _len6; _key7++***REMOVED*** {
      rest[_key7 - 1] = arguments[_key7];
    ***REMOVED***
    const definitions = Array.isArray(head***REMOVED*** ? head : [head, ...rest];
    definitions.forEach(definition => {
      if (definition.controllerConstructor.shouldLoad***REMOVED*** {
        this.router.loadDefinition(definition***REMOVED***;
      ***REMOVED***
    ***REMOVED******REMOVED***;
  ***REMOVED***
  unload(head***REMOVED*** {
    for (var _len7 = arguments.length, rest = new Array(_len7 > 1 ? _len7 - 1 : 0***REMOVED***, _key8 = 1; _key8 < _len7; _key8++***REMOVED*** {
      rest[_key8 - 1] = arguments[_key8];
    ***REMOVED***
    const identifiers = Array.isArray(head***REMOVED*** ? head : [head, ...rest];
    identifiers.forEach(identifier => this.router.unloadIdentifier(identifier***REMOVED******REMOVED***;
  ***REMOVED***
  get controllers(***REMOVED*** {
    return this.router.contexts.map(context => context.controller***REMOVED***;
  ***REMOVED***
  getControllerForElementAndIdentifier(element, identifier***REMOVED*** {
    const context = this.router.getContextForElementAndIdentifier(element, identifier***REMOVED***;
    return context ? context.controller : null;
  ***REMOVED***
  handleError(error, message, detail***REMOVED*** {
    var _a;
    this.logger.error(`%s\n\n%o\n\n%o`, message, error, detail***REMOVED***;
    (_a = window.onerror***REMOVED*** === null || _a === void 0 ? void 0 : _a.call(window, message, "", 0, 0, error***REMOVED***;
  ***REMOVED***
  logFormattedMessage(identifier, functionName***REMOVED*** {
    let detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {***REMOVED***;
    detail = Object.assign({
      application: this
    ***REMOVED***, detail***REMOVED***;
    this.logger.groupCollapsed(`${identifier***REMOVED*** #${functionName***REMOVED***`***REMOVED***;
    this.logger.log("details:", Object.assign({***REMOVED***, detail***REMOVED******REMOVED***;
    this.logger.groupEnd(***REMOVED***;
  ***REMOVED***
***REMOVED***
function domReady(***REMOVED*** {
  return new Promise(resolve => {
    if (document.readyState == "loading"***REMOVED*** {
      document.addEventListener("DOMContentLoaded", (***REMOVED*** => resolve(***REMOVED******REMOVED***;
    ***REMOVED*** else {
      resolve(***REMOVED***;
    ***REMOVED***
  ***REMOVED******REMOVED***;
***REMOVED***
function ClassPropertiesBlessing(constructor***REMOVED*** {
  const classes = readInheritableStaticArrayValues(constructor, "classes"***REMOVED***;
  return classes.reduce((properties, classDefinition***REMOVED*** => {
    return Object.assign(properties, propertiesForClassDefinition(classDefinition***REMOVED******REMOVED***;
  ***REMOVED***, {***REMOVED******REMOVED***;
***REMOVED***
function propertiesForClassDefinition(key***REMOVED*** {
  return {
    [`${key***REMOVED***Class`]: {
      get(***REMOVED*** {
        const classes = this.classes;
        if (classes.has(key***REMOVED******REMOVED*** {
          return classes.get(key***REMOVED***;
        ***REMOVED*** else {
          const attribute = classes.getAttributeName(key***REMOVED***;
          throw new Error(`Missing attribute "${attribute***REMOVED***"`***REMOVED***;
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***,
    [`${key***REMOVED***Classes`]: {
      get(***REMOVED*** {
        return this.classes.getAll(key***REMOVED***;
      ***REMOVED***
    ***REMOVED***,
    [`has${capitalize(key***REMOVED******REMOVED***Class`]: {
      get(***REMOVED*** {
        return this.classes.has(key***REMOVED***;
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***;
***REMOVED***
function OutletPropertiesBlessing(constructor***REMOVED*** {
  const outlets = readInheritableStaticArrayValues(constructor, "outlets"***REMOVED***;
  return outlets.reduce((properties, outletDefinition***REMOVED*** => {
    return Object.assign(properties, propertiesForOutletDefinition(outletDefinition***REMOVED******REMOVED***;
  ***REMOVED***, {***REMOVED******REMOVED***;
***REMOVED***
function propertiesForOutletDefinition(name***REMOVED*** {
  const camelizedName = namespaceCamelize(name***REMOVED***;
  return {
    [`${camelizedName***REMOVED***Outlet`]: {
      get(***REMOVED*** {
        const outlet = this.outlets.find(name***REMOVED***;
        if (outlet***REMOVED*** {
          const outletController = this.application.getControllerForElementAndIdentifier(outlet, name***REMOVED***;
          if (outletController***REMOVED*** {
            return outletController;
          ***REMOVED*** else {
            throw new Error(`Missing "data-controller=${name***REMOVED***" attribute on outlet element for "${this.identifier***REMOVED***" controller`***REMOVED***;
          ***REMOVED***
        ***REMOVED***
        throw new Error(`Missing outlet element "${name***REMOVED***" for "${this.identifier***REMOVED***" controller`***REMOVED***;
      ***REMOVED***
    ***REMOVED***,
    [`${camelizedName***REMOVED***Outlets`]: {
      get(***REMOVED*** {
        const outlets = this.outlets.findAll(name***REMOVED***;
        if (outlets.length > 0***REMOVED*** {
          return outlets.map(outlet => {
            const controller = this.application.getControllerForElementAndIdentifier(outlet, name***REMOVED***;
            if (controller***REMOVED*** {
              return controller;
            ***REMOVED*** else {
              console.warn(`The provided outlet element is missing the outlet controller "${name***REMOVED***" for "${this.identifier***REMOVED***"`, outlet***REMOVED***;
            ***REMOVED***
          ***REMOVED******REMOVED***.filter(controller => controller***REMOVED***;
        ***REMOVED***
        return [];
      ***REMOVED***
    ***REMOVED***,
    [`${camelizedName***REMOVED***OutletElement`]: {
      get(***REMOVED*** {
        const outlet = this.outlets.find(name***REMOVED***;
        if (outlet***REMOVED*** {
          return outlet;
        ***REMOVED*** else {
          throw new Error(`Missing outlet element "${name***REMOVED***" for "${this.identifier***REMOVED***" controller`***REMOVED***;
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***,
    [`${camelizedName***REMOVED***OutletElements`]: {
      get(***REMOVED*** {
        return this.outlets.findAll(name***REMOVED***;
      ***REMOVED***
    ***REMOVED***,
    [`has${capitalize(camelizedName***REMOVED******REMOVED***Outlet`]: {
      get(***REMOVED*** {
        return this.outlets.has(name***REMOVED***;
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***;
***REMOVED***
function TargetPropertiesBlessing(constructor***REMOVED*** {
  const targets = readInheritableStaticArrayValues(constructor, "targets"***REMOVED***;
  return targets.reduce((properties, targetDefinition***REMOVED*** => {
    return Object.assign(properties, propertiesForTargetDefinition(targetDefinition***REMOVED******REMOVED***;
  ***REMOVED***, {***REMOVED******REMOVED***;
***REMOVED***
function propertiesForTargetDefinition(name***REMOVED*** {
  return {
    [`${name***REMOVED***Target`]: {
      get(***REMOVED*** {
        const target = this.targets.find(name***REMOVED***;
        if (target***REMOVED*** {
          return target;
        ***REMOVED*** else {
          throw new Error(`Missing target element "${name***REMOVED***" for "${this.identifier***REMOVED***" controller`***REMOVED***;
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***,
    [`${name***REMOVED***Targets`]: {
      get(***REMOVED*** {
        return this.targets.findAll(name***REMOVED***;
      ***REMOVED***
    ***REMOVED***,
    [`has${capitalize(name***REMOVED******REMOVED***Target`]: {
      get(***REMOVED*** {
        return this.targets.has(name***REMOVED***;
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***;
***REMOVED***
function ValuePropertiesBlessing(constructor***REMOVED*** {
  const valueDefinitionPairs = readInheritableStaticObjectPairs(constructor, "values"***REMOVED***;
  const propertyDescriptorMap = {
    valueDescriptorMap: {
      get(***REMOVED*** {
        return valueDefinitionPairs.reduce((result, valueDefinitionPair***REMOVED*** => {
          const valueDescriptor = parseValueDefinitionPair(valueDefinitionPair, this.identifier***REMOVED***;
          const attributeName = this.data.getAttributeNameForKey(valueDescriptor.key***REMOVED***;
          return Object.assign(result, {
            [attributeName]: valueDescriptor
          ***REMOVED******REMOVED***;
        ***REMOVED***, {***REMOVED******REMOVED***;
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***;
  return valueDefinitionPairs.reduce((properties, valueDefinitionPair***REMOVED*** => {
    return Object.assign(properties, propertiesForValueDefinitionPair(valueDefinitionPair***REMOVED******REMOVED***;
  ***REMOVED***, propertyDescriptorMap***REMOVED***;
***REMOVED***
function propertiesForValueDefinitionPair(valueDefinitionPair, controller***REMOVED*** {
  const definition = parseValueDefinitionPair(valueDefinitionPair, controller***REMOVED***;
  const key = definition.key,
    name = definition.name,
    read = definition.reader,
    write = definition.writer;
  return {
    [name]: {
      get(***REMOVED*** {
        const value = this.data.get(key***REMOVED***;
        if (value !== null***REMOVED*** {
          return read(value***REMOVED***;
        ***REMOVED*** else {
          return definition.defaultValue;
        ***REMOVED***
      ***REMOVED***,
      set(value***REMOVED*** {
        if (value === undefined***REMOVED*** {
          this.data.delete(key***REMOVED***;
        ***REMOVED*** else {
          this.data.set(key, write(value***REMOVED******REMOVED***;
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***,
    [`has${capitalize(name***REMOVED******REMOVED***`]: {
      get(***REMOVED*** {
        return this.data.has(key***REMOVED*** || definition.hasCustomDefaultValue;
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***;
***REMOVED***
function parseValueDefinitionPair(_ref21, controller***REMOVED*** {
  let _ref22 = _slicedToArray(_ref21, 2***REMOVED***,
    token = _ref22[0],
    typeDefinition = _ref22[1];
  return valueDescriptorForTokenAndTypeDefinition({
    controller,
    token,
    typeDefinition
  ***REMOVED******REMOVED***;
***REMOVED***
function parseValueTypeConstant(constant***REMOVED*** {
  switch (constant***REMOVED*** {
    case Array:
      return "array";
    case Boolean:
      return "boolean";
    case Number:
      return "number";
    case Object:
      return "object";
    case String:
      return "string";
  ***REMOVED***
***REMOVED***
function parseValueTypeDefault(defaultValue***REMOVED*** {
  switch (typeof defaultValue***REMOVED*** {
    case "boolean":
      return "boolean";
    case "number":
      return "number";
    case "string":
      return "string";
  ***REMOVED***
  if (Array.isArray(defaultValue***REMOVED******REMOVED*** return "array";
  if (Object.prototype.toString.call(defaultValue***REMOVED*** === "[object Object]"***REMOVED*** return "object";
***REMOVED***
function parseValueTypeObject(payload***REMOVED*** {
  const typeFromObject = parseValueTypeConstant(payload.typeObject.type***REMOVED***;
  if (!typeFromObject***REMOVED*** return;
  const defaultValueType = parseValueTypeDefault(payload.typeObject.default***REMOVED***;
  if (typeFromObject !== defaultValueType***REMOVED*** {
    const propertyPath = payload.controller ? `${payload.controller***REMOVED***.${payload.token***REMOVED***` : payload.token;
    throw new Error(`The specified default value for the Stimulus Value "${propertyPath***REMOVED***" must match the defined type "${typeFromObject***REMOVED***". The provided default value of "${payload.typeObject.default***REMOVED***" is of type "${defaultValueType***REMOVED***".`***REMOVED***;
  ***REMOVED***
  return typeFromObject;
***REMOVED***
function parseValueTypeDefinition(payload***REMOVED*** {
  const typeFromObject = parseValueTypeObject({
    controller: payload.controller,
    token: payload.token,
    typeObject: payload.typeDefinition
  ***REMOVED******REMOVED***;
  const typeFromDefaultValue = parseValueTypeDefault(payload.typeDefinition***REMOVED***;
  const typeFromConstant = parseValueTypeConstant(payload.typeDefinition***REMOVED***;
  const type = typeFromObject || typeFromDefaultValue || typeFromConstant;
  if (type***REMOVED*** return type;
  const propertyPath = payload.controller ? `${payload.controller***REMOVED***.${payload.typeDefinition***REMOVED***` : payload.token;
  throw new Error(`Unknown value type "${propertyPath***REMOVED***" for "${payload.token***REMOVED***" value`***REMOVED***;
***REMOVED***
function defaultValueForDefinition(typeDefinition***REMOVED*** {
  const constant = parseValueTypeConstant(typeDefinition***REMOVED***;
  if (constant***REMOVED*** return defaultValuesByType[constant];
  const defaultValue = typeDefinition.default;
  if (defaultValue !== undefined***REMOVED*** return defaultValue;
  return typeDefinition;
***REMOVED***
function valueDescriptorForTokenAndTypeDefinition(payload***REMOVED*** {
  const key = `${dasherize(payload.token***REMOVED******REMOVED***-value`;
  const type = parseValueTypeDefinition(payload***REMOVED***;
  return {
    type,
    key,
    name: camelize(key***REMOVED***,
    get defaultValue(***REMOVED*** {
      return defaultValueForDefinition(payload.typeDefinition***REMOVED***;
    ***REMOVED***,
    get hasCustomDefaultValue(***REMOVED*** {
      return parseValueTypeDefault(payload.typeDefinition***REMOVED*** !== undefined;
    ***REMOVED***,
    reader: readers[type],
    writer: writers[type] || writers.default
  ***REMOVED***;
***REMOVED***
const defaultValuesByType = {
  get array(***REMOVED*** {
    return [];
  ***REMOVED***,
  boolean: false,
  number: 0,
  get object(***REMOVED*** {
    return {***REMOVED***;
  ***REMOVED***,
  string: ""
***REMOVED***;
const readers = {
  array(value***REMOVED*** {
    const array = JSON.parse(value***REMOVED***;
    if (!Array.isArray(array***REMOVED******REMOVED*** {
      throw new TypeError(`expected value of type "array" but instead got value "${value***REMOVED***" of type "${parseValueTypeDefault(array***REMOVED******REMOVED***"`***REMOVED***;
    ***REMOVED***
    return array;
  ***REMOVED***,
  boolean(value***REMOVED*** {
    return !(value == "0" || String(value***REMOVED***.toLowerCase(***REMOVED*** == "false"***REMOVED***;
  ***REMOVED***,
  number(value***REMOVED*** {
    return Number(value***REMOVED***;
  ***REMOVED***,
  object(value***REMOVED*** {
    const object = JSON.parse(value***REMOVED***;
    if (object === null || typeof object != "object" || Array.isArray(object***REMOVED******REMOVED*** {
      throw new TypeError(`expected value of type "object" but instead got value "${value***REMOVED***" of type "${parseValueTypeDefault(object***REMOVED******REMOVED***"`***REMOVED***;
    ***REMOVED***
    return object;
  ***REMOVED***,
  string(value***REMOVED*** {
    return value;
  ***REMOVED***
***REMOVED***;
const writers = {
  default: writeString,
  array: writeJSON,
  object: writeJSON
***REMOVED***;
function writeJSON(value***REMOVED*** {
  return JSON.stringify(value***REMOVED***;
***REMOVED***
function writeString(value***REMOVED*** {
  return `${value***REMOVED***`;
***REMOVED***
class Controller {
  constructor(context***REMOVED*** {
    this.context = context;
  ***REMOVED***
  static get shouldLoad(***REMOVED*** {
    return true;
  ***REMOVED***
  static afterLoad(_identifier, _application***REMOVED*** {
    return;
  ***REMOVED***
  get application(***REMOVED*** {
    return this.context.application;
  ***REMOVED***
  get scope(***REMOVED*** {
    return this.context.scope;
  ***REMOVED***
  get element(***REMOVED*** {
    return this.scope.element;
  ***REMOVED***
  get identifier(***REMOVED*** {
    return this.scope.identifier;
  ***REMOVED***
  get targets(***REMOVED*** {
    return this.scope.targets;
  ***REMOVED***
  get outlets(***REMOVED*** {
    return this.scope.outlets;
  ***REMOVED***
  get classes(***REMOVED*** {
    return this.scope.classes;
  ***REMOVED***
  get data(***REMOVED*** {
    return this.scope.data;
  ***REMOVED***
  initialize(***REMOVED*** {***REMOVED***
  connect(***REMOVED*** {***REMOVED***
  disconnect(***REMOVED*** {***REMOVED***
  dispatch(eventName***REMOVED*** {
    let _ref23 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {***REMOVED***,
      _ref23$target = _ref23.target,
      target = _ref23$target === void 0 ? this.element : _ref23$target,
      _ref23$detail = _ref23.detail,
      detail = _ref23$detail === void 0 ? {***REMOVED*** : _ref23$detail,
      _ref23$prefix = _ref23.prefix,
      prefix = _ref23$prefix === void 0 ? this.identifier : _ref23$prefix,
      _ref23$bubbles = _ref23.bubbles,
      bubbles = _ref23$bubbles === void 0 ? true : _ref23$bubbles,
      _ref23$cancelable = _ref23.cancelable,
      cancelable = _ref23$cancelable === void 0 ? true : _ref23$cancelable;
    const type = prefix ? `${prefix***REMOVED***:${eventName***REMOVED***` : eventName;
    const event = new CustomEvent(type, {
      detail,
      bubbles,
      cancelable
    ***REMOVED******REMOVED***;
    target.dispatchEvent(event***REMOVED***;
    return event;
  ***REMOVED***
***REMOVED***
Controller.blessings = [ClassPropertiesBlessing, TargetPropertiesBlessing, ValuePropertiesBlessing, OutletPropertiesBlessing];
Controller.targets = [];
Controller.outlets = [];
Controller.values = {***REMOVED***;


/***/ ***REMOVED******REMOVED***,

/***/ "./node_modules/stimulus/webpack-helpers.js":
/*!**************************************************!*\
  !*** ./node_modules/stimulus/webpack-helpers.js ***!
  \**************************************************/
/*! exports provided: definitionForModuleAndIdentifier, definitionForModuleWithContextAndKey, definitionsFromContext, identifierForContextKey */
/***/ (function(module, __webpack_exports__, __webpack_require__***REMOVED*** {

"use strict";
__webpack_require__.r(__webpack_exports__***REMOVED***;
/* harmony import */ var _hotwired_stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus-webpack-helpers */ "./node_modules/@hotwired/stimulus-webpack-helpers/dist/stimulus-webpack-helpers.js"***REMOVED***;
/* harmony reexport (safe***REMOVED*** */ __webpack_require__.d(__webpack_exports__, "definitionForModuleAndIdentifier", function(***REMOVED*** { return _hotwired_stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_0__["definitionForModuleAndIdentifier"]; ***REMOVED******REMOVED***;

/* harmony reexport (safe***REMOVED*** */ __webpack_require__.d(__webpack_exports__, "definitionForModuleWithContextAndKey", function(***REMOVED*** { return _hotwired_stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_0__["definitionForModuleWithContextAndKey"]; ***REMOVED******REMOVED***;

/* harmony reexport (safe***REMOVED*** */ __webpack_require__.d(__webpack_exports__, "definitionsFromContext", function(***REMOVED*** { return _hotwired_stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_0__["definitionsFromContext"]; ***REMOVED******REMOVED***;

/* harmony reexport (safe***REMOVED*** */ __webpack_require__.d(__webpack_exports__, "identifierForContextKey", function(***REMOVED*** { return _hotwired_stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_0__["identifierForContextKey"]; ***REMOVED******REMOVED***;



/***/ ***REMOVED******REMOVED***,

/***/ "./node_modules/turbolinks/dist/turbolinks.js":
/*!****************************************************!*\
  !*** ./node_modules/turbolinks/dist/turbolinks.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__***REMOVED*** {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
Turbolinks 5.2.0
Copyright © 2018 Basecamp, LLC
 */
(function (***REMOVED*** {
  var t = this;
  (function (***REMOVED*** {
    (function (***REMOVED*** {
      this.Turbolinks = {
        supported: function (***REMOVED*** {
          return null != window.history.pushState && null != window.requestAnimationFrame && null != window.addEventListener;
        ***REMOVED***(***REMOVED***,
        visit: function (t, r***REMOVED*** {
          return e.controller.visit(t, r***REMOVED***;
        ***REMOVED***,
        clearCache: function (***REMOVED*** {
          return e.controller.clearCache(***REMOVED***;
        ***REMOVED***,
        setProgressBarDelay: function (t***REMOVED*** {
          return e.controller.setProgressBarDelay(t***REMOVED***;
        ***REMOVED***
      ***REMOVED***;
    ***REMOVED******REMOVED***.call(this***REMOVED***;
  ***REMOVED******REMOVED***.call(t***REMOVED***;
  var e = t.Turbolinks;
  (function (***REMOVED*** {
    (function (***REMOVED*** {
      var t,
        r,
        n,
        o = [].slice;
      e.copyObject = function (t***REMOVED*** {
        var e, r, n;
        r = {***REMOVED***;
        for (e in t***REMOVED*** n = t[e], r[e] = n;
        return r;
      ***REMOVED***, e.closest = function (e, r***REMOVED*** {
        return t.call(e, r***REMOVED***;
      ***REMOVED***, t = function (***REMOVED*** {
        var t, e;
        return t = document.documentElement, null != (e = t.closest***REMOVED*** ? e : function (t***REMOVED*** {
          var e;
          for (e = this; e;***REMOVED*** {
            if (e.nodeType === Node.ELEMENT_NODE && r.call(e, t***REMOVED******REMOVED*** return e;
            e = e.parentNode;
          ***REMOVED***
        ***REMOVED***;
      ***REMOVED***(***REMOVED***, e.defer = function (t***REMOVED*** {
        return setTimeout(t, 1***REMOVED***;
      ***REMOVED***, e.throttle = function (t***REMOVED*** {
        var e;
        return e = null, function (***REMOVED*** {
          var r;
          return r = 1 <= arguments.length ? o.call(arguments, 0***REMOVED*** : [], null != e ? e : e = requestAnimationFrame(function (n***REMOVED*** {
            return function (***REMOVED*** {
              return e = null, t.apply(n, r***REMOVED***;
            ***REMOVED***;
          ***REMOVED***(this***REMOVED******REMOVED***;
        ***REMOVED***;
      ***REMOVED***, e.dispatch = function (t, e***REMOVED*** {
        var r, o, i, s, a, u;
        return a = null != e ? e : {***REMOVED***, u = a.target, r = a.cancelable, o = a.data, i = document.createEvent("Events"***REMOVED***, i.initEvent(t, !0, r === !0***REMOVED***, i.data = null != o ? o : {***REMOVED***, i.cancelable && !n && (s = i.preventDefault, i.preventDefault = function (***REMOVED*** {
          return this.defaultPrevented || Object.defineProperty(this, "defaultPrevented", {
            get: function (***REMOVED*** {
              return !0;
            ***REMOVED***
          ***REMOVED******REMOVED***, s.call(this***REMOVED***;
        ***REMOVED******REMOVED***, (null != u ? u : document***REMOVED***.dispatchEvent(i***REMOVED***, i;
      ***REMOVED***, n = function (***REMOVED*** {
        var t;
        return t = document.createEvent("Events"***REMOVED***, t.initEvent("test", !0, !0***REMOVED***, t.preventDefault(***REMOVED***, t.defaultPrevented;
      ***REMOVED***(***REMOVED***, e.match = function (t, e***REMOVED*** {
        return r.call(t, e***REMOVED***;
      ***REMOVED***, r = function (***REMOVED*** {
        var t, e, r, n;
        return t = document.documentElement, null != (e = null != (r = null != (n = t.matchesSelector***REMOVED*** ? n : t.webkitMatchesSelector***REMOVED*** ? r : t.msMatchesSelector***REMOVED*** ? e : t.mozMatchesSelector;
      ***REMOVED***(***REMOVED***, e.uuid = function (***REMOVED*** {
        var t, e, r;
        for (r = "", t = e = 1; 36 >= e; t = ++e***REMOVED*** r += 9 === t || 14 === t || 19 === t || 24 === t ? "-" : 15 === t ? "4" : 20 === t ? (Math.floor(4 * Math.random(***REMOVED******REMOVED*** + 8***REMOVED***.toString(16***REMOVED*** : Math.floor(15 * Math.random(***REMOVED******REMOVED***.toString(16***REMOVED***;
        return r;
      ***REMOVED***;
    ***REMOVED******REMOVED***.call(this***REMOVED***, function (***REMOVED*** {
      e.Location = function (***REMOVED*** {
        function t(t***REMOVED*** {
          var e, r;
          null == t && (t = ""***REMOVED***, r = document.createElement("a"***REMOVED***, r.href = t.toString(***REMOVED***, this.absoluteURL = r.href, e = r.hash.length, 2 > e ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -e***REMOVED***, this.anchor = r.hash.slice(1***REMOVED******REMOVED***;
        ***REMOVED***
        var e, r, n, o;
        return t.wrap = function (t***REMOVED*** {
          return t instanceof this ? t : new this(t***REMOVED***;
        ***REMOVED***, t.prototype.getOrigin = function (***REMOVED*** {
          return this.absoluteURL.split("/", 3***REMOVED***.join("/"***REMOVED***;
        ***REMOVED***, t.prototype.getPath = function (***REMOVED*** {
          var t, e;
          return null != (t = null != (e = this.requestURL.match(/\/\/[^\/]*(\/[^?;]****REMOVED***/***REMOVED******REMOVED*** ? e[1] : void 0***REMOVED*** ? t : "/";
        ***REMOVED***, t.prototype.getPathComponents = function (***REMOVED*** {
          return this.getPath(***REMOVED***.split("/"***REMOVED***.slice(1***REMOVED***;
        ***REMOVED***, t.prototype.getLastPathComponent = function (***REMOVED*** {
          return this.getPathComponents(***REMOVED***.slice(-1***REMOVED***[0];
        ***REMOVED***, t.prototype.getExtension = function (***REMOVED*** {
          var t, e;
          return null != (t = null != (e = this.getLastPathComponent(***REMOVED***.match(/\.[^.]*$/***REMOVED******REMOVED*** ? e[0] : void 0***REMOVED*** ? t : "";
        ***REMOVED***, t.prototype.isHTML = function (***REMOVED*** {
          return this.getExtension(***REMOVED***.match(/^(?:|\.(?:htm|html|xhtml***REMOVED******REMOVED***$/***REMOVED***;
        ***REMOVED***, t.prototype.isPrefixedBy = function (t***REMOVED*** {
          var e;
          return e = r(t***REMOVED***, this.isEqualTo(t***REMOVED*** || o(this.absoluteURL, e***REMOVED***;
        ***REMOVED***, t.prototype.isEqualTo = function (t***REMOVED*** {
          return this.absoluteURL === (null != t ? t.absoluteURL : void 0***REMOVED***;
        ***REMOVED***, t.prototype.toCacheKey = function (***REMOVED*** {
          return this.requestURL;
        ***REMOVED***, t.prototype.toJSON = function (***REMOVED*** {
          return this.absoluteURL;
        ***REMOVED***, t.prototype.toString = function (***REMOVED*** {
          return this.absoluteURL;
        ***REMOVED***, t.prototype.valueOf = function (***REMOVED*** {
          return this.absoluteURL;
        ***REMOVED***, r = function (t***REMOVED*** {
          return e(t.getOrigin(***REMOVED*** + t.getPath(***REMOVED******REMOVED***;
        ***REMOVED***, e = function (t***REMOVED*** {
          return n(t, "/"***REMOVED*** ? t : t + "/";
        ***REMOVED***, o = function (t, e***REMOVED*** {
          return t.slice(0, e.length***REMOVED*** === e;
        ***REMOVED***, n = function (t, e***REMOVED*** {
          return t.slice(-e.length***REMOVED*** === e;
        ***REMOVED***, t;
      ***REMOVED***(***REMOVED***;
    ***REMOVED***.call(this***REMOVED***, function (***REMOVED*** {
      var t = function (t, e***REMOVED*** {
        return function (***REMOVED*** {
          return t.apply(e, arguments***REMOVED***;
        ***REMOVED***;
      ***REMOVED***;
      e.HttpRequest = function (***REMOVED*** {
        function r(r, n, o***REMOVED*** {
          this.delegate = r, this.requestCanceled = t(this.requestCanceled, this***REMOVED***, this.requestTimedOut = t(this.requestTimedOut, this***REMOVED***, this.requestFailed = t(this.requestFailed, this***REMOVED***, this.requestLoaded = t(this.requestLoaded, this***REMOVED***, this.requestProgressed = t(this.requestProgressed, this***REMOVED***, this.url = e.Location.wrap(n***REMOVED***.requestURL, this.referrer = e.Location.wrap(o***REMOVED***.absoluteURL, this.createXHR(***REMOVED***;
        ***REMOVED***
        return r.NETWORK_FAILURE = 0, r.TIMEOUT_FAILURE = -1, r.timeout = 60, r.prototype.send = function (***REMOVED*** {
          var t;
          return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(***REMOVED***, this.setProgress(0***REMOVED***, this.xhr.send(***REMOVED***, this.sent = !0, "function" == typeof (t = this.delegate***REMOVED***.requestStarted ? t.requestStarted(***REMOVED*** : void 0***REMOVED*** : void 0;
        ***REMOVED***, r.prototype.cancel = function (***REMOVED*** {
          return this.xhr && this.sent ? this.xhr.abort(***REMOVED*** : void 0;
        ***REMOVED***, r.prototype.requestProgressed = function (t***REMOVED*** {
          return t.lengthComputable ? this.setProgress(t.loaded / t.total***REMOVED*** : void 0;
        ***REMOVED***, r.prototype.requestLoaded = function (***REMOVED*** {
          return this.endRequest(function (t***REMOVED*** {
            return function (***REMOVED*** {
              var e;
              return 200 <= (e = t.xhr.status***REMOVED*** && 300 > e ? t.delegate.requestCompletedWithResponse(t.xhr.responseText, t.xhr.getResponseHeader("Turbolinks-Location"***REMOVED******REMOVED*** : (t.failed = !0, t.delegate.requestFailedWithStatusCode(t.xhr.status, t.xhr.responseText***REMOVED******REMOVED***;
            ***REMOVED***;
          ***REMOVED***(this***REMOVED******REMOVED***;
        ***REMOVED***, r.prototype.requestFailed = function (***REMOVED*** {
          return this.endRequest(function (t***REMOVED*** {
            return function (***REMOVED*** {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE***REMOVED***;
            ***REMOVED***;
          ***REMOVED***(this***REMOVED******REMOVED***;
        ***REMOVED***, r.prototype.requestTimedOut = function (***REMOVED*** {
          return this.endRequest(function (t***REMOVED*** {
            return function (***REMOVED*** {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE***REMOVED***;
            ***REMOVED***;
          ***REMOVED***(this***REMOVED******REMOVED***;
        ***REMOVED***, r.prototype.requestCanceled = function (***REMOVED*** {
          return this.endRequest(***REMOVED***;
        ***REMOVED***, r.prototype.notifyApplicationBeforeRequestStart = function (***REMOVED*** {
          return e.dispatch("turbolinks:request-start", {
            data: {
              url: this.url,
              xhr: this.xhr
            ***REMOVED***
          ***REMOVED******REMOVED***;
        ***REMOVED***, r.prototype.notifyApplicationAfterRequestEnd = function (***REMOVED*** {
          return e.dispatch("turbolinks:request-end", {
            data: {
              url: this.url,
              xhr: this.xhr
            ***REMOVED***
          ***REMOVED******REMOVED***;
        ***REMOVED***, r.prototype.createXHR = function (***REMOVED*** {
          return this.xhr = new XMLHttpRequest(***REMOVED***, this.xhr.open("GET", this.url, !0***REMOVED***, this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"***REMOVED***, this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer***REMOVED***, this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled;
        ***REMOVED***, r.prototype.endRequest = function (t***REMOVED*** {
          return this.xhr ? (this.notifyApplicationAfterRequestEnd(***REMOVED***, null != t && t.call(this***REMOVED***, this.destroy(***REMOVED******REMOVED*** : void 0;
        ***REMOVED***, r.prototype.setProgress = function (t***REMOVED*** {
          var e;
          return this.progress = t, "function" == typeof (e = this.delegate***REMOVED***.requestProgressed ? e.requestProgressed(this.progress***REMOVED*** : void 0;
        ***REMOVED***, r.prototype.destroy = function (***REMOVED*** {
          var t;
          return this.setProgress(1***REMOVED***, "function" == typeof (t = this.delegate***REMOVED***.requestFinished && t.requestFinished(***REMOVED***, this.delegate = null, this.xhr = null;
        ***REMOVED***, r;
      ***REMOVED***(***REMOVED***;
    ***REMOVED***.call(this***REMOVED***, function (***REMOVED*** {
      var t = function (t, e***REMOVED*** {
        return function (***REMOVED*** {
          return t.apply(e, arguments***REMOVED***;
        ***REMOVED***;
      ***REMOVED***;
      e.ProgressBar = function (***REMOVED*** {
        function e(***REMOVED*** {
          this.trickle = t(this.trickle, this***REMOVED***, this.stylesheetElement = this.createStylesheetElement(***REMOVED***, this.progressElement = this.createProgressElement(***REMOVED***;
        ***REMOVED***
        var r;
        return r = 300, e.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + r + "ms ease-out, opacity " + r / 2 + "ms " + r / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0***REMOVED***;\n***REMOVED***", e.prototype.show = function (***REMOVED*** {
          return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(***REMOVED***, this.installProgressElement(***REMOVED***, this.startTrickling(***REMOVED******REMOVED***;
        ***REMOVED***, e.prototype.hide = function (***REMOVED*** {
          return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement(function (t***REMOVED*** {
            return function (***REMOVED*** {
              return t.uninstallProgressElement(***REMOVED***, t.stopTrickling(***REMOVED***, t.visible = !1, t.hiding = !1;
            ***REMOVED***;
          ***REMOVED***(this***REMOVED******REMOVED******REMOVED*** : void 0;
        ***REMOVED***, e.prototype.setValue = function (t***REMOVED*** {
          return this.value = t, this.refresh(***REMOVED***;
        ***REMOVED***, e.prototype.installStylesheetElement = function (***REMOVED*** {
          return document.head.insertBefore(this.stylesheetElement, document.head.firstChild***REMOVED***;
        ***REMOVED***, e.prototype.installProgressElement = function (***REMOVED*** {
          return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body***REMOVED***, this.refresh(***REMOVED***;
        ***REMOVED***, e.prototype.fadeProgressElement = function (t***REMOVED*** {
          return this.progressElement.style.opacity = 0, setTimeout(t, 1.5 * r***REMOVED***;
        ***REMOVED***, e.prototype.uninstallProgressElement = function (***REMOVED*** {
          return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement***REMOVED*** : void 0;
        ***REMOVED***, e.prototype.startTrickling = function (***REMOVED*** {
          return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, r***REMOVED***;
        ***REMOVED***, e.prototype.stopTrickling = function (***REMOVED*** {
          return clearInterval(this.trickleInterval***REMOVED***, this.trickleInterval = null;
        ***REMOVED***, e.prototype.trickle = function (***REMOVED*** {
          return this.setValue(this.value + Math.random(***REMOVED*** / 100***REMOVED***;
        ***REMOVED***, e.prototype.refresh = function (***REMOVED*** {
          return requestAnimationFrame(function (t***REMOVED*** {
            return function (***REMOVED*** {
              return t.progressElement.style.width = 10 + 90 * t.value + "%";
            ***REMOVED***;
          ***REMOVED***(this***REMOVED******REMOVED***;
        ***REMOVED***, e.prototype.createStylesheetElement = function (***REMOVED*** {
          var t;
          return t = document.createElement("style"***REMOVED***, t.type = "text/css", t.textContent = this.constructor.defaultCSS, t;
        ***REMOVED***, e.prototype.createProgressElement = function (***REMOVED*** {
          var t;
          return t = document.createElement("div"***REMOVED***, t.className = "turbolinks-progress-bar", t;
        ***REMOVED***, e;
      ***REMOVED***(***REMOVED***;
    ***REMOVED***.call(this***REMOVED***, function (***REMOVED*** {
      var t = function (t, e***REMOVED*** {
        return function (***REMOVED*** {
          return t.apply(e, arguments***REMOVED***;
        ***REMOVED***;
      ***REMOVED***;
      e.BrowserAdapter = function (***REMOVED*** {
        function r(r***REMOVED*** {
          this.controller = r, this.showProgressBar = t(this.showProgressBar, this***REMOVED***, this.progressBar = new e.ProgressBar(***REMOVED***;
        ***REMOVED***
        var n, o, i;
        return i = e.HttpRequest, n = i.NETWORK_FAILURE, o = i.TIMEOUT_FAILURE, r.prototype.visitProposedToLocationWithAction = function (t, e***REMOVED*** {
          return this.controller.startVisitToLocationWithAction(t, e***REMOVED***;
        ***REMOVED***, r.prototype.visitStarted = function (t***REMOVED*** {
          return t.issueRequest(***REMOVED***, t.changeHistory(***REMOVED***, t.loadCachedSnapshot(***REMOVED***;
        ***REMOVED***, r.prototype.visitRequestStarted = function (t***REMOVED*** {
          return this.progressBar.setValue(0***REMOVED***, t.hasCachedSnapshot(***REMOVED*** || "restore" !== t.action ? this.showProgressBarAfterDelay(***REMOVED*** : this.showProgressBar(***REMOVED***;
        ***REMOVED***, r.prototype.visitRequestProgressed = function (t***REMOVED*** {
          return this.progressBar.setValue(t.progress***REMOVED***;
        ***REMOVED***, r.prototype.visitRequestCompleted = function (t***REMOVED*** {
          return t.loadResponse(***REMOVED***;
        ***REMOVED***, r.prototype.visitRequestFailedWithStatusCode = function (t, e***REMOVED*** {
          switch (e***REMOVED*** {
            case n:
            case o:
              return this.reload(***REMOVED***;
            default:
              return t.loadResponse(***REMOVED***;
          ***REMOVED***
        ***REMOVED***, r.prototype.visitRequestFinished = function (t***REMOVED*** {
          return this.hideProgressBar(***REMOVED***;
        ***REMOVED***, r.prototype.visitCompleted = function (t***REMOVED*** {
          return t.followRedirect(***REMOVED***;
        ***REMOVED***, r.prototype.pageInvalidated = function (***REMOVED*** {
          return this.reload(***REMOVED***;
        ***REMOVED***, r.prototype.showProgressBarAfterDelay = function (***REMOVED*** {
          return this.progressBarTimeout = setTimeout(this.showProgressBar, this.controller.progressBarDelay***REMOVED***;
        ***REMOVED***, r.prototype.showProgressBar = function (***REMOVED*** {
          return this.progressBar.show(***REMOVED***;
        ***REMOVED***, r.prototype.hideProgressBar = function (***REMOVED*** {
          return this.progressBar.hide(***REMOVED***, clearTimeout(this.progressBarTimeout***REMOVED***;
        ***REMOVED***, r.prototype.reload = function (***REMOVED*** {
          return window.location.reload(***REMOVED***;
        ***REMOVED***, r;
      ***REMOVED***(***REMOVED***;
    ***REMOVED***.call(this***REMOVED***, function (***REMOVED*** {
      var t = function (t, e***REMOVED*** {
        return function (***REMOVED*** {
          return t.apply(e, arguments***REMOVED***;
        ***REMOVED***;
      ***REMOVED***;
      e.History = function (***REMOVED*** {
        function r(e***REMOVED*** {
          this.delegate = e, this.onPageLoad = t(this.onPageLoad, this***REMOVED***, this.onPopState = t(this.onPopState, this***REMOVED***;
        ***REMOVED***
        return r.prototype.start = function (***REMOVED*** {
          return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1***REMOVED***, addEventListener("load", this.onPageLoad, !1***REMOVED***, this.started = !0***REMOVED***;
        ***REMOVED***, r.prototype.stop = function (***REMOVED*** {
          return this.started ? (removeEventListener("popstate", this.onPopState, !1***REMOVED***, removeEventListener("load", this.onPageLoad, !1***REMOVED***, this.started = !1***REMOVED*** : void 0;
        ***REMOVED***, r.prototype.push = function (t, r***REMOVED*** {
          return t = e.Location.wrap(t***REMOVED***, this.update("push", t, r***REMOVED***;
        ***REMOVED***, r.prototype.replace = function (t, r***REMOVED*** {
          return t = e.Location.wrap(t***REMOVED***, this.update("replace", t, r***REMOVED***;
        ***REMOVED***, r.prototype.onPopState = function (t***REMOVED*** {
          var r, n, o, i;
          return this.shouldHandlePopState(***REMOVED*** && (i = null != (n = t.state***REMOVED*** ? n.turbolinks : void 0***REMOVED*** ? (r = e.Location.wrap(window.location***REMOVED***, o = i.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(r, o***REMOVED******REMOVED*** : void 0;
        ***REMOVED***, r.prototype.onPageLoad = function (t***REMOVED*** {
          return e.defer(function (t***REMOVED*** {
            return function (***REMOVED*** {
              return t.pageLoaded = !0;
            ***REMOVED***;
          ***REMOVED***(this***REMOVED******REMOVED***;
        ***REMOVED***, r.prototype.shouldHandlePopState = function (***REMOVED*** {
          return this.pageIsLoaded(***REMOVED***;
        ***REMOVED***, r.prototype.pageIsLoaded = function (***REMOVED*** {
          return this.pageLoaded || "complete" === document.readyState;
        ***REMOVED***, r.prototype.update = function (t, e, r***REMOVED*** {
          var n;
          return n = {
            turbolinks: {
              restorationIdentifier: r
            ***REMOVED***
          ***REMOVED***, history[t + "State"](n, null, e***REMOVED***;
        ***REMOVED***, r;
      ***REMOVED***(***REMOVED***;
    ***REMOVED***.call(this***REMOVED***, function (***REMOVED*** {
      e.HeadDetails = function (***REMOVED*** {
        function t(t***REMOVED*** {
          var e, r, n, s, a, u;
          for (this.elements = {***REMOVED***, n = 0, a = t.length; a > n; n++***REMOVED*** u = t[n], u.nodeType === Node.ELEMENT_NODE && (s = u.outerHTML, r = null != (e = this.elements***REMOVED***[s] ? e[s] : e[s] = {
            type: i(u***REMOVED***,
            tracked: o(u***REMOVED***,
            elements: []
          ***REMOVED***, r.elements.push(u***REMOVED******REMOVED***;
        ***REMOVED***
        var e, r, n, o, i;
        return t.fromHeadElement = function (t***REMOVED*** {
          var e;
          return new this(null != (e = null != t ? t.childNodes : void 0***REMOVED*** ? e : []***REMOVED***;
        ***REMOVED***, t.prototype.hasElementWithKey = function (t***REMOVED*** {
          return t in this.elements;
        ***REMOVED***, t.prototype.getTrackedElementSignature = function (***REMOVED*** {
          var t, e;
          return function (***REMOVED*** {
            var r, n;
            r = this.elements, n = [];
            for (t in r***REMOVED*** e = r[t].tracked, e && n.push(t***REMOVED***;
            return n;
          ***REMOVED***.call(this***REMOVED***.join(""***REMOVED***;
        ***REMOVED***, t.prototype.getScriptElementsNotInDetails = function (t***REMOVED*** {
          return this.getElementsMatchingTypeNotInDetails("script", t***REMOVED***;
        ***REMOVED***, t.prototype.getStylesheetElementsNotInDetails = function (t***REMOVED*** {
          return this.getElementsMatchingTypeNotInDetails("stylesheet", t***REMOVED***;
        ***REMOVED***, t.prototype.getElementsMatchingTypeNotInDetails = function (t, e***REMOVED*** {
          var r, n, o, i, s, a;
          o = this.elements, s = [];
          for (n in o***REMOVED*** i = o[n], a = i.type, r = i.elements, a !== t || e.hasElementWithKey(n***REMOVED*** || s.push(r[0]***REMOVED***;
          return s;
        ***REMOVED***, t.prototype.getProvisionalElements = function (***REMOVED*** {
          var t, e, r, n, o, i, s;
          r = [], n = this.elements;
          for (e in n***REMOVED*** o = n[e], s = o.type, i = o.tracked, t = o.elements, null != s || i ? t.length > 1 && r.push.apply(r, t.slice(1***REMOVED******REMOVED*** : r.push.apply(r, t***REMOVED***;
          return r;
        ***REMOVED***, t.prototype.getMetaValue = function (t***REMOVED*** {
          var e;
          return null != (e = this.findMetaElementByName(t***REMOVED******REMOVED*** ? e.getAttribute("content"***REMOVED*** : void 0;
        ***REMOVED***, t.prototype.findMetaElementByName = function (t***REMOVED*** {
          var r, n, o, i;
          r = void 0, i = this.elements;
          for (o in i***REMOVED*** n = i[o].elements, e(n[0], t***REMOVED*** && (r = n[0]***REMOVED***;
          return r;
        ***REMOVED***, i = function (t***REMOVED*** {
          return r(t***REMOVED*** ? "script" : n(t***REMOVED*** ? "stylesheet" : void 0;
        ***REMOVED***, o = function (t***REMOVED*** {
          return "reload" === t.getAttribute("data-turbolinks-track"***REMOVED***;
        ***REMOVED***, r = function (t***REMOVED*** {
          var e;
          return e = t.tagName.toLowerCase(***REMOVED***, "script" === e;
        ***REMOVED***, n = function (t***REMOVED*** {
          var e;
          return e = t.tagName.toLowerCase(***REMOVED***, "style" === e || "link" === e && "stylesheet" === t.getAttribute("rel"***REMOVED***;
        ***REMOVED***, e = function (t, e***REMOVED*** {
          var r;
          return r = t.tagName.toLowerCase(***REMOVED***, "meta" === r && t.getAttribute("name"***REMOVED*** === e;
        ***REMOVED***, t;
      ***REMOVED***(***REMOVED***;
    ***REMOVED***.call(this***REMOVED***, function (***REMOVED*** {
      e.Snapshot = function (***REMOVED*** {
        function t(t, e***REMOVED*** {
          this.headDetails = t, this.bodyElement = e;
        ***REMOVED***
        return t.wrap = function (t***REMOVED*** {
          return t instanceof this ? t : "string" == typeof t ? this.fromHTMLString(t***REMOVED*** : this.fromHTMLElement(t***REMOVED***;
        ***REMOVED***, t.fromHTMLString = function (t***REMOVED*** {
          var e;
          return e = document.createElement("html"***REMOVED***, e.innerHTML = t, this.fromHTMLElement(e***REMOVED***;
        ***REMOVED***, t.fromHTMLElement = function (t***REMOVED*** {
          var r, n, o, i;
          return o = t.querySelector("head"***REMOVED***, r = null != (i = t.querySelector("body"***REMOVED******REMOVED*** ? i : document.createElement("body"***REMOVED***, n = e.HeadDetails.fromHeadElement(o***REMOVED***, new this(n, r***REMOVED***;
        ***REMOVED***, t.prototype.clone = function (***REMOVED*** {
          return new this.constructor(this.headDetails, this.bodyElement.cloneNode(!0***REMOVED******REMOVED***;
        ***REMOVED***, t.prototype.getRootLocation = function (***REMOVED*** {
          var t, r;
          return r = null != (t = this.getSetting("root"***REMOVED******REMOVED*** ? t : "/", new e.Location(r***REMOVED***;
        ***REMOVED***, t.prototype.getCacheControlValue = function (***REMOVED*** {
          return this.getSetting("cache-control"***REMOVED***;
        ***REMOVED***, t.prototype.getElementForAnchor = function (t***REMOVED*** {
          try {
            return this.bodyElement.querySelector("[id='" + t + "'], a[name='" + t + "']"***REMOVED***;
          ***REMOVED*** catch (e***REMOVED*** {***REMOVED***
        ***REMOVED***, t.prototype.getPermanentElements = function (***REMOVED*** {
          return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]"***REMOVED***;
        ***REMOVED***, t.prototype.getPermanentElementById = function (t***REMOVED*** {
          return this.bodyElement.querySelector("#" + t + "[data-turbolinks-permanent]"***REMOVED***;
        ***REMOVED***, t.prototype.getPermanentElementsPresentInSnapshot = function (t***REMOVED*** {
          var e, r, n, o, i;
          for (o = this.getPermanentElements(***REMOVED***, i = [], r = 0, n = o.length; n > r; r++***REMOVED*** e = o[r], t.getPermanentElementById(e.id***REMOVED*** && i.push(e***REMOVED***;
          return i;
        ***REMOVED***, t.prototype.findFirstAutofocusableElement = function (***REMOVED*** {
          return this.bodyElement.querySelector("[autofocus]"***REMOVED***;
        ***REMOVED***, t.prototype.hasAnchor = function (t***REMOVED*** {
          return null != this.getElementForAnchor(t***REMOVED***;
        ***REMOVED***, t.prototype.isPreviewable = function (***REMOVED*** {
          return "no-preview" !== this.getCacheControlValue(***REMOVED***;
        ***REMOVED***, t.prototype.isCacheable = function (***REMOVED*** {
          return "no-cache" !== this.getCacheControlValue(***REMOVED***;
        ***REMOVED***, t.prototype.isVisitable = function (***REMOVED*** {
          return "reload" !== this.getSetting("visit-control"***REMOVED***;
        ***REMOVED***, t.prototype.getSetting = function (t***REMOVED*** {
          return this.headDetails.getMetaValue("turbolinks-" + t***REMOVED***;
        ***REMOVED***, t;
      ***REMOVED***(***REMOVED***;
    ***REMOVED***.call(this***REMOVED***, function (***REMOVED*** {
      var t = [].slice;
      e.Renderer = function (***REMOVED*** {
        function e(***REMOVED*** {***REMOVED***
        var r;
        return e.render = function (***REMOVED*** {
          var e, r, n, o;
          return n = arguments[0], r = arguments[1], e = 3 <= arguments.length ? t.call(arguments, 2***REMOVED*** : [], o = function (t, e, r***REMOVED*** {
            r.prototype = t.prototype;
            var n = new r(***REMOVED***,
              o = t.apply(n, e***REMOVED***;
            return Object(o***REMOVED*** === o ? o : n;
          ***REMOVED***(this, e, function (***REMOVED*** {***REMOVED******REMOVED***, o.delegate = n, o.render(r***REMOVED***, o;
        ***REMOVED***, e.prototype.renderView = function (t***REMOVED*** {
          return this.delegate.viewWillRender(this.newBody***REMOVED***, t(***REMOVED***, this.delegate.viewRendered(this.newBody***REMOVED***;
        ***REMOVED***, e.prototype.invalidateView = function (***REMOVED*** {
          return this.delegate.viewInvalidated(***REMOVED***;
        ***REMOVED***, e.prototype.createScriptElement = function (t***REMOVED*** {
          var e;
          return "false" === t.getAttribute("data-turbolinks-eval"***REMOVED*** ? t : (e = document.createElement("script"***REMOVED***, e.textContent = t.textContent, e.async = !1, r(e, t***REMOVED***, e***REMOVED***;
        ***REMOVED***, r = function (t, e***REMOVED*** {
          var r, n, o, i, s, a, u;
          for (i = e.attributes, a = [], r = 0, n = i.length; n > r; r++***REMOVED*** s = i[r], o = s.name, u = s.value, a.push(t.setAttribute(o, u***REMOVED******REMOVED***;
          return a;
        ***REMOVED***, e;
      ***REMOVED***(***REMOVED***;
    ***REMOVED***.call(this***REMOVED***, function (***REMOVED*** {
      var t,
        r,
        n = function (t, e***REMOVED*** {
          function r(***REMOVED*** {
            this.constructor = t;
          ***REMOVED***
          for (var n in e***REMOVED*** o.call(e, n***REMOVED*** && (t[n] = e[n]***REMOVED***;
          return r.prototype = e.prototype, t.prototype = new r(***REMOVED***, t.__super__ = e.prototype, t;
        ***REMOVED***,
        o = {***REMOVED***.hasOwnProperty;
      e.SnapshotRenderer = function (e***REMOVED*** {
        function o(t, e, r***REMOVED*** {
          this.currentSnapshot = t, this.newSnapshot = e, this.isPreview = r, this.currentHeadDetails = this.currentSnapshot.headDetails, this.newHeadDetails = this.newSnapshot.headDetails, this.currentBody = this.currentSnapshot.bodyElement, this.newBody = this.newSnapshot.bodyElement;
        ***REMOVED***
        return n(o, e***REMOVED***, o.prototype.render = function (t***REMOVED*** {
          return this.shouldRender(***REMOVED*** ? (this.mergeHead(***REMOVED***, this.renderView(function (e***REMOVED*** {
            return function (***REMOVED*** {
              return e.replaceBody(***REMOVED***, e.isPreview || e.focusFirstAutofocusableElement(***REMOVED***, t(***REMOVED***;
            ***REMOVED***;
          ***REMOVED***(this***REMOVED******REMOVED******REMOVED*** : this.invalidateView(***REMOVED***;
        ***REMOVED***, o.prototype.mergeHead = function (***REMOVED*** {
          return this.copyNewHeadStylesheetElements(***REMOVED***, this.copyNewHeadScriptElements(***REMOVED***, this.removeCurrentHeadProvisionalElements(***REMOVED***, this.copyNewHeadProvisionalElements(***REMOVED***;
        ***REMOVED***, o.prototype.replaceBody = function (***REMOVED*** {
          var t;
          return t = this.relocateCurrentBodyPermanentElements(***REMOVED***, this.activateNewBodyScriptElements(***REMOVED***, this.assignNewBody(***REMOVED***, this.replacePlaceholderElementsWithClonedPermanentElements(t***REMOVED***;
        ***REMOVED***, o.prototype.shouldRender = function (***REMOVED*** {
          return this.newSnapshot.isVisitable(***REMOVED*** && this.trackedElementsAreIdentical(***REMOVED***;
        ***REMOVED***, o.prototype.trackedElementsAreIdentical = function (***REMOVED*** {
          return this.currentHeadDetails.getTrackedElementSignature(***REMOVED*** === this.newHeadDetails.getTrackedElementSignature(***REMOVED***;
        ***REMOVED***, o.prototype.copyNewHeadStylesheetElements = function (***REMOVED*** {
          var t, e, r, n, o;
          for (n = this.getNewHeadStylesheetElements(***REMOVED***, o = [], e = 0, r = n.length; r > e; e++***REMOVED*** t = n[e], o.push(document.head.appendChild(t***REMOVED******REMOVED***;
          return o;
        ***REMOVED***, o.prototype.copyNewHeadScriptElements = function (***REMOVED*** {
          var t, e, r, n, o;
          for (n = this.getNewHeadScriptElements(***REMOVED***, o = [], e = 0, r = n.length; r > e; e++***REMOVED*** t = n[e], o.push(document.head.appendChild(this.createScriptElement(t***REMOVED******REMOVED******REMOVED***;
          return o;
        ***REMOVED***, o.prototype.removeCurrentHeadProvisionalElements = function (***REMOVED*** {
          var t, e, r, n, o;
          for (n = this.getCurrentHeadProvisionalElements(***REMOVED***, o = [], e = 0, r = n.length; r > e; e++***REMOVED*** t = n[e], o.push(document.head.removeChild(t***REMOVED******REMOVED***;
          return o;
        ***REMOVED***, o.prototype.copyNewHeadProvisionalElements = function (***REMOVED*** {
          var t, e, r, n, o;
          for (n = this.getNewHeadProvisionalElements(***REMOVED***, o = [], e = 0, r = n.length; r > e; e++***REMOVED*** t = n[e], o.push(document.head.appendChild(t***REMOVED******REMOVED***;
          return o;
        ***REMOVED***, o.prototype.relocateCurrentBodyPermanentElements = function (***REMOVED*** {
          var e, n, o, i, s, a, u;
          for (a = this.getCurrentBodyPermanentElements(***REMOVED***, u = [], e = 0, n = a.length; n > e; e++***REMOVED*** i = a[e], s = t(i***REMOVED***, o = this.newSnapshot.getPermanentElementById(i.id***REMOVED***, r(i, s.element***REMOVED***, r(o, i***REMOVED***, u.push(s***REMOVED***;
          return u;
        ***REMOVED***, o.prototype.replacePlaceholderElementsWithClonedPermanentElements = function (t***REMOVED*** {
          var e, n, o, i, s, a, u;
          for (u = [], o = 0, i = t.length; i > o; o++***REMOVED*** a = t[o], n = a.element, s = a.permanentElement, e = s.cloneNode(!0***REMOVED***, u.push(r(n, e***REMOVED******REMOVED***;
          return u;
        ***REMOVED***, o.prototype.activateNewBodyScriptElements = function (***REMOVED*** {
          var t, e, n, o, i, s;
          for (i = this.getNewBodyScriptElements(***REMOVED***, s = [], e = 0, o = i.length; o > e; e++***REMOVED*** n = i[e], t = this.createScriptElement(n***REMOVED***, s.push(r(n, t***REMOVED******REMOVED***;
          return s;
        ***REMOVED***, o.prototype.assignNewBody = function (***REMOVED*** {
          return document.body = this.newBody;
        ***REMOVED***, o.prototype.focusFirstAutofocusableElement = function (***REMOVED*** {
          var t;
          return null != (t = this.newSnapshot.findFirstAutofocusableElement(***REMOVED******REMOVED*** ? t.focus(***REMOVED*** : void 0;
        ***REMOVED***, o.prototype.getNewHeadStylesheetElements = function (***REMOVED*** {
          return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails***REMOVED***;
        ***REMOVED***, o.prototype.getNewHeadScriptElements = function (***REMOVED*** {
          return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails***REMOVED***;
        ***REMOVED***, o.prototype.getCurrentHeadProvisionalElements = function (***REMOVED*** {
          return this.currentHeadDetails.getProvisionalElements(***REMOVED***;
        ***REMOVED***, o.prototype.getNewHeadProvisionalElements = function (***REMOVED*** {
          return this.newHeadDetails.getProvisionalElements(***REMOVED***;
        ***REMOVED***, o.prototype.getCurrentBodyPermanentElements = function (***REMOVED*** {
          return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot***REMOVED***;
        ***REMOVED***, o.prototype.getNewBodyScriptElements = function (***REMOVED*** {
          return this.newBody.querySelectorAll("script"***REMOVED***;
        ***REMOVED***, o;
      ***REMOVED***(e.Renderer***REMOVED***, t = function (t***REMOVED*** {
        var e;
        return e = document.createElement("meta"***REMOVED***, e.setAttribute("name", "turbolinks-permanent-placeholder"***REMOVED***, e.setAttribute("content", t.id***REMOVED***, {
          element: e,
          permanentElement: t
        ***REMOVED***;
      ***REMOVED***, r = function (t, e***REMOVED*** {
        var r;
        return (r = t.parentNode***REMOVED*** ? r.replaceChild(e, t***REMOVED*** : void 0;
      ***REMOVED***;
    ***REMOVED***.call(this***REMOVED***, function (***REMOVED*** {
      var t = function (t, e***REMOVED*** {
          function n(***REMOVED*** {
            this.constructor = t;
          ***REMOVED***
          for (var o in e***REMOVED*** r.call(e, o***REMOVED*** && (t[o] = e[o]***REMOVED***;
          return n.prototype = e.prototype, t.prototype = new n(***REMOVED***, t.__super__ = e.prototype, t;
        ***REMOVED***,
        r = {***REMOVED***.hasOwnProperty;
      e.ErrorRenderer = function (e***REMOVED*** {
        function r(t***REMOVED*** {
          var e;
          e = document.createElement("html"***REMOVED***, e.innerHTML = t, this.newHead = e.querySelector("head"***REMOVED***, this.newBody = e.querySelector("body"***REMOVED***;
        ***REMOVED***
        return t(r, e***REMOVED***, r.prototype.render = function (t***REMOVED*** {
          return this.renderView(function (e***REMOVED*** {
            return function (***REMOVED*** {
              return e.replaceHeadAndBody(***REMOVED***, e.activateBodyScriptElements(***REMOVED***, t(***REMOVED***;
            ***REMOVED***;
          ***REMOVED***(this***REMOVED******REMOVED***;
        ***REMOVED***, r.prototype.replaceHeadAndBody = function (***REMOVED*** {
          var t, e;
          return e = document.head, t = document.body, e.parentNode.replaceChild(this.newHead, e***REMOVED***, t.parentNode.replaceChild(this.newBody, t***REMOVED***;
        ***REMOVED***, r.prototype.activateBodyScriptElements = function (***REMOVED*** {
          var t, e, r, n, o, i;
          for (n = this.getScriptElements(***REMOVED***, i = [], e = 0, r = n.length; r > e; e++***REMOVED*** o = n[e], t = this.createScriptElement(o***REMOVED***, i.push(o.parentNode.replaceChild(t, o***REMOVED******REMOVED***;
          return i;
        ***REMOVED***, r.prototype.getScriptElements = function (***REMOVED*** {
          return document.documentElement.querySelectorAll("script"***REMOVED***;
        ***REMOVED***, r;
      ***REMOVED***(e.Renderer***REMOVED***;
    ***REMOVED***.call(this***REMOVED***, function (***REMOVED*** {
      e.View = function (***REMOVED*** {
        function t(t***REMOVED*** {
          this.delegate = t, this.htmlElement = document.documentElement;
        ***REMOVED***
        return t.prototype.getRootLocation = function (***REMOVED*** {
          return this.getSnapshot(***REMOVED***.getRootLocation(***REMOVED***;
        ***REMOVED***, t.prototype.getElementForAnchor = function (t***REMOVED*** {
          return this.getSnapshot(***REMOVED***.getElementForAnchor(t***REMOVED***;
        ***REMOVED***, t.prototype.getSnapshot = function (***REMOVED*** {
          return e.Snapshot.fromHTMLElement(this.htmlElement***REMOVED***;
        ***REMOVED***, t.prototype.render = function (t, e***REMOVED*** {
          var r, n, o;
          return o = t.snapshot, r = t.error, n = t.isPreview, this.markAsPreview(n***REMOVED***, null != o ? this.renderSnapshot(o, n, e***REMOVED*** : this.renderError(r, e***REMOVED***;
        ***REMOVED***, t.prototype.markAsPreview = function (t***REMOVED*** {
          return t ? this.htmlElement.setAttribute("data-turbolinks-preview", ""***REMOVED*** : this.htmlElement.removeAttribute("data-turbolinks-preview"***REMOVED***;
        ***REMOVED***, t.prototype.renderSnapshot = function (t, r, n***REMOVED*** {
          return e.SnapshotRenderer.render(this.delegate, n, this.getSnapshot(***REMOVED***, e.Snapshot.wrap(t***REMOVED***, r***REMOVED***;
        ***REMOVED***, t.prototype.renderError = function (t, r***REMOVED*** {
          return e.ErrorRenderer.render(this.delegate, r, t***REMOVED***;
        ***REMOVED***, t;
      ***REMOVED***(***REMOVED***;
    ***REMOVED***.call(this***REMOVED***, function (***REMOVED*** {
      var t = function (t, e***REMOVED*** {
        return function (***REMOVED*** {
          return t.apply(e, arguments***REMOVED***;
        ***REMOVED***;
      ***REMOVED***;
      e.ScrollManager = function (***REMOVED*** {
        function r(r***REMOVED*** {
          this.delegate = r, this.onScroll = t(this.onScroll, this***REMOVED***, this.onScroll = e.throttle(this.onScroll***REMOVED***;
        ***REMOVED***
        return r.prototype.start = function (***REMOVED*** {
          return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1***REMOVED***, this.onScroll(***REMOVED***, this.started = !0***REMOVED***;
        ***REMOVED***, r.prototype.stop = function (***REMOVED*** {
          return this.started ? (removeEventListener("scroll", this.onScroll, !1***REMOVED***, this.started = !1***REMOVED*** : void 0;
        ***REMOVED***, r.prototype.scrollToElement = function (t***REMOVED*** {
          return t.scrollIntoView(***REMOVED***;
        ***REMOVED***, r.prototype.scrollToPosition = function (t***REMOVED*** {
          var e, r;
          return e = t.x, r = t.y, window.scrollTo(e, r***REMOVED***;
        ***REMOVED***, r.prototype.onScroll = function (t***REMOVED*** {
          return this.updatePosition({
            x: window.pageXOffset,
            y: window.pageYOffset
          ***REMOVED******REMOVED***;
        ***REMOVED***, r.prototype.updatePosition = function (t***REMOVED*** {
          var e;
          return this.position = t, null != (e = this.delegate***REMOVED*** ? e.scrollPositionChanged(this.position***REMOVED*** : void 0;
        ***REMOVED***, r;
      ***REMOVED***(***REMOVED***;
    ***REMOVED***.call(this***REMOVED***, function (***REMOVED*** {
      e.SnapshotCache = function (***REMOVED*** {
        function t(t***REMOVED*** {
          this.size = t, this.keys = [], this.snapshots = {***REMOVED***;
        ***REMOVED***
        var r;
        return t.prototype.has = function (t***REMOVED*** {
          var e;
          return e = r(t***REMOVED***, e in this.snapshots;
        ***REMOVED***, t.prototype.get = function (t***REMOVED*** {
          var e;
          if (this.has(t***REMOVED******REMOVED*** return e = this.read(t***REMOVED***, this.touch(t***REMOVED***, e;
        ***REMOVED***, t.prototype.put = function (t, e***REMOVED*** {
          return this.write(t, e***REMOVED***, this.touch(t***REMOVED***, e;
        ***REMOVED***, t.prototype.read = function (t***REMOVED*** {
          var e;
          return e = r(t***REMOVED***, this.snapshots[e];
        ***REMOVED***, t.prototype.write = function (t, e***REMOVED*** {
          var n;
          return n = r(t***REMOVED***, this.snapshots[n] = e;
        ***REMOVED***, t.prototype.touch = function (t***REMOVED*** {
          var e, n;
          return n = r(t***REMOVED***, e = this.keys.indexOf(n***REMOVED***, e > -1 && this.keys.splice(e, 1***REMOVED***, this.keys.unshift(n***REMOVED***, this.trim(***REMOVED***;
        ***REMOVED***, t.prototype.trim = function (***REMOVED*** {
          var t, e, r, n, o;
          for (n = this.keys.splice(this.size***REMOVED***, o = [], t = 0, r = n.length; r > t; t++***REMOVED*** e = n[t], o.push(delete this.snapshots[e]***REMOVED***;
          return o;
        ***REMOVED***, r = function (t***REMOVED*** {
          return e.Location.wrap(t***REMOVED***.toCacheKey(***REMOVED***;
        ***REMOVED***, t;
      ***REMOVED***(***REMOVED***;
    ***REMOVED***.call(this***REMOVED***, function (***REMOVED*** {
      var t = function (t, e***REMOVED*** {
        return function (***REMOVED*** {
          return t.apply(e, arguments***REMOVED***;
        ***REMOVED***;
      ***REMOVED***;
      e.Visit = function (***REMOVED*** {
        function r(r, n, o***REMOVED*** {
          this.controller = r, this.action = o, this.performScroll = t(this.performScroll, this***REMOVED***, this.identifier = e.uuid(***REMOVED***, this.location = e.Location.wrap(n***REMOVED***, this.adapter = this.controller.adapter, this.state = "initialized", this.timingMetrics = {***REMOVED***;
        ***REMOVED***
        var n;
        return r.prototype.start = function (***REMOVED*** {
          return "initialized" === this.state ? (this.recordTimingMetric("visitStart"***REMOVED***, this.state = "started", this.adapter.visitStarted(this***REMOVED******REMOVED*** : void 0;
        ***REMOVED***, r.prototype.cancel = function (***REMOVED*** {
          var t;
          return "started" === this.state ? (null != (t = this.request***REMOVED*** && t.cancel(***REMOVED***, this.cancelRender(***REMOVED***, this.state = "canceled"***REMOVED*** : void 0;
        ***REMOVED***, r.prototype.complete = function (***REMOVED*** {
          var t;
          return "started" === this.state ? (this.recordTimingMetric("visitEnd"***REMOVED***, this.state = "completed", "function" == typeof (t = this.adapter***REMOVED***.visitCompleted && t.visitCompleted(this***REMOVED***, this.controller.visitCompleted(this***REMOVED******REMOVED*** : void 0;
        ***REMOVED***, r.prototype.fail = function (***REMOVED*** {
          var t;
          return "started" === this.state ? (this.state = "failed", "function" == typeof (t = this.adapter***REMOVED***.visitFailed ? t.visitFailed(this***REMOVED*** : void 0***REMOVED*** : void 0;
        ***REMOVED***, r.prototype.changeHistory = function (***REMOVED*** {
          var t, e;
          return this.historyChanged ? void 0 : (t = this.location.isEqualTo(this.referrer***REMOVED*** ? "replace" : this.action, e = n(t***REMOVED***, this.controller[e](this.location, this.restorationIdentifier***REMOVED***, this.historyChanged = !0***REMOVED***;
        ***REMOVED***, r.prototype.issueRequest = function (***REMOVED*** {
          return this.shouldIssueRequest(***REMOVED*** && null == this.request ? (this.progress = 0, this.request = new e.HttpRequest(this, this.location, this.referrer***REMOVED***, this.request.send(***REMOVED******REMOVED*** : void 0;
        ***REMOVED***, r.prototype.getCachedSnapshot = function (***REMOVED*** {
          var t;
          return !(t = this.controller.getCachedSnapshotForLocation(this.location***REMOVED******REMOVED*** || null != this.location.anchor && !t.hasAnchor(this.location.anchor***REMOVED*** || "restore" !== this.action && !t.isPreviewable(***REMOVED*** ? void 0 : t;
        ***REMOVED***, r.prototype.hasCachedSnapshot = function (***REMOVED*** {
          return null != this.getCachedSnapshot(***REMOVED***;
        ***REMOVED***, r.prototype.loadCachedSnapshot = function (***REMOVED*** {
          var t, e;
          return (e = this.getCachedSnapshot(***REMOVED******REMOVED*** ? (t = this.shouldIssueRequest(***REMOVED***, this.render(function (***REMOVED*** {
            var r;
            return this.cacheSnapshot(***REMOVED***, this.controller.render({
              snapshot: e,
              isPreview: t
            ***REMOVED***, this.performScroll***REMOVED***, "function" == typeof (r = this.adapter***REMOVED***.visitRendered && r.visitRendered(this***REMOVED***, t ? void 0 : this.complete(***REMOVED***;
          ***REMOVED******REMOVED******REMOVED*** : void 0;
        ***REMOVED***, r.prototype.loadResponse = function (***REMOVED*** {
          return null != this.response ? this.render(function (***REMOVED*** {
            var t, e;
            return this.cacheSnapshot(***REMOVED***, this.request.failed ? (this.controller.render({
              error: this.response
            ***REMOVED***, this.performScroll***REMOVED***, "function" == typeof (t = this.adapter***REMOVED***.visitRendered && t.visitRendered(this***REMOVED***, this.fail(***REMOVED******REMOVED*** : (this.controller.render({
              snapshot: this.response
            ***REMOVED***, this.performScroll***REMOVED***, "function" == typeof (e = this.adapter***REMOVED***.visitRendered && e.visitRendered(this***REMOVED***, this.complete(***REMOVED******REMOVED***;
          ***REMOVED******REMOVED*** : void 0;
        ***REMOVED***, r.prototype.followRedirect = function (***REMOVED*** {
          return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier***REMOVED***, this.followedRedirect = !0***REMOVED*** : void 0;
        ***REMOVED***, r.prototype.requestStarted = function (***REMOVED*** {
          var t;
          return this.recordTimingMetric("requestStart"***REMOVED***, "function" == typeof (t = this.adapter***REMOVED***.visitRequestStarted ? t.visitRequestStarted(this***REMOVED*** : void 0;
        ***REMOVED***, r.prototype.requestProgressed = function (t***REMOVED*** {
          var e;
          return this.progress = t, "function" == typeof (e = this.adapter***REMOVED***.visitRequestProgressed ? e.visitRequestProgressed(this***REMOVED*** : void 0;
        ***REMOVED***, r.prototype.requestCompletedWithResponse = function (t, r***REMOVED*** {
          return this.response = t, null != r && (this.redirectedToLocation = e.Location.wrap(r***REMOVED******REMOVED***, this.adapter.visitRequestCompleted(this***REMOVED***;
        ***REMOVED***, r.prototype.requestFailedWithStatusCode = function (t, e***REMOVED*** {
          return this.response = e, this.adapter.visitRequestFailedWithStatusCode(this, t***REMOVED***;
        ***REMOVED***, r.prototype.requestFinished = function (***REMOVED*** {
          var t;
          return this.recordTimingMetric("requestEnd"***REMOVED***, "function" == typeof (t = this.adapter***REMOVED***.visitRequestFinished ? t.visitRequestFinished(this***REMOVED*** : void 0;
        ***REMOVED***, r.prototype.performScroll = function (***REMOVED*** {
          return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition(***REMOVED*** || this.scrollToTop(***REMOVED*** : this.scrollToAnchor(***REMOVED*** || this.scrollToTop(***REMOVED***, this.scrolled = !0***REMOVED***;
        ***REMOVED***, r.prototype.scrollToRestoredPosition = function (***REMOVED*** {
          var t, e;
          return t = null != (e = this.restorationData***REMOVED*** ? e.scrollPosition : void 0, null != t ? (this.controller.scrollToPosition(t***REMOVED***, !0***REMOVED*** : void 0;
        ***REMOVED***, r.prototype.scrollToAnchor = function (***REMOVED*** {
          return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor***REMOVED***, !0***REMOVED*** : void 0;
        ***REMOVED***, r.prototype.scrollToTop = function (***REMOVED*** {
          return this.controller.scrollToPosition({
            x: 0,
            y: 0
          ***REMOVED******REMOVED***;
        ***REMOVED***, r.prototype.recordTimingMetric = function (t***REMOVED*** {
          var e;
          return null != (e = this.timingMetrics***REMOVED***[t] ? e[t] : e[t] = new Date(***REMOVED***.getTime(***REMOVED***;
        ***REMOVED***, r.prototype.getTimingMetrics = function (***REMOVED*** {
          return e.copyObject(this.timingMetrics***REMOVED***;
        ***REMOVED***, n = function (t***REMOVED*** {
          switch (t***REMOVED*** {
            case "replace":
              return "replaceHistoryWithLocationAndRestorationIdentifier";
            case "advance":
            case "restore":
              return "pushHistoryWithLocationAndRestorationIdentifier";
          ***REMOVED***
        ***REMOVED***, r.prototype.shouldIssueRequest = function (***REMOVED*** {
          return "restore" === this.action ? !this.hasCachedSnapshot(***REMOVED*** : !0;
        ***REMOVED***, r.prototype.cacheSnapshot = function (***REMOVED*** {
          return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(***REMOVED***, this.snapshotCached = !0***REMOVED***;
        ***REMOVED***, r.prototype.render = function (t***REMOVED*** {
          return this.cancelRender(***REMOVED***, this.frame = requestAnimationFrame(function (e***REMOVED*** {
            return function (***REMOVED*** {
              return e.frame = null, t.call(e***REMOVED***;
            ***REMOVED***;
          ***REMOVED***(this***REMOVED******REMOVED***;
        ***REMOVED***, r.prototype.cancelRender = function (***REMOVED*** {
          return this.frame ? cancelAnimationFrame(this.frame***REMOVED*** : void 0;
        ***REMOVED***, r;
      ***REMOVED***(***REMOVED***;
    ***REMOVED***.call(this***REMOVED***, function (***REMOVED*** {
      var t = function (t, e***REMOVED*** {
        return function (***REMOVED*** {
          return t.apply(e, arguments***REMOVED***;
        ***REMOVED***;
      ***REMOVED***;
      e.Controller = function (***REMOVED*** {
        function r(***REMOVED*** {
          this.clickBubbled = t(this.clickBubbled, this***REMOVED***, this.clickCaptured = t(this.clickCaptured, this***REMOVED***, this.pageLoaded = t(this.pageLoaded, this***REMOVED***, this.history = new e.History(this***REMOVED***, this.view = new e.View(this***REMOVED***, this.scrollManager = new e.ScrollManager(this***REMOVED***, this.restorationData = {***REMOVED***, this.clearCache(***REMOVED***, this.setProgressBarDelay(500***REMOVED***;
        ***REMOVED***
        return r.prototype.start = function (***REMOVED*** {
          return e.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0***REMOVED***, addEventListener("DOMContentLoaded", this.pageLoaded, !1***REMOVED***, this.scrollManager.start(***REMOVED***, this.startHistory(***REMOVED***, this.started = !0, this.enabled = !0***REMOVED*** : void 0;
        ***REMOVED***, r.prototype.disable = function (***REMOVED*** {
          return this.enabled = !1;
        ***REMOVED***, r.prototype.stop = function (***REMOVED*** {
          return this.started ? (removeEventListener("click", this.clickCaptured, !0***REMOVED***, removeEventListener("DOMContentLoaded", this.pageLoaded, !1***REMOVED***, this.scrollManager.stop(***REMOVED***, this.stopHistory(***REMOVED***, this.started = !1***REMOVED*** : void 0;
        ***REMOVED***, r.prototype.clearCache = function (***REMOVED*** {
          return this.cache = new e.SnapshotCache(10***REMOVED***;
        ***REMOVED***, r.prototype.visit = function (t, r***REMOVED*** {
          var n, o;
          return null == r && (r = {***REMOVED******REMOVED***, t = e.Location.wrap(t***REMOVED***, this.applicationAllowsVisitingLocation(t***REMOVED*** ? this.locationIsVisitable(t***REMOVED*** ? (n = null != (o = r.action***REMOVED*** ? o : "advance", this.adapter.visitProposedToLocationWithAction(t, n***REMOVED******REMOVED*** : window.location = t : void 0;
        ***REMOVED***, r.prototype.startVisitToLocationWithAction = function (t, r, n***REMOVED*** {
          var o;
          return e.supported ? (o = this.getRestorationDataForIdentifier(n***REMOVED***, this.startVisit(t, r, {
            restorationData: o
          ***REMOVED******REMOVED******REMOVED*** : window.location = t;
        ***REMOVED***, r.prototype.setProgressBarDelay = function (t***REMOVED*** {
          return this.progressBarDelay = t;
        ***REMOVED***, r.prototype.startHistory = function (***REMOVED*** {
          return this.location = e.Location.wrap(window.location***REMOVED***, this.restorationIdentifier = e.uuid(***REMOVED***, this.history.start(***REMOVED***, this.history.replace(this.location, this.restorationIdentifier***REMOVED***;
        ***REMOVED***, r.prototype.stopHistory = function (***REMOVED*** {
          return this.history.stop(***REMOVED***;
        ***REMOVED***, r.prototype.pushHistoryWithLocationAndRestorationIdentifier = function (t, r***REMOVED*** {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t***REMOVED***, this.history.push(this.location, this.restorationIdentifier***REMOVED***;
        ***REMOVED***, r.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function (t, r***REMOVED*** {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t***REMOVED***, this.history.replace(this.location, this.restorationIdentifier***REMOVED***;
        ***REMOVED***, r.prototype.historyPoppedToLocationWithRestorationIdentifier = function (t, r***REMOVED*** {
          var n;
          return this.restorationIdentifier = r, this.enabled ? (n = this.getRestorationDataForIdentifier(this.restorationIdentifier***REMOVED***, this.startVisit(t, "restore", {
            restorationIdentifier: this.restorationIdentifier,
            restorationData: n,
            historyChanged: !0
          ***REMOVED******REMOVED***, this.location = e.Location.wrap(t***REMOVED******REMOVED*** : this.adapter.pageInvalidated(***REMOVED***;
        ***REMOVED***, r.prototype.getCachedSnapshotForLocation = function (t***REMOVED*** {
          var e;
          return null != (e = this.cache.get(t***REMOVED******REMOVED*** ? e.clone(***REMOVED*** : void 0;
        ***REMOVED***, r.prototype.shouldCacheSnapshot = function (***REMOVED*** {
          return this.view.getSnapshot(***REMOVED***.isCacheable(***REMOVED***;
        ***REMOVED***, r.prototype.cacheSnapshot = function (***REMOVED*** {
          var t, r;
          return this.shouldCacheSnapshot(***REMOVED*** ? (this.notifyApplicationBeforeCachingSnapshot(***REMOVED***, r = this.view.getSnapshot(***REMOVED***, t = this.lastRenderedLocation, e.defer(function (e***REMOVED*** {
            return function (***REMOVED*** {
              return e.cache.put(t, r.clone(***REMOVED******REMOVED***;
            ***REMOVED***;
          ***REMOVED***(this***REMOVED******REMOVED******REMOVED*** : void 0;
        ***REMOVED***, r.prototype.scrollToAnchor = function (t***REMOVED*** {
          var e;
          return (e = this.view.getElementForAnchor(t***REMOVED******REMOVED*** ? this.scrollToElement(e***REMOVED*** : this.scrollToPosition({
            x: 0,
            y: 0
          ***REMOVED******REMOVED***;
        ***REMOVED***, r.prototype.scrollToElement = function (t***REMOVED*** {
          return this.scrollManager.scrollToElement(t***REMOVED***;
        ***REMOVED***, r.prototype.scrollToPosition = function (t***REMOVED*** {
          return this.scrollManager.scrollToPosition(t***REMOVED***;
        ***REMOVED***, r.prototype.scrollPositionChanged = function (t***REMOVED*** {
          var e;
          return e = this.getCurrentRestorationData(***REMOVED***, e.scrollPosition = t;
        ***REMOVED***, r.prototype.render = function (t, e***REMOVED*** {
          return this.view.render(t, e***REMOVED***;
        ***REMOVED***, r.prototype.viewInvalidated = function (***REMOVED*** {
          return this.adapter.pageInvalidated(***REMOVED***;
        ***REMOVED***, r.prototype.viewWillRender = function (t***REMOVED*** {
          return this.notifyApplicationBeforeRender(t***REMOVED***;
        ***REMOVED***, r.prototype.viewRendered = function (***REMOVED*** {
          return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender(***REMOVED***;
        ***REMOVED***, r.prototype.pageLoaded = function (***REMOVED*** {
          return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad(***REMOVED***;
        ***REMOVED***, r.prototype.clickCaptured = function (***REMOVED*** {
          return removeEventListener("click", this.clickBubbled, !1***REMOVED***, addEventListener("click", this.clickBubbled, !1***REMOVED***;
        ***REMOVED***, r.prototype.clickBubbled = function (t***REMOVED*** {
          var e, r, n;
          return this.enabled && this.clickEventIsSignificant(t***REMOVED*** && (r = this.getVisitableLinkForNode(t.target***REMOVED******REMOVED*** && (n = this.getVisitableLocationForLink(r***REMOVED******REMOVED*** && this.applicationAllowsFollowingLinkToLocation(r, n***REMOVED*** ? (t.preventDefault(***REMOVED***, e = this.getActionForLink(r***REMOVED***, this.visit(n, {
            action: e
          ***REMOVED******REMOVED******REMOVED*** : void 0;
        ***REMOVED***, r.prototype.applicationAllowsFollowingLinkToLocation = function (t, e***REMOVED*** {
          var r;
          return r = this.notifyApplicationAfterClickingLinkToLocation(t, e***REMOVED***, !r.defaultPrevented;
        ***REMOVED***, r.prototype.applicationAllowsVisitingLocation = function (t***REMOVED*** {
          var e;
          return e = this.notifyApplicationBeforeVisitingLocation(t***REMOVED***, !e.defaultPrevented;
        ***REMOVED***, r.prototype.notifyApplicationAfterClickingLinkToLocation = function (t, r***REMOVED*** {
          return e.dispatch("turbolinks:click", {
            target: t,
            data: {
              url: r.absoluteURL
            ***REMOVED***,
            cancelable: !0
          ***REMOVED******REMOVED***;
        ***REMOVED***, r.prototype.notifyApplicationBeforeVisitingLocation = function (t***REMOVED*** {
          return e.dispatch("turbolinks:before-visit", {
            data: {
              url: t.absoluteURL
            ***REMOVED***,
            cancelable: !0
          ***REMOVED******REMOVED***;
        ***REMOVED***, r.prototype.notifyApplicationAfterVisitingLocation = function (t***REMOVED*** {
          return e.dispatch("turbolinks:visit", {
            data: {
              url: t.absoluteURL
            ***REMOVED***
          ***REMOVED******REMOVED***;
        ***REMOVED***, r.prototype.notifyApplicationBeforeCachingSnapshot = function (***REMOVED*** {
          return e.dispatch("turbolinks:before-cache"***REMOVED***;
        ***REMOVED***, r.prototype.notifyApplicationBeforeRender = function (t***REMOVED*** {
          return e.dispatch("turbolinks:before-render", {
            data: {
              newBody: t
            ***REMOVED***
          ***REMOVED******REMOVED***;
        ***REMOVED***, r.prototype.notifyApplicationAfterRender = function (***REMOVED*** {
          return e.dispatch("turbolinks:render"***REMOVED***;
        ***REMOVED***, r.prototype.notifyApplicationAfterPageLoad = function (t***REMOVED*** {
          return null == t && (t = {***REMOVED******REMOVED***, e.dispatch("turbolinks:load", {
            data: {
              url: this.location.absoluteURL,
              timing: t
            ***REMOVED***
          ***REMOVED******REMOVED***;
        ***REMOVED***, r.prototype.startVisit = function (t, e, r***REMOVED*** {
          var n;
          return null != (n = this.currentVisit***REMOVED*** && n.cancel(***REMOVED***, this.currentVisit = this.createVisit(t, e, r***REMOVED***, this.currentVisit.start(***REMOVED***, this.notifyApplicationAfterVisitingLocation(t***REMOVED***;
        ***REMOVED***, r.prototype.createVisit = function (t, r, n***REMOVED*** {
          var o, i, s, a, u;
          return i = null != n ? n : {***REMOVED***, a = i.restorationIdentifier, s = i.restorationData, o = i.historyChanged, u = new e.Visit(this, t, r***REMOVED***, u.restorationIdentifier = null != a ? a : e.uuid(***REMOVED***, u.restorationData = e.copyObject(s***REMOVED***, u.historyChanged = o, u.referrer = this.location, u;
        ***REMOVED***, r.prototype.visitCompleted = function (t***REMOVED*** {
          return this.notifyApplicationAfterPageLoad(t.getTimingMetrics(***REMOVED******REMOVED***;
        ***REMOVED***, r.prototype.clickEventIsSignificant = function (t***REMOVED*** {
          return !(t.defaultPrevented || t.target.isContentEditable || t.which > 1 || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey***REMOVED***;
        ***REMOVED***, r.prototype.getVisitableLinkForNode = function (t***REMOVED*** {
          return this.nodeIsVisitable(t***REMOVED*** ? e.closest(t, "a[href]:not([target]***REMOVED***:not([download]***REMOVED***"***REMOVED*** : void 0;
        ***REMOVED***, r.prototype.getVisitableLocationForLink = function (t***REMOVED*** {
          var r;
          return r = new e.Location(t.getAttribute("href"***REMOVED******REMOVED***, this.locationIsVisitable(r***REMOVED*** ? r : void 0;
        ***REMOVED***, r.prototype.getActionForLink = function (t***REMOVED*** {
          var e;
          return null != (e = t.getAttribute("data-turbolinks-action"***REMOVED******REMOVED*** ? e : "advance";
        ***REMOVED***, r.prototype.nodeIsVisitable = function (t***REMOVED*** {
          var r;
          return (r = e.closest(t, "[data-turbolinks]"***REMOVED******REMOVED*** ? "false" !== r.getAttribute("data-turbolinks"***REMOVED*** : !0;
        ***REMOVED***, r.prototype.locationIsVisitable = function (t***REMOVED*** {
          return t.isPrefixedBy(this.view.getRootLocation(***REMOVED******REMOVED*** && t.isHTML(***REMOVED***;
        ***REMOVED***, r.prototype.getCurrentRestorationData = function (***REMOVED*** {
          return this.getRestorationDataForIdentifier(this.restorationIdentifier***REMOVED***;
        ***REMOVED***, r.prototype.getRestorationDataForIdentifier = function (t***REMOVED*** {
          var e;
          return null != (e = this.restorationData***REMOVED***[t] ? e[t] : e[t] = {***REMOVED***;
        ***REMOVED***, r;
      ***REMOVED***(***REMOVED***;
    ***REMOVED***.call(this***REMOVED***, function (***REMOVED*** {
      !function (***REMOVED*** {
        var t, e;
        if ((t = e = document.currentScript***REMOVED*** && !e.hasAttribute("data-turbolinks-suppress-warning"***REMOVED******REMOVED*** for (; t = t.parentNode;***REMOVED*** if (t === document.body***REMOVED*** return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s", e.outerHTML***REMOVED***;
      ***REMOVED***(***REMOVED***;
    ***REMOVED***.call(this***REMOVED***, function (***REMOVED*** {
      var t, r, n;
      e.start = function (***REMOVED*** {
        return r(***REMOVED*** ? (null == e.controller && (e.controller = t(***REMOVED******REMOVED***, e.controller.start(***REMOVED******REMOVED*** : void 0;
      ***REMOVED***, r = function (***REMOVED*** {
        return null == window.Turbolinks && (window.Turbolinks = e***REMOVED***, n(***REMOVED***;
      ***REMOVED***, t = function (***REMOVED*** {
        var t;
        return t = new e.Controller(***REMOVED***, t.adapter = new e.BrowserAdapter(t***REMOVED***, t;
      ***REMOVED***, n = function (***REMOVED*** {
        return window.Turbolinks === e;
      ***REMOVED***, n(***REMOVED*** && e.start(***REMOVED***;
    ***REMOVED***.call(this***REMOVED***;
  ***REMOVED******REMOVED***.call(this***REMOVED***,  true && module.exports ? module.exports = e :  true && !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e***REMOVED***,
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module***REMOVED******REMOVED*** :
				__WEBPACK_AMD_DEFINE_FACTORY__***REMOVED***,
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__***REMOVED******REMOVED***;
***REMOVED******REMOVED***.call(this***REMOVED***;

/***/ ***REMOVED******REMOVED***,

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack***REMOVED***/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports***REMOVED*** {

var g;

// This works in non-strict mode
g = function (***REMOVED*** {
  return this;
***REMOVED***(***REMOVED***;
try {
  // This works if eval is allowed (see CSP***REMOVED***
  g = g || new Function("return this"***REMOVED***(***REMOVED***;
***REMOVED*** catch (e***REMOVED*** {
  // This works if the window reference is available
  if (typeof window === "object"***REMOVED*** g = window;
***REMOVED***

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global***REMOVED*** { ...***REMOVED***

module.exports = g;

/***/ ***REMOVED******REMOVED***

/******/ ***REMOVED******REMOVED***;
//# sourceMappingURL=application-ed5a8f8a56908968e9fe.js.map