import React, { useEffect } from "react";
import useGit from "./useGit";

export default function GitUser({ username }) {
  const { user, error, loading, onFetchuser, refetch } =
    useGit(username);

  useEffect(() => {
    refetch(username);
  }, [username]);

  if (user) {
    return (
      <div>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        <img src={user.avatar_url} alt={user.id} />
        <h2>{user.login}</h2>
      </div>
    );
  }
}
