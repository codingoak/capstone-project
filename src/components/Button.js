import styled from 'styled-components';

export default function Button({ onClick, children }) {
  return <StandardButton onClick={onClick}>{children}</StandardButton>;
}

const StandardButton = styled.button`
  grid-column: 4;
  text-align: center;
  width: 60px;
  height: 60px;
  background: none;
  border: none;
`;
