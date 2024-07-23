import React from 'react'
import Geoservicios from './Geoservicios'
import TreeLayers from './TreeLayers'
import Regiones from '../Regiones'
import LayerList from '../LayerList'

const Servicios = () => {
    return (
        <div className="container mx-auto ">
            <div className=" mx-auto align-middle grid grid-cols-1 gap-8 md:grid-cols-2">

                <h1 className="text-3xl font-semibold text-center lg:text-4xl dark:text-white mb-10">
                    Servicios y Capas
                </h1>

                <h2 className="px-6 text-1xl font-semibold text-left lg:text-2xl text-black dark:text-white mb-5">
                    COPADE pone a disposición sus geoservicios
                </h2>
                {/* <Geoservicios />
                <TreeLayers /> */}
                {/* <Regiones /> */}

            </div>
            <div className='flex items-center justify-center'>
                <LayerList />
            </div>

        </div>
    )
}

export default Servicios
