"use strict";exports.__esModule=true;exports.writeDefaultConfig=writeDefaultConfig;var _fs=require("fs");var _chalk=_interopRequireDefault(require("chalk"));var _os=_interopRequireDefault(require("os"));var _path=_interopRequireDefault(require("path"));var CommentJson=_interopRequireWildcard(require("next/dist/compiled/comment-json"));function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap();_getRequireWildcardCache=function(){return cache;};return cache;}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}async function writeDefaultConfig(eslintrcFile,pkgJsonPath,packageJsonConfig){const defaultConfig={extends:'next'};if(eslintrcFile){const content=await _fs.promises.readFile(eslintrcFile,{encoding:'utf8'}).then(txt=>txt.trim().replace(/\n/g,''),()=>null);if(content===''||content==='{}'||content==='---'||content==='module.exports = {}'){const ext=_path.default.extname(eslintrcFile);let newFileContent;if(ext==='.yaml'||ext==='.yml'){newFileContent="extends: 'next'";}else{newFileContent=CommentJson.stringify(defaultConfig,null,2);if(ext==='.js'){newFileContent='module.exports = '+newFileContent;}}await _fs.promises.writeFile(eslintrcFile,newFileContent+_os.default.EOL);console.log(_chalk.default.green(`We detected an empty ESLint configuration file (${_chalk.default.bold(_path.default.basename(eslintrcFile))}) and updated it for you to include the base Next.js ESLint configuration.`));}}else if(packageJsonConfig!=null&&packageJsonConfig.eslintConfig){// Creates .eslintrc only if package.json's eslintConfig field is empty
if(Object.entries(packageJsonConfig==null?void 0:packageJsonConfig.eslintConfig).length===0){packageJsonConfig.eslintConfig=defaultConfig;if(pkgJsonPath)await _fs.promises.writeFile(pkgJsonPath,CommentJson.stringify(packageJsonConfig,null,2)+_os.default.EOL);console.log(_chalk.default.green(`We detected an empty ${_chalk.default.bold('eslintConfig')} field in package.json and updated it for you to include the base Next.js ESLint configuration.`));}}else{await _fs.promises.writeFile('.eslintrc',CommentJson.stringify(defaultConfig,null,2)+_os.default.EOL);console.log(_chalk.default.green(`We created the ${_chalk.default.bold('.eslintrc')} file for you and included the base Next.js ESLint configuration.`));}}
//# sourceMappingURL=writeDefaultConfig.js.map