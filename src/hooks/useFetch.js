import { useState, useEffect } from 'react';

function useFetch(url) {
  const [issues, setIssues] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setIssues(null);

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setIssues(data);
          setLoading(false);
        } else {
          throw new Error('Response not ok');
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
        setError(true);
      }
    };
    setTimeout(() => fetchData(), 2000);
  }, [url]);

  return { issues, loading, error };
}

export default useFetch;
