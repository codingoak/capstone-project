import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url) {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const fetchData = async () => {
        const response = await axios.get(url);
        setIssues(response.data);
        setLoading(false);
      };
      fetchData();
    }, 2000);
  }, [url]);

  return { issues, loading };
}

export default useFetch;
