import styled from 'styled-components/macro';

function Heading() {
  return <HeadingText>DASHBOARD</HeadingText>;
}

export default Heading;

const HeadingText = styled.h1`
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
