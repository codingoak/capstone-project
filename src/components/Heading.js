import styled from 'styled-components/macro';

export default function Heading({ children }) {
  return (
    <>
      <Header>{children}</Header>
    </>
  );
}

const Header = styled.h1`
  display: grid;
  place-items: center;
  height: 44px;
  margin: 0;
  font-size: 24px;
  letter-spacing: 3px;
  color: var(--font-color-light);
  background-color: var(--font-color-dark);
`;
