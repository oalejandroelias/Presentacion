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
import PaginasExternas from './PaginasExternas'
import Banner from '../layouts/Banner'
import blue_arrow from '../../public/img/blue_arrow.svg'
import TreeLayers from './TreeLayers';
import Example from './Example';
import Proyectos from './Publicaciones/Proyectos';
import Tarjetas from './Tarjetas/Tarjetas';

const Home = () => {
  return (
    <div className="w-full mx-auto overflow-auto pt-16">

      <Banner />
      {/* <Pasos /> */}

      <Opciones />

      {/* <Galeria /> */}
      <Seccion1 />
      {/* <Tarjetas /> */}
      {/* <Example /> */}
      {/* <ScrollParallax /> */}
      {/* <Svg /> */}
      {/* <Tutorial1 /> */}
      {/* <Proyectos /> */}

      <ScrollToTop className="bg-inherit shadow-none" smooth component={<img src={blue_arrow} />} />
    </div>
  )
}

export default Home