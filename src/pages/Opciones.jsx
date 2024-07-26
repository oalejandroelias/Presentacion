import React from "react";

import Regiones from "./Regiones";
import RegionesA from "./RegionesA";

const Opciones = () => {
  return (
    <>
      {/* <header className="bg-white dark:bg-gray-900">
        <nav x-data="{ isOpen: false }" className="relative bg-white dark:bg-gray-900"> */}
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="ranslate-x-0 opacity-100 absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
        </div>
      </div>
      {/* </nav> */}

      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="">
              <h1 className="text-5xl font-bold leading-none text-center">SIG COPADE</h1>

              <p className="pt-2 text-xl mt-3 text-dark dark:text-white">La Subsecretaría del COPADE pone a disposición su Sistema de Información Geográfica (SIG) con información actualizada y georreferenciada de la Provincia del Neuquén. Es posible encontrar información vinculada a regionalización, infraestructura social, servicios básicos, medio biofísico, gestión del riesgo, entre otros.
                El nuevo visor web del SIG es más intuitivo, veloz y permite rápidamente confeccionar mapas de áreas de interés, con toda la información territorial disponible en el servidor de este organismo.</p>

            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <RegionesA />
          </div>
        </div>
      </div>
      {/* // </header > */}
    </>
  );
};

export default Opciones;
