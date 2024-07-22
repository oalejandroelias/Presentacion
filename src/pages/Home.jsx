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
import PaginasExternas from './PaginasExternas'
import Banner from '../layouts/Banner'
import Example from './Example';
import Proyectos from './Publicaciones/Proyectos';
import Tarjetas from './Tarjetas/Tarjetas';
import TimeCarousel from '../components/carousel/TimeCarousel'
import Parallax from './Parallax'

const Home = () => {

  console.log(import.meta.env.VITE_API_URL)
  return (
    <div className="w-full mx-auto overflow-auto pt-0 md:pt-16">

      <div className="">
        <TimeCarousel />
      </div>
      {/* <Banner /> */}
      <Pasos />
      <Opciones />
      {/* <Galeria /> */}
      <Seccion1 />
      {/* <Tarjetas /> */}
      {/* <Example /> */}
      {/* <Parallax /> */}
      {/* <Svg /> */}
      {/* <Tutorial1 /> */}
      {/* <Proyectos /> */}


    </div>
  )
}

export default Home