import { useEffect, useState, useMemo } from "react";
import { XMLParser } from "fast-xml-parser";
import styled from "styled-components";
import Table from "../components/DataTable";
import axios from "axios";

const LayerList = () => {
  const clickhandler = (name) => console.log("delete", name);
  const [capas, setCapas] = useState([]);

  var base_url = window.location.protocol + "//" + window.location.host;

  //const [baseGeoUrl, setbaseGeoUrl] = useState("http://giscopade.neuquen.gov.ar/geoserver/wms?request=getCapabilities")
  const [baseGeoUrl, setbaseGeoUrl] = useState(base_url + "/geoserver/wms?request=getCapabilities")

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
      Name: "Copade:NEUQUEN_PROVINCIA",
      Title: "Departamentos",
      Abstract:
        "En la siguiente capa se muestran los Departamentos de la Provincia del Neuquén.",
    },
    { Name: "Copade:PROVINCIAS0", Title: "PROVINCIAS", Abstract: "" },
    {
      Name: "Copade:Plottier_Topografia_DEM_80cmpix_IGN",
      Title: "Plottier_Topografia_DEM_80cmpix_IGN",
      Abstract: "",
    },
    {
      Name: "Copade:Routers",
      Title: "routers",
      Abstract:
        "La presente capa fue provista por la Oficina Provi…Comunicación (OPTIC) de la Provincia del Neuquén.",
    },
    { Name: "Copade:acueductos", Title: "acueductos", Abstract: "" },
    { Name: "Copade:aeropuertos", Title: "aeropuertos", Abstract: "" },
    {
      Name: "Copade:alimentador_7_62kv",
      Title: "Alimentador 7-62kv",
      Abstract:
        "La capa Alimentador 7-62kv fue realizada por la Se… Alta Tensión S.A. (TRANSENER) hasta el año 2020.",
    },
    {
      Name: "Copade:areas_naturales_con_islas",
      Title: "Áreas Naturales con Islas",
      Abstract:
        "La presente capa es producto de la asistencia técn…o rutas, ríos y áreas rurales/urbanas adyacentes.",
    },
    {
      Name: "Copade:areas_rurales",
      Title: "Áreas Rurales",
      Abstract:
        "La presente capa es producto de la asistencia técn…rutas, ríos y áreas naturales/urbanas adyacentes.",
    },
    {
      Name: "Copade:areas_urbanas1",
      Title: "Áreas Urbanas",
      Abstract:
        "La presente capa es producto de la asistencia técn…rutas, ríos y áreas naturales/rurales adyacentes.",
    },
    {
      Name: "Copade:b_populares_nqn",
      Title: "Barrios Populares Nqn",
      Abstract: "",
    },
    { Name: "Copade:bancos", Title: "bancos", Abstract: "" },
    {
      Name: "Copade:barrio_san_patricio0",
      Title: "Barrio de San Patricio del Chañar",
      Abstract:
        "La presente capa fue creada desde COPADE con infor…icipio de San Patricio del Chañar en el año 2017.",
    },
    {
      Name: "Copade:barrio_senillosa",
      Title: "Barrios de Senillosa",
      Abstract:
        "La presente capa fue creada desde COPADE con infor…niente del municipio de Senillosa en el año 2017.",
    },
    {
      Name: "Copade:barrio_v_angostura1",
      Title: "Barrio Villa La Angostura",
      Abstract:
        "La presente capa fue creada desde COPADE con infor…l municipio de Villa La Angostura en el año 2017.",
    },
    {
      Name: "Copade:barrios_alumine",
      Title: "Barrios de Aluminé",
      Abstract:
        "La presente capa fue creada desde COPADE con infor…veniente del municipio de Aluminé en el año 2017.",
    },
    {
      Name: "Copade:barrios_andacollo",
      Title: "Barrios de Andacollo",
      Abstract:
        "La presente capa fue creada desde COPADE con infor…niente del municipio de Andacollo en el año 2017.",
    },
    {
      Name: "Copade:barrios_anielo",
      Title: "Barrios de Añelo",
      Abstract:
        "La presente capa fue creada desde COPADE con infor…roveniente del municipio de Añelo en el año 2017.",
    },
    {
      Name: "Copade:barrios_centenario0",
      Title: "Barrios de Centenario",
      Abstract:
        "La presente capa fue creada desde COPADE con infor…iente del municipio de Centenario en el año 2017.",
    },
    {
      Name: "Copade:barrios_chos_malal",
      Title: "Barrios de Chos Malal",
      Abstract:
        "La presente capa fue creada desde COPADE con infor…iente del municipio de Chos Malal en el año 2017.",
    },
  ];

  return (
    <div className="lg:w-5/6 w-full mx-auto overflow-auto mt-20">
      <Table data={capas} baseGeoUrl={baseGeoUrl} click={clickhandler} />
    </div>
  );
};

export default LayerList;
