import React from "react";
import "./Colors.css";
import Input from "../../Input";

export default function Colors({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <label className="sidebar-label-container">
        <input type="radio" onChange={handleChange} value="" name="test3" />
        <span className="checkmark all"></span>All
      </label>
      <Input name="test3" value="black" title="Black" />
      <Input name="test3" value="blue" title="Blue" />
      <Input name="test3" value="red" title="Red" />
      <Input name="test3" value="green" title="Green" />
      <label className="sidebar-label-container">
        <input
          type="radio"
          onChange={handleChange}
          value="white"
          name="test3"
        />
        <span
          className="checkmark"
          style={{ background: "white", border: "2px solid black" }}
        ></span>
        White
      </label>
    </div>
  );
}
