import React from 'react'
import ScrollToTop from "react-scroll-to-top";
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
import blue_arrow from '../../public/img/blue_arrow.svg'
import TreeLayers from './TreeLayers';

const Home = () => {
  return (
    <div className="w-full mx-auto overflow-auto pt-16">
      <Banner />
      {/* <Pasos /> */}
      <TreeLayers />
      <Opciones />
      <Galeria />
      <Seccion1 />
      {/* <ScrollParallax /> */}
      {/* <Tutorial1 /> */}
      {/* <Svg /> */}
      <ScrollToTop className="bg-inherit shadow-none" smooth component={<img src={blue_arrow} />} />
    </div>
  )
}

export default Home