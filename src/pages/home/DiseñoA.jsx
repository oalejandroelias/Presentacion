import React from 'react'
import visor from '../../img/visor.png'
const DiseñoA = () => {
    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="relative flex">
                    <div className="min-h-screen lg:w-1/3"></div>
                    <div className="hidden w-3/4 min-h-screen bg-gray-100 dark:bg-gray-800 lg:block"></div>

                    <div
                        className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                            What our <span className="text-blue-500">customers</span> <br /> are saying
                        </h1>

                        <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
                            <img className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96" src={visor} alt="" />

                            <div className="mt-8 lg:px-10 lg:mt-0">
                                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:w-72">
                                    Help us improve our productivity
                                </h1>

                                <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                                    “ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                                    tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                                    aperiam dolorum, obcaecati corrupti aspernatur a. ”
                                </p>

                                <h3 className="mt-6 text-lg font-medium text-blue-500">Ronik Ederson</h3>
                                <p className="text-gray-600 dark:text-gray-300">Marketing Manager at Stech</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-12 lg:justify-start">
                            <button title="left arrow" className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button title="right arrow" className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DiseñoA
