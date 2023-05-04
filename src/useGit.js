import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

const useGit = (username) => {
  const { data, error, mutate } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  const fetchGithubUser = () => {
    mutate();
  };

  const refetch = async () => {
    await mutate(undefined, true);
  };

  if (!username) return error;

  return {
    user: data,
    error,
    loading: !data && !error,
    onFetchuser: fetchGithubUser,
  };
};

export default useGit;
