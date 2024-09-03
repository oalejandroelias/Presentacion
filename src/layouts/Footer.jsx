import React from 'react'
import { useLocation } from "react-router-dom";
import logo_copade_a from '../../src/img/logo_copade_a.png'

const Footer = () => {

    const location = useLocation()

    if (location.pathname === "/presentaciones") {
        return null
    }
    else {


        return (
            <footer className="bg-nqn-verde dark:bg-gray-900">
                <div className="container px-6 py-12 mx-auto font-manrope">
                    {/* <div className="md:flex md:-mx-3 md:items-center md:justify-between">
                        <h1 className="text-xl manropebold tracking-tight text-white md:mx-3 xl:text-2xl dark:text-white"></h1>

                        <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
                            <a href="#" className="inline-flex items-center justify-center w-full px-4 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg gap-x-3 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                <span>Sign Up Now</span>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </a>
                        </div>
                    </div> */}

                    {/* <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" /> */}

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <div >
                            <div className="flex flex-col items-center mt-5 space-y-2">
                                <a href="https://www.copade.gob.ar/">
                                    <img className="align-middle" src={logo_copade_a} alt="" />
                                </a>
                            </div>
                        </div>
                        <div>
                            <p className=" text-white dark:text-white">Acerca de</p>

                            <div className="flex flex-col items-start mt-5 space-y-2">
                                <a href="#" className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">www.copade.gob.ar</a>
                                <a href="#" className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Antartida Argentina 1245 (CAM)</a>
                                <a href="#" className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Edificio 2 Piso 4 – c.p. 8300 Neuquén</a>
                            </div>
                        </div>

                        <div>
                            <p className=" text-white dark:text-white">Enlaces Relacionados</p>

                            <div className="flex flex-col items-start mt-5 space-y-2">
                                <a href="http://w2.neuquen.gov.ar/index.php" className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Gobierno de la Provincia del Neuquén</a>
                                <a href="https://www.neuqueninforma.gob.ar" className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Neuquén Informa</a>
                                <a href="http://w2.neuquen.gov.ar/municipios-en-la-web" className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Municipios en la Web</a>
                            </div>
                        </div>



                        <div>
                            <p className=" text-white dark:text-white">Contactos</p>

                            <div className="flex flex-col items-start mt-5 space-y-2">
                                <a href="#" className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">infocopade@neuquen.gov.ar</a>
                                <a href="#" className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"> sigcopade@gmail.com / sigcopade@neuquen.gov.ar </a>
                                <a href="#" className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"> (299) 449 5661 / INT. 1900 </a>
                            </div>
                        </div>
                    </div>

                    <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

                    <div className="flex flex-col items-center justify-between sm:flex-row">
                        {/* <a href="https://www.copade.gob.ar/">
                            <img className="w-auto h-7" src={logo_copade_a} alt="" />
                        </a> */}
                        <p className="mt-4 text-sm text-white sm:mt-0 dark:textwhite">© Desarrollado por COPADE</p>

                    </div>
                </div>
            </footer>
        )
    }
}


export default Footer
