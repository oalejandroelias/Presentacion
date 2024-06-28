//import React, { useState } from "react";
import { useState } from "react";
import { DiCss3, DiJavascript, DiNpm } from "react-icons/di";
import { FaList, FaRegFolder, FaRegFolderOpen } from "react-icons/fa";
import TreeView, { flattenTree } from "react-accessible-treeview";
import { SiOpenlayers } from "react-icons/si";
import "../styles/styles.css";
import Modal from "../components/Modal";

const folder = {

    name: "",
    children: [
        {
            name: "Regiones",
            children: [{ name: "Regiones", metadata: { "capa": "regiones" } }],
        },
        {
            name: "Div. Política Administrativa",
            children: [
                {
                    name: "Gobiernos Locales",
                    children: [{ name: "Gobiernos Locales", metadata: { "capa": "gob_locales" } }],
                },
                {
                    name: "Parajes",
                    children: [{ name: "Parajes", metadata: { "capa": "parajes" } }],
                },
                {
                    name: "Ejidos",
                    children: [{ name: "Ejidos", metadata: { "capa": "ejidos" } }],
                },
                {
                    name: "Departamentos",
                    children: [{ name: "Departamentos", metadata: { "capa": "deptos" } }],
                },
                {
                    name: "Barrios",
                    children: [
                        {
                            name: "Barrios Oficiales",
                            children: [{ name: "Parajes", metadata: { "capa": "" } }],
                        },
                        {
                            name: "Barrios Populares",
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
            children: [{
                name: "Red Vial",
                children: [
                    {
                        name: "Rutas",
                        children: [

                            { name: "rutas_nacionales", metadata: { "capa": "rutas_nacionales" } },
                            { name: "rutas_provinciales", metadata: { "capa": "rutas_provinciales" } },
                            { name: "rutas_terciarias", metadata: { "capa": "rutas_terciarias" } },

                        ],
                    },
                    {
                        name: "Inventario Vial",
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
                        children: [
                            { name: "conteos_vehiculares", metadata: { "capa": "conteos_vehiculares" } },
                            { name: "transito_medio_diario_anual", metadata: { "capa": "transito_medio_diario_anual" } },
                        ],
                    },
                ]
            },
            {
                name: "Red Ferroviaria",
                children: [
                    { name: "estaciones_y_paradas_ferroviarias", metadata: { "capa": "estaciones_y_paradas_ferroviarias" } },
                    { name: "lineas_de_transporte_ferroviario", metadata: { "capa": "lineas_de_transporte_ferroviario" } },
                ]
            },
            {
                name: "Red Digital",
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
            children: [
                {
                    name: "Cuidado de la Salud",
                    children: [
                        {
                            name: "Establecimientos de Salud",
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
                    children: [
                        {
                            name: "Distritos Educativos", children: [
                                { name: "distritos_educativos", metadata: { "capa": "distritos_educativos" } },
                                { name: "edu_sedes_deleg_distritos", metadata: { "capa": "edu_sedes_deleg_distritos" } },
                            ]
                        },
                        {
                            name: "Establecimientos Educativos", children: [
                                { name: "establecimientos_educativos", metadata: { "capa": "establecimientos_educativos" } },
                            ]
                        },
                        {
                            name: "Modalidades", children: [
                                {
                                    name: "Adultos", children: [
                                        { name: "edu_mod_adul_prim", metadata: { "capa": "edu_mod_adul_prim" } },
                                        { name: "edu_mod_adul_sec", metadata: { "capa": "edu_mod_adul_sec" } },
                                        { name: "edu_mod_adul_form_prof", metadata: { "capa": "edu_mod_adul_form_prof" } },
                                    ]
                                },
                                {
                                    name: "Complementarias", children: [
                                        { name: "capa", metadata: { "capa": "capa" } },
                                    ]
                                },
                                {
                                    name: "Común", children: [
                                        { name: "capa", metadata: { "capa": "capa" } },
                                    ]
                                },
                                {
                                    name: "Especial", children: [
                                        { name: "capa", metadata: { "capa": "capa" } },
                                    ]
                                },
                                {
                                    name: "Radios Escolares", children: [
                                        { name: "capa", metadata: { "capa": "capa" } },
                                    ]
                                },

                            ]
                        },
                        {
                            name: "Radios Escolares", children: [
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
            children: [
                {
                    name: "Hidrocarburos",
                    children: [
                        { name: "capa", metadata: { "capa": "capa" } },]
                },
                {
                    name: "Mineria",
                    children: [
                        { name: "capa", metadata: { "capa": "capa" } },]
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

    return (
        <>
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

                        < div {...getNodeProps()} className="inline" style={{ paddingLeft: 20 * (level - 1) }}>
                            {isBranch ? (
                                <><FolderIcon isOpen={isExpanded} ></FolderIcon>{element.name}</>
                            ) : (
                                <><FileIcon filename={element.name} /><a href={element.metadata?.capa}>{element.name}</a>
                                    <>
                                        <button
                                            className="bg:white dark:bg-slate-900 mb-1 inline-flex px-2 rounded-md items-center ml-4 hover:bg-gray-200 focus:outline-none  text-gray-900 dark:text-white"
                                            onClick={() => {
                                                setShow_modal(!show_modal);
                                                setTitle(element.metadata?.capa);
                                                setName(element.metadata?.capa)
                                                setAbstract("")
                                                setBaseGeoUrl(baseGeoUrl) /**Hacer que sea dinamico para otros servidores */
                                            }}
                                            style={{ marginRight: '5px' }}
                                        >
                                            <h1 style={{ color: 'blue' }}>Ver</h1>
                                        </button>
                                    </></>
                            )}
                            {/* <a href={element.metadata?.capa}>{element.name}X</a> */}
                        </div>
                    )}
                />
            </div>

            <Modal show_modal={show_modal} setShow_modal={setShow_modal} title={title} name={name} abstract={abstract} baseGeoUrl={baseGeoUrl} />
        </ >
    );
}

const FolderIcon = ({ isOpen }) =>
    isOpen ? (
        <FaRegFolderOpen color="green" className="icon inline" />
    ) : (
        <FaRegFolder color="green" className="icon inline" />
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