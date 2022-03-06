import { keyframes } from 'styled-components';
import styled from 'styled-components';

function LoadingAnimation() {
  return (
    <Wrapper>
      <Circle
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="#0b2b40"
        viewBox="0 0 16 16"
        alt="Loading..."
      >
        <path
          fillRule="evenodd"
          d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
        />
        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
      </Circle>
    </Wrapper>
  );
}

export default LoadingAnimation;

const Wrapper = styled.span`
  display: flex;
  justify-content: center;
`;

const TurnAnimation = keyframes`
  from { transform: rotate(-360deg); }
  to { transform: rotate(0deg); }
`;

const Circle = styled.svg`
  display: flex;
  width: 32px;
  height: 32px;

  /* Animation */
  animation: ${TurnAnimation} 1s ease infinite;
`;
