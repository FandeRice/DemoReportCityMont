// src/leaflet-graticule.d.ts
import * as L from 'leaflet';

declare module 'leaflet' {
  interface LatLngGraticuleOptions {
    interval?: number;
    showLabel?: boolean;
    showLatLabels?: boolean;
    showLngLabels?: boolean;
  }

  function latlngGraticule(options?: LatLngGraticuleOptions): L.Layer;
}
