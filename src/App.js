import styled from 'styled-components/macro';
import useLocalStorage from './hooks/useLocalStorage';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { nanoid } from 'nanoid';
import Heading from './components/Heading';
import Selection from './components/Selection';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import FetchedDetails from './pages/FetchedDetails';
import MyIssues from './pages/MyIssues';
import CreateIssueForm from './pages/CreateIssueForm';
import MyIssueDetails from './pages/MyIssueDetails';

export default function App() {
  const [selectedProject, setSelectedProject] = useState('');
  const [savedIssues, setSavedIssues] = useLocalStorage(selectedProject, []);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [myIssues, setMyIssues] = useLocalStorage('myOwnIssues', []);
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    loadFromLocal(selectedProject);
    GetData(selectedProject);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProject]);

  return (
    <Container>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Heading title="DASHBOARD" />
              <Selection
                selectedProject={selectedProject}
                setSelectedProject={setSelectedProject}
              />
              {!selectedProject && (
                <EmptyState>Select an option from the box above.</EmptyState>
              )}
              {selectedProject && (
                <Dashboard
                  selectedProject={selectedProject}
                  savedIssues={savedIssues}
                  isLoading={isLoading}
                  hasError={hasError}
                  togglePin={togglePin}
                  GetData={GetData}
                />
              )}
            </>
          }
        />
        {savedIssues.map(savedIssue => (
          <Route
            key={savedIssue.id}
            path={`${savedIssue.id}`}
            element={
              <>
                <Heading title="DETAIL" />
                <FetchedDetails savedIssue={savedIssue} />
              </>
            }
          />
        ))}
        <Route
          path="myissues"
          element={
            <>
              <Heading title="MY ISSUES" />
              <MyIssues myIssues={myIssues} toggleMyPin={toggleMyPin} />
            </>
          }
        />
        <Route
          path="createissueform"
          element={
            <>
              <Heading title={'ADD AN ISSUE'} />
              <CreateIssueForm handleMyIssues={handleMyIssues} />
            </>
          }
        />
        {myIssues.map(myIssue => (
          <Route
            key={myIssue.id}
            path={`${myIssue.id}`}
            element={
              <>
                <Heading title="DETAIL" />
                <MyIssueDetails
                  myIssue={myIssue}
                  avatar={avatar}
                  myIssues={myIssues}
                  setMyIssues={setMyIssues}
                />
              </>
            }
          />
        ))}
      </Routes>
      <Navigation />
    </Container>
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
      setSavedIssues(fetchedData);
    }
  }

  function togglePin(buttonId) {
    const nextIssues = savedIssues.map(savedIssue => {
      if (savedIssue.id === buttonId) {
        return {
          ...savedIssue,
          isPinned: !savedIssue.isPinned,
        };
      } else {
        return {
          ...savedIssue,
        };
      }
    });
    setSavedIssues(nextIssues);
  }

  function toggleMyPin(buttonId) {
    const nextIssues = myIssues.map(savedIssue => {
      if (savedIssue.id === buttonId) {
        return {
          ...savedIssue,
          isPinned: !savedIssue.isPinned,
        };
      } else {
        return {
          ...savedIssue,
        };
      }
    });
    setMyIssues(nextIssues);
  }

  function handleMyIssues({ user, title, body, milestone, labels, isPinned }) {
    const id = nanoid();
    const date = new Date().toLocaleString();
    getAvatar(user);

    setMyIssues([
      {
        user,
        avatar: avatar,
        title,
        body,
        milestone,
        labels,
        id,
        isPinned,
        state: 'open',
        created_at: date,
      },
      ...myIssues,
    ]);

    async function getAvatar(username) {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setAvatar(data.avatar_url);
    }
  }
}

const Container = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
`;

const EmptyState = styled.p`
  margin: 10px;
  text-align: center;
  margin-top: 50px;
`;
