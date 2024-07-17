import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import a from '../../../public/mapas/1.jpeg'
import b from '../../../public/mapas/2.jpeg'
import c from '../../../public/mapas/3.jpeg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

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
                        <SwiperSlide>
                            <img src={a} />
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
                        </SwiperSlide>

                    </Swiper>
                </div>
            </section>
        </>
    );
}

export default Carousel
