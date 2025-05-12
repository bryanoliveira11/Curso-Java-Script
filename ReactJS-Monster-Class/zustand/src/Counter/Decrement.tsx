import { useCounter } from "./store";

export default function Decrement() {
  const {decrement} = useCounter();

  return (
    <button className="btn btn-secondary" onClick={decrement}>
      Decrement
    </button>
  );
}
