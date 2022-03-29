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
import GitHubRedirectPage from './pages/GitHubRedirectPage';
import LoginPage from './pages/LoginPage';
import MyIssues from './pages/MyIssues';
import MyIssueDetails from './pages/MyIssueDetails';
// import Navbar from './pages/Navbar';
import ProfilePage from './pages/ProfilePage';
import WelcomePage from './pages/WelcomePage';

export default function App() {
  const [avatarUrl, setAvatarUrl] = useLocalStorage('user', []);
  const [comparedIssues, setComparedIssues] = useState('');
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [myIssues, setMyIssues] = useLocalStorage('myOwnIssues', []);
  const [paginationUrls, setPaginationUrls] = useState('');
  const [selectedProject, setSelectedProject] = useState('');
  const [pinnedIssues, setPinnedIssues] = useLocalStorage(selectedProject, []);
  const [token, setToken] = useState();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  function loginWithUsernameAndPassword(credentials) {
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then(response => response.json)
      .then(setToken)
      .then(goBack);
  }

  function loginWithGithubCode(code) {
    fetch('/api/github-login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    })
      .then(res => res.json())
      .then(data => console.log({ data }));
  }

  useEffect(() => {
    getData(selectedProject);
    console.log(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProject, token]);

  return (
    <>
      {/* <Navbar isAuthorized={token} onLogout={logout} /> */}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route
          path="/login"
          element={<LoginPage onLogin={loginWithUsernameAndPassword} />}
        />
        <Route
          path="/oauth/redirect"
          element={<GitHubRedirectPage onLogin={loginWithGithubCode} />}
        />
        <Route path="/profile" element={<ProfilePage />} />
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
          element={<CreateIssueForm handleMyIssues={handleMyIssues} />}
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
                avatarUrl={avatarUrl}
                handleRemoveIssue={handleRemoveIssue}
                myIssue={myIssue}
                myIssues={myIssues}
                pinnedIssues={pinnedIssues}
              />
            }
          />
        ))}
      </Routes>
      <Navigation />
    </>
  );

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

  function loadFromLocal(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.error('Load from local failed', error);
    }
  }

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
        avatar: avatarUrl,
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
      setAvatarUrl(data.avatar_url);
    }
  }

  function handleRepoChange(e) {
    setSelectedProject(e.value);
  }

  function handleRemoveIssue(id) {
    setMyIssues(myIssues.filter(myIssue => myIssue.id !== id));
  }
}
