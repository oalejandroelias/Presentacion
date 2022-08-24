import { useEffect, useState } from "react";
import { XMLParser } from "fast-xml-parser";

const useGetLayers = () => {

    const [capas, setCapas] = useState([])
    const [baseGeoUrl, setbaseGeoUrl] = useState("http://giscopade.neuquen.gov.ar/geoserver/ows")
    const [resp, setResp] = useState([])

    useEffect(() => {
        const getXMLResponse = async () => {
            setResp( 
                await fetch(baseGeoUrl+"?service=wms&version=1.3.0&request=GetCapabilities")
            .then((response) => response.text())
            .then((textResponse) => {
              const parser = new XMLParser();
              let obj = parser.parse(textResponse);
              setCapas(obj.WMS_Capabilities.Capability.Layer.Layer);
            })
            .catch((error) => {
              console.log(error);
            })
            )
        };

        getXMLResponse();
    }, []);

    return resp;
}

export default useGetLayers