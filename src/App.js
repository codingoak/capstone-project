import useLocalStorage from './hooks/useLocalStorage';
import styled from 'styled-components/macro';
import { useState, useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Heading from './components/Heading';
import Selection from './components/Selection';
import Dashboard from './pages/Dashboard';
import Detail from './pages/Detail';
import AddIssue from './pages/AddIssue';

export default function App() {
  const [selectedProject, setSelectedProject] = useState('');
  const [savedIssues, setSavedIssues] = useLocalStorage(selectedProject, []);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    loadFromLocal(selectedProject);
    GetFetch(selectedProject);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProject]);

  return (
    <Routes>
      <Route
        path={'/'}
        element={
          <>
            <Heading>DASHBOARD</Heading>
            <AddButton to={'add'}>+</AddButton>
            <Selection
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
            />
            {selectedProject && (
              <Dashboard
                selectedProject={selectedProject}
                savedIssues={savedIssues}
                isLoading={isLoading}
                hasError={hasError}
                togglePin={togglePin}
                GetFetch={GetFetch}
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
              <Heading>DETAIL</Heading>
              <Detail savedIssue={savedIssue} />
            </>
          }
        />
      ))}
      <Route
        path={'add'}
        element={
          <>
            <Heading>ADD AN ISSUE</Heading>
            <AddIssue />
          </>
        }
      />
    </Routes>
  );

  function loadFromLocal(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.error('Load from local failed', error);
    }
  }

  async function GetFetch(url) {
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
          setTimeout(() => setIsLoading(false), 2000);
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
}

const AddButton = styled(NavLink)`
  display: grid;
  place-items: center;
  position: absolute;
  top: 6px;
  right: -8px;
  transform: translate(-50%);
  font-size: 28px;
  background-color: coral;
  border-radius: 50%;
  width: 32px;
  height: 32px;

  &:link,
  &:visited,
  &:hover,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;
