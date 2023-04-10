import { useState } from "react";
import { GithubUser } from "./github";

export function GithubUserList() {
  const [usernames, setUsernames] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleAddUser() {
    if (inputValue.trim() !== "") {
      setUsernames((prevUsernames) => [...prevUsernames, inputValue.trim()]);
      setInputValue("");
    }
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a Github username"
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>
      <div>
        {usernames.map((username) => (
          <GithubUser key={username} username={username} />
        ))}
      </div>
    </div>
  );
}
