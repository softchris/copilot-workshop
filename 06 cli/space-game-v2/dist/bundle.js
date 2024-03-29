/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Enemy.js":
/*!**********************!*\
  !*** ./src/Enemy.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Enemy: () => (/* binding */ Enemy)\n/* harmony export */ });\n/* harmony import */ var _Laser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Laser.js */ \"./src/Laser.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n// @ts-check\n\nvar Enemy = /*#__PURE__*/function () {\n  function Enemy(x, y, width, height, image, laserImg) {\n    var _this = this;\n    _classCallCheck(this, Enemy);\n    this.x = x;\n    this.y = y;\n    this.width = width;\n    this.height = height;\n    this.image = image;\n    this.laserImg = laserImg;\n    this.lasers = [];\n    setInterval(function () {\n      _this.fire();\n    }, 1000 + Math.random() * 3000); // Random time between 1 and 4 seconds\n  }\n  return _createClass(Enemy, [{\n    key: \"draw\",\n    value: function draw(ctx) {\n      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);\n    }\n  }, {\n    key: \"fire\",\n    value: function fire() {\n      this.lasers.push(new _Laser_js__WEBPACK_IMPORTED_MODULE_0__.Laser(this.x + this.width / 2, this.y, 5, 10, this.laserImg, \"enemy\"));\n    }\n  }]);\n}();\n\n//# sourceURL=webpack://space-game/./src/Enemy.js?");

/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player.js */ \"./src/Player.js\");\n/* harmony import */ var _Enemy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enemy.js */ \"./src/Enemy.js\");\n/* harmony import */ var _Laser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Laser.js */ \"./src/Laser.js\");\n/* harmony import */ var _Meteor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Meteor.js */ \"./src/Meteor.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = \"function\" == typeof Symbol ? Symbol : {}, a = i.iterator || \"@@iterator\", c = i.asyncIterator || \"@@asyncIterator\", u = i.toStringTag || \"@@toStringTag\"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, \"\"); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, \"_invoke\", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: \"normal\", arg: t.call(e, r) }; } catch (t) { return { type: \"throw\", arg: t }; } } e.wrap = wrap; var h = \"suspendedStart\", l = \"suspendedYield\", f = \"executing\", s = \"completed\", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { [\"next\", \"throw\", \"return\"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if (\"throw\" !== c.type) { var u = c.arg, h = u.value; return h && \"object\" == _typeof(h) && n.call(h, \"__await\") ? e.resolve(h.__await).then(function (t) { invoke(\"next\", t, i, a); }, function (t) { invoke(\"throw\", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke(\"throw\", t, i, a); }); } a(c.arg); } var r; o(this, \"_invoke\", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error(\"Generator is already running\"); if (o === s) { if (\"throw\" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else \"return\" === n.method && n.abrupt(\"return\", n.arg); o = f; var p = tryCatch(e, r, n); if (\"normal\" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } \"throw\" === p.type && (o = s, n.method = \"throw\", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, \"throw\" === n && e.iterator[\"return\"] && (r.method = \"return\", r.arg = t, maybeInvokeDelegate(e, r), \"throw\" === r.method) || \"return\" !== n && (r.method = \"throw\", r.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), y; var i = tryCatch(o, e.iterator, r.arg); if (\"throw\" === i.type) return r.method = \"throw\", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, \"return\" !== r.method && (r.method = \"next\", r.arg = t), r.delegate = null, y) : a : (r.method = \"throw\", r.arg = new TypeError(\"iterator result is not an object\"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = \"normal\", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: \"root\" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || \"\" === e) { var r = e[a]; if (r) return r.call(e); if (\"function\" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + \" is not iterable\"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), e.isGeneratorFunction = function (t) { var e = \"function\" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || \"GeneratorFunction\" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, \"GeneratorFunction\")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, \"Generator\"), define(g, a, function () { return this; }), define(g, \"toString\", function () { return \"[object Generator]\"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) \"t\" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if (\"throw\" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = \"throw\", a.arg = e, r.next = n, o && (r.method = \"next\", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if (\"root\" === i.tryLoc) return handle(\"end\"); if (i.tryLoc <= this.prev) { var c = n.call(i, \"catchLoc\"), u = n.call(i, \"finallyLoc\"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error(\"try statement without catch or finally\"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, \"finallyLoc\") && this.prev < o.finallyLoc) { var i = o; break; } } i && (\"break\" === t || \"continue\" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = \"next\", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if (\"throw\" === t.type) throw t.arg; return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, \"catch\": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if (\"throw\" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, \"next\" === this.method && (this.arg = t), y; } }, e; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\n\n\nvar Game = /*#__PURE__*/function () {\n  function Game() {\n    _classCallCheck(this, Game);\n    this.canvas = document.getElementById('gameCanvas');\n    this.ctx = this.canvas.getContext('2d');\n    this.score = 0;\n    this.lastFire = Date.now();\n    this.fireDelay = 500;\n    this.player = null;\n    this.enemies = [];\n    this.lasers = [];\n    this.playerImg = new Image();\n    this.enemyImg = new Image();\n    this.laserImg = new Image();\n    this.lifeImage = new Image();\n    this.assetsLoaded = 0;\n    this.meteors = [];\n    this.meteorImg = new Image();\n    this.enemyLaserImg = new Image();\n    this.gameOver = false;\n    this.loadAssets();\n    this.setupEventListeners();\n  }\n  return _createClass(Game, [{\n    key: \"isColliding\",\n    value: function isColliding(rect1, rect2) {\n      return rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x && rect1.y < rect2.y + rect2.height && rect1.y + rect1.height > rect2.y;\n    }\n  }, {\n    key: \"setupEventListeners\",\n    value: function setupEventListeners() {\n      var _this = this;\n      window.addEventListener('keydown', function (e) {\n        switch (e.key) {\n          case 'w':\n            _this.player.dy = -2;\n            break;\n          case 'a':\n            _this.player.dx = -2;\n            break;\n          case 's':\n            _this.player.dy = 2;\n            break;\n          case 'd':\n            _this.player.dx = 2;\n            break;\n          case ' ':\n            console.log('space');\n            if (Date.now() - _this.lastFire > _this.fireDelay) {\n              _this.lasers.push(new _Laser_js__WEBPACK_IMPORTED_MODULE_2__.Laser(_this.player.x + _this.player.width / 2, _this.player.y, 5, 10, _this.laserImg));\n              _this.lastFire = Date.now();\n            }\n            break;\n        }\n      });\n      window.addEventListener('keyup', function (e) {\n        switch (e.key) {\n          case 'w':\n          case 's':\n            _this.player.dy = 0;\n            break;\n          case 'a':\n          case 'd':\n            _this.player.dx = 0;\n            break;\n        }\n      });\n    }\n  }, {\n    key: \"loadAssets\",\n    value: function () {\n      var _loadAssets = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {\n        var _this2 = this;\n        return _regeneratorRuntime().wrap(function _callee$(_context) {\n          while (1) switch (_context.prev = _context.next) {\n            case 0:\n              this.playerImg.onload = this.lifeImage.onload = this.meteorImg.onload = this.enemyLaserImg.onload = this.enemyImg.onload = this.laserImg.onload = function () {\n                _this2.assetsLoaded++;\n                if (_this2.assetsLoaded === 6) {\n                  _this2.player = new _Player_js__WEBPACK_IMPORTED_MODULE_0__.Player(_this2.canvas.width / 2, _this2.canvas.height - 50, 50, 50, _this2.playerImg);\n                  _this2.enemies = [new _Enemy_js__WEBPACK_IMPORTED_MODULE_1__.Enemy(200, 50, 50, 50, _this2.enemyImg, _this2.enemyLaserImg), new _Enemy_js__WEBPACK_IMPORTED_MODULE_1__.Enemy(375, 50, 50, 50, _this2.enemyImg, _this2.enemyLaserImg), new _Enemy_js__WEBPACK_IMPORTED_MODULE_1__.Enemy(550, 50, 50, 50, _this2.enemyImg, _this2.enemyLaserImg)];\n                  _this2.meteors = [new _Meteor_js__WEBPACK_IMPORTED_MODULE_3__.Meteor(100, 0, 50, 50, _this2.meteorImg), new _Meteor_js__WEBPACK_IMPORTED_MODULE_3__.Meteor(300, 0, 50, 50, _this2.meteorImg), new _Meteor_js__WEBPACK_IMPORTED_MODULE_3__.Meteor(500, 0, 50, 50, _this2.meteorImg)];\n                  console.log('assets loaded');\n                  _this2.gameLoop();\n                }\n              };\n              this.meteorImg.src = 'assets/meteor.png';\n              this.playerImg.src = 'assets/player.png';\n              this.enemyImg.src = 'assets/enemy.png';\n              this.laserImg.src = 'assets/laser.png';\n              this.enemyLaserImg.src = 'assets/laser-green.png';\n              this.lifeImage.src = 'assets/life.png';\n            case 7:\n            case \"end\":\n              return _context.stop();\n          }\n        }, _callee, this);\n      }));\n      function loadAssets() {\n        return _loadAssets.apply(this, arguments);\n      }\n      return loadAssets;\n    }()\n  }, {\n    key: \"drawEnemies\",\n    value: function drawEnemies() {\n      var _this3 = this;\n      for (var i = 0; i < this.enemies.length; i++) {\n        this.enemies[i].draw(this.ctx);\n\n        // Draw and update enemy lasers\n        for (var j = 0; j < this.enemies[i].lasers.length; j++) {\n          this.enemies[i].lasers[j].y += 5;\n          this.enemies[i].lasers[j].draw(this.ctx);\n\n          // Remove laser if it's off the screen\n          if (this.enemies[i].lasers[j].y > this.canvas.height) {\n            this.enemies[i].lasers.splice(j, 1);\n            j--;\n          }\n\n          // Check for collision with player\n          else if (this.isColliding(this.enemies[i].lasers[j], this.player)) {\n            this.player.lives--;\n\n            // reposition player to starting position\n            this.player.x = this.canvas.width / 2;\n            this.player.y = this.canvas.height - 50;\n            this.enemies[i].lasers.splice(j, 1);\n            j--;\n            if (this.player.lives === 0) {\n              // End game if player has no lives left\n              this.gameOver = true;\n              this.ctx.fillStyle = 'white';\n              this.ctx.font = '48px sans-serif';\n              this.ctx.fillText('Game Over', this.canvas.width / 2, this.canvas.height / 2);\n              this.canvas.addEventListener('click', function () {\n                _this3.resetGame();\n                _this3.gameOver = false;\n                window.requestAnimationFrame(function () {\n                  return _this3.gameLoop();\n                });\n              }, {\n                once: true\n              });\n              return; // Stop the game loop\n            }\n          }\n        }\n        if (this.isColliding(this.player, this.enemies[i])) {\n          this.ctx.fillStyle = 'white';\n          this.ctx.font = '48px sans-serif';\n          this.ctx.fillText('Game Over', this.canvas.width / 2, this.canvas.height / 2);\n          this.gameOver = true;\n          this.canvas.addEventListener('click', function () {\n            _this3.resetGame();\n            _this3.gameOver = false;\n            window.requestAnimationFrame(function () {\n              return _this3.gameLoop();\n            });\n          }, {\n            once: true\n          });\n          return;\n        }\n        for (var _j = 0; _j < this.lasers.length; _j++) {\n          if (this.isColliding(this.lasers[_j], this.enemies[i])) {\n            this.enemies.splice(i, 1);\n            this.lasers.splice(_j, 1);\n            this.score += 50;\n            break;\n          }\n        }\n      }\n    }\n  }, {\n    key: \"drawLasers\",\n    value: function drawLasers() {\n      for (var i = 0; i < this.lasers.length; i++) {\n        this.lasers[i].y -= 5;\n        this.lasers[i].draw(this.ctx);\n        if (this.lasers[i].y < 0) {\n          this.lasers.splice(i, 1);\n          i--;\n        }\n      }\n    }\n  }, {\n    key: \"checkNoMoreEnemies\",\n    value: function checkNoMoreEnemies() {\n      var _this4 = this;\n      if (this.enemies.length === 0) {\n        this.ctx.fillStyle = 'white';\n        this.ctx.font = '48px sans-serif';\n        this.ctx.fillText('You Won', this.canvas.width / 2, this.canvas.height / 2);\n        this.gameOver = true;\n        this.canvas.addEventListener('click', function () {\n          _this4.resetGame();\n          _this4.gameOver = false;\n          window.requestAnimationFrame(function () {\n            return _this4.gameLoop();\n          });\n        }, {\n          once: true\n        });\n        return;\n      }\n    }\n  }, {\n    key: \"drawMeteors\",\n    value: function drawMeteors() {\n      var _this5 = this;\n      for (var i = 0; i < this.meteors.length; i++) {\n        this.meteors[i].x += this.meteors[i].dx;\n        this.meteors[i].y += this.meteors[i].dy;\n        this.meteors[i].draw(this.ctx);\n\n        // If the meteor goes off the screen, reset its position and speed\n        if (this.meteors[i].x < 0 || this.meteors[i].x > this.canvas.width || this.meteors[i].y < 0 || this.meteors[i].y > this.canvas.height) {\n          this.meteors[i] = new _Meteor_js__WEBPACK_IMPORTED_MODULE_3__.Meteor(Math.random() * this.canvas.width, 0, 50, 50, this.meteorImg);\n        }\n        if (this.isColliding(this.player, this.meteors[i])) {\n          this.ctx.fillStyle = 'white';\n          this.ctx.font = '48px sans-serif';\n          this.ctx.fillText('Game Over', this.canvas.width / 2, this.canvas.height / 2);\n          this.gameOver = true;\n          this.canvas.addEventListener('click', function () {\n            _this5.resetGame();\n            _this5.gameOver = false;\n            window.requestAnimationFrame(function () {\n              return _this5.gameLoop();\n            });\n          }, {\n            once: true\n          });\n          return;\n        }\n        for (var j = 0; j < this.lasers.length; j++) {\n          if (this.isColliding(this.lasers[j], this.meteors[i])) {\n            this.meteors.splice(i, 1);\n            this.lasers.splice(j, 1);\n            this.score += 20;\n            break;\n          }\n        }\n      }\n    }\n  }, {\n    key: \"gameLoop\",\n    value: function gameLoop() {\n      var _this6 = this;\n      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n      this.ctx.fillStyle = 'white';\n      this.ctx.font = '24px sans-serif';\n      this.ctx.fillText('Score: ' + this.score, this.canvas.width - 150, 30);\n      for (var i = 0; i < this.player.lives; i++) {\n        this.ctx.drawImage(this.lifeImage, this.canvas.width - 150 + i * this.lifeImage.width, 30);\n      }\n      this.player.x += this.player.dx;\n      this.player.y += this.player.dy;\n      this.player.draw(this.ctx);\n      this.drawLasers();\n      this.drawEnemies();\n      this.checkNoMoreEnemies();\n      this.checkNoMoreEnemies();\n      if (this.meteors.length < 2) {\n        this.meteors.push(new _Meteor_js__WEBPACK_IMPORTED_MODULE_3__.Meteor(Math.random() * this.canvas.width, 0, 50, 50, this.meteorImg));\n      }\n      this.drawMeteors();\n      if (!this.gameOver) {\n        requestAnimationFrame(function () {\n          return _this6.gameLoop();\n        });\n      }\n    }\n  }, {\n    key: \"resetGame\",\n    value: function resetGame() {\n      console.log('resetting game');\n      this.player.x = this.canvas.width / 2;\n      this.player.y = this.canvas.height - 50;\n      this.player.dx = 0;\n      this.player.dy = 0;\n      this.player.lives = 3;\n      this.score = 0;\n      this.enemies = [new _Enemy_js__WEBPACK_IMPORTED_MODULE_1__.Enemy(200, 50, 50, 50, this.enemyImg, this.enemyLaserImg), new _Enemy_js__WEBPACK_IMPORTED_MODULE_1__.Enemy(375, 50, 50, 50, this.enemyImg, this.enemyLaserImg), new _Enemy_js__WEBPACK_IMPORTED_MODULE_1__.Enemy(550, 50, 50, 50, this.enemyImg, this.enemyLaserImg)];\n      this.meteors = [new _Meteor_js__WEBPACK_IMPORTED_MODULE_3__.Meteor(100, 0, 50, 50, this.meteorImg), new _Meteor_js__WEBPACK_IMPORTED_MODULE_3__.Meteor(300, 0, 50, 50, this.meteorImg), new _Meteor_js__WEBPACK_IMPORTED_MODULE_3__.Meteor(500, 0, 50, 50, this.meteorImg)];\n    }\n  }]);\n}();\n\n//# sourceURL=webpack://space-game/./src/Game.js?");

/***/ }),

/***/ "./src/Laser.js":
/*!**********************!*\
  !*** ./src/Laser.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Laser: () => (/* binding */ Laser)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Laser = /*#__PURE__*/function () {\n  function Laser(x, y, width, height, image) {\n    var type = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : \"friendly\";\n    _classCallCheck(this, Laser);\n    this.x = x;\n    this.y = y;\n    this.width = width;\n    this.height = height;\n    this.image = image;\n    this.type = type;\n  }\n  return _createClass(Laser, [{\n    key: \"draw\",\n    value: function draw(ctx) {\n      if (this.image) {\n        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);\n      } else {\n        console.log('No image found for laser', this.type);\n      }\n    }\n  }]);\n}();\n\n//# sourceURL=webpack://space-game/./src/Laser.js?");

/***/ }),

/***/ "./src/Meteor.js":
/*!***********************!*\
  !*** ./src/Meteor.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Meteor: () => (/* binding */ Meteor)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Meteor = /*#__PURE__*/function () {\n  function Meteor(x, y, width, height, image) {\n    _classCallCheck(this, Meteor);\n    this.x = x;\n    this.y = y;\n    this.width = width;\n    this.height = height;\n    this.image = image;\n    this.dx = Math.random() * 4 - 2; // Speed in x direction, random between -2 and 2\n    this.dy = Math.random() * 3 + 1; // Speed in y direction, random between 1 and 4\n  }\n  return _createClass(Meteor, [{\n    key: \"draw\",\n    value: function draw(ctx) {\n      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);\n    }\n  }]);\n}();\n\n//# sourceURL=webpack://space-game/./src/Meteor.js?");

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Player = /*#__PURE__*/function () {\n  function Player(x, y, width, height, image) {\n    _classCallCheck(this, Player);\n    this.x = x;\n    this.y = y;\n    this.width = width;\n    this.height = height;\n    this.image = image;\n    this.dx = 0;\n    this.dy = 0;\n    this.lives = 3;\n  }\n  return _createClass(Player, [{\n    key: \"loseLife\",\n    value: function loseLife() {\n      this.lives--;\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(ctx) {\n      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);\n    }\n  }]);\n}();\n\n//# sourceURL=webpack://space-game/./src/Player.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game.js */ \"./src/Game.js\");\n\nvar game = new _Game_js__WEBPACK_IMPORTED_MODULE_0__.Game();\n\n//# sourceURL=webpack://space-game/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;