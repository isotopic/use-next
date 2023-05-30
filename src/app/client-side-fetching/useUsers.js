import useSWR from "swr";

function useUsers() {
  const fetcher = async (...args) => fetch(...args).then((res) => res.json());
  const { data, isLoading, error } = useSWR(
    `https://dummyjson.com/users`,
    fetcher
  );

  return {
    users: data,
    isLoading,
    error,
  };
}

export { useUsers };
