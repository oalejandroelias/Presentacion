import { useEffect, useState, useMemo } from "react";
import DataTable from "react-data-table-component";
import { XMLParser } from "fast-xml-parser";
import styled from "styled-components";
import Table from "../components/DataTable";
import useGetLayers from "../hooks/useGetLayers"

const MapsScroll = () => {
    const { data, loading, error} = useGetLayers("http://giscopade.neuquen.gov.ar/geoserver/ows?service=wms&version=1.3.0&request=GetCapabilities")

    if(error){
        console.log(error)
     }

    return(
        <>
            {loading && <div>Loading...</div>}
            {data && <div>{data.map(item => <div>{item}</div>)}</div>}
        </>
    )
}

export default MapsScroll;
