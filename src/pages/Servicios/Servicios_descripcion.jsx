import React from 'react'

const Servicios_descripcion = () => {
    return (
        <div className="relative p-4">
            <div className="max-w-3xl mx-auto">
                <div
                    className="mt-3 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                    <div className="">
                        <h1 href="#" className="text-gray-900 font-bold text-4xl">Servicios OGC</h1>
                        {/* <div className="py-5 text-sm font-regular text-gray-900 flex">
                            <span className="mr-3 flex flex-row items-center">
                                <svg className="text-indigo-600" fill="currentColor" height="13px" width="13px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g>
                                    <g>
                                        <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
			c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
		                   	c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path></g></g></svg>
                                <span className="ml-1">6 mins ago</span>
                            </span>

                            <a href="#" className="flex flex-row items-center hover:text-indigo-600  mr-3">
                                <svg className="text-indigo-600" fill="currentColor" height="16px" aria-hidden="true" role="img"
                                    focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="currentColor"
                                        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z">
                                    </path>
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                </svg>
                                <span className="ml-1">AliSher Azimi</span></a>

                            <a href="#" className="flex flex-row items-center hover:text-indigo-600">
                                <svg className="text-indigo-600" fill="currentColor" height="16px" aria-hidden="true" role="img"
                                    focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                                    <path fill=""
                                        d="M15.4496399,8.42490555 L8.66109799,1.63636364 L1.63636364,1.63636364 L1.63636364,8.66081885 L8.42522727,15.44178 C8.57869221,15.5954158 8.78693789,15.6817418 9.00409091,15.6817418 C9.22124393,15.6817418 9.42948961,15.5954158 9.58327627,15.4414581 L15.4486339,9.57610048 C15.7651495,9.25692435 15.7649133,8.74206554 15.4496399,8.42490555 Z M16.6084423,10.7304545 L10.7406818,16.59822 C10.280287,17.0591273 9.65554997,17.3181054 9.00409091,17.3181054 C8.35263185,17.3181054 7.72789481,17.0591273 7.26815877,16.5988788 L0.239976954,9.57887876 C0.0863319284,9.4254126 0,9.21716044 0,9 L0,0.818181818 C0,0.366312477 0.366312477,0 0.818181818,0 L9,0 C9.21699531,0 9.42510306,0.0862010512 9.57854191,0.239639906 L16.6084423,7.26954545 C17.5601275,8.22691012 17.5601275,9.77308988 16.6084423,10.7304545 Z M5,6 C4.44771525,6 4,5.55228475 4,5 C4,4.44771525 4.44771525,4 5,4 C5.55228475,4 6,4.44771525 6,5 C6,5.55228475 5.55228475,6 5,6 Z">
                                    </path>
                                </svg>
                                <span className="ml-1">activewear</span></a>
                        </div> */}
                        {/* <hr> */}
                        <p className="text-base leading-8 my-5">
                            El Open Geospatial Consortium (OGC) es una organización internacional que, junto a sus más de 475 miembros, desarrolla y mantiene estándares abiertos para el intercambio y la interoperabilidad de datos geoespaciales. Estos estándares permiten que mapas y datos geográficos sean compartidos y accedidos a través de la Web, facilitando la integración en diversas aplicaciones y dispositivos. La estandarización de estos servicios es crucial para que las organizaciones y administraciones intercambien información de manera eficiente y accesible.
                            Muchos de los datos publicados en las Infraestructuras de Datos Espaciales (IDE) se basan en estándares del OGC:

                        </p>

                        <h3 className="text-2xl font-bold my-5">Web Feature Service (WFS): </h3>

                        <p className="text-base leading-8 my-5">
                            Permite el acceso a los datos geoespaciales vectoriales a través de la web, ofreciendo una manera de consultar y obtener datos espaciales en formatos como GML (Geography Markup Language). Los clientes pueden enviar solicitudes al servidor WFS para recuperar datos geoespaciales en forma de entidades (features), que pueden ser manipuladas y analizadas en el cliente. Es útil cuando se necesita acceso a datos vectoriales para análisis espacial y/o descargas.

                        </p>

                        <h3 className="text-2xl font-bold my-5">Web Map Service (WMS): </h3>

                        <p className="text-base leading-8 my-5">
                            El estándar WMS del OGC permite la publicación de mapas en la web. Facilita a los clientes solicitar imágenes de mapas generadas dinámicamente desde una o más bases de datos geoespaciales distribuidas.
                            Una solicitud WMS define las capas geográficas y el área de interés que se procesarán. La respuesta a la solicitud es una o más imágenes de mapas georregistrados (en formato JPEG, PNG, etc.) que se pueden mostrar en una aplicación de navegador. La interfaz también admite la posibilidad de especificar si las imágenes devueltas deben ser transparentes para que se puedan combinar o no las capas de varios servidores.

                        </p>

                        <h3 className="text-2xl font-bold my-5">Web Map Tile Service (WMTS): </h3>

                        <p className="text-base leading-8 my-5">
                            Es un estándar para la publicación de mapas en formato de teselas (tiles). Permite a los clientes solicitar y recibir imágenes de mapa pre-renderizadas organizadas en una cuadrícula de teselas. ¿Cómo funciona? El servidor WMTS divide los mapas en pequeñas teselas, cada una correspondiente a un nivel de zoom específico. Los clientes pueden solicitar teselas individuales para construir una imagen de mapa completa, lo que mejora la eficiencia en la visualización y el rendimiento. Es adecuado para aplicaciones que necesitan mapas rápidos y eficientes, especialmente en niveles de zoom variados.
                        </p>

                        <h3 className="text-2xl font-bold my-5">Web Coverage Service (WCS):
                        </h3>

                        <p className="text-base leading-8 my-5">
                            son fundamentales para estas infraestructuras.

                            Estas normas facilitan el acceso, la visualización y el procesamiento de datos geoespaciales, garantizando una interoperabilidad efectiva entre diferentes sistemas y aplicaciones.
                        </p>

                        {/* <blockquote className="text-md italic leading-8 my-5 p-5 text-indigo-600 font-semibold">Lorem Ipsum is
                            simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s</blockquote> */}



                    </div>

                </div>
            </div>
        </div>
    )
}

export default Servicios_descripcion
