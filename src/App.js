import styled from 'styled-components';
import Dashboard from './pages/Dashboard';
import useFetch from './hooks/useFetch';

function App() {
  const { issues, loading, error } = useFetch(
    'https://api.github.com/repos/reactjs/reactjs.org/issues'
  );

  return (
    <Container className="App">
      <Dashboard issues={issues} loading={loading} error={error} />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: grid;
  grid-template-rows: 44px 1fr repeat(30, 60px);
  grid-template-columns: 10px 1fr 60px 10px;
`;
