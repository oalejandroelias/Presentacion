import React, { useState } from "react";
import Map from "../maps/Map";
import {
  Layers,
  TileLayer,
  VectorLayer,
  ImageLayer,
  WMSTile,
} from "../maps/Layers";
import { Style, Icon } from "ol/style";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { osm, vector, image } from "../maps/Source";
import { fromLonLat, get } from "ol/proj";
import GeoJSON from "ol/format/GeoJSON";
import { Controls, FullScreenControl } from "../maps/Controls";
import FeatureStyles from "../maps/Features/Styles";

import mapConfig from "../maps/config.json";

const geojsonObject = mapConfig.geojsonObject;
const geojsonObject2 = mapConfig.geojsonObject2;
const markersLonLat = [mapConfig.kansasCityLonLat, mapConfig.blueSpringsLonLat];
// const base_url = window.location.protocol + "//" + window.location.host;

function addMarkers(lonLatArray) {
  var iconStyle = new Style({
    image: new Icon({
      anchorXUnits: "fraction",
      anchorYUnits: "pixels",
      src: mapConfig.markerImage32,
      //size: 10,
      //imgSize: 100
      scale: 0.09,
    }),
  });
  let features = lonLatArray.map((item) => {
    let feature = new Feature({
      geometry: new Point(fromLonLat(item)),
    });
    feature.setStyle(iconStyle);
    return feature;
  });
  return features;
}

const MapPreview = (props) => {
  const [center, setCenter] = useState(mapConfig.center);
  const [zoom, setZoom] = useState(6.5);

  return (
    <div className="h-full">
      <Map center={fromLonLat(center)} zoom={zoom} name={props.name}>
        <Layers>
          <TileLayer source={osm()} zIndex={0} />
            <TileLayer
              source={WMSTile(props.baseGeoUrl, {
                LAYERS: props.name,
                Tiled: true,
              })}
              zIndex={0}
            />
        </Layers>
        <Controls>
          <FullScreenControl />
        </Controls>
      </Map>
    </div>
  );
};

export default MapPreview;
