import React from "react";

function FormInput({ label, type = "text", id, placeholder, value, onChange }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-1 text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
      />
    </div>
  );
}

export default FormInput;
