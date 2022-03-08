import styled from 'styled-components/macro';

function Issues({ issues }) {
  return (
    <>
      {issues.map(issue => (
        <Wrapper key={issue.id} title={issue.title} state={issue.state}>
          <Title>{issue.title}</Title>
          <State>{issue.state}</State>
        </Wrapper>
      ))}
    </>
  );
}

export default Issues;

const Wrapper = styled.div`
  grid-column: 2/4;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 60px;
  padding: 0 10px;

  :nth-of-type(2n) {
    background-color: #d8e4eb;
    border-radius: 5px;
  }
`;

const Title = styled.p`
  grid-column: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 65vw;
`;

const State = styled.p`
  grid-column: 2;
`;
