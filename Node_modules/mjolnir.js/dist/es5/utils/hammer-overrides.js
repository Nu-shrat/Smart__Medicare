"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enhancePointerEventInput = enhancePointerEventInput;
exports.enhanceMouseInput = enhanceMouseInput;
var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var MOUSE_INPUT_MAP = {
  mousedown: INPUT_START,
  mousemove: INPUT_MOVE,
  mouseup: INPUT_END
};

function some(array, predict) {
  for (var i = 0; i < array.length; i++) {
    if (predict(array[i])) {
      return true;
    }
  }

  return false;
}

function enhancePointerEventInput(PointerEventInput) {
  var oldHandler = PointerEventInput.prototype.handler;

  PointerEventInput.prototype.handler = function handler(ev) {
    var store = this.store;

    if (ev.button > 0 && ev.type === 'pointerdown') {
      if (!some(store, function (e) {
        return e.pointerId === ev.pointerId;
      })) {
        store.push(ev);
      }
    }

    oldHandler.call(this, ev);
  };
}

function enhanceMouseInput(MouseInput) {
  MouseInput.prototype.handler = function handler(ev) {
    var eventType = MOUSE_INPUT_MAP[ev.type];

    if (eventType & INPUT_START && ev.button >= 0) {
      this.pressed = true;
    }

    if (eventType & INPUT_MOVE && ev.which === 0) {
      eventType = INPUT_END;
    }

    if (!this.pressed) {
      return;
    }

    if (eventType & INPUT_END) {
      this.pressed = false;
    }

    this.callback(this.manager, eventType, {
      pointers: [ev],
      changedPointers: [ev],
      pointerType: 'mouse',
      srcEvent: ev
    });
  };
}
//# sourceMappingURL=hammer-overrides.js.map