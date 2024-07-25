import React from 'react'
import visor from '../../img/celular_3.png'
const DiseñoBa = () => {
    return (
        <>
            <section className="bg-white dark:bg-gray-900">



                <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                    <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                        <img className="object-cover  h-full mx-auto rounded-md lg:max-w-2xl" src={visor} alt="glasses photo" />
                    </div>
                    <div className="w-full lg:w-1/2">

                        <div className="container px-6 py-16 mx-auto text-center">
                            <div className=" mx-auto">
                                <h1 className="text-3xl font-semibold text-center dark:text-white lg:text-4xl">Diseño Responsive</h1>
                                <p className="mt-6">El visor esta diseñado para adaptarse a cualquier tipo de pantalla.</p>

                            </div>



                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default DiseñoBa
