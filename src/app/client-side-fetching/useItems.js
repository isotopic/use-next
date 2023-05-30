import useSWR from "swr";

function useItems() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, isLoading, error } = useSWR(
    `https://jsonplaceholder.typicode.com/posts`,
    fetcher
  );

  return {
    items: data,
    isLoading,
    error,
  };
}

export { useItems };
