import Heading from './components/Heading';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import { useState, useEffect } from 'react';

export default function App() {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

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

  function GetFetch(url) {
    setLoading(true);
    // setError(null);

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setIssues(
            data.map(issue => {
              const foundIssue = issues.find(
                prevIssue => prevIssue.id === issue.id
              );
              if (foundIssue) {
                return {
                  ...issue,
                  isPinned: foundIssue.isPinned,
                };
              } else {
                return {
                  ...issue,
                  isPinned: false,
                };
              }
            })
          );
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
    setTimeout(() => fetchData(), 1500);
  }

  function togglePin(buttonId) {
    const nextIssues = issues.map(issue => {
      if (issue.id === buttonId) {
        return {
          ...issue,
          clicked: !issue.clicked,
        };
      } else {
        return {
          ...issue,
        };
      }
    });
    setIssues(nextIssues);
  }
}
