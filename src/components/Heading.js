import styled from 'styled-components/macro';

export default function Heading({ title }) {
  return (
    <>
      <Header>{title}</Header>
    </>
  );
}

const Header = styled.h1`
  display: grid;
  place-items: center;
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 44px;
  margin: 0;
  font-size: 24px;
  letter-spacing: 3px;
  color: var(--font-color-light);
  background: linear-gradient(var(--bg-color-dark), #144e74);
`;
