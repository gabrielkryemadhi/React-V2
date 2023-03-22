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

  const deleteItems = (i) => {
    items.splice(i, 1);
    setItems([...items]);
  };

  return (
    <>
      <ul>
        {items.map((item) => (
          <div>
              <li key={item}>{item}</li>
              <button onClick={deleteItems}>Reset</button>
          </div>
        ))}
      </ul>
      <input type="text" id="input" value={inputVal} onChange={handleInput} />
      <button onClick={addToList}>Send</button>
    </>
  );
}

export default MyList;