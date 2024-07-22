
import mapa_regionalizacion from "../../../public/img/mapas/mapa-regionalizacion.jpg";
import Tarjeta from "./Tarjeta";


//const base_url = window.location.protocol + "//" + window.location.host;
const base_url = import.meta.env.VITE_API_URL;
const proyect_url = import.meta.env.VITE_PROYECT_URL;
const nada = ""

const proyectos = [
  {
    image: mapa_regionalizacion,
    title: "SIG Copade",
    description: "Sistema de Información Geográfico",
    url: proyect_url + "/img/mapas/mapa-regionalizacion.jpg",
  },
  {
    image: mapa_regionalizacion,
    title: "Página Copade",
    description: "Página hecha en Wordpress",
    url: proyect_url + "/img/mapas/mapa-regionalizacion.jpg",
  },
  {
    image: mapa_regionalizacion,
    title: "Cultivar en la Ciudad",
    description: "App para movil de la guia Cultivar en la ciudad",
    url: proyect_url + "/img/mapas/mapa-regionalizacion.jpg"
  },
  {
    image: mapa_regionalizacion,
    title: "Cultivar en la Ciudad",
    description: "App para movil de la guia Cultivar en la ciudad",
    url: proyect_url + "/img/mapas/mapa-regionalizacion.jpg"
  },
  {
    image: mapa_regionalizacion,
    title: "Cultivar en la Ciudad",
    description: "App para movil de la guia Cultivar en la ciudad",
    url: proyect_url + "/img/mapas/mapa-regionalizacion.jpg"
  },
];

const Tarjetas = () => {
  return (
    <>
      <section className="">
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

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-5">
            {proyectos.map((proyecto, index) => (
              <Tarjeta
                key={index}
                // title={proyecto.title}
                image={proyecto.image}
                description={proyecto.description}
                //url={proyecto.url}
                index={index}
                url={proyecto.url}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Tarjetas;
