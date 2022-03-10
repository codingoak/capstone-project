import styled from 'styled-components/macro';
import { keyframes } from 'styled-components';
import logo from '../images/arrow-clockwise.svg';
import Issues from '../components/Issues';
import Button from '../components/Button';

export default function Dashboard({
  savedIssues,
  isLoading,
  hasError,
  setHasError,
  togglePin,
  GetFetch,
}) {
  return (
    <>
      <Heading>DASHBOARD</Heading>
      {isLoading && (
        <LoadingContainer>
          <Circle src={logo} width="32" height="32" alt="Loading..." />
        </LoadingContainer>
      )}
      {!isLoading && !hasError && savedIssues && (
        <Issues savedIssues={savedIssues} togglePin={togglePin} />
      )}
      {hasError && (
        <ErrorContainer>
          <ErrorState>Oops, something went wrong</ErrorState>
          <Button handleClick={resetError}>TRY AGAIN</Button>
        </ErrorContainer>
      )}
      <Footer>by Daniel Eicher</Footer>
    </>
  );

  function resetError() {
    GetFetch('https://api.github.com/repos/reactjs/reactjs.org/issues');
  }
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

const LoadingContainer = styled.div`
  margin: 100px;
  text-align: center;
  grid-column: 1/-1;
  height: 100vh;
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

const ErrorContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;

const ErrorState = styled.p`
  font-size: 16px;
  color: crimson;
`;

// const ResetButton = styled.button`
//   display: flex;
//   justify-self: center;

//   letter-spacing: 1px;
//   font-size: 16px;
//   font-weight: bold;
//   color: var(--font-color-light);
//   background-color: var(--bg-color-dark);
//   padding: 12px 18px;
//   border: none;
//   border-radius: 21px;
//   box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
//     rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
//   opacity: 0.8;

//   :hover {
//     cursor: pointer;

//     opacity: 1;
//     transition: all 0.15s;
//   }

//   :active {
//     transform: scale(0.95);
//   }
// `;

const Footer = styled.footer`
  color: gray;
  text-align: center;
`;
