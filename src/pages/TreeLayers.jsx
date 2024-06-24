import React from "react";
import { DiCss3, DiJavascript, DiNpm } from "react-icons/di";
import { FaList, FaRegFolder, FaRegFolderOpen } from "react-icons/fa";
import TreeView, { flattenTree } from "react-accessible-treeview";
import { SiOpenlayers } from "react-icons/si";
import "../styles/styles.css";

const folder = {
    name: "",
    children: [
        {
            name: "Regiones",
            children: [{ name: "Regiones" }, { name: "styles.css" }],
        },
        {
            name: "Div. Política Administrativa",
            children: [
                {
                    name: "Gobiernos Locales",
                    children: [{ name: "Gobiernos Locales" }],
                },
                {
                    name: "Parajes",
                    children: [{ name: "Parajes" }],
                },
                {
                    name: "Ejidos",
                    children: [{ name: "Ejidos" }],
                },
                {
                    name: "Departamentos",
                    children: [{ name: "Departamentos" }],
                },
                {
                    name: "Barrios",
                    children: [
                        {
                            name: "Barrios Oficiales",
                            children: [{ name: "Parajes" }],
                        },
                        {
                            name: "Barrios Populares",
                            children: [{ name: "Parajes" }],
                        },
                    ],
                },
            ],

        },
        {
            name: ".npmignore",
        },
        {
            name: "package.json",
        },
        {
            name: "webpack.config.js",
        },
    ],
};

const data = flattenTree(folder);
function TreeLayers() {
    return (
        <div>
            <div className="ide">
                <TreeView
                    data={data}
                    aria-label="directory tree"
                    togglableSelect
                    clickAction="EXCLUSIVE_SELECT"
                    multiSelect
                    nodeRenderer={({
                        element,
                        isBranch,
                        isExpanded,
                        getNodeProps,
                        level,
                        handleSelect,
                    }) => (
                        <div {...getNodeProps()} style={{ paddingLeft: 20 * (level - 1) }}>
                            {isBranch ? (
                                <FolderIcon isOpen={isExpanded} ></FolderIcon>
                            ) : (
                                <FileIcon filename={element.name} />
                            )}
                            {element.name}
                        </div>
                    )}
                />
            </div>
        </div>
    );
}

const FolderIcon = ({ isOpen }) =>
    isOpen ? (
        <FaRegFolderOpen color="e8a87c" className="icon" />
    ) : (
        <FaRegFolder color="e8a87c" className="icon" />
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
            return <SiOpenlayers color="red" className="icon" />;
    }
};
export default TreeLayers;