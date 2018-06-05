/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	// import JudgeEnvironment from '_MyLibs/Util/JudgeEnvironment.es6';
	
	
	var _Conf = __webpack_require__(1);
	
	var _Conf2 = _interopRequireDefault(_Conf);
	
	var _Util = __webpack_require__(2);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	var _Func = __webpack_require__(11);
	
	var _Func2 = _interopRequireDefault(_Func);
	
	var _Debugger = __webpack_require__(12);
	
	var _Debugger2 = _interopRequireDefault(_Debugger);
	
	var _Controller = __webpack_require__(13);
	
	var _Controller2 = _interopRequireDefault(_Controller);
	
	var _UpdateMgr = __webpack_require__(17);
	
	var _UpdateMgr2 = _interopRequireDefault(_UpdateMgr);
	
	var _ResizeMgr = __webpack_require__(18);
	
	var _ResizeMgr2 = _interopRequireDefault(_ResizeMgr);
	
	var _ScrollMgr = __webpack_require__(19);
	
	var _ScrollMgr2 = _interopRequireDefault(_ScrollMgr);
	
	var _MouseMgr = __webpack_require__(20);
	
	var _MouseMgr2 = _interopRequireDefault(_MouseMgr);
	
	var _UpdateList = __webpack_require__(21);
	
	var _UpdateList2 = _interopRequireDefault(_UpdateList);
	
	var _ResizeList = __webpack_require__(22);
	
	var _ResizeList2 = _interopRequireDefault(_ResizeList);
	
	var _ScrollList = __webpack_require__(23);
	
	var _ScrollList2 = _interopRequireDefault(_ScrollList);
	
	var _MouseList = __webpack_require__(24);
	
	var _MouseList2 = _interopRequireDefault(_MouseList);
	
	var _ResourceMgr = __webpack_require__(25);
	
	var _ResourceMgr2 = _interopRequireDefault(_ResourceMgr);
	
	var _UrlParamMgr = __webpack_require__(27);
	
	var _UrlParamMgr2 = _interopRequireDefault(_UrlParamMgr);
	
	var _Profiler = __webpack_require__(29);
	
	var _Profiler2 = _interopRequireDefault(_Profiler);
	
	var _View = __webpack_require__(30);
	
	var _View2 = _interopRequireDefault(_View);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Common = function () {
	  function Common() {
	    _classCallCheck(this, Common);
	
	    this.onImmediate();
	    this.setEvents();
	  }
	
	  _createClass(Common, [{
	    key: 'onImmediate',
	    value: function onImmediate() {
	
	      // ------------------------------------------------------------
	      //  初期値の設定・データの配置
	      //  util関数の初期化
	      //  イベントマネージャーの設置
	      // ------------------------------------------------------------
	      // setting
	      gb.conf = new _Conf2.default();
	
	      // util
	      gb.d = new _Debugger2.default();
	      gb.u = new _Util2.default();
	      gb.f = new _Func2.default();
	
	      // ------------------------------------------------------------
	      //  Event
	      // ------------------------------------------------------------   
	      if (gb.conf.isUpdateMgr) gb.up = new _UpdateMgr2.default();
	      if (gb.conf.isResizeMgr) gb.r = new _ResizeMgr2.default();
	      if (gb.conf.isScrollMgr) gb.s = new _ScrollMgr2.default();
	      if (gb.conf.isMouseMgr) gb.m = new _MouseMgr2.default();
	      // gb.ul = new UpdateList();
	      // gb.rl = new ResizeList();
	      // gb.sl = new ScrollList();
	      gb.ml = new _MouseList2.default();
	
	      this.onReady();
	    }
	  }, {
	    key: 'onReady',
	    value: function onReady() {
	
	      // ------------------------------------------------------------
	      //  Controller
	      // ------------------------------------------------------------
	      gb.urlp = new _UrlParamMgr2.default(); //  UrlParam パラメータ調整用
	      if (gb.conf.Profiler) new _Profiler2.default(); // Profiler
	
	      // ------------------------------------------------------------
	      //  Loading / Model
	      // ------------------------------------------------------------
	      gb.lm = new _Controller2.default();
	      gb.rm = new _ResourceMgr2.default();
	      gb.lm.startU();
	
	      // ------------------------------------------------------------
	      //  View
	      // ------------------------------------------------------------
	      // Layout, UI, Effects
	      gb.v = new _View2.default();
	    }
	  }, {
	    key: 'onLoad',
	    value: function onLoad() {
	
	      // ------------------------------------------------------------
	      //  Util
	      // ------------------------------------------------------------
	
	      // ------------------------------------------------------------
	      //  Model
	      // ------------------------------------------------------------
	
	      // ------------------------------------------------------------
	      //  View
	      // ------------------------------------------------------------
	
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(window).on('load', this.onLoad.bind(this));
	    }
	  }]);
	
	  return Common;
	}();
	
	// ------------------------------------------------------------
	//
	//  Main
	//
	// ------------------------------------------------------------
	
	
	exports.default = Common;
	(function () {
	
	  // // globalオブジェクト
	  if (window.gb === undefined) window.gb = {};
	
	  gb.common = new Common();
	
	  if (gb.up) gb.up.loop(); //全体のループスタート
	})();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  Config
	//
	// ------------------------------------------------------------
	
	var Conf = function Conf() {
	  _classCallCheck(this, Conf);
	
	  // ------------------------------------------------------------
	  //  本番フラグ
	  // ------------------------------------------------------------    
	  // this.RELEASE = true;
	  this.RELEASE = false;
	
	  // ------------------------------------------------------------
	  //  フラグ関連
	  // ------------------------------------------------------------
	  // ログ出力, パラメータ, Stars
	  this.LOG = true;
	  this.PARAM = true;
	  this.Profiler = true;
	  this.LOADING = false;
	  this.OPENING = false;
	  this.EFFECT = false;
	  this.INERTIA = false;
	
	  // Event
	  this.isUpdateMgr = true;
	  this.isResizeMgr = true;
	  this.isScrollMgr = true;
	  this.isMouseMgr = true;
	
	  if (this.RELEASE) {
	    this.LOG = false;
	    this.PARAM = false;
	    this.Profiler = false;
	    this.LOADING = false;
	    this.OPENING = true;
	    this.EFFECT = true;
	    this.INERTIA = true;
	  }
	
	  // ------------------------------------------------------------
	  //  basic width height
	  // ------------------------------------------------------------
	  // viewport size
	  this.vDefW = window.innerWidth;
	  this.vDefH = window.innerHeight;
	  this.vW = window.innerWidth;
	  this.vH = window.innerHeight;
	  this.vSPW = window.innerWidth;
	  this.vSPH = window.innerHeight;
	
	  // target size
	  this.DefW = 1300;
	  this.DefH = 850;
	  this.W = 1200;
	  this.H = 750;
	  this.SPW = 375;
	  this.SPH = 667;
	
	  // ------------------------------------------------------------
	  //  ブレイクポイント
	  // ------------------------------------------------------------
	  this.bp00 = 375;
	  this.bp01 = 600;
	  this.bp02 = 1080;
	  this.bp03 = 1280;
	
	  // ------------------------------------------------------------
	  //  レティナ対応
	  // ------------------------------------------------------------
	  this.isRetina = window.devicePixelRatio && window.devicePixelRatio > 1 ? true : false;
	
	  // ------------------------------------------------------------
	  //
	  //  resource
	  //
	  // ------------------------------------------------------------
	
	  // ------------------------------------------------------------
	  //  API
	  // ------------------------------------------------------------
	  // this.APIData = APIData();
	  this.APIURL = './setting.xml';
	
	  // ------------------------------------------------------------
	  //  URL
	  // ------------------------------------------------------------
	  // this.URLData = URLData();
	
	  // ------------------------------------------------------------
	  //  sound data
	  // ------------------------------------------------------------
	  // this.soundData = SoundData();
	
	  // ------------------------------------------------------------
	  //  video
	  // ------------------------------------------------------------
	  // this.videoData = videoData();
	
	  // ------------------------------------------------------------
	  //  img
	  // ------------------------------------------------------------
	  // this.imgData = imgData();
	
	  // ------------------------------------------------------------
	  //  web font loaded
	  // ------------------------------------------------------------
	  // this.webFontLoaded = false;
	
	  // ------------------------------------------------------------
	  //
	  //  Ohter
	  //
	  // ------------------------------------------------------------
	  this.isFirst = true;
	
	  this.isSound = true;
	};
	
	exports.default = Conf;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Array = __webpack_require__(3);
	
	var _Array2 = _interopRequireDefault(_Array);
	
	var _Color = __webpack_require__(4);
	
	var _Color2 = _interopRequireDefault(_Color);
	
	var _DateClass = __webpack_require__(5);
	
	var _DateClass2 = _interopRequireDefault(_DateClass);
	
	var _Device = __webpack_require__(6);
	
	var _Device2 = _interopRequireDefault(_Device);
	
	var _Math = __webpack_require__(7);
	
	var _Math2 = _interopRequireDefault(_Math);
	
	var _Other = __webpack_require__(8);
	
	var _Other2 = _interopRequireDefault(_Other);
	
	var _String = __webpack_require__(9);
	
	var _String2 = _interopRequireDefault(_String);
	
	var _Url = __webpack_require__(10);
	
	var _Url2 = _interopRequireDefault(_Url);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // ------------------------------------------------------------
	//
	//  Util
	//
	// ------------------------------------------------------------
	
	var Util = function Util() {
	  _classCallCheck(this, Util);
	
	  this.a = new _Array2.default();
	  this.c = new _Color2.default();
	  this.d = new _DateClass2.default();
	  this.dv = new _Device2.default();
	  this.m = new _Math2.default();
	  this.o = new _Other2.default();
	  this.s = new _String2.default();
	  this.u = new _Url2.default();
	};
	
	exports.default = Util;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  Array
	//
	// ------------------------------------------------------------
	
	var Array = function () {
	  function Array() {
	    _classCallCheck(this, Array);
	  }
	
	  // ------------------------------------------------------------
	  //
	  //  Array
	  //
	  // ------------------------------------------------------------
	
	  // 配列内のランダムな値をひとつ取得
	  // -----------------------------------
	  // @arr : 配列
	  // return : 配列内の値
	  // -----------------------------------
	
	
	  _createClass(Array, [{
	    key: "arrRand",
	    value: function arrRand(arr) {
	
	      return arr[gb.u.m.randomInt(0, arr.length - 1)];
	    }
	
	    // 配列をランダムに並べ替え
	    // -----------------------------------
	    // @arr : 配列(Array)
	    // -----------------------------------
	
	  }, {
	    key: "shuffle",
	    value: function shuffle(ary) {
	
	      var arr = [];
	      arr = ary.slice();
	      var i = arr.length;
	      while (i) {
	        var j = Math.floor(Math.random() * i);
	        var t = arr[--i];
	        arr[i] = arr[j];
	        arr[j] = t;
	      }
	      return arr;
	    }
	
	    // ランダムな数値を作る
	
	  }, {
	    key: "randomArr",
	    value: function randomArr(len) {
	
	      var arr = [];
	
	      for (var i = 0; i < len; i++) {
	        arr.push(i);
	      }arr = this.shuffle(arr);
	
	      return arr;
	    }
	
	    // nullを削除した配列を返す
	    // -----------------------------------
	    // @arr : 配列(Array)
	    // return : null削除した配列(Array)
	    // -----------------------------------
	
	  }, {
	    key: "sliceNull",
	    value: function sliceNull(arr) {
	
	      var i, l, len1, newArr, val;
	      newArr = [];
	      for (i = l = 0, len1 = arr.length; l < len1; i = ++l) {
	        val = arr[i];
	        if (val !== null) {
	          newArr.push(val);
	        }
	      }
	      return newArr;
	    }
	
	    // 配列内のパラメータを比較してソート
	    // -----------------------------------
	    // @arr : 配列(Array)
	    // @para : パラメーター名
	    // @desc : 降順かどうか(boolean) デフォルトは昇順
	    // -----------------------------------
	
	  }, {
	    key: "sort",
	    value: function sort(arr, para, desc) {
	      if (desc === void 0) {
	        desc = false;
	      }
	      if (desc) {
	        return arr.sort(function (a, b) {
	          return b[para] - a[para];
	        });
	      } else {
	        return arr.sort(function (a, b) {
	          return a[para] - b[para];
	        });
	      }
	    }
	  }, {
	    key: "getKey",
	    value: function getKey(list, value) {
	      var returnKey = [];
	      for (var key in list) {
	        if (list[key] == value) {
	          returnKey.push(key);
	        }
	      }
	      return returnKey;
	    }
	  }]);
	
	  return Array;
	}();
	
	exports.default = Array;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  Color
	//
	// ------------------------------------------------------------
	
	var Color = function () {
	    function Color() {
	        _classCallCheck(this, Color);
	    }
	
	    // rgbからHEX(16進数)カラー取得
	    // -----------------------------------
	    // @r : 0~255
	    // @g : 0~255
	    // @b : 0~255
	    // return : ex "#FFFFFF"
	    // -----------------------------------
	
	
	    _createClass(Color, [{
	        key: "getHexColor",
	        value: function getHexColor(r, g, b) {
	            var str;
	            str = (r << 16 | g << 8 | b).toString(16);
	            return "#" + new Array(7 - str.length).join("0") + str;
	        }
	
	        // rgbからhslへ
	
	    }, {
	        key: "rgbToHsl",
	        value: function rgbToHsl(r, g, b) {
	            r /= 255;
	            g /= 255;
	            b /= 255;
	
	            var max = Math.max(r, g, b);
	            var min = Math.min(r, g, b);
	            var h, s, l;
	
	            l = (max + min) / 2;
	
	            if (max === min) {
	                h = s = 0;
	            } else {
	                var d = max - min;
	                switch (max) {
	                    case r:
	                        h = ((g - b) / d * 60 + 360) % 360;break;
	                    case g:
	                        h = (b - r) / d * 60 + 120;break;
	                    case b:
	                        h = (r - g) / d * 60 + 240;break;
	                }
	                s = l <= 0.5 ? d / (max + min) : d / (2 - max - min);
	            }
	
	            return [h, s * 100, l * 100];
	        }
	
	        // hslからrgbへ
	
	    }, {
	        key: "hslToRgb",
	        value: function hslToRgb(h, s, l) {
	            s /= 100;
	            l /= 100;
	
	            var r, g, b;
	
	            if (s === 0) {
	                r = g = b = l * 255;
	            } else {
	                var v2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
	                var v1 = 2 * l - v2;
	                r = Math.round(hueToRgb(v1, v2, h + 120) * 255);
	                g = Math.round(hueToRgb(v1, v2, h) * 255);
	                b = Math.round(hueToRgb(v1, v2, h - 120) * 255);
	            }
	
	            return [r, g, b];
	        }
	    }]);
	
	    return Color;
	}();
	
	exports.default = Color;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  DateClass
	//
	// ------------------------------------------------------------
	
	var DateClass = function () {
	  function DateClass() {
	    _classCallCheck(this, DateClass);
	
	    this.startTime = null;
	    this.elapsedTime = null;
	    this.now = new Date();
	  }
	
	  _createClass(DateClass, [{
	    key: "getNow",
	    value: function getNow() {
	
	      this.now = new Date();
	    }
	  }, {
	    key: "start",
	    value: function start() {
	
	      this.now = new Date();
	      this.startTime = this.now.getTime();
	    }
	  }, {
	    key: "elapsed",
	    value: function elapsed() {
	
	      this.now = new Date();
	      return this.elapsedTime = this.now.getTime() - this.startTime;
	    }
	  }, {
	    key: "m",
	    value: function m() {
	
	      this.elapsed();
	      return Math.floor(this.elapsedTime + 100 / 60);
	    }
	  }, {
	    key: "s",
	    value: function s() {
	
	      this.elapsed();
	      return Math.floor(this.elapsedTime / 1000);
	    }
	  }, {
	    key: "ms",
	    value: function ms() {
	
	      this.elapsed();
	      return this.elapsedTime;
	    }
	  }, {
	    key: "time",
	    value: function time() {
	
	      this.getNow();
	
	      this.hour = this.now.getHours(); // 時
	      this.minute = this.now.getMinutes(); // 分
	      this.second = this.now.getSeconds();
	    }
	  }, {
	    key: "date",
	    value: function date() {
	
	      return this.now.getDate();
	    }
	  }, {
	    key: "months",
	    value: function months() {
	
	      var monthdays = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	
	      return this.now.getMonth() + 1;
	    }
	  }, {
	    key: "year",
	    value: function year() {
	
	      return this.now.getFullYear();
	    }
	  }, {
	    key: "day",
	    value: function day() {
	
	      // 曜日 (日本語)
	      var weekDayJP = ["日", "月", "火", "水", "木", "金", "土"];
	      var wDJ = weekDayJP[this.now.getDay()];
	
	      // 曜日 (英語)
	      var weekDayEN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	      var wDE = weekDayEN[this.now.getDay()];
	    }
	
	    // 数日後のDateオブジェクト取得
	    // -----------------------------------
	
	  }, {
	    key: "afterDay",
	    value: function afterDay(date, num) {
	
	      return new Date(date.getTime() + Number(num) * 24 * 60 * 60 * 1000);
	    }
	  }]);
	
	  return DateClass;
	}();
	
	exports.default = DateClass;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  Device
	//
	// ------------------------------------------------------------
	
	var Device = function () {
	  function Device() {
	    _classCallCheck(this, Device);
	
	    this.ua = window.navigator.userAgent.toLowerCase(); //useragent
	    this.appV = window.navigator.appVersion.toLowerCase(); //appVersion
	    this.isRes = null;
	    this.isResSP = null; // responsive sp
	    this.isResPC = null; // responsive pc
	
	    this.isPC = null;
	    this.isSP = null;
	    this.isTAB = null;
	    this.isMB = null;
	    this.isIE = false;
	
	    this.isSetSPSize = false;
	  }
	
	  // ------------------------------------------------------------
	  //
	  //  device
	  //
	  // ------------------------------------------------------------
	
	  _createClass(Device, [{
	    key: "isDeviceSP",
	    value: function isDeviceSP() {
	
	      var media = ["iphone", "ipod", "ipad", "android", "dream", "cupcake", "blackberry9500", "blackberry9530", "blackberry9520", "blackberry9550", "blackberry9800", "webos", "incognito", "webmate"];
	      var pattern = new RegExp(media.join("|"), "i");
	
	      var b = pattern.test(this.ua);
	      if (b) $('body').addClass('isDeviceSP');
	
	      this.isSP = b;
	    }
	  }, {
	    key: "isDeviceTAB",
	    value: function isDeviceTAB() {
	
	      var b = this.ua.indexOf("windows") != -1 && this.ua.indexOf("touch") != -1 || this.ua.indexOf("ipad") != -1 || this.ua.indexOf("android") != -1 && this.ua.indexOf("mobile") == -1 || this.ua.indexOf("firefox") != -1 && this.ua.indexOf("tablet") != -1 || this.ua.indexOf("kindle") != -1 || this.ua.indexOf("silk") != -1 || this.ua.indexOf("playbook") != -1;
	      if (b) $('body').addClass('isDeviceTAB');
	
	      this.isTAB = b;
	    }
	  }, {
	    key: "isDeviceMB",
	    value: function isDeviceMB() {
	
	      var b = this.ua.indexOf("windows") != -1 && this.ua.indexOf("phone") != -1 || this.ua.indexOf("iphone") != -1 || this.ua.indexOf("ipod") != -1 || this.ua.indexOf("android") != -1 && this.ua.indexOf("mobile") != -1 || this.ua.indexOf("firefox") != -1 && this.ua.indexOf("mobile") != -1 || this.ua.indexOf("blackberry") != -1;
	      if (b) $('body').addClass('isDeviceMB');
	
	      this.isMB = b;
	    }
	  }, {
	    key: "isDevicePC",
	    value: function isDevicePC() {
	
	      if (!(this.isSP || this.isTAB || this.isMB)) {
	
	        $('body').addClass('isDevicePC');
	        this.isPC = true;
	        return;
	      }
	
	      this.isPC = false;
	    }
	  }, {
	    key: "setEventString",
	    value: function setEventString() {
	
	      this.eClick = this.isTab || this.isSP ? 'touchstart' : 'click';
	      this.eStart = this.isTab || this.isSP ? 'touchstart' : 'mousedown';
	      this.eEnd = this.isTab || this.isSP ? 'touchend' : 'mouseup';
	      this.eMove = this.isTab || this.isSP ? 'touchmove' : 'mousemove';
	
	      this.eEnter = this.isTab || this.isSP ? 'touchstart' : 'mouseenter';
	      this.eLeave = this.isTab || this.isSP ? 'touchend' : 'mouseleave';
	      this.eOver = this.isTab || this.isSP ? 'touchstart' : 'mouseover';
	      this.eOut = this.isTab || this.isSP ? 'touchend' : 'mouseout';
	
	      this.eWheel = this.isTab || this.isSP ? 'touchmove' : 'mousewheel';
	      this.eScroll = this.isTab || this.isSP ? 'touchmove' : 'scroll';
	    }
	
	    // スマフォ判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isSmt",
	    value: function isSmt() {
	
	      return navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0;
	    }
	
	    // タブレット端末かどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isTablet",
	    value: function isTablet() {
	
	      return this.isIpad() || this.isAndroid() && navigator.userAgent.indexOf('Mobile') === -1;
	    }
	
	    // iPad判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIpad",
	    value: function isIpad() {
	
	      return navigator.userAgent.indexOf('iPad') > 0;
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  OS
	    //
	    // ------------------------------------------------------------
	
	    // Android判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isAndroid",
	    value: function isAndroid() {
	
	      var u;
	      u = navigator.userAgent;
	      return u.indexOf('BlackBerry') > 0 || u.indexOf('Android') > 0 || u.indexOf('Windows Phone') > 0;
	    }
	  }, {
	    key: "isiPhone",
	    value: function isiPhone() {
	      var pattern = new RegExp("iphone", "i");
	      return pattern.test(this.ua);
	    }
	
	    // iOS判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIos",
	    value: function isIos() {
	
	      return navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0;
	    }
	
	    // PS3判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isPs3",
	    value: function isPs3() {
	
	      var u;
	      u = navigator.userAgent;
	      return u.indexOf('PLAYSTATION 3') > 0;
	    }
	
	    // VITA判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isVita",
	    value: function isVita() {
	
	      var u;
	      u = navigator.userAgent;
	      return u.indexOf('PlayStation Vita') > 0;
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  browser
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: "isBrowserCheck",
	    value: function isBrowserCheck() {
	
	      this.isIEVersion();
	      this.isChrome();
	      this.isFF();
	      this.isSafari();
	      this.isOpera();
	      this.isIOSNotSfari();
	      this.isAPPBrowser();
	    }
	
	    // IEかどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIe",
	    value: function isIe() {
	
	      var ua;
	      ua = window.navigator.userAgent.toLowerCase();
	      return ua.indexOf('msie') !== -1 || ua.indexOf('trident/7') !== -1;
	    }
	
	    // WINかどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isWin",
	    value: function isWin() {
	
	      return navigator.platform.indexOf("Win") !== -1;
	    }
	
	    // googleChromeかどうか pcのみ
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isChrome",
	    value: function isChrome() {
	
	      if (this.ua.indexOf('chrome') !== -1) {
	
	        $('body').addClass('isChorme');
	        return true;
	      } else {
	
	        return false;
	      }
	    }
	
	    // FireFoxかどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isFF",
	    value: function isFF() {
	
	      if (this.ua.indexOf('firefox') !== -1) {
	
	        $('body').addClass('isFF');
	        return true;
	      } else {
	
	        return false;
	      }
	    }
	  }, {
	    key: "isSafari",
	    value: function isSafari() {
	
	      if (!this.isChrome() && this.ua.indexOf("lunascape") == -1) {
	
	        var pattern = new RegExp("safari", "i");
	        if (pattern.test(this.ua)) {
	
	          $('body').addClass('isSafari');
	          return true;
	        } else {
	
	          return false;
	        }
	      } else {
	
	        return false;
	      }
	    }
	  }, {
	    key: "isOpera",
	    value: function isOpera() {
	
	      var pattern = new RegExp("opera", "i");
	      if (pattern.test(this.ua)) {
	
	        $('body').addClass('isOpera');
	        return true;
	      } else {
	
	        return false;
	      }
	    }
	
	    // iOSのsafari以外かどうか spでsafariかsafariでないか(chromeかandroidの標準ブラウザか)を判定したい場合はこちらを使う
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIOSNotSfari",
	    value: function isIOSNotSfari() {
	
	      if (this.isIos() && this.ua.indexOf('safari') === -1 || this.isIos() && this.ua.indexOf('crios') > 0 || this.isIos() && this.ua.indexOf('gsa') > 0) {
	
	        $('body').addClass('isIOSNotSafari');
	        // alert('isIOSNotSafari');
	        return true;
	      } else {
	
	        $('body').addClass('isIOSSafari');
	        // alert('isSafari');
	        return false;
	      }
	    }
	  }, {
	    key: "isAPPBrowser",
	    value: function isAPPBrowser() {
	
	      // debug
	      // var r01 = this.ua.indexOf("fban/fbios;fbav") !== -1;
	      // var r02 = this.ua.indexOf("twitter") !== -1;
	
	      // // $('body').prepend(String(r01));
	      // // $('body').prepend(String(r02));
	
	      // // alert(r01);
	      // // alert(r02);
	
	      if (this.ua.indexOf("fban/fbios;fbav") !== -1 || this.ua.indexOf("twitter") !== -1) {
	
	        $('body').addClass('isAPPBrowser');
	        return true;
	      } else {
	
	        return false;
	      }
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  version
	    //
	    // ------------------------------------------------------------
	    // IE8以下かどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIe8Under",
	    value: function isIe8Under() {
	
	      var msie;
	      msie = navigator.appVersion.toLowerCase();
	      msie = msie.indexOf('msie') > -1 ? parseInt(msie.replace(/.*msie[ ]/, '').match(/^[0-9]+/)) : 0;
	      return msie <= 8 && msie !== 0;
	    }
	
	    // IE9以下かどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIe9Under",
	    value: function isIe9Under() {
	
	      var msie;
	      msie = navigator.appVersion.toLowerCase();
	      msie = msie.indexOf('msie') > -1 ? parseInt(msie.replace(/.*msie[ ]/, '').match(/^[0-9]+/)) : 0;
	      return msie <= 9 && msie !== 0;
	    }
	
	    // IE10以下かどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIe10Under",
	    value: function isIe10Under() {
	
	      var msie;
	      msie = navigator.appVersion.toLowerCase();
	      msie = msie.indexOf('msie') > -1 ? parseInt(msie.replace(/.*msie[ ]/, '').match(/^[0-9]+/)) : 0;
	      return msie <= 10 && msie !== 0;
	    }
	
	    // IE11以下かどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIe11Under",
	    value: function isIe11Under() {
	
	      var b = this.isIe10Under() || this.ua.indexOf("trident") != -1;
	      return b;
	      // return true;
	    }
	
	    // edgeかどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isEdge",
	    value: function isEdge() {
	
	      log(this.ua.indexOf("AppleWebkit"), this.ua.indexOf("Edge"), this.ua, this.appV);
	      var b = this.ua.indexOf("applewebkit") >= 0 && this.ua.indexOf("edge") != -1;
	      return b;
	      // return true;
	    }
	  }, {
	    key: "isIEVersion",
	    value: function isIEVersion() {
	
	      $('body').addClass('isIE');
	      this.isIE = true;
	
	      if (this.appV.indexOf("msie 10.") != -1) {
	        $('body').addClass('isIE10');
	        return 'ie10';
	      } else if (this.appV.indexOf("msie 9.") != -1) {
	        $('body').addClass('isIE9');
	        return 'ie9';
	      } else if (this.appV.indexOf("msie 8.") != -1) {
	        $('body').addClass('isIE8');
	        return 'ie8';
	      } else if (this.appV.indexOf("msie 7.") != -1) {
	        $('body').addClass('isIE7');
	        return 'ie7';
	      } else if (this.appV.indexOf("msie 6.") != -1) {
	        $('body').addClass('isIE6');
	        return 'ie6';
	      } else if (this.appV.indexOf("trident") != -1) {
	        $('body').addClass('isIE11');
	        return 'ie11';
	      }
	
	      $('body').removeClass('isIE');
	      this.isIE = false;
	      return 'notIE';
	    }
	  }, {
	    key: "isAndroidVersion",
	    value: function isAndroidVersion() {
	
	      if (this.ua.indexOf("android") > 0) {
	
	        var version = parseFloat(this.ua.slice(this.ua.indexOf("android") + 8));
	        return version;
	      }
	    }
	  }, {
	    key: "isiphoneVersion",
	    value: function isiphoneVersion() {
	
	      if (this.ua.indexOf("iPhone OS") > 0) {
	
	        var version = parseFloat(this.ua.slice(this.ua.indexOf("iPhone OS") + 10));
	        return version;
	      }
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  portrait / landscape
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: "isDirection",
	    value: function isDirection() {
	
	      var W = window.innerWidth,
	          H = window.innerHeight;
	
	      if (H > W) {
	        $("body").addClass("portrait");
	        $("body").removeClass("landscape");
	      } else {
	        $("body").addClass("landscape");
	        $("body").removeClass("portrait");
	      }
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  responsive 横幅を見る
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: "isResponsive",
	    value: function isResponsive() {
	      var bp00 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 375 - 1;
	      var bp01 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 960;
	      var bp02 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1080;
	      var bp03 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1280 + 1;
	
	
	      var W = window.innerWidth,
	          H = window.innerHeight;
	
	      // ブレイクしたときに一度だけイベントを発行する
	      if (W > bp00 && this.isRes == 'sp-s') $(window).trigger('sp_s_sp');
	      if (W <= bp00 && this.isRes == 'sp') $(window).trigger('sp_sp_s');
	      if (W > bp01 && this.isRes == 'sp') $(window).trigger('sp_tab');
	      if (W <= bp01 && this.isRes == 'tab') $(window).trigger('tab_sp');
	      if (W > bp02 && this.isRes == 'tab') $(window).trigger('tab_pc');
	      if (W <= bp02 && this.isRes == 'pc') $(window).trigger('pc_tab');
	      if (W > bp03 && this.isRes == 'pc') $(window).trigger('pc_pc_w');
	      if (W <= bp03 && this.isRes == 'pc-w') $(window).trigger('pc_w_pc');
	
	      // isRes
	      if (W <= bp00) this.isRes = 'sp-s';
	      if (W > bp00 && W <= bp01) this.isRes = 'sp';
	      if (W > bp01 && W <= bp02) this.isRes = 'tab';
	      if (W > bp02 && W <= bp03) this.isRes = 'pc';
	      if (W > bp03) this.isRes = 'pc-w';
	
	      // isResPC, isResSP
	      if (W > bp01) {
	        this.isResSP = false;
	        this.isResPC = true;
	        $('body').removeClass('isResponsiveSP');
	        $('body').addClass('isResponsivePC');
	      } else {
	        this.isResSP = true;
	        this.isResPC = false;
	        $('body').addClass('isResponsiveSP');
	        $('body').removeClass('isResponsivePC');
	      }
	
	      log(this.isResSP, this.isResPC);
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  user agentでpc,sp振り分け
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: "isPCSP",
	    value: function isPCSP(urlPC, urlSP) {
	
	      var url = location.href;
	
	      if (!this.isPC && !this.isTAB && url.indexOf('pc') != -1) {
	
	        location.href = urlSP;
	      }
	
	      if (this.isPC && url.indexOf('pc') == -1) {
	
	        location.href = urlPC;
	      }
	
	      if (this.isTAB && url.indexOf('pc') == -1) {
	
	        location.href = urlPC;
	      }
	    }
	  }]);
	
	  return Device;
	}();
	
	exports.default = Device;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  MyMath
	//
	// ------------------------------------------------------------
	
	var MyMath = function () {
	  function MyMath() {
	    _classCallCheck(this, MyMath);
	  }
	
	  // ランダムな整数を取得
	  // -----------------------------------
	  // @min : 最小値(int)
	  // @max : 最大値(int)
	  // return : minからmaxまでのランダムな整数(int)
	  // -----------------------------------
	
	
	  _createClass(MyMath, [{
	    key: "randomInt",
	    value: function randomInt(min, max) {
	
	      return Math.floor(Math.random() * (max + 1 - min) + min);
	    }
	
	    // ランダムな整数を2つの範囲から取得
	    // -----------------------------------
	    // @min1 : 最小値1(int)
	    // @max1 : 最大値1(int)
	    // @min2 : 最小値2(int)
	    // @max2 : 最大値2(int)
	    // return : minからmaxまでのランダムな整数(int)
	    // -----------------------------------
	
	  }, {
	    key: "random2",
	    value: function random2(min1, max1, min2, max2) {
	
	      if (this.hit(2)) {
	        return this.randomInt(min1, max1);
	      } else {
	        return this.randomInt(min2, max2);
	      }
	    }
	
	    // 1/@rangeの確率でtrueを取得
	    // -----------------------------------
	    // @range : 母数(int)
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "hit",
	    value: function hit(range) {
	
	      return this.randomInt(0, range - 1) === 0;
	    }
	
	    // 0から範囲内でランダムな整数を取得
	    // -----------------------------------
	    // @val : 範囲(int)
	    // return : ランダムな整数(int)
	    // -----------------------------------
	
	  }, {
	    key: "range",
	    value: function range(val) {
	
	      return this.randomInt(-val, val);
	    }
	
	    // 値をマッピング
	    // -----------------------------------
	    // @num : マッピングする値(Number)
	    // @resMin : 結果となる値の最小値(Number)
	    // @resMax : 結果となる値の最大値(Number)
	    // @baseMin : 元となる値の最小値(Number)
	    // @baseMax : 元となる値の最大値(Number)
	    // return : マッピングされた値(Number)
	    // -----------------------------------
	
	  }, {
	    key: "map",
	    value: function map(num, resMin, resMax, baseMin, baseMax) {
	
	      var p;
	      if (num < baseMin) {
	        return resMin;
	      }
	      if (num > baseMax) {
	        return resMax;
	      }
	      p = (resMax - resMin) / (baseMax - baseMin);
	
	      return (num - baseMin) * p + resMin;
	    }
	  }, {
	    key: "demical",
	    value: function demical(v) {
	      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
	
	
	      // 計算 ( Math.pow( 10, 4 ) = 10000 )
	      var val = Math.floor(v * Math.pow(10, n)) / Math.pow(10, n);
	
	      return val;
	    }
	  }, {
	    key: "float",
	    value: function float(v) {
	      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
	
	
	      return v.toFixed(n);
	    }
	
	    // 数値に小数点第@n位までをつけた文字列を返す
	    // -----------------------------------
	    // @num : 値(Number)
	    // @n : 小数点の位(int)
	    // return : 変換された値(String)
	    // -----------------------------------
	    // decimal(num, n) {
	    //   var i, pos;
	    //   num = String(num);
	    //   pos = num.indexOf(".");
	    //   if (n === 0) {
	    //     return num.split(".")[0];
	    //   }
	    //   if (pos === -1) {
	    //     num += ".";
	    //     i = 0;
	    //     while (i < n) {
	    //       num += "0";
	    //       i++;
	    //     }
	    //     return num;
	    //   }
	    //   num = num.substr(0, pos) + num.substr(pos, n + 1);
	    //   return num;
	    // }
	
	  }, {
	    key: "clamp",
	    value: function clamp(val, min, max, minVal, maxVal) {
	
	      if (val < min) val = minVal == undefined ? min : minVal;else if (val > max) val = maxVal == undefined ? max : maxVal;
	
	      return val;
	    }
	  }, {
	    key: "rate",
	    value: function rate(val, base) {
	
	      var v = val / base;
	
	      return v;
	    }
	  }, {
	    key: "lerp",
	    value: function lerp(val01, val02, val) {
	
	      val = val < 0 ? 0 : val;
	      val = val > 1 ? 1 : val;
	      return val01 + (val02 - val01) * val;
	    }
	  }, {
	    key: "degree",
	    value: function degree(radians) {
	
	      return radians * 180 / Math.PI; //1ラジアンが何度か
	    }
	
	    // to radians
	
	  }, {
	    key: "radian",
	    value: function radian(angle) {
	
	      return angle * Math.PI / 180; //1度何ラジアンか
	    }
	  }, {
	    key: "dist",
	    value: function dist(p1, p2) {
	
	      return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
	    }
	  }, {
	    key: "ascend",
	    value: function ascend(arr) {
	
	      arr.sort(function (a, b) {
	        if (a > b) return -1;
	        if (a < b) return 1;
	        return 0;
	      });
	      // var a = [5,3,9,1,10]
	      // 結果:10,9,5,3,1
	
	      return arr;
	    }
	  }, {
	    key: "descend",
	    value: function descend(arr) {
	
	      arr.sort(function (a, b) {
	        if (a < b) return -1;
	        if (a > b) return 1;
	        return 0;
	      });
	
	      // var a = [5,3,9,1,10]
	      // 結果:1,3,5,9,10
	
	      return arr;
	    }
	
	    // map(value, min01, max01, min02, max02) {
	
	    //   var dis01 = max01 - min01;
	    //   var dis02 = max02 - min02
	
	    //   var rate = dis02 / dis01;
	
	    //   value = value * rate;
	
	    //   return value;
	    // }
	
	  }, {
	    key: "constrain",
	    value: function constrain(value, min, max) {
	
	      return Math.min(max, Math.max(value, min));
	
	      // if (value <= low) value = low;
	      // if (value >= high) value = high;     
	      // return value;
	    }
	  }]);
	
	  return MyMath;
	}();
	
	exports.default = MyMath;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  Other
	//
	// ------------------------------------------------------------
	
	var Other = function () {
	  function Other() {
	    _classCallCheck(this, Other);
	  }
	
	  // ------------------------------------------------------------
	  //  getPageID
	  // ------------------------------------------------------------
	
	
	  _createClass(Other, [{
	    key: 'getPageID',
	    value: function getPageID() {
	
	      this.pageID = $('body').attr('id');
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  Data type check
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: 'isObject',
	    value: function isObject(value, ignoreArray) {
	      return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null;
	    }
	  }, {
	    key: 'isNumber',
	    value: function isNumber(value) {
	      return typeof value === 'number';
	    }
	  }, {
	    key: 'isString',
	    value: function isString(value) {
	      return typeof value === 'string';
	    }
	  }, {
	    key: 'isFunction',
	    value: function isFunction(value) {
	      return typeof value === 'function';
	    }
	  }, {
	    key: 'isArray',
	    value: function isArray(value) {
	      return Object.prototype.toString.call(value) === '[object Array]';
	    }
	  }, {
	    key: 'isNull',
	    value: function isNull(value) {
	      return value === null;
	    }
	  }, {
	    key: 'isUndefined',
	    value: function isUndefined(value) {
	      return typeof value === 'undefined';
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  other
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: 'setImgSPSize',
	    value: function setImgSPSize($target) {
	
	      // responsive spのとき処理
	      // if (!this.isResSP) return;
	      // 一度だけ処理
	      if (this.isSetSPSize) return;
	      this.isSetSPSize = true;
	
	      var $img = $target,
	          len = $img.length;
	
	      $img.each(function (i) {
	
	        var w = Math.floor($(this).width() / 2),
	            h = Math.floor($(this).height() / 2);
	
	        $(this).attr({
	          'width': w,
	          'height': h
	        });
	
	        if (len == i + 1) $(window).trigger('setSpZieEnd');
	      });
	    }
	
	    // ------------------------------------------------------------
	    //  スマホ操作無効
	    // ------------------------------------------------------------
	
	  }, {
	    key: 'notMove',
	    value: function notMove() {
	      var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
	
	      if (flag) {
	
	        $('.section01').on('touchstart.noControl touchmove.noControl touchend.noControl', function (e) {
	          e.preventDefault();
	        });
	
	        // this.f = (e)=>{e.preventDefault();};
	        // document.addEventListener('touchmove', this.f, { passive: false });
	      } else {
	
	        $('.section01').off('touchstart.noControl touchmove.noControl touchend.noControl');
	
	        // document.removeEventListener('touchmove', this.f, false);
	      }
	
	      // this.offNotMove();
	
	      // $(window).on('touchstart.noControl touchmove.noControl touchend.noControl click.noControl', function(e){e.preventDefault();});
	    }
	
	    // offNotMove() {
	
	    //   $(window).off('touchstart.noControl touchmove.noControl touchend.noControl');
	    //   // $(window).off('touchstart.noControl touchmove.noControl touchend.noControl click.noControl');
	
	    // }
	
	    // notMove(flag=true) {
	
	    //   if (flag) {
	
	    //     this.f = (e)=>{e.preventDefault();};
	
	    //     document.addEventListener('touchmove', this.f, { passive: false });
	
	    //   } else {
	
	    //     log('off',this.f)
	
	    //     document.removeEventListener('touchmove', this.f, false);
	
	    //   }
	
	    // }
	
	    // notMove() {
	
	    //   this.offNotMove();
	
	    //   this.f = (e)=>{e.preventDefault();};
	
	    //   document.addEventListener('touchmove', this.f.bind(this), { passive: false });
	
	    // }
	
	    // offNotMove() {
	
	
	    //   log(111,this.f);
	    //   if (this.f) {
	    //     log(111,this.f);
	    //     document.removeEventListener('touchmove', this.f.bind(this));  
	    //   }
	
	    // }
	
	
	  }, {
	    key: 'setPreventMousemove',
	    value: function setPreventMousemove() {
	
	      var self = this;
	
	      this.removePrevent();
	      $(window).on('touchmove.noControl', function (e) {
	        e.preventDefault();
	      });
	    }
	  }, {
	    key: 'preventDefault',
	    value: function preventDefault(e) {
	
	      e = e || window.event;
	      if (e.preventDefault) e.preventDefault();
	      e.returnValue = false;
	    }
	  }, {
	    key: 'preventDefaultForScrollKeys',
	    value: function preventDefaultForScrollKeys(e) {
	
	      if (keys[e.keyCode]) {
	        preventDefault(e);
	        return false;
	      }
	    }
	  }, {
	    key: 'disableScroll',
	    value: function disableScroll($target) {
	
	      if ($target.addEventListener) // older FF
	        $target.addEventListener('DOMMouseScroll', this.preventDefault, false);
	      $target.onwheel = this.preventDefault; // modern standard
	      $target.onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
	      $target.ontouchmove = this.preventDefault; // mobile
	      // document.onkeydown  = this.preventDefaultForScrollKeys;
	    }
	  }, {
	    key: 'enableScroll',
	    value: function enableScroll($target) {
	
	      if ($target.removeEventListener) $target.removeEventListener('DOMMouseScroll', this.preventDefault, false);
	      $target.onmousewheel = document.onmousewheel = null;
	      $target.onwheel = null;
	      $target.ontouchmove = null;
	      document.onkeydown = null;
	    }
	
	    // 全画面
	
	  }, {
	    key: 'full',
	    value: function full() {
	
	      var b = document.body;
	      // var b = document.getElementById("wrapper")
	      // var b = document.getElementsByClassName('menu03');
	
	      if (b.requestFullScreen) {
	        b.requestFullScreen();
	      } else if (b.webkitRequestFullScreen) {
	        b.webkitRequestFullScreen();
	      } else if (b.mozRequestFullScreen) {
	        b.mozRequestFullScreen();
	      } else if (b.msRequestFullscreen) {
	        b.msRequestFullscreen();
	      } else {
	        alert('ご利用のブラウザはフルスクリーン操作に対応していません');
	        return;
	      }
	    }
	  }]);
	
	  return Other;
	}();
	
	exports.default = Other;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  String
	//
	// ------------------------------------------------------------
	
	var String = function () {
	  function String() {
	    _classCallCheck(this, String);
	  }
	
	  _createClass(String, [{
	    key: "isContain",
	    value: function isContain(str, contain) {
	
	      // strの中に,containが存在したら
	      if (str.indexOf(contain) != -1) {
	        return true;
	      }
	
	      return false;
	    }
	
	    // 0埋めで2桁にする関数
	
	  }, {
	    key: "add0",
	    value: function add0(str) {
	      var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -2;
	
	
	      return ("000000000000" + str).substr(num);
	    }
	
	    // 値段表記
	    // -----------------------------------
	
	  }, {
	    key: "price",
	    value: function price(num) {
	
	      return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
	    }
	
	    // 文字列を反転
	    // -----------------------------------
	    // @str : 文字列(String)
	    // return : 文字列(String)
	    // -----------------------------------
	
	  }, {
	    key: "strReverse",
	    value: function strReverse(str) {
	
	      var i, len, res;
	      res = "";
	      len = str.length;
	      i = 1;
	      while (i <= len) {
	        res += str.substr(-i, 1);
	        i++;
	      }
	      return res;
	    }
	
	    // 文字列の全置換
	    // -----------------------------------
	    // @val  : 文字列
	    // @oeg  : 置換前の文字列
	    // @dest : 置換後の文字列
	    // -----------------------------------
	
	  }, {
	    key: "replaceAll",
	    value: function replaceAll(val, org, dest) {
	
	      return val.split(org).join(dest);
	    }
	  }, {
	    key: "strReplace",
	    value: function strReplace(str, before, after) {
	
	      var r = new RegExp(before, 'g');
	
	      return str.replace(r, after);
	    }
	
	    // ユニークIDを取得
	    // -----------------------------------
	
	  }, {
	    key: "unique",
	    value: function unique() {
	
	      return new Date().getTime();
	    }
	  }]);
	
	  return String;
	}();
	
	exports.default = String;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  Url
	//
	// ------------------------------------------------------------
	
	var Url = function () {
	  function Url() {
	    _classCallCheck(this, Url);
	  }
	
	  // クエリ抜き出し
	
	
	  _createClass(Url, [{
	    key: 'getParam',
	    value: function getParam() {
	
	      var url = location.href;
	      var param = url.split('?')[1];
	      if (param == undefined) return undefined;
	      var paramItems = param.split('&');
	      var list = {};
	
	      for (var i = 0; i < paramItems.length; i++) {
	
	        paramItem = paramItems[i].split('=');
	        list[paramItem[0]] = paramItem[1];
	      }
	
	      return list;
	    }
	  }, {
	    key: 'setParam',
	    value: function setParam(text) {
	
	      window.history.pushState('', '', '?' + text);
	    }
	
	    // ハッシュ取得
	    // -----------------------------------
	    // return : location.hashの#を削除したやつ
	    // -----------------------------------
	
	  }, {
	    key: 'hash',
	    value: function hash() {
	
	      return location.hash.replace("#", "");
	    }
	  }, {
	    key: 'getHash',
	    value: function getHash() {
	
	      return location.hash;
	    }
	  }, {
	    key: 'setHash',
	    value: function setHash(text) {
	
	      location.hash = text;
	    }
	
	    // 指定したstringがクッキーにセットされていたらtrue
	
	  }, {
	    key: 'checkCookie',
	    value: function checkCookie(str) {
	
	      var flag = null;
	
	      if ($.cookie(str) == undefined || $.cookie(str) == '') flag = false;else flag = true;
	
	      return flag;
	    }
	
	    // 指定したstringがクッキーにセットされていたらtrue
	
	  }, {
	    key: 'getCookie',
	    value: function getCookie(str) {
	
	      if ($.cookie(str) == undefined || $.cookie(str) == '') return null;else return $.cookie(str);
	    }
	  }, {
	    key: 'setCookie',
	    value: function setCookie(str, val, period) {
	
	      var p = period || 5 * 1000; // 5秒
	      // var p = period || 30 * 1000; // 30秒
	      // var p = period || 15 * 60 * 1000; // 15分
	      // var p = period || 7 * 24 * 60 * 60 * 1000; //7日
	      var date = new Date();
	      date.setTime(date.getTime() + p);
	
	      $.cookie(str, val, { expires: date, path: '/' });
	    }
	
	    // ------------------------------------------------------------
	    //  host,protcol
	    // ------------------------------------------------------------
	
	  }, {
	    key: 'protocol',
	    value: function protocol() {
	
	      return location.protocol;
	    }
	  }, {
	    key: 'host',
	    value: function host() {
	
	      return location.hostname;
	      // return location.host
	    }
	  }, {
	    key: 'port',
	    value: function port() {
	
	      return location.port;
	    }
	  }, {
	    key: 'path',
	    value: function path() {
	
	      return location.pathname;
	    }
	  }]);
	
	  return Url;
	}();
	
	exports.default = Url;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  Func
	//
	// ------------------------------------------------------------
	
	var Func = function () {
	  function Func() {
	    _classCallCheck(this, Func);
	
	    this.blank();
	    this.requestAnimationFrame();
	    this.scrollRestoration(false);
	  }
	
	  _createClass(Func, [{
	    key: 'blank',
	    value: function blank() {
	
	      $(function () {
	        $('.blank').attr('target', '_blank');
	      });
	    }
	  }, {
	    key: 'scrollRestoration',
	    value: function scrollRestoration() {
	      var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
	
	      // スクロール位置を元の位置に戻す
	      if (bool) {
	
	        window.history.scrollRestoration = 'auto';
	
	        // スクロール位置を必ず一番上に
	      } else {
	
	        window.history.scrollRestoration = 'manual';
	      }
	    }
	  }, {
	    key: 'requestAnimationFrame',
	    value: function requestAnimationFrame() {
	
	      var FPS = 1000 / 60;
	
	      window.requestAnimationFrame = window.requestAnimationFrame || // chromeや最新の
	      window.mozRequestAnimationFrame || // 古いfirefox用
	      window.webkitRequestAnimationFrame || // safari6以前、iOS6 safari用
	      function (callback) {
	        window.setTimeout(callback, FPS);
	      };
	
	      window.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || function (timer) {
	        window.clearTimeout(timer);
	      };
	    }
	
	    // smart phone 全画面
	
	  }, {
	    key: 'SPH',
	    value: function SPH() {
	      var $target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('.section');
	
	
	      var r = function r() {
	        $target.height(gb.r.h);
	      };
	
	      r();
	
	      gb.r.add('re', r);
	    }
	  }, {
	    key: 'checkCssBlend',
	    value: function checkCssBlend() {
	
	      if ('CSS' in window && 'supports' in window.CSS) {
	        if (!window.CSS.supports('mix-blend-mode', 'soft-light')) {
	          document.documentElement.classList.add('not-mix-blend-mode');
	        }
	      }
	
	      log(gb.u.isIE);
	
	      if (gb.u.isIE) {
	
	        document.documentElement.classList.add('not-mix-blend-mode');
	      };
	    }
	  }, {
	    key: 'notSaveImg',
	    value: function notSaveImg() {
	
	      // ------------------------------------------------------------
	      //
	      //  pc
	      //
	      // ------------------------------------------------------------
	
	      if (gb.u.isPC) {
	
	        $(function () {
	          $("img").on("contextmenu", function () {
	            return false;
	          });
	        });
	      }
	
	      // ------------------------------------------------------------
	      //
	      //  sp android
	      //
	      // ------------------------------------------------------------
	      var v = gb.u.isAndroidVersion();
	
	      if (v == undefined) return;
	      if (v < 5) {
	
	        var timer;
	        $("img").on("touchstart", function () {
	          timer = setTimeout(function () {
	            alert("画像は保存できません");
	          }, 500);
	          return false;
	        });
	        $("img").on("touchend", function () {
	          clearTimeout(timer);
	          return false;
	        });
	      }
	    }
	  }, {
	    key: 'smartRollover',
	    value: function smartRollover($target) {
	      var off = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '_off.';
	      var on = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '_on.';
	
	
	      var $images = $target;
	
	      for (var i = 0; i < $images.length; i++) {
	
	        if ($images.eq(i).get(0).getAttribute("src").match(off)) {
	
	          log(111);
	
	          $images.eq(i).get(0).onmouseover = function () {
	            this.setAttribute("src", this.getAttribute("src").replace(off, on));
	          };
	          $images.eq(i).get(0).onmouseout = function () {
	            this.setAttribute("src", this.getAttribute("src").replace(on, off));
	          };
	        }
	      }
	    }
	  }]);
	
	  return Func;
	}();
	
	exports.default = Func;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  Debugger
	//
	// ------------------------------------------------------------
	
	var Debugger = function () {
	  function Debugger() {
	    _classCallCheck(this, Debugger);
	
	    this.setup();
	    this.setEvents();
	
	    this.onReady();
	    this.console(); // console
	  }
	
	  _createClass(Debugger, [{
	    key: 'setup',
	    value: function setup() {}
	
	    // html外出し用
	
	  }, {
	    key: 'setupHTML',
	    value: function setupHTML() {
	
	      // 本番だったら、div追加しない
	      if (!gb.conf.LOG) return;
	
	      this.$target = $('<div class="debug"></div>');
	
	      this.$target.prependTo($('body')).css({
	        position: 'fixed',
	        'z-index': 99999,
	        left: 20,
	        top: 20
	      });
	    }
	
	    // log系を短く
	
	  }, {
	    key: 'console',
	    value: function (_console) {
	      function console() {
	        return _console.apply(this, arguments);
	      }
	
	      console.toString = function () {
	        return _console.toString();
	      };
	
	      return console;
	    }(function () {
	
	      // 置換対象のメソッドを配列として保持する
	      var methods = ['log'];
	
	      // consoleが使えない場合は空のオブジェクトを設定しておく
	      if (typeof window.console === "undefined") {
	        window.console = {};
	      }
	
	      // 各メソッドをwindowへ直接追加して行く
	      for (var i in methods) {
	        (function (m) {
	
	          // consoleにある？デバッグモードは有効？consoleのものは関数？
	          if (console[m] && typeof console[m] === "function" && gb.conf.LOG) {
	            window[m] = console[m].bind(console);
	          } else {
	            // debugModeがfalse,もしくは該当メソッドが存在しない場合は、空のメソッドを用意する
	            window[m] = function () {};
	          }
	        })(methods[i]);
	      }
	    })
	
	    // htmlに外出し
	
	  }, {
	    key: 'html',
	    value: function html(v) {
	
	      // 本番だったら、div追加しない
	      if (!gb.conf.LOG) return;
	
	      this.$target.text(v);
	    }
	
	    // alert
	
	  }, {
	    key: 'alert',
	    value: function alert(v) {
	
	      window.alert(v);
	    }
	  }, {
	    key: 'onReady',
	    value: function onReady() {
	
	      this.setupHTML();
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(document).on('ready', this.onReady.bind(this));
	    }
	  }]);
	
	  return Debugger;
	}();
	
	exports.default = Debugger;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(14);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Events = __webpack_require__(15);
	
	var _Events2 = _interopRequireDefault(_Events);
	
	var _Render_def = __webpack_require__(16);
	
	var _Render_def2 = _interopRequireDefault(_Render_def);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  ReadyMgr
	//
	//--------------------------------------------------
	
	var ReadyMgr = function (_Base) {
	  _inherits(ReadyMgr, _Base);
	
	  function ReadyMgr() {
	    _classCallCheck(this, ReadyMgr);
	
	    var _this = _possibleConstructorReturn(this, (ReadyMgr.__proto__ || Object.getPrototypeOf(ReadyMgr)).call(this));
	
	    _this.name = 'ReadyMgr';
	
	    _this.completed = 0;
	    _this.total = 1; // 最初に0で割られるのを防ぐ
	    _this.current = 0;
	
	    _this.$wrap = $('#wrapper');
	
	    if (gb.conf.LOADING) _this.setup(); // loading有り
	    else _this.setup_not_loading(); // loading無し
	
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(ReadyMgr, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.e = new _Events2.default(this);
	      this.r = new _Render_def2.default();
	
	      this.r.add();
	      this.r.show();
	    }
	  }, {
	    key: 'setup_not_loading',
	    value: function setup_not_loading() {
	
	      // this.$wrap.css('opacity', 1);
	      this.onComplete();
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      if (this.e) {
	
	        this.e.update();
	        this.r.update(this.e);
	      }
	    }
	  }, {
	    key: 'onComplete',
	    value: function onComplete() {
	
	      // update処理をやめる
	      this.offU();
	
	      // this.r.hide();
	
	      // timeline    
	      var tl = new TimelineMax();
	
	      tl
	      // .to(this.$wrap, 2.4, {
	      .to(this.$wrap, 0.0, {
	        opacity: 1,
	        delay: 0,
	        ease: Power2.easeInOut,
	        onComplete: function onComplete() {}
	      }).add(function () {
	        $(window).trigger('loadingEnd');
	      }, 1.0);
	    }
	  }]);
	
	  return ReadyMgr;
	}(_Base3.default);
	
	exports.default = ReadyMgr;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  Base
	//
	// ------------------------------------------------------------
	
	var Base = function () {
	  function Base() {
	    _classCallCheck(this, Base);
	
	    this.name = 'Base';
	
	    this.isUEv = false; // update
	    this.isREv = false; // resize
	    this.isSEv = false; // scroll
	    this.isMEv = false; // mouse
	    this.prevent = true;
	
	    this.isloop = true;
	  }
	
	  _createClass(Base, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'draw',
	    value: function draw() {}
	  }, {
	    key: 'loop',
	    value: function loop() {
	
	      if (this.isloop) {
	
	        this.update();
	        this.draw();
	
	        this.Timer = requestAnimationFrame(this.loop.bind(this));
	      }
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {}
	  }, {
	    key: 'onScroll',
	    value: function onScroll() {}
	  }, {
	    key: 'onMouseMove',
	    value: function onMouseMove() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      var self = this;
	
	      if (this.isUEv) this.loop();
	      if (this.isREv) $(window).on('resize' + '.' + this.name, this.onResize.bind(this));
	      if (this.isSEv) $(window).on('scroll' + '.' + this.name, this.onScroll.bind(this));
	      if (this.isMEv) $(window).on('touchmove' + '.' + this.name, function (e) {
	        self.onMouseMove.call(self, e);
	        if (self.prevent) e.preventDefault();
	      });
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {
	
	      if (this.isUEv) {
	        this.isloop = false;
	        cancelAnimationFrame(this.Timer);
	      }
	      if (this.isREv) $(window).off('resize' + '.' + this.name);
	      if (this.isSEv) $(window).off('scroll' + '.' + this.name);
	      if (this.isMEv) $(window).off('touchmove' + '.' + this.name);
	    }
	  }, {
	    key: 'startU',
	    value: function startU() {
	
	      this.isloop = true;
	      this.loop();
	    }
	  }, {
	    key: 'offU',
	    value: function offU() {
	
	      this.isloop = false;
	      if (this.isUEv) cancelAnimationFrame(this.Timer);
	    }
	  }, {
	    key: 'offR',
	    value: function offR() {
	
	      if (this.isREv) $(window).off('resize' + '.' + this.name);
	    }
	  }, {
	    key: 'offS',
	    value: function offS() {
	
	      if (this.isSEv) $(window).off('scroll' + '.' + this.name);
	    }
	  }, {
	    key: 'offM',
	    value: function offM() {
	
	      if (this.isMEv) $(window).off('touchmove' + '.' + this.name);
	    }
	  }]);
	
	  return Base;
	}();
	
	exports.default = Base;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Events
	//
	//--------------------------------------------------
	
	var Events = function () {
	  function Events(parent) {
	    _classCallCheck(this, Events);
	
	    this.parent = parent;
	
	    this.current = 0;
	
	    this.isLock = false;
	    this.loopStart = true;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Events, [{
	    key: "setup",
	    value: function setup() {}
	  }, {
	    key: "update",
	    value: function update() {
	
	      var target = gb.lm.completed / gb.lm.total * 100;
	      this.current += (target - this.current) * 0.1;
	      gb.lm.current = this.current;
	      // log(gb.lm.completed,gb.lm.total)
	
	      // 終了処理
	      if (this.current >= 100 && !this.isLock) {
	        this.isLock = true;
	        this.parent.onComplete();
	      }
	
	      // current が 99.9 より大きければ 100 と見なして終了処理へ
	      if (this.current > 99.9) {
	        this.current = 100;
	      }
	
	      // log(gb.lm.completed, gb.lm.total, this.current);
	
	      return this;
	    }
	  }, {
	    key: "setEvents",
	    value: function setEvents() {}
	  }]);
	
	  return Events;
	}();
	
	exports.default = Events;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Render
	//
	//--------------------------------------------------
	
	var Render = function () {
	  function Render(parent) {
	    _classCallCheck(this, Render);
	
	    this.$wrap = $('html');
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Render, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'add',
	    value: function add() {
	
	      var html = '<div id="loading">' + '<div class="loadingBar"></div>' + '<div class="loadingPercent"></div>' + '</div>';
	
	      this.$wrap.append(html);
	
	      // get dom
	      this.$loading = $('#loading');
	      this.$bar = $('#loading .loadingBar');
	      this.$percent = $('#loading .loadingPercent');
	    }
	  }, {
	    key: 'show',
	    value: function show() {
	
	      // var tl = new TimelineMax();
	
	      // tl.to(this.$loading, 1.0, {
	      //   opacity: 1,
	      //   ease: Expo.easeInOut,
	      //   onComplete: ()=>{
	
	      //   }
	      // })
	
	      TweenMax.set(this.$loading, { opacity: 1 });
	    }
	  }, {
	    key: 'update',
	    value: function update(e) {
	
	      // log('loading', e.current);
	
	      this.$bar.css({ width: e.current + '%' }); // bar
	      this.$percent.html(Math.floor(e.current) + '<span>%</span>'); // value
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      var _this = this;
	
	      var tl = new TimelineMax();
	
	      tl.to(this.$bar, 1.0, {
	        x: '102%',
	        ease: Expo.easeInOut,
	        onComplete: function onComplete() {
	
	          _this.remove();
	        }
	      }).to(this.$percent, 1.0, {
	        opacity: 0,
	        ease: Power2.easeInOut
	      }, 0.0);
	    }
	  }, {
	    key: 'remove',
	    value: function remove() {
	
	      this.$loading.remove();
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return Render;
	}();
	
	exports.default = Render;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  updateManager
	//
	//--------------------------------------------------
	
	var UpdateMgr = function () {
	  function UpdateMgr() {
	    _classCallCheck(this, UpdateMgr);
	
	    this.frame = 0;
	    this.len = 0;
	    this.Timer = null;
	    this.isStop = false;
	
	    this.st = 0;
	    this.et = 0;
	    this.delta = 0;
	    this.frameRate = 0;
	
	    this.setup();
	  }
	
	  _createClass(UpdateMgr, [{
	    key: "setup",
	    value: function setup() {
	
	      this.start = this.st = new Date().getTime();
	      this.fps = 60.0;
	      this.frameLength = 6.0;
	    }
	  }, {
	    key: "loop",
	    value: function loop() {
	
	      // delta
	      var et = new Date().getTime();
	      this.delta = et - this.st;
	      this.st = et;
	
	      // frame
	      this.frame++;
	
	      // 再帰
	      this.Timer = requestAnimationFrame(this.loop.bind(this));
	    }
	  }, {
	    key: "stop",
	    value: function stop() {
	
	      cancelAnimationFrame(this.Timer);
	    }
	  }, {
	    key: "resume",
	    value: function resume() {
	
	      this.loop();
	    }
	  }, {
	    key: "getElapsedTime",
	    value: function getElapsedTime() {
	
	      var elapsed = new Date().getTime() - this.start;
	
	      return elapsed / 1000;
	    }
	  }]);
	
	  return UpdateMgr;
	}();
	
	exports.default = UpdateMgr;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  ResizeMgr
	//
	//--------------------------------------------------
	
	var ResizeMgr = function () {
	  function ResizeMgr() {
	    _classCallCheck(this, ResizeMgr);
	
	    this.w = 0;
	    this.h = 0;
	    this.oldW = 0;
	    this.oldH = 0;
	    this.ww = 0;
	    this.wh = 0;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(ResizeMgr, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.getWindowSize();
	    }
	  }, {
	    key: 'getWindowSize',
	    value: function getWindowSize() {
	
	      this.oldW = this.w;
	      this.oldH = this.h;
	      this.w = window.innerWidth;
	      this.h = window.innerHeight;
	
	      this.ww = $(window).width();
	      this.hh = $(window).height();
	
	      this.haw = this.w / 2;
	      this.hah = this.h / 2;
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize(e) {
	
	      this.getWindowSize();
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(window).on('resize', this.onResize.bind(this));
	      // $(window).on('resize', $.throttle(100, false, this.onResize.bind(this)));
	      // $(window).on('resize', $.debounce(200, this.onResize.bind(this)));
	    }
	  }]);
	
	  return ResizeMgr;
	}();
	
	exports.default = ResizeMgr;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  ScrollMgr
	//
	//--------------------------------------------------
	
	var ScrollMgr = function () {
	  function ScrollMgr() {
	    _classCallCheck(this, ScrollMgr);
	
	    this.st = 0; // 現在のscroll top
	    this.sb = 0; // 現在のscroll bottom
	
	    this.isUp = null; // 上スクロールか下スクロールか;
	    this.dis = 0;
	    this.deltaY = 0;
	    this.offset = 0;
	
	    this.isSetWheel = true;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(ScrollMgr, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'onScroll',
	    value: function onScroll() {
	
	      this.st = $(window).scrollTop();
	      this.sb = this.st + gb.r.h;
	    }
	  }, {
	    key: 'onWheel',
	    value: function onWheel(e, delta, deltaX, deltaY) {
	
	      this.isWheel = true;
	
	      if (deltaY > 0) this.isUp = true;else this.isUp = false;
	
	      this.dis = deltaY - this.deltaY;
	      this.offset += deltaY;
	      this.deltaY = deltaY;
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	      var _this = this;
	
	      // scroll
	      $(window).on('scroll', function () {
	        _this.onScroll();
	      });
	      // $(window).on('scroll', $.throttle(100, false, this.onScroll.bind(this)));
	
	      // wheel
	      if (this.isSetWheel) $(document).on('mousewheel', function (e, delta, deltaX, deltaY) {
	        _this.onWheel(e, delta, deltaX, deltaY);
	      }); // → document指定だと、trackball controlsが上手く動かない
	      // $('canvas').on('mousewheel', (e,delta,deltaX,deltaY)=>{this.onWheel(e,delta,deltaX,deltaY);});
	    }
	  }]);
	
	  return ScrollMgr;
	}();
	
	exports.default = ScrollMgr;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  MouseMgr
	//
	//--------------------------------------------------
	
	var MouseMgr = function () {
	  function MouseMgr() {
	    var $wrap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $(document);
	
	    _classCallCheck(this, MouseMgr);
	
	    this.$wrap = $wrap;
	
	    this.x = 0;
	    this.y = 0;
	    this.px = 0; // previous
	    this.py = 0; // previous
	
	    this.cx = 0;
	    this.cy = 0;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(MouseMgr, [{
	    key: "setup",
	    value: function setup() {}
	  }, {
	    key: "onMousemove",
	    value: function onMousemove(e) {
	
	      this.getPos(e);
	    }
	  }, {
	    key: "onTouchmove",
	    value: function onTouchmove(e) {
	
	      this.x = e.originalEvent.changedTouches[0].pageX;
	      this.y = e.originalEvent.changedTouches[0].pageY;
	    }
	  }, {
	    key: "getPos",
	    value: function getPos(e) {
	
	      if (e.offsetX == undefined) {
	        // this works for Firefox
	        this.x = e.pageX - this.$wrap.offset().left;
	        this.y = e.pageY - this.$wrap.offset().top;
	      } else {
	        // works in Google Chrome
	        this.x = e.pageX - $(window).scrollLeft();
	        this.y = e.pageY - $(window).scrollTop();
	      }
	
	      this.cx = e.clientX - gb.r.hw;
	      this.cy = e.clientY - gb.r.hh;
	    }
	  }, {
	    key: "setEvents",
	    value: function setEvents() {
	      var _this = this;
	
	      this.$wrap.on("touchmove.MouseMgr", function (e) {
	        _this.onTouchmove(e);
	      });
	      this.$wrap.on("mousemove.MouseMgr", function (e) {
	        _this.onMousemove(e);
	      });
	    }
	  }, {
	    key: "removeEvents",
	    value: function removeEvents() {
	
	      this.$wrap.off("touchmove.MouseMgr");
	      this.$wrap.off("mousemove.MouseMgr");
	    }
	  }]);
	
	  return MouseMgr;
	}();
	
	exports.default = MouseMgr;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  updateList
	//
	//--------------------------------------------------
	
	var UpdateList = function () {
	  function UpdateList() {
	    _classCallCheck(this, UpdateList);
	
	    this.list = [];
	
	    this.Timer = null;
	    this.isStop = false;
	  }
	
	  _createClass(UpdateList, [{
	    key: "setup",
	    value: function setup() {}
	  }, {
	    key: "update",
	    value: function update() {
	
	      // 処理
	      for (var i in this.list) {
	        this.list[i].func();
	      } // 再帰
	      this.Timer = requestAnimationFrame(this.update.bind(this));
	      if (this.isStop) cancelAnimationFrame(this.Timer);
	    }
	  }, {
	    key: "start",
	    value: function start() {
	
	      this.update();
	    }
	  }, {
	    key: "stop",
	    value: function stop() {
	
	      this.isStop = true;
	    }
	  }, {
	    key: "resume",
	    value: function resume() {
	
	      this.isStop = false;
	      this.update();
	    }
	  }, {
	    key: "add",
	    value: function add(name, func) {
	
	      var obj = { name: name, func: func };
	
	      this.list.push(obj);
	    }
	  }, {
	    key: "remove",
	    value: function remove(name) {
	
	      var target = { name: name, func: function func() {} };
	
	      UpdateList.arrRemove(this.list, target);
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  静的メンバ
	    //
	    // ------------------------------------------------------------
	
	  }], [{
	    key: "arrRemove",
	    value: function arrRemove(arr, target) {
	
	      var len = arr.length;
	      var check;
	      for (var i = 0; i < len; i++) {
	        check = arr[i];
	
	        if (check.name == target.name) {
	          arr.splice(i, 1);
	          i--;
	          len--;
	        }
	      }
	
	      return arr;
	    }
	  }]);
	
	  return UpdateList;
	}();
	
	exports.default = UpdateList;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  ResizeList
	//
	//--------------------------------------------------
	
	var ResizeList = function () {
	  function ResizeList() {
	    _classCallCheck(this, ResizeList);
	
	    this.list = [];
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(ResizeList, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'onResize',
	    value: function onResize(e) {
	
	      for (var i in this.list) {
	        this.list[i].func();
	      }
	    }
	  }, {
	    key: 'add',
	    value: function add(name, func) {
	
	      var obj = { name: name, func: func };
	
	      this.list.push(obj);
	    }
	  }, {
	    key: 'remove',
	    value: function remove(name) {
	
	      var arr = this.list;
	      var len = arr.length;
	      var check;
	      for (var i = 0; i < len; i++) {
	        check = arr[i];
	
	        if (check.name == name) {
	          arr.splice(i, 1);
	          i--;
	          len--;
	        }
	      }
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      // $(window).on('resize', this.onResize.bind(this));
	      $(window).on('resize', $.throttle(100, false, this.onResize.bind(this)));
	      $(window).on('resize', $.debounce(200, this.onResize.bind(this)));
	    }
	  }]);
	
	  return ResizeList;
	}();
	
	exports.default = ResizeList;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  ScrollList
	//
	//--------------------------------------------------
	
	var ScrollList = function () {
	  function ScrollList() {
	    _classCallCheck(this, ScrollList);
	
	    this.list = [];
	    this.endList = [];
	
	    this.isStart = true;
	    this.isWheel = false; // wheel中か、そうでないか
	    this.endTimer = 200;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(ScrollList, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.add('end', this.onEnd.bind(this));
	    }
	  }, {
	    key: 'add',
	    value: function add(name, func) {
	
	      var obj = { name: name, func: func };
	
	      this.list.push(obj);
	    }
	  }, {
	    key: 'remove',
	    value: function remove(name) {
	
	      ScrollList.arrRemove(this.list, name);
	    }
	  }, {
	    key: 'onScroll',
	    value: function onScroll(e) {
	
	      if (this.isStart) {
	        this.isStart = false;
	        // log('resizeStart');
	        // 最初だけの処理
	      };
	
	      for (var i in this.list) {
	        this.list[i].func();
	      }
	    }
	  }, {
	    key: 'onMouseWheel',
	    value: function onMouseWheel(e, delta, deltaX, deltaY) {
	
	      this.isWheel = true;
	
	      if (deltaY > 0) this.upWheel = true;else this.upWheel = false;
	
	      for (var i in this.list) {
	        this.list[i].func();
	      }
	    }
	  }, {
	    key: 'onEnd',
	    value: function onEnd(e) {
	
	      var self = this;
	
	      if (this.Timer) clearTimeout(this.Timer);
	      this.Timer = setTimeout(function () {
	        self.isStart = true;
	        self.isWheel = false;
	
	        for (var i in self.endList) {
	          self.endList[i]();
	        }
	      }, this.endTimer);
	    }
	  }, {
	    key: 'addFixedObjectScroll',
	    value: function addFixedObjectScroll($target) {
	
	      this.list.push(function () {
	
	        $target.css("left", -$(window).scrollLeft());
	      });
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	      var _this = this;
	
	      $(window).on('scroll', function (e) {
	        _this.onScroll(e);
	      });
	      // $(window).on('scroll', $.throttle(100, false, this.onScroll.bind(this)));
	      // $(document).on('mousewheel', (e,delta,deltaX,deltaY)=>{this.onMouseWheel(e,delta,deltaX,deltaY);}); // → document指定だと、trackball controlsが上手く動かない
	      // $('canvas').on('mousewheel', (e,delta,deltaX,deltaY)=>{this.onMouseWheel(e,delta,deltaX,deltaY);});
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  静的メンバ
	    //
	    // ------------------------------------------------------------
	
	  }], [{
	    key: 'arrRemove',
	    value: function arrRemove(arr, name) {
	
	      var len = arr.length;
	      var check;
	      for (var i = 0; i < len; i++) {
	        check = arr[i];
	
	        if (check.name == name) {
	          arr.splice(i, 1);
	          i--;
	          len--;
	        }
	      }
	
	      return arr;
	    }
	  }]);
	
	  return ScrollList;
	}();
	
	exports.default = ScrollList;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  MouseList
	//
	//--------------------------------------------------
	
	var MouseList = function () {
	  function MouseList() {
	    var $wrap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $(document);
	
	    _classCallCheck(this, MouseList);
	
	    this.$wrap = $wrap;
	
	    this.list = [{ name: 'def', func: function func() {} }];
	    this.startList = [{ name: 'def', func: function func() {} }];
	    this.endList = [{ name: 'def', func: function func() {} }];
	
	    this.x = 0;
	    this.y = 0;
	    this.endx = 0;
	    this.endy = 0;
	
	    this.isStart = true;
	    this.Timer = null;
	    this.endTime = 20;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(MouseList, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.add('onEnd', this.onMouseEnd.bind(this));
	    }
	  }, {
	    key: 'onTouchMove',
	    value: function onTouchMove(e) {
	
	      for (var i in this.list) {
	        this.list[i].func();
	      }
	    }
	  }, {
	    key: 'onMouseMove',
	    value: function onMouseMove(e) {
	
	      if (this.Timer) clearTimeout(this.Timer);
	      var dis = gb.m.x - this.endx;
	      // log(this.isStart, dis);
	      if (this.isStart && Math.abs(dis) > 3) {
	        this.isStart = false;
	
	        // 最初だけの処理
	        // log('moveStart');
	
	        for (var i in this.startList) {
	          this.startList[i].func();
	        }
	      };
	
	      for (var i in this.list) {
	        this.list[i].func();
	      }
	    }
	  }, {
	    key: 'onMouseEnd',
	    value: function onMouseEnd(e) {
	      var _this = this;
	
	      if (this.Timer) clearTimeout(this.Timer);
	      this.Timer = setTimeout(function () {
	        if (!_this.isStart) {
	          _this.isStart = true;
	
	          // log('moveEnd');
	          _this.endx = gb.m.x;
	          _this.endy = gb.m.y;
	
	          for (var i in _this.endList) {
	            _this.endList[i].func();
	          }
	        }
	      }, this.endTime);
	    }
	  }, {
	    key: 'add',
	    value: function add(name, func) {
	
	      var obj = { name: name, func: func };
	
	      this.list.push(obj);
	    }
	  }, {
	    key: 'addStart',
	    value: function addStart(name, func) {
	
	      var obj = { name: name, func: func };
	
	      this.startList.push(obj);
	    }
	  }, {
	    key: 'addEnd',
	    value: function addEnd(name, func) {
	
	      var obj = { name: name, func: func };
	
	      this.endList.push(obj);
	    }
	  }, {
	    key: 'remove',
	    value: function remove(name) {
	
	      MouseList.arrRemove(this.list, name);
	    }
	  }, {
	    key: 'removeStart',
	    value: function removeStart(name) {
	
	      MouseList.arrRemove(this.startList, name);
	    }
	  }, {
	    key: 'removeEnd',
	    value: function removeEnd(name) {
	
	      MouseList.arrRemove(this.endList, name);
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  静的メンバ
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	      var _this2 = this;
	
	      this.$wrap.on("touchmove.MouseList", function (e) {
	        _this2.onTouchMove(e);
	      });
	      this.$wrap.on("mousemove.MouseList", function (e) {
	        _this2.onMouseMove(e);
	      });
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {
	
	      this.$wrap.off("touchmove.MouseList");
	      this.$wrap.off("mousemove.MouseList");
	    }
	  }], [{
	    key: 'arrRemove',
	    value: function arrRemove(arr, name) {
	
	      var len = arr.length;
	      var check;
	      for (var i = 0; i < len; i++) {
	        check = arr[i];
	
	        if (check.name == name) {
	          arr.splice(i, 1);
	          i--;
	          len--;
	        }
	      }
	
	      return arr;
	    }
	  }]);
	
	  return MouseList;
	}();
	
	exports.default = MouseList;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  LoadMgr
	//
	//--------------------------------------------------
	
	var _THREELoader = __webpack_require__(26);
	
	var _THREELoader2 = _interopRequireDefault(_THREELoader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var LoadMgr = function () {
	  function LoadMgr() {
	    _classCallCheck(this, LoadMgr);
	
	    this.data = null;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(LoadMgr, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return LoadMgr;
	}();
	
	exports.default = LoadMgr;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  THREELoader
	//
	//--------------------------------------------------
	
	// TextLoader
	// SVGLoader
	// CSSLoader
	// JavaScriptLoader
	// BinaryLoader
	// ImageLoader
	// SpriteSheetLoader
	// VideoLoader
	// SoundLoader
	// JSONLoader
	// JSONPLoader
	// XMLLoader
	
	var THREELoader = function () {
	  function THREELoader() {
	    _classCallCheck(this, THREELoader);
	
	    this.cb = function () {};
	  }
	
	  _createClass(THREELoader, [{
	    key: 'textureByName',
	    value: function textureByName(len, r, cbProg, cbComp) {
	      var _this = this;
	
	      this.list = [];
	      var cnt = 0;
	
	      var load = function load(i) {
	
	        var resource = r[i];
	        var tl = new THREE.TextureLoader();
	        // tl.crossOrigin = 'anonymous';
	        tl.load(resource, function (tex) {
	
	          tex.wrapS = THREE.RepeatWrapping;
	          tex.wrapT = THREE.RepeatWrapping;
	
	          // ロード数をカウント
	          cnt++;
	          _this.list.push(tex);
	
	          cbProg();
	          if (cnt == len) cbComp();else load(cnt);
	        });
	      };
	
	      load(cnt);
	    }
	  }, {
	    key: 'texture',
	    value: function texture(len, r, cbProg, cbComp) {
	      var _this2 = this;
	
	      this.list = [];
	      var cnt = 0;
	
	      var load = function load(i) {
	
	        var resource = r.path + r.name + gb.u.s.add0(i + 1, -2) + r.ext;
	        var tl = new THREE.TextureLoader();
	        tl.crossOrigin = 'anonymous';
	        tl.load(resource, function (tex) {
	
	          log(tex);
	
	          // ロード数をカウント
	          cnt++;
	          _this2.list.push(tex);
	
	          cbProg();
	          if (cnt == len) cbComp();else load(cnt);
	        });
	      };
	
	      load(cnt);
	    }
	  }, {
	    key: 'obj',
	    value: function obj() {
	      var _this3 = this;
	
	      gb.objList = [];
	
	      var texture = new THREE.Texture();
	
	      var loader = new THREE.ImageLoader();
	      loader.load(gb.in.conf.tex01, function (image) {
	
	        texture.image = image;
	        texture.needsUpdate = true;
	
	        log(texture);
	      });
	
	      // var texture = THREE.ImageUtils.loadTexture(gb.in.conf.tex01);
	
	      // obj
	      this.object = new THREE.OBJLoader();
	      this.object.load(gb.in.conf.OBJPATH01, function (e) {
	        // this.object.load( './ff15/royal/gallery2018/assets/resource/obj/_buf/stage/stage01_01.obj', (e)=>{
	
	        e.traverse(function (child) {
	
	          if (child instanceof THREE.Mesh) {
	
	            // child.material.map = texture;
	            child.material.side = THREE.DoubleSide;
	
	            child.geometry.computeBoundingBox();
	
	            // # 原点を真ん中に
	            // if @_list[@_loadedNum].rePos
	            var b = child.geometry.boundingBox;
	
	            // 横に置く
	            child.rotation.x = -Math.PI / 2;
	
	            // 中央に
	            child.position.x = -b.min.x - (b.max.x - b.min.x) * 0.5;
	            child.position.y = -b.min.y - (b.max.y - b.min.y) * 0.5;
	            child.position.z = -b.min.z - (b.max.z - b.min.z) * 0.5;
	
	            // log(b,b.min.x,(b.max.x - b.min.x)/2);
	            // log(b,b.min.y,(b.max.y - b.min.y)/2);
	            // log(b,b.min.z,(b.max.z - b.min.z)/2);
	            // child.position.z = -b.min.z;
	
	            // 下の方へ移動
	            child.position.y -= 200;
	          }
	
	          log(child);
	        });
	
	        // e.rotation.x = Math.PI / 4
	        // e.position.set(0,-100,0);/
	        // e.scale.set(0.5,0.5,0.5);
	
	        // log(e);
	
	        gb.objList.push(e);
	
	        _this3.cb();
	      });
	    }
	  }, {
	    key: 'mtl',
	    value: function mtl() {
	      // not work
	
	      var m = new THREE.MTLLoader();
	      // m.setBaseUrl( "http://threejs.org/examples/obj/walt/" );
	      // m.setPath( "http://threejs.org/examples/obj/walt/" );
	      m.load(gb.in.conf.MTLPATH01, function (materials) {
	
	        materials.preload();
	
	        var o = new THREE.OBJLoader();
	        // o.setMaterials( materials );
	        // o.setPath( "http://threejs.org/examples/obj/walt/" );
	        o.load(gb.in.conf.OBJPATH01, function (o) {
	
	          // mesh = object;
	          // mesh.position.y = -50;
	          // scene.add( mesh );
	
	          log(o);
	        });
	      });
	    }
	  }, {
	    key: 'obj_mtl',
	    value: function obj_mtl() {
	
	      gb.objList = [];
	
	      var mtlLoader = new THREE.MTLLoader();
	      mtlLoader.setBaseUrl('assets/resource/obj/');
	      mtlLoader.setPath('assets/resource/obj/');
	      mtlLoader.load('male02.mtl', function (materials) {
	
	        materials.preload();
	
	        var objLoader = new THREE.OBJLoader();
	        objLoader.setMaterials(materials);
	        objLoader.load(gb.in.conf.OBJPATH02, function (object) {
	
	          // object.position.y = - 95;
	          object.position.y = 100;
	          // scene.add( object );
	          gb.objList.push(object);
	        });
	      });
	    }
	  }, {
	    key: 'collada',
	    value: function collada() {
	      // not work
	
	      gb.daeList = [];
	
	      var loader = new THREE.ColladaLoader();
	      //loader.options.convertUpAxis = true;
	      loader.load(gb.in.conf.DAEPATH01, function (model) {
	
	        // console.log(model)
	        // object = model.skins[ 0 ];
	        log(model);
	        var dae = model.scene;
	        log(dae);
	        dae.position.set(0, 0, 0);
	        dae.scale.set(10, 10, 10);
	
	        gb.daeList.push(dae);
	
	        // scene.add(dae);
	        // console.log(scene);
	      });
	    }
	  }, {
	    key: 'json3DModel',
	    value: function json3DModel() {// not work
	
	
	    }
	  }]);
	
	  return THREELoader;
	}();
	
	exports.default = THREELoader;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(14);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Keys = __webpack_require__(28);
	
	var _Keys2 = _interopRequireDefault(_Keys);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ------------------------------------------------------------
	//
	//  UrlParamMgr
	//
	// ------------------------------------------------------------
	
	var UrlParamMgr = function (_Base) {
	  _inherits(UrlParamMgr, _Base);
	
	  function UrlParamMgr() {
	    _classCallCheck(this, UrlParamMgr);
	
	    var _this = _possibleConstructorReturn(this, (UrlParamMgr.__proto__ || Object.getPrototypeOf(UrlParamMgr)).call(this));
	
	    _this.name = 'UrlParamMgr';
	
	    _this.keys = (0, _Keys2.default)();
	
	    _this.setParam();
	    _this.getParam();
	
	    log(_this);
	
	    return _this;
	  }
	
	  _createClass(UrlParamMgr, [{
	    key: 'setParam',
	    value: function setParam() {}
	  }, {
	    key: 'getParam',
	    value: function getParam() {
	
	      var params = location.search.replace('?', '').split('&');
	
	      // データの設定
	      for (var i = 0, len = params.length; i < len; i++) {
	
	        // 各キー、バリューを取得
	        var param = params[i];
	        var p = param.split('=');
	        var key = p[0],
	            value = p[1];
	
	        // データと比較して設定
	        for (var j = 0; j < this.keys.length; j++) {
	
	          var obj = this.keys[j];
	
	          // パラメータがキーと一緒だったら
	          if (obj.key === key) {
	
	            // 各値と比較
	            for (var k = 0; k < obj.value.length; k++) {
	
	              var val = obj.value[k];
	
	              // キーをthis.keysのkeyに、valueを比較して同値だったものに
	              if (val === value) {
	                this[obj.key] = val;
	                break;
	                // anyは、どの値でも
	              } else if (val == 'any') {
	                this[obj.key] = value;
	                break;
	                // anyでも、特定の値でもなければ、def値を入れる
	              } else {
	                this[obj.key] = obj.def;
	              }
	            };
	          }
	        };
	      }
	
	      // キーに値が設定されてなければ、def値を設定
	      for (var j = 0; j < this.keys.length; j++) {
	
	        var obj = this.keys[j];
	
	        if (this[obj.key] == undefined) this[obj.key] = obj.def;
	      }
	    }
	  }]);
	
	  return UrlParamMgr;
	}(_Base3.default);
	
	exports.default = UrlParamMgr;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var data = function data() {
	
	  return [{
	    'key': 'mode',
	    'def': 'visual',
	    'value': ['visual', 'ui', 'util', 'inspection']
	  }, {
	    'key': 'num',
	    'def': '01',
	    'value': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
	  }, {
	    'key': 'effect',
	    'def': '01',
	    'value': ['01', '02']
	  }, {
	    'key': 'param01',
	    'def': '1',
	    'value': ['any']
	  }, {
	    'key': 'param02',
	    'def': '2',
	    'value': ['any']
	  }, {
	    'key': 'param03',
	    'def': '3',
	    'value': ['any']
	  }];
	};
	
	exports.default = data;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(14);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Profiler
	//
	//--------------------------------------------------
	
	var Profiler = function (_Base) {
	  _inherits(Profiler, _Base);
	
	  function Profiler() {
	    _classCallCheck(this, Profiler);
	
	    var _this = _possibleConstructorReturn(this, (Profiler.__proto__ || Object.getPrototypeOf(Profiler)).call(this));
	
	    _this.name = 'Profiler';
	
	    _this.isUEv = true; // update
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Profiler, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.Stats = new Stats();
	      this.Stats.domElement.style.position = "fixed";
	      this.Stats.domElement.style.left = "0px";
	      this.Stats.domElement.style.top = "0px";
	      document.body.appendChild(this.Stats.domElement);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      if (this.Stats) this.Stats.update();
	    }
	  }]);
	
	  return Profiler;
	}(_Base3.default);
	
	exports.default = Profiler;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(14);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Controller = __webpack_require__(31);
	
	var _Controller2 = _interopRequireDefault(_Controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  ViewTop
	//
	//--------------------------------------------------
	
	
	var ViewCommon = function (_Base) {
	  _inherits(ViewCommon, _Base);
	
	  function ViewCommon() {
	    _classCallCheck(this, ViewCommon);
	
	    var _this = _possibleConstructorReturn(this, (ViewCommon.__proto__ || Object.getPrototypeOf(ViewCommon)).call(this));
	
	    _this.name = 'ViewCommon';
	
	    _this.isUEv = false; // update
	    _this.isREv = true; // resize
	    _this.isSEv = false; // scroll
	    _this.isMEv = false; // mouse
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(ViewCommon, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'onLoad',
	    value: function onLoad() {
	
	      // ------------------------------------------------------------
	      //  Util
	      // ------------------------------------------------------------
	
	      // ------------------------------------------------------------
	      //  layout
	      // ------------------------------------------------------------
	
	      // ------------------------------------------------------------
	      //  ui
	      // ------------------------------------------------------------
	      new _Controller2.default();
	
	      // ------------------------------------------------------------
	      // timeline
	      // ------------------------------------------------------------
	
	
	      gb.lm.completed++;
	    }
	  }, {
	    key: 'onLoadingEnd',
	    value: function onLoadingEnd() {
	
	      // ------------------------------------------------------------
	      //  Util
	      // ------------------------------------------------------------
	
	      // ------------------------------------------------------------
	      //  layout
	      // ------------------------------------------------------------
	
	      // ------------------------------------------------------------
	      //  ui
	      // ------------------------------------------------------------
	
	      // ------------------------------------------------------------
	      // effect
	      // ------------------------------------------------------------
	
	      // ------------------------------------------------------------
	      // Scene / timeline
	      // ------------------------------------------------------------
	
	
	    }
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      _get(ViewCommon.prototype.__proto__ || Object.getPrototypeOf(ViewCommon.prototype), 'setEvents', this).call(this);
	
	      $(window).on('load', this.onLoad.bind(this));
	      // $(window).on('loadingEnd', this.onLoadingEnd.bind(this));
	    }
	  }]);
	
	  return ViewCommon;
	}(_Base3.default);
	
	exports.default = ViewCommon;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Base2 = __webpack_require__(14);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _index = __webpack_require__(32);
	
	var m = _interopRequireWildcard(_index);
	
	var _Controller = __webpack_require__(33);
	
	var _Controller2 = _interopRequireDefault(_Controller);
	
	var _Controller3 = __webpack_require__(37);
	
	var _Controller4 = _interopRequireDefault(_Controller3);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Controller sss
	//
	//--------------------------------------------------
	
	var Controller = function (_Base) {
	  _inherits(Controller, _Base);
	
	  function Controller() {
	    _classCallCheck(this, Controller);
	
	    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Controller, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.isUEv = true;
	      this.isREv = true;
	
	      this.ga = new _Controller2.default($('#inner'));
	      this.gac = this.ga.c;
	      this.st = new _Controller4.default($('.text1'));
	
	      this.timeline();
	    }
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'timeline',
	    value: function timeline() {
	      var _this2 = this;
	
	      var tl = new TimelineMax({ repeat: -1, delay: 2.0, repeatDelay: 1.0 });
	      var dur = this.gac.dur;
	      var divide = 10;
	      var offset = 0.1;
	      var delay = this.gac.delay * divide + dur + offset;
	      var interval = 1.5;
	      var cnt = 0;
	      var len = $('.img').length;
	
	      tl
	      // show
	      .add(function () {
	
	        _this2.gac.show();
	        var tls = new TimelineMax();
	        tls.add(function () {
	          _this2.st.show();
	        }, 0.0);
	      }, 0.0)
	      // hide
	      .add(function () {
	
	        _this2.gac.hide();
	        var tls = new TimelineMax();
	        tls.add(function () {
	          _this2.st.hide();
	        }, 0.05);
	      }, delay + interval).add(function () {
	
	        // change img
	        cnt++;
	        cnt = cnt % len;
	        $('.img').removeClass('active');
	        $('.img').eq(cnt).addClass('active');
	
	        // change text
	        _this2.st.switch();
	      }, delay + interval + delay + 0.05);
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      _get(Controller.prototype.__proto__ || Object.getPrototypeOf(Controller.prototype), 'setEvents', this).call(this);
	    }
	  }]);
	
	  return Controller;
	}(_Base3.default);
	
	exports.default = Controller;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.random = random;
	exports.randomInt = randomInt;
	/**
	 * Generate a random float
	 *
	 * @param  {number} minValue  Minimum boundary
	 * @param  {number} maxValue  Maximum boundary
	 * @param  {number} precision Precision
	 * @return {number}           Generated float
	 */
	function random(minValue, maxValue) {
	  var precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
	
	
	  return parseFloat(Math.min(minValue + Math.random() * (maxValue - minValue), maxValue).toFixed(precision));
	}
	
	// ランダムな整数を取得
	// -----------------------------------
	// @min : 最小値(int)
	// @max : 最大値(int)
	// return : minからmaxまでのランダムな整数(int)
	// -----------------------------------
	function randomInt(min, max) {
	
	  return Math.floor(Math.random() * (max + 1 - min) + min);
	}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Gradation = __webpack_require__(34);
	
	var _Gradation2 = _interopRequireDefault(_Gradation);
	
	var _Base2 = __webpack_require__(14);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Content
	//
	//--------------------------------------------------
	
	var Content = function (_Base) {
	  _inherits(Content, _Base);
	
	  function Content($wrap, id) {
	    _classCallCheck(this, Content);
	
	    var _this = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this));
	
	    _this.$wrap = $wrap;
	    _this.id = id;
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Content, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.isUEv = true;
	      this.isREv = true;
	
	      this.w = gb.r.w;
	      this.h = gb.r.h;
	
	      // canvas要素追加
	      var dom = '<canvas id="' + this.id + '"></canvas>';
	      this.$wrap.append(dom);
	      // style, layout
	      this.canvas = document.getElementById(this.id);
	      this.stage = new createjs.Stage(this.canvas);
	      $(this.canvas).css({ position: 'fixed', top: 0, left: 0, 'z-index': 9999, opcaity: 1 }).css({ 'pointer-events': 'none' });
	
	      this.onResize();
	
	      // obj生成
	      this.add();
	    }
	  }, {
	    key: 'add',
	    value: function add() {
	
	      // obj生成
	      this.c = new _Gradation2.default(this.stage);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      this.stage.update();
	    }
	  }, {
	    key: 'timeline',
	    value: function timeline() {}
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      // attribute
	      this.canvas.width = gb.r.w;
	      this.canvas.height = gb.r.h;
	
	      // css
	      // $(this.canvas).width(this.w/2);
	      // $(this.canvas).height('auto');
	    }
	  }]);
	
	  return Content;
	}(_Base3.default);
	
	exports.default = Content;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(14);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _chromaJs = __webpack_require__(35);
	
	var _chromaJs2 = _interopRequireDefault(_chromaJs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ------------------------------------------------------------
	//
	//  Bubble
	//
	// ------------------------------------------------------------
	
	var Bubble = function (_Base) {
	  _inherits(Bubble, _Base);
	
	  function Bubble(stage) {
	    _classCallCheck(this, Bubble);
	
	    var _this = _possibleConstructorReturn(this, (Bubble.__proto__ || Object.getPrototypeOf(Bubble)).call(this));
	
	    _this.stage = stage;
	    _this.c = _this.stage.canvas;
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Bubble, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.isUEv = true;
	      this.isREv = true;
	
	      // ready
	      this.ready();
	
	      // add
	      this.add();
	
	      // this.timeline();
	    }
	  }, {
	    key: 'ready',
	    value: function ready() {
	
	      // deg
	      this.deg = {
	        start: { x: 0, y: 0 },
	        end: { x: gb.r.w, y: gb.r.h }
	
	        // opacity
	      };this.op1 = 1;
	      this.op2 = 1;
	      this.op3 = 1;
	      this.op4 = 1;
	      this.op5 = 1;
	      this.op6 = 1;
	      this.op7 = 1;
	      this.op8 = 1;
	      this.op9 = 1;
	      this.op10 = 1;
	      this.op11 = 1;
	
	      this.dur = 1.2;
	      this.delay = 0.15;
	    }
	  }, {
	    key: 'add',
	    value: function add() {
	
	      this.s = new createjs.Shape();
	      this.stage.addChild(this.s);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      // clear
	      this.s.graphics.clear();
	
	      var color1 = (0, _chromaJs2.default)("#fff").alpha(this.op1).css();
	      var color2 = (0, _chromaJs2.default)("#fff").alpha(this.op2).css();
	      var color3 = (0, _chromaJs2.default)("#fff").alpha(this.op3).css();
	      var color4 = (0, _chromaJs2.default)("#fff").alpha(this.op4).css();
	      var color5 = (0, _chromaJs2.default)("#fff").alpha(this.op5).css();
	      var color6 = (0, _chromaJs2.default)("#fff").alpha(this.op6).css();
	      var color7 = (0, _chromaJs2.default)("#fff").alpha(this.op7).css();
	      var color8 = (0, _chromaJs2.default)("#fff").alpha(this.op8).css();
	      var color9 = (0, _chromaJs2.default)("#fff").alpha(this.op9).css();
	      var color10 = (0, _chromaJs2.default)("#fff").alpha(this.op10).css();
	      var color11 = (0, _chromaJs2.default)("#fff").alpha(this.op11).css();
	
	      this.s.graphics.beginLinearGradientFill([color1, color2, color3, color4, color5, color6, color7, color8, color9, color10, color11], [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], this.deg.start.x, this.deg.start.y, this.deg.end.x, this.deg.end.y).drawRect(0, 0, gb.r.w, gb.r.h);
	    }
	  }, {
	    key: 'show',
	    value: function show() {
	
	      var tl = new TimelineMax({});
	
	      tl
	
	      // show
	      .to(this, this.dur, {
	        op1: 0,
	        ease: Power1.easeInOut
	      }, this.delay * 0).to(this, this.dur, {
	        op2: 0,
	        ease: Power1.easeInOut
	      }, this.delay * 1).to(this, this.dur, {
	        op3: 0,
	        ease: Power1.easeInOut
	      }, this.delay * 2).to(this, this.dur, {
	        op4: 0,
	        ease: Power1.easeInOut
	      }, this.delay * 3).to(this, this.dur, {
	        op5: 0,
	        ease: Power1.easeInOut
	      }, this.delay * 4).to(this, this.dur, {
	        op6: 0,
	        ease: Power1.easeInOut
	      }, this.delay * 5).to(this, this.dur, {
	        op7: 0,
	        ease: Power1.easeInOut
	      }, this.delay * 6).to(this, this.dur, {
	        op8: 0,
	        ease: Power1.easeInOut
	      }, this.delay * 7).to(this, this.dur, {
	        op9: 0,
	        ease: Power1.easeInOut
	      }, this.delay * 8).to(this, this.dur, {
	        op10: 0,
	        ease: Power1.easeInOut
	      }, this.delay * 9).to(this, this.dur, {
	        op11: 0,
	        ease: Power1.easeInOut
	      }, this.delay * 10);
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	
	      var tl = new TimelineMax({});
	
	      tl
	
	      // show
	      .to(this, this.dur, {
	        op1: 1,
	        ease: Power1.easeInOut
	      }, this.delay * 0).to(this, this.dur, {
	        op2: 1,
	        ease: Power1.easeInOut
	      }, this.delay * 1).to(this, this.dur, {
	        op3: 1,
	        ease: Power1.easeInOut
	      }, this.delay * 2).to(this, this.dur, {
	        op4: 1,
	        ease: Power1.easeInOut
	      }, this.delay * 3).to(this, this.dur, {
	        op5: 1,
	        ease: Power1.easeInOut
	      }, this.delay * 4).to(this, this.dur, {
	        op6: 1,
	        ease: Power1.easeInOut
	      }, this.delay * 5).to(this, this.dur, {
	        op7: 1,
	        ease: Power1.easeInOut
	      }, this.delay * 6).to(this, this.dur, {
	        op8: 1,
	        ease: Power1.easeInOut
	      }, this.delay * 7).to(this, this.dur, {
	        op9: 1,
	        ease: Power1.easeInOut
	      }, this.delay * 8).to(this, this.dur, {
	        op10: 1,
	        ease: Power1.easeInOut
	      }, this.delay * 9).to(this, this.dur, {
	        op11: 1,
	        ease: Power1.easeInOut
	      }, this.delay * 10);
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {}
	  }]);
	
	  return Bubble;
	}(_Base3.default);
	
	exports.default = Bubble;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {
	/**
	 * @license
	 *
	 * chroma.js - JavaScript library for color conversions
	 * 
	 * Copyright (c) 2011-2017, Gregor Aisch
	 * All rights reserved.
	 * 
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are met:
	 * 
	 * 1. Redistributions of source code must retain the above copyright notice, this
	 *    list of conditions and the following disclaimer.
	 * 
	 * 2. Redistributions in binary form must reproduce the above copyright notice,
	 *    this list of conditions and the following disclaimer in the documentation
	 *    and/or other materials provided with the distribution.
	 * 
	 * 3. The name Gregor Aisch may not be used to endorse or promote products
	 *    derived from this software without specific prior written permission.
	 * 
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
	 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
	 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
	 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
	 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
	 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 *
	 */
	
	(function() {
	  var Color, DEG2RAD, LAB_CONSTANTS, PI, PITHIRD, RAD2DEG, TWOPI, _average_lrgb, _guess_formats, _guess_formats_sorted, _input, _interpolators, abs, atan2, bezier, blend, blend_f, brewer, burn, chroma, clip_rgb, cmyk2rgb, colors, cos, css2rgb, darken, dodge, each, floor, hcg2rgb, hex2rgb, hsi2rgb, hsl2css, hsl2rgb, hsv2rgb, interpolate, interpolate_hsx, interpolate_lab, interpolate_lrgb, interpolate_num, interpolate_rgb, lab2lch, lab2rgb, lab_xyz, lch2lab, lch2rgb, lighten, limit, log, luminance_x, m, max, multiply, normal, num2rgb, overlay, pow, rgb2cmyk, rgb2css, rgb2hcg, rgb2hex, rgb2hsi, rgb2hsl, rgb2hsv, rgb2lab, rgb2lch, rgb2luminance, rgb2num, rgb2temperature, rgb2xyz, rgb_xyz, rnd, root, round, screen, sin, sqrt, temperature2rgb, type, unpack, w3cx11, xyz_lab, xyz_rgb,
	    slice = [].slice;
	
	  type = (function() {
	
	    /*
	    for browser-safe type checking+
	    ported from jQuery's $.type
	     */
	    var classToType, len, name, o, ref;
	    classToType = {};
	    ref = "Boolean Number String Function Array Date RegExp Undefined Null".split(" ");
	    for (o = 0, len = ref.length; o < len; o++) {
	      name = ref[o];
	      classToType["[object " + name + "]"] = name.toLowerCase();
	    }
	    return function(obj) {
	      var strType;
	      strType = Object.prototype.toString.call(obj);
	      return classToType[strType] || "object";
	    };
	  })();
	
	  limit = function(x, min, max) {
	    if (min == null) {
	      min = 0;
	    }
	    if (max == null) {
	      max = 1;
	    }
	    if (x < min) {
	      x = min;
	    }
	    if (x > max) {
	      x = max;
	    }
	    return x;
	  };
	
	  unpack = function(args) {
	    if (args.length >= 3) {
	      return Array.prototype.slice.call(args);
	    } else {
	      return args[0];
	    }
	  };
	
	  clip_rgb = function(rgb) {
	    var i, o;
	    rgb._clipped = false;
	    rgb._unclipped = rgb.slice(0);
	    for (i = o = 0; o < 3; i = ++o) {
	      if (i < 3) {
	        if (rgb[i] < 0 || rgb[i] > 255) {
	          rgb._clipped = true;
	        }
	        if (rgb[i] < 0) {
	          rgb[i] = 0;
	        }
	        if (rgb[i] > 255) {
	          rgb[i] = 255;
	        }
	      } else if (i === 3) {
	        if (rgb[i] < 0) {
	          rgb[i] = 0;
	        }
	        if (rgb[i] > 1) {
	          rgb[i] = 1;
	        }
	      }
	    }
	    if (!rgb._clipped) {
	      delete rgb._unclipped;
	    }
	    return rgb;
	  };
	
	  PI = Math.PI, round = Math.round, cos = Math.cos, floor = Math.floor, pow = Math.pow, log = Math.log, sin = Math.sin, sqrt = Math.sqrt, atan2 = Math.atan2, max = Math.max, abs = Math.abs;
	
	  TWOPI = PI * 2;
	
	  PITHIRD = PI / 3;
	
	  DEG2RAD = PI / 180;
	
	  RAD2DEG = 180 / PI;
	
	  chroma = function() {
	    if (arguments[0] instanceof Color) {
	      return arguments[0];
	    }
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Color, arguments, function(){});
	  };
	
	  chroma["default"] = chroma;
	
	  _interpolators = [];
	
	  if ((typeof module !== "undefined" && module !== null) && (module.exports != null)) {
	    module.exports = chroma;
	  }
	
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return chroma;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else {
	    root = typeof exports !== "undefined" && exports !== null ? exports : this;
	    root.chroma = chroma;
	  }
	
	  chroma.version = '1.3.7';
	
	  _input = {};
	
	  _guess_formats = [];
	
	  _guess_formats_sorted = false;
	
	  Color = (function() {
	    function Color() {
	      var arg, args, chk, len, len1, me, mode, o, w;
	      me = this;
	      args = [];
	      for (o = 0, len = arguments.length; o < len; o++) {
	        arg = arguments[o];
	        if (arg != null) {
	          args.push(arg);
	        }
	      }
	      if (args.length > 1) {
	        mode = args[args.length - 1];
	      }
	      if (_input[mode] != null) {
	        me._rgb = clip_rgb(_input[mode](unpack(args.slice(0, -1))));
	      } else {
	        if (!_guess_formats_sorted) {
	          _guess_formats = _guess_formats.sort(function(a, b) {
	            return b.p - a.p;
	          });
	          _guess_formats_sorted = true;
	        }
	        for (w = 0, len1 = _guess_formats.length; w < len1; w++) {
	          chk = _guess_formats[w];
	          mode = chk.test.apply(chk, args);
	          if (mode) {
	            break;
	          }
	        }
	        if (mode) {
	          me._rgb = clip_rgb(_input[mode].apply(_input, args));
	        }
	      }
	      if (me._rgb == null) {
	        console.warn('unknown format: ' + args);
	      }
	      if (me._rgb == null) {
	        me._rgb = [0, 0, 0];
	      }
	      if (me._rgb.length === 3) {
	        me._rgb.push(1);
	      }
	    }
	
	    Color.prototype.toString = function() {
	      return this.hex();
	    };
	
	    Color.prototype.clone = function() {
	      return chroma(me._rgb);
	    };
	
	    return Color;
	
	  })();
	
	  chroma._input = _input;
	
	
	  /**
	  	ColorBrewer colors for chroma.js
	  
	  	Copyright (c) 2002 Cynthia Brewer, Mark Harrower, and The 
	  	Pennsylvania State University.
	  
	  	Licensed under the Apache License, Version 2.0 (the "License"); 
	  	you may not use this file except in compliance with the License.
	  	You may obtain a copy of the License at	
	  	http://www.apache.org/licenses/LICENSE-2.0
	  
	  	Unless required by applicable law or agreed to in writing, software distributed
	  	under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
	  	CONDITIONS OF ANY KIND, either express or implied. See the License for the
	  	specific language governing permissions and limitations under the License.
	  
	      @preserve
	   */
	
	  chroma.brewer = brewer = {
	    OrRd: ['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#b30000', '#7f0000'],
	    PuBu: ['#fff7fb', '#ece7f2', '#d0d1e6', '#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#045a8d', '#023858'],
	    BuPu: ['#f7fcfd', '#e0ecf4', '#bfd3e6', '#9ebcda', '#8c96c6', '#8c6bb1', '#88419d', '#810f7c', '#4d004b'],
	    Oranges: ['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#a63603', '#7f2704'],
	    BuGn: ['#f7fcfd', '#e5f5f9', '#ccece6', '#99d8c9', '#66c2a4', '#41ae76', '#238b45', '#006d2c', '#00441b'],
	    YlOrBr: ['#ffffe5', '#fff7bc', '#fee391', '#fec44f', '#fe9929', '#ec7014', '#cc4c02', '#993404', '#662506'],
	    YlGn: ['#ffffe5', '#f7fcb9', '#d9f0a3', '#addd8e', '#78c679', '#41ab5d', '#238443', '#006837', '#004529'],
	    Reds: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
	    RdPu: ['#fff7f3', '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e', '#7a0177', '#49006a'],
	    Greens: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],
	    YlGnBu: ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58'],
	    Purples: ['#fcfbfd', '#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#54278f', '#3f007d'],
	    GnBu: ['#f7fcf0', '#e0f3db', '#ccebc5', '#a8ddb5', '#7bccc4', '#4eb3d3', '#2b8cbe', '#0868ac', '#084081'],
	    Greys: ['#ffffff', '#f0f0f0', '#d9d9d9', '#bdbdbd', '#969696', '#737373', '#525252', '#252525', '#000000'],
	    YlOrRd: ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#800026'],
	    PuRd: ['#f7f4f9', '#e7e1ef', '#d4b9da', '#c994c7', '#df65b0', '#e7298a', '#ce1256', '#980043', '#67001f'],
	    Blues: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
	    PuBuGn: ['#fff7fb', '#ece2f0', '#d0d1e6', '#a6bddb', '#67a9cf', '#3690c0', '#02818a', '#016c59', '#014636'],
	    Viridis: ['#440154', '#482777', '#3f4a8a', '#31678e', '#26838f', '#1f9d8a', '#6cce5a', '#b6de2b', '#fee825'],
	    Spectral: ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'],
	    RdYlGn: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#d9ef8b', '#a6d96a', '#66bd63', '#1a9850', '#006837'],
	    RdBu: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#f7f7f7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac', '#053061'],
	    PiYG: ['#8e0152', '#c51b7d', '#de77ae', '#f1b6da', '#fde0ef', '#f7f7f7', '#e6f5d0', '#b8e186', '#7fbc41', '#4d9221', '#276419'],
	    PRGn: ['#40004b', '#762a83', '#9970ab', '#c2a5cf', '#e7d4e8', '#f7f7f7', '#d9f0d3', '#a6dba0', '#5aae61', '#1b7837', '#00441b'],
	    RdYlBu: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee090', '#ffffbf', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695'],
	    BrBG: ['#543005', '#8c510a', '#bf812d', '#dfc27d', '#f6e8c3', '#f5f5f5', '#c7eae5', '#80cdc1', '#35978f', '#01665e', '#003c30'],
	    RdGy: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#ffffff', '#e0e0e0', '#bababa', '#878787', '#4d4d4d', '#1a1a1a'],
	    PuOr: ['#7f3b08', '#b35806', '#e08214', '#fdb863', '#fee0b6', '#f7f7f7', '#d8daeb', '#b2abd2', '#8073ac', '#542788', '#2d004b'],
	    Set2: ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494', '#b3b3b3'],
	    Accent: ['#7fc97f', '#beaed4', '#fdc086', '#ffff99', '#386cb0', '#f0027f', '#bf5b17', '#666666'],
	    Set1: ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999'],
	    Set3: ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f'],
	    Dark2: ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d', '#666666'],
	    Paired: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99', '#b15928'],
	    Pastel2: ['#b3e2cd', '#fdcdac', '#cbd5e8', '#f4cae4', '#e6f5c9', '#fff2ae', '#f1e2cc', '#cccccc'],
	    Pastel1: ['#fbb4ae', '#b3cde3', '#ccebc5', '#decbe4', '#fed9a6', '#ffffcc', '#e5d8bd', '#fddaec', '#f2f2f2']
	  };
	
	  (function() {
	    var key, results;
	    results = [];
	    for (key in brewer) {
	      results.push(brewer[key.toLowerCase()] = brewer[key]);
	    }
	    return results;
	  })();
	
	
	  /**
	  	X11 color names
	  
	  	http://www.w3.org/TR/css3-color/#svg-color
	   */
	
	  w3cx11 = {
	    aliceblue: '#f0f8ff',
	    antiquewhite: '#faebd7',
	    aqua: '#00ffff',
	    aquamarine: '#7fffd4',
	    azure: '#f0ffff',
	    beige: '#f5f5dc',
	    bisque: '#ffe4c4',
	    black: '#000000',
	    blanchedalmond: '#ffebcd',
	    blue: '#0000ff',
	    blueviolet: '#8a2be2',
	    brown: '#a52a2a',
	    burlywood: '#deb887',
	    cadetblue: '#5f9ea0',
	    chartreuse: '#7fff00',
	    chocolate: '#d2691e',
	    coral: '#ff7f50',
	    cornflower: '#6495ed',
	    cornflowerblue: '#6495ed',
	    cornsilk: '#fff8dc',
	    crimson: '#dc143c',
	    cyan: '#00ffff',
	    darkblue: '#00008b',
	    darkcyan: '#008b8b',
	    darkgoldenrod: '#b8860b',
	    darkgray: '#a9a9a9',
	    darkgreen: '#006400',
	    darkgrey: '#a9a9a9',
	    darkkhaki: '#bdb76b',
	    darkmagenta: '#8b008b',
	    darkolivegreen: '#556b2f',
	    darkorange: '#ff8c00',
	    darkorchid: '#9932cc',
	    darkred: '#8b0000',
	    darksalmon: '#e9967a',
	    darkseagreen: '#8fbc8f',
	    darkslateblue: '#483d8b',
	    darkslategray: '#2f4f4f',
	    darkslategrey: '#2f4f4f',
	    darkturquoise: '#00ced1',
	    darkviolet: '#9400d3',
	    deeppink: '#ff1493',
	    deepskyblue: '#00bfff',
	    dimgray: '#696969',
	    dimgrey: '#696969',
	    dodgerblue: '#1e90ff',
	    firebrick: '#b22222',
	    floralwhite: '#fffaf0',
	    forestgreen: '#228b22',
	    fuchsia: '#ff00ff',
	    gainsboro: '#dcdcdc',
	    ghostwhite: '#f8f8ff',
	    gold: '#ffd700',
	    goldenrod: '#daa520',
	    gray: '#808080',
	    green: '#008000',
	    greenyellow: '#adff2f',
	    grey: '#808080',
	    honeydew: '#f0fff0',
	    hotpink: '#ff69b4',
	    indianred: '#cd5c5c',
	    indigo: '#4b0082',
	    ivory: '#fffff0',
	    khaki: '#f0e68c',
	    laserlemon: '#ffff54',
	    lavender: '#e6e6fa',
	    lavenderblush: '#fff0f5',
	    lawngreen: '#7cfc00',
	    lemonchiffon: '#fffacd',
	    lightblue: '#add8e6',
	    lightcoral: '#f08080',
	    lightcyan: '#e0ffff',
	    lightgoldenrod: '#fafad2',
	    lightgoldenrodyellow: '#fafad2',
	    lightgray: '#d3d3d3',
	    lightgreen: '#90ee90',
	    lightgrey: '#d3d3d3',
	    lightpink: '#ffb6c1',
	    lightsalmon: '#ffa07a',
	    lightseagreen: '#20b2aa',
	    lightskyblue: '#87cefa',
	    lightslategray: '#778899',
	    lightslategrey: '#778899',
	    lightsteelblue: '#b0c4de',
	    lightyellow: '#ffffe0',
	    lime: '#00ff00',
	    limegreen: '#32cd32',
	    linen: '#faf0e6',
	    magenta: '#ff00ff',
	    maroon: '#800000',
	    maroon2: '#7f0000',
	    maroon3: '#b03060',
	    mediumaquamarine: '#66cdaa',
	    mediumblue: '#0000cd',
	    mediumorchid: '#ba55d3',
	    mediumpurple: '#9370db',
	    mediumseagreen: '#3cb371',
	    mediumslateblue: '#7b68ee',
	    mediumspringgreen: '#00fa9a',
	    mediumturquoise: '#48d1cc',
	    mediumvioletred: '#c71585',
	    midnightblue: '#191970',
	    mintcream: '#f5fffa',
	    mistyrose: '#ffe4e1',
	    moccasin: '#ffe4b5',
	    navajowhite: '#ffdead',
	    navy: '#000080',
	    oldlace: '#fdf5e6',
	    olive: '#808000',
	    olivedrab: '#6b8e23',
	    orange: '#ffa500',
	    orangered: '#ff4500',
	    orchid: '#da70d6',
	    palegoldenrod: '#eee8aa',
	    palegreen: '#98fb98',
	    paleturquoise: '#afeeee',
	    palevioletred: '#db7093',
	    papayawhip: '#ffefd5',
	    peachpuff: '#ffdab9',
	    peru: '#cd853f',
	    pink: '#ffc0cb',
	    plum: '#dda0dd',
	    powderblue: '#b0e0e6',
	    purple: '#800080',
	    purple2: '#7f007f',
	    purple3: '#a020f0',
	    rebeccapurple: '#663399',
	    red: '#ff0000',
	    rosybrown: '#bc8f8f',
	    royalblue: '#4169e1',
	    saddlebrown: '#8b4513',
	    salmon: '#fa8072',
	    sandybrown: '#f4a460',
	    seagreen: '#2e8b57',
	    seashell: '#fff5ee',
	    sienna: '#a0522d',
	    silver: '#c0c0c0',
	    skyblue: '#87ceeb',
	    slateblue: '#6a5acd',
	    slategray: '#708090',
	    slategrey: '#708090',
	    snow: '#fffafa',
	    springgreen: '#00ff7f',
	    steelblue: '#4682b4',
	    tan: '#d2b48c',
	    teal: '#008080',
	    thistle: '#d8bfd8',
	    tomato: '#ff6347',
	    turquoise: '#40e0d0',
	    violet: '#ee82ee',
	    wheat: '#f5deb3',
	    white: '#ffffff',
	    whitesmoke: '#f5f5f5',
	    yellow: '#ffff00',
	    yellowgreen: '#9acd32'
	  };
	
	  chroma.colors = colors = w3cx11;
	
	  lab2rgb = function() {
	    var a, args, b, g, l, r, x, y, z;
	    args = unpack(arguments);
	    l = args[0], a = args[1], b = args[2];
	    y = (l + 16) / 116;
	    x = isNaN(a) ? y : y + a / 500;
	    z = isNaN(b) ? y : y - b / 200;
	    y = LAB_CONSTANTS.Yn * lab_xyz(y);
	    x = LAB_CONSTANTS.Xn * lab_xyz(x);
	    z = LAB_CONSTANTS.Zn * lab_xyz(z);
	    r = xyz_rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z);
	    g = xyz_rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z);
	    b = xyz_rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z);
	    return [r, g, b, args.length > 3 ? args[3] : 1];
	  };
	
	  xyz_rgb = function(r) {
	    return 255 * (r <= 0.00304 ? 12.92 * r : 1.055 * pow(r, 1 / 2.4) - 0.055);
	  };
	
	  lab_xyz = function(t) {
	    if (t > LAB_CONSTANTS.t1) {
	      return t * t * t;
	    } else {
	      return LAB_CONSTANTS.t2 * (t - LAB_CONSTANTS.t0);
	    }
	  };
	
	  LAB_CONSTANTS = {
	    Kn: 18,
	    Xn: 0.950470,
	    Yn: 1,
	    Zn: 1.088830,
	    t0: 0.137931034,
	    t1: 0.206896552,
	    t2: 0.12841855,
	    t3: 0.008856452
	  };
	
	  rgb2lab = function() {
	    var b, g, r, ref, ref1, x, y, z;
	    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
	    ref1 = rgb2xyz(r, g, b), x = ref1[0], y = ref1[1], z = ref1[2];
	    return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
	  };
	
	  rgb_xyz = function(r) {
	    if ((r /= 255) <= 0.04045) {
	      return r / 12.92;
	    } else {
	      return pow((r + 0.055) / 1.055, 2.4);
	    }
	  };
	
	  xyz_lab = function(t) {
	    if (t > LAB_CONSTANTS.t3) {
	      return pow(t, 1 / 3);
	    } else {
	      return t / LAB_CONSTANTS.t2 + LAB_CONSTANTS.t0;
	    }
	  };
	
	  rgb2xyz = function() {
	    var b, g, r, ref, x, y, z;
	    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
	    r = rgb_xyz(r);
	    g = rgb_xyz(g);
	    b = rgb_xyz(b);
	    x = xyz_lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / LAB_CONSTANTS.Xn);
	    y = xyz_lab((0.2126729 * r + 0.7151522 * g + 0.0721750 * b) / LAB_CONSTANTS.Yn);
	    z = xyz_lab((0.0193339 * r + 0.1191920 * g + 0.9503041 * b) / LAB_CONSTANTS.Zn);
	    return [x, y, z];
	  };
	
	  chroma.lab = function() {
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Color, slice.call(arguments).concat(['lab']), function(){});
	  };
	
	  _input.lab = lab2rgb;
	
	  Color.prototype.lab = function() {
	    return rgb2lab(this._rgb);
	  };
	
	  bezier = function(colors) {
	    var I, I0, I1, c, lab0, lab1, lab2, lab3, ref, ref1, ref2;
	    colors = (function() {
	      var len, o, results;
	      results = [];
	      for (o = 0, len = colors.length; o < len; o++) {
	        c = colors[o];
	        results.push(chroma(c));
	      }
	      return results;
	    })();
	    if (colors.length === 2) {
	      ref = (function() {
	        var len, o, results;
	        results = [];
	        for (o = 0, len = colors.length; o < len; o++) {
	          c = colors[o];
	          results.push(c.lab());
	        }
	        return results;
	      })(), lab0 = ref[0], lab1 = ref[1];
	      I = function(t) {
	        var i, lab;
	        lab = (function() {
	          var o, results;
	          results = [];
	          for (i = o = 0; o <= 2; i = ++o) {
	            results.push(lab0[i] + t * (lab1[i] - lab0[i]));
	          }
	          return results;
	        })();
	        return chroma.lab.apply(chroma, lab);
	      };
	    } else if (colors.length === 3) {
	      ref1 = (function() {
	        var len, o, results;
	        results = [];
	        for (o = 0, len = colors.length; o < len; o++) {
	          c = colors[o];
	          results.push(c.lab());
	        }
	        return results;
	      })(), lab0 = ref1[0], lab1 = ref1[1], lab2 = ref1[2];
	      I = function(t) {
	        var i, lab;
	        lab = (function() {
	          var o, results;
	          results = [];
	          for (i = o = 0; o <= 2; i = ++o) {
	            results.push((1 - t) * (1 - t) * lab0[i] + 2 * (1 - t) * t * lab1[i] + t * t * lab2[i]);
	          }
	          return results;
	        })();
	        return chroma.lab.apply(chroma, lab);
	      };
	    } else if (colors.length === 4) {
	      ref2 = (function() {
	        var len, o, results;
	        results = [];
	        for (o = 0, len = colors.length; o < len; o++) {
	          c = colors[o];
	          results.push(c.lab());
	        }
	        return results;
	      })(), lab0 = ref2[0], lab1 = ref2[1], lab2 = ref2[2], lab3 = ref2[3];
	      I = function(t) {
	        var i, lab;
	        lab = (function() {
	          var o, results;
	          results = [];
	          for (i = o = 0; o <= 2; i = ++o) {
	            results.push((1 - t) * (1 - t) * (1 - t) * lab0[i] + 3 * (1 - t) * (1 - t) * t * lab1[i] + 3 * (1 - t) * t * t * lab2[i] + t * t * t * lab3[i]);
	          }
	          return results;
	        })();
	        return chroma.lab.apply(chroma, lab);
	      };
	    } else if (colors.length === 5) {
	      I0 = bezier(colors.slice(0, 3));
	      I1 = bezier(colors.slice(2, 5));
	      I = function(t) {
	        if (t < 0.5) {
	          return I0(t * 2);
	        } else {
	          return I1((t - 0.5) * 2);
	        }
	      };
	    }
	    return I;
	  };
	
	  chroma.bezier = function(colors) {
	    var f;
	    f = bezier(colors);
	    f.scale = function() {
	      return chroma.scale(f);
	    };
	    return f;
	  };
	
	
	  /*
	      chroma.js
	  
	      Copyright (c) 2011-2013, Gregor Aisch
	      All rights reserved.
	  
	      Redistribution and use in source and binary forms, with or without
	      modification, are permitted provided that the following conditions are met:
	  
	      * Redistributions of source code must retain the above copyright notice, this
	        list of conditions and the following disclaimer.
	  
	      * Redistributions in binary form must reproduce the above copyright notice,
	        this list of conditions and the following disclaimer in the documentation
	        and/or other materials provided with the distribution.
	  
	      * The name Gregor Aisch may not be used to endorse or promote products
	        derived from this software without specific prior written permission.
	  
	      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	      AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	      IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
	      DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
	      INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
	      BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	      DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	      OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
	      NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
	      EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	  
	      @source: https://github.com/gka/chroma.js
	   */
	
	  chroma.cubehelix = function(start, rotations, hue, gamma, lightness) {
	    var dh, dl, f;
	    if (start == null) {
	      start = 300;
	    }
	    if (rotations == null) {
	      rotations = -1.5;
	    }
	    if (hue == null) {
	      hue = 1;
	    }
	    if (gamma == null) {
	      gamma = 1;
	    }
	    if (lightness == null) {
	      lightness = [0, 1];
	    }
	    dh = 0;
	    if (type(lightness) === 'array') {
	      dl = lightness[1] - lightness[0];
	    } else {
	      dl = 0;
	      lightness = [lightness, lightness];
	    }
	    f = function(fract) {
	      var a, amp, b, cos_a, g, h, l, r, sin_a;
	      a = TWOPI * ((start + 120) / 360 + rotations * fract);
	      l = pow(lightness[0] + dl * fract, gamma);
	      h = dh !== 0 ? hue[0] + fract * dh : hue;
	      amp = h * l * (1 - l) / 2;
	      cos_a = cos(a);
	      sin_a = sin(a);
	      r = l + amp * (-0.14861 * cos_a + 1.78277 * sin_a);
	      g = l + amp * (-0.29227 * cos_a - 0.90649 * sin_a);
	      b = l + amp * (+1.97294 * cos_a);
	      return chroma(clip_rgb([r * 255, g * 255, b * 255]));
	    };
	    f.start = function(s) {
	      if (s == null) {
	        return start;
	      }
	      start = s;
	      return f;
	    };
	    f.rotations = function(r) {
	      if (r == null) {
	        return rotations;
	      }
	      rotations = r;
	      return f;
	    };
	    f.gamma = function(g) {
	      if (g == null) {
	        return gamma;
	      }
	      gamma = g;
	      return f;
	    };
	    f.hue = function(h) {
	      if (h == null) {
	        return hue;
	      }
	      hue = h;
	      if (type(hue) === 'array') {
	        dh = hue[1] - hue[0];
	        if (dh === 0) {
	          hue = hue[1];
	        }
	      } else {
	        dh = 0;
	      }
	      return f;
	    };
	    f.lightness = function(h) {
	      if (h == null) {
	        return lightness;
	      }
	      if (type(h) === 'array') {
	        lightness = h;
	        dl = h[1] - h[0];
	      } else {
	        lightness = [h, h];
	        dl = 0;
	      }
	      return f;
	    };
	    f.scale = function() {
	      return chroma.scale(f);
	    };
	    f.hue(hue);
	    return f;
	  };
	
	  chroma.random = function() {
	    var code, digits, i, o;
	    digits = '0123456789abcdef';
	    code = '#';
	    for (i = o = 0; o < 6; i = ++o) {
	      code += digits.charAt(floor(Math.random() * 16));
	    }
	    return new Color(code);
	  };
	
	  _interpolators = [];
	
	  interpolate = function(col1, col2, f, m) {
	    var interpol, len, o, res;
	    if (f == null) {
	      f = 0.5;
	    }
	    if (m == null) {
	      m = 'rgb';
	    }
	
	    /*
	    interpolates between colors
	    f = 0 --> me
	    f = 1 --> col
	     */
	    if (type(col1) !== 'object') {
	      col1 = chroma(col1);
	    }
	    if (type(col2) !== 'object') {
	      col2 = chroma(col2);
	    }
	    for (o = 0, len = _interpolators.length; o < len; o++) {
	      interpol = _interpolators[o];
	      if (m === interpol[0]) {
	        res = interpol[1](col1, col2, f, m);
	        break;
	      }
	    }
	    if (res == null) {
	      throw "color mode " + m + " is not supported";
	    }
	    return res.alpha(col1.alpha() + f * (col2.alpha() - col1.alpha()));
	  };
	
	  chroma.interpolate = interpolate;
	
	  Color.prototype.interpolate = function(col2, f, m) {
	    return interpolate(this, col2, f, m);
	  };
	
	  chroma.mix = interpolate;
	
	  Color.prototype.mix = Color.prototype.interpolate;
	
	  _input.rgb = function() {
	    var k, ref, results, v;
	    ref = unpack(arguments);
	    results = [];
	    for (k in ref) {
	      v = ref[k];
	      results.push(v);
	    }
	    return results;
	  };
	
	  chroma.rgb = function() {
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Color, slice.call(arguments).concat(['rgb']), function(){});
	  };
	
	  Color.prototype.rgb = function(round) {
	    if (round == null) {
	      round = true;
	    }
	    if (round) {
	      return this._rgb.map(Math.round).slice(0, 3);
	    } else {
	      return this._rgb.slice(0, 3);
	    }
	  };
	
	  Color.prototype.rgba = function(round) {
	    if (round == null) {
	      round = true;
	    }
	    if (!round) {
	      return this._rgb.slice(0);
	    }
	    return [Math.round(this._rgb[0]), Math.round(this._rgb[1]), Math.round(this._rgb[2]), this._rgb[3]];
	  };
	
	  _guess_formats.push({
	    p: 3,
	    test: function(n) {
	      var a;
	      a = unpack(arguments);
	      if (type(a) === 'array' && a.length === 3) {
	        return 'rgb';
	      }
	      if (a.length === 4 && type(a[3]) === "number" && a[3] >= 0 && a[3] <= 1) {
	        return 'rgb';
	      }
	    }
	  });
	
	  _input.lrgb = _input.rgb;
	
	  interpolate_lrgb = function(col1, col2, f, m) {
	    var xyz0, xyz1;
	    xyz0 = col1._rgb;
	    xyz1 = col2._rgb;
	    return new Color(sqrt(pow(xyz0[0], 2) * (1 - f) + pow(xyz1[0], 2) * f), sqrt(pow(xyz0[1], 2) * (1 - f) + pow(xyz1[1], 2) * f), sqrt(pow(xyz0[2], 2) * (1 - f) + pow(xyz1[2], 2) * f), m);
	  };
	
	  _average_lrgb = function(colors) {
	    var col, f, len, o, rgb, xyz;
	    f = 1 / colors.length;
	    xyz = [0, 0, 0, 0];
	    for (o = 0, len = colors.length; o < len; o++) {
	      col = colors[o];
	      rgb = col._rgb;
	      xyz[0] += pow(rgb[0], 2) * f;
	      xyz[1] += pow(rgb[1], 2) * f;
	      xyz[2] += pow(rgb[2], 2) * f;
	      xyz[3] += rgb[3] * f;
	    }
	    xyz[0] = sqrt(xyz[0]);
	    xyz[1] = sqrt(xyz[1]);
	    xyz[2] = sqrt(xyz[2]);
	    return new Color(xyz);
	  };
	
	  _interpolators.push(['lrgb', interpolate_lrgb]);
	
	  chroma.average = function(colors, mode) {
	    var A, alpha, c, cnt, dx, dy, first, i, l, len, o, xyz, xyz2;
	    if (mode == null) {
	      mode = 'rgb';
	    }
	    l = colors.length;
	    colors = colors.map(function(c) {
	      return chroma(c);
	    });
	    first = colors.splice(0, 1)[0];
	    if (mode === 'lrgb') {
	      return _average_lrgb(colors);
	    }
	    xyz = first.get(mode);
	    cnt = [];
	    dx = 0;
	    dy = 0;
	    for (i in xyz) {
	      xyz[i] = xyz[i] || 0;
	      cnt.push(isNaN(xyz[i]) ? 0 : 1);
	      if (mode.charAt(i) === 'h' && !isNaN(xyz[i])) {
	        A = xyz[i] / 180 * PI;
	        dx += cos(A);
	        dy += sin(A);
	      }
	    }
	    alpha = first.alpha();
	    for (o = 0, len = colors.length; o < len; o++) {
	      c = colors[o];
	      xyz2 = c.get(mode);
	      alpha += c.alpha();
	      for (i in xyz) {
	        if (!isNaN(xyz2[i])) {
	          cnt[i] += 1;
	          if (mode.charAt(i) === 'h') {
	            A = xyz2[i] / 180 * PI;
	            dx += cos(A);
	            dy += sin(A);
	          } else {
	            xyz[i] += xyz2[i];
	          }
	        }
	      }
	    }
	    for (i in xyz) {
	      if (mode.charAt(i) === 'h') {
	        A = atan2(dy / cnt[i], dx / cnt[i]) / PI * 180;
	        while (A < 0) {
	          A += 360;
	        }
	        while (A >= 360) {
	          A -= 360;
	        }
	        xyz[i] = A;
	      } else {
	        xyz[i] = xyz[i] / cnt[i];
	      }
	    }
	    return chroma(xyz, mode).alpha(alpha / l);
	  };
	
	  hex2rgb = function(hex) {
	    var a, b, g, r, rgb, u;
	    if (hex.match(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) {
	      if (hex.length === 4 || hex.length === 7) {
	        hex = hex.substr(1);
	      }
	      if (hex.length === 3) {
	        hex = hex.split("");
	        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	      }
	      u = parseInt(hex, 16);
	      r = u >> 16;
	      g = u >> 8 & 0xFF;
	      b = u & 0xFF;
	      return [r, g, b, 1];
	    }
	    if (hex.match(/^#?([A-Fa-f0-9]{8})$/)) {
	      if (hex.length === 9) {
	        hex = hex.substr(1);
	      }
	      u = parseInt(hex, 16);
	      r = u >> 24 & 0xFF;
	      g = u >> 16 & 0xFF;
	      b = u >> 8 & 0xFF;
	      a = round((u & 0xFF) / 0xFF * 100) / 100;
	      return [r, g, b, a];
	    }
	    if ((_input.css != null) && (rgb = _input.css(hex))) {
	      return rgb;
	    }
	    throw "unknown color: " + hex;
	  };
	
	  rgb2hex = function(channels, mode) {
	    var a, b, g, hxa, r, str, u;
	    if (mode == null) {
	      mode = 'rgb';
	    }
	    r = channels[0], g = channels[1], b = channels[2], a = channels[3];
	    r = Math.round(r);
	    g = Math.round(g);
	    b = Math.round(b);
	    u = r << 16 | g << 8 | b;
	    str = "000000" + u.toString(16);
	    str = str.substr(str.length - 6);
	    hxa = '0' + round(a * 255).toString(16);
	    hxa = hxa.substr(hxa.length - 2);
	    return "#" + (function() {
	      switch (mode.toLowerCase()) {
	        case 'rgba':
	          return str + hxa;
	        case 'argb':
	          return hxa + str;
	        default:
	          return str;
	      }
	    })();
	  };
	
	  _input.hex = function(h) {
	    return hex2rgb(h);
	  };
	
	  chroma.hex = function() {
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Color, slice.call(arguments).concat(['hex']), function(){});
	  };
	
	  Color.prototype.hex = function(mode) {
	    if (mode == null) {
	      mode = 'rgb';
	    }
	    return rgb2hex(this._rgb, mode);
	  };
	
	  _guess_formats.push({
	    p: 4,
	    test: function(n) {
	      if (arguments.length === 1 && type(n) === "string") {
	        return 'hex';
	      }
	    }
	  });
	
	  hsl2rgb = function() {
	    var args, b, c, g, h, i, l, o, r, ref, s, t1, t2, t3;
	    args = unpack(arguments);
	    h = args[0], s = args[1], l = args[2];
	    if (s === 0) {
	      r = g = b = l * 255;
	    } else {
	      t3 = [0, 0, 0];
	      c = [0, 0, 0];
	      t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
	      t1 = 2 * l - t2;
	      h /= 360;
	      t3[0] = h + 1 / 3;
	      t3[1] = h;
	      t3[2] = h - 1 / 3;
	      for (i = o = 0; o <= 2; i = ++o) {
	        if (t3[i] < 0) {
	          t3[i] += 1;
	        }
	        if (t3[i] > 1) {
	          t3[i] -= 1;
	        }
	        if (6 * t3[i] < 1) {
	          c[i] = t1 + (t2 - t1) * 6 * t3[i];
	        } else if (2 * t3[i] < 1) {
	          c[i] = t2;
	        } else if (3 * t3[i] < 2) {
	          c[i] = t1 + (t2 - t1) * ((2 / 3) - t3[i]) * 6;
	        } else {
	          c[i] = t1;
	        }
	      }
	      ref = [round(c[0] * 255), round(c[1] * 255), round(c[2] * 255)], r = ref[0], g = ref[1], b = ref[2];
	    }
	    if (args.length > 3) {
	      return [r, g, b, args[3]];
	    } else {
	      return [r, g, b];
	    }
	  };
	
	  rgb2hsl = function(r, g, b) {
	    var h, l, min, ref, s;
	    if (r !== void 0 && r.length >= 3) {
	      ref = r, r = ref[0], g = ref[1], b = ref[2];
	    }
	    r /= 255;
	    g /= 255;
	    b /= 255;
	    min = Math.min(r, g, b);
	    max = Math.max(r, g, b);
	    l = (max + min) / 2;
	    if (max === min) {
	      s = 0;
	      h = Number.NaN;
	    } else {
	      s = l < 0.5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);
	    }
	    if (r === max) {
	      h = (g - b) / (max - min);
	    } else if (g === max) {
	      h = 2 + (b - r) / (max - min);
	    } else if (b === max) {
	      h = 4 + (r - g) / (max - min);
	    }
	    h *= 60;
	    if (h < 0) {
	      h += 360;
	    }
	    return [h, s, l];
	  };
	
	  chroma.hsl = function() {
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Color, slice.call(arguments).concat(['hsl']), function(){});
	  };
	
	  _input.hsl = hsl2rgb;
	
	  Color.prototype.hsl = function() {
	    return rgb2hsl(this._rgb);
	  };
	
	  hsv2rgb = function() {
	    var args, b, f, g, h, i, p, q, r, ref, ref1, ref2, ref3, ref4, ref5, s, t, v;
	    args = unpack(arguments);
	    h = args[0], s = args[1], v = args[2];
	    v *= 255;
	    if (s === 0) {
	      r = g = b = v;
	    } else {
	      if (h === 360) {
	        h = 0;
	      }
	      if (h > 360) {
	        h -= 360;
	      }
	      if (h < 0) {
	        h += 360;
	      }
	      h /= 60;
	      i = floor(h);
	      f = h - i;
	      p = v * (1 - s);
	      q = v * (1 - s * f);
	      t = v * (1 - s * (1 - f));
	      switch (i) {
	        case 0:
	          ref = [v, t, p], r = ref[0], g = ref[1], b = ref[2];
	          break;
	        case 1:
	          ref1 = [q, v, p], r = ref1[0], g = ref1[1], b = ref1[2];
	          break;
	        case 2:
	          ref2 = [p, v, t], r = ref2[0], g = ref2[1], b = ref2[2];
	          break;
	        case 3:
	          ref3 = [p, q, v], r = ref3[0], g = ref3[1], b = ref3[2];
	          break;
	        case 4:
	          ref4 = [t, p, v], r = ref4[0], g = ref4[1], b = ref4[2];
	          break;
	        case 5:
	          ref5 = [v, p, q], r = ref5[0], g = ref5[1], b = ref5[2];
	      }
	    }
	    return [r, g, b, args.length > 3 ? args[3] : 1];
	  };
	
	  rgb2hsv = function() {
	    var b, delta, g, h, min, r, ref, s, v;
	    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
	    min = Math.min(r, g, b);
	    max = Math.max(r, g, b);
	    delta = max - min;
	    v = max / 255.0;
	    if (max === 0) {
	      h = Number.NaN;
	      s = 0;
	    } else {
	      s = delta / max;
	      if (r === max) {
	        h = (g - b) / delta;
	      }
	      if (g === max) {
	        h = 2 + (b - r) / delta;
	      }
	      if (b === max) {
	        h = 4 + (r - g) / delta;
	      }
	      h *= 60;
	      if (h < 0) {
	        h += 360;
	      }
	    }
	    return [h, s, v];
	  };
	
	  chroma.hsv = function() {
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Color, slice.call(arguments).concat(['hsv']), function(){});
	  };
	
	  _input.hsv = hsv2rgb;
	
	  Color.prototype.hsv = function() {
	    return rgb2hsv(this._rgb);
	  };
	
	  num2rgb = function(num) {
	    var b, g, r;
	    if (type(num) === "number" && num >= 0 && num <= 0xFFFFFF) {
	      r = num >> 16;
	      g = (num >> 8) & 0xFF;
	      b = num & 0xFF;
	      return [r, g, b, 1];
	    }
	    console.warn("unknown num color: " + num);
	    return [0, 0, 0, 1];
	  };
	
	  rgb2num = function() {
	    var b, g, r, ref;
	    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
	    return (r << 16) + (g << 8) + b;
	  };
	
	  chroma.num = function(num) {
	    return new Color(num, 'num');
	  };
	
	  Color.prototype.num = function(mode) {
	    if (mode == null) {
	      mode = 'rgb';
	    }
	    return rgb2num(this._rgb, mode);
	  };
	
	  _input.num = num2rgb;
	
	  _guess_formats.push({
	    p: 1,
	    test: function(n) {
	      if (arguments.length === 1 && type(n) === "number" && n >= 0 && n <= 0xFFFFFF) {
	        return 'num';
	      }
	    }
	  });
	
	  hcg2rgb = function() {
	    var _c, _g, args, b, c, f, g, h, i, p, q, r, ref, ref1, ref2, ref3, ref4, ref5, t, v;
	    args = unpack(arguments);
	    h = args[0], c = args[1], _g = args[2];
	    c = c / 100;
	    g = g / 100 * 255;
	    _c = c * 255;
	    if (c === 0) {
	      r = g = b = _g;
	    } else {
	      if (h === 360) {
	        h = 0;
	      }
	      if (h > 360) {
	        h -= 360;
	      }
	      if (h < 0) {
	        h += 360;
	      }
	      h /= 60;
	      i = floor(h);
	      f = h - i;
	      p = _g * (1 - c);
	      q = p + _c * (1 - f);
	      t = p + _c * f;
	      v = p + _c;
	      switch (i) {
	        case 0:
	          ref = [v, t, p], r = ref[0], g = ref[1], b = ref[2];
	          break;
	        case 1:
	          ref1 = [q, v, p], r = ref1[0], g = ref1[1], b = ref1[2];
	          break;
	        case 2:
	          ref2 = [p, v, t], r = ref2[0], g = ref2[1], b = ref2[2];
	          break;
	        case 3:
	          ref3 = [p, q, v], r = ref3[0], g = ref3[1], b = ref3[2];
	          break;
	        case 4:
	          ref4 = [t, p, v], r = ref4[0], g = ref4[1], b = ref4[2];
	          break;
	        case 5:
	          ref5 = [v, p, q], r = ref5[0], g = ref5[1], b = ref5[2];
	      }
	    }
	    return [r, g, b, args.length > 3 ? args[3] : 1];
	  };
	
	  rgb2hcg = function() {
	    var _g, b, c, delta, g, h, min, r, ref;
	    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
	    min = Math.min(r, g, b);
	    max = Math.max(r, g, b);
	    delta = max - min;
	    c = delta * 100 / 255;
	    _g = min / (255 - delta) * 100;
	    if (delta === 0) {
	      h = Number.NaN;
	    } else {
	      if (r === max) {
	        h = (g - b) / delta;
	      }
	      if (g === max) {
	        h = 2 + (b - r) / delta;
	      }
	      if (b === max) {
	        h = 4 + (r - g) / delta;
	      }
	      h *= 60;
	      if (h < 0) {
	        h += 360;
	      }
	    }
	    return [h, c, _g];
	  };
	
	  chroma.hcg = function() {
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Color, slice.call(arguments).concat(['hcg']), function(){});
	  };
	
	  _input.hcg = hcg2rgb;
	
	  Color.prototype.hcg = function() {
	    return rgb2hcg(this._rgb);
	  };
	
	  css2rgb = function(css) {
	    var aa, ab, hsl, i, m, o, rgb, w;
	    css = css.toLowerCase();
	    if ((chroma.colors != null) && chroma.colors[css]) {
	      return hex2rgb(chroma.colors[css]);
	    }
	    if (m = css.match(/rgb\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*\)/)) {
	      rgb = m.slice(1, 4);
	      for (i = o = 0; o <= 2; i = ++o) {
	        rgb[i] = +rgb[i];
	      }
	      rgb[3] = 1;
	    } else if (m = css.match(/rgba\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*,\s*([01]|[01]?\.\d+)\)/)) {
	      rgb = m.slice(1, 5);
	      for (i = w = 0; w <= 3; i = ++w) {
	        rgb[i] = +rgb[i];
	      }
	    } else if (m = css.match(/rgb\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) {
	      rgb = m.slice(1, 4);
	      for (i = aa = 0; aa <= 2; i = ++aa) {
	        rgb[i] = round(rgb[i] * 2.55);
	      }
	      rgb[3] = 1;
	    } else if (m = css.match(/rgba\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) {
	      rgb = m.slice(1, 5);
	      for (i = ab = 0; ab <= 2; i = ++ab) {
	        rgb[i] = round(rgb[i] * 2.55);
	      }
	      rgb[3] = +rgb[3];
	    } else if (m = css.match(/hsl\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) {
	      hsl = m.slice(1, 4);
	      hsl[1] *= 0.01;
	      hsl[2] *= 0.01;
	      rgb = hsl2rgb(hsl);
	      rgb[3] = 1;
	    } else if (m = css.match(/hsla\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) {
	      hsl = m.slice(1, 4);
	      hsl[1] *= 0.01;
	      hsl[2] *= 0.01;
	      rgb = hsl2rgb(hsl);
	      rgb[3] = +m[4];
	    }
	    return rgb;
	  };
	
	  rgb2css = function(rgba) {
	    var mode;
	    mode = rgba[3] < 1 ? 'rgba' : 'rgb';
	    if (mode === 'rgb') {
	      return mode + '(' + rgba.slice(0, 3).map(round).join(',') + ')';
	    } else if (mode === 'rgba') {
	      return mode + '(' + rgba.slice(0, 3).map(round).join(',') + ',' + rgba[3] + ')';
	    } else {
	
	    }
	  };
	
	  rnd = function(a) {
	    return round(a * 100) / 100;
	  };
	
	  hsl2css = function(hsl, alpha) {
	    var mode;
	    mode = alpha < 1 ? 'hsla' : 'hsl';
	    hsl[0] = rnd(hsl[0] || 0);
	    hsl[1] = rnd(hsl[1] * 100) + '%';
	    hsl[2] = rnd(hsl[2] * 100) + '%';
	    if (mode === 'hsla') {
	      hsl[3] = alpha;
	    }
	    return mode + '(' + hsl.join(',') + ')';
	  };
	
	  _input.css = function(h) {
	    return css2rgb(h);
	  };
	
	  chroma.css = function() {
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Color, slice.call(arguments).concat(['css']), function(){});
	  };
	
	  Color.prototype.css = function(mode) {
	    if (mode == null) {
	      mode = 'rgb';
	    }
	    if (mode.slice(0, 3) === 'rgb') {
	      return rgb2css(this._rgb);
	    } else if (mode.slice(0, 3) === 'hsl') {
	      return hsl2css(this.hsl(), this.alpha());
	    }
	  };
	
	  _input.named = function(name) {
	    return hex2rgb(w3cx11[name]);
	  };
	
	  _guess_formats.push({
	    p: 5,
	    test: function(n) {
	      if (arguments.length === 1 && (w3cx11[n] != null)) {
	        return 'named';
	      }
	    }
	  });
	
	  Color.prototype.name = function(n) {
	    var h, k;
	    if (arguments.length) {
	      if (w3cx11[n]) {
	        this._rgb = hex2rgb(w3cx11[n]);
	      }
	      this._rgb[3] = 1;
	      this;
	    }
	    h = this.hex();
	    for (k in w3cx11) {
	      if (h === w3cx11[k]) {
	        return k;
	      }
	    }
	    return h;
	  };
	
	  lch2lab = function() {
	
	    /*
	    Convert from a qualitative parameter h and a quantitative parameter l to a 24-bit pixel.
	    These formulas were invented by David Dalrymple to obtain maximum contrast without going
	    out of gamut if the parameters are in the range 0-1.
	    
	    A saturation multiplier was added by Gregor Aisch
	     */
	    var c, h, l, ref;
	    ref = unpack(arguments), l = ref[0], c = ref[1], h = ref[2];
	    h = h * DEG2RAD;
	    return [l, cos(h) * c, sin(h) * c];
	  };
	
	  lch2rgb = function() {
	    var L, a, args, b, c, g, h, l, r, ref, ref1;
	    args = unpack(arguments);
	    l = args[0], c = args[1], h = args[2];
	    ref = lch2lab(l, c, h), L = ref[0], a = ref[1], b = ref[2];
	    ref1 = lab2rgb(L, a, b), r = ref1[0], g = ref1[1], b = ref1[2];
	    return [r, g, b, args.length > 3 ? args[3] : 1];
	  };
	
	  lab2lch = function() {
	    var a, b, c, h, l, ref;
	    ref = unpack(arguments), l = ref[0], a = ref[1], b = ref[2];
	    c = sqrt(a * a + b * b);
	    h = (atan2(b, a) * RAD2DEG + 360) % 360;
	    if (round(c * 10000) === 0) {
	      h = Number.NaN;
	    }
	    return [l, c, h];
	  };
	
	  rgb2lch = function() {
	    var a, b, g, l, r, ref, ref1;
	    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
	    ref1 = rgb2lab(r, g, b), l = ref1[0], a = ref1[1], b = ref1[2];
	    return lab2lch(l, a, b);
	  };
	
	  chroma.lch = function() {
	    var args;
	    args = unpack(arguments);
	    return new Color(args, 'lch');
	  };
	
	  chroma.hcl = function() {
	    var args;
	    args = unpack(arguments);
	    return new Color(args, 'hcl');
	  };
	
	  _input.lch = lch2rgb;
	
	  _input.hcl = function() {
	    var c, h, l, ref;
	    ref = unpack(arguments), h = ref[0], c = ref[1], l = ref[2];
	    return lch2rgb([l, c, h]);
	  };
	
	  Color.prototype.lch = function() {
	    return rgb2lch(this._rgb);
	  };
	
	  Color.prototype.hcl = function() {
	    return rgb2lch(this._rgb).reverse();
	  };
	
	  rgb2cmyk = function(mode) {
	    var b, c, f, g, k, m, r, ref, y;
	    if (mode == null) {
	      mode = 'rgb';
	    }
	    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
	    r = r / 255;
	    g = g / 255;
	    b = b / 255;
	    k = 1 - Math.max(r, Math.max(g, b));
	    f = k < 1 ? 1 / (1 - k) : 0;
	    c = (1 - r - k) * f;
	    m = (1 - g - k) * f;
	    y = (1 - b - k) * f;
	    return [c, m, y, k];
	  };
	
	  cmyk2rgb = function() {
	    var alpha, args, b, c, g, k, m, r, y;
	    args = unpack(arguments);
	    c = args[0], m = args[1], y = args[2], k = args[3];
	    alpha = args.length > 4 ? args[4] : 1;
	    if (k === 1) {
	      return [0, 0, 0, alpha];
	    }
	    r = c >= 1 ? 0 : 255 * (1 - c) * (1 - k);
	    g = m >= 1 ? 0 : 255 * (1 - m) * (1 - k);
	    b = y >= 1 ? 0 : 255 * (1 - y) * (1 - k);
	    return [r, g, b, alpha];
	  };
	
	  _input.cmyk = function() {
	    return cmyk2rgb(unpack(arguments));
	  };
	
	  chroma.cmyk = function() {
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Color, slice.call(arguments).concat(['cmyk']), function(){});
	  };
	
	  Color.prototype.cmyk = function() {
	    return rgb2cmyk(this._rgb);
	  };
	
	  _input.gl = function() {
	    var i, k, o, rgb, v;
	    rgb = (function() {
	      var ref, results;
	      ref = unpack(arguments);
	      results = [];
	      for (k in ref) {
	        v = ref[k];
	        results.push(v);
	      }
	      return results;
	    }).apply(this, arguments);
	    for (i = o = 0; o <= 2; i = ++o) {
	      rgb[i] *= 255;
	    }
	    return rgb;
	  };
	
	  chroma.gl = function() {
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Color, slice.call(arguments).concat(['gl']), function(){});
	  };
	
	  Color.prototype.gl = function() {
	    var rgb;
	    rgb = this._rgb;
	    return [rgb[0] / 255, rgb[1] / 255, rgb[2] / 255, rgb[3]];
	  };
	
	  rgb2luminance = function(r, g, b) {
	    var ref;
	    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
	    r = luminance_x(r);
	    g = luminance_x(g);
	    b = luminance_x(b);
	    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
	  };
	
	  luminance_x = function(x) {
	    x /= 255;
	    if (x <= 0.03928) {
	      return x / 12.92;
	    } else {
	      return pow((x + 0.055) / 1.055, 2.4);
	    }
	  };
	
	  interpolate_rgb = function(col1, col2, f, m) {
	    var xyz0, xyz1;
	    xyz0 = col1._rgb;
	    xyz1 = col2._rgb;
	    return new Color(xyz0[0] + f * (xyz1[0] - xyz0[0]), xyz0[1] + f * (xyz1[1] - xyz0[1]), xyz0[2] + f * (xyz1[2] - xyz0[2]), m);
	  };
	
	  _interpolators.push(['rgb', interpolate_rgb]);
	
	  Color.prototype.luminance = function(lum, mode) {
	    var cur_lum, eps, max_iter, rgba, test;
	    if (mode == null) {
	      mode = 'rgb';
	    }
	    if (!arguments.length) {
	      return rgb2luminance(this._rgb);
	    }
	    rgba = this._rgb;
	    if (lum === 0) {
	      rgba = [0, 0, 0, this._rgb[3]];
	    } else if (lum === 1) {
	      rgba = [255, 255, 255, this[3]];
	    } else {
	      cur_lum = rgb2luminance(this._rgb);
	      eps = 1e-7;
	      max_iter = 20;
	      test = function(l, h) {
	        var lm, m;
	        m = l.interpolate(h, 0.5, mode);
	        lm = m.luminance();
	        if (Math.abs(lum - lm) < eps || !max_iter--) {
	          return m;
	        }
	        if (lm > lum) {
	          return test(l, m);
	        }
	        return test(m, h);
	      };
	      if (cur_lum > lum) {
	        rgba = test(chroma('black'), this).rgba();
	      } else {
	        rgba = test(this, chroma('white')).rgba();
	      }
	    }
	    return chroma(rgba).alpha(this.alpha());
	  };
	
	  temperature2rgb = function(kelvin) {
	    var b, g, r, temp;
	    temp = kelvin / 100;
	    if (temp < 66) {
	      r = 255;
	      g = -155.25485562709179 - 0.44596950469579133 * (g = temp - 2) + 104.49216199393888 * log(g);
	      b = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = temp - 10) + 115.67994401066147 * log(b);
	    } else {
	      r = 351.97690566805693 + 0.114206453784165 * (r = temp - 55) - 40.25366309332127 * log(r);
	      g = 325.4494125711974 + 0.07943456536662342 * (g = temp - 50) - 28.0852963507957 * log(g);
	      b = 255;
	    }
	    return [r, g, b];
	  };
	
	  rgb2temperature = function() {
	    var b, eps, g, maxTemp, minTemp, r, ref, rgb, temp;
	    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
	    minTemp = 1000;
	    maxTemp = 40000;
	    eps = 0.4;
	    while (maxTemp - minTemp > eps) {
	      temp = (maxTemp + minTemp) * 0.5;
	      rgb = temperature2rgb(temp);
	      if ((rgb[2] / rgb[0]) >= (b / r)) {
	        maxTemp = temp;
	      } else {
	        minTemp = temp;
	      }
	    }
	    return round(temp);
	  };
	
	  chroma.temperature = chroma.kelvin = function() {
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Color, slice.call(arguments).concat(['temperature']), function(){});
	  };
	
	  _input.temperature = _input.kelvin = _input.K = temperature2rgb;
	
	  Color.prototype.temperature = function() {
	    return rgb2temperature(this._rgb);
	  };
	
	  Color.prototype.kelvin = Color.prototype.temperature;
	
	  chroma.contrast = function(a, b) {
	    var l1, l2, ref, ref1;
	    if ((ref = type(a)) === 'string' || ref === 'number') {
	      a = new Color(a);
	    }
	    if ((ref1 = type(b)) === 'string' || ref1 === 'number') {
	      b = new Color(b);
	    }
	    l1 = a.luminance();
	    l2 = b.luminance();
	    if (l1 > l2) {
	      return (l1 + 0.05) / (l2 + 0.05);
	    } else {
	      return (l2 + 0.05) / (l1 + 0.05);
	    }
	  };
	
	  chroma.distance = function(a, b, mode) {
	    var d, i, l1, l2, ref, ref1, sum_sq;
	    if (mode == null) {
	      mode = 'lab';
	    }
	    if ((ref = type(a)) === 'string' || ref === 'number') {
	      a = new Color(a);
	    }
	    if ((ref1 = type(b)) === 'string' || ref1 === 'number') {
	      b = new Color(b);
	    }
	    l1 = a.get(mode);
	    l2 = b.get(mode);
	    sum_sq = 0;
	    for (i in l1) {
	      d = (l1[i] || 0) - (l2[i] || 0);
	      sum_sq += d * d;
	    }
	    return Math.sqrt(sum_sq);
	  };
	
	  chroma.deltaE = function(a, b, L, C) {
	    var L1, L2, a1, a2, b1, b2, c1, c2, c4, dH2, delA, delB, delC, delL, f, h1, ref, ref1, ref2, ref3, sc, sh, sl, t, v1, v2, v3;
	    if (L == null) {
	      L = 1;
	    }
	    if (C == null) {
	      C = 1;
	    }
	    if ((ref = type(a)) === 'string' || ref === 'number') {
	      a = new Color(a);
	    }
	    if ((ref1 = type(b)) === 'string' || ref1 === 'number') {
	      b = new Color(b);
	    }
	    ref2 = a.lab(), L1 = ref2[0], a1 = ref2[1], b1 = ref2[2];
	    ref3 = b.lab(), L2 = ref3[0], a2 = ref3[1], b2 = ref3[2];
	    c1 = sqrt(a1 * a1 + b1 * b1);
	    c2 = sqrt(a2 * a2 + b2 * b2);
	    sl = L1 < 16.0 ? 0.511 : (0.040975 * L1) / (1.0 + 0.01765 * L1);
	    sc = (0.0638 * c1) / (1.0 + 0.0131 * c1) + 0.638;
	    h1 = c1 < 0.000001 ? 0.0 : (atan2(b1, a1) * 180.0) / PI;
	    while (h1 < 0) {
	      h1 += 360;
	    }
	    while (h1 >= 360) {
	      h1 -= 360;
	    }
	    t = (h1 >= 164.0) && (h1 <= 345.0) ? 0.56 + abs(0.2 * cos((PI * (h1 + 168.0)) / 180.0)) : 0.36 + abs(0.4 * cos((PI * (h1 + 35.0)) / 180.0));
	    c4 = c1 * c1 * c1 * c1;
	    f = sqrt(c4 / (c4 + 1900.0));
	    sh = sc * (f * t + 1.0 - f);
	    delL = L1 - L2;
	    delC = c1 - c2;
	    delA = a1 - a2;
	    delB = b1 - b2;
	    dH2 = delA * delA + delB * delB - delC * delC;
	    v1 = delL / (L * sl);
	    v2 = delC / (C * sc);
	    v3 = sh;
	    return sqrt(v1 * v1 + v2 * v2 + (dH2 / (v3 * v3)));
	  };
	
	  Color.prototype.get = function(modechan) {
	    var channel, i, me, mode, ref, src;
	    me = this;
	    ref = modechan.split('.'), mode = ref[0], channel = ref[1];
	    src = me[mode]();
	    if (channel) {
	      i = mode.indexOf(channel);
	      if (i > -1) {
	        return src[i];
	      } else {
	        return console.warn('unknown channel ' + channel + ' in mode ' + mode);
	      }
	    } else {
	      return src;
	    }
	  };
	
	  Color.prototype.set = function(modechan, value) {
	    var channel, i, me, mode, ref, src;
	    me = this;
	    ref = modechan.split('.'), mode = ref[0], channel = ref[1];
	    if (channel) {
	      src = me[mode]();
	      i = mode.indexOf(channel);
	      if (i > -1) {
	        if (type(value) === 'string') {
	          switch (value.charAt(0)) {
	            case '+':
	              src[i] += +value;
	              break;
	            case '-':
	              src[i] += +value;
	              break;
	            case '*':
	              src[i] *= +(value.substr(1));
	              break;
	            case '/':
	              src[i] /= +(value.substr(1));
	              break;
	            default:
	              src[i] = +value;
	          }
	        } else {
	          src[i] = value;
	        }
	      } else {
	        console.warn('unknown channel ' + channel + ' in mode ' + mode);
	      }
	    } else {
	      src = value;
	    }
	    return chroma(src, mode).alpha(me.alpha());
	  };
	
	  Color.prototype.clipped = function() {
	    return this._rgb._clipped || false;
	  };
	
	  Color.prototype.alpha = function(a) {
	    if (arguments.length) {
	      return chroma.rgb([this._rgb[0], this._rgb[1], this._rgb[2], a]);
	    }
	    return this._rgb[3];
	  };
	
	  Color.prototype.darken = function(amount) {
	    var lab, me;
	    if (amount == null) {
	      amount = 1;
	    }
	    me = this;
	    lab = me.lab();
	    lab[0] -= LAB_CONSTANTS.Kn * amount;
	    return chroma.lab(lab).alpha(me.alpha());
	  };
	
	  Color.prototype.brighten = function(amount) {
	    if (amount == null) {
	      amount = 1;
	    }
	    return this.darken(-amount);
	  };
	
	  Color.prototype.darker = Color.prototype.darken;
	
	  Color.prototype.brighter = Color.prototype.brighten;
	
	  Color.prototype.saturate = function(amount) {
	    var lch, me;
	    if (amount == null) {
	      amount = 1;
	    }
	    me = this;
	    lch = me.lch();
	    lch[1] += amount * LAB_CONSTANTS.Kn;
	    if (lch[1] < 0) {
	      lch[1] = 0;
	    }
	    return chroma.lch(lch).alpha(me.alpha());
	  };
	
	  Color.prototype.desaturate = function(amount) {
	    if (amount == null) {
	      amount = 1;
	    }
	    return this.saturate(-amount);
	  };
	
	  Color.prototype.premultiply = function() {
	    var a, rgb;
	    rgb = this.rgb();
	    a = this.alpha();
	    return chroma(rgb[0] * a, rgb[1] * a, rgb[2] * a, a);
	  };
	
	  blend = function(bottom, top, mode) {
	    if (!blend[mode]) {
	      throw 'unknown blend mode ' + mode;
	    }
	    return blend[mode](bottom, top);
	  };
	
	  blend_f = function(f) {
	    return function(bottom, top) {
	      var c0, c1;
	      c0 = chroma(top).rgb();
	      c1 = chroma(bottom).rgb();
	      return chroma(f(c0, c1), 'rgb');
	    };
	  };
	
	  each = function(f) {
	    return function(c0, c1) {
	      var i, o, out;
	      out = [];
	      for (i = o = 0; o <= 3; i = ++o) {
	        out[i] = f(c0[i], c1[i]);
	      }
	      return out;
	    };
	  };
	
	  normal = function(a, b) {
	    return a;
	  };
	
	  multiply = function(a, b) {
	    return a * b / 255;
	  };
	
	  darken = function(a, b) {
	    if (a > b) {
	      return b;
	    } else {
	      return a;
	    }
	  };
	
	  lighten = function(a, b) {
	    if (a > b) {
	      return a;
	    } else {
	      return b;
	    }
	  };
	
	  screen = function(a, b) {
	    return 255 * (1 - (1 - a / 255) * (1 - b / 255));
	  };
	
	  overlay = function(a, b) {
	    if (b < 128) {
	      return 2 * a * b / 255;
	    } else {
	      return 255 * (1 - 2 * (1 - a / 255) * (1 - b / 255));
	    }
	  };
	
	  burn = function(a, b) {
	    return 255 * (1 - (1 - b / 255) / (a / 255));
	  };
	
	  dodge = function(a, b) {
	    if (a === 255) {
	      return 255;
	    }
	    a = 255 * (b / 255) / (1 - a / 255);
	    if (a > 255) {
	      return 255;
	    } else {
	      return a;
	    }
	  };
	
	  blend.normal = blend_f(each(normal));
	
	  blend.multiply = blend_f(each(multiply));
	
	  blend.screen = blend_f(each(screen));
	
	  blend.overlay = blend_f(each(overlay));
	
	  blend.darken = blend_f(each(darken));
	
	  blend.lighten = blend_f(each(lighten));
	
	  blend.dodge = blend_f(each(dodge));
	
	  blend.burn = blend_f(each(burn));
	
	  chroma.blend = blend;
	
	  chroma.analyze = function(data) {
	    var len, o, r, val;
	    r = {
	      min: Number.MAX_VALUE,
	      max: Number.MAX_VALUE * -1,
	      sum: 0,
	      values: [],
	      count: 0
	    };
	    for (o = 0, len = data.length; o < len; o++) {
	      val = data[o];
	      if ((val != null) && !isNaN(val)) {
	        r.values.push(val);
	        r.sum += val;
	        if (val < r.min) {
	          r.min = val;
	        }
	        if (val > r.max) {
	          r.max = val;
	        }
	        r.count += 1;
	      }
	    }
	    r.domain = [r.min, r.max];
	    r.limits = function(mode, num) {
	      return chroma.limits(r, mode, num);
	    };
	    return r;
	  };
	
	  chroma.scale = function(colors, positions) {
	    var _classes, _colorCache, _colors, _correctLightness, _domain, _fixed, _gamma, _max, _min, _mode, _nacol, _out, _padding, _pos, _spread, _useCache, classifyValue, f, getClass, getColor, resetCache, setColors, tmap;
	    _mode = 'rgb';
	    _nacol = chroma('#ccc');
	    _spread = 0;
	    _fixed = false;
	    _domain = [0, 1];
	    _pos = [];
	    _padding = [0, 0];
	    _classes = false;
	    _colors = [];
	    _out = false;
	    _min = 0;
	    _max = 1;
	    _correctLightness = false;
	    _colorCache = {};
	    _useCache = true;
	    _gamma = 1;
	    setColors = function(colors) {
	      var c, col, o, ref, ref1, w;
	      if (colors == null) {
	        colors = ['#fff', '#000'];
	      }
	      if ((colors != null) && type(colors) === 'string' && (chroma.brewer != null)) {
	        colors = chroma.brewer[colors] || chroma.brewer[colors.toLowerCase()] || colors;
	      }
	      if (type(colors) === 'array') {
	        colors = colors.slice(0);
	        for (c = o = 0, ref = colors.length - 1; 0 <= ref ? o <= ref : o >= ref; c = 0 <= ref ? ++o : --o) {
	          col = colors[c];
	          if (type(col) === "string") {
	            colors[c] = chroma(col);
	          }
	        }
	        _pos.length = 0;
	        for (c = w = 0, ref1 = colors.length - 1; 0 <= ref1 ? w <= ref1 : w >= ref1; c = 0 <= ref1 ? ++w : --w) {
	          _pos.push(c / (colors.length - 1));
	        }
	      }
	      resetCache();
	      return _colors = colors;
	    };
	    getClass = function(value) {
	      var i, n;
	      if (_classes != null) {
	        n = _classes.length - 1;
	        i = 0;
	        while (i < n && value >= _classes[i]) {
	          i++;
	        }
	        return i - 1;
	      }
	      return 0;
	    };
	    tmap = function(t) {
	      return t;
	    };
	    classifyValue = function(value) {
	      var i, maxc, minc, n, val;
	      val = value;
	      if (_classes.length > 2) {
	        n = _classes.length - 1;
	        i = getClass(value);
	        minc = _classes[0] + (_classes[1] - _classes[0]) * (0 + _spread * 0.5);
	        maxc = _classes[n - 1] + (_classes[n] - _classes[n - 1]) * (1 - _spread * 0.5);
	        val = _min + ((_classes[i] + (_classes[i + 1] - _classes[i]) * 0.5 - minc) / (maxc - minc)) * (_max - _min);
	      }
	      return val;
	    };
	    getColor = function(val, bypassMap) {
	      var c, col, i, k, o, p, ref, t;
	      if (bypassMap == null) {
	        bypassMap = false;
	      }
	      if (isNaN(val)) {
	        return _nacol;
	      }
	      if (!bypassMap) {
	        if (_classes && _classes.length > 2) {
	          c = getClass(val);
	          t = c / (_classes.length - 2);
	        } else if (_max !== _min) {
	          t = (val - _min) / (_max - _min);
	        } else {
	          t = 1;
	        }
	      } else {
	        t = val;
	      }
	      if (!bypassMap) {
	        t = tmap(t);
	      }
	      if (_gamma !== 1) {
	        t = pow(t, _gamma);
	      }
	      t = _padding[0] + (t * (1 - _padding[0] - _padding[1]));
	      t = Math.min(1, Math.max(0, t));
	      k = Math.floor(t * 10000);
	      if (_useCache && _colorCache[k]) {
	        col = _colorCache[k];
	      } else {
	        if (type(_colors) === 'array') {
	          for (i = o = 0, ref = _pos.length - 1; 0 <= ref ? o <= ref : o >= ref; i = 0 <= ref ? ++o : --o) {
	            p = _pos[i];
	            if (t <= p) {
	              col = _colors[i];
	              break;
	            }
	            if (t >= p && i === _pos.length - 1) {
	              col = _colors[i];
	              break;
	            }
	            if (t > p && t < _pos[i + 1]) {
	              t = (t - p) / (_pos[i + 1] - p);
	              col = chroma.interpolate(_colors[i], _colors[i + 1], t, _mode);
	              break;
	            }
	          }
	        } else if (type(_colors) === 'function') {
	          col = _colors(t);
	        }
	        if (_useCache) {
	          _colorCache[k] = col;
	        }
	      }
	      return col;
	    };
	    resetCache = function() {
	      return _colorCache = {};
	    };
	    setColors(colors);
	    f = function(v) {
	      var c;
	      c = chroma(getColor(v));
	      if (_out && c[_out]) {
	        return c[_out]();
	      } else {
	        return c;
	      }
	    };
	    f.classes = function(classes) {
	      var d;
	      if (classes != null) {
	        if (type(classes) === 'array') {
	          _classes = classes;
	          _domain = [classes[0], classes[classes.length - 1]];
	        } else {
	          d = chroma.analyze(_domain);
	          if (classes === 0) {
	            _classes = [d.min, d.max];
	          } else {
	            _classes = chroma.limits(d, 'e', classes);
	          }
	        }
	        return f;
	      }
	      return _classes;
	    };
	    f.domain = function(domain) {
	      var c, d, k, len, o, ref, w;
	      if (!arguments.length) {
	        return _domain;
	      }
	      _min = domain[0];
	      _max = domain[domain.length - 1];
	      _pos = [];
	      k = _colors.length;
	      if (domain.length === k && _min !== _max) {
	        for (o = 0, len = domain.length; o < len; o++) {
	          d = domain[o];
	          _pos.push((d - _min) / (_max - _min));
	        }
	      } else {
	        for (c = w = 0, ref = k - 1; 0 <= ref ? w <= ref : w >= ref; c = 0 <= ref ? ++w : --w) {
	          _pos.push(c / (k - 1));
	        }
	      }
	      _domain = [_min, _max];
	      return f;
	    };
	    f.mode = function(_m) {
	      if (!arguments.length) {
	        return _mode;
	      }
	      _mode = _m;
	      resetCache();
	      return f;
	    };
	    f.range = function(colors, _pos) {
	      setColors(colors, _pos);
	      return f;
	    };
	    f.out = function(_o) {
	      _out = _o;
	      return f;
	    };
	    f.spread = function(val) {
	      if (!arguments.length) {
	        return _spread;
	      }
	      _spread = val;
	      return f;
	    };
	    f.correctLightness = function(v) {
	      if (v == null) {
	        v = true;
	      }
	      _correctLightness = v;
	      resetCache();
	      if (_correctLightness) {
	        tmap = function(t) {
	          var L0, L1, L_actual, L_diff, L_ideal, max_iter, pol, t0, t1;
	          L0 = getColor(0, true).lab()[0];
	          L1 = getColor(1, true).lab()[0];
	          pol = L0 > L1;
	          L_actual = getColor(t, true).lab()[0];
	          L_ideal = L0 + (L1 - L0) * t;
	          L_diff = L_actual - L_ideal;
	          t0 = 0;
	          t1 = 1;
	          max_iter = 20;
	          while (Math.abs(L_diff) > 1e-2 && max_iter-- > 0) {
	            (function() {
	              if (pol) {
	                L_diff *= -1;
	              }
	              if (L_diff < 0) {
	                t0 = t;
	                t += (t1 - t) * 0.5;
	              } else {
	                t1 = t;
	                t += (t0 - t) * 0.5;
	              }
	              L_actual = getColor(t, true).lab()[0];
	              return L_diff = L_actual - L_ideal;
	            })();
	          }
	          return t;
	        };
	      } else {
	        tmap = function(t) {
	          return t;
	        };
	      }
	      return f;
	    };
	    f.padding = function(p) {
	      if (p != null) {
	        if (type(p) === 'number') {
	          p = [p, p];
	        }
	        _padding = p;
	        return f;
	      } else {
	        return _padding;
	      }
	    };
	    f.colors = function(numColors, out) {
	      var dd, dm, i, o, ref, result, results, samples, w;
	      if (arguments.length < 2) {
	        out = 'hex';
	      }
	      result = [];
	      if (arguments.length === 0) {
	        result = _colors.slice(0);
	      } else if (numColors === 1) {
	        result = [f(0.5)];
	      } else if (numColors > 1) {
	        dm = _domain[0];
	        dd = _domain[1] - dm;
	        result = (function() {
	          results = [];
	          for (var o = 0; 0 <= numColors ? o < numColors : o > numColors; 0 <= numColors ? o++ : o--){ results.push(o); }
	          return results;
	        }).apply(this).map(function(i) {
	          return f(dm + i / (numColors - 1) * dd);
	        });
	      } else {
	        colors = [];
	        samples = [];
	        if (_classes && _classes.length > 2) {
	          for (i = w = 1, ref = _classes.length; 1 <= ref ? w < ref : w > ref; i = 1 <= ref ? ++w : --w) {
	            samples.push((_classes[i - 1] + _classes[i]) * 0.5);
	          }
	        } else {
	          samples = _domain;
	        }
	        result = samples.map(function(v) {
	          return f(v);
	        });
	      }
	      if (chroma[out]) {
	        result = result.map(function(c) {
	          return c[out]();
	        });
	      }
	      return result;
	    };
	    f.cache = function(c) {
	      if (c != null) {
	        _useCache = c;
	        return f;
	      } else {
	        return _useCache;
	      }
	    };
	    f.gamma = function(g) {
	      if (g != null) {
	        _gamma = g;
	        return f;
	      } else {
	        return _gamma;
	      }
	    };
	    return f;
	  };
	
	  if (chroma.scales == null) {
	    chroma.scales = {};
	  }
	
	  chroma.scales.cool = function() {
	    return chroma.scale([chroma.hsl(180, 1, .9), chroma.hsl(250, .7, .4)]);
	  };
	
	  chroma.scales.hot = function() {
	    return chroma.scale(['#000', '#f00', '#ff0', '#fff'], [0, .25, .75, 1]).mode('rgb');
	  };
	
	  chroma.analyze = function(data, key, filter) {
	    var add, k, len, o, r, val, visit;
	    r = {
	      min: Number.MAX_VALUE,
	      max: Number.MAX_VALUE * -1,
	      sum: 0,
	      values: [],
	      count: 0
	    };
	    if (filter == null) {
	      filter = function() {
	        return true;
	      };
	    }
	    add = function(val) {
	      if ((val != null) && !isNaN(val)) {
	        r.values.push(val);
	        r.sum += val;
	        if (val < r.min) {
	          r.min = val;
	        }
	        if (val > r.max) {
	          r.max = val;
	        }
	        r.count += 1;
	      }
	    };
	    visit = function(val, k) {
	      if (filter(val, k)) {
	        if ((key != null) && type(key) === 'function') {
	          return add(key(val));
	        } else if ((key != null) && type(key) === 'string' || type(key) === 'number') {
	          return add(val[key]);
	        } else {
	          return add(val);
	        }
	      }
	    };
	    if (type(data) === 'array') {
	      for (o = 0, len = data.length; o < len; o++) {
	        val = data[o];
	        visit(val);
	      }
	    } else {
	      for (k in data) {
	        val = data[k];
	        visit(val, k);
	      }
	    }
	    r.domain = [r.min, r.max];
	    r.limits = function(mode, num) {
	      return chroma.limits(r, mode, num);
	    };
	    return r;
	  };
	
	  chroma.limits = function(data, mode, num) {
	    var aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, assignments, best, centroids, cluster, clusterSizes, dist, i, j, kClusters, limits, max_log, min, min_log, mindist, n, nb_iters, newCentroids, o, p, pb, pr, ref, ref1, ref10, ref11, ref12, ref13, ref14, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, repeat, sum, tmpKMeansBreaks, v, value, values, w;
	    if (mode == null) {
	      mode = 'equal';
	    }
	    if (num == null) {
	      num = 7;
	    }
	    if (type(data) === 'array') {
	      data = chroma.analyze(data);
	    }
	    min = data.min;
	    max = data.max;
	    sum = data.sum;
	    values = data.values.sort(function(a, b) {
	      return a - b;
	    });
	    if (num === 1) {
	      return [min, max];
	    }
	    limits = [];
	    if (mode.substr(0, 1) === 'c') {
	      limits.push(min);
	      limits.push(max);
	    }
	    if (mode.substr(0, 1) === 'e') {
	      limits.push(min);
	      for (i = o = 1, ref = num - 1; 1 <= ref ? o <= ref : o >= ref; i = 1 <= ref ? ++o : --o) {
	        limits.push(min + (i / num) * (max - min));
	      }
	      limits.push(max);
	    } else if (mode.substr(0, 1) === 'l') {
	      if (min <= 0) {
	        throw 'Logarithmic scales are only possible for values > 0';
	      }
	      min_log = Math.LOG10E * log(min);
	      max_log = Math.LOG10E * log(max);
	      limits.push(min);
	      for (i = w = 1, ref1 = num - 1; 1 <= ref1 ? w <= ref1 : w >= ref1; i = 1 <= ref1 ? ++w : --w) {
	        limits.push(pow(10, min_log + (i / num) * (max_log - min_log)));
	      }
	      limits.push(max);
	    } else if (mode.substr(0, 1) === 'q') {
	      limits.push(min);
	      for (i = aa = 1, ref2 = num - 1; 1 <= ref2 ? aa <= ref2 : aa >= ref2; i = 1 <= ref2 ? ++aa : --aa) {
	        p = (values.length - 1) * i / num;
	        pb = floor(p);
	        if (pb === p) {
	          limits.push(values[pb]);
	        } else {
	          pr = p - pb;
	          limits.push(values[pb] * (1 - pr) + values[pb + 1] * pr);
	        }
	      }
	      limits.push(max);
	    } else if (mode.substr(0, 1) === 'k') {
	
	      /*
	      implementation based on
	      http://code.google.com/p/figue/source/browse/trunk/figue.js#336
	      simplified for 1-d input values
	       */
	      n = values.length;
	      assignments = new Array(n);
	      clusterSizes = new Array(num);
	      repeat = true;
	      nb_iters = 0;
	      centroids = null;
	      centroids = [];
	      centroids.push(min);
	      for (i = ab = 1, ref3 = num - 1; 1 <= ref3 ? ab <= ref3 : ab >= ref3; i = 1 <= ref3 ? ++ab : --ab) {
	        centroids.push(min + (i / num) * (max - min));
	      }
	      centroids.push(max);
	      while (repeat) {
	        for (j = ac = 0, ref4 = num - 1; 0 <= ref4 ? ac <= ref4 : ac >= ref4; j = 0 <= ref4 ? ++ac : --ac) {
	          clusterSizes[j] = 0;
	        }
	        for (i = ad = 0, ref5 = n - 1; 0 <= ref5 ? ad <= ref5 : ad >= ref5; i = 0 <= ref5 ? ++ad : --ad) {
	          value = values[i];
	          mindist = Number.MAX_VALUE;
	          for (j = ae = 0, ref6 = num - 1; 0 <= ref6 ? ae <= ref6 : ae >= ref6; j = 0 <= ref6 ? ++ae : --ae) {
	            dist = abs(centroids[j] - value);
	            if (dist < mindist) {
	              mindist = dist;
	              best = j;
	            }
	          }
	          clusterSizes[best]++;
	          assignments[i] = best;
	        }
	        newCentroids = new Array(num);
	        for (j = af = 0, ref7 = num - 1; 0 <= ref7 ? af <= ref7 : af >= ref7; j = 0 <= ref7 ? ++af : --af) {
	          newCentroids[j] = null;
	        }
	        for (i = ag = 0, ref8 = n - 1; 0 <= ref8 ? ag <= ref8 : ag >= ref8; i = 0 <= ref8 ? ++ag : --ag) {
	          cluster = assignments[i];
	          if (newCentroids[cluster] === null) {
	            newCentroids[cluster] = values[i];
	          } else {
	            newCentroids[cluster] += values[i];
	          }
	        }
	        for (j = ah = 0, ref9 = num - 1; 0 <= ref9 ? ah <= ref9 : ah >= ref9; j = 0 <= ref9 ? ++ah : --ah) {
	          newCentroids[j] *= 1 / clusterSizes[j];
	        }
	        repeat = false;
	        for (j = ai = 0, ref10 = num - 1; 0 <= ref10 ? ai <= ref10 : ai >= ref10; j = 0 <= ref10 ? ++ai : --ai) {
	          if (newCentroids[j] !== centroids[i]) {
	            repeat = true;
	            break;
	          }
	        }
	        centroids = newCentroids;
	        nb_iters++;
	        if (nb_iters > 200) {
	          repeat = false;
	        }
	      }
	      kClusters = {};
	      for (j = aj = 0, ref11 = num - 1; 0 <= ref11 ? aj <= ref11 : aj >= ref11; j = 0 <= ref11 ? ++aj : --aj) {
	        kClusters[j] = [];
	      }
	      for (i = ak = 0, ref12 = n - 1; 0 <= ref12 ? ak <= ref12 : ak >= ref12; i = 0 <= ref12 ? ++ak : --ak) {
	        cluster = assignments[i];
	        kClusters[cluster].push(values[i]);
	      }
	      tmpKMeansBreaks = [];
	      for (j = al = 0, ref13 = num - 1; 0 <= ref13 ? al <= ref13 : al >= ref13; j = 0 <= ref13 ? ++al : --al) {
	        tmpKMeansBreaks.push(kClusters[j][0]);
	        tmpKMeansBreaks.push(kClusters[j][kClusters[j].length - 1]);
	      }
	      tmpKMeansBreaks = tmpKMeansBreaks.sort(function(a, b) {
	        return a - b;
	      });
	      limits.push(tmpKMeansBreaks[0]);
	      for (i = am = 1, ref14 = tmpKMeansBreaks.length - 1; am <= ref14; i = am += 2) {
	        v = tmpKMeansBreaks[i];
	        if (!isNaN(v) && limits.indexOf(v) === -1) {
	          limits.push(v);
	        }
	      }
	    }
	    return limits;
	  };
	
	  hsi2rgb = function(h, s, i) {
	
	    /*
	    borrowed from here:
	    http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/hsi2rgb.cpp
	     */
	    var args, b, g, r;
	    args = unpack(arguments);
	    h = args[0], s = args[1], i = args[2];
	    if (isNaN(h)) {
	      h = 0;
	    }
	    h /= 360;
	    if (h < 1 / 3) {
	      b = (1 - s) / 3;
	      r = (1 + s * cos(TWOPI * h) / cos(PITHIRD - TWOPI * h)) / 3;
	      g = 1 - (b + r);
	    } else if (h < 2 / 3) {
	      h -= 1 / 3;
	      r = (1 - s) / 3;
	      g = (1 + s * cos(TWOPI * h) / cos(PITHIRD - TWOPI * h)) / 3;
	      b = 1 - (r + g);
	    } else {
	      h -= 2 / 3;
	      g = (1 - s) / 3;
	      b = (1 + s * cos(TWOPI * h) / cos(PITHIRD - TWOPI * h)) / 3;
	      r = 1 - (g + b);
	    }
	    r = limit(i * r * 3);
	    g = limit(i * g * 3);
	    b = limit(i * b * 3);
	    return [r * 255, g * 255, b * 255, args.length > 3 ? args[3] : 1];
	  };
	
	  rgb2hsi = function() {
	
	    /*
	    borrowed from here:
	    http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/rgb2hsi.cpp
	     */
	    var b, g, h, i, min, r, ref, s;
	    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
	    TWOPI = Math.PI * 2;
	    r /= 255;
	    g /= 255;
	    b /= 255;
	    min = Math.min(r, g, b);
	    i = (r + g + b) / 3;
	    s = 1 - min / i;
	    if (s === 0) {
	      h = 0;
	    } else {
	      h = ((r - g) + (r - b)) / 2;
	      h /= Math.sqrt((r - g) * (r - g) + (r - b) * (g - b));
	      h = Math.acos(h);
	      if (b > g) {
	        h = TWOPI - h;
	      }
	      h /= TWOPI;
	    }
	    return [h * 360, s, i];
	  };
	
	  chroma.hsi = function() {
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Color, slice.call(arguments).concat(['hsi']), function(){});
	  };
	
	  _input.hsi = hsi2rgb;
	
	  Color.prototype.hsi = function() {
	    return rgb2hsi(this._rgb);
	  };
	
	  interpolate_hsx = function(col1, col2, f, m) {
	    var dh, hue, hue0, hue1, lbv, lbv0, lbv1, res, sat, sat0, sat1, xyz0, xyz1;
	    if (m === 'hsl') {
	      xyz0 = col1.hsl();
	      xyz1 = col2.hsl();
	    } else if (m === 'hsv') {
	      xyz0 = col1.hsv();
	      xyz1 = col2.hsv();
	    } else if (m === 'hcg') {
	      xyz0 = col1.hcg();
	      xyz1 = col2.hcg();
	    } else if (m === 'hsi') {
	      xyz0 = col1.hsi();
	      xyz1 = col2.hsi();
	    } else if (m === 'lch' || m === 'hcl') {
	      m = 'hcl';
	      xyz0 = col1.hcl();
	      xyz1 = col2.hcl();
	    }
	    if (m.substr(0, 1) === 'h') {
	      hue0 = xyz0[0], sat0 = xyz0[1], lbv0 = xyz0[2];
	      hue1 = xyz1[0], sat1 = xyz1[1], lbv1 = xyz1[2];
	    }
	    if (!isNaN(hue0) && !isNaN(hue1)) {
	      if (hue1 > hue0 && hue1 - hue0 > 180) {
	        dh = hue1 - (hue0 + 360);
	      } else if (hue1 < hue0 && hue0 - hue1 > 180) {
	        dh = hue1 + 360 - hue0;
	      } else {
	        dh = hue1 - hue0;
	      }
	      hue = hue0 + f * dh;
	    } else if (!isNaN(hue0)) {
	      hue = hue0;
	      if ((lbv1 === 1 || lbv1 === 0) && m !== 'hsv') {
	        sat = sat0;
	      }
	    } else if (!isNaN(hue1)) {
	      hue = hue1;
	      if ((lbv0 === 1 || lbv0 === 0) && m !== 'hsv') {
	        sat = sat1;
	      }
	    } else {
	      hue = Number.NaN;
	    }
	    if (sat == null) {
	      sat = sat0 + f * (sat1 - sat0);
	    }
	    lbv = lbv0 + f * (lbv1 - lbv0);
	    return res = chroma[m](hue, sat, lbv);
	  };
	
	  _interpolators = _interpolators.concat((function() {
	    var len, o, ref, results;
	    ref = ['hsv', 'hsl', 'hsi', 'hcl', 'lch', 'hcg'];
	    results = [];
	    for (o = 0, len = ref.length; o < len; o++) {
	      m = ref[o];
	      results.push([m, interpolate_hsx]);
	    }
	    return results;
	  })());
	
	  interpolate_num = function(col1, col2, f, m) {
	    var n1, n2;
	    n1 = col1.num();
	    n2 = col2.num();
	    return chroma.num(n1 + (n2 - n1) * f, 'num');
	  };
	
	  _interpolators.push(['num', interpolate_num]);
	
	  interpolate_lab = function(col1, col2, f, m) {
	    var res, xyz0, xyz1;
	    xyz0 = col1.lab();
	    xyz1 = col2.lab();
	    return res = new Color(xyz0[0] + f * (xyz1[0] - xyz0[0]), xyz0[1] + f * (xyz1[1] - xyz0[1]), xyz0[2] + f * (xyz1[2] - xyz0[2]), m);
	  };
	
	  _interpolators.push(['lab', interpolate_lab]);
	
	}).call(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(36)(module)))

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  SpanText
	//
	//--------------------------------------------------
	
	var _SetSpan = __webpack_require__(38);
	
	var _SetSpan2 = _interopRequireDefault(_SetSpan);
	
	var _index = __webpack_require__(39);
	
	var a = _interopRequireWildcard(_index);
	
	var _index2 = __webpack_require__(32);
	
	var m = _interopRequireWildcard(_index2);
	
	var _Controller = __webpack_require__(40);
	
	var _Controller2 = _interopRequireDefault(_Controller);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SpanText = function () {
	  function SpanText($wrap) {
	    _classCallCheck(this, SpanText);
	
	    this.$wrap = $wrap;
	    this.$target = $wrap.find('div');
	
	    this.index = 0;
	    this.text = ['Shun Kawakami est classe et inclassable,<br>alors les marques l’ont remarqué', 'De Tokyo la mégalopole aux<br> paysages préservés de Kochi', 'seule une présence, le bruit des talons <br>hauts sur le bitume résonne à nos oreilles, le…', 'Les puissantes photographies d’Araki<br>ébranlent l’esprit, le corps, et tous'];
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(SpanText, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.$wrap.css({
	        // overflow: 'hidden',
	        cursor: 'pointer'
	      });
	
	      this.w = this.$wrap.innerWidth();
	      this.h = this.$wrap.innerHeight();
	
	      // spanで1文字1文字囲む
	      this.s = new _SetSpan2.default(this.$target);
	
	      // // 各spanを取得
	      this.$span = this.$target.find('.spanWrap');
	      this.$span.css('display', 'inline-block'); // spanはinline-blockかblockじゃないとtnraslateが効かないので、styleつける
	      this.$spant = this.$target.find('.t');
	      this.len = this.$span.length;
	      this.$wrap.css('opacity', 1);
	
	      this.ready();
	      // this.timeline();
	    }
	  }, {
	    key: 'ready',
	    value: function ready() {
	
	      var w = this.$span.eq(0).width();
	      var h = this.$span.eq(0).height();
	
	      this.f = new _Controller2.default();
	    }
	  }, {
	    key: 'show',
	    value: function show() {
	
	      this.f.show();
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	
	      this.f.hide();
	    }
	  }, {
	    key: 'switch',
	    value: function _switch() {
	
	      this.index++;
	      this.index = this.index % this.text.length;
	
	      var text = this.text[this.index];
	      this.f.remove();
	      this.$target.html(text);
	      this.setup();
	    }
	  }, {
	    key: 'timeline',
	    value: function timeline() {
	      var _this = this;
	
	      var tl = new TimelineMax();
	
	      tl.add(function () {
	
	        _this.show();
	      }, 2.0);
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return SpanText;
	}();
	
	exports.default = SpanText;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  SpanText
	//
	//--------------------------------------------------
	
	var SpanText = function () {
	  function SpanText($target) {
	    _classCallCheck(this, SpanText);
	
	    this.$target = $target;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(SpanText, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.set();
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {}
	  }, {
	    key: 'set',
	    value: function set($target) {
	
	      // \s  空白文字:[ \t\n\x0B\f\r]
	      // \S  非空白文字:[^\s]
	      // \w  単語構成文字:[a-zA-Z_0-9]
	      // \W  非単語文字:[^\w]
	
	      // var span = $target.text().replace(/(\S)/g, '<span>$1</span>');
	      // // var span = $target.text().replace(/(\w|\s)/g, '<span>$1</span>');
	      // $target.html(span);
	
	
	      // brタグがあっても問題がないように
	      // brで区切る
	      var text = this.$target.html();
	      var split = /<br>/g;
	      // var split = /\r\n|\r|\n/g; // 改行コードなど
	      var span = text.split(split);
	
	      // trim
	      for (var i = 0; i < span.length; i++) {
	        span[i] = span[i].trim();
	      }
	
	      // span化
	      for (var i = 0; i < span.length; i++) {
	        span[i] = span[i].replace(/(\S)/g, '<span class="spanWrap">$1</span>');
	      }
	
	      // br追加して連結
	      var append = span.join('<br>');
	
	      // append
	      this.$target.html(append);
	
	      // log
	      // log(text);
	      // log(span)
	      // log(append)
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return SpanText;
	}();
	
	exports.default = SpanText;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.shuffle = shuffle;
	exports.randomArr = randomArr;
	// 配列をランダムに並べ替え
	// -----------------------------------
	// @arr : 配列(Array)
	// -----------------------------------
	function shuffle(ary) {
	
	  var arr = [];
	  arr = ary.slice();
	  var i = arr.length;
	  while (i) {
	    var j = Math.floor(Math.random() * i);
	    var t = arr[--i];
	    arr[i] = arr[j];
	    arr[j] = t;
	  }
	  return arr;
	}
	
	// ランダムな数値を作る
	function randomArr(len) {
	
	  var arr = [];
	
	  for (var i = 0; i < len; i++) {
	    arr.push(i);
	  }arr = this.shuffle(arr);
	
	  return arr;
	}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Base2 = __webpack_require__(14);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _Flow = __webpack_require__(41);
	
	var _Flow2 = _interopRequireDefault(_Flow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ------------------------------------------------------------
	//
	//  Dom
	//
	// ------------------------------------------------------------
	
	// cf
	// https://codepen.io/Pillowfication/pen/PNEJbY
	
	var Dom = function (_Base) {
	  _inherits(Dom, _Base);
	
	  function Dom() {
	    _classCallCheck(this, Dom);
	
	    var _this = _possibleConstructorReturn(this, (Dom.__proto__ || Object.getPrototypeOf(Dom)).call(this));
	
	    _this.setup();
	    _this.setEvents();
	
	    return _this;
	  }
	
	  _createClass(Dom, [{
	    key: 'setup',
	    value: function setup() {
	
	      // this.isREv = true;
	      // this.isUEv = true;
	
	      // wrap
	      this.container = document.createElement('div');
	      this.container.style.position = 'fixed';
	      this.container.style.top = '0';
	      this.container.style.left = '0';
	      this.container.style.width = '100%';
	      this.container.style.height = '0';
	      this.container.style.overflow = 'visible';
	      this.container.style.zIndex = '9999';
	
	      // append wrap
	      $('#inner').prepend(this.container);
	
	      // add
	      this.add();
	
	      // show wrap
	      $(this.container).css({ 'opacity': 1, 'perspective': '80px' });
	      $(this.container).addClass('flowWrap');
	    }
	  }, {
	    key: 'add',
	    value: function add() {
	
	      this.flows = [];
	
	      var $span = $('.spanWrap');
	      var len = $span.length;
	      for (var i = 0; i < len; i++) {
	
	        var $target = $span.eq(i);
	        var flow = new _Flow2.default($target, i, len);
	        this.flows.push(flow);
	
	        // append
	        this.container.appendChild(flow.outer);
	      }
	    }
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'show',
	    value: function show() {
	
	      for (var i = 0; i < this.flows.length; i++) {
	
	        var c = this.flows[i];
	        c.show(i * 0.01);
	      }
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	
	      for (var i = 0; i < this.flows.length; i++) {
	
	        var c = this.flows[i];
	        c.hide(i * 0.01);
	      }
	    }
	  }, {
	    key: 'remove',
	    value: function remove() {
	
	      $(this.container).remove();
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {}
	  }]);
	
	  return Dom;
	}(_Base3.default);
	
	exports.default = Dom;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  Dom
	//
	// ------------------------------------------------------------
	
	// cf
	// https://codepen.io/Pillowfication/pen/PNEJbY
	
	var Dom = function () {
	  function Dom($target, index, len) {
	    _classCallCheck(this, Dom);
	
	    this.$target = $target;
	    this.index = index;
	    this.len = len;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Dom, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.deviation = 100;
	      this.frame = 0;
	
	      // create close
	      this.createClone();
	
	      // pos ready
	      var x = gb.r.w * (this.index + this.len) / this.len * -6;
	      var y = gb.r.h * (this.index + this.len) / this.len;
	      var z = gb.r.h * (this.index + this.len) / this.len;
	      TweenMax.set($(this.outer), { x: x, y: y, z: z });
	
	      // op
	      TweenMax.set($(this.outer), { opacity: 0 });
	    }
	  }, {
	    key: 'createClone',
	    value: function createClone() {
	
	      // create clone
	      this.outer = document.createElement('div');
	      this.inner = document.createElement('div');
	      $(this.outer).addClass('spanouter');
	      $(this.inner).addClass('spaninner');
	      this.outer.appendChild(this.inner);
	      var $clone = this.$target.clone();
	      this.defw = this.$target.width();
	      this.defh = this.$target.height();
	      $(this.inner).append($clone);
	      // $(this.inner).css({'margin-left': -this.defw/2,'margin-top': -this.defh/2}); // 上下左右中央に
	
	      // set style
	      this.outerStyle = this.outer.style;
	      this.innerStyle = this.inner.style;
	      this.outerStyle.position = 'absolute';
	      this.outerStyle.width = this.defw + 'px';
	      this.outerStyle.height = this.defh + 'px';
	      this.innerStyle.width = '100%';
	      this.innerStyle.height = '100%';
	
	      // rotate
	      this.axis = 'rotate3D(' + Math.cos(360 * Math.random()) + ',' + Math.cos(360 * Math.random()) + ',0,';
	      this.theta = 360 * Math.random();
	      var vThetaMin = .4;
	      var vThetaMax = .7 - vThetaMin;
	      this.vTheta = vThetaMin + vThetaMax * Math.random();
	      this.outerStyle.perspective = '100px';
	      var rotx = 360 * (Math.random() - 0.5);
	      var roty = 360 * (Math.random() - 0.5);
	      var rotz = 360 * (Math.random() - 0.5);
	      TweenMax.set($(this.inner), { rotationX: rotx, rotationY: roty, rotationZ: rotz });
	
	      // pos
	      this.vxThetaMin = -.1;
	      this.vxThetaMax = -this.vxThetaMin - this.vxThetaMin;
	      this.vyMin = .13;
	      this.vyMax = .18;
	      this.vx = Math.sin(this.vxThetaMin + this.vxThetaMax * Math.random());
	      this.vy = (this.vyMin + this.vyMax * Math.random()) * (1.0 + 0.2 * (4.0 - 5 / 10));
	      this.deft = this.$target.offset().top;
	      this.defl = this.$target.offset().left;
	      TweenMax.set($(this.outer), { left: this.defl, top: this.deft });
	      this.x = 0;
	      this.y = 0;
	    }
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'show',
	    value: function show(delay) {
	
	      var tl = new TimelineMax({ delay: delay });
	
	      tl
	      // pos
	      .to($(this.outer), 2.2, {
	        x: 0,
	        y: 0,
	        z: 0,
	        ease: Power2.easeInOut
	      }, 0.0)
	      // rotate
	      .to($(this.inner), 2.2, {
	        rotationX: 0,
	        rotationY: 0,
	        rotationZ: 0,
	        ease: Power2.easeInOut
	      }, 0.0)
	      // op
	      .to($(this.outer), 2.2, {
	        opacity: 1,
	        ease: Power2.easeInOut
	      }, 0.0);
	    }
	  }, {
	    key: 'hide',
	    value: function hide(delay) {
	
	      var tl = new TimelineMax({ delay: delay });
	
	      var x = gb.r.w * (this.index + this.len) / this.len * 6;
	      var y = gb.r.h * (this.index + this.len) / this.len * -1;
	      var z = gb.r.h * (this.index + this.len) / this.len * -1;
	      var rotx = 360 * (Math.random() - 0.5);
	      var roty = 360 * (Math.random() - 0.5);
	      var rotz = 360 * (Math.random() - 0.5);
	
	      tl
	      // pos
	      .to($(this.outer), 2.2, {
	        x: x,
	        y: y,
	        z: z,
	        ease: Power2.easeInOut
	      }, 0.0)
	      // rotate
	      .to($(this.inner), 2.2, {
	        rotationX: 0,
	        rotationY: 0,
	        rotationZ: 0,
	        ease: Power2.easeInOut
	      }, 0.0)
	      // op
	      .to($(this.outer), 1.2, {
	        opacity: 0,
	        ease: Power2.easeInOut
	      }, 0.0);
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      // super.setEvents();
	
	
	    }
	  }]);
	
	  return Dom;
	}();
	
	exports.default = Dom;

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map