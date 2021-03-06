"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Manager = void 0;

var _hammerjs = _interopRequireDefault(require("hammerjs"));

var _hammerOverrides = require("./hammer-overrides");

(0, _hammerOverrides.enhancePointerEventInput)(_hammerjs.default.PointerEventInput);
(0, _hammerOverrides.enhanceMouseInput)(_hammerjs.default.MouseInput);
var Manager = _hammerjs.default.Manager;
exports.Manager = Manager;
var _default = _hammerjs.default;
exports.default = _default;
//# sourceMappingURL=hammer.browser.js.map