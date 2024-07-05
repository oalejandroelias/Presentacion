// App.js
import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import MapPreview from "../../components/map_preview/MapPreview";
import mapa_regionalizacion from "../../../public/img/mapa-regionalizacion.jpg";

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
        <section data-background-gradient="linear-gradient(to bottom, #2b3e4c, #000000)">PLAN PROVINCIAL DE REGIONALIZACIÓN
          <p className="text-sm fragment " data-fragment-index="1"> El Gobierno de la Provincia del Neuquén ha priorizado, entre sus acciones estratégicas, alcanzar la efectiva regionalización del territorio provincial, como un modelo de gestión innovador, cercano a los gobiernos locales y a la ciudadanía, que promueva la consolidación de un territorio más inclusivo, integrado, competitivo, sostenible y equilibrado, considerando la diversidad de nuestros territorios y comunidades.</p>
          <p className="text-sm fragment" data-fragment-index="2">En consecuencia, se ha definido diseñar e implementar el Plan Provincial de Regionalización, de manera coordinada con los gobiernos locales. Su objetivo principal es revertir los desequilibrios territoriales y poblacionales existentes, abordar y subsanar el déficit de equipamiento e infraestructura y priorizar desde los territorios los proyectos estratégicos y dinamizadores de cada región. Además, dicho plan pretende formular, diseñar y adoptar políticas, programas y proyectos que garanticen el fortalecimiento institucional, y el desarrollo regional y local.</p>
        </section>
        <section data-background-gradient="linear-gradient(to bottom, #2b3e4c, #000000)">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ergPHvIRQ1U?si=A6mIYDS6500b5Ugr" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          {/* <p class="fragment fade-out">Fade out</p>
          <p class="fragment highlight-red">Highlight red</p>
          <p class="fragment fade-in-then-out">Fade in, then out</p>
          <p class="fragment fade-up">Slide up while fading in</p> */}
        </section>
        <section data-background-gradient="linear-gradient(to bottom, #2b3e4c, #000000)">
          <p className="text-sm" data-fragment-index="1"> A través del Decreto Provincial 366/2024 se establecen las siete regiones en las que se integra el territorio provincial. Las regiones son Sur, Norte, Centro Oeste, Vaca Muerta, Limay Medio, Comarca Petrolera y Confluencia. La definición de estas regiones se vinculó centralmente a las dinámicas poblacionales vigentes o potenciales, las identidades culturales y territoriales, las actividades económicas consolidadas o emergentes y los corredores estratégicos definidos o a potenciar.</p>
          <p className="text-sm fragment" data-fragment-index="2">Además, se establece las figura de los delegados regionales con un rol fundamental, que consiste promover instancias de coordinación para la planificación del desarrollo regional con los gobiernos locales y los actores territoriales y su articulación con las políticas públicas regionales.</p>
        </section>
        <section data-background-gradient="linear-gradient(to bottom, #2b3e4c, #000000)">
          <div class="r-stack" height="600px">
            <img
              src="https://www.copade.gob.ar/wp-content/uploads/2024/05/mapa-regionalizacion-scaled.jpg"


            />
          </div>
        </section >
        <section data-background-gradient="linear-gradient(to bottom, #2b3e4c, #000000)">

          <MapPreview className="border-sky-900"
            baseGeoUrl={props.baseGeoUrl}
            name={props.name}
          />

        </section>
      </div>
    </div>
  );
}

export default App;
