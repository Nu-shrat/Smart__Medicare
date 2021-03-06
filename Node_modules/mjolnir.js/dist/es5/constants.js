"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GESTURE_EVENT_ALIASES = exports.EVENT_RECOGNIZER_MAP = exports.INPUT_EVENT_TYPES = exports.BASIC_EVENT_ALIASES = exports.RECOGNIZER_FALLBACK_MAP = exports.RECOGNIZER_COMPATIBLE_MAP = exports.RECOGNIZERS = void 0;

var _hammer = _interopRequireDefault(require("./utils/hammer"));

var RECOGNIZERS = _hammer.default ? [[_hammer.default.Pan, {
  event: 'tripan',
  pointers: 3,
  threshold: 0,
  enable: false
}], [_hammer.default.Rotate, {
  enable: false
}], [_hammer.default.Pinch, {
  enable: false
}], [_hammer.default.Swipe, {
  enable: false
}], [_hammer.default.Pan, {
  threshold: 0,
  enable: false
}], [_hammer.default.Press, {
  enable: false
}], [_hammer.default.Tap, {
  event: 'doubletap',
  taps: 2,
  enable: false
}], [_hammer.default.Tap, {
  event: 'anytap',
  enable: false
}], [_hammer.default.Tap, {
  enable: false
}]] : null;
exports.RECOGNIZERS = RECOGNIZERS;
var RECOGNIZER_COMPATIBLE_MAP = {
  tripan: ['rotate', 'pinch', 'pan'],
  rotate: ['pinch'],
  pinch: ['pan'],
  pan: ['press', 'doubletap', 'anytap', 'tap'],
  doubletap: ['anytap'],
  anytap: ['tap']
};
exports.RECOGNIZER_COMPATIBLE_MAP = RECOGNIZER_COMPATIBLE_MAP;
var RECOGNIZER_FALLBACK_MAP = {
  doubletap: ['tap']
};
exports.RECOGNIZER_FALLBACK_MAP = RECOGNIZER_FALLBACK_MAP;
var BASIC_EVENT_ALIASES = {
  pointerdown: 'pointerdown',
  pointermove: 'pointermove',
  pointerup: 'pointerup',
  touchstart: 'pointerdown',
  touchmove: 'pointermove',
  touchend: 'pointerup',
  mousedown: 'pointerdown',
  mousemove: 'pointermove',
  mouseup: 'pointerup'
};
exports.BASIC_EVENT_ALIASES = BASIC_EVENT_ALIASES;
var INPUT_EVENT_TYPES = {
  KEY_EVENTS: ['keydown', 'keyup'],
  MOUSE_EVENTS: ['mousedown', 'mousemove', 'mouseup', 'mouseover', 'mouseout', 'mouseleave'],
  WHEEL_EVENTS: ['wheel', 'mousewheel']
};
exports.INPUT_EVENT_TYPES = INPUT_EVENT_TYPES;
var EVENT_RECOGNIZER_MAP = {
  tap: 'tap',
  anytap: 'anytap',
  doubletap: 'doubletap',
  press: 'press',
  pinch: 'pinch',
  pinchin: 'pinch',
  pinchout: 'pinch',
  pinchstart: 'pinch',
  pinchmove: 'pinch',
  pinchend: 'pinch',
  pinchcancel: 'pinch',
  rotate: 'rotate',
  rotatestart: 'rotate',
  rotatemove: 'rotate',
  rotateend: 'rotate',
  rotatecancel: 'rotate',
  tripan: 'tripan',
  tripanstart: 'tripan',
  tripanmove: 'tripan',
  tripanup: 'tripan',
  tripandown: 'tripan',
  tripanleft: 'tripan',
  tripanright: 'tripan',
  tripanend: 'tripan',
  tripancancel: 'tripan',
  pan: 'pan',
  panstart: 'pan',
  panmove: 'pan',
  panup: 'pan',
  pandown: 'pan',
  panleft: 'pan',
  panright: 'pan',
  panend: 'pan',
  pancancel: 'pan',
  swipe: 'swipe',
  swipeleft: 'swipe',
  swiperight: 'swipe',
  swipeup: 'swipe',
  swipedown: 'swipe'
};
exports.EVENT_RECOGNIZER_MAP = EVENT_RECOGNIZER_MAP;
var GESTURE_EVENT_ALIASES = {
  click: 'tap',
  anyclick: 'anytap',
  dblclick: 'doubletap',
  mousedown: 'pointerdown',
  mousemove: 'pointermove',
  mouseup: 'pointerup',
  mouseover: 'pointerover',
  mouseout: 'pointerout',
  mouseleave: 'pointerleave'
};
exports.GESTURE_EVENT_ALIASES = GESTURE_EVENT_ALIASES;
//# sourceMappingURL=constants.js.map