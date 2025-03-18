import React from "react";

export default function Button({ handleClick, title, value }) {
  return (
    <button onClick={handleClick} value={value} className="btns">
      {title}
    </button>
  );
}
