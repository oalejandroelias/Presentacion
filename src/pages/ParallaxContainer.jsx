import React from 'react'
import { ParallaxProvider  } from 'react-scroll-parallax'
import ScrollParallax from '../pages/ScrollParallax'
import ParallaxHorizontal from '../pages/ParallaxHorizontal'

const ParallaxContainer = () => {
  return (
    // <ParallaxProvider>
    //     <ScrollParallax/>
    // </ParallaxProvider>
    <div className="w-full mx-auto overflow-auto mt-16">
        <ParallaxProvider scrollAxis="horizontal">
            <ParallaxHorizontal />
        </ParallaxProvider>
    </div>
  )
}

export default ParallaxContainer