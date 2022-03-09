import Heading from './components/Heading';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import { useState, useEffect } from 'react';

export default function App() {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [issueIds, setIssueIds] = useState([]);
  const [isPinned, setIsPinned] = useState();

  useEffect(() => {
    GetFetch('https://api.github.com/repos/reactjs/reactjs.org/issues');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Heading />
      <Dashboard
        issues={issues}
        issueIds={issueIds}
        loading={loading}
        error={error}
        togglePin={togglePin}
        isPinned={isPinned}
      />
      <Footer />
    </>
  );

  function togglePin(buttonId) {
    console.log('Current id', buttonId);
    // Change value clicked
    const nextIssueIds = issueIds.map(issueId => {
      if (issueId.id === buttonId) {
        return {
          id: issueId.id,
          clicked: !issueId.clicked,
        };
      } else {
        return {
          ...issueId,
        };
      }
    });
    setIssueIds(nextIssueIds);
    console.log('AFTER:', nextIssueIds);
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
            data.map(element => {
              return { id: element.id, clicked: false };
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

    return { issues, issueIds, loading, error };
  }
}
