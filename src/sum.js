import React from "react";

export function Sum({num}){
    const sum = num.reduce((a, b) => a + b, 0)
    return <h4>This is the total: {sum}</h4>
}