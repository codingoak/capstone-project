import { motion } from 'framer-motion';
import styled from 'styled-components/macro';

export default function HeadingMain({ title }) {
  return (
    <StyledHeader>
      <Header
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.75 }}
      >
        {title}
      </Header>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background: linear-gradient(var(--bg-color-dark), #144e74);
  color: var(--font-color-light);
`;

const Header = styled(motion.h1)`
  display: grid;
  font-size: 24px;
  height: 44px;
  letter-spacing: 3px;
  margin: 0 0 20px 0;
  place-items: center;
  top: 0;
  width: 100%;
`;
