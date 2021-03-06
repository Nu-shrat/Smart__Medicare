"use strict";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.getOverlayMiddleware = exports.createOriginalStackFrame = void 0;
var code_frame_1 = require("@babel/code-frame");
var fs_1 = require("fs");
var path_1 = __importDefault(require("path"));
var source_map_1 = require("source-map");
var url_1 = __importDefault(require("url"));
var getRawSourceMap_1 = require("./internal/helpers/getRawSourceMap");
var launchEditor_1 = require("./internal/helpers/launchEditor");
function getModuleId(compilation, module, isWebpack5) {
    if (isWebpack5) {
        return compilation.chunkGraph.getModuleId(module);
    }
    return module.id;
}
function getModuleSource(compilation, module, isWebpack5) {
    var _a, _b, _c;
    if (isWebpack5) {
        return ((_b = (module &&
            ((_a = compilation.codeGenerationResults
                .get(module)) === null || _a === void 0 ? void 0 : _a.sources.get('javascript')))) !== null && _b !== void 0 ? _b : null);
    }
    return ((_c = module === null || module === void 0 ? void 0 : module.source(compilation.dependencyTemplates, compilation.runtimeTemplate)) !== null && _c !== void 0 ? _c : null);
}
function getSourcePath(source) {
    // Webpack prefixes certain source paths with this path
    if (source.startsWith('webpack:///')) {
        return source.substring(11);
    }
    // Make sure library name is filtered out as well
    if (source.startsWith('webpack://_N_E/')) {
        return source.substring(15);
    }
    if (source.startsWith('webpack://')) {
        return source.substring(10);
    }
    return source;
}
function findOriginalSourcePositionAndContent(webpackSource, position) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var consumer, sourcePosition, sourceContent;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, new source_map_1.SourceMapConsumer(webpackSource.map())];
                case 1:
                    consumer = _c.sent();
                    try {
                        sourcePosition = consumer.originalPositionFor({
                            line: position.line,
                            column: (_a = position.column) !== null && _a !== void 0 ? _a : 0
                        });
                        if (!sourcePosition.source) {
                            return [2 /*return*/, null];
                        }
                        sourceContent = (_b = consumer.sourceContentFor(sourcePosition.source, 
                        /* returnNullOnMissing */ true)) !== null && _b !== void 0 ? _b : null;
                        return [2 /*return*/, {
                                sourcePosition: sourcePosition,
                                sourceContent: sourceContent
                            }];
                    }
                    finally {
                        consumer.destroy();
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function createOriginalStackFrame(_a) {
    var _b, _c, _d;
    var line = _a.line, column = _a.column, source = _a.source, modulePath = _a.modulePath, rootDirectory = _a.rootDirectory, frame = _a.frame;
    return __awaiter(this, void 0, void 0, function () {
        var result, sourcePosition, sourceContent, filePath, originalFrame, originalCodeFrame;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0: return [4 /*yield*/, findOriginalSourcePositionAndContent(source, {
                        line: line,
                        column: column
                    })];
                case 1:
                    result = _e.sent();
                    if (result === null) {
                        return [2 /*return*/, null];
                    }
                    sourcePosition = result.sourcePosition, sourceContent = result.sourceContent;
                    if (!sourcePosition.source) {
                        return [2 /*return*/, null];
                    }
                    filePath = path_1["default"].resolve(rootDirectory, modulePath || getSourcePath(sourcePosition.source));
                    originalFrame = {
                        file: sourceContent
                            ? path_1["default"].relative(rootDirectory, filePath)
                            : sourcePosition.source,
                        lineNumber: sourcePosition.line,
                        column: sourcePosition.column,
                        methodName: frame.methodName,
                        arguments: []
                    };
                    originalCodeFrame = !((_c = (_b = originalFrame.file) === null || _b === void 0 ? void 0 : _b.includes('node_modules')) !== null && _c !== void 0 ? _c : true) &&
                        sourceContent &&
                        sourcePosition.line
                        ? code_frame_1.codeFrameColumns(sourceContent, {
                            start: {
                                line: sourcePosition.line,
                                column: (_d = sourcePosition.column) !== null && _d !== void 0 ? _d : 0
                            }
                        }, { forceColor: true })
                        : null;
                    return [2 /*return*/, {
                            originalStackFrame: originalFrame,
                            originalCodeFrame: originalCodeFrame
                        }];
            }
        });
    });
}
exports.createOriginalStackFrame = createOriginalStackFrame;
function getOverlayMiddleware(options) {
    function getSourceById(isServerSide, isFile, id) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var fileContent, map_1, compilation_1, module_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!isFile) return [3 /*break*/, 2];
                        return [4 /*yield*/, fs_1.promises
                                .readFile(id, 'utf-8')["catch"](function () { return null; })];
                    case 1:
                        fileContent = _c.sent();
                        if (fileContent == null) {
                            return [2 /*return*/, null];
                        }
                        map_1 = getRawSourceMap_1.getRawSourceMap(fileContent);
                        if (map_1 == null) {
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/, {
                                map: function () {
                                    return map_1;
                                }
                            }];
                    case 2:
                        try {
                            compilation_1 = isServerSide
                                ? (_a = options.serverStats()) === null || _a === void 0 ? void 0 : _a.compilation
                                : (_b = options.stats()) === null || _b === void 0 ? void 0 : _b.compilation;
                            if (compilation_1 == null) {
                                return [2 /*return*/, null];
                            }
                            module_1 = __spreadArray([], __read(compilation_1.modules)).find(function (searchModule) {
                                return getModuleId(compilation_1, searchModule, options.isWebpack5) === id;
                            });
                            return [2 /*return*/, getModuleSource(compilation_1, module_1, options.isWebpack5)];
                        }
                        catch (err) {
                            console.error("Failed to lookup module by ID (\"" + id + "\"):", err);
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
    return function (req, res, next) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        return __awaiter(this, void 0, void 0, function () {
            var _p, pathname, query, frame, isServerSide, moduleId, source, err_1, frameLine, frameColumn, originalStackFrameResponse, err_2, frame, frameFile, filePath, fileExists, frameLine, frameColumn, err_3;
            return __generator(this, function (_q) {
                switch (_q.label) {
                    case 0:
                        _p = url_1["default"].parse(req.url, true), pathname = _p.pathname, query = _p.query;
                        if (!(pathname === '/__nextjs_original-stack-frame')) return [3 /*break*/, 9];
                        frame = query;
                        if (!((((_a = frame.file) === null || _a === void 0 ? void 0 : _a.startsWith('webpack-internal:///')) ||
                            ((_b = frame.file) === null || _b === void 0 ? void 0 : _b.startsWith('file://'))) &&
                            Boolean(parseInt((_d = (_c = frame.lineNumber) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : '', 10)))) {
                            res.statusCode = 400;
                            res.write('Bad Request');
                            return [2 /*return*/, res.end()];
                        }
                        isServerSide = frame.isServerSide === 'true';
                        moduleId = frame.file.replace(/^(webpack-internal:\/\/\/|file:\/\/)/, '');
                        source = void 0;
                        _q.label = 1;
                    case 1:
                        _q.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, getSourceById(isServerSide, frame.file.startsWith('file:'), moduleId)];
                    case 2:
                        source = _q.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _q.sent();
                        console.log('Failed to get source map:', err_1);
                        res.statusCode = 500;
                        res.write('Internal Server Error');
                        return [2 /*return*/, res.end()];
                    case 4:
                        if (source == null) {
                            res.statusCode = 204;
                            res.write('No Content');
                            return [2 /*return*/, res.end()];
                        }
                        frameLine = parseInt((_f = (_e = frame.lineNumber) === null || _e === void 0 ? void 0 : _e.toString()) !== null && _f !== void 0 ? _f : '', 10);
                        frameColumn = parseInt((_h = (_g = frame.column) === null || _g === void 0 ? void 0 : _g.toString()) !== null && _h !== void 0 ? _h : '', 10);
                        if (!frameColumn) {
                            frameColumn = null;
                        }
                        _q.label = 5;
                    case 5:
                        _q.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, createOriginalStackFrame({
                                line: frameLine,
                                column: frameColumn,
                                source: source,
                                frame: frame,
                                modulePath: moduleId,
                                rootDirectory: options.rootDirectory
                            })];
                    case 6:
                        originalStackFrameResponse = _q.sent();
                        if (originalStackFrameResponse === null) {
                            res.statusCode = 204;
                            res.write('No Content');
                            return [2 /*return*/, res.end()];
                        }
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.write(Buffer.from(JSON.stringify(originalStackFrameResponse)));
                        return [2 /*return*/, res.end()];
                    case 7:
                        err_2 = _q.sent();
                        console.log('Failed to parse source map:', err_2);
                        res.statusCode = 500;
                        res.write('Internal Server Error');
                        return [2 /*return*/, res.end()];
                    case 8: return [3 /*break*/, 15];
                    case 9:
                        if (!(pathname === '/__nextjs_launch-editor')) return [3 /*break*/, 15];
                        frame = query;
                        frameFile = ((_j = frame.file) === null || _j === void 0 ? void 0 : _j.toString()) || null;
                        if (frameFile == null) {
                            res.statusCode = 400;
                            res.write('Bad Request');
                            return [2 /*return*/, res.end()];
                        }
                        filePath = path_1["default"].resolve(options.rootDirectory, frameFile);
                        return [4 /*yield*/, fs_1.promises.access(filePath, fs_1.constants.F_OK).then(function () { return true; }, function () { return false; })];
                    case 10:
                        fileExists = _q.sent();
                        if (!fileExists) {
                            res.statusCode = 204;
                            res.write('No Content');
                            return [2 /*return*/, res.end()];
                        }
                        frameLine = parseInt((_l = (_k = frame.lineNumber) === null || _k === void 0 ? void 0 : _k.toString()) !== null && _l !== void 0 ? _l : '', 10) || 1;
                        frameColumn = parseInt((_o = (_m = frame.column) === null || _m === void 0 ? void 0 : _m.toString()) !== null && _o !== void 0 ? _o : '', 10) || 1;
                        _q.label = 11;
                    case 11:
                        _q.trys.push([11, 13, , 14]);
                        return [4 /*yield*/, launchEditor_1.launchEditor(filePath, frameLine, frameColumn)];
                    case 12:
                        _q.sent();
                        return [3 /*break*/, 14];
                    case 13:
                        err_3 = _q.sent();
                        console.log('Failed to launch editor:', err_3);
                        res.statusCode = 500;
                        res.write('Internal Server Error');
                        return [2 /*return*/, res.end()];
                    case 14:
                        res.statusCode = 204;
                        return [2 /*return*/, res.end()];
                    case 15: return [2 /*return*/, next()];
                }
            });
        });
    };
}
exports.getOverlayMiddleware = getOverlayMiddleware;
//# sourceMappingURL=middleware.js.map