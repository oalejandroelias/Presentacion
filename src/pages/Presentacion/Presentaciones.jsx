// src/components/Presentacion.js
import React, { useEffect } from 'react';
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css'; // Puedes cambiar el tema aquí

const Presentaciones = () => {
  useEffect(() => {
    Reveal.initialize();
  }, []);

  return (
    <div className="reveal w-full h-full">
      <div className="slides">
        <section>
          <h1>Slide 1</h1>
          <p>This is the first slide.</p>
        </section>
        <section>
          <h1>Slide 2</h1>
          <p>This is the second slide.</p>
        </section>
        {/* Agrega más secciones para más diapositivas */}
      </div>
    </div>
  );
};

export default Presentaciones;
