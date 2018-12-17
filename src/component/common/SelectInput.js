import React from "react";

const SelectInput = ({
  name,
  label,
  onChange,
  defaultOption,
  value,
  options
}) => {
  return (
    <div class="input-field">
      <select value={value} name={name} onChange={onChange}>
        <option value="" disabled selected>
          {defaultOption}
        </option>
        {options.map(option => {
          return (
            <option key={option.code} value={option.code}>
              {option.text}
            </option>
          );
        })}
      </select>
      <label>{label}</label>
    </div>
  );
};

export default SelectInput;
