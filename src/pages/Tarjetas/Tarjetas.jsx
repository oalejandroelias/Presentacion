
import mapa_regionalizacion from "../../../public/img/mapa-regionalizacion.jpg";
import Tarjeta from "./Tarjeta";

const proyectos = [
  {
    image: mapa_regionalizacion,
    title: "SIG Copade",
    description: "Sistema de Información Geográfico",
    url: "http://giscopade.neuquen.gov.ar/sig_copade",
  },
  {
    image: mapa_regionalizacion,
    title: "Página Copade",
    description: "Página hecha en Wordpress",
    url: "https://www.copade.gob.ar/",
  },
  {
    image: mapa_regionalizacion,
    title: "Cultivar en la Ciudad",
    description: "App para movil de la guia Cultivar en la ciudad",
    url: "https://play.google.com/store/apps/details?id=com.calendario.components&hl=es",
  },
  {
    image: mapa_regionalizacion,
    title: "Cultivar en la Ciudad",
    description: "App para movil de la guia Cultivar en la ciudad",
    url: "https://play.google.com/store/apps/details?id=com.calendario.components&hl=es",
  },
  {
    image: mapa_regionalizacion,
    title: "Cultivar en la Ciudad",
    description: "App para movil de la guia Cultivar en la ciudad",
    url: "https://play.google.com/store/apps/details?id=com.calendario.components&hl=es",
  },
];

const Tarjetas = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 mt-20">
        <div className="container px-6 py-10 mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Mapas Temáticos </h1>

            <button className="focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          <hr className="my-8 border-gray-200 dark:border-gray-700" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-5">
            {proyectos.map((proyecto, index) => (
              <Tarjeta
                // key={proyecto.title}
                // title={proyecto.title}
                image={proyecto.image}
                description={proyecto.description}
                //url={proyecto.url}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Tarjetas;
