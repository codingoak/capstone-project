import Dashboard from './pages/Dashboard';
import useFetch from './hooks/useFetch';

function App() {
  const { issues, loading, error } = useFetch(
    'https://api.github.com/repos/reactjs/reactjs.org/issues'
  );

  return (
    <div className="App">
      <Dashboard issues={issues} loading={loading} error={error} />
    </div>
  );
}

export default App;
