import React from 'react'
import { useParallaxController, ParallaxProvider, Parallax, useParallax, ParallaxBanner } from 'react-scroll-parallax';
import sig from "./../../public/img/sig_fondo_a.png";

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
    <div style={{heigth: "100vh"}}>
        <Parallax bgImage={sig} strength={400}>
            <div style={{heigth: "100vh"}}>
                <div style={Istyles}>
                    Nuevo GIS
                </div>
            </div>
        </Parallax>
    </div>
  )
}

export default ParallaxA