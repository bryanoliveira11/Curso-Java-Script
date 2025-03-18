import React from "react";

export default function Input({ handleChange, value, title, name, color }) {
  return (
    <>
      <label className="sidebar-label-container">
        <input type="radio" name={name} value={value} onChange={handleChange} />
        <span className="checkmark" style={{ background: color }}></span>
        {title}
      </label>
    </>
  );
}
