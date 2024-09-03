import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import sig_1 from '../../img/sig_1.jpeg'
import sig_2 from '../../img/sig_2.png'
import sig_3 from '../../img/sig_3.png'
import sig_4 from '../../img/mosaico_neuquen.jpg'

// Import Swiper styles
// import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './TimeCarousel.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const TimeCarousel = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        // progressCircle.current.style.setProperty('--progress', 1 - progress);
        // progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            //return '<span className="' + className + '">' + (index + 1) + '</span>';
            //return '<span className="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <>
            <section className="">
                <div className="">
                    <Swiper
                        slidesPerView={1}
                        //cssMode={true}
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2000,
                            //disableOnInteraction: true,
                            pauseOnMouseEnter: true,
                        }}
                        //pagination={pagination}
                        pagination={true}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}

                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="relative text-center">
                                <img src={sig_1} className='' />
                                <div className="w-full absolute top-0 text-center mt-20 ">

                                    <h2 className="text-4xl font-bold text-white text-center ">
                                        Geoserver
                                    </h2>

                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide><img src={sig_2} /></SwiperSlide>
                        <SwiperSlide><img src={sig_3} /></SwiperSlide>
                        <SwiperSlide><img src={sig_4} /></SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    );
}

export default TimeCarousel
