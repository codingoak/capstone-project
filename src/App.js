import styled from 'styled-components/macro';
import Select from 'react-select';
import Heading from './components/Heading';
import Dashboard from './pages/Dashboard';
import useLocalStorage from './hooks/useLocalStorage';
import { useState, useEffect } from 'react';

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

  function loadFromLocal(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.error('Load from local failed', error);
    }
  }

  return (
    <>
      <Heading>DASHBOARD</Heading>
      <Selection />
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
  );

  async function GetFetch(url) {
    setIsLoading(true);
    setHasError(false);

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        // If no data in the local storage
        if (!loadFromLocal(selectedProject)) {
          findIssuesFromData(savedIssues, data);
        } else {
          // If saved data in the local storage
          findIssuesFromData(loadFromLocal(selectedProject), data);
        }
        setTimeout(() => setIsLoading(false), 2000);
      } else {
        throw new Error('Response not ok');
      }
    } catch (error) {
      selectedProject && console.error(error);
      setIsLoading(false);
      setHasError(true);
    }
  }

  function findIssuesFromData(source, data) {
    const fetchedData = data.map(issue => {
      const foundIssue = source.find(prevIssue => prevIssue.id === issue.id);
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

  function Selection() {
    const handleChange = e => {
      setSelectedProject(e.value);
    };
    const options = [
      {
        label: 'REACT',
        value: 'https://api.github.com/repos/reactjs/reactjs.org/issues',
      },
      {
        label: 'STYLED-COMPONENTS',
        value:
          'https://api.github.com/repos/styled-components/styled-components/issues',
      },
      {
        label: 'NODE.JS',
        value: 'https://api.github.com/repos/nodejs/node/issues',
      },
      {
        label: 'EXPRESS.JS',
        value: 'https://api.github.com/repos/expressjs/express/issues',
      },
    ];

    return (
      <SelectionContainer selectedProject={selectedProject}>
        <Select
          options={options}
          value={options.find(obj => obj.value === selectedProject)}
          onChange={handleChange}
          aria-label="choose a project"
          name="projects"
        />
      </SelectionContainer>
    );
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

const SelectionContainer = styled.form`
  margin: 15px 10px 0;
  text-align: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
