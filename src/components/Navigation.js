import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import homeIcon from '../images/home.svg';
import myIssuesIcon from '../images/clipboard.svg';
import createIcon from '../images/pencil.svg';

export default function Navigation() {
  return (
    <Navbar>
      <Link to="/">
        <img src={homeIcon} alt="back" width="34" height="34" />
      </Link>
      <Link to={'add'}>
        <img src={createIcon} alt="back" width="30" height="30" />
      </Link>
      <Link to="myissues">
        <img src={myIssuesIcon} alt="back" width="30" height="30" />
      </Link>
    </Navbar>
  );
}

const Navbar = styled.nav`
  height: 48px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100vw;
  color: var(--font-color-light);
  background-color: var(--font-color-dark);
`;

const Link = styled(NavLink)`
  &:link,
  &:visited,
  &:hover,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;
