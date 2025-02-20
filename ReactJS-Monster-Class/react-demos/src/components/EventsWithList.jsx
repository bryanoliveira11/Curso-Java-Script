import { useState } from "react";

export default function EventsWithList() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      setList([...list, value]);
      setValue("");
    }
  };

  return (
    <div>
      <h1>Events With List </h1>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add to List"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Add to List</button>
      </form>
    </div>
  );
}
