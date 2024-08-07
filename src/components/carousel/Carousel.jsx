import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import mapa_regionalizacion from "../../../public/img/mapas/mapa-regionalizacion.jpg";

import a from '../../../src/img/mapas/1.jpeg'
import b from '../../../src/img/mapas/2.jpeg'
import c from '../../../src/img/mapas/3.jpeg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const proyect_url = import.meta.env.VITE_PROYECT_URL;

const mapas = [
    {
        image: mapa_regionalizacion,
        title: "SIG Copade",
        description: "Sistema de Información Geográfico",
        url: proyect_url + "/img/mapas/mapa-regionalizacion.jpg",
    },
    {
        image: mapa_regionalizacion,
        title: "Página Copade",
        description: "Sistema de Información Geográfico",
        url: proyect_url + "/img/mapas/mapa-regionalizacion.jpg",
    },
    {
        image: mapa_regionalizacion,
        title: "Cultivar en la Ciudad",
        description: "Sistema de Información Geográfico",
        url: proyect_url + "/img/mapas/mapa-regionalizacion.jpg"
    },
    {
        image: mapa_regionalizacion,
        title: "Cultivar en la Ciudad",
        description: "Sistema de Información Geográfico",
        url: proyect_url + "/img/mapas/mapa-regionalizacion.jpg"
    },
    {
        image: mapa_regionalizacion,
        title: "Cultivar en la Ciudad",
        description: "Sistema de Información Geográfico",
        url: proyect_url + "/img/mapas/mapa-regionalizacion.jpg"
    },
];

const Carousel = () => {
    return (
        <>
            <section className="">
                <div className="w-full lg:w-2/4 px-0 py-24 mx-auto">
                    <Swiper
                        className="swipermaps"
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}

                    >

                        {mapas.map((proyecto, index) => (

                            <SwiperSlide className='h-96'>
                                <a target="_blank" href={proyecto.url}>
                                    <img src={proyecto.image} />
                                </a>
                            </SwiperSlide>

                        ))}
                        {/* <SwiperSlide className='h-96'>
                            <a target="_blank" href='http://localhost:4001/img/mapas/mapa-regionalizacion.jpg'>
                                <img src={a} />
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={b} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={c} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={a} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={a} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={a} />
                        </SwiperSlide> */}

                    </Swiper>
                </div>
            </section>
        </>
    );
}

export default Carousel
