"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var React = __importStar(require("react"));
var react_1 = require("@emotion/react");
var helpers_1 = require("./helpers");
var moon = react_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  100% {transform: rotate(360deg)}\n"], ["\n  100% {transform: rotate(360deg)}\n"])));
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.moonSize = function () {
            var size = _this.props.size;
            var value = helpers_1.parseLengthAndUnit(size).value;
            return value / 7;
        };
        _this.ballStyle = function (size) {
            return react_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      width: ", ";\n      height: ", ";\n      border-radius: 100%;\n    "], ["\n      width: ", ";\n      height: ", ";\n      border-radius: 100%;\n    "])), helpers_1.cssValue(size), helpers_1.cssValue(size));
        };
        _this.wrapper = function () {
            var _a = _this.props, size = _a.size, speedMultiplier = _a.speedMultiplier;
            var _b = helpers_1.parseLengthAndUnit(size), value = _b.value, unit = _b.unit;
            return react_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      position: relative;\n      width: ", ";\n      height: ", ";\n      animation: ", " ", "s 0s infinite linear;\n      animation-fill-mode: forwards;\n    "], ["\n      position: relative;\n      width: ", ";\n      height: ", ";\n      animation: ", " ", "s 0s infinite linear;\n      animation-fill-mode: forwards;\n    "])), "" + (value + _this.moonSize() * 2) + unit, "" + (value + _this.moonSize() * 2) + unit, moon, 0.6 / speedMultiplier);
        };
        _this.ball = function () {
            var _a = _this.props, color = _a.color, size = _a.size, speedMultiplier = _a.speedMultiplier;
            var _b = helpers_1.parseLengthAndUnit(size), value = _b.value, unit = _b.unit;
            return react_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      ", ";\n      background-color: ", ";\n      opacity: 0.8;\n      position: absolute;\n      top: ", ";\n      animation: ", " ", "s 0s infinite linear;\n      animation-fill-mode: forwards;\n    "], ["\n      ", ";\n      background-color: ", ";\n      opacity: 0.8;\n      position: absolute;\n      top: ", ";\n      animation: ", " ", "s 0s infinite linear;\n      animation-fill-mode: forwards;\n    "])), _this.ballStyle(_this.moonSize()), color, "" + (value / 2 - _this.moonSize() / 2) + unit, moon, 0.6 / speedMultiplier);
        };
        _this.circle = function () {
            var _a = _this.props, size = _a.size, color = _a.color;
            var value = helpers_1.parseLengthAndUnit(size).value;
            return react_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      ", ";\n      border: ", "px solid ", ";\n      opacity: 0.1;\n      box-sizing: content-box;\n      position: absolute;\n    "], ["\n      ", ";\n      border: ", "px solid ", ";\n      opacity: 0.1;\n      box-sizing: content-box;\n      position: absolute;\n    "])), _this.ballStyle(value), _this.moonSize(), color);
        };
        return _this;
    }
    Loader.prototype.render = function () {
        var _a = this.props, loading = _a.loading, css = _a.css;
        return loading ? (react_1.jsx("span", { css: [this.wrapper(), css] },
            react_1.jsx("span", { css: this.ball() }),
            react_1.jsx("span", { css: this.circle() }))) : null;
    };
    Loader.defaultProps = helpers_1.sizeDefaults(60);
    return Loader;
}(React.PureComponent));
exports.default = Loader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
