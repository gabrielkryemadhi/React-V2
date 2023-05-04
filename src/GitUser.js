import React from "react";
import useGit from "./useGit";

export default function GitUser({ username }) {
  const { user, loading } = useGit(username);

  if (loading) {
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
