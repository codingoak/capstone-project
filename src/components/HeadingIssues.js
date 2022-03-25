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
  margin-bottom: -15px;
  display: grid;
  grid-template-columns: 10px 1fr 52px 32px 10px 10px;
`;

const HeadingTitle = styled.h2`
  grid-column: 2/3;
  letter-spacing: 2px;
  padding-left: 10px;
  border-bottom: 1px solid var(--border-color-dark);
`;

const HeadingState = styled.h2`
  grid-column: 3/6;
  letter-spacing: 2px;
  border-bottom: 1px solid var(--border-color-dark);
`;
