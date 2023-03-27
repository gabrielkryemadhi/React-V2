import { useCounter } from "./useCounter";
import { useEffect } from "react";

export function Counter({inicialValue = 0}) {
    const {counter, onIncrement, onReset} = useCounter(inicialValue)

    return <>
    <h2>Counter: {counter}</h2>
    <button onClick={onIncrement}>Increment</button>
    <button onClick={onReset}>Reset</button>
    </>
}