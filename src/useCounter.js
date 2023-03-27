import { useState } from "react";

export function useCounter(inicialValue = 0){
    const [counter, setCounter] = useState(inicialValue)
    function handleCounterIncrement(){
        setCounter((s) => s + 1);
    }

    function handleCounterReset(){
        setCounter(inicialValue);
    }

    return{
        counter: counter,
        onIncrement: handleCounterIncrement,
        onReset: handleCounterReset,
    }
}