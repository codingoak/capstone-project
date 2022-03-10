// import Heading from './components/Heading';
import Dashboard from './pages/Dashboard';
import useLocalStorage from './hooks/useLocalStorage';
import { useState, useEffect } from 'react';

export default function App() {
  const [savedIssues, setSavedIssues] = useLocalStorage('savedIssues', {});
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    GetFetch('https://api.github.com/repos/reactjs/reactjs.org/issues');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Dashboard
      savedIssues={savedIssues}
      loading={loading}
      error={error}
      togglePin={togglePin}
    />
  );

  function GetFetch(url) {
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setSavedIssues(
            data.map(issue => {
              const foundIssue = savedIssues.find(
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
    setTimeout(() => fetchData(), 2000);
  }

  function togglePin(buttonId) {
    const nextIssues = savedIssues.map(savedIssue => {
      if (savedIssue.id === buttonId) {
        return {
          ...savedIssue,
          clicked: !savedIssue.clicked,
        };
      } else {
        return {
          ...savedIssue,
        };
      }
    });
    setSavedIssues(nextIssues);
  }

  function saveToLocal(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  function loadFromLocal(key, data) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.error('Error loading from local');
    }
  }
}
