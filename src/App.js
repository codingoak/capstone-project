// import Heading from './components/Heading';
import Dashboard from './pages/Dashboard';
import useLocalStorage from './hooks/useLocalStorage';
import { useState, useEffect } from 'react';

export default function App() {
  const [savedIssues, setSavedIssues] = useLocalStorage('savedIssues', {});
  const [isLoading, setIsLoading] = useState(null);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    GetFetch('https://api.github.com/repos/reactjs/reactjs.org/isues');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Dashboard
      savedIssues={savedIssues}
      isLoading={isLoading}
      hasError={hasError}
      setHasError={setHasError}
      togglePin={togglePin}
      GetFetch={GetFetch}
    />
  );

  function GetFetch(url) {
    setIsLoading(true);
    setHasError(false);

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
          setIsLoading(false);
        } else {
          throw new Error('Response not ok');
        }
      } catch (error) {
        console.error(error);
        setIsLoading(false);
        setHasError(true);
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

  // function saveToLocal(key, data) {
  //   localStorage.setItem(key, JSON.stringify(data));
  // }

  // function loadFromLocal(key, data) {
  //   try {
  //     return JSON.parse(localStorage.getItem(key));
  //   } catch (error) {
  //     console.error('Error loading from local');
  //   }
  // }
}
