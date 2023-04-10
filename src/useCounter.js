import { useCallback, useState } from "react";

export function useCounter(initialValue = 0){
    const [counter, setCounter] = useState(initialValue)

    const handleCounterIncrement = useCallback(function handleCounterIncrement(){
        setCounter((s) => s + 1);
    }, [])

    const handleCounterReset = useCallback(function handleCounterReset(){
        setCounter(initialValue);
    }, [initialValue])

    return{
        counter: counter,
        onIncrement: handleCounterIncrement,
        onReset: handleCounterReset,
    }
}