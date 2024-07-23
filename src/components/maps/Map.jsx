import { useRef, useState, useEffect } from "react"
import "./styles/Map.css";
import MapContext from "./context/MapContext";
//import * as ol from "ol";
import Map from "ol/Map";
import WMSCapabilities from 'ol/format/WMSCapabilities'
import View from "ol/View";
import * as olProj from 'ol/proj';
import { XMLParser } from "fast-xml-parser";

const Mapa = ({ children, zoom, center, name }) => {
	const mapRef = useRef();
	const [map, setMap] = useState(null);
	const baseUrl = import.meta.env.VITE_API_URL + "/geoserver/ows?service=wms&version=1.3.0&request=GetCapabilities";
	//var base_url = import.meta.env.VITE_API_URL;
	const [layers, setLayers] = useState([])

	// on component mount
	useEffect(() => {
		let options = {
			view: new View({ zoom, center }),
			layers: [],
			controls: [],
			overlays: []
		};

		let mapObject = new Map(options);
		mapObject.setTarget(mapRef.current);
		setMap(mapObject);



		return () => mapObject.setTarget(undefined);
	}, []);

	// zoom change handler
	useEffect(() => {
		if (!map) return;

		/******* */
		const getXMLResponse = async () => {
			const parser = new WMSCapabilities();
			await fetch(baseUrl)
				.then((response) => response.text())
				.then((textResponse) => {

					var result = parser.read(textResponse);

					var Layers = result.Capability.Layer.Layer;
					var extent;

					Layers.map((layer) => {
						//var layerobj = Layers[i];
						// var capa = layer.Name.split(":");
						// var name_aux = capa[1];

						var name_aux = layer.Name;


						if (name_aux === undefined) {
							name_aux = capa;
						}

						//if (name_aux == "Copade:" + name || name_aux == name) {
						if (name_aux == name) {
							extent = layer.BoundingBox[0].extent;
							//Tranformo la projeccion
							extent = olProj.transformExtent(
								extent,
								olProj.get("EPSG:4326"),
								olProj.get("EPSG:3857")
							);
							map.getView().fit(extent, { duration: 1000, size: map.getSize() });
						}
					})

				})
				.catch((error) => {
					console.log(error);
				});
		}

		getXMLResponse();

		/******* */

	}, [map]);

	// center change handler
	// useEffect(() => {
	// 	if (!map) return;

	// 	map.getView().setCenter(center)
	// }, [center])

	return (
		<MapContext.Provider value={{ map }}>
			<div ref={mapRef} className="ol-map h-full">
				{children}
			</div>
		</MapContext.Provider>
	)
}

export default Mapa;