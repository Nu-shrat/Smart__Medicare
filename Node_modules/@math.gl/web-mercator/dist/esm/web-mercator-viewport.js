import { createMat4 } from './math-utils';
import { zoomToScale, pixelsToWorld, lngLatToWorld, worldToLngLat, worldToPixels, altitudeToFovy, fovyToAltitude, DEFAULT_ALTITUDE, getProjectionMatrix, getDistanceScales, getViewMatrix } from './web-mercator-utils';
import fitBounds from './fit-bounds';
import getBounds from './get-bounds';
import * as mat4 from 'gl-matrix/mat4';
import * as vec2 from 'gl-matrix/vec2';
import * as vec3 from 'gl-matrix/vec3';
export default class WebMercatorViewport {
  constructor({
    width,
    height,
    latitude = 0,
    longitude = 0,
    zoom = 0,
    pitch = 0,
    bearing = 0,
    altitude = null,
    fovy = null,
    position = null,
    nearZMultiplier = 0.02,
    farZMultiplier = 1.01
  } = {
    width: 1,
    height: 1
  }) {
    width = width || 1;
    height = height || 1;

    if (fovy === null && altitude === null) {
      altitude = DEFAULT_ALTITUDE;
      fovy = altitudeToFovy(altitude);
    } else if (fovy === null) {
      fovy = altitudeToFovy(altitude);
    } else if (altitude === null) {
      altitude = fovyToAltitude(fovy);
    }

    const scale = zoomToScale(zoom);
    altitude = Math.max(0.75, altitude);
    const distanceScales = getDistanceScales({
      longitude,
      latitude
    });
    const center = lngLatToWorld([longitude, latitude]);
    center[2] = 0;

    if (position) {
      vec3.add(center, center, vec3.mul([], position, distanceScales.unitsPerMeter));
    }

    this.projectionMatrix = getProjectionMatrix({
      width,
      height,
      pitch,
      fovy,
      nearZMultiplier,
      farZMultiplier
    });
    this.viewMatrix = getViewMatrix({
      height,
      scale,
      center,
      pitch,
      bearing,
      altitude
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

  _initMatrices() {
    const {
      width,
      height,
      projectionMatrix,
      viewMatrix
    } = this;
    const vpm = createMat4();
    mat4.multiply(vpm, vpm, projectionMatrix);
    mat4.multiply(vpm, vpm, viewMatrix);
    this.viewProjectionMatrix = vpm;
    const m = createMat4();
    mat4.scale(m, m, [width / 2, -height / 2, 1]);
    mat4.translate(m, m, [1, -1, 0]);
    mat4.multiply(m, m, vpm);
    const mInverse = mat4.invert(createMat4(), m);

    if (!mInverse) {
      throw new Error('Pixel project matrix not invertible');
    }

    this.pixelProjectionMatrix = m;
    this.pixelUnprojectionMatrix = mInverse;
  }

  equals(viewport) {
    if (!(viewport instanceof WebMercatorViewport)) {
      return false;
    }

    return viewport.width === this.width && viewport.height === this.height && mat4.equals(viewport.projectionMatrix, this.projectionMatrix) && mat4.equals(viewport.viewMatrix, this.viewMatrix);
  }

  project(xyz, {
    topLeft = true
  } = {}) {
    const worldPosition = this.projectPosition(xyz);
    const coord = worldToPixels(worldPosition, this.pixelProjectionMatrix);
    const [x, y] = coord;
    const y2 = topLeft ? y : this.height - y;
    return xyz.length === 2 ? [x, y2] : [x, y2, coord[2]];
  }

  unproject(xyz, {
    topLeft = true,
    targetZ = undefined
  } = {}) {
    const [x, y, z] = xyz;
    const y2 = topLeft ? y : this.height - y;
    const targetZWorld = targetZ && targetZ * this.distanceScales.unitsPerMeter[2];
    const coord = pixelsToWorld([x, y2, z], this.pixelUnprojectionMatrix, targetZWorld);
    const [X, Y, Z] = this.unprojectPosition(coord);

    if (Number.isFinite(z)) {
      return [X, Y, Z];
    }

    return Number.isFinite(targetZ) ? [X, Y, targetZ] : [X, Y];
  }

  projectPosition(xyz) {
    const [X, Y] = lngLatToWorld(xyz);
    const Z = (xyz[2] || 0) * this.distanceScales.unitsPerMeter[2];
    return [X, Y, Z];
  }

  unprojectPosition(xyz) {
    const [X, Y] = worldToLngLat(xyz);
    const Z = (xyz[2] || 0) * this.distanceScales.metersPerUnit[2];
    return [X, Y, Z];
  }

  projectFlat(lngLat) {
    return lngLatToWorld(lngLat);
  }

  unprojectFlat(xy) {
    return worldToLngLat(xy);
  }

  getMapCenterByLngLatPosition({
    lngLat,
    pos
  }) {
    const fromLocation = pixelsToWorld(pos, this.pixelUnprojectionMatrix);
    const toLocation = lngLatToWorld(lngLat);
    const translate = vec2.add([], toLocation, vec2.negate([], fromLocation));
    const newCenter = vec2.add([], this.center, translate);
    return worldToLngLat(newCenter);
  }

  getLocationAtPoint({
    lngLat,
    pos
  }) {
    return this.getMapCenterByLngLatPosition({
      lngLat,
      pos
    });
  }

  fitBounds(bounds, options = {}) {
    const {
      width,
      height
    } = this;
    const {
      longitude,
      latitude,
      zoom
    } = fitBounds(Object.assign({
      width,
      height,
      bounds
    }, options));
    return new WebMercatorViewport({
      width,
      height,
      longitude,
      latitude,
      zoom
    });
  }

  getBounds(options) {
    const corners = this.getBoundingRegion(options);
    const west = Math.min(...corners.map(p => p[0]));
    const east = Math.max(...corners.map(p => p[0]));
    const south = Math.min(...corners.map(p => p[1]));
    const north = Math.max(...corners.map(p => p[1]));
    return [[west, south], [east, north]];
  }

  getBoundingRegion(options = {}) {
    return getBounds(this, options.z || 0);
  }

}
//# sourceMappingURL=web-mercator-viewport.js.map