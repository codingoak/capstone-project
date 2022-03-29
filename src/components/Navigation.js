import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

import NavOptions from './NavOptions';

export default function Navigation() {
  return (
    <footer>
      <Navbar
        animate={{ y: 1 }}
        transition={{ duration: 0.5 }}
        initial={{ y: 48 }}
      >
        {NavOptions.map(navLink => {
          return (
            <Link
              to={navLink.to}
              aria-label={navLink.label}
              key={navLink.label}
            >
              {navLink.icon}
            </Link>
          );
        })}
        <Bottom />
      </Navbar>
    </footer>
  );
}

const Bottom = styled.div`
  background: var(--bg-color-dark);
  bottom: 0px;
  height: 36px;
  position: absolute;
  width: 100%;
  z-index: 1;
`;

const Link = styled(NavLink)`
  background: linear-gradient(#144e74, var(--bg-color-dark));
  border-radius: 10px 10px 0 0;
  display: grid;
  place-items: center;
  z-index: 2;
  &.active {
    background-color: var(--bg-color-dark);
    transform: translateY(-8px);
  }
`;

const Navbar = styled(motion.nav)`
  bottom: 0;
  color: var(--font-color-light);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 48px;
  position: fixed;
  width: 100%;
`;
