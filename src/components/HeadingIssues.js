import styled from 'styled-components/macro';

export default function HeadingIssues() {
  return (
    <HeadingWrapper>
      <HeadingTitle>Title</HeadingTitle>
      <HeadingState>State</HeadingState>
    </HeadingWrapper>
  );
}

const HeadingWrapper = styled.section`
  display: grid;
  grid-template-columns: 10px 1fr 52px 32px 10px 10px;
  margin-bottom: -15px;
`;

const HeadingTitle = styled.h2`
  border-bottom: 1px solid var(--border-color-dark);
  grid-column: 2/3;
  letter-spacing: 2px;
  padding-left: 10px;
`;

const HeadingState = styled.h2`
  border-bottom: 1px solid var(--border-color-dark);
  grid-column: 3/6;
  letter-spacing: 2px;
`;
