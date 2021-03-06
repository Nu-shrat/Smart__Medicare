"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
exports.__esModule = true;
exports.Base = void 0;
var React = __importStar(require("react"));
var noop_template_1 = require("../helpers/noop-template");
function Base() {
    return (React.createElement("style", { dangerouslySetInnerHTML: {
            __html: noop_template_1.noop(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          :host {\n            --size-gap-half: 4px;\n            --size-gap: 8px;\n            --size-gap-double: 16px;\n            --size-gap-quad: 32px;\n\n            --size-font-small: 14px;\n            --size-font: 16px;\n            --size-font-big: 20px;\n            --size-font-bigger: 24px;\n\n            --color-accents-1: #808080;\n            --color-accents-2: #222222;\n            --color-accents-3: #404040;\n\n            --font-stack-monospace: 'SFMono-Regular', Consolas,\n              'Liberation Mono', Menlo, Courier, monospace;\n\n            --color-ansi-selection: rgba(95, 126, 151, 0.48);\n            --color-ansi-bg: #111111;\n            --color-ansi-fg: #cccccc;\n\n            --color-ansi-white: #777777;\n            --color-ansi-black: #141414;\n            --color-ansi-blue: #00aaff;\n            --color-ansi-cyan: #88ddff;\n            --color-ansi-green: #98ec65;\n            --color-ansi-magenta: #aa88ff;\n            --color-ansi-red: #ff5555;\n            --color-ansi-yellow: #ffcc33;\n            --color-ansi-bright-white: #ffffff;\n            --color-ansi-bright-black: #777777;\n            --color-ansi-bright-blue: #33bbff;\n            --color-ansi-bright-cyan: #bbecff;\n            --color-ansi-bright-green: #b6f292;\n            --color-ansi-bright-magenta: #cebbff;\n            --color-ansi-bright-red: #ff8888;\n            --color-ansi-bright-yellow: #ffd966;\n          }\n\n          .mono {\n            font-family: var(--font-stack-monospace);\n          }\n\n          h1,\n          h2,\n          h3,\n          h4,\n          h5,\n          h6 {\n            margin-bottom: var(--size-gap);\n            font-weight: 500;\n            line-height: 1.5;\n          }\n\n          h1 {\n            font-size: 40px;\n          }\n          h2 {\n            font-size: 32px;\n          }\n          h3 {\n            font-size: 28px;\n          }\n          h4 {\n            font-size: 24px;\n          }\n          h5 {\n            font-size: 20px;\n          }\n          h6 {\n            font-size: 16px;\n          }\n        "], ["\n          :host {\n            --size-gap-half: 4px;\n            --size-gap: 8px;\n            --size-gap-double: 16px;\n            --size-gap-quad: 32px;\n\n            --size-font-small: 14px;\n            --size-font: 16px;\n            --size-font-big: 20px;\n            --size-font-bigger: 24px;\n\n            --color-accents-1: #808080;\n            --color-accents-2: #222222;\n            --color-accents-3: #404040;\n\n            --font-stack-monospace: 'SFMono-Regular', Consolas,\n              'Liberation Mono', Menlo, Courier, monospace;\n\n            --color-ansi-selection: rgba(95, 126, 151, 0.48);\n            --color-ansi-bg: #111111;\n            --color-ansi-fg: #cccccc;\n\n            --color-ansi-white: #777777;\n            --color-ansi-black: #141414;\n            --color-ansi-blue: #00aaff;\n            --color-ansi-cyan: #88ddff;\n            --color-ansi-green: #98ec65;\n            --color-ansi-magenta: #aa88ff;\n            --color-ansi-red: #ff5555;\n            --color-ansi-yellow: #ffcc33;\n            --color-ansi-bright-white: #ffffff;\n            --color-ansi-bright-black: #777777;\n            --color-ansi-bright-blue: #33bbff;\n            --color-ansi-bright-cyan: #bbecff;\n            --color-ansi-bright-green: #b6f292;\n            --color-ansi-bright-magenta: #cebbff;\n            --color-ansi-bright-red: #ff8888;\n            --color-ansi-bright-yellow: #ffd966;\n          }\n\n          .mono {\n            font-family: var(--font-stack-monospace);\n          }\n\n          h1,\n          h2,\n          h3,\n          h4,\n          h5,\n          h6 {\n            margin-bottom: var(--size-gap);\n            font-weight: 500;\n            line-height: 1.5;\n          }\n\n          h1 {\n            font-size: 40px;\n          }\n          h2 {\n            font-size: 32px;\n          }\n          h3 {\n            font-size: 28px;\n          }\n          h4 {\n            font-size: 24px;\n          }\n          h5 {\n            font-size: 20px;\n          }\n          h6 {\n            font-size: 16px;\n          }\n        "])))
        } }));
}
exports.Base = Base;
var templateObject_1;
//# sourceMappingURL=Base.js.map