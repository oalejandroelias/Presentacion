import React from 'react'
import logo_sig from '../../img/logo_sig.png'
import logo_geoservicio from '../../img/geoservicios_icon.png'
import logo_mapa from '../../img/mapa_icon.png'

const LinkGis = () => {
    return (
        <>
            <section className="flex items-center flex-1 pt-16">
                <div className="flex flex-col w-full">
                    {/* <h1 className="text-3xl font-extrabold text-center lg:text-5xl">
                        <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
                            Accedé al GIS
                        </span>


                    </h1> */}

                    <div className="max-w-screen-xl mx-auto mt-14">
                        <div className="grid grid-cols-1 gap-20 md:grid-cols-3 lg:grid-cols-3">
                            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1 hover:scale-125 transition-all duration-500 cursor-pointer">
                                <a href='https://giscopade.neuquen.gov.ar/sig_copade/' target='_black'>
                                    <img className="h-24 mt-2 " src={logo_sig} alt="glasses photo" />
                                </a>
                            </div>
                            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1 hover:scale-125 transition-all duration-500 cursor-pointer">
                                <a href='http://localhost:4001/#/servicios' target='_black'>
                                    <img className="h-24 mt-2 " src={logo_geoservicio} alt="glasses photo" />
                                </a>
                            </div>
                            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1 hover:scale-125 transition-all duration-500 cursor-pointer">
                                <a href='http://localhost:4001/#/mapa_tematico' target='_black'>
                                    <img className="h-24 mt-2 " src={logo_mapa} alt="glasses photo" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>



            </section>

        </>
    )
}

export default LinkGis
