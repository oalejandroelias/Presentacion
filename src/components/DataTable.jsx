import { useMemo, useState, useEffect, useContext } from "react";

import DataTable, { createTheme } from "react-data-table-component";
import FilterComponent from "./FilterComponent";
import Modal from "./Modal";
import { ThemeContext } from "./ThemeContext";
import '../styles/styles.css'

const Table = (props) => {
  const { theme } = useContext(ThemeContext);

  const [show_modal, setShow_modal] = useState(false);
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [abstract, setAbstract] = useState('')
  const [baseGeoUrl, setBaseGeoUrl] = useState('')

  const columns = [
    {
      name: "Titulo",
      selector: (row) => row.Title,
      sortable: true,
      grow: 0.8,
      style: 'font-weight:bold; font-family: Arial, Helvetica, sans-serif;'
      //maxWidth: "200px"
    },
    {
      name: "Nombre",
      selector: (row) => row.Name,
      sortable: true,
      grow: 0.8,
      hide: "sm",
      style: 'font-weight:bold; font-family: Arial, Helvetica, sans-serif;'
      //maxWidth: "200px"
    },
    {
      name: "Descripción",
      selector: (row) => row.Abstract,
      sortable: true,
      grow: 0.8,
      maxWidth: "400px",
      style: 'font-weight:bold; font-family: Arial, Helvetica, sans-serif;'
    },
    {
      name: "Vista",
      button: true,
      cell: (row) => (
        <>
          <button
            className="bg:white dark:bg-slate-900 mb-1 inline-flex px-2 rounded-md items-center ml-4 hover:bg-gray-200 focus:outline-none  text-gray-900 dark:text-white"
            onClick={() => {
              setShow_modal(!show_modal);
              setTitle(row.Title);
              setName(row.Name)
              setAbstract(row.Abstract)
              setBaseGeoUrl(props.baseGeoUrl) /**Hacer que sea dinamico para otros servidores */
            }}
            style={{ marginRight: '5px' }}
          >
            <h1 style={{ color: 'blue' }}>Ver</h1>
          </button>
        </>
      ),
      grow: 0.1,
    },
  ];

  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const filteredItems = props.data.filter(
    (item) =>
      JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !==
      -1
  );

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  createTheme("dark", {
    striped: {
      default: "transparent",
      text: "#fff"
    },
    background: {
      default: "transparent",
      background: {
        default: "transparent",
      },
      context: {
        background: "transparent",
        text: "#C70039",

      },
    },
    text: {
      primary: '#fff',
      secondary: '#fff'
    },
    highlightOnHover: {
      default: "#252f45"
    },
  });

  createTheme("light", {
    //   headCells: {
    //     style: {
    //         color: 'red', // override the cell padding for head cells
    //         paddingRight: '8px',
    //     },
    // },
    striped: {
      default: "transparent",
      text: "#000000"
    },
    text: {
      primary: "#000000",
      secondary: "#2aa198"
    },
    background: {
      default: "transparent"
    },
    // context: {
    //   background: "#cb4b16",
    //   text: "#FFFFFF"
    // },
    divider: {
      default: "#073642"
    },
    action: {
      button: "rgba(0,0,0,.54)",
      hover: "rgba(0,0,0,.08)",
      disabled: "rgba(0,0,0,.12)"
    },
    highlightOnHover: {
      default: "#BAC7EE"
    },

  },);

  const customStyles = {

    headCells: {
      style: {
        font: 'bold', // override the cell padding for head cells
        paddingRight: '8px',
      },
    },

  };

  return (
    <>
      <DataTable
        className="border-collapse"
        theme={theme}
        title=""
        columns={columns}
        data={filteredItems}
        defaultSortField="name"
        striped
        pagination
        subHeader
        subHeaderComponent={subHeaderComponent}
        highlightOnHover
        customStyles={customStyles}
      />
      <Modal show_modal={show_modal} setShow_modal={setShow_modal} title={title} name={name} abstract={abstract} baseGeoUrl={props.baseGeoUrl} owsGeoUrl={props.owsGeoUrl} />
    </>
  );
};

export default Table;
