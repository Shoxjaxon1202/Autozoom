import { useState, useEffect } from "react";

const useData = (url, replacer = null, space = 2) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  const stringifyData = () => {
    return data ? JSON.stringify(data, replacer, space) : null;
  };

  return { data, loading, error, stringifyData };
};

export default useData;
