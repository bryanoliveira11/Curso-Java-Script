import { useCounter } from "../store"; 

export default function Increment() {
  const {increment} = useCounter();

  return (
    <button className="btn btn-primary" onClick={increment}>
      Increment
    </button>
  );
}
