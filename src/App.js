import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import CreateIssueForm from './pages/CreateIssueForm';
import Dashboard from './pages/Dashboard';
import FetchedDetails from './pages/FetchedDetails';
import LoginPage from './pages/LoginPage';
import MyIssues from './pages/MyIssues';
import MyIssueDetails from './pages/MyIssueDetails';
import ProfilePage from './pages/ProfilePage';
import useStore, {
  useMyIssues,
  usePinnedIssues,
  useUserdata,
} from './hooks/useStore';

export default function App() {
  const comparedIssues = useStore(state => state.comparedIssues);
  const myIssues = useMyIssues(state => state.myIssues);
  const userdata = useUserdata(state => state.userdata);
  const pinnedIssues = usePinnedIssues(state => state.pinnedIssues);
  const setComparedIssues = useStore(state => state.setComparedIssues);
  const setMyIssues = useMyIssues(state => state.setMyIssues);
  const setPinnedIssues = usePinnedIssues(state => state.setPinnedIssues);

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <>
              <Dashboard sortPins={sortPins} togglePin={togglePin} />
            </>
          }
        />
        <Route path="/profilepage" element={<ProfilePage />} />
        {comparedIssues &&
          comparedIssues.map(comparedIssue => (
            <Route
              key={comparedIssue.id}
              path={`${comparedIssue.id}`}
              element={<FetchedDetails comparedIssue={comparedIssue} />}
            />
          ))}
        <Route path="createissueform" element={<CreateIssueForm />} />
        <Route
          path="myissues"
          element={<MyIssues sortPins={sortPins} togglePin={togglePin} />}
        />
        {myIssues.map(myIssue => (
          <Route
            key={myIssue.id}
            path={`${myIssue.id}`}
            element={
              <MyIssueDetails avatar={userdata?.avatar_url} myIssue={myIssue} />
            }
          />
        ))}
      </Routes>
      <Navigation />
    </>
  );

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
