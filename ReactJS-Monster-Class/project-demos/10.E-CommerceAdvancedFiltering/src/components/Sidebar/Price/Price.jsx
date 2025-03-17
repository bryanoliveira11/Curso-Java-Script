import React from "react";
import "./Price.css";
import Input from "../../Input";

export default function Price() {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <Input title="All" />
      <Input title="$0 - $50" />
      <Input title="$50 - $100" />
      <Input title="$100 - $150" />
      <Input title="Over $150" />
    </div>
  );
}
