import { useEffect, useState } from "react";
import { XMLParser } from "fast-xml-parser";
import axios from "axios";
const useGetLayers = (url) => {
  // const [capas, setCapas] = useState([]);
  // const [baseGeoUrl, setbaseGeoUrl] = useState(
  //   "http://giscopade.neuquen.gov.ar/geoserver/ows"
  // );

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);

        await fetch(
          url
        )
          .then((response) => response.text())
          .then((textResponse) => {
            const parser = new XMLParser();
            let obj = parser.parse(textResponse);
            setData(obj.WMS_Capabilities.Capability.Layer.Layer);
          });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    });
  }, [url]);

  return { data, error, loading };
};

export default useGetLayers;
