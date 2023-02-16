import useFetch from "./useFetch";

const useParts = () => {
  const { data, isLoading, error } = useFetch("collections/parts/records");

  return { parts: data, isLoading, error };
};

export default useParts;
