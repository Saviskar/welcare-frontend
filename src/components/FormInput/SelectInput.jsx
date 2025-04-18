import React from "react";

function SelectInput({ label, type = "text", id, placeholder, value, options,onChange }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-1 text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <select 
        value={value} 
        onChange={onChange} id={id}
        name={id}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
      >
        {options.map(opt =>{
            return (
                <option value={opt}>{opt}</option>
            )
        })}
      </select>
    </div>
  );
}

export default SelectInput;
