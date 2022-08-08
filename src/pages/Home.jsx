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

const Home = () => {
  return (
    <div>
        <Introduccion />
        {/* <PaginasExternas /> */}
        <Presentacion />
        <Pasos />
        <Opciones />
        <Galeria />
        {/* <Svg /> */}
    </div>
  )
}

export default Home