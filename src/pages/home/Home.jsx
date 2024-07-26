import React from 'react'
// import Introduccion from '../../components/Introduccion'
// import Pasos from '../../components/Pasos'
import Seccion1 from '../../components/Seccion1'
import Tutorial1 from '../../components/Tutorial1'
import PasosA from '../../components/PasosA'
import Svg from '../../layouts/Svg'
import ModalMap from '../../components/modal/ModalMap'
import Opciones from '../Opciones'
import Galeria from '../Galeria'
import PaginasExternas from '../PaginasExternas'
// import Banner from '../../layouts/Banner'
// import Example from '../Example';
// import Proyectos from '../Publicaciones/Proyectos';
// import Tarjetas from '../Tarjetas/Tarjetas';
import TimeCarousel from '../../components/carousel/TimeCarousel'
import Parallax from '../Parallax'
import Intro from './Intro'
import Diseño from './Diseño'
import DiseñoA from './DiseñoA'
import DiseñoB from './DiseñoB'
import DiseñoBa from './DiseñoBa'
import LinkGis from './LinkGis'

const Home = () => {

  console.log(import.meta.env.VITE_API_URL)
  return (
    <div className="w-full mx-auto overflow-auto pt-0 md:pt-16">

      <div className="">
        <TimeCarousel />
      </div>
      {/* <Intro /> */}
      {/* <Diseño /> */}
      {/* <DiseñoA /> */}
      <DiseñoB />
      <DiseñoBa />
      <LinkGis />
      {/* <Banner /> */}
      {/* <PasosA /> */}
      {/* <Opciones /> */}
      {/* <Galeria /> */}
      {/* <Seccion1 /> */}
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