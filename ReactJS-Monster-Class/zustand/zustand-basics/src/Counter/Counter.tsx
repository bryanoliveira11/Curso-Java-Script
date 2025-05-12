import { useCounter } from "../store";
import Decrement from "./Decrement";
import Increment from "./Increment";

export default function Counter() {
  const { count } = useCounter();

  return (
    <div className="bg-blue-950 rounded p-4 text-white text-2xl shadow-md">
      <h1>Count : {count}</h1>
      <div className="flex gap-2 mt-3">
        <Increment/>
        <Decrement/>
      </div>
    </div>
  );
}
