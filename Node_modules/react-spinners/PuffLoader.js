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
var puff = [
    react_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0%  {transform: scale(0)}\n  100% {transform: scale(1.0)}\n"], ["\n  0%  {transform: scale(0)}\n  100% {transform: scale(1.0)}\n"]))),
    react_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  0%  {opacity: 1}\n  100% {opacity: 0}\n"], ["\n  0%  {opacity: 1}\n  100% {opacity: 0}\n"])))
];
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getSize = function () {
            return _this.props.size;
        };
        _this.style = function (i) {
            var _a = _this.props, color = _a.color, speedMultiplier = _a.speedMultiplier;
            return react_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      position: absolute;\n      height: ", ";\n      width: ", ";\n      border: thick solid ", ";\n      border-radius: 50%;\n      opacity: 1;\n      top: 0;\n      left: 0;\n      animation-fill-mode: both;\n      animation: ", ", ", ";\n      animation-duration: ", "s;\n      animation-iteration-count: infinite;\n      animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1), cubic-bezier(0.3, 0.61, 0.355, 1);\n      animation-delay: ", ";\n    "], ["\n      position: absolute;\n      height: ", ";\n      width: ", ";\n      border: thick solid ", ";\n      border-radius: 50%;\n      opacity: 1;\n      top: 0;\n      left: 0;\n      animation-fill-mode: both;\n      animation: ", ", ", ";\n      animation-duration: ", "s;\n      animation-iteration-count: infinite;\n      animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1), cubic-bezier(0.3, 0.61, 0.355, 1);\n      animation-delay: ", ";\n    "])), helpers_1.cssValue(_this.getSize()), helpers_1.cssValue(_this.getSize()), color, puff[0], puff[1], 2 / speedMultiplier, i === 1 ? "-1s" : "0s");
        };
        _this.wrapper = function () {
            return react_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      position: relative;\n      width: ", ";\n      height: ", ";\n    "], ["\n      position: relative;\n      width: ", ";\n      height: ", ";\n    "])), helpers_1.cssValue(_this.getSize()), helpers_1.cssValue(_this.getSize()));
        };
        return _this;
    }
    Loader.prototype.render = function () {
        var _a = this.props, loading = _a.loading, css = _a.css;
        return loading ? (react_1.jsx("span", { css: [this.wrapper(), css] },
            react_1.jsx("span", { css: this.style(1) }),
            react_1.jsx("span", { css: this.style(2) }))) : null;
    };
    Loader.defaultProps = helpers_1.sizeDefaults(60);
    return Loader;
}(React.PureComponent));
exports.default = Loader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
