//import React, { useState } from "react";
import { useState, useEffect } from "react";
import { DiCss3, DiJavascript, DiNpm } from "react-icons/di";
import { FaList, FaRegFolder, FaRegFolderOpen, FaFolderOpen, FaFolder, FaEye, FaCopy } from "react-icons/fa";

import TreeView, { flattenTree } from "react-accessible-treeview";
import { SiOpenlayers } from "react-icons/si";
import "../../styles/styles.css";


const folder = {

    name: "",
    children: [
        {
            name: "Servicios",
            metadata: { "color": "#2b3e4c" },
            children: [
                { name: "WCS", metadata: { "capa": "https://giscopade.neuquen.gov.ar/geoserver/ows?service=wcs&version=1.0.0&request=GetCapabilities" } },
                { name: "WFS", metadata: { "capa": "https://giscopade.neuquen.gov.ar/geoserver/ows?service=wfs&version=1.0.0&request=GetCapabilities" } },
                { name: "WMS", metadata: { "capa": "https://giscopade.neuquen.gov.ar/geoserver/ows?service=wms&version=1.3.0&request=GetCapabilities" } },
            ],

        },


    ],
};

const data = flattenTree(folder);
const base_url = window.location.protocol + "//" + window.location.host;
const baseGeoUrl = base_url + "/geoserver/wms?request=getCapabilities";

function Geoservicios() {


    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [abstract, setAbstract] = useState('')
    const [treeData, setTreeData] = useState(data);

    const [showAlert, setShowAlert] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    /********************************** */
    const [expandedIds, setExpandedIds] = useState();

    useEffect(() => {
        //setTreeData(filtered);

        // setExpandedIds(
        //     treeData.map((val)=> {
        //         return val.id;
        //     })
        // )
        // Puedes realizar cualquier otra acción que necesites aquí
    }, [treeData]);



    const filter = (value) => {
        const filtered = [];

        // setExpandedIds([]);
        // setTreeData(data)

        const includeChildren = (id) => {
            data.forEach((item) => {
                if (item.parent === id) {
                    if (!filtered.find((x) => x.id === item.id)) {
                        filtered.push(item);
                        if (Array.isArray(item.children) && item.children.length) {
                            includeChildren(item.id);
                        }
                    }
                }
            });
        };

        const includeParent = async (id, idparent) => {
            data.forEach((item) => {
                if (item.id === idparent) {
                    if (!filtered.find((x) => x.id === item.id)) {

                        if (id == 80) {
                            let a = 1;
                        }
                        // Crear una copia del objeto para no modificar el original
                        const newItem = { ...item, children: [id] };
                        filtered.push(newItem);
                        // const parentItem = data.find(d => d.id === idparent);
                        // if (parentItem && parentItem.parent) {
                        //     includeParent(id, parentItem.parent);
                        // }
                        if (newItem && typeof newItem.parent != "undefined") {
                            includeParent(newItem.id, newItem.parent);
                        }
                    }
                }
            });
        };

        data.forEach((item) => {
            if (item.id === "ROOT") {
                return;
            }
            if (item.name.toUpperCase().includes(value.toUpperCase())) {
                if (!filtered.find((x) => x.id === item.id)) {

                    filtered.push(item);
                    includeParent(item.id, item.parent);
                }
                if (Array.isArray(item.children) && item.children.length) {
                    includeChildren(item.id);
                }
            }
        });

        if (!filtered.find((fitem) => fitem.id === 0)) {
            filtered.unshift(
                Object.assign({
                    ...data[0],
                    children: data[0].children.filter((id) =>
                        filtered.find((fitem) => fitem.id === id)
                    ),
                })
            );
        }

        setExpandedIds(
            filtered.map((val) => {
                return val.id;
            })
        )

        //Lo modifico desde useEffect
        //setExpandedIds(newExpandedIds);
        //setTreeData(filtered);
    };

    // const filterNodesByText = () => {
    //     const valueToFilter = document.querySelector("#txtToFilter").value.trim();
    //     if (!!valueToFilter) {
    //         filter(valueToFilter);
    //     } else {
    //         setExpandedIds([])
    //         //setTreeData(data);
    //     }
    // };

    // const onKeyDown = (e) => {
    //     if (e.key === "Enter") {
    //         filterNodesByText();
    //     }
    // };

    useEffect(() => {
        if (!showAlert) {
            setFadeOut(false); // Resetear fadeOut cuando el alert se oculta
        }
    }, [showAlert]);

    // const getSelected = async (sel) => {
    //     let a = sel;
    // }
    /********************************** */

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log('Copied to clipboard:', text);
                setShowAlert(true);

                setTimeout(() => setShowAlert(false), 3000);
            })
            .catch((err) => {
                console.error('Failed to copy:', err);
            });
    };

    const Alert = ({ color }) => {

        return (
            <>
                {showAlert ? (
                    <div
                        className={
                            `transition ease-in-out delay-150 bg-blue-500 text-white px-2 py-4 border-0 rounded fixed top-20 right-4 mb-4 bg-green-500/70 z-50 ${fadeOut ? 'opacity-0' : 'opacity-100'
                            }`
                        }
                    >
                        <span className="text-xl inline-block mr-5 align-middle">
                            <i className="fas fa-bell" />
                        </span>
                        <span className="inline-block align-middle mr-8">
                            <b className="capitalize"> Url de Servicio Copiado! </b>
                        </span>
                        <button
                            className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-80 mt-4 mr-6 outline-none focus:outline-none"
                            onClick={() => setShowAlert(false)}
                        >
                            <span>×</span>
                        </button>
                    </div>
                ) : null}
            </>
        );
    };

    return (
        <>
            <Alert color="green" />
            <div className="container px-6 mx-auto align-middle">
                <div className="ide">
                    <h2 className="text-1xl font-semibold text-left lg:text-2xl text-nqn-verde dark:text-white mb-5">
                        Geoservicios
                    </h2>
                    {/* <div className="relative" hidden>
                        <input onChange={filterNodesByText} type="text" id="txtToFilter" onKeyDown={onKeyDown} className="w-100 py-3 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" placeholder="Buscar" />
                    </div> */}
                    <TreeView
                        //propagateSelectUpwards
                        data={treeData}
                        aria-label="directory tree"
                        //togglableSelect
                        //clickAction="EXCLUSIVE_SELECT"
                        //onSelect={getSelected}
                        //multiSelect
                        expandedIds={expandedIds}
                        defaultExpandedIds={[1]}
                        nodeRenderer={({
                            element,
                            isBranch,
                            isExpanded,
                            getNodeProps,
                            level,
                            handleSelect,
                        }) => (

                            < div {...getNodeProps()} className="inline text-2xl" style={{ paddingLeft: 20 * (level - 1) }}>
                                {isBranch ? (
                                    <><FolderIcon style={{ color: element.metadata?.color }} isOpen={isExpanded} color={element.metadata?.color} ></FolderIcon><strong className="text-black dark:text-white">{element.name}</strong></>
                                ) : (
                                    <>
                                        {/* <FileIcon filename={element.name} /> */}
                                        <FaCopy className="text-nqn-azul inline mb-1 mr-1 rounded-md items-center ml-4 hover:bg-gray-200 focus:outline-none" onClick={() => handleCopy(element.metadata?.capa)} />
                                        <a
                                            className="text-blue-700 dark:text-blue-500 hover:underline"
                                            href={element.metadata?.capa}
                                            target="_blank"
                                        >{element.name}</a>
                                        {/* <FaEye className="text-nqn-azul inline mb-1 rounded-md items-center ml-4 hover:bg-gray-200 focus:outline-none" onClick={() => {
                                            setShow_modal(!show_modal);
                                            setTitle(element.metadata?.capa);
                                            setName(element.metadata?.capa)
                                            setAbstract("")
                                            setBaseGeoUrl(baseGeoUrl)
                                        }} /> */}

                                    </>
                                )}
                                {/* <a href={element.metadata?.capa}>{element.name}X</a> */}
                            </div>
                        )}
                    />
                </div>
            </div>
        </ >
    );
}

const FolderIcon = ({ isOpen, color }) =>
    isOpen ? (
        <FaFolderOpen color={color ? color : "black"} className="icon inline" />
    ) : (
        <FaFolder color={color ? color : "black"} className="icon inline" />
    );

const FileIcon = ({ filename }) => {
    const extension = filename.slice(filename.lastIndexOf(".") + 1);
    switch (extension) {
        case "js":
            return <DiJavascript color="yellow" className="icon" />;
        case "css":
            return <DiCss3 color="turquoise" className="icon" />;
        case "json":
            return <FaList color="yellow" className="icon" />;
        case "npmignore":
            return <DiNpm color="red" className="icon" />;
        default: SiOpenlayers
            return <SiOpenlayers color="blue" className="icon inline" />;
    }
};
export default Geoservicios;