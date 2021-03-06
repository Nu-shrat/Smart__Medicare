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
exports.styles = exports.BuildError = void 0;
var React = __importStar(require("react"));
var Dialog_1 = require("../components/Dialog");
var Overlay_1 = require("../components/Overlay");
var Terminal_1 = require("../components/Terminal");
var noop_template_1 = require("../helpers/noop-template");
var BuildError = function BuildError(_a) {
    var message = _a.message;
    var noop = React.useCallback(function () { }, []);
    return (React.createElement(Overlay_1.Overlay, { fixed: true },
        React.createElement(Dialog_1.Dialog, { type: "error", "aria-labelledby": "nextjs__container_build_error_label", "aria-describedby": "nextjs__container_build_error_desc", onClose: noop },
            React.createElement(Dialog_1.DialogContent, null,
                React.createElement(Dialog_1.DialogHeader, { className: "nextjs-container-build-error-header" },
                    React.createElement("h4", { id: "nextjs__container_build_error_label" }, "Failed to compile")),
                React.createElement(Dialog_1.DialogBody, { className: "nextjs-container-build-error-body" },
                    React.createElement(Terminal_1.Terminal, { content: message }),
                    React.createElement("footer", null,
                        React.createElement("p", { id: "nextjs__container_build_error_desc" },
                            React.createElement("small", null, "This error occurred during the build process and can only be dismissed by fixing the error."))))))));
};
exports.BuildError = BuildError;
exports.styles = noop_template_1.noop(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .nextjs-container-build-error-header > h4 {\n    line-height: 1.5;\n    margin: 0;\n    padding: 0;\n  }\n\n  .nextjs-container-build-error-body footer {\n    margin-top: var(--size-gap);\n  }\n  .nextjs-container-build-error-body footer p {\n    margin: 0;\n  }\n\n  .nextjs-container-build-error-body small {\n    color: #757575;\n  }\n"], ["\n  .nextjs-container-build-error-header > h4 {\n    line-height: 1.5;\n    margin: 0;\n    padding: 0;\n  }\n\n  .nextjs-container-build-error-body footer {\n    margin-top: var(--size-gap);\n  }\n  .nextjs-container-build-error-body footer p {\n    margin: 0;\n  }\n\n  .nextjs-container-build-error-body small {\n    color: #757575;\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=BuildError.js.map