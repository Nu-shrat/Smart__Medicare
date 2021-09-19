"use strict";exports.__esModule=true;exports.default=exports.raw=void 0;var _loaderUtils=_interopRequireDefault(require("next/dist/compiled/loader-utils"));var _imageSize=_interopRequireDefault(require("image-size"));var _main=require("../../../next-server/server/lib/squoosh/main");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}const BLUR_IMG_SIZE=8;const BLUR_QUALITY=70;const VALID_BLUR_EXT=['jpeg','png','webp'];async function nextImageLoader(content){const context=this.rootContext;const opts={context,content};const interpolatedName=_loaderUtils.default.interpolateName(this,'/static/image/[path][name].[hash].[ext]',opts);let extension=_loaderUtils.default.interpolateName(this,'[ext]',opts);if(extension==='jpg'){extension='jpeg';}const imageSize=(0,_imageSize.default)(content);let blurDataURL;if(VALID_BLUR_EXT.includes(extension)){// Shrink the image's largest dimension
const resizeOperationOpts=imageSize.width>=imageSize.height?{type:'resize',width:BLUR_IMG_SIZE}:{type:'resize',height:BLUR_IMG_SIZE};const resizedImage=await(0,_main.processBuffer)(content,[resizeOperationOpts],extension,BLUR_QUALITY);blurDataURL=`data:image/${extension};base64,${resizedImage.toString('base64')}`;}const stringifiedData=JSON.stringify({src:'/_next'+interpolatedName,height:imageSize.height,width:imageSize.width,blurDataURL});this.emitFile(interpolatedName,content,null);return`${'export default '} ${stringifiedData};`;}const raw=true;exports.raw=raw;var _default=nextImageLoader;exports.default=_default;
//# sourceMappingURL=next-image-loader.js.map