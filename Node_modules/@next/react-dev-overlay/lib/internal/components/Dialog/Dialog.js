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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
exports.Dialog = void 0;
var React = __importStar(require("react"));
var use_on_click_outside_1 = require("../../hooks/use-on-click-outside");
var Dialog = function Dialog(_a) {
    var children = _a.children, type = _a.type, onClose = _a.onClose, props = __rest(_a, ["children", "type", "onClose"]);
    var _b = __read(React.useState(null), 2), dialog = _b[0], setDialog = _b[1];
    var onDialog = React.useCallback(function (node) {
        setDialog(node);
    }, []);
    use_on_click_outside_1.useOnClickOutside(dialog, onClose);
    // Make HTMLElements with `role=link` accessible to be triggered by the
    // keyboard, i.e. [Enter].
    React.useEffect(function () {
        if (dialog == null) {
            return;
        }
        var root = dialog.getRootNode();
        // Always true, but we do this for TypeScript:
        if (!(root instanceof ShadowRoot)) {
            return;
        }
        var shadowRoot = root;
        function handler(e) {
            var el = shadowRoot.activeElement;
            if (e.key === 'Enter' &&
                el instanceof HTMLElement &&
                el.getAttribute('role') === 'link') {
                e.preventDefault();
                e.stopPropagation();
                el.click();
            }
        }
        shadowRoot.addEventListener('keydown', handler);
        return function () {
            return shadowRoot.removeEventListener('keydown', handler);
        };
    }, [dialog]);
    return (React.createElement("div", { ref: onDialog, "data-nextjs-dialog": true, tabIndex: -1, role: "dialog", "aria-labelledby": props['aria-labelledby'], "aria-describedby": props['aria-describedby'], "aria-modal": "true" },
        React.createElement("div", { "data-nextjs-dialog-banner": true, className: "banner-" + type }),
        children));
};
exports.Dialog = Dialog;
//# sourceMappingURL=Dialog.js.map