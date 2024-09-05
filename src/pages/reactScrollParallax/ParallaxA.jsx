import React from 'react'
import { useParallaxController, ParallaxProvider, Parallax, useParallax, ParallaxBanner } from 'react-scroll-parallax';
import sig from "./../../img/mosaico_neuquen.jpg";

const Istyles = {
    background: '#fff',
    padding: 20,
    position: 'absolute',
    top: "50%",
    left: "50%",
    transform: 'translate(-50%m -50%)'
}

const ParallaxA = () => {
    return (
        <ParallaxBanner
            layers={[{ image: '/static/banner.jpg', speed: -15 }]}
            className="aspect-[2/1]"
        />
    );
}

export default ParallaxA