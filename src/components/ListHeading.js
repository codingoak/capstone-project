import styled from 'styled-components/macro';

export default function ListHeading() {
  return (
    <>
      <Title>Title</Title>
      <State>State</State>
    </>
  );
}

const Title = styled.h2`
  grid-column: 2;
  font-size: 18px;
  letter-spacing: 2px;
  padding: 0 10px;
  border-bottom: 1px solid #0b2b40;
  margin-bottom: -1px;
`;

const State = styled.h2`
  grid-column: 3;
  font-size: 18px;
  letter-spacing: 2px;
  border-bottom: 1px solid #0b2b40;
  margin-bottom: -1px;
`;
