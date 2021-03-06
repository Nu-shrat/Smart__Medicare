"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var EVENT_TYPE = 'contextmenu';

var ContextmenuInput = function () {
  function ContextmenuInput(element, callback) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    (0, _classCallCheck2.default)(this, ContextmenuInput);
    this.element = element;
    this.callback = callback;
    this.options = Object.assign({
      enable: true
    }, options);
    this.handleEvent = this.handleEvent.bind(this);
    element.addEventListener('contextmenu', this.handleEvent);
  }

  (0, _createClass2.default)(ContextmenuInput, [{
    key: "destroy",
    value: function destroy() {
      this.element.removeEventListener('contextmenu', this.handleEvent);
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

      this.callback({
        type: EVENT_TYPE,
        center: {
          x: event.clientX,
          y: event.clientY
        },
        srcEvent: event,
        pointerType: 'mouse',
        target: event.target
      });
    }
  }]);
  return ContextmenuInput;
}();

exports.default = ContextmenuInput;
//# sourceMappingURL=contextmenu-input.js.map