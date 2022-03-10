import styled from 'styled-components/macro';
import { keyframes } from 'styled-components';
import logo from '../images/arrow-clockwise.svg';
import Issues from '../components/Issues';

export default function Dashboard({ issues, loading, error, togglePin }) {
  return (
    <>
      <Heading>DASHBOARD</Heading>
      {/* Loading state */}
      {loading && (
        <LoadingState>
          {' '}
          <Circle src={logo} width="32" height="32" alt="Loading..." />
        </LoadingState>
      )}
      {/* State after successful fetch */}
      {issues && <Issues issues={issues} togglePin={togglePin} />}
      {/* Error state */}
      {error && (
        <ErrorState>
          Oops, something went wrong. <br />
          Please try again!
        </ErrorState>
      )}
      <Footer>by Daniel Eicher</Footer>
    </>
  );
}

const Heading = styled.h1`
  display: grid;
  place-items: center;
  height: 44px;
  margin: 0;
  font-size: 24px;
  letter-spacing: 3px;
  color: var(--font-color-light);
  background-color: var(--font-color-dark);
`;

const LoadingState = styled.p`
  margin: 100px;
  text-align: center;
  grid-column: 1/-1;
`;

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

const ErrorState = styled.p`
  margin: 100px;
  text-align: center;
  grid-column: 1/-1;
  font-size: 16px;
  color: crimson;
`;

const Footer = styled.footer`
  color: gray;
  text-align: center;
`;
