/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(4)
var $app_style$ = __webpack_require__(5)
var $app_script$ = __webpack_require__(6)

$app_define$('@app-component/personal', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/personal',{ packagerName:'fa-toolkit', packagerVersion: '1.0.6-Stable.300'})

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "container"
  ],
  "children": [
    {
      "type": "text",
      "attr": {
        "value": "个人中心"
      }
    },
    {
      "type": "text",
      "attr": {
        "value": "个人中心"
      }
    }
  ]
}

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flex": 1,
    "flexDirection": "column"
  },
  ".page-title-wrap": {
    "paddingTop": "50px",
    "paddingBottom": "80px",
    "justifyContent": "center"
  },
  ".page-title": {
    "paddingTop": "30px",
    "paddingBottom": "30px",
    "paddingLeft": "40px",
    "paddingRight": "40px",
    "borderTopColor": "#bbbbbb",
    "borderRightColor": "#bbbbbb",
    "borderBottomColor": "#bbbbbb",
    "borderLeftColor": "#bbbbbb",
    "color": "#bbbbbb",
    "borderBottomWidth": "2px"
  },
  ".btn": {
    "height": "80px",
    "textAlign": "center",
    "borderRadius": "5px",
    "marginRight": "60px",
    "marginLeft": "60px",
    "marginBottom": "50px",
    "color": "#ffffff",
    "fontSize": "30px",
    "backgroundColor": "#0faeff"
  }
}

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){'use strict';

var _system = $app_require$('@app-module/system.prompt');

var _system2 = _interopRequireDefault(_system);

var _personalApi = __webpack_require__(7);

var _personalApi2 = _interopRequireDefault(_personalApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  props: {},
  onInit: function onInit() {}
};
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('页面VM对象中属性data不可与public, protected, private同时存在，请使用public替代data！');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能使函数，请使用对象');
    }
  });
}}

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

var fetch = $app_require$("@app-module/system.fetch");
var Fly = __webpack_require__(8);
var fly = new Fly(fetch);

/* harmony default export */ __webpack_exports__["default"] = ({

  /**首页数据接口 write your code.... */

  /**我的直播数据接口 write your code.... */

  /**个人中心数据接口 write your code.... */

  /**获取用户基本信息*/
  getUserBaseInfo(params) {
    console.log('获取用户信息');
    fly.post('/user/baseInfo', params).then(function (response) {
      console.log('已获取到用户信息');
      console.log(response);
    }).catch(function (error) {
      console.log('获取用户信息出错...');
      console.log(error);
    });
  }

});

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
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
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = {
    type: function type(ob) {
        return Object.prototype.toString.call(ob).slice(8, -1).toLowerCase();
    },
    isObject: function isObject(ob, real) {
        if (real) {
            return this.type(ob) === "object";
        } else {
            return ob && (typeof ob === 'undefined' ? 'undefined' : _typeof(ob)) === 'object';
        }
    },
    isFormData: function isFormData(val) {
        return typeof FormData !== 'undefined' && val instanceof FormData;
    },
    trim: function trim(str) {
        return str.replace(/(^\s*)|(\s*$)/g, '');
    },
    encode: function encode(val) {
        return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
    },
    formatParams: function formatParams(data) {
        var str = "";
        var first = true;
        var that = this;
        if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) != "object") {
            return data;
        }
        function _encode(sub, path) {
            var encode = that.encode;
            var type = that.type(sub);
            if (type == "array") {
                sub.forEach(function (e, i) {
                    _encode(e, path + "%5B%5D");
                });
            } else if (type == "object") {
                for (var key in sub) {
                    if (path) {
                        _encode(sub[key], path + "%5B" + encode(key) + "%5D");
                    } else {
                        _encode(sub[key], encode(key));
                    }
                }
            } else {
                if (!first) {
                    str += "&";
                }
                first = false;
                str += path + "=" + encode(sub);
            }
        }

        _encode(data, "");
        return str;
    },

    // Do not overwrite existing attributes
    merge: function merge(a, b) {
        for (var key in b) {
            if (!a.hasOwnProperty(key)) {
                a[key] = b[key];
            } else if (this.isObject(b[key], 1) && this.isObject(a[key], 1)) {
                this.merge(a[key], b[key]);
            }
        }
        return a;
    }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

function KEEP(_,cb){cb();}
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * author: wendu
 * email: 824783146@qq.com
 **/

var util = __webpack_require__(0);
var isBrowser = typeof document !== "undefined";

//EngineWrapper can help  generating  a  http engine quickly through a adapter
function EngineWrapper(adapter) {
    var AjaxEngine = function () {
        function AjaxEngine() {
            _classCallCheck(this, AjaxEngine);

            this.requestHeaders = {};
            this.readyState = 0;
            this.timeout = 0; // 0 stands for no timeout
            this.responseURL = "";
            this.responseHeaders = {};
        }

        _createClass(AjaxEngine, [{
            key: "_call",
            value: function _call(name) {
                this[name] && this[name].apply(this, [].splice.call(arguments, 1));
            }
        }, {
            key: "_changeReadyState",
            value: function _changeReadyState(state) {
                this.readyState = state;
                this._call("onreadystatechange");
            }
        }, {
            key: "open",
            value: function open(method, url) {
                this.method = method;
                if (!url) {
                    url = location.href;
                } else {
                    url = util.trim(url);
                    if (url.indexOf("http") !== 0) {
                        // Normalize the request url
                        if (isBrowser) {
                            var t = document.createElement("a");
                            t.href = url;
                            url = t.href;
                        }
                    }
                }
                this.responseURL = url;
                this._changeReadyState(1);
            }
        }, {
            key: "send",
            value: function send(arg) {
                var _this = this;

                arg = arg || null;
                if (isBrowser) {
                    var cookie = document.cookie;
                    if (cookie) {
                        this.requestHeaders.cookie = cookie;
                    }
                }
                var self = this;
                if (adapter) {
                    var request = {
                        method: self.method,
                        url: self.responseURL,
                        headers: self.requestHeaders || {},
                        body: arg
                    };
                    util.merge(request, self._options || {});
                    if (request.method === "GET") {
                        request.body = null;
                    }
                    self._changeReadyState(3);
                    var timer;
                    self.timeout = self.timeout || 0;
                    if (self.timeout > 0) {
                        timer = setTimeout(function () {
                            if (self.readyState === 3) {
                                _this._call("onloadend");
                                self._changeReadyState(0);
                                self._call("ontimeout");
                            }
                        }, self.timeout);
                    }
                    request.timeout = self.timeout;
                    adapter(request, function (response) {

                        function getAndDelete(key) {
                            var t = response[key];
                            delete response[key];
                            return t;
                        }

                        // If the request has already timeout, return
                        if (self.readyState !== 3) return;
                        clearTimeout(timer);

                        // Make sure the type of status is integer
                        self.status = getAndDelete("statusCode") - 0;

                        var responseText = getAndDelete("responseText");
                        var statusMessage = getAndDelete("statusMessage");

                        // Network error, set the status code 0
                        if (!self.status) {
                            self.statusText = responseText;
                            self._call("onerror", { msg: statusMessage });
                        } else {
                            // Parsing the response headers to array in a object,  because
                            // there may be multiple values with the same header name
                            var responseHeaders = getAndDelete("headers");
                            var headers = {};
                            for (var field in responseHeaders) {
                                var value = responseHeaders[field];
                                var key = field.toLowerCase();
                                // Is array
                                if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
                                    headers[key] = value;
                                } else {
                                    headers[key] = headers[key] || [];
                                    headers[key].push(value);
                                }
                            }
                            var cookies = headers["set-cookie"];
                            if (isBrowser && cookies) {
                                cookies.forEach(function (e) {
                                    // Remove the http-Only property of the  cookie
                                    // so that JavaScript can operate it.
                                    document.cookie = e.replace(/;\s*httpOnly/ig, "");
                                });
                            }
                            self.responseHeaders = headers;
                            // Set the fields of engine from response
                            self.statusText = statusMessage || "";
                            self.response = self.responseText = responseText;
                            self._response = response;
                            self._changeReadyState(4);
                            self._call("onload");
                        }
                        self._call("onloadend");
                    });
                } else {
                    console.error("Ajax require adapter");
                }
            }
        }, {
            key: "setRequestHeader",
            value: function setRequestHeader(key, value) {
                this.requestHeaders[util.trim(key)] = value;
            }
        }, {
            key: "getResponseHeader",
            value: function getResponseHeader(key) {
                return (this.responseHeaders[key.toLowerCase()] || "").toString() || null;
            }
        }, {
            key: "getAllResponseHeaders",
            value: function getAllResponseHeaders() {
                var str = "";
                for (var key in this.responseHeaders) {
                    str += key + ":" + this.getResponseHeader(key) + "\r\n";
                }
                return str || null;
            }
        }, {
            key: "abort",
            value: function abort(msg) {
                this._changeReadyState(0);
                this._call("onerror", { msg: msg });
                this._call("onloadend");
            }
        }], [{
            key: "setAdapter",
            value: function setAdapter(requestAdapter) {
                adapter = requestAdapter;
            }
        }]);

        return AjaxEngine;
    }();

    return AjaxEngine;
}

// learn more about keep-loader: https://github.com/wendux/keep-loader
;
module.exports = EngineWrapper;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

function KEEP(_,cb){cb();}
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var utils = __webpack_require__(0);
var isBrowser = typeof document !== "undefined";

var Fly = function () {
    function Fly(engine) {
        _classCallCheck(this, Fly);

        this.engine = engine || XMLHttpRequest;

        this.default = this; //For typeScript

        /**
         * Add  lock/unlock API for interceptor.
         *
         * Once an request/response interceptor is locked, the incoming request/response
         * will be added to a queue before they enter the interceptor, they will not be
         * continued  until the interceptor is unlocked.
         *
         * @param [interceptor] either is interceptors.request or interceptors.response
         */
        function wrap(interceptor) {
            var resolve;
            var reject;

            function _clear() {
                interceptor.p = resolve = reject = null;
            }

            utils.merge(interceptor, {
                lock: function lock() {
                    if (!resolve) {
                        interceptor.p = new Promise(function (_resolve, _reject) {
                            resolve = _resolve;
                            reject = _reject;
                        });
                    }
                },
                unlock: function unlock() {
                    if (resolve) {
                        resolve();
                        _clear();
                    }
                },
                clear: function clear() {
                    if (reject) {
                        reject("cancel");
                        _clear();
                    }
                }
            });
        }

        var interceptors = this.interceptors = {
            response: {
                use: function use(handler, onerror) {
                    this.handler = handler;
                    this.onerror = onerror;
                }
            },
            request: {
                use: function use(handler) {
                    this.handler = handler;
                }
            }
        };

        var irq = interceptors.request;
        var irp = interceptors.response;
        wrap(irp);
        wrap(irq);

        this.config = {
            method: "GET",
            baseURL: "",
            headers: {},
            timeout: 0,
            params: {},
            parseJson: true, // Convert response data to JSON object automatically.
            withCredentials: false
        };
    }

    _createClass(Fly, [{
        key: "request",
        value: function request(url, data, options) {
            var _this = this;

            var engine = new this.engine();
            var contentType = "Content-Type";
            var contentTypeLowerCase = contentType.toLowerCase();
            var interceptors = this.interceptors;
            var requestInterceptor = interceptors.request;
            var responseInterceptor = interceptors.response;
            var requestInterceptorHandler = requestInterceptor.handler;
            var promise = new Promise(function (resolve, reject) {
                if (utils.isObject(url)) {
                    options = url;
                    url = options.url;
                }
                options = options || {};
                options.headers = options.headers || {};

                function isPromise(p) {
                    // some  polyfill implementation of Promise may be not standard,
                    // so, we test by duck-typing
                    return p && p.then && p.catch;
                }

                /**
                 * If the request/response interceptor has been locked，
                 * the new request/response will enter a queue. otherwise, it will be performed directly.
                 * @param [promise] if the promise exist, means the interceptor is  locked.
                 * @param [callback]
                 */
                function enqueueIfLocked(promise, callback) {
                    if (promise) {
                        promise.then(function () {
                            callback();
                        });
                    } else {
                        callback();
                    }
                }

                // make the http request
                function makeRequest(options) {
                    data = options.body;
                    // Normalize the request url
                    url = utils.trim(options.url);
                    var baseUrl = utils.trim(options.baseURL || "");
                    if (!url && isBrowser && !baseUrl) url = location.href;
                    if (url.indexOf("http") !== 0) {
                        var isAbsolute = url[0] === "/";
                        if (!baseUrl && isBrowser) {
                            var arr = location.pathname.split("/");
                            arr.pop();
                            baseUrl = location.protocol + "//" + location.host + (isAbsolute ? "" : arr.join("/"));
                        }
                        if (baseUrl[baseUrl.length - 1] !== "/") {
                            baseUrl += "/";
                        }
                        url = baseUrl + (isAbsolute ? url.substr(1) : url);
                        if (isBrowser) {

                            // Normalize the url which contains the ".." or ".", such as
                            // "http://xx.com/aa/bb/../../xx" to "http://xx.com/xx" .
                            var t = document.createElement("a");
                            t.href = url;
                            url = t.href;
                        }
                    }

                    var responseType = utils.trim(options.responseType || "");
                    var isGet = options.method === "GET";
                    var dataType = utils.type(data);
                    var params = options.params || {};

                    // merge url params when the method is "GET" (data is object)
                    if (isGet && dataType === "object") {
                        params = utils.merge(data, params);
                    }
                    // encode params to String
                    params = utils.formatParams(params);

                    // save url params
                    var _params = [];
                    if (params) {
                        _params.push(params);
                    }
                    // Add data to url params when the method is "GET" (data is String)
                    if (isGet && data && dataType === "string") {
                        _params.push(data);
                    }

                    // make the final url
                    if (_params.length > 0) {
                        url += (url.indexOf("?") === -1 ? "?" : "&") + _params.join("&");
                    }

                    engine.open(options.method, url);

                    // try catch for ie >=9
                    try {
                        engine.withCredentials = !!options.withCredentials;
                        engine.timeout = options.timeout || 0;
                        if (responseType !== "stream") {
                            engine.responseType = responseType;
                        }
                    } catch (e) {}

                    var customContentType = options.headers[contentType] || options.headers[contentTypeLowerCase];

                    // default content type
                    var _contentType = "application/x-www-form-urlencoded";
                    // If the request data is json object, transforming it  to json string,
                    // and set request content-type to "json". In browser,  the data will
                    // be sent as RequestBody instead of FormData
                    if (utils.trim((customContentType || "").toLowerCase()) === _contentType) {
                        data = utils.formatParams(data);
                    } else if (!utils.isFormData(data) && ["object", "array"].indexOf(utils.type(data)) !== -1) {
                        _contentType = 'application/json;charset=utf-8';
                        data = JSON.stringify(data);
                    }
                    //If user doesn't set content-type, set default.
                    if (!customContentType) {
                        options.headers[contentType] = _contentType;
                    }

                    for (var k in options.headers) {
                        if (k === contentType && utils.isFormData(data)) {
                            // Delete the content-type, Let the browser set it
                            delete options.headers[k];
                        } else {
                            try {
                                // In browser environment, some header fields are readonly,
                                // write will cause the exception .
                                engine.setRequestHeader(k, options.headers[k]);
                            } catch (e) {}
                        }
                    }

                    function onresult(handler, data, type) {
                        enqueueIfLocked(responseInterceptor.p, function () {
                            if (handler) {
                                //如果失败，添加请求信息
                                if (type) {
                                    data.request = options;
                                }
                                var ret = handler.call(responseInterceptor, data, Promise);
                                data = ret === undefined ? data : ret;
                            }
                            if (!isPromise(data)) {
                                data = Promise[type === 0 ? "resolve" : "reject"](data);
                            }
                            data.then(function (d) {
                                resolve(d);
                            }).catch(function (e) {
                                reject(e);
                            });
                        });
                    }

                    function onerror(e) {
                        e.engine = engine;
                        onresult(responseInterceptor.onerror, e, -1);
                    }

                    function Err(msg, status) {
                        this.message = msg;
                        this.status = status;
                    }

                    engine.onload = function () {
                        // The xhr of IE9 has not response field
                        var response = engine.response || engine.responseText;
                        if (response && options.parseJson && (engine.getResponseHeader(contentType) || "").indexOf("json") !== -1
                        // Some third engine implementation may transform the response text to json object automatically,
                        // so we should test the type of response before transforming it
                        && !utils.isObject(response)) {
                            response = JSON.parse(response);
                        }

                        var headers = engine.responseHeaders;
                        // In browser
                        if (!headers) {
                            headers = {};
                            var items = (engine.getAllResponseHeaders() || "").split("\r\n");
                            items.pop();
                            items.forEach(function (e) {
                                if (!e) return;
                                var key = e.split(":")[0];
                                headers[key] = engine.getResponseHeader(key);
                            });
                        }
                        var status = engine.status;
                        var statusText = engine.statusText;
                        var data = { data: response, headers: headers, status: status, statusText: statusText };
                        // The _response filed of engine is set in  adapter which be called in engine-wrapper.js
                        utils.merge(data, engine._response);
                        if (status >= 200 && status < 300 || status === 304) {
                            data.engine = engine;
                            data.request = options;
                            onresult(responseInterceptor.handler, data, 0);
                        } else {
                            var e = new Err(statusText, status);
                            e.response = data;
                            onerror(e);
                        }
                    };

                    engine.onerror = function (e) {
                        onerror(new Err(e.msg || "Network Error", 0));
                    };

                    engine.ontimeout = function () {
                        onerror(new Err("timeout [ " + engine.timeout + "ms ]", 1));
                    };
                    engine._options = options;
                    setTimeout(function () {
                        engine.send(isGet ? null : data);
                    }, 0);
                }

                enqueueIfLocked(requestInterceptor.p, function () {
                    utils.merge(options, _this.config);
                    var headers = options.headers;
                    headers[contentType] = headers[contentType] || headers[contentTypeLowerCase] || "";
                    delete headers[contentTypeLowerCase];
                    options.body = data || options.body;
                    url = utils.trim(url || "");
                    options.method = options.method.toUpperCase();
                    options.url = url;
                    var ret = options;
                    if (requestInterceptorHandler) {
                        ret = requestInterceptorHandler.call(requestInterceptor, options, Promise) || options;
                    }
                    if (!isPromise(ret)) {
                        ret = Promise.resolve(ret);
                    }
                    ret.then(function (d) {
                        //if options continue
                        if (d === options) {
                            makeRequest(d);
                        } else {
                            resolve(d);
                        }
                    }, function (err) {
                        reject(err);
                    });
                });
            });
            promise.engine = engine;
            return promise;
        }
    }, {
        key: "all",
        value: function all(promises) {
            return Promise.all(promises);
        }
    }, {
        key: "spread",
        value: function spread(callback) {
            return function (arr) {
                return callback.apply(null, arr);
            };
        }
    }]);

    return Fly;
}();

//For typeScript


Fly.default = Fly;

["get", "post", "put", "patch", "head", "delete"].forEach(function (e) {
    Fly.prototype[e] = function (url, data, option) {
        return this.request(url, data, utils.merge({ method: e }, option));
    };
});
        ["lock", "unlock", "clear"].forEach(function (e) {
            Fly.prototype[e] = function () {
                this.interceptors.request[e]();
            };
        });
// Learn more about keep-loader: https://github.com/wendux/keep-loader
;
module.exports = Fly;

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//hap adapter
module.exports = function (fetch) {
    return function (request, responseCallback) {
        request.data = request.body;
        request.header = request.headers;
        request.complete = function (ret) {
            if ((typeof ret === "undefined" ? "undefined" : _typeof(ret)) !== "object") {
                ret = {
                    code: 0,
                    msg: ret
                };
            }
            responseCallback({
                statusCode: ret.code || 0,
                responseText: ret.data,
                headers: ret.headers,
                statusMessage: ret.msg
            });
        };
        fetch.fetch(request);
    };
};

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//quick app entry
var Fly = __webpack_require__(2);
var EngineWrapper = __webpack_require__(1);
var adapter = __webpack_require__(4);
module.exports = function (fetch) {
    var hapEngine = EngineWrapper(adapter(fetch));
    return new Fly(hapEngine);
};

/***/ })
/******/ ]);
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRcXFZpZXdQZXJzb25hbFxccGVyc29uYWwuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmViYmI1ZTY3YWU4NzhlMDVkMjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ZpZXdQZXJzb25hbC9wZXJzb25hbC51eCIsIndlYnBhY2s6Ly8vLi9zcmMvVmlld1BlcnNvbmFsL3BlcnNvbmFsLnV4P2E0NWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ZpZXdQZXJzb25hbC9wZXJzb25hbC51eD84YjQ5Iiwid2VicGFjazovLy8uL3NyYy9WaWV3UGVyc29uYWwvcGVyc29uYWwudXg/NjcxNyIsIndlYnBhY2s6Ly8vLi9zcmMvZmV0Y2gvcGVyc29uYWxBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZseWlvL2Rpc3QvbnBtL2hhcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNmViYmI1ZTY3YWU4NzhlMDVkMjUiLCJ2YXIgJGFwcF90ZW1wbGF0ZSQgPSByZXF1aXJlKFwiISFkOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBGYXN0QXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1qc29uLWxvYWRlci5qcyFkOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBGYXN0QXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS10ZW1wbGF0ZS1sb2FkZXIuanMhZDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgRmFzdEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9wZXJzb25hbC51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhZDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgRmFzdEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcZmEtanNvbi1sb2FkZXIuanMhZDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgRmFzdEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWY6XFxcXGd1YW5naHVvd2FuZ1xcXFxjb20uZ2guZmFzdFxcXFxzcmNcXFxcVmlld1BlcnNvbmFsXFxcXHBlcnNvbmFsLnV4IWQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIEZhc3RBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1mOlxcXFxndWFuZ2h1b3dhbmdcXFxcY29tLmdoLmZhc3RcXFxcc3JjXFxcXFZpZXdQZXJzb25hbFxcXFxwZXJzb25hbC51eCEuL3BlcnNvbmFsLnV4XCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEhZDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgRmFzdEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcZmEtc2NyaXB0LWxvYWRlci5qcyFkOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBGYXN0QXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1hY2Nlc3MtbG9hZGVyLmpzIWQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIEZhc3RBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlcj9wcmVzZXRzW109ZDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgRmFzdEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVudiZwcmVzZXRzPWQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIEZhc3RBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lbnYmcGx1Z2luc1tdPWQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIEZhc3RBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGpzeC1sb2FkZXIuanMmcGx1Z2lucz1kOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBGYXN0QXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxqc3gtbG9hZGVyLmpzJmNvbW1lbnRzPWZhbHNlIWQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIEZhc3RBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3BlcnNvbmFsLnV4XCIpXG5cbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvcGVyc29uYWwnLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuXG4kYXBwX2Jvb3RzdHJhcCQoJ0BhcHAtY29tcG9uZW50L3BlcnNvbmFsJyx7IHBhY2thZ2VyTmFtZTonZmEtdG9vbGtpdCcsIHBhY2thZ2VyVmVyc2lvbjogJzEuMC42LVN0YWJsZS4zMDAnfSlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9WaWV3UGVyc29uYWwvcGVyc29uYWwudXhcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJjb250YWluZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInZhbHVlXCI6IFwi5Liq5Lq65Lit5b+DXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidmFsdWVcIjogXCLkuKrkurrkuK3lv4NcIlxuICAgICAgfVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGQ6L1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIWQ6L1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXRlbXBsYXRlLWxvYWRlci5qcyFkOi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEuL3NyYy9WaWV3UGVyc29uYWwvcGVyc29uYWwudXhcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIuY29udGFpbmVyXCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcIi5wYWdlLXRpdGxlLXdyYXBcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjUwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI4MHB4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnBhZ2UtdGl0bGVcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjMwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzMHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjQwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjQwcHhcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiI2JiYmJiYlwiLFxuICAgIFwiYm9yZGVyUmlnaHRDb2xvclwiOiBcIiNiYmJiYmJcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI2JiYmJiYlwiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwiI2JiYmJiYlwiLFxuICAgIFwiY29sb3JcIjogXCIjYmJiYmJiXCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjJweFwiXG4gIH0sXG4gIFwiLmJ0blwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI4MHB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjVweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI2MHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNjBweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNTBweFwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMwcHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwZmFlZmZcIlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZDovUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhZDovUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWY6L2d1YW5naHVvd2FuZy9jb20uZ2guZmFzdC9zcmMvVmlld1BlcnNvbmFsL3BlcnNvbmFsLnV4IWQ6L1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1mOi9ndWFuZ2h1b3dhbmcvY29tLmdoLmZhc3Qvc3JjL1ZpZXdQZXJzb25hbC9wZXJzb25hbC51eCEuL3NyYy9WaWV3UGVyc29uYWwvcGVyc29uYWwudXhcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgJGFwcF9yZXF1aXJlJCl7J3VzZSBzdHJpY3QnO1xuXG52YXIgX3N5c3RlbSA9ICRhcHBfcmVxdWlyZSQoJ0BhcHAtbW9kdWxlL3N5c3RlbS5wcm9tcHQnKTtcblxudmFyIF9zeXN0ZW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3lzdGVtKTtcblxudmFyIF9wZXJzb25hbEFwaSA9IHJlcXVpcmUoJy4uL2ZldGNoL3BlcnNvbmFsQXBpJyk7XG5cbnZhciBfcGVyc29uYWxBcGkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGVyc29uYWxBcGkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHJvcHM6IHt9LFxuICBvbkluaXQ6IGZ1bmN0aW9uIG9uSW5pdCgpIHt9XG59O1xudmFyIG1vZHVsZU93biA9IGV4cG9ydHMuZGVmYXVsdCB8fCBtb2R1bGUuZXhwb3J0cztcbnZhciBhY2Nlc3NvcnMgPSBbJ3B1YmxpYycsICdwcm90ZWN0ZWQnLCAncHJpdmF0ZSddO1xuaWYgKG1vZHVsZU93bi5kYXRhICYmIGFjY2Vzc29ycy5zb21lKGZ1bmN0aW9uIChhY2MpIHtcbiAgICByZXR1cm4gbW9kdWxlT3duW2FjY107XG4gIH0pKSB7XG4gIHRocm93IG5ldyBFcnJvcign6aG16Z2iVk3lr7nosaHkuK3lsZ7mgKdkYXRh5LiN5Y+v5LiOcHVibGljLCBwcm90ZWN0ZWQsIHByaXZhdGXlkIzml7blrZjlnKjvvIzor7fkvb/nlKhwdWJsaWPmm7/ku6NkYXRh77yBJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ+mhtemdolZN5a+56LGh5Lit55qE5bGe5oCnJyArIGFjYyArICfnmoTlgLzkuI3og73kvb/lh73mlbDvvIzor7fkvb/nlKjlr7nosaEnKTtcbiAgICB9XG4gIH0pO1xufX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkOi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zY3JpcHQtbG9hZGVyLmpzIWQ6L1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWFjY2Vzcy1sb2FkZXIuanMhZDovUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYj9wcmVzZXRzW109ZDovUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LWVudiZwcmVzZXRzPWQ6L1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1lbnYmcGx1Z2luc1tdPWQ6L1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2pzeC1sb2FkZXIuanMmcGx1Z2lucz1kOi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9qc3gtbG9hZGVyLmpzJmNvbW1lbnRzPWZhbHNlIWQ6L1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3NyYy9WaWV3UGVyc29uYWwvcGVyc29uYWwudXhcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJcbnZhciBmZXRjaCA9ICRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0uZmV0Y2hcIik7XG52YXIgRmx5ID0gcmVxdWlyZShcImZseWlvL2Rpc3QvbnBtL2hhcFwiKTtcbnZhciBmbHkgPSBuZXcgRmx5KGZldGNoKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gIC8qKummlumhteaVsOaNruaOpeWPoyB3cml0ZSB5b3VyIGNvZGUuLi4uICovXG5cbiAgLyoq5oiR55qE55u05pKt5pWw5o2u5o6l5Y+jIHdyaXRlIHlvdXIgY29kZS4uLi4gKi9cblxuICAvKirkuKrkurrkuK3lv4PmlbDmja7mjqXlj6Mgd3JpdGUgeW91ciBjb2RlLi4uLiAqL1xuXG4gIC8qKuiOt+WPlueUqOaIt+WfuuacrOS/oeaBryovXG4gIGdldFVzZXJCYXNlSW5mbyhwYXJhbXMpIHtcbiAgICBjb25zb2xlLmxvZygn6I635Y+W55So5oi35L+h5oGvJyk7XG4gICAgZmx5LnBvc3QoJy91c2VyL2Jhc2VJbmZvJywgcGFyYW1zKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgY29uc29sZS5sb2coJ+W3suiOt+WPluWIsOeUqOaIt+S/oeaBrycpO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coJ+iOt+WPlueUqOaIt+S/oeaBr+WHuumUmS4uLicpO1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pO1xuICB9XG5cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZmV0Y2gvcGVyc29uYWxBcGkuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOSk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgdHlwZTogZnVuY3Rpb24gdHlwZShvYikge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iKS5zbGljZSg4LCAtMSkudG9Mb3dlckNhc2UoKTtcbiAgICB9LFxuICAgIGlzT2JqZWN0OiBmdW5jdGlvbiBpc09iamVjdChvYiwgcmVhbCkge1xuICAgICAgICBpZiAocmVhbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHlwZShvYikgPT09IFwib2JqZWN0XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gb2IgJiYgKHR5cGVvZiBvYiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob2IpKSA9PT0gJ29iamVjdCc7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGlzRm9ybURhdGE6IGZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhO1xuICAgIH0sXG4gICAgdHJpbTogZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oXlxccyopfChcXHMqJCkvZywgJycpO1xuICAgIH0sXG4gICAgZW5jb2RlOiBmdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5yZXBsYWNlKC8lNDAvZ2ksICdAJykucmVwbGFjZSgvJTNBL2dpLCAnOicpLnJlcGxhY2UoLyUyNC9nLCAnJCcpLnJlcGxhY2UoLyUyQy9naSwgJywnKS5yZXBsYWNlKC8lMjAvZywgJysnKS5yZXBsYWNlKC8lNUIvZ2ksICdbJykucmVwbGFjZSgvJTVEL2dpLCAnXScpO1xuICAgIH0sXG4gICAgZm9ybWF0UGFyYW1zOiBmdW5jdGlvbiBmb3JtYXRQYXJhbXMoZGF0YSkge1xuICAgICAgICB2YXIgc3RyID0gXCJcIjtcbiAgICAgICAgdmFyIGZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICBpZiAoKHR5cGVvZiBkYXRhID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihkYXRhKSkgIT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gX2VuY29kZShzdWIsIHBhdGgpIHtcbiAgICAgICAgICAgIHZhciBlbmNvZGUgPSB0aGF0LmVuY29kZTtcbiAgICAgICAgICAgIHZhciB0eXBlID0gdGhhdC50eXBlKHN1Yik7XG4gICAgICAgICAgICBpZiAodHlwZSA9PSBcImFycmF5XCIpIHtcbiAgICAgICAgICAgICAgICBzdWIuZm9yRWFjaChmdW5jdGlvbiAoZSwgaSkge1xuICAgICAgICAgICAgICAgICAgICBfZW5jb2RlKGUsIHBhdGggKyBcIiU1QiU1RFwiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHN1Yikge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2VuY29kZShzdWJba2V5XSwgcGF0aCArIFwiJTVCXCIgKyBlbmNvZGUoa2V5KSArIFwiJTVEXCIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2VuY29kZShzdWJba2V5XSwgZW5jb2RlKGtleSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIWZpcnN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ciArPSBcIiZcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmlyc3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzdHIgKz0gcGF0aCArIFwiPVwiICsgZW5jb2RlKHN1Yik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfZW5jb2RlKGRhdGEsIFwiXCIpO1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH0sXG5cbiAgICAvLyBEbyBub3Qgb3ZlcndyaXRlIGV4aXN0aW5nIGF0dHJpYnV0ZXNcbiAgICBtZXJnZTogZnVuY3Rpb24gbWVyZ2UoYSwgYikge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gYikge1xuICAgICAgICAgICAgaWYgKCFhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBhW2tleV0gPSBiW2tleV07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNPYmplY3QoYltrZXldLCAxKSAmJiB0aGlzLmlzT2JqZWN0KGFba2V5XSwgMSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lcmdlKGFba2V5XSwgYltrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYTtcbiAgICB9XG59O1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuZnVuY3Rpb24gS0VFUChfLGNiKXtjYigpO31cblwidXNlIHN0cmljdFwiO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qXG4gKiBhdXRob3I6IHdlbmR1XG4gKiBlbWFpbDogODI0NzgzMTQ2QHFxLmNvbVxuICoqL1xuXG52YXIgdXRpbCA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG52YXIgaXNCcm93c2VyID0gdHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiO1xuXG4vL0VuZ2luZVdyYXBwZXIgY2FuIGhlbHAgIGdlbmVyYXRpbmcgIGEgIGh0dHAgZW5naW5lIHF1aWNrbHkgdGhyb3VnaCBhIGFkYXB0ZXJcbmZ1bmN0aW9uIEVuZ2luZVdyYXBwZXIoYWRhcHRlcikge1xuICAgIHZhciBBamF4RW5naW5lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBBamF4RW5naW5lKCkge1xuICAgICAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFqYXhFbmdpbmUpO1xuXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RIZWFkZXJzID0ge307XG4gICAgICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSAwO1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0ID0gMDsgLy8gMCBzdGFuZHMgZm9yIG5vIHRpbWVvdXRcbiAgICAgICAgICAgIHRoaXMucmVzcG9uc2VVUkwgPSBcIlwiO1xuICAgICAgICAgICAgdGhpcy5yZXNwb25zZUhlYWRlcnMgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9jcmVhdGVDbGFzcyhBamF4RW5naW5lLCBbe1xuICAgICAgICAgICAga2V5OiBcIl9jYWxsXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2NhbGwobmFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXNbbmFtZV0gJiYgdGhpc1tuYW1lXS5hcHBseSh0aGlzLCBbXS5zcGxpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcIl9jaGFuZ2VSZWFkeVN0YXRlXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2NoYW5nZVJlYWR5U3RhdGUoc3RhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWxsKFwib25yZWFkeXN0YXRlY2hhbmdlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwib3BlblwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9wZW4obWV0aG9kLCB1cmwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgICAgICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSBsb2NhdGlvbi5ocmVmO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IHV0aWwudHJpbSh1cmwpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodXJsLmluZGV4T2YoXCJodHRwXCIpICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3JtYWxpemUgdGhlIHJlcXVlc3QgdXJsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmhyZWYgPSB1cmw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gdC5ocmVmO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2VVUkwgPSB1cmw7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlUmVhZHlTdGF0ZSgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcInNlbmRcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZW5kKGFyZykge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICBhcmcgPSBhcmcgfHwgbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb29raWUgPSBkb2N1bWVudC5jb29raWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb29raWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdEhlYWRlcnMuY29va2llID0gY29va2llO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICBpZiAoYWRhcHRlcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogc2VsZi5tZXRob2QsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHNlbGYucmVzcG9uc2VVUkwsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBzZWxmLnJlcXVlc3RIZWFkZXJzIHx8IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogYXJnXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHV0aWwubWVyZ2UocmVxdWVzdCwgc2VsZi5fb3B0aW9ucyB8fCB7fSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0Lm1ldGhvZCA9PT0gXCJHRVRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5ib2R5ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZWxmLl9jaGFuZ2VSZWFkeVN0YXRlKDMpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGltZXI7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYudGltZW91dCA9IHNlbGYudGltZW91dCB8fCAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi50aW1lb3V0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5yZWFkeVN0YXRlID09PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9jYWxsKFwib25sb2FkZW5kXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9jaGFuZ2VSZWFkeVN0YXRlKDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9jYWxsKFwib250aW1lb3V0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHNlbGYudGltZW91dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC50aW1lb3V0ID0gc2VsZi50aW1lb3V0O1xuICAgICAgICAgICAgICAgICAgICBhZGFwdGVyKHJlcXVlc3QsIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXRBbmREZWxldGUoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSByZXNwb25zZVtrZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZXNwb25zZVtrZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcmVxdWVzdCBoYXMgYWxyZWFkeSB0aW1lb3V0LCByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLnJlYWR5U3RhdGUgIT09IDMpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgdHlwZSBvZiBzdGF0dXMgaXMgaW50ZWdlclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zdGF0dXMgPSBnZXRBbmREZWxldGUoXCJzdGF0dXNDb2RlXCIpIC0gMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlVGV4dCA9IGdldEFuZERlbGV0ZShcInJlc3BvbnNlVGV4dFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGF0dXNNZXNzYWdlID0gZ2V0QW5kRGVsZXRlKFwic3RhdHVzTWVzc2FnZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTmV0d29yayBlcnJvciwgc2V0IHRoZSBzdGF0dXMgY29kZSAwXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNlbGYuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zdGF0dXNUZXh0ID0gcmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX2NhbGwoXCJvbmVycm9yXCIsIHsgbXNnOiBzdGF0dXNNZXNzYWdlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQYXJzaW5nIHRoZSByZXNwb25zZSBoZWFkZXJzIHRvIGFycmF5IGluIGEgb2JqZWN0LCAgYmVjYXVzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZXJlIG1heSBiZSBtdWx0aXBsZSB2YWx1ZXMgd2l0aCB0aGUgc2FtZSBoZWFkZXIgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSBnZXRBbmREZWxldGUoXCJoZWFkZXJzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoZWFkZXJzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZmllbGQgaW4gcmVzcG9uc2VIZWFkZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHJlc3BvbnNlSGVhZGVyc1tmaWVsZF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSBmaWVsZC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJcyBhcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHZhbHVlKSkgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1trZXldID0gaGVhZGVyc1trZXldIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1trZXldLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb29raWVzID0gaGVhZGVyc1tcInNldC1jb29raWVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQnJvd3NlciAmJiBjb29raWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb2tpZXMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBodHRwLU9ubHkgcHJvcGVydHkgb2YgdGhlICBjb29raWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNvIHRoYXQgSmF2YVNjcmlwdCBjYW4gb3BlcmF0ZSBpdC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGUucmVwbGFjZSgvO1xccypodHRwT25seS9pZywgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlc3BvbnNlSGVhZGVycyA9IGhlYWRlcnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2V0IHRoZSBmaWVsZHMgb2YgZW5naW5lIGZyb20gcmVzcG9uc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnN0YXR1c1RleHQgPSBzdGF0dXNNZXNzYWdlIHx8IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yZXNwb25zZSA9IHNlbGYucmVzcG9uc2VUZXh0ID0gcmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX3Jlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fY2hhbmdlUmVhZHlTdGF0ZSg0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9jYWxsKFwib25sb2FkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fY2FsbChcIm9ubG9hZGVuZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkFqYXggcmVxdWlyZSBhZGFwdGVyXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcInNldFJlcXVlc3RIZWFkZXJcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RIZWFkZXJzW3V0aWwudHJpbShrZXkpXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiZ2V0UmVzcG9uc2VIZWFkZXJcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSZXNwb25zZUhlYWRlcihrZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoaXMucmVzcG9uc2VIZWFkZXJzW2tleS50b0xvd2VyQ2FzZSgpXSB8fCBcIlwiKS50b1N0cmluZygpIHx8IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJnZXRBbGxSZXNwb25zZUhlYWRlcnNcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBbGxSZXNwb25zZUhlYWRlcnMoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0ciA9IFwiXCI7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMucmVzcG9uc2VIZWFkZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ciArPSBrZXkgKyBcIjpcIiArIHRoaXMuZ2V0UmVzcG9uc2VIZWFkZXIoa2V5KSArIFwiXFxyXFxuXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBzdHIgfHwgbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcImFib3J0XCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYWJvcnQobXNnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlUmVhZHlTdGF0ZSgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWxsKFwib25lcnJvclwiLCB7IG1zZzogbXNnIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhbGwoXCJvbmxvYWRlbmRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1dLCBbe1xuICAgICAgICAgICAga2V5OiBcInNldEFkYXB0ZXJcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRBZGFwdGVyKHJlcXVlc3RBZGFwdGVyKSB7XG4gICAgICAgICAgICAgICAgYWRhcHRlciA9IHJlcXVlc3RBZGFwdGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XSk7XG5cbiAgICAgICAgcmV0dXJuIEFqYXhFbmdpbmU7XG4gICAgfSgpO1xuXG4gICAgcmV0dXJuIEFqYXhFbmdpbmU7XG59XG5cbi8vIGxlYXJuIG1vcmUgYWJvdXQga2VlcC1sb2FkZXI6IGh0dHBzOi8vZ2l0aHViLmNvbS93ZW5kdXgva2VlcC1sb2FkZXJcbjtcbm1vZHVsZS5leHBvcnRzID0gRW5naW5lV3JhcHBlcjtcblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbmZ1bmN0aW9uIEtFRVAoXyxjYil7Y2IoKTt9XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbnZhciBpc0Jyb3dzZXIgPSB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCI7XG5cbnZhciBGbHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRmx5KGVuZ2luZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRmx5KTtcblxuICAgICAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZSB8fCBYTUxIdHRwUmVxdWVzdDtcblxuICAgICAgICB0aGlzLmRlZmF1bHQgPSB0aGlzOyAvL0ZvciB0eXBlU2NyaXB0XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCAgbG9jay91bmxvY2sgQVBJIGZvciBpbnRlcmNlcHRvci5cbiAgICAgICAgICpcbiAgICAgICAgICogT25jZSBhbiByZXF1ZXN0L3Jlc3BvbnNlIGludGVyY2VwdG9yIGlzIGxvY2tlZCwgdGhlIGluY29taW5nIHJlcXVlc3QvcmVzcG9uc2VcbiAgICAgICAgICogd2lsbCBiZSBhZGRlZCB0byBhIHF1ZXVlIGJlZm9yZSB0aGV5IGVudGVyIHRoZSBpbnRlcmNlcHRvciwgdGhleSB3aWxsIG5vdCBiZVxuICAgICAgICAgKiBjb250aW51ZWQgIHVudGlsIHRoZSBpbnRlcmNlcHRvciBpcyB1bmxvY2tlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIFtpbnRlcmNlcHRvcl0gZWl0aGVyIGlzIGludGVyY2VwdG9ycy5yZXF1ZXN0IG9yIGludGVyY2VwdG9ycy5yZXNwb25zZVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gd3JhcChpbnRlcmNlcHRvcikge1xuICAgICAgICAgICAgdmFyIHJlc29sdmU7XG4gICAgICAgICAgICB2YXIgcmVqZWN0O1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBfY2xlYXIoKSB7XG4gICAgICAgICAgICAgICAgaW50ZXJjZXB0b3IucCA9IHJlc29sdmUgPSByZWplY3QgPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1dGlscy5tZXJnZShpbnRlcmNlcHRvciwge1xuICAgICAgICAgICAgICAgIGxvY2s6IGZ1bmN0aW9uIGxvY2soKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJjZXB0b3IucCA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChfcmVzb2x2ZSwgX3JlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUgPSBfcmVzb2x2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QgPSBfcmVqZWN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHVubG9jazogZnVuY3Rpb24gdW5sb2NrKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2NsZWFyKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiY2FuY2VsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2NsZWFyKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpbnRlcmNlcHRvcnMgPSB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICAgICAgICAgIHJlc3BvbnNlOiB7XG4gICAgICAgICAgICAgICAgdXNlOiBmdW5jdGlvbiB1c2UoaGFuZGxlciwgb25lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uZXJyb3IgPSBvbmVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXF1ZXN0OiB7XG4gICAgICAgICAgICAgICAgdXNlOiBmdW5jdGlvbiB1c2UoaGFuZGxlcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgaXJxID0gaW50ZXJjZXB0b3JzLnJlcXVlc3Q7XG4gICAgICAgIHZhciBpcnAgPSBpbnRlcmNlcHRvcnMucmVzcG9uc2U7XG4gICAgICAgIHdyYXAoaXJwKTtcbiAgICAgICAgd3JhcChpcnEpO1xuXG4gICAgICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgYmFzZVVSTDogXCJcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICAgICAgdGltZW91dDogMCxcbiAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICBwYXJzZUpzb246IHRydWUsIC8vIENvbnZlcnQgcmVzcG9uc2UgZGF0YSB0byBKU09OIG9iamVjdCBhdXRvbWF0aWNhbGx5LlxuICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhGbHksIFt7XG4gICAgICAgIGtleTogXCJyZXF1ZXN0XCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXF1ZXN0KHVybCwgZGF0YSwgb3B0aW9ucykge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIGVuZ2luZSA9IG5ldyB0aGlzLmVuZ2luZSgpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnRUeXBlID0gXCJDb250ZW50LVR5cGVcIjtcbiAgICAgICAgICAgIHZhciBjb250ZW50VHlwZUxvd2VyQ2FzZSA9IGNvbnRlbnRUeXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB2YXIgaW50ZXJjZXB0b3JzID0gdGhpcy5pbnRlcmNlcHRvcnM7XG4gICAgICAgICAgICB2YXIgcmVxdWVzdEludGVyY2VwdG9yID0gaW50ZXJjZXB0b3JzLnJlcXVlc3Q7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2VJbnRlcmNlcHRvciA9IGludGVyY2VwdG9ycy5yZXNwb25zZTtcbiAgICAgICAgICAgIHZhciByZXF1ZXN0SW50ZXJjZXB0b3JIYW5kbGVyID0gcmVxdWVzdEludGVyY2VwdG9yLmhhbmRsZXI7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNPYmplY3QodXJsKSkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0gdXJsO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSBvcHRpb25zLnVybDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzIHx8IHt9O1xuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaXNQcm9taXNlKHApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc29tZSAgcG9seWZpbGwgaW1wbGVtZW50YXRpb24gb2YgUHJvbWlzZSBtYXkgYmUgbm90IHN0YW5kYXJkLFxuICAgICAgICAgICAgICAgICAgICAvLyBzbywgd2UgdGVzdCBieSBkdWNrLXR5cGluZ1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcCAmJiBwLnRoZW4gJiYgcC5jYXRjaDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBJZiB0aGUgcmVxdWVzdC9yZXNwb25zZSBpbnRlcmNlcHRvciBoYXMgYmVlbiBsb2NrZWTvvIxcbiAgICAgICAgICAgICAgICAgKiB0aGUgbmV3IHJlcXVlc3QvcmVzcG9uc2Ugd2lsbCBlbnRlciBhIHF1ZXVlLiBvdGhlcndpc2UsIGl0IHdpbGwgYmUgcGVyZm9ybWVkIGRpcmVjdGx5LlxuICAgICAgICAgICAgICAgICAqIEBwYXJhbSBbcHJvbWlzZV0gaWYgdGhlIHByb21pc2UgZXhpc3QsIG1lYW5zIHRoZSBpbnRlcmNlcHRvciBpcyAgbG9ja2VkLlxuICAgICAgICAgICAgICAgICAqIEBwYXJhbSBbY2FsbGJhY2tdXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZW5xdWV1ZUlmTG9ja2VkKHByb21pc2UsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBtYWtlIHRoZSBodHRwIHJlcXVlc3RcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBtYWtlUmVxdWVzdChvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBvcHRpb25zLmJvZHk7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5vcm1hbGl6ZSB0aGUgcmVxdWVzdCB1cmxcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gdXRpbHMudHJpbShvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBiYXNlVXJsID0gdXRpbHMudHJpbShvcHRpb25zLmJhc2VVUkwgfHwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdXJsICYmIGlzQnJvd3NlciAmJiAhYmFzZVVybCkgdXJsID0gbG9jYXRpb24uaHJlZjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVybC5pbmRleE9mKFwiaHR0cFwiKSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzQWJzb2x1dGUgPSB1cmxbMF0gPT09IFwiL1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFiYXNlVXJsICYmIGlzQnJvd3Nlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSBsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3QgKyAoaXNBYnNvbHV0ZSA/IFwiXCIgOiBhcnIuam9pbihcIi9cIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhc2VVcmxbYmFzZVVybC5sZW5ndGggLSAxXSAhPT0gXCIvXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlVXJsICs9IFwiL1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gYmFzZVVybCArIChpc0Fic29sdXRlID8gdXJsLnN1YnN0cigxKSA6IHVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNCcm93c2VyKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3JtYWxpemUgdGhlIHVybCB3aGljaCBjb250YWlucyB0aGUgXCIuLlwiIG9yIFwiLlwiLCBzdWNoIGFzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gXCJodHRwOi8veHguY29tL2FhL2JiLy4uLy4uL3h4XCIgdG8gXCJodHRwOi8veHguY29tL3h4XCIgLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5ocmVmID0gdXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9IHQuaHJlZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25zZVR5cGUgPSB1dGlscy50cmltKG9wdGlvbnMucmVzcG9uc2VUeXBlIHx8IFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXNHZXQgPSBvcHRpb25zLm1ldGhvZCA9PT0gXCJHRVRcIjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFUeXBlID0gdXRpbHMudHlwZShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IG9wdGlvbnMucGFyYW1zIHx8IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIG1lcmdlIHVybCBwYXJhbXMgd2hlbiB0aGUgbWV0aG9kIGlzIFwiR0VUXCIgKGRhdGEgaXMgb2JqZWN0KVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNHZXQgJiYgZGF0YVR5cGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcyA9IHV0aWxzLm1lcmdlKGRhdGEsIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gZW5jb2RlIHBhcmFtcyB0byBTdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zID0gdXRpbHMuZm9ybWF0UGFyYW1zKHBhcmFtcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gc2F2ZSB1cmwgcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIHZhciBfcGFyYW1zID0gW107XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9wYXJhbXMucHVzaChwYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCBkYXRhIHRvIHVybCBwYXJhbXMgd2hlbiB0aGUgbWV0aG9kIGlzIFwiR0VUXCIgKGRhdGEgaXMgU3RyaW5nKVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNHZXQgJiYgZGF0YSAmJiBkYXRhVHlwZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3BhcmFtcy5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSB0aGUgZmluYWwgdXJsXG4gICAgICAgICAgICAgICAgICAgIGlmIChfcGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCArPSAodXJsLmluZGV4T2YoXCI/XCIpID09PSAtMSA/IFwiP1wiIDogXCImXCIpICsgX3BhcmFtcy5qb2luKFwiJlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZS5vcGVuKG9wdGlvbnMubWV0aG9kLCB1cmwpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHRyeSBjYXRjaCBmb3IgaWUgPj05XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmdpbmUud2l0aENyZWRlbnRpYWxzID0gISFvcHRpb25zLndpdGhDcmVkZW50aWFscztcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZ2luZS50aW1lb3V0ID0gb3B0aW9ucy50aW1lb3V0IHx8IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VUeXBlICE9PSBcInN0cmVhbVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5naW5lLnJlc3BvbnNlVHlwZSA9IHJlc3BvbnNlVHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cblxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VzdG9tQ29udGVudFR5cGUgPSBvcHRpb25zLmhlYWRlcnNbY29udGVudFR5cGVdIHx8IG9wdGlvbnMuaGVhZGVyc1tjb250ZW50VHlwZUxvd2VyQ2FzZV07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gZGVmYXVsdCBjb250ZW50IHR5cGVcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9jb250ZW50VHlwZSA9IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSByZXF1ZXN0IGRhdGEgaXMganNvbiBvYmplY3QsIHRyYW5zZm9ybWluZyBpdCAgdG8ganNvbiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgIC8vIGFuZCBzZXQgcmVxdWVzdCBjb250ZW50LXR5cGUgdG8gXCJqc29uXCIuIEluIGJyb3dzZXIsICB0aGUgZGF0YSB3aWxsXG4gICAgICAgICAgICAgICAgICAgIC8vIGJlIHNlbnQgYXMgUmVxdWVzdEJvZHkgaW5zdGVhZCBvZiBGb3JtRGF0YVxuICAgICAgICAgICAgICAgICAgICBpZiAodXRpbHMudHJpbSgoY3VzdG9tQ29udGVudFR5cGUgfHwgXCJcIikudG9Mb3dlckNhc2UoKSkgPT09IF9jb250ZW50VHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IHV0aWxzLmZvcm1hdFBhcmFtcyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdXRpbHMuaXNGb3JtRGF0YShkYXRhKSAmJiBbXCJvYmplY3RcIiwgXCJhcnJheVwiXS5pbmRleE9mKHV0aWxzLnR5cGUoZGF0YSkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9JZiB1c2VyIGRvZXNuJ3Qgc2V0IGNvbnRlbnQtdHlwZSwgc2V0IGRlZmF1bHQuXG4gICAgICAgICAgICAgICAgICAgIGlmICghY3VzdG9tQ29udGVudFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuaGVhZGVyc1tjb250ZW50VHlwZV0gPSBfY29udGVudFR5cGU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrIGluIG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGsgPT09IGNvbnRlbnRUeXBlICYmIHV0aWxzLmlzRm9ybURhdGEoZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEZWxldGUgdGhlIGNvbnRlbnQtdHlwZSwgTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLmhlYWRlcnNba107XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEluIGJyb3dzZXIgZW52aXJvbm1lbnQsIHNvbWUgaGVhZGVyIGZpZWxkcyBhcmUgcmVhZG9ubHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdyaXRlIHdpbGwgY2F1c2UgdGhlIGV4Y2VwdGlvbiAuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZ2luZS5zZXRSZXF1ZXN0SGVhZGVyKGssIG9wdGlvbnMuaGVhZGVyc1trXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG9ucmVzdWx0KGhhbmRsZXIsIGRhdGEsIHR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVucXVldWVJZkxvY2tlZChyZXNwb25zZUludGVyY2VwdG9yLnAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WmguaenOWksei0pe+8jOa3u+WKoOivt+axguS/oeaBr1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5yZXF1ZXN0ID0gb3B0aW9ucztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmV0ID0gaGFuZGxlci5jYWxsKHJlc3BvbnNlSW50ZXJjZXB0b3IsIGRhdGEsIFByb21pc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gcmV0ID09PSB1bmRlZmluZWQgPyBkYXRhIDogcmV0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzUHJvbWlzZShkYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gUHJvbWlzZVt0eXBlID09PSAwID8gXCJyZXNvbHZlXCIgOiBcInJlamVjdFwiXShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS50aGVuKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBvbmVycm9yKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuZW5naW5lID0gZW5naW5lO1xuICAgICAgICAgICAgICAgICAgICAgICAgb25yZXN1bHQocmVzcG9uc2VJbnRlcmNlcHRvci5vbmVycm9yLCBlLCAtMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBFcnIobXNnLCBzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IG1zZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZW5naW5lLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSB4aHIgb2YgSUU5IGhhcyBub3QgcmVzcG9uc2UgZmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGVuZ2luZS5yZXNwb25zZSB8fCBlbmdpbmUucmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlICYmIG9wdGlvbnMucGFyc2VKc29uICYmIChlbmdpbmUuZ2V0UmVzcG9uc2VIZWFkZXIoY29udGVudFR5cGUpIHx8IFwiXCIpLmluZGV4T2YoXCJqc29uXCIpICE9PSAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU29tZSB0aGlyZCBlbmdpbmUgaW1wbGVtZW50YXRpb24gbWF5IHRyYW5zZm9ybSB0aGUgcmVzcG9uc2UgdGV4dCB0byBqc29uIG9iamVjdCBhdXRvbWF0aWNhbGx5LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc28gd2Ugc2hvdWxkIHRlc3QgdGhlIHR5cGUgb2YgcmVzcG9uc2UgYmVmb3JlIHRyYW5zZm9ybWluZyBpdFxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgIXV0aWxzLmlzT2JqZWN0KHJlc3BvbnNlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoZWFkZXJzID0gZW5naW5lLnJlc3BvbnNlSGVhZGVycztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEluIGJyb3dzZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGVhZGVycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbXMgPSAoZW5naW5lLmdldEFsbFJlc3BvbnNlSGVhZGVycygpIHx8IFwiXCIpLnNwbGl0KFwiXFxyXFxuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSBlLnNwbGl0KFwiOlwiKVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1trZXldID0gZW5naW5lLmdldFJlc3BvbnNlSGVhZGVyKGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdHVzID0gZW5naW5lLnN0YXR1cztcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGF0dXNUZXh0ID0gZW5naW5lLnN0YXR1c1RleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHsgZGF0YTogcmVzcG9uc2UsIGhlYWRlcnM6IGhlYWRlcnMsIHN0YXR1czogc3RhdHVzLCBzdGF0dXNUZXh0OiBzdGF0dXNUZXh0IH07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgX3Jlc3BvbnNlIGZpbGVkIG9mIGVuZ2luZSBpcyBzZXQgaW4gIGFkYXB0ZXIgd2hpY2ggYmUgY2FsbGVkIGluIGVuZ2luZS13cmFwcGVyLmpzXG4gICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5tZXJnZShkYXRhLCBlbmdpbmUuX3Jlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMCB8fCBzdGF0dXMgPT09IDMwNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZW5naW5lID0gZW5naW5lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucmVxdWVzdCA9IG9wdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25yZXN1bHQocmVzcG9uc2VJbnRlcmNlcHRvci5oYW5kbGVyLCBkYXRhLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSBuZXcgRXJyKHN0YXR1c1RleHQsIHN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5yZXNwb25zZSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25lcnJvcihlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICBlbmdpbmUub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbmVycm9yKG5ldyBFcnIoZS5tc2cgfHwgXCJOZXR3b3JrIEVycm9yXCIsIDApKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICBlbmdpbmUub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25lcnJvcihuZXcgRXJyKFwidGltZW91dCBbIFwiICsgZW5naW5lLnRpbWVvdXQgKyBcIm1zIF1cIiwgMSkpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBlbmdpbmUuX29wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZ2luZS5zZW5kKGlzR2V0ID8gbnVsbCA6IGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbnF1ZXVlSWZMb2NrZWQocmVxdWVzdEludGVyY2VwdG9yLnAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMubWVyZ2Uob3B0aW9ucywgX3RoaXMuY29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnM7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnNbY29udGVudFR5cGVdID0gaGVhZGVyc1tjb250ZW50VHlwZV0gfHwgaGVhZGVyc1tjb250ZW50VHlwZUxvd2VyQ2FzZV0gfHwgXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGhlYWRlcnNbY29udGVudFR5cGVMb3dlckNhc2VdO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmJvZHkgPSBkYXRhIHx8IG9wdGlvbnMuYm9keTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gdXRpbHMudHJpbSh1cmwgfHwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMubWV0aG9kID0gb3B0aW9ucy5tZXRob2QudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXQgPSBvcHRpb25zO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVxdWVzdEludGVyY2VwdG9ySGFuZGxlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0ID0gcmVxdWVzdEludGVyY2VwdG9ySGFuZGxlci5jYWxsKHJlcXVlc3RJbnRlcmNlcHRvciwgb3B0aW9ucywgUHJvbWlzZSkgfHwgb3B0aW9ucztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzUHJvbWlzZShyZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXQgPSBQcm9taXNlLnJlc29sdmUocmV0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXQudGhlbihmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9pZiBvcHRpb25zIGNvbnRpbnVlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZCA9PT0gb3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ha2VSZXF1ZXN0KGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHByb21pc2UuZW5naW5lID0gZW5naW5lO1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJhbGxcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInNwcmVhZFwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGFycikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBGbHk7XG59KCk7XG5cbi8vRm9yIHR5cGVTY3JpcHRcblxuXG5GbHkuZGVmYXVsdCA9IEZseTtcblxuW1wiZ2V0XCIsIFwicG9zdFwiLCBcInB1dFwiLCBcInBhdGNoXCIsIFwiaGVhZFwiLCBcImRlbGV0ZVwiXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgRmx5LnByb3RvdHlwZVtlXSA9IGZ1bmN0aW9uICh1cmwsIGRhdGEsIG9wdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHVybCwgZGF0YSwgdXRpbHMubWVyZ2UoeyBtZXRob2Q6IGUgfSwgb3B0aW9uKSk7XG4gICAgfTtcbn0pO1xuICAgICAgICBbXCJsb2NrXCIsIFwidW5sb2NrXCIsIFwiY2xlYXJcIl0uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgRmx5LnByb3RvdHlwZVtlXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0W2VdKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbi8vIExlYXJuIG1vcmUgYWJvdXQga2VlcC1sb2FkZXI6IGh0dHBzOi8vZ2l0aHViLmNvbS93ZW5kdXgva2VlcC1sb2FkZXJcbjtcbm1vZHVsZS5leHBvcnRzID0gRmx5O1xuXG4vKioqLyB9KSxcbi8qIDMgKi8sXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuLy9oYXAgYWRhcHRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZmV0Y2gpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHJlcXVlc3QsIHJlc3BvbnNlQ2FsbGJhY2spIHtcbiAgICAgICAgcmVxdWVzdC5kYXRhID0gcmVxdWVzdC5ib2R5O1xuICAgICAgICByZXF1ZXN0LmhlYWRlciA9IHJlcXVlc3QuaGVhZGVycztcbiAgICAgICAgcmVxdWVzdC5jb21wbGV0ZSA9IGZ1bmN0aW9uIChyZXQpIHtcbiAgICAgICAgICAgIGlmICgodHlwZW9mIHJldCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHJldCkpICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgcmV0ID0ge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiAwLFxuICAgICAgICAgICAgICAgICAgICBtc2c6IHJldFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNwb25zZUNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICBzdGF0dXNDb2RlOiByZXQuY29kZSB8fCAwLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlVGV4dDogcmV0LmRhdGEsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogcmV0LmhlYWRlcnMsXG4gICAgICAgICAgICAgICAgc3RhdHVzTWVzc2FnZTogcmV0Lm1zZ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGZldGNoLmZldGNoKHJlcXVlc3QpO1xuICAgIH07XG59O1xuXG4vKioqLyB9KSxcbi8qIDUgKi8sXG4vKiA2ICovLFxuLyogNyAqLyxcbi8qIDggKi8sXG4vKiA5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbi8vcXVpY2sgYXBwIGVudHJ5XG52YXIgRmx5ID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcbnZhciBFbmdpbmVXcmFwcGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbnZhciBhZGFwdGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZldGNoKSB7XG4gICAgdmFyIGhhcEVuZ2luZSA9IEVuZ2luZVdyYXBwZXIoYWRhcHRlcihmZXRjaCkpO1xuICAgIHJldHVybiBuZXcgRmx5KGhhcEVuZ2luZSk7XG59O1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mbHlpby9kaXN0L25wbS9oYXAuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3BDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9