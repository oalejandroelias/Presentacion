// App.js
import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import MapPreview from "../../components/map_preview/MapPreview";
import mapa_regionalizacion from "../../../public/img/mapa-regionalizacion.jpg";

import js from '../../../public/img/js_logo.png'
import ol from '../../../public/img/ol_logo.svg'

function App(props) {
  const deckDivRef = useRef(null); // referencia al contenedor del deck
  const deckRef = useRef(null); // referencia a la instancia de Reveal.js

  const position = props?.position ? props.position : "absolute";

  useEffect(() => {
    // Previene la inicialización doble en modo estricto
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current, {
      transition: "slide",
      autoPlayMedia: true,
      // view: 'scroll',
      // scrollProgress: true,
      // otras opciones de configuración
    });

    deckRef.current.initialize().then(() => {
      // buen lugar para configurar manejadores de eventos y plugins
    });

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (e) {
        console.warn("La llamada a Reveal.js destroy falló.");
      }
    };
  }, []);

  return (
    // Tu presentación se dimensiona según el ancho y alto del
    // elemento padre. Asegúrate de que el padre no tenga altura 0.
    <div className={`reveal ${position}`} ref={deckDivRef}>

      <div className="slides">


        <section className="snap-y snap-mandatory overflow-y-scroll h-5/6 flex-grow z-0 mt-10 mb-20">
          <div className="container px-0 py-24 mx-auto">
            <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg> */}
                <img
                  src={ol}
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  className="bg-indigo-100 rounded-lg"
                />
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">GIS</h2>
                <p className="leading-relaxed text-xl">OpenLayers es una biblioteca de JavaScript de código abierto bajo una derivación de la licencia BSD para mostrar mapas interactivos en los navegadores web. OpenLayers ofrece un API para acceder a diferentes fuentes de información cartográfica en la red: Web Map Services, Mapas comerciales (tipo Google Maps, Bing, Yahoo), Web Features Services, distintos formatos vectoriales, mapas de OpenStreetMap, etc.</p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Javascript</h2>
                <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <img
                  src={js}
                  alt="Javascript"
                  className="bg-indigo-100 rounded-lg"
                />
              </div>
            </div>
            {/* <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
      <img
            src="./../../public/jquery_logo.svg"
            alt="Javascript"
            className="bg-indigo-100 rounded-lg"
        />
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">The 400 Blows</h2>
        <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
        <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div> */}
          </div>
        </section>

        <section data-background-gradient="linear-gradient(to bottom, #2b3e4c, #000000)" data-auto-animate>
          <h1>PLAN PROVINCIAL DE REGIONALIZACIÓN</h1>

        </section>
        <section data-background-gradient="linear-gradient(to bottom, #2b3e4c, #000000)" data-auto-animate >
          <h1 style={{ color: "red" }}>PLAN PROVINCIAL DE REGIONALIZACIÓN</h1>
          <p className="text-lg fragment" data-fragment-index="1"> El Gobierno de la Provincia del Neuquén ha priorizado, entre sus acciones estratégicas, alcanzar la efectiva regionalización del territorio provincial, como un modelo de gestión innovador, cercano a los gobiernos locales y a la ciudadanía, que promueva la consolidación de un territorio más inclusivo, integrado, competitivo, sostenible y equilibrado, considerando la diversidad de nuestros territorios y comunidades.</p>
          <p className="text-lg fragment" data-fragment-index="2">En consecuencia, se ha definido diseñar e implementar el Plan Provincial de Regionalización, de manera coordinada con los gobiernos locales. Su objetivo principal es revertir los desequilibrios territoriales y poblacionales existentes, abordar y subsanar el déficit de equipamiento e infraestructura y priorizar desde los territorios los proyectos estratégicos y dinamizadores de cada región. Además, dicho plan pretende formular, diseñar y adoptar políticas, programas y proyectos que garanticen el fortalecimiento institucional, y el desarrollo regional y local.</p>
        </section>
        <section data-background-gradient="linear-gradient(to bottom, #2b3e4c, #000000)">
          <div className="flex items-center">
            <iframe className="align-middle w-full aspect-video" src="https://www.youtube.com/embed/ergPHvIRQ1U?si=A6mIYDS6500b5Ugr" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          </div>

          {/* <p className="fragment fade-out">Fade out</p>
          <p className="fragment highlight-red">Highlight red</p>
          <p className="fragment fade-in-then-out">Fade in, then out</p>
          <p className="fragment fade-up">Slide up while fading in</p> */}
        </section>

        <section data-background-gradient="linear-gradient(to bottom, #2b3e4c, #000000)">
          <p className="text-sm" data-fragment-index="1"> A través del Decreto Provincial 366/2024 se establecen las siete regiones en las que se integra el territorio provincial. Las regiones son Sur, Norte, Centro Oeste, Vaca Muerta, Limay Medio, Comarca Petrolera y Confluencia. La definición de estas regiones se vinculó centralmente a las dinámicas poblacionales vigentes o potenciales, las identidades culturales y territoriales, las actividades económicas consolidadas o emergentes y los corredores estratégicos definidos o a potenciar.</p>
          <p className="text-sm fragment" data-fragment-index="2">Además, se establece las figura de los delegados regionales con un rol fundamental, que consiste promover instancias de coordinación para la planificación del desarrollo regional con los gobiernos locales y los actores territoriales y su articulación con las políticas públicas regionales.</p>
        </section>
        <section data-background-gradient="linear-gradient(to bottom, #2b3e4c, #000000)">
          <div className="r-stack flex items-center" >
            <img className=" w-1/2"
              src="https://www.copade.gob.ar/wp-content/uploads/2024/05/mapa-regionalizacion-scaled.jpg"


            />
          </div>
        </section >
        {/* <section data-background-gradient="linear-gradient(to bottom, #2b3e4c, #000000)">

          <MapPreview className="border-sky-900"
            baseGeoUrl={props.baseGeoUrl}
            name={props.name}
          />

        </section> */}
      </div>
    </div>
  );
}

export default App;
