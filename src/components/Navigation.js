import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <Navbar>
      <Link to="/" aria-label="home">
        <svg width="34" height="34" fill="#EDF8FF" viewBox="0 0 16 16">
          <title>Home</title>
          <path
            fillRule="evenodd"
            d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
          />
          <path
            fillRule="evenodd"
            d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
          />
        </svg>
      </Link>
      <Link to={'createissueform'} aria-label="create-issue">
        <svg width="30" height="30" fill="#EDF8FF" viewBox="0 0 16 16">
          <title>Create Issue</title>
          <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
        </svg>
      </Link>
      <Link to="myissues" aria-label="my-issues">
        <svg width="30" height="30" fill="#EDF8FF" viewBox="0 0 16 16">
          <title>My Issues</title>
          <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z" />
          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1ZM10 8a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V8Zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm4-3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z" />
        </svg>
      </Link>
      <Bottom />
    </Navbar>
  );
}

const Navbar = styled.nav`
  height: 48px;
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;
  color: var(--font-color-light);
`;

const Link = styled(NavLink)`
  box-sizing: content-box;
  width: 33.333%;
  border-radius: 10px 10px 0 0;
  display: grid;
  place-items: center;
  background: linear-gradient(#144e74, var(--bg-color-dark));
  z-index: 2;

  &.active {
    background-color: var(--bg-color-dark);
    transform: translateY(-8px);
  }
`;

const Bottom = styled.div`
  width: 100vw;
  height: 36px;
  position: absolute;
  bottom: 0px;
  background: var(--bg-color-dark);
  z-index: 1;
`;
