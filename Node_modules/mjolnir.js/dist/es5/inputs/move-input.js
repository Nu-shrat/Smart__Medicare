"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _constants = require("../constants");

var MOUSE_EVENTS = _constants.INPUT_EVENT_TYPES.MOUSE_EVENTS;
var MOVE_EVENT_TYPE = 'pointermove';
var OVER_EVENT_TYPE = 'pointerover';
var OUT_EVENT_TYPE = 'pointerout';
var LEAVE_EVENT_TYPE = 'pointerleave';

var MoveInput = function () {
  function MoveInput(element, callback) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    (0, _classCallCheck2.default)(this, MoveInput);
    this.element = element;
    this.callback = callback;
    this.pressed = false;
    this.options = Object.assign({
      enable: true
    }, options);
    this.enableMoveEvent = this.options.enable;
    this.enableLeaveEvent = this.options.enable;
    this.enableOutEvent = this.options.enable;
    this.enableOverEvent = this.options.enable;
    this.events = MOUSE_EVENTS.concat(options.events || []);
    this.handleEvent = this.handleEvent.bind(this);
    this.events.forEach(function (event) {
      return element.addEventListener(event, _this.handleEvent);
    });
  }

  (0, _createClass2.default)(MoveInput, [{
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
      if (eventType === MOVE_EVENT_TYPE) {
        this.enableMoveEvent = enabled;
      }

      if (eventType === OVER_EVENT_TYPE) {
        this.enableOverEvent = enabled;
      }

      if (eventType === OUT_EVENT_TYPE) {
        this.enableOutEvent = enabled;
      }

      if (eventType === LEAVE_EVENT_TYPE) {
        this.enableLeaveEvent = enabled;
      }
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      this.handleOverEvent(event);
      this.handleOutEvent(event);
      this.handleLeaveEvent(event);
      this.handleMoveEvent(event);
    }
  }, {
    key: "handleOverEvent",
    value: function handleOverEvent(event) {
      if (this.enableOverEvent) {
        if (event.type === 'mouseover') {
          this.callback({
            type: OVER_EVENT_TYPE,
            srcEvent: event,
            pointerType: 'mouse',
            target: event.target
          });
        }
      }
    }
  }, {
    key: "handleOutEvent",
    value: function handleOutEvent(event) {
      if (this.enableOutEvent) {
        if (event.type === 'mouseout') {
          this.callback({
            type: OUT_EVENT_TYPE,
            srcEvent: event,
            pointerType: 'mouse',
            target: event.target
          });
        }
      }
    }
  }, {
    key: "handleLeaveEvent",
    value: function handleLeaveEvent(event) {
      if (this.enableLeaveEvent) {
        if (event.type === 'mouseleave') {
          this.callback({
            type: LEAVE_EVENT_TYPE,
            srcEvent: event,
            pointerType: 'mouse',
            target: event.target
          });
        }
      }
    }
  }, {
    key: "handleMoveEvent",
    value: function handleMoveEvent(event) {
      if (this.enableMoveEvent) {
        switch (event.type) {
          case 'mousedown':
            if (event.button >= 0) {
              this.pressed = true;
            }

            break;

          case 'mousemove':
            if (event.which === 0) {
              this.pressed = false;
            }

            if (!this.pressed) {
              this.callback({
                type: MOVE_EVENT_TYPE,
                srcEvent: event,
                pointerType: 'mouse',
                target: event.target
              });
            }

            break;

          case 'mouseup':
            this.pressed = false;
            break;

          default:
        }
      }
    }
  }]);
  return MoveInput;
}();

exports.default = MoveInput;
//# sourceMappingURL=move-input.js.map