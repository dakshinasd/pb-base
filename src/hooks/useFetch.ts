import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../AuthContext";

const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState<boolean>(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const API = process.env.NEXT_PUBLIC_API_PATH;
        const response = await fetch(`${API}/${url}`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: user?.token || null,
          },
        });

        if (response.ok) {
          const jsonResponse = await response.json();
          setData(jsonResponse);
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
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
