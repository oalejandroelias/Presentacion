import React from 'react'
import visor from '../../img/celular_3.png'
import visor_movile from '../../img/gifs/sig_movile_1.gif'
const DiseñoBa = () => {
    return (
        <>
            <section className="bg-white dark:bg-gray-900 font-manrope">
                <div className="w-1/2 container flex flex-col justify-items-center just px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row">
                    <div className="flex items-center justify-center w-full h-96">
                        <img className="object-cover  h-full mx-auto rounded-md lg:max-w-2xl border border-spacing-1" src={visor_movile} alt="glasses photo" />
                    </div>
                    <div className="w-full">
                        <div className="container px-6 py-16 mx-auto text-center">
                            <div className=" mx-auto">
                                <h1 className="text-3xl font-semibold text-center dark:text-white lg:text-4xl">DISEÑO RESPONSIVE</h1>
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
