import { useMemo, useState, useEffect, useContext } from "react";

import DataTable, { createTheme } from "react-data-table-component";
import FilterComponent from "./FilterComponent";
import Modal from "./Modal";
import { ThemeContext } from "./ThemeContext";

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
    },
    {
      name: "Nombre",
      selector: (row) => row.Name,
      sortable: true,
      grow: 0.8,
      hide: "sm",
    },
    {
      name: "Descripción",
      selector: (row) => row.Abstract,
      sortable: true,
      grow: 0.8,
    },
    {
      name: "Vista",
      button: true,
      cell: (row) => (
        <>
          <button
            className="bg:white dark:bg-slate-900 mb-1 inline-flex px-2 rounded-lg items-center ml-4 hover:bg-gray-200 focus:outline-none  text-gray-900 dark:text-white"
            onClick={() => {
              setShow_modal(!show_modal);
              setTitle(row.Title);
              setName(row.Name)
              setAbstract(row.Abstract)
              setBaseGeoUrl("http://giscopade.neuquen.gov.ar/geoserver/wms") /**Hacer que sea dinamico para otros servidores */
              console.log(row.Name);
            }}
            style={{ marginRight: "5px" }}
          >
            Ver
          </button>
        </>
      ),
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

  // createTheme('light', {
  //   text: {
  //     primary: '#268bd2',
  //     secondary: '#2aa198',
  //   },
  //   background: {
  //     default: '#002b36',
  //   },
  //   context: {
  //     background: '#cb4b16',
  //     text: '#FFFFFF',
  //   },
  //   divider: {
  //     default: '#073642',
  //   },
  //   action: {
  //     button: 'rgba(0,0,0,.54)',
  //     hover: 'rgba(0,0,0,.08)',
  //     disabled: 'rgba(0,0,0,.12)',
  //   },
  // });

  createTheme("dark", {
    background: {
      default: "transparent",
      background: {
        default: "transparent",
      },
      context: {
        background: "transparent",
        text: "#FFFFFF",
      },
    },
  });

  const customStyles = {
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
      },
    },
    cells: {
      style: {
        background:
          window.localStorage.getItem("color-theme") == "light"
            ? "transparent"
            : "#0f172a",
      },
    },
  };

  return (
    <>
      <DataTable
        theme={theme}
        title=""
        columns={columns}
        data={filteredItems}
        defaultSortField="name"
        striped
        pagination
        subHeader
        subHeaderComponent={subHeaderComponent}
        //customStyles={customStyles}
      />
      <Modal show_modal={show_modal} setShow_modal={setShow_modal} title={title} name={name} abstract={abstract} baseGeoUrl={baseGeoUrl} />
    </>
  );
};

export default Table;
