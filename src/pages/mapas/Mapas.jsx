import React from 'react'
import Tarjetas from '../Tarjetas/Tarjetas'
import Carousel from '../../components/carousel/Carousel'
import Regiones from '../Regiones'
import TimeCarousel from '../../components/carousel/TimeCarousel'

const Mapas = () => {
    return (
        <>
            <section className="bg-white dark:bg-gray-900 mt-20">
                <div className="container px-6 py-10 mx-auto">

                    <Tarjetas />

                    <div className=''>

                        <Carousel />
                        <TimeCarousel />
                    </div>

                    {/* <div className='container flex justify-center '>
                        <Regiones />
                    </div> */}

                </div>
            </section>

        </>
    )
}

export default Mapas
