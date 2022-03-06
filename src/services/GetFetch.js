import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import LoadingAnimation from '../components/LoadingAnimation.js';

function GetFetch() {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const fetchData = async () => {
        const response = await axios.get(
          'https://api.github.com/repos/reactjs/reactjs.org/issues'
        );
        setIssues(response.data);
        setLoading(false);
      };
      fetchData();
    }, 2000);
  }, []);

  return (
    <>
      {loading && <LoadingState>{LoadingAnimation()}</LoadingState>}
      <IssueList role="list">
        {issues.map(issue => (
          <Issue key={issue.id}>
            <Title>{issue.title}</Title>
            <State>{issue.state}</State>
          </Issue>
        ))}
      </IssueList>
    </>
  );
}

export default GetFetch;

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
