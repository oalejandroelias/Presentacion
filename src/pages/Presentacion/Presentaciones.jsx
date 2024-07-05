// App.js
import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";

function App(props) {
  const deckDivRef = useRef(null); // referencia al contenedor del deck
  const deckRef = useRef(null); // referencia a la instancia de Reveal.js

  const position = props?.position ? props.position : "absolute";

  useEffect(() => {
    // Previene la inicialización doble en modo estricto
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current, {
      transition: "slide",
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
        <section>Slide 1</section>
        <section>Slide 2</section>
        <section>
          <p class="fragment">Fade in</p>
          <p class="fragment fade-out">Fade out</p>
          <p class="fragment highlight-red">Highlight red</p>
          <p class="fragment fade-in-then-out">Fade in, then out</p>
          <p class="fragment fade-up">Slide up while fading in</p>
        </section>
      </div>
    </div>
  );
}

export default App;
