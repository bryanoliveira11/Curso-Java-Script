import { useEffect, useRef, useState } from "react";

export default function Ref() {
  const elm = useRef(null);
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const focusInput = () => {
    elm.current.focus();
    elm.current.value = "Hello";
  };

  return (
    <div>
      <input type="text" ref={elm} />
      <button onClick={focusInput}>Click me</button>
      <h1>Timer: {count}</h1>
      <button onClick={() => clearInterval(intervalRef.current)}>Pause</button>
    </div>
  );
}
