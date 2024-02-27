import { useEffect, useState } from "react";

// Now we will use a function compoent and use state and url for api
export default function useFetch(url, options = {}) {
  // 3 state for api used like
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  // we will use fetch data by try catch and async and await
  async function fetchData() {
    try {
      // now fetching
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);
      const result = await response.json();
      setData(result);
      setError(null);
      setPending(false);
    } catch (error) {
      setError(`${error} some error is occured`);
    }
  }

  // Now we will use a useffect for fecthing data and use url for dependency

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, pending };
}
