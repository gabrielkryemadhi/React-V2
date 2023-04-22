import { useState } from "react";

function useLoginForm(initialState) {
  const [values, setValues] = useState(initialState);

  function handleChange(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  return {
    values,
    handleChange,
  };
}

export default useLoginForm;
