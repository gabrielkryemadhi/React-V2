import React from "react";
import useLogin from "./useLogin";

export default function UserForm() {
  const { username, password, setUsername, setPassword } = useLogin();
  return (
    <div>
      <input onChange={setUsername} value={username} />
      <input onChange={setPassword} value={password} type="password"/>
      {console.log(
        `Your username is ${username} and you can use your password which is ${password} to login.`
      )}
    </div>
  );
} 
