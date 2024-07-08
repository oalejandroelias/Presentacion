import React from 'react'
import Geoservicios from './Geoservicios'
import TreeLayers from './TreeLayers'

const Servicios = () => {
    return (
        <div className="container px-6 py-40 mx-auto align-middle">

            <h1 className="text-3xl font-semibold text-center lg:text-4xl dark:text-white mb-10">
                Servicios y Capas
            </h1>

            <h2 className="text-1xl font-semibold text-left lg:text-2xl text-black dark:text-white mb-5">
                COPADE pone a disposición sus geoservicios
            </h2>
            <Geoservicios />
            <TreeLayers />
        </div>
    )
}

export default Servicios
