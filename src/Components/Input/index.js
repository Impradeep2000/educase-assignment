import React from "react";
import "./styles.css";

function Input({ type, label, placeholder, required}) {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input
      
        type={type}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
