import Proyecto from "./Proyecto";
import pagCopade from "../../../src/img/img_map.png";
import pagGis from "../../../src/img/img_map.png";
import appCultivar from "../../../src/img/img_map.png";

const proyectos = [
  {
    image: pagGis,
    title: "SIG Copade",
    description: "Sistema de Información Geográfico",
    url: "http://giscopade.neuquen.gov.ar/sig_copade",
  },
  {
    image: pagCopade,
    title: "Página Copade",
    description: "Página hecha en Wordpress",
    url: "https://www.copade.gob.ar/",
  },
  {
    image: appCultivar,
    title: "Cultivar en la Ciudad",
    description: "App para movil de la guia Cultivar en la ciudad",
    url: "https://play.google.com/store/apps/details?id=com.calendario.components&hl=es",
  },
];

const Proyectos = () => {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-3"
          >
            {proyectos.map((proyecto, index) => (
              <Proyecto
                key={proyecto.title}
                title={proyecto.title}
                image={proyecto.image}
                description={proyecto.description}
                url={proyecto.url}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Proyectos;
