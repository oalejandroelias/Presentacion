/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon, MapIcon } from "@heroicons/react/outline";
import MapPreview from "../components/map_preview/MapPreview";
import { RiCloseLine } from "react-icons/ri";
import Presentaciones from "../pages/Presentacion/Presentaciones";

export default function Modal(props) {
  const [open, setOpen] = useState(props.show_modal);
  const cancelButtonRef = useRef(null);
  const [option, setOption] = useState("nada");


  var base_url = window.location.protocol + "//" + window.location.host;
  const [owsGeoUrl, setOwsGeoUrl] = useState(base_url + "/geoserver/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=")

  const file_type = [
    { name: "ShapeFile", value: owsGeoUrl + props.name + "&outputformat=SHAPE-ZIP&SRSNAME=EPSG:4326" },
    { name: "Csv", value: owsGeoUrl + props.name + "&outputFormat=csv" },
    { name: "Json", value: owsGeoUrl + props.name + "&outputformat=JSON&SRSNAME=EPSG:4326" },
    { name: "kml", value: "http://giscopade.neuquen.gov.ar/geoserver/Copade/wms/kml?layers=" + props.name },
    { name: "Jsonp", value: owsGeoUrl + props.name + "&outputFormat=application/json" },
    { name: "gml2", value: owsGeoUrl + props.name + "&info_format=application/vnd.ogc.gml" },
    { name: "gml3", value: owsGeoUrl + props.name + "&outputFormat=application/vnd.ogc.gml/3.1.1" },
  ]

  // console.log("AAA")
  // console.log(props);

  const handleChange = (e) => {
    console.log(e.target.value);
    setOption(e.target.value);
    if (e.target.value != "nada") {
      // window.location.href = e.target.value;
      window.open(e.target.value, '_blank')
    }
  };

  return (
    <Transition.Root show={props.show_modal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-40"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
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
              {/* <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full"> */}
              <Dialog.Panel className="relative bg-white rounded-lg text-right overflow-hidden shadow-xl dark:shadow-indigo-500/50 transform transition-all w-full sm:my-8 sm:w-5/6">

                {/* <div className=" inline-flex  bg:white dark:bg-slate-900 px-1 py-1 sm:px-1 sm:flex sm:flex-row-reverse mt-100">
                  <h2 className="mt-1 inline-flex justify-center rounded-md px-5 py-5 bg-white text-base font-medium text-gray-900 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">{props.name}</h2>

                  <button
                    type="button"
                    className="mt-1 inline-flex justify-left rounded-md px-5 py-5 bg-white text-base font-medium text-gray-900 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => props.setShow_modal(!props.show_modal)}
                    ref={cancelButtonRef}
                  >
                    X
                  </button>
                </div> */}

                {/************************************ */}
                <div className="flex items-center p-2 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {/* {props.name} */}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    {/* <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <RiCloseLine />
                    </span> */}
                  </button>
                  <button
                    type="button"
                    className="mt-1 inline-flex justify-left rounded-md px-5 py-2 bg-white text-base font-medium text-gray-900 sm:mt-0 sm:ml-3 sm:w-auto sm:text-base"
                    onClick={() => props.setShow_modal(!props.show_modal)}
                    ref={cancelButtonRef}
                  >
                    <RiCloseLine />
                  </button>
                </div>
                {/************************************ */}

                <div className="bg:white dark:bg-slate-900 px-4 pt-5 pb-4 md:p-2 sm:p-6 sm:pb-1 columns-1 sm:columns-2">
                  <div className="h-96 basis-1 sm:basis-1/2 border-pink-900">
                    <MapPreview className="border-sky-900"
                      baseGeoUrl={props.baseGeoUrl}
                      name={props.name}
                    />
                    {/* <Presentaciones position={"relative"} /> */}
                  </div>
                  <div className="basis-1 sm:basis-1/2">
                    {/* <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <MapIcon
                        className="h-6 w-6 text-blue-600"
                        aria-hidden="true"
                      />
                    </div> */}

                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title

                        className="text-2xl leading-6 font-mono font-bold text-sky-700 dark:text-red-500 hover:underline decoration-4"
                      >
                        {props.title}
                      </Dialog.Title>
                      <div className="mt-5 mb-5">
                        <p className="text-sm text-black dark:text-white">
                          {props.abstract}
                        </p>
                      </div>

                      <div class="flex justify-center m-5">
                        <div class="mb-3 xl:w-96">
                          <label for="country" class="block text--d font-medium text-gray-700">Descargar</label>
                          <select
                            class="mt-1 block w-full py-2 px-3 border-2 text-per-theme-default input-per rounded-md shadow-sm "
                            aria-label="Default select example"
                            value={option}
                            onChange={handleChange}
                          >
                            <option selected value="nada">
                              Seleccionar...
                            </option>
                            {
                              file_type.map((opcion) =>

                                <option value={opcion.value}>{opcion.name}</option>
                              )}

                            {/* <option value={shapeFile}>ShapeFile</option>
                            <option value={csv}>CSV</option> */}
                          </select>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>
                {/* <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b pb-0">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => props.setShow_modal(!props.show_modal)}
                    ref={cancelButtonRef}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => props.setShow_modal(!props.show_modal)}
                    ref={cancelButtonRef}
                  >
                    Save Changes
                  </button>
                </div> */}


              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
