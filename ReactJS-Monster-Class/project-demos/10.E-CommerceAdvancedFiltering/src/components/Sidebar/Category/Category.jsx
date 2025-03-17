import React from "react";
import "./Category.css";
import Input from "../../Input";

export default function Category() {
  return (
    <>
      <h2 className="sidebar-title">Category</h2>
      <div className="sidebar-items">
        <Input title="All"/>
        <Input title="Sneakers"/>
        <Input title="Flats"/>
        <Input title="Sandals"/>
        <Input title="Heels"/>
      </div>
    </>
  );
}
