//import React, { useState } from "react";
import { useState, useEffect } from "react";
import { DiCss3, DiJavascript, DiNpm } from "react-icons/di";
import { FaList, FaRegFolder, FaRegFolderOpen, FaFolderOpen, FaFolder, FaEye, FaCopy } from "react-icons/fa";
import TreeView, { flattenTree } from "react-accessible-treeview";
import { SiOpenlayers } from "react-icons/si";
import "../../styles/styles.css";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Alert from "../../components/ui/alert/Alert";

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
//const base_url = window.location.protocol + "//" + window.location.host;
const base_url = import.meta.env.VITE_API_URL;
const baseGeoUrl = base_url + "/geoserver/wms?request=getCapabilities";

function Geoservicios() {

    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [abstract, setAbstract] = useState('')
    const [treeData, setTreeData] = useState(data);
    const [showAlert, setShowAlert] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    const [expandedIds, setExpandedIds] = useState();

    useEffect(() => {
        if (!showAlert) {
            setFadeOut(false); // Resetear fadeOut cuando el alert se oculta
        }
    }, [showAlert]);

    const handleCopy = (text) => {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
    };

    return (
        <>
            <Alert showAlert={showAlert} setShowAlert={setShowAlert} fadeOut={fadeOut} />
            <div className="container px-6 mx-auto align-middle">
                <div className="ide">
                    <h2 className="text-1xl font-semibold text-left lg:text-2xl text-nqn-verde dark:text-white mb-5">
                        Geoservicios
                    </h2>
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
                                        <CopyToClipboard text={element.metadata.capa}
                                            onCopy={() => handleCopy(element.metadata.capa)}>
                                            <FaCopy className="text-nqn-azul inline mb-1 mr-1 rounded-md items-center ml-4 hover:bg-gray-200 focus:outline-none" />
                                        </CopyToClipboard>
                                        <a
                                            className="text-blue-700 dark:text-blue-500 hover:underline"
                                            href={element.metadata?.capa}
                                            target="_blank"
                                        >{element.name}</a>
                                    </>
                                )}
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