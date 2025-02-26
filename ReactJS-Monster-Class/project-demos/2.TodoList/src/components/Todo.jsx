import { useState } from "react";

const generateID = () => Math.floor(Math.random() * 10);

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim()) {
      setTodos((todos) =>
        todos.concat({
          text: input,
          id: generateID(),
        })
      );
    }
    setInput("");
  };

  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((todo) => todo.id !== id));

  return (
    <div className="container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="New Todo"
      />

      <button onClick={handleSubmit}>Submit</button>

      <ul className="todos-list">
        {todos.map(({ text, id }) => (
          <li key={id} className="todo">
            <span>{text}</span>
            <button className="close" onClick={() => removeTodo(id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
