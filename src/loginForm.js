import React from "react";
import useLoginForm from "./useLoginForm";

function LoginForm() {
  const { values, handleChange } = useLoginForm({ username: "", password: "" });

  return (
    <form>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;
