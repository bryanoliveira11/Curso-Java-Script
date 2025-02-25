import { useReducer, useState } from "react";

const initialState = { count: 0, value: 1 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    case "reset":
      return { ...state, count: 0 };
    default:
      return state;
  }
};

export default function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [value, setValue] = useState(1);

  return (
    <div>
      <h1>count: {state.count}</h1>
      <input
        type="number"
        placeholder="Value"
        value={value}
        min={1}
        onChange={(e) => {
          setValue(e.target.value);
          state.value = Number(e.target.value);
        }}
      />
      <button
        onClick={() => dispatch({ type: "increment", payload: Number(value) })}
      >
        + {value}
      </button>
      <button
        onClick={() => dispatch({ type: "decrement", payload: Number(value) })}
      >
        - {value}
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
