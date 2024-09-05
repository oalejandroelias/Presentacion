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
import Regiones from '../RegionesA'
import demo from '../../img/gifs/prueba.gif'
import ParallaxA from '../reactScrollParallax/ParallaxA'
import ScrollParallax from '../reactScrollParallax/ScrollParallax'
import fondo_nqn from "../../img/mosaico_neuquen.jpg"
import LinksGisa from './LinksGisa'

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
      {/* <LinkGis /> */}
      <LinksGisa />
      <div className="relative w-full h-80 my-20 flex justify-center">
        {/* Capa de la imagen de fondo con efecto de brillo */}
        <div
          className="absolute inset-0 bg-cover bg-fixed bg-center bg-no-repeat brightness-50"
          style={{ backgroundImage: `url(${fondo_nqn})` }}
        ></div>

        {/* Capa de contenido encima de la imagen */}
        <div className="relative w-3/4 z-10 flex items-center justify-center">
          <div className="container px-6 py-16 text-center">
            <h1 className="text-3xl font-bold text-center text-white lg:text-4xl">
              ¡Bienvenidos al portal del Sistema de Información Geográfica de la Subsecretaría del COPADE de la Provincia de Neuquén!
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="container px-6 py-16 mx-auto text-center">
          <div className="flex mx-auto text-center">
            <p>
              En nuestro sitio podrás:

              →Visualizar y analizar datos geográficos
              → Descargar capas en diversos formatos
              → Acceder a geoservicios Web Map Service (WMS) y Web Feature Service (WFS): Integra las capas geográficas en tus aplicaciones a través de servicios web estandarizados por OGC.
              → Consultar y descargar cartografía temática: Accede a mapas temáticos detallados sobre diferentes aspectos de la Provincia.
              → Acceder a los visores SIG de otros organismos provinciales: Amplía tu perspectiva con los recursos geoespaciales de otros entes provinciales.

              ¡Te invitamos a explorar y aprovechar al máximo los recursos disponibles!

            </p>


          </div>
        </div>
      </div>

      <DiseñoB />
      <DiseñoBa />





      {/* <Regiones /> */}

      {/* <img src={demo} alt="loading..." /> */}

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

      {/* <ParallaxA /> */}


    </div>
  )
}

export default Home