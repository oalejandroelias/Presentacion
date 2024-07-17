import React from 'react'
import Tarjetas from '../Tarjetas/Tarjetas'
import Carousel from '../../components/carousel/Carousel'
import Regiones from '../Regiones'
import TimeCarousel from '../../components/carousel/TimeCarousel'
import BasicBar from '../../components/charts/BasicBar'

const Mapas = () => {
    return (
        <>
            <section className="mt-20">
                <div className="container px-6 py-10 mx-auto">

                    <Tarjetas />

                    <div className=''>

                        <Carousel />

                    </div>

                    {/* <div className='container flex justify-center '>
                        <Regiones />
                    </div> */}

                </div>

                <BasicBar />
            </section>

        </>
    )
}

export default Mapas
