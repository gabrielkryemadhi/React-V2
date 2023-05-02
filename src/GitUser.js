import React from "react";
import useGit from "./useGit";

export default function GitUser({ username }) {
  const { user, isLoading } = useGit(username);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return (
      <div>
        <img src={user.avatar_url} alt={user.id} />
        <h2>{user.login}</h2>
      </div>
    );
  }
}
