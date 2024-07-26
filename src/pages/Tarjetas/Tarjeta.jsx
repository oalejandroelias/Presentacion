import React from 'react'


const Tarjeta = (props) => {
    return (
        <>

            {/* <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Mapas Temáticos </h1>

                        <button className="focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>

                    <hr className="my-8 border-gray-200 dark:border-gray-700" />

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-5"> */}
            <div>
                <a href={props.url} target="_blank">
                    <img className="border-2 border-black object-cover object-center w-full h-64 rounded-lg lg:h-80 fill-blue-500 transition-transform transform hover:scale-105" src={props.image} alt="" />
                </a>
                <div className="mt-8">
                    <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                        <span className="relative text-white">SIG</span>
                    </span>
                    <span className="ml-2 text-blue-500 uppercase">Regionalización</span>

                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                        PLAN PROVINCIAL DE REGIONALIZACIÓN
                    </h1>

                    <p className="mt-2 text-default">
                        {props.description}
                    </p>

                    <div className="flex items-center justify-between mt-4">
                        <div>
                            {/* <a href="#" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                                John snow
                            </a> */}

                            <p className="text-sm text-default">Febrero 1, 2022</p>
                        </div>

                        {/* <a href={props.url} target="_blank" className="inline-block text-blue-500 underline hover:text-blue-400">Ver</a> */}
                    </div>

                </div>
            </div>
            {/* </div>
                </div>
            </section> */}

        </>
    )
}

export default Tarjeta
