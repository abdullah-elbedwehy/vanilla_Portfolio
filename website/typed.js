/*!
 *
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.11
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 *
 */
// UMD module definition
(function (root, factory) {
    if (typeof exports === "object" && typeof module === "object") {
        // CommonJS/Node
        module.exports = factory();
    } else if (typeof define === "function" && define.amd) {
        // AMD
        define([], factory);
    } else if (typeof exports === "object") {
        // CommonJS
        exports.Typed = factory();
    } else {
        // Browser global
        root.Typed = factory();
    }
})(this, function () {
    // Webpack module system
    return (function (modules) {
        var installedModules = {};

        function __webpack_require__(moduleId) {
            if (installedModules[moduleId])
                return installedModules[moduleId].exports;

            var module = (installedModules[moduleId] = {
                exports: {},
                id: moduleId,
                loaded: false,
            });

            modules[moduleId].call(
                module.exports,
                module,
                module.exports,
                __webpack_require__
            );
            module.loaded = true;
            return module.exports;
        }

        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.p = "";

        return __webpack_require__(0);
    })([
        /* 0 */
        function (module, exports, __webpack_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true,
            });

            // Class definition helper
            var _createClass = (function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(
                            target,
                            descriptor.key,
                            descriptor
                        );
                    }
                }
                return function (Constructor, protoProps, staticProps) {
                    if (protoProps)
                        defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            })();

            // Import dependencies
            var _initializer = __webpack_require__(1);
            var _htmlParser = __webpack_require__(3);

            // Main Typed class
            var Typed = (function () {
                function Typed(element, options) {
                    _classCallCheck(this, Typed);
                    _initializer.load(this, options, element);
                    this.begin();
                }

                _createClass(Typed, [
                    {
                        key: "toggle",
                        value: function toggle() {
                            if (this.pause.status) {
                                this.start();
                            } else {
                                this.stop();
                            }
                        },
                    },
                    {
                        key: "stop",
                        value: function stop() {
                            if (!this.typingComplete && !this.pause.status) {
                                this.toggleBlinking(true);
                                this.pause.status = true;
                                this.options.onStop(this.arrayPos, this);
                            }
                        },
                    },
                    {
                        key: "start",
                        value: function start() {
                            if (!this.typingComplete && this.pause.status) {
                                this.pause.status = false;
                                if (this.pause.typewrite) {
                                    this.typewrite(
                                        this.pause.curString,
                                        this.pause.curStrPos
                                    );
                                } else {
                                    this.backspace(
                                        this.pause.curString,
                                        this.pause.curStrPos
                                    );
                                }
                                this.options.onStart(this.arrayPos, this);
                            }
                        },
                    },
                    {
                        key: "destroy",
                        value: function destroy() {
                            this.reset(false);
                            this.options.onDestroy(this);
                        },
                    },
                    {
                        key: "reset",
                        value: function reset() {
                            var restart =
                                arguments.length <= 0 ||
                                arguments[0] === undefined
                                    ? true
                                    : arguments[0];

                            clearInterval(this.timeout);
                            this.replaceText("");

                            if (this.cursor && this.cursor.parentNode) {
                                this.cursor.parentNode.removeChild(this.cursor);
                                this.cursor = null;
                            }

                            this.strPos = 0;
                            this.arrayPos = 0;
                            this.curLoop = 0;

                            if (restart) {
                                this.insertCursor();
                                this.options.onReset(this);
                                this.begin();
                            }
                        },
                    },
                    {
                        key: "begin",
                        value: function begin() {
                            var _this = this;

                            this.options.onBegin(this);
                            this.typingComplete = false;
                            this.shuffleStringsIfNeeded(this);
                            this.insertCursor();

                            if (this.bindInputFocusEvents) {
                                this.bindFocusEvents();
                            }

                            this.timeout = setTimeout(function () {
                                if (
                                    _this.currentElContent &&
                                    _this.currentElContent.length !== 0
                                ) {
                                    _this.backspace(
                                        _this.currentElContent,
                                        _this.currentElContent.length
                                    );
                                } else {
                                    _this.typewrite(
                                        _this.strings[
                                            _this.sequence[_this.arrayPos]
                                        ],
                                        _this.strPos
                                    );
                                }
                            }, this.startDelay);
                        },
                    },
                    {
                        key: "typewrite",
                        value: function typewrite(curString, curStrPos) {
                            var _this2 = this;

                            if (
                                this.fadeOut &&
                                this.el.classList.contains(this.fadeOutClass)
                            ) {
                                this.el.classList.remove(this.fadeOutClass);
                                if (this.cursor)
                                    this.cursor.classList.remove(
                                        this.fadeOutClass
                                    );
                            }

                            var humanize = this.humanizer(this.typeSpeed);
                            var numChars = 1;

                            if (this.pause.status === true) {
                                this.setPauseStatus(curString, curStrPos, true);
                                return;
                            }

                            this.timeout = setTimeout(function () {
                                curStrPos = _htmlParser.typeHtmlChars(
                                    curString,
                                    curStrPos,
                                    _this2
                                );

                                var nextString = curString.substr(curStrPos);
                                var skip = 0;

                                if (nextString.charAt(0) === "^") {
                                    if (/^\^\d+/.test(nextString)) {
                                        var match = 1;
                                        nextString = /\d+/.exec(nextString)[0];
                                        match += nextString.length;
                                        skip = parseInt(nextString);
                                        _this2.temporaryPause = true;
                                        _this2.options.onTypingPaused(
                                            _this2.arrayPos,
                                            _this2
                                        );
                                        curString =
                                            curString.substring(0, curStrPos) +
                                            curString.substring(
                                                curStrPos + match
                                            );
                                        _this2.toggleBlinking(true);
                                    }
                                }

                                if (nextString.charAt(0) === "`") {
                                    while (
                                        curString
                                            .substr(curStrPos + numChars)
                                            .charAt(0) !== "`"
                                    ) {
                                        numChars++;
                                        if (
                                            curStrPos + numChars >
                                            curString.length
                                        )
                                            break;
                                    }
                                    var stringBeforeSkip = curString.substring(
                                        0,
                                        curStrPos
                                    );
                                    var stringSkipped = curString.substring(
                                        stringBeforeSkip.length + 1,
                                        curStrPos + numChars
                                    );
                                    var stringAfterSkip = curString.substring(
                                        curStrPos + numChars + 1
                                    );
                                    curString =
                                        stringBeforeSkip +
                                        stringSkipped +
                                        stringAfterSkip;
                                    numChars--;
                                }

                                _this2.timeout = setTimeout(function () {
                                    _this2.toggleBlinking(false);

                                    if (curStrPos >= curString.length) {
                                        _this2.doneTyping(curString, curStrPos);
                                    } else {
                                        _this2.keepTyping(
                                            curString,
                                            curStrPos,
                                            numChars
                                        );
                                    }

                                    if (_this2.temporaryPause) {
                                        _this2.temporaryPause = false;
                                        _this2.options.onTypingResumed(
                                            _this2.arrayPos,
                                            _this2
                                        );
                                    }
                                }, skip);
                            }, humanize);
                        },
                    },
                    {
                        key: "keepTyping",
                        value: function keepTyping(
                            curString,
                            curStrPos,
                            numChars
                        ) {
                            if (curStrPos === 0) {
                                this.toggleBlinking(false);
                                this.options.preStringTyped(
                                    this.arrayPos,
                                    this
                                );
                            }
                            curStrPos += numChars;
                            var nextString = curString.substr(0, curStrPos);
                            this.replaceText(nextString);
                            this.typewrite(curString, curStrPos);
                        },
                    },
                    {
                        key: "doneTyping",
                        value: function doneTyping(curString, curStrPos) {
                            var _this3 = this;

                            this.options.onStringTyped(this.arrayPos, this);
                            this.toggleBlinking(true);

                            if (this.arrayPos === this.strings.length - 1) {
                                this.complete();
                                if (
                                    this.loop === false ||
                                    this.curLoop === this.loopCount
                                ) {
                                    return;
                                }
                            }

                            this.timeout = setTimeout(function () {
                                _this3.backspace(curString, curStrPos);
                            }, this.backDelay);
                        },
                    },
                    {
                        key: "backspace",
                        value: function backspace(curString, curStrPos) {
                            var _this4 = this;

                            if (this.pause.status === true) {
                                this.setPauseStatus(curString, curStrPos, true);
                                return;
                            }
                            if (this.fadeOut) return this.initFadeOut();

                            this.toggleBlinking(false);
                            var humanize = this.humanizer(this.backSpeed);

                            this.timeout = setTimeout(function () {
                                curStrPos = _htmlParser.backSpaceHtmlChars(
                                    curString,
                                    curStrPos,
                                    _this4
                                );
                                var curStringAtPosition = curString.substr(
                                    0,
                                    curStrPos
                                );
                                _this4.replaceText(curStringAtPosition);

                                if (_this4.smartBackspace) {
                                    var nextString =
                                        _this4.strings[_this4.arrayPos + 1];
                                    if (
                                        nextString &&
                                        curStringAtPosition ===
                                            nextString.substr(0, curStrPos)
                                    ) {
                                        _this4.stopNum = curStrPos;
                                    } else {
                                        _this4.stopNum = 0;
                                    }
                                }

                                if (curStrPos > _this4.stopNum) {
                                    curStrPos--;
                                    _this4.backspace(curString, curStrPos);
                                } else if (curStrPos <= _this4.stopNum) {
                                    _this4.arrayPos++;
                                    if (
                                        _this4.arrayPos ===
                                        _this4.strings.length
                                    ) {
                                        _this4.arrayPos = 0;
                                        _this4.options.onLastStringBackspaced();
                                        _this4.shuffleStringsIfNeeded();
                                        _this4.begin();
                                    } else {
                                        _this4.typewrite(
                                            _this4.strings[
                                                _this4.sequence[_this4.arrayPos]
                                            ],
                                            curStrPos
                                        );
                                    }
                                }
                            }, humanize);
                        },
                    },
                    {
                        key: "complete",
                        value: function complete() {
                            this.options.onComplete(this);
                            if (this.loop) {
                                this.curLoop++;
                            } else {
                                this.typingComplete = true;
                            }
                        },
                    },
                    {
                        key: "setPauseStatus",
                        value: function setPauseStatus(
                            curString,
                            curStrPos,
                            isTyping
                        ) {
                            this.pause.typewrite = isTyping;
                            this.pause.curString = curString;
                            this.pause.curStrPos = curStrPos;
                        },
                    },
                    {
                        key: "toggleBlinking",
                        value: function toggleBlinking(isBlinking) {
                            if (!this.cursor) return;
                            if (this.pause.status) return;
                            if (this.cursorBlinking === isBlinking) return;

                            this.cursorBlinking = isBlinking;
                            if (isBlinking) {
                                this.cursor.classList.add(
                                    "typed-cursor--blink"
                                );
                            } else {
                                this.cursor.classList.remove(
                                    "typed-cursor--blink"
                                );
                            }
                        },
                    },
                    {
                        key: "humanizer",
                        value: function humanizer(speed) {
                            return (
                                Math.round((Math.random() * speed) / 2) + speed
                            );
                        },
                    },
                    {
                        key: "shuffleStringsIfNeeded",
                        value: function shuffleStringsIfNeeded() {
                            if (!this.shuffle) return;
                            this.sequence = this.sequence.sort(function () {
                                return Math.random() - 0.5;
                            });
                        },
                    },
                    {
                        key: "initFadeOut",
                        value: function initFadeOut() {
                            var _this5 = this;

                            this.el.className += " " + this.fadeOutClass;
                            if (this.cursor)
                                this.cursor.className +=
                                    " " + this.fadeOutClass;

                            return setTimeout(function () {
                                _this5.arrayPos++;
                                _this5.replaceText("");

                                if (_this5.strings.length > _this5.arrayPos) {
                                    _this5.typewrite(
                                        _this5.strings[
                                            _this5.sequence[_this5.arrayPos]
                                        ],
                                        0
                                    );
                                } else {
                                    _this5.typewrite(_this5.strings[0], 0);
                                    _this5.arrayPos = 0;
                                }
                            }, this.fadeOutDelay);
                        },
                    },
                    {
                        key: "replaceText",
                        value: function replaceText(str) {
                            if (this.attr) {
                                this.el.setAttribute(this.attr, str);
                            } else if (this.isInput) {
                                this.el.value = str;
                            } else if (this.contentType === "html") {
                                this.el.innerHTML = str;
                            } else {
                                this.el.textContent = str;
                            }
                        },
                    },
                    {
                        key: "bindFocusEvents",
                        value: function bindFocusEvents() {
                            var _this6 = this;

                            if (!this.isInput) return;

                            this.el.addEventListener("focus", function () {
                                _this6.stop();
                            });

                            this.el.addEventListener("blur", function () {
                                if (
                                    _this6.el.value &&
                                    _this6.el.value.length !== 0
                                )
                                    return;
                                _this6.start();
                            });
                        },
                    },
                    {
                        key: "insertCursor",
                        value: function insertCursor() {
                            if (!this.showCursor) return;
                            if (this.cursor) return;

                            this.cursor = document.createElement("span");
                            this.cursor.className = "typed-cursor";
                            this.cursor.innerHTML = this.cursorChar;

                            if (this.el.parentNode) {
                                this.el.parentNode.insertBefore(
                                    this.cursor,
                                    this.el.nextSibling
                                );
                            }
                        },
                    },
                ]);

                return Typed;
            })();

            exports.default = Typed;
            module.exports = exports.default;
        },
        ,
        /* 2 */
        function (module, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true,
            });

            var defaults = {
                strings: [
                    "These are the default values...",
                    "You know what you should do?",
                    "Use your own!",
                    "Have a great day!",
                ],
                stringsElement: null,
                typeSpeed: 0,
                startDelay: 0,
                backSpeed: 0,
                smartBackspace: true,
                shuffle: false,
                backDelay: 700,
                fadeOut: false,
                fadeOutClass: "typed-fade-out",
                fadeOutDelay: 500,
                loop: false,
                loopCount: Infinity,
                showCursor: true,
                cursorChar: "|",
                autoInsertCss: true,
                attr: null,
                bindInputFocusEvents: false,
                contentType: "html",
                onBegin: function (self) {},
                onComplete: function (self) {},
                preStringTyped: function (arrayPos, self) {},
                onStringTyped: function (arrayPos, self) {},
                onLastStringBackspaced: function (self) {},
                onTypingPaused: function (arrayPos, self) {},
                onTypingResumed: function (arrayPos, self) {},
                onReset: function (self) {},
                onStop: function (arrayPos, self) {},
                onStart: function (arrayPos, self) {},
                onDestroy: function (self) {},
            };

            exports.default = defaults;
            module.exports = exports.default;
        },
        /* 3 */
        function (module, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true,
            });

            var _createClass = (function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(
                            target,
                            descriptor.key,
                            descriptor
                        );
                    }
                }
                return function (Constructor, protoProps, staticProps) {
                    if (protoProps)
                        defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            })();

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var HTMLParser = (function () {
                function HTMLParser() {
                    _classCallCheck(this, HTMLParser);
                }

                _createClass(HTMLParser, [
                    {
                        key: "typeHtmlChars",
                        value: function typeHtmlChars(
                            curString,
                            curStrPos,
                            self
                        ) {
                            if (self.contentType !== "html") return curStrPos;
                            var curChar = curString.substr(curStrPos).charAt(0);
                            if (curChar === "<" || curChar === "&") {
                                var endTag = "";
                                if (curChar === "<") {
                                    endTag = ">";
                                } else {
                                    endTag = ";";
                                }
                                while (
                                    curString
                                        .substr(curStrPos + 1)
                                        .charAt(0) !== endTag
                                ) {
                                    curStrPos++;
                                    if (curStrPos + 1 > curString.length) {
                                        break;
                                    }
                                }
                                curStrPos++;
                            }
                            return curStrPos;
                        },
                    },
                    {
                        key: "backSpaceHtmlChars",
                        value: function backSpaceHtmlChars(
                            curString,
                            curStrPos,
                            self
                        ) {
                            if (self.contentType !== "html") return curStrPos;
                            var curChar = curString.substr(curStrPos).charAt(0);
                            if (curChar === ">" || curChar === ";") {
                                var endTag = "";
                                if (curChar === ">") {
                                    endTag = "<";
                                } else {
                                    endTag = "&";
                                }
                                while (
                                    curString
                                        .substr(curStrPos - 1)
                                        .charAt(0) !== endTag
                                ) {
                                    curStrPos--;
                                    if (curStrPos < 0) {
                                        break;
                                    }
                                }
                                curStrPos--;
                            }
                            return curStrPos;
                        },
                    },
                ]);

                return HTMLParser;
            })();

            exports.default = HTMLParser;
            var htmlParser = new HTMLParser();
            exports.htmlParser = htmlParser;
        },
    ]);
});
