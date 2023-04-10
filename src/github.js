import React, { useEffect, useState } from "react";

export function GithubUser({ username }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUserData(data);
    }
    fetchUserData();
  }, [username]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const { login, name, avatar_url } = userData;

  return (
    <div className="github-user">
      <h2>{name || login}</h2>
      <img src={avatar_url} alt={`${login}'s avatar`} />
    </div>
  );
}