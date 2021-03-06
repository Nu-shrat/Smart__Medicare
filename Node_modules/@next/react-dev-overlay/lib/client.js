"use strict";
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
exports.onRefresh = exports.unregister = exports.register = exports.onBuildError = exports.onBuildOk = exports.ReactDevOverlay = exports.getNodeError = void 0;
var Bus = __importStar(require("./internal/bus"));
var parseStack_1 = require("./internal/helpers/parseStack");
var isRegistered = false;
var stackTraceLimit = undefined;
function onUnhandledError(ev) {
    var error = ev === null || ev === void 0 ? void 0 : ev.error;
    if (!error || !(error instanceof Error) || typeof error.stack !== 'string') {
        // A non-error was thrown, we don't have anything to show. :-(
        return;
    }
    var e = error;
    Bus.emit({
        type: Bus.TYPE_UNHANDLED_ERROR,
        reason: error,
        frames: parseStack_1.parseStack(e.stack)
    });
}
function onUnhandledRejection(ev) {
    var reason = ev === null || ev === void 0 ? void 0 : ev.reason;
    if (!reason ||
        !(reason instanceof Error) ||
        typeof reason.stack !== 'string') {
        // A non-error was thrown, we don't have anything to show. :-(
        return;
    }
    var e = reason;
    Bus.emit({
        type: Bus.TYPE_UNHANDLED_REJECTION,
        reason: reason,
        frames: parseStack_1.parseStack(e.stack)
    });
}
function register() {
    if (isRegistered) {
        return;
    }
    isRegistered = true;
    try {
        var limit = Error.stackTraceLimit;
        Error.stackTraceLimit = 50;
        stackTraceLimit = limit;
    }
    catch (_a) { }
    window.addEventListener('error', onUnhandledError);
    window.addEventListener('unhandledrejection', onUnhandledRejection);
}
exports.register = register;
function unregister() {
    if (!isRegistered) {
        return;
    }
    isRegistered = false;
    if (stackTraceLimit !== undefined) {
        try {
            Error.stackTraceLimit = stackTraceLimit;
        }
        catch (_a) { }
        stackTraceLimit = undefined;
    }
    window.removeEventListener('error', onUnhandledError);
    window.removeEventListener('unhandledrejection', onUnhandledRejection);
}
exports.unregister = unregister;
function onBuildOk() {
    Bus.emit({ type: Bus.TYPE_BUILD_OK });
}
exports.onBuildOk = onBuildOk;
function onBuildError(message) {
    Bus.emit({ type: Bus.TYPE_BUILD_ERROR, message: message });
}
exports.onBuildError = onBuildError;
function onRefresh() {
    Bus.emit({ type: Bus.TYPE_REFFRESH });
}
exports.onRefresh = onRefresh;
var nodeStackFrames_1 = require("./internal/helpers/nodeStackFrames");
__createBinding(exports, nodeStackFrames_1, "getNodeError");
var ReactDevOverlay_1 = require("./internal/ReactDevOverlay");
__createBinding(exports, ReactDevOverlay_1, "default", "ReactDevOverlay");
//# sourceMappingURL=client.js.map