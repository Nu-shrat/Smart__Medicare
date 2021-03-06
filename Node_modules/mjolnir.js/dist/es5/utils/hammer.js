"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Manager = void 0;

function HammerManagerMock(m) {
  var instance = {};

  var chainedNoop = function chainedNoop() {
    return instance;
  };

  instance.get = function () {
    return null;
  };

  instance.set = chainedNoop;
  instance.on = chainedNoop;
  instance.off = chainedNoop;
  instance.destroy = chainedNoop;
  instance.emit = chainedNoop;
  return instance;
}

var Manager = HammerManagerMock;
exports.Manager = Manager;
var _default = null;
exports.default = _default;
//# sourceMappingURL=hammer.js.map