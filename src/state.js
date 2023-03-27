import { useEffect } from "react";
import { useState } from "react";

export function Counter({inicialValue = 0}) {
    const [counter, setCounter] = useState(inicialValue)

    function handleCounterIncrement(){
        setCounter((s) => s + 1);
    }

    function handleCounterReset(){
        setCounter(inicialValue);
    }

    useEffect(() => {
        console.log(`The counter is now: ${counter}`
        )}, [counter])
    
    useEffect(() => {
        console.log("I have rendered");
    })  

    return <>
    <h2>Counter: {counter}</h2>
    <button onClick={handleCounterIncrement}>Increment</button>
    <button onClick={handleCounterReset}>Reset</button>
    </>
}