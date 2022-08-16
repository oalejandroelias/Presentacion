import React, { Component } from 'react'
import { ParallaxProvider  } from 'react-scroll-parallax'
import  ParallaxHorizontal from './ParallaxHorizontal'
import Parallax from '../Parallax'


const ParallaxContainer = () => {
  return (
    <ParallaxProvider>
      <Parallax/>

        <ParallaxHorizontal />
      
    </ParallaxProvider>
  )
}

export default ParallaxContainer