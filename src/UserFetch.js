import React, { useState } from "react";
import GitUser from "./GitUser";

export default function UserFetch() {
  const [username, setUsername] = useState("");

  return (
    <div>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />

      <GitUser username={username} />
    </div>
  );
}
