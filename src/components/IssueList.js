import styled from 'styled-components/macro';

function IssueList({ issues }) {
  return (
    <Wrapper>
      {issues.map(issue => (
        <Issue key={issue.id} title={issue.title} state={issue.state}>
          <Title>{issue.title}</Title>
          <State>{issue.state}</State>
        </Issue>
      ))}
    </Wrapper>
  );
}

export default IssueList;

const Issue = styled.p`
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

const Wrapper = styled.section`
  padding: 0 10px;
`;

const Title = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 65vw;
`;

const State = styled.span``;
