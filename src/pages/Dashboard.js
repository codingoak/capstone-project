import styled from 'styled-components/macro';
import { keyframes } from 'styled-components';
import arrowCircleIcon from '../images/arrow-clockwise.svg';
import Issues from '../components/Issues';
import Button from '../components/Button';

export default function Dashboard({
  savedIssues,
  isLoading,
  hasError,
  togglePin,
  GetFetch,
  selectedProject,
}) {
  return (
    <main>
      {isLoading && (
        <LoadingContainer>
          <Circle
            src={arrowCircleIcon}
            width="32"
            height="32"
            alt="Loading..."
          />
        </LoadingContainer>
      )}
      {savedIssues && !hasError && (
        <Issues savedIssues={savedIssues} togglePin={togglePin} />
      )}
      {hasError && (
        <ErrorContainer>
          <ErrorState>Oops, something went wrong</ErrorState>
          <Button handleClick={() => GetFetch(selectedProject)}>
            TRY AGAIN
          </Button>
        </ErrorContainer>
      )}
    </main>
  );
}

const LoadingContainer = styled.div`
  margin: 100px;
  text-align: center;
  grid-column: 1/-1;
  height: 70vh;
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
  height: 70vh;
`;

const ErrorState = styled.p`
  font-size: 16px;
  color: crimson;
`;
