import { keyframes } from 'styled-components';
import styled from 'styled-components';
import logo from '../images/arrow-clockwise.svg';

function LoadingAnimation() {
  return (
    <>
      <Circle src={logo} width="32" height="32" alt="Loading..." />
    </>
  );
}

export default LoadingAnimation;

const TurnAnimation = keyframes`
  from { transform: rotate(-360deg); }
  to { transform: rotate(0deg); }
`;

const Circle = styled.img`
  width: 32px;
  height: 32px;

  /* Animation */
  animation: ${TurnAnimation} 1s ease infinite;
`;
