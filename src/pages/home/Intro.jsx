import React from 'react'
import visor from '../../img/visor.png'

const Intro = () => {
    return (
        <>
            <div className="bg-white dark:bg-gray-900 font-manrope">


                <div className="container px-6 py-16 mx-auto text-left">
                    <div className=" mx-auto">
                        <h1 className="text-3xl font-semibold text-center dark:text-white lg:text-4xl">Nuestro visor</h1>
                        <p className="mt-6 text-left">La Subsecretaría del COPADE pone a disposición su Sistema de Información Geográfica (SIG) con información actualizada y georreferenciada de la Provincia del Neuquén. Es posible encontrar información vinculada a regionalización, infraestructura social, servicios básicos, medio biofísico, gestión del riesgo, entre otros.
                            El nuevo visor web del SIG es más intuitivo, veloz y permite rápidamente confeccionar mapas de áreas de interés, con toda la información territorial disponible en el servidor de este organismo.</p>

                    </div>

                    <div className="flex justify-center mt-10">
                        <img className="object-cover w-64 rounded-xl lg:w-4/5" src={visor} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Intro
