/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon, MapIcon } from "@heroicons/react/outline";
import MapPreview from "../components/map_preview/MapPreview";

export default function Modal(props) {
  const [open, setOpen] = useState(props.show_modal);
  const cancelButtonRef = useRef(null);
  const [option, setOption] = useState("nada");

  const file_type = [
    {name: "ShapeFile" , value: props.baseGeoUrl+"?service=WFS&version=1.0.0&request=GetFeature&typeName="+props.name+"&outputformat=SHAPE-ZIP&SRSNAME=EPSG:4326"},
    {name: "Csv", value: props.baseGeoUrl+"?service=WFS&version=1.0.0&request=GetFeature&typeName="+props.name+"&outputFormat=csv"},
    {name: "Json", value: props.baseGeoUrl+"?service=WFS&version=1.0.0&request=GetFeature&typeName="+props.name+"&outputformat=JSON&SRSNAME=EPSG:4326"},
    {name: "kml", value: "http://giscopade.neuquen.gov.ar/geoserver/Copade/wms/kml?layers="+props.name},
    {name: "Jsonp", value: props.baseGeoUrl+"?service=WFS&version=1.0.0&request=GetFeature&typeName="+props.name+"&outputFormat=application/json"},
    {name: "gml2", value: props.baseGeoUrl+"?service=WFS&version=1.0.0&request=GetFeature&typeName="+props.name+"&info_format=application/vnd.ogc.gml"},
    {name: "gml3", value: props.baseGeoUrl+"?service=WFS&version=1.0.0&request=GetFeature&typeName="+props.name+"&outputFormat=application/vnd.ogc.gml/3.1.1"},
  ]

  // console.log("AAA")
  // console.log(props);

  const handleChange = (e) => {
    console.log(e.target.value);
    setOption(e.target.value);
    if (e.target.value != "nada") {
      window.location.href = e.target.value;
    }
  };

  return (
    <Transition.Root show={props.show_modal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
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
                <div className="bg:white dark:bg-slate-900 px-1 py-1 sm:px-1 sm:flex sm:flex-row-reverse mt-100">
                  <button
                    type="button"
                    className="mt-1 inline-flex justify-left rounded-md px-2 py-0 bg-white text-base font-medium text-gray-900 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => props.setShow_modal(!props.show_modal)}
                    ref={cancelButtonRef}
                  >
                    X
                  </button>
                </div>
                <div className="bg:white dark:bg-slate-900 px-4 pt-5 pb-4 md:p-2 sm:p-6 sm:pb-1 columns-1 sm:columns-2">
                  <div className="h-96 basis-1 sm:basis-1/2 border-pink-900">
                    <MapPreview className="border-sky-900"
                      baseGeoUrl={props.baseGeoUrl}
                      name={props.name}
                    />
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
                <div className="bg:white dark:bg-slate-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"></div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
