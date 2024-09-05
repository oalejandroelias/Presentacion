import React from 'react'
import Geoservicios from './Geoservicios'
import TreeLayers from './TreeLayers'
import Regiones from '../Regiones'
import LayerList from '../LayerList'
import service from '../../../src/img/geoserver_service.png'
import Servicios_descripcion from './Servicios_descripcion'

const Servicios = () => {
    return (
        <div className="container mx-auto py-16 font-manrope text-default">

            <h1 className="text-3xl font-semibold text-center lg:text-4xl dark:text-white mb-10 py-10">
                Servicios y Capas
            </h1>

            <h2 className="px-6 text-1xl font-semibold text-left lg:text-2xl text-black dark:text-white mb-5">
                COPADE pone a disposición sus geoservicios
            </h2>
            <div className="w-3/4 mx-auto align-middle grid grid-cols-1 gap-8 md:grid-cols-3">
                <div>
                    <Geoservicios />
                </div>
                <div className="col-span-2 sm:text-left text-center container px-6 mx-auto">
                    <div className=" mx-auto align-middle grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className='place-content-center'>
                            <h2 className=" text-xl title-font font-medium mb-2">Como utilizar nuestros servicios?</h2>
                            <p className="leading-relaxed text-lg">Puede utilizar nuestros servicios para acceder a nuestras capas desde herramientas como QGIS, ArcGIS, etc.</p>
                        </div>
                        <img className='place-content-center' src={service} />
                    </div>
                </div>

                <div className="sm:text-left text-center container px-6 mx-auto align-middle content-center">
                    <h2 className="text-xl title-font font-medium mb-2">Visualizar capas</h2>
                    <p className="leading-relaxed text-lg">Puede buscar alguna capa especifica navegando en el directorio de capas o utilzando el buscador.</p>

                </div>

                <div className="col-span-2 sm:text-left text-left container px-6 mx-auto align-middle content-center">
                    <TreeLayers />
                </div>

                {/* <Regiones /> */}

            </div>
            <div className='flex items-center justify-center'>
                <LayerList />
            </div>

            <Servicios_descripcion />

        </div>
    )
}

export default Servicios
