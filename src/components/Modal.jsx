import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon, MapIcon } from "@heroicons/react/outline";
import MapPreview from "../components/map_preview/MapPreview";
import { RiCloseLine } from "react-icons/ri";
import Presentaciones from "../pages/Presentacion/Presentaciones";
import axios from "axios";
import { XMLParser } from "fast-xml-parser";
import Select from "./select/Select";

export default function Modal(props) {
  const [open, setOpen] = useState(props.show_modal);
  const cancelButtonRef = useRef(null);
  const [option, setOption] = useState("nada");
  const [arrayRegistros, setArrayRegistros] = useState([]);
  const [arrayCampos, setArrayCampos] = useState([]);

  const base_url = import.meta.env.VITE_API_URL;
  const [owsGeoUrl, setOwsGeoUrl] = useState(base_url + "/geoserver/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=");
  const urlAux = base_url + "/geoserver/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=" + props.name;

  useEffect(() => {
    const getXMLResponse = async () => {
      try {
        const response = await axios.get(urlAux, {
          headers: {
            'Content-Type': 'application/xml',
          },
        });

        const parser = new XMLParser();
        let obj = parser.parse(response.data);
        let campos = obj['wfs:FeatureCollection']['gml:featureMember'];

        campos = Array.isArray(campos) ? campos : [campos];

        let arrayRegistroAux = [];
        let arrayCamposAux = [];

        campos.forEach((value) => {
          let registro = Object.entries(value["copade:" + props.name]);
          arrayRegistroAux.push(registro);

          registro.forEach((v) => {
            arrayCamposAux.push(v[0].split(":")[1]);
          });
        });

        setArrayRegistros(arrayRegistroAux);
        arrayCamposAux = [...new Set(arrayCamposAux)];

        setArrayCampos(arrayCamposAux);
      } catch (error) {
        console.error(error);
      }
    };
    getXMLResponse();
  }, []);

  useEffect(() => {
    console.log("arrayRegistros", arrayRegistros);
    if (Array.isArray(arrayRegistros)) {
      arrayRegistros.forEach((params) => {
        console.log(params);
      });
    }
  }, [arrayRegistros]);

  const file_type = [
    { name: "ShapeFile", value: owsGeoUrl + props.name + "&outputformat=SHAPE-ZIP&SRSNAME=EPSG:4326" },
    { name: "Csv", value: owsGeoUrl + props.name + "&outputFormat=csv" },
    { name: "Json", value: owsGeoUrl + props.name + "&outputformat=JSON&SRSNAME=EPSG:4326" },
    { name: "kml", value: base_url + "/geoserver/wms/kml?layers=" + props.name },
    { name: "Jsonp", value: owsGeoUrl + props.name + "&outputFormat=application/json" },
    { name: "gml2", value: owsGeoUrl + props.name + "&info_format=application/vnd.ogc.gml" },
    { name: "gml3", value: owsGeoUrl + props.name + "&outputFormat=application/vnd.ogc.gml/3.1.1" },
  ];

  const handleChange = (e) => {
    setOption(e.target.value);
    if (e.target.value !== "nada") {
      window.open(e.target.value, '_blank');
    }
  };

  return (
    <Transition.Root key={props.key} show={props.show_modal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-40"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
        key={props.name}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-1 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white dark:bg-slate-900 rounded-lg text-right overflow-hidden shadow-xl  dark:shadow-indigo-500/50 transform transition-all w-full sm:my-8 sm:w-5/6">
                <div className="flex items-center p-2 border-b border-solid border-blueGray-200 rounded-t justify-between">
                  <div></div>
                  <Dialog.Title
                    className="text-2xl leading-6 font-mono font-bold text-nqn-verde hover:underline decoration-4"
                  >
                    Capa: {props.title}
                  </Dialog.Title>
                  <button className="text-2xl leading-6 font-mono font-bold text-nqn-verde hover:underline decoration-4"
                    onClick={() => props.setShow_modal(!props.show_modal)}
                    ref={cancelButtonRef}
                  >
                    <RiCloseLine />
                  </button>
                </div>

                <div className=" px-4 pt-5 pb-4 md:p-2 sm:p-6 sm:pb-1 columns-1 sm:columns-2">
                  <div className="h-96 basis-1 sm:basis-1/2 border-pink-900">
                    <MapPreview className="border-sky-900"
                      baseGeoUrl={props.baseGeoUrl}
                      name={props.name}
                    />
                  </div>
                  <div className="basis-1 sm:basis-1/2">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      {/* <Dialog.Title
                        className="text-2xl leading-6 font-mono font-bold text-nqn-verde hover:underline decoration-4"
                      >
                        {props.title}
                      </Dialog.Title> */}
                      <div className="mt-5 mb-5">
                        <p className="text-sm text-black dark:text-white">
                          {props.abstract}
                        </p>
                      </div>

                      <div className="flex justify-center m-5">
                        <div className="mb-3 xl:w-96">
                          <label for="country" className="block text--d font-medium text-gray-700">Descargar</label>
                          <select
                            className="w-full rounded bg-transparent border border-black dark:border-white focus:border-nqn-verde dark:focus:border-nqn-verde outline-none text-black dark:text-white py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            aria-label="Default select example"
                            value={option}
                            onChange={handleChange}
                          >
                            <option selected value="nada">
                              Seleccionar...
                            </option>
                            {file_type.map((opcion) => (
                              <option key={opcion.name} value={opcion.value}>
                                {opcion.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Select options={arrayCampos} />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
