import React from "react";

export default function Input({title}) {
  return (
    <>
      <label className="sidebar-label-container">
        <input type="radio" name="test" />
        <span className="checkmark"></span>{title}
      </label>
    </>
  );
}
