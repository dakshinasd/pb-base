import { useEffect, useState } from "react";

const useParts = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState<boolean>(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/parts`);

        if (response.ok) {
          const { data } = await response.json();
          setData(data);
        } else {
          throw Error("Something went wrong while fetching data");
        }
      } catch (e) {
        console.log(e);
        setError(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return { data, isLoading, error };
};

export default useParts;
