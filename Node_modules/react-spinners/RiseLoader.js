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
var riseAmount = 30;
var even = react_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {transform: scale(1.1)}\n  25% {transform: translateY(-", "px)}\n  50% {transform: scale(0.4)}\n  75% {transform: translateY(", "px)}\n  100% {transform: translateY(0) scale(1.0)}\n"], ["\n  0% {transform: scale(1.1)}\n  25% {transform: translateY(-", "px)}\n  50% {transform: scale(0.4)}\n  75% {transform: translateY(", "px)}\n  100% {transform: translateY(0) scale(1.0)}\n"])), riseAmount, riseAmount);
var odd = react_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  0% {transform: scale(0.4)}\n  25% {transform: translateY(", "px)}\n  50% {transform: scale(1.1)}\n  75% {transform: translateY(", "px)}\n  100% {transform: translateY(0) scale(0.75)}\n"], ["\n  0% {transform: scale(0.4)}\n  25% {transform: translateY(", "px)}\n  50% {transform: scale(1.1)}\n  75% {transform: translateY(", "px)}\n  100% {transform: translateY(0) scale(0.75)}\n"])), riseAmount, -riseAmount);
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.style = function (i) {
            var _a = _this.props, color = _a.color, size = _a.size, margin = _a.margin, speedMultiplier = _a.speedMultiplier;
            return react_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      background-color: ", ";\n      width: ", ";\n      height: ", ";\n      margin: ", ";\n      border-radius: 100%;\n      display: inline-block;\n      animation: ", " ", "s 0s infinite cubic-bezier(0.15, 0.46, 0.9, 0.6);\n      animation-fill-mode: both;\n    "], ["\n      background-color: ", ";\n      width: ", ";\n      height: ", ";\n      margin: ", ";\n      border-radius: 100%;\n      display: inline-block;\n      animation: ", " ", "s 0s infinite cubic-bezier(0.15, 0.46, 0.9, 0.6);\n      animation-fill-mode: both;\n    "])), color, helpers_1.cssValue(size), helpers_1.cssValue(size), helpers_1.cssValue(margin), i % 2 === 0 ? even : odd, 1 / speedMultiplier);
        };
        return _this;
    }
    Loader.prototype.render = function () {
        var _a = this.props, loading = _a.loading, css = _a.css;
        return loading ? (react_1.jsx("span", { css: [css] },
            react_1.jsx("span", { css: this.style(1) }),
            react_1.jsx("span", { css: this.style(2) }),
            react_1.jsx("span", { css: this.style(3) }),
            react_1.jsx("span", { css: this.style(4) }),
            react_1.jsx("span", { css: this.style(5) }))) : null;
    };
    Loader.defaultProps = helpers_1.sizeMarginDefaults(15);
    return Loader;
}(React.PureComponent));
exports.default = Loader;
var templateObject_1, templateObject_2, templateObject_3;
