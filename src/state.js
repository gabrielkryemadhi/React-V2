import { useState } from "react";

export function Counter({ inicialValue = 0 }) {
  const [counter, setCounter] = useState(inicialValue);

  function handleCounterIncrement() {
    setCounter((s) => s + 1);
  }

  function handleCounterReset() {
    setCounter(inicialValue);
  }

  return (
    <>
      <h2>Counter: {counter}</h2>
      <button onClick={handleCounterIncrement}>Increment</button>
      <button onClick={handleCounterReset}>Reset</button>
    </>
  );
}

export default Counter;