import useSWR from "swr";

function useUsers() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, isLoading, error } = useSWR(
    `https://dummyjson.com/users`,
    fetcher
  );

  return {
    items: data.users,
    isLoading,
    error,
  };
}

export { useUsers };
