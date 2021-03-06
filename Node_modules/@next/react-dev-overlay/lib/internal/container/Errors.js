"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
exports.__esModule = true;
exports.styles = exports.Errors = void 0;
var React = __importStar(require("react"));
var bus_1 = require("../bus");
var Dialog_1 = require("../components/Dialog");
var LeftRightDialogHeader_1 = require("../components/LeftRightDialogHeader");
var Overlay_1 = require("../components/Overlay");
var Toast_1 = require("../components/Toast");
var nodeStackFrames_1 = require("../helpers/nodeStackFrames");
var noop_template_1 = require("../helpers/noop-template");
var stack_frame_1 = require("../helpers/stack-frame");
var RuntimeError_1 = require("./RuntimeError");
function getErrorSignature(ev) {
    var event = ev.event;
    switch (event.type) {
        case bus_1.TYPE_UNHANDLED_ERROR:
        case bus_1.TYPE_UNHANDLED_REJECTION: {
            return event.reason.name + "::" + event.reason.message + "::" + event.reason.stack;
        }
        default: {
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var _ = event;
    return '';
}
var HotlinkedText = function HotlinkedText(props) {
    var text = props.text;
    var linkRegex = /https?:\/\/[^\s/$.?#].[^\s"]*/i;
    return (React.createElement(React.Fragment, null, linkRegex.test(text)
        ? text.split(' ').map(function (word, index, array) {
            if (linkRegex.test(word)) {
                return (React.createElement(React.Fragment, { key: "link-" + index },
                    React.createElement("a", { href: word }, word),
                    index === array.length - 1 ? '' : ' '));
            }
            return index === array.length - 1 ? (React.createElement(React.Fragment, { key: "text-" + index }, word)) : (React.createElement(React.Fragment, { key: "text-" + index },
                word,
                " "));
        })
        : text));
};
function getErrorByType(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var id, event, _a, _;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    id = ev.id, event = ev.event;
                    _a = event.type;
                    switch (_a) {
                        case bus_1.TYPE_UNHANDLED_ERROR: return [3 /*break*/, 1];
                        case bus_1.TYPE_UNHANDLED_REJECTION: return [3 /*break*/, 1];
                    }
                    return [3 /*break*/, 3];
                case 1:
                    _b = {
                        id: id,
                        runtime: true,
                        error: event.reason
                    };
                    return [4 /*yield*/, stack_frame_1.getOriginalStackFrames(nodeStackFrames_1.isNodeError(event.reason), event.frames)];
                case 2: return [2 /*return*/, (_b.frames = _c.sent(),
                        _b)];
                case 3:
                    {
                        return [3 /*break*/, 4];
                    }
                    _c.label = 4;
                case 4:
                    _ = event;
                    throw new Error('type system invariant violation');
            }
        });
    });
}
var Errors = function Errors(_a) {
    var errors = _a.errors;
    var _b = __read(React.useState({}), 2), lookups = _b[0], setLookups = _b[1];
    var _c = __read(React.useMemo(function () {
        var ready = [];
        var next = null;
        // Ensure errors are displayed in the order they occurred in:
        for (var idx = 0; idx < errors.length; ++idx) {
            var e = errors[idx];
            var id = e.id;
            if (id in lookups) {
                ready.push(lookups[id]);
                continue;
            }
            // Check for duplicate errors
            if (idx > 0) {
                var prev = errors[idx - 1];
                if (getErrorSignature(prev) === getErrorSignature(e)) {
                    continue;
                }
            }
            next = e;
            break;
        }
        return [ready, next];
    }, [errors, lookups]), 2), readyErrors = _c[0], nextError = _c[1];
    var isLoading = React.useMemo(function () {
        return readyErrors.length < 1 && Boolean(errors.length);
    }, [errors.length, readyErrors.length]);
    React.useEffect(function () {
        if (nextError == null) {
            return;
        }
        var mounted = true;
        getErrorByType(nextError).then(function (resolved) {
            // We don't care if the desired error changed while we were resolving,
            // thus we're not tracking it using a ref. Once the work has been done,
            // we'll store it.
            if (mounted) {
                setLookups(function (m) {
                    var _a;
                    return (__assign(__assign({}, m), (_a = {}, _a[resolved.id] = resolved, _a)));
                });
            }
        }, function () {
            // TODO: handle this, though an edge case
        });
        return function () {
            mounted = false;
        };
    }, [nextError]);
    var _d = __read(React.useState(false), 2), isMinimized = _d[0], setMinimized = _d[1];
    var _e = __read(React.useState(0), 2), activeIdx = _e[0], setActiveIndex = _e[1];
    var previous = React.useCallback(function (e) {
        e === null || e === void 0 ? void 0 : e.preventDefault();
        setActiveIndex(function (v) { return Math.max(0, v - 1); });
    }, []);
    var next = React.useCallback(function (e) {
        e === null || e === void 0 ? void 0 : e.preventDefault();
        setActiveIndex(function (v) {
            return Math.max(0, Math.min(readyErrors.length - 1, v + 1));
        });
    }, [readyErrors.length]);
    var activeError = React.useMemo(function () { var _a; return (_a = readyErrors[activeIdx]) !== null && _a !== void 0 ? _a : null; }, [activeIdx, readyErrors]);
    // Reset component state when there are no errors to be displayed.
    // This should never happen, but lets handle it.
    React.useEffect(function () {
        if (errors.length < 1) {
            setLookups({});
            setMinimized(false);
            setActiveIndex(0);
        }
    }, [errors.length]);
    var minimize = React.useCallback(function (e) {
        e === null || e === void 0 ? void 0 : e.preventDefault();
        setMinimized(true);
    }, []);
    var reopen = React.useCallback(function (e) {
        e === null || e === void 0 ? void 0 : e.preventDefault();
        setMinimized(false);
    }, []);
    // This component shouldn't be rendered with no errors, but if it is, let's
    // handle it gracefully by rendering nothing.
    if (errors.length < 1 || activeError == null) {
        return null;
    }
    if (isLoading) {
        // TODO: better loading state
        return React.createElement(Overlay_1.Overlay, null);
    }
    if (isMinimized) {
        return (React.createElement(Toast_1.Toast, { className: "nextjs-toast-errors-parent", onClick: reopen },
            React.createElement("div", { className: "nextjs-toast-errors" },
                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                    React.createElement("circle", { cx: "12", cy: "12", r: "10" }),
                    React.createElement("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
                    React.createElement("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })),
                React.createElement("span", null,
                    readyErrors.length,
                    " error",
                    readyErrors.length > 1 ? 's' : ''))));
    }
    var isServerError = nodeStackFrames_1.isNodeError(activeError.error);
    return (React.createElement(Overlay_1.Overlay, null,
        React.createElement(Dialog_1.Dialog, { type: "error", "aria-labelledby": "nextjs__container_errors_label", "aria-describedby": "nextjs__container_errors_desc", onClose: isServerError ? undefined : minimize },
            React.createElement(Dialog_1.DialogContent, null,
                React.createElement(Dialog_1.DialogHeader, { className: "nextjs-container-errors-header" },
                    React.createElement(LeftRightDialogHeader_1.LeftRightDialogHeader, { previous: activeIdx > 0 ? previous : null, next: activeIdx < readyErrors.length - 1 ? next : null, close: isServerError ? undefined : minimize },
                        React.createElement("small", null,
                            React.createElement("span", null, activeIdx + 1),
                            " of",
                            ' ',
                            React.createElement("span", null, readyErrors.length),
                            " unhandled error",
                            readyErrors.length < 2 ? '' : 's')),
                    React.createElement("h1", { id: "nextjs__container_errors_label" }, isServerError ? 'Server Error' : 'Unhandled Runtime Error'),
                    React.createElement("p", { id: "nextjs__container_errors_desc" },
                        activeError.error.name,
                        ":",
                        ' ',
                        React.createElement(HotlinkedText, { text: activeError.error.message })),
                    isServerError ? (React.createElement("div", null,
                        React.createElement("small", null, "This error happened while generating the page. Any console logs will be displayed in the terminal window."))) : undefined),
                React.createElement(Dialog_1.DialogBody, { className: "nextjs-container-errors-body" },
                    React.createElement(RuntimeError_1.RuntimeError, { key: activeError.id.toString(), error: activeError }))))));
};
exports.Errors = Errors;
exports.styles = noop_template_1.noop(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .nextjs-container-errors-header > h1 {\n    font-size: var(--size-font-big);\n    line-height: var(--size-font-bigger);\n    font-weight: bold;\n    margin: 0;\n    margin-top: calc(var(--size-gap-double) + var(--size-gap-half));\n  }\n  .nextjs-container-errors-header small {\n    font-size: var(--size-font-small);\n    color: var(--color-accents-1);\n    margin-left: var(--size-gap-double);\n  }\n  .nextjs-container-errors-header small > span {\n    font-family: var(--font-stack-monospace);\n  }\n  .nextjs-container-errors-header > p {\n    font-family: var(--font-stack-monospace);\n    font-size: var(--size-font-small);\n    line-height: var(--size-font-big);\n    font-weight: bold;\n    margin: 0;\n    margin-top: var(--size-gap-half);\n    color: var(--color-ansi-red);\n    white-space: pre-wrap;\n  }\n  .nextjs-container-errors-header > div > small {\n    margin: 0;\n    margin-top: var(--size-gap-half);\n  }\n  .nextjs-container-errors-header > p > a {\n    color: var(--color-ansi-red);\n  }\n\n  .nextjs-container-errors-body > h5:not(:first-child) {\n    margin-top: calc(var(--size-gap-double) + var(--size-gap));\n  }\n  .nextjs-container-errors-body > h5 {\n    margin-bottom: var(--size-gap);\n  }\n\n  .nextjs-toast-errors-parent {\n    cursor: pointer;\n    transition: transform 0.2s ease;\n  }\n  .nextjs-toast-errors-parent:hover {\n    transform: scale(1.1);\n  }\n  .nextjs-toast-errors {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n  }\n  .nextjs-toast-errors > svg {\n    margin-right: var(--size-gap);\n  }\n"], ["\n  .nextjs-container-errors-header > h1 {\n    font-size: var(--size-font-big);\n    line-height: var(--size-font-bigger);\n    font-weight: bold;\n    margin: 0;\n    margin-top: calc(var(--size-gap-double) + var(--size-gap-half));\n  }\n  .nextjs-container-errors-header small {\n    font-size: var(--size-font-small);\n    color: var(--color-accents-1);\n    margin-left: var(--size-gap-double);\n  }\n  .nextjs-container-errors-header small > span {\n    font-family: var(--font-stack-monospace);\n  }\n  .nextjs-container-errors-header > p {\n    font-family: var(--font-stack-monospace);\n    font-size: var(--size-font-small);\n    line-height: var(--size-font-big);\n    font-weight: bold;\n    margin: 0;\n    margin-top: var(--size-gap-half);\n    color: var(--color-ansi-red);\n    white-space: pre-wrap;\n  }\n  .nextjs-container-errors-header > div > small {\n    margin: 0;\n    margin-top: var(--size-gap-half);\n  }\n  .nextjs-container-errors-header > p > a {\n    color: var(--color-ansi-red);\n  }\n\n  .nextjs-container-errors-body > h5:not(:first-child) {\n    margin-top: calc(var(--size-gap-double) + var(--size-gap));\n  }\n  .nextjs-container-errors-body > h5 {\n    margin-bottom: var(--size-gap);\n  }\n\n  .nextjs-toast-errors-parent {\n    cursor: pointer;\n    transition: transform 0.2s ease;\n  }\n  .nextjs-toast-errors-parent:hover {\n    transform: scale(1.1);\n  }\n  .nextjs-toast-errors {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n  }\n  .nextjs-toast-errors > svg {\n    margin-right: var(--size-gap);\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=Errors.js.map