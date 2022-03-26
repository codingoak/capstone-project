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
  const [avatar, setAvatar] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [comparedIssues, setComparedIssues] = useState('');
  const [selectedProject, setSelectedProject] = useState('');
  const [pinnedIssues, setPinnedIssues] = useLocalStorage(selectedProject, []);
  const [myIssues, setMyIssues] = useLocalStorage('myOwnIssues', []);

  useEffect(() => {
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
                comparedIssues={comparedIssues}
                isLoading={isLoading}
                hasError={hasError}
                togglePin={togglePin}
                GetData={GetData}
              />
            </>
          }
        />
        {comparedIssues &&
          comparedIssues.map(comparedIssue => (
            <Route
              key={comparedIssue.id}
              path={`${comparedIssue.id}`}
              element={<FetchedDetails comparedIssue={comparedIssue} />}
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
                pinnedIssues={pinnedIssues}
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
          setTimeout(() => setIsLoading(false), 1500);
          const data = await response.json();
          compareIssues(data);
        } else {
          throw new Error('Response not ok');
        }
      } catch (error) {
        console.error(error);
        setIsLoading(false);
        setHasError(true);
      }
    }
  }

  function compareIssues(data) {
    const compared = data.map(fetchedIssue => {
      setPinnedIssues(loadFromLocal(selectedProject));

      const foundIssue = loadFromLocal(selectedProject)
        ? loadFromLocal(selectedProject).find(
            pinnedIssue => pinnedIssue.id === fetchedIssue.id
          )
        : null;
      if (foundIssue) {
        return {
          ...fetchedIssue,
          isPinned: foundIssue.isPinned,
        };
      } else {
        return {
          ...fetchedIssue,
          isPinned: false,
        };
      }
    });
    sortPins(compared);
    setComparedIssues(compared);
  }

  function togglePin(prevId, issues) {
    const nextIssues = checkIsPinned(prevId, issues);
    sortPins(nextIssues);
    if (issues[0].hasOwnProperty('url')) {
      setComparedIssues(nextIssues);
    } else {
      setMyIssues(nextIssues);
    }
    savePinnedIssues(nextIssues);
  }

  function checkIsPinned(prevId, issues) {
    const nextIssues = issues.map(issue => {
      if (issue.id === prevId) {
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

  function savePinnedIssues(issues) {
    const pinned = [];

    issues.forEach(issue => {
      if (issue.isPinned) {
        pinned.push(issue);
      }
    });
    setPinnedIssues(pinned);
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
}
