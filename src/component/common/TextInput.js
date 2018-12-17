import React from "react";

const TextInput = ({ name, label, onChange, placeholder, value, error, type="text" }) => {
  return (
    <div className="input-field">
      <input
        placeholder={placeholder}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
      <label className="active" for={name}>{label}</label>
    </div>
  );
};

export default TextInput;
