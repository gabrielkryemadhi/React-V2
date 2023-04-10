// import { useState } from "react";
// import { useCallback } from "react";
import React from "react";
import { useCounter } from "./useCounter";

export function Counter({ inicialValue = 0 }) {
  const { counter, onIncrement, onReset } = useCounter(inicialValue);
  //   const [counter, setCounter] = useState(inicialValue);

  //   const onIncrement = useCallback(() => {
  //     setCounter((c) => c + 1)
  //   }, []);

  return (
    <>
      <h2>Counter: {counter}</h2>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onReset}>Reset</button>
    </>
  );
}
