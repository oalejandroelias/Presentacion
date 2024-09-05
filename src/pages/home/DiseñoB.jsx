import React from 'react'
import visor from '../../img/visor.png'
import visor_gif from '../../img/gifs/prueba.gif'
const DiseñoB = () => {
    return (
        <>
            <section className="bg-white dark:bg-gray-900 font-manrope">


                <div className="container flex flex-col px-6 py-0 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                    <div className="w-3/4">
                        <div className="container px-6 py-16 mx-auto text-center">
                            <div className=" mx-auto">
                                <h1 className="text-3xl font-bold text-center dark:text-white lg:text-4xl">NUESTRO VISOR</h1>
                                <p className="mt-6">La Subsecretaría del COPADE pone a disposición su Sistema de Información Geográfica (SIG) con información actualizada y georreferenciada de la Provincia del Neuquén. Es posible encontrar información vinculada a regionalización, infraestructura social, servicios básicos, medio biofísico, gestión del riesgo, entre otros.
                                    El nuevo visor web del SIG es más intuitivo, veloz y permite rápidamente confeccionar mapas de áreas de interés, con toda la información territorial disponible en el servidor de este organismo.</p>

                            </div>


                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full h-96 lg:w-2/3">
                        <img className="object-cover w-full  mx-auto rounded-md lg:max-w-2xl border border-spacing-1" src={visor_gif} alt="visor_sig" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default DiseñoB
