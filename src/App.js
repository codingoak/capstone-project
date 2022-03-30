import { useEffect, useState } from 'react';

import { Routes, Route, useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';

import useLocalStorage from './hooks/useLocalStorage';
import HeadingMain from './components/HeadingMain';
import Navigation from './components/Navigation';
import Pagination from './components/Pagination';
import Selection from './components/Selection';
import CreateIssueForm from './pages/CreateIssueForm';
import Dashboard from './pages/Dashboard';
import FetchedDetails from './pages/FetchedDetails';
import LoginPage from './pages/LoginPage';
import MyIssues from './pages/MyIssues';
import MyIssueDetails from './pages/MyIssueDetails';
import ProfilePage from './pages/ProfilePage';

export default function App() {
  const [comparedIssues, setComparedIssues] = useState('');
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [myIssues, setMyIssues] = useLocalStorage('myOwnIssues', []);
  const [paginationUrls, setPaginationUrls] = useState('');
  const [selectedProject, setSelectedProject] = useState('');
  const [pinnedIssues, setPinnedIssues] = useLocalStorage(selectedProject, []);
  const [userdata, setUserdata] = useLocalStorage('userdata', []);
  const [userDataStatus, setUserDataStatus] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getData(selectedProject);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProject]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <LoginPage
              handleLogin={handleLogin}
              userDataStatus={userDataStatus}
            />
          }
        />
        <Route
          path="/profilepage"
          element={
            <ProfilePage handleLogout={handleLogout} userdata={userdata} />
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              <header>
                <HeadingMain title="DASHBOARD" />
                <Selection
                  handleRepoChange={handleRepoChange}
                  selectedProject={selectedProject}
                />
              </header>
              <Dashboard
                comparedIssues={comparedIssues}
                getData={getData}
                hasError={hasError}
                isLoading={isLoading}
                selectedProject={selectedProject}
                togglePin={togglePin}
              />
              {paginationUrls && !isLoading && !hasError && (
                <Pagination getData={getData} paginationUrls={paginationUrls} />
              )}
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
          element={
            <CreateIssueForm
              handleMyIssues={handleMyIssues}
              username={username}
            />
          }
        />
        <Route
          path="myissues"
          element={
            <MyIssues
              myIssues={myIssues}
              sortPins={sortPins}
              togglePin={togglePin}
            />
          }
        />
        {myIssues.map(myIssue => (
          <Route
            key={myIssue.id}
            path={`${myIssue.id}`}
            element={
              <MyIssueDetails
                handleRemoveIssue={handleRemoveIssue}
                myIssue={myIssue}
                myIssues={myIssues}
                pinnedIssues={pinnedIssues}
                avatar={userdata?.avatar_url}
              />
            }
          />
        ))}
      </Routes>
      <Navigation />
    </>
  );

  function compareIssues(data) {
    const compared = data.map(fetchedIssue => {
      const foundIssue = loadFromLocal(selectedProject)?.find(
        savedIssue => savedIssue.id === fetchedIssue.id
      );
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

  async function getData(url) {
    window.scrollTo(0, 0);

    setIsLoading(true);
    setHasError(false);

    if (selectedProject) {
      try {
        const response = await fetch(url);
        if (response.ok) {
          setTimeout(() => setIsLoading(false), 1500);
          getDataForPagination(response);
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

  function getDataForPagination(response) {
    const link = response.headers.get('Link');
    const links = link?.split(',');
    const urls = links?.map(link => {
      return {
        url: link.split(';')[0].replace('<', '').replace('>', '').trim(),
        title: link
          .split(';')[1]
          .replace('rel', '')
          .replace('="', '')
          .replace('"', '')
          .trim(),
      };
    });

    setPaginationUrls(urls);
  }

  function handleLogout() {
    navigate('/');
    setUsername('');
    setUserdata('');
  }

  function handleLogin(data) {
    setUsername(data.username);
    getUserdata(data.username);

    async function getUserdata(username) {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();

      setUserDataStatus(response.status);
      setUserdata(data);

      if (response.status === 200) {
        navigate('/profilepage');
      }
    }
  }

  function handleMyIssues({ body, isPinned, labels, milestone, title, user }) {
    const id = nanoid();
    const date = new Date().toLocaleString();

    setMyIssues([
      {
        user,
        avatar: userdata.avatar_url,
        body,
        created_at: date,
        id,
        isPinned,
        labels,
        milestone,
        state: 'open',
        title,
      },
      ...myIssues,
    ]);
  }

  function handleRemoveIssue(id) {
    setMyIssues(myIssues.filter(myIssue => myIssue.id !== id));
  }

  function handleRepoChange(e) {
    setSelectedProject(e.value);
  }

  function loadFromLocal(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.error('Load from local failed', error);
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

  function togglePin(prevId, prevIssues) {
    // Check if id matchs
    const checkedIssues = prevIssues.map(prevIssue => {
      if (prevIssue.id === prevId) {
        return {
          ...prevIssue,
          isPinned: !prevIssue.isPinned,
        };
      } else {
        return {
          ...prevIssue,
        };
      }
    });
    sortPins(checkedIssues);

    // set to compared(fetched) or my issues
    if (prevIssues[0].hasOwnProperty('url')) {
      setComparedIssues(checkedIssues);
    } else {
      setMyIssues(checkedIssues);
    }

    // creates an array with all the pinned issues
    const nextIssues = [...checkedIssues, ...pinnedIssues];

    const uniqueIssues = Array.from(
      new Set(nextIssues.map(nextIssue => nextIssue.id))
    ).map(id => {
      return nextIssues.find(nextIssue => nextIssue.id === id);
    });

    const uniquePinnedIssues = uniqueIssues.filter(
      uniqueIssue => uniqueIssue.isPinned
    );

    setPinnedIssues(uniquePinnedIssues);
  }
}
