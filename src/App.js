import Heading from './components/Heading';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import { useState, useEffect } from 'react';

export default function App() {
  const [issues, setIssues] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [IssueIds, setIssueIds] = useState([]);

  useEffect(() => {
    GetFetch('https://api.github.com/repos/reactjs/reactjs.org/issues');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Heading />
      <Dashboard
        issues={issues}
        loading={loading}
        error={error}
        togglePin={togglePin}
      />
      <Footer />
    </>
  );

  function togglePin(id) {
    console.log('TEST', id);
  }

  function GetFetch(url) {
    setLoading(true);
    setIssues(null);

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setIssues(data);
          setLoading(false);
          setIssueIds(
            issues &&
              issues.map(item => {
                return { id: item.id, clicked: false };
              })
          );
        } else {
          throw new Error('Response not ok');
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
        setError(true);
      }
    };
    setTimeout(() => fetchData(), 1500);

    return { issues, loading, IssueIds, error };
  }
}
