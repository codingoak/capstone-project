import { useEffect, useState } from 'react';

import { Routes, Route } from 'react-router-dom';
import { nanoid } from 'nanoid';

import useLocalStorage from './hooks/useLocalStorage';
import HeadingMain from './components/HeadingMain';
import Navigation from './components/Navigation';
import Selection from './components/Selection';
import CreateIssueForm from './pages/CreateIssueForm';
import Dashboard from './pages/Dashboard';
import FetchedDetails from './pages/FetchedDetails';
import MyIssues from './pages/MyIssues';
import MyIssueDetails from './pages/MyIssueDetails';

export default function App() {
  const [selectedProject, setSelectedProject] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [savedIssues, setSavedIssues] = useLocalStorage(selectedProject, []);
  const [myIssues, setMyIssues] = useLocalStorage('myOwnIssues', []);

  useEffect(() => {
    loadFromLocal(selectedProject);
    GetData(selectedProject);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProject]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <header>
                <HeadingMain title="DASHBOARD" />
                <Selection
                  selectedProject={selectedProject}
                  handleRepoChange={handleRepoChange}
                />
              </header>
              <Dashboard
                selectedProject={selectedProject}
                savedIssues={savedIssues}
                isLoading={isLoading}
                hasError={hasError}
                togglePin={togglePin}
                GetData={GetData}
              />
            </>
          }
        />
        {savedIssues.map(savedIssue => (
          <Route
            key={savedIssue.id}
            path={`${savedIssue.id}`}
            element={<FetchedDetails savedIssue={savedIssue} />}
          />
        ))}
        <Route
          path="createissueform"
          element={<CreateIssueForm handleMyIssues={handleMyIssues} />}
        />
        <Route
          path="myissues"
          element={
            <MyIssues
              myIssues={myIssues}
              togglePin={togglePin}
              sortPins={sortPins}
            />
          }
        />
        {myIssues.map(myIssue => (
          <Route
            key={myIssue.id}
            path={`${myIssue.id}`}
            element={
              <MyIssueDetails
                myIssue={myIssue}
                avatar={avatar}
                myIssues={myIssues}
                handleRemoveIssue={handleRemoveIssue}
              />
            }
          />
        ))}
      </Routes>
      <Navigation />
    </>
  );

  function loadFromLocal(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.error('Load from local failed', error);
    }
  }

  async function GetData(url) {
    setIsLoading(true);
    setHasError(false);

    if (selectedProject) {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          if (!loadFromLocal(selectedProject)) {
            findIssuesFromData(savedIssues, data);
          } else {
            findIssuesFromData(loadFromLocal(selectedProject), data);
          }
          setTimeout(() => setIsLoading(false), 1500);
        } else {
          throw new Error('Response not ok');
        }
      } catch (error) {
        console.error(error);
        setIsLoading(false);
        setHasError(true);
      }
    }

    function findIssuesFromData(prevData, data) {
      const fetchedData = data.map(issue => {
        const foundIssue = prevData.find(
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
      });
      sortPins(fetchedData);
      setSavedIssues(fetchedData);
    }
  }

  function handleMyIssues({ body, isPinned, labels, milestone, title, user }) {
    const id = nanoid();
    const date = new Date().toLocaleString();
    getAvatar(user);
    setMyIssues([
      {
        avatar: avatar,
        body,
        created_at: date,
        id,
        isPinned,
        labels,
        milestone,
        state: 'open',
        title,
        user,
      },
      ...myIssues,
    ]);

    async function getAvatar(username) {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setAvatar(data.avatar_url);
    }
  }

  function handleRepoChange(e) {
    setSelectedProject(e.value);
  }

  function handleRemoveIssue(id) {
    setMyIssues(myIssues.filter(myIssue => myIssue.id !== id));
  }

  function togglePin(buttonId, issues) {
    const nextIssues = checkIsPinned(buttonId, issues);
    sortPins(nextIssues);
    if (issues[0].hasOwnProperty('url')) {
      setSavedIssues(nextIssues);
    } else {
      setMyIssues(nextIssues);
    }

    function checkIsPinned(buttonId, issues) {
      const nextIssues = issues.map(issue => {
        if (issue.id === buttonId) {
          return {
            ...issue,
            isPinned: !issue.isPinned,
          };
        } else {
          return {
            ...issue,
          };
        }
      });
      return nextIssues;
    }
  }

  function sortPins(issues) {
    issues.sort((a, b) => {
      if (a.isPinned === true) {
        return -1;
      }
      if (b.isPinned === true) {
        return +1;
      }
      return 0;
    });
  }
}
