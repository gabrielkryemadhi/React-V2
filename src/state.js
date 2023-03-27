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

    function onCounterChange(e){
        console.log(`The counter is now: ${e}`);
    }

    useEffect(() => onCounterChange(counter), [counter])
     //the function should be passed as a prop, need help


    return <>
    <h2>Counter: {counter}</h2>
    <button onClick={handleCounterIncrement}>Increment</button>
    <button onClick={handleCounterReset}>Reset</button>
    </>
}