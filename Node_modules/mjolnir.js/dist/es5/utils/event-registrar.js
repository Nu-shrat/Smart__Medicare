"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _eventUtils = require("./event-utils");

var DEFAULT_OPTIONS = {
  srcElement: 'root',
  priority: 0
};

var EventRegistrar = function () {
  function EventRegistrar(eventManager) {
    (0, _classCallCheck2.default)(this, EventRegistrar);
    this.eventManager = eventManager;
    this.handlers = [];
    this.handlersByElement = new Map();
    this.handleEvent = this.handleEvent.bind(this);
    this._active = false;
  }

  (0, _createClass2.default)(EventRegistrar, [{
    key: "isEmpty",
    value: function isEmpty() {
      return !this._active;
    }
  }, {
    key: "add",
    value: function add(type, handler, opts) {
      var once = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var passive = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var handlers = this.handlers,
          handlersByElement = this.handlersByElement;

      if (opts && ((0, _typeof2.default)(opts) !== 'object' || opts.addEventListener)) {
        opts = {
          srcElement: opts
        };
      }

      opts = opts ? Object.assign({}, DEFAULT_OPTIONS, opts) : DEFAULT_OPTIONS;
      var entries = handlersByElement.get(opts.srcElement);

      if (!entries) {
        entries = [];
        handlersByElement.set(opts.srcElement, entries);
      }

      var entry = {
        type: type,
        handler: handler,
        srcElement: opts.srcElement,
        priority: opts.priority
      };

      if (once) {
        entry.once = true;
      }

      if (passive) {
        entry.passive = true;
      }

      handlers.push(entry);
      this._active = this._active || !entry.passive;
      var insertPosition = entries.length - 1;

      while (insertPosition >= 0) {
        if (entries[insertPosition].priority >= entry.priority) {
          break;
        }

        insertPosition--;
      }

      entries.splice(insertPosition + 1, 0, entry);
    }
  }, {
    key: "remove",
    value: function remove(type, handler) {
      var handlers = this.handlers,
          handlersByElement = this.handlersByElement;

      for (var i = handlers.length - 1; i >= 0; i--) {
        var entry = handlers[i];

        if (entry.type === type && entry.handler === handler) {
          handlers.splice(i, 1);
          var entries = handlersByElement.get(entry.srcElement);
          entries.splice(entries.indexOf(entry), 1);

          if (entries.length === 0) {
            handlersByElement.delete(entry.srcElement);
          }
        }
      }

      this._active = handlers.some(function (entry) {
        return !entry.passive;
      });
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      if (this.isEmpty()) {
        return;
      }

      var mjolnirEvent = this._normalizeEvent(event);

      var target = event.srcEvent.target;

      while (target && target !== mjolnirEvent.rootElement) {
        this._emit(mjolnirEvent, target);

        if (mjolnirEvent.handled) {
          return;
        }

        target = target.parentNode;
      }

      this._emit(mjolnirEvent, 'root');
    }
  }, {
    key: "_emit",
    value: function _emit(event, srcElement) {
      var entries = this.handlersByElement.get(srcElement);

      if (entries) {
        var immediatePropagationStopped = false;

        var stopPropagation = function stopPropagation() {
          event.handled = true;
        };

        var stopImmediatePropagation = function stopImmediatePropagation() {
          event.handled = true;
          immediatePropagationStopped = true;
        };

        var entriesToRemove = [];

        for (var i = 0; i < entries.length; i++) {
          var _entries$i = entries[i],
              type = _entries$i.type,
              handler = _entries$i.handler,
              once = _entries$i.once;
          handler(Object.assign({}, event, {
            type: type,
            stopPropagation: stopPropagation,
            stopImmediatePropagation: stopImmediatePropagation
          }));

          if (once) {
            entriesToRemove.push(entries[i]);
          }

          if (immediatePropagationStopped) {
            break;
          }
        }

        for (var _i = 0; _i < entriesToRemove.length; _i++) {
          var _entriesToRemove$_i = entriesToRemove[_i],
              _type = _entriesToRemove$_i.type,
              _handler = _entriesToRemove$_i.handler;
          this.remove(_type, _handler);
        }
      }
    }
  }, {
    key: "_normalizeEvent",
    value: function _normalizeEvent(event) {
      var rootElement = this.eventManager.element;
      return Object.assign({}, event, (0, _eventUtils.whichButtons)(event), (0, _eventUtils.getOffsetPosition)(event, rootElement), {
        handled: false,
        rootElement: rootElement
      });
    }
  }]);
  return EventRegistrar;
}();

exports.default = EventRegistrar;
//# sourceMappingURL=event-registrar.js.map