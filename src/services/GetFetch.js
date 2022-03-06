import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function GetFetch() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.github.com/repos/reactjs/reactjs.org/issues')
      .then(res => {
        console.log(res);
        setIssues(res.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <IssueList role="list">
      {issues.map(issue => (
        <Issue key={issue.id}>
          <Title>{issue.title}</Title>
          <State>{issue.state}</State>
        </Issue>
      ))}
    </IssueList>
  );
}

export default GetFetch;

const IssueList = styled.ul`
  list-style: none;
  padding: 0 10px;
`;

const Issue = styled.li`
  display: flex;
  justify-content: space-between;

  :nth-of-type(2n) {
    background-color: #d8e4eb;
  }
`;

const Title = styled.p`
  display: inline;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 250px;
`;

const State = styled.p`
  display: inline;
`;
