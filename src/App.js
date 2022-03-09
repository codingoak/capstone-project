import Heading from './components/Heading';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import { useState, useEffect } from 'react';
import { useImmer } from 'use-immer';

export default function App() {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [IssueIds, updateIssueIds] = useImmer([]);
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
        loading={loading}
        error={error}
        togglePin={togglePin}
        isPinned={isPinned}
      />
      <Footer />
    </>
  );

  function togglePin(buttonId) {
    console.log('Current Id:', buttonId);
    // Change value clicked
    IssueIds.forEach(element => {
      if (buttonId === element.id) {
        element.clicked = !element.clicked;
      }
    });

    console.log('AFTER:', IssueIds);
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
          updateIssueIds(
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

    return { issues, loading, IssueIds, error };
  }
}
