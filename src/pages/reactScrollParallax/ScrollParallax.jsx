import React from 'react'
import { useParallaxController, ParallaxProvider, Parallax, useParallax, ParallaxBanner } from 'react-scroll-parallax';
import sig from "./../../../public/img/sig_fondo_a.png";

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
  return <img src={sig} onLoad={() => parallaxController.update()} />;
  };

export default ScrollParallax