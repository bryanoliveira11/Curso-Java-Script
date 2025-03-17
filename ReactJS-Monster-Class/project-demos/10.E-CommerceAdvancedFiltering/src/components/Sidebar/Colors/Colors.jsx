import React from "react";
import "./Colors.css";
import Input from "../../Input";

export default function Colors() {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <Input title="All" />
      <Input title="Black" />
      <Input title="Blue" />
      <Input title="Red" />
      <Input title="White" />
      <Input title="Green" />
    </div>
  );
}
