import styled from 'styled-components/macro';

export default function ListHeading() {
  return (
    <ListHeadingText>
      <span>Title</span>
      <span>State</span>
    </ListHeadingText>
  );
}

const ListHeadingText = styled.h2`
  display: flex;
  justify-content: space-between;
  font-size: 1px;
  padding: 0 10px;
  margin: 25px 10px -15px;
  font-size: 18px;
  letter-spacing: 2px;
  border-bottom: 1px solid #0b2b40;
`;
