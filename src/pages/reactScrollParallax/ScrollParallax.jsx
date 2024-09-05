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

const ScrollParallax = () => {
  const parallaxController = useParallaxController();
  return <ParallaxBanner
    layers={[{ sig, speed: -15 }]}
    className="aspect-[2/1]"
  />
};

export default ScrollParallax