import { useState } from "react";

export default function useLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return {
    username: username,
    password: password,
    setUsername: handleUsername,
    setPassword: handlePassword,
  };
}
