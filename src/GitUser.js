import React, { useEffect } from "react";
import useGit from "./useGit";


export default function GitUser({ username }) {
  const { user, loading, error, fectUserData } = useGit();

  useEffect(() => {
    fectUserData(username);
  }, [username]);

  if (user) {
    return (
      <div style={{ marginTop: "2rem" }}>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {user && (
          <div>
            <img src={user.avatar_url} alt={user.login} width="50" />
            <h2>{user.login}</h2>
          </div>
        )}
      </div>
    );
  }
}
