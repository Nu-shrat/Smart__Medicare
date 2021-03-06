"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _hammer = require("./utils/hammer");

var _wheelInput = _interopRequireDefault(require("./inputs/wheel-input"));

var _moveInput = _interopRequireDefault(require("./inputs/move-input"));

var _keyInput = _interopRequireDefault(require("./inputs/key-input"));

var _contextmenuInput = _interopRequireDefault(require("./inputs/contextmenu-input"));

var _eventRegistrar = _interopRequireDefault(require("./utils/event-registrar"));

var _constants = require("./constants");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var DEFAULT_OPTIONS = {
  events: null,
  recognizers: null,
  recognizerOptions: {},
  Manager: _hammer.Manager,
  touchAction: 'none',
  tabIndex: 0
};

var EventManager = function () {
  function EventManager() {
    var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck2.default)(this, EventManager);
    this.options = Object.assign({}, DEFAULT_OPTIONS, options);
    this.events = new Map();
    this._onBasicInput = this._onBasicInput.bind(this);
    this._onOtherEvent = this._onOtherEvent.bind(this);
    this.setElement(element);
    var events = options.events;

    if (events) {
      this.on(events);
    }
  }

  (0, _createClass2.default)(EventManager, [{
    key: "setElement",
    value: function setElement(element) {
      var _this = this;

      if (this.element) {
        this.destroy();
      }

      this.element = element;

      if (!element) {
        return;
      }

      var options = this.options;
      var ManagerClass = options.Manager;
      this.manager = new ManagerClass(element, {
        touchAction: options.touchAction,
        recognizers: options.recognizers || _constants.RECOGNIZERS
      }).on('hammer.input', this._onBasicInput);

      if (!options.recognizers) {
        Object.keys(_constants.RECOGNIZER_COMPATIBLE_MAP).forEach(function (name) {
          var recognizer = _this.manager.get(name);

          if (recognizer) {
            _constants.RECOGNIZER_COMPATIBLE_MAP[name].forEach(function (otherName) {
              recognizer.recognizeWith(otherName);
            });
          }
        });
      }

      for (var recognizerName in options.recognizerOptions) {
        var recognizer = this.manager.get(recognizerName);

        if (recognizer) {
          var recognizerOption = options.recognizerOptions[recognizerName];
          delete recognizerOption.enable;
          recognizer.set(recognizerOption);
        }
      }

      this.wheelInput = new _wheelInput.default(element, this._onOtherEvent, {
        enable: false
      });
      this.moveInput = new _moveInput.default(element, this._onOtherEvent, {
        enable: false
      });
      this.keyInput = new _keyInput.default(element, this._onOtherEvent, {
        enable: false,
        tabIndex: options.tabIndex
      });
      this.contextmenuInput = new _contextmenuInput.default(element, this._onOtherEvent, {
        enable: false
      });

      var _iterator = _createForOfIteratorHelper(this.events),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = (0, _slicedToArray2.default)(_step.value, 2),
              eventAlias = _step$value[0],
              eventRegistrar = _step$value[1];

          if (!eventRegistrar.isEmpty()) {
            this._toggleRecognizer(eventRegistrar.recognizerName, true);

            this.manager.on(eventAlias, eventRegistrar.handleEvent);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.element) {
        this.wheelInput.destroy();
        this.moveInput.destroy();
        this.keyInput.destroy();
        this.contextmenuInput.destroy();
        this.manager.destroy();
        this.wheelInput = null;
        this.moveInput = null;
        this.keyInput = null;
        this.contextmenuInput = null;
        this.manager = null;
        this.element = null;
      }
    }
  }, {
    key: "on",
    value: function on(event, handler, opts) {
      this._addEventHandler(event, handler, opts, false);
    }
  }, {
    key: "once",
    value: function once(event, handler, opts) {
      this._addEventHandler(event, handler, opts, true);
    }
  }, {
    key: "watch",
    value: function watch(event, handler, opts) {
      this._addEventHandler(event, handler, opts, false, true);
    }
  }, {
    key: "off",
    value: function off(event, handler) {
      this._removeEventHandler(event, handler);
    }
  }, {
    key: "_toggleRecognizer",
    value: function _toggleRecognizer(name, enabled) {
      var manager = this.manager;

      if (!manager) {
        return;
      }

      var recognizer = manager.get(name);

      if (recognizer && recognizer.options.enable !== enabled) {
        recognizer.set({
          enable: enabled
        });
        var fallbackRecognizers = _constants.RECOGNIZER_FALLBACK_MAP[name];

        if (fallbackRecognizers && !this.options.recognizers) {
          fallbackRecognizers.forEach(function (otherName) {
            var otherRecognizer = manager.get(otherName);

            if (enabled) {
              otherRecognizer.requireFailure(name);
              recognizer.dropRequireFailure(otherName);
            } else {
              otherRecognizer.dropRequireFailure(name);
            }
          });
        }
      }

      this.wheelInput.enableEventType(name, enabled);
      this.moveInput.enableEventType(name, enabled);
      this.keyInput.enableEventType(name, enabled);
      this.contextmenuInput.enableEventType(name, enabled);
    }
  }, {
    key: "_addEventHandler",
    value: function _addEventHandler(event, handler, opts, once, passive) {
      if (typeof event !== 'string') {
        opts = handler;

        for (var eventName in event) {
          this._addEventHandler(eventName, event[eventName], opts, once, passive);
        }

        return;
      }

      var manager = this.manager,
          events = this.events;
      var eventAlias = _constants.GESTURE_EVENT_ALIASES[event] || event;
      var eventRegistrar = events.get(eventAlias);

      if (!eventRegistrar) {
        eventRegistrar = new _eventRegistrar.default(this);
        events.set(eventAlias, eventRegistrar);
        eventRegistrar.recognizerName = _constants.EVENT_RECOGNIZER_MAP[eventAlias] || eventAlias;

        if (manager) {
          manager.on(eventAlias, eventRegistrar.handleEvent);
        }
      }

      eventRegistrar.add(event, handler, opts, once, passive);

      if (!eventRegistrar.isEmpty()) {
        this._toggleRecognizer(eventRegistrar.recognizerName, true);
      }
    }
  }, {
    key: "_removeEventHandler",
    value: function _removeEventHandler(event, handler) {
      if (typeof event !== 'string') {
        for (var eventName in event) {
          this._removeEventHandler(eventName, event[eventName]);
        }

        return;
      }

      var events = this.events;
      var eventAlias = _constants.GESTURE_EVENT_ALIASES[event] || event;
      var eventRegistrar = events.get(eventAlias);

      if (!eventRegistrar) {
        return;
      }

      eventRegistrar.remove(event, handler);

      if (eventRegistrar.isEmpty()) {
        var recognizerName = eventRegistrar.recognizerName;
        var isRecognizerUsed = false;

        var _iterator2 = _createForOfIteratorHelper(events.values()),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var eh = _step2.value;

            if (eh.recognizerName === recognizerName && !eh.isEmpty()) {
              isRecognizerUsed = true;
              break;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        if (!isRecognizerUsed) {
          this._toggleRecognizer(recognizerName, false);
        }
      }
    }
  }, {
    key: "_onBasicInput",
    value: function _onBasicInput(event) {
      var srcEvent = event.srcEvent;
      var alias = _constants.BASIC_EVENT_ALIASES[srcEvent.type];

      if (alias) {
        this.manager.emit(alias, event);
      }
    }
  }, {
    key: "_onOtherEvent",
    value: function _onOtherEvent(event) {
      this.manager.emit(event.type, event);
    }
  }]);
  return EventManager;
}();

exports.default = EventManager;
//# sourceMappingURL=event-manager.js.map