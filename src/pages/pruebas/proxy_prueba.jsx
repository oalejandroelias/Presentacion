import React, { useEffect, useState } from 'react';

function ProxyPrueba() {
    const [data, setData] = useState(null);


    console.log("proxy")

    useEffect(() => {
        // URL del servidor CORS Anywhere
        const corsProxy = 'http://localhost:8080/';
        // URL de la API que quieres acceder
        const apiURL = 'https://geoeducacion.neuquen.gov.ar/geoserver/ows?service=WMS&version=1.3.0&request=GetCapabilities';

        fetch(corsProxy + apiURL)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
}

export default ProxyPrueba;
