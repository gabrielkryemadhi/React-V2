import { useState, useEffect, useRef } from "react";

export function CarDetails({ initialData }) {
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    setModel(initialData.model || "");
    setYear(initialData.year || "");
    setColor(initialData.color || "");
  }, [initialData]);

  function handleSubmit(event) {    
    setModel(initialData.model || "");
    setYear(initialData.year || "");
    setColor(initialData.color || "");
  }

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Model:
        <input
          ref="inputRef"
          type="text"
          value={model}
          onChange={(event) => setModel(event.target.value)}
        />
      </label>
      <br />
      <label>
        Year:
        <input
          type="number"
          value={year}
          onChange={(event) => setYear(event.target.value)}
        />
      </label>
      <br />
      <label>
        Color:
        <input
          type="text"
          value={color}
          onChange={(event) => setColor(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Reset</button>
    </form>
  );
}

export default CarDetails;