
import useSWR from "swr";

// const useGithubUser = (username) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (username) {
//       setLoading(true);
//       fetch(`https://api.github.com/users/${username}`)
//         .then((response) => response.json())
//         .then((data) => {
//           setUser(data);
//           setLoading(false);
//         })
//         .catch((error) => {
//           console.error("Error fetching GitHub user:", error);
//           setLoading(false);
//         });
//     }
//   }, [username]);

//   return { user, loading };
// };

// export default useGithubUser;

const fetcher = (url) => fetch(url).then((response) => response.json());

const useGithubUser = (username) => {
  const { data, error, mutate } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  const fetchGithubUser = () => {
    mutate();
  };

  if (username === null) return error;

  return {
    user: data,
    loading: !data,
  };
};

export default useGithubUser;
