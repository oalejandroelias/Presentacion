import React from 'react'
import js from '../img/js_logo.png'
import ol from '../img/ol_logo.svg'

const Seccion1 = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
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
              <p className="leading-relaxed text-xl">La Subsecretaría del COPADE pone a disposición su Sistema de Información Geográfica (SIG) con información actualizada y georreferenciada de la Provincia del Neuquén. Es posible encontrar información vinculada a regionalización, infraestructura social, servicios básicos, medio biofísico, gestión del riesgo, entre otros.
                El nuevo visor web del SIG es más intuitivo, veloz y permite rápidamente confeccionar mapas de áreas de interés, con toda la información territorial disponible en el servidor de este organismo.</p>
              {/* <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a> */}
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Javascript</h2>
              <p className="leading-relaxed text-base">Tambien podes acceder al sitio web de COPADE.</p>
              {/* <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a> */}
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
    </div>
  )
}

export default Seccion1