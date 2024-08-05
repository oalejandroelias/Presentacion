import React from 'react'
import logo_sig from '../../img/logo_sig.png'

const LinkGis = () => {
    return (
        <>
            <section className="flex items-center flex-1 pt-16">
                <div className="flex flex-col w-full">
                    <h1 className="text-3xl font-extrabold text-center lg:text-5xl">
                        <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
                            Accedé al GIS
                        </span>


                    </h1>

                    <div className="max-w-screen-xl mx-auto mt-14">
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                            </div>

                            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                            </div>

                            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                                <a href='https://giscopade.neuquen.gov.ar/sig_copade/' target='_black'>
                                    <img className="h-24 mt-2 " src={logo_sig} alt="glasses photo" />
                                </a>
                            </div>

                            <div className="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
                            </div>

                            <div className="flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-1">
                            </div>
                        </div>
                    </div>

                </div>



            </section>

        </>
    )
}

export default LinkGis
