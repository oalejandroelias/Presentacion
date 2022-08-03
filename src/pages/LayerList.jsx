import { useEffect, useState, useMemo } from "react";
import DataTable from "react-data-table-component";
import  {XMLParser} from "fast-xml-parser";
import styled from 'styled-components';
import Table from "../components/DataTable";

const LayerList = () => {

  const clickhandler = name => console.log("delete", name);
  const [capas, setCapas] = useState([])

  useEffect(() => {
    //     fetch("http://giscopade.neuquen.gov.ar/geoserver/Copade/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Copade:nqn_ciudades&maxFeatures=50&outputFormat=application%2Fjson"
    //     // ,{
    //   //     'mode': 'no-cors',
    //   //     'headers': {
    //     //     	'Access-Control-Allow-Origin': '*',
    //     // 	}
    //     // }
    // )
    //         .then(res => res.text())
    //         .then(data => {
    //             console.log(data)
    //             // var xml = new XMLParser().parseFromString(data);
    //             // console.log(xml)
    //         })
    //         .catch(err => console.log(err));

    const getXMLResponse = async () => {
      const resp = await fetch(
        "http://giscopade.neuquen.gov.ar/geoserver/ows?service=wms&version=1.3.0&request=GetCapabilities"
         //'https://gist.githubusercontent.com/Pavneet-Sing/d0f3324f2cd3244a6ac8ffc5e8550102/raw/8ebc801b3e4d4987590958978ae58d3f931193a3/XMLResponse.xml'
      )
        .then((response) => response.text())
        .then((textResponse) => {
          const parser = new XMLParser();
          let obj = parser.parse(textResponse);
          setCapas(obj.WMS_Capabilities.Capability.Layer.Layer);
          //setCapas(obj.person);
     
        })
        .catch((error) => {
          console.log(error);
        });

    };

    getXMLResponse();
  }, []);

const columns = [
  {Name: 'Copade:356_2021_recort', Title: '356_2021_recort', Abstract: ''},
   {Name: 'Copade:NEUQUEN_PROVINCIA', Title: 'Departamentos', Abstract: 'En la siguiente capa se muestran los Departamentos de la Provincia del Neuquén.'},
   {Name: 'Copade:PROVINCIAS0', Title: 'PROVINCIAS', Abstract: ''},
   {Name: 'Copade:Plottier_Topografia_DEM_80cmpix_IGN', Title: 'Plottier_Topografia_DEM_80cmpix_IGN', Abstract: ''},
   {Name: 'Copade:Routers', Title: 'routers', Abstract: 'La presente capa fue provista por la Oficina Provi…Comunicación (OPTIC) de la Provincia del Neuquén.'},
   {Name: 'Copade:acueductos', Title: 'acueductos', Abstract: ''},
   {Name: 'Copade:aeropuertos', Title: 'aeropuertos', Abstract: ''},
   {Name: 'Copade:alimentador_7_62kv', Title: 'Alimentador 7-62kv', Abstract: 'La capa Alimentador 7-62kv fue realizada por la Se… Alta Tensión S.A. (TRANSENER) hasta el año 2020.'},
   {Name: 'Copade:areas_naturales_con_islas', Title: 'Áreas Naturales con Islas', Abstract: 'La presente capa es producto de la asistencia técn…o rutas, ríos y áreas rurales/urbanas adyacentes.'},
   {Name: 'Copade:areas_rurales', Title: 'Áreas Rurales', Abstract: 'La presente capa es producto de la asistencia técn…rutas, ríos y áreas naturales/urbanas adyacentes.'},
   {Name: 'Copade:areas_urbanas1', Title: 'Áreas Urbanas', Abstract: 'La presente capa es producto de la asistencia técn…rutas, ríos y áreas naturales/rurales adyacentes.'},
   {Name: 'Copade:b_populares_nqn', Title: 'Barrios Populares Nqn', Abstract: ''},
   {Name: 'Copade:bancos', Title: 'bancos', Abstract: ''},
   {Name: 'Copade:barrio_san_patricio0', Title: 'Barrio de San Patricio del Chañar', Abstract: 'La presente capa fue creada desde COPADE con infor…icipio de San Patricio del Chañar en el año 2017.'},
   {Name: 'Copade:barrio_senillosa', Title: 'Barrios de Senillosa', Abstract: 'La presente capa fue creada desde COPADE con infor…niente del municipio de Senillosa en el año 2017.'},
   {Name: 'Copade:barrio_v_angostura1', Title: 'Barrio Villa La Angostura', Abstract: 'La presente capa fue creada desde COPADE con infor…l municipio de Villa La Angostura en el año 2017.'},
   {Name: 'Copade:barrios_alumine', Title: 'Barrios de Aluminé', Abstract: 'La presente capa fue creada desde COPADE con infor…veniente del municipio de Aluminé en el año 2017.'},
   {Name: 'Copade:barrios_andacollo', Title: 'Barrios de Andacollo', Abstract: 'La presente capa fue creada desde COPADE con infor…niente del municipio de Andacollo en el año 2017.'},
   {Name: 'Copade:barrios_anielo', Title: 'Barrios de Añelo', Abstract: 'La presente capa fue creada desde COPADE con infor…roveniente del municipio de Añelo en el año 2017.'},
   {Name: 'Copade:barrios_centenario0', Title: 'Barrios de Centenario', Abstract: 'La presente capa fue creada desde COPADE con infor…iente del municipio de Centenario en el año 2017.'},
   {Name: 'Copade:barrios_chos_malal', Title: 'Barrios de Chos Malal', Abstract: 'La presente capa fue creada desde COPADE con infor…iente del municipio de Chos Malal en el año 2017.'},
];

  console.log(capas);

  return (
    <div className="lg:w-5/6 w-full mx-auto overflow-auto">
   
    <Table 
    data={columns} click={clickhandler} />
    </div>
  );
};

export default LayerList;
