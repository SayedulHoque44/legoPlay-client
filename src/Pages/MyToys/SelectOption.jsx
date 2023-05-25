import React from "react";

const SelectOption = ({
  setSelectedValue,
  selectedValue,
  handleSelectChange,
}) => {
  //   console.log(selectedValue);
  return (
    <div>
      <label className="text-blue-500 block">Select Sort Option:</label>
      <select
        value={selectedValue}
        onChange={handleSelectChange}
        className="select select-accent w-full max-w-xs">
        <option value="" disabled hidden>
          -- Please select --
        </option>
        <option value="price">Price</option>
        <option value="ratings">Ratings</option>
      </select>
    </div>
  );
};

export default SelectOption;
