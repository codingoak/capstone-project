import styled from 'styled-components/macro';

export default function IssueHeading() {
  return (
    <Wrapper>
      <IssueHeaderTitle>Title</IssueHeaderTitle>
      <IssueHeaderState>State</IssueHeaderState>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 10px 1fr 60px 60px 10px 10px;
`;

const IssueHeaderTitle = styled.h2`
  grid-column: 2/3;
  font-size: 18px;
  letter-spacing: 2px;
  padding-left: 10px;
  border-bottom: 1px solid #0b2b40;
`;

const IssueHeaderState = styled.h2`
  grid-column: 3/6;
  font-size: 18px;
  letter-spacing: 2px;
  border-bottom: 1px solid #0b2b40;
`;
