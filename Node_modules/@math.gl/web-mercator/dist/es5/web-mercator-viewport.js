"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _mathUtils = require("./math-utils");

var _webMercatorUtils = require("./web-mercator-utils");

var _fitBounds3 = _interopRequireDefault(require("./fit-bounds"));

var _getBounds = _interopRequireDefault(require("./get-bounds"));

var mat4 = _interopRequireWildcard(require("gl-matrix/mat4"));

var vec2 = _interopRequireWildcard(require("gl-matrix/vec2"));

var vec3 = _interopRequireWildcard(require("gl-matrix/vec3"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var WebMercatorViewport = function () {
  function WebMercatorViewport() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      width: 1,
      height: 1
    },
        width = _ref.width,
        height = _ref.height,
        _ref$latitude = _ref.latitude,
        latitude = _ref$latitude === void 0 ? 0 : _ref$latitude,
        _ref$longitude = _ref.longitude,
        longitude = _ref$longitude === void 0 ? 0 : _ref$longitude,
        _ref$zoom = _ref.zoom,
        zoom = _ref$zoom === void 0 ? 0 : _ref$zoom,
        _ref$pitch = _ref.pitch,
        pitch = _ref$pitch === void 0 ? 0 : _ref$pitch,
        _ref$bearing = _ref.bearing,
        bearing = _ref$bearing === void 0 ? 0 : _ref$bearing,
        _ref$altitude = _ref.altitude,
        altitude = _ref$altitude === void 0 ? null : _ref$altitude,
        _ref$fovy = _ref.fovy,
        fovy = _ref$fovy === void 0 ? null : _ref$fovy,
        _ref$position = _ref.position,
        position = _ref$position === void 0 ? null : _ref$position,
        _ref$nearZMultiplier = _ref.nearZMultiplier,
        nearZMultiplier = _ref$nearZMultiplier === void 0 ? 0.02 : _ref$nearZMultiplier,
        _ref$farZMultiplier = _ref.farZMultiplier,
        farZMultiplier = _ref$farZMultiplier === void 0 ? 1.01 : _ref$farZMultiplier;

    (0, _classCallCheck2.default)(this, WebMercatorViewport);
    width = width || 1;
    height = height || 1;

    if (fovy === null && altitude === null) {
      altitude = _webMercatorUtils.DEFAULT_ALTITUDE;
      fovy = (0, _webMercatorUtils.altitudeToFovy)(altitude);
    } else if (fovy === null) {
      fovy = (0, _webMercatorUtils.altitudeToFovy)(altitude);
    } else if (altitude === null) {
      altitude = (0, _webMercatorUtils.fovyToAltitude)(fovy);
    }

    var scale = (0, _webMercatorUtils.zoomToScale)(zoom);
    altitude = Math.max(0.75, altitude);
    var distanceScales = (0, _webMercatorUtils.getDistanceScales)({
      longitude: longitude,
      latitude: latitude
    });
    var center = (0, _webMercatorUtils.lngLatToWorld)([longitude, latitude]);
    center[2] = 0;

    if (position) {
      vec3.add(center, center, vec3.mul([], position, distanceScales.unitsPerMeter));
    }

    this.projectionMatrix = (0, _webMercatorUtils.getProjectionMatrix)({
      width: width,
      height: height,
      pitch: pitch,
      fovy: fovy,
      nearZMultiplier: nearZMultiplier,
      farZMultiplier: farZMultiplier
    });
    this.viewMatrix = (0, _webMercatorUtils.getViewMatrix)({
      height: height,
      scale: scale,
      center: center,
      pitch: pitch,
      bearing: bearing,
      altitude: altitude
    });
    this.width = width;
    this.height = height;
    this.scale = scale;
    this.latitude = latitude;
    this.longitude = longitude;
    this.zoom = zoom;
    this.pitch = pitch;
    this.bearing = bearing;
    this.altitude = altitude;
    this.fovy = fovy;
    this.center = center;
    this.meterOffset = position || [0, 0, 0];
    this.distanceScales = distanceScales;

    this._initMatrices();

    this.equals = this.equals.bind(this);
    this.project = this.project.bind(this);
    this.unproject = this.unproject.bind(this);
    this.projectPosition = this.projectPosition.bind(this);
    this.unprojectPosition = this.unprojectPosition.bind(this);
    Object.freeze(this);
  }

  (0, _createClass2.default)(WebMercatorViewport, [{
    key: "_initMatrices",
    value: function _initMatrices() {
      var width = this.width,
          height = this.height,
          projectionMatrix = this.projectionMatrix,
          viewMatrix = this.viewMatrix;
      var vpm = (0, _mathUtils.createMat4)();
      mat4.multiply(vpm, vpm, projectionMatrix);
      mat4.multiply(vpm, vpm, viewMatrix);
      this.viewProjectionMatrix = vpm;
      var m = (0, _mathUtils.createMat4)();
      mat4.scale(m, m, [width / 2, -height / 2, 1]);
      mat4.translate(m, m, [1, -1, 0]);
      mat4.multiply(m, m, vpm);
      var mInverse = mat4.invert((0, _mathUtils.createMat4)(), m);

      if (!mInverse) {
        throw new Error('Pixel project matrix not invertible');
      }

      this.pixelProjectionMatrix = m;
      this.pixelUnprojectionMatrix = mInverse;
    }
  }, {
    key: "equals",
    value: function equals(viewport) {
      if (!(viewport instanceof WebMercatorViewport)) {
        return false;
      }

      return viewport.width === this.width && viewport.height === this.height && mat4.equals(viewport.projectionMatrix, this.projectionMatrix) && mat4.equals(viewport.viewMatrix, this.viewMatrix);
    }
  }, {
    key: "project",
    value: function project(xyz) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$topLeft = _ref2.topLeft,
          topLeft = _ref2$topLeft === void 0 ? true : _ref2$topLeft;

      var worldPosition = this.projectPosition(xyz);
      var coord = (0, _webMercatorUtils.worldToPixels)(worldPosition, this.pixelProjectionMatrix);

      var _coord = (0, _slicedToArray2.default)(coord, 2),
          x = _coord[0],
          y = _coord[1];

      var y2 = topLeft ? y : this.height - y;
      return xyz.length === 2 ? [x, y2] : [x, y2, coord[2]];
    }
  }, {
    key: "unproject",
    value: function unproject(xyz) {
      var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref3$topLeft = _ref3.topLeft,
          topLeft = _ref3$topLeft === void 0 ? true : _ref3$topLeft,
          _ref3$targetZ = _ref3.targetZ,
          targetZ = _ref3$targetZ === void 0 ? undefined : _ref3$targetZ;

      var _xyz = (0, _slicedToArray2.default)(xyz, 3),
          x = _xyz[0],
          y = _xyz[1],
          z = _xyz[2];

      var y2 = topLeft ? y : this.height - y;
      var targetZWorld = targetZ && targetZ * this.distanceScales.unitsPerMeter[2];
      var coord = (0, _webMercatorUtils.pixelsToWorld)([x, y2, z], this.pixelUnprojectionMatrix, targetZWorld);

      var _this$unprojectPositi = this.unprojectPosition(coord),
          _this$unprojectPositi2 = (0, _slicedToArray2.default)(_this$unprojectPositi, 3),
          X = _this$unprojectPositi2[0],
          Y = _this$unprojectPositi2[1],
          Z = _this$unprojectPositi2[2];

      if (Number.isFinite(z)) {
        return [X, Y, Z];
      }

      return Number.isFinite(targetZ) ? [X, Y, targetZ] : [X, Y];
    }
  }, {
    key: "projectPosition",
    value: function projectPosition(xyz) {
      var _lngLatToWorld = (0, _webMercatorUtils.lngLatToWorld)(xyz),
          _lngLatToWorld2 = (0, _slicedToArray2.default)(_lngLatToWorld, 2),
          X = _lngLatToWorld2[0],
          Y = _lngLatToWorld2[1];

      var Z = (xyz[2] || 0) * this.distanceScales.unitsPerMeter[2];
      return [X, Y, Z];
    }
  }, {
    key: "unprojectPosition",
    value: function unprojectPosition(xyz) {
      var _worldToLngLat = (0, _webMercatorUtils.worldToLngLat)(xyz),
          _worldToLngLat2 = (0, _slicedToArray2.default)(_worldToLngLat, 2),
          X = _worldToLngLat2[0],
          Y = _worldToLngLat2[1];

      var Z = (xyz[2] || 0) * this.distanceScales.metersPerUnit[2];
      return [X, Y, Z];
    }
  }, {
    key: "projectFlat",
    value: function projectFlat(lngLat) {
      return (0, _webMercatorUtils.lngLatToWorld)(lngLat);
    }
  }, {
    key: "unprojectFlat",
    value: function unprojectFlat(xy) {
      return (0, _webMercatorUtils.worldToLngLat)(xy);
    }
  }, {
    key: "getMapCenterByLngLatPosition",
    value: function getMapCenterByLngLatPosition(_ref4) {
      var lngLat = _ref4.lngLat,
          pos = _ref4.pos;
      var fromLocation = (0, _webMercatorUtils.pixelsToWorld)(pos, this.pixelUnprojectionMatrix);
      var toLocation = (0, _webMercatorUtils.lngLatToWorld)(lngLat);
      var translate = vec2.add([], toLocation, vec2.negate([], fromLocation));
      var newCenter = vec2.add([], this.center, translate);
      return (0, _webMercatorUtils.worldToLngLat)(newCenter);
    }
  }, {
    key: "getLocationAtPoint",
    value: function getLocationAtPoint(_ref5) {
      var lngLat = _ref5.lngLat,
          pos = _ref5.pos;
      return this.getMapCenterByLngLatPosition({
        lngLat: lngLat,
        pos: pos
      });
    }
  }, {
    key: "fitBounds",
    value: function fitBounds(bounds) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var width = this.width,
          height = this.height;

      var _fitBounds2 = (0, _fitBounds3.default)(Object.assign({
        width: width,
        height: height,
        bounds: bounds
      }, options)),
          longitude = _fitBounds2.longitude,
          latitude = _fitBounds2.latitude,
          zoom = _fitBounds2.zoom;

      return new WebMercatorViewport({
        width: width,
        height: height,
        longitude: longitude,
        latitude: latitude,
        zoom: zoom
      });
    }
  }, {
    key: "getBounds",
    value: function getBounds(options) {
      var corners = this.getBoundingRegion(options);
      var west = Math.min.apply(Math, (0, _toConsumableArray2.default)(corners.map(function (p) {
        return p[0];
      })));
      var east = Math.max.apply(Math, (0, _toConsumableArray2.default)(corners.map(function (p) {
        return p[0];
      })));
      var south = Math.min.apply(Math, (0, _toConsumableArray2.default)(corners.map(function (p) {
        return p[1];
      })));
      var north = Math.max.apply(Math, (0, _toConsumableArray2.default)(corners.map(function (p) {
        return p[1];
      })));
      return [[west, south], [east, north]];
    }
  }, {
    key: "getBoundingRegion",
    value: function getBoundingRegion() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return (0, _getBounds.default)(this, options.z || 0);
    }
  }]);
  return WebMercatorViewport;
}();

exports.default = WebMercatorViewport;
//# sourceMappingURL=web-mercator-viewport.js.map