import React from "react";

export default function ToggleBackgroundColor() {
  const [backgroundColor, setBackgroundColor] = React.useState("white");
  const [textColor, setTextColor] = React.useState("#1b1b1b");
  const [buttonStyle, setButtonStyle] = React.useState("white");

  const handleClick = () => {
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setButtonStyle(backgroundColor === "white" ? "#1b1b1b" : "white");
  };

  return (
    <section style={{ backgroundColor, color: textColor }}>
      <button
        onClick={handleClick}
        style={{
          buttonStyle,
          color: textColor,
          border: `2px solid ${textColor}`,
        }}
      >
        {backgroundColor == "#1b1b1b" ? "Black Theme" : "White Theme"}
      </button>
      <section className="content">
        <h1>Some Text Here</h1>
      </section>
    </section>
  );
}
