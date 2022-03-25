import styled from 'styled-components/macro';

export default function HeadingMain({ title }) {
  return (
    <header>
      <Header>{title}</Header>
    </header>
  );
}

const Header = styled.h1`
  display: grid;
  place-items: center;

  top: 0;
  width: 100%;
  height: 44px;
  margin: 0 0 10px 0;
  font-size: 24px;
  letter-spacing: 3px;
  color: var(--font-color-light);
  background: linear-gradient(var(--bg-color-dark), #144e74);
`;
