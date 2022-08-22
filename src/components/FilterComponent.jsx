import React from "react";
import styled from "styled-components";

const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.small ? 5 : undefined,
}))`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;
`;

const ClearButton = styled.button`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 34px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FilterComponent = ({ filterText, onFilter, onClear }) => (

  <div class="grid grid-cols-3 gap-6">
    <div class="col-span-3 sm:col-span-2">
      <div class="mt-1 flex rounded-md shadow-sm">
        <input
          type="text"
          name="search"
          id="search"
          value={filterText}
          onChange={onFilter}
          class="flex-1 block w-full text-center rounded-l-md border-2 border-r-0 border-black focus:outline-none dark:border-white bg:white dark:bg-slate-700 text-black dark:text-white text-sm "
          placeholder="Filtrar..."
        />
        <span class="inline-flex items-center px-0 rounded-r-md border-2 border-l-2 border-black dark:border-white bg:white dark:bg-slate-700 text-black dark:text-white text-sm">
          <ClearButton onClick={onClear}>X</ClearButton>
        </span>
      </div>
    </div>
  </div>
);

export default FilterComponent;
