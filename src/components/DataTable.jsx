import { useMemo, useState } from "react";

import DataTable from "react-data-table-component";
import FilterComponent from "./FilterComponent";

const Table = props => {

    
  const columns = [
    {
      name: "Titulo",
      selector: row => row.Title,
      sortable: true,
      grow: 0.8
    },
    {
      name: "Nombre",
      selector: row => row.Name,
      sortable: true,
      grow: 0.8,
      hide: "sm"
    },
    {
      name: "Descripción",
      selector: row => row.Abstract,
      sortable: true,
      grow: 0.8
    },
    {
      name: "Vista",
      button: true,
      cell: row =>

          <>
            <button
                className="bg:white dark:bg-slate-900 mb-1 inline-flex px-2 rounded-lg items-center ml-4 hover:bg-gray-200 focus:outline-none  text-gray-900 dark:text-white"
              onClick={() => props.click(row.name)}
              style={{ marginRight: "5px" }}
            >
              Ver
            </button>
          </>

    }
  ];

  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(
    false
  );
  // const filteredItems = data.filter(
  //   item => item.name && item.name.includes(filterText)
  // );
  const filteredItems = props.data.filter(
    item =>
      JSON.stringify(item)
        .toLowerCase()
        .indexOf(filterText.toLowerCase()) !== -1
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
        onFilter={e => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  const theme =  {
    			options: ['default', 'dark'],
    			control: { type: 'radio' },
    			description: 'toggle between light and dark themes',
    			table: {
    				type: { summary: 'string' },
    				defaultValue: { summary: 'default' },
    			},
    		}

  return (
    <DataTable
      theme={window.localStorage.getItem('color-theme')}
      title=""
      columns={columns}
      data={filteredItems}
      defaultSortField="name"
      striped
      pagination
      subHeader
      subHeaderComponent={subHeaderComponent}
    />
  );
};

export default Table;
