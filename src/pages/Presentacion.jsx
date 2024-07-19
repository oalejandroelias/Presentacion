import sig from "../../src/img/sig_fondo_a.png";
import { motion } from 'framer-motion';

const Presentacion = () => {
  return (
    <div className="relative">
      <img
        src={sig}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-opacity-30 bg-deep-purple-accent-700">
        <svg
          className="absolute inset-x-0 bottom-0 text-white dark:text-slate-900"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, }}
                animate={{ opacity: 1, /*rotate: [0,360],*/ }}
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
                animate={{ opacity: 1, /*rotate: [0, 360],*/ }}
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
    </div>
  );
};

export default Presentacion;
