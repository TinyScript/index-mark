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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _vueRouter = __webpack_require__(3);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _router = __webpack_require__(4);

	var _router2 = _interopRequireDefault(_router);

	var _App = __webpack_require__(136);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import common from './sass/common.scss';


	_vue2.default.use(_vueRouter2.default);

	var router = new _vueRouter2.default();

	(0, _router2.default)(router);

	router.redirect({
		'*': '/'
	});

	router.start(_App2.default, '#root');

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*!
	 * Vue.js v1.0.28
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';

	function set(obj, key, val) {
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	  return val;
	}

	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */

	function del(obj, key) {
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	  if (!ob) {
	    if (obj._isVue) {
	      delete obj._data[key];
	      obj._digest();
	    }
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */

	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}

	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;

	function isLiteral(exp) {
	  return literalValueRE.test(exp);
	}

	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */

	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}

	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */

	function _toString(value) {
	  return value == null ? '' : value.toString();
	}

	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */

	function toNumber(value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	}

	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */

	function toBoolean(value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	}

	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */

	function stripQuotes(str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
	}

	/**
	 * Camelize a hyphen-delimited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var camelizeRE = /-(\w)/g;

	function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
	}

	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}

	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var hyphenateRE = /([^-])([A-Z])/g;

	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
	}

	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var classifyRE = /(?:^|[-_\/])(\w)/g;

	function classify(str) {
	  return str.replace(classifyRE, toUpper);
	}

	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */

	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}

	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */

	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}

	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */

	function extend(to, from) {
	  var keys = Object.keys(from);
	  var i = keys.length;
	  while (i--) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
	}

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	function isObject(obj) {
	  return obj !== null && typeof obj === 'object';
	}

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';

	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}

	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var isArray = Array.isArray;

	/**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */

	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}

	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */

	function _debounce(func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	}

	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */

	function indexOf(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	}

	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */

	function cancellable(fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	}

	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */

	function looseEqual(a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
	}

	var hasProto = ('__proto__' in {});

	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	// UA sniffing for working around browser-specific quirks
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && UA.indexOf('trident') > 0;
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);

	var transitionProp = undefined;
	var transitionEndEvent = undefined;
	var animationProp = undefined;
	var animationEndEvent = undefined;

	// Transition property/event sniffing
	if (inBrowser && !isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}

	/* istanbul ignore next */
	function isNative(Ctor) {
	  return (/native code/.test(Ctor.toString())
	  );
	}

	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */

	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc = undefined;

	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks.length = 0;
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }

	  // the nextTick behavior leverages the microtask queue, which can be accessed
	  // via either native Promise.then or MutationObserver.
	  // MutationObserver has wider support, however it is seriously bugged in
	  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
	  // completely stops working after triggering a few times... so, if native
	  // Promise is available, we will use it:
	  /* istanbul ignore if */
	  if (typeof Promise !== 'undefined' && isNative(Promise)) {
	    var p = Promise.resolve();
	    var noop = function noop() {};
	    timerFunc = function () {
	      p.then(nextTickHandler);
	      // in problematic UIWebViews, Promise.then doesn't completely break, but
	      // it can get stuck in a weird state where callbacks are pushed into the
	      // microtask queue but the queue isn't being flushed, until the browser
	      // needs to do some other work, e.g. handle a timer. Therefore we can
	      // "force" the microtask queue to be flushed by adding an empty timer.
	      if (isIOS) setTimeout(noop);
	    };
	  } else if (typeof MutationObserver !== 'undefined') {
	    // use MutationObserver where native Promise is not available,
	    // e.g. IE11, iOS7, Android 4.4
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(String(counter));
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = String(counter);
	    };
	  } else {
	    // fallback to setTimeout
	    /* istanbul ignore next */
	    timerFunc = setTimeout;
	  }

	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	})();

	var _Set = undefined;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && isNative(Set)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = function () {
	    this.set = Object.create(null);
	  };
	  _Set.prototype.has = function (key) {
	    return this.set[key] !== undefined;
	  };
	  _Set.prototype.add = function (key) {
	    this.set[key] = 1;
	  };
	  _Set.prototype.clear = function () {
	    this.set = Object.create(null);
	  };
	}

	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
	}

	var p = Cache.prototype;

	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */

	p.put = function (key, value) {
	  var removed;

	  var entry = this.get(key, true);
	  if (!entry) {
	    if (this.size === this.limit) {
	      removed = this.shift();
	    }
	    entry = {
	      key: key
	    };
	    this._keymap[key] = entry;
	    if (this.tail) {
	      this.tail.newer = entry;
	      entry.older = this.tail;
	    } else {
	      this.head = entry;
	    }
	    this.tail = entry;
	    this.size++;
	  }
	  entry.value = value;

	  return removed;
	};

	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */

	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	    this.size--;
	  }
	  return entry;
	};

	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */

	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};

	var cache$1 = new Cache(1000);
	var reservedArgRE = /^in$|^-?\d+/;

	/**
	 * Parser state
	 */

	var str;
	var dir;
	var len;
	var index;
	var chr;
	var state;
	var startState = 0;
	var filterState = 1;
	var filterNameState = 2;
	var filterArgState = 3;

	var doubleChr = 0x22;
	var singleChr = 0x27;
	var pipeChr = 0x7C;
	var escapeChr = 0x5C;
	var spaceChr = 0x20;

	var expStartChr = { 0x5B: 1, 0x7B: 1, 0x28: 1 };
	var expChrPair = { 0x5B: 0x5D, 0x7B: 0x7D, 0x28: 0x29 };

	function peek() {
	  return str.charCodeAt(index + 1);
	}

	function next() {
	  return str.charCodeAt(++index);
	}

	function eof() {
	  return index >= len;
	}

	function eatSpace() {
	  while (peek() === spaceChr) {
	    next();
	  }
	}

	function isStringStart(chr) {
	  return chr === doubleChr || chr === singleChr;
	}

	function isExpStart(chr) {
	  return expStartChr[chr];
	}

	function isExpEnd(start, chr) {
	  return expChrPair[start] === chr;
	}

	function parseString() {
	  var stringQuote = next();
	  var chr;
	  while (!eof()) {
	    chr = next();
	    // escape char
	    if (chr === escapeChr) {
	      next();
	    } else if (chr === stringQuote) {
	      break;
	    }
	  }
	}

	function parseSpecialExp(chr) {
	  var inExp = 0;
	  var startChr = chr;

	  while (!eof()) {
	    chr = peek();
	    if (isStringStart(chr)) {
	      parseString();
	      continue;
	    }

	    if (startChr === chr) {
	      inExp++;
	    }
	    if (isExpEnd(startChr, chr)) {
	      inExp--;
	    }

	    next();

	    if (inExp === 0) {
	      break;
	    }
	  }
	}

	/**
	 * syntax:
	 * expression | filterName  [arg  arg [| filterName arg arg]]
	 */

	function parseExpression() {
	  var start = index;
	  while (!eof()) {
	    chr = peek();
	    if (isStringStart(chr)) {
	      parseString();
	    } else if (isExpStart(chr)) {
	      parseSpecialExp(chr);
	    } else if (chr === pipeChr) {
	      next();
	      chr = peek();
	      if (chr === pipeChr) {
	        next();
	      } else {
	        if (state === startState || state === filterArgState) {
	          state = filterState;
	        }
	        break;
	      }
	    } else if (chr === spaceChr && (state === filterNameState || state === filterArgState)) {
	      eatSpace();
	      break;
	    } else {
	      if (state === filterState) {
	        state = filterNameState;
	      }
	      next();
	    }
	  }

	  return str.slice(start + 1, index) || null;
	}

	function parseFilterList() {
	  var filters = [];
	  while (!eof()) {
	    filters.push(parseFilter());
	  }
	  return filters;
	}

	function parseFilter() {
	  var filter = {};
	  var args;

	  state = filterState;
	  filter.name = parseExpression().trim();

	  state = filterArgState;
	  args = parseFilterArguments();

	  if (args.length) {
	    filter.args = args;
	  }
	  return filter;
	}

	function parseFilterArguments() {
	  var args = [];
	  while (!eof() && state !== filterState) {
	    var arg = parseExpression();
	    if (!arg) {
	      break;
	    }
	    args.push(processFilterArg(arg));
	  }

	  return args;
	}

	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */

	function processFilterArg(arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: toNumber(arg),
	      dynamic: false
	    };
	  } else {
	    var stripped = stripQuotes(arg);
	    var dynamic = stripped === arg;
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    };
	  }
	}

	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} s
	 * @return {Object}
	 */

	function parseDirective(s) {
	  var hit = cache$1.get(s);
	  if (hit) {
	    return hit;
	  }

	  // reset parser state
	  str = s;
	  dir = {};
	  len = str.length;
	  index = -1;
	  chr = '';
	  state = startState;

	  var filters;

	  if (str.indexOf('|') < 0) {
	    dir.expression = str.trim();
	  } else {
	    dir.expression = parseExpression().trim();
	    filters = parseFilterList();
	    if (filters.length) {
	      dir.filters = filters;
	    }
	  }

	  cache$1.put(s, dir);
	  return dir;
	}

	var directive = Object.freeze({
	  parseDirective: parseDirective
	});

	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache = undefined;
	var tagRE = undefined;
	var htmlRE = undefined;
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */

	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}

	function compileRegex() {
	  var open = escapeRegex(config.delimiters[0]);
	  var close = escapeRegex(config.delimiters[1]);
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
	  tagRE = new RegExp(unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '|' + open + '((?:.|\\n)+?)' + close, 'g');
	  htmlRE = new RegExp('^' + unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '$');
	  // reset cache
	  cache = new Cache(1000);
	}

	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */

	function parseText(text) {
	  if (!cache) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, html, value, first, oneTime;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    html = htmlRE.test(match[0]);
	    value = html ? match[1] : match[2];
	    first = value.charCodeAt(0);
	    oneTime = first === 42; // *
	    value = oneTime ? value.slice(1) : value;
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	}

	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */

	function tokensToExp(tokens, vm) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token, vm);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], vm, true);
	  }
	}

	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */

	function formatToken(token, vm, single) {
	  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
	}

	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */

	var filterRE = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = parseDirective(exp);
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}

	var text = Object.freeze({
	  compileRegex: compileRegex,
	  parseText: parseText,
	  tokensToExp: tokensToExp
	});

	var delimiters = ['{{', '}}'];
	var unsafeDelimiters = ['{{{', '}}}'];

	var config = Object.defineProperties({

	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */

	  debug: false,

	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */

	  silent: false,

	  /**
	   * Whether to use async rendering.
	   */

	  async: true,

	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */

	  warnExpressionErrors: true,

	  /**
	   * Whether to allow devtools inspection.
	   * Disabled by default in production builds.
	   */

	  devtools: process.env.NODE_ENV !== 'production',

	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */

	  _delimitersChanged: true,

	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */

	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],

	  /**
	   * prop binding modes
	   */

	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },

	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */

	  _maxUpdateCount: 100

	}, {
	  delimiters: { /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */

	    get: function get() {
	      return delimiters;
	    },
	    set: function set(val) {
	      delimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  },
	  unsafeDelimiters: {
	    get: function get() {
	      return unsafeDelimiters;
	    },
	    set: function set(val) {
	      unsafeDelimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  }
	});

	var warn = undefined;
	var formatComponentName = undefined;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';

	    warn = function (msg, vm) {
	      if (hasConsole && !config.silent) {
	        console.error('[Vue warn]: ' + msg + (vm ? formatComponentName(vm) : ''));
	      }
	    };

	    formatComponentName = function (vm) {
	      var name = vm._isVue ? vm.$options.name : vm.name;
	      return name ? ' (found in component: <' + hyphenate(name) + '>)' : '';
	    };
	  })();
	}

	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function appendWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	}

	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function beforeWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    before(el, target);
	  }, vm, cb);
	}

	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function removeWithTransition(el, vm, cb) {
	  applyTransition(el, -1, function () {
	    remove(el);
	  }, vm, cb);
	}

	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function applyTransition(el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	}

	var transition = Object.freeze({
	  appendWithTransition: appendWithTransition,
	  beforeWithTransition: beforeWithTransition,
	  removeWithTransition: removeWithTransition,
	  applyTransition: applyTransition
	});

	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */

	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	}

	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function inDoc(node) {
	  if (!node) return false;
	  var doc = node.ownerDocument.documentElement;
	  var parent = node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	}

	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */

	function getAttr(node, _attr) {
	  var val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
	}

	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */

	function getBindAttr(node, name) {
	  var val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
	}

	/**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */

	function hasBindAttr(node, name) {
	  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
	}

	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}

	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	}

	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */

	function remove(el) {
	  el.parentNode.removeChild(el);
	}

	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}

	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */

	function replace(target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	}

	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */

	function on(el, event, cb, useCapture) {
	  el.addEventListener(event, cb, useCapture);
	}

	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */

	function off(el, event, cb) {
	  el.removeEventListener(event, cb);
	}

	/**
	 * For IE9 compat: when both class and :class are present
	 * getAttribute('class') returns wrong value...
	 *
	 * @param {Element} el
	 * @return {String}
	 */

	function getClass(el) {
	  var classname = el.className;
	  if (typeof classname === 'object') {
	    classname = classname.baseVal || '';
	  }
	  return classname;
	}

	/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function setClass(el, cls) {
	  /* istanbul ignore if */
	  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
	}

	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
	}

	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}

	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element|DocumentFragment}
	 */

	function extractContent(el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && isFragment(el.content)) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	}

	/**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */

	function trimNode(node) {
	  var child;
	  /* eslint-disable no-sequences */
	  while ((child = node.firstChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  while ((child = node.lastChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  /* eslint-enable no-sequences */
	}

	function isTrimmable(node) {
	  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
	}

	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */

	function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	}

	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */

	function createAnchor(content, persist) {
	  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__v_anchor = true;
	  return anchor;
	}

	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */

	var refRE = /^v-ref:/;

	function findRef(node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name;
	      if (refRE.test(name)) {
	        return camelize(name.replace(refRE, ''));
	      }
	    }
	  }
	}

	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */

	function mapNodeRange(node, end, op) {
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
	}

	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */

	function removeNodeRange(start, end, vm, frag, cb) {
	  var done = false;
	  var removed = 0;
	  var nodes = [];
	  mapNodeRange(start, end, function (node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
	}

	/**
	 * Check if a node is a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isFragment(node) {
	  return node && node.nodeType === 11;
	}

	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 *
	 * @param {Element} el
	 * @return {String}
	 */

	function getOuterHTML(el) {
	  if (el.outerHTML) {
	    return el.outerHTML;
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML;
	  }
	}

	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
	var reservedTagRE = /^(slot|partial|component)$/i;

	var isUnknownElement = undefined;
	if (process.env.NODE_ENV !== 'production') {
	  isUnknownElement = function (el, tag) {
	    if (tag.indexOf('-') > -1) {
	      // http://stackoverflow.com/a/28210364/1070244
	      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
	    } else {
	      return (/HTMLUnknownElement/.test(el.toString()) &&
	        // Chrome returns unknown for several HTML5 elements.
	        // https://code.google.com/p/chromium/issues/detail?id=540526
	        // Firefox returns unknown for some "Interactive elements."
	        !/^(data|time|rtc|rb|details|dialog|summary)$/.test(tag)
	      );
	    }
	  };
	}

	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

	function checkComponentAttr(el, options) {
	  var tag = el.tagName.toLowerCase();
	  var hasAttrs = el.hasAttributes();
	  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
	    if (resolveAsset(options, 'components', tag)) {
	      return { id: tag };
	    } else {
	      var is = hasAttrs && getIsBinding(el, options);
	      if (is) {
	        return is;
	      } else if (process.env.NODE_ENV !== 'production') {
	        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
	        if (expectedTag) {
	          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
	        } else if (isUnknownElement(el, tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el, options);
	  }
	}

	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

	function getIsBinding(el, options) {
	  // dynamic syntax
	  var exp = el.getAttribute('is');
	  if (exp != null) {
	    if (resolveAsset(options, 'components', exp)) {
	      el.removeAttribute('is');
	      return { id: exp };
	    }
	  } else {
	    exp = getBindAttr(el, 'is');
	    if (exp != null) {
	      return { id: exp, dynamic: true };
	    }
	  }
	}

	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */

	var strats = config.optionMergeStrategies = Object.create(null);

	/**
	 * Helper that recursively merges two data objects together.
	 */

	function mergeData(to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}

	/**
	 * Data
	 */

	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};

	/**
	 * El
	 */

	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};

	/**
	 * Hooks and param attributes are merged as arrays.
	 */

	strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
	};

	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */

	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
	}

	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});

	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */

	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};

	/**
	 * Other object hashes.
	 */

	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
	};

	/**
	 * Default strategy.
	 */

	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};

	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */

	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var ids = Object.keys(components);
	    var def;
	    if (process.env.NODE_ENV !== 'production') {
	      var map = options._componentNameMap = {};
	    }
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      // record a all lowercase <-> kebab-case mapping for
	      // possible custom element case error warning
	      if (process.env.NODE_ENV !== 'production') {
	        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def);
	      }
	    }
	  }
	}

	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */

	function guardProps(options) {
	  var props = options.props;
	  var i, val;
	  if (isArray(props)) {
	    options.props = {};
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        options.props[val] = null;
	      } else if (val.name) {
	        options.props[val.name] = val;
	      }
	    }
	  } else if (isPlainObject(props)) {
	    var keys = Object.keys(props);
	    i = keys.length;
	    while (i--) {
	      val = props[keys[i]];
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val };
	      }
	    }
	  }
	}

	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */

	function guardArrayAssets(assets) {
	  if (isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}

	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */

	function mergeOptions(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  if (process.env.NODE_ENV !== 'production') {
	    if (child.propsData && !vm) {
	      warn('propsData can only be used as an instantiation option.');
	    }
	  }
	  var options = {};
	  var key;
	  if (child['extends']) {
	    parent = typeof child['extends'] === 'function' ? mergeOptions(parent, child['extends'].options, vm) : mergeOptions(parent, child['extends'], vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      var mixin = child.mixins[i];
	      var mixinOptions = mixin.prototype instanceof Vue ? mixin.options : mixin;
	      parent = mergeOptions(parent, mixinOptions, vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}

	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @param {Boolean} warnMissing
	 * @return {Object|Function}
	 */

	function resolveAsset(options, type, id, warnMissing) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return;
	  }
	  var assets = options[type];
	  var camelizedId;
	  var res = assets[id] ||
	  // camelCase ID
	  assets[camelizedId = camelize(id)] ||
	  // Pascal Case ID
	  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
	  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
	    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
	  }
	  return res;
	}

	var uid$1 = 0;

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	function Dep() {
	  this.id = uid$1++;
	  this.subs = [];
	}

	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;

	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};

	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};

	/**
	 * Add self as a dependency to the target watcher.
	 */

	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};

	/**
	 * Notify all subscribers of a new value.
	 */

	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};

	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto)

	/**
	 * Intercept mutating methods and emit events
	 */

	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});

	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */

	def(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = Number(index) + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});

	/**
	 * Convenience method to remove the element at given index or target element reference.
	 *
	 * @param {*} item
	 */

	def(arrayProto, '$remove', function $remove(item) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  var index = indexOf(this, item);
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});

	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However in certain cases, e.g.
	 * v-for scope alias and props, we don't want to force conversion
	 * because the value may be a nested value under a frozen data structure.
	 *
	 * So whenever we want to set a reactive property without forcing
	 * conversion on the new value, we wrap that call inside this function.
	 */

	var shouldConvert = true;

	function withoutConversion(fn) {
	  shouldConvert = false;
	  fn();
	  shouldConvert = true;
	}

	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */

	function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  def(value, '__ob__', this);
	  if (isArray(value)) {
	    var augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}

	// Instance methods

	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */

	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
	};

	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */

	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};

	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */

	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};

	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};

	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};

	// helpers

	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} src
	 */

	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}

	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */

	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */

	function observe(value, vm) {
	  if (!value || typeof value !== 'object') {
	    return;
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}

	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */

	function defineReactive(obj, key, val) {
	  var dep = new Dep();

	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }

	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;

	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}



	var util = Object.freeze({
		defineReactive: defineReactive,
		set: set,
		del: del,
		hasOwn: hasOwn,
		isLiteral: isLiteral,
		isReserved: isReserved,
		_toString: _toString,
		toNumber: toNumber,
		toBoolean: toBoolean,
		stripQuotes: stripQuotes,
		camelize: camelize,
		hyphenate: hyphenate,
		classify: classify,
		bind: bind,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		def: def,
		debounce: _debounce,
		indexOf: indexOf,
		cancellable: cancellable,
		looseEqual: looseEqual,
		isArray: isArray,
		hasProto: hasProto,
		inBrowser: inBrowser,
		devtools: devtools,
		isIE: isIE,
		isIE9: isIE9,
		isAndroid: isAndroid,
		isIOS: isIOS,
		get transitionProp () { return transitionProp; },
		get transitionEndEvent () { return transitionEndEvent; },
		get animationProp () { return animationProp; },
		get animationEndEvent () { return animationEndEvent; },
		nextTick: nextTick,
		get _Set () { return _Set; },
		query: query,
		inDoc: inDoc,
		getAttr: getAttr,
		getBindAttr: getBindAttr,
		hasBindAttr: hasBindAttr,
		before: before,
		after: after,
		remove: remove,
		prepend: prepend,
		replace: replace,
		on: on,
		off: off,
		setClass: setClass,
		addClass: addClass,
		removeClass: removeClass,
		extractContent: extractContent,
		trimNode: trimNode,
		isTemplate: isTemplate,
		createAnchor: createAnchor,
		findRef: findRef,
		mapNodeRange: mapNodeRange,
		removeNodeRange: removeNodeRange,
		isFragment: isFragment,
		getOuterHTML: getOuterHTML,
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		checkComponentAttr: checkComponentAttr,
		commonTagRE: commonTagRE,
		reservedTagRE: reservedTagRE,
		get warn () { return warn; }
	});

	var uid = 0;

	function initMixin (Vue) {
	  /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */

	  Vue.prototype._init = function (options) {
	    options = options || {};

	    this.$el = null;
	    this.$parent = options.parent;
	    this.$root = this.$parent ? this.$parent.$root : this;
	    this.$children = [];
	    this.$refs = {}; // child vm references
	    this.$els = {}; // element references
	    this._watchers = []; // all watchers as an array
	    this._directives = []; // all directives

	    // a uid
	    this._uid = uid++;

	    // a flag to avoid this being observed
	    this._isVue = true;

	    // events bookkeeping
	    this._events = {}; // registered callbacks
	    this._eventsCount = {}; // for $broadcast optimization

	    // fragment instance properties
	    this._isFragment = false;
	    this._fragment = // @type {DocumentFragment}
	    this._fragmentStart = // @type {Text|Comment}
	    this._fragmentEnd = null; // @type {Text|Comment}

	    // lifecycle state
	    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
	    this._unlinkFn = null;

	    // context:
	    // if this is a transcluded component, context
	    // will be the common parent vm of this instance
	    // and its host.
	    this._context = options._context || this.$parent;

	    // scope:
	    // if this is inside an inline v-for, the scope
	    // will be the intermediate scope created for this
	    // repeat fragment. this is used for linking props
	    // and container directives.
	    this._scope = options._scope;

	    // fragment:
	    // if this instance is compiled inside a Fragment, it
	    // needs to register itself as a child of that fragment
	    // for attach/detach to work properly.
	    this._frag = options._frag;
	    if (this._frag) {
	      this._frag.children.push(this);
	    }

	    // push self into parent / transclusion host
	    if (this.$parent) {
	      this.$parent.$children.push(this);
	    }

	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);

	    // set ref
	    this._updateRef();

	    // initialize data as empty object.
	    // it will be filled up in _initData().
	    this._data = {};

	    // call init hook
	    this._callHook('init');

	    // initialize data observation and scope inheritance.
	    this._initState();

	    // setup event system and option events.
	    this._initEvents();

	    // call created hook
	    this._callHook('created');

	    // if `el` option is passed, start compilation.
	    if (options.el) {
	      this.$mount(options.el);
	    }
	  };
	}

	var pathCache = new Cache(1000);

	// actions
	var APPEND = 0;
	var PUSH = 1;
	var INC_SUB_PATH_DEPTH = 2;
	var PUSH_SUB_PATH = 3;

	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var IN_SUB_PATH = 4;
	var IN_SINGLE_QUOTE = 5;
	var IN_DOUBLE_QUOTE = 6;
	var AFTER_PATH = 7;
	var ERROR = 8;

	var pathStateMachine = [];

	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};

	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [IN_SUB_PATH, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};

	pathStateMachine[IN_SUB_PATH] = {
	  "'": [IN_SINGLE_QUOTE, APPEND],
	  '"': [IN_DOUBLE_QUOTE, APPEND],
	  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
	  ']': [IN_PATH, PUSH_SUB_PATH],
	  'eof': ERROR,
	  'else': [IN_SUB_PATH, APPEND]
	};

	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};

	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};

	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */

	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }

	  var code = ch.charCodeAt(0);

	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;

	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';

	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }

	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }

	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }

	  return 'else';
	}

	/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */

	function formatSubPath(path) {
	  var trimmed = path.trim();
	  // invalid leading 0
	  if (path.charAt(0) === '0' && isNaN(path)) {
	    return false;
	  }
	  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
	}

	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parse(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var subPathDepth = 0;
	  var c, newChar, key, type, transition, action, typeMap;

	  var actions = [];

	  actions[PUSH] = function () {
	    if (key !== undefined) {
	      keys.push(key);
	      key = undefined;
	    }
	  };

	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };

	  actions[INC_SUB_PATH_DEPTH] = function () {
	    actions[APPEND]();
	    subPathDepth++;
	  };

	  actions[PUSH_SUB_PATH] = function () {
	    if (subPathDepth > 0) {
	      subPathDepth--;
	      mode = IN_SUB_PATH;
	      actions[APPEND]();
	    } else {
	      subPathDepth = 0;
	      key = formatSubPath(key);
	      if (key === false) {
	        return false;
	      } else {
	        actions[PUSH]();
	      }
	    }
	  };

	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = '\\' + nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }

	  while (mode != null) {
	    index++;
	    c = path[index];

	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }

	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;

	    if (transition === ERROR) {
	      return; // parse error
	    }

	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar;
	      if (action() === false) {
	        return;
	      }
	    }

	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}

	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parsePath(path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parse(path);
	    if (hit) {
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	}

	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */

	function getPath(obj, path) {
	  return parseExpression$1(path).get(obj);
	}

	/**
	 * Warn against setting non-existent root path on a vm.
	 */

	var warnNonExistent;
	if (process.env.NODE_ENV !== 'production') {
	  warnNonExistent = function (path, vm) {
	    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.', vm);
	  };
	}

	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */

	function setPath(obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = parse(path);
	  }
	  if (!path || !isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = parseExpression$1(key.slice(1)).get.call(original, original);
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!isObject(obj)) {
	        obj = {};
	        if (process.env.NODE_ENV !== 'production' && last._isVue) {
	          warnNonExistent(path, last);
	        }
	        set(last, key, obj);
	      }
	    } else {
	      if (isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
	          warnNonExistent(path, obj);
	        }
	        set(obj, key, val);
	      }
	    }
	  }
	  return true;
	}

	var path = Object.freeze({
	  parsePath: parsePath,
	  getPath: getPath,
	  setPath: setPath
	});

	var expressionCache = new Cache(1000);

	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');

	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');

	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\"']|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
	var literalValueRE$1 = /^(?:true|false|null|undefined|Infinity|NaN)$/;

	function noop() {}

	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */

	var saved = [];

	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */

	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}

	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */

	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}

	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */

	function restore(str, i) {
	  return saved[i];
	}

	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */

	function compileGetter(exp) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here because the regex matches 1 extra char
	  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
	  return makeGetterFn(body);
	}

	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */

	function makeGetterFn(body) {
	  try {
	    /* eslint-disable no-new-func */
	    return new Function('scope', 'return ' + body + ';');
	    /* eslint-enable no-new-func */
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production') {
	      /* istanbul ignore if */
	      if (e.toString().match(/unsafe-eval|CSP/)) {
	        warn('It seems you are using the default build of Vue.js in an environment ' + 'with Content Security Policy that prohibits unsafe-eval. ' + 'Use the CSP-compliant build instead: ' + 'http://vuejs.org/guide/installation.html#CSP-compliant-build');
	      } else {
	        warn('Invalid expression. ' + 'Generated function body: ' + body);
	      }
	    }
	    return noop;
	  }
	}

	/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */

	function compileSetter(exp) {
	  var path = parsePath(exp);
	  if (path) {
	    return function (scope, val) {
	      setPath(scope, path, val);
	    };
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
	  }
	}

	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */

	function parseExpression$1(exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet && !hit.set) {
	      hit.set = compileSetter(hit.exp);
	    }
	    return hit;
	  }
	  var res = { exp: exp };
	  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
	  // optimized super simple getter
	  ? makeGetterFn('scope.' + exp)
	  // dynamic getter
	  : compileGetter(exp);
	  if (needSet) {
	    res.set = compileSetter(exp);
	  }
	  expressionCache.put(exp, res);
	  return res;
	}

	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	function isSimplePath(exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat literal values as paths
	  !literalValueRE$1.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	}

	var expression = Object.freeze({
	  parseExpression: parseExpression$1,
	  isSimplePath: isSimplePath
	});

	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.

	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;

	/**
	 * Reset the batcher's state.
	 */

	function resetBatcherState() {
	  queue.length = 0;
	  userQueue.length = 0;
	  has = {};
	  circular = {};
	  waiting = false;
	}

	/**
	 * Flush both queues and run the watchers.
	 */

	function flushBatcherQueue() {
	  var _again = true;

	  _function: while (_again) {
	    _again = false;

	    runBatcherQueue(queue);
	    runBatcherQueue(userQueue);
	    // user watchers triggered more watchers,
	    // keep flushing until it depletes
	    if (queue.length) {
	      _again = true;
	      continue _function;
	    }
	    // dev tool hook
	    /* istanbul ignore if */
	    if (devtools && config.devtools) {
	      devtools.emit('flush');
	    }
	    resetBatcherState();
	  }
	}

	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */

	function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        warn('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"', watcher.vm);
	        break;
	      }
	    }
	  }
	  queue.length = 0;
	}

	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */

	function pushWatcher(watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue;
	    has[id] = q.length;
	    q.push(watcher);
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushBatcherQueue);
	    }
	  }
	}

	var uid$2 = 0;

	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    extend(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = parseExpression$1(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */

	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var scope = this.scope || this.vm;
	  var value;
	  try {
	    value = this.getter.call(scope, scope);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating expression ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false);
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value);
	  }
	  this.afterGet();
	  return value;
	};

	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */

	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm;
	  if (this.filters) {
	    value = scope._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(scope, scope, value);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating setter ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext;
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.', this.vm);
	      return;
	    }
	    forContext._withLock(function () {
	      if (scope.$key) {
	        // original is an object
	        forContext.rawValue[scope.$key] = value;
	      } else {
	        forContext.rawValue.$set(scope.$index, value);
	      }
	    });
	  }
	};

	/**
	 * Prepare for dependency collection.
	 */

	Watcher.prototype.beforeGet = function () {
	  Dep.target = this;
	};

	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */

	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};

	/**
	 * Clean up for dependency collection.
	 */

	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (!this.newDepIds.has(dep.id)) {
	      dep.removeSub(this);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};

	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */

	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    pushWatcher(this);
	  }
	};

	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */

	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (isObject(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError;
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          nextTick(function () {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
	};

	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */

	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
	};

	/**
	 * Depend on all deps collected by this watcher.
	 */

	Watcher.prototype.depend = function () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};

	/**
	 * Remove self from all dependencies' subcriber list.
	 */

	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      this.vm._watchers.$remove(this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};

	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */

	var seenObjects = new _Set();
	function traverse(val, seen) {
	  var i = undefined,
	      keys = undefined;
	  if (!seen) {
	    seen = seenObjects;
	    seen.clear();
	  }
	  var isA = isArray(val);
	  var isO = isObject(val);
	  if ((isA || isO) && Object.isExtensible(val)) {
	    if (val.__ob__) {
	      var depId = val.__ob__.dep.id;
	      if (seen.has(depId)) {
	        return;
	      } else {
	        seen.add(depId);
	      }
	    }
	    if (isA) {
	      i = val.length;
	      while (i--) traverse(val[i], seen);
	    } else if (isO) {
	      keys = Object.keys(val);
	      i = keys.length;
	      while (i--) traverse(val[keys[i]], seen);
	    }
	  }
	}

	var text$1 = {

	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },

	  update: function update(value) {
	    this.el[this.attr] = _toString(value);
	  }
	};

	var templateCache = new Cache(1000);
	var idSelectorCache = new Cache(1000);

	var map = {
	  efault: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};

	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];

	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];

	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];

	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isRealTemplate(node) {
	  return isTemplate(node) && isFragment(node.content);
	}

	var tagRE$1 = /<([\w:-]+)/;
	var entityRE = /&#?\w+?;/;
	var commentRE = /<!--/;

	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */

	function stringToFragment(templateString, raw) {
	  // try a cache hit first
	  var cacheKey = raw ? templateString : templateString.trim();
	  var hit = templateCache.get(cacheKey);
	  if (hit) {
	    return hit;
	  }

	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE$1);
	  var entityMatch = entityRE.test(templateString);
	  var commentMatch = commentRE.test(templateString);

	  if (!tagMatch && !entityMatch && !commentMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {
	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map.efault;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');

	    node.innerHTML = prefix + templateString + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }

	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }
	  if (!raw) {
	    trimNode(frag);
	  }
	  templateCache.put(cacheKey, frag);
	  return frag;
	}

	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */

	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment. However, iOS Safari has
	  // bug when using directly cloned template content with touch
	  // events and can cause crashes when the nodes are removed from DOM, so we
	  // have to treat template elements as string templates. (#2805)
	  /* istanbul ignore if */
	  if (isRealTemplate(node)) {
	    return stringToFragment(node.innerHTML);
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clonedNode = cloneNode(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clonedNode.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  trimNode(frag);
	  return frag;
	}

	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
	})();

	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
	})();

	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */

	function cloneNode(node) {
	  /* istanbul ignore if */
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var tempClone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      tempClone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = tempClone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */

	function parseTemplate(template, shouldClone, raw) {
	  var node, frag;

	  // if the template is already a document fragment,
	  // do nothing
	  if (isFragment(template)) {
	    trimNode(template);
	    return shouldClone ? cloneNode(template) : template;
	  }

	  if (typeof template === 'string') {
	    // id selector
	    if (!raw && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template, raw);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }

	  return frag && shouldClone ? cloneNode(frag) : frag;
	}

	var template = Object.freeze({
	  cloneNode: cloneNode,
	  parseTemplate: parseTemplate
	});

	var html = {

	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = createAnchor('v-html');
	      replace(this.el, this.anchor);
	    }
	  },

	  update: function update(value) {
	    value = _toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },

	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = parseTemplate(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = toArray(frag.childNodes);
	    before(frag, this.anchor);
	  }
	};

	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 * @param {Fragment} [parentFrag]
	 */
	function Fragment(linker, vm, frag, host, scope, parentFrag) {
	  this.children = [];
	  this.childFrags = [];
	  this.vm = vm;
	  this.scope = scope;
	  this.inserted = false;
	  this.parentFrag = parentFrag;
	  if (parentFrag) {
	    parentFrag.childFrags.push(this);
	  }
	  this.unlink = linker(vm, frag, host, scope, this);
	  var single = this.single = frag.childNodes.length === 1 &&
	  // do not go single mode if the only node is an anchor
	  !frag.childNodes[0].__v_anchor;
	  if (single) {
	    this.node = frag.childNodes[0];
	    this.before = singleBefore;
	    this.remove = singleRemove;
	  } else {
	    this.node = createAnchor('fragment-start');
	    this.end = createAnchor('fragment-end');
	    this.frag = frag;
	    prepend(this.node, frag);
	    frag.appendChild(this.end);
	    this.before = multiBefore;
	    this.remove = multiRemove;
	  }
	  this.node.__v_frag = this;
	}

	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */

	Fragment.prototype.callHook = function (hook) {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i]);
	  }
	};

	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function singleBefore(target, withTransition) {
	  this.inserted = true;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  method(this.node, target, this.vm);
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}

	/**
	 * Remove fragment, single node version
	 */

	function singleRemove() {
	  this.inserted = false;
	  var shouldCallRemove = inDoc(this.node);
	  var self = this;
	  this.beforeRemove();
	  removeWithTransition(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}

	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function multiBefore(target, withTransition) {
	  this.inserted = true;
	  var vm = this.vm;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm);
	  });
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}

	/**
	 * Remove fragment, multi-nodes version
	 */

	function multiRemove() {
	  this.inserted = false;
	  var self = this;
	  var shouldCallRemove = inDoc(this.node);
	  this.beforeRemove();
	  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}

	/**
	 * Prepare the fragment for removal.
	 */

	Fragment.prototype.beforeRemove = function () {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    // call the same method recursively on child
	    // fragments, depth-first
	    this.childFrags[i].beforeRemove(false);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    // Call destroy for all contained instances,
	    // with remove:false and defer:true.
	    // Defer is necessary because we need to
	    // keep the children to call detach hooks
	    // on them.
	    this.children[i].$destroy(false, true);
	  }
	  var dirs = this.unlink.dirs;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    // disable the watchers on all the directives
	    // so that the rendered content stays the same
	    // during removal.
	    dirs[i]._watcher && dirs[i]._watcher.teardown();
	  }
	};

	/**
	 * Destroy the fragment.
	 */

	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this);
	  }
	  this.node.__v_frag = null;
	  this.unlink();
	};

	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function attach(child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached');
	  }
	}

	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function detach(child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached');
	  }
	}

	var linkerCache = new Cache(5000);

	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	function FragmentFactory(vm, el) {
	  this.vm = vm;
	  var template;
	  var isString = typeof el === 'string';
	  if (isString || isTemplate(el) && !el.hasAttribute('v-if')) {
	    template = parseTemplate(el, true);
	  } else {
	    template = document.createDocumentFragment();
	    template.appendChild(el);
	  }
	  this.template = template;
	  // linker can be cached, but only for components
	  var linker;
	  var cid = vm.constructor.cid;
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : getOuterHTML(el));
	    linker = linkerCache.get(cacheId);
	    if (!linker) {
	      linker = compile(template, vm.$options, true);
	      linkerCache.put(cacheId, linker);
	    }
	  } else {
	    linker = compile(template, vm.$options, true);
	  }
	  this.linker = linker;
	}

	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */

	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = cloneNode(this.template);
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
	};

	var ON = 700;
	var MODEL = 800;
	var BIND = 850;
	var TRANSITION = 1100;
	var EL = 1500;
	var COMPONENT = 1500;
	var PARTIAL = 1750;
	var IF = 2100;
	var FOR = 2200;
	var SLOT = 2300;

	var uid$3 = 0;

	var vFor = {

	  priority: FOR,
	  terminal: true,

	  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],

	  bind: function bind() {
	    if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('v-if')) {
	      warn('<' + this.el.tagName.toLowerCase() + ' v-for="' + this.expression + '" v-if="' + this.el.getAttribute('v-if') + '">: ' + 'Using v-if and v-for on the same element is not recommended - ' + 'consider filtering the source Array instead.', this.vm);
	    }

	    // support "item in/of items" syntax
	    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
	      if (itMatch) {
	        this.iterator = itMatch[1].trim();
	        this.alias = itMatch[2].trim();
	      } else {
	        this.alias = inMatch[1].trim();
	      }
	      this.expression = inMatch[2];
	    }

	    if (!this.alias) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid v-for expression "' + this.descriptor.raw + '": ' + 'alias is required.', this.vm);
	      return;
	    }

	    // uid as a cache identifier
	    this.id = '__v-for__' + ++uid$3;

	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName;
	    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';

	    // setup anchor nodes
	    this.start = createAnchor('v-for-start');
	    this.end = createAnchor('v-for-end');
	    replace(this.el, this.end);
	    before(this.start, this.end);

	    // cache
	    this.cache = Object.create(null);

	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el);
	  },

	  update: function update(data) {
	    this.diff(data);
	    this.updateRef();
	    this.updateModel();
	  },

	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */

	  diff: function diff(data) {
	    // check if the Array was converted from an Object
	    var item = data[0];
	    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');

	    var trackByKey = this.params.trackBy;
	    var oldFrags = this.frags;
	    var frags = this.frags = new Array(data.length);
	    var alias = this.alias;
	    var iterator = this.iterator;
	    var start = this.start;
	    var end = this.end;
	    var inDocument = inDoc(start);
	    var init = !oldFrags;
	    var i, l, frag, key, value, primitive;

	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i];
	      key = convertedFromObject ? item.$key : null;
	      value = convertedFromObject ? item.$value : item;
	      primitive = !isObject(value);
	      frag = !init && this.getCachedFrag(value, i, key);
	      if (frag) {
	        // reusable fragment
	        frag.reused = true;
	        // update $index
	        frag.scope.$index = i;
	        // update $key
	        if (key) {
	          frag.scope.$key = key;
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i;
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          withoutConversion(function () {
	            frag.scope[alias] = value;
	          });
	        }
	      } else {
	        // new instance
	        frag = this.create(value, alias, i, key);
	        frag.fresh = !init;
	      }
	      frags[i] = frag;
	      if (init) {
	        frag.before(end);
	      }
	    }

	    // we're done for the initial render.
	    if (init) {
	      return;
	    }

	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldFrags.length - frags.length;
	    // when removing a large number of fragments, watcher removal
	    // turns out to be a perf bottleneck, so we batch the watcher
	    // removals into a single filter call!
	    this.vm._vForRemoving = true;
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i];
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag);
	        this.remove(frag, removalIndex++, totalRemoved, inDocument);
	      }
	    }
	    this.vm._vForRemoving = false;
	    if (removalIndex) {
	      this.vm._watchers = this.vm._watchers.filter(function (w) {
	        return w.active;
	      });
	    }

	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i];
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1];
	      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id);
	        if (currentPrev !== targetPrev && (!currentPrev ||
	        // optimization for moving a single item.
	        // thanks to suggestions by @livoras in #1807
	        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
	          this.move(frag, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDocument);
	      }
	      frag.reused = frag.fresh = false;
	    }
	  },

	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */

	  create: function create(value, alias, index, key) {
	    var host = this._host;
	    // create iteration scope
	    var parentScope = this._scope || this.vm;
	    var scope = Object.create(parentScope);
	    // ref holder for the scope
	    scope.$refs = Object.create(parentScope.$refs);
	    scope.$els = Object.create(parentScope.$els);
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope;
	    // for two-way binding on alias
	    scope.$forContext = this;
	    // define scope properties
	    // important: define the scope alias without forced conversion
	    // so that frozen data structures remain non-reactive.
	    withoutConversion(function () {
	      defineReactive(scope, alias, value);
	    });
	    defineReactive(scope, '$index', index);
	    if (key) {
	      defineReactive(scope, '$key', key);
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      def(scope, '$key', null);
	    }
	    if (this.iterator) {
	      defineReactive(scope, this.iterator, key !== null ? key : index);
	    }
	    var frag = this.factory.create(host, scope, this._frag);
	    frag.forId = this.id;
	    this.cacheFrag(value, frag, index, key);
	    return frag;
	  },

	  /**
	   * Update the v-ref on owner vm.
	   */

	  updateRef: function updateRef() {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this._scope || this.vm).$refs;
	    var refs;
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag);
	    } else {
	      refs = {};
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag);
	      });
	    }
	    hash[ref] = refs;
	  },

	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */

	  updateModel: function updateModel() {
	    if (this.isOption) {
	      var parent = this.start.parentNode;
	      var model = parent && parent.__v_model;
	      if (model) {
	        model.forceUpdate();
	      }
	    }
	  },

	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */

	  insert: function insert(frag, index, prevEl, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter');
	    if (inDocument && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor;
	      if (!anchor) {
	        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
	        anchor.__v_frag = frag;
	      }
	      after(anchor, prevEl);
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.before(anchor);
	        remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      var target = prevEl.nextSibling;
	      /* istanbul ignore if */
	      if (!target) {
	        // reset end anchor position in case the position was messed up
	        // by an external drag-n-drop library.
	        after(this.end, prevEl);
	        target = this.end;
	      }
	      frag.before(target);
	    }
	  },

	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */

	  remove: function remove(frag, index, total, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave');
	    if (inDocument && staggerAmount) {
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.remove();
	    }
	  },

	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */

	  move: function move(frag, prevEl) {
	    // fix a common issue with Sortable:
	    // if prevEl doesn't have nextSibling, this means it's
	    // been dragged after the end anchor. Just re-position
	    // the end anchor to the end of the container.
	    /* istanbul ignore if */
	    if (!prevEl.nextSibling) {
	      this.end.parentNode.appendChild(this.end);
	    }
	    frag.before(prevEl.nextSibling, false);
	  },

	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */

	  cacheFrag: function cacheFrag(value, frag, index, key) {
	    var trackByKey = this.params.trackBy;
	    var cache = this.cache;
	    var primitive = !isObject(value);
	    var id;
	    if (key || trackByKey || primitive) {
	      id = getTrackByKey(index, key, value, trackByKey);
	      if (!cache[id]) {
	        cache[id] = frag;
	      } else if (trackByKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	      }
	    } else {
	      id = this.id;
	      if (hasOwn(value, id)) {
	        if (value[id] === null) {
	          value[id] = frag;
	        } else {
	          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	        }
	      } else if (Object.isExtensible(value)) {
	        def(value, id, frag);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Frozen v-for objects cannot be automatically tracked, make sure to ' + 'provide a track-by key.');
	      }
	    }
	    frag.raw = value;
	  },

	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */

	  getCachedFrag: function getCachedFrag(value, index, key) {
	    var trackByKey = this.params.trackBy;
	    var primitive = !isObject(value);
	    var frag;
	    if (key || trackByKey || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      frag = this.cache[id];
	    } else {
	      frag = value[this.id];
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	    }
	    return frag;
	  },

	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */

	  deleteCachedFrag: function deleteCachedFrag(frag) {
	    var value = frag.raw;
	    var trackByKey = this.params.trackBy;
	    var scope = frag.scope;
	    var index = scope.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = hasOwn(scope, '$key') && scope.$key;
	    var primitive = !isObject(value);
	    if (trackByKey || key || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      this.cache[id] = null;
	    } else {
	      value[this.id] = null;
	      frag.raw = null;
	    }
	  },

	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */

	  getStagger: function getStagger(frag, index, total, type) {
	    type = type + 'Stagger';
	    var trans = frag.node.__v_trans;
	    var hooks = trans && trans.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
	  },

	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */

	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    return value;
	  },

	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * watcher's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */

	  _postProcess: function _postProcess(value) {
	    if (isArray(value)) {
	      return value;
	    } else if (isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      return res;
	    } else {
	      if (typeof value === 'number' && !isNaN(value)) {
	        value = range(value);
	      }
	      return value || [];
	    }
	  },

	  unbind: function unbind() {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
	    }
	    if (this.frags) {
	      var i = this.frags.length;
	      var frag;
	      while (i--) {
	        frag = this.frags[i];
	        this.deleteCachedFrag(frag);
	        frag.destroy();
	      }
	    }
	  }
	};

	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */

	function findPrevFrag(frag, anchor, id) {
	  var el = frag.node.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  frag = el.__v_frag;
	  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
	    el = el.previousSibling;
	    /* istanbul ignore if */
	    if (!el) return;
	    frag = el.__v_frag;
	  }
	  return frag;
	}

	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */

	function range(n) {
	  var i = -1;
	  var ret = new Array(Math.floor(n));
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}

	/**
	 * Get the track by key for an item.
	 *
	 * @param {Number} index
	 * @param {String} key
	 * @param {*} value
	 * @param {String} [trackByKey]
	 */

	function getTrackByKey(index, key, value, trackByKey) {
	  return trackByKey ? trackByKey === '$index' ? index : trackByKey.charAt(0).match(/\w/) ? getPath(value, trackByKey) : value[trackByKey] : key || value;
	}

	if (process.env.NODE_ENV !== 'production') {
	  vFor.warnDuplicate = function (value) {
	    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.', this.vm);
	  };
	}

	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */

	function findVmFromFrag(frag) {
	  var node = frag.node;
	  // handle multi-node frag
	  if (frag.end) {
	    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
	      node = node.nextSibling;
	    }
	  }
	  return node.__vue__;
	}

	var vIf = {

	  priority: IF,
	  terminal: true,

	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling;
	      if (next && getAttr(next, 'v-else') !== null) {
	        remove(next);
	        this.elseEl = next;
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.', this.vm);
	      this.invalid = true;
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      if (!this.frag) {
	        this.insert();
	      }
	    } else {
	      this.remove();
	    }
	  },

	  insert: function insert() {
	    if (this.elseFrag) {
	      this.elseFrag.remove();
	      this.elseFrag = null;
	    }
	    // lazy init factory
	    if (!this.factory) {
	      this.factory = new FragmentFactory(this.vm, this.el);
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },

	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseEl && !this.elseFrag) {
	      if (!this.elseFactory) {
	        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
	      }
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
	      this.elseFrag.before(this.anchor);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	    if (this.elseFrag) {
	      this.elseFrag.destroy();
	    }
	  }
	};

	var show = {

	  bind: function bind() {
	    // check else block
	    var next = this.el.nextElementSibling;
	    if (next && getAttr(next, 'v-else') !== null) {
	      this.elseEl = next;
	    }
	  },

	  update: function update(value) {
	    this.apply(this.el, value);
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value);
	    }
	  },

	  apply: function apply(el, value) {
	    if (inDoc(el)) {
	      applyTransition(el, value ? 1 : -1, toggle, this.vm);
	    } else {
	      toggle();
	    }
	    function toggle() {
	      el.style.display = value ? '' : 'none';
	    }
	  }
	};

	var text$2 = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var isRange = el.type === 'range';
	    var lazy = this.params.lazy;
	    var number = this.params.number;
	    var debounce = this.params.debounce;

	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true;
	      });
	      this.on('compositionend', function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }

	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange && !lazy) {
	      this.on('focus', function () {
	        self.focused = true;
	      });
	      this.on('blur', function () {
	        self.focused = false;
	        // do not sync value after fragment removal (#2017)
	        if (!self._frag || self._frag.inserted) {
	          self.rawListener();
	        }
	      });
	    }

	    // Now attach the main listener
	    this.listener = this.rawListener = function () {
	      if (composing || !self._bound) {
	        return;
	      }
	      var val = number || isRange ? toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };

	    // apply debounce
	    if (debounce) {
	      this.listener = _debounce(this.listener, debounce);
	    }

	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      var method = jQuery.fn.on ? 'on' : 'bind';
	      jQuery(el)[method]('change', this.rawListener);
	      if (!lazy) {
	        jQuery(el)[method]('input', this.listener);
	      }
	    } else {
	      this.on('change', this.rawListener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }

	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && isIE9) {
	      this.on('cut', function () {
	        nextTick(self.listener);
	      });
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }

	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    // #3029 only update when the value changes. This prevent
	    // browsers from overwriting values like selectionStart
	    value = _toString(value);
	    if (value !== this.el.value) this.el.value = value;
	  },

	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      var method = jQuery.fn.off ? 'off' : 'unbind';
	      jQuery(el)[method]('change', this.listener);
	      jQuery(el)[method]('input', this.listener);
	    }
	  }
	};

	var radio = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value;
	      }
	      var val = el.value;
	      if (self.params.number) {
	        val = toNumber(val);
	      }
	      return val;
	    };

	    this.listener = function () {
	      self.set(self.getValue());
	    };
	    this.on('change', this.listener);

	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    this.el.checked = looseEqual(value, this.getValue());
	  }
	};

	var select = {

	  bind: function bind() {
	    var _this = this;

	    var self = this;
	    var el = this.el;

	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };

	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple');

	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple);
	      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
	      self.set(value);
	    };
	    this.on('change', this.listener);

	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true);
	    if (multiple && initValue.length || !multiple && initValue !== null) {
	      this.afterBind = this.listener;
	    }

	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', function () {
	      nextTick(_this.forceUpdate);
	    });
	    if (!inDoc(el)) {
	      nextTick(this.forceUpdate);
	    }
	  },

	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    var multi = this.multiple && isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },

	  unbind: function unbind() {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate);
	  }
	};

	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */

	function getValue(el, multi, init) {
	  var res = multi ? [] : null;
	  var op, val, selected;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    selected = init ? op.hasAttribute('selected') : op.selected;
	    if (selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */

	function indexOf$1(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}

	var checkbox = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    this.getValue = function () {
	      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
	    };

	    function getBooleanValue() {
	      var val = el.checked;
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue;
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue;
	      }
	      return val;
	    }

	    this.listener = function () {
	      var model = self._watcher.get();
	      if (isArray(model)) {
	        var val = self.getValue();
	        var i = indexOf(model, val);
	        if (el.checked) {
	          if (i < 0) {
	            self.set(model.concat(val));
	          }
	        } else if (i > -1) {
	          self.set(model.slice(0, i).concat(model.slice(i + 1)));
	        }
	      } else {
	        self.set(getBooleanValue());
	      }
	    };

	    this.on('change', this.listener);
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    var el = this.el;
	    if (isArray(value)) {
	      el.checked = indexOf(value, this.getValue()) > -1;
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = looseEqual(value, el._trueValue);
	      } else {
	        el.checked = !!value;
	      }
	    }
	  }
	};

	var handlers = {
	  text: text$2,
	  radio: radio,
	  select: select,
	  checkbox: checkbox
	};

	var model = {

	  priority: MODEL,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],

	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */

	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model="' + this.descriptor.raw + '". ' + 'You might want to use a two-way filter to ensure correct behavior.', this.vm);
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag, this.vm);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },

	  /**
	   * Check read/write filter stats.
	   */

	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },

	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
	};

	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': [8, 46],
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};

	function keyFilter(handler, keys) {
	  var codes = keys.map(function (key) {
	    var charCode = key.charCodeAt(0);
	    if (charCode > 47 && charCode < 58) {
	      return parseInt(key, 10);
	    }
	    if (key.length === 1) {
	      charCode = key.toUpperCase().charCodeAt(0);
	      if (charCode > 64 && charCode < 91) {
	        return charCode;
	      }
	    }
	    return keyCodes[key];
	  });
	  codes = [].concat.apply([], codes);
	  return function keyHandler(e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e);
	    }
	  };
	}

	function stopFilter(handler) {
	  return function stopHandler(e) {
	    e.stopPropagation();
	    return handler.call(this, e);
	  };
	}

	function preventFilter(handler) {
	  return function preventHandler(e) {
	    e.preventDefault();
	    return handler.call(this, e);
	  };
	}

	function selfFilter(handler) {
	  return function selfHandler(e) {
	    if (e.target === e.currentTarget) {
	      return handler.call(this, e);
	    }
	  };
	}

	var on$1 = {

	  priority: ON,
	  acceptStatement: true,
	  keyCodes: keyCodes,

	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },

	  update: function update(handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {};
	    }

	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler, this.vm);
	      return;
	    }

	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler);
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler);
	    }
	    if (this.modifiers.self) {
	      handler = selfFilter(handler);
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers).filter(function (key) {
	      return key !== 'stop' && key !== 'prevent' && key !== 'self' && key !== 'capture';
	    });
	    if (keys.length) {
	      handler = keyFilter(handler, keys);
	    }

	    this.reset();
	    this.handler = handler;

	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      on(this.el, this.arg, this.handler, this.modifiers.capture);
	    }
	  },

	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      off(el, this.arg, this.handler);
	    }
	  },

	  unbind: function unbind() {
	    this.reset();
	  }
	};

	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var propCache = Object.create(null);

	var testEl = null;

	var style = {

	  deep: true,

	  update: function update(value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value;
	    } else if (isArray(value)) {
	      this.handleObject(value.reduce(extend, {}));
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  handleObject: function handleObject(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var name, val;
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null);
	        delete cache[name];
	      }
	    }
	    for (name in value) {
	      val = value[name];
	      if (val !== cache[name]) {
	        cache[name] = val;
	        this.handleSingle(name, val);
	      }
	    }
	  },

	  handleSingle: function handleSingle(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          warn('It\'s probably a bad idea to use !important with inline rules. ' + 'This feature will be deprecated in a future version of Vue.');
	        }
	        value = value.replace(importantRE, '').trim();
	        this.el.style.setProperty(prop.kebab, value, isImportant);
	      } else {
	        this.el.style[prop.camel] = value;
	      }
	    } else {
	      this.el.style[prop.camel] = '';
	    }
	  }

	};

	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}

	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function prefix(prop) {
	  prop = hyphenate(prop);
	  var camel = camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  var i = prefixes.length;
	  var prefixed;
	  if (camel !== 'filter' && camel in testEl.style) {
	    return {
	      kebab: prop,
	      camel: camel
	    };
	  }
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return {
	        kebab: prefixes[i] + prop,
	        camel: prefixed
	      };
	    }
	  }
	}

	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;

	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
	// these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
	// these attributes expect enumrated values of "true" or "false"
	// but are not boolean attributes
	var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;

	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	};

	var bind$1 = {

	  priority: BIND,

	  bind: function bind() {
	    var attr = this.arg;
	    var tag = this.el.tagName;
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true;
	    }
	    // handle interpolation bindings
	    var descriptor = this.descriptor;
	    var tokens = descriptor.interp;
	    if (tokens) {
	      // handle interpolations with one-time tokens
	      if (descriptor.hasOneTime) {
	        this.expression = tokensToExp(tokens, this._scope || this.vm);
	      }

	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
	        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.', this.vm);
	        this.el.removeAttribute(attr);
	        this.invalid = true;
	      }

	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production') {
	        var raw = attr + '="' + descriptor.raw + '": ';
	        // warn src
	        if (attr === 'src') {
	          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.', this.vm);
	        }

	        // warn style
	        if (attr === 'style') {
	          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.', this.vm);
	        }
	      }
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) {
	      return;
	    }
	    var attr = this.arg;
	    if (this.arg) {
	      this.handleSingle(attr, value);
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  // share object handler with v-bind:class
	  handleObject: style.handleObject,

	  handleSingle: function handleSingle(attr, value) {
	    var el = this.el;
	    var interp = this.descriptor.interp;
	    if (this.modifiers.camel) {
	      attr = camelize(attr);
	    }
	    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
	      var attrValue = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
	      ? '' : value : value;

	      if (el[attr] !== attrValue) {
	        el[attr] = attrValue;
	      }
	    }
	    // set model props
	    var modelProp = modelProps[attr];
	    if (!interp && modelProp) {
	      el[modelProp] = value;
	      // update v-model if present
	      var model = el.__v_model;
	      if (model) {
	        model.listener();
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && el.tagName === 'TEXTAREA') {
	      el.removeAttribute(attr);
	      return;
	    }
	    // update attribute
	    if (enumeratedAttrRE.test(attr)) {
	      el.setAttribute(attr, value ? 'true' : 'false');
	    } else if (value != null && value !== false) {
	      if (attr === 'class') {
	        // handle edge case #1960:
	        // class interpolation should not overwrite Vue transition class
	        if (el.__v_trans) {
	          value += ' ' + el.__v_trans.id + '-transition';
	        }
	        setClass(el, value);
	      } else if (xlinkRE.test(attr)) {
	        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
	      } else {
	        el.setAttribute(attr, value === true ? '' : value);
	      }
	    } else {
	      el.removeAttribute(attr);
	    }
	  }
	};

	var el = {

	  priority: EL,

	  bind: function bind() {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return;
	    }
	    var id = this.id = camelize(this.arg);
	    var refs = (this._scope || this.vm).$els;
	    if (hasOwn(refs, id)) {
	      refs[id] = this.el;
	    } else {
	      defineReactive(refs, id, this.el);
	    }
	  },

	  unbind: function unbind() {
	    var refs = (this._scope || this.vm).$els;
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null;
	    }
	  }
	};

	var ref = {
	  bind: function bind() {
	    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.', this.vm);
	  }
	};

	var cloak = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('pre-hook:compiled', function () {
	      el.removeAttribute('v-cloak');
	    });
	  }
	};

	// logic control
	// two-way binding
	// event handling
	// attributes
	// ref & el
	// cloak
	// must export plain object
	var directives = {
	  text: text$1,
	  html: html,
	  'for': vFor,
	  'if': vIf,
	  show: show,
	  model: model,
	  on: on$1,
	  bind: bind$1,
	  el: el,
	  ref: ref,
	  cloak: cloak
	};

	var vClass = {

	  deep: true,

	  update: function update(value) {
	    if (!value) {
	      this.cleanup();
	    } else if (typeof value === 'string') {
	      this.setClass(value.trim().split(/\s+/));
	    } else {
	      this.setClass(normalize$1(value));
	    }
	  },

	  setClass: function setClass(value) {
	    this.cleanup(value);
	    for (var i = 0, l = value.length; i < l; i++) {
	      var val = value[i];
	      if (val) {
	        apply(this.el, val, addClass);
	      }
	    }
	    this.prevKeys = value;
	  },

	  cleanup: function cleanup(value) {
	    var prevKeys = this.prevKeys;
	    if (!prevKeys) return;
	    var i = prevKeys.length;
	    while (i--) {
	      var key = prevKeys[i];
	      if (!value || value.indexOf(key) < 0) {
	        apply(this.el, key, removeClass);
	      }
	    }
	  }
	};

	/**
	 * Normalize objects and arrays (potentially containing objects)
	 * into array of strings.
	 *
	 * @param {Object|Array<String|Object>} value
	 * @return {Array<String>}
	 */

	function normalize$1(value) {
	  var res = [];
	  if (isArray(value)) {
	    for (var i = 0, l = value.length; i < l; i++) {
	      var _key = value[i];
	      if (_key) {
	        if (typeof _key === 'string') {
	          res.push(_key);
	        } else {
	          for (var k in _key) {
	            if (_key[k]) res.push(k);
	          }
	        }
	      }
	    }
	  } else if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) res.push(key);
	    }
	  }
	  return res;
	}

	/**
	 * Add or remove a class/classes on an element
	 *
	 * @param {Element} el
	 * @param {String} key The class name. This may or may not
	 *                     contain a space character, in such a
	 *                     case we'll deal with multiple class
	 *                     names at once.
	 * @param {Function} fn
	 */

	function apply(el, key, fn) {
	  key = key.trim();
	  if (key.indexOf(' ') === -1) {
	    fn(el, key);
	    return;
	  }
	  // The key contains one or more space characters.
	  // Since a class name doesn't accept such characters, we
	  // treat it as multiple classes.
	  var keys = key.split(/\s+/);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    fn(el, keys[i]);
	  }
	}

	var component = {

	  priority: COMPONENT,

	  params: ['keep-alive', 'transition-mode', 'inline-template'],

	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */

	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive;
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // create a ref anchor
	      this.anchor = createAnchor('v-component');
	      replace(this.el, this.anchor);
	      // remove is attribute.
	      // this is removed during compilation, but because compilation is
	      // cached, when the component is used elsewhere this attribute
	      // will remain at link time.
	      this.el.removeAttribute('is');
	      this.el.removeAttribute(':is');
	      // remove ref, same as above
	      if (this.descriptor.ref) {
	        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
	      }
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression);
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },

	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */

	  update: function update(value) {
	    if (!this.literal) {
	      this.setComponent(value);
	    }
	  },

	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */

	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.childVM = null;
	    } else {
	      var self = this;
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb);
	      });
	    }
	  },

	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */

	  resolveComponent: function resolveComponent(value, cb) {
	    var self = this;
	    this.pendingComponentCb = cancellable(function (Component) {
	      self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(value, this.pendingComponentCb);
	  },

	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */

	  mountComponent: function mountComponent(cb) {
	    // actual mount
	    this.unbuild(true);
	    var self = this;
	    var activateHooks = this.Component.options.activate;
	    var cached = this.getCached();
	    var newComponent = this.build();
	    if (activateHooks && !cached) {
	      this.waitingFor = newComponent;
	      callActivateHooks(activateHooks, newComponent, function () {
	        if (self.waitingFor !== newComponent) {
	          return;
	        }
	        self.waitingFor = null;
	        self.transition(newComponent, cb);
	      });
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef();
	      }
	      this.transition(newComponent, cb);
	    }
	  },

	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */

	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },

	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */

	  build: function build(extraOptions) {
	    var cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: cloneNode(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      };
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        extend(options, extraOptions);
	      }
	      var child = new this.Component(options);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
	        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template, child);
	      }
	      return child;
	    }
	  },

	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */

	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },

	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */

	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      if (!this.keepAlive) {
	        this.waitingFor.$destroy();
	      }
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._inactive = true;
	        child._updateRef(true);
	      }
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },

	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */

	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },

	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */

	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    // for devtool inspection
	    if (current) current._inactive = true;
	    target._inactive = false;
	    this.childVM = target;
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },

	  /**
	   * Unbind.
	   */

	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};

	/**
	 * Call activate hooks in order (asynchronous)
	 *
	 * @param {Array} hooks
	 * @param {Vue} vm
	 * @param {Function} cb
	 */

	function callActivateHooks(hooks, vm, cb) {
	  var total = hooks.length;
	  var called = 0;
	  hooks[0].call(vm, next);
	  function next() {
	    if (++called >= total) {
	      cb();
	    } else {
	      hooks[called].call(vm, next);
	    }
	  }
	}

	var propBindingModes = config._propBindingModes;
	var empty = {};

	// regexes
	var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;

	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @param {Vue} vm
	 * @return {Function} propsLinkFn
	 */

	function compileProps(el, propOptions, vm) {
	  var props = [];
	  var propsData = vm.$options.propsData;
	  var names = Object.keys(propOptions);
	  var i = names.length;
	  var options, name, attr, value, path, parsed, prop;
	  while (i--) {
	    name = names[i];
	    options = propOptions[name] || empty;

	    if (process.env.NODE_ENV !== 'production' && name === '$data') {
	      warn('Do not use $data as prop.', vm);
	      continue;
	    }

	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = camelize(name);
	    if (!identRE$1.test(path)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.', vm);
	      continue;
	    }

	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    };

	    attr = hyphenate(name);
	    // first check dynamic version
	    if ((value = getBindAttr(el, attr)) === null) {
	      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY;
	      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME;
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value;
	      parsed = parseDirective(value);
	      value = parsed.expression;
	      prop.filters = parsed.filters;
	      // check binding type
	      if (isLiteral(value) && !parsed.filters) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true;
	      } else {
	        prop.dynamic = true;
	        // check non-settable path for two-way bindings
	        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
	          prop.mode = propBindingModes.ONE_WAY;
	          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value, vm);
	        }
	      }
	      prop.parentPath = value;

	      // warn required two-way
	      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
	        warn('Prop "' + name + '" expects a two-way binding type.', vm);
	      }
	    } else if ((value = getAttr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value;
	    } else if (propsData && (value = propsData[name] || propsData[path]) !== null) {
	      // has propsData
	      prop.raw = value;
	    } else if (process.env.NODE_ENV !== 'production') {
	      // check possible camelCase prop usage
	      var lowerCaseName = path.toLowerCase();
	      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
	      if (value) {
	        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.', vm);
	      } else if (options.required && (!propsData || !(name in propsData) && !(path in propsData))) {
	        // warn missing required
	        warn('Missing required prop: ' + name, vm);
	      }
	    }
	    // push prop
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	}

	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */

	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, scope) {
	    // store resolved props info
	    vm._props = {};
	    var inlineProps = vm.$options.propsData;
	    var i = props.length;
	    var prop, path, options, value, raw;
	    while (i--) {
	      prop = props[i];
	      raw = prop.raw;
	      path = prop.path;
	      options = prop.options;
	      vm._props[path] = prop;
	      if (inlineProps && hasOwn(inlineProps, path)) {
	        initProp(vm, prop, inlineProps[path]);
	      }if (raw === null) {
	        // initialize absent prop
	        initProp(vm, prop, undefined);
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (prop.mode === propBindingModes.ONE_TIME) {
	          // one time binding
	          value = (scope || vm._context || vm).$get(prop.parentPath);
	          initProp(vm, prop, value);
	        } else {
	          if (vm._context) {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope); // el, host, scope
	          } else {
	              // root instance
	              initProp(vm, prop, vm.$get(prop.parentPath));
	            }
	        }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        var stripped = stripQuotes(raw);
	        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
	        initProp(vm, prop, value);
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value, or with same
	        // literal value (e.g. disabled="disabled")
	        // see https://github.com/vuejs/vue-loader/issues/182
	        value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name)) ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
	}

	/**
	 * Process a prop with a rawValue, applying necessary coersions,
	 * default values & assertions and call the given callback with
	 * processed value.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} rawValue
	 * @param {Function} fn
	 */

	function processPropValue(vm, prop, rawValue, fn) {
	  var isSimple = prop.dynamic && isSimplePath(prop.parentPath);
	  var value = rawValue;
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop);
	  }
	  value = coerceProp(prop, value, vm);
	  var coerced = value !== rawValue;
	  if (!assertProp(prop, value, vm)) {
	    value = undefined;
	  }
	  if (isSimple && !coerced) {
	    withoutConversion(function () {
	      fn(value);
	    });
	  } else {
	    fn(value);
	  }
	}

	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	function initProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    defineReactive(vm, prop.path, value);
	  });
	}

	/**
	 * Update a prop's value on a vm.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	function updateProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    vm[prop.path] = value;
	  });
	}

	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @return {*}
	 */

	function getPropDefaultValue(vm, prop) {
	  // no default, return undefined
	  var options = prop.options;
	  if (!hasOwn(options, 'default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options['default'];
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid default value for prop "' + prop.name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
	}

	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 * @param {Vue} vm
	 */

	function assertProp(prop, value, vm) {
	  if (!prop.options.required && ( // non-required
	  prop.raw === null || // abscent
	  value == null) // null or undefined
	  ) {
	      return true;
	    }
	  var options = prop.options;
	  var type = options.type;
	  var valid = !type;
	  var expectedTypes = [];
	  if (type) {
	    if (!isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType);
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn('Invalid prop: type check failed for prop "' + prop.name + '".' + ' Expected ' + expectedTypes.map(formatType).join(', ') + ', got ' + formatValue(value) + '.', vm);
	    }
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator(value)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for prop "' + prop.name + '".', vm);
	      return false;
	    }
	  }
	  return true;
	}

	/**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */

	function coerceProp(prop, value, vm) {
	  var coerce = prop.options.coerce;
	  if (!coerce) {
	    return value;
	  }
	  if (typeof coerce === 'function') {
	    return coerce(value);
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid coerce for prop "' + prop.name + '": expected function, got ' + typeof coerce + '.', vm);
	    return value;
	  }
	}

	/**
	 * Assert the type of a value
	 *
	 * @param {*} value
	 * @param {Function} type
	 * @return {Object}
	 */

	function assertType(value, type) {
	  var valid;
	  var expectedType;
	  if (type === String) {
	    expectedType = 'string';
	    valid = typeof value === expectedType;
	  } else if (type === Number) {
	    expectedType = 'number';
	    valid = typeof value === expectedType;
	  } else if (type === Boolean) {
	    expectedType = 'boolean';
	    valid = typeof value === expectedType;
	  } else if (type === Function) {
	    expectedType = 'function';
	    valid = typeof value === expectedType;
	  } else if (type === Object) {
	    expectedType = 'object';
	    valid = isPlainObject(value);
	  } else if (type === Array) {
	    expectedType = 'array';
	    valid = isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  };
	}

	/**
	 * Format type for output
	 *
	 * @param {String} type
	 * @return {String}
	 */

	function formatType(type) {
	  return type ? type.charAt(0).toUpperCase() + type.slice(1) : 'custom type';
	}

	/**
	 * Format value
	 *
	 * @param {*} value
	 * @return {String}
	 */

	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}

	var bindingModes = config._propBindingModes;

	var propDef = {

	  bind: function bind() {
	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this.descriptor.prop;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;
	    var twoWay = prop.mode === bindingModes.TWO_WAY;

	    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      updateProp(child, prop, val);
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });

	    // set the child initial value.
	    initProp(child, prop, parentWatcher.value);

	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('pre-hook:created', function () {
	        self.childWatcher = new Watcher(child, childKey, function (val) {
	          parentWatcher.set(val);
	        }, {
	          // ensure sync upward before parent sync down.
	          // this is necessary in cases e.g. the child
	          // mutates a prop array, then replaces it. (#1683)
	          sync: true
	        });
	      });
	    }
	  },

	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};

	var queue$1 = [];
	var queued = false;

	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */

	function pushJob(job) {
	  queue$1.push(job);
	  if (!queued) {
	    queued = true;
	    nextTick(flush);
	  }
	}

	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */

	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue$1.length; i++) {
	    queue$1[i]();
	  }
	  queue$1 = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}

	var TYPE_TRANSITION = 'transition';
	var TYPE_ANIMATION = 'animation';
	var transDurationProp = transitionProp + 'Duration';
	var animDurationProp = animationProp + 'Duration';

	/**
	 * If a just-entered element is applied the
	 * leave class while its enter transition hasn't started yet,
	 * and the transitioned property has the same value for both
	 * enter/leave, then the leave transition will be skipped and
	 * the transitionend event never fires. This function ensures
	 * its callback to be called after a transition has started
	 * by waiting for double raf.
	 *
	 * It falls back to setTimeout on devices that support CSS
	 * transitions but not raf (e.g. Android 4.2 browser) - since
	 * these environments are usually slow, we are giving it a
	 * relatively large timeout.
	 */

	var raf = inBrowser && window.requestAnimationFrame;
	var waitForTransitionStart = raf
	/* istanbul ignore next */
	? function (fn) {
	  raf(function () {
	    raf(fn);
	  });
	} : function (fn) {
	  setTimeout(fn, 50);
	};

	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	function Transition(el, id, hooks, vm) {
	  this.id = id;
	  this.el = el;
	  this.enterClass = hooks && hooks.enterClass || id + '-enter';
	  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // check css transition type
	  this.type = hooks && hooks.type;
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
	      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type, vm);
	    }
	  }
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = bind(self[m], self);
	  });
	}

	var p$1 = Transition.prototype;

	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */

	p$1.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  pushJob(this.enterNextTick);
	};

	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */

	p$1.enterNextTick = function () {
	  var _this = this;

	  // prevent transition skipping
	  this.justEntered = true;
	  waitForTransitionStart(function () {
	    _this.justEntered = false;
	  });
	  var enterDone = this.enterDone;
	  var type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass);
	      this.setupCssCb(transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass);
	  }
	};

	/**
	 * The "cleanup" phase of an entering transition.
	 */

	p$1.enterDone = function () {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};

	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */

	p$1.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      pushJob(this.leaveNextTick);
	    }
	  }
	};

	/**
	 * The "nextTick" phase of a leaving transition.
	 */

	p$1.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};

	/**
	 * The "cleanup" phase of a leaving transition.
	 */

	p$1.leaveDone = function () {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};

	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */

	p$1.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};

	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */

	p$1.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};

	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */

	p$1.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};

	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */

	p$1.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  var type = this.type || this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};

	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */

	p$1.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  on(el, event, onEnd);
	};

	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */

	function isHidden(el) {
	  if (/svg$/.test(el.namespaceURI)) {
	    // SVG elements do not have offset(Width|Height)
	    // so we need to check the client rect
	    var rect = el.getBoundingClientRect();
	    return !(rect.width || rect.height);
	  } else {
	    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	  }
	}

	var transition$1 = {

	  priority: TRANSITION,

	  update: function update(id, oldId) {
	    var el = this.el;
	    // resolve on owner vm
	    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
	    id = id || 'v';
	    oldId = oldId || 'v';
	    el.__v_trans = new Transition(el, id, hooks, this.vm);
	    removeClass(el, oldId + '-transition');
	    addClass(el, id + '-transition');
	  }
	};

	var internalDirectives = {
	  style: style,
	  'class': vClass,
	  component: component,
	  prop: propDef,
	  transition: transition$1
	};

	// special binding prefixes
	var bindRE = /^v-bind:|^:/;
	var onRE = /^v-on:|^@/;
	var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
	var modifierRE = /\.[^\.]+/g;
	var transitionRE = /^(v-bind:|:)?transition$/;

	// default directive priority
	var DEFAULT_PRIORITY = 1000;
	var DEFAULT_TERMINAL_PRIORITY = 2000;

	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */

	function compile(el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && !isScript(el) && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;

	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */

	  return function compositeLinkFn(vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer() {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	}

	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */

	function linkAndCapture(linker, vm) {
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV === 'production') {
	    // reset directives before every capture in production
	    // mode, so that when unlinking we don't need to splice
	    // them out (which turns out to be a perf hit).
	    // they are kept in development mode because they are
	    // useful for Vue's own tests.
	    vm._directives = [];
	  }
	  var originalDirCount = vm._directives.length;
	  linker();
	  var dirs = vm._directives.slice(originalDirCount);
	  sortDirectives(dirs);
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
	}

	/**
	 * sort directives by priority (stable sort)
	 *
	 * @param {Array} dirs
	 */
	function sortDirectives(dirs) {
	  if (dirs.length === 0) return;

	  var groupedMap = {};
	  var i, j, k, l;
	  var index = 0;
	  var priorities = [];
	  for (i = 0, j = dirs.length; i < j; i++) {
	    var dir = dirs[i];
	    var priority = dir.descriptor.def.priority || DEFAULT_PRIORITY;
	    var array = groupedMap[priority];
	    if (!array) {
	      array = groupedMap[priority] = [];
	      priorities.push(priority);
	    }
	    array.push(dir);
	  }

	  priorities.sort(function (a, b) {
	    return a > b ? -1 : a === b ? 0 : 1;
	  });
	  for (i = 0, j = priorities.length; i < j; i++) {
	    var group = groupedMap[priorities[i]];
	    for (k = 0, l = group.length; k < l; k++) {
	      dirs[index++] = group[k];
	    }
	  }
	}

	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */

	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  }
	  // expose linked directives
	  unlink.dirs = dirs;
	  return unlink;
	}

	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */

	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (process.env.NODE_ENV !== 'production' && !destroying) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}

	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */

	function compileAndLinkProps(vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props, vm);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	}

	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */

	function compileRoot(el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;

	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    var names = containerAttrs.filter(function (attr) {
	      // allow vue-loader/vueify scoped css attributes
	      return attr.name.indexOf('_v-') < 0 &&
	      // allow event listeners
	      !onRE.test(attr.name) &&
	      // allow slots
	      attr.name !== 'slot';
	    }).map(function (attr) {
	      return '"' + attr.name + '"';
	    });
	    if (names.length) {
	      var plural = names.length > 1;

	      var componentName = options.el.tagName.toLowerCase();
	      if (componentName === 'component' && options.name) {
	        componentName += ':' + options.name;
	      }

	      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + componentName + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment-Instance');
	    }
	  }

	  options._containerAttrs = options._replacerAttrs = null;
	  return function rootLinkFn(vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope);
	      }, context);
	    }

	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);

	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	}

	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && !isScript(node)) {
	    return compileElement(node, options);
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}

	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    // a textarea which has v-pre attr should skip complie.
	    if (getAttr(el, 'v-pre') !== null) {
	      return skip;
	    }
	    var tokens = parseText(el.value);
	    if (tokens) {
	      el.setAttribute(':value', tokensToExp(tokens));
	      el.value = '';
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  var attrs = hasAttrs && toArray(el.attributes);
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, attrs, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(attrs, options);
	  }
	  return linkFn;
	}

	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */

	function compileTextNode(node, options) {
	  // skip marked text nodes
	  if (node._skip) {
	    return removeText;
	  }

	  var tokens = parseText(node.wholeText);
	  if (!tokens) {
	    return null;
	  }

	  // mark adjacent text nodes as skipped,
	  // because we are using node.wholeText to compile
	  // all adjacent text nodes together. This fixes
	  // issues in IE where sometimes it splits up a single
	  // text node into multiple ones.
	  var next = node.nextSibling;
	  while (next && next.nodeType === 3) {
	    next._skip = true;
	    next = next.nextSibling;
	  }

	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}

	/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */

	function removeText(vm, node) {
	  remove(node);
	}

	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */

	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    if (token.descriptor) return;
	    var parsed = parseDirective(token.value);
	    token.descriptor = {
	      name: type,
	      def: directives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    };
	  }
	  return el;
	}

	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */

	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value);
	          if (token.html) {
	            replace(node, parseTemplate(value, true));
	          } else {
	            node.data = _toString(value);
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope);
	        }
	      }
	    }
	    replace(el, fragClone);
	  };
	}

	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}

	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */

	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag);
	      }
	    }
	  };
	}

	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */

	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (commonTagRE.test(tag)) {
	    return;
	  }
	  var def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}

	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function checkComponent(el, options) {
	  var component = checkComponentAttr(el, options);
	  if (component) {
	    var ref = findRef(el);
	    var descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    };
	    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
	      if (ref) {
	        defineReactive((scope || vm).$refs, ref, null);
	      }
	      vm._bindDir(descriptor, el, host, scope, frag);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}

	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Array} attrs
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */

	function checkTerminalDirectives(el, attrs, options) {
	  // skip v-pre
	  if (getAttr(el, 'v-pre') !== null) {
	    return skip;
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling;
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip;
	    }
	  }

	  var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
	  for (var i = 0, j = attrs.length; i < j; i++) {
	    attr = attrs[i];
	    name = attr.name.replace(modifierRE, '');
	    if (matched = name.match(dirAttrRE)) {
	      def = resolveAsset(options, 'directives', matched[1]);
	      if (def && def.terminal) {
	        if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
	          termDef = def;
	          rawName = attr.name;
	          modifiers = parseModifiers(attr.name);
	          value = attr.value;
	          dirName = matched[1];
	          arg = matched[2];
	        }
	      }
	    }
	  }

	  if (termDef) {
	    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
	  }
	}

	function skip() {}
	skip.terminal = true;

	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} def
	 * @param {String} [rawName]
	 * @param {String} [arg]
	 * @param {Object} [modifiers]
	 * @return {Function} terminalLinkFn
	 */

	function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
	  var parsed = parseDirective(value);
	  var descriptor = {
	    name: dirName,
	    arg: arg,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    attr: rawName,
	    modifiers: modifiers,
	    def: def
	  };
	  // check ref for v-for, v-if and router-view
	  if (dirName === 'for' || dirName === 'router-view') {
	    descriptor.ref = findRef(el);
	  }
	  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      defineReactive((scope || vm).$refs, descriptor.ref, null);
	    }
	    vm._bindDir(descriptor, el, host, scope, frag);
	  };
	  fn.terminal = true;
	  return fn;
	}

	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */

	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
	  while (i--) {
	    attr = attrs[i];
	    name = rawName = attr.name;
	    value = rawValue = attr.value;
	    tokens = parseText(value);
	    // reset arg
	    arg = null;
	    // check modifiers
	    modifiers = parseModifiers(name);
	    name = name.replace(modifierRE, '');

	    // attribute interpolations
	    if (tokens) {
	      value = tokensToExp(tokens);
	      arg = name;
	      pushDir('bind', directives.bind, tokens);
	      // warn against mixing mustaches with v-bind
	      if (process.env.NODE_ENV !== 'production') {
	        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class';
	        })) {
	          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.', options);
	        }
	      }
	    } else

	      // special attribute: transition
	      if (transitionRE.test(name)) {
	        modifiers.literal = !bindRE.test(name);
	        pushDir('transition', internalDirectives.transition);
	      } else

	        // event handlers
	        if (onRE.test(name)) {
	          arg = name.replace(onRE, '');
	          pushDir('on', directives.on);
	        } else

	          // attribute bindings
	          if (bindRE.test(name)) {
	            dirName = name.replace(bindRE, '');
	            if (dirName === 'style' || dirName === 'class') {
	              pushDir(dirName, internalDirectives[dirName]);
	            } else {
	              arg = dirName;
	              pushDir('bind', directives.bind);
	            }
	          } else

	            // normal directives
	            if (matched = name.match(dirAttrRE)) {
	              dirName = matched[1];
	              arg = matched[2];

	              // skip v-else (when used with v-show)
	              if (dirName === 'else') {
	                continue;
	              }

	              dirDef = resolveAsset(options, 'directives', dirName, true);
	              if (dirDef) {
	                pushDir(dirName, dirDef);
	              }
	            }
	  }

	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */

	  function pushDir(dirName, def, interpTokens) {
	    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
	    var parsed = !hasOneTimeToken && parseDirective(value);
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      // conversion from interpolation strings with one-time token
	      // to expression is differed until directive bind time so that we
	      // have access to the actual vm context for one-time bindings.
	      expression: parsed && parsed.expression,
	      filters: parsed && parsed.filters,
	      interp: interpTokens,
	      hasOneTime: hasOneTimeToken
	    });
	  }

	  if (dirs.length) {
	    return makeNodeLinkFn(dirs);
	  }
	}

	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */

	function parseModifiers(name) {
	  var res = Object.create(null);
	  var match = name.match(modifierRE);
	  if (match) {
	    var i = match.length;
	    while (i--) {
	      res[match[i].slice(1)] = true;
	    }
	  }
	  return res;
	}

	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */

	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag);
	    }
	  };
	}

	/**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */

	function hasOneTime(tokens) {
	  var i = tokens.length;
	  while (i--) {
	    if (tokens[i].oneTime) return true;
	  }
	}

	function isScript(el) {
	  return el.tagName === 'SCRIPT' && (!el.hasAttribute('type') || el.getAttribute('type') === 'text/javascript');
	}

	var specialCharRE = /[^\w\-:\.]/;

	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transclude(el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (isTemplate(el)) {
	    el = parseTemplate(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>';
	    }
	    if (options.template) {
	      options._content = extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (isFragment(el)) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    prepend(createAnchor('v-start', true), el);
	    el.appendChild(createAnchor('v-end', true));
	  }
	  return el;
	}

	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = parseTemplate(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    if (!replacer) {
	      return frag;
	    }
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
	      // element directive
	      resolveAsset(options, 'elementDirectives', tag) ||
	      // for block
	      replacer.hasAttribute('v-for') ||
	      // if block
	      replacer.hasAttribute('v-if')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
	  }
	}

	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */

	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return toArray(el.attributes);
	  }
	}

	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */

	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class' && !parseText(value) && (value = value.trim())) {
	      value.split(/\s+/).forEach(function (cls) {
	        addClass(to, cls);
	      });
	    }
	  }
	}

	/**
	 * Scan and determine slot content distribution.
	 * We do this during transclusion instead at compile time so that
	 * the distribution is decoupled from the compilation order of
	 * the slots.
	 *
	 * @param {Element|DocumentFragment} template
	 * @param {Element} content
	 * @param {Vue} vm
	 */

	function resolveSlots(vm, content) {
	  if (!content) {
	    return;
	  }
	  var contents = vm._slotContents = Object.create(null);
	  var el, name;
	  for (var i = 0, l = content.children.length; i < l; i++) {
	    el = content.children[i];
	    /* eslint-disable no-cond-assign */
	    if (name = el.getAttribute('slot')) {
	      (contents[name] || (contents[name] = [])).push(el);
	    }
	    /* eslint-enable no-cond-assign */
	    if (process.env.NODE_ENV !== 'production' && getBindAttr(el, 'slot')) {
	      warn('The "slot" attribute must be static.', vm.$parent);
	    }
	  }
	  for (name in contents) {
	    contents[name] = extractFragment(contents[name], content);
	  }
	  if (content.hasChildNodes()) {
	    var nodes = content.childNodes;
	    if (nodes.length === 1 && nodes[0].nodeType === 3 && !nodes[0].data.trim()) {
	      return;
	    }
	    contents['default'] = extractFragment(content.childNodes, content);
	  }
	}

	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @return {DocumentFragment}
	 */

	function extractFragment(nodes, parent) {
	  var frag = document.createDocumentFragment();
	  nodes = toArray(nodes);
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	      parent.removeChild(node);
	      node = parseTemplate(node, true);
	    }
	    frag.appendChild(node);
	  }
	  return frag;
	}



	var compiler = Object.freeze({
		compile: compile,
		compileAndLinkProps: compileAndLinkProps,
		compileRoot: compileRoot,
		transclude: transclude,
		resolveSlots: resolveSlots
	});

	function stateMixin (Vue) {
	  /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */

	  Object.defineProperty(Vue.prototype, '$data', {
	    get: function get() {
	      return this._data;
	    },
	    set: function set(newData) {
	      if (newData !== this._data) {
	        this._setData(newData);
	      }
	    }
	  });

	  /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */

	  Vue.prototype._initState = function () {
	    this._initProps();
	    this._initMeta();
	    this._initMethods();
	    this._initData();
	    this._initComputed();
	  };

	  /**
	   * Initialize props.
	   */

	  Vue.prototype._initProps = function () {
	    var options = this.$options;
	    var el = options.el;
	    var props = options.props;
	    if (props && !el) {
	      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.', this);
	    }
	    // make sure to convert string selectors into element now
	    el = options.el = query(el);
	    this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compileAndLinkProps(this, el, props, this._scope) : null;
	  };

	  /**
	   * Initialize the data.
	   */

	  Vue.prototype._initData = function () {
	    var dataFn = this.$options.data;
	    var data = this._data = dataFn ? dataFn() : {};
	    if (!isPlainObject(data)) {
	      data = {};
	      process.env.NODE_ENV !== 'production' && warn('data functions should return an object.', this);
	    }
	    var props = this._props;
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      // there are two scenarios where we can proxy a data key:
	      // 1. it's not already defined as a prop
	      // 2. it's provided via a instantiation option AND there are no
	      //    template prop present
	      if (!props || !hasOwn(props, key)) {
	        this._proxy(key);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Data field "' + key + '" is already defined ' + 'as a prop. To provide default value for a prop, use the "default" ' + 'prop option; if you want to pass prop values to an instantiation ' + 'call, use the "propsData" option.', this);
	      }
	    }
	    // observe data
	    observe(data, this);
	  };

	  /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */

	  Vue.prototype._setData = function (newData) {
	    newData = newData || {};
	    var oldData = this._data;
	    this._data = newData;
	    var keys, key, i;
	    // unproxy keys not present in new data
	    keys = Object.keys(oldData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!(key in newData)) {
	        this._unproxy(key);
	      }
	    }
	    // proxy keys not already proxied,
	    // and trigger change for changed values
	    keys = Object.keys(newData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!hasOwn(this, key)) {
	        // new property
	        this._proxy(key);
	      }
	    }
	    oldData.__ob__.removeVm(this);
	    observe(newData, this);
	    this._digest();
	  };

	  /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */

	  Vue.prototype._proxy = function (key) {
	    if (!isReserved(key)) {
	      // need to store ref to self here
	      // because these getter/setters might
	      // be called by child scopes via
	      // prototype inheritance.
	      var self = this;
	      Object.defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return self._data[key];
	        },
	        set: function proxySetter(val) {
	          self._data[key] = val;
	        }
	      });
	    }
	  };

	  /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */

	  Vue.prototype._unproxy = function (key) {
	    if (!isReserved(key)) {
	      delete this[key];
	    }
	  };

	  /**
	   * Force update on every watcher in scope.
	   */

	  Vue.prototype._digest = function () {
	    for (var i = 0, l = this._watchers.length; i < l; i++) {
	      this._watchers[i].update(true); // shallow updates
	    }
	  };

	  /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */

	  function noop() {}
	  Vue.prototype._initComputed = function () {
	    var computed = this.$options.computed;
	    if (computed) {
	      for (var key in computed) {
	        var userDef = computed[key];
	        var def = {
	          enumerable: true,
	          configurable: true
	        };
	        if (typeof userDef === 'function') {
	          def.get = makeComputedGetter(userDef, this);
	          def.set = noop;
	        } else {
	          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
	          def.set = userDef.set ? bind(userDef.set, this) : noop;
	        }
	        Object.defineProperty(this, key, def);
	      }
	    }
	  };

	  function makeComputedGetter(getter, owner) {
	    var watcher = new Watcher(owner, getter, null, {
	      lazy: true
	    });
	    return function computedGetter() {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value;
	    };
	  }

	  /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */

	  Vue.prototype._initMethods = function () {
	    var methods = this.$options.methods;
	    if (methods) {
	      for (var key in methods) {
	        this[key] = bind(methods[key], this);
	      }
	    }
	  };

	  /**
	   * Initialize meta information like $index, $key & $value.
	   */

	  Vue.prototype._initMeta = function () {
	    var metas = this.$options._meta;
	    if (metas) {
	      for (var key in metas) {
	        defineReactive(this, key, metas[key]);
	      }
	    }
	  };
	}

	var eventRE = /^v-on:|^@/;

	function eventsMixin (Vue) {
	  /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */

	  Vue.prototype._initEvents = function () {
	    var options = this.$options;
	    if (options._asComponent) {
	      registerComponentEvents(this, options.el);
	    }
	    registerCallbacks(this, '$on', options.events);
	    registerCallbacks(this, '$watch', options.watch);
	  };

	  /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */

	  function registerComponentEvents(vm, el) {
	    var attrs = el.attributes;
	    var name, value, handler;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      name = attrs[i].name;
	      if (eventRE.test(name)) {
	        name = name.replace(eventRE, '');
	        // force the expression into a statement so that
	        // it always dynamically resolves the method to call (#2670)
	        // kinda ugly hack, but does the job.
	        value = attrs[i].value;
	        if (isSimplePath(value)) {
	          value += '.apply(this, $arguments)';
	        }
	        handler = (vm._scope || vm._context).$eval(value, true);
	        handler._fromParent = true;
	        vm.$on(name.replace(eventRE), handler);
	      }
	    }
	  }

	  /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */

	  function registerCallbacks(vm, action, hash) {
	    if (!hash) return;
	    var handlers, key, i, j;
	    for (key in hash) {
	      handlers = hash[key];
	      if (isArray(handlers)) {
	        for (i = 0, j = handlers.length; i < j; i++) {
	          register(vm, action, key, handlers[i]);
	        }
	      } else {
	        register(vm, action, key, handlers);
	      }
	    }
	  }

	  /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */

	  function register(vm, action, key, handler, options) {
	    var type = typeof handler;
	    if (type === 'function') {
	      vm[action](key, handler, options);
	    } else if (type === 'string') {
	      var methods = vm.$options.methods;
	      var method = methods && methods[handler];
	      if (method) {
	        vm[action](key, method, options);
	      } else {
	        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".', vm);
	      }
	    } else if (handler && type === 'object') {
	      register(vm, action, key, handler.handler, handler);
	    }
	  }

	  /**
	   * Setup recursive attached/detached calls
	   */

	  Vue.prototype._initDOMHooks = function () {
	    this.$on('hook:attached', onAttached);
	    this.$on('hook:detached', onDetached);
	  };

	  /**
	   * Callback to recursively call attached hook on children
	   */

	  function onAttached() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.$children.forEach(callAttach);
	    }
	  }

	  /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */

	  function callAttach(child) {
	    if (!child._isAttached && inDoc(child.$el)) {
	      child._callHook('attached');
	    }
	  }

	  /**
	   * Callback to recursively call detached hook on children
	   */

	  function onDetached() {
	    if (this._isAttached) {
	      this._isAttached = false;
	      this.$children.forEach(callDetach);
	    }
	  }

	  /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */

	  function callDetach(child) {
	    if (child._isAttached && !inDoc(child.$el)) {
	      child._callHook('detached');
	    }
	  }

	  /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */

	  Vue.prototype._callHook = function (hook) {
	    this.$emit('pre-hook:' + hook);
	    var handlers = this.$options[hook];
	    if (handlers) {
	      for (var i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(this);
	      }
	    }
	    this.$emit('hook:' + hook);
	  };
	}

	function noop$1() {}

	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Object} [modifiers]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} arg
	 *                 - {String} raw
	 *                 - {String} [ref]
	 *                 - {Array<Object>} [interp]
	 *                 - {Boolean} [hasOneTime]
	 * @param {Vue} vm
	 * @param {Node} el
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	function Directive(descriptor, vm, el, host, scope, frag) {
	  this.vm = vm;
	  this.el = el;
	  // copy descriptor properties
	  this.descriptor = descriptor;
	  this.name = descriptor.name;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.modifiers = descriptor.modifiers;
	  this.filters = descriptor.filters;
	  this.literal = this.modifiers && this.modifiers.literal;
	  // private
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // link context
	  this._host = host;
	  this._scope = scope;
	  this._frag = frag;
	  // store directives on node in dev mode
	  if (process.env.NODE_ENV !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || [];
	    this.el._vue_directives.push(this);
	  }
	}

	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 */

	Directive.prototype._bind = function () {
	  var name = this.name;
	  var descriptor = this.descriptor;

	  // remove attribute
	  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    var attr = descriptor.attr || 'v-' + name;
	    this.el.removeAttribute(attr);
	  }

	  // copy def properties
	  var def = descriptor.def;
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    extend(this, def);
	  }

	  // setup directive params
	  this._setupParams();

	  // initial bind
	  if (this.bind) {
	    this.bind();
	  }
	  this._bound = true;

	  if (this.literal) {
	    this.update && this.update(descriptor.raw);
	  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop$1;
	    }
	    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
	    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
	    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess,
	      postProcess: postProcess,
	      scope: this._scope
	    });
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind();
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	};

	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */

	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return;
	  }
	  var params = this.params;
	  // swap the params array with a fresh object.
	  this.params = Object.create(null);
	  var i = params.length;
	  var key, val, mappedKey;
	  while (i--) {
	    key = hyphenate(params[i]);
	    mappedKey = camelize(key);
	    val = getBindAttr(this.el, key);
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val);
	    } else {
	      // static
	      val = getAttr(this.el, key);
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val;
	      }
	    }
	  }
	};

	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */

	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this;
	  var called = false;
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val;
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key];
	      if (cb) {
	        cb.call(self, val, oldVal);
	      }
	    } else {
	      called = true;
	    }
	  }, {
	    immediate: true,
	    user: false
	  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
	};

	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */

	Directive.prototype._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !isSimplePath(expression)) {
	    var fn = parseExpression$1(expression).get;
	    var scope = this._scope || this.vm;
	    var handler = function handler(e) {
	      scope.$event = e;
	      fn.call(scope, scope);
	      scope.$event = null;
	    };
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};

	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */

	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
	};

	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */

	Directive.prototype._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  nextTick(function () {
	    self._locked = false;
	  });
	};

	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 * @param {Boolean} [useCapture]
	 */

	Directive.prototype.on = function (event, handler, useCapture) {
	  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
	};

	/**
	 * Teardown the watcher and call unbind.
	 */

	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    var listeners = this._listeners;
	    var i;
	    if (listeners) {
	      i = listeners.length;
	      while (i--) {
	        off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns;
	    if (unwatchFns) {
	      i = unwatchFns.length;
	      while (i--) {
	        unwatchFns[i]();
	      }
	    }
	    if (process.env.NODE_ENV !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this);
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
	};

	function lifecycleMixin (Vue) {
	  /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */

	  Vue.prototype._updateRef = function (remove) {
	    var ref = this.$options._ref;
	    if (ref) {
	      var refs = (this._scope || this._context).$refs;
	      if (remove) {
	        if (refs[ref] === this) {
	          refs[ref] = null;
	        }
	      } else {
	        refs[ref] = this;
	      }
	    }
	  };

	  /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._compile = function (el) {
	    var options = this.$options;

	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = transclude(el, options);
	    this._initElement(el);

	    // handle v-pre on root node (#2026)
	    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
	      return;
	    }

	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var contextOptions = this._context && this._context.$options;
	    var rootLinker = compileRoot(el, options, contextOptions);

	    // resolve slot distribution
	    resolveSlots(this, options._content);

	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compile(el, options);
	      }
	    }

	    // link phase
	    // make sure to link root with prop scope!
	    var rootUnlinkFn = rootLinker(this, el, this._scope);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);

	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };

	    // finally replace original
	    if (options.replace) {
	      replace(original, el);
	    }

	    this._isCompiled = true;
	    this._callHook('compiled');
	  };

	  /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._initElement = function (el) {
	    if (isFragment(el)) {
	      this._isFragment = true;
	      this.$el = this._fragmentStart = el.firstChild;
	      this._fragmentEnd = el.lastChild;
	      // set persisted text anchors to empty
	      if (this._fragmentStart.nodeType === 3) {
	        this._fragmentStart.data = this._fragmentEnd.data = '';
	      }
	      this._fragment = el;
	    } else {
	      this.$el = el;
	    }
	    this.$el.__vue__ = this;
	    this._callHook('beforeCompile');
	  };

	  /**
	   * Create and bind a directive to an element.
	   *
	   * @param {Object} descriptor - parsed directive descriptor
	   * @param {Node} node   - target node
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */

	  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
	    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
	  };

	  /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */

	  Vue.prototype._destroy = function (remove, deferCleanup) {
	    if (this._isBeingDestroyed) {
	      if (!deferCleanup) {
	        this._cleanup();
	      }
	      return;
	    }

	    var destroyReady;
	    var pendingRemoval;

	    var self = this;
	    // Cleanup should be called either synchronously or asynchronoysly as
	    // callback of this.$remove(), or if remove and deferCleanup are false.
	    // In any case it should be called after all other removing, unbinding and
	    // turning of is done
	    var cleanupIfPossible = function cleanupIfPossible() {
	      if (destroyReady && !pendingRemoval && !deferCleanup) {
	        self._cleanup();
	      }
	    };

	    // remove DOM element
	    if (remove && this.$el) {
	      pendingRemoval = true;
	      this.$remove(function () {
	        pendingRemoval = false;
	        cleanupIfPossible();
	      });
	    }

	    this._callHook('beforeDestroy');
	    this._isBeingDestroyed = true;
	    var i;
	    // remove self from parent. only necessary
	    // if parent is not being destroyed as well.
	    var parent = this.$parent;
	    if (parent && !parent._isBeingDestroyed) {
	      parent.$children.$remove(this);
	      // unregister ref (remove: true)
	      this._updateRef(true);
	    }
	    // destroy all children.
	    i = this.$children.length;
	    while (i--) {
	      this.$children[i].$destroy();
	    }
	    // teardown props
	    if (this._propsUnlinkFn) {
	      this._propsUnlinkFn();
	    }
	    // teardown all directives. this also tearsdown all
	    // directive-owned watchers.
	    if (this._unlinkFn) {
	      this._unlinkFn();
	    }
	    i = this._watchers.length;
	    while (i--) {
	      this._watchers[i].teardown();
	    }
	    // remove reference to self on $el
	    if (this.$el) {
	      this.$el.__vue__ = null;
	    }

	    destroyReady = true;
	    cleanupIfPossible();
	  };

	  /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */

	  Vue.prototype._cleanup = function () {
	    if (this._isDestroyed) {
	      return;
	    }
	    // remove self from owner fragment
	    // do it in cleanup so that we can call $destroy with
	    // defer right when a fragment is about to be removed.
	    if (this._frag) {
	      this._frag.children.$remove(this);
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (this._data && this._data.__ob__) {
	      this._data.__ob__.removeVm(this);
	    }
	    // Clean up references to private properties and other
	    // instances. preserve reference to _data so that proxy
	    // accessors still work. The only potential side effect
	    // here is that mutating the instance after it's destroyed
	    // may affect the state of other components that are still
	    // observing the same object, but that seems to be a
	    // reasonable responsibility for the user rather than
	    // always throwing an error on them.
	    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
	    // call the last hook...
	    this._isDestroyed = true;
	    this._callHook('destroyed');
	    // turn off all instance listeners.
	    this.$off();
	  };
	}

	function miscMixin (Vue) {
	  /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */

	  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
	    var filter, fn, args, arg, offset, i, l, j, k;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[write ? l - i - 1 : i];
	      fn = resolveAsset(this.$options, 'filters', filter.name, true);
	      if (!fn) continue;
	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') continue;
	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	        }
	      }
	      value = fn.apply(this, args);
	    }
	    return value;
	  };

	  /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */

	  Vue.prototype._resolveComponent = function (value, cb) {
	    var factory;
	    if (typeof value === 'function') {
	      factory = value;
	    } else {
	      factory = resolveAsset(this.$options, 'components', value, true);
	    }
	    /* istanbul ignore if */
	    if (!factory) {
	      return;
	    }
	    // async component factory
	    if (!factory.options) {
	      if (factory.resolved) {
	        // cached
	        cb(factory.resolved);
	      } else if (factory.requested) {
	        // pool callbacks
	        factory.pendingCallbacks.push(cb);
	      } else {
	        factory.requested = true;
	        var cbs = factory.pendingCallbacks = [cb];
	        factory.call(this, function resolve(res) {
	          if (isPlainObject(res)) {
	            res = Vue.extend(res);
	          }
	          // cache resolved
	          factory.resolved = res;
	          // invoke callbacks
	          for (var i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }, function reject(reason) {
	          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
	        });
	      }
	    } else {
	      // normal component
	      cb(factory);
	    }
	  };
	}

	var filterRE$1 = /[^|]\|[^|]/;

	function dataAPI (Vue) {
	  /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */

	  Vue.prototype.$get = function (exp, asStatement) {
	    var res = parseExpression$1(exp);
	    if (res) {
	      if (asStatement) {
	        var self = this;
	        return function statementHandler() {
	          self.$arguments = toArray(arguments);
	          var result = res.get.call(self, self);
	          self.$arguments = null;
	          return result;
	        };
	      } else {
	        try {
	          return res.get.call(this, this);
	        } catch (e) {}
	      }
	    }
	  };

	  /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */

	  Vue.prototype.$set = function (exp, val) {
	    var res = parseExpression$1(exp, true);
	    if (res && res.set) {
	      res.set.call(this, this, val);
	    }
	  };

	  /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */

	  Vue.prototype.$delete = function (key) {
	    del(this._data, key);
	  };

	  /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */

	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    var parsed;
	    if (typeof expOrFn === 'string') {
	      parsed = parseDirective(expOrFn);
	      expOrFn = parsed.expression;
	    }
	    var watcher = new Watcher(vm, expOrFn, cb, {
	      deep: options && options.deep,
	      sync: options && options.sync,
	      filters: parsed && parsed.filters,
	      user: !options || options.user !== false
	    });
	    if (options && options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };

	  /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */

	  Vue.prototype.$eval = function (text, asStatement) {
	    // check for filters.
	    if (filterRE$1.test(text)) {
	      var dir = parseDirective(text);
	      // the filter regex check might give false positive
	      // for pipes inside strings, so it's possible that
	      // we don't get any filters here
	      var val = this.$get(dir.expression, asStatement);
	      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	    } else {
	      // no filter
	      return this.$get(text, asStatement);
	    }
	  };

	  /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */

	  Vue.prototype.$interpolate = function (text) {
	    var tokens = parseText(text);
	    var vm = this;
	    if (tokens) {
	      if (tokens.length === 1) {
	        return vm.$eval(tokens[0].value) + '';
	      } else {
	        return tokens.map(function (token) {
	          return token.tag ? vm.$eval(token.value) : token.value;
	        }).join('');
	      }
	    } else {
	      return text;
	    }
	  };

	  /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */

	  Vue.prototype.$log = function (path) {
	    var data = path ? getPath(this._data, path) : this._data;
	    if (data) {
	      data = clean(data);
	    }
	    // include computed fields
	    if (!path) {
	      var key;
	      for (key in this.$options.computed) {
	        data[key] = clean(this[key]);
	      }
	      if (this._props) {
	        for (key in this._props) {
	          data[key] = clean(this[key]);
	        }
	      }
	    }
	    console.log(data);
	  };

	  /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */

	  function clean(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  }
	}

	function domAPI (Vue) {
	  /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */

	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };

	  /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$appendTo = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, append, appendWithTransition);
	  };

	  /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$prependTo = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.hasChildNodes()) {
	      this.$before(target.firstChild, cb, withTransition);
	    } else {
	      this.$appendTo(target, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$before = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
	  };

	  /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$after = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.nextSibling) {
	      this.$before(target.nextSibling, cb, withTransition);
	    } else {
	      this.$appendTo(target.parentNode, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$remove = function (cb, withTransition) {
	    if (!this.$el.parentNode) {
	      return cb && cb();
	    }
	    var inDocument = this._isAttached && inDoc(this.$el);
	    // if we are not in document, no need to check
	    // for transitions
	    if (!inDocument) withTransition = false;
	    var self = this;
	    var realCb = function realCb() {
	      if (inDocument) self._callHook('detached');
	      if (cb) cb();
	    };
	    if (this._isFragment) {
	      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
	    } else {
	      var op = withTransition === false ? removeWithCb : removeWithTransition;
	      op(this.$el, this, realCb);
	    }
	    return this;
	  };

	  /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */

	  function insert(vm, target, cb, withTransition, op1, op2) {
	    target = query(target);
	    var targetIsDetached = !inDoc(target);
	    var op = withTransition === false || targetIsDetached ? op1 : op2;
	    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
	    if (vm._isFragment) {
	      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	        op(node, target, vm);
	      });
	      cb && cb();
	    } else {
	      op(vm.$el, target, vm, cb);
	    }
	    if (shouldCallHook) {
	      vm._callHook('attached');
	    }
	    return vm;
	  }

	  /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */

	  function query(el) {
	    return typeof el === 'string' ? document.querySelector(el) : el;
	  }

	  /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function append(el, target, vm, cb) {
	    target.appendChild(el);
	    if (cb) cb();
	  }

	  /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function beforeWithCb(el, target, vm, cb) {
	    before(el, target);
	    if (cb) cb();
	  }

	  /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function removeWithCb(el, vm, cb) {
	    remove(el);
	    if (cb) cb();
	  }
	}

	function eventsAPI (Vue) {
	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$on = function (event, fn) {
	    (this._events[event] || (this._events[event] = [])).push(fn);
	    modifyListenerCount(this, event, 1);
	    return this;
	  };

	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$once = function (event, fn) {
	    var self = this;
	    function on() {
	      self.$off(event, on);
	      fn.apply(this, arguments);
	    }
	    on.fn = fn;
	    this.$on(event, on);
	    return this;
	  };

	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$off = function (event, fn) {
	    var cbs;
	    // all
	    if (!arguments.length) {
	      if (this.$parent) {
	        for (event in this._events) {
	          cbs = this._events[event];
	          if (cbs) {
	            modifyListenerCount(this, event, -cbs.length);
	          }
	        }
	      }
	      this._events = {};
	      return this;
	    }
	    // specific event
	    cbs = this._events[event];
	    if (!cbs) {
	      return this;
	    }
	    if (arguments.length === 1) {
	      modifyListenerCount(this, event, -cbs.length);
	      this._events[event] = null;
	      return this;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        modifyListenerCount(this, event, -1);
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return this;
	  };

	  /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */

	  Vue.prototype.$emit = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    var cbs = this._events[event];
	    var shouldPropagate = isSource || !cbs;
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      // this is a somewhat hacky solution to the question raised
	      // in #2102: for an inline component listener like <comp @test="doThis">,
	      // the propagation handling is somewhat broken. Therefore we
	      // need to treat these inline callbacks differently.
	      var hasParentCbs = isSource && cbs.some(function (cb) {
	        return cb._fromParent;
	      });
	      if (hasParentCbs) {
	        shouldPropagate = false;
	      }
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        var cb = cbs[i];
	        var res = cb.apply(this, args);
	        if (res === true && (!hasParentCbs || cb._fromParent)) {
	          shouldPropagate = true;
	        }
	      }
	    }
	    return shouldPropagate;
	  };

	  /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$broadcast = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    // if no child has registered for this event,
	    // then there's no need to broadcast.
	    if (!this._eventsCount[event]) return;
	    var children = this.$children;
	    var args = toArray(arguments);
	    if (isSource) {
	      // use object event to indicate non-source emit
	      // on children
	      args[0] = { name: event, source: this };
	    }
	    for (var i = 0, l = children.length; i < l; i++) {
	      var child = children[i];
	      var shouldPropagate = child.$emit.apply(child, args);
	      if (shouldPropagate) {
	        child.$broadcast.apply(child, args);
	      }
	    }
	    return this;
	  };

	  /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$dispatch = function (event) {
	    var shouldPropagate = this.$emit.apply(this, arguments);
	    if (!shouldPropagate) return;
	    var parent = this.$parent;
	    var args = toArray(arguments);
	    // use object event to indicate non-source emit
	    // on parents
	    args[0] = { name: event, source: this };
	    while (parent) {
	      shouldPropagate = parent.$emit.apply(parent, args);
	      parent = shouldPropagate ? parent.$parent : null;
	    }
	    return this;
	  };

	  /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */

	  var hookRE = /^hook:/;
	  function modifyListenerCount(vm, event, count) {
	    var parent = vm.$parent;
	    // hooks do not get broadcasted so no need
	    // to do bookkeeping for them
	    if (!parent || !count || hookRE.test(event)) return;
	    while (parent) {
	      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	      parent = parent.$parent;
	    }
	  }
	}

	function lifecycleAPI (Vue) {
	  /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */

	  Vue.prototype.$mount = function (el) {
	    if (this._isCompiled) {
	      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.', this);
	      return;
	    }
	    el = query(el);
	    if (!el) {
	      el = document.createElement('div');
	    }
	    this._compile(el);
	    this._initDOMHooks();
	    if (inDoc(this.$el)) {
	      this._callHook('attached');
	      ready.call(this);
	    } else {
	      this.$once('hook:attached', ready);
	    }
	    return this;
	  };

	  /**
	   * Mark an instance as ready.
	   */

	  function ready() {
	    this._isAttached = true;
	    this._isReady = true;
	    this._callHook('ready');
	  }

	  /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   *
	   * @param {Boolean} remove
	   * @param {Boolean} deferCleanup
	   */

	  Vue.prototype.$destroy = function (remove, deferCleanup) {
	    this._destroy(remove, deferCleanup);
	  };

	  /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @param {Object} [scope]
	   * @param {Fragment} [frag]
	   * @return {Function}
	   */

	  Vue.prototype.$compile = function (el, host, scope, frag) {
	    return compile(el, this.$options, true)(this, el, host, scope, frag);
	  };
	}

	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */

	function Vue(options) {
	  this._init(options);
	}

	// install internals
	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	miscMixin(Vue);

	// install instance APIs
	dataAPI(Vue);
	domAPI(Vue);
	eventsAPI(Vue);
	lifecycleAPI(Vue);

	var slot = {

	  priority: SLOT,
	  params: ['name'],

	  bind: function bind() {
	    // this was resolved during component transclusion
	    var name = this.params.name || 'default';
	    var content = this.vm._slotContents && this.vm._slotContents[name];
	    if (!content || !content.hasChildNodes()) {
	      this.fallback();
	    } else {
	      this.compile(content.cloneNode(true), this.vm._context, this.vm);
	    }
	  },

	  compile: function compile(content, context, host) {
	    if (content && context) {
	      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
	        // if the inserted slot has v-if
	        // inject fallback content as the v-else
	        var elseBlock = document.createElement('template');
	        elseBlock.setAttribute('v-else', '');
	        elseBlock.innerHTML = this.el.innerHTML;
	        // the else block should be compiled in child scope
	        elseBlock._context = this.vm;
	        content.appendChild(elseBlock);
	      }
	      var scope = host ? host._scope : this._scope;
	      this.unlink = context.$compile(content, host, scope, this._frag);
	    }
	    if (content) {
	      replace(this.el, content);
	    } else {
	      remove(this.el);
	    }
	  },

	  fallback: function fallback() {
	    this.compile(extractContent(this.el, true), this.vm);
	  },

	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};

	var partial = {

	  priority: PARTIAL,

	  params: ['name'],

	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function name(value) {
	      vIf.remove.call(this);
	      if (value) {
	        this.insert(value);
	      }
	    }
	  },

	  bind: function bind() {
	    this.anchor = createAnchor('v-partial');
	    replace(this.el, this.anchor);
	    this.insert(this.params.name);
	  },

	  insert: function insert(id) {
	    var partial = resolveAsset(this.vm.$options, 'partials', id, true);
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial);
	      vIf.insert.call(this);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};

	var elementDirectives = {
	  slot: slot,
	  partial: partial
	};

	var convertArray = vFor._postProcess;

	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */

	function limitBy(arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0;
	  n = toNumber(n);
	  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
	}

	/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */

	function filterBy(arr, search, delimiter) {
	  arr = convertArray(arr);
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  var keys = Array.prototype.concat.apply([], toArray(arguments, n));
	  var res = [];
	  var item, key, val, j;
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i];
	    val = item && item.$value || item;
	    j = keys.length;
	    if (j) {
	      while (j--) {
	        key = keys[j];
	        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains(item, search)) {
	      res.push(item);
	    }
	  }
	  return res;
	}

	/**
	 * Order filter for arrays
	 *
	 * @param {String|Array<String>|Function} ...sortKeys
	 * @param {Number} [order]
	 */

	function orderBy(arr) {
	  var comparator = null;
	  var sortKeys = undefined;
	  arr = convertArray(arr);

	  // determine order (last argument)
	  var args = toArray(arguments, 1);
	  var order = args[args.length - 1];
	  if (typeof order === 'number') {
	    order = order < 0 ? -1 : 1;
	    args = args.length > 1 ? args.slice(0, -1) : args;
	  } else {
	    order = 1;
	  }

	  // determine sortKeys & comparator
	  var firstArg = args[0];
	  if (!firstArg) {
	    return arr;
	  } else if (typeof firstArg === 'function') {
	    // custom comparator
	    comparator = function (a, b) {
	      return firstArg(a, b) * order;
	    };
	  } else {
	    // string keys. flatten first
	    sortKeys = Array.prototype.concat.apply([], args);
	    comparator = function (a, b, i) {
	      i = i || 0;
	      return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || comparator(a, b, i + 1);
	    };
	  }

	  function baseCompare(a, b, sortKeyIndex) {
	    var sortKey = sortKeys[sortKeyIndex];
	    if (sortKey) {
	      if (sortKey !== '$key') {
	        if (isObject(a) && '$value' in a) a = a.$value;
	        if (isObject(b) && '$value' in b) b = b.$value;
	      }
	      a = isObject(a) ? getPath(a, sortKey) : a;
	      b = isObject(b) ? getPath(b, sortKey) : b;
	    }
	    return a === b ? 0 : a > b ? order : -order;
	  }

	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(comparator);
	}

	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */

	function contains(val, search) {
	  var i;
	  if (isPlainObject(val)) {
	    var keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}

	var digitsRE = /(\d{3})(?=\d)/g;

	// asset collections must be a plain object.
	var filters = {

	  orderBy: orderBy,
	  filterBy: filterBy,
	  limitBy: limitBy,

	  /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */

	  json: {
	    read: function read(value, indent) {
	      return typeof value === 'string' ? value : JSON.stringify(value, null, arguments.length > 1 ? indent : 2);
	    },
	    write: function write(value) {
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        return value;
	      }
	    }
	  },

	  /**
	   * 'abc' => 'Abc'
	   */

	  capitalize: function capitalize(value) {
	    if (!value && value !== 0) return '';
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	  },

	  /**
	   * 'abc' => 'ABC'
	   */

	  uppercase: function uppercase(value) {
	    return value || value === 0 ? value.toString().toUpperCase() : '';
	  },

	  /**
	   * 'AbC' => 'abc'
	   */

	  lowercase: function lowercase(value) {
	    return value || value === 0 ? value.toString().toLowerCase() : '';
	  },

	  /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   * @param {Number} decimals Decimal places
	   */

	  currency: function currency(value, _currency, decimals) {
	    value = parseFloat(value);
	    if (!isFinite(value) || !value && value !== 0) return '';
	    _currency = _currency != null ? _currency : '$';
	    decimals = decimals != null ? decimals : 2;
	    var stringified = Math.abs(value).toFixed(decimals);
	    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
	    var i = _int.length % 3;
	    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	    var _float = decimals ? stringified.slice(-1 - decimals) : '';
	    var sign = value < 0 ? '-' : '';
	    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	  },

	  /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */

	  pluralize: function pluralize(value) {
	    var args = toArray(arguments, 1);
	    var length = args.length;
	    if (length > 1) {
	      var index = value % 10 - 1;
	      return index in args ? args[index] : args[length - 1];
	    } else {
	      return args[0] + (value === 1 ? '' : 's');
	    }
	  },

	  /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */

	  debounce: function debounce(handler, delay) {
	    if (!handler) return;
	    if (!delay) {
	      delay = 300;
	    }
	    return _debounce(handler, delay);
	  }
	};

	function installGlobalAPI (Vue) {
	  /**
	   * Vue and every constructor that extends Vue has an
	   * associated options object, which can be accessed during
	   * compilation steps as `this.constructor.options`.
	   *
	   * These can be seen as the default options of every
	   * Vue instance.
	   */

	  Vue.options = {
	    directives: directives,
	    elementDirectives: elementDirectives,
	    filters: filters,
	    transitions: {},
	    components: {},
	    partials: {},
	    replace: true
	  };

	  /**
	   * Expose useful internals
	   */

	  Vue.util = util;
	  Vue.config = config;
	  Vue.set = set;
	  Vue['delete'] = del;
	  Vue.nextTick = nextTick;

	  /**
	   * The following are exposed for advanced usage / plugins
	   */

	  Vue.compiler = compiler;
	  Vue.FragmentFactory = FragmentFactory;
	  Vue.internalDirectives = internalDirectives;
	  Vue.parsers = {
	    path: path,
	    text: text,
	    template: template,
	    directive: directive,
	    expression: expression
	  };

	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */

	  Vue.cid = 0;
	  var cid = 1;

	  /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */

	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor;
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
	        name = null;
	      }
	    }
	    var Sub = createClass(name || 'VueComponent');
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };

	  /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */

	  function createClass(name) {
	    /* eslint-disable no-new-func */
	    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
	    /* eslint-enable no-new-func */
	  }

	  /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */

	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this;
	  };

	  /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */

	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };

	  /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */

	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
	            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          if (!definition.name) {
	            definition.name = id;
	          }
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });

	  // expose internal transition API
	  extend(Vue.transition, transition);
	}

	installGlobalAPI(Vue);

	Vue.version = '1.0.28';

	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue);
	    } else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
	      console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	    }
	  }
	}, 0);

	module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * vue-router v0.7.13
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  global.VueRouter = factory();
	}(this, function () { 'use strict';

	  var babelHelpers = {};

	  babelHelpers.classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };
	  function Target(path, matcher, delegate) {
	    this.path = path;
	    this.matcher = matcher;
	    this.delegate = delegate;
	  }

	  Target.prototype = {
	    to: function to(target, callback) {
	      var delegate = this.delegate;

	      if (delegate && delegate.willAddRoute) {
	        target = delegate.willAddRoute(this.matcher.target, target);
	      }

	      this.matcher.add(this.path, target);

	      if (callback) {
	        if (callback.length === 0) {
	          throw new Error("You must have an argument in the function passed to `to`");
	        }
	        this.matcher.addChild(this.path, target, callback, this.delegate);
	      }
	      return this;
	    }
	  };

	  function Matcher(target) {
	    this.routes = {};
	    this.children = {};
	    this.target = target;
	  }

	  Matcher.prototype = {
	    add: function add(path, handler) {
	      this.routes[path] = handler;
	    },

	    addChild: function addChild(path, target, callback, delegate) {
	      var matcher = new Matcher(target);
	      this.children[path] = matcher;

	      var match = generateMatch(path, matcher, delegate);

	      if (delegate && delegate.contextEntered) {
	        delegate.contextEntered(target, match);
	      }

	      callback(match);
	    }
	  };

	  function generateMatch(startingPath, matcher, delegate) {
	    return function (path, nestedCallback) {
	      var fullPath = startingPath + path;

	      if (nestedCallback) {
	        nestedCallback(generateMatch(fullPath, matcher, delegate));
	      } else {
	        return new Target(startingPath + path, matcher, delegate);
	      }
	    };
	  }

	  function addRoute(routeArray, path, handler) {
	    var len = 0;
	    for (var i = 0, l = routeArray.length; i < l; i++) {
	      len += routeArray[i].path.length;
	    }

	    path = path.substr(len);
	    var route = { path: path, handler: handler };
	    routeArray.push(route);
	  }

	  function eachRoute(baseRoute, matcher, callback, binding) {
	    var routes = matcher.routes;

	    for (var path in routes) {
	      if (routes.hasOwnProperty(path)) {
	        var routeArray = baseRoute.slice();
	        addRoute(routeArray, path, routes[path]);

	        if (matcher.children[path]) {
	          eachRoute(routeArray, matcher.children[path], callback, binding);
	        } else {
	          callback.call(binding, routeArray);
	        }
	      }
	    }
	  }

	  function map (callback, addRouteCallback) {
	    var matcher = new Matcher();

	    callback(generateMatch("", matcher, this.delegate));

	    eachRoute([], matcher, function (route) {
	      if (addRouteCallback) {
	        addRouteCallback(this, route);
	      } else {
	        this.add(route);
	      }
	    }, this);
	  }

	  var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];

	  var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');

	  var noWarning = false;
	  function warn(msg) {
	    if (!noWarning && typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }

	  function tryDecode(uri, asComponent) {
	    try {
	      return asComponent ? decodeURIComponent(uri) : decodeURI(uri);
	    } catch (e) {
	      warn('malformed URI' + (asComponent ? ' component: ' : ': ') + uri);
	    }
	  }

	  function isArray(test) {
	    return Object.prototype.toString.call(test) === "[object Array]";
	  }

	  // A Segment represents a segment in the original route description.
	  // Each Segment type provides an `eachChar` and `regex` method.
	  //
	  // The `eachChar` method invokes the callback with one or more character
	  // specifications. A character specification consumes one or more input
	  // characters.
	  //
	  // The `regex` method returns a regex fragment for the segment. If the
	  // segment is a dynamic of star segment, the regex fragment also includes
	  // a capture.
	  //
	  // A character specification contains:
	  //
	  // * `validChars`: a String with a list of all valid characters, or
	  // * `invalidChars`: a String with a list of all invalid characters
	  // * `repeat`: true if the character specification can repeat

	  function StaticSegment(string) {
	    this.string = string;
	  }
	  StaticSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      var string = this.string,
	          ch;

	      for (var i = 0, l = string.length; i < l; i++) {
	        ch = string.charAt(i);
	        callback({ validChars: ch });
	      }
	    },

	    regex: function regex() {
	      return this.string.replace(escapeRegex, '\\$1');
	    },

	    generate: function generate() {
	      return this.string;
	    }
	  };

	  function DynamicSegment(name) {
	    this.name = name;
	  }
	  DynamicSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "/", repeat: true });
	    },

	    regex: function regex() {
	      return "([^/]+)";
	    },

	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };

	  function StarSegment(name) {
	    this.name = name;
	  }
	  StarSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "", repeat: true });
	    },

	    regex: function regex() {
	      return "(.+)";
	    },

	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };

	  function EpsilonSegment() {}
	  EpsilonSegment.prototype = {
	    eachChar: function eachChar() {},
	    regex: function regex() {
	      return "";
	    },
	    generate: function generate() {
	      return "";
	    }
	  };

	  function parse(route, names, specificity) {
	    // normalize route as not starting with a "/". Recognition will
	    // also normalize.
	    if (route.charAt(0) === "/") {
	      route = route.substr(1);
	    }

	    var segments = route.split("/"),
	        results = [];

	    // A routes has specificity determined by the order that its different segments
	    // appear in. This system mirrors how the magnitude of numbers written as strings
	    // works.
	    // Consider a number written as: "abc". An example would be "200". Any other number written
	    // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
	    // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
	    // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
	    // leading symbol, "1".
	    // The rule is that symbols to the left carry more weight than symbols to the right
	    // when a number is written out as a string. In the above strings, the leading digit
	    // represents how many 100's are in the number, and it carries more weight than the middle
	    // number which represents how many 10's are in the number.
	    // This system of number magnitude works well for route specificity, too. A route written as
	    // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
	    // `x`, irrespective of the other parts.
	    // Because of this similarity, we assign each type of segment a number value written as a
	    // string. We can find the specificity of compound routes by concatenating these strings
	    // together, from left to right. After we have looped through all of the segments,
	    // we convert the string to a number.
	    specificity.val = '';

	    for (var i = 0, l = segments.length; i < l; i++) {
	      var segment = segments[i],
	          match;

	      if (match = segment.match(/^:([^\/]+)$/)) {
	        results.push(new DynamicSegment(match[1]));
	        names.push(match[1]);
	        specificity.val += '3';
	      } else if (match = segment.match(/^\*([^\/]+)$/)) {
	        results.push(new StarSegment(match[1]));
	        specificity.val += '2';
	        names.push(match[1]);
	      } else if (segment === "") {
	        results.push(new EpsilonSegment());
	        specificity.val += '1';
	      } else {
	        results.push(new StaticSegment(segment));
	        specificity.val += '4';
	      }
	    }

	    specificity.val = +specificity.val;

	    return results;
	  }

	  // A State has a character specification and (`charSpec`) and a list of possible
	  // subsequent states (`nextStates`).
	  //
	  // If a State is an accepting state, it will also have several additional
	  // properties:
	  //
	  // * `regex`: A regular expression that is used to extract parameters from paths
	  //   that reached this accepting state.
	  // * `handlers`: Information on how to convert the list of captures into calls
	  //   to registered handlers with the specified parameters
	  // * `types`: How many static, dynamic or star segments in this route. Used to
	  //   decide which route to use if multiple registered routes match a path.
	  //
	  // Currently, State is implemented naively by looping over `nextStates` and
	  // comparing a character specification against a character. A more efficient
	  // implementation would use a hash of keys pointing at one or more next states.

	  function State(charSpec) {
	    this.charSpec = charSpec;
	    this.nextStates = [];
	  }

	  State.prototype = {
	    get: function get(charSpec) {
	      var nextStates = this.nextStates;

	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        var child = nextStates[i];

	        var isEqual = child.charSpec.validChars === charSpec.validChars;
	        isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;

	        if (isEqual) {
	          return child;
	        }
	      }
	    },

	    put: function put(charSpec) {
	      var state;

	      // If the character specification already exists in a child of the current
	      // state, just return that state.
	      if (state = this.get(charSpec)) {
	        return state;
	      }

	      // Make a new state for the character spec
	      state = new State(charSpec);

	      // Insert the new state as a child of the current state
	      this.nextStates.push(state);

	      // If this character specification repeats, insert the new state as a child
	      // of itself. Note that this will not trigger an infinite loop because each
	      // transition during recognition consumes a character.
	      if (charSpec.repeat) {
	        state.nextStates.push(state);
	      }

	      // Return the new state
	      return state;
	    },

	    // Find a list of child states matching the next character
	    match: function match(ch) {
	      // DEBUG "Processing `" + ch + "`:"
	      var nextStates = this.nextStates,
	          child,
	          charSpec,
	          chars;

	      // DEBUG "  " + debugState(this)
	      var returned = [];

	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        child = nextStates[i];

	        charSpec = child.charSpec;

	        if (typeof (chars = charSpec.validChars) !== 'undefined') {
	          if (chars.indexOf(ch) !== -1) {
	            returned.push(child);
	          }
	        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
	          if (chars.indexOf(ch) === -1) {
	            returned.push(child);
	          }
	        }
	      }

	      return returned;
	    }

	    /** IF DEBUG
	    , debug: function() {
	      var charSpec = this.charSpec,
	          debug = "[",
	          chars = charSpec.validChars || charSpec.invalidChars;
	       if (charSpec.invalidChars) { debug += "^"; }
	      debug += chars;
	      debug += "]";
	       if (charSpec.repeat) { debug += "+"; }
	       return debug;
	    }
	    END IF **/
	  };

	  /** IF DEBUG
	  function debug(log) {
	    console.log(log);
	  }

	  function debugState(state) {
	    return state.nextStates.map(function(n) {
	      if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
	      return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
	    }).join(", ")
	  }
	  END IF **/

	  // Sort the routes by specificity
	  function sortSolutions(states) {
	    return states.sort(function (a, b) {
	      return b.specificity.val - a.specificity.val;
	    });
	  }

	  function recognizeChar(states, ch) {
	    var nextStates = [];

	    for (var i = 0, l = states.length; i < l; i++) {
	      var state = states[i];

	      nextStates = nextStates.concat(state.match(ch));
	    }

	    return nextStates;
	  }

	  var oCreate = Object.create || function (proto) {
	    function F() {}
	    F.prototype = proto;
	    return new F();
	  };

	  function RecognizeResults(queryParams) {
	    this.queryParams = queryParams || {};
	  }
	  RecognizeResults.prototype = oCreate({
	    splice: Array.prototype.splice,
	    slice: Array.prototype.slice,
	    push: Array.prototype.push,
	    length: 0,
	    queryParams: null
	  });

	  function findHandler(state, path, queryParams) {
	    var handlers = state.handlers,
	        regex = state.regex;
	    var captures = path.match(regex),
	        currentCapture = 1;
	    var result = new RecognizeResults(queryParams);

	    for (var i = 0, l = handlers.length; i < l; i++) {
	      var handler = handlers[i],
	          names = handler.names,
	          params = {};

	      for (var j = 0, m = names.length; j < m; j++) {
	        params[names[j]] = captures[currentCapture++];
	      }

	      result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
	    }

	    return result;
	  }

	  function addSegment(currentState, segment) {
	    segment.eachChar(function (ch) {
	      var state;

	      currentState = currentState.put(ch);
	    });

	    return currentState;
	  }

	  function decodeQueryParamPart(part) {
	    // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
	    part = part.replace(/\+/gm, '%20');
	    return tryDecode(part, true);
	  }

	  // The main interface

	  var RouteRecognizer = function RouteRecognizer() {
	    this.rootState = new State();
	    this.names = {};
	  };

	  RouteRecognizer.prototype = {
	    add: function add(routes, options) {
	      var currentState = this.rootState,
	          regex = "^",
	          specificity = {},
	          handlers = [],
	          allSegments = [],
	          name;

	      var isEmpty = true;

	      for (var i = 0, l = routes.length; i < l; i++) {
	        var route = routes[i],
	            names = [];

	        var segments = parse(route.path, names, specificity);

	        allSegments = allSegments.concat(segments);

	        for (var j = 0, m = segments.length; j < m; j++) {
	          var segment = segments[j];

	          if (segment instanceof EpsilonSegment) {
	            continue;
	          }

	          isEmpty = false;

	          // Add a "/" for the new segment
	          currentState = currentState.put({ validChars: "/" });
	          regex += "/";

	          // Add a representation of the segment to the NFA and regex
	          currentState = addSegment(currentState, segment);
	          regex += segment.regex();
	        }

	        var handler = { handler: route.handler, names: names };
	        handlers.push(handler);
	      }

	      if (isEmpty) {
	        currentState = currentState.put({ validChars: "/" });
	        regex += "/";
	      }

	      currentState.handlers = handlers;
	      currentState.regex = new RegExp(regex + "$");
	      currentState.specificity = specificity;

	      if (name = options && options.as) {
	        this.names[name] = {
	          segments: allSegments,
	          handlers: handlers
	        };
	      }
	    },

	    handlersFor: function handlersFor(name) {
	      var route = this.names[name],
	          result = [];
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }

	      for (var i = 0, l = route.handlers.length; i < l; i++) {
	        result.push(route.handlers[i]);
	      }

	      return result;
	    },

	    hasRoute: function hasRoute(name) {
	      return !!this.names[name];
	    },

	    generate: function generate(name, params) {
	      var route = this.names[name],
	          output = "";
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }

	      var segments = route.segments;

	      for (var i = 0, l = segments.length; i < l; i++) {
	        var segment = segments[i];

	        if (segment instanceof EpsilonSegment) {
	          continue;
	        }

	        output += "/";
	        output += segment.generate(params);
	      }

	      if (output.charAt(0) !== '/') {
	        output = '/' + output;
	      }

	      if (params && params.queryParams) {
	        output += this.generateQueryString(params.queryParams);
	      }

	      return output;
	    },

	    generateQueryString: function generateQueryString(params) {
	      var pairs = [];
	      var keys = [];
	      for (var key in params) {
	        if (params.hasOwnProperty(key)) {
	          keys.push(key);
	        }
	      }
	      keys.sort();
	      for (var i = 0, len = keys.length; i < len; i++) {
	        key = keys[i];
	        var value = params[key];
	        if (value == null) {
	          continue;
	        }
	        var pair = encodeURIComponent(key);
	        if (isArray(value)) {
	          for (var j = 0, l = value.length; j < l; j++) {
	            var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
	            pairs.push(arrayPair);
	          }
	        } else {
	          pair += "=" + encodeURIComponent(value);
	          pairs.push(pair);
	        }
	      }

	      if (pairs.length === 0) {
	        return '';
	      }

	      return "?" + pairs.join("&");
	    },

	    parseQueryString: function parseQueryString(queryString) {
	      var pairs = queryString.split("&"),
	          queryParams = {};
	      for (var i = 0; i < pairs.length; i++) {
	        var pair = pairs[i].split('='),
	            key = decodeQueryParamPart(pair[0]),
	            keyLength = key.length,
	            isArray = false,
	            value;
	        if (pair.length === 1) {
	          value = 'true';
	        } else {
	          //Handle arrays
	          if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
	            isArray = true;
	            key = key.slice(0, keyLength - 2);
	            if (!queryParams[key]) {
	              queryParams[key] = [];
	            }
	          }
	          value = pair[1] ? decodeQueryParamPart(pair[1]) : '';
	        }
	        if (isArray) {
	          queryParams[key].push(value);
	        } else {
	          queryParams[key] = value;
	        }
	      }
	      return queryParams;
	    },

	    recognize: function recognize(path, silent) {
	      noWarning = silent;
	      var states = [this.rootState],
	          pathLen,
	          i,
	          l,
	          queryStart,
	          queryParams = {},
	          isSlashDropped = false;

	      queryStart = path.indexOf('?');
	      if (queryStart !== -1) {
	        var queryString = path.substr(queryStart + 1, path.length);
	        path = path.substr(0, queryStart);
	        if (queryString) {
	          queryParams = this.parseQueryString(queryString);
	        }
	      }

	      path = tryDecode(path);
	      if (!path) return;

	      // DEBUG GROUP path

	      if (path.charAt(0) !== "/") {
	        path = "/" + path;
	      }

	      pathLen = path.length;
	      if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
	        path = path.substr(0, pathLen - 1);
	        isSlashDropped = true;
	      }

	      for (i = 0, l = path.length; i < l; i++) {
	        states = recognizeChar(states, path.charAt(i));
	        if (!states.length) {
	          break;
	        }
	      }

	      // END DEBUG GROUP

	      var solutions = [];
	      for (i = 0, l = states.length; i < l; i++) {
	        if (states[i].handlers) {
	          solutions.push(states[i]);
	        }
	      }

	      states = sortSolutions(solutions);

	      var state = solutions[0];

	      if (state && state.handlers) {
	        // if a trailing slash was dropped and a star segment is the last segment
	        // specified, put the trailing slash back
	        if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
	          path = path + "/";
	        }
	        return findHandler(state, path, queryParams);
	      }
	    }
	  };

	  RouteRecognizer.prototype.map = map;

	  var genQuery = RouteRecognizer.prototype.generateQueryString;

	  // export default for holding the Vue reference
	  var exports$1 = {};
	  /**
	   * Warn stuff.
	   *
	   * @param {String} msg
	   */

	  function warn$1(msg) {
	    /* istanbul ignore next */
	    if (typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }

	  /**
	   * Resolve a relative path.
	   *
	   * @param {String} base
	   * @param {String} relative
	   * @param {Boolean} append
	   * @return {String}
	   */

	  function resolvePath(base, relative, append) {
	    var query = base.match(/(\?.*)$/);
	    if (query) {
	      query = query[1];
	      base = base.slice(0, -query.length);
	    }
	    // a query!
	    if (relative.charAt(0) === '?') {
	      return base + relative;
	    }
	    var stack = base.split('/');
	    // remove trailing segment if:
	    // - not appending
	    // - appending to trailing slash (last segment is empty)
	    if (!append || !stack[stack.length - 1]) {
	      stack.pop();
	    }
	    // resolve relative path
	    var segments = relative.replace(/^\//, '').split('/');
	    for (var i = 0; i < segments.length; i++) {
	      var segment = segments[i];
	      if (segment === '.') {
	        continue;
	      } else if (segment === '..') {
	        stack.pop();
	      } else {
	        stack.push(segment);
	      }
	    }
	    // ensure leading slash
	    if (stack[0] !== '') {
	      stack.unshift('');
	    }
	    return stack.join('/');
	  }

	  /**
	   * Forgiving check for a promise
	   *
	   * @param {Object} p
	   * @return {Boolean}
	   */

	  function isPromise(p) {
	    return p && typeof p.then === 'function';
	  }

	  /**
	   * Retrive a route config field from a component instance
	   * OR a component contructor.
	   *
	   * @param {Function|Vue} component
	   * @param {String} name
	   * @return {*}
	   */

	  function getRouteConfig(component, name) {
	    var options = component && (component.$options || component.options);
	    return options && options.route && options.route[name];
	  }

	  /**
	   * Resolve an async component factory. Have to do a dirty
	   * mock here because of Vue core's internal API depends on
	   * an ID check.
	   *
	   * @param {Object} handler
	   * @param {Function} cb
	   */

	  var resolver = undefined;

	  function resolveAsyncComponent(handler, cb) {
	    if (!resolver) {
	      resolver = {
	        resolve: exports$1.Vue.prototype._resolveComponent,
	        $options: {
	          components: {
	            _: handler.component
	          }
	        }
	      };
	    } else {
	      resolver.$options.components._ = handler.component;
	    }
	    resolver.resolve('_', function (Component) {
	      handler.component = Component;
	      cb(Component);
	    });
	  }

	  /**
	   * Map the dynamic segments in a path to params.
	   *
	   * @param {String} path
	   * @param {Object} params
	   * @param {Object} query
	   */

	  function mapParams(path, params, query) {
	    if (params === undefined) params = {};

	    path = path.replace(/:([^\/]+)/g, function (_, key) {
	      var val = params[key];
	      /* istanbul ignore if */
	      if (!val) {
	        warn$1('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
	      }
	      return val || '';
	    });
	    if (query) {
	      path += genQuery(query);
	    }
	    return path;
	  }

	  var hashRE = /#.*$/;

	  var HTML5History = (function () {
	    function HTML5History(_ref) {
	      var root = _ref.root;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HTML5History);

	      if (root && root !== '/') {
	        // make sure there's the starting slash
	        if (root.charAt(0) !== '/') {
	          root = '/' + root;
	        }
	        // remove trailing slash
	        this.root = root.replace(/\/$/, '');
	        this.rootRE = new RegExp('^\\' + this.root);
	      } else {
	        this.root = null;
	      }
	      this.onChange = onChange;
	      // check base tag
	      var baseEl = document.querySelector('base');
	      this.base = baseEl && baseEl.getAttribute('href');
	    }

	    HTML5History.prototype.start = function start() {
	      var _this = this;

	      this.listener = function (e) {
	        var url = location.pathname + location.search;
	        if (_this.root) {
	          url = url.replace(_this.rootRE, '');
	        }
	        _this.onChange(url, e && e.state, location.hash);
	      };
	      window.addEventListener('popstate', this.listener);
	      this.listener();
	    };

	    HTML5History.prototype.stop = function stop() {
	      window.removeEventListener('popstate', this.listener);
	    };

	    HTML5History.prototype.go = function go(path, replace, append) {
	      var url = this.formatPath(path, append);
	      if (replace) {
	        history.replaceState({}, '', url);
	      } else {
	        // record scroll position by replacing current state
	        history.replaceState({
	          pos: {
	            x: window.pageXOffset,
	            y: window.pageYOffset
	          }
	        }, '', location.href);
	        // then push new state
	        history.pushState({}, '', url);
	      }
	      var hashMatch = path.match(hashRE);
	      var hash = hashMatch && hashMatch[0];
	      path = url
	      // strip hash so it doesn't mess up params
	      .replace(hashRE, '')
	      // remove root before matching
	      .replace(this.rootRE, '');
	      this.onChange(path, null, hash);
	    };

	    HTML5History.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/'
	      // absolute path
	      ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : resolvePath(this.base || location.pathname, path, append);
	    };

	    return HTML5History;
	  })();

	  var HashHistory = (function () {
	    function HashHistory(_ref) {
	      var hashbang = _ref.hashbang;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HashHistory);

	      this.hashbang = hashbang;
	      this.onChange = onChange;
	    }

	    HashHistory.prototype.start = function start() {
	      var self = this;
	      this.listener = function () {
	        var path = location.hash;
	        var raw = path.replace(/^#!?/, '');
	        // always
	        if (raw.charAt(0) !== '/') {
	          raw = '/' + raw;
	        }
	        var formattedPath = self.formatPath(raw);
	        if (formattedPath !== path) {
	          location.replace(formattedPath);
	          return;
	        }
	        // determine query
	        // note it's possible to have queries in both the actual URL
	        // and the hash fragment itself.
	        var query = location.search && path.indexOf('?') > -1 ? '&' + location.search.slice(1) : location.search;
	        self.onChange(path.replace(/^#!?/, '') + query);
	      };
	      window.addEventListener('hashchange', this.listener);
	      this.listener();
	    };

	    HashHistory.prototype.stop = function stop() {
	      window.removeEventListener('hashchange', this.listener);
	    };

	    HashHistory.prototype.go = function go(path, replace, append) {
	      path = this.formatPath(path, append);
	      if (replace) {
	        location.replace(path);
	      } else {
	        location.hash = path;
	      }
	    };

	    HashHistory.prototype.formatPath = function formatPath(path, append) {
	      var isAbsoloute = path.charAt(0) === '/';
	      var prefix = '#' + (this.hashbang ? '!' : '');
	      return isAbsoloute ? prefix + path : prefix + resolvePath(location.hash.replace(/^#!?/, ''), path, append);
	    };

	    return HashHistory;
	  })();

	  var AbstractHistory = (function () {
	    function AbstractHistory(_ref) {
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, AbstractHistory);

	      this.onChange = onChange;
	      this.currentPath = '/';
	    }

	    AbstractHistory.prototype.start = function start() {
	      this.onChange('/');
	    };

	    AbstractHistory.prototype.stop = function stop() {
	      // noop
	    };

	    AbstractHistory.prototype.go = function go(path, replace, append) {
	      path = this.currentPath = this.formatPath(path, append);
	      this.onChange(path);
	    };

	    AbstractHistory.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/' ? path : resolvePath(this.currentPath, path, append);
	    };

	    return AbstractHistory;
	  })();

	  /**
	   * Determine the reusability of an existing router view.
	   *
	   * @param {Directive} view
	   * @param {Object} handler
	   * @param {Transition} transition
	   */

	  function canReuse(view, handler, transition) {
	    var component = view.childVM;
	    if (!component || !handler) {
	      return false;
	    }
	    // important: check view.Component here because it may
	    // have been changed in activate hook
	    if (view.Component !== handler.component) {
	      return false;
	    }
	    var canReuseFn = getRouteConfig(component, 'canReuse');
	    return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
	      to: transition.to,
	      from: transition.from
	    }) : true; // defaults to true
	  }

	  /**
	   * Check if a component can deactivate.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function canDeactivate(view, transition, next) {
	    var fromComponent = view.childVM;
	    var hook = getRouteConfig(fromComponent, 'canDeactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHook(hook, fromComponent, next, {
	        expectBoolean: true
	      });
	    }
	  }

	  /**
	   * Check if a component can activate.
	   *
	   * @param {Object} handler
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function canActivate(handler, transition, next) {
	    resolveAsyncComponent(handler, function (Component) {
	      // have to check due to async-ness
	      if (transition.aborted) {
	        return;
	      }
	      // determine if this component can be activated
	      var hook = getRouteConfig(Component, 'canActivate');
	      if (!hook) {
	        next();
	      } else {
	        transition.callHook(hook, null, next, {
	          expectBoolean: true
	        });
	      }
	    });
	  }

	  /**
	   * Call deactivate hooks for existing router-views.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function deactivate(view, transition, next) {
	    var component = view.childVM;
	    var hook = getRouteConfig(component, 'deactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHooks(hook, component, next);
	    }
	  }

	  /**
	   * Activate / switch component for a router-view.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Number} depth
	   * @param {Function} [cb]
	   */

	  function activate(view, transition, depth, cb, reuse) {
	    var handler = transition.activateQueue[depth];
	    if (!handler) {
	      saveChildView(view);
	      if (view._bound) {
	        view.setComponent(null);
	      }
	      cb && cb();
	      return;
	    }

	    var Component = view.Component = handler.component;
	    var activateHook = getRouteConfig(Component, 'activate');
	    var dataHook = getRouteConfig(Component, 'data');
	    var waitForData = getRouteConfig(Component, 'waitForData');

	    view.depth = depth;
	    view.activated = false;

	    var component = undefined;
	    var loading = !!(dataHook && !waitForData);

	    // "reuse" is a flag passed down when the parent view is
	    // either reused via keep-alive or as a child of a kept-alive view.
	    // of course we can only reuse if the current kept-alive instance
	    // is of the correct type.
	    reuse = reuse && view.childVM && view.childVM.constructor === Component;

	    if (reuse) {
	      // just reuse
	      component = view.childVM;
	      component.$loadingRouteData = loading;
	    } else {
	      saveChildView(view);

	      // unbuild current component. this step also destroys
	      // and removes all nested child views.
	      view.unbuild(true);

	      // build the new component. this will also create the
	      // direct child view of the current one. it will register
	      // itself as view.childView.
	      component = view.build({
	        _meta: {
	          $loadingRouteData: loading
	        },
	        created: function created() {
	          this._routerView = view;
	        }
	      });

	      // handle keep-alive.
	      // when a kept-alive child vm is restored, we need to
	      // add its cached child views into the router's view list,
	      // and also properly update current view's child view.
	      if (view.keepAlive) {
	        component.$loadingRouteData = loading;
	        var cachedChildView = component._keepAliveRouterView;
	        if (cachedChildView) {
	          view.childView = cachedChildView;
	          component._keepAliveRouterView = null;
	        }
	      }
	    }

	    // cleanup the component in case the transition is aborted
	    // before the component is ever inserted.
	    var cleanup = function cleanup() {
	      component.$destroy();
	    };

	    // actually insert the component and trigger transition
	    var insert = function insert() {
	      if (reuse) {
	        cb && cb();
	        return;
	      }
	      var router = transition.router;
	      if (router._rendered || router._transitionOnLoad) {
	        view.transition(component);
	      } else {
	        // no transition on first render, manual transition
	        /* istanbul ignore if */
	        if (view.setCurrent) {
	          // 0.12 compat
	          view.setCurrent(component);
	        } else {
	          // 1.0
	          view.childVM = component;
	        }
	        component.$before(view.anchor, null, false);
	      }
	      cb && cb();
	    };

	    var afterData = function afterData() {
	      // activate the child view
	      if (view.childView) {
	        activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
	      }
	      insert();
	    };

	    // called after activation hook is resolved
	    var afterActivate = function afterActivate() {
	      view.activated = true;
	      if (dataHook && waitForData) {
	        // wait until data loaded to insert
	        loadData(component, transition, dataHook, afterData, cleanup);
	      } else {
	        // load data and insert at the same time
	        if (dataHook) {
	          loadData(component, transition, dataHook);
	        }
	        afterData();
	      }
	    };

	    if (activateHook) {
	      transition.callHooks(activateHook, component, afterActivate, {
	        cleanup: cleanup,
	        postActivate: true
	      });
	    } else {
	      afterActivate();
	    }
	  }

	  /**
	   * Reuse a view, just reload data if necessary.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   */

	  function reuse(view, transition) {
	    var component = view.childVM;
	    var dataHook = getRouteConfig(component, 'data');
	    if (dataHook) {
	      loadData(component, transition, dataHook);
	    }
	  }

	  /**
	   * Asynchronously load and apply data to component.
	   *
	   * @param {Vue} component
	   * @param {Transition} transition
	   * @param {Function} hook
	   * @param {Function} cb
	   * @param {Function} cleanup
	   */

	  function loadData(component, transition, hook, cb, cleanup) {
	    component.$loadingRouteData = true;
	    transition.callHooks(hook, component, function () {
	      component.$loadingRouteData = false;
	      component.$emit('route-data-loaded', component);
	      cb && cb();
	    }, {
	      cleanup: cleanup,
	      postActivate: true,
	      processData: function processData(data) {
	        // handle promise sugar syntax
	        var promises = [];
	        if (isPlainObject(data)) {
	          Object.keys(data).forEach(function (key) {
	            var val = data[key];
	            if (isPromise(val)) {
	              promises.push(val.then(function (resolvedVal) {
	                component.$set(key, resolvedVal);
	              }));
	            } else {
	              component.$set(key, val);
	            }
	          });
	        }
	        if (promises.length) {
	          return promises[0].constructor.all(promises);
	        }
	      }
	    });
	  }

	  /**
	   * Save the child view for a kept-alive view so that
	   * we can restore it when it is switched back to.
	   *
	   * @param {Directive} view
	   */

	  function saveChildView(view) {
	    if (view.keepAlive && view.childVM && view.childView) {
	      view.childVM._keepAliveRouterView = view.childView;
	    }
	    view.childView = null;
	  }

	  /**
	   * Check plain object.
	   *
	   * @param {*} val
	   */

	  function isPlainObject(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }

	  /**
	   * A RouteTransition object manages the pipeline of a
	   * router-view switching process. This is also the object
	   * passed into user route hooks.
	   *
	   * @param {Router} router
	   * @param {Route} to
	   * @param {Route} from
	   */

	  var RouteTransition = (function () {
	    function RouteTransition(router, to, from) {
	      babelHelpers.classCallCheck(this, RouteTransition);

	      this.router = router;
	      this.to = to;
	      this.from = from;
	      this.next = null;
	      this.aborted = false;
	      this.done = false;
	    }

	    /**
	     * Abort current transition and return to previous location.
	     */

	    RouteTransition.prototype.abort = function abort() {
	      if (!this.aborted) {
	        this.aborted = true;
	        // if the root path throws an error during validation
	        // on initial load, it gets caught in an infinite loop.
	        var abortingOnLoad = !this.from.path && this.to.path === '/';
	        if (!abortingOnLoad) {
	          this.router.replace(this.from.path || '/');
	        }
	      }
	    };

	    /**
	     * Abort current transition and redirect to a new location.
	     *
	     * @param {String} path
	     */

	    RouteTransition.prototype.redirect = function redirect(path) {
	      if (!this.aborted) {
	        this.aborted = true;
	        if (typeof path === 'string') {
	          path = mapParams(path, this.to.params, this.to.query);
	        } else {
	          path.params = path.params || this.to.params;
	          path.query = path.query || this.to.query;
	        }
	        this.router.replace(path);
	      }
	    };

	    /**
	     * A router view transition's pipeline can be described as
	     * follows, assuming we are transitioning from an existing
	     * <router-view> chain [Component A, Component B] to a new
	     * chain [Component A, Component C]:
	     *
	     *  A    A
	     *  | => |
	     *  B    C
	     *
	     * 1. Reusablity phase:
	     *   -> canReuse(A, A)
	     *   -> canReuse(B, C)
	     *   -> determine new queues:
	     *      - deactivation: [B]
	     *      - activation: [C]
	     *
	     * 2. Validation phase:
	     *   -> canDeactivate(B)
	     *   -> canActivate(C)
	     *
	     * 3. Activation phase:
	     *   -> deactivate(B)
	     *   -> activate(C)
	     *
	     * Each of these steps can be asynchronous, and any
	     * step can potentially abort the transition.
	     *
	     * @param {Function} cb
	     */

	    RouteTransition.prototype.start = function start(cb) {
	      var transition = this;

	      // determine the queue of views to deactivate
	      var deactivateQueue = [];
	      var view = this.router._rootView;
	      while (view) {
	        deactivateQueue.unshift(view);
	        view = view.childView;
	      }
	      var reverseDeactivateQueue = deactivateQueue.slice().reverse();

	      // determine the queue of route handlers to activate
	      var activateQueue = this.activateQueue = toArray(this.to.matched).map(function (match) {
	        return match.handler;
	      });

	      // 1. Reusability phase
	      var i = undefined,
	          reuseQueue = undefined;
	      for (i = 0; i < reverseDeactivateQueue.length; i++) {
	        if (!canReuse(reverseDeactivateQueue[i], activateQueue[i], transition)) {
	          break;
	        }
	      }
	      if (i > 0) {
	        reuseQueue = reverseDeactivateQueue.slice(0, i);
	        deactivateQueue = reverseDeactivateQueue.slice(i).reverse();
	        activateQueue = activateQueue.slice(i);
	      }

	      // 2. Validation phase
	      transition.runQueue(deactivateQueue, canDeactivate, function () {
	        transition.runQueue(activateQueue, canActivate, function () {
	          transition.runQueue(deactivateQueue, deactivate, function () {
	            // 3. Activation phase

	            // Update router current route
	            transition.router._onTransitionValidated(transition);

	            // trigger reuse for all reused views
	            reuseQueue && reuseQueue.forEach(function (view) {
	              return reuse(view, transition);
	            });

	            // the root of the chain that needs to be replaced
	            // is the top-most non-reusable view.
	            if (deactivateQueue.length) {
	              var _view = deactivateQueue[deactivateQueue.length - 1];
	              var depth = reuseQueue ? reuseQueue.length : 0;
	              activate(_view, transition, depth, cb);
	            } else {
	              cb();
	            }
	          });
	        });
	      });
	    };

	    /**
	     * Asynchronously and sequentially apply a function to a
	     * queue.
	     *
	     * @param {Array} queue
	     * @param {Function} fn
	     * @param {Function} cb
	     */

	    RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
	      var transition = this;
	      step(0);
	      function step(index) {
	        if (index >= queue.length) {
	          cb();
	        } else {
	          fn(queue[index], transition, function () {
	            step(index + 1);
	          });
	        }
	      }
	    };

	    /**
	     * Call a user provided route transition hook and handle
	     * the response (e.g. if the user returns a promise).
	     *
	     * If the user neither expects an argument nor returns a
	     * promise, the hook is assumed to be synchronous.
	     *
	     * @param {Function} hook
	     * @param {*} [context]
	     * @param {Function} [cb]
	     * @param {Object} [options]
	     *                 - {Boolean} expectBoolean
	     *                 - {Boolean} postActive
	     *                 - {Function} processData
	     *                 - {Function} cleanup
	     */

	    RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
	      var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	      var _ref$expectBoolean = _ref.expectBoolean;
	      var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
	      var _ref$postActivate = _ref.postActivate;
	      var postActivate = _ref$postActivate === undefined ? false : _ref$postActivate;
	      var processData = _ref.processData;
	      var cleanup = _ref.cleanup;

	      var transition = this;
	      var nextCalled = false;

	      // abort the transition
	      var abort = function abort() {
	        cleanup && cleanup();
	        transition.abort();
	      };

	      // handle errors
	      var onError = function onError(err) {
	        postActivate ? next() : abort();
	        if (err && !transition.router._suppress) {
	          warn$1('Uncaught error during transition: ');
	          throw err instanceof Error ? err : new Error(err);
	        }
	      };

	      // since promise swallows errors, we have to
	      // throw it in the next tick...
	      var onPromiseError = function onPromiseError(err) {
	        try {
	          onError(err);
	        } catch (e) {
	          setTimeout(function () {
	            throw e;
	          }, 0);
	        }
	      };

	      // advance the transition to the next step
	      var next = function next() {
	        if (nextCalled) {
	          warn$1('transition.next() should be called only once.');
	          return;
	        }
	        nextCalled = true;
	        if (transition.aborted) {
	          cleanup && cleanup();
	          return;
	        }
	        cb && cb();
	      };

	      var nextWithBoolean = function nextWithBoolean(res) {
	        if (typeof res === 'boolean') {
	          res ? next() : abort();
	        } else if (isPromise(res)) {
	          res.then(function (ok) {
	            ok ? next() : abort();
	          }, onPromiseError);
	        } else if (!hook.length) {
	          next();
	        }
	      };

	      var nextWithData = function nextWithData(data) {
	        var res = undefined;
	        try {
	          res = processData(data);
	        } catch (err) {
	          return onError(err);
	        }
	        if (isPromise(res)) {
	          res.then(next, onPromiseError);
	        } else {
	          next();
	        }
	      };

	      // expose a clone of the transition object, so that each
	      // hook gets a clean copy and prevent the user from
	      // messing with the internals.
	      var exposed = {
	        to: transition.to,
	        from: transition.from,
	        abort: abort,
	        next: processData ? nextWithData : next,
	        redirect: function redirect() {
	          transition.redirect.apply(transition, arguments);
	        }
	      };

	      // actually call the hook
	      var res = undefined;
	      try {
	        res = hook.call(context, exposed);
	      } catch (err) {
	        return onError(err);
	      }

	      if (expectBoolean) {
	        // boolean hooks
	        nextWithBoolean(res);
	      } else if (isPromise(res)) {
	        // promise
	        if (processData) {
	          res.then(nextWithData, onPromiseError);
	        } else {
	          res.then(next, onPromiseError);
	        }
	      } else if (processData && isPlainOjbect(res)) {
	        // data promise sugar
	        nextWithData(res);
	      } else if (!hook.length) {
	        next();
	      }
	    };

	    /**
	     * Call a single hook or an array of async hooks in series.
	     *
	     * @param {Array} hooks
	     * @param {*} context
	     * @param {Function} cb
	     * @param {Object} [options]
	     */

	    RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
	      var _this = this;

	      if (Array.isArray(hooks)) {
	        this.runQueue(hooks, function (hook, _, next) {
	          if (!_this.aborted) {
	            _this.callHook(hook, context, next, options);
	          }
	        }, cb);
	      } else {
	        this.callHook(hooks, context, cb, options);
	      }
	    };

	    return RouteTransition;
	  })();

	  function isPlainOjbect(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }

	  function toArray(val) {
	    return val ? Array.prototype.slice.call(val) : [];
	  }

	  var internalKeysRE = /^(component|subRoutes|fullPath)$/;

	  /**
	   * Route Context Object
	   *
	   * @param {String} path
	   * @param {Router} router
	   */

	  var Route = function Route(path, router) {
	    var _this = this;

	    babelHelpers.classCallCheck(this, Route);

	    var matched = router._recognizer.recognize(path);
	    if (matched) {
	      // copy all custom fields from route configs
	      [].forEach.call(matched, function (match) {
	        for (var key in match.handler) {
	          if (!internalKeysRE.test(key)) {
	            _this[key] = match.handler[key];
	          }
	        }
	      });
	      // set query and params
	      this.query = matched.queryParams;
	      this.params = [].reduce.call(matched, function (prev, cur) {
	        if (cur.params) {
	          for (var key in cur.params) {
	            prev[key] = cur.params[key];
	          }
	        }
	        return prev;
	      }, {});
	    }
	    // expose path and router
	    this.path = path;
	    // for internal use
	    this.matched = matched || router._notFoundHandler;
	    // internal reference to router
	    Object.defineProperty(this, 'router', {
	      enumerable: false,
	      value: router
	    });
	    // Important: freeze self to prevent observation
	    Object.freeze(this);
	  };

	  function applyOverride (Vue) {
	    var _Vue$util = Vue.util;
	    var extend = _Vue$util.extend;
	    var isArray = _Vue$util.isArray;
	    var defineReactive = _Vue$util.defineReactive;

	    // override Vue's init and destroy process to keep track of router instances
	    var init = Vue.prototype._init;
	    Vue.prototype._init = function (options) {
	      options = options || {};
	      var root = options._parent || options.parent || this;
	      var router = root.$router;
	      var route = root.$route;
	      if (router) {
	        // expose router
	        this.$router = router;
	        router._children.push(this);
	        /* istanbul ignore if */
	        if (this._defineMeta) {
	          // 0.12
	          this._defineMeta('$route', route);
	        } else {
	          // 1.0
	          defineReactive(this, '$route', route);
	        }
	      }
	      init.call(this, options);
	    };

	    var destroy = Vue.prototype._destroy;
	    Vue.prototype._destroy = function () {
	      if (!this._isBeingDestroyed && this.$router) {
	        this.$router._children.$remove(this);
	      }
	      destroy.apply(this, arguments);
	    };

	    // 1.0 only: enable route mixins
	    var strats = Vue.config.optionMergeStrategies;
	    var hooksToMergeRE = /^(data|activate|deactivate)$/;

	    if (strats) {
	      strats.route = function (parentVal, childVal) {
	        if (!childVal) return parentVal;
	        if (!parentVal) return childVal;
	        var ret = {};
	        extend(ret, parentVal);
	        for (var key in childVal) {
	          var a = ret[key];
	          var b = childVal[key];
	          // for data, activate and deactivate, we need to merge them into
	          // arrays similar to lifecycle hooks.
	          if (a && hooksToMergeRE.test(key)) {
	            ret[key] = (isArray(a) ? a : [a]).concat(b);
	          } else {
	            ret[key] = b;
	          }
	        }
	        return ret;
	      };
	    }
	  }

	  function View (Vue) {

	    var _ = Vue.util;
	    var componentDef =
	    // 0.12
	    Vue.directive('_component') ||
	    // 1.0
	    Vue.internalDirectives.component;
	    // <router-view> extends the internal component directive
	    var viewDef = _.extend({}, componentDef);

	    // with some overrides
	    _.extend(viewDef, {

	      _isRouterView: true,

	      bind: function bind() {
	        var route = this.vm.$route;
	        /* istanbul ignore if */
	        if (!route) {
	          warn$1('<router-view> can only be used inside a ' + 'router-enabled app.');
	          return;
	        }
	        // force dynamic directive so v-component doesn't
	        // attempt to build right now
	        this._isDynamicLiteral = true;
	        // finally, init by delegating to v-component
	        componentDef.bind.call(this);

	        // locate the parent view
	        var parentView = undefined;
	        var parent = this.vm;
	        while (parent) {
	          if (parent._routerView) {
	            parentView = parent._routerView;
	            break;
	          }
	          parent = parent.$parent;
	        }
	        if (parentView) {
	          // register self as a child of the parent view,
	          // instead of activating now. This is so that the
	          // child's activate hook is called after the
	          // parent's has resolved.
	          this.parentView = parentView;
	          parentView.childView = this;
	        } else {
	          // this is the root view!
	          var router = route.router;
	          router._rootView = this;
	        }

	        // handle late-rendered view
	        // two possibilities:
	        // 1. root view rendered after transition has been
	        //    validated;
	        // 2. child view rendered after parent view has been
	        //    activated.
	        var transition = route.router._currentTransition;
	        if (!parentView && transition.done || parentView && parentView.activated) {
	          var depth = parentView ? parentView.depth + 1 : 0;
	          activate(this, transition, depth);
	        }
	      },

	      unbind: function unbind() {
	        if (this.parentView) {
	          this.parentView.childView = null;
	        }
	        componentDef.unbind.call(this);
	      }
	    });

	    Vue.elementDirective('router-view', viewDef);
	  }

	  var trailingSlashRE = /\/$/;
	  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	  var queryStringRE = /\?.*$/;

	  // install v-link, which provides navigation support for
	  // HTML5 history mode
	  function Link (Vue) {
	    var _Vue$util = Vue.util;
	    var _bind = _Vue$util.bind;
	    var isObject = _Vue$util.isObject;
	    var addClass = _Vue$util.addClass;
	    var removeClass = _Vue$util.removeClass;

	    var onPriority = Vue.directive('on').priority;
	    var LINK_UPDATE = '__vue-router-link-update__';

	    var activeId = 0;

	    Vue.directive('link-active', {
	      priority: 9999,
	      bind: function bind() {
	        var _this = this;

	        var id = String(activeId++);
	        // collect v-links contained within this element.
	        // we need do this here before the parent-child relationship
	        // gets messed up by terminal directives (if, for, components)
	        var childLinks = this.el.querySelectorAll('[v-link]');
	        for (var i = 0, l = childLinks.length; i < l; i++) {
	          var link = childLinks[i];
	          var existingId = link.getAttribute(LINK_UPDATE);
	          var value = existingId ? existingId + ',' + id : id;
	          // leave a mark on the link element which can be persisted
	          // through fragment clones.
	          link.setAttribute(LINK_UPDATE, value);
	        }
	        this.vm.$on(LINK_UPDATE, this.cb = function (link, path) {
	          if (link.activeIds.indexOf(id) > -1) {
	            link.updateClasses(path, _this.el);
	          }
	        });
	      },
	      unbind: function unbind() {
	        this.vm.$off(LINK_UPDATE, this.cb);
	      }
	    });

	    Vue.directive('link', {
	      priority: onPriority - 2,

	      bind: function bind() {
	        var vm = this.vm;
	        /* istanbul ignore if */
	        if (!vm.$route) {
	          warn$1('v-link can only be used inside a router-enabled app.');
	          return;
	        }
	        this.router = vm.$route.router;
	        // update things when the route changes
	        this.unwatch = vm.$watch('$route', _bind(this.onRouteUpdate, this));
	        // check v-link-active ids
	        var activeIds = this.el.getAttribute(LINK_UPDATE);
	        if (activeIds) {
	          this.el.removeAttribute(LINK_UPDATE);
	          this.activeIds = activeIds.split(',');
	        }
	        // no need to handle click if link expects to be opened
	        // in a new window/tab.
	        /* istanbul ignore if */
	        if (this.el.tagName === 'A' && this.el.getAttribute('target') === '_blank') {
	          return;
	        }
	        // handle click
	        this.handler = _bind(this.onClick, this);
	        this.el.addEventListener('click', this.handler);
	      },

	      update: function update(target) {
	        this.target = target;
	        if (isObject(target)) {
	          this.append = target.append;
	          this.exact = target.exact;
	          this.prevActiveClass = this.activeClass;
	          this.activeClass = target.activeClass;
	        }
	        this.onRouteUpdate(this.vm.$route);
	      },

	      onClick: function onClick(e) {
	        // don't redirect with control keys
	        /* istanbul ignore if */
	        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
	        // don't redirect when preventDefault called
	        /* istanbul ignore if */
	        if (e.defaultPrevented) return;
	        // don't redirect on right click
	        /* istanbul ignore if */
	        if (e.button !== 0) return;

	        var target = this.target;
	        if (target) {
	          // v-link with expression, just go
	          e.preventDefault();
	          this.router.go(target);
	        } else {
	          // no expression, delegate for an <a> inside
	          var el = e.target;
	          while (el.tagName !== 'A' && el !== this.el) {
	            el = el.parentNode;
	          }
	          if (el.tagName === 'A' && sameOrigin(el)) {
	            e.preventDefault();
	            var path = el.pathname;
	            if (this.router.history.root) {
	              path = path.replace(this.router.history.rootRE, '');
	            }
	            this.router.go({
	              path: path,
	              replace: target && target.replace,
	              append: target && target.append
	            });
	          }
	        }
	      },

	      onRouteUpdate: function onRouteUpdate(route) {
	        // router.stringifyPath is dependent on current route
	        // and needs to be called again whenver route changes.
	        var newPath = this.router.stringifyPath(this.target);
	        if (this.path !== newPath) {
	          this.path = newPath;
	          this.updateActiveMatch();
	          this.updateHref();
	        }
	        if (this.activeIds) {
	          this.vm.$emit(LINK_UPDATE, this, route.path);
	        } else {
	          this.updateClasses(route.path, this.el);
	        }
	      },

	      updateActiveMatch: function updateActiveMatch() {
	        this.activeRE = this.path && !this.exact ? new RegExp('^' + this.path.replace(/\/$/, '').replace(queryStringRE, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
	      },

	      updateHref: function updateHref() {
	        if (this.el.tagName !== 'A') {
	          return;
	        }
	        var path = this.path;
	        var router = this.router;
	        var isAbsolute = path.charAt(0) === '/';
	        // do not format non-hash relative paths
	        var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, this.append) : path;
	        if (href) {
	          this.el.href = href;
	        } else {
	          this.el.removeAttribute('href');
	        }
	      },

	      updateClasses: function updateClasses(path, el) {
	        var activeClass = this.activeClass || this.router._linkActiveClass;
	        // clear old class
	        if (this.prevActiveClass && this.prevActiveClass !== activeClass) {
	          toggleClasses(el, this.prevActiveClass, removeClass);
	        }
	        // remove query string before matching
	        var dest = this.path.replace(queryStringRE, '');
	        path = path.replace(queryStringRE, '');
	        // add new class
	        if (this.exact) {
	          if (dest === path ||
	          // also allow additional trailing slash
	          dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        } else {
	          if (this.activeRE && this.activeRE.test(path)) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        }
	      },

	      unbind: function unbind() {
	        this.el.removeEventListener('click', this.handler);
	        this.unwatch && this.unwatch();
	      }
	    });

	    function sameOrigin(link) {
	      return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
	    }

	    // this function is copied from v-bind:class implementation until
	    // we properly expose it...
	    function toggleClasses(el, key, fn) {
	      key = key.trim();
	      if (key.indexOf(' ') === -1) {
	        fn(el, key);
	        return;
	      }
	      var keys = key.split(/\s+/);
	      for (var i = 0, l = keys.length; i < l; i++) {
	        fn(el, keys[i]);
	      }
	    }
	  }

	  var historyBackends = {
	    abstract: AbstractHistory,
	    hash: HashHistory,
	    html5: HTML5History
	  };

	  // late bind during install
	  var Vue = undefined;

	  /**
	   * Router constructor
	   *
	   * @param {Object} [options]
	   */

	  var Router = (function () {
	    function Router() {
	      var _this = this;

	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      var _ref$hashbang = _ref.hashbang;
	      var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
	      var _ref$abstract = _ref.abstract;
	      var abstract = _ref$abstract === undefined ? false : _ref$abstract;
	      var _ref$history = _ref.history;
	      var history = _ref$history === undefined ? false : _ref$history;
	      var _ref$saveScrollPosition = _ref.saveScrollPosition;
	      var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
	      var _ref$transitionOnLoad = _ref.transitionOnLoad;
	      var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
	      var _ref$suppressTransitionError = _ref.suppressTransitionError;
	      var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
	      var _ref$root = _ref.root;
	      var root = _ref$root === undefined ? null : _ref$root;
	      var _ref$linkActiveClass = _ref.linkActiveClass;
	      var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;
	      babelHelpers.classCallCheck(this, Router);

	      /* istanbul ignore if */
	      if (!Router.installed) {
	        throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
	      }

	      // Vue instances
	      this.app = null;
	      this._children = [];

	      // route recognizer
	      this._recognizer = new RouteRecognizer();
	      this._guardRecognizer = new RouteRecognizer();

	      // state
	      this._started = false;
	      this._startCb = null;
	      this._currentRoute = {};
	      this._currentTransition = null;
	      this._previousTransition = null;
	      this._notFoundHandler = null;
	      this._notFoundRedirect = null;
	      this._beforeEachHooks = [];
	      this._afterEachHooks = [];

	      // trigger transition on initial render?
	      this._rendered = false;
	      this._transitionOnLoad = transitionOnLoad;

	      // history mode
	      this._root = root;
	      this._abstract = abstract;
	      this._hashbang = hashbang;

	      // check if HTML5 history is available
	      var hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;
	      this._history = history && hasPushState;
	      this._historyFallback = history && !hasPushState;

	      // create history object
	      var inBrowser = Vue.util.inBrowser;
	      this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';

	      var History = historyBackends[this.mode];
	      this.history = new History({
	        root: root,
	        hashbang: this._hashbang,
	        onChange: function onChange(path, state, anchor) {
	          _this._match(path, state, anchor);
	        }
	      });

	      // other options
	      this._saveScrollPosition = saveScrollPosition;
	      this._linkActiveClass = linkActiveClass;
	      this._suppress = suppressTransitionError;
	    }

	    /**
	     * Allow directly passing components to a route
	     * definition.
	     *
	     * @param {String} path
	     * @param {Object} handler
	     */

	    // API ===================================================

	    /**
	    * Register a map of top-level paths.
	    *
	    * @param {Object} map
	    */

	    Router.prototype.map = function map(_map) {
	      for (var route in _map) {
	        this.on(route, _map[route]);
	      }
	      return this;
	    };

	    /**
	     * Register a single root-level path
	     *
	     * @param {String} rootPath
	     * @param {Object} handler
	     *                 - {String} component
	     *                 - {Object} [subRoutes]
	     *                 - {Boolean} [forceRefresh]
	     *                 - {Function} [before]
	     *                 - {Function} [after]
	     */

	    Router.prototype.on = function on(rootPath, handler) {
	      if (rootPath === '*') {
	        this._notFound(handler);
	      } else {
	        this._addRoute(rootPath, handler, []);
	      }
	      return this;
	    };

	    /**
	     * Set redirects.
	     *
	     * @param {Object} map
	     */

	    Router.prototype.redirect = function redirect(map) {
	      for (var path in map) {
	        this._addRedirect(path, map[path]);
	      }
	      return this;
	    };

	    /**
	     * Set aliases.
	     *
	     * @param {Object} map
	     */

	    Router.prototype.alias = function alias(map) {
	      for (var path in map) {
	        this._addAlias(path, map[path]);
	      }
	      return this;
	    };

	    /**
	     * Set global before hook.
	     *
	     * @param {Function} fn
	     */

	    Router.prototype.beforeEach = function beforeEach(fn) {
	      this._beforeEachHooks.push(fn);
	      return this;
	    };

	    /**
	     * Set global after hook.
	     *
	     * @param {Function} fn
	     */

	    Router.prototype.afterEach = function afterEach(fn) {
	      this._afterEachHooks.push(fn);
	      return this;
	    };

	    /**
	     * Navigate to a given path.
	     * The path can be an object describing a named path in
	     * the format of { name: '...', params: {}, query: {}}
	     * The path is assumed to be already decoded, and will
	     * be resolved against root (if provided)
	     *
	     * @param {String|Object} path
	     * @param {Boolean} [replace]
	     */

	    Router.prototype.go = function go(path) {
	      var replace = false;
	      var append = false;
	      if (Vue.util.isObject(path)) {
	        replace = path.replace;
	        append = path.append;
	      }
	      path = this.stringifyPath(path);
	      if (path) {
	        this.history.go(path, replace, append);
	      }
	    };

	    /**
	     * Short hand for replacing current path
	     *
	     * @param {String} path
	     */

	    Router.prototype.replace = function replace(path) {
	      if (typeof path === 'string') {
	        path = { path: path };
	      }
	      path.replace = true;
	      this.go(path);
	    };

	    /**
	     * Start the router.
	     *
	     * @param {VueConstructor} App
	     * @param {String|Element} container
	     * @param {Function} [cb]
	     */

	    Router.prototype.start = function start(App, container, cb) {
	      /* istanbul ignore if */
	      if (this._started) {
	        warn$1('already started.');
	        return;
	      }
	      this._started = true;
	      this._startCb = cb;
	      if (!this.app) {
	        /* istanbul ignore if */
	        if (!App || !container) {
	          throw new Error('Must start vue-router with a component and a ' + 'root container.');
	        }
	        /* istanbul ignore if */
	        if (App instanceof Vue) {
	          throw new Error('Must start vue-router with a component, not a ' + 'Vue instance.');
	        }
	        this._appContainer = container;
	        var Ctor = this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
	        // give it a name for better debugging
	        Ctor.options.name = Ctor.options.name || 'RouterApp';
	      }

	      // handle history fallback in browsers that do not
	      // support HTML5 history API
	      if (this._historyFallback) {
	        var _location = window.location;
	        var _history = new HTML5History({ root: this._root });
	        var path = _history.root ? _location.pathname.replace(_history.rootRE, '') : _location.pathname;
	        if (path && path !== '/') {
	          _location.assign((_history.root || '') + '/' + this.history.formatPath(path) + _location.search);
	          return;
	        }
	      }

	      this.history.start();
	    };

	    /**
	     * Stop listening to route changes.
	     */

	    Router.prototype.stop = function stop() {
	      this.history.stop();
	      this._started = false;
	    };

	    /**
	     * Normalize named route object / string paths into
	     * a string.
	     *
	     * @param {Object|String|Number} path
	     * @return {String}
	     */

	    Router.prototype.stringifyPath = function stringifyPath(path) {
	      var generatedPath = '';
	      if (path && typeof path === 'object') {
	        if (path.name) {
	          var extend = Vue.util.extend;
	          var currentParams = this._currentTransition && this._currentTransition.to.params;
	          var targetParams = path.params || {};
	          var params = currentParams ? extend(extend({}, currentParams), targetParams) : targetParams;
	          generatedPath = encodeURI(this._recognizer.generate(path.name, params));
	        } else if (path.path) {
	          generatedPath = encodeURI(path.path);
	        }
	        if (path.query) {
	          // note: the generated query string is pre-URL-encoded by the recognizer
	          var query = this._recognizer.generateQueryString(path.query);
	          if (generatedPath.indexOf('?') > -1) {
	            generatedPath += '&' + query.slice(1);
	          } else {
	            generatedPath += query;
	          }
	        }
	      } else {
	        generatedPath = encodeURI(path ? path + '' : '');
	      }
	      return generatedPath;
	    };

	    // Internal methods ======================================

	    /**
	    * Add a route containing a list of segments to the internal
	    * route recognizer. Will be called recursively to add all
	    * possible sub-routes.
	    *
	    * @param {String} path
	    * @param {Object} handler
	    * @param {Array} segments
	    */

	    Router.prototype._addRoute = function _addRoute(path, handler, segments) {
	      guardComponent(path, handler);
	      handler.path = path;
	      handler.fullPath = (segments.reduce(function (path, segment) {
	        return path + segment.path;
	      }, '') + path).replace('//', '/');
	      segments.push({
	        path: path,
	        handler: handler
	      });
	      this._recognizer.add(segments, {
	        as: handler.name
	      });
	      // add sub routes
	      if (handler.subRoutes) {
	        for (var subPath in handler.subRoutes) {
	          // recursively walk all sub routes
	          this._addRoute(subPath, handler.subRoutes[subPath],
	          // pass a copy in recursion to avoid mutating
	          // across branches
	          segments.slice());
	        }
	      }
	    };

	    /**
	     * Set the notFound route handler.
	     *
	     * @param {Object} handler
	     */

	    Router.prototype._notFound = function _notFound(handler) {
	      guardComponent('*', handler);
	      this._notFoundHandler = [{ handler: handler }];
	    };

	    /**
	     * Add a redirect record.
	     *
	     * @param {String} path
	     * @param {String} redirectPath
	     */

	    Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
	      if (path === '*') {
	        this._notFoundRedirect = redirectPath;
	      } else {
	        this._addGuard(path, redirectPath, this.replace);
	      }
	    };

	    /**
	     * Add an alias record.
	     *
	     * @param {String} path
	     * @param {String} aliasPath
	     */

	    Router.prototype._addAlias = function _addAlias(path, aliasPath) {
	      this._addGuard(path, aliasPath, this._match);
	    };

	    /**
	     * Add a path guard.
	     *
	     * @param {String} path
	     * @param {String} mappedPath
	     * @param {Function} handler
	     */

	    Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
	      var _this2 = this;

	      this._guardRecognizer.add([{
	        path: path,
	        handler: function handler(match, query) {
	          var realPath = mapParams(mappedPath, match.params, query);
	          _handler.call(_this2, realPath);
	        }
	      }]);
	    };

	    /**
	     * Check if a path matches any redirect records.
	     *
	     * @param {String} path
	     * @return {Boolean} - if true, will skip normal match.
	     */

	    Router.prototype._checkGuard = function _checkGuard(path) {
	      var matched = this._guardRecognizer.recognize(path, true);
	      if (matched) {
	        matched[0].handler(matched[0], matched.queryParams);
	        return true;
	      } else if (this._notFoundRedirect) {
	        matched = this._recognizer.recognize(path);
	        if (!matched) {
	          this.replace(this._notFoundRedirect);
	          return true;
	        }
	      }
	    };

	    /**
	     * Match a URL path and set the route context on vm,
	     * triggering view updates.
	     *
	     * @param {String} path
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */

	    Router.prototype._match = function _match(path, state, anchor) {
	      var _this3 = this;

	      if (this._checkGuard(path)) {
	        return;
	      }

	      var currentRoute = this._currentRoute;
	      var currentTransition = this._currentTransition;

	      if (currentTransition) {
	        if (currentTransition.to.path === path) {
	          // do nothing if we have an active transition going to the same path
	          return;
	        } else if (currentRoute.path === path) {
	          // We are going to the same path, but we also have an ongoing but
	          // not-yet-validated transition. Abort that transition and reset to
	          // prev transition.
	          currentTransition.aborted = true;
	          this._currentTransition = this._prevTransition;
	          return;
	        } else {
	          // going to a totally different path. abort ongoing transition.
	          currentTransition.aborted = true;
	        }
	      }

	      // construct new route and transition context
	      var route = new Route(path, this);
	      var transition = new RouteTransition(this, route, currentRoute);

	      // current transition is updated right now.
	      // however, current route will only be updated after the transition has
	      // been validated.
	      this._prevTransition = currentTransition;
	      this._currentTransition = transition;

	      if (!this.app) {
	        (function () {
	          // initial render
	          var router = _this3;
	          _this3.app = new _this3._appConstructor({
	            el: _this3._appContainer,
	            created: function created() {
	              this.$router = router;
	            },
	            _meta: {
	              $route: route
	            }
	          });
	        })();
	      }

	      // check global before hook
	      var beforeHooks = this._beforeEachHooks;
	      var startTransition = function startTransition() {
	        transition.start(function () {
	          _this3._postTransition(route, state, anchor);
	        });
	      };

	      if (beforeHooks.length) {
	        transition.runQueue(beforeHooks, function (hook, _, next) {
	          if (transition === _this3._currentTransition) {
	            transition.callHook(hook, null, next, {
	              expectBoolean: true
	            });
	          }
	        }, startTransition);
	      } else {
	        startTransition();
	      }

	      if (!this._rendered && this._startCb) {
	        this._startCb.call(null);
	      }

	      // HACK:
	      // set rendered to true after the transition start, so
	      // that components that are acitvated synchronously know
	      // whether it is the initial render.
	      this._rendered = true;
	    };

	    /**
	     * Set current to the new transition.
	     * This is called by the transition object when the
	     * validation of a route has succeeded.
	     *
	     * @param {Transition} transition
	     */

	    Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
	      // set current route
	      var route = this._currentRoute = transition.to;
	      // update route context for all children
	      if (this.app.$route !== route) {
	        this.app.$route = route;
	        this._children.forEach(function (child) {
	          child.$route = route;
	        });
	      }
	      // call global after hook
	      if (this._afterEachHooks.length) {
	        this._afterEachHooks.forEach(function (hook) {
	          return hook.call(null, {
	            to: transition.to,
	            from: transition.from
	          });
	        });
	      }
	      this._currentTransition.done = true;
	    };

	    /**
	     * Handle stuff after the transition.
	     *
	     * @param {Route} route
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */

	    Router.prototype._postTransition = function _postTransition(route, state, anchor) {
	      // handle scroll positions
	      // saved scroll positions take priority
	      // then we check if the path has an anchor
	      var pos = state && state.pos;
	      if (pos && this._saveScrollPosition) {
	        Vue.nextTick(function () {
	          window.scrollTo(pos.x, pos.y);
	        });
	      } else if (anchor) {
	        Vue.nextTick(function () {
	          var el = document.getElementById(anchor.slice(1));
	          if (el) {
	            window.scrollTo(window.scrollX, el.offsetTop);
	          }
	        });
	      }
	    };

	    return Router;
	  })();

	  function guardComponent(path, handler) {
	    var comp = handler.component;
	    if (Vue.util.isPlainObject(comp)) {
	      comp = handler.component = Vue.extend(comp);
	    }
	    /* istanbul ignore if */
	    if (typeof comp !== 'function') {
	      handler.component = null;
	      warn$1('invalid component for route "' + path + '".');
	    }
	  }

	  /* Installation */

	  Router.installed = false;

	  /**
	   * Installation interface.
	   * Install the necessary directives.
	   */

	  Router.install = function (externalVue) {
	    /* istanbul ignore if */
	    if (Router.installed) {
	      warn$1('already installed.');
	      return;
	    }
	    Vue = externalVue;
	    applyOverride(Vue);
	    View(Vue);
	    Link(Vue);
	    exports$1.Vue = Vue;
	    Router.installed = true;
	  };

	  // auto install
	  /* istanbul ignore if */
	  if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(Router);
	  }

	  return Router;

	}));

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	exports.default = function (router) {
		router.map({
			'/': { component: _Index2.default },
			'/index': { component: _Index2.default },
			'/search': { component: _Index4.default },
			'/list': { component: _Index6.default },
			'/platform': { component: _Index8.default },
			'/article': { component: _Index10.default },
			'/category': { component: _Index12.default },
			'/center': { component: _Center2.default },
			'/product/:productId': { name: 'product', component: _Index14.default }
		});
	};

	var _Index = __webpack_require__(5);

	var _Index2 = _interopRequireDefault(_Index);

	var _Index3 = __webpack_require__(44);

	var _Index4 = _interopRequireDefault(_Index3);

	var _Index5 = __webpack_require__(56);

	var _Index6 = _interopRequireDefault(_Index5);

	var _Index7 = __webpack_require__(65);

	var _Index8 = _interopRequireDefault(_Index7);

	var _Index9 = __webpack_require__(88);

	var _Index10 = _interopRequireDefault(_Index9);

	var _Index11 = __webpack_require__(99);

	var _Index12 = _interopRequireDefault(_Index11);

	var _Center = __webpack_require__(110);

	var _Center2 = _interopRequireDefault(_Center);

	var _Index13 = __webpack_require__(113);

	var _Index14 = _interopRequireDefault(_Index13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(6)
	__vue_script__ = __webpack_require__(10)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Home\\Index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(43)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-04b391f6/Index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/** 设置字体颜色、背景和边框颜色 **/\n/** 设置字体的大小 **/\n/** 字体大小 **/\n.size20 {\n  font-size: 0.2rem; }\n\n.size22 {\n  font-size: 0.22rem; }\n\n.size24 {\n  font-size: 0.24rem; }\n\n.size26 {\n  font-size: 0.26rem; }\n\n.size28 {\n  font-size: 0.28rem; }\n\n.size30 {\n  font-size: 0.3rem; }\n\n.size32 {\n  font-size: 0.32rem; }\n\n.size34 {\n  font-size: 0.34rem; }\n\n.size36 {\n  font-size: 0.36rem; }\n\n.size38 {\n  font-size: 0.38rem; }\n\n.size40 {\n  font-size: 0.4rem; }\n\n.size42 {\n  font-size: 0.42rem; }\n\n.size44 {\n  font-size: 0.44rem; }\n\n.size46 {\n  font-size: 0.46rem; }\n\n.size48 {\n  font-size: 0.48rem; }\n\n.size50 {\n  font-size: 0.5rem; }\n\n.size52 {\n  font-size: 0.52rem; }\n\n.size54 {\n  font-size: 0.54rem; }\n\n.size56 {\n  font-size: 0.56rem; }\n\n.size58 {\n  font-size: 0.58rem; }\n\n.size60 {\n  font-size: 0.6rem; }\n\n.size80 {\n  font-size: 0.8rem !important; }\n\n/** ======== 1淘宝 2京东 3kickstarter 4indiegogo 5众筹网 6点名时间 7苏宁 8追梦 9青橘 10凤凰 11创客星球 12九九 13平安 更多 **/\n/** 平台字体颜色 **/\n.color0 {\n  color: #bebebe !important; }\n\n.color1 {\n  color: #f8cb00 !important; }\n\n.color2 {\n  color: #f3565d !important; }\n\n.color3 {\n  color: #45b7af !important; }\n\n.color4 {\n  color: #f9aaae !important; }\n\n.color5 {\n  color: #58A7DA !important; }\n\n.color6 {\n  color: #C8D220 !important; }\n\n.color7 {\n  color: #5BC0FF !important; }\n\n.color8 {\n  color: #5BADFC !important; }\n\n.color9 {\n  color: #A4D653 !important; }\n\n.color10 {\n  color: #FF7E45 !important; }\n\n.color11 {\n  color: #F778B3 !important; }\n\n.color12 {\n  color: #F9B85B !important; }\n\n.color13 {\n  color: #74EA7E !important; }\n\n/** 平台字体颜色 **/\n/** 平台背景颜色 **/\n.bg0 {\n  background-color: #bebebe !important;\n  border-color: #bebebe !important; }\n\n.bg1 {\n  background-color: #f8cb00 !important;\n  border-color: #f8cb00 !important; }\n\n.bg2 {\n  background-color: #f3565d !important;\n  border-color: #f3565d !important; }\n\n.bg3 {\n  background-color: #45b7af !important;\n  border-color: #45b7af !important; }\n\n.bg4 {\n  background-color: #f9aaae !important;\n  border-color: #f9aaae !important; }\n\n.bg5 {\n  background-color: #58A7DA !important;\n  border-color: #58A7DA !important; }\n\n.bg6 {\n  background-color: #C8D220 !important;\n  border-color: #C8D220 !important; }\n\n.bg7 {\n  background-color: #5BC0FF !important;\n  border-color: #5BC0FF !important; }\n\n.bg8 {\n  background-color: #5BADFC !important;\n  border-color: #5BADFC !important; }\n\n.bg9 {\n  background-color: #A4D653 !important;\n  border-color: #A4D653 !important; }\n\n.bg10 {\n  background-color: #FF7E45 !important;\n  border-color: #FF7E45 !important; }\n\n.bg11 {\n  background-color: #F778B3 !important;\n  border-color: #F778B3 !important; }\n\n.bg12 {\n  background-color: #F9B85B !important;\n  border-color: #F9B85B !important; }\n\n.bg13 {\n  background-color: #74EA7E !important;\n  border-color: #74EA7E !important; }\n\n/** 平台背景颜色 **/\n/** 平台比较字体颜色 **/\n.fcolor0 {\n  color: #bebebe !important; }\n\n.fcolor1 {\n  color: #65c3df !important; }\n\n.fcolor2 {\n  color: #b2e1ef !important; }\n\n.fcolor3 {\n  color: #d9d9d9 !important; }\n\n/** 平台比较字体颜色 **/\n/** 平台比较排名背景颜色 **/\n.bgcolor0 {\n  background-color: #bebebe !important;\n  border-color: #bebebe !important; }\n\n.bgcolor1 {\n  background-color: #65c3df !important;\n  border-color: #65c3df !important; }\n\n.bgcolor2 {\n  background-color: #b2e1ef !important;\n  border-color: #b2e1ef !important; }\n\n.bgcolor3 {\n  background-color: #d9d9d9 !important;\n  border-color: #d9d9d9 !important; }\n\n.bgcolor4 {\n  color: #999 !important;\n  border: 1px solid #999 !important;\n  font-size: 0.2rem !important;\n  background-color: transparent !important; }\n\n/** 平台比较排名背景颜色 **/\n/** funding style **/\n.fStyle0 {\n  background-color: #bebebe !important;\n  border-color: #bebebe !important; }\n\n.fStyle1 {\n  background-color: #2380be !important;\n  border-color: #2380be !important; }\n\n.fStyle2 {\n  background-color: #f3565d !important;\n  border-color: #f3565d !important; }\n\n.fStyle3 {\n  background-color: #45b7af !important;\n  border-color: #45b7af !important; }\n\n.fStyle4 {\n  background-color: #999 !important;\n  border-color: #999 !important; }\n\n.fStyle0 {\n  background-color: #f9aaae !important;\n  border-color: #f9aaae !important; }\n\n/** funding style **/\n/** 金币字体颜色 start **/\n.moneyLight {\n  color: red !important; }\n\n/** 金币字体颜色 end **/\n/**以前的平台页**/\n.blue1 {\n  background-color: #c0e5f1 !important; }\n\n.blue2 {\n  background-color: #81cce3 !important; }\n\n.fblue1 {\n  color: #c0e5f1 !important; }\n\n.fblue2 {\n  color: #81cce3 !important; }\n\n.red1 {\n  background-color: #f9aaae !important; }\n\n.red2 {\n  background-color: #f3565d !important; }\n\n.fred1 {\n  color: #f9aaae !important; }\n\n.fred2 {\n  color: #f3565d !important; }\n\n.green1 {\n  background-color: #a2dbd7 !important; }\n\n.green2 {\n  background-color: #45b7af !important; }\n\n.fgreen1 {\n  color: #a2dbd7 !important; }\n\n.fgreen2 {\n  color: #45b7af !important; }\n\n.yellow1 {\n  background-color: #fbe57f !important; }\n\n.yellow2 {\n  background-color: #f8cb00 !important; }\n\n.fyellow1 {\n  color: #fbe57f !important; }\n\n.fyellow2 {\n  color: #f8cb00 !important; }\n\n/**以前的平台页**/\n/** input **/\ninput::-webkit-search-cancel-button {\n  display: none; }\n\n/** clear float **/\n.clearfix:after {\n  content: \"\";\n  display: block;\n  height: 0;\n  visibility: hidden;\n  clear: both; }\n\n/** visiable **/\n.show {\n  display: block !important; }\n\n.hide {\n  display: none !important; }\n\n/** float **/\n.fl {\n  float: left; }\n\n.fr {\n  float: right; }\n\nhtml, body {\n  font-size: 100px;\n  font-family: 'microsoft yahei';\n  height: 100%;\n  background-color: #e5e5e5; }\n\n@media (max-width: 320px) {\n  html, body {\n    font-size: 42.6667px; } }\n\n@media (max-width: 375px) {\n  html, body {\n    font-size: 50px; } }\n\n@media (max-width: 414px) {\n  html, body {\n    font-size: 55.2px; } }\n\n#hideForm {\n  display: none; }\n\n/** gkvBox **/\n#gkvBox {\n  font-size: 0.3rem;\n  width: 100%;\n  background-color: #e5e5e5;\n  position: relative;\n  max-width: 7.5rem;\n  margin: auto; }\n\n/** person center main block start **/\n.pnc__main {\n  display: block;\n  width: 1rem;\n  text-align: center;\n  height: 0.96rem;\n  line-height: 1rem; }\n\n.pnc__mainLink {\n  color: #fff; }\n\n.pnc__main .icon {\n  font-size: 0.4rem; }\n\n/** person center main block end **/\n/** gkvMaskBox block start **/\n#gkvMaskBox {\n  width: 100%;\n  height: 5.94rem;\n  position: fixed;\n  bottom: 0rem;\n  left: 0rem;\n  right: 0rem;\n  background-color: #fff;\n  z-index: 999;\n  border-top: 1px solid #d7d7d7;\n  max-width: 7.68rem;\n  margin: auto; }\n\n.container {\n  padding: 0rem 0.3rem;\n  box-sizing: border-box; }\n\n.maskWrap {\n  width: 100%;\n  height: 100%; }\n\n.mask__opt {\n  background-color: #e5e5e5;\n  width: 100%;\n  height: 0.8rem;\n  padding: 0.11rem 0.3rem;\n  box-sizing: border-box; }\n\n.mask__btn {\n  display: block;\n  width: 1rem;\n  height: 0.56rem;\n  text-align: center;\n  line-height: 0.56rem;\n  color: #555;\n  font-size: 0.25rem; }\n\n.mask__btn .icon {\n  font-size: 0.3rem; }\n\n.mask__cancel {\n  border-radius: 999px;\n  border: 1px solid #c9c9c9;\n  box-sizing: border-box; }\n\n.mask__panel {\n  padding: 0.2rem;\n  box-sizing: border-box;\n  width: 100%;\n  height: 5.14rem;\n  background-color: #fff; }\n\n.mask__links {\n  margin: 0rem 0.1rem 0.3rem;\n  border: 1px solid #d8d8d8;\n  border-radius: 999px;\n  height: 0.6rem;\n  padding: 0rem 0.13rem;\n  box-sizing: border-box; }\n\n.mask__linkTxt {\n  color: #555;\n  display: block;\n  width: 100%;\n  line-height: 0.56rem;\n  height: 0.56rem;\n  font-size: 0.25rem; }\n\n.mask__website .mask__linkTxt,\n.mask__more .mask__linkTxt {\n  color: #fff; }\n\n.mask__firstRow {\n  margin: 0rem 0.05rem 0.3rem !important; }\n\n.mask__firstRow:first-child {\n  margin: 0rem 0.1rem 0.3rem !important; }\n\n.mask__K {\n  background-color: #7ac13f;\n  border: 1px solid #7ac13f; }\n\n.mask__Go {\n  background-color: #ec0d77;\n  border: 1px solid #ec0d77; }\n\n.mask__Tao {\n  background-color: #d7233c;\n  border: 1px solid #d7233c; }\n\n.mask__JD {\n  background-color: #fd6804;\n  border: 1px solid #fd6804; }\n\n.mask__all {\n  background-color: #2280be;\n  border: 1px solid #2280be; }\n\n/** gkvMaskBox block end **/\n/** gkvMaskAllBox block start **/\n.gkvMaskAllBox {\n  position: fixed;\n  max-width: 7.5rem;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #fff;\n  margin: auto;\n  z-index: 99999; }\n\n.mask__allPfTitle {\n  height: 0.96rem;\n  line-height: 0.96rem;\n  text-align: center;\n  border-bottom: 1px solid #ddd; }\n\n.mask__allPfBox {\n  padding-top: 0.4rem;\n  height: 4.65rem; }\n\n.mask__allCateTitle {\n  margin: 0 0.3rem;\n  box-sizing: border-box;\n  border-bottom: 1px solid #ddd;\n  color: #666; }\n\n.mask__allCateBox {\n  padding-top: 0.4rem; }\n\n.mask__allReturn {\n  position: absolute;\n  width: 0.96rem;\n  left: 0rem;\n  height: 0.96rem;\n  line-height: 0.96rem;\n  text-align: center;\n  color: #999; }\n\n/** gkvMaskAllBox block end **/\n/** gkvSearch block start **/\n#gkvSearch {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  z-index: 9999;\n  top: 0rem;\n  right: 0rem;\n  left: 0rem;\n  max-width: 7.68rem;\n  margin: auto; }\n\n#gkvSearch.searchPage {\n  position: static; }\n\n.searchBox {\n  width: 100%;\n  padding: 0.18rem 0.3rem;\n  background-color: #fff;\n  box-sizing: border-box;\n  height: 0.96rem;\n  line-height: 0.56rem; }\n\n.search__InptBox {\n  position: relative; }\n\n.search__InptBox .searchIcon {\n  position: absolute;\n  font-size: 0.40rem;\n  top: 50%;\n  left: 0.2rem;\n  line-height: 0.40rem;\n  margin-top: -0.2rem;\n  color: #999; }\n\n.search__Inpt {\n  width: 5.4rem;\n  height: 0.58rem;\n  background-color: #e5e5e5;\n  border: 1px solid #e5e5e5;\n  border-radius: 999px;\n  padding-left: 0.7rem;\n  padding-right: 0.6rem;\n  box-sizing: border-box;\n  outline: none; }\n\n.search__clear {\n  position: absolute;\n  right: 0.1rem;\n  top: -0.02rem;\n  display: block;\n  font-size: 1rem;\n  width: 0.6rem;\n  height: 0.6rem;\n  line-height: 0rem;\n  text-align: center;\n  color: #999; }\n\n.search__clear .icon {\n  font-size: 0.3rem; }\n\n.search__return {\n  width: 0.7rem;\n  text-align: left;\n  color: #aaa;\n  height: 0.6rem; }\n\n.search__return .icon {\n  font-size: 0.4rem;\n  line-height: 0.4rem; }\n\n.search__search {\n  width: 0.8rem;\n  text-align: right;\n  color: #555; }\n\n.search__title {\n  color: #555;\n  height: 0.58rem;\n  line-height: 0.58rem;\n  text-indent: 0.3rem;\n  background-color: #fff; }\n\n.search__title.search__searchTitle {\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n  text-indent: 0.3rem;\n  color: #999;\n  background-color: #fff; }\n\n.search__results {\n  height: 100%;\n  background-color: #fff; }\n\n/** gkvSearch block end **/\n/** qrCodeBox start **/\n.pnc__qrCodeBox {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n  max-width: 7.5rem;\n  margin: auto; }\n\n.pnc__qrTitle {\n  width: 100%;\n  color: #fff;\n  text-align: center;\n  margin-top: 2.5rem;\n  font-size: 0.4rem; }\n\n.pnc__qrCode {\n  width: 4rem;\n  height: 4rem;\n  background-image: url(\"https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/personPage/gkvplus_qr.jpg\");\n  background-size: cover;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -2rem 0 0 -2rem; }\n\n.pnc__closeBox {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 1.2rem;\n  height: 1.2rem;\n  box-sizing: border-box;\n  padding: 0.4rem 0.5rem 0 0;\n  text-align: right; }\n\n.pnc__closeBox .icon {\n  color: #fff; }\n\n/** qrCodeBox start **/\n/** gkvFooter block start **/\n#gkvFooter {\n  padding: 0.3rem 0.5rem;\n  color: #fff;\n  height: 1.15rem;\n  background-color: #959595;\n  box-sizing: border-box; }\n\n.gkv__CopyBox {\n  height: 0.5rem;\n  line-height: 0.5rem; }\n\n.gkv__CopyDown {\n  margin-top: 0.06rem;\n  height: 0.24rem;\n  line-height: 0.24rem; }\n\n.gkv__aboutMeLink {\n  display: block;\n  width: 1.6rem;\n  height: 0.5rem;\n  color: #fff;\n  border-radius: 999px;\n  line-height: 0.5rem;\n  text-align: right;\n  padding-right: 0.2rem; }\n\n.gkv__feekback {\n  width: 0.22rem;\n  height: 0.22rem;\n  vertical-align: middle;\n  padding-right: 0.1rem; }\n\n/** gkvFooter block end **/\n/** loading block start **/\n.pacman > div:first-of-type, .pacman > div:nth-child(2) {\n  width: 0;\n  height: 0;\n  border-right: 0.5rem solid transparent;\n  border-top: 0.5rem solid #65c3df;\n  border-left: 0.5rem solid #65c3df;\n  border-bottom: 0.5rem solid #65c3df;\n  border-radius: 0.5rem; }\n\n@-webkit-keyframes rotate_pacman_half_up {\n  0%, 100% {\n    -webkit-transform: rotate(270deg);\n    transform: rotate(270deg); }\n  50% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes rotate_pacman_half_up {\n  0%, 100% {\n    -webkit-transform: rotate(270deg);\n    transform: rotate(270deg); }\n  50% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@-webkit-keyframes rotate_pacman_half_down {\n  0%, 100% {\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg); }\n  50% {\n    -webkit-transform: rotate(0);\n    transform: rotate(0); } }\n\n@keyframes rotate_pacman_half_down {\n  0%, 100% {\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg); }\n  50% {\n    -webkit-transform: rotate(0);\n    transform: rotate(0); } }\n\n@-webkit-keyframes pacman-balls {\n  75% {\n    opacity: .7; }\n  100% {\n    -webkit-transform: translate(-1rem, -0.0625rem);\n    transform: translate(-1rem, -0.0625rem); } }\n\n@keyframes pacman-balls {\n  75% {\n    opacity: .7; }\n  100% {\n    -webkit-transform: translate(-1rem, -0.0625rem);\n    transform: translate(-1rem, -0.0625rem); } }\n\n.pacman {\n  position: relative; }\n\n.pacman > div:nth-child(3) {\n  -webkit-animation: pacman-balls 1s 0s infinite linear;\n  animation: pacman-balls 1s 0s infinite linear; }\n\n.pacman > div:nth-child(4) {\n  -webkit-animation: pacman-balls 1s .33s infinite linear;\n  animation: pacman-balls 1s .33s infinite linear; }\n\n.pacman > div:nth-child(5) {\n  -webkit-animation: pacman-balls 1s .66s infinite linear;\n  animation: pacman-balls 1s .66s infinite linear; }\n\n.pacman > div:first-of-type {\n  -webkit-animation: rotate_pacman_half_up .5s 0s infinite;\n  animation: rotate_pacman_half_up .5s 0s infinite; }\n\n.pacman > div:nth-child(2) {\n  -webkit-animation: rotate_pacman_half_down .5s 0s infinite;\n  animation: rotate_pacman_half_down .5s 0s infinite;\n  margin-top: -1rem; }\n\n.pacman > div:nth-child(3), .pacman > div:nth-child(4), .pacman > div:nth-child(5), .pacman > div:nth-child(6) {\n  background-color: #65c3df;\n  border-radius: 100%;\n  margin: 0.2rem;\n  width: 0.2rem;\n  height: 0.2rem;\n  position: absolute;\n  -webkit-transform: translate(0, -0.0625rem);\n  transform: translate(0, -0.0625rem);\n  top: 0.25rem;\n  left: 1.4rem; }\n\n#loading {\n  position: absolute;\n  width: 1rem;\n  height: 1rem;\n  top: 2rem;\n  left: 0rem;\n  right: 0rem;\n  margin: auto; }\n\n/** loading block end **/\n/** vue-animation start **/\n/** 菜单动画 start **/\n.gkvMenu-enter {\n  -webkit-animation: menuSlideUp 0.4s ease-in-out;\n          animation: menuSlideUp 0.4s ease-in-out; }\n\n.gkvMenu-leave {\n  -webkit-animation: menuSlideDown 0.4s ease-in-out;\n          animation: menuSlideDown 0.4s ease-in-out; }\n\n@-webkit-keyframes menuSlideUp {\n  from {\n    -webkit-transform: translateY(100%);\n    transform: translateY(100%); }\n  to {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); } }\n\n@keyframes menuSlideUp {\n  from {\n    -webkit-transform: translateY(100%);\n    transform: translateY(100%); }\n  to {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); } }\n\n@-webkit-keyframes menuSlideDown {\n  from {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  to {\n    -webkit-transform: translateY(100%);\n    transform: translateY(100%); } }\n\n@keyframes menuSlideDown {\n  from {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  to {\n    -webkit-transform: translateY(100%);\n    transform: translateY(100%); } }\n\n/** 菜单动画 end **/\n.next-enter {\n  position: fixed !important;\n  animation: nextIn .5s ease-in-out;\n  -webkit-animation: nextIn .5s ease-in-out; }\n\n.next-leave {\n  position: fixed !important;\n  animation: nextOut .5s ease-in-out;\n  -webkit-animation: nextOut .5s ease-in-out; }\n\n@keyframes nextIn {\n  from {\n    -webkit-transform: translateX(100%);\n    transform: translateX(100%); }\n  to {\n    -webkit-transform: translateX(0%);\n    transform: translateX(0%); } }\n\n@keyframes nextOut {\n  from {\n    -webkit-transform: translateX(0%);\n    transform: translateX(0%); }\n  to {\n    -webkit-transform: translateX(-100%);\n    transform: translateX(-100%); } }\n\n@-webkit-keyframes nextIn {\n  from {\n    -webkit-transform: translateX(100%);\n    transform: translateX(100%); }\n  to {\n    -webkit-transform: translateX(0%);\n    transform: translateX(0%); } }\n\n@-webkit-keyframes nextOut {\n  from {\n    -webkit-transform: translateX(0%);\n    transform: translateX(0%); }\n  to {\n    -webkit-transform: translateX(-100%);\n    transform: translateX(-100%); } }\n\n.prev-enter {\n  position: fixed !important;\n  animation: prevIn .5s ease-in-out;\n  -webkit-animation: prevIn .5s ease-in-out; }\n\n.prev-leave {\n  position: fixed !important;\n  -webkit-animation: prevOut .5s ease-in-out; }\n\n@keyframes prevIn {\n  from {\n    -webkit-transform: translateX(-100%);\n    transform: translateX(-100%); }\n  to {\n    -webkit-transform: translateX(0%);\n    transform: translateX(0%); } }\n\n@keyframes prevOut {\n  from {\n    -webkit-transform: translateX(0%);\n    transform: translateX(0%); }\n  to {\n    -webkit-transform: translateX(100%);\n    transform: translateX(100%); } }\n\n@-webkit-keyframes prevIn {\n  from {\n    -webkit-transform: translateX(-100%);\n    transform: translateX(-100%); }\n  to {\n    -webkit-transform: translateX(0%);\n    transform: translateX(0%); } }\n\n@-webkit-keyframes prevOut {\n  from {\n    -webkit-transform: translateX(0%);\n    transform: translateX(0%); }\n  to {\n    -webkit-transform: translateX(100%);\n    transform: translateX(100%); } }\n\n/** vue-animation end **/\n.none_border {\n  border: none !important; }\n\n#gkvHeader-home {\n  width: 100%;\n  height: 3.34rem;\n  background-image: url(\"https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/homePage/home_bg.png\");\n  background-size: cover; }\n\n.nav-home {\n  width: 100%;\n  height: 0.96rem;\n  position: relative; }\n\n.nav__topTitle-home {\n  position: absolute;\n  width: 70%;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 0.96rem;\n  line-height: 0.96rem;\n  margin: auto;\n  text-align: center;\n  font-size: 0.36rem;\n  color: #fff; }\n\n.pnc__main {\n  line-height: 1rem; }\n\n/*.pnc__main .icon {\r\n\tfont-size: 0.36rem;\r\n}*/\n.nav__menuBox-home {\n  line-height: 0.96rem;\n  padding-left: 0.3rem;\n  box-sizing: border-box; }\n\n.nav__menuIcon-home {\n  margin-right: 0.24rem; }\n\n.nav__menuIcon-home .icon {\n  font-size: 0.44rem;\n  line-height: 0.92rem;\n  color: #fff; }\n\n/*.nav__searchBox {\r\n    width: 2.5rem;\r\n    height: 100%;\r\n    margin-right: 0.27rem;\r\n    padding: 0.16rem 0rem;\r\n    box-sizing: border-box;\r\n    position: relative;\r\n}\r\n.nav__searchBox .icon {\r\n    position: absolute;\r\n    font-size: 0.35rem;\r\n    top: 50%;\r\n    right: 0rem;\r\n    line-height: 0.50rem;\r\n    margin-top: -0.26rem;\r\n    color: #e5e5e5;\r\n}*/\n.searchBox-home {\n  box-sizing: border-box;\n  height: 0.96rem;\n  line-height: 0.56rem;\n  background-color: transparent;\n  padding: 0.16rem 0 0;\n  width: 5rem;\n  margin: auto;\n  position: relative; }\n\n.search__InptBox-home {\n  position: relative; }\n\n.searchBox-home .search__Inpt-home {\n  height: 0.58rem;\n  border-radius: 999px;\n  padding-left: 0.7rem;\n  box-sizing: border-box;\n  outline: none;\n  width: 5rem;\n  background-color: rgba(0, 0, 0, 0.15);\n  border: 1px solid transparent;\n  padding-right: 0.2rem;\n  color: #ddd; }\n\n.search__InptBox-home .searchIcon-home {\n  position: absolute;\n  font-size: 0.40rem;\n  top: 50%;\n  left: 0.2rem;\n  line-height: 0.40rem;\n  margin-top: -0.2rem;\n  color: #ddd; }\n\n.search__clear-home .icon {\n  color: #ddd; }\n\n.search__Inpt-home::-webkit-input-placeholder {\n  color: #ddd; }\n\n.search__btn-home {\n  position: absolute;\n  right: 0;\n  z-index: -1;\n  /*opacity: 0;*/\n  color: #fff; }\n\n.nav__titleBox {\n  clear: both;\n  text-align: center;\n  color: #fff;\n  margin-top: 0.19rem; }\n\n.nav__title {\n  height: 0.56rem; }\n\n.titleLogo {\n  width: 2rem;\n  height: 0.53rem; }\n\n/*.nav__title::after {\r\n\tcontent: '';\r\n\tdisplay: block;\r\n\twidth: 1rem;\r\n\theight: 0.05rem;\r\n\tbackground-color: #fff;\r\n\tmargin: 0.21rem auto;\r\n\tborder-radius: 999px;\r\n}*/\n.nav__desc {\n  padding-top: 0.2rem; }\n\n/*gkvContent block start*/\n.home__compareWrap {\n  background-color: #fff;\n  padding-top: 0rem;\n  padding-bottom: 0.4rem;\n  margin-bottom: 0.35rem; }\n\n.home__compareWrap:last-child {\n  margin-bottom: 0rem; }\n\n.home__pfCompareBox {\n  padding: 0.3rem 0.3rem 0; }\n\n.pfCompareList {\n  text-align: center;\n  width: 25%; }\n\n.pfCompareList:last-child {\n  margin-right: 0rem; }\n\n.logoImg {\n  width: 0.97rem;\n  height: 0.97rem; }\n\n.home__processWrap {\n  width: 100%;\n  height: 2.5rem;\n  position: relative;\n  text-indent: 0.3rem;\n  margin-bottom: 0.35rem; }\n\n.home__processLink {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-image: url(\"https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/homePage/process_bg.png\");\n  background-size: cover;\n  padding-top: 0.19rem;\n  box-sizing: border-box; }\n\n.home__processTitle {\n  color: #333;\n  font-weight: bold; }\n\n.home__pfName {\n  font-size: 0.24rem;\n  color: #999; }\n\n.home__pfMoney {\n  font-size: 0.28rem;\n  color: #333; }\n\n.home__pfCompareLinks {\n  color: #333;\n  display: block;\n  font-size: 0.3rem;\n  height: 0.3rem;\n  line-height: 0.3rem;\n  padding: 0.18rem 0rem;\n  width: 5rem;\n  border: 1px solid #65c3df;\n  border-radius: 999px;\n  text-align: center;\n  margin: 0.41rem auto 0rem; }\n\n.home__compareTitle {\n  display: block;\n  color: #333;\n  width: 100%;\n  padding-top: 0.3rem;\n  font-size: 0.28rem;\n  height: 0.28rem;\n  line-height: 0.26rem;\n  padding-bottom: 0.3rem;\n  text-indent: 0.3rem;\n  font-weight: bold;\n  border-bottom: 1px solid #ddd; }\n\n.home__compareTitle .icon {\n  font-size: 0.3rem;\n  margin-right: 0.3rem;\n  color: #e5e5e5; }\n\n.home_compareSubTitle {\n  font-size: 0.24rem;\n  color: #999;\n  font-weight: normal;\n  margin-left: 0.2rem; }\n\n.home__idyCompareList {\n  text-align: center;\n  width: 2.5rem;\n  height: 1.82rem;\n  box-sizing: border-box;\n  margin-top: 0.3rem;\n  border-right: 1px solid #ddd; }\n\n.home__idyCompareList:last-child {\n  border-right: 0; }\n\n.home__idyName {\n  color: #333;\n  font-size: 0.36rem;\n  height: 0.36rem;\n  line-height: 0.34rem;\n  margin-top: 0.2rem; }\n\n.home__idyMoney {\n  color: #999;\n  font-size: 0.28rem;\n  height: 0.28rem;\n  line-height: 0.26rem;\n  margin-top: 0.26rem; }\n\n.home__idyMoney .unit {\n  font-size: 0.24rem; }\n\n.home__fundingProPanel {\n  border-bottom: 1px solid #ddd;\n  position: relative; }\n\n.home__fundingLinks {\n  color: #333; }\n\n.home__fundingShowMore {\n  position: absolute;\n  bottom: -0.34rem;\n  left: 0;\n  right: 0;\n  background-color: #fff;\n  width: 5.5rem;\n  margin: auto; }\n\n.home__showMoreLink {\n  color: #333;\n  display: block;\n  font-size: 0.3rem;\n  height: 0.3rem;\n  line-height: 0.3rem;\n  padding: 0.18rem 0rem;\n  width: 5rem;\n  border: 1px solid #ddd;\n  border-radius: 999px;\n  text-align: center;\n  margin: 0rem auto; }\n\n.home__fundingImg {\n  width: 100%;\n  height: 3.6rem;\n  background-image: url(\"https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/img.jpg\");\n  background-size: 100%;\n  background-position: center top;\n  position: relative; }\n\n.home__fundingStatus {\n  position: absolute;\n  left: 0.3rem;\n  top: 0.3rem;\n  width: 1.2rem;\n  height: 0.4rem;\n  border-radius: 999px;\n  background-color: #f3565d;\n  text-align: center;\n  font-size: 0.24rem;\n  line-height: 0.4rem;\n  color: #fff; }\n\n.home__fundingName {\n  border-top: 1px solid #ddd;\n  padding-top: 0.19rem;\n  padding-bottom: 0.19rem; }\n\n.home__logo {\n  display: inline-block;\n  line-height: 0.3rem;\n  height: 0.3rem;\n  border-radius: 999px;\n  padding: 0.07rem 0.15rem;\n  vertical-align: top; }\n\n.home__fundingDescBox {\n  padding: 0.2rem 0.3rem;\n  height: 0.36rem;\n  line-height: 0.36rem; }\n\n.home__fundingDescBox.home__fcMoneyBox {\n  padding: 0rem 0.3rem;\n  height: 1.15rem;\n  line-height: 1.15rem;\n  position: relative; }\n\n.home__fundingCate {\n  line-height: 0.34rem;\n  font-size: 0.28rem;\n  color: #999;\n  margin-right: 0.3rem; }\n\n.home__fundingDescBox.home__fcMoneyBox .home__fundingCate {\n  line-height: 1.15rem;\n  height: 1.15rem; }\n\n.home__fundingMoney {\n  font-size: 0.36rem;\n  color: #f3565d; }\n\n.home__fcWrap {\n  line-height: 0.4rem;\n  text-align: center;\n  margin: 0.15rem 0rem 0rem 0.3rem;\n  color: #999; }\n\n.home__fcTop {\n  border-bottom: 1px solid #ddd;\n  font-size: 0.24rem; }\n\n.home__fcTop .moneyLight {\n  font-size: 0.36rem; }\n\n.home__fcDown {\n  font-size: 0.22rem; }\n\n.home__fcDown .moneyLight {\n  font-size: 0.3rem; }\n\n.home__unit {\n  font-size: 0.24rem;\n  margin-left: 0.15rem;\n  color: #999; }\n\n/*gkvContent block end*/\n.searchBoxOn {\n  -webkit-animation-name: searchBoxOn;\n          animation-name: searchBoxOn;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n.searchOn {\n  -webkit-animation-name: searchOn;\n          animation-name: searchOn;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n.searchBtnOn {\n  z-index: 99;\n  -webkit-animation-name: searchBtnOn;\n          animation-name: searchBtnOn;\n  -webkit-animation-duration: 0.6s;\n          animation-duration: 0.6s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n@-webkit-keyframes searchBoxOn {\n  from {\n    width: 5rem; }\n  to {\n    width: 6.8rem; } }\n\n@keyframes searchBoxOn {\n  from {\n    width: 5rem; }\n  to {\n    width: 6.8rem; } }\n\n@-webkit-keyframes searchOn {\n  from {\n    width: 5rem; }\n  to {\n    width: 6rem; } }\n\n@keyframes searchOn {\n  from {\n    width: 5rem; }\n  to {\n    width: 6rem; } }\n\n@-webkit-keyframes searchBtnOn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes searchBtnOn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.searchBoxOut {\n  -webkit-animation-name: searchBoxOut;\n          animation-name: searchBoxOut;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease; }\n\n.searchOut {\n  -webkit-animation-name: searchOut;\n          animation-name: searchOut;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease; }\n\n.searchBtnOut {\n  -webkit-animation-name: searchBtnOut;\n          animation-name: searchBtnOut;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease; }\n\n@-webkit-keyframes searchBoxOut {\n  from {\n    width: 6.8rem; }\n  to {\n    width: 5rem; } }\n\n@keyframes searchBoxOut {\n  from {\n    width: 6.8rem; }\n  to {\n    width: 5rem; } }\n\n@-webkit-keyframes searchOut {\n  from {\n    width: 6rem; }\n  to {\n    width: 5rem; } }\n\n@keyframes searchOut {\n  from {\n    width: 6rem; }\n  to {\n    width: 5rem; } }\n\n@-webkit-keyframes searchBtnOut {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n@keyframes searchBtnOut {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n/** android css start **/\n._searchBoxOn {\n  width: 6.8rem !important; }\n\n._searchOn {\n  width: 6rem !important; }\n\n._searchBtnOn {\n  display: block !important;\n  z-index: 99 !important; }\n\n/** android css end **/\n", ""]);

	// exports


/***/ },
/* 8 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _GkvHeader = __webpack_require__(11);

	var _GkvHeader2 = _interopRequireDefault(_GkvHeader);

	var _GkvContent = __webpack_require__(22);

	var _GkvContent2 = _interopRequireDefault(_GkvContent);

	var _Menu = __webpack_require__(37);

	var _Menu2 = _interopRequireDefault(_Menu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		name: 'Home',
		route: {
			activate: function activate(transition) {
				console.log('hook-example activated!');
				console.log(transition);
				transition.next();
			}
		},
		data: function data() {
			return {
				menuShow: false
			};
		},

		vuex: {
			getters: {
				stack: function stack(_ref) {
					var router = _ref.router;
					return router.stack;
				}
			}
		},
		components: {
			'gkv-header': _GkvHeader2.default,
			'gkv-content': _GkvContent2.default,
			'gkv-menu': _Menu2.default
		},
		events: {
			showMenu: function showMenu() {
				this.menuShow == false ? this.menuShow = true : this.menuShow = false;
			}
		}
	};
	// </script>
	//
	// <template>
	// 	<div id="gkvBox" :transition="stack.pageDir">
	// 		<gkv-header></gkv-header>
	// 		<gkv-content></gkv-content>
	// 		<gkv-menu></gkv-menu>
	// 	</div>
	// </template>
	//
	// <style lang="sass" type="text/sass">
	// 	@import "../../sass/common";
	// 	@import "../../sass/homePage";
	// </style>
	// <script type="text/javascript">

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(12)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Home\\GkvHeader.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(21)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-77b8d372/GkvHeader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Header = __webpack_require__(13);

	var _Header2 = _interopRequireDefault(_Header);

	var _Search = __webpack_require__(18);

	var _Search2 = _interopRequireDefault(_Search);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <script type="text/javascript">
	exports.default = {
		components: {
			'g-header': _Header2.default,
			'g-search': _Search2.default
		},
		data: function data() {
			return {};
		}
	};
	// </script>
	//
	// <template>
	// 	<div id="gkvHeader-home">
	// 		<div class="nav-home clearfix">
	// 			<g-header></g-header>
	// 			<div class="nav__titleBox">
	// 				<div class="nav__title">
	// 					<img src="https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/homePage/indexLogo.svg" class="titleLogo">
	// 				</div>
	// 				<div class="nav__desc size28">
	// 					已收录 <span class="size30">18,854</span> 项目
	// 				</div>
	// 			</div>
	// 			<g-search></g-search>
	// 		</div>
	// 	</div>
	//
	// </template>

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(14)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Header.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(17)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-1fd6b3c6/Header.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _actions = __webpack_require__(15);

	exports.default = {
		vuex: {
			actions: {
				isShowMenu: _actions.isShowMenu
			}
		}
	};
	// </script>
	//
	// <template>
	// 	<div class="nav__menuBox-home fl clearfix" @click="isShowMenu">
	// 		<div class="nav__menuIcon-home fl">
	// 			<i class="icon iconfont"></i>
	// 		</div>
	// 	</div>
	// 	<a v-link="{path:'center'}" class="pnc__main pnc__mainLink fr">
	// 		<i class="icon iconfont"></i>
	// 	</a>
	// </template>
	//
	//
	// <script type="text/javascript">

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.isReply = exports.isFocus = exports.protTabs = exports.listTabs = exports.artTabs = exports.projectTabs = exports.clickPlatform = exports.clickTabs = exports.closeClick = exports.isClick = exports.goPath = exports.searchOut = exports.searchIn = exports.isShowMenuMore = exports.isShowMenu = undefined;

	var _mutationTypes = __webpack_require__(16);

	/** common **/
	var isShowMenu = exports.isShowMenu = makeAction(_mutationTypes.IS_SHOW_MENU); // toggle菜单
	var isShowMenuMore = exports.isShowMenuMore = makeAction(_mutationTypes.IS_SHOW_MENU_MORE); // more菜单

	/** home **/
	var searchIn = exports.searchIn = makeAction(_mutationTypes.SEARCH_IN); // 搜索框focus动画
	var searchOut = exports.searchOut = makeAction(_mutationTypes.SEARCH_OUT); // 搜索框blur动画
	var goPath = exports.goPath = makeAction(_mutationTypes.JUDGE_PATH); // 判断页面是前进还是后退
	var isClick = exports.isClick = makeAction(_mutationTypes.IS_CLICK); // 启动页面点击的flag
	var closeClick = exports.closeClick = makeAction(_mutationTypes.CLOSE_CLICK); // 关闭页面点击的flag

	/** platform **/
	var clickTabs = exports.clickTabs = makeAction(_mutationTypes.CLICK_TABS); // p-tabs组件的 点击标签
	var clickPlatform = exports.clickPlatform = makeAction(_mutationTypes.CLICK_PLATFORM); // p-tabs组件的点击平台
	var projectTabs = exports.projectTabs = makeAction(_mutationTypes.PROJECT_TABS); // p-project模块的tabs

	/** article **/
	var artTabs = exports.artTabs = makeAction(_mutationTypes.ARTICLE_TABS);

	/** list **/
	var listTabs = exports.listTabs = makeAction(_mutationTypes.LIST_TABS);

	/** product **/
	var protTabs = exports.protTabs = makeAction(_mutationTypes.PRODUCT_TABS);
	var isFocus = exports.isFocus = makeAction(_mutationTypes.IS_FOCUS);
	var isReply = exports.isReply = makeAction(_mutationTypes.IS_REPLY);

	function makeAction(type) {
		return function (_ref) {
			for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				args[_key - 1] = arguments[_key];
			}

			var dispatch = _ref.dispatch;
			dispatch.apply(undefined, [type].concat(args));
		};
	}

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var IS_SHOW_MENU = exports.IS_SHOW_MENU = 'IS_SHOW_MENU';
	var IS_SHOW_MENU_MORE = exports.IS_SHOW_MENU_MORE = 'IS_SHOW_MENU_MORE';

	var SEARCH_IN = exports.SEARCH_IN = 'SEARCH_IN';
	var SEARCH_OUT = exports.SEARCH_OUT = 'SEARCH_OUT';

	var JUDGE_PATH = exports.JUDGE_PATH = 'JUDGE_PATH';
	var IS_CLICK = exports.IS_CLICK = 'IS_CLICK';
	var CLOSE_CLICK = exports.CLOSE_CLICK = 'CLOSE_CLICK';

	var CLICK_TABS = exports.CLICK_TABS = 'CLICK_TABS';
	var CLICK_PLATFORM = exports.CLICK_PLATFORM = 'CLICK_PLATFORM';
	var PROJECT_TABS = exports.PROJECT_TABS = 'PROJECT_TABS';

	var ARTICLE_TABS = exports.ARTICLE_TABS = 'ARTICLE_TABS';

	var LIST_TABS = exports.LIST_TABS = 'LIST_TABS';

	var PRODUCT_TABS = exports.PRODUCT_TABS = 'PRODUCT_TABS';
	var IS_FOCUS = exports.IS_FOCUS = 'IS_FOCUS';
	var IS_REPLY = exports.IS_REPLY = 'IS_REPLY';

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"nav__menuBox-home fl clearfix\" @click=\"isShowMenu\">\n\t<div class=\"nav__menuIcon-home fl\">\n\t\t<i class=\"icon iconfont\"></i>\n\t</div>\n</div>\n<a v-link=\"{path:'center'}\" class=\"pnc__main pnc__mainLink fr\">\n\t<i class=\"icon iconfont\"></i>\n</a>\n";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(19)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Home\\Search.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(20)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-62df8305/Search.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _actions = __webpack_require__(15);

	exports.default = {
		vuex: {
			getters: {
				search: function search(_ref) {
					var index = _ref.index;
					return index.search;
				}
			},
			actions: {
				searchIn: _actions.searchIn,
				searchOut: _actions.searchOut,
				isClick: _actions.isClick
			}
		},
		methods: {
			goSearch: function goSearch() {
				this.isClick();
				this.$router.go({ path: '/search' });
			}
		}
	};
	// </script>
	//
	// <template>
	// 	<div class="searchBox-home clearfix" :class="search.searchBox">
	// 		<div class="search__InptBox-home fl">
	// 			<i class="icon iconfont searchIcon-home"></i>
	// 			<input class="search__Inpt-home" 
	// 				   type="search" 
	// 				   name="keyword" 
	// 				   value="" 
	// 				   placeholder="寻找最热硬件" 
	// 				   @focus="searchIn" 
	// 				   @blur="searchOut" 
	// 				   @keyup.enter="goSearch"
	// 				   :class="search.search">
	// 		</div>
	// 		<a v-link="{path: '/search'}" class="search__btn-home fr"
	// 		   :class="search.searchBtn"
	// 		   @click="isClick">搜索</a>
	// 	</div>
	// </template>
	// <script type="text/javascript">
	// import { isClick } from '../../vuex/actions';

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"searchBox-home clearfix\" :class=\"search.searchBox\">\n\t<div class=\"search__InptBox-home fl\">\n\t\t<i class=\"icon iconfont searchIcon-home\"></i>\n\t\t<input class=\"search__Inpt-home\" \n\t\t\t   type=\"search\" \n\t\t\t   name=\"keyword\" \n\t\t\t   value=\"\" \n\t\t\t   placeholder=\"寻找最热硬件\" \n\t\t\t   @focus=\"searchIn\" \n\t\t\t   @blur=\"searchOut\" \n\t\t\t   @keyup.enter=\"goSearch\"\n\t\t\t   :class=\"search.search\">\n\t</div>\n\t<a v-link=\"{path: '/search'}\" class=\"search__btn-home fr\"\n\t   :class=\"search.searchBtn\"\n\t   @click=\"isClick\">搜索</a>\n</div>\n";

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div id=\"gkvHeader-home\">\n\t<div class=\"nav-home clearfix\">\n\t\t<g-header></g-header>\n\t\t<div class=\"nav__titleBox\">\n\t\t\t<div class=\"nav__title\">\n\t\t\t\t<img src=\"https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/homePage/indexLogo.svg\" class=\"titleLogo\">\n\t\t\t</div>\n\t\t\t<div class=\"nav__desc size28\">\n\t\t\t\t已收录 <span class=\"size30\">18,854</span> 项目\n\t\t\t</div>\n\t\t</div>\n\t\t<g-search></g-search>\n\t</div>\n</div>\n\n";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(23)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Home\\GkvContent.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(36)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-243b4f64/GkvContent.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _CPlatform = __webpack_require__(24);

	var _CPlatform2 = _interopRequireDefault(_CPlatform);

	var _CCategory = __webpack_require__(27);

	var _CCategory2 = _interopRequireDefault(_CCategory);

	var _CFunding = __webpack_require__(30);

	var _CFunding2 = _interopRequireDefault(_CFunding);

	var _CArticle = __webpack_require__(33);

	var _CArticle2 = _interopRequireDefault(_CArticle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <script type="text/javascript">
	exports.default = {
		vuex: {
			getters: {
				content: function content(_ref) {
					var index = _ref.index;
					return index.content;
				}
			}
		},
		components: {
			'c-platform': _CPlatform2.default,
			'c-category': _CCategory2.default,
			'c-funding': _CFunding2.default,
			'c-article': _CArticle2.default
		}
	};
	// </script>
	//
	// <template>
	// 	<div id="gkvContent">
	// 		<!-- platform block start -->
	// 		<c-platform :platform="content.platform"></c-platform>
	// 		<!-- platform block end -->
	// 		<!-- process block start -->
	// 		<c-article :article="content.article"></c-article>
	// 		<!-- process block end -->
	// 		<!-- category block start -->
	// 		<c-category :category="content.category"></c-category>
	// 		<!-- category block end -->
	// 		<!-- funding block start -->
	// 		<c-funding :funding="content.funding"></c-funding>
	// 		<!-- funding block end -->
	// 	</div>
	// </template>

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(25)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Home\\C-platform.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(26)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-0a345afa/C-platform.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _actions = __webpack_require__(15);

	exports.default = {
		props: ['platform'],
		vuex: {
			actions: {
				isClick: _actions.isClick
			}
		}
	};
	// </script>
	//
	// <template>
	// 	<div class="home__compareWrap">
	// 		<div class="home__compareTitle none_border">
	// 			{{ platform.title }}<span class="home_compareSubTitle">{{ platform.subTitle }}</span>
	// 		</div>
	// 		<ul class="home__pfCompareBox clearfix">
	// 			<li v-for="item in platform.list" class="pfCompareList mask__website fl" :data-id="item.dataId">
	// 				<img :src=item.imgSrc alt="" class="logoImg">
	// 				<div class="home__pfName searchVal">{{ item.name }}</div>
	// 				<div class="home__pfMoney">{{ item.money }}</div>
	// 			</li>
	// 		</ul>
	// 		<a v-link="{path: '/platform'}" class="home__pfCompareLinks" v-text="platform.linkName" @click="isClick"></a>
	// 	</div>
	// </template>
	// <script type="text/javascript">

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"home__compareWrap\">\n\t<div class=\"home__compareTitle none_border\">\n\t\t{{ platform.title }}<span class=\"home_compareSubTitle\">{{ platform.subTitle }}</span>\n\t</div>\n\t<ul class=\"home__pfCompareBox clearfix\">\n\t\t<li v-for=\"item in platform.list\" class=\"pfCompareList mask__website fl\" :data-id=\"item.dataId\">\n\t\t\t<img :src=item.imgSrc alt=\"\" class=\"logoImg\">\n\t\t\t<div class=\"home__pfName searchVal\">{{ item.name }}</div>\n\t\t\t<div class=\"home__pfMoney\">{{ item.money }}</div>\n\t\t</li>\n\t</ul>\n\t<a v-link=\"{path: '/platform'}\" class=\"home__pfCompareLinks\" v-text=\"platform.linkName\" @click=\"isClick\"></a>\n</div>\n";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(28)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Home\\C-category.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(29)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-1a567205/C-category.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _actions = __webpack_require__(15);

	exports.default = {
		props: ['category'],
		vuex: {
			actions: {
				isClick: _actions.isClick
			}
		}
	};
	// </script>
	//
	// <template>
	// 	<div class="home__compareWrap clearfix">
	// 		<a v-link="{path: '/category'}" 
	// 		   class="home__compareTitle"
	// 		   @click="isClick">
	// 			{{ category.title }}
	// 			<i class="icon iconfont fr"></i>
	// 		</a>
	// 		<div v-for="item in category.list" class="home__idyCompareList fl mask__cate" :data-id="item.dataId">
	// 			<div class="home__idyName searchVal">{{ item.name }}</div>
	// 			<div class="home__idyMoney">{{ item.title }}</div>
	// 			<div class="home__idyMoney">{{ item.money }} <span class="unit">{{ item.unit }}</span></div>
	// 		</div>
	// 	</div>
	// </template>
	// <script type="text/javascript">

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"home__compareWrap clearfix\">\n\t<a v-link=\"{path: '/category'}\" \n\t   class=\"home__compareTitle\"\n\t   @click=\"isClick\">\n\t\t{{ category.title }}\n\t\t<i class=\"icon iconfont fr\"></i>\n\t</a>\n\t<div v-for=\"item in category.list\" class=\"home__idyCompareList fl mask__cate\" :data-id=\"item.dataId\">\n\t\t<div class=\"home__idyName searchVal\">{{ item.name }}</div>\n\t\t<div class=\"home__idyMoney\">{{ item.title }}</div>\n\t\t<div class=\"home__idyMoney\">{{ item.money }} <span class=\"unit\">{{ item.unit }}</span></div>\n\t</div>\n</div>\n";

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(31)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Home\\C-funding.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(32)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-088f93c6/C-funding.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _actions = __webpack_require__(15);

	exports.default = {
		props: ['funding'],
		vuex: {
			actions: {
				isClick: _actions.isClick
			}
		}
	};
	// </script>
	//
	// <template>
	// 	<div class="home__compareWrap clearfix">
	// 		<a v-link="{path: '/list'}" class="home__compareTitle none_border" @click="isClick">
	// 			{{ funding.title }}
	// 			<i class="icon iconfont fr"></i>
	// 		</a>
	// 		<ul class="home__fundingProPanel">
	// 			<li v-for="item in funding.list" class="home__fundingProList">
	// 				<a :href="item.itemLink" class="home__fundingLinks">
	// 					<div class="home__fundingName container">
	// 						{{ item.name }}
	// 						<div class="home__logo h_bg2">{{ item.platform }}</div>
	// 					</div>
	// 					<div class="home__fundingImg" :style="'background-image: url('+item.imgSrc+')'">
	// 						<div class="home__fundingStatus fStyle2">{{ item.status }}</div>
	// 					</div>
	// 					<div v-if="item.flag == '1'" class="home__fundingDescBox clearfix">
	// 						<div class="home__fundingCate fl">{{ item.title }}</div>
	// 						<div class="home__fundingMoney fl">{{ item.money }}</div><span class="home__unit">{{ item.unit }}</span>
	// 					</div>
	// 					<div v-else class="home__fundingDescBox home__fcMoneyBox clearfix">
	// 						<div class="home__fundingCate fl">7日筹资</div>
	// 						<div class="home__fcWrap fl">
	// 							<div class="home__fcTop">
	// 								<span class="moneyLight">{{ item.abroadMoney }}</span> {{ item.abroadUnit }}
	// 							</div>
	// 							<div class="home__fcDown">
	// 								<span class="moneyLight">{{ item.money }}</span> {{ item.unit }}
	// 							</div>
	// 						</div>
	// 					</div>
	// 				</a>
	// 			</li>
	// 			<!-- <li class="home__fundingShowMore">
	// 				<a href="/index/list" class="home__showMoreLink">更多项目</a>
	// 			</li> -->
	// 		</ul>
	// 	</div>
	// </template>
	// <script type="text/javascript">

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"home__compareWrap clearfix\">\n\t<a v-link=\"{path: '/list'}\" class=\"home__compareTitle none_border\" @click=\"isClick\">\n\t\t{{ funding.title }}\n\t\t<i class=\"icon iconfont fr\"></i>\n\t</a>\n\t<ul class=\"home__fundingProPanel\">\n\t\t<li v-for=\"item in funding.list\" class=\"home__fundingProList\">\n\t\t\t<a :href=\"item.itemLink\" class=\"home__fundingLinks\">\n\t\t\t\t<div class=\"home__fundingName container\">\n\t\t\t\t\t{{ item.name }}\n\t\t\t\t\t<div class=\"home__logo h_bg2\">{{ item.platform }}</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"home__fundingImg\" :style=\"'background-image: url('+item.imgSrc+')'\">\n\t\t\t\t\t<div class=\"home__fundingStatus fStyle2\">{{ item.status }}</div>\n\t\t\t\t</div>\n\t\t\t\t<div v-if=\"item.flag == '1'\" class=\"home__fundingDescBox clearfix\">\n\t\t\t\t\t<div class=\"home__fundingCate fl\">{{ item.title }}</div>\n\t\t\t\t\t<div class=\"home__fundingMoney fl\">{{ item.money }}</div><span class=\"home__unit\">{{ item.unit }}</span>\n\t\t\t\t</div>\n\t\t\t\t<div v-else class=\"home__fundingDescBox home__fcMoneyBox clearfix\">\n\t\t\t\t\t<div class=\"home__fundingCate fl\">7日筹资</div>\n\t\t\t\t\t<div class=\"home__fcWrap fl\">\n\t\t\t\t\t\t<div class=\"home__fcTop\">\n\t\t\t\t\t\t\t<span class=\"moneyLight\">{{ item.abroadMoney }}</span> {{ item.abroadUnit }}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"home__fcDown\">\n\t\t\t\t\t\t\t<span class=\"moneyLight\">{{ item.money }}</span> {{ item.unit }}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t</li>\n\t\t<!-- <li class=\"home__fundingShowMore\">\n\t\t\t<a href=\"/index/list\" class=\"home__showMoreLink\">更多项目</a>\n\t\t</li> -->\n\t</ul>\n</div>\n";

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(34)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Home\\C-article.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(35)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-f95e0d82/C-article.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _actions = __webpack_require__(15);

	exports.default = {
		props: ['article'],
		vuex: {
			actions: {
				isClick: _actions.isClick
			}
		}
	};
	// </script>
	//
	// <template>
	// 	<div class="home__processWrap">
	// 		<a v-link="{path: '/article'}" 
	// 		   class="home__processLink"
	// 		   @click="isClick">
	// 			<span class="home__processTitle size28" v-text="article.linkName"></span>
	// 		</a>
	// 	</div>
	// </template>
	// <script type="text/javascript">

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"home__processWrap\">\n\t<a v-link=\"{path: '/article'}\" \n\t   class=\"home__processLink\"\n\t   @click=\"isClick\">\n\t\t<span class=\"home__processTitle size28\" v-text=\"article.linkName\"></span>\n\t</a>\n</div>\n";

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div id=\"gkvContent\">\n\t<!-- platform block start -->\n\t<c-platform :platform=\"content.platform\"></c-platform>\n\t<!-- platform block end -->\n\t<!-- process block start -->\n\t<c-article :article=\"content.article\"></c-article>\n\t<!-- process block end -->\n\t<!-- category block start -->\n\t<c-category :category=\"content.category\"></c-category>\n\t<!-- category block end -->\n\t<!-- funding block start -->\n\t<c-funding :funding=\"content.funding\"></c-funding>\n\t<!-- funding block end -->\n</div>\n";

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(38)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Menu.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(42)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-1c2ac422/Menu.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _actions = __webpack_require__(15);

	var _MenuMore = __webpack_require__(39);

	var _MenuMore2 = _interopRequireDefault(_MenuMore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <script type="text/javascript">
	exports.default = {
		name: 'menu',
		vuex: {
			getters: {
				menu: function menu(_ref) {
					var index = _ref.index;
					return index.menu;
				}
			},
			actions: {
				isShowMenu: _actions.isShowMenu,
				isClick: _actions.isClick,
				isShowMenuMore: _actions.isShowMenuMore
			}
		},
		components: {
			'more-menu': _MenuMore2.default
		}
	};
	// </script>
	//
	// <template>
	// 	<more-menu></more-menu>
	// 	<div id="gkvMaskBox" transition="gkvMenu" v-show="menu.isShow">
	// 		<dl class="maskWrap">
	// 			<dt class="mask__opt">
	// 				<a class="mask__btn mask__cancel fl" @click="isShowMenu">取消</a>
	// 				<a v-link="{path: '/index'}" class="mask__btn mask__goIndex fr" @click="isClick">首页<i class="icon iconfont"></i></a>
	// 			</dt>
	// 			<dd class="mask__panel">
	// 				<ul class="mask__linksBox clearfix">
	// 					<li class="mask__links mask__firstRow mask__website fl bg3" data-id="3">
	// 						<a href="##" class="mask__linkTxt searchVal">Kickstarter</a>
	// 					</li>
	// 					<li class="mask__links mask__firstRow mask__website fl bg4" data-id="4">
	// 						<a href="##" class="mask__linkTxt searchVal">Indiegogo</a>
	// 					</li>
	// 					<li class="mask__links mask__firstRow mask__website fl bg2" data-id="2">
	// 						<a href="##" class="mask__linkTxt searchVal">京东众筹</a>
	// 					</li>
	// 					<li class="mask__links mask__firstRow mask__website fl bg1" data-id="1">
	// 						<a href="##" class="mask__linkTxt searchVal">淘宝众筹</a>
	// 					</li>
	// 					<li class="mask__links mask__firstRow mask__more fl bg0" 
	// 						data-id=""
	// 						@click="isShowMenuMore">
	// 						<a class="mask__linkTxt searchVal">更多</a>
	// 					</li>
	// 					<li class="mask__links mask__website fl bgcolor1" data-id="">
	// 						<a href="##" class="mask__linkTxt searchVal">全部</a>
	// 					</li>
	// 					<li class="mask__links mask__cate fl" data-id="1">
	// 						<a href="##" class="mask__linkTxt searchVal">VR/AR</a>
	// 					</li>
	// 					<li class="mask__links mask__cate fl" data-id="2">
	// 						<a href="##" class="mask__linkTxt searchVal">无人机</a>
	// 					</li>
	// 					<li class="mask__links mask__cate fl" data-id="3">
	// 						<a href="##" class="mask__linkTxt searchVal">机器人</a>
	// 					</li>
	// 					<li class="mask__links mask__cate fl" data-id="4">
	// 						<a href="##" class="mask__linkTxt searchVal">智能穿戴</a>
	// 					</li>
	// 					<li class="mask__links mask__cate fl" data-id="5">
	// 						<a href="##" class="mask__linkTxt searchVal">智能出行</a>
	// 					</li>
	// 					<li class="mask__links mask__cate fl" data-id="6">
	// 						<a href="##" class="mask__linkTxt searchVal">医疗与保健</a>
	// 					</li>
	// 					<li class="mask__links mask__cate fl" data-id="7">
	// 						<a href="##" class="mask__linkTxt searchVal">智能母婴</a>
	// 					</li>
	// 					<li class="mask__links mask__cate fl" data-id="8">
	// 						<a href="##" class="mask__linkTxt searchVal">手机与周边</a>
	// 					</li>
	// 					<li class="mask__links mask__cate fl" data-id="9">
	// 						<a href="##" class="mask__linkTxt searchVal">环保与净化</a>
	// 					</li>
	// 					<li class="mask__links mask__cate fl" data-id="10">
	// 						<a href="##" class="mask__linkTxt searchVal">办公增强</a>
	// 					</li>
	// 					<li class="mask__links mask__cate fl" data-id="11">
	// 						<a href="##" class="mask__linkTxt searchVal">家居与安防</a>
	// 					</li>
	// 					<li class="mask__links mask__cate fl" data-id="14">
	// 						<a href="##" class="mask__linkTxt searchVal">数码与周边</a>
	// 					</li>
	// 					<li class="mask__links mask__cate fl" data-id="12">
	// 						<a href="##" class="mask__linkTxt searchVal">创意设计</a>
	// 					</li>
	// 				</ul>
	// 			</dd>
	// 		</dl>
	// 	</div>
	// </template>

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(40)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\MenuMore.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(41)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-8925f138/MenuMore.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _actions = __webpack_require__(15);

	exports.default = {
		vuex: {
			getters: {
				menu: function menu(_ref) {
					var index = _ref.index;
					return index.menu;
				}
			},
			actions: {
				isShowMenuMore: _actions.isShowMenuMore
			}
		}
	};
	// </script>
	//
	// <template>
	// 	<div class="gkvMaskAllBox" transition="gkvMenu" v-show="menu.isShowMore">
	// 		<div class="mask__allPfTitle">
	// 			<i class="icon iconfont mask__allReturn size36" @click="isShowMenuMore"></i><span class="size36">全部平台</span>
	// 		</div>
	// 		<ul class="mask__allPfBox container">
	// 			<li class="mask__links mask__website fl bg3" data-id="3"><a href="##" class="mask__linkTxt searchVal">Kickstarter</a></li>
	// 			<li class="mask__links mask__website fl bg4" data-id="4"><a href="##" class="mask__linkTxt searchVal">Indiegogo</a></li>
	// 			<li class="mask__links mask__website fl bg2" data-id="2"><a href="##" class="mask__linkTxt searchVal">京东众筹</a></li>
	// 			<li class="mask__links mask__website fl bg1" data-id="1"><a href="##" class="mask__linkTxt searchVal">淘宝众筹</a></li>
	// 			<li class="mask__links mask__website fl bg5" data-id="5"><a href="##" class="mask__linkTxt searchVal">众筹网</a></li>
	// 			<li class="mask__links mask__website fl bg6" data-id="6"><a href="##" class="mask__linkTxt searchVal">点名时间</a></li>
	// 			<li class="mask__links mask__website fl bg7" data-id="7"><a href="##" class="mask__linkTxt searchVal">苏宁众筹</a></li>
	// 			<li class="mask__links mask__website fl bg8" data-id="8"><a href="##" class="mask__linkTxt searchVal">追梦网</a></li>
	// 			<li class="mask__links mask__website fl bg10" data-id="9"><a href="##" class="mask__linkTxt searchVal">凤凰众筹</a></li>
	// 			<li class="mask__links mask__website fl bg9" data-id="10"><a href="##" class="mask__linkTxt searchVal">青橘众筹</a></li>
	// 			<li class="mask__links mask__website fl bg11" data-id="11"><a href="##" class="mask__linkTxt searchVal">创客星球</a></li>
	// 			<li class="mask__links mask__website fl bg12" data-id="12"><a href="##" class="mask__linkTxt searchVal">九九众筹</a></li>
	// 			<li class="mask__links mask__website fl bg13" data-id="13"><a href="##" class="mask__linkTxt searchVal">平安众筹</a></li>
	// 		</ul>
	// 		<div class="mask__allCateTitle container">
	// 			<span class="size36">全部行业</span>
	// 		</div>
	// 		<ul class="mask__allCateBox container">
	// 			<li class="mask__links mask__website fl bgcolor1" data-id=""><a href="##" class="mask__linkTxt searchVal">全部</a></li>
	// 			<li class="mask__links mask__cate fl" data-id="1"><a href="##" class="mask__linkTxt searchVal">VR/AR</a></li>
	// 			<li class="mask__links mask__cate fl" data-id="2"><a href="##" class="mask__linkTxt searchVal">无人机</a></li>
	// 			<li class="mask__links mask__cate fl" data-id="3"><a href="##" class="mask__linkTxt searchVal">机器人</a></li>
	// 			<li class="mask__links mask__cate fl" data-id="4"><a href="##" class="mask__linkTxt searchVal">智能穿戴</a></li>
	// 			<li class="mask__links mask__cate fl" data-id="5"><a href="##" class="mask__linkTxt searchVal">智能出行</a></li>
	// 			<li class="mask__links mask__cate fl" data-id="6"><a href="##" class="mask__linkTxt searchVal">医疗与保健</a></li>
	// 			<li class="mask__links mask__cate fl" data-id="7"><a href="##" class="mask__linkTxt searchVal">智能母婴</a></li>
	// 			<li class="mask__links mask__cate fl" data-id="8"><a href="##" class="mask__linkTxt searchVal">手机与周边</a></li>
	// 			<li class="mask__links mask__cate fl" data-id="9"><a href="##" class="mask__linkTxt searchVal">环保与净化</a></li>
	// 			<li class="mask__links mask__cate fl" data-id="10"><a href="##" class="mask__linkTxt searchVal">办公增强</a></li>
	// 			<li class="mask__links mask__cate fl" data-id="11"><a href="##" class="mask__linkTxt searchVal">家居与安防</a></li>
	// 			<li class="mask__links mask__cate fl" data-id="14"><a href="##" class="mask__linkTxt searchVal">数码与周边</a></li>
	// 			<li class="mask__links mask__cate fl" data-id="12"><a href="##" class="mask__linkTxt searchVal">创意设计</a></li>
	// 		</ul>
	// 	</div>
	// </template>
	// <script type="text/javascript">

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"gkvMaskAllBox\" transition=\"gkvMenu\" v-show=\"menu.isShowMore\">\n\t<div class=\"mask__allPfTitle\">\n\t\t<i class=\"icon iconfont mask__allReturn size36\" @click=\"isShowMenuMore\"></i><span class=\"size36\">全部平台</span>\n\t</div>\n\t<ul class=\"mask__allPfBox container\">\n\t\t<li class=\"mask__links mask__website fl bg3\" data-id=\"3\"><a href=\"##\" class=\"mask__linkTxt searchVal\">Kickstarter</a></li>\n\t\t<li class=\"mask__links mask__website fl bg4\" data-id=\"4\"><a href=\"##\" class=\"mask__linkTxt searchVal\">Indiegogo</a></li>\n\t\t<li class=\"mask__links mask__website fl bg2\" data-id=\"2\"><a href=\"##\" class=\"mask__linkTxt searchVal\">京东众筹</a></li>\n\t\t<li class=\"mask__links mask__website fl bg1\" data-id=\"1\"><a href=\"##\" class=\"mask__linkTxt searchVal\">淘宝众筹</a></li>\n\t\t<li class=\"mask__links mask__website fl bg5\" data-id=\"5\"><a href=\"##\" class=\"mask__linkTxt searchVal\">众筹网</a></li>\n\t\t<li class=\"mask__links mask__website fl bg6\" data-id=\"6\"><a href=\"##\" class=\"mask__linkTxt searchVal\">点名时间</a></li>\n\t\t<li class=\"mask__links mask__website fl bg7\" data-id=\"7\"><a href=\"##\" class=\"mask__linkTxt searchVal\">苏宁众筹</a></li>\n\t\t<li class=\"mask__links mask__website fl bg8\" data-id=\"8\"><a href=\"##\" class=\"mask__linkTxt searchVal\">追梦网</a></li>\n\t\t<li class=\"mask__links mask__website fl bg10\" data-id=\"9\"><a href=\"##\" class=\"mask__linkTxt searchVal\">凤凰众筹</a></li>\n\t\t<li class=\"mask__links mask__website fl bg9\" data-id=\"10\"><a href=\"##\" class=\"mask__linkTxt searchVal\">青橘众筹</a></li>\n\t\t<li class=\"mask__links mask__website fl bg11\" data-id=\"11\"><a href=\"##\" class=\"mask__linkTxt searchVal\">创客星球</a></li>\n\t\t<li class=\"mask__links mask__website fl bg12\" data-id=\"12\"><a href=\"##\" class=\"mask__linkTxt searchVal\">九九众筹</a></li>\n\t\t<li class=\"mask__links mask__website fl bg13\" data-id=\"13\"><a href=\"##\" class=\"mask__linkTxt searchVal\">平安众筹</a></li>\n\t</ul>\n\t<div class=\"mask__allCateTitle container\">\n\t\t<span class=\"size36\">全部行业</span>\n\t</div>\n\t<ul class=\"mask__allCateBox container\">\n\t\t<li class=\"mask__links mask__website fl bgcolor1\" data-id=\"\"><a href=\"##\" class=\"mask__linkTxt searchVal\">全部</a></li>\n\t\t<li class=\"mask__links mask__cate fl\" data-id=\"1\"><a href=\"##\" class=\"mask__linkTxt searchVal\">VR/AR</a></li>\n\t\t<li class=\"mask__links mask__cate fl\" data-id=\"2\"><a href=\"##\" class=\"mask__linkTxt searchVal\">无人机</a></li>\n\t\t<li class=\"mask__links mask__cate fl\" data-id=\"3\"><a href=\"##\" class=\"mask__linkTxt searchVal\">机器人</a></li>\n\t\t<li class=\"mask__links mask__cate fl\" data-id=\"4\"><a href=\"##\" class=\"mask__linkTxt searchVal\">智能穿戴</a></li>\n\t\t<li class=\"mask__links mask__cate fl\" data-id=\"5\"><a href=\"##\" class=\"mask__linkTxt searchVal\">智能出行</a></li>\n\t\t<li class=\"mask__links mask__cate fl\" data-id=\"6\"><a href=\"##\" class=\"mask__linkTxt searchVal\">医疗与保健</a></li>\n\t\t<li class=\"mask__links mask__cate fl\" data-id=\"7\"><a href=\"##\" class=\"mask__linkTxt searchVal\">智能母婴</a></li>\n\t\t<li class=\"mask__links mask__cate fl\" data-id=\"8\"><a href=\"##\" class=\"mask__linkTxt searchVal\">手机与周边</a></li>\n\t\t<li class=\"mask__links mask__cate fl\" data-id=\"9\"><a href=\"##\" class=\"mask__linkTxt searchVal\">环保与净化</a></li>\n\t\t<li class=\"mask__links mask__cate fl\" data-id=\"10\"><a href=\"##\" class=\"mask__linkTxt searchVal\">办公增强</a></li>\n\t\t<li class=\"mask__links mask__cate fl\" data-id=\"11\"><a href=\"##\" class=\"mask__linkTxt searchVal\">家居与安防</a></li>\n\t\t<li class=\"mask__links mask__cate fl\" data-id=\"14\"><a href=\"##\" class=\"mask__linkTxt searchVal\">数码与周边</a></li>\n\t\t<li class=\"mask__links mask__cate fl\" data-id=\"12\"><a href=\"##\" class=\"mask__linkTxt searchVal\">创意设计</a></li>\n\t</ul>\n</div>\n";

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<more-menu></more-menu>\n<div id=\"gkvMaskBox\" transition=\"gkvMenu\" v-show=\"menu.isShow\">\n\t<dl class=\"maskWrap\">\n\t\t<dt class=\"mask__opt\">\n\t\t\t<a class=\"mask__btn mask__cancel fl\" @click=\"isShowMenu\">取消</a>\n\t\t\t<a v-link=\"{path: '/index'}\" class=\"mask__btn mask__goIndex fr\" @click=\"isClick\">首页<i class=\"icon iconfont\"></i></a>\n\t\t</dt>\n\t\t<dd class=\"mask__panel\">\n\t\t\t<ul class=\"mask__linksBox clearfix\">\n\t\t\t\t<li class=\"mask__links mask__firstRow mask__website fl bg3\" data-id=\"3\">\n\t\t\t\t\t<a href=\"##\" class=\"mask__linkTxt searchVal\">Kickstarter</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"mask__links mask__firstRow mask__website fl bg4\" data-id=\"4\">\n\t\t\t\t\t<a href=\"##\" class=\"mask__linkTxt searchVal\">Indiegogo</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"mask__links mask__firstRow mask__website fl bg2\" data-id=\"2\">\n\t\t\t\t\t<a href=\"##\" class=\"mask__linkTxt searchVal\">京东众筹</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"mask__links mask__firstRow mask__website fl bg1\" data-id=\"1\">\n\t\t\t\t\t<a href=\"##\" class=\"mask__linkTxt searchVal\">淘宝众筹</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"mask__links mask__firstRow mask__more fl bg0\" \n\t\t\t\t\tdata-id=\"\"\n\t\t\t\t\t@click=\"isShowMenuMore\">\n\t\t\t\t\t<a class=\"mask__linkTxt searchVal\">更多</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"mask__links mask__website fl bgcolor1\" data-id=\"\">\n\t\t\t\t\t<a href=\"##\" class=\"mask__linkTxt searchVal\">全部</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"mask__links mask__cate fl\" data-id=\"1\">\n\t\t\t\t\t<a href=\"##\" class=\"mask__linkTxt searchVal\">VR/AR</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"mask__links mask__cate fl\" data-id=\"2\">\n\t\t\t\t\t<a href=\"##\" class=\"mask__linkTxt searchVal\">无人机</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"mask__links mask__cate fl\" data-id=\"3\">\n\t\t\t\t\t<a href=\"##\" class=\"mask__linkTxt searchVal\">机器人</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"mask__links mask__cate fl\" data-id=\"4\">\n\t\t\t\t\t<a href=\"##\" class=\"mask__linkTxt searchVal\">智能穿戴</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"mask__links mask__cate fl\" data-id=\"5\">\n\t\t\t\t\t<a href=\"##\" class=\"mask__linkTxt searchVal\">智能出行</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"mask__links mask__cate fl\" data-id=\"6\">\n\t\t\t\t\t<a href=\"##\" class=\"mask__linkTxt searchVal\">医疗与保健</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"mask__links mask__cate fl\" data-id=\"7\">\n\t\t\t\t\t<a href=\"##\" class=\"mask__linkTxt searchVal\">智能母婴</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"mask__links mask__cate fl\" data-id=\"8\">\n\t\t\t\t\t<a href=\"##\" class=\"mask__linkTxt searchVal\">手机与周边</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"mask__links mask__cate fl\" data-id=\"9\">\n\t\t\t\t\t<a href=\"##\" class=\"mask__linkTxt searchVal\">环保与净化</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"mask__links mask__cate fl\" data-id=\"10\">\n\t\t\t\t\t<a href=\"##\" class=\"mask__linkTxt searchVal\">办公增强</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"mask__links mask__cate fl\" data-id=\"11\">\n\t\t\t\t\t<a href=\"##\" class=\"mask__linkTxt searchVal\">家居与安防</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"mask__links mask__cate fl\" data-id=\"14\">\n\t\t\t\t\t<a href=\"##\" class=\"mask__linkTxt searchVal\">数码与周边</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"mask__links mask__cate fl\" data-id=\"12\">\n\t\t\t\t\t<a href=\"##\" class=\"mask__linkTxt searchVal\">创意设计</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</dd>\n\t</dl>\n</div>\n";

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div id=\"gkvBox\" :transition=\"stack.pageDir\">\n\t<gkv-header></gkv-header>\n\t<gkv-content></gkv-content>\n\t<gkv-menu></gkv-menu>\n</div>\n";

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(45)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Search\\Index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(55)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-31d9028e/Index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Header = __webpack_require__(46);

	var _Header2 = _interopRequireDefault(_Header);

	var _List = __webpack_require__(49);

	var _List2 = _interopRequireDefault(_List);

	var _Footer = __webpack_require__(52);

	var _Footer2 = _interopRequireDefault(_Footer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		name: 'search',
		vuex: {
			getters: {
				stack: function stack(_ref) {
					var router = _ref.router;
					return router.stack;
				},
				search: function search(_ref2) {
					var _search = _ref2.search;
					return _search;
				}
			}
		},
		components: {
			's-header': _Header2.default,
			's-list': _List2.default,
			's-footer': _Footer2.default
		}
	};
	// </script>
	//
	// <template>
	// 	<div id="gkvBox" :transition="stack.pageDir">
	// 		<div id="gkvSearch" class="searchPage">
	// 			<s-header :search="search"></s-header>
	// 			<s-list :search="search"></s-list>
	// 			<s-footer></s-footer>
	// 		</div>
	// 	</div>
	// </template>
	// <script type="text/javascript">

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(47)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Search\\Header.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(48)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-553dab01/Header.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <script type="text/javascript">
	exports.default = {
		props: ['search'],
		methods: {
			goBack: function goBack() {
				window.history.go(-1);
			}
		}
	};
	// </script>
	//
	// <template>
	// 	<div class="searchBox clearfix">
	// 		<a class="search__return sReturn__btn fl" @click="goBack">
	// 			<i class="icon iconfont"></i>
	// 		</a>
	// 		<a class="search__search fr">搜索</a>
	// 		<div class="search__InptBox fr">
	// 			<i class="icon iconfont searchIcon"></i>
	// 			<input class="search__Inpt" type="text" :value="search.searchVal" placeholder="搜索">
	// 		</div>
	// 	</div>
	// </template>

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"searchBox clearfix\">\n\t<a class=\"search__return sReturn__btn fl\" @click=\"goBack\">\n\t\t<i class=\"icon iconfont\"></i>\n\t</a>\n\t<a class=\"search__search fr\">搜索</a>\n\t<div class=\"search__InptBox fr\">\n\t\t<i class=\"icon iconfont searchIcon\"></i>\n\t\t<input class=\"search__Inpt\" type=\"text\" :value=\"search.searchVal\" placeholder=\"搜索\">\n\t</div>\n</div>\n";

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(50)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Search\\List.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(51)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-42c96f92/List.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <script type="text/javascript">
	exports.default = {
		props: ['search'],
		methods: {
			formatNum: function formatNum(_num, unit) {
				var temp = (_num + '').split('').reverse();
				var newNum = '',
				    endNum = '';
				while (temp.length > 3) {
					newNum += temp.splice(0, 3).join('') + ',';
				}
				newNum += temp.join('');
				endNum = newNum.split('').reverse().join('');
				if (unit == true) {
					_num >= 10000 && _num < 100000000 && (endNum += '万');
					_num >= 100000000 && (endNum += '亿');
				}
				return endNum;
			}
		}
	};
	// </script>
	//
	// <template>
	// 	<div class="search__title search__searchTitle">
	// 		共 <font class="light">{{search.total}}</font> 个结果
	// 	</div>
	// 	<div class="search__results">
	// 		<ul class="itemBox">
	// 			<li v-for="item in search.list" class="item__list item__listTop">
	// 				<a href="/index/product/24832" class="item__links">
	// 					<div class="item__title item__searchTitle">
	// 						{{{ item.name }}}
	// 						<div class="item__dailyMoneyBox item__searchDailyMoneyBox">
	// 							筹集金额&nbsp;{{ formatNum(item.money) }}&nbsp;RMB
	// 							<span class="fr">{{ item.status }}</span>
	// 						</div>
	// 					</div>
	// 				</a>
	// 			</li>
	// 			<li class="item__showMore">
	// 				<button class="item__searchShowBtn">显示更多</button>
	// 			</li>
	// 		</ul>
	// 	</div>
	// </template>

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"search__title search__searchTitle\">\n\t共 <font class=\"light\">{{search.total}}</font> 个结果\n</div>\n<div class=\"search__results\">\n\t<ul class=\"itemBox\">\n\t\t<li v-for=\"item in search.list\" class=\"item__list item__listTop\">\n\t\t\t<a href=\"/index/product/24832\" class=\"item__links\">\n\t\t\t\t<div class=\"item__title item__searchTitle\">\n\t\t\t\t\t{{{ item.name }}}\n\t\t\t\t\t<div class=\"item__dailyMoneyBox item__searchDailyMoneyBox\">\n\t\t\t\t\t\t筹集金额&nbsp;{{ formatNum(item.money) }}&nbsp;RMB\n\t\t\t\t\t\t<span class=\"fr\">{{ item.status }}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t</li>\n\t\t<li class=\"item__showMore\">\n\t\t\t<button class=\"item__searchShowBtn\">显示更多</button>\n\t\t</li>\n\t</ul>\n</div>\n";

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(53)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Footer.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(54)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-623b7baa/Footer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 53 */
/***/ function(module, exports) {

	// <script type="text/javascript">

	// </script>
	//
	// <template>
	// 	<div id="gkvFooter" class="clearfix">
	// 		<div class="gkv__CopyBox fl">
	// 			<div class="gkv__CopyTop size24">
	// 				Copyright © 2016极客视界
	// 			</div>
	// 	<!-- 		<div class="gkv__CopyDown size24"> -->
	// 	<!-- 			All Rights Reserved -->
	// 	<!-- 		</div> -->
	// 		</div>
	// 		<div class="gkv__aboutMe fr">
	// 			<a href="/index/contact" class="gkv__aboutMeLink size24">
	// 				<img class="gkv__feekback" src="https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/feekback.png">意见反馈
	// 			</a>
	// 		</div>
	// 	</div>	
	// </template>
	"use strict";

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n<div id=\"gkvFooter\" class=\"clearfix\">\n\t<div class=\"gkv__CopyBox fl\">\n\t\t<div class=\"gkv__CopyTop size24\">\n\t\t\tCopyright © 2016极客视界\n\t\t</div>\n<!-- \t\t<div class=\"gkv__CopyDown size24\"> -->\n<!-- \t\t\tAll Rights Reserved -->\n<!-- \t\t</div> -->\n\t</div>\n\t<div class=\"gkv__aboutMe fr\">\n\t\t<a href=\"/index/contact\" class=\"gkv__aboutMeLink size24\">\n\t\t\t<img class=\"gkv__feekback\" src=\"https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/feekback.png\">意见反馈\n\t\t</a>\n\t</div>\n</div>\t\n";

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div id=\"gkvBox\" :transition=\"stack.pageDir\">\n\t<div id=\"gkvSearch\" class=\"searchPage\">\n\t\t<s-header :search=\"search\"></s-header>\n\t\t<s-list :search=\"search\"></s-list>\n\t\t<s-footer></s-footer>\n\t</div>\n</div>\n";

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(57)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\List\\Index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(64)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-54c8dff8/Index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Header = __webpack_require__(58);

	var _Header2 = _interopRequireDefault(_Header);

	var _Content = __webpack_require__(61);

	var _Content2 = _interopRequireDefault(_Content);

	var _Menu = __webpack_require__(37);

	var _Menu2 = _interopRequireDefault(_Menu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		vuex: {
			getters: {
				stack: function stack(_ref) {
					var router = _ref.router;
					return router.stack;
				}
			}
		},
		components: {
			'l-header': _Header2.default,
			'l-content': _Content2.default,
			'gkv-menu': _Menu2.default
		}
	};

	// </script>
	//
	// <template>
	// 	<div id="gkvBox" :transition="stack.pageDir">
	// 		<gkv-menu></gkv-menu>
	// 		<l-header></l-header>
	// 		<l-content></l-content>
	// 	</div>
	// </template>
	// <script type="text/javascript">

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(59)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\List\\Header.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(60)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-29cccc4b/Header.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _actions = __webpack_require__(15);

	exports.default = {
		vuex: {
			getters: {
				list: function list(_ref) {
					var _list = _ref.list;
					return _list;
				}
			},
			actions: {
				isShowMenu: _actions.isShowMenu,
				isClick: _actions.isClick
			}
		}
	};
	// </script>
	//
	// <template>
	// 	<div id="gkvHeader" class="clearfix">
	// 		<div class="nav clearfix">
	// 			<div class="nav__menuBox fl clearfix" @click="isShowMenu">
	// 				<div class="nav__menuIcon fl">
	// 					<i class="icon iconfont"></i>
	// 				</div>
	// 				<div class="nav__menuTitle fl">
	// 					{{ list.activeTitle }}
	// 				</div>
	// 			</div>
	// 			<div class="nav__searchBox fr"
	// 				 @click="isClick"
	// 				 v-link="{path: '/search'}">
	// 				<form action="" method="post">
	// 					<i class="icon iconfont"></i>
	// 					<input class="nav__search" name="keyword" placeholder="搜索">
	// 				</form>
	// 			</div>
	// 		</div>
	// 	</div>
	// </template>
	// <script type="text/javascript">

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div id=\"gkvHeader\" class=\"clearfix\">\n\t<div class=\"nav clearfix\">\n\t\t<div class=\"nav__menuBox fl clearfix\" @click=\"isShowMenu\">\n\t\t\t<div class=\"nav__menuIcon fl\">\n\t\t\t\t<i class=\"icon iconfont\"></i>\n\t\t\t</div>\n\t\t\t<div class=\"nav__menuTitle fl\">\n\t\t\t\t{{ list.activeTitle }}\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"nav__searchBox fr\"\n\t\t\t @click=\"isClick\"\n\t\t\t v-link=\"{path: '/search'}\">\n\t\t\t<form action=\"\" method=\"post\">\n\t\t\t\t<i class=\"icon iconfont\"></i>\n\t\t\t\t<input class=\"nav__search\" name=\"keyword\" placeholder=\"搜索\">\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(62)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\List\\Content.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(63)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-96b31caa/Content.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _actions = __webpack_require__(15);

	exports.default = {
		vuex: {
			getters: {
				list: function list(_ref) {
					var _list = _ref.list;
					return _list;
				}
			},
			actions: {
				listTabs: _actions.listTabs,
				isClick: _actions.isClick
			}
		},
		methods: {
			formatRank: function formatRank(rank) {
				return 'No.' + rank;
			},
			formatNum: function formatNum(_num, unit) {
				var isPoint = (_num + '').indexOf('.');
				var splitArr = (_num + '').split('.');
				var temp = (splitArr[0] + '').split('').reverse();
				var newNum = '',
				    endNum = '';
				while (temp.length > 3) {
					newNum += temp.splice(0, 3).join('') + ',';
				}
				newNum += temp.join('');
				endNum = newNum.split('').reverse().join('');
				if (unit == true) {
					_num >= 10000 && _num < 100000000 && (endNum += '万');
					_num >= 100000000 && (endNum += '亿');
					return endNum;
				}
				if (isPoint != -1) {
					endNum += '.' + splitArr[1];
				}
				return endNum;
			},
			online: function online(time) {
				console.log(time);
				var createDate = new Date(time);
				var nowDate = new Date();
				var gapTime = nowDate.getTime() - time;
				var gapDate = Math.floor(gapTime / 1000 / 60 / 60 / 24);
				if (gapDate == 0) {
					return '今天上线';
				} else if (gapDate == 1) {
					return '昨天上线';
				} else if (gapDate == 2) {
					return '前天上线';
				} else {
					return createDate.getMonth() + 1 + '月' + createDate.getDate() + '日上线';
				}
			}
		}
	};
	// </script>
	//
	// <template>
	// 	<div id="gkvMainCxt">
	// 		<ul class="navTab clearfix">
	// 			<li v-for="item in list.tabs" 
	// 				class="navTab__list fl"
	// 				:class="{on: list.activeTabs == item}"
	// 				@click="listTabs(item)">
	// 					{{ item }}<span class="navTab__on"></span>
	// 			</li>
	// 		</ul>
	// 		<ul class="itemBox">
	// 			<li v-for="item in list.items[list.activeTitle][list.activeTabs]"
	// 				class="item__list">
	// 				<a v-link="{name:'product', params: {productId: 25638}}" 
	// 				   class="item__links"
	// 				   @click="isClick">
	// 					<div class="item__title">
	// 						{{ item.title }}
	// 					</div>
	// 					<div class="item__imgBox" :style="'background-image: url('+item.img+')'">
	// 						<div class="item__status"
	// 							 :class="'fStyle'+item.status">{{ item.statusTxt }}</div>
	// 					</div>
	// 					<!-- 国内今日已筹 -->
	// 					<div class="item__dailyMoneyBox" v-if="item.currencyId==1">
	// 						今日已筹&nbsp;&nbsp;&nbsp;&nbsp;<span class="size40 moneyLight">{{ formatNum(item.growthMoney) }} </span>&nbsp;&nbsp;{{ item.unit }}
	// 							<div class="item__No fr"
	// 								 :class="'bgcolor'+(item.rank>4?4:item.rank)"
	// 								 v-if="list.activeTabs=='增速榜'">{{ formatRank(item.rank) }}</div>
	// 							<div class="fr"
	// 								 v-if="list.activeTabs=='新上'">{{ online(item.createDate) }}</div>
	// 					</div>
	// 					<!-- 国内今日已筹 -->
	// 					<!-- 国外今日已筹 -->
	// 					<div class="item__dailyMoneyBox item__fcMoneyBox clearfix" v-else>
	// 						<div class="item__fundingStatus fl">今日已筹</div>
	// 						<div class="item__fcWrap fl">
	// 							<div class="item__fcTop"><span class="moneyLight">{{ formatNum(item.growthMoneyOrg) }}</span> {{ item.unit }}</div>
	// 							<div class="item__fcDown"><span class="moneyLight">{{ formatNum(item.growthMoney) }}</span> RMB</div>
	// 						</div>
	// 						<div class="fr">
	// 							<div class="item__No"
	// 								 :class="'bgcolor'+(item.rank>4?4:item.rank)"
	// 								 v-if="list.activeTabs=='增速榜'">{{ formatRank(item.rank) }}</div>
	// 							<div class="fr"
	// 								 v-if="list.activeTabs=='新上'">{{ online(item.createDate) }}</div>
	// 						</div>
	// 					</div>
	// 					<!-- 国外今日已筹 -->
	// 					<ul class="item__descBox clearfix">
	// 						<!-- 项目进度 start -->
	// 						<li class="item__descList fl"
	// 							:class="{end: item.status != 2}"
	// 							v-if="item.foreverStatus==0">
	// 							<div class="item__descTitle">项目进度</div>
	// 							<div class="item__descData">{{ item.finishPer }}%</div>
	// 						</li>
	// 						<!-- 项目进度 end -->
	// 						<!-- 无限众筹 start -->
	// 						<li class="item__descList forer end fl"
	// 							v-if="item.foreverStatus==1">
	// 							<div class="item__descTitle">已筹金额</div> 
	// 							<div class="item__descDataWrap">
	// 								<div class="item__fcTop">
	// 									<div class="item__fcTopChild">
	// 										<span class="size36">{{ formatNum(item.currMoneyOrg) }}</span> {{ item.unit }}
	// 									</div>
	// 								</div>
	// 								<div class="item__fcDown"><span class="size30">{{ formatNum(item.currMoney) }}</span> RMB</div>
	// 							</div>
	// 						</li>
	// 						<!-- 无限众筹 end -->
	// 						<!-- 支持人数 start -->
	// 						<li class="item__descList fl"
	// 							:class="{end: item.status != 2,forer: item.foreverStatus==1}">
	// 							<div class="item__descTitle">支持人数</div>
	// 							<div class="item__descData">{{ formatNum(item.support) }}</div>
	// 						</li>
	// 						<!-- 支持人数 end -->
	// 						<!-- 剩余天数 start -->
	// 						<li class="item__descList fl"
	// 							:class="{hide: item.status != 2}">
	// 							<div class="item__descTitle">剩余天数</div>
	// 							<div class="item__descData">{{ item.remainDay }}</div>
	// 						</li>
	// 						<!-- 支持人数 end -->
	// 					</ul>
	// 				</a>
	// 			</li>
	// 			<li class="item__showMore">
	// 				<button class="item__showBtn">显示更多</button>
	// 			</li>
	// 		</ul>
	// 	</div>
	// </template>
	// <script type="text/javascript">

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div id=\"gkvMainCxt\">\n\t<ul class=\"navTab clearfix\">\n\t\t<li v-for=\"item in list.tabs\" \n\t\t\tclass=\"navTab__list fl\"\n\t\t\t:class=\"{on: list.activeTabs == item}\"\n\t\t\t@click=\"listTabs(item)\">\n\t\t\t\t{{ item }}<span class=\"navTab__on\"></span>\n\t\t</li>\n\t</ul>\n\t<ul class=\"itemBox\">\n\t\t<li v-for=\"item in list.items[list.activeTitle][list.activeTabs]\"\n\t\t\tclass=\"item__list\">\n\t\t\t<a v-link=\"{name:'product', params: {productId: 25638}}\" \n\t\t\t   class=\"item__links\"\n\t\t\t   @click=\"isClick\">\n\t\t\t\t<div class=\"item__title\">\n\t\t\t\t\t{{ item.title }}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item__imgBox\" :style=\"'background-image: url('+item.img+')'\">\n\t\t\t\t\t<div class=\"item__status\"\n\t\t\t\t\t\t :class=\"'fStyle'+item.status\">{{ item.statusTxt }}</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- 国内今日已筹 -->\n\t\t\t\t<div class=\"item__dailyMoneyBox\" v-if=\"item.currencyId==1\">\n\t\t\t\t\t今日已筹&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"size40 moneyLight\">{{ formatNum(item.growthMoney) }} </span>&nbsp;&nbsp;{{ item.unit }}\n\t\t\t\t\t\t<div class=\"item__No fr\"\n\t\t\t\t\t\t\t :class=\"'bgcolor'+(item.rank>4?4:item.rank)\"\n\t\t\t\t\t\t\t v-if=\"list.activeTabs=='增速榜'\">{{ formatRank(item.rank) }}</div>\n\t\t\t\t\t\t<div class=\"fr\"\n\t\t\t\t\t\t\t v-if=\"list.activeTabs=='新上'\">{{ online(item.createDate) }}</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- 国内今日已筹 -->\n\t\t\t\t<!-- 国外今日已筹 -->\n\t\t\t\t<div class=\"item__dailyMoneyBox item__fcMoneyBox clearfix\" v-else>\n\t\t\t\t\t<div class=\"item__fundingStatus fl\">今日已筹</div>\n\t\t\t\t\t<div class=\"item__fcWrap fl\">\n\t\t\t\t\t\t<div class=\"item__fcTop\"><span class=\"moneyLight\">{{ formatNum(item.growthMoneyOrg) }}</span> {{ item.unit }}</div>\n\t\t\t\t\t\t<div class=\"item__fcDown\"><span class=\"moneyLight\">{{ formatNum(item.growthMoney) }}</span> RMB</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"fr\">\n\t\t\t\t\t\t<div class=\"item__No\"\n\t\t\t\t\t\t\t :class=\"'bgcolor'+(item.rank>4?4:item.rank)\"\n\t\t\t\t\t\t\t v-if=\"list.activeTabs=='增速榜'\">{{ formatRank(item.rank) }}</div>\n\t\t\t\t\t\t<div class=\"fr\"\n\t\t\t\t\t\t\t v-if=\"list.activeTabs=='新上'\">{{ online(item.createDate) }}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- 国外今日已筹 -->\n\t\t\t\t<ul class=\"item__descBox clearfix\">\n\t\t\t\t\t<!-- 项目进度 start -->\n\t\t\t\t\t<li class=\"item__descList fl\"\n\t\t\t\t\t\t:class=\"{end: item.status != 2}\"\n\t\t\t\t\t\tv-if=\"item.foreverStatus==0\">\n\t\t\t\t\t\t<div class=\"item__descTitle\">项目进度</div>\n\t\t\t\t\t\t<div class=\"item__descData\">{{ item.finishPer }}%</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<!-- 项目进度 end -->\n\t\t\t\t\t<!-- 无限众筹 start -->\n\t\t\t\t\t<li class=\"item__descList forer end fl\"\n\t\t\t\t\t\tv-if=\"item.foreverStatus==1\">\n\t\t\t\t\t\t<div class=\"item__descTitle\">已筹金额</div> \n\t\t\t\t\t\t<div class=\"item__descDataWrap\">\n\t\t\t\t\t\t\t<div class=\"item__fcTop\">\n\t\t\t\t\t\t\t\t<div class=\"item__fcTopChild\">\n\t\t\t\t\t\t\t\t\t<span class=\"size36\">{{ formatNum(item.currMoneyOrg) }}</span> {{ item.unit }}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"item__fcDown\"><span class=\"size30\">{{ formatNum(item.currMoney) }}</span> RMB</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<!-- 无限众筹 end -->\n\t\t\t\t\t<!-- 支持人数 start -->\n\t\t\t\t\t<li class=\"item__descList fl\"\n\t\t\t\t\t\t:class=\"{end: item.status != 2,forer: item.foreverStatus==1}\">\n\t\t\t\t\t\t<div class=\"item__descTitle\">支持人数</div>\n\t\t\t\t\t\t<div class=\"item__descData\">{{ formatNum(item.support) }}</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<!-- 支持人数 end -->\n\t\t\t\t\t<!-- 剩余天数 start -->\n\t\t\t\t\t<li class=\"item__descList fl\"\n\t\t\t\t\t\t:class=\"{hide: item.status != 2}\">\n\t\t\t\t\t\t<div class=\"item__descTitle\">剩余天数</div>\n\t\t\t\t\t\t<div class=\"item__descData\">{{ item.remainDay }}</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<!-- 支持人数 end -->\n\t\t\t\t</ul>\n\t\t\t</a>\n\t\t</li>\n\t\t<li class=\"item__showMore\">\n\t\t\t<button class=\"item__showBtn\">显示更多</button>\n\t\t</li>\n\t</ul>\n</div>\n";

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div id=\"gkvBox\" :transition=\"stack.pageDir\">\n\t<gkv-menu></gkv-menu>\n\t<l-header></l-header>\n\t<l-content></l-content>\n</div>\n";

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(66)
	__vue_script__ = __webpack_require__(68)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Platform\\Index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(87)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-dd7074ce/Index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(67);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "/** gkvHeader block start **/\n#gkvHeader {\n  width: 100%;\n  background: #fff;\n  height: auto; }\n\n.nav {\n  width: 100%;\n  height: 0.96rem;\n  border-bottom: 1px solid #ddd; }\n\n.nav__menuBox {\n  width: 4.4rem;\n  height: 100%;\n  line-height: 0.96rem;\n  margin-left: 0.3rem; }\n\n.nav__menuIcon {\n  margin-right: 0.24rem; }\n\n.nav__menuIcon .icon {\n  font-size: 0.44rem;\n  line-height: 0.92rem;\n  color: #65c3df; }\n\n.nav__menuTitle {\n  font-size: 0.30rem;\n  color: #333; }\n\n.nav__searchBox {\n  width: 2.5rem;\n  height: 100%;\n  margin-right: 0.27rem;\n  padding: 0.16rem 0rem;\n  box-sizing: border-box;\n  position: relative; }\n\n.nav__searchBox form {\n  height: 100%; }\n\n.nav__searchBox .icon {\n  position: absolute;\n  font-size: 0.35rem;\n  top: 50%;\n  left: 0.15rem;\n  line-height: 0.50rem;\n  margin-top: -0.25rem;\n  color: #e5e5e5; }\n\n.nav__search {\n  width: 100%;\n  border: 1px solid #e3e3e3;\n  border-radius: 999px;\n  box-sizing: border-box;\n  line-height: 0.64rem;\n  height: 100%;\n  font-size: 0.3rem;\n  text-indent: 0.55rem;\n  outline: none; }\n\n.navTab {\n  width: 100%;\n  height: 0.86rem;\n  margin-bottom: 0.36rem;\n  border-bottom: 1px solid #d7d7d7;\n  background-color: #fff; }\n\n.navTab__list {\n  line-height: 0.86rem;\n  height: 100%;\n  width: 33.3333333%;\n  text-align: center;\n  color: #999;\n  position: relative;\n  cursor: pointer; }\n\n.navTab__list.on {\n  color: #555; }\n\n.navTab__list.on .navTab__on {\n  width: 100%;\n  position: absolute;\n  bottom: 0rem;\n  left: 0rem;\n  height: 0.05rem;\n  background-color: #65c3df; }\n\n/** gkvHeader block end **/\n/** gkvMainCxt block start **/\n#gkvMainCxt {\n  width: 100%; }\n\n.itemBox {\n  width: 100%;\n  min-height: 15rem;\n  background-color: #e5e5e5;\n  position: relative; }\n\n.item__list {\n  width: 100%;\n  margin-top: 0.36rem;\n  background-color: #fff;\n  border-bottom: 1px solid #ddd; }\n\n.item__list:first-child {\n  margin-top: 0rem; }\n\n.item__showMore {\n  width: 100%;\n  text-align: center;\n  height: 1rem;\n  box-sizing: border-box;\n  padding: 0.2rem;\n  font-size: 0.2rem; }\n\n.item__showBtn {\n  display: block;\n  color: #555;\n  width: 70%;\n  background: transparent;\n  outline: none;\n  height: 0.6rem;\n  line-height: 0.6rem;\n  margin: auto;\n  border: 1px solid #999;\n  border-radius: 999px; }\n\n.item__searchShowBtn {\n  display: block;\n  color: #555;\n  width: 70%;\n  border: 0;\n  background-color: transparent;\n  outline: none;\n  height: 0.6rem;\n  line-height: 0.6rem;\n  margin: auto;\n  border: 1px solid #999;\n  border-radius: 999px; }\n\n.item__list.item__listTop {\n  margin-top: 0rem; }\n\n.item__links {\n  display: block;\n  width: 100%;\n  height: 100%; }\n\n.item__title {\n  width: 100%;\n  padding: 0.23rem 0.30rem;\n  box-sizing: border-box;\n  color: #333; }\n\n.item__title.item__searchTitle {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.item__imgBox {\n  height: 3.6rem;\n  position: relative;\n  background-color: #999;\n  background-position: center top;\n  background-size: 100%; }\n\n.item__img {\n  width: 100%;\n  height: 100%; }\n\n.item__status {\n  position: absolute;\n  top: 0.2rem;\n  left: 0.2rem;\n  height: 0.4rem;\n  background-color: #2380be;\n  color: #fff;\n  line-height: 0.4rem;\n  text-align: center;\n  border-radius: 999px;\n  font-size: 0.25rem;\n  padding: 0rem 0.2rem; }\n\n.item__dailyMoneyBox {\n  color: #999;\n  padding: 0.23rem 0.4rem;\n  font-size: 0.24rem;\n  border-bottom: 1px solid #ddd;\n  box-sizing: border-box;\n  line-height: 0.38rem;\n  height: 0.88rem; }\n\n.item__dailyMoneyBox.item__searchDailyMoneyBox {\n  padding: 0rem;\n  margin-top: 0.1rem;\n  border-bottom: 0;\n  height: auto;\n  font-size: 0.28rem; }\n\n.item__dailyMoneyBox.item__fcMoneyBox {\n  padding: 0rem 0.3rem;\n  height: 1.15rem;\n  line-height: 1.15rem;\n  position: relative; }\n\n.item__fcWrap {\n  line-height: 0.4rem;\n  text-align: center;\n  margin: 0.15rem 0rem 0rem 0.3rem; }\n\n.item__fcTop {\n  border-bottom: 1px solid #ddd; }\n\n.item__fcTop .moneyLight {\n  font-size: 0.36rem; }\n\n.item__fcDown .moneyLight {\n  font-size: 0.3rem; }\n\n.item__No {\n  margin-left: 0.4rem;\n  width: 0.9rem;\n  height: 0.4rem;\n  line-height: 0.4rem;\n  font-size: 0.22rem;\n  color: #fff;\n  border-radius: 999px;\n  text-align: center;\n  padding: 0rem 0.1rem;\n  background-color: #65c3df;\n  display: inline-block;\n  border: 1px solid; }\n\n.light {\n  color: #1B8EDB; }\n\n.item__descBox {\n  width: 100%;\n  height: auto;\n  line-height: 1.16rem;\n  border-bottom: 1px solid #d7d7d7;\n  padding: 0.23rem 0rem;\n  box-sizing: border-box; }\n\n.item__descList {\n  width: 33.333333%;\n  color: #999; }\n\n.item__descList.end {\n  width: 50%; }\n\n.item__descDataWrap {\n  margin: 0;\n  text-align: center;\n  line-height: 0.4rem; }\n\n.item__descDataWrap .item__fcTop {\n  border: none; }\n\n.item__fcTopChild {\n  display: inline-block;\n  padding: 0rem 0.1rem;\n  border-bottom: 1px solid #ddd; }\n\n.item__descList.forer .item__descData {\n  height: 0.82rem;\n  line-height: 0.82rem; }\n\n.item__descTitle {\n  width: 100%;\n  height: 0.26rem;\n  line-height: 0.26rem;\n  text-align: center;\n  margin-bottom: 0.16rem;\n  font-size: 0.24rem; }\n\n.item__descData {\n  width: 100%;\n  height: 0.26rem;\n  line-height: 0.26rem;\n  text-align: center;\n  font-size: 0.4rem; }\n\n/** gkvMainCxt block end **/\n/** gkvFooter block start **/\n/** gkvFooter block end **/\n/** color **/\n.blue1 {\n  color: #21a9d5 !important; }\n\n.bgblue1 {\n  background-color: #21a9d5 !important;\n  border-color: #21a9d5 !important; }\n\n.blue2 {\n  color: #50c4d7 !important; }\n\n.bgblue2 {\n  background-color: #50c4d7 !important;\n  border-color: #50c4d7 !important; }\n\n.blue3 {\n  color: #75d1e0 !important; }\n\n.bgblue3 {\n  background-color: #75d1e0 !important;\n  border-color: #75d1e0 !important; }\n\n.blue4 {\n  color: #c5f7ff !important; }\n\n.bgblue4 {\n  background-color: #c5f7ff !important;\n  border-color: #c5f7ff !important; }\n\n.gray1 {\n  color: #999; }\n\n/** color **/\n/*head block start*/\n.pf__infoHead {\n  width: 100%;\n  height: 3.57rem; }\n\n.info__infoRank1 {\n  height: 2rem;\n  box-sizing: border-box;\n  padding: 0.4rem 0.3rem;\n  color: #fff; }\n\n.info1__title {\n  line-height: 0.26rem;\n  height: 0.26rem; }\n\n.info1__infoName {\n  line-height: 0.26rem;\n  height: 0.26rem;\n  display: inline-block; }\n\n.info1__proNum {\n  margin-left: 0.2rem;\n  line-height: 0.24rem;\n  height: 0.28rem;\n  display: inline-block; }\n\n.info1__totalMoneyBox {\n  line-height: 0.65rem;\n  height: 0.65rem;\n  margin-top: 0.28rem; }\n\n.info1__totalMoney {\n  line-height: 0.65rem;\n  display: inline-block;\n  height: 0.65rem; }\n\n.info1__unit {\n  line-height: 0.26rem;\n  margin-left: 0.1rem;\n  display: inline-block;\n  height: 0.28rem; }\n\n.info__infoRank2Box {\n  padding: 0rem 0.3rem; }\n\n.info__infoRank2 {\n  color: #fff;\n  height: 1.57rem;\n  box-sizing: border-box;\n  width: 2.3rem;\n  text-align: center; }\n\n.info2__infoName {\n  margin-top: 0.2rem;\n  line-height: 0.2rem;\n  height: 0.2rem; }\n\n.info2__proNum {\n  padding-top: 0.2rem;\n  line-height: 0.2rem;\n  height: 0.2rem; }\n\n.info2__totalMoneyBox {\n  padding-top: 0.2rem;\n  line-height: 0.36rem;\n  height: 0.36rem; }\n\n.info__infoRank2:nth-child(2) .info2__infoName {\n  border-left: 1px solid #BCEAF2;\n  border-right: 1px solid #BCEAF2; }\n\n.info__infoRank2:nth-child(2) .info2__proNum {\n  border-left: 1px solid #BCEAF2;\n  border-right: 1px solid #BCEAF2; }\n\n.info__infoRank2:nth-child(2) .info2__totalMoneyBox {\n  border-left: 1px solid #BCEAF2;\n  border-right: 1px solid #BCEAF2; }\n\n/*head block start*/\n.pf__platformTabs {\n  height: 1rem;\n  line-height: 1rem;\n  background-color: #fff;\n  border-bottom: 1px solid #eee; }\n\n.pf__platformTabsList {\n  position: relative;\n  width: 50%;\n  text-align: center; }\n\n.pf__tabsBottom {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 0.08rem;\n  display: none; }\n\n.pf__platformTabsList.on .pf__tabsBottom {\n  display: block; }\n\n.pf__subPlatformTabs {\n  height: 1.1rem; }\n\n.pf__subPlatformList {\n  height: 100%;\n  padding: 0rem 0.15rem;\n  background-color: #fff; }\n\n.pf__chartsTabs {\n  height: 100%; }\n\n.pf__chartsList {\n  height: 100%;\n  color: #999;\n  width: 1.6rem;\n  margin: 0rem 0.1rem; }\n\n.pf__chartsListBtn {\n  text-align: center;\n  border: 1px solid #ddd;\n  border-radius: 999px;\n  height: 0.5rem;\n  line-height: 0.44rem;\n  margin: 0.3rem 0rem;\n  box-sizing: border-box; }\n\n.pf__chartsListBtn.bgblue3 {\n  color: #fff; }\n\n.pf__chartsBox {\n  width: 100%;\n  background-color: #fff; }\n\n.pf__charts {\n  height: 200px;\n  width: 85%;\n  margin-right: 0.3rem; }\n\n.pf__charts.on {\n  -webkit-animation: showChart .2s ease-in-out;\n          animation: showChart .2s ease-in-out; }\n\n@-webkit-keyframes showChart {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes showChart {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/*rules box*/\n.pf__rulesBox {\n  margin-top: 0.3rem; }\n\n.rules__title {\n  height: 0.88rem;\n  line-height: 0.88rem;\n  background-color: #fff; }\n\n.rules__headBox {\n  height: 0.8rem;\n  line-height: 0.8rem;\n  text-align: center; }\n\n.rules__itemListBox {\n  background-color: #fff; }\n\n.rules__itemList {\n  height: 1.8rem;\n  line-height: 1.8rem;\n  text-align: center;\n  border-bottom: 1px solid #ddd; }\n\n.rules__itemList:last-child {\n  border-bottom: none; }\n\n.rules__items0 {\n  width: 1.3rem; }\n\n.rules__items1 {\n  width: 1.3rem; }\n\n.rules__items2 {\n  width: 1.6rem; }\n\n.rules__items3 {\n  width: 1.6rem; }\n\n.rules__items4 {\n  width: 1.1rem; }\n\n.lineHeight2 {\n  line-height: 0.45rem;\n  padding: 0.46rem 0rem; }\n\n.lineHeight3 {\n  line-height: 0.45rem;\n  padding: 0.22rem 0rem; }\n\n.lineHeight4 {\n  line-height: 0.45rem;\n  padding: 0.02rem 0rem; }\n\n/*rules box*/\n/*project complete*/\n.pf__projectBox {\n  margin-top: 0.3rem; }\n\n.pj__tabsListBox {\n  height: 1rem;\n  background-color: #fff;\n  border-bottom: 1px solid #ddd; }\n\n.pj__tabsList {\n  width: 33.333%;\n  height: 1rem;\n  line-height: 1rem;\n  text-align: center;\n  position: relative; }\n\n.pj__tabsBottom {\n  height: 0.08rem;\n  display: none;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  left: 0; }\n\n.pj__tabsList.on .pj__tabsBottom {\n  display: block; }\n\n.pj__itemsListBox {\n  padding-top: 0.15rem;\n  height: 4.13rem;\n  background-color: #fff; }\n\n.pj__itemsList {\n  height: 4.13rem; }\n\n.pj__itemsBox {\n  height: 4.13rem; }\n\n.pj__items {\n  height: 0.8rem;\n  border-bottom: 1px solid #ddd; }\n\n.pj__logoBox {\n  height: 0.8rem;\n  line-height: 0.8rem;\n  font-size: 0; }\n\n.pj__logo {\n  width: 0.5rem;\n  height: 0.5rem;\n  vertical-align: middle; }\n\n.pj__completionBarBox {\n  width: 6rem;\n  height: 0.8rem;\n  position: relative;\n  margin-left: 0.3rem; }\n\n.pj__completionBar {\n  width: 6rem;\n  height: 0.4rem;\n  position: absolute;\n  top: 50%;\n  margin-top: -0.2rem;\n  line-height: 0.35rem;\n  text-indent: 0.2rem; }\n\n.pj__completionCxt {\n  position: relative;\n  z-index: 999; }\n\n.pj__currBar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 0.4rem;\n  width: 50%;\n  z-index: 0; }\n\n.pj__itemsFooter {\n  height: 0.9rem;\n  line-height: 0.9rem; }\n\n/*project complete*/\n", ""]);

	// exports


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Menu = __webpack_require__(37);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _Header = __webpack_require__(69);

	var _Header2 = _interopRequireDefault(_Header);

	var _Content = __webpack_require__(72);

	var _Content2 = _interopRequireDefault(_Content);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		name: 'Platform',
		vuex: {
			getters: {
				stack: function stack(_ref) {
					var router = _ref.router;
					return router.stack;
				}
			}
		},
		components: {
			'p-header': _Header2.default,
			'p-content': _Content2.default,
			'gkv-menu': _Menu2.default
		}
	};
	// </script>
	//
	// <template>
	// 	<div id="gkvBox" :transition="stack.pageDir">
	// 		<p-header></p-header>
	// 		<p-content></p-content>
	// 		<gkv-menu></gkv-menu>
	// 	</div>
	// </template>
	//
	// <style lang="sass" type="text/sass">
	// 	@import "../../sass/productPage";
	// 	@import "../../sass/platformPage";
	// </style>
	// <script type="text/javascript">

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(70)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Platform\\Header.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(71)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-38b16d54/Header.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _actions = __webpack_require__(15);

	exports.default = {
		name: 'Common-Header',
		vuex: {
			actions: {
				isShowMenu: _actions.isShowMenu,
				isClick: _actions.isClick
			}
		}
	};

	// </script>
	//
	// <template>
	// 	<div id="gkvHeader">
	// 		<div class="nav clearfix">
	// 			<div class="nav__menuBox fl clearfix" @click="isShowMenu">
	// 				<div class="nav__menuIcon fl">
	// 					<i class="icon iconfont"></i>
	// 				</div>
	// 				<div class="nav__menuTitle fl">
	// 					平台比较
	// 				</div>
	// 			</div>
	// 			<div class="nav__searchBox fr"
	// 				 @click="isClick"
	// 				 v-link="{path: '/search'}">
	// 				<i class="icon iconfont"></i>
	// 				<input class="nav__search" name="keyword" placeholder="搜索">
	// 			</div>
	// 		</div>
	// 	</div>
	// </template>
	// <script type="text/javascript">

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div id=\"gkvHeader\">\n\t<div class=\"nav clearfix\">\n\t\t<div class=\"nav__menuBox fl clearfix\" @click=\"isShowMenu\">\n\t\t\t<div class=\"nav__menuIcon fl\">\n\t\t\t\t<i class=\"icon iconfont\"></i>\n\t\t\t</div>\n\t\t\t<div class=\"nav__menuTitle fl\">\n\t\t\t\t平台比较\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"nav__searchBox fr\"\n\t\t\t @click=\"isClick\"\n\t\t\t v-link=\"{path: '/search'}\">\n\t\t\t<i class=\"icon iconfont\"></i>\n\t\t\t<input class=\"nav__search\" name=\"keyword\" placeholder=\"搜索\">\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(73)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Platform\\Content.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(86)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-361b9600/Content.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _CRank = __webpack_require__(74);

	var _CRank2 = _interopRequireDefault(_CRank);

	var _CChart = __webpack_require__(77);

	var _CChart2 = _interopRequireDefault(_CChart);

	var _CRules = __webpack_require__(80);

	var _CRules2 = _interopRequireDefault(_CRules);

	var _CProject = __webpack_require__(83);

	var _CProject2 = _interopRequireDefault(_CProject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <script type="text/javascript">
	exports.default = {
		components: {
			'p-rank': _CRank2.default,
			'p-tabs': _CChart2.default,
			'p-rules': _CRules2.default,
			'p-project': _CProject2.default
		}
	};
	// </script>
	//
	// <template>
	// 	<div id="gkvPlatform">
	// 		<!-- head -->
	// 		<p-rank></p-rank>
	// 		<!-- head -->
	// 		<!-- chart tabs -->
	// 		<p-tabs></p-tabs>
	// 		<!-- chart tabs -->
	// 		<!-- rules -->
	// 		<p-rules></p-rules>
	// 		<!-- rules -->
	// 		<!-- project -->
	// 		<p-project></p-project>
	// 		<!-- project -->
	// 	</div>
	// </template>

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(75)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Platform\\C-rank.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(76)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-057a0d9f/C-rank.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 75 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <script type="text/javascript">
	exports.default = {
		vuex: {
			getters: {
				platform: function platform(_ref) {
					var _platform = _ref.platform;
					return _platform;
				}
			}
		}
	};
	// </script>
	//
	// <template>
	// 	<div class="pf__infoHead clearfix">
	// 		<div class="info__infoRank1 bgblue3">
	// 			<div class="info1__title size30">
	// 				<font class="info1__infoName">{{ platform.rankTop.name }}</font>
	// 				<font class="info1__proNum">{{ platform.rankTop.count }}</font>
	// 			</div>
	// 			<div class="info1__totalMoneyBox">
	// 				<font class="info1__totalMoney size80">{{ platform.rankTop.money }}</font> 
	// 				<font class="info1__unit size30">{{ platform.rankTop.unit }}</font>
	// 			</div>
	// 		</div>
	// 		<div class="info__infoRank2Box bgblue2 clearfix">
	// 			<div v-for="item in platform.rank" class="info__infoRank2 fl">
	// 				<div class="info2__infoName size24">{{ item.name }}</div>
	// 				<div class="info2__proNum size20">{{ item.count }}</div>
	// 				<div class="info2__totalMoneyBox">
	// 					<font class="info2__totalMoney size36">{{ item.money }}</font> 
	// 					<font class="info2__unit size24">{{ item.unit }}</font>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</div>
	// </template>

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n<div class=\"pf__infoHead clearfix\">\n\t<div class=\"info__infoRank1 bgblue3\">\n\t\t<div class=\"info1__title size30\">\n\t\t\t<font class=\"info1__infoName\">{{ platform.rankTop.name }}</font>\n\t\t\t<font class=\"info1__proNum\">{{ platform.rankTop.count }}</font>\n\t\t</div>\n\t\t<div class=\"info1__totalMoneyBox\">\n\t\t\t<font class=\"info1__totalMoney size80\">{{ platform.rankTop.money }}</font> \n\t\t\t<font class=\"info1__unit size30\">{{ platform.rankTop.unit }}</font>\n\t\t</div>\n\t</div>\n\t<div class=\"info__infoRank2Box bgblue2 clearfix\">\n\t\t<div v-for=\"item in platform.rank\" class=\"info__infoRank2 fl\">\n\t\t\t<div class=\"info2__infoName size24\">{{ item.name }}</div>\n\t\t\t<div class=\"info2__proNum size20\">{{ item.count }}</div>\n\t\t\t<div class=\"info2__totalMoneyBox\">\n\t\t\t\t<font class=\"info2__totalMoney size36\">{{ item.money }}</font> \n\t\t\t\t<font class=\"info2__unit size24\">{{ item.unit }}</font>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(78)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Platform\\C-chart.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(79)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-30e801fb/C-chart.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _actions = __webpack_require__(15);

	exports.default = {
		vuex: {
			getters: {
				tabs: function tabs(_ref) {
					var platform = _ref.platform;
					return platform.tabs;
				}
			},
			actions: {
				clickTabs: _actions.clickTabs,
				clickPlatform: _actions.clickPlatform
			}
		},
		ready: function ready() {
			var _self = this;
			setTimeout(function () {
				hcCharts({
					id: 'pf__charts',
					dataName: _self.tabs.chartDate,
					data: _self.tabs.activeData,
					tabName: '',
					xColor: '#999',
					xSize: '14px',
					yColor: '#999',
					x_vTop: 25,
					bgColor: 'transparent'
				});

				document.getElementById('pf__charts').className += ' on';
			}, 600);
		}
	};
	// </script>
	//
	// <template>
	// 	<ul class="pf__platformTabs clearfix">
	// 		<li v-for="item in tabs.chartData" 
	// 			class="pf__platformTabsList size28 fl on"
	// 			@click="clickTabs($key)">
	// 			{{ $key }}
	// 			<div class="pf__tabsBottom bgblue2"
	// 				 :class="{hide: $key != tabs.activeTab}">
	// 			</div>
	// 		</li>
	// 	</ul>
	// 	<ul class="pf__subPlatformTabs">
	// 		<li v-for="($partKey, item) in tabs.chartData" 
	// 			class="pf__subPlatformList" 
	// 			:class="{hide: $partKey != tabs.activeTab}">
	// 			<ul class="pf__chartsTabs clearfix">
	// 				<li v-for="subItem in item" class="pf__chartsList fl">
	// 					<div class="pf__chartsListBtn size28"
	// 						 :class="{bgblue3: $partKey==tabs.activeTab&&$key==tabs.activePF}"
	// 						 @click="clickPlatform($key)">
	// 						 	{{ $key }}
	// 					</div>
	// 				</li>
	// 			</ul>
	// 		</li>
	// 	</ul>
	// 	<div class="pf__chartsBox clearfix">
	// 		<div id="pf__charts" class="pf__charts fr">
	// 		</div>
	// 	</div>
	// </template>
	// <script type="text/javascript">

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<ul class=\"pf__platformTabs clearfix\">\n\t<li v-for=\"item in tabs.chartData\" \n\t\tclass=\"pf__platformTabsList size28 fl on\"\n\t\t@click=\"clickTabs($key)\">\n\t\t{{ $key }}\n\t\t<div class=\"pf__tabsBottom bgblue2\"\n\t\t\t :class=\"{hide: $key != tabs.activeTab}\">\n\t\t</div>\n\t</li>\n</ul>\n<ul class=\"pf__subPlatformTabs\">\n\t<li v-for=\"($partKey, item) in tabs.chartData\" \n\t\tclass=\"pf__subPlatformList\" \n\t\t:class=\"{hide: $partKey != tabs.activeTab}\">\n\t\t<ul class=\"pf__chartsTabs clearfix\">\n\t\t\t<li v-for=\"subItem in item\" class=\"pf__chartsList fl\">\n\t\t\t\t<div class=\"pf__chartsListBtn size28\"\n\t\t\t\t\t :class=\"{bgblue3: $partKey==tabs.activeTab&&$key==tabs.activePF}\"\n\t\t\t\t\t @click=\"clickPlatform($key)\">\n\t\t\t\t\t \t{{ $key }}\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t</li>\n</ul>\n<div class=\"pf__chartsBox clearfix\">\n\t<div id=\"pf__charts\" class=\"pf__charts fr\">\n\t</div>\n</div>\n";

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(81)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Platform\\C-rules.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(82)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-57013e94/C-rules.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 81 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <script type="text/javascript">
	exports.default = {
		vuex: {
			getters: {
				rules: function rules(_ref) {
					var platform = _ref.platform;
					return platform.rules;
				}
			}
		}
	};
	// </script>
	//
	// <template>
	// 	<div class="pf__rulesBox">
	// 		<div class="rules__title container size36">{{ rules.title }}</div>
	// 		<ul class="rules__headBox container size28 clearfix bgblue4">
	// 			<li v-for="item in rules.tableHeader" 
	// 				:class="'rules__items'+$index"
	// 				class="fl">{{ item }}</li>
	// 		</ul>
	// 		<ul class="rules__itemListBox container size28 clearfix">
	// 			<li v-for="item in rules.tableDesc" class="rules__itemList size26">
	// 				<ul class="rules__itemBox">
	// 					<li class="rules__items0 fl">{{item.name}}</li>
	// 					<li class="rules__items1 gray1 fl">{{item.target}}</li>
	// 					<li :class="'lineHeight'+item.charge.line" class="rules__items2 gray1 fl">
	// 						<template v-for="ratio in item.charge.ratio">
	// 							{{ ratio }} <br v-if="$index!=item.charge.ratio.length-1" />
	// 						</template>
	// 					</li>
	// 					<li :class="'lineHeight'+item.payment.line" class="rules__items3 gray1 fl">
	// 						<template v-for="mode in item.payment.mode">
	// 							{{ mode }} <br v-if="$index!=item.payment.mode.length-1"/>
	// 						</template>
	// 					</li>
	// 					<li class="rules__items4 gray1 fl">
	// 						境内
	// 					</li>
	// 				</ul>
	// 			</li>
	// 		</ul>
	// 	</div>
	// </template>

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n<div class=\"pf__rulesBox\">\n\t<div class=\"rules__title container size36\">{{ rules.title }}</div>\n\t<ul class=\"rules__headBox container size28 clearfix bgblue4\">\n\t\t<li v-for=\"item in rules.tableHeader\" \n\t\t\t:class=\"'rules__items'+$index\"\n\t\t\tclass=\"fl\">{{ item }}</li>\n\t</ul>\n\t<ul class=\"rules__itemListBox container size28 clearfix\">\n\t\t<li v-for=\"item in rules.tableDesc\" class=\"rules__itemList size26\">\n\t\t\t<ul class=\"rules__itemBox\">\n\t\t\t\t<li class=\"rules__items0 fl\">{{item.name}}</li>\n\t\t\t\t<li class=\"rules__items1 gray1 fl\">{{item.target}}</li>\n\t\t\t\t<li :class=\"'lineHeight'+item.charge.line\" class=\"rules__items2 gray1 fl\">\n\t\t\t\t\t<template v-for=\"ratio in item.charge.ratio\">\n\t\t\t\t\t\t{{ ratio }} <br v-if=\"$index!=item.charge.ratio.length-1\" />\n\t\t\t\t\t</template>\n\t\t\t\t</li>\n\t\t\t\t<li :class=\"'lineHeight'+item.payment.line\" class=\"rules__items3 gray1 fl\">\n\t\t\t\t\t<template v-for=\"mode in item.payment.mode\">\n\t\t\t\t\t\t{{ mode }} <br v-if=\"$index!=item.payment.mode.length-1\"/>\n\t\t\t\t\t</template>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"rules__items4 gray1 fl\">\n\t\t\t\t\t境内\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</li>\n\t</ul>\n</div>\n";

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(84)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Platform\\C-project.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(85)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-62525b14/C-project.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _actions = __webpack_require__(15);

	exports.default = {
		vuex: {
			getters: {
				project: function project(_ref) {
					var platform = _ref.platform;
					return platform.project;
				}
			},
			actions: {
				projectTabs: _actions.projectTabs
			}
		},
		methods: {
			formatMoney: function formatMoney(money) {
				var temp = (money + '').split('').reverse();
				var newMoney = '',
				    endMoney = '';
				while (temp.length > 3) {
					newMoney += temp.splice(0, 3).join('') + ',';
				}
				newMoney += temp.join('');
				endMoney = newMoney.split('').reverse().join('');
				return endMoney;
			}
		}
	};
	// </script>
	//
	// <template>
	// 	<div class="pf__projectBox">
	// 		<ul class="pj__tabsListBox clearfix">
	// 			<li v-for="item in project.list"
	// 				class="pj__tabsList size28 fl" 
	// 				:class="{on: $key == project.activeTab}"
	// 				@click="projectTabs($key)">
	// 				{{ $key }}
	// 				<div class="pj__tabsBottom bgblue2"></div>
	// 			</li>
	// 		</ul>
	// 		<ul class="pj__itemsListBox">
	// 			<li v-for="item in project.list"
	// 				class="pj__itemsList"
	// 				:class="{hide: $key != project.activeTab}">
	// 				<ul class="pj__itemsBox container">
	// 					<li v-for="pfDesc in item"
	// 						class="pj__items clearfix">
	// 						<div class="pj__logoBox fl">
	// 							<img :src="'https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/platformPage/'+pfDesc.website+'.png'" alt="" class="pj__logo">
	// 						</div>
	// 						<div class="pj__completionBarBox fl">
	// 							<div class="pj__completionBar">
	// 								<font class="pj__completionCxt size26">
	// 									完成率{{ formatMoney(pfDesc.finishPer) }}%
	// 								</font>
	// 								<div class="pj__currBar bgblue4" style="width:9.789%"></div>
	// 							</div>
	// 						</div>
	// 					</li>
	// 					<li class="pj__itemsFooter size28 gray1">
	// 						{{ project.standard[$index] }}
	// 					</li>
	// 				</ul>
	// 			</li>
	// 		</ul>
	// 	</div>
	// </template>
	// <script type="text/javascript">

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"pf__projectBox\">\n\t<ul class=\"pj__tabsListBox clearfix\">\n\t\t<li v-for=\"item in project.list\"\n\t\t\tclass=\"pj__tabsList size28 fl\" \n\t\t\t:class=\"{on: $key == project.activeTab}\"\n\t\t\t@click=\"projectTabs($key)\">\n\t\t\t{{ $key }}\n\t\t\t<div class=\"pj__tabsBottom bgblue2\"></div>\n\t\t</li>\n\t</ul>\n\t<ul class=\"pj__itemsListBox\">\n\t\t<li v-for=\"item in project.list\"\n\t\t\tclass=\"pj__itemsList\"\n\t\t\t:class=\"{hide: $key != project.activeTab}\">\n\t\t\t<ul class=\"pj__itemsBox container\">\n\t\t\t\t<li v-for=\"pfDesc in item\"\n\t\t\t\t\tclass=\"pj__items clearfix\">\n\t\t\t\t\t<div class=\"pj__logoBox fl\">\n\t\t\t\t\t\t<img :src=\"'https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/platformPage/'+pfDesc.website+'.png'\" alt=\"\" class=\"pj__logo\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"pj__completionBarBox fl\">\n\t\t\t\t\t\t<div class=\"pj__completionBar\">\n\t\t\t\t\t\t\t<font class=\"pj__completionCxt size26\">\n\t\t\t\t\t\t\t\t完成率{{ formatMoney(pfDesc.finishPer) }}%\n\t\t\t\t\t\t\t</font>\n\t\t\t\t\t\t\t<div class=\"pj__currBar bgblue4\" style=\"width:9.789%\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"pj__itemsFooter size28 gray1\">\n\t\t\t\t\t{{ project.standard[$index] }}\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</li>\n\t</ul>\n</div>\n";

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div id=\"gkvPlatform\">\n\t<!-- head -->\n\t<p-rank></p-rank>\n\t<!-- head -->\n\t<!-- chart tabs -->\n\t<p-tabs></p-tabs>\n\t<!-- chart tabs -->\n\t<!-- rules -->\n\t<p-rules></p-rules>\n\t<!-- rules -->\n\t<!-- project -->\n\t<p-project></p-project>\n\t<!-- project -->\n</div>\n";

/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div id=\"gkvBox\" :transition=\"stack.pageDir\">\n\t<p-header></p-header>\n\t<p-content></p-content>\n\t<gkv-menu></gkv-menu>\n</div>\n";

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(89)
	__vue_script__ = __webpack_require__(91)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Article\\Index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(98)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5806846c/Index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(90);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "#gkvBox {\n  min-height: 100%; }\n\n#gkvAd {\n  position: absolute;\n  top: 0.98rem; }\n\n.ad__tabsBox {\n  width: 1.8rem; }\n\n.ad__tabsList {\n  height: 1.5rem;\n  text-align: center;\n  padding-top: 0.2rem;\n  box-sizing: border-box;\n  background-color: #e5e5e5;\n  color: #555; }\n\n.ad__tabsList.on {\n  background-color: #fff;\n  color: #333; }\n\n.ad__tabsImgBox {\n  width: 0.4rem;\n  height: 0.51rem;\n  margin: auto;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 100% auto; }\n\n.ad__tabsImgBox1 {\n  background-image: url(\"https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/adPage/11.png\"); }\n\n.ad__tabsList.on .ad__tabsImgBox1 {\n  background-image: url(\"https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/adPage/12.png\"); }\n\n.ad__tabsImgBox2 {\n  background-image: url(\"https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/adPage/21.png\"); }\n\n.ad__tabsList.on .ad__tabsImgBox2 {\n  background-image: url(\"https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/adPage/22.png\"); }\n\n.ad__tabsImgBox3 {\n  background-image: url(\"https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/adPage/31.png\"); }\n\n.ad__tabsList.on .ad__tabsImgBox3 {\n  background-image: url(\"https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/adPage/32.png\"); }\n\n.ad__tabsImgBox4 {\n  background-image: url(\"https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/adPage/41.png\"); }\n\n.ad__tabsList.on .ad__tabsImgBox4 {\n  background-image: url(\"https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/adPage/42.png\"); }\n\n.ad__tabsImgBox5 {\n  background-image: url(\"https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/adPage/51.png\"); }\n\n.ad__tabsList.on .ad__tabsImgBox5 {\n  background-image: url(\"https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/adPage/52.png\"); }\n\n.ad__tabsImgBox6 {\n  background-image: url(\"https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/adPage/61.png\"); }\n\n.ad__tabsList.on .ad__tabsImgBox6 {\n  background-image: url(\"https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/adPage/62.png\"); }\n\n.ad__tabsTextBox {\n  margin-top: 0.2rem;\n  line-height: 0.26rem; }\n\n.ad__contentsBox {\n  background-color: #fff;\n  min-height: 100%; }\n\n.ad__contentsList {\n  margin-left: 0.5rem;\n  width: 5.2rem; }\n\n.ad__subList {\n  padding-right: 0.5rem;\n  padding-bottom: 0.6rem; }\n\n.ad__subList:last-child {\n  padding-bottom: 0rem; }\n\n.ad__subListTitle {\n  height: 1.1rem;\n  line-height: 1.1rem;\n  border-bottom: 1px solid #ddd; }\n\n.ad__subListDesc {\n  border-bottom: 1px solid #ddd; }\n\n.ad__contentsList .ad__subList:last-child .ad__subListDesc:last-child {\n  border-bottom: 1px solid #fff; }\n\n.ad__subListDescText {\n  height: 1.6rem;\n  display: table-cell;\n  vertical-align: middle;\n  color: #6e6e6e; }\n\n.ad__moreBtnBox {\n  padding: 0.3rem 0rem; }\n\n.ad__moreBtn {\n  display: block;\n  height: 0.5rem;\n  width: 1.8rem;\n  border: 1px solid #ddd;\n  line-height: 0.5rem;\n  text-align: center;\n  margin: auto;\n  background-color: #fff;\n  border-radius: 999px;\n  color: #6e6e6e;\n  outline: none; }\n", ""]);

	// exports


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Menu = __webpack_require__(37);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _Header = __webpack_require__(92);

	var _Header2 = _interopRequireDefault(_Header);

	var _Content = __webpack_require__(95);

	var _Content2 = _interopRequireDefault(_Content);

	var _actions = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <script type="text/javascript">
	exports.default = {
		vuex: {
			getters: {
				stack: function stack(_ref) {
					var router = _ref.router;
					return router.stack;
				}
			},
			actions: {
				isShowMenu: _actions.isShowMenu
			}
		},
		components: {
			'a-header': _Header2.default,
			'gkv-menu': _Menu2.default,
			'a-content': _Content2.default
		}
	};
	// </script>
	//
	// <template>
	// 	<div id="gkvBox" :transition="stack.pageDir">
	// 		<gkv-menu></gkv-menu>
	// 		<a-header></a-header>
	// 		<a-content></a-content>
	// 	</div>
	// </template>
	//
	// <style lang="sass" type="text/sass">
	// 	@import "../../sass/adPage";
	// </style>

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(93)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Article\\Header.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(94)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-167f363a/Header.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _actions = __webpack_require__(15);

	exports.default = {
		vuex: {
			actions: {
				isShowMenu: _actions.isShowMenu,
				isClick: _actions.isClick
			}
		}
	};
	// </script>
	//
	// <template>
	// 	<div id="gkvHeader">
	// 		<div class="nav clearfix">
	// 			<div class="nav__menuBox fl clearfix" @click="isShowMenu">
	// 				<div class="nav__menuIcon fl">
	// 					<i class="icon iconfont"></i>
	// 				</div>
	// 				<div class="nav__menuTitle fl">
	// 					众筹百科
	// 				</div>
	// 			</div>
	// 			<div class="nav__searchBox fr"
	// 				 @click="isClick"
	// 				 v-link="{path: '/search'}">
	// 				<i class="icon iconfont"></i>
	// 				<input class="nav__search" name="keyword" placeholder="搜索">
	// 			</div>
	// 		</div>
	// 	</div>
	// </template>
	// <script type="text/javascript">

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n<div id=\"gkvHeader\">\n\t<div class=\"nav clearfix\">\n\t\t<div class=\"nav__menuBox fl clearfix\" @click=\"isShowMenu\">\n\t\t\t<div class=\"nav__menuIcon fl\">\n\t\t\t\t<i class=\"icon iconfont\"></i>\n\t\t\t</div>\n\t\t\t<div class=\"nav__menuTitle fl\">\n\t\t\t\t众筹百科\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"nav__searchBox fr\"\n\t\t\t @click=\"isClick\"\n\t\t\t v-link=\"{path: '/search'}\">\n\t\t\t<i class=\"icon iconfont\"></i>\n\t\t\t<input class=\"nav__search\" name=\"keyword\" placeholder=\"搜索\">\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(96)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Article\\Content.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(97)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-4825ec13/Content.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _actions = __webpack_require__(15);

	exports.default = {
		vuex: {
			getters: {
				category: function category(_ref) {
					var article = _ref.article;
					return article.category;
				}
			},
			actions: {
				artTabs: _actions.artTabs
			}
		}
	};
	// </script>
	//
	// <template>
	// 	<div id="gkvAd" class="clearfix">
	// 		<ul class="ad__tabsBox fl">
	// 			<li v-for="item in category.tabs" 
	// 				class="ad__tabsList"
	// 				:class="{on: category.activeTabs == $index}"
	// 				@click="artTabs($index)">
	// 				<div class="ad__tabsImgBox ad__tabsImgBox1"></div>
	// 				<div class="ad__tabsTextBox size30">
	// 					<span class="ad__tabsText">{{ item }}</span>
	// 				</div>
	// 			</li>
	// 		</ul>
	// 		<ul class="ad__contentsBox fl size28">
	// 			<li v-for="item in category.content"
	// 				class="ad__contentsList"
	// 				:class="{hide: category.activeTabs != $index}">
	// 				<dl v-for="panel in item.list" class="ad__subList">
	// 					<dt class="ad__subListTitle ad__typeId" type-id="0">
	// 						{{panel.title}}
	// 					</dt>
	// 					<dd v-for="subItem in panel.article"
	// 						class="ad__subListDesc" :data-id="subItem.pkId">
	// 						<a :href="subItem.link"  class="ad__subListDescText">
	// 							{{ subItem.listTitle }}
	// 						</a>
	// 					</dd>
	// 				</dl>
	// 			</li>
	// 		</ul>
	// 	</div>
	// </template>
	// <script type="text/javascript">

/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div id=\"gkvAd\" class=\"clearfix\">\n\t<ul class=\"ad__tabsBox fl\">\n\t\t<li v-for=\"item in category.tabs\" \n\t\t\tclass=\"ad__tabsList\"\n\t\t\t:class=\"{on: category.activeTabs == $index}\"\n\t\t\t@click=\"artTabs($index)\">\n\t\t\t<div class=\"ad__tabsImgBox ad__tabsImgBox1\"></div>\n\t\t\t<div class=\"ad__tabsTextBox size30\">\n\t\t\t\t<span class=\"ad__tabsText\">{{ item }}</span>\n\t\t\t</div>\n\t\t</li>\n\t</ul>\n\t<ul class=\"ad__contentsBox fl size28\">\n\t\t<li v-for=\"item in category.content\"\n\t\t\tclass=\"ad__contentsList\"\n\t\t\t:class=\"{hide: category.activeTabs != $index}\">\n\t\t\t<dl v-for=\"panel in item.list\" class=\"ad__subList\">\n\t\t\t\t<dt class=\"ad__subListTitle ad__typeId\" type-id=\"0\">\n\t\t\t\t\t{{panel.title}}\n\t\t\t\t</dt>\n\t\t\t\t<dd v-for=\"subItem in panel.article\"\n\t\t\t\t\tclass=\"ad__subListDesc\" :data-id=\"subItem.pkId\">\n\t\t\t\t\t<a :href=\"subItem.link\"  class=\"ad__subListDescText\">\n\t\t\t\t\t\t{{ subItem.listTitle }}\n\t\t\t\t\t</a>\n\t\t\t\t</dd>\n\t\t\t</dl>\n\t\t</li>\n\t</ul>\n</div>\n";

/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div id=\"gkvBox\" :transition=\"stack.pageDir\">\n\t<gkv-menu></gkv-menu>\n\t<a-header></a-header>\n\t<a-content></a-content>\n</div>\n";

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(100)
	__vue_script__ = __webpack_require__(102)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Category\\Index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(109)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-75212864/Index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(101);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n#gkvIndustry {\n  margin-top: 0.35rem; }\n\n.industry__list {\n  width: 100%;\n  height: 3rem;\n  position: relative;\n  margin-bottom: 0.35rem; }\n\n/** 正面 start **/\n.insdustry__positive {\n  position: absolute;\n  height: 100%;\n  background-color: #fff;\n  z-index: 1; }\n\n.idy__imgBox {\n  width: 3rem;\n  height: 3rem;\n  position: relative; }\n\n.idy__imgMask {\n  width: 3rem;\n  height: 3rem;\n  line-height: 3rem;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0rem 0.5rem;\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  text-align: center;\n  position: absolute;\n  top: 0rem;\n  left: 0rem;\n  color: #fff;\n  font-size: 0.36rem;\n  background-color: rgba(0, 0, 0, 0.2); }\n\n.idy__img {\n  width: 100%;\n  height: 100%;\n  vertical-align: middle; }\n\n.idy__descBox {\n  width: 4.5rem;\n  padding: 0.26rem 0rem 0.3rem 0.3rem;\n  color: #999;\n  font-size: 0.24rem;\n  box-sizing: border-box;\n  height: 3rem; }\n\n@media (max-width: 320px) {\n  .idy__descBox {\n    padding-left: 0.2rem; } }\n\n.idy__titleBox {\n  line-height: 0.3rem;\n  height: 0.3rem; }\n\n.idy__No {\n  margin-left: 0.4rem;\n  width: 0.9rem;\n  height: 0.3rem;\n  line-height: 0.3rem;\n  font-size: 0.22rem;\n  color: #fff;\n  border-radius: 999px;\n  text-align: center;\n  display: inline-block; }\n\n.idy__titleBox .icon {\n  font-size: 0.4rem;\n  margin-left: 1.24rem; }\n\n.idy__money {\n  font-size: 0.36rem;\n  color: #333;\n  line-height: 0.36rem;\n  height: 0.38rem;\n  margin-top: 0.22rem;\n  margin-bottom: 0.43rem; }\n\n.idy__moneyUnit {\n  font-size: 0.24rem;\n  color: #999; }\n\n.idy__cxtLeftBox {\n  font-size: 0.24rem;\n  margin-right: 0.2rem; }\n\n.idy__cxtList {\n  height: 0.26rem;\n  line-height: 0.24rem;\n  margin-bottom: 0.17rem; }\n\n.idy__cxtList .idy__moneyUnit {\n  font-size: 0.22rem; }\n\n.idy__cxtList .idy__No {\n  margin-left: 0rem;\n  border: 1px solid; }\n\n.idy__cxtMiddleBox {\n  margin-right: 0.2rem; }\n\n/** 正面 start **/\n/** 反面 start **/\n.insdustry__mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 10;\n  max-width: 7.5rem;\n  display: none;\n  margin: auto; }\n\n.insdustry__opposite {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 4rem;\n  height: 3rem;\n  background-color: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  padding: 0.57rem 0.24rem;\n  box-sizing: border-box;\n  border-radius: 3px; }\n\n.industry__list.on .insdustry__opposite {\n  animation-name: opacity1;\n  animation-duration: 1s;\n  animation-fill-mode: forwards;\n  -webkit-animation-name: opacity1;\n  -webkit-animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards; }\n\n.industry__list.off .insdustry__opposite {\n  animation-name: opacity0;\n  animation-duration: 1s;\n  animation-fill-mode: forwards;\n  -webkit-animation-name: opacity0;\n  -webkit-animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards; }\n\n/** 反面 end **/\n/** 反转 **/\n@-webkit-keyframes opacity1 {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes opacity1 {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@-webkit-keyframes opacity0 {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n@keyframes opacity0 {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n/*.rotateTurn {\r\n\tanimation-name: rY;\r\n\tanimation-duration: 1s;\r\n\tanimation-fill-mode: forwards;\r\n\t-webkit-animation-name: rY;\r\n\t-webkit-animation-duration: 1s;\r\n\t-webkit-animation-fill-mode: forwards;\r\n}\r\n.clearTurn {\r\n\tanimation-name: cY;\r\n\tanimation-duration: 1s;\r\n\tanimation-fill-mode: forwards;\r\n\t-webkit-animation-name: cY;\r\n\t-webkit-animation-duration: 1s;\r\n\t-webkit-animation-fill-mode: forwards;\r\n}\r\n.rotateTurn .insdustry__opposite {\r\n\tanimation-name: opacity1;\r\n\tanimation-duration: 1s;\r\n\tanimation-fill-mode: forwards;\r\n\t-webkit-animation-name: opacity1;\r\n\t-webkit-animation-duration: 1s;\r\n\t-webkit-animation-fill-mode: forwards;\r\n}\r\n.clearTurn .insdustry__opposite {\r\n\tanimation-name: opacity0;\r\n\tanimation-duration: 1s;\r\n\tanimation-fill-mode: forwards;\r\n\t-webkit-animation-name: opacity0;\r\n\t-webkit-animation-duration: 1s;\r\n\t-webkit-animation-fill-mode: forwards;\r\n}\r\n@keyframes rY {\r\n\tfrom {\r\n\t\ttransform: rotateY(0deg);\r\n\t} to {\r\n\t\ttransform: rotateY(180deg);\r\n\t}\r\n}\r\n@-webkit-keyframes rY {\r\n\tfrom {\r\n\t\t-webkit-transform: rotateY(0deg);\r\n\t} to {\r\n\t\t-webkit-transform: rotateY(180deg);\r\n\t}\r\n}\r\n@keyframes cY {\r\n\tfrom {\r\n\t\t-webkit-transform: rotateY(180deg);\r\n\t} to {\r\n\t\t-webkit-transform: rotateY(0deg);\r\n\t}\r\n}\r\n@-webkit-keyframes cY {\r\n\tfrom {\r\n\t\t-webkit-transform: rotateY(180deg);\r\n\t} to {\r\n\t\t-webkit-transform: rotateY(0deg);\r\n\t}\r\n}\r\n@-webkit-keyframes opacity1 {\r\n\tfrom {\r\n\t\topacity: 0;\r\n\t} to {\r\n\t\topacity: 1;\r\n\t}\r\n}\r\n@-webkit-keyframes opacity0 {\r\n\tfrom {\r\n\t\topacity: 1;\r\n\t} to {\r\n\t\topacity: 0;\r\n\t}\r\n}*/\n/** 反转 **/\n", ""]);

	// exports


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Menu = __webpack_require__(37);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _Header = __webpack_require__(103);

	var _Header2 = _interopRequireDefault(_Header);

	var _Content = __webpack_require__(106);

	var _Content2 = _interopRequireDefault(_Content);

	var _actions = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <script type="text/javascript">
	exports.default = {
		vuex: {
			getters: {
				stack: function stack(_ref) {
					var router = _ref.router;
					return router.stack;
				}
			},
			actions: {
				isShowMenu: _actions.isShowMenu
			}
		},
		components: {
			'gkv-menu': _Menu2.default,
			'c-header': _Header2.default,
			'c-content': _Content2.default
		}
	};
	// </script>
	//
	// <template>
	// 	<div id="gkvBox" :transition="stack.pageDir">
	// 		<gkv-menu></gkv-menu>
	// 		<c-header></c-header>
	// 		<c-content></c-content>
	// 	</div>
	// </template>
	//
	// <style lang="sass" type="text/sass">
	// 	@import "../../sass/category";	
	// </style>

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(104)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Category\\Header.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(105)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-7afa3feb/Header.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _actions = __webpack_require__(15);

	exports.default = {
		name: 'Common-Header',
		vuex: {
			actions: {
				isShowMenu: _actions.isShowMenu,
				isClick: _actions.isClick
			}
		}
	};
	// </script>
	//
	// <template>
	// 	<div id="gkvHeader">
	// 		<div class="nav clearfix">
	// 			<div class="nav__menuBox fl clearfix" @click="isShowMenu">
	// 				<div class="nav__menuIcon fl">
	// 					<i class="icon iconfont"></i>
	// 				</div>
	// 				<div class="nav__menuTitle fl">
	// 					行业
	// 				</div>
	// 			</div>
	// 			<div class="nav__searchBox fr"
	// 				 @click="isClick"
	// 				 v-link="{path: '/search'}">
	// 				<i class="icon iconfont"></i>
	// 				<input class="nav__search" name="keyword" placeholder="搜索">
	// 			</div>
	// 		</div>
	// 	</div>
	// </template>
	// <script type="text/javascript">

/***/ },
/* 105 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div id=\"gkvHeader\">\n\t<div class=\"nav clearfix\">\n\t\t<div class=\"nav__menuBox fl clearfix\" @click=\"isShowMenu\">\n\t\t\t<div class=\"nav__menuIcon fl\">\n\t\t\t\t<i class=\"icon iconfont\"></i>\n\t\t\t</div>\n\t\t\t<div class=\"nav__menuTitle fl\">\n\t\t\t\t行业\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"nav__searchBox fr\"\n\t\t\t @click=\"isClick\"\n\t\t\t v-link=\"{path: '/search'}\">\n\t\t\t<i class=\"icon iconfont\"></i>\n\t\t\t<input class=\"nav__search\" name=\"keyword\" placeholder=\"搜索\">\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(107)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Category\\Content.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(108)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-edb11bea/Content.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 107 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <script type="text/javascript">
	exports.default = {
		vuex: {
			getters: {
				category: function category(_ref) {
					var _category = _ref.category;
					return _category.list;
				}
			}
		},
		methods: {
			addNum: function addNum(num1, num2) {
				var sq1, sq2, m;
				try {
					sq1 = num1.toString().split(".")[1].length;
				} catch (e) {
					sq1 = 0;
				}
				try {
					sq2 = num2.toString().split(".")[1].length;
				} catch (e) {
					sq2 = 0;
				}
				m = Math.pow(10, Math.max(sq1, sq2));
				return (num1 * m + num2 * m) / m;
			},
			formatRank: function formatRank(rank) {
				return 'No.' + rank;
			},
			formatNum: function formatNum(_num, unit) {
				var temp = (_num + '').split('').reverse();
				var newNum = '',
				    endNum = '';
				while (temp.length > 3) {
					newNum += temp.splice(0, 3).join('') + ',';
				}
				newNum += temp.join('');
				endNum = newNum.split('').reverse().join('');
				if (unit == true) {
					_num >= 10000 && _num < 100000000 && (endNum += '万');
					_num >= 100000000 && (endNum += '亿');
				}
				return endNum;
			},
			fourDigit: function fourDigit(_num, unit) {
				var strNum = _num + '';
				var numLen = strNum.length;
				var subNum = Math.floor(numLen / 4);
				var subLen = numLen % 4 == 0 ? subNum - 1 : subNum;
				var arrNum = strNum.split('');
				arrNum.length = numLen - subLen * 4;
				var endNum = this.formatNum(arrNum.join(''));
				if (unit == true) {
					_num >= 10000 && _num < 100000000 && (endNum += '万');
					_num >= 100000000 && (endNum += '亿');
				}
				return endNum;
			},
			fourDigitPoint: function fourDigitPoint(_num, unit) {
				var strNum = _num + '';
				var numLen = strNum.length;
				var subNum = Math.floor(numLen / 4);
				var subLen = numLen % 4 == 0 ? subNum - 1 : subNum;
				var arrNum = strNum.split('');
				arrNum.length = numLen - subLen * 4;
				var newArrMoney = strNum.split('').slice(arrNum.length, 4);
				var pointVal = newArrMoney == '' ? '0' : newArrMoney.length > 2 ? Math.round(newArrMoney.join('') / 10) + '' : newArrMoney.join('');
				var newPointVal = +pointVal / Math.pow(10, pointVal.length);
				var endNum = this.addNum(+arrNum.join(''), +newPointVal);
				if (unit == true) {
					_num >= 10000 && _num < 100000000 && (endNum += '万');
					_num >= 100000000 && (endNum += '亿');
				}
				return endNum;
			}
		}
	};
	// </script>
	//
	// <template>
	// 	<div id="gkvIndustry">
	// 		<ul class="industryBox">
	// 			<li v-for="item in category"
	// 				class="industry__list"> 
	// 				<div class="insdustry__positive mask__cate clearfix" data-id="14">
	// 					<div class="idy__imgBox fl">
	// 						<div class="idy__imgMask searchVal">{{ item.title }}</div>
	// 						<img class="idy__img" :src="item.titleImg">
	// 					</div>
	// 					<div class="idy__descBox fl">
	// 						<div class="idy__titleBox clearfix">
	// 							<div class="idy__title fl">{{ item.descTitle }}</div>
	// 							<div class="idy__No bgcolor1 fl">{{ formatRank(item.topRank) }}</div>
	// 							<i class="icon iconfont fcolor1"></i>
	// 						</div>
	// 						<div class="idy__money">
	// 							<span class="moneyLight">{{ fourDigit(item.topMoney,true) }}</span> <font class="idy__moneyUnit">RMB</font>
	// 						</div>
	// 						<ul class="idy__cxtLeftBox fl">
	// 							<li v-for="subItem in item.subList" class="idy__cxtList">{{ subItem.title }}</li>
	// 						</ul>
	// 						<ul class="idy__cxtMiddleBox fl">
	// 							<li v-for="subItem in item.subList" class="idy__cxtList">	{{ fourDigitPoint(subItem.desc,true) }} <font v-if="$index==0" class="idy__moneyUnit">RMB</font>
	// 							</li>
	// 						</ul>
	// 						<ul class="idy__cxtRightBox fl">
	// 							<li v-for="subItem in item.subList" class="idy__cxtList">
	// 								<div class="idy__No bgcolor1">{{ formatRank(subItem.rank) }}</div>
	// 							</li>
	// 						</ul>
	// 					</div>
	// 				</div>
	// 				<div class="insdustry__mask">
	// 					<div class="insdustry__opposite">
	// 						{{ item.tips }}
	// 					</div>
	// 				</div>
	// 			</li>
	// 			<li class="industry__list"> 
	// 				<div class="insdustry__positive mask__cate clearfix" data-id="14">
	// 					<div class="idy__imgBox fl">
	// 						<div class="idy__imgMask searchVal">数码与周边</div>
	// 						<img class="idy__img" src="https://s3.cn-north-1.amazonaws.com.cn/imgs/category/14.jpg">
	// 					</div>
	// 					<div class="idy__descBox fl">
	// 						<div class="idy__titleBox clearfix">
	// 							<div class="idy__title fl">七日资金</div>
	// 							<div class="idy__No bgcolor1 fl">No.1</div>
	// 							<i class="icon iconfont fcolor1"></i>
	// 						</div>
	// 						<div class="idy__money">
	// 							<span class="moneyLight">2,720万</span> <font class="idy__moneyUnit">RMB</font>
	// 						</div>
	// 						<ul class="idy__cxtLeftBox fl">
	// 							<li class="idy__cxtList">累计金额</li>
	// 							<li class="idy__cxtList">项目数</li>
	// 							<li class="idy__cxtList">人气</li>
	// 						</ul>
	// 						<ul class="idy__cxtMiddleBox fl">
	// 							<li class="idy__cxtList">11.44亿 <font class="idy__moneyUnit">RMB</font></li>
	// 							<li class="idy__cxtList">2,058</li>
	// 							<li class="idy__cxtList">467万</li>
	// 						</ul>
	// 						<ul class="idy__cxtRightBox fl">
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor1">No.1</div>
	// 							</li>
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor1">No.1</div>
	// 							</li>
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor1">No.1</div>
	// 							</li>
	// 						</ul>
	// 					</div>
	// 				</div>
	// 				<div class="insdustry__mask">
	// 					<div class="insdustry__opposite">
	// 						电脑/音响/摄影/平板/游戏机/3C设备相关
	// 					</div>
	// 				</div>
	// 			</li>
	// 			<li class="industry__list"> 
	// 				<div class="insdustry__positive mask__cate clearfix" data-id="11">
	// 					<div class="idy__imgBox fl">
	// 						<div class="idy__imgMask searchVal">家居与安防</div>
	// 						<img class="idy__img" src="https://s3.cn-north-1.amazonaws.com.cn/imgs/category/11.jpg">
	// 					</div>
	// 					<div class="idy__descBox fl">
	// 						<div class="idy__titleBox clearfix">
	// 							<div class="idy__title fl">七日资金</div>
	// 							<div class="idy__No bgcolor2 fl">No.2</div>
	// 							<i class="icon iconfont fcolor1"></i>
	// 						</div>
	// 						<div class="idy__money">
	// 							<span class="moneyLight">1,239万</span> <font class="idy__moneyUnit">RMB</font>
	// 						</div>
	// 						<ul class="idy__cxtLeftBox fl">
	// 							<li class="idy__cxtList">累计金额</li>
	// 							<li class="idy__cxtList">项目数</li>
	// 							<li class="idy__cxtList">人气</li>
	// 						</ul>
	// 						<ul class="idy__cxtMiddleBox fl">
	// 							<li class="idy__cxtList">7.42亿 <font class="idy__moneyUnit">RMB</font></li>
	// 							<li class="idy__cxtList">1,469</li>
	// 							<li class="idy__cxtList">416万</li>
	// 						</ul>
	// 						<ul class="idy__cxtRightBox fl">
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor4">No.4</div>
	// 							</li>
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor3">No.3</div>
	// 							</li>
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor2">No.2</div>
	// 							</li>
	// 						</ul>
	// 					</div>
	// 				</div>
	// 				<div class="insdustry__mask">
	// 					<div class="insdustry__opposite">
	// 						智能建造/家电/照明/厨卫/绿植/安防相关
	// 					</div>
	// 				</div>
	// 			</li>
	// 			<li class="industry__list"> 
	// 				<div class="insdustry__positive mask__cate clearfix" data-id="5">
	// 					<div class="idy__imgBox fl">
	// 						<div class="idy__imgMask searchVal">智能出行</div>
	// 						<img class="idy__img" src="https://s3.cn-north-1.amazonaws.com.cn/imgs/category/5.jpg">
	// 					</div>
	// 					<div class="idy__descBox fl">
	// 						<div class="idy__titleBox clearfix">
	// 							<div class="idy__title fl">七日资金</div>
	// 							<div class="idy__No bgcolor3 fl">No.3</div>
	// 							<i class="icon iconfont fcolor1"></i>
	// 						</div>
	// 						<div class="idy__money">
	// 							<span class="moneyLight">671万</span> <font class="idy__moneyUnit">RMB</font>
	// 						</div>
	// 						<ul class="idy__cxtLeftBox fl">
	// 							<li class="idy__cxtList">累计金额</li>
	// 							<li class="idy__cxtList">项目数</li>
	// 							<li class="idy__cxtList">人气</li>
	// 						</ul>
	// 						<ul class="idy__cxtMiddleBox fl">
	// 							<li class="idy__cxtList">7.73亿 <font class="idy__moneyUnit">RMB</font></li>
	// 							<li class="idy__cxtList">758</li>
	// 							<li class="idy__cxtList">273万</li>
	// 						</ul>
	// 						<ul class="idy__cxtRightBox fl">
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor2">No.2</div>
	// 							</li>
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor4">No.5</div>
	// 							</li>
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor4">No.4</div>
	// 							</li>
	// 						</ul>
	// 					</div>
	// 				</div>
	// 				<div class="insdustry__mask">
	// 					<div class="insdustry__opposite">
	// 						车载/轮船/飞机/自行车/出行相关
	// 					</div>
	// 				</div>
	// 			</li>
	// 			<li class="industry__list"> 
	// 				<div class="insdustry__positive mask__cate clearfix" data-id="9">
	// 					<div class="idy__imgBox fl">
	// 						<div class="idy__imgMask searchVal">环保与净化</div>
	// 						<img class="idy__img" src="https://s3.cn-north-1.amazonaws.com.cn/imgs/category/9.jpg">
	// 					</div>
	// 					<div class="idy__descBox fl">
	// 						<div class="idy__titleBox clearfix">
	// 							<div class="idy__title fl">七日资金</div>
	// 							<div class="idy__No bgcolor4 fl">No.4</div>
	// 							<i class="icon iconfont fcolor1"></i>
	// 						</div>
	// 						<div class="idy__money">
	// 							<span class="moneyLight">407万</span> <font class="idy__moneyUnit">RMB</font>
	// 						</div>
	// 						<ul class="idy__cxtLeftBox fl">
	// 							<li class="idy__cxtList">累计金额</li>
	// 							<li class="idy__cxtList">项目数</li>
	// 							<li class="idy__cxtList">人气</li>
	// 						</ul>
	// 						<ul class="idy__cxtMiddleBox fl">
	// 							<li class="idy__cxtList">3.06亿 <font class="idy__moneyUnit">RMB</font></li>
	// 							<li class="idy__cxtList">440</li>
	// 							<li class="idy__cxtList">61万</li>
	// 						</ul>
	// 						<ul class="idy__cxtRightBox fl">
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor4">No.6</div>
	// 							</li>
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor4">No.7</div>
	// 							</li>
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor4">No.8</div>
	// 							</li>
	// 						</ul>
	// 					</div>
	// 				</div>
	// 				<div class="insdustry__mask">
	// 					<div class="insdustry__opposite">
	// 						垃圾处理/节能环保/水、空气净化检测相关
	// 					</div>
	// 				</div>
	// 			</li>
	// 			<li class="industry__list"> 
	// 				<div class="insdustry__positive mask__cate clearfix" data-id="8">
	// 					<div class="idy__imgBox fl">
	// 						<div class="idy__imgMask searchVal">手机与周边</div>
	// 						<img class="idy__img" src="https://s3.cn-north-1.amazonaws.com.cn/imgs/category/8.jpg">
	// 					</div>
	// 					<div class="idy__descBox fl">
	// 						<div class="idy__titleBox clearfix">
	// 							<div class="idy__title fl">七日资金</div>
	// 							<div class="idy__No bgcolor4 fl">No.5</div>
	// 							<i class="icon iconfont fcolor1"></i>
	// 						</div>
	// 						<div class="idy__money">
	// 							<span class="moneyLight">346万</span> <font class="idy__moneyUnit">RMB</font>
	// 						</div>
	// 						<ul class="idy__cxtLeftBox fl">
	// 							<li class="idy__cxtList">累计金额</li>
	// 							<li class="idy__cxtList">项目数</li>
	// 							<li class="idy__cxtList">人气</li>
	// 						</ul>
	// 						<ul class="idy__cxtMiddleBox fl">
	// 							<li class="idy__cxtList">7.61亿 <font class="idy__moneyUnit">RMB</font></li>
	// 							<li class="idy__cxtList">1,648</li>
	// 							<li class="idy__cxtList">314万</li>
	// 						</ul>
	// 						<ul class="idy__cxtRightBox fl">
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor3">No.3</div>
	// 							</li>
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor2">No.2</div>
	// 							</li>
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor3">No.3</div>
	// 							</li>
	// 						</ul>
	// 					</div>
	// 				</div>
	// 				<div class="insdustry__mask">
	// 					<div class="insdustry__opposite">
	// 						手机/配件周边
	// 					</div>
	// 				</div>
	// 			</li>
	// 			<li class="industry__list"> 
	// 				<div class="insdustry__positive mask__cate clearfix" data-id="3">
	// 					<div class="idy__imgBox fl">
	// 						<div class="idy__imgMask searchVal">机器人</div>
	// 						<img class="idy__img" src="https://s3.cn-north-1.amazonaws.com.cn/imgs/category/3.jpg">
	// 					</div>
	// 					<div class="idy__descBox fl">
	// 						<div class="idy__titleBox clearfix">
	// 							<div class="idy__title fl">七日资金</div>
	// 							<div class="idy__No bgcolor4 fl">No.6</div>
	// 							<i class="icon iconfont fcolor1"></i>
	// 						</div>
	// 						<div class="idy__money">
	// 							<span class="moneyLight">220万</span> <font class="idy__moneyUnit">RMB</font>
	// 						</div>
	// 						<ul class="idy__cxtLeftBox fl">
	// 							<li class="idy__cxtList">累计金额</li>
	// 							<li class="idy__cxtList">项目数</li>
	// 							<li class="idy__cxtList">人气</li>
	// 						</ul>
	// 						<ul class="idy__cxtMiddleBox fl">
	// 							<li class="idy__cxtList">1.95亿 <font class="idy__moneyUnit">RMB</font></li>
	// 							<li class="idy__cxtList">347</li>
	// 							<li class="idy__cxtList">31万</li>
	// 						</ul>
	// 						<ul class="idy__cxtRightBox fl">
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor4">No.10</div>
	// 							</li>
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor4">No.10</div>
	// 							</li>
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor4">No.12</div>
	// 							</li>
	// 						</ul>
	// 					</div>
	// 				</div>
	// 				<div class="insdustry__mask">
	// 					<div class="insdustry__opposite">
	// 						家庭/工业用机器人
	// 					</div>
	// 				</div>
	// 			</li>
	// 			<li class="industry__list"> 
	// 				<div class="insdustry__positive mask__cate clearfix" data-id="1">
	// 					<div class="idy__imgBox fl">
	// 						<div class="idy__imgMask searchVal">VR/AR</div>
	// 						<img class="idy__img" src="https://s3.cn-north-1.amazonaws.com.cn/imgs/category/1.jpg">
	// 					</div>
	// 					<div class="idy__descBox fl">
	// 						<div class="idy__titleBox clearfix">
	// 							<div class="idy__title fl">七日资金</div>
	// 							<div class="idy__No bgcolor4 fl">No.7</div>
	// 							<i class="icon iconfont fcolor1"></i>
	// 						</div>
	// 						<div class="idy__money">
	// 							<span class="moneyLight">142万</span> <font class="idy__moneyUnit">RMB</font>
	// 						</div>
	// 						<ul class="idy__cxtLeftBox fl">
	// 							<li class="idy__cxtList">累计金额</li>
	// 							<li class="idy__cxtList">项目数</li>
	// 							<li class="idy__cxtList">人气</li>
	// 						</ul>
	// 						<ul class="idy__cxtMiddleBox fl">
	// 							<li class="idy__cxtList">1.40亿 <font class="idy__moneyUnit">RMB</font></li>
	// 							<li class="idy__cxtList">309</li>
	// 							<li class="idy__cxtList">40万</li>
	// 						</ul>
	// 						<ul class="idy__cxtRightBox fl">
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor4">No.11</div>
	// 							</li>
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor4">No.11</div>
	// 							</li>
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor4">No.10</div>
	// 							</li>
	// 						</ul>
	// 					</div>
	// 				</div>
	// 				<div class="insdustry__mask">
	// 					<div class="insdustry__opposite">
	// 						虚拟现实/增强现实相关
	// 					</div>
	// 				</div>
	// 			</li>
	// 			<li class="industry__list"> 
	// 				<div class="insdustry__positive mask__cate clearfix" data-id="4">
	// 					<div class="idy__imgBox fl">
	// 						<div class="idy__imgMask searchVal">智能穿戴</div>
	// 						<img class="idy__img" src="https://s3.cn-north-1.amazonaws.com.cn/imgs/category/4.jpg">
	// 					</div>
	// 					<div class="idy__descBox fl">
	// 						<div class="idy__titleBox clearfix">
	// 							<div class="idy__title fl">七日资金</div>
	// 							<div class="idy__No bgcolor4 fl">No.8</div>
	// 							<i class="icon iconfont fcolor1"></i>
	// 						</div>
	// 						<div class="idy__money">
	// 							<span class="moneyLight">127万</span> <font class="idy__moneyUnit">RMB</font>
	// 						</div>
	// 						<ul class="idy__cxtLeftBox fl">
	// 							<li class="idy__cxtList">累计金额</li>
	// 							<li class="idy__cxtList">项目数</li>
	// 							<li class="idy__cxtList">人气</li>
	// 						</ul>
	// 						<ul class="idy__cxtMiddleBox fl">
	// 							<li class="idy__cxtList">4.34亿 <font class="idy__moneyUnit">RMB</font></li>
	// 							<li class="idy__cxtList">1,068</li>
	// 							<li class="idy__cxtList">160万</li>
	// 						</ul>
	// 						<ul class="idy__cxtRightBox fl">
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor4">No.5</div>
	// 							</li>
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor4">No.4</div>
	// 							</li>
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor4">No.5</div>
	// 							</li>
	// 						</ul>
	// 					</div>
	// 				</div>
	// 				<div class="insdustry__mask">
	// 					<div class="insdustry__opposite">
	// 						手环/衣物/配饰/眼镜/头盔/鞋袜/穿戴相关
	// 					</div>
	// 				</div>
	// 			</li>
	// 			<li class="industry__list"> 
	// 				<div class="insdustry__positive mask__cate clearfix" data-id="2">
	// 					<div class="idy__imgBox fl">
	// 						<div class="idy__imgMask searchVal">无人机</div>
	// 						<img class="idy__img" src="https://s3.cn-north-1.amazonaws.com.cn/imgs/category/2.jpg">
	// 					</div>
	// 					<div class="idy__descBox fl">
	// 						<div class="idy__titleBox clearfix">
	// 							<div class="idy__title fl">七日资金</div>
	// 							<div class="idy__No bgcolor4 fl">No.9</div>
	// 							<i class="icon iconfont fcolor1"></i>
	// 						</div>
	// 						<div class="idy__money">
	// 							<span class="moneyLight">56万</span> <font class="idy__moneyUnit">RMB</font>
	// 						</div>
	// 						<ul class="idy__cxtLeftBox fl">
	// 							<li class="idy__cxtList">累计金额</li>
	// 							<li class="idy__cxtList">项目数</li>
	// 							<li class="idy__cxtList">人气</li>
	// 						</ul>
	// 						<ul class="idy__cxtMiddleBox fl">
	// 							<li class="idy__cxtList">2.12亿 <font class="idy__moneyUnit">RMB</font></li>
	// 							<li class="idy__cxtList">183</li>
	// 							<li class="idy__cxtList">40万</li>
	// 						</ul>
	// 						<ul class="idy__cxtRightBox fl">
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor4">No.9</div>
	// 							</li>
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor4">No.12</div>
	// 							</li>
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor4">No.9</div>
	// 							</li>
	// 						</ul>
	// 					</div>
	// 				</div>
	// 				<div class="insdustry__mask">
	// 					<div class="insdustry__opposite">
	// 						无人机相关
	// 					</div>
	// 				</div>
	// 			</li>
	// 			<li class="industry__list"> 
	// 				<div class="insdustry__positive mask__cate clearfix" data-id="10">
	// 					<div class="idy__imgBox fl">
	// 						<div class="idy__imgMask searchVal">办公增强</div>
	// 						<img class="idy__img" src="https://s3.cn-north-1.amazonaws.com.cn/imgs/category/10.jpg">
	// 					</div>
	// 					<div class="idy__descBox fl">
	// 						<div class="idy__titleBox clearfix">
	// 							<div class="idy__title fl">七日资金</div>
	// 							<div class="idy__No bgcolor4 fl">No.10</div>
	// 							<i class="icon iconfont fcolor1"></i>
	// 						</div>
	// 						<div class="idy__money">
	// 							<span class="moneyLight">34万</span> <font class="idy__moneyUnit">RMB</font>
	// 						</div>
	// 						<ul class="idy__cxtLeftBox fl">
	// 							<li class="idy__cxtList">累计金额</li>
	// 							<li class="idy__cxtList">项目数</li>
	// 							<li class="idy__cxtList">人气</li>
	// 						</ul>
	// 						<ul class="idy__cxtMiddleBox fl">
	// 							<li class="idy__cxtList">2.72亿 <font class="idy__moneyUnit">RMB</font></li>
	// 							<li class="idy__cxtList">359</li>
	// 							<li class="idy__cxtList">39万</li>
	// 						</ul>
	// 						<ul class="idy__cxtRightBox fl">
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor4">No.8</div>
	// 							</li>
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor4">No.9</div>
	// 							</li>
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor4">No.11</div>
	// 							</li>
	// 						</ul>
	// 					</div>
	// 				</div>
	// 				<div class="insdustry__mask">
	// 					<div class="insdustry__opposite">
	// 						3D打印/办公/开发板/元器件/智能工具相关
	// 					</div>
	// 				</div>
	// 			</li>
	// 			<li class="industry__list"> 
	// 				<div class="insdustry__positive mask__cate clearfix" data-id="12">
	// 					<div class="idy__imgBox fl">
	// 						<div class="idy__imgMask searchVal">创意设计</div>
	// 						<img class="idy__img" src="https://s3.cn-north-1.amazonaws.com.cn/imgs/category/12.jpg">
	// 					</div>
	// 					<div class="idy__descBox fl">
	// 						<div class="idy__titleBox clearfix">
	// 							<div class="idy__title fl">七日资金</div>
	// 							<div class="idy__No bgcolor4 fl">No.11</div>
	// 							<i class="icon iconfont fcolor1"></i>
	// 						</div>
	// 						<div class="idy__money">
	// 							<span class="moneyLight">34万</span> <font class="idy__moneyUnit">RMB</font>
	// 						</div>
	// 						<ul class="idy__cxtLeftBox fl">
	// 							<li class="idy__cxtList">累计金额</li>
	// 							<li class="idy__cxtList">项目数</li>
	// 							<li class="idy__cxtList">人气</li>
	// 						</ul>
	// 						<ul class="idy__cxtMiddleBox fl">
	// 							<li class="idy__cxtList">1.33亿 <font class="idy__moneyUnit">RMB</font></li>
	// 							<li class="idy__cxtList">389</li>
	// 							<li class="idy__cxtList">79万</li>
	// 						</ul>
	// 						<ul class="idy__cxtRightBox fl">
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor4">No.12</div>
	// 							</li>
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor4">No.8</div>
	// 							</li>
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor4">No.7</div>
	// 							</li>
	// 						</ul>
	// 					</div>
	// 				</div>
	// 				<div class="insdustry__mask">
	// 					<div class="insdustry__opposite">
	// 						创意/设计相关
	// 					</div>
	// 				</div>
	// 			</li>
	// 			<li class="industry__list"> 
	// 				<div class="insdustry__positive mask__cate clearfix" data-id="6">
	// 					<div class="idy__imgBox fl">
	// 						<div class="idy__imgMask searchVal">医疗与保健</div>
	// 						<img class="idy__img" src="https://s3.cn-north-1.amazonaws.com.cn/imgs/category/6.jpg">
	// 					</div>
	// 					<div class="idy__descBox fl">
	// 						<div class="idy__titleBox clearfix">
	// 							<div class="idy__title fl">七日资金</div>
	// 							<div class="idy__No bgcolor4 fl">No.12</div>
	// 							<i class="icon iconfont fcolor1"></i>
	// 						</div>
	// 						<div class="idy__money">
	// 							<span class="moneyLight">23万</span> <font class="idy__moneyUnit">RMB</font>
	// 						</div>
	// 						<ul class="idy__cxtLeftBox fl">
	// 							<li class="idy__cxtList">累计金额</li>
	// 							<li class="idy__cxtList">项目数</li>
	// 							<li class="idy__cxtList">人气</li>
	// 						</ul>
	// 						<ul class="idy__cxtMiddleBox fl">
	// 							<li class="idy__cxtList">2.98亿 <font class="idy__moneyUnit">RMB</font></li>
	// 							<li class="idy__cxtList">556</li>
	// 							<li class="idy__cxtList">104万</li>
	// 						</ul>
	// 						<ul class="idy__cxtRightBox fl">
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor4">No.7</div>
	// 							</li>
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor4">No.6</div>
	// 							</li>
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor4">No.6</div>
	// 							</li>
	// 						</ul>
	// 					</div>
	// 				</div>
	// 				<div class="insdustry__mask">
	// 					<div class="insdustry__opposite">
	// 						医疗/器械/个护/保健相关
	// 					</div>
	// 				</div>
	// 			</li>
	// 			<li class="industry__list"> 
	// 				<div class="insdustry__positive mask__cate clearfix" data-id="7">
	// 					<div class="idy__imgBox fl">
	// 						<div class="idy__imgMask searchVal">智能母婴</div>
	// 						<img class="idy__img" src="https://s3.cn-north-1.amazonaws.com.cn/imgs/category/7.jpg">
	// 					</div>
	// 					<div class="idy__descBox fl">
	// 						<div class="idy__titleBox clearfix">
	// 							<div class="idy__title fl">七日资金</div>
	// 							<div class="idy__No bgcolor4 fl">No.13</div>
	// 							<i class="icon iconfont fcolor1"></i>
	// 						</div>
	// 						<div class="idy__money">
	// 							<span class="moneyLight">6万</span> <font class="idy__moneyUnit">RMB</font>
	// 						</div>
	// 						<ul class="idy__cxtLeftBox fl">
	// 							<li class="idy__cxtList">累计金额</li>
	// 							<li class="idy__cxtList">项目数</li>
	// 							<li class="idy__cxtList">人气</li>
	// 						</ul>
	// 						<ul class="idy__cxtMiddleBox fl">
	// 							<li class="idy__cxtList">5,322万 <font class="idy__moneyUnit">RMB</font></li>
	// 							<li class="idy__cxtList">144</li>
	// 							<li class="idy__cxtList">24万</li>
	// 						</ul>
	// 						<ul class="idy__cxtRightBox fl">
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor4">No.13</div>
	// 							</li>
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor4">No.13</div>
	// 							</li>
	// 							<li class="idy__cxtList">
	// 								<div class="idy__No bgcolor4">No.13</div>
	// 							</li>
	// 						</ul>
	// 					</div>
	// 				</div>
	// 				<div class="insdustry__mask">
	// 					<div class="insdustry__opposite">
	// 						智能玩具/儿童/母婴相关
	// 					</div>
	// 				</div>
	// 			</li>
	// 		</ul>
	// 	</div>
	// </template>

/***/ },
/* 108 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div id=\"gkvIndustry\">\n\t<ul class=\"industryBox\">\n\t\t<li v-for=\"item in category\"\n\t\t\tclass=\"industry__list\"> \n\t\t\t<div class=\"insdustry__positive mask__cate clearfix\" data-id=\"14\">\n\t\t\t\t<div class=\"idy__imgBox fl\">\n\t\t\t\t\t<div class=\"idy__imgMask searchVal\">{{ item.title }}</div>\n\t\t\t\t\t<img class=\"idy__img\" :src=\"item.titleImg\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"idy__descBox fl\">\n\t\t\t\t\t<div class=\"idy__titleBox clearfix\">\n\t\t\t\t\t\t<div class=\"idy__title fl\">{{ item.descTitle }}</div>\n\t\t\t\t\t\t<div class=\"idy__No bgcolor1 fl\">{{ formatRank(item.topRank) }}</div>\n\t\t\t\t\t\t<i class=\"icon iconfont fcolor1\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"idy__money\">\n\t\t\t\t\t\t<span class=\"moneyLight\">{{ fourDigit(item.topMoney,true) }}</span> <font class=\"idy__moneyUnit\">RMB</font>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class=\"idy__cxtLeftBox fl\">\n\t\t\t\t\t\t<li v-for=\"subItem in item.subList\" class=\"idy__cxtList\">{{ subItem.title }}</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"idy__cxtMiddleBox fl\">\n\t\t\t\t\t\t<li v-for=\"subItem in item.subList\" class=\"idy__cxtList\">\t{{ fourDigitPoint(subItem.desc,true) }} <font v-if=\"$index==0\" class=\"idy__moneyUnit\">RMB</font>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"idy__cxtRightBox fl\">\n\t\t\t\t\t\t<li v-for=\"subItem in item.subList\" class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor1\">{{ formatRank(subItem.rank) }}</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"insdustry__mask\">\n\t\t\t\t<div class=\"insdustry__opposite\">\n\t\t\t\t\t{{ item.tips }}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t\t<li class=\"industry__list\"> \n\t\t\t<div class=\"insdustry__positive mask__cate clearfix\" data-id=\"14\">\n\t\t\t\t<div class=\"idy__imgBox fl\">\n\t\t\t\t\t<div class=\"idy__imgMask searchVal\">数码与周边</div>\n\t\t\t\t\t<img class=\"idy__img\" src=\"https://s3.cn-north-1.amazonaws.com.cn/imgs/category/14.jpg\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"idy__descBox fl\">\n\t\t\t\t\t<div class=\"idy__titleBox clearfix\">\n\t\t\t\t\t\t<div class=\"idy__title fl\">七日资金</div>\n\t\t\t\t\t\t<div class=\"idy__No bgcolor1 fl\">No.1</div>\n\t\t\t\t\t\t<i class=\"icon iconfont fcolor1\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"idy__money\">\n\t\t\t\t\t\t<span class=\"moneyLight\">2,720万</span> <font class=\"idy__moneyUnit\">RMB</font>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class=\"idy__cxtLeftBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">累计金额</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">项目数</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">人气</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"idy__cxtMiddleBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">11.44亿 <font class=\"idy__moneyUnit\">RMB</font></li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">2,058</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">467万</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"idy__cxtRightBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor1\">No.1</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor1\">No.1</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor1\">No.1</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"insdustry__mask\">\n\t\t\t\t<div class=\"insdustry__opposite\">\n\t\t\t\t\t电脑/音响/摄影/平板/游戏机/3C设备相关\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t\t<li class=\"industry__list\"> \n\t\t\t<div class=\"insdustry__positive mask__cate clearfix\" data-id=\"11\">\n\t\t\t\t<div class=\"idy__imgBox fl\">\n\t\t\t\t\t<div class=\"idy__imgMask searchVal\">家居与安防</div>\n\t\t\t\t\t<img class=\"idy__img\" src=\"https://s3.cn-north-1.amazonaws.com.cn/imgs/category/11.jpg\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"idy__descBox fl\">\n\t\t\t\t\t<div class=\"idy__titleBox clearfix\">\n\t\t\t\t\t\t<div class=\"idy__title fl\">七日资金</div>\n\t\t\t\t\t\t<div class=\"idy__No bgcolor2 fl\">No.2</div>\n\t\t\t\t\t\t<i class=\"icon iconfont fcolor1\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"idy__money\">\n\t\t\t\t\t\t<span class=\"moneyLight\">1,239万</span> <font class=\"idy__moneyUnit\">RMB</font>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class=\"idy__cxtLeftBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">累计金额</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">项目数</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">人气</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"idy__cxtMiddleBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">7.42亿 <font class=\"idy__moneyUnit\">RMB</font></li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">1,469</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">416万</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"idy__cxtRightBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor4\">No.4</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor3\">No.3</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor2\">No.2</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"insdustry__mask\">\n\t\t\t\t<div class=\"insdustry__opposite\">\n\t\t\t\t\t智能建造/家电/照明/厨卫/绿植/安防相关\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t\t<li class=\"industry__list\"> \n\t\t\t<div class=\"insdustry__positive mask__cate clearfix\" data-id=\"5\">\n\t\t\t\t<div class=\"idy__imgBox fl\">\n\t\t\t\t\t<div class=\"idy__imgMask searchVal\">智能出行</div>\n\t\t\t\t\t<img class=\"idy__img\" src=\"https://s3.cn-north-1.amazonaws.com.cn/imgs/category/5.jpg\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"idy__descBox fl\">\n\t\t\t\t\t<div class=\"idy__titleBox clearfix\">\n\t\t\t\t\t\t<div class=\"idy__title fl\">七日资金</div>\n\t\t\t\t\t\t<div class=\"idy__No bgcolor3 fl\">No.3</div>\n\t\t\t\t\t\t<i class=\"icon iconfont fcolor1\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"idy__money\">\n\t\t\t\t\t\t<span class=\"moneyLight\">671万</span> <font class=\"idy__moneyUnit\">RMB</font>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class=\"idy__cxtLeftBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">累计金额</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">项目数</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">人气</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"idy__cxtMiddleBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">7.73亿 <font class=\"idy__moneyUnit\">RMB</font></li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">758</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">273万</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"idy__cxtRightBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor2\">No.2</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor4\">No.5</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor4\">No.4</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"insdustry__mask\">\n\t\t\t\t<div class=\"insdustry__opposite\">\n\t\t\t\t\t车载/轮船/飞机/自行车/出行相关\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t\t<li class=\"industry__list\"> \n\t\t\t<div class=\"insdustry__positive mask__cate clearfix\" data-id=\"9\">\n\t\t\t\t<div class=\"idy__imgBox fl\">\n\t\t\t\t\t<div class=\"idy__imgMask searchVal\">环保与净化</div>\n\t\t\t\t\t<img class=\"idy__img\" src=\"https://s3.cn-north-1.amazonaws.com.cn/imgs/category/9.jpg\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"idy__descBox fl\">\n\t\t\t\t\t<div class=\"idy__titleBox clearfix\">\n\t\t\t\t\t\t<div class=\"idy__title fl\">七日资金</div>\n\t\t\t\t\t\t<div class=\"idy__No bgcolor4 fl\">No.4</div>\n\t\t\t\t\t\t<i class=\"icon iconfont fcolor1\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"idy__money\">\n\t\t\t\t\t\t<span class=\"moneyLight\">407万</span> <font class=\"idy__moneyUnit\">RMB</font>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class=\"idy__cxtLeftBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">累计金额</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">项目数</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">人气</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"idy__cxtMiddleBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">3.06亿 <font class=\"idy__moneyUnit\">RMB</font></li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">440</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">61万</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"idy__cxtRightBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor4\">No.6</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor4\">No.7</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor4\">No.8</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"insdustry__mask\">\n\t\t\t\t<div class=\"insdustry__opposite\">\n\t\t\t\t\t垃圾处理/节能环保/水、空气净化检测相关\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t\t<li class=\"industry__list\"> \n\t\t\t<div class=\"insdustry__positive mask__cate clearfix\" data-id=\"8\">\n\t\t\t\t<div class=\"idy__imgBox fl\">\n\t\t\t\t\t<div class=\"idy__imgMask searchVal\">手机与周边</div>\n\t\t\t\t\t<img class=\"idy__img\" src=\"https://s3.cn-north-1.amazonaws.com.cn/imgs/category/8.jpg\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"idy__descBox fl\">\n\t\t\t\t\t<div class=\"idy__titleBox clearfix\">\n\t\t\t\t\t\t<div class=\"idy__title fl\">七日资金</div>\n\t\t\t\t\t\t<div class=\"idy__No bgcolor4 fl\">No.5</div>\n\t\t\t\t\t\t<i class=\"icon iconfont fcolor1\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"idy__money\">\n\t\t\t\t\t\t<span class=\"moneyLight\">346万</span> <font class=\"idy__moneyUnit\">RMB</font>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class=\"idy__cxtLeftBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">累计金额</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">项目数</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">人气</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"idy__cxtMiddleBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">7.61亿 <font class=\"idy__moneyUnit\">RMB</font></li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">1,648</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">314万</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"idy__cxtRightBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor3\">No.3</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor2\">No.2</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor3\">No.3</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"insdustry__mask\">\n\t\t\t\t<div class=\"insdustry__opposite\">\n\t\t\t\t\t手机/配件周边\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t\t<li class=\"industry__list\"> \n\t\t\t<div class=\"insdustry__positive mask__cate clearfix\" data-id=\"3\">\n\t\t\t\t<div class=\"idy__imgBox fl\">\n\t\t\t\t\t<div class=\"idy__imgMask searchVal\">机器人</div>\n\t\t\t\t\t<img class=\"idy__img\" src=\"https://s3.cn-north-1.amazonaws.com.cn/imgs/category/3.jpg\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"idy__descBox fl\">\n\t\t\t\t\t<div class=\"idy__titleBox clearfix\">\n\t\t\t\t\t\t<div class=\"idy__title fl\">七日资金</div>\n\t\t\t\t\t\t<div class=\"idy__No bgcolor4 fl\">No.6</div>\n\t\t\t\t\t\t<i class=\"icon iconfont fcolor1\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"idy__money\">\n\t\t\t\t\t\t<span class=\"moneyLight\">220万</span> <font class=\"idy__moneyUnit\">RMB</font>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class=\"idy__cxtLeftBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">累计金额</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">项目数</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">人气</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"idy__cxtMiddleBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">1.95亿 <font class=\"idy__moneyUnit\">RMB</font></li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">347</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">31万</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"idy__cxtRightBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor4\">No.10</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor4\">No.10</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor4\">No.12</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"insdustry__mask\">\n\t\t\t\t<div class=\"insdustry__opposite\">\n\t\t\t\t\t家庭/工业用机器人\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t\t<li class=\"industry__list\"> \n\t\t\t<div class=\"insdustry__positive mask__cate clearfix\" data-id=\"1\">\n\t\t\t\t<div class=\"idy__imgBox fl\">\n\t\t\t\t\t<div class=\"idy__imgMask searchVal\">VR/AR</div>\n\t\t\t\t\t<img class=\"idy__img\" src=\"https://s3.cn-north-1.amazonaws.com.cn/imgs/category/1.jpg\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"idy__descBox fl\">\n\t\t\t\t\t<div class=\"idy__titleBox clearfix\">\n\t\t\t\t\t\t<div class=\"idy__title fl\">七日资金</div>\n\t\t\t\t\t\t<div class=\"idy__No bgcolor4 fl\">No.7</div>\n\t\t\t\t\t\t<i class=\"icon iconfont fcolor1\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"idy__money\">\n\t\t\t\t\t\t<span class=\"moneyLight\">142万</span> <font class=\"idy__moneyUnit\">RMB</font>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class=\"idy__cxtLeftBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">累计金额</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">项目数</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">人气</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"idy__cxtMiddleBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">1.40亿 <font class=\"idy__moneyUnit\">RMB</font></li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">309</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">40万</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"idy__cxtRightBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor4\">No.11</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor4\">No.11</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor4\">No.10</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"insdustry__mask\">\n\t\t\t\t<div class=\"insdustry__opposite\">\n\t\t\t\t\t虚拟现实/增强现实相关\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t\t<li class=\"industry__list\"> \n\t\t\t<div class=\"insdustry__positive mask__cate clearfix\" data-id=\"4\">\n\t\t\t\t<div class=\"idy__imgBox fl\">\n\t\t\t\t\t<div class=\"idy__imgMask searchVal\">智能穿戴</div>\n\t\t\t\t\t<img class=\"idy__img\" src=\"https://s3.cn-north-1.amazonaws.com.cn/imgs/category/4.jpg\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"idy__descBox fl\">\n\t\t\t\t\t<div class=\"idy__titleBox clearfix\">\n\t\t\t\t\t\t<div class=\"idy__title fl\">七日资金</div>\n\t\t\t\t\t\t<div class=\"idy__No bgcolor4 fl\">No.8</div>\n\t\t\t\t\t\t<i class=\"icon iconfont fcolor1\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"idy__money\">\n\t\t\t\t\t\t<span class=\"moneyLight\">127万</span> <font class=\"idy__moneyUnit\">RMB</font>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class=\"idy__cxtLeftBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">累计金额</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">项目数</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">人气</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"idy__cxtMiddleBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">4.34亿 <font class=\"idy__moneyUnit\">RMB</font></li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">1,068</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">160万</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"idy__cxtRightBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor4\">No.5</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor4\">No.4</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor4\">No.5</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"insdustry__mask\">\n\t\t\t\t<div class=\"insdustry__opposite\">\n\t\t\t\t\t手环/衣物/配饰/眼镜/头盔/鞋袜/穿戴相关\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t\t<li class=\"industry__list\"> \n\t\t\t<div class=\"insdustry__positive mask__cate clearfix\" data-id=\"2\">\n\t\t\t\t<div class=\"idy__imgBox fl\">\n\t\t\t\t\t<div class=\"idy__imgMask searchVal\">无人机</div>\n\t\t\t\t\t<img class=\"idy__img\" src=\"https://s3.cn-north-1.amazonaws.com.cn/imgs/category/2.jpg\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"idy__descBox fl\">\n\t\t\t\t\t<div class=\"idy__titleBox clearfix\">\n\t\t\t\t\t\t<div class=\"idy__title fl\">七日资金</div>\n\t\t\t\t\t\t<div class=\"idy__No bgcolor4 fl\">No.9</div>\n\t\t\t\t\t\t<i class=\"icon iconfont fcolor1\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"idy__money\">\n\t\t\t\t\t\t<span class=\"moneyLight\">56万</span> <font class=\"idy__moneyUnit\">RMB</font>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class=\"idy__cxtLeftBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">累计金额</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">项目数</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">人气</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"idy__cxtMiddleBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">2.12亿 <font class=\"idy__moneyUnit\">RMB</font></li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">183</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">40万</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"idy__cxtRightBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor4\">No.9</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor4\">No.12</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor4\">No.9</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"insdustry__mask\">\n\t\t\t\t<div class=\"insdustry__opposite\">\n\t\t\t\t\t无人机相关\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t\t<li class=\"industry__list\"> \n\t\t\t<div class=\"insdustry__positive mask__cate clearfix\" data-id=\"10\">\n\t\t\t\t<div class=\"idy__imgBox fl\">\n\t\t\t\t\t<div class=\"idy__imgMask searchVal\">办公增强</div>\n\t\t\t\t\t<img class=\"idy__img\" src=\"https://s3.cn-north-1.amazonaws.com.cn/imgs/category/10.jpg\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"idy__descBox fl\">\n\t\t\t\t\t<div class=\"idy__titleBox clearfix\">\n\t\t\t\t\t\t<div class=\"idy__title fl\">七日资金</div>\n\t\t\t\t\t\t<div class=\"idy__No bgcolor4 fl\">No.10</div>\n\t\t\t\t\t\t<i class=\"icon iconfont fcolor1\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"idy__money\">\n\t\t\t\t\t\t<span class=\"moneyLight\">34万</span> <font class=\"idy__moneyUnit\">RMB</font>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class=\"idy__cxtLeftBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">累计金额</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">项目数</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">人气</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"idy__cxtMiddleBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">2.72亿 <font class=\"idy__moneyUnit\">RMB</font></li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">359</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">39万</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"idy__cxtRightBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor4\">No.8</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor4\">No.9</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor4\">No.11</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"insdustry__mask\">\n\t\t\t\t<div class=\"insdustry__opposite\">\n\t\t\t\t\t3D打印/办公/开发板/元器件/智能工具相关\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t\t<li class=\"industry__list\"> \n\t\t\t<div class=\"insdustry__positive mask__cate clearfix\" data-id=\"12\">\n\t\t\t\t<div class=\"idy__imgBox fl\">\n\t\t\t\t\t<div class=\"idy__imgMask searchVal\">创意设计</div>\n\t\t\t\t\t<img class=\"idy__img\" src=\"https://s3.cn-north-1.amazonaws.com.cn/imgs/category/12.jpg\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"idy__descBox fl\">\n\t\t\t\t\t<div class=\"idy__titleBox clearfix\">\n\t\t\t\t\t\t<div class=\"idy__title fl\">七日资金</div>\n\t\t\t\t\t\t<div class=\"idy__No bgcolor4 fl\">No.11</div>\n\t\t\t\t\t\t<i class=\"icon iconfont fcolor1\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"idy__money\">\n\t\t\t\t\t\t<span class=\"moneyLight\">34万</span> <font class=\"idy__moneyUnit\">RMB</font>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class=\"idy__cxtLeftBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">累计金额</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">项目数</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">人气</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"idy__cxtMiddleBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">1.33亿 <font class=\"idy__moneyUnit\">RMB</font></li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">389</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">79万</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"idy__cxtRightBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor4\">No.12</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor4\">No.8</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor4\">No.7</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"insdustry__mask\">\n\t\t\t\t<div class=\"insdustry__opposite\">\n\t\t\t\t\t创意/设计相关\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t\t<li class=\"industry__list\"> \n\t\t\t<div class=\"insdustry__positive mask__cate clearfix\" data-id=\"6\">\n\t\t\t\t<div class=\"idy__imgBox fl\">\n\t\t\t\t\t<div class=\"idy__imgMask searchVal\">医疗与保健</div>\n\t\t\t\t\t<img class=\"idy__img\" src=\"https://s3.cn-north-1.amazonaws.com.cn/imgs/category/6.jpg\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"idy__descBox fl\">\n\t\t\t\t\t<div class=\"idy__titleBox clearfix\">\n\t\t\t\t\t\t<div class=\"idy__title fl\">七日资金</div>\n\t\t\t\t\t\t<div class=\"idy__No bgcolor4 fl\">No.12</div>\n\t\t\t\t\t\t<i class=\"icon iconfont fcolor1\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"idy__money\">\n\t\t\t\t\t\t<span class=\"moneyLight\">23万</span> <font class=\"idy__moneyUnit\">RMB</font>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class=\"idy__cxtLeftBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">累计金额</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">项目数</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">人气</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"idy__cxtMiddleBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">2.98亿 <font class=\"idy__moneyUnit\">RMB</font></li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">556</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">104万</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"idy__cxtRightBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor4\">No.7</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor4\">No.6</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor4\">No.6</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"insdustry__mask\">\n\t\t\t\t<div class=\"insdustry__opposite\">\n\t\t\t\t\t医疗/器械/个护/保健相关\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t\t<li class=\"industry__list\"> \n\t\t\t<div class=\"insdustry__positive mask__cate clearfix\" data-id=\"7\">\n\t\t\t\t<div class=\"idy__imgBox fl\">\n\t\t\t\t\t<div class=\"idy__imgMask searchVal\">智能母婴</div>\n\t\t\t\t\t<img class=\"idy__img\" src=\"https://s3.cn-north-1.amazonaws.com.cn/imgs/category/7.jpg\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"idy__descBox fl\">\n\t\t\t\t\t<div class=\"idy__titleBox clearfix\">\n\t\t\t\t\t\t<div class=\"idy__title fl\">七日资金</div>\n\t\t\t\t\t\t<div class=\"idy__No bgcolor4 fl\">No.13</div>\n\t\t\t\t\t\t<i class=\"icon iconfont fcolor1\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"idy__money\">\n\t\t\t\t\t\t<span class=\"moneyLight\">6万</span> <font class=\"idy__moneyUnit\">RMB</font>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class=\"idy__cxtLeftBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">累计金额</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">项目数</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">人气</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"idy__cxtMiddleBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">5,322万 <font class=\"idy__moneyUnit\">RMB</font></li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">144</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">24万</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"idy__cxtRightBox fl\">\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor4\">No.13</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor4\">No.13</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"idy__cxtList\">\n\t\t\t\t\t\t\t<div class=\"idy__No bgcolor4\">No.13</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"insdustry__mask\">\n\t\t\t\t<div class=\"insdustry__opposite\">\n\t\t\t\t\t智能玩具/儿童/母婴相关\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t</ul>\n</div>\n";

/***/ },
/* 109 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div id=\"gkvBox\" :transition=\"stack.pageDir\">\n\t<gkv-menu></gkv-menu>\n\t<c-header></c-header>\n\t<c-content></c-content>\n</div>\n";

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(111)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Center\\Center.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(112)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-d04be808/Center.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 111 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <script type="text/javascript">
	exports.default = {
		route: {
			activate: function activate(transition) {
				console.log('hook-example activated!');
				transition.next();
			},
			deactivate: function deactivate(transition) {
				console.log('hook-example deactivated!');
				transition.next();
			}
		}
	};
	// </script>
	//
	// <template>
	// 	<div style="height: 667px; width: 100%; background-color: orange;">456</div>
	// </template>

/***/ },
/* 112 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div style=\"height: 667px; width: 100%; background-color: orange;\">456</div>\n";

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(114)
	__vue_script__ = __webpack_require__(116)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Product\\Index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(135)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-20baa125/Index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(115);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\nhtml.on {\n  /*overflow: hidden;*/ }\n\n/** bgcolor **/\n.bg11 {\n  background-color: #81cce3 !important;\n  border-color: #81cce3 !important; }\n\n.bg12 {\n  background-color: #a7dbeb !important;\n  border-color: #a7dbeb !important; }\n\n.bg13 {\n  background-color: #cdebf4 !important;\n  border-color: #cdebf4 !important; }\n\n.bg21 {\n  background-color: #f3565d !important;\n  border-color: #f3565d !important; }\n\n.bg22 {\n  background-color: #f7888d !important;\n  border-color: #f7888d !important; }\n\n.bg23 {\n  background-color: #fabbbe !important;\n  border-color: #fabbbe !important; }\n\n.bg31 {\n  background-color: #45b7af !important;\n  border-color: #45b7af !important; }\n\n.bg32 {\n  background-color: #7cccc7 !important;\n  border-color: #7cccc7 !important; }\n\n.bg33 {\n  background-color: #b5e2df !important;\n  border-color: #b5e2df !important; }\n\n.bg41 {\n  background-color: #f8cb00 !important;\n  border-color: #f8cb00 !important; }\n\n.bg42 {\n  background-color: #fada4c !important;\n  border-color: #fada4c !important; }\n\n.bg43 {\n  background-color: #fcea99 !important;\n  border-color: #fcea99 !important; }\n\n.f11 {\n  color: #81cce3 !important; }\n\n.f12 {\n  color: #a7dbeb !important; }\n\n.f13 {\n  color: #cdebf4 !important; }\n\n.f21 {\n  color: #f3565d !important; }\n\n.f22 {\n  color: #f7888d !important; }\n\n.f23 {\n  color: #fabbbe !important; }\n\n.f31 {\n  color: #45b7af !important; }\n\n.f32 {\n  color: #7cccc7 !important; }\n\n.f33 {\n  color: #b5e2df !important; }\n\n.f41 {\n  color: #f8cb00 !important; }\n\n.f42 {\n  color: #fada4c !important; }\n\n.f43 {\n  color: #fcea99 !important; }\n\n.desc__gkvBox {\n  padding-bottom: 1.2rem; }\n\n.descBan {\n  position: relative;\n  width: 100%;\n  height: 5.04rem;\n  background-size: 100% 100%; }\n\n.descBan__mask {\n  height: 100%;\n  width: 100%;\n  /*background: -moz-linear-gradient(top,  rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%); \r\n\tbackground: -webkit-linear-gradient(top,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.4) 100%); \r\n\tbackground: linear-gradient(to bottom,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.4) 100%); \r\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#33000000',GradientType=0 ); \r\n*/\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.2);\n  bottom: 0rem;\n  left: 0rem; }\n\n.descBan__opt {\n  width: 100%;\n  height: 0.96rem;\n  padding: 0rem; }\n\n.nav__pMenuBox {\n  height: 0.96rem;\n  line-height: 0.96rem;\n  color: #fff;\n  font-size: 0;\n  padding-left: 0.3rem; }\n\n.nav__pMenuIcon {\n  font-size: 0.3rem;\n  text-align: left;\n  margin-right: 0.24rem; }\n\n.nav__pMenuIcon .icon {\n  font-size: 0.44rem;\n  color: #fff; }\n\n.nav__pSearchBox {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-flex-grow: 1;\n  height: 0.96rem;\n  line-height: 1.02rem;\n  width: 1rem;\n  text-align: center; }\n\n.nav__pSearchBox .icon {\n  font-size: 0.5rem;\n  color: #fff; }\n\n.pnc__main {\n  text-align: right;\n  box-sizing: border-box;\n  text-align: center; }\n\n.descBan__cxt {\n  position: absolute;\n  color: #fff;\n  font-weight: bold;\n  font-size: 0.4rem;\n  line-height: 0.46rem;\n  bottom: 0.3rem;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5); }\n\n.desc__status {\n  height: 0.86rem;\n  padding-top: 0.24rem;\n  padding-bottom: 0.24rem;\n  line-height: 0.36rem;\n  background-color: #fff;\n  border-bottom: 1px solid #e1e1e1; }\n\n.platformLogo {\n  width: 2rem;\n  height: 0.38rem;\n  margin-right: 0.24rem;\n  vertical-align: top; }\n\n.desc__cdFd {\n  color: #65c3df; }\n\n.desc__link {\n  display: block;\n  width: 1.9rem;\n  color: #999;\n  position: relative; }\n\n.desc__link .icon {\n  font-size: 0.34rem;\n  margin-left: 0.3rem;\n  position: absolute;\n  top: -0.02rem;\n  right: 0rem; }\n\n.desc__info {\n  width: 100%;\n  border-bottom: 1px solid #d1d1d1; }\n\n.desc__funding {\n  border-bottom: 1px solid #ddd;\n  padding-top: 0.3rem;\n  background: #fff; }\n\n.desc__fdList {\n  width: 3.2rem;\n  padding-bottom: 0.2rem; }\n\n.desc__fdList:first-child {\n  margin-right: 0.5rem; }\n\n.fd__font {\n  height: 0.34rem;\n  line-height: 0.34rem; }\n\n.fd__title {\n  color: #999;\n  font-size: 0.3rem;\n  margin-bottom: 0.2rem; }\n\n.fd__curMoney {\n  padding-bottom: 0.01rem;\n  display: inline-block;\n  border-bottom: 1px solid #999; }\n\n.fd__orgMoney {\n  color: #999;\n  display: inline-block; }\n\n.fd__tarMoney {\n  display: inline-block;\n  border-bottom: 1px solid #999;\n  padding-bottom: 0.01rem; }\n\n.fd__curMoney,\n.fd__tarMoney {\n  padding-bottom: 0.1rem; }\n\n.money__type {\n  font-size: 0.3rem; }\n\n/** 琛屼笟姣旇緝鏍囩 **/\n.desc__compareBox {\n  margin-top: 0.3rem; }\n\n.desc__compareTabs {\n  background-color: #fff;\n  height: 1.1rem;\n  line-height: 1.1rem;\n  border-bottom: 1px solid #ddd; }\n\n.desc__compareTabsList {\n  text-align: center;\n  width: 33.3333%;\n  position: relative;\n  height: 100%; }\n\n.desc__cpListBottom {\n  width: 100%;\n  position: absolute;\n  height: 0.08rem;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: none; }\n\n.desc__compareTabsList.on .desc__cpListBottom {\n  display: block; }\n\n.desc__compare {\n  position: relative;\n  border-bottom: 1px solid #e1e1e1;\n  background-color: #fff; }\n\n.desc__idyTitle {\n  line-height: 0.3rem;\n  height: 0.9rem;\n  padding-top: 0.3rem;\n  padding-bottom: 0.3rem;\n  color: #999;\n  display: block; }\n\n.desc__titleLight {\n  color: #333; }\n\n/** tabs1 start **/\n.cptRsp__list {\n  padding: 0.21rem 0rem;\n  border-bottom: 1px solid #ddd; }\n\n.cptRsp__none {\n  text-align: center;\n  background-color: #fff; }\n\n.cptRsp__list:last-child {\n  border: none; }\n\n.cptRsp__descBox {\n  margin-top: 0.23rem; }\n\n.cptRsp__desclist {\n  height: 0.28rem;\n  line-height: 0.24rem;\n  color: #999;\n  clear: both;\n  margin-bottom: 0.2rem; }\n\n.cptRsp__descInfo {\n  margin-left: 0.12rem; }\n\n.cptRsp__descMoneyBox {\n  margin-left: 0.3rem; }\n\n.cptRsp__barPanel {\n  margin-top: 0.23rem;\n  height: 1.34rem; }\n\n.cptRsp__barBox {\n  width: 0.34rem;\n  height: 1.34rem;\n  position: relative;\n  margin-right: 0.2rem; }\n\n.cptRsp__bar {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border-top-left-radius: 0.1rem;\n  border-top-right-radius: 0.1rem; }\n\n/** tabs1 end **/\n/** tabs2 start **/\n.desc__competitorList {\n  padding-top: 0.2rem;\n  padding-bottom: 0.28rem;\n  border-bottom: 1px solid #ddd; }\n\n.cpt__self {\n  background-color: #fef7d9; }\n\n.desc__competitorList:last-child {\n  border: 0; }\n\n.cpt__infoBox {\n  margin-left: 0.25rem;\n  width: 6.4rem; }\n\n.cpt__proName {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.cpt__statusBox {\n  margin-top: 0.2rem;\n  height: 0.22rem;\n  line-height: 0.22rem; }\n\n.cpt__status {\n  width: 2.1rem; }\n\n.cpt__statusCnt {\n  color: #999; }\n\n.desc__competitorMore {\n  line-height: 0.12rem;\n  text-align: center;\n  padding: 0.14rem 0rem; }\n\n/** tabs2 end **/\n/** tabs3 start **/\n.desc__compareList {\n  border-top: 1px solid #ddd;\n  padding-top: 0.38rem; }\n\n.desc__compareList:first-child {\n  border-top: none;\n  padding-top: 0.08rem; }\n\n.desc__compareTitle {\n  line-height: 0.3rem;\n  padding-bottom: 0.67rem; }\n\n.desc__compareBarBox {\n  height: 0.3rem;\n  width: 100%;\n  border-radius: 999px;\n  position: relative;\n  margin-bottom: 0.3rem; }\n\n.compareBar__common {\n  height: 0.3rem;\n  border-radius: 999px;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n.compareBar__max {\n  width: 100%; }\n\n.compareBar__mode {\n  width: 50%; }\n\n.compareBar__self {\n  width: 50%; }\n\n.compareBar__selfFlag {\n  position: absolute;\n  right: 0;\n  width: 0.38rem;\n  margin-right: -0.15rem;\n  top: -0.5rem; }\n\n.compareBar__selfFlag .icon {\n  font-size: 0.3rem; }\n\n.desc__barExplainList {\n  height: 0.3rem;\n  /*display: flex;*/\n  /*align-items: center;*/\n  line-height: 0.3rem;\n  margin-bottom: 0.2rem;\n  color: #999; }\n\n.explain__flag {\n  width: 0.33rem;\n  line-height: 0.27rem;\n  height: 0.27rem;\n  font-size: 0;\n  /*flex-grow: 0.1;*/\n  margin-right: 0.1rem;\n  margin-top: 0.03rem;\n  text-align: center; }\n\n.explain__flag .icon {\n  font-size: 0.24rem; }\n\n.explain__title {\n  /*flex-grow: 12;*/ }\n\n.explain__data {\n  /*flex-grow: 1;*/\n  width: 2.5rem;\n  text-align: right;\n  height: 0.3rem; }\n\n.explain__unit {\n  font-size: 0.24rem; }\n\n/** tabs3 end **/\n.desc__sponsorBox {\n  padding-top: 0.3rem;\n  padding-bottom: 0.3rem;\n  font-size: 0.24rem;\n  background-color: #fff; }\n\n.desc__sponsor {\n  font-weight: normal;\n  margin-bottom: 0.1rem; }\n\n.desc__sponsorCxt {\n  line-height: 0.34rem; }\n\n.desc__chartsBox {\n  width: 100%;\n  margin-top: 0.18rem;\n  background-color: #fff;\n  border-top: 1px solid #d1d1d1;\n  padding: 0rem 0.15rem;\n  box-sizing: border-box;\n  height: auto; }\n\n.desc__charts {\n  border-top: 1px solid #eee;\n  margin-top: 0.3rem;\n  padding-top: 0.2rem;\n  width: 100%;\n  height: 300px; }\n\n.desc__charts:first-child {\n  border-top: 0;\n  margin-top: 0rem; }\n\n.desc__charts .highcharts-container {\n  margin: auto; }\n\n.desc__replyBox {\n  margin-top: 0.35rem;\n  background-color: #fff;\n  padding-bottom: 0.96rem; }\n\n.desc__replyTitle {\n  font-size: 0.24rem;\n  line-height: 0.24rem;\n  color: #999;\n  padding-top: 0.3rem;\n  padding-bottom: 0.2rem; }\n\n.desc__replyList {\n  padding-top: 0.3rem;\n  padding-bottom: 0.3rem;\n  border-top: 1px solid #ddd; }\n\n.desc__userLogo {\n  width: 0.8rem;\n  height: 0.8rem;\n  background-color: #999; }\n\n.desc__userImg {\n  width: 100%;\n  height: 100%; }\n\n.desc__userInfoBox {\n  width: 5.895rem;\n  margin-left: 0.2rem; }\n\n.desc__userInfo {\n  line-height: 0.24rem;\n  margin-bottom: 0.22rem; }\n\n.desc__userNameBox {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-flex-grow: 1;\n  color: #35dcd8; }\n\n.desc__reply {\n  color: #333; }\n\n.desc__replyTime {\n  color: #999; }\n\n.desc__moreReplyBtn {\n  height: 0.84rem;\n  text-align: center;\n  line-height: 0.84rem;\n  background-color: #ddd;\n  color: #333;\n  font-size: 0.24rem; }\n\n.desc__replyBtnBox {\n  height: 0.97rem;\n  max-width: 7.5rem;\n  margin: auto;\n  position: fixed;\n  bottom: 0rem;\n  left: 0rem;\n  right: 0rem;\n  background-color: #fff;\n  border-top: 1px solid #ddd; }\n\n.desc__replyImg {\n  height: 0.97rem;\n  line-height: 0.97rem; }\n\n.desc__replyBtnBox.on {\n  display: none; }\n\n.desc__replyBtn {\n  width: 5.2rem;\n  height: 0.7rem;\n  line-height: 0.7rem;\n  margin-top: 0.13rem;\n  background-color: #ddd;\n  border-radius: 999px;\n  color: #666; }\n\n.desc__replyLogo1 {\n  width: 0.38rem;\n  height: 0.44rem;\n  margin-right: 0.2rem;\n  vertical-align: middle;\n  margin-top: -0.1rem; }\n\n.desc__replyLogo2 {\n  width: 0.6rem;\n  height: 0.48rem;\n  margin-left: 0.2rem;\n  vertical-align: middle;\n  margin-top: -0.05rem; }\n\n.desc__mark {\n  width: 0.54rem;\n  height: 0.5rem;\n  vertical-align: middle;\n  margin-top: -0.1rem; }\n\n.desc__markBox {\n  height: 0.97rem;\n  padding-left: 0.3rem;\n  line-height: 0.97rem; }\n\n.pnc__replyMaskBox {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 999; }\n\nhtml.on .pnc__replyMaskBox {\n  display: block; }\n\n.pnc__replyMask {\n  position: absolute;\n  top: 1069px;\n  left: 0;\n  right: 0; }\n\n.pnc__replyOpt {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  display: -webkit-flex; }\n\n.pnc__replyCancel {\n  width: 3.76rem;\n  display: block;\n  background-color: #fff;\n  box-sizing: border-box;\n  border: 1px solid #eee;\n  text-align: center;\n  height: 0.96rem;\n  line-height: 0.94rem;\n  outline: none; }\n\n.pnc__replyConfirm {\n  width: 3.76rem;\n  display: block;\n  background-color: #fff;\n  border: 1px solid #eee;\n  border-left: none;\n  box-sizing: border-box;\n  text-align: center;\n  height: 0.96rem;\n  line-height: 0.94rem;\n  outline: none; }\n\n.disabled {\n  color: #999; }\n\n.pnc__replyCxt {\n  padding: 0.28rem 0.3rem;\n  min-height: 3rem; }\n\n.pnc__replyTxt {\n  width: 100%;\n  height: 100%;\n  border: 0;\n  height: 4rem;\n  outline: none;\n  resize: none;\n  border-bottom: 1px solid #ddd; }\n\n.pnc__replyTxt:focus {\n  border-bottom: 1px solid #35dcd8; }\n", ""]);

	// exports


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Banner = __webpack_require__(117);

	var _Banner2 = _interopRequireDefault(_Banner);

	var _Status = __webpack_require__(123);

	var _Status2 = _interopRequireDefault(_Status);

	var _Info = __webpack_require__(126);

	var _Info2 = _interopRequireDefault(_Info);

	var _Charts = __webpack_require__(129);

	var _Charts2 = _interopRequireDefault(_Charts);

	var _Reply = __webpack_require__(132);

	var _Reply2 = _interopRequireDefault(_Reply);

	var _Menu = __webpack_require__(37);

	var _Menu2 = _interopRequireDefault(_Menu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <script type="text/javascript">
	exports.default = {
		vuex: {
			getters: {
				product: function product(_ref) {
					var _product = _ref.product;
					return _product;
				},
				stack: function stack(_ref2) {
					var router = _ref2.router;
					return router.stack;
				}
			}
		},
		computed: {
			info: function info() {
				return this.product[this.$route.params.productId];
			}
		},
		methods: {},
		components: {
			'p-banner': _Banner2.default,
			'p-status': _Status2.default,
			'p-info': _Info2.default,
			'p-charts': _Charts2.default,
			'p-reply': _Reply2.default,
			'gkv-menu': _Menu2.default
		}
	};
	// </script>
	//
	// <template>
	// 	<div id="gkvBox" class="desc__gkvBox" :transition="stack.pageDir">
	// 		<gkv-menu></gkv-menu>
	// 		<p-banner :args="info"></p-banner>
	// 		<p-status :args="info"></p-status>
	// 		<p-info :args="info"></p-info>
	// 		<!-- 图表区 start -->
	// 		<p-charts :args="info"></p-charts>
	// 		<!-- 图表区 end -->
	// 		<!-- 评论区 start -->
	// 		<p-reply :args="info"></p-reply>
	// 		<!-- 评论区end -->
	// 	</div>
	// </template>
	//
	// <style lang="sass" type="text/css">
	// 	@import "../../sass/descPage"
	// </style>

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(118)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Product\\Banner.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(122)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-e199d72e/Banner.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Header = __webpack_require__(119);

	var _Header2 = _interopRequireDefault(_Header);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		components: {
			'p-header': _Header2.default
		}
	};
	// </script>
	//
	// <template>
	// 	<div class="descBan" style="background-image: url('//img30.360buyimg.com/cf/jfs/t3223/156/2204315404/153170/af5061e2/57ddf627Nb8c47bf7.jpg')" id="projectName" data-id="25823">
	// 		<div class="descBan__mask">
	// 			<p-header></p-header>
	// 		</div>
	// 		<div class="descBan__cxt container">
	// 			嗨镜 躺着看的巨幕影院
	// 		</div>
	// 	</div>
	// </template>
	// <script type="text/javascript">

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(120)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Product\\Header.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(121)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-428fdf4a/Header.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _actions = __webpack_require__(15);

	exports.default = {
		vuex: {
			actions: {
				isShowMenu: _actions.isShowMenu,
				isClick: _actions.isClick
			}
		}
	};
	// </script>
	//
	// <template>
	// 	<div class="descBan__opt container">
	// 		<div class="nav__pMenuBox fl clearfix" @click="isShowMenu">
	// 			<div class="nav__pMenuIcon fl">
	// 				<i class="icon iconfont"></i>
	// 			</div>
	// 		</div>
	// 		<a href="/index/center" class="pnc__main pnc__mainLink fr">
	// 			<i class="icon iconfont"></i>
	// 		</a>
	// 		<div class="nav__pSearchBox nav__search fr" 
	// 			 @click="isClick"
	// 			 v-link="{path: '/search'}">
	// 			<i class="icon iconfont"></i>
	// 		</div>
	// 	</div>
	// </template>
	// <script type="text/javascript">

/***/ },
/* 121 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"descBan__opt container\">\n\t<div class=\"nav__pMenuBox fl clearfix\" @click=\"isShowMenu\">\n\t\t<div class=\"nav__pMenuIcon fl\">\n\t\t\t<i class=\"icon iconfont\"></i>\n\t\t</div>\n\t</div>\n\t<a href=\"/index/center\" class=\"pnc__main pnc__mainLink fr\">\n\t\t<i class=\"icon iconfont\"></i>\n\t</a>\n\t<div class=\"nav__pSearchBox nav__search fr\" \n\t\t @click=\"isClick\"\n\t\t v-link=\"{path: '/search'}\">\n\t\t<i class=\"icon iconfont\"></i>\n\t</div>\n</div>\n";

/***/ },
/* 122 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n<div class=\"descBan\" style=\"background-image: url('//img30.360buyimg.com/cf/jfs/t3223/156/2204315404/153170/af5061e2/57ddf627Nb8c47bf7.jpg')\" id=\"projectName\" data-id=\"25823\">\n\t<div class=\"descBan__mask\">\n\t\t<p-header></p-header>\n\t</div>\n\t<div class=\"descBan__cxt container\">\n\t\t嗨镜 躺着看的巨幕影院\n\t</div>\n</div>\n";

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(124)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Product\\Status.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(125)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-490cdba2/Status.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 124 */
/***/ function(module, exports) {

	// <script type="text/javascript">

	// </script>
	//
	// <template>
	// 	<div class="desc__status container">
	// 		<img class="platformLogo" src="https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/descPage/logo2.png" width="200" height="38">
	// 		<span class="desc__cdFd">众筹中</span>
	// 		<a href="http://z.jd.com/project/details/66041.html" class="desc__link fr">
	// 				剩余29天
	// 		<i class="icon iconfont"></i></a>
	// 	</div>
	// </template>
	"use strict";

/***/ },
/* 125 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n<div class=\"desc__status container\">\n\t<img class=\"platformLogo\" src=\"https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/descPage/logo2.png\" width=\"200\" height=\"38\">\n\t<span class=\"desc__cdFd\">众筹中</span>\n\t<a href=\"http://z.jd.com/project/details/66041.html\" class=\"desc__link fr\">\n\t\t\t剩余29天\n\t<i class=\"icon iconfont\"></i></a>\n</div>\n";

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(127)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Product\\Info.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(128)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-04e44e2b/Info.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _actions = __webpack_require__(15);

	exports.default = {
		props: ['args'],
		vuex: {
			actions: {
				protTabs: _actions.protTabs
			}
		},
		methods: {
			percent: function percent(_arg1, _arg2) {
				return (_arg1 / _arg2 * 100).toFixed(3) + '%';
			},
			fourDigit: function fourDigit(_num, unit) {
				var strNum = (_num + '').split('.')[0];
				var numLen = strNum.length;
				var subNum = Math.floor(numLen / 4);
				var subLen = numLen % 4 == 0 ? subNum - 1 : subNum;
				var arrNum = strNum.split('');
				arrNum.length = numLen - subLen * 4;
				var endNum = this.formatNum(arrNum.join(''));
				if (unit == true) {
					_num >= 10000 && _num < 100000000 && (endNum += '万');
					_num >= 100000000 && (endNum += '亿');
				}
				return endNum;
			},
			formatNum: function formatNum(_num, unit) {
				var temp = (_num + '').split('').reverse();
				var newNum = '',
				    endNum = '';
				while (temp.length > 3) {
					newNum += temp.splice(0, 3).join('') + ',';
				}
				newNum += temp.join('');
				endNum = newNum.split('').reverse().join('');
				if (unit == true) {
					_num >= 10000 && _num < 100000000 && (endNum += '万');
					_num >= 100000000 && (endNum += '亿');
				}
				return endNum;
			}
		}
	};
	// </script>
	//
	// <template>
	// 	<div class="desc__info">
	// 		<ul class="desc__funding container clearfix">
	// 			<li class="desc__fdList fl" v-if="args.currencyId==1">
	// 				<div class="fd__title fd__font">已筹</div>
	// 					<div class="fd__orgMoney size36 fred2 fd__font">{{formatNum(args.currMoney)}} <span class="fred2 money__type">{{args.currencyNick}}</span></div>
	// 			</li>
	// 			<li class="desc__fdList fl" v-else>
	// 				<div class="fd__title fd__font">已筹</div>
	// 					<div class="fd__curMoney size36 fred2 fd__font">{{formatNum(args.currMoneyOrg)}} <span class="fred2 money__type">{{args.currencyNick}}</span></div><br>
	// 					<div class="fd__orgMoney fd__font">{{formatNum(args.currMoney)}} <span class="money__type">CNY</span></div>
	// 			</li>
	// 			<li class="desc__fdList fl" v-if="args.currencyId==1">
	// 				<div class="fd__title fd__font">目标</div>
	// 					<div class="fd__orgMoney size36 fblue2 fd__font">{{formatNum(args.targetMoney)}} <span class="fblue2 money__type">{{args.currencyNick}}</span></div>
	// 			</li>
	// 			<li class="desc__fdList fl" v-else>
	// 				<div class="fd__title fd__font">目标</div>
	// 					<div class="fd__tarMoney size36 fblue2 fd__font">{{args.targetMoneyOrg}} <span class="fblue2 money__type">{{args.currencyNick}}</span></div><br>
	// 					<div class="fd__orgMoney fd__font">{{args.targetMoney}} <span class="money__type">CNY</span></div>
	// 			</li>
	// 		</ul>
	// 		<div class="desc__sponsorBox container">
	// 			<h2 class="desc__sponsor">
	// 				项目发起人：{{ args.personName }}
	// 			</h2>
	// 			<div class="desc__sponsorCxt">
	// 				{{ args.personDesc }}
	// 			</div>
	// 		</div>
	//
	//
	// 		<div class="desc__compareBox">
	// 			<ul class="desc__compareTabs clearfix">
	// 				<li v-for="item in args.infoTabs" 
	// 					class="desc__compareTabsList size28 fl"
	// 					:class="{on: item == args.activeInfoTab}"
	// 					@click="protTabs(item)">
	// 					{{ item }}
	// 					<div class="desc__cpListBottom green2"></div>
	// 				</li>
	// 			</ul>				
	// 			<div class="desc__compare"
	// 				 :class="{hide:args.activeInfoTab!=='竞争关系'}">
	// 				<ul class="cptRspBox container">
	// 					<li class="cptRsp__list clearfix">
	// 						<div class="cptRsp__title">已筹金额</div>
	// 						<ul class="cptRsp__descBox fl">
	// 							<li class="cptRsp__desclist size28 clearfix">
	// 								<div class="cptRsp__flag f11 fl">
	// 									<i class="icon iconfont size24"></i>
	// 								</div>
	// 								<div class="cptRsp__descInfo fl">本项目筹资</div>
	// 								<div class="cptRsp__descMoneyBox fr">
	// 									<font class="size28">{{fourDigit(args.currMoney,true)}}</font>
	// 									<font class="size24"> CNY</font>
	// 								</div>
	// 							</li>
	// 							<li class="cptRsp__desclist size28 clearfix">
	// 								<div class="cptRsp__flag f12 fl">
	// 									<i class="icon iconfont size24"></i>
	// 								</div>
	// 								<div class="cptRsp__descInfo fl">竞争者平均</div>
	// 								<div class="cptRsp__descMoneyBox fr">
	// 									<font class="size28">{{fourDigit(args.moneyAvg,true)}}</font>
	// 									<font class="size24"> CNY</font>
	// 								</div>
	// 							</li>
	// 							<li class="cptRsp__desclist size28 clearfix">
	// 								<div class="cptRsp__flag f13 fl">
	// 									<i class="icon iconfont size24"></i>
	// 								</div>
	// 								<div class="cptRsp__descInfo fl">竞争者最高</div>
	// 								<div class="cptRsp__descMoneyBox fr">
	// 									<font class="size28">{{fourDigit(args.moneyMax,true)}}</font>
	// 									<font class="size24"> CNY</font>
	// 								</div>
	// 							</li>
	// 						</ul>
	// 						<div class="cptRsp__barPanel fr clearfix">
	// 							<div class="cptRsp__barBox fl">
	// 								<div class="cptRsp__bar bg11" 
	// 									 :style="{height: percent(args.currMoney,args.moneyMax)}"></div>
	// 							</div>
	// 							<div class="cptRsp__barBox fl">
	// 								<div class="cptRsp__bar bg12"
	// 									 :style="{height: percent(args.moneyAvg,args.moneyMax)}"></div>
	// 							</div>
	// 							<div class="cptRsp__barBox fl">
	// 								<div class="cptRsp__bar bg13"></div>
	// 							</div>
	// 						</div>
	// 					</li>
	// 					<li class="cptRsp__list clearfix">
	// 						<div class="cptRsp__title">项目完成率</div>
	// 						<ul class="cptRsp__descBox fl">
	// 							<li class="cptRsp__desclist size28 clearfix">
	// 								<div class="cptRsp__flag f21 fl">
	// 									<i class="icon iconfont size24"></i>
	// 								</div>
	// 								<div class="cptRsp__descInfo fl">本项目完成率</div>
	// 								<div class="cptRsp__descMoneyBox fr">
	// 									<font class="size28">{{formatNum(args.finishPer)}}%</font>
	// 									<!-- <font class="size24"> RMB</font> -->
	// 								</div>
	// 							</li>
	// 							<li class="cptRsp__desclist size28 clearfix">
	// 								<div class="cptRsp__flag f22 fl">
	// 									<i class="icon iconfont size24"></i>
	// 								</div>
	// 								<div class="cptRsp__descInfo fl">竞争者平均</div>
	// 								<div class="cptRsp__descMoneyBox fr">
	// 									<font class="size28">{{formatNum(args.finishAvg)}}%</font>
	// 									<!-- <font class="size24"> RMB</font> -->
	// 								</div>
	// 							</li>
	// 							<li class="cptRsp__desclist size28 clearfix">
	// 								<div class="cptRsp__flag f23 fl">
	// 									<i class="icon iconfont size24"></i>
	// 								</div>
	// 								<div class="cptRsp__descInfo fl">竞争者最高</div>
	// 								<div class="cptRsp__descMoneyBox fr">
	// 									<font class="size28">{{formatNum(args.finishMax)}}%</font>
	// 									<!-- <font class="size24"> RMB</font> -->
	// 								</div>
	// 							</li>
	// 						</ul>
	// 						<div class="cptRsp__barPanel fr clearfix">
	// 							<div class="cptRsp__barBox fl">
	// 								<div class="cptRsp__bar bg21"
	// 									 :style="{height: percent(args.finishPer,args.finishMax)}"></div>
	// 							</div>
	// 							<div class="cptRsp__barBox fl">
	// 								<div class="cptRsp__bar bg22"
	// 									 :style="{height: percent(args.finishAvg,args.finishMax)}"></div>
	// 							</div>
	// 							<div class="cptRsp__barBox fl">
	// 								<div class="cptRsp__bar bg23"></div>
	// 							</div>
	// 						</div>
	// 					</li>
	// 					<li class="cptRsp__list clearfix">
	// 						<div class="cptRsp__title">支持者</div>
	// 						<ul class="cptRsp__descBox fl">
	// 							<li class="cptRsp__desclist size28 clearfix">
	// 								<div class="cptRsp__flag f31 fl">
	// 									<i class="icon iconfont size24"></i>
	// 								</div>
	// 								<div class="cptRsp__descInfo fl">本项目支持人数</div>
	// 								<div class="cptRsp__descMoneyBox fr">
	// 									<font class="size28">{{fourDigit(args.supportPerson,true)}}</font>
	// 								</div>
	// 							</li>
	// 							<li class="cptRsp__desclist size28 clearfix">
	// 								<div class="cptRsp__flag f32 fl">
	// 									<i class="icon iconfont size24"></i>
	// 								</div>
	// 								<div class="cptRsp__descInfo fl">竞争者平均</div>
	// 								<div class="cptRsp__descMoneyBox fr">
	// 									<font class="size28">{{fourDigit(args.supportAvg,true)}}</font>
	// 								</div>
	// 							</li>
	// 							<li class="cptRsp__desclist size28 clearfix">
	// 								<div class="cptRsp__flag f33 fl">
	// 									<i class="icon iconfont size24"></i>
	// 								</div>
	// 								<div class="cptRsp__descInfo fl">竞争者最高</div>
	// 								<div class="cptRsp__descMoneyBox fr">
	// 									<font class="size28">{{fourDigit(args.supportMax,true)}}</font>
	// 								</div>
	// 							</li>
	// 						</ul>
	// 						<div class="cptRsp__barPanel fr clearfix">
	// 							<div class="cptRsp__barBox fl">
	// 								<div class="cptRsp__bar bg31"
	// 									 :style="{height: percent(args.supportPerson,args.supportMax)}"></div>
	// 							</div>
	// 							<div class="cptRsp__barBox fl">
	// 								<div class="cptRsp__bar bg32"
	// 									 :style="{height: percent(args.supportAvg,args.supportMax)}"></div>
	// 							</div>
	// 							<div class="cptRsp__barBox fl">
	// 								<div class="cptRsp__bar bg33"></div>
	// 							</div>
	// 						</div>
	// 					</li>
	// 					<li class="cptRsp__list clearfix">
	// 						<div class="cptRsp__title">人均支持</div>
	// 						<ul class="cptRsp__descBox fl">
	// 							<li class="cptRsp__desclist size28 clearfix">
	// 								<div class="cptRsp__flag f41 fl">
	// 									<i class="icon iconfont size24"></i>
	// 								</div>
	// 								<div class="cptRsp__descInfo fl">本项目人均支持</div>
	// 								<div class="cptRsp__descMoneyBox fr">
	// 									<font class="size28">{{fourDigit(args.averageMoney,true)}}</font>
	// 									<font class="size24"> CNY</font>
	// 								</div>
	// 							</li>
	// 							<li class="cptRsp__desclist size28 clearfix">
	// 								<div class="cptRsp__flag f42 fl">
	// 									<i class="icon iconfont size24"></i>
	// 								</div>
	// 								<div class="cptRsp__descInfo fl">竞争者平均</div>
	// 								<div class="cptRsp__descMoneyBox fr">
	// 									<font class="size28">{{fourDigit(args.averageAvg,true)}}</font>
	// 									<font class="size24"> CNY</font>
	// 								</div>
	// 							</li>
	// 							<li class="cptRsp__desclist size28 clearfix">
	// 								<div class="cptRsp__flag f43 fl">
	// 									<i class="icon iconfont size24"></i>
	// 								</div>
	// 								<div class="cptRsp__descInfo fl">竞争者最高</div>
	// 								<div class="cptRsp__descMoneyBox fr">
	// 									<font class="size28">{{fourDigit(args.averageMax,true)}}</font>
	// 									<font class="size24"> CNY</font>
	// 								</div>
	// 							</li>
	// 						</ul>
	// 						<div class="cptRsp__barPanel fr clearfix">
	// 							<div class="cptRsp__barBox fl">
	// 								<div class="cptRsp__bar bg41"
	// 									 :style="{height: percent(args.averageMoney,args.averageMax)}"></div>
	// 							</div>
	// 							<div class="cptRsp__barBox fl">
	// 								<div class="cptRsp__bar bg42"
	// 									 :style="{height: percent(args.averageAvg,args.averageMax)}"></div>
	// 							</div>
	// 							<div class="cptRsp__barBox fl">
	// 								<div class="cptRsp__bar bg43"></div>
	// 							</div>
	// 						</div>
	// 					</li>
	// 				</ul>
	// 			</div>
	// 			<div class="desc__compare hide"
	// 				 :class="{hide:args.activeInfoTab!=='竞争者'}">
	// 				<ul class="desc__competitorBox">
	// 					<template v-for="item in args.compList">
	// 						<li class="desc__competitorMore size24" 
	// 							v-if="args.order>10&&$index>=9">
	// 								•<br>•<br>•
	// 						</li>
	// 						<li class="desc__competitorList container clearfix"
	// 							:class="{cpt__self: args.order==$index+1||args.order>10}">
	// 							<div class="cpt__No size28 fl">
	// 								<template v-if="$index<9||args.order<=10">{{$index+1}}</template>
	// 								<template v-else>{{args.order}}</template>
	// 							</div>
	// 							<div class="cpt__infoBox fl">
	// 								<div class="cpt__proName size28">
	// 									{{ item.productName }}
	// 								</div>
	// 								<div class="cpt__statusBox clearfix">
	// 									<div class="cpt__status fl clearfix">
	// 										<font class="cpt__statusCnt fl size24">
	// 												{{ item.productStatus }}
	// 										</font>
	// 										<font class="cpt__statusCnt fr size24">
	// 											{{ fourDigit(item.currMoney,true) }}
	// 										</font>
	// 									</div>
	// 									<div class="cpt__ptName fr"
	// 										 :class="'color'+item.website">
	// 										<font class="size24">{{ item.websiteName }}</font>
	// 									</div>
	// 								</div>
	// 							</div>
	// 						</li>
	// 					</template>
	// 				</ul>
	// 			</div>
	// 			<div class="desc__compare hide" 
	// 				 :class="{hide:args.activeInfoTab!=='行业比较'}">
	// 				<a href="##" class="desc__idyTitle container">
	// 					在 <span class="desc__titleLight">{{args.category.categoryName}}</span> 行业中
	// 				</a>
	// 				<ul class="desc__comparePanel">
	// 					<li class="desc__compareList container">
	// 						<div class="desc__compareTitle">
	// 							已筹金额
	// 						</div>
	// 						<div class="desc__compareBarBox">
	// 							<div class="compareBar__common blue1 compareBar__max" style="width: 100%"></div>
	// 							<div class="compareBar__common blue2 compareBar__mode" 
	// 								 :style="{width:  percent(args.categoryStat.moneyMod,args.categoryStat.moneyMax)}"></div>
	// 							<div class="compareBar__common fblue2 compareBar__self" 
	// 								 :style="{width: percent(args.currMoney,args.categoryStat.moneyMax)}">
	// 								<div class="compareBar__selfFlag">
	// 									<i class="icon iconfont"></i>
	// 								</div>
	// 							</div>
	// 						</div>
	// 						<ul class="desc__barExplain">
	// 							<li class="desc__barExplainList clearfix">
	// 								<div class="explain__flag fl fblue2">
	// 									<i class="icon iconfont"></i>
	// 								</div>
	// 								<div class="explain__title fl">本项目筹资</div>
	// 								<div class="explain__data fr">
	// 									{{ fourDigit(args.currMoney,true) }} <span class="explain__unit">CNY</span>
	// 								</div>
	// 							</li>
	// 							<li class="desc__barExplainList clearfix">
	// 								<div class="explain__flag fl fblue2">
	// 									<i class="icon iconfont"></i>
	// 								</div>
	// 								<div class="explain__title fl">同行业一般水平</div>
	// 								<div class="explain__data fr">
	// 									{{ fourDigit(args.categoryStat.moneyMod,true) }} <span class="explain__unit">CNY</span>
	// 								</div>
	// 							</li>
	// 							<li class="desc__barExplainList clearfix">
	// 								<div class="explain__flag fl fblue1">
	// 									<i class="icon iconfont"></i>
	// 								</div>
	// 								<div class="explain__title fl">同行业最高水平</div>
	// 								<div class="explain__data fr">
	// 									{{ fourDigit(args.categoryStat.moneyMax,true) }} <span class="explain__unit">CNY</span>
	// 								</div>
	// 							</li>
	// 						</ul>
	// 					</li>
	// 					<li class="desc__compareList container">
	// 						<div class="desc__compareTitle">
	// 							项目完成率
	// 						</div>
	// 						<div class="desc__compareBarBox">
	// 							<div class="compareBar__common red1 compareBar__max" style="width: 100%"></div>
	// 							<div class="compareBar__common red2 compareBar__mode"
	// 								 :style="{width:  percent(args.categoryStat.finishMod,args.categoryStat.finishMax)}"></div>
	// 							<div class="compareBar__common fred2 compareBar__self"
	// 								 :style="{width:  percent(args.finishPer,args.categoryStat.finishMax)}">
	// 								<div class="compareBar__selfFlag">
	// 									<i class="icon iconfont"></i>
	// 								</div>
	// 							</div>
	// 						</div>
	// 						<ul class="desc__barExplain">
	// 							<li class="desc__barExplainList clearfix">
	// 								<div class="explain__flag fl fred2">
	// 									<i class="icon iconfont"></i>
	// 								</div>
	// 								<div class="explain__title fl">本项目完成率</div>
	// 								<div class="explain__data fr">
	// 									{{ formatNum(args.finishPer) }} <span class="explain__unit">%</span>
	// 								</div>
	// 							</li>
	// 							<li class="desc__barExplainList clearfix">
	// 								<div class="explain__flag fl fred2">
	// 									<i class="icon iconfont"></i>
	// 								</div>
	// 								<div class="explain__title fl">同行业一般水平</div>
	// 								<div class="explain__data fr">
	// 									{{ formatNum(args.categoryStat.finishMod) }} <span class="explain__unit">%</span>
	// 								</div>
	// 							</li>
	// 							<li class="desc__barExplainList clearfix">
	// 								<div class="explain__flag fl fred1">
	// 									<i class="icon iconfont"></i>
	// 								</div>
	// 								<div class="explain__title fl">同行业最高水平</div>
	// 								<div class="explain__data fr">
	// 									{{ formatNum(args.categoryStat.finishMax) }} <span class="explain__unit">%</span>
	// 								</div>
	// 							</li>
	// 						</ul>
	// 					</li>
	// 					<li class="desc__compareList container">
	// 						<div class="desc__compareTitle">
	// 							支持者
	// 						</div>
	// 						<div class="desc__compareBarBox">
	// 							<div class="compareBar__common green1 compareBar__max" style="width: 100%"></div>
	// 							<div class="compareBar__common green2 compareBar__mode"
	// 								 :style="{width:  percent(args.categoryStat.supportMod,args.categoryStat.supportMax)}"></div>
	// 							<div class="compareBar__common fgreen2 compareBar__self"
	// 								 :style="{width:  percent(args.supportPerson,args.categoryStat.supportMax)}">
	// 								<div class="compareBar__selfFlag">
	// 									<i class="icon iconfont"></i>
	// 								</div>
	// 							</div>
	// 						</div>
	// 						<ul class="desc__barExplain">
	// 							<li class="desc__barExplainList clearfix">
	// 								<div class="explain__flag fl fgreen2">
	// 									<i class="icon iconfont"></i>
	// 								</div>
	// 								<div class="explain__title fl">本项目支持人数</div>
	// 								<div class="explain__data fr">
	// 									{{ fourDigit(args.supportPerson, true) }}
	// 								</div>
	// 							</li>
	// 							<li class="desc__barExplainList clearfix">
	// 								<div class="explain__flag fl fgreen2">
	// 									<i class="icon iconfont"></i>
	// 								</div>
	// 								<div class="explain__title fl">同行业一般水平</div>
	// 								<div class="explain__data fr">
	// 									{{ fourDigit(args.categoryStat.supportMod, true) }}
	// 								</div>
	// 							</li>
	// 							<li class="desc__barExplainList clearfix">
	// 								<div class="explain__flag fl fgreen1">
	// 									<i class="icon iconfont"></i>
	// 								</div>
	// 								<div class="explain__title fl">同行业最高水平</div>
	// 								<div class="explain__data fr">
	// 									{{ fourDigit(args.categoryStat.supportMax, true) }}
	// 								</div>
	// 							</li>
	// 						</ul>
	// 					</li>
	// 					<li class="desc__compareList container">
	// 						<div class="desc__compareTitle">
	// 							人均支持
	// 						</div>
	// 						<div class="desc__compareBarBox">
	// 							<div class="compareBar__common yellow1 compareBar__max" style="width: 100%"></div>
	// 							<div class="compareBar__common yellow2 compareBar__mode"
	// 								 :style="{width:  percent(args.categoryStat.capitaMod,args.categoryStat.capitaMax)}"></div>
	// 							<div class="compareBar__common fyellow2 compareBar__self"
	// 								 :style="{width:  percent(args.averageMoney,args.categoryStat.capitaMax)}">
	// 								<div class="compareBar__selfFlag">
	// 									<i class="icon iconfont"></i>
	// 								</div>
	// 							</div>
	// 						</div>
	// 						<ul class="desc__barExplain">
	// 							<li class="desc__barExplainList clearfix">
	// 								<div class="explain__flag fl fyellow2">
	// 									<i class="icon iconfont"></i>
	// 								</div>
	// 								<div class="explain__title fl">本项目人均支持</div>
	// 								<div class="explain__data fr">
	// 									{{ fourDigit(args.averageMoney, true) }} <span class="explain__unit">CNY</span>
	// 								</div>
	// 							</li>
	// 							<li class="desc__barExplainList clearfix">
	// 								<div class="explain__flag fl fyellow2">
	// 									<i class="icon iconfont"></i>
	// 								</div>
	// 								<div class="explain__title fl">同行业一般水平</div>
	// 								<div class="explain__data fr">
	// 									 {{ fourDigit(args.categoryStat.capitaMod, true) }} <span class="explain__unit">CNY</span>
	// 								</div>
	// 							</li>
	// 							<li class="desc__barExplainList clearfix">
	// 								<div class="explain__flag fl fyellow1">
	// 									<i class="icon iconfont"></i>
	// 								</div>
	// 								<div class="explain__title fl">同行业最高水平</div>
	// 								<div class="explain__data fr">
	// 									 {{ fourDigit(args.categoryStat.capitaMax, true) }} <span class="explain__unit">CNY</span>
	// 								</div>
	// 							</li>
	// 						</ul>
	// 					</li>
	// 				</ul>
	// 			</div>					
	// 		</div>
	// 	</div>
	// </template>
	// <script type="text/javascript">

/***/ },
/* 128 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"desc__info\">\n\t<ul class=\"desc__funding container clearfix\">\n\t\t<li class=\"desc__fdList fl\" v-if=\"args.currencyId==1\">\n\t\t\t<div class=\"fd__title fd__font\">已筹</div>\n\t\t\t\t<div class=\"fd__orgMoney size36 fred2 fd__font\">{{formatNum(args.currMoney)}} <span class=\"fred2 money__type\">{{args.currencyNick}}</span></div>\n\t\t</li>\n\t\t<li class=\"desc__fdList fl\" v-else>\n\t\t\t<div class=\"fd__title fd__font\">已筹</div>\n\t\t\t\t<div class=\"fd__curMoney size36 fred2 fd__font\">{{formatNum(args.currMoneyOrg)}} <span class=\"fred2 money__type\">{{args.currencyNick}}</span></div><br>\n\t\t\t\t<div class=\"fd__orgMoney fd__font\">{{formatNum(args.currMoney)}} <span class=\"money__type\">CNY</span></div>\n\t\t</li>\n\t\t<li class=\"desc__fdList fl\" v-if=\"args.currencyId==1\">\n\t\t\t<div class=\"fd__title fd__font\">目标</div>\n\t\t\t\t<div class=\"fd__orgMoney size36 fblue2 fd__font\">{{formatNum(args.targetMoney)}} <span class=\"fblue2 money__type\">{{args.currencyNick}}</span></div>\n\t\t</li>\n\t\t<li class=\"desc__fdList fl\" v-else>\n\t\t\t<div class=\"fd__title fd__font\">目标</div>\n\t\t\t\t<div class=\"fd__tarMoney size36 fblue2 fd__font\">{{args.targetMoneyOrg}} <span class=\"fblue2 money__type\">{{args.currencyNick}}</span></div><br>\n\t\t\t\t<div class=\"fd__orgMoney fd__font\">{{args.targetMoney}} <span class=\"money__type\">CNY</span></div>\n\t\t</li>\n\t</ul>\n\t<div class=\"desc__sponsorBox container\">\n\t\t<h2 class=\"desc__sponsor\">\n\t\t\t项目发起人：{{ args.personName }}\n\t\t</h2>\n\t\t<div class=\"desc__sponsorCxt\">\n\t\t\t{{ args.personDesc }}\n\t\t</div>\n\t</div>\n\n\n\t<div class=\"desc__compareBox\">\n\t\t<ul class=\"desc__compareTabs clearfix\">\n\t\t\t<li v-for=\"item in args.infoTabs\" \n\t\t\t\tclass=\"desc__compareTabsList size28 fl\"\n\t\t\t\t:class=\"{on: item == args.activeInfoTab}\"\n\t\t\t\t@click=\"protTabs(item)\">\n\t\t\t\t{{ item }}\n\t\t\t\t<div class=\"desc__cpListBottom green2\"></div>\n\t\t\t</li>\n\t\t</ul>\t\t\t\t\n\t\t<div class=\"desc__compare\"\n\t\t\t :class=\"{hide:args.activeInfoTab!=='竞争关系'}\">\n\t\t\t<ul class=\"cptRspBox container\">\n\t\t\t\t<li class=\"cptRsp__list clearfix\">\n\t\t\t\t\t<div class=\"cptRsp__title\">已筹金额</div>\n\t\t\t\t\t<ul class=\"cptRsp__descBox fl\">\n\t\t\t\t\t\t<li class=\"cptRsp__desclist size28 clearfix\">\n\t\t\t\t\t\t\t<div class=\"cptRsp__flag f11 fl\">\n\t\t\t\t\t\t\t\t<i class=\"icon iconfont size24\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"cptRsp__descInfo fl\">本项目筹资</div>\n\t\t\t\t\t\t\t<div class=\"cptRsp__descMoneyBox fr\">\n\t\t\t\t\t\t\t\t<font class=\"size28\">{{fourDigit(args.currMoney,true)}}</font>\n\t\t\t\t\t\t\t\t<font class=\"size24\"> CNY</font>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"cptRsp__desclist size28 clearfix\">\n\t\t\t\t\t\t\t<div class=\"cptRsp__flag f12 fl\">\n\t\t\t\t\t\t\t\t<i class=\"icon iconfont size24\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"cptRsp__descInfo fl\">竞争者平均</div>\n\t\t\t\t\t\t\t<div class=\"cptRsp__descMoneyBox fr\">\n\t\t\t\t\t\t\t\t<font class=\"size28\">{{fourDigit(args.moneyAvg,true)}}</font>\n\t\t\t\t\t\t\t\t<font class=\"size24\"> CNY</font>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"cptRsp__desclist size28 clearfix\">\n\t\t\t\t\t\t\t<div class=\"cptRsp__flag f13 fl\">\n\t\t\t\t\t\t\t\t<i class=\"icon iconfont size24\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"cptRsp__descInfo fl\">竞争者最高</div>\n\t\t\t\t\t\t\t<div class=\"cptRsp__descMoneyBox fr\">\n\t\t\t\t\t\t\t\t<font class=\"size28\">{{fourDigit(args.moneyMax,true)}}</font>\n\t\t\t\t\t\t\t\t<font class=\"size24\"> CNY</font>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<div class=\"cptRsp__barPanel fr clearfix\">\n\t\t\t\t\t\t<div class=\"cptRsp__barBox fl\">\n\t\t\t\t\t\t\t<div class=\"cptRsp__bar bg11\" \n\t\t\t\t\t\t\t\t :style=\"{height: percent(args.currMoney,args.moneyMax)}\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"cptRsp__barBox fl\">\n\t\t\t\t\t\t\t<div class=\"cptRsp__bar bg12\"\n\t\t\t\t\t\t\t\t :style=\"{height: percent(args.moneyAvg,args.moneyMax)}\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"cptRsp__barBox fl\">\n\t\t\t\t\t\t\t<div class=\"cptRsp__bar bg13\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"cptRsp__list clearfix\">\n\t\t\t\t\t<div class=\"cptRsp__title\">项目完成率</div>\n\t\t\t\t\t<ul class=\"cptRsp__descBox fl\">\n\t\t\t\t\t\t<li class=\"cptRsp__desclist size28 clearfix\">\n\t\t\t\t\t\t\t<div class=\"cptRsp__flag f21 fl\">\n\t\t\t\t\t\t\t\t<i class=\"icon iconfont size24\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"cptRsp__descInfo fl\">本项目完成率</div>\n\t\t\t\t\t\t\t<div class=\"cptRsp__descMoneyBox fr\">\n\t\t\t\t\t\t\t\t<font class=\"size28\">{{formatNum(args.finishPer)}}%</font>\n\t\t\t\t\t\t\t\t<!-- <font class=\"size24\"> RMB</font> -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"cptRsp__desclist size28 clearfix\">\n\t\t\t\t\t\t\t<div class=\"cptRsp__flag f22 fl\">\n\t\t\t\t\t\t\t\t<i class=\"icon iconfont size24\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"cptRsp__descInfo fl\">竞争者平均</div>\n\t\t\t\t\t\t\t<div class=\"cptRsp__descMoneyBox fr\">\n\t\t\t\t\t\t\t\t<font class=\"size28\">{{formatNum(args.finishAvg)}}%</font>\n\t\t\t\t\t\t\t\t<!-- <font class=\"size24\"> RMB</font> -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"cptRsp__desclist size28 clearfix\">\n\t\t\t\t\t\t\t<div class=\"cptRsp__flag f23 fl\">\n\t\t\t\t\t\t\t\t<i class=\"icon iconfont size24\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"cptRsp__descInfo fl\">竞争者最高</div>\n\t\t\t\t\t\t\t<div class=\"cptRsp__descMoneyBox fr\">\n\t\t\t\t\t\t\t\t<font class=\"size28\">{{formatNum(args.finishMax)}}%</font>\n\t\t\t\t\t\t\t\t<!-- <font class=\"size24\"> RMB</font> -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<div class=\"cptRsp__barPanel fr clearfix\">\n\t\t\t\t\t\t<div class=\"cptRsp__barBox fl\">\n\t\t\t\t\t\t\t<div class=\"cptRsp__bar bg21\"\n\t\t\t\t\t\t\t\t :style=\"{height: percent(args.finishPer,args.finishMax)}\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"cptRsp__barBox fl\">\n\t\t\t\t\t\t\t<div class=\"cptRsp__bar bg22\"\n\t\t\t\t\t\t\t\t :style=\"{height: percent(args.finishAvg,args.finishMax)}\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"cptRsp__barBox fl\">\n\t\t\t\t\t\t\t<div class=\"cptRsp__bar bg23\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"cptRsp__list clearfix\">\n\t\t\t\t\t<div class=\"cptRsp__title\">支持者</div>\n\t\t\t\t\t<ul class=\"cptRsp__descBox fl\">\n\t\t\t\t\t\t<li class=\"cptRsp__desclist size28 clearfix\">\n\t\t\t\t\t\t\t<div class=\"cptRsp__flag f31 fl\">\n\t\t\t\t\t\t\t\t<i class=\"icon iconfont size24\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"cptRsp__descInfo fl\">本项目支持人数</div>\n\t\t\t\t\t\t\t<div class=\"cptRsp__descMoneyBox fr\">\n\t\t\t\t\t\t\t\t<font class=\"size28\">{{fourDigit(args.supportPerson,true)}}</font>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"cptRsp__desclist size28 clearfix\">\n\t\t\t\t\t\t\t<div class=\"cptRsp__flag f32 fl\">\n\t\t\t\t\t\t\t\t<i class=\"icon iconfont size24\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"cptRsp__descInfo fl\">竞争者平均</div>\n\t\t\t\t\t\t\t<div class=\"cptRsp__descMoneyBox fr\">\n\t\t\t\t\t\t\t\t<font class=\"size28\">{{fourDigit(args.supportAvg,true)}}</font>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"cptRsp__desclist size28 clearfix\">\n\t\t\t\t\t\t\t<div class=\"cptRsp__flag f33 fl\">\n\t\t\t\t\t\t\t\t<i class=\"icon iconfont size24\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"cptRsp__descInfo fl\">竞争者最高</div>\n\t\t\t\t\t\t\t<div class=\"cptRsp__descMoneyBox fr\">\n\t\t\t\t\t\t\t\t<font class=\"size28\">{{fourDigit(args.supportMax,true)}}</font>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<div class=\"cptRsp__barPanel fr clearfix\">\n\t\t\t\t\t\t<div class=\"cptRsp__barBox fl\">\n\t\t\t\t\t\t\t<div class=\"cptRsp__bar bg31\"\n\t\t\t\t\t\t\t\t :style=\"{height: percent(args.supportPerson,args.supportMax)}\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"cptRsp__barBox fl\">\n\t\t\t\t\t\t\t<div class=\"cptRsp__bar bg32\"\n\t\t\t\t\t\t\t\t :style=\"{height: percent(args.supportAvg,args.supportMax)}\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"cptRsp__barBox fl\">\n\t\t\t\t\t\t\t<div class=\"cptRsp__bar bg33\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"cptRsp__list clearfix\">\n\t\t\t\t\t<div class=\"cptRsp__title\">人均支持</div>\n\t\t\t\t\t<ul class=\"cptRsp__descBox fl\">\n\t\t\t\t\t\t<li class=\"cptRsp__desclist size28 clearfix\">\n\t\t\t\t\t\t\t<div class=\"cptRsp__flag f41 fl\">\n\t\t\t\t\t\t\t\t<i class=\"icon iconfont size24\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"cptRsp__descInfo fl\">本项目人均支持</div>\n\t\t\t\t\t\t\t<div class=\"cptRsp__descMoneyBox fr\">\n\t\t\t\t\t\t\t\t<font class=\"size28\">{{fourDigit(args.averageMoney,true)}}</font>\n\t\t\t\t\t\t\t\t<font class=\"size24\"> CNY</font>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"cptRsp__desclist size28 clearfix\">\n\t\t\t\t\t\t\t<div class=\"cptRsp__flag f42 fl\">\n\t\t\t\t\t\t\t\t<i class=\"icon iconfont size24\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"cptRsp__descInfo fl\">竞争者平均</div>\n\t\t\t\t\t\t\t<div class=\"cptRsp__descMoneyBox fr\">\n\t\t\t\t\t\t\t\t<font class=\"size28\">{{fourDigit(args.averageAvg,true)}}</font>\n\t\t\t\t\t\t\t\t<font class=\"size24\"> CNY</font>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"cptRsp__desclist size28 clearfix\">\n\t\t\t\t\t\t\t<div class=\"cptRsp__flag f43 fl\">\n\t\t\t\t\t\t\t\t<i class=\"icon iconfont size24\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"cptRsp__descInfo fl\">竞争者最高</div>\n\t\t\t\t\t\t\t<div class=\"cptRsp__descMoneyBox fr\">\n\t\t\t\t\t\t\t\t<font class=\"size28\">{{fourDigit(args.averageMax,true)}}</font>\n\t\t\t\t\t\t\t\t<font class=\"size24\"> CNY</font>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<div class=\"cptRsp__barPanel fr clearfix\">\n\t\t\t\t\t\t<div class=\"cptRsp__barBox fl\">\n\t\t\t\t\t\t\t<div class=\"cptRsp__bar bg41\"\n\t\t\t\t\t\t\t\t :style=\"{height: percent(args.averageMoney,args.averageMax)}\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"cptRsp__barBox fl\">\n\t\t\t\t\t\t\t<div class=\"cptRsp__bar bg42\"\n\t\t\t\t\t\t\t\t :style=\"{height: percent(args.averageAvg,args.averageMax)}\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"cptRsp__barBox fl\">\n\t\t\t\t\t\t\t<div class=\"cptRsp__bar bg43\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"desc__compare hide\"\n\t\t\t :class=\"{hide:args.activeInfoTab!=='竞争者'}\">\n\t\t\t<ul class=\"desc__competitorBox\">\n\t\t\t\t<template v-for=\"item in args.compList\">\n\t\t\t\t\t<li class=\"desc__competitorMore size24\" \n\t\t\t\t\t\tv-if=\"args.order>10&&$index>=9\">\n\t\t\t\t\t\t\t•<br>•<br>•\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"desc__competitorList container clearfix\"\n\t\t\t\t\t\t:class=\"{cpt__self: args.order==$index+1||args.order>10}\">\n\t\t\t\t\t\t<div class=\"cpt__No size28 fl\">\n\t\t\t\t\t\t\t<template v-if=\"$index<9||args.order<=10\">{{$index+1}}</template>\n\t\t\t\t\t\t\t<template v-else>{{args.order}}</template>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"cpt__infoBox fl\">\n\t\t\t\t\t\t\t<div class=\"cpt__proName size28\">\n\t\t\t\t\t\t\t\t{{ item.productName }}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"cpt__statusBox clearfix\">\n\t\t\t\t\t\t\t\t<div class=\"cpt__status fl clearfix\">\n\t\t\t\t\t\t\t\t\t<font class=\"cpt__statusCnt fl size24\">\n\t\t\t\t\t\t\t\t\t\t\t{{ item.productStatus }}\n\t\t\t\t\t\t\t\t\t</font>\n\t\t\t\t\t\t\t\t\t<font class=\"cpt__statusCnt fr size24\">\n\t\t\t\t\t\t\t\t\t\t{{ fourDigit(item.currMoney,true) }}\n\t\t\t\t\t\t\t\t\t</font>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"cpt__ptName fr\"\n\t\t\t\t\t\t\t\t\t :class=\"'color'+item.website\">\n\t\t\t\t\t\t\t\t\t<font class=\"size24\">{{ item.websiteName }}</font>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</template>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"desc__compare hide\" \n\t\t\t :class=\"{hide:args.activeInfoTab!=='行业比较'}\">\n\t\t\t<a href=\"##\" class=\"desc__idyTitle container\">\n\t\t\t\t在 <span class=\"desc__titleLight\">{{args.category.categoryName}}</span> 行业中\n\t\t\t</a>\n\t\t\t<ul class=\"desc__comparePanel\">\n\t\t\t\t<li class=\"desc__compareList container\">\n\t\t\t\t\t<div class=\"desc__compareTitle\">\n\t\t\t\t\t\t已筹金额\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"desc__compareBarBox\">\n\t\t\t\t\t\t<div class=\"compareBar__common blue1 compareBar__max\" style=\"width: 100%\"></div>\n\t\t\t\t\t\t<div class=\"compareBar__common blue2 compareBar__mode\" \n\t\t\t\t\t\t\t :style=\"{width:  percent(args.categoryStat.moneyMod,args.categoryStat.moneyMax)}\"></div>\n\t\t\t\t\t\t<div class=\"compareBar__common fblue2 compareBar__self\" \n\t\t\t\t\t\t\t :style=\"{width: percent(args.currMoney,args.categoryStat.moneyMax)}\">\n\t\t\t\t\t\t\t<div class=\"compareBar__selfFlag\">\n\t\t\t\t\t\t\t\t<i class=\"icon iconfont\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class=\"desc__barExplain\">\n\t\t\t\t\t\t<li class=\"desc__barExplainList clearfix\">\n\t\t\t\t\t\t\t<div class=\"explain__flag fl fblue2\">\n\t\t\t\t\t\t\t\t<i class=\"icon iconfont\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"explain__title fl\">本项目筹资</div>\n\t\t\t\t\t\t\t<div class=\"explain__data fr\">\n\t\t\t\t\t\t\t\t{{ fourDigit(args.currMoney,true) }} <span class=\"explain__unit\">CNY</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"desc__barExplainList clearfix\">\n\t\t\t\t\t\t\t<div class=\"explain__flag fl fblue2\">\n\t\t\t\t\t\t\t\t<i class=\"icon iconfont\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"explain__title fl\">同行业一般水平</div>\n\t\t\t\t\t\t\t<div class=\"explain__data fr\">\n\t\t\t\t\t\t\t\t{{ fourDigit(args.categoryStat.moneyMod,true) }} <span class=\"explain__unit\">CNY</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"desc__barExplainList clearfix\">\n\t\t\t\t\t\t\t<div class=\"explain__flag fl fblue1\">\n\t\t\t\t\t\t\t\t<i class=\"icon iconfont\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"explain__title fl\">同行业最高水平</div>\n\t\t\t\t\t\t\t<div class=\"explain__data fr\">\n\t\t\t\t\t\t\t\t{{ fourDigit(args.categoryStat.moneyMax,true) }} <span class=\"explain__unit\">CNY</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"desc__compareList container\">\n\t\t\t\t\t<div class=\"desc__compareTitle\">\n\t\t\t\t\t\t项目完成率\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"desc__compareBarBox\">\n\t\t\t\t\t\t<div class=\"compareBar__common red1 compareBar__max\" style=\"width: 100%\"></div>\n\t\t\t\t\t\t<div class=\"compareBar__common red2 compareBar__mode\"\n\t\t\t\t\t\t\t :style=\"{width:  percent(args.categoryStat.finishMod,args.categoryStat.finishMax)}\"></div>\n\t\t\t\t\t\t<div class=\"compareBar__common fred2 compareBar__self\"\n\t\t\t\t\t\t\t :style=\"{width:  percent(args.finishPer,args.categoryStat.finishMax)}\">\n\t\t\t\t\t\t\t<div class=\"compareBar__selfFlag\">\n\t\t\t\t\t\t\t\t<i class=\"icon iconfont\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class=\"desc__barExplain\">\n\t\t\t\t\t\t<li class=\"desc__barExplainList clearfix\">\n\t\t\t\t\t\t\t<div class=\"explain__flag fl fred2\">\n\t\t\t\t\t\t\t\t<i class=\"icon iconfont\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"explain__title fl\">本项目完成率</div>\n\t\t\t\t\t\t\t<div class=\"explain__data fr\">\n\t\t\t\t\t\t\t\t{{ formatNum(args.finishPer) }} <span class=\"explain__unit\">%</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"desc__barExplainList clearfix\">\n\t\t\t\t\t\t\t<div class=\"explain__flag fl fred2\">\n\t\t\t\t\t\t\t\t<i class=\"icon iconfont\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"explain__title fl\">同行业一般水平</div>\n\t\t\t\t\t\t\t<div class=\"explain__data fr\">\n\t\t\t\t\t\t\t\t{{ formatNum(args.categoryStat.finishMod) }} <span class=\"explain__unit\">%</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"desc__barExplainList clearfix\">\n\t\t\t\t\t\t\t<div class=\"explain__flag fl fred1\">\n\t\t\t\t\t\t\t\t<i class=\"icon iconfont\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"explain__title fl\">同行业最高水平</div>\n\t\t\t\t\t\t\t<div class=\"explain__data fr\">\n\t\t\t\t\t\t\t\t{{ formatNum(args.categoryStat.finishMax) }} <span class=\"explain__unit\">%</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"desc__compareList container\">\n\t\t\t\t\t<div class=\"desc__compareTitle\">\n\t\t\t\t\t\t支持者\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"desc__compareBarBox\">\n\t\t\t\t\t\t<div class=\"compareBar__common green1 compareBar__max\" style=\"width: 100%\"></div>\n\t\t\t\t\t\t<div class=\"compareBar__common green2 compareBar__mode\"\n\t\t\t\t\t\t\t :style=\"{width:  percent(args.categoryStat.supportMod,args.categoryStat.supportMax)}\"></div>\n\t\t\t\t\t\t<div class=\"compareBar__common fgreen2 compareBar__self\"\n\t\t\t\t\t\t\t :style=\"{width:  percent(args.supportPerson,args.categoryStat.supportMax)}\">\n\t\t\t\t\t\t\t<div class=\"compareBar__selfFlag\">\n\t\t\t\t\t\t\t\t<i class=\"icon iconfont\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class=\"desc__barExplain\">\n\t\t\t\t\t\t<li class=\"desc__barExplainList clearfix\">\n\t\t\t\t\t\t\t<div class=\"explain__flag fl fgreen2\">\n\t\t\t\t\t\t\t\t<i class=\"icon iconfont\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"explain__title fl\">本项目支持人数</div>\n\t\t\t\t\t\t\t<div class=\"explain__data fr\">\n\t\t\t\t\t\t\t\t{{ fourDigit(args.supportPerson, true) }}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"desc__barExplainList clearfix\">\n\t\t\t\t\t\t\t<div class=\"explain__flag fl fgreen2\">\n\t\t\t\t\t\t\t\t<i class=\"icon iconfont\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"explain__title fl\">同行业一般水平</div>\n\t\t\t\t\t\t\t<div class=\"explain__data fr\">\n\t\t\t\t\t\t\t\t{{ fourDigit(args.categoryStat.supportMod, true) }}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"desc__barExplainList clearfix\">\n\t\t\t\t\t\t\t<div class=\"explain__flag fl fgreen1\">\n\t\t\t\t\t\t\t\t<i class=\"icon iconfont\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"explain__title fl\">同行业最高水平</div>\n\t\t\t\t\t\t\t<div class=\"explain__data fr\">\n\t\t\t\t\t\t\t\t{{ fourDigit(args.categoryStat.supportMax, true) }}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"desc__compareList container\">\n\t\t\t\t\t<div class=\"desc__compareTitle\">\n\t\t\t\t\t\t人均支持\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"desc__compareBarBox\">\n\t\t\t\t\t\t<div class=\"compareBar__common yellow1 compareBar__max\" style=\"width: 100%\"></div>\n\t\t\t\t\t\t<div class=\"compareBar__common yellow2 compareBar__mode\"\n\t\t\t\t\t\t\t :style=\"{width:  percent(args.categoryStat.capitaMod,args.categoryStat.capitaMax)}\"></div>\n\t\t\t\t\t\t<div class=\"compareBar__common fyellow2 compareBar__self\"\n\t\t\t\t\t\t\t :style=\"{width:  percent(args.averageMoney,args.categoryStat.capitaMax)}\">\n\t\t\t\t\t\t\t<div class=\"compareBar__selfFlag\">\n\t\t\t\t\t\t\t\t<i class=\"icon iconfont\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class=\"desc__barExplain\">\n\t\t\t\t\t\t<li class=\"desc__barExplainList clearfix\">\n\t\t\t\t\t\t\t<div class=\"explain__flag fl fyellow2\">\n\t\t\t\t\t\t\t\t<i class=\"icon iconfont\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"explain__title fl\">本项目人均支持</div>\n\t\t\t\t\t\t\t<div class=\"explain__data fr\">\n\t\t\t\t\t\t\t\t{{ fourDigit(args.averageMoney, true) }} <span class=\"explain__unit\">CNY</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"desc__barExplainList clearfix\">\n\t\t\t\t\t\t\t<div class=\"explain__flag fl fyellow2\">\n\t\t\t\t\t\t\t\t<i class=\"icon iconfont\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"explain__title fl\">同行业一般水平</div>\n\t\t\t\t\t\t\t<div class=\"explain__data fr\">\n\t\t\t\t\t\t\t\t {{ fourDigit(args.categoryStat.capitaMod, true) }} <span class=\"explain__unit\">CNY</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"desc__barExplainList clearfix\">\n\t\t\t\t\t\t\t<div class=\"explain__flag fl fyellow1\">\n\t\t\t\t\t\t\t\t<i class=\"icon iconfont\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"explain__title fl\">同行业最高水平</div>\n\t\t\t\t\t\t\t<div class=\"explain__data fr\">\n\t\t\t\t\t\t\t\t {{ fourDigit(args.categoryStat.capitaMax, true) }} <span class=\"explain__unit\">CNY</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\t\t\t\t\t\n\t</div>\n</div>\n";

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(130)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Product\\Charts.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(131)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-382bfd12/Charts.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 130 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <script type="text/javascript">
	exports.default = {
		props: ['args'],
		ready: function ready() {
			var _self = this;
			setTimeout(function () {
				Highcharts.setOptions({
					lang: {
						rangeSelectorZoom: ''
					},
					inputWidth: 120,
					inputHeight: 80
				});
				doubleCharts({
					id: 'fundingCharts',
					buttons: [{
						type: 'week',
						count: 1.2,
						text: '7天'
					}, {
						type: 'all',
						text: '全部'
					}],
					color: ['#45b7af', '#f9aaae'],
					data: _self.args.moneyList,
					tabName: ['当日净额', '已筹金额']
				});
				doubleCharts({
					id: 'supportCharts',
					buttons: [{
						type: 'week',
						count: 1.2,
						text: '7天'
					}, {
						type: 'all',
						text: '全部'
					}],
					color: ['#45b7af', '#f9aaae'],
					data: _self.args.supportList,
					tabName: ['当日支持人数', '总支持人数']
				});
			}, 600);
		}
	};
	// </script>
	//
	// <template>
	// 	<div class="desc__chartsBox">
	// 		<div id="fundingCharts" class="desc__charts" data-highcharts-chart="0"></div>
	// 		<div id="supportCharts" class="desc__charts" data-highcharts-chart="1"></div>
	// 	</div>
	// </template>

/***/ },
/* 131 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"desc__chartsBox\">\n\t<div id=\"fundingCharts\" class=\"desc__charts\" data-highcharts-chart=\"0\"></div>\n\t<div id=\"supportCharts\" class=\"desc__charts\" data-highcharts-chart=\"1\"></div>\n</div>\n";

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(133)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Product\\Reply.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(134)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-3702bf3d/Reply.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _actions = __webpack_require__(15);

	exports.default = {
		props: ['args'],
		vuex: {
			getters: {
				reply: function reply(_ref) {
					var product = _ref.product;
					return product.isReply;
				},
				scrollTop: function scrollTop(_ref2) {
					var product = _ref2.product;
					return product.replyBoxTop;
				}
			},
			actions: {
				isFocus: _actions.isFocus,
				isReply: _actions.isReply
			}
		},
		methods: {
			clickReply: function clickReply() {
				var replyBox = document.getElementsByClassName('pnc__replyMaskBox')[0];
				this.isReply();
				replyBox.addEventListener('animationend', function () {
					document.getElementsByClassName('pnc__replyTxt')[0].focus();
				});
			},
			setScroll: function setScroll() {
				document.getElementsByClassName('pnc__replyMask')[0].style.top = this.scrollTop + 'px';
				document.body.scrollTop = this.scrollTop;
			}
		},
		ready: function ready() {}
	};
	// </script>
	//
	// <template>
	// 	<div class="desc__replyBox">
	// 		<div class="desc__replyTitle container">全部评论</div>
	// 		<ul class="desc__replyListPanel">
	//
	// 		</ul>
	//
	// 		<div class="desc__replyBtnBox container clearfix">
	// 			<div class="desc__replyBtn container fl"
	// 				 @click="clickReply">
	// 				<img src="https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/descPage/send_reply.png" class="desc__replyLogo1">
	// 				写评论
	// 			</div>
	// 			<div class="desc__replyImg fl">
	// 				<img src="https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/descPage/reply.png" class="desc__replyLogo2">
	// 			</div>
	// 			<div class="desc__markBox fl" @click="isFocus">
	// 				<img src="https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/descPage/mark1.png" class="desc__mark" :class="{hide:args.isFocus}">
	// 				<img src="https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/descPage/mark2.png" class="desc__mark" :class="{hide:!args.isFocus}">
	// 			</div>
	//
	// 		</div>
	// 	</div>
	// 	<div class="pnc__replyMaskBox" transition="gkvMenu" v-show="reply">
	// 		<div class="pnc__replyMask">
	// 			<div class="pnc__replyOpt clearfix">
	// 				<button class="pnc__replyCancel size28 fl" @click="isReply">取消</button>
	// 				<button class="pnc__replyConfirm disabled size28 fl" disabled="disabled">确定</button>
	// 			</div>
	// 			<div class="pnc__replyCxt size28">
	// 				<textarea @focus="setScroll" tabindex="0" name="reply" class="pnc__replyTxt" placeholder="在这里说几句吧"></textarea>
	// 			</div>
	// 		</div>
	// 	</div>
	// </template>
	// <script type="text/javascript">

/***/ },
/* 134 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"desc__replyBox\">\n\t<div class=\"desc__replyTitle container\">全部评论</div>\n\t<ul class=\"desc__replyListPanel\">\n\t\t\n\t</ul>\n\t\n\t<div class=\"desc__replyBtnBox container clearfix\">\n\t\t<div class=\"desc__replyBtn container fl\"\n\t\t\t @click=\"clickReply\">\n\t\t\t<img src=\"https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/descPage/send_reply.png\" class=\"desc__replyLogo1\">\n\t\t\t写评论\n\t\t</div>\n\t\t<div class=\"desc__replyImg fl\">\n\t\t\t<img src=\"https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/descPage/reply.png\" class=\"desc__replyLogo2\">\n\t\t</div>\n\t\t<div class=\"desc__markBox fl\" @click=\"isFocus\">\n\t\t\t<img src=\"https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/descPage/mark1.png\" class=\"desc__mark\" :class=\"{hide:args.isFocus}\">\n\t\t\t<img src=\"https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/descPage/mark2.png\" class=\"desc__mark\" :class=\"{hide:!args.isFocus}\">\n\t\t</div>\n\t\t\n\t</div>\n</div>\n<div class=\"pnc__replyMaskBox\" transition=\"gkvMenu\" v-show=\"reply\">\n\t<div class=\"pnc__replyMask\">\n\t\t<div class=\"pnc__replyOpt clearfix\">\n\t\t\t<button class=\"pnc__replyCancel size28 fl\" @click=\"isReply\">取消</button>\n\t\t\t<button class=\"pnc__replyConfirm disabled size28 fl\" disabled=\"disabled\">确定</button>\n\t\t</div>\n\t\t<div class=\"pnc__replyCxt size28\">\n\t\t\t<textarea @focus=\"setScroll\" tabindex=\"0\" name=\"reply\" class=\"pnc__replyTxt\" placeholder=\"在这里说几句吧\"></textarea>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 135 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div id=\"gkvBox\" class=\"desc__gkvBox\" :transition=\"stack.pageDir\">\n\t<gkv-menu></gkv-menu>\n\t<p-banner :args=\"info\"></p-banner>\n\t<p-status :args=\"info\"></p-status>\n\t<p-info :args=\"info\"></p-info>\n\t<!-- 图表区 start -->\n\t<p-charts :args=\"info\"></p-charts>\n\t<!-- 图表区 end -->\n\t<!-- 评论区 start -->\n\t<p-reply :args=\"info\"></p-reply>\n\t<!-- 评论区end -->\n</div>\n";

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(137)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\App.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(167)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-05b3766b/App.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _store = __webpack_require__(138);

	var _store2 = _interopRequireDefault(_store);

	var _actions = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <script type="text/javascript">
	exports.default = {
		name: 'App',
		store: _store2.default,
		ready: function ready() {
			var _self = this;
			window.addEventListener('popstate', function (e) {
				var hash = window.location.hash.substring(2);
				// 执行检测方法
				console.log(hash);
				if (_self.router.pageClick) {
					console.log(_self.router.pageClick);
					_self.closeClick();
					_self.goPath('next');
				} else {
					_self.goPath('prev');
				}
				// console.log('改前：')
				// console.log(_self.test.ym)
				// // if(hash=='/index') {
				// 	++_self.test.sjs
				// 	if(_self.test.sjs%2 == 0) {
				// 		_self.test.ym = 'dsa'
				// 	} else {
				// 		_self.test.ym = 'asd'
				// 	}

				// // }
				// console.log('改后：')
				// console.log(_self.test.ym)
			}, false);
		},

		vuex: {
			getters: {
				router: function router(_ref) {
					var _router = _ref.router;
					return _router;
				}
			},
			actions: {
				goPath: _actions.goPath,
				closeClick: _actions.closeClick
			}
		}
	};
	// </script>
	//
	// <template>
	// 	<div id="app">
	// 		<router-view></router-view>
	// 	</div>
	// </template>
	//

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _vuex = __webpack_require__(139);

	var _vuex2 = _interopRequireDefault(_vuex);

	var _index = __webpack_require__(140);

	var _index2 = _interopRequireDefault(_index);

	var _router = __webpack_require__(160);

	var _router2 = _interopRequireDefault(_router);

	var _platform = __webpack_require__(161);

	var _platform2 = _interopRequireDefault(_platform);

	var _category = __webpack_require__(162);

	var _category2 = _interopRequireDefault(_category);

	var _article = __webpack_require__(163);

	var _article2 = _interopRequireDefault(_article);

	var _list = __webpack_require__(164);

	var _list2 = _interopRequireDefault(_list);

	var _product = __webpack_require__(165);

	var _product2 = _interopRequireDefault(_product);

	var _search = __webpack_require__(166);

	var _search2 = _interopRequireDefault(_search);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.use(_vuex2.default);

	exports.default = new _vuex2.default.Store({
		modules: {
			index: _index2.default,
			router: _router2.default,
			platform: _platform2.default,
			category: _category2.default,
			article: _article2.default,
			list: _list2.default,
			product: _product2.default,
			search: _search2.default
		}
	});

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Vuex v0.6.3
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.Vuex = factory());
	}(this, function () { 'use strict';

	  var babelHelpers = {};
	  babelHelpers.typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
	  };

	  babelHelpers.classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };

	  babelHelpers.createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }

	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();

	  babelHelpers.toConsumableArray = function (arr) {
	    if (Array.isArray(arr)) {
	      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

	      return arr2;
	    } else {
	      return Array.from(arr);
	    }
	  };

	  babelHelpers;

	  /**
	   * Merge an array of objects into one.
	   *
	   * @param {Array<Object>} arr
	   * @return {Object}
	   */

	  function mergeObjects(arr) {
	    return arr.reduce(function (prev, obj) {
	      Object.keys(obj).forEach(function (key) {
	        var existing = prev[key];
	        if (existing) {
	          // allow multiple mutation objects to contain duplicate
	          // handlers for the same mutation type
	          if (Array.isArray(existing)) {
	            existing.push(obj[key]);
	          } else {
	            prev[key] = [prev[key], obj[key]];
	          }
	        } else {
	          prev[key] = obj[key];
	        }
	      });
	      return prev;
	    }, {});
	  }

	  /**
	   * Deep clone an object. Faster than JSON.parse(JSON.stringify()).
	   *
	   * @param {*} obj
	   * @return {*}
	   */

	  function deepClone(obj) {
	    if (Array.isArray(obj)) {
	      return obj.map(deepClone);
	    } else if (obj && (typeof obj === 'undefined' ? 'undefined' : babelHelpers.typeof(obj)) === 'object') {
	      var cloned = {};
	      var keys = Object.keys(obj);
	      for (var i = 0, l = keys.length; i < l; i++) {
	        var key = keys[i];
	        cloned[key] = deepClone(obj[key]);
	      }
	      return cloned;
	    } else {
	      return obj;
	    }
	  }

	  /**
	   * Hacks to get access to Vue internals.
	   * Maybe we should expose these...
	   */

	  var Watcher = void 0;
	  function getWatcher(vm) {
	    if (!Watcher) {
	      var unwatch = vm.$watch('__vuex__', function (a) {
	        return a;
	      });
	      Watcher = vm._watchers[0].constructor;
	      unwatch();
	    }
	    return Watcher;
	  }

	  var Dep = void 0;
	  function getDep(vm) {
	    if (!Dep) {
	      Dep = vm._data.__ob__.dep.constructor;
	    }
	    return Dep;
	  }

	  var hook = typeof window !== 'undefined' && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	  var devtoolMiddleware = {
	    onInit: function onInit(state, store) {
	      if (!hook) return;
	      hook.emit('vuex:init', store);
	      hook.on('vuex:travel-to-state', function (targetState) {
	        var currentState = store._vm._data;
	        store._dispatching = true;
	        Object.keys(targetState).forEach(function (key) {
	          currentState[key] = targetState[key];
	        });
	        store._dispatching = false;
	      });
	    },
	    onMutation: function onMutation(mutation, state) {
	      if (!hook) return;
	      hook.emit('vuex:mutation', mutation, state);
	    }
	  };

	  function override (Vue) {
	    // override init and inject vuex init procedure
	    var _init = Vue.prototype._init;
	    Vue.prototype._init = function () {
	      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      options.init = options.init ? [vuexInit].concat(options.init) : vuexInit;
	      _init.call(this, options);
	    };

	    /**
	     * Vuex init hook, injected into each instances init hooks list.
	     */

	    function vuexInit() {
	      var options = this.$options;
	      var store = options.store;
	      var vuex = options.vuex;
	      // store injection

	      if (store) {
	        this.$store = store;
	      } else if (options.parent && options.parent.$store) {
	        this.$store = options.parent.$store;
	      }
	      // vuex option handling
	      if (vuex) {
	        if (!this.$store) {
	          console.warn('[vuex] store not injected. make sure to ' + 'provide the store option in your root component.');
	        }
	        var state = vuex.state;
	        var getters = vuex.getters;
	        var actions = vuex.actions;
	        // handle deprecated state option

	        if (state && !getters) {
	          console.warn('[vuex] vuex.state option will been deprecated in 1.0. ' + 'Use vuex.getters instead.');
	          getters = state;
	        }
	        // getters
	        if (getters) {
	          options.computed = options.computed || {};
	          for (var key in getters) {
	            defineVuexGetter(this, key, getters[key]);
	          }
	        }
	        // actions
	        if (actions) {
	          options.methods = options.methods || {};
	          for (var _key in actions) {
	            options.methods[_key] = makeBoundAction(this.$store, actions[_key], _key);
	          }
	        }
	      }
	    }

	    /**
	     * Setter for all getter properties.
	     */

	    function setter() {
	      throw new Error('vuex getter properties are read-only.');
	    }

	    /**
	     * Define a Vuex getter on an instance.
	     *
	     * @param {Vue} vm
	     * @param {String} key
	     * @param {Function} getter
	     */

	    function defineVuexGetter(vm, key, getter) {
	      if (typeof getter !== 'function') {
	        console.warn('[vuex] Getter bound to key \'vuex.getters.' + key + '\' is not a function.');
	      } else {
	        Object.defineProperty(vm, key, {
	          enumerable: true,
	          configurable: true,
	          get: makeComputedGetter(vm.$store, getter),
	          set: setter
	        });
	      }
	    }

	    /**
	     * Make a computed getter, using the same caching mechanism of computed
	     * properties. In addition, it is cached on the raw getter function using
	     * the store's unique cache id. This makes the same getter shared
	     * across all components use the same underlying watcher, and makes
	     * the getter evaluated only once during every flush.
	     *
	     * @param {Store} store
	     * @param {Function} getter
	     */

	    function makeComputedGetter(store, getter) {
	      var id = store._getterCacheId;

	      // cached
	      if (getter[id]) {
	        return getter[id];
	      }
	      var vm = store._vm;
	      var Watcher = getWatcher(vm);
	      var Dep = getDep(vm);
	      var watcher = new Watcher(vm, function (state) {
	        return getter(state);
	      }, null, { lazy: true });
	      var computedGetter = function computedGetter() {
	        if (watcher.dirty) {
	          watcher.evaluate();
	        }
	        if (Dep.target) {
	          watcher.depend();
	        }
	        return watcher.value;
	      };
	      getter[id] = computedGetter;
	      return computedGetter;
	    }

	    /**
	     * Make a bound-to-store version of a raw action function.
	     *
	     * @param {Store} store
	     * @param {Function} action
	     * @param {String} key
	     */

	    function makeBoundAction(store, action, key) {
	      if (typeof action !== 'function') {
	        console.warn('[vuex] Action bound to key \'vuex.actions.' + key + '\' is not a function.');
	      }
	      return function vuexBoundAction() {
	        for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
	          args[_key2] = arguments[_key2];
	        }

	        return action.call.apply(action, [this, store].concat(args));
	      };
	    }

	    // option merging
	    var merge = Vue.config.optionMergeStrategies.computed;
	    Vue.config.optionMergeStrategies.vuex = function (toVal, fromVal) {
	      if (!toVal) return fromVal;
	      if (!fromVal) return toVal;
	      return {
	        getters: merge(toVal.getters, fromVal.getters),
	        state: merge(toVal.state, fromVal.state),
	        actions: merge(toVal.actions, fromVal.actions)
	      };
	    };
	  }

	  var Vue = void 0;
	  var uid = 0;

	  var Store = function () {

	    /**
	     * @param {Object} options
	     *        - {Object} state
	     *        - {Object} actions
	     *        - {Object} mutations
	     *        - {Array} middlewares
	     *        - {Boolean} strict
	     */

	    function Store() {
	      var _this = this;

	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      var _ref$state = _ref.state;
	      var state = _ref$state === undefined ? {} : _ref$state;
	      var _ref$mutations = _ref.mutations;
	      var mutations = _ref$mutations === undefined ? {} : _ref$mutations;
	      var _ref$modules = _ref.modules;
	      var modules = _ref$modules === undefined ? {} : _ref$modules;
	      var _ref$middlewares = _ref.middlewares;
	      var middlewares = _ref$middlewares === undefined ? [] : _ref$middlewares;
	      var _ref$strict = _ref.strict;
	      var strict = _ref$strict === undefined ? false : _ref$strict;
	      babelHelpers.classCallCheck(this, Store);

	      this._getterCacheId = 'vuex_store_' + uid++;
	      this._dispatching = false;
	      this._rootMutations = this._mutations = mutations;
	      this._modules = modules;
	      // bind dispatch to self
	      var dispatch = this.dispatch;
	      this.dispatch = function () {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        dispatch.apply(_this, args);
	      };
	      // use a Vue instance to store the state tree
	      // suppress warnings just in case the user has added
	      // some funky global mixins
	      if (!Vue) {
	        throw new Error('[vuex] must call Vue.use(Vuex) before creating a store instance.');
	      }
	      var silent = Vue.config.silent;
	      Vue.config.silent = true;
	      this._vm = new Vue({
	        data: state
	      });
	      Vue.config.silent = silent;
	      this._setupModuleState(state, modules);
	      this._setupModuleMutations(modules);
	      this._setupMiddlewares(middlewares, state);
	      // add extra warnings in strict mode
	      if (strict) {
	        this._setupMutationCheck();
	      }
	    }

	    /**
	     * Getter for the entire state tree.
	     * Read only.
	     *
	     * @return {Object}
	     */

	    babelHelpers.createClass(Store, [{
	      key: 'dispatch',


	      /**
	       * Dispatch an action.
	       *
	       * @param {String} type
	       */

	      value: function dispatch(type) {
	        for (var _len2 = arguments.length, payload = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	          payload[_key2 - 1] = arguments[_key2];
	        }

	        var silent = false;
	        // compatibility for object actions, e.g. FSA
	        if ((typeof type === 'undefined' ? 'undefined' : babelHelpers.typeof(type)) === 'object' && type.type && arguments.length === 1) {
	          payload = [type.payload];
	          if (type.silent) silent = true;
	          type = type.type;
	        }
	        var mutation = this._mutations[type];
	        var state = this.state;
	        if (mutation) {
	          this._dispatching = true;
	          // apply the mutation
	          if (Array.isArray(mutation)) {
	            mutation.forEach(function (m) {
	              return m.apply(undefined, [state].concat(babelHelpers.toConsumableArray(payload)));
	            });
	          } else {
	            mutation.apply(undefined, [state].concat(babelHelpers.toConsumableArray(payload)));
	          }
	          this._dispatching = false;
	          if (!silent) this._applyMiddlewares(type, payload);
	        } else {
	          console.warn('[vuex] Unknown mutation: ' + type);
	        }
	      }

	      /**
	       * Watch state changes on the store.
	       * Same API as Vue's $watch, except when watching a function,
	       * the function gets the state as the first argument.
	       *
	       * @param {String|Function} expOrFn
	       * @param {Function} cb
	       * @param {Object} [options]
	       */

	    }, {
	      key: 'watch',
	      value: function watch(expOrFn, cb, options) {
	        var _this2 = this;

	        return this._vm.$watch(function () {
	          return typeof expOrFn === 'function' ? expOrFn(_this2.state) : _this2._vm.$get(expOrFn);
	        }, cb, options);
	      }

	      /**
	       * Hot update mutations & modules.
	       *
	       * @param {Object} options
	       *        - {Object} [mutations]
	       *        - {Object} [modules]
	       */

	    }, {
	      key: 'hotUpdate',
	      value: function hotUpdate() {
	        var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var mutations = _ref2.mutations;
	        var modules = _ref2.modules;

	        this._rootMutations = this._mutations = mutations || this._rootMutations;
	        this._setupModuleMutations(modules || this._modules);
	      }

	      /**
	       * Attach sub state tree of each module to the root tree.
	       *
	       * @param {Object} state
	       * @param {Object} modules
	       */

	    }, {
	      key: '_setupModuleState',
	      value: function _setupModuleState(state, modules) {
	        Object.keys(modules).forEach(function (key) {
	          Vue.set(state, key, modules[key].state || {});
	        });
	      }

	      /**
	       * Bind mutations for each module to its sub tree and
	       * merge them all into one final mutations map.
	       *
	       * @param {Object} updatedModules
	       */

	    }, {
	      key: '_setupModuleMutations',
	      value: function _setupModuleMutations(updatedModules) {
	        var modules = this._modules;
	        var allMutations = [this._rootMutations];
	        Object.keys(updatedModules).forEach(function (key) {
	          modules[key] = updatedModules[key];
	        });
	        Object.keys(modules).forEach(function (key) {
	          var module = modules[key];
	          if (!module || !module.mutations) return;
	          // bind mutations to sub state tree
	          var mutations = {};
	          Object.keys(module.mutations).forEach(function (name) {
	            var original = module.mutations[name];
	            mutations[name] = function (state) {
	              for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	                args[_key3 - 1] = arguments[_key3];
	              }

	              original.apply(undefined, [state[key]].concat(args));
	            };
	          });
	          allMutations.push(mutations);
	        });
	        this._mutations = mergeObjects(allMutations);
	      }

	      /**
	       * Setup mutation check: if the vuex instance's state is mutated
	       * outside of a mutation handler, we throw en error. This effectively
	       * enforces all mutations to the state to be trackable and hot-reloadble.
	       * However, this comes at a run time cost since we are doing a deep
	       * watch on the entire state tree, so it is only enalbed with the
	       * strict option is set to true.
	       */

	    }, {
	      key: '_setupMutationCheck',
	      value: function _setupMutationCheck() {
	        var _this3 = this;

	        var Watcher = getWatcher(this._vm);
	        /* eslint-disable no-new */
	        new Watcher(this._vm, '$data', function () {
	          if (!_this3._dispatching) {
	            throw new Error('[vuex] Do not mutate vuex store state outside mutation handlers.');
	          }
	        }, { deep: true, sync: true });
	        /* eslint-enable no-new */
	      }

	      /**
	       * Setup the middlewares. The devtools middleware is always
	       * included, since it does nothing if no devtool is detected.
	       *
	       * A middleware can demand the state it receives to be
	       * "snapshots", i.e. deep clones of the actual state tree.
	       *
	       * @param {Array} middlewares
	       * @param {Object} state
	       */

	    }, {
	      key: '_setupMiddlewares',
	      value: function _setupMiddlewares(middlewares, state) {
	        var _this4 = this;

	        this._middlewares = [devtoolMiddleware].concat(middlewares);
	        this._needSnapshots = middlewares.some(function (m) {
	          return m.snapshot;
	        });
	        if (this._needSnapshots) {
	          console.log('[vuex] One or more of your middlewares are taking state snapshots ' + 'for each mutation. Make sure to use them only during development.');
	        }
	        var initialSnapshot = this._prevSnapshot = this._needSnapshots ? deepClone(state) : null;
	        // call init hooks
	        this._middlewares.forEach(function (m) {
	          if (m.onInit) {
	            m.onInit(m.snapshot ? initialSnapshot : state, _this4);
	          }
	        });
	      }

	      /**
	       * Apply the middlewares on a given mutation.
	       *
	       * @param {String} type
	       * @param {Array} payload
	       */

	    }, {
	      key: '_applyMiddlewares',
	      value: function _applyMiddlewares(type, payload) {
	        var _this5 = this;

	        var state = this.state;
	        var prevSnapshot = this._prevSnapshot;
	        var snapshot = void 0,
	            clonedPayload = void 0;
	        if (this._needSnapshots) {
	          snapshot = this._prevSnapshot = deepClone(state);
	          clonedPayload = deepClone(payload);
	        }
	        this._middlewares.forEach(function (m) {
	          if (m.onMutation) {
	            if (m.snapshot) {
	              m.onMutation({ type: type, payload: clonedPayload }, snapshot, prevSnapshot, _this5);
	            } else {
	              m.onMutation({ type: type, payload: payload }, state, _this5);
	            }
	          }
	        });
	      }
	    }, {
	      key: 'state',
	      get: function get() {
	        return this._vm._data;
	      },
	      set: function set(v) {
	        throw new Error('[vuex] Vuex root state is read only.');
	      }
	    }]);
	    return Store;
	  }();

	  function install(_Vue) {
	    if (Vue) {
	      console.warn('[vuex] already installed. Vue.use(Vuex) should be called only once.');
	      return;
	    }
	    Vue = _Vue;
	    override(Vue);
	  }

	  // auto install in dist mode
	  if (typeof window !== 'undefined' && window.Vue) {
	    install(window.Vue);
	  }

	  function createLogger() {
	    console.warn('[vuex] Vuex.createLogger has been deprecated.' + 'Use `import createLogger from \'vuex/logger\' instead.');
	  }

	  var index = {
	    Store: Store,
	    install: install,
	    createLogger: createLogger
	  };

	  return index;

	}));

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _defineProperty2 = __webpack_require__(141);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _mutations;

	var _mutationTypes = __webpack_require__(16);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var state = {
		menu: {
			isShow: false,
			isShowMore: false
		},
		// search modules
		search: {
			searchBox: '',
			search: '',
			searchBtn: ''
		},
		content: {
			platform: {
				title: '众筹平台',
				subTitle: '7日资金净增（RMB）',
				list: [{
					'dataId': 2,
					'imgSrc': 'https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/platformPage/2.png',
					'name': '京东众筹',
					'money': '2,013万'
				}, {
					'dataId': 3,
					'imgSrc': 'https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/platformPage/3.png',
					'name': 'Kickstarter',
					'money': '1,390万'
				}, {
					'dataId': 4,
					'imgSrc': 'https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/platformPage/4.png',
					'name': 'Indiegogo',
					'money': '1,381万'
				}, {
					'dataId': 1,
					'imgSrc': 'https://s3.cn-north-1.amazonaws.com.cn/index/m/common/images/platformPage/1.png',
					'name': '淘宝众筹',
					'money': '1,235万'
				}],
				linkName: '平台比较'
			},
			article: {
				linkName: '众筹百科'
			},
			category: {
				title: '行业比较',
				list: [{
					dataId: '14',
					name: '数码与周边',
					title: '7日资金',
					money: '1,065万',
					unit: 'RMB'
				}, {
					dataId: '5',
					name: '智能出行',
					title: '7日资金',
					money: '928万',
					unit: 'RMB'
				}, {
					dataId: '9',
					name: '环保与净化',
					title: '7日资金',
					money: '451万',
					unit: 'RMB'
				}]
			},
			funding: {
				title: '热门项目',
				list: [{
					itemLink: '/index/product/22939',
					name: '硕基360°高清智能记录仪',
					platform: '京东众筹',
					imgSrc: '//img30.360buyimg.com/cf/jfs/t3184/269/884813611/64066/2a2621cb/57c1040dN33b53e1e.jpg',
					status: '众筹中',
					title: '7日筹资',
					money: '5,546,516',
					unit: 'RMB',
					flag: '1',
					abroadMoney: 0,
					abroadUnit: 'Null'
				}, {
					itemLink: '/index/product/23205',
					name: 'Sphere - Precision Microphone Modeling System',
					platform: 'Indiegogo',
					imgSrc: 'http://image.suning.cn/uimg/cfs/project/147364318397706378.jpg',
					status: '众筹中',
					title: '7日筹资',
					money: '1,240,613',
					unit: 'RMB',
					flag: '0',
					abroadMoney: '188,609',
					abroadUnit: 'USD'
				}, {
					itemLink: '/index/product/22129',
					name: '霸迪维便携式空气净化器',
					platform: '苏宁众筹',
					imgSrc: '//img30.360buyimg.com/cf/jfs/t3289/109/1029718065/211921/a94c8ef4/57c40d83N139866dc.jpg',
					status: '众筹中',
					title: '7日筹资',
					money: '3,926,655',
					unit: 'RMB',
					flag: '1',
					abroadMoney: 0,
					abroadUnit: 'Null'
				}]
			}
		}
	};

	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.IS_SHOW_MENU, function (state) {
		state.menu.isShow == false ? state.menu.isShow = true : state.menu.isShow = false;
		if (state.menu.isShow) {} else {}
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.IS_SHOW_MENU_MORE, function (state) {
		state.menu.isShowMore == false ? state.menu.isShowMore = true : state.menu.isShowMore = false;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SEARCH_IN, function (state) {
		state.search.searchBox = 'searchBoxOn';
		state.search.search = 'searchOn';
		state.search.searchBtn = 'searchBtnOn';
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SEARCH_OUT, function (state) {
		state.search.searchBox = 'searchBoxOut';
		state.search.search = 'searchOut';
		state.search.searchBtn = 'searchBtnOut';
	}), _mutations);

	exports.default = {
		state: state,
		mutations: mutations
	};

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(142);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(143), __esModule: true };

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(144);
	var $Object = __webpack_require__(147).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(145);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(155), 'Object', {defineProperty: __webpack_require__(151).f});

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(146)
	  , core      = __webpack_require__(147)
	  , ctx       = __webpack_require__(148)
	  , hide      = __webpack_require__(150)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 146 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 147 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(149);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 149 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(151)
	  , createDesc = __webpack_require__(159);
	module.exports = __webpack_require__(155) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(152)
	  , IE8_DOM_DEFINE = __webpack_require__(154)
	  , toPrimitive    = __webpack_require__(158)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(155) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(153);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 153 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(155) && !__webpack_require__(156)(function(){
	  return Object.defineProperty(__webpack_require__(157)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(156)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 156 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(153)
	  , document = __webpack_require__(146).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(153);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 159 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _defineProperty2 = __webpack_require__(141);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _mutations; // 页面存储池


	var _mutationTypes = __webpack_require__(16);

	var _index = __webpack_require__(140);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var state = {
		stack: {
			page: ['/index'],
			pageDir: 'next'
		},
		pageClick: false
	};

	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.JUDGE_PATH, function (state, flag) {
		if (flag === 'next') {
			state.stack.pageDir = 'next';
		} else {
			state.stack.pageDir = 'prev';
		}
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.IS_CLICK, function (state) {
		_index2.default.state.menu.isShow = false;
		state.pageClick = true;
		alert(1);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.CLOSE_CLICK, function (state) {
		state.pageClick = false;
	}), _mutations);

	exports.default = {
		state: state,
		mutations: mutations
	};

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _defineProperty2 = __webpack_require__(141);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _mutations;

	var _mutationTypes = __webpack_require__(16);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var state = {
		rankTop: {
			name: 'Kickstarter',
			count: '6,902项目',
			money: '23,43',
			unit: '亿RMB'
		},
		rank: [{
			name: '京东众筹',
			count: '2989项目',
			money: '20,58',
			unit: '亿RMB'
		}, {
			name: '淘宝众筹',
			count: '1847项目',
			money: '14,35',
			unit: '亿RMB'
		}, {
			name: 'Indiegogo',
			count: '4896项目',
			money: '11,42',
			unit: '亿RMB'
		}],
		tabs: {
			platform: {
				'资金变化': ['Kickstarter', '京东众筹', '淘宝众筹', 'Indiegogo'],
				'支持人数': ['Kickstarter', '京东众筹', '淘宝众筹', 'Indiegogo']
			},
			chartData: {
				'资金变化': {
					'Kickstarter': [742840.53, 523144.39, 609694.39, 1011372.92, 1417801.58, 1309175.8, 740204.62],
					'京东众筹': [1636035, 1264181, 1432917, 4607516, 2664416, 2791836, 2608706],
					'淘宝众筹': [1742101.56, 1895752.21, 2064079.23, 2808343.22, 2476338.68, 1518558.62, 4049866.02],
					'Indiegogo': [1914563.38, 1625007.23, 1714872.97, 2124769.27, 2326856.5, 1598689.94, 1681805.38]
				},
				'支持人数': {
					'Kickstarter': [1691, 1061, 1098, 2061, 2323, 967, 804],
					'京东众筹': [14240, 15840, 16623, 21342, 18168, 19397, 14953],
					'淘宝众筹': [18107, 18244, 23842, 44735, 17986, 20807, 23697],
					'Indiegogo': [1918, 1506, 1330, 1732, 2104, 1521, 1908]
				}
			},
			chartDate: ["08-23", "08-24", "08-25", "08-26", "08-27", "08-28", "08-29"],
			activeTab: '资金变化',
			activePF: 'Kickstarter',
			activeData: [742840.53, 523144.39, 609694.39, 1011372.92, 1417801.58, 1309175.8, 740204.62]
		},
		rules: {
			title: '平台规则',
			tableHeader: ['平台', '未达目标', '平台收费', '支付方式', '发起人'],
			tableDesc: [{
				name: '京东众筹',
				target: '失败',
				charge: {
					line: '1',
					ratio: ['3%']
				},
				payment: {
					line: '2',
					mode: ['网银', '京东支付']
				},
				promoter: ['境内']
			}, {
				name: '淘宝众筹',
				target: '失败',
				charge: {
					line: '1',
					ratio: ['暂无费用']
				},
				payment: {
					line: '2',
					mode: ['网银', '支付宝']
				},
				promoter: ['境内']
			}, {
				name: 'Kickstarter',
				target: '失败',
				charge: {
					line: '2',
					ratio: ['5%+3%', '-5%']
				},
				payment: {
					line: '3',
					mode: ['仅支持通过', 'Stripe的信用卡']
				},
				promoter: ['不支持', '中国']
			}, {
				name: 'Indiegogo',
				target: '仍可筹款',
				charge: {
					line: '4',
					ratio: ['5%+3', '+25USD', '(境外转账)', '+30c']
				},
				payment: {
					line: '2',
					mode: ['支持Paypal', '/信用卡']
				},
				promoter: ['支持', '中国']
			}]
		},
		project: {
			list: {
				'明星项目': [{
					currMoney: 2163184877.71,
					targetMoney: 1844131330.87,
					website: 3,
					finishPer: 117
				}, {
					currMoney: 1741325310,
					targetMoney: 302968964,
					website: 2,
					finishPer: 574
				}, {
					currMoney: 1170924336.4,
					targetMoney: 98515000,
					website: 1,
					finishPer: 1188
				}, {
					currMoney: 1171167687.21,
					targetMoney: 402448829.83,
					website: 4,
					finishPer: 291
				}],
				'一般项目': [{
					currMoney: 198112822.09,
					targetMoney: 1193364579.29,
					website: 3,
					finishPer: 16
				}, {
					currMoney: 374205562,
					targetMoney: 201916035,
					website: 2,
					finishPer: 185
				}, {
					currMoney: 298843759.95,
					targetMoney: 124102775,
					website: 1,
					finishPer: 240
				}, {
					currMoney: 5693911.2,
					targetMoney: 86302259814.12,
					website: 4,
					finishPer: 0
				}],
				'小微项目': [{
					currMoney: 36224.22,
					targetMoney: 1786330969.97,
					website: 3,
					finishPer: 0
				}, {
					currMoney: 12570081,
					targetMoney: 47539230,
					website: 2,
					finishPer: 26
				}, {
					currMoney: 14717836.48,
					targetMoney: 18099064,
					website: 1,
					finishPer: 81
				}, {
					currMoney: 0,
					targetMoney: 11324893066.81,
					website: 4,
					finishPer: 0
				}]
			},
			standard: ['大项目的标准：平台众筹实际金额的前20%', '一般项目的标准：平台众筹实际金额中间的60%', '小微目的标准：平台众筹实际金额的后20%'],
			maxList: [1188, 240, 81],
			activeTab: '明星项目'
		}
	};
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.CLICK_TABS, function (state, _tabs) {
		var tabs = state.tabs;
		tabs.activeTab = _tabs;
		tabs.activePF = state.rankTop.name;
		tabs.activeData = tabs.chartData[tabs.activeTab][tabs.activePF];
		$('#pf__charts').highcharts().series[0].setData(tabs.activeData);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.CLICK_PLATFORM, function (state, _platform) {
		var tabs = state.tabs;
		tabs.activePF = _platform;
		tabs.activeData = tabs.chartData[tabs.activeTab][tabs.activePF];
		$('#pf__charts').highcharts().series[0].setData(tabs.activeData);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.PROJECT_TABS, function (state, _tabs) {
		state.project.activeTab = _tabs;
	}), _mutations);

	exports.default = {
		state: state,
		mutations: mutations
	};

/***/ },
/* 162 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var state = {
		list: [{
			title: '数码与周边',
			titleImg: 'https://s3.cn-north-1.amazonaws.com.cn/imgs/category/14.jpg',
			descTitle: '七日资金',
			topRank: 1,
			topMoney: 27200000,
			subList: [{ title: '累计金额', desc: 117900000, rank: 1 }, { title: '项目数', desc: 2128, rank: 1 }, { title: '人气', desc: 4850000, rank: 1 }],
			tips: '电脑/音响/摄影/平板/游戏机/3C设备相关'
		}]
	};

	var mutations = {};

	exports.default = {
		state: state,
		mutations: mutations
	};

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _defineProperty2 = __webpack_require__(141);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _mutationTypes = __webpack_require__(16);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var state = {
		category: {
			tabs: ['准备工作', '发布内容', '回报设置', '平台审核', '运营推广', '发货售后'],
			content: [{
				list: [{
					title: '平台规则',
					articleType: 0,
					article: [{
						listTitle: '众筹百科 | 如何设定一个合适的众筹目标？',
						link: 'http://mp.weixin.qq.com/s?__biz=MjM5ODMwMjg5OA==&mid=500402896&idx=1&sn=989f6c4f7c88cc607868cabc37034051&scene=0#wechat_redirect',
						pkId: 15
					}, {
						listTitle: '众筹百科 | 去众筹前你需要了解的那些事',
						link: 'http://mp.weixin.qq.com/s?__biz=MjM5ODMwMjg5OA==&mid=500402858&idx=1&sn=56847a790950d0fbada66198d7025d65#rd',
						pkId: 1
					}]
				}, {
					title: '账户准备',
					article: [{
						listTitle: '众筹百科 | 准备一个实名账户',
						link: 'http://mp.weixin.qq.com/s?__biz=MjM5ODMwMjg5OA==&mid=500402911&idx=1&sn=cc70f6c53d5cf16f48947cc5fa07742e&scene=0#wechat_redirect',
						pkId: 16
					}]
				}]
			}, {
				list: [{
					title: '平台规则',
					articleType: 0,
					article: [{
						listTitle: '众筹百科 | 如何设定一个合适的众筹目标？',
						link: 'http://mp.weixin.qq.com/s?__biz=MjM5ODMwMjg5OA==&mid=500402896&idx=1&sn=989f6c4f7c88cc607868cabc37034051&scene=0#wechat_redirect',
						pkId: 15
					}, {
						listTitle: '众筹百科 | 去众筹前你需要了解的那些事',
						link: 'http://mp.weixin.qq.com/s?__biz=MjM5ODMwMjg5OA==&mid=500402858&idx=1&sn=56847a790950d0fbada66198d7025d65#rd',
						pkId: 1
					}]
				}, {
					title: '账户准备',
					article: [{
						listTitle: '众筹百科 | 准备一个实名账户',
						link: 'http://mp.weixin.qq.com/s?__biz=MjM5ODMwMjg5OA==&mid=500402911&idx=1&sn=cc70f6c53d5cf16f48947cc5fa07742e&scene=0#wechat_redirect',
						pkId: 16
					}]
				}]
			}, {
				list: [{
					title: '平台规则',
					articleType: 0,
					article: [{
						listTitle: '众筹百科 | 如何设定一个合适的众筹目标？',
						link: 'http://mp.weixin.qq.com/s?__biz=MjM5ODMwMjg5OA==&mid=500402896&idx=1&sn=989f6c4f7c88cc607868cabc37034051&scene=0#wechat_redirect',
						pkId: 15
					}, {
						listTitle: '众筹百科 | 去众筹前你需要了解的那些事',
						link: 'http://mp.weixin.qq.com/s?__biz=MjM5ODMwMjg5OA==&mid=500402858&idx=1&sn=56847a790950d0fbada66198d7025d65#rd',
						pkId: 1
					}]
				}, {
					title: '账户准备',
					article: [{
						listTitle: '众筹百科 | 准备一个实名账户',
						link: 'http://mp.weixin.qq.com/s?__biz=MjM5ODMwMjg5OA==&mid=500402911&idx=1&sn=cc70f6c53d5cf16f48947cc5fa07742e&scene=0#wechat_redirect',
						pkId: 16
					}]
				}]
			}, {
				list: [{
					title: '平台规则',
					articleType: 0,
					article: [{
						listTitle: '众筹百科 | 如何设定一个合适的众筹目标？',
						link: 'http://mp.weixin.qq.com/s?__biz=MjM5ODMwMjg5OA==&mid=500402896&idx=1&sn=989f6c4f7c88cc607868cabc37034051&scene=0#wechat_redirect',
						pkId: 15
					}, {
						listTitle: '众筹百科 | 去众筹前你需要了解的那些事',
						link: 'http://mp.weixin.qq.com/s?__biz=MjM5ODMwMjg5OA==&mid=500402858&idx=1&sn=56847a790950d0fbada66198d7025d65#rd',
						pkId: 1
					}]
				}, {
					title: '账户准备4',
					article: [{
						listTitle: '众筹百科 | 准备一个实名账户',
						link: 'http://mp.weixin.qq.com/s?__biz=MjM5ODMwMjg5OA==&mid=500402911&idx=1&sn=cc70f6c53d5cf16f48947cc5fa07742e&scene=0#wechat_redirect',
						pkId: 16
					}]
				}]
			}, {
				list: [{
					title: '平台规则3',
					articleType: 0,
					article: [{
						listTitle: '众筹百科 | 如何设定一个合适的众筹目标？',
						link: 'http://mp.weixin.qq.com/s?__biz=MjM5ODMwMjg5OA==&mid=500402896&idx=1&sn=989f6c4f7c88cc607868cabc37034051&scene=0#wechat_redirect',
						pkId: 15
					}, {
						listTitle: '众筹百科 | 去众筹前你需要了解的那些事',
						link: 'http://mp.weixin.qq.com/s?__biz=MjM5ODMwMjg5OA==&mid=500402858&idx=1&sn=56847a790950d0fbada66198d7025d65#rd',
						pkId: 1
					}]
				}, {
					title: '账户准备2',
					article: [{
						listTitle: '众筹百科 | 准备一个实名账户',
						link: 'http://mp.weixin.qq.com/s?__biz=MjM5ODMwMjg5OA==&mid=500402911&idx=1&sn=cc70f6c53d5cf16f48947cc5fa07742e&scene=0#wechat_redirect',
						pkId: 16
					}]
				}]
			}, {
				list: [{
					title: '平台规则1',
					articleType: 0,
					article: [{
						listTitle: '众筹百科 | 如何设定一个合适的众筹目标？',
						link: 'http://mp.weixin.qq.com/s?__biz=MjM5ODMwMjg5OA==&mid=500402896&idx=1&sn=989f6c4f7c88cc607868cabc37034051&scene=0#wechat_redirect',
						pkId: 15
					}, {
						listTitle: '众筹百科 | 去众筹前你需要了解的那些事',
						link: 'http://mp.weixin.qq.com/s?__biz=MjM5ODMwMjg5OA==&mid=500402858&idx=1&sn=56847a790950d0fbada66198d7025d65#rd',
						pkId: 1
					}]
				}, {
					title: '账户准备',
					article: [{
						listTitle: '众筹百科 | 准备一个实名账户',
						link: 'http://mp.weixin.qq.com/s?__biz=MjM5ODMwMjg5OA==&mid=500402911&idx=1&sn=cc70f6c53d5cf16f48947cc5fa07742e&scene=0#wechat_redirect',
						pkId: 16
					}]
				}]
			}],
			activeTabs: 0
		}
	};

	var mutations = (0, _defineProperty3.default)({}, _mutationTypes.ARTICLE_TABS, function (state, _tabs) {
		state.category.activeTabs = _tabs;
	});

	exports.default = {
		state: state,
		mutations: mutations
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _defineProperty2 = __webpack_require__(141);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _mutationTypes = __webpack_require__(16);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var state = {
		items: {
			'无人机': {
				'增速榜': [{
					title: 'PowerEgg无人机',
					statusTxt: '众筹中',
					img: '//img30.360buyimg.com/cf/jfs/t3184/269/884813611/64066/2a2621cb/57c1040dN33b53e1e.jpg',
					growthMoney: 4322661,
					growthMoneyOrg: 0,
					currMoney: 1845064.58,
					currMoneyOrg: 280503,
					unit: 'RMB',
					flag: 1,
					finishPer: 254,
					support: 23870,
					remainDay: 32,
					rank: 1,
					status: 2,
					foreverStatus: 0,
					currencyId: 1,
					createDate: 1313525600000
				}, {
					title: '立真多功能炫彩发光手机支架',
					statusTxt: '众筹中',
					img: 'http://image.suning.cn/uimg/cfs/project/147254208242817360.jpg',
					growthMoney: 799730,
					growthMoneyOrg: 0,
					currMoney: 1845064.58,
					currMoneyOrg: 280503,
					unit: 'RMB',
					flag: 1,
					finishPer: 95,
					support: 35954,
					remainDay: 56,
					rank: 2,
					status: 2,
					foreverStatus: 0,
					currencyId: 1,
					createDate: 1473825600000
				}, {
					title: 'Lebath乐泡机',
					statusTxt: '众筹成功',
					img: '//img30.360buyimg.com/cf/jfs/t3022/62/611692095/123181/4a7c4cd9/57a8a0d4N8fe94648.jpg',
					growthMoney: 1237283,
					growthMoneyOrg: 0,
					currMoney: 1845064.58,
					currMoneyOrg: 280503,
					unit: 'RMB',
					flag: 1,
					finishPer: 123,
					support: 6030,
					remainDay: 0,
					rank: 3,
					status: 3,
					foreverStatus: 0,
					currencyId: 1,
					createDate: 1473825600000
				}, {
					title: 'eora 3D - High-precision 3D Scanning',
					statusTxt: '无限众筹',
					img: 'https://s3.cn-north-1.amazonaws.com.cn/imgs/zhongchou/cover/4/7143.jpg',
					growthMoney: 148859.94,
					growthMoneyOrg: 22631,
					currMoney: 1845064.58,
					currMoneyOrg: 280503,
					unit: 'USD',
					flag: 1,
					finishPer: 254,
					support: 23870,
					remainDay: 32,
					rank: 1,
					status: 0,
					foreverStatus: 1,
					currencyId: 2,
					createDate: 1473825600000
				}],
				'新上': [{
					title: 'PowerEgg无人机',
					statusTxt: '众筹中',
					img: '//img30.360buyimg.com/cf/jfs/t3184/269/884813611/64066/2a2621cb/57c1040dN33b53e1e.jpg',
					growthMoney: 4322661,
					growthMoneyOrg: 0,
					currMoney: 1845064.58,
					currMoneyOrg: 280503,
					unit: 'RMB',
					flag: 1,
					finishPer: 254,
					support: 23870,
					remainDay: 32,
					rank: 1,
					status: 2,
					foreverStatus: 0,
					currencyId: 1,
					createDate: 1473725600000
				}, {
					title: '立真多功能炫彩发光手机支架',
					statusTxt: '众筹中',
					img: 'http://image.suning.cn/uimg/cfs/project/147254208242817360.jpg',
					growthMoney: 799730,
					growthMoneyOrg: 0,
					currMoney: 1845064.58,
					currMoneyOrg: 280503,
					unit: 'RMB',
					flag: 1,
					finishPer: 95,
					support: 35954,
					remainDay: 56,
					rank: 2,
					status: 2,
					foreverStatus: 0,
					currencyId: 1,
					createDate: 1473825600000
				}, {
					title: 'Lebath乐泡机',
					statusTxt: '众筹成功',
					img: '//img30.360buyimg.com/cf/jfs/t3022/62/611692095/123181/4a7c4cd9/57a8a0d4N8fe94648.jpg',
					growthMoney: 1237283,
					growthMoneyOrg: 0,
					currMoney: 1845064.58,
					currMoneyOrg: 280503,
					unit: 'RMB',
					flag: 1,
					finishPer: 123,
					support: 6030,
					remainDay: 0,
					rank: 3,
					status: 3,
					foreverStatus: 0,
					currencyId: 1,
					createDate: 1473825600000
				}, {
					title: 'eora 3D - High-precision 3D Scanning',
					statusTxt: '无限众筹',
					img: 'https://s3.cn-north-1.amazonaws.com.cn/imgs/zhongchou/cover/4/7143.jpg',
					growthMoney: 148859.94,
					growthMoneyOrg: 22631,
					currMoney: 1845064.58,
					currMoneyOrg: 280503,
					unit: 'USD',
					flag: 1,
					finishPer: 254,
					support: 23870,
					remainDay: 32,
					rank: 1,
					status: 0,
					foreverStatus: 1,
					currencyId: 2,
					createDate: 1473825600000
				}],
				'已结束': [{
					title: 'PowerEgg无人机',
					statusTxt: '众筹中',
					img: '//img30.360buyimg.com/cf/jfs/t3184/269/884813611/64066/2a2621cb/57c1040dN33b53e1e.jpg',
					growthMoney: 4322661,
					growthMoneyOrg: 0,
					currMoney: 1845064.58,
					currMoneyOrg: 280503,
					unit: 'RMB',
					flag: 1,
					finishPer: 254,
					support: 23870,
					remainDay: 32,
					rank: 1,
					status: 2,
					foreverStatus: 0,
					currencyId: 1,
					createDate: 1473825600000
				}, {
					title: '立真多功能炫彩发光手机支架',
					statusTxt: '众筹中',
					img: 'http://image.suning.cn/uimg/cfs/project/147254208242817360.jpg',
					growthMoney: 799730,
					growthMoneyOrg: 0,
					currMoney: 1845064.58,
					currMoneyOrg: 280503,
					unit: 'RMB',
					flag: 1,
					finishPer: 95,
					support: 35954,
					remainDay: 56,
					rank: 2,
					status: 2,
					foreverStatus: 0,
					currencyId: 1,
					createDate: 1473825600000
				}, {
					title: 'Lebath乐泡机',
					statusTxt: '众筹成功',
					img: '//img30.360buyimg.com/cf/jfs/t3022/62/611692095/123181/4a7c4cd9/57a8a0d4N8fe94648.jpg',
					growthMoney: 1237283,
					growthMoneyOrg: 0,
					currMoney: 1845064.58,
					currMoneyOrg: 280503,
					unit: 'RMB',
					flag: 1,
					finishPer: 123,
					support: 6030,
					remainDay: 0,
					rank: 3,
					status: 3,
					foreverStatus: 0,
					currencyId: 1,
					createDate: 1473825600000
				}, {
					title: 'eora 3D - High-precision 3D Scanning',
					statusTxt: '无限众筹',
					img: 'https://s3.cn-north-1.amazonaws.com.cn/imgs/zhongchou/cover/4/7143.jpg',
					growthMoney: 148859.94,
					growthMoneyOrg: 22631,
					currMoney: 1845064.58,
					currMoneyOrg: 280503,
					unit: 'USD',
					flag: 1,
					finishPer: 254,
					support: 23870,
					remainDay: 32,
					rank: 1,
					status: 0,
					foreverStatus: 1,
					currencyId: 2,
					createDate: 1473825600000
				}]
			}
		},
		tabs: ['增速榜', '新上', '已结束'],
		activeTitle: '无人机',
		activeTabs: '增速榜'
	};

	var mutations = (0, _defineProperty3.default)({}, _mutationTypes.LIST_TABS, function (state, _key) {
		state.activeTabs = _key;
	});

	exports.default = {
		state: state,
		mutations: mutations
	};

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _defineProperty2 = __webpack_require__(141);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _mutations;

	var _mutationTypes = __webpack_require__(16);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var state = {
		'25638': {
			/**banner**/
			img: 'http://image.suning.cn/uimg/cfs/project/147364318397706378.jpg',
			title: 'Benelli TRK502全路况欧式陆巡拉力车',
			/**status**/
			website: 7,
			foreverStatus: 0,
			status: 2,
			remainDay: 11,
			productUrl: 'http://zc.suning.com/project/detail.htm?projectId=11329',
			/** info **/
			currMoney: 17385108,
			currMoneyOrg: 17385108,
			targetMoney: 1000000,
			targetMoneyOrg: 1000000,
			currencyId: 1,
			currencyNick: "CNY",
			personName: "浙江钱江摩托股份有限公司",
			personDesc: "TRK502众筹咨询QQ客服1群：4256355 客服2群：5011592",
			/** infoTabs **/
			infoTabs: ['竞争关系', '竞争者', '行业比较'],
			activeInfoTab: '竞争关系',
			finishPer: 1738,
			supportPerson: 15645,
			averageMoney: 1111.22,
			moneyMax: 17385108,
			moneyAvg: 760993.325941177,
			finishAvg: 78,
			finishMax: 2147483647,
			supportAvg: 3935,
			supportMax: 113653,
			averageAvg: 193.347579450007,
			averageMax: 20857.58,
			compList: [{
				"averageMoney": 1111.22,
				"currMoney": 17385108,
				"currMoneyOrg": 17385108,
				"finishPer": 1738,
				"foreverStatus": 0,
				"pkId": 25638,
				"productName": "Benelli TRK502全路况欧式陆巡拉力车",
				"productStatus": "众筹中",
				"statusValue": 2,
				"supportPerson": 15645,
				"targetMoney": 1000000,
				"targetMoneyOrg": 1000000,
				"website": 7,
				"websiteName": "苏宁众筹"
			}, {
				"averageMoney": 306.58,
				"currMoney": 15057342,
				"currMoneyOrg": 15057342,
				"finishPer": 1505,
				"foreverStatus": 0,
				"pkId": 9143,
				"productName": "野兽碳纤维智能自行车",
				"productStatus": "众筹成功",
				"statusValue": 3,
				"supportPerson": 49114,
				"targetMoney": 1000000,
				"targetMoneyOrg": 1000000,
				"website": 2,
				"websiteName": "京东众筹"
			}, {
				"averageMoney": 539.21,
				"currMoney": 11427531,
				"currMoneyOrg": 11427531,
				"finishPer": 2285,
				"foreverStatus": 0,
				"pkId": 19509,
				"productName": "Ankuai骑行运动代步车",
				"productStatus": "众筹成功",
				"statusValue": 3,
				"supportPerson": 21193,
				"targetMoney": 500000,
				"targetMoneyOrg": 500000,
				"website": 7,
				"websiteName": "苏宁众筹"
			}, {
				"averageMoney": 5111.49,
				"currMoney": 8295944.55,
				"currMoneyOrg": 1261222.7,
				"finishPer": 1681,
				"foreverStatus": 0,
				"pkId": 14504,
				"productName": "GeoOrbital Wheel | Make your bike electric in 60 seconds",
				"productStatus": "众筹成功",
				"statusValue": 3,
				"supportPerson": 1623,
				"targetMoney": 493327.5,
				"targetMoneyOrg": 75000,
				"website": 3,
				"websiteName": "Kickstarter"
			}, {
				"averageMoney": 1136.46,
				"currMoney": 7322207,
				"currMoneyOrg": 7322207,
				"finishPer": 73222,
				"foreverStatus": 0,
				"pkId": 2723,
				"productName": "洛克菲勒智能一代自行车",
				"productStatus": "众筹成功",
				"statusValue": 3,
				"supportPerson": 6443,
				"targetMoney": 10000,
				"targetMoneyOrg": 10000,
				"website": 2,
				"websiteName": "京东众筹"
			}, {
				"averageMoney": 208.14,
				"currMoney": 6596049,
				"currMoneyOrg": 6596049,
				"finishPer": 659,
				"foreverStatus": 0,
				"pkId": 20870,
				"productName": "云马mini智能折叠电单车",
				"productStatus": "众筹成功",
				"statusValue": 3,
				"supportPerson": 31691,
				"targetMoney": 1000000,
				"targetMoneyOrg": 1000000,
				"website": 2,
				"websiteName": "京东众筹"
			}, {
				"averageMoney": 233.49,
				"currMoney": 3595928,
				"currMoneyOrg": 3595928,
				"finishPer": 359,
				"foreverStatus": 0,
				"pkId": 20247,
				"productName": "大行智能p8折叠自行车",
				"productStatus": "众筹成功",
				"statusValue": 3,
				"supportPerson": 15401,
				"targetMoney": 1000000,
				"targetMoneyOrg": 1000000,
				"website": 2,
				"websiteName": "京东众筹"
			}, {
				"averageMoney": 462.41,
				"currMoney": 3530946,
				"currMoneyOrg": 3530946,
				"finishPer": 3530,
				"foreverStatus": 0,
				"pkId": 2346,
				"productName": "曲奇智能单车",
				"productStatus": "众筹成功",
				"statusValue": 3,
				"supportPerson": 7636,
				"targetMoney": 100000,
				"targetMoneyOrg": 100000,
				"website": 2,
				"websiteName": "京东众筹"
			}, {
				"averageMoney": 732.01,
				"currMoney": 3335767,
				"currMoneyOrg": 3335767,
				"finishPer": 333,
				"foreverStatus": 0,
				"pkId": 25521,
				"productName": "骑达R4折叠助力自行车",
				"productStatus": "众筹中",
				"statusValue": 2,
				"supportPerson": 4557,
				"targetMoney": 1000000,
				"targetMoneyOrg": 1000000,
				"website": 2,
				"websiteName": "京东众筹"
			}, {
				"averageMoney": 135.56,
				"currMoney": 3317275.2,
				"currMoneyOrg": 3317275.2,
				"finishPer": 3317,
				"foreverStatus": 0,
				"pkId": 22696,
				"productName": "友米智能充气宝——骑行爱好者必备神器",
				"productStatus": "众筹成功",
				"statusValue": 3,
				"supportPerson": 24470,
				"targetMoney": 100000,
				"targetMoneyOrg": 100000,
				"website": 1,
				"websiteName": "淘宝众筹"
			}],
			"category": {
				"cateDescOuter": "车载/轮船/飞机/自行车/出行相关",
				"categoryDesc": "智能汽车、轮船、飞机、自行车、以及与其相关产业及配件",
				"categoryName": "智能出行",
				"categoryStatus": 1,
				"cover": "https://s3.cn-north-1.amazonaws.com.cn/imgs/category/5.jpg",
				"pkId": 5,
				"recentMoney": 32204721.48,
				"recentMoneyRank": 1,
				"totalMoney": 860558262.42,
				"totalMoneyRank": 2,
				"totalProduct": 823,
				"totalProductRank": 5,
				"totalSupport": 2972559,
				"totalSupportRank": 4,
				"updateDate": {
					"date": 20,
					"day": 2,
					"hours": 4,
					"minutes": 19,
					"month": 8,
					"seconds": 8,
					"time": 1474316348000,
					"timezoneOffset": -480,
					"year": 116
				},
				"updateUser": "Vincent"
			},
			"categoryStat": {
				"capitaAvg": 868.41,
				"capitaMax": 20857.58,
				"capitaMin": 0,
				"capitaMod": 2607.2,
				"categoryId": 5,
				"finishAvg": 18266371,
				"finishMax": 2147483647,
				"finishMin": 0,
				"finishMod": 268435455,
				"moneyAvg": 1045635.8,
				"moneyMax": 81766834,
				"moneyMin": 0,
				"moneyMod": 10220854.25,
				"pkId": 4033,
				"supportAvg": 3611,
				"supportMax": 262773,
				"supportMin": 0,
				"supportMod": 32846,
				"updateDate": {
					"date": 20,
					"day": 2,
					"hours": 12,
					"minutes": 0,
					"month": 8,
					"seconds": 0,
					"time": 1474344000000,
					"timezoneOffset": -480,
					"year": 116
				}
			},
			"order": 1,
			/**charts**/
			"moneyList": [[[1473912000000, 5817602], [1473998400000, 11281594], [1474084800000, 12603016], [1474171200000, 13804620], [1474257600000, 15640808], [1474344000000, 17385108]], [[1473912000000, 5817602], [1473998400000, 5463992], [1474084800000, 1321422], [1474171200000, 1201604], [1474257600000, 1836188], [1474344000000, 1744300]]],
			"supportList": [[[1473912000000, 5849], [1473998400000, 9860], [1474084800000, 11410], [1474171200000, 13530], [1474257600000, 14782], [1474344000000, 15645]], [[1473912000000, 5849], [1473998400000, 4011], [1474084800000, 1550], [1474171200000, 2120], [1474257600000, 1252], [1474344000000, 863]]],
			isFocus: 1,
			judgeList: []
		},
		activeProduct: '25638',
		isReply: false,
		replyBoxTop: 0
	};

	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.PRODUCT_TABS, function (state, _tab) {
		state[state.activeProduct].activeInfoTab = _tab;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.IS_FOCUS, function (state) {
		var isFocus = state[state.activeProduct].isFocus;
		state[state.activeProduct].isFocus = isFocus == 1 ? 0 : 1;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.IS_REPLY, function (state, func) {
		state.replyBoxTop = document.body.scrollTop;
		state.isReply = state.isReply == true ? false : true;
	}), _mutations);

	exports.default = {
		state: state,
		mutations: mutations
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	__webpack_require__(16);

	var state = {
		searchVal: '无人机',
		total: 44,
		list: [{
			name: 'PowerEgg<font class="light">无人机</font>',
			money: 41717236,
			status: '众筹中',
			link: ''
		}, {
			name: '指尖上的<font class="light">无人机</font>',
			money: 14099,
			status: '众筹失败',
			link: ''
		}, {
			name: 'HiSKY一体化穿越<font class="light">无人机</font>',
			money: 149768,
			status: '众筹成功',
			link: ''
		}, {
			name: '众筹-星图<font class="light">无人机</font>',
			money: 31650,
			status: '众筹成功',
			link: ''
		}, {
			name: '致导便携式可折叠航拍<font class="light">无人机</font>',
			money: 1807683,
			status: '众筹成功',
			link: ''
		}, {
			name: '飞羿云智能<font class="light">无人机</font>',
			money: 843105,
			status: '众筹成功',
			link: ''
		}, {
			name: 'ELF灵翼自拍<font class="light">无人机</font>',
			money: 827829,
			status: '众筹成功',
			link: ''
		}, {
			name: '云中客 智能航拍<font class="light">无人机</font>',
			money: 350380,
			status: '众筹成功',
			link: ''
		}, {
			name: '首欣4号<font class="light">无人机</font>',
			money: 309458,
			status: '众筹成功',
			link: ''
		}, {
			name: '斯威普防水<font class="light">无人机</font>',
			money: 212587,
			status: '众筹成功',
			link: ''
		}]
	};

	var mutations = {};

	exports.default = {
		state: state,
		mutations: mutations
	};

/***/ },
/* 167 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div id=\"app\">\n\t<router-view></router-view>\n</div>\n";

/***/ }
/******/ ]);