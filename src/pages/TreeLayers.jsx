//import React, { useState } from "react";
import { useState, useEffect } from "react";
import { DiCss3, DiJavascript, DiNpm } from "react-icons/di";
import { FaList, FaRegFolder, FaRegFolderOpen, FaFolderOpen, FaFolder, FaEye } from "react-icons/fa";

import TreeView, { flattenTree } from "react-accessible-treeview";
import { SiOpenlayers } from "react-icons/si";
import "../styles/styles.css";
import Modal from "../components/Modal";

const folder = {

    name: "",
    children: [
        {
            name: "Regiones",
            metadata: { "color": "#2b3e4c" },
            children: [{ name: "Regiones", metadata: { "capa": "regiones" } }],
        },
        {
            name: "Div. Política Administrativa",
            metadata: { "color": "#2b3e4c" },
            children: [
                {
                    name: "Gobiernos Locales",
                    metadata: { "color": "#87b867" },
                    children: [{ name: "Gobiernos Locales", metadata: { "capa": "gob_locales" } }],
                },
                {
                    name: "Parajes",
                    metadata: { "color": "#87b867" },
                    children: [{ name: "Parajes", metadata: { "capa": "parajes" } }],
                },
                {
                    name: "Ejidos",
                    metadata: { "color": "#87b867" },
                    children: [{ name: "Ejidos", metadata: { "capa": "ejidos" } }],
                },
                {
                    name: "Departamentos",
                    metadata: { "color": "#87b867" },
                    children: [{ name: "Departamentos", metadata: { "capa": "deptos" } }],
                },
                {
                    name: "Barrios",
                    metadata: { "color": "#87b867" },
                    children: [
                        {
                            name: "Barrios Oficiales",
                            metadata: { "color": "#f4dfb9" },
                            children: [{ name: "Parajes", metadata: { "capa": "" } }],
                        },
                        {
                            name: "Barrios Populares",
                            metadata: { "color": "#f4dfb9" },
                            children: [
                                { name: "barrios_populares_senillosa", metadata: { "capa": "barrios_populares_senillosa" } },
                                { name: "barrios_populares_centenario", metadata: { "capa": "barrios_populares_centenario" } },
                                { name: "barrios_populares_rincon_de_los_sauces", metadata: { "capa": "barrios_populares_rincon_de_los_sauces" } },
                                { name: "barrios_populares_chosmalal", metadata: { "capa": "barrios_populares_chosmalal" } },
                                { name: "barrios_populares_sanpa", metadata: { "capa": "barrios_populares_sanpa" } },
                                { name: "barrios_populares_zapala", metadata: { "capa": "barrios_populares_zapala" } },
                                { name: "barrios_populares_loncopue", metadata: { "capa": "barrios_populares_loncopue" } },
                                { name: "barrios_populares_junin_de_los_andes", metadata: { "capa": "barrios_populares_junin_de_los_andes" } },
                                { name: "barrios_populares_san_martin_de_los_andes", metadata: { "capa": "barrios_populares_san_martin_de_los_andes" } },
                                { name: "barrios_populares_picun_leufu", metadata: { "capa": "barrios_populares_picun_leufu" } },
                                { name: "barrios_populares_picun_leufu", metadata: { "capa": "barrios_populares_picun_leufu" } },
                                { name: "barrios_populares_mariano_moreno", metadata: { "capa": "barrios_populares_mariano_moreno" } },
                                { name: "barrios_populares_alumine", metadata: { "capa": "barrios_populares_alumine" } },
                                { name: "barrios_populares_nqn", metadata: { "capa": "barrios_populares_nqn" } },
                                { name: "barrios_populares_cutralco", metadata: { "capa": "barrios_populares_cutralco" } },
                                { name: "barrios_populares_anielo", metadata: { "capa": "barrios_populares_anielo" } },
                                { name: "barrios_populares_vista_alegre", metadata: { "capa": "barrios_populares_vista_alegre" } },
                                { name: "barrios_populares_plottier", metadata: { "capa": "barrios_populares_plottier" } },
                            ],
                        },
                    ],
                },
            ],

        },
        {
            name: "Conectividad, transporte y Mov. Urbana",
            metadata: { "color": "#2b3e4c" },
            children: [{
                name: "Red Vial",
                metadata: { "color": "#87b867" },
                children: [
                    {
                        name: "Rutas",
                        metadata: { "color": "#f4dfb9" },
                        children: [

                            { name: "rutas_nacionales", metadata: { "capa": "rutas_nacionales" } },
                            { name: "rutas_provinciales", metadata: { "capa": "rutas_provinciales" } },
                            { name: "rutas_terciarias", metadata: { "capa": "rutas_terciarias" } },

                        ],
                    },
                    {
                        name: "Inventario Vial",
                        metadata: { "color": "#f4dfb9" },
                        children: [
                            { name: "alambrados", metadata: { "capa": "alambrados" } },
                            { name: "controles_de_acceso", metadata: { "capa": "controles_de_acceso" } },
                            { name: "cruces_de_ffcc_a_nivel", metadata: { "capa": "cruces_de_ffcc_a_nivel" } },
                            { name: "drenajes_transversales", metadata: { "capa": "drenajes_transversales" } },
                            { name: "emplazamientos_dnv", metadata: { "capa": "emplazamientos_dnv" } },
                            { name: "interseccion", metadata: { "capa": "interseccion" } },
                        ],
                    },
                    {
                        name: "Tránsito",
                        metadata: { "color": "#f4dfb9" },
                        children: [
                            { name: "conteos_vehiculares", metadata: { "capa": "conteos_vehiculares" } },
                            { name: "transito_medio_diario_anual", metadata: { "capa": "transito_medio_diario_anual" } },
                        ],
                    },
                ]
            },
            {
                name: "Red Ferroviaria",
                metadata: { "color": "#87b867" },
                children: [
                    { name: "estaciones_y_paradas_ferroviarias", metadata: { "capa": "estaciones_y_paradas_ferroviarias" } },
                    { name: "lineas_de_transporte_ferroviario", metadata: { "capa": "lineas_de_transporte_ferroviario" } },
                ]
            },
            {
                name: "Red Digital",
                metadata: { "color": "#87b867" },
                children: [
                    { name: "mastil_torre", metadata: { "capa": "mastil_torre" } },
                    { name: "red_ac_alta_capacidad_inalambrica_point", metadata: { "capa": "red_ac_alta_capacidad_inalambrica_point" } },
                    { name: "red_ac_alta_capacidad_fo_line", metadata: { "capa": "red_ac_alta_capacidad_fo_line" } },
                    { name: "red_bc_baja_capacidad_line", metadata: { "capa": "red_bc_baja_capacidad_line" } },
                    { name: "red_mc_media_capacidad_sispae_line", metadata: { "capa": "red_mc_media_capacidad_sispae_line" } },
                    { name: "red_bc_baja_capacidad_point", metadata: { "capa": "red_bc_baja_capacidad_point" } },
                    { name: "red_fm", metadata: { "capa": "red_fm" } },
                    { name: "red_mc_media_capacidad_sispae_point", metadata: { "capa": "red_mc_media_capacidad_sispae_point" } },
                    { name: "red_ac_alta_capacidad_fo_point", metadata: { "capa": "red_ac_alta_capacidad_fo_point" } },
                    { name: "red_tv", metadata: { "capa": "red_tv" } },
                    { name: "red_ac_alta_capacidad_inalambrica_line", metadata: { "capa": "red_ac_alta_capacidad_inalambrica_line" } },
                    { name: "red_vsat_very_small_aperture_terminals", metadata: { "capa": "red_vsat_very_small_aperture_terminals" } },
                ]
            },
            ],
        },
        {
            name: "Bienestar Social",
            metadata: { "color": "#2b3e4c" },
            children: [
                {
                    name: "Cuidado de la Salud",
                    metadata: { "color": "#87b867" },
                    children: [
                        {
                            name: "Establecimientos de Salud",
                            metadata: { "color": "#f4dfb9" },
                            children: [
                                { name: "centros_de_salud_rural", metadata: { "capa": "centros_de_salud_rural" } },
                                { name: "centro_de_salud_intercultural", metadata: { "capa": "centro_de_salud_intercultural" } },
                                { name: "centros_de_dia", metadata: { "capa": "centros_de_dia" } },
                                { name: "centros_de_salud", metadata: { "capa": "centros_de_salud" } },
                                { name: "establecimientos_de_salud", metadata: { "capa": "establecimientos_de_salud" } },
                                { name: "hospital", metadata: { "capa": "hospital" } },
                                { name: "hospital_de_cabecera_interzonal", metadata: { "capa": "hospital_de_cabecera_interzonal" } },
                                { name: "hospital_de_cabecera_zonal", metadata: { "capa": "hospital_de_cabecera_zonal" } },
                                { name: "hospital_de_referencia_provincial", metadata: { "capa": "hospital_de_referencia_provincial" } },
                                { name: "puestos_sanitarios", metadata: { "capa": "puestos_sanitarios" } },
                            ]
                        },
                    ]
                },
                {
                    name: "Educación",
                    metadata: { "color": "#87b867" },
                    children: [
                        {
                            name: "Distritos Educativos",
                            metadata: { "color": "#f4dfb9" },
                            children: [
                                { name: "distritos_educativos", metadata: { "capa": "distritos_educativos" } },
                                { name: "edu_sedes_deleg_distritos", metadata: { "capa": "edu_sedes_deleg_distritos" } },
                            ]
                        },
                        {
                            name: "Establecimientos Educativos",
                            metadata: { "color": "#f4dfb9" },
                            children: [
                                { name: "establecimientos_educativos", metadata: { "capa": "establecimientos_educativos" } },
                            ]
                        },
                        {
                            name: "Modalidades",
                            metadata: { "color": "#f4dfb9" },
                            children: [
                                {
                                    name: "Adultos", children: [
                                        { name: "edu_mod_adul_prim", metadata: { "capa": "edu_mod_adul_prim" } },
                                        { name: "edu_mod_adul_sec", metadata: { "capa": "edu_mod_adul_sec" } },
                                        { name: "edu_mod_adul_form_prof", metadata: { "capa": "edu_mod_adul_form_prof" } },
                                    ]
                                },
                                {
                                    name: "Complementarias", children: [
                                        { name: "edu_mod_comp_contex_encierro", metadata: { "capa": "edu_mod_comp_contex_encierro" } },
                                        { name: "edu_mod_comp_artistica", metadata: { "capa": "edu_mod_comp_artistica" } },
                                        { name: "edu_mod_comp_artistica", metadata: { "capa": "edu_mod_comp_intercult_bilin" } },
                                        { name: "edu_mod_comp_sec_tec_agrop0", metadata: { "capa": "edu_mod_comp_sec_tec_agrop0" } },
                                    ]
                                },
                                {
                                    name: "Común", children: [
                                        { name: "edu_mod_com_inicial", metadata: { "capa": "edu_mod_com_inicial" } },
                                        { name: "edu_mod_com_prim", metadata: { "capa": "edu_mod_com_prim" } },
                                        { name: "edu_mod_com_artistica", metadata: { "capa": "edu_mod_com_artistica" } },
                                        { name: "edu_mod_com_serv_compl0", metadata: { "capa": "edu_mod_com_serv_compl0" } },
                                        { name: "edu_mod_com_sup_no_univ0", metadata: { "capa": "edu_mod_com_sup_no_univ0" } },
                                        { name: "edu_mod_com_sec0", metadata: { "capa": "edu_mod_com_sec0" } },
                                    ]
                                },
                                {
                                    name: "Especial", children: [
                                        { name: "edu_mod_esp_inicial0", metadata: { "capa": "edu_mod_esp_inicial0" } },
                                        { name: "edu_mod_esp_prim", metadata: { "capa": "edu_mod_esp_prim" } },
                                        { name: "edu_mod_esp_integracion", metadata: { "capa": "edu_mod_esp_integracion" } },
                                        { name: "edu_mod_esp_jov_y_adult", metadata: { "capa": "edu_mod_esp_jov_y_adult" } },
                                    ]
                                },
                                {
                                    name: "Radios Escolares", children: [
                                        { name: "edu_radio_escolar_tecnicas0", metadata: { "capa": "edu_radio_escolar_tecnicas0" } },
                                        { name: "edu_radio_escolar_secundarios", metadata: { "capa": "edu_radio_escolar_secundarios" } },
                                        { name: "edu_radio_escolar_inicial", metadata: { "capa": "edu_radio_escolar_inicial" } },
                                        { name: "edu_radio_escolar_primarios", metadata: { "capa": "edu_radio_escolar_primarios" } },
                                    ]
                                },

                            ]
                        },
                        {
                            name: "Radios Escolares",
                            metadata: { "color": "#f4dfb9" },
                            children: [
                                { name: "edu_radio_escolar_inicial", metadata: { "capa": "edu_radio_escolar_inicial" } },
                                { name: "edu_radio_escolar_primarios", metadata: { "capa": "edu_radio_escolar_primarios" } },
                                { name: "edu_radio_escolar_secundarios", metadata: { "capa": "edu_radio_escolar_secundarios" } },
                                { name: "edu_radio_escolar_tecnicas0", metadata: { "capa": "edu_radio_escolar_tecnicas0" } },
                            ]
                        },
                    ]
                },
            ]
        },
        {
            name: "Actividades Económicas e Inversiones",
            metadata: { "color": "#2b3e4c" },
            children: [
                {
                    name: "Hidrocarburos",
                    metadata: { "color": "#87b867" },
                    children: [
                        {
                            name: "Pozos", children: [
                                { name: "capa", metadata: { "capa": "capa" } }
                            ]
                        },
                        {
                            name: "Acueductos", children: [
                                { name: "capa", metadata: { "capa": "capa" } }
                            ]
                        },
                        {
                            name: "Bateria", children: [
                                { name: "capa", metadata: { "capa": "capa" } }
                            ]
                        },
                        {
                            name: "Areas y Concesiones", children: [
                                { name: "capa", metadata: { "capa": "capa" } }
                            ]
                        },
                        {
                            name: "Distrib. de Fluidos de Fm. Vaca Muerta", children: [
                                { name: "capa", metadata: { "capa": "capa" } }
                            ]
                        },
                        {
                            name: "Gasoductos", children: [
                                { name: "capa", metadata: { "capa": "capa" } }
                            ]
                        },
                        {
                            name: "Gasoductos", children: [
                                { name: "capa", metadata: { "capa": "capa" } }
                            ]
                        },
                        {
                            name: "Locaciones", children: [
                                { name: "capa", metadata: { "capa": "capa" } }
                            ]
                        },
                        {
                            name: "Oleoductos", children: [
                                { name: "capa", metadata: { "capa": "capa" } }
                            ]
                        },
                        {
                            name: "Plantas de Tratamiento", children: [
                                { name: "capa", metadata: { "capa": "capa" } }
                            ]
                        },
                        {
                            name: "Sismicas 2D", children: [
                                { name: "capa", metadata: { "capa": "capa" } }
                            ]
                        },
                        {
                            name: "Sismicas 3D", children: [
                                { name: "capa", metadata: { "capa": "capa" } }
                            ]
                        },
                    ]
                },
                {
                    name: "Mineria",
                    metadata: { "color": "#87b867" },
                    children: [
                        {
                            name: "Minas", children: [
                                { name: "capa", metadata: { "capa": "capa" } }
                            ]
                        },
                        {
                            name: "Cateos", children: [
                                { name: "capa", metadata: { "capa": "capa" } }
                            ]
                        },
                        {
                            name: "Canteras", children: [
                                { name: "capa", metadata: { "capa": "capa" } }
                            ]
                        },
                        {
                            name: "Concesiones de Exploración", children: [
                                { name: "capa", metadata: { "capa": "capa" } }
                            ]
                        },
                        {
                            name: "Demasías", children: [
                                { name: "capa", metadata: { "capa": "capa" } }
                            ]
                        },
                        {
                            name: "Manifestación de Descubrimiento", children: [
                                { name: "capa", metadata: { "capa": "capa" } }
                            ]
                        },
                        {
                            name: "Pertenencias", children: [
                                { name: "capa", metadata: { "capa": "capa" } }
                            ]
                        },
                        {
                            name: "Servidumbres", children: [
                                { name: "capa", metadata: { "capa": "capa" } }
                            ]
                        },


                    ]
                },]
        },
    ],
};

const data = flattenTree(folder);
const base_url = window.location.protocol + "//" + window.location.host;
const baseGeoUrl = base_url + "/geoserver/wms?request=getCapabilities";

function TreeLayers() {

    const [show_modal, setShow_modal] = useState(false);
    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [abstract, setAbstract] = useState('')
    const [treeData, setTreeData] = useState(data);

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
            filtered.map((val)=> {
                return val.id;
            })
        )

        //Lo modifico desde useEffect
        //setExpandedIds(newExpandedIds);
        //setTreeData(filtered);
    };

    const filterNodesByText = () => {
        const valueToFilter = document.querySelector("#txtToFilter").value.trim();
        if (!!valueToFilter) {
            filter(valueToFilter);
        } else {
            setExpandedIds([])
            //setTreeData(data);
        }
    };

    const onKeyDown = (e) => {
        if (e.key === "Enter") {
            filterNodesByText();
        }
    };

    // const getSelected = async (sel) => {
    //     let a = sel;
    // }
    /********************************** */

    return (
        <>
            <div className="container px-6 py-10 mx-auto align-middle">
                <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Directorio de  <span className="text-blue-500 ">capas</span></h1>
                <div className="ide">
                    <div class="relative">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </span>

                        <input onChange={filterNodesByText} type="text" id="txtToFilter" onKeyDown={onKeyDown} className="w-100 py-3 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" placeholder="Buscar" />
                    </div>
                    <TreeView
                        //propagateSelectUpwards
                        data={treeData}
                        aria-label="directory tree"
                        //togglableSelect
                        //clickAction="EXCLUSIVE_SELECT"
                        //onSelect={getSelected}
                        //multiSelect
                        expandedIds={expandedIds}
                        //defaultExpandedIds={[1]}
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
                                        <a 
                                        className="text-blue-700 dark:text-blue-500 hover:underline"
                                        onClick={() => {
                                            setShow_modal(!show_modal);
                                            setTitle(element.metadata?.capa);
                                            setName(element.metadata?.capa)
                                            setAbstract("")
                                            setBaseGeoUrl(baseGeoUrl) /**Hacer que sea dinamico para otros servidores */
                                        }} 
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

            <Modal show_modal={show_modal} setShow_modal={setShow_modal} title={title} name={name} abstract={abstract} baseGeoUrl={baseGeoUrl} />
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
export default TreeLayers;