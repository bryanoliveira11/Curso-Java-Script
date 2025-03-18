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
      <Input
        handleChange={handleChange}
        name="test3"
        color="black"
        value="black"
        title="Black"
      />
      <Input
        handleChange={handleChange}
        name="test3"
        color="blue"
        value="blue"
        title="Blue"
      />
      <Input
        handleChange={handleChange}
        name="test3"
        color="red"
        value="red"
        title="Red"
      />
      <Input
        handleChange={handleChange}
        name="test3"
        color="green"
        value="green"
        title="Green"
      />
      <label className="sidebar-label-container">
        <input
          type="radio"
          onChange={handleChange}
          value="white"
          name="test3"
        />
        <span
          className="checkmark white"
          style={{ background: "white", border: "2px solid black" }}
        ></span>
        White
      </label>
    </div>
  );
}
