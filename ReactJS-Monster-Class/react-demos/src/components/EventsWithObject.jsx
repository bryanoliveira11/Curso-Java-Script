import { useState } from "react";

export default function EventsWithObject() {
  const [object, setObject] = useState({
    name: "",
    age: "",
  });

  const [newName, setNewName] = useState(object.name);
  const [newAge, setNewAge] = useState(object.age);

  const handleSubmit = (e) => {
    e.preventDefault();
    setObject({
      name: newName,
      age: newAge,
    });
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    width: "200px",
  };

  const marginStyle = {
    marginTop: "10px",
  };

  return (
    <div>
      <h1>Events With Object </h1>
      <div>
        <h2>Name: {object.name}</h2>
        <h2>Age: {object.age}</h2>
      </div>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="New Name"
          style={marginStyle}
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          type="number"
          placeholder="New Age"
          style={marginStyle}
          onChange={(e) => setNewAge(e.target.value)}
        />
        <button type="submit" style={marginStyle}>
          Edit Data
        </button>
      </form>
    </div>
  );
}
