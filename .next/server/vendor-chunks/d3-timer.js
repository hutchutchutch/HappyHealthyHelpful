"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/d3-timer";
exports.ids = ["vendor-chunks/d3-timer"];
exports.modules = {

/***/ "(ssr)/./node_modules/d3-timer/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-timer/src/index.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   interval: () => (/* reexport safe */ _interval_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   now: () => (/* reexport safe */ _timer_js__WEBPACK_IMPORTED_MODULE_0__.now),\n/* harmony export */   timeout: () => (/* reexport safe */ _timeout_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   timer: () => (/* reexport safe */ _timer_js__WEBPACK_IMPORTED_MODULE_0__.timer),\n/* harmony export */   timerFlush: () => (/* reexport safe */ _timer_js__WEBPACK_IMPORTED_MODULE_0__.timerFlush)\n/* harmony export */ });\n/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ \"(ssr)/./node_modules/d3-timer/src/timer.js\");\n/* harmony import */ var _timeout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeout.js */ \"(ssr)/./node_modules/d3-timer/src/timeout.js\");\n/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interval.js */ \"(ssr)/./node_modules/d3-timer/src/interval.js\");\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZDMtdGltZXIvc3JjL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBSW9CO0FBSUU7QUFJQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Z1bGxzdGFjay1hcHAvLi9ub2RlX21vZHVsZXMvZDMtdGltZXIvc3JjL2luZGV4LmpzPzhkZmEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHtcbiAgbm93LFxuICB0aW1lcixcbiAgdGltZXJGbHVzaFxufSBmcm9tIFwiLi90aW1lci5qc1wiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHRpbWVvdXRcbn0gZnJvbSBcIi4vdGltZW91dC5qc1wiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIGludGVydmFsXG59IGZyb20gXCIuL2ludGVydmFsLmpzXCI7XG4iXSwibmFtZXMiOlsibm93IiwidGltZXIiLCJ0aW1lckZsdXNoIiwiZGVmYXVsdCIsInRpbWVvdXQiLCJpbnRlcnZhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/d3-timer/src/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/d3-timer/src/interval.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-timer/src/interval.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ \"(ssr)/./node_modules/d3-timer/src/timer.js\");\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback, delay, time) {\n    var t = new _timer_js__WEBPACK_IMPORTED_MODULE_0__.Timer, total = delay;\n    if (delay == null) return t.restart(callback, delay, time), t;\n    t._restart = t.restart;\n    t.restart = function(callback, delay, time) {\n        delay = +delay, time = time == null ? (0,_timer_js__WEBPACK_IMPORTED_MODULE_0__.now)() : +time;\n        t._restart(function tick(elapsed) {\n            elapsed += total;\n            t._restart(tick, total += delay, time);\n            callback(elapsed);\n        }, delay, time);\n    };\n    t.restart(callback, delay, time);\n    return t;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZDMtdGltZXIvc3JjL2ludGVydmFsLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXNDO0FBRXRDLDZCQUFlLG9DQUFTRSxRQUFRLEVBQUVDLEtBQUssRUFBRUMsSUFBSTtJQUMzQyxJQUFJQyxJQUFJLElBQUlMLDRDQUFLQSxFQUFFTSxRQUFRSDtJQUMzQixJQUFJQSxTQUFTLE1BQU0sT0FBT0UsRUFBRUUsT0FBTyxDQUFDTCxVQUFVQyxPQUFPQyxPQUFPQztJQUM1REEsRUFBRUcsUUFBUSxHQUFHSCxFQUFFRSxPQUFPO0lBQ3RCRixFQUFFRSxPQUFPLEdBQUcsU0FBU0wsUUFBUSxFQUFFQyxLQUFLLEVBQUVDLElBQUk7UUFDeENELFFBQVEsQ0FBQ0EsT0FBT0MsT0FBT0EsUUFBUSxPQUFPSCw4Q0FBR0EsS0FBSyxDQUFDRztRQUMvQ0MsRUFBRUcsUUFBUSxDQUFDLFNBQVNDLEtBQUtDLE9BQU87WUFDOUJBLFdBQVdKO1lBQ1hELEVBQUVHLFFBQVEsQ0FBQ0MsTUFBTUgsU0FBU0gsT0FBT0M7WUFDakNGLFNBQVNRO1FBQ1gsR0FBR1AsT0FBT0M7SUFDWjtJQUNBQyxFQUFFRSxPQUFPLENBQUNMLFVBQVVDLE9BQU9DO0lBQzNCLE9BQU9DO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdWxsc3RhY2stYXBwLy4vbm9kZV9tb2R1bGVzL2QzLXRpbWVyL3NyYy9pbnRlcnZhbC5qcz82YjhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VGltZXIsIG5vd30gZnJvbSBcIi4vdGltZXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY2FsbGJhY2ssIGRlbGF5LCB0aW1lKSB7XG4gIHZhciB0ID0gbmV3IFRpbWVyLCB0b3RhbCA9IGRlbGF5O1xuICBpZiAoZGVsYXkgPT0gbnVsbCkgcmV0dXJuIHQucmVzdGFydChjYWxsYmFjaywgZGVsYXksIHRpbWUpLCB0O1xuICB0Ll9yZXN0YXJ0ID0gdC5yZXN0YXJ0O1xuICB0LnJlc3RhcnQgPSBmdW5jdGlvbihjYWxsYmFjaywgZGVsYXksIHRpbWUpIHtcbiAgICBkZWxheSA9ICtkZWxheSwgdGltZSA9IHRpbWUgPT0gbnVsbCA/IG5vdygpIDogK3RpbWU7XG4gICAgdC5fcmVzdGFydChmdW5jdGlvbiB0aWNrKGVsYXBzZWQpIHtcbiAgICAgIGVsYXBzZWQgKz0gdG90YWw7XG4gICAgICB0Ll9yZXN0YXJ0KHRpY2ssIHRvdGFsICs9IGRlbGF5LCB0aW1lKTtcbiAgICAgIGNhbGxiYWNrKGVsYXBzZWQpO1xuICAgIH0sIGRlbGF5LCB0aW1lKTtcbiAgfVxuICB0LnJlc3RhcnQoY2FsbGJhY2ssIGRlbGF5LCB0aW1lKTtcbiAgcmV0dXJuIHQ7XG59XG4iXSwibmFtZXMiOlsiVGltZXIiLCJub3ciLCJjYWxsYmFjayIsImRlbGF5IiwidGltZSIsInQiLCJ0b3RhbCIsInJlc3RhcnQiLCJfcmVzdGFydCIsInRpY2siLCJlbGFwc2VkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/d3-timer/src/interval.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/d3-timer/src/timeout.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-timer/src/timeout.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ \"(ssr)/./node_modules/d3-timer/src/timer.js\");\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback, delay, time) {\n    var t = new _timer_js__WEBPACK_IMPORTED_MODULE_0__.Timer;\n    delay = delay == null ? 0 : +delay;\n    t.restart((elapsed)=>{\n        t.stop();\n        callback(elapsed + delay);\n    }, delay, time);\n    return t;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZDMtdGltZXIvc3JjL3RpbWVvdXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBaUM7QUFFakMsNkJBQWUsb0NBQVNDLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxJQUFJO0lBQzNDLElBQUlDLElBQUksSUFBSUosNENBQUtBO0lBQ2pCRSxRQUFRQSxTQUFTLE9BQU8sSUFBSSxDQUFDQTtJQUM3QkUsRUFBRUMsT0FBTyxDQUFDQyxDQUFBQTtRQUNSRixFQUFFRyxJQUFJO1FBQ05OLFNBQVNLLFVBQVVKO0lBQ3JCLEdBQUdBLE9BQU9DO0lBQ1YsT0FBT0M7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL2Z1bGxzdGFjay1hcHAvLi9ub2RlX21vZHVsZXMvZDMtdGltZXIvc3JjL3RpbWVvdXQuanM/YmQxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RpbWVyfSBmcm9tIFwiLi90aW1lci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjYWxsYmFjaywgZGVsYXksIHRpbWUpIHtcbiAgdmFyIHQgPSBuZXcgVGltZXI7XG4gIGRlbGF5ID0gZGVsYXkgPT0gbnVsbCA/IDAgOiArZGVsYXk7XG4gIHQucmVzdGFydChlbGFwc2VkID0+IHtcbiAgICB0LnN0b3AoKTtcbiAgICBjYWxsYmFjayhlbGFwc2VkICsgZGVsYXkpO1xuICB9LCBkZWxheSwgdGltZSk7XG4gIHJldHVybiB0O1xufVxuIl0sIm5hbWVzIjpbIlRpbWVyIiwiY2FsbGJhY2siLCJkZWxheSIsInRpbWUiLCJ0IiwicmVzdGFydCIsImVsYXBzZWQiLCJzdG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/d3-timer/src/timeout.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/d3-timer/src/timer.js":
/*!********************************************!*\
  !*** ./node_modules/d3-timer/src/timer.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Timer: () => (/* binding */ Timer),\n/* harmony export */   now: () => (/* binding */ now),\n/* harmony export */   timer: () => (/* binding */ timer),\n/* harmony export */   timerFlush: () => (/* binding */ timerFlush)\n/* harmony export */ });\nvar frame = 0, timeout = 0, interval = 0, pokeDelay = 1000, taskHead, taskTail, clockLast = 0, clockNow = 0, clockSkew = 0, clock = typeof performance === \"object\" && performance.now ? performance : Date, setFrame =  false ? 0 : function(f) {\n    setTimeout(f, 17);\n};\nfunction now() {\n    return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);\n}\nfunction clearNow() {\n    clockNow = 0;\n}\nfunction Timer() {\n    this._call = this._time = this._next = null;\n}\nTimer.prototype = timer.prototype = {\n    constructor: Timer,\n    restart: function(callback, delay, time) {\n        if (typeof callback !== \"function\") throw new TypeError(\"callback is not a function\");\n        time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);\n        if (!this._next && taskTail !== this) {\n            if (taskTail) taskTail._next = this;\n            else taskHead = this;\n            taskTail = this;\n        }\n        this._call = callback;\n        this._time = time;\n        sleep();\n    },\n    stop: function() {\n        if (this._call) {\n            this._call = null;\n            this._time = Infinity;\n            sleep();\n        }\n    }\n};\nfunction timer(callback, delay, time) {\n    var t = new Timer;\n    t.restart(callback, delay, time);\n    return t;\n}\nfunction timerFlush() {\n    now(); // Get the current time, if not already set.\n    ++frame; // Pretend we’ve set an alarm, if we haven’t already.\n    var t = taskHead, e;\n    while(t){\n        if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);\n        t = t._next;\n    }\n    --frame;\n}\nfunction wake() {\n    clockNow = (clockLast = clock.now()) + clockSkew;\n    frame = timeout = 0;\n    try {\n        timerFlush();\n    } finally{\n        frame = 0;\n        nap();\n        clockNow = 0;\n    }\n}\nfunction poke() {\n    var now = clock.now(), delay = now - clockLast;\n    if (delay > pokeDelay) clockSkew -= delay, clockLast = now;\n}\nfunction nap() {\n    var t0, t1 = taskHead, t2, time = Infinity;\n    while(t1){\n        if (t1._call) {\n            if (time > t1._time) time = t1._time;\n            t0 = t1, t1 = t1._next;\n        } else {\n            t2 = t1._next, t1._next = null;\n            t1 = t0 ? t0._next = t2 : taskHead = t2;\n        }\n    }\n    taskTail = t0;\n    sleep(time);\n}\nfunction sleep(time) {\n    if (frame) return; // Soonest alarm already set, or will be.\n    if (timeout) timeout = clearTimeout(timeout);\n    var delay = time - clockNow; // Strictly less than if we recomputed clockNow.\n    if (delay > 24) {\n        if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);\n        if (interval) interval = clearInterval(interval);\n    } else {\n        if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);\n        frame = 1, setFrame(wake);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZDMtdGltZXIvc3JjL3RpbWVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLEdBQ1JDLFVBQVUsR0FDVkMsV0FBVyxHQUNYQyxZQUFZLE1BQ1pDLFVBQ0FDLFVBQ0FDLFlBQVksR0FDWkMsV0FBVyxHQUNYQyxZQUFZLEdBQ1pDLFFBQVEsT0FBT0MsZ0JBQWdCLFlBQVlBLFlBQVlDLEdBQUcsR0FBR0QsY0FBY0UsTUFDM0VDLFdBQVcsTUFBMEQsR0FBR0MsQ0FBeUNBLEdBQUcsU0FBU0csQ0FBQztJQUFJQyxXQUFXRCxHQUFHO0FBQUs7QUFFbEosU0FBU047SUFDZCxPQUFPSixZQUFhTSxDQUFBQSxTQUFTTSxXQUFXWixXQUFXRSxNQUFNRSxHQUFHLEtBQUtILFNBQVE7QUFDM0U7QUFFQSxTQUFTVztJQUNQWixXQUFXO0FBQ2I7QUFFTyxTQUFTYTtJQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUNWLElBQUksQ0FBQ0MsS0FBSyxHQUNWLElBQUksQ0FBQ0MsS0FBSyxHQUFHO0FBQ2Y7QUFFQUgsTUFBTUksU0FBUyxHQUFHQyxNQUFNRCxTQUFTLEdBQUc7SUFDbENFLGFBQWFOO0lBQ2JPLFNBQVMsU0FBU0MsUUFBUSxFQUFFQyxLQUFLLEVBQUVDLElBQUk7UUFDckMsSUFBSSxPQUFPRixhQUFhLFlBQVksTUFBTSxJQUFJRyxVQUFVO1FBQ3hERCxPQUFPLENBQUNBLFFBQVEsT0FBT25CLFFBQVEsQ0FBQ21CLElBQUcsSUFBTUQsQ0FBQUEsU0FBUyxPQUFPLElBQUksQ0FBQ0EsS0FBSTtRQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDTixLQUFLLElBQUlsQixhQUFhLElBQUksRUFBRTtZQUNwQyxJQUFJQSxVQUFVQSxTQUFTa0IsS0FBSyxHQUFHLElBQUk7aUJBQzlCbkIsV0FBVyxJQUFJO1lBQ3BCQyxXQUFXLElBQUk7UUFDakI7UUFDQSxJQUFJLENBQUNnQixLQUFLLEdBQUdPO1FBQ2IsSUFBSSxDQUFDTixLQUFLLEdBQUdRO1FBQ2JFO0lBQ0Y7SUFDQUMsTUFBTTtRQUNKLElBQUksSUFBSSxDQUFDWixLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUNBLEtBQUssR0FBRztZQUNiLElBQUksQ0FBQ0MsS0FBSyxHQUFHWTtZQUNiRjtRQUNGO0lBQ0Y7QUFDRjtBQUVPLFNBQVNQLE1BQU1HLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxJQUFJO0lBQ3pDLElBQUlLLElBQUksSUFBSWY7SUFDWmUsRUFBRVIsT0FBTyxDQUFDQyxVQUFVQyxPQUFPQztJQUMzQixPQUFPSztBQUNUO0FBRU8sU0FBU0M7SUFDZHpCLE9BQU8sNENBQTRDO0lBQ25ELEVBQUVYLE9BQU8scURBQXFEO0lBQzlELElBQUltQyxJQUFJL0IsVUFBVWlDO0lBQ2xCLE1BQU9GLEVBQUc7UUFDUixJQUFJLENBQUNFLElBQUk5QixXQUFXNEIsRUFBRWIsS0FBSyxLQUFLLEdBQUdhLEVBQUVkLEtBQUssQ0FBQ2lCLElBQUksQ0FBQ0MsV0FBV0Y7UUFDM0RGLElBQUlBLEVBQUVaLEtBQUs7SUFDYjtJQUNBLEVBQUV2QjtBQUNKO0FBRUEsU0FBU3dDO0lBQ1BqQyxXQUFXLENBQUNELFlBQVlHLE1BQU1FLEdBQUcsRUFBQyxJQUFLSDtJQUN2Q1IsUUFBUUMsVUFBVTtJQUNsQixJQUFJO1FBQ0ZtQztJQUNGLFNBQVU7UUFDUnBDLFFBQVE7UUFDUnlDO1FBQ0FsQyxXQUFXO0lBQ2I7QUFDRjtBQUVBLFNBQVNtQztJQUNQLElBQUkvQixNQUFNRixNQUFNRSxHQUFHLElBQUlrQixRQUFRbEIsTUFBTUw7SUFDckMsSUFBSXVCLFFBQVExQixXQUFXSyxhQUFhcUIsT0FBT3ZCLFlBQVlLO0FBQ3pEO0FBRUEsU0FBUzhCO0lBQ1AsSUFBSUUsSUFBSUMsS0FBS3hDLFVBQVV5QyxJQUFJZixPQUFPSTtJQUNsQyxNQUFPVSxHQUFJO1FBQ1QsSUFBSUEsR0FBR3ZCLEtBQUssRUFBRTtZQUNaLElBQUlTLE9BQU9jLEdBQUd0QixLQUFLLEVBQUVRLE9BQU9jLEdBQUd0QixLQUFLO1lBQ3BDcUIsS0FBS0MsSUFBSUEsS0FBS0EsR0FBR3JCLEtBQUs7UUFDeEIsT0FBTztZQUNMc0IsS0FBS0QsR0FBR3JCLEtBQUssRUFBRXFCLEdBQUdyQixLQUFLLEdBQUc7WUFDMUJxQixLQUFLRCxLQUFLQSxHQUFHcEIsS0FBSyxHQUFHc0IsS0FBS3pDLFdBQVd5QztRQUN2QztJQUNGO0lBQ0F4QyxXQUFXc0M7SUFDWFgsTUFBTUY7QUFDUjtBQUVBLFNBQVNFLE1BQU1GLElBQUk7SUFDakIsSUFBSTlCLE9BQU8sUUFBUSx5Q0FBeUM7SUFDNUQsSUFBSUMsU0FBU0EsVUFBVTZDLGFBQWE3QztJQUNwQyxJQUFJNEIsUUFBUUMsT0FBT3ZCLFVBQVUsZ0RBQWdEO0lBQzdFLElBQUlzQixRQUFRLElBQUk7UUFDZCxJQUFJQyxPQUFPSSxVQUFVakMsVUFBVWlCLFdBQVdzQixNQUFNVixPQUFPckIsTUFBTUUsR0FBRyxLQUFLSDtRQUNyRSxJQUFJTixVQUFVQSxXQUFXNkMsY0FBYzdDO0lBQ3pDLE9BQU87UUFDTCxJQUFJLENBQUNBLFVBQVVJLFlBQVlHLE1BQU1FLEdBQUcsSUFBSVQsV0FBVzhDLFlBQVlOLE1BQU12QztRQUNyRUgsUUFBUSxHQUFHYSxTQUFTMkI7SUFDdEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Z1bGxzdGFjay1hcHAvLi9ub2RlX21vZHVsZXMvZDMtdGltZXIvc3JjL3RpbWVyLmpzP2UxMjQiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGZyYW1lID0gMCwgLy8gaXMgYW4gYW5pbWF0aW9uIGZyYW1lIHBlbmRpbmc/XG4gICAgdGltZW91dCA9IDAsIC8vIGlzIGEgdGltZW91dCBwZW5kaW5nP1xuICAgIGludGVydmFsID0gMCwgLy8gYXJlIGFueSB0aW1lcnMgYWN0aXZlP1xuICAgIHBva2VEZWxheSA9IDEwMDAsIC8vIGhvdyBmcmVxdWVudGx5IHdlIGNoZWNrIGZvciBjbG9jayBza2V3XG4gICAgdGFza0hlYWQsXG4gICAgdGFza1RhaWwsXG4gICAgY2xvY2tMYXN0ID0gMCxcbiAgICBjbG9ja05vdyA9IDAsXG4gICAgY2xvY2tTa2V3ID0gMCxcbiAgICBjbG9jayA9IHR5cGVvZiBwZXJmb3JtYW5jZSA9PT0gXCJvYmplY3RcIiAmJiBwZXJmb3JtYW5jZS5ub3cgPyBwZXJmb3JtYW5jZSA6IERhdGUsXG4gICAgc2V0RnJhbWUgPSB0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPyB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmJpbmQod2luZG93KSA6IGZ1bmN0aW9uKGYpIHsgc2V0VGltZW91dChmLCAxNyk7IH07XG5cbmV4cG9ydCBmdW5jdGlvbiBub3coKSB7XG4gIHJldHVybiBjbG9ja05vdyB8fCAoc2V0RnJhbWUoY2xlYXJOb3cpLCBjbG9ja05vdyA9IGNsb2NrLm5vdygpICsgY2xvY2tTa2V3KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJOb3coKSB7XG4gIGNsb2NrTm93ID0gMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRpbWVyKCkge1xuICB0aGlzLl9jYWxsID1cbiAgdGhpcy5fdGltZSA9XG4gIHRoaXMuX25leHQgPSBudWxsO1xufVxuXG5UaW1lci5wcm90b3R5cGUgPSB0aW1lci5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBUaW1lcixcbiAgcmVzdGFydDogZnVuY3Rpb24oY2FsbGJhY2ssIGRlbGF5LCB0aW1lKSB7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiY2FsbGJhY2sgaXMgbm90IGEgZnVuY3Rpb25cIik7XG4gICAgdGltZSA9ICh0aW1lID09IG51bGwgPyBub3coKSA6ICt0aW1lKSArIChkZWxheSA9PSBudWxsID8gMCA6ICtkZWxheSk7XG4gICAgaWYgKCF0aGlzLl9uZXh0ICYmIHRhc2tUYWlsICE9PSB0aGlzKSB7XG4gICAgICBpZiAodGFza1RhaWwpIHRhc2tUYWlsLl9uZXh0ID0gdGhpcztcbiAgICAgIGVsc2UgdGFza0hlYWQgPSB0aGlzO1xuICAgICAgdGFza1RhaWwgPSB0aGlzO1xuICAgIH1cbiAgICB0aGlzLl9jYWxsID0gY2FsbGJhY2s7XG4gICAgdGhpcy5fdGltZSA9IHRpbWU7XG4gICAgc2xlZXAoKTtcbiAgfSxcbiAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2NhbGwpIHtcbiAgICAgIHRoaXMuX2NhbGwgPSBudWxsO1xuICAgICAgdGhpcy5fdGltZSA9IEluZmluaXR5O1xuICAgICAgc2xlZXAoKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1lcihjYWxsYmFjaywgZGVsYXksIHRpbWUpIHtcbiAgdmFyIHQgPSBuZXcgVGltZXI7XG4gIHQucmVzdGFydChjYWxsYmFjaywgZGVsYXksIHRpbWUpO1xuICByZXR1cm4gdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVyRmx1c2goKSB7XG4gIG5vdygpOyAvLyBHZXQgdGhlIGN1cnJlbnQgdGltZSwgaWYgbm90IGFscmVhZHkgc2V0LlxuICArK2ZyYW1lOyAvLyBQcmV0ZW5kIHdl4oCZdmUgc2V0IGFuIGFsYXJtLCBpZiB3ZSBoYXZlbuKAmXQgYWxyZWFkeS5cbiAgdmFyIHQgPSB0YXNrSGVhZCwgZTtcbiAgd2hpbGUgKHQpIHtcbiAgICBpZiAoKGUgPSBjbG9ja05vdyAtIHQuX3RpbWUpID49IDApIHQuX2NhbGwuY2FsbCh1bmRlZmluZWQsIGUpO1xuICAgIHQgPSB0Ll9uZXh0O1xuICB9XG4gIC0tZnJhbWU7XG59XG5cbmZ1bmN0aW9uIHdha2UoKSB7XG4gIGNsb2NrTm93ID0gKGNsb2NrTGFzdCA9IGNsb2NrLm5vdygpKSArIGNsb2NrU2tldztcbiAgZnJhbWUgPSB0aW1lb3V0ID0gMDtcbiAgdHJ5IHtcbiAgICB0aW1lckZsdXNoKCk7XG4gIH0gZmluYWxseSB7XG4gICAgZnJhbWUgPSAwO1xuICAgIG5hcCgpO1xuICAgIGNsb2NrTm93ID0gMDtcbiAgfVxufVxuXG5mdW5jdGlvbiBwb2tlKCkge1xuICB2YXIgbm93ID0gY2xvY2subm93KCksIGRlbGF5ID0gbm93IC0gY2xvY2tMYXN0O1xuICBpZiAoZGVsYXkgPiBwb2tlRGVsYXkpIGNsb2NrU2tldyAtPSBkZWxheSwgY2xvY2tMYXN0ID0gbm93O1xufVxuXG5mdW5jdGlvbiBuYXAoKSB7XG4gIHZhciB0MCwgdDEgPSB0YXNrSGVhZCwgdDIsIHRpbWUgPSBJbmZpbml0eTtcbiAgd2hpbGUgKHQxKSB7XG4gICAgaWYgKHQxLl9jYWxsKSB7XG4gICAgICBpZiAodGltZSA+IHQxLl90aW1lKSB0aW1lID0gdDEuX3RpbWU7XG4gICAgICB0MCA9IHQxLCB0MSA9IHQxLl9uZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0MiA9IHQxLl9uZXh0LCB0MS5fbmV4dCA9IG51bGw7XG4gICAgICB0MSA9IHQwID8gdDAuX25leHQgPSB0MiA6IHRhc2tIZWFkID0gdDI7XG4gICAgfVxuICB9XG4gIHRhc2tUYWlsID0gdDA7XG4gIHNsZWVwKHRpbWUpO1xufVxuXG5mdW5jdGlvbiBzbGVlcCh0aW1lKSB7XG4gIGlmIChmcmFtZSkgcmV0dXJuOyAvLyBTb29uZXN0IGFsYXJtIGFscmVhZHkgc2V0LCBvciB3aWxsIGJlLlxuICBpZiAodGltZW91dCkgdGltZW91dCA9IGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgdmFyIGRlbGF5ID0gdGltZSAtIGNsb2NrTm93OyAvLyBTdHJpY3RseSBsZXNzIHRoYW4gaWYgd2UgcmVjb21wdXRlZCBjbG9ja05vdy5cbiAgaWYgKGRlbGF5ID4gMjQpIHtcbiAgICBpZiAodGltZSA8IEluZmluaXR5KSB0aW1lb3V0ID0gc2V0VGltZW91dCh3YWtlLCB0aW1lIC0gY2xvY2subm93KCkgLSBjbG9ja1NrZXcpO1xuICAgIGlmIChpbnRlcnZhbCkgaW50ZXJ2YWwgPSBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWludGVydmFsKSBjbG9ja0xhc3QgPSBjbG9jay5ub3coKSwgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChwb2tlLCBwb2tlRGVsYXkpO1xuICAgIGZyYW1lID0gMSwgc2V0RnJhbWUod2FrZSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJmcmFtZSIsInRpbWVvdXQiLCJpbnRlcnZhbCIsInBva2VEZWxheSIsInRhc2tIZWFkIiwidGFza1RhaWwiLCJjbG9ja0xhc3QiLCJjbG9ja05vdyIsImNsb2NrU2tldyIsImNsb2NrIiwicGVyZm9ybWFuY2UiLCJub3ciLCJEYXRlIiwic2V0RnJhbWUiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwiZiIsInNldFRpbWVvdXQiLCJjbGVhck5vdyIsIlRpbWVyIiwiX2NhbGwiLCJfdGltZSIsIl9uZXh0IiwicHJvdG90eXBlIiwidGltZXIiLCJjb25zdHJ1Y3RvciIsInJlc3RhcnQiLCJjYWxsYmFjayIsImRlbGF5IiwidGltZSIsIlR5cGVFcnJvciIsInNsZWVwIiwic3RvcCIsIkluZmluaXR5IiwidCIsInRpbWVyRmx1c2giLCJlIiwiY2FsbCIsInVuZGVmaW5lZCIsIndha2UiLCJuYXAiLCJwb2tlIiwidDAiLCJ0MSIsInQyIiwiY2xlYXJUaW1lb3V0IiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/d3-timer/src/timer.js\n");

/***/ })

};
;