import React from 'react'
import logo_sig from '../../img/logo_sig.png'
import logo_geoservicio from '../../img/geoservicios_icon.png'
import logo_mapa from '../../img/mapa_icon.png'

const LinksGisa = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Raw Denim Heirloom Man Braid</h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className=" inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                <a href='https://giscopade.neuquen.gov.ar/sig_copade/' target='_black'>
                                    <img className="h-24 mt-2 " src={logo_sig} alt="glasses photo" />
                                </a>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Visor</h2>
                                <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1 hover:scale-125 transition-all duration-500 cursor-pointer">
                                    <a href='http://localhost:4001/#/servicios' target='_black'>
                                        <img className="h-24 mt-2 " src={logo_geoservicio} alt="glasses photo" />
                                    </a>
                                </div>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Geoservicios</h2>
                                <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1 hover:scale-125 transition-all duration-500 cursor-pointer">
                                    <a href='http://localhost:4001/#/mapa_tematico' target='_black'>
                                        <img className="h-24 mt-2 " src={logo_mapa} alt="glasses photo" />
                                    </a>
                                </div>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Mapas</h2>
                                <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                </div>
            </section>

        </>
    )
}

export default LinksGisa
