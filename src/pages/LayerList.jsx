import {useEffect} from 'react'
import DataTable from 'react-data-table-component';

const LayerList = () => {

    useEffect(() => {
        fetch("http://localhost:8082/geoserver/Copade/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Copade%3Ageoformas_vistaalegre&maxFeatures=50&outputFormat=application%2Fjson"
        // ,{
	    //     'mode': 'no-cors',
	    //     'headers': {
        //     	'Access-Control-Allow-Origin': '*',
        // 	}
        // }
    )
            .then(res => res.text())
            .then(data => {
                console.log(data)
                // var xml = new XMLParser().parseFromString(data); 
                // console.log(xml)
            })
            .catch(err => console.log(err));
    }, [])

  return (
    <div>LayerList</div>
  )
}

export default LayerList