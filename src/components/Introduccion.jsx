/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle'

const navigation = [
  { name: 'Copade', href: 'https://www.copade.gob.ar/' },
  { name: 'Gis Copade', href: 'http://giscopade.neuquen.gov.ar/sig_copade/' },
  { name: 'Openlayers', href: 'https://openlayers.org/' },
]

function Contenedor() {
  return (
    <div className="relative overflow-hidden m-10">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">


  

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <motion.h1 
                initial={{ opacity: 0, }}
                animate={{ opacity: 1, rotate: [0,360], }}
                transition={{
                  ease: 'easeInOut',
                  duration: 1,
                  delay: 0.1,
                }}
                whileHover={{
                  // scale: 1.1,
                  scale: [1, 1.4, 1.2],
                 
                  transition: {
                    duration: .2,
                  }
                }}
              className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                <span 
                   
                className="block xl:inline">Gis Copade</span>{' '}
              </motion.h1>
              <motion.h2 
                initial={{ opacity: 0, }}
                animate={{ opacity: 1, rotate: [0, 360], }}
                transition={{
                  ease: 'easeInOut',
                  duration: 1,
                  delay: 1,
                }}
              className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                <span className="block text-indigo-600 xl:inline">Planificación Territorial</span>
              </motion.h2>
              <div className="escribiendo">
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 texto">
                Sistema de Información Geográfica
                </p>
              </div>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="http://giscopade.neuquen.gov.ar/sig_copade"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Visor
                  </a>
                </div>
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
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://www.copade.gob.ar/wp-content/uploads/2021/11/SIG-01-1024x512.jpg"
          alt=""
        />
      </div>
    </div>
  )
}

export default Contenedor
