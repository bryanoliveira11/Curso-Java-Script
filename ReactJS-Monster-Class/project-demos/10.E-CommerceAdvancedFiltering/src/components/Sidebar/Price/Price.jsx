import React from "react";
import "./Price.css";
import Input from "../../Input";

export default function Price({ handleChange }) {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
        <input type="radio" onChange={handleChange} value="" name="test2" />
        <span className="checkmark"></span>All
      </label>
      <Input
        handleChange={handleChange}
        name="test2"
        value={50}
        title="$0 - $50"
      />
      <Input
        handleChange={handleChange}
        name="test2"
        value={100}
        title="$50 - $100"
      />
      <Input
        handleChange={handleChange}
        name="test2"
        value={150}
        title="$100 - $150"
      />
      <Input
        handleChange={handleChange}
        name="test2"
        value={200}
        title="Over $150"
      />
    </div>
  );
}
