import React from 'react'
import background from "./../../public/img/banner.jpg";
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <div className="relative">
      <img
        src={background}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-20">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

          <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-12/12">

            <div className="sm:text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, }}
                animate={{ opacity: 1, /*rotate: [0,360],*/ }}
                transition={{
                  ease: 'easeInOut',
                  duration: 1,
                  delay: 0.1,
                }}
                // whileHover={{
                //   scale: [1, 1.4, 1.2],

                //   transition: {
                //     duration: .2,
                //   }
                // }}
                className="text-4xl font-extrabold font-border text-copade-900 drop-shadow-xl shadow-white dark:text-white sm:text-5xl md:text-6xl">
                <span

                  className="block xl:inline">Gis Copade</span>{' '}
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, }}
                animate={{ opacity: 1, /*rotate: [0, 360],*/ }}
                transition={{
                  ease: 'easeInOut',
                  duration: 1,
                  delay: 1,
                }}
                className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                <span className="block font-border text-violet-700 xl:inline">Planificación Territorial</span>
              </motion.h2>
              <div className="escribiendo ">
                <p className="mt-3 text-base font-border text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 texto">
                  Sistema de Información Geográfica
                </p>
              </div>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">

                {/* <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div> */}
              </div>
            </div>

            {/* <a
              href="http://giscopade.neuquen.gov.ar/sig_copade"
              aria-label="SIG Copade"
              className="inline-flex font-border items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
            >
              Ver Visor
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a> */}
          </div>

        </div>

      </div>
    </div>
  )
}

export default Banner