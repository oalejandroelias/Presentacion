import { useEffect, useState, useMemo } from "react";
import { XMLParser } from "fast-xml-parser";
import styled from "styled-components";
import Table from "../components/DataTable";
import axios from "axios";

const LayerList = () => {
  const clickhandler = (name) => console.log("delete", name);
  const [capas, setCapas] = useState([]);

  var base_url = import.meta.env.VITE_API_URL;

  //const [baseGeoUrl, setbaseGeoUrl] = useState("http://giscopade.neuquen.gov.ar/geoserver/wms?request=getCapabilities")
  const [baseGeoUrl, setbaseGeoUrl] = useState(base_url + "/geoserver/wms?request=getCapabilities")
  const [owsGeoUrl, setOwsGeoUrl] = useState(base_url + "/geoserver/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=")

  //const baseGeoUrl = "http://sigepen.neuquen.gov.ar:8080/geoserver/ows?service=wms&version=1.3.0&request=GetCapabilities";
  //const baseGeoUrl = "http://aicsig.neuquen.gov.ar:8080/geoserver/ows?service=wms&version=1.3.0&request=GetCapabilities";

  useEffect(() => {
    // const getXMLResponse = async () => {
    //   const resp = await fetch(baseGeoUrl+"?service=wms&version=1.3.0&request=GetCapabilities")
    //     .then((response) => response.text())
    //     .then((textResponse) => {
    //       const parser = new XMLParser();
    //       let obj = parser.parse(textResponse);
    //       setCapas(obj.WMS_Capabilities.Capability.Layer.Layer);
    //       // console.log("AAA")
    //       // console.log(obj.WMS_Capabilities.Capability)
    //       // console.table(obj.WMS_Capabilities.Capability.Layer.Layer[0])
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // };

    const getXMLResponse = async () => {
      const resp = axios.get(baseGeoUrl, {
        headers: {
          'Content-Type': 'application/xml'
        }
      }).then((response) => {

        const parser = new XMLParser();
        let obj = parser.parse(response.data);
        console.log("entro")
        console.log(obj)
        console.log(obj.WMS_Capabilities.Capability.Layer.Layer)
        setCapas(obj.WMS_Capabilities.Capability.Layer.Layer);

      })
        .catch((error) => {
          console.log(error);
        });
    };

    getXMLResponse();
  }, []);

  const columns = [
    { Name: "Copade:356_2021_recort", Title: "356_2021_recort", Abstract: "" },
    {
      Name: "Copade:regiones",
      Title: "regiones",
      Abstract:
        "regiones desc.",
    },

  ];

  return (
    <>

      <div className="lg:w-5/6 w-full mx-auto overflow-auto mt-20">


        {/* <Table data={columns} baseGeoUrl={baseGeoUrl} click={clickhandler} /> */}
        <Table data={capas} baseGeoUrl={baseGeoUrl} owsGeoUrl={owsGeoUrl} click={clickhandler} />

      </div>
    </>
  );
};

export default LayerList;
