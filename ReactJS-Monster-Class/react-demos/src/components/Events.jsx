import { useState } from "react";

export default function Events() {
  const [count, setCount] = useState(0);

  const marginLeft = {
    marginLeft: "10px",
  };

  return (
    <div>
      <h1>Events</h1>
      <button onClick={() => setCount(count + 1)}>Add Count</button>
      <button onClick={() => setCount(count - 1)} style={marginLeft}>
        Subtract Count
      </button>
      <button onClick={() => setCount(0)} style={marginLeft}>
        Reset
      </button>
      <p>you clicked {count} times</p>
    </div>
  );
}
