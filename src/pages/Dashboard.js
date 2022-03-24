import styled from 'styled-components/macro';
import { keyframes } from 'styled-components';
import FetchedIssues from './FetchedIssues';
import { ButtonPrimary } from '../components/Button';

export default function Dashboard({
  savedIssues,
  isLoading,
  hasError,
  togglePin,
  GetData,
  selectedProject,
}) {
  return (
    <>
      {isLoading && (
        <LoadingContainer>
          <Circle
            role="img"
            aria-label="Rotating circular arrow"
            width="32"
            height="32"
            fill="#0b2b40"
            viewBox="0 0 16 16"
          >
            <title>Loading...</title>
            <path
              fillRule="evenodd"
              d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
            />
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
          </Circle>
        </LoadingContainer>
      )}
      {savedIssues && !isLoading && !hasError && (
        <FetchedIssues savedIssues={savedIssues} togglePin={togglePin} />
      )}
      {hasError && (
        <ErrorContainer>
          <ErrorState>Oops, something went wrong</ErrorState>
          <ButtonPrimary
            children={'TRY AGAIN'}
            onClick={() => GetData(selectedProject)}
          />
        </ErrorContainer>
      )}
    </>
  );
}

const LoadingContainer = styled.main`
  margin: 100px;
  text-align: center;
  grid-column: 1/-1;
  height: 70vh;
`;

const TurnAnimation = keyframes`
  from { transform: rotate(-360deg); }
  to { transform: rotate(0deg); }
`;

const Circle = styled.svg`
  width: 32px;
  height: 32px;

  /* Animation */
  animation: ${TurnAnimation} 1s ease infinite;
`;

const ErrorContainer = styled.main`
  display: grid;
  place-items: center;
  height: 70vh;
`;

const ErrorState = styled.p`
  color: crimson;
`;
