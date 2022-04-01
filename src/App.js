import { Routes, Route, useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';

import Navigation from './components/Navigation';
import CreateIssueForm from './pages/CreateIssueForm';
import Dashboard from './pages/Dashboard';
import FetchedDetails from './pages/FetchedDetails';
import LoginPage from './pages/LoginPage';
import MyIssues from './pages/MyIssues';
import MyIssueDetails from './pages/MyIssueDetails';
import ProfilePage from './pages/ProfilePage';
import useLocalStorage from './hooks/useLocalStorage';
import useStore from './hooks/useStore';

export default function App() {
  const comparedIssues = useStore(state => state.comparedIssues);
  const setComparedIssues = useStore(state => state.setComparedIssues);
  const userDataStatus = useStore(state => state.userDataStatus);
  const setUserDataStatus = useStore(state => state.setUserDataStatus);
  const username = useStore(state => state.username);
  const setUsername = useStore(state => state.setUsername);
  const [myIssues, setMyIssues] = useLocalStorage('my-issues', []);
  const [pinnedIssues, setPinnedIssues] = useLocalStorage('fetched-issues', []);
  const [userdata, setUserdata] = useLocalStorage('userdata', []);
  const navigate = useNavigate();

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
          path="/dashboard"
          element={
            <>
              <Dashboard sortPins={sortPins} togglePin={togglePin} />
            </>
          }
        />
        <Route
          path="/profilepage"
          element={
            <ProfilePage handleLogout={handleLogout} userdata={userdata} />
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
                avatar={userdata?.avatar_url}
                handleEditIssue={handleEditIssue}
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

  function handleEditIssue(prevIssue) {
    const date = new Date().toLocaleString();
    const editedIssues = myIssues.map(myIssue => {
      if (myIssue.id === prevIssue.id) {
        return {
          ...prevIssue,
          updated_at: date,
        };
      } else {
        return myIssue;
      }
    });

    setMyIssues(editedIssues);
  }

  function handleRemoveIssue(id) {
    setMyIssues(myIssues.filter(myIssue => myIssue.id !== id));
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

    // set to compared(fetched) or set to my issues
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
