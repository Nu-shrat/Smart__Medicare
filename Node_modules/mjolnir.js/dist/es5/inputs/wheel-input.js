"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _constants = require("../constants");

var _globals = require("../utils/globals");

var firefox = _globals.userAgent.indexOf('firefox') !== -1;
var WHEEL_EVENTS = _constants.INPUT_EVENT_TYPES.WHEEL_EVENTS;
var EVENT_TYPE = 'wheel';
var WHEEL_DELTA_MAGIC_SCALER = 4.000244140625;
var WHEEL_DELTA_PER_LINE = 40;
var SHIFT_MULTIPLIER = 0.25;

var WheelInput = function () {
  function WheelInput(element, callback) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    (0, _classCallCheck2.default)(this, WheelInput);
    this.element = element;
    this.callback = callback;
    this.options = Object.assign({
      enable: true
    }, options);
    this.events = WHEEL_EVENTS.concat(options.events || []);
    this.handleEvent = this.handleEvent.bind(this);
    this.events.forEach(function (event) {
      return element.addEventListener(event, _this.handleEvent, _globals.passiveSupported ? {
        passive: false
      } : false);
    });
  }

  (0, _createClass2.default)(WheelInput, [{
    key: "destroy",
    value: function destroy() {
      var _this2 = this;

      this.events.forEach(function (event) {
        return _this2.element.removeEventListener(event, _this2.handleEvent);
      });
    }
  }, {
    key: "enableEventType",
    value: function enableEventType(eventType, enabled) {
      if (eventType === EVENT_TYPE) {
        this.options.enable = enabled;
      }
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      if (!this.options.enable) {
        return;
      }

      var value = event.deltaY;

      if (_globals.window.WheelEvent) {
        if (firefox && event.deltaMode === _globals.window.WheelEvent.DOM_DELTA_PIXEL) {
          value /= _globals.window.devicePixelRatio;
        }

        if (event.deltaMode === _globals.window.WheelEvent.DOM_DELTA_LINE) {
          value *= WHEEL_DELTA_PER_LINE;
        }
      }

      var wheelPosition = {
        x: event.clientX,
        y: event.clientY
      };

      if (value !== 0 && value % WHEEL_DELTA_MAGIC_SCALER === 0) {
        value = Math.floor(value / WHEEL_DELTA_MAGIC_SCALER);
      }

      if (event.shiftKey && value) {
        value = value * SHIFT_MULTIPLIER;
      }

      this._onWheel(event, -value, wheelPosition);
    }
  }, {
    key: "_onWheel",
    value: function _onWheel(srcEvent, delta, position) {
      this.callback({
        type: EVENT_TYPE,
        center: position,
        delta: delta,
        srcEvent: srcEvent,
        pointerType: 'mouse',
        target: srcEvent.target
      });
    }
  }]);
  return WheelInput;
}();

exports.default = WheelInput;
//# sourceMappingURL=wheel-input.js.map