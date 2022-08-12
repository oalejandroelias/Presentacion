import React from 'react'
import Introduccion from '../components/Introduccion'
import Pasos from '../components/Pasos'
import Seccion1 from '../components/Seccion1'
import Tutorial1 from '../components/Tutorial1'
import PasosA from '../components/PasosA'
import Svg from '../layouts/Svg'
import Test from '../layouts/Test'
import ModalMap from '../components/modal/ModalMap'
import Opciones from './Opciones'
import Galeria from './Galeria'
import Presentacion from './Presentacion'
import PaginasExternas from './PaginasExternas'
import Banner from '../layouts/Banner'

const Home = () => {
  return (
    <div className="w-full mx-auto overflow-auto mt-16">
        <Banner />
        
        {/* <Pasos /> */}
        <Opciones />
        <Galeria />
        <Seccion1 />
        <Tutorial1 />
        {/* <Svg /> */}
    </div>
  )
}

export default Home