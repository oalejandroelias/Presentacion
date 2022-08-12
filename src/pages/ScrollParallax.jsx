import React from 'react'
import { useParallaxController, ParallaxProvider, Parallax, useParallax, ParallaxBanner } from 'react-scroll-parallax';
import sig from "./../../public/img/sig_fondo_a.png";

const ScrollParallax = () => {
    const parallax = useParallax<HTMLDivElement>({
        rotate: [0, 360],
      });
      return (
        <ParallaxBanner
        layers={[{ image: sig, speed: 10 }]}
        className="aspect-[1/1]"
      />
      );
  };

export default ScrollParallax