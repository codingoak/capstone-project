import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import CreateIssueForm from './pages/CreateIssueForm';
import Dashboard from './pages/Dashboard';
import FetchedDetails from './pages/FetchedDetails';
import LoginPage from './pages/LoginPage';
import MyIssues from './pages/MyIssues';
import MyIssueDetails from './pages/MyIssueDetails';
import ProfilePage from './pages/ProfilePage';
import useStore, { useMyIssues, useUserdata } from './hooks/useStore';

export default function App() {
  const comparedIssues = useStore(state => state.comparedIssues);
  const myIssues = useMyIssues(state => state.myIssues);
  const userdata = useUserdata(state => state.userdata);

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
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
        <Route path="myissues" element={<MyIssues />} />
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
}
