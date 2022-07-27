import React from 'react'
import Introduccion from '../components/Introduccion'
import Pasos from '../components/Pasos'
import Seccion1 from '../components/Seccion1'
import Tutorial1 from '../components/Tutorial1'
import PasosA from '../components/PasosA'

const Home = () => {
  return (
    <div>
        <Introduccion />
        <Tutorial1 />
        <Seccion1 />
        <Pasos />
        <PasosA />
    </div>
  )
}

export default Home