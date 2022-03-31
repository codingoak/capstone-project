import { keyframes } from 'styled-components/macro';
import styled from 'styled-components/macro';

import { ButtonPrimary } from '../components/Button';
import FetchedIssues from '../components/FetchedIssues';
import HeadingMain from '../components/HeadingMain';
import Selection from '../components/Selection';
import TopicOverview from '../components/TopicOverview';

export default function Dashboard({
  comparedIssues,
  getData,
  handleRepoChange,
  hasError,
  isLoading,
  selectedProject,
  togglePin,
}) {
  return (
    <>
      <HeadingMain title="DASHBOARD" />
      <TopicContainer>
        <Selection
          handleRepoChange={handleRepoChange}
          selectedProject={selectedProject}
        />
        {selectedProject && <TopicOverview selectedProject={selectedProject} />}
      </TopicContainer>
      {isLoading && (
        <LoadingContainer>
          <Circle
            aria-label="Rotating circular arrow"
            fill="#0b2b40"
            height="32"
            role="img"
            viewBox="0 0 16 16"
            width="32"
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
      {!selectedProject && (
        <main>
          <EmptyState>
            <i>Select an option from the box above.</i>
          </EmptyState>
        </main>
      )}
      {comparedIssues && !isLoading && !hasError && (
        <>
          <FetchedIssues
            comparedIssues={comparedIssues}
            togglePin={togglePin}
          />
        </>
      )}
      {hasError && (
        <ErrorContainer>
          <ErrorState>Oops, something went wrong</ErrorState>
          <ButtonPrimary
            children={'TRY AGAIN'}
            onClick={() => getData(selectedProject)}
          />
        </ErrorContainer>
      )}
    </>
  );
}

const TurnAnimation = keyframes`
    from { transform: rotate(-360deg); }
    to { transform: rotate(0deg); }
  `;

const Circle = styled.svg`
  animation: ${TurnAnimation} 1s ease infinite;
  height: 32px;
  width: 32px;
`;

const EmptyState = styled.p`
  padding-top: 70px;
  margin: 10px;
  text-align: center;
`;

const ErrorContainer = styled.main`
  display: grid;
  height: 70vh;
  place-items: center;
`;

const ErrorState = styled.p`
  color: crimson;
`;

const LoadingContainer = styled.main`
  grid-column: 1/-1;
  height: 70vh;
  margin: 100px;
  text-align: center;
`;

const TopicContainer = styled.section`
  background: linear-gradient(#144e74, var(--bg-color-dark), #144e74);
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px 10px 0;
  padding: 5px 0;
`;
