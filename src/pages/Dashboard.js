import styled from 'styled-components/macro';
import useFetch from '../hooks/useFetch.js';
import LoadingAnimation from '../components/LoadingAnimation.js';

function Dashboard() {
  const { issues, loading } = useFetch(
    'https://api.github.com/repos/reactjs/reactjs.org/issues'
  );
  return (
    <>
      <Heading>DASHBOARD</Heading>

      {loading ? (
        <LoadingState>{LoadingAnimation()}</LoadingState>
      ) : (
        <ListHeading>
          <span>Title</span>
          <span>State</span>
        </ListHeading>
      )}

      <IssueList role="list">
        {issues.map(issue => (
          <Issue key={issue.id}>
            <Title>{issue.title}</Title>
            <State>{issue.state}</State>
          </Issue>
        ))}
      </IssueList>

      <Footer>
        <small>&copy; 2022 Daniel Eicher</small>
      </Footer>
    </>
  );
}

export default Dashboard;

const Heading = styled.h1`
  display: grid;
  place-items: center;
  height: 44px;
  padding: 0;
  margin: 0;
  font-size: 24px;
  letter-spacing: 3px;
  color: #eee;
  background-color: #0b2b40;
`;

const ListHeading = styled.h2`
  display: flex;
  justify-content: space-between;
  font-size: 1px;
  padding: 0 10px;
  margin: 25px 10px -15px;
  font-size: 18px;
  letter-spacing: 2px;
  border-bottom: 1px solid #0b2b40;
`;

const LoadingState = styled.p`
  margin: 50px auto;
  text-align: center;
  font-size: 24px;
  letter-spacing: 2px;
  color: green;
`;

const IssueList = styled.ul`
  list-style: none;
  padding: 0 10px;
`;

const Issue = styled.li`
  display: flex;
  justify-content: space-between;
  height: 60px;
  place-items: center;
  padding: 0 10px;

  :nth-of-type(2n) {
    background-color: #d8e4eb;
    border-radius: 5px;
  }
`;

const Title = styled.p`
  display: inline;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 65vw;
`;

const State = styled.p`
  display: inline;
`;

const Footer = styled.footer`
  margin-top: 3rem;
  color: gray;
  text-align: center;
`;
