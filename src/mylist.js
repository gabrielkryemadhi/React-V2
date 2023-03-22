import React, { useState } from "react";

export function MyList({ todos }) {
  const [items, setItems] = useState(["Props", "Forms", "List"]);
  const [inputVal, setInputVal] = useState("");

  const handleInput = (e) => {
    setInputVal(e.target.value);
  };

  const addToList = () => {
    setItems([...items, inputVal]);
    setInputVal("");
  };

  const deleteItems = () => {
    setItems([]);
  }

  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <input type="text" id="input" value={inputVal} onChange={handleInput} />
      <button onClick={addToList}>Send</button>
      <button onClick={deleteItems}>Reset</button>
    </>
  );
}

export default MyList;